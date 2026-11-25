# Brief 17 — Đưa "Ma Nó Kể" ra quốc tế (Anh / Pháp / Tây Ban Nha…) để kiếm tiền từ view nước ngoài

## Nhiệm vụ user giao (2026-11-23 23:15 +07)
"Dịch toàn bộ nội dung đã làm sang tiếng Anh/Pháp/Tây Ban Nha… mục tiêu kiếm tiền YouTube view ngoại. Chọn hướng làm tốt nhất. Có thể chỉnh sửa nội dung nếu cần. Chuẩn bị mọi thứ để tạo channel mới và đăng." Agent làm xuyên đêm, không hỏi lại. Sáng mai user chỉ việc tạo kênh + bấm đăng.

## Kênh gốc "Ma Nó Kể" (@MaNoKeChuyen, tiếng Việt, mở 19/11/2026)
- Hoạt hình 2D (ảnh tĩnh AI + pan/zoom/shake, cutout nhân vật, chữ pop, phụ đề in sẵn, SFX). Kinh dị TRÀO PHÚNG: "rợn ở ý, không ở hình". Người xem ngồi phe con ma dân gian Việt, nhìn người sống làm trò (livestream bán hàng, sửa giấy tờ né bảo hiểm, bán nhà cho chuỗi khách sạn, cả nhà dán mắt màn hình).
- Host cố định "Ma Nó": ma nhà tròn trắng, nón mê, điếu cày, mỉa mai, mở 10–15 s và chốt cuối. Mỗi tập một "ma khách" kể.
- Luật: không jump scare, không máu, không ai chết trên màn hình, không hại trẻ em, không hướng dẫn bùa. Kết bằng câu đùa.
- 1 dự án = 1 LONG (~3:00–3:35, 16:9) + 7 SHORT (25–35 s, 9:16). Đã dựng xong 4 dự án = 32 video:
  - P01 Ma lai (đầu bay đêm; bà mẹ bị con trai livestream "bữa cơm với mẹ già"; đầu trốn trong nồi cơm điện) — đã đăng
  - P02 Thần trùng (giám đốc ký "như người nhà" lên giấy tử của công nhân → âm phủ điểm danh nhầm ông) — đã đăng LONG + 3 short
  - P03 Ma xó (đứa trẻ giữ của ba đời; ông chủ bán nhà phố cổ; hũ chôn chỉ có giấy nợ) — dựng xong, hẹn 30/11
  - P04 Ma giấu (giấu thằng Bin ba ngày, cả nhà không ai để ý; nặn Bin bằng bùn ngoan hơn) — dựng xong, hẹn 3/12
  - P05 Ma da (kịch bản v3), P06–P29 có outline.
- Số liệu thật: P01-LONG 33 view, P02-LONG 56 view sau 3–4 ngày. Kênh Việt chưa có sub đáng kể. Thị trường Việt: CPM thấp.

## Năng lực sản xuất (có thật, đừng đề xuất cái không có)
- Kịch bản dạng bảng câu thoại → mỗi câu một file TTS → Remotion dựng từ timeline JSON (chữ pop, phụ đề, bình luận livestream giả đều là text trong JSON ⇒ đổi ngôn ngữ = đổi text, ảnh dùng lại 100%; ảnh gần như không có chữ).
- TTS local miễn phí: **Kokoro v1.0** — tiếng Anh nhiều giọng (Mỹ: 11 nữ, 9 nam; Anh: 4 nữ, 4 nam, có thể trộn giọng), tiếng Tây Ban Nha 1 nữ 2 nam, tiếng Pháp **1 giọng nữ** duy nhất, ngoài ra Ý, Bồ Đào Nha (Brazil), Hindi, Nhật, Trung. Đổi pitch/tốc độ/echo bằng ffmpeg được. Không có ElevenLabs trả phí.
- Không có người bản xứ duyệt. Agent dịch (LLM). Ảnh vẽ thêm được (Muse) nhưng tốn.
- Một người vận hành, gói AI có hạn mức; mọi thứ phải chạy được bằng script.

## Câu hỏi phải trả lời (yêu cầu đầu ra)
1. **Cấu trúc kênh**: (a) 1 kênh tiếng Anh mới, ngôn ngữ khác thêm bằng **audio đa ngôn ngữ** (multi-language audio track) + tiêu đề/mô tả dịch; (b) mỗi ngôn ngữ một kênh riêng; (c) thêm audio tiếng Anh vào chính kênh Việt; (d) khác. Chọn MỘT, lý do có số/nguồn (CPM theo nước, cách YouTube phân phối audio đa ngôn ngữ, chữ in sẵn trên hình thì sao).
2. **Thứ tự ngôn ngữ** và cái nào bỏ. Tiếng Pháp chỉ có 1 giọng TTS — làm hay không? Tây Ban Nha (Mỹ Latinh vs Tây Ban Nha CPM khác nhau)? Có ngôn ngữ nào đáng hơn (Bồ Đào Nha Brazil, Hindi…)?
3. **Dịch thẳng hay "chuyển thể"**: cái gì giữ (bối cảnh Việt, tên ma Việt như điểm lạ) và cái gì phải đổi (chơi chữ, "chốt đơn", "mâm đồng", "trùng tang", xưng hô tao/mày, câu kêu đăng ký). Có cần giải thích luật ma trong 1 câu cho người ngoại không? Ví dụ chuyển thể 3 câu khó.
4. **Nhận diện kênh**: tên kênh tiếng Anh (5 ứng viên, handle, rủi ro trùng), tên host Ma Nó bằng tiếng Anh, công thức tiêu đề + thumbnail cho thị trường Mỹ/Anh, tag/hashtag.
5. **Định dạng để kiếm tiền**: LONG 3 phút có đủ không (mid-roll cần ≥ 8 phút)? Có nên ghép 4 tập thành 1 video tổng hợp 12–15 phút? Short có đáng không (RPM short thấp, nhưng kéo sub)? Điều kiện YPP (1.000 sub + 4.000 giờ xem / 10 triệu view short 90 ngày) — đường nào nhanh hơn với kho 32 video?
6. **Rủi ro chính sách**: "inauthentic / reused content", nhãn nội dung tổng hợp AI, kênh mới đăng bản dịch của kênh Việt cùng chủ — có bị coi là nội dung lặp không? Cách tránh. Nội dung "ma" + "trẻ em" (P04) với khán giả Mỹ.
7. **Kế hoạch ra mắt**: lịch đăng 2 tuần đầu với kho có sẵn (thứ tự tập nào trước, giờ đăng theo giờ Mỹ đổi sang +07), dấu hiệu nào sau 14 ngày thì bỏ/tiếp/mở thêm ngôn ngữ.
8. **Danh sách việc agent làm đêm nay** (cụ thể, có thứ tự, ước thời gian) và việc user làm sáng mai.

Trả lời ngắn, thẳng, có số. Không xã giao. Chỗ nào là đoán thì ghi "đoán".
