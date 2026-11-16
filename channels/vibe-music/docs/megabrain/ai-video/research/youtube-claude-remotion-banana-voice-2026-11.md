---
title: Quy trình làm video YouTube bằng AI — Nano Banana/Flow (hình) + Remotion (dựng) + Claude (điều phối) + giọng đọc
tags: [ai-video, research, youtube, remotion, claude-code, nano-banana, google-flow, tts, elevenlabs, gemini-tts, vieneu-tts, policy]
status: research
audience: both
created: 2026-11-07 21:55
updated: 2026-11-07
as_of: 2026-11-07
---

# YouTube bằng AI: Banana/Flow + Remotion + Claude + giọng đọc

> [!summary] Nghiên cứu web 2026-11-07 (1 vòng, ~11 truy vấn, chưa test gì mới).
> 1. Cộng đồng AI dùng gần như một khuôn: **Claude viết kịch bản + storyboard JSON → tạo giọng TRƯỚC (có timestamp) →
>    độ dài giọng quyết định độ dài cảnh → Remotion đọc JSON render → phụ đề từ timestamp → upload + nhãn AI**.
>    Ảnh (Nano Banana) và clip (Veo/Omni) chỉ là asset đổ vào cảnh.
> 2. **Flow không có API** (không nguồn nào nói có). Tự động hoàn toàn ⇒ đi **Gemini API** (trả tiền theo ảnh/giây);
>    dùng Flow ⇒ giữ cách Chrome agent đang làm (rẻ, nhưng chậm, dễ dừng — xem [[pipeline-v3-diem-dung]]).
> 3. Giọng: **tiếng Anh → ElevenLabs** (gần như mọi nguồn xếp số 1, có endpoint trả timestamp, Remotion có hàm đổi ra phụ đề).
>    **Tiếng Việt → chưa có người thắng rõ**: nghe thử cùng 1 đoạn trên Gemini TTS, Azure, ElevenLabs v3, VieNeu-TTS (local, free).
>    **Quyết định 2026-11-07: kênh tiếng Anh ⇒ ElevenLabs, tối thiểu gói Starter (có license thương mại)** — mục 3.2.
> 4. Remotion dùng **miễn phí** cho cá nhân / công ty ≤3 người. Máy đã có sẵn 2 dự án Remotion chạy được
>    (`FIRE10.DEV/REPO/MusicMaker/shorts`, `~/Projects/video-kit`) → không cần làm từ đầu.

Nhãn: **[chính thức]** = Google/Remotion/YouTube docs · **[cộng đồng]** = blog, vendor, 1 tác giả, chưa ai đo.
Không lặp lại phần đã có: Claude Motion, Remotion cơ bản, Higgsfield → [[claude-video-tools-2026-10]];
prompt Omni/Banana → [[omni-banana-prompting-2026-10]]; chính sách YouTube nhạc AI → [[youtube-loop-music-pipeline-2026-10]].

## 1. Khuôn quy trình mà cộng đồng đang dùng

| # | Bước | Ai làm | Ra file | Ghi chú |
|---|---|---|---|---|
| 1 | Ý tưởng + kịch bản | Claude | `script.md` | Tách nhiều lượt (outline → từng đoạn → sửa) tốt hơn 1 lượt [cộng đồng: MindStudio]. Người thật sửa trước khi làm tiếp [cộng đồng: ComputeLeap] |
| 2 | Storyboard | Claude | `storyboard.json` | Mỗi cảnh: lời đọc, loại hình (ảnh / clip / chữ / chart), prompt asset, hiệu ứng |
| 3 | **Giọng đọc** | TTS API | `voice/scene-NN.mp3` + `*.json` timestamp | 1 file/cảnh ⇒ sửa 1 câu không phải làm lại cả bài [cộng đồng: PR SinceAI_2026_Valmet] |
| 4 | Đo độ dài | script | ghi `durationInFrames` vào JSON | **Âm thanh quyết định nhịp**, không ước lượng |
| 5 | Asset hình | Nano Banana (ảnh), Veo/Omni (clip) | `public/assets/` | Ảnh nhân vật làm tham chiếu cho Veo "Ingredients" để giữ mặt [chính thức: blog Google Veo 3.1] |
| 6 | Dựng | Claude viết TSX, Remotion render | `out/*.mp4` | Skill chính thức: `npx skills add remotion-dev/skills` [chính thức] |
| 7 | Phụ đề | từ timestamp bước 3 | burn-in + `.srt` | Gom theo cụm 3–5 chữ, không hiện từng chữ một (khó đọc) [cộng đồng: QuestStudio] |
| 8 | Thumbnail | Nano Banana | `thumb.jpg` | Nano Banana 2 làm thumbnail được nếu có ảnh tham chiếu tốt [cộng đồng: wonderingaboutai] |
| 9 | Upload | người / Studio | — | Bật nhãn AI khi có hình chân thật (mục 5). Chrome extension không upload được file >10 MB (đã gặp) |

Vai trò Claude = **người điều phối giữ file**, không phải "1 prompt ra video". Nguồn thất bại đáng đọc:
một người dựng pipeline hậu kỳ bằng Claude Code (Puppeteer + FFmpeg + Nano Banana 2) và kết luận AI video chưa đủ cho
sản xuất, chỉ thumbnail là dùng được [cộng đồng: wonderingaboutai.substack.com].

### Repo mẫu (chưa clone, chưa quét)
- `hassancs91/claude-faceless-shorts-creator` — Shorts không mặt: Remotion TSX + ElevenLabs + phụ đề khớp từ + kho SFX, 12 short mẫu.
- `JhontyBarreto/video-editing-skill` — skill Claude Code: kịch bản → ElevenLabs timestamp → Remotion → QA.
- Áp đúng cách đã làm với video-shotcraft: **chỉ lấy nguyên liệu, quét trước, không cài SKILL.md của họ**.

## 2. Hình & asset: Flow (tay/Chrome) hay Gemini API (tự động)

| | Google Flow (web) | Gemini API |
|---|---|---|
| Tự động | ❌ không có API; chỉ qua Chrome agent | ✅ gọi từ script/Claude |
| Ảnh | Nano Banana 2.1 trong Flow: **0 credit** (đã đo 04/11, [[miu-may-koc-pipeline-gaps]]) | Nano Banana 2: ~$0,067/ảnh 1K, ~$0,101 2K · Pro: ~$0,134 1K–2K, $0,24 4K · batch ≈ ½ giá [cộng đồng: benchlm, myarchitectai — chưa mở trang Google] |
| Clip | Omni Flash 720p 10 s = 15 credit; free 50 credit/ngày (đã đo) · Veo 3.1 Fast 20 credit/8 s, Quality 100 [cộng đồng] | Veo 3.1: $0,40/s (720p–1080p) ⇒ ~$3,2/clip 8 s · Fast $0,10–0,12/s ⇒ ~$1/clip [cộng đồng: benchlm trích trang Google 2026-09-11] |
| Giữ nhân vật | Tính năng "Nhân vật" + Ingredients | Truyền ảnh tham chiếu |

Kết luận: **ảnh → Flow (free) hoặc API Nano Banana 2 (rẻ, ~1.600 đ/ảnh)**; clip AI đắt và dễ hỏng ⇒ chỉ dùng cho
vài cảnh "đinh". Phần lớn video giải thích dựng được bằng **ảnh tĩnh + chuyển động Remotion** (zoom, pan, parallax, chữ, chart).

### 2.1 Test thật AI Studio (2026-11-07 21:55, built-in browser, tài khoản acc u/7, gói Google AI Pro)
- `[!verified]` Trang Rate Limit (project "Default Gemini Project"): **Free tier**. Gói AI Pro (gói tiêu dùng) **không nâng tier API**.
- `[!verified]` Mọi model ảnh qua API có limit **0/0** ở free tier: Nano Banana (2.5), Nano Banana 2, 2 Lite, Pro, **Nano Banana 2.1**; Omni 1.1/1.2 Flash, Lyria 3 cũng 0/0
  ⇒ **muốn Claude gọi API tạo ảnh phải bật billing** (trả theo ảnh, mục 2).
- `[!verified]` TTS free tier: Gemini 2.5 Flash TTS / 3.1 Flash TTS / 3.8 Flash TTS / 3.8 Flash Lite TTS = **3 RPM, 10K TPM, 10 request/ngày** ⇒ không đủ đọc một video (cần nhiều đoạn).
  Text: Gemini 3.8 Flash 5 RPM / 20 RPD; 3.1 & 3.5 Flash Lite 15 RPM / 500 RPD.
- `[!verified]` **Playground (giao diện web) vẫn tạo được ảnh khi chưa chọn API key**: Nano Banana 2.1, 1K, Auto → ra **1376×768** (16:9) sau ~25 s, prompt màu nước Bạch Đằng.
  Mặc định bật Grounding with Google Search. Hạn mức playground **không hiện** trên trang Rate Limit — chưa biết trần/ngày.
  Có popup "Save conversations in Google Drive" → đã bấm Cancel (Temporary chat), không bật Drive.
- ⇒ 3 cách lấy ảnh: (1) Flow — Nano Banana 2.1 0 credit, (2) AI Studio playground — free, làm tay/Chrome agent, (3) API — trả tiền, tự động hoàn toàn.

## 3. Giọng đọc

### 3.1 Bảng chọn
| Lựa chọn | Tiếng Anh | Tiếng Việt | Timestamp cho phụ đề | Giá (tham khảo, chưa kiểm trang chính) |
|---|---|---|---|---|
| **ElevenLabs** (v3 / Multilingual v2) | ★★★ dẫn đầu độ tự nhiên | có (70+ ngôn ngữ), chất lượng ngôn ngữ ít dữ liệu "mỏng hơn" | ✅ endpoint `with-timestamps` (theo ký tự) + Forced Alignment + Scribe STT; Remotion có `elevenLabsTranscriptToCaptions()` [chính thức Remotion] | Creator ~$22/tháng ≈ 100 phút [cộng đồng, số lệch giữa nguồn] |
| **Gemini TTS** (2.5 Flash / 3.1 Flash) | ★★ | ★★–★★★ "gần ngang" EN theo 1 review | ❌ `[!assumption]` không trả timestamp → căn bằng Whisper | ~$10 / 1M token audio ra [cộng đồng] — rẻ nhất nhóm thương mại |
| **Azure Neural TTS** (vi-VN) | ★★ | 1 bảng so sánh chấm cao nhất cho VN (9,5 vs 8,5 Gemini, 8 ElevenLabs) — 1 nguồn, không đo kỹ | `[!assumption]` có sự kiện WordBoundary trong SDK | chưa tra |
| **VieNeu-TTS v3 Turbo** (open source) | — | ✅ chuyên tiếng Việt, clone giọng từ 3–5 s, chạy CPU, 48 kHz | ❌ → Whisper | 0 đ, chạy local. **v4 đóng mã** (lo lạm dụng clone) [github pnnbao97/VieNeu-TTS] |
| Kokoro / Fish Audio S2 | ★★ | Kokoro không có VN; Fish 80+ ngôn ngữ nhưng thương mại phải trả | ❌ | — |
| FPT.AI / Viettel AI / Zalo | — | 🟡 **chưa tìm được nguồn** trong vòng này | — | — |

### 3.2 Quyết định (user 2026-11-07 21:45): **kênh tiếng Anh → ElevenLabs**
- Gói [chính thức: elevenlabs.io/pricing, đọc qua kết quả tìm kiếm 2026-11-07]:
  Free 10k credit, **không license thương mại** ⇒ không dùng cho kênh kiếm tiền ·
  **Starter $6/tháng, 30k credit, có license thương mại + clone giọng nhanh** ·
  Creator $22, 121k credit, clone giọng chuyên nghiệp · Pro $99, 600k credit, PCM 44,1 kHz qua API.
  Credit dùng chung mọi sản phẩm (giọng, SFX, nhạc). ~1 credit/ký tự với model chất lượng cao ⇒ Starter ≈ 30 phút giọng/tháng `[!assumption]`.
  🟡 Một trang nói API tính tiền USD riêng, không trừ credit — chưa rõ, kiểm khi tạo key.
- API timestamp [chính thức: elevenlabs.io/docs/api-reference/text-to-speech/convert-with-timestamps]:
  `POST /v1/text-to-speech/{voice_id}/with-timestamps` → `audio_base64` + `alignment`
  (`characters`, `character_start_times_seconds`, `character_end_times_seconds`) + `normalized_alignment`.
  Có bản stream; có Forced Alignment cho audio đã có sẵn.
- Phụ đề: gom ký tự → từ → cụm 3–5 chữ trong script, hoặc Scribe STT + `elevenLabsTranscriptToCaptions()` của Remotion.

### 3.4 Giọng free hay mua? (hỏi 2026-11-07 21:53, kênh lịch sử VN + ĐNÁ, user không giỏi tiếng Anh)
| Lựa chọn | Giá | Được kiếm tiền? | Chất lượng EN | Ghi chú |
|---|---|---|---|---|
| ElevenLabs Free | 0 | ❌ chỉ phi thương mại + ghi công [chính thức: elevenlabs docs billing] | ★★★ | 🔴 Audio làm lúc free **không thành thương mại khi nâng gói sau** (đa số nguồn; 1 nguồn khác) ⇒ chỉ dùng để nghe thử |
| **ElevenLabs Starter** | $6/tháng | ✅ | ★★★ | 30k credit ≈ 3 video 10 phút (~9k ký tự/video) `[!assumption]` 1 credit/ký tự; Creator $22 khi đăng hằng tuần |
| Kokoro-82M (local) | 0 | ✅ Apache-2.0 (model card HF) | ★★ | Chạy CPU trên Mac, không clone giọng; chưa có test đối chứng cho đọc dài [cộng đồng] |
| Chatterbox (local) | 0 | ✅ MIT [cộng đồng] | ★★–★★★ | Có cảm xúc + clone, cần GPU, có watermark ẩn |
| Gemini TTS free tier | 0 | 🟡 không rõ | ★★ | Free tier: Google dùng dữ liệu để cải thiện SP; 2.5 Flash TTS có thể không có free tier (nguồn lệch) |
| edge-tts (giọng Edge Read Aloud) | 0 | 🔴 dùng không chính thức | ★★ | Không dùng cho kênh kiếm tiền |
- **Đề xuất: mua ElevenLabs Starter $6 ngay từ video đầu**: không tự đánh giá được tiếng Anh ⇒ chọn giọng được nhiều nguồn xếp số 1;
  audio làm bằng gói free không kiếm tiền được kể cả sau này; có timestamp cho phụ đề.
  Kokoro = phương án dự phòng 0 đ.
- Riêng ngách này: tên riêng tiếng Việt (Trần Hưng Đạo, Lý Thường Kiệt, Đại Việt) TTS tiếng Anh đọc sai ⇒ cần bảng phát âm
  (viết lại theo âm, vd. "Tran Hung Dao" → "Chun Hoong Dow") `[!assumption]` ElevenLabs có pronunciation dictionary — chưa kiểm doc.

### 3.3 Đề xuất chung (giữ lại để tham khảo khi làm kênh tiếng Việt)
- **Kênh tiếng Anh**: ElevenLabs, chọn 1 giọng cố định cho cả kênh, ghi `voice_id` vào config.
- **Kênh tiếng Việt**: làm bài nghe thử 60 s cùng một đoạn trên 4 lựa chọn (Gemini, Azure, ElevenLabs v3, VieNeu) → chọn bằng tai.
  Đo thêm: đọc đúng số/tên riêng/từ mượn tiếng Anh, giọng Bắc/Nam có giữ được không.
- Engine không trả timestamp ⇒ chạy **Whisper (local) căn phụ đề trên file mp3** — vì đã có lời gốc, chỉ cần căn thời gian.
- Rút kinh nghiệm Muse/Veo: giọng sinh trong clip **đổi giữa các clip** ([[muse-ai-video-doc-phim-2026-10]]) ⇒ video thuyết minh
  luôn dùng **1 track TTS riêng, tắt tiếng clip**.
- Clone giọng: chỉ clone **giọng của chính mình** hoặc người đã đồng ý bằng văn bản; clone người thật ⇒ phải bật nhãn (mục 5).

## 4. Remotion: license và chỗ dùng lại
- Miễn phí: cá nhân + tổ chức vì lợi nhuận ≤3 nhân viên. ≥4 người: Company License (theo seat, giá các nguồn lệch:
  $25/seat/tháng, tối thiểu $100/tháng…) [chính thức: remotion.dev/docs/license; giá: cộng đồng].
  FIRE10 làm cá nhân ⇒ free `[!assumption]` nếu không chạy dưới danh nghĩa công ty.
- Đã có trên máy:
  - `FIRE10.DEV/REPO/MusicMaker/shorts/` — Remotion Shorts nhạc (Visualizer, render hàng loạt, `render_all.sh`).
  - `~/Projects/video-kit/` — template 16:9 + affiliate 9:16 từ JSON, full HD render 17 s ([[claude-video-tools-2026-10]]).
  ⇒ video YouTube giải thích = thêm 1 composition "cảnh = ảnh + chữ + giọng" đọc `storyboard.json`.

## 5. Chính sách YouTube liên quan
- Nhãn "altered or synthetic": bắt buộc khi hình/âm **chân thật có thể bị nhầm là thật**. Giọng TTS rõ là máy, không nhại ai
  thường **không** cần; clone giọng người thật thì cần [cộng đồng: air.io; trang chính thức: support.google.com/youtube/answer/14328491].
- YouTube tự gắn nhãn AI cho nội dung chân thật (đã thấy trên kênh nhạc 28/10; 1 nguồn nói chính thức từ 27/5/2026) — nhãn tự gắn không gỡ được.
- Nhãn AI **không** ảnh hưởng kiếm tiền; rủi ro thật là **inauthentic content** (template hàng loạt, giọng chung chung đè lên
  footage tái sử dụng) — xét cả kênh [chính thức: answer/1311392]. ⇒ mỗi video phải có ý/nội dung riêng, không chỉ đổi chữ.

## 6. Khoảng trống (chưa làm vòng này)
- 🟡 Chưa mở trang giá chính thức: ai.google.dev/pricing (Nano Banana, Veo, Gemini TTS), elevenlabs.io/pricing, remotion.dev/pricing.
- 🟡 Chưa xác nhận Gemini TTS có tiếng Việt trong danh sách ngôn ngữ chính thức, có/không trả timestamp.
- 🟡 Chưa tra FPT.AI, Viettel AI, Zalo TTS; chưa nghe thử bất kỳ giọng nào.
- 🟡 Không có case study kênh thật có số liệu (bài "$41k/tháng" là quảng cáo, bỏ qua).
- 🟡 2 repo mẫu mục 1 chưa clone, chưa quét.
