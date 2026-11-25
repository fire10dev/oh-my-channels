"""Kokoro TTS for a localised short: one call per shot -> engine/public/<id>/narration.wav + <data>.timeline.json.
Same timing rules as channels/off-limits-life/tools/tts_shots.py, plus a language code.
Usage: ../shared/tts/.venv/bin/python -I tools/tts_loc.py DATA.json ID LANG VOICE [SPEED]
LANG: es | fr-fr | pt-br | en-us ...  VOICE: em_alex, ef_dora, ff_siwis, pm_alex ... (comma blend 'a:0.6,b:0.4')"""
import json, sys
from pathlib import Path
import numpy as np, soundfile as sf
from kokoro_onnx import Kokoro

ROOT = Path(__file__).resolve().parents[1]
TTS = ROOT.parent / "shared" / "tts"
CARD, P_COMMA, P_STOP, P_CHAPTER, SR = 1.1, 0.14, 0.30, 0.35, 24000
src, vid, lang, voice = Path(sys.argv[1]), sys.argv[2], sys.argv[3], sys.argv[4]
speed = float(sys.argv[5]) if len(sys.argv) > 5 else 1.0
k = Kokoro(str(TTS / "kokoro-v1.0.onnx"), str(TTS / "voices-v1.0.bin"))
if ":" in voice:
    voice = sum(k.get_voice_style(v) * float(w) for v, w in (p.split(":") for p in voice.split(",")))
data = json.loads(src.read_text())
parts, segs, t = [], [], 0.0

def silence(sec):
    global t
    parts.append(np.zeros(int(round(sec * SR)), dtype=np.float32)); t += sec

for ci, ch in enumerate(data["chapters"]):
    if ch.get("card"):
        segs.append({"type": "card", "ch": ci, "start": round(t, 3), "dur": CARD}); silence(CARD)
    for si, sh in enumerate(ch["shots"]):
        audio, sr = k.create(sh["s"], voice=voice, speed=speed, lang=lang)
        nz = np.nonzero(np.abs(audio) > 0.01)[0]
        audio = audio[max(nz[0] - int(0.02 * SR), 0): nz[-1] + int(0.06 * SR)].astype(np.float32)
        start = t; parts.append(audio); t += len(audio) / SR
        last = si == len(ch["shots"]) - 1
        silence(P_CHAPTER if last else (P_COMMA if sh["s"].rstrip().endswith(",") else P_STOP))
        segs.append({"type": "shot", "ch": ci, "i": si, "start": round(start, 3), "speech": round(len(audio) / SR, 3), "dur": round(t - start, 3)})
out = ROOT / "engine" / "public" / vid
out.mkdir(parents=True, exist_ok=True)
sf.write(out / "narration.wav", np.concatenate(parts), SR)
src.with_suffix(".timeline.json").write_text(json.dumps({"total": round(t, 3), "segs": segs}, indent=1))
print(f"{vid} total {t:.1f}s shots {len(segs)}")
