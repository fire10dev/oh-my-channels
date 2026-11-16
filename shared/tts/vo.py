# Voice the 6-clip script with a blended Kokoro voice, then write narration.wav + timing.json
# (per-clip durations and caption phrase timings from real pauses). Usage: vo.py buff|pen PROJECT_DIR
import sys, json, re, subprocess, pathlib, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro

HERE = pathlib.Path(__file__).parent
VOICES = {"buff": ([("am_onyx", 0.6), ("am_fenrir", 0.4)], 0.92),
          "pen": ([("am_puck", 0.6), ("am_liam", 0.4)], 1.05)}
CLIPS = [  # (clip id, caption phrases in order)
    ("hook", ["You know exactly what you should be doing.", "So why are you scrolling your phone instead?"]),
    ("myth", ["Most people call it laziness,", "or bad time management.", "Researchers say it is neither."]),
    ("reveal", ["Procrastination is about feelings.", "A task feels boring, scary,", "or just too big,",
                "so your brain grabs something", "that feels better right now."]),
    ("future", ["And the bill goes to your future self.", "A person your brain treats almost like a stranger."]),
    ("fix", ["So don't wait to feel ready.", "Shrink the first step until it's too small to fear.", "Open the file.", "Write one line."]),
    ("close", ["The bad feeling usually fades once you start.", "So, what's the smallest first step you could take today?"]),
]
GAP = 0.5
mascot, proj = sys.argv[1], pathlib.Path(sys.argv[2])
k = Kokoro(str(HERE / "kokoro-v1.0.onnx"), str(HERE / "voices-v1.0.bin"))
mix, speed = VOICES[mascot]
style = sum(k.get_voice_style(v) * w for v, w in mix)

def silences(path):
    err = subprocess.run(["ffmpeg", "-hide_banner", "-i", str(path), "-af", "silencedetect=n=-40dB:d=0.12", "-f", "null", "-"],
                         capture_output=True, text=True).stderr
    st = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", err)]
    en = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", err)]
    return list(zip(st, en))

pieces, dur, phrases, sr = [], {}, [], 24000
for cid, ph in CLIPS:  # one TTS call per phrase => exact caption timings, short natural pauses between
    parts, t = [], 0.0
    for n, p in enumerate(ph):
        audio, sr = k.create(p, voice=style, speed=speed, lang="en-us")
        nz = np.nonzero(np.abs(audio) > 0.01)[0]  # trim leading/trailing silence
        audio = audio[max(nz[0] - int(0.03 * sr), 0): nz[-1] + int(0.05 * sr)]
        phrases.append([cid, round(t, 3), round(t + len(audio) / sr, 3), p])
        parts.append(audio); t += len(audio) / sr
        if n < len(ph) - 1:
            pause = 0.18 if p.endswith(",") else 0.32
            parts.append(np.zeros(int(pause * sr), dtype=audio.dtype)); t += pause
    clip = np.concatenate(parts); dur[cid] = round(len(clip) / sr, 3)
    pieces += [clip, np.zeros(int(GAP * sr), dtype=clip.dtype)]
sf.write(proj / "narration.wav", np.concatenate(pieces[:-1]), sr)
json.dump({"DUR": dur, "PHRASES": phrases}, open(proj / "timing.json", "w"), indent=1)
print(mascot, dur, "total", round(sum(dur.values()) + GAP * 5, 2))
