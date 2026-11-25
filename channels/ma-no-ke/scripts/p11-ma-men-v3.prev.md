# Dự án 11 — Ma men "Anh bao hết" (v3, 2026-11-24)

- Rút gọn LONG để nằm trong ngưỡng 560–600 chữ lời thoại.
- Bỏ ảnh B07 ngoài danh sách ảnh mới; teaser tập sau chuyển sang ảnh M04.
- Mở rộng SH1 và SH5, thêm punchline riêng trước câu chỉ link.
- Giữ ba nấc leo thang, hạn chót giao thừa và cú lật do Ma men chủ động nhận lời hứa.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Ma men có khiến Toàn phải chịu đúng luật “bao hết, người nhà” mà anh dùng để ép cả phòng uống không?
- **Đồng hồ / cái giá:** Trước thời khắc giao thừa, Ma men phải được chủ mâm nhận làm người nhà; nếu không, ông mất quyền uống ké ở bàn Toàn.
- **Ba nấc leo thang:** Ma men ngồi ghế thừa chờ được mời đích danh nhưng cả phòng làm ngơ → uống theo câu “anh bao hết” nhưng vẫn bị coi là khách → chọn nhận lời hứa “từ nay về sau là người nhà”.
- **Điểm thấp:** Mai về nhà đón giao thừa; Toàn tiếp tục ép cả phòng, còn Ma men sắp hết quyền uống ở mâm này.
- **Cú lật:** Ma men chủ động nhận lời hứa của Toàn và trả giá bằng việc phải uống trước phần Toàn mỗi lần anh nâng chén.
- **Khoảnh khắc rợn:** Sau tiếng đếm “ba, hai, một”, giọng sau lưng Toàn chậm nửa nhịp nói “…một”; chén đầy trên ghế thừa tự cạn.
- **Câu kết:** Toàn uống trà đá, nhân viên được về nhà; Ma Nó châm biếm chuyện chủ mâm uống trước và nhá tập căn hộ mã khóa đổi vào Thứ Năm.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó, giọng Thiện Minh, khô và cà khịa | B02, ep01 S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| TOAN | Anh Toàn, giám đốc kinh doanh, sơ mi trắng xắn tay, đồng hồ to, mặt đỏ, giọng sang sảng | M02 | Thiền Tâm Đức | `atempo=1.05` |
| MM | Ma men, ông khách áo dạ sờn, mũ len, dép nhựa, mũi đỏ, cười hiền, lè nhè; xưng “tao”, gọi “chú em” | M03 | Adam bựa | `atempo=0.90,aecho=0.8:0.5:40:0.2` |
| MAI | Mai, nhân viên mới, tóc buộc, áo len, không uống được | M05 | Ngọc Huyền | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "TOAN": {"preset": "Thiền Tâm Đức", "fx": "atempo=1.05"}, "MM": {"preset": "Adam bựa", "fx": "atempo=0.90,aecho=0.8:0.5:40:0.2"}, "MAI": {"preset": "Ngọc Huyền", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | M08 | *(không lời, 2 s)* | Quán nhậu ồn xa · tiếng cụng chén · nhạc tắt |
| 0:02 | M08 | **TOAN**: Ai… ai uống chén của tôi? | Chén chạm môi, chén đã cạn · im |
| 0:05 | M03 | **MM**: Người nhà uống trước mà, chú em. | Ghế nhựa khẽ kéo |
| 0:09 | S01 → S26 | **MN**: Lại mò vào à? Tất niên mà còn tỉnh thì ngồi xuống. Đêm nay có người bao hết. | Mõ CỘC |
| 0:15 | M04 | **MN**: Phòng kinh doanh vượt KPI. Sếp Toàn thưởng cho mọi người một mâm tiệc và quyền nghe sếp nói. | “VƯỢT KPI 2026” · dzô xa |
| 0:23 | M02 | **TOAN**: Ai không cạn là không nể anh. Không nể anh thì năm sau khỏi thưởng! | “KHÔNG CẠN = KHÔNG THƯỞNG” |
| 0:30 | M05 | **MAI**: Em không uống được ạ. Em xin phép cụng ly bằng nước. | Tiếng ly chạm nhẹ |
| 0:35 | M02 | **TOAN**: Không uống được thì tập! Anh ngày xưa cũng thế! | Đám đông cười gượng |
| 0:42 | S26 | **MN**: Có người tập mãi rồi ở lại bàn nhậu. Toàn gọi thế là đào tạo nhân sự. | Nhạc khựng |
| 0:51 | M01 | **MN**: Mâm đặt mười hai người. Nhà hàng kê mười ba ghế. Ghế cuối có ông khách áo dạ sờn, mũ len, dép nhựa. | Ghế nhựa kéo |
| 1:00 | M03 → M01 | **MN**: Không ai quen ông. Ai cũng tưởng khách của người khác. Hỏi ra thì phải mời, mà mời thêm lại sợ thiếu phần. |  |
| 1:11 | M02 | **TOAN**: Hôm nay anh bao hết! Ai ngồi mâm này, từ nay về sau là người nhà! Bác kia, cạn! | “ANH BAO HẾT” · cụng ly |
| 1:20 | M03 | **MM**: Chú em… mời tao đấy à? Mời là tao uống đấy nhá. | “MỜI ĐÍCH DANH” |
| 1:26 | M03 | **MM**: Chén này ngon. Lâu rồi mới có người nhìn thẳng vào tao mà mời. |  |
| 1:33 | S26 | **MN**: Dân gian gọi ông là ma men. Chén được mời đích danh, ông uống. Chén chủ mâm nhận bao, ông cũng uống. Chén đẩy qua vì ngại, ông không đụng. | “MỜI HOẶC BAO” |
| 1:44 | M06 | **MN**: Mười giờ. Mười một giờ. Nhân viên xin về từng người. Ông khách vẫn ngồi thẳng, chén được mời là cạn, mặt chẳng đỏ thêm. | Tích tắc · tiếng ghế kéo |
| 1:54 | M02 | **TOAN**: Bác uống khá! Thêm chai nữa! Anh không thua ai bao giờ! |  |
| 2:00 | M03 | **MM**: Tao uống từ năm bảy chín cơ. Chú em mới uống từ năm ngoái. |  |
| 2:06 | M05 → M03 | **MAI**: Bác uống giúp cháu chén này được không ạ? |  |
| 2:10 | M03 | **MM**: Cháu không mời tao. Cháu nhờ tao. Khác nhau đấy. Để đó, lát người ta lại bảo tao phá luật. | Nhạc ngừng một nhịp |
| 2:18 | M02 → M05 | **TOAN**: Mai ngồi lại! Tiệc phòng mình mà. Ai về trước là không nể anh. | Đồng hồ tích tắc rõ |
| 2:26 | M05 | **MAI**: Em xin phép về đón giao thừa với mẹ. Em không uống, cũng không muốn ai uống hộ. Chúc mọi người năm mới vui vẻ ạ. | Mai đứng dậy · tiếng ghế |
| 2:35 | M04 | **MN**: Còn mười phút sang năm mới. Mai về được. Mười một người khác vẫn đợi sếp cho phép. | “23:50” · tích tắc |
| 2:44 | M02 | **TOAN**: Cứ ngồi đi. Anh bao hết. Chén nào cũng tính vào anh. |  |
| 2:50 | M03 | **MM**: Chú em nói bao hết. Tao ngồi đây, tao uống. Luật đơn giản thế thôi. | Chén chạm bàn |
| 2:56 | M03 → M01 | **MM**: Nhưng tao còn thiếu một thứ. Một câu nhận người nhà. Không có câu đó, qua giao thừa tao lại thành khách của người khác. | Nhạc tắt |
| 3:06 | M02 | **TOAN**: Tôi bao cả mâm. Bao cả bác. Vậy vừa lòng chưa? | Đếm ngược xa bắt đầu |
| 3:13 | M04 | **MN**: Cả phòng đếm. Ba. Hai. Một. | Đám đông đếm ngược · nhạc tắt |
| 3:20 | M01 | **MM**: …một. | Chén đầy cạn trong 1 giây · im 2 giây |
| 3:25 | M02 | **TOAN**: Bác là khách của ai? |  |
| 3:29 | M03 | **MM**: Của chú em. Chú em vừa nhận tao làm người nhà. Từ nay về sau. | “TỪ NAY VỀ SAU” |
| 3:37 | M03 | **MM**: Tao chết năm bốn mươi hai tuổi. Không phải vì thích uống. Vì nể. | Nhạc tắt · “VÌ NỂ” |
| 3:44 | S26 | **MN**: Ma men không đòi mạng ai. Ông chỉ nhận đúng lời hứa của người vừa tự hào là bao hết. |  |
| 3:52 | M08 | **MN**: Từ đêm ấy, Toàn đi nhậu đâu cũng có ghế thừa. Anh nâng chén, tới môi đã cạn. Người nhà uống trước. | “CHỦ MÂM: 0 GIỌT” |
| 4:02 | M02 | **TOAN**: Rót! Rót nữa! |  |
| 4:05 | M03 | **MM**: Chú em bảo rồi đấy: chủ mâm cạn trước. Tao cạn hộ. | Cụng ly khẽ |
| 4:12 | M09 | **MN**: Toàn không say được nữa. Không say thì khó ép ai cạn. Năm sau phòng kinh doanh vẫn vượt KPI, tất niên uống trà đá. | Nhạc Tết nhẹ |
| 4:22 | M05 | **MAI**: Em đăng ký về nhà ăn giao thừa trước, năm nay được duyệt rồi ạ. | Tiếng cười nhẹ |
| 4:28 | S33 → S34 | **MN**: Tao mời ai, tao uống trước. Chủ mâm để khách uống hộ thì quản lý yếu. | Rít điếu cày |
| 4:38 | M04 | **MN**: Thứ Năm: căn hộ cho thuê sau tiệc năm mới, rác ngập tới cửa. Sáng ra sạch bong. Mã khóa cửa đã đổi. | “TẬP SAU · THỨ NĂM” · whoosh |
| 4:49 | S06 | **MN**: Bấm đăng ký đi. Biết đâu năm sau công ty mày thưởng… một bình trà đá. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN · Ai uống chén đấy? · 9:16 · 35 s

- **TOAN**: Ai… ai uống chén của tôi? (M08)
- **MM**: Người nhà uống trước mà, chú em. (M03) · pop "MA MEN"
- **MN**: Toàn nâng chén lên môi. Chén cạn trước khi chạm. Ông khách bên cạnh ngồi yên như người nhà lâu năm. (M08)
- **TOAN**: Bác là khách của ai? (M02)
- **MM**: Của chú em. Chú em vừa nhận tao làm người nhà. Từ nay về sau. (M03)
- **MN**: Chủ mâm giơ chén, người nhà uống trước. Quyền lợi nghe hấp dẫn cho tới lúc hóa đơn đến. (S26)
- *(không lời, 0.8 s)* (M03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN · Không cạn là khỏi thưởng · 9:16 · 35 s

- **TOAN**: Ai không cạn là không nể anh. Không nể anh thì năm sau khỏi thưởng! (M02)
- **MAI**: Em không uống được ạ. Em xin phép cụng ly bằng nước. (M05) · pop "MAI"
- **TOAN**: Không uống được thì tập! Anh ngày xưa cũng thế! (M02)
- **MN**: Có người tập mãi rồi ở lại bàn nhậu. Toàn gọi thế là đào tạo nhân sự. (S26)
- **MAI**: Em xin phép về đón giao thừa với mẹ. Em không uống, cũng không muốn ai uống hộ. (M05)
- **MN**: Chúc mừng Mai, lần đầu KPI biết đường về nhà. (M05)
- *(không lời, 0.8 s)* (M05)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN · Mâm mười hai người, mười ba ghế · 9:16 · 35 s

- **MN**: Mâm đặt mười hai người. Nhà hàng kê mười ba ghế. Ghế cuối có ông khách áo dạ sờn, mũ len, dép nhựa. (M01)
- **MN**: Không ai quen ông. Ai cũng tưởng khách của người khác. Hỏi ra thì phải mời, mà mời thêm lại sợ thiếu phần. (M03)
- **TOAN**: Hôm nay anh bao hết! Ai ngồi mâm này, từ nay về sau là người nhà! Bác kia, cạn! (M02)
- **MM**: Chú em… mời tao đấy à? Mời là tao uống đấy nhá. (M03) · pop "MA MEN"
- **MN**: Mười ba ghế, mười hai phần; phép chia này có vẻ không dành cho phòng kế toán. (M01)
- *(không lời, 0.8 s)* (M01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN · Mời và nhờ khác nhau · 9:16 · 35 s

- **MAI**: Bác uống giúp cháu chén này được không ạ? (M05) · pop "MAI"
- **MM**: Cháu không mời tao. Cháu nhờ tao. Khác nhau đấy. Để đó, lát người ta lại bảo tao phá luật. (M03) · pop "MA MEN"
- **MN**: Ma men chỉ uống chén có người mời đích danh, hoặc chén chủ mâm nhận bao. Đẩy qua vì ngại thì không tính. (S26)
- **TOAN**: Hôm nay anh bao hết! Ai ngồi mâm này, từ nay về sau là người nhà! (M02)
- **MN**: Còn chữ ký hợp đồng thì chắc sếp cũng bao luôn? (M02)
- *(không lời, 0.8 s)* (M03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN · Chậm nửa nhịp · 9:16 · 35 s

- **MN**: Cả phòng đếm. Ba. Hai. Một. (M04)
- **MM**: …một. (M01) · pop "MA MEN"
- **MN**: Chén trên ghế thừa đầy. Chớp mắt một cái, chén đã cạn. (M01)
- **TOAN**: Bác là khách của ai? (M02)
- **MM**: Của chú em. Chú em vừa nhận tao làm người nhà. Từ nay về sau. (M03)
- **MN**: Chủ mâm tưởng mình cầm cuộc chơi. Hóa ra cầm mỗi cái chén rỗng. (M02)
- *(không lời, 0.8 s)* (M03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER · Có ai ngồi ghế cuối? · 9:16 · 32 s

- **MN**: Mâm đặt mười hai người. Nhà hàng kê mười ba ghế. (M01)
- **TOAN**: Hôm nay anh bao hết! Ai ngồi mâm này, từ nay về sau là người nhà! (M02)
- **MM**: Chú em… mời tao đấy à? (M03) · pop "MA MEN"
- **MN**: Không ai trong phòng nhận ra ông khách ấy. Nhưng ông nghe rất rõ câu “từ nay về sau”. (S26)
- **TOAN**: Bác uống khá! Thêm chai nữa! (M02)
- **MM**: Tao uống từ năm bảy chín cơ. Chú em mới uống từ năm ngoái. (M03)
- **MN**: Qua giao thừa, ai mới là khách của ai? (M01)

### SH7 — TRAILER · Chủ mâm cạn trước · 9:16 · 34 s

- **MN**: Còn mười phút sang năm mới. Mai được về. Cả phòng vẫn đợi sếp cho phép. (M05)
- **MM**: Tao còn thiếu một thứ. Một câu nhận người nhà. (M03) · pop "MA MEN"
- **TOAN**: Tôi bao cả mâm. Bao cả bác. Vậy vừa lòng chưa? (M02)
- **MN**: Cả phòng đếm. Ba. Hai. Một. (M04)
- **MM**: …một. (M01)
- **MN**: Chén đầy trên ghế thừa cạn trong một giây. Người nhà uống trước. (M01)
- **TOAN**: Bác là khách của ai? (M02)
- **MN**: Câu trả lời ở bản đầy đủ, link dưới. (S06)

## Hình

Ảnh tái dùng: B02, ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA). Danh sách ảnh mới giữ theo v2; ảnh dùng trong v3 đánh dấu **Dùng**.

| Mã | Cảnh | V3 |
|---|---|---|
| M01 | Bàn tiệc tròn nhà hàng, khăn đỏ, 13 ghế nhựa đỏ; ghế cuối có một chén rượu đầy, bóng người mờ đội mũ len | Dùng |
| M02 | Anh Toàn, sơ mi trắng xắn tay, đồng hồ to, mặt đỏ, giơ chén hô | Dùng |
| M03 | Ma men: ông khách áo khoác dạ sờn, mũ len, dép nhựa, mũi đỏ, cười hiền, ngồi ghế nhựa, chén trên tay; viền người hơi trong | Dùng |
| M04 | Phòng tiệc nhà hàng toàn cảnh, băng rôn “VƯỢT KPI 2026” để trống chữ, màn hình đếm ngược | Dùng |
| M05 | Mai, nhân viên mới, tóc buộc, áo len, cầm chén rượu và đẩy chén sang bên | Dùng |
| M06 | Cuối tiệc: vỏ chai xếp hàng, nhân viên mệt gục trên bàn, chỉ ma men ngồi thẳng tươi tỉnh | Dùng |
| M08 | Quán nhậu vỉa hè khác: Toàn nâng chén tới môi thì chén đã cạn; ghế cạnh có bóng mũ len | Dùng |
| M09 | Tất niên năm sau: Toàn ngồi với cốc trà đá, nhân viên cười cầm phong bì đỏ, ghế cuối ma men nâng chén chào | Dùng |

## Lịch

| Nội dung | Thời gian đăng |
|---|---|
| LONG | Thứ Hai 28/12 18:00 (+07) |
| SH1 — TRỌN | Thứ Hai 28/12 19:00 (+07) |
| SH2 — TRỌN | Thứ Ba 29/12 11:30 (+07) |
| SH3 — TRỌN | Thứ Ba 29/12 19:00 (+07) |
| SH4 — TRỌN | Thứ Tư 30/12 11:30 (+07) |
| SH5 — TRỌN | Thứ Tư 30/12 19:00 (+07) |
| SH6 — TRAILER | Thứ Năm 31/12 11:30 (+07) |
| SH7 — TRAILER | Thứ Năm 31/12 19:00 (+07) |
