# Dự án 87 — Trống trường "Tùng tùng tùng, tan học" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá kịch tính**: Vi mô là hạn 21:00 mỗi tối; vĩ mô là hạn chót kỳ thi thử đợt một (30 ngày). Nếu trượt cam kết, cô Diễm phải đền cọc 3 tỷ cho 30 phụ huynh; còn với bác Cường, nếu lò luyện thi thâu đêm thắng thế thì 40 năm giữ kỷ cương trường học của bác thành vô nghĩa.
- **3 nấc leo thang chủ động**: (1) Trống điểm tắt điện, cô mất tiếng → cô sắm máy phát điện và micro trợ giảng; (2) Micro rú rít, cô chuyển sang thu sẵn 5 tiếng bài giảng vào máy cassette → băng phát ra toàn tiếng trống, học sinh ngủ say; (3) Nước liều: phụ huynh dọa rút cọc, cô Diễm xích khóa chiếc trống nhốt vào kho tối, thuê thầy giáo dạy thay tới sáng.
- **Điểm thấp nhất & Cú lật do nhân vật chọn và trả giá**: 20:59 chiếc trống bị nhốt im lìm, cô Diễm tưởng thắng. Đúng 21:00, cái dùi ngoài sảnh tự nâng lên gõ chan chát vào loa trường khuếch đại gấp mười lần; cô Diễm và thầy giáo cùng câm bặt. Luật bác Cường không hề bị phá: "Chín giờ mà đèn lớp còn sáng thì đánh."
- **Cold open không lộ đáp án**: Không báo trước tiếng trống ma, chỉ mở bằng tiếng quạt trần, tiếng lật vở lúc đêm khuya và câu hỏi rợn người của Ma Nó.
- **Kết trào phúng chuẩn bible**: Cô Diễm thấy học sinh ngủ đủ đỗ thủ khoa liền chớp cơ hội đổi biển hiệu thành "Cam kết ngủ đủ vẫn đỗ" và tăng giá 20%, phụ huynh lại tranh nhau nộp tiền.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Liệu cô Diễm có ép được ba mươi đứa trẻ cày đêm đến sáng để giữ món tiền cọc trăm triệu, hay cái trống trường bốn mươi năm của bác bảo vệ già sẽ bắt cả lò luyện thi tan học đúng chín giờ?
- **Đồng hồ / Cái giá**: Hạn chót chín giờ tối mỗi đêm và kỳ thi thử chuyên đợt một. Cô Diễm đối mặt nguy cơ đền ba tỷ tiền cọc; bác Cường đứng trước nguy cơ kỷ cương bốn mươi năm bị phá vỡ.
- **3 nấc leo thang**:
  1. Trống tự vang, mất điện, mất tiếng → Cô Diễm sắm máy phát điện và micro trợ giảng.
  2. Micro rú rít nổ đốp, mất tiếng tiếp → Cô Diễm thu bài giảng vào cassette phát thâu đêm; băng chỉ chạy ra tiếng trống.
  3. Đêm áp chót, phụ huynh dọa rút cọc → Cô Diễm thuê thợ xích khóa cái trống nhốt vào kho, thuê thầy dạy thay đến hai giờ sáng.
- **Điểm thấp nhất**: 20:59, chiếc trống bị xích kín trong kho tối không tiếng động. Ba mươi đứa trẻ kiệt sức gục đầu, cô Diễm đắc thắng bắt học tiếp.
- **Cú lật**: 21:00, trong kho im lìm nhưng chiếc dùi ngoài sảnh tự bay lên gõ vào loa trường. Cả thầy và cô cùng nghẹn họng tắt tiếng, đèn phụt tắt. Học sinh được ngủ đủ đỗ thủ khoa; cô Diễm không hối cải mà đổi slogan tăng học phí.
- **Khoảnh khắc rợn duy nhất**: Chín giờ tối, trống da giữa sân trường cũ tự vang ba hồi Tùng... Tùng... Tùng... Đèn sân bật sáng soi rõ chiếc dùi vẫn treo im trên móc gỗ, quanh giá trống không một bóng người. Cô Diễm mở miệng trên bục giảng, không một âm thanh nào thoát ra.
- **Câu kết**: "Bác Cường gõ trống thêm mười năm người ta mới hiểu: muốn học vào thì trước hết phải ngủ."

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (Host) | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| DIEM | Cô Diễm (Chủ lò luyện thi) | T03, T04 | Ngọc Huyền | `atempo=1.05` |
| CUONG | Bác Cường (Bảo vệ đánh trống) | T06, T07 | Thiền Tâm Đức | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:40:0.2` |
| PH | Chị Hạnh (Phụ huynh) | T05 | Trúc Ly | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "DIEM": {"preset": "Ngọc Huyền", "fx": "atempo=1.05"}, "CUONG": {"preset": "Thiền Tâm Đức", "fx": "asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:40:0.2"}, "PH": {"preset": "Trúc Ly", "fx": "anull"}}
```

## LONG (576 chữ lời thoại, dựng ≈ 3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | T01 | *(không lời, 2.0 s)* | quạt trần xa · "TRƯỜNG CŨ · 21:00" |
| 0:02 | S01 | **MN**: Lại mò vào à? Hồi đi học mày cày thêm đến mấy giờ? Có trung tâm bắt học đến mười một giờ đêm, bảy tối một tuần. | mõ CỘC · "7 TỐI / TUẦN" |
| 0:10 | S26 | **MN**: Cho đến một hôm, có tiếng trống lạ bắt cả lò phải tan. | braam · "TIẾNG TRỐNG LẠ" |
| 0:14 | T03 | **MN**: Cô Diễm mở trung tâm Cam kết đỗ chuyên, thuê ngôi trường cấp hai cũ bỏ hoang mười năm. Ba mươi đứa trẻ học từ sáu giờ tối đến mười một giờ đêm. | tiếng phấn cào bảng |
| 0:24 | T04 | **DIEM**: Ngủ là thua! Khóa này một trăm triệu, đứa nào trượt chuyên cô đền gấp đôi! | "NGỦ LÀ THUA!" |
| 0:30 | T05 | **PH**: Cả gia tài đấy. Thôi ráng thức, đỗ chuyên là đổi đời con ạ. | ting · "100 TRIỆU / KHÓA" |
| 0:35 | T03 | **MN**: Năm tiếng một tối, cày thông tuần. Đứa nào mắt cũng thâm quầng như gấu trúc. | tiếng ngáp dài |
| 0:41 | T06 | **MN**: Ngày trường còn mở, có bác Cường bảo vệ gõ trống bốn mươi năm. Cứ đúng chín giờ tối là đánh ba hồi tan học, không sai một phút. | "BÁC CƯỜNG · 40 NĂM" · trống xưa xa |
| 0:50 | T07 | **CUONG**: Trống đánh là về! Trẻ con phải ngủ đủ mới sáng mắt sáng lòng. | eecho trầm |
| 0:55 | T01 | **MN**: Bác mất rồi, cái trống da vẫn treo ở sảnh. Người xưa bảo: kẻ giữ nghiệp thì thác xuống vẫn giữ. Chín giờ mà đèn lớp còn sáng, thì trống điểm. | "9 GIỜ · ĐÈN CÒN SÁNG THÌ ĐÁNH" |
| 1:06 | T03 | **MN**: Chín giờ tối. Ba mươi đứa học sinh rũ rượi ngủ gục trên bàn. Cô Diễm vẫn đập thước giảng bài. | thước gõ "chát chát" · nhạc tắt |
| 1:13 | T02 | **MN**: Bỗng ngoài sân tối, cái trống da tự rung lên. Tùng! Tùng! Tùng! Ba hồi trống rền vang. | trống "TÙNG TÙNG TÙNG" rền vang |
| 1:21 | T08 | **MN**: Đèn sân bật sáng. Dùi trống treo im trên giá. Quanh trống không một bóng người. | "DÙI TREO IM" · im lặng rợn |
| 1:27 | T04 | **DIEM**: Đứa nào nghịch đấy? Cả lớp học tiếp! | tiếng micro rít |
| 1:30 | T04 | **MN**: Cô Diễm mở miệng giảng bài. Không một âm thanh nào phát ra. Cả lớp phụt tắt điện. Cô đành phẩy tay cho về. | phụt tắt · im phăng phắc |
| 1:40 | T03 | **MN**: Sáng ra, giọng cô lại trong veo. Phụ huynh dọa đòi tiền cọc vì thiếu giờ học, tối hôm sau cô Diễm sắm ngay máy nổ và micro trợ giảng. | tiếng máy nổ "tạch tạch" |
| 1:50 | T04 | **DIEM**: Chín giờ tối nay cấm đứa nào về! | loa phóng thanh |
| 1:53 | T01 | **MN**: Đúng chín giờ, trống lại tự điểm. Micro của cô rú rít rồi nổ đốp, cổ họng cô lại nghẹn đắng. | "ĐỐP!" · micro rè tắt |
| 2:00 | T09 | **MN**: Cô Diễm không chịu thua. Tối sau, cô thu sẵn bài giảng vào máy casset, bấm phát rồi đứng chỉ bảng. | casset lách cách |
| 2:08 | T09 | **MN**: Chín giờ, casset chạy rè rè rồi phát ra toàn tiếng trống. Lũ trẻ ngả đầu xuống bàn, ngủ say như chết. | tiếng trống trong băng rè · tiếng ngáy |
| 2:16 | T05 | **MN**: Đêm áp chót trước kỳ thi thử. Phụ huynh dọa rút cọc ba tỷ. Cô Diễm phát điên làm liều. | "ĐÒI 3 TỶ TIỀN CỌC!" |
| 2:23 | T04 | **DIEM**: Khóa xích cái trống vứt vào kho! Tôi thuê thầy dạy thay, cày đến hai giờ sáng! | tiếng xích sắt loảng xoảng |
| 2:30 | T01 | **MN**: Cái trống bị nhốt sau ba lớp khóa. Tám giờ năm mươi chín phút, sân trường im phăng phắc. Lũ trẻ kiệt sức gục đầu trên vở. | tick tick đồng hồ |
| 2:39 | T03 | **DIEM**: Trống câm rồi! Thầy dạy tiếp đi! | tiếng thở dốc |
| 2:42 | T08 | **MN**: Đúng chín giờ. Trong kho im lìm, nhưng cái dùi ngoài sảnh bỗng tự bay lên, gõ chan chát vào loa trường. Tiếng trống vang rền cả dãy nhà. Thầy giáo há miệng, nghẹn đặc tắt tiếng. | "BOONG! TÙNG! TÙNG!" cực lớn |
| 2:54 | T07 | **CUONG**: Trống đánh là tan! Không ai được cãi! | bassdown cực trầm |
| 2:58 | T10 | **MN**: Đèn lớp vụt tắt. Lũ trẻ ùa ra cổng trong đêm. | trẻ reo hò · tiếng xe máy |
| 3:02 | T11 | **MN**: Ba tháng sau có điểm thi thử. Nhờ tối nào cũng được ngủ đủ từ chín giờ, cả lớp đều đỗ thủ khoa. | "CẢ LỚP ĐỖ THỦ KHOA" |
| 3:10 | T05 | **PH**: Thần kỳ quá! Con tôi đỗ chuyên rồi! | cười rạng rỡ |
| 3:13 | T04 | **DIEM**: Đổi biển hiệu ngay: Cam kết ngủ đủ vẫn đỗ! Tăng học phí hai mươi phần trăm! | ting ting · "TĂNG 20% HỌC PHÍ" |
| 3:20 | T01 | **MN**: Bác Cường gõ trống thêm mười năm người ta mới hiểu: muốn học vào thì trước hết phải ngủ. | khói thuốc lào xa |
| 3:27 | B02 | **MN**: Thứ Năm: một nhà hàng hải sản ven biển chặt chém khách du lịch: con ghẹ năm triệu, đĩa ốc ba triệu. Biển ấy có một bà bán ốc… bán đúng giá bốn mươi năm. | whoosh · "TẬP SAU · THỨ NĂM" |
| 3:39 | S06 | **MN**: Bấm đăng ký đi. Rồi đi ngủ. Chín giờ rồi đấy. | chữ "ĐĂNG KÝ" · mõ CỘC |

## SHORTS

### SH1 (TRỌN)
- **MN**: Trường bỏ hoang mười năm, chín giờ tối trống bỗng tự vang. (T01) · pop "TRỐNG TỰ VANG"
- **MN**: Cô Diễm mở lò luyện thi, ép học sinh học từ sáu giờ tối đến mười một giờ đêm. (T03)
- **DIEM**: Ngủ là thua! Khóa này một trăm triệu, đứa nào trượt chuyên cô đền gấp đôi! (T04)
- **MN**: Đúng chín giờ, ngoài sân trống da tự giục ba hồi. Đèn sân sáng rực, dùi treo im trên giá. (T08)
- **MN**: Cô Diễm mở miệng định mắng. Không ra một tiếng nào. Cả lớp phụt tắt điện. (T04)
- *(lặng 0.8 s)*
- **MN**: Bác bảo vệ đã mất bốn mươi năm đuổi học trò về ngủ. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRỌN)
- **MN**: Bí quyết đỗ trường chuyên một trăm triệu: Cấm được ngủ! (T04) · pop "CẤM NGỦ"
- **MN**: Ba mươi đứa trẻ học mười một giờ đêm mới về, sáng sáu giờ đã đi học. (T03)
- **PH**: Cả gia tài đấy. Thôi ráng thức, đỗ chuyên là đổi đời con ạ. (T05)
- **CUONG**: Trống đánh là về! Trẻ con phải ngủ đủ mới sáng mắt sáng lòng. (T07) · pop "BÁC CƯỜNG · BẢO VỆ ĐÁNH TRỐNG"
- **MN**: Chín giờ trống trường tự giục, bà chủ lò thi câm bặt tới sáng, trẻ con được thả về giường. (T10)
- *(lặng 0.8 s)*
- **MN**: Muốn đỗ chuyên thì phải ngủ. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 (TRỌN)
- **MN**: Khi bà chủ lò luyện thi mang máy nổ đấu với con ma trường cũ. (T04) · pop "MÁY NỔ ĐẤU MA"
- **MN**: Bị mất điện mất tiếng lúc chín giờ, hôm sau cô Diễm sắm ngay máy nổ với micro trợ giảng. (T03)
- **DIEM**: Mất điện thì cô dùng máy nổ! Chín giờ tối nay ai về cô trừ điểm! (T04)
- **MN**: Đúng chín giờ, trống ngoài sân lại tự rung ba hồi tan học. (T01)
- **MN**: Micro trợ giảng rú rít rồi nổ đốp, cổ họng cô Diễm lại nghẹn đắng câm bặt. (T04)
- *(lặng 0.8 s)*
- **MN**: Đấu với ai chứ đấu với bác bảo vệ giữ trường bốn mươi năm thì chỉ có thua. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 (TRỌN)
- **MN**: Chiêu lách luật đỉnh cao của cô giáo luyện thi ép học đêm. (T04) · pop "CHIÊU LÁCH LUẬT"
- **DIEM**: Mất tiếng thì cô thu âm sẵn năm tiếng bài giảng vào máy casset! (T09)
- **MN**: Cô bấm phát băng rồi đứng vung thước chỉ bảng, quyết cày đến mười một giờ đêm. (T03)
- **MN**: Chín giờ vừa điểm, máy casset chạy rè rè rồi phát ra toàn tiếng trống tùng tùng tùng. (T09)
- **MN**: Ba mươi đứa trẻ ngả đầu xuống bàn, lăn ra ngủ say như chết. (T03)
- *(lặng 0.8 s)*
- **MN**: Bác bảo vệ không cho học thì máy giời cũng phải tắt. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN)
- **MN**: Lò luyện thi một trăm triệu bị ma đuổi về lúc chín giờ, kết cục ra sao? (T11) · pop "KẾT CỤC BẤT NGỜ"
- **PH**: Trăm triệu một khóa mà chín giờ tối đã đuổi về! Trả lại tiền cọc! (T05)
- **MN**: Phụ huynh chưa kịp đòi tiền thì có điểm thi thử. (T11)
- **MN**: Suốt ba tháng được ngủ đủ giấc từ chín giờ, cả ba mươi đứa đều đỗ thủ khoa. (T10)
- **DIEM**: Đổi biển hiệu ngay: Cam kết ngủ đủ vẫn đỗ! Tăng học phí hai mươi phần trăm! (T04)
- *(lặng 0.8 s)*
- **MN**: Không ai thức tỉnh sến sẩm đâu, tiền vẫn là trên hết. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 (TRAILER)
- **MN**: Đêm áp chót trước kỳ thi thử, bà chủ lò luyện thi quyết một mất một còn với chiếc trống ma. (T04) · pop "NƯỚC LIỀU"
- **PH**: Đêm nay không học bù thì trả lại ba tỷ tiền cọc! (T05)
- **DIEM**: Khóa xích cái trống lại, vứt vào kho! Hôm nay tao thuê thầy dạy thay, học đến hai giờ sáng! (T04)
- **MN**: Chiếc trống bị khóa sau ba lớp cửa sắt. Tám giờ năm mươi chín phút, sân trường im phăng phắc. (T01)
- **DIEM**: Trống câm rồi! Thầy dạy tiếp đi! (T03)
- **MN**: Đúng chín giờ, chiếc dùi trên giá ngoài sảnh bỗng tự bay lên không trung... (T08)
- **MN**: Cánh cửa kho có giam nổi chiếc trống bốn mươi năm? Bản đầy đủ, link dưới. (S26)

### SH7 (TRAILER)
- **MN**: Hồ sơ bác Cường: Người bảo vệ đánh trống bốn mươi năm, thác xuống vẫn giữ cổng trường. (T06) · pop "BÁC CƯỜNG · BẢO VỆ ĐÁNH TRỐNG"
- **CUONG**: Trống đánh là về! Trẻ con phải ngủ. (T07)
- **MN**: Trường giải thể mười năm, nhưng hễ chín giờ tối mà đèn lớp còn sáng, trống sẽ tự điểm ba hồi. (T01)
- **MN**: Dứt tiếng trống, người đứng trên bục giảng sẽ lập tức mất tiếng, điện phụt tắt. (T04)
- **MN**: Nhưng nếu có kẻ đem xích sắt khóa chặt chiếc trống vào hầm tối... (T08)
- **MN**: Liệu tiếng trống tan học có còn vang lên? Bản đầy đủ, link dưới. (S26)

## Hình
Tận dụng: B02 + ep01 S01/S06/S26/S33/S34 (Ma Nó).

### Ảnh vẽ mới (11 ảnh 16:9 từ v2, v3 dùng trọn bộ 11/11):
| Mã | Trạng thái v3 | Cảnh |
|---|---|---|
| T01 | [DÙNG] | Sảnh có mái che của trường cấp hai cũ ban đêm, cái trống da to trên giá gỗ, đèn sân; bản cuối ông Cường mờ ngồi cạnh trống |
| T02 | [DÙNG] | Cận mặt trống da khẽ rung trong bóng tối |
| T03 | [DÙNG] | Lớp học đêm trong trường cũ: ba mươi học sinh lớp 9 gà gật, đèn tuýp, cô Diễm đứng bục; bản thầy dạy thay |
| T04 | [DÙNG] | Cô Diễm cận: áo dài công sở, kính, micro cài; bản mở miệng không ra tiếng, bản vỗ micro, bản nhìn bảng điểm |
| T05 | [DÙNG] | Chị Hạnh phụ huynh cận: chuyển khoản; bản bức xúc; bản cười |
| T06 | [DÙNG] | Ảnh màu cũ: bác bảo vệ già đánh trống trường, học sinh ùa ra cổng |
| T07 | [DÙNG] | Bác Cường mờ: áo bảo vệ cũ bạc màu, mũ, dùi trống, đứng cạnh trống |
| T08 | [DÙNG] | Cận cái dùi trống treo im trên móc gỗ, đèn sân soi rõ, không ai |
| T09 | [DÙNG] | Cận máy cassette cũ phát băng trên bàn giáo viên |
| T10 | [DÙNG] | 9 giờ tối: học sinh ùa ra cổng trường cũ, phụ huynh đón xe máy |
| T11 | [DÙNG] | Bảng điểm thi thử dán tường (trống số) |

## Lịch
| Định dạng | Ngày đăng | Giờ (+07) | Ghi chú |
|---|---|---|---|
| LONG | Thứ Hai 20/09 | 18:00 | Bản chuẩn 576 chữ ≈ 3:00 |
| SH1 | Thứ Hai 20/09 | 19:00 | TRỌN: Trường bỏ hoang mà trống kêu |
| SH2 | Thứ Ba 21/09 | 11:30 | TRỌN: Cấm ngủ |
| SH3 | Thứ Ba 21/09 | 19:00 | TRỌN: Máy nổ đấu ma |
| SH4 | Thứ Tư 22/09 | 11:30 | TRỌN: Chiêu lách luật cassette |
| SH5 | Thứ Tư 22/09 | 19:00 | TRỌN: Kết cục bất ngờ |
| SH6 | Thứ Năm 23/09 | 11:30 | TRAILER: Nước liều nhốt trống |
| SH7 | Thứ Năm 23/09 | 19:00 | TRAILER: Hồ sơ bác Cường bảo vệ |
| P88 LONG | Thứ Năm 23/09 | 18:00 | Tập sau: Bà bán ốc "Đi đâu cũng bị chém" |
