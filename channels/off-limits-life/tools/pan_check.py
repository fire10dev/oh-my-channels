"""Cross-check frame_teardown pan flags with phase correlation (global shift between a shot's first and last frame).

Farneback flow on large flat-colour areas can report hundreds of px of pan on a pure centre push-in.
Phase correlation of the whole frame is ~0 px for a centre zoom and ~the real shift for a pan.
This does not change the gate; it is evidence for reviewing flagged shots.
Usage: uv run --with opencv-python-headless --with numpy python tools/pan_check.py VIDEO TEARDOWN_DIR
"""
import json
import sys

import cv2
import numpy as np

video, td = sys.argv[1], sys.argv[2]
shots = json.load(open(f'{td}/shots.json'))
cap = cv2.VideoCapture(video)
fps = cap.get(cv2.CAP_PROP_FPS)


def grab(t: float) -> np.ndarray:
    cap.set(cv2.CAP_PROP_POS_FRAMES, int(round(t * fps)))
    ok, f = cap.read()
    return cv2.cvtColor(cv2.resize(f, (640, 360)), cv2.COLOR_BGR2GRAY).astype(np.float32)


rows = []
for s in shots:
    if s['pan_px'] <= 100:
        continue
    a, b = grab(s['start'] + 0.1), grab(s['start'] + s['dur'] - 0.1)
    (dx, dy), resp = cv2.phaseCorrelate(a, b)
    real = float(np.hypot(dx, dy)) * 3  # 640 -> 1920 px
    rows.append({'start': s['start'], 'dur': s['dur'], 'teardown_pan_px': s['pan_px'], 'phase_shift_px': round(real, 1), 'real_pan': real > 100})
for r in rows:
    print(r)
n = len(shots)
real = sum(r['real_pan'] for r in rows)
print(f'flagged {len(rows)}/{n} ({100 * len(rows) / n:.1f}%) · confirmed by phase correlation {real}/{n} ({100 * real / n:.1f}%)')
json.dump(rows, open(f'{td}/pan_check.json', 'w'), indent=1)
