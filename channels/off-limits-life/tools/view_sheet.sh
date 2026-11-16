#!/bin/sh
# One still per distinct (view, plane) of a long, tiled into out/sx/views-<vid>.jpg. Usage: tools/view_sheet.sh COMP VID
COMP=$1; VID=$2; D=out/sx/views-$VID; mkdir -p $D; rm -f $D/*.png
python3 - "$VID" > $D/frames.txt <<'PY'
import json, sys
v = sys.argv[1]; d = json.load(open(f'src/data/{v}.json')); t = json.load(open(f'src/data/{v}.timeline.json')); seen = set()
for g in t['segs']:
    if g['type'] != 'shot': continue
    sh = d['chapters'][g['ch']]['shots'][g['i']]
    k = (sh.get('v'), sh.get('plane'), 'd' in sh)
    if k in seen: continue
    seen.add(k); print(round((g['start'] + g['dur'] * 0.6) * 30))
PY
for f in $(cat $D/frames.txt); do npx remotion still src/index.ts "$COMP" "$D/$(printf %05d $f).png" --frame=$f --scale=0.25 >/dev/null 2>&1; done
ffmpeg -v error -y -pattern_type glob -i "$D/*.png" -vf "tile=6x$(( ($(ls $D/*.png | wc -l) + 5) / 6 ))" -frames:v 1 out/sx/views-$VID.jpg && echo out/sx/views-$VID.jpg
