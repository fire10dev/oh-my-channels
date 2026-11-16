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
{"id": "s221", "mascot": "pen", "area": "decision making", "title": "Why You Keep Seeing Your Choice as Best", "mechanism": "Choice blindness", "hook": "People may not notice when a stated preference is subtly changed.", "payoff": "Write down your priorities before comparing options.", "vi_angle": "Ghi tiêu chí chọn phòng trọ trước khi đọc quảng cáo và xem ảnh lung linh.", "poses": "writing / checkbox_tick"}
{"id": "s222", "mascot": "buff", "area": "decision making", "title": "Don't Let a Long List Decide for You", "mechanism": "Lexicographic decision rule", "hook": "People sometimes choose by the first feature that matters most to them.", "payoff": "Rank your top criteria before comparing the options.", "vi_angle": "Xếp ưu tiên tiền thuê, khoảng cách và giờ giấc trước khi chọn phòng trọ.", "poses": "think / checkbox_tick"}
{"id": "s223", "mascot": "pen", "area": "decision making", "title": "Why You Trust the First Explanation", "mechanism": "Belief perseverance", "hook": "A belief can persist even after its original evidence is challenged.", "payoff": "Ask what evidence would make you revise your view.", "vi_angle": "Khi nghe lời đồn về một công ty, hỏi mình cần bằng chứng nào để đổi nhận định.", "poses": "confused_shrug / brain"}
{"id": "s224", "mascot": "buff", "area": "decision making", "title": "Why Familiar Brands Win", "mechanism": "Recognition heuristic", "hook": "A familiar name can sway a choice when you know little else.", "payoff": "Compare the specifications before you look at the brand.", "vi_angle": "Chọn quán trà sữa có tên quen trên ứng dụng thay vì quán lạ có món ngon hơn.", "poses": "think / coin_stack"}
{"id": "s225", "mascot": "pen", "area": "time perception", "title": "Why Past Events Feel So Recent", "mechanism": "Telescoping effect", "hook": "Recent events feel older and distant events feel closer than they are.", "payoff": "Check calendar timestamps instead of guessing how long ago an event happened.", "vi_angle": "Xem lại dấu thời gian trong nhóm Zalo thay vì đoán bài tập giao từ khi nào.", "poses": "think / calendar_today"}
{"id": "s226", "mascot": "buff", "area": "everyday biases", "title": "Don't Let One Bad Case Scare You", "mechanism": "Base-rate neglect", "hook": "A vivid individual case can overshadow how common an outcome is.", "payoff": "Look for the broader pattern before judging from one story.", "vi_angle": "Một bài bóc phốt được chia sẻ rầm rộ không đủ để kết luận mọi công ty trong ngành đều như vậy.", "poses": "think / brain"}
{"id": "s227", "mascot": "pen", "area": "decision making", "title": "Why Reversible Choices Feel Easier", "mechanism": "Reversibility effect", "hook": "People often feel less pressure when a choice can be changed later.", "payoff": "Separate decisions you can revisit from those that are hard to undo.", "vi_angle": "Thử lịch học mới trong một tuần trước khi đổi hẳn lịch làm thêm.", "poses": "think / calendar_today"}
{"id": "s228", "mascot": "buff", "area": "everyday biases", "title": "Don't Fixate on One Detail", "mechanism": "Focalism", "hook": "We obsess over one detail while forgetting everything else happening alongside it.", "payoff": "List three mundane daily events that will happen regardless of this decision's outcome.", "vi_angle": "Đừng nghĩ trượt môn là ngày tận thế, ngày mai mặt trời vẫn mọc bình thường.", "poses": "confused_shrug / smartphone_glow"}
{"id": "s229", "mascot": "pen", "area": "decision making", "title": "A Decision Looks Clearer From Outside", "mechanism": "Observer-perspective bias", "hook": "Choices can seem clearer when imagined from someone else's perspective.", "payoff": "Ask what advice you would give a friend in the same situation.", "vi_angle": "Nếu bạn thân đang phân vân giữa hai công việc, bạn sẽ khuyên họ xét điều gì?", "poses": "think / brain"}
{"id": "s230", "mascot": "buff", "area": "time perception", "title": "Don't Let a Deadline Choose for You", "mechanism": "Deadline effect", "hook": "A deadline can change how much effort people put into a task.", "payoff": "Set an earlier checkpoint for decisions that need comparison.", "vi_angle": "Đặt hạn riêng để so các phòng trọ trước ngày phải cọc.", "poses": "writing / calendar_today"}
