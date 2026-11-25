# Dự án 68 — Người chiếu bóng "Phim lậu" (v3, 2026-11-24)

- **Đồng hồ + cái giá cụ thể**: Hạn chót đúng 0:00 đêm nay; web cá cược lậu ra giá 50 triệu cho bản cam bom tấn độc quyền, nếu chậm hạn sẽ mất trắng tiền cọc và bị xóa sổ trang web.
- **3 nấc leo thang chủ động**: Kiên giấu điện thoại trong túi áo khoác quay suất sớm 19:00 (thất bại: video chỉ ra bãi chiếu bóng năm 1980) → đổi sang kính camera giấu kín ở suất khuya 22:30 (thất bại: ông Tám hiện hình dặn mua vé) → nước liều 23:30 đột nhập phòng máy lửng cắm USB chép thẳng file gốc máy chủ.
- **Điểm thấp nhất & Cú lật do nhân vật chọn**: Bị sập cửa nhốt trong phòng máy tối đen cùng máy chiếu nhựa tự chạy; Kiên chọn móc sạch 10 triệu tiền mặt trong ví nhét vào hòm quyên góp ngày xưa của ông Tám để chuộc thân và lấy file về đăng.
- **Cold open không lộ đáp án**: Treo câu hỏi bằng tiếng máy chiếu nhựa lạch cạch đanh gọn sau lưng khán giả giữa rạp chiếu kỹ thuật số tiền tỉ; Ma Nó không báo trước cú lật.
- **Khoảnh khắc rợn duy nhất**: Suất 19:00 rạp tối om, hệ thống âm thanh Dolby bỗng lẫn tiếng sắt gỉ quay tay sau gáy; ngoái lại thấy bóng già mũ cối trên phòng máy nhìn trừng trừng xuống chỗ Kiên, cả rạp không ai nghe thấy ngoài gã.
- **Kết chuẩn bible**: Kiên mua vé xem phim đàng hoàng vì "đằng nào quay lén cũng chỉ ra ông Tám, mua vé ngồi ghế đệm cho đỡ mỏi lưng"; châm biếm kẻ cắp trắng tay và con ma giữ nghề thành hiện tượng mạng.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Một gã chuyên quay lén phim rạp có qua mặt được bóng ma người thợ chiếu bóng giữ nghề suốt bốn mươi năm để kịp ẵm trọn món tiền cọc trước nửa đêm?
- **Đồng hồ + cái giá**: Đúng 0:00 đêm nay phải có link bản cam độc quyền; trễ hạn sẽ mất cọc 50 triệu và web lậu bị sập hoàn toàn.
- **3 nấc leo thang**:
  1. Nấc 1: Giấu điện thoại khoét lỗ túi áo quay suất chiếu sớm 19:00 → File mở ra chỉ có phim đen trắng bãi chiếu bóng năm 1980.
  2. Nấc 2: 22:30 đổi sang kính camera công nghệ cao, ngồi chính diện quay suất khuya → File lưu về vẫn chỉ có cuộn phim đen trắng và ông Tám cười bảo "Mua vé đi con".
  3. Nấc 3 (Nước liều): 23:30 rạp đóng cửa, Kiên bẻ chốt cầu thang lẻn lên phòng máy lửng cắm USB chép thẳng file gốc từ máy chủ.
- **Điểm thấp nhất**: 23:45, Kiên bị sập chốt nhốt trong phòng máy tối om. Máy chủ ngắt điện, cái máy nhựa cổ ở góc bỗng tự quay tít mù xả phim lạch cạch, không còn lối thoát.
- **Cú lật (ai chọn gì, trả giá gì)**: Đối diện ông Tám bên hòm sắt vụn, Kiên chọn móc sạch 10 triệu tiền mặt trong ví nhét vào hòm để được mở cửa tháo chạy; cuống cuồng nén file đẩy lên mạng, file bom tấn lại biến thành phim tài liệu bãi chiếu bóng khiến web cờ bạc cắt sạch hợp đồng, nhưng đoạn phim lại viral triệu view.
- **Khoảnh khắc rợn**: Suất chiếu sớm 19:00, âm thanh Dolby của rạp bỗng lẫn tiếng sắt gỉ lạch cạch sau gáy; Kiên ngoái lại thấy bóng già mũ cối trên phòng máy nhìn trừng trừng xuống hàng ghế, cả rạp chỉ mình gã nghe thấy.
- **Câu kết**: Kiên mua vé ngồi xem đàng hoàng cho đỡ mỏi lưng; Ma Nó châm biếm hiện tượng mạng và nhắc khán giả kiểm tra cuống vé khi vào rạp.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| KIEN | Kiên "Cam" | C03, C04, C08 | Adam bựa | `atempo=1.05` |
| TAM | Ông Tám | C02, C06, C07, C09 | Thiền Tâm Đức | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25` |
| BAN | Chị Hoa bán vé | C05 | Ngọc Huyền | `anull` |

```json voices
{
  "MN": {
    "preset": "Thiện Minh",
    "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"
  },
  "KIEN": {
    "preset": "Adam bựa",
    "fx": "atempo=1.05"
  },
  "TAM": {
    "preset": "Thiền Tâm Đức",
    "fx": "asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25"
  },
  "BAN": {
    "preset": "Ngọc Huyền",
    "fx": "anull"
  }
}
```

## LONG (588 chữ lời thoại, dựng ≈ 3:15)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | C01 | *(không lời, 2.5 s)* | "RẠP PHIM SỐ 1 HUYỆN" · lạch cạch · nhạc tắt |
| 0:02 | C02 | **MN**: Rạp chiếu số tiền tỉ. Sao sau lưng… lại có tiếng quay tay cuộn phim nhựa? | lạch cạch · coc |
| 0:08 | S01 → S26 | **MN**: Lại mò vào à? Xem phim lậu bao giờ chưa? Biết ai quay không? | "XEM PHIM LẬU" · braam |
| 0:13 | S34 | **MN**: Có đứa chuyên quay trộm. Và một ông già… bốn mươi năm chưa rời phòng máy. | "40 NĂM CHƯA RỜI PHÒNG MÁY" |
| 0:18 | C03 | **MN**: Kiên "Cam". Áo khoét lỗ túi vừa ống kính. Chuyên quay lén bán web lậu. | "NGHỀ: QUAY LẬU" |
| 0:24 | C04 | **KIEN**: Hạn nửa đêm nay. Web cờ bạc trả năm mươi triệu cho bản cam độc quyền. Chậm là mất cọc, sập trang. | "HẠN: 0:00 ĐÊM NAY" · "KÈO: 50 TRIỆU" · tick |
| 0:32 | C05 | **BAN**: Em gửi vé. Bom tấn này cả tỉnh có mỗi rạp mình chiếu sớm tối nay ạ. | "SUẤT DUY NHẤT" · pop |
| 0:38 | C03 | **KIEN**: Tiền tỉ của nhà rạp, tối nay thành tiền túi của tao. | cuoi |
| 0:42 | S26 → C06 | **MN**: Rạp xây trên bãi chiếu bóng huyện xưa. Ông Tám từng chở máy nhựa đi khắp xã, căng màn giữa sân kho. | "BÃI CHIẾU NĂM 1980" · re |
| 0:50 | C06 | **TAM**: Ai có ngô góp ngô, có tiền góp một hào. Phim là công sức người ta, không được xem chùa. | "GÓP MỘT HÀO" · "KHÔNG XEM CHÙA" |
| 0:57 | C07 | **MN**: Máy chiếu bán sắt vụn rồi. Nhưng người ta bảo: ông Tám vẫn chưa chịu rời phòng máy. | "CHƯA RỜI PHÒNG MÁY" |
| 1:03 | C01 | **MN**: Bảy giờ tối, rạp tắt đèn. Kiên bấm nút ghi hình trong túi áo. Dễ ợt. | "19:00 · BẤM MÁY" · bip |
| 1:09 | C08 | **MN**: Đang quay, Kiên lạnh sống lưng. Loa rạp bỗng lẫn tiếng sắt gỉ quay lạch cạch sau gáy. | lachcach · nhactat |
| 1:16 | C02 | **MN**: Hắn ngoái lại. Qua khung kính, bóng già mũ cối đang quay tay cuộn phim to đùng, mắt nhìn trừng trừng xuống Kiên. | "MŨ CỐI · PHÒNG MÁY" · imlang |
| 1:24 | C01 | **MN**: Cả rạp không ai nghe ngoài hắn. Kiên run rẩy ôm túi chuồn về phòng trọ. | whoosh |
| 1:30 | C04 | **KIEN**: Ảo giác thôi. Mở file lên duyệt bản cam nào. | go_phim |
| 1:34 | C09 | **MN**: Mở file: không có bom tấn. Toàn cảnh đen trắng sân kho năm tám mươi. Cuối clip, ông Tám quay sang cười hiền. | "PHIM SÂN KHO 1980" · re |
| 1:42 | C09 | **TAM**: Mua vé đi con. Xem chùa hỏng mắt đấy. | "MUA VÉ ĐI CON" |
| 1:46 | C04 | **KIEN**: Mười giờ rưỡi rồi! Đổi sang kính camera giấu kín, tao vào quay suất khuya! | "22:30 · LEO THANG" · bassdown |
| 1:52 | C08 | **MN**: Kiên quay suất cuối. Nhưng file lưu về vẫn chỉ là cuộn phim đen trắng và câu dặn của ông Tám. | "VẪN ĐEN TRẮNG" |
| 1:59 | C04 | **KIEN**: Mười một giờ rưỡi! Còn nửa tiếng là mất năm mươi triệu! Tao trèo vào phòng máy cắm USB chép thẳng bản gốc! | "23:30 · CÒN 30 PHÚT" · "NƯỚC LIỀU" · tick |
| 2:07 | C02 | **MN**: Kiên lẻn lên phòng máy lửng. Cửa sắt sau lưng bỗng sập rầm một cái, chốt tự gài. | samcua · ket |
| 2:13 | C02 | **MN**: Phòng máy tối om. Máy chủ ngắt điện, nhưng cái máy nhựa cổ ở góc bỗng tự quay tít mù, xả phim lạch cạch. | lachcach2 · rung |
| 2:21 | C07 | **TAM**: Bãi chiếu đóng rồi con. Muốn xin phim thì bỏ tiền vào hòm. Một hào một vé. | "1 HÀO 1 VÉ" |
| 2:27 | C04 | **KIEN**: Cháu nhét hết ví! Mười triệu tiền mặt cháu nhét sạch vào hòm! Cụ tha cho cháu! | "MÓC SẠCH VÍ" · tien |
| 2:33 | C10 | **MN**: Mười một giờ năm mươi chín. Kiên chạy thục mạng về phòng, vội vã đẩy file lên web lậu kịp giữ cọc. | "23:59 · ĐẨY FILE" · go_phim |
| 2:40 | C10 | **MN**: File bom tấn hắn tải lên… lại là phim tài liệu bãi chiếu bóng năm tám mươi. | "LẬT KÈO" |
| 2:45 | C10 | **MN**: Web cờ bạc cắt hợp đồng, khách chửi sập trang. Nhưng đoạn phim ông Tám lại lên xu hướng, hai triệu lượt xem. | "CẮT QUẢNG CÁO" · "2 TRIỆU VIEW" |
| 2:52 | C05 | **BAN**: Dạo này anh Kiên chăm thế, phim nào cũng mua vé vào xem từ đầu. | pop |
| 2:56 | C03 | **KIEN**: Mua vé ngồi ghế đệm xem cho sướng. Quay trộm nữa để lại gặp ông Tám à? | cuoi |
| 3:01 | S33 → S34 | **MN**: Kẻ cắp mất trắng, ông già giữ nghề bỗng thành idol mạng. Vào rạp, nghe tiếng lạch cạch sau gáy thì nhớ sờ cuống vé. | "IDOL MẠNG" · coc |
| 3:09 | B02 | **MN**: Tập sau: bà buôn chợ đầu mối có cái cân điện tử điêu nhất chợ. Nhưng góc chợ có bà bán cân đòn bao cấp… vẫn treo cân mỗi sáng. | "TẬP SAU" · whoosh |
| 3:17 | S06 | **MN**: Bấm đăng ký đi. Kênh tao xem miễn phí, không bắt mày cúng tiền vào hòm đâu. | "ĐĂNG KÝ" · coc |

## SHORTS
### SH1 (TRỌN) — Tiếng máy chiếu nhựa trong rạp kỹ thuật số
- **MN**: Rạp chiếu số tiền tỉ. Sao sau lưng… lại có tiếng quay tay cuộn phim nhựa? (C02) · pop "RẠP KỸ THUẬT SỐ"
- **MN**: Kiên "Cam", áo khoét lỗ túi vừa ống kính, chuyên quay lén bán web lậu. (C03) · pop "KIÊN CAM"
- **MN**: Loa rạp bỗng lẫn tiếng sắt gỉ quay lạch cạch. Ngoái lại, bóng già mũ cối đang trừng trừng nhìn Kiên. (C08) · pop "ÔNG TÁM CHIẾU BÓNG"
- **MN**: Mở file: không có bom tấn. Toàn cảnh đen trắng sân kho năm tám mươi. (C09) · pop "PHIM SÂN KHO 1980"
- **TAM**: Mua vé đi con. Xem chùa hỏng mắt đấy. (C09) · pop "MUA VÉ ĐI CON"
- *(lặng 0.8 s)*
- **MN**: Thằng quay lén mất trắng năm mươi triệu thế nào, tao kể ở bản đầy đủ, link dưới. (S34) · pop "LINK BẢN ĐẦY ĐỦ"

### SH2 (TRỌN) — Kiên Cam và kèo cờ bạc 50 triệu
- **KIEN**: Hạn nửa đêm nay. Web cờ bạc trả năm mươi triệu cho bản cam độc quyền. Chậm là mất cọc! (C04) · pop "KÈO 50 TRIỆU"
- **BAN**: Bom tấn này cả tỉnh có mỗi rạp mình chiếu sớm tối nay ạ. (C05) · pop "SUẤT DUY NHẤT"
- **KIEN**: Tiền tỉ của nhà rạp, tối nay thành tiền túi của tao. (C03) · pop "SĂN PHIM"
- **MN**: Nhưng quay trộm chỉ ra phim của ông Tám. Lẻn lên phòng máy chép trộm, Kiên bị sập cửa nhốt chặt. (C02) · pop "ÔNG TÁM CHIẾU BÓNG"
- **KIEN**: Cháu nhét hết ví! Mười triệu tiền mặt cháu nhét sạch vào hòm! Cụ tha cho cháu! (C04) · pop "MÓC SẠCH VÍ"
- *(lặng 0.8 s)*
- **MN**: Đi ăn cắp mà bị phạt ngược mười triệu, tao kể ở bản đầy đủ, link dưới. (S34) · pop "LINK BẢN ĐẦY ĐỦ"

### SH3 (TRỌN) — Quy tắc của ông Tám chiếu bóng
- **TAM**: Ai có ngô góp ngô, có tiền góp một hào. Phim là công sức người ta, không được xem chùa. (C06) · pop "ÔNG TÁM CHIẾU BÓNG"
- **MN**: Thời bao cấp, ông Tám chở máy nhựa đi khắp xã chiếu phim cho cả làng. (C06) · pop "BÃI CHIẾU 1980"
- **MN**: Máy nhựa bán sắt vụn rồi, nhưng ông Tám chưa từng rời phòng máy. (C02) · pop "VẪN GIỮ NGHỀ"
- **MN**: Kiên lẻn vào quay trộm bom tấn, file mở ra chỉ thấy ông Tám cười bảo: (C09) · pop "MUA VÉ ĐI CON"
- **TAM**: Bãi chiếu đóng rồi con. Muốn xin phim thì bỏ tiền vào hòm. Một hào một vé. (C07) · pop "1 HÀO 1 VÉ"
- *(lặng 0.8 s)*
- **MN**: Con ma giữ bản quyền phim gắt nhất Việt Nam, tao kể ở bản đầy đủ, link dưới. (S34) · pop "LINK BẢN ĐẦY ĐỦ"

### SH4 (TRỌN) — Đêm nước liều của thằng quay trộm
- **KIEN**: Mười một giờ rưỡi! Còn nửa tiếng là mất năm mươi triệu! Tao trèo vào phòng máy cắm USB chép thẳng bản gốc! (C04) · pop "23:30 · NƯỚC LIỀU"
- **MN**: Kiên lẻn lên phòng máy lửng. Cửa sắt sau lưng bỗng sập rầm một cái, chốt tự gài. (C02) · pop "KẸT TRONG PHÒNG MÁY"
- **MN**: Phòng máy tối om. Máy chủ ngắt điện, nhưng cái máy nhựa cổ ở góc bỗng tự quay tít mù, xả phim lạch cạch. (C02) · pop "MÁY CỔ TỰ QUAY"
- **TAM**: Bãi chiếu đóng rồi con. Muốn xin phim thì bỏ tiền vào hòm. Một hào một vé. (C07) · pop "ÔNG TÁM CHIẾU BÓNG"
- **KIEN**: Cháu nhét hết ví! Mười triệu tiền mặt cháu nhét sạch vào hòm! Cụ tha cho cháu! (C04) · pop "CÚNG HẾT 10 TRIỆU"
- *(lặng 0.8 s)*
- **MN**: Cú lật nghẹt thở lúc nửa đêm, tao kể ở bản đầy đủ, link dưới. (S34) · pop "LINK BẢN ĐẦY ĐỦ"

### SH5 (TRỌN) — Đoạn phim tài liệu triệu view
- **MN**: Web cờ bạc cắt hợp đồng, khách chửi sập trang. Nhưng đoạn phim ông Tám lại lên xu hướng, hai triệu lượt xem. (C10) · pop "2 TRIỆU VIEW"
- **BAN**: Dạo này anh Kiên chăm thế, phim nào cũng mua vé vào xem từ đầu. (C05) · pop "NGOAN NGOÃN MUA VÉ"
- **KIEN**: Mua vé ngồi ghế đệm xem cho sướng. Quay trộm nữa để lại gặp ông Tám à? (C03) · pop "CHỪA ĐẾN GIÀ"
- **MN**: Kẻ cắp mất trắng, ông già giữ nghề bỗng thành idol mạng sau bốn mươi năm. (S34) · pop "ÔNG TÁM CHIẾU BÓNG"
- *(lặng 0.8 s)*
- **MN**: Bí mật cuộn phim đen trắng trong phòng máy, tao kể ở bản đầy đủ, link dưới. (S34) · pop "LINK BẢN ĐẦY ĐỦ"

### SH6 (TRAILER) — Tiếng quay tay sau gáy rạp phim
- **MN**: Rạp chiếu số tiền tỉ. Sao sau lưng… lại có tiếng quay tay cuộn phim nhựa? (C02) · pop "RẠP KỸ THUẬT SỐ"
- **MN**: Bảy giờ tối, cả rạp đang đắm chìm trong phim bom tấn âm thanh vòm Dolby. (C01) · pop "SUẤT CHIẾU SỚM"
- **MN**: Chỉ riêng gã quay trộm nghe thấy tiếng sắt gỉ lạch cạch đanh gọn ngay sau gáy. (C08) · pop "TIẾNG LẠCH CẠCH"
- **MN**: Ngoái lại, qua khung kính phòng máy trên cao… một bóng già mũ cối đang quay tay cuộn phim to đùng, mắt nhìn trừng trừng xuống hắn. (C02) · pop "ÔNG TÁM CHIẾU BÓNG"
- **MN**: Ai đang đứng trong phòng máy kỹ thuật số đã đóng kín mười năm? Xem ngay bản đầy đủ, link dưới. (S34) · pop "LINK BẢN ĐẦY ĐỦ"

### SH7 (TRAILER) — Hạn chót nửa đêm
- **KIEN**: Mười một giờ rưỡi! Còn nửa tiếng là mất năm mươi triệu! Tao trèo vào phòng máy cắm USB chép thẳng bản gốc! (C04) · pop "23:30 · CÒN 30 PHÚT"
- **MN**: Kiên lẻn lên phòng máy lửng. Cửa sắt sau lưng bỗng sập rầm một cái, chốt tự gài. (C02) · pop "SẬP CỬA"
- **MN**: Phòng máy tối om. Máy chủ ngắt điện, nhưng cái máy nhựa cổ lỗ sĩ ở góc bỗng tự quay tít mù, xả phim lạch cạch. (C02) · pop "MÁY CỔ TỰ QUAY"
- **TAM**: Bãi chiếu đóng rồi con… (C07) · pop "ÔNG TÁM CHIẾU BÓNG"
- **MN**: Chuyện gì đã xảy ra sau cánh cửa sắt bị khóa chặt? Xem tiếp bản đầy đủ, link dưới. (S34) · pop "LINK BẢN ĐẦY ĐỦ"

## Hình
Tận dụng: B02 + ep01 S01/S26/S33/S34/S06 (Ma Nó) — *v3 dùng tất cả*.

### Vẽ mới: 10 ảnh (16:9)
| Mã | Cảnh | Trạng thái v3 |
|---|---|---|
| C01 | Rạp chiếu phim tối, khán giả ngồi, ánh máy chiếu hắt từ khung kính phòng máy phía sau | v3 dùng |
| C02 | Khung kính phòng máy nhìn từ dưới lên: bóng ông già mũ cối quay tay cuộn phim nhựa to | v3 dùng |
| C03 | Rạp sáng đèn trước suất, Kiên ngồi hàng giữa áo khoác rộng; bản xếp hàng mua vé | v3 dùng |
| C04 | Kiên cận: mũ lưỡi trai, gõ laptop đêm; bản đơ người | v3 dùng |
| C05 | Chị Hoa cận ở quầy vé: đồng phục rạp, nhìn rạp vắng; bản cười | v3 dùng |
| C06 | Ảnh đen trắng: bãi chiếu bóng giữa sân kho làng, màn trắng căng, trẻ con ngồi chiếu cói, ông Tám cạnh máy chiếu nhựa | v3 dùng |
| C07 | Ông Tám cận: mũ cối, áo sơ mi trắng cũ, quay tay máy chiếu nhựa, cười hiền; viền mờ | v3 dùng |
| C08 | Kiên liếc ra sau trong rạp tối, ánh máy chiếu trên mặt | v3 dùng |
| C09 | Màn hình laptop phát phim đen trắng bãi chiếu bóng; bản ông Tám nhìn thẳng ống kính | v3 dùng |
| C10 | Trang web lậu: các ô phim đều là ảnh đen trắng bãi chiếu bóng, bình luận (trống chữ) | v3 dùng |

## Lịch
- LONG: Thứ Năm 15/07 18:00 (+07)
- SH1: Thứ Năm 15/07 19:00 (+07)
- SH2: Thứ Sáu 16/07 11:30 (+07)
- SH3: Thứ Sáu 16/07 19:00 (+07)
- SH4: Thứ Bảy 17/07 11:30 (+07)
- SH5: Thứ Bảy 17/07 19:00 (+07)
- SH6: Chủ Nhật 18/07 11:30 (+07)
- SH7: Chủ Nhật 18/07 19:00 (+07)
- Tập sau (P69): Thứ Hai 19/07 18:00 (+07)
