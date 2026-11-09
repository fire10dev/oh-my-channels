# IX001 — How Submarine Crews Eat, Shower & Sleep for 77 Days

Status: **v2 (8:25), owner bỏ bước duyệt VI (2026-11-09 12:59)**. Nguồn sự thật cho lời đọc: `src/data/ix001.json` (32 cảnh, ~1.300 từ). Bảng §2 dưới đây là v1 (21 cảnh), giữ để tham khảo.
Target: v1 = 730 từ ≈ 5 phút (cần thêm 2–3 chương để ≥ 8 phút), 1920×1080, ~150 wpm. Boat: US Navy **Ohio-class SSBN** ("boomer").
Format: ngôi "you", thì hiện tại; HUD `DAY N`; mỗi chương = `PROBLEM N` + mẹo hậu cần có số liệu thật; câu cuối mở sang Part 2.

## 1. Claim table (nguồn trước, lời sau)
Mức tin: ✅ nguồn chính thức · 🟢 nhiều nguồn thứ cấp khớp nhau · 🟡 giai thoại / nguồn yếu ⇒ lời kể phải rào đón.

| # | Claim | Mức | Nguồn |
|---|---|---|---|
| C1 | Ohio-class: dài 560 ft (170,69 m), thủy thủ 15 sĩ quan + 144 binh sĩ = 159 người | ✅ | navy.mil Fact File SSBN (cập nhật 27/02/2025) https://www.navy.mil/Resources/Fact-Files/Display-FactFiles/Article/2169580/fleet-ballistic-missile-submarines-ssbn/ |
| C2 | Trung bình 77 ngày trên biển, sau đó 35 ngày bảo dưỡng; 2 kíp Blue/Gold luân phiên | ✅ | như C1 |
| C3 | 14 tàu Ohio SSBN; hiện tối đa 20 ống tên lửa (4 ống bị vô hiệu theo New START) | ✅ | như C1 |
| C4 | Kỷ lục: kíp Gold USS Pennsylvania tuần tra 140 ngày | 🟢 | DVIDS https://www.dvidshub.net/news/505831/face-defense-uss-pennsylvania-sets-patrol-record |
| C5 | Hot racking: nhiều người dùng chung 1 giường theo ca, thường là lính cấp thấp; USS Bremerton có 117 giường cho tới ~140 người | 🟢 | Wikipedia "Hot racking"; Stars and Stripes https://www.stripes.com/history/2023-06-13/submariners-life-okinawa-2001-10416337.html |
| C6 | Trước 2014: ngày làm việc 18 giờ (gác 6, nghỉ 12). Từ tháng 5/2014 Hải quân cho phép lịch 24 giờ (gác 8, cách 16) dựa trên nghiên cứu phòng thí nghiệm y khoa tàu ngầm ở Groton | 🟢 | Navy Times https://navytimes.com/articles/this-life-changing-shift-has-made-submariners-much-happier ; CT OMA 2015 https://portal.ct.gov/OMA/In-the-News/2015-News/Submariners-On-New-24-Hour-Watch-Schedule |
| C7 | Nước ngọt làm từ nước biển bằng chưng cất (đun sôi, ngưng tụ hơi) | 🟢 | Navy History (NMUSN) distillation sheet https://www.history.navy.mil/content/history/museums/nmusn/education/educational-resources/history-of-submarines/making-fresh-water--distillation/distillation-activity-sheet.html |
| C8 | "Navy shower": làm ướt, khoá nước, xoa xà phòng, mở nước xả — tắm rất ngắn | 🟡 | nhiều nguồn thứ cấp; không có quy định chính thức cho tàu ngầm hiện đại ⇒ kể là "thói quen", không nói "luật" |
| C9 | Oxy: máy điện phân tách nước thành H₂ + O₂ (cần điện từ lò phản ứng); dự phòng "nến oxy" natri clorat | 🟢 | Nautilus Museum PDF https://ussnautilus.org/wp-content/uploads/2022/03/harris-_How-Do-Submariners-Breathe-Underwater.pdf ; Cosmos https://cosmosmagazine.com/technology/oxygen-generators-and-carbon-dioxide-scrubbers-explained |
| C10 | CO₂ được lọc bằng dung dịch amine (MEA), đun nóng để nhả CO₂ rồi nén bơm ra biển | 🟢 | như C9 |
| C11 | Rau quả tươi, sữa hết trong khoảng 1–3 tuần; sau đó đồ đông lạnh, đóng hộp, bột | 🟢 | AP (Daily Herald) https://www.dailyherald.com/?p=379139 ; UK Defence Journal |
| C12 | Bữa nửa đêm "midrats" (midnight rations) | 🟢 | navycs.com 1902 Navy rations https://navycs.com/charts/1902-navy-rations.html |
| C13 | Rác khô ép vào lon đặc biệt, thêm tạ kim loại cho chìm, bắn ra biển qua ống TDU (Trash Disposal Unit) | ✅ | National Academies https://nap.nationalacademies.org/read/9190/chapter/10 |
| C14 | Bể vệ sinh được "thổi" ra biển bằng khí nén; trong lúc đó treo biển "WARNING! BLOWING SANITARIES" — không được xả nước | 🟢 | goatlocker.org (trích tài liệu y tế Hải quân) https://www.goatlocker.org/resources/nav/mrc.pdf |
| C15 | Familygram: tin nhắn ngắn một chiều, tàu nhận nhưng gần như không gửi (giữ im lặng vô tuyến). Giới hạn từ thay đổi theo thời kỳ (15 → 50 từ); Hải quân Anh hiện cho 60 từ 2 lần/tuần | 🟢 | Wikipedia "Familygram"; Forces News https://www.forcesnews.com/services/navy/sublife-brief-and-brutal-way-submariners-can-message-loved-ones-while-deployed |
| C16 | Tin xấu có thể bị giữ tới cuối chuyến (Hải quân Anh) | 🟡 | Forces News — chỉ nói về Anh ⇒ lời kể ghi rõ "on British boats" |
| C17 | Không có nắng ⇒ vitamin D của thủy thủ giảm; Hải quân từng thử đèn đặc biệt (con số 13%→30% ĐÃ BỎ 2026-11-09 vì chưa có bài gốc) | 🟢 | DTIC + review; USNI News 2021 https://news.usni.org/2021/06/15/sub-force-experimenting-with-anti-fatigue-measures-to-mimic-natural-light |
| C19 | Lớp Columbia thay Ohio, phải sẵn sàng tuần tra chậm nhất 10/2030 ⇒ lời đọc "starting in the 2030s" | ✅ | navy.mil Fact File SSBN (như C1) |
| C20 | Một quân y độc lập (IDC) là người lo y tế duy nhất trên tàu; SSBN từng có bác sĩ từ 1959 tới những năm 1970 | 🟢 | Navy Medicine https://www.med.navy.mil/Media/News/Article/3332617/independent-duty-corpsman-a-department-of-one/ ; DVIDS https://www.dvidshub.net/news/printable/474365 |
| C21 | Halfway night do thuyền trưởng công bố; cribbage là truyền thống; vụ mất nĩa trên tàu Trident 1988 | 🟢/🟡 | ussnautilus.org; Military Times https://www.militarytimes.com/off-duty/military-culture/2023/08/16/guard-the-forks-the-great-submarine-utensil-heist-of-1988/ |
| C22 | Mặt nạ EAB cắm vào ống khí trên vách, chỉ đi được vài feet; khi cháy phải đeo EAB; có cuộc thi bịt mắt | 🟢/🟡 | Wikipedia "Emergency Air Breather"; NAP https://www.nationalacademies.org/read/10242/chapter/3 |
| C18 | Độ sâu hoạt động "hơn 800 ft" | ❌ chưa tìm thấy trên navy.mil ⇒ **không dùng** |

## 2. Kịch bản (EN = lời đọc · VI = để duyệt)
`say` chỉ khác EN khi cần phiên âm. View = phòng camera tới trên sơ đồ cắt lớp.

| # | HUD | Card | EN narration | VI (duyệt) | Hình |
|---|---|---|---|---|---|
| 01 | DAY 1 06:00 | — | You're about to disappear for seventy-seven days. No windows. No sunlight. No phone. A hundred and fifty-nine people, sealed inside a steel tube, somewhere in the ocean. And nobody, not even your family, knows where. | Bạn sắp biến mất 77 ngày. Không cửa sổ, không nắng, không điện thoại. 159 người bị niêm kín trong một ống thép, đâu đó giữa đại dương. Không ai, kể cả gia đình, biết bạn ở đâu. | Toàn cảnh tàu lặn, push-in chậm |
| 02 | DAY 1 06:00 | STAT 560 ft | This is an Ohio-class ballistic missile submarine. Sailors call it a boomer. It's five hundred and sixty feet long, longer than one and a half football fields... | Đây là tàu ngầm tên lửa đạn đạo lớp Ohio, thủy thủ gọi là "boomer". Dài 560 ft (170 m), hơn 1,5 sân bóng bầu dục… | Cắt lớp toàn tàu + thẻ số |
| 02b | | | ...but most of that space belongs to a nuclear reactor and twenty missile tubes. The humans get what's left. | …nhưng phần lớn chỗ dành cho lò phản ứng và 20 ống tên lửa. Con người nhận phần còn lại. | Tô sáng lò + ống tên lửa, phần còn lại tối |
| 03 | DAY 1 | STAT 2 crews | The Navy runs each boat with two complete crews, Blue and Gold. While one crew is at sea, the other is at home, training. On average, a patrol lasts seventy-seven days. Today, that's you. | Mỗi tàu có 2 kíp đầy đủ: Blue và Gold. Một kíp ra khơi, kíp kia ở nhà huấn luyện. Trung bình mỗi chuyến 77 ngày. Hôm nay là bạn. | 2 nhóm người xanh/vàng đổi chỗ |
| 04 | DAY 1 22:00 | PROBLEM 1 · SLEEP | Problem one: where do you sleep? Your bed, called a rack, is a narrow shelf, stacked three high, with a curtain and a thin mattress. Under the mattress is a locker. That's your entire personal space. | Vấn đề 1: ngủ ở đâu? Giường gọi là "rack": một kệ hẹp, xếp 3 tầng, có rèm và nệm mỏng. Dưới nệm là tủ đồ. Đó là toàn bộ không gian riêng của bạn. | Zoom vào khoang ngủ, rack 3 tầng |
| 05 | DAY 1 | — | On smaller attack submarines, there aren't always enough racks. The newest sailors may share one bed in shifts. When you crawl in, it's still warm. That's why it's called hot racking. | Trên tàu ngầm tấn công nhỏ hơn, không phải lúc nào cũng đủ giường. Lính mới có thể dùng chung 1 giường theo ca. Lúc bạn chui vào, nệm còn ấm. Vì thế gọi là "hot racking". | 2 người đổi ca trên 1 giường, hơi nóng bốc lên |
| 06 | DAY 2 | STAT 18 h → 24 h | And for decades, submarines didn't even run on a normal day. Sailors worked six hours, then had twelve off, an eighteen-hour day. Your body never knew when it was morning. In twenty fourteen, Navy researchers proved what sailors already knew: it was exhausting. Today, most boats run on a twenty-four-hour clock. | Suốt nhiều thập kỷ, tàu ngầm không chạy theo ngày bình thường: gác 6 giờ, nghỉ 12 giờ, một "ngày" 18 giờ. Cơ thể không biết khi nào là sáng. Năm 2014, nghiên cứu của Hải quân xác nhận điều thủy thủ đã biết: rất mệt. Nay hầu hết tàu chạy lịch 24 giờ. | Đồng hồ 18 giờ quay rối → đồng hồ 24 giờ |
| 07 | DAY 5 05:40 | PROBLEM 2 · WATER | Problem two: water. You're surrounded by ocean, but you can't drink a drop of it. So the boat makes its own. It boils seawater and collects the steam. The salt stays behind. | Vấn đề 2: nước. Xung quanh toàn biển nhưng không uống được giọt nào. Nên tàu tự làm nước: đun sôi nước biển, hứng hơi nước. Muối ở lại. | Sơ đồ nồi chưng cất: nước biển → hơi → nước ngọt |
| 08 | DAY 5 | — | That fresh water has a long list of jobs: drinking, cooking, cooling equipment, and, somewhere near the bottom, your shower. So you learn the Navy shower. Water on. Get wet. Water off. Soap up. Water on. Rinse. Done. | Nước ngọt đó có nhiều việc: uống, nấu ăn, làm mát máy móc… và gần cuối danh sách là tắm. Nên bạn học kiểu "tắm Hải quân": mở nước, làm ướt, khoá nước, xoa xà phòng, mở nước, xả. Xong. | Phòng tắm, chữ ON/OFF |
| 09 | DAY 12 | PROBLEM 3 · AIR | Problem three: air. A hundred and fifty-nine people breathe out a lot of carbon dioxide. In a sealed tube, that would eventually kill everyone. So the boat makes air, too. | Vấn đề 3: không khí. 159 người thở ra rất nhiều CO₂. Trong ống kín, cuối cùng nó sẽ giết tất cả. Nên tàu cũng tự làm không khí. | Thanh CO₂ tăng dần |
| 10 | DAY 12 | — | An oxygen generator runs electricity through water and splits it into hydrogen and oxygen. The oxygen goes into the air. The hydrogen goes overboard. Another machine pulls carbon dioxide out of the air with a chemical called amine, then pumps it into the sea. | Máy tạo oxy cho dòng điện chạy qua nước, tách thành hydro và oxy. Oxy vào không khí, hydro thải ra biển. Một máy khác hút CO₂ khỏi không khí bằng hoá chất amine rồi bơm ra biển. | Sơ đồ H₂O → H₂ + O₂; máy lọc CO₂ |
| 11 | DAY 12 | — | And if both machines fail? There are oxygen candles. Light one, and a chemical reaction releases pure oxygen. The nuclear reactor is what makes all of this possible: it gives the boat almost unlimited electricity. | Nếu cả hai máy hỏng? Có "nến oxy": đốt lên, phản ứng hoá học nhả oxy tinh khiết. Lò phản ứng hạt nhân là thứ khiến tất cả khả thi: nó cho tàu nguồn điện gần như vô hạn. | Nến oxy cháy; tia điện từ lò chạy khắp tàu |
| 12 | DAY 15 12:00 | PROBLEM 4 · FOOD | Problem four: food. On day one, the boat is packed with fresh fruit, salad, milk, and eggs. Enjoy them. Within one to three weeks, they're gone. | Vấn đề 4: thức ăn. Ngày đầu, tàu đầy trái cây, rau, sữa, trứng. Tận hưởng đi. Trong 1 đến 3 tuần là hết. | Nhà ăn; kho đồ tươi vơi dần theo ngày |
| 13 | DAY 30 | — | After that, it's frozen, canned, and powdered, for the rest of the patrol. The cooks rotate menus so the same meal doesn't come back too often. And there's a fourth meal at midnight. Sailors call it midrats, short for midnight rations. | Sau đó là đồ đông lạnh, đóng hộp, bột cho tới hết chuyến. Đầu bếp xoay vòng thực đơn để món không lặp lại quá sớm. Có cả bữa thứ tư lúc nửa đêm, thủy thủ gọi là "midrats". | Lon, túi bột; đồng hồ 00:00, bữa đêm |
| 14 | DAY 30 | PROBLEM 5 · TRASH | Problem five: trash. You can't leave a trail of garbage floating behind a submarine that's supposed to be invisible. So trash is crushed into special metal cans, weighted so they sink, and fired out of a tube in the bottom of the boat, straight down to the sea floor. | Vấn đề 5: rác. Không thể để rác nổi lềnh phềnh phía sau một con tàu cần tàng hình. Nên rác bị ép vào lon kim loại đặc biệt, gắn tạ cho chìm, rồi bắn ra từ một ống dưới đáy tàu, thẳng xuống đáy biển. | Máy ép → lon → ống TDU → lon chìm |
| 15 | DAY 30 | — | Human waste goes into a tank. Every so often, the crew blows that tank out with compressed air. While they do, a sign goes up: Warning, blowing sanitaries. Do not flush. If you do, you'll find out why that sign exists. | Chất thải người vào một bồn chứa. Thỉnh thoảng thủy thủ dùng khí nén thổi bồn ra biển. Lúc đó treo biển: "Cảnh báo, đang thổi bồn vệ sinh. Không xả nước." Nếu bạn xả, bạn sẽ hiểu vì sao có tấm biển đó. | Biển cảnh báo đỏ; người cầm giấy đứng khựng |
| 16 | DAY 44 | PROBLEM 6 · HOME | Problem six: home. A boomer's job is to stay hidden, so it almost never transmits. Your family can send you short messages called familygrams, a few dozen words at a time. You can read them. You can't reply. | Vấn đề 6: nhà. Nhiệm vụ của boomer là ẩn mình, nên tàu gần như không phát sóng. Gia đình gửi bạn tin ngắn gọi là "familygram", vài chục chữ mỗi lần. Bạn đọc được, nhưng không trả lời được. | Tờ giấy tin nhắn, ô trả lời bị khoá |
| 17 | DAY 44 | — | On British submarines, messages are screened, and bad news may be held until the end of the patrol, when the boat can actually do something about it. | Trên tàu ngầm Anh, tin nhắn được kiểm duyệt, và tin xấu có thể bị giữ tới cuối chuyến, khi tàu thật sự làm được gì đó. | Phong bì có dấu "HOLD" |
| 18 | DAY 60 | PROBLEM 7 · LIGHT | Problem seven: the sun. You haven't seen it in two months. Without sunlight, your skin stops making vitamin D. One study found the share of submariners with a vitamin D deficiency more than doubled during long patrols. | Vấn đề 7: mặt trời. Hai tháng rồi bạn không thấy nó. Không có nắng, da ngừng tạo vitamin D. Một nghiên cứu thấy tỉ lệ thủy thủ thiếu vitamin D tăng hơn gấp đôi trong các chuyến dài. | Thanh vitamin D tụt; đèn huỳnh quang |
| 19 | DAY 77 | — | And then, on day seventy-seven, the boat comes up. The hatch opens. And ask a submariner what they remember most. Many don't say the sunlight. They say the smell of fresh air. | Rồi tới ngày 77, tàu nổi lên. Cửa sập mở. Hỏi một thủy thủ tàu ngầm nhớ gì nhất, nhiều người không nói ánh nắng, mà nói mùi không khí trong lành. | Tàu nổi, cửa mở, ánh sáng tràn vào |
| 20 | — | — | The longest patrol on record? A hundred and forty days. Next time: what happens on board when something goes wrong, and there's no one coming to help. | Chuyến dài kỷ lục? 140 ngày. Lần sau: chuyện gì xảy ra trên tàu khi có sự cố, và không ai tới cứu. | Thẻ 140; mở sang Part 2 |

🟡 Cảnh 19 "mùi không khí" là giai thoại phổ biến; đã rào "many say", vẫn nên tìm 1 nguồn phỏng vấn.
Cảnh 02 so sánh: sân NFL kể cả end zone 120 yd = 109,7 m ⇒ 170,69/109,7 = 1,56 ✅.

## 3. Publishing (sẵn sàng, chờ owner OK để đăng)
- File: `out/IX001-submarine-77-days.mp4` (8:25, 1920×1080, −14,3 LUFS) · Thumbnail: `out/Thumb-IX001-A.jpg` (owner chọn A, 2026-11-09 14:12)
- **Title:** How Submarine Crews Eat, Shower & Sleep for 77 Days
- **"Sử dụng AI / altered content":** Không (hình minh hoạ cách điệu vẽ bằng code, không giả người thật/sự kiện thật). Ghi chú AI trong mô tả.
- **Tags:** submarine, life on a submarine, ohio class, boomer, navy, how submariners live, submarine food, hot racking, submarine life, off limits life

**Description:**
```
77 days. No windows, no sunlight, no phone. Here's how 159 sailors eat, shower and sleep inside a U.S. Navy Ohio-class ballistic missile submarine.

Figures are as of 2026. The Ohio class is scheduled to be replaced by the Columbia class starting around 2030.

Chapters
0:00 Disappearing for 77 days
0:31 The boat: an Ohio-class "boomer"
1:21 Problem 1: Sleep (racks, hot racking, the 18-hour day)
2:15 Problem 2: Water
2:45 Problem 3: Air
3:35 Problem 4: Food
4:09 Problem 5: Trash & toilets
4:47 Problem 6: Home (familygrams)
5:21 Problem 7: Boredom
5:56 Problem 8: Getting sick
6:32 Problem 9: Fire
7:11 Problem 10: The sun
7:26 Day 77
8:12 Off Limits Life

Sources (accessed 2026-11-09)
- U.S. Navy Fact File, Fleet Ballistic Missile Submarines (SSBN), updated 27 Feb 2025: https://www.navy.mil/Resources/Fact-Files/Display-FactFiles/Article/2169580/fleet-ballistic-missile-submarines-ssbn/
- DVIDS, USS Pennsylvania sets patrol record: https://www.dvidshub.net/news/505831/face-defense-uss-pennsylvania-sets-patrol-record
- Navy Times, submarines move to a 24-hour watch schedule: https://navytimes.com/articles/this-life-changing-shift-has-made-submariners-much-happier
- Stars and Stripes, life aboard USS Bremerton (hot racking): https://www.stripes.com/history/2023-06-13/submariners-life-okinawa-2001-10416337.html
- Naval History and Heritage Command, making fresh water by distillation: https://www.history.navy.mil/content/history/museums/nmusn/education/educational-resources/history-of-submarines/making-fresh-water--distillation/distillation-activity-sheet.html
- Submarine Force Library & Museum, how submariners breathe: https://ussnautilus.org/wp-content/uploads/2022/03/harris-_How-Do-Submariners-Breathe-Underwater.pdf
- National Academies, submarine solid waste (trash disposal unit): https://nap.nationalacademies.org/read/9190/chapter/10
- Forces News, how submariners receive messages: https://www.forcesnews.com/services/navy/sublife-brief-and-brutal-way-submariners-can-message-loved-ones-while-deployed
- Navy Medicine, Independent Duty Corpsman: https://www.med.navy.mil/Media/News/Article/3332617/independent-duty-corpsman-a-department-of-one/
- Military Times, the great submarine utensil heist of 1988: https://www.militarytimes.com/off-duty/military-culture/2023/08/16/guard-the-forks-the-great-submarine-utensil-heist-of-1988/
- USNI News, light and fatigue on submarines: https://news.usni.org/2021/06/15/sub-force-experimenting-with-anti-fatigue-measures-to-mimic-natural-light

Illustrations are code-animated; the narration voice is AI-generated. Spotted an error? Tell us in the comments and we'll pin the correction.

#submarine #navy #offlimitslife
```
- 🟡 **Trước khi đăng:** con số vitamin D "13% → 30%" (C17) mới có trích dẫn gián tiếp qua kết quả tìm kiếm, chưa mở được bài nghiên cứu gốc ⇒ tìm và thêm nguồn gốc vào mô tả, hoặc bỏ con số khỏi lời đọc.
- **Bình luận ghim (nháp):** "Which closed world should we go inside next: an Antarctic winter station, an oil rig, or a supermax prison?"

## 4. Neo thời gian (owner 2026-11-09 13:07: "10 năm nữa coi lại kêu xạo")
- Lời đọc có mốc năm: "as of twenty twenty-six" (lớp Ohio, kỷ lục 140 ngày, quy định tin nhắn Anh), "mid twenty-twenties" (1 quân y), "since 2014" (lịch 24 giờ), "the Navy's own numbers" (77 ngày).
- Câu kết báo trước thay đổi: lớp Columbia thay Ohio từ những năm 2030.
- Trên hình: thẻ số ghi nguồn + năm ("US Navy, 2025"); chân màn hình suốt video: "Figures as of 2026 · sources in description".
- Mô tả video: danh sách nguồn kèm ngày truy cập 2026-11-09.
