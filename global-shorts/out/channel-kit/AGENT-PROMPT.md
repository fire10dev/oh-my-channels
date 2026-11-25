# Prompt giao session khác: lái Chrome tạo 3 kênh

Copy toàn bộ khối dưới đây vào một session Claude Code mới, cwd `oh-my-channels/`.
Nếu dùng account khác `leehwangjun88.1` thì sửa dòng ACCOUNT trước khi gửi.

```text
Nhiệm vụ: tạo 3 kênh YouTube (Brand Account) cho bản lồng tiếng của Off Limits Life, bằng Claude in Chrome. KHÔNG upload video.

ACCOUNT = leehwangjun88.1@gmail.com   (cả 3 kênh dưới account này; tuyệt đối không dùng fire10.dev@gmail.com)

Đọc trước:
- oh-my-channels/global-shorts/out/channel-kit/CHANNELS.md: tên kênh, handle, mô tả, từ khoá, quốc gia, ngôn ngữ. Ảnh: logo-<lang>.png (800×800), banner-<lang>.png (2560×1440), cùng thư mục.
- oh-my-channels/global-shorts/debate2/verdict.md: lý do chọn account.
- /Users/nino/Projects/MEGABRAIN/FIRE10/document/ai-video/chrome-profiles.md: cách tìm đúng profile Chrome theo email (deviceId đổi mỗi lần nối lại).

Luật cứng:
1. Không sub-agent. Không SendMessage về session khác. Báo cáo trực tiếp cho user trong session này.
2. Chỉ thao tác ở profile Chrome đang đăng nhập đúng ACCOUNT. Xác minh email trước khi làm. Không thấy profile đó, hoặc chưa đăng nhập: DỪNG, nhờ user mở hoặc đăng nhập. Không bao giờ gõ mật khẩu.
3. KHÔNG bấm xác minh số điện thoại/ID, không nhập SĐT hay mã. Gặp màn hình đòi xác minh: dừng bước đó, ghi blocker, làm tiếp phần khác được thì làm.
4. Không dùng proxy hay mẹo che giấu. Tên và mô tả công khai đây là kênh của Off Limits Life.
5. Tiết kiệm token: dùng browser_batch, get_page_text/find thay screenshot khi được. Lỗi lặp 2–3 lần cùng chỗ thì dừng và hỏi user.
6. file_upload tối đa 10 MB/lần (ảnh kit đều < 400 KB, không cần cắt).

Thứ tự: ES → PT → FR. Mỗi kênh:
a. YouTube (đúng ACCOUNT) → avatar → Settings → "Add or manage your channel(s)" → "Create a channel" → nhập Tên kênh theo CHANNELS.md. Cách này tạo Brand Account.
   Kiểm channel switcher xem kênh đó đã tồn tại chưa, tránh tạo trùng.
b. Studio → Customization:
   - Branding: logo-<lang>.png làm ảnh hồ sơ, banner-<lang>.png làm ảnh bìa.
   - Basic info: handle (thử theo thứ tự trong CHANNELS.md; bận cả hai thì thử thêm hậu tố "Life"/"Oficial"/"Officiel" và ghi lại), mô tả đúng nguyên văn khối của ngôn ngữ đó.
   - Link: "Off Limits Life (English)" → https://www.youtube.com/@OffLimitsLife
   - Publish.
c. Studio → Settings:
   - Channel → Basic info: Country (ES: Mexico · PT: Brazil · FR: France), keywords theo CHANNELS.md.
   - Channel → Advanced settings: audience = "No, not made for kids".
   - Upload defaults: ngôn ngữ video (Spanish (Latin America) / Portuguese (Brazil) / French (France)), category Education, "Altered content" = No.
   - Channel → Feature eligibility: ghi lại trạng thái Standard / Intermediate / Advanced (đọc, không bấm xác minh).
d. Lấy channel ID (UC…) và URL, rồi ghi vào YT Hub:
   export YTHUB_ACTOR=agent:chrome-channels
   ythub channel "<Tên kênh>" --handle @<handle> --url https://www.youtube.com/@<handle> --yt-id <UC…>
   ythub log - --channel "<Tên kênh>" "Tạo kênh dưới ACCOUNT; logo/banner/mô tả/handle xong; feature eligibility: <…>" --kind note
   Blocker thì: ythub log - --channel "<Tên kênh>" "<mô tả>" --kind blocker

Xong cả 3:
- KHÔNG đóng task #114/#115/#116 (task đó còn phần lên lịch 32 Shorts).
- Cập nhật /Users/nino/Projects/MEGABRAIN/FIRE10/document/ai-video/research/global-shorts-oll-long-tieng-2026-11-23.md, mục "Trạng thái": handle, channel ID, feature eligibility, blocker, giờ làm (+07).
- Báo user theo 3 mục: **Tóm tắt vừa làm:** / **Giải thích kết quả:** (bảng 3 kênh: handle, ID, eligibility, blocker) / **Next steps:** (gồm: thêm link 3 kênh mới vào phần Links của @OffLimitsLife trên fire10.dev; lên lịch Shorts theo global-shorts/out/<lang>/UPLOAD.md, ≤ 8 upload/ngày cho ACCOUNT).
```
