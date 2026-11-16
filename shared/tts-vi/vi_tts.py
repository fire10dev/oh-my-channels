# VieNeu batch TTS: vi_tts.py VOICE OUTDIR < lines.json  -> OUTDIR/000.wav, 001.wav ... (48 kHz)
import sys, json, pathlib
from vieneu import Vieneu
voice, outdir = sys.argv[1], pathlib.Path(sys.argv[2])
v = Vieneu()
for i, text in enumerate(json.load(sys.stdin)):
    v.save(v.infer(text, voice=voice), str(outdir / f"{i:03d}.wav"))
