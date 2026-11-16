# Make 3 blended Kokoro voices per mascot and write one 15 s sample each.
import pathlib, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro

HERE = pathlib.Path(__file__).parent
k = Kokoro(str(HERE / "kokoro-v1.0.onnx"), str(HERE / "voices-v1.0.bin"))
out = HERE / "samples"; out.mkdir(exist_ok=True)

TEXT = {
    "buff": "Listen up. You are not lazy. Your brain is dodging a bad feeling. "
            "So shrink the task until it is too small to fear. Then start. Right now.",
    "pen": "Okay, so... I opened the file. I wrote one line. And honestly? "
           "The scary feeling just faded. So, what is your smallest first step today?",
}
BLENDS = {  # name: ([(voice, weight), ...], speed)
    "buff_1_onyx-fenrir": ([("am_onyx", 0.6), ("am_fenrir", 0.4)], 0.92),
    "buff_2_fenrir-george": ([("am_fenrir", 0.55), ("bm_george", 0.45)], 0.95),
    "buff_3_adam-onyx": ([("am_adam", 0.5), ("am_onyx", 0.5)], 0.90),
    "pen_1_puck-liam": ([("am_puck", 0.6), ("am_liam", 0.4)], 1.05),
    "pen_2_echo-fable": ([("am_echo", 0.5), ("bm_fable", 0.5)], 1.0),
    "pen_3_puck-michael": ([("am_puck", 0.5), ("am_michael", 0.5)], 1.05),
}
for name, (mix, speed) in BLENDS.items():
    style = sum(k.get_voice_style(v) * w for v, w in mix)
    audio, sr = k.create(TEXT[name.split("_")[0]], voice=style, speed=speed, lang="en-us")
    sf.write(out / f"{name}.wav", audio, sr)
    print(name, round(len(audio) / sr, 2), "s")
