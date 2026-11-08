#!/bin/zsh
# Build all batch 3 one-hour videos, 3 at a time.
cd "${0:A:h}"
for f in loops/*.mp4; do printf '%s\0' "$(basename "$f" .mp4)"; done |
  xargs -0 -P 3 -n 1 zsh -c './make_1h.sh "loops/$1.mp4" "audio/$1.m4a" "out/$1"' _ 2>&1 | tee out/build.log
