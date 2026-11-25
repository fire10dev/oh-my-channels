# Dự án 92 — Điệu hò "Micro hai giọng" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá rõ ràng**: Hạn chót trước 21:00 đêm concert trực tiếp; Đức Ken phải hoàn thành bài đinh để ký hợp đồng tài trợ 2 tỷ. Nếu vỡ show hoặc lộ hát nhép, đạo nhạc trước 5.000 khán giả và sóng livestream thì mất trắng sự nghiệp và đền bù 2 tỷ.
- **Cold open giấu kín đáp án**: Chỉ có tiếng bàn mixer rè, ngón tay kéo fader về 0 và câu thoại lửng của anh Tín; giấu kín danh tính con ma và hiện tượng song ca đến tận điệp khúc.
- **3 nấc leo thang chủ động**: (1) Dập beat điện tử thật căng để át câu hò cổ → (2) Gào to đè nốt và đổi micro dự phòng → (3) Hạ micro chối tội, đối mặt với tiếng mái chèo khua nước cõi âm.
- **Điểm thấp nhất & Cú lật do nhân vật chọn và trả giá**: 20:45, nhạc tắt ngấm, Đức Ken hạ micro ngang ngực mím chặt môi mà loa vẫn vang câu hò; để cứu vãn sự nghiệp, anh ta buộc phải tự miệng xướng tên cụ Năm Đò bến Lở trên sóng trực tiếp.
- **Khoảnh khắc rợn duy nhất (10%)**: Khói sân khấu là là như sương sông lúc sáng sớm, Đức Ken câm mồm nhưng loa vẫn hò và dưới sàn vang tiếng mái chèo khua nước bì bõm lạnh toát.
- **Kết châm biếm theo bible**: Đức Ken thoát hiểm nhưng tính trơ trẽn không đổi, tiếc vì "thiếu người gánh nốt cao" nên đòi làm song ca AI; Ma Nó chốt hạ bằng lời cảnh tỉnh sắc lẹm.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Làm sao một ca sĩ cướp điệu hò của người chết có thể hát hết đêm diễn hai tỷ mà không bị chính câu hò ấy bóc trần trên sóng trực tiếp?
- **Đồng hồ / Cái giá**: Hạn chót 21:00 đêm concert ra mắt; nếu không hát xong bài đinh hoặc để lộ chuyện đạo nhạc thì mất hợp đồng tài trợ 2 tỷ và tiêu tan toàn bộ sự nghiệp.
- **3 nấc leo thang**:
  1. *Nấc 1*: Đức Ken lấy beat điện tử dập thật căng để đè câu hò cổ; mixer kênh 16 không dây vẫn tự nhảy sóng hò theo.
  2. *Nấc 2*: Đến điệp khúc, Đức Ken cố gào to đè nốt; anh Tín đổi micro dự phòng, nhưng micro nào vào tay Ken cũng bắt thêm giọng già rền vang.
  3. *Nấc 3*: Nhạc tắt, Đức Ken liều mạng hạ micro xuống ngang ngực mím chặt môi để đổ lỗi âm thanh hỏng; loa vẫn vang điệu hò cùng tiếng chèo khua nước giữa làn khói sông.
- **Điểm thấp nhất**: 20:45, cả hội trường 5.000 người nín bặt nhìn Đức Ken chết trân giữa vệt đèn trắng, môi mím chặt mà tiếng hò bến Lở vẫn vang dội.
- **Cú lật**: Đức Ken chọn tự miệng xướng tên tôn vinh "Cụ Năm Đò bến Lở" trước hàng ngàn khán giả; trả giá bằng việc mất danh xưng "tự sáng tác", chuyển toàn bộ tiền nhạc về sửa bến đò cho làng.
- **Khoảnh khắc rợn**: Giữa sân khấu khói là là như sương sông, Đức Ken hạ mic mím môi, loa vẫn ngân giọng già khàn chậm rãi hòa cùng tiếng mái chèo khua nước bì bõm rợn người.
- **Câu kết**: Đức Ken thắp hương ở cọc neo bến Lở, hát thử một mình thấy thiếu người gánh nốt cao nên tính làm "song ca AI"; Ma Nó nhả căng châm biếm thói trơ trẽn không đổi.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (dẫn chuyện, mỉa mai, ranh mãnh) | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| TIN | Anh Tín (kỹ sư âm thanh hậu trường, điềm đạm, chứng kiến) | H05 | Phạm Tuyên | `anull` |
| KEN | Ca sĩ Đức Ken (tóc bạch kim, tự cao, trơ trẽn) | H01, H04, H06 | Adam bựa | `atempo=1.05,asetrate=48000*1.04,aresample=48000` |
| NAM | Cụ Năm Đò (đã khuất, chỉ có giọng hò đò bến sông) | H03 | Thiền Tâm Đức | `asetrate=48000*0.88,aresample=48000,aecho=0.8:0.5:80:0.3` |

```json voices
{
  "MN": {
    "preset": "Thiện Minh",
    "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"
  },
  "TIN": {
    "preset": "Phạm Tuyên",
    "fx": "anull"
  },
  "KEN": {
    "preset": "Adam bựa",
    "fx": "atempo=1.05,asetrate=48000*1.04,aresample=48000"
  },
  "NAM": {
    "preset": "Thiền Tâm Đức",
    "fx": "asetrate=48000*0.88,aresample=48000,aecho=0.8:0.5:80:0.3"
  }
}
```

## LONG (588 chữ lời thoại, ≈3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | H01 → H02 | *(không lời, 2.0 s)*<br>**TIN**: Làm âm thanh mười hai năm, tôi chưa từng thấy micro tự hát khi ca sĩ đã câm mồm. | "COLD OPEN" · re · coc |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Giới nhạc mạng có trò: chôm của người sống thì sợ kiện, chôm của người chết thì tưởng êm.<br>**MN**: Đức Ken vớ được điệu hò bến Lở, nhận vơ tự sáng tác, húp trọn mười triệu lượt nghe. | "10 TRIỆU VIEW" · braam |
| 0:22 | S34 | **MN**: Cho đến đêm concert trực tiếp, trước năm ngàn khán giả và bản hợp đồng tài trợ hai tỷ. | "HỢP ĐỒNG 2 TỶ" · tick |
| 0:28 | H04 | **KEN**: Dân ca là của chung, bản phối mới là của tôi. Cứ dập beat thật căng, ai biết gốc ở đâu. | "SÁNG TÁC: ĐỨC KEN" · beat |
| 0:36 | H05 | **TIN**: Tám giờ tối, concert mở màn. Hạn chót chín giờ phải hát bài đinh để ký tài trợ. Hỏng show là đền hai tỷ. | "HẠN: 21:00" · "ĐỀN 2 TỶ" · tick |
| 0:46 | H01 | **MN**: Đức Ken bước lên sân khấu. Áo kim sa lấp lánh, ngỡ đời mình lên đỉnh. | nhacsoidong · reo |
| 0:53 | H02 | **TIN**: Nhưng đến điệp khúc, kênh số mười sáu trên bàn mixer tự nhảy sóng. Cổng đó không cắm dây. | "KÊNH 16 · KHÔNG DÂY" · re |
| 1:02 | H05 | **TIN**: Trong tai nghe của tôi lọt vào một giọng già, khàn khàn, chậm hơn beat nửa nhịp. | tick |
| 1:09 | H03 | **NAM**: Hò ơi… đò ai bến Lở cụ Năm… | "HÒ ƠI…" · echo |
| 1:15 | H02 | **TIN**: Tôi kéo cần gạt về không, rút luôn giắc cắm. Tiếng hò vẫn bò thẳng ra loa. | "FADER = 0" · "VẪN HÁT" · canvat |
| 1:23 | H01 | **KEN**: Ê âm thanh làm ăn kiểu gì đấy? Chỉnh lại mic đi, đè nát giọng tôi rồi! | "ĐÈ NÁT GIỌNG" |
| 1:30 | H01 | **MN**: Nấc một: Đức Ken gào to hơn, cố lấy giọng thé để đè bẹp câu hò cổ. | "NẤC 1: GÀO ÁT" |
| 1:38 | H01 | **MN**: Nhưng hắn càng gào, tiếng hò trong loa càng đanh, lồng lộng như gió giữa sông. | "GIÓ THỐC GIỮA SÔNG" · bassdown |
| 1:46 | H05 | **TIN**: Tôi đổi sang mic dự phòng. Vừa đưa vào tay nó, câu hò lại rền vang. | "NẤC 2: ĐỔI MIC" |
| 1:53 | H03 | **NAM**: Nước lên thì đợi… nước dằm thì neo… Hò ơi… | "NƯỚC LÊN THÌ ĐỢI…" · maicheo |
| 2:01 | H01 | **TIN**: Khán giả bắt đầu xì xào. Nhạc nền điện tử tự tắt lịm. Đèn sân khấu sụt áp, gom lại một vệt trắng bệch. | "XÌ XÀO" · nhactat · sutap |
| 2:11 | S26 | **MN**: Tám giờ bốn lăm. Còn mười lăm phút là hết hạn ký hợp đồng. Trượt một nhịp là mất sạch. | "20:45" · "CÒN 15 PHÚT" · tick |
| 2:19 | H06 | **KEN**: Mic hỏng đúng không? Nhìn đây này, tao không hát mà loa vẫn kêu nhé! | "NẤC 3: HẠ MIC" |
| 2:25 | H06 | **TIN**: Đức Ken hạ micro xuống ngang ngực. Môi mím chặt, mắt mở to. | nhactat |
| 2:30 | H07 | *(không lời, 2.0 s)*<br>**TIN**: Khói sân khấu là là như sương sông. Dưới sàn bỗng vang tiếng mái chèo khua nước bì bõm, lạnh toát. | "KHOẢNH KHẮC RỢN" · maicheo2 · suongsong |
| 2:40 | H03 | **NAM**: Hò ơi… đò ai bến Lở cụ Năm… đò về trả bến… người về trả tên… | "TRẢ BẾN · TRẢ TÊN" · echo2 |
| 2:50 | H01 | **TIN**: Cả năm ngàn người nín thở. Đức Ken run rẩy. Nó hiểu ra: con ma không đòi mạng, con ma đòi lại cái tên. | "ĐÒI LẠI CÁI TÊN" · imlang |
| 3:00 | H06 | **KEN**: Xin quý vị tràng pháo tay cho… điệu hò bến Lở của cụ Năm Đò! | "CỤ NĂM ĐÒ BẾN LỞ" · chot |
| 3:07 | H02 | **TIN**: Chữ Năm Đò vừa dứt, tiếng chèo tắt hẳn. Bàn mixer lặng ngắt. Khán giả tưởng màn tri ân, vỗ tay vang dội. | votay · rolen |
| 3:16 | H04 | **MN**: Hợp đồng giữ được, nhưng mười triệu view phải gắn tên cụ Năm. Tiền nhạc chuyển sạch về sửa bến đò. | "SỬA BẾN ĐÒ" |
| 3:24 | H03 | **TIN**: Chiều hôm sau, Đức Ken về bến Lở thắp hương cọc neo, hát thử vào máy. Chỉ còn một giọng trơ trọi. | khoihuong · songvo |
| 3:32 | H06 | **KEN**: Hát một mình nghe trống quá, thiếu người gánh nốt cao. Hay là làm bản song ca AI nhỉ? | "SONG CA AI?" |
| 3:39 | S33 | **MN**: Đấy, có đứa chết không chừa, đứa sống cũng chẳng chừa. Ăn cắp của người xưa thì người ta về đòi lại tên. | ritdieucay |
| 3:48 | B02 | **MN**: Tập sau: một công ty tuyển thực tập không lương, hứa làm đủ trăm ngày sẽ lên chính thức. Ngày thứ chín mươi chín… có một ông già chống gậy đến xin phỏng vấn. | "TẬP SAU" · whoosh |
| 3:58 | S06 | **MN**: Bấm đăng ký đi. Kênh này tao kể, tao ghi tên đàng hoàng, không chôm của ai đâu mà lo. | "ĐĂNG KÝ" · coc |

## SHORTS
### SH1 (TRỌN)
- **MN**: Hồ sơ bến Lở. Kẻ cắp bài hát của người chết, và cái micro không biết nói dối. (S01) · pop "ĐỨC KEN"
- **MN**: Một. Điệu hò chèo đò của người ta cả trăm năm. (H03) · pop "CỤ NĂM ĐÒ"
- **KEN**: Dân ca là của chung, bản phối mới là của tôi. Cứ dập beat thật căng, ai biết gốc ở đâu. (H04) · pop "10 TRIỆU VIEW"
- **MN**: Hai. Đêm concert kỷ niệm mười triệu view, bài tự sáng tác vừa cất lên. (H01)
- **TIN**: Kênh số mười sáu không cắm dây bỗng nhảy sóng. Trong tai nghe lọt vào một giọng già hò chậm hơn nửa nhịp. (H02) · pop "KÊNH 16 TỰ HÁT"
- **MN**: Ăn cắp của người chết, người ta không kiện… người ta đến song ca. (S26)
- *(không lời, 0.8 s)*
- **MN**: Đêm diễn hai tỷ kết thúc thế nào, tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 (TRỌN)
- **KEN**: Dân ca là của chung, bản phối mới là của tôi. Sáng tác: Đức Ken. (H04) · pop "SÁNG TÁC: ĐỨC KEN"
- **MN**: Mười triệu lượt nghe, không một dòng nhắc tên bến Lở. (S26) · pop "0 DÒNG GHI CÔNG"
- **MN**: Cho đến đêm concert trực tiếp, trước năm ngàn khán giả. (H01)
- **KEN**: Ê âm thanh làm ăn kiểu gì đấy? Chỉnh lại mic đi, đè nát giọng tôi rồi! (H01)
- **NAM**: Hò ơi… đò ai bến Lở cụ Năm… (H03) · pop "CỤ NĂM ĐÒ"
- **MN**: Càng gào to át giọng, câu hò trong loa càng rền vang như gió thốc giữa sông. (H01) · pop "CÀNG GÀO CÀNG TO"
- *(không lời, 0.8 s)*
- **MN**: Giọng ai đang hát đè ca sĩ triệu view? Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 (TRỌN)
- **TIN**: Làm âm thanh mười hai năm, tôi chưa từng thấy cái bàn mixer nào ma quái thế này. (H05) · pop "KỸ SƯ ÂM THANH"
- **TIN**: Kênh số mười sáu không hề cắm dây, tự nhiên nhảy cột sóng. (H02) · pop "KÊNH 16 KHÔNG DÂY"
- **NAM**: Hò ơi… đò ai bến Lở cụ Năm… (H03) · pop "CỤ NĂM ĐÒ"
- **TIN**: Tôi kéo cần gạt về số không, rút luôn giắc cắm tổng. (H02) · pop "FADER = 0"
- **TIN**: Tiếng hò vẫn bò thẳng ra loa. Có những thứ… không bao giờ kéo về số không được. (H05)
- *(không lời, 0.8 s)*
- **MN**: Âm thanh cõi âm lọt vào đêm diễn thế nào, tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 (TRỌN)
- **MN**: Còn mười lăm phút là hết hạn ký hợp đồng hai tỷ. Ca sĩ ngôi sao đứng hình giữa sân khấu. (S26) · pop "CÒN 15 PHÚT · MẤT 2 TỶ"
- **TIN**: Khán giả xì xào. Nhạc nền tắt lịm. Đèn sụt áp, gom lại một vệt trắng bệch. (H01)
- **KEN**: Mic hỏng đúng không? Nhìn đây này, tao không hát mà loa vẫn kêu nhé! (H06)
- **TIN**: Nó hạ mic xuống ngực, ngậm chặt mồm. Tiếng mái chèo dưới sàn vẫn khua nước bì bõm. (H07) · pop "MÔI MÍM · LOA VẪN HÁT"
- **KEN**: Xin quý vị tràng pháo tay cho… điệu hò bến Lở của cụ Năm Đò! (H06) · pop "CỤ NĂM ĐÒ"
- **MN**: Vừa xướng tên cụ Năm, loa im bặt. Con ma không đòi mạng, con ma đòi cái tên. (S34)
- *(không lời, 0.8 s)*
- **MN**: Màn trả giá ê chề của ca sĩ mạng, tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 (TRỌN)
- **MN**: Thoát hiểm trong gang tấc, giữ được hợp đồng, ca sĩ Đức Ken về bến Lở tạ lỗi. (S26) · pop "ĐỨC KEN"
- **TIN**: Chiều hôm sau, nó thắp hương ở cọc neo bến Lở, rồi hát thử vào máy. Chỉ còn đúng một giọng trơ trọi. (H03) · pop "HẾT SONG CA"
- **KEN**: Hát một mình nghe trống quá, thiếu người gánh nốt cao. Hay là làm bản song ca AI nhỉ? (H06) · pop "SONG CA AI?"
- **MN**: Đấy, có đứa chết không chừa, có đứa sống nhăn răng cũng chẳng chừa. (S33)
- *(không lời, 0.8 s)*
- **MN**: Toàn bộ vụ trộm điệu hò rúng động, tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 (TRAILER)
- **TIN**: Làm âm thanh mười hai năm, tôi chưa từng chứng kiến khoảnh khắc nào rợn tóc gáy như thế. (H05) · pop "KHOẢNH KHẮC RỢN"
- **TIN**: Giữa sân khấu năm ngàn người, Đức Ken hạ phăng micro xuống ngang ngực. Môi nó mím chặt. (H06) · pop "ĐỨC KEN"
- **TIN**: Nhạc nền tắt ngấm. Khói sân khấu là là như sương sông sáng sớm. (H07)
- **NAM**: Hò ơi… đò ai bến Lở cụ Năm… (H03) · pop "CỤ NĂM ĐÒ"
- **TIN**: Dưới sàn bỗng vang tiếng mái chèo khua nước bì bõm, lạnh toát. (H07) · pop "TIẾNG MÁI CHÈO"
- **MN**: Ca sĩ câm mồm, nhạc tắt, vậy ai đang hò giữa làn sương lạnh? (S26)
- **MN**: Câu trả lời nằm ở bản đầy đủ, link ngay dưới. (S06)

### SH7 (TRAILER)
- **MN**: Tám giờ bốn lăm tối. Còn mười lăm phút nữa là hết hạn ký hợp đồng hai tỷ. (S26) · pop "20:45 · CÒN 15 PHÚT"
- **TIN**: Kênh mixer số mười sáu không dây tự nhảy sóng. Đổi bao nhiêu micro dự phòng, loa vẫn vang giọng hò của người chết. (H02) · pop "GIỌNG NGƯỜI CHẾT"
- **KEN**: Ê âm thanh làm ăn kiểu gì đấy? Chỉnh lại mic đi! (H01) · pop "ĐỨC KEN"
- **TIN**: Khán giả năm ngàn người bắt đầu xì xào. Nhà tài trợ chuẩn bị rời ghế. (H01) · pop "NGUY CƠ MẤT TRẮNG"
- **MN**: Trượt một nhịp là đền hai tỷ và tiêu tan cả sự nghiệp. Đức Ken sẽ chọn cách nào để dập tắt câu hò đòi nợ? (S34)
- **MN**: Xem ngay bản đầy đủ, link ngay dưới video. (S06)

## Hình
Tái dùng: B02 [x] + ep01 S01 [x], S06 [x], S26 [x], S33 [x], S34 [x] (Ma Nó).

### Vẽ mới: 7 ảnh (16:9)
| Mã | Trạng thái v3 | Cảnh |
|---|---|---|
| H01 | [x] Đang dùng | Sân khấu hội trường: bản sáng có khán giả giơ đèn; bản tối chỉ còn một vệt trắng; bản Đức Ken khựng lại |
| H02 | [x] Đang dùng | Bàn mixer cận, cần gạt, tai nghe, cột sóng âm có thêm một vạch |
| H03 | [x] Đang dùng | Bến Lở: sáng sương có cụ già chèo đò nan (thấy từ sau lưng) và chàng trai bạch kim quay điện thoại; bản người lạ kéo về; bản bến mới sửa |
| H04 | [x] Đang dùng | Đức Ken: trong phòng thu tai nghe cười; bản livestream; bản màn hình trang nhạc ghi công mới |
| H05 | [x] Đang dùng | Hậu trường: anh Tín áo đen, tai nghe to, ngồi bàn mixer; bản bỏ tay khỏi bàn |
| H06 | [x] Đang dùng | Đức Ken cận hạ micro ngang ngực, môi mím; bản chiều đứng bến hát khẽ |
| H07 | [x] Đang dùng | Khói sân khấu là là trên sàn như sương sông, vệt sáng trắng như mặt nước |

## Lịch
- **LONG**: Thứ Năm 07/10 18:00 (+07)
- **SH1** (TRỌN): Thứ Năm 07/10 19:00
- **SH2** (TRỌN): Thứ Sáu 08/10 11:30
- **SH3** (TRỌN): Thứ Sáu 08/10 19:00
- **SH4** (TRỌN): Thứ Bảy 09/10 11:30
- **SH5** (TRỌN): Thứ Bảy 09/10 19:00
- **SH6** (TRAILER): Chủ Nhật 10/10 11:30
- **SH7** (TRAILER): Chủ Nhật 10/10 19:00
