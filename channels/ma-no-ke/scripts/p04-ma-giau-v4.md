# Dự án 4 — Ma giấu (v4 kịch tính, 2026-11-23) — ĐÃ DỰNG

Nền: v3 (`p04-ma-giau-v3.md`). User 23/11: "có trào phúng nhưng chưa kịch tính" → brainstorm 16 (`debate/16-p04-kich-tinh/synthesis.md`) → user duyệt "Ok quất".
v4 đổi:
- **Đồng hồ + cái giá**: hạn **trước sáng ngày thứ tư**; không ai tìm mà Bin tự về → 800 năm nghề ma giấu thành trò cười (cái giá của con ma, không đe dọa trẻ).
- **Cold open giấu ghế thứ tư** (chỉ tiếng nhai); Bin bùn lộ ở bữa tối.
- **Bỏ câu Ma Nó báo trước** ("Nhớ cái mâm", "Nhớ câu đó"). Chiều ngày 3 (mẹ khoe con tự giác) dời lên trước bữa tối → "Nhà nó phát hiện thật… thằng này ngoan hơn."
- **Điểm thấp**: Bin "Hết trà sữa rồi. Sáng mai cháu tự về. Mà mẹ cháu có hỏi cháu không?"
- **Cú lật do ma dàn bẫy**: 2h sáng "còn 3 tiếng" → cắt cầu dao → đập cửa thoát hiểm → mẹ tưởng trộm, phang mâm, hét "Bin đâu! Cầm đèn pin cho mẹ!" → "Gọi tên để sai cầm đèn pin. Luật không hỏi gọi để làm gì."
- **Kết bible**: mẹ tiếc đứa bùn; Bin kể được đúng hai câu, cả nhà lại cúi điện thoại.
- 0 ảnh mới. Short đổi: SH1 hook, SH6 (giấu ghế 4, treo "Bin thật đâu?"), SH7 (đồng hồ, cắt ở tiếng đập cửa).

Nhân vật, giọng, luật trẻ em: như v3 (MG Thanh Bình, ME Ngọc Huyền, BIN Trúc Ly nâng tông, BO Quốc Tuấn, MN Thiện Minh).

## LONG (634 chữ, dựng 184 s) — sinh từ SPEC trong `tools/build_p04_long.py`
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | G01 | *(không lời, 2.4 s)* | "BỮA TỐI · NGÀY THỨ BA" · nhai · nhạc tắt |
| 0:02 | G01 | *(không lời, 1.1 s)* | nhạc tắt |
| 0:04 | G01 | **ME**: Bin ăn nhanh lên con. Mẹ đang live. | nhạc tắt |
| 0:07 | B06 | **MG**: Cứ giục đi. Có nhai cả đời… cũng không ra tiếng đâu. | "MA GIẤU" |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Khách hôm nay làm nghề giấu người. Tám trăm năm, lần đầu tiên nó thua. | "LẦN ĐẦU THUA" · coc · braam |
| 0:15 | S34 | **MN**: Mà đến giờ nó vẫn chưa biết mình thua ai. **[MỚI]** |  |
| 0:18 | B06 | **MG**: Tao là ma giấu. Nghề tao: giấu người, chủ yếu trẻ con mải chơi. | "NGHỀ: GIẤU NGƯỜI" |
| 0:22 | B06 → G12 | **MG**: Luật rõ ràng. Tao giấu, nhà nó đi tìm. Gõ mâm đồng, gọi tên. Có tiếng gõ là tao trả. Thế mới gọi là chơi. | "LUẬT: GÕ MÂM · GỌI TÊN → TRẢ" · boong |
| 0:29 | B06 | **MG**: Luật còn một cái hạn. Trước sáng ngày thứ tư, nhà nó phải đi tìm. Không ai tìm, đứa trẻ tự đi về, thì tám trăm năm nghề tao… thành trò cười. **[MỚI]** | "HẠN: SÁNG NGÀY THỨ TƯ" · bassdown · tick |
| 0:37 | S26 | **MN**: Tám trăm năm chưa hỏng lần nào. Cho đến căn hai bảy không tám. | "CĂN 27-08" |
| 0:41 | G02 → G02 | **MG**: Bố họp trực tuyến. Mẹ livestream. Thằng con chơi game. Ba người, ba cái màn hình, một cái sofa. | "3 NGƯỜI · 3 MÀN HÌNH" · hop · chotdon |
| 0:46 | G12 | **ME**: Mâm đồng phong thủy, gõ một cái tài lộc về! Còn ba suất cuối! Chốt! | "MÂM ĐỒNG PHONG THỦY" · boong · pops |
| 0:51 | G03 → B06 | **MG**: Tối thứ Sáu, thằng Bin trốn làm bài, ra cầu thang thoát hiểm chơi game. Tao đóng cửa lại, che mắt cả nhà. Dễ. | "DỄ." · cua |
| 0:57 | G03 | **MG**: Tao ngồi chờ tiếng mâm. Chín giờ. Mười giờ. Nửa đêm. | "NGÀY 1" · "21:00" · "22:00" · "0:00" · tick |
| 1:00 | G02 → G02 | **MG**: Không ai gõ. Bố tưởng Bin ở với mẹ. Mẹ tưởng Bin ở với bố. | "NGÀY 1 · 0 TIẾNG GỌI" |
| 1:04 | G03 | **BIN**: Chú cũng trốn học à? Ở đây bắt được wifi nhà cháu không chú? |  |
| 1:08 | G03 | **MG**: Tám trăm năm, chưa đứa nào hỏi tao câu đó. |  |
| 1:10 | G04 → G03 → G04 | **MN**: Ngày thứ hai, thằng Bin đặt trà sữa, ghi chú: treo ở cửa thoát hiểm tầng hai bảy. Sạc ké ổ điện bảo trì. Nó gọi chỗ này là căn cứ bí mật. | "NGÀY 2" · "TREO CỬA THOÁT HIỂM" · "CĂN CỨ BÍ MẬT" · ting |
| 1:19 | G04 | **MG**: Tao là ma giấu, hay là trông trẻ? |  |
| 1:22 | G05 → G05 → B06 | **MG**: Tao nặn một thằng Bin bằng bùn chậu cây, cho về ngồi sofa. Mắt hai hạt na. Nhìn là biết giả. Kiểu gì nhà nó cũng phát hiện, rồi đi tìm. | "BIN BÙN" · "NHÌN LÀ BIẾT GIẢ" · nan |
| 1:29 | G07 → G07 | **MN**: Chiều ngày thứ ba, thằng bùn làm xong sạch bài tập cả tuần. Không cãi, không đòi điện thoại. Ngoan như tượng. **[MỚI]** | "XONG BÀI CẢ TUẦN" · "NGOAN NHƯ TƯỢNG" |
| 1:35 | G07 | **ME**: Con nhà mình tự giác lắm cả nhà ơi. Bí quyết ở link dưới bình luận nha. | pops |
| 1:39 | B06 | **MG**: Nhà nó phát hiện thật. Phát hiện ra… thằng này ngoan hơn. **[MỚI]** | "NGOAN HƠN" · bassdown |
| 1:43 | G01 → G01 | **MG**: Bữa tối ngày thứ ba. Thằng bùn ngồi đúng ghế, cầm đúng máy tính bảng. | nhạc tắt |
| 1:46 | G01 | **MG**: Bốn người. Ba tiếng nhai. | nhạc tắt |
| 1:48 | G01 | *(không lời, 2.2 s)* | nhai · nhạc tắt |
| 1:50 | G01 | **ME**: Hôm nay Bin ngoan thế. Không đòi gì. | nhạc tắt |
| 1:53 | G02 | **BO**: Ừ. Em xin phép tắt cam. | hop · nhạc tắt |
| 1:55 | G06 → G06 | **MG**: Tao đứng ngoài ban công. Lần đầu tiên trong đời… tao sợ. | nhạc tắt |
| 2:00 | G04 | **BIN**: Hết trà sữa rồi. Sáng mai cháu tự về. Mà mẹ cháu có hỏi cháu không? **[MỚI]** | "SÁNG MAI TỰ VỀ" · nhạc tắt |
| 2:03 | G04 | **MG**: Tao không trả lời. Nghề tao là giấu, không phải nói dối. | nhạc tắt |
| 2:07 | B06 | **MG**: Hai giờ sáng. Còn ba tiếng nữa là trời sáng. Nhà này không gõ, thì tao làm cho nó gõ. **[MỚI]** | "2:00 SÁNG" · "CÒN 3 GIỜ" · tick · nhạc tắt |
| 2:11 | G08 | **MG**: Tao rút cầu dao cả tầng. **[MỚI]** | cauda · mayoff · nhạc tắt |
| 2:14 | G04 | **MG**: Rồi tao đập cửa thoát hiểm. Thình. Thình. Thình. **[MỚI]** | dapcua · nhạc tắt |
| 2:16 | G12 → G09 | **MN**: Bà mẹ tưởng trộm vào cướp hàng. Vớ thứ gần nhất trên kệ: cái mâm đồng phong thủy. Phang thẳng vào cửa thoát hiểm. **[MỚI]** | "BOONG!" · boong2 · nhạc tắt |
| 2:23 | G09 | **ME**: Bin đâu! Cầm đèn pin cho mẹ! | nhạc tắt |
| 2:25 | B06 | **MG**: Gọi tên để sai cầm đèn pin. Luật không hỏi gọi để làm gì. Có tiếng mâm, có tên. Tao trả. **[MỚI]** | "GỌI ĐỂ… CẦM ĐÈN PIN" · "GÕ MÂM ✔ · GỌI TÊN ✔" · "→ TRẢ" |
| 2:30 | G09 | **BIN**: Mẹ… mẹ tìm con à? | cua |
| 2:32 | G10 → G10 | **MN**: Sáng ra, nắng chiếu vào sofa. Thằng bùn rã thành một đống đất chậu cây. | sang · dat |
| 2:37 | G10 | **ME**: Tiếc thế. Đang ngoan. |  |
| 2:38 | G10 → G10 | **MN**: Thằng Bin thật kể chuyện ba ngày ở căn cứ bí mật được đúng hai câu. Rồi cả nhà lại cúi xuống điện thoại. **[MỚI]** | "LẠI CÚI XUỐNG MÁY" |
| 2:45 | G10 → B06 | **MG**: Thằng bùn được học sinh giỏi. Tao đang tính mở trung tâm. | "TRUNG TÂM MA GIẤU — NHẬN NẶN CON NGOAN" · coc |
| 2:48 | S33 → S34 | **MN**: Tối nay ăn cơm, đếm xem nhà mày có mấy tiếng nhai. |  |
| 2:52 | B07 | **MN**: Tập sau: bến cát lậu mùa lũ, và một con ma da bảy năm chưa được thay ca. | "TẬP SAU" · whoosh |
| 2:57 | S06 | **MN**: Bấm đăng ký đi. Không thì mai mẹ mày gõ mâm, người về chưa chắc đã là mày. | "ĐĂNG KÝ" · coc |

## SHORTS (sinh từ `tools/build_p04_shorts.py`)
### SH1
- **MN**: Hồ sơ ma giấu. Tám trăm năm giấu người, lần đầu phải trông trẻ.
- **MN**: Một. Nó giấu người, chủ yếu trẻ con mải chơi.
- **MN**: Hai. Nó che mắt. Đứa trẻ đứng ngay đấy, cả nhà không thấy.
- **MN**: Ba. Muốn nó trả thì gõ mâm đồng, gọi tên. Ngày xưa mất đứa trẻ, cả làng ra gõ.
- **MG**: Luật rõ ràng. Tao giấu, nhà nó đi tìm. Gõ mâm đồng, gọi tên. Có tiếng gõ là tao trả. Thế mới gọi là chơi.
- **MN**: Ngày nay mất đứa trẻ… phải đợi điện thoại hết pin.
- **MN**: Căn hai bảy không tám đợi ba ngày. Tao kể ở bản đầy đủ, link dưới.

### SH2
- **MN**: Cách sống sót khi bị ma giấu. Học thằng Bin, mười tuổi.
- **MG**: Tao ngồi chờ tiếng mâm. Chín giờ. Mười giờ. Nửa đêm.
- **MN**: Một. Đừng sợ. Hỏi wifi.
- **BIN**: Chú cũng trốn học à? Ở đây bắt được wifi nhà cháu không chú?
- **MG**: Tám trăm năm, chưa đứa nào hỏi tao câu đó.
- **MN**: Hai. Đặt trà sữa, ghi chú: treo cửa thoát hiểm.
- **MN**: Ba. Sạc ké ổ bảo trì. Gọi là căn cứ bí mật.
- **MG**: Tao là ma giấu, hay là trông trẻ?
- **MN**: Nhà nó ba ngày không ai tìm. Tao kể ở bản đầy đủ, link dưới.

### SH3
- **ME**: Con nhà mình tự giác lắm cả nhà ơi.
- **MG**: Tao nặn một thằng Bin bằng bùn chậu cây. Nhìn là biết giả. Kiểu gì nhà nó cũng phát hiện.
- **MN**: Chiều đó, thằng bùn làm xong sạch bài tập cả tuần. Không cãi, không đòi điện thoại.
- **ME**: Bí quyết ở link dưới bình luận nha.
- **MN**: Bí quyết là bùn.
- **MG**: Thằng bùn được học sinh giỏi. Tao đang tính mở trung tâm.
- **MN**: Còn thằng Bin thật đang ở đâu? Link bản đầy đủ ngay dưới.

### SH4
- **ME**: Mâm đồng phong thủy, gõ một cái tài lộc về! Còn ba suất cuối! Chốt!
- **MN**: Mâm đồng. Ngày xưa gõ để gọi người về. Giờ gõ để gọi đơn về.
- **MG**: Luật rõ ràng. Tao giấu, nhà nó đi tìm. Gõ mâm đồng, gọi tên. Có tiếng gõ là tao trả. Thế mới gọi là chơi.
- **MG**: Tao giấu con nhà nó ba ngày, chỉ chờ một tiếng mâm.
- **MG**: Nhà nó bán ba trăm cái mâm. Không gõ cái nào.
- **MN**: Đến hai giờ sáng thì có người gõ. Tao kể ở bản đầy đủ, link dưới.

### SH5
- *(không lời)* BA NGÀY HỌP
- **MG**: Bố họp trực tuyến. Mẹ livestream. Thằng con chơi game. Ba người, ba cái màn hình, một cái sofa.
- **MN**: Ông bố này ba ngày họp trực tuyến. Không biết con mình đi đâu.
- **ME**: Hôm nay Bin ngoan thế. Không đòi gì.
- **MN**: Thằng ngồi ghế là bùn. Ông bố gật đầu.
- **BO**: Ừ. Em xin phép tắt cam.
- **MG**: Ba ngày, ông ấy nói đúng một câu. Câu đó.
- **MN**: Con thật ở đâu? Link bản đầy đủ ngay dưới.

### SH6
- *(không lời)* 4 NGƯỜI · 3 TIẾNG NHAI
- **ME**: Bin ăn nhanh lên con. Mẹ đang live.
- **MG**: Cứ giục đi. Có nhai cả đời… cũng không ra tiếng đâu.
- **MG**: Bốn người. Ba tiếng nhai.
- *(không lời)* 
- **ME**: Hôm nay Bin ngoan thế. Không đòi gì.
- **BO**: Ừ. Em xin phép tắt cam.
- **MG**: Tao đứng ngoài ban công. Lần đầu tiên trong đời… tao sợ.
- **MN**: Mẹ khen Bin ngoan. Vậy Bin thật đang ở đâu? Bản đầy đủ, link dưới.

### SH7
- **MN**: Còn ba tiếng nữa là trời sáng. Không ai gõ mâm gọi tên, ma giấu thua.
- **MG**: Luật rõ ràng. Tao giấu, nhà nó đi tìm. Gõ mâm đồng, gọi tên. Có tiếng gõ là tao trả. Thế mới gọi là chơi.
- **MG**: Luật còn một cái hạn. Trước sáng ngày thứ tư, nhà nó phải đi tìm. Không ai tìm, đứa trẻ tự đi về, thì tám trăm năm nghề tao… thành trò cười.
- **MG**: Hai giờ sáng. Còn ba tiếng nữa là trời sáng. Nhà này không gõ, thì tao làm cho nó gõ.
- **MG**: Tao rút cầu dao cả tầng.
- **MG**: Rồi tao đập cửa thoát hiểm. Thình. Thình. Thình.
- **MN**: Cánh cửa đó, ai sẽ mở? Bản đầy đủ, link dưới.
