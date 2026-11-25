# Dự án 90 — Nhà yến "Loa gọi nhầm khách" (v3, 2026-11-24)

v3 nâng cấp kịch tính theo bài học P04:
- **Đồng hồ + cái giá cụ thể**: Đặt mốc hạn chót **90 ngày mùa làm tổ**; nếu yến không vào, tiền nợ vay bạc tỷ xây nhà bốn tầng đổ bể và tổ dân phố sẽ cưỡng chế tịch thu giàn loa (cái giá giáng thẳng vào kẻ tham lam, không ảnh hưởng trẻ em).
- **3 nấc leo thang chủ động của ông Hùng**: Nấc 1 (bị phản ánh → tải file miễn phí mở 24/24) → Nấc 2 (yến dạt ra xa, bóng lạ xuất hiện → kích thêm loa chĩa thẳng lên trời, vặn cực đại) → Nấc 3 (ngày 89 trống trơn → chơi nước liều mở hết công suất xuyên đêm ép yến vào).
- **Cold open giấu đáp án**: Chị Hạnh nhóm bếp 3 giờ sáng, giàn loa tra tấn cả phố hai tháng ròng bỗng câm bặt; chỉ treo sự tĩnh lặng bất thường, không lộ chuyện có cú hay sập điện.
- **Điểm thấp nhất & Khoảnh khắc rợn duy nhất**: 3 giờ sáng ngày thứ 90, phố sập điện, giàn loa tắt ngấm. Chị Hạnh bước ra ngõ ngẩng lên: hàng trăm đôi mắt vàng tròn xoe đậu kín lan can, dây điện, cùng trừng trừng nhìn vào phòng ngủ ông Hùng trong sự im lặng tuyệt đối.
- **Cú lật do nhân vật chọn và trả giá**: Ông Hùng tự chọn tiếc hai triệu mua file chuẩn để tải file miễn phí thu ban đêm lẫn tiếng cú. Kết quả gọi nhầm đàn cú về săn mồi làm yến chạy sạch; sau khi dẹp loa phải cắn răng mua file chuẩn thì đàn cú đã quen bãi, chực chờ sẵn trên dây điện.
- **Lời thoại LONG chuẩn 593 chữ** (khung 560–600 chữ, ≈3:00); hệ thống 7 shorts gồm 5 TRỌN (có punch + MN chỉ link) và 2 TRAILER (treo câu hỏi cắt trước đáp án).

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Mở loa miễn phí suốt ngày đêm ép yến về làm giàu, ông Hùng có kịp nhận ra mình đang triệu tập ai trước khi cả khu phố phát điên?
- **Đồng hồ + cái giá**: 90 ngày của mùa làm tổ — nếu không có yến vào ở, nợ vay xây nhà bốn tầng đè chết ông Hùng và tổ dân phố sẽ cưỡng chế tịch thu giàn loa.
- **3 nấc leo thang**:
  - Nấc 1: Bị dân phố phản ánh, ông Hùng tải file miễn phí "tiếng yến tự nhiên thu ngoài trời" mở 24/24 để bù chi phí.
  - Nấc 2: Thấy yến lượn tới rồi dạt ra xa, quanh loa xuất hiện bóng đen, ông Hùng tưởng âm lượng chưa đủ nên lắp thêm loa công suất lớn chĩa thẳng lên trời.
  - Nấc 3: Ngày thứ 89 bốn tầng vẫn trống trơn, ông Hùng chơi nước liều: mở loa công suất cực đại xuyên màn đêm để ép yến vào bằng được.
- **Điểm thấp nhất**: 3 giờ sáng ngày thứ 90, giàn loa réo quá tải khiến cả khu phố sập điện tối om, hy vọng mùa yến tiêu tan.
- **Khoảnh khắc rợn duy nhất**: Giữa đêm đen tĩnh lặng, hàng trăm đôi mắt tròn xoe màu vàng óng đậu kín mái nhà, dây điện, đồng loạt quay đầu trừng trừng nhìn vào cửa sổ phòng ngủ ông Hùng, không một tiếng động.
- **Cú lật**: File miễn phí tải trên mạng là file bẫy cú đêm ngoài trời; tiếng "ú… ụ" chìm dưới nền gọi cả đàn cú vọ về săn mồi khiến yến khiếp sợ không dám bén mảng.
- **Câu kết**: Ông Hùng bỏ hai triệu mua file chuẩn, vừa bật nấc một thì cú đã đậu sẵn trên dây điện nghiêng đầu chờ; MN chốt hạ bài học trào phúng về thói tham lam của kẻ gọi đêm.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (Host) | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| HUNG | Ông Hùng (Chủ nhà yến) | Y03 | Xuân Vĩnh | `atempo=1.02,asetrate=48000*1.02,aresample=48000` |
| HANH | Chị Hạnh (Bán xôi đầu ngõ) | Y02 | Ngọc Huyền | `atempo=1.0,anull` |

```json voices
{
  "MN": {
    "preset": "Thiện Minh",
    "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"
  },
  "HUNG": {
    "preset": "Xuân Vĩnh",
    "fx": "atempo=1.02,asetrate=48000*1.02,aresample=48000"
  },
  "HANH": {
    "preset": "Ngọc Huyền",
    "fx": "atempo=1.0,anull"
  }
}
```

## LONG (593 chữ lời thoại, dựng ≈ 3:10)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | Y01 | *(không lời, 2.0 s)* | "HAI THÁNG MẤT NGỦ" · loa ríu rít · tắt phụt |
| 0:02 | Y02 | **HANH**: Hai tháng rồi tôi chưa có một giấc ngủ trọn vẹn. Đêm nay… cái loa bỗng câm bặt. | im · mõ CỘC |
| 0:08 | S01 → S26 | **MN**: Lại mò vào à? Nhà mày cạnh đứa nào hát karaoke cả đêm không? | mõ CỘC |
| 0:13 | S34 | **MN**: Khổ chủ hôm nay mở loa gọi yến suốt ngày đêm. Tiếng chim ríu rít đúng giờ, đúng điệu. | "LOA GỌI YẾN 24/24" |
| 0:20 | S26 | **MN**: Chỉ tiếc là… khách đến không phải chim yến. | bassdown |
| 0:24 | Y01 | **MN**: Phố ven đô, sau lưng có rặng tre. Ông Hùng xây nhà bốn tầng bịt kín mít, chĩa loa bốn phía. | loa ríu rít |
| 0:31 | Y03 | **HUNG**: Yến về làm tổ là cả phố thơm lây, đất lên giá bạc tỷ! Kêu ca cái gì! | "ĐẤT LÊN BẠC TỶ!" |
| 0:36 | Y02 | **HANH**: Tôi bán xôi, ba giờ sáng dậy. Mười giờ tối ríu rít. Nửa đêm ríu rít. Ba giờ sáng vẫn réo trên đầu. | "24/24" · tick |
| 0:43 | S26 | **MN**: Hạn chót chín mươi ngày mùa làm tổ. Không có yến, nợ xây nhà đè chết ông Hùng, mà tổ dân phố cũng tịch thu loa. | "HẠN: 90 NGÀY" · bassdown |
| 0:52 | Y03 | **MN**: File chuẩn giá hai triệu. Tiếc tiền, ông Hùng tải bản miễn phí: tiếng yến tự nhiên thu ngoài trời. | "FILE MIỄN PHÍ" |
| 0:58 | Y02 | **HANH**: Nghe mãi thành quen. Hết một tràng ríu rít, dưới đáy loa lại có tiếng ú… ụ rất trầm, lạnh sống lưng. | "ú… ụ" khẽ |
| 1:05 | S26 | **MN**: Thu ngoài trời ban đêm. Yến ban đêm ngủ say. Dân gian kiêng cú đậu đầu nhà, ông Hùng chỉ đếm ngày chờ giàu. | "THU BAN ĐÊM" |
| 1:13 | Y04 | **MN**: Tháng thứ hai có đàn yến lượn tới. Vừa đến mép nóc liền hoảng hốt dạt ra xa, không con nào vào. | whoosh |
| 1:20 | Y03 | **HUNG**: Lạ thật! Chắc âm lượng chưa đủ át tiếng xe! Phải kích thêm loa chĩa thẳng lên trời! | "NẤC 2: TĂNG LOA" |
| 1:26 | Y05 | **HANH**: Nửa đêm dậy nhóm bếp, tôi thấy quanh giàn loa có mấy cái bóng tròn vo đứng im phắc. | "BÓNG LẠ" |
| 1:33 | S26 | **MN**: Đêm sau thêm vài cái bóng, rồi thêm cả bầy. Cứ đứng rình im lìm. Yến thấy bóng tử thần từ xa, ngu gì nộp mạng. | "BÓNG TỬ THẦN" |
| 1:42 | Y03 | **MN**: Ngày thứ tám mươi chín. Bốn tầng nhà rỗng tuếch, chỉ có lông vũ màu xám tro rụng đầy trước thềm. | "NGÀY 89 · 0 CÁI TỔ" |
| 1:49 | Y03 | **HUNG**: Còn đúng đêm nay! Tao mở hết công suất xem con nào dám không vào! | "NẤC 3: CỰC ĐẠI" |
| 1:55 | Y01 | **HANH**: Ba giờ sáng ngày chín mươi. Loa đang réo thì phụt một cái… cả khu phố sập điện, tối om. | sập điện · nhạc tắt |
| 2:02 | Y02 | **HANH**: Sau ba tháng, cái loa bỗng câm bặt. Tôi cầm đèn pin ra ngõ nhóm lò, bất giác ngẩng lên. | im |
| 2:09 | Y06 | **HANH**: Trên mái, lan can, dây điện, cột ăng-ten… hàng trăm đôi mắt vàng tròn xoe. | "HÀNG TRĂM MẮT VÀNG" |
| 2:14 | Y06 | **HANH**: Tất cả đều quay về một hướng: ô cửa sổ phòng ngủ của ông Hùng. | nhạc tắt |
| 2:19 | Y06 | *(không lời, 2.0 s)* | im bặt |
| 2:21 | Y02 | **HANH**: Không một tiếng thở. Không một tiếng vỗ cánh. Tôi nấp sau khe cửa, tắt đèn pin, nín thở đến lúc gà gáy. | tiếng cánh khẽ · gà gáy |
| 2:28 | Y03 | **MN**: Sáng ra, ông Hùng rọi đèn khắp bốn tầng. Không một cái tổ. Toàn phân chim và lông cú. File miễn phí hóa ra là file bẫy cú đêm. | "FILE BẪY CÚ ĐÊM" |
| 2:37 | Y03 | **HUNG**: Cú vọ! Toàn cú vọ! Thôi tắt, dẹp hết cho tao! | công tắc dập |
| 2:41 | Y05 | **HANH**: Đêm đầu tắt loa, nóc nhà trống trơn, bầy cú bay sạch. Cả phố ngủ một giấc tới sáng. Lần đầu bán xôi muộn mà tôi mừng muốn khóc. | xe máy sáng |
| 2:49 | Y07 | **MN**: Một tuần sau, ông Hùng bấm bụng chi hai triệu mua file chuẩn. Loa vừa bật nấc một, trên dây điện đã có một con cú đậu sẵn, nghiêng đầu chờ. | "KHÁCH QUEN ĐẬU CHỜ" |
| 2:56 | S33 → S34 | **MN**: Đã mở loa gọi thì phải biết mình gọi ai. Phát suốt đêm thì đứa mò đến… chỉ có đứa săn đêm. | rít điếu cày |
| 3:02 | B02 | **MN**: Tập sau: tiệm cá cảnh bán cá phong thủy sắp hóa rồng giá bằng ô tô. Cá thì thật. Nhưng con cá ấy… nhớ đường về hồ. | "TẬP SAU" · whoosh |
| 3:08 | S06 | **MN**: Bấm đăng ký đi. Nhà mày có mở loa cả đêm tao cũng không thèm đến đâu. | "ĐĂNG KÝ" · mõ CỘC |

## SHORTS
### SH1 (TRỌN) — Loa gọi yến giữa phố
- **MN**: Lại mò vào à? Nhà mày cạnh đứa nào hát karaoke cả đêm không? (S01) · pop "MA NÓ"
- **MN**: Khổ chủ hôm nay còn ác hơn: mở loa gọi yến suốt hai mươi tư giờ giữa khu dân cư. (S26)
- **HUNG**: Yến về làm tổ là cả phố thơm lây, đất lên giá bạc tỷ! Kêu ca cái gì! (Y03) · pop "ÔNG HÙNG"
- **HANH**: Tôi bán xôi đầu ngõ, hai tháng ròng không ngủ nổi một đêm. (Y02) · pop "CHỊ HẠNH"
- **MN**: Nhưng mở loa suốt ngày đêm… đứa kéo đến chưa chắc đã là chim yến. (S34)
- *(không lời, 0.8 s)*
- **MN**: Khách đến là ai, tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 (TRỌN) — Tiếng động lạ dưới đáy loa
- **MN**: Đĩa gọi yến chuẩn bán hai triệu. Ông Hùng tiếc tiền, tải file miễn phí trên mạng. (S26) · pop "MA NÓ"
- **HUNG**: Cứ miễn phí là dùng! Nghe ríu rít như nhau cả thôi! (Y03) · pop "ÔNG HÙNG"
- **HANH**: Nghe mãi thành quen. Cứ hết một tràng ríu rít, dưới đáy loa lại có tiếng ú… ụ rất trầm, lạnh sống lưng. (Y02) · pop "CHỊ HẠNH"
- **MN**: "Thu ngoài trời ban đêm." Yến ban đêm ngủ say. Đêm chỉ có một giống chim thức mà kêu ú ụ. (S34)
- *(không lời, 0.8 s)*
- **MN**: Thứ chim ấy là gì, tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 (TRỌN) — Những cái bóng tròn trên nóc
- **MN**: Tháng thứ hai, có đàn yến lượn tới mép nóc liền hoảng hốt dạt ra xa. (Y04) · pop "MA NÓ"
- **HUNG**: Lạ thật! Phải kích thêm loa chĩa thẳng lên trời cho chúng nó nghe! (Y03) · pop "ÔNG HÙNG"
- **HANH**: Nửa đêm dậy nhóm bếp, tôi thấy quanh giàn loa có mấy cái bóng tròn vo đứng im phắc. (Y05) · pop "CHỊ HẠNH"
- **MN**: Đêm sau thêm cả bầy, đứng rình im lìm. Yến thấy bóng tử thần từ xa, ngu gì nộp mạng. (S26)
- *(không lời, 0.8 s)*
- **MN**: Bầy bóng đen rình ai, tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 (TRỌN) — Ba giờ sáng mất điện
- **HANH**: Ba giờ sáng ngày thứ chín mươi. Giàn loa đang réo thì phụt một cái… cả phố sập điện, tối om. (Y01) · pop "CHỊ HẠNH"
- **HANH**: Sau ba tháng, cái loa bỗng câm bặt. Tôi cầm đèn pin ra ngõ, bất giác ngẩng lên. (Y02)
- **HANH**: Trên mái, lan can, dây điện… hàng trăm đôi mắt vàng tròn xoe, cùng trừng trừng nhìn vào phòng ngủ ông Hùng. (Y06)
- **HANH**: Không một tiếng thở. Không một tiếng vỗ cánh. Tôi nín thở trốn sau khe cửa đến tận lúc gà gáy. (Y02)
- *(không lời, 0.8 s)*
- **MN**: Đàn mắt vàng ấy từ đâu ra? Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 (TRỌN) — Khách quen đậu chờ
- **MN**: Sáng ra ông Hùng rọi đèn khắp bốn tầng: không một cái tổ yến, toàn phân chim và lông cú. (Y03) · pop "MA NÓ"
- **HUNG**: Cú vọ! Toàn cú vọ! Thôi tắt, dẹp hết cho tao! (Y03) · pop "ÔNG HÙNG"
- **MN**: Một tuần sau, ông Hùng cắn răng bỏ hai triệu mua file chuẩn. (S26)
- **MN**: Loa vừa bật nấc một, trên dây điện trước nhà đã có một con cú đậu sẵn, nghiêng đầu chờ. (Y07)
- *(không lời, 0.8 s)*
- **MN**: Nuôi yến thành nuôi cú, tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 (TRAILER) — Hàng trăm đôi mắt vàng
- **HANH**: Hai tháng rồi tôi chưa có một giấc ngủ trọn vẹn. (Y02) · pop "CHỊ HẠNH"
- **HANH**: Nhưng ba giờ sáng nay, giàn loa đang réo inh ỏi thì cả khu phố sập điện tối om. (Y01)
- **HANH**: Tôi cầm đèn pin ra ngõ nhóm lò, ngẩng lên nhìn nóc nhà yến… (Y02)
- **HANH**: Trên mái, lan can, dây điện kín đặc hàng trăm đôi mắt tròn xoe màu vàng óng, cùng trừng trừng nhìn xuống. (Y06)
- **MN**: Thứ gì đang vây kín nhà ông Hùng trong đêm đen? Bản đầy đủ, link dưới. (S06)

### SH7 (TRAILER) — Hạn chót chín mươi ngày
- **MN**: Hạn chót chín mươi ngày mùa làm tổ. Không có yến, nợ xây nhà đè chết ông Hùng, giàn loa bị tịch thu. (S26) · pop "MA NÓ"
- **HUNG**: Còn đúng đêm nay! Tao mở hết công suất xem con nào dám không vào! (Y03) · pop "ÔNG HÙNG"
- **MN**: Loa gầm rú đến ba giờ sáng thì phụt một tiếng… sập nguồn toàn khu phố. (Y01)
- *(tiếng cánh vỗ khẽ trong bóng tối)*
- **MN**: Trong bóng tối câm lặng, thứ gì đã đáp xuống giàn loa? Bản đầy đủ, link dưới. (S06)

## Hình
Tận dụng: B02 + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Ảnh vẽ mới (16:9) — Đủ 7 ảnh từ v2, v3 sử dụng toàn bộ:
| Mã | Cảnh | Sử dụng v3 |
|---|---|---|
| Y01 | Nhà yến bốn tầng xám, kín bưng, lỗ thông gió, loa trên nóc, giữa dãy nhà ống; bản ngày, bản đêm, bản cả phố tối om sập điện | ✔ Đang dùng (LONG, SH1, SH4, SH6, SH7) |
| Y02 | Chị Hạnh cận bên nồi xôi bếp củi, mắt thâm quầng; bản mở cửa cầm đèn pin ngẩng lên; bản nấp sau khe cửa | ✔ Đang dùng (LONG, SH1, SH2, SH4, SH6) |
| Y03 | Ông Hùng cận: áo ba lỗ, đồng hồ to, cầm điện thoại; bản ngồi giữa sàn nhà yến trống rỗng, lông vũ xám rơi quanh | ✔ Đang dùng (LONG, SH1, SH2, SH3, SH5, SH7) |
| Y04 | Chiều, vài con yến lượn tới gần nóc nhà yến rồi hoảng hốt vòng dạt ra xa | ✔ Đang dùng (LONG, SH3) |
| Y05 | Đêm, nóc nhà yến có vài cái bóng tròn đậu im cạnh loa; bản nóc nhà trống trơn dưới ánh trăng | ✔ Đang dùng (LONG, SH3) |
| Y06 | Mái, lan can, dây điện, cột ăng-ten kín hàng trăm đôi mắt vàng tròn xoe, cùng quay về ô cửa sổ có rèm | ✔ Đang dùng (LONG, SH4, SH6) |
| Y07 | Chiều, một con cú đậu trên dây điện trước nhà yến, đầu nghiêng nghiêng chờ loa phát | ✔ Đang dùng (LONG, SH5) |

## Lịch
- **LONG**: Thứ Năm 30/09 18:00 (+07).
- **SHORTS (7 clip)**:
  - SH1: Thứ Năm 30/09 19:00
  - SH2: Thứ Sáu 01/10 11:30
  - SH3: Thứ Sáu 01/10 19:00
  - SH4: Thứ Bảy 02/10 11:30
  - SH5: Thứ Bảy 02/10 19:00
  - SH6: Chủ Nhật 03/10 11:30
  - SH7: Chủ Nhật 03/10 19:00
- **Tập sau (P91)**: Thứ Hai 04/10 18:00 (đã khớp đúng lời dẫn teaser ở cuối LONG).
