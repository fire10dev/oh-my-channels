# Dự án 61 — Giám thị thứ ba "Bút không ra mực" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá rõ ràng**: Hạn chót 45 phút cuối của môn thi Ngữ văn tốt nghiệp. Cái giá đặt lên Nam (nguy cơ điểm liệt/trượt 12 năm đèn sách nếu cố bám vào đáp án lừa) và kẻ xấu (bà mẹ mất 50 triệu, nhóm lừa đảo bị bắt), không đe dọa tổn thương thể xác học sinh.
- **Cold open treo câu hỏi, không lộ đáp án**: Mở đầu bằng tiếng quạt trần, ve sầu và lời thì thầm đếm giám thị; giấu hoàn toàn chi tiết ngòi bút tắc mực và đề thi giả.
- **Bỏ Ma Nó báo trước**: Bỏ các câu dẫn mớm tình tiết của Ma Nó, chuyển toàn bộ nhịp kịch tính vào hành động chủ động của thí sinh trong phòng thi.
- **3 nấc leo thang & Điểm thấp nhất**: Nam cố chép văn mẫu 50 triệu → bút tắc ngòi → đổi 3 cây bút đều tắc khi đụng bài mua nhưng viết lề vẫn ra mực → điểm thấp nhất khi đồng hồ chỉ 45 phút, giấy trắng tinh, mồ hôi ướt trán và tiếng bút gõ sau gáy bàn trống.
- **Cú lật do nhân vật CHỌN và TRẢ GIÁ**: Nam chủ động gạt bỏ tờ phao 50 triệu của mẹ, chấp nhận rủi ro chạy đua thời gian bằng kiến thức tự học. Thầy Viên không làm bài hộ mà chỉ khóa cửa gian lận ("Viết cái con đã học").
- **Kết châm biếm theo bible**: Mẹ xót 50 triệu tiếc con xe máy, Ma Nó chốt hạ thói sính mua đề và đề xuất thầy Viên "chạy sô" cả tỉnh.

## Xương sống kịch tính
- **Câu hỏi kịch tính trung tâm**: Khi bộ đề mua 50 triệu là cú lừa và cây bút bị vị giám thị thứ ba khóa ngòi đáp án gian lận, Nam sẽ chọn nộp giấy trắng hay đánh cược số phận vào chính mình trước 45 phút còn lại của phòng thi?
- **Đồng hồ + cái giá**: 45 phút cuối cùng trước tiếng trống thu bài; nếu không viết được sẽ trượt tốt nghiệp THPT, nhưng nếu chép đề giả sẽ dính điểm liệt.
- **3 nấc leo thang chủ động**:
  - Nấc 1: Mở đề thấy lệch, Nam hoảng loạn cố chép bài văn mẫu thuộc lòng 50 triệu → Ngòi bút cào rách mép giấy, khô khốc không ra giọt mực.
  - Nấc 2: Nam tưởng bút hỏng, vạch ra lề bàn thì mực tuôn êm ru; đổi sang 2 cây bút khác, cứ chạm vào dòng văn mẫu mua là tắc tịt → Sau gáy phả hơi lạnh, tiếng bút đỏ gõ mặt bàn cộc cộc dù bàn sau bỏ trống.
  - Nấc 3 (Nước liều): 45 phút cuối, Nam quyết định quẳng sạch xấp văn mẫu ra khỏi đầu, hạ bút tự viết bằng 1 năm thức khuya dậy sớm tự ôn → Bút chảy mực trơn tru, chạy đua với từng nhịp đồng hồ.
- **Điểm thấp nhất**: Giữa phòng thi lặng phắc, mồ hôi đầm đìa, 3 cây bút đều trơ lì, giấy trắng trơn, Nam tuyệt vọng nhận ra tờ phao đắt đỏ của mẹ là vô giá trị: "Còn bốn mươi lăm phút… Mình trượt thật sao?".
- **Cú lật (ai chọn gì, trả giá gì)**: Nam CHỌN từ bỏ sự gian dối để tự chịu trách nhiệm về tương lai mình; TRẢ GIÁ bằng việc dốc toàn lực trong 45 phút ngắn ngủi chấp nhận điểm số thực lực. Thầy Viên chỉ giữ kỷ cương trường thi, không cứu kẻ lười biếng.
- **Khoảnh khắc rợn duy nhất**: Bút cào giấy khô khốc nhưng lia ra lề thì mực đen nhánh tuôn trào; ngay sau đó luồng hơi lạnh phả sau gáy cùng tiếng bút đỏ gõ "cộc… cộc" trên mặt bàn trống phía sau, trong khi hai giám thị thật đang đứng tận bục giảng.
- **Câu kết**: Bà mẹ tiếc 50 triệu đủ mua xe ga, công nhận may mà con không nghe lời mình; Ma Nó châm biếm thứ thật duy nhất trong nhà lại bị nghi ngờ.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (Host) | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| HANH | Bà Hạnh (mẹ Nam, lo xa, sính mua đề) | G03, G04, G10 | Ngọc Huyền | `atempo=1.05` |
| NAM | Nam (thí sinh 18 tuổi, chăm học, áp lực) | G01, G02, G05, G08, G10 | Adam bựa | `asetrate=48000*1.04,aresample=48000` |
| VIEN | Thầy Viên (giám thị cũ nghiêm nghị) | G06, G07 | Thiền Tâm Đức | `atempo=0.90,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "HANH": {"preset": "Ngọc Huyền", "fx": "atempo=1.05"}, "NAM": {"preset": "Adam bựa", "fx": "asetrate=48000*1.04,aresample=48000"}, "VIEN": {"preset": "Thiền Tâm Đức", "fx": "atempo=0.90,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25"}}
```

## LONG (577 chữ lời thoại, dựng ≈ 3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | G01 | *(không lời, 2.4 s)* | "PHÒNG THI SỐ 12" · quạt trần · ve sầu |
| 0:02 | G01 | **VIEN**: Trường thi có hai giám thị. Đếm xem ai đứng sau lưng. | nhạc tắt |
| 0:06 | S01 → S26 | **MN**: Lại mò vào à? Mùa thi rồi. Bà mẹ trong chuyện vừa bỏ năm mươi triệu mua bộ đề thi lộ. | "BỘ ĐỀ 50 TRIỆU" · coc · braam |
| 0:12 | S26 | **MN**: Cam kết trúng chín mươi phần trăm. Nhưng phòng thi hôm ấy lại có thêm một giám thị… đã mất từ lâu. | "GIÁM THỊ THỨ BA" |
| 0:18 | G03 → G04 | **HANH**: Năm mươi triệu là rẻ! Trượt tốt nghiệp là mất cả đời. Cấm cãi, học thuộc từng chữ cho mẹ! | "50 TRIỆU = ĐỖ?" · ting |
| 0:24 | G05 | **NAM**: Con đã thức trắng cả năm tự ôn mà mẹ… |  |
| 0:27 | G04 | **HANH**: Ôn thì ai chả ôn? Thuộc đề bán mới chắc ăn! | "THUỘC MỚI CHẮC" |
| 0:30 | S26 | **MN**: Nam ôn ba trăm sáu mươi ngày. Nhưng mẹ nó tin năm mươi triệu mua trên mạng hơn một năm của con mình. | "1 NĂM < 50 TRIỆU" · bassdown |
| 0:37 | G06 | **MN**: Trường huyện xưa có thầy Viên, ba mươi năm coi thi nghiêm nhất vùng. Thí sinh liếc ngang, thầy chỉ gõ bút đỏ hai nhịp. Cả phòng lạnh sống lưng. | "THẦY VIÊN · 30 NĂM COI THI" · cộc cộc |
| 0:47 | G06 → G07 | **MN**: Dân gian bảo trường thi là đất thiêng. Thầy Viên mất rồi, nhưng mùa thi nào cũng về một phòng. Luật của thầy: gian lận, trời không cho qua. | "LUẬT: GIAN LẬN → TRỜI KHÔNG CHO" |
| 0:57 | G01 | **MN**: Ngày thi tốt nghiệp. Phòng mười hai. Môn Ngữ văn. Trống trường điểm, giám thị phát đề. | trống trường · lật đề |
| 1:02 | G08 → G05 | **NAM**: Không… Không trúng chữ nào cả! | "LỆCH ĐỀ!" · nhạc tắt |
| 1:05 | G08 | **MN**: Đề mua là đề giả. Nhóm lừa đảo bán cùng một bộ cho hàng trăm người. Nam hoảng loạn. Phản xạ duy nhất: cố chép bài văn mẫu năm mươi triệu cho đỡ sợ. | "ĐỀ MUA = ĐỀ GIẢ" · tim đập |
| 1:16 | G02 | **MN**: Ngòi bút cào trên giấy sột soạt, không ra một giọt mực. | "BÚT TỊT MỰC" · xẹt xẹt |
| 1:20 | G02 | **MN**: Nam lắc bút, lia ra lề: mực đen tuôn trơn tru. Đặt lại vào dòng chép bài mua: ngòi trơ lì như đá. | "LỀ RA MỰC · BÀI KHÔ KHỐC" |
| 1:27 | G02 → G05 | **MN**: Đổi bút thứ hai, thứ ba, cứ đụng đáp án mua là tắc tịt. Nam toát mồ hôi hột. | "3 CÂY BÚT · ĐỀU TẮC" · tick |
| 1:33 | G01 → G07 | **MN**: Sau gáy phả một luồng hơi lạnh ngắt. Tiếng bút đỏ gõ nhẹ lên mặt bàn sau lưng hai nhịp. Cộc. Cộc. | cộc cộc · im 1.5 s |
| 1:40 | G07 → G01 | **MN**: Nam ngoái lại: bàn sau trống trơn. Hai giám thị thật đang đứng tận bục giảng. | "BÀN SAU TRỐNG" |
| 1:45 | G05 | **NAM**: Còn bốn mươi lăm phút… Mình trượt thật sao? | "CÒN 45 PHÚT" · bassdown |
| 1:48 | G07 | **VIEN**: Viết cái con đã học. | thì thầm · cộc |
| 1:51 | G05 → G08 | **MN**: Giọng thì thầm thoảng qua tai. Ngồi chờ chết với tờ đề giả hay đánh cược bằng thực lực, Nam gạt bay xấp bài mẫu ra khỏi đầu. | "GẠT BỎ BÀI MẪU" |
| 2:01 | G02 | **MN**: Cậu hạ bút, viết từ những trang sách mình từng thức trắng đêm tự học. |  |
| 2:06 | G02 | **MN**: Lạ kỳ thay, ngòi bút lướt êm ru. Mực tuôn xối xả. Biết đến đâu viết sâu đến đấy, quên thì bỏ qua, chạy đua với từng tiếng tích tắc của đồng hồ. | "MỰC CHẢY ĐỀU" · bút viết trơn |
| 2:16 | G09 | **MN**: Bàn bên, mấy đứa khác cũng mua đề, đang say sưa chép đáp án giả. Bút chúng nó ra mực ầm ầm. Thầy Viên chỉ khóa ngòi đứa mẹ không tin. | "BÀN BÊN CHÉP ĐỀ GIẢ" |
| 2:26 | G10 | **MN**: Ngày báo điểm, Nam đỗ. Không điểm mười chói lọi, nhưng là điểm thật của chính cậu. | "NAM ĐỖ" · ting |
| 2:32 | G04 | **MN**: Cùng ngày, đường dây bán đề lộ bị công an hốt trọn. Hàng trăm thí sinh chép văn mẫu giả ăn trọn điểm liệt, trượt tốt nghiệp. | "TRIỆU TẬP ĐƯỜNG DÂY" · còi |
| 2:40 | G04 → G10 | **HANH**: Năm mươi triệu của tôi… Đủ mua con xe máy cho nó đi học! May mà thằng này không nghe mẹ! | "TIẾC CON XE MÁY" |
| 2:46 | S33 → S34 | **MN**: Thứ thật duy nhất trong nhà, bà mẹ lại không dám tin. Năm sau khéo thầy Viên phải chạy sô coi thi cả tỉnh mới xuể. | "CHẠY SÔ COI THI" · rít điếu |
| 2:52 | B02 | **MN**: Tập sau: một tiệm sửa xe đêm nào cũng rải đinh kiếm khách. Con đường ấy có ông xe thồ cũ… chưa từng thủng săm lần nào. | "TẬP SAU" · whoosh |
| 2:57 | S06 | **MN**: Bấm đăng ký đi. Không thì mùa thi tới, vào phòng nhớ ngoái lại xem ai đang gõ bút sau gáy mày. | "ĐĂNG KÝ" · coc |

## SHORTS (5 TRỌN + 2 TRAILER)

### SH1 — Đếm lại giám thị (TRỌN)
- *(không lời)* (G01) · pop "PHÒNG THI 24 NGƯỜI"
- **MN**: Hồ sơ mùa thi. Phòng mười hai có hai mươi tư thí sinh, hai giám thị. Đếm lại xem. (G01)
- **VIEN**: Trường thi có hai giám thị. Đếm xem ai đứng sau lưng. (G07) · pop "THẦY VIÊN"
- **MN**: Thầy Viên coi thi ba mươi năm, nghiêm nhất vùng. Mất lâu rồi nhưng mùa thi nào cũng về đảo qua một phòng. (G06)
- **MN**: Bàn nào tính gian lận, thầy đứng ngay sau gáy. (G01)
- *(lặng 0.8 s)* (G07) · cộc cộc
- **MN**: Năm nay thầy bắt đúng một đứa mẹ bỏ năm mươi triệu mua đề. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 — Một năm tự học thua năm mươi triệu (TRỌN)
- **HANH**: Năm mươi triệu là rẻ! Trượt tốt nghiệp là mất cả đời. Cấm cãi, học thuộc từng chữ cho mẹ! (G04) · pop "50 TRIỆU MUA ĐỀ"
- **NAM**: Con đã thức trắng cả năm tự ôn mà mẹ… (G05)
- **HANH**: Ôn thì ai chả ôn? Thuộc đề bán mới chắc ăn! (G04)
- **MN**: Đứa con ôn ba trăm sáu mươi ngày. Bà mẹ tin nhóm chat kín trên mạng hơn một năm mồ hôi của con mình. (G03)
- **MN**: Đến khi mở đề thật: một chữ cũng không khớp. Đề mua là đề lừa đảo. (G08) · pop "ĐỀ GIẢ!"
- *(lặng 0.8 s)* (G05)
- **MN**: Mất năm mươi triệu mà con vẫn đỗ. Bà mẹ cay đắng thế nào, xem bản đầy đủ link dưới. (S26)

### SH3 — Cây bút kỳ lạ (TRAILER)
- *(không lời)* (G02) · pop "NGÒI BÚT KHÔ KHỐC"
- **MN**: Nam mở đề, phát hiện đề mua là đề giả. Trong cơn hoảng loạn, cậu cắm đầu chép bài văn mẫu thuộc lòng. (G05)
- **MN**: Ngòi bút chạm giấy thi: cào rách mép, không ra một giọt mực. (G02)
- **MN**: Lắc bút lia ra lề bàn: mực đen nhánh tuôn trơn tru. Đặt lại vào dòng chép bài mua: ngòi trơ lì như đá. (G02)
- **MN**: Sau gáy phả hơi lạnh ngắt. Tiếng bút đỏ gõ cộc cộc sau lưng. (G07) · cộc cộc
- **VIEN**: Viết cái con đã học. (G07) · pop "THẦY VIÊN"
- **MN**: Bàn sau trống trơn. Nam sẽ làm gì trước bốn mươi lăm phút còn lại? Link bản đầy đủ ngay dưới. (S26)

### SH4 — Ba cây bút tắc ngòi (TRỌN)
- **MN**: Mánh khóe phòng thi hay quả báo tại chỗ? (G01)
- **MN**: Nam mang ba cây bút bi vào phòng thi môn Văn. Mở đề lệch tủ, cậu run rẩy chép liều đáp án mua năm mươi triệu. (G05)
- **MN**: Cây bút thứ nhất: cào giấy khô khốc. Cây bút thứ hai: tắc tịt. Cây thứ ba: đụng dòng văn mẫu mua là đứng im. (G02) · pop "3 CÂY BÚT · ĐỀU TẮC"
- **MN**: Nhưng lia ra lề nháp, cả ba cây đều ra mực đen nhánh. (G02)
- **MN**: Bàn bên cạnh, mấy đứa mua cùng bộ đề vẫn chép ầm ầm. Riêng Nam bị khóa ngòi. (G09)
- *(lặng 0.8 s)* (G05)
- **MN**: Vì sao chỉ có Nam bị chặn? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 — Bốn mươi lăm phút sinh tử (TRAILER)
- *(không lời)* (G05) · pop "CÒN 45 PHÚT"
- **NAM**: Còn bốn mươi lăm phút… Mình trượt thật sao? (G05)
- **MN**: Phòng thi số mười hai. Đồng hồ trôi vùn vụt. Giấy thi của Nam vẫn trắng tinh vì ngòi bút bị giám thị ma khóa cứng. (G01)
- **MN**: Chép đề giả của mẹ thì bút chết mực. Nộp giấy trắng thì mười hai năm đèn sách tan thành mây khói. (G08)
- **VIEN**: Viết cái con đã học. (G07) · pop "THẦY VIÊN"
- **MN**: Cánh tay run rẩy hạ bút xuống. Liệu Nam có kịp cứu vãn số phận mình? Bản đầy đủ, link dưới. (S26)

### SH6 — Thứ thật duy nhất (TRỌN)
- **MN**: Ngày báo điểm tốt nghiệp. Nam đỗ đàng hoàng bằng chính thực lực. (G10) · pop "NAM ĐỖ"
- **MN**: Cùng lúc, công an hốt trọn đường dây bán đề lộ. Hàng trăm đứa chép đề giả dính trọn điểm liệt. (G04)
- **HANH**: Năm mươi triệu của tôi… Đủ mua con xe máy cho nó đi học! May mà thằng này không nghe mẹ! (G04) · pop "MAY KHÔNG NGHE MẸ"
- **MN**: Mua đề giả mất tiền đã đành. Đứa con thật thà ngồi ngay trong nhà thì không tin. (S33)
- *(lặng 0.8 s)* (S34)
- **MN**: Mùa thi năm sau nhà mày có định mua đề không? Tao kể chuyện này ở link dưới. (S26)

### SH7 — Giám thị ba mươi năm không bỏ ca (TRỌN)
- **MN**: Thầy Viên. Giám thị nghiêm nhất huyện ba mươi năm trước. (G06) · pop "THẦY VIÊN COI THI"
- **MN**: Ngày xưa học trò liếc bài, thầy chỉ gõ bút đỏ hai nhịp. Giờ thầy mất rồi, trường thi vẫn có tiếng bút gõ cộc cộc dọc hành lang. (G07)
- **MN**: Thầy không bắt thí sinh học dở. Thầy chỉ khóa tay những đứa định dùng tiền mua điểm. (G01)
- **MN**: Bút gian lận thì thầy làm cho tắt mực. Bút tự lực thì thầy đẩy trơn tru. (G02)
- *(lặng 0.8 s)* (G07) · cộc cộc
- **MN**: Phòng thi có hai giám thị, đếm ra ba người là biết chuyện gì rồi đấy. Tao kể ở bản đầy đủ, link dưới. (S26)

## Hình
Tái sử dụng: B02, S01, S06, S26, S33, S34 (Ma Nó).

### Danh sách hình vẽ mới (16:9)
| Mã | Cảnh | Trạng thái v3 |
|---|---|---|
| G01 | Phòng thi trường cấp ba: hai mươi tư thí sinh áo trắng cúi đầu, quạt trần, hai giám thị đứng đầu phòng; bản phát đề | [DÙNG: LONG, SH1, SH5, SH7] |
| G02 | Cực cận ngòi bút bi cào trên giấy thi, không ra mực; bản viết trơn ở lề; bản viết bài chạy đều | [DÙNG: LONG, SH3, SH4, SH7] |
| G03 | Tối, phòng khách: bà Hạnh cầm điện thoại xem nhóm chat kín (trống chữ), chuyển khoản | [DÙNG: LONG, SH2] |
| G04 | Bà Hạnh cận: áo khoác chống nắng, mặt lo; bản đọc tin, bản nhìn con | [DÙNG: LONG, SH2, SH6] |
| G05 | Nam cận: áo trắng, kính cận; bản nhìn xấp đáp án cạnh chồng sách ôn, bản mồ hôi trong phòng thi | [DÙNG: LONG, SH2, SH3, SH4, SH5] |
| G06 | Ảnh cũ thập niên 80: phòng thi, thầy giám thị áo trắng kính gọng đen đứng cuối phòng, bút đỏ | [DÙNG: LONG, SH1, SH7] |
| G07 | Thầy Viên mờ: sơ mi trắng cũ, kính gọng đen, bút đỏ; đứng cuối hành lang / cuối phòng thi sau lưng Nam | [DÙNG: LONG, SH1, SH3, SH5, SH7] |
| G08 | Cận tờ đề thi thật (trống chữ) và bóng mờ xấp đáp án đã thuộc chồng lên, không khớp | [DÙNG: LONG, SH2, SH5] |
| G09 | Các bàn khác: vài thí sinh cắm cúi viết say sưa | [DÙNG: LONG, SH4] |
| G10 | Ngày có điểm: bà Hạnh nhìn điện thoại, Nam đứng bên, ánh nắng | [DÙNG: LONG, SH6] |

## Lịch
- **LONG**: Thứ Hai 21/06 18:00 (+07)
- **SH1** (TRỌN): Thứ Hai 21/06 19:00
- **SH2** (TRỌN): Thứ Ba 22/06 11:30
- **SH3** (TRAILER): Thứ Ba 22/06 19:00
- **SH4** (TRỌN): Thứ Tư 23/06 11:30
- **SH5** (TRAILER): Thứ Tư 23/06 19:00
- **SH6** (TRỌN): Thứ Năm 24/06 11:30
- **SH7** (TRỌN): Thứ Năm 24/06 19:00
