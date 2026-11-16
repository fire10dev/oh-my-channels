# Brief viết kịch bản batch 3 (s131–s230, EN + VI)

Bạn viết kịch bản cho 1 nhóm chủ đề (danh sách id trong prompt). Chủ đề ở cuối prompt. Output: 1 JSON list, **mỗi chủ đề 2 object (EN rồi VI)**. 

## Schema (đúng như `shorts/shorts.json` batch 1)

EN:
```json
{"id": "s31", "mascot": "pen", "title": "Why ...", "mechanism": "named mechanism",
 "lines": [{"vo": "...", "text": "HEADING", "color": "red", "actor": "panic", "prop": "hourglass"}, ...]}
```
VI:
```json
{"id": "s31vi", "lang": "vi", "mascot": "pen", "title": "<title_vi bỏ dấu, ASCII>", "title_vi": "Tiêu đề có dấu",
 "mechanism": "<giống EN>", "lines": [...]}
```
- `mascot`: id lẻ = `pen`, id chẵn = `buff` (theo bảng).
- Mỗi line = 1 shot: `vo` (câu đọc), `text` (tiêu đề trên hình, IN HOA, **≤ 20 ký tự (tối đa cứng 24)**), `color` tuỳ chọn (`red` = vấn đề, `green` = cách làm, `gold` = câu chốt/kết; bỏ trống = mực đen), `actor` và/hoặc `prop` (ít nhất 1).
- `actor` ∈ phone_grin, panic, hand_off, small_step, confused_shrug, arms_crossed_no, worried_heart, bored_yawn, sofa_scroll, future_tired, sprint_start, think, typing_focused, point_viewer, celebrate, sleeping, bed_phone_night, snack, reading, jogging, meditating, shocked, facepalm, wallet_worry, nervous_wave, writing, coffee, snooze, front, 34
- `prop` ∈ paper_mountain, sofa, smartphone_glow, storm_cloud, hourglass, laptop_file, checkbox_tick, calendar_today, alarm_clock, brain, coffee_mug, dumbbell, coin_stack, notification_bell, target, lightbulb, moon_stars, low_battery
- Chỉ dùng đúng các tên trên (không tiền tố t/a/q/b). Không dùng 1 actor 2 lần liền nhau.
- `text` EN: chỉ ASCII + `. , ! ? ' " > = : -` (font Chalkboard thiếu glyph: **không dùng → … — emoji**). VI: chữ có dấu OK, cùng giới hạn ký hiệu.

## Độ dài và nhịp

- 5–8 line/clip (đừng clip nào cũng 6: trải đều 5, 6, 7, 8). Mỗi `vo` ≤ ~12 từ EN / ~15 tiếng VI. Clip 12–20 s.
- Line 1 = hook dừng lướt trong 1,5 s: cảnh cụ thể, nghịch lý, hoặc câu nói ai cũng từng nói. Không giật tít sai sự thật.
- Giải thích cơ chế bằng lời thường (được nêu tên cơ chế nếu ngắn), rồi 1–2 cách làm cụ thể.

## Giọng 2 mascot (bắt buộc khác nhau)

- **Pen**: trầm, quan sát cảm giác, câu dài hơn chút. Kết thường bằng câu hỏi tự ngẫm, nhưng **≤ 60 % clip Pen kết bằng câu hỏi**; còn lại kết bằng một quan sát nhẹ, callback về hook, hoặc lời tự nhủ.
- **Buff**: câu ngắn, mệnh lệnh, hơi cà khịa ("Sure, buddy." / "Ừ, tin."), ẩn dụ phòng gym (rep, set, warm-up / hiệp, khởi động, tạ). **Không bao giờ kết bằng câu hỏi** — kết bằng thử thách làm ngay, punchline, hoặc hai lựa chọn.
- Không phải clip nào cũng kết bằng `point_viewer`. Dùng `celebrate`, `think`, `small_step`, prop… tuỳ câu.

## Chính xác (quan trọng)

- Chỉ nói điều được nghiên cứu ủng hộ, ở mức "thường / dễ / có xu hướng", không tuyệt đối. **Không số liệu, không %**, không "các nhà khoa học chứng minh".
- Không lời khuyên y tế/lâm sàng, không chẩn đoán, không gắn nhãn ("não lo âu", "bạn bị ADHD"), không ăn kiêng/cân nặng/thuốc, không mẹo thở kiểu trị liệu.
- Không ví dụ nguy hiểm (đang lái xe…).

## VI: viết lại, không dịch

- Cùng cơ chế + cùng bộ hình gần giống, nhưng **đổi ví dụ/hook cho người Việt 18–30** (dùng gợi ý cột "VI angle"; Zalo, "đã xem", sếp, nhóm lớp, Shopee, trà sữa, deadline, kẹt xe, họ hàng hỏi lương…). Ít nhất 2 line khác hẳn ý so với EN.
- Văn nói tự nhiên miền Bắc trung tính, xưng "bạn"/"mình"; Buff có thể "tôi" ít thôi, ưu tiên không xưng.
- **TTS đọc tiếng Việt**: tránh từ tiếng Anh (file, gym, deadline có thể giữ nếu rất phổ biến — hạn chế), tránh viết tắt, số viết bằng chữ ("hai phút", không "2 phút") trong `vo`. `text` được dùng số ("2 PHÚT").
- Tránh câu kiểu dịch ("quá to", "bỏ phiếu cho", "cụ thể thắng hăng hái"). Đọc to trong đầu: người Việt có nói vậy không?
- `title_vi` ≤ 40 ký tự, tự nhiên, không ghép tiếng Anh. `title` VI = `title_vi` bỏ dấu (đ→d), giữ chữ thường/hoa như title_vi.

## Mẫu đã duyệt (batch 1)

Buff EN s12: "One more video, then sleep. Sure, buddy." → "You're spending tomorrow's energy tonight." → "Fun is right here. Tired is far away. Until morning." → "Pick a shutdown time." → "Phone sleeps outside the bedroom. Done." → "Tomorrow you will say thanks. Probably."
Pen VI s21vi: "Họ xem tin nhắn hai tiếng rồi mà chưa trả lời." → "Não bạn viết luôn một bộ phim toà án." → "Thiếu thông tin, não dễ chọn ngay kịch bản tệ nhất." → "Kể thêm ba lý do khác. Bận. Chưa tiện. Ngủ quên." → "Lý do khắc nghiệt chỉ là một phỏng đoán." → "Một cách hiểu dễ chịu hơn là gì?"



OUTPUT ONLY the JSON list of 20 objects (for each topic the EN object, then the VI object), no prose.

## Chủ đề
{"id": "s141", "mascot": "pen", "area": "money and shopping", "title": "Why a Discount Feels Like a Win", "mechanism": "Transaction utility", "hook": "A deal can feel rewarding because of the price comparison itself.", "payoff": "Check whether you would still want the item at its full price.", "vi_angle": "Shopee giảm giá sâu nhưng món đồ đó vốn không nằm trong danh sách cần mua.", "poses": "wallet_worry / coin_stack"}
{"id": "s142", "mascot": "buff", "area": "money and shopping", "title": "Why a Pay Raise Feels Bigger Than It Is", "mechanism": "Money illusion", "hook": "A salary increase feels rich until inflation quietly cancels it.", "payoff": "Subtract price inflation before upgrading your monthly lifestyle.", "vi_angle": "Lương tăng năm trăm nghìn nhưng tiền cơm trưa và tiền trọ đều tăng theo.", "poses": "wallet_worry / coin_stack"}
{"id": "s143", "mascot": "pen", "area": "money and shopping", "title": "Why Small Cash Goes Fast", "mechanism": "Denomination effect", "hook": "Breaking a big bill can make spending feel easier.", "payoff": "Keep cash in larger notes when you want more buying friction.", "vi_angle": "Vừa đổi tờ năm trăm nghìn để trả tiền cà phê là tiêu hết sạch trong ngày.", "poses": "think / coin_stack"}
{"id": "s144", "mascot": "buff", "area": "money and shopping", "title": "Don't Let the Base Price Fool You", "mechanism": "Partitioned pricing", "hook": "A base price can look cheaper when extra charges appear separately.", "payoff": "Compare full checkout totals across sellers.", "vi_angle": "So tổng tiền cuối cùng giữa các shop Shopee, gồm cả phí giao hàng.", "poses": "confused_shrug / smartphone_glow"}
{"id": "s145", "mascot": "pen", "area": "money and shopping", "title": "Why Daily Pennies Add Up", "mechanism": "Pennies-a-day effect", "hook": "Reframing a recurring cost into daily change makes spending feel trivial.", "payoff": "Multiply daily subscription costs by 365 before agreeing to subscribe.", "vi_angle": "Gói cước mười nghìn một ngày nghe rẻ nhưng tính cả năm là hơn ba triệu.", "poses": "writing / coin_stack"}
{"id": "s146", "mascot": "buff", "area": "money and shopping", "title": "Why You Keep a Subscription You Ignore", "mechanism": "Inertia in recurring payments", "hook": "Subscription apps don't charge your card; they charge your forgetting.", "payoff": "Check your subscriptions on a regular calendar date.", "vi_angle": "Rà soát các dịch vụ nghe nhạc và xem phim đang tự gia hạn.", "poses": "think / calendar_today"}
{"id": "s147", "mascot": "pen", "area": "money and shopping", "title": "Why Bundles Can Feel Like Better Value", "mechanism": "Bundling", "hook": "A bundle can hide how much you value each item separately.", "payoff": "Compare the bundle with buying only the items you actually want.", "vi_angle": "Gói trà sữa kèm món thêm nghe hời nhưng bạn chỉ định mua một ly.", "poses": "confused_shrug / coin_stack"}
{"id": "s148", "mascot": "buff", "area": "money and shopping", "title": "Why 199k Feels Way Cheaper Than 200k", "mechanism": "Left-digit effect", "hook": "A one-digit drop on the left changes how a price feels.", "payoff": "Compare the full numbers. Ignore the leftmost digit trick.", "vi_angle": "Món đồ giá một trăm chín mươi chín nghìn không rẻ hơn hai trăm nghìn bao nhiêu đâu.", "poses": "confused_shrug / coin_stack"}
{"id": "s149", "mascot": "pen", "area": "money and shopping", "title": "Why Cash Can Feel More Real", "mechanism": "Payment transparency", "hook": "Spending is easier to notice when each payment is visible.", "payoff": "Use a simple spending log for purchases that tend to blur together.", "vi_angle": "Ghi lại từng lần quẹt ví điện tử mua đồ ăn trong tuần.", "poses": "writing / coin_stack"}
{"id": "s150", "mascot": "buff", "area": "money and shopping", "title": "The Receipt Check", "mechanism": "Post-purchase information search", "hook": "After buying, people often seek information that reassures them.", "payoff": "Set your comparison limit before purchase. Then stop reopening the decision.", "vi_angle": "Đã mua tai nghe rồi thì đừng đọc thêm hàng chục bài so sánh để tự trấn an.", "poses": "phone_grin / smartphone_glow"}
