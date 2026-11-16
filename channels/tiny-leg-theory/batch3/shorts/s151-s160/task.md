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
{"id": "s151", "mascot": "pen", "area": "communication", "title": "Why a Text Can Sound Colder Than Meant", "mechanism": "Negativity inferences from email", "hook": "Short messages leave room for readers to infer tone.", "payoff": "Add one warm, specific phrase when the message could sound abrupt.", "vi_angle": "Tin nhắn Zalo \"ừ\" trong nhóm bạn dễ bị hiểu là đang giận.", "poses": "phone_grin / smartphone_glow"}
{"id": "s152", "mascot": "buff", "area": "friendships and dating", "title": "Ask Before You Give Advice", "mechanism": "Advice-giving mismatch", "hook": "Advice can miss when someone mainly wants to feel heard.", "payoff": "Ask them straight: action plan or vent session. Then follow their lead.", "vi_angle": "Nghe bạn thân kể chuyện vừa bị người yêu bặt vô âm tín, hỏi trước xem họ cần giải pháp hay chỉ muốn trút bầu tâm sự.", "poses": "hand_off / smartphone_glow"}
{"id": "s153", "mascot": "pen", "area": "friendships and dating", "title": "The Small Signal That Says \"I'm Here\"", "mechanism": "Responsiveness", "hook": "Feeling understood often depends on how someone responds to your concern.", "payoff": "Reflect one detail you heard before offering your take.", "vi_angle": "Nghe bạn kể chuyện bị sếp góp ý, nhắc lại điều khiến bạn ấy buồn nhất.", "poses": "worried_heart / sofa"}
{"id": "s154", "mascot": "buff", "area": "friendships and dating", "title": "Don't Guess What They Want", "mechanism": "Pluralistic ignorance", "hook": "People can privately disagree while assuming everyone else approves.", "payoff": "State your preference plainly. Invite others to do the same.", "vi_angle": "Cả nhóm chọn quán ăn theo số đông dù ai cũng ngại nói muốn đổi chỗ.", "poses": "point_viewer / smartphone_glow"}
{"id": "s155", "mascot": "pen", "area": "friendships and dating", "title": "Why Shared Laughter Brings People Closer", "mechanism": "Shared laughter", "hook": "Laughing together can make an ordinary moment feel more connected.", "payoff": "Make room for playful moments in ordinary time together.", "vi_angle": "Cùng bạn thân cười lại ảnh chế cũ trong nhóm Zalo.", "poses": "celebrate / smartphone_glow"}
{"id": "s156", "mascot": "buff", "area": "friendships and dating", "title": "Praise the Effort, Not the Brain", "mechanism": "Process praise", "hook": "Praising intelligence breeds fragility; praising effort builds persistence.", "payoff": "Compliment the specific drafting strategy, not how clever they are.", "vi_angle": "Khen bạn cùng nhóm vì cách tổng hợp tài liệu rõ ràng, đừng nói \"bạn thông minh quá\".", "poses": "point_viewer / checkbox_tick"}
{"id": "s157", "mascot": "pen", "area": "friendships and dating", "title": "Why a Thoughtful Gift Feels Personal", "mechanism": "Gift-giving signaling", "hook": "A gift can signal how well someone knows your preferences.", "payoff": "Choose something tied to a detail they have shared with you.", "vi_angle": "Tặng bạn món ăn vặt họ hay nhắc trong giờ học.", "poses": "hand_off / lightbulb"}
{"id": "s158", "mascot": "buff", "area": "friendships and dating", "title": "Keep the Give-and-Take Fair", "mechanism": "Equity theory", "hook": "A favor can feel different when one person always gives more.", "payoff": "Name the imbalance calmly and agree on a fairer split.", "vi_angle": "Nói chuyện với bạn cùng phòng nếu một người luôn mua đồ dùng chung.", "poses": "hand_off / coin_stack"}
{"id": "s159", "mascot": "pen", "area": "friendships and dating", "title": "Why Physical Nearness Builds Bonds", "mechanism": "Propinquity effect", "hook": "Physical proximity predicts friendship far better than shared personality traits.", "payoff": "Sit in the same row every week to let familiarity do its work.", "vi_angle": "Ngồi cùng một bàn trong phòng tự học giúp dễ làm quen với bạn cùng khóa.", "poses": "nervous_wave / lightbulb"}
{"id": "s160", "mascot": "buff", "area": "communication", "title": "Let Them Finish the Story", "mechanism": "Conversational turn-taking", "hook": "Conversation flows better when people can complete their turns.", "payoff": "Wait for a natural pause before jumping in with your story.", "vi_angle": "Trong buổi cà phê, đừng cắt lời bạn đang kể chuyện đi phỏng vấn.", "poses": "hand_off / coffee_mug"}
