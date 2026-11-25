# Prompt giao session khác: lái Chrome tạo 2 kênh Map Paradox

Copy khối dưới vào một session Claude Code mới, cwd `oh-my-channels/`. Đổi dòng ACCOUNT nếu dùng account khác.

```text
Nhiệm vụ: tạo 2 kênh YouTube (Brand Account) "Map Paradox" (EN) và "Paradojas del Mapa" (ES) bằng Claude in Chrome. KHÔNG upload video.

ACCOUNT = leehwangjun88.1@gmail.com   (cả 2 kênh dưới account này; tuyệt đối không dùng fire10.dev@gmail.com)

Đọc trước:
- oh-my-channels/channels/world-shorts/out/channel-kit/CHANNELS.md: tên, handle, mô tả, từ khoá, quốc gia. Ảnh trong cùng thư mục: logo.png (800×800), banner-en.png / banner-es.png (2560×1440).
- /Users/nino/Projects/MEGABRAIN/FIRE10/document/ai-video/chrome-profiles.md: tìm đúng profile Chrome theo email.

Luật cứng:
1. Không sub-agent. Không SendMessage về session khác. Báo cáo trực tiếp cho user trong session này.
2. Chỉ thao tác ở profile Chrome đăng nhập đúng ACCOUNT; xác minh email trước. Không thấy hoặc chưa đăng nhập thì DỪNG và nhờ user. Không bao giờ gõ mật khẩu.
3. KHÔNG bấm xác minh SĐT/ID, không nhập SĐT hay mã. Gặp thì dừng bước đó, ghi blocker, làm phần khác.
4. Không proxy, không mẹo che giấu.
5. Tiết kiệm token: browser_batch, get_page_text/find thay screenshot khi được. Lỗi lặp 2–3 lần cùng chỗ thì dừng và hỏi user.

Thứ tự: EN trước, rồi ES. Mỗi kênh:
a. YouTube (đúng ACCOUNT) → avatar → Settings → "Add or manage your channel(s)" → "Create a channel" → nhập tên. Kiểm channel switcher trước để tránh tạo trùng.
b. Studio → Customization: logo.png làm ảnh hồ sơ, banner-<lang>.png làm ảnh bìa; handle thử theo thứ tự trong CHANNELS.md (ghi lại handle được nhận); mô tả đúng nguyên văn. Với kênh ES, thêm link "Map Paradox (English)" → URL kênh EN. Publish.
c. Studio → Settings: Country (EN: United States, ES: Mexico), keywords; Advanced: "No, not made for kids"; Upload defaults: ngôn ngữ (English / Spanish (Latin America)), category Education. Feature eligibility: chỉ đọc và ghi lại.
d. Ghi YT Hub:
   export YTHUB_ACTOR=agent:chrome-channels
   ythub channel "<Tên kênh>" --handle @<handle> --url https://www.youtube.com/@<handle> --yt-id <UC…>
   ythub log - --channel "<Tên kênh>" "Tạo kênh dưới ACCOUNT; branding xong; eligibility: <…>" --kind note
   (blocker thì --kind blocker)

Xong: cập nhật mục "Trạng thái" trong /Users/nino/Projects/MEGABRAIN/FIRE10/document/ai-video/research/world-shorts-map-paradox-2026-11-24.md (handle, channel ID, eligibility, blocker, giờ +07). Báo user theo 3 mục **Tóm tắt vừa làm:** / **Giải thích kết quả:** / **Next steps:** (next: upload theo channels/world-shorts/out/<lang>/UPLOAD.md, 2 video/ngày/kênh).
```
