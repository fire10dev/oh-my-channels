"""6-month posting plan (user 2026-11-21): per channel 26 weeks from Mon 2027-01-04, longs Tue + Fri, 14 Shorts a week (2 a day),
the first 7 tied to Tuesday's long, the last 7 to Friday's. Writes tiny-leg-theory/schedule-6m.csv and YT Hub facts
`planned_at` (+ `long` for Shorts). Re-run any time; codes not yet in the Hub are listed as missing.
python3 -I batch3/plan_6m.py"""
import csv, datetime as dt, json, pathlib, subprocess
B = pathlib.Path(__file__).resolve().parent; AB = B.parent
START, WEEKS = dt.date(2027, 1, 4), 26
CH = {"en": ("Tiny Leg Theory", ["L3", "L4"] + [f"L{n}" for n in range(10, 60)], ("06:00", "07:00", "17:00")),
      "vi": ("Lý Thuyết Chân Que", [f"L{n}" for n in range(8, 60)], ("18:00", "12:00", "19:00"))}
themes = json.load(open(AB / "long/themes.json"))
# L3/L4 Shorts got published meanwhile: top up from spare batch3 stock on the same subject (habits / studying)
SPARE = {"L3": ["s132", "s209", "s140", "s131"], "L4": ["s138", "s139", "s134", "s133", "s192", "s193", "s200"]}
hub = {(v["channel"], v["code"]): v for v in json.loads(subprocess.run(["ythub", "--json", "status"], capture_output=True, text=True).stdout)}


def shorts_of(L, lang, ch):
    if int(L[1:]) >= 8:
        a = 231 + 7 * (int(L[1:]) - 8); ids = [f"s{i}" for i in range(a, a + 7)]
    else:  # L1-L7 were built from earlier Shorts: take 7 not yet published
        ids = [s for s in themes[L]["ids"] if hub.get((ch, s + ("vi" if lang == "vi" else "")), {}).get("stage") != "published"]
        ids = (ids + SPARE.get(L, []))[:7]
    return [s + ("vi" if lang == "vi" else "") for s in ids]


rows, missing = [], []
for lang, (ch, longs, (t_long, t_s1, t_s2)) in CH.items():
    for w in range(WEEKS):
        mon = START + dt.timedelta(weeks=w); pair = longs[2 * w:2 * w + 2]
        for L, day in zip(pair, (1, 4)):
            rows.append((ch, w + 1, f"{mon + dt.timedelta(days=day)} {t_long}", "long", f"{L}-{lang}", ""))
        slots = [f"{mon + dt.timedelta(days=d)} {t}" for d in range(7) for t in (t_s1, t_s2)]
        sh = [(s, f"{L}-{lang}") for L in pair for s in shorts_of(L, lang, ch)]
        rows += [(ch, w + 1, slot, "short", s, L) for slot, (s, L) in zip(slots, sh)]
with open(AB / "schedule-6m.csv", "w", newline="") as f:
    wr = csv.writer(f); wr.writerow(["channel", "week", "planned_at", "kind", "code", "long"]); wr.writerows(rows)
for ch, _, at, kind, code, L in rows:
    if (ch, code) not in hub: missing.append(code); continue
    subprocess.run(["ythub", "fact", code, "planned_at", at, "--channel", ch], capture_output=True)
    if L: subprocess.run(["ythub", "fact", code, "long", L, "--channel", ch], capture_output=True)
for lang, (ch, *_ ) in CH.items():
    r = [x for x in rows if x[0] == ch]
    print(ch, "longs", sum(x[3] == "long" for x in r), "shorts", sum(x[3] == "short" for x in r), "last", r[-1][2])
print("not in Hub yet:", len(missing), " ".join(missing[:12]), "…" if len(missing) > 12 else "")
