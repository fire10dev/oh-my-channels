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
{"id": "s171", "mascot": "pen", "area": "social media", "title": "Why Comments Can Become an Echo", "mechanism": "Selective exposure", "hook": "People often choose information that fits what they already believe.", "payoff": "Follow at least one thoughtful source that challenges your usual view.", "vi_angle": "Theo dõi thêm một trang phân tích khác góc nhìn trước khi chia sẻ bài nóng.", "poses": "think / smartphone_glow"}
{"id": "s172", "mascot": "buff", "area": "social media", "title": "Why Comments Turn Toxic Fast", "mechanism": "Online disinhibition effect", "hook": "Typing behind a screen strips away natural social brakes.", "payoff": "Type only what you would say looking directly into their eyes.", "vi_angle": "Không bình luận thô lỗ dưới bài đăng tranh cãi của trường dù dùng tài khoản ẩn danh.", "poses": "confused_shrug / smartphone_glow"}
{"id": "s173", "mascot": "pen", "area": "social media", "title": "Why We Think Others Are Biased", "mechanism": "Naive realism", "hook": "We assume we see reality objectively and that dissenting people are biased.", "payoff": "Search for another viewpoint instead of treating your feed as a survey.", "vi_angle": "Tìm nguồn khác ngoài trang gợi ý khi thấy mọi người trên mạng cùng bàn một chuyện.", "poses": "think / smartphone_glow"}
{"id": "s174", "mascot": "buff", "area": "social media", "title": "Keep Your Social Circles Separate", "mechanism": "Audience segregation", "hook": "Mixing different social circles online makes every message risky.", "payoff": "Set custom privacy lists before venting about work online.", "vi_angle": "Tách nhóm Zalo gia đình và đồng nghiệp để tránh gửi nhầm nội dung nhạy cảm.", "poses": "phone_grin / smartphone_glow"}
{"id": "s175", "mascot": "pen", "area": "social media", "title": "Why Your Own Post Feels So Important", "mechanism": "Egocentric bias", "hook": "We give our own posts far more weight than others do.", "payoff": "Draft the post, take a short pause, then decide whether it needs sharing.", "vi_angle": "Viết bài đăng lúc bực trong nhóm lớp rồi đọc lại trước khi đăng.", "poses": "think / smartphone_glow"}
{"id": "s176", "mascot": "buff", "area": "social media", "title": "Don't Confuse Viral With Common", "mechanism": "False consensus effect", "hook": "People can overestimate how many others share their opinion.", "payoff": "Check what evidence represents the wider group before generalizing.", "vi_angle": "Một bài phàn nàn được chia sẻ rầm rộ chưa chắc đại diện cho cả trường.", "poses": "confused_shrug / notification_bell"}
{"id": "s177", "mascot": "pen", "area": "social media", "title": "Why Both Sides Think the News Is Biased", "mechanism": "Hostile media effect", "hook": "People on opposing sides can see the same coverage as unfair.", "payoff": "Ask whether you are judging the facts or defending your side.", "vi_angle": "Hai phe tranh cãi dưới bài bóc phốt đều cho rằng người viết thiên vị phe kia.", "poses": "think / smartphone_glow"}
{"id": "s178", "mascot": "buff", "area": "social media", "title": "Don't Judge a Creator by One Clip", "mechanism": "Halo effect", "hook": "One positive impression can spill over into judgments about other traits.", "payoff": "Check each claim against its evidence. Charm is not proof.", "vi_angle": "Kiểm tra nguồn tin tài chính trên mạng video ngắn thay vì tin chỉ vì người nói có duyên.", "poses": "think / notification_bell"}
{"id": "s179", "mascot": "pen", "area": "social media", "title": "Why Repeated Claims Feel True", "mechanism": "Illusory truth effect", "hook": "Repeated exposure can make a statement feel more credible.", "payoff": "Verify a claim before sharing it, especially when it feels familiar.", "vi_angle": "Kiểm tra thông tin học bổng trước khi chuyển tiếp vì đã thấy nó nhiều lần trên mạng xã hội.", "poses": "reading / smartphone_glow"}
{"id": "s180", "mascot": "buff", "area": "social media", "title": "What a Comment Section Leaves Out", "mechanism": "Selection bias", "hook": "The people who comment may differ from those who simply read.", "payoff": "Don't treat a loud comment section as a representative poll.", "vi_angle": "Bình luận dưới bài đăng tuyển dụng không nhất thiết phản ánh trải nghiệm của mọi nhân viên.", "poses": "think / notification_bell"}
