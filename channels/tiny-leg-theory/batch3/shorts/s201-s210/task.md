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
{"id": "s201", "mascot": "pen", "area": "emotions", "title": "Why Feelings Can Point to Concerns", "mechanism": "Somatic marker hypothesis", "hook": "A sudden bodily tension signals hesitation before logic catches up.", "payoff": "Let your elevated pulse settle before deciding whether to sign.", "vi_angle": "Thấy thắt ruột khi ký hợp đồng thuê trọ, đứng lên đi một vòng trước khi đặt bút.", "poses": "worried_heart / brain"}
{"id": "s202", "mascot": "buff", "area": "emotions", "title": "Why the Afterglow Can Fade", "mechanism": "Opponent-process theory", "hook": "A strong emotional high can be followed by a contrasting feeling.", "payoff": "After a big night out, plan a quiet next morning. Don't chase the buzz.", "vi_angle": "Sau buổi hòa nhạc hào hứng, để sáng hôm sau thong thả thay vì tìm cuộc vui kế tiếp.", "poses": "think / hourglass"}
{"id": "s203", "mascot": "pen", "area": "emotions", "title": "Why a Feeling Can Peak and Pass", "mechanism": "Emotional adaptation", "hook": "Emotional intensity can change as a moment unfolds.", "payoff": "Wait briefly before treating a strong feeling as a permanent verdict.", "vi_angle": "Đợi qua cơn bực sau khi đọc tin nhắn nhóm rồi mới trả lời.", "poses": "think / hourglass"}
{"id": "s204", "mascot": "buff", "area": "emotions", "title": "Borrow Calm From a Slow Breath", "mechanism": "Physiological feedback", "hook": "Body signals can influence how an emotion feels.", "payoff": "Drop your shoulders. Take one slow exhale before replying.", "vi_angle": "Thở ra chậm một nhịp trước khi nhắn lại trong nhóm lớp đang tranh cãi.", "poses": "meditating / storm_cloud"}
{"id": "s205", "mascot": "pen", "area": "emotions", "title": "Match Your Mood Before Shifting It", "mechanism": "Iso-principle", "hook": "Matching your current mood first makes shifting it far easier.", "payoff": "Listen to music matching your current low energy before playing upbeat tracks.", "vi_angle": "Bật bài nhạc êm dịu lúc đang buồn rồi mới chuyển sang nhạc sôi động.", "poses": "sofa_scroll / lightbulb"}
{"id": "s206", "mascot": "buff", "area": "emotions", "title": "Name the Exact Feeling", "mechanism": "Emotional granularity", "hook": "Vague distress stalls your brain longer than a named feeling.", "payoff": "Replace 'I feel bad' with 'I feel micromanaged.' Name the exact friction.", "vi_angle": "Phân biệt rõ mình đang bực vì sếp giao việc gấp hay chỉ đang mệt và đói sau giờ làm.", "poses": "think / brain"}
{"id": "s207", "mascot": "pen", "area": "emotions", "title": "Why Gratitude Makes Details Stand Out", "mechanism": "Gratitude recall", "hook": "Looking for something appreciated can change what you notice in a day.", "payoff": "Write down one specific helpful moment before the day ends.", "vi_angle": "Ghi lại việc bạn cùng phòng để phần cơm sau ca làm muộn.", "poses": "writing / lightbulb"}
{"id": "s208", "mascot": "buff", "area": "emotions", "title": "Don't Let Anger Pick Your Words", "mechanism": "Anger-driven risk seeking", "hook": "Anger can make risky responses feel more appealing.", "payoff": "Draft the reply. Wait a moment, then reread before sending.", "vi_angle": "Soạn tin nhắn đáp trả trong đoạn chat công việc rồi đọc lại sau vài phút.", "poses": "facepalm / smartphone_glow"}
{"id": "s209", "mascot": "pen", "area": "motivation", "title": "Why a Small Win Can Lift Your Mood", "mechanism": "Positive affect broadening", "hook": "A positive mood can make it easier to notice more possibilities.", "payoff": "Mark one small success before moving to the next challenge.", "vi_angle": "Sau khi nộp xong bài nhóm, ghi nhận phần việc mình đã hoàn thành.", "poses": "celebrate / checkbox_tick"}
{"id": "s210", "mascot": "buff", "area": "emotions", "title": "Read Your Body Before You React", "mechanism": "Interoceptive accuracy", "hook": "People who read their body signals handle emotions more deliberately.", "payoff": "Check your pulse before confronting anyone. If your chest feels tight, walk away immediately.", "vi_angle": "Trước khi gọi điện về nhà lúc đang căng, đặt tay lên ngực xem nhịp tim có đang nhanh không.", "poses": "think / brain"}
