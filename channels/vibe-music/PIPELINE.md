# VibeMusicMaker — quy trình + media (kiến thức, không phải trạng thái)

Trạng thái từng video/lô: `ythub status --channel VibeMusicMaker`.

## Quy trình batch 4 (1 pack, lệnh chạy trong `batch4/`)
```
python3 -I make_packs.py                         # (đã chạy) prompt nhạc + songs.json
# user: dán 1 tin nhắn/pack vào Flow Music, tải mp3 → ~/Downloads
# agent: chuyển mp3 → audio/"<id> <title>.mp3"
python3 -I ../make_image_prompts.py .            # (đã chạy) prompt ảnh
# user: tạo ảnh Google Flow 16:9 → images/<id>.jpg (ghép theo nội dung nếu tải zip)
python3 -I build_scenes.py scenes                # prep + hiệu ứng tự động → shorts/src/scenes.json
./render_1h.sh G04-1 …                           # video 1 giờ → out/
python3 -I make_posts.py "<dd/mm/yyyy> [HH:MM]"   # title/mô tả/lịch video 1 giờ (ngoài G01 → file _<đầu>_<cuối>.md)
python3 -I make_shorts.py && ./render_shorts.sh [ids]  # Short → out_shorts/ (giữ mục cũ trong shortsG.json)
python3 -I make_mix.py <pack#>                   # mix 1 giờ → out_mix/
python3 -I make_posts_extra.py [pack#]           # nội dung Short + mix (có pack# → file _P04-05.md riêng)
```
Upload: user kéo file vào Studio (**tối đa 15 file/lần**); agent điền bằng browser. Gotchas chi tiết: `docs/megabrain/ai-video/research/youtube-loop-music-pipeline-2026-10.md`.

## Media (không có trong repo)
Toàn bộ mp3/m4a/wav/mp4/jpg/png + `shorts/public/`, `*/out*/`, `node_modules/` bị `.gitignore` (nằm cạnh code, không vào git).
Dọn 07/11/2026 16:25: đã xoá mọi file render đã đăng + wav trung gian (tạo lại bằng script). Còn nguyên liệu: mp3/m4a gốc,
`batch4/images`, `shorts/public/bg`, `shorts/public/scenes/*.jpg`, thumbnail, `shorts/out/shorts100` (user đang đăng dần).
Thiếu media thì lấy lại: nhạc từ Flow Music (trang Songs → tải mp3, hoặc
`storage.googleapis.com/producer-app-public/clips/<song id>.m4a`), ảnh từ Google Flow (project link trong `batch*/flow_projects.md`).
Video đã đăng thì không cần media nữa.

## Setup
```
cd shorts && npm ci          # Remotion 4.0.535
brew install ffmpeg           # ffmpeg/ffprobe; python3 + Pillow + numpy cho batch4/build_scenes.py
```
