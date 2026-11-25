# Brief: biến YT Hub thành Studio sản xuất YouTube đúng nghĩa

## Bối cảnh
- 1 người + nhiều AI agent vận hành 6 kênh YouTube (tài liệu, hoạt hình stickman, lịch sử, nhạc lofi, truyện ma Việt, baby sensory). Video long + short, EN + VI.
- YT Hub hiện tại: app macOS SwiftUI + SQLite (bảng channel, video{stage idea→script→assets→render→ready→published}, event, task, fact, asset) + CLI Python `ythub` cho agent ghi trạng thái. App chủ yếu CHỈ ĐỌC: dashboard ngoại lệ, chi tiết video, tab "Dựng" vẽ manifest hub.json (parts→slots, bước script/tts/visual/render/review).
- Pipeline mỗi kênh là script riêng (Python/zsh/Node): TTS local (Kokoro, VieNeu), gen ảnh, Remotion render, ffmpeg, upload YouTube Data API v3 (chỉ 1 kênh có). Agent CLI có trên máy: claude (Claude Code, có -p --output-format stream-json --resume), codex, agy.
- Mỗi kênh tự đặt cấu trúc folder ⇒ sẽ refactor big-bang về 1 chuẩn chung.

## Yêu cầu của chủ kênh
1. Mọi khâu sản xuất trực quan hoá bằng GUI + nút: draft kịch bản, brainstorm/discuss (nhiều AI tranh luận), vẽ cảnh (gen ảnh), dựng bằng Remotion / HyperFrames, upload YouTube qua API.
2. Nói chuyện với AI agent qua CLI ngay trong app (theo từng video, có ngữ cảnh).
3. Nhúng editor Remotion/HyperFrames vào app để tự sửa tay.
4. Một chuẩn chung cho mọi kênh: cấu trúc folder, database, metadata.

## Thiết kế nháp hiện tại
- `channels/<kênh>/studio.json`: khai báo nút theo stage (lệnh + biến {code},{script}…, confirm cho upload) + prompt nhanh cho agent. Swift không biết kênh nào.
- Job runner trong app (Process + zsh -lc), console log, kết thúc ghi event/blocker.
- Agent panel: mỗi lượt `claude -p … --output-format stream-json --resume <sid>`, cwd = thư mục kênh, session lưu theo video.
- Editor: chạy `npx remotion studio` / HyperFrames preview như job sống lâu, hiện trong WKWebView.
- Chuẩn kênh: `channel.json`, `studio.json`, `videos/<CODE>/{script.md, meta.json, assets/, build/hub.json, out/}`, `tools/`, `editor/`.

## Tham khảo thị trường (đọc file market.md đính kèm bên dưới nếu có)

## Yêu cầu đầu ra (mỗi lượt)
1. Chỗ thiết kế nháp sai/thiếu/rủi ro (thẳng thắn).
2. Chuẩn folder + schema DB + meta.json đề xuất cụ thể (cây thư mục, cột/bảng mới, JSON mẫu).
3. Danh sách màn hình/nút của Studio theo từng khâu, ưu tiên P0/P1/P2.
4. Cách tích hợp agent CLI tốt nhất (stream-json vs ACP vs MCP vs PTY terminal nhúng), quản lý quyền + chi phí.
5. Ý tưởng ăn tiền học từ sản phẩm/repo khác (ghi rõ tên nguồn).
