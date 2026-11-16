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
{"id": "s211", "mascot": "pen", "area": "self-image", "title": "Why Your Ideal Self Feels Far Away", "mechanism": "Self-discrepancy", "hook": "Who you are can clash with who you think you should be.", "payoff": "Turn one ideal into a specific action that fits this week.", "vi_angle": "Biến mục tiêu \"giỏi tiếng Anh\" thành một buổi luyện nói sau giờ làm.", "poses": "think / target"}
{"id": "s212", "mascot": "buff", "area": "self-image", "title": "Don't Let One Mistake Define You", "mechanism": "Global self-evaluation", "hook": "One poor result can feel like a verdict on your whole ability.", "payoff": "Name the specific mistake. Change one thing next time.", "vi_angle": "Trượt một vòng phỏng vấn không có nghĩa là bạn dở mọi kỹ năng.", "poses": "facepalm / paper_mountain"}
{"id": "s213", "mascot": "pen", "area": "self-image", "title": "Why You Defend a Choice You Just Made", "mechanism": "Choice-supportive bias", "hook": "After choosing, people tend to remember their chosen option favorably.", "payoff": "Keep the original reasons for a big decision in writing.", "vi_angle": "Ghi lý do chọn công ty trước ngày nhận việc để sau này nhớ bối cảnh ban đầu.", "poses": "writing / checkbox_tick"}
{"id": "s214", "mascot": "buff", "area": "self-image", "title": "Build Confidence From Evidence", "mechanism": "Self-perception theory", "hook": "People can infer what they value by noticing their own actions.", "payoff": "Log actions that reflect the person you want to be. Keep it short.", "vi_angle": "Ghi lại những lần chủ động phát biểu trong buổi họp nhóm.", "poses": "writing / target"}
{"id": "s215", "mascot": "pen", "area": "self-image", "title": "Why Your Profile Feels Like You", "mechanism": "Self-presentation", "hook": "People shape what they show to influence how others see them.", "payoff": "Choose a profile detail that reflects what you actually want to share.", "vi_angle": "Chọn ảnh đại diện Zalo phù hợp với mục đích dùng cho công việc.", "poses": "think / smartphone_glow"}
{"id": "s216", "mascot": "buff", "area": "self-image", "title": "Compare Your Work to Your Past Work", "mechanism": "Temporal comparison", "hook": "Comparing different stages of progress can distort your self-judgment.", "payoff": "Compare today's work with your own earlier work.", "vi_angle": "So hồ sơ bài làm hiện tại với bản tháng trước thay vì với người làm nghề lâu năm.", "poses": "small_step / target"}
{"id": "s217", "mascot": "pen", "area": "self-image", "title": "When Someone Slaps a Label on You", "mechanism": "Labeling effect", "hook": "Calling a teammate lazy trains them to act out that script.", "payoff": "Address the missing file, never their personality.", "vi_angle": "Khi chia việc làm bài tập nhóm, đừng bảo bạn 'lười' mà hãy chốt rõ hạn nộp của từng phần việc.", "poses": "think / checkbox_tick"}
{"id": "s218", "mascot": "buff", "area": "self-image", "title": "Don't Borrow Someone Else's Standards", "mechanism": "Self-evaluation maintenance", "hook": "Another person's success can feel personal when it touches your own goals.", "payoff": "Notice what you can learn from them. Then return to your priorities.", "vi_angle": "Bạn cùng lớp được thực tập trước, xem họ làm gì hữu ích rồi tiếp tục kế hoạch riêng.", "poses": "arms_crossed_no / target"}
{"id": "s219", "mascot": "pen", "area": "self-image", "title": "Why You Notice Your Own Awkward Moment", "mechanism": "Illusion of transparency", "hook": "People often overestimate how clearly others can read their inner state.", "payoff": "Check what others actually noticed before assuming they saw your nerves.", "vi_angle": "Sau khi nói vấp trong buổi thuyết trình, hỏi bạn cùng nhóm thay vì tự đoán ai cũng để ý.", "poses": "nervous_wave / brain"}
{"id": "s220", "mascot": "buff", "area": "self-image", "title": "Give Credit to the Process", "mechanism": "Self-serving bias", "hook": "People often explain wins and setbacks in ways that protect self-image.", "payoff": "Review your contribution and the circumstances after a result.", "vi_angle": "Sau khi nhóm được điểm cao, nhìn lại phần chuẩn bị của mình lẫn cách chia đề tài.", "poses": "think / checkbox_tick"}
