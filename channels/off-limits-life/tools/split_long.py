"""Split narration lines longer than MAX s (by the TTS timeline) at a natural pause into two shots, so shot median fits the
reference band. First half gets another view from the same chapter (not the neighbours'); second half keeps the original meta.
Usage: python3 tools/split_long.py scripts/IX0NN-x.txt ix0NN [MAX=3.2]   (rewrites the .txt; then rebuild + TTS)"""
import json, re, sys
src, vid = sys.argv[1], sys.argv[2]
MAX = float(sys.argv[3]) if len(sys.argv) > 3 else 3.2
d = json.load(open(f'src/data/{vid}.json')); t = json.load(open(f'src/data/{vid}.timeline.json'))
long = {d['chapters'][g['ch']]['shots'][g['i']]['s'] for g in t['segs'] if g['type'] == 'shot' and g['dur'] > MAX}
lines = open(src, encoding='utf-8').read().split('\n')
out, chap_views, n = [], [], 0
for i, line in enumerate(lines):
    if line.startswith('## '):
        chap_views = []
        for l in lines[i + 1:]:
            if l.startswith('## '): break
            m = re.search(r'\bv=(\S+)', l)
            if m and m.group(1) not in chap_views: chap_views.append(m.group(1))
    text, sep, meta = line.partition(' :: ')
    cut = None
    if sep and text.strip() in long:
        for pat in (r', ', r' and ', r' but ', r' so ', r' to '):
            hits = [m.start() for m in re.finditer(pat, text) if 12 < m.start() < len(text) - 12]
            if hits:
                cut = min(hits, key=lambda h: abs(h - len(text) / 2)); break
    if cut is None:
        out.append(line); continue
    a, b = (text[:cut + 1].rstrip(), text[cut + 1:].strip()) if text[cut] == ',' else (text[:cut], text[cut + 1:])
    v = re.search(r'\bv=(\S+)', meta); v = v.group(1) if v else 'wide'
    near = {re.search(r'\bv=(\S+)', x).group(1) for x in (out[-1:] + lines[i + 1:i + 2]) if ' :: ' in x and re.search(r'\bv=(\S+)', x)}
    alt = next((x for x in chap_views if x != v and x not in near), next((x for x in chap_views if x != v), 'wide'))
    tod = re.search(r'\btod=\S+', meta)
    out.append(f"{a} :: v={alt}{' ' + tod.group(0) if tod else ''}"); out.append(f"{b} :: {meta}"); n += 1
open(src, 'w', encoding='utf-8').write('\n'.join(out)); print(n, 'lines split')
