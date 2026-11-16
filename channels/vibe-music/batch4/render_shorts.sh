#!/bin/zsh
# render_shorts.sh [ids...] — ShortG-<id> for the given ids (default: every entry in shorts/src/shortsG.json) -> out_shorts/<id>.mp4 (skips existing)
set -euo pipefail
cd "${0:A:h}"
mkdir -p out_shorts
IDS=("$@")
(( ${#IDS} )) || IDS=($(python3 -I -c "import json;print(' '.join(s['id'] for s in json.load(open('../shorts/src/shortsG.json'))))"))
for id in $IDS; do
  [[ -f out_shorts/$id.mp4 ]] && continue
  (cd ../shorts && npx remotion render src/index.ts ShortG-$id ../batch4/out_shorts/$id.mp4 \
     --video-bitrate=3M --audio-bitrate=160k --concurrency=8 --timeout=120000 --log=error)
  echo "$(date +%H:%M:%S) $id $(du -h out_shorts/$id.mp4 | cut -f1)"
done
