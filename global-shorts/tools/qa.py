"""QA every finished short: whisper back-transcription vs script (word match), loudness, duration, imperial units left on screen.
Usage: python3 tools/qa.py [es pt fr]  -> out/QA.md"""
import json, re, subprocess, sys, pathlib, difflib, unicodedata
ROOT = pathlib.Path(__file__).resolve().parents[1]
MODEL = pathlib.Path.home() / ".cache/whisper/ggml-small.bin"
WL = {"es": "es", "pt": "pt", "fr": "fr"}
IMP = re.compile(r"(\d\s*(in\.?|inch|inches|pulg\.?|pulgadas?|polegadas?|pouces?|ft|feet|pies|pés|pieds|mph|mi|miles|millas|milhas|lb|lbs|libras|livres)\b)|°F", re.I)
NUMW = set("""un uno una dos tres cuatro cinco seis siete ocho nueve diez once doce trece catorce quince veinte treinta cuarenta cincuenta sesenta setenta ochenta noventa cien ciento cientos mil millón millones y por cento ciento
um uma dois duas três quatro cinco seis sete oito nove dez onze doze treze catorze quatorze quinze vinte trinta quarenta cinquenta sessenta setenta oitenta noventa cem cento mil milhão milhões e
un une deux trois quatre cinq six sept huit neuf dix onze douze treize quatorze quinze seize vingt trente quarante cinquante soixante cent cents mille million millions et pour cent virgule coma vírgula""".split())
# numbers are spelled out in the script but whisper writes digits: drop both sides' number tokens
norm = lambda s: [w for w in re.sub(r"[^\w\s]", " ", unicodedata.normalize("NFC", s.lower())).split() if w and not w.isdigit() and w not in NUMW and not re.search(r"\d", w)]
rows = []
for lang in sys.argv[1:] or ["es", "pt", "fr"]:
    for mp4 in sorted((ROOT / "out" / lang).glob("*.mp4")):
        vid = mp4.stem; d = json.loads((ROOT / "oll" / lang / "data" / f"{vid}.json").read_text())
        script = " ".join(sh["s"] for ch in d["chapters"] for sh in ch["shots"])
        wav = ROOT / "build" / f"{vid}.16k.wav"
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", mp4, "-ar", "16000", "-ac", "1", wav], check=True)
        hyp = subprocess.run(["whisper-cli", "-m", MODEL, "-l", WL[lang], "-nt", "-np", wav], capture_output=True, text=True).stdout
        a, b = norm(script), norm(hyp)
        match = difflib.SequenceMatcher(None, a, b).ratio()
        lufs = float(re.findall(r"I:\s+(-?[\d.]+) LUFS", subprocess.run(["ffmpeg", "-nostats", "-i", mp4, "-af", "ebur128", "-f", "null", "-"], capture_output=True, text=True).stderr)[-1])
        dur = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", mp4], capture_output=True, text=True).stdout)
        screen = [x for ch in d["chapters"] for sh in ch["shots"] for x in [*(sh.get("st") or []), sh.get("q") or "", json.dumps(sh.get("d") or {}, ensure_ascii=False)]] + [d["hook"]]
        imp = [x for x in screen if IMP.search(x)]
        ok = match >= 0.85 and -15 <= lufs <= -13 and dur <= 60 and not imp
        rows.append((lang, vid, match, lufs, dur, imp, ok))
        print(f"{'OK ' if ok else 'BAD'} {vid} match={match:.2f} lufs={lufs} dur={dur:.1f} {imp or ''}", flush=True)
md = ["# QA lồng tiếng (whisper small nghe lại so với kịch bản)\n", "| | video | khớp lời | LUFS | giây | đơn vị imperial còn sót |", "|---|---|---|---|---|---|"]
md += [f"| {'✅' if ok else '❌'} | {vid} | {m:.0%} | {l} | {du:.1f} | {', '.join(i)} |" for lang, vid, m, l, du, i, ok in rows]
(ROOT / "out" / "QA.md").write_text("\n".join(md) + "\n")
print("QA", sum(r[-1] for r in rows), "/", len(rows))
