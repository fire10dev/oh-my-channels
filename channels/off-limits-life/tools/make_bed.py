"""Pre-mix the music bed: +6.8 dB swell on cards/boards (no speech), fade in/out. Usage: python tools/make_bed.py ix002 SRC.mp3"""
import json, subprocess, sys
vid, src = sys.argv[1], sys.argv[2]
d = json.load(open(f'src/data/{vid}.json')); tl = json.load(open(f'src/data/{vid}.timeline.json'))
segs = tl['segs']; total = tl['total']
iv = []
for n, g in enumerate(segs):
    end = segs[n + 1]['start'] if n + 1 < len(segs) else total
    if g['type'] == 'card' or d['chapters'][g['ch']]['shots'][g['i']].get('d'):
        iv.append((g['start'], end))
expr = '+'.join(f'between(t,{a:.3f},{b:.3f})' for a, b in iv) or '0'  # no cards/boards: flat bed
af = f"volume='if({expr},4.5,1)':eval=frame,afade=t=in:d=0.7,afade=t=out:st={total + 0.3:.2f}:d=1.7,atrim=0:{total + 2.0:.2f}"
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', src, '-af', af, '-ar', '48000', f'public/{vid}/bed-mix.mp3'], check=True)
print(len(iv), 'swell intervals')
