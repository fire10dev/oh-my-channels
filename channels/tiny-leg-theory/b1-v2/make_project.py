# Builds project.json for the B1 (stickman-video-director) side of the A/B test.
# Caption timings come from silencedetect pauses in the shared Kokoro VO clips.
import json

LEAD, GAP, TAIL = 0.15, 0.5, 0.6
DUR = {"hook": 5.035, "myth": 5.803, "reveal": 9.835, "future": 5.675, "fix": 7.147, "close": 6.507}
ORDER = ["hook", "myth", "reveal", "future", "fix", "close"]

# (clip, local start, local end, caption text)
PHRASES = [
    ("hook", 0.0, 1.98, "You know exactly what you should be doing."),
    ("hook", 2.35, 5.03, "So why are you scrolling your phone instead?"),
    ("myth", 0.0, 1.78, "Most people call it laziness,"),
    ("myth", 2.0, 3.56, "or bad time management."),
    ("myth", 4.09, 5.80, "Researchers say it is neither."),
    ("reveal", 0.0, 2.21, "Procrastination is about feelings."),
    ("reveal", 2.62, 5.23, "A task feels boring, scary,"),
    ("reveal", 5.35, 6.23, "or just too big,"),
    ("reveal", 6.63, 8.10, "so your brain grabs something"),
    ("reveal", 8.10, 9.83, "that feels better right now."),
    ("future", 0.0, 2.09, "And the bill goes to your future self."),
    ("future", 2.54, 5.67, "A person your brain treats almost like a stranger."),
    ("fix", 0.0, 1.24, "So don't wait to feel ready."),
    ("fix", 1.57, 4.34, "Shrink the first step until it's too small to fear."),
    ("fix", 4.54, 5.69, "Open the file."),
    ("fix", 6.06, 7.15, "Write one line."),
    ("close", 0.0, 2.65, "The bad feeling usually fades once you start."),
    ("close", 3.16, 6.50, "So, what's the smallest first step you could take today?"),
]

off, t = {}, LEAD
for c in ORDER:
    off[c] = t
    t += DUR[c] + GAP
END = off["close"] + DUR["close"] + TAIL
RED, GREEN, GOLD = "#EC4338", "#3E9B57", "#D9962B"  # problem / fix / insight

uid = [0]
def nid(p):
    uid[0] += 1
    return f"{p}{uid[0]}"

def text(s, y=110, size=56, color=None, x=95, w=None):
    l = {"type": "text", "text": s, "x": x, "y": y, "size": size, "bold": True}
    if color: l["color"] = color
    l["w"] = w or 560  # keep text left of the actor at x>=640
    return l

def pose(i, x, d, why, y=35, w=445, enter="slide"):
    k0 = {"t": 0, "x": x + (60 if enter == "slide" else 0), "alpha": 0, "angle": 0}
    keys = [k0, {"t": 0.45, "x": x, "alpha": 1, "angle": 0},
            {"t": max(0.9, d * 0.5), "x": x, "angle": 0.035}, {"t": max(1.3, d), "x": x - 8, "angle": -0.02}]
    return {"type": "pose", "id": nid("actor"), "motion": {"role": "actor", "reason": why},
            "pose": i, "x": x, "y": y, "w": w, "keys": keys}

def prop(name, x, y, w, d, why, keys=None):
    if keys is None:
        keys = [{"t": 0, "y": y + 30, "alpha": 0, "angle": -0.06}, {"t": 0.4, "y": y, "alpha": 1, "angle": 0.02},
                {"t": max(0.8, d * 0.55), "y": y - 10, "angle": -0.03}, {"t": max(1.2, d), "y": y, "angle": 0.02}]
    return {"type": "image", "id": nid("prop"), "motion": {"role": "prop", "reason": why},
            "path": f"@b1/{name}-crayon.png" if name != "camera" else "@b1/camera-handdrawn.png",
            "x": x, "y": y, "w": w, "keys": keys}

# Shot boundaries = caption starts; first shot starts at 0, last ends at END.
starts = [0.0] + [off[c] + s for c, s, _, _ in PHRASES[1:]]
ends = starts[1:] + [END]

def scene(i, d):
    return [
        [text("THE THING YOU SHOULD DO."), prop("script-page", 140, 270, 220, d, "The waiting task appears beside the worker"),
         pose(0, 700, d, "The figure leans in to work")],
        [text("...SO WHY THE PHONE?", color=RED), prop("youtube", 150, 300, 260, d, "The scrolling feed slides in and pulls attention",
              keys=[{"t": 0, "x": 60, "alpha": 0}, {"t": 0.5, "x": 150, "alpha": 1}, {"t": d * 0.6, "x": 170, "angle": 0.04}, {"t": d, "x": 150, "angle": -0.02}]),
         pose(2, 720, d, "The figure turns doubtful, caught scrolling")],
        [text("LAZY?", size=72), pose(2, 650, d, "The figure shrugs at the label"),
         prop("idea-note", 140, 290, 170, d, "A sticky label gets slapped on")],
        [text("LAZY?", size=72), text("BAD PLANNER?", y=190, size=64), prop("calendar", 150, 300, 190, d, "The planner calendar wobbles in"),
         pose(2, 680, d, "The figure keeps doubting")],
        [text("LAZY?", size=72), text("BAD PLANNER?", y=190, size=64), text("NEITHER.", y=300, size=72, color=RED, x=700),
         {"type": "line", "id": nid("mark"), "motion": {"role": "information", "reason": "Both myths are crossed out"},
          "points": [[90, 150], [460, 245]], "color": RED, "lineWidth": 6, "keys": [{"t": 0.1, "progress": 0}, {"t": 0.6, "progress": 1}]},
         prop("calendar", 150, 330, 170, d, "The planner fades as the myth is rejected",
              keys=[{"t": 0, "alpha": 1, "angle": 0}, {"t": 0.6, "alpha": 0.35, "angle": -0.1}, {"t": d, "alpha": 0.35, "angle": -0.04}])],
        [text("IT'S ABOUT FEELINGS.", color=GOLD), pose(1, 640, d, "The figure grabs his head as feelings take over"),
         prop("idea-bulb", 180, 290, 150, d, "The thought lights up")],
        [text("BORING. SCARY.", size=64), prop("script-page", 150, 260, 200, d, "The task grows larger",
              keys=[{"t": 0, "w": 150, "alpha": 0}, {"t": 0.5, "w": 210, "alpha": 1}, {"t": d * 0.6, "w": 260}, {"t": d, "w": 280}]),
         pose(1, 700, d, "The figure panics at the growing task")],
        [text("TOO BIG.", size=80, color=RED), prop("script-page", 120, 210, 300, d, "The task swells to fill the frame",
              keys=[{"t": 0, "w": 280}, {"t": 0.4, "w": 360, "angle": 0.04}, {"t": max(0.8, d), "w": 380, "angle": -0.03}]),
         pose(1, 720, d, "The figure shakes under the size of it")],
        [text("GRAB SOMETHING ELSE...", size=58), prop("youtube", 140, 300, 260, d, "The easy distraction pops up",
              keys=[{"t": 0, "alpha": 0, "x": 60}, {"t": 0.4, "alpha": 1, "x": 140}, {"t": max(0.9, d), "x": 160, "angle": 0.03}]),
         {"type": "arrow", "id": nid("mark"), "motion": {"role": "information", "reason": "Attention is pulled toward the feed"},
          "x": 430, "y": 400, "w": 220, "keys": [{"t": 0, "progress": 0}, {"t": 0.5, "progress": 1}]},
         pose(0, 700, d, "The figure leans toward the distraction")],
        [text("...THAT FEELS BETTER NOW.", color=GREEN), prop("youtube", 160, 300, 280, d, "The feed glows as the easy reward"),
         pose(0, 690, d, "The figure sinks into the feed")],
        [text("THE BILL GOES TO FUTURE YOU.", size=52, w=1100, color=RED), prop("idea-note", 150, 300, 160, d, "The unpaid task note is passed on",
              keys=[{"t": 0, "x": 150, "alpha": 0}, {"t": 0.3, "x": 150, "alpha": 1}, {"t": max(1.2, d * 0.7), "x": 560, "angle": 0.1}, {"t": max(1.6, d), "x": 600, "angle": 0}]),
         prop("calendar", 160, 470, 120, d, "The deadline date sits under it")],
        [text("ALMOST A STRANGER.", color=RED), pose(2, 700, d, "Future you looks back, unfamiliar",
              ), prop("idea-note", 560, 330, 150, d, "The handed-off task lands on future you")],
        [text("DON'T WAIT TO FEEL READY.", size=54, w=1100, color=GREEN), prop("clapper", 160, 290, 220, d, "The clapper snaps: action now",
              keys=[{"t": 0, "angle": -0.25, "alpha": 0}, {"t": 0.3, "angle": -0.25, "alpha": 1}, {"t": 0.55, "angle": 0}, {"t": max(1.0, d), "angle": 0.03}])],
        [text("SHRINK THE FIRST STEP.", size=56, color=GREEN), prop("script-page", 150, 250, 340, d, "The big task shrinks to one small step",
              keys=[{"t": 0, "w": 340}, {"t": d * 0.7, "w": 120, "y": 360}, {"t": d, "w": 110, "y": 370}]),
         pose(2, 700, d, "The figure eyes the shrinking task")],
        [text("1. OPEN THE FILE.", size=60), prop("idea-note", 170, 290, 170, d, "The file opens")],
        [text("1. OPEN THE FILE.", size=48), text("2. WRITE ONE LINE.", y=180, size=48, color=GREEN),
         prop("script-page", 170, 290, 170, d, "One line gets written on the page"), pose(0, 700, d, "The figure starts working")],
        [text("START. THE FEELING FADES.", size=56, color=GREEN), pose(0, 690, d, "The figure keeps working, calmer"),
         prop("idea-bulb", 170, 290, 150, d, "Momentum lights up")],
        [text("YOUR SMALLEST FIRST STEP?", color=GOLD, w=1100), prop("calendar", 160, 290, 200, d, "Today's box waits for a tick"),
         prop("idea-bulb", 420, 300, 120, d, "The idea for a first step glows")],
    ][i]

shots = []
for i, (s, e) in enumerate(zip(starts, ends)):
    d = round(e - s, 3)
    layers = scene(i, d)
    for l in layers:  # keep key times strictly increasing and inside the shot
        if "keys" in l:
            ks, last = [], -1
            for k in l["keys"]:
                k = dict(k, t=round(min(k["t"], d - 0.05), 3))
                if k["t"] > last:
                    ks.append(k); last = k["t"]
            l["keys"] = ks
    shots.append({"start": round(s, 3), "end": round(e, 3), "layers": layers})

captions = [{"start": round(off[c] + a + 0.02, 3), "end": round(off[c] + b, 3), "text": txt} for c, a, b, txt in PHRASES]
sfx = [{"time": round(off[c] + at, 3), "kind": k, "gain": 0.05} for c, at, k in
       [("hook", 2.4, "tap"), ("myth", 4.1, "paper"), ("reveal", 0.1, "pop"), ("reveal", 5.4, "pop"),
        ("future", 0.4, "paper"), ("fix", 0.2, "tap"), ("fix", 4.6, "paper"), ("close", 3.2, "chime")]]

proj = {"version": 1, "style": "B1", "width": 1280, "height": 720, "fps": 30,
        "voice": {"path": "narration.wav", "lead": LEAD, "tail": TAIL},
        "font": "chalkboard-1.ttf",
        "music": {"path": "music.mp3", "gain": 0.12},
        "captions": captions, "shots": shots, "sfx": sfx,
        "ambience": [{"path": "room-tone.wav", "start": 0, "end": 43.25, "gain": 0.04, "fadeIn": 0.5, "fadeOut": 0.8}]}
json.dump(proj, open("project.json", "w"), indent=1)
print(len(shots), "shots, end", round(END, 2))
