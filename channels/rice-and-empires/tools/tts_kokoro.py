"""Kokoro TTS per scene -> public/<id>/vo-NN.wav + timeline.json (durations drive scene lengths).

Usage: .venv/bin/python tts_kokoro.py <scenes.json> <out_dir> [voice] [speed]
scenes.json: [{"id": "hook", "say": "..."}]
"""
import json
import sys
from pathlib import Path

import numpy as np
import soundfile as sf
from kokoro import KPipeline

SR = 24000
scenes = json.loads(Path(sys.argv[1]).read_text())
out = Path(sys.argv[2])
voice = sys.argv[3] if len(sys.argv) > 3 else "af_heart"
speed = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
out.mkdir(parents=True, exist_ok=True)

pipe = KPipeline(lang_code="a")  # American English
timeline = []
for i, s in enumerate(scenes):
    chunks = [r.audio.numpy() for r in pipe(s["say"], voice=voice, speed=speed) if r.audio is not None]
    audio = np.concatenate(chunks)
    name = f"vo-{i:02d}.wav"
    sf.write(out / name, audio, SR)
    timeline.append({"id": s["id"], "file": name, "seconds": round(len(audio) / SR, 3)})
    print(s["id"], timeline[-1]["seconds"], flush=True)

(out / "timeline.json").write_text(json.dumps(timeline, indent=1))
print("total", round(sum(t["seconds"] for t in timeline), 2))
