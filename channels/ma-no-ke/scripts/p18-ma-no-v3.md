# Dự án 18 — Ma đòi nợ “Ba bát phở” (v3, 2026-11-24)

- Rút LONG còn khoảng 560–600 chữ thoại, giữ nguyên trục câu chuyện và các chi tiết không bị góp ý.
- Đưa các mốc LONG về khoảng 3:00–3:15 theo nhịp 3,2 chữ/giây.
- Bỏ mã ảnh B07 ngoài danh sách; dùng S33 và S34 cho teaser tập sau.
- Mở rộng 7 Shorts lên 70–110 chữ, thêm punch riêng cho TRỌN và giữ câu kết chỉ link.
- Thêm khoảng lặng 0,8 giây cho TRỌN; giữ TRAILER cắt trước đáp án.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Bảo có chịu trả món nợ ba bát phở trước khi tiếng tăm của hắn sụp đổ không?
- **Đồng hồ / cái giá:** Trước bình minh ngày thứ bảy, Bảo phải giao đủ bát phở tới những cửa từng bị hắn tạt sơn. Nếu trượt hạn, tin nhắn bêu tên tiếp tục lan trong danh bạ và cái uy khiến con nợ trả tiền của hắn biến mất.
- **Ba nấc leo thang:** Ông Tư gõ cửa đòi ba bát, Bảo chối; tính lãi theo luật của Bảo, Bảo cười nhạo con số; dùng phần mềm nhắn tin của Bảo gửi lời đòi nợ tới danh bạ, Bảo vẫn định bỏ mặc.
- **Điểm thấp:** Đàn em bỏ, con nợ cười, mẹ và người yêu biết chuyện. Bảo vẫn tin rằng cứ đóng cửa là hết.
- **Cú lật:** Ông Tư tự chọn đổi khoản nợ thành phở: Bảo phải nấu và gánh đủ bát tới từng cửa từng bị tạt sơn. Ông Tư chấp nhận tiếp tục lảng vảng, kiểm tra từng bát.
- **Khoảnh khắc rợn:** Lúc hai giờ sáng, tiếng gõ phở vang ngoài cổng nhưng camera không thấy ai. Sáng ra, ba cái bát sứ hoa lam còn ấm nằm trên bậc cửa.
- **Câu kết:** Bảo vẫn cay cú, nhưng bát nào nấu ẩu thì sáng lại nằm ở cửa nhà hắn.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| BAO | Bảo “Sơn” | N02, N10 | Adam bựa | `atempo=1.05` |
| TU | Ông Tư phở gánh | N03, N05 | Thiền Tâm Đức | `atempo=0.90,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25` |
| ME | Mẹ Bảo | Không hình | Ngọc Huyền | `asetrate=48000*0.98,aresample=48000,aecho=0.8:0.4:30:0.15` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"BAO":{"preset":"Adam bựa","fx":"atempo=1.05"},"TU":{"preset":"Thiền Tâm Đức","fx":"atempo=0.90,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25"},"ME":{"preset":"Ngọc Huyền","fx":"asetrate=48000*0.98,aresample=48000,aecho=0.8:0.4:30:0.15"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | N01 | *(không lời, 2 s)* | cộc cộc · cộc cộc · nhạc tắt |
| 0:02 | N02 | **BAO**: Ai gõ đấy? Camera đâu? | cộc cộc |
| 0:05 | N01 | **TU**: Thằng Ba. Phở ba bát. Bảy mươi năm rồi. | mõ CỘC nhẹ |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Khách hôm nay nợ ba bát phở suốt bảy mươi năm. Giờ chủ nợ tìm tới tận nhà. | mõ CỘC |
| 0:18 | S34 | **MN**: Mà ông ta không đòi tiền. |  |
| 0:21 | N04 | **MN**: Bảo “Sơn” cho vay nhanh, ba mươi phần trăm một tháng. Chậm trả thì cửa dính sơn xanh. | xịt sơn · xe máy rồ ga |
| 0:28 | N02 | **BAO**: Chậm một tuần, sơn cửa. Chậm một tháng, bấm nút. Cả danh bạ nó nhận tin: “Đứa này quỵt tiền.” | click chuột · “30% / THÁNG” |
| 0:36 | S26 | **MN**: Bảo gọi đấy là quy trình. Hai trăm mười bốn cánh cửa gọi đấy là ác mộng. | “214 CỬA” |
| 0:43 | N05 | **MN**: Bảy mươi năm trước, ngõ phố Hà Nội. Ông Tư gánh phở gõ, có thằng Ba ăn khỏe, nói ngọt. | gõ phở · nồi sôi |
| 0:51 | N03 | **TU**: Nó ăn ba bát, vỗ vai tao: “Mai cháu trả.” Mai ấy kéo dài bảy mươi năm. |  |
| 0:58 | S26 | **MN**: Dân gian bảo, chủ nợ chưa đòi được thì còn lảng vảng. Thằng Ba đầu thai thành Bảo “Sơn”. | “KIẾP TRƯỚC: THẰNG BA” |
| 1:08 | N01 | **MN**: Hai giờ sáng. Tiếng gõ phở ngoài cổng biệt thự. | cộc cộc · cộc cộc |
| 1:13 | N02 | **MN**: Camera không thấy ai. Mùi hồi quế bay vào tận phòng ngủ. | nhạc tắt |
| 1:19 | N06 | **MN**: Sáng ra, ba cái bát sứ hoa lam chồng trên bậc cửa. Đáy bát còn ấm. | im lặng 2 s |
| 1:27 | N03 | **TU**: Ba bát, năm ấy ba hào. Tao không lấy giá cũ. Tao lấy lãi như mày lấy. |  |
| 1:35 | N07 | **TU**: Ba mươi phần trăm một tháng. Lãi nhập gốc. Tám trăm bốn mươi tháng. | máy tính bấm loạn |
| 1:42 | S26 | **MN**: Tao bấm thử. Máy báo lỗi. Con số dài hơn bức tường nhà Bảo. | “LỖI: SỐ QUÁ LỚN” |
| 1:49 | N02 | **BAO**: Ma đòi nợ thì làm gì được tao? Ra tòa à? |  |
| 1:54 | N03 | **TU**: Tao không ra tòa. Tao làm như mày. |  |
| 1:58 | S26 | **MN**: Bước một: đòi ba bát. Bảo chối. Bước hai: tính lãi. Bảo cười. | “BƯỚC 1: CHỐI” · “BƯỚC 2: CƯỜI” |
| 2:05 | N02 | **BAO**: Ông già, ba bát phở mà đòi lãi như mua cả phố à? |  |
| 2:10 | N03 | **TU**: Mày nói lãi mẹ đẻ lãi con. Tao chỉ nghe lời. |  |
| 2:15 | N08 | **MN**: Bước ba. Bảy giờ sáng, máy tính của Bảo tự bật. Phần mềm nhắn tin tự chạy. Lần này, danh bạ là của Bảo. | click · chuông tin nhắn dồn dập |
| 2:25 | N08 | **MN**: Mẹ, người yêu, đàn em, con nợ. Ai cũng nhận ảnh ba cái bát và tiếng gõ phở. | gõ phở · chuông dồn dập |
| 2:33 | N08 | **ME**: Bảo ơi, con nợ tiền phở ai mà người ta nhắn cả cho mẹ thế? | lọc điện thoại |
| 2:40 | N09 | **MN**: Đàn em đọc. Người yêu đọc. Hai trăm mười bốn con nợ cũng đọc. Trùm đòi nợ… quỵt tiền phở. |  |
| 2:50 | N09 | **MN**: Đàn em nghỉ. Con nợ cười. Cái uy của Bảo rơi nhanh hơn tin nhắn khuyến mãi. | điện thoại rung |
| 2:58 | N02 | **BAO**: Ông muốn gì? Nhà cháu đây, ông lấy! |  |
| 3:03 | N03 | **TU**: Tao lấy nhà làm gì. Trả bằng phở. Mày sơn bao nhiêu cửa, nấu bấy nhiêu bát. Tự gánh đến. | “214 CỬA = 214 BÁT” |
| 3:12 | N02 | **BAO**: Tôi không làm thì sao? Cái danh bạ kia nhắn mãi được chắc? |  |
| 3:18 | S26 | **MN**: Bảo tưởng đóng cửa là xong. Ông Tư chẳng cần giữ cửa. Chỉ cần còn ba bát chưa trả. | nhạc lắng |
| 3:26 | N03 | **TU**: Trước bình minh ngày thứ bảy. Đủ bát. Từng cửa. | “HẠN: BÌNH MINH NGÀY THỨ BẢY” · tick |
| 3:33 | N10 | **MN**: Bảo học nấu phở. Đêm nào cũng gánh qua ngõ, miệng chửi, tay bưng. | gõ phở · nồi sôi |
| 3:41 | N02 | **BAO**: Hai trăm mười bốn bát. Còn một trăm chín mươi. Ông già này dai hơn tao. |  |
| 3:48 | N10 | **MN**: Đến cửa thứ mười bảy, hắn đặt gánh xuống. Cửa kế tiếp còn vệt sơn khô. Hạn thì gần. Hắn quay đầu về nhà. | nhạc tắt · bước chân |
| 3:58 | N01 | **MN**: Hai giờ sáng. Cộc cộc. Cộc cộc. Camera vẫn trống. | cộc cộc · nhạc tắt |
| 4:04 | N06 | **MN**: Sáng ra, ba bát hoa lam nằm lại trên bậc cửa. Còn ấm. Hắn đã bỏ cuộc. | im lặng 2 s |
| 4:12 | N03 | **TU**: Thằng Ba, mày ăn chịu thêm à? |  |
| 4:16 | N02 | **BAO**: Tôi đi. Tôi đi hết. Đừng để bát ở cửa nữa. |  |
| 4:21 | N10 | **MN**: Bảo chọn gánh tiếp. Ông Tư chọn ở lại mà kiểm tra. Một người mất cái uy; một người chịu đói thêm mấy đêm. | “CÒN 197 BÁT” |
| 4:30 | N10 | **MN**: Đêm thứ sáu, hắn giao bát cuối trước bình minh. Bảo không tử tế hơn. Hắn chỉ muốn hết tiếng gõ. | gõ phở · nhạc nhấc |
| 4:39 | N06 | **MN**: Bát nào nấu ẩu, sáng ra nằm trên bậc cửa nhà Bảo. Nấu lại. Đòi nợ cũng phải kiên nhẫn. | cộc cộc |
| 4:48 | S33 → S34 | **MN**: Ai đang nợ thì trả đi. Ai đang đòi thì đòi cho tử tế. Bảy mươi năm sau, biết đâu đến lượt mày gánh. | rít điếu cày |
| 4:59 | S33 → S34 | **MN**: Tập sau: dịch vụ bao sái bàn thờ giá cắt cổ. Thợ để ý cái đỉnh đồng. Và có kẻ khác cũng đang để ý. | “TẬP SAU” · whoosh |
| 5:09 | S06 | **MN**: Bấm đăng ký đi. Không mất tiền, không tính lãi. Còn lỡ quên, tao cộng vào tập sau. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN: Phở ba bát, bảy mươi năm

- **TU**: Thằng Ba. Phở ba bát. Bảy mươi năm rồi. (N01) · pop “ÔNG TƯ”
- **BAO**: Ai gõ đấy? Camera đâu? (N02)
- **TU**: Nó ăn ba bát, vỗ vai tao: “Mai cháu trả.” Mai ấy kéo dài bảy mươi năm. (N03)
- **MN**: Một câu “mai trả”, bảy mươi năm chưa xong. (S26)
- **MN**: Bảy mươi năm, ba bát phở vẫn chạy nhanh hơn lịch sử thu nợ. (S33)
- **MN**: Tiền thì mất giá, còn cái hẹn “mai” của thằng Ba biết tự sinh lãi. (S26)
- *(không lời, 0.8 s)* (S34)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN: Quy trình ba mươi phần trăm

- **MN**: Bảo “Sơn” cho vay nhanh, ba mươi phần trăm một tháng. Chậm trả thì cửa dính sơn xanh. (N04)
- **BAO**: Chậm một tuần, sơn cửa. Chậm một tháng, bấm nút. Cả danh bạ nó nhận tin: “Đứa này quỵt tiền.” (N02)
- **MN**: Bảo gọi đấy là quy trình. Hai trăm mười bốn cánh cửa gọi đấy là ác mộng. (S26)
- **MN**: Ở đời, lãi kép nghe rất hay cho tới khi người tính lãi bị tính ngược. (S33)
- *(không lời, 0.8 s)* (S34)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN: Ba bát còn ấm

- **MN**: Hai giờ sáng. Tiếng gõ phở ngoài cổng biệt thự. (N01)
- **MN**: Camera không thấy ai. Mùi hồi quế bay vào tận phòng ngủ. (N02)
- **MN**: Sáng ra, ba cái bát sứ hoa lam chồng trên bậc cửa. Đáy bát còn ấm. (N06)
- **MN**: Camera ghi được cổng, đèn, con chó nhà hàng xóm. Riêng chủ nợ thì nghỉ phép đúng lúc. (S26)
- **MN**: Cổng khóa, camera chạy, mà bát phở vẫn tìm đúng địa chỉ. (N01)
- **MN**: Nhà có camera, có khi chỉ để biết mình bị ai làm phiền. (S33)
- *(không lời, 0.8 s)* (N06)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN: Máy tính báo lỗi

- **TU**: Ba mươi phần trăm một tháng. Lãi nhập gốc. Tám trăm bốn mươi tháng. (N07) · pop “ÔNG TƯ”
- **MN**: Tao bấm thử. Máy báo lỗi. Con số dài hơn bức tường nhà Bảo. (S26)
- **BAO**: Ma đòi nợ thì làm gì được tao? Ra tòa à? (N02)
- **TU**: Tao không ra tòa. Tao làm như mày. (N03)
- **MN**: Máy tính báo lỗi, còn ông Tư thì báo món nợ vẫn đang chạy. (S33)
- **MN**: Bảo quen tính tiền người ta; tới lượt mình thì tự nhiên ghét máy tính. (N02)
- *(không lời, 0.8 s)* (S34)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN: Ma nhắn cả danh bạ

- **MN**: Bảy giờ sáng, máy tính của Bảo tự bật. Phần mềm nhắn tin tự chạy. Lần này, danh bạ là của Bảo. (N08)
- **ME**: Bảo ơi, con nợ tiền phở ai mà người ta nhắn cả cho mẹ thế? (N08)
- **MN**: Đàn em nghỉ. Con nợ cười. Cái uy của Bảo rơi nhanh hơn tin nhắn khuyến mãi. (N09)
- **MN**: Trùm đòi nợ… quỵt tiền phở. (N09)
- **MN**: Danh bạ cả đời đi đòi nợ, hôm nay đồng loạt làm công tác nhắc món. (S33)
- *(không lời, 0.8 s)* (N09)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER: Hạn trước bình minh

- **TU**: Trước bình minh ngày thứ bảy. Đủ bát. Từng cửa. (N03) · pop “ÔNG TƯ”
- **MN**: Bảo còn một đêm để giao đủ bát phở. Cửa nào hắn từng tạt sơn, cửa ấy phải nhận một bát nấu tử tế. (N10)
- **BAO**: Tôi không làm thì sao? Cái danh bạ kia nhắn mãi được chắc? (N02)
- **MN**: Hắn quay đầu về nhà. Hai giờ sáng, ngoài cổng lại vang tiếng gõ. (N01)
- **MN**: Camera vẫn trống. Sáng ra, trên bậc cửa có gì? (N06)
- **MN**: Bản đầy đủ, link dưới. (S06)

### SH7 — TRAILER: Cửa cuối cùng

- **MN**: Đêm thứ sáu. Bảo còn một cửa cuối trước bình minh. Hai trăm mười ba bát đã giao; bát cuối vẫn còn trên gánh. (N10)
- **BAO**: Tôi đi hết. Đừng để bát ở cửa nữa. (N02)
- **TU**: Bát cuối. Đặt xuống. (N03)
- **MN**: Ông Tư đứng bên kia cánh cửa, chờ Bảo đặt bát xuống. Nhưng ông có nhận không? (N06)
- **MN**: Bảo đặt gánh xuống, hai tay bỗng nhẹ tênh; cánh cửa trước mặt vẫn chưa mở. (N10)
- **MN**: Bản đầy đủ, link dưới. (S06)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | V3 dùng |
|---|---|---|
| N01 | Cổng biệt thự sắt mạ vàng ban đêm, đèn vàng, ngõ vắng, camera gắn cột | ✓ |
| N02 | Bảo (đầu đinh, dây chuyền vàng to, sơ mi hoa), ánh màn hình điện thoại xanh; có thể thêm cảnh Bảo gánh phở, bỏ dây chuyền, mặc áo phông trơn | ✓ |
| N03 | Ông Tư phở gánh: áo cánh nâu, mũ cát cũ, đòn gánh nồi nước dùng bốc khói, tay cầm thanh tre gõ; viền người hơi trong | ✓ |
| N04 | Cửa sắt nhà dân bị tạt vệt sơn xanh lam đã khô, tờ rơi cho vay dán cột điện (trống chữ) | ✓ |
| N05 | Tranh màu ngả nâu: ngõ phố Hà Nội thập niên 50, gánh phở dưới đèn dầu, khách ngồi ghế đẩu | ✓ |
| N06 | Bậc cửa đá sáng sớm, ba cái bát sứ hoa lam chồng lên nhau, hơi nóng bốc nhẹ | ✓ |
| N07 | Tờ giấy tính lãi dài trải từ bàn xuống sàn, kín chữ số, máy tính bỏ túi trên đó | ✓ |
| N08 | Điện thoại hai sim sáng liên tục trên bàn kính, thông báo chồng chất (trống chữ) | ✓ |
| N09 | Quán cà phê vỉa hè: mấy gã đàn em cầm điện thoại cười, bàn bên một người đọc tin cũng cười | ✓ |
| N10 | Đêm, ngõ nhỏ: Bảo (áo phông trơn, bỏ dây chuyền) gánh phở, gõ thanh tre; một cánh cửa còn vết sơn khô hé mở, bà cụ nhìn ra | ✓ |

## Lịch

- **LONG:** Thứ Năm 21/01, 18:00 (+07)
- **SH1:** Thứ Năm 21/01, 19:00 (+07)
- **SH2:** Thứ Sáu 22/01, 11:30 (+07)
- **SH3:** Thứ Sáu 22/01, 19:00 (+07)
- **SH4:** Thứ Bảy 23/01, 11:30 (+07)
- **SH5:** Thứ Bảy 23/01, 19:00 (+07)
- **SH6:** Chủ Nhật 24/01, 11:30 (+07)
- **SH7:** Chủ Nhật 24/01, 19:00 (+07)
