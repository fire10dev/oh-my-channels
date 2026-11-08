#!/bin/zsh
# stillloop_prep.sh <id> <image> <music>
# Copies a Google Flow image + song into public/scenes/ and prints the numbers src/scenes.json needs
# (srcW, srcH, roundFrames @ 30 fps). Music gets leading/trailing silence trimmed (keeps 0.4 s tail).
set -euo pipefail
cd "${0:A:h}"
ID="$1"; IMG="$2"; MUSIC="$3"
mkdir -p public/scenes
EXT="${IMG:e:l}"
cp "$IMG" "public/scenes/$ID.$EXT"
ffmpeg -v error -y -i "$MUSIC" -map 0:a \
  -af "silenceremove=start_periods=1:start_threshold=-55dB:start_silence=0.05,areverse,silenceremove=start_periods=1:start_threshold=-55dB:start_silence=0.4,areverse" \
  -ar 48000 -ac 2 "public/scenes/$ID.wav"
WH=$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0:s=x "public/scenes/$ID.$EXT")
DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "public/scenes/$ID.wav")
FRAMES=$(python3 -c "print(int(round($DUR*30)))")
echo "$ID | img scenes/$ID.$EXT ${WH} | audio scenes/$ID.wav ${DUR}s | roundFrames $FRAMES"
