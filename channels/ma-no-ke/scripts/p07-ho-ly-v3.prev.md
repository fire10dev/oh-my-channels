# Dự án N — Hồ ly tinh “Mặt mượn” (v3, 2026-11-23)

- Rút LONG còn khoảng 580 chữ thoại, bỏ phần nhắc lại và canh lại mốc theo tốc độ dựng.
- Bổ sung hạn chót 06:00 ngày 13/12 và cái giá cho Linh, hồ ly.
- Làm rõ ba lần thử của Linh, điểm thấp lúc 05:58 và cú lật do hồ ly tự chọn hoàn tiền.
- Mỗi short TRỌN có punch riêng, đủ độ dài và giữ khoảng lặng 0,8 giây trước câu chỉ link.
- Giữ kết châm biếm, teaser P08 vào Thứ Năm và các mã hình đã có.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Linh có lấy lại được danh tính và ngăn hồ ly hoàn tiền nghìn đơn trước 06:00 sáng 13/12 không?
- **Đồng hồ / cái giá:** Trước khi phiên sale kết thúc lúc 06:00 sáng 13/12, Linh phải lấy lại quyền truy cập shop. Nếu trượt, hồ ly dùng quyền của Linh hoàn tiền nghìn đơn; Linh mất quyền chứng minh mình là chủ shop, còn hồ ly bị chính giao dịch vạch mặt.
- **Ba nấc leo thang:** (1) Linh đối chất ở phố đi bộ, fan tin ảnh hơn người thật. (2) Linh thử đăng nhập bằng mặt thật nhưng máy từ chối. (3) Linh lên live, công khai lô kem giả và để hồ ly tự chọn hoàn tiền dưới danh tính Linh.
- **Điểm thấp:** 05:58. Linh không vào được shop; hồ ly đã mở trang hoàn tiền.
- **Cú lật:** Hồ ly chọn hoàn tiền đủ một nghìn đơn bằng tài khoản đã chiếm, tự trả tiền để giữ lời “chị hoàn đủ”. Linh chọn phát màn hình giao dịch lên live, đổi quyền kiểm soát shop lấy bằng chứng công khai.
- **Khoảnh khắc rợn:** Linh tắt mic và ngồi im; gương mặt trên màn hình vẫn nói.
- **Câu kết:** Ma Nó châm biếm ghế số 46, nhá tập P08 vào Thứ Năm và kêu đăng ký.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó, giọng Thiện Minh; mồi gọn, châm biếm tỉnh | B02, S01/S26/S33/S34; S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| HL | Hồ tinh Hồ Tây; xưng chị, gọi em/cưng, chậm và khinh khỉnh | H00, H03, H07, H09, H11 | Ngọc Huyền | `asetrate=48000*0.97,aresample=48000,aecho=0.8:0.4:40:0.15` |
| LINH | Linh; giọng bán hàng nhanh, khi mất bình tĩnh thì hụt nhịp | H01, H08 | Trúc Ly | `atempo=1.05` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "HL": {"preset": "Ngọc Huyền", "fx": "asetrate=48000*0.97,aresample=48000,aecho=0.8:0.4:40:0.15"}, "LINH": {"preset": "Trúc Ly", "fx": "atempo=1.05"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | H01 | *(không lời, 2 s)* | ting đơn hàng · chữ “02:00 · SALE 12/12” |
| 0:02 | H02 | *(không lời, 2 s)* | tiếng chạm màn hình · nhạc tắt |
| 0:04 | H02 | **HL**: Cả nhà chờ chị chút nha. | tiếng loa điện thoại |
| 0:07 | H01 | **LINH**: Ai vừa nói đấy? | im |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Một con hồ ly tu nghìn năm, đang bực vì một shop kem mượn tên mình. | mõ CỘC · chữ “MẶT MƯỢN” |
| 0:16 | H03 | **HL**: Chị là hồ tinh Hồ Tây. Lạc Long Quân đuổi chị một trận, từ đó chị sống kín tiếng. | sóng hồ |
| 0:23 | H04 | **HL**: Chị tu nghìn năm mới biến thành người. Em nó tải app ba giây. | chữ “1.000 NĂM / 3 GIÂY” · ting |
| 0:30 | S26 | **MN**: Cạnh tranh không lành mạnh. | |
| 0:33 | H01 | **LINH**: Kem trẻ hóa Hồ Ly! Bôi một tuần, trẻ ra mười tuổi! Mua một tặng ba, chốt đơn nào cả nhà! | ting ting · chữ “TRẺ RA 10 TUỔI” |
| 0:41 | H05 | **MN**: Hũ kem trộn ở nhà tắm. Kênh lấy tên Linh Hồ Ly. Thương hiệu nghe rất có chiều sâu. | chữ “SX: NHÀ TẮM” |
| 0:49 | H03 | **HL**: Lấy tên chị thì thôi. Lấy luôn cái mặt chị chưa kịp xin phép mới là nhanh. | chuông gió |
| 0:55 | H03 | **HL**: Mặt nào chị đã nhìn thấy, chị biến thành được. Mặt thật hay filter, chị không phân biệt. | chữ “THẤY MẶT NÀO → BIẾN MẶT ĐÓ” |
| 1:04 | H02 | **HL**: Mặt kia đêm nào cũng hiện trên hàng trăm nghìn màn hình. Chị nhìn quen đến phát chán. | tiếng cáo xa |
| 1:11 | S26 | **MN**: Người ta dựng danh tính bằng filter. Rồi ngạc nhiên khi máy tin cái filter. | |
| 1:19 | H01 | **MN**: Đêm sale 12/12. Một nghìn đơn. Linh mỏi, tắt mic, ngồi im. | ting dừng |
| 1:26 | H02 | **MN**: Màn hình vẫn sáng. Gương mặt trên đó vẫn cười. | nhạc tắt |
| 1:31 | H02 | **HL**: Cả nhà chờ chị chút nha. | im |
| 1:35 | H01 | **MN**: Linh không nói. Mặt trên màn hình vừa nói xong. | tiếng cáo xa · lặng 1,5 s |
| 1:42 | H07 | **MN**: Sáng ra, phố đi bộ có một Linh Hồ Ly bằng xương bằng thịt. Fan xếp hàng xin chụp chung. Ai cũng gặp đúng người mình theo dõi. | tách máy ảnh |
| 1:52 | H07 | **HL**: Ừ, chị là Linh. Mặt chị đây, cưng soi đi. | |
| 1:57 | H08 | **LINH**: Tôi mới là Linh. Kênh đó của tôi! | tiếng đám đông |
| 2:02 | H08 | **MN**: Fan nhìn Linh, nhìn ảnh, rồi nhìn Linh lần nữa. Máy ảnh cũng có quyền bối rối. | chữ “KHÔNG KHỚP” |
| 2:10 | H06 | **LINH**: Tôi đăng nhập shop. Mở được trang chủ là chứng minh được. | tiếng chạm |
| 2:15 | H06 | **MN**: Hôm mở shop, Linh dùng mặt filter. Máy quét mặt thật: từ chối. | bíp lỗi · chữ “KHÔNG KHỚP KHUÔN MẶT” |
| 2:22 | H09 | **HL**: Chị vào được. Mà chị còn một nghìn đơn giả cần xử lý. | tiếng máy in vận đơn |
| 2:29 | H10 | **MN**: Linh gọi hỗ trợ. Hệ thống đòi chụp mặt chủ shop, rồi lại chọn hồ ly. | bíp lỗi |
| 2:36 | H08 | **LINH**: Chị lấy mặt tôi, lấy shop tôi, giờ còn định hoàn tiền? | |
| 2:42 | H09 | **HL**: Kem giả thì phải hoàn. Chị làm ăn có trách nhiệm lắm. | ting · chữ “HOÀN TIỀN” |
| 2:48 | H08 | **MN**: Linh lên live bằng mặt thật, công khai lô kem giả. Cô để người đang nắm shop tự chọn. | nhạc dồn nhẹ |
| 2:57 | H08 | **LINH**: Đây là mặt thật của tôi. Đây là kem giả. Tôi không bán nữa. | chữ “MẶT THẬT · HÀNG GIẢ” |
| 3:05 | H09 | **HL**: Còn hai phút đến sáu giờ. Chị hoàn đủ một nghìn đơn. Muốn chị dừng thì tự lấy lại shop đi. | chữ “05:58” · tick |
| 3:14 | H08 | **LINH**: Tôi không vào được. Chị biết rõ mà. | nhạc tắt |
| 3:18 | H10 | **MN**: Năm giờ năm mươi tám. Linh không vào được shop. Nút hoàn tiền sáng trên màn hình hồ ly. Cô chẳng còn gì để mặc cả. | chữ “05:58” |
| 3:29 | H09 | **HL**: Chị chọn hoàn hết. Tiền chị bù. Chị không để người mua ôm kem giả. | ting dồn |
| 3:37 | H10 | **MN**: Một nghìn giao dịch chạy. Chủ shop vẫn là Linh. Thiết bị xác nhận là của hồ ly. | chữ “1.000/1.000” · bíp xác nhận |
| 3:44 | H08 | **LINH**: Đang phát màn hình. Cả nhà tự xem ai vừa hoàn tiền, ai vừa nhận là chủ shop. | tiếng live bật |
| 3:53 | H09 | **HL**: Em giăng bẫy chị à? | |
| 3:56 | H08 | **LINH**: Chị tự chọn bấm. | |
| 3:59 | H09 | **HL**: Chị trả tiền. Chị chịu lỗ. Nhưng mặt này chị giữ. | |
| 4:05 | H08 | **MN**: Giao dịch hoàn đủ. Linh có bằng chứng, nhưng mất danh tính giả đã kéo nghìn đơn về. | tiếng thông báo · chữ “ĐÃ HOÀN” |
| 4:14 | H11 | **MN**: Cuối tháng, hồ ly chán mang mặt mượn. Nó trả mặt về mặt hồ. Kênh còn người theo dõi, chủ thật phải bắt đầu lại. | sóng |
| 4:24 | H03 | **HL**: Chị tu nghìn năm mới có một cái mặt. Em tải app ba giây, rồi mất cả cửa hàng. Sale đúng là biết trừ. | mõ CỘC |
| 4:33 | S33 → S34 | **MN**: Mặt tao mấy trăm năm nay vẫn tròn thế này. Không ai thèm mượn. Dễ quản lý. | rít điếu cày |
| 4:41 | B02 | **MN**: Thứ Năm: chuyến xe khách cuối năm nhồi bốn mươi lăm chỗ… và một tấm vé ghế số bốn mươi sáu. | thẻ “TẬP SAU · THỨ NĂM” · whoosh |
| 4:50 | S06 | **MN**: Bấm đăng ký đi. Kênh này đang thiếu người theo dõi, chứ chưa thiếu ghế. | chữ “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN · 9:16

- **HL**: Cả nhà chờ chị chút nha. (H02) · pop “HỒ LY”
- **LINH**: Ai vừa nói đấy? (H01)
- **MN**: Linh tắt mic, ngồi im. Mặt trên màn hình vẫn nói. (H02)
- **MN**: Màn hình vẫn sáng. Gương mặt trên đó vẫn cười. (H02)
- **HL**: Chị đâu cần bật mic; cái mặt mượn tự biết chốt đơn. (H02)
- **MN**: Chủ shop ngồi yên mà vẫn có nhân viên trực đêm. Tài khoản này tiết kiệm lương ghê. (H02)
- *(lặng, 0,8 s)* (H02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH2 — TRỌN · 9:16

- **HL**: Tu nghìn năm mới biến thành người. (H03) · pop “HỒ LY”
- **HL**: Em nó tải app ba giây. (H04)
- **MN**: Cạnh tranh không lành mạnh. (S26)
- **HL**: Chị tu nghìn năm mới có một cái mặt. Em tải app ba giây, rồi mất cả cửa hàng. Sale đúng là biết trừ. (H03)
- **MN**: Ít ra phép tính lần này không cần máy quét khuôn mặt. (S26)
- **MN**: Ngàn năm tích đức, ba giây tích nợ. Công nghệ đúng là biết chọn người để nâng cấp. (S26)
- *(lặng, 0,8 s)* (H03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH3 — TRỌN · 9:16

- **LINH**: Kem trẻ hóa Hồ Ly! Bôi một tuần, trẻ ra mười tuổi! Mua một tặng ba, chốt đơn nào cả nhà! (H01) · pop “LINH”
- **MN**: Hũ kem trộn ở nhà tắm. Kênh lấy tên Linh Hồ Ly. Thương hiệu nghe rất có chiều sâu. (H05)
- **HL**: Lấy tên chị thì thôi. Lấy luôn cái mặt chị chưa kịp xin phép mới là nhanh. (H03) · pop “HỒ LY”
- **MN**: Hàng giả mà bao bì tự tin như hàng thật. (H05)
- **MN**: Người bán hứa trẻ ra mười tuổi; cái mặt trên live thì không cần hứa, nó tự nhận ca đêm. (H05)
- *(lặng, 0,8 s)* (H05)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH4 — TRỌN · 9:16

- **HL**: Mặt nào chị đã nhìn thấy, chị biến thành được. Mặt thật hay filter, chị không phân biệt. (H03) · pop “HỒ LY”
- **MN**: Đêm sale 12/12. Một nghìn đơn. Linh mỏi, tắt mic, ngồi im. (H01)
- **HL**: Cả nhà chờ chị chút nha. (H02)
- **MN**: Gói cước live bao gồm cả giọng nói ngoài giờ. (H02)
- **MN**: Còn người thật đã tan ca, gương mặt trên màn hình vẫn chăm chỉ hơn cả chủ shop. (H02)
- *(lặng, 0,8 s)* (H02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH5 — TRỌN · 9:16

- **MN**: Sáng ra, phố đi bộ có một Linh Hồ Ly bằng xương bằng thịt. Fan xếp hàng xin chụp chung. (H07) · pop “HỒ LY”
- **HL**: Ừ, chị là Linh. Mặt chị đây, cưng soi đi. (H07)
- **LINH**: Tôi mới là Linh. Kênh đó của tôi! (H08) · pop “LINH”
- **MN**: Fan nhìn Linh, nhìn ảnh, rồi nhìn Linh lần nữa. Máy ảnh cũng có quyền bối rối. (H08)
- **HL**: Chụp chung thoải mái. Chị đang nhận diện bằng ánh sáng tốt. (H07)
- *(lặng, 0,8 s)* (H08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH6 — TRAILER · 9:16

- **LINH**: Tôi đăng nhập shop. Mở được trang chủ là chứng minh được. (H06) · pop “LINH”
- **MN**: Hôm mở shop, Linh dùng mặt filter. Máy quét mặt thật: từ chối. (H06)
- **HL**: Chị vào được. Mà chị còn một nghìn đơn giả cần xử lý. (H09) · pop “HỒ LY”
- **MN**: Năm giờ năm mươi tám. Linh không vào được shop. Nút hoàn tiền sáng trên màn hình hồ ly. (H10)
- **HL**: Còn hai phút đến sáu giờ. Chị đã mở trang hoàn tiền rồi. (H09)
- *(cắt đen trước đáp án)*

### SH7 — TRAILER · 9:16

- **MN**: Một nghìn giao dịch chạy. Chủ shop vẫn là Linh. Thiết bị xác nhận là của hồ ly. (H10) · pop “HỒ LY”
- **LINH**: Đang phát màn hình. Cả nhà tự xem ai vừa hoàn tiền, ai vừa nhận là chủ shop. (H08) · pop “LINH”
- **HL**: Em giăng bẫy chị à? (H09)
- **LINH**: Chị tự chọn bấm. (H08)
- **HL**: Chị trả tiền. Chị chịu lỗ. Nhưng mặt này chị giữ. (H09)
- **MN**: Trên live, giao dịch đã hiện đủ. (H10)
- **MN**: Người xem biết ai cầm tài khoản. Còn hồ ly sẽ phải giải thích hóa đơn bằng gương mặt mượn. (H10)
- *(cắt đen trước kết quả)*

## Hình

Tái dùng: B02, ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | Dùng trong v3 |
|---|---|---|
| H00 | Sheet hồ ly 3:4: thiếu nữ áo dài nâu kiểu cổ, tóc búi, chín đuôi cáo trắng mờ như khói, mắt hồ phách; biểu cảm nheo mắt, nhếch mép, ký tặng, chán | Có |
| H01 | Phòng trọ nhỏ đêm: vòng đèn tròn, điện thoại trên giá, thùng hàng chồng, Linh mặt bình thường ngồi trước máy | Có |
| H02 | Cực cận màn hình điện thoại: gương mặt filter, đang cười, khung live có tim bay, không chữ | Có |
| H03 | Hồ ly ngồi trên mái đình cong ven Hồ Tây, đêm sương, đèn đường xa | Có |
| H04 | Cực cận điện thoại: app ghép mặt, thanh tải gần đầy, không chữ | Có |
| H05 | Cực cận hũ kem nhãn in lệch, bột trắng vương, chậu nhựa trong nhà tắm phía sau | Có |
| H06 | Cực cận điện thoại: khung quét khuôn mặt viền đỏ, mặt thật Linh trong khung, không chữ | Có |
| H07 | Phố đi bộ ban ngày: hồ ly mang mặt filter, ký tặng, fan vây quanh | Có |
| H08 | Linh thật đeo khẩu trang, lách đám đông giơ điện thoại; fan nhìn cô rồi nhìn màn hình | Có |
| H09 | Hồ ly livestream trong phòng sang, thùng kem giả phía sau | Có |
| H10 | Cực cận điện thoại Linh: thông báo hoàn tiền đơn hàng liên tiếp, không chữ | Có |
| H11 | Đêm ven hồ: hồ ly gỡ chiếc mặt mỏng như giấy, thả trôi trên mặt nước, đuôi cáo tỏa khói | Có |

## Lịch

- LONG — Thứ Hai 14/12, 18:00 (+07).
- SH1 — Thứ Hai 14/12, 19:00 (+07).
- SH2 — Thứ Ba 15/12, 11:30 (+07).
- SH3 — Thứ Ba 15/12, 19:00 (+07).
- SH4 — Thứ Tư 16/12, 11:30 (+07).
- SH5 — Thứ Tư 16/12, 19:00 (+07).
- SH6 — Thứ Năm 17/12, 11:30 (+07).
- SH7 — Thứ Năm 17/12, 19:00 (+07).
