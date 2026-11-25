# Dự án 78 — Ông Tơ "Tiền mừng dính đôi" (v3, 2026-11-24)

v3 nâng cấp kịch tính theo bài học P04:
- **Đồng hồ + cái giá**: Hạn chót trước 24:00 ngày thứ ba mươi (tròn một tháng tân hôn). Nếu không giải được lời chúc mà giữ tiền mừng, tên hai đứa sẽ bị Ông Tơ hạ bút son vào Sổ Duyên — hai kẻ căm ghét nhau bị khoá duyên thành vợ chồng thật suốt chín kiếp.
- **3 nấc leo thang chủ động**: Nấc 1: Tách tiền cơ học (móng tay, hơ hơi nước, ngâm nước) → thất bại; Nấc 2: Đi tiêu chung để sinh tồn (chấp nhận kè kè bên nhau đổ xăng, đi siêu thị, tay nắm chung từng tờ tiền) → dây duyên siết chặt, họ hàng tưởng vợ chồng son thắm thiết; Nấc 3: Nước liều ngày 29 (đốt tiền phi tang để thoát duyên) → tiền không cháy → buộc phải trả giá bằng thể diện và tiền túi.
- **Điểm thấp nhất**: Đêm ngày 29, bút lông trên ảnh cưới đã chấm mực son sắp chạm giấy, Tú bật lửa đốt xấp tiền dính đôi nhưng tiền thần không bén lửa, hai đứa tuyệt vọng đối mặt bản án chung thân.
- **Cú lật do nhân vật chọn và trả giá**: Tú và Ly tự nguyện móc 200 triệu tiền túi bù nợ tiệc, trả lại toàn bộ 600 triệu cho 500 khách và công khai thừa nhận đám cưới giả trên mạng xã hội.
- **Cold open treo bí mật**: Giữ âm thanh điều hòa và tiếng cười khẽ, giấu toàn bộ hình ảnh Ông Tơ cho đến khoảnh khắc rợn ở đêm tân hôn. Bỏ hoàn toàn lời dẫn báo trước của Ma Nó.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Hai kẻ ghét nhau làm đám cưới giả để kiếm bốn trăm triệu tiền mừng có chia được tiền và thoát khỏi nhau trước khi bị trời đất khoá duyên thật?
- **Đồng hồ + cái giá**: 30 ngày (hạn tuần trăng mật). Nếu qua 30 ngày vẫn giữ lộc chúc, bút son hạ xuống Sổ Duyên, hai kẻ thù thành vợ chồng chín kiếp không thể giải.
- **3 nấc leo thang**:
  1. *Thử tách tiền*: Cậy móng tay, hơ nhiệt, ngâm nước → tiền dính chặt như đúc liền, máy đếm tiền khựng.
  2. *Thử tiêu chung*: Bị ép dính như sam ngoài đời, nắm chung từng tờ tiền để trả tiền xăng, đi siêu thị → thiên hạ khen quấn quýt, dây tơ càng siết.
  3. *Nước liều*: Đêm 29, ảnh cưới biến đổi ghé sát má, Tú bật lửa đốt tiền phi tang → tiền không cháy.
- **Điểm thấp nhất**: Đêm 29, còn 24 giờ, ngọn lửa bật lên nhưng tiền không cháy, mực son trên ngòi bút Ông Tơ rỏ xuống, hai đứa nhận ra sắp thành vợ chồng thật của kẻ mình ghê tởm nhất.
- **Cú lật**: Hai đứa chọn chịu nhục: móc 200 triệu tiền túi bù tiệc cưới, trả đủ 600 triệu tiền mừng cho 500 khách kèm thông báo đám cưới là trò lừa đảo. Tờ cuối cùng gửi đi, tiền mới tách đôi.
- **Khoảnh khắc rợn duy nhất**: Đêm tân hôn trong khách sạn, ảnh cưới khổ lớn trên giá tự biến đổi: hai bàn tay đan chặt vào nhau, và sau lưng cô dâu xuất hiện một cụ già râu bạc mỉm cười cầm cuốn sổ mở sẵn nhìn thẳng ra ngoài.
- **Câu kết**: Châm biếm chuẩn bible: hai đứa không yêu nhau, nhưng vẫn hay đi cà phê vì quen tay chia đôi hoá đơn; Ông Tơ dạy bài học về sức nặng của lời chúc phúc.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (Host) | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| TU | Tú (Chú rể giả, tính toán, thực dụng) | C04 | Adam bựa | `atempo=1.03` |
| LY | Ly (Cô dâu giả, sắc sảo, ghét Tú) | C05 | Ngọc Huyền | `atempo=1.05` |
| TO | Ông Tơ (Cụ già áo the đỏ, cười tinh quái) | C07 | Thiền Tâm Đức | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "TU": {"preset": "Adam bựa", "fx": "atempo=1.03"}, "LY": {"preset": "Ngọc Huyền", "fx": "atempo=1.05"}, "TO": {"preset": "Thiền Tâm Đức", "fx": "asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25"}}
```

## LONG (595 chữ lời thoại, ≈3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | C01 | *(không lời, 2.5 s)* | "PHÒNG TÂN HÔN · 01:00" · dieuhoa · nhactat |
| 0:02 | C01 | **MN**: Lúc chụp ảnh này, hai đứa đứng cách nhau một gang tay. | dieuhoa |
| 0:06 | C02 | **TO**: Cưới gì mà trong sổ không có tên? | cuoikhe · coc |
| 0:09 | S01 → S26 | **MN**: Lại mò vào à? Đi ăn cưới bao giờ mà thấy cô dâu chú rể không nhìn nhau chưa? | "LẠI MÒ VÀO À?" · coc · braam |
| 0:15 | S26 | **MN**: Có đám gom năm trăm phong bì. Mừng xong mới biết: không có vợ chồng, chỉ có hai đứa lừa nhau chia tiền. | "500 PHONG BÌ · 0 VỢ CHỒNG" |
| 0:22 | C03 | **MN**: Tú và Ly quen qua mạng, ghét nhau như chó với mèo, nhưng chung chí hướng làm giàu. | "HỢP ĐỒNG CƯỚI" · gophim |
| 0:28 | C04 | **TU**: Tiệc hết hai trăm. Gom sáu trăm. Lãi bốn trăm chia đôi. Xong đám là đường ai nấy đi. | "LÃI 400 TRIỆU" |
| 0:34 | C05 | **LY**: Thiệp ghi rõ: chỉ nhận tiền mặt. Cấm chuyển khoản để khỏi lưu vết. Không nắm tay quá năm giây. | "CHỈ NHẬN TIỀN MẶT" |
| 0:41 | S26 | **MN**: Năm trăm khách mời. Bạn cấp một, đồng nghiệp, họ hàng. Năm trăm lời chúc trăm năm hạnh phúc. | "500 LỜI CHÚC" · nhacdamcuoi |
| 0:47 | C06 | **MN**: Ngày cưới, rạp hoa rực rỡ. Đứng cách nhau một gang, cười với máy ảnh nhưng nhìn nhau như kẻ thù. | lycung |
| 0:54 | C06 → C07 | **MN**: Dân gian có ông Tơ bà Nguyệt. Cưới là trình duyên. Tiền mừng là lộc chúc đôi vợ chồng. | "TIỀN MỪNG LÀ LỘC ĐÔI" |
| 1:00 | C07 | **TO**: Không có duyên mà dám nhận lộc đôi? Lời chúc nặng lắm. | latso |
| 1:05 | C07 | **TO**: Ba mươi ngày không trả lộc, tên hai đứa sẽ ghi bằng mực son vĩnh viễn. | "HẠN: 30 NGÀY" · "MỰC SON VĨNH VIỄN" · tick |
| 1:12 | C01 | **MN**: Đêm tân hôn khách sạn. Hai đứa đổ phong bì ra sàn, ngồi hai góc giường chia tiền. | sotsoat · nhactat |
| 1:18 | C01 → C02 | **MN**: Ảnh cưới khổ lớn dựng góc phòng. Lúc chụp, Tú và Ly đứng cách một gang. | nhactat |
| 1:23 | C02 | **MN**: Nhưng trong ảnh, hai bàn tay đan chặt. Sau lưng cô dâu, một cụ già râu bạc mỉm cười cầm cuốn sổ mở. | "ẢNH TỰ ĐAN TAY" · cuoikhe · im 2 s |
| 1:33 | C04 | **TU**: Nhìn cái gì? Chia tiền rồi tao về! | nhactat |
| 1:36 | C08 | **MN**: Ly rút xấp tiền ra chia. Tờ nào cũng dính đôi, kéo không ra. | "TIỀN DÍNH ĐÔI" · keotien |
| 1:42 | C05 | **LY**: Tiền dính keo à? Lấy kéo cắt ra! |  |
| 1:45 | C08 | **MN**: Bóc móng tay: không ra. Hơ hơi nước: không nhả. Ngâm chậu nước: ướt sũng vẫn dính chặt. | "BÓC ✗ · HƠ ✗ · NGÂM ✗" · amnuoc · nuoc |
| 1:53 | C07 | **TO**: Tiền chúc đi đôi, đời nào chịu rời. | cuoikhe |
| 1:56 | C09 | **MN**: Chia không được thì đem tiêu. Tú đưa thu ngân: máy báo lỗi. Ly đưa cây xăng: nhân viên không nhận. | "MÁY TỪ CHỐI" · pos_error |
| 2:04 | C09 | **MN**: Chỉ khi hai đứa cùng đặt tay nắm chung một tờ, máy mới kêu bíp. | "BÍP!" · pos_ok |
| 2:09 | C05 | **LY**: Phát điên mất! Sao tôi phải dắt anh đi mua từng hộp sữa? |  |
| 2:13 | C04 | **TU**: Tôi thèm nắm tay à? Bốn trăm triệu nằm đây, không tiêu thì đói! |  |
| 2:18 | C09 → S26 | **MN**: Hai tuần trôi qua. Hai kẻ ghét nhau dính như sam. Đi chợ, đổ xăng phải cầm chung từng tờ. Thiên hạ khen vợ chồng son. | "2 TUẦN · DÍNH NHƯ SAM" |
| 2:27 | C01 | **MN**: Ngày thứ hai mươi chín. Đúng hai mươi bốn tiếng trước hạn chót. | "NGÀY 29" · "CÒN 24 GIỜ" · tick |
| 2:32 | C02 | **MN**: Trong ảnh, hai đứa đã ghé sát má. Bút lông ông cụ chấm mực son, chực hạ xuống sổ duyên. | "MỰC SON CHỰC HẠ" · bassdown |
| 2:39 | C04 | **TU**: Đốt hết đi! Tao không cần tiền! Tao không muốn cưới mày thật! | batlua |
| 2:44 | C08 | **MN**: Tú bật lửa đốt, nhưng tiền dính đôi không hề cháy. | "TIỀN KHÔNG CHÁY" · lua |
| 2:48 | C10 | **MN**: Hết đường lùi. Hai đứa tự bỏ hai trăm triệu trả tiệc, cùng ra ngân hàng nộp lại sáu trăm triệu tiền mừng. | "TRẢ GIÁ: MẤT TRẮNG" · maydemtien |
| 2:56 | C10 | **LY**: Chuyển khoản trả từng người. Kèm thú nhận: đám cưới là giả. | "ting" x n |
| 3:00 | C08 | **MN**: Đúng mười một giờ đêm, khi lệnh chuyển cuối cùng xong, xấp tiền trên bàn bỗng tách đôi cái xoẹt. | "TÁCH ĐÔI" · xoet |
| 3:06 | C07 | **TO**: Nhận lộc chúc thì phải gánh nợ duyên. Không có duyên thì đừng nhận. | gachso |
| 3:11 | S33 → S34 | **MN**: Sau vụ ấy, hai đứa vẫn hay đi cà phê. Quen tay chia đôi rồi. | dieu_cay |
| 3:16 | B07 | **MN**: Thứ Hai: một nhà thầu xây cầu cho làng, rút ruột sắt thép. Cầu mới khánh thành, chưa ai dám đi. Bên cạnh còn cây cầu tre của một ông thợ cả… bắc ba mươi năm. | "TẬP SAU · THỨ HAI" · whoosh |
| 3:25 | S06 | **MN**: Bấm đăng ký đi. Không cần mừng phong bì đâu. | "ĐĂNG KÝ" · coc |

## SHORTS

### SH1 (TRỌN)
- **MN**: Hồ sơ cưới giả kiếm bốn trăm triệu. Tưởng qua mặt được thiên hạ, ai ngờ gặp phải Ông Tơ. (S01) · pop "ÔNG TƠ"
- **TU**: Tiệc hết hai trăm. Gom sáu trăm. Lãi bốn trăm chia đôi. Xong đám là đường ai nấy đi. (C04)
- **LY**: Thiệp ghi rõ: chỉ nhận tiền mặt. Cấm chuyển khoản để khỏi lưu vết. Không nắm tay quá năm giây. (C05)
- **MN**: Năm trăm khách mời. Năm trăm lời chúc trăm năm hạnh phúc. (S26)
- **TO**: Năm trăm người chúc trăm năm hoà hợp. Không có duyên mà dám nhận lộc đôi? (C07)
- **MN**: Đêm tân hôn, tiền mừng dính chặt từng cặp. Muốn tiêu phải nắm tay nhau. (C08)
- *(không lời, 0.8 s)*
- **MN**: Hai kẻ ghét nhau phải sống thế nào? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH2 (TRỌN)
- **MN**: Đêm tân hôn của đám cưới giả. Mở phong bì chia tiền thì phát hiện điều rợn gáy. (C01)
- **MN**: Ly rút xấp tiền ra chia. Tờ nào cũng dính đôi, kéo không ra. (C08)
- **LY**: Tiền dính keo à? Lấy kéo cắt ra! (C05)
- **MN**: Bóc móng tay: không ra. Hơ hơi nước: không nhả. Ngâm chậu nước: ướt sũng vẫn dính chặt. (C08)
- **TO**: Tiền chúc đi đôi, đời nào chịu rời. (C07) · pop "ÔNG TƠ"
- **MN**: Tiền mừng là lộc chúc phúc. Lộc đã nhận thì cấm chia rẽ. (S26)
- *(không lời, 0.8 s)*
- **MN**: Tiền không chia được thì tiêu kiểu gì? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH3 (TRỌN)
- **MN**: Làm đám cưới giả kiếm tiền, và cái kết phải dính nhau như sam suốt một tháng. (C09)
- **MN**: Chia không được thì đem tiêu. Tú đưa thu ngân: máy báo lỗi. Ly đưa cây xăng: nhân viên không nhận. (C09)
- **MN**: Chỉ khi hai đứa cùng đặt tay nắm chung một tờ, máy mới kêu bíp. (C09)
- **LY**: Phát điên mất! Sao tôi phải dắt anh đi mua từng hộp sữa? (C05)
- **TU**: Tôi thèm nắm tay à? Bốn trăm triệu nằm đây, không tiêu thì đói! (C04)
- **MN**: Hai tuần liền dắt nhau đi chợ, cả họ tấm tắc khen đôi trẻ quấn quýt. (S26)
- *(không lời, 0.8 s)*
- **MN**: Hai đứa chịu đựng được bao lâu? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH4 (TRỌN)
- **MN**: Đừng bao giờ lừa gạt tiền mừng cưới. Vì lời chúc của người sống nặng lắm. (S01)
- **TO**: Cưới gì mà trong sổ không có tên? (C07) · pop "ÔNG TƠ"
- **TO**: Ba mươi ngày không trả lộc, tên hai đứa sẽ ghi bằng mực son vĩnh viễn. (C07)
- **MN**: Cưới giả để chia tiền, nhưng nếu không tiêu được mà cũng không trả lại, hai kẻ ghét nhau sẽ thành vợ chồng chín kiếp. (S26)
- **TU**: Đốt hết đi! Tao không cần tiền! Tao không muốn cưới mày thật! (C04)
- **MN**: Bật lửa đốt tiền, tiền thần không bén lửa. (C08)
- *(không lời, 0.8 s)*
- **MN**: Muốn thoát khỏi nhau phải trả giá thế nào? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH5 (TRỌN)
- **MN**: Bốn trăm triệu tiền lời chưa thấy đâu, hai kẻ gian đã phải móc sạch tiền túi. (C10)
- **MN**: Ngày thứ hai mươi chín. Bút lông ông Tơ đã chấm mực son, chực hạ xuống sổ duyên. (C02) · pop "ÔNG TƠ"
- **MN**: Hết đường lùi. Hai đứa tự bỏ hai trăm triệu trả tiệc, cùng ra ngân hàng nộp lại sáu trăm triệu tiền mừng. (C10)
- **LY**: Chuyển khoản trả từng người. Kèm thú nhận: đám cưới là giả. (C10)
- **MN**: Đúng mười một giờ đêm, khi lệnh chuyển cuối cùng xong, xấp tiền trên bàn bỗng tách đôi cái xoẹt. (C08)
- **TO**: Nhận lộc chúc thì phải gánh nợ duyên. Không có duyên thì đừng nhận. (C07)
- *(không lời, 0.8 s)*
- **MN**: Màn trả giá ê chề của đám cưới giả. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 (TRAILER)
- **MN**: Đêm tân hôn trong khách sạn, hai đứa cưới giả ngồi đếm tiền và nhìn lên góc phòng. (C01)
- **MN**: Ảnh cưới khổ lớn dựng góc phòng. Lúc chụp, Tú và Ly đứng cách một gang. (C01)
- **MN**: Nhưng trong ảnh, hai bàn tay họ đan chặt. (C02)
- **MN**: Sau lưng cô dâu, một cụ già râu bạc mỉm cười cầm cuốn sổ mở. (C02) · pop "ÔNG TƠ"
- **TO**: Cưới gì mà trong sổ không có tên? (C07)
- **MN**: Ông cụ trong ảnh là ai? Và chuyện gì xảy ra với xấp tiền mừng? Bản đầy đủ, link dưới. (S26)

### SH7 (TRAILER)
- **MN**: Còn đúng hai mươi tư tiếng nữa là hết hạn ba mươi ngày. (C01)
- **MN**: Không trả lại tiền mừng, tên hai kẻ ghét nhau sẽ bị khoá vào sổ duyên vĩnh viễn. (S26)
- **MN**: Trong ảnh cưới, hai đứa đã ghé sát má. Bút lông ông cụ chấm mực son, chực hạ xuống sổ duyên. (C02) · pop "ÔNG TƠ"
- **TU**: Đốt hết đi! Tao không cần tiền! Tao không muốn cưới mày thật! (C04)
- **MN**: Ngọn lửa bùng lên, nhưng xấp tiền dính đôi không hề cháy. (C08)
- **MN**: Cánh cửa thoát thân duy nhất là gì? Bản đầy đủ, link dưới. (S34)

## Hình

### Ảnh tái dùng
- [x] B02 — Ma Nó toàn cảnh
- [x] B07 — Cầu tre sương mù (dùng cho teaser tập sau P79)
- [x] ep01 S01 — Ma Nó chào mở đầu
- [x] ep01 S06 — Ma Nó chỉ tay kêu gọi đăng ký
- [x] ep01 S26 — Ma Nó cận cảnh rờn rợn
- [x] ep01 S33 — Ma Nó hút điếu cày
- [x] ep01 S34 — Ma Nó phả khói kết thúc

### Ảnh vẽ mới (16:9, giữ nguyên danh sách v2)
| Mã | Cảnh | Trạng thái v3 |
|---|---|---|
| C01 | Phòng khách sạn đêm tân hôn, ảnh cưới khổ to trên giá ở góc; Tú và Ly ngồi hai đầu giường đổ phong bì ra đếm | [x] ĐÃ DÙNG |
| C02 | Cận ảnh cưới: cô dâu chú rể hai bàn tay đan vào nhau; bản có mép ảnh sau lưng cô dâu một cụ già râu bạc cầm sổ mỉm cười | [x] ĐÃ DÙNG |
| C03 | Quán cà phê: Tú và Ly ngồi đối diện, laptop mở danh sách khách mời dài (trống chữ) | [x] ĐÃ DÙNG |
| C04 | Tú cận: vest thuê, tóc vuốt keo; bản bóc tiền bằng móng tay cau có | [x] ĐÃ DÙNG |
| C05 | Ly cận: váy cưới thuê, móng giả; bản mặt cau nắm chung tờ tiền | [x] ĐÃ DÙNG |
| C06 | Tiệc cưới đông, sân khấu, cô dâu chú rể đứng cách nhau; góc sảnh cụ già áo the đỏ sẫm ngồi một mình | [x] ĐÃ DÙNG |
| C07 | Ông Tơ cận: râu bạc dài, áo the đỏ sẫm, cuốn sổ duyên, bút lông, cười tinh quái | [x] ĐÃ DÙNG |
| C08 | Cận hai tờ tiền dính chặt; bản ngâm chậu nước vẫn dính; bản tờ cuối tách ra rơi nhẹ | [x] ĐÃ DÙNG |
| C09 | Quầy thu ngân siêu thị: Tú và Ly cùng cầm một tờ tiền đưa thu ngân | [x] ĐÃ DÙNG |
| C10 | Tú và Ly ngồi cạnh nhau trước laptop, chuyển khoản trả tiền mừng theo danh sách | [x] ĐÃ DÙNG |

## Lịch
- **LONG (Dự án 78)**: Thứ Năm 19/08 lúc 18:00 (+07)
- **SH1 (TRỌN)**: Thứ Năm 19/08 lúc 19:00
- **SH2 (TRỌN)**: Thứ Sáu 20/08 lúc 11:30
- **SH3 (TRỌN)**: Thứ Sáu 20/08 lúc 19:00
- **SH4 (TRỌN)**: Thứ Bảy 21/08 lúc 11:30
- **SH5 (TRỌN)**: Thứ Bảy 21/08 lúc 19:00
- **SH6 (TRAILER)**: Chủ Nhật 22/08 lúc 11:30
- **SH7 (TRAILER)**: Chủ Nhật 22/08 lúc 19:00
- **Tập sau (Dự án 79 — Cầu không chịu nổi một người)**: Thứ Hai 23/08 lúc 18:00
