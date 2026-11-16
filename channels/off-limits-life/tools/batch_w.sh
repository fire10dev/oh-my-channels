#!/bin/sh
# Render longs + their 2 Shorts + thumbnail for IX007+ (shared engine). Usage: tools/batch_w.sh "IX011:mosaic:public/ix002/bed.mp3" ...
# Gate lines -> out/gate-<vid>.txt ; Shorts -> out/upload/Short-sx-<vid>-*.mp4
for spec in "$@"; do
  ID=$(echo $spec | cut -d: -f1); SLUG=$(echo $spec | cut -d: -f2); TRACK=$(echo $spec | cut -d: -f3); VID=$(echo $ID | tr 'A-Z' 'a-z')
  tools/render_long.sh $ID-$SLUG $VID $ID-$SLUG > out/gate-$VID.txt 2>&1 && cp out/$ID-$SLUG.mp4 out/upload/
  for j in src/data/sx-$VID-*.json; do case $j in *timeline*) continue;; esac
    tools/make_short.sh $(basename $j .json) "$TRACK" > /dev/null 2>&1 || echo "FAIL $j" >> out/gate-$VID.txt; done
  npx remotion still src/index.ts Thumb-$ID out/Thumb-$ID.png --log=error > /dev/null 2>&1 && ffmpeg -v error -y -i out/Thumb-$ID.png -q:v 3 out/upload/Thumb-$ID.jpg
done
