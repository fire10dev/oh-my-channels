# Dự án 59 — Thần Nông "Tráo kho" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá rõ ràng**: Hạn chót xuất kho trước bình minh ngày thứ ba (cữ bón đón đòng quyết định cả vụ lúa); nếu tráo nhầm, hai mẫu ruộng nhà ông Cẩn ăn trọn đất sét lép trắng, mất trắng vụ mùa.
- **3 nấc leo thang đối đầu chủ động**: Lão Cẩn liên tục nâng cấp phòng thủ (Nấc 1: bấm thêm 2 ổ khóa, vạch thêm 2 vạch đỏ → Nấc 2: xích sắt từng cọc bao, rải tro bếp kín cửa → Nấc 3: thức trắng đêm cầm đèn pin rình bắt trộm).
- **Điểm thấp nhất nghẹt thở**: 4:00 sáng, chỉ còn 2 tiếng trước giờ mở kho, Cẩn rạch bao kiểm tra nhưng đất sét do chính tay mình trộn quá giống thật đến mức chính mình không phân biệt nổi.
- **Cú lật do nhân vật CHỌN và TRẢ GIÁ**: Cẩn đánh liều bốc toàn bộ bao ở gian trong bón ruộng mình vì đinh ninh đó là nơi cất giấu an toàn nhất → tự tay bón trọn bùn sét vào ruộng nhà; cái giá lâu dài: đập máy trộn, đổ sạch đất sét, nhập 100% phân thật.
- **Cold open chuẩn bible**: Chỉ treo câu hỏi bằng tiếng bao tải lê và tiếng khóa cửa lúc 2:00 sáng, tuyệt đối không lộ trước đáp án.
- **Sửa mã ảnh vẽ mới chuẩn TN01–TN08**, chuẩn hóa mốc thời gian LONG (~3,2 chữ/s, tổng 3:09) và bổ sung punchline riêng cho 5 short TRỌN (70–110 chữ).

## Xương sống kịch tính
- **Câu hỏi kịch tính trung tâm**: Làm sao lão đại lý phân giả phân biệt được bao phân thật để cứu hai mẫu ruộng nhà mình trước hạn xuất kho bón đòng, khi kho hàng bị một bóng ma nón lá âm thầm hoán đổi từng đêm?
- **Đồng hồ + cái giá**: 6:00 sáng ngày thứ ba (phiên xuất kho bón đòng lớn nhất vụ). Cái giá đè nặng lên lão Cẩn: bón nhầm đất sét thì hai mẫu ruộng nhà lép trắng mất sạch; còn dân làng đứng trước nguy cơ mất mùa nếu phân giả tuồn ra đồng.
- **3 nấc leo thang**:
  1. *Nấc 1*: Đêm đầu bao bị xáo trộn vị trí → Cẩn bấm thêm 2 ổ khóa Việt Tiệp, đánh dấu thêm 2 vạch đỏ to tướng.
  2. *Nấc 2*: Đêm hai vạch đỏ tự nhảy sang bao giả → Cẩn xích sắt từng cọc bao, rải tro bếp kín cửa kho.
  3. *Nấc 3 (Nước liều)*: Đêm cuối Cẩn thức trắng ôm đèn pin rình trong kho → Thần Nông xuất hiện, bao tải tự trượt qua mắt xích sắt lê sột soạt đổi chỗ trước mắt Cẩn.
- **Điểm thấp nhất**: 4:00 sáng, Cẩn sụp xuống giữa kho tối, hai nắm phân trên tay giống hệt nhau, hoảng loạn nhận ra sản phẩm gian lận của mình quá tinh vi khiến chính mình không còn nhận ra đâu là thật.
- **Cú lật (Chọn & Trả giá)**: Cẩn tự tay chọn bốc hết bao gian trong mang bón ruộng mình → ăn trọn bùn sét; vụ sau muốn ruộng không lép thì phải trả giá: đập bỏ máy trộn, nhập 100% phân thật, chấp nhận giảm nửa tiền lời.
- **Khoảnh khắc rợn duy nhất**: 2:00 sáng đêm thứ ba, tro bếp phẳng lì không dấu chân, xích sắt còn nguyên nhưng các bao tự trườn qua mắt xích; ánh đèn pin quét qua một bóng người đội nón lá vác cuốc đứng im lìm đếm từng bao.
- **Câu kết**: Châm biếm trọn vẹn: Thắm hớn hở đòi mua chịu tiếp vụ sau vì phân quá tốt, Cẩn méo mặt đứng nhìn ruộng lép; Ma Nó chốt hạ Thần Nông không phạt ai, chỉ hay dọn kho giùm.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (dẫn chuyện, mỉa mai, tỉnh rụi) | B02, S01, S26, S33, S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| CAN | Ông Cẩn (đại lý phân bón, khôn lỏi, tham lam) | TN05 | Adam bựa | `atempo=1.02` |
| NONG | Thần Nông (lão nông nón lá, thâm trầm, uy nghi) | TN06, TN08 | Thiền Tâm Đức | `asetrate=48000*0.92,aresample=48000,aecho=0.8:0.6:80:0.3` |
| THAM | Chị Thắm (nông dân mua chịu, thật thà) | TN07 | Ngọc Huyền | `anull` |

```json voices
{
  "MN": {
    "preset": "Thiện Minh",
    "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"
  },
  "CAN": {
    "preset": "Adam bựa",
    "fx": "atempo=1.02"
  },
  "NONG": {
    "preset": "Thiền Tâm Đức",
    "fx": "asetrate=48000*0.92,aresample=48000,aecho=0.8:0.6:80:0.3"
  },
  "THAM": {
    "preset": "Ngọc Huyền",
    "fx": "anull"
  }
}
```

## LONG (592 chữ lời thoại, dựng ≈ 3:09)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | TN01 | *(không lời, 2.0 s)* | "KHO ĐẠI LÝ CẨN · 2:00 SÁNG" · sột soạt · nhạc tắt |
| 0:02 | TN01 | **CAN**: Ai đấy? Đứa nào trong kho? | nhạc tắt |
| 0:04 | TN01 | *(không lời, 1.8 s)* | bao tải lê "sột… sột…" · nhạc tắt |
| 0:06 | TN05 | **CAN**: Khóa ba ổ… sao bao lại dịch chuyển? | tim đập · thở dốc |
| 0:08 | S01 → S26 | **MN**: Lại mò vào à? Mua phân bón ở đâu? Có chắc thứ trong bao… là phân không? | "LẠI MÒ VÀO À?" · coc · braam |
| 0:13 | S26 | **MN**: Có một ông đại lý biết chắc chắn. Vì chính tay ông ấy trộn. | "CHÍNH TAY TRỘN" |
| 0:18 | TN02 | **MN**: Ông Cẩn, đại lý lớn nhất xã. Bán chịu cả vụ, gặt mới thu. Cả xã ai cũng nợ ông. | "ĐẠI LÝ ÔNG CẨN" · maycay · so |
| 0:24 | TN03 | **MN**: Nhưng phân NPK của ông trộn đất sét sấy khô với cát. Nhìn y đúc phân thật. Đóng bao nhãn ngoại, lời gấp đôi. | "CÔNG THỨC: + ĐẤT SÉT" · maytron |
| 0:31 | TN04 | **MN**: Đất sét gặp nước là hóa bùn, làm lúa nghẹn đòng không trổ nổi. | "GẶP NƯỚC → HÓA BÙN" |
| 0:35 | TN05 | **CAN**: Ruộng nhà mình thì phải phân thật. Lúa nhà ăn, bán cho ai mà trộn! | "LÚA NHÀ ĂN" · cười khẩy |
| 0:40 | TN04 | **MN**: Kho chia hai gian: gian ngoài bao trộn bán cho dân, gian trong bao xịn bón hai mẫu ruộng nhà. | "GIAN NGOÀI: BÁN · GIAN TRONG: NHÀ" |
| 0:46 | TN04 | **CAN**: Phân xịn tao quẹt vạch bút đỏ dưới đáy. Đố lẫn đi đâu. | "VẠCH ĐỎ DƯỚI ĐÁY" · butda |
| 0:50 | TN06 | **MN**: Dân gian bảo Thần Nông coi mùa màng. Thấy lúa vàng vọt nghẹn đòng, ông vác cuốc đi thăm. | "THẦN NÔNG THĂM ĐỒNG" · giodong |
| 0:56 | TN07 | **THAM**: Bón đủ phân mà lá cứ vàng. Chắc tại trời làm úng rễ cụ ạ. | "CHẮC TẠI TRỜI" · tho |
| 1:01 | TN06 | **NONG**: Trời nào úng rễ. Đất sét nghẹn rễ lúa rồi con. | "ĐẤT SÉT NGHẸN RỄ" · cuoctram |
| 1:05 | S26 | **MN**: Còn ba ngày là đến cữ bón đòng. Bón nhầm đất sét là lép trắng. Hạn xuất kho: sáng sớm ngày thứ ba. | "HẠN: 3 NGÀY · CỮ BÓN ĐÒNG" · tick · bassdown |
| 1:13 | TN01 | **MN**: Đêm đầu tiên, kho có tiếng động lạ. Sáng ra, năm bao gian ngoài nằm ở gian trong. | "ĐÊM 1: TRÁO VỊ TRÍ" · kach |
| 1:18 | TN05 | **CAN**: Xếp lộn à? Tao bấm thêm hai ổ khóa, vạch thêm hai vạch đỏ to tướng. Xem chạy đằng trời! | "THÊM KHÓA · THÊM VẠCH ĐỎ" |
| 1:24 | TN04 | **MN**: Đêm thứ hai, khóa không xước. Nhưng sáng ra, vạch đỏ dưới đáy bao gian trong nhảy sang bao gian ngoài. | "ĐÊM 2: VẠCH ĐỎ TỰ NHẢY" · whoosh |
| 1:30 | TN05 | **CAN**: Tao lấy xích sắt khóa chặt, rải tro kín cửa. Đêm nay tao thức trắng canh! | "XÍCH SẮT · RẢI TRO" · xichsat |
| 1:35 | TN01 | *(không lời, 1.8 s)* | "ĐÊM 3 · 2:00 SÁNG" · tro bếp nguyên vẹn · nhạc tắt |
| 1:37 | TN01 | **MN**: Hai giờ sáng. Tro bếp không một vết chân. Nhưng trong kho, tiếng bao tải bắt đầu lê: sột… sột… | "SỘT… SỘT…" · baole · nhạc tắt |
| 1:43 | TN08 | **MN**: Đèn pin lia vào: xích sắt còn nguyên, nhưng từng bao phân tự trườn qua mắt xích, đổi chỗ cho nhau. | "BAO TỰ TRƯỜN" · nhạc tắt |
| 1:49 | TN08 | **MN**: Giữa hai gian kho, một bóng người đội nón lá, áo nâu, vác cuốc, đứng yên đếm từng bao. | "BÓNG NÓN LÁ ĐẾM BAO" · im 2 s · nhạc tắt |
| 1:55 | TN08 | **NONG**: Một bao thật đổi một bao giả. Vừa đủ số ruộng làng. | "VỪA ĐỦ SỐ RUỘNG" · echo · cuoccham |
| 1:59 | TN05 | **MN**: Bốn giờ sáng, bóng người biến mất. Còn hai tiếng nữa là dân đến kéo xe chở phân. | "4:00 SÁNG · CÒN 2 TIẾNG" · mayoff · tick |
| 2:05 | TN05 | **CAN**: Bao nào thật? Bao nào giả? Đất sét tao tự trộn mà giờ tao không nhận ra?! | "TAO TRỘN MÀ TAO KHÔNG BIẾT?!" · runray |
| 2:11 | TN05 | **MN**: Điểm thấp nhất của kẻ gian: đồ giả giống thật đến mức chính mình không phân biệt nổi. | "ĐỒ GIẢ GIỐNG THẬT" |
| 2:16 | TN05 | **MN**: Sợ mất lúa, ông Cẩn đánh liều vơ hết bao gian trong bón ruộng mình, tống bao gian ngoài cho dân. | "ĐÁNH LIỀU CHỌN GIAN TRONG" |
| 2:23 | TN06 | **MN**: Vụ gặt đến. Ruộng cả làng trĩu hạt vì trúng phân xịn. Riêng hai mẫu ruộng ông Cẩn vàng quạch, lép trắng. | "RUỘNG DÂN: BỘI THU · RUỘNG CẨN: LÉP TRẮNG" · luonhat |
| 2:30 | TN07 | **THAM**: Bác Cẩn ơi, phân vụ này tốt quá! Vụ sau lại để chịu cho em nhé! | "PHÂN TỐT QUÁ!" · cuoilon |
| 2:35 | TN05 | **CAN**: Cười… cười cái gì… | nucuoimeomeo |
| 2:37 | TN03 | **MN**: Muốn ruộng nhà mình có ăn, ông Cẩn chỉ còn một cách: đập máy trộn, đổ sạch đất sét, nhập toàn bộ phân thật. | "ĐẬP MÁY TRỘN · BỎ ĐẤT SÉT" · buadong |
| 2:45 | TN04 | **MN**: Kho không cần vạch đỏ hay xích nữa. Tráo kiểu gì cũng là hàng thật. Lời ít đi, nhưng ngủ ngon. | "HÀNG THẬT 100%" |
| 2:51 | S33 → S34 | **MN**: Bán thứ gì, nó quay về mâm nhà mày. Thần Nông không phạt ai, chỉ hay dọn kho giùm thôi. | "THẦN NÔNG CHỈ DỌN KHO GIÙM" · coc |
| 2:57 | S26 | **MN**: Tập sau: đội bóng xã nhận tiền làm thua trận chung kết. Khung thành có ông thủ môn cũ… chưa lọt lưới từ năm bảy mươi tám. | "TẬP SAU" · whoosh · botbop |
| 3:04 | S06 | **MN**: Bấm đăng ký đi. Kịch bản ở đây làm từ chữ thật, tuyệt đối không độn đất sét. | "ĐĂNG KÝ" · coc |

## SHORTS

### SH1 — Trong kho có gì? (TRAILER, 35 s)
- **MN**: Nghe kỹ. Trong kho lúc hai giờ sáng không có người. (TN01) · pop "2:00 SÁNG"
- *(không lời, 1.5 s)* · bao tải lê "sột… sột…"
- **CAN**: Ai đấy? Đứa nào trong kho? (TN01) · pop "AI TRONG KHO?"
- **CAN**: Khóa ba ổ… sao bao lại dịch chuyển? (TN05) · pop "KHÓA 3 Ổ"
- **MN**: Đèn pin lia vào: xích sắt còn nguyên, nhưng từng bao phân tự trườn qua mắt xích, đổi chỗ cho nhau. (TN08) · pop "BAO TỰ TRƯỜN"
- **MN**: Giữa hai gian kho, một bóng người đội nón lá, áo nâu, vác cuốc, đứng yên đếm từng bao. (TN08) · pop "THẦN NÔNG"
- **NONG**: Một bao thật đổi một bao giả. Vừa đủ số ruộng làng. (TN08) · pop "ĐỦ SỐ RUỘNG"
- **MN**: Bóng người ấy là ai? Và tại sao các bao phân tự đổi chỗ? Tao kể ở bản đầy đủ, link dưới. (S26) · pop "LINK DƯỚI"

### SH2 — Bí mật hai gian kho (TRỌN, 35 s)
- **MN**: Hồ sơ đại lý phân bón giàu nhất xã. (TN02) · pop "ĐẠI LÝ ÔNG CẨN"
- **MN**: Phân NPK trộn đất sét sấy khô với cát. Lời gấp đôi. (TN03) · pop "NPK + ĐẤT SÉT"
- **MN**: Kho chia hai gian: gian ngoài bán cho dân, gian trong bón ruộng nhà. (TN04) · pop "GIAN NGOÀI · GIAN TRONG"
- **CAN**: Ruộng nhà mình thì phải phân thật. Lúa nhà ăn, bán cho ai mà trộn! (TN05) · pop "LÚA NHÀ ĂN"
- **CAN**: Phân xịn tao quẹt vạch bút đỏ dưới đáy. Đố lẫn đi đâu. (TN04) · pop "VẠCH ĐỎ DƯỚI ĐÁY"
- **MN**: Nhưng đêm ấy, Thần Nông ghé kho, vạch đỏ tự nhảy sang bao giả. (TN06) · pop "THẦN NÔNG"
- **MN**: Khôn lỏi cả đời, kết cục tự bốc bùn sét về nấu cơm ăn. (TN05) · pop "TỰ BỐC BÙN"
- *(không lời, 0.8 s)* · nhạc tắt
- **MN**: Lão đại lý cay đắng ra sao, tao kể ở bản đầy đủ, link dưới. (S26) · pop "LINK DƯỚI"

### SH3 — Đất sét nghẹn rễ (TRỌN, 32 s)
- **THAM**: Bón đủ phân mà lá cứ vàng. Chắc tại trời làm úng rễ cụ ạ. (TN07) · pop "CHẮC TẠI TRỜI?"
- **NONG**: Trời nào úng rễ. Đất sét nghẹn rễ lúa rồi con. (TN06) · pop "THẦN NÔNG"
- **MN**: Dân làng cúng Thần Nông cầu mùa màng. Cụ không ban phép màu. (TN06) · pop "KHÔNG PHÉP MÀU"
- **MN**: Cụ vào thẳng kho đại lý dọn dẹp giùm: đổi bao thật ra cho dân, tống đất sét về ruộng lão Cẩn. (TN01) · pop "DỌN KHO GIÙM"
- **MN**: Bán đồ gian thì gặt bùn non, thần linh chấm công không trượt phát nào. (TN06) · pop "THẦN CHẤM CÔNG"
- *(không lời, 0.8 s)* · nhạc tắt
- **MN**: Màn tráo kho đỉnh cao của cụ Thần Nông, tao kể ở bản đầy đủ, link dưới. (S34) · pop "LINK DƯỚI"

### SH4 — Ba nấc chống ma (TRỌN, 38 s)
- **MN**: Cách lão đại lý gian manh chống lại Thần Nông. (TN05) · pop "3 LẦN CHỐNG CỰ"
- **MN**: Nấc một: Bao bị dời chỗ. Lão bấm thêm hai ổ khóa, vạch thêm hai vạch đỏ to tướng. (TN05) · pop "NẤC 1: THÊM KHÓA"
- **MN**: Nấc hai: Vạch đỏ tự nhảy. Lão lấy xích sắt khóa chặt, rải tro bếp kín cửa. (TN04) · pop "NẤC 2: XÍCH SẮT + TRO"
- **MN**: Nấc ba: Hai giờ sáng, tro bếp phẳng lì, nhưng bao tải tự trườn qua mắt xích. (TN08) · pop "NẤC 3: BAO TỰ TRƯỜN"
- **MN**: Rọi đèn pin: Thần Nông vác cuốc đứng đếm từng bao. (TN08) · pop "THẦN NÔNG ĐẾM BAO"
- **MN**: Khóa ba ổ với rải tro, gặp cụ thần nông cũng chỉ làm trò cười. (TN05) · pop "LÀM TRÒ CƯỜI"
- *(không lời, 0.8 s)* · nhạc tắt
- **MN**: Đấu với thần đất đai thì chỉ có nước cởi xích. Tao kể ở bản đầy đủ, link dưới. (S26) · pop "LINK DƯỚI"

### SH5 — Điểm thấp nhất của kẻ gian (TRAILER, 35 s)
- **MN**: Còn hai tiếng nữa là trời sáng. Cả làng kéo xe đến bốc phân bón đòng. (TN02) · pop "CÒN 2 TIẾNG"
- **MN**: Trong kho, các bao đã bị tráo sạch vị trí. (TN04) · pop "KHO BỊ TRÁO SẠCH"
- **CAN**: Bao nào thật? Bao nào giả? Đất sét tao tự trộn mà giờ tao không nhận ra?! (TN05) · pop "TAO KHÔNG NHẬN RA?!"
- **MN**: Điểm thấp nhất của kẻ gian: đồ giả giống thật đến mức chính mình không phân biệt nổi. (TN05) · pop "ĐỒ GIẢ GIỐNG THẬT"
- **MN**: Bốc nhầm là hai mẫu ruộng nhà lép trắng. (TN06) · pop "LÉP TRẮNG"
- **MN**: Lão Cẩn sẽ chọn bao nào cho ruộng nhà mình? Đáp án ở bản đầy đủ, link dưới. (S26) · pop "LINK DƯỚI"

### SH6 — Hai mẫu ruộng lép (TRỌN, 35 s)
- **MN**: Vụ gặt kỳ lạ nhất lịch sử cánh đồng xã. (TN06) · pop "VỤ GẶT LẠ LÙNG"
- **MN**: Ruộng cả làng trĩu hạt vì trúng phân xịn. Riêng hai mẫu ruộng ông Cẩn vàng quạch, lép trắng. (TN06) · pop "DÂN TRÚNG · CẨN LÉP"
- **THAM**: Bác Cẩn ơi, phân vụ này tốt quá! Vụ sau lại để chịu cho em nhé! (TN07) · pop "PHÂN TỐT QUÁ!"
- **CAN**: Cười… cười cái gì… (TN05) · pop "CƯỜI CÁI GÌ…"
- **MN**: Bán đất sét cho người ta, đất sét tự tìm về mâm nhà mình. Nuốt không trôi cũng phải ráng mà nhai. (TN06) · pop "GẶT ĐÚNG THỨ GIEO"
- *(không lời, 0.8 s)* · nhạc tắt
- **MN**: Vụ mùa quả báo cay đắng của lão Cẩn, tao kể ở bản đầy đủ, link dưới. (S33) · pop "LINK DƯỚI"

### SH7 — Muốn không ăn bùn (TRỌN, 34 s)
- **MN**: Làm sao để không bị Thần Nông tráo kho? (S26) · pop "BÀI HỌC TRÁO KHO"
- **CAN**: Đập máy trộn, đổ sạch đất sét, nhập toàn bộ phân thật! (TN03) · pop "ĐẬP MÁY TRỘN"
- **MN**: Đúng. Kho không cần vạch đỏ hay xích nữa. Tráo kiểu gì cũng là hàng thật. (TN04) · pop "100% HÀNG THẬT"
- **MN**: Lời ít đi một nửa, nhưng đêm ngủ không giật mình. (TN05) · pop "NGỦ NGON"
- **MN**: Thần Nông không phạt ai, chỉ hay dọn kho giùm thôi. Còn muốn ăn xổi ở thì, cụ dọn luôn cả cơ nghiệp. (TN06) · pop "THẦN NÔNG DỌN KHO"
- *(không lời, 0.8 s)* · nhạc tắt
- **MN**: Đừng để cụ ghé thăm kho nhà mày. Bản đầy đủ ở link dưới. (S06) · pop "LINK DƯỚI"

## Hình
Tái dùng: B02 + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Ảnh vẽ mới (16:9) — Đủ 8/8 ảnh của v2:
- [x] **TN01**: Kho phân bón mái tôn đêm, cửa hé, bên trong tối, bao xếp chồng hai gian; bản ông Cẩn rình ở cửa
- [x] **TN02**: Đại lý phân bón đầu xã ban ngày, bao chất cao, nông dân xếp hàng ghi sổ nợ
- [x] **TN03**: Đêm: máy trộn, người làm đổ đất sét, cát; bản sau máy tắt, đống đất sét bị đổ bỏ
- [x] **TN04**: Kho hai gian: gian ngoài chất cao, gian trong ít bao; cận ông Cẩn vạch bút đỏ dưới đáy bao
- [x] **TN05**: Ông Cẩn cận: sơ mi ngắn tay, bụng to, bút đỏ cài túi; bản ôm đầu hoảng loạn, bản đứng giữa ruộng lép
- [x] **TN06**: Cánh đồng: Thần Nông (ông lão nón lá, áo nâu, vác cuốc, chân lấm bùn, mặt khuất vành nón) đi bờ ruộng; bản giữa vụ lúa vàng vọt, bản cuối vụ ruộng dân xanh trĩu hạt, hai mẫu ruộng lép trắng
- [x] **TN07**: Chị Thắm cận: nón lá, áo bà ba nâu, nhìn ruộng; bản gặt lúa cười
- [x] **TN08**: Đèn pin lia vào kho tối: bao đứng im lọt qua mắt xích, giữa hai gian một bóng người đội nón lá vác cuốc

## Lịch
- **LONG**: Thứ Hai 14/06 18:00 (+07)
- **SH1** (TRAILER): Thứ Hai 14/06 19:00
- **SH2** (TRỌN): Thứ Ba 15/06 11:30
- **SH3** (TRỌN): Thứ Ba 15/06 19:00
- **SH4** (TRỌN): Thứ Tư 16/06 11:30
- **SH5** (TRAILER): Thứ Tư 16/06 19:00
- **SH6** (TRỌN): Thứ Năm 17/06 11:30
- **SH7** (TRỌN): Thứ Năm 17/06 19:00
- *Tập sau (P60 — Ma thủ môn "Đôi găng vải")*: Thứ Năm 17/06 18:00
