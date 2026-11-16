#!/usr/bin/env bash
# Import images/clips into shorts/public/<vid>/ (16:9, max 1920 px) and drop them from .placeholders.
# Usage: tools/long_import.sh <vid> [stage-dir]
#   default stage ($TMPDIR/stage-<vid>): files <vid>-img-NN.jpg from tools/receive_images.py — moved (deleted after import)
#   owner dir (e.g. ~/Downloads/l008): img-NN.jpg|jpeg|png, clip-N.jpg|png, clip-N.mp4 — copied (originals kept)
set -euo pipefail
cd "$(dirname "$0")/.."
vid=$1; def=${TMPDIR:-/tmp}/stage-$vid; stage=${2:-$def}; pub=shorts/public/$vid; mkdir -p "$pub"; n=0
shopt -s nullglob nocaseglob
drop() { [[ -f "$pub/.placeholders" ]] && { grep -vx "$1" "$pub/.placeholders" > "$pub/.ph.tmp" || true; mv "$pub/.ph.tmp" "$pub/.placeholders"; }; return 0; }
for f in "$stage"/$vid-img-*.jpg "$stage"/img-*.{jpg,jpeg,png} "$stage"/clip-*.{jpg,jpeg,png}; do
  b=${f##*/}; b=${b#$vid-}; out="$pub/${b%.*}.jpg"
  sips -s format jpeg -s formatOptions 88 -Z 1920 "$f" --out "$out" >/dev/null 2>&1 || { echo "skip $f"; continue; }
  [[ "$stage" == "$def" ]] && rm "$f"
  drop "${out##*/}"; n=$((n+1))
done
for f in "$stage"/clip-*.mp4; do cp "$f" "$pub/${f##*/}"; n=$((n+1)); done
left=$( [[ -f "$pub/.placeholders" ]] && wc -l < "$pub/.placeholders" | tr -d ' ' || echo 0)
echo "imported $n · placeholders left $left"
