"""Replace narration rows (EN col 3, VI col 5) in a script md. Usage: python3 tools/apply_rows.py <md> <json {rowid: [EN, VI]}> [changelog text]"""
import json, re, sys, pathlib
p = pathlib.Path(sys.argv[1]); t = p.read_text(); R = json.loads(sys.argv[2])
L = t.split('\n')
for i, l in enumerate(L):
    m = re.match(r'^\| (hook|\d+|outro) \| ', l)
    if m and m.group(1) in R:
        c = [x.strip() for x in l.strip().strip('|').split('|')]; c[2], c[4] = R.pop(m.group(1)); L[i] = '| ' + ' | '.join(c) + ' |'
assert not R, f'rows not found: {list(R)}'
t = '\n'.join(L)
if len(sys.argv) > 3: t = re.sub(r'^(Changelog: .*)$', lambda m: m.group(1) + ' · ' + sys.argv[3], t, count=1, flags=re.M)
p.write_text(t); print('ok')
