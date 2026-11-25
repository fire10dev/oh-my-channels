# Dự án 86 — Xuất hành "Đi đâu cũng về chỗ khách đợi" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá kịch tính**: hạn chót mười hai giờ trưa (chính Ngọ) ngày mười lăm; trượt hạn thì 50 cụ già nộp đơn tố cáo niêm phong toàn bộ tài sản, còn ông Bảy lỡ chuyến đi cuối cùng sang cõi âm và mất trắng tiền dưỡng già của bạn bè.
- **3 nấc leo thang chủ động**: Nấc 1 máy bay quốc tế cất cánh → thời tiết xấu quay đầu hạ cánh về đúng sân bay cũ; Nấc 2 bắt taxi ra ga tàu → xe chạy lòng vòng rồi dừng lại trước quán cà phê mái cam; Nấc 3 cướp xe máy phi vào mê cung đường làng → phanh cháy lốp ở ngõ cụt sương mù hóa thành bàn trà quán nước đối diện ông Bảy.
- **Điểm thấp nhất**: 11:45 trưa (còn 15 phút), Hưởng ngã quỵ bên chiếc xe máy chết máy, nhận ra không gian bị bẻ cong, mọi ngả đường đều dẫn về cái quán ấy, sắp hóa điên và công an sắp ập tới.
- **Cú lật do nhân vật CHỌN và TRẢ GIÁ**: Hưởng hiểu ra hợp đồng tour chưa hủy thì luật "về đến chốn" không bao giờ nhả; hắn CHỌN bấm điện thoại hoàn trả đủ hai tỷ cho 50 người để được đôi chân bước ra khỏi quán, chấp nhận trắng tay và đối mặt điều tra.
- **Cold open không lộ đáp án**: chỉ tiếng động cơ rù rì, lời thì thào ôm hai tỷ và bàn tay già nua đeo thẻ đoàn ngả vàng trên tay vịn; Ma Nó không báo trước cú lật.
- **Format chuẩn P04 v4**: LONG đúng 576 chữ thoại (khung 560–600 chữ, mốc thời gian ~3,2 chữ/giây, tổng ≈3:08), bảng phân cảnh có SFX/chữ, 5 Short trọn + 2 Short trailer (mỗi short 70–110 chữ lời), teaser P87 Thứ Hai.

---

## Xương sống kịch tính
- **Câu hỏi kịch tính trung tâm**: Kẻ lừa đảo xem ngày hoàng đạo để ôm tiền tour trốn ra nước ngoài, liệu có thể thoát được khi một vị khách đã khuất quyết tâm đưa nó "đi đến nơi về đến chốn"?
- **Đồng hồ + cái giá**: Mười hai giờ trưa ngày mười lăm. Nếu trượt hạn, Hưởng bị công an kinh tế tóm gọn vì khách nộp đơn; còn ông Bảy lỡ chuyến bay sang thế giới bên kia và 50 người bạn già mất trắng tiền mồ hôi nước mắt.
- **3 nấc leo thang chủ động**:
  1. Lên máy bay xuất ngoại một mình → thời tiết xấu quay đầu về đúng sân bay cũ, bên cạnh là ông Bảy hỏi thăm.
  2. Bắt taxi chạy trốn ra ga tàu → xe chạy nửa tiếng rồi dừng lại đúng vỉa hè quán cà phê mái cam.
  3. Cướp xe máy luồn lách ngõ ngách đường quê → ngõ cụt sương mù biến thành bàn trà của 50 vị khách.
- **Điểm thấp nhất**: 11:45 trưa, chỉ còn 15 phút, Hưởng kẹt cứng ở ngõ cụt sương mù, kiệt sức, nhận ra mình đang bị giam lỏng giữa cõi hư thực.
- **Cú lật (ai chọn gì, trả giá gì)**: Hưởng nhận ra "chốn" của kẻ bán tour gắn với hợp đồng của khách. Muốn giải lời nguyền "về đến chốn" trước 12:00, Hưởng phải CHỌN trả lại toàn bộ hai tỷ đồng. Cái giá: mất sạch tiền và đi tù, đổi lấy sự sống. Ông Bảy giữ đúng luật: đủ tiền thì đi thật.
- **Khoảnh khắc rợn duy nhất**: Ba mươi phút sau khi cất cánh, máy bay hạ thấp xuống đúng sân bay cũ, quán cà phê mái cam hiện rõ dưới cánh bay, và ông cụ ghế bên đeo thẻ đoàn ngả vàng quay sang mỉm cười: "Đến nơi rồi cháu."
- **Câu kết**: Hưởng đi tù nhưng hoàn tiền nên nhẹ tội, sau này đi đâu cũng xem ngày đại hung; ông Bảy bay vào hoàng hôn; Ma Nó chốt: "Ngày tốt không phải để trốn, ngày tốt là để về."

---

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| HUONG | Hưởng, giám đốc lừa đảo | X01, X04, X07, X10, X11 | Adam bựa | `atempo=1.05` |
| BAY | Ông Bảy, khách đã mất | X07, X08, X09 | Thiền Tâm Đức | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:40:0.2` |
| KHACH | Bà Hoa, khách trong đoàn | X05, X07 | Ngọc Huyền | `atempo=1.02` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "HUONG": {"preset": "Adam bựa", "fx": "atempo=1.05"}, "BAY": {"preset": "Thiền Tâm Đức", "fx": "asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:40:0.2"}, "KHACH": {"preset": "Ngọc Huyền", "fx": "atempo=1.02"}}
```

---

## LONG (576 chữ thoại, dựng ≈ 3:08)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | X01 | *(không lời, 2.5 s)* | tiếng động cơ máy bay rù rì · mây mờ |
| 0:02 | X01 | **HUONG**: Cuối cùng cũng bay rồi. Hai tỷ này… là của tao. | "KHOANG MÁY BAY · 10:00 SÁNG" · thở phào |
| 0:06 | X09 | **BAY**: Đi xa thế này… chắc đến nơi đúng giờ cháu nhỉ? | mõ CỘC nhẹ |
| 0:10 | S01 | **MN**: Lại mò vào à? Đi xa nhà mày có xem ngày không? | mõ CỘC · braam |
| 0:14 | S26 | **MN**: Có thằng giám đốc xem ngày rất kỹ, chọn đúng ngày đại cát ôm tiền tour trốn. | "NGÀY ĐẠI CÁT" |
| 0:19 | S34 | **MN**: Tính hết đường, chỉ không ngờ ngày tốt quá đi đâu cũng về đúng chỗ. | bassdown |
| 0:24 | X03 | **MN**: Hưởng bán tour châu Âu giá một nửa, năm mươi cụ già gom tiền dưỡng già nộp hết. | "TOUR CHÂU ÂU · GIÁ 1/2" · ting |
| 0:30 | X04 | **HUONG**: Các bác cứ yên tâm! Đúng mười hai giờ trưa bay, không đi em đền gấp đôi! | "HẠN CHÓT: 12:00 TRƯA" |
| 0:35 | X05 | **KHACH**: Cả đời tôi chưa đi máy bay, tiền mừng thọ đấy chú. |  |
| 0:39 | X06 | **MN**: Miệng hứa đền gấp đôi, tay Hưởng lật lịch chọn ngày đại cát để chuồn đúng giờ khách đợi. | "LẬT LỊCH VẠN NIÊN" · lật giấy |
| 0:45 | X06 | **HUONG**: Xuất hành ngày đại cát: đi đến nơi về đến chốn. Thầy phán cấm có sai! | "ĐI ĐẾN NƠI · VỀ ĐẾN CHỐN" |
| 0:50 | X07 | **MN**: Chín giờ sáng, năm mươi khách đợi ở quán cà phê mái cam, điện thoại Hưởng tắt ngúm. | "9:00 SÁNG" · "QUÁN CÀ PHÊ MÁI CAM" · quán ồn |
| 0:56 | X08 | **MN**: Trong đoàn có ông Bảy, thẻ đoàn ngả vàng. Mất tháng trước, nhưng vé đã mua thì hồn vẫn đến. | "ÔNG BẢY" · "THẺ ĐOÀN ĐỜI 90" |
| 1:02 | X08 | **BAY**: Tôi già rồi không đi cũng được, nhưng tiền của mấy bà này một xu không thể mất. |  |
| 1:08 | X01 | **MN**: Mười giờ sáng, Hưởng ung dung ngồi khoang thương gia, vali chật ních tiền. | "10:00 SÁNG" · "XUẤT CẢNH" |
| 1:12 | X01 | **HUONG**: Tạm biệt lũ già ngây thơ. Sang bên kia tao đổi đời! | cười khẩy |
| 1:16 | X02 | **MN**: Bay ba mươi phút, loa cơ trưởng rè rè: Thời tiết xấu, máy bay quay đầu. | loa rè · "MÁY BAY QUAY ĐẦU" · nhạc tắt |
| 1:21 | X02 | **MN**: Máy bay hạ xuống, nhìn qua ô kính vẫn đúng sân bay ấy, đúng quán mái cam. | "MÁI CAM QUEN THUỘC" · im bặt |
| 1:26 | X11 | **HUONG**: Quái lạ… Sao lại quay về chỗ này? | tim đập |
| 1:29 | X09 | **BAY**: Đến nơi rồi cháu. Năm mươi người đang đợi cháu dưới kia kìa. | "ĐẾN NƠI RỒI CHÁU" · rợn |
| 1:33 | X04 | **MN**: Vừa chạm đất, Hưởng kéo vali lao ra sảnh vẫy vội chiếc taxi. | "NẤC 2: TAXI" · vali lạch cạch |
| 1:37 | X04 | **HUONG**: Cho ra ga tàu! Đi đường tránh, chạy nhanh tôi trả gấp ba! | cửa xe đóng |
| 1:41 | X07 | **MN**: Xe phanh kít, Hưởng đạp cửa xuống lại thấy quán cà phê ấy, năm mươi khách ngẩng lên nhìn. | phanh kít · "50 CẶP MẮT" |
| 1:47 | X07 | **KHACH**: Kìa chú Hưởng! Chú đi đâu làm cả đoàn đợi sốt cả ruột! |  |
| 1:51 | X04 | **HUONG**: Rõ ràng là có ma trêu tao! | "MA TRÊU" |
| 1:54 | X10 | **MN**: Hưởng vứt vali, cướp xe máy người giao hàng, rồ ga lao vào đường làng trốn về quê. | "NẤC 3: XE MÁY" · tiếng rú ga |
| 2:00 | X10 | **MN**: Rẽ ngõ nào cũng gặp sương mù. Mười một giờ bốn lăm, còn đúng mười lăm phút. | "11:45" · "CÒN 15 PHÚT" · tick |
| 2:05 | X10 | **HUONG**: Tao không thể chết dí ở đây! Tránh đường ra! | hét lớn |
| 2:08 | X08 | **MN**: Phanh cháy lốp trước ngõ cụt, sương tan ra lại là bàn trà ông Bảy ung dung ngồi. | phanh cháy đường · sương tan |
| 2:14 | X08 | **BAY**: Thầy bảo ngày đại cát đi đến nơi về đến chốn. Chốn của cháu ở đây, nợ chưa trả thì bước thế nào được? | "CHỐN CỦA CHÁU Ở ĐÂY" · bassdown |
| 2:22 | X04 | **HUONG**: Cháu lạy ông… Cháu hoàn tiền! Cháu trả lại hết ngay bây giờ! | "CÚ LẬT: HOÀN TIỀN" |
| 2:26 | X07 | **MN**: Hưởng ngồi bệt run rẩy chuyển khoản. Đúng mười hai giờ trưa, năm mươi tiếng ting ting nổ vang, tiền về đủ. | "12:00 TRƯA" · ting liên hoàn |
| 2:33 | X05 | **KHACH**: Tiền về tài khoản rồi! Cảm ơn chú Hưởng nhé! |  |
| 2:36 | X08 | **BAY**: Tiền về túi rồi. Giờ tôi đi du lịch đây. Lần này đi thật. | "LẦN NÀY ĐI THẬT" |
| 2:41 | X02 | **MN**: Chiếc máy bay cất cánh bay thẳng vào hoàng hôn, không quay lại nữa. | tiếng máy bay xa dần |
| 2:45 | X03 | **MN**: Hưởng bị điều tra, hoàn đủ tiền nên nhẹ tội. Giờ đi đâu cũng xem ngày, nhưng chọn ngày hung. | "XEM NGÀY HUNG" |
| 2:51 | S33 → S34 | **MN**: Mua tour giá rẻ nhớ hỏi xem nửa kia đi đâu. Còn ai định trốn thì nhớ: ngày tốt là để về. | rít điếu cày |
| 2:58 | S26 | **MN**: Tập sau: lò luyện thi ép học sinh học đêm. Trường cũ có hồi trống… rất đúng giờ. | "TẬP SAU" · tùng tùng tùng |
| 3:04 | S06 | **MN**: Bấm đăng ký đi. Đi đến nơi, về đến chốn. | "ĐĂNG KÝ" · mõ CỘC |

---

## SHORTS

### SH1 (TRỌN)
- **MN**: Hồ sơ xuất hành: chọn ngày đại cát để ôm tiền trốn, đi đâu cũng về chỗ cũ. (S01) · pop "HỒ SƠ XUẤT HÀNH"
- **HUONG**: Xuất hành ngày đại cát: đi đến nơi về đến chốn. Thầy phán cấm có sai! (X04) · pop "NGÀY ĐẠI CÁT"
- **MN**: Đi máy bay, máy bay quay đầu. Đi taxi, taxi về chỗ cũ. Phi xe máy vào đường làng, lại đâm sầm vào ông Bảy. (X10) · pop "3 LẦN BỊ KÉO VỀ"
- **BAY**: Chốn của cháu ở đây, nợ chưa trả bước sao nổi? (X08) · pop "ÔNG BẢY"
- *(không lời, 0.8 s)* (X07) · pop "PUNCH: CHỐN CỦA MÀY Ở ĐÂY"
- **MN**: Thầy bói không sai, chỉ có thằng lừa đảo hiểu sai. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH2 (TRỌN)
- **HUONG**: Các bác cứ yên tâm! Đúng mười hai giờ trưa bay, không đi em đền gấp đôi! (X04) · pop "TOUR NỬA GIÁ"
- **KHACH**: Cả đời tôi chưa đi máy bay, tiền mừng thọ đấy chú. (X05) · pop "50 KHÁCH ĐỢI"
- **MN**: Năm mươi cụ gom tiền dưỡng già nộp sạch. Đến giờ bay, giám đốc biến mất. (X07) · pop "GIÁM ĐỐC BIẾN MẤT"
- **BAY**: Tôi già rồi không đi cũng được, nhưng tiền của mấy bà này một xu không thể mất. (X08) · pop "ÔNG BẢY"
- **MN**: Ông Bảy mất tháng trước, vé mua rồi nên hồn vẫn lên máy bay ngồi cạnh thằng lừa đảo đòi nợ. (X09) · pop "ĐÒI NỢ TRÊN MÂY"
- *(không lời, 0.8 s)* (X09) · pop "PUNCH: CHẠY ĐẰNG TRỜI"
- **MN**: Thằng lừa đảo tưởng bay thoát, ai ngờ bay cùng chủ nợ. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 (TRAILER)
- *(không lời, 2.0 s)* (X01) · pop "30 PHÚT TRÊN TRỜI"
- **HUONG**: Cuối cùng cũng bay rồi. Hai tỷ này… là của tao. (X01) · pop "ÔM 2 TỶ XUẤT NGOẠI"
- **MN**: Mười giờ sáng, máy bay cất cánh bay vào mây mờ. Hưởng thở phào vì đã trốn êm đẹp. (X01)
- **MN**: Ba mươi phút sau, loa cơ trưởng rè rè báo thời tiết xấu, máy bay quay đầu. (X02) · pop "MÁY BAY QUAY ĐẦU"
- **MN**: Nhìn qua cửa sổ, bên dưới vẫn là cái sân bay ấy, vẫn cái quán cà phê năm mươi người đang ngồi. (X02)
- **HUONG**: Quái lạ… Sao lại quay về chỗ này? (X11)
- **BAY**: Đến nơi rồi cháu. Năm mươi người đang đợi cháu dưới kia kìa. (X09) · pop "ÔNG BẢY"
- **MN**: Ông cụ ngồi cạnh là ai? Bản đầy đủ, link dưới. (S34)

### SH4 (TRỌN)
- **MN**: Ba lần trốn của thằng giám đốc lừa tour. (S01) · pop "3 LẦN TRỐN"
- **MN**: Lần một: Đi máy bay quốc tế. Ba mươi phút sau máy bay quay đầu hạ cánh đúng chỗ cũ. (X02) · pop "LẦN 1: MÁY BAY QUAY ĐẦU"
- **MN**: Lần hai: Vẫy taxi chạy ra ga tàu. Bác tài đạp phanh, cửa mở ra lại là cái quán cà phê ấy. (X07) · pop "LẦN 2: TAXI VỀ CHỖ CŨ"
- **HUONG**: Rõ ràng là có ma trêu tao! (X04)
- **MN**: Lần ba: Cướp xe máy phi vào đường làng, rẽ ngõ nào cũng đâm thẳng vào bàn trà của ông Bảy. (X10) · pop "LẦN 3: XE MÁY ĐÂM VÀO QUÁN"
- **BAY**: Chốn của cháu ở đây, nợ chưa trả thì bước thế nào được? (X08) · pop "ÔNG BẢY"
- *(không lời, 0.8 s)* (X08) · pop "PUNCH: HẾT ĐƯỜNG TRỐN"
- **MN**: Ngày hoàng đạo bẻ cong mọi con đường. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRAILER)
- **MN**: Hạn chót mười hai giờ trưa. Không thoát được là mất trắng. (S01) · pop "HẠN CHÓT: 12:00 TRƯA"
- **MN**: Thằng Hưởng xem ngày đại cát ôm hai tỷ trốn, nhưng đi đường nào cũng bị kéo ngược về chỗ khách đợi. (X06)
- **HUONG**: Cho ra ga tàu! Đi đường tránh, chạy nhanh tôi trả gấp ba! (X04)
- **MN**: Mười một giờ bốn mươi lăm. Chỉ còn đúng mười lăm phút. (X10) · pop "CÒN 15 PHÚT"
- **HUONG**: Tao không thể chết dí ở đây! Tránh đường ra! (X10)
- **MN**: Nó rồ ga phóng bạt mạng qua màn sương mù dày đặc. Phía sau bức tường ngõ cụt kia… đang chờ nó là thứ gì? (X10)
- **MN**: Đáp án có ở bản đầy đủ, link ngay dưới. (S34)

### SH6 (TRỌN)
- **MN**: Cách duy nhất để thoát khỏi ma dẫn đường: trả lại tiền. (S01) · pop "TRẢ TIỀN ĐỂ THOÁT"
- **MN**: Hưởng ôm hai tỷ trốn chạy, nhưng đi đâu cũng bị kéo về trước mặt năm mươi nạn nhân. (X07)
- **BAY**: Chốn của cháu ở đây, nợ chưa trả thì bước thế nào được? (X08) · pop "ÔNG BẢY"
- **HUONG**: Cháu lạy ông… Cháu hoàn tiền! Cháu trả hết ngay bây giờ! (X04) · pop "HOÀN TIỀN"
- **MN**: Đúng mười hai giờ trưa, năm mươi tiếng ting ting nổ vang, tiền về đủ từng xu. (X07)
- **BAY**: Tiền về túi rồi. Giờ tôi đi du lịch đây. Lần này đi thật. (X08)
- *(không lời, 0.8 s)* (X02) · pop "PUNCH: LẦN NÀY ĐI THẬT"
- **MN**: Tiền trả xong đường mới mở. Tao kể ở bản đầy đủ, link dưới. (S33)

### SH7 (TRỌN)
- **HUONG**: Xuất hành ngày đại cát: đi đến nơi về đến chốn. Thầy phán cấm có sai! (X06) · pop "XUẤT HÀNH ĐẠI CÁT"
- **MN**: Đi lừa đảo mà cũng bày đặt xem ngày xuất hành. (S26)
- **MN**: Người ta xem ngày để đi làm ăn, nó xem ngày để ôm tiền trốn. (X03)
- **MN**: Kết quả: bốn lần trốn, bốn lần bị kéo về đúng chỗ năm mươi khách ngồi chờ. (X07) · pop "ĐI ĐÂU CŨNG VỀ CHỐN CŨ"
- **MN**: Hoàn đủ hai tỷ xong thì công an vào cuộc. Giờ đi đâu cũng xem ngày, nhưng phải chọn ngày đại hung. (X03) · pop "CHỌN NGÀY HUNG"
- **MN**: Nhớ lấy: ngày tốt không phải để trốn. Ngày tốt là để về. (S34)
- *(không lời, 0.8 s)* (S34) · pop "PUNCH: NGÀY TỐT ĐỂ VỀ"
- **MN**: Đừng để ma phải dẫn đường về. Tao kể ở bản đầy đủ, link dưới. (S06)

---

## Hình
Tái dùng: B02 + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Vẽ mới: 11 ảnh (16:9)
- [x] **X01**: Khoang máy bay, Hưởng ngồi ghế cửa sổ, vest, kính râm, thở phào
- [x] **X02**: Cửa sổ máy bay nhìn xuống: sân bay, mái che quán cà phê màu cam; bản sân bay nhỏ dần; bản máy bay bay xa vào hoàng hôn
- [x] **X03**: Văn phòng du lịch: poster châu Âu, khách xếp hàng đóng tiền, nhiều ông bà cụ; bản dán niêm phong
- [x] **X04**: Hưởng cận: vest, vali kéo, cười chào bán; bản chạy; bản ngồi bệt mở điện thoại
- [x] **X05**: Bà Hoa cận: ôm hộ chiếu mới; bản nhận tiền, nhìn quanh
- [x] **X06**: Cận lịch vạn niên, ngón tay khoanh một ngày (trống chữ)
- [x] **X07**: Quán cà phê sân bay mái che cam, năm mươi khách với vali ngồi chờ; bản Hưởng kéo vali vào, khách ngẩng lên
- [x] **X08**: Ông Bảy mờ: sơ mi trắng cũ, mũ lưỡi trai đoàn, thẻ đoàn ngả vàng, ba lô nhỏ; ngồi giữa đoàn / đứng dậy khoác ba lô
- [x] **X09**: Ghế bên Hưởng trên máy bay: ông cụ đeo thẻ đoàn ngả vàng quay sang hỏi
- [x] **X10**: Hưởng chạy xe máy rẽ vào ngõ, cuối ngõ lại là quán cà phê mái cam, năm mươi người
- [x] **X11**: Cực cận mặt Hưởng áp vào cửa sổ máy bay, mắt trợn, mồ hôi, phản chiếu sân bay bên dưới

---

## Lịch
- **LONG**: Thứ Năm 16/09 18:00 (+07)
- **SH1**: Thứ Năm 16/09 19:00 (+07)
- **SH2**: Thứ Sáu 17/09 11:30 (+07)
- **SH3**: Thứ Sáu 17/09 19:00 (+07)
- **SH4**: Thứ Bảy 18/09 11:30 (+07)
- **SH5**: Thứ Bảy 18/09 19:00 (+07)
- **SH6**: Chủ Nhật 19/09 11:30 (+07)
- **SH7**: Chủ Nhật 19/09 19:00 (+07)
