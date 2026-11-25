"""Re-render covers from current meta (after native edit). Usage: python3 tools/regen_covers.py es [pt fr]"""
import json, subprocess, sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]
for lang in sys.argv[1:]:
    for mp in sorted((ROOT / "oll" / lang / "meta").glob("*.json")):
        vid = mp.stem; m = json.loads(mp.read_text())
        if not (ROOT / "engine/public" / vid / "coverframe.png").exists(): continue
        cp = ROOT / "build" / f"{vid}.cover.json"
        cp.write_text(json.dumps({"img": f"{vid}/coverframe.png", "big": m["cover_big"], "small": m["cover_small"], "tag": m["cover_tag"]}, ensure_ascii=False))
        png = ROOT / "build" / f"{vid}-cover.png"
        subprocess.run(["npx", "remotion", "still", "src/index.ts", "Cover", str(png), f"--props={cp}", "--log=error"], cwd=ROOT / "engine", capture_output=True, check=True)
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", str(png), "-q:v", "2", str(ROOT / "out" / lang / f"{vid}-cover.jpg")], check=True)
        print("cover", vid, flush=True)
