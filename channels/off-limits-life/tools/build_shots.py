"""Compact shot-list text -> src/data/<id>.json (engine IX2 schema).
Usage: python3 tools/build_shots.py scripts/IX003-shots.txt src/data/ix003.json  (IX003, IX006, ...)
Format:
  !title ...   !asof ...   !world biosphere
  ## chapterId | KICKER / TITLE (blank for no card) | HUD | CHIP | tod [| gain_db]
  Narration line :: v=view you=spot plane=state tod=night fx=wind st=BIG;small d={"type":"big",...}
"""
import json, re, sys
src, dst = sys.argv[1], sys.argv[2]
out = {'title': '', 'asof': '', 'world': 'southpole', 'chapters': []}
for raw in open(src, encoding='utf-8'):
    line = raw.rstrip('\n')
    if not line.strip() or line.startswith('#!'):
        continue
    if line.startswith('!'):
        k, _, v = line[1:].partition(' ')
        out[k] = v.strip()
        continue
    if line.startswith('## '):
        parts = [p.strip() for p in line[3:].split('|')]
        ch = {'id': parts[0], 'hud': parts[2], 'chip': parts[3], 'tod': parts[4], 'shots': []}
        if parts[1]:
            ch['card'] = [x.strip() for x in parts[1].split('/', 1)]
        if len(parts) > 5 and parts[5]:
            ch['gain'] = float(parts[5])
        out['chapters'].append(ch)
        continue
    text, _, meta = line.partition('::')
    sh = {'s': text.strip()}
    meta = meta.strip()
    if ' d=' in ' ' + meta:  # not 'tod='
        i = (' ' + meta).index(' d=')
        sh['d'] = json.loads(meta[i + 2:])
        meta = meta[:i]
    for kv in meta.split():
        k, _, v = kv.partition('=')
        if k == 'st':
            sh['st'] = [x.replace('_', ' ') for x in v.split(';')]
        else:
            sh[k] = v
    out['chapters'][-1]['shots'].append(sh)
json.dump(out, open(dst, 'w'), indent=1, ensure_ascii=False)
n = sum(len(c['shots']) for c in out['chapters']); w = sum(len(s['s'].split()) for c in out['chapters'] for s in c['shots'])
print(f"{len(out['chapters'])} chapters, {n} lines, {w} words, est {w/2.6/60:.1f} min")
