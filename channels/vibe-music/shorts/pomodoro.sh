#!/bin/zsh
# pomodoro.sh — 1-hour Pomodoro 25/5 video: B2 scene loop + Remotion timer overlay (1 fps PNGs)
# + focus music (B2) / break music (B1) + chime at every phase change. Output: out/pomodoro/.
set -euo pipefail
cd "${0:A:h}"
B2=../batch2
O=out/pomodoro
W=$O/work
mkdir -p $W
SILENCE="silenceremove=start_periods=1:start_threshold=-55dB:start_silence=0.05,areverse,silenceremove=start_periods=1:start_threshold=-55dB:start_silence=0.4,areverse"

# 1. timer overlay: 3600 transparent PNGs, one per second
[[ -f $W/frames/3599.png ]] || npx remotion render src/index.ts Pomodoro $W/frames --sequence --image-format=png \
  --image-sequence-pattern='[frame].[ext]' --concurrency=8 --log=error

# 2. scene: seamless 9s loop of B2 (1s crossfade end->start), 1080p
ffmpeg -v error -y -i "$B2/loops/B2 Window Seat Lo-fi.mp4" -filter_complex \
  "[0:v]split[a][b];[a]trim=start=1,setpts=PTS-STARTPTS[body];[b]trim=0:1,setpts=PTS-STARTPTS[head];[body][head]xfade=transition=fade:duration=1:offset=8,scale=1920:1080:flags=lanczos,format=yuv420p[v]" \
  -map "[v]" -an -c:v libx264 -crf 16 -preset slow -g 24 $W/bg.mp4

# 3. music: focus 25 min (B2) / break 5 min (B1), twice; chime at 25:00, 30:00, 55:00
ffmpeg -v error -y -i "$B2/audio/B2 Window Seat Lo-fi.m4a" -map 0:a -af "$SILENCE" -ar 48000 -ac 2 $W/focus_song.wav
ffmpeg -v error -y -i "$B2/audio/B1 Sunrise Coffee.m4a" -map 0:a -af "$SILENCE" -ar 48000 -ac 2 $W/break_song.wav
ffmpeg -v error -y -stream_loop -1 -i $W/focus_song.wav -t 1500 -af "afade=t=in:d=2,afade=t=out:st=1497:d=3" $W/focus.wav
ffmpeg -v error -y -stream_loop -1 -i $W/break_song.wav -t 300 -af "afade=t=in:d=2,afade=t=out:st=297:d=3,volume=0.9" $W/break.wav
ffmpeg -v error -y -f lavfi -i "aevalsrc=0.35*sin(2*PI*880*t)*exp(-2.5*t)+0.2*sin(2*PI*1320*t)*exp(-3.5*t)+0.1*sin(2*PI*1760*t)*exp(-5*t):s=48000:d=2.5,aformat=channel_layouts=stereo" $W/chime.wav
ffmpeg -v error -y -i $W/focus.wav -i $W/break.wav -i $W/focus.wav -i $W/break.wav -i $W/chime.wav -filter_complex \
  "[0][1][2][3]concat=n=4:v=0:a=1[music];[4]asplit=3[c1][c2][c3];[c1]adelay=1500000:all=1[d1];[c2]adelay=1800000:all=1[d2];[c3]adelay=3300000:all=1[d3];[music][d1][d2][d3]amix=inputs=4:normalize=0:duration=first,afade=t=out:st=3595:d=5[a]" \
  -map "[a]" -c:a pcm_s16le $W/audio.wav

# 4. compose: loop scene, overlay timer (1 fps -> 24 fps), mux music
ffmpeg -v error -y -stream_loop -1 -i $W/bg.mp4 -framerate 1 -i $W/frames/%04d.png -i $W/audio.wav -filter_complex \
  "[1:v]fps=24[ov];[0:v][ov]overlay=0:0:eof_action=repeat,format=yuv420p[v]" \
  -map "[v]" -map 2:a -t 3600 -r 24 -c:v h264_videotoolbox -b:v 8M -g 48 -c:a aac -b:a 192k -movflags +faststart \
  "$O/Pomodoro 25-5 1 Hour.mp4"

F="$O/Pomodoro 25-5 1 Hour.mp4"
echo "pomodoro | $(ffprobe -v error -show_entries format=duration -of csv=p=0 "$F")s | $(du -h "$F" | cut -f1) | decode errors: $(ffmpeg -v error -i "$F" -f null - 2>&1 | head -2)"
