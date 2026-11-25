# P03 — lịch đăng & metadata (user chốt 2026-11-22 21:53 +07: khuôn 2 tập/tuần, P03 = tập A tuần 30/11)

Chung cho mọi video:
- Không dành cho trẻ em.
- "Nội dung bị thay đổi / tổng hợp" = Có (giọng và hình do AI tạo).
- Danh mục: Giải trí. Ngôn ngữ: Tiếng Việt.
- Nhạc: In The Bushes Creepin (YouTube Audio Library, không cần ghi công). SFX: Sonniss GDC 2026 Game Audio Bundle (miễn phí bản quyền, không cần ghi công).

Cuối mỗi mô tả:
> Truyện hư cấu lấy cảm hứng từ truyện dân gian về "ma xó giữ của". Nhân vật, căn nhà phố cổ và sự việc đều là hư cấu. Giọng đọc và hình ảnh tạo bằng AI.
> 📅 Tập mới tối thứ Hai & thứ Năm · Short mỗi ngày. Đăng ký @MaNoKeChuyen để nghe con ma tiếp theo kể.

| Giờ công chiếu (+07) | Mã | Tiêu đề | Mô tả (dòng đầu) |
|---|---|---|---|
| T2 30/11 11:30 (trailer mồi, trước LONG) | P03-SH6 | Ai đang đếm trong kho? #shorts | Ba đời không ai được mở. Đêm nay trong kho có tiếng đếm. |
| T2 30/11 18:00 | P03-LONG | Cái Hũ Ba Đời Không Ai Được Mở | Ông chủ bán căn nhà phố cổ 60 tỷ. Trong kho có một đứa trẻ giữ của ba đời, và nó chỉ đếm. |
| T2 30/11 19:00 (sau LONG) | P03-SH1 | Hồ sơ ma xó 📜 #shorts | Ăn gì, kiêng gì, giữ cái gì. Và đêm nay nó đếm đến 413. |
| T3 1/12 11:30 | P03-SH3 | Hối lộ ma xó bằng oản #shorts | Một đĩa oản đổi lấy cái hũ? Ma xó nhà này không nhận. |
| T3 1/12 19:00 | P03-SH2 | Cách sống sót khi nhà có ma xó #shorts | Ba điều phải nhớ. Điều thứ ba: bán nhà là của ra khỏi nhà. |
| T4 2/12 11:30 | P03-SH4 | Bán vé xem bàn thờ #shorts | Ông chủ nhà tính thu tiền khách xem bàn thờ. Ma xó thì phải giữ. |
| T4 2/12 19:00 | P03-SH5 | Nhà sâu 10 mét, kéo thước không chạm tường #shorts | Thợ đo đo cả đêm, để lại review 1 sao. Ma xó: "Con chỉ đếm." |
| T5 3/12 11:30 (trailer kết, trước LONG P04) | P03-SH7 | Mở hũ ba đời trước nửa cái phố #shorts | Cái hũ mở ra. Chủ nợ đến. Bên mua hủy giao dịch. Còn phụ lục thì sao? |

File (trong `channels/ma-no-ke/video/out/`):
- `P03-LONG-hu-ba-doi.mp4` (3:06)
- `P03-SH1-ho-so-ma-xo.mp4` (35 s)
- `P03-SH2-song-sot-khi-nha-co-ma-xo.mp4` (30 s)
- `P03-SH3-hoi-lo-ma-xo.mp4` (26 s)
- `P03-SH4-ban-ve-xem-ban-tho.mp4` (33 s)
- `P03-SH5-tho-do-dem-ca-dem.mp4` (30 s)
- `P03-SH6-tieng-dem-trong-kho.mp4` (31 s)
- `P03-SH7-mo-hu-giay-no.mp4` (36 s)

Thumbnail + tiêu đề LONG — 3 cặp cho Test & compare (làm lại theo brainstorm 14, `debate/14-p03-thumb-quality/synthesis.md`, 2026-11-22). Stills ở `video/out/p03-thumbs/` (bản cũ: `v1/`), props `video/src/data/p03-thumbs.json`:
| Bản | Thumbnail | Tiêu đề |
|---|---|---|
| T1 | `P03-THUMB-T1.jpg`: cận mặt ma xó nhếch mép ôm hũ, "CẤM" / dải đỏ "MỞ" | Cái Hũ Ba Đời Không Ai Được Mở |
| T2 | `P03-THUMB-T2.jpg`: Khải toát mồ hôi (trái) vs ma xó ôm hũ (phải), dải "ĐỪNG MỞ!" | Bán Nhà 60 Tỷ, Ông Chủ Phải Nhận Thêm Món Này |
| T3 | `P03-THUMB-T3.jpg`: miệng hũ đầy cuộn giấy, dấu đỏ "NỢ" + "GIẤY NỢ", Khải hoảng góc phải, dải "413 TỜ NỢ?" | Ông Chủ Nhà Đào Trúng Gia Tài Gì Dưới Bếp? |

Bảng lịch phía trên dùng tiêu đề T1 làm mặc định. Dựng lại: `npx remotion still src/index.tsx P03-THUMB-T1 out/…jpg` trong `video/`.

Ảnh bìa short (9:16): `video/out/p03-thumbs/P03-COVER-SH1..7.jpg`, props `video/src/data/p03-covers.json`. Khuôn mới: chữ 2 dòng to (trắng/vàng, viền đen) ở vùng trống, bỏ tag và dải đỏ. Chữ: HỒ SƠ MA XÓ · NHÀ CÓ MA XÓ? · ĂN OẢN KHÔNG? (SH3, crop Khải chìa oản) · BÁN VÉ XEM? · 10 MÉT…? · AI ĐANG ĐẾM? · HŨ CỦA AI? Chỉ tải lên được trong YouTube Studio trên máy tính, với tài khoản đã xác minh (YouTube đang mở dần). App điện thoại chỉ cho chọn khung hình; nếu Studio chưa có nút tải bìa, chọn khung ở giây 0.6.

- Video liên quan chỉ chọn được video **công khai hoặc không công khai** (help 14075157, kiểm 2026-11-22). Video đã lên lịch là riêng tư nên không chọn được.
- **User chọn 2026-11-22 22:21: đăng LONG ở chế độ không công khai** (không lên lịch). Gắn ngay Video liên quan = P03-LONG cho 7 short đã lên lịch, và chèn "▶ Bản đầy đủ: <LONG>" vào mô tả. **T2 30/11 18:00: tự tay chuyển LONG sang Công khai.**
- Khuôn 2 tập/tuần (`debate/15-tan-suat/synthesis.md`): short 11:30 + 19:00, LONG 18:00. P03 = tập A (T2–T5), P04 = tập B (LONG T5 3/12 18:00, short đến CN 6/12). Cả 7 short gắn Video liên quan ngay khi upload (LONG không công khai).
- Không đăng hai video cách nhau vài phút (P01-SH5–SH7 đăng dồn chỉ được 7–10 view).
- Khoảng trống 27–29/11: P02 hết short khoảng 26–27/11, đến 30/11 không có video mới.
- SH7 dừng ở phụ lục, phần kết nằm trong LONG.
- Bước đăng giao riêng sau khi user duyệt lịch này. Không tự đăng.

## Đã đăng (2026-11-22 22:35 +07)
- LONG: user tự upload ở chế độ **không công khai**. T2 30/11 18:00 user tự chuyển sang Công khai.
- 7 short upload qua API `oh-my-channels-yt/shared/youtube/yt.mjs` (token `ma-no-ke`), riêng tư + hẹn giờ; mô tả đã có "▶ Bản đầy đủ".
- SH6: bản user tự upload đã bị xóa; upload lại qua API 22/11 23:0x, đã hẹn giờ.
- Video liên quan: API không hỗ trợ. Kiểm trong Studio 23/11 19:3x: cả 7 short đã gắn = "Cái Hũ Ba Đời Không Ai Được Mở".
- 23/11: LONG đã chuyển sang **riêng tư + hẹn giờ** (bị đặt nhầm 29/11 18:00). 23/11 19:3x dời trong Studio về **30/11 18:00 (+07)**, API xác nhận publishAt 2026-11-30T11:00Z. Không cần tự tay công khai nữa.
| Mã | Link | Lịch (+07) |
|---|---|---|
| LONG | https://youtu.be/9ZSQoKwcRXQ | 30/11 18:00 (hẹn giờ) |
| SH6 | https://youtu.be/13aXB0ZFb9o | 30/11 11:30 |
| SH1 | https://youtu.be/ROQJoPMh9IY | 30/11 19:00 |
| SH3 | https://youtu.be/Q5zNQYtfb-I | 1/12 11:30 |
| SH2 | https://youtu.be/S7mTSRTSHM8 | 1/12 19:00 |
| SH4 | https://youtu.be/JBJjmyVRuy8 | 2/12 11:30 |
| SH5 | https://youtu.be/Md4rrBhWDv8 | 2/12 19:00 |
| SH7 | https://youtu.be/gGr5nODBmx8 | 3/12 11:30 |
- Bài đăng Community: `post/bai-dang-ma-xo.md`, **gắn thẻ video LONG** giống P01/P02. Đã lên lịch **30/11 20:00 (+07)**; YouTube xác nhận "Đã lên lịch đăng vào 20:00 30 thg 11, 2026". Lần đầu (24/11 15:5x) dùng ảnh vuông nền mờ `post/01-hu-ba-doi-1x1.jpg`; user chê xấu nên 24/11 15:5x thay bằng bài có thẻ video và xóa bài ảnh. LONG đang hẹn giờ vẫn gắn được: dán URL vào ô "Thêm một video YouTube hiện có".
- Bìa 7 short (`p03-thumbs/P03-COVER-SHn.jpg`) đã set qua API `thumbnails.set` (22/11 23:02, HTTP 200). Ghi chú cũ "chỉ Studio desktop" là sai.
