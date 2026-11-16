#!/bin/sh
# Redo only audio (chapter dynamics + loudnorm) and the gate on an existing raw render. Usage: tools/remix_long.sh VID NAME
VID=$1; NAME=$2; ID=$(echo "$NAME" | cut -d- -f1)
python3 tools/chapter_dynamics.py "$VID" "out/$ID-audio.wav" "out/$ID-audio-dyn.wav"
tools/loudnorm2.sh "out/$ID-raw.mp4" "out/$ID-audio-dyn.wav" "out/$NAME.mp4"
uv run --with opencv-python-headless --with numpy python tools/frame_teardown.py "out/$NAME.mp4" "out/teardown/$ID" > /dev/null 2>&1
python3 - "$ID" <<'PY'
import json, sys
i = sys.argv[1]; s = json.load(open(f'out/teardown/{i}/summary.json')); b = json.load(open('out/teardown/ref-band.json'))
rows = [[k, s.get(k, s['audio'].get(k)), v[0], v[1]] for k, v in b.items() if isinstance(v, list)]
rows = [r + ['INFO' if r[0] == 'pct_pan_over_100px' else 'OK' if r[2] <= r[1] <= r[3] else 'OUT'] for r in rows if r[1] is not None]
print('seconds', s['seconds']); [print(*r) for r in rows]; print(sum(r[4] == 'OK' for r in rows), '/', sum(r[4] != 'INFO' for r in rows))
PY
