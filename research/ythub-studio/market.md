Dưới đây là bản nghiên cứu thị trường toàn diện và thiết kế chi tiết nhằm nâng cấp **YT Hub** thành một **Studio sản xuất YouTube toàn diện cho 1 người + AI**, đáp ứng đầy đủ các yêu cầu và giải quyết các bài toán kiến trúc thực tế.

---

# PHẦN 1: BÁO CÁO NGHIÊN CỨU THỊ TRƯỜNG

## 1. Top Repo Open-Source Tạo Video Bằng Code / AI

### [Remotion](https://github.com/remotion-dev/remotion)
* **License**: Custom Source-Available (Miễn phí 100% cho cá nhân và nhóm dưới 4 người; công ty $\ge 4$ nhân viên phải mua Company License).
* **Điểm hay đáng học**:
  * **Video as React Components**: Thời gian được lượng hóa bằng frame (`useCurrentFrame()`, `useVideoConfig()`).
  * **Composition Architecture**: Cho phép bóc tách video thành các component lồng nhau (`<Sequence>`, `<Series>`, `<Composition>`), truyền tham số linh hoạt qua `defaultProps` / `inputProps`.
  * **Remotion Studio (`npx remotion studio`)**: Bộ preview player mượt mà với timeline scrubber, live re-render khi file thay đổi, inspect component props ngay trên giao diện web.
* **Cấu trúc Project / Metadata**:
  * `src/Root.tsx`: Đăng ký danh sách Compositions (id, component, durationInFrames, fps, width, height, schema Zod).
  * Props data thường là JSON schema định nghĩa các layer (text, audio, image paths, transition timing).

### [HyperFrames](https://github.com/heygen-com/hyperframes) (HeyGen)
* **License**: Apache 2.0.
* **Điểm hay đáng học**:
  * **Agent-Native Framework**: Thiết kế từ đầu để các AI coding agent (Claude Code, Codex, Agy) dễ sinh mã nhất, sử dụng HTML/CSS/JS thuần hoặc GSAP/Canvas thay vì đòi hỏi các framework phức tạp.
  * **Deterministic MP4 Rendering**: Cơ chế render frame-accurate đảm bảo agent sinh code đến đâu là render ra video chuẩn xác từng frame đến đó.
  * **Interactive Preview**: Lệnh `npx hyperframes preview` mở browser canvas cho phép soi từng frame và can thiệp thủ công nhanh chóng.
* **Cấu trúc Project / Metadata**:
  * File HTML/JS/CSS độc lập hoặc component module hoá miêu tả timeline chuyển động của từng phân cảnh (scenes).

### [Motion Canvas](https://github.com/motion-canvas/motion-canvas)
* **License**: MIT.
* **Điểm hay đáng học**:
  * **Generator-based Timing**: Sử dụng TypeScript generator functions (`yield* all(...)`, `yield* waitFor(...)`) giúp việc code các chuyển động nối tiếp hoặc song song cực kỳ tự nhiên, thích hợp làm video giải thích/giáo dục hoặc đồ họa hoạt hình.
  * Timeline editor tích hợp sẵn chế độ Presentation & Video Editor với khả năng kéo thả keyframe và âm thanh trực tiếp trên trình duyệt.
* **Cấu trúc Project / Metadata**:
  * `src/scenes/*.tsx`: Mỗi cảnh là một hàm generator quản lý scene graph canvas. Có file `project.ts` khai báo kích thước và thứ tự scene.

### [Revideo](https://github.com/midrender/revideo) (trước đây là `redotvideo/revideo`)
* **License**: MIT.
* **Điểm hay đáng học**:
  * Fork và cải tiến từ Motion Canvas nhưng tối ưu hóa hoàn toàn cho **server-side rendering và AI automation pipelines**.
  * Tích hợp sẵn Headless Renderer API và Audio Analysis module, rất hợp để kết nối với script TTS tự động.
* **Cấu trúc Project / Metadata**:
  * Cấu trúc TS/Vite tương tự Motion Canvas với các Scene generator, export `makeProject`.

### [OpenCut](https://github.com/OpenCut-app/OpenCut)
* **License**: MIT.
* **Điểm hay đáng học**:
  * Bản clone CapCut mã nguồn mở, chạy local-first (Web/Desktop qua Rust + WebAssembly + Canvas/WebGPU).
  * Cách tổ chức multi-track timeline (video, audio, text overlay, keyframe) độc lập, không phụ thuộc cloud.
* **Cấu trúc Project / Metadata**:
  * Quản lý timeline dưới dạng schema multi-track JSON thuần: danh sách Track $\to$ danh sách Clip (start, duration, speed, transform, effects).

### [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)
* **License**: MIT.
* **Điểm hay đáng học**:
  * Chuỗi khép kín hoàn chỉnh từ ý tưởng $\to$ thành phẩm: LLM viết script $\to$ TTS sinh giọng đọc $\to$ bóc tách keyword tìm b-roll (Pexels) $\to$ đồng bộ subtitle $\to$ ghép BGM $\to$ render.
  * Cung cấp WebUI (Streamlit) lẫn REST API, hỗ trợ người dùng xem và sửa lại từng clip b-roll trước khi render video cuối.
* **Cấu trúc Project / Metadata**:
  * State lưu qua JSON payload: `{ video_subject, video_script, voice_name, bgm_type, subtitle_path, materials: [{ type, url, start, end }] }`.

### [ShortGPT](https://github.com/RayVentura/ShortGPT)
* **License**: MIT.
* **Điểm hay đáng học**:
  * Kiến trúc hướng đối tượng cho Video Engine trên Python (`MoviePy` + `FFmpeg`).
  * Module hóa các Engine riêng biệt: `ContentTranslationEngine`, `AudioEngine` (hỗ trợ EdgeTTS / ElevenLabs), `FactShortsEngine`.
* **Cấu trúc Project / Metadata**:
  * Python pipeline config dict chứa timeline các layers và style template JSON (font, shadow, animation types).

### [NarratoAI](https://github.com/linyqh/NarratoAI)
* **License**: GPL-3.0 / MIT.
* **Điểm hay đáng học**:
  * Chuyên môn hóa cho định dạng **Review / Tóm tắt phim**: Tự phân tích video nguồn $\to$ LLM viết bài thuyết minh $\to$ cắt video khớp với từng đoạn tóm tắt $\to$ lồng tiếng + phụ đề.
* **Cấu trúc Project / Metadata**:
  * Mỗi project lưu trong folder riêng gồm: `raw_video/`, `script.json` (từng câu kèm timestamp dự kiến), `audio_segments/`, `subtitles.srt`.

### [short-video-maker](https://github.com/gyoridavid/short-video-maker) & Hệ sinh thái Tự động hóa
* **License**: MIT.
* **Điểm hay đáng học**:
  * Hỗ trợ giao thức **MCP (Model Context Protocol)**, cho phép AI Agent kích hoạt trực tiếp các hàm tạo video, tạo giọng đọc qua tool call.
  * Ngoài ra, các repo như [pyJianYingDraft / capcut-cli](https://github.com/renezander030/capcut-cli) bóc tách cấu trúc file `draft_content.json` của CapCut/JianYing: cho phép code Python sinh ra project CapCut để mở bằng app desktop chính thức chỉnh sửa lần cuối.

---

## 2. Sản phẩm Thương mại: Bài học Kiến trúc & Trải nghiệm

| Sản phẩm | Điểm hay đáng học cho Studio 1 người + AI | Mô hình Dữ liệu / Metadata | Bản quyền / Giá |
|---|---|---|---|
| **[Descript](https://www.descript.com)** | **Script-driven Editing**: Xóa từ trong văn bản = tự cắt timeline video/audio tương ứng. B-roll gắn neo (anchor) vào từng đoạn text. Nhận diện và xóa từ ậm ừ (filler words) 1 chạm. | Cấu trúc phân cấp: *Drive $\to$ Project $\to$ Composition $\to$ Scene $\to$ Layers*. Script transcript liên kết chặt với timestamp theo từng từ (word-level alignment). | SaaS freemium, proprietary |
| **[Opus Clip](https://www.opus.pro)** | **Virality Score (0–99)**: Thuật toán AI phân tích độ cuốn của Hook, nhịp điệu (Flow), giá trị cảm xúc. AI tự động sinh giải thích vì sao clip này dễ viral + gợi ý tiêu đề short. | Metadata phân tích: `{ virality_score, hook_strength, key_topic, time_ranges, dynamic_captions_preset }`. | SaaS freemium, proprietary |
| **[InVideo AI](https://invideo.io)** | **Prompt-based Timeline Editing**: Khung chat cho phép gõ lệnh tự nhiên để sửa video (vd: *"Đổi clip cảnh 3 sang ảnh tư liệu cổ", "Làm giọng đọc phấn khích hơn", "Rút ngắn còn 45s"*). | Graph JSON quản trị toàn bộ track: Mỗi phân cảnh (scene) là 1 object gồm text, TTS prompt, visual asset URL, audio gain. | SaaS subscription |
| **[Pictory](https://pictory.ai)** | Bóc tách bài viết dài/kịch bản thành các storyboard scenes tự động. Tự động tìm kiếm stock video tương ứng theo từ khóa trong từng câu. | Storyboard scene array: `[{ sentence_id, text, matched_keywords[], stock_media_id, duration }]`. | SaaS subscription |
| **[CapCut](https://www.capcut.com)** | Kho template khổng lồ, auto-captions animation đa dạng. Tách nền video 1 click (cutout/chroma key). Tối ưu hóa render phần cứng cục bộ siêu nhanh. | File `draft_content.json` lưu mảng tracks (audio, video, sticker, filter) và materials (speeds, texts, transitions) với đơn vị microsecond. | Freemium / Pro |
| **[Runway](https://runwayml.com)** | Kiểm soát chuyển động AI (Motion Brush, Camera Control pan/tilt/zoom, Director Mode) biến ảnh tĩnh thành video động nhất quán. | Task-based async jobs: Nhận prompt/image $\to$ trả Job ID $\to$ Polling kết quả video MP4. | SaaS credits |
| **[Hedra](https://www.hedra.com)** | **Character-1 Video API**: Đồng bộ khẩu hình và biểu cảm gương mặt nhân vật theo giọng đọc (Talking Head) với độ phân giải cao và hỗ trợ MCP tool call. | API Request: `{ image_url, audio_url/text, aspect_ratio }` $\to$ trả video lip-sync. Hỗ trợ webhook và cost estimation. | SaaS API trả theo lượng dùng |
| **[Kapwing](https://www.kapwing.com)** | Smart Cut (tự động cắt khoảng lặng), Resize thông minh đa tỉ lệ (16:9 $\to$ 9:16), kho meme template cập nhật theo xu hướng. | JSON composition timeline: Quản lý layer dạng stack, gắn nhãn asset theo vai trò. | SaaS freemium |
| **[vidIQ](https://vidiq.com)** | **Daily Ideas & AI Coach**: Dự đoán tiềm năng view của chủ đề dựa trên kênh. SEO Score chấm điểm title/tag/description ngay lúc chuẩn bị đăng. | Channel profile metadata, keyword competitiveness score, outlier video tracking. | SaaS freemium |
| **[TubeBuddy](https://www.tubebuddy.com)** | **A/B Testing** thumbnail & tiêu đề thực tế trên YouTube. Bulk Processing: Sửa hàng loạt mô tả, end screens, cards cho 100 video cũ. | SEO Studio checklist, scheduled publish metadata, bulk update queues. | SaaS freemium |

---

## 3. Giải pháp Nhúng Agent CLI vào App Desktop

### [Claude Code CLI Stream-JSON](https://github.com/anthropics/claude-code)
* **Cơ chế**: Chạy `claude -p "<prompt>" --output-format stream-json --include-partial-messages --resume <session_id>`.
* **Định dạng dữ liệu**: Trả về từng dòng **Newline-Delimited JSON (NDJSON)**:
  * `{"type": "system", "subtype": "init", ...}`: Báo khởi động, nạp công cụ, context.
  * `{"type": "stream_event", "event": {"type": "content_block_delta", "delta": {"text": "..."}}}`: Token streaming thời gian thực.
  * `{"type": "assistant", ...}`: Trả message turn kèm token usage.
  * `{"type": "result", "subtype": "success", "cost_usd": 0.012, "duration_ms": 4500, "session_id": "..."}`: Tổng kết chi phí và ID phiên.
* **Đánh giá**: Rất dễ phân tích bằng Swift (`AsyncLineSequence`), hiển thị được chữ gõ ra mượt mà và lấy được con số chi phí `$ cost_usd` chính xác.

### [Agent Client Protocol (ACP)](https://github.com/agentclientprotocol/agent-client-protocol) (Chuẩn của Zed & JetBrains)
* **Cơ chế**: Tương tự như LSP (Language Server Protocol) nhưng dành cho Coding Agent. Giao tiếp qua **JSON-RPC 2.0** trên `stdio` (hoặc WebSocket).
* **Vòng đời chuẩn**: `initialize` $\to$ `session/new` $\to$ `session/prompt` $\to$ `session/update` $\to$ `tool/call` $\to$ `permission/request`.
* **Đánh giá**: Chuẩn mở chuẩn mực nhất để biến app thành Host IDE cho agent. Quản lý việc hỏi quyền người dùng (chấp nhận/từ chối chạy lệnh) cực kỳ bài bản.

### [Conductor](https://conductor.build)
* **Cơ chế**: Ứng dụng macOS quản lý nhiều phiên agent (Claude Code, Cursor, Codex). Điểm đột phá: **Mỗi agent chạy trên một Git Worktree riêng biệt**.
* **Bài học**: Tránh tình trạng 2 agent cùng ghi đè lên 1 file kịch bản hoặc mã nguồn. Sau khi agent làm xong mới merge lại nhánh chính.

### [Crystal](https://github.com/stravu/crystal) (nay là [Nimbalyst](https://nimbalyst.com)) & [Claude Squad](https://github.com/smtg-ai/claude-squad)
* **Cơ chế**: Quản lý nhiều phiên Claude Code chạy song song bằng `tmux` hoặc terminal wrapper, kết hợp tách nhánh theo tác vụ.
* **Bài học**: Chia vai cho các agent (vd: 1 agent chuyên sửa kịch bản, 1 agent chuyên viết code Remotion, 1 agent chuyên kiểm toán SEO).

### [Opcode / Claudia](https://github.com/winfunc/opcode)
* **Cơ chế**: Ứng dụng Desktop (Tauri + Bun) bọc ngoài Claude Code CLI, cung cấp giao diện quản lý danh sách session, custom persona agent và log streaming.
* **Bài học**: Cách render Markdown stream, tách khung chat prompt nhanh và quản lý danh sách session theo dự án.

---

## 4. Bảng Tổng Kết "Học Gì → Áp Vào Đâu"

| Nguồn tham khảo | Ý tưởng chắt lọc cốt lõi | Vị trí áp dụng trong YT Hub Studio |
|---|---|---|
| **Descript** | Script-driven timeline: sửa text trong kịch bản = tự cắt/ghép slot timeline. | Tab **Kịch bản & Slotting** (kết nối trực tiếp với `hub.json` slots). |
| **Opus Clip** | Chấm điểm Hook Score & Virality Score; AI giải thích lý do; gợi ý 3 phương án Hook. | Khâu **Brainstorm & Kịch bản** (Nút "Đánh giá Hook & Viral"). |
| **InVideo AI** | Hộp thoại Prompt sửa video tự nhiên (*"Đổi ảnh cảnh 2", "Thu ngắn đoạn này"*). | Tab **Dựng video** (Agent panel gửi lệnh can thiệp file config dựng). |
| **HeyGen HyperFrames** | Video bằng HTML/CSS/GSAP, render MP4 tất định, agent dễ sinh mã nhất. | Chuẩn render mới cho các kênh hoạt hình, infographic, baby sensory. |
| **Remotion** | Composition Props Zod schema + Web Studio preview timeline. | Engine render đồ họa phức tạp và trình preview live nhúng trong app. |
| **CapCut / OpenCut** | Cấu trúc track/materials tách biệt; khả năng xuất template CapCut dự phòng. | Format trung gian `timeline.json` cho phép fallback sang dựng thủ công. |
| **MoneyPrinterTurbo / NarratoAI** | Flow phân cảnh tự động: Script $\to$ TTS $\to$ Image Prompt $\to$ Align $\to$ Subtitle. | Pipeline chuẩn hóa đồng loạt cho 6 kênh. |
| **Claude Code stream-json** | Bắt sự kiện NDJSON trực tiếp: live stream text, tool use, bắt sự kiện `result` lấy `cost_usd`. | Engine điều phối Agent CLI bên dưới SwiftUI App. |
| **Zed ACP** | Chuẩn hóa handshake cấp quyền (User Confirmation Dialog) trước khi chạy lệnh phá hủy. | Lớp bảo vệ (Security guardrail) khi agent chạy lệnh render nặng hoặc upload. |
| **Conductor / Claude Squad** | Chạy session trên Git Worktree cô lập khi chạy nhiều video cùng lúc. | Kiến trúc Workspace Runner trong YT Hub. |
| **vidIQ & TubeBuddy** | SEO Studio checklist (điểm SEO 0-100), gợi ý thẻ tag theo kênh, A/B Testing thumbnail. | Tab **Phát hành & SEO** (trước khi ấn Upload YouTube API). |

---

# PHẦN 2: THIẾT KẾ KIẾN TRÚC YT HUB STUDIO

## 1. Phản Biện Thiết Kế Nháp Hiện Tại (Sai / Thiếu / Rủi Ro)

1. **Rủi ro rò rỉ tiến trình và xung đột Port khi chạy Preview dài hạn**:
   * *Nháp*: Chạy `npx remotion studio` hoặc `hyperframes preview` trong `WKWebView`.
   * *Sai lầm*: Remotion Studio hay HyperFrames preview là tiến trình Node/Vite ngốn nhiều RAM (thường đi kèm Puppeteer/Chromium). Nếu người dùng mở nhiều video cùng lúc, các process này sẽ đụng độ cổng port (3000, 3001...), gây tràn RAM máy Mac và rò rỉ tiến trình chạy ngầm khi đóng tab.
   * *Giải pháp*: Cần một **Port & Process Supervisor** trong Swift quản lý vòng đời (chỉ cho phép 1 server preview hoạt động, gán port động và tự động kill process khi chuyển video hoặc tắt app).
2. **"Swift không biết kênh nào" thông qua `studio.json` là abstraction quá lỏng**:
   * *Nháp*: Biến giao diện phụ thuộc hoàn toàn vào cấu hình lệnh shell trong `studio.json`.
   * *Sai lầm*: Thiếu validation schema. Nếu `studio.json` của một kênh khai báo sai biến (ví dụ `{script_path}` thay vì `{script}`), app sẽ sập hoặc chạy lệnh shell sai gây lỗi ngầm. Đồng thời việc chèn chuỗi trực tiếp vào `zsh -lc` mở ra lỗ hổng **Command Injection** nếu tên file hoặc mã video có khoảng trắng hoặc ký tự đặc biệt (`&`, `;`, `"`, `$`).
   * *Giải pháp*: Chuẩn hóa schema `studio.json` bằng Swift Decodable có validation; thực thi lệnh qua danh sách đối số trực tiếp (`Process.arguments = [...]`) thay vì ghép chuỗi shell thô.
3. **Mâu thuẫn "Nguồn sự thật" (Single Source of Truth) giữa SQLite và File Metadata**:
   * *Nháp*: Lưu song song SQLite `ythub.db`, file `meta.json`, và `hub.json`.
   * *Rủi ro*: Tình trạng lệch pha dữ liệu (Data Drift). Ví dụ: Agent sửa tiêu đề trong `meta.json` bằng CLI, nhưng SQLite không biết $\to$ App hiển thị tiêu đề cũ $\to$ Upload YouTube lại đọc từ SQLite ra tiêu đề sai.
   * *Giải pháp*: Quy định rõ ràng: **SQLite là Nguồn sự thật duy nhất về trạng thái điều phối** (Status, Stage, Task, Asset License). File `meta.json` và `hub.json` là artifact đầu ra của quá trình dựng. Bất kỳ thay đổi nào từ file phải được sync vào SQLite qua lệnh `ythub sync <CODE>` hoặc cơ chế File Watcher trong app.
4. **Quản lý phiên Claude Code `--resume <sid>` dễ sập context**:
   * *Nháp*: Lưu `session_id` theo từng video rồi dùng lại.
   * *Rủi ro*: Phiên Claude Code có dung lượng context hữu hạn. Sau nhiều lượt trao đổi hoặc khi nạp file audio/hình ảnh lớn, token context đầy sẽ dẫn đến lỗi hoặc suy giảm độ thông minh nghiêm trọng. Hơn nữa, nếu thư mục bị thay đổi nhánh git, session cũ sẽ bị lỗi logic.
   * *Giải pháp*: Bổ sung cơ chế **Session Rotation**: Cho phép tạo "Phiên mới giữ ngữ cảnh cốt lõi" (nạp lại tóm tắt `meta.json` + `script.md` hiện tại) và hiển thị thanh cảnh báo token/chi phí.
5. **Giao tiếp một chiều giữa WebView và Native UI**:
   * *Nháp*: Nhúng `WKWebView` thuần túy để xem.
   * *Thiếu sót*: Bỏ lỡ tính năng "ăn tiền" nhất là bấm vào một slot trong kịch bản ở giao diện Swift thì video trong WebView nhảy ngay đến giây đó (Scrubbing sync), hoặc ngược lại kéo timeline trong preview thì kịch bản highlight câu tương ứng.

---

## 2. Chuẩn Thư Mục, Database Schema & File Metadata

### Cây Thư Mục Toàn Repo Chuẩn Hóa
```text
oh-my-channels/
├── hub/                           # YT Hub macOS App (SwiftUI) & CLI (Python)
├── shared/
│   ├── library/                   # Media dùng chung (nhạc, sfx, font, watermark)
│   │   ├── music/
│   │   ├── sfx/
│   │   └── LICENSES.csv
│   └── templates/                 # Các template dựng dùng chung
└── channels/
    └── <channel_id>/              # vd: off-limits-life, tiny-leg-theory, rice-and-empires
        ├── channel.json           # Thông tin kênh (YouTube ID, ngôn ngữ, giọng đọc mặc định)
        ├── studio.json            # Cấu hình nút bấm & pipeline đặc thù của kênh
        ├── tools/                 # Scripts tự động hoá riêng của kênh (Python/Node)
        ├── editor/                # Source code Remotion / HyperFrames project
        │   ├── package.json
        │   └── src/
        └── videos/
            └── <VIDEO_CODE>/      # vd: OLL-042, TLT-L015, RAE-008
                ├── script.md      # Kịch bản nguồn (chứa hook, lời thoại, ghi chú hình ảnh)
                ├── meta.json      # Metadata xuất bản & SEO
                ├── assets/        # Media phát sinh cục bộ của video
                │   ├── voice/     # File audio giọng đọc TTS (.wav/.mp3)
                │   ├── images/    # Ảnh gen từ Midjourney/Flux/Recraft
                │   └── raw/       # Video footage b-roll
                ├── build/
                │   └── hub.json   # Manifest dựng video (parts -> slots -> timing)
                └── out/           # Video final render, thumbnail xuất bản (.mp4, .png)
```

### Database Schema (Cập nhật cho SQLite `ythub.db`)
Bổ sung các bảng và cột mới nhằm quản lý chi phí AI, tiến trình background và phân cảnh:

```sql
-- Thêm cột tracking chi phí và cấu hình vào bảng video hiện tại
ALTER TABLE video ADD COLUMN estimated_cost REAL DEFAULT 0.0;
ALTER TABLE video ADD COLUMN current_session_id TEXT;
ALTER TABLE video ADD COLUMN target_duration_s INTEGER;

-- Bảng quản trị phiên AI Agent (Claude Code / Codex / Agy)
CREATE TABLE IF NOT EXISTS agent_session (
    id TEXT PRIMARY KEY,
    video_code TEXT NOT NULL,
    agent_type TEXT NOT NULL,          -- 'claude-code', 'codex', 'agy'
    cwd TEXT NOT NULL,
    total_cost_usd REAL DEFAULT 0.0,
    total_tokens INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(video_code) REFERENCES video(code) ON DELETE CASCADE
);

-- Bảng quản trị các lượt chạy Job (render, TTS, gen ảnh)
CREATE TABLE IF NOT EXISTS job_run (
    id TEXT PRIMARY KEY,
    video_code TEXT NOT NULL,
    stage TEXT NOT NULL,               -- 'script', 'assets', 'render', 'publish'
    command TEXT NOT NULL,
    status TEXT NOT NULL,              -- 'running', 'success', 'failed', 'killed'
    exit_code INTEGER,
    log_output TEXT,
    started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    finished_at DATETIME,
    FOREIGN KEY(video_code) REFERENCES video(code) ON DELETE CASCADE
);

-- Bảng phân cảnh chi tiết (Sync từ hub.json để query nhanh trong SQL)
CREATE TABLE IF NOT EXISTS video_slot (
    id TEXT PRIMARY KEY,               -- <video_code>_part<p>_slot<s>
    video_code TEXT NOT NULL,
    part_index INTEGER NOT NULL,
    slot_index INTEGER NOT NULL,
    start_s REAL NOT NULL,
    end_s REAL NOT NULL,
    speaker TEXT,
    text TEXT,
    visual_status TEXT DEFAULT 'todo', -- 'todo', 'generating', 'ready', 'failed'
    visual_asset_path TEXT,
    FOREIGN KEY(video_code) REFERENCES video(code) ON DELETE CASCADE
);
```

### Cấu Trúc File Mẫu

#### 1. `channels/<channel_id>/channel.json`
```json
{
  "channel_id": "rice-and-empires",
  "name": "Lúa & Đế Chế",
  "handle": "@RiceAndEmpires",
  "engine": "hyperframes",
  "default_locale": "vi-VN",
  "default_voice": "vi-VN-Neu-Nam",
  "aspect_ratio": "16:9",
  "youtube_category_id": "27"
}
```

#### 2. `channels/<channel_id>/videos/<CODE>/meta.json`
```json
{
  "code": "RAE-012",
  "channel": "rice-and-empires",
  "title": "Bí mật kênh đào Vĩnh Tế: Kỳ tích quân sự và nông nghiệp",
  "title_variants": [
    "Kênh đào Vĩnh Tế: Người xưa đã đào 87km bằng tay như thế nào?",
    "Đế chế nào từng muốn lấp kênh Vĩnh Tế?"
  ],
  "description": "Khám phá lịch sử xây dựng kênh đào Vĩnh Tế...",
  "tags": ["lịch sử việt nam", "kênh vĩnh tế", "thoại ngọc hầu", "địa chính trị"],
  "category_id": "27",
  "privacy_status": "private",
  "virality_metrics": {
    "hook_score": 88,
    "clarity_score": 92,
    "ai_critique": "Hook mở đầu bằng nghịch lý quân sự tạo sự tò mò cao."
  },
  "assets": {
    "thumbnail_path": "out/thumbnail.png",
    "final_video_path": "out/RAE-012_final.mp4"
  }
}
```

#### 3. `channels/<channel_id>/studio.json`
```json
{
  "version": "1.0",
  "stages": {
    "idea": [
      {
        "id": "brainstorm_multi_ai",
        "label": "Tranh luận ý tưởng (Multi-AI)",
        "kind": "agent_prompt",
        "prompt": "Hãy đóng vai 2 chuyên gia lịch sử phản biện ý tưởng: {topic}. Tìm ra góc nhìn gây tranh cãi nhất."
      }
    ],
    "script": [
      {
        "id": "eval_hook",
        "label": "Chấm điểm Hook & Viral",
        "kind": "agent_prompt",
        "prompt": "Đọc file {script_path}. Chấm điểm Hook (0-100) theo phương pháp Opus Clip và gợi ý 3 cách mở đầu giữ chân người xem."
      },
      {
        "id": "generate_tts",
        "label": "Tạo giọng đọc (TTS)",
        "kind": "command",
        "cmd": ["python3", "tools/tts.py", "--code", "{code}", "--input", "{script_path}"]
      }
    ],
    "assets": [
      {
        "id": "batch_gen_images",
        "label": "Gen ảnh cho các Slot trống",
        "kind": "command",
        "cmd": ["python3", "tools/gen_images.py", "--code", "{code}", "--only-missing"]
      }
    ],
    "render": [
      {
        "id": "open_preview",
        "label": "Bật Preview Editor",
        "kind": "service",
        "cmd": ["npx", "hyperframes", "preview"],
        "cwd": "channels/{channel}/editor",
        "port": 5173
      },
      {
        "id": "render_video",
        "label": "Render Final MP4",
        "kind": "command",
        "cmd": ["python3", "tools/render.py", "--code", "{code}"]
      }
    ],
    "publish": [
      {
        "id": "seo_audit",
        "label": "Kiểm tra SEO & Thumbnail",
        "kind": "agent_prompt",
        "prompt": "Đọc meta.json của {code}. Chấm điểm SEO theo checklist TubeBuddy."
      },
      {
        "id": "upload_youtube",
        "label": "Upload lên YouTube",
        "kind": "command",
        "require_confirm": true,
        "confirm_message": "Bạn có chắc chắn muốn upload video này lên kênh chính thức?",
        "cmd": ["python3", "tools/upload.py", "--code", "{code}"]
      }
    ]
  }
}
```

---

## 3. Danh Sách Màn Hình & Nút Bấm Của Studio (Phân Kỳ P0 / P1 / P2)

### P0 (Cốt Lõi Phải Có Ngay Để Thay Thế Thao Tác Thủ Công)
* **Khung Điều Hướng Kênh & Video**:
  * Cột trái: Danh sách 6 kênh kèm badge số lượng video theo từng Stage (Idea, Script, Assets, Render, Ready, Published).
  * Filter & Search nhanh theo Code, Title. Nút "Tạo video mới" (`+ New Video`).
* **Màn Hình Chi Tiết Video (Tab Bar 4 Màn Hình Cốt Lõi)**:
  1. **Tab Kịch Bản & Thao Tác Nhanh**:
     * Trình xem/sửa Markdown `script.md` tích hợp phím tắt.
     * Nút **[Chạy TTS]**: Tự động băm đoạn văn bản và gọi engine TTS (Kokoro/VieNeu) lưu vào `assets/voice/`.
     * Nút **[Cập nhật Manifest Hub]**: Chạy adapter trích xuất word timing sinh file `build/hub.json`.
  2. **Tab Dựng & Khung Nhìn Trực Quan (Manifest & WebView)**:
     * Khung bên trái: Danh sách các **Parts & Slots** vẽ từ `hub.json` (hiện thời lượng, text, trạng thái ảnh/âm thanh).
     * Khung bên phải: Khung nhúng `WKWebView` mở server preview (Remotion Studio / HyperFrames).
     * Nút **[Bật / Tắt Server Preview]** kèm đèn tín hiệu (Xanh = Server đang chạy trên port).
     * Nút **[Render Final MP4]** kèm thanh tiến độ tiến trình.
  3. **Panel Trò Chuyện Agent CLI Có Ngữ Cảnh**:
     * Khung chat cố định ở cạnh phải app. Tự động gắn cờ `--resume <session_id>` và `cwd` trỏ đúng thư mục kênh.
     * Hiển thị Stream Token chữ chạy trực tiếp, có ô thông báo chi phí Session (`$0.015`).
  4. **Tab Xuất Bản & YouTube API**:
     * Các trường nhập: Title, Description, Tags, Thumbnail Selector.
     * Nút **[Upload lên YouTube]**: Hiện dialog cảnh báo xác nhận (Confirm Dialog) $\to$ gọi script upload YouTube API v3.

### P1 (Tự Động Hóa & Tăng Tốc Độ Sản Xuất)
* **Tab Brainstorm Ý Tưởng (Multi-Agent Debate)**:
  * Nút **[Tranh biện 3 bên]**: Gửi prompt yêu cầu 2 persona AI phản biện một chủ đề và 1 trọng tài tổng hợp thành kịch bản phân cảnh.
* **Slot Visual Batch Manager**:
  * Bấm vào từng slot trong tab Dựng: Hiện prompt sinh ảnh được AI gợi ý.
  * Nút **[Gen ảnh Slot này]** (gọi API Flux/Midjourney/Recraft) hoặc nút **[Gen hàng loạt các slot còn trống]**.
  * Hỗ trợ kéo thả ảnh từ ngoài máy tính vào trực tiếp ô slot để ghi đè.
* **Audit & Health Check**:
  * Nút **[Kiểm toán âm lượng]**: Chạy FFmpeg EBU R128 quét loudness xem audio có đạt chuẩn YouTube (-14 LUFS) hay không.
  * Nút **[Kiểm tra bản quyền Asset]**: Quét các file nhạc dùng trong video đối chiếu với `shared/library/LICENSES.csv` để tự điền dòng ghi công (Credit) vào phần mô tả video.

### P2 (Tối Ưu Hóa Nâng Cao & Tương Tác Hai Chiều)
* **Two-way Sync giữa SwiftUI và Remotion Preview**:
  * Khi bấm vào Slot 5 ở thanh kịch bản, app gửi message qua WebView JavaScript bridge: `window.remotion_seekTo(frame)`.
* **SEO & Virality Score Meter**:
  * Đồng hồ điểm SEO (0-100) theo thời gian thực (check độ dài title, số lượng tag, mật độ từ khóa trong description theo phong cách TubeBuddy).
  * Bộ gợi ý Title A/B Testing tạo bởi AI.
* **Worktree Manager**:
  * Khả năng tạo nhánh nháp riêng biệt cho các video thử nghiệm phong cách mới mà không làm bẩn nhánh git chính của kênh.

---

## 4. Giải Pháp Tích Hợp Agent CLI Tốt Nhất

### So Sánh 4 Phương Án Kỹ Thuật

| Phương án | Ưu điểm | Nhược điểm | Đánh giá |
|---|---|---|---|
| **1. Stream-JSON qua Child Process (`Process` + `Pipe`)** | Bắt được token streaming mượt mà; lấy được metadata `cost_usd`, `duration_ms`, `tool_use`; hoàn toàn native trên macOS. | Cần tự quản lý chuỗi buffer dòng (NDJSON); cần xử lý việc người dùng bấm phím can thiệp. | **Tốt nhất cho các tác vụ 1 chạm và Chat UI tích hợp.** |
| **2. Agent Client Protocol (Zed ACP)** | Chuẩn hóa toàn bộ giao thức (LSP cho Agent); cơ chế xin cấp quyền chạy lệnh chuẩn chỉ. | Cần viết thêm bridge adapter server từ Swift sang ACP; hệ sinh thái Claude Code mới bắt đầu hỗ trợ. | **Phù hợp làm kiến trúc mở rộng dài hạn.** |
| **3. Model Context Protocol (MCP) Server** | Biến `ythub` thành các tool để agent gọi ngược lại (vd: `ythub_get_video`, `ythub_set_stage`). | Chỉ giải quyết chiều Agent $\to$ App, không giải quyết việc App stream giao diện từ Agent. | **Bắt buộc dùng kết hợp để Agent thao tác với Database.** |
| **4. Embedded PTY Terminal (SwiftTerm)** | Chạy 100% nguyên bản giao diện terminal của Claude Code (hỗ trợ màu sắc, phím mũi tên chọn menu). | Khó trích xuất dữ liệu có cấu trúc (chi phí, kết quả) để cập nhật ngược vào database SwiftUI. | **Phù hợp làm tab phụ Terminal Fallback.** |

### Kiến Trúc Đề Xuất: "Bộ Ba Hoàn Hảo" (Hybrid Architecture)

```
┌────────────────────────────────────────────────────────┐
│             YT Hub macOS App (SwiftUI)                 │
├──────────────────────────┬─────────────────────────────┤
│   Structured Agent Panel │   Embedded PTY (SwiftTerm)  │
│   (Task 1-chạm, Stream)  │   (Can thiệp thủ công sâu)  │
└────────────┬─────────────┴──────────────┬──────────────┘
             │                            │
      Process (Pipe)                    PTY
  claude -p --output-format          claude (Interactive)
        stream-json                       │
             │                            │
             ▼                            ▼
┌────────────────────────────────────────────────────────┐
│                   Claude Code CLI                      │
└────────────────────────────┬───────────────────────────┘
                             │
                  stdio / JSON-RPC (MCP)
                             ▼
┌────────────────────────────────────────────────────────┐
│            YT Hub MCP Server (Python/CLI)              │
│       (Cung cấp tool: ythub_get, ythub_update, ...)    │
└────────────────────────────┬───────────────────────────┘
                             ▼
┌────────────────────────────────────────────────────────┐
│              SQLite Database (ythub.db)                │
└────────────────────────────────────────────────────────┘
```

1. **Giao diện chính**: Dùng **Stream-JSON over Child Process**.
   * App Swift gọi: `claude -p "<prompt>" --output-format stream-json --include-partial-messages --resume <session_id>`.
   * Đọc stdout theo dòng: Khi nhận `"type": "stream_event"`, bắn text delta lên TextEditor SwiftUI. Khi nhận `"type": "result"`, cập nhật chi phí vào bảng `agent_session`.
2. **Quản trị Tool và Database**: Dùng **MCP Server nội bộ**.
   * Cung cấp file cấu hình `claude_desktop_config.json` hoặc flag MCP cho Claude Code trỏ đến script `ythub_mcp_server.py`.
   * Cho phép Claude tự gọi các hàm: `set_stage(code, stage)`, `update_script(code, text)`, `add_task(code, task)`.
3. **Quản lý Quyền (Permission Control)**:
   * Thêm flag cấm các lệnh phá hủy trừ khi được chấp thuận: Tận dụng cơ chế prompt xác nhận trong Swift trước khi kích hoạt các nút có `"require_confirm": true` trong `studio.json`.
4. **Quản lý Chi Phí & Token Cap**:
   * Mỗi video có hạn mức ngân sách (vd: tối đa $1.00 USD tiền prompt).
   * App đọc trường `cost_usd` từ sự kiện `result` của stream-json và cộng dồn vào bảng `video`. Khi vượt ngưỡng, app hiển thị cảnh báo đỏ và yêu cầu người dùng xác nhận có muốn tiếp tục chạy agent hay không.

---

## 5. Các Ý Tưởng "Ăn Tiền" Nên Áp Dụng Ngay

1. **Bộ Chỉ Số Chấm Điểm Mở Đầu (Hook Virality Score)** *(Học từ Opus Clip)*:
   * 80% thành bại của YouTube video nằm ở 5 giây đầu tiên. Tích hợp sẵn nút "Audit Hook": Agent phân tích câu mở đầu của `script.md` theo 3 tiêu chí: *Cú sốc thông tin (Curiosity Gap)*, *Nhịp điệu lời thoại (Pacing)*, và *Mức độ liên quan đến Thumbnail*. Trả về điểm số kèm gợi ý sửa đổi.
2. **Neo Văn Bản Vào Timeline (Text-Anchored Visuals)** *(Học từ Descript)*:
   * Thay vì chỉnh sửa video theo trục thời gian giây/frame phức tạp, hãy neo toàn bộ asset hình ảnh vào từng câu nói của `script.md`. Trong `hub.json`, mỗi câu nói là 1 slot có ID. Khi agent sinh ảnh, nó chỉ cần đặt tên ảnh theo cú pháp `<CODE>_part1_slot2.png` là app tự động gắn đúng vào giây mà câu đó bắt đầu vang lên.
3. **Trợ Lý Sửa Video Bằng Prompt Tự Nhiên** *(Học từ InVideo AI)*:
   * Cung cấp một thanh Chat Command nhỏ ngay dưới màn hình xem video. Người dùng chỉ cần gõ: *"Đổi hình ảnh ở slot 3 sang phong cách tranh khắc gỗ"* $\to$ Agent tự động sửa file cấu hình prompt gen ảnh và kích hoạt tạo lại ảnh cho slot đó.
4. **Cô Lập Thử Nghiệm Bằng Git Worktree** *(Học từ Conductor & Claude Squad)*:
   * Khi muốn thử nghiệm 1 kịch bản khác hoặc 1 phong cách dựng mới cho cùng 1 video, app cho phép tạo "Worktree Version B". Hai phiên bản chạy độc lập, không ghi đè dữ liệu lên nhau, cho phép so sánh kết quả trực quan trước khi merge.
5. **SEO Checklist & Tự Động Hóa Xuất Bản** *(Học từ TubeBuddy & vidIQ)*:
   * Trước khi nút "Upload YouTube" sáng lên, app yêu cầu video phải vượt qua Checklist: Có Thumbnail đúng tỷ lệ, Tiêu đề dưới 70 ký tự, Mô tả có chứa link bản quyền nhạc từ `LICENSES.csv`, Đã chọn đúng danh mục (Category ID). Bấm Upload là tự động set trạng thái video trong SQLite thành `published`.

---

# TỔNG KẾT & LỘ TRÌNH THỰC THI CHO CHỦ KÊNH

1. **Bước 1 (Chuẩn hóa cấu trúc & DB)**: Refactor thư mục các kênh về chuẩn `channels/<channel_id>/videos/<CODE>/...`, cập nhật schema SQLite `ythub.db` thêm bảng `agent_session`, `job_run`, `video_slot`.
2. **Bước 2 (Nâng cấp SwiftUI App - Stage Core P0)**: Bổ sung panel thực thi `Process` stream-json cho Claude Code, tích hợp WebKit nhúng Preview Server có Supervisor quản lý port.
3. **Bước 3 (Chuẩn hóa Pipeline & Studio JSON)**: Viết file `studio.json` hoàn chỉnh cho 2 kênh tiên phong (1 kênh dùng HyperFrames, 1 kênh dùng Remotion), loại bỏ các lệnh shell chèn chuỗi không an toàn.
4. **Bước 4 (Đóng gói MCP Tool)**: Xây dựng server MCP nội bộ để mọi Agent CLI khi mở lên đều tự động nhận diện được ngữ cảnh video và tự cập nhật tiến độ vào YT Hub mà không cần can thiệp thủ công.
