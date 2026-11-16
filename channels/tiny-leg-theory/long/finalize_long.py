"""Join rendered chapters of one long -> add looped music -> two-pass loudnorm (-14 LUFS, TP -1.5) -> long/final/.
Also writes long/final/<id>.chapters.txt (YouTube chapter timestamps).  Usage: python3 long/finalize_long.py L1-en
"""
import json, re, subprocess, sys, pathlib

R = pathlib.Path(__file__).resolve().parent
MUSIC, GAIN = R.parent / "shorts/music/pen.mp3", 0.09


def run(*a, **kw):
    return subprocess.run(["ffmpeg", "-hide_banner", "-nostats", *a], capture_output=True, text=True, **kw)


def main(lid):
    spec = json.load(open(R / "scripts" / f"{lid}.json"))
    b = R / "build" / lid
    chs = sorted(b.glob("c*/output/preview.mp4"))
    meta = json.load(open(b / "chapters.json"))
    assert len(chs) == len(meta), f"{lid}: {len(chs)}/{len(meta)} parts rendered"
    (b / "list.txt").write_text("".join(f"file '{p}'\n" for p in chs))
    run("-y", "-f", "concat", "-safe", "0", "-i", str(b / "list.txt"), "-c", "copy", str(b / "joined.mp4"), check=True)
    dur = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0",
                                str(b / "joined.mp4")], capture_output=True, text=True).stdout)
    mix = (f"[1:a]volume={GAIN},afade=t=in:d=2,afade=t=out:st={dur - 4:.2f}:d=4[m];"
           "[0:a][m]amix=inputs=2:duration=first:normalize=0[a]")
    run("-y", "-i", str(b / "joined.mp4"), "-stream_loop", "-1", "-i", str(MUSIC), "-filter_complex", mix,
        "-map", "0:v", "-map", "[a]", "-c:v", "copy", "-c:a", "pcm_s16le", str(b / "mixed.mov"), check=True)
    probe = run("-i", str(b / "mixed.mov"), "-af", "loudnorm=I=-14:TP=-1.5:LRA=11:print_format=json", "-f", "null", "-").stderr
    m = json.loads(probe[probe.rindex("{"):probe.rindex("}") + 1])
    af = (f"loudnorm=I=-14:TP=-1.5:LRA=11:measured_I={m['input_i']}:measured_TP={m['input_tp']}:"
          f"measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true")
    slug = re.sub(r"[^a-z0-9]+", "-", spec["title"].lower()).strip("-")[:60] if spec["lang"] == "en" else ""
    dst = R / "final" / (f"{lid}-{slug}.mp4" if slug else f"{lid}.mp4")
    run("-y", "-i", str(b / "mixed.mov"), "-c:v", "copy", "-af", af, "-ar", "48000", "-c:a", "aac", "-b:a", "192k",
        "-movflags", "+faststart", str(dst), check=True)
    t, rows = 0.0, []
    for p, m in zip(chs, meta):
        if m["part"] == 0: rows.append(f"{int(t // 60)}:{int(t % 60):02d} {m['title']}")
        t += float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(p)],
                                  capture_output=True, text=True).stdout)
    rows[0] = "0:00 " + spec["chapters"][0]["title"]
    (R / "final" / f"{lid}.chapters.txt").write_text("\n".join(rows) + "\n")
    print(f"{lid} OK {dur / 60:.2f} min -> final/{dst.name}")


if __name__ == "__main__":
    for a in sys.argv[1:]: main(a)
