# Build one 16:9 long video from long/scripts/<id>.json: per-chapter voice (Pen/Buff dialogue) -> captions -> project.json.
# Run with the Kokoro venv:  tts/.venv/bin/python -I long/make_long.py L1-en
# Writes long/build/<id>/cNN/project.json (one renderer project per chapter; music is mixed later over the whole video).
import sys, json, struct, shutil, pathlib, subprocess, numpy as np, soundfile as sf

ROOT = pathlib.Path(__file__).resolve().parent
AB = ROOT.parent
lid = sys.argv[1]
spec = json.load(open(ROOT / "scripts" / f"{lid}.json"))
VI = spec.get("lang") == "vi"
out = ROOT / "build" / lid
tts = out / "tts"
tts.mkdir(parents=True, exist_ok=True)
lines = [(c, n, l) for c, ch in enumerate(spec["chapters"]) for n, l in enumerate(ch["lines"])]

# ---------- voice: one wav per line, cached in build/<id>/tts/<k>.wav ----------
VOICES = {"buff": ([("am_onyx", 0.6), ("am_fenrir", 0.4)], 0.92),
          "pen": ([("am_puck", 0.6), ("am_liam", 0.4)], 1.05)}
VI_VOICE = {"buff": "Adam bựa", "pen": "Thiện Minh"}  # same VieNeu presets as the Shorts
def wav(k): return tts / f"{k:04d}.wav"
todo = [k for k in range(len(lines)) if not wav(k).exists()]
if todo and VI:
    for who in VI_VOICE:
        ks = [k for k in todo if lines[k][2]["speaker"] == who]
        if not ks: continue
        tmp = tts / f"_{who}"; tmp.mkdir(exist_ok=True)
        subprocess.run([str(AB / "tts-vi/.venv/bin/python"), "-I", str(AB / "tts-vi/vi_tts.py"), VI_VOICE[who], str(tmp)],
                       input=json.dumps([lines[k][2]["vo"] for k in ks]), text=True, check=True)
        for i, k in enumerate(ks): shutil.move(tmp / f"{i:03d}.wav", wav(k))
elif todo:
    from kokoro_onnx import Kokoro
    kk = Kokoro(str(AB / "tts/kokoro-v1.0.onnx"), str(AB / "tts/voices-v1.0.bin"))
    style = {w: sum(kk.get_voice_style(v) * g for v, g in VOICES[w][0]) for w in VOICES}
    for k in todo:
        l = lines[k][2]
        audio, sr = kk.create(l["vo"], voice=style[l["speaker"]], speed=VOICES[l["speaker"]][1], lang="en-us")
        sf.write(wav(k), audio, sr)

# ---------- art ----------
ART = {"buff": AB / "b1-v3/art-J", "pen": AB / "b1-v3/art-A"}
NAMES = {}
for who, d in ART.items():
    NAMES[who] = {p.stem.split("_", 1)[1]: p for p in d.glob("*.png")}  # "34", "front", "panic", "laptop_file" ...
PROPS = {p.stem.split("_", 1)[1] for p in ART["pen"].glob("b*.png")}  # b01_paper_mountain ... (objects, not poses)
def size(p):
    with open(p, "rb") as fh: return struct.unpack(">II", fh.read(24)[16:24])

W, H = 1280, 720
COL = {"red": "#EC4338", "green": "#3E9B57", "gold": "#D9962B", "ink": None}
FONT = "PatrickHand-Regular.ttf" if VI else "chalkboard-1.ttf"  # Chalkboard lacks Vietnamese diacritics
MAXC = 46
LEAD, TAIL = 0.15, 0.6
uid = [0]
def nid(p): uid[0] += 1; return f"{p}{uid[0]}"

def image(path, box_w, box_h, cx, bottom, d, role, why, slide):
    iw, ih = size(path)
    h = box_h; w = h * iw / ih
    if w > box_w: w = box_w; h = w * ih / iw
    x, y = cx - w / 2, bottom - h
    keys = [{"t": 0, "x": x + slide, "y": y, "alpha": 0}, {"t": 0.4, "x": x, "y": y, "alpha": 1},
            {"t": max(0.9, d * 0.5), "y": y - 6, "angle": 0.012}, {"t": max(1.3, d - 0.1), "y": y, "angle": -0.01}]
    return {"type": "image", "id": nid(role), "motion": {"role": role, "reason": why}, "path": str(path),
            "x": round(x, 1), "y": round(y, 1), "w": round(w, 1), "h": round(h, 1), "keys": keys}

def seg_len(k): return sf.info(wav(k)).duration + 0.4
meta, SEG = [], 50.0  # renderer previews at most 60 s, so each chapter renders as parts of <= ~50 s
for c, ch in enumerate(spec["chapters"]):
    ks_all = [k for k, (cc, _, _) in enumerate(lines) if cc == c]
    parts_k, acc = [[]], 0.0
    for k in ks_all:
        if parts_k[-1] and acc + seg_len(k) > SEG: parts_k.append([]); acc = 0.0
        parts_k[-1].append(k); acc += seg_len(k)
    for p, ks in enumerate(parts_k):
        cd = out / f"c{c:02d}p{p}"; cd.mkdir(exist_ok=True)
        for f in ["room-tone.wav", "chalkboard-1.ttf"]:
            if not (cd / f).exists(): shutil.copy(AB / "b1-v3/J" / f, cd / f)
        if VI: shutil.copy(AB / "shorts/fonts/PatrickHand-Regular.ttf", cd / FONT)
        parts, t, timing, sr = [], 0.0, [], None
        for j, k in enumerate(ks):
            audio, sr0 = sf.read(wav(k), dtype="float32")
            if sr is None: sr = sr0
            if sr0 != sr:  # resample by linear interpolation (Kokoro 24 kHz vs VieNeu 48 kHz never mix in one video)
                audio = np.interp(np.arange(0, len(audio), sr0 / sr), np.arange(len(audio)), audio).astype("float32")
            nz = np.nonzero(np.abs(audio) > 0.01)[0]
            audio = audio[max(nz[0] - int(0.03 * sr), 0): nz[-1] + int(0.05 * sr)]
            timing.append((round(t, 3), round(t + len(audio) / sr, 3)))
            parts.append(audio); t += len(audio) / sr
            if j < len(ks) - 1:
                nxt = lines[ks[j + 1]][2]
                pause = 0.45 if nxt["speaker"] != lines[k][2]["speaker"] else (0.18 if lines[k][2]["vo"].rstrip().endswith(",") else 0.32)
                parts.append(np.zeros(int(pause * sr), dtype="float32")); t += pause
        sf.write(cd / "narration.wav", np.concatenate(parts), sr)
        DURATION = t + LEAD + TAIL

        starts = [0.0] + [LEAD + a for a, _ in timing[1:]]
        ends = starts[1:] + [DURATION]
        shots, captions = [], []
        seg_lines = [lines[k][2] for k in ks]
        for j, (line, (a, b), s, e) in enumerate(zip(seg_lines, timing, starts, ends)):
            d = round(e - s, 3); who = line["speaker"]
            left_actor = who == "buff"  # Buff stands left, Pen right: the frame flips with each speaker
            tx = 700 if left_actor else 70
            txt = {"type": "text", "id": nid("text"), "text": line["text"], "x": tx, "y": 90 if lines[ks[j]][1] == 0 else 70, "w": 510,
                   "size": 64 if lines[ks[j]][1] == 0 else 54, "bold": True}
            # one long word (APPRENTICESHIP) cannot wrap: shrink so it fits the 510 px box, else validate fails
            txt["size"] = min(txt["size"], int(510 / (0.75 * max(len(w) for w in line["text"].split()))))
            col = "gold" if lines[ks[j]][1] == 0 and line.get("color", "ink") == "ink" else line.get("color", "ink")
            if COL.get(col): txt["color"] = COL[col]
            layers = [txt]
            names = NAMES[who]
            if line.get("actor") in PROPS:  # an object given as the actor: show it as the prop, mascot in a neutral pose
                line = dict(line, prop=line.get("prop") or line["actor"], actor="34")
            if line.get("prop") in names:
                layers.append(image(names[line["prop"]], 300, 230, tx + 255, 560, d, "prop",
                                    line.get("why", "Supporting prop appears beside the heading"), -40 if left_actor else 40))
            actor = line.get("actor") if line.get("actor") in names else "front"
            layers.append(image(names[actor], 520, 540, 340 if left_actor else 940, 600, d, "actor",
                                line.get("why", f"{who.capitalize()} acts out the line"), -60 if left_actor else 60))
            for l in layers:  # strictly increasing key times inside the shot
                if "keys" in l:
                    kl, last = [], -1
                    for kk in l["keys"]:
                        kk = dict(kk, t=round(min(kk["t"], d - 0.05), 3))
                        if kk["t"] > last: kl.append(kk); last = kk["t"]
                    l["keys"] = kl
            shots.append({"start": round(s, 3), "end": round(e, 3), "layers": layers})
            chunks, cur = [], ""
            for wd in line["vo"].split():  # one-line cues of <= MAXC chars, split at word boundaries
                if cur and len(cur) + 1 + len(wd) > MAXC: chunks.append(cur); cur = wd
                else: cur = f"{cur} {wd}".strip()
            chunks.append(cur)
            tot = sum(len(x) for x in chunks); t0 = LEAD + a + 0.02
            for x in chunks:
                t1 = t0 + (b - a - 0.02) * len(x) / tot
                captions.append({"start": round(t0, 3), "end": round(t1, 3), "text": x}); t0 = t1

        proj = {"version": 1, "style": "B1", "width": W, "height": H, "fps": 30,
                "voice": {"path": "narration.wav", "lead": LEAD, "tail": TAIL}, "font": FONT,
                "captions": captions, "shots": shots,
                "sfx": [{"time": round(LEAD + 0.05, 3), "kind": "pop", "gain": 0.05}][:1 if p == 0 else 0] +
                       [{"time": round(LEAD + timing[j][0], 3), "kind": "tap", "gain": 0.03}
                        for j in range(1, len(timing)) if seg_lines[j]["speaker"] != seg_lines[j - 1]["speaker"]],
                "ambience": [{"path": "room-tone.wav", "start": 0, "end": round(round(DURATION, 3) - 0.001, 3),
                              "gain": 0.035, "fadeIn": 0.3, "fadeOut": 0.4}]}
        json.dump(proj, open(cd / "project.json", "w"), indent=1)
        meta.append({"chapter": c, "part": p, "title": ch["title"][:1].upper() + ch["title"][1:], "seconds": round(DURATION, 3)})
json.dump(meta, open(out / "chapters.json", "w"), indent=1)
print(lid, len(meta), "chapters", round(sum(m["seconds"] for m in meta) / 60, 2), "min")
