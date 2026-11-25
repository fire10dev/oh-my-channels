#!/bin/zsh
# multi_render.sh VID (vd p01-long) — sau tools/multi.py build:
#   hình 1 lần (comp MULTI-<VID>-EN, không phụ đề in), audio riêng FR/ES (cùng timeline ⇒ cùng độ dài), loudnorm 2 lượt −14 LUFS TP −2.
#   → video/out/multi/<VID>.mp4 (hình + tiếng Anh, track mặc định)
#     video/out/multi/<VID>.<fr|es>.m4a (tải lên YouTube Studio → Languages → Add audio track)
#     video/out/multi/<VID>.preview-<fr|es>.mp4 (nghe thử; QuickTime phát MỌI track cùng lúc nên không gộp 3 track vào 1 file)
set -e; V=$1; U=${V:u}; cd "${0:A:h}/../video"; O=out/multi; mkdir -p $O
ln2() {  # ln2 IN OUT: loudnorm 2 lượt → AAC 256k 48k
  local M=$(ffmpeg -i $1 -af loudnorm=I=-14:TP=-2:LRA=11:print_format=json -f null - 2>&1 | sed -n '/^{/,/^}/p')
  jv() { print -r -- "$M" | sed -n "s/.*\"$1\" : \"\(.*\)\".*/\1/p" }
  local LN="loudnorm=I=-14:TP=-2:LRA=11:measured_I=$(jv input_i):measured_TP=$(jv input_tp):measured_LRA=$(jv input_lra):measured_thresh=$(jv input_thresh):offset=$(jv target_offset):linear=true"
  ffmpeg -v error -y -i $1 -vn -af "$LN,alimiter=limit=0.79:level=false,aresample=48000" -c:a aac -b:a 256k $2
}
npx remotion render src/multi.tsx MULTI-$U-EN $O/$V-raw.mp4 --log=error
ffmpeg -v error -y -i $O/$V-raw.mp4 -vn -c:a pcm_s16le $O/$V.en.wav
for L in fr es; do npx remotion render src/multi.tsx MULTI-$U-${L:u} $O/$V.$L.wav --codec=wav --log=error; done
for L in en fr es; do ln2 $O/$V.$L.wav $O/$V.$L.m4a; rm -f $O/$V.$L.wav; done
ffmpeg -v error -y -i $O/$V-raw.mp4 -i $O/$V.en.m4a -map 0:v -map 1:a -c copy -movflags +faststart $O/$V.mp4
for L in fr es; do ffmpeg -v error -y -i $O/$V.mp4 -i $O/$V.$L.m4a -map 0:v -map 1:a -c copy -movflags +faststart $O/$V.preview-$L.mp4; done
rm -f $O/$V-raw.mp4 $O/$V.en.m4a.tmp
for f in $O/$V.mp4 $O/$V.fr.m4a $O/$V.es.m4a; do
  echo "$f $(ffprobe -v error -show_entries format=duration -of csv=p=0 $f)s $(ffmpeg -i $f -af ebur128=peak=true -f null - 2>&1 | grep -E '^\s+(I|Peak):' | tr -s ' ' | tr '\n' ' ')"
done
