# Dự án 72 — Cầu Ô Thước "Quạ bắc cầu" (v3, 2026-11-24)

- **Đồng hồ + cái giá cụ thể**: Đặt hạn chót 6:00 sáng mai xe cứu hộ tỉnh ngoài tới cẩu xe đi xưởng quen rã phụ tùng phi tang. Nếu Hiếu tẩu tán xe thành công, vụ án chìm xuồng, shipper cắn răng tàn tật, bầy quạ Ô Thước ngàn năm mang tiếng làm ngơ trước tội ác.
- **3 nấc leo thang rõ nét**: Hiếu tự xịt sơn dặm nắp ca-pô cố thủ → Đàn quạ bu kín mái tôn che trời, mưa ngâu dột làm nham nhở sơn, Hiếu vác gạch xua đuổi nhưng quạ trừng mắt đứng im → 2:00 sáng Hiếu phát điên, liều mình nổ máy mở cửa cuốn tẩu thoát ngay trong đêm.
- **Cú lật do nhân vật chủ động chọn và trả giá**: Chính quyết định nổ máy vượt rào nửa đêm của Hiếu đã mở toang gara để đàn quạ sà xuống cào toạc lớp sơn ướt; gã hoảng loạn lùi xe làm chết máy, kẹt cửa hé lộ toàn bộ tang chứng cho dân mạng livestream triệu view.
- **Cold open không lộ đáp án**: Đêm mưa ngâu rả rích chỉ có tiếng nước nhỏ tong tỏng từ lông vũ của hàng trăm con quạ bất động trên dây điện, treo lơ lửng câu hỏi rợn tóc gáy.
- **Chuẩn hóa khuôn v3**: Bảng LONG 4 cột đúng 582 chữ thoại (≈3:00); 7 shorts (5 TRỌN + 2 TRAILER); voice JSON máy đọc; teaser P73 hẹn đúng thứ Hai.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Liệu gã tài xế say xỉn có kịp tẩu tán chiếc xe tang vật trước 6 giờ sáng khi đàn quạ Ô Thước đã nối một cây cầu bằng chứng từ hiện trường về tận cửa nhà gã?
- **Đồng hồ + cái giá**: 6:00 sáng mai xe cứu hộ đến bốc xe đi tỉnh ngoài rã phụ tùng. Cái giá: Hiếu thoát tội thì cậu shipper nghèo gãy chân ôm nợ tàn tật suốt đời, còn đàn quạ ngàn năm chịu vết nhơ dung túng kẻ ác.
- **3 nấc leo thang**:
  1. Hiếu xịt sơn dặm lên vết lõm, khóa chặt cửa gara cố thủ. Quạ bắt đầu nối dải từ hiện trường về nóc nhà.
  2. Mưa ngâu đổ đúng nóc gara dột ướt xe; Hiếu vác chổi ném gạch xua đuổi nhưng quạ không bay, chỉ giương mắt câm lặng nhìn trừng trừng.
  3. 2:00 sáng, tiếng móng vuốt cào rào rào trên mái tôn khiến Hiếu phát cuồng, quyết định nổ máy mở cửa cuốn lái xe tẩu thoát trong đêm.
- **Điểm thấp nhất**: 2:00 sáng, cậu shipper nằm viện không có tiền mổ đối mặt nguy cơ tàn tật, trong khi Hiếu ngồi trong xe rung đùi đếm từng giờ chờ trốn thoát.
- **Cú lật (nhân vật chọn & trả giá)**: Hiếu bấm mở cửa cuốn để chuồn sớm, đàn quạ lập tức sà xuống nắp ca-pô cào toạc lớp sơn dặm chưa khô, làm lộ vết lõm dính sơn cam xe shipper. Hiếu hoảng hốt lùi xe làm chết máy, cửa kẹt cứng. Sáng ra dân mạng livestream triệu view bắt trọn biển số, CSGT ập vào tóm gọn ngay trước mũi xe cứu hộ.
- **Khoảnh khắc rợn duy nhất**: 2:15 đêm mưa ngâu, cửa cuốn hé mở. Hàng trăm con quạ đen đầu trụi ướt sũng phủ kín dây điện và mái nhà, tuyệt đối không một tiếng kêu, chỉ có tiếng nước nhỏ tí tách rơi trước khi đồng loạt sà xuống nắp ca-pô.
- **Câu kết**: "Tháng Bảy quạ rảnh. Mà quạ thời nay thì thích lên xu hướng."

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (Host) | B02, S01, S26, S33, S34, S06 | Thiện Minh | atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25 |
| HIEU | Hiếu (Tài xế say xỉn) | Q04, Q06, Q09 | Adam bựa | atempo=1.05 |
| SHIP | Tuấn (Cậu shipper bị tông) | Q05 | Thiền Tâm Đức | asetrate=48000*1.05,aresample=48000 |
| CSGT | Chị Cảnh sát giao thông | Q11 | Ngọc Huyền | anull |

```json voices
{
  "MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},
  "HIEU": {"preset": "Adam bựa", "fx": "atempo=1.05"},
  "SHIP": {"preset": "Thiền Tâm Đức", "fx": "asetrate=48000*1.05,aresample=48000"},
  "CSGT": {"preset": "Ngọc Huyền", "fx": "anull"}
}
```

## LONG (582 chữ thoại)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | Q01 | *(không lời, 2.0 s)* | mưa rả rích · tiếng nước nhỏ |
| 0:02 | Q01 | **MN**: Đêm mưa ngâu. Hàng trăm con quạ đầu trụi đậu kín dây điện. | "ĐÊM MƯA NGÂU" |
| 0:06 | Q01 | **MN**: Không tiếng kêu. Chỉ tiếng nước nhỏ tong tỏng từ lông quạ. | "0 TIẾNG KÊU" · tongtong |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Tháng Bảy mưa ngâu rồi. Biết vì sao tháng Bảy quạ trụi đầu không? | "THÁNG BẢY MƯA NGÂU" · coc |
| 0:15 | S26 | **MN**: Vì bận đội đá bắc cầu trên trời. Nhưng năm nay, có đàn quạ rẽ nhầm xuống trần gian. | "BẮC CẦU" |
| 0:20 | S34 | **MN**: Nhầm… mà rất đúng. Nó bắc cây cầu nối thẳng tội ác của một kẻ tưởng mình thoát tội. | "TỘI ÁC" · whoosh |
| 0:25 | Q03 | **MN**: Tối mưa. Hiếu lái ô tô về sau chầu nhậu túy lúy với đối tác. | "ĐÊM TAI NẠN" |
| 0:29 | Q03 | **MN**: Đường vắng không đèn. Một tiếng rầm khô khốc vang lên. Cậu shipper văng vào lề cỏ. | ram |
| 0:34 | Q04 | **MN**: Hiếu đạp ga phóng vụt đi. | |
| 0:36 | Q04 | **HIEU**: Không ai thấy. Không có camera. Đường tối om thế này, bố ai mà biết xe nào! | "KHÔNG CAMERA" |
| 0:41 | Q05 | **SHIP**: Em chỉ nhớ ánh đèn pha. Tỉnh dậy ở viện thì chân bó bột, xe nát bét. | nhaptim · bopbot |
| 0:47 | Q06 | **MN**: Hiếu giấu xe trong gara. Sáu giờ sáng mai, xe cứu hộ tỉnh ngoài sẽ tới cẩu đi xưởng quen rã phụ tùng phi tang. | "HẠN: 6:00 SÁNG MAI" · tick |
| 0:53 | Q06 | **HIEU**: Cố thủ kín đêm nay là xong. Sạch không tì vết. | |
| 0:56 | Q06 | **MN**: Gã vội vã lấy bình sơn xịt dặm vụng về lên vết lõm nắp ca-pô. | xixi |
| 1:01 | Q07 | **MN**: Dân gian kể, tháng Bảy quạ bay lên trời đội đá bắc cầu Ô Thước nên đầu trụi. | "CẦU Ô THƯỚC" |
| 1:07 | S26 | **MN**: Quạ tháng Bảy giỏi nhất một việc: nối hai đầu xa cách lại với nhau. | "NỐI HAI ĐẦU" |
| 1:11 | Q08 | **MN**: Sáng hôm sau, quạ đầu trụi đậu kín đường dây điện. Bắt đầu đúng chỗ cậu shipper ngã. | "BẮT ĐẦU TỪ HIỆN TRƯỜNG" |
| 1:16 | Q08 | **MN**: Nối dài từng quãng, từng cột điện, dẫn thẳng về mái gara nhà Hiếu. | "NỐI VỀ GARA" |
| 1:21 | Q08 | **MN**: Dưới dải quạ, mưa ngâu rả rích. Hai bên đường thì khô cong. | "MƯA ĐI THEO QUẠ" |
| 1:25 | Q04 | **HIEU**: Quạ ở đâu mà bu đầy nóc nhà tao thế này? | |
| 1:29 | Q01 | **MN**: Hiếu vác chổi ra xua, nhặt gạch ném đuổi. | "XUA ĐUỔI" |
| 1:32 | Q01 | **HIEU**: Cút đi! Biến đi cho tao nhờ! | |
| 1:35 | Q01 | **MN**: Đàn quạ không bay. Hàng trăm cái đầu trụi đồng loạt quay lại, trừng trừng nhìn gã. | nhactat |
| 1:41 | Q06 | **MN**: Mưa ngâu xối xả làm dột gara, nước ròng ròng làm nhòe lớp sơn xịt nắp ca-pô. | dottieng |
| 1:46 | Q06 | **HIEU**: Kệ cụ chúng mày. Cố thủ đến sáng, xe cứu hộ tới bốc đi là xong! | "CỐ THỦ ĐẾN SÁNG" |
| 1:51 | Q05 | **MN**: Cậu shipper nằm viện không có tiền mổ chân, cắn răng chịu đau. | nhaptim |
| 1:56 | Q05 | **SHIP**: Người ta tông xong bỏ chạy, em biết bắt đền ai bây giờ? | |
| 2:00 | Q09 | **MN**: Hai giờ sáng. Móng quạ cào rào rào trên mái tôn. Hiếu phát điên. | "2:00 SÁNG" · caomong |
| 2:05 | Q09 | **HIEU**: Không chờ đến sáng nữa. Tao tự nổ máy chuồn ngay trong đêm! | "NƯỚC LIỀU" |
| 2:10 | Q09 | **MN**: Hiếu kéo cửa cuốn gara lên một nửa. | cuacuon |
| 2:13 | Q01 | *(không lời, 1.5 s)* | nhactat · tiengmua |
| 2:15 | Q01 | **MN**: Mái nhà, tường rào, dây điện trước cổng kín quạ. Hàng trăm con. Đầu trụi lủi. Lông ướt sũng. | "HÀNG TRĂM CON" |
| 2:20 | Q01 | **MN**: Không một tiếng kêu. Chỉ nghe tiếng nước nhỏ từ lông quạ tí tách rơi xuống đất. | tongtong |
| 2:24 | Q02 | **MN**: Rồi từng con sà xuống, đậu thành hàng thẳng trên nắp ca-pô. | saxuong |
| 2:28 | Q02 | **MN**: Móng quạ bấu chặt, cào toạc lớp sơn xịt, lộ vết lõm dính sơn cam xe shipper. | "CÀO TOẠC SƠN" |
| 2:34 | Q04 | **HIEU**: Tránh ra! Đừng cào nữa! Xe tao! | |
| 2:37 | Q10 | **MN**: Hiếu hoảng loạn lùi xe thì xe chết máy, cửa cuốn kẹt cứng. | chetmay |
| 2:41 | Q10 | **MN**: Sáng ra, cửa hé lộ chiếc xe bị quạ bu kín. Cả phố xúm lại livestream. | "TRIỆU VIEW" · ting |
| 2:46 | Q06 | **MN**: Clip triệu view zoom thẳng vết móp bị cào tróc sơn, dính vệt sơn cam rành rành. | "BẰNG CHỨNG LỘ" |
| 2:51 | Q11 | **CSGT**: Xe máy màu cam. Vết sơn trùng khớp vụ hôm trước. Đi! | bodam |
| 2:56 | Q04 | **MN**: Hiếu bị tóm ngay khi xe cứu hộ vừa trờ tới. Bồi thường không thiếu một đồng. | "BẮT TẠI TRẬN" |
| 3:01 | Q08 | **MN**: Đàn quạ cất cánh bay vút lên trời. Mưa ngâu tạnh hẳn. Cầu Ô Thước đã xong phận sự. | "MƯA TẠNH" · canhdongloat |
| 3:06 | S33 → S34 | **MN**: Hiếu khôn lắm. Không camera, không nhân chứng, không thuê thợ. Nhưng gã quên mất một việc: tháng Bảy quạ rảnh. Mà quạ thời nay thì thích lên xu hướng. | rithuoc |
| 3:12 | S26 | **MN**: Thứ Hai: trong tháng cô hồn, một thầy mở dịch vụ tiễn vong ám nhà giá chục triệu. Nhà có vong ông nội thật thì thầy… chưa gặp. | "TẬP SAU · THỨ HAI" · whoosh |
| 3:20 | S06 | **MN**: Bấm đăng ký đi. Đi đứng cẩn thận, không thì quạ cũng chẳng buồn bắc cầu cứu đâu. | "ĐĂNG KÝ" · coc |

## SHORTS

### SH1 (TRỌN)
- **MN**: Tháng Bảy mưa ngâu, vì sao quạ lại trụi đầu? (Q07) · pop "CẦU Ô THƯỚC"
- **MN**: Tích xưa bảo quạ bay lên trời đội đá bắc cầu cho Ngưu Lang Chức Nữ. (Q07)
- **MN**: Nhưng năm nay có đàn quạ rẽ xuống trần gian, nối từ chỗ một cậu shipper bị tông xe… (Q03 → Q08)
- **MN**: …Dẫn thẳng về gara của gã tài xế say xỉn bỏ chạy. (Q08 → Q01)
- **HIEU**: Không ai thấy, không camera, sao chúng mày biết tao ở đây? (Q04)
- **MN**: Cầu này không nối tình duyên. Cầu này quạ nối thẳng vào đồn công an. (Q11) · pop "CÔNG LÝ NỐI ĐẦU"
- *(lặng 0.8 s)*
- **MN**: Bản đầy đủ tao để link dưới, bấm vào mà xem. (S06)

### SH2 (TRỌN)
- **HIEU**: Không ai thấy. Không có camera. Bố ai mà biết xe nào! (Q04) · pop "TÔNG XE BỎ CHẠY"
- **MN**: Hiếu nhốt xe vào gara, tự xịt sơn dặm lên vết lõm. (Q06)
- **MN**: Gã chỉ cần thủ kín đến sáu giờ sáng mai, xe cứu hộ tới cẩu đi rã phụ tùng là xóa sạch dấu vết. (Q06) · pop "HẠN: 6H SÁNG"
- **MN**: Nhưng hai giờ sáng, đàn quạ kéo tới bu kín nắp ca-pô, móng vuốt cào toạc lớp sơn dặm lộ vệt sơn cam xe nạn nhân. (Q02) · pop "BÓC PHỐT TẠI TRẬN"
- **CSGT**: Xe máy màu cam. Vết sơn trùng khớp vụ hôm trước. Đi! (Q11)
- *(lặng 0.8 s)*
- **MN**: Tưởng khôn lỏi mà qua mắt được quạ à? Chi tiết ở link dưới. (S34)

### SH3 (TRỌN)
- **MN**: Nghề của quạ tháng Bảy: chuyên nối hai đầu xa cách. (Q07) · pop "NGHỀ CỦA QUẠ"
- **SHIP**: Em bị tông gãy chân, người ta trốn mất, em không biết bắt đền ai. (Q05)
- **HIEU**: Cố thủ đêm nay là xong. Sạch không tì vết. (Q06)
- **MN**: Một đầu là giường bệnh không có tiền mổ. Một đầu là gara xe sang đang dặm lại sơn. (Q05 → Q06)
- **MN**: Đàn quạ đầu trụi đậu thành một hàng dài dằng dặc nối hai điểm lại với nhau, kéo cả triệu người tới xem livestream chỉ điểm. (Q08 → Q10) · pop "CẦU CHỈ ĐIỂM"
- *(lặng 0.8 s)*
- **MN**: Quạ bắc cầu kiểu thời đại số, link đầy đủ ngay dưới. (S01)

### SH4 (TRỌN)
- **MN**: Đêm mưa ngâu, gã tài xế mở hé cửa gara định tẩu thoát lúc hai giờ sáng. (Q09) · pop "2:00 SÁNG"
- **MN**: Mái nhà, tường rào, dây điện kín đặc hàng trăm con quạ đầu trụi ướt sũng. (Q01)
- **MN**: Không một tiếng kêu. Chỉ có tiếng nước nhỏ tong tỏng từ lông vũ. (Q01) · pop "0 TIẾNG KÊU"
- **MN**: Rồi từng con sà xuống nắp ca-pô, móng quạ cào toạc lớp sơn xịt còn ướt nhoẹt. (Q02)
- **HIEU**: Tránh ra! Đừng cào nữa! Xe tao! (Q04)
- **MN**: Cào lộ vệt sơn cam xong, xe gã chết máy, cửa kẹt cứng đến tận sáng. (Q10)
- *(lặng 0.8 s)*
- **MN**: Cảnh tượng rợn người ấy tao kể đủ ở video dài, link dưới. (S33)

### SH5 (TRỌN)
- **MN**: Bí kíp để một vụ tai nạn không camera leo thẳng lên top thịnh hành. (Q10) · pop "TRIỆU VIEW LIVESTREAM"
- **HIEU**: Xe giấu trong gara kín mít, đố đứa nào tìm ra. (Q06)
- **MN**: Sáng hôm sau, cả phố xúm lại quay clip vì căn nhà có đàn quạ kỳ lạ bu kín đầu ô tô. (Q10)
- **MN**: Clip triệu view zoom thẳng vào nắp ca-pô: móng quạ cào tróc lớp sơn dặm, lộ vết móp dính màu xe nạn nhân. (Q06) · pop "LỘ BẰNG CHỨNG"
- **CSGT**: Cảm ơn các bạn quay clip, đồng chí cẩu xe về đồn! (Q11)
- *(lặng 0.8 s)*
- **MN**: Khôn ngoan không lại với quạ thích lên xu hướng. Xem trọn bộ ở link dưới. (S26)

### SH6 (TRAILER)
- **MN**: Sáng mưa ngâu, một cảnh tượng rợn tóc gáy xuất hiện khắp phố. (Q08) · pop "DẢI QUẠ KỲ LẠ"
- **MN**: Hàng ngàn con quạ đầu trụi đậu kín đường dây điện, bắt đầu từ vũng máu của cậu shipper bị tông xe. (Q08 → Q03)
- **MN**: Dải quạ nối dài từng cột điện, dẫn thẳng về nóc gara của một căn biệt thự đóng kín cửa. (Q08 → Q01)
- **MN**: Dưới dải quạ mưa xối xả, hai bên đường khô cong. Cánh cửa gara ấy đang giấu thứ gì? (Q01 → Q09)
- **MN**: Bí mật nằm ở bản đầy đủ, link ngay dưới bình luận. (S06)

### SH7 (TRAILER)
- **MN**: Còn bốn tiếng nữa là trời sáng. Kẻ tông xe bỏ chạy sắp xóa sạch dấu vết. (Q06) · pop "CÒN 4 TIẾNG"
- **HIEU**: Sáu giờ sáng xe cứu hộ tới cẩu đi xưởng quen rã phụ tùng là xong. (Q06)
- **MN**: Nhưng hai giờ sáng, đàn quạ trên mái tôn bắt đầu cào móng rào rào như mưa đá. (Q09)
- **HIEU**: Tao tự nổ máy chuồn ngay trong đêm! (Q09)
- **MN**: Cửa cuốn vừa kéo lên một nửa, hàng trăm đôi mắt đục ngầu sà xuống nắp ca-pô… (Q01 → Q02)
- **MN**: Chuyện gì xảy ra tiếp theo? Xem ngay bản đầy đủ ở link dưới. (S34)

## Hình
Tái sử dụng: B02 + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Danh sách ảnh vẽ mới (11 ảnh 16:9)
| Mã | Trạng thái v3 | Mô tả cảnh |
|---|---|---|
| Q01 | [x] Đang dùng | Đêm mưa ngâu: mái gara, mái nhà, đường dây điện trước cổng kín quạ đầu trụi lông ướt, bất động im lặng |
| Q02 | [x] Đang dùng | Cận nắp ca-pô xe vừa sơn lại, quạ đậu thành một hàng thẳng cào móng làm toạc sơn |
| Q03 | [x] Đang dùng | Đường vắng đêm mưa, đèn pha xe con nhòe lướt qua, xa xa một xe máy shipper đổ bên lề cỏ |
| Q04 | [x] Đang dùng | Hiếu cận trong xe: sơ mi nhàu, mặt đỏ, kính râm lấm lét; bản sau hoảng loạn tháo kính |
| Q05 | [x] Đang dùng | Tuấn trên giường bệnh, chân bó bột, áo shipper treo đầu giường mặt đau đớn cắn răng |
| Q06 | [x] Đang dùng | Gara nhà Hiếu: Hiếu tự xịt bình sơn dặm đầu xe; bản cận đầu xe lớp sơn bị cào bong lộ vệt sơn cam |
| Q07 | [x] Đang dùng | Tranh dân gian: dải ngân hà, đàn quạ nối thành cầu Ô Thước, Ngưu Lang Chức Nữ gặp nhau |
| Q08 | [x] Đang dùng | Sáng mưa: quạ đậu kín đường dây điện kéo dài dọc phố, dưới dải quạ mưa, hai bên khô; bản quạ bay lên trời nắng |
| Q09 | [x] Đang dùng | Hiếu kéo cửa cuốn gara lên lúc nửa đêm, mưa rả rích |
| Q10 | [x] Đang dùng | Người dân đứng trước nhà Hiếu giơ điện thoại livestream đàn quạ kín mái, cửa gara hé lộ đầu xe |
| Q11 | [x] Đang dùng | Chị CSGT cận xem clip trên điện thoại, đứng bật dậy cầm bộ đàm ra lệnh |

## Lịch
- **LONG**: Thứ Năm 29/07 18:00 (+07)
- **SH1**: Thứ Năm 29/07 19:00
- **SH2**: Thứ Sáu 30/07 11:30
- **SH3**: Thứ Sáu 30/07 19:00
- **SH4**: Thứ Bảy 31/07 11:30
- **SH5**: Thứ Bảy 31/07 19:00
- **SH6**: Chủ Nhật 01/08 11:30
- **SH7**: Chủ Nhật 01/08 19:00
