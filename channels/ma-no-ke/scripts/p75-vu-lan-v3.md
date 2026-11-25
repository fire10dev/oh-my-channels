# Dự án 75 — Vu Lan "Báo hiếu triệu view" (v3, 2026-11-24)

v3 nâng cấp kịch tính theo bài học P04:
- **Đồng hồ + cái giá cụ thể**: Hạn chót trước nửa đêm ngày Rằm tháng Bảy (cửa âm khép lại); Khải chốt hợp đồng đại sứ 2 tỷ vào 20:00 giờ vàng công chiếu; nếu trượt, mẹ thật tiếp tục bị lãng quên ở viện dưỡng lão rẻ tiền còn kẻ bất hiếu đút túi bạc tỷ.
- **3 nấc leo thang chủ động**: Ông Hải gửi tín hiệu làm sọc video trong phòng dựng → Khải tăng tiền đổi thợ; Ông Hải làm náo động viện dưỡng lão → Khải chuyển tiền nhốt mẹ lại để giữ hình ảnh; Ông Hải dùng chính chiêu bài truyền thông, thuê taxi đưa mẹ thẳng về biệt thự giữa vòng vây livestream.
- **Cold open giấu đáp án**: Mở đầu bằng tiếng thì thầm của bà cụ với chiếc ghế trống và mùi thuốc lào xa xăm, không lộ chuyện chiếc xe taxi hay kế hoạch vạch trần.
- **Khoảnh khắc rợn duy nhất**: Nửa đêm ở viện dưỡng lão, tàn thuốc lào đỏ rực lập lòe bay lơ lửng trên chiếc ghế nhựa trống in hằn nếp áo lính giữa phòng bệnh cấm lửa; cô hộ lý run rẩy không dám bước vào.
- **Cú lật do nhân vật tự chọn và trả giá**: Khải buộc phải chọn mở cổng đón mẹ thật để cứu vãn hình ảnh trước hàng nghìn mắt xem livestream; cái giá là kịch bản tan tành, mất hợp đồng 2 tỷ, nhận bản án chăm mẹ thật trọn đời không lương.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Liệu người cha đã khuất có vạch trần được màn kịch đạo đức giả của đứa con trai triệu view trước khi cửa âm khép lại?
- **Đồng hồ + cái giá**: 20:00 tối Rằm là giờ vàng phát sóng chốt hợp đồng 2 tỷ; nửa đêm Rằm cửa âm đóng. Cái giá: mẹ già tiếp tục lủi thủi cô độc ở viện rẻ tiền, con trai kiếm tiền trên sự lãng quên mẹ.
- **3 nấc leo thang**:
  1. Đêm 13: Mùi thuốc lào ám phòng dựng, video bị sọc hình áo lính → Khải đổi thợ dựng, tăng tiền ép chạy tiến độ.
  2. Đêm 14: Hiện tượng lạ ở viện dưỡng lão, hộ lý giục đón mẹ → Khải chuyển thêm tiền, lệnh nhốt mẹ trong phòng để bảo vệ buổi họp báo.
  3. Sáng Rằm (nước liều): Ông Hải trả tiền taxi cõi âm, chở thẳng bà mẹ về cổng biệt thự ngay trước ống kính của đám đông tiktoker.
- **Điểm thấp nhất**: Đêm 14, bà cụ ngồi trong bóng tối bênh con trai: "Nó bận làm người hiếu thảo trên mạng...", người lính già bất lực nhìn cửa âm sắp đóng mà không thể dùng bạo lực với người sống.
- **Cú lật**: Trước 5.000 người xem livestream ngoài cổng, Khải buộc phải tươi cười đón mẹ thật vào nhà. Kịch bản vỡ, mất hợp đồng, Khải bị trói chặt vào nghĩa vụ rửa chân thật mỗi tối mà không có máy quay.
- **Khoảnh khắc rợn**: Đốm tàn thuốc lào đỏ rực lập lòe trên chiếc ghế nhựa trống giữa phòng bệnh viện dưỡng lão lúc nửa đêm.
- **Câu kết**: Châm biếm thị trường báo hiếu mạng; Khải mất hợp đồng, mất nửa lượng theo dõi vì bận chăm mẹ thật; mẹ tăng cân, đổi thế là lời.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| KHAI | Anh Khải, doanh nhân hiếu thảo mạng | V03, V04, V10 | Adam bựa | `atempo=1.02` |
| ME | Bà Thanh, mẹ Khải | V01, V05, V08, V10 | Đoan Trang | `atempo=0.88,asetrate=48000*0.95,aresample=48000` |
| HL | Cô hộ lý viện dưỡng lão | V07 | Quỳnh Anh | `highpass=f=300,lowpass=f=3000` |
| TX | Bác tài taxi | V11 | Thanh Bình | `atempo=1.0` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "KHAI": {"preset": "Adam bựa", "fx": "atempo=1.02"}, "ME": {"preset": "Đoan Trang", "fx": "atempo=0.88,asetrate=48000*0.95,aresample=48000"}, "HL": {"preset": "Quỳnh Anh", "fx": "highpass=f=300,lowpass=f=3000"}, "TX": {"preset": "Thanh Bình", "fx": "atempo=1.0"}}
```

## LONG (593 chữ thoại, ≈3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | V01 | *(không lời, 2.5 s)* | "NỬA ĐÊM · VIỆN DƯỠNG LÃO" · đèn vo ve |
| 0:02 | V01 | **ME**: Ông về rồi à? Thằng Khải… nó lại vừa lên báo đấy. | nhạc tắt |
| 0:07 | V01 | **ME**: Người ta khen nó hiếu thảo. Mà tôi chả nhớ nó rửa chân cho tôi bao giờ. | rít thuốc lào xa |
| 0:12 | S01 → S26 | **MN**: Lại mò vào à? Vu Lan rồi. Mày cài hoa hồng chưa? Mẹ mày đâu? | "VU LAN" · mõ CỘC |
| 0:17 | V04 | **MN**: Khách hôm nay là doanh nhân hiếu thảo. Ba năm liền ẵm giải người con của năm trên mạng. | "NGƯỜI CON CỦA NĂM" |
| 0:22 | V05 | **MN**: Còn mẹ ruột anh ta… đang ở viện dưỡng lão rẻ nhất tỉnh, ba năm chưa thăm. | "3 NĂM CHƯA THĂM" |
| 0:27 | V03 | **KHAI**: Cắt! Tốt lắm cô ơi. Cảnh khóc này kiểu gì cũng triệu view. | bip · pops |
| 0:31 | V04 | **KHAI**: Tối Rằm công chiếu trực tiếp lúc tám giờ, chốt hợp đồng hai tỷ. Cấm trượt một giây! | "HẠN: 20:00 TỐI RẰM" · "HỢP ĐỒNG 2 TỶ" |
| 0:36 | V03 | **MN**: Mẹ trong clip là diễn viên thuê năm triệu. Khóc thuê, nhận hoa thuê, quỳ rửa chân thuê. | "5 TRIỆU / BUỔI" |
| 0:41 | S26 | **MN**: Video năm ngoái ba triệu view. Bình luận: ước gì con tôi được như anh. | "3 TRIỆU VIEW" · ting |
| 0:46 | V06 | **MN**: Rằm tháng Bảy, cửa âm mở. Bố anh ta, người lính già mất đã bảy năm… năm nay về thăm. | "CỬA ÂM MỞ" · whoosh |
| 0:52 | V02 | **MN**: Hạn chót: trước nửa đêm ngày Rằm, cửa âm khép lại. Ông Hải phải đòi lại công bằng cho vợ. | "HẠN CHÓT: NỬA ĐÊM" · tick |
| 0:57 | V02 → S26 | **MN**: Xem video của con, ông không khóc. Ông chỉ thấy bà mẹ trong clip trẻ hơn vợ mình hai mươi tuổi. | bassdown |
| 1:04 | V04 | **MN**: Đêm mười ba, phòng dựng phim khét lẹt mùi thuốc lào. Mặt diễn viên chớp tắt thành cái áo bộ đội cũ. | "ĐÊM 13" · roset · khói |
| 1:11 | V04 | **KHAI**: Thằng nào hút thuốc? Đổi ngay thợ dựng khác! Tối mai livestream giờ vàng, cấm để hỏng việc! | chát |
| 1:17 | V01 → V02 | **MN**: Đêm mười bốn ở viện dưỡng lão. Trên ghế nhựa trống in hằn nếp áo lính, tàn thuốc đỏ rực lơ lửng giữa phòng cấm lửa. | "KHOẢNH KHẮC RỢN" · tàn đỏ · nhạc tắt |
| 1:26 | V07 | **HL**: Anh Khải ơi, phòng mẹ anh nồng nặc mùi thuốc lào, bà cụ cứ nói chuyện một mình. Anh sang đón bà về đi! | chuông reo · lọc điện thoại |
| 1:33 | V04 | **KHAI**: Tôi đang chuẩn bị họp báo! Chuyển thêm hai triệu, nhốt bà ấy lại, cấm tiệt người ngoài quay chụp! | đập bàn |
| 1:39 | V01 | **ME**: Nó bận làm người hiếu thảo trên mạng ông ạ. Thôi… đừng giận con. | thở dài |
| 1:44 | S26 → V02 | **MN**: Điểm thấp nhất là đây. Cửa âm sắp đóng. Người lính già không thể hại người sống, nhưng ông biết điểm yếu của con trai. | "ĐIỂM THẤP NHẤT" · bassdown |
| 1:53 | V11 | **TX**: Tôi chở bà cụ đến theo hợp đồng. Đêm qua có ông già áo bộ đội vẫy xe, trả tiền trước, dặn sáng Rằm đưa bà về đây. | còi xe |
| 2:02 | V08 | **ME**: Bố mày bảo… về xem con rửa chân thật. | "BỐ MÀY BẢO VỀ" |
| 2:06 | V09 | **MN**: Trước cổng biệt thự, ba tiktoker đang livestream đón sự kiện. Năm nghìn người xem trực tiếp bỗng réo tên anh Khải. | "5.000 NGƯỜI XEM" · xì xào · ting |
| 2:13 | V08 → V04 | **MN**: Đóng cổng đuổi mẹ thì mất trắng sự nghiệp hai tỷ. Mở cổng đón mẹ thì kịch bản vỡ tan. Khải không còn đường lui. | "KHÔNG ĐƯỜNG LUI" |
| 2:21 | V04 | **KHAI**: Mẹ… sao mẹ lại đi taxi về? Con đang định tối nay đón mẹ mà! Mau vào nhà đi mẹ! | gượng gạo |
| 2:27 | V09 → V10 | **MN**: Hợp đồng quảng cáo bị hủy vì bà cụ nói trước livestream: ba năm nay mới gặp con. Nhưng mẹ thì ở lại luôn. | "HỦY HỢP ĐỒNG 2 TỶ" |
| 2:35 | V10 | **ME**: Con rửa chân vụng hơn trên ti vi. Nhưng nước ấm thật. | nước chậu nhẹ |
| 2:40 | V10 | **MN**: Không máy quay, không kịch bản. Giờ thì tối nào doanh nhân cũng phải quỳ rửa chân cho mẹ thật, trọn đời không lương. | "RỬA CHÂN THẬT · KHÔNG LƯƠNG" |
| 2:48 | V02 | **MN**: Chiếc áo bộ đội trên ghế bay hết mùi thuốc lào. Ông Hải đi rồi. Ông yên tâm. | gió nhẹ |
| 2:54 | S33 → S34 | **MN**: Vu Lan năm ấy Khải mất nửa lượng theo dõi vì bận chăm mẹ. Thị trường báo hiếu vừa điều chỉnh một ca khó. | rít điếu cày |
| 3:01 | B02 | **MN**: Tập sau: đúng Rằm tháng Bảy, ngày xá tội vong nhân. Có một vong… xin về thăm kẻ đã đẩy ông vào tù năm xưa. | "TẬP SAU" · whoosh |
| 3:08 | S06 | **MN**: Bấm đăng ký đi. Rồi về rửa chân cho mẹ. Nhớ đừng mang theo máy quay. | "ĐĂNG KÝ" · mõ CỘC |

## SHORTS
### SH1 (TRỌN)
- **KHAI**: Cắt! Tốt lắm cô ơi. Cảnh khóc này kiểu gì cũng triệu view. (V03) · pop "HIẾU THẢO TRIỆU VIEW"
- **KHAI**: Tối Rằm công chiếu trực tiếp lúc tám giờ, chốt hợp đồng hai tỷ. Cấm trượt một giây! (V04)
- **MN**: Mẹ trong clip là diễn viên thuê năm triệu một buổi. (V03) · pop "DIỄN VIÊN THUÊ: 5 TRIỆU"
- **MN**: Còn mẹ ruột anh ta… đang ở viện dưỡng lão rẻ nhất tỉnh, ba năm chưa từng đến thăm. (V05)
- **MN**: Mẹ triệu view thì thuê, mẹ ruột thì bỏ quên. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRỌN)
- *(không lời, 1.5 s)* · pop "NỬA ĐÊM Ở VIỆN" (V01)
- **ME**: Ông về rồi à? Thằng Khải… nó lại vừa lên báo đấy. (V01)
- **MN**: Trên ghế nhựa trống in hằn nếp áo lính, tàn thuốc đỏ rực lơ lửng giữa phòng cấm lửa. (V02) · pop "TÀN THUỐC LẬP LÒE"
- **HL**: Anh Khải ơi, phòng mẹ anh nồng nặc mùi thuốc lào! Anh sang đón bà về đi! (V07)
- **KHAI**: Chuyển thêm hai triệu, nhốt bà ấy lại, cấm tiệt người ngoài quay chụp! (V04) · pop "CHUYỂN 2 TRIỆU · NHỐT MẸ"
- **MN**: Bận làm người con hiếu thảo trên mạng nó thế đấy. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 (TRAILER)
- **TX**: Tôi chở bà cụ đến theo hợp đồng. Đêm qua có ông già áo bộ đội vẫy xe, trả tiền trước. (V11) · pop "CHUYẾN TAXI KỲ LẠ"
- **ME**: Bố mày bảo… về xem con rửa chân thật. (V08) · pop "BỐ MÀY BẢO VỀ"
- **MN**: Trước cổng biệt thự, ba tiktoker đang livestream đón sự kiện Vu Lan. (V09)
- **MN**: Năm nghìn người đang xem trực tiếp. Đóng cổng đuổi mẹ hay mở cửa kịch bản vỡ? (V04)
- **MN**: Cánh cổng đó sẽ mở ra điều gì? Bản đầy đủ, link dưới. (S26)

### SH4 (TRỌN)
- **MN**: Trước cổng biệt thự, ba tiktoker đang livestream đón doanh nhân của năm. (V09) · pop "LIVESTREAM 5.000 VIEW"
- **TX**: Đêm qua có ông già áo bộ đội vẫy xe, trả tiền trước, dặn sáng Rằm đưa bà về đây. (V11)
- **ME**: Bố mày bảo… về xem con rửa chân thật. (V08)
- **MN**: Đóng cổng đuổi mẹ thì mất trắng sự nghiệp hai tỷ. Mở cổng đón mẹ thì kịch bản thuê người vỡ tan. (V04) · pop "GẬY ÔNG ĐẬP LƯNG ÔNG"
- **KHAI**: Mẹ… sao mẹ lại đi taxi về? Mau vào nhà đi mẹ! (V04)
- **MN**: Đạo đức giả bị trói bởi chính triệu view của mình. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN)
- **MN**: Trên mạng quỳ rửa chân cho diễn viên thuê, chốt hợp đồng hai tỷ. (V03) · pop "DIỄN TRÊN MẠNG"
- **MN**: Nhưng sáng Rằm, ông bố đã khuất gọi taxi đưa mẹ thật về đứng trước cổng. (V08)
- **MN**: Hợp đồng quảng cáo bị hủy vì bà cụ lỡ lời trên sóng: ba năm nay mới gặp con. (V09) · pop "HỦY HỢP ĐỒNG 2 TỶ"
- **ME**: Con rửa chân vụng hơn trên ti vi. Nhưng nước ấm thật. (V10) · pop "NƯỚC ẤM THẬT"
- **MN**: Giờ thì tối nào cũng phải rửa chân thật, trọn đời không lương. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 (TRAILER)
- **MN**: Rằm tháng Bảy, cửa âm mở. Bố anh ta, người lính già mất đã bảy năm… năm nay về thăm. (V06) · pop "CỬA ÂM MỞ"
- **MN**: Xem video của con, ông thấy bà mẹ trong clip trẻ hơn vợ mình hai mươi tuổi. (V02)
- **MN**: Hạn chót: trước nửa đêm ngày Rằm, cửa âm khép lại. (V02) · pop "HẠN CHÓT: NỬA ĐÊM"
- **MN**: Người lính già không thể hại người sống. Ông sẽ ra đòn thế nào để đòi lại danh dự cho vợ? (S26)
- **MN**: Đòn trừng phạt của người cha đã khuất. Bản đầy đủ, link dưới. (S34)

### SH7 (TRỌN)
- **MN**: Vu Lan năm ấy anh Khải mất trắng hợp đồng hai tỷ với nhãn hàng. (V04) · pop "MẤT HỢP ĐỒNG 2 TỶ"
- **MN**: Kênh triệu view tụt một nửa người theo dõi vì chủ kênh bận… đổ bô cho mẹ. (V10) · pop "TỤT VIEW VÌ CHĂM MẸ"
- **MN**: Cô diễn viên đóng mẹ thì mất việc, còn mẹ ruột thì tăng được ba cân. (V10)
- **MN**: Thị trường báo hiếu vừa điều chỉnh một ca khó. Nghiệp quật kiểu hiếu nghĩa. (S34) · pop "THỊ TRƯỜNG ĐIỀU CHỈNH"
- **MN**: Muốn biết cái bẫy hoàn hảo của ông bố? Tao kể ở bản đầy đủ, link dưới. (S26)

## Hình
Tận dụng: B02 + ep01 S01/S26/S33/S34/S06 (Ma Nó).

### Danh sách hình vẽ mới (16:9):
- **V01** *(DÙNG)*: Phòng viện dưỡng lão nửa đêm: sáu giường, đèn ngủ vàng, bà cụ tóc bạc búi ngồi giường nói với cái ghế nhựa trống.
- **V02** *(DÙNG)*: Cận ghế nhựa trống, cái áo bộ đội cũ gấp ngay ngắn, làn khói mỏng; bản bóng ông Hải mờ ngồi ghế; bản áo vắt thành ghế trong biệt thự.
- **V03** *(DÙNG)*: Biệt thự, ekip quay phim, đèn, anh Khải quỳ rửa chân cho bà cụ diễn viên.
- **V04** *(DÙNG)*: Anh Khải cận: vest, hoa hồng cài ngực; bản tắt máy lau tay, bản nghe điện thoại, bản cúi đầu.
- **V05** *(DÙNG)*: Viện dưỡng lão tỉnh xa: sân vắng, bà cụ ngồi ghế đá nhìn ra cổng.
- **V06** *(DÙNG)*: Tranh màu ngả nâu: đêm Rằm tháng Bảy, những bóng người xưa đi về các mái nhà.
- **V07** *(DÙNG)*: Cô hộ lý cận đứng ở cửa phòng, tay cầm sổ, mặt sợ.
- **V08** *(DÙNG)*: Cổng biệt thự sáng Rằm, bà cụ áo len cũ, túi vải, cầm bó hoa hồng đứng chờ.
- **V09** *(DÙNG)*: Hàng xóm dừng trước cổng, hai cô gái giơ điện thoại phát trực tiếp.
- **V10** *(DÙNG)*: Tối, phòng ngủ: anh Khải quỳ rửa chân cho mẹ trong chậu nhôm, không máy quay; bà cụ nhìn con.
- **V11** *(DÙNG)*: Bác tài taxi đứng cạnh xe trước cổng biệt thự, gãi đầu kể chuyện.

## Lịch
- **LONG**: Thứ Hai 09/08 18:00 (+07).
- **SH1**: Thứ Hai 09/08 19:00.
- **SH2**: Thứ Ba 10/08 11:30.
- **SH3**: Thứ Ba 10/08 19:00.
- **SH4**: Thứ Tư 11/08 11:30.
- **SH5**: Thứ Tư 11/08 19:00.
- **SH6**: Thứ Năm 12/08 11:30.
- **SH7**: Thứ Năm 12/08 19:00.
- *(Tập sau P76 ra mắt Thứ Năm 12/08 18:00)*.
