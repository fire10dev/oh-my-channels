# Dự án 6 — Ma cây đa "View cây đa" (v3, 2026-11-23)

- Rút LONG còn khoảng 585 chữ thoại, với mốc thời gian tương ứng khoảng 3:05.
- Bổ sung PUNCH riêng cho 5 short TRỌN trước câu chỉ link.
- Nâng lời thoại cả 7 short vào khoảng 70–110 chữ; trailer vẫn cắt trước đáp án.
- Giữ nguyên cốt truyện, nhân vật, mã ảnh và lịch đã nêu.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Bà đa có thể khiến Long trả lại cái nhà đã bán mất mà không hại ai không?
- **Đồng hồ / cái giá:** Trước khi hồ sơ 48 lô được duyệt sáng hôm sau, Long phải bỏ lô góc mang tên bà; nếu trượt, bà mất cây nhà và Long mất căn biệt thự vì khu đất bị phủ cây đa.
- **Ba nấc leo thang:** Bà nhắc Long dừng chặt — Long cười nhạo; bà khoanh đỏ lô góc trên bản vẽ — Long xóa, in lại và vẫn cho chặt; bà chọn cành đa làm cọc ranh cho cả 48 lô — Long tự tay cắm cành xuống từng nền để tiết kiệm tiền.
- **Điểm thấp:** Cây đa bị chặt, cành đã thành cọc ở cả 48 lô; Long chuẩn bị nộp hồ sơ, còn bà tưởng mình đã mất nhà.
- **Cú lật:** Bà chọn cho cành mọc rễ, dù biết mình sẽ phải ở trong căn biệt thự của Long; bà trả giá bằng việc bị buộc vào lô góc, còn Long mất căn nhà riêng và cả dự án phân lô.
- **Khoảnh khắc rợn:** Nửa đêm, máy in tự khoanh đỏ lô góc và in dòng “LÔ 00 · CHỦ ĐẤT: BÀ · KHÔNG BÁN”.
- **Câu kết:** Bà chê cơm Long nấu, rồi chia lô nốt phòng khách.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| BD | Bà đa, thần cây đa; đanh đá như bà cụ chợ quê | A00, A03, A10 | Thiền Tâm Đức | `asetrate=48000*1.02,aresample=48000` |
| MN | Ma Nó | B02, S01, S26, S33, S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| LONG | Anh Long phân lô; kính râm, áo hoa, hai điện thoại | A01, A05, A06, A08, A10 | Adam bựa | `atempo=1.05` |
| CHU | Chú Tư, trưởng thôn; can ngăn Long | A07 | Minh Đức | `atempo=0.92` |

```json voices
{"BD":{"preset":"Thiền Tâm Đức","fx":"asetrate=48000*1.02,aresample=48000"},"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"LONG":{"preset":"Adam bựa","fx":"atempo=1.05"},"CHU":{"preset":"Minh Đức","fx":"atempo=0.92"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | A01 | *(không lời, 2 s)* | Máy in khổ lớn chạy · chữ “0:00” |
| 0:02 | A02 | *(không lời, 1 s)* | Vòng đỏ quanh lô góc · “LÔ 00 · CHỦ ĐẤT: BÀ · KHÔNG BÁN” · máy in ngừng |
| 0:03 | A01 | **LONG**: Máy in bạc tỷ mà kẹt màu đỏ à? Tao xóa cái cây rồi cơ mà! | |
| 0:07 | A03 | *(không lời, 1.5 s)* | Lá xào xạc, không gió |
| 0:09 | S01 → S26 | **MN**: Lại mò vào à? Khách hôm nay ba trăm tuổi, đanh đá nhất làng, vừa bị người ta bán mất cái nhà. | mõ CỘC |
| 0:15 | S26 | **MN**: Nhà bà là một cái cây. | |
| 0:18 | A04 | **BD**: Bà là cây đa đầu làng. Ba trăm năm che nắng cho quán nước, đám cưới, đám ma, với mấy thằng trốn vợ hút thuốc lào. | Chim sẻ |
| 0:27 | S26 | **MN**: Trong đó có tao. | |
| 0:29 | A03 | **BD**: Bà không đòi gì. Ai qua cúi đầu một cái là được. | Lá đa xào xạc |
| 0:35 | A03 | **BD**: Long này, đất nhà bà đừng đo. Cây đứng đây trước cả cái thôn. | |
| 0:42 | A05 | **LONG**: Bốn mươi tám lô! Sổ đỏ từng lô! View cây đa trăm năm, phong thủy vượng khí! | Chữ “48 LÔ · VIEW CÂY ĐA” · ting ting |
| 0:50 | A02 | **MN**: Trên bản vẽ, cây nằm đúng lô góc đẹp nhất. Long giữ lô ấy để xây biệt thự. | |
| 0:57 | A06 | **LONG**: Cây thì chặt. View thì để trên biển quảng cáo. | |
| 1:01 | B02 | **MN**: Bán view cái cây mình định chặt. Đến ma cũng phải xin học. | |
| 1:06 | A07 | **CHU**: Gốc đa này ba đời làng giữ. Mày động vào, đừng bảo cả làng không nhắc trước. | |
| 1:13 | A07 | **LONG**: Thần có sổ đỏ không chú? Không có thì là đất trống. | |
| 1:18 | A03 | **BD**: Sổ đỏ. Bà nhớ rồi. | |
| 1:21 | A05 | **LONG**: Đo đủ bốn mươi tám lô, mai nộp hồ sơ. | |
| 1:26 | A02 | **MN**: Bà nhắc Long dừng chặt, rồi khoanh đỏ lô góc. Long cười nhạo, xóa file, in lại và vẫn cho chặt. | |
| 1:34 | A01 | **MN**: Đêm đó, Long in bản vẽ nộp hồ sơ. | Máy in khổ lớn |
| 1:38 | A02 | **MN**: Tờ nào cũng có vòng đỏ quanh lô góc. Bên cạnh là dòng: “LÔ 00 · CHỦ ĐẤT: BÀ · KHÔNG BÁN”. | Chữ “LÔ 00 · CHỦ ĐẤT: BÀ · KHÔNG BÁN” |
| 1:47 | A01 | **MN**: Xóa file, in lại. Vẫn thế. Đổi máy in. Vẫn thế. | Máy in chạy ba nhịp |
| 1:54 | A01 | **LONG**: Thằng thiết kế chơi xỏ. Đất tiền tỷ, ma nào dám không bán! | |
| 1:59 | A03 | **BD**: Bà khoanh rồi đấy. Bà không khoanh lần hai. | Lá ngừng xào xạc · im 2 s |
| 2:05 | A08 | **MN**: Sáng hôm sau, Long thuê thợ ngoài tỉnh. Cây đa ba trăm năm, bốn tiếng là xong. | Cưa máy xa, tắt nhanh |
| 2:12 | A08 | **LONG**: Cành đừng chở đi, tốn tiền. Chặt khúc, vót nhọn làm cọc cho cả bốn mươi tám lô! Đỡ tiền bê tông! | |
| 2:21 | A08 | **MN**: Bà nhìn cành nhà mình thành đống, rồi thấy Long tự tay cắm từng cọc. Cây đã bị chặt. Hồ sơ sắp nộp. | |
| 2:28 | A08 | **BD**: Mày lấy nhà bà làm cọc. Bà nhớ rồi. | |
| 2:32 | A08 | **MN**: Bà có thể để yên. Long nộp hồ sơ, bán sạch đất, bà chẳng còn chỗ về. | Nhạc hạ |
| 2:39 | A08 | **BD**: Cành đa cắm xuống là mọc. Bà biết. Lần này bà chọn cho nó mọc. | Tiếng cành rắc nhẹ |
| 2:46 | A09 | **MN**: Ba tháng sau. Bốn mươi tám lô. Bốn mươi tám cây đa con. | “48 LÔ · 48 CÂY ĐA” · rắc rắc |
| 2:53 | A09 | **MN**: Người mua không dám chặt. Chặt đa là chặt nhà thần. Long bán view cây đa, giờ cây mọc đủ bốn mươi tám lô. | Chim sẻ |
| 3:00 | A05 | **LONG**: Hợp đồng ghi view cây đa! Thì đấy, lô nào cũng có! | Điện thoại reo |
| 3:07 | A09 | **LONG**: Gì là “không nhận bàn giao”? Tôi giao đúng quảng cáo mà! | |
| 3:12 | A10 | **MN**: Lô góc Long giữ xây biệt thự thì khác. Cây đa cũ mọc lại to nhất, ngay giữa phòng khách. | Tiếng rễ nứt nền, nhẹ |
| 3:20 | A10 | **BD**: Mày chặt nhà bà, thì bà ở nhà mày. Sổ đỏ đứng tên mày. Bà ở nhờ. | “Ở NHỜ” |
| 3:28 | A10 | **LONG**: Tôi giữ lô này xây biệt thự cho tôi cơ mà! | |
| 3:32 | A10 | **BD**: Thì xây. Bà không cấm. Chừa cho bà cái ghế cạnh cửa sổ. | |
| 3:37 | A10 | **MN**: Long giữ sổ đỏ, nhưng mất phòng khách, người mua lẫn dự án. Tối nào bà cũng ăn cùng. | |
| 3:46 | A10 | **LONG**: Canh nhạt quá bà ạ. | |
| 3:49 | A10 | **BD**: Canh nhạt còn sửa được. Mày bán bốn mươi tám cái view, giờ tự ngồi ngắm đủ bốn mươi tám cái. | Mõ CỘC |
| 3:56 | S33 → S34 | **MN**: Tao vẫn ra gốc đa con ở lô số bảy hút thuốc lào. Chủ lô chưa xây. Chờ… xin phép. | Rít điếu cày |
| 4:04 | B07 | **MN**: Tập sau: một cô bán hàng online mở mắt ra thì mất mặt. Không phải nghĩa bóng. Mặt cô đang livestream… mà cô không ở trong đó. | “TẬP SAU” · whoosh |
| 4:12 | S06 | **MN**: Bấm đăng ký đi. Không thì mai in tài liệu, kiểm tra xem có vòng đỏ nào không. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN

- **MN**: Nửa đêm, máy in cứ khoanh đỏ đúng một lô đất. Long xóa file, in lại. Đổi máy in. Vòng đỏ vẫn ở đó. (A01) · pop “LÔ 00”
- **MN**: Bên cạnh nó có dòng chữ: “Chủ đất: bà. Không bán.” (A02) · pop “KHÔNG BÁN”
- **LONG**: Đất tiền tỷ, ma nào dám không bán! (A01) · pop “LONG”
- **MN**: Máy in thì không biết sợ. Người cầm tờ giấy thì có. (A02) · pop “BÀ LÀ AI?”
- **MN**: Cái máy in còn biết giữ lô đất hơn chủ đầu tư. (A02)
- *(không lời, 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH2 — TRỌN

- **LONG**: Bốn mươi tám lô! Sổ đỏ từng lô! View cây đa trăm năm, phong thủy vượng khí! (A05) · pop “LONG”
- **MN**: Trên bản vẽ, cây đa nằm đúng lô góc đẹp nhất. Lô Long giữ lại, định xây biệt thự cho mình. (A02) · pop “48 LÔ”
- **LONG**: Cây thì chặt. View thì để trên biển quảng cáo. (A06) · pop “LONG”
- **MN**: Bán view cái cây mình định chặt. Đến ma cũng phải xin học. (B02) · pop “MA NÓ”
- **MN**: Hợp đồng ấy rồi thành thật theo cách Long không thích. (A09)
- *(không lời, 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH3 — TRAILER

- **CHU**: Gốc đa này ba đời làng giữ. Mày động vào, đừng bảo cả làng không nhắc trước. (A07) · pop “CHÚ TƯ”
- **LONG**: Thần có sổ đỏ không chú? Không có thì là đất trống. (A07) · pop “LONG”
- **BD**: Sổ đỏ. Bà nhớ rồi. (A03) · pop “BÀ ĐA”
- **MN**: Bà khoanh đỏ lô góc trên bản vẽ. Long xóa đi. Đêm xuống, anh ta lại thấy màu đỏ ấy trên giấy. (A02) · pop “LÔ 00”
- **MN**: Cả văn phòng im bặt. (A01)
- **MN**: Còn dòng chữ bên cạnh là gì? Bản đầy đủ ở link dưới. (S01) · pop “CÒN GÌ NỮA?”

### SH4 — TRỌN

- **MN**: Tờ nào cũng in ra có vòng đỏ quanh lô góc. Xóa file, in lại. Vẫn thế. Đổi máy in. Vẫn thế. (A02) · pop “VÒNG ĐỎ”
- **LONG**: Lại thằng thiết kế chơi xỏ. Đất tiền tỷ, ma nào dám không bán! (A01) · pop “LONG”
- **BD**: Bà khoanh rồi đấy. Bà không khoanh lần hai. (A03) · pop “BÀ ĐA”
- **MN**: Máy in dừng, nhưng Long vẫn cho chặt cây sáng hôm sau. Cái máy ít ra còn biết lúc nào nên dừng. (A02)
- *(không lời, 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH5 — TRỌN

- **LONG**: Cành đừng chở đi, tốn tiền. Chặt khúc, vót nhọn làm cọc mốc cả bốn mươi tám lô! Đỡ tiền cọc bê tông! (A08) · pop “LONG”
- **MN**: Bà nhìn cành nhà mình thành đống, rồi thấy Long tự tay cắm từng cọc xuống đất. (A08) · pop “48 LÔ”
- **BD**: Cành đa cắm xuống là mọc. Bà biết. Lần này bà chọn cho nó mọc. (A08) · pop “BÀ ĐA”
- **MN**: Bốn mươi tám cái cây. Tiết kiệm cọc bê tông, tốn luôn cả dự án. (A09) · pop “48 CÂY”
- *(không lời, 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH6 — TRỌN

- **MN**: Ba tháng sau. Bốn mươi tám lô. Bốn mươi tám cây đa con. (A09) · pop “48 CÂY”
- **LONG**: Hợp đồng ghi view cây đa! Thì đấy, view cây đa! Lô nào cũng có! (A05) · pop “LONG”
- **MN**: Người mua không dám chặt. Chặt đa là chặt nhà thần. (A09) · pop “VIEW CÂY ĐA”
- **MN**: Người mua xem quảng cáo xong, giờ được xem cây thật. Long giao đúng chữ, giao luôn cả gốc. (A09)
- **MN**: Long giữ đúng lời quảng cáo, chỉ quên hỏi người mua có muốn trồng rừng không. (A09)
- *(không lời, 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH7 — TRAILER

- **MN**: Lô góc Long giữ để xây biệt thự thì khác. Cây đa cũ mọc lại to nhất, ngay giữa phòng khách. (A10) · pop “LÔ GÓC”
- **LONG**: Tôi giữ lô này xây biệt thự cho tôi cơ mà! (A10) · pop “LONG”
- **BD**: Mày chặt nhà bà, thì bà ở nhà mày. Sổ đỏ đứng tên mày. Bà ở nhờ. (A10) · pop “BÀ ĐA”
- **MN**: Long tưởng giữ được căn biệt thự. Giờ bà chủ nhà đã chọn chỗ ngồi rồi. (A10) · pop “Ở NHỜ”
- **MN**: Còn Long định làm gì? Bản đầy đủ ở link dưới. (S01)

## Hình

Tận dụng: B02 và ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA), B07 (thẻ tập sau). Ảnh mới giới hạn 12 mã; v3 dùng 10 mã.

| Mã | Cảnh | Dùng trong v3 |
|---|---|---|
| A00 | Sheet bà đa (3:4): bà cụ nhỏ, tóc như rễ đa buông, áo nâu, khăn mỏ quạ, mắt sắc, ngồi vắt vẻo trên cành; 4 biểu cảm (nheo mắt, nhếch mép, chê, gắp thức ăn) | Có |
| A01 | Văn phòng tạm bằng container, máy in khổ lớn đang nhả giấy, đèn tuýp, nửa đêm; anh Long kính râm đẩy lên đầu | Có |
| A02 | Cực cận bản vẽ phân lô 48 ô vuông, vòng đỏ quanh lô góc (để trống chữ) | Có |
| A03 | Bà đa ngồi vắt vẻo trên cành đa cổ thụ ban đêm, nhìn xuống | Có |
| A04 | Cây đa cổ thụ đầu làng ban ngày: quán nước, ghế nhựa đỏ, ấm chè, điếu cày, chim sẻ | Có |
| A05 | Long trước biển quảng cáo phân lô (trống chữ), hai điện thoại, áo sơ mi hoa | Có |
| A06 | Cận Long cười gian (có thể nằm trong sheet Long) | Có |
| A07 | Chú Tư, trưởng thôn, áo bộ đội cũ, đứng chắn trước gốc đa; Long cười khẩy | Có |
| A08 | Gốc đa trơ, xe cẩu, cành đa chặt khúc vót nhọn chất đống, thợ đội mũ bảo hộ | Có |
| A09 | Khu phân lô: 48 nền đất, ở góc mỗi lô một cọc gỗ đã đâm chồi thành cây đa con xanh mướt; vài người mua đứng ngẩn | Có |
| A10 | Phòng khách biệt thự: gốc đa xuyên sàn lên trần, bà đa ngồi sofa gắp thức ăn cho Long đang mếu | Có |

## Lịch

- LONG: Thứ Hai 14/12, 18:00 (+07).
- SH1: Thứ Hai 14/12, 19:00 (+07).
- SH2: Thứ Ba 15/12, 11:30 (+07).
- SH3: Thứ Ba 15/12, 19:00 (+07).
- SH4: Thứ Tư 16/12, 11:30 (+07).
- SH5: Thứ Tư 16/12, 19:00 (+07).
- SH6: Thứ Năm 17/12, 11:30 (+07).
- SH7: Thứ Năm 17/12, 19:00 (+07).
