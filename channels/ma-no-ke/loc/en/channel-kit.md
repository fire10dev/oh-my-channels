# The Petty Ghost — bộ tạo kênh (bản tiếng Anh của Ma Nó Kể)

Quyết định: `debate/17-quoc-te/synthesis.md`. Lịch + metadata: `loc/en/publish.md`, `loc/en/meta/`, `loc/en/schedule.json`.

## Tên + handle
- Tên hiển thị: **The Petty Ghost**
- Handle: **@ThePettyGhost** (kiểm tra 23/11 23:3x +07: HTTP 404 = trống). Dự phòng: @ThePettyGhostTV, @PettyGhostStories (đều trống).
- ⚠️ Đã có một kênh khác tên `@PettyGhost` (không chữ The). Tên mình khác handle, rủi ro nhầm thấp nhưng có.
- Host trong mô tả: **Mano, the house ghost** (không xuất hiện trong lời thoại, nên đổi tên lúc nào cũng được).

## Ảnh
- Avatar 800×800: `assets/logo/en-avatar.png` (= avatar Ma Nó, không có chữ)
- Banner 2560×1440: `assets/logo/en-banner.png` (nguồn `assets/logo/en-banner.html`; render: Chrome headless `--allow-file-access-from-files --virtual-time-budget=8000`)

## Mô tả kênh (dán vào About)
```
Every house has a dark corner. Every dark corner has a ghost. And the ghosts have notes.

The Petty Ghost is animated Vietnamese folklore told from the ghost's side: the ma lai whose head flies off at night, the underworld clerk who never misses a roll call, the little ghost who guards a family's jar, the hider ghost who just wants someone to come looking. Your host is Mano, a petty little house ghost in a torn conical hat, who sits on top of the cabinet and sees everything the living get up to.

No jump scares. No gore. Just creepy ideas, and humans being ridiculous.

New episode every 3 days · Shorts daily.

All stories are fiction inspired by Vietnamese folk tales. Voices and images are made with AI. This channel does not teach rituals or spells.
```

## Từ khóa kênh
`vietnamese ghost stories, vietnamese folklore, animated horror, horror comedy, dark comedy, ghost story animation, asian folklore, satire`

## Cài đặt (YouTube Studio → Settings)
- Channel → Basic info: Country = **Vietnam** (đúng nơi cư trú). Quốc gia kênh quyết định điều khoản thanh toán, không quyết định ai được xem. Đừng khai Mỹ.
- Upload defaults: Language = **English**, Caption certification = none, Category = **Entertainment**, Audience = **No, it's not made for kids**, Altered content = **Yes**.
- Advanced: Audience = không dành cho trẻ em (cả kênh).
- Bật tính năng nâng cao (xác minh SĐT) → thumbnail tùy chỉnh + video > 15 phút + gắn Video liên quan cho short.

## Tạo kênh (user làm, ~10 phút)
1. youtube.com → avatar → Settings → **Add or manage your channels** → **Create a channel** (Brand Account, tài khoản chủ: cùng tài khoản đang giữ Ma Nó Kể).
2. Đặt tên + handle như trên, tải avatar + banner, dán mô tả, đặt Upload defaults.
3. Xác minh số điện thoại (studio.youtube.com → Settings → Channel → Feature eligibility).
4. Cấp token cho uploader (mở trình duyệt, chọn đúng Brand Account **The Petty Ghost**):
   ```bash
   cd /Users/nino/Projects/FIRE10.DEV/REPO/oh-my-channels-yt && node shared/youtube/yt.mjs auth petty-ghost && node shared/youtube/yt.mjs whoami petty-ghost
   ```
5. Chạy thử (không đăng gì), rồi đăng thật:
   ```bash
   cd /Users/nino/Projects/FIRE10.DEV/REPO/oh-my-channels/channels/ma-no-ke && node tools/loc_upload.mjs en
   node tools/loc_upload.mjs en --confirm
   ```
   32 video hẹn giờ sẵn, thumbnail/bìa set tự động. Quota upload 100 video/ngày: đủ.
6. Sau khi upload: trong Studio, gắn **Related video** của mỗi short = LONG cùng tập (API không làm được).
