# HANDOFF — cập nhật trước MỖI commit

> Mục đích: một tài khoản Claude khác `git pull` về là biết dừng ở đâu và làm tiếp ngay.
> Giữ ngắn, chỉ việc CÒN dở; việc xong xoá khỏi đây (lịch sử ở git log + `STATE.md`, bài học ở `docs/megabrain/`).

## Lần cập nhật cuối
11/11/2026 10:45 (+07) — máy gốc.

## Bước tiếp theo
1. **Related video cho 9 Short batch 4 còn lại** (G02-3 → G03-5; G01-1 → G02-2 xong 11/11) — gắn được khi video 1 giờ cùng tên công khai
   (G02-3 từ 11/11 20:00 … G03-5 từ 15/11 10:00). Short ID + trạng thái: `batch4/schedule_log.md` (đánh ✅ khi xong).
   Nhanh nhất: Claude in Chrome, mỗi Short 1 `navigate` + 1 JS (nhãn "Video có liên quan" → `closest('ytcp-dropdown-trigger').click()` → click phần tử lá
   có text bắt đầu bằng tên video 1 giờ → kiểm `innerText` → `#save.click()`), chi tiết ở `docs/megabrain/…/youtube-loop-music-pipeline-2026-10.md` mục 11/11.
2. **Pack 04–05 — đăng Short + mix** (render xong 11/11, chỉ ở máy gốc): 10 Short `batch4/out_shorts/G04-1…G05-5.mp4`, 2 mix
   `batch4/out_mix/P04 Retro Arcade 1 Hour Mix.mp4` / `P05 Server Room …` (+ thumbnail). Nội dung + lịch: `batch4/youtube_posts_batch4_shorts_mix_P04-05.md`
   (Short 15/11 22:00 → 20/11 15:00; mix 18/11 + 21/11 18:30, playlist "1 Hour Mixes").
   - G04-1 đã upload (Claude in Chrome `file_upload`, Short 7 MB < 10 MB) + điền title/mô tả/không cho trẻ em/AI=Có/lịch 15/11 22:00 nhưng **chưa bấm Lên lịch** (đang nháp riêng tư) — cần user đồng ý cho agent đăng/hẹn lịch.
   - Mix ~1 GB > giới hạn 10 MB của `file_upload` ⇒ user kéo file vào Studio, agent điền.
   - Related video cho 10 Short này chỉ gắn được sau khi video 1 giờ G04/G05 công khai (15/11 20:00 → 20/11 10:00).
   🟠 G04-1 104 s, G04-2 120 s, G04-4 83 s vòng lặp ngắn hơn pack 1–3 (157–182 s).
3. **100 Short cắt thêm**: user tự đăng theo `shorts/posts_shorts100.md` (tới 29/11), mp4 chỉ ở máy gốc (`shorts/out/shorts100`).
4. Tuỳ chọn: YouTube Data API để upload/lên lịch/thumbnail không qua UI (không có trường related video) — cần user tạo OAuth client Desktop.

## Máy khác cần biết
- Thumbnail: Claude in Chrome `file_upload` vào `input#file-loader` ở `studio.youtube.com/video/<ID>/edit` → Lưu (browser pane không upload file được).
- Media không có trong repo. Render lại cần tải nhạc (Flow Music) + ảnh (Google Flow) — xem `STATE.md` mục Media.
- Setup: `cd shorts && npm ci`; `brew install ffmpeg`; python3 + Pillow + numpy (Homebrew python chặn `pip install` ⇒ dùng venv).
- Render lại pack đã dọn: `render_1h.sh <ids>` trước (Short/mix cần mp4 1 giờ); `render_1h.sh` ghi đè thumbnail ⇒ sao lưu `out/*thumbnail.jpg` trước.
- Thông tin tài khoản (Studio, SSH key, link project Flow) chỉ ở `local/PRIVATE.md` — hỏi user nếu cần. Thiếu `local/redact.txt` thì `redact.py sync` không lọc tên ⇒ kiểm `git diff docs/` trước khi commit.
- Studio: chỉ 1 profile Chrome đăng nhập đúng kênh (tên "Browser N" đổi theo lần kết nối) ⇒ `list_connected_browsers`, thử mở Studio kênh, 403 thì đổi browser.
- Không có MEGABRAIN: đọc/sửa `docs/megabrain/…`; sửa gì thì ghi ở mục dưới để máy gốc chép ngược về MEGABRAIN.

## Cần chép ngược về MEGABRAIN
Không có (08/11 16:50: mục phiên 16:00 của acc khác đã chép vào MEGABRAIN máy gốc; file remotion-banana có sẵn ở máy gốc).
