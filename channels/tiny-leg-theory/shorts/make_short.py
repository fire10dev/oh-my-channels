# Build one 9:16 B1 Short from shorts.json: voice (Kokoro blend) -> captions -> portrait project.json.
# Run with the Kokoro venv:  tts/.venv/bin/python -I shorts/make_short.py s01 [--lang en]
import sys, json, struct, shutil, pathlib, numpy as np, soundfile as sf

ROOT = pathlib.Path(__file__).resolve().parent
AB = ROOT.parent
sid = sys.argv[1]
spec = {s["id"]: s for s in json.load(open(ROOT / "shorts.json"))["shorts"]}[sid]
mascot = spec["mascot"]
out = ROOT / "build" / sid
out.mkdir(parents=True, exist_ok=True)

# ---------- voice ----------
VOICES = {"buff": ([("am_onyx", 0.6), ("am_fenrir", 0.4)], 0.92),
          "pen": ([("am_puck", 0.6), ("am_liam", 0.4)], 1.05)}
from kokoro_onnx import Kokoro
k = Kokoro(str(AB / "tts/kokoro-v1.0.onnx"), str(AB / "tts/voices-v1.0.bin"))
mix, speed = VOICES[mascot]
style = sum(k.get_voice_style(v) * w for v, w in mix)
parts, t, timing, sr = [], 0.0, [], 24000
VI_VOICE = {"buff": "Adam bựa", "pen": "Thiện Minh"}  # VieNeu presets chosen 2026-11-14
if spec.get("lang") == "vi":
    import subprocess, tempfile
    vi_dir = pathlib.Path(tempfile.mkdtemp())
    subprocess.run([str(AB / "tts-vi/.venv/bin/python"), "-I", str(AB / "tts-vi/vi_tts.py"), VI_VOICE[mascot], str(vi_dir)],
                   input=json.dumps([l["vo"] for l in spec["lines"]]), text=True, check=True)
for n, line in enumerate(spec["lines"]):
    if spec.get("lang") == "vi":
        audio, sr = sf.read(vi_dir / f"{n:03d}.wav", dtype="float32")
    else:
        audio, sr = k.create(line["vo"], voice=style, speed=speed, lang="en-us")
    nz = np.nonzero(np.abs(audio) > 0.01)[0]
    audio = audio[max(nz[0] - int(0.03 * sr), 0): nz[-1] + int(0.05 * sr)]
    timing.append((round(t, 3), round(t + len(audio) / sr, 3)))
    parts.append(audio); t += len(audio) / sr
    if n < len(spec["lines"]) - 1:
        pause = 0.16 if line["vo"].rstrip().endswith(",") else 0.3
        parts.append(np.zeros(int(pause * sr), dtype=audio.dtype)); t += pause
sf.write(out / "narration.wav", np.concatenate(parts), sr)
LEAD, TAIL = 0.15, 0.7
DURATION = t + LEAD + TAIL

# ---------- shared assets ----------
for f in ["room-tone.wav", "chalkboard-1.ttf"]:
    if not (out / f).exists(): shutil.copy(AB / "b1-v3/J" / f, out / f)
FONT = "chalkboard-1.ttf"
if spec.get("lang") == "vi":  # Chalkboard lacks Vietnamese diacritics
    shutil.copy(AB / "shorts/fonts/PatrickHand-Regular.ttf", out / "PatrickHand-Regular.ttf"); FONT = "PatrickHand-Regular.ttf"
MUSIC = {"buff": AB / "shorts/music/buff.mp3", "pen": AB / "shorts/music/pen.mp3"}[mascot]
shutil.copy(MUSIC, out / "music.mp3")
ART = AB / ("b1-v3/art-J" if mascot == "buff" else "b1-v3/art-A")
PREFIX = {"buff": ("t", "q"), "pen": ("a", "b")}[mascot]
names = {p.stem.split("_", 1)[1]: p for p in ART.glob("*.png")}  # e.g. "panic" -> t02_panic.png
names.update({"front": ART / f"{'buff' if mascot == 'buff' else 'pen'}_front.png",
              "34": ART / f"{'buff' if mascot == 'buff' else 'pen'}_34.png"})

def size(p):
    with open(p, "rb") as fh: return struct.unpack(">II", fh.read(24)[16:24])

# ---------- layout (1280 x 2275.56 design plane) ----------
W, H = 1280, 1280 * 1920 / 1080
SAFE = (0.06 * W, 0.08 * H, W - 0.12 * W, H - 0.18 * H)  # x0, y0, x1, y1
COL = {"red": "#EC4338", "green": "#3E9B57", "gold": "#D9962B", "ink": None}
uid = [0]
def nid(p): uid[0] += 1; return f"{p}{uid[0]}"

def place(key, box_h, cy, cx, d, role, why, enter="rise"):
    p = names[key]; iw, ih = size(p)
    h = box_h; w = h * iw / ih
    maxw = SAFE[2] - SAFE[0] - (150 if enter == "left" else 40)  # leave room for the slide-in and small tilt
    if w > maxw: w = maxw; h = w * ih / iw
    x, y = cx - w / 2, cy - h / 2
    lo = SAFE[0] + (110 if enter == "left" else 16)
    x = min(max(x, lo), SAFE[2] - 16 - w)
    y = min(max(y, SAFE[1] + 400), BAND_LIMIT - h - 60)  # room for the 36-unit rise below and heading above
    keys = [{"t": 0, "y": y + 36, "alpha": 0}, {"t": 0.35, "y": y, "alpha": 1},
            {"t": max(0.8, d * 0.5), "y": y - 8, "angle": 0.012}, {"t": max(1.2, d - 0.1), "y": y, "angle": -0.01}]
    if enter == "left": keys[0] = {"t": 0, "x": x - 90, "y": y, "alpha": 0}; keys[1] = {"t": 0.4, "x": x, "y": y, "alpha": 1}
    lid = nid(role)
    layer = {"type": "image", "id": lid, "motion": {"role": role, "reason": why}, "path": str(p),
             "x": round(x, 1), "y": round(y, 1), "w": round(w, 1), "h": round(h, 1), "keys": keys}
    reg = (x - 100 if enter == "left" else x - 14, y - 24, x + w + 14, y + h + 50)
    return layer, reg

def clamp(r):
    return (max(r[0], SAFE[0]), max(r[1], SAFE[1]), min(r[2], SAFE[2]), min(r[3], BAND_LIMIT))

CAP_SIZE = 64
MAXC = 22
BAND_LIMIT = SAFE[3] - (CAP_SIZE * 0.75 + 16) - CAP_SIZE * 0.5 - 18 - 48 - 24 - 2  # runtime band_top - 24 (b-style-portrait.mjs)

starts = [0.0] + [LEAD + a for a, _ in timing[1:]]
ends = starts[1:] + [DURATION]
shots, captions = [], []
for i, (line, (a, b), s, e) in enumerate(zip(spec["lines"], timing, starts, ends)):
    d = round(e - s, 3); layers, regions = [], []
    tid = nid("text")
    txt = {"type": "text", "id": tid, "text": line["text"], "x": SAFE[0] + 30, "y": SAFE[1] + 70,
           "w": SAFE[2] - SAFE[0] - 60, "size": line.get("size", 92), "bold": True}
    if COL.get(line.get("color", "ink")): txt["color"] = COL[line["color"]]
    layers.append(txt)
    regions.append({"id": f"r{tid}", "role": "information", "layer_ids": [tid],
                    "region": dict(zip("xywh", (SAFE[0] + 10, SAFE[1] + 20, SAFE[2] - SAFE[0] - 20, 360))),
                    "intent": "Short heading reads first at the top of the phone frame."})
    actor, prop = line.get("actor"), line.get("prop")
    if actor and prop:
        left = i % 2 == 1
        lay, r = place(prop, 260, SAFE[1] + 520, W * (0.20 if left else 0.74), d, "prop", line.get("why", "Supporting prop appears"))
        layers.append(lay); regions.append(("prop", lay["id"], r))
        lay, r = place(actor, 800, BAND_LIMIT - 420, W * (0.56 if left else 0.40), d, "actor", line.get("why", "Mascot acts out the line"))
        layers.append(lay); regions.append(("actor", lay["id"], r))
    elif actor:
        lay, r = place(actor, 1050, BAND_LIMIT - 560, W * 0.47, d, "actor", line.get("why", "Mascot acts out the line"))
        layers.append(lay); regions.append(("actor", lay["id"], r))
    elif prop:
        lay, r = place(prop, 720, (SAFE[1] + 420 + BAND_LIMIT) / 2, W * 0.47, d, "prop", line.get("why", "Close-up on the key object"), enter="left")
        layers.append(lay); regions.append(("prop", lay["id"], r))
    regs = [regions[0]]
    for role, lid, r in regions[1:]:
        x0, y0, x1, y1 = clamp(r)
        regs.append({"id": f"r{lid}", "role": role, "layer_ids": [lid],
                     "region": {"x": round(x0, 1), "y": round(y0, 1), "w": round(x1 - x0, 1), "h": round(y1 - y0, 1)},
                     "intent": "Frame the whole figure or object and its small rise/bob motion above the captions."})
    for l in layers:  # strictly increasing key times inside the shot
        if "keys" in l:
            ks, last = [], -1
            for kk in l["keys"]:
                kk = dict(kk, t=round(min(kk["t"], d - 0.05), 3))
                if kk["t"] > last: ks.append(kk); last = kk["t"]
            l["keys"] = ks
    shots.append({"start": round(s, 3), "end": round(e, 3), "layers": layers,
                  "portrait": {"intent": "Heading on top, the mascot or key object centred below it, captions in their own band.",
                               "regions": regs}})
    chunks, cur = [], ""
    for wd in line["vo"].split():  # one-line cues of <= MAXC chars, split at word boundaries
        if cur and len(cur) + 1 + len(wd) > MAXC: chunks.append(cur); cur = wd
        else: cur = f"{cur} {wd}".strip()
    chunks.append(cur)
    tot = sum(len(c) for c in chunks); t0 = LEAD + a + 0.02
    for c in chunks:
        t1 = t0 + (LEAD + b - (LEAD + a + 0.02)) * len(c) / tot
        captions.append({"start": round(t0, 3), "end": round(t1, 3), "text": c}); t0 = t1

proj = {"version": 1, "style": "B1", "width": 1080, "height": 1920, "fps": 30,
        "voice": {"path": "narration.wav", "lead": LEAD, "tail": TAIL},
        "font": FONT, "music": {"path": "music.mp3", "gain": {"buff": 0.065, "pen": 0.11}[mascot]},  # buff track is ~4 dB louder
        "captions": captions, "shots": shots,
        "sfx": [{"time": round(LEAD + timing[0][0] + 0.05, 3), "kind": "pop", "gain": 0.05}] +
               [{"time": round(LEAD + a, 3), "kind": "tap", "gain": 0.035} for a, _ in timing[1::2]],
        "ambience": [{"path": "room-tone.wav", "start": 0, "end": int(DURATION * 1000) / 1000 - 0.001, "gain": 0.035, "fadeIn": 0.4, "fadeOut": 0.6}]}
json.dump(proj, open(out / "project.json", "w"), indent=1)
print(sid, mascot, round(DURATION, 2), "s", len(shots), "shots")
