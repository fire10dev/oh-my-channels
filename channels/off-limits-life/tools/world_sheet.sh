#!/bin/sh
# Contact sheet of every view of a registry world -> out/sx/world-<key>.jpg. Usage: tools/world_sheet.sh KEY [PLANE]
K=$1; D=out/sx/world-$K; mkdir -p $D; rm -f $D/*.png
npx remotion render src/index.ts "WV-$K" "$D/v" --sequence --image-format=png --scale=0.25 ${2:+--props="{\"world\":\"$K\",\"plane\":\"$2\"}"} --log=error
ffmpeg -v error -y -pattern_type glob -i "$D/v/*.png" -vf "tile=6x$(( ($(ls $D/v/*.png | wc -l) + 5) / 6 ))" -frames:v 1 out/sx/world-$K.jpg && echo out/sx/world-$K.jpg
