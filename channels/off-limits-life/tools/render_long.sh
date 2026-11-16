#!/bin/sh
# Render a long + chapter dynamics + 2-pass loudnorm + teardown gate. Usage: tools/render_long.sh COMP VID OUTNAME
# e.g. tools/render_long.sh IX003-cruise-crew ix003 IX003-cruise-crew
set -e
COMP=$1; VID=$2; NAME=$3; ID=$(echo "$NAME" | cut -d- -f1)
npx remotion render src/index.ts "$COMP" "out/$ID-raw.mp4" --log=error > "out/render-$VID.log" 2>&1
ffmpeg -v error -y -i "out/$ID-raw.mp4" -vn -ar 48000 "out/$ID-audio.wav"
python3 tools/chapter_dynamics.py "$VID" "out/$ID-audio.wav" "out/$ID-audio-dyn.wav"
tools/loudnorm2.sh "out/$ID-raw.mp4" "out/$ID-audio-dyn.wav" "out/$NAME.mp4"
uv run --with opencv-python-headless --with numpy python tools/frame_teardown.py "out/$NAME.mp4" "out/teardown/$ID" --sheet > /dev/null 2>&1
python3 - "$ID" <<'PY'
import json, sys
i = sys.argv[1]
s = json.load(open(f'out/teardown/{i}/summary.json')); b = json.load(open('out/teardown/ref-band.json'))
rows = []
for k, v in b.items():
    x = s.get(k, s['audio'].get(k)) if isinstance(v, list) else None
    if x is not None:
        # pan: v2 estimators disagree on the refs (phase 7-15% vs min 0.4-3.8%), so it is reported, not gated
        rows.append([k, x, v[0], v[1], 'INFO' if k == 'pct_pan_over_100px' else 'OK' if v[0] <= x <= v[1] else 'OUT'])
json.dump({'summary': s, 'band': b, 'rows': rows}, open(f'out/teardown/{i}-gate.json', 'w'), indent=1)
print('seconds', s['seconds']); [print(*r) for r in rows]; print(sum(r[4] == 'OK' for r in rows), '/', sum(r[4] != 'INFO' for r in rows))
PY
