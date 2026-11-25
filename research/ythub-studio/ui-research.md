# BÁO CÁO NGHIÊN CỨU & MỔ XẺ UI/UX CHO MACOS APP "YT HUB STUDIO"
*(Mô hình sản xuất video YouTube 1 Người + AI: Ý tưởng → Kịch bản → Storyboard → Shot → Thumbnail → Dựng → Đăng)*

> **Tài liệu tham chiếu thiết kế kiến trúc UI & Interaction Flow cho lập trình viên SwiftUI.**  
> Nghiên cứu được thực hiện độc lập qua web research, trích xuất cấu trúc bố cục, hệ thống Design Tokens (màu, bo góc, padding), luồng tương tác và tính năng cốt lõi của 11 công cụ AI/Video hàng đầu thế giới.

---

## PHẦN 1: MỔ XẺ CHI TIẾT 11 SẢN PHẨM CÔNG NGHỆ

---

### 1. Higgsfield AI (Cinema Studio, Popcorn, Soul ID)
*Nguồn tham khảo: [higgsfield.ai](https://higgsfield.ai) · [higgsfield.ai/cinema-studio](https://higgsfield.ai) · [higgsfield.ai/popcorn](https://higgsfield.ai)*

#### 1.1. Bố cục màn chính (Layout Architecture)
* **Tri-Column Studio Layout (Tỉ lệ 18% : 52% : 30%)**:
  * **Cột trái (Asset & Soul Cast Drawer - 18%)**: Quản lý kho nhân vật "Soul ID", thư viện đạo cụ (Props), phong cách hạt phim/thời kỳ (Era/Genre).
  * **Khu vực trung tâm (Director Canvas - 52%)**: Phía trên là màn hình preview viewport 16:9 với lớp phủ cinematic letterbox (2.39:1 hoặc 16:9), thanh timeline phân đoạn (Popcorn Storyboard view). Phía dưới là thanh lệnh chỉ đạo (Director Command Bar) hỗ trợ cú pháp hashtag như `#DollyIn #35mm #Kodak5207`.
  * **Cột phải (Optics & Staging Inspector - 30%)**: Bảng điều khiển vật lý máy quay, ống kính, khẩu độ, góc quay và Emotion Wheel (bánh xe cảm xúc nhân vật).
* **Màn Popcorn Storyboard**: Grid trượt ngang (Horizontal Filmstrip) chia theo Scene / Beat. Mỗi beat là 1 thẻ Shot Card chứa Start Frame, prompt chỉ đạo động lực học, tag máy quay và nút Retake.

#### 1.2. Ngôn ngữ thiết kế (Design System Tokens)
* **Bảng màu**: Nền siêu tối Cinematic Dark `#0B0C0E`, Card Container `#14161A`, Viền phân cách `#22252B`, Màu nhấn Electric Amber `#FF9F0A` (màu đèn viewfinder máy quay ARRI) và Neon Cyan `#00F0FF` cho trạng thái AI Active.
* **Typography**: San-Francisco Pro Display (SF Pro) cho tiêu đề, font mono `SF Mono` / `JetBrains Mono` cho thông số camera (`f/1.4`, `35mm`, `ISO 400`, `24fps`).
* **Bo góc & Khoảng cách**: `cornerRadius`: 8pt cho input/button, 12pt cho shot card container; `padding`: 12pt tiêu chuẩn, 16pt cho panel margins.
* **Trình bày media & Trạng thái chạy**:
  * Thumbnail hiển thị tỷ lệ cố định 16:9 hoặc 2.39:1, hover sẽ kích hoạt preview video ngắn lặp lại (scrub on hover).
  * Khi AI đang render: Viền container sáng chạy hiệu ứng gradient quét (laser scanline hoặc amber pulsing border), hiển thị % hoàn thành dạng `Frame 48/120 (40%)` kèm thời gian ước tính (ETA).
* **Mật độ chữ**: Cực kỳ thấp ở viewport chính; thông số kỹ thuật được nén thành các pill badges nhỏ gọn (compact chips).

#### 1.3. Luồng thao tác chính (User Flow)
1. Kéo 1 nhân vật "Soul ID" từ cột trái vào slot diễn viên chính.
2. Chọn Camera Preset từ menu thả xuống (ví dụ: *Low Angle Hero Tracking*).
3. Tinh chỉnh ống kính (Anamorphic, 50mm, f/2.0) và cảm xúc nhân vật qua Emotion Wheel.
4. Gõ prompt hành động hoặc chọn Prompt Builder dạng block.
5. **Gợi ý bước tiếp theo**: Sau khi render xong 1 shot, app tự động hiển thị nút gợi ý: *"Generate Reverse Shot"* (Góc đối diện) hoặc *"Continue Action"* (Nối tiếp chuyển động).
6. **Variations**: Hiển thị Variations Grid 2x2. Click chọn 1 shot tốt nhất làm Keyframe gốc, hoặc bấm *"Branch Shot"* để thử hướng diễn xuất khác.

#### 1.4. Giá trị chép cho kênh Faceless
* **Soul ID (Character Continuity Lock)**: Lưu 1 profile nhân vật (hình ảnh vector, 3D render hoặc tranh minh họa cổ trang) và tái sử dụng cho 100 shot mà không biến dạng mặt.
* **Camera Movement Presets trực quan**: Thay vì viết prompt dài dòng, dev dùng danh sách 30+ camera motion presets (Dolly In, Whip Pan, Drone Orbit, Crash Zoom) để tạo video sống động cho kênh tài liệu/kể chuyện.

---

### 2. TopView AI (Video Agent, URL → Video)
*Nguồn tham khảo: [topview.ai](https://topview.ai) · [topview.ai/features](https://topview.ai)*

#### 2.1. Bố cục màn chính
* **2 Chế độ màn hình chuyên biệt**:
  * **Màn 1: AI Ingestion Setup (Tập trung tối đa)**: 1 thanh input trung tâm lớn cho phép dán Link bài báo / URL sản phẩm / Kịch bản thô. Dưới thanh input là danh sách preset mục tiêu: Phong cách (Cinematic Documentary, Fast Viral Hook, Minimalist Luxury) và Giọng đọc (Voice Target).
  * **Màn 2: Storyboard & Script Canvas (2 Cột 40% : 60%)**:
    * **Cột trái (Beat Script Editor - 40%)**: Kịch bản được phân rã thành từng câu/beat (Hook 0-3s, Intro, Story Point 1, 2, Climax, CTA). Mỗi beat có text lời thoại, voiceover duration và visual suggestion tag.
    * **Cột phải (Asset & Video Player - 60%)**: Viewport phát video realtime phía trên; phía dưới là kho B-roll, ảnh trích xuất tự động và avatar ảo nếu có.

#### 2.2. Ngôn ngữ thiết kế
* **Bảng màu**: Nền xám than `#0F1015`, Surface panel `#181920`, Màu nhấn Tím huỳnh quang `#7C3AED` và Xanh bạc hà `#10B981` cho nút xuất bản (Export).
* **Typography**: Inter hoặc SF Pro, độ tương phản văn bản cao (`#FFFFFF` cho script chính, `#9CA3AF` cho text hướng dẫn).
* **Bo góc & Spacing**: `cornerRadius`: 10pt cho text block, 16pt cho modal; `spacing`: 14pt giữa các beat kịch bản.
* **Media & Progress**:
  * Khi quét URL: Hiển thị pipeline progress checklist dạng cascade (1. Đang trích xuất nội dung... 2. Đang phân tích nhịp video... 3. Đang gợi ý B-roll...).
  * Thẻ thumbnail có badge hiển thị thời lượng dự kiến (ví dụ: `0:04.2s`).

#### 2.3. Luồng thao tác chính
1. Dán URL bài nghiên cứu hoặc kịch bản gốc.
2. AI Agent phân tích, tự động chia đoạn thành 8–15 beats (Scenes).
3. Duyệt từng beat: Bấm vào một beat để thay đổi Visual (đổi prompt sinh ảnh, đổi stock B-roll).
4. Chọn giọng đọc AI (TTS) đồng bộ ngay lập tức để tính toán thời lượng chính xác của từng shot.
5. **Variations**: Khi bấm "Change Visual", hệ thống đưa ra 3 phương án: *AI Gen Video*, *AI Motion Graphic*, *B-roll trích xuất*, chọn 1 phương án chỉ bằng 1 phím tắt hoặc cú click.

#### 2.4. Giá trị chép cho kênh Faceless
* **Logic "Beat-to-Shot Decomposition"**: Tự động bóc tách kịch bản dài 2000 chữ thành từng shot nhỏ có độ dài tương ứng nhịp thở voiceover.
* **Auto B-roll Matcher**: Gợi ý ngay thẻ B-roll (ảnh cổ vật, bản đồ, hình tư liệu) tương ứng với từ khóa trong câu chuyện.

---

### 3. ComfyUI (Node Graph, Workflow, Queue)
*Nguồn tham khảo: [comfy.org](https://comfy.org) · [github.com/comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI)*

#### 3.1. Bố cục màn chính
* **Full-Screen Infinite Node Canvas**: 100% diện tích là bảng canvas vô cực với lưới chấm (dot grid), có thể pan (kéo) và zoom mượt mà.
* **Floating Panels & Side Drawers**:
  * **Top/Floating Bar**: Nút `Queue Prompt`, `Queue Count (đang chạy: 2, chờ: 8)`, `Manager`, `Workflow Presets`.
  * **Left Sidebar Drawer (ComfyUI v0.2+)**: Kho Node Library được phân nhóm (Loaders, Samplers, Conditioning, Latent, Image, Video), cây thư mục Models/LoRA.
  * **Floating Execution Console (Bottom Drawer)**: Log tiến trình, thời gian xử lý từng node (ms), lượng VRAM tiêu thụ.

#### 3.2. Ngôn ngữ thiết kế
* **Bảng màu**: Nền canvas `#202020` với dot grid `#2A2A2A`, Thân Node `#353535`, Header Node được gán màu theo chức năng (Xanh dương cho Model, Tím cho VAE, Vàng cam cho Prompt, Xanh lá cho Output), Dây nối (Noodles/Bezier curves) phát sáng theo màu loại dữ liệu (`IMAGE`, `LATENT`, `MODEL`, `STRING`).
* **Typography**: `SF Mono` / `Courier New` kích thước nhỏ (10-12pt), thể hiện bản chất kỹ thuật chính xác.
* **Bo góc & Spacing**: Node bo góc 6pt–8pt; khoảng cách giữa các socket cắm dây (slots) là 18pt với đèn LED chỉ báo trạng thái kết nối.
* **Hiển thị tiến trình**: Node đang chạy sẽ có viền sáng xanh lá nhấp nháy (`active glow pulse`), bên trong node có thanh progress bar chạy từ 0 đến 100% (Sampling steps).

#### 3.3. Luồng thao tác chính
1. Kéo dây từ output của node này thả vào input của node kia (type-safe slot connection).
2. Tinh chỉnh tham số trực tiếp trên mặt node (Seed, Steps, CFG, Denoise).
3. Bấm `Queue Prompt` (Phím tắt: `Cmd + Enter`).
4. Hệ thống đẩy tác vụ vào hàng đợi FIFO (First In, First Out). Người dùng có thể tiếp tục sửa thông số và bấm `Queue` tiếp mà không phải đợi lần chạy trước hoàn thành.
5. **Quản lý hàng đợi (Queue Manager)**: Xem danh sách công việc đang đợi, đổi thứ tự ưu tiên, hoặc hủy batch job.

#### 3.4. Giá trị chép cho kênh Faceless
* **Cơ chế Pipeline Template ẩn**: Với YT Hub Studio, không cần để người dùng vẽ node như kỹ sư, nhưng kiến trúc ngầm phải là pipeline dạng node: `[Script Text] → [Prompt Enricher] → [Image Model] → [Video Motion] → [Remotion Layer]`.
* **Hàng đợi Execution Queue mạnh mẽ**: Cho phép bấm "Render 50 ảnh tư liệu" và đẩy vào hàng đợi nền (background queue), người dùng vẫn tiếp tục sửa kịch bản ở màn hình khác.
* **Kéo thả khôi phục Workflow (Metadata Drop)**: Kéo 1 bức ảnh/video cũ thả vào app, app tự phục hồi nguyên vẹn prompt, seed, model, camera setting đã tạo ra nó.

---

### 4. LTX Studio (Lightricks)
*Nguồn tham khảo: [ltx.studio](https://ltx.studio) · [ltx.studio/features](https://ltx.studio)*

#### 4.1. Bố cục màn chính
* **Màn hình Storyboard-First 3 Tầng**:
  * **Tầng 1 - Top Header (Global Pipeline)**: Script → Storyboard → Shot Editor → Timeline Edit.
  * **Tầng 2 - Elements & Cast Sidebar (Bên trái, 20%)**: Danh sách các "Elements" tái sử dụng: Character Profiles, Location Environtments, Prop Assets, Style Guides.
  * **Tầng 3 - Storyboard Grid / Sequence Flow (Trung tâm & Phải, 80%)**: Trình bày theo Scene Block. Mỗi Scene gồm 3-6 Shot Cards xếp ngang hoặc dọc.
* **Shot Detail / Director View (Mở ra khi double click vào 1 shot)**:
  * Bên trái: Khung nhìn 3D không gian máy quay (3D Camera Frustum / Orbit).
  * Bên phải: Lời thoại nhân vật, thanh điều chỉnh Retake (Inpainting, Facial Expression, Lighting Angle, Style Strength).

#### 4.2. Ngôn ngữ thiết kế
* **Bảng màu**: Nền xám sâu `#121316`, Card Background `#1C1E24`, Viền `#2E323B`, Màu nhấn Electric Lavender `#8B5CF6` và Vibrant Violet `#A78BFA`.
* **Typography**: Chữ tiêu đề dùng sans-serif hiện đại, độ phân cấp rõ ràng (Header 16pt Semi-bold, Shot labels 11pt Medium, Timecode 10pt Mono).
* **Bo góc & Spacing**: `cornerRadius`: 12pt cho Shot Cards; `padding`: 16pt; khoảng cách giữa các shot trong 1 scene là 12pt, giữa các scene là 32pt.
* **Media & Loading**: Thẻ shot hiển thị kèm badge camera angle (vd: `WIDE`, `ESTABLISHING`, `CLOSE-UP`). Khi gen, ảnh mờ ảo dần hiện rõ (dissolve blur preview) thay vì màn hình đen.

#### 4.3. Luồng thao tác chính
1. Người dùng dán cốt truyện tổng quan (Pitch/Story outline).
2. AI tự động sinh kịch bản chi tiết và dàn trang Storyboard hoàn chỉnh (Scene 1 → Shot 1, Shot 2, Shot 3...).
3. Người dùng vào tab Elements để gán "Character" hoặc "Location" vào các shot tương ứng để giữ tính đồng nhất.
4. Tinh chỉnh từng shot bằng tính năng **Retake**: Giữ nguyên bố cục, chỉ đổi góc ánh sáng hoặc biểu cảm.
5. Xem lại toàn bộ phim ở chế độ Preview animatic (ảnh tĩnh chạy khớp với voiceover) trước khi bấm nút "Render to Full Video".

#### 4.4. Giá trị chép cho kênh Faceless
* **Khái niệm "Elements" (Nhân vật, Địa điểm, Cổ vật)**: Cực kỳ phù hợp cho kênh lịch sử/khoa học để neo giữ hình ảnh các vị tướng, bản đồ cổ, hiện vật bảo tàng xuyên suốt 20 phút video.
* **Animatic Pre-visualization**: Khả năng ghép ảnh nháp + voiceover chạy thử trên timeline trước khi render video AI đắt đỏ giúp tiết kiệm 80% chi phí và thời gian.

---

### 5. Krea AI (Realtime Canvas, Video Generation, Node Editor)
*Nguồn tham khảo: [krea.ai](https://krea.ai) · [krea.ai/apps/canvas](https://krea.ai)*

#### 5.1. Bố cục màn chính
* **Split-Screen Realtime Canvas (Tỉ lệ 50% : 50%)**:
  * **Nửa trái (Input Space)**: Vùng vẽ phác thảo, thả các khối màu (shape blocks), upload ảnh tham chiếu bố cục hoặc dùng webcam/screen capture.
  * **Nửa phải (Live AI Output)**: Render kết quả tức thì (độ trễ <100ms) theo từng nét cọ vẽ hoặc từng ký tự gõ prompt.
* **Bottom Control Dock**:
  * Thanh prompt floating đặt sát đáy màn hình.
  * Nút chuyển đổi chế độ: Image / Video Keyframing / Enhance & Upscale.
  * Tùy chọn Model Picker (Wan, Kling, Flux, Krea Realtime).

#### 5.2. Ngôn ngữ thiết kế
* **Bảng màu**: Nền đen tối giản `#000000` hoặc `#0A0A0A`, Card `#111111`, Border mảnh `#222222`, Màu nhấn Trắng tinh khiết `#FFFFFF` và Neon Lime `#D4FF00`.
* **Typography**: Cực kỳ tối giản, phông chữ phong cách Swiss Modernism (Inter / Geist), nhãn ngắn gọn, không chữ thừa.
* **Bo góc & Spacing**: `cornerRadius`: 20pt (dạng capsule/pill) cho các thanh floating dock; `padding`: 8pt siêu gọn.
* **Media**: Không gian không viền (borderless preview), hình ảnh là tâm điểm tuyệt đối, UI mờ dần (fade out) khi người dùng di chuột ra ngoài canvas.

#### 5.3. Luồng thao tác chính
1. Người dùng đặt một khối màu vàng bên góc trái và khối màu xanh lam bên góc phải trên Canvas.
2. Gõ prompt: *"Hoàng đế nhà Trần ngồi đàm đạo với sứ thần bên sông Bạch Đằng"*.
3. Canvas bên phải biến khối màu vàng thành long bào hoàng đế, khối xanh lam thành dòng sông ngay lập tức.
4. Chuyển sang tab Video: Kéo ảnh vừa tạo vào slot `Start Frame`, chọn hoặc sinh thêm 1 ảnh làm `End Frame`.
5. Bấm Render Video và chọn thời lượng (5s, 10s).

#### 5.4. Giá trị chép cho kênh Faceless
* **Keyframe A → B Interpolation (Start Image + End Image)**: Kiểm soát chính xác diễn biến của video thay vì để AI tự do nhảy khung hình hỗn loạn.
* **Interactive B-roll Layouting**: Cho phép ghép 2 ảnh tài liệu lên 1 khung canvas (ví dụ: ảnh bản đồ kết hợp ảnh đoàn quân viễn chinh) trước khi gen video chuyển động.

---

### 6. Flora (flora.fyi / flora.ai)
*Nguồn tham khảo: [flora.ai](https://flora.ai) · [fal.ai](https://fal.ai)*

#### 6.1. Bố cục màn chính
* **Multi-Model Infinite Creative Canvas**: Không gian làm việc phẳng không giới hạn (như Figma/Miro), nhưng mỗi phần tử trên bảng là một "Smart AI Block".
* **Block System**:
  * **Text/Prompt Block**: Nhập kịch bản hoặc yêu cầu biến thể.
  * **Model Router Block**: Cho phép gắn 1 prompt vào cùng lúc 4 model khác nhau (Flux Pro, Kling, Runway Gen-3, Luma Dream Machine) để so sánh song song.
  * **Output Gallery Cluster**: Nhóm các kết quả trả về thành cây phả hệ (Genealogy Tree / Branching View).

#### 6.2. Ngôn ngữ thiết kế
* **Bảng màu**: Nền xám ấm kỹ thuật số `#18181B` (Zinc-900), Card Container `#27272A`, Viền `#3F3F46`, Màu nhấn Tím pastel `#C084FC` và Trắng `#FAFAFA`.
* **Typography**: Sans-serif hình học hiện đại, hiển thị rõ ràng metadata của từng model bên dưới thẻ media.
* **Bo góc & Spacing**: `cornerRadius`: 12pt cho khối, 8pt cho input con bên trong; bóng đổ nổi (subtle elevation drop-shadow) phân cấp layer trên canvas.
* **Media**: Hiển thị lưới branching: từ 1 node gốc tỏa ra 4 nhánh con, mỗi nhánh có nút Play, Upscale và "Branch Off" (Tạo nhánh mới).

#### 6.3. Luồng thao tác chính
1. Tạo 1 Text Block chứa đoạn kịch bản: *"Cận cảnh chiếc bát gốm thời Lý trôi dưới đáy hồ Thủy Chu"*.
2. Kết nối Text Block này với 3 Model Blocks khác nhau để test style.
3. Chạy đồng loạt, duyệt 3 kết quả cạnh nhau trên cùng một màn hình phẳng.
4. Chọn kết quả tốt nhất, kéo dây sang 1 Video Block để tạo chuyển động máy quay xoay vòng (Orbit Shot).
5. Lưu toàn bộ cụm block thành một "Reusable Template" cho các tập sau.

#### 6.4. Giá trị chép cho kênh Faceless
* **Canvas So sánh đa Model**: Kênh Faceless không phụ thuộc vào 1 model duy nhất; UI cho phép chọn model nhanh (cảnh cận đồ vật dùng Kling, cảnh phong cảnh thiên nhiên dùng Runway, chuyển động nhanh dùng Luma).
* **Mô hình Phân nhánh Ý tưởng (Branching Iteration)**: Lưu lại toàn bộ lịch sử thử nghiệm hình ảnh, không bao giờ mất một prompt hay một biến thể đẹp đã tạo ra trước đó.

---

### 7. Runway (Gen-2, Gen-3 Alpha, Act-One, Camera Control)
*Nguồn tham khảo: [runwayml.com](https://runwayml.com) · [runwayml.com/research](https://runwayml.com)*

#### 7.1. Bố cục màn chính
* **Cinematic Studio Inspector (Tỉ lệ 65% Viewport : 35% Controls Panel)**:
  * **Trung tâm**: Video Player lớn với công cụ Motion Brush overlay trực tiếp lên khung hình.
  * **Cột phải (Director Tools Panel)**: 
    * Camera Control 6 bậc tự do (6-DoF).
    * Motion Brush (vẽ cọ lên tối đa 5 vùng độc lập, gán vận tốc vector riêng cho từng vùng).
    * Fixed Frame / Loop / Duration / Resolution toggles.

#### 7.2. Ngôn ngữ thiết kế
* **Bảng màu**: Nền đen thuần `#0D0D0D`, Card `#161616`, Viền mảnh `#262626`, Màu nhấn Xanh lục bảo neon `#00FF85` và Hồng magenta `#FF007A`.
* **Typography**: Kiểu chữ đậm nét, tối giản, tiêu chuẩn studio điện ảnh.
* **Bo góc & Spacing**: `cornerRadius`: 6pt–8pt rất gọn gàng; padding 12pt; nút bấm hình chữ nhật dứt khoát.
* **Trình bày Camera Control**: Dùng biểu tượng trực quan dạng 3D icon cho từng trục (Horizontal Pan, Vertical Tilt, Zoom, Roll, Pedestal) kèm thanh trượt số từ -10 đến +10.

#### 7.3. Luồng thao tác chính
1. Tải lên 1 ảnh tĩnh lịch sử / tài liệu.
2. Bấm vào biểu tượng Camera: Bật trục `Pan Left: +3` và `Zoom In: +2`.
3. Bật công cụ Motion Brush: Tô cọ màu hồng lên làn khói hoặc mặt nước, gán vector chuyển động bay lên trên (`Vertical: +4`).
4. Bấm `Generate` (thời lượng 5s hoặc 10s).
5. Sau khi render, dùng tính năng **Extend Video** để nối dài video từ khung hình cuối cùng (Last Frame Continuity).

#### 7.4. Giá trị chép cho kênh Faceless
* **Motion Brush cho ảnh tĩnh**: Tuyệt chiêu biến tranh ảnh cổ, tài liệu đen trắng lưu trữ trong bảo tàng thành video sống động (thổi khói thuốc, làm rung cờ, làm trôi mặt nước).
* **Camera Control 6-DoF Sliders**: Giúp các cảnh zoom vào bản đồ chiến dịch quân sự có độ lướt mượt mà như phim tài liệu của Netflix.

---

### 8. CapCut Desktop
*Nguồn tham khảo: [capcut.com](https://capcut.com) · Giao diện CapCut macOS/Windows Desktop*

#### 8.1. Bố cục màn chính
* **Chuẩn NLE Layout (Non-Linear Editor) tỉ lệ 35% : 35% : 30% trên trục ngang và 50% Timeline ở đáy**:
  * **Top-Left (Media & Creative Library - 35%)**: Thư mục Video/Audio cục bộ, Thư viện Text Templates, Stickers, Transitions, Effects, Filters.
  * **Top-Center/Right (Player & Viewport - 35%)**: Màn hình xem trước video, hỗ trợ chuyển đổi tỉ lệ tức thì (`16:9`, `9:16`, `1:1`) qua nút dropdown ngay dưới player.
  * **Top-Far-Right (Inspector - 30%)**: Tùy chỉnh thông số clip được chọn (Video: Scale, Position, Blend, Speed curve; Audio: Volume, Noise Reduction, Voice Enhancer).
  * **Bottom Half (Multitrack Timeline - 100% chiều rộng, 45% chiều cao)**: Dòng thời gian đa tầng (Video tracks, Audio tracks, Subtitle/Text track, Effect track) có từ tính (Magnetic Timeline).

#### 8.2. Ngôn ngữ thiết kế
* **Bảng màu**: Nền xám chì `#1E1E1E`, Panel `#252525`, Timeline track background `#181818`, Màu nhấn Xanh dương CapCut `#00C5FF` hoặc Cyan rực rỡ, Nút Export nổi bật ở góc trên cùng bên phải.
* **Typography**: Hệ thống font hệ thống rõ ràng, kích thước nhỏ gọn (11pt cho clip label, 10pt cho timecode).
* **Bo góc & Spacing**: `cornerRadius`: 4pt–6pt cho các clip trên timeline; không bo góc cho các panel lớn để tối ưu diện tích hiển thị (dense layout).
* **Tương tác Timeline**: Kéo thả mượt mà, hỗ trợ snapping thông minh, hiển thị dạng sóng âm thanh (Waveform) sắc nét trên từng track audio.

#### 8.3. Luồng thao tác chính
1. Kéo media từ panel thư viện thả xuống timeline (tự động hít vào track chính nhờ tính năng Magnet).
2. Sử dụng phím tắt `B` (Split tool) cắt tỉa đoạn thừa, phím `Delete` để xóa khoảng trống (Ripple Delete tự động thu ngắn video).
3. Bấm tab Text → Auto Captions: AI tự động nhận diện giọng nói và tạo phụ đề phụ họa trên 1 track riêng biệt.
4. Chọn template hiệu ứng chữ động (Text Animation) áp dụng hàng loạt cho toàn bộ phụ đề.
5. Bấm `Export` để xuất file chuẩn ProRes hoặc MP4.

#### 8.4. Giá trị chép cho kênh Faceless
* **Auto-Captions & Preset Text Styles**: Kênh Faceless sống dựa vào phụ đề động lôi cuốn mắt người xem (Kinetic Typography). Cần chép cách hiển thị track phụ đề riêng biệt và bộ preset chữ động.
* **Magnetic Timeline đơn giản hóa**: Không để người dùng bị lệch tiếng và hình; khi di chuyển một đoạn thuyết minh, tất cả B-roll gắn kèm phải tự động dịch chuyển theo.

---

### 9. Descript
*Nguồn tham khảo: [descript.com](https://descript.com) · [descript.com/video-editor](https://descript.com)*

#### 9.1. Bố cục màn chính
* **Script-First Hybrid Architecture (Màn hình chia 2 trục chính)**:
  * **Cột trái (The Interactive Document / Script Canvas - 50%)**: Trông giống hệt một trang Google Docs / Notion. Kịch bản dạng văn bản chiếm toàn bộ sự chú ý.
  * **Cột phải (Visual Canvas & Inspector - 50%)**: Màn hình xem trước bố cục video 16:9. Cho phép sắp đặt các layer (ảnh, video, webcam, text) trực tiếp bằng chuột.
  * **Đáy màn hình (Collapsible Timeline)**: Mặc định được thu nhỏ hoặc ẩn đi, chỉ hiện thanh thời lượng tổng. Người dùng có thể kéo lên bằng phím tắt `Cmd + Option + T` khi cần cắt ghép chi tiết từng micro-giây.

#### 9.2. Ngôn ngữ thiết kế
* **Bảng màu**: Nền ứng dụng xám bạc nhạt `#1A1A1E` (Dark mode) hoặc trắng sạch `#FFFFFF`, Màu văn bản `#E5E7EB`, Màu nhấn Xanh lam hoàng gia `#2563EB`, Khung viền Scene `#374151`.
* **Typography**: Font serif thanh lịch hoặc sans-serif chuẩn tài liệu văn phòng (Georgia / Inter / SF Pro Text). Văn bản kịch bản có kích thước 15pt dễ đọc, khoảng cách dòng thoáng (line-height: 1.6).
* **Bo góc & Spacing**: Bo góc mềm mại 8pt–12pt; các thanh công cụ thanh lịch tối giản.
* **Hiển thị Media trên Script**: Phím gạch chéo `/` tạo ra một **Scene Break**. Ngay đầu mỗi Scene trên văn bản sẽ hiển thị một thumbnail nhỏ đại diện cho hình ảnh trực quan đang hiển thị ở đoạn text đó.

#### 9.3. Luồng thao tác chính
1. Dán kịch bản vào Script Editor hoặc ghi âm giọng đọc trực tiếp.
2. Sửa video bằng cách bôi đen văn bản:
   * Bôi đen từ thừa và bấm `Delete` trên phím → Video và audio tương ứng bị cắt bỏ ngay lập tức.
   * Gõ `/` để tách cảnh mới → Bên Canvas lập tức cho phép đổi hình nền / B-roll mới.
3. Kéo thả file video B-roll từ máy tính thả thẳng vào một từ hoặc một câu trên văn bản script → Video B-roll tự động khớp thời lượng chính xác với câu nói đó.
4. Dùng tính năng AI "Underlord": Bấm 1 nút *"Remove filler words"* (tự động xóa 'à', 'ừ', khoảng lặng).

#### 9.4. Giá trị chép cho kênh Faceless
* **Mô hình "Sửa video như sửa văn bản Word"**: Đây là UX mang tính cách mạng cho nhà sản xuất 1 người. Người làm kênh tài liệu lịch sử chỉ cần chăm chút kịch bản chữ, hệ thống tự động đồng bộ hình ảnh và giọng lồng tiếng theo từng chữ.
* **Gắn B-roll vào từ khóa (Text-anchored Media)**: B-roll không gắn vào mốc thời gian cứng (như giây thứ 04:12), mà neo chặt vào câu kịch bản (ví dụ: gắn vào từ *"Trận Bạch Đằng năm 938"*). Khi kịch bản dịch chuyển, video tư liệu chạy theo.

---

### 10. Kling AI (Kuaishou / Kling VIDEO 3.0)
*Nguồn tham khảo: [klingai.com](https://klingai.com) · [kling.ai](https://kling.ai)*

#### 10.1. Bố cục màn chính
* **Director Mode / Multi-Shot Workbench**:
  * **Thanh chuyển đổi chế độ**: Single Shot (Đơn cảnh) ⟷ Multi-Shot Sequence (Đa cảnh liên hoàn).
  * **Khu vực Multi-Shot Sequence Timeline**: Dãy các ô Shot Slot (Shot 1 → Shot 2 → Shot 3) nằm ngang. Người dùng có thể kéo thả để đổi thứ tự shot trước khi render toàn bộ chuỗi 15 giây.
  * **Camera Control Sub-Panel**: Bộ 6 trục tọa độ và các preset kinh điển (Horizontal, Vertical, Zoom, Pan, Tilt, Roll) kèm cơ chế "Master Shot Presets" (vừa zoom vừa pan kết hợp).

#### 10.2. Ngôn ngữ thiết kế
* **Bảng màu**: Nền đen carbon `#111216`, Surface card `#1A1C23`, Viền kim loại mờ `#2A2D37`, Màu nhấn Vàng hổ phách `#F59E0B` và Đỏ cam `#FF4500`.
* **Typography**: SF Pro Display cho tiêu đề, nhãn camera được viết hoa toàn bộ (CAPS LOCK: `PAN LEFT`, `ZOOM IN`).
* **Bo góc & Spacing**: `cornerRadius`: 8pt cho các ô shot, 10pt cho nút bấm chính; padding 14pt.
* **Media & Progress Ring**: Thumbnail hiển thị độ phân giải cao, hỗ trợ scrub khung hình; khi render hiển thị vòng tròn tiến độ xoay tròn có số đếm % trung tâm.

#### 10.3. Luồng thao tác chính
1. Bật công tắc `Multi-Shot Mode`.
2. Tạo Shot 1: Chọn ảnh nhân vật, chọn camera `Slow Push In`, thời lượng 4s.
3. Tạo Shot 2: Chọn góc máy `Low-Angle Tilt Up`, thời lượng 5s, viết prompt hành động tiếp nối.
4. Khóa tính năng **Subject Consistency**: Bật toggle để AI giữ nguyên nhân vật và trang phục giữa 2 shot.
5. Bấm `Generate Sequence`: Hệ thống tạo ra một mạch phim 10–15s mượt mà không bị ngắt quãng chuyển động.

#### 10.4. Giá trị chép cho kênh Faceless
* **Multi-Shot Prompting trong 1 lần gen**: Tránh tình trạng người làm video phải ghép từng đoạn 3s rời rạc rồi tự xử lý chuyển cảnh; hệ thống tự tính toán đường nối chuyển động giữa các shot.
* **Khóa Subject Continuity qua toggle**: Tính năng một chạm giúp duy trì nhận diện gương mặt nhân vật lịch sử qua nhiều góc quay khác nhau.

---

### 11. Pika (pika.art)
*Nguồn tham khảo: [pika.art](https://pika.art) · [pikalabs.org](https://pikalabs.org)*

#### 11.1. Bố cục màn chính
* **Streamlined Fast-Creation Deck**:
  * **Trung tâm**: Prompt Box nổi dạng thanh tìm kiếm của Spotlight/Alfred trên macOS, tích hợp nút đính kèm ảnh (@ mention nhân vật, đạo cụ).
  * **Pikaffects Gallery Panel (Cột phải hoặc Pop-up Modal)**: Thư viện các hiệu ứng biến đổi hình ảnh bằng 1 click (Melt it, Crush it, Inflate it, Explode it, Squish it).
  * **Expand Canvas View**: Công cụ outpainting mở rộng khung hình từ 9:16 sang 16:9 hoặc ngược lại.

#### 11.2. Ngôn ngữ thiết kế
* **Bảng màu**: Nền tối `#18181B`, Card `#222227`, Màu nhấn Vàng chuối neon đặc trưng `#FFE600`, tạo cảm giác trẻ trung, phá cách và sáng tạo tức thì.
* **Typography**: Font tròn trịa, hiện đại (Geist / Plus Jakarta Sans), khoảng cách chữ rộng thoáng.
* **Bo góc & Spacing**: `cornerRadius`: 14pt–18pt cho container, nút bấm bo tròn hoàn toàn (Capsule 999pt).
* **Media & Animation**: Hover vào các thẻ Pikaffects sẽ chạy hoạt họa preview ngay lập tức; khi gen, hiển thị animation dạng tia lửa hoặc sao lấp lánh (sparkles).

#### 11.3. Luồng thao tác chính
1. Kéo thả 1 bức ảnh vào prompt box.
2. Chọn nhanh 1 thẻ hiệu ứng từ menu Pikaffects hoặc bấm biểu tượng camera để chọn hướng bay (Pan/Zoom).
3. Đặt thời lượng clip (3s/5s).
4. Bấm mũi tên Generate.
5. Dùng công cụ **Add 4s** hoặc **Modify Region** (chọn 1 vùng trên video để yêu cầu AI đổi chi tiết đó).

#### 11.4. Giá trị chép cho kênh Faceless
* **Một-Click Action Presets (Pikaffects)**: Biến các thao tác kỹ thuật phức tạp thành các thẻ hành động trực quan (ví dụ với kênh YT Hub Studio: nút *"Làm ảnh cổ chuyển động"*, nút *"Zoom cinematic tài liệu"*, nút *"Thêm sương mù lịch sử"*).
* **Modify Region (Inpainting trên video)**: Cho phép sửa lỗi méo hình của AI ở một góc nhỏ trên khung hình mà không phải tốn tiền render lại cả clip 5 giây.

---

## PHẦN 2: 10 NGUYÊN TẮC UI ĐỂ "YT HUB STUDIO" LÀ MỘT CREATIVE TOOL CAO CẤP
*(Thoát ly hoàn toàn khỏi tư duy bảng quản trị Web/CRUD Table hay Dashboard hành chính)*

Một ứng dụng sáng tạo đẳng cấp chuyên nghiệp trên macOS (như Final Cut Pro, DaVinci Resolve, Cinema 4D, Linear, Ableton Live) có ngôn ngữ thiết kế hoàn toàn khác một trang quản trị doanh nghiệp (Admin Portal / CRUD Dashboard). Dưới đây là 10 nguyên tắc vàng dành riêng cho dev SwiftUI:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   CREATIVE WORKSPACE PARADIGM                          │
├─────────────────┬───────────────────────────────────┬──────────────────┤
│ ASSET / ELEMENTS│      DIRECTOR VIEWPORT / CANVAS   │ INSPECTOR / VIBE │
│ (Visual Strips) │ (Dark Neutral 16:9 Borderless)   │ (Dial Controls)  │
│                 ├───────────────────────────────────┤                  │
│                 │   SCRIPT-ANCHORED STORYBOARD      │                  │
│                 │   (Horizontal Filmstrip Cards)    │                  │
└─────────────────┴───────────────────────────────────┴──────────────────┘
```

1. **Dark Cinematic Canvas là trung tâm (Canvas-First, Metadata-Second)**
   * *Tránh*: Mở app ra là thấy bảng số liệu, danh sách dòng kẻ ô (Table rows), ngày tạo, ID, status dạng badge xanh đỏ.
   * *Làm*: 70% diện tích màn hình dành cho **Media Viewport** và **Storyboard Canvas**. Nền giao diện dùng gam màu đen trung tính sâu (`#0B0C0E` đến `#14151B`) để màu sắc của video và hình ảnh nổi bật chuẩn xác, không bị ảnh hưởng bởi độ chói của UI.
2. **Kịch bản văn bản là cốt lõi tương tác (Script-First Editing Paradigm)**
   * *Tránh*: Bắt người dùng quản lý từng file mp4, wav riêng lẻ như thợ dựng phim truyền thống.
   * *Làm*: Học Descript: kịch bản (Script Text) là trục thời gian chính. Người dùng đọc kịch bản tới đâu, hình ảnh B-roll và timeline cuộn tới đó. Xóa một câu văn là cắt video; chèn một câu là mở slot để AI gen hình ảnh.
3. **Mô hình "Slot & Blueprint" trước khi Render tốn kém (Zero-Cost Pre-vis)**
   * *Tránh*: Nhập prompt là trừ tiền/credit và bắt người dùng ngồi chờ 3 phút xem video có bị lỗi không.
   * *Làm*: Học LTX Studio: Dựng animatic bằng ảnh tĩnh (Draft Frames) + kịch bản + voiceover nháp. Người dùng bấm Play để xem lướt toàn bộ nhịp điệu (pacing) của video 10 phút trong 30 giây. Khi ưng ý bố cục mới bấm *"Gen Shot này thành Video"*.
4. **Trực quan hóa vật lý máy quay thay vì Prompt văn bản (Visual Optics over Text Prompts)**
   * *Tránh*: Ô nhập text dài ngoằng: *"cinematic 8k, dolly in, shallow depth of field, 35mm lens, f1.4"*.
   * *Làm*: Học Higgsfield & Runway: Thiết kế các Picker điều khiển thực thụ trong SwiftUI: Biểu tượng ống kính 35mm, thanh trượt khẩu độ `f/1.4`, núm xoay góc quay (Angle Wheel), danh sách chip chuyển động (`Dolly In`, `Whip Pan`, `Drone Orbit`). App tự động chuyển các thông số vật lý này thành prompt cho AI ngầm bên dưới.
5. **Kho "Elements" bất biến bảo đảm tính nhất quán (Persistent Subject Anchors)**
   * *Tránh*: Mỗi shot nhân vật lại mang một gương mặt khác nhau, trang phục khác nhau.
   * *Làm*: Thiết kế thanh dock `Elements Drawer` ở góc trái. Người dùng định nghĩa trước: *Nhân vật A* (Vua), *Cổ vật B* (Thần kiếm), *Địa điểm C* (Kinh thành). Trong kịch bản, chỉ cần gõ `@Vua` hoặc kéo thả thẻ `@Vua` vào ô Shot, app sẽ tự nạp LoRA / Reference Image vào prompt để bảo đảm tính đồng nhất 100%.
6. **Bố cục Filmstrip ngang thay vì Danh sách bảng dọc (Horizontal Storyboard Flow)**
   * *Tránh*: Danh sách dọc kiểu bảng tính Excel hay bảng quản trị database.
   * *Làm*: Dùng `ScrollView(.horizontal)` chứa các thẻ Shot Card nối tiếp nhau từ trái sang phải như cuộn phim điện ảnh. Mỗi card thể hiện: Số thứ tự shot, ảnh đại diện, thời lượng (s), câu thoại tương ứng, và trạng thái render.
7. **Variations Grid 2x2 với phím tắt tuyển chọn nhanh (Rapid Curation Mechanism)**
   * *Tránh*: Bắt người dùng mở từng tab xem ảnh rồi tải về máy thủ công.
   * *Làm*: Mọi tác vụ sinh hình ảnh/video luôn trả về lưới 4 phương án (Grid 2x2). Phím tắt số `1`, `2`, `3`, `4` để chọn ngay phương án thắng cuộc (Winner Shot); phím `Space` để phóng to toàn màn hình; phím `R` để Regenerate lại phương án đang chọn.
8. **Hàng đợi ngầm không chặn luồng công việc (Non-blocking Background Execution Queue)**
   * *Tránh*: Khi bấm "Generate Video", màn hình hiện modal loading xoay tròn khóa cứng ứng dụng.
   * *Làm*: Học ComfyUI: Khi bấm render, task được đẩy vào **Queue Tray** thu nhỏ góc dưới màn hình. Người dùng tự do chuyển sang viết kịch bản cho tập tiếp theo, chọn nhạc nền, hay chỉnh sửa thumbnail. Có thông báo native macOS (Banner notification hoặc âm thanh tút nhẹ) khi batch render hoàn thành.
9. **Tương tác Kéo - Thả như bản năng macOS (First-class Drag & Drop Support)**
   * *Tránh*: Bấm nút "Browse..." rồi mò mẫm trong Finder để chọn file.
   * *Làm*: Kéo thả ảnh trực tiếp từ Finder, Safari, hoặc từ chính thư viện asset nội bộ của YT Hub vào ô shot. Kéo 1 video cũ thả vào ô prompt để trích xuất style (Style Reference). Kéo 1 file audio vào timeline để tự động cắt beat.
10. **Tối ưu mật độ thông tin bằng Progressive Disclosure (Hiện đúng lúc, giấu khi không cần)**
    * *Tránh*: Phơi bày hàng trăm thanh trượt, checkbox phức tạp lên cùng một màn hình khiến người dùng ngợp.
    * *Làm*: Mặc định màn hình chỉ hiển thị: Kịch bản, Khung hình preview, và nút chỉ đạo chính. Khi click vào một shot, bảng Inspector bên phải mới trượt ra hiển thị các thông số sâu (Seed, Denoise, Camera Vector, Model Router). Khi người dùng nhấn phím `Tab` hoặc `F`, toàn bộ thanh công cụ ẩn đi, nhường chỗ cho chế độ Director Preview toàn màn hình.

---

## PHẦN 3: BẢNG ÁNH XẠ KIẾN TRÚC: "CHÉP GÌ → MÀN NÀO CỦA YT HUB STUDIO"

Bảng ánh xạ tính năng chi tiết từ 11 sản phẩm được nghiên cứu vào từng màn hình nghiệp vụ cụ thể của **YT Hub Studio** (viết bằng SwiftUI):

| Màn hình trong YT Hub Studio | Tính năng chép từ các sản phẩm | Chi tiết triển khai cho Dev SwiftUI | Mục đích cho kênh YouTube Faceless |
| :--- | :--- | :--- | :--- |
| **1. Ý TƯỞNG & ĐỀ TÀI (Idea Hub)** | • **URL to Video / Topic Ingestion** *(TopView AI)*<br>• **Multi-Model Brainstorming** *(Flora)* | Dùng `TextField` phong cách Spotlight lớn ở trung tâm. Dán link bài báo nghiên cứu / Reddit / tài liệu lịch sử. Nút bấm kích hoạt chia nhánh (branching) sinh 5 góc tiếp cận (Angles) khác nhau. | Đọc tư liệu, sách cổ số hóa hoặc web nghiên cứu và chuyển hóa thành cấu trúc video hấp dẫn trong 10 giây. |
| **2. KỊCH BẢN & PHÂN RÃ (Script & Beat Breakdown)** | • **Script-First Editing** *(Descript)*<br>• **Beat-to-Shot Decomposition** *(TopView, LTX Studio)* | `TextEditor` hiển thị kịch bản với thanh phân cảnh gạch chéo `/`. Tự động tính toán tổng số từ, thời lượng đọc dự kiến. Khi gõ `/`, tự động tạo ra một `ShotSlot` gắn với câu văn đó. | Không bao giờ bị lệch nhịp giữa lời kể chuyện (voiceover) và hình ảnh minh họa trên màn hình. |
| **3. STORYBOARD & SHOT STAGING (Xưởng Thiết kế Cảnh)** | • **Horizontal Filmstrip** *(LTX Studio, Higgsfield Popcorn)*<br>• **Persistent Elements / Soul Cast** *(Higgsfield, LTX Studio)*<br>• **Draft Animatic Preview** *(LTX Studio)* | Dùng `ScrollView(.horizontal)` chứa các `ShotCard`. Bên trái có `ElementsDrawer` để kéo thả `@Character`, `@Location`, `@Artifact` vào shot. Nút Play chạy lướt qua toàn bộ ảnh tĩnh khớp theo tiếng đọc thử. | Đảm bảo mặt nhân vật lịch sử, bản đồ chiến sự, bảo vật không bị biến dạng qua 50 cảnh quay; duyệt toàn bộ mạch phim trước khi bấm render. |
| **4. CAMERA & SHOT DIRECTOR (Chi tiết từng Cú máy)** | • **6-DoF Camera Sliders & Presets** *(Runway, Kling, Higgsfield)*<br>• **Motion Brush trên tư liệu** *(Runway)*<br>• **Start & End Frame Keyframing** *(Krea AI)* | Thanh trượt `Slider` điều khiển: Pan, Tilt, Zoom, Roll kèm danh sách nút preset kinh điển (`Dolly In`, `Drone View`). Viewport hỗ trợ dùng ngón tay/chuột tô cọ chuyển động (Canvas stroke) lên các vùng ảnh tài liệu. | Thổi hồn vào các bức tranh cổ, bản đồ địa lý và ảnh tư liệu tĩnh của bảo tàng; tạo cú lia máy đậm chất phim điện ảnh tài liệu. |
| **5. PHÒNG THỬ NGHIỆM BIẾN THỂ (Variations & Curation)** | • **2x2 Variations Grid** *(Midjourney / Higgsfield)*<br>• **One-Click Retake / Pikaffects** *(Pika, LTX Studio)* | Lưới `LazyVGrid(columns: [GridItem(), GridItem()])`. Bấm số `1-4` để chọn shot ưng ý nhất. Thẻ nút bấm nhanh: *"Làm cũ phim"*, *"Tăng độ kịch tính"*, *"Sương mù cổ kính"*. | Thử nghiệm nhanh các góc hình, chọn phương án đẹp nhất và sửa lỗi méo hình của AI mà không phải gõ lại prompt từ đầu. |
| **6. HÀNG ĐỢI RENDER NỀN (Execution & Queue Engine)** | • **Execution Queue System** *(ComfyUI)*<br>• **Batch Video Processor** *(TopView, ComfyUI)* | Bảng `QueueTray` nằm gọn dưới status bar. Hiển thị danh sách 50 task: Tên shot, model phụ trách, progress bar dạng ring `ProgressView`, bộ đếm ETA. Hỗ trợ tạm dừng, đổi thứ tự ưu tiên hoặc hủy. | Bấm 1 nút sinh toàn bộ 40-50 cảnh của một tập video 15 phút rồi đi ngủ; máy tính tự động xếp hàng gọi API/Local model sinh lần lượt từng shot. |
| **7. DỰNG HOÀN THIỆN & REMOTION (Timeline & Assembly)** | • **Magnetic Timeline & Waveform** *(CapCut Desktop)*<br>• **Auto-Captions & Subtitle Track** *(CapCut, Descript)*<br>• **Text-Anchored B-roll** *(Descript)* | Dựng timeline dạng Canvas/SwiftUI bám từ tính: Track 1 (Voiceover Audio), Track 2 (AI Video Shots), Track 3 (B-roll tư liệu), Track 4 (SFX/Nhạc nền), Track 5 (Phụ đề). Xuất manifest JSON cho adapter Remotion tự động build. | Tự động ghép nối video, âm thanh thuyết minh, nhạc nền và phụ đề nhảy chữ động vào một file Remotion hoàn chỉnh để render mà không cần mở phần mềm thứ ba. |
| **8. TITLE & THUMBNAIL STUDIO (Đóng gói & Đăng tải)** | • **Outpainting & Expand Canvas** *(Pika, Krea)*<br>• **High-Contrast Text Template** *(CapCut)* | Khung canvas tỷ lệ chuẩn 16:9 (1280x720) cho thumbnail. Tích hợp thanh trượt so sánh tỷ lệ xem trên điện thoại (Mobile Preview Overlay) và máy tính. Trình tạo chữ 3D nổi bật, tách nền nhân vật 1-click. | Tạo 3-5 mẫu Thumbnail phong cách YouTube đỉnh cao có độ tương phản mạnh và title giật tít thu hút CTR cao trước khi đăng video. |

---

## TỔNG KẾT HÀNH ĐỘNG DÀNH CHO NHÓM PHÁT TRIỂN SWIFTUI

1. **Giai đoạn 1 (Foundation - Core Workspace)**:
   * Triển khai bố cục 3 cột bằng `NavigationSplitView` với dark mode theme tokens (`#0B0C0E`).
   * Xây dựng bộ `ScriptEditor` dạng văn bản có tích hợp scene tag (`/`) làm nguồn sự thật (Single Source of Truth) kết nối trực tiếp với database SQLite của `ythub`.
2. **Giai đoạn 2 (Storyboard & Shot Director)**:
   * Hiện thực hóa `Horizontal Filmstrip View` cho Storyboard.
   * Xây dựng bộ điều khiển máy quay trực quan `CameraControlInspector` (thay vì ô nhập prompt đơn thuần).
   * Tạo cấu trúc dữ liệu `Elements` (Nhân vật, Địa điểm, Style) lưu trữ trong cơ sở dữ liệu để tái sử dụng xuyên suốt các tập kịch bản.
3. **Giai đoạn 3 (Queue & Engine Integration)**:
   * Xây dựng hệ thống Background Queue quản lý các tiến trình sinh ảnh/video bất đồng bộ.
   * Kết nối adapter xuất ra `hub.json` để tương thích hoàn hảo với pipeline dựng video tự động bằng Remotion của dự án.
