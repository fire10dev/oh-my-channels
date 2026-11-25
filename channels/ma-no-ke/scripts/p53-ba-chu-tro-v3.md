# Dự án 53 — Bà chủ trọ âm "Công tơ quay ngược" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá cụ thể**: Hạn chót nộp tiền điện lực trước 17:00 ngày cuối tháng; nếu quỵt sẽ bị cắt điện toàn khu trọ, vỡ nợ vì công tơ tổng bị phạt gấp nhiều lần tiền ăn chặn.
- **3 nấc leo thang chủ động của ông Quý**: Nghi sinh viên câu trộm điện → xích khóa hộp công tơ + dọa phạt; Gọi điện lực thay công tơ tổng mới; Vác kìm ngắt cầu dao đêm cuối tháng để quỵt số.
- **Cold open không lộ đáp án**: Treo câu hỏi bằng tiếng đĩa nhôm công tơ quay ngược và lời thách thức lúc nửa đêm, không kể trước chuyện bà Cúc tính sổ.
- **Điểm thấp nhất & Cú lật do nhân vật chọn**: Quỳ trước cuốn sổ ô ly lúc 2 giờ sáng, nhận ra càng gian thì số nợ càng nhân lên; Quý tự tay xé bảng giá cũ, hạ về giá nhà nước và hoàn tiền thừa để cứu lấy dãy trọ.
- **Khoảnh khắc rợn cô đọng**: 2 giờ sáng, đèn tuýp phụt tắt, 12 đĩa nhôm đồng loạt rít lên quay ngược; vệt đèn pin vàng quét dọc tường cùng tiếng dép lê và tiếng bút chì sột soạt.
- **Chuẩn hóa khuôn v3**: 574 chữ lời thoại (chuẩn 560–600 chữ), đủ 7 shorts (5 TRỌN + 2 TRAILER), JSON voices và teaser nối tập P54 vào Thứ Năm.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Kẻ tham lam ăn chênh tiền điện của sinh viên nghèo sẽ làm gì khi từng số điện ăn bẩn bị dồn ngược vào hóa đơn nhà mình trước giờ cắt điện?
- **Đồng hồ + cái giá**: 17:00 ngày cuối tháng (hạn nộp tiền điện lực). Càng giở trò gian lận, công tơ tổng càng quay bão; trượt hạn sẽ bị cắt điện toàn khu trọ, mất trắng cơ nghiệp thừa kế.
- **3 nấc leo thang**:
  1. Thấy công tơ phòng quay chậm: khóa xích hộp điện, dọa phạt sinh viên → công tơ giật mạnh quay ngược.
  2. Công tơ tổng quay gấp ba: gọi điện lực thay mới đạt chuẩn niêm chì → công tơ mới vẫn quay tít mù.
  3. Đêm cuối tháng liều mình vác kìm đi cắt cầu dao → đèn tắt, đối mặt với vệt đèn pin và cuốn sổ âm của bà Cúc.
- **Điểm thấp**: 2 giờ sáng ngày cuối tháng, hóa đơn vọt lên 20 triệu, đối mặt với sự sụp đổ kinh tế và nỗi kinh hoàng vô hình.
- **Cú lật (lựa chọn & trả giá)**: Ông Quý chọn xé bảng giá ăn chặn, chấp nhận hạ về giá nhà nước và hoàn trả tiền thừa cho sinh viên; công tơ tổng lập tức quay chậm lại.
- **Khoảnh khắc rợn**: 2:00 sáng, hành lang tối om, 12 đĩa nhôm rít lên quay ngược vù vù; vệt đèn pin vàng rà trên tường không bóng người, tiếng dép lê lẹp xẹp và tiếng bút chì sột soạt ngay bên tai.
- **Câu kết**: Châm biếm thói buôn gian làm láo: chỉ khi đĩa nhôm quay ngược vào ví tiền thì kẻ tham mới biết sợ.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (dẫn chuyện trào phúng) | B02, S01, S26, S33, S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| QUY | Ông Quý (chủ trọ mới, hám tiền) | T04, T12 | Adam bựa | `atempo=1.05` |
| CUC | Bà Cúc (chủ trọ cũ, công bằng, nghiêm nghị) | T06, T07 | Đoan Trang | `asetrate=48000*0.92,aresample=48000,aecho=0.8:0.5:50:0.25` |
| SV | Thảo (sinh viên thuê trọ) | T05 | Mai Anh | `atempo=1.02` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "QUY": {"preset": "Adam bựa", "fx": "atempo=1.05"}, "CUC": {"preset": "Đoan Trang", "fx": "asetrate=48000*0.92,aresample=48000,aecho=0.8:0.5:50:0.25"}, "SV": {"preset": "Mai Anh", "fx": "atempo=1.02"}}
```

## LONG (574 chữ lời thoại, dựng ≈ 3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | T01 | *(không lời, 2.0 s)* | "2:00 SÁNG" · tictac · nhấp nháy |
| 0:02 | T04 | **QUY**: Một số sáu nghìn. Cuối tháng không nộp tao cắt cầu dao. | quạt trần |
| 0:06 | T02 | **MN**: Cứ cắt đi. Nửa đêm nay… có người nối lại. | "CÔNG TƠ QUAY NGƯỢC" · rè rè |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Đi ở trọ bao giờ chưa? Khách hôm nay thu điện sáu nghìn. Nhưng nó gặp đúng người đọc công tơ. | "6.000Đ / SỐ" · mõ coc · braam |
| 0:18 | T03 | **MN**: Ông Quý thừa kế dãy trọ mười hai phòng. Lên làm chủ, dán bảng giá mới. | "DÃY TRỌ 12 PHÒNG" |
| 0:24 | T04 | **QUY**: Điện sáu nghìn một số. Nước một trăm một người. Không ở thì lượn. Sinh viên thiếu gì. | "BẢNG GIÁ MỚI" · bấm máy tính |
| 0:31 | T05 | **SV**: Điện nhà nước có ba nghìn mấy thôi mà chú… |  |
| 0:34 | T04 | **QUY**: Ở đây là luật của tao. |  |
| 0:37 | T06 | **MN**: Dãy này trước của bà Cúc. Bà thu đúng giá nhà nước, cho sinh viên nợ. Đầu tháng nào cũng cầm đèn pin, sổ ô ly đi đọc từng số. | "BÀ CHỦ CŨ" · dép lê lẹp xẹp |
| 0:46 | T07 | **CUC**: Điện đếm theo số, không đếm theo lòng tham. | "LỆ NHÀ" · echo |
| 0:50 | S26 | **MN**: Lệ nhà này: trước năm giờ chiều cuối tháng, hóa đơn điện lực sẽ về. Cướp bao nhiêu, nợ lại bấy nhiêu. | "HẠN: 17:00 CUỐI THÁNG" · bassdown · tick |
| 0:58 | T01 → T02 | **MN**: Đêm hai mươi, mười hai công tơ phòng trọ quay chậm rì. Quạt chạy, đèn sáng, mà đĩa nhôm như đứng im. | "ĐÊM 20" · tictac chậm |
| 1:05 | T04 | **QUY**: Lũ này dám câu trộm điện của tao à? |  |
| 1:08 | T01 | **MN**: Ông Quý xích khóa từng hộp công tơ, dọa phạt mỗi phòng năm trăm. | "PHẠT 500K" · khóa sắt |
| 1:13 | T02 | **MN**: Nhưng hai giờ sáng, ông vừa quay lưng, cả mười hai cái đĩa nhôm cùng giật mạnh. Rồi quay ngược. | "QUAY NGƯỢC" · rè rè ngược |
| 1:21 | T09 | **MN**: Sáng hôm sau, công tơ tổng nhà ông Quý dưới tầng trệt quay tít mù, nhanh gấp ba. | "CÔNG TƠ TỔNG · GẤP 3" · rè rè tít |
| 1:27 | T04 | **QUY**: Hỏng rồi! Điện lực đâu, thay ngay cái mới! |  |
| 1:30 | T10 | **MN**: Điện lực thay công tơ mới. Vừa đóng điện, đĩa nhôm lại quay điên cuồng. | cạch · rè rè tít |
| 1:35 | T10 → S26 | **MN**: Thợ bảo: Một người mà dùng bằng mười hai nhà. Ông Quý gào: Tôi cắm mỗi cái quạt! Thợ lắc đầu. | "1 NGƯỜI = 12 NHÀ" |
| 1:43 | T04 | **MN**: Đêm cuối tháng. Còn bốn tiếng nữa chốt số, hóa đơn công tơ tổng vọt lên hai mươi triệu. | "CÒN 4 TIẾNG" · "HÓA ĐƠN: 20 TRIỆU" · tick |
| 1:49 | T04 | **QUY**: Tao ngắt cầu dao! Khỏi tốn! |  |
| 1:52 | T01 | **MN**: Hai giờ sáng. Ông Quý vác kìm lao ra hành lang. Đúng lúc đó, đèn tuýp chớp tắt rồi lịm. | "2:00 SÁNG" · cauda · nhạc tắt · phụt |
| 1:59 | T02 | **MN**: Mười hai công tơ đồng loạt rít lên. Đĩa nhôm quay ngược vù vù như cánh quạt. | rợn · rè rè ngược rít · nhạc tắt |
| 2:05 | T08 | **MN**: Vệt đèn pin vàng quét chậm trên tường, dừng ở từng công tơ. Không có ai cầm đèn. | "VỆT ĐÈN PIN VÀNG" · nhạc tắt |
| 2:11 | T08 | **MN**: Chỉ có tiếng dép lê lẹp xẹp. Và tiếng bút chì sột soạt ngay bên tai. | dép lê lẹp xẹp · sột soạt · im 2s |
| 2:18 | T11 | **MN**: Đèn bật sáng. Trên bàn xuất hiện cuốn sổ ô ly cũ mòn mép. | "SỔ Ô LY" · ting |
| 2:23 | T11 → T12 | **MN**: Nét bút chì nắn nót: mười hai phòng nhân ba nghìn tiền chênh. Tiền ăn bớt đúng bằng hóa đơn vọt lên. Khớp từng số. | "12 PHÒNG × 3.000Đ" · "KHỚP TỪNG SỐ" · bassdown |
| 2:32 | T12 | **QUY**: Cô… cô Cúc… | thở dốc |
| 2:34 | T07 | **CUC**: Cháu đếm người, cô đếm số. Của ai trả về người nấy. | echo |
| 2:38 | T12 | **MN**: Ông Quý quỳ sụp. Năm giờ chiều không nộp, điện lực cắt điện. Tiền ăn chặn không bù nổi tiền phạt. | "HẾT ĐƯỜNG CHỐI" |
| 2:44 | T03 | **MN**: Ông Quý run rẩy xé bảng giá cũ, viết bảng mới: Điện ba nghìn, đúng giá nhà nước. Tiền thừa trừ vào tiền phòng. | "BẢNG GIÁ: 3.000Đ" · xoet |
| 2:51 | T09 | **MN**: Dán xong, công tơ tổng khựng lại một nhịp. Đĩa nhôm quay chậm dần, đều đặn bình thường. | khựng · tictac đều |
| 2:57 | T05 | **SV**: Chú Quý dạo này tốt tính thế. Lại còn trả lại tiền thừa. |  |
| 3:01 | T04 | **QUY**: Tao… tao tích đức! Đừng hỏi nữa! |  |
| 3:04 | B02 | **MN**: Tích đức nỗi gì. Đĩa nhôm quay ngược vào ví mới biết sợ. | "VÍ BIẾT SỢ" |
| 3:08 | S33 | **MN**: Tối nay về phòng trọ, ngó xem công tơ nhà mày quay xuôi hay ngược. | rít điếu cày |
| 3:13 | S34 | **MN**: Tập sau: tiệm đồ chơi dán tem an toàn lên hàng độc hại. Có con lật đật gỗ, ngã thế nào cũng đứng dậy, và nó nhớ đường về. | "TẬP SAU" · whoosh |
| 3:20 | S06 | **MN**: Bấm đăng ký đi. Ở đây tao không thu tiền điện sáu nghìn một số đâu. | "ĐĂNG KÝ" · mõ coc |

## SHORTS
### SH1 (TRỌN)
- **MN**: Hồ sơ công tơ quay ngược. Dãy trọ mười hai phòng, đĩa nhôm tự quay lùi. (T02) · pop "CÔNG TƠ QUAY NGƯỢC"
- **QUY**: Điện sáu nghìn một số. Không ở thì lượn. Sinh viên thiếu gì. (T04) · pop "6.000Đ / SỐ"
- **MN**: Ông chủ trọ mới ăn chênh mỗi số ba nghìn. Nhưng đêm đến, mười hai cái công tơ đồng loạt quay ngược chiều kim đồng hồ. (T01) · pop "QUAY LÙI"
- **CUC**: Cháu đếm người, cô đếm số. Của ai trả về người nấy. (T07) · pop "BÀ CÚC · CHỦ CŨ"
- **MN**: Càng ăn bẩn, công tơ nhà mình càng quay tít mù. (T09) · pop "GẤP 3 LẦN"
*(lặng 0.8 s)*
- **MN**: Món nợ này tính thế nào? Tao kể ở bản đầy đủ, link dưới. (S26) · pop "LINK BẢN ĐẦY ĐỦ"

### SH2 (TRỌN)
- **SV**: Điện nhà nước có ba nghìn mấy thôi mà chú… (T05) · pop "ĐIỆN NHÀ NƯỚC"
- **QUY**: Ở đây là luật của tao. (T04) · pop "LUẬT CHỦ TRỌ"
- **MN**: Luật của người sống thì dễ lách, luật của bà chủ cũ thì không. (T06) · pop "BÀ CÚC · CHỦ CŨ"
- **MN**: Bà Cúc ngày trước thu đúng giá nhà nước, cho sinh viên nghèo nợ tiền. (T06)
- **CUC**: Điện đếm theo số, không đếm theo lòng tham. (T07)
- **MN**: Thu đắt gấp đôi, cuối tháng tiền điện nhà chủ vọt lên hai mươi triệu. (T12) · pop "HÓA ĐƠN: 20 TRIỆU"
*(lặng 0.8 s)*
- **MN**: Ai bắt ông ấy phải nôn tiền ra? Tao kể ở bản đầy đủ, link dưới. (S26) · pop "LINK BẢN ĐẦY ĐỦ"

### SH3 (TRỌN)
- **MN**: Nhà có một người mà dùng điện bằng mười hai gia đình. (T10) · pop "1 NGƯỜI = 12 NHÀ"
- **QUY**: Hỏng rồi! Điện lực đâu, thay ngay cái mới! (T04)
- **MN**: Thợ điện lực xuống thay công tơ mới toanh, niêm chì cẩn thận. (T10)
- **MN**: Nhưng vừa đóng điện, đĩa nhôm lại quay điên cuồng như chong chóng. (T09) · pop "QUAY ĐIÊN CUỒNG"
- **QUY**: Tôi cắm mỗi cái quạt! (T04)
- **MN**: Thợ nhìn ông Quý, lắc đầu rồi bỏ về. Vì máy móc không đo được lòng tham. (S26) · pop "KHÔNG ĐO ĐƯỢC LÒNG THAM"
*(lặng 0.8 s)*
- **MN**: Cái công tơ đó hỏng hay có ma? Tao kể ở bản đầy đủ, link dưới. (S26) · pop "LINK BẢN ĐẦY ĐỦ"

### SH4 (TRỌN)
- **MN**: Thu thêm của sinh viên bao nhiêu, công tơ nhà mình gánh bấy nhiêu. (T11) · pop "SỔ Ô LY"
- **MN**: Trên bàn xuất hiện cuốn sổ ô ly cũ mòn mép. (T11)
- **MN**: Nét bút chì nắn nót: mười hai phòng nhân ba nghìn tiền chênh. Tiền ăn bớt đúng bằng hóa đơn vọt lên. (T11) · pop "KHỚP TỪNG SỐ"
- **CUC**: Cháu đếm người, cô đếm số. (T07) · pop "BÀ CÚC · CHỦ CŨ"
- **QUY**: Cô… cô Cúc… (T12)
- **MN**: Ông Quý quỳ sụp dưới đèn bàn, sợ mất mật. (T12) · pop "HẾT ĐƯỜNG CHỐI"
*(lặng 0.8 s)*
- **MN**: Đoạn đối mặt rợn người ấy, tao kể ở bản đầy đủ, link dưới. (S26) · pop "LINK BẢN ĐẦY ĐỦ"

### SH5 (TRỌN)
- **SV**: Chú Quý dạo này tốt tính thế. Lại còn trả lại tiền thừa. (T05) · pop "TRẢ LẠI TIỀN THỪA"
- **QUY**: Tao… tao tích đức! Đừng hỏi nữa! (T04) · pop "TÍCH ĐỨC"
- **MN**: Tích đức cái nỗi gì. Đĩa nhôm quay ngược vào ví mới biết sợ. (B02) · pop "QUAY NGƯỢC VÀO VÍ"
- **MN**: Xé bảng giá sáu nghìn, hạ về giá nhà nước thì công tơ mới chịu quay chậm lại. (T03)
- **MN**: Đúng là người tính không bằng bà chủ cũ tính. (S26) · pop "BÀ CÚC"
*(lặng 0.8 s)*
- **MN**: Toàn bộ phi vụ nắn gân chủ trọ, tao kể ở bản đầy đủ, link dưới. (S26) · pop "LINK BẢN ĐẦY ĐỦ"

### SH6 (TRAILER)
- **MN**: Hai giờ sáng. Cả dãy trọ mười hai phòng tắt đèn đi ngủ. (T01) · pop "2:00 SÁNG"
- **MN**: Mười hai công tơ đồng loạt rít lên. Đĩa nhôm quay ngược vù vù như cánh quạt. (T02) · pop "QUAY NGƯỢC"
- **MN**: Vệt đèn pin vàng quét chậm trên tường, dừng ở từng công tơ. Không có ai cầm đèn. (T08) · pop "VỆT ĐÈN PIN VÀNG"
- **MN**: Chỉ có tiếng dép lê lẹp xẹp. Và tiếng bút chì sột soạt ngay bên tai. (T08) · pop "BÚT CHÌ SỘT SOẠT"
- **QUY**: Ai… ai đấy? (T12)
- **MN**: Người cầm đèn pin là ai? Xem ngay bản đầy đủ ở link dưới. (S26) · pop "XEM BẢN ĐẦY ĐỦ"

### SH7 (TRAILER)
- **MN**: Còn bốn tiếng nữa là điện lực chốt số. Hóa đơn công tơ tổng vọt lên hai mươi triệu. (T04) · pop "HÓA ĐƠN: 20 TRIỆU"
- **QUY**: Tao ngắt cầu dao! Khỏi tốn! (T04) · pop "NGẮT CẦU DAO"
- **MN**: Hai giờ sáng. Ông Quý vác kìm lao ra hành lang. Đúng lúc đó, đèn tuýp chớp tắt rồi lịm. (T01) · pop "ĐÈN VỤT TẮT"
- **CUC**: Điện đếm theo số, không đếm theo lòng tham. (T07) · pop "BÀ CÚC · CHỦ CŨ"
- **MN**: Cánh cửa bóng tối mở ra, ai đang đợi ông Quý ở cuối hành lang? Bản đầy đủ ở link dưới. (S26) · pop "BẢN ĐẦY ĐỦ Ở LINK DƯỚI"

## Hình
Tận dụng: B02 + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Danh sách ảnh vẽ mới (16:9)
| Mã | Cảnh | Trạng thái v3 |
|---|---|---|
| T01 | Hành lang dãy trọ đêm, mười hai công tơ điện cũ treo thành hàng trên tường, đèn tuýp nhấp nháy | Đang dùng (LONG, SH1, SH6, SH7) |
| T02 | Cận đĩa quay công tơ điện cơ (kiểu cũ có đĩa nhôm) | Đang dùng (LONG, SH1, SH6) |
| T03 | Dãy trọ mười hai phòng: cửa sắt, sân phơi đồ, bảng giá dán tường | Đang dùng (LONG, SH5) |
| T04 | Ông Quý cận: áo ba lỗ, chùm chìa khóa, máy tính bỏ túi; bản ngồi bàn tính hóa đơn | Đang dùng (LONG, SH1, SH2, SH3, SH5, SH7) |
| T05 | Thảo cận: sinh viên tóc buộc, áo phông, đọc bảng giá; bản cười | Đang dùng (LONG, SH2, SH5) |
| T06 | Ảnh màu cũ: bà Cúc áo bà ba hoa nhỏ, kính lão, cầm đèn pin đứng trước dãy công tơ, sinh viên cười | Đang dùng (LONG, SH2) |
| T07 | Bà Cúc mờ đứng cuối hành lang, sổ ô ly, bút chì, kính lão | Đang dùng (LONG, SH1, SH2, SH4, SH7) |
| T08 | Hành lang tối, vệt đèn pin vàng chiếu lên dãy công tơ, không thấy người cầm | Đang dùng (LONG, SH6) |
| T09 | Cận công tơ nhà ông Quý tầng trệt, đĩa quay nhòe vì nhanh | Đang dùng (LONG, SH1, SH3) |
| T10 | Thợ điện lực áo cam thay công tơ, lắc đầu | Đang dùng (LONG, SH3) |
| T11 | Cận cuốn sổ ô ly cũ mở trên bàn, nét bút chì, phép tính | Đang dùng (LONG, SH4) |
| T12 | Ông Quý cận dưới đèn bàn đêm: mồ hôi, mắt trợn, tay run cầm cuốn sổ ô ly | Đang dùng (LONG, SH2, SH4, SH6) |

## Lịch
- **LONG**: Thứ Hai 24/05 18:00 (+07)
- **SH1** (TRỌN): Thứ Hai 24/05 19:00
- **SH2** (TRỌN): Thứ Ba 25/05 11:30
- **SH3** (TRỌN): Thứ Ba 25/05 19:00
- **SH4** (TRỌN): Thứ Tư 26/05 11:30
- **SH5** (TRỌN): Thứ Tư 26/05 19:00
- **SH6** (TRAILER): Thứ Năm 27/05 11:30
- **SH7** (TRAILER): Thứ Năm 27/05 19:00
- **Tập sau (P54 - Con lật đật)**: Thứ Năm 27/05 18:00
