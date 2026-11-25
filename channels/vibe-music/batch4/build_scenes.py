#!/usr/bin/env python3
"""build_scenes.py — batch-4 still-loop scenes without hand-placing effects.

  python3 -I build_scenes.py import G01-1 G03-5   # newest images in ~/Downloads (oldest first) -> images/<id>.<ext>
  python3 -I build_scenes.py scenes [ids...]      # prep + auto effects -> shorts/src/scenes.json (default: all ready)

`import` takes as many Downloads images as there are ids in the range, in download order, so download them in id
order. It writes images/contact_sheet.jpg (labelled) to check the mapping before rendering.
Auto effects: bokeh on the brightest saturated spots, breathing glows + dust on the 2 brightest areas, rain/snow
for rain/ice packs. Wave palette and accent come from the image's own colours.
"""
import colorsys, json, os, re, shutil, subprocess, sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw

# PACK_DIR=<folder with songs.json, images/, audio/> reuses this for other packs (e.g. ../morning).
B4 = Path(os.environ.get("PACK_DIR") or Path(__file__).parent).resolve()
SHORTS = Path(__file__).resolve().parent.parent / "shorts"
SONGS = {s["id"]: s for s in json.loads((B4 / "songs.json").read_text())}
ORDER = list(SONGS)
IMG_EXT = (".png", ".jpg", ".jpeg", ".webp")
RAIN = {"Cyber Rain", "Rainy Neon Cafe", "Rainy Morning Cafe"}
SNOW = {"Ice Cold Code", "Snowy Winter Morning"}


def id_range(a, b):
    return ORDER[ORDER.index(a): ORDER.index(b) + 1]


def image_of(sid):
    return next((p for p in (B4 / "images").glob(f"{sid}.*") if p.suffix.lower() in IMG_EXT), None)


def audio_of(sid):
    return next(iter((B4 / "audio").glob(f"{sid} *.mp3")), None)


def cmd_import(a, b):
    ids = id_range(a, b)
    dl = sorted((p for p in (Path.home() / "Downloads").iterdir() if p.suffix.lower() in IMG_EXT),
                key=lambda p: p.stat().st_mtime)[-len(ids):]
    if len(dl) < len(ids):
        sys.exit(f"need {len(ids)} images in Downloads, found {len(dl)}")
    (B4 / "images").mkdir(exist_ok=True)
    for sid, src in zip(ids, dl):
        dst = B4 / "images" / f"{sid}{src.suffix.lower()}"
        shutil.move(src, dst)
        print(f"{sid} <- {src.name}")
    sheet(ids)


def sheet(ids):
    tiles = []
    for sid in ids:
        im = Image.open(image_of(sid)).convert("RGB").resize((320, 180))
        d = ImageDraw.Draw(im)
        d.rectangle((0, 0, 320, 22), fill=(0, 0, 0))
        d.text((6, 5), f"{sid} {SONGS[sid]['title']}", fill=(255, 255, 255))
        tiles.append(im)
    cols = 5
    out = Image.new("RGB", (320 * cols, 180 * ((len(tiles) + cols - 1) // cols)))
    for i, t in enumerate(tiles):
        out.paste(t, (320 * (i % cols), 180 * (i // cols)))
    out.save(B4 / "images" / "contact_sheet.jpg", quality=85)
    print("sheet:", B4 / "images" / "contact_sheet.jpg")


def hexc(rgb):
    return "#%02x%02x%02x" % tuple(int(c) for c in rgb)


def lift(rgb, sat=0.75, val=0.95):
    h, s, v = colorsys.rgb_to_hsv(*(c / 255 for c in rgb))
    r, g, b = colorsys.hsv_to_rgb(h, max(s, 0.35) * sat, max(v, val))
    return (r * 255, g * 255, b * 255)


def auto_effects(img_path, pack):
    im = Image.open(img_path).convert("RGB")
    W, H = im.size
    small = np.asarray(im.resize((160, 90)), dtype=float)
    hsv = np.asarray(im.resize((160, 90)).convert("HSV"), dtype=float) / 255
    score = hsv[..., 2] * (0.4 + hsv[..., 1])
    score[78:, :] = 0  # bottom strip is under the waves
    sx, sy = W / 160, H / 90

    def peaks(n, sep):
        s, out = score.copy(), []
        for _ in range(n):
            y, x = np.unravel_index(np.argmax(s), s.shape)
            if s[y, x] < 0.45:
                break
            out.append((x, y))
            s[max(0, y - sep): y + sep + 1, max(0, x - sep): x + sep + 1] = 0
        return out

    bokeh = [{"x": int(x * sx), "y": int(y * sy), "r": int(W / 110),
              "color": "rgba(%d,%d,%d,0.9)" % tuple(int(c) for c in lift(small[y, x], 0.6, 1.0))}
             for x, y in peaks(10, 6)]
    glows = [{"x": int(x * sx), "y": int(y * sy), "r": int(W / 9)} for x, y in peaks(2, 25)]
    fx = {"bokeh": bokeh, "glows": glows, "dust": [dict(g) for g in glows]}
    if pack in RAIN:
        fx["rain"] = [{"x": 0, "y": 0, "w": int(W * 0.45), "h": int(H * 0.7)}]
    if pack in SNOW:
        fx["snow"] = [{"x": 0, "y": 0, "w": W, "h": int(H * 0.8)}]

    q = im.resize((200, 112)).quantize(12).convert("RGB")
    hsv_of = lambda c: colorsys.rgb_to_hsv(*(v / 255 for v in c))
    vivid = sorted((c for n, c in q.getcolors() if n > 60), key=lambda c: -hsv_of(c)[1] * (0.3 + hsv_of(c)[2]))
    picked = []  # greedy: most vivid colours whose hues are >= 0.08 apart
    for c in vivid:
        if all(min(abs(hsv_of(c)[0] - hsv_of(p)[0]), 1 - abs(hsv_of(c)[0] - hsv_of(p)[0])) >= 0.08 for p in picked):
            picked.append(c)
    picked = (picked + vivid)[:4]
    waves = [hexc(lift(c)) for c in picked]
    accent = hexc(lift(vivid[0], 1.0, 1.0))
    return fx, waves, accent, W, H


def cmd_scenes(ids):
    ids = ids or [s for s in ORDER if image_of(s) and audio_of(s)]
    path = SHORTS / "src" / "scenes.json"
    scenes = {s["id"]: s for s in json.loads(path.read_text())}
    for sid in ids:
        song, img, aud = SONGS[sid], image_of(sid), audio_of(sid)
        if not (img and aud):
            print(f"{sid}: missing {'image' if not img else 'audio'}, skipped")
            continue
        out = subprocess.run([str(SHORTS / "stillloop_prep.sh"), sid, str(img), str(aud)],
                             capture_output=True, text=True, check=True).stdout
        frames = int(re.search(r"roundFrames (\d+)", out).group(1))
        fx, waves, accent, W, H = auto_effects(img, song["pack_name"])
        scenes[sid] = {"id": sid, "img": f"scenes/{sid}{img.suffix.lower()}", "srcW": W, "srcH": H,
                       "audio": f"scenes/{sid}.wav", "roundFrames": frames, "title": song["title"],
                       "subtitle": f"{song.get('subtitle', 'Synthwave Night Coding')} · {song['bpm']} BPM",
                       "accent": accent,
                       "waves": waves, "effects": fx}
        print(f"{sid} {song['title']}: {W}x{H}, {frames} frames, {len(fx['bokeh'])} bokeh, waves {waves}")
    path.write_text(json.dumps(list(scenes.values()), ensure_ascii=False, indent=1))


if __name__ == "__main__":
    if sys.argv[1:2] == ["import"]:
        cmd_import(*sys.argv[2:4])
    elif sys.argv[1:2] == ["scenes"]:
        cmd_scenes(sys.argv[2:])
    else:
        sys.exit(__doc__)
