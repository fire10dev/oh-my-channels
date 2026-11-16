"""Loop a music track (4 s crossfades) to cover a video and level it to the bed loudness used since IX002 (~-40 LUFS).
Usage: python3 tools/source_bed.py TRACK.mp3 public/<id>/bed.mp3 SECONDS"""
import json, math, re, subprocess, sys
src, dst, need = sys.argv[1], sys.argv[2], float(sys.argv[3])
dur = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', src], capture_output=True, text=True).stdout)
n = max(1, math.ceil((need + 8) / (dur - 4)))
out = subprocess.run(['ffmpeg', '-nostats', '-i', src, '-af', 'ebur128', '-f', 'null', '-'], capture_output=True, text=True).stderr
lufs = float(re.findall(r'I:\s+(-?[\d.]+) LUFS', out)[-1])
gain = -40.0 - lufs
inputs = sum((['-i', src] for _ in range(n)), [])
chain, last = [], '[0]'
for i in range(1, n):
    chain.append(f'{last}[{i}]acrossfade=d=4[a{i}]'); last = f'[a{i}]'
chain.append(f'{last}volume={gain:.1f}dB,atrim=0:{need + 6:.1f}[out]')
subprocess.run(['ffmpeg', '-v', 'error', '-y', *inputs, '-filter_complex', ';'.join(chain), '-map', '[out]', '-ar', '48000', dst], check=True)
print(f'{n} loops of {dur:.0f}s, gain {gain:.1f} dB -> {dst}')
