# Dự án 22 — Ma đòi lì xì "Đứa cháu thứ bốn mươi hai" (v3, 2026-11-24)

- Rút gọn LONG xuống khoảng 580 chữ lời thoại, giữ nguyên mạch chuyện và ảnh đã chọn.
- Bổ sung PUNCH riêng trước câu chỉ link cho từng short TRỌN.
- Nới SH1, SH4, SH6 và SH7 để đạt độ dài dựng 30–40 giây.
- Giữ đồng hồ hết mùng ba, ba nấc leo thang, điểm thấp và cú lật do Cún chọn trả giá.
- Giữ teaser Thứ Năm về ông Thổ Địa và câu đùa kêu đăng ký của Ma Nó.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Cún có khiến bác Cả tự tay cho lì xì thật trước khi hết mùng ba mà không để bác thoát bằng cách đuổi mình đi?
- **Đồng hồ / cái giá:** Hết mùng ba, Cún phải rời nhà thờ họ tay không; lời hứa năm sau bị cắt. Bác Cả phải mất ba mươi triệu hoặc công khai bao lì xì vốn nhét giấy báo.
- **Ba nấc leo thang:** Cún xin lì xì trước mặt cả họ, bị đưa bao giấy báo; bám theo bác qua các nhà và hỏi ngược lương, bác vẫn lảng; dồn bác vào lựa chọn giữ tiền hay thể diện, bác định đuổi Cún nhưng không dám gọi người làm chứng.
- **Điểm thấp:** Cuối mùng hai, bác Cả nắm tay nắm cửa định đuổi Cún. Cả họ đang quay điện thoại; gọi họ lại đồng nghĩa bí mật bao giấy báo có thể lộ.
- **Cú lật:** Cún chọn che mắt bác để bác tưởng đang nhét giấy báo, nhưng để tay bác rút tiền thật từ cọc ba mươi triệu. Cún trả giá bằng việc rời đi tay không khi hết mùng ba; bác mất tiền và không dám đòi lại vì phải thú nhận ý định ban đầu.
- **Khoảnh khắc rợn:** Ảnh chụp sân nhà thờ họ có bốn mươi hai người dù ngoài sân chỉ đếm được bốn mươi mốt; người thừa ở hiên nhìn thẳng bác Cả.
- **Câu kết:** Bác Cả được khen hào phóng đến hết Tết; Ma Nó đùa về lì xì, giới thiệu tập Thứ Năm: ông Thổ Địa có ý kiến, rồi kêu đăng ký.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| TAN | Bác Cả Tân, trưởng họ | L04 | Thiền Tâm Đức | `atempo=1.05` |
| CUN | Cún, vong người lớn lang thang | L02 | Adam bựa | `asetrate=48000*1.03,aresample=48000,aecho=0.8:0.4:30:0.2` |
| NGOC | Ngọc, cháu họ | L06 | Ngọc Huyền | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "TAN": {"preset": "Thiền Tâm Đức", "fx": "atempo=1.05"}, "CUN": {"preset": "Adam bựa", "fx": "asetrate=48000*1.03,aresample=48000,aecho=0.8:0.4:30:0.2"}, "NGOC": {"preset": "Ngọc Huyền", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | L05 | *(không lời, 2 s)* | Bao lì xì bị xé · giấy báo rơi · tiếng cười nói Tết tắt phụt |
| 0:02 | L04 | **TAN**: Thằng kia! Ai cho bóc trước mặt bác? |  |
| 0:05 | L02 | **CUN**: Bác ơi, lì xì cháu đi. Bao thật ấy. | Mõ cộc nhẹ |
| 0:09 | S01 → S26 | **MN**: Lại mò vào à? Mùng ba rồi, có ai hỏi lương mày chưa? Khách hôm nay hỏi lại. | "ĐỨA CHÁU THỨ 42" · mõ cộc |
| 0:16 | L03 | **MN**: Nhà thờ họ chật như toa tàu ngày giáp Tết. Bốn đời, bốn mươi mốt người. Ghế giữa dành cho bác Cả Tân, nhớ lương từng đứa nhưng quên tên một nửa. | "41 NGƯỜI" · cười nói Tết |
| 0:27 | L04 | **TAN**: Cháu Ngọc, lương bao nhiêu rồi? Mười lăm triệu? Cũng được. Bằng bác tiêu vặt mấy hôm Tết thôi. Cố lên nhé! |  |
| 0:36 | L04 | **TAN**: Bác rút ba mươi triệu tiền mới cho vui tay. Lì xì quan trọng cái bao. Có lộc là được, đứa nào bóc trước mặt bác là mất lộc. | Tiền phành phạch |
| 0:46 | L05 | **MN**: Bao đỏ dày cộp. Bên trong, giấy báo gấp tư. Bác gọi là giữ nếp. Mấy đứa cháu gọi khẽ hơn: giữ tiền. | "GIẤY BÁO · GẤP TƯ" |
| 0:55 | L02 → L03 | **CUN**: Chú ơi, lì xì cháu đi. Cô ơi, cháu chúc cô năm mới. Bác ơi, cháu đứng đây từ nãy rồi. |  |
| 1:04 | L06 | **NGOC**: Con nhà bác Hai à? |  |
| 1:07 | S26 | **MN**: Bác Hai tưởng con chú Ba. Chú Ba tưởng cháu cô Út. Cún lọt vào như cái tên trong danh sách chưa ai mở. |  |
| 1:17 | L03 → L02 | **CUN**: Bác Cả ơi, cháu chúc bác khỏe mạnh, tiền vào như nước. Bác cho cháu một bao nhé? |  |
| 1:25 | L04 | **TAN**: Thằng này con ai? Thôi, đây, lấy lộc. Ra kia chơi, đừng bóc trước mặt bác. |  |
| 1:33 | L02 → L05 | **CUN**: Cháu bóc luôn nhé bác! Ơ, báo Tết năm ngoái này. Cháu đọc rồi. Bác lì xì cháu đi. | Xé bao · giấy sột soạt |
| 1:43 | L05 | **MN**: Một tờ giấy báo giữa bốn mươi mốt người. Bác không đỏ mặt vì bị lộ, mà vì bị lộ trước mặt. | Im 1 s |
| 1:53 | L04 | **TAN**: Nhầm bao. Năm nay nhiều việc quá. Ra kia, bác còn phải chúc Tết. |  |
| 2:00 | L07 | **MN**: Bác đi chúc Tết nhà nào, Cún theo nhà ấy. Bác ngồi uống trà, Cún đứng cạnh chìa tay. Sang nhà khác, cậu lại tới trước. | "MÙNG 1" |
| 2:10 | L02 | **CUN**: Bác ơi, lì xì cháu đi. Mà lương bác bao nhiêu hả bác? |  |
| 2:16 | L04 | **TAN**: Lương trưởng họ tính theo công đức. Không ghi trên giấy đâu. | Tiếng cười khúc khích |
| 2:22 | S26 | **MN**: Ba mươi năm bác hỏi người ta kiếm bao nhiêu. Bị hỏi lại, bác mới thấy câu đó chẳng vui như tưởng. |  |
| 2:31 | L02 → L07 | **CUN**: Cháu không đòi nhiều. Một bao thôi. Bao nào có tiền ấy. |  |
| 2:38 | L04 | **TAN**: Bác cho rồi. Mày tự bóc, tự làm mất lộc. |  |
| 2:43 | L02 | **CUN**: Giấy báo cũng có năm trăm nghìn hả bác? Để cháu đem đi đổi. |  |
| 2:50 | L01 | **MN**: Mùng hai, cả họ đứng vào sân chụp ảnh. Máy hẹn giờ kêu ba tiếng. Ngọc đếm ngoài sân: bốn mươi mốt. | Tít tít tít · tách |
| 3:00 | L06 | **NGOC**: Sao trong ảnh có bốn mươi hai người? |  |
| 3:04 | L01 | **MN**: Mép phải, ở hiên. Thanh niên sơ mi trắng cũ, cười tươi, cầm bao lì xì. Ngoài sân, ai cũng nhớ hiên trống. | Nhạc xuân dừng |
| 3:14 | L01 | **MN**: Phóng to ảnh. Nó không nhìn ống kính. Nó nhìn bác Cả. | Im 2 s |
| 3:20 | L04 | **TAN**: Thằng kia, về đi. Bác gọi cả họ ra đây, nói rõ mày là ai. |  |
| 3:27 | L02 | **CUN**: Gọi đi bác. Rồi bác giải thích vì sao bao cháu toàn giấy báo. |  |
| 3:34 | L04 | **TAN**: … | Tiếng cười nói xa xa · nhạc tắt |
| 3:38 | L04 → L09 | **MN**: Đến đây bác mới thấy lối nào cũng mất mặt. Đuổi Cún, cậu có thể kể. Gọi cả họ, cái bao rỗng thành chuyện của cả họ. |  |
| 3:49 | L02 | **CUN**: Cháu cho bác chọn. Cứ nhét bao như mọi năm, cháu nhận lộc. Hoặc nói với mọi người năm nay bác không lì xì. |  |
| 4:00 | L04 | **TAN**: Bác… bác đã cho bao rồi. |  |
| 4:04 | L09 | **MN**: Cún chọn nước cuối. Cậu che mắt bác. Mắt bác thấy giấy báo; tay bác rút tiền thật từ cọc ba mươi triệu, nhét vào bao. | Sột soạt |
| 4:15 | L08 | **MN**: Đứa cháu bóc bao, reo lên. Năm trăm nghìn, tờ mới cứng. Chẳng ai thấy phép màu. Chỉ thấy bác Cả hào phóng. |  |
| 4:26 | L06 | **NGOC**: Bác Cả năm nay rộng tay quá! Cả họ chụp ảnh bác đi! | Vỗ tay |
| 4:32 | L04 | **TAN**: Ờ… lộc của cả họ. Cứ… chụp đi. |  |
| 4:38 | S26 | **MN**: Bác có thể đòi lại. Nhưng phải thú nhận cái bao kia vốn định cho giấy báo. Bác đành cười, để lời khen chạy vòng quanh họ. |  |
| 4:49 | L09 | **MN**: Hết mùng ba, cọc tiền còn sợi thun. Cún rời nhà thờ họ tay không. Bác giữ tiếng thơm, ví nhẹ bằng lời hứa. | "HẾT MÙNG 3" |
| 5:00 | L02 | **CUN**: Bác ơi, lộc đi một vòng rồi mới về. Năm sau cháu lại đến nhé? |  |
| 5:07 | S33 → S34 | **MN**: Bác Cả được khen hào phóng đến tận rằm. Cái bao rỗng chắc năm sau bác để vào khung kính. |  |
| 5:16 | B02 | **MN**: Thứ Năm: đi lễ đầu năm, chen lấn nhét tiền lẻ vào tay tượng ông Thổ Địa. Ông Thổ Địa… có ý kiến. | "TẬP SAU · THỨ NĂM" · whoosh |
| 5:27 | S06 | **MN**: Bấm đăng ký đi. Coi như lì xì tao. Bao thật thì nhớ bỏ tiền. | "ĐĂNG KÝ" · mõ cộc |

## SHORTS

### SH1 — TRỌN · 9:16

- **CUN**: Bác ơi, lì xì cháu đi. Bao thật ấy. (L02) · pop "Cún"
- **TAN**: Thằng kia! Ai cho bóc trước mặt bác? (L04)
- **CUN**: Cháu bóc luôn nhé bác! Ơ, báo Tết năm ngoái này. Cháu đọc rồi. Bác lì xì cháu đi. (L02)
- **TAN**: Nhầm bao. Năm nay nhiều việc quá. Mày ra kia, bác còn phải chúc Tết. (L04)
- **MN**: Một tờ giấy báo giữa bốn mươi mốt người. Bác đỏ mặt vì bị lộ trước mặt. (L05)
- **MN**: Bác giữ tiền thì giỏi, giữ thể diện thì phải nhờ cái bao. (S26) · PUNCH
- *(không lời, 0.8 s)* (L05)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 — TRỌN · 9:16

- **TAN**: Cháu Ngọc, lương bao nhiêu rồi? Mười lăm triệu? Cũng được. Bằng bác tiêu vặt mấy hôm Tết thôi. Cố lên nhé! (L04)
- **TAN**: Bác rút ba mươi triệu tiền mới cho vui tay. (L04)
- **MN**: Bao đỏ dày cộp. Bên trong, giấy báo gấp tư. Bác Cả gọi thế là giữ nếp. (L05)
- **CUN**: Bác ơi, lì xì cháu đi. Mà lương bác bao nhiêu hả bác? (L02)
- **MN**: Ba mươi năm bác hỏi người ta kiếm bao nhiêu. Bị hỏi lại, bác mới thấy câu đó chẳng vui như tưởng. (S26)
- **MN**: Hỏi lương cả họ là truyền thống; bị hỏi lại là kiểm toán. (S26) · PUNCH
- *(không lời, 0.8 s)* (L07)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 — TRỌN · 9:16

- **CUN**: Bác ơi, lì xì cháu đi. Bao thật ấy. (L02) · pop "Cún"
- **TAN**: Thằng này con ai? Thôi, đây, lấy lộc. Ra kia chơi, đừng bóc trước mặt bác. (L04)
- **CUN**: Ơ, báo Tết năm ngoái này. Cháu đọc rồi. Bác lì xì cháu đi. (L02)
- **MN**: Một tờ giấy báo giữa bốn mươi mốt người. Bác đỏ mặt vì bị lộ trước mặt. (L05)
- **MN**: Nhà đông tới đâu, bao rỗng vẫn nhận được suất dự Tết. (S26) · PUNCH
- *(không lời, 0.8 s)* (L05)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 — TRỌN · 9:16

- **CUN**: Bác ơi, lì xì cháu đi. Mà lương bác bao nhiêu hả bác? (L02) · pop "Cún"
- **TAN**: Lương trưởng họ tính theo công đức. Không ghi trên giấy đâu. (L04)
- **MN**: Ba mươi năm bác hỏi người ta kiếm bao nhiêu. Bị hỏi lại, bác mới thấy câu đó chẳng vui như tưởng. (S26)
- **MN**: Công đức tính miệng, còn tiền Tết thì đếm bằng máy. (S26) · PUNCH
- *(không lời, 0.8 s)* (L07)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 — TRỌN · 9:16

- **MN**: Cún chọn nước cuối. Cậu che mắt bác. Mắt bác thấy giấy báo; tay bác rút tiền thật từ cọc ba mươi triệu, nhét vào bao. (L09)
- **MN**: Đứa cháu bóc bao, reo lên. Năm trăm nghìn, tờ mới cứng. Chẳng ai thấy phép màu. Chỉ thấy bác Cả hào phóng. (L08)
- **NGOC**: Bác Cả năm nay rộng tay quá! Cả họ chụp ảnh bác đi! (L06)
- **TAN**: Ờ… lộc của cả họ. Cứ… chụp đi. (L04)
- **MN**: Bác có thể đòi lại. Nhưng phải thú nhận cái bao kia vốn định cho giấy báo. (S26)
- **MN**: Tiền đi một vòng, tiếng thơm ở lại. Bác trả học phí bằng chính cọc lì xì. (S26) · PUNCH
- *(không lời, 0.8 s)* (L09)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 — TRAILER · 9:16

- **MN**: Nhà thờ họ chật như toa tàu ngày giáp Tết. Bốn đời, bốn mươi mốt người. Ghế giữa dành cho bác Cả Tân, nhớ lương từng đứa nhưng quên tên một nửa. (L03)
- **CUN**: Chú ơi, lì xì cháu đi. Cô ơi, cháu chúc cô năm mới. Bác ơi, cháu đứng đây từ nãy rồi. (L02) · pop "Cún"
- **NGOC**: Con nhà bác Hai à? (L06)
- **MN**: Bác Hai tưởng con chú Ba. Chú Ba tưởng cháu cô Út. Cún lọt vào như cái tên trong danh sách chưa ai mở. (S26)
- **MN**: Mùng hai, Ngọc đếm ngoài sân bốn mươi mốt người. Trong ảnh… (L01)
- *(không lời, 0.8 s)* (L01)

### SH7 — TRAILER · 9:16

- **MN**: Đến đây bác mới thấy lối nào cũng mất mặt. Đuổi Cún, cậu có thể kể. Gọi cả họ, cái bao rỗng thành chuyện của cả họ. (L04)
- **CUN**: Gọi đi bác. Rồi bác giải thích vì sao bao cháu toàn giấy báo. (L02) · pop "Cún"
- **TAN**: … (L04)
- **MN**: Cún chọn nước cuối. Cậu che mắt bác. Mắt bác thấy giấy báo; tay bác rút tiền thật từ cọc ba mươi triệu, nhét vào bao. (L09)
- **MN**: Có những bí mật tự chọn chủ nhân mới. Bác Cả chỉ cần mở mắt là biết mình vừa trả bao nhiêu. (L09)
- *(không lời, 0.8 s)* (L09)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | v3 dùng |
|---|---|---|
| L01 | Ảnh chụp cả họ ngày Tết ở sân nhà thờ họ, bốn thế hệ, khoảng bốn mươi người, áo dài, vest; ở hiên mép phải một thanh niên sơ mi trắng cũ cười tươi cầm bao lì xì, nhìn thẳng ống kính, hơi tái | ✓ |
| L02 | Cún cận: sơ mi trắng hơi cũ, tóc rẽ ngôi kiểu xưa, cười toe, tay chìa bao lì xì | ✓ |
| L03 | Phòng khách ngày Tết đông người, bác Cả ngồi ghế chủ giữa, cháu chắt xếp hàng, mâm mứt, cành đào | ✓ |
| L04 | Bác Cả Tân cận: vest bóng, cà vạt đỏ, giọng oang oang, tay cầm xấp bao lì xì | ✓ |
| L05 | Cận bao lì xì đỏ dày cộp bị xé, giấy báo gấp tư rơi ra | ✓ |
| L06 | Ngọc, cháu họ áo dài cách tân, cầm điện thoại đếm người trong ảnh, mặt ngơ | ✓ |
| L07 | Ngõ ngày Tết: bác Cả đi chúc Tết, phía sau Cún lẽo đẽo theo | ✓ |
| L08 | Cận một cháu khoảng 15 tuổi cầm bao lì xì nặng tay, mắt tròn ngạc nhiên | ✓ |
| L09 | Cận tay bác Cả: một tay cầm giấy báo gấp, tay kia nhét tờ tiền mới vào bao đỏ; cọc tiền mới vơi trên bàn | ✓ |

## Lịch

- **LONG:** Thứ Hai 08/02, 18:00 (+07).
- **SH1 — TRỌN:** Thứ Hai 08/02, 19:00 (+07).
- **SH2 — TRỌN:** Thứ Ba 09/02, 11:30 (+07).
- **SH3 — TRỌN:** Thứ Ba 09/02, 19:00 (+07).
- **SH4 — TRỌN:** Thứ Tư 10/02, 11:30 (+07).
- **SH5 — TRỌN:** Thứ Tư 10/02, 19:00 (+07).
- **SH6 — TRAILER:** Thứ Năm 11/02, 11:30 (+07).
- **SH7 — TRAILER:** Thứ Năm 11/02, 19:00 (+07).
