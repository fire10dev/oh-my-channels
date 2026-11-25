# Dự án 82 — Chú Cuội "Nói dối thì bay" (v3, 2026-11-24)

- **Đồng hồ + cái giá rõ rệt**: Hạn chót 20:00 tối mai ra mắt trực tiếp trên truyền hình trước 200 khách VIP; nếu chân không chạm đất sẽ bị phơi bày toàn bộ gian lận, còn nếu tiếp tục nói dối để chữa cháy sẽ bị Cuội kéo bay thẳng lên cung trăng mất tích.
- **3 nấc leo thang chủ động**: (1) Buộc vòng chì 5 kg vào chân và mặc váy dài che giấu khi tư vấn khách, nhưng nói dối nguyên liệu tươi khiến lực bay nhấc bổng cả tạ chì; (2) Thuê MC đọc bài phát biểu để ngậm chặt miệng, nhưng MC ngộ độc bánh mẫu bỏ chạy, máy quay dí thẳng mặt; (3) Ôm bục gỗ liều mạng nói dối câu chốt đơn, bị giật tung lên trần sảnh lơ lửng sát đèn chùm pha lê cao 7 mét.
- **Cold open không lộ đáp án**: Mở bằng tiếng máy xay nhân ầm ĩ nửa đêm và ánh trăng to bất thường ngoài cửa sổ xưởng, không lộ việc bay lơ lửng.
- **Điểm thấp nhất**: Treo sát đèn chùm thủy tinh đang rạn nứt trước 200 ống kính máy quay, Cuội buông lời: "Ba trăm năm tôi chưa dám nói thật, chị dám không?"
- **Cú lật do nhân vật chọn và trả giá**: Bà Tuyết tự chọn nói thật toàn bộ quy trình gian lận qua micro ("nhân năm ngoái", "xay lại thêm hương liệu", "đóng hạn mới") để đổi lấy từng mét hạ xuống đất; chấp nhận mất sạch sự nghiệp, đối mặt cảnh sát kinh tế để giữ mạng.
- **Kết bible & châm biếm**: Hãng bị niêm phong, bà Tuyết về bán bánh chay dạo, cổ chân vẫn đeo vòng chì phòng khi quen mồm buột miệng; Cuội trên trăng cắn bánh thật gật gù khen ngon.

## Xương sống kịch tính
- **Câu hỏi kịch tính trung tâm**: Liệu bà Tuyết có kịp hạ chân xuống đất trước giờ phát sóng trực tiếp, hay chấp nhận thú nhận toàn bộ sự thật trước ống kính truyền hình?
- **Đồng hồ + cái giá**: 20:00 đêm ra mắt phát trực tiếp trước 200 khách VIP. Nếu không chạm đất, toàn bộ chiêu trò bị phơi bày; nếu cố nói dối, bà sẽ bay vĩnh viễn lên cung trăng như Cuội.
- **3 nấc leo thang chủ động**:
  1. Nấc 1: Buộc đôi vòng chì 5 kg vào cổ chân và mặc váy dài che giấu, nhưng dối to khiến lực bay bốc bổng cả người lẫn tạ, phải bấu chặt quầy.
  2. Nấc 2: Bỏ tiền thuê MC đọc thay để không phải mở mồm, nhưng MC ngộ độc bánh mẫu chạy mất, máy quay dí tận mặt.
  3. Nấc 3: Ôm chặt bục gỗ liều mạng nói dối câu chốt đơn, lực bay bứt tung bục gỗ đưa bà lên sát trần sảnh cạnh đèn chùm 7 mét.
- **Điểm thấp nhất**: Lơ lửng sát đèn chùm thủy tinh đang nứt toác trước hàng trăm máy quay, Cuội ra giá: "Muốn xuống chỉ có một cách: nói thật."
- **Cú lật**: Bà Tuyết chọn tự thú từng câu một qua micro để đổi lấy mạng sống và chạm đất, toàn bộ sự thật phát sóng trên truyền hình.
- **Khoảnh khắc rợn duy nhất**: Nửa đêm trong xưởng vắng, trăng tròn to khác thường, dặn dối xong thì hai bàn chân nhấc khỏi dép một đốt ngón tay, đôi dép nằm lại trên sàn, bóng cây đa trên trăng khẽ lay động.
- **Câu kết**: Ma Nó nhả khói châm biếm: "Tao cũng định bảo làm kênh vì đam mê, nhưng sợ bay mất nóc nhà... nên bấm đăng ký đi."

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| TUYET | Bà Tuyết, chủ hãng bánh Nguyệt Cung | U01, U02, U03, U05, U10, U11 | Ngọc Huyền | `anull` |
| CUOI | Chú Cuội trên cung trăng | U07, U08 | Adam bựa | `atempo=1.05,asetrate=48000*1.05,aresample=48000,aecho=0.8:0.5:60:0.3` |
| CN | Chị Mơ, công nhân xưởng bánh | U01, U06 | Đoan Trang | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "TUYET": {"preset": "Ngọc Huyền", "fx": "anull"}, "CUOI": {"preset": "Adam bựa", "fx": "atempo=1.05,asetrate=48000*1.05,aresample=48000,aecho=0.8:0.5:60:0.3"}, "CN": {"preset": "Đoan Trang", "fx": "anull"}}
```

## LONG (595 chữ, dựng ≈ 180 s)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | U09 | *(không lời, 2.5 s)* | "TRĂNG TRÒN THÁNG TÁM" · máy xay nhân xa · gió nhẹ |
| 0:03 | U01 | **TUYET**: Dán cái hạn mới vào. Ai hỏi thì bảo nhân tươi làm sáng nay. | cộc · mayxay |
| 0:07 | U06 | **CN**: Nhưng thùng này từ rằm năm ngoái chị ơi... | thở dài |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Sắp Trung thu, thấy hộp bánh mười triệu đừng vội lạy. | "HỘP 10 TRIỆU" · coc · braam |
| 0:15 | S34 | **MN**: Bán bánh bằng mồm thì dễ, nhưng trên trời có người chuyên trị đứa nói dối. | whoosh |
| 0:20 | U03 → U04 | **MN**: Hãng bánh Nguyệt Cung của bà Tuyết. Hộp mạ vàng mười triệu, nhưng ruột là nhân tồn kho năm ngoái xay lại, tống hương liệu, in đè hạn mới. | "NGUYỆT CUNG" · "HỘP MỚI · NHÂN CŨ" · tach · mayxay |
| 0:28 | U05 | **TUYET**: Hộp mười triệu người ta mua biếu sếp. Sếp nào rảnh mà cắn thử. Cứ chém tươi ngon cho tôi. | pops |
| 0:35 | U07 | **MN**: Người ta bảo Cuội bám gốc đa lên trăng. Thật ra Cuội nói dối nhiều quá nên tự bay. Cây đa chỉ là phanh tay. | "NÓI DỐI NHƯ CUỘI" · lada |
| 0:44 | U08 | **CUOI**: Cái hãng dưới kia lấy tên Nguyệt Cung nhà tôi. Miệng bảo nhân tươi, mà lưỡi tôi ba trăm năm ngửi thấy mùi mốc. | cuoi · nho |
| 0:52 | U08 → S26 | **CUOI**: Nói dối giỏi hơn tôi à? Cho chị nếm thử cảm giác nhẹ người. | ting |
| 0:56 | U01 | **MN**: Nửa đêm, trăng tròn bất thường như chiếc mâm bạc đè sát nóc xưởng. | "KHOẢNH KHẮC RỢN" · bassdown · nhactat |
| 1:00 | U01 | **TUYET**: Nhớ đấy, nhân mới làm sáng nay, không chất bảo quản. | nhactat |
| 1:03 | U02 | *(không lời, 2.0 s)* | tienggio · im |
| 1:05 | U02 → U09 | **MN**: Vừa dứt câu, hai bàn chân bà Tuyết nhấc khỏi dép một đốt ngón tay. Đôi dép nằm lại trên sàn. Ngoài cửa sổ, bóng gốc đa lay. | lada xa · im |
| 1:13 | U05 | **TUYET**: Ủa... sao chân mình không chạm đất? | hoang |
| 1:16 | S26 | **MN**: Luật của Cuội: nói dối thì nhẹ người. Dối nhỏ bay một gang, dối to chạm trần. Chỉ nói thật mới hạ xuống. | "LUẬT: NÓI DỐI THÌ BAY" · tick |
| 1:22 | U03 | **MN**: Tám giờ tối mai, sự kiện ra mắt trực tiếp trên truyền hình. Hai trăm khách chờ. Không chạm đất là lộ hết. | "HẠN: 20:00 MAI" · "TRUYỀN HÌNH TRỰC TIẾP" · dongho |
| 1:28 | U03 → U05 | **TUYET**: Không thể hoãn! Lấy đôi vòng chì năm cân buộc vào chân cho tao, mặc váy dài che đi! | "NẤC 1: VÒNG CHÌ 5 KG" · xich |
| 1:35 | U03 | **TUYET**: Dạ, hạt sen tươi nhập từ hồ Tây sáng nay ạ. | keng |
| 1:38 | U03 → U05 | **MN**: Dối to hơn. Đôi vòng chì không ghì nổi. Lực nhấc bổng bà lên nửa mét, phải bấu chặt mép quầy. | vut · rach |
| 1:45 | U06 | **CN**: Chị ơi, chân chị bay kìa! | xamxi |
| 1:47 | U05 | **TUYET**: Đưa kịch bản cho MC đọc! Tao chỉ đứng cười, cấm mở mồm! | "NẤC 2: THUÊ MC NÓI HỘ" |
| 1:52 | U10 | **MN**: Bảy giờ năm mươi. MC nếm thử bánh mẫu liền đau bụng chạy mất. Đạo diễn dí thẳng micro vào tay bà Tuyết. | "19:50" · "MC BỎ CHẠY" · onao |
| 2:00 | U10 | **MN**: Đúng tám giờ, đèn rực sáng. Khán giả vỗ tay. Bà Tuyết đứng ôm chặt bục gỗ. | "20:00 · LÊN SÓNG" · votay · denchieu |
| 2:06 | U10 → U05 | **TUYET**: Liều chốt đơn xong tính! Bánh Nguyệt Cung cam kết một trăm phần trăm nguyên liệu tươi trong ngày! | "NẤC 3: NƯỚC LIỀU" · timdap |
| 2:13 | U11 | **MN**: Cú dối thế kỷ. Cả người bà bốc thẳng lên trần sảnh, lơ lửng sát đèn chùm bảy mét. | "BAY LÊN TRẦN" · vut · denchum · hoangloan |
| 2:21 | U11 | **MN**: Hai trăm khách ngửa cổ nhìn. Máy quay chĩa lên. Đèn chùm rạn nứt. | tach · crak |
| 2:26 | U08 | **CUOI**: Đèn sắp sập rồi. Muốn xuống thì nói thật đi. Ba trăm năm tôi chưa nói thật câu nào, chị dám không? | cuoi · vongxa |
| 2:34 | U11 | **TUYET**: Rơi thì chết, dối nữa thì bay lên trời! Tôi chọn sống! | "CÚ LẬT: TỰ THÚ" · tho gap |
| 2:39 | U11 | **TUYET**: Micro vẫn bật! Nhân bánh... là hàng tồn kho từ rằm năm ngoái! | mic vang · rot 2m |
| 2:43 | U11 → U10 | **MN**: Bà tụt xuống hai mét. | whoosh |
| 2:45 | U10 | **TUYET**: Xay lại, đổ thêm hương liệu! In đè hạn mới! | "THÚ TỘI" · onao |
| 2:49 | U10 | **MN**: Bịch! Chân bà chạm đất. Cả sảnh lặng phắc, rồi còi cảnh sát kinh tế hú vang. | bich · im · coi xe |
| 2:56 | U04 | **MN**: Hãng niêm phong. Bà Tuyết về bán bánh chay, chân vẫn đeo vòng chì ba cân cho chắc. | "KẾT" · xich · cuoikhenh |
| 3:02 | U08 | **CUOI**: Bánh đậu xanh này ngon đấy. Nói thật ăn nó đậm vị hẳn. | nhai · ngon |
| 3:06 | S33 → S34 | **MN**: Tao cũng định bảo làm kênh vì đam mê, nhưng sợ bay nóc nhà. Bấm đăng ký đi. | dieu cay · coc |
| 3:12 | B02 | **MN**: Tập sau: hai nhà xe đua nhau trên đèo sương, cho đến khi gặp chiếc xe tải cũ chạy đúng năm mươi. | "TẬP SAU" · whoosh · coi xa |
| 3:18 | S06 | **MN**: Trung thu ăn bánh nhớ soi hạn. Không là bay đấy. | "ĐĂNG KÝ" · coc |

## SHORTS

### SH1 (TRỌN) — Hồ sơ chú Cuội: Nói dối thì bay
- **MN**: Hồ sơ chú Cuội. Nói dối giỏi nhất nước, trên trời chuyên trị kẻ ăn gian. (U07) · pop "CHÚ CUỘI"
- **MN**: Người ta bảo Cuội bám gốc đa lên trăng. Thật ra Cuội nói dối nhiều quá nên tự bay. Cây đa chỉ là phanh tay. (U07)
- **CUOI**: Cái hãng dưới kia lấy tên Nguyệt Cung nhà tôi. Miệng bảo nhân tươi, mà lưỡi tôi ba trăm năm ngửi thấy mùi mốc. (U08) · pop "LƯỠI 300 NĂM"
- **MN**: Hộp mạ vàng mười triệu, nhưng ruột là nhân tồn kho năm ngoái xay lại, tống hương liệu, in đè hạn mới. (U04)
- **CUOI**: Cho chị nếm thử cảm giác nhẹ người. (U08) · pop "PUNCH: NÓI DỐI THÌ BAY"
- *(lặng 0.8 s)*
- **MN**: Bà chủ bay lên trần nhà trước hai trăm khách thế nào? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH2 (TRỌN) — Chiêu trò hộp bánh mười triệu
- **TUYET**: Dán cái hạn mới vào. Ai hỏi thì bảo nhân tươi làm sáng nay. (U01) · pop "BÀ TUYẾT"
- **CN**: Nhưng thùng này từ rằm năm ngoái chị ơi... (U06)
- **TUYET**: Hộp mười triệu người ta mua biếu sếp. Sếp nào rảnh mà cắn thử. Cứ chém tươi ngon cho tôi. (U05) · pop "HỘP BIẾU SẾP"
- **MN**: Hộp mạ vàng mười triệu, nhưng ruột là nhân tồn kho năm ngoái xay lại, tống hương liệu, in đè hạn mới. (U03 → U04)
- **MN**: Tưởng lừa được người trần, ai ngờ trên cung trăng có một chú đang dòm xuống. (U09) · pop "CHÚ CUỘI"
- *(lặng 0.8 s)*
- **MN**: Quả báo đến ngay trong đêm ra mắt. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH3 (TRỌN) — Luật của Cuội
- **MN**: Luật của chú Cuội: nói dối thì nhẹ người. (U08) · pop "CHÚ CUỘI"
- **MN**: Dối nhỏ bay một gang, dối to chạm trần. Chỉ nói thật mới hạ xuống. (U03) · pop "DỐI NHỎ: 1 GANG · DỐI TO: CHẠM TRẦN"
- **TUYET**: Dạ, hạt sen tươi nhập từ hồ Tây sáng nay ạ. (U03)
- **MN**: Dối to hơn. Đôi vòng chì không ghì nổi. Lực nhấc bổng bà lên nửa mét, phải bấu chặt mép quầy. (U05) · pop "BAY CẢ VÒNG CHÌ"
- **TUYET**: Ủa... sao chân mình không chạm đất? (U05)
- *(lặng 0.8 s)*
- **MN**: Muốn đáp đất chỉ có nước tự vạch áo cho người xem lưng. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH4 (TRỌN) — Nấc leo thang: Váy dài và vòng chì
- **TUYET**: Không thể hoãn! Lấy đôi vòng chì năm cân buộc vào chân cho tao, mặc váy dài che đi! (U05) · pop "VÒNG CHÌ 5 KG"
- **MN**: Tưởng khôn lỏi thắng được trời, nhưng nói dối càng to thì lực bay càng khủng. (U03)
- **TUYET**: Đưa kịch bản cho MC đọc! Tao chỉ đứng cười, cấm mở mồm! (U05) · pop "THUÊ MC NÓI HỘ"
- **MN**: Bảy giờ năm mươi. MC nếm thử bánh mẫu liền đau bụng chạy mất. Đạo diễn dí thẳng micro vào tay bà Tuyết. (U10) · pop "PUNCH: GẬY ÔNG ĐẬP LƯNG ÔNG"
- *(lặng 0.8 s)*
- **MN**: Cú liều mạng bốc thẳng lên trần sảnh ra sao? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH5 (TRỌN) — Cú lật chạm đất
- **MN**: Cú dối thế kỷ. Cả người bà bốc thẳng lên trần sảnh, lơ lửng sát đèn chùm bảy mét. (U11) · pop "LƠ LỬNG TRẦN NHÀ"
- **CUOI**: Đèn sắp sập rồi. Muốn xuống thì nói thật đi. Ba trăm năm tôi chưa nói thật câu nào, chị dám không? (U08) · pop "CHÚ CUỘI"
- **TUYET**: Rơi thì chết, dối nữa thì bay lên trời! Tôi chọn sống! (U11)
- **TUYET**: Micro vẫn bật! Nhân bánh... là hàng tồn kho từ rằm năm ngoái! Xay lại, đổ thêm hương liệu! In đè hạn mới! (U11 → U10) · pop "PUNCH: TỰ THÚ TRỰC TIẾP"
- **MN**: Bịch! Chân bà chạm đất. Cả sảnh lặng phắc, rồi còi cảnh sát kinh tế hú vang. (U10)
- *(lặng 0.8 s)*
- **MN**: Màn tự thú đắt giá nhất mùa Trung thu. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 (TRAILER) — Dép nằm lại trên sàn
- **MN**: Nửa đêm, trăng tròn bất thường như chiếc mâm bạc đè sát nóc xưởng. (U09) · pop "NỬA ĐÊM"
- **TUYET**: Nhớ đấy, nhân mới làm sáng nay, không chất bảo quản. (U01)
- **MN**: Vừa dứt câu, hai bàn chân bà Tuyết nhấc khỏi dép một đốt ngón tay. (U02) · pop "CHÂN RỜI DÉP"
- **MN**: Đôi dép nằm lại trên sàn. Ngoài cửa sổ, bóng gốc đa lay. (U02 → U09) · pop "CHÚ CUỘI"
- **TUYET**: Ủa... sao chân mình không chạm đất? (U05)
- **MN**: Chuyện gì đang xảy ra trong xưởng bánh lúc nửa đêm? Bản đầy đủ, link dưới. (S34)

### SH7 (TRAILER) — Đèn chùm rạn nứt
- **MN**: Tám giờ tối mai, sự kiện ra mắt trực tiếp trên truyền hình. Hai trăm khách chờ. (U10) · pop "20:00 · TRỰC TIẾP"
- **TUYET**: Liều chốt đơn xong tính! Bánh Nguyệt Cung cam kết một trăm phần trăm nguyên liệu tươi trong ngày! (U10)
- **MN**: Cú dối thế kỷ. Cả người bà bốc thẳng lên trần sảnh, lơ lửng sát đèn chùm bảy mét. (U11) · pop "BAY LÊN TRẦN"
- **MN**: Hai trăm khách ngửa cổ nhìn. Máy quay chĩa lên. Đèn chùm rạn nứt. (U11) · pop "ĐÈN CHÙM RẠN NỨT"
- **CUOI**: Đèn sắp sập rồi. Muốn xuống thì nói thật đi. (U08) · pop "CHÚ CUỘI"
- **MN**: Bà Tuyết sẽ chọn rơi xuống hay bay thẳng lên trời? Bản đầy đủ, link dưới. (S34)

## Hình
Tận dụng: B02 + ep01 S01/S26/S33/S34/S06 (Ma Nó).

### Danh sách ảnh vẽ mới (16:9)
| Mã | Cảnh | Trạng thái v3 |
|---|---|---|
| U01 | Xưởng bánh trung thu đêm: khuôn bánh, máy xay nhân, cửa sổ thấy trăng to bất thường, bà Tuyết dặn công nhân | DÙNG |
| U02 | Cực cận hai bàn chân nhấc khỏi đôi dép trên nền xưởng một đốt ngón tay | DÙNG |
| U03 | Cửa hàng bánh sang: hộp sơn mài mạ vàng, biển trống chữ; bà Tuyết lơ lửng sau quầy, váy dài che chân | DÙNG |
| U04 | Kho lạnh sau xưởng: thùng nhân cũ, công nhân xay lại, đổ hương liệu; bản cuối đổ bỏ, hộp giấy đơn giản | DÙNG |
| U05 | Bà Tuyết cận: áo dài gấm, cười kiểu MC; bản bám mép quầy hoảng hốt | DÙNG |
| U06 | Chị Mơ công nhân cận: tạp dề, khẩu trang, lẩm bẩm; bản đứng cuối sảnh gật đầu | DÙNG |
| U07 | Tranh dân gian: chú Cuội bám gốc đa bay lên trời, trăng tròn | DÙNG |
| U08 | Chú Cuội ngồi gốc đa trên cung trăng: áo nâu vá, cười toe, cầm miếng bánh trung thu; bản nhổ bánh, bản gật gù | DÙNG |
| U09 | Ngoài cửa sổ: trăng to bất thường, bóng gốc đa trên mặt trăng khẽ lay | DÙNG |
| U10 | Sảnh sự kiện sang: hai trăm khách, máy quay, sân khấu, bà Tuyết cầm micro, đèn chùm lớn | DÙNG |
| U11 | Bà Tuyết lơ lửng sát trần cạnh đèn chùm, micro trong tay, khách ngửa cổ nhìn | DÙNG |

## Lịch
- **LONG**: Thứ Năm 02/09 18:00 (+07)
- **SH1**: Thứ Năm 02/09 19:00
- **SH2**: Thứ Sáu 03/09 11:30
- **SH3**: Thứ Sáu 03/09 19:00
- **SH4**: Thứ Bảy 04/09 11:30
- **SH5**: Thứ Bảy 04/09 19:00
- **SH6**: Chủ Nhật 05/09 11:30
- **SH7**: Chủ Nhật 05/09 19:00
- **Tập sau (P83)**: Thứ Hai 06/09 18:00
