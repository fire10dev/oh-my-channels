"""One Kokoro TTS call per shot -> public/<id>/narration.wav + src/data/<id>.timeline.json.

Each shot line is voiced separately (cut points = exact audio boundaries, idea from stickman-ab/tts/vo.py).
Usage: REPO/stickman-ab/tts/.venv/bin/python tools/tts_shots.py src/data/ix002.json ix002 [voice] [speed]
Timeline: segments in order; card = silent chapter card, shot = narration line. Times in seconds.
"""
import json
import sys
from pathlib import Path

import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro

TTS = Path("/Users/nino/Projects/FIRE10.DEV/REPO/stickman-ab/tts")
CARD = 1.1      # silent chapter card
P_COMMA = 0.14  # pause after a line ending in a comma
P_STOP = 0.32   # pause after a full stop / question
P_CHAPTER = 0.35

src, vid = Path(sys.argv[1]), sys.argv[2]
voice = sys.argv[3] if len(sys.argv) > 3 else "af_heart"
speed = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
data = json.loads(src.read_text())
k = Kokoro(str(TTS / "kokoro-v1.0.onnx"), str(TTS / "voices-v1.0.bin"))
SR = 24000
parts, segs, t = [], [], 0.0


def silence(sec: float) -> None:
    global t
    parts.append(np.zeros(int(round(sec * SR)), dtype=np.float32))
    t += sec


for ci, ch in enumerate(data["chapters"]):
    if ch.get("card"):
        segs.append({"type": "card", "ch": ci, "start": round(t, 3), "dur": CARD})
        silence(CARD)
    for si, sh in enumerate(ch["shots"]):
        audio, sr = k.create(sh["s"], voice=voice, speed=speed, lang="en-us")
        assert sr == SR
        nz = np.nonzero(np.abs(audio) > 0.01)[0]
        audio = audio[max(nz[0] - int(0.02 * SR), 0): nz[-1] + int(0.06 * SR)].astype(np.float32)
        start = t
        parts.append(audio)
        t += len(audio) / SR
        last = si == len(ch["shots"]) - 1
        pause = P_CHAPTER if last else (P_COMMA if sh["s"].rstrip().endswith(",") else P_STOP)
        silence(pause)
        segs.append({"type": "shot", "ch": ci, "i": si, "start": round(start, 3), "speech": round(len(audio) / SR, 3), "dur": round(t - start, 3)})
        print(f"{ci}.{si:02d} {segs[-1]['speech']:5.2f}s  {sh['s']}", flush=True)

out = Path("public") / vid
out.mkdir(parents=True, exist_ok=True)
sf.write(out / "narration.wav", np.concatenate(parts), SR)
Path(f"src/data/{vid}.timeline.json").write_text(json.dumps({"total": round(t, 3), "segs": segs}, indent=1))
words = sum(len(sh["s"].split()) for ch in data["chapters"] for sh in ch["shots"])
shots = [s for s in segs if s["type"] == "shot"]
print(f"total {t:.1f}s  words {words}  wps {words / t:.2f}  shots {len(shots)}  cards {len(segs) - len(shots)}  cuts/min {(len(segs) - 1) / (t / 60):.1f}")
