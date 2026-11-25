# loc_publish.py LANG [YYYY-MM-DD ngày LONG đầu] — gói đăng bản ngoại ngữ: meta JSON từng video (cho yt.mjs) + lịch + publish.md.
#   en = The Petty Ghost (text ở file này); es = El Fantasma Chismoso (text: loc/es/publish-text.json, Codex dịch từ loc/en/publish-text.json).
#   → loc/<lang>/meta/<ID>.json, loc/<lang>/schedule.json, loc/<lang>/publish.md. Chạy lại được (ghi đè). Không upload gì.
#   Lịch (giờ +07): LONG 08:00 (= 20:00 ET hôm trước), short 06:00 (= 18:00 ET) và 23:30 (= 11:30 ET), short chỉ sau LONG của nó.
import json, sys, pathlib, subprocess, datetime as dt
LANG = sys.argv[1] if len(sys.argv) > 1 else 'en'; U = LANG.upper()
START = sys.argv[2] if len(sys.argv) > 2 else '2026-11-25'   # ngày đăng LONG đầu (+07)
ROOT = pathlib.Path(__file__).resolve().parent.parent; OUT = ROOT / 'video' / 'out' / LANG; L = ROOT / 'loc' / LANG
HANDLE = {'en': '@ThePettyGhost', 'es': '@ElFantasmaChismoso'}[LANG]
GHOST = {'P01': ('ma lai', 'a Vietnamese ghost whose head flies off at night'),
         'P02': ('than trung', 'the underworld clerk who comes back when someone dies at a cursed hour'),
         'P03': ('ma xo', 'the corner ghost who guards a family\'s wealth'),
         'P04': ('ma giau', 'the hider ghost who hides people until their family bangs a brass tray and calls their name')}
LONG = {
 'P01': ("He Livestreamed His Mom Sleeping. Her Head Hid in the Rice Cooker.",
         "Three million people watch \"Dinner with Mom\". None of them know what Mom does at 2 a.m. — with just her head.\n"
         "Told by the ghost herself: a ma lai, a Vietnamese ghost whose head flies off at night, and her son who turned her into content."),
 'P02': ("The Underworld Took Attendance at 3 A.M. — and Marked the Boss Present",
         "A factory boss rewrites a worker's time of death to dodge a curse and cash in. He even signs the form \"like family\".\n"
         "The underworld reads paperwork very carefully. Told by the than trung, the underworld's most punctual clerk."),
 'P03': ("Three Generations Guarded This Jar. Nobody Was Allowed to Open It.",
         "An old-quarter house is about to be sold to a hotel chain. In the storeroom, a polite little ghost keeps counting.\n"
         "Told by the ma xo, the corner ghost who guards a family's wealth — whatever that wealth turns out to be."),
 'P04': ("For Three Days, Nobody Looked Up From Their Screens",
         "A ghost who hides people for a living meets a family that never looks up. Eight hundred years undefeated, until apartment 27-08.\n"
         "Told by the ma giau, the Vietnamese hider ghost. Nobody gets hurt. Bin is fine. He had bubble tea."),
}
SHORT = {  # id: (tiêu đề, dòng đầu mô tả)
 'P01-SH1': ("3 Million People Watched Mom Eat Dinner 🍚", "Dinner on a livestream, and the secret Mom keeps at night."),
 'P01-SH2': ("Mom's Only Rule: Never Cover My Neck", "Grandma gave one rule. The son forgot it."),
 'P01-SH3': ("2:07 A.M. The Comments Exploded.", "An 8-hour healing stream… so what just flew past the window?"),
 'P01-SH4': ("4 Seconds on Camera: A Blanket, Flat at the Neck", "Nine thousand people stayed awake for him."),
 'P01-SH5': ("He Tucked Mom In for the First Time… Worst Mistake", "And her head couldn't get back."),
 'P01-SH7': ("Mom's New Contract: 50% of the Revenue", "Three months online and the ghost has a revenue deal. Her head, her cut."),
 'P02-SH1': ("The Time Clock Only Has an IN Button ⏱️", "The factory is family. And family never clocks out."),
 'P02-SH2': ("The Most Expensive Words He Ever Signed: \"Like Family\"", "He moved a time of death from 2:10 to 5 a.m. On paper."),
 'P02-SH3': ("Die at This Hour and the Underworld Comes Back for Family", "The boss fixed the paperwork. The underworld read it."),
 'P02-SH4': ("3 A.M.: The Time Clock Printed the Boss's Name", "Three knocks. One file. One name to call."),
 'P02-SH5': ("\"But I'm Still Alive?\" — PRESENT, 3:00 A.M.", "A mistake. But a mistake by the book."),
 'P02-SH6': ("The Boss Wore Mourning Clothes to a Business Meeting", "The underworld didn't take his life. It took his calendar."),
 'P02-SH7': ("The Underworld Docked the Boss's Attendance Bonus", "Three nights late to his own mourning. No bonus this month."),
 'P03-SH1': ("Ghost File: Ma Xo 📜", "What it eats, what it guards — and tonight it counts to 413."),
 'P03-SH2': ("How to Survive a House Ghost", "Three rules. Rule three: sell the house, and the house's things leave."),
 'P03-SH3': ("Bribing a Ghost With Rice Cakes", "One plate of offerings for the jar? This ghost doesn't take bribes."),
 'P03-SH4': ("He Wanted to Sell Tickets to the Family Altar", "The owner wants to monetize the altar. The ghost has a job to do."),
 'P03-SH5': ("This House Is 30 Feet Deep. The Tape Never Hits the Wall.", "The surveyor measured all night and left a one-star review."),
 'P03-SH6': ("Who's Counting in the Storeroom?", "Nobody has opened it for three generations. Tonight something is counting."),
 'P03-SH7': ("Opening a 3-Generation Jar in Front of Half the Street", "The jar opens. The creditors arrive. The buyer walks."),
 'P04-SH1': ("Ghost File: Ma Giau 📜", "Hides kids, blinds families, returns them when you bang the tray. Nowadays you wait for the phone to die."),
 'P04-SH2': ("How to Survive Being Hidden by a Ghost", "Learn from Bin, age ten: ask for the wifi, order bubble tea, borrow a charger."),
 'P04-SH3': ("The Secret to a Perfect Kid", "All homework done. Never asks for the phone. Secret in the comments."),
 'P04-SH4': ("The Lucky Brass Tray", "People used to bang it to call someone home. Now they bang it to close a sale."),
 'P04-SH5': ("Dad's Been on Mute for 3 Days", "Three days of meetings. Shirt and tie on top, shorts below. One sentence."),
 'P04-SH6': ("4 People at Dinner. 3 Chewing Sounds.", "Dinner, day three. Mom says Bin is so good today. So where is the real Bin?"),
 'P04-SH7': ("2 A.M., 27th Floor", "Three hours until sunrise. The ghost pulls the breaker and bangs on the fire door."),
}
ORDER = {'P01': [1, 2, 3, 4, 5, 7], 'P02': [1, 2, 3, 4, 5, 6, 7], 'P03': [1, 3, 2, 4, 5, 6, 7], 'P04': [1, 6, 3, 2, 4, 5, 7]}
TAGS = ['vietnamese ghost story', 'vietnamese folklore', 'animated horror', 'horror comedy', 'dark comedy', 'ghost story animation',
        'satire', 'folklore', 'asian ghost', 'the petty ghost']
FOOT = ("\n\nA fictional story inspired by Vietnamese folklore about the {g} — {gd}. Characters and events are fictional. "
        "Voices and images were made with AI.\n\nNew episodes every few days. Subscribe " + HANDLE + " — a petty little house ghost tells you what the living get up to.")

COMP_TITLE = '4 Vietnamese Ghosts Roast the Living | Animated Horror Comedy'
COMP_DESC = 'Four Vietnamese folk ghosts tell their side of the story — and the living do not come out of it well.'
COMP_FOOT = 'Fictional stories inspired by Vietnamese folklore. Voices and images were made with AI.'
SUB_LINE = ' — a petty little house ghost tells you what the living get up to.'; FULL = '▶ Full episode: '
HASH = {'en': '#ghoststory #animation #vietnam', 'es': '#historiasdeterror #animacion #vietnam'}[LANG]
if LANG != 'en':
    X = json.load(open(L / 'publish-text.json'))
    GHOST = {k: (GHOST[k][0], X['GHOST'][k]) for k in GHOST}; LONG = {k: tuple(v) for k, v in X['LONG'].items()}
    SHORT = {k: tuple(v) for k, v in X['SHORT'].items()}; TAGS = X['TAGS']; FOOT = X['FOOT']
    COMP_TITLE, COMP_DESC, COMP_FOOT, SUB_LINE, FULL = X['COMP_TITLE'], X['COMP_DESC'], X['COMP_FOOT'], X['SUB_LINE'], X['FULL']

def dur(p): return float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(p)]))
def ts(s): s = int(s); return f'{s // 60}:{s % 60:02d}'

def meta(title, desc, tags):
    return {'title': title, 'description': desc, 'tags': tags, 'categoryId': '24', 'selfDeclaredMadeForKids': False, 'containsSyntheticMedia': True}

def main():
    (L / 'meta').mkdir(parents=True, exist_ok=True); items = []
    for ep, (title, desc) in LONG.items():
        g, gd = GHOST[ep]
        items.append(dict(id=f'{U}-{ep}-LONG', ep=ep, kind='long', file=str(OUT / f'{U}-{ep}-LONG.mp4'), thumb=str(OUT / 'thumbs' / f'{U}-THUMB-{ep}.jpg'),
                          meta=meta(title, desc + FOOT.format(g=g, gd=gd) + '\n\n' + HASH, TAGS + [g])))
        for k in ORDER[ep]:
            sid = f'{ep}-SH{k}'; t, d = SHORT[sid]; cov = OUT / 'thumbs' / f'{U}-COVER-{sid}.jpg'
            items.append(dict(id=f'{U}-{sid}', ep=ep, kind='short', file=str(OUT / f'{U}-{sid}.mp4'), thumb=str(cov) if cov.exists() else None,
                              meta=meta(f'{t} #shorts', d + '\n' + FULL + '{LONG_URL_' + ep + '}' + FOOT.format(g=g, gd=gd) + '\n\n#shorts ' + HASH,
                                        TAGS[:6] + [g])))
    # compilation: 4 LONG nối nhau (mid-roll ≥ 8 phút), chương theo độ dài thật
    t, ch = 0.0, []
    for ep, (title, _) in LONG.items():
        ch.append(f'{ts(t)} {GHOST[ep][0]}: {title}'); f = OUT / f'{U}-{ep}-LONG.mp4'; t += dur(f) if f.exists() else 0
    items.append(dict(id=f'{U}-COMP-01', ep='ALL', kind='long', file=str(OUT / f'{U}-COMP-01.mp4'), thumb=str(OUT / 'thumbs' / f'{U}-THUMB-COMP-01.jpg'),
                      meta=meta(COMP_TITLE, COMP_DESC + '\n\n' + '\n'.join(ch) + '\n\n' + COMP_FOOT + '\n\n' + HANDLE + SUB_LINE + '\n\n' + HASH, TAGS)))
    # lịch
    d0 = dt.datetime.strptime(START, '%Y-%m-%d')   # ngày LONG đầu; LONG cách 3 ngày, 08:00 +07
    longs = {ep: (d0 + dt.timedelta(days=3 * i, hours=8)).strftime('%Y-%m-%d %H:%M') for i, ep in enumerate(['P01', 'P02', 'P03', 'P04', 'ALL'])}
    for it in items:
        if it['kind'] == 'long': it['at'] = longs[it['ep']]
    slots = []
    for day in range(30):
        for hh, mm in ((6, 0), (23, 30)): slots.append(d0 + dt.timedelta(days=day, hours=hh, minutes=mm))
    used = set()
    for it in [x for x in items if x['kind'] == 'short']:
        after = dt.datetime.strptime(longs[it['ep']], '%Y-%m-%d %H:%M')
        s = next(s for s in slots if s > after and s not in used); used.add(s); it['at'] = s.strftime('%Y-%m-%d %H:%M')
    items.sort(key=lambda x: x['at'])
    for it in items:
        mp = L / 'meta' / f"{it['id']}.json"; json.dump(it['meta'], open(mp, 'w'), ensure_ascii=False, indent=1); it['meta_file'] = str(mp)
    json.dump([{k: v for k, v in it.items() if k != 'meta'} for it in items], open(L / 'schedule.json', 'w'), ensure_ascii=False, indent=1)
    rows = []
    for it in items:
        at = dt.datetime.strptime(it['at'], '%Y-%m-%d %H:%M'); et = at - dt.timedelta(hours=12)
        ok = '✅' if pathlib.Path(it['file']).exists() else '⏳'
        rows.append(f"| {at:%a %d/%m %H:%M} | {et:%a %H:%M} ET | {it['id']} | {it['meta']['title']} | {ok} |")
    (L / 'publish.md').write_text(
        f"# {HANDLE} ({U}) — lịch đăng (sinh bởi `tools/loc_publish.py {LANG}`, đừng sửa tay)\n\n"
        f"Giờ +07 / giờ New York (EST = +07 − 12h). Upload: `node tools/loc_upload.mjs {LANG}` (dry-run mặc định). Meta: `loc/{LANG}/meta/<ID>.json`.\n\n"
        "| +07 | New York | Mã | Tiêu đề | File |\n|---|---|---|---|---|\n" + '\n'.join(rows) + '\n')
    print(len(items), 'video; LONG', sum(x['kind'] == 'long' for x in items), '; short cuối', items[-1]['at'])

main()
