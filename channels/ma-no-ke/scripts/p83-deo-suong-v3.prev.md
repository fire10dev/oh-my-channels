# Dự án 83 — Bác tài đèo sương "Năm mươi cây số giờ" (v3, 2026-11-24)

v3 nâng cấp kịch tính theo chuẩn P04:
- **Đồng hồ + cái giá cụ thể**: Hạn chót trước 4:00 sáng tại bến xe giao khách chuyến nối; nếu trễ, nhà xe Phi Long phải đền toàn bộ tiền vé cả xe và bị cắt lốt chạy đêm vào tay đối thủ Tốc Hành.
- **3 nấc leo thang chủ động**: Hưng bấm còi hơi + đá pha ép xe tải nhường đường → lấn làn ngược chiều quyết vượt mù trong khúc cua tay áo → dí sát cản trước đạp lút sàn định ủi vượt; cả 3 nấc đều bị chiếc xe tải Liên Xô cũ ghìm chặt.
- **Điểm thấp nhất**: 3:30 sáng giữa đèo, kim đồng hồ vẫn chết cứng ở 50, thời gian cạn sạch; Hưng buông vô lăng chịu thua cuộc đua, chấp nhận bị đền tiền và mất lốt.
- **Cú lật do trả giá**: Chấp nhận thua cuộc đua và đền tiền vé, nhưng đổi lại 30 hành khách suốt bao năm say xe nôn ói đêm nay ngủ say như ở nhà; tuần sau khách kéo đến đòi đi xe "chạy đúng năm mươi".
- **Khoảnh khắc rợn duy nhất**: Đạp lút ga máy gầm rung sàn xe nhưng khoảng cách không đổi và kim đồng hồ dính chặt ở vạch 50; giọng bác Tám vang lên ngay trong cabin xe khách.
- **Bỏ Ma Nó báo trước**: Bỏ các câu dặn trước; teaser cuối chuyển sang P84 (Tiến sĩ giấy), không ghi thứ/ngày.

## Xương sống kịch tính
- **Câu hỏi kịch tính trung tâm**: Liệu tài xế Hưng có vượt được chiếc xe tải ma chạy 50 km/h để về bến kịp trước bốn giờ sáng không?
- **Đồng hồ + cái giá**: Hạn chót 4:00 sáng tại bến xe giao khách chuyến nối. Nếu trễ, nhà xe Phi Long phải đền tiền vé cả xe và bị cắt lốt chạy đêm.
- **3 nấc leo thang chủ động**:
  1. Nấc 1: Bấm còi hơi inh ỏi, đá pha chớp mù trời đòi vượt → xe tải cũ không né một li.
  2. Nấc 2: Bẻ lái sang làn ngược chiều vượt mù trong khúc cua tay áo → xe tải cũ lướt theo che kín tầm nhìn, ép giật lái về làn.
  3. Nấc 3: Dí sát cản trước vào thùng gỗ, nghiến răng đạp lút sàn để ủi vượt → lực hãm vô hình xuất hiện, máy gầm rung sàn mà kim tốc độ dính chặt ở 50.
- **Điểm thấp nhất**: 3:30 sáng trên đỉnh đèo, kim đồng hồ vẫn chỉ 50, chuyến nối sắp lỡ. Hưng buông vô lăng, mồ hôi ướt sũng lưng áo, chấp nhận thua cuộc và mất lốt.
- **Cú lật (ai chọn gì, trả giá gì)**: Hưng chấp nhận buông bỏ cuộc đua, ngoan ngoãn bò 50 km/h sau xe tải cũ suốt chặng đèo. Trả giá: về bến trễ hai tiếng rưỡi, mất chuyến nối, phải đền tiền vé. Nhưng hành khách thức dậy tươi tỉnh vì lần đầu không ai bị nôn, tuần sau tranh nhau đặt vé xe "chạy năm mươi".
- **Khoảnh khắc rợn duy nhất**: Giữa đêm sương mù đặc, chân đạp lút sàn, máy xe gầm rung bần bật nhưng kim đồng hồ đứng chết ở 50 km/h, rồi giọng bác Tám trầm rền vang lên ngay trong cabin: "Đèo sương, năm mươi thôi con."
- **Câu kết**: Hai nhà xe gỡ biển "nhanh nhất", đổi thành "chậm nhất Việt Nam"; Ma Nó khuyên gặp đèn hậu đỏ thì cứ nối đuôi mà về với mẹ.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (dẫn chuyện) | B02, ep01 S01/S06/S26/S33/S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| HUNG | Hưng (tài xế xe khách Phi Long) | D04, D08 | Adam bựa | `atempo=1.05` |
| TAM | Bác Tám (ma giữ đèo, tài xế xe tải cũ) | D06, D07 | Thiền Tâm Đức | `asetrate=48000*0.92,aresample=48000,aecho=0.8:0.5:60:0.3` |
| THU | Chị Thu (hành khách say xe) | D05 | Ngọc Huyền | `anull` |

```json voices
{
  "MN": {
    "preset": "Thiện Minh",
    "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"
  },
  "HUNG": {
    "preset": "Adam bựa",
    "fx": "atempo=1.05"
  },
  "TAM": {
    "preset": "Thiền Tâm Đức",
    "fx": "asetrate=48000*0.92,aresample=48000,aecho=0.8:0.5:60:0.3"
  },
  "THU": {
    "preset": "Ngọc Huyền",
    "fx": "anull"
  }
}
```

## LONG (577 chữ lời thoại, dựng ≈ 3:15)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | D01 | *(không lời, 2.5 s)* | "ĐÈO SƯƠNG · 1:30 ĐÊM" · máy xe gầm |
| 0:02 | D04 | **HUNG**: Một trăm cây đèo sương. Xe sau hít khói nhé con! | "100 KM/H" · coihoi |
| 0:06 | D05 | **THU**: Bác tài ơi… chậm lại… em nôn mật xanh rồi… | tuisootsoat |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Khách hôm nay lái xe khách giường nằm. Chuyên môn: phóng bạt mạng. | "CHUYÊN MÔN: PHÓNG BẠT MẠNG" · coc · braam |
| 0:16 | D03 | **MN**: Tuyến đèo sương này có hai nhà xe: Phi Long với Tốc Hành. Đua nhau từ bến tới đỉnh đèo. | "PHI LONG VS TỐC HÀNH" |
| 0:21 | D04 | **HUNG**: Luật ngầm tuyến này: đến bến trước bốn giờ sáng thì ôm trọn khách nối chuyến. Đến sau… ôm nợ! | "HẠN: 4:00 SÁNG" · "ÔM TRỌN KHÁCH" · tick |
| 0:28 | D01 | **MN**: Sau bốn giờ là đền tiền vé, mất trắng lốt chạy đêm. Hưng vít ga chín mươi, sương đặc như sữa. | "MẤT LỐT · ĐỀN TIỀN" · bassdown |
| 0:34 | D01 → D02 | **MN**: Đang vít ga thì ngay trước mũi xe… đỏ rực đôi đèn hậu. | nhactat · "ĐÈN HẬU ĐỎ" |
| 0:39 | D04 | **HUNG**: Xe tải Liên Xô cũ? Đèn tròn đỏ đục? Ở đâu chui ra giữa đèo thế này? | mayxetaitram |
| 0:44 | D02 | **MN**: Chiếc xe tải thùng gỗ lừng lững trước mũi. Nó chạy đúng năm mươi. | "XE TẢI CŨ" · "50 KM/H" · tick |
| 0:48 | D04 | **HUNG**: Bốn giờ phải tới bến! Tránh ra cho bố mày vượt! | coihoi |
| 0:52 | D02 | **MN**: Nấc một: Hưng bấm còi hơi inh ỏi, đá pha chớp mù trời. Chiếc xe tải không né một li. | "NẤC 1: CÒI HƠI + ĐÁ PHA" · coihoi2 |
| 0:58 | D04 | **HUNG**: Điếc à? Năm mươi cây thì về mà chở lợn! |  |
| 1:01 | D01 | **MN**: Nấc hai: tới khúc cua tay áo, Hưng bẻ lái sang làn ngược chiều, quyết vượt mù trong sương. | "NẤC 2: VƯỢT MÙ CUA TAY ÁO" · ritlop |
| 1:07 | D02 | **MN**: Vừa thò đầu xe ra, chiếc xe tải cũ lướt theo che kín tầm nhìn, ép Hưng giật lái về làn. | "CHẶN ĐẦU" · phanhrr |
| 1:13 | D04 | **HUNG**: Mẹ kiếp! Tao đạp lút sàn xe này xem mày ép kiểu gì! | maygam |
| 1:17 | D08 | **MN**: Nấc ba: Hưng dí sát cản trước vào thùng gỗ, nghiến răng đạp lút chân ga. | "NẤC 3: ĐẠP LÚT SÀN" · maygam2 |
| 1:22 | D08 | **MN**: Khoảnh khắc rợn nhất đời tài xế: máy gầm rung sàn, nhưng kim đồng hồ dính chặt ở số năm mươi. | "KIM DÍNH Ở 50" · imlang |
| 1:28 | D08 → D04 | **MN**: Hưng phanh, khoảng cách không đổi. Hưng thả phanh, đạp lút ga, khoảng cách vẫn y nguyên năm mét. | "KHOẢNG CÁCH: 5 MÉT" |
| 1:34 | D04 | **HUNG**: Xe… xe bị cái gì giữ lại thế này? Chân ga kẹt rồi à? | runso |
| 1:38 | D07 | **TAM**: Đèo sương, năm mươi thôi con. | echo · "ĐÈO SƯƠNG, NĂM MƯƠI THÔI" |
| 1:42 | D04 | **HUNG**: Ai… ai vừa nói trong cabin xe tao đấy? | nhactat |
| 1:46 | D01 → D02 | **MN**: Ba giờ ba mươi sáng. Đỉnh đèo mù mịt. Chiếc xe tải Liên Xô vẫn bình thản dẫn đường đúng năm mươi cây số giờ. | "3:30 SÁNG" · "ĐỈNH ĐÈO" · tick |
| 1:53 | D04 | **MN**: Hưng buông vô lăng, mồ hôi ướt sũng lưng áo. Thua rồi. Bốn giờ sáng bến xe, chuyến nối đi mất rồi. | "ĐIỂM THẤP: BUÔNG VÔ LĂNG" · "THUA CUỘC ĐUA" · bassdown |
| 2:00 | D02 | **MN**: Mất lốt chạy, đền tiền vé. Hưng ngồi im chịu trận sau chiếc thùng gỗ suốt chặng đèo còn lại. | "CHẤP NHẬN TRẢ GIÁ" |
| 2:06 | D03 | **MN**: Sáu giờ sáng, xe bò về tới bến. Trễ đúng hai tiếng rưỡi. | "6:00 SÁNG" · "TRỄ 2 TIẾNG RƯỠI" |
| 2:10 | D04 | **HUNG**: Xuống xe đi bà con… chuyến này nhà xe xin đền tiền… | thodai |
| 2:14 | D05 | **MN**: Nhưng cửa xe mở ra, không một ai chửi bới. |  |
| 2:17 | D05 | **THU**: Ôi tỉnh cả người! Mười năm đi tuyến này, lần đầu tiên em ngủ một mạch không nôn túi nào! | "KHÔNG NÔN TÚI NÀO!" · pops |
| 2:24 | D09 | **MN**: Ba mươi khách bước xuống tươi rói. Xe Tốc Hành đối thủ cũng vừa trờ tới, tài xế mặt cắt không còn hạt máu. | "TỐC HÀNH CŨNG TRỄ" |
| 2:31 | D09 | **HUNG**: Ông… ông cũng bị chiếc xe tải Liên Xô đèn hậu đỏ kẹp năm mươi à? |  |
| 2:36 | D06 | **MN**: Ông chủ quán nước bến xe nghe thấy, mang ra tấm ảnh đen trắng chụp chiếc xe tải cũ và bác tài mũ cối. | "BÁC TÁM · 40 NĂM LÁI ĐÈO" |
| 2:43 | D07 | **MN**: Bác Tám. Bốn mươi năm chở hàng qua đèo sương chưa từng va quẹt, mất cách đây ba năm. | "NGƯỜI GIỮ ĐÈO" |
| 2:49 | D10 | **MN**: Tuần sau, điện thoại hai nhà xe nổ đơn liên tục. Khách gọi đến không hỏi xe giường nằm hay ghế ngả. | chuongdienthoai |
| 2:55 | D05 | **THU**: Cho hai vé chuyến đêm nhé! Mà xe các anh có chạy đúng năm mươi cây số giờ không đấy? | "CÓ CHẠY 50 KM/H KHÔNG?" |
| 3:01 | D03 | **MN**: Phi Long với Tốc Hành gỡ sạch biển nhanh nhất, đổi thành: Tuyến xe chậm nhất Việt Nam. | "TUYẾN XE CHẬM NHẤT VIỆT NAM" |
| 3:06 | D02 | **MN**: Đèo sương đêm, thấy đèn hậu đỏ đục thì cứ ngoan ngoãn nối đuôi. Người ta dắt mày về với mẹ đấy. | coc |
| 3:12 | B02 | **MN**: Tập sau: một ông giám đốc dùng bằng tiến sĩ giả hai mươi năm về trường cũ phát biểu. Trường có cụ đồ… chấm bài rất kỹ. | "TẬP SAU" · whoosh |
| 3:20 | S06 | **MN**: Bấm đăng ký đi. Thích phóng bạt mạng thì để bác Tám kèm cho một đoạn. | "ĐĂNG KÝ" · coc |

## SHORTS

### SH1 (TRỌN) — Hồ sơ ma giữ đèo
- **MN**: Hồ sơ người giữ đèo. Chuyên trị các tay lái bạt mạng thích coi thường tính mạng người khác. (D01) · pop "MA GIỮ ĐÈO"
- **MN**: Một. Xuất hiện lúc nửa đêm trong sương đặc quánh như sữa. (D01)
- **MN**: Hai. Đèn hậu tròn đỏ đục, thùng gỗ Liên Xô cũ, chạy đúng năm mươi cây số giờ. (D02) · pop "50 KM/H"
- **HUNG**: Bốn giờ phải tới bến! Tránh ra cho bố mày vượt! (D04)
- **MN**: Ba. Đạp lút ga kim không nhích, lấn làn bị ép về, phanh lại khoảng cách không đổi. (D08) · pop "KIM DÍNH Ở 50"
- **TAM**: Đèo sương, năm mươi thôi con. (D07) · pop "BÁC TÁM"
- *(lặng 0.8 s)*
- **MN**: Hai nhà xe cự phách đêm ấy bị dắt như con nít. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH2 (TRỌN) — Bí quyết chống say xe
- **THU**: Bác tài ơi… chậm lại… em nôn mật xanh rồi… (D05) · pop "NÔN MẬT XANH"
- **HUNG**: Một trăm cây đèo sương. Xe sau hít khói nhé con! (D04) · pop "100 KM/H"
- **MN**: Đi xe khách qua đèo sương. Nhanh nhất tuyến đồng nghĩa với xanh nhất tuyến. (D01)
- **MN**: Cho đến khi trước mũi xe xuất hiện một chiếc xe tải Liên Xô cũ chạy đúng năm mươi. (D02) · pop "MA GIỮ ĐÈO — BÁC TÁM"
- **THU**: Ôi tỉnh cả người! Mười năm đi tuyến này, lần đầu tiên em ngủ một mạch không nôn túi nào! (D05) · pop "NGỦ TRỌN MỘT MẠCH"
- *(lặng 0.8 s)*
- **MN**: Bí quyết chống say xe là bị ma kèm. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH3 (TRỌN) — Cuộc đua lúc 4 giờ sáng
- **HUNG**: Luật ngầm tuyến này: đến bến trước bốn giờ sáng thì ôm trọn khách nối chuyến. Đến sau… ôm nợ! (D04) · pop "HẠN: 4:00 SÁNG"
- **MN**: Sau bốn giờ sáng là đền tiền vé cả xe, mất trắng lốt chạy đêm. Hưng vít ga chín mươi xuyên sương. (D01) · pop "MẤT LỐT · ÔM NỢ"
- **MN**: Đang lao như bay thì gặp một chiếc xe tải Liên Xô cũ chắn ngang đường, túc tắc năm mươi. (D02) · pop "MA GIỮ ĐÈO"
- **HUNG**: Điếc à? Năm mươi cây thì về mà chở lợn! (D04)
- **MN**: Hưng còi hơi, đá pha, bẻ lái vượt cua. Xe tải cũ lướt theo che kín đường. (D02)
- **MN**: Sáu giờ sáng mới bò về bến, trễ hai tiếng rưỡi, đền sạch tiền vé. (D03) · pop "ĐỀN SẠCH TIỀN VÉ"
- *(lặng 0.8 s)*
- **MN**: Kẻ thách thức tốc độ đã trả giá ra sao? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH4 (TRỌN) — Khoảnh khắc kim dính ở 50
- **MN**: Khoảnh khắc rợn nhất đời tài xế đèo sương. (D01)
- **HUNG**: Mẹ kiếp! Tao đạp lút sàn xe này xem mày ép kiểu gì! (D04) · pop "ĐẠP LÚT SÀN"
- **MN**: Hưng dí sát cản trước vào thùng xe tải Liên Xô cũ, nghiến răng đạp lút chân ga. (D08) · pop "MA GIỮ ĐÈO"
- **MN**: Máy gầm rung sàn xe, nhưng kim đồng hồ dính chặt ở số năm mươi. (D08) · pop "KIM DÍNH Ở 50"
- **MN**: Hưng phanh, khoảng cách không đổi. Đạp lút ga, khoảng cách vẫn đúng năm mét. (D08)
- **TAM**: Đèo sương, năm mươi thôi con. (D07) · pop "BÁC TÁM"
- *(lặng 0.8 s)*
- **MN**: Chiếc xe vô hình nào đang giữ chân ga? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH5 (TRỌN) — Đổi khẩu hiệu nhà xe
- **MN**: Hai nhà xe khách đua nhau tranh giành từng mét đường đèo, khẩu hiệu "nhanh nhất tuyến". (D03) · pop "NHANH NHẤT TUYẾN"
- **MN**: Đêm ấy cả hai xe cùng bị một chiếc xe tải cũ ghìm chân ở tốc độ năm mươi suốt ba tiếng. (D02) · pop "MA GIỮ ĐÈO"
- **MN**: Sáng hôm sau về bến trễ, tưởng khách đập bàn đòi bồi thường. Ai ngờ khách tươi cười khen nức nở. (D05)
- **THU**: Cho hai vé chuyến đêm nhé! Mà xe các anh có chạy đúng năm mươi cây số giờ không đấy? (D10) · pop "CÓ CHẠY 50 KHÔNG?"
- **MN**: Tuần sau, cả hai nhà xe gỡ sạch biển cũ, đổi thành: Tuyến xe chậm nhất Việt Nam. (D03) · pop "CHẬM NHẤT VIỆT NAM"
- *(lặng 0.8 s)*
- **MN**: Chuyện hai ông tài xế chịu khuất phục trước bác Tám. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 (TRAILER) — Chiếc xe tải trong sương đặc
- **MN**: Đêm sương đặc quánh như sữa. Xe khách giường nằm đang đổ đèo chín mươi cây số giờ. (D01) · pop "90 KM/H"
- **MN**: Bỗng ngay trước mũi xe hiện ra đôi đèn hậu tròn đỏ đục của chiếc xe tải Liên Xô cũ. (D02) · pop "MA GIỮ ĐÈO"
- **HUNG**: Bốn giờ phải tới bến! Tránh ra cho bố mày vượt! (D04)
- **MN**: Hưng bẻ lái sang làn ngược chiều quyết vượt mù trong khúc cua tay áo. (D01) · pop "CUA TAY ÁO"
- **MN**: Chiếc xe tải lướt theo che kín tầm nhìn. Hưng dí sát đuôi, đạp lút ga. (D08)
- **TAM**: Đèo sương, năm mươi thôi con. (D07) · pop "BÁC TÁM"
- **HUNG**: Ai… ai vừa nói trong cabin xe tao đấy? (D04)
- **MN**: Bác tài mũ cối bí ẩn ấy là ai? Xem bản đầy đủ ở link dưới. (S26)

### SH7 (TRAILER) — Hạn chót bốn giờ sáng
- **MN**: Còn ba mươi phút nữa là bốn giờ sáng. Không về bến kịp, nhà xe đền tiền vé cả chuyến. (D01) · pop "HẠN: 4:00 SÁNG"
- **HUNG**: Xe tải Liên Xô cũ? Đèn tròn đỏ đục? Ở đâu chui ra giữa đèo thế này? (D04) · pop "MA GIỮ ĐÈO"
- **MN**: Nó chạy đúng năm mươi. Vượt không được, phanh không xa ra được, máy gầm rú mà kim tốc độ không nhích. (D08) · pop "KIM DÍNH Ở 50"
- **MN**: Ba giờ ba mươi sáng trên đỉnh đèo. Hưng buông vô lăng, mồ hôi ướt sũng lưng áo. (D04)
- **HUNG**: Xe… xe bị cái gì giữ lại thế này? Chân ga kẹt rồi à? (D04)
- **MN**: Liệu xe khách có về bến kịp chuyến nối hay trắng tay ôm nợ? Xem bản đầy đủ ở link dưới. (S26)

## Hình
Tận dụng: B02 + ep01 S01/S06/S26/S33/S34 (Ma Nó).

### Danh sách ảnh vẽ mới (16:9)
| Mã | Cảnh | Trạng thái v3 |
|---|---|---|
| D01 | Đèo núi sương đặc như sữa ban đêm, đèn pha xe khách giường nằm xuyên sương | [DÙNG] |
| D02 | Trong sương, đôi đèn hậu tròn đỏ đục của xe tải Liên Xô cũ thùng gỗ, biển số mờ, ngay trước mũi xe | [DÙNG] |
| D03 | Bến xe đêm: hai xe khách đỗ cạnh nhau; bản sáng về bến trễ; bản biển khẩu hiệu mới "chậm nhất Việt Nam" | [DÙNG] |
| D04 | Hưng cận: áo khoác da, kính râm, nhai kẹo; bản phanh hốt hoảng; bản mồ hôi buông vô lăng | [DÙNG] |
| D05 | Chị Thu cận ghế sau ôm túi nôn mặt tái; bản ngủ ngon trọn giấc; bản xuống xe tươi tỉnh | [DÙNG] |
| D06 | Ảnh đen trắng cũ: xe tải Liên Xô thùng gỗ trên đèo, bác tài mũ cối đứng cạnh | [DÙNG] |
| D07 | Bác Tám mờ ảo: mũ cối, sơ mi bạc, tay đặt trên vô lăng to | [DÙNG] |
| D08 | Cực cận đồng hồ tốc độ, kim đứng chết ở 50, chân đạp lút sàn phía dưới | [DÙNG] |
| D09 | Bến xe sáng: hai tài xế đứng đối diện, mặt còn tái, đối chiếu chuyện gặp xe tải kẹp 50 | [DÙNG] |
| D10 | Văn phòng nhà xe: điện thoại reo liên tục, nhân viên ghi vé cho khách hỏi xe 50 km/h | [DÙNG] |

## Lịch
- LONG: Thứ Hai 06/09 18:00 (+07)
- 7 SHORTS:
  - SH1: Thứ Hai 06/09 19:00
  - SH2: Thứ Ba 07/09 11:30
  - SH3: Thứ Ba 07/09 19:00
  - SH4: Thứ Tư 08/09 11:30
  - SH5: Thứ Tư 08/09 19:00
  - SH6: Thứ Năm 09/09 11:30
  - SH7: Thứ Năm 09/09 19:00
