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
{"id": "s181", "mascot": "pen", "area": "sleep and energy", "title": "Why the Afternoon Slump Feels Predictable", "mechanism": "Circadian rhythm", "hook": "That two o'clock brain fog is biology, not your lack of grit.", "payoff": "Schedule demanding work for the hours when you usually feel more alert.", "vi_angle": "Để việc cần tập trung vào buổi sáng nếu chiều thường uể oải sau giờ ăn.", "poses": "bored_yawn / low_battery"}
{"id": "s182", "mascot": "buff", "area": "sleep and energy", "title": "Your Brain Needs a Transition", "mechanism": "Arousal carryover", "hook": "A stimulating activity can leave you keyed up after it ends.", "payoff": "Switch off the screen. Give yourself a quiet transition before bed.", "vi_angle": "Sau một ván đấu căng thẳng cùng bạn bè, tắt máy tính và ngồi yên năm phút trước khi lên giường ngủ.", "poses": "sleeping / moon_stars"}
{"id": "s183", "mascot": "pen", "area": "sleep and energy", "title": "Why Tired Choices Feel Harder", "mechanism": "Sleep pressure", "hook": "The longer you stay awake, the stronger sleep pressure can become.", "payoff": "Make routine choices earlier when you know you will be tired later.", "vi_angle": "Soạn đồ đi làm từ tối để sáng khỏi quyết định vội khi còn ngái ngủ.", "poses": "future_tired / alarm_clock"}
{"id": "s184", "mascot": "buff", "area": "sleep and energy", "title": "Use a Reliable Wake-Up Anchor", "mechanism": "Sleep-wake regularity", "hook": "A steady wake time can help anchor your daily rhythm.", "payoff": "Pick a wake time. Keep it reasonably consistent all week.", "vi_angle": "Giữ giờ dậy tương tự cả ngày đi học lẫn ngày cuối tuần.", "poses": "snooze / alarm_clock"}
{"id": "s185", "mascot": "pen", "area": "sleep and energy", "title": "Why a Short Pause Can Restore Focus", "mechanism": "Microbreaks", "hook": "Brief pauses can help interrupt a long stretch of repetitive work.", "payoff": "Take a quick movement or eye break between work blocks.", "vi_angle": "Đứng dậy đi lấy nước sau một lượt làm bài thuyết trình dài.", "poses": "small_step / low_battery"}
{"id": "s186", "mascot": "buff", "area": "sleep and energy", "title": "Tackle the Afternoon Dip", "mechanism": "Post-lunch dip", "hook": "Your mid-afternoon energy drop is built-in biology, not heavy food alone.", "payoff": "Schedule repetitive admin tasks during the mid-afternoon dip and hard thinking for the morning.", "vi_angle": "Dành đầu giờ chiều cho việc phân loại thư thay vì suy nghĩ chiến lược phức tạp.", "poses": "think / calendar_today"}
{"id": "s187", "mascot": "pen", "area": "sleep and energy", "title": "Why Your Room Changes Your Pace", "mechanism": "Environmental affordances", "hook": "A room's layout can make some actions easier to start than others.", "payoff": "Place the book or tool you need where you plan to use it.", "vi_angle": "Để giáo trình trên bàn học thay vì trong ba lô sau giờ học.", "poses": "reading / laptop_file"}
{"id": "s188", "mascot": "buff", "area": "sleep and energy", "title": "Move Your Body to Clear Your Head", "mechanism": "Transient hypofrontality", "hook": "Light rhythmic movement quiets your inner critic and lets insights surface.", "payoff": "Take a brisk ten-minute walk when logical thinking hits a dead end.", "vi_angle": "Đi bộ nhanh mười phút quanh khu trọ khi giải bài tập lớn bị bế tắc.", "poses": "small_step / low_battery"}
{"id": "s189", "mascot": "pen", "area": "creativity", "title": "Why a Walk Can Clear Your Head", "mechanism": "Embodied cognition", "hook": "Physical movement can shape how we think and experience a task.", "payoff": "Take an easy walk while turning over a low-stakes idea.", "vi_angle": "Đi bộ quanh khu trọ khi nghĩ cách mở đầu bài thuyết trình.", "poses": "jogging / lightbulb"}
{"id": "s190", "mascot": "buff", "area": "sleep and energy", "title": "Give Your Day a Real Ending", "mechanism": "Psychological detachment from work", "hook": "Mentally switching off work can be harder when tasks follow you home.", "payoff": "Write tomorrow's first task. Then close your work tools.", "vi_angle": "Ghi việc cần làm ngày mai rồi đóng máy tính sau khi tan ca.", "poses": "writing / laptop_file"}
