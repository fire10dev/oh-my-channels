#!/bin/zsh
# ep_render.sh NN [LONG SH1 …] — render comp EPNN-* (ep_build.py) + loudnorm 2 lượt I=-14 TP=-2 AAC 256k → video/out/EPNN-*.mp4; mặc định LONG + SH1..7.
set -e; cd "${0:A:h}/../video"; N=$(printf %02d $1); shift; PARTS=(${@:-LONG SH1 SH2 SH3 SH4 SH5 SH6 SH7})
for s in $PARTS; do
  ID=EP$N-$s; npx remotion render src/index.tsx $ID out/$ID-raw.mp4 --log=error
  M=$(ffmpeg -i out/$ID-raw.mp4 -af loudnorm=I=-14:TP=-2:LRA=11:print_format=json -f null - 2>&1 | sed -n '/^{/,/^}/p')
  jv() { print -r -- "$M" | sed -n "s/.*\"$1\" : \"\(.*\)\".*/\1/p" }
  LN="loudnorm=I=-14:TP=-2:LRA=11:measured_I=$(jv input_i):measured_TP=$(jv input_tp):measured_LRA=$(jv input_lra):measured_thresh=$(jv input_thresh):offset=$(jv target_offset):linear=true"
  ffmpeg -v error -y -i out/$ID-raw.mp4 -c:v copy -af "$LN,aresample=48000" -c:a aac -b:a 256k out/$ID.mp4; rm -f out/$ID-raw.mp4
  echo "XONG $ID $(ffprobe -v error -show_entries format=duration -of csv=p=0 out/$ID.mp4)s $(ffmpeg -i out/$ID.mp4 -af ebur128=peak=true -f null - 2>&1 | rg '^\s+(I|Peak):' | tr -s ' ' | tr '\n' ' ')"
done
