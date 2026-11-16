# VÒNG 1: AGY PHẢN BIỆN CODEX (CLAUDE) & BẢN ĐỀ XUẤT CẬP NHẬT

---

## PHẦN 1: PHẢN BIỆN THẲNG THẮN ĐỀ XUẤT CỦA CODEX

CODEX đưa ra một khung cơ sở an toàn, nhưng **an toàn đến mức nhạt, thiếu am hiểu kỹ thuật prompt trên các mô hình sinh ảnh (Meta Muse, Google Flow/Nano Banana), và đánh mất linh hồn của Brief**. Cụ thể 4 điểm lỗi cốt tử:

1. **Ảo tưởng về mã màu Hex (`#0C0E10`, `#C49A45`...) trong Text-to-Image:**
   * CODEX nhét nguyên một dải mã Hex vào khối `STYLE`. Đây là lỗi kinh điển của người làm prompt lý thuyết. Các diffusion/flow-matching model hiện đại (Muse, Flow/Imagen) không render màu dựa trên mã hex; chúng hiểu token ngữ nghĩa (`soot ink black`, `raw oxidized cinnabar`, `aged oil-lamp ochre`). Giữ mã hex chỉ làm loãng token budget và khiến AI bỏ qua bảng màu.
2. **Đánh rơi hoàn toàn 20% "trào phúng" – biến ma Việt thành kinh dị sáo rỗng:**
   * Ở **A05 (Ma giấu)**: Brief yêu cầu rõ *"đứa trẻ nặn bằng bùn lá ngồi ăn với iPad"*. CODEX lại prompt thành *"spirit... offering a bowl of mud and leaves"*, vứt mất chi tiết đắt giá nhất là chiếc iPad và đứa trẻ bùn trơ tráo.
   * Ở **A06 (Ma da)**: Brief yêu cầu *"kẻ ôm túi vàng chìm"*. CODEX chỉ tả bàn tay ngoi lên như phim zombie hạng B, mất hẳn tính nhân quả và mỉa mai lòng tham của cát tặc.
   * Ở **A04 (Ma xó)**: Biến ma xó thành "pale ghost child" kiểu Sadako/The Grudge của Nhật, trong khi ma xó Bắc Bộ/vùng cao mang tính thờ cúng, quắt queo, cổ quái và lì lợm.
3. **Bẫy văn hóa ngoại lai (Cultural Contamination) cực nặng ở A03:**
   * CODEX dùng cụm: *"mandarin-era official robe"*. Nếu đưa cụm này vào Muse hay Nano Banana, 100% AI sẽ nhả ra áo quan Mãn Thanh triều Thanh (với mũ đính lông chim, áo Cương Thi - Jiangshi) hoặc Tengu quạ của Nhật. Tuyên bố chặn ở phần ghi chú nhưng chính prompt lại dùng từ khóa mồi cho AI vẽ sai văn hóa. Phải chỉ định rõ dạng thức trang phục Việt bản địa (`loose rustic peasant giao linh / ao ba ba`, cấm triệt để `Qing collar`).
4. **Prompt A07 quá tải chủ thể (Overcrowded Composition):**
   * Trong một khung hình 16:9, CODEX nhét: chân máy điện thoại, màn hình livestream, giường có xác mất đầu, thanh niên ngủ gục, cửa sổ và đầu ma lai lơ lửng bên ngoài. Đây là "công thức tự sát" với AI: các chủ thể sẽ lem vào nhau (đầu ma mọc ra từ thân thanh niên, điện thoại biến dạng). Cần phân lớp tiền cảnh - trung cảnh - hậu cảnh gắt gao theo nguyên lý cắt lớp tranh khắc gỗ.

**Điểm giữ lại:** Khái niệm "dải ruột trừu tượng dạng thớ khắc gỗ" (abstract carved ribbons) của A02 để tránh gore và ý tưởng chia lề âm bản cho thumbnail A08.

---

## PHẦN 2: BẢN CẬP NHẬT ĐẦY ĐỦ CHO HỆ THỐNG ASSET

### 1. Khối STYLE Cố Định (Gắn đuôi mọi prompt)
> `Style: dark Vietnamese folk woodcut relief print, blend of Dong Ho block print and Hang Trong black-ink wash; stark 2D graphic shapes, visible wood gouge marks, rough chisel texture; printed on fibrous aged yellowish Do mulberry paper; strict stark palette: soot ink black, dark swamp moss green, warm oil-lamp ochre, dried oxidized cinnabar red, bone ivory; heavy black negative space, off-kilter tension, uncanny folk horror; strictly flat 2D, no glossy 3D, no text, no modern typography.`

*(Ghi chú: Thay toàn bộ hex bằng token chất liệu trực quan; ép chết phong cách khắc bản gỗ phẳng, chặn chất 3D bóng bẩy).*

---

### 2. Bộ 9 Prompt Chuẩn Hóa (Mỗi prompt $\le$ 90 từ)

* **A01 – Style Reference Sheet (16:9):**
  > `A clean woodcut model sheet of Northern Vietnamese eerie folk motifs: low curved mossy pagoda eaves, tangled bamboo thicket, brass kerosene oil lamp, chipped ceramic incense bowl, rusted wooden window louvers, coiled floodwater waves, and paper funerary effigies. Arranged neatly in two horizontal rows on fibrous aged Do paper, unified flat woodblock print style, stark ink gouges, dried cinnabar and ochre highlights. + STYLE`

* **A02 – Chân dung Ma lai (3:4):**
  > `Portrait of Ma Lai: a floating severed head of a wrinkled elderly Vietnamese woman at night. Messy gray bun, piercing mocking smirk, lit by harsh smartphone glow. Below the neck, severed throat trails into stylized abstract smoky sinews and thin cinnabar ribbon tendrils, strictly non-anatomical. Lurking outside a corroded iron window grill. Oppressive soot-black background. + STYLE`

* **A03 – Chân dung Thần trùng (3:4):**
  > `Portrait of Than Trung: a towering gaunt avian demon with a brutal black iron beak and hollow eyes. Wearing a tattered rustic Vietnamese loose dark tunic (giao linh), avoiding Qing attire. Talons gripping a worn bamboo death registry ledger. Perched menacingly on a raw wooden coffin edge inside an abandoned dim garment sweatshop. + STYLE`

* **A04 – Chân dung Ma xó (3:4):**
  > `Portrait of Ma Xo: a tiny, withered ghost child with uncanny ancient eyes and an unsettling frozen grin, squatting motionless in the shadowy corner of an old Hanoi kitchen. Peeling yellow lime-plaster wall, cracked floor, a crude clay charcoal stove, a tiny chipped offering bowl of dried rice with burnt joss sticks. + STYLE`

* **A05 – Chân dung Ma giấu (3:4):**
  > `Portrait of Ma Giau: a bizarre decoy child sculpted entirely from black river mud, dried roots, and banana leaves, sitting cross-legged on a modern balcony tiles at night, staring blankly while eating mud, illuminated by a glowing tablet screen. In the background shadows, elongated spectral arms and a grinning wild trickster face vanish into darkness. + STYLE`

* **A06 – Chân dung Ma da (3:4):**
  > `Portrait of Ma Da: turbulent muddy floodwater with sharp carved woodblock wave lines. A bloated, pale waterlogged corpse hand bursting upward, dragging down a frantic drowning sand-miner who clutches a heavy sinking burlap sack of gold coins. Distant rusted dredging barge silhouette casting a faint sickly ochre reflection. + STYLE`

* **A07 – Cảnh chủ đạo Tập 1: Livestream phòng trọ (16:9):**
  > `Claustrophobic midnight suburban boarding room. Foreground: glowing smartphone on a cheap tripod, screen showing a live chat feed without legible text. Midground: a young man asleep slumped on a plastic table; behind him, a bed with a floral blanket covering a headless female body, pillow indented empty. Background: through rusted window bars, a severed floating head watches with a mocking grin. + STYLE`

* **A08 – Nền Thumbnail Tập 1 (16:9):**
  > `YouTube thumbnail background. Right 50 percent: extreme close-up of the floating Ma Lai head, wrinkled face, predatory mocking eyes, lit by harsh oil-lamp gold and sickly cyan phone light against pitch-black void. Left 50 percent: empty, clean, deep soot-black negative space with subtle Do paper texture, strictly uncluttered for text overlay. + STYLE`

* **A09 – Avatar kênh (1:1):**
  > `Iconic channel avatar: minimalist, high-contrast woodblock emblem of a sinister smirking Vietnamese folk ghost face emerging from solid soot-black ink. One wide staring eye, one raised mocking eyebrow, half-smile highlighted in single dried cinnabar red slash. Thick chisel strokes, massive graphic impact, instantly readable at 48px size. + STYLE`

---

### 3. Khung Negative Prompt / Danh Sách Cấm Dùng Chung
> `photorealistic, 3D render, digital CGI smoothness, anime, manga, Western gothic horror, Chinese Qing dynasty clothing, mandarin collar, official Qing hat with peacock feather, Jiangshi, Japanese kimono, Tengu crow mask, Thai Krasue bloody dripping viscera, realistic intestines, gory meat, wet organs, bright crimson splatters, cute doll faces, symmetrical perfection, Western architecture, text, words, watermark, logo, blurry lines, modern fonts.`

---

### 4. Đánh Giá Lý Do, Rủi Ro Văn Hóa & Biện Pháp Kỹ Thuật Cho Từng Prompt

| Mã Prompt | Mục tiêu thiết kế & Lý do | Rủi ro sai văn hóa / Rủi ro Model | Cách chặn & Token can thiệp |
| :--- | :--- | :--- | :--- |
| **A01** *(Style sheet)* | Neo cố định bộ từ vựng thị giác (visual dictionary) cho toàn bộ workflow trên Muse/Flow. | AI vẽ kiến trúc chùa chiền cong vút kiểu Nhật Bản (Shinto) hoặc mái đình Trung Hoa đồ sộ. | Ép rõ: `Northern Vietnamese low curved mossy pagoda eaves`, loại bỏ mái cao vút; neo bằng `Do paper` và `incense bowl`. |
| **A02** *(Ma lai)* | Chân dung nhận diện ma lai: vừa ma mị vừa có nét giễu cợt của bà già quái thai. | Model biến thành Krasue Thái Lan với chùm tim gan phèo phổi lòng thòng đẫm máu. | Dùng `stylized abstract smoky sinews`, `cinnabar ribbon tendrils`; cấm triệt để `anatomical`, `bloody organs`, `viscera`. |
| **A03** *(Thần trùng)* | Thể hiện quỷ mỏ sắt chuyên bắt người theo giờ trùng tang trong bối cảnh xưởng may. | AI tự động áp trang phục Cương Thi nhà Thanh (Qing dynasty official) hoặc quạ Tengu Nhật. | Thay "mandarin robe" bằng `rustic Vietnamese loose dark tunic (giao linh)`; cấm `Qing hat`, `mandarin collar`, `Tengu`. |
| **A04** *(Ma xó)* | Không khí u uẩn góc bếp phố cổ, sự tương phản giữa homestay du lịch và linh hồn bị nhốt. | Dễ ra ma nhí da trắng bệch tóc xõa kiểu J-Horror (The Grudge / Ju-on). | Neo chất liệu bản địa: `peeling yellow lime-plaster wall` (tường vàng vôi Hà Nội), `clay charcoal stove` (bếp than tổ ong/hòa lò đất), bát gạo cúng. |
| **A05** *(Ma giấu)* | Đỉnh cao trào phúng: quỷ rừng bắt cóc trẻ con, tráo bằng búp bê bùn lá nghiện iPad. | AI vẽ thành quái vật phương Tây (Goblins/Imps) hoặc đứa trẻ bình thường lấm bẩn. | Miêu tả hình khối vật liệu: `sculpted entirely from black river mud, dried roots, and banana leaves`, đặt thẳng đối trọng công nghệ `glowing tablet screen`. |
| **A06** *(Ma da)* | Khắc họa nghiệp báo lòng tham ở bến cát lậu mùa lũ; dòng nước xoáy nuốt chửng kẻ tham lam. | Nước bị vẽ thành sóng 3D tả thực; bàn tay ma da biến thành zombie Tây phương hoặc Davy Jones. | Ép sóng nước theo phong cách đồ họa thủy ba dân gian (`sharp carved woodblock wave lines`); neo đạo cụ túi vàng rơi (`sinking burlap sack of gold coins`). |
| **A07** *(Cảnh chủ đạo)* | Thiết lập không gian phân tầng: bi kịch trần trụi (livestream mẹ kiếm tiền) và kinh dị rình rập. | 4 chủ thể đè lên nhau, model hòa trộn đầu người sống và đầu ma lơ lửng. | Chia rõ layout 3 lớp: `Foreground` (tripod), `Midground` (thân xác không đầu trên giường), `Background` (đầu ma ngoài chấn song). |
| **A08** *(Thumbnail nền)* | Tạo CTR cao cho YouTube: mắt ma nhìn thẳng người xem, chừa không gian text an toàn 100%. | AI vẽ chủ thể tràn ra giữa hoặc lấp đầy khung hình khiến không còn chỗ đặt tiêu đề. | Khống chế bố cục toán học: `Right 50 percent` cho mặt ma, `Left 50 percent` chỉ định là `empty, clean, deep soot-black negative space`. |
| **A09** *(Avatar kênh)* | Điểm chạm thương hiệu ở kích thước siêu nhỏ (favicon/mobile 48px). Nét cười nhếch mép ma mãnh. | Chi tiết quá vụn sẽ biến thành một đốm đen vô nghĩa khi co về 48px; hoặc ra mặt Joker/vampire Tây. | Thiết kế icon tối giản: `minimalist high-contrast emblem`, chỉ giữ 3 điểm nhấn (1 mắt mở to, nửa nụ cười nhếch, 1 vệt chu sa đỏ). |

---
*Lượt của AGY hoàn tất. Mời CODEX (CLAUDE) tiếp tục Vòng 2.*
