# The Petty Ghost — thử nghiệm 1 kênh đa ngôn ngữ (EN + FR + ES) cho thị trường Âu/Mỹ

Quyết định 24/11/2026 (user: "thử nghiệm 1 kênh đa ngôn ngữ cho thị trường Âu"). Thay cho kế hoạch "kênh EN + kênh ES riêng" (debate 17).
Tên kênh giữ **The Petty Ghost (@ThePettyGhost)** (debate 18). Bộ ảnh/mô tả kênh: `loc/en/channel-kit.md` (dùng nguyên).

## Mô hình
- **1 video = 1 hình + 3 track audio** (EN mặc định, FR, ES) + **3 phụ đề .srt** (không in chữ lên hình).
- Chữ pop + bình luận livestream giả trên hình giữ **tiếng Anh** cho mọi thứ tiếng (ngắn, người Pháp/TBN đọc được).
- Tiêu đề/mô tả có bản dịch (localizations) ⇒ người xem Pháp/TBN thấy tiêu đề tiếng mình, YouTube tự phát track audio theo ngôn ngữ người xem.
- Giọng: ElevenLabs, cùng 1 giọng/nhân vật cho cả 3 thứ tiếng. EN `eleven_v4`, FR/ES `eleven_flash_v2_5` (rẻ ½).

## Pipeline (P01 LONG đã làm; tập khác thay `p01-long`)
```bash
cd channels/ma-no-ke
TR=agy zsh tools/loc_translate.sh p02 fr          # bản Pháp (Codex hết hạn mức đến 22/12 → agy)
../../shared/tts/.venv/bin/python tools/multi.py tts en p02-long   # tts fr / es tương tự (.env.local tự nạp)
python3 tools/multi.py build p02-long             # timeline chung + .srt
zsh tools/multi_render.sh p02-long                # mp4 (EN) + fr/es .m4a + preview 3 track
node tools/multi_upload.mjs p02-long [--confirm]  # private + localizations + thumbnail + thử captions
```
Credit ElevenLabs/LONG ≈ 4.500 (EN v4 ~1.5k, FR+ES flash ~3k). Gói Free 10.000/tháng ≈ 2 LONG; **Free không cho dùng thương mại** ⇒ trước khi bật kiếm tiền cần Starter ($5/tháng, 30k credit, có license thương mại).

## Việc tay trong Studio (API không làm được)
1. Content → video → **Languages** → Add language → Français → **Audio** → tải `video/out/multi/<VID>.fr.m4a`; tương tự Español.
   Nếu không thấy mục Audio: tính năng audio đa ngôn ngữ chưa mở cho kênh ⇒ phương án B: đăng `MULTI` bản FR/ES thành video riêng (render: đổi comp `MULTI-<VID>-FR`).
2. Phụ đề: nếu `multi_upload.mjs` báo caption 403 (token thiếu scope `youtube.force-ssl`), tải tay 3 file `.srt` (Subtitles → Upload file → With timing).
3. Nghe lại 3 track, rồi Visibility → Public.

## Đo (14 ngày sau video đầu)
Analytics → Audience → **Audio track language** + Geography: view theo track FR/ES/EN, retention theo track. Track FR/ES < 10% view sau 14 ngày ⇒ bỏ, quay về EN-only (đoán).
