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
{"id": "s191", "mascot": "pen", "area": "memory", "title": "Why You Forget What You Came to Get", "mechanism": "Doorway effect", "hook": "Crossing into a new room can make an intention harder to hold.", "payoff": "Say the item or task aloud before you leave the room.", "vi_angle": "Trước khi ra khỏi phòng trọ, nhẩm \"ví, chìa khóa, thẻ xe\".", "poses": "confused_shrug / brain"}
{"id": "s192", "mascot": "buff", "area": "memory", "title": "Pictures Can Make Facts Stick", "mechanism": "Picture superiority effect", "hook": "A clear image can be easier to remember than a word alone.", "payoff": "Turn a key fact into a quick sketch. Label it.", "vi_angle": "Vẽ sơ đồ nhỏ để nhớ các bước đăng ký môn học.", "poses": "think / lightbulb"}
{"id": "s193", "mascot": "pen", "area": "memory", "title": "Why Lists Have Strong Starts and Ends", "mechanism": "Serial position effect", "hook": "List beginnings and endings often stick better than the middle.", "payoff": "Put your most important point near the start or end of a short list.", "vi_angle": "Đặt hai việc quan trọng nhất ở đầu và cuối danh sách việc cần làm.", "poses": "writing / checkbox_tick"}
{"id": "s194", "mascot": "buff", "area": "memory", "title": "Why an Old Idea Feels Brand New", "mechanism": "Cryptomnesia", "hook": "Your brain can replay a forgotten idea and call it original.", "payoff": "Search your reference folder before claiming you invented a fresh angle.", "vi_angle": "Tưởng mình vừa nghĩ ra ý tưởng làm bài thuyết trình độc lạ, hóa ra từng lướt thấy trên mạng tuần trước.", "poses": "confused_shrug / brain"}
{"id": "s195", "mascot": "pen", "area": "memory", "title": "Why Your Memory Crops the Scene", "mechanism": "Boundary extension", "hook": "Your visual memory can invent background details you never saw.", "payoff": "Check the raw screenshot before arguing over visual details.", "vi_angle": "Đinh ninh ảnh thông báo học bổng có ghi hạn nộp, mở lại mới thấy không có.", "poses": "confused_shrug / brain"}
{"id": "s196", "mascot": "buff", "area": "memory", "title": "Why a Partial List Can Block Recall", "mechanism": "Part-list cueing effect", "hook": "Seeing part of a list can block recall of the rest.", "payoff": "Write everything you remember on a blank sheet before checking a list.", "vi_angle": "Tự viết những từ vựng tiếng Anh nhớ được rồi mới mở danh sách đối chiếu.", "poses": "confused_shrug / brain"}
{"id": "s197", "mascot": "pen", "area": "memory", "title": "The Tip-of-the-Tongue Moment", "mechanism": "Tip-of-the-tongue phenomenon", "hook": "Sometimes you know a word but can't retrieve it right away.", "payoff": "Pause and return to the word later instead of forcing guesses.", "vi_angle": "Quên tên quán ăn quen ở Sài Gòn thì chuyển chủ đề rồi nhớ lại sau.", "poses": "think / brain"}
{"id": "s198", "mascot": "buff", "area": "memory", "title": "Remember the Source, Not Just the Claim", "mechanism": "Source monitoring", "hook": "People can remember a claim but forget where they heard it.", "payoff": "Save the source link beside useful information. Keep them together.", "vi_angle": "Lưu đường dẫn gốc cạnh thông tin tuyển dụng thay vì chỉ chụp màn hình.", "poses": "writing / smartphone_glow"}
{"id": "s199", "mascot": "pen", "area": "memory", "title": "Why Details Blur Together", "mechanism": "Memory conformity", "hook": "Hearing someone else's version can influence what you remember.", "payoff": "Record your recollection in a quick voice memo before checking the chat.", "vi_angle": "Ghi âm nhanh điều mình nhớ sau buổi họp nhóm trước khi đọc lại đoạn chat.", "poses": "writing / brain"}
{"id": "s200", "mascot": "buff", "area": "memory", "title": "Remember the Three Things You Need", "mechanism": "Method of loci", "hook": "A familiar route can help you remember a short list.", "payoff": "Place each item mentally at a spot by your front door.", "vi_angle": "Gắn ba món cần mang theo vào những chỗ quen thuộc gần cửa phòng trọ.", "poses": "think / checkbox_tick"}
