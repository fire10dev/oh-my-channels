# Dự án 73 — Tiễn vong "Ai tiễn ai" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá kịch tính**: đặt hạn chót 5 phút (nén hương phong thủy tàn / app ngân hàng đếm ngược mã OTP 30 triệu). Cái giá: Tâm mất sạch vốn liếng làm ăn cả năm, còn ông Cả bị gán mác ác vong và mất đường về thăm cháu.
- **3 nấc leo thang chủ động của con ma**: ông Cả lay ghế mây báo hiệu (bị thầy lợi dụng dọa thêm) → thổi tắt nén nhang (bị thầy phạt tăng lên 40 triệu) → nước liều dốc cạn linh lực đảo ngược nghi lễ.
- **Bỏ Ma Nó chen ngang báo trước**: Ma Nó chỉ giữ vai trò dẫn chuyện mở/kết; toàn bộ diễn biến kịch tính và tâm lý thuộc về ông Cả.
- **Điểm thấp nhất**: Tâm quỳ lạy cái ghế mây xin "ông tha cho cháu" khiến ông Cả nghẹn lòng đau đớn.
- **Cú lật do nhân vật chọn và trả giá**: ông Cả chấp nhận tiêu hao toàn bộ linh lực tích tụ cả năm tháng Bảy để ép thầy cúng giật lùi ra cổng sắt, cứu số tiền vốn của cháu.
- **Chuẩn hóa khuôn thoại**: rút gọn thoại LONG đạt đúng 585 chữ (chuẩn 3 phút dựng), bổ sung cấu trúc 5 Short TRỌN có PUNCH riêng trước câu chỉ link + 2 Short TRAILER (mỗi short 70–110 chữ).

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Liệu ông Cả có kịp ngăn đứa cháu trai chuyển ba mươi triệu tiền vốn cho tay thầy cúng bịp bợm trước khi nén hương phong thủy tàn?
- **Đồng hồ / Cái giá**: Nén hương cháy trong 5 phút kèm đồng hồ đếm ngược mã OTP chuyển khoản; trượt hạn thì Tâm phá sản vì mất sạch tiền vốn cuối cùng, còn ông Cả bị trục xuất khỏi ngôi nhà thân yêu.
- **3 nấc leo thang**:
  - *Nấc 1*: Rung mạnh ghế mây báo hiệu → Thất bại: Thầy Lợi chớp cơ hội dọa "vong độc nổi giận đòi bẻ cổ", ép Tâm mở app chuyển khoản.
  - *Nấc 2*: Thổi tắt ngúm đốm lửa trên nén nhang phong thủy → Thất bại: Thầy Lợi trơ trẽn phán "vong chống đối, tăng giá lên 40 triệu", Tâm sợ hãi bấm gửi mã OTP.
  - *Nấc 3 (Nước liều)*: Điểm thấp nhất khi thấy Tâm khóc van xin ông đừng quậy; ông Cả quyết định dốc cạn linh lực tháng Bảy, ghì chân thầy cúng ép giật lùi ra khỏi cổng.
- **Điểm thấp nhất**: Tâm quỳ sụp trước ghế mây trống, khóc xin vong ông nội tha cho mình vì đã cùng đường.
- **Cú lật (Ai chọn gì, trả giá gì)**: Ông Cả chọn dùng chính nghi thức "tiễn" của kẻ cúng thuê để tiễn ngược gã ra đường; trả giá bằng toàn bộ linh lực tích tụ cả năm (thân hình mờ nhạt, kiệt sức).
- **Khoảnh khắc rợn**: Khói nhang bị thổi ngược không bay lên trời mà chui tọt xuống khe gạch; con chó vàng chồm dậy sủa vang rồi vẫy đuôi mừng rỡ trước chiếc ghế mây kẽo kẹt không người.
- **Câu kết**: Tâm nhận ra nén hương cắm ngược đất, pha ấm trà sen đặt cạnh ghế mây. Châm biếm: "Làm ăn lụn bại do thị trường, chứ tại gì ông nội."

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (Host) | B02, S01, S26, S33, S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| CA | Ông Cả (Vong ông nội, kể chuyện) | V01 | Thiền Tâm Đức | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.4:40:0.2` |
| LOI | Thầy Lợi (Thầy cúng lừa đảo) | V03, V04, V05, V09 | Adam bựa | `atempo=1.05` |
| TAM | Anh Tâm (Cháu trai) | V06, V07 | Quốc Tuấn | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "CA": {"preset": "Thiền Tâm Đức", "fx": "asetrate=48000*0.95,aresample=48000,aecho=0.8:0.4:40:0.2"}, "LOI": {"preset": "Adam bựa", "fx": "atempo=1.05"}, "TAM": {"preset": "Quốc Tuấn", "fx": "anull"}}
```

## LONG (585 chữ, dựng ≈ 3:03)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | V01 | *(không lời, 2.0 s)* | "NGÀY 14 THÁNG BẢY" · kẽo kẹt · im |
| 0:02 | V01 | **CA**: Cái ghế mây của tôi. Mất mười năm rồi, tôi vẫn ngồi. | kẽo kẹt · pop "ÔNG CẢ" |
| 0:06 | V07 | **TAM**: Chuyển ba mươi triệu là nhà con hết bị ám thật chứ thầy? | ting |
| 0:10 | V04 | **LOI**: Chuyển ngay. Hương tàn trong năm phút. Không tiễn kịp, vong vật cho trắng tay. | "HẠN: 5 PHÚT" · bassdown · tick |
| 0:15 | S01 → S26 | **MN**: Lại mò vào à? Tháng Bảy đón ông bà về, kẻ xấu lại đòi tiễn đi. | "TIỄN VONG" · coc · braam |
| 0:20 | S34 | **MN**: Giá ba mươi triệu. Mà thằng cúng thuê chưa biết sắp đụng phải ai. | |
| 0:24 | V01 | **CA**: Tôi là ông Cả, ông nội thằng Tâm. Về trông cháu, chứ ám ai bao giờ. | "ÔNG NỘI" |
| 0:29 | V02 | **CA**: Con Vàng biết tôi. Chiều nào cũng nằm dưới chân ghế, ngoáy đuôi mừng. | duoi · ren |
| 0:33 | S26 | **MN**: Dân gian bảo: Người nhà về ai nỡ đuổi. Trừ kẻ thấy mùi tiền. | "NGƯỜI NHÀ VỀ THÌ AI NỠ ĐUỔI" |
| 0:37 | V03 | **CA**: Thằng Lợi đi khắp phố mùa này. Thấy ai buôn bán ế là xông vào dọa. | cong |
| 0:42 | V04 | **LOI**: Nhà có vong ám! Lụi bại tại cái ghế mây này! Ba mươi triệu, tiễn gấp! | "30 TRIỆU" |
| 0:47 | V06 → V07 | **CA**: Thằng Tâm thua lỗ cả năm, đang quẫn trí. Nó run rẩy mở app, gõ ba mươi triệu vốn cuối. | "VỐN CUỐI" · ting |
| 0:53 | V01 | **CA**: Nó mất tiền. Còn tôi mất đường về thăm cháu. | bassdown |
| 0:56 | V07 | **CA**: Năm phút đếm ngược chuyển khoản. Tôi không thể trơ mắt nhìn nó bị lừa. | "CÒN 5 PHÚT" · tick |
| 1:01 | V01 | **CA**: Tôi lay mạnh ghế mây. Kẽo kẹt. Nhắc thằng Tâm là ông đang ở đây. | keoket |
| 1:06 | V04 | **LOI**: Thấy chưa! Ghế tự rung! Vong nổi giận rồi! Chuyển tiền nhanh kẻo nó bẻ cổ! | "VONG NỔI GIẬN" |
| 1:11 | V07 | **TAM**: Dạ con chuyển ngay! Con sợ lắm rồi thầy ơi! | run |
| 1:14 | V01 | **CA**: Thất bại nấc đầu. Thằng bịp mượn tay tôi dọa thêm thằng cháu. | bassdown |
| 1:18 | V05 | **CA**: Còn hai phút. Thằng Lợi cắm nén hương phong thủy, lầm rầm khấn bậy. | "CÒN 2 PHÚT" · lamram · tick |
| 1:23 | V08 | **CA**: Tôi hít một hơi buốt lạnh, thổi tắt ngúm đốm lửa trên tàn hương. | gio · phu |
| 1:28 | V04 | **LOI**: Hương tắt giữa chừng! Điềm gở! Thêm mười triệu giải nghiệp! Bốn mươi triệu, chuyển ngay! | "TĂNG: 40 TRIỆU" · ting |
| 1:33 | V07 | **CA**: Nó trơ trẽn đòi thêm tiền, còn thằng cháu hoảng loạn bấm xác nhận. | |
| 1:38 | V07 | **TAM**: Ông ơi… nếu ông linh thiêng thì tha cho cháu… Cháu cùng đường rồi… | khoc · nhạc tắt |
| 1:43 | V01 | **CA**: Thằng bé quỳ sụp trước ghế mây, khóc nấc. Xin tôi tha cho nó. | nhạc tắt |
| 1:47 | V01 | **CA**: Mười năm làm ma, chưa khi nào tim tôi đau như lúc này. | nhạc tắt · im 1.5 s |
| 1:51 | V04 | **LOI**: Mã OTP gửi về rồi! Bấm xác nhận mau! | "MÃ OTP" · ting · tick |
| 1:54 | V01 | **CA**: Mười giây cuối. Tôi không hại người sống, nhưng luật tháng Bảy tôi thuộc làu. | "CÒN 10 GIÂY" · tick |
| 1:59 | V01 | **CA**: Mày thích tiễn vong à? Hôm nay để tao tiễn mày. | braam |
| 2:03 | V05 | **CA**: Tôi dốc sạch linh lực cả năm, ghì chặt bước chân thằng Lợi. | |
| 2:07 | V08 → V02 | **CA**: Tôi thổi ngược khói hương. Khói chui tọt xuống khe gạch. Con Vàng chồm dậy sủa vang. | "KHÓI CHUI XUỐNG ĐẤT" · sua · keoket |
| 2:12 | V04 | **LOI**: Ơ… chân tao… sao lại bước giật lùi thế này?! | "BƯỚC GIẬT LÙI" |
| 2:15 | V09 | **CA**: Miệng nó lầm rầm, tay rải gạo muối. Nhưng chân thụt lùi thoăn thoắt ra cổng. | buocchan · gao |
| 2:20 | V07 | **TAM**: Ủa thầy… đi đâu thế? App báo hết giờ chuyển tiền rồi! | "HẾT GIỜ" · ting |
| 2:24 | V09 | **CA**: Cổng sắt sập rầm. Thằng Lợi thấy mình đứng ngoài ngõ, tay ôm đĩa gạo muối. | "RẦM!" · congsat |
| 2:29 | V09 | **LOI**: Mở cửa ra! Trả tiền cọc cho tao! | dapcua |
| 2:32 | V01 | **CA**: Tôi ngồi bệt xuống ghế, bóng mờ tịt. Mất sạch linh lực, nhưng giữ được tiền cho cháu. Đáng. | "GIỮ ĐƯỢC 30 TRIỆU" |
| 2:38 | V07 | **TAM**: Nén hương cắm ngược… Suýt nữa mất sạch vốn làm ăn! Con cảm ơn ông… | "CẢM ƠN ÔNG" |
| 2:43 | V01 → V07 | **CA**: Nó pha ấm trà sen đặt cạnh ghế. Làm ăn lụn bại do thị trường, tại gì ông nội. | rotra · "DO THỊ TRƯỜNG" |
| 2:49 | S33 → S34 | **MN**: Thầy nào bảo nhà có vong, cứ hỏi: Vong ông tao hay bà tao? Ấp úng thì mời ra cổng. | dieucay |
| 2:55 | B02 | **MN**: Tập sau: tháng Bảy, một gã chuyên bẫy chim bán cho người ta phóng sinh. Thả xong lại bẫy. Đàn chim ấy… có con nhớ mặt. | "TẬP SAU" · whoosh |
| 3:03 | S06 | **MN**: Bấm đăng ký đi. Kẻo bị người nhà tiễn ra ngõ lúc nào không hay. | "ĐĂNG KÝ" · coc |

## SHORTS

### SH1 (TRỌN)
- **MN**: Tháng Bảy cửa âm mở, một thầy cúng đòi ba mươi triệu để tiễn vong ám nhà. (S26) · pop "TIỄN VONG"
- **CA**: Cái ghế mây của tôi. Mất mười năm rồi, tôi vẫn ngồi. (V01) · pop "ÔNG CẢ (VONG ÔNG NỘI)"
- **LOI**: Vong này dữ lắm! Không tiễn trước giờ Ngọ thì cả nhà mạt vận! (V04)
- **CA**: Tôi về thăm cháu chứ phá ai. Thằng này đòi đuổi tôi? (V01)
- **CA**: Mày thích tiễn vong à? Hôm nay để tao tiễn mày. (V08)
- **MN**: Người ta tiễn vong lấy tiền, còn ở đây vong tiễn thầy ra ngõ miễn phí. (S26) · pop "VONG TIỄN THẦY"
- *(không lời, 0.8 s)*
- **MN**: Muốn biết cụ tiễn kiểu gì, tao kể ở bản đầy đủ, link dưới. (S34)

### SH2 (TRỌN)
- **TAM**: Chuyển ba mươi triệu là nhà con hết bị ám thật chứ thầy? (V07) · pop "30 TRIỆU TIỀN VỐN"
- **LOI**: Chuyển ngay. Cây hương này tàn trong năm phút. Không tiễn kịp thì vong bẻ cổ! (V04)
- **CA**: Năm phút đếm ngược chuyển khoản. Tôi lay mạnh ghế mây báo hiệu cho cháu. (V01) · pop "ÔNG CẢ"
- **LOI**: Thấy chưa! Ghế tự rung! Vong nổi giận rồi, chuyển gấp! (V04)
- **CA**: Thằng bịp mượn tay tôi để dọa thằng cháu tôi tống tiền. (V01)
- **MN**: Định nhờ người âm diễn xiếc dọa người sống, thầy cúng sắp nhận kết đắng. (S34) · pop "DIỄN XIẾC DỌA NGƯỜI"
- *(không lời, 0.8 s)*
- **MN**: Cú lật cứu tiền cháu của ông Cả, tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 (TRAILER)
- **LOI**: Hương tắt giữa chừng! Điềm gở! Phải thêm mười triệu giải nghiệp! Bốn mươi triệu, chuyển ngay! (V04) · pop "TĂNG 40 TRIỆU"
- **TAM**: Ông ơi… nếu ông linh thiêng thì tha cho cháu… Cháu cùng đường rồi… (V07)
- **CA**: Tôi dốc sạch linh lực cả năm, ghì chặt lấy bước chân thằng Lợi. (V01) · pop "ÔNG CẢ"
- **CA**: Tôi thổi ngược khói hương. Khói không bay lên mà chui tọt xuống khe gạch. (V08) · pop "KHÓI CHUI XUỐNG ĐẤT"
- **LOI**: Ơ… chân tao… sao lại bước giật lùi thế này?! (V04)
- **MN**: Đôi chân thầy cúng sẽ đi về đâu khi nén hương tắt lịm? Bản đầy đủ, link dưới. (S34)

### SH4 (TRỌN)
- **LOI**: Mã OTP gửi về rồi! Bấm xác nhận mau kẻo hết giờ! (V04) · pop "MÃ OTP"
- **CA**: Mười giây cuối. Tôi không hại người sống, nhưng luật tháng Bảy tôi thuộc làu. (V01) · pop "ÔNG CẢ"
- **LOI**: Ơ… chân tao… sao lại bước giật lùi thế này?! (V04)
- **CA**: Miệng nó vẫn lầm rầm, tay vẫn rải gạo muối. Nhưng chân thì lùi thẳng ra cổng. (V09)
- **TAM**: Ủa thầy… đi đâu thế? App báo hết giờ chuyển tiền rồi! (V07) · pop "HẾT GIỜ"
- **MN**: Đi tiễn vong kiếm cơm ai dè bị vong tiễn ngược ra đường. (S34) · pop "BỊ TIỄN NGƯỢC"
- *(không lời, 0.8 s)*
- **MN**: Tay cầm đĩa gạo muối ngơ ngác thế nào, tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN)
- **CA**: Cổng sắt sập mạnh một tiếng rầm. Thằng Lợi chớp mắt thấy mình đứng ngoài ngõ. (V09) · pop "RẦM!"
- **LOI**: Mở cửa ra! Trả tiền cọc cho tao! Mở cửa! (V09)
- **TAM**: Nén hương cắm ngược… Suýt nữa con mất sạch vốn làm ăn! Con cảm ơn ông… (V07)
- **CA**: Nó pha ấm trà sen nóng đặt cạnh ghế mây. (V01) · pop "ÔNG CẢ"
- **MN**: Làm ăn lụn bại là do thị trường, chứ đổ thừa tại gì ông nội. (S26) · pop "DO THỊ TRƯỜNG"
- *(không lời, 0.8 s)*
- **MN**: Bài học giữ tiền tháng Bảy, tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 (TRAILER)
- **MN**: Một bên là ba mươi triệu tiền vốn cuối cùng. Một bên là vong ông nội mất mười năm. (S26)
- **TAM**: Năm phút đếm ngược mã OTP… Thầy ơi con run quá! (V07) · pop "ĐẾM NGƯỢC 5 PHÚT"
- **LOI**: Hương cháy gần hết rồi! Bấm xác nhận mau kẻo vong bẻ cổ! (V04)
- **CA**: Mày thích tiễn vong à? Hôm nay để tao tiễn mày. (V01) · pop "ÔNG CẢ"
- **CA**: Tôi thổi ngược khói hương chui thẳng xuống khe gạch. (V08)
- **MN**: Ai sẽ là người bị tống ra ngoài cổng sắt? Bản đầy đủ, link dưới. (S34)

### SH7 (TRỌN)
- **MN**: Sau vụ nhà anh Tâm, thầy Lợi nhận thêm ba mươi đám tiễn vong khắp phố. (S26)
- **LOI**: Ba mươi đám đặt cọc rồi! Sao nhà nào bước vào ba phút cũng văng ra cổng?! (V03) · pop "30 ĐÁM VĂNG CỔNG"
- **CA**: Tôi ngồi ghế mây nhắn với các cụ: Thầy Lợi đến thì tiễn giùm tôi. (V01) · pop "ÔNG CẢ"
- **MN**: Tháng Bảy cửa âm mở, tin đồn của các cụ lan còn nhanh hơn mạng năm Gê. (S33) · pop "NHANH HƠN MẠNG 5G"
- *(không lời, 0.8 s)*
- **MN**: Thầy nào bảo nhà có vong, cứ hỏi câu này. Tao kể ở bản đầy đủ, link dưới. (S06)

## Hình
Tận dụng: B02, B06, ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Danh sách hình vẽ mới (16:9)
| Mã | Cảnh | Tình trạng v3 |
|---|---|---|
| V01 | Phòng khách nhà phố: chiếc ghế mây cũ ở góc, cái đôn, con chó vàng nằm cạnh; bản ông Cả mờ ngồi ghế (áo nâu, quần đen, dép quai hậu), bản nhấp trà | Dùng (cảnh chính) |
| V02 | Cận con chó vàng ngồi dậy, quay về ghế mây trống, vẫy đuôi | Dùng |
| V03 | Thầy Lợi đứng ở cổng nhà người khác, áo the đỏ, túi đồ lễ; bản đứng ngoài cổng ngơ ngác, chủ nhà nhìn | Dùng |
| V04 | Thầy Lợi cận: áo the đỏ, khăn xếp đỏ, phán chắc; bản hoảng hốt | Dùng |
| V05 | Thầy Lợi rắc gạo muối, đọc lầm rầm, cắm nhang (không rõ nghi thức cụ thể) | Dùng |
| V06 | Anh Tâm mở cổng, thầy Lợi bước vào chỉ tay về ghế mây | Dùng |
| V07 | Anh Tâm cận ngập ngừng run sợ; bản thắp hương, đặt ấm trà cạnh ghế mây | Dùng |
| V08 | Cận nén nhang cắm trước ghế mây, khói chui ngược xuống len vào khe gạch | Dùng (khoảnh khắc rợn) |
| V09 | Thầy Lợi đứng ngoài cổng sắt đã đóng, tay cầm đĩa gạo muối, ngơ ngác | Dùng (cú lật) |

## Lịch
- LONG: Thứ Hai 02/08 18:00 (+07).
- SH1: Thứ Hai 02/08 19:00 (+07).
- SH2: Thứ Ba 03/08 11:30 (+07).
- SH3: Thứ Ba 03/08 19:00 (+07).
- SH4: Thứ Tư 04/08 11:30 (+07).
- SH5: Thứ Tư 04/08 19:00 (+07).
- SH6: Thứ Năm 05/08 11:30 (+07).
- SH7: Thứ Năm 05/08 19:00 (+07).
- Tập sau (P74): Thứ Năm 05/08 18:00 (+07).
