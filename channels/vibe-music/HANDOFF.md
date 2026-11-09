# HANDOFF — cập nhật trước MỖI commit

> Mục đích: một tài khoản Claude khác `git pull` về là biết dừng ở đâu và làm tiếp ngay.
> Giữ ngắn, chỉ việc CÒN dở; việc xong xoá khỏi đây (lịch sử ở git log + `STATE.md`, bài học ở `docs/megabrain/`).

## Lần cập nhật cuối
09/11/2026 10:45 (+07) — máy gốc.

## Bước tiếp theo
1. **Related video cho 14 Short batch 4** (G01-2 → G03-5) — mỗi Short gắn được khi video 1 giờ cùng tên công khai
   (10:00/20:00 mỗi ngày, G01-2 từ 08/11 20:00 → G03-5 15/11 10:00). Short ID + trạng thái: `batch4/schedule_log.md` (đánh ✅ khi xong).
   Studio → `studio.youtube.com/video/<Short ID>/edit` → "Video có liên quan" → chọn video 1 giờ trong lưới → kiểm tên trên nút → Lưu.
2. **Thumbnail 3 mix batch 4** (P01 `5_qpIeMJWyA` 11/11 · P02 `xE7I0aHjhQ8` 13/11 · P03 `UdECRX2snwk` 16/11 18:30) — chưa đặt.
   File có ở **máy gốc**: `batch4/out_mix/P0x <pack> 1 Hour Mix thumbnail.jpg` (không có trong repo vì `.gitignore` chặn media).
   Upload thumbnail: user tự làm (browser pane không có file upload).
3. **Pack 04–05** (Retro Arcade, Server Room): 10 video 1 giờ **đã lên lịch 09/11** (15/11 20:00 → 20/11 10:00, ID ở `batch4/schedule_log.md`,
   nội dung `batch4/youtube_posts_batch4_G04-1_G05-5.md`). Còn: **thumbnail 10 video** (file `batch4/out/<id> <title> thumbnail.jpg`
   ở máy gốc; user tự tải lên — browser pane không upload file) → `make_shorts.py` + `render_shorts.sh` + `make_mix.py 4` / `5` → `make_posts_extra.py`.
   🟠 G04-1 104 s, G04-2 120 s, G04-4 83 s vòng lặp ngắn hơn pack 1–3 (157–182 s).
4. **100 Short cắt thêm**: user tự đăng theo `shorts/posts_shorts100.md` (tới 29/11), mp4 chỉ ở máy gốc (`shorts/out/shorts100`).

## Máy khác cần biết
- Media không có trong repo. Render lại cần tải nhạc (Flow Music) + ảnh (Google Flow) — xem `STATE.md` mục Media.
- Setup: `cd shorts && npm ci`; `brew install ffmpeg`; python3 + Pillow + numpy.
- Thông tin tài khoản (Studio, SSH key, link project Flow) chỉ ở `local/PRIVATE.md` — hỏi user nếu cần. Thiếu `local/redact.txt` thì `redact.py sync` không lọc tên ⇒ kiểm `git diff docs/` trước khi commit.
- Studio: chỉ 1 profile Chrome đăng nhập đúng kênh (tên "Browser N" đổi theo lần kết nối) ⇒ `list_connected_browsers`, thử mở Studio kênh, 403 thì đổi browser.
- Không có MEGABRAIN: đọc/sửa `docs/megabrain/…`; sửa gì thì ghi ở mục dưới để máy gốc chép ngược về MEGABRAIN.

## Cần chép ngược về MEGABRAIN
Không có (08/11 16:50: mục phiên 16:00 của acc khác đã chép vào MEGABRAIN máy gốc; file remotion-banana có sẵn ở máy gốc).
