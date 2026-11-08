#!/bin/zsh
# make_1h.sh <clip.mp4> <music.(m4a|mp3|wav)> <out_prefix>
# Clip: audio dropped, 1s crossfade loop, upscaled to 1080p. Music: leading/trailing silence trimmed
# (keeps 0.4s tail), looped to 1 hour, 5s fade-out. Also writes a 1280x720 thumbnail.
set -euo pipefail
CLIP="$1"; MUSIC="$2"; OUT="$3"
W=$(mktemp -d)

ssim() { ffmpeg -v info -i "$1" -i "$1" -filter_complex "[0:v]select=eq(n\,$2),setpts=PTS-STARTPTS[a];[1:v]select=eq(n\,$3),setpts=PTS-STARTPTS[b];[a][b]ssim" -f null - 2>&1 | grep -o 'All:[0-9.]*'; }

FPS=$(ffprobe -v error -select_streams v:0 -show_entries stream=r_frame_rate -of csv=p=0 "$CLIP")
DUR=$(ffprobe -v error -select_streams v:0 -show_entries stream=duration -of csv=p=0 "$CLIP")
N=$(ffprobe -v error -count_frames -select_streams v:0 -show_entries stream=nb_read_frames -of csv=p=0 "$CLIP")
RAW=$(ssim "$CLIP" $((N-1)) 0)

OFF=$(echo "$DUR - 2" | bc -l)
ffmpeg -v error -y -i "$CLIP" -filter_complex "[0:v]split[a][b];[a]trim=start=1,setpts=PTS-STARTPTS[body];[b]trim=0:1,setpts=PTS-STARTPTS[head];[body][head]xfade=transition=fade:duration=1:offset=$OFF,scale=1920:1080:flags=lanczos,format=yuv420p[v]" \
  -map "[v]" -an -c:v libx264 -preset slow -crf 18 -r "$FPS" -g 48 -movflags +faststart "$W/loop.mp4"
M=$(ffprobe -v error -count_frames -select_streams v:0 -show_entries stream=nb_read_frames -of csv=p=0 "$W/loop.mp4")
NEW=$(ssim "$W/loop.mp4" $((M-1)) 0)

ffmpeg -v error -y -i "$MUSIC" -map 0:a \
  -af "silenceremove=start_periods=1:start_threshold=-55dB:start_silence=0.05,areverse,silenceremove=start_periods=1:start_threshold=-55dB:start_silence=0.4,areverse" \
  -c:a pcm_s16le "$W/music.wav"
MDUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$W/music.wav")

ffmpeg -v error -y -stream_loop -1 -i "$W/loop.mp4" -stream_loop -1 -i "$W/music.wav" -t 3600 -map 0:v -map 1:a -c:v copy \
  -af "afade=t=out:st=3595:d=5" -c:a aac -b:a 192k -movflags +faststart "$OUT 1 Hour.mp4"

ffmpeg -v error -y -ss 5 -i "$CLIP" -frames:v 1 -update 1 -q:v 2 -vf scale=1280:720:flags=lanczos "$OUT thumbnail.jpg"

VD=$(ffprobe -v error -select_streams v:0 -show_entries stream=duration -of csv=p=0 "$OUT 1 Hour.mp4")
SZ=$(du -h "$OUT 1 Hour.mp4" | cut -f1)
ERR=$(ffmpeg -v error -i "$OUT 1 Hour.mp4" -f null - 2>&1 | head -3)
echo "$(basename "$OUT") | seam raw $RAW -> loop $NEW | song ${MDUR}s after trim | 1h dur ${VD}s | $SZ | decode errors: ${ERR:-none}"
rm -rf "$W"
