#!/bin/zsh
# render_p03_shorts.sh SH1 [SH2 …] — render Remotion + loudnorm, từng short xong mới sang short sau.
# loudnorm TP=-2 + AAC 256k: TP=-1.5/192k bị lọt đỉnh > 0 dBFS (xem note MEGABRAIN §14).
set -e
cd "$(dirname $0)/../video"
typeset -A SLUG=(SH1 ho-so-ma-xo SH2 song-sot-khi-nha-co-ma-xo SH3 hoi-lo-ma-xo SH4 ban-ve-xem-ban-tho SH5 tho-do-dem-ca-dem SH6 tieng-dem-trong-kho SH7 mo-hu-giay-no)
for s in "$@"; do
  npx remotion render src/index.tsx P03-$s out/p03-$s-raw.mp4 --log=error
  # loudnorm 2 lượt: 1 lượt ra −16 LUFS vì short có nhiều đoạn tắt nhạc
  M=$(ffmpeg -i out/p03-$s-raw.mp4 -af loudnorm=I=-14:TP=-2:LRA=11:print_format=json -f null - 2>&1 | sed -n '/^{/,/^}/p')
  jv() { print -r -- "$M" | sed -n "s/.*\"$1\" : \"\(.*\)\".*/\1/p" }
  LN="loudnorm=I=-14:TP=-2:LRA=11:measured_I=$(jv input_i):measured_TP=$(jv input_tp):measured_LRA=$(jv input_lra):measured_thresh=$(jv input_thresh):offset=$(jv target_offset):linear=true"
  ffmpeg -v error -y -i out/p03-$s-raw.mp4 -c:v copy -af "$LN,aresample=48000" -c:a aac -b:a 256k out/P03-$s-${SLUG[$s]}.mp4
  rm -f out/p03-$s-raw.mp4
  echo "XONG $s $(ffprobe -v error -show_entries format=duration -of csv=p=0 out/P03-$s-${SLUG[$s]}.mp4)s $(ffmpeg -i out/P03-$s-${SLUG[$s]}.mp4 -af ebur128=peak=true -f null - 2>&1 | rg '^\s+(I|Peak):' | tr -s ' ' | tr '\n' ' ')"
done
