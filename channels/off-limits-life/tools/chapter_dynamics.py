"""Per-chapter gain on the final mix (performance dynamics; raises LRA toward the reference band).
Usage: python tools/chapter_dynamics.py ix002 IN.wav OUT.wav
Gain per chapter: GAIN_DB (IX002) or the chapter's own 'gain' field in src/data/<id>.json (IX003+)."""
import json, subprocess, sys
vid, src, dst = sys.argv[1:4]
GAIN_DB = {'hook': 0.8, 'flight': 0.0, 'sunset': -1.2, 'water': 0.0, 'food': 0.4, 'dark': -1.5, 'club': 1.2, 'sick': -1.0, 'sunrise': 0.6}
d = json.load(open(f'src/data/{vid}.json')); tl = json.load(open(f'src/data/{vid}.timeline.json'))
starts = {}
for g in tl['segs']:
    starts.setdefault(g['ch'], g['start'])
chs = sorted(starts)
parts = []
for n, c in enumerate(chs):
    a = starts[c]; b = starts[chs[n + 1]] if n + 1 < len(chs) else 1e6
    # optional '!gain_scale' in the script widens chapter contrast when the gate's LRA comes out low (IX010-IX012)
    g = 10 ** (float(d.get('gain_scale', 1)) * d['chapters'][c].get('gain', GAIN_DB.get(d['chapters'][c]['id'], 0)) / 20)
    parts.append(f"between(t,{a:.2f},{b:.2f})*{g:.4f}")
expr = '+'.join(parts)
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', src, '-af', f"volume='{expr}':eval=frame", dst], check=True)
