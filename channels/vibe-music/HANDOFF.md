# HANDOFF — cập nhật trước MỖI commit

> Mục đích: một tài khoản Claude khác `git pull` về là biết dừng ở đâu và làm tiếp ngay.
> Giữ ngắn, chỉ việc CÒN dở; việc xong xoá khỏi đây (lịch sử ở git log + `STATE.md`, bài học ở `docs/megabrain/`).

## Lần cập nhật cuối
08/11/2026 16:30 (+07).

## Bước tiếp theo
1. **Related video cho 14 Short batch 4** (G01-2 → G03-5) — mỗi Short gắn được khi video 1 giờ cùng tên công khai
   (10:00/20:00 mỗi ngày, G01-2 từ 08/11 20:00 → G03-5 15/11 10:00). Short ID + trạng thái: `batch4/schedule_log.md` (đánh ✅ khi xong).
   Studio → `studio.youtube.com/video/<Short ID>/edit` → "Video có liên quan" → chọn video 1 giờ trong lưới → kiểm tên trên nút → Lưu.
2. **Thumbnail 3 mix batch 4** (P01 `5_qpIeMJWyA` 11/11 · P02 `xE7I0aHjhQ8` 13/11 · P03 `UdECRX2snwk` 16/11 18:30) — chưa đặt, đang dùng ảnh YouTube tự chọn.
   File không nằm trong repo vì `.gitignore` chặn `*.jpg` + `out_*/` (quy tắc không commit media). Máy hiện tại cũng **không có** `batch4/out_mix/`
   (cả `batch4/out/`, `images/`, `audio/` đều không có) ⇒ hỏi user còn file ở máy nào; không còn thì phải render lại video 1 giờ
   (`make_mix.py` lấy frame 5 s của video mix) hoặc dựng thumbnail từ ảnh gốc Google Flow. Upload thumbnail: user tự làm (browser pane không có file upload).
3. **Pack 04–05**: chờ user tạo nhạc Flow Music (hết credit 05/11), prompt ở `batch4/music_packs.md`.
4. **100 Short cắt thêm**: user tự đăng theo `shorts/posts_shorts100.md` (tới 29/11), mp4 chỉ ở máy có media.

## Máy khác cần biết
- Media không có trong repo. Render lại cần tải nhạc (Flow Music) + ảnh (Google Flow) — xem `STATE.md` mục Media.
- Setup: `cd shorts && npm ci`; `brew install ffmpeg`; python3 + Pillow + numpy.
- Thông tin tài khoản (Studio, SSH key, link project Flow) chỉ ở `local/PRIVATE.md` — hỏi user nếu cần. Thiếu `local/redact.txt` thì `redact.py sync` không lọc tên ⇒ kiểm `git diff docs/` trước khi commit.
- Studio: chỉ 1 profile Chrome đăng nhập đúng kênh (tên "Browser N" đổi theo lần kết nối) ⇒ `list_connected_browsers`, thử mở Studio kênh, 403 thì đổi browser.
- Không có MEGABRAIN: đọc/sửa `docs/megabrain/…`; sửa gì thì ghi ở mục dưới để máy gốc chép ngược về MEGABRAIN.

## Cần chép ngược về MEGABRAIN
- `docs/megabrain/ai-video/research/youtube-claude-remotion-banana-voice-2026-11.md` — MEGABRAIN máy 08/11 thiếu file nguồn (sync báo "THIẾU nguồn").
