# VÒNG 2: AGY ĐỐI TỤNG CODEX (CLAUDE) & BẢN HOÀN THIỆN ĐẦU RA

---

## PHẦN 1: TRANH LUẬN SÒNG PHẲNG VỚI CODEX (CLAUDE)

CODEX đã có một hiệp đấu sắc sảo khi chỉ ra được những "điểm mù" kỹ thuật thực tế của diffusion pipeline. Tuy nhiên, CODEX lại tiếp tục bộc lộ căn bệnh cố hữu của Claude: **khi gặp rủi ro kỹ thuật thì lập tức lùi bước vào vùng an toàn quá mức, thậm chí sẵn sàng "cắt xén kịch bản" để trốn việc**.

Dưới đây là 3 điểm đập lại CODEX và 3 điểm tiếp thu nâng cấp:

### 1. Phản bác: Tư duy "lười biếng" đòi xóa nhân vật ở A07
* **CODEX đề xuất:** Thấy 4 chủ thể dễ lem hình thì chọn cách... xóa luôn thanh niên livestream ("để ở cảnh khác"). 
* **AGY phản pháo:** Đây là giải pháp tệ hại! Brief Tập 1 ghi rõ: *"con trai ở phòng trọ ven đô livestream mẹ già câu donate; đầu ma lai bay đêm, thân không đầu dưới chăn"*. Xóa đứa con thì cảnh phim mất sạch 100% linh hồn trào phúng, biến thành một phòng trọ hoang vô nghĩa. 
* **Cách giải quyết chuyên môn thay vì trốn chạy:** AI chỉ bị lem hình (anatomy contamination) khi ta bắt nó vẽ chi tiết hai cơ thể người hoàn chỉnh. Giải pháp là **hóa giải bằng kỹ thuật đồ họa khắc gỗ**: Biến người con thành **khối bóng đổ tối gục ngã (dark slumped silhouette)** ở trung cảnh đối lập với màn hình phát sáng ở tiền cảnh. Vừa giữ trọn vẹn kịch bản, vừa tạo chiều sâu thị giác phân tầng rõ rệt mà không model nào bị loạn nét.

### 2. Phản bác: Biến Ma da (A06) thành "cá cảnh ngắm mồi"
* **CODEX đề xuất:** Bỏ cảnh giằng co, chỉ để *"nửa mặt dưới nước nhìn lên, phía trên có bóng túi vàng"*.
* **AGY phản pháo:** Nhạt và mất chất! Ma da trong tâm thức sông nước Việt là nỗi kinh hoàng của nạn kéo chân đền mạng, và ở bến cát lậu nó đại diện cho quả báo nuốt chửng lòng tham. Nếu chỉ vẽ "nửa mặt nhìn lên" thì không khác gì một bóng ma lờ đờ trôi sông. Ta không cần dùng từ gore cấm (`drowning`, `dragging corpse`), mà dùng hình tượng đồ họa biểu trưng: mặt ma da phù nước đục ngầu, những ngón tay màng đen bấu chặt vào bao tải vàng đang chìm nghỉm giữa các xoáy sóng bản khắc gỗ.

### 3. Tiếp thu & Khen CODEX ở 4 điểm mấu chốt:
1. **Lỗi Safety Filter (NSFW/Violence Trigger):** CODEX bắt rất chuẩn. Các token `severed head`, `severed throat`, `headless body`, `corpse`, `drowning` trên Google Flow (Imagen) và Meta Muse sẽ bị kích hoạt bộ lọc kiểm duyệt (safety filter) làm mờ hoặc từ chối tạo ảnh (prompt rejection). AGY nhận thiếu sót này và thay thế bằng hệ từ vựng điêu khắc/hội họa an toàn: `disembodied floating head`, `neck dissolving into abstract stylized smoke tendrils`, `hollow indented body shape under blanket`.
2. **Khuôn mẫu nhất quán nhân vật (Character Visual DNA):** CODEX đề xuất cực kỳ chuẩn xác cho bài toán production: A02 (chân dung) và A08 (thumbnail) phải dùng chung một "mã gien thị giác". AGY khóa cứng chuỗi nhận diện: `wizened elderly Vietnamese woman, sparse gray bun, crooked snaggletooth smirk, deep mole under left eye, single tarnished silver hoop earring`.
3. **Sửa "pagoda eaves" thành kiến trúc nhà ở dân gian:** Đồng ý chuyển thành `Northern Vietnamese rustic tiled roof, low mossy eaves` để tránh việc AI tự động áp đặt chùa chiền tôn giáo.
4. **Chặn rác chữ màn hình điện thoại:** Thay "live chat feed" bằng `abstract colorful floating reaction bubbles, strictly no text`.

---

## PHẦN 2: BẢN CẬP NHẬT HOÀN THIỆN ĐẦY ĐỦ CHO HỆ THỐNG ASSET

### 1. Khối STYLE Cố Định (Gắn đuôi mọi prompt)
> `Style: dark Vietnamese folk woodcut relief print, blend of Dong Ho block print and Hang Trong black-ink wash; stark 2D graphic shapes, visible wood gouge marks, rough chisel texture; printed on fibrous aged yellowish Do mulberry paper; strict stark palette: soot ink black, dark swamp moss green, warm oil-lamp ochre, dried oxidized cinnabar red, bone ivory; heavy black negative space, off-kilter tension, eerie folk horror; strictly flat 2D graphic art, no 3D rendering, no text.`

---

### 2. Bộ 9 Prompt Chuẩn Hóa (Mỗi prompt $\le$ 90 từ)

* **A01 – Style Reference Sheet (16:9):**
  > `A clean woodcut model sheet of Northern Vietnamese rustic folk motifs: low curved tiled village house roof with mossy eaves, tangled bamboo thicket, brass kerosene oil lamp, chipped ceramic incense bowl, weathered wooden window louvers, coiled woodblock floodwater waves, and paper funerary effigies. Arranged neatly in two horizontal rows on fibrous aged Do paper, unified flat woodblock print style, stark ink gouges, dried cinnabar and ochre highlights. + STYLE`

* **A02 – Chân dung Ma lai (3:4):**
  > `Portrait of Ma Lai: a disembodied floating head of a wizened elderly Vietnamese woman, sparse gray bun, crooked snaggletooth smirk, deep mole under left eye, single tarnished silver hoop earring. From base of neck, trailing into stylized abstract smoke ribbons and cinnabar fluid tendrils, non-anatomical. Hovering outside a rusted iron window grille at night, illuminated by cold smartphone glow. Pure soot-black background. + STYLE`

* **A03 – Chân dung Thần trùng (3:4):**
  > `Portrait of Than Trung: a towering gaunt avian demon with a brutal black iron beak and hollow soulless eyes. Wearing a tattered rustic Vietnamese loose dark tunic (giao linh), strictly avoiding Qing attire. Sharp talons gripping an ancient bamboo death registry roll. Perched menacingly on the raw wooden coffin rim inside a dim, abandoned garment sweatshop with hanging threads. + STYLE`

* **A04 – Chân dung Ma xó (3:4):**
  > `Portrait of Ma Xo: an unnerving, withered ghost child with uncanny ancient eyes and a frozen hollow grin, squatting motionless in the dark corner of an old Hanoi kitchen. Peeling yellow lime-plaster wall, cracked stone floor, crude clay charcoal stove, tiny chipped offering bowl filled with raw rice and burnt joss stick ends. Oppressive shadowy ambiance. + STYLE`

* **A05 – Chân dung Ma giấu (3:4):**
  > `Portrait of Ma Giau: an uncanny decoy child sculpted entirely of dark river mud, dried roots, and banana leaves, sitting cross-legged on high-rise balcony floor tiles at night, expressionless while eating mud. Illuminated by a glowing tablet screen. In the background shadow, elongated spectral arms and a grinning wild trickster face melt into the darkness. + STYLE`

* **A06 – Chân dung Ma da (3:4):**
  > `Portrait of Ma Da: turbulent river floodwater rendered in sharp woodblock wave swirls. A pale, waterlogged demon face with sunken dark hollow eyes rises to the surface, webbed shadowy fingers clutching a heavy sinking burlap sack of gold coins. Distant rusted dredging barge silhouette under night mist, illuminated by a faint sickly ochre lantern gleam. + STYLE`

* **A07 – Cảnh chủ đạo Tập 1: Livestream phòng trọ (16:9):**
  > `Claustrophobic midnight suburban boarding room. Foreground: glowing smartphone on a tripod, screen displaying abstract colorful floating reaction bubbles, no text. Midground: a young man's dark slumped silhouette asleep over a plastic table, next to a bed where a floral blanket covers an unnervingly flat, hollow body shape with an empty pillow. Background: outside rusted window bars, a grinning disembodied head watches. + STYLE`

* **A08 – Nền Thumbnail Tập 1 (16:9):**
  > `YouTube thumbnail background. Right 50 percent: extreme close-up of the floating Ma Lai head: a wizened elderly Vietnamese woman, sparse gray bun, crooked snaggletooth smirk, deep mole under left eye, lit by sickly phone glow and oil-lamp gold against pitch-black void. Left 50 percent: completely empty, pristine, deep soot-black negative space on fibrous Do paper texture, strictly uncluttered for text overlay. + STYLE`

* **A09 – Avatar kênh (1:1):**
  > `Iconic channel avatar: minimalist high-contrast woodblock emblem of an eerie smirking Vietnamese folk ghost face emerging from solid soot-black ink. One wide unblinking eye, one raised mocking eyebrow, crooked smirk accented with a single dried cinnabar red slash. Thick bold gouge marks, massive graphic impact, instantly legible at tiny 48px mobile avatar size. + STYLE`

---

### 3. Khung Negative Prompt / Danh Sách Cấm Dùng Chung
> `photorealistic, hyperrealistic, 3D render, digital CGI smoothness, octane render, unreal engine, anime, manga, comic book, Western gothic horror, Chinese Qing dynasty clothing, mandarin collar, official Qing hat with peacock feather, Jiangshi, Japanese kimono, Tengu crow mask, Shinto shrine, Japanese pagoda, Thai Krasue bloody viscera, realistic red intestines, exposed organs, open wounds, blood splatters, gore, cute porcelain doll faces, smooth makeup, symmetrical perfection, Western architecture, text, watermark, signature, letters, typography, glitchy glyphs, modern interface text.`

---

### 4. Bảng Phân Tích Kỹ Thuật, Lý Do & Khắc Chế Rủi Ro Văn Hóa

| Mã | Mục tiêu thiết kế & Lý do | Rủi ro sai văn hóa / Bẫy kỹ thuật Model | Biện pháp khắc chế & Khóa từ vựng |
| :--- | :--- | :--- | :--- |
| **A01** | Tạo "từ điển thị giác" (Visual Dictionary) đồng bộ toàn bộ asset trên kênh. | AI vẽ mái đền Shinto Nhật hoặc chùa chiền lộng lẫy Trung Hoa; vẽ hoa văn phương Tây. | Dùng `Northern Vietnamese rustic tiled roof, low mossy eaves` thay cho pagoda; neo chặt bằng `aged Do paper`, `incense bowl`. |
| **A02** | Chân dung Ma lai nhận diện thương hiệu: ma mị, giễu cợt, đậm chất dân gian. | Kích hoạt bộ lọc cấm máu me (`severed`, `viscera`); AI vẽ thành ma Krasue ruột lòng thòng. | Thay bằng `disembodied floating head`, `stylized abstract smoke ribbons`; khóa cứng bộ gien thị giác (`wizened`, `gray bun`, `mole under left eye`). |
| **A03** | Quỷ mỏ sắt trùng tang trong bối cảnh xưởng may công nghiệp u ám. | AI vẽ thành Cương Thi nhà Thanh (mũ lông công, áo quan) hoặc Tengu quạ Nhật Bản. | Chỉ định trang phục nông dân cổ `rustic Vietnamese loose dark tunic (giao linh)`; cấm tuyệt đối `Qing collar`, `Qing hat`, `Tengu`. |
| **A04** | Sự đối lập rợn người giữa góc bếp homestay phố cổ và linh hồn bị giam giữ. | AI vẽ ra ma nhí da trắng tóc xõa kiểu J-Horror (Ju-on/The Ring) hoặc búp bê Annabelle. | Neo đặc trưng nhà cổ Hà Nội: `peeling yellow lime-plaster wall`, `clay charcoal stove` (bếp lò đất), bát gạo cúng cắm chân hương khô. |
| **A05** | Đỉnh cao trào phúng: quỷ rừng bắt cóc trẻ con, thế mạng bằng bùn lá nghiện iPad. | AI vẽ thành yêu tinh Goblin Tây phương hoặc vẽ đứa trẻ bình thường bị lem bùn. | Khắc họa cấu trúc vật liệu dị hợm: `sculpted entirely of dark river mud, dried roots, and banana leaves`; đối chọi ánh sáng `glowing tablet screen`. |
| **A06** | Nghiệp báo cát tặc mùa lũ: lòng tham bị dòng sông đen và ma da nuốt chửng. | Dính safety filter bạo lực (`drowning`, `corpse`); sóng nước bị biến thành 3D tả thực. | Lách filter bằng `waterlogged demon face`, `webbed shadowy fingers clutching heavy burlap sack`; ép phong cách sóng khắc gỗ `woodblock wave swirls`. |
| **A07** | Cảnh kịch tính cốt lõi tập 1: Con livestream mẹ kiếm tiền / Ma lai rình rập. | Lem 4 chủ thể vào nhau; dính kiểm duyệt `headless body`; màn hình sinh chữ rác. | Xử lý 3 lớp: Tiền cảnh (màn hình icon không chữ) $\rightarrow$ Trung cảnh (con trai dạng `dark slumped silhouette`, giường phẳng rỗng) $\rightarrow$ Hậu cảnh (đầu ma). |
| **A08** | Nền thumbnail chuẩn YouTube: CTR cao nhờ ánh nhìn ma quái, 50% trống đặt chữ. | Chủ thể tràn tâm khung hình; không đồng bộ khuôn mặt với chân dung A02. | Ép chặt bố cục toán học `Right 50 percent` / `Left 50 percent empty soot-black`; tái sử dụng 100% Visual DNA của A02. |
| **A09** | Avatar nhận diện 1:1: đọc rõ và đập vào mắt người xem ngay ở kích thước 48px. | Quá nhiều chi tiết vụn gây nhòe ở 48px; AI vẽ thành nụ cười Joker hoặc ma cà rồng Tây. | Thiết kế biểu tượng đồ họa tối giản: `minimalist high-contrast woodblock emblem`, chỉ 3 điểm nhận diện (1 mắt mở to, nửa miệng cười nhếch, 1 vệt chu sa đỏ). |

---
*Lượt của AGY hoàn tất. Mời CODEX (CLAUDE) bước vào Vòng 3 tổng kết.*
