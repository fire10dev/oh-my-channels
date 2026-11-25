# Dự án 28 — Ma móng chung cư “Người sửa đêm” (v3, 2026-11-24)

- Rút LONG còn khoảng 580 chữ, giữ nguyên câu chuyện, ba nấc leo thang và cú lật.
- Làm rõ hạn chót 20:00 và cái giá nếu ông Lộc không có đề cử hợp lệ.
- Giữ cú lật do ông Lộc chọn công khai sổ quỹ và nhận lỗi; cư dân tự bỏ phiếu.
- Giữ khoảnh khắc rợn ở hầm xe và kết châm biếm theo bible kênh.
- Bổ sung lời cho SH4 và SH7; thêm PUNCH riêng cho các short TRỌN.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Cư dân có dám dùng lá phiếu lấy quyền quản lý tòa nhà khỏi tay ông Quyết trước khi ông khóa van cả tòa?
- **Đồng hồ / cái giá:** Trước cuộc họp cư dân lúc 20:00, ông Lộc phải có một đề cử hợp lệ. Trượt hạn, Quyết giữ ghế và tiếp tục khóa van; ông Lộc mất cơ hội giúp những người hàng xóm mà bà cụ tầng ba nhờ ông để mắt.
- **Ba nấc leo thang:** Ông Lộc mở lại van nhà chị Hà; Quyết khóa lại và tăng phí. Ông Lộc sửa thang máy; Quyết nhận công rồi khóa van tầng mười hai. Ông Lộc dọn hầm, để cư dân tự quyết; Quyết khóa van cả tòa trước giờ họp.
- **Điểm thấp:** Quyết tuyên bố không có đề cử hợp lệ; ông Lộc không thể tự đứng tên, sổ quỹ đang bị giữ, van cả tòa đã khóa.
- **Cú lật:** Ông Lộc chọn công khai sổ quỹ, nhận lỗi vì sửa van trái quy trình và xin cư dân biểu quyết. Chị Hà đứng tên đề cử; cư dân trực tiếp bỏ phiếu, tước ghế Quyết và giao việc sửa chữa cho ông Lộc dưới sự giám sát.
- **Khoảnh khắc rợn:** Ba giờ sáng, bốn mươi tám cảm biến báo xe trong hầm trống; đèn bật dần tới chỗ Quyết rồi dừng trên đầu ông.
- **Câu kết:** “Quyết vẫn ở tổ vệ sinh. Ông bảo muốn gần sổ quỹ. Cây chổi thì không cần phiếu ủy quyền.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| QUYET | Ông Quyết, trưởng ban quản trị | B02, B04, B11b | Adam bựa | `anull` |
| LOC | Ông Lộc, vong hầm B3 | B07 | Thiền Tâm Đức | `atempo=0.90,aecho=0.8:0.6:80:0.3` |
| HA | Chị Hà, cư dân tầng 12 | B05 | Ngọc Huyền | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "QUYET": {"preset": "Adam bựa", "fx": "anull"}, "LOC": {"preset": "Thiền Tâm Đức", "fx": "atempo=0.90,aecho=0.8:0.6:80:0.3"}, "HA": {"preset": "Ngọc Huyền", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | B01 | *(không lời, 2 s)* | Hầm xe trống · nước nhỏ giọt · vang hầm |
| 0:02 | B02 | **QUYET**: Nhà nào chưa đóng phí, khóa van. Cả tòa cũng khóa được. | Van khóa két |
| 0:07 | B01 | *(không lời, 1 s)* | Đèn cảm ứng cuối hầm bật · tạch |
| 0:08 | S01 → S26 | **MN**: Lại mò vào à? Hầm B3 nhà mày ngày xưa là nghĩa trang. Giờ ô nào cũng có xe. Kể cả ô không có xe. | Bíp cảm biến |
| 0:17 | B03 | **MN**: Quyết làm trưởng ban ba năm, phí gửi xe tăng ba lần. Quỹ bảo trì thì kiểm toán ba năm. | Thang máy ting |
| 0:24 | B04 | **QUYET**: Ai có ý kiến, gửi văn bản. Đây là bốn trăm phiếu ủy quyền. Biểu quyết: thông qua. | Micro rè |
| 0:31 | B05 | **HA**: Quỹ bảo trì ba năm có bao nhiêu? Cư dân hỏi công khai thì ông cứ bảo đang kiểm toán. | |
| 0:38 | B04 | **QUYET**: Chị đóng phí chưa? Chưa thì tối nay chị biết nước nhà mình dùng thế nào. | |
| 0:45 | B06 | **MN**: Hai mươi năm trước, đây là nghĩa trang làng. Mộ có người nhận thì cải táng. Mấy chục ngôi vô chủ vẫn nằm dưới hầm B3. | Gió đồng |
| 0:54 | B07 | **LOC**: Chúng tôi ở đây trước cái móng. Không đóng phí, vì chẳng ai thu. | Vang hầm |
| 1:00 | B13 | **MN**: Rằm nào bà cụ tầng ba cũng xuống góc hầm thắp hương, để đĩa bánh. Hai mươi năm. Người sống đi qua, không ai để ý. | |
| 1:08 | B07 | **LOC**: Bà ấy nhớ chúng tôi. Hàng xóm của bà ấy khổ, tôi không ngồi yên được. | |
| 1:16 | B08 | **MN**: Nấc một: Quyết khóa van nhà chị Hà. Ông Lộc mở lại. Nước chảy, chị Hà rửa được bát. | Van két · nước chảy |
| 1:25 | B04 | **QUYET**: Ai mở van? Tôi khóa lại. Phí chậm một tuần, phí gửi xe quý này tăng. | |
| 1:32 | B07 | **LOC**: Tôi mở vì nhà chị Hà không có nước. Không phải vì muốn làm trưởng ban. | |
| 1:38 | B09 | **MN**: Nấc hai: thang máy hỏng ba hôm, ông Lộc sửa trong đêm. Sáng ra chạy êm. Quyết đứng nhận lời cảm ơn như thể vừa phát minh ra cái nút. | Thang máy ting |
| 1:50 | B04 | **QUYET**: Thang máy chạy là nhờ ban quản trị. Còn van tầng mười hai khóa lại. | |
| 1:56 | B10 | **MN**: Nấc ba: ông Lộc dọn hầm, kẻ lại vạch. Cư dân dán giấy cảm ơn người sửa đêm. Ba chục chữ ký. Lần đầu ông thấy mình thuộc về nơi này. | Giấy dán |
| 2:09 | B07 | **LOC**: Tôi muốn họ sống yên. Nhưng cứ sửa xong, ông ấy lại dùng quyền làm khổ người khác. | |
| 2:16 | B01 | **MN**: Ba giờ sáng. Quyết xuống kiểm tra cái van vừa khóa. Hầm không có chiếc xe nào. | Bước chân vang |
| 2:24 | B01 | **MN**: Bốn mươi tám cảm biến trên trần đều báo có xe. | Bíp rất khẽ ×48 · nhạc tắt |
| 2:31 | B11 | **MN**: Đèn bật từng bóng, từ cuối hầm về phía ông. Như có người đi tới. | Tạch… tạch… tạch… |
| 2:40 | B11b | *(không lời, 2 s)* | Bóng đèn bật trên đầu Quyết · chìa khóa run |
| 2:43 | B07 | **LOC**: Van này tôi mở rồi. | Im 1 s |
| 2:48 | B04 | **MN**: Tối hôm sau, hội nghị cư dân lúc 20:00. Quyết mang bốn trăm phiếu ủy quyền lên bục. Ông Lộc phải có đề cử hợp lệ trước khi kiểm phiếu, không thì Quyết giữ ghế, còn van cả tòa vẫn khóa. | Micro rè |
| 3:00 | B05 | **HA**: Tôi đề cử người sửa đêm vào ban quản trị. | Xì xào |
| 3:04 | B04 | **QUYET**: Ai? Đứng lên coi. | |
| 3:07 | B04 | **MN**: Không ai đứng. Quyết cười. Trên giấy, một vong không thể tự ứng cử. Sổ quỹ vẫn nằm trong tay ban quản trị. | Đèn chớp một lần |
| 3:17 | B07 | **LOC**: Tôi đã mở van trái quy trình. Tôi xin nhận lỗi. Đây là sổ ghi từng khoản, từng lần sửa. Cư dân cứ kiểm tra. Tôi xin mọi người tự chọn người đứng tên. | Sổ đặt lên bàn |
| 3:31 | B05 | **HA**: Tôi đứng tên đề cử. Ai ủy quyền cho ông Quyết, rút lại nếu muốn. Tối nay mình tự bỏ phiếu. | |
| 3:39 | B12 | **MN**: Người ủy quyền rút lại, trực tiếp bỏ phiếu. Chín mươi phần trăm chọn chị Hà đứng tên, giao việc sửa chữa cho người sửa đêm dưới sự giám sát của cư dân. | Phiếu đổ ra · vỗ tay |
| 3:51 | B04 | **QUYET**: Phiếu của tôi đâu? | |
| 3:54 | B05 | **HA**: Ông cầm bốn trăm phiếu. Nhưng họ đến rồi, nên họ được tự chọn. | |
| 4:01 | B07 | **LOC**: Tôi sẽ công khai từng khoản. Van nào cần sửa, tôi báo trước. Không ai phải đoán tối nay nhà mình có nước không. | |
| 4:10 | B02 | **MN**: Chị Hà làm trưởng ban trên giấy. Ông Lộc sửa chữa, có sổ, có giám sát. Quyết vào tổ vệ sinh hầm. Ông bảo muốn ở gần sổ quỹ. | Chổi quét |
| 4:21 | B04 | **QUYET**: Tôi chỉ xin giữ chìa khóa kho dụng cụ. | |
| 4:25 | B07 | **LOC**: Chìa đó có sổ giao nhận. | |
| 4:29 | S33 → S34 | **MN**: Chung cư có ban quản trị, tổ vệ sinh, vong sửa đêm. Thiếu mỗi người chịu đọc biên bản. | Rít điếu cày |
| 4:38 | S34 | **MN**: Tập sau: cổng làng mở karaoke xuyên đêm. Bà gác cổng mất ngủ ba tháng. Bà ấy hát hay lắm. | “TẬP SAU” · whoosh |
| 4:47 | S06 | **MN**: Bấm đăng ký đi. Một phiếu thôi. Có thể lần đầu nó còn được kiểm. | “ĐĂNG KÝ” · cộc |

## SHORTS

### SH1 — TRỌN

- **QUYET**: Nhà nào chưa đóng phí, khóa van. Cả tòa cũng khóa được. (B02)
- **MN**: Quyết làm trưởng ban ba năm, phí gửi xe tăng ba lần. Quỹ bảo trì thì kiểm toán ba năm. Hạn duy nhất ông nhớ là hạn đóng phí. (B03)
- **HA**: Quỹ bảo trì ba năm có bao nhiêu? (B05)
- **QUYET**: Chị đóng phí chưa? Chưa thì tối nay chị biết nước nhà mình dùng thế nào. (B04)
- **MN**: Đèn cuối hầm tự bật. Ông khóa van được. Đèn thì không cần ông ký. (B01)
- **MN**: Ông Quyết quản cả nước lẫn ánh sáng, trừ hóa đơn tiền điện. (B01)
- *(không lời, 0.8 s)* (B01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH2 — TRỌN

- **MN**: Ba giờ sáng. Quyết xuống kiểm tra cái van vừa khóa. Hầm không có chiếc xe nào. (B01) · pop “Người sửa đêm”
- **MN**: Bốn mươi tám cảm biến trên trần đều báo có xe. (B01)
- **MN**: Đèn bật từng bóng, từ cuối hầm về phía ông. Như có người đi tới. (B11)
- **LOC**: Van này tôi mở rồi. (B07)
- **MN**: Cả hầm báo đủ chỗ đỗ, chỉ thiếu đúng một chỗ cho ông Quyết chạy. (B11b)
- *(không lời, 0.8 s)* (B11b)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH3 — TRỌN

- **MN**: Ba năm, quỹ bảo trì “đang kiểm toán”. (B03) · pop “Ông Quyết”
- **QUYET**: Đây là bốn trăm phiếu ủy quyền. Biểu quyết: thông qua. (B04)
- **HA**: Quỹ bảo trì ba năm có bao nhiêu? (B05)
- **QUYET**: Chị đóng phí chưa? Chưa thì tối nay chị biết nước nhà mình dùng thế nào. (B04)
- **MN**: Phiếu thì đủ. Cư dân thì chưa chắc đã tới. (B04)
- **MN**: Bốn trăm chữ ký, còn một câu trả lời thì ông để dành sang năm. (B04)
- *(không lời, 0.8 s)* (B04)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH4 — TRAILER

- **MN**: Ba giờ sáng. Quyết xuống hầm kiểm tra cái van vừa khóa. (B01) · pop “Người sửa đêm”
- **MN**: Hầm không có chiếc xe nào. Nhưng bốn mươi tám cảm biến đều báo có xe. (B01)
- **MN**: Đèn cảm ứng bật từng bóng, từ cuối hầm về phía ông. (B11)
- **MN**: Bóng cuối cùng bật ngay trên đầu ông. Rồi dừng. (B11b)
- *(không lời, 1 s)* (B11b)
- **MN**: Còn một thứ trong hầm đang chờ ông Quyết nhận. Cả đời ông khóa đủ thứ, không biết lần này có chìa nào mở nổi không. (B11b)
- *(cắt trước đáp án)* (B11b)

### SH5 — TRỌN

- **HA**: Tôi đề cử người sửa đêm vào ban quản trị. (B05) · pop “Người sửa đêm”
- **QUYET**: Ai? Đứng lên coi. (B04)
- **MN**: Không ai đứng. Trên giấy, một vong không thể tự ứng cử. (B04)
- **LOC**: Đây là sổ tôi ghi lại từng khoản, từng lần sửa. Cư dân cứ kiểm tra. (B07)
- **HA**: Ai ủy quyền cho ông Quyết, rút lại nếu muốn. Tối nay mình tự bỏ phiếu. (B05)
- **MN**: Chín mươi phần trăm chọn chị Hà đứng tên, giao việc sửa chữa cho người sửa đêm. (B12)
- **MN**: Bốn trăm phiếu ủy quyền mà không có người đứng cạnh thì chỉ là giấy lót bục. (B12)
- *(không lời, 0.8 s)* (B12)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH6 — TRỌN

- **MN**: Rằm nào bà cụ tầng ba cũng xuống góc hầm thắp hương, để đĩa bánh. Hai mươi năm. Người sống đi qua, không ai để ý. (B13) · pop “Ông Lộc”
- **LOC**: Bà ấy nhớ chúng tôi. Hàng xóm của bà ấy khổ, tôi không ngồi yên được. (B07)
- **MN**: Ông Lộc mở van nhà chị Hà, sửa thang máy, dọn cả hầm. Ông Quyết nhận công rồi khóa van lại. (B08 → B09 → B04)
- **LOC**: Tôi muốn họ được sống yên. Nhưng cứ sửa xong, ông ấy lại dùng quyền làm khổ người khác. (B07)
- **MN**: Người chết ở dưới hầm còn biết sửa hộ hàng xóm. Người sống trên kia thì sửa phí gửi xe. (B10)
- *(không lời, 0.8 s)* (B10)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH7 — TRAILER

- **MN**: Quyết mang bốn trăm phiếu ủy quyền lên bục. Người sửa đêm không thể tự đứng tên. (B04) · pop “Người sửa đêm”
- **HA**: Tôi đề cử người sửa đêm vào ban quản trị. (B05)
- **QUYET**: Ai? Đứng lên coi. (B04)
- **LOC**: Đây là sổ tôi ghi lại từng khoản, từng lần sửa. Cư dân cứ kiểm tra. (B07)
- **MN**: Phiếu bắt đầu được kiểm. Bốn trăm lá phiếu có đủ che hết sự thật không? Cư dân nhìn nhau, còn ông Quyết vẫn giữ chặt bục. (B12)
- *(không lời, 1 s)* (B12)
- *(cắt trước kết quả bỏ phiếu)* (B12)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | V3 dùng |
|---|---|---|
| B01 | Hầm xe B3 chung cư trống, cột bê tông đánh số, ô đỗ vạch sơn, đèn cảm biến đỏ trên trần mỗi ô | Có |
| B02 | Cận bàn tay đeo nhẫn của Quyết khóa van nước đỏ dưới hầm, chùm chìa khóa lủng lẳng | Có |
| B03 | Bảng tin thang máy chung cư dán thông báo chồng chất (trống chữ), vài cư dân đứng đọc | Có |
| B04 | Hội trường chung cư: băng rôn hội nghị (trống chữ), Quyết trên bục cầm micro và chồng phiếu ủy quyền | Có |
| B05 | Chị Hà cận: áo khoác mỏng, kính cận, giơ tay phát biểu, mặt bức xúc | Có |
| B06 | Ảnh cũ ngả màu: nghĩa trang làng giữa đồng, bia đá thấp, bụi xương rồng | Có |
| B07 | Ông Lộc: áo bà ba bạc màu, dép cao su, cầm cờ lê, ngồi bên đường ống hầm B3; sau lưng vài bóng mờ; viền người hơi trong | Có |
| B08 | Căn hộ đêm: vòi bếp khô, rồi nước chảy lại, ánh đèn ngủ | Có |
| B09 | Hầm xe sạch bong buổi sáng, vạch sơn mới thẳng tắp, cửa thang máy mở | Có |
| B10 | Cận tờ giấy viết tay dán cột hầm, bên dưới nhiều chữ ký (trống chữ) | Có |
| B11 | Lối đi giữa hầm, dãy đèn cảm ứng bật dần từ cuối hầm về phía Quyết đứng một mình; bóng trên đầu ông vừa bật | Có |
| B12 | Thùng phiếu bầu đổ ra bàn, phiếu chồng chất, cư dân vỗ tay phía sau | Có |
| B11b | Cực cận mặt Quyết dưới bóng đèn cảm ứng trắng, mồ hôi, tay run cầm chùm chìa khóa | Có |
| B13 | Góc hầm B3: bát hương sứ nhỏ, đĩa bánh quy, nén hương tàn, cạnh cột bê tông | Có |

## Lịch

| Nội dung | Thời gian |
|---|---|
| LONG | Thứ Năm 25/02 18:00 (+07) |
| SH1 | Thứ Năm 25/02 19:00 |
| SH2 | Thứ Sáu 26/02 11:30 |
| SH3 | Thứ Sáu 26/02 19:00 |
| SH4 | Thứ Bảy 27/02 11:30 |
| SH5 | Thứ Bảy 27/02 19:00 |
| SH6 | Chủ Nhật 28/02 11:30 |
| SH7 | Chủ Nhật 28/02 19:00 |
