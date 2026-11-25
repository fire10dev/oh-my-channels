# P04 — lịch đăng & metadata (agent soạn 2026-11-23, khuôn 2 tập/tuần: P04 = tập B tuần 30/11) — kịch bản v4 (`scripts/p04-ma-giau-v4.md`) — user duyệt lịch 2026-11-24 15:01, ĐÃ ĐĂNG (xem cuối file)

Chung cho mọi video:
- Không dành cho trẻ em.
- "Nội dung bị thay đổi / tổng hợp" = Có (giọng và hình do AI tạo).
- Danh mục: Giải trí. Ngôn ngữ: Tiếng Việt.
- Nhạc: In The Bushes Creepin (YouTube Audio Library, không cần ghi công). SFX: Sonniss GDC 2026 Game Audio Bundle (miễn phí bản quyền, không cần ghi công).
- Né cờ an toàn trẻ em: tiêu đề/mô tả không dùng "bắt cóc", "mất tích", "mất con". Bin tự trốn ra "căn cứ bí mật", no đủ, không sợ.

Cuối mỗi mô tả:
> Truyện hư cấu lấy cảm hứng từ truyện dân gian về "ma giấu" và tục gõ mâm gọi tên. Nhân vật, căn hộ chung cư và sự việc đều là hư cấu. Giọng đọc và hình ảnh tạo bằng AI.
> 📅 Tập mới tối thứ Hai & thứ Năm · Short mỗi ngày. Đăng ký @MaNoKeChuyen để nghe con ma tiếp theo kể.

| Giờ công chiếu (+07) | Mã | Tiêu đề | Mô tả (dòng đầu) |
|---|---|---|---|
| T5 3/12 18:00 | P04-LONG | Ba Ngày Cả Nhà Không Ngẩng Lên Khỏi Màn Hình | Luật nghề ma giấu: trước sáng ngày thứ tư, nhà phải gõ mâm gọi tên. Ba ngày, không ai gõ. Ghế của Bin có người khác ngồi. |
| T5 3/12 19:00 (sau LONG) | P04-SH1 | Hồ sơ ma giấu 📜 #shorts | Giấu trẻ, che mắt, gõ mâm mới trả. Ngày nay thì phải đợi điện thoại hết pin. |
| T6 4/12 11:30 | P04-SH6 | Bốn người, ba tiếng nhai #shorts | Bữa tối ngày thứ ba. Mẹ khen Bin ngoan. Vậy Bin thật đang ở đâu? |
| T6 4/12 19:00 | P04-SH3 | Bí quyết con ngoan #shorts | Làm xong bài cả tuần, không đòi điện thoại. Bí quyết ở link dưới bình luận. |
| T7 5/12 11:30 | P04-SH2 | Cách sống sót khi bị ma giấu #shorts | Học thằng Bin, mười tuổi: hỏi wifi, đặt trà sữa, sạc ké. |
| T7 5/12 19:00 | P04-SH4 | Mâm đồng phong thủy #shorts | Ngày xưa gõ mâm để gọi người về. Giờ gõ để gọi đơn về. |
| CN 6/12 11:30 | P04-SH5 | Ông bố họp trực tuyến #shorts | Ba ngày họp, trên sơ mi cà vạt, dưới quần đùi. Nói đúng một câu. |
| CN 6/12 19:00 | P04-SH7 | Hai giờ sáng, tầng 27 #shorts | Còn ba tiếng là trời sáng. Ma giấu rút cầu dao, đập cửa thoát hiểm. |

File (trong `channels/ma-no-ke/video/out/`):
- `P04-LONG-mat-con-ba-ngay.mp4` (v4b 24/11: câu kết "Tập sau: bến cát lậu…", chữ "TẬP SAU"; 3:04, −14.2 LUFS, peak −1.8 dBTP)
- `P04-SH1-ho-so-ma-giau.mp4` (31 s)
- `P04-SH2-song-sot-khi-bi-ma-giau.mp4` (28 s)
- `P04-SH3-bi-quyet-con-ngoan.mp4` (24 s)
- `P04-SH4-mam-dong-phong-thuy.mp4` (27 s)
- `P04-SH5-ong-bo-tat-cam.mp4` (25 s)
- `P04-SH6-bon-nguoi-ba-tieng-nhai.mp4` (27 s)
- `P04-SH7-hai-gio-sang-tang-27.mp4` (32 s)

Thumbnail + tiêu đề LONG: 3 cặp cho Test & compare. Stills ở `video/out/p04-thumbs/`, props ở `video/src/data/p04-thumbs.json`:
| Bản | Thumbnail | Tiêu đề |
|---|---|---|
| T1 | `P04-THUMB-T1.jpg`: ma giấu áp mặt vào kính ban công, sững sờ; "AI NGỒI" / dải đỏ "ĐÓ?" | Ba Ngày Cả Nhà Không Ngẩng Lên Khỏi Màn Hình |
| T2 | `P04-THUMB-T2.jpg`: ma giấu nhếch mép, Bin bùn cầm máy tính bảng (B06); "CON AI" / dải đỏ "ĐÂY?" | Đứa Con Ngoan Nhất Nhà Được Nặn Bằng Bùn |
| T3 | `P04-THUMB-T3.jpg`: Bin bùn ở ghế thứ tư của mâm cơm; "4 NGƯỜI" / "3 TIẾNG" / dải đỏ "NHAI?" | Bữa Tối Bốn Người, Ba Tiếng Nhai |

Bảng lịch phía trên dùng tiêu đề T1 làm mặc định. Dựng lại: `npx remotion still src/index.tsx P04-THUMB-T1 out/…png` trong `video/`.

Ảnh bìa short (9:16): `video/out/p04-covers/P04-COVER-SH1..7.jpg`, props ở `video/src/data/p04-covers.json`. Khuôn P03: chữ 2 dòng to (trắng/vàng, viền đen). Nội dung: HỒ SƠ MA GIẤU · BỊ MA GIẤU? · BÍ QUYẾT CON NGOAN · GÕ LÀ CÓ LỘC? · BA NGÀY TẮT CAM · 4 NGƯỜI 3 TIẾNG NHAI · 2 GIỜ SÁNG CẮT ĐIỆN. Đặt bìa qua API `thumbnails.set` sau khi video xử lý xong.

- Cách gắn Video liên quan (làm như P03): đăng LONG ở chế độ không công khai, gắn Video liên quan = P04-LONG cho 7 short trong Studio (API không làm được), rồi chuyển LONG sang riêng tư + hẹn giờ 3/12 18:00. Mô tả mỗi short có dòng "▶ Bản đầy đủ: <link LONG>".
- Kết LONG nhắc tập sau: "Tập sau: bến cát lậu mùa lũ…" (luật 24/11: không nêu thứ) = P05 ma da, LONG T2 7/12 18:00.
- 🔴 Treo: P03-LONG (đã hẹn 30/11) kết bằng "Thứ Hai này: một nhà chung cư mất thằng con…", nhưng P04 ra **Thứ Năm 3/12**. User quyết: ghim bình luận "Tập ma giấu: tối Thứ Năm 3/12" hoặc dựng lại câu cuối P03.
- Không đăng hai video cách nhau vài phút. Bước đăng chỉ làm khi user duyệt rõ. Không tự đăng.

## Đã đăng (2026-11-24 15:30 +07, agent mnk-p04)
- LONG: upload qua API ở chế độ không công khai → gắn Video liên quan cho 7 short → API `videos.update` sang **riêng tư + hẹn giờ 3/12 18:00 (+07)** (publishAt 2026-12-03T11:00Z).
- Test & compare (tiêu đề + thumbnail) T1/T2/T3 đặt trong Studio. Hiện ghi "Không đủ điều kiện" vì video chưa công khai; tự chạy khi lên sóng.
- 7 short: API, riêng tư + hẹn giờ, mô tả có "▶ Bản đầy đủ". Bìa và thumbnail LONG đặt qua `thumbnails.set` (8× HTTP 200). Video liên quan = P04-LONG, kiểm cả 7 trong Studio.

| Mã | Link | Lịch (+07) |
|---|---|---|
| LONG | https://youtu.be/tBpl-r-UhPs | 3/12 18:00 |
| SH1 | https://youtu.be/z_khbaBMji0 | 3/12 19:00 |
| SH6 | https://youtu.be/zAms1DItoRs | 4/12 11:30 |
| SH3 | https://youtu.be/gDzmgQ7lciU | 4/12 19:00 |
| SH2 | https://youtu.be/XlT_Sfu4Ss8 | 5/12 11:30 |
| SH4 | https://youtu.be/PWe4vp5EHNI | 5/12 19:00 |
| SH5 | https://youtu.be/EYTfIfx4l3A | 6/12 11:30 |
| SH7 | https://youtu.be/fgxn5GfnQDE | 6/12 19:00 |
