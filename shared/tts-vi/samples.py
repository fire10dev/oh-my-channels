# VieNeu-TTS listening test: 3 candidate voices per mascot, same Vietnamese lines.
import pathlib, time
from vieneu import Vieneu
out = pathlib.Path(__file__).parent / "samples"; out.mkdir(exist_ok=True)
v = Vieneu()
TEXT = {
    "buff": "Đừng hứa ngồi làm một tiếng nữa. Hứa hai phút thôi. Hai phút nhỏ tới mức não không kịp cãi.",
    "pen": "Bạn đâu có né việc. Bạn đang né cái cảm giác khi làm nó. Bước nhỏ nhất của bạn hôm nay là gì?",
}
CANDS = {"buff": ["Adam bựa", "Quang Sơn", "Thái Sơn"], "pen": ["Thiện Minh", "Quốc Tuấn", "Adam"]}
for m, names in CANDS.items():
    for i, name in enumerate(names, 1):
        t = time.time()
        audio = v.infer(TEXT[m], voice=name)
        f = out / f"{m}_{i}_{name.replace(' ', '-')}.wav"
        v.save(audio, str(f))
        print(m, i, name, round(time.time() - t, 1), "s")
