# YT Hub adapter: long/scripts/<id>.json + long/build/<id>/ -> long/build/<id>/hub.json (manifest v1, read by the app).
# Usage:  python3 long/hub_adapter.py [L1-en ...]      (no id = every script)    --register  also `ythub fact <id> manifest <path>`
# Before TTS a part is a chapter with seconds estimated from WPM; after the build, real parts/captions from build/.
import sys, json, pathlib, subprocess, datetime

ROOT = pathlib.Path(__file__).resolve().parent
STEPS = ["script", "tts", "visual", "render", "review"]
WPM = {"en": 185, "vi": 260}  # measured on built L1/L16 (Kokoro EN ~180-200, VieNeu VI ~262 syllables/min)


def words(s): return len(s.split())


def from_script(spec):
    """Nothing built yet: one part per chapter, timings estimated from word count."""
    parts, t, wpm = [], 0.0, WPM.get(spec.get("lang"), 185)
    for c, ch in enumerate(spec["chapters"]):
        slots = []
        for l in ch["lines"]:
            d = words(l["vo"]) / wpm * 60
            slots.append({"start": round(t, 3), "end": round(t + d, 3), "speaker": l["speaker"], "text": l["vo"], "words": words(l["vo"])})
            t += d + 0.4
        start = slots[0]["start"] if slots else t
        parts.append({"id": f"c{c:02d}", "title": ch["title"], "start": round(start, 3), "seconds": round(t - start, 3),
                      "steps": {"script": "ok"}, "slots": slots, "estimated": True})
    return parts, round(t, 3)


def from_build(spec, bd):
    """Built: parts from chapters.json; each line's time from its captions (captions never span two lines)."""
    order = json.load(open(bd / "chapters.json"))
    parts, offset = [], 0.0
    pending = {}  # chapter -> [line index, words left] while walking its parts
    for e in order:
        c, p = e["chapter"], e["part"]
        pid = f"c{c:02d}p{p}"
        pd = bd / pid
        lines = spec["chapters"][c]["lines"]
        proj = json.load(open(pd / "project.json")) if (pd / "project.json").exists() else {}
        li, left = pending.get(c, [0, words(lines[0]["vo"]) if lines else 0])
        slots = []
        for cap in proj.get("captions", []):
            if li >= len(lines): break
            if left == words(lines[li]["vo"]):
                l = lines[li]
                slots.append({"start": round(offset + cap["start"], 3), "end": 0, "speaker": l["speaker"], "text": l["vo"], "words": words(l["vo"])})
            slots[-1]["end"] = round(offset + cap["end"], 3) if slots else 0
            left -= words(cap["text"])
            if left <= 0:
                li += 1
                left = words(lines[li]["vo"]) if li < len(lines) else 0
        pending[c] = [li, left]

        val = {}
        if (pd / "validate.log").exists():
            try: val = json.loads((pd / "validate.log").read_text().strip().splitlines()[-1])
            except (ValueError, IndexError): pass
        out = pd / "output"
        issues = []
        render = "ok" if (out / "preview.mp4").exists() else "todo"
        if val and not val.get("valid", True): render = "fail"; issues.append(f"validate: {val.get('status', 'invalid')}")
        review = {"accepted": "ok", "approved": "ok", "rejected": "fail"}.get(val.get("visual_acceptance"), "todo")
        part = {"id": pid, "title": e["title"], "start": round(offset, 3), "seconds": e["seconds"],
                "steps": {"script": "ok", "tts": "ok" if (pd / "narration.wav").exists() else "todo",
                          "visual": "ok" if proj.get("shots") else "todo", "render": render, "review": review},
                "slots": slots, "issues": issues}
        if (out / "preview-contact-sheet.png").exists(): part["contact_sheet"] = str(out / "preview-contact-sheet.png")
        parts.append(part)
        offset += e["seconds"]
    return parts, round(offset, 3)


def build(lid):
    spec = json.load(open(ROOT / "scripts" / f"{lid}.json"))
    bd = ROOT / "build" / lid
    parts, dur = from_build(spec, bd) if (bd / "chapters.json").exists() else from_script(spec)
    return {"version": 1, "code": lid, "source": "tiny-leg-theory/long/hub_adapter.py",
            "generated_at": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"), "duration_s": dur,
            "steps": STEPS, "parts": parts}


def main(argv):
    register = "--register" in argv
    ids = [a for a in argv if not a.startswith("--")] or sorted(
        p.stem for p in (ROOT / "scripts").glob("L*.json") if ".draft" not in p.name)
    for lid in ids:
        m = build(lid)
        dest = ROOT / "build" / lid / "hub.json"
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(json.dumps(m, ensure_ascii=False, indent=1))
        msg = f"{lid}: {len(m['parts'])} parts, {m['duration_s']:.0f}s"
        if register:
            r = subprocess.run(["ythub", "fact", lid, "manifest", str(dest)], capture_output=True, text=True)
            msg += "" if r.returncode == 0 else f"  (ythub: {(r.stderr or r.stdout).strip().splitlines()[-1]})"
        print(msg)


if __name__ == "__main__":
    main(sys.argv[1:])
