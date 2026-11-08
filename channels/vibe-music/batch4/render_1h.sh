#!/bin/zsh
# render_1h.sh [ids...] — 1-hour video + thumbnail frame per batch-4 song (default: every scene G* in scenes.json
# without an output yet). Output: out/<id> <title> 1 Hour.mp4 + "<id> <title> thumbnail.jpg"; log in out/render.log.
set -euo pipefail
cd "${0:A:h}"
mkdir -p out
IDS=("$@")
(( ${#IDS} )) || IDS=($(python3 -I -c "import json;print(' '.join(s['id'] for s in json.load(open('../shorts/src/scenes.json')) if s['id'].startswith('G')))"))
for id in $IDS; do
  title=$(python3 -I -c "import json;print({s['id']:s['title'] for s in json.load(open('songs.json'))}['$id'])")
  out="$PWD/out/$id $title"
  [[ -f "$out 1 Hour.mp4" ]] && continue
  echo "$(date +%H:%M) start $id" | tee -a out/render.log
  ../shorts/stillloop_1h.sh "$id" "$out" 2>&1 | tee -a out/render.log
done
