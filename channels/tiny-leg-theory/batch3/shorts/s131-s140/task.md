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
{"id": "s131", "mascot": "pen", "area": "work and study", "title": "Why a Blank Page Feels Hard", "mechanism": "Cognitive load theory", "hook": "A blank document gives your working memory too many choices.", "payoff": "Write a rough heading first to give your thoughts a starting point.", "vi_angle": "Mở tệp bài nhóm, ghi trước tiêu đề thay vì nhìn trang trắng.", "poses": "writing / laptop_file"}
{"id": "s132", "mascot": "buff", "area": "work and study", "title": "Make the Task Feel Smaller", "mechanism": "Chunking", "hook": "A long assignment gets easier to handle when its parts are clear.", "payoff": "Split it into named parts. Start with one.", "vi_angle": "Chia bài thuyết trình nhóm thành mở bài, nội dung và kết luận.", "poses": "small_step / checkbox_tick"}
{"id": "s133", "mascot": "pen", "area": "work and study", "title": "Why Your Notes Need a Map", "mechanism": "Hierarchical organization", "hook": "Related ideas are easier to find when notes show their structure.", "payoff": "Group details under a few clear headings.", "vi_angle": "Gom ghi chú ôn thi thành từng chương thay vì một trang dài.", "poses": "reading / paper_mountain"}
{"id": "s134", "mascot": "buff", "area": "work and study", "title": "Stop Cramming Similar Ideas Together", "mechanism": "Proactive interference", "hook": "Old material can get in the way when new material looks similar.", "payoff": "Close the book. Explain how the two ideas differ.", "vi_angle": "So sánh hai khái niệm gần giống trong đề cương môn học.", "poses": "confused_shrug / brain"}
{"id": "s135", "mascot": "pen", "area": "creativity", "title": "The Benefit of a Short Break", "mechanism": "Incubation effect", "hook": "Stepping away can help when you are stuck on a problem.", "payoff": "Take a short break, then return and look again.", "vi_angle": "Rời bàn học vài phút sau khi bí bài tập nhóm.", "poses": "small_step / hourglass"}
{"id": "s136", "mascot": "buff", "area": "work and study", "title": "When Attention Fades", "mechanism": "Vigilance decrement", "hook": "Your focus doesn't snap suddenly; it decays on a predictable timer.", "payoff": "Break a long review into shorter rounds. Reset between them.", "vi_angle": "Chia buổi rà soát bài thuyết trình trước giờ họp thành vài lượt ngắn.", "poses": "bored_yawn / laptop_file"}
{"id": "s137", "mascot": "pen", "area": "work and study", "title": "When an Old Solution Blocks an Easier Path", "mechanism": "Einstellung effect", "hook": "A familiar solution blinds your brain to an easier path.", "payoff": "Brainstorm one alternative method before executing your default habit.", "vi_angle": "Tìm cách xử lý bảng tính tự động thay vì tiếp tục nhập tay như cũ.", "poses": "think / checkbox_tick"}
{"id": "s138", "mascot": "buff", "area": "motivation", "title": "Why a Hard Question Can Help", "mechanism": "Desirable difficulties", "hook": "A little challenge can make learning more durable.", "payoff": "Close the book. Write the core formula from memory before checking.", "vi_angle": "Tự trả lời câu hỏi ôn thi rồi mới mở tài liệu lớp.", "poses": "think / brain"}
{"id": "s139", "mascot": "pen", "area": "work and study", "title": "Learn the Example, Then the Rule", "mechanism": "Worked-example effect", "hook": "A solved example can make a new procedure easier to grasp.", "payoff": "Study one example, then solve a similar problem without looking.", "vi_angle": "Xem một bài mẫu môn kế toán rồi tự làm bài tương tự.", "poses": "reading / paper_mountain"}
{"id": "s140", "mascot": "buff", "area": "work and study", "title": "Too Many Options Slow You Down", "mechanism": "Hick's Law", "hook": "More choices mean longer reaction time for each decision.", "payoff": "Cut your task list to three items. Pick the first one. Go.", "vi_angle": "Rút danh sách việc cần làm xuống ba mục rồi bắt đầu ngay.", "poses": "typing_focused / checkbox_tick"}
