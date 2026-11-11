#!/usr/bin/env python3
"""make_shorts.py — one 20 s Short per rendered batch-4 song: loudest 20 s window (start >= 8 s) of the trimmed
song -> shorts/public/hookG/<id>.wav, metadata -> shorts/src/shortsG.json (ShortG-<id> in Root.tsx).
Render: python3 -I make_shorts.py && ./render_shorts.sh"""
import json, sys
from pathlib import Path

B4 = Path(__file__).resolve().parent
SHORTS = B4.parent / "shorts"
sys.path.insert(0, str(SHORTS))
from make_variants import per_second_energy, pick_windows  # noqa: E402
from prep_assets import HOOK_LEN, run  # noqa: E402

CAPTIONS = {
    "Midnight Terminal": ["POV: 2am, three monitors, zero bugs", "Root access to deep focus", "Terminal open. Brain on.",
                          "Late-night code, neon calm", "Commit after midnight"],
    "Neon Highway": ["POV: driving into a purple sunset", "Night drive, code in your head", "Windows down, synths up",
                     "Cruise mode for long sessions", "Chasing the neon horizon"],
    "Cyber Rain": ["POV: rain on the glass, code on the screen", "Neon city, rainy focus", "Rainy night hacking session",
                   "Storm outside, flow inside", "Rain, synths and a quiet mind"],
    "Retro Arcade": ["POV: one more coin, one more commit", "High score mode: deep focus", "Pixel drift, calm mind",
                     "Continue? Keep coding", "Pick your level, start the sprint"],
    "Server Room": ["POV: 3am in the server room", "Cold boot, warm focus", "Fan noise and flow state",
                    "100% uptime focus", "Failover to deep work"],
}
songs = {s["id"]: s for s in json.loads((B4 / "songs.json").read_text())}
scenes = {s["id"]: s for s in json.loads((SHORTS / "src/scenes.json").read_text())}
(SHORTS / "public/hookG").mkdir(parents=True, exist_ok=True)
out = []
for sid in [i for i in songs if i in scenes and (B4 / "out" / f"{i} {songs[i]['title']} 1 Hour.mp4").exists()]:
    s, sc = songs[sid], scenes[sid]
    wav = SHORTS / "public" / sc["audio"]
    start = pick_windows(per_second_energy(wav), [], 1)[0]
    dst = SHORTS / "public/hookG" / f"{sid}.wav"
    run("ffmpeg", "-v", "error", "-y", "-ss", str(start), "-t", str(HOOK_LEN), "-i", str(wav),
        "-af", f"afade=t=in:d=0.4,afade=t=out:st={HOOK_LEN - 1.5}:d=1.5", "-c:a", "pcm_s16le", str(dst))
    n = int(sid.split("-")[1])
    out.append({"id": sid, "title": s["title"], "bpm": s["bpm"], "style": s["prompt"].split(",")[0],
                "pack": s["pack_name"], "caption": CAPTIONS[s["pack_name"]][n - 1], "img": sc["img"],
                "accent": sc["accent"], "waves": sc["waves"], "pan": 1 if n % 2 else -1, "hookStart": start})
    print(sid, "hook", start, "s")
# keep entries whose 1-hour mp4 was cleaned up after posting (pack 1-3), replace the ones rendered now
dst_json = SHORTS / "src/shortsG.json"
prev = json.loads(dst_json.read_text()) if dst_json.exists() else []
done = {o["id"] for o in out}
out = sorted([o for o in prev if o["id"] not in done] + out, key=lambda o: o["id"])
dst_json.write_text(json.dumps(out, ensure_ascii=False, indent=1))
print(len(out), "shorts")
