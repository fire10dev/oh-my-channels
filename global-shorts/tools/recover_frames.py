"""Re-pick the cover frame (a shot without stat card / quote / board) for already-rendered shorts, then regen covers.
Usage: python3 tools/recover_frames.py es"""
import json, subprocess, sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]
lang = sys.argv[1]
for dp in sorted((ROOT / "oll" / lang / "data").glob("*-" + lang + ".json")):
    vid = dp.stem; props = ROOT / "build" / f"{vid}.props.json"
    if not props.exists(): continue
    data = json.loads(dp.read_text()); tl = json.loads(dp.with_suffix(".timeline.json").read_text())
    sh = [g for g in tl["segs"] if g["type"] == "shot"]
    plain = lambda g: not any(k in data["chapters"][g["ch"]]["shots"][g["i"]] for k in ("st", "q", "d"))
    cands = [g for i, g in enumerate(sh[1:], 1) if plain(g) and (i + 1 >= len(sh) or plain(sh[i + 1]))]
    g = cands[0] if cands else sh[1]
    t = g["start"] + g["speech"] + 0.12
    subprocess.run(["npx", "remotion", "still", "src/index.ts", "SXL", str(ROOT / "engine/public" / vid / "coverframe.png"), f"--props={props}", f"--frame={int(t * 30)}", "--log=error"], cwd=ROOT / "engine", capture_output=True, check=True)
    print("frame", vid, round(t, 2), flush=True)
subprocess.run(["python3", str(ROOT / "tools/regen_covers.py"), lang], check=True)
