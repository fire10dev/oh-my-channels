# Dự án 63 — Cá Ông "Được cứu" (v3, 2026-11-24)

- **Thiết lập Đồng hồ + Cái giá cụ thể**: Hạn chót trước 4:00 sáng khi tâm bão đổ bộ; nếu không vào bờ kịp thì 13 mạng người làm mồi cho biển dữ; cái giá của ông Tư: mất trắng uy danh và phơi bày tội trộm vây trước toàn thể dân làng.
- **Xây dựng 3 nấc leo thang chủ động**: Mắc lưới đáy ráng rồ ga giật cáp vét mẻ cuối → Máy dò cá báo bóng đen chắn đáy, nước ngập buồng máy vẫn cấm khấn vái, ép vượt luồng → Tàu lật chìm giữa bão, trôi dạt biển đen tuyệt vọng đối mặt khối đen trồi lên.
- **Cắt bỏ chi tiết Ma Nó spoil trước cú lật**: Bỏ câu răn dạy lộ kết "Ông không trả thù ai. Ông cứu...", để sự trớ trêu của việc được chính Đấng mình xúc phạm cứu mạng tự phát huy sức nặng trào phúng.
- **Đẩy cao điểm thấp nhất & khoảnh khắc rợn**: 13 mạng người chìm tàu trôi nổi giữa biển đêm buốt lạnh, khối đen khổng lồ trồi lên nuốt trọn tầm nhìn đúng lúc ông Tư nhắm mắt chờ bị xé xác đền tội.
- **Siết chặt độ dài thoại chuẩn 580 chữ** (v2 thừa gần 700 chữ), chia bảng cảnh rành mạch, chuẩn hóa cú pháp thoại và SFX.
- **Viết mới hệ thống 7 Shorts** (5 TRỌN + 2 TRAILER), bổ sung pop-up tên ma và teaser tập sau đúng lịch Thứ Năm.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Kẻ vừa tận diệt biển vừa trộm vây Cá Ông sẽ bị trừng phạt ra sao khi con tàu giã cào chìm nghỉm giữa tâm bão đêm?
- **Đồng hồ + cái giá**: 4:00 sáng ngày giỗ tròn một năm Cá Ông — thời điểm bão giật cấp 12 quét qua. Không vào bờ kịp thì bỏ mạng đáy biển; nhưng cố chấp cào vét thì đối mặt với tội lỗi năm xưa.
- **3 nấc leo thang**:
  1. *Nấc 1*: Lưới cào mắc rạn giữa giông lớn, bạn thuyền xin cắt cáp bỏ lưới chạy bão; ông Tư chửi bới, ép rồ ga tời vét mẻ cuối.
  2. *Nấc 2*: Máy dò cá hiện vệt đen chắn đáy, máy tàu nghẹt nước, bạn thuyền quỳ lạy xin Cá Ông tha mạng; ông Tư gạt phăng, cấm nhắc tên Ông, ép thợ máy tát nước lao qua.
  3. *Nấc 3 (Nước liều)*: Tàu lật úp, 13 người rơi xuống biển đen trôi dạt giữa sóng dữ, đối mặt với khối đen khổng lồ trồi lên nuốt trọn tầm nhìn.
- **Điểm thấp nhất**: Tàu chìm nghỉm, mất hết liên lạc, 13 người kiệt sức trôi dạt giữa biển đêm lạnh buốt, khối đen khổng lồ trồi lên ngay dưới chân; ông Tư nhắm mắt chờ bị nghiền nát trả thù.
- **Cú lật (Ai chọn gì, trả giá gì)**: Cá Ông không nuốt chửng mà nâng lưng chở trọn 13 người vào bờ; ông Tư chọn ngoan cố tham tiền để rồi nhận lại sự cứu rỗi công khai trước mặt cả làng trong ngày giỗ Ông. Trả giá: mất sạch mặt mũi, cả đời ngậm đắng nuốt cay quét lăng chuộc tội.
- **Khoảnh khắc rợn duy nhất**: 1:18 — Màn hình máy dò cá hiện khối đen dài hơn con tàu, máy nổ lịm dần như bị hút cạn, rồi một hơi thở "phù…" trầm dài xé toang mặt nước, phun bụi nước mặn phủ trắng mặt ông Tư.
- **Câu kết**: "Bị phạt thì còn cãi được. Được cứu… thì cãi vào đâu?"

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (dẫn chuyện trào phúng, châm biếm) | B02, S01, S06, S26, S33, S34 | Thiện Minh | atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25 |
| TU | Ông Tư "Cào" (chủ tàu giã cào hách dịch, tham tiền) | O04 | Adam bựa | atempo=1.02,asetrate=48000*0.96,aresample=48000 |
| BAN | Út Sơn (bạn thuyền trẻ, biết sợ biển) | O05 | Hải Đăng | atempo=1.05,anull |
| CU | Bà Chín (giữ lăng Ông, thâm trầm, sắc sảo) | O07 | Ngọc Huyền | atempo=0.95,asetrate=48000*0.95,aresample=48000 |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "TU": {"preset": "Adam bựa", "fx": "atempo=1.02,asetrate=48000*0.96,aresample=48000"}, "BAN": {"preset": "Hải Đăng", "fx": "atempo=1.05,anull"}, "CU": {"preset": "Ngọc Huyền", "fx": "atempo=0.95,asetrate=48000*0.95,aresample=48000"}}
```

## LONG (580 chữ lời thoại, ≈3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | O01 | *(không lời, 2.5 s)* | "NGOÀI KHƠI · 2:00 SÁNG" · maytau · giobao |
| 0:02 | O02 | *(không lời, 1.5 s)* | maydo bip · maytau tat dan |
| 0:04 | O01 | **MN**: Ngoài khơi. Trước cơn giông. | nhac tat |
| 0:06 | O08 | *(không lời, 2.0 s)* | "PHÙ…" · phuhoi · mococ |
| 0:08 | S01 → S26 | **MN**: Lại mò vào à? Đi biển, biết dân biển sợ ai nhất không?<br>**MN**: Sợ Cá Ông. Nhất là kẻ lén xẻ trộm vây của Người đem bán. | "SỢ CÁ ÔNG" · coc · braam |
| 0:18 | O03 | **MN**: Ông Tư "Cào". Tàu giã cào vét sát bờ, cá to cá nhỏ cào tuốt. Lưới qua đâu, rạn nát tới đó. | "GIÃ CÀO TẬN DIỆT" · toicap |
| 0:28 | O04 | **TU**: Biển của chung, mình không vét đứa khác cũng cào. Băm bột cũng ra tiền! | xuatruot |
| 0:34 | O05 | **BAN**: Chú Tư, rạn nát hết rồi, năm sau anh em lấy gì đánh? |  |
| 0:38 | O04 | **TU**: Năm sau tính sau! | quat |
| 0:40 | S26 → O06 | **MN**: Năm ngoái Cá Ông lụy bãi, ông Tư lén xẻ trộm vây bán. Làng hỏi, ổng cãi bay: "Tao ngủ ở nhà, ai thấy đâu!" | "TRỘM VÂY CÁ ÔNG" · bassdown |
| 0:48 | O07 | **CU**: Làng lập lăng thờ mà lòng thắt lại. Chưa ai nói ra, nhưng biển thì nhớ mặt. | chuonglang |
| 0:54 | O01 | **MN**: Tròn một năm sau. Đài báo bốn giờ sáng bão đổ bộ, các tàu đều quay vào bờ. | "HẠN: 4:00 SÁNG" · "BÃO ĐỔ BỘ" · tick |
| 1:02 | O03 | **MN**: Riêng ông Tư vẫn ép bạn thuyền thả mẻ chót sát rạn ngầm gỡ vốn. | "MẺ CÀO CHÓT" |
| 1:08 | O05 | **BAN**: Lưới kẹt rạn rồi chú Tư! Giông tới nơi rồi, cắt cáp chạy thôi chú! | giolam |
| 1:13 | O04 | **TU**: Cắt là mất trắng! Tăng ga tời lên, giật tung rạn cho tao! | toirit |
| 1:18 | O02 | **MN**: Tời vừa rít, máy dò cá chớp giật. Vệt đen khổng lồ hiện dưới đáy, dài hơn con tàu, nằm im lìm. | "VỆT ĐEN KHỔNG LỒ" · maydo bipnhanh |
| 1:28 | O01 | **MN**: Tiếng máy nổ bỗng lịm dần, như bị miệng vực khổng lồ nuốt chửng. | mayoff · nhac tat |
| 1:33 | O08 | *(không lời, 1.8 s)* | nhac tat |
| 1:35 | O08 | **MN**: Sát mạn tàu, hơi thở phù trầm dài xé toang mặt nước. Bụi nước mặn táp đẫm mặt ông Tư. | "PHÙ…" · phuhoi2 · nhac tat |
| 1:43 | O05 | **BAN**: Cá… Cá Ông! Chú Tư ơi, lạy Ông đi! Cầu Ông tha mạng! | runso · nhac tat |
| 1:47 | O04 | **TU**: Câm mồm! Nước tràn khoang rồi, tát mau! Rồ ga vượt qua nó cho tao! | cauda · nuoctran |
| 1:52 | O09 | **MN**: Ba giờ sáng. Bão tới sớm, sóng bốn mét bẻ gãy bánh lái. Con tàu lật úp trong chớp mắt. | "3:00 SÁNG · LẬT TÀU" · songlon · crush |
| 1:59 | O09 | **BAN**: Tàu chìm rồi! Nhảy đi anh em! | hetlon |
| 2:01 | O04 | **TU**: Tiền của tao… chìm hết rồi! | songdap |
| 2:04 | O10 | **MN**: Mười ba người rơi xuống biển đen ngòm. Sóng quăng quật, cái lạnh buốt cắt da rút cạn sức lực. | "13 NGƯỜI CHÌM BIỂN" · nhac tat |
| 2:12 | O04 | **MN**: Giữa bóng tối, khối đen ấy trồi lên. Ông Tư nhắm nghiền mắt chờ cú quẫy đuôi xé xác đền tội. | "CHỜ ĐỀN TỘI" · bassdown · nhac tat |
| 2:20 | O10 | **MN**: Nhưng không có cú đập nào. Tấm lưng khổng lồ nhẹ trồi lên, nâng trọn mười ba người khỏi sóng dữ. | "TẤM LƯNG CỨU MẠNG" · amap |
| 2:27 | O05 | **BAN**: Sống rồi… Ông đưa mình về bờ… | khoc |
| 2:30 | O04 | **MN**: Tấm lưng đen lướt trong bão. Ông Tư nằm sóng xoài trên da nhám, run bắn, không dám mở mắt. | "RUN BẮN" |
| 2:38 | O06 | **MN**: Bốn giờ sáng, sóng êm dần. Mười ba người dạt vào bờ cát, đúng bãi năm ngoái xác Ông từng nằm. | "4:00 SÁNG" · "ĐÚNG BÃI NĂM NGOÁI" |
| 2:44 | O06 | **MN**: Làng chuẩn bị giỗ Ông, thấy người trôi vào liền ùa ra cứu. | langon |
| 2:48 | O05 | **BAN**: Cá Ông cứu tụi con! Ông cõng mười mấy dặm! Cõng cả… chú Tư! | "CÕNG CẢ CHÚ TƯ!" |
| 2:53 | S26 | **MN**: Mười hai bạn thuyền làm chứng. Năm ngoái ổng bảo không ai thấy. Năm nay, mười hai người thấy kẻ trộm vây được chính Ông cõng vào bờ. | "12 NGƯỜI LÀM CHỨNG" |
| 3:02 | O04 | **MN**: Cả làng lặng phắc. Không ai chửi mắng. Mấy trăm ánh mắt chỉ nhìn trừng trừng vào ông Tư đang quỳ sụp dưới cát. | "CHỈ NHÌN" · imlang |
| 3:10 | O07 | **MN**: Ông Tư bán tàu, gom tiền sửa sang lăng Ông. Cứ rằm mùng một lại thấy ông lúi húi quét sân. | "BÁN TÀU · QUÉT LĂNG" · chổi |
| 3:17 | O07 | **CU**: Giờ ông Tư quét lăng sạch nhất làng. Vì mỗi nhát chổi, cả làng đều đứng nhìn. | chuonglang |
| 3:22 | S33 → S34 | **MN**: Bị phạt thì còn cãi được. Được kẻ mình hại cứu mạng… thì cãi vào đâu? | "CÃI VÀO ĐÂU?" · rithuoc |
| 3:27 | B02 | **MN**: Tập sau: xưởng may nợ lương công nhân, nửa đêm hai trăm cái máy may bỗng tự đạp tạch tạch. | "TẬP SAU" · whoosh |
| 3:32 | S06 | **MN**: Bấm đăng ký đi. Đi biển còn có người nhớ mặt. | "ĐĂNG KÝ" · coc |

## SHORTS
### SH1 (TRỌN)
- **MN**: Hồ sơ Cá Ông. Vị thần của biển cả, cứu người gặp nạn nhưng nhớ mặt kẻ ác. (S01) · pop "CÁ ÔNG"
- **MN**: Một. Ngư dân miền biển thờ Cá Ông. Thấy Ông lụy dạt bờ là cả làng để tang, lập lăng thờ. (O07)
- **MN**: Hai. Nhưng có kẻ thấy Ông lụy lại lén xẻ trộm vây đem bán lấy tiền. (O06) · pop "TRỘM VÂY"
- **TU**: Tao ngủ ở nhà, ai thấy đâu mà đổ oan! (O04)
- **MN**: Ba. Không ai thấy, nhưng đúng một năm sau, tàu của ổng chìm giữa tâm bão. (O09)
- **MN**: Đoán xem ai đến vớt ổng lên? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRỌN)
- **MN**: Cách một chủ tàu giã cào đối đãi với biển cả. (O03) · pop "TÀU GIÃ CÀO"
- **MN**: Tàu giã cào chuyên vét sát bờ, từ cá to đến cá con bằng đầu đũa. Lưới đi qua đâu, rạn vỡ tới đó. (O03)
- **BAN**: Chú Tư, rạn nát hết rồi, năm sau anh em lấy gì đánh? (O05)
- **TU**: Năm sau tính sau! (O04)
- **MN**: Đến khi bão ập tới kẹt lưới, bạn thuyền van xin cắt cáp bỏ của chạy lấy người. (O01)
- **TU**: Cắt là mất trắng! Tăng ga tời lên, giật tung rạn cho tao! (O04) · pop "GIẬT TUNG RẠN"
- **MN**: Vét cạn của biển thì biển sẽ tính sổ. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 (TRAILER)
- **MN**: Nửa đêm ngoài khơi, máy dò cá bỗng hiện một vệt đen khổng lồ. (O02) · pop "VỆT ĐEN KHỔNG LỒ"
- **MN**: Dài hơn cả con tàu. Nằm im lìm ngay dưới đáy. (O02)
- **MN**: Tiếng máy nổ bỗng dưng lịm dần, như bị một miệng vực khổng lồ nuốt chửng. (O01)
- **MN**: Rồi sát mạn tàu, một hơi thở phù trầm dài xé toang mặt nước. Bụi nước mặn phun mù mịt, táp ướt đẫm mặt ông Tư. (O08) · pop "HƠI THỞ CÁ ÔNG"
- **BAN**: Cá… Cá Ông! Chú Tư ơi, lạy Ông đi! Cầu Ông tha mạng! (O05)
- **TU**: Câm mồm! Nước tràn khoang rồi, rồ hết ga vượt qua nó cho tao! (O04)
- **MN**: Con tàu ấy liệu có thoát khỏi bàn tay của biển? Bản đầy đủ, link dưới. (S34)

### SH4 (TRỌN)
- **MN**: Khi con tàu chìm giữa tâm bão, tiền bạc thành giấy vụn. (O09) · pop "CHÌM TÀU"
- **MN**: Ba giờ sáng, bão ập tới sớm, sóng cao bốn mét bẻ gãy bánh lái. Con tàu giã cào lật úp trong chớp mắt. (O09)
- **BAN**: Tàu chìm rồi! Nhảy đi anh em! (O09)
- **TU**: Tiền của tao… chìm hết rồi! (O04)
- **MN**: Mười ba người rơi xuống lòng biển đen ngòm, sóng quăng quật, cái lạnh buốt cắt da rút cạn sức lực. (O10)
- **MN**: Dưới chân họ, một khối đen khổng lồ trồi lên. Ai cũng tưởng đó là mồ chôn đáy biển. (O10) · pop "ĐÁY BIỂN"
- **MN**: Nhưng thứ trồi lên lại là một phép màu cay đắng. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN)
- **MN**: Cú lật kinh hoàng nhất: Được kẻ mình hại cứu mạng. (O10) · pop "CÁ ÔNG CỨU"
- **MN**: Tàu chìm, tấm lưng khổng lồ nhẹ trồi lên nâng mười ba người khỏi sóng dữ. (O10)
- **BAN**: Sống rồi… Ông đưa mình về bờ… Cõng cả… chú Tư! (O05)
- **MN**: Mười ba người dạt vào đúng bãi cát năm ngoái xác Cá Ông từng nằm. (O06)
- **MN**: Năm ngoái ổng chối bay. Năm nay mười hai người thấy kẻ trộm vây được chính Ông cứu. (S26) · pop "12 NGƯỜI THẤY"
- **MN**: Cả làng lặng phắc, chỉ đứng nhìn trừng trừng. (O04)
- **MN**: Bị phạt thì còn cãi được, được cứu thì cãi vào đâu? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 (TRAILER)
- **MN**: Rạng sáng sau cơn bão, cả làng chài chuẩn bị làm lễ giỗ Cá Ông. (O07) · pop "LỄ GIỖ CÁ ÔNG"
- **CU**: Làng lập lăng thờ mà lòng thắt lại. Chưa ai nói ra, nhưng biển thì nhớ mặt. (O07)
- **MN**: Đột nhiên ngoài bãi cát, mười ba người trôi dạt ùa vào bờ. (O06)
- **BAN**: Cá Ông cứu tụi con! Ông cõng mười mấy dặm! Cõng cả… chú Tư! (O05)
- **MN**: Đúng cái bãi cát năm ngoái có kẻ lén xẻ trộm vây Ông đem bán. (O06) · pop "BÃI CÁT NĂM NGOÁI"
- **MN**: Cả làng sẽ làm gì kẻ vừa được thần linh cứu mạng? Bản đầy đủ, link dưới. (S26)

### SH7 (TRỌN)
- **MN**: Cái giá cay đắng của kẻ lấy trộm vây Cá Ông. (O07) · pop "QUÉT LĂNG ÔNG"
- **MN**: Ông Tư bán tàu giã cào, đem toàn bộ tiền góp sửa sang lăng Ông. (O07)
- **MN**: Cứ ngày rằm mùng một là người ta thấy ông lúi húi quét sân lăng. (O07)
- **CU**: Giờ ông Tư quét lăng sạch nhất làng. Vì mỗi nhát chổi, cả làng đều đứng nhìn. (O07) · pop "CẢ LÀNG NHÌN"
- **MN**: Bị phạt thì còn cãi được. Được cứu… thì cãi vào đâu? (S33)
- **MN**: Đi biển nhớ lấy, ngoài khơi có Người nhớ mặt. Tao kể ở bản đầy đủ, link dưới. (S06)

## Hình
Tái sử dụng: B02 + ep01 S01/S26/S33/S34/S06 (Ma Nó).

### Ảnh vẽ mới (10 ảnh, tỉ lệ 16:9)
| Mã | Mô tả cảnh | Dùng trong v3 |
|---|---|---|
| O01 | Tàu cá giã cào đêm ngoài khơi, biển đen, mây giông thấp, đèn tàu vàng hắt xuống sóng | Có |
| O02 | Cận màn hình máy dò cá trong cabin: một khối đen khổng lồ nằm im dưới hình con tàu | Có |
| O03 | Tàu giã cào kéo lưới đáy sát bờ, lưới kéo lên đầy cá con lẫn san hô vỡ vụn | Có |
| O04 | Cận ông Tư áo mưa vàng, nón kết, da sạm; bản hoảng loạn trên tàu, bản nằm run trên lưng cá, bản quỳ sụp trên cát | Có |
| O05 | Cận Út Sơn bạn thuyền trẻ, áo phao; bản sợ hãi van xin, bản bám lưng cá khóc mừng sống sót | Có |
| O06 | Bãi biển làng chài rạng sáng: bản xa xác cá dạt bờ; bản mười ba người dạt bãi, cả làng ùa ra vây quanh | Có |
| O07 | Lăng Ông trong làng chài: mái ngói, bàn thờ; bà Chín quét sân; bản sau ông Tư quét sân, mái mới sửa | Có |
| O08 | Cận mạn tàu ban đêm, bụi nước phun lên mù mịt như mưa xé rách bóng tối, phủ ướt boong | Có |
| O09 | Giông lớn, sóng cao bốn mét phủ boong, tàu giã cào nghiêng lật, người mặc áo phao nhảy xuống biển | Có |
| O10 | Dưới biển tối, một tấm lưng cá voi khổng lồ đen bóng trồi lên nâng mười ba người trôi dạt rẽ sóng vào bờ | Có |

## Lịch
- **LONG**: Thứ Hai 28/06 18:00 (+07)
- **SH1**: Thứ Hai 28/06 19:00 (+07)
- **SH2**: Thứ Ba 29/06 11:30 (+07)
- **SH3**: Thứ Ba 29/06 19:00 (+07)
- **SH4**: Thứ Tư 30/06 11:30 (+07)
- **SH5**: Thứ Tư 30/06 19:00 (+07)
- **SH6**: Thứ Năm 01/07 11:30 (+07)
- **SH7**: Thứ Năm 01/07 19:00 (+07)
