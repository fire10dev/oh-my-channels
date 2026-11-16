---
title: Kênh YouTube nhạc loop 1 giờ (VIBE MUSIC AI MAKER) — quy trình, giới hạn công cụ, chính sách
tags: [ai-video, research, youtube, ai-music, flow-music, google-flow, ffmpeg, policy]
status: draft
audience: both
created: 2026-10-28 23:00
updated: 2026-11-11
as_of: 2026-10-28
---

# Kênh YouTube nhạc loop 1 giờ — quy trình + bài học (2026-10-28)

> [!summary] Nhạc AI (Flow Music) + clip 10s (Google Flow, Omni 1.1 Flash 720p) → ffmpeg ghép video 1 giờ
> (clip nối mượt bằng crossfade 1s, nhạc lặp) → upload YouTube Studio. Đã đăng 5 video (batch 1), batch 2 = 15 bài
> (EDM 2013 / Morning / Jazz). Nút chặn lớn nhất: **file video >10 MB không upload được qua Chrome extension** —
> user phải tự chọn file; và rủi ro chính sách **inauthentic content** khi xin YPP.

## Quy trình đã chạy được
1. **Nhạc** — Flow Music (flowmusic.app), Producer chat: 1 tin nhắn "tạo 5 bài, mỗi bài 1 mô tả" ra 5 bài ~3 phút.
2. **Lấy file nhạc** — nút Download trên Flow Music **không ra file** khi điều khiển bằng extension (nghi mở hộp thoại lưu
   native). Cách đã dùng: phát từng bài, đọc network request `storage.googleapis.com/producer-app-public/clips/<id>.m4a`
   (bucket public) rồi `curl`. Map id↔bài bằng cách bấm nút tên bài + đối chiếu độ dài. `[!verified]` 15/15 tải được.
   API `__api/audio-create-song-status/<id>` cần bearer token → 401 từ JS trang.
3. **Clip hình** — Google Flow, Omni 1.1 Flash, 16:9, 720p, 10s, x1 = **15 credit**; 720p 8s = 12; 360p 10s = 7.
   Tài khoản free có **50 credit/ngày** (làm mới theo giờ riêng từng acc) ⇒ 3 clip/acc/ngày.
   Tải về: free chỉ có **720p gốc**; 1080p/4K upscale cần gói trả phí (acc PRO thì có 1080p).
   Một số acc mới bật mặc định "Tác nhân" (agent) + panel bên phải → phải tắt trước khi nhập prompt.
4. **Ghép 1 giờ** — script `FIRE10.DEV/REPO/MusicMaker/batch2/make_1h.sh`: bỏ tiếng clip, crossfade 1s cuối vào đầu
   (SSIM chỗ nối 0,85–0,92 → 0,96–0,98; bước khung bình thường ~0,98), scale lanczos 1080p, x264 crf18;
   nhạc: cắt lặng đầu/cuối (giữ 0,4s), `-stream_loop`, fade-out 5s; video copy stream ⇒ ~1 phút/video.
   Kích thước ~2,4 GB/giờ (cảnh mưa ~5 GB).
5. **Upload** — YouTube Studio: user chọn file; agent điền title/mô tả/tags/thumbnail (thumbnail <10 MB qua `file_upload` OK),
   "không dành cho trẻ em", danh mục Nhạc, chế độ hiển thị.

## Giới hạn công cụ (đã kiểm)
- Chrome extension `file_upload`: tổng ≤10 MB/lần ⇒ không upload được video. Hộp thoại chọn file native: không điều khiển được.
- YouTube Data API: project chưa audit ⇒ video upload bị **khoá private** `[!source]` https://developers.google.com/youtube/v3/docs/videos/insert (truy cập 2026-10-28).
  Quota upload đã giảm (~100 đơn vị, 12/2025) — hạn mức không còn là nút chặn.
- YouTube phát 1080p ở ~2 Mbps (avc1) / ~0,9 Mbps (av1) — nguồn 720p upscale nhìn mềm; upload 1440p/4K mới được bitrate cao hơn.

## Chính sách YouTube (subagent research, 2026-10-28)
- Đăng nhiều cùng lúc **không bị cấm theo số lượng**; spam = "high volumes of similar content with minimal changes"
  `[!source]` https://support.google.com/youtube/answer/2801973.
- YPP **inauthentic content** (đổi tên 15/7/2025): template / mass-produced bị loại, xét theo **cả kênh**
  `[!source]` https://support.google.com/youtube/answer/1311392.
- **Nhạc do AI tạo phải bật nhãn "altered or synthetic"** trong Studio; ghi trong mô tả không thay thế
  `[!source]` https://support.google.com/youtube/answer/14328491. Batch 1: Studio hiện popup "Video này có nhãn AI" — YouTube **tự gắn** nhãn AI dựa trên thông tin hiện có (thấy trên Quiet Morning Light, 2026-10-28 22:40); vẫn nên tự chọn "Có, đã dùng AI" khi upload.
- Tối đa 3 thông báo upload / người xem / 24h `[!source]` https://support.google.com/youtube/answer/7457584.
- "Đăng dồn bị thuật toán phạt" = lời đồn, không có tài liệu `[!assumption]`.
- Khuyến nghị: upload private + Schedule 1 video/ngày, xoay vòng thể loại; playlist theo mood.
- User chọn (2026-10-28): batch 2 đăng **~3 tiếng/video** (A1 công khai ngay, các bài sau hẹn giờ). Hệ quả: >3 video/24h ⇒ người xem chỉ nhận thông báo 3 video đầu mỗi ngày.
- Studio upload: chọn "Có, đã dùng AI" nằm trong "Hiển thị thêm" (mục "Sử dụng AI"); danh mục mặc định đã là Nhạc.

## Gotchas
- **Upload dồn → bị chặn chờ xác minh danh tính** (2026-10-28 ~22:55): kênh đã có 6 video trong ngày + 4 video 1 giờ batch 2 (~11 GB) liên tiếp ⇒ YouTube chặn upload, đòi xác minh. Nguyên nhân chính xác chưa rõ `[!assumption]`. Lần sau: ≤3–4 video/ngày cho kênh mới, xác minh điện thoại/danh tính trước.
- Hẹn giờ trong Studio: chọn **múi giờ trước rồi mới gõ giờ** (đổi múi giờ sau sẽ reset giờ về 00:00); gõ giờ xong Enter.
- Flow Music "mp3" tải tay thực chất là MP3 có ảnh bìa (mjpeg) ⇒ luôn `-map 0:a`.
- Trên Flow, "Create variation of …" nằm cạnh nút phát — bấm nhầm là tạo bài mới.
- User upload nhầm file `… Loop.mp4` (10s) cùng file 1 giờ ⇒ đặt tên file 1 giờ thật khác biệt.

## Tái dùng clip loop cho Remotion (2026-10-28)
- Clip `batch2/loops/*.mp4` = 1280×720 16:9, 10s, **chưa crossfade** (bản nối mượt 1080p chỉ là file tạm trong `make_1h.sh`, bị xoá).
- Dùng tốt cho video **ngang YouTube** (overlay tên bài, đồng hồ Pomodoro, tracklist, visualizer) — thêm giá trị, giảm rủi ro inauthentic content.
  Render 1 giờ trong Remotion = 86.400 frame @24fps ⇒ chậm; nên render đoạn overlay ngắn rồi ffmpeg loop, hoặc overlay tĩnh bằng ffmpeg.
- Không hợp cho video **dọc TikTok bán hàng** ([[remotion-100-variants-design]]): không có sản phẩm, crop 9:16 từ 720p còn 405×720 → phóng 2,7× lên 1080×1920 là mờ (cùng lỗi clip 360×640 hôm 27/10).

## Ý tưởng Remotion làm kênh hấp dẫn hơn (2026-10-28, chưa thử — `[!assumption]`)
Ưu tiên theo giá trị / công sức:
1. **Template thumbnail** (`renderStill`): ảnh clip + tên bài + badge "1 HOUR" + mood — đồng bộ nhận diện, tăng CTR. Rẻ nhất.
2. **Shorts dọc 15–30s** quảng bá từng video dài: clip 16:9 đặt giữa, nền blur, chữ to + visualizer. Tránh crop 9:16 (mờ). Shorts kéo người xem về video dài.
3. **Mix 5 bài/mood** (thay 1 bài lặp 20 lần): chuyển cảnh + "Now playing" + chapter trong mô tả ⇒ khác biệt thật, giảm rủi ro inauthentic content.
4. **Visualizer theo nhạc** (`visualizeAudio`): render đúng 1 vòng bài (~3 phút ≈ 4.000 frame) rồi ffmpeg lặp ⇒ hình + tiếng vẫn khớp vì cùng chu kỳ.
5. **Đồng hồ Pomodoro 25/5** cho tệp focus/coding: chữ đổi mỗi giây nên không lặp được ⇒ dùng ffmpeg `drawtext` thay vì render 86.400 frame Remotion.
6. Intro 3–5s có logo kênh + tên bài/BPM (nhận diện thương hiệu).
- Ước lượng (máy M4 Pro 12 nhân, chưa có project Remotion nào trong FIRE10.DEV): #2 Shorts ≈ 1,5 giờ lần đầu (dựng template ~45', render 15 Shorts ~20–30'), #3 Mix ≈ 1,5–2 giờ mix đầu, mỗi mix sau ~20' render (dựng 1 vòng ~15' rồi ffmpeg lặp 4×).
- Mẹo: Short 15–20s ở ~4 Mbps < 10 MB ⇒ upload được bằng `file_upload` của Chrome extension, không cần user tự chọn file.

## Remotion Shorts + Mix 1 giờ — đã làm (2026-10-29)
Project: `FIRE10.DEV/REPO/MusicMaker/shorts` (remotion 4.0.535 pin, React 19.1). Luồng:
`prep_assets.py` (bg loop 9s crossfade 720p, nhạc cắt lặng, hook 20s = cửa sổ RMS to nhất, start ≥8s) →
`build_mix_audio.sh` (5 bài/nhóm, `acrossfade` 3s) → `render_all.sh` (15 Short + 3 mix round + thumbnail, rồi ffmpeg lặp round → 1 giờ) →
`make_posts.py` (title/mô tả, chapter cả giờ, link video lẻ từ `batch2/schedule_log.md`).
- **Short 1080×1920 20s @30fps: ~23s render, 7,6 MB** với `--video-bitrate=3M` ⇒ upload được qua `file_upload` (<10 MB).
- Mix: render 1 round (~14 phút, 24fps) rồi `-stream_loop -1 -c:v copy -t 3600`; chapter lặp theo round (21–23 dòng).
- Gotchas: Shorts UI che ~350px đáy + cột nút phải ⇒ CTA đặt `bottom: 360`, card lùi vào 80px;
  `<Img>` trong flex row cần `width: 20%; minWidth: 0` (flex:1 bị ảnh 1280px đẩy tràn); chữ trắng trên cảnh sáng cần gradient + textShadow.
- Studio hẹn giờ: sau nửa đêm-ish ngày mặc định nhảy sang **ngày mai** ⇒ slot cùng ngày phải bấm chọn ngày trong lịch.
- Thông báo "Chúng tôi vẫn đang kiểm tra nội dung" khi lên lịch lúc video chưa xử lý xong: chỉ là cảnh báo, bấm "Đã hiểu" vẫn lên lịch được.
- Render mix bị **Timeout 30s ở OffthreadVideo** khi máy ngủ giữa chừng (Mix C, 29/10) ⇒ chạy với `--timeout=120000`, và `tee` nuốt exit code ⇒ kiểm file ra chứ đừng tin "exit 0".
- Chrome extension: 2 profile cùng cài Claude ⇒ phiên tự nhảy về profile sai sau mỗi 1–2 lệnh dù đã `select_browser`; phải tắt extension ở profile thừa.
- Short: `file_upload` 7,5 MB vào `input[type=file]` của hộp "Tải video lên" chạy được; ô ngày trong lịch gõ trực tiếp được ("1 thg 11, 2026" + Enter);
  "Video có liên quan" chỉ chọn được video **đã công khai**.
- Dọn 29/10: file render + asset trung gian (`out/shorts`, mix A/C, `*_round`, `public/{audio,mix,hook,bg}`, `node_modules`) đã vào Thùng rác.
  Muốn render lại: `npm install && python3 -I prep_assets.py && ./build_mix_audio.sh A|B|C` (nguồn ở `batch2/loops` + `batch2/audio` vẫn giữ).
- ✅ 29/10: 4 playlist (EDM, Morning, Jazz: 6 video, cũ→mới; Cozy Piano Study: 6 video đợt 1, phổ biến nhất). Studio: Tạo → "Danh sách phát mới" → "Thêm video" (lọc "1 Hour"). Trang `/playlists` lỗi, dùng `/content/playlists`.
- ✅ 29/10: #1 thumbnail chữ cho 15 video lẻ (Remotion `Thumb-<id>`, đổi qua trang `studio.youtube.com/video/<id>/edit` → file input thumbnail → Lưu; video đã lên lịch vẫn giữ lịch).
- ✅ 29/10: thumbnail chữ cho 6 video đợt 1 (`Thumb1-<key>`, mood "Cozy Piano Study", accent #c4a8ff).
- ✅ 29/10: #5 Pomodoro 25/5 — `pomodoro.sh`: overlay Remotion 1 fps (3600 PNG trong suốt, composition `Pomodoro`) chồng lên loop B2 1080p;
  nhạc focus = B2, break = B1, chuông (aevalsrc 880/1320/1760 Hz tắt dần) ở 25:00, 30:00, 55:00; encode h264_videotoolbox 8 Mb/s.
  ffmpeg Homebrew trên máy **không có drawtext** (thiếu freetype) ⇒ chữ/đồng hồ phải vẽ bằng Remotion.
- Chưa làm (backlog): intro logo 3–5s (#6) — chỉ áp dụng cho đợt sau, không làm lại video đã đăng;
  gắn "Video có liên quan" cho 11 Short sau 30/10 16:45.

## Batch 3 "Coding Focus" (2026-10-29)
15 bài = D Lo-fi Coding / E Synthwave Night Coding / F Deep Focus Ambient. Thư mục `FIRE10.DEV/REPO/MusicMaker/batch3`
(`music_prompts.md`, `make_video_prompts.py`, `make_posts.py` → `youtube_posts_batch3.txt`, `flow_projects.md`).
Nhạc + 15 clip làm xong trong ~45 phút (1 lượt credit/acc, 5 acc).
- **Tải nhạc Flow Music không cần phát từng bài:** song id ở link `/song/<id>` (trang Songs) **= id file** ⇒
  `curl storage.googleapis.com/producer-app-public/clips/<song id>.m4a`. `[!verified]` 16/16 file.
- Flow Music đôi khi tạo 2 bản 1 bài + hộp "Which do you prefer?"; bấm CHOOSE sẽ hỏi xoá bản kia → chọn **Keep Both**.
- Trang phiên mới của Flow Music có **thẻ gợi ý** ngay chỗ ô nhập ở giữa — bấm nhầm là gửi prompt mẫu. Dùng `find` "Ask Producer"; không gõ `\n` (Enter = gửi).
- Google Flow u/1 mặc định đã đổi sang **Veo 3.1 Lite 8s (10 credit)** → phải chọn lại Omni 1.1 Flash · 720p · 10s.
- Tải clip: mở clip → icon download → "720p Kích thước gốc"; dải thumbnail trên cùng để chuyển clip, thứ tự = mới nhất trước.
  File về `~/Downloads/<tiêu đề tự đặt>_<hash>.mp4` ⇒ đối chiếu tiêu đề trước khi `mv`.
- Chrome extension: 2 "Browser" cùng kết nối ⇒ phiên nhảy sang Browser 2 sau vài lệnh; `select_browser` Browser 1 trước **mỗi** lệnh.
- Prompt "no letters on screens" vẫn ra chữ neon kiểu Á ở E1 Terminal Glow `[!verified]` — kiểm từng clip trước khi đăng.
- ✅ 29/10 22:00–23:30: 15 video batch 3 đã điền + hẹn giờ, nối tiếp lịch batch 2 để cả kênh đều 3 tiếng/video
  (D1 30/10 19:45 → F5 01/11 13:45, ID ở `batch3/schedule_log.md`). 3 playlist mới (Lo-fi Coding Beats / Synthwave Night Coding /
  Deep Focus Ambient), mỗi playlist 5 video, thứ tự "Ngày xuất bản (cũ nhất)". Thumbnail chữ: composition `Thumb3-<id>` (`src/TrackThumbnail.tsx`).
  User upload cả 15 file liền một lèo — lần này **không** bị chặn xác minh.
- Studio gotchas (batch 3): ô giờ phải `click → cmd+a → gõ → Enter` (triple-click sau khi đóng date picker không chọn được text, giờ giữ 00:00);
  danh sách playlist >5 mục thì có ô tìm kiếm, vị trí checkbox dịch xuống — kiểm ô dropdown hiện tên playlist trước khi đi tiếp
  (1 lần `find` ref click không tick được); hàng "Chỉnh sửa bản nháp" xê dịch khi video mới lên ⇒ đọc tiêu đề hộp thoại trước khi điền.
- Chrome extension đổi tên/ID "Browser N" sau mỗi lần rớt kết nối; deviceId 76ba0ec9… vẫn là profile đúng ⇒ luôn `select_browser` theo deviceId.

## Loop từ 1 tấm hình (thử 30/10)
Remotion `src/StillLoop.tsx` (composition `StillLoop-D3`): ảnh tĩnh + mưa trên kính, bokeh nhấp nháy, glow đèn, bụi, hơi trà,
camera "thở" 2 %, tên bài + visualizer theo nhạc. Mọi hiệu ứng chạy số chu kỳ nguyên trong LOOP = 360 frame (12 s @30fps)
⇒ frame 0 vs 360 SSIM **1,000** `[!verified]` (clip AI Omni: 0,94–0,99 sau crossfade). Render 30 s 1080p: **16 s**, 9 MB.
Test dùng frame 720p từ clip (phải crop bỏ dải sóng dính sẵn → upscale ~1,74×, hơi mềm); bản thật nên lấy ảnh Flow chế độ
"Hình ảnh" (độ phân giải cao, không có sóng). Visualizer theo nhạc không tuần hoàn 12 s ⇒ bản 1 giờ render 1 vòng = độ dài bài rồi ffmpeg lặp.
Rủi ro: nhân vật đứng yên; YPP "inauthentic content" với ảnh tĩnh + nhạc `[!assumption]`.
- v2 (30/10): sóng kiểu Flow tự vẽ — `src/FlowWaves.tsx`: 4 lớp "đồi" SVG trong mờ (gradient ngang theo palette, viền sáng blur),
  mỗi lớp cao theo 1 dải tần (bass/low-mid/mid/high, trung bình 6 frame cho mượt), trôi ngang số chu kỳ nguyên/LOOP.
  Thông số lần 1 (đồi thấp, nhiều đỉnh, alpha 0,55) trông mảnh hơn Flow → tăng base 0,22–0,5, humps 1,2–3, alpha 0,72–0,88.

## ⭐ Quy trình chuẩn từ 30/10: Google Flow (ảnh) → Remotion loop
User chốt 30/10: bỏ clip video 10 s, chuyển sang **1 ảnh Flow + Remotion**. Clip pipeline (`batch*/make_1h.sh`) chỉ giữ cho batch cũ.
1. **Nhạc** — Flow Music như cũ (tải `clips/<song id>.m4a`).
2. **Prompt ảnh** — `python3 -I MusicMaker/make_image_prompts.py <batch_dir>` (đọc `SONGS`/`STYLE` trong `<batch>/make_video_prompts.py`)
   → `image_prompts/<id>.txt`: bỏ MOTION/LOOP/visualizer, thêm bố cục (nhân vật bên phải, đáy 15 % đơn giản cho sóng, góc trái trên trống cho title).
3. **Ảnh** — Google Flow chế độ "Hình ảnh", 16:9; tải bản gốc. (Credit/ảnh & độ phân giải: `[!assumption]` chưa đo.)
4. **Prep** — `shorts/stillloop_prep.sh <id> <ảnh> <nhạc>` → `public/scenes/<id>.*` + in `srcW x srcH`, `roundFrames`.
5. **Cấu hình cảnh** — thêm 1 mục vào `shorts/src/scenes.json`: title/subtitle/accent, `waves` (palette), `effects`
   {rain, snow, fireflies, glows, dust, steam, bokeh} theo toạ độ pixel ảnh gốc (agent xem ảnh rồi đặt). Mẫu: D3.
6. **Dựng 1 giờ** — `shorts/stillloop_1h.sh <id> "<out prefix>"`: render `Still-<id>` = 1 lượt bài (nhạc + sóng kiểu Flow theo bass/mid/high)
   rồi `-stream_loop` lên 3600 s + fade 5 s, kèm `thumbnail.jpg`. Chu kỳ hiệu ứng = roundFrames / round(roundFrames/360)
   ⇒ chỗ nối cuối→đầu SSIM 0,9932 ≈ bước khung thường 0,9933 `[!verified]` (D3).
   Đo D3 (30/10): `stillloop_1h.sh` **2 phút 20 s**/video, 1,1 GB/giờ (clip pipeline: ~1 phút, 1,9–2,6 GB), decode errors none.
7. Thumbnail chữ (`Thumb3`-kiểu ThumbCard) + upload/hẹn giờ như cũ.

## Nhịp đăng Shorts — sửa 30/10
- **Sai lầm 29/10:** xếp Shorts 2/ngày (09:00 + 19:00) từ 31/10 → 07/11 để chờ video 1 giờ công khai (related video), trong khi video 1 giờ ra mỗi 3 tiếng ⇒ Shorts thưa hơn video chính, ngược mục tiêu "Shorts kéo người xem về video dài". Batch 3 thì không có Short nào.
- **Quy tắc từ 30/10:** mỗi video 1 giờ có 1 Short, hẹn **1 tiếng sau** video 1 giờ; Short tồn đọng dời về **2 tiếng/Short**. Related video gắn sau khi video 1 giờ công khai (Short đã lên lịch vẫn sửa được).
- Short batch mới: `python3 -I shorts/prep_assets.py <batch_dir>` (gộp vào `src/tracks.json` theo id; ACCENT/MOOD cho D/E/F ở `src/tracks.ts`) → render `Short-<id>` (`--video-bitrate=3M`, ~7,4 MB, 20 s). Batch 3: 15 Short render ~6 phút.
- Upload Short trong Studio (đo 30/10, ~1,5 phút/Short):
  - Điền **mô tả trước, tiêu đề sau** — gõ `#shorts` trong tiêu đề bật hộp gợi ý hashtag che ô mô tả; đóng hộp bằng click vùng trống (Chi tiết), **không bấm Esc** (Esc đóng cả hộp upload → thành bản nháp).
  - `ref` của ô tiêu đề/mô tả/radio thường ổn định nhưng **có lần đổi** (F2) ⇒ luôn `find` lại trước khi click; radio "Có, đã dùng AI" chỉ hiện sau "Hiện thêm".
  - Lịch: chọn múi giờ (GMT+0700, mục đầu) → ô ngày gõ "1 thg 11, 2026" + Enter → giờ: click, cmd+a, gõ, Enter. Bố cục có lúc dịch ~11px ⇒ zoom kiểm trước khi bấm "Lên lịch"; sau đó có hộp "vẫn đang kiểm tra nội dung" → "Đã hiểu".
  - Lấy ID Short: `a[href*="youtube.com/shorts/"]` trong hộp "Đã lên lịch cho video" (không bấm nút copy).
- Studio có thể mở nhầm kênh cá nhân (<kênh cá nhân>) ⇒ "Chuyển đổi tài khoản" → VibeMusicMaker (fire10.dev) trước khi làm.

- **Nhiều session dùng Chrome extension cùng lúc (30/10):** một session khác (kênh "Mèo Là Chân Ái") liên tục chuyển trình duyệt đang dùng sang Browser 2, nên lệnh trúng sai profile hoặc báo "tab not in group". Cách xử lý: mỗi lượt gọi `select_browser` 76ba0ec9… song song với batch thao tác, rồi kiểm lại kênh trước khi click.

## Gắn related video Short — gotchas (2026-11-04)
- Lời nhắc CronCreate chỉ sống trong phiên ⇒ phiên 30/10 đóng thì 15 Short batch 3 không được gắn (phát hiện 04/11, gắn tay xong cùng ngày).
- Quy trình chạy được: `studio.youtube.com/video/<shortId>/edit` → `find` nút "Video có liên quan" → click → `find` option "<Tên> … 1 Hour" → click → Lưu → toast "Đã lưu thay đổi". Ref chỉ dùng được sau khi `find` trên trang vừa load.
- `find` không đọc ra giá trị hiện tại của ô related; muốn kiểm thì đọc `innerText` cha của nhãn "Video có liên quan" bằng JS.
- Chrome extension: nhiều profile cùng kết nối ⇒ phải chọn browser mỗi phiên; tool không hiện email của profile. Profile kênh nhạc = Chrome <tài khoản Studio — local/PRIVATE.md> (tên "Music maker"); bấm Connect qua `switch_browser`. deviceId **đổi** sau khi Connect lại (`[!verified]` 04/11) ⇒ không ghi cứng deviceId.
- Batch dài (~15 bước) từng rớt kết nối 1 lần, thao tác vẫn chạy xong ⇒ sau khi rớt, kiểm trạng thái trang rồi mới làm lại.

## Mix 1 giờ batch 3 D/E/F — đã làm (2026-11-04)
- Pipeline mix mở rộng cho D/E/F: `Root.tsx` thêm nhóm, `MixThumbnail` lấy frame `thumb3/` cho DEF, `render_mixes.sh <G...>` (= phần mix của `render_all.sh` + `--timeout=120000`), `make_posts.py DEF` → `posts_mixes_DEF.txt`.
- Đo 04/11: 3 round render + lặp 1 giờ ≈ **28 phút** tổng (15:52 → ~16:20), chạy với `caffeinate -i`.
- Upload: user kéo **cả 3 file một lần** vào hộp "Tải video lên" → agent mở từng bản qua bút chì ở bảng tiến độ góc phải; ~3 phút/video để điền. Không bị chặn xác minh.
- Gotcha playlist: click checkbox qua `ref` từ `find` **không** ăn lần đầu → click theo toạ độ trên screenshot, kiểm `ytcp-text-dropdown-trigger` innerText trước khi đi tiếp.
- Đăng ngay ⇒ popup "vẫn đang kiểm tra nội dung" → "Vẫn xuất bản"; video ở trạng thái chờ xử lý tự lên Công khai khi xong SD.
- ID: D UDZ8Ngc-2W4 · E KAyXkeAAm5w · F ZwXV14MimFA (chi tiết `shorts/shorts_schedule.md`).

## 100 Short cắt thêm từ 30 bài cũ (2026-11-04)
- Pipeline: `make_variants.py` chọn 3–4 cửa sổ 20 s to nhất/bài (RMS từng giây qua ffmpeg astats, start ≥8 s, không chồng hook cũ) → `public/hook2/<id>-<n>.wav` + `src/variants.json`; `src/ShortVariant.tsx` 3 bố cục (full pan / detail zoom + hộp chữ / still Ken Burns + FlowWaves); `render_variants.sh` (3M video, concurrency 8) ~21 s/Short, 100 Short ≈ 40 phút, 738 MB.
- `make_posts_100.py` → `posts_shorts100.md/.csv`: 4 slot/ngày, xen kẽ mood, cùng bài cách ≥14 slot (3,5 ngày). User tự đăng.
- Gotcha: link thư mục / file trong `/private/tmp` (output task nền) không mở được trong panel app → dùng reveal_path (Finder) hoặc log copy trong project.
- Rủi ro: reused content (cùng bài, khác đoạn); bố cục `full` upscale nền 720p hơi mềm.

## Batch 4 — 100 bài Synthwave Night Coding, 20 pack × 5 (2026-11-05)
- Theo series Flow Music "Night Coding Synthwave" (batch3 E). `MusicMaker/batch4/make_packs.py` → `music_packs.md` (20 tin nhắn dán vào Flow Music, đúng format prompt cũ) + `songs.json` (id `G<pack>-<n>`, title, bpm, prompt, scene/palette theo pack cho prompt ảnh).
- Chia việc theo chi phí token: **user** làm phần thao tác UI tốn kém (dán prompt Flow Music, tạo ảnh Google Flow, upload Studio); **agent** làm local (prompt, tải m4a bằng song id, Remotion render, thumbnail, title/mô tả/lịch).
- 05/11: user chọn **video 1 giờ/bài** (100 video, ~110 GB; ổ trống 415 GB). Pack 1–3 xong (15 mp3 user tự tải từ Flow Music → `batch4/audio/<id> <title>.mp3`, 2:37–3:02), hết credit Flow Music.
- Không đặt hiệu ứng tay nữa: `batch4/build_scenes.py import <id đầu> <id cuối>` lấy N ảnh mới nhất trong Downloads theo thứ tự tải → `images/<id>` + `contact_sheet.jpg`; `build_scenes.py scenes` chạy `stillloop_prep.sh` + hiệu ứng tự động (bokeh = điểm sáng bão hoà, 2 glow+dust, mưa cho pack mưa, tuyết cho Ice) + palette sóng lấy từ ảnh (4 màu cách hue ≥0,08) → `shorts/src/scenes.json`. `batch4/render_1h.sh` → `batch4/out/<id> <title> 1 Hour.mp4` + thumbnail. Thử trên ảnh E1: hiển thị đúng `[!verified]`.
- 05/11 16:45: 15 video 1 giờ pack 1–3 render xong (~2,7 phút/video, 1,3–2,7 GB, tổng 28 GB, decode errors none). Ảnh pack 1–5 (25) user tải dạng zip giải nén → mtime giống nhau ⇒ **không ghép được theo thứ tự tải**, phải xem contact sheet rồi ghép theo nội dung (lệnh `import` chỉ dùng được khi tải lẻ từng ảnh). `batch4/make_posts.py` → `youtube_posts_batch4.md` (2 video/ngày 10:00·20:00 từ 06/11). Ảnh Flow có logo ✦ góc phải dưới (đã có từ ảnh gốc).

## Đăng batch 4 bằng browser pane (built-in) — 2026-11-07
- 15 video G01–G03: user kéo file vào hộp tải lên (browser pane **không có file upload** ⇒ thumbnail riêng cũng không đặt được; để YouTube tự chọn). Agent điền bằng JS cài vào trang (SPA giữ `window.*` qua các video): `b4meta(id)` dựng title/mô tả/tags từ dữ liệu gọn; `b4set` = focus + `execCommand('selectAll')` + `insertText` (mô tả trước, title sau); tags = `insertText("a,b,...,")` vào `input#text-input` → 10 chip; AI = radio `VIDEO_HAS_ALTERED_CONTENT_YES`; playlist: tên thật dài ("Synthwave Night Coding 🌃 1 Hour Retro…") ⇒ so `startsWith`.
- Lịch: ngày mặc định = mai (8 thg 11). Ô ngày/giờ: **click qua ref từ `find`** → End → Backspace ×N → gõ ("9 thg 11, 2026" / "20:00") → Enter. Click theo toạ độ sau khi đổi ngày **trượt** (G01-3 bị lưu 00:00, sửa lại ở trang chi tiết → Chế độ hiển thị → Xong → Lưu).
- Bấm "Lên lịch" → hộp "Chúng tôi vẫn đang kiểm tra" chỉ có nút "Đã hiểu": click `button` bên trong bằng JS là được (click `ytcp-button` không ăn).
- Video cuối hàng đợi: hộp chỉnh sửa mở chậm/trắng ⇒ chờ textbox có chữ rồi **thêm 2–3 s** trước khi điền, nếu không selectAll chọn cả trang + playlist dialog rỗng (G03-4).
- Tab upload phải mở tới khi tải xong 15/15; sửa video khác thì mở tab mới.
- 07/11: Short + mix batch 4. `batch4/make_shorts.py` (hook 20 s to nhất từ `public/scenes/<id>.wav`, metadata `shorts/src/shortsG.json`) + composition `ShortG-<id>` (`shorts/src/ShortG.tsx`: ảnh tĩnh crop 9:16 pan/zoom, FlowWaves, pill FULL 1 HOUR) + `render_shorts.sh` → `batch4/out_shorts/` (15 file, ~40 s/Short, 110 MB). Mix: `batch4/make_mix.py <pack>` lấy lượt đầu của 5 video 1 giờ (độ dài từ `out/render.log`), xfade/acrossfade 3 s, lặp 3600 s, thumbnail PIL (chữ to trên khung đầu, làm tối góc trên để che chữ tên bài gốc) → `out_mix/` (~3 phút/mix, không cần Remotion). Nội dung đăng: `make_posts_extra.py` → `youtube_posts_batch4_shorts_mix.md`; ID video 1 giờ ở `batch4/schedule_log.md`.
- 07/11 15:45–16:05: đăng 15 Short + 3 mix batch 4 (browser pane). **Studio nhận tối đa 15 file/lần** — user thả 18 file thì 3 mix bị bỏ, phải thả lượt 2. Short hẹn 08/11→15/11 (15:00/22:00), mix 11/11, 13/11, 16/11 18:30, playlist "1 Hour Mixes". Hộp chi tiết đôi khi không nhận `insertText` (G01-5, G03-2: datepicker video trước còn mở giữ focus) ⇒ kiểm title sau khi điền; sửa: bấm `#step-badge-0`, điền lại, về bước 4. Tags qua `insertText` có lúc ra 0 chip (P01). Pane bị ẩn ⇒ timer chậm, JS >45 s timeout → tách `p5go`/`p5open`.
- 🔴 16:0x app báo trang Studio **ghi vào clipboard** khi click ô giờ — nghi trúng nút copy link của hộp "Đã lên lịch cho video" còn chồng. Lần sau: đóng hộp share và chờ biến mất trước khi click.
- 07/11 16:15: `MusicMaker/` thành git repo → **github.com/fire10dev/VibeMusicMaker** (remote `git@github-fire10:…`, SSH alias dùng `~/.ssh/<ssh-key>`; alias `github.com` mặc định là key công việc → "Repository not found"). Chỉ code/prompt/lịch/docs (`.gitignore` chặn media ~38 GB); handoff: `STATE.md` + `CLAUDE.md` + `docs/pipeline-notes.md` (bản chụp file này). Có `.no-ticket-required`.

## Render lại 1 Short batch 4 + độ nét (2026-11-07 21:25)
- mp4 batch 4 (`out/`, `out_shorts/`, `out_mix/`) và `public/hookG/` đã bị xoá sau khi đăng; chỉ còn thumbnail/chapters. **Đừng chạy lại `make_shorts.py`** khi thiếu video 1 giờ: nó lọc theo `out/<id> … 1 Hour.mp4` ⇒ ghi đè `src/shortsG.json` thành rỗng.
- Render lại 1 Short: cắt hook tay từ `batch4/audio/<id> <title>.mp3` tại `hookStart` trong `shortsG.json` (20 s, afade in 0,4 / out 1,5) → `public/hookG/<id>.wav` → `npx remotion render src/index.ts ShortG-<id> …` = **28 s** (G01-1). Bản không tiếng: `ffmpeg -an -c:v copy`.
- Short = ảnh tĩnh + zoom 1,06→1,2 + lia ngang (`ShortG.tsx:20-21`) + gradient + chữ + FlowWaves; **không** có bokeh/mưa (chỉ video 1 giờ có).
- 🟠 Ảnh Flow tải về 1376×768 (16:9) ⇒ cắt 9:16 còn ~432×768, phóng ~2,5× lên 1080×1920 ⇒ Short hơi mềm. Cần ảnh dọc 9:16 riêng cho Short hoặc ảnh 2K.
- 08/11 15:21: chuyển `FIRE10.DEV/MusicMaker` → `~/Projects/FIRE10.DEV/REPO/MusicMaker`, để symlink ở chỗ cũ vì `hub.db` của tiktok-affiliate-auto lưu đường dẫn tuyệt đối (`meta.media_roots`, `shot.*_path`, `batch.folder`); `media.safe()` resolve() cả 2 phía nên vẫn khớp. Default `HUB_MUSIC_DIR` trong `hub/db.py` đổi thành `ROOT.parent / "MusicMaker"`. Bỏ symlink chỉ sau khi rewrite path trong hub.db. (09/11: hub đã gỡ, repo tiktok-affiliate-auto đã xoá khỏi máy → symlink không còn cần cho hub.)
- 08/11 15:40: repo có quy trình commit (CLAUDE.md): cập nhật `HANDOFF.md` → `python3 -I tools/redact.py sync` (MEGABRAIN → `docs/megabrain/`, theo `MANIFEST`, đã lọc email/tên acc/SSH key/`/Users/<tên>`/link project Flow) → `redact.py check` phải OK (chặn credential + file > 1 MB). Thông tin riêng → `local/PRIVATE.md` + `local/redact.txt` (gitignored). `docs/pipeline-notes.md` bỏ, thay bằng `docs/megabrain/ai-video/research/<file này>`.
- 08/11 16:10: agent tự tạo nhạc pack 04–05 qua Claude in Chrome. Có 2 Chrome kết nối; phiên Flow Music đăng nhập chỉ ở 1 cái → `list_connected_browsers` + `select_browser` (tab Browser khác thấy "Log in"). Gửi prompt vào session cũ "Night Coding Synthwave" (ô "Ask Producer", `find` lấy ref; click toạ độ ở New session dễ trúng thẻ gợi ý). Credit 05/11 hết đã hồi. Tải không cần UI: `/song/<id>` trong DOM → `storage.googleapis.com/producer-app-public/clips/<id>.m4a` (mp3 404) → ffmpeg libmp3lame 192k → `batch4/audio/<id> <title>.mp3`. Bài ngắn bất thường: G04-1 107 s, G04-2 123 s, G04-4 85 s (pack 1–3: 157–182 s).

## Phiên 08/11/2026 16:00 — tags P01 + related Short G01-1
- Browser pane của app và Chrome "Browser 3" đăng nhập tài khoản khác ⇒ Studio kênh báo 403 / "Rất tiếc, bạn không có quyền". Profile đúng lần này là "Browser 1" (tên/ID đổi theo lần kết nối) ⇒ `list_connected_browsers`, chọn thử, mở `studio.youtube.com/channel/<id>/videos` kiểm tên kênh trước khi làm.
- Tags ở trang edit chỉ hiện sau "Hiện chế độ cài đặt nâng cao" (`#toggle-button`); click ô "Thẻ (từ khóa)" rồi gõ 10 tag cách dấu phẩy (kết thúc bằng dấu phẩy) ⇒ 10 chip, Lưu, reload kiểm `#tags-container ytcp-chip`.
- Hộp "Chọn một video cụ thể": gõ tìm kiếm có lúc không vào ô, nhưng video công khai hiện sẵn trong lưới ⇒ chọn thẻ trực tiếp, đọc lại nút "Video có liên quan <tên>" trước khi Lưu.
- Máy này không có `local/` ⇒ `redact.py check` thiếu danh sách tên cần lọc (lần sync đầu lọt tên kênh cá nhân — đã revert; 08/11 tạo lại `local/redact.txt`). 🟠 MEGABRAIN máy này từng **cũ hơn** `docs/megabrain` trong repo (thiếu mục 04–08/11): `sync` ghi đè ngược. Trước khi sync: `git diff` thư mục `docs/megabrain` sau sync, thấy mất dòng thì dừng.

## Đăng G04–G05 bằng browser pane — 2026-11-09
- 10 video 1 giờ pack 04–05 lên lịch 15/11 20:00 → 20/11 10:00 (ID `MusicMaker/batch4/schedule_log.md`). `make_posts.py "15/11/2026 20:00"` nhận slot đầu + ghi file riêng `youtube_posts_batch4_<đầu>_<cuối>.md` (không ghi đè file G01–G03).
- Upload tuần tự (~1,6 GB/video, ~3 phút/video); điền ngay bản đã tải 100% qua bút chì ở bảng tiến độ, không chờ cả lô. ~2 phút/video.
- JS cài trên trang (`B4` dữ liệu, `b4open` điền + playlist + mở lịch, `b4done` kiểm ngày/giờ rồi bấm Lên lịch → "Đã hiểu" → đóng hộp).
  - Tags: `insertText("a,…,")` để chữ nằm trong ô, **chưa thành chip** ⇒ dispatch `keydown Enter` (JS) → 10 chip.
  - Ngày: `insertText("20 thg 11, 2026")` vào input của date picker, rồi **phím Enter thật** (`computer key Return`); Enter giả bằng JS không ăn.
  - Giờ: focus input + đặt con trỏ cuối (JS) → Backspace ×8 → gõ "10:00" → Enter (phím thật). `cmd+a` + gõ ra "10:10" (sai); `insertText` bị reset 00:00.
  - Múi giờ mặc định đã là "(GMT+0700) Giờ địa phương" ⇒ không cần đổi.
  - Mở lịch: `#second-container-expand-button`; click toạ độ không ăn.
  - Hộp sau khi Lên lịch: "Đã lên lịch cho video" hoặc "Xử lý video" (video chưa xử lý xong) — đóng bằng `ytcp-button#close-button`, không đụng icon "Sao chép đường liên kết". `offsetParent` của hộp vẫn khác null sau khi đóng ⇒ kiểm bằng screenshot.
  - ID video: `udvid=` trên URL khi hộp mở (không cần nút copy).
- Lặp lại gotcha 07/11: hộp mở chậm (G04-2) ⇒ selectAll chọn cả trang, playlist dialog rỗng ⇒ đóng dialog, bỏ chọn, điền lại. Video cuối (G04-1) chờ thêm 6 s là ổn.
- Thumbnail chưa đặt (pane không upload file) — user tự tải `batch4/out/<id> <title> thumbnail.jpg`.

### Thumbnail bằng Claude in Chrome — 2026-11-09
- Browser pane (built-in) KHÔNG upload file được; Claude in Chrome có `file_upload` → dùng nó cho thumbnail.
- Chọn đúng Chrome: `list_connected_browsers` → mở Studio kênh; trang "Rất tiếc, bạn không có quyền" = sai profile → `select_browser` cái khác (09/11 là "Browser 1").
- Mỗi video: `studio.youtube.com/video/<ID>/edit` → chờ `#title-textarea #textbox` + `input#file-loader` → `find` lấy ref file input → `file_upload` jpg (<2 MB) → click `ytcp-button#save` (aria-disabled false→true = đã lưu, toast "Đã lưu thay đổi").
- Trang có khi load chậm: `find` báo không thấy input → chờ thêm vài giây rồi `find` lại.

## Phiên 11/11/2026 10:10 — related video bằng 1 lệnh JS + Data API
- Related video 6 Short (G01-2 → G02-2) gắn trong ~2 phút: mỗi Short 1 `navigate` + 1 `javascript_exec`, không cần screenshot:
  nhãn lá "Video có liên quan" → `closest('ytcp-dropdown-trigger').click()` → chờ (≤10 s) phần tử lá có text bắt đầu bằng tên video 1 giờ và `offsetParent` khác null → click
  → đọc `document.body.innerText` khớp `/Video có liên quan\s*\n?.{0,50}/` (phải chứa tên) → `#save.click()` → `aria-disabled="true"` = đã lưu. Reload kiểm lại vẫn giữ.
  Không có nút `<button>` nào chứa chữ "Video có liên quan"; dùng `ytcp-dropdown-trigger`.
- Browser pane vs Android: app YouTube Studio Android có, nhưng điều khiển bằng adb/scrcpy phải chụp màn hình từng bước ⇒ tốn token hơn Claude in Chrome (đọc DOM + JS).
- YouTube Data API v3 (đọc docs 11/11): upload (`videos.insert`), title/mô tả/tag, `publishAt` (chỉ khi `privacyStatus=private` và chưa từng công khai), `containsSyntheticMedia`, `selfDeclaredMadeForKids`, thumbnail làm được;
  **không có trường related video cho Short** ⇒ bước này vẫn phải Studio. Cần OAuth client Desktop (user tạo). `[!assumption]` hạn chế project chưa audit (video private) — docs hiện tại có vẻ đã bỏ, chưa thử thật.
- Render lại pack 04–05: mp4 1 giờ đã bị dọn sau khi upload ⇒ `make_shorts.py`/`make_mix.py` cần mp4 1 giờ ⇒ chạy lại `render_1h.sh` (~4 phút/bài). Máy mất `shorts/node_modules` ⇒ `npm ci` trước (lỗi "could not determine executable to run").
  Script sửa: `make_shorts.py` giữ mục cũ trong `shortsG.json`; `render_shorts.sh [ids]`; `make_posts_extra.py [pack#]` ghi file riêng `_P04-05.md` (không ghi đè nội dung pack 1–3 đã đăng).
