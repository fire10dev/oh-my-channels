# Brief: nâng kịch bản v2 → v3 (kênh "Ma Nó Kể")

Bạn là biên kịch chính của kênh. Viết lại kịch bản v2 đính kèm thành **v3 sẵn sàng dựng**, theo đúng khuôn và tiêu chí dưới đây. Mẫu chuẩn đã dựng xong và được user khen: P04 v4 (đính kèm). Trả về **duy nhất nội dung file markdown v3**, không lời dẫn, không giải thích ngoài file.

## Luật kênh (cứng)
- Kinh dị TRÀO PHÚNG: "rợn ở ý, không ở hình". Người xem ngồi phe con ma nhìn người sống làm trò. ~50% trào phúng · ~40% rờn rợn · ~10% MỘT khoảnh khắc rợn thật (ở cú lật hoặc ngay trước).
- Cấm: jump scare, máu, mặt thối rữa, hình ám, hướng dẫn bùa/nghi lễ. Không ai chết trên màn hình. **Trẻ em không bị hại, không sợ hãi, không bị bắt giữ.** Tiêu đề/mô tả tránh "bắt cóc/mất tích/tự tử".
- Host "Ma Nó" (MN, giọng Thiện Minh): mở 10–15 s ("Lại mò vào à?…") và kết (câu đùa + teaser tập sau + kêu đăng ký). **Không để Ma Nó báo trước cú lật** ("nhớ cái X", "nhớ câu đó").

## Tiêu chí KỊCH TÍNH (bài học P04, bắt buộc)
1. **Câu hỏi kịch tính trung tâm** nêu được trong 1 câu.
2. **Đồng hồ + cái giá**: một hạn chót cụ thể (giờ/ngày/sự kiện) và cái giá rõ nếu trượt — cái giá đặt lên con ma hoặc kẻ xấu, không đe dọa trẻ em.
3. **3 nấc leo thang chủ động**: nhân vật chính (thường là con ma) thử → thất bại → thử lớn hơn → thất bại → nước liều.
4. **Cú lật do nhân vật CHỌN và TRẢ GIÁ**, không do may rủi. Con ma không tự phá luật của nó.
5. **Cold open không lộ đáp án**: chỉ treo câu hỏi bằng âm thanh/chi tiết.
6. Điểm thấp nhất ngay trước cú lật.
7. Kết theo bible: câu đùa nhả căng, châm biếm giữ nguyên (người xấu không bỗng thức tỉnh sến sẩm).

## Khuôn v3
- LONG: **560–600 chữ lời thoại** (≈3:00). Bảng theo cảnh như P04 v4: `| Mốc | Ảnh | Lời | Chữ / SFX |`.
- **Mỗi câu thoại một dòng riêng trong cột Lời, đúng dạng `**MÃ**: lời`** (MÃ = mã giọng in hoa trong bảng nhân vật). Nhiều câu trong một ô thì nối bằng `<br>`.
- Câu không lời ghi `*(không lời, N s)*`.
- Ảnh: chỉ dùng mã ảnh MỚI đã liệt kê trong mục "Hình" của v2 (tối đa 12, có thể bỏ bớt, KHÔNG thêm mã mới) + ảnh tái dùng B0x / ep01 S01,S06,S26,S33,S34 (Ma Nó) như v2.
- SHORTS: **5 TRỌN + 2 TRAILER**, 30–40 s mỗi short, 9:16. TRỌN = hook → leo thang → PUNCH → lặng 0.8 s → MN 1 câu chỉ link ("…Tao kể ở bản đầy đủ, link dưới."). TRAILER = treo câu hỏi, cắt trước đáp án. Pop tên con ma ở lần đầu nó xuất hiện. Mỗi short ghi dạng danh sách `- **MÃ**: lời (ẢNH) · pop "…"`. Câu trùng nguyên văn LONG được dùng lại; câu mới in nguyên dạng.
- Kết LONG: teaser tập sau (đính kèm thông tin tập sau) + kêu đăng ký kiểu Ma Nó. Teaser KHÔNG nêu thứ/ngày ("Thứ Hai", "Thứ Năm này", "tối mai"…) vì lịch hay dời: viết "**MN**: Tập sau: <nội dung>", chữ trên hình "TẬP SAU" (không "· THỨ …").

## Bắt buộc ở đầu file v3
1. Tiêu đề `# Dự án N — <ma> "<tên>" (v3, <ngày>)` và 3–6 gạch đầu dòng "v3 đổi gì so với v2".
2. Mục `## Xương sống kịch tính`: câu hỏi trung tâm · đồng hồ/cái giá · 3 nấc · điểm thấp · cú lật (ai chọn gì, trả giá gì) · khoảnh khắc rợn · câu kết.
3. Bảng `## Nhân vật và giọng`: `| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |`. Preset chỉ chọn trong: Thiện Minh (chỉ MN), Adam bựa, Trúc Ly, Mai Anh, Hải Đăng, Thiền Tâm Đức, Ngọc Huyền, Minh Đức, Phạm Tuyên, Xuân Vĩnh, Thanh Bình, Ngọc Linh, Đoan Trang, Quỳnh Anh, Quốc Tuấn (đều giọng Bắc). Mỗi nhân vật một preset khác nhau. fx ví dụ `atempo=1.05`, `anull`, `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:40:0.2`.
4. Ngay sau bảng đó, một khối JSON đúng dạng (để máy đọc):
```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "XX": {"preset": "…", "fx": "…"}}
```
5. Mục `## LONG`, mục `## SHORTS` (### SH1 … ### SH7, ghi TRỌN/TRAILER), mục `## Hình` (giữ danh sách ảnh của v2, đánh dấu ảnh nào v3 dùng), mục `## Lịch` (giờ đăng LONG + 7 short theo thông tin đính kèm).
