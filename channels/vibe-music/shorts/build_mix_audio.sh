#!/bin/zsh
# build_mix_audio.sh <A|B|C|D|E|F> — chain the 5 trimmed songs of a group with 3s acrossfades (CROSSFADE in src/Mix.tsx).
set -euo pipefail
cd "${0:A:h}"
G=$1
mkdir -p public/mix
ffmpeg -v error -y -i public/audio/${G}1.wav -i public/audio/${G}2.wav -i public/audio/${G}3.wav -i public/audio/${G}4.wav -i public/audio/${G}5.wav \
  -filter_complex "[0][1]acrossfade=d=3:c1=tri:c2=tri[a1];[a1][2]acrossfade=d=3:c1=tri:c2=tri[a2];[a2][3]acrossfade=d=3:c1=tri:c2=tri[a3];[a3][4]acrossfade=d=3:c1=tri:c2=tri[a]" \
  -map "[a]" -c:a pcm_s16le public/mix/$G.wav
ffprobe -v error -show_entries format=duration -of csv=p=0 public/mix/$G.wav
