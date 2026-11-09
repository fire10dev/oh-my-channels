# Off Limits Life (inside-x) — HANDOFF 2026-11-09 14:35 (+07)

## Kênh
- **Off Limits Life** · https://www.youtube.com/@OffLimitsLife · channel ID `UCyMWnWUQnsp6LF0DOryD6sw`
- Brand Account quản lý bởi fire10.dev@gmail.com (cùng tài khoản với @Vibe.MusicMaker). Đăng nhập ở **built-in browser** của Claude app (không phải Chrome).
- Logo PEEK + banner vàng đã tải (owner tự chọn file vì built-in browser không có công cụ đưa file vào ô tải lên). Mô tả kênh đã điền.

## Video
| ID | Video | Link | Trạng thái |
|---|---|---|---|
| IX001 | How Submarine Crews Eat, Shower & Sleep for 77 Days (8:25) | https://youtu.be/pX1CrKt3sYA | Public 2026-11-09 ~14:33. Thumbnail A: chờ owner tải lên. Tag chưa nhận. Bình luận ghim chưa đăng |

## Pipeline
`src/data/<id>.json` (cảnh + lời) → `tts_kokoro.py` (yt-channel/tools/.venv) → `public/<id>/` + timeline → `npx remotion render src/index.ts <Comp>` → `ffmpeg loudnorm I=-14`.
Gói đăng: `scripts/IX001-*.md` §3. File tải lên: `out/upload/`.

## Quy tắc kênh
- Neo thời gian mọi con số ("as of <năm>", thẻ số ghi nguồn + năm, chân màn hình "Figures as of <năm>").
- Claim không có nguồn gốc ⇒ bỏ (vd con số vitamin D 13%→30% đã bỏ).
- "Sử dụng AI" = Không (hình cách điệu bằng code); mô tả ghi rõ giọng đọc là AI.
