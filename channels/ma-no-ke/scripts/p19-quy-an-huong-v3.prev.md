# Dự án 19 — Quỷ ăn hương “Khói chỉ đường” (v3, 2026-11-24)

- Mở ở nhà kho lúc cứu hỏa phá cửa, rồi tua về mười ngày trước; chưa lộ cách khói dẫn tới kho.
- Đồng hồ là đêm 23 tháng Chạp; trượt hạn, Quỷ mất nhà ăn ba mươi năm.
- Quỷ thử phân biệt mùi, lần theo sợi khói, rồi chọn gọi hội cô hồn để làm vụ tráo đồ lộ ra.
- Điểm thấp là sợi khói đứt trước khi tới kho; Quỷ liều mất chỗ ăn quen để tìm đường.
- Quỷ tìm được đỉnh đồng, nhưng trả giá bằng nhà ăn quen ba mươi năm và làm Hưng bị lộ.
- Khoảnh khắc rợn: khói nằm ngang trong căn nhà kín cửa, luồn qua khe thành sợi mảnh.
- Kết giữ Hưng tiếp tục lau dọn cho phòng tang vật; Ma Nó chốt câu đùa và teaser P20 vào Thứ Năm.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Quỷ ăn hương có tìm được bốn mươi chiếc đỉnh đồng bị tráo trước đêm 23 tháng Chạp, trước khi mất bữa ăn ba mươi năm không?
- **Đồng hồ / cái giá:** Đêm 23 tháng Chạp, trước lúc khói hương cả phố tan đi. Nếu trượt, Quỷ mất nhà ăn quen ba mươi năm.
- **Ba nấc leo thang:**
  1. Hít khói ở nhà bà Sen để phân biệt đỉnh đồng với đỉnh kẽm; thất bại vì mùi khét chỉ cho biết có tráo, không chỉ nơi cất.
  2. Lần theo sợi khói từ nhà bà Sen qua các ngõ; thất bại khi sợi khói đứt ở ngã rẽ trước khi tới kho.
  3. Gọi hội cô hồn dồn khói cả phố vào bốn mươi chiếc đỉnh; liều để hàng xóm gọi cứu hỏa và làm Hưng bị lộ.
- **Điểm thấp:** Sợi khói đứt trước cửa kho. Quỷ không biết phải rẽ đâu, trời sắp sáng; nếu bỏ cuộc, nó mất nhà ăn ba mươi năm.
- **Cú lật:** Quỷ chủ động gọi hội cô hồn, dồn khói vào cả bốn mươi đỉnh để chúng trào khói. Nó tìm lại được chỗ ăn, nhưng đổi lại mất nhà ăn quen ba mươi năm và khiến Hưng bị lộ.
- **Khoảnh khắc rợn:** Nhà bà Sen kín cửa, không gió; khói nằm ngang, chảy qua khe cửa thành sợi mảnh.
- **Câu kết:** “Bấm đăng ký đi. Tết này tao ăn ké nhà mày, nhớ chọn đỉnh đồng.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó, dẫn chuyện | B02, ep01 S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| HUNG | Hưng, chủ dịch vụ bao sái, lễ phép trơn tru | H04 | Thiền Tâm Đức | `atempo=1.05` |
| QUY | Quỷ ăn hương, gầy nhẳng, mũi dài, xưng “ta” | H03 | Adam bựa | `asetrate=48000*1.02,aresample=48000,aecho=0.8:0.5:40:0.25` |
| SEN | Bà Sen, chủ nhà sống một mình | H05 | Ngọc Huyền | `atempo=0.90,asetrate=48000*0.97,aresample=48000` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "HUNG": {"preset": "Thiền Tâm Đức", "fx": "atempo=1.05"}, "QUY": {"preset": "Adam bựa", "fx": "asetrate=48000*1.02,aresample=48000,aecho=0.8:0.5:40:0.25"}, "SEN": {"preset": "Ngọc Huyền", "fx": "atempo=0.90,asetrate=48000*0.97,aresample=48000"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | H01 | **MN**: Bốn giờ sáng, hai mươi ba tháng Chạp. Cứu hỏa phá cửa một nhà kho trong ngõ. | còi cứu hỏa · phá cửa |
| 0:05 | H02 | **MN**: Không có lửa. Chỉ có bốn mươi cái đỉnh đồng nguội lạnh, cái nào cũng trào khói. Không ai đốt. | khói phì phì |
| 0:13 | H03 | **QUY**: Ngọt. | mõ cộc nhẹ |
| 0:15 | S01 → S26 | **MN**: Lại mò vào à? Muốn biết bốn mươi cái đỉnh ở đâu ra không? Tua lại mười ngày. | tiếng tua băng |
| 0:23 | H04 | **MN**: Hưng làm dịch vụ bao sái trọn gói. Năm triệu một bàn thờ. Áo nâu, khẩu trang, nói nhỏ nhẹ. Các cụ ưng lắm. | |
| 0:31 | H05 | **HUNG**: Bà cứ nghỉ, con lau. Đồ đồng nhà bà phải đem về xưởng đánh bóng mới sạch. Mai con trả. | khăn lau kin kít |
| 0:38 | H06 | **MN**: Mai Hưng trả thật. Một cái đỉnh bóng loáng bằng kẽm. Đỉnh cổ nhà bà Sen nằm trong kho, cạnh ba mươi chín cái khác. | đồng chạm nhau · “40 NHÀ · 40 ĐỈNH” |
| 0:48 | H03 | **MN**: Nhà bà Sen có khách quen. Ba mươi năm nay, chiều nào bà đốt trầm trong đỉnh, trên xà nhà cũng có gã hít ké. | hít khói sâu |
| 0:56 | S26 | **MN**: Dân gian bảo vong không ai cúng thì ăn ké hương khói nhà người. Ăn ké lâu ngày, thành sành ăn. | |
| 1:03 | H03 | **QUY**: Trầm tốt, đỉnh đồng cổ. Khói lên ngọt như trà sen. Ba mươi năm ta không ăn chỗ khác. Lười đi lắm. | |
| 1:14 | H05 | **SEN**: Đỉnh sáng quá. Các cụ nhà tôi chắc thích. | |
| 1:18 | H03 | **QUY**: Khét! Khói đỉnh kẽm! Đứa nào tráo bếp của ta? | ho sặc |
| 1:24 | S26 | **MN**: Người không phân biệt được đồng với kẽm. Con quỷ ăn ké ba mươi năm thì chỉ cần một hơi. Nó không thương bà Sen. Nó tiếc bữa. | “ĐỒNG = NGỌT · KẼM = KHÉT” |
| 1:34 | H03 | **QUY**: Ta theo mùi. Tìm lại bốn mươi cái đỉnh trước đêm hai mươi ba. Trễ một ngày, khói cả phố tan. Ta mất nhà ăn ba mươi năm. | “HẠN: ĐÊM 23 THÁNG CHẠP” · nhịp tim |
| 1:45 | H05 | **MN**: Quỷ thử hít thật sâu. Khói kẽm chỉ thoảng qua, mùi khét lẫn với trầm cũ. Nó biết có tráo, nhưng chưa biết kho ở đâu. | hít sâu |
| 1:56 | H03 | **QUY**: Lần một: mũi ta báo có chuyện. Không báo địa chỉ. | |
| 2:01 | H05 | **MN**: Tối ấy, nhà bà Sen đóng kín cửa. Không một ngọn gió. | nhạc tắt |
| 2:06 | H07 | **MN**: Trầm cháy. Nhưng khói không bay lên. Nó nằm ngang, chảy thành sợi mảnh qua khe cửa. | im 2 s |
| 2:15 | H08 | **MN**: Sợi khói qua ba con ngõ, dọc tường, vòng qua cột điện. Rồi đứt ở ngã rẽ. | |
| 2:24 | H03 | **QUY**: Lần hai. Gần đến nơi rồi. Gần là món ăn phổ biến của kẻ đói. | |
| 2:31 | S26 | **MN**: Đêm hai mươi ba. Còn vài giờ nữa, khói hương cả phố tản hết. Quỷ đứng trước ngã rẽ, không biết kho nằm đường nào. | “CÒN VÀI GIỜ” · tick |
| 2:42 | H03 | **QUY**: Ta có thể bỏ đi, kiếm một mái nhà khác. Nhưng ba mươi năm ăn ké… ta đã quen vị này. | |
| 2:52 | H03 | **QUY**: Gọi anh em đến. Dồn khói vào cả bốn mươi cái đỉnh. Nếu mùi nhà ta không chỉ đường, khói sẽ bắt cả ngõ nhìn. | nhạc dồn |
| 3:04 | H09 | **MN**: Quỷ gọi hội cô hồn khắp quận. Chúng lùa khói hương đêm ông Táo vào nhà kho, như dồn khách vào quán quen. | |
| 3:14 | H02 | **MN**: Hai giờ sáng, bốn mươi cái đỉnh nguội lạnh đồng loạt trào khói. Khói tràn qua cửa cuốn, trắng xóa cả ngõ. | khói phì phì nhiều lớp |
| 3:23 | H01 | **MN**: Hàng xóm gọi cứu hỏa. Cửa kho bị phá. Không lửa. Chỉ có đỉnh đồng và cuốn sổ địa chỉ. | còi · phá cửa |
| 3:33 | H10 | **MN**: Bốn mươi địa chỉ, ngày bao sái, ngày tráo. Hưng ghi kỹ hơn cả kế toán. | “40 ĐỊA CHỈ · 40 LẦN TRÁO” |
| 3:41 | H04 | **HUNG**: Em chỉ đem về đánh bóng thôi ạ. | |
| 3:45 | H05 | **SEN**: Đỉnh nhà tôi đây rồi. Xanh thế này mới đúng là của các cụ. | |
| 3:51 | H03 | **QUY**: Ngọt. Về nhà rồi. | hít khói sâu |
| 3:56 | S26 | **MN**: Quỷ tìm lại được bữa ăn. Hưng thì giờ vẫn lau dọn. Cho phòng tang vật. | |
| 4:04 | S33 → S34 | **MN**: Tết này thuê người lau bàn thờ thì chụp ảnh đồ trước. Chụp không kịp cũng được, nhà nào chả có gã trên xà nhà nhớ hộ. | rít điếu cày |
| 4:15 | B07 | **MN**: Thứ Năm: ông Công ông Táo về trời. Cá chép thả từ cầu xuống sông… cả túi nylon. Ông Táo cưỡi cá ra sao? | “TẬP SAU · THỨ NĂM” · whoosh |
| 4:25 | S06 | **MN**: Bấm đăng ký đi. Tết này tao ăn ké nhà mày, nhớ chọn đỉnh đồng. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN: 40 cái đỉnh nguội mà trào khói

- **MN**: Bốn giờ sáng, cứu hỏa phá cửa một nhà kho. (H01) · pop “4 GIỜ SÁNG”
- **MN**: Không có lửa. Chỉ có bốn mươi cái đỉnh đồng nguội lạnh, cái nào cũng trào khói. (H02)
- **QUY**: Ngọt. (H03) · pop “QUỶ ĂN HƯƠNG”
- **MN**: Bốn giờ sáng, cứu hỏa phá cửa, cả phố đứng nhìn mà không ai nhận là vừa đốt gì. Bốn mươi cái đỉnh nguội lạnh trong kho, cái nào cũng trào khói như quán ăn chạy chương trình khai trương. Người ta xếp hàng xem, còn chủ kho chắc đã chuẩn bị sẵn một lý do miễn phí. Lạ thật, lửa không có mà khách xem đông hơn cả lúc giảm giá.
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH2 — TRAILER: Bao sái trọn gói năm triệu

- **MN**: Năm triệu một bàn thờ, lau dọn tận nhà. (H04) · pop “DỊCH VỤ BAO SÁI”
- **HUNG**: Đồ đồng nhà bà phải đem về xưởng đánh bóng mới sạch. Mai con trả. (H05)
- **MN**: Mai Hưng trả thật. Một cái đỉnh bóng loáng bằng kẽm. (H06)
- **MN**: Còn cái đỉnh cổ… nằm trong nhà kho. (H06)
- **MN**: Nhưng có một vị khách nhận ra ngay. (H03)
- **MN**: Chỉ có điều, vị khách ấy không nằm trong danh sách khách hàng, không cần hóa đơn đỏ, cũng không hỏi bảo hành. Hắn chỉ cần hít một hơi là biết chiếc đỉnh bóng loáng kia có mùi sai. Còn chiếc đỉnh cổ thì đang nằm đâu? Nếu dịch vụ bao sái có chương trình khách quen, vị này chắc đã tích đủ ba mươi năm điểm thưởng.
- **MN**: Kho còn cất thứ gì ngoài đỉnh đồng? (H06)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH3 — TRỌN: Quỷ sành khói

- **MN**: Ba mươi năm nay, chiều nào bà Sen đốt trầm, trên xà nhà cũng có gã hít ké. (H03) · pop “QUỶ ĂN HƯƠNG”
- **QUY**: Khói lên ngọt như trà sen. Ba mươi năm ta không ăn chỗ khác. (H03)
- **QUY**: Khét! Khói đỉnh kẽm! Đứa nào tráo bếp của ta? (H03)
- **MN**: Người không phân biệt được đồng với kẽm. Quỷ chỉ cần một hơi. (S26)
- **QUY**: Trầm ngon là thứ xa xỉ. Ta đã có chỗ quen, có đỉnh đồng cổ, có bà chủ đều đặn thắp hương. Ai lại muốn đổi quán chỉ vì cái đỉnh mới bóng hơn? Người ta nhìn thấy đồ sáng là mừng; quỷ thì ngửi một cái đã biết có người đang tiết kiệm trên phần ăn của nó. Đấy là lý do ta mới đòi kiểm định bằng mũi.
- *(không lời, 0.8 s)* (H03)
- **QUY**: Mà quỷ sành ăn, cũng cần giấy chứng nhận nguồn gốc. (H03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH4 — TRAILER: Khói nằm ngang

- **MN**: Nhà bà Sen đóng kín cửa. Không một ngọn gió. (H05) · pop “ĐÊM 23 THÁNG CHẠP”
- **MN**: Trầm cháy. Nhưng khói không bay lên. Nó nằm ngang, chảy thành sợi mảnh qua khe cửa. (H07)
- **MN**: Sợi khói qua ba con ngõ, rồi đứt ở ngã rẽ. (H08)
- **QUY**: Gần đến nơi rồi. (H03)
- **MN**: Nhưng nó đang đi đâu? (H08)
- **MN**: Gió ngừng mà khói vẫn bò dọc tường, qua cột điện, luồn giữa những cánh cửa đóng kín. Nó không chọn đường sáng hay đường rộng, cứ men theo ngõ tối như đang nhớ một lối cũ. Quỷ đi sau, cố không chớp mắt. Tới ngã rẽ, sợi khói mảnh hơn sợi tóc, rung lên rồi dừng lại. (H08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH5 — TRỌN: Tiệc cô hồn đêm ông Táo

- **QUY**: Gọi anh em đến. Dồn khói vào cả bốn mươi cái đỉnh. Nếu mùi nhà ta không chỉ đường, khói sẽ bắt cả ngõ nhìn. (H03) · pop “QUỶ ĂN HƯƠNG”
- **MN**: Quỷ gọi hội cô hồn khắp quận. Chúng lùa khói hương vào nhà kho. (H09)
- **MN**: Bốn mươi cái đỉnh nguội lạnh đồng loạt trào khói. (H02)
- **MN**: Hàng xóm gọi cứu hỏa. Cửa kho bị phá. (H01)
- **MN**: Không có lửa. Chỉ có bốn mươi cái đỉnh đồng. (H02)
- **MN**: Còn Hưng ghi đủ địa chỉ, ngày bao sái, ngày tráo. Anh ta quản lý khách hàng kỹ như thể mai sau còn định mở rộng thị trường. Quỷ lấy lại bữa ăn, hàng xóm có dịp xem cứu hỏa mở kho miễn phí. Còn Hưng thì được tiếp tục lau dọn, chỉ là khách hàng lần này mặc đồng phục.
- *(không lời, 0.8 s)* (H02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH6 — TRAILER: Cuốn sổ ghi kỹ hơn kế toán

- **MN**: Trên bàn kho có cuốn sổ. (H10) · pop “40 ĐỊA CHỈ”
- **MN**: Bốn mươi địa chỉ, ngày bao sái, ngày tráo. Hưng ghi kỹ hơn cả kế toán. (H10)
- **HUNG**: Em chỉ đem về đánh bóng thôi ạ. (H04)
- **SEN**: Đỉnh nhà tôi đây rồi. Xanh thế này mới đúng là của các cụ. (H05)
- **MN**: Quỷ tìm được nhà ăn. Còn Hưng thì… (S26)
- **MN**: Cuốn sổ không chỉ ghi địa chỉ. Mỗi dòng còn có ngày nhận đồ, ngày trả đồ, màu đồng trước và sau khi được “đánh bóng”. Có cột nào Hưng cũng điền kín, gọn ghẽ, không bỏ sót. Nếu mở thêm một cột “đã bị phát hiện chưa”, chắc hôm nay anh ta cũng điền rất nhanh.
- **MN**: Nhưng chiếc đỉnh đầu tiên lấy từ nhà bà Sen nằm ở đâu? (H10)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH7 — TRỌN: Gã trên xà nhà nhớ hộ

- **MN**: Tết này thuê người lau bàn thờ thì chụp ảnh đồ trước. (S33) · pop “QUỶ ĂN HƯƠNG”
- **MN**: Chụp không kịp cũng được, nhà nào chả có gã trên xà nhà nhớ hộ. (S34)
- **QUY**: Ngọt. Về nhà rồi. (H03)
- **MN**: Cứ tưởng nhà nào cũng có camera. Hóa ra có nhà gắn hẳn một ông hàng xóm ở trên xà, không cần thẻ nhớ, không cần sạc pin, chỉ cần trầm ngon là tự động lưu hình. Nhà có khách lạ thì ông ấy nhớ mặt; nhà có đỉnh đồng thì ông ấy nhớ mùi. Gói giám sát này không thu phí tháng, chỉ thu một hơi mỗi chiều.
- **MN**: Chụp ảnh vẫn chắc ăn hơn. (S34)
- *(không lời, 0.8 s)* (H03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

## Hình

Ảnh tái dùng: B02, ep01 S01/S26/S33/S34, S06; B07 dùng cho thẻ teaser.

| Mã | Cảnh | v3 dùng |
|---|---|---|
| H01 | Ngõ nhỏ lúc 4 giờ sáng, khói trắng tràn ra khe cửa cuốn một nhà kho, xe cứu hỏa đèn nháy đỏ xanh | ✓ |
| H02 | Trong nhà kho: bốn mươi cái đỉnh đồng cổ xanh rêu xếp hàng trên kệ, không có lửa, khói trắng trào ra từ nắp đỉnh | ✓ |
| H03 | Quỷ ăn hương: gầy nhẳng, mũi dài, ngồi vắt vẻo trên xà nhà gỗ, nhắm mắt hít làn khói hương như sành trà; viền người mờ | ✓ |
| H04 | Hưng (áo nâu kiểu cư sĩ, khẩu trang) cúi chào ở cửa nhà cổ, tay cầm tờ rơi dịch vụ (trống chữ) | ✓ |
| H05 | Nhà cổ bà Sen: bàn thờ gỗ mít, đỉnh đồng to, bà cụ thắp hương | ✓ |
| H06 | Thùng xe tải nhỏ: hai cái đỉnh giống hệt nhau, một cái xanh rêu cổ, một cái bóng loáng mới | ✓ |
| H07 | Bàn thờ trong nhà kín gió: làn khói hương nằm ngang, chảy thành sợi mảnh qua khe cửa gỗ | ✓ |
| H08 | Đêm, ngõ nhỏ: sợi khói trắng mảnh bò dọc tường, qua cột điện, về phía nhà kho cuối ngõ có biển (trống chữ) | ✓ |
| H09 | Mái tôn nhà kho ban đêm: hàng chục cô hồn mờ ngồi kín, quỷ ăn hương đứng giữa giang tay như chủ tiệc | ✓ |
| H10 | Cận cuốn sổ ô ly trên bàn kho, cột địa chỉ và dấu tích (trống chữ) | ✓ |

## Lịch

| Nội dung | Lịch đăng |
|---|---|
| LONG | Thứ Tư 27/01 18:00 (+07) |
| SH1 | Thứ Tư 27/01 19:00 (+07) |
| SH2 | Thứ Năm 28/01 11:30 (+07) |
| SH3 | Thứ Năm 28/01 19:00 (+07) |
| SH4 | Thứ Sáu 29/01 11:30 (+07) |
| SH5 | Thứ Sáu 29/01 19:00 (+07) |
| SH6 | Thứ Bảy 30/01 11:30 (+07) |
| SH7 | Thứ Bảy 30/01 19:00 (+07)
