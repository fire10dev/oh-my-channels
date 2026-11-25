"""Per-line QA: cut each narration line from engine/public/<vid>/narration.wav, whisper it, print lines that match < 0.7.
Usage: python3 tools/qa_lines.py VID [VID...]"""
import json, subprocess, sys, pathlib, difflib, re, unicodedata
ROOT = pathlib.Path(__file__).resolve().parents[1]; M = pathlib.Path.home() / ".cache/whisper/ggml-small.bin"
norm = lambda s: " ".join(re.sub(r"[^\w\s]", " ", unicodedata.normalize("NFC", s.lower())).split())
for vid in sys.argv[1:]:
    lang = vid.rsplit("-", 1)[1]; d = json.loads((ROOT / "oll" / lang / "data" / f"{vid}.json").read_text())
    tl = json.loads((ROOT / "oll" / lang / "data" / f"{vid}.timeline.json").read_text())
    S = [s for c in d["chapters"] for s in c["shots"]]
    for g in [g for g in tl["segs"] if g["type"] == "shot"]:
        cut = ROOT / "build" / "line.wav"
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", str(max(0, g["start"] - 0.1)), "-t", str(g["speech"] + 0.25), "-i", ROOT / "engine/public" / vid / "narration.wav", "-ar", "16000", "-ac", "1", cut], check=True)
        hyp = subprocess.run(["whisper-cli", "-m", M, "-l", "pt" if lang == "pt" else lang, "-nt", "-np", cut], capture_output=True, text=True).stdout.strip()
        r = difflib.SequenceMatcher(None, norm(S[g["i"]]["s"]), norm(hyp)).ratio()
        if r < 0.7: print(f"{vid} #{g['i']} {r:.2f} | {S[g['i']]['s']} | heard: {hyp}", flush=True)
