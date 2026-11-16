#!/bin/sh
# Two-pass EBU R128 loudnorm (single pass lands ~0.5 LU off the -14 target). Usage: tools/loudnorm2.sh VIDEO_IN AUDIO_IN OUT.mp4
set -e
J=$(ffmpeg -hide_banner -i "$2" -af loudnorm=I=-14:TP=-1.5:LRA=11:print_format=json -f null - 2>&1 | sed -n '/^{/,/^}/p')
g() { echo "$J" | sed -n "s/.*\"$1\" : \"\([^\"]*\)\".*/\1/p"; }
ffmpeg -v error -y -i "$1" -i "$2" -map 0:v -map 1:a -c:v copy \
  -af "loudnorm=I=-14:TP=-1.5:LRA=11:measured_I=$(g input_i):measured_TP=$(g input_tp):measured_LRA=$(g input_lra):measured_thresh=$(g input_thresh):offset=$(g target_offset):linear=true" \
  -ar 48000 -c:a aac -b:a 192k "$3"
