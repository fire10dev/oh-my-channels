#!/bin/zsh
# make_common_sfx.sh — SFX dùng chung mọi tập (ep_build.py tìm sau pNN): sóng, mưa, sấm, máy rền, đám đông, côn trùng đêm, loa rè, gà gáy.
set -e; cd "${0:A:h}/.."
S="../../shared/library/sfx/sonniss-gdc2026/Sonniss.com-GDC2026-GameAudioBundle"; O=video/public/common/sfx; mkdir -p $O
f(){ ffmpeg -v error -y "$@" -ar 48000 -ac 2; }
E="$S/Epic Stock Media - Public Spaces - Storms Lakes Parks and Rural Nature Exteriors"
f -ss 5 -t 3 -i "$E/WATRLap_Summer Tennessee Lake Dock Water Ripples Wake Wave Gentle 05 Distant_ESM_CPS.wav" -af "afade=t=in:d=0.3,afade=t=out:st=2.3:d=0.7" $O/song.wav
f -ss 5 -t 3 -i "$S/The Noisery - City Rain/RAINConc_Rain Medium Exterior Splatter City Traffic 6_The Noisery_City Rain.wav" -af "afade=t=in:d=0.4,afade=t=out:st=2.2:d=0.8" $O/mua.wav
f -t 3 -i "$E/STORM_Texas Rain Thunder Initial Crash Boom Storm 01 Clap Lightning_ESM_CPS.wav" -af "afade=t=out:st=2.2:d=0.8" $O/sam.wav
f -ss 3 -t 3 -i "$S/Victor Ermakov - Industrial Ambiences - Ship Repair Factory/MACHInd_Crane Onboard Ride Squeaks Motors_CW.wav" -af "lowpass=f=900,afade=t=in:d=0.4,afade=t=out:st=2.3:d=0.7" $O/ren.wav
f -ss 5 -t 3 -i "$S/Jake Fielding - British Walla and Crowd/CRWDWalla_Pub Walla, Crowd, Bar, _Jake Fielding_British Walla and Crowd_14.wav" -af "lowpass=f=2500,afade=t=in:d=0.4,afade=t=out:st=2.3:d=0.7" $O/dongnguoi.wav
f -ss 5 -t 3 -i "$S/344 Audio - East Coast America Vol. 1/AMBSubn_Ambience, Forest Crickets, Birds, Connecticut 02_344 Audio_East Coast America.wav" -af "afade=t=in:d=0.4,afade=t=out:st=2.3:d=0.7" $O/dem.wav
# loa rè: tiếng ồn băng hẹp + méo
f -f lavfi -i "anoisesrc=d=0.8:c=pink:a=0.3" -af "bandpass=f=1800:w=600,acrusher=bits=6:mix=0.6,afade=t=out:st=0.5:d=0.3" $O/loa.wav
# gà gáy: dùng sáng phố P03 nếu không có gà (giữ chỗ)
cp video/public/p03/sfx/sang.wav $O/gagay.wav
for x in $O/*.wav; do ffmpeg -v error -y -i $x -af "loudnorm=I=-20:TP=-3,alimiter=limit=0.8" -ar 48000 $x.tmp.wav && mv $x.tmp.wav $x; done
ls $O
