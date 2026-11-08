# HANDOFF — cập nhật trước MỖI commit

> Mục đích: một tài khoản Claude khác `git pull` về là biết dừng ở đâu và làm tiếp ngay.
> Giữ ngắn; chi tiết trạng thái ở `STATE.md`, bài học ở `docs/megabrain/`.

## Lần cập nhật cuối
08/11/2026 15:40 (+07) — máy gốc.

## Phiên vừa rồi làm gì
- Dọn ổ máy gốc: xoá ~35 GB render đã đăng + wav trung gian; còn nguyên liệu (mp3/m4a, ảnh, clip nền, scenes jpg, thumbnail, 100 Short chưa đăng).
- Chuyển dự án vào `~/Projects/FIRE10.DEV/REPO/MusicMaker` (chỗ cũ là symlink cho hub tiktok-affiliate-auto).
- Thêm `docs/megabrain/` (ánh xạ MEGABRAIN, đã lọc) + `tools/redact.py` (sync/check) + `local/` gitignored cho thông tin riêng.

## Đang dở / chờ
- Batch 4 G01–G03: 15 video 1 giờ + 15 Short + 3 mix đã lên lịch trên Studio (08/11 → 16/11). ID: `batch4/schedule_log.md`.
- User tự đăng 100 Short cắt thêm theo `shorts/posts_shorts100.md` (tới 29/11) — file mp4 chỉ ở máy gốc.

## Bước tiếp theo (làm ngay được)
1. Gắn "Video có liên quan" cho 15 Short batch 4 (video 1 giờ công khai dần từ 08/11 10:00): Studio → Short → Chi tiết →
   Video có liên quan → video 1 giờ cùng id (map trong `batch4/schedule_log.md`).
2. Thêm tags cho mix P01 (đang 0 tag; P02/P03 đủ 10) — lấy tags giống P02.
3. Thumbnail 3 mix batch 4 — user tự tải `batch4/out_mix/P0x … thumbnail.jpg` (chỉ máy gốc).
4. Pack 04–05: chờ user tạo nhạc Flow Music (hết credit 05/11), prompt ở `batch4/music_packs.md`; ảnh pack 04–05 đã có.

## Máy khác cần biết
- Media không có trong repo. Render lại cần tải nhạc (Flow Music) + ảnh (Google Flow) — xem `STATE.md` mục Media.
- Setup: `cd shorts && npm ci`; `brew install ffmpeg`; python3 + Pillow + numpy.
- Thông tin tài khoản (Studio, SSH key, link project Flow) chỉ ở `local/PRIVATE.md` máy gốc — hỏi user nếu cần.
- Không có MEGABRAIN: đọc/sửa `docs/megabrain/…`; sửa gì thì ghi ở mục dưới để máy gốc chép ngược về MEGABRAIN.

## Cần chép ngược về MEGABRAIN
Không có.
