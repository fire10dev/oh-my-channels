#!/bin/zsh
# Render every chapter of one long, then join + music + loudnorm: ./long/render_long.sh L1-en [L1-vi ...]
set -u
AB=${0:A:h:h}
V=$AB/stickman-video-director/skills/directing-stickman-videos/scripts/autopilot.mjs
for id in "$@"; do
  $AB/tts/.venv/bin/python -I $AB/long/make_long.py $id 2>&1 | grep -v Warn | tail -1
  ok=1
  for P in $AB/long/build/$id/c*/project.json; do
    D=${P:h}
    [[ -f $D/output/preview.mp4 && $D/output/preview.mp4 -nt $P ]] && continue
    S=$(python3 -I -c "import json;print(json.load(open('$P'))['ambience'][0]['end'])")
    if ! node $V validate $P > $D/validate.log 2>&1; then echo "$id ${D:t} VALIDATE FAIL: $(tail -1 $D/validate.log | cut -c1-300)"; ok=0; continue; fi
    node $V preview $P --seconds $S --replace > $D/render.log 2>&1 || { echo "$id ${D:t} RENDER FAIL: $(tail -1 $D/render.log | cut -c1-300)"; ok=0; }
  done
  (( ok )) && python3 -I $AB/long/finalize_long.py $id
done
