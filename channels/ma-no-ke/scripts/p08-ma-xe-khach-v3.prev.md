# Dự án 8 — Ma xe khách “Ghế 46” (v3, 2026-11-23)

- Cường tự biến vé ghế 46 thành bằng chứng khi chọn bán thêm vé để che chuyện bán quá chỗ.
- Đồng hồ: xe phải qua trạm lúc 02:00; nếu trượt, Cường bị lập biên bản quá tải và mất xe chạy tuyến Tết.
- Ba nấc leo thang: kê ghế nhựa bán thêm → đổi vé thành tiền khi khách bật dậy → đòi đuổi bác Tâm, rồi chọn xé thêm vé để che chuyện bán quá chỗ.
- Cold open treo ghế trống và tấm vé chưa ráo mực; không báo trước cú lật.
- Giữ giọng kính trọng chuyện về quê ăn giỗ; khoảnh khắc rợn thật là chiếc ghế 46 trống với tấm vé có dấu nhà xe còn mới.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Cường có thể chở ghế 46 qua trạm kiểm tra mà không phải nhận chính tấm vé mình bán ra không?
- **Đồng hồ / cái giá:** Trạm kiểm tra đếm xe lúc 02:00; nếu trượt, Cường bị lập biên bản quá tải và mất xe chạy tuyến Tết.
- **Ba nấc leo thang:** Cường kê ghế nhựa để bán thêm → khách ngồi ghế 46 bật dậy, Cường đổi vé thành tiền → tiền hóa vàng mã, Cường đòi đuổi bác Tâm → Cường chọn xé thêm vé ghế 46 để che việc bán quá chỗ.
- **Điểm thấp:** Cường thấy tấm vé có dấu của mình, tiền đã thành vàng mã, còn trạm kiểm tra chỉ cách vài phút.
- **Cú lật:** Cường chọn xé thêm vé ghế 46, kẹp vào ghế trống để chứng minh mình bán đúng ghế; chính lựa chọn ấy khiến cán bộ tính ghế có vé thành ghế có khách và lập biên bản quá tải.
- **Khoảnh khắc rợn:** Trên xe 45 chỗ, ghế nhựa số 46 trống suốt đêm; tấm vé “GHẾ 46” kẹp vào nan ghế, mực dấu nhà xe còn chưa ráo.
- **Câu kết:** Ma đi xe có vé, người sống đứng cả đêm; Thứ Hai, tour săn ma 499k và một đốm lửa xanh ngoài kịch bản.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, ep01 S01/S26/S33/S34; S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| TAM | Bác Tâm: ông cụ áo bông cũ, mũ len, túi cói; xưng “tôi”, lễ phép, cố chấp chuyện vé | K00, K03, K04, K12 | Thiền Tâm Đức | `aecho=0.8:0.4:40:0.15` |
| CUONG | Cường, phụ xe kiêm chủ; áo khoác da, túi đeo bụng đầy tiền, mồm “lên đi lên đi” | K05, K07, K08, K13 | Adam bựa | `atempo=1.08` |
| CSGT | Cán bộ trạm kiểm tra | K09, K10 | Minh Đức | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "TAM": {"preset": "Thiền Tâm Đức", "fx": "aecho=0.8:0.4:40:0.15"}, "CUONG": {"preset": "Adam bựa", "fx": "atempo=1.08"}, "CSGT": {"preset": "Minh Đức", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | K01 | *(không lời, 2 s)* | động cơ · bolero rè · “XE 45 CHỖ · 01:52” |
| 0:02 | K02 | *(không lời, 1.5 s)* | cận vé trống chữ · “GHẾ 46” · im |
| 0:04 | K03 | **MN**: Cả xe đứng. Một cái ghế trống. Ai ngồi vào cũng đứng bật dậy trước khi kịp hỏi nhà xe có bán vé tháng không. | gió lạnh rít |
| 0:11 | K03 | **TAM**: Ghế của tôi. Tôi có vé. | im 0.5 s |
| 0:14 | B02 → S01 | **MN**: Lại mò vào à? Khách hôm nay mua vé đàng hoàng nhất xe. Bác ấy đi ăn giỗ của chính mình. | mõ CỘC |
| 0:21 | S26 | **MN**: Chỉ muốn ngồi đúng chỗ đã trả tiền. Khó hơn tìm chỗ đậu xe ngày Tết. |  |
| 0:28 | K04 | **TAM**: Tôi là Tâm. Mất đã lâu. Năm nào cuối năm tôi cũng về quê ăn giỗ. Con cháu thắp hương gọi, thì mình về. | còi xe xa |
| 0:37 | K04 | **TAM**: Đi đường đất mới theo được hương con cháu thắp. Máy bay ở tít trên trời. Mà vé xe phải mua từ tháng mười một, muộn là hết. | chữ “MUA VÉ TỪ THÁNG 11” |
| 0:47 | S26 | **MN**: Ma cũng săn vé Tết. Người sống đừng than nữa, bác nghe thấy lại nhường chỗ. |  |
| 0:54 | K05 | **CUONG**: Lên đi lên đi! Còn chỗ! Còn chỗ! Ngồi thêm ghế nhựa cũng là ngồi, miễn là trả tiền mặt! | “LÊN ĐI LÊN ĐI” |
| 1:02 | K01 | **MN**: Xe bốn mươi lăm chỗ. Cường bán sáu mươi hai vé. Ghế nhựa kê kín lối đi, đánh số đến bốn mươi sáu. Bảng tính của anh chỉ có một cột: tiền vào. | “45 CHỖ · 62 VÉ” |
| 1:13 | K02 → K05 | **CUONG**: Ghế bốn sáu đây bác. Gần cửa, xuống xe tiện. Giá như ghế thường, vì tôi đang cần khách quen. | xé vé |
| 1:22 | K04 | **TAM**: Cảm ơn cậu. Tôi trả đủ. | xu leng keng |
| 1:26 | S26 | **MN**: Vé đã xé, dấu đã đóng. Cường làm dịch vụ trọn gói: thu tiền trước, nghĩ luật sau. | “VÉ CÓ DẤU ✔” |
| 1:34 | K06 | **MN**: Xe chạy nửa tiếng, một ông khách mỏi chân ngồi phịch xuống ghế bốn sáu. | động cơ |
| 1:40 | K06 | **MN**: Năm giây. Lạnh từ mông lên gáy. Ông đứng bật dậy. Người thứ hai thử. Rồi người thứ ba. Cả xe bắt đầu hiểu ghế này có khách trung thành hơn họ. | gió rít ×3 · “5 GIÂY” |
| 1:53 | K03 | **TAM**: Tôi không đuổi ai. Chỉ là chỗ này có người ngồi rồi. |  |
| 1:58 | K07 | **CUONG**: Ghế trống mà không ai ngồi là sao? Ngồi đi! Tôi còn bán thêm! |  |
| 2:03 | K13 | **MN**: Cường mở túi đếm tiền. Tiền lẻ ông Tâm trả đã hóa vàng mã. Cường nhìn xấp tiền, rồi nhìn cái túi bụng: doanh thu âm phủ, chi phí vẫn dương. | sột soạt · “TIỀN ÂM PHỦ” |
| 2:14 | K08 | **MN**: Anh cúi xuống ghế. Tấm vé kẹp chặt vào nan. Nét chữ của chính anh. |  |
| 2:20 | K02 | **TAM**: Tiền tôi trả đủ. Vé cậu xé tay. Tôi không lấn một tấc. Cậu đừng bớt của tôi một phân. |  |
| 2:29 | K07 | **CUONG**: Ông xuống xe ngay! Tôi trả… tôi trả bằng cái khác! |  |
| 2:34 | K03 | **TAM**: Tôi có vé. | im 1 s |
| 2:38 | S26 | **MN**: Cường muốn đuổi bác xuống, nhưng tiền hoàn lại giờ chỉ dùng được ở một nơi có khói nhang. |  |
| 2:46 | K09 | **MN**: Một giờ năm mươi tám. Trạm kiểm tra cách vài phút. Cường phải chọn: nhận ghế bốn sáu là ghế mình bán, hay giả vờ chiếc vé tự mọc ra. | bộ đàm · tick |
| 2:56 | K07 | **CUONG**: Tôi bán nhầm số! Ghế này không tính! |  |
| 3:01 | K02 → K08 | **MN**: Anh giật tấm vé, định xé. Rồi dừng lại. Xé mất thì tiền vẫn mất. Giữ lại thì ít nhất còn có thể bán tiếp. | giấy rách dở · tick |
| 3:12 | K05 | **CUONG**: Đây, ghế bốn sáu có vé. Tôi bán đúng ghế, đúng giá. Anh thấy chưa? | xé thêm vé · đóng dấu |
| 3:20 | K11 | **MN**: Cường kẹp tấm vé mới vào nan ghế trống. Xe bốn mươi lăm chỗ. Ghế nhựa số bốn sáu. Vé đỏ. Mực dấu nhà xe còn chưa ráo. | gió lạnh rít · nhạc tắt |
| 3:30 | K10 | **MN**: Cán bộ rọi đèn dọc lối đi, đếm từng ghế. Bốn mươi lăm ghế đệm. Mười sáu ghế nhựa có người. Một ghế nhựa trống. | đèn pin · bộ đàm |
| 3:40 | K07 | **CUONG**: Sáu mươi hai thôi anh! Thừa một là… là ma! |  |
| 3:45 | K03 | **TAM**: Tôi có vé, anh ạ. | thì thầm |
| 3:48 | K09 | **CSGT**: Bốn mươi lăm ghế đệm, mười bảy ghế nhựa. Vé anh bán, ghế anh kê. Ghế nào có vé là có khách. Xuống xe ký biên bản! | “QUÁ TẢI · KÝ BIÊN BẢN” · đóng dấu |
| 4:00 | K12 | **MN**: Sáng ra, xe vào đến làng. Bác Tâm xuống đúng cổng nhà, đúng giờ con cháu thắp hương. | gà gáy |
| 4:07 | K12 | **TAM**: Cậu Cường à. Sang năm tôi đặt lại ghế bốn sáu nhé. |  |
| 4:13 | K07 | **MN**: Cường đổi sang xe bốn mươi lăm chỗ, bán đúng bốn mươi lăm vé. Ai hỏi thì bảo: “Chừa một ghế cho bác.” | “45 CHỖ · 45 VÉ” · mõ CỘC |
| 4:23 | S33 → S34 | **MN**: Ma đi xe còn có vé. Người sống thì đứng cả đêm. Nhà xe này cuối cùng cũng có một ghế trống làm đúng chức năng. | rít điếu cày |
| 4:32 | K12 | **MN**: Thứ Hai: tour săn ma bốn trăm chín chín nghìn, ba tháng chưa thấy con nào. Đêm nay, có một đốm lửa xanh… không nằm trong kịch bản. | “TẬP SAU · THỨ HAI” · whoosh |
| 4:40 | S06 | **MN**: Bấm đăng ký đi. Không thì chuyến xe Tết này, mày ngồi cạnh ghế bốn sáu. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN

- **MN**: Cả xe đứng. Một cái ghế trống. Ai ngồi vào cũng đứng bật dậy trước khi kịp hỏi nhà xe có bán vé tháng không. (K03)
- **TAM**: Ghế của tôi. Tôi có vé. (K03) · pop “BÁC TÂM”
- **MN**: Xe bốn mươi lăm chỗ. Cường bán sáu mươi hai vé. (K01)
- **CUONG**: Ghế bốn sáu đây bác. Gần cửa, xuống xe tiện. (K05)
- **TAM**: Cảm ơn cậu. Tôi trả đủ. (K04)
- **MN**: Vé có dấu. Ghế không có trên sơ đồ. Ai đang ngồi ghế bốn sáu? (K02)
- *(không lời, 0.8 s)* (K03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH2 — TRỌN

- **TAM**: Năm nào cuối năm tôi cũng về quê ăn giỗ. Con cháu thắp hương gọi, thì mình về. (K04) · pop “BÁC TÂM”
- **MN**: Đi đường đất mới theo được hương con cháu thắp. (K04)
- **TAM**: Vé xe phải mua từ tháng mười một, muộn là hết. (K04)
- **MN**: Ma cũng săn vé Tết. Người sống đừng than nữa, bác nghe thấy lại nhường chỗ. (S26)
- *(không lời, 0.8 s)* (K04)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH3 — TRỌN

- **CUONG**: Lên đi lên đi! Còn chỗ! Còn chỗ! Ngồi thêm ghế nhựa cũng là ngồi! (K05)
- **MN**: Xe bốn mươi lăm chỗ. Cường bán sáu mươi hai vé. Ghế nhựa kê kín lối đi. (K01)
- **CUONG**: Ghế bốn sáu đây bác. Gần cửa, xuống xe tiện. (K05)
- **MN**: Tiền lẻ ông Tâm trả đã hóa vàng mã. Doanh thu âm phủ, chi phí vẫn dương. (K13) · pop “BÁC TÂM”
- *(không lời, 0.8 s)* (K13)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH4 — TRỌN

- **MN**: Một ông khách ngồi xuống ghế bốn sáu. Năm giây, lạnh từ mông lên gáy. Người thứ hai thử. Rồi người thứ ba. (K06)
- **TAM**: Tôi không đuổi ai. Chỉ là chỗ này có người ngồi rồi. (K03) · pop “BÁC TÂM”
- **CUONG**: Ghế trống mà không ai ngồi là sao? Ngồi đi! Tôi còn bán thêm! (K07)
- **MN**: Ghế trống này giữ khách tốt hơn cả Cường. (K03)
- *(không lời, 0.8 s)* (K03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH5 — TRỌN

- **CUONG**: Ông xuống xe ngay! Tôi trả… tôi trả bằng cái khác! (K07)
- **TAM**: Tôi có vé. (K03) · pop “BÁC TÂM”
- **MN**: Tiền bác trả đã thành vàng mã. Cường đòi hoàn tiền mà quên mất quầy đổi ở đâu. (K13)
- **TAM**: Tiền tôi trả đủ. Vé cậu xé tay. (K02)
- *(không lời, 0.8 s)* (K08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 — TRAILER

- **MN**: Một giờ năm mươi tám. Trạm kiểm tra cách vài phút. Cường phải chọn: nhận chiếc vé, hay giả vờ nó tự mọc ra. (K09)
- **CUONG**: Sáu mươi hai thôi anh! Thừa một là… là ma! (K07)
- **MN**: Trên xe bốn mươi lăm chỗ, một tấm vé ghế bốn sáu vừa được đóng dấu. (K11)
- **TAM**: Tôi có vé, anh ạ. (K03) · pop “BÁC TÂM”
- *(không lời, 0.8 s)* (K11)

### SH7 — TRAILER

- **MN**: Ghế nhựa số bốn sáu trống giữa lối đi. Tấm vé kẹp vào nan ghế. (K11)
- **CUONG**: Sáu mươi hai thôi anh! Thừa một là… là ma! (K07)
- **CSGT**: Ghế nào có vé là có khách. Xuống xe ký biên bản! (K09)
- **MN**: Cường tự bán thêm một tấm vé. Trạm kiểm tra đã đếm xong chưa? (K10)

## Hình

| Mã | Cảnh | Dùng trong v3 |
|---|---|---|
| K00 | Sheet bác Tâm (3:4): ông cụ ma hiền, áo bông cũ, mũ len, túi cói, da trắng xanh nhạt, chân không chạm sàn; 4 tư thế | Có |
| K01 | Trong xe khách đêm, đèn xanh mờ, khách đứng chen lối đi, ghế nhựa đỏ kê giữa lối | Có |
| K02 | Cực cận tấm vé xe khách giấy hồng có dấu đỏ | Có |
| K03 | Ghế nhựa đỏ trống giữa lối đi, sương lạnh mờ quanh ghế, người đứng né ra | Có |
| K04 | Bến xe đêm cuối năm: hàng người xếp, bác Tâm xách túi cói, xe khách đỗ | Có |
| K05 | Cường áo khoác da, túi đeo bụng đầy tiền, đứng cửa xe vẫy khách | Có |
| K06 | Gã đàn ông ngồi phịch xuống ghế 46, mặt tái, hơi lạnh bốc lên | Có |
| K07 | Sheet Cường 3 biểu cảm: quát, run, mếu | Có |
| K08 | Cường cúi xuống ghế trống, nhặt tấm vé trên ghế | Có |
| K09 | Trạm kiểm tra đêm: CSGT cầm đèn pin, xe khách dừng, bộ đàm | Có |
| K10 | CSGT rọi đèn pin dọc lối đi xe khách, khách ngồi ghế nhựa nheo mắt | Có |
| K11 | Cực cận ghế nhựa đỏ trống dưới đèn pin, tấm vé hồng kẹp vào nan ghế | Có |
| K13 | Cực cận túi tiền mở ra: tiền lẻ lẫn vài tờ vàng mã đỏ vàng | Có |
| K12 | Sáng sớm cổng làng Bắc Bộ: bác Tâm xuống xe, mái nhà xa có khói hương | Có |
| B02, S01/S26/S33/S34, S06 | Ma Nó và CTA tái dùng theo v2 | Có |

## Lịch

- **LONG:** Thứ Năm 17/12, 18:00 (+07).
- **SH1:** Thứ Năm 17/12, 19:00.
- **SH2:** Thứ Sáu 18/12, 11:30.
- **SH3:** Thứ Sáu 18/12, 19:00.
- **SH4:** Thứ Bảy 19/12, 11:30.
- **SH5:** Thứ Bảy 19/12, 19:00.
- **SH6:** Chủ Nhật 20/12, 11:30.
- **SH7:** Chủ Nhật 20/12, 19:00.
