#!/usr/bin/env bash
# Move staged AI Studio images into shorts/public/<vid>/ (16:9, max 1920 px) and drop them from .placeholders.
# Usage: tools/long_import.sh <vid> [stage-dir]   stage files: <vid>-img-NN.jpg (from tools/receive_images.py)
set -euo pipefail
cd "$(dirname "$0")/.."
vid=$1; stage=${2:-${TMPDIR:-/tmp}/stage-$vid}; pub=shorts/public/$vid; mkdir -p "$pub"; n=0
for f in "$stage"/$vid-img-*.jpg; do
  [[ -e "$f" ]] || continue
  out="$pub/${f##*/$vid-}"
  sips -s format jpeg -s formatOptions 88 -Z 1920 "$f" --out "$out" >/dev/null 2>&1 && rm "$f" && n=$((n+1))
  [[ -f "$pub/.placeholders" ]] && { grep -vx "${out##*/}" "$pub/.placeholders" > "$pub/.ph.tmp" || true; mv "$pub/.ph.tmp" "$pub/.placeholders"; }
done
left=$( [[ -f "$pub/.placeholders" ]] && wc -l < "$pub/.placeholders" | tr -d ' ' || echo 0)
echo "imported $n · placeholders left $left"
