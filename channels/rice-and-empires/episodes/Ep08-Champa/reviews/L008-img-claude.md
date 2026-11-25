# L008 — Claude duyệt hình ảnh (Muse.ai, 2026-11-13 19:30 +07)

Cách soát: xem 45 ảnh ở cỡ 800 px (lưới 2×2) + 4 khung mỗi clip, đối chiếu prompt (`shorts/src/l008.images.json`), dòng script
và FACT-CHECK §4. Codex soát độc lập: `tools/codex_image_review.sh` → `L008-img-r1.md` (chưa chạy được: Codex chưa đăng nhập).

## Gộp Claude + Codex (19:45 +07) — danh sách làm lại cuối cùng
Codex r1 (`L008-img-r1.md`): FAIL, 4 🔴 + 23 🟠. Claude kiểm lại các điểm Codex nêu mà Claude không bắt (phóng to ảnh gốc):
| File | Codex | Claude kiểm lại | Kết luận |
|---|---|---|---|
| img-27 | 🔴 cờ đỏ có hình vàng giống quốc kỳ | Phóng to: cờ đuôi nheo đỏ trơn + 1 cờ vàng trơn, không có ngôi sao/hình | 🟡 giữ |
| img-02 | 🔴 đá vôi kiểu Hạ Long | Núi xanh tròn sát biển (kiểu đèo Hải Vân), không phải tháp đá vôi | 🟡 giữ |
| img-42 | 🟠 có bàn xoay | Bình đặt trên đất, người đi vòng quanh, không thấy bàn xoay | OK |
| img-19 | 🟠 thuyền mũi cao tưởng tượng | Phù điêu Bayon có thuyền chiến Chăm mũi cao → hợp lý | 🟡 giữ |
| clip-1 | 🔴 tháp kiểu tưởng tượng | Tháp có trụ ốp kiểu Chăm nhưng chóp nhiều tầng lòe loẹt | 🟠 nên làm lại |
| img-09 | 🟠 không giống Đồng Dương | Đồng ý: lời đọc nêu tên Đồng Dương, ảnh kiểu Thái/Khmer | 🟠 |
| img-33 | 🟠 xương rồng | Đồng ý (lỗi prompt của Claude) | 🟠 |
| img-45 | 🟠 tháp nhọn chung chung | Đồng ý: chóp nhọn kiểu Khmer | 🟠 |
| img-04/05/06/12/24/37/38/39/41 | 🟠 phong cách chung chung | Đúng là chung chung, nhưng không sai sử rõ ràng | 🟡 giữ (làm lại nếu còn quota) |
Codex **không** bắt img-10 (người khắc bia mặc áo quan) và img-28 (thành Vijaya kiểu Việt) — Claude giữ 🟠.

**Phải làm lại (13 file): clip-2.jpg + clip-2.mp4 (hoặc bỏ, chỉ để bản đồ) · img-08 · img-09 · img-10 · img-22 · img-28 · img-30 · img-33 · img-35 · img-44 · img-45 · clip-3.jpg + clip-3.mp4.**
**Nên làm lại:** clip-1.jpg + clip-1.mp4 (cảnh mở đầu).

**Kết luận: FAIL — 2 🔴, 8 🟠 cần làm lại trước khi render.**

## 🔴 Không được dùng
| File | Dòng | Lỗi | Xử lý |
|---|---|---|---|
| clip-2.mp4 | 11 | Cờ đỏ ô vàng giống quốc kỳ hiện đại; đảo đá vôi vịnh Hạ Long (miền Bắc, không phải bờ Chăm); thuyền rồng kiểu tưởng tượng; gần ảnh thật | Bỏ |
| clip-2.jpg | 11 | Đảo đá vôi kiểu Hạ Long; thuyền đầu rồng buồm vàng kiểu tưởng tượng | Bỏ — dòng 11 chỉ để bản đồ `sea_route`, hoặc làm lại (prompt R-clip2) |

## 🟠 Sai rõ, nên làm lại
| File | Dòng / nội dung | Lỗi | Prompt sửa |
|---|---|---|---|
| img-08 | vua Chăm dâng lễ | Vua mặc long bào kiểu Trung Hoa/Việt, thầy tế như nho sĩ đội mũ — không phải trang phục Chăm | R08 |
| img-10 | khắc bia | Người khắc mặc áo quan, đội mũ kiểu Việt/Hoa → như thể người Việt khắc bia Chăm | R10 |
| img-22 | vua Chăm bị bắt (1069) | Vua Chăm quỳ trước vua Việt → khung cảnh hạ nhục, phe thắng | R22 |
| img-28 | vây thành Vijaya 1471 | Thành vẽ thành đá xám, cổng lầu kiểu Việt, lính đội nón lá → giống thành Việt, không phải thành gạch Chăm | R28 |
| img-30 | người bị bắt đi về Bắc | Đảo đá vôi kiểu Hạ Long; người Chăm đội nón lá, áo kiểu Việt | R30 |
| img-35 | chỉ dụ 1832 | Quý tộc Chăm phủ phục sát đất → hạ nhục; dễ gây tranh cãi | R35 |
| img-44 | bánh gừng | Trên mâm là **củ gừng sống**, không phải bánh gừng | R44 |
| clip-3.mp4 | kết video (dòng 59) | Tháp nhọn kiểu Khmer/Miến Điện, không phải tháp Chăm (kalan) | R-clip3 |

## 🟡 Chấp nhận được (ghi lại để biết)
- img-01, 02, 13: đỉnh tháp hơi giống chùa/pagoda. · img-07: linga không có bệ yoni có máng. · img-09: sư áo vàng nghệ kiểu Theravada hiện đại, tượng Phật kiểu Thái.
- img-19: sóng biển lớn trước Angkor (thực tế là Biển Hồ/sông). · img-24: vài đảo đá nhọn ở nền. · img-25: thuyền mái che giống thuyền rồng du ngoạn.
- img-31: triều Minh vẽ chung chung. · img-32: ngai rồng kiểu Hoa. · img-33: xương rồng (do prompt của mình; cây gốc châu Mỹ, có ở Ninh Thuận nay, thời điểm du nhập chưa kiểm). · img-37: mũ miện kiểu Thái.
- img-14: nông dân đội nón lá trên đồng "lúa Champa" — người Chăm nay cũng đội nón, chấp nhận.

## OK
img-03, 04, 05, 06, 11, 12, 15, 16, 17, 18, 20, 21, 23, 26, 27, 29, 34, 36, 38, 39, 40, 41, 42, 43, 45, clip-1.jpg/mp4, clip-3.jpg.

## Prompt làm lại (dán vào Muse.ai; giữ tên file; 16:9)
Tiền tố sơn mài dùng chung (LAC): *Traditional Vietnamese lacquer painting (son mai), glossy black lacquer, gold leaf, vermilion and eggshell inlay,
flat decorative composition, museum quality, wide landscape 16:9, no text, no letters, no flags, no banners with symbols, no modern objects,
no limestone karst islands, no Ha Long Bay.*
Trang phục Chăm cổ (CHAM): *Cham people dressed as in Champa sculpture (Mỹ Sơn, Trà Kiệu, Tháp Mắm): bare-chested men with sampot-style
wrapped lower garment, jewelled collars, armlets and tall tiered crowns for royalty; Brahmin priests with bare chest, white dhoti, sacred thread,
hair in a topknot; NOT Chinese or Vietnamese court robes, NOT mandarin hats, NOT conical hats.*

- **R08** img-08: LAC + CHAM. A Cham king with a tall gold tiered crown, bare chest and jewelled collar, holding a tray of offerings before a red-brick Cham kalan tower in a jungle valley; two Brahmin priests beside him.
- **R10** img-10: LAC + CHAM. A Cham Brahmin priest (bare chest, white dhoti, topknot) carving lines of script into an upright sandstone stele by torchlight; the script shown as abstract decorative marks, no readable text.
- **R22** img-22: LAC. A Cham king and his attendants standing, dignified, in front of a Vietnamese royal pavilion of the 11th century, courtiers on both sides; a formal, restrained meeting, nobody kneeling, no weapons drawn. Cham figures per CHAM; Vietnamese courtiers in Lý-dynasty robes.
- **R28** img-28: LAC. The red-brick walls of a Cham citadel with square corner bastions and a Cham brick gate tower (kalan style, no curved Chinese roofs) at dusk, smoke rising behind the walls, small figures far away, no gore.
- **R30** img-30: LAC + CHAM (commoners: sarongs, cloth headwraps, no conical hats). Families walking along a sandy coastal road with low green hills and coconut palms under a grey sky, faces not detailed, restrained, no gore.
- **R35** img-35: LAC. Vietnamese officials of the Nguyễn court (19th century) standing at the gate of a modest Cham palace holding a sealed edict; Cham nobles in white (Bani/Ahier dress, white turbans) standing opposite, heads slightly lowered, nobody prostrate; restrained, sad.
- **R44** img-44 (WC = *Soft watercolor and ink on textured paper, warm natural light, painterly, wide 16:9, no text, no flags*): A Cham family festival table with plates of **bánh gừng (golden fried flower-shaped ginger cookies covered in white sugar icing)**, rice cakes wrapped in leaves, fruit; no raw ginger roots; warm light inside a village home.
- **R-clip2** clip-2.jpg (nếu muốn giữ clip): LAC. A Cham trading port at a sandy river mouth on the central Vietnam coast: low green hills, coconut palms, a red-brick Cham tower on a hill; a plain wooden sailing ship with two rectangular brown mat sails (no dragon head, no flags) leaving for the open sea, merchants on a wooden pier. Clip: *Start frame = clip-2.jpg. The sails fill with wind and the ship moves slowly toward the open sea, gentle waves, slow pan. Lacquer painting style, not photorealistic, no flags, no banners.*
- **R-clip3** clip-3.jpg + mp4: WC. Three red-brick Cham kalan towers at sunrise (square towers with tiered stepped roofs and corner ornaments, like Po Klong Garai or Po Nagar — NOT pointed Khmer, Thai or Burmese spires), dry hills of Ninh Thuận, light climbing the bricks. Clip: *Start frame = clip-3.jpg. Sunlight slowly climbs up the red bricks, mist lifts, slow push-in, hopeful.*
- **R09** img-09: LAC. The Buddhist monastery of Đồng Dương (Indrapura, late 9th century): red-brick halls and a brick tower on a long axis, a large seated Buddha in Đồng Dương style (broad face, thick lips, flat robe, both hands on knees), Mahayana monks in brown robes; NOT a Thai or Khmer temple, no flame halo.
- **R33** img-33: LAC + CHAM. A small Cham royal court in the dry, sunny south (Panduranga, today Ninh Thuận): sandy plain, low dry hills, scattered thorny shrubs and palmyra palms, NO cactus, NO desert dunes; an old Cham king in white and gold under a simple canopy, a red-brick kalan tower on a hill behind.
- **R45** img-45: WC. Red-brick Cham kalan towers on a dry hill at sunrise — square towers with stepped tiered roofs, corner ornaments and false doors, like Po Klong Garai; NOT pointed Khmer, Thai or Burmese spires; a child walking toward them on a path.
- **R-clip1** clip-1.jpg + mp4: LAC. Three red-brick Cham kalan towers of Mỹ Sơn in a green jungle valley at dawn, square towers with stepped tiered roofs and pilasters, plain (not gilded), mist in the trees; NOT pagodas, NOT pointed spires. Clip: *Start frame = clip-1.jpg. Mist drifts slowly through the towers, slow camera push-in, birds fly up from the trees, calm. Lacquer painting style, not photorealistic.*

## Vòng 2 (20:17 +07) — 13 file làm lại từ Muse.ai (`~/Downloads/l008-redo.zip`)
| File | Claude | Codex r2 (`L008-img-r2.md`) |
|---|---|---|
| img-08, 10, 22, 28, 30, 33, 35, 44, 45 | ✅ lỗi vòng 1 đã sửa (img-10: ký tự trên bia hơi giống chữ cái 🟡) | OK |
| img-09 | 🟡 Phật ổn, dãy điện mái cong kiểu Hoa | 🟠 vẫn giống chùa Thái, chưa ra Đồng Dương |
| clip-1 jpg/mp4, clip-3 jpg/mp4 | ✅ tháp kalan Chăm | OK |
| clip-2 jpg/mp4 | ✅ bờ cát, dừa, thuyền buồm cói, không cờ (🟡 cờ đuôi nheo cam trơn; người trên cầu tàu đều đội mão) | OK |
Kết luận: còn 1 🟠 (img-09). Đã import 16 file, render đang chạy.

## Vòng 3 (21:11 +07) — img-09 làm lại lần 2
Claude ✅ (thành gạch một trục, điện cột mái thấp, tháp kalan, không hào quang lửa). Codex r3 🟠: bố cục đã sửa, mặt Phật còn chung chung, chưa rõ nét Đồng Dương.
Hết 3 vòng (luật chủ kênh) → giữ img-09; ảnh chỉ hiện vài giây và không sai sử rõ ràng.

## 18 ảnh 16:9 mới img-46..63 (21:20 +07) — thay 18 cảnh 9:16 dùng lại từ S003
Claude: tất cả ✅ (🟡 img-46 vài thuyền nhỏ trông hơi hiện đại; img-50 bản đồ méo, Sumatra nhỏ; img-57 đèn kiểu Ả Rập; img-58 thuyền rồng có lầu mái kiểu Hoa).
Codex r4 (`L008-img-r4.md`): FAIL, 0 🔴, 7 🟠. Claude đối chiếu ảnh gốc:
| File | Codex 🟠 | Claude |
|---|---|---|
| img-49, 60 | tháp nhọn kiểu Khmer/Thái | Không đồng ý: thân vuông, mái tầng giảm dần, tháp góc nhỏ — đúng dạng kalan (kiểu Po Klong Garai) → giữ |
| img-55 | mái nhiều tầng kiểu Thái | Không đồng ý: ảnh là nội thất điện gạch, mái gỗ phẳng, không có mái tầng → giữ |
| img-62, 63 | tháp nhọn | 🟡 chóp hơi nhọn nhưng thân vuông, mái tầng → giữ |
| img-47 | mũi thuyền rồng tưởng tượng | 🟡 phù điêu Bayon có thuyền Chăm mũi cong chạm khắc → giữ |
| img-58 | thuyền vua quá lộng lẫy | 🟡 đồng ý một phần (lầu mái kiểu Hoa) → giữ; làm lại nếu chủ kênh muốn |
Kết luận: không có 🔴; giữ cả 18. Đã import + render.
