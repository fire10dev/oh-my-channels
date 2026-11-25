# Dự án 48 — Tập cuối mùa 1 "Biên bản Ma Nó" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Xương sống kịch tính rõ ràng**: Câu hỏi trung tâm đặt cược sinh mệnh nghề nghiệp của Ma Nó; đồng hồ đếm ngược bằng một tàn nén hương; cái giá cụ thể là tịch thu điếu cày gia truyền, niêm phong mõ và cấm kể vĩnh viễn.
- **3 nấc leo thang chủ động**: Chối bay viện cớ người trần xem hài nhảm → Lôi Thổ Công làm nhân chứng sống → Chấp nhận nước liều: cho Thần trùng rà soát toàn bộ bình luận, nếu có 1 câu mê tín sợ hãi thì tự tay bẻ đôi điếu cày.
- **Điểm thấp nhất & khoảnh khắc rợn**: Thần trùng dừng lại ở những dòng bình luận người trần làm theo thật; làn khói điếu cày lần đầu tiên trong 48 tập đứng bất động giữa không trung, Ma Nó tưởng đã mất trắng cơ nghiệp.
- **Cú lật do quy chế và bản chất hành vi**: Âm phủ phân biệt "Lộ thiên cơ" (dọa dẫm) và "Giáo hóa" (giúp người sống tử tế hơn); khán giả để lại bằng chứng cứu Ma Nó thoát án và nhận giấy phép Mùa 2 kèm điều kiện khắt khe.
- **Chuẩn hóa khuôn v3**: Lời thoại LONG đạt 576 chữ (chuẩn 560–600 chữ, ≈3:00); hệ thống 7 short (5 TRỌN + 2 TRAILER) với cấu trúc pop chữ, khoảng lặng và link chuẩn; cập nhật teaser Mùa 2 P49 Thuồng luồng vào Thứ Hai.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Liệu Ma Nó có giữ được chiếc điếu cày gia truyền và quyền kể chuyện cõi âm khi đoàn kiểm toán âm phủ ập đến lập biên bản vì tội tiết lộ thiên cơ?
- **Đồng hồ + cái giá**: Trước khi tàn nén nhang trên bát hương của Thổ Công. Trượt hạn: tịch thu điếu cày, niêm phong mõ, cấm vĩnh viễn không được cất tiếng kể chuyện.
- **3 nấc leo thang chủ động**:
  1. *Chối bay chối biến*: Viện lý do người trần chỉ xem kênh để giải trí, vừa húp mì vừa cười khằng khặc, không ai tin nên không lộ. (Thất bại: Âm luật vô tư, có kể là có lộ).
  2. *Lôi nhân chứng*: Kéo Thổ Công ra làm chứng mình chỉ tấu hài vô hại. (Thất bại: Sổ kiểm toán ghi nhận lượt xem tăng vọt, Thần trùng đòi niêm phong cả mõ).
  3. *Nước liều*: Đưa toàn bộ kho bình luận cho Thần trùng rà soát từng chữ; đánh cược nếu có một dòng mê tín sợ hãi thì tự tay bẻ đôi điếu cày nộp phạt.
- **Điểm thấp nhất**: Thần trùng đanh mặt dừng tay trước các bình luận; Ma Nó lạnh gáy nhận ra người xem đã làm theo thật; làn khói điếu cày bất động giữa không trung, cầm chắc án phạt.
- **Cú lật**: Luật âm phủ định nghĩa lại ranh giới giữa "Lộ thiên cơ" (làm người ta khiếp sợ) và "Giáo hóa" (làm người ta sống tử tế). Những hành động thả cá, thắp hương, trả cọc của khán giả trở thành bằng chứng giúp Ma Nó được hủy biên bản phạt, cấp giấy phép Mùa 2 nhưng phải trả giá bằng 3 điều kiện: không hù, không bịa, không dạy đời.
- **Khoảnh khắc rợn duy nhất**: Sau tiếng mõ mở màn của Ma Nó, có ba tiếng gõ bí ẩn đáp lại từ sâu trong cánh tủ thờ gỗ ("cộc… cộc… cộc…"). Lần đầu tiên sau 48 tập có kẻ gõ lại mõ, và làn khói điếu cày đứng sững giữa hư không.
- **Câu kết**: Thổ Công xin chữ ký fan cứng vào quạt mo; Ma Nó rít thuốc, nhả căng bằng lời nhắc người xem và thả teaser Mùa 2 về con thuồng luồng đòi nợ mét vuông ven sông.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| TT | Thần trùng | B04, B04r | Thiền Tâm Đức | `atempo=1.0,asetrate=48000*0.92,aresample=48000,aecho=0.8:0.4:30:0.2` |
| THO | Thổ Công | P02 | Adam bựa | `atempo=0.95,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25` |

```json voices
{
  "MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},
  "TT": {"preset": "Thiền Tâm Đức", "fx": "atempo=1.0,asetrate=48000*0.92,aresample=48000,aecho=0.8:0.4:30:0.2"},
  "THO": {"preset": "Adam bựa", "fx": "atempo=0.95,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25"}
}
```

## LONG (576 chữ lời thoại, ≈3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | S01 | *(không lời, 1.5 s)* | mõ CỘC |
| 0:01 | S01 | **MN**: CỘC! | "CỘC!" |
| 0:03 | P01 | *(không lời, 2.0 s)* | cộc… cộc… cộc… (trong tủ) · bassdown |
| 0:05 | S26 | **MN**: Lại mò vào à? Bốn mươi tám tập tao gõ mõ, chưa ai dám gõ lại. Hôm nay có.<br>**MN**: Tiếng gõ ngay dưới mông tao, vọng từ trong cánh tủ thờ. | "AI GÕ ĐÁP?" |
| 0:15 | B04 | **TT**: Không phải trong tủ. Ta đứng đằng sau. | mõ sắt |
| 0:18 | S01 → B04 | **MN**: Quay lại thấy ông công chức âm phủ đi xe đạp đã dựng chân chống cạnh bát hương. | "ĐOÀN KIỂM TOÁN" · chuông xe đạp |
| 0:24 | P02 | **THO**: Cả tôi nữa! Tránh ra để tôi phủi bụi bát hương cái nào. | phui bui |
| 0:28 | P02 → B04 | **MN**: Thổ Công lúi húi bước ra từ bát hương, áo vàng phủi tàn lôm đốp. Đoàn kiểm toán ập tới. |  |
| 0:34 | B04 | **TT**: Ma Nó. Bốn mươi tám lần kể chuyện âm ty cho dương gian. Tội danh: tiết lộ thiên cơ.<br>**TT**: Hạn định trước khi tàn nén hương. Hình phạt: tịch thu điếu cày, niêm phong mõ, cấm vĩnh viễn. | "TỘI: LỘ THIÊN CƠ" · "HẠN: TÀN NÉN HƯƠNG" · lat so · tick |
| 0:46 | S26 | **MN**: Tịch thu điếu cày? Thà các ông lấy luôn cái mạng ma của tao đi! | "TỊCH THU ĐIẾU CÀY" |
| 0:52 | S26 | **MN**: Oan quá cán bộ ơi! Chuyện cõi âm ai lộ mới phạt, chứ tao có lộ đâu?<br>**MN**: Người trần xem kênh tao nửa đêm vừa ăn mì vừa cười. Coi như hài nhảm, ai thèm tin! | "CHỈ LÀ HÀI NHẢM" |
| 1:06 | B04 | **TT**: Âm luật vô tư, không nghe giải thích. Có kể là có lộ, đưa điếu cày đây. | mõ sắt |
| 1:12 | S26 → P02 | **MN**: Ông Thổ Công làm chứng coi! Tôi ở ké nóc tủ, có dọa nạt ai bao giờ chưa? |  |
| 1:18 | P02 | **THO**: Công nhận… nó kể tấu hài thật cán bộ, tôi ngồi nghe cũng buồn cười. | quat mo |
| 1:24 | B04 | **TT**: Tấu hài mà lượt xem tăng vọt à? Sổ kiểm toán ghi rành rành. Đưa nốt cái mõ! | lat so |
| 1:31 | S26 | **MN**: Không phục! Giỏi thì mở điện thoại tao ra mà đọc hết bình luận đi!<br>**MN**: Thấy một câu kêu sợ hay mê tín, tao tự tay bẻ đôi điếu cày nộp phạt! | "NƯỚC LIỀU" |
| 1:42 | B04 | **TT**: Được. Ta làm theo giấy tờ. Đưa đây, ta rà từng chữ. |  |
| 1:46 | B04 → P03 | **MN**: Thần trùng đeo kính lão, lật sột soạt cuộn bình luận dài chạm đất. | lat giay · ting |
| 1:52 | P02 | **THO**: Tập con cá chép tôi xem ba lần, cười té ghế! |  |
| 1:56 | B04 | **MN**: Nhưng rồi ngón tay thần trùng bỗng dừng lại. Mặt ông đanh thép, lạnh tanh. | nhạc tắt |
| 2:01 | S26 | **MN**: Khói từ điếu cày trên tay tao… lần đầu tiên, đứng bất động giữa không trung. | im · bassdown |
| 2:07 | P03 | **TT**: Ngươi bảo không ai tin? Thế những dòng này là gì?<br>**TT**: "Xem tập cá chép, hôm nay mình mở túi bóng rồi mới thả cá." | "MỞ TÚI MỚI THẢ CÁ" · ting |
| 2:15 | P03 | **TT**: "Xem tập gà rán, chiều nay mình về quê thắp hương cho bà sau năm năm."<br>**TT**: "Xem tập bếp trọ, mình quyết định trả lại tiền cọc cho khách thuê." | "VỀ THẮP HƯƠNG BÀ" · "TRẢ LẠI TIỀN CỌC" · ting ×2 |
| 2:25 | P03 | **TT**: "Xem tập đường cao tốc, từ nay mình không chen làn khẩn cấp nữa." | "HẾT CHEN LÀN" · ting |
| 2:30 | S26 | **MN**: Tao lạnh toát gáy. Chết dở, người xem làm thật, quả này mất điếu cày rồi. | "MẤT ĐIẾU CÀY THẬT?" · im |
| 2:36 | B04 | **TT**: Âm phủ phân biệt rõ: Lộ thiên cơ là dọa cho sợ. Còn đây… là Giáo hóa.<br>**TT**: Kể cho người ta mở túi thả cá, về thắp hương bà, sống tử tế… thì luật không phạt! | "LỘ THIÊN CƠ ≠ GIÁO HÓA" · "KHÔNG PHẠT" · braam |
| 2:50 | S26 | **MN**: Tức là… không tịch thu điếu cày? |  |
| 2:53 | P04 | **TT**: Giấy trắng mực đen, ta làm theo quy chế. Hủy biên bản. Cấp phép mùa hai! | "GIẤY PHÉP MÙA 2" · dong dau cop |
| 3:00 | P02 | **THO**: Quá đỉnh! Ký cho tôi cái quạt mo Ma Nó ơi, ghi tặng fan cứng nhé! | quat mo |
| 3:06 | B04 | **TT**: Điều kiện mùa hai: Không hù dọa, không bịa đặt, không dạy đời. Nhớ lấy. | mõ sắt |
| 3:12 | S33 → S34 | **MN**: Dạy đời thì ma nào xem. Thoát nạn rồi, tao lại rít thuốc. | rit dieu cay · khoi bay |
| 3:18 | S26 → P01 | **MN**: Mà ba tiếng gõ trong tủ lúc nãy… rốt cuộc là ai?<br>**TT**: Kẻ của mùa sau. Hắn đang chờ dưới bến sông. | cộc cộc cộc rất khẽ |
| 3:25 | B04r | **MN**: Tập sau: đại gia đổ bê tông lấn sông làm bể koi, và ba trăm mét vuông đòi nợ của thuồng luồng. | "TẬP SAU" · whoosh |
| 3:32 | S06 | **MN**: Bấm đăng ký đi. Ở lại mùa hai, kẻo nửa đêm tủ thờ… có tiếng gõ đáp lại đấy. | "ĐĂNG KÝ" · mõ CỘC · cộc cộc cộc đáp lại |

## SHORTS
### SH1 — Biên bản cõi âm (TRỌN)
- **MN**: Lại mò vào à? Tám trăm năm cõi âm, lần đầu tao bị đoàn kiểm toán ập tới nhà. (S26) · pop "MA NÓ"
- **MN**: Quay lại thấy ông công chức âm phủ đi xe đạp đã dựng chân chống cạnh bát hương. (B04) · pop "THẦN TRÙNG"
- **TT**: Ma Nó. Bốn mươi tám lần kể chuyện âm ty cho dương gian. Tội danh: tiết lộ thiên cơ. (B04) · pop "TỘI: LỘ THIÊN CƠ"
- **TT**: Hạn định trước khi tàn nén hương. Hình phạt: tịch thu điếu cày, niêm phong mõ, cấm vĩnh viễn. (B04) · pop "TỊCH THU ĐIẾU CÀY"
- **MN**: Tịch thu điếu cày? Thà các ông lấy luôn cái mạng ma của tao đi! (S26) · pop "THÀ LẤY MẠNG"
- *(không lời, 0.8 s)*
- **MN**: Tao cãi lại đoàn kiểm toán thế nào, tao kể ở bản đầy đủ, link dưới. (S34)

### SH2 — Cách chối tội trước công chức âm phủ (TRỌN)
- **MN**: Cách chối tội khi bị đoàn kiểm toán cõi âm sờ gáy. Học Ma Nó. (S01) · pop "MA NÓ"
- **MN**: Một. Bảo người trần chỉ xem tấu hài, nửa đêm vừa húp mì vừa cười khằng khặc. (S26) · pop "XEM ĐỂ TẤU HÀI"
- **TT**: Âm luật vô tư, không nghe giải thích. Có kể là có lộ, đưa điếu cày đây. (B04) · pop "THẦN TRÙNG"
- **MN**: Hai. Lôi ông Thổ Công ra làm chứng sống. (P02) · pop "THỔ CÔNG"
- **THO**: Công nhận… nó kể tấu hài thật cán bộ, tôi ngồi nghe cũng buồn cười. (P02) · pop "FAN CỨNG"
- **TT**: Tấu hài mà lượt xem tăng vọt à? Đưa nốt cái mõ! (B04) · pop "NIÊM PHONG MÕ"
- *(không lời, 0.8 s)*
- **MN**: Mất cả chì lẫn chài hay thoát nạn, tao kể ở bản đầy đủ, link dưới. (S34)

### SH3 — Nước cờ bình luận (TRỌN)
- **MN**: Đừng bao giờ thách thức công chức âm phủ đọc bình luận YouTube. (S26) · pop "MA NÓ"
- **MN**: Tao bảo thần trùng tìm được một câu kêu sợ hay mê tín, tao tự tay bẻ đôi điếu cày! (S26) · pop "NƯỚC LIỀU"
- **TT**: Được. Ta làm theo giấy tờ. Đưa đây, ta rà từng chữ. (B04) · pop "THẦN TRÙNG"
- **MN**: Thần trùng đeo kính lão, lật sột soạt cuộn bình luận dài chạm đất. (P03) · pop "RÀ BÌNH LUẬN"
- **TT**: "Xem tập cá chép, hôm nay mình mở túi bóng rồi mới thả cá." (P03) · pop "MỞ TÚI THẢ CÁ"
- **MN**: Tao lạnh toát gáy. Quả này mất điếu cày thật rồi. (S26) · pop "LẠNH TOÁT GÁY"
- *(không lời, 0.8 s)*
- **MN**: Âm phủ phán quyết tao thế nào, tao kể ở bản đầy đủ, link dưới. (S34)

### SH4 — Fan cứng trên nóc tủ thờ (TRỌN)
- **MN**: Khi Thổ Công nhà bạn là fan cứng kênh kinh dị trào phúng. (P02) · pop "MA NÓ"
- **THO**: Tránh ra để tôi phủi bụi bát hương cái nào. (P02) · pop "THỔ CÔNG"
- **THO**: Tập con cá chép tôi xem ba lần, cười té ghế! (P02) · pop "XEM 3 LẦN"
- **TT**: Ma Nó bốn mươi tám lần kể chuyện âm ty, tịch thu điếu cày, cấm vĩnh viễn! (B04) · pop "THẦN TRÙNG"
- **THO**: Quá đỉnh! Ký cho tôi cái quạt mo Ma Nó ơi, ghi tặng fan cứng nhé! (P02) · pop "XIN CHỮ KÝ"
- **MN**: Điếu cày suýt mất mà ông Thổ Công vẫn xin chữ ký. Đúng là tổ độ. (S26) · pop "TỔ ĐỘ"
- *(không lời, 0.8 s)*
- **MN**: Chuyện đoàn kiểm toán nóc tủ thờ, tao kể ở bản đầy đủ, link dưới. (S34)

### SH5 — Luật âm phủ phân xử (TRỌN)
- **MN**: Luật âm phủ: Kể chuyện ma thế nào thì không bị phạt? (S26) · pop "MA NÓ"
- **TT**: Ma Nó kể bốn mươi tám câu chuyện âm ty cho dương gian nghe. (B04) · pop "THẦN TRÙNG"
- **TT**: Âm phủ phân biệt rõ: Lộ thiên cơ là dọa cho sợ. Còn đây… là Giáo hóa. (B04) · pop "LỘ THIÊN CƠ ≠ GIÁO HÓA"
- **TT**: Kể cho người ta mở túi thả cá, về thắp hương bà, sống tử tế… thì luật không phạt! (B04) · pop "KHÔNG PHẠT"
- **TT**: Hủy biên bản. Cấp phép mùa hai! (P04) · pop "CẤP PHÉP MÙA 2"
- **MN**: Kể chuyện ma mà người ta sống tử tế hơn, thì ma cũng có giấy phép hành nghề. (S34) · pop "GIẤY PHÉP HÀNH NGHỀ"
- *(không lời, 0.8 s)*
- **MN**: Bản kiểm toán cõi âm chi tiết, tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 — Tiếng gõ đáp lại (TRAILER)
- **MN**: Bốn mươi tám tập tao gõ mõ, chưa ai dám gõ lại. Hôm nay có. (S01) · pop "MA NÓ"
- *(không lời, 1.2 s)* (P01) · cộc… cộc… cộc…
- **MN**: Tiếng gõ ngay dưới mông tao, vọng từ trong cánh tủ thờ. (S26) · pop "AI TRONG TỦ?"
- **TT**: Không phải trong tủ. Ta đứng đằng sau. (B04) · pop "THẦN TRÙNG"
- **MN**: Quay lại thấy ông công chức âm phủ đi xe đạp đã dựng chân chống cạnh bát hương. (B04) · pop "ĐOÀN KIỂM TOÁN"
- **TT**: Hạn định trước khi tàn nén hương. Hình phạt: tịch thu điếu cày, cấm vĩnh viễn. (B04) · pop "TỊCH THU ĐIẾU CÀY"
- **MN**: Ai đang gõ trong tủ, và Ma Nó có giữ được điếu cày? Bản đầy đủ, link dưới. (S34)

### SH7 — Dấu vết bình luận (TRAILER)
- **TT**: Ngươi bảo không ai tin? Thế những dòng bình luận này là gì? (B04) · pop "THẦN TRÙNG"
- **TT**: "Hôm nay mình mở túi bóng rồi mới thả cá." (P03) · pop "MỞ TÚI THẢ CÁ"
- **TT**: "Chiều nay mình về quê thắp hương cho bà sau năm năm." (P03) · pop "VỀ THẮP HƯƠNG BÀ"
- **MN**: Khói từ điếu cày trên tay tao… lần đầu tiên, đứng bất động giữa không trung. (S26) · pop "MA NÓ"
- **MN**: Tao lạnh toát gáy. Người xem làm thật, quả này mất điếu cày rồi. (S26) · pop "MẤT ĐIẾU CÀY?"
- **MN**: Phán quyết cuối cùng của cõi âm là gì? Bản đầy đủ, link dưới. (S34)

## Hình
Tận dụng: B02 + ep01 S01, S06, S26, S33, S34 (Ma Nó, nóc tủ thờ, CTA), B04, B04r (Thần trùng P02/P10).

### Vẽ mới (từ v2, v3 sử dụng toàn bộ 4 ảnh)
| Mã | Cảnh | Trạng thái v3 |
|---|---|---|
| P01 | Cận cánh tủ thờ gỗ cũ ngay dưới chỗ Ma Nó ngồi, vân gỗ, khe cửa tối | Sử dụng (LONG, SH6) |
| P02 | Ông Thổ Công: béo tròn, áo vàng sờn, quạt mo, râu bạc, mặt hóm, bước ra từ bát hương trên nóc tủ thờ; bản chìa quạt xin chữ ký | Sử dụng (LONG, SH2, SH4) |
| P03 | Màn hình điện thoại cuộn bình luận (trống chữ để dựng), ánh sáng xanh trong bóng tối | Sử dụng (LONG, SH3, SH7) |
| P04 | Cận tờ giấy âm phủ ngả vàng đóng dấu son đỏ (trống chữ), đặt cạnh điếu cày và cái mõ | Sử dụng (LONG, SH5) |

## Lịch
- LONG: Thứ Năm 06/05 18:00 (+07)
- SH1: Thứ Năm 06/05 19:00 (+07)
- SH2: Thứ Sáu 07/05 11:30 (+07)
- SH3: Thứ Sáu 07/05 19:00 (+07)
- SH4: Thứ Bảy 08/05 11:30 (+07)
- SH5: Thứ Bảy 08/05 19:00 (+07)
- SH6: Chủ Nhật 09/05 11:30 (+07)
- SH7: Chủ Nhật 09/05 19:00 (+07)
- TẬP SAU (P49 — Thuồng luồng "Mét vuông đổi mét vuông"): Thứ Hai 10/05 18:00 (+07)
