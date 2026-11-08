# STATE — VIBE MUSIC AI MAKER (cập nhật 07/11/2026 16:20 +07)

Kênh YouTube nhạc AI không lời (studio: <tài khoản Studio — local/PRIVATE.md> · channel `UC5yczuAXQkFdHjdkTXHWfcw`).
Vị trí máy gốc: `~/Projects/FIRE10.DEV/REPO/MusicMaker` (từ 08/11/2026; `FIRE10.DEV/MusicMaker` là symlink cũ cho hub tiktok-affiliate-auto).
Mọi ID video / lịch nằm trong các file `schedule_log.md` và `*posts*` — đó là nguồn sự thật, không phải chat.

## Đang ở đâu

| Lô | Nội dung | Trạng thái |
|---|---|---|
| batch 1 (gốc repo) | 5 video loop đầu | đã đăng |
| batch 2 `A/B/C` | 15 video 1 giờ + 15 Short + 3 mix | đã đăng (`batch2/schedule_log.md`) |
| batch 3 `D/E/F` | 15 video 1 giờ + 15 Short + 3 mix | đã đăng (`batch3/schedule_log.md`, `shorts/shorts_schedule.md`) |
| 100 Short cắt thêm | từ 30 bài A–F | render xong, **user tự đăng** theo `shorts/posts_shorts100.md` (05/11 → 29/11) |
| batch 4 `G01–G20` | 100 bài Synthwave Night Coding, 20 pack × 5 | xem dưới |

### Batch 4 chi tiết
- Nhạc (Flow Music): **pack 01–03 xong** (15 bài, `[x]` trong `batch4/music_packs.md`); pack 04–20 chưa làm (hết credit 05/11).
- Ảnh (Google Flow): pack 01–05 có ảnh (25); pack 06–20 chưa.
- Đã lên lịch trên Studio (ID ở `batch4/schedule_log.md`):
  - 15 video 1 giờ G01–G03: 08/11 10:00 → 15/11 10:00 (10:00 + 20:00 mỗi ngày).
  - 15 Short: 08/11 15:00 → 15/11 15:00 (15:00 hoặc 22:00, cùng ngày video 1 giờ).
  - 3 mix: Midnight Terminal 11/11 18:30 · Neon Highway 13/11 18:30 · Cyber Rain 16/11 18:30 (playlist "1 Hour Mixes").
  - Kiểm 07/11 16:15: cả 33 mục (15 video 1 giờ + 15 Short + 3 mix) "Đã lên lịch" trên Studio; 3 file mix tải lên xong.
  - Còn thiếu: tags mix P01 (0 tag; P02/P03 đủ 10), thumbnail 3 mix, related video 15 Short.

## Việc tiếp theo (theo thứ tự)
1. **Gắn "Video có liên quan"** cho 15 Short batch 4 — chỉ làm được sau khi video 1 giờ tương ứng công khai (từ 08/11 10:00).
2. **Thumbnail 3 mix** batch 4: file `batch4/out_mix/P0x … thumbnail.jpg` (local) — user tự tải lên Studio.
3. Pack 04–05: tạo nhạc Flow Music (prompt trong `batch4/music_packs.md`) → mp3 vào Downloads → `build_scenes.py` → `render_1h.sh` → `make_posts.py` → Short/mix như pack 1–3.
4. Pack 06–20: ảnh Google Flow theo `batch4/image_prompts/<id>.txt`, rồi như bước 3.
5. 100 Short cắt thêm: user đăng dần (đã có title/mô tả/lịch).

## Quy trình batch 4 (1 pack, lệnh chạy trong `batch4/`)
```
python3 -I make_packs.py                         # (đã chạy) prompt nhạc + songs.json
# user: dán 1 tin nhắn/pack vào Flow Music, tải mp3 → ~/Downloads
# agent: chuyển mp3 → audio/"<id> <title>.mp3"
python3 -I ../make_image_prompts.py .            # (đã chạy) prompt ảnh
# user: tạo ảnh Google Flow 16:9 → images/<id>.jpg (ghép theo nội dung nếu tải zip)
python3 -I build_scenes.py scenes                # prep + hiệu ứng tự động → shorts/src/scenes.json
./render_1h.sh G04-1 …                           # video 1 giờ → out/
python3 -I make_posts.py <dd/mm/yyyy>            # title/mô tả/lịch video 1 giờ
python3 -I make_shorts.py && ./render_shorts.sh  # 15 Short → out_shorts/
python3 -I make_mix.py <pack#>                   # mix 1 giờ → out_mix/
python3 -I make_posts_extra.py                   # nội dung Short + mix
```
Upload: user kéo file vào Studio (**tối đa 15 file/lần**); agent điền bằng browser. Gotchas chi tiết: `docs/megabrain/ai-video/research/youtube-loop-music-pipeline-2026-10.md`.

## Media (không có trong repo)
Toàn bộ mp3/m4a/wav/mp4/jpg/png + `shorts/public/`, `*/out*/`, `node_modules/` bị `.gitignore` (chỉ ở máy gốc).
Dọn 07/11/2026 16:25: đã xoá mọi file render đã đăng + wav trung gian (tạo lại bằng script). Máy gốc còn nguyên liệu: mp3/m4a gốc,
`batch4/images`, `shorts/public/bg`, `shorts/public/scenes/*.jpg`, thumbnail, `shorts/out/shorts100` (user đang đăng dần).
Máy mới muốn render lại phải lấy lại media: nhạc từ Flow Music (trang Songs → tải mp3, hoặc
`storage.googleapis.com/producer-app-public/clips/<song id>.m4a`), ảnh từ Google Flow (project link trong `batch*/flow_projects.md`).
Video đã đăng thì không cần media nữa.

## Setup máy mới
```
cd shorts && npm ci          # Remotion 4.0.535
brew install ffmpeg           # ffmpeg/ffprobe; python3 + Pillow + numpy cho batch4/build_scenes.py
```
