#!/usr/bin/env python3
"""Build scripts/L001 long-video script from the reviewed Short scripts (rows reused verbatim unless overridden)."""
import glob, re, sys
repo = sys.argv[1]

def rows(sid):
    f = glob.glob(f"{repo}/scripts/{sid}-*.md")[0]
    out, on = {}, False
    for line in open(f):
        if line.startswith("## Narration"): on = True; continue
        if line.startswith("## "): on = False
        if on and line.startswith("|") and not re.match(r"^\|\s*(#|---)", line):
            c = [x.strip() for x in line.split("|")]
            out[c[1]] = (c[3], c[4], c[5])
    return out

R = {s: rows(s) for s in "S002 S003 S004 S005 S006 S007 S008 S009 S010 S011".split()}

# (src, row, EN override, VI override) | ("L", None, EN, VI) for bridges with no new facts
CH = [
 ("Cold open", [
  ("L", None, "Some modern histories tell Vietnam's past as a long story of resistance. The sources are messier, and more interesting. This is two thousand years of it, told from more than one side.",
   "Một số sách sử hiện đại kể quá khứ Việt Nam như một câu chuyện kháng chiến dài. Nguồn tư liệu thì rối hơn, và thú vị hơn. Đây là hai nghìn năm, kể từ nhiều phía."),
 ]),
 ("1 · Bronze drums", [("S011", r, None, None) for r in "hook 1 2 3 4 5 6 7".split()]),
 ("2 · Chinese rule and the Trưng sisters", [
  ("S006", "hook", None, None), ("S006", "1", None, None), ("S006", "2", None, None),
  ("S004", "hook", "For the Trưng sisters, the earliest surviving written accounts are Chinese. The main Vietnamese chronicle came many centuries later.",
   "Về Hai Bà Trưng, ghi chép sớm nhất còn lại là của Trung Quốc. Bộ sử chính của Việt Nam ra đời nhiều thế kỷ sau."),
  *[("S004", r, None, None) for r in "1 2 3 4 5 6 7".split()],
  ("S006", "3", "Chinese rule was not unbroken. After the Trưng revolt, Lý Bôn founded the state of Vạn Xuân in 544. Sui forces reconquered it in 602.",
   "Sự cai trị của Trung Quốc không liền mạch. Sau khởi nghĩa Hai Bà Trưng, Lý Bôn lập nước Vạn Xuân năm 544. Quân Tùy chiếm lại năm 602."),
  *[("S006", r, None, None) for r in "4 5 6 7".split()],
 ]),
 ("3 · Champa", [("S003", r, None, None) for r in "hook 1 2 3 4 5".split()]),
 ("4 · The Mongols, three times", [
  ("S002", "hook", None, None),
  ("S002", "1", "The first time was in 1258. A Mongol army under Uriyangkhadai marches in from Yunnan, wins a battle, and takes Thăng Long. The Trần king and his court escape.",
   "Lần đầu năm 1258. Quân Mông Cổ do Ngột Lương Hợp Thai chỉ huy từ Vân Nam tiến xuống, thắng một trận, chiếm Thăng Long. Vua Trần và triều đình rút đi."),
  ("S002", "2", None, None),
  ("S002", "3", "By 1285, Kublai Khan rules China as the Yuan dynasty. His son Toghan invades from the north, while General Sogetu attacks from Champa in the south.",
   "Đến năm 1285, Hốt Tất Liệt cai trị Trung Quốc với nhà Nguyên. Con ông là Thoát Hoan đánh từ phía bắc, tướng Toa Đô đánh từ Champa ở phía nam."),
  *[("S002", r, None, None) for r in "4 5 6 7 8 9".split()],
 ]),
 ("5 · Champa and Đại Việt", [("S003", r, None, None) for r in "6 7".split()]),
 ("6 · Ports and a divided country", [("S009", r, None, None) for r in "hook 1 2 3 4 5 6 7".split()]),
 ("7 · A new alphabet begins", [
  ("S007", "hook", None, None),
  *[("S007", r, None, None) for r in "1 2 3 4".split()],
 ]),
 ("8 · Angkor and the Mekong Delta", [
  *[("S005", r, None, None) for r in "hook 1 2 3 4 5 6 7".split()],
  *[("S010", r, None, None) for r in "hook 1 2 3 4 5 6".split()],
 ]),
 ("9 · Tây Sơn, 1789", [("S008", r, None, None) for r in "hook 1 2 3 4 5 6 7 8".split()]),
 ("10 · The 1830s: borders and peoples", [
  ("S010", "7", None, None), ("S003", "8", None, None), ("S003", "9", None, None), ("S010", "8", None, None),
 ]),
 ("11 · Quốc ngữ becomes the national script", [("S007", r, None, None) for r in "5 6 7 8".split()]),
 ("Outro", [
  ("L", None, "Chinese records, Vietnamese chronicles, a Cham envoy, Qing archives, tree rings and mud cores. None of them tells the whole story alone. If you know a source we missed, tell us in the comments.",
   "Sử Trung Quốc, sử Việt, một sứ giả Chăm, văn thư nhà Thanh, vòng gỗ cây và lõi bùn. Không nguồn nào tự kể hết câu chuyện. Nếu bạn biết nguồn nào chúng tôi bỏ sót, hãy bình luận."),
 ]),
]


# Codex L001 r1 fixes (docs/reviews/L001-r1.md)
FIX = {
 ("S011","hook"): ("This star is from a bronze drum made more than two thousand years ago. It is also the logo of this channel. Here is what we know about it.",
   "Ngôi sao này nằm trên một chiếc trống đồng làm ra hơn hai nghìn năm trước. Nó cũng là logo của kênh. Đây là những gì ta biết về nó."),
 ("S011","2"): ("They were cast in bronze using more than one technique, including piece-mold and, in some cases, lost-wax casting. Some stand around a meter tall.",
   "Trống được đúc bằng đồng theo nhiều kỹ thuật, gồm khuôn ghép và, ở một số chiếc, khuôn sáp. Có chiếc cao khoảng một mét."),
 ("S011","6"): ("Their origins are debated. Archaeologist Ambra Calò identifies northern Vietnam as a production center; other scholars have argued for Yunnan, where the Dian culture also made bronze drums.",
   "Nguồn gốc trống còn tranh luận. Nhà khảo cổ Ambra Calò xác định miền Bắc Việt Nam là một trung tâm sản xuất; học giả khác cho là Vân Nam, nơi văn hóa Điền cũng làm trống đồng."),
 ("S011","7"): ("The drums themselves date from long before modern borders. Scholars continue to debate where they originated.",
   "Bản thân những chiếc trống có từ rất lâu trước khi có biên giới hiện đại. Giới học giả vẫn tranh luận chúng bắt nguồn từ đâu."),
 ("S004","1"): ("Around 40 CE, Han records describe Su Ding as the governor of Jiaozhi.",
   "Khoảng năm 40, sử nhà Hán chép Tô Định là quan cai trị Giao Chỉ."),
 ("S006","7"): ("Chinese records described the region through imperial administration. Some modern histories frame the period as a thousand-year struggle. Some modern historians question that framing.",
   "Sử Trung Quốc mô tả vùng này qua bộ máy cai trị của đế quốc. Một số sách sử hiện đại coi đây là cuộc đấu tranh nghìn năm. Một số sử gia hiện đại đặt câu hỏi về cách nhìn đó."),
 ("S009","3"): ("Japanese merchants arrived on licensed red seal ships, and lived in their own quarter. As Japan tightened restrictions on overseas travel during the 1630s, red seal voyages ended; some Japanese residents stayed for decades.",
   "Thương nhân Nhật tới bằng thuyền châu ấn có giấy phép, sống trong khu phố riêng. Khi Nhật siết chặt việc ra nước ngoài trong thập niên 1630, thuyền châu ấn chấm dứt; một số người Nhật ở lại thêm hàng chục năm."),
 ("S009","7"): ("Hội An declined in the later nineteenth century as other ports, including Đà Nẵng, rose and its harbor silted. That economic stagnation helped preserve the old town. UNESCO listed it in 1999.",
   "Hội An suy tàn vào cuối thế kỷ 19 khi các cảng khác, trong đó có Đà Nẵng, nổi lên và cửa sông bị bồi. Sự trì trệ kinh tế đó giúp phố cổ còn nguyên. UNESCO công nhận năm 1999."),
 ("S005","5"): ("In 2019, scientists studied sediment cores from Angkor Thom's moat. Indicators of burning, forest disturbance and soil erosion began declining there in the early fourteenth century, before the conventional date of 1431.",
   "Năm 2019, các nhà khoa học nghiên cứu lõi trầm tích từ hào Angkor Thom. Dấu hiệu đốt, phá rừng và xói mòn đất bắt đầu giảm từ đầu thế kỷ 14, trước mốc quy ước 1431."),
 ("S005","6"): ("Angkor Wat continued in use as a Buddhist site after Angkor's political center shifted, and it remains in use today.",
   "Angkor Wat vẫn được dùng làm nơi thờ Phật sau khi trung tâm chính trị dời đi, và đến nay vẫn vậy."),
 ("S010","8"): ("Vietnam's 2019 census counted about 1.3 million Khmer people, most living in the Mekong Delta. In Khmer, the region is called Kampuchea Krom, Lower Cambodia.",
   "Tổng điều tra 2019 của Việt Nam đếm được khoảng 1,3 triệu người Khmer, phần lớn sống ở đồng bằng sông Cửu Long. Tiếng Khmer gọi vùng này là Kampuchea Krom, Campuchia Hạ."),
}

FIX.update({
 ("S011","1"): ("The drums are named after Đông Sơn, a site in Thanh Hóa province, northern Vietnam, where excavations began in 1924.",
   "Trống mang tên Đông Sơn, một địa điểm ở Thanh Hóa, miền Bắc Việt Nam, nơi việc khai quật bắt đầu năm 1924."),
 ("S011","2"): ("They were cast in bronze. Scholars debate the techniques used, including piece-mould and lost-wax casting. Some stand around a meter tall.",
   "Trống được đúc bằng đồng. Giới học giả còn tranh luận về kỹ thuật, gồm khuôn ghép và khuôn sáp. Có chiếc cao khoảng một mét."),
 ("S003","9"): ("Vietnam's 2019 census counted 178,948 Cham, and Cambodia's census counted 275,217. Cham communities include Hindu and Muslim traditions.",
   "Tổng điều tra 2019 của Việt Nam đếm được 178.948 người Chăm, của Campuchia là 275.217. Cộng đồng Chăm có cả truyền thống Hindu và Hồi giáo."),
 ("S010","8"): ("Vietnam's 2019 census counted 1.32 million Khmer people, mostly in the Mekong Delta. In Khmer, the region is called Kampuchea Krom, Lower Cambodia.",
   "Tổng điều tra 2019 của Việt Nam đếm được 1,32 triệu người Khmer, phần lớn ở đồng bằng sông Cửu Long. Tiếng Khmer gọi vùng này là Kampuchea Krom, Campuchia Hạ."),
})

FIX.update({
 ("S002","4"): ("How big was the army? Modern estimates range from about eighty thousand to three hundred thousand. Vietnamese chronicles give half a million.",
   "Quân đông bao nhiêu? Ước tính hiện đại từ khoảng tám vạn đến ba mươi vạn. Sử Việt chép năm mươi vạn."),
 ("S003","7"): ("In 1471, Đại Việt's emperor Lê Thánh Tông captured Vijaya, a Cham capital. A Cham envoy later told the Ming court that Annam had taken their king, his family and the royal seals.",
   "Năm 1471, vua Lê Thánh Tông của Đại Việt chiếm Vijaya, một kinh đô Chăm. Sau đó một sứ giả Chăm tâu với triều Minh rằng An Nam đã bắt vua, gia quyến và ấn tín của họ."),
 ("S005","5"): ("A 2019 study of sediment cores from Angkor Thom's moat found indicators of burning, forest disturbance and soil erosion declining in the first decades of the fourteenth century, before the conventional date of 1431.",
   "Một nghiên cứu năm 2019 về lõi trầm tích ở hào Angkor Thom thấy dấu hiệu đốt, phá rừng và xói mòn đất giảm dần trong những thập niên đầu thế kỷ 14, trước mốc quy ước 1431."),
 ("S010","hook"): ("Khmer communities lived in parts of the Mekong Delta for centuries. Today, the delta is the heart of southern Vietnam. How did that happen?",
   "Người Khmer sống ở nhiều vùng đồng bằng sông Cửu Long suốt nhiều thế kỷ. Nay đồng bằng là trái tim miền Nam Việt Nam. Chuyện đó diễn ra thế nào?"),
 ("S010","1"): ("Before Saigon, Prey Nokor was a Khmer settlement near today's Ho Chi Minh City.",
   "Trước Sài Gòn, Prey Nokor là một khu dân cư Khmer gần TP. Hồ Chí Minh ngày nay."),
 ("S008","6"): ("How many soldiers? Estimates vary. Scholars put the Qing force well under forty thousand. Vietnamese accounts report far higher figures.",
   "Bao nhiêu quân? Ước tính khác nhau. Giới học giả cho rằng quân Thanh dưới bốn vạn khá xa. Sử Việt chép con số cao hơn nhiều."),
})

lines, words, n = [], 0, 0
for title, items in CH:
    lines.append(f"| | **{title}** | | | | |")
    for src, row, en, vi in items:
        n += 1
        if src == "L":
            claims, img = "— (framing, no new fact)", "title card"
        else:
            e0, c0, v0 = R[src][row]
            if en is None and (src,row) in FIX: en, vi = FIX[(src,row)]
            en, vi = en or e0, vi or v0
            claims = " ".join(f"{src}:{c}" for c in re.findall(r"C\d+", c0)) or "—"
            idx = 0 if row == "hook" else int(row)
            img = f"{src.lower()}/img-{idx:02d}"
        words += len(en.split())
        lines.append(f"| {n} | {src} {row or ''} | {en} | {claims} | {vi} | {img} |")
print("\n".join(lines))
used = {}
for l in lines:
    for src, cid in re.findall(r"(S\d{3}):(C\d+)", l.split("|")[4] if l.count("|")>5 else ""):
        used.setdefault(src, []).append(cid) if cid not in used.get(src, []) else None
print("\n## Claims (copied from each Short's claim table — sources + grade; ✏ = L001 wording changed after Codex L001-r1..r3)")
for src in sorted(used):
    f = glob.glob(f"{repo}/scripts/{src}-*.md")[0]
    print(f"\n### {src} — {f.split('/')[-1]}")
    for line in open(f):
        m = re.match(r"^\|\s*(C\d+)\s*\|", line)
        if m and m.group(1) in used[src]:
            print(line.rstrip("\n").replace(f"| {m.group(1)} |", f"| {src}:{m.group(1)} |", 1))
print(f"\n<!-- rows={n} words={words} minutes@145wpm={words/145:.1f} -->", file=sys.stderr)
