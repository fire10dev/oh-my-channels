# Dự án 27 — Rắn thần giếng "Bể bơi vô cực" (v3, 2026-11-24)

- LONG giữ khoảng 580 chữ lời thoại, với mốc thời gian theo nhịp dựng 3:00–3:15.
- Ba lần Tiến chủ động thử giải quyết, điểm thấp nhất và cú lật giữ nguyên.
- Năm short TRỌN có 70–110 chữ lời, mỗi short chốt bằng câu đùa trước câu chỉ link.
- Hai trailer vẫn cắt trước đáp án.
- Đánh dấu ảnh được dùng trong v3.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Trước lễ khai trương sáng hôm sau, Tiến có thể làm bể bơi hoạt động mà không trả lại giếng cho làng không?
- **Đồng hồ / cái giá:** Lễ khai trương lúc 8 giờ sáng; nếu bể vẫn lạnh và không kiểm soát được, khách hủy, Tiến mất tiền đặt cọc và quyền điều hành resort.
- **Ba nấc leo thang:** Tiến cho kỹ thuật viên xử lý clo và máy sưởi — thất bại; tự bịt ống thoát — sàn nứt, nước rỉ lên; hút cạn bể — nước tự dâng lại. Cuối cùng ông chọn khoan lại giếng cũ.
- **Điểm thấp:** 2 giờ sáng, bể vừa hút cạn lại đầy; lễ khai trương còn sáu tiếng, Tiến hiểu mình không còn cách giữ bể như cũ.
- **Cú lật:** Tiến tự quyết định khoan lại đúng vị trí giếng giữa sảnh và mở cửa cho làng gánh nước. Ông mất quyền độc chiếm nguồn nước và một phần sảnh; resort giữ được khai trương.
- **Khoảnh khắc rợn:** Bóng dài hơn bề ngang bể lướt một vòng dưới đáy sâu 1,2 mét, mặt nước không gợn; hơi thở vang lên từ dưới lòng đất.
- **Câu kết:** Làng gánh nước miễn phí, khách trả năm trăm nghìn một gầu; ông thần dưới giếng cười nghe như nước sôi. Thứ Năm kể chuyện trưởng ban quản trị chung cư và cư dân hầm B3.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S26, S33, S34, S06 | Thiện Minh | atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25 |
| TIEN | Ông Tiến, chủ resort | J06 | Adam bựa | atempo=1.05 |
| CU | Cụ Thơm, người làng gánh nước | J04 | Ngọc Huyền | atempo=0.90 |
| KT | Kỹ thuật viên bể bơi | J07 | Hải Đăng | anull |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "TIEN": {"preset": "Adam bựa", "fx": "atempo=1.05"}, "CU": {"preset": "Ngọc Huyền", "fx": "atempo=0.90"}, "KT": {"preset": "Hải Đăng", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | J01 | *(không lời, 2 s)* | Bể đêm, nước tràn êm · nhạc tắt |
| 0:02 | J02 | **MN**: Bể bơi năm sao. Mặt nước phẳng như gương. Thế cái bóng dưới đáy kia dài bao nhiêu? | nước ùng ục rất nhẹ |
| 0:08 | J02 | *(không lời, 2 s)* | Vệt tối lướt qua · mõ CỘC |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Nhà mày có giếng không? Có khi nó vẫn ở đó, chỉ đổi cửa mà thở. | mõ CỘC |
| 0:18 | J03 | **MN**: Làng dưới thung lũng có cái giếng đầu dốc. Nước trong, ngọt, mùa hạn cũng không cạn. Ba trăm năm, cả làng thay nhau gánh. | ròng rọc · gầu múc |
| 0:28 | J04 | **CU**: Dưới giếng có ông nằm từ trước khi có làng. Ông giữ mạch, mình giữ giếng sạch. Thế thôi. |  |
| 0:35 | S26 | **MN**: Dân gian gọi là rắn thần giữ mạch nước. Chưa ai thấy rõ. Cũng chưa ai phải gọi tổng đài báo nước yếu. | "RẮN THẦN GIỮ MẠCH" |
| 0:43 | J05 | **MN**: Rồi ông Tiến mua quả đồi làm resort. Chỗ giếng nằm đúng giữa sảnh. Bể bơi vô cực sẽ nhìn thẳng xuống thung lũng. |  |
| 0:51 | J06 | **TIEN**: Giếng lấp. Làng mua nước bình, tôi tài trợ một năm. Sảnh phải thoáng, khách vào là thấy view. |  |
| 0:59 | J04 | **CU**: Lấp thì chừa cho nó cái ống thở, cậu ơi. |  |
| 1:04 | J06 | **TIEN**: Thở gì, giếng chứ có phải người. Đổ kín cho chắc. | máy trộn bê tông |
| 1:10 | S26 | **MN**: Cụ Thơm nói tục cũ: lấp giếng thì chừa lỗ thở. Tiến nghe xong quyết định tiết kiệm được một cái ống tre. | chữ "CHỪA LỖ THỞ" |
| 1:18 | J01 | **MN**: Khai trương còn một ngày. Khách đặt cọc, báo chí mời đủ. Tiến cần bể xanh, ấm, đẹp trước tám giờ sáng. Trượt là khách hủy, tiền cọc bay, ghế chủ resort cũng lung lay. | "HẠN: 8:00 SÁNG" · tick |
| 1:30 | J07 | **KT**: Nước mười hai độ. Clo đủ liều mà nước vẫn trong. Máy sưởi chạy hết công suất. | máy bơm |
| 1:36 | J06 | **TIEN**: Tăng nhiệt. Đổ thêm clo. Bể khai trương thì phải ra bể khai trương. |  |
| 1:42 | J07 | **MN**: Một giờ sau, nước vẫn lạnh như vừa được lấy từ giếng. Clo thì thơm như hồ bơi. Khách thì chưa tới mà bể đã có hai tính cách. |  |
| 1:50 | J06 | **TIEN**: Nước giếng đâu ra? Bể nối nước máy cơ mà! |  |
| 1:56 | S26 | **MN**: Giếng không được thở ở chỗ cũ. Nó tìm cửa gần nhất. Dưới bể là ống thoát đáy. | nước ngầm ùng ục |
| 2:03 | J01 | **MN**: Đêm xuống, Tiến ra kiểm tra. Đèn bể bật. Mặt nước phẳng lặng. | nhạc tắt |
| 2:10 | J08 | **MN**: Dưới đáy sâu một mét hai, một cái bóng dài chậm rãi uốn một vòng quanh bể. | im |
| 2:18 | J08 | **MN**: Nó dài hơn cả bề ngang bể. Mặt nước không gợn một vết. | im 2 s |
| 2:25 | J09 | *(không lời, 3 s)* | Hơi thở ngầm dài, trầm |
| 2:28 | J06 | **TIEN**: Bịt ống thoát lại. Ngay. |  |
| 2:32 | J07 → J01 | **MN**: Tiến cho bịt ống. Sáng ra, sàn quanh bể nứt một đường, nước rỉ lên qua kẽ gạch. Ông thử cách hai: hút cạn bể. | bê tông rắc · máy bơm |
| 2:42 | J01 | **MN**: Đến hai giờ sáng, bể đã cạn. Tiến đứng giữa cái hố xanh, nhìn đồng hồ. Còn sáu tiếng. Không có nước, không có khai trương. | "2:00 · CÒN 6 TIẾNG" |
| 2:52 | J01 | *(không lời, 2 s)* | Nước ngầm ùng ục |
| 2:54 | J01 | **MN**: Rồi nước tự dâng lên. Trong vắt. Lạnh buốt. Tiến hết cách. | nước dâng |
| 3:00 | J06 | **TIEN**: Khoan lại giếng. Đúng chỗ cũ. Mở cửa cho làng lúc năm giờ. | máy khoan |
| 3:07 | J12 | **MN**: Tiến tự chọn. Khoan lại giữa sảnh, xây thành đá, chừa ống thở. Mất một phần sảnh riêng, nhưng cứu được resort trước giờ mở cửa. | ròng rọc |
| 3:17 | J11 | **MN**: Năm giờ sáng, dân làng xách xô lên. Cụ Thơm kéo gầu. Nước giếng ngọt như xưa. | xô va nhau · chim sáng |
| 3:25 | J04 | **CU**: Đúng nước nhà mình. |  |
| 3:29 | J01 | **MN**: Bể bơi vô cực thành giếng vô cực. Nước tràn theo con mương cũ về làng. Khách năm sao xuống bể, chạm chân rồi leo lên. | nước chảy |
| 3:38 | J06 | **TIEN**: Từ tám giờ, khách trải nghiệm múc nước giếng cổ chữa lành. Năm trăm nghìn một gầu. Kín lịch tới tháng sau. |  |
| 3:46 | S33 → S34 | **MN**: Làng gánh miễn phí. Khách trả năm trăm nghìn để kéo đúng cái gầu ấy. Ông thần dưới giếng chắc đang cười. Cười nghe như nước sôi. | rít điếu cày · thở ngầm |
| 3:56 | S33 → S34 | **MN**: Tập sau: trưởng ban quản trị chung cư cắt nước ép cư dân đóng phí. Có một hộ ở hầm B3 nộp đủ tiền từ ngày xây móng. | "TẬP SAU" · whoosh |
| 4:06 | S06 | **MN**: Bấm đăng ký đi. Nhà mày có giếng cũ thì nhớ hỏi bà trước khi xây bể bơi. Bà tính phí tư vấn đấy. | "ĐĂNG KÝ" · mõ CỘC |

## SHORTS

### SH1 — TRỌN — Bể năm sao lạnh như giếng

- **MN**: Bể bơi năm sao. Mặt nước phẳng như gương. Thế cái bóng dưới đáy kia dài bao nhiêu? (J02)
- **MN**: Nước mười hai độ. Clo đủ liều mà nước vẫn trong. Máy sưởi chạy hết công suất. (J07)
- **TIEN**: Nước giếng đâu ra? Bể nối nước máy cơ mà! (J06)
- **MN**: Giếng không được thở ở chỗ cũ. Nó tìm cửa gần nhất. Dưới bể là ống thoát đáy. (J01)
- **MN**: Bể mà có hai tính cách thì chắc cần thêm phí hội viên. (J01)
- *(không lời, 0.8 s)* (J02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH2 — TRỌN — Tiết kiệm một cái ống tre

- **TIEN**: Thở gì, giếng chứ có phải người. Đổ kín cho chắc. (J06)
- **MN**: Cụ Thơm nói tục cũ: lấp giếng thì chừa lỗ thở. Tiến nghe xong quyết định tiết kiệm được một cái ống tre. (S26)
- **MN**: Giếng không được thở ở chỗ cũ. Nó tìm cửa gần nhất. Dưới bể là ống thoát đáy. (J01)
- **MN**: Tiết kiệm được cái ống tre, giờ đội xây hồ sơ nó thành đường dẫn ưu tiên. (J01)
- *(không lời, 0.8 s)* (J02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH3 — TRỌN — Bóng dài hơn bể

- **MN**: Đêm xuống, Tiến ra kiểm tra. Đèn bể bật. Mặt nước phẳng lặng. (J01)
- **MN**: Dưới đáy sâu một mét hai, một cái bóng dài chậm rãi uốn một vòng quanh bể. (J08)
- **MN**: Nó dài hơn cả bề ngang bể. Mặt nước không gợn một vết. (J08)
- **MN**: Dài thế chắc chủ đầu tư tính thêm diện tích sử dụng. (J08)
- *(không lời, 0.8 s)* (J09)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH4 — TRỌN — Giếng tự tìm cửa

- **TIEN**: Bịt ống thoát lại. Ngay. (J06)
- **MN**: Tiến cho bịt ống. Sáng ra, sàn quanh bể nứt một đường, nước rỉ lên qua kẽ gạch. (J07)
- **MN**: Đến hai giờ sáng, bể đã cạn. Tiến đứng giữa cái hố xanh, nhìn đồng hồ. Còn sáu tiếng. Không có nước, không có khai trương. (J01)
- **MN**: Rồi nước tự dâng lên. Trong vắt. Lạnh buốt. Tiến hết cách. (J01)
- **MN**: Bể tự làm đầy, còn kế hoạch của Tiến thì tự rút vốn. (J01)
- *(không lời, 0.8 s)* (J01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH5 — TRỌN — Năm trăm nghìn một gầu

- **MN**: Năm giờ sáng, dân làng xách xô lên. Cụ Thơm kéo gầu. Nước giếng ngọt như xưa. (J11)
- **TIEN**: Từ tám giờ, khách trải nghiệm múc nước giếng cổ chữa lành. Năm trăm nghìn một gầu. Kín lịch tới tháng sau. (J06)
- **MN**: Làng gánh miễn phí. Khách trả năm trăm nghìn để kéo đúng cái gầu ấy. Ông thần dưới giếng chắc đang cười. Cười nghe như nước sôi. (S33 → S34)
- **MN**: Tiến bán trải nghiệm, làng vẫn bán rau; ai cũng giữ đúng mạch kiếm tiền. (S33)
- *(không lời, 0.8 s)* (S34)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 — TRAILER — Cái bóng dưới đáy

- **MN**: Đêm xuống, Tiến ra kiểm tra. Đèn bể bật. Mặt nước phẳng lặng. (J01)
- **MN**: Dưới đáy sâu một mét hai, một cái bóng dài chậm rãi uốn một vòng quanh bể. (J08)
- **MN**: Nó dài hơn cả bề ngang bể. Mặt nước không gợn một vết. (J08)
- **MN**: Nước yên đến mức đèn bể soi rõ cả cái bóng không thuộc về ai trên bờ. (J08)
- **MN**: Còn sáu tiếng nữa là lễ khai trương; dưới đó, thứ gì đang thở? (J09)

### SH7 — TRAILER — Ai giữ được bể?

- **MN**: Lễ khai trương lúc tám giờ. Bể lạnh, khách đặt cọc, cả làng thì đang xách xô lên đồi. (J11)
- **TIEN**: Khoan lại giếng. Đúng chỗ cũ. Mở cửa cho làng lúc năm giờ. (J06)
- **MN**: Từ trong sảnh vang lên một tiếng khoan, rồi cả nền gạch rung lên. (J12)
- **MN**: Tiến vừa mở cửa cho ai, hay mở thứ gì dưới chân mình? (J12)
- **MN**: Trước tám giờ, cả resort sẽ biết ai mới là chủ cái bể này. (J01)

## Hình

Tận dụng: B02, S01, S26, S33, S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | Dùng trong v3 |
|---|---|---|
| J01 | Bể bơi vô cực trên đồi nhìn xuống thung lũng; bản đêm có đèn xanh, bản ngày có khách | Có |
| J02 | Cận mặt nước phẳng như gương, hơi lạnh bốc mờ dưới đèn | Có |
| J03 | Giếng cổ đầu dốc, thành đá rêu phong, cây si, ròng rọc gỗ, người gánh nước | Có |
| J04 | Cụ Thơm áo nâu, khăn mỏ quạ, tay kéo gầu nước, mặt hiền | Có |
| J05 | Bản phối cảnh resort trên giấy, bể bơi vô cực, sảnh kính, chỗ giếng đánh dấu | Có |
| J06 | Ông Tiến áo polo, kính râm cài cổ áo, tay chỉ bản vẽ | Có |
| J07 | Kỹ thuật viên nhìn nhiệt kế nhúng mép bể, mặt khó hiểu | Có |
| J08 | Nhìn từ trên xuống bể đêm; bóng dài dưới đáy, mặt nước phẳng | Có |
| J09 | Cận dưới nước, đôi mắt vàng lớn, không thấy rõ đầu | Có |
| J10 | Nước tràn qua mép vô cực, chảy xuống con mương đá cũ về làng | Không |
| J11 | Sáng sớm, dân làng xách xô xếp hàng bên mép bể, múc nước | Có |
| J12 | Sảnh resort, miệng giếng khoan lại, ống thở cạnh thành giếng, dân làng gánh nước | Có |

## Lịch

| Nội dung | Lịch đăng |
|---|---|
| LONG | Thứ Hai 22/02 18:00 (+07) |
| SH1 | Thứ Hai 22/02 19:00 (+07) |
| SH2 | Thứ Ba 23/02 11:30 (+07) |
| SH3 | Thứ Ba 23/02 19:00 (+07) |
| SH4 | Thứ Tư 24/02 11:30 (+07) |
| SH5 | Thứ Tư 24/02 19:00 (+07) |
| SH6 | Thứ Năm 25/02 11:30 (+07) |
| SH7 | Thứ Năm 25/02 19:00 (+07) |
