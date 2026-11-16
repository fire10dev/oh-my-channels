#!/usr/bin/env bash
# One command per video, terse output (saves agent tokens: 1 tool call instead of ~8).
# Usage: tools/make_short.sh <vid> <out-name> [--tts]
#   vid: s009   out-name: S009-hoi-an   --tts: (re)generate narration from scripts/<VID>-*.md
# Steps: [md2scenes + Kokoro] → import staged images → register → render → loudnorm → contact sheet.
# Prints ≤ 4 lines. Full logs: $TMPDIR/make_short-<vid>.log
set -euo pipefail
cd "$(dirname "$0")/.."
vid=$1; name=$2; ID=$(echo "$vid" | tr a-z A-Z)
log="${TMPDIR:-/tmp}/make_short-$vid.log"; : >"$log"
pub=shorts/public/$vid; mkdir -p "$pub"

if [[ "${3:-}" == --tts ]]; then
  md=$(ls scripts/$ID-*.md | head -1)
  python3 tools/md2scenes.py "$md" "$vid" tools/say_$vid.json >>"$log" 2>&1
  (cd tools && .venv/bin/python tts_kokoro.py ../shorts/src/$vid.json ../$pub af_heart 1.0) >>"$log" 2>&1
  cp "$pub/timeline.json" "shorts/src/$vid.timeline.json"
fi

# Staged images from AI Studio receiver: $STAGE/<vid>-img-NN.jpg → public/<vid>/img-NN.jpg
stage="${STAGE:-${TMPDIR:-/tmp}/stage}"
for f in "$stage"/$vid-img-*.jpg; do
  [[ -e "$f" ]] || continue
  sips -s format jpeg -Z 2200 "$f" --out "$pub/${f##*/$vid-}" >>"$log" 2>&1 && rm "$f"
done

need=$(python3 -c "import json;print(len(json.load(open('shorts/src/$vid.json'))))")
have=$(ls "$pub"/img-*.jpg 2>/dev/null | wc -l | tr -d ' ')
if (( have < need )); then echo "$ID: images $have/$need — missing, not rendered"; exit 2; fi

python3 tools/register.py "$vid" >>"$log" 2>&1
(cd shorts && npx remotion render src/index.ts "$ID" "out/$ID-raw.mp4" --log=error) >>"$log" 2>&1
ffmpeg -y -loglevel error -i "shorts/out/$ID-raw.mp4" -af loudnorm=I=-14:TP=-1.5:LRA=11 -c:v copy -c:a aac -b:a 192k "shorts/out/$name.mp4" >>"$log" 2>&1
rm -f "shorts/out/$ID-raw.mp4"

dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "shorts/out/$name.mp4")
lufs=$(ffmpeg -nostats -i "shorts/out/$name.mp4" -af ebur128 -f null - 2>&1 | awk '/I:/{v=$2} END{print v}')
sheet="shorts/out/$name-sheet.jpg"
ffmpeg -y -loglevel error -i "shorts/out/$name.mp4" -vf "fps=1/8,scale=216:-1,tile=6x2" -frames:v 1 "$sheet"
printf '%s: %.0fs, %s LUFS, images %s/%s\nsheet: %s\n' "$ID" "$dur" "$lufs" "$have" "$need" "$sheet"
