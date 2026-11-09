"""Build shorts/src/<vid>.json for the 16:9 LongVideo composition from a long-video script md.

Usage: python3 tools/long_build.py scripts/L003-*.md l003 tools/say_l003.json
Table rows: | NN | ch | EN narration | claims | shots | VI |
Shots: iNN (new image <vid>/img-NN.jpg) · sN:NN (reused 9:16 image from Short N) · MAP:<state> · TL:<year|full> · CLIP:<n>
       CARD:<n|end> (chapter card, own segment before/after the row) · SRC:<text> (lower-third over the row, not a shot).
Music: optional shorts/src/<vid>.music.json = [{src, fromCh, gain?}] (paths under shorts/public).
Clips: <vid>/clip-<n>.mp4 if present, else the fallback image in CLIP_FALLBACK.
"""
import json, pathlib, re, sys

md, vid = pathlib.Path(sys.argv[1]), sys.argv[2]
subs = json.loads(pathlib.Path(sys.argv[3]).read_text()) if len(sys.argv) > 3 else []
pub = pathlib.Path('shorts/public')
CLIP_FALLBACK = {'1': 's006/img-00.jpg', '2': 's006/img-01.jpg', '3': 's006/img-04.jpg'}

text = md.read_text()
m = re.search(r'^Chapter cards: (.+)$', text, re.M)
chapters = [re.sub(r'^\d+ ', '', c.strip()).strip('"') for c in m.group(1).rstrip('.').split(' · ')]
rows = []
for line in text.split('\n'):
    if not re.match(r'^\| \d\d \| \d \| ', line):
        continue
    c = [x.strip() for x in line.strip().strip('|').split('|')]
    rid, ch, en, shots_s = c[0], int(c[1]), c[2], c[4]
    say = en
    for a, b in subs:
        say = say.replace(a, b)
    shots, src, before, after = [], None, None, None
    toks = [t.strip() for t in shots_s.split(' · ')]
    for j, t in enumerate(toks):
        if t.startswith('SRC:'):
            src = t[4:] + (' · ' + ' · '.join(toks[j + 1:]) if j + 1 < len(toks) else '')
            break
        if t.startswith('CARD:'):
            n = t[5:]
            if j == 0:
                before = n
            else:
                after = n
        elif re.fullmatch(r'i\d\d', t):
            shots.append({'k': 'img', 'src': f'{vid}/img-{t[1:]}.jpg'})
        elif re.fullmatch(r's\d+:\d\d', t):
            n, k = t[1:].split(':')
            shots.append({'k': 'tall', 'src': f's{int(n):03d}/img-{k}.jpg'})
        elif t.startswith('MAP:'):
            shots.append({'k': 'map', 'state': t[4:]})
        elif t.startswith('TL:'):
            shots.append({'k': 'tl', 'year': t[3:]})
        elif t.startswith('CLIP:'):
            n = t[5:]
            f = f'{vid}/clip-{n}.mp4'
            shots.append({'k': 'clip', 'src': f} if (pub / f).exists() else {'k': 'tall', 'src': CLIP_FALLBACK[n]})
        else:
            raise SystemExit(f'row {rid}: unknown shot {t!r}')
    rows.append({'id': rid, 'ch': ch, 'sub': en, 'say': say, 'shots': shots, 'src': src,
                 'cardBefore': before, 'cardAfter': after})

missing = sorted({s['src'] for r in rows for s in r['shots'] if 'src' in s and not (pub / s['src']).exists()})
out = pathlib.Path(f'shorts/src/{vid}.json')
mf = pathlib.Path(f'shorts/src/{vid}.music.json')
music = json.loads(mf.read_text()) if mf.exists() else []
out.write_text(json.dumps({'chapters': chapters, 'rows': rows, 'music': music}, ensure_ascii=False, indent=1))
pathlib.Path(f'shorts/src/{vid}.scenes.json').write_text(
    json.dumps([{'id': r['id'], 'say': r['say']} for r in rows], ensure_ascii=False, indent=1))
print(f"{len(rows)} rows, {sum(len(r['sub'].split()) for r in rows)} words, "
      f"{sum(len(r['shots']) for r in rows)} shots, missing media {len(missing)}" + (f": {missing[:4]}…" if missing else ''))
