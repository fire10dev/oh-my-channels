# Dự án 66 — Thiên Lôi "Chỉ đâu đánh đấy" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá rõ ràng**: Hạn chót trước nửa đêm ngày thứ ba khi bão tan; nếu không hoàn tất các "lệnh chỉ" từ tít báo, đám mây sấm của Thiên Lôi sẽ hạ thấp bọc kín căn phòng, nện sấm đinh tai làm điếc gã câu view cả đời.
- **3 nấc leo thang chủ động**: Viết tít dối trá bị sấm rạn kính → Cố lách luật bằng bài khấn giả tạo bị Thiên Lôi bóc mẽ ăn chặn → Nước liều: xóa sạch trang web, giật dây mạng trốn dưới gầm bàn nhưng Thiên Lôi đã chụp màn hình lưu bằng chứng.
- **Điểm thấp nhất**: 23:00 đêm bão thứ ba, tai ù đặc vì sấm dộng liên hồi, nhà rung bần bật, điện thoại mẹ gọi reo dồn dập trong bóng tối, Thành kẹt giữa nỗi sợ phát điên và cái lồng sấm tự tạo.
- **Cú lật do nhân vật chọn và trả giá**: Thành chọn bỏ lại trang triệu view, lao ra bến xe đêm chạy trốn về quê chịu nhục xin lỗi mẹ (chạy vì sợ chết sấm chứ không giác ngộ đạo đức). Thiên Lôi gạch án bất hiếu nhưng ghim sổ án dối trá.
- **Cold open không lộ đáp án**: Giữ trọn sự bí ẩn với hình ảnh trưa hè 40 độ nắng chang chang, duy nhất một nóc nhà có đám mây đen kêu ục ục và nổ sấm rung kính.
- **Khớp chuẩn P04 v4**: LONG đúng 579 chữ thoại (khung 560–600 chữ, ≈3:00), bảng cảnh kèm mốc/sfx chuẩn, 7 short (5 TRỌN + 2 TRAILER) kèm pop-up và link chỉ dẫn.

## Xương sống kịch tính
- **Câu hỏi kịch tính trung tâm**: Một kẻ giật tít "trời phạt" kiếm triệu view trên tai họa người khác sẽ làm gì khi Thiên Lôi lấy chính những cái tít đó làm lệnh trừng phạt nhắm thẳng vào nó?
- **Đồng hồ + cái giá**: Hạn chót trước nửa đêm ngày thứ ba bão tan. Nếu các "lệnh chỉ" chưa xong án, mây đen hạ sát nóc phòng, tiếng sấm nổ đinh tai nhức óc sẽ theo Thành suốt đời.
- **3 nấc leo thang**:
  1. *Nấc 1*: Viết tít "Trời phạt kẻ dối trá", Thiên Lôi tra ra Thành chuyên cắt ghép ảnh bịa chuyện, giáng búa làm nứt kính cửa, mây đen hạ thấp 1 mét.
  2. *Nấc 2*: Thành lách luật đăng bài khấn giả tạo "Trời phù hộ người có tâm", Thiên Lôi bóc phốt ăn chặn tiền từ thiện, nện sấm dồn dập, mưa dột vào phòng.
  3. *Nấc 3*: Nước liều: Thành xóa fanpage, giật phăng dây mạng, trốn xuống gầm bàn ôm laptop; Thiên Lôi đã chụp màn hình, sấm đếm ngược từng giờ.
- **Điểm thấp nhất**: 23:00 đêm thứ ba, còn 1 tiếng trước bão tan. Thành co rúm dưới gầm bàn, tai ù đặc, sấm rung chuyển phòng, điện thoại mẹ gọi reo dồn dập trong bóng tối, đối mặt với bờ vực phát điên.
- **Cú lật**: Thành chọn tháo chạy về quê đối mặt với mẹ để thoát chết sấm (không phải giác ngộ đạo đức); trả giá bằng việc bỏ lại đồ nghề, trang triệu view và chịu nhục về ăn cơm nguội. Thiên Lôi thấy gã về quê thì gạch án "bất hiếu", mây tan, nhưng vẫn ghim sổ tội "dối trá".
- **Khoảnh khắc rợn**: Trưa hè nắng gắt 40 độ, trời xanh không một gợn mây, duy nhất trên nóc nhà Thành có một đám mây đen sì bằng đúng cái mái tôn, kêu ục ục như bụng đói, nổ sấm đinh tai làm rung bần bật cửa kính.
- **Câu kết**: "Viết tít về người khác thì nhớ đọc lại như soi gương. Thiên Lôi không biết đùa đâu, ổng tưởng mày gửi đơn tự thú đấy."

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| THANH | Thành, chủ trang câu view: áo phông đen, ba màn hình, gõ phím run tay | T02, T03, T06b | Adam bựa | `atempo=1.05` |
| LOI | Thiên Lôi: mặt xanh mỏ nhọn, cầm búa, kính lão lướt điện thoại | T05 | Thiền Tâm Đức | `asetrate=48000*0.92,aresample=48000,aecho=0.8:0.6:80:0.3` |
| ME | Mẹ Thành ở quê (giọng qua điện thoại, giọng ngoài hiên) | T07, T09 | Ngọc Huyền | `highpass=f=300,lowpass=f=3400` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "THANH": {"preset": "Adam bựa", "fx": "atempo=1.05"}, "LOI": {"preset": "Thiền Tâm Đức", "fx": "asetrate=48000*0.92,aresample=48000,aecho=0.8:0.6:80:0.3"}, "ME": {"preset": "Ngọc Huyền", "fx": "highpass=f=300,lowpass=f=3400"}}
```

## LONG (579 chữ thoại, dựng ≈ 3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | T01 | *(không lời, 2.5 s)* | "TRƯA HÈ · 40 ĐỘ" · ve sầu trưa · mõ CỘC |
| 0:02 | T01 | **MN**: Trời xanh không một gợn mây. Trừ đúng một chỗ. | mây ục ục |
| 0:06 | S01 → S26 | **MN**: Lại mò vào à? Đọc tít "sét đánh vì quả báo" bao giờ chưa? Thằng viết không tin, nhưng có một ông đọc xong… lại tin thật. | "QUẢ BÁO" · braam |
| 0:16 | T02 → T03 | **MN**: Thành, chủ trang Tin Nóng Tâm Linh. Mùa mưa bão, hễ ai gặp nạn là nó có bài. | "TIN NÓNG TÂM LINH" · bàn phím |
| 0:22 | T03 | **THANH**: Cứ giật "Sét đánh kẻ bất hiếu", "Trời phạt kẻ dối trá" là tiền về. Mạng cần gì đúng sai, cần linh thiêng. | "ting" tiền về liên tục |
| 0:29 | T04 | **MN**: Triệu lượt xem. Người nhà nạn nhân bị chửi rủa tơi bời. Họ không bất hiếu. Họ chỉ gặp mưa. | "TRIỆU VIEW" · comment chửi |
| 0:35 | T05 | **MN**: Trên mây, Thiên Lôi lướt mạng. Thần sấm sét cầm búa, nóng tính, nhưng làm đúng quy trình. | "THIÊN LÔI" · sấm ì ầm xa |
| 0:42 | T05 | **LOI**: Mấy người này ta chưa đánh bao giờ. Sao thằng này dám bảo ta đánh? |  |
| 0:47 | S26 | **MN**: Thành ngữ: "Thiên Lôi chỉ đâu đánh đấy". Ổng không tự ý đánh ai. Nhưng ai chỉ là ổng đi tìm. | "CHỈ ĐÂU ĐÁNH ĐẤY" |
| 0:54 | T05 | **LOI**: "Sét đánh kẻ bất hiếu". Có đơn chỉ rồi. Phải xử trước khi bão tan đêm thứ ba. Khởi hành. | "HẠN: ĐÊM THỨ BA" · bassdown |
| 1:00 | T05 → T07 | **MN**: Thiên Lôi quét định vị tìm kẻ bất hiếu gần nhất. Trúng ngay phòng trọ gã viết tít. | "ĐỊNH VỊ: GẦN NHẤT" |
| 1:06 | T07 | **MN**: Ba năm không về quê. Chín mươi chín cuộc gọi nhỡ từ mẹ, không nghe một lần. | "99 CUỘC GỌI NHỠ" · chuông nhỡ |
| 1:12 | T05 | **LOI**: Bất hiếu. Khớp lệnh. | "KHỚP LỆNH" · sấm |
| 1:15 | T01 | *(không lời, 2.0 s)* | ve sầu tắt ngấm · mây ục ục |
| 1:17 | T01 → T08 | **MN**: Trưa hè nắng chang chang, ngay trên nóc nhà Thành mọc ra đám mây đen sì. Nhỏ bằng cái mái tôn, ục ục như bụng đói. | "MÂY BẰNG CÁI MÁI" · nhạc tắt |
| 1:26 | T08 | **MN**: Nhà bên phơi đồ khô cong. Sân nhà Thành mưa như xối nước. | mưa rào trong sân |
| 1:30 | T02 | *(không lời, 1.5 s)* | ĐÙNG! · kính rung bần bật |
| 1:32 | T03 | **THANH**: Quái lạ. Sấm giữa trưa nắng? Chắc trùng hợp. Phải lên thêm bài gỡ gạc. | bàn phím run |
| 1:37 | T03 | **MN**: Nấc một: Thành gõ tít hù dọa: "Trời phạt kẻ dối trá". Vừa đăng xong, búa gõ cái đoàng. | "NẤC 1: DỐI TRÁ" · ĐÙNG! |
| 1:44 | T05 | **LOI**: Dối trá à? Thằng này chuyên cắt ghép ảnh bịa chuyện. Quá khớp! | "QUÁ KHỚP!" |
| 1:48 | T02 | **MN**: Kính cửa nứt toác. Mây đen sà xuống thấp thêm một mét. | "HẠ THẤP 1 MÉT" · tieng kinh nut |
| 1:53 | T03 | **THANH**: Mẹ ơi! Sao sấm cứ dộng đúng đầu mình thế này? |  |
| 1:57 | T03 | **MN**: Nấc hai: Nó cuống cuồng lách luật, đăng bài khấn: "Trời phù hộ người có tâm". | "NẤC 2: LÁCH LUẬT" |
| 2:02 | T05 | **LOI**: Có tâm? Toàn ăn chặn tiền quyên góp của người ta. Đánh tiếp! | "ĂN CHẶN TIỀN" |
| 2:06 | T01 | *(không lời, 1.8 s)* | ĐÙNG! ĐÙNG! · sấm dồn dập |
| 2:08 | T06b | **MN**: Nấc ba: Nước liều. Thành bấm xóa trang, giật dây mạng, chui tọt xuống gầm bàn ôm đầu. | "NẤC 3: XÓA TRANG" · giat day |
| 2:15 | T05 | **LOI**: Xóa bài à? Chụp màn hình rồi! Còn hai tiếng nữa bão tan, chưa xong án thì cái mái này đừng mong yên. | "CÒN 2 TIẾNG" · tick · tick |
| 2:22 | T06b | **MN**: Hai mươi ba giờ đêm. Điểm thấp nhất. Thành co rúm dưới gầm bàn, tai ù đặc vì sấm. | "23:00" · "ĐIỂM THẤP NHẤT" · u tai |
| 2:29 | T07 | *(không lời, 1.5 s)* | chuông điện thoại "Mẹ" reo dồn dập |
| 2:31 | T07 | **ME**: Thành ơi, ở phố sấm to lắm hả con? Mẹ để dành măng cho mày này... | lọc điện thoại rè |
| 2:37 | T06b | **THANH**: Cứ ở đây là nát gáo. Không phải sám hối, mà ở lại là chết chắc! | "Ở LẠI LÀ CHẾT!" |
| 2:42 | T07 → T09 | **MN**: Hết đường lùi. Nửa đêm, Thành quơ ba lô lao ra bến xe, chạy trối chết về quê. | "CHẠY TRỐI CHẾT" · coi xe dem |
| 2:50 | T09 | **MN**: Sáng ra, bước chân về ngõ nhà mẹ, trời quang mây tạnh. Đám mây đen không đuổi theo nữa. | "TRỜI QUANG" · tieng ga gay |
| 2:57 | T05 | **LOI**: Về với mẹ rồi à? Án bất hiếu tạm gạch. Còn án dối trá… ta ghim đây. Bịa nữa là búa xuống. | "GẠCH ÁN" · "GHIM DỐI TRÁ" |
| 3:05 | T09 | **ME**: Ăn bát cơm nguội đã con, mặt mũi xanh như đít nhái thế kia? |  |
| 3:09 | S33 → S34 | **MN**: Viết tít về người khác thì đọc lại như soi gương. Thiên Lôi không đùa đâu, ổng tưởng mày gửi đơn tự thú. | "ĐƠN TỰ THÚ" · coc |
| 3:17 | B02 | **MN**: Thứ Hai: một ông chủ gara lột đồ khách đêm mưa. Đêm ấy có chiếc xe Volga ba mươi năm không chạy rẽ vào. | "TẬP SAU · THỨ HAI" · whoosh |
| 3:25 | S06 | **MN**: Bấm đăng ký kênh đi. Chứ sống lỗi mà để Thiên Lôi lướt trúng Facebook là mệt đấy. | "ĐĂNG KÝ" · coc |

## SHORTS

### SH1 (TRỌN)
- **MN**: Hồ sơ Thiên Lôi. Thần sấm sét cầm búa, nhưng làm việc đúng quy trình. (T05) · pop "THIÊN LÔI"
- **MN**: Dân gian có câu: Thiên Lôi chỉ đâu đánh đấy. (T05) · pop "CHỈ ĐÂU ĐÁNH ĐẤY"
- **THANH**: Cứ giật "Sét đánh kẻ bất hiếu", "Trời phạt kẻ dối trá" là tiền về. (T03) · pop "GIẬT TÍT KIẾM TIỀN"
- **LOI**: "Sét đánh kẻ bất hiếu". Có đơn chỉ rồi. Đi tìm. (T05) · pop "ĐI TÌM"
- **MN**: Thần quét định vị tìm kẻ gần nhất… trúng ngay thằng viết bài. (T07) · pop "TRÚNG NGAY TÁC GIẢ"
- **LOI**: Bất hiếu. Khớp lệnh. (T05) · pop "KHỚP LỆNH"
- *(không lời, 0.8 s)* (T01) · sấm nổ
- **MN**: Ba năm trốn mẹ câu view, bị sét dí thế nào tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 (TRỌN)
- **THANH**: Mạng xã hội cần gì đúng sai, cứ tít càng thiêng càng nhiều view! (T03) · pop "CÂU VIEW TÂM LINH"
- **MN**: Thành giật tít ăn trên nỗi đau người gặp nạn, thu triệu lượt xem. (T04) · pop "TRIỆU VIEW"
- **MN**: Người ta chỉ gặp mưa bão, nhưng bị cả mạng chửi là bất hiếu. (T04) · pop "BỊ CHỬI OAN"
- **LOI**: Mấy người này ta chưa đánh bao giờ. Thằng nào dám vu khống? (T05) · pop "THIÊN LÔI"
- **LOI**: Kẻ dối trá… gần nhất là thằng bịa tít này. Đánh! (T05) · pop "ĐÁNH!"
- *(không lời, 0.8 s)* (T02) · ĐÙNG!
- **MN**: Tít viết cho người khác hóa ra là đơn tự thú, tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 (TRỌN)
- **MN**: Giữa trưa hè nắng chang chang bốn mươi độ, có một ngôi nhà bị sét đánh. (T01) · pop "TRƯA HÈ 40 ĐỘ"
- **MN**: Trên nóc nhà Thành có đám mây đen sì, nhỏ đúng bằng cái mái tôn, kêu ục ục như bụng đói. (T01) · pop "ĐÁM MÂY ĐEN"
- **MN**: Nhà bên phơi đồ khô cong. Sân nhà Thành mưa như xối nước. (T08) · pop "BÊN NẮNG · BÊN MƯA"
- *(không lời, 0.8 s)* (T02) · ĐÙNG!
- **THANH**: Quái lạ! Sấm giữa trưa nắng? Sao cứ dộng đúng đầu mình thế này? (T03) · pop "DỘNG ĐÚNG ĐẦU"
- **MN**: Vì Thiên Lôi đang ngồi ngay trên nóc nhà nó, tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 (TRỌN)
- **THANH**: Bị sấm dộng trên đầu, Thành định lách luật với ông Trời. (T03) · pop "LÁCH LUẬT"
- **MN**: Nó cuống cuồng đăng bài: "Trời phù hộ người có tâm". (T03) · pop "NGƯỜI CÓ TÂM"
- **LOI**: Có tâm? Toàn ăn chặn tiền quyên góp của người ta. Đánh tiếp! (T05) · pop "THIÊN LÔI" · pop "ĂN CHẶN"
- **MN**: Kính cửa nứt toác. Mây đen sà xuống thấp thêm một mét. (T02) · pop "HẠ THẤP 1 MÉT"
- **THANH**: Mẹ ơi! Càng khấn sấm càng nổ to! (T06b) · pop "SẤM NỔ TO HƠN"
- *(không lời, 0.8 s)* (T06b) · ĐÙNG!
- **MN**: Lừa cư dân mạng thì dễ chứ lừa Thiên Lôi thì chịu, tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 (TRỌN)
- **MN**: Hai mươi ba giờ đêm. Hạn chót trước khi bão tan. (T06b) · pop "23:00 ĐÊM"
- **MN**: Thành co rúm dưới gầm bàn, tai ù đặc vì sấm dộng liên hồi. (T06b) · pop "DƯỚI GẦM BÀN"
- **LOI**: Xóa bài à? Chụp màn hình rồi! Không xử xong tội bất hiếu thì đừng mong yên. (T05) · pop "THIÊN LÔI" · pop "ĐÃ CHỤP MÀN HÌNH"
- **ME**: Thành ơi, ở phố sấm to lắm hả con? Mẹ để dành măng cho mày này… (T07) · pop "MẸ GỌI"
- **THANH**: Không phải sám hối, mà ở lại là nát gáo! (T06b) · pop "CHẠY TRỐI CHẾT"
- *(không lời, 0.8 s)* (T09) · tiếng còi xe đêm
- **MN**: Thằng con bất hiếu chạy nạn về quê thoát sét thế nào, tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 (TRAILER)
- **MN**: Trời xanh không một gợn mây. Trừ đúng một chỗ. (T01) · pop "TRỜI QUANG"
- **MN**: Nhà bên phơi đồ khô cong. Sân nhà Thành mưa như trút nước. (T08) · pop "MÂY BẰNG CÁI MÁI"
- **THANH**: Cứ giật tít trời phạt người khác là tiền về! (T03) · pop "GIẬT TÍT"
- **LOI**: Thần sấm sét cầm búa. Chỉ đâu đánh đấy. (T05) · pop "THIÊN LÔI"
- *(không lời, 0.5 s)* (T02) · ĐÙNG!
- **MN**: Đám mây đen ấy từ đâu tới, và vì sao lại đỗ đúng nóc nhà gã câu view? Bản đầy đủ link dưới. (S06)

### SH7 (TRAILER)
- **LOI**: Còn hai tiếng nữa bão tan. Chưa xong án thì cái mái này đừng mong yên! (T05) · pop "THIÊN LÔI" · pop "ĐẾM NGƯỢC 2 TIẾNG"
- **MN**: Sấm nổ nứt cửa kính. Đám mây đen hạ sát nóc nhà. (T02) · pop "MÂY HẠ SÁT ĐẦU"
- **THANH**: Xóa trang web rồi! Rút dây mạng rồi! Sao sấm vẫn nổ? (T06b) · pop "XÓA TRANG"
- **ME**: Thành đấy à? Ba năm rồi sao không về con… (T07) · pop "CUỘC GỌI TỪ MẸ"
- *(không lời, 0.5 s)* (T06b) · sấm chớp giật sáng bừng
- **MN**: Giữa gầm bàn ngập sấm sét và chuyến xe buýt đêm về quê, nó sẽ chọn cái nào? Bản đầy đủ link dưới. (S06)

## Hình
Tái dùng: B02 + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Ảnh vẽ mới (9 ảnh 16:9, v3 dùng trọn bộ):
| Mã | Mô tả cảnh | Dùng trong v3 |
|---|---|---|
| T01 | Khu phố trưa hè nắng chang chang, trời xanh ngắt, trên nóc nhà ống có đám mây đen sì nhỏ đúng bằng mái tôn; bản đêm có sấm sáng rực mái | ✔ LONG, SH1, SH3, SH6 |
| T02 | Phòng Thành: ba màn hình, trang tin đang soạn thảo; cửa kính phòng nứt toác vì sấm chớp | ✔ LONG, SH2, SH3, SH4, SH6, SH7 |
| T03 | Cận Thành: áo phông đen, tai nghe, gõ phím cười hả hê; bản run tay gõ phím sợ hãi | ✔ LONG, SH1, SH2, SH3, SH4, SH6 |
| T04 | Màn hình bình luận chửi bới gay gắt dưới bài báo giật tít ác ý, ảnh nạn nhân làm mờ | ✔ LONG, SH2 |
| T05 | Thiên Lôi tranh dân gian cách điệu: mặt xanh, mỏ nhọn, cánh sải, cầm búa sét, đeo kính lão ngồi lướt điện thoại; bản cầm sổ gạch tên | ✔ LONG, SH1, SH2, SH4, SH5, SH6, SH7 |
| T06b | Thành co rúm dưới gầm bàn ôm chặt laptop, ngoài cửa sổ mây đen sấm chớp rền vang, mặt kinh hoàng | ✔ LONG, SH4, SH5, SH7 |
| T07 | Cận điện thoại Thành: danh sách 99 cuộc gọi nhỡ từ "Mẹ"; bản màn hình reo chuông trong bóng tối | ✔ LONG, SH1, SH5, SH7 |
| T08 | Hai sân nhà liền kề: bên trái phơi quần áo khô cong dưới nắng hè, bên phải mưa trút nước mù mịt | ✔ LONG, SH3, SH6 |
| T09 | Sân nhà quê trời quang mây tạnh, mẹ Thành đứng ở hiên, Thành xách ba lô lếch thếch bước vào | ✔ LONG, SH5 |

## Lịch
- **LONG**: Thứ Năm 08/07 18:00 (+07).
- **SHORTS**:
  - SH1 (TRỌN): Thứ Năm 08/07 19:00
  - SH2 (TRỌN): Thứ Sáu 09/07 11:30
  - SH3 (TRỌN): Thứ Sáu 09/07 19:00
  - SH4 (TRỌN): Thứ Bảy 10/07 11:30
  - SH5 (TRỌN): Thứ Bảy 10/07 19:00
  - SH6 (TRAILER): Chủ Nhật 11/07 11:30
  - SH7 (TRAILER): Chủ Nhật 11/07 19:00
- **Tập sau (P67 - Ma gara "Sửa xe cho khách")**: Thứ Hai 12/07 18:00.
