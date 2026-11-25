Dưới đây là báo cáo khảo sát và đánh giá chi tiết 11 editor/timeline/plugin trong hệ sinh thái video bằng code (cập nhật trạng thái năm 2026), khả năng nhúng vào app desktop (WebView), cùng bảng xếp hạng tối ưu cho **nhu cầu 1 người làm video faceless YouTube dài 8–15 phút trên nền pipeline Remotion 4.0.535**.

---

### I. Khảo sát chi tiết 11 Editor / Plugin / Timeline

#### 1. Remotion Editor Starter & Remotion Timeline (`remotion.pro`)
* **URL nguồn:** [Remotion Editor Starter](https://remotion.pro/editor-starter) | [Remotion Standalone Timeline](https://remotion.dev/timeline) | [Remotion Licensing](https://remotion.dev/license)
* **Trạng thái 2026:** Phát triển rất tích cực bởi chính đội ngũ Remotion (Jonny Burger). Đã hoàn thiện và chuẩn hóa cho Remotion 4.x.
* **GitHub & License & Giá:**
  * Không mở hoàn toàn trên GitHub công khai; phân phối qua Remotion Pro Store.
  * Bản quyền thương mại (Commercial Source-Available): mua một lần sở hữu trọn bộ mã nguồn (Full source code).
  * Giá: **$300** cho gói component rời `<Timeline />` độc lập; **$600** cho gói full `Editor Starter` (gồm cả canvas kéo thả, undo/redo, font picker, inspector). Core Remotion miễn phí cho cá nhân/team dưới 3 người.
* **Timeline kéo thả nhiều track:** **CÓ.** Hỗ trợ multi-track layer hoàn chỉnh, kéo thả clip giữa các track, trim đầu/cuối, zoom slider, snapping theo frame/beat, phím tắt dựng chuyên nghiệp.
* **Xuất JSON / Remotion props:** **NGUYÊN BẢN (100% Native).** Toàn bộ trạng thái editor được lưu dạng cây JSON Timeline Specification. Cây JSON này truyền trực tiếp vào `inputProps` của Remotion `<Player />` để preview, hoặc truyền vào CLI render mà không cần bất kỳ adapter chuyển đổi nào.
* **Render ra MP4 bằng gì:** Render bằng chính Remotion (`@remotion/renderer` qua headless Chromium + FFmpeg) hoặc Remotion Lambda.
* **Nhúng / Tự host:** **100% tự host.** Bạn nhúng thẳng component React vào WebView (SwiftUI WKWebView, Tauri hoặc Electron) của app desktop cục bộ, không phụ thuộc cloud.

---

#### 2. designcombo/react-video-editor
* **URL nguồn:** [GitHub designcombo/react-video-editor-js](https://github.com/designcombo/react-video-editor-js) | [designcombo/remotion-timeline](https://github.com/designcombo/remotion-timeline) | [DesignCombo Dev](https://designcombo.dev)
* **Trạng thái 2026:** Đang hoạt động, được cộng đồng Remotion sử dụng như một giải pháp thay thế mã nguồn mở cho CapCut/Canva.
* **GitHub & License & Giá:**
  * ~1.4k+ stars trên GitHub.
  * License: Source-available (Copyright © DesignCombo). Mã nguồn công khai xem/tải được nhưng không dùng giấy phép MIT truyền thống; miễn phí dùng cá nhân/tự build nội bộ.
* **Timeline kéo thả nhiều track:** **CÓ.** Sử dụng component riêng `@designcombo/remotion-timeline`, hỗ trợ nhiều track (video, audio, text, sticker), kéo thả, đổi layer, trim thời lượng.
* **Xuất JSON / Remotion props:** **CÓ.** State dự án được quản lý dạng JSON. Vì Player nền tảng là `@remotion/player`, dữ liệu JSON ánh xạ thẳng sang các thẻ `<Sequence>` của Remotion.
* **Render ra MP4 bằng gì:** Remotion Renderer CLI (`npx remotion render`) hoặc Remotion Lambda.
* **Nhúng / Tự host:** **Tự host 100%.** Chạy trên local React/Vite app và nhúng vào WebView dễ dàng.

---

#### 3. Twick (`ncounterspecialist/twick`)
* **URL nguồn:** [GitHub ncounterspecialist/twick](https://github.com/ncounterspecialist/twick)
* **Trạng thái 2026:** Còn duy trì, tốc độ cập nhật ở mức trung bình.
* **GitHub & License & Giá:**
  * ~550 stars.
  * License: Sustainable Use License (SUL 1.0) — Miễn phí tự host và nhúng vào app nội bộ/thương mại, chỉ cấm bán lại chính Twick như một dịch vụ SDK cạnh tranh.
* **Timeline kéo thả nhiều track:** **CÓ.** Timeline kéo thả nhiều track cơ bản, hỗ trợ cắt ghép, waveform âm thanh, text styling và auto caption.
* **Xuất JSON / Remotion props:** **KHÔNG xuất Remotion props.** Twick lưu trữ schema JSON riêng của nó. Muốn dùng với pipeline Remotion sẵn có, bạn phải tự viết parser ánh xạ Twick JSON -> Remotion Sequence.
* **Render ra MP4 bằng gì:** Client-side thông qua FFmpeg.wasm hoặc server render qua node-ffmpeg.
* **Nhúng / Tự host:** **Tự host được**, nhúng tốt vào môi trường React WebView.

---

#### 4. Revideo Editor (`midrender/revideo`, trước là `redotvideo/revideo`)
* **URL nguồn:** [GitHub midrender/revideo](https://github.com/midrender/revideo) | [Midrender Platform](https://midrender.com)
* **Trạng thái 2026:** Đang phát triển sôi nổi, định vị là giải pháp thay thế Remotion cho AI agents và code-driven video.
* **GitHub & License & Giá:**
  * ~4.2k stars.
  * License: MIT (hoàn toàn miễn phí, mã nguồn mở).
* **Timeline kéo thả nhiều track:** **KHÔNG theo kiểu NLE/CapCut.** Timeline của Revideo/Midrender là timeline sự kiện thời gian (Time Events qua `waitUntil` và keyframes). Bạn kéo thả các điểm dừng cue của voiceover/hiệu ứng, chứ không có thanh timeline đa track kéo thả các clip b-roll tự do như Premiere/CapCut.
* **Xuất JSON / Remotion props:** **KHÔNG.** Chạy độc lập với Remotion (dùng TypeScript scenes, Canvas API).
* **Render ra MP4 bằng gì:** `@revideo/renderer` (Headless browser + HTML Canvas + WebCodecs VideoEncoder cục bộ + FFmpeg gộp audio).
* **Nhúng / Tự host:** Tự host được, có thể nhúng preview vào WebView, nhưng không đáp ứng đúng nghĩa "sửa tay video dài".

---

#### 5. Motion Canvas Editor (`motion-canvas/motion-canvas`)
* **URL nguồn:** [GitHub motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) | [Motion Canvas Docs](https://motion-canvas.io)
* **Trạng thái 2026:** Cực kỳ thịnh hành cho video lập trình, toán học, giải thích giải thuật.
* **GitHub & License & Giá:**
  * >20.000 stars.
  * License: MIT (100% miễn phí).
* **Timeline kéo thả nhiều track:** **KHÔNG.** Motion Canvas Editor đi kèm là một dev server (Vite) chỉ hiển thị tiến trình khung hình, audio waveform và các điểm đánh dấu sự kiện để đồng bộ giọng đọc với animation. Không có chức năng kéo thả nhiều track video.
* **Xuất JSON / Remotion props:** **KHÔNG.** Hệ sinh thái hoàn toàn riêng biệt.
* **Render ra MP4 bằng gì:** Render qua trình duyệt / CLI exporter xuất frame PNG/Canvas rồi nén bằng FFmpeg.
* **Nhúng / Tự host:** Chạy local qua Vite, nhúng WebView được nhưng chỉ để xem trước code animation, không dùng để sửa tay clip.

---

#### 6. HyperFrames Studio (`heygen-com/hyperframes`)
* **URL nguồn:** [GitHub heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | [HyperFrames Studio](https://hyperframes.studio)
* **Trạng thái 2026:** Dự án agent-native video bùng nổ mạnh mẽ do HeyGen phát triển, hướng đến AI coding agents (Claude Code, Cursor...).
* **GitHub & License & Giá:**
  * ~87k+ stars.
  * License: Apache 2.0 (mã nguồn mở hoàn toàn, miễn phí).
* **Timeline kéo thả nhiều track:** **CÓ.** HyperFrames Studio có timeline trực quan: kéo thả media từ máy vào track, trim đầu/cuối, split clip, ripple edit (tự khép khoảng trống khi xóa clip), snapping.
* **Xuất JSON / Remotion props:** **KHÔNG xuất Remotion props.** HyperFrames cấu trúc video bằng HTML/CSS/JS thuần (`data-start`, `data-duration`) và file layout riêng.
* **Render ra MP4 bằng gì:** `@hyperframes/engine` (Chromium frame capture deterministic -> nén MP4 chuẩn xác từng frame).
* **Nhúng / Tự host:** **Tự host được**, có CLI, browser app và desktop runtime.

---

#### 7. Diffusion Studio (`diffusionstudio/editor` & `core`)
* **URL nguồn:** [GitHub diffusionstudio/editor](https://github.com/diffusionstudio/editor) | [Diffusion Studio Docs](https://diffusion.studio)
* **Trạng thái 2026:** Được coi là "VS Code của ngành dựng video", tối ưu cho cả người sửa tay lẫn AI agent can thiệp timeline.
* **GitHub & License & Giá:**
  * ~3.5k stars.
  * License: MPL-2.0 (Mozilla Public License 2.0, miễn phí mở mã nguồn).
* **Timeline kéo thả nhiều track:** **CÓ.** Timeline đa track rất mượt theo phong cách CapCut/Premiere (hỗ trợ video, audio, text, phụ đề, lottie), tương tác canvas trực quan.
* **Xuất JSON / Remotion props:** **KHÔNG xuất Remotion props.** Quản lý dự án bằng JSX/TSX engine riêng (chạy SolidJS + Mediabunny).
* **Render ra MP4 bằng gì:** Render cục bộ cực nhanh bằng phần cứng qua WebCodecs + WebGPU + Mediabunny (`dapi node render` hoặc export từ app).
* **Nhúng / Tự host:** Tự host 100%, có app desktop riêng (Electron/Tauri) và core chạy web.

---

#### 8. OpenCut (`OpenCut-app/OpenCut`)
* **URL nguồn:** [GitHub OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) | [OpenCut App](https://opencut.app)
* **Trạng thái 2026:** Dự án mã nguồn mở thay thế CapCut phát triển rất nhanh, đang viết lại core bằng Rust + WebAssembly để tối ưu hiệu năng.
* **GitHub & License & Giá:**
  * ~98k–99k stars.
  * License: MIT (hoàn toàn miễn phí).
* **Timeline kéo thả nhiều track:** **CÓ.** Giao diện timeline chuẩn chỉnh phong cách CapCut, đa track, kéo thả, cắt ghép, chuyển cảnh, text, hiệu ứng.
* **Xuất JSON / Remotion props:** **KHÔNG xuất Remotion props.** Lưu trữ project dạng OpenCut JSON.
* **Render ra MP4 bằng gì:** Client-side thông qua WebCodecs, WebAssembly/Rust engine hoặc FFmpeg.
* **Nhúng / Tự host:** Có thể tự host web app hoặc gói vào desktop WebView.

---

#### 9. IMG.LY CE.SDK Video (CreativeEditor SDK)
* **URL nguồn:** [IMG.LY Video Editor SDK](https://img.ly/products/video-editor-sdk) | [GitHub imgly/starterkit-video-editor-ts-web](https://github.com/imgly/starterkit-video-editor-ts-web)
* **Trạng thái 2026:** Tiêu chuẩn thương mại doanh nghiệp cao cấp nhất hiện nay cho embedded video editor.
* **GitHub & License & Giá:**
  * Starter kit mẫu trên GitHub, engine lõi đóng kín (Proprietary).
  * License thương mại, giá rất đắt: đăng ký thuê bao hàng năm (thường từ vài nghìn USD/năm trở lên). Bản free chỉ để test và bị đóng dấu watermark.
* **Timeline kéo thả nhiều track:** **CÓ.** Đẳng cấp chuyên nghiệp, siêu mượt, đầy đủ track video, audio, keyframing, text animation, transitions, color grading.
* **Xuất JSON / Remotion props:** **KHÔNG.** Xuất CE.SDK Scene Block/JSON riêng.
* **Render ra MP4 bằng gì:** Engine WebAssembly/WebCodecs chạy trực tiếp trong trình duyệt hoặc headless Node.js renderer (`@cesdk/node`).
* **Nhúng / Tự host:** Nhúng vào WebView macOS cực kỳ tốt qua JavaScript/Web Component, nhưng không khả thi về mặt chi phí cho cá nhân 1 người.

---

#### 10. Etro (`etro-js/etro`)
* **URL nguồn:** [GitHub etro-js/etro](https://github.com/etro-js/etro) | [Etro Docs](https://etrojs.dev)
* **Trạng thái 2026:** Còn duy trì, cập nhật nhỏ giọt.
* **GitHub & License & Giá:**
  * ~1.2k stars.
  * License: GNU GPL-3.0 (miễn phí mã nguồn mở).
* **Timeline kéo thả nhiều track:** **KHÔNG CÓ UI.** Etro chỉ là một thư viện engine xử lý video/canvas bằng code (headless compositing library). Nó không hề có giao diện timeline hay kéo thả. Muốn dùng, lập trình viên phải tự viết UI timeline từ con số 0.
* **Xuất JSON / Remotion props:** **KHÔNG.**
* **Render ra MP4 bằng gì:** Canvas recording / WebRTC MediaRecorder xuất Blob.
* **Nhúng / Tự host:** Nhúng được, nhưng không có editor UI.

---

#### 11. Shotstack Studio SDK (`shotstack/shotstack-studio-sdk`)
* **URL nguồn:** [GitHub shotstack/shotstack-studio-sdk](https://github.com/shotstack/shotstack-studio-sdk) | [Shotstack Studio SDK Guide](https://shotstack.io/docs/guide/studio-sdk/)
* **Trạng thái 2026:** Hoạt động rất ổn định, SDK giao diện chính thức của Shotstack.
* **GitHub & License & Giá:**
  * ~400–500 stars.
  * License: PolyForm Shield License (Source-available). Miễn phí sử dụng và tự host trong app nội bộ/thương mại (chỉ cấm kinh doanh dịch vụ cloud cạnh tranh Shotstack).
  * Render client-side MP4 bằng browser: **Miễn phí**. Chỉ tính phí khi gọi Cloud Rendering API của Shotstack.
* **Timeline kéo thả nhiều track:** **CÓ.** Cung cấp sẵn component `<Timeline>` hoàn chỉnh: nhiều track, kéo thả clip, trim, snapping, canvas preview, undo/redo.
* **Xuất JSON / Remotion props:** **Xuất Shotstack Edit JSON.** Cấu trúc JSON này rất trong sáng (`tracks[].clips[]` với `start`, `length`, `asset`). Rất dễ viết một adapter nhỏ (khoảng 50 dòng code) để chuyển JSON này thành Remotion `<Sequence>` / `inputProps`.
* **Render ra MP4 bằng gì:** Local browser `VideoExporter` (MP4) hoặc gửi JSON lên Shotstack cloud.
* **Nhúng / Tự host:** Tự host hoàn toàn trên app local/React, nhúng vào WebView cực kỳ gọn gàng.

---

### II. Bảng so sánh tổng hợp 11 công cụ

| Tên công cụ | Trạng thái & Sao | License & Chi phí | Timeline kéo thả đa track? | Xuất Remotion Props/JSON? | Render MP4 bằng gì? | Nhúng WebView Desktop? |
| :--- | :--- | :--- | :---: | :---: | :--- | :---: |
| **Remotion Editor Starter / Timeline** | Rất tích cực | Bản quyền ($300–$600 mua 1 lần) | **Có** (Chuyên sâu) | **Gốc (100% Native)** | Remotion CLI / Puppeteer + FFmpeg | **Rất tốt (React)** |
| **designcombo/react-video-editor** | Tích cực (~1.4k ⭐) | Source-available (Miễn phí cá nhân) | **Có** | **Có (Dễ map)** | Remotion CLI / Lambda | **Tốt (React)** |
| **Shotstack Studio SDK** | Ổn định (~500 ⭐) | PolyForm Shield (Miễn phí self-host) | **Có** | Shotstack JSON (Rất dễ map) | In-browser exporter / Cloud API | **Rất tốt** |
| **Diffusion Studio** | Đang lên (~3.5k ⭐) | MPL-2.0 (Miễn phí) | **Có** | Không (Dùng JSX riêng) | WebCodecs + Mediabunny (Rất nhanh) | **Tốt** |
| **HyperFrames Studio** | Bùng nổ (~87k ⭐) | Apache 2.0 (Miễn phí) | **Có** | Không (Dùng HTML/CSS spec) | HyperFrames Engine / Chromium | **Tốt** |
| **OpenCut** | Rất mạnh (~98k ⭐) | MIT (Miễn phí) | **Có** | Không (OpenCut JSON) | Rust / Wasm / WebCodecs | **Tốt** |
| **Twick** | Trung bình (~550 ⭐) | SUL 1.0 (Miễn phí self-host) | **Có** | Không (Twick JSON) | FFmpeg.wasm / Node FFmpeg | **Khá** |
| **IMG.LY CE.SDK Video** | Doanh nghiệp | Đóng (Thuê bao nghìn $/năm) | **Có** (Mượt nhất) | Không (CE.SDK JSON) | WebAssembly + WebCodecs | **Rất tốt** |
| **Revideo Editor** | Tích cực (~4.2k ⭐) | MIT (Miễn phí) | Không (Chỉ có Time Events) | Không (TypeScript Canvas) | Revideo CLI / WebCodecs | **Khá** |
| **Motion Canvas** | Rất mạnh (>20k ⭐) | MIT (Miễn phí) | Không (Chỉ có Cue/Keyframes) | Không (TypeScript Canvas) | Frame Capture + FFmpeg | **Khá** |
| **Etro** | Chậm (~1.2k ⭐) | GPL-3.0 (Miễn phí) | **Không có UI** | Không | MediaRecorder / Canvas | **Kém (Không có UI)** |

---

### III. Bảng xếp hạng cho nhu cầu cụ thể của bạn

**Đặc điểm bài toán của bạn:**
* 1 người làm solo (cần tinh gọn, không bảo trì hệ thống phức tạp, không trả phí thuê bao định kỳ).
* Video faceless YouTube dài **8–15 phút** (hàng trăm đoạn voiceover, audio hiệu ứng, câu chữ, clip B-roll cần cắt gọt, co giãn thủ công cho khớp giọng đọc).
* **Pipeline cốt lõi đã xây dựng xong trên Remotion 4.0.535.** (Nếu chọn công cụ khác hệ sinh thái như HyperFrames, Diffusion Studio hay OpenCut, bạn sẽ buộc phải đập bỏ và viết lại toàn bộ pipeline sinh video bằng code).

---

#### 🥇 HẠNG 1: Remotion Editor Starter hoặc Remotion Standalone Timeline (`remotion.pro`)
* **Lý do đứng đầu:**
  1. **Khớp 100% với Remotion 4.0.535:** Không có độ vênh kiến trúc, không cần adapter dịch JSON. Trạng thái sau khi bạn dùng chuột kéo thả, cắt gọt clip chính là file JSON `inputProps` của Remotion.
  2. **Tiết kiệm thời gian tuyệt đối:** Chỉ việc chạy `npx remotion render Root out.mp4 --props=saved_state.json` với chính engine Remotion hiện tại của bạn.
  3. **Chi phí một lần:** Nếu ngân sách cho phép, mua component `<Timeline />` rời ($300) hoặc full `Editor Starter` ($600). Với người làm kênh YouTube lâu dài, đây là khoản đầu tư hoàn vốn nhanh nhất vì bạn sở hữu vĩnh viễn source code, nhúng thẳng vào SwiftUI WKWebView của macOS app `hub`.

#### 🥈 HẠNG 2: `designcombo/react-video-editor` + `@designcombo/remotion-timeline`
* **Lý do đứng nhì:**
  1. **Giải pháp miễn phí tốt nhất cho Remotion:** Đã dựng sẵn UI clone theo CapCut, viết bằng React và sử dụng `@remotion/player` làm khung hiển thị.
  2. **Cơ chế lưu trữ:** State của timeline lưu dạng JSON tracks/items (video, text, audio) với mốc millisecond. Ánh xạ từ millisecond sang `Sequence` của Remotion (dựa trên FPS) cực kỳ thẳng thắn.
  3. **Phù hợp solo dev:** Bạn có thể clone về, tùy biến bỏ các nút không cần thiết, chạy một local dev server hoặc đóng gói vào WebView desktop app của bạn mà không tốn phí bản quyền.

#### 🥉 HẠNG 3: Shotstack Studio SDK (`@shotstack/shotstack-studio-sdk`)
* **Lý do đứng ba:**
  1. **Timeline UI chuyên nghiệp, miễn phí bản quyền (PolyForm Shield):** Component timeline kéo thả, cắt ghép clip của Shotstack được trau chuốt rất kỹ, ổn định hơn nhiều so với các repo mã nguồn mở tự phát.
  2. **Tách biệt UI và Render:** Cho phép người dùng sửa tay trên giao diện web local, sau đó xuất ra `Shotstack Edit JSON`.
  3. **Tương thích Remotion:** Cấu trúc JSON của Shotstack gồm danh sách các `tracks`, trong mỗi track có các `clips` với `start` và `length` tính bằng giây. Bạn chỉ cần viết một adapter Python/TypeScript khoảng 50 dòng code để chuyển Shotstack JSON sang `inputProps` của Remotion 4.0.535 là có thể bấm render bằng pipeline cũ.

---

#### ⚠️ Các công cụ KHÔNG nên chọn cho nhu cầu này:
* **Motion Canvas / Revideo:** Phù hợp làm motion graphics ngắn (15–60 giây) bằng code; không có timeline NLE kéo thả đa track nên dựng video faceless 8–15 phút sẽ cực kỳ cực nhọc.
* **Diffusion Studio / HyperFrames Studio / OpenCut:** Mặc dù timeline rất đẹp và hiện đại, nhưng chúng dùng runtime riêng (SolidJS/Rust/Wasm). Nếu dùng, bạn phải bỏ hoàn toàn pipeline Remotion 4.0.535 đã mất công thiết lập.
* **IMG.LY CE.SDK:** Quá đắt cho cá nhân (mức giá hàng năm dành cho doanh nghiệp B2B).
* **Etro:** Không có giao diện người dùng (UI).
