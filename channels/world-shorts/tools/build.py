"""Script -> render-ready props. Kokoro per beat, word timings, video.json, geo.json, music/sfx.
Usage: ../../shared/tts/.venv/bin/python -I tools/build.py scripts/<id>.json   (run from channels/world-shorts)
Script: {id, lang, voice, speed?, brand, accent, source, music, beats:[{say, cam:{lon,lat,span}, title?, hl?, a1?, pins?, big?, bars?, line?, ghost?, river?}], admin1?, rivers?}"""
import json, re, shutil, subprocess, sys
from pathlib import Path
import numpy as np, soundfile as sf
from kokoro_onnx import Kokoro

ROOT = Path(__file__).resolve().parents[1]
REPO = ROOT.parents[1]
TTS = REPO / "shared/tts"
SR, LEAD, GAP, TAIL, FPS = 24000, 0.15, 0.18, 0.9, 30
spec_path = Path(sys.argv[1]).resolve()
spec = json.loads(spec_path.read_text())
vid = spec["id"]
pub = ROOT / "engine/public" / vid
pub.mkdir(parents=True, exist_ok=True)

k = Kokoro(str(TTS / "kokoro-v1.0.onnx"), str(TTS / "voices-v1.0.bin"))
LANG = {"en": "en-us", "es": "es", "fr": "fr-fr", "pt": "pt-br"}[spec.get("lang", "en")]
voice, speed = spec.get("voice", "am_michael"), spec.get("speed", 1.08)


def speakable(s):
    # captions keep the written form; TTS gets a few expansions Kokoro reads badly
    s = re.sub(r"(\d),(\d{3})", r"\1\2", s)
    return s.replace("%", " percent" if LANG.startswith("en") else " por ciento" if LANG == "es" else "%").replace("km²", "square kilometers")


parts, t = [np.zeros(int(LEAD * SR), np.float32)], LEAD
beats = []
for b in spec["beats"]:
    audio, _ = k.create(speakable(b["say"]), voice=voice, speed=speed, lang=LANG)
    nz = np.nonzero(np.abs(audio) > 0.008)[0]
    audio = audio[max(nz[0] - int(0.02 * SR), 0): nz[-1] + int(0.05 * SR)].astype(np.float32)
    sp = len(audio) / SR
    words = b["say"].split()
    wts = [len(re.sub(r"[^\w%$€]", "", w)) + 2.5 for w in words]
    tot, acc, ws = sum(wts), 0.0, []
    for w, x in zip(words, wts):
        t0 = t + sp * acc / tot; acc += x; t1 = t + sp * acc / tot
        ws.append({"w": w.strip(",.;:!?\"“”"), "t0": round(t0, 3), "t1": round(t1, 3)})
    start = t if beats else 0.0
    parts.append(audio); t += sp
    parts.append(np.zeros(int(GAP * SR), np.float32)); t += GAP
    beats.append({**{kk: vv for kk, vv in b.items()}, "start": round(start, 3), "words": ws})
parts.append(np.zeros(int(TAIL * SR), np.float32)); t += TAIL
for i, b in enumerate(beats):
    b["dur"] = round((beats[i + 1]["start"] if i + 1 < len(beats) else t) - b["start"], 3)
sf.write(pub / "vo.wav", np.concatenate(parts), SR)

music = None
if spec.get("music"):
    src = REPO / spec["music"]
    name = re.sub(r"[^a-z0-9]+", "-", src.stem.lower()).strip("-") + src.suffix
    dst = ROOT / "engine/public/music" / name
    if not dst.exists():
        shutil.copy(src, dst)
    music = {"file": f"music/{name}", "vol": spec.get("music_vol", 0.11)}

sfx = []
for i, b in enumerate(beats):
    if i and b["cam"] != beats[i - 1]["cam"]:
        sfx.append({"file": "sfx/whoosh.wav", "at": max(0, b["start"] - 0.1), "vol": 0.28})
    if b.get("big") or b.get("pins"):
        sfx.append({"file": "sfx/pop.wav", "at": b["start"] + 0.3, "vol": 0.3})

video = {"id": vid, "fps": FPS, "frames": int(round(t * FPS)), "brand": spec["brand"], "source": spec["source"], "accent": spec.get("accent", "#ff4d4d"),
         "beats": beats, "vo": "vo.wav", "locale": {"en": "en-US", "es": "es-ES", "fr": "fr-FR", "pt": "pt-BR"}[spec.get("lang", "en")], "music": music, "sfx": sfx}
(pub / "video.json").write_text(json.dumps(video, ensure_ascii=False, indent=1))

subprocess.run([str(ROOT / "tools/.venv/bin/python"), str(ROOT / "tools/build_geo.py"), str(spec_path)], check=True)
ids_f = ROOT / "engine/src/ids.json"
ids = json.loads(ids_f.read_text())
if vid not in ids:
    ids_f.write_text(json.dumps(sorted(ids + [vid])))
print(f"{vid}: {t:.1f}s beats={len(beats)} voice={voice}")
