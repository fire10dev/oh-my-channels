#!/bin/sh
# Short end to end: TTS -> bed -> render -> 2-pass loudnorm -> out/upload/Short-<ID>.mp4. Usage: tools/make_short.sh sx-ix007-window TRACK.mp3
set -e
ID=$1; TRACK=$2; mkdir -p public/$ID
../../shared/tts/.venv/bin/python tools/tts_shots.py src/data/$ID.json $ID | tail -1
T=$(python3 -c "import json;print(json.load(open('src/data/$ID.timeline.json'))['total'])")
python3 tools/source_bed.py "$TRACK" public/$ID/bed.mp3 "$T" > /dev/null && python3 tools/make_bed.py $ID public/$ID/bed.mp3 > /dev/null
npx remotion render src/index.ts $ID out/sx/$ID-raw.mp4 --log=error
tools/loudnorm2.sh out/sx/$ID-raw.mp4 out/sx/$ID-raw.mp4 out/upload/Short-$ID.mp4 && echo out/upload/Short-$ID.mp4
