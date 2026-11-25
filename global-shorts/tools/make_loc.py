"""One localised short end to end: translate (codex) -> TTS (Kokoro) -> music bed -> Remotion render -> 2-pass loudnorm -> cover.
Usage: python3 tools/make_loc.py SX_ID LANG [--force]
Final files: out/<lang>/<SX_ID>-<lang>.mp4, out/<lang>/<SX_ID>-<lang>-cover.jpg ; metadata in oll/<lang>/meta/."""
import json, subprocess, sys, pathlib, shutil
ROOT = pathlib.Path(__file__).resolve().parents[1]
OLL = ROOT.parent / "channels" / "off-limits-life"
PY = str(ROOT.parent / "shared" / "tts" / ".venv" / "bin" / "python")
VOICE = {"es": ("es", "em_alex", 1.0), "pt": ("pt-br", "pm_alex", 1.0), "fr": ("fr-fr", "ff_siwis", 1.0)}
sx, lang = sys.argv[1], sys.argv[2]
vid = f"{sx}-{lang}"
final = ROOT / "out" / lang / f"{vid}.mp4"
if final.exists() and "--force" not in sys.argv:
    print("skip", final.name); sys.exit(0)
run = lambda *a, **k: subprocess.run([str(x) for x in a], check=True, **k)
run("python3", ROOT / "tools/translate_sx.py", sx, lang)
data_p = ROOT / "oll" / lang / "data" / f"{vid}.json"
kl, voice, speed = VOICE[lang]
run(PY, "-I", ROOT / "tools/tts_loc.py", data_p, vid, kl, voice, speed)
data = json.loads(data_p.read_text()); tl = json.loads(data_p.with_suffix(".timeline.json").read_text())
pub = ROOT / "engine" / "public" / vid
# music: the English short's own bed track (same licence), looped/levelled to the new length
src_bed = OLL / "public" / sx / "bed.mp3"
if not src_bed.exists(): src_bed = OLL / "public" / sx / "bed-mix.mp3"
run("python3", OLL / "tools/source_bed.py", src_bed, pub / "bed.mp3", tl["total"], stdout=subprocess.DEVNULL)
iv = []
segs = tl["segs"]
for n, g in enumerate(segs):
    end = segs[n + 1]["start"] if n + 1 < len(segs) else tl["total"]
    if g["type"] == "card" or data["chapters"][g["ch"]]["shots"][g["i"]].get("d"): iv.append((g["start"], end))
expr = "+".join(f"between(t,{a:.3f},{b:.3f})" for a, b in iv) or "0"
af = f"volume='if({expr},4.5,1)':eval=frame,afade=t=in:d=0.7,afade=t=out:st={tl['total'] + 0.3:.2f}:d=1.7,atrim=0:{tl['total'] + 2.0:.2f}"
run("ffmpeg", "-v", "error", "-y", "-i", pub / "bed.mp3", "-af", af, "-ar", "48000", pub / "bed-mix.mp3")
props = ROOT / "build" / f"{vid}.props.json"; props.parent.mkdir(exist_ok=True)
dict_ = json.loads((ROOT / "oll" / "labels" / f"{lang}.json").read_text())
props.write_text(json.dumps({"id": vid, "data": data, "timeline": tl, "dict": dict_}, ensure_ascii=False))
raw = ROOT / "build" / f"{vid}-raw.mp4"
eng = ROOT / "engine"
run("npx", "remotion", "render", "src/index.ts", "SXL", raw, f"--props={props}", "--log=error", cwd=eng)
final.parent.mkdir(parents=True, exist_ok=True)
run(OLL / "tools/loudnorm2.sh", raw, raw, final)
# cover: a frame in the pause after the 2nd line (no caption on screen), plus localised big text
sh = [g for g in segs if g["type"] == "shot"]
plain = lambda g: not any(k in data["chapters"][g["ch"]]["shots"][g["i"]] for k in ("st", "q", "d"))
cands = [g for g in sh[1:] if plain(g) and plain(sh[sh.index(g) + 1] if sh.index(g) + 1 < len(sh) else g)]
g = cands[0] if cands else (sh[1] if len(sh) > 1 else sh[0])
t = g["start"] + g["speech"] + 0.12
frame_png = pub / "coverframe.png"
run("npx", "remotion", "still", "src/index.ts", "SXL", frame_png, f"--props={props}", f"--frame={int(t * 30)}", "--log=error", cwd=eng)
meta = json.loads((ROOT / "oll" / lang / "meta" / f"{vid}.json").read_text())
cp = ROOT / "build" / f"{vid}.cover.json"
cp.write_text(json.dumps({"img": f"{vid}/coverframe.png", "big": meta["cover_big"], "small": meta["cover_small"], "tag": meta["cover_tag"]}, ensure_ascii=False))
png = ROOT / "build" / f"{vid}-cover.png"
run("npx", "remotion", "still", "src/index.ts", "Cover", png, f"--props={cp}", "--log=error", cwd=eng)
run("ffmpeg", "-v", "error", "-y", "-i", png, "-q:v", "2", ROOT / "out" / lang / f"{vid}-cover.jpg")
dur = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", final], capture_output=True, text=True).stdout)
print(f"DONE {vid} {dur:.1f}s | {meta['title']}")
