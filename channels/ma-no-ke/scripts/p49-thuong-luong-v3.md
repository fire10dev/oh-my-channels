# Dự án 49 — Thuồng luồng "Mét vuông đổi mét vuông" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá rõ ràng**: Hạn chót trưa thứ Bảy cắt băng khánh thành bến du thuyền đón dàn khách VIP ký hợp đồng khu nghỉ dưỡng; nếu không giải quyết, móng biệt thự trượt thẳng xuống vực sâu nghìn năm.
- **3 nấc leo thang chủ động**: (1) Nước ngập 300 m² phòng khách → Đại hút cạn; (2) Trưa hôm sau nước dâng lại mọc sen → Đại đổ 10 xe đá hộc bịt vực, cắm thêm 4 máy bơm công nghiệp; (3) 3h sáng máy bơm nổ tung, nước ngầm đội tung nền nhà ngập lút ngực, móng trượt.
- **Cold open treo câu hỏi**: Đàn cá koi trăm nghìn đô xếp hàng quay ra sông lúc nửa đêm; thuồng luồng báo hiệu "chào chủ cũ", không lộ trước kết cục phòng khách thành ao.
- **Điểm thấp nhất & Cú lật do nhân vật chọn**: 3h sáng trên nóc tủ, khách VIP đang trên đường tới; Đại tự tay bấm gọi máy xúc phá tan 300 m² bờ kè bê tông để cứu nhà; trả bãi bồi cho dân làng, nhận về "biên lai" bông sen trong phòng khách khô ráo.
- **Bỏ Ma Nó báo trước**: Giữ đúng nhịp châm biếm, lời thoại cô đọng đúng 598 chữ.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Liệu kẻ có tiền, quen biết và cầm chắc sổ đỏ có thắng nổi phép tính đo đạc nghìn năm của thuồng luồng giữ vực?
- **Đồng hồ + cái giá**: 72 giờ trước lễ khánh thành bến du thuyền đón đối tác VIP vào trưa thứ Bảy. Cái giá: biệt thự trăm tỷ sụt móng chìm xuống đáy vực sông.
- **3 nấc leo thang**:
  - *Nấc 1*: Nước ngập 300 m² phòng khách, thợ đo đúng diện tích lấn. Đại coi thường là vỡ ống nước, bật 2 máy bơm hút cạn ra sân.
  - *Nấc 2*: Trưa hôm sau nước ngầm đùn lên mọc sen giữa phòng. Đại không lùi, cho xe trút đá bịt vực xoáy, lắp 4 máy bơm xả bùn thách thức dòng sông.
  - *Nấc 3*: Đêm trước giờ G, 4 máy bơm chập nổ, vực xoáy gầm réo đội toác nền đá hoa, nước ngập ngang ngực, móng biệt thự bắt đầu trượt.
- **Điểm thấp nhất**: 3h sáng, Đại co ro nóc tủ nhìn cơ ngơi sắp trôi sông, điện thoại réo báo khách VIP đang tới gần.
- **Cú lật (chọn & trả giá)**: Đại buộc phải ra lệnh máy xúc phá tung bờ kè bê tông trả lại bãi bồi cho dân làng; nước phòng khách lập tức rút cạn theo nhịp máy xúc.
- **Khoảnh khắc rợn duy nhất**: Nửa đêm, đàn cá koi 30 con đang bơi bỗng dừng phắt lại, xếp thẳng hàng quay đầu ra sông, rồi một vệt nước dài rẽ đôi trườn qua kè bò ngoằn ngoèo vào tận phòng khách.
- **Câu kết**: Lấn của ai nhớ người ta có thước; châm biếm kẻ cậy quyền cậy tiền cuối cùng đứng tiếp khách VIP giữa bãi sình lầy.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| DAI | Ông Đại, chủ biệt thự ven sông | H03 | Adam bựa | `atempo=1.05` |
| LUONG | Thuồng luồng giữ vực | H05 | Thiền Tâm Đức | `asetrate=48000*0.82,aresample=48000,aecho=0.8:0.7:140:0.4` |
| LAI | Bà Lài, dân chài ven sông | H04 | Ngọc Huyền | `atempo=0.96` |

```json voices
{
  "MN": {
    "preset": "Thiện Minh",
    "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"
  },
  "DAI": {
    "preset": "Adam bựa",
    "fx": "atempo=1.05"
  },
  "LUONG": {
    "preset": "Thiền Tâm Đức",
    "fx": "asetrate=48000*0.82,aresample=48000,aecho=0.8:0.7:140:0.4"
  },
  "LAI": {
    "preset": "Ngọc Huyền",
    "fx": "atempo=0.96"
  }
}
```

## LONG (598 chữ lời thoại, dựng ~3:15)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | H01 | *(không lời, 2.2 s)* | "BIỆT THỰ VEN SÔNG · 0:00" · cá quẫy · nhạc tắt |
| 0:02 | H01 | **DAI**: Đàn cá trăm nghìn đô, sao nửa đêm lại xếp hàng quay ra sông thế kia? | nhạc tắt · im |
| 0:07 | H05 | **LUONG**: Chúng không chào ông. Chúng chào… chủ cũ. | "CHỦ CŨ" · bassdown · nuoc sau |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Dưới đít tao cái tủ vẫn có đứa gõ, kệ nó. Mùa hai rồi. | mõ CỘC · trong tủ: cộc |
| 0:15 | S26 | **MN**: Đố chúng mày: nhà gần sông sợ gì nhất? Sợ sạt lở à? Không, sợ sông vào tận phòng khách đòi nợ. | "SÔNG ĐÒI PHÒNG KHÁCH" · braam |
| 0:21 | H02 | **MN**: Ông Đại có biệt thự ven sông to nhất vùng. Ông đổ bê tông lấn ba trăm mét vuông mặt nước làm bến du thuyền. | "LẤN 300 m² MẶT NƯỚC" · may tron be tong |
| 0:28 | H03 | **DAI**: Sông là của chung, mà của chung thì tôi quen hết. Sổ đỏ ghi đến mép nước. Mép nước ở đâu… tôi quyết! | "MÉP NƯỚC Ở ĐÂU TÔI QUYẾT" · ly vang |
| 0:35 | H04 | **LAI**: Bãi bồi làng tôi thả lưới ba đời. Ông lấp sạch, dân lấy gì kiếm ăn? | song vo |
| 0:40 | S26 | **MN**: Dân kêu thì ông tài trợ cái loa xã. Dưới vực sâu, có một đứa không dùng loa. | loa phat thanh |
| 0:45 | H05 | **MN**: Khúc sông có vực xoáy nghìn năm, là nhà thuồng luồng. Lấn sông là bít cửa nhà nó. | nuoc sau ung uc |
| 0:50 | H05 | **LUONG**: Tấc bến… ba trăm. Vực sâu không thiếu nước, chỉ thiếu công bằng. | "THUỒNG LUỒNG GIỮ VỰC" · echorun |
| 0:56 | S26 | **MN**: Thuồng luồng già không đánh chìm thuyền. Nó thích tính toán: mét vuông đổi mét vuông. | "m² ĐỔI m²" · ting |
| 1:02 | H03 | **MN**: Ông Đại định ngày: trưa thứ Bảy cắt băng khánh thành đón khách VIP. Đúng ba ngày nữa. | "HẠN: TRƯA THỨ BẢY" · tick |
| 1:08 | H01 | **MN**: Nửa đêm. Ba chục con cá koi bỗng dừng khựng. Xếp thẳng hàng, quay đầu ra sông. Nằm im phăng phắc. | nhạc tắt · im 1.5 s |
| 1:16 | H06 → H06b | **MN**: Từ mặt sông, một vệt nước dài rẽ đôi, trườn qua bờ kè, luồn qua khe cửa, bò ngoằn ngoèo trên sàn đá hoa. | "VỆT NƯỚC RẼ ĐÔI" · nuoc truon |
| 1:24 | H07 | **MN**: Sáng ra, ông Đại xuống lầu. Phòng khách ngập nước trong vắt, cá lội quanh chân sofa. | "PHÒNG KHÁCH THÀNH AO" · nuoc chay |
| 1:30 | H03 | **DAI**: Vỡ đường ống à? Gọi thợ vác máy bơm công suất lớn hút sạch ngay cho tao! | ly roi · vo |
| 1:36 | H08 | **MN**: Thợ đo: phòng khách, bếp, phòng ngủ. Đúng ba trăm mét vuông, không lệch một phân. | "ĐÚNG 300 m²" · thuoc day |
| 1:42 | H09 | **MN**: Hai máy bơm gầm rú suốt đêm hút cạn ra sân. Ông Đại cười: tiền đè chết nước. | bom chay ram ram |
| 1:48 | H07 | **MN**: Đến trưa, nước rỉ ngược qua kẽ gạch, dâng ngập y mép cũ. Giữa phòng mọc lên một bụi sen. | "SEN MỌC GIỮA PHÒNG" · nuoc ri |
| 1:55 | H05 | **LUONG**: Trả tấc bến… lấy tấc nhà. Chưa trả bãi, nước chưa lui. | nuoc sau · bassdown |
| 2:00 | H03 | **DAI**: Tao đổ mười xe đá bịt luôn cái vực, xem sông đòi kiểu gì! | "ĐỔ ĐÁ BỊT VỰC" · da do |
| 2:05 | H02 | **MN**: Ông Đại trút đá xuống sông, lắp bốn máy bơm xả bùn thách thức. | xe tai trut da · bom ram ram |
| 2:10 | H09 | **MN**: Ba giờ sáng ngày khánh thành. Bốn máy bơm chập điện nổ tung. Đáy vực gầm chuyển mình dữ dội. | chap dien · BÙM · rung chuyen |
| 2:17 | H07 | **MN**: Sàn đá nứt toác, nước sông cuộn trào đội tung nền nhà, dâng ngập ngang ngực. Móng nhà bắt đầu trượt. | "MÓNG BẮT ĐẦU TRƯỢT" · rach da |
| 2:24 | H03 | **DAI**: Alô? Khách VIP đang trên xe đến rồi à? Khoan… đừng đến vội! | chuong dien thoai · hoang loan |
| 2:28 | H07 | **MN**: Ông Đại co ro nóc tủ. Mất bến du thuyền, hay mất cả căn nhà triệu đô xuống vực? | "ĐIỂM THẤP NHẤT" · nuoc cuon |
| 2:34 | H03 | **DAI**: Máy xúc đâu! Phá… phá ngay bờ kè bê tông, trả lại bãi bồi cho sông! | "PHÁ KÈ TRẢ BÃI BỒI" · het len |
| 2:39 | H02 | **MN**: Kè bê tông vỡ đến đâu, nước rút đến đấy. Trả đủ ba trăm mét vuông cho sông. | may xuc pha da · nuoc rut xoay |
| 2:45 | H04 | **LAI**: Bãi bồi về rồi! Chiều nay dân làng lại tha hồ vớt rau muống! | song vo nhe nhang · chim hot |
| 2:50 | H07 | **MN**: Khách VIP đến nơi, thấy chủ tịch đứng đón giữa bãi sình. Phòng khách khô cong, chỉ còn một vũng nước nhỏ với bông sen, như cái biên lai. | "BIÊN LAI CỦA THUỒNG LUỒNG" · ting |
| 2:58 | S33 → S34 | **MN**: Lấn của ai nhớ người ta có thước. Thuồng luồng có thước. Thổ Công có thước. Tao không có thước, nhưng tao có trí nhớ. | rit dieu cay · nha khoi |
| 3:05 | B02 | **MN**: Tập sau: cò đất gom ruộng chờ lên giá, gặp ông bù nhìn ba mươi năm. Cò đất gặp cò thật, xem ai bay màu. | "TẬP SAU" · whoosh |
| 3:12 | S06 | **MN**: Bấm đăng ký đi. Mùa hai dài lắm, không theo là trôi sông đấy. | "ĐĂNG KÝ" · mõ CỘC · trong tủ: cộc |

## SHORTS

### SH1 (TRỌN)
- **DAI**: Đàn cá trăm nghìn đô, sao nửa đêm lại xếp hàng quay ra sông thế kia? (H01) · pop "ĐÀN CÁ XẾP HÀNG"
- **LUONG**: Chúng không chào ông. Chúng chào… chủ cũ. (H05) · pop "THUỒNG LUỒNG"
- **MN**: Ông Đại lấn sông làm bến du thuyền, tưởng tiền đè chết nước. (H02)
- **MN**: Nửa đêm, sông cử thuồng luồng vào tận phòng khách tính sổ: lấn ba trăm mét vuông, sông đòi lại đúng ba trăm mét vuông. (H07) · pop "m² ĐỔI m²"
- *(không lời, 0.8 s)*
- **MN**: Phòng khách biến thành cái ao thế nào? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRỌN)
- **DAI**: Sông là của chung, mà của chung thì tôi quen hết. Sổ đỏ ghi đến mép nước. Mép nước ở đâu… tôi quyết! (H03) · pop "SỔ ĐỎ VEN SÔNG"
- **LAI**: Bãi bồi làng tôi thả lưới ba đời. Ông lấp sạch, dân lấy gì kiếm ăn? (H04)
- **MN**: Dân kêu thì ông tài trợ cái loa xã. Nhưng khúc sông này có thuồng luồng nghìn năm. (H05) · pop "THUỒNG LUỒNG GIỮ VỰC"
- **LUONG**: Tấc bến… ba trăm. Vực sâu không thiếu nước, chỉ thiếu công bằng. (H05)
- *(không lời, 0.8 s)*
- **MN**: Mép nước hôm sau dời thẳng vào giữa phòng khách. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 (TRỌN)
- **DAI**: Vỡ đường ống à? Gọi thợ vác máy bơm công suất lớn hút sạch ngay cho tao! (H03) · pop "VỠ ĐƯỜNG ỐNG?"
- **MN**: Thợ đo: phòng khách, bếp, phòng ngủ. Đúng ba trăm mét vuông, không lệch một phân. (H08) · pop "ĐÚNG 300 m²"
- **MN**: Hút cạn cả đêm, đến trưa nước ngầm lại đùn lên y mép cũ, kèm một bụi sen nở giữa nhà. (H07) · pop "SEN MỌC GIỮA PHÒNG"
- **LUONG**: Trả tấc bến… lấy tấc nhà. Chưa trả bãi, nước chưa lui. (H05)
- *(không lời, 0.8 s)*
- **MN**: Kẻ giàu có đấu lại thước đo của sông? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 (TRỌN)
- **DAI**: Tao đổ mười xe đá bịt luôn cái vực, xem sông đòi kiểu gì! (H03) · pop "ĐỔ ĐÁ BỊT VỰC"
- **MN**: Bốn máy bơm công nghiệp gầm rú ngày đêm xả bùn ra sông. (H09)
- **MN**: Ba giờ sáng ngày khánh thành, máy bơm nổ tung, sàn đá nứt toác, nước sông cuộn trào đội tung nền nhà. (H07) · pop "BÙM! VỠ TRẬN"
- **DAI**: Máy xúc đâu! Phá… phá ngay bờ kè bê tông, trả lại bãi bồi cho sông! (H03)
- *(không lời, 0.8 s)*
- **MN**: Biên lai thu nợ của thuồng luồng trông thế nào? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN)
- **MN**: Khách VIP đến dự khánh thành bến du thuyền, thấy chủ tịch đứng đón giữa bãi sình lầy. (H02) · pop "KHÁNH THÀNH BÃI SÌNH"
- **LAI**: Bãi bồi về rồi! Chiều nay dân làng lại tha hồ vớt rau muống! (H04)
- **MN**: Phòng khách khô cong, chỉ còn đúng một vũng nước nhỏ góc nhà với bông sen nở bung. (H07) · pop "BIÊN LAI 300 m²"
- **MN**: Thuồng luồng đòi đúng ba trăm mét vuông, trả đủ thì nó trả nhà. (S26)
- *(không lời, 0.8 s)*
- **MN**: Trận chiến giữ bãi bồi kết thúc ra sao? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 (TRAILER)
- **MN**: Nửa đêm. Ba chục con cá koi bỗng dừng khựng. Xếp thẳng hàng, quay đầu ra sông. (H01) · pop "ĐIỀM BÁO NỬA ĐÊM"
- **LUONG**: Chúng không chào ông. Chúng chào… chủ cũ. (H05) · pop "THUỒNG LUỒNG"
- **MN**: Từ mặt sông phẳng lặng, một vệt nước dài rẽ đôi, trườn qua bờ kè, luồn qua khe cửa kính phòng khách. (H06b) · pop "VỆT NƯỚC RẼ ĐÔI"
- **DAI**: Con gì… con gì vừa bò vào nhà tao thế này?! (H03)
- **MN**: Sáng hôm sau, thứ gì đang đợi ông Đại dưới chân cầu thang? Bản đầy đủ, link dưới. (S26)

### SH7 (TRAILER)
- **MN**: Hạn chót: trưa thứ Bảy cắt băng khánh thành đón dàn khách VIP. (H03) · pop "HẠN: TRƯA THỨ BẢY"
- **MN**: Ba giờ sáng, sàn đá hoa nứt toác, nước sông cuộn trào đội tung nền nhà dâng ngập ngang ngực. (H07) · pop "ĐÁY VỰC NỔI GIẬN"
- **DAI**: Alô? Khách VIP đang trên xe đến rồi à? Khoan… đừng đến vội! (H03)
- **MN**: Nước dâng ngập cổ sofa, móng biệt thự triệu đô bắt đầu trượt thẳng xuống vực thuồng luồng. (H07)
- **MN**: Ông Đại sẽ chọn giữ bến du thuyền, hay đập bỏ cứu mạng? Bản đầy đủ, link dưới. (S26)

## Hình
Tận dụng: B02 + ep01 S01/S06/S26/S33/S34 (Ma Nó).

### Danh sách ảnh v2 và trạng thái sử dụng v3:
| Mã | Mô tả | Trạng thái v3 |
|---|---|---|
| H01 | Vườn biệt thự ven sông đêm, bể koi đèn chìm, ba chục cá koi xếp thành một hàng thẳng quay về phía sông | Dùng (0:00, 0:02, 1:08; SH1, SH6) |
| H02 | Biệt thự ven sông: máy trộn bê tông, kè đá lấn ra mặt nước, bãi bồi bị lấp; bản cuối máy xúc phá kè | Dùng (0:21, 2:05, 2:39; SH1, SH5) |
| H03 | Ông Đại cận: áo choàng lụa, ly vang, đứng trên bến du thuyền riêng; bản đứng bậc thang, ly rơi; bản hốt hoảng | Dùng (0:28, 1:02, 1:30, 2:00, 2:24, 2:34; SH2, SH3, SH4, SH6, SH7) |
| H04 | Bà Lài trên thuyền nan, nón lá, nhìn bãi bồi; bản sau thả lưới ở bãi bồi hồi lại | Dùng (0:35, 2:45; SH2, SH5) |
| H05 | Dưới mặt sông tối, vực sâu, vệt vảy dài thoáng qua, đôi mắt mờ (không lộ hình rõ) | Dùng (0:07, 0:45, 0:50, 1:55; SH1, SH2, SH3, SH6) |
| H06 | Mặt sông đêm phẳng như gương, một vệt nước dài rẽ đôi tiến vào bờ kè bê tông | Dùng (1:16) |
| H06b | Vệt nước ướt dài trườn từ mặt kè, qua vườn, len dưới khe cửa kính, bò trên nền đá hoa cương phòng khách tối | Dùng (1:16; SH6) |
| H07 | Phòng khách biệt thự ngập nước trong, nền đá hoa cương dưới nước, sofa nổi, cá lội qua chân bàn; bản có sen mọc; bản khô chỉ còn vũng nhỏ một bông sen | Dùng (1:24, 1:48, 2:17, 2:28, 2:50; SH1, SH3, SH4, SH5, SH7) |
| H08 | Thợ cầm thước dây đo mép nước trong phòng khách ngập | Dùng (1:36; SH3) |
| H09 | Đêm, hai máy bơm lớn chạy, ống hút nước từ phòng khách ra sân; bản 4 máy bơm chập cháy | Dùng (1:42, 2:10; SH4) |

## Lịch
- **LONG**: Thứ Hai 10/05 18:00 (+07)
- **SH1**: Thứ Hai 10/05 19:00 (+07)
- **SH2**: Thứ Ba 11/05 11:30 (+07)
- **SH3**: Thứ Ba 11/05 19:00 (+07)
- **SH4**: Thứ Tư 12/05 11:30 (+07)
- **SH5**: Thứ Tư 12/05 19:00 (+07)
- **SH6**: Thứ Năm 13/05 11:30 (+07)
- **SH7**: Thứ Năm 13/05 19:00 (+07)
- *(Tập sau P50: Bù nhìn "Cò đất gặp cò thật" ra mắt Thứ Năm 13/05 18:00)*
