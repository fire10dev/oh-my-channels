#!/usr/bin/env bash
# Placeholder "epic" bed, synthesized with ffmpeg (no samples, no AI, no license): low war-drum pulse + D-minor drone swell.
# Usage: tools/make_epic_bed.sh <seconds> <out.mp3> [bpm]   → used when Audio Library tracks are not downloaded yet.
set -euo pipefail
d=${1:-240}; out=${2:?out}; bpm=${3:-80}; b=$(python3 -c "print(60/$bpm)")
mkdir -p "$(dirname "$out")"
drum="sin(2*PI*mod(t,$b)*(52+90*exp(-mod(t,$b)*28)))*exp(-mod(t,$b)*6)*0.9 + sin(2*PI*mod(t+$b/2,2*$b)*(70+60*exp(-mod(t+$b/2,2*$b)*30)))*exp(-mod(t+$b/2,2*$b)*9)*0.35*lt(mod(t+$b/2,2*$b),$b)"
swell="(0.55+0.45*sin(2*PI*t/24))"
drone="$swell*(0.30*sin(2*PI*73.42*t)+0.22*sin(2*PI*110*t+0.3*sin(2*PI*0.2*t))+0.14*sin(2*PI*146.83*t)+0.08*sin(2*PI*174.61*t)*(0.5+0.5*sin(2*PI*t/16)))"
ffmpeg -y -loglevel error \
  -f lavfi -i "aevalsrc=exprs='$drum':s=44100:d=$d" \
  -f lavfi -i "aevalsrc=exprs='$drone':s=44100:d=$d" \
  -f lavfi -i "anoisesrc=color=pink:amplitude=0.08:duration=$d" \
  -filter_complex "[0]lowpass=f=900,aecho=0.7:0.6:180:0.25[dr];[1]lowpass=f=1200,chorus=0.6:0.9:50:0.4:0.25:2[dn];[2]bandpass=f=300:w=200,volume=0.5[ns];[dr][dn][ns]amix=inputs=3:normalize=0,afade=t=in:d=2,afade=t=out:st=$((d-4)):d=4,loudnorm=I=-18[o]" \
  -map "[o]" -ac 2 -b:a 160k "$out"
echo "$out"
