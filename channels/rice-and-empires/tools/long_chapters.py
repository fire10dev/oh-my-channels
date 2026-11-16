"""Print YouTube chapter timestamps for a LongVideo (same timing rules as shorts/src/LongVideo.tsx: PAD 0.45 s, card 3.4 s).
Usage: python3 tools/long_chapters.py l003"""
import json, sys
vid = sys.argv[1]
d = json.load(open(f'shorts/src/{vid}.json')); t = json.load(open(f'shorts/src/{vid}.timeline.json'))
at, seen, out = 0.0, set(), []
for r, v in zip(d['rows'], t):
    if r['cardBefore'] and r['cardBefore'] != 'end':
        at_c = at; at += 3.4
    else:
        at_c = at
    if r['ch'] not in seen:
        seen.add(r['ch']); out.append((0 if not out else at_c, d['chapters'][r['ch']]))
    at += v['seconds'] + 0.45
    if r['cardAfter']:
        at += 5 if r['cardAfter'] == 'end' else 3.4
for s, title in out:
    print(f'{int(s // 60)}:{int(s % 60):02d} {title}')
print(f'# total {int(at // 60)}:{int(at % 60):02d}')
