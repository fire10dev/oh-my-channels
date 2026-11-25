#!/bin/bash
# make_p04_sfx.sh — SFX riêng P04 (ma giấu) vào video/public/p04/sfx: Sonniss GDC2026 + tổng hợp ffmpeg.
# Tên trùng P02/P03/sh6 (tick, coc, whoosh, pop, pops, bassdown, mayoff…) thì builder tự lấy chỗ cũ.
# "chotdon" (mẹ hô chốt đơn vọng từ phòng khác) là giọng ME → làm trong build_p04_long.py (cần TTS).
set -e
cd "$(dirname "$0")/.."
S="../../shared/library/sfx/sonniss-gdc2026/Sonniss.com-GDC2026-GameAudioBundle"
O=video/public/p04/sfx; mkdir -p $O
f(){ ffmpeg -v error -y "$@" -ar 48000 -ac 2; }
# boong: mâm đồng gõ nhẹ — các hoạ âm lệch (chuông/khánh) tắt dần, vang phòng
G="0.5*sin(2*PI*196*t)*exp(-1.6*t)+0.35*sin(2*PI*411*t)*exp(-2.2*t)+0.25*sin(2*PI*622*t)*exp(-3*t)+0.18*sin(2*PI*917*t)*exp(-4*t)+0.12*sin(2*PI*1290*t)*exp(-6*t)"
f -f lavfi -i "aevalsrc='$G':s=48000:d=3" -af "aecho=0.8:0.5:60:0.3,afade=t=out:st=2.4:d=0.6" $O/boong.wav
# BOONG to: mâm va cửa sắt — tiếng đập kim loại + lớp chuông trầm hơn
f -i "$S/344 Audio - Haunting Ambiences Vol. 3/METLImpt_Metal Bangs, Metal Hits, Banging On Doors_344 Audio_Haunting Ambiences Vol 3.wav" -af "atrim=0:1.2,afade=t=out:st=0.9:d=0.3" $O/bang.raw.wav
f -f lavfi -i "aevalsrc='$G':s=48000:d=3" -af "asetrate=48000*0.85,aresample=48000,aecho=0.8:0.6:90:0.4" $O/gong.raw.wav
ffmpeg -v error -y -i $O/bang.raw.wav -i $O/gong.raw.wav -filter_complex "[0][1]amix=inputs=2:duration=longest:normalize=0,afade=t=out:st=2.4:d=0.6" -ar 48000 -ac 2 $O/boong2.wav
rm $O/*.raw.wav
# nhai: 1 miếng nhai giòn (nổ lạo xạo băng giữa, đường bao 2 nhịp)
f -f lavfi -i "aevalsrc='(random(0)-0.5)*gt(random(1),0.55)*(sin(PI*t/0.22)*lt(t,0.22)+0.7*gte(t,0.3)*lt(t,0.5)*sin(PI*(t-0.3)/0.2))':s=48000:d=0.6" -af "bandpass=f=2200:w=2500,volume=40dB" $O/nhai.wav
# ting giao hàng: 2 nốt E6–A6
f -f lavfi -i "aevalsrc='0.35*sin(2*PI*1319*t)*exp(-8*t)*lt(t,0.15)+gte(t,0.12)*0.35*sin(2*PI*1760*t)*exp(-5*(t-0.12))':s=48000:d=0.9" $O/ting.wav
# hop: chuông vào họp trực tuyến (3 nốt đi lên, mềm)
f -f lavfi -i "aevalsrc='0.3*sin(2*PI*523*t)*exp(-6*t)+gte(t,0.11)*0.3*sin(2*PI*659*(t-0.11))*exp(-6*(t-0.11))+gte(t,0.22)*0.3*sin(2*PI*784*(t-0.22))*exp(-4*(t-0.22))':s=48000:d=1.2" $O/hop.wav
# cua: cửa thoát hiểm kẽo kẹt (ghế cót két hạ tông, kéo dài)
f -i "$S/344 Audio - Cinema Experience Vol. 1/FOLYProp_Sitting Down, Creaky Seat, Squeaks 3_344 Audio_CInema Experience.wav" -af "atrim=0:1.6,asetrate=48000*0.6,aresample=48000,lowpass=f=3000,atrim=0:2.4,afade=t=out:st=1.8:d=0.6,volume=12dB" $O/cua.wav
# cauda: cầu dao sập (công tắc hạ tông + tiếng điện tắt)
f -i "$S/InMotionAudio - USA Hotel/MECHClik_USALightSwitch_On05_InMotionAudio_USAHotel.wav" -af "asetrate=48000*0.6,aresample=48000,volume=3,apad=pad_dur=0.4,aecho=0.8:0.5:50:0.3" $O/cauda.wav
# dat: đất rơi lả tả
f -i "$S/Cinematic Sound Design - Colossal Impacts/Woosh Debris.wav" -af "lowpass=f=4000,afade=t=out:st=1.6:d=0.6,atrim=0:2.2" $O/dat.wav
# nan: nặn đất (squelch nhỏ ×2)
f -i "$S/Epic Stock Media - Tower Defense Game/WOODImpt_Hit Blood Spill Splat Wood Impact Light Hit Squelch Small Thump 03_ESM_TDG.wav" -af "atrim=0:0.5,asetrate=48000*0.8,aresample=48000,apad=pad_dur=0.2,aecho=0.6:0.6:300:0.7" $O/nan.wav
# dapcua: đập cửa thoát hiểm thình (1 nhịp, trầm, vang cầu thang) — v4
f -i "$S/344 Audio - Haunting Ambiences Vol. 3/METLImpt_Metal Bangs, Metal Hits, Banging On Doors_344 Audio_Haunting Ambiences Vol 3.wav" -af "atrim=0:0.6,lowpass=f=900,aecho=0.8:0.5:80:0.35,afade=t=out:st=0.4:d=0.3,volume=4" $O/dapcua.wav
# cân mức
for g in dapcua:18 boong:6 boong2:4 nhai:6 ting:4 hop:4 cua:6 dat:6 nan:6; do n=${g%%:*}; v=${g##*:}
  ffmpeg -v error -y -i $O/$n.wav -af "volume=${v}dB,alimiter=limit=0.8" $O/$n.tmp.wav && mv $O/$n.tmp.wav $O/$n.wav; done
for x in $O/*.wav; do printf "%-8s %s %s\n" $(basename $x .wav) $(ffprobe -v error -show_entries format=duration -of csv=p=0 $x) "$(ffmpeg -i $x -af volumedetect -f null - 2>&1 | grep -o 'max_volume: [-0-9.]* dB')"; done
