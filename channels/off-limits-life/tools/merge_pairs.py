"""Undo part of split_long.py when shot_p90 falls below the band: give the first half of up to N split pairs the second
half's framing (st removed) so the engine merges them back into one shot. Usage: python3 tools/merge_pairs.py TXT VID [N=10]"""
import json, re, sys
src, vid = sys.argv[1], sys.argv[2]; N = int(sys.argv[3]) if len(sys.argv) > 3 else 10
t = json.load(open(f'src/data/{vid}.timeline.json')); d = json.load(open(f'src/data/{vid}.json'))
dur = {d['chapters'][g['ch']]['shots'][g['i']]['s']: g['dur'] for g in t['segs'] if g['type'] == 'shot'}
L = open(src, encoding='utf-8').read().split('\n'); n = 0
for i in range(len(L) - 1):
    a, sa, ma = L[i].partition(' :: '); b, sb, mb = L[i + 1].partition(' :: ')
    if not (sa and sb) or n >= N or a.rstrip()[-1:] in '.?!' or re.sub(r'\s*tod=\S+', '', ma).strip().count('=') != 1: continue
    if not 3.6 <= dur.get(a.strip(), 0) + dur.get(b.strip(), 0) <= 5.3: continue
    L[i] = f"{a} :: {re.sub(r'\s*st=\S+', '', mb).strip()}"; n += 1
open(src, 'w', encoding='utf-8').write('\n'.join(L)); print(n, 'pairs merged')
