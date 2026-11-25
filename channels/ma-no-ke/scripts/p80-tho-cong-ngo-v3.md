# Dự án 80 — Thổ Công ngõ "Lấn ngõ thì thành ngõ" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá cụ thể**: Hạn chót trước trưa mùng 2 tháng 9 (khi họ hàng đến ăn tiệc khao xe mới); nếu cổng không khóa được, con xe tiền tỉ bị cọ nát sườn và mất quyền riêng tư vĩnh viễn, nhà biến thành ngã tư cho cả xóm đi lại.
- **3 nấc leo thang chủ động**: (1) Khóa xích, khóa số -> tự mở, tự về 0000; (2) Lát lại gạch, thả chó dữ -> chó nằm im vẫy đuôi đón người vô hình, gạch mòn sâu, cả xóm đi qua cảm ơn; (3) Nước liều: chẹn ô tô ngang sân hàn chết then sắt cố thủ -> sườn xe bị quang gánh vô hình cọ trơ khung thép.
- **Cú lật do nhân vật tự chọn và trả giá**: Ông Phát tự tay gọi thợ đập tường lấn, cắt dỡ cổng lùi vào đúng 1,5 m, chấp nhận mất toi tiền xây và tiền sơn xe. Thổ Công không đập cổng, chỉ giữ đúng luật ngõ.
- **Khoảnh khắc rợn duy nhất**: Nửa đêm cổng tự mở, sân tối om không người nhưng rào rào tiếng bước chân, guốc mộc, bánh xe cút kít rầm rập đi qua; sáng ra sân gạch mới lát mòn vẹt thành một lối đi nhẵn thín như 30 năm qua lại.
- **Cold open giấu đáp án**: Chỉ có tiếng then sắt, lời thách thức của Phát và câu hỏi treo của Thổ Công.
- **Kết chuẩn bible**: Giữ nguyên trào phúng, Phát không thức tỉnh sến sẩm mà chỉ sợ hỏng xe, trở thành người duy nhất trong xóm đo ngõ chuẩn đến từng centimet gạch.

---

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Liệu ông Phát có bảo vệ được mảnh đất lấn chiếm trước khi hết kỳ nghỉ lễ, hay sẽ biến chính ngôi nhà mình thành đường đi chung của thiên hạ?
- **Đồng hồ + cái giá**: Hạn chót trước trưa mùng 2 tháng 9 (tiệc khao xe với họ hàng). Cái giá: Chiếc ô tô tiền tỉ bị cọ nát và mất quyền riêng tư vĩnh viễn, nhà biến thành ngã tư cho âm dương đi lại.
- **3 nấc leo thang**:
  1. Nấc 1: Khóa xích ba vòng, khóa đồng -> Nửa đêm khóa tự nảy cạch, mở toang, gạch hoa mới lát mòn vẹt thành một lối đi thẳng tắp.
  2. Nấc 2: Thay khóa số, lát lại gạch, thả chó béc-giê -> Khóa tự về 0000, chó nằm im vẫy đuôi đón bước chân vô hình, ban ngày cả xóm vô tư đi tắt qua sân.
  3. Nấc 3 (Nước liều / Điểm thấp nhất): Đánh ô tô chẹn ngang sân, hàn chết then sắt -> Đêm còi xe rú, đèn pha tự rọi sân trống, tiếng quang gánh vô hình ken két cọ sườn xe tróc sạch sơn.
- **Điểm thấp nhất**: 2 giờ sáng đêm thứ ba, Phát ngồi cố thủ trong xe rình bắt trộm, đèn pha tự bật sáng rực rọi vào sân vắng nhưng tiếng gồng gánh chen chúc ken két cọ sát sườn xe mình.
- **Cú lật (ai chọn gì, trả giá gì)**: Ông Phát chọn tự gọi thợ đập bỏ tường lấn, dỡ cổng lùi vào đúng 1,5 m trả lại ngõ; trả giá bằng toàn bộ tiền xây cổng và tiền sơn lại ô tô. Thổ Công giữ đúng luật: "Đã lấn ngõ thì thành ngõ."
- **Khoảnh khắc rợn**: Nửa đêm cổng tự mở, tiếng guốc mộc, dép lê, bánh xe cút kít rầm rập đi qua sân tối om; sáng ra sân gạch mới lát mòn vẹt thành lối đi nhẵn thín như 30 năm qua lại.
- **Câu kết**: Muốn có sân riêng thì mua đất, lấn ngõ chung thì được cái sân cho cả thiên hạ đi nhờ.

---

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| PHAT | Ông Phát (hàng xóm lấn ngõ) | N04 | Adam bựa | `atempo=1.03` |
| CONG | Ông Thổ Công ngõ | N06, N07 | Thiền Tâm Đức | `asetrate=48000*0.92,aresample=48000,aecho=0.8:0.5:60:0.25` |
| CU | Bà Tư (cụ bà xe lăn) | N05 | Ngọc Huyền | `asetrate=48000*0.94,aresample=48000` |

```json voices
{
  "MN": {
    "preset": "Thiện Minh",
    "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"
  },
  "PHAT": {
    "preset": "Adam bựa",
    "fx": "atempo=1.03"
  },
  "CONG": {
    "preset": "Thiền Tâm Đức",
    "fx": "asetrate=48000*0.92,aresample=48000,aecho=0.8:0.5:60:0.25"
  },
  "CU": {
    "preset": "Ngọc Huyền",
    "fx": "asetrate=48000*0.94,aresample=48000"
  }
}
```

---

## LONG (574 chữ, dựng ~180 s)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | N01 | *(không lời, 2.0 s)* | "NGÕ ĐÊM" · im |
| 0:02 | N01 | **PHAT**: Khóa ba lớp, thách cả họ nhà trộm. | xích sắt · cạch |
| 0:05 | N02 | **CONG**: Ngõ ba đời. Ai cho mày khóa? | "AI CHO MÀY KHÓA?" · moc |
| 0:08 | S01 → S26 | **MN**: Lại mò vào à? Nghỉ lễ người ta về quê, còn ông hàng xóm này ở lại cướp đất ngõ. | "LẤN NGÕ" · braam |
| 0:14 | S26 | **MN**: Lần đầu tiên tao thấy có người biến sân nhà thành cái bùng binh cho thiên hạ. |  |
| 0:19 | N03 | **MN**: Nghỉ lễ, ông Phát xây lại cổng. Lấn ra ngõ chung mét rưỡi làm sân đỗ ô tô. | "LẤN 1,5 MÉT" · maytron · bay |
| 0:25 | N04 | **PHAT**: Sổ đỏ tôi ghi đến đây. Ai thắc mắc thì đi mà kiện! | "SỔ ĐỎ TÔI GHI ĐẾN ĐÂY" |
| 0:30 | N05 | **MN**: Ngõ tóp lại vừa khít bánh xe. Bà Tư ngồi xe lăn kẹt cứng ngay gờ gạch. | xelan · ket |
| 0:35 | N05 | **CU**: Ngõ ba đời đi chung. Giờ ra chợ cũng phải nhờ bế. |  |
| 0:39 | N04 | **PHAT**: Đất tôi tôi xây. Không qua được thì đi đường vòng! |  |
| 0:43 | N06 | **MN**: Sổ đỏ không ghi thế, nhưng ông nói to nhất. Có điều, ngõ này có Thổ Công. | "THỔ CÔNG NGÕ" · guocmoc |
| 0:49 | N07 | **CONG**: Đất ba đời, một tấc cũng là ngõ. Hạn ba ngày nghỉ lễ. Không trả, cả nhà mày thành ngõ. | "HẠN: 3 NGÀY NGHỈ LỄ" · tick |
| 0:56 | S26 | **MN**: Ba ngày. Trưa mùng hai, ông mở tiệc khao xe. Nếu cổng không khóa, con xe tiền tỉ coi như đỗ giữa chợ. | "TRƯA MÙNG 2/9" · bassdown |
| 1:04 | N01 | **MN**: Đêm đầu tiên, ông Phát khóa xích ba vòng, bấm thêm ổ khóa đồng to tướng. | khoa · xich |
| 1:09 | N02 | **MN**: Nửa đêm. Ổ khóa nảy cạch. Cổng sắt tự trượt mở toang. | tach · congmo · nhactat |
| 1:13 | N08 | *(không lời, 2.5 s)* | nhactat · guoc · dep · cutkit |
| 1:16 | N08 | **MN**: Sân tối om không người. Nhưng rào rào tiếng bước chân. Tiếng guốc mộc, dép lê, bánh xe cút kít rầm rập đi qua. | "TIẾNG BƯỚC CHÂN KHÔNG NGƯỜI" |
| 1:24 | N09 | **MN**: Sáng ra, ông Phát chết lặng. Sân gạch hoa mới lát mòn vẹt thành lối đi thẳng tắp. | "MÒN VẸT SAU 1 ĐÊM" |
| 1:30 | N09b | **MN**: Mép gạch lõm sâu, nhẵn thín như ba mươi năm người qua. Mới chỉ một đêm. |  |
| 1:36 | N04 | **PHAT**: Tao thay khóa số, lát lại gạch, thả con chó dữ nhất xóm! | "NẤC 2" · chosua |
| 1:41 | N04 → N10 | **MN**: Đêm thứ hai, khóa số tự về bốn số không. Con chó béc-giê nằm im vẫy đuôi cho người vô hình đi qua. | "KHÓA VỀ 0000" · nhactat |
| 1:48 | N10 | **MN**: Sáng ra, cổng mở toang, cả xóm vô tư đi tắt qua sân. |  |
| 1:53 | N05 | **CU**: Cảm ơn chú Phát nhé. Đi qua sân vừa gần vừa mát. |  |
| 1:57 | N04 | **PHAT**: Sân nhà tôi! Chúng mày biến ra ngoài ngõ ngay! |  |
| 2:01 | N04 | **MN**: Bị biến thành trò cười, tối thứ ba, ông chơi nước liều cuối cùng. | "NƯỚC LIỀU" · braam |
| 2:06 | N04 | **PHAT**: Tao chẹn ô tô ngang sân, hàn chết then sắt. Thách đứa nào qua được! | hancua · xechang |
| 2:11 | N08 | **MN**: Hai giờ sáng, ông ngồi cố thủ trong xe. Bỗng còi xe rú inh ỏi, đèn pha tự bật sáng rực. | "2:00 SÁNG" · coixe · phasang |
| 2:17 | N08 | **MN**: Sân vắng tanh, nhưng sườn xe kêu ken két. Như hàng đoàn quang gánh vô hình đang lách qua khe hẹp. | kenket · quangganh |
| 2:24 | N07 | **CONG**: Đã lấn ngõ thì thành ngõ. Xe đỗ giữa ngõ là xe chắn đường. | "XE ĐỖ GIỮA NGÕ = CHẮN ĐƯỜNG" |
| 2:29 | N10 | **MN**: Sáng ra, sườn xe tróc sạch sơn, cọ trơ khung thép. Trưa nay tiệc khao xe, mà cổng vẫn mở toang. | "TRÓC SƠN TRƠ KHUNG" · xotxa |
| 2:37 | N04 | **MN**: Ông hiểu ra: không trả ngõ, thì cái nhà này vĩnh viễn là lối đi chung cho cả xóm. |  |
| 2:43 | N03 | **MN**: Không đợi đến trưa, ông vội gọi thợ đập tường, dỡ cổng lùi vào đúng mét rưỡi. Mất toi tiền xây với sơn xe. | "ĐẬP TƯỜNG · TRẢ NGÕ" · buadong |
| 2:50 | N07 | **CONG**: Ngõ đủ rồi. |  |
| 2:52 | N01 | **MN**: Tiếng gậy vừa dứt, ổ khóa đóng cạch nhẹ tênh. Sân gạch hết mòn. | cach · nhatat |
| 2:58 | S33 → S34 | **MN**: Muốn có sân riêng thì mua đất. Lấn ngõ chung thì được cái sân cho cả thiên hạ đi nhờ. | "LẤN NGÕ THÌ THÀNH NGÕ" |
| 3:03 | S34 | **MN**: Giờ ông Phát là người duy nhất trong xóm đo ngõ chuẩn đến từng centimet gạch. |  |
| 3:08 | B02 | **MN**: Tập sau: một ông bán vé "view pháo hoa đẹp nhất" trên sân thượng nhà người khác. Sân thượng ấy có chủ cũ… rất thích yên tĩnh. | "TẬP SAU" · whoosh |
| 3:15 | S06 | **MN**: Bấm đăng ký đi. Không thì mai ngõ nhà mày tự dưng mọc thêm cái bùng binh đấy. | "ĐĂNG KÝ" · coc |

---

## SHORTS

### SH1 (TRỌN)
- **PHAT**: Sổ đỏ tôi ghi đến đây. Ai thắc mắc thì đi mà kiện! (N04)
- **MN**: Ông này xây cổng lấn ngõ một mét rưỡi làm sân đỗ ô tô. Ngõ tóp lại vừa khít bánh xe. (N03)
- **CU**: Ngõ ba đời đi chung. Giờ ra chợ cũng phải nhờ bế. (N05)
- **CONG**: Đất ba đời, một tấc cũng là ngõ. Hạn ba ngày nghỉ lễ. Không trả, cả nhà mày thành ngõ. (N07) · pop "THỔ CÔNG NGÕ"
- *(lặng 0.8 s)*
- **MN**: Hết ba ngày, nhà thành cái ngã tư thật. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRỌN)
- **PHAT**: Khóa ba lớp, thách cả họ nhà trộm. (N01)
- **MN**: Đêm đầu tiên có cổng mới. Nửa đêm, ổ khóa nảy cạch. Cổng sắt tự trượt mở toang. (N02)
- **MN**: Sân tối om không người, nhưng rào rào tiếng bước chân, guốc mộc, bánh xe cút kít rầm rập đi qua. (N08)
- **MN**: Sáng ra, sân gạch hoa mới lát mòn vẹt thành lối đi thẳng tắp, mép lõm sâu như ba mươi năm qua lại! (N09b) · pop "MÒN SAU 1 ĐÊM"
- *(lặng 0.8 s)*
- **MN**: Đêm thứ hai còn kinh hơn. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 (TRỌN)
- **PHAT**: Tao thay khóa số, lát lại gạch, thả con chó dữ nhất xóm! (N04)
- **MN**: Đêm thứ hai, khóa số tự về bốn số không. Chó béc-giê nằm im vẫy đuôi cho người vô hình đi qua. (N08)
- **MN**: Sáng ra, cổng mở toang, cả xóm vô tư đi tắt qua sân. (N10)
- **CU**: Cảm ơn chú Phát nhé. Đi qua sân vừa gần vừa mát. (N05)
- **PHAT**: Sân nhà tôi! Chúng mày biến ra ngoài ngõ ngay! (N04) · pop "SÂN BIẾN THÀNH NGÕ"
- *(lặng 0.8 s)*
- **MN**: Chủ nhà đứng chửi bất lực. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 (TRỌN)
- **PHAT**: Tao chẹn ô tô ngang sân, hàn chết then sắt. Thách đứa nào qua được! (N04)
- **MN**: Hai giờ sáng, còi xe rú inh ỏi, đèn pha tự bật sáng rực. Sân vắng tanh nhưng sườn xe kêu ken két. (N08)
- **CONG**: Đã lấn ngõ thì thành ngõ. Xe đỗ giữa ngõ là xe chắn đường. (N07) · pop "THỔ CÔNG NGÕ"
- **MN**: Sáng ra, hai bên sườn con xe mới toanh tróc sạch sơn, cọ trơ khung thép! (N10) · pop "CỌ TRƠ KHUNG"
- *(lặng 0.8 s)*
- **MN**: Muốn giữ xe thì phải đập cổng. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN)
- **MN**: Lần đầu tiên tao thấy có người biến sân nhà thành cái bùng binh cho thiên hạ. (S26)
- **MN**: Lấn ngõ mét rưỡi, bị bước chân vô hình mài mòn gạch, cọ tróc sơn ô tô. (N09)
- **MN**: Không đợi đến trưa mở tiệc, ông vội gọi thợ đập tường, dỡ cổng lùi vào đúng mét rưỡi trả lại ngõ. (N03) · pop "ĐẬP CỔNG TRẢ ĐẤT"
- **CONG**: Ngõ đủ rồi. (N07)
- **MN**: Tiếng gậy vừa dứt, ổ khóa đóng cạch nhẹ tênh. Sân gạch hết mòn. (N01)
- *(lặng 0.8 s)*
- **MN**: Giờ ông ấy đo ngõ chuẩn đến từng centimet. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 (TRAILER)
- **MN**: Sân gạch hoa mới lát phẳng lì hôm qua. (N09)
- **MN**: Nửa đêm, ổ khóa nảy cạch. Cổng sắt tự trượt mở toang. (N02)
- **MN**: Trong sân rầm rập tiếng guốc mộc, dép lê, bánh xe cút kít xuyên qua khoảng tối không một bóng người. (N08)
- **MN**: Sáng hôm sau mở cửa, gạch lõm sâu nhẵn thín như ba mươi năm người qua lại. Ai đã đi qua cái sân đó? (N09b) · pop "AI ĐÃ ĐI QUA?"
- **MN**: Bản đầy đủ ở link dưới. (S26)

### SH7 (TRAILER)
- **MN**: Còn đúng một đêm trước ngày mở tiệc khao xe mới. (S26)
- **PHAT**: Tao chẹn ô tô ngang sân, hàn chết then sắt. Thách đứa nào qua được! (N04)
- **MN**: Hai giờ sáng, đèn pha tự bật rọi vào khoảng sân trống không, rồi hai bên sườn xe bắt đầu kêu ken két rợn người... (N08) · pop "2:00 SÁNG"
- **CONG**: Đã lấn ngõ thì thành ngõ. (N07) · pop "THỔ CÔNG NGÕ"
- **MN**: Cánh cổng sắt ấy rốt cuộc thuộc về ai? Bản đầy đủ, link dưới. (S34)

---

## Hình
Tận dụng: B02 + ep01 S01/S06/S26/S33/S34 (Ma Nó).

### Ảnh vẽ mới (11 ảnh 16:9, từ v2)
| Mã | Cảnh | Tình trạng v3 |
|---|---|---|
| N01 | Ngõ nhỏ đêm, cổng sắt mới to chiếm nửa ngõ, ổ khóa to, đèn ngõ vàng | [DÙNG] |
| N02 | Cận ổ khóa cổng tự bật, cổng hé | [DÙNG] |
| N03 | Ngõ ban ngày: thợ xây cổng mới lấn ra ngõ; bản cuối thợ tháo cổng đập phần lấn | [DÙNG] |
| N04 | Ông Phát cận: áo ba lỗ, quần âu, chùm chìa khóa ô tô; bản đứng giữa sân giữa người qua lại | [DÙNG] |
| N05 | Bà Tư cận ngồi xe lăn đầu ngõ, kẹt chỗ hẹp; bản đẩy xe qua sân cười | [DÙNG] |
| N06 | Tranh màu ngả nâu: đầu ngõ làng xưa, ông cụ thấp đậm áo nâu chống gậy, người qua lại | [DÙNG] |
| N07 | Ông Thổ Công ngõ mờ: thấp đậm, áo nâu, gậy trúc, khăn, đứng đầu ngõ | [DÙNG] |
| N08 | Sân nhà ông Phát đêm, tối, cổng mở, không người (âm thanh đông người) | [DÙNG] |
| N09 | Sáng: sân gạch hoa mới lát mòn thành một lối đi thẳng tắp | [DÙNG] |
| N09b | Cực cận vệt mòn trên gạch hoa mới: hoa văn bị mài mất thành dải lõm, mép sắc (thumbnail) | [DÙNG] |
| N10 | Cổng mở toang, bà Tư đẩy xe lăn qua sân, người bán rau đẩy xe qua, ô tô kẹp giữa | [DÙNG] |

---

## Lịch
| Định dạng | Mã | Tên | Thời gian đăng (+07) |
|---|---|---|---|
| LONG | P80 | Thổ Công ngõ "Lấn ngõ thì thành ngõ" | Thứ Năm 26/08/2027 18:00 |
| SHORT | SH1 | Sổ đỏ tôi ghi đến đây (TRỌN) | Thứ Năm 26/08/2027 19:00 |
| SHORT | SH2 | Ba lớp khóa nảy cạch (TRỌN) | Thứ Sáu 27/08/2027 11:30 |
| SHORT | SH3 | Chó béc-giê tiếp khách vô hình (TRỌN) | Thứ Sáu 27/08/2027 19:00 |
| SHORT | SH4 | Xe đỗ giữa ngõ là xe chắn đường (TRỌN) | Thứ Bảy 28/08/2027 11:30 |
| SHORT | SH5 | Lấn ngõ thì thành ngõ (TRỌN) | Thứ Bảy 28/08/2027 19:00 |
| SHORT | SH6 | Vệt mòn sau một đêm (TRAILER) | Chủ Nhật 29/08/2027 11:30 |
| SHORT | SH7 | Nước cờ lúc hai giờ sáng (TRAILER) | Chủ Nhật 29/08/2027 19:00 |
