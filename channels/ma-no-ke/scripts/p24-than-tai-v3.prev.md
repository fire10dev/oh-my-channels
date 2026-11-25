# Dự án 24 — Thần Tài “Lộc theo chân người xếp hàng” (v3, 2026-11-24)

- Thêm hạn chót: trước khi tiệm mở cửa lúc 7 giờ sáng ngày vía Thần Tài; nếu vắng mặt, bà Diệu mất lộc vía năm đó.
- Ba nấc của Thần Tài: ghi tên bà Diệu theo sổ cũ → tìm bà trong hàng người → tự xoay tượng ra cửa để bà thấy và phải chọn.
- Cú lật nằm ở lựa chọn của bà Diệu: bà tự xoay tượng vào tường lần nữa để giấu chuyện, chấp nhận mất lộc; người đứng sương nhận lộc.
- Giữ một khoảnh khắc rợn thật: tượng quay ra cửa, nụ cười biến mất; không thêm cảnh kinh dị.
- Viết lại kết theo bible; teaser đúng tập sau vào Thứ Hai.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Thần Tài có khiến bà Diệu phải tự đi đón lộc trước 7 giờ sáng, hay bà sẽ tiếp tục thuê người đứng thay?
- **Đồng hồ / cái giá:** Trước 7 giờ sáng ngày vía, lúc cửa tiệm mở. Nếu không có mặt, bà Diệu không được ghi lộc vía năm đó; Thần Tài mất cơ hội chấm đúng người.
- **Ba nấc leo thang:** Thần Tài ghi bà theo sổ cũ nhưng tên không ứng với người đứng hàng → tìm bà trong đám đông nhưng chỉ thấy năm mươi người làm thuê → xoay tượng ra cửa để bà thức dậy, nhưng bà xoay tượng vào tường lại.
- **Điểm thấp:** Bà Diệu quyết định quay lưng, để người làm thuê mua vàng giao lại cho mình.
- **Cú lật:** Bà Diệu chủ động xoay tượng vào tường, chọn giữ vàng và bỏ lộc. Thần Tài ghi lộc cho những người đang đứng sương; bà trả giá bằng một năm mua đâu trượt đó.
- **Khoảnh khắc rợn:** Bốn giờ sáng, tượng đã quay ra cửa; nụ cười trên mặt sứ biến mất. Bà xoay tượng lại, sáng ra tượng vẫn nhìn ra cửa.
- **Câu kết:** “Lộc không thuê người đứng hộ được. Tao chưa thấy ai thuê người ăn hộ mà mình no.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34; S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| DIEU | Bà Diệu, đầu nậu vàng; áo khoác lông, vòng vàng, điện thoại, nói nhanh | T04 | Ngọc Huyền | `atempo=1.05` |
| TAI | Ông Thần Tài, thủ kho cõi âm; áo đỏ, mũ quan, bàn tính | T02 | Adam bựa | `aecho=0.8:0.5:50:0.25` |
| BAY | Chú Bảy xe ôm, người làm thuê xếp hàng | T08 | Thiền Tâm Đức | `anull` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"DIEU":{"preset":"Ngọc Huyền","fx":"atempo=1.05"},"TAI":{"preset":"Adam bựa","fx":"aecho=0.8:0.5:50:0.25"},"BAY":{"preset":"Thiền Tâm Đức","fx":"anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | T01 | *(không lời, 2 s)* | bàn tính rất xa; tượng sứ xoay khẽ “két”; im |
| 0:02 | T02 | **TAI**: Bà Diệu. Mùng mười. Có mặt: không. Lộc: không. | mõ cộc |
| 0:06 | S01 → S26 | **MN**: Lại mò vào à? Hôm nay vía Thần Tài. Có người thuê cả hàng đứng hộ mình. Nghe cũng tiện. | mõ cộc |
| 0:13 | T03 | **MN**: Bà Diệu buôn vàng. Năm nào mùng mười cũng gom vàng, găm chờ lên giá. Người đứng sương là người khác. | đếm tiền |
| 0:21 | T04 | **DIEU**: Năm mươi người. Ba giờ sáng có mặt. Hai trăm nghìn một suất. Mua đủ hạn mức rồi giao lại cho tôi. Tôi ngủ. | chuông điện thoại |
| 0:30 | S26 | **MN**: Năm mươi người đội sương, bà Diệu đội chăn. Vàng về tay bà. Còn lộc, bà nghĩ chắc cũng có dịch vụ giao tận nhà. | “50 NGƯỜI × 200K” |
| 0:40 | T01 | **MN**: Bàn thờ nhà bà quay mặt vào tường. | nhạc nhẹ |
| 0:44 | T04 | **DIEU**: Thầy phong thủy trên mạng bảo quay vào để nhốt lộc. Quay ra cửa thì lộc chạy mất. Tôi trả ba triệu tiền tư vấn rồi. | điện thoại |
| 0:54 | S26 | **MN**: Dân gian bảo Thần Tài nhìn ra cửa để đón khách, đón lộc. Quay vào tường thì ông chỉ thấy tường. Chắc tường cũng không mua vàng. | “NHÌN RA CỬA” |
| 1:04 | T05 → T02 | **MN**: Dưới âm phủ, ông Thần Tài là thủ kho. Mùng mười bận nhất năm. Lộc nhập, lộc xuất, ghi đúng người có mặt. | bàn tính lạch cạch |
| 1:14 | T02 | **TAI**: Ta không bán vàng. Ta chấm người. Ai đội sương kiếm miếng ăn ngày vía, ta ghi một lộc. Ta ghi người đứng đó. | tiếng sổ mở |
| 1:24 | T02 | **TAI**: Sổ cũ ghi bà Diệu. Ta tìm trong hàng. Một người, hai người… năm mươi người. Bà ấy đâu? | bàn tính nhanh |
| 1:32 | S26 | **MN**: Ông tìm hết hàng, không thấy bà chủ. Cả năm mươi người đều có mặt. Bà Diệu thì đang ngủ rất đúng giờ. | tiếng ngáy ngắn |
| 1:41 | T06 | **MN**: Bốn giờ sáng. Hàng người kéo dài trong sương. Tiệm còn đóng cửa. Hạn của ông Thần Tài là bảy giờ, lúc cửa mở. | sương; tiếng người rì rầm |
| 1:51 | T03 | **MN**: Bà Diệu thức dậy uống nước. Đi ngang bàn thờ. Tượng tối qua quay vào tường, giờ nhìn ra cửa. | nhạc tắt |
| 2:00 | T01b | **MN**: Nụ cười trên mặt tượng… không còn. | im 2 s |
| 2:05 | T04 → T01 | **MN**: Bà xoay tượng vào tường. “Lộc phải ở trong nhà.” Bà quay đi, tự chọn ngủ tiếp. | “KÉT” |
| 2:15 | T02 | **TAI**: Bà Diệu. Có mặt: không. Ta ghi đúng sổ. Nhưng lộc không ghi cho người vắng mặt. | bàn tính dừng |
| 2:23 | T07 → T08 | **MN**: Bảy giờ, cửa cuốn mở. Năm mươi người mua xong, giao vàng cho bà Diệu, nhận tiền công. | cửa cuốn kéo |
| 2:31 | T08 | **BAY**: Đứng ba tiếng, được hai trăm. Mua bát phở, còn tiền xăng. Thế là có lộc rồi. | đám đông dịu |
| 2:39 | T02 | **TAI**: Bảy, xe ôm. Có mặt từ ba giờ. Một lộc. Nhỏ thôi, đủ ấm. Người tiếp theo. | bàn tính ×50 |
| 2:48 | S26 | **MN**: Năm mươi người, năm mươi lộc nhỏ. Chú Bảy có khách quen bao tháng. Cô bán xôi có chỗ ngồi trước cổng chợ. Không ai trúng số. Ai cũng ấm. | “50 LỘC NHỎ” |
| 3:00 | T09 | **MN**: Còn bà Diệu, cả năm mua vào là vàng xuống. Bán ra là vàng lên. Lặp đều như lịch nhắc việc, chỉ khác là điện thoại không nhắc được giá. | chuông điện thoại |
| 3:12 | T04 | **DIEU**: Tôi canh giá ba mươi năm! Sao năm nay cứ mua là xuống, bán là lên? | tiếng thở dài |
| 3:20 | S26 | **MN**: Ba mươi năm bà canh giá. Năm nay có người canh bà. | bass nhẹ |
| 3:27 | T06 | **MN**: Năm sau, bốn giờ sáng, bà Diệu tự đứng xếp hàng. Lạnh run. Chú Bảy đứng cạnh, vẫn có khách quen. | sương, rì rầm |
| 3:37 | T01 | **MN**: Bàn thờ nhà bà giờ quay ra cửa. Tượng cười lại rồi. Còn lộc năm nay… ông đang xem. | bàn tính |
| 3:45 | S33 → S34 | **MN**: Lộc không thuê người đứng hộ được. Tao chưa thấy ai thuê người ăn hộ mà mình no. | rít điếu cày |
| 3:53 | B02 → S26 | **MN**: Thứ Hai, nhà quay vlog mâm cỗ triệu view. Đẹp lắm. Có đứa đói từ trăm năm nay đến ăn thử… | “TẬP SAU · THỨ HAI” |
| 4:02 | S06 | **MN**: Bấm đăng ký đi. Tự tay bấm, đừng thuê ai bấm hộ. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN

- **TAI**: Bà Diệu. Mùng mười. Có mặt: không. Lộc: không. (T02) · pop “THẦN TÀI”
- **MN**: Bốn giờ sáng, bà thức dậy. Tượng trên bàn thờ đã quay ra cửa. (T01)
- **MN**: Nụ cười trên mặt tượng… không còn. (T01b)
- **MN**: Bà xoay tượng vào tường rồi đi ngủ tiếp. (T04)
- **MN**: Sáng ra, tượng lại nhìn ra cửa. (T01)
- *(không lời, 0.8 s)* (T01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN

- **DIEU**: Năm mươi người. Ba giờ sáng có mặt. Hai trăm nghìn một suất. Mua đủ rồi giao lại cho tôi. Tôi ngủ. (T04) · pop “BÀ DIỆU”
- **MN**: Năm mươi người đội sương, bà Diệu đội chăn. (T06)
- **TAI**: Ta ghi người đứng đó. Ta không ghi người nằm nhà đếm tiền. (T02)
- **MN**: Bà tưởng lộc cũng được giao tận nhà. (S26)
- *(không lời, 0.8 s)* (T06)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN

- **MN**: Bàn thờ nhà bà Diệu quay mặt vào tường. (T01) · pop “BÀ DIỆU”
- **DIEU**: Quay vào để nhốt lộc. Quay ra cửa thì lộc chạy mất. (T04)
- **MN**: Dân gian bảo Thần Tài nhìn ra cửa để đón khách, đón lộc. (S26)
- **MN**: Quay vào tường thì ông chỉ thấy tường. Chắc tường cũng không mua vàng. (S26)
- *(không lời, 0.8 s)* (T01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN

- **MN**: Bốn giờ sáng. Hàng người kéo dài trong sương. Tiệm còn đóng cửa. (T06)
- **MN**: Bà Diệu thức dậy uống nước. Tượng tối qua quay vào tường, giờ nhìn ra cửa. (T03 → T01) · pop “THẦN TÀI”
- **MN**: Nụ cười trên mặt tượng… không còn. (T01b)
- **MN**: Bà xoay tượng vào tường. Sáng ra, tượng lại nhìn ra cửa. (T04 → T01)
- *(không lời, 0.8 s)* (T01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN

- **BAY**: Đứng ba tiếng, được hai trăm. Mua bát phở, còn tiền xăng. Thế là có lộc rồi. (T08) · pop “CHÚ BẢY”
- **TAI**: Có mặt từ ba giờ. Một lộc. Nhỏ thôi, đủ ấm. Người tiếp theo. (T02)
- **MN**: Năm mươi người, năm mươi lộc nhỏ. Không ai trúng số. Ai cũng ấm. (S26)
- *(không lời, 0.8 s)* (T08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER

- **MN**: Cả năm mua vào là vàng xuống. Bán ra là vàng lên. (T09) · pop “BÀ DIỆU”
- **DIEU**: Tôi canh giá ba mươi năm! Sao năm nay cứ mua là xuống, bán là lên? (T04)
- **MN**: Ba mươi năm bà canh giá. Năm nay có người canh bà. (S26)
- **MN**: Nhưng người đó ghi lộc cho ai? (T02)
- **MN**: Bản đầy đủ, link dưới. (S06)

### SH7 — TRAILER

- **MN**: Bốn giờ sáng. Một hàng người đứng trong sương. Bà chủ thì đang ngủ. (T06) · pop “BÀ DIỆU”
- **TAI**: Ta ghi người đứng đó. Bà ấy đâu? (T02) · pop “THẦN TÀI”
- **MN**: Trước bảy giờ, bà phải tự có mặt. (T03)
- **MN**: Nhưng tượng trên bàn thờ đã quay ra cửa. (T01)
- **MN**: Bản đầy đủ, link dưới. (S06)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

### Vẽ mới: 10 ảnh (16:9)

| Mã | Cảnh | v3 dùng |
|---|---|---|
| T01 | Bàn thờ Thần Tài thấp ở góc nhà tối, tượng sứ ông Thần Tài; hai trạng thái: quay mặt vào tường (cười) và quay ra cửa | Có |
| T01b | Cực cận mặt tượng sứ Thần Tài trong bóng tối 4 giờ sáng: nụ cười quen thuộc biến mất, miệng phẳng lặng, mắt nhìn thẳng | Có |
| T02 | Ông Thần Tài dạng người: béo, áo đỏ, mũ quan, một tay ôm thỏi vàng, một tay gõ bàn tính, sổ dày mở; viền người mờ | Có |
| T03 | Phòng khách nhà bà Diệu: két sắt, sổ ghi chép, điện thoại, đèn ngủ vàng | Có |
| T04 | Bà Diệu cận: áo khoác lông, vòng vàng kín cổ tay, điện thoại áp tai, nói nhanh | Có |
| T05 | Kho lộc cõi âm: kệ gỗ cao ngất xếp hòm đỏ, đèn lồng, ông Thần Tài chạy qua lại ôm bàn tính | Có |
| T06 | Phố sương sớm 4 giờ sáng: hàng người dài trước tiệm vàng còn đóng cửa cuốn, đèn đường vàng | Có |
| T07 | Bảy giờ sáng: cửa cuốn tiệm vàng kéo lên, người xếp hàng, chú Bảy cầm phiếu | Có |
| T08 | Chú Bảy xe ôm cận: áo khoác xe ôm cũ, mũ bảo hiểm, cười hiền, tay cầm tờ hai trăm nghìn | Có |
| T09 | Bộ ba khung: bà Diệu nhìn bảng giá vàng mặt hớn hở → mặt méo; bán ra → giá vọt lên | Có |

## Lịch

- LONG — Thứ Hai 15/02, 18:00 (+07).
- SH1 — Thứ Hai 15/02, 19:00 (+07).
- SH2 — Thứ Ba 16/02, 11:30 (+07).
- SH3 — Thứ Ba 16/02, 19:00 (+07).
- SH4 — Thứ Tư 17/02, 11:30 (+07).
- SH5 — Thứ Tư 17/02, 19:00 (+07).
- SH6 — Thứ Năm 18/02, 11:30 (+07).
- SH7 — Thứ Năm 18/02, 19:00 (+07).
