"""Validate a long script (object): python3 check_long.py FILE.json  -> OK or problems (exit 1)."""
import json, re, sys
POSES = set("""front 34 phone_grin panic hand_off small_step confused_shrug arms_crossed_no worried_heart bored_yawn sofa_scroll
future_tired sprint_start think typing_focused point_viewer celebrate sleeping bed_phone_night snack reading jogging
meditating shocked facepalm wallet_worry nervous_wave writing coffee snooze""".split())
PROPS = set("""paper_mountain sofa smartphone_glow storm_cloud hourglass laptop_file checkbox_tick calendar_today alarm_clock
brain coffee_mug dumbbell coin_stack notification_bell target lightbulb moon_stars low_battery""".split())
NUM = {w: n for n, ws in enumerate([[], [], [], [], [], ["five", "năm"], ["six", "sáu"], ["seven", "bảy"], ["eight", "tám"],
                                    ["nine", "chín"], ["ten", "mười"]]) for w in ws}
s = json.load(open(sys.argv[1])); vi = s.get("lang") == "vi"; e = []
ch = s.get("chapters", [])
if not 9 <= len(ch) <= 11: e.append(f"need 9-11 chapters (intro + 7-9 mechanisms + recap), got {len(ch)}")
words = 0
for c, x in enumerate(ch):
    L = x.get("lines", [])
    if not x.get("title"): e.append(f"chapter {c + 1}: title missing")
    if not 4 <= len(L) <= 14: e.append(f"chapter {c + 1}: {len(L)} lines (need 4-14)")
    for n, l in enumerate(L, 1):
        tag = f"chapter {c + 1} line {n}"; vo, t = l.get("vo", ""), l.get("text", ""); words += len(vo.split())
        if l.get("speaker") not in ("pen", "buff"): e.append(f"{tag}: speaker must be pen or buff")
        if len(vo.split()) > (26 if vi else 22): e.append(f"{tag}: vo too long")
        if not t or len(t) > 24 or t != t.upper(): e.append(f"{tag}: text must be UPPERCASE, 1-24 chars: {t!r}")
        if " " not in t and len(t) > 14: e.append(f"{tag}: single word too wide: {t!r}")
        if any(len(w) > 15 for w in t.split()): e.append(f"{tag}: a word in text is > 15 chars: {t!r}")
        if not vi and not re.fullmatch(r"[A-Z0-9 .,!?'\">=:\-]+", t or "X"): e.append(f"{tag}: EN text has unsupported chars: {t!r}")
        if re.search(r"[→…—–‘’“”]", t): e.append(f"{tag}: use plain ASCII punctuation (no curly quotes, dashes, ellipsis)")
        if vi and re.search(r"\d", vo): e.append(f"{tag}: VI vo has digits")
        if l.get("actor") not in POSES: e.append(f"{tag}: actor must be a pose, got {l.get('actor')!r}")
        if l.get("prop") and l["prop"] not in PROPS: e.append(f"{tag}: unknown prop {l['prop']!r}")
        if l.get("color", "ink") not in ("ink", "red", "green", "gold"): e.append(f"{tag}: bad color")
intro = " ".join(l.get("vo", "") for l in ch[0].get("lines", [])).lower() + " " + s.get("title", "").lower() + " " + s.get("description", "").lower() if ch else ""
said = {NUM[w] for w in re.findall(r"\w+", intro) if w in NUM}
if said and said != {len(ch) - 2}: e.append(f"title/intro/description promise {sorted(said)} items but there are {len(ch) - 2} mechanism chapters (all chapters minus intro and recap)")
if not (1100 if vi else 1200) <= words <= 2000: e.append(f"total voice-over {words} words (need {'1100' if vi else '1200'}-2000)")
print("\n".join(e) or "OK"); sys.exit(1 if e else 0)
