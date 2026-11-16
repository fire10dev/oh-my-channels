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
{"id": "s161", "mascot": "pen", "area": "family", "title": "Why Family Advice Can Feel Like Pressure", "mechanism": "Psychological reactance", "hook": "A strong push can make people want to reclaim their choice.", "payoff": "Acknowledge their concern with a polite nod, then redirect to a lighter topic.", "vi_angle": "Khi họ hàng hỏi lương thưởng, cười xòa cảm ơn rồi chuyển chủ đề sang hỏi thăm sức khỏe gia đình.", "poses": "arms_crossed_no / storm_cloud"}
{"id": "s162", "mascot": "buff", "area": "family", "title": "Stop the Family Argument From Spreading", "mechanism": "Emotional contagion", "hook": "Tension in one person can quickly shift the mood of a room.", "payoff": "Lower your voice. Slow your pace before responding.", "vi_angle": "Bữa cơm gia đình căng lên vì chuyện chọn ngành, nói chậm lại trước khi đáp.", "poses": "worried_heart / storm_cloud"}
{"id": "s163", "mascot": "pen", "area": "family", "title": "Why Old Family Roles Return Fast", "mechanism": "Role expectations", "hook": "Family members may slip into familiar roles when they reunite.", "payoff": "Name the present situation instead of replying from an old script.", "vi_angle": "Về quê, bạn thường bị xem là \"đứa nhỏ\" dù đã đi làm.", "poses": "think / calendar_today"}
{"id": "s164", "mascot": "buff", "area": "family", "title": "Say the Hard News Directly", "mechanism": "MUM effect", "hook": "People delay sharing bad news because delivering pain feels risky.", "payoff": "Deliver the unvarnished update immediately; stalling only multiplies the eventual fallout.", "vi_angle": "Báo ngay cho gia đình khi bị nợ môn thay vì giấu đến kỳ sau.", "poses": "point_viewer / calendar_today"}
{"id": "s165", "mascot": "pen", "area": "family", "title": "Why Questions Can Feel Like Criticism", "mechanism": "Face threat", "hook": "A question can feel like a challenge to someone's social dignity.", "payoff": "Raise sensitive topics privately and describe your concern without an audience.", "vi_angle": "Hỏi riêng em họ về việc học thay vì hỏi trước mặt cả họ hàng.", "poses": "worried_heart / storm_cloud"}
{"id": "s166", "mascot": "buff", "area": "family", "title": "Put a Face on Your Family Request", "mechanism": "Identifiable victim effect", "hook": "A specific person's story moves people more than abstract numbers.", "payoff": "Show exactly who needs what. Drop the vague group appeal.", "vi_angle": "Nói rõ em đang cần tiền sách tháng này thay vì than chung chung \"sinh viên khổ lắm\".", "poses": "point_viewer / calendar_today"}
{"id": "s167", "mascot": "pen", "area": "family", "title": "Why Family Stories Shape Your Choices", "mechanism": "Narrative identity", "hook": "The stories we tell about ourselves can guide future choices.", "payoff": "Extract the core value your parents care about instead of fighting over the exact job title.", "vi_angle": "Bố mẹ muốn bạn làm ngân hàng vì cần sự ổn định, hãy giải thích công việc hiện tại cũng mang lại sự an toàn tương tự.", "poses": "think / brain"}
{"id": "s168", "mascot": "buff", "area": "family", "title": "Don't Assume Silence Means Agreement", "mechanism": "Acquiescence", "hook": "People may agree aloud simply to avoid an awkward moment.", "payoff": "Ask what concerns remain. Make disagreement easy to say.", "vi_angle": "Hỏi em trong nhà có thật sự muốn học ngành gia đình gợi ý không.", "poses": "confused_shrug / storm_cloud"}
{"id": "s169", "mascot": "pen", "area": "family", "title": "Why Family Expectations Feel So Heavy", "mechanism": "Intergenerational transmission of values", "hook": "Family values can pass through everyday expectations and stories.", "payoff": "Ask which part of a family expectation matters most to you.", "vi_angle": "Trân trọng mong muốn ổn định của bố mẹ nhưng tự chọn công việc phù hợp ở thành phố.", "poses": "think / brain"}
{"id": "s170", "mascot": "buff", "area": "family", "title": "Make a Family Plan Everyone Remembers", "mechanism": "Shared mental model", "hook": "A shared plan helps people coordinate without repeated guessing.", "payoff": "Repeat who is doing what and when before ending the conversation.", "vi_angle": "Chốt rõ ai đặt xe, ai đón bà và mấy giờ cả nhà đi đám cưới.", "poses": "writing / calendar_today"}
