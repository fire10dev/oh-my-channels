"""Validate a batch-2 script chunk: python3 check_chunk.py chunks/s31-s40.json"""
import json, re, sys, unicodedata

ACTORS = set("""phone_grin panic hand_off small_step confused_shrug arms_crossed_no worried_heart bored_yawn sofa_scroll
future_tired sprint_start think typing_focused point_viewer celebrate sleeping bed_phone_night snack reading jogging
meditating shocked facepalm wallet_worry nervous_wave writing coffee snooze front 34""".split())
PROPS = set("""paper_mountain sofa smartphone_glow storm_cloud hourglass laptop_file checkbox_tick calendar_today alarm_clock
brain coffee_mug dumbbell coin_stack notification_bell target lightbulb moon_stars low_battery""".split())
COLORS = {"red", "green", "gold", "ink"}
EN_TEXT = re.compile(r"^[A-Z0-9 .,!?'\">=:\-]+$")
BAD_GLYPH = re.compile(r"[→…—–‘’“”]")


def strip_vi(s):
    s = s.replace("đ", "d").replace("Đ", "D")
    return "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")


def check(items):
    errs, ids = [], set()
    for x in items:
        sid = x.get("id", "?")
        if sid in ids: errs.append(f"{sid}: duplicate id")
        ids.add(sid)
        vi = sid.endswith("vi")
        n = int(re.match(r"s(\d+)", sid).group(1))
        want = "pen" if n % 2 else "buff"
        if x.get("mascot") != want: errs.append(f"{sid}: mascot must be {want}")
        if not x.get("title") or not x.get("mechanism"): errs.append(f"{sid}: title/mechanism missing")
        if vi:
            if x.get("lang") != "vi" or not x.get("title_vi"): errs.append(f"{sid}: lang/title_vi missing")
            elif strip_vi(x["title_vi"]) != x["title"]: errs.append(f"{sid}: title must be title_vi without diacritics: {strip_vi(x['title_vi'])!r}")
            if len(x.get("title_vi", "")) > 40: errs.append(f"{sid}: title_vi > 40 chars")
        elif len(x["title"]) > 45: errs.append(f"{sid}: title > 45 chars")
        L = x.get("lines", [])
        if not 5 <= len(L) <= 8: errs.append(f"{sid}: {len(L)} lines (need 5-8)")
        prev = None
        for i, l in enumerate(L, 1):
            t, vo = l.get("text", ""), l.get("vo", "")
            if not t or not vo: errs.append(f"{sid} L{i}: text/vo missing")
            if len(t) > 24: errs.append(f"{sid} L{i}: text {len(t)} chars > 24: {t!r}")
            if t != t.upper(): errs.append(f"{sid} L{i}: text not upper-case")
            if BAD_GLYPH.search(t) or BAD_GLYPH.search(vo): errs.append(f"{sid} L{i}: bad glyph (→ … — or curly quotes)")
            if not vi and t and not EN_TEXT.match(t): errs.append(f"{sid} L{i}: EN text has unsupported chars: {t!r}")
            if vi and re.search(r"\d", vo): errs.append(f"{sid} L{i}: VI vo has digits (write numbers as words)")
            a, p = l.get("actor"), l.get("prop")
            if not a and not p: errs.append(f"{sid} L{i}: needs actor or prop")
            if a and a not in ACTORS: errs.append(f"{sid} L{i}: unknown actor {a}")
            if p and p not in PROPS: errs.append(f"{sid} L{i}: unknown prop {p}")
            if a and a == prev: errs.append(f"{sid} L{i}: same actor twice in a row ({a})")
            prev = a
            if l.get("color") and l["color"] not in COLORS: errs.append(f"{sid} L{i}: bad color")
            extra = set(l) - {"vo", "text", "color", "actor", "prop"}
            if extra: errs.append(f"{sid} L{i}: extra keys {extra}")
        if x.get("mascot") == "buff" and L and L[-1]["vo"].rstrip().endswith("?"):
            errs.append(f"{sid}: Buff must not end with a question")
    return errs


if __name__ == "__main__":
    items = json.load(open(sys.argv[1]))
    errs = check(items)
    print("\n".join(errs) if errs else f"OK {len(items)} items")
    sys.exit(1 if errs else 0)
