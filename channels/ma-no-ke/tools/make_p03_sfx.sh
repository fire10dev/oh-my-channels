#!/bin/bash
# make_p03_sfx.sh — SFX riêng P03 (ma xó) vào video/public/p03/sfx, từ Sonniss GDC2026 + tổng hợp ffmpeg.
# Tên trùng P02 (but, dau, de, tick, riram, lat, tua, mo) thì builder lấy từ p02/sfx.
set -e
cd "$(dirname "$0")/.."
S="../../shared/library/sfx/sonniss-gdc2026/Sonniss.com-GDC2026-GameAudioBundle"
O=video/public/p03/sfx; mkdir -p $O
f(){ ffmpeg -v error -y "$@" -ar 48000 -ac 2; }
LK="$S/Epic Stock Media - HD Lock And Mechanism Sound Design Kit"
# khóa cửa "cạch": chốt cơ khí trầm + vang phòng nhỏ
f -i "$LK/MECHLtch_Click Deep Mechanism Latch Button Nearfield Thunk 02_ESM_HDLM.wav" -af "apad=pad_dur=0.6,aecho=0.8:0.5:35:0.3,volume=2" $O/khoa.wav
# thước dây kéo dài
f -i "$LK/MECHMisc_Tool Tape Measure Pull Retract Spring Slide Spin Long 07_ESM_HDLM.wav" -af "atrim=0:2,afade=t=out:st=1.6:d=0.4" $O/thuoc.wav
# xoảng tiền xu
f -i "$S/Cinematic Sound Design - UI Interaction Elements/Ting Coins.wav" $O/xu.wav
# máy khoan xa (công trường, lọc trầm, nhỏ)
f -ss 20 -t 3 -i "$S/Epic Stock Media - Public Spaces - Urban Life Exteriors/AMBCnst_Baltimore Construction Streetside Heavy Machinery And Jakchammers 01_ESM_CPS.wav" -af "lowpass=f=1500,afade=t=in:d=0.3,afade=t=out:st=2.3:d=0.7" $O/khoan.wav
# sáng phố (sân, xe xa, trẻ con chơi)
f -ss 30 -t 4 -i "$S/Epic Stock Media - Public Spaces - Urban Life Exteriors/AMBTown_City Courtyard Calm Street Distant Traffic Children Playing 03_ESM_CPS.wav" -af "afade=t=in:d=0.4,afade=t=out:st=3.2:d=0.8" $O/sang.wav
# hũ sành cọ đất: tiếng gỗ hạt lạo xạo, hạ tần
f -i "$S/Epic Stock Media - HD Game Materials/WOODFric_Wood Shaker Microphone Head Roll Table Alternate Grainy 05_ESM_HDGM.wav" -af "atrim=0:2.2,asetrate=48000*0.7,aresample=48000,lowpass=f=1800,atrim=0:2.4,afade=t=out:st=1.8:d=0.6" $O/hu.wav
# chuông gió: vài nốt kim loại cao ngẫu nhiên, ngân
f -f lavfi -i "aevalsrc='0.25*sin(2*PI*1760*t)*exp(-3*t)+gte(t,0.35)*0.2*sin(2*PI*2349*t)*exp(-3*(t-0.35))+gte(t,0.8)*0.2*sin(2*PI*1975*t)*exp(-3*(t-0.8))+gte(t,1.2)*0.15*sin(2*PI*2637*t)*exp(-3*(t-1.2))':s=48000:d=2.6" -af "aecho=0.8:0.6:70:0.3" $O/chuonggio.wav
# tách máy ảnh: 2 xung ngắn
f -f lavfi -i "aevalsrc='(random(0)-0.5)*(exp(-300*t)+gte(t,0.07)*exp(-250*(t-0.07)))':s=48000:d=0.3" -af "highpass=f=1200,volume=3" $O/tach.wav
# măm: pop tụt
f -i video/public/sh6/sfx/pop.wav -af "asetrate=48000*0.75,aresample=48000" $O/mam.wav
# cân mức
for g in chuonggio:13 khoa:4 thuoc:6 khoan:6 sang:8 hu:8; do n=${g%%:*}; v=${g##*:}
  ffmpeg -v error -y -i $O/$n.wav -af "volume=${v}dB,alimiter=limit=0.8" $O/$n.tmp.wav && mv $O/$n.tmp.wav $O/$n.wav; done
for x in $O/*.wav; do printf "%-10s %s %s\n" $(basename $x .wav) $(ffprobe -v error -show_entries format=duration -of csv=p=0 $x) "$(ffmpeg -i $x -af volumedetect -f null - 2>&1 | grep -o 'max_volume: [-0-9.]* dB')"; done
