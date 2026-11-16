#!/usr/bin/env python3
"""make_variants.py — plan + cut 100 extra Shorts from the 30 existing tracks (A1..F5).

Per track: 3 new 20 s hooks (4 for the 10 longest tracks), each the loudest 20 s window that does not
overlap the original Short's hook or another chosen hook. Each variant gets a different layout
(full-bleed pan / zoomed detail / still + waves) and an on-screen caption.

public/hook2/<vid>.wav   20 s hook, 0.4 s fade-in, 1.5 s fade-out   (vid = <id>-<n>, n = 2..5; n=1 is the old Short)
src/variants.json        vid, id, n, hookStart, layout, caption, pan
"""
import json, subprocess, sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from prep_assets import HOOK_LEN, run  # noqa: E402

ROOT = Path(__file__).resolve().parent
PUB = ROOT / "public"
TARGET = 100
LAYOUTS = ["full", "detail", "still", "full"]

CAPTIONS = {
    "A": ["POV: it's 2013 and the drop is about to hit", "Night drive. Windows down. Volume up.",
          "Your sign to start the workout", "Main stage energy for your deadline"],
    "B": ["POV: first coffee, no notifications yet", "A soft start for a slow morning",
          "Window seat, sunlight, nowhere to be", "Play this while breakfast is cooking"],
    "C": ["POV: last table at the jazz bar", "Rain outside, red wine inside",
          "Sax, low lights, no rush", "For a slow late evening"],
    "D": ["POV: 2am and the bug finally makes sense", "Headphones on. Ship it.",
          "Lo-fi for the long debug session", "Coffee, code, repeat"],
    "E": ["POV: night shift in a neon city", "Coding like it's 1986",
          "Terminal glowing, city sleeping", "Synthwave for deep night focus"],
    "F": ["POV: phone face down, deep work mode", "No drums, no distractions",
          "Rain, piano and a quiet mind", "Ambient for long focus sessions"],
}


def per_second_energy(wav):
    out = run("ffmpeg", "-v", "info", "-i", str(wav), "-af",
              "astats=metadata=1:reset=1,ametadata=print:key=lavfi.astats.Overall.RMS_level:file=-",
              "-f", "null", "-").stdout
    import re
    per_sec, t = {}, None
    for line in out.splitlines():
        m = re.search(r"pts_time:([\d.]+)", line)
        if m:
            t = int(float(m.group(1)))
        m = re.search(r"RMS_level=(-?[\d.]+|-inf)", line)
        if m and t is not None:
            v = -120.0 if m.group(1) == "-inf" else float(m.group(1))
            per_sec.setdefault(t, []).append(10 ** (v / 20))
    return [sum(v) / len(v) for _, v in sorted(per_sec.items())]


def pick_windows(secs, taken, count, length=int(HOOK_LEN)):
    """Greedy: loudest window (start >= 8 s, ends >= 2 s before the song end) not overlapping `taken`."""
    chosen = []
    starts = range(8, max(9, len(secs) - length - 2))
    scored = sorted(starts, key=lambda s: -sum(secs[s:s + length]))
    for s in scored:
        if all(s + length <= a or s >= a + length for a in taken + chosen):
            chosen.append(s)
            if len(chosen) == count:
                break
    return sorted(chosen)


def main():
    tracks = json.loads((ROOT / "src" / "tracks.json").read_text())
    (PUB / "hook2").mkdir(parents=True, exist_ok=True)
    longest = {t["id"] for t in sorted(tracks, key=lambda t: -t["duration"])[: TARGET - 3 * len(tracks)]}
    variants = []
    for ti, t in enumerate(tracks):
        tid, g = t["id"], t["id"][0]
        want = 4 if tid in longest else 3
        wav = PUB / "audio" / f"{tid}.wav"
        starts = pick_windows(per_second_energy(wav), [int(t["hookStart"])], want)
        if len(starts) < want:
            sys.exit(f"{tid}: only {len(starts)} free windows")
        for k, start in enumerate(starts):
            n = k + 2
            vid = f"{tid}-{n}"
            out = PUB / "hook2" / f"{vid}.wav"
            if not out.exists():
                run("ffmpeg", "-v", "error", "-y", "-ss", str(start), "-t", str(HOOK_LEN), "-i", str(wav),
                    "-af", f"afade=t=in:d=0.4,afade=t=out:st={HOOK_LEN - 1.5}:d=1.5", "-c:a", "pcm_s16le", str(out))
            variants.append({"vid": vid, "id": tid, "n": n, "hookStart": float(start), "layout": LAYOUTS[k],
                             "caption": CAPTIONS[g][(k + ti) % 4], "pan": 1 if (k + ti) % 2 == 0 else -1})
        print(f"{tid} hooks: old {int(t['hookStart'])}s, new {starts}", flush=True)
    (ROOT / "src" / "variants.json").write_text(json.dumps(variants, ensure_ascii=False, indent=2))
    print(f"{len(variants)} variants")


if __name__ == "__main__":
    main()
