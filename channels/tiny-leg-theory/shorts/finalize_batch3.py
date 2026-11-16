"""Batch 3 (s131-s230): loudnorm out/ -> final/, then append metadata rows to upload-metadata-batch3{,-vi}.csv.

Run from anywhere:  python3 shorts/finalize_batch3.py [ids...]   (default: every s131+ id in shorts.json with an out/ file)
Loudness target matches batch 1: ~-15 LUFS integrated, true peak -1.5 dB (two-pass loudnorm).
"""
import csv, json, re, subprocess, sys, pathlib

R = pathlib.Path(__file__).resolve().parent
SPEC = {s["id"]: s for s in json.load(open(R / "shorts.json"))["shorts"]}


def num(sid):
    return int(re.match(r"s(\d+)", sid).group(1))


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s["title"].lower()).strip("-")


def loudnorm(src, dst):
    probe = subprocess.run(["ffmpeg", "-hide_banner", "-nostats", "-i", str(src), "-af",
                            "loudnorm=I=-15:TP=-1.5:LRA=11:print_format=json", "-f", "null", "-"],
                           capture_output=True, text=True).stderr
    m = json.loads(probe[probe.rindex("{"):probe.rindex("}") + 1])
    af = (f"loudnorm=I=-15:TP=-1.5:LRA=11:measured_I={m['input_i']}:measured_TP={m['input_tp']}:"
          f"measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true")
    subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(src), "-c:v", "copy",
                    "-af", af, "-ar", "48000", "-c:a", "aac", "-b:a", "192k", str(dst)], check=True)


def desc(s):
    lines = s["lines"]
    tip = next((l["vo"] for l in lines[1:] if l.get("color") == "green"), lines[-1]["vo"])
    body = f"{lines[0]['vo']} {tip}"
    if s.get("lang") == "vi":
        return (f"{body}\n\nGiải thích đơn giản hoá, không phải lời khuyên y tế hay chuyên môn.\n\n"
                "#shorts #tamly #thoiquen #lythuyetchanque")
    return (f"{body}\n\nMechanism: {s['mechanism']}. Simplified explainer, not medical or professional advice.\n\n"
            "#shorts #psychology #habits #productivity")


def main(ids):
    rows = {"en": [], "vi": []}
    for sid in ids:
        s = SPEC[sid]
        name = f"{sid}-{slug(s)}.mp4"
        src, dst = R / "out" / name, R / "final" / name
        if not src.exists():
            print(f"{sid} MISSING out/{name}"); continue
        loudnorm(src, dst)
        lang = "vi" if s.get("lang") == "vi" else "en"
        rows[lang].append({"id": sid, "mascot": s["mascot"].capitalize(),
                           "title": s.get("title_vi", s["title"]), "description": desc(s), "file": f"final/{name}"})
        print(f"{sid} OK final/{name}")
    for lang, fn in (("en", "upload-metadata-batch3.csv"), ("vi", "upload-metadata-batch3-vi.csv")):
        p = R / fn
        old = {r["id"]: r for r in csv.DictReader(open(p))} if p.exists() else {}
        old.update({r["id"]: r for r in rows[lang]})
        with open(p, "w", newline="") as f:
            w = csv.DictWriter(f, ["id", "mascot", "title", "description", "file"])
            w.writeheader()
            for k in sorted(old, key=num):
                w.writerow(old[k])


if __name__ == "__main__":
    ids = sys.argv[1:] or sorted([k for k in SPEC if num(k) >= 131], key=lambda k: (num(k), k))
    main(ids)
