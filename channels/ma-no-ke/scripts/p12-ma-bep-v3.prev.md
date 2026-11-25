# Dự án 12 — Ma bếp tập thể “Phí dọn hai triệu” (v3, 2026-11-24)

- Giữ đồng hồ 9 giờ sáng và cái giá Quân phải chịu nếu trễ: mất tiền đặt chỗ, bị ứng dụng phạt và chưa lấy lại được căn hộ.
- Làm rõ ba lần Quân chủ động thử mở cửa; mỗi lần thất bại khiến anh phải tiến gần hơn tới việc hoàn tiền.
- Để bà Lụa chọn áp nội quy của Quân lên chính anh; Quân trả đủ 17 khoản cọc bị giữ oan và phí dọn 2 triệu.
- Giữ khoảnh khắc rợn thật ở căn bếp sạch lúc 3 giờ sáng; cold open chỉ treo câu hỏi bằng tiếng khóa.
- Rút LONG còn khoảng 580 chữ thoại; mỗi short trọn có punchline, khoảng lặng và câu chỉ link.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Quân có mở lại căn hộ trước 9 giờ sáng mà không phải trả khoản phí do chính mình đặt ra không?
- **Đồng hồ / cái giá:** Khách mới nhận phòng lúc 9 giờ. Trễ giờ, Quân mất tiền đặt chỗ và bị ứng dụng phạt; muốn mở cửa, anh phải hoàn lại đủ tiền cọc đã giữ oan và trả phí dọn 2 triệu theo nội quy mình đã dán.
- **Ba nấc leo thang:** Quân thử mã chủ nhà nhưng mã bị đổi; gọi thợ khóa reset nhưng bàn phím lại ướt và mã tiếp tục đổi; anh thử năn nỉ rồi đốt vàng mã, nhưng bà Lụa vẫn đòi hoàn cọc cho 17 khách.
- **Điểm thấp:** Còn mười phút tới giờ nhận phòng; thợ khóa bó tay, khách mới chờ dưới sảnh, Quân vẫn chưa trả cọc.
- **Cú lật:** Bà Lụa chọn áp nội quy của Quân lên chính anh. Quân chủ động trả đủ 17 khoản cọc và phí dọn 2 triệu để mở cửa; anh mất tiền và từ đó phải tự dọn.
- **Khoảnh khắc rợn:** Camera hành lang không ghi ai ra vào. Trong bếp, bát sạch xếp theo cỡ, nước còn nhỏ giọt; phích sắt hoa đào cũ nằm giữa bàn.
- **Câu kết:** “Có người đọc kỹ hơn khách.” Thứ Hai tới là người dẫn đường đã chết; Ma Nó nhả căng bằng câu đùa rồi kêu đăng ký.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó, người kể chuyện | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| QUAN | Quân, chủ căn hộ cho thuê, nói kiểu dân sale | K02 | Adam bựa | `atempo=1.05` |
| LUA | Bà Lụa, vong cấp dưỡng bếp tập thể, nhỏ nhẹ và khó tính | K03 | Ngọc Huyền | `atempo=0.85,aecho=0.8:0.5:50:0.25` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"QUAN":{"preset":"Adam bựa","fx":"atempo=1.05"},"LUA":{"preset":"Ngọc Huyền","fx":"atempo=0.85,aecho=0.8:0.5:50:0.25"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | K01 | *(không lời, 2 s)* | Khóa bíp sai · chữ “SAI MÃ” |
| 0:02 | K01 | *(không lời, 2 s)* | Bíp dài · chữ “ĐÃ ĐỔI MÃ” |
| 0:04 | K02 | **QUAN**: Nhà tôi! Nhà của tôi mà! | Đập cửa |
| 0:07 | K03 | **LUA**: Phí dọn chưa trả. Theo nội quy. | Cộc nhẹ |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Chủ nhà bị khóa ngoài nhà mình. Khách chưa tới mà có người dọn sạch rồi. | Mõ cộc |
| 0:18 | K04 | **MN**: Quân cho thuê căn hộ theo ngày. Ảnh trên app lung linh như khách sạn. Khách trả phòng, anh xịt nước thơm, thay ga. Hai triệu phí dọn, trừ thẳng tiền cọc. | “PHÍ DỌN 2.000.000đ” · ting |
| 0:30 | K05 | **MN**: Trên cửa dán nội quy: chưa thanh toán, chủ nhà đổi mã, giữ hành lý. Quân tự viết, tự in, tự ép plastic. | “CHƯA TRẢ: ĐỔI MÃ · GIỮ HÀNH LÝ” |
| 0:40 | K02 | **QUAN**: Khách nào cũng ký. Có ai đọc đâu.<br>**QUAN**: Phí dọn hai triệu. Dọn gì? Xịt thơm là xong. | Xịt xịt |
| 0:48 | S26 | **MN**: Ba năm trước, Quân mua căn hộ này. Chưa thắp nén hương nhập trạch lần nào. “Chung cư mới, cúng ai?” | |
| 0:56 | K06 | **MN**: Trước chung cư, chỗ này là bếp tập thể. Bà Lụa đứng bếp bốn mươi năm.<br>**LUA**: Bếp ba mươi hộ. Không để bẩn qua đêm. Bẩn là có chuột. Cả khu lại kêu. | Loa phường rè · chổi quét |
| 1:08 | S26 | **MN**: Quân chưa xin người cũ cho ở. Với bà Lụa, cậu là người ở nhờ. Mà người ở nhờ cũng phải theo nội quy nhà. | |
| 1:17 | K07 | **MN**: Đêm giao thừa, tám khách tiệc tùng. Sáng mùng Một, rác ngập tới cửa. Bánh kem trên sofa, lon nước dưới gầm bàn.<br>**QUAN**: Cọc năm triệu. Trừ hai triệu phí dọn, trừ ga gối. Mai qua xịt thơm. Quá đẹp. | Ting |
| 1:32 | K07 | **MN**: Khách mới hẹn nhận phòng lúc chín giờ. Quân tính ghé dọn trước mười phút. | “HẸN NHẬN PHÒNG 09:00” |
| 1:40 | K08 | **MN**: Ba giờ sáng. Camera hành lang chỉ thấy cửa đóng. Không ai ra. Không ai vào.<br>**MN**: Trong bếp, chồng bát sạch xếp theo cỡ. Nước còn nhỏ giọt. | Tích tắc · nước nhỏ · nhạc tắt |
| 1:52 | K09 | **MN**: Giữa bàn là cái phích sắt hoa đào. Loại đã bốn chục năm không ai mua. | Im 1.5 s |
| 1:58 | K10 | **MN**: Trên tủ lạnh, giấy kẻ ô: “Đã dọn. Phí hai triệu theo nội quy. Chưa trả, đổi mã.” | Chữ “ĐÃ DỌN · 2.000.000đ” |
| 2:08 | K01 | **MN**: Bảy giờ, Quân tới. Nấc một: mã chủ nhà sai.<br>**QUAN**: Ai đổi mã? Tôi đứng tên sổ hồng đấy!<br>**LUA**: Sổ hồng cậu cầm. Bếp thì tôi giữ. Cậu ở nhờ ba năm, chưa thắp cho tôi nén hương. | Bíp dài |
| 2:25 | K13 | **MN**: Nấc hai: Quân gọi thợ khóa. Thợ reset ba lần. Mỗi lần bấm xong, bàn phím lại ướt mùi nước rửa bát.<br>**QUAN**: Chú làm nghề bao lâu rồi? Chú reset lại lần nữa được không?<br>**MN**: Thợ khóa nhìn bàn phím, rồi nhìn Quân. Lần đầu tiên trong ngày, có người không bị tính phí. | Bíp dài ×3 |
| 2:45 | K02 | **MN**: Nấc ba: Quân năn nỉ, rồi đặt phong bì vàng mã trước cửa.<br>**QUAN**: Hai triệu vàng mã, bà lấy nhé. Mở cửa cho tôi. | |
| 2:54 | K03 | **LUA**: Tiền giấy đốt rồi thì ai trả cọc cho khách? Tôi gạch sổ mười bảy lần. Mười bảy lần trừ oan.<br>**QUAN**: Mười bảy lần? Ai đếm kỹ thế…<br>**LUA**: Người đứng bếp. Khách trả phòng, tôi đều nghe. | “TRẢ CỌC ×17” |
| 3:10 | K02 | **MN**: Còn mười phút nữa khách tới. Thợ khóa bó tay, khách mới chờ dưới sảnh. Mười bảy khoản cọc vẫn chưa trả. | Tích tắc |
| 3:18 | K02 | **QUAN**: Tôi trả cọc. Đủ cả.<br>**MN**: Quân chuyển tiền cho mười bảy khách. Tay run hơn lúc bấm giá phòng. | Ting ×17 |
| 3:30 | K03 | **LUA**: Cọc trả rồi. Phí dọn hai triệu. Theo nội quy.<br>**QUAN**: Hai triệu nữa? Bà dọn sạch rồi còn gì!<br>**LUA**: Đúng. Tôi dọn. Cậu trả. Cậu viết thế. | |
| 3:45 | K02 | **MN**: Quân chuyển khoản. Khóa bíp xanh. Cửa mở.<br>**MN**: Chín giờ kém một phút. Khách mới tới. Quân đưa hành lý, cười như chủ nhà thật.<br>**QUAN**: Căn hộ sạch sẽ. Chủ nhà cũng rất minh bạch. | Bíp xanh |
| 4:03 | K12 | **MN**: Từ đó, khách vừa trả phòng là Quân phi tới cọ bếp, quét nhà, đổ rác. Bà Lụa không cần dọn lần nào nữa.<br>**QUAN**: Năm sao nhé. Chủ nhà sạch nhất từng gặp. | Chổi quét |
| 4:16 | S33 → S34 | **MN**: Về nhà mới, nhớ hỏi người cũ. Dán nội quy thì nhớ đọc lại. Có người đọc kỹ hơn khách. | Rít điếu cày |
| 4:27 | B02 | **MN**: Thứ Hai: một nhóm vào rừng phòng hộ săn lan đột biến. Người dẫn đường quen rừng lắm. Quen từ hồi… còn sống. | “TẬP SAU · THỨ HAI” · whoosh |
| 4:38 | S06 | **MN**: Bấm đăng ký đi. Hy vọng mày đọc biển chỉ đường kỹ hơn nội quy căn hộ. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN · Chủ nhà bị khóa ngoài

- **MN**: Lại mò vào à? Chủ nhà bị khóa ngoài nhà mình. (S01) · pop “BỊ KHÓA NGOÀI”
- **QUAN**: Nhà tôi! Nhà của tôi mà! (K02)
- **LUA**: Phí dọn chưa trả. Theo nội quy. (K03) · pop “BÀ LỤA”
- **MN**: Cửa dán nội quy do Quân tự viết: chưa trả tiền thì đổi mã, giữ hành lý. Khách nào cũng ký, có ai đọc đâu. (K05)
- **MN**: Chủ nhà tự khóa mình ngoài cửa, nội quy làm việc rất tận tâm. (K02)
- *(không lời, 0.8 s)* (K02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 — TRỌN · Xịt thơm là dọn

- **MN**: Hai triệu phí dọn. Quân dọn bằng một cú xịt. (K02) · pop “QUÂN”
- **QUAN**: Khách nào cũng ký. Có ai đọc đâu. (K02)
- **QUAN**: Phí dọn hai triệu. Dọn gì? Xịt thơm là xong. (K02)
- **MN**: Khách trả phòng, anh trừ cọc rồi xịt thơm. Bánh kem trên sofa, lon nước dưới gầm bàn. Hôm sau căn hộ sạch bong. (K07)
- **MN**: Có người làm vệ sinh bằng mùi hương, kế toán bằng tiền cọc. (K02)
- *(không lời, 0.8 s)* (K02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 — TRỌN · Bếp cũ dưới căn hộ mới

- **MN**: Căn hộ mới, bếp cũ. Có người vẫn đứng ca. (K06) · pop “BÀ LỤA”
- **MN**: Trước chung cư, đây là bếp tập thể. Bà Lụa đứng bếp bốn mươi năm. (K06)
- **LUA**: Bếp ba mươi hộ. Không để bẩn qua đêm. Bẩn là có chuột. (K03)
- **MN**: Quân mua căn hộ, chưa thắp nén hương nhập trạch. “Chung cư mới, cúng ai?” (S26)
- **LUA**: Cậu ở nhờ ba năm, chưa thắp cho tôi nén hương. (K03)
- **MN**: Người ở nhờ ba năm mà vẫn tưởng mình là chủ. Rất tự tin. (S26)
- *(không lời, 0.8 s)* (K06)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 — TRỌN · Phích hoa đào lúc ba giờ

- **MN**: Ba giờ sáng. Camera không ghi ai ra vào. (K08) · pop “BÀ LỤA”
- **MN**: Trong bếp, bát sạch xếp theo cỡ. Nước còn nhỏ giọt. (K09)
- **MN**: Giữa bàn là cái phích sắt hoa đào. Loại đã bốn chục năm không ai mua. (K09)
- *(không lời, 0.8 s)* (K09)
- **MN**: Trên tủ lạnh có giấy: “Đã dọn. Phí hai triệu theo nội quy.” (K10)
- **MN**: Ba giờ sáng mà căn bếp sạch như vừa kiểm tra vệ sinh. Người trực ca chắc không tan làm. (K09)
- *(không lời, 0.8 s)* (K09)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 — TRỌN · Thợ khóa cũng chịu

- **MN**: Quân gọi thợ khóa. Bấm ba lần, mã vẫn đổi. (K13) · pop “QUÂN”
- **MN**: Mỗi lần reset, bàn phím lại ướt mùi nước rửa bát. (K13)
- **LUA**: Sổ hồng cậu cầm. Bếp thì tôi giữ. (K03) · pop “BÀ LỤA”
- **QUAN**: Chú làm nghề bao lâu rồi? Chú reset lại lần nữa được không? (K02)
- **MN**: Thợ khóa nhìn bàn phím, nhìn Quân. Lần đầu tiên trong ngày, có người không bị tính phí. (K13)
- **MN**: Thợ khóa chịu rồi; chắc cũng sợ gặp thêm phụ phí. (K13)
- *(không lời, 0.8 s)* (K13)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 — TRAILER · Mười phút tới giờ nhận phòng

- **MN**: Chín giờ khách mới nhận phòng. Quân còn đứng ngoài cửa. (K01) · pop “QUÂN”
- **MN**: Mã chủ nhà sai. Thợ khóa reset ba lần, mã vẫn đổi. (K13)
- **MN**: Bảy giờ, khách mới nhắn đang ở dưới sảnh. Ứng dụng báo trễ giờ sẽ mất tiền đặt chỗ, còn bị phạt. (K02)
- **LUA**: Tiền giấy đốt rồi thì ai trả cọc cho khách? (K03) · pop “BÀ LỤA”
- **QUAN**: Còn mười phút nữa khách tới. Tôi trả cọc. Đủ cả. (K02)
- **MN**: Quân mở ứng dụng ngân hàng. Một chạm nữa là bay tiền. (K02)
- **MN**: Bà Lụa còn đòi khoản gì? Bản đầy đủ, link dưới. (S26)

### SH7 — TRAILER · Ai giữ căn bếp?

- **MN**: Quân đứng ngoài căn hộ của mình. (K02) · pop “QUÂN”
- **LUA**: Sổ hồng cậu cầm. Bếp thì tôi giữ. (K03) · pop “BÀ LỤA”
- **MN**: Anh gọi thợ khóa. Ba lần reset, bàn phím lại ướt. Thợ khóa nhìn Quân như vừa nhận thêm khách khó. (K13)
- **MN**: Anh thử năn nỉ rồi đốt vàng mã. Bà Lụa chẳng buồn mở cửa. (K11)
- **LUA**: Người đứng bếp. Khách trả phòng, tôi đều nghe. (K03)
- **MN**: Bà ghi sổ đủ mười bảy lần Quân trừ cọc. Căn hộ sẽ mở bằng cách nào? Bản đầy đủ, link dưới. (S26)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | V3 dùng |
|---|---|---|
| K01 | Cận khóa điện tử bàn phím số trên cửa căn hộ chung cư, đèn đỏ | Có |
| K02 | Quân hoodie, chùm chìa khóa, điện thoại, đứng hành lang đập cửa | Có |
| K03 | Bà Lụa tạp dề trắng, khăn vấn, giẻ lau, đứng trong bếp | Có |
| K04 | Căn hộ cho thuê kiểu sống ảo: đèn dây, sofa xám, cây giả | Có |
| K05 | Cực cận tờ nội quy ép plastic dán cửa, dòng cuối chữ đỏ, trống chữ để dựng | Có |
| K06 | Ảnh cũ ngả nâu: bếp tập thể, dãy bếp than, nồi nhôm, bà cấp dưỡng | Có |
| K07 | Căn hộ sau tiệc: rác, lon, hộp pizza, bánh kem bẹp, bóng bay xì | Có |
| K08 | Màn hình camera hành lang đen trắng, cửa đóng, mốc 03:00 | Có |
| K09 | Bếp sạch lúc đêm: bát xếp theo cỡ còn nhỏ nước, phích sắt hoa đào | Có |
| K10 | Cực cận tờ giấy kẻ ô trên tủ lạnh, chữ nghiêng kiểu cũ, trống chữ | Có |
| K11 | Quân thắp hương trước cửa căn hộ, vàng mã và phong bì | Có |
| K12 | Quân đeo găng cao su cọ bồn rửa lúc nửa đêm; phích hoa đào phía sau | Có |
| K13 | Thợ khóa quỳ trước cửa, hộp đồ nghề mở, bàn phím ướt bọt xà phòng | Có |

## Lịch

| Nội dung | Giờ đăng (+07) |
|---|---|
| LONG | Thứ Năm 31/12 18:00 |
| SH1 | Thứ Năm 31/12 19:00 |
| SH2 | Thứ Sáu 01/01 11:30 |
| SH3 | Thứ Sáu 01/01 19:00 |
| SH4 | Thứ Bảy 02/01 11:30 |
| SH5 | Thứ Bảy 02/01 19:00 |
| SH6 | Chủ Nhật 03/01 11:30 |
| SH7 | Chủ Nhật 03/01 19:00 |
