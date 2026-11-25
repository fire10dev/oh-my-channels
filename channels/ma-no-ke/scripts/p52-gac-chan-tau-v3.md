# Dự án 52 — Ma gác chắn tàu "Sổ trực ban" (v3, 2026-11-24)

v3 nâng cấp kịch tính theo chuẩn P04 v4:
- **Đồng hồ + cái giá**: Hạn chót là **chuyến tàu Thống Nhất đêm 23:30** — chuyến cuối cùng khép lại trang sổ trực ban cuối; cái giá là 30 năm danh dự "không ai trong vạch" của bác Thìn, nếu trượt để xảy ra tai nạn thì linh hồn vĩnh viễn mắc kẹt ở ca trực hỏng.
- **Cold open không lộ đáp án**: Đêm thanh vắng, chuông chắn leng keng và bóng thanh chắn ma hạ xuống trên đường nhựa; chỉ treo cảm giác rợn và câu hỏi về người đang canh gác.
- **3 nấc leo thang chủ động**: Gió tàu ma đẩy ghế lùi sau vạch (Phong tưởng vong tài lộc, kê bàn tràn ra tim ray bán vé VIP) → Hạ bóng thanh chắn chặn đường (Phong và khách livestream sống ảo dưới bóng ma) → Nước liều: Tàu lao tới cách 50 mét, bác Thìn dốc cạn tàn linh thổi còi sắt và giật ngã người lùi khỏi mũi tàu.
- **Điểm thấp nhất**: 23:28, còn 2 phút tàu qua, đám đông 50 người vẫn đứng nghẹt trên ray livestream, còi tàu rít xé tai, bác Thìn bất lực trước lòng tham mù quáng.
- **Cú lật do nhân vật chọn và trả giá**: Bác Thìn chọn hiện hữu bằng vật chứng trần gian (lá cờ đỏ trong bức ảnh và tiếng còi sắt), chấp nhận khép lại trang sổ; Phong run sợ trước cuốn sổ gầm quầy tự lật trang cuối, chịu trả giá bằng việc lùi quán sau vạch an toàn.
- **Kết bible trào phúng**: Bản tính con buôn của Phong không đổi, mở menu "phụ thu 500k tiền vía nếu thò chân vào vạch"; Ma Nó mỉa mai khách sống ảo và nhắc bác Thìn cứu một lần thôi vì "hết sổ rồi".

---

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Liệu bác Thìn có giữ trọn vẹn 30 năm danh dự "không ai trong vạch" trước một gã chủ quán sẵn sàng bán mạng khách để câu view triệu like?
- **Đồng hồ / cái giá**: Chuyến tàu Thống Nhất lúc 23:30 đêm nay (trang sổ cuối cùng). Cái giá: 30 năm với mười nghìn ca trực tan tành, linh hồn người gác chắn mắc kẹt vĩnh viễn ở ca trực tai nạn.
- **3 nấc leo thang**:
  1. *Nấc 1*: Tàu ma lùa gió đẩy ghế lùi sau vạch vàng, sổ ghi nhắc nhở → Thất bại: Phong tưởng "vong phát lộc", kê luôn bàn ra tim ray bán vé VIP x2.
  2. *Nấc 2*: Bác Thìn kéo chuông leng keng, hạ bóng thanh chắn ma ngang đường dưới đèn cao áp → Thất bại: Phong biến thành góc sống ảo, lôi khách đứng livestream dưới bóng ma.
  3. *Nấc 3 (Nước liều)*: 23:28, tàu thật lao đến, Phong ép khách nhoài người chụp ảnh chốt đơn → Bác Thìn thổi còi sắt chói óc, giật tung cô khách và hất văng Phong lùi sau vạch.
- **Điểm thấp nhất**: 23:28, còi tàu hú đinh tai cách 50m, ánh đèn pha quét trắng ray, đám đông vẫn chen chúc giơ điện thoại, bác Thìn đứng giữa lằn ranh bất lực.
- **Cú lật (ai chọn gì, trả giá gì)**: Bác Thìn chọn dốc cạn linh lực hiện hình chiếc cờ đỏ chắn trước mũi tàu trong ảnh chụp; Phong nhìn thấy ảnh và cuốn sổ tự viết mực tím dưới gầm quầy, trả giá bằng việc dẹp bỏ dãy bàn lấn chiếm, lùi quán sau vạch vàng.
- **Khoảnh khắc rợn**: 23:00 đêm, chuông chắn leng keng réo rắt dù trạm dỡ mười năm; dưới đèn đường, bóng một thanh chắn từ từ hạ xuống nằm ngang mặt nhựa chặn lối, không có vật thật.
- **Câu kết**: Phong thu tiền phạt vía thò chân vào vạch; Ma Nó dặn đứng sau vạch mà bấm đăng ký vì bác Thìn hết sổ rồi.

---

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (Host) | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| THIN | Bác Thìn (gác chắn 30 năm, nghiêm nghị, trách nhiệm) | P52_04, P52_03 | Thiền Tâm Đức | `atempo=0.90,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.2` |
| PHONG | Phong (chủ quán cà phê đường tàu, láu cá, mê trend) | P52_06 | Adam bựa | `atempo=1.05` |
| KHACH | Cô khách du lịch (thích sống ảo, liều lĩnh) | P52_08, P52_09 | Ngọc Huyền | `atempo=1.02,asetrate=48000*1.05,aresample=48000` |

```json voices
{
  "MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},
  "THIN": {"preset": "Thiền Tâm Đức", "fx": "atempo=0.90,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.2"},
  "PHONG": {"preset": "Adam bựa", "fx": "atempo=1.05"},
  "KHACH": {"preset": "Ngọc Huyền", "fx": "atempo=1.02,asetrate=48000*1.05,aresample=48000"}
}
```

---

## LONG (582 chữ thoại, dựng ≈ 3:05)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | P52_01 | *(không lời, 2.5 s)* | "PHỐ ĐƯỜNG TÀU · NỬA ĐÊM" · gió rít nhẹ |
| 0:02 | P52_02 | *(không lời, 1.5 s)* | chuông leng keng xa · nhạc tắt |
| 0:04 | P52_02 | **THIN**: Năm chín mốt. Không ai trong vạch. | "NĂM 1991" · "KHÔNG AI TRONG VẠCH" |
| 0:08 | S01 | **MN**: Lại mò vào à? Chụp ảnh ở cà phê đường tàu bao giờ chưa? Ngồi cách ray mấy phân? | coc · braam |
| 0:14 | S26 | **MN**: Hôm nay tao đọc một cuốn sổ trực ban. Ba mươi năm, mười nghìn ca trực, chưa ai dính vạch. | "30 NĂM · 10.000 CA TRỰC" |
| 0:20 | S34 | **MN**: Cho đến khi cái quán cà phê này mở ra. | bassdown |
| 0:23 | P52_04 | **THIN**: Tao là Thìn, gác chắn ba mươi năm. Cờ đỏ, còi sắt. Nghề tao chỉ một luật: tàu đến, kéo chắn, không ai trong vạch. | "BÁC THÌN · GÁC CHẮN" · "LUẬT: KHÔNG AI TRONG VẠCH" |
| 0:30 | P52_03 | **THIN**: Hai nghìn lẻ ba. Ông say rượu ngủ trên ray. Lôi vào kịp. Không ai trong vạch. | lật sổ |
| 0:37 | P52_03 | **THIN**: Sổ trực ban còn đúng một trang. Tàu Thống Nhất đêm nay là chuyến cuối. Ba mươi năm danh dự, tao không để ai chạm ray. | "HẠN: 23:30 ĐÊM NAY" · "TRANG CUỐI" · tick |
| 0:45 | P52_05 | **MN**: Trạm gác dỡ mười năm. Phong đến thuê, mở quán cà phê sống ảo. | "CÀ PHÊ SỐNG ẢO" |
| 0:49 | P52_06 | **PHONG**: Ngồi càng gần ray, ảnh càng cháy! Tàu sượt mũi mới triệu view! Chụp lúc tàu qua phụ thu năm chục! | "PHỤ THU: 50K" · pops |
| 0:56 | S26 | **MN**: Ba mươi năm không ai trong vạch. Giờ trong vạch có mười cái bàn nhựa và năm mươi cái điện thoại. | "TRONG VẠCH: 50 ĐIỆN THOẠI" |
| 1:03 | P52_07 | **MN**: Đêm thứ nhất. Đoàn tàu không số chạy qua rất chậm, lùa gió đẩy sạch ghế lùi sau vạch. | bánh sắt xình xịch chậm · gio |
| 1:10 | P52_03 | **THIN**: Đêm qua. Quán kê ghế trong vạch. Đã dọn. Không ai trong vạch. | ngòi bút sột soạt |
| 1:14 | P52_06 | **PHONG**: Quán có vong hút tài lộc rồi! Kê bàn tràn ra giữa ray luôn, bán vé VIP ngồi tim đường! | "VÉ VIP: NGỒI TIM RAY" · ting |
| 1:21 | P52_01 | **MN**: Mười một giờ đêm hôm sau. Quán đông nghẹt. Chuông chắn tàu bỗng leng keng réo rắt. | chuông chắn leng keng · nhạc tắt |
| 1:27 | P52_02 | **MN**: Dưới ánh đèn đường, cái bóng của thanh chắn từ từ hạ xuống, nằm ngang mặt nhựa chặn lối. Không có thanh chắn thật. Chỉ có cái bóng. | "BÓNG THANH CHẮN MA" · im 2 s |
| 1:37 | P52_06 | **PHONG**: Ơ hiệu ứng đỉnh thế! Lại đây livestream dưới bóng ma nào anh em ơi! | hop |
| 1:42 | S26 | **MN**: Người sống bây giờ, ma dọa không sợ, chỉ sợ mất tương tác. | bassdown |
| 1:47 | P52_05 | **MN**: Mười một giờ hai mươi tám. Còn hai phút tàu Thống Nhất lao qua. Đám đông vẫn đứng kín trên ray giơ máy. | "23:28" · "CÒN 2 PHÚT" · còi tàu xa |
| 1:54 | P52_06 | **PHONG**: Em gái nhoài người ra tí nữa! Tàu đến sau lưng rồi, giữ nguyên tư thế chốt đơn! | "GIỮ NGUYÊN TƯ THẾ!" |
| 2:00 | P52_05 | **KHACH**: Gần quá anh ơi! Gió hút em! | coi tau gan |
| 2:03 | P52_04 | **THIN**: Ba mươi năm chưa từng hỏng ca trực. Lần này tao phải liều. | "NƯỚC LIỀU" · tick |
| 2:08 | P52_05 | **MN**: Đèn pha rọi trắng xóa. Còi tàu thét xé tai cách năm mươi mét. Bác Thìn không đủ vía kéo cả đám đông. | pha sáng · coi tau thet vang |
| 2:15 | P52_08 | **MN**: Tiếng còi sắt toét lên chói óc! Bàn tay vô hình giật ngược cổ áo cô khách ngã văng ra sau! | còi tu huýt "TOÉT!" · giat nga |
| 2:22 | P52_08 | **PHONG**: Ái! Cái gì gõ vào đầu tôi thế này! | keeng |
| 2:25 | P52_09 | **KHACH**: Tay ai kéo em thế? Ơ nhìn ảnh này, lá cờ đỏ ở đâu chắn trước mặt em này! | "LÁ CỜ ĐỎ CŨ" |
| 2:31 | P52_09 | **MN**: Bức ảnh chụp đúng tích tắc tàu vụt qua. Mép khung là lá cờ đỏ cũ và bóng người đội mũ kê-pi chắn ngang ray. | "BÓNG NGƯỜI GÁC CHẮN" · tau luot ram ram |
| 2:39 | P52_06 | **PHONG**: Dưới gầm quầy… cuốn sổ tự mở trang cuối… chữ còn ướt mực… | nhac tat · lat so |
| 2:44 | P52_03 | **THIN**: Mười một giờ ba mươi. Đã kéo người. Không ai trong vạch. Ca trực tốt. | "CA TRỰC TỐT" · "HẾT SỔ" |
| 2:49 | P52_05 | **MN**: Sáng hôm sau, Phong lùi quán sau vạch vàng. Trên tường treo trang trọng lá cờ đỏ và cái còi sắt. | "LÙI SAU VẠCH" · sang |
| 2:55 | P52_05 | **PHONG**: Menu mới đây! Cà phê ngoài vạch ba chục, thò chân vào vạch phụ thu năm trăm tiền vía! | "PHỤ THU: 500K TIỀN VÍA" · ting |
| 3:01 | S33 | **MN**: Đi cà phê đường tàu thì mở mắt nhìn vạch. Bác Thìn cứu một lần thôi, ca trực của bác ấy… hết sổ rồi. | rit dieu cay |
| 3:08 | B07 | **MN**: Tập sau: chủ trọ thu điện sáu nghìn một số. Căn nhà trọ ấy có bà chủ cũ. Bà ấy… đọc công tơ rất kỹ. | "TẬP SAU" · whoosh |
| 3:15 | S06 | **MN**: Bấm đăng ký đi. Đứng sau vạch mà bấm. | "ĐĂNG KÝ" · coc |

---

## SHORTS (5 TRỌN + 2 TRAILER)

### SH1 (TRỌN) — 30 năm không ai trong vạch
- **MN**: Ba mươi năm gác chắn tàu, bác Thìn chuyên trị dân liều mạng. (S01) · pop "BÁC THÌN · GÁC CHẮN"
- **THIN**: Nghề tao chỉ một luật: tàu đến, kéo chắn, không ai trong vạch. (P52_04) · pop "LUẬT: KHÔNG AI TRONG VẠCH"
- **MN**: Mười nghìn ca trực, cuốn sổ chỉ ghi một câu lặp lại. (P52_03) · pop "10.000 CA TRỰC"
- **THIN**: Hai nghìn lẻ ba. Ông say rượu ngủ trên ray. Lôi vào kịp. Không ai trong vạch. (P52_03)
- **MN**: Giờ trạm dỡ, quán cà phê kê ghế tràn cả vào ray. (P52_05) · pop "TRONG VẠCH: CẢ QUÁN"
- **MN**: Người sống cản không nổi, để xem ma gác chắn trị bọn sống ảo kiểu gì. (S26)
- *(lặng 0.8 s)*
- **MN**: Ai kéo ghế lùi lại? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH2 (TRỌN) — Vong hút tài lộc
- **PHONG**: Ngồi càng gần ray, ảnh càng cháy! Tàu sượt mũi mới triệu view! Chụp lúc tàu qua phụ thu năm chục! (P52_06) · pop "PHỤ THU: 50K"
- **MN**: Ba mươi năm không ai trong vạch. Giờ trong vạch có cả quán. (P52_05)
- **MN**: Đêm thứ nhất, tàu không số lùa gió đẩy sạch ghế lùi sau vạch. (P52_07) · pop "GHẾ TỰ LÙI"
- **THIN**: Đêm qua. Quán kê ghế trong vạch. Đã dọn. Không ai trong vạch. (P52_03)
- **PHONG**: Quán có vong hút tài lộc rồi! Kê bàn tràn ra tim ray bán vé VIP! (P52_06) · pop "VÉ VIP: TIM RAY"
- **MN**: Ma dọn ghế cứu mạng, người tưởng vong mách nước làm giàu. (S26)
- *(lặng 0.8 s)*
- **MN**: Bản lĩnh con buôn chạm đỉnh. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH3 (TRAILER) — Cái bóng thanh chắn
- *(không lời, 1.5 s)* (P52_01) · pop "11:00 ĐÊM" · chuông leng keng
- **MN**: Trạm chắn tàu ở đây dỡ mười năm rồi. (P52_01)
- **MN**: Mười một giờ đêm, bỗng chuông chắn tàu leng keng réo rắt. (P52_02) · chuông leng keng
- **MN**: Dưới ánh đèn đường, cái bóng của thanh chắn từ từ hạ xuống, nằm ngang mặt nhựa chặn lối. (P52_02) · pop "BÓNG THANH CHẮN MA"
- **MN**: Không có thanh chắn thật. Chỉ có cái bóng. (P52_02)
- **PHONG**: Ơ hiệu ứng đỉnh thế! Lại đây livestream dưới bóng ma nào anh em ơi! (P52_06)
- **MN**: Đoàn tàu Thống Nhất đang lao đến cách năm mươi mét. Chuyện gì sẽ xảy ra? Bản đầy đủ, link dưới. (S26)

### SH4 (TRỌN) — Chụp ảnh sượt mũi tàu
- **PHONG**: Em gái nhoài người ra tí nữa! Tàu đến sau lưng rồi, giữ nguyên tư thế chốt đơn! (P52_06) · pop "TÀU ĐANG TỚI" · coi tau xa
- **KHACH**: Gần quá anh ơi! Gió hút em! (P52_05)
- **MN**: Đèn pha rọi trắng xóa. Còi tàu thét xé tai cách năm mươi mét. (P52_05) · còi tàu inh tai
- **MN**: Tiếng còi sắt toét lên chói óc! Bàn tay vô hình giật ngược cổ áo cô khách ngã văng ra sau! (P52_08) · pop "GIẬT NGƯỢC LẠI"
- **PHONG**: Ái! Cái gì gõ vào đầu tôi thế này! (P52_08)
- **MN**: Suýt nữa thì có ảnh để đời, theo đúng nghĩa đen. (S26)
- *(lặng 0.8 s)*
- **MN**: Ai đã kéo cô gái khỏi mũi tàu? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH5 (TRAILER) — Hạn chót 23:30
- **THIN**: Sổ trực ban còn đúng một trang. Tàu Thống Nhất đêm nay là chuyến cuối. Ba mươi năm danh dự, tao không để ai chạm ray. (P52_03) · pop "HẠN CHÓT: 23:30"
- **MN**: Mười một giờ hai mươi tám. Còn hai phút tàu Thống Nhất lao qua. (P52_05) · pop "CÒN 2 PHÚT"
- **MN**: Đám đông vẫn đứng nghẹt trên ray giơ máy quay. (P52_05)
- **THIN**: Ba mươi năm chưa từng hỏng ca trực. Lần này tao phải liều. (P52_04)
- **MN**: Còi tàu đã thét sát vách. Bác Thìn sẽ làm gì để cứu năm mươi con người đang mê view? Bản đầy đủ, link dưới. (S26)

### SH6 (TRỌN) — Lá cờ đỏ trong bức ảnh
- **KHACH**: Tay ai kéo em thế? Ơ nhìn ảnh này, lá cờ đỏ ở đâu chắn trước mặt em này! (P52_09) · pop "LÁ CỜ ĐỎ CŨ"
- **MN**: Bức ảnh chụp đúng tích tắc tàu vụt qua. Mép khung là lá cờ đỏ cũ và bóng người đội mũ kê-pi chắn ngang ray. (P52_09) · pop "BÓNG BÁC THÌN"
- **PHONG**: Dưới gầm quầy… cuốn sổ tự mở trang cuối… chữ còn ướt mực… (P52_06)
- **THIN**: Mười một giờ ba mươi. Đã kéo người. Không ai trong vạch. Ca trực tốt. (P52_03) · pop "CA TRỰC TỐT"
- **MN**: Chụp ảnh sống ảo săn triệu view, cuối cùng chụp được hẳn một vị ân nhân cõi âm. (S26)
- *(lặng 0.8 s)*
- **MN**: Người gác bằng cả mạng sống, kẻ mang mạng câu view. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH7 (TRỌN) — Menu mới
- **MN**: Sau đêm suýt chết, quán cà phê đường tàu đổi chủ hay đổi nết? (S01)
- **MN**: Phong lùi quán sau vạch vàng. Trên tường treo trang trọng lá cờ đỏ và cái còi sắt. (P52_05) · pop "TREO CỜ & CÒI"
- **THIN**: Quán lùi sau vạch. Không ai trong vạch. Ca trực tốt. (P52_03)
- **PHONG**: Menu mới đây! Cà phê ngoài vạch ba chục, thò chân vào vạch phụ thu năm trăm tiền vía! (P52_06) · pop "PHỤ THU: 500K TIỀN VÍA"
- **MN**: Sợ ma thì sợ thật, nhưng cơ hội móc túi khách thì không thể bỏ qua. (S26)
- *(lặng 0.8 s)*
- **MN**: Bác Thìn cứu một lần thôi, vì hết sổ rồi. Bản đầy đủ, link dưới. (S34)

---

## Hình
Tận dụng từ kho cũ: B02, B07 (teaser P53) + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Danh sách 9 ảnh vẽ mới (16:9) — Đều dùng trong v3:
- [x] **P52_01**: Phố hẹp có đường tàu chạy giữa, đêm, quán cà phê đóng, ghế nhựa xếp sát ray.
- [x] **P52_02**: Dưới đèn đường, mặt đường nhựa: cái bóng của thanh chắn tàu hạ ngang chặn lối, không có vật thật.
- [x] **P52_03**: Cận cuốn sổ trực ban bìa cứng cũ, trang giấy ố, nét chữ nghiêng; bản trang cuối mực tím tươi "Ca trực tốt".
- [x] **P52_04**: Ảnh màu cũ: trạm gác chắn nhỏ, bác Thìn đồng phục đường sắt cũ, mũ kê-pi, cờ đỏ, thanh chắn sơn sọc.
- [x] **P52_05**: Quán cà phê đường tàu ban ngày: ghế nhựa sát ray, khách giơ điện thoại; bản ghế lùi sau vạch vàng có cờ và còi trên tường.
- [x] **P52_06**: Phong cận cảnh: tạp dề, mũ len; bản cầm sổ run tay dưới gầm quầy.
- [x] **P52_07**: Đêm: đoàn tàu cũ màu xanh mờ không số hiệu chạy rất chậm qua giữa dãy ghế quán.
- [x] **P52_08**: Cô khách bị giật ngược ra sau như có tay kéo cổ áo, tàu thật lướt qua rầm rập (không va chạm).
- [x] **P52_09**: Cận màn hình điện thoại cô khách: ảnh chụp vội mép ray, mép khung có lá cờ đỏ cũ cán gỗ và bóng người mờ ảo.

---

## Lịch
- **LONG P52**: Thứ Năm 20/05 18:00 (+07).
- **SH1 (TRỌN)**: Thứ Năm 20/05 19:00 (+07).
- **SH2 (TRỌN)**: Thứ Sáu 21/05 11:30 (+07).
- **SH3 (TRAILER)**: Thứ Sáu 21/05 19:00 (+07).
- **SH4 (TRỌN)**: Thứ Bảy 22/05 11:30 (+07).
- **SH5 (TRAILER)**: Thứ Bảy 22/05 19:00 (+07).
- **SH6 (TRỌN)**: Chủ Nhật 23/05 11:30 (+07).
- **SH7 (TRỌN)**: Chủ Nhật 23/05 19:00 (+07).
- **Tập sau (P53 — Bà chủ trọ âm)**: Thứ Hai 24/05 18:00 (+07).
