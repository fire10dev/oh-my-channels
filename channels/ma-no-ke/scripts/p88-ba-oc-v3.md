# Dự án 88 — Bà bán ốc "Đi đâu cũng bị chém" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá cụ thể**: Hạn chót ba ngày du lịch với cọc tiền lãi trăm triệu; không giải được cái vía ăn chặn thì nhẵn túi ở bến xe đất khách, ví ngập vỏ ốc ngậm cát.
- **3 nấc leo thang chủ động**: Thịnh né quán lớn tấp sạp cóc (dừa 1 triệu) → chui hẻm sâu ăn bún (bún 2 triệu + taxi 3 cây số 3 triệu) → nhịn đói khóa cửa phòng khách sạn cố thủ (bị tính phụ phí ngắm biển 30 triệu).
- **Cold open treo bí mật**: Mở đầu bằng tiếng rao đêm và thái độ hợm hĩnh của Thịnh; không lộ trước việc Thịnh sẽ bị chém lại ra sao.
- **Điểm thấp nhất & khoảnh khắc rợn duy nhất**: Bến xe chiều muộn đói lả, mở ví vét tiền xe thì chỉ thấy toàn vỏ ốc ngậm cát ướt tanh nồng, chớp mắt chỉ còn trơ trọi đúng một tờ 20 nghìn lẻ.
- **Cú lật do nhân vật chọn và trả giá**: Thịnh nhận bát ốc 20 nghìn đúng giá chợ của bà Tư cứu đói, thề từ bỏ thói bóp cổ khách; trả giá bằng toàn bộ cọc tiền lãi cả năm bị "thu hồi" sạch bách.
- **Shorts chuẩn hóa**: 5 TRỌN + 2 TRAILER, pop tên bà Tư, nhả punchline và dẫn link đúng chuẩn.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Liệu ông Thịnh có giữ nổi cọc tiền trăm triệu và thói chặt chém khi chính mình bước vào cái bẫy "nhân mười" của chiếc đòn gánh âm ty?
- **Đồng hồ + cái giá**: Hạn chót đúng ba ngày du lịch. Cái giá: nếu không trả sạch vía ăn chặn, Thịnh sẽ bị lột sạch từng xu tiền bẩn, nhẵn túi đói lả ở bến xe đất khách.
- **3 nấc leo thang**:
  1. Nấc 1: Khôn lỏi né quán lớn, tấp sạp dừa ven đường → Bị chém 1 triệu ("giá thị trường").
  2. Nấc 2: Chui hẻm sâu ăn bún bình dân → Bị chém 2 triệu kèm taxi 3 cây số lấy 3 triệu.
  3. Nấc 3: Khóa trái cửa phòng khách sạn nhịn đói ôm vali cố thủ → Bị tính phụ phí nhìn biển 30 triệu, bay sạch cọc tiền.
- **Điểm thấp nhất**: Chiều muộn ở bến xe vắng, vợ bỏ về trước, đói lả run rẩy, xe khách từ chối chở vì không đủ tiền mua vé.
- **Cú lật (ai chọn gì, trả giá gì)**: Thịnh chọn cúi đầu nhận bát ốc 20 nghìn đúng giá chợ của bà Tư để cứu đói, thề về quán niêm yết giá; trả giá bằng toàn bộ tiền lãi trăm triệu bị quét sạch.
- **Khoảnh khắc rợn duy nhất**: Mở ví ở bến xe, gió biển thốc lạnh ngắt, trong ví ngập ngụa toàn vỏ ốc ngậm cát ướt tanh nồng.
- **Câu kết bible**: Về quán dán bảng giá đúng chợ, khách đông nghìn nghịt, nhưng mỗi lần thối tiền thừa tay Thịnh vẫn run bần bật vì sợ sờ trúng vỏ ốc.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (người dẫn chuyện) | B02, S01, S26, S33, S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| THINH | Ông Thịnh (chủ quán chặt chém) | B05 | Adam bựa | `atempo=1.03` |
| TU | Bà Tư (bà bán ốc đã khuất) | B07 | Ngọc Huyền | `atempo=0.95,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:60:0.3` |
| KHACH | Khách du lịch bị chém | B04 | Hải Đăng | `anull` |
| CHU | Người bán hàng nơi du lịch | B10 | Minh Đức | `atempo=1.05` |

```json voices
{
  "MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},
  "THINH": {"preset": "Adam bựa", "fx": "atempo=1.03"},
  "TU": {"preset": "Ngọc Huyền", "fx": "atempo=0.95,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:60:0.3"},
  "KHACH": {"preset": "Hải Đăng", "fx": "anull"},
  "CHU": {"preset": "Minh Đức", "fx": "atempo=1.05"}
}
```

## LONG (582 chữ lời thoại, dựng ≈ 3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | B01 | *(không lời, 2.4 s)* | "NỬA ĐÊM · BÃI BIỂN" · sóng biển rì rào · nhạc tắt |
| 0:02 | B01 | *(không lời, 1.2 s)* | gió biển · mõ CỘC nhẹ |
| 0:04 | B01 | **TU**: Ai… ốc luộc đây… | "BÀ TƯ BÁN ỐC" · vọng xa |
| 0:07 | B05 | **THINH**: Đêm hôm còn rao. Biển này tao trùm, ai thèm ăn. | "CHỦ NHÀ HÀNG" |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Từng đi ăn hải sản dính "giá thị trường" chưa? | "LẠI MÒ VÀO À?" · coc · braam |
| 0:15 | S34 | **MN**: Nghe chuyện này đi. Kẻ chuyên chém khách, nay bị thiên hạ chém lại. | "GẤP MƯỜI" |
| 0:19 | B02 | **MN**: Nhà hàng Thịnh sát mép sóng. Hải sản ngộp thở, không treo bảng giá. | "KHÔNG BẢNG GIÁ" · quán đông |
| 0:24 | B03 | **MN**: Ghẹ năm triệu. Ốc ba triệu. Gấp mười giá chợ. | máy tính tiền · ting |
| 0:27 | B04 | **KHACH**: Năm triệu con ghẹ á? Chợ có năm trăm nghìn! | "5 TRIỆU?!" |
| 0:31 | B05 | **THINH**: Giá thị trường. Không ăn đừng gọi. Gọi rồi thì nôn tiền ra. | "GIÁ THỊ TRƯỜNG" |
| 0:35 | S26 | **MN**: Khách cắn răng trả rồi đi. Thịnh cười: khách du lịch một lần, cần gì quay lại. | "VẶT LÔNG" |
| 0:40 | B06 | **MN**: Bãi này xưa có bà Tư gánh ốc. Bán đúng giá, đói cho ăn, thiếu cho nợ. | "BÀ TƯ · 40 NĂM ĐÚNG GIÁ" |
| 0:46 | B07 | **TU**: Buôn bán thật thà sóng giữ bến. Buôn gian ăn chặn, trời không cho buôn. | sóng biển |
| 0:51 | B08 | **MN**: Thịnh dắt vợ đi du lịch ba ngày với cọc tiền lãi. Khóa cửa, ngoài hiên cạch một tiếng. | "HẠN: 3 NGÀY" · cạch |
| 0:58 | B08 | *(không lời, 1.8 s)* | nhạc tắt · hơi nóng xì nhẹ |
| 1:00 | S26 | **MN**: Đòn gánh gõ vali. Hạn chót ba ngày: không trả hết vía ăn chặn, đừng hòng mang một đồng về. | "VÍA ĂN CHẶN" · bassdown |
| 1:06 | B09 | **MN**: Đến biển khác, Thịnh né quán to, tấp sạp dừa ven đường. | "NẤC 1 · SẠP VEN ĐƯỜNG" |
| 1:11 | B10 | **THINH**: Cho hai quả dừa coi. Sạp cóc này chắc vài chục. | |
| 1:15 | B10 | **CHU**: Của anh một triệu. Năm trăm nghìn một quả. | "1 TRIỆU / 2 QUẢ" · ting |
| 1:18 | B05 | **THINH**: Chợ có năm chục! Sao chém tao một triệu? | |
| 1:22 | B10 | **CHU**: Giá thị trường. Không uống thì đừng gọi. | "GIÁ THỊ TRƯỜNG" |
| 1:25 | B05 | **THINH**: Tiên sư, đúng câu của tao. | "QUEN QUEN" |
| 1:28 | B10 | **MN**: Trưa đói mềm, Thịnh dắt vợ chui hẻm ăn bún. | "NẤC 2 · HẺM CỤT" |
| 1:32 | B10 | **THINH**: Hẻm này chém ai được. Tính tiền đi chị! | |
| 1:35 | B10 | **CHU**: Hai tô bún: hai triệu. | "2 TRIỆU / 2 TÔ" · ting |
| 1:38 | B05 | **THINH**: Bàn kia ăn hệt tao, trả có một trăm nghìn! | |
| 1:42 | B10 | **CHU**: Người ta dân địa phương. Khách du lịch tính giá thị trường. | |
| 1:46 | B09 | **MN**: Thịnh cắn răng trả, vẫy taxi. Ba cây số, tài xế lấy ba triệu. Đúng gấp mười. | "TAXI: 3 TRIỆU" · còi xe |
| 1:52 | B09 | **MN**: Ngày thứ ba, tiền vơi sạch. Thịnh khóa cửa phòng, ôm vali nhịn đói. | "NẤC 3 · CỐ THỦ" · khóa cửa |
| 1:57 | B05 | **THINH**: Tao không ra ngoài, không ăn, xem ai chém được tao. | |
| 2:01 | B10 | **MN**: Trả phòng, lễ tân đưa hóa đơn: phụ phí nhìn biển ba mươi triệu. Trăm triệu sạch bách. | "PHỤ PHÍ: 30 TRIỆU" · chotdon |
| 2:07 | B05 | **THINH**: Cướp cạn à? Vợ ơi ra bến xe, về! | |
| 2:10 | B05 | **MN**: Bến xe chiều muộn. Vợ cằn nhằn bỏ về. Thịnh đói lả, móc ví mua vé. | "ĐIỂM THẤP NHẤT" · nhạc tắt |
| 2:15 | B08 | **MN**: Mở ví, gió thốc lạnh ngắt. Trong ví ngập ngụa vỏ ốc ngậm cát tanh nồng. | "TOÀN VỎ ỐC" · gió rít · im 1.5 s |
| 2:22 | B05 | **THINH**: Tiền tao đâu? Sao toàn vỏ ốc thế này? | run rẩy |
| 2:25 | B08 | **MN**: Chớp mắt, vỏ ốc lại thành tiền, nhưng chỉ trơ trọi đúng một tờ hai mươi nghìn lẻ. | "CÒN ĐÚNG 20.000 Đ" |
| 2:31 | B07 | **TU**: Đói không chú? Ăn bát ốc luộc cho ấm bụng. | khói nghi ngút |
| 2:35 | B07 | **MN**: Góc bến xe, bà cụ nón lá ngồi bên nồi ốc bốc khói sả gừng. | "BÀ TƯ" |
| 2:40 | B05 | **THINH**: Tôi còn hai mươi nghìn. Bà chém hai trăm thì tôi chết đói mất. | |
| 2:44 | B07 | **TU**: Bốn mươi năm tôi bán đúng hai mươi nghìn. Đói cho ăn, thiếu cho nợ. | "ĐÚNG GIÁ 20.000 Đ" |
| 2:49 | B05 | **THINH**: Cho tôi xin một bát… đói quá rồi… | |
| 2:52 | B07 | **TU**: Ăn xong nhớ đường về. Bến bãi của người ta, đừng bóp cổ khách nữa. | sóng vỗ xa |
| 2:57 | B02 | **MN**: Đêm đó Thịnh lết về quán. Bay cọc tiền, đổi một bát ốc nhớ đời. | |
| 3:01 | B02 | **MN**: Sáng ra, quán dán bảng giá to đùng: đúng giá chợ. Khách đông nghìn nghịt. | "NIÊM YẾT ĐÚNG GIÁ" · quán đông |
| 3:06 | B05 | **THINH**: Quán em từ nay bán đúng giá chợ! Sai một đền mười! | |
| 3:10 | S33 → S34 | **MN**: Mỗi tội lúc thối tiền thừa, tay Thịnh vẫn run bần bật, sợ lại móc ra vỏ ốc. | rít thuốc |
| 3:15 | S26 | **MN**: Đi biển không bảng giá thì quay xe. Còn quen chặt chém thì nhớ: mày cũng có ngày đi du lịch. | |
| 3:20 | B06 | **MN**: Tập sau: băng trộm chó cầm bả, vác lồng. Làng ấy cổng nào cũng có chó đá. Mà chó đá thì… không ăn bả. | "TẬP SAU" · whoosh |
| 3:26 | S06 | **MN**: Bấm đăng ký đi. Đúng giá niêm yết: miễn phí. | "ĐĂNG KÝ" · coc |

## SHORTS
### SH1 (TRỌN)
- **MN**: Con ghẹ năm triệu, đĩa ốc ba triệu. Khách hỏi thì chủ quán bảo sao? (B03) · pop "GIÁ THỊ TRƯỜNG"
- **THINH**: Giá thị trường. Không ăn đừng gọi. Gọi rồi thì nôn tiền ra. (B05)
- **MN**: Ông này chuyên chém khách du lịch gấp mười lần giá chợ. (B02)
- **TU**: Người buôn bán thật thà, sóng giữ bến. Buôn gian ăn chặn, trời không cho buôn. (B07) · pop "BÀ TƯ BÁN ỐC"
- **MN**: Đêm đó ngoài hiên cạch một tiếng, cái vía nhân mười bắt đầu dính chặt vào người ông. (B08)
- *(lặng 0.8 s)*
- **MN**: Kẻ cướp gặp bà già ra sao, tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRỌN)
- **THINH**: Cho hai quả dừa coi. Sạp cóc này chắc vài chục. (B10)
- **CHU**: Của anh một triệu. Năm trăm nghìn một quả. (B10) · pop "1 TRIỆU / 2 QUẢ"
- **THINH**: Chợ có năm chục! Sao chém tao một triệu? (B05)
- **CHU**: Giá thị trường. Không uống thì đừng gọi. (B10) · pop "ĐÚNG CÂU NÓI CŨ"
- **THINH**: Tiên sư, đúng câu của tao. (B05)
- **MN**: Mười năm đi chém người ta, nay đi du lịch bị chém lại đúng từng chữ một. (S26)
- *(lặng 0.8 s)*
- **MN**: Còn tô bún hai triệu nữa, tao kể ở bản đầy đủ, link dưới. (S34)

### SH3 (TRỌN)
- **MN**: Khách du lịch đến một lần rồi đi, cần gì ai quay lại. (B02) · pop "TRIẾT LÝ CHẶT CHÉM"
- **MN**: Đó là câu ông Thịnh nói khi bán đĩa ốc ba triệu cho khách. (B03)
- **MN**: Đến lúc ông dẫn vợ đi nghỉ mát tỉnh khác, vào hẻm ăn tô bún bị tính hai triệu, taxi ba cây số lấy ba triệu. (B10) · pop "GẤP MƯỜI"
- **MN**: Nhịn đói cố thủ trong khách sạn, lúc trả phòng vẫn bị tọng thêm ba mươi triệu tiền ngắm biển. (B09)
- **THINH**: Cướp cạn à? Vợ ơi ra bến xe, về! (B05)
- *(lặng 0.8 s)*
- **MN**: Ai đứng sau màn trả đũa này? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 (TRỌN)
- **MN**: Chiều muộn ở bến xe, mở ví mua vé xe đò thì chuyện gì xảy ra? (B05) · pop "KHOẢNH KHẮC RỢN"
- **MN**: Mở ví, gió thốc lạnh ngắt. Trong ví không còn tiền, ngập ngụa vỏ ốc ngậm cát tanh nồng. (B08) · pop "TOÀN VỎ ỐC"
- **THINH**: Tiền tao đâu? Sao toàn vỏ ốc thế này? (B05)
- **MN**: Chớp mắt, vỏ ốc lại thành tiền, nhưng chỉ trơ trọi đúng một tờ hai mươi nghìn lẻ. (B08)
- **TU**: Đói không chú? Ăn bát ốc luộc cho ấm bụng. (B07) · pop "BÀ TƯ BÁN ỐC"
- *(lặng 0.8 s)*
- **MN**: Bát ốc cứu mạng kẻ chặt chém, tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN)
- **THINH**: Tôi còn hai mươi nghìn. Bà chém hai trăm thì tôi chết đói mất. (B05) · pop "SỢ BỊ CHÉM"
- **TU**: Bốn mươi năm tôi bán đúng hai mươi nghìn. Đói cho ăn, thiếu cho nợ. (B07) · pop "ĐÚNG GIÁ 40 NĂM"
- **THINH**: Cho tôi xin một bát… đói quá rồi… (B05)
- **TU**: Ăn xong nhớ đường về. Bến bãi của người ta, đừng bóp cổ khách nữa. (B07)
- **MN**: Bay sạch cọc tiền trăm triệu đổi lấy một bát ốc nhớ đời. Về nhà phải dán bảng niêm yết gấp. (B02)
- *(lặng 0.8 s)*
- **MN**: Toàn bộ chuyến du lịch bão táp, tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 (TRAILER)
- **TU**: Ai… ốc luộc đây… (B01) · pop "TIẾNG RAO NỬA ĐÊM"
- **THINH**: Đêm hôm còn rao. Biển này tao trùm, ai thèm ăn. (B05)
- **MN**: Nửa đêm trước ngày đi du lịch, chiếc đòn gánh gõ cạch lên vali ông Thịnh. (B08) · pop "CẠCH!"
- **MN**: Đòn gánh gõ vali, hạn chót ba ngày bắt đầu chạy. Không trả hết vía ăn chặn, đừng hòng mang một đồng về. (S26)
- **MN**: Kẻ chặt chém khét tiếng sẽ bị lột sạch tiền ra sao? (S34)
- **MN**: Xem bản đầy đủ, link ngay bên dưới. (S06)

### SH7 (TRAILER)
- **THINH**: Tao không ra ngoài, không ăn, xem ai chém được tao. (B05) · pop "CỐ THỦ TRONG PHÒNG"
- **MN**: Bị chém dừa một triệu, bún hai triệu, ông Thịnh sợ hãi khóa trái cửa phòng khách sạn nhịn đói suốt ngày cuối. (B09)
- **MN**: Nhưng đến giờ trả phòng, lễ tân chìa ra một tờ giấy khiến ông chết đứng. (B10)
- **MN**: Món phụ phí vô lý nào đã nuốt trọn số tiền cuối cùng của kẻ chặt chém? (S26)
- **MN**: Xem bản đầy đủ, link ngay bên dưới. (S06)

## Hình
Tái dùng: B02 + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Danh sách ảnh vẽ mới (16:9)
| Mã | Cảnh | Tình trạng v3 |
|---|---|---|
| B01 | Bãi biển đêm vắng, nhà hàng hải sản sát bãi đèn tắt dần, ông Thịnh đóng cửa | [v3 dùng] |
| B02 | Nhà hàng hải sản: bể ghẹ ngộp thở, không bảng giá; bản cuối dán bảng giá to đùng, khách đông | [v3 dùng] |
| B03 | Cận hóa đơn viết tay: con ghẹ 5 triệu, đĩa ốc 3 triệu | [v3 dùng] |
| B04 | Anh khách du lịch cận: áo phông, kính râm cài đầu, cầm hóa đơn sửng sốt | [v3 dùng] |
| B05 | Ông Thịnh cận: áo hoa, dây chuyền, bụng to; bản cãi ở quán nước; bản bến xe đói lả run rẩy | [v3 dùng] |
| B06 | Ảnh màu cũ: bà cụ nón lá gánh nồi ốc dọc bãi biển, trẻ con chạy theo | [v3 dùng] |
| B07 | Bà Tư mờ: nón lá, áo bà ba nâu, gánh nồi ốc bốc khói; ngồi bên cột đèn bến xe | [v3 dùng] |
| B08 | Cận cát ướt trước cửa nhà hàng: dấu đòn gánh, nồi ốc bốc hơi; bản ví ngập vỏ ốc ngậm cát | [v3 dùng] |
| B09 | Ông Thịnh và vợ kéo vali ở bãi biển khác; bản ngồi cố thủ trong phòng khách sạn | [v3 dùng] |
| B10 | Bộ khung: sạp dừa ven đường (bill 1 triệu), quán bún trong hẻm (bill 2 triệu), quầy lễ tân (bill 30 triệu) | [v3 dùng] |

## Lịch
- **LONG**: Thứ Năm 23/09 18:00 (+07).
- **7 Shorts**:
  - SH1 (TRỌN): Thứ Năm 23/09 19:00
  - SH2 (TRỌN): Thứ Sáu 24/09 11:30
  - SH3 (TRỌN): Thứ Sáu 24/09 19:00
  - SH4 (TRỌN): Thứ Bảy 25/09 11:30
  - SH5 (TRỌN): Thứ Bảy 25/09 19:00
  - SH6 (TRAILER): Chủ Nhật 26/09 11:30
  - SH7 (TRAILER): Chủ Nhật 26/09 19:00
- **Tập sau (P89)**: Thứ Hai 27/09 18:00 (+07).
