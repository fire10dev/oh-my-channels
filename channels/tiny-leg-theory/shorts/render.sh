#!/bin/zsh
# Render Shorts by id: ./shorts/render.sh s01 s02 ...   (run from stickman-ab/)
set -u
AB=${0:A:h:h}
V=$AB/stickman-video-director/skills/directing-stickman-videos/scripts/autopilot.mjs
mkdir -p $AB/shorts/out
for id in "$@"; do
  $AB/tts/.venv/bin/python -I $AB/shorts/make_short.py $id 2>&1 | grep -v Warn | tail -1
  P=$AB/shorts/build/$id/project.json
  S=$(python3 -I -c "import json;print(json.load(open('$P'))['ambience'][0]['end'])")
  if ! node $V validate $P > $AB/shorts/build/$id/validate.log 2>&1; then echo "$id VALIDATE FAIL: $(tail -1 $AB/shorts/build/$id/validate.log | cut -c1-200)"; continue; fi
  if node $V preview $P --seconds $S --replace > $AB/shorts/build/$id/render.log 2>&1; then
    slug=$(python3 -I -c "import json,re;s={x['id']:x for x in json.load(open('$AB/shorts/shorts.json'))['shorts']}['$id'];print(re.sub(r'[^a-z0-9]+','-',s['title'].lower()).strip('-'))")
    cp $AB/shorts/build/$id/output/preview.mp4 $AB/shorts/out/$id-$slug.mp4
    echo "$id OK ${S}s -> out/$id-$slug.mp4"
  else echo "$id RENDER FAIL: $(tail -1 $AB/shorts/build/$id/render.log | cut -c1-200)"; fi
done
