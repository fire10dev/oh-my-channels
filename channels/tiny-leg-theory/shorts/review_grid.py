# One review strip per short: 6 frames (mid-point of every shot) -> shorts/review/<id>.jpg, plus an index grid.
import json, subprocess, pathlib, sys
from PIL import Image
R = pathlib.Path(__file__).parent
out = R / "review"; out.mkdir(exist_ok=True)
ids = sys.argv[1:] or [s["id"] for s in json.load(open(R / "shorts.json"))["shorts"]]
for sid in ids:
    p = json.load(open(R / "build" / sid / "project.json")); mp4 = R / "build" / sid / "output/preview.mp4"
    if not mp4.exists(): continue
    frames = []
    for i, sh in enumerate(p["shots"]):
        t = sh["start"] + min(1.0, (sh["end"] - sh["start"]) * 0.6)
        f = out / f".{sid}_{i}.png"
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{t:.2f}", "-i", str(mp4), "-frames:v", "1", "-vf", "scale=240:-1", str(f)], check=True)
        frames.append(Image.open(f)); f.unlink()
    strip = Image.new("RGB", (len(frames) * 244, frames[0].height), (40, 40, 40))
    for i, im in enumerate(frames): strip.paste(im, (i * 244, 0))
    strip.save(out / f"{sid}.jpg", quality=85)
    print(sid, len(frames))
