#!/bin/zsh
# loc_render.sh LANG [p01-long p01-sh1 …] — render comp <LANG>-<ID> (src/loc-<lang>.tsx, sinh bởi loc.py timeline) + loudnorm 2 lượt
#   I=-14 TP=-2 AAC 256k → video/out/<lang>/<ID>.mp4. Mặc định: mọi timeline trong src/data/loc/<lang>/. Bỏ qua file đã có (FORCE=1 để làm lại).
set -e; LG=$1; shift; cd "${0:A:h}/../video"; mkdir -p out/$LG
PARTS=(${@:-$(ls src/data/loc/$LG/p0*.json | xargs -n1 basename | sed 's/.json$//')})
for s in $PARTS; do
  ID=${LG:u}-${s:u}; O=out/$LG/$ID.mp4
  [[ -s $O && -z ${FORCE:-} ]] && { echo "có rồi $O"; continue; }
  npx remotion render src/loc-$LG.tsx $ID out/$LG/$ID-raw.mp4 --log=error
  M=$(ffmpeg -i out/$LG/$ID-raw.mp4 -af loudnorm=I=-14:TP=-2:LRA=11:print_format=json -f null - 2>&1 | sed -n '/^{/,/^}/p')
  jv() { print -r -- "$M" | sed -n "s/.*\"$1\" : \"\(.*\)\".*/\1/p" }
  LN="loudnorm=I=-14:TP=-2:LRA=11:measured_I=$(jv input_i):measured_TP=$(jv input_tp):measured_LRA=$(jv input_lra):measured_thresh=$(jv input_thresh):offset=$(jv target_offset):linear=true"
  ffmpeg -v error -y -i out/$LG/$ID-raw.mp4 -c:v copy -af "$LN,aresample=48000" -c:a aac -b:a 256k $O; rm -f out/$LG/$ID-raw.mp4
  echo "XONG $ID $(ffprobe -v error -show_entries format=duration -of csv=p=0 $O)s $(ffmpeg -i $O -af ebur128=peak=true -f null - 2>&1 | grep -E '^\s+(I|Peak):' | tr -s ' ' | tr '\n' ' ')"
done
