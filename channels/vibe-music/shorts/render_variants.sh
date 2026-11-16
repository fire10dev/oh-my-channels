#!/bin/zsh
# render_variants.sh — render every ShortV-<vid> in src/variants.json to out/shorts100/<vid>.mp4 (skips existing).
set -euo pipefail
cd "${0:A:h}"
mkdir -p out/shorts100
for vid in $(python3 -I -c "import json;print(' '.join(v['vid'] for v in json.load(open('src/variants.json'))))"); do
  [[ -f out/shorts100/$vid.mp4 ]] || npx remotion render src/index.ts ShortV-$vid out/shorts100/$vid.mp4 \
    --video-bitrate=3M --audio-bitrate=160k --concurrency=8 --timeout=120000 --log=error
  echo "$(date +%H:%M:%S) $vid $(du -h out/shorts100/$vid.mp4 | cut -f1)"
done
