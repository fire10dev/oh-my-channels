#!/bin/bash
# make_p02_sfx.sh — tạo SFX riêng cho P02 vào video/public/p02/sfx (từ Sonniss GDC2026 + tổng hợp bằng ffmpeg)
set -e
cd "$(dirname "$0")/.."
S="../../shared/library/sfx/sonniss-gdc2026/Sonniss.com-GDC2026-GameAudioBundle"
O=video/public/p02/sfx; mkdir -p $O
f(){ ffmpeg -v error -y "$@" -ar 48000 -ac 2; }
MET="$S/The Noisery - Moaning Metal/DSGNImpt_Metal Hit Thud Thump Low Ring Geofon 1_The Noisery_Moaning Metal.wav"
# mõ sắt: 1 nhịp, và 3 nhịp cách 0.55s
f -i "$MET" -af "atrim=0:1.3,highpass=f=300,afade=t=out:st=0.5:d=0.8,volume=1.6" $O/mo.wav
f -i $O/mo.wav -i $O/mo.wav -i $O/mo.wav -filter_complex "[1]adelay=550|550[b];[2]adelay=1100|1100[c];[0][b][c]amix=3:normalize=0" $O/mo3.wav
TW="$S/344 Audio - Antique Typewriter"
# máy chấm công in thẻ: phím cách lặp nhanh + kéo giấy
f -i "$TW/COMType_Typewriter Space Key, Typewriter 05_344 Audio_Antiques - Typewriter.wav" -i "$TW/COMType_Typewriter Space Key, Typewriter 05_344 Audio_Antiques - Typewriter.wav" -i "$TW/COMType_Typewriter Carriage Movement, Typewriter_344 Audio_Antiques - Typewriter_01.wav" \
  -filter_complex "[1]adelay=180|180[b];[2]atrim=0:0.9,afade=t=out:st=0.6:d=0.3,adelay=380|380[c];[0][b][c]amix=3:normalize=0" $O/in.wav
f -i $O/in.wav -i $O/in.wav -i $O/in.wav -i $O/in.wav -filter_complex "[1]adelay=500|500[b];[2]adelay=1000|1000[c];[3]adelay=1500|1500[d];[0][b][c][d]amix=4:normalize=0" $O/indon.wav
# rung điện thoại: 165Hz bập bùng, 2 lượt
f -f lavfi -i "aevalsrc='0.5*sin(2*PI*165*t)*(0.6+0.4*sin(2*PI*31*t))*(lt(mod(t,0.7),0.42))':s=48000:d=1.4" -af "afade=t=out:st=1.25:d=0.15" $O/rung.wav
# chuông xe đạp: reng reng
f -f lavfi -i "aevalsrc='(0.35*sin(2*PI*2650*t)+0.25*sin(2*PI*3390*t)+0.1*sin(2*PI*5300*t))*(exp(-6*t)+gte(t,0.28)*exp(-6*(t-0.28)))':s=48000:d=1.3" $O/chuong.wav
# dế, tích tắc, lật sổ, ngòi bút, rì rầm, máy may (xưởng), tua ngược
f -ss 6 -t 3.5 -i "$S/344 Audio - East Coast America Vol. 1/AMBSubn_Ambience, Forest Crickets, Birds, Connecticut 02_344 Audio_East Coast America Vol. 1.wav" -af "afade=t=in:d=0.3,afade=t=out:st=2.9:d=0.6" $O/de.wav 2>/dev/null || \
f -ss 6 -t 3.5 -i "$(ls "$S/344 Audio - East Coast America Vol. 1/"*Crickets* | head -1)" -af "afade=t=in:d=0.3,afade=t=out:st=2.9:d=0.6" $O/de.wav
f -ss 2 -t 3 -i "$S/344 Audio - Antique Clocks/CLOCKTick_Crooked Antique Clock_344 Audio_Antique Clocks.wav" -af "afade=t=out:st=2.5:d=0.5" $O/tick.wav
f -i "$S/Cinematic Sound Design - Paper Foley/Encyclopedia Glossy Page Turn Muted.wav" $O/lat.wav
f -i "$S/InMotionAudio - Scratch Card/OBJMisc_ScratchCard_SurfaceWipe_04_InMotionAudio_ScratchCard.wav" -i "$S/InMotionAudio - Scratch Card/OBJMisc_ScratchCard_SurfaceWipe_04_InMotionAudio_ScratchCard.wav" -filter_complex "[0]highpass=f=1500[a];[1]highpass=f=1500,adelay=700|700[b];[a][b]amix=2:normalize=0" $O/but.wav
f -ss 10 -t 4 -i "$S/Jake Fielding - British Walla and Crowd/CRWDWalla_Pub Walla, Crowd, Bar, _Jake Fielding_British Walla and Crowd_14.wav" -af "lowpass=f=2500,afade=t=in:d=0.4,afade=t=out:st=3.2:d=0.8" $O/riram.wav
f -ss 20 -t 4 -i "$S/Victor Ermakov - Industrial Ambiences - Ship Repair Factory/AMBInd_Factory Hall Busy Alarm Machines Voices_CW.wav" -af "afade=t=in:d=0.3,afade=t=out:st=3.2:d=0.8" $O/xuong.wav
# máy may rào rào: xung 22Hz có thân tiếng, chạy rồi tắt dần (mayoff)
f -f lavfi -i "aevalsrc='0.4*(random(0)-0.5)*exp(-60*mod(t,0.045))+0.15*sin(2*PI*110*t)*exp(-40*mod(t,0.045))':s=48000:d=3" -af "highpass=f=200,afade=t=in:d=0.2,afade=t=out:st=2.5:d=0.5" $O/may.wav
f -f lavfi -i "aevalsrc='0.4*(random(0)-0.5)*exp(-60*mod(t*(1-0.25*t),0.045))*exp(-0.9*t)':s=48000:d=3" -af "highpass=f=200" $O/mayoff.wav
f -i video/public/sh6/sfx/whoosh.wav -af "areverse,atempo=1.3" $O/tua.wav
# đóng dấu cộp: thud ngắn trầm
f -i "$MET" -af "atrim=0:0.35,lowpass=f=700,afade=t=out:st=0.12:d=0.23,volume=2.2" $O/dau.wav
# cân mức: kéo các file nhỏ lên gần đỉnh -2 dB
for g in de:18 lat:16 mo:7 mo3:7 xuong:12 tick:5 mayoff:8 may:5 but:0; do n=${g%%:*}; v=${g##*:}; [ "$v" = 0 ] && continue
  ffmpeg -v error -y -i $O/$n.wav -af "volume=${v}dB,alimiter=limit=0.8" $O/$n.tmp.wav && mv $O/$n.tmp.wav $O/$n.wav; done
for x in $O/*.wav; do printf "%-10s %s\n" $(basename $x .wav) $(ffprobe -v error -show_entries format=duration -of csv=p=0 $x); done
