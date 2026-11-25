#!/usr/bin/env python3
"""make_mix.py [--dir ../morning] <pack#>... — 1-hour mix per pack from the pack's five 1-hour videos: first song pass of each
(length from out/render.log), 3 s video xfade + audio acrossfade, looped to 3600 s with 5 s fade-out.
Writes out_mix/<P|M><nn> <pack> 1 Hour Mix.mp4, "... thumbnail.jpg" (title on the first song's frame), chapters.json.
--dir: another lô folder with the same layout (songs.json, out/render.log, out/) — default batch4."""
import json, re, subprocess, sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

args = sys.argv[1:]
B4 = Path(__file__).resolve().parent
if args[:1] == ["--dir"]:
    B4, args = (Path.cwd() / args[1]).resolve(), args[2:]
XF, HOUR = 3, 3600
songs = json.loads((B4 / "songs.json").read_text())
rd = {m[0]: float(m[1]) for m in re.findall(r"^([A-Z]\d\d-\d) .*?\| round ([\d.]+)s", (B4 / "out/render.log").read_text(), re.M)}
(B4 / "out_mix").mkdir(exist_ok=True)
MORNING = songs[0]["id"].startswith("M")
SUB, SUBCOL = (("1 HOUR CALM MORNING MIX · COFFEE & STUDY", (255, 214, 150)) if MORNING
               else ("1 HOUR SYNTHWAVE MIX · NIGHT CODING", (120, 230, 255)))


def run(*a):
    subprocess.run(a, check=True)


for p in map(int, args):
    pack = [s for s in songs if s["pack"] == p]
    name = pack[0]["pack_name"]
    base = B4 / "out_mix" / f"{'M' if MORNING else 'P'}{p:02d} {name} 1 Hour Mix"
    ins, vf, af, off, starts = [], [], [], 0.0, []
    for i, s in enumerate(pack):
        ins += ["-t", f"{rd[s['id']]:.3f}", "-i", str(B4 / "out" / f"{s['id']} {s['title']} 1 Hour.mp4")]
        starts.append(off)
        if i:
            vf.append(f"[v{i-1}][{i}:v]xfade=transition=fade:duration={XF}:offset={off:.3f}[v{i}]")
            af.append(f"[a{i-1}][{i}:a]acrossfade=d={XF}[a{i}]")
        else:
            vf.append("[0:v]null[v0]"); af.append("[0:a]anull[a0]")
        off += rd[s["id"]] - XF
    round_len = off + XF
    n = len(pack) - 1
    rnd = base.with_name(base.name + " round.mp4")
    run("ffmpeg", "-v", "error", "-y", *ins, "-filter_complex", ";".join(vf + af), "-map", f"[v{n}]", "-map", f"[a{n}]",
        "-c:v", "libx264", "-preset", "veryfast", "-crf", "20", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k", str(rnd))
    run("ffmpeg", "-v", "error", "-y", "-stream_loop", "-1", "-i", str(rnd), "-t", str(HOUR), "-c:v", "copy",
        "-af", f"afade=t=out:st={HOUR-5}:d=5", "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", f"{base}.mp4")
    chapters, k = [], 0
    while True:
        t = (k // len(pack)) * (round_len - XF) + starts[k % len(pack)]
        if t > HOUR - 60:
            break
        chapters.append([int(t), pack[k % len(pack)]["id"]]); k += 1
    # thumbnail: frame 5 s into the first song + big title
    frame = base.with_name(base.name + " frame.jpg")
    run("ffmpeg", "-v", "error", "-y", "-ss", "5", "-i", str(rnd), "-frames:v", "1", "-q:v", "2", str(frame))
    im = Image.open(frame).convert("RGB").resize((1280, 720))
    shade = Image.new("RGBA", im.size, (0, 0, 0, 0)); d = ImageDraw.Draw(shade)
    for y in range(720):
        d.line([(0, y), (1280, y)], fill=(0, 0, 0, int(235 * max(0, 1 - y / 360) ** 0.6)))
    im = Image.alpha_composite(im.convert("RGBA"), shade)
    d = ImageDraw.Draw(im)
    f1 = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 92, index=1)
    f2 = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 44, index=1)
    d.text((56, 52), name.upper(), font=f1, fill=(255, 255, 255), stroke_width=3, stroke_fill=(0, 0, 0))
    d.text((60, 165), SUB, font=f2, fill=SUBCOL, stroke_width=2, stroke_fill=(0, 0, 0))
    im.convert("RGB").save(base.with_name(base.name + " thumbnail.jpg"), quality=92)
    frame.unlink()
    json.dump({"pack": p, "name": name, "round": round_len, "chapters": chapters},
              open(base.with_name(base.name + " chapters.json"), "w"))
    dur = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f"{base}.mp4"],
                         capture_output=True, text=True).stdout.strip()
    print(f"{base.name}: round {round_len:.1f}s, 1h {dur}s, {len(chapters)} chapters")
