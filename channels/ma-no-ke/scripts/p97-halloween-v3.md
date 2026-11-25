# Dự án 97 — Halloween "Bá tước đi xin việc" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá rõ ràng**: hạn chót đúng 0:00 (nửa đêm); nếu không tháo ảnh xin lỗi, các cụ bị kẹt thành ma lang thang lạc xứ, còn quán Quỷ Môn sẽ đón khách cõi âm thật sự tới đòi nợ vĩnh viễn.
- **3 nấc leo thang chủ động**: Bá tước khuyên can nhã nhặn (Duy từ chối vì tiền) → Bá tước phiên dịch + hóa đơn biến thành mâm cúng (Duy vẫn coi là diễn) → Bá tước dùng quyền khách được mời để mời luôn 20 cụ ra quầy bar nhắm rượu (Duy sụp đổ van xin).
- **Cold open treo lơ lửng**: giữ tiếng nhạc sàn chát chúa và câu cảm thán của Bá tước, không hé lộ cách giải quyết hay kết cục.
- **Điểm thấp nhất trước cú lật**: 23:55, Duy ngoan cố hắt rượu cúng ép các cụ phù hộ cho quán đông khách, nhang điện chập cháy khét lẹt.
- **Cú lật do nhân vật chọn và trả giá**: Duy chọn đóng cửa, hoàn tiền, ôm 20 khung ảnh lặn lội trả tận tay người nhà; Bá tước nhận việc pha chế ca đêm rót nước ép cà chua, Rằm tháng Bảy xin nghỉ đi phát cháo.
- **Cắt tỉa lời thoại**: cô đọng từ ~750 chữ xuống đúng 582 chữ, nhịp dựng kịch tính 3 phút chuẩn bible.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Liệu một ông ma cà rồng ngoại quốc có kịp giải cứu hai mươi di ảnh người lạ ra khỏi quán bar trước nửa đêm Halloween để các cụ không thành ma lang thang?
- **Đồng hồ / cái giá**: Hạn chót 0:00 (mười hai giờ đêm). Cái giá: 20 cụ mua cân ký bị kẹt lại thành vong hồn lạc xứ nơi đất khách; quán bar Quỷ Môn sẽ mở toang đón khách âm thật vào ngự nếu chủ quán không chịu tạ tội.
- **3 nấc leo thang**:
  1. *Nấc 1*: Bá tước khuyên tháo di ảnh vì người chết không phải đạo cụ. Duy cười cợt, gạt đi vì đang hốt bạc đêm Halloween.
  2. *Nấc 2 (23:30)*: Bá tước phiên dịch nỗi oan của các cụ, máy in hóa đơn nhảy ra đồ cúng, nhang điện khét lẹt. Duy vẫn ngoan cố đòi trả thêm tiền để Bá tước diễn tiếp.
  3. *Nấc 3 (23:55)*: Duy hắt rượu thách thức. Chuông điểm 12:00, Bá tước tung nước cờ liều: dùng luật "được mời" để mời toàn bộ 20 cụ bước ra quầy bar nhắm rượu cùng Duy.
- **Điểm thấp nhất**: 23:55, Duy hắt rượu lên bàn thờ giả ép các cụ phù hộ, chuông nửa đêm bắt đầu điểm, không khí quán bar đông cứng.
- **Cú lật**: Duy đối mặt với 20 cụ hiện diện quanh quầy bar, hoảng loạn chọn tháo ảnh ngay trong đêm, chấp nhận bỏ tiền túi đi xe đò trả từng nhà. Bá tước chọn ở lại làm pha chế ca đêm, nhận thù lao bằng nước ép cà chua và tình nghĩa với các cụ.
- **Khoảnh khắc rợn**: Đúng 0:00, nhạc tắt phụt. 20 khung di ảnh đồng loạt mờ sương từ mặt trong kính như có người áp sát thở dài; sương rút dần để lại 20 vết bàn tay in trên kính tiến thẳng vào quầy bar.
- **Câu kết**: Halloween năm sau Duy chỉ dám decor ma giấy bồi; Bá tước ca đêm rót cà chua, Rằm tháng Bảy xin nghỉ đi phát cháo. Ma Nó chốt: "Ông bà ai người nấy thờ, đừng mang ra làm trò."

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (host dẫn chuyện, mỉa mai, rít thuốc) | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| BT | Bá tước (ma cà rồng châu Âu, lịch thiệp, tiếng Việt chuẩn từng chữ) | W04, W05 | Adam bựa | `atempo=0.95,asetrate=48000*0.92,aresample=48000,aecho=0.8:0.4:50:0.2` |
| DUY | Anh Duy (chủ bar Quỷ Môn, thực dụng, to mồm, con buôn) | W03 | Thiền Tâm Đức | `atempo=1.05` |
| CU | Cụ bà trong di ảnh (giọng cụ già xứ Bắc nghẹn ngào) | W02 | Ngọc Huyền | `atempo=0.9,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.6:80:0.3` |

```json voices
{
  "MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},
  "BT": {"preset": "Adam bựa", "fx": "atempo=0.95,asetrate=48000*0.92,aresample=48000,aecho=0.8:0.4:50:0.2"},
  "DUY": {"preset": "Thiền Tâm Đức", "fx": "atempo=1.05"},
  "CU": {"preset": "Ngọc Huyền", "fx": "atempo=0.9,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.6:80:0.3"}
}
```

## LONG (582 chữ lời thoại · thời lượng dựng ≈ 3:05)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | W01 | *(không lời, 2.5 s)* | nhạc bar chát chúa · đèn tím |
| 0:02 | W02 | **BT**: Tôi đi bốn trăm năm. Lần đầu tiên thấy người sống ép các cụ đi bar. | "BỐN TRĂM NĂM" · nhạc tắt phụt · coc |
| 0:07 | S01 → S26 | **MN**: Lại mò vào à? Halloween hóa trang thành gì đấy? Đừng bảo thành tao.<br>**MN**: Nay có ma thật, Tây thật, từ châu Âu sang Việt Nam xin việc.<br>**MN**: Tên ổng là Bá tước. Đi xin chân dọa ma mà gặp ca khó. | "MA THẬT · TÂY THẬT" · braam |
| 0:20 | W01 | **BT**: Quán Quỷ Môn. Halloween làm chủ đề ma Việt. Bàn thờ giả, nhang điện đỏ lòm.<br>**BT**: Trên tường treo hai mươi di ảnh mua cân ký ở chợ đồ cũ. | "BAR QUỶ MÔN" · "20 DI ẢNH MUA CÂN KÝ" · nhạc bar |
| 0:29 | W03 | **DUY**: Check-in với các cụ giảm hai mươi phần trăm! Đúng chất ma Việt, quẩy lên anh em! | "GIẢM 20%" · ho |
| 0:34 | S26 | **MN**: Hai mươi cụ. Không ai mời, tự dưng bị lôi vào bar nghe nhạc sàn rung nóc. | "KHÔNG AI MỜI" |
| 0:39 | W04 | **BT**: Tôi đứng ngoài cửa. Luật ma cà rồng: chủ nhà không mời, cấm bước qua cửa. | chuongcua · "LUẬT: PHẢI ĐƯỢC MỜI" |
| 0:44 | W03 | **DUY**: Hóa trang đỉnh thế! Mời anh Tây vào, đêm nay quẩy tẹt ga! |  |
| 0:48 | W05 | **BT**: Tôi vào xin việc làm ma trang trí. Nhưng nhìn bức tường, tôi lạnh gáy.<br>**BT**: Ở nước tôi, không ai treo ông bà người lạ để bán rượu. | bassdown · "TREO ÔNG BÀ NGƯỜI LẠ" |
| 0:57 | W05 → W01 | **BT**: Hạn chót mười hai giờ đêm. Không tháo ảnh, các cụ thành ma lang thang, còn quán này đón khách âm vĩnh viễn. | "HẠN CHÓT: 0:00" · tick · braam |
| 1:04 | W05 | **BT**: Tôi bảo Duy tháo ảnh. Di ảnh để thờ cúng, không phải trò đùa. | "NẤC 1: KHUYÊN CAN" |
| 1:08 | W03 | **DUY**: Tiền tươi thóc thật tao mua đứt ở chợ. Đang đông khách kiếm trăm củ, tháo là tháo thế nào! | "KIẾM TRĂM CỦ" |
| 1:14 | W04 | **BT**: Anh ta cười xòa, quay đi rót rượu. | cuoi |
| 1:17 | W05 | **BT**: Mười một giờ rưỡi. Còn ba mươi phút. Tôi bắt đầu phiên dịch. | "23:30 · CÒN 30 PHÚT" · tick |
| 1:21 | W05 → W02 | **BT**: Cụ bên trái bảo nhà bị giải tỏa, ảnh rơi ra chợ. Cụ bên phải ghét nhạc chát chúa. | "NẤC 2: PHIÊN DỊCH" |
| 1:27 | W02 | **CU**: Nhức đầu quá. Cho tôi về với cháu ở Nam Định. | eecho · "CHO TÔI VỀ" |
| 1:31 | W03 | **DUY**: Diễn hay đấy anh Tây! Diễn nốt đêm nay tao thưởng thêm! |  |
| 1:35 | W03 | **DUY**: Ơ kìa, máy in hỏng à? Sao ra ba chén rượu trắng với đĩa xôi thế này? | mayin · "HÓA ĐƠN: 3 CHÉN RƯỢU TRẮNG" |
| 1:40 | W02 | **MN**: Nhang điện bốc mùi khét lẹt. Đèn tím trên trần chớp giật liên hồi. | khet · chopden |
| 1:45 | W03 | **BT**: Mười một giờ năm mươi lăm. Duy ngoan cố hắt rượu lên bàn thờ giả. | "23:55 · CÒN 5 PHÚT" · "ĐIỂM THẤP NHẤT" |
| 1:50 | W03 | **DUY**: Mời các cụ chén rượu! Xong phù hộ cho con đông khách! | hatruou |
| 1:54 | W01 | **BT**: Đúng mười hai giờ. Nhạc tắt phụt. | chuong12 · tatnhac |
| 1:56 | W06 | *(không lời, 2.0 s)* | imlang · tho lanh |
| 1:58 | W06 | **BT**: Hai mươi khung di ảnh đồng loạt mờ sương từ mặt trong kính.<br>**BT**: Như hai mươi người đứng sát sau kính, đồng thanh thở ra một hơi dài buốt giá. | "KHOẢNH KHẮC RỢN" · hoitho |
| 2:07 | W06 | **BT**: Hơi nước rút dần, để lại hai mươi vết bàn tay trên kính, tiến thẳng vào quầy bar. | "VẾT BÀN TAY TRÊN KÍNH" · creak |
| 2:12 | W03 | **DUY**: Anh… anh Tây ơi… Các cụ đang ở đâu đấy? | run |
| 2:15 | W05 | **BT**: Quanh anh. Mày mời tao vào, tao có quyền mời bạn. Tao mời các cụ ra nhắm rượu cùng mày.<br>**BT**: Một là tháo ảnh trả từng nhà. Hai là ở lại tiếp các cụ tới sáng. | "NẤC 3: MỜI CÁC CỤ RA" · "LỰA CHỌN & TRẢ GIÁ" · braam |
| 2:26 | W03 | **DUY**: Em tháo! Em tháo ngay! Cho em xin lỗi các cụ ơi! | quy |
| 2:30 | W07 | **MN**: Hai tháng sau, Duy ôm hai mươi khung ảnh đi chập tối trả về cho con cháu.<br>**MN**: Ba tấm vô danh thì gửi vào chùa thắp hương. | "TRẢ ẢNH VỀ NHÀ" · chaptôi |
| 2:38 | W01 | **MN**: Halloween năm sau, Quỷ Môn treo toàn ma Tây, ma Nhật bằng giấy bồi. | "NĂM SAU: MA GIẤY BỒI" |
| 2:43 | W04 | **BT**: Còn tôi được nhận làm pha chế ca đêm. Món tủ: nước ép cà chua.<br>**BT**: Rằm tháng Bảy tôi xin nghỉ, đi phát cháo với các cụ. | rotnuoc · "NƯỚC ÉP CÀ CHUA" |
| 2:51 | S33 → S34 | **MN**: Nhớ đấy. Ma Tây hay ma Việt thì ông bà ai nấy thờ, đừng mang ra làm trò. | rít điếu cày |
| 2:57 | B02 | **MN**: Tập sau: ba tiếng gõ trong tủ dưới đít tao suốt năm mươi tập. Nay tao mở tủ. | "TẬP SAU" · whoosh · cộc |
| 3:03 | S06 | **MN**: Bấm đăng ký đi. Không cần mời, tối nay tao tự vào. | "ĐĂNG KÝ" · coc |

## SHORTS

### SH1 (TRỌN)
- **MN**: Hồ sơ ma Tây đi xin việc. Bốn trăm năm làm ma cà rồng, lần đầu sốc văn hóa. (S01) · pop "MA TÂY ĐI XIN VIỆC"
- **BT**: Tôi đứng ngoài cửa bar Quỷ Môn. Luật ma cà rồng: chủ nhà không mời, cấm bước qua cửa. (W04) · pop "BÁ TƯỚC · MA CÀ RỒNG"
- **DUY**: Hóa trang đỉnh thế! Mời anh Tây vào, đêm nay quẩy tẹt ga! (W03)
- **BT**: Tôi vào xin việc làm ma trang trí. Nhưng nhìn lên tường, tôi lạnh gáy. (W05)
- **BT**: Quán treo hai mươi tấm di ảnh người già mua cân ký ở chợ đồ cũ. (W01) · pop "20 DI ẢNH MUA CÂN"
- **BT**: Ở nước tôi, không ai treo ông bà người lạ để bán rượu. (W05)
- *(lặng 0.8 s)*
- **MN**: Văn minh cõi âm nó thế. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRỌN)
- **DUY**: Check-in với các cụ giảm hai mươi phần trăm! Đúng chất ma Việt, quẩy lên anh em! (W03) · pop "CHECK-IN GIẢM 20%"
- **MN**: Quán bar Halloween, lấy bàn thờ làm góc sống ảo, nhang điện đỏ lòm. (W01)
- **BT**: Mười một giờ rưỡi, tôi bắt đầu phiên dịch. (W05) · pop "BÁ TƯỚC · MA CÀ RỒNG"
- **BT**: Cụ bên trái bảo nhà bị giải tỏa, ảnh rơi ra chợ. Cụ bên phải ghét nhạc chát chúa. (W02)
- **CU**: Nhức đầu quá. Cho tôi về với cháu ở Nam Định. (W02) · pop "CHO TÔI VỀ"
- **DUY**: Diễn hay đấy anh Tây! Mai đến làm luôn! (W03)
- *(lặng 0.8 s)*
- **MN**: Tưởng diễn viên, ai ngờ ma thật. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 (TRỌN)
- **MN**: Khi quán bar dám đem đồ cúng ra đùa với cõi âm. (S01) · pop "HÓA ĐƠN CÕI ÂM"
- **DUY**: Ơ kìa, máy in hỏng à? Sao ra ba chén rượu trắng với đĩa xôi thế này? (W03) · pop "3 CHÉN RƯỢU TRẮNG"
- **MN**: Nhang điện bốc mùi khét lẹt. Đèn tím trên trần chớp giật liên hồi. (W02)
- **DUY**: Mời các cụ chén rượu! Xong phù hộ cho con đông khách! (W03)
- **BT**: Đúng mười hai giờ. Nhạc tắt phụt. (W01) · pop "BÁ TƯỚC · MA CÀ RỒNG"
- **BT**: Hai mươi khung di ảnh đồng loạt mờ sương từ mặt trong kính. (W06) · pop "MỜ SƯƠNG BÊN TRONG"
- *(lặng 0.8 s)*
- **MN**: Rượu mời không uống, đòi uống rượu phạt. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 (TRỌN)
- **MN**: Bài học nhớ đời của gã chủ bar thích lấy di ảnh dọa ma. (S01) · pop "BÀI HỌC NHỚ ĐỜI"
- **DUY**: Em tháo! Em tháo ngay! Cho em xin lỗi các cụ ơi! (W03) · pop "XIN LỖI CÁC CỤ"
- **MN**: Hai tháng sau, Duy ôm hai mươi khung ảnh đi chập tối trả về cho con cháu. Ba tấm vô danh thì gửi vào chùa. (W07)
- **MN**: Halloween năm sau, Quỷ Môn treo toàn ma Tây, ma Nhật bằng giấy bồi. (W01) · pop "ĐỔI SANG MA GIẤY"
- **BT**: Còn tôi được nhận làm pha chế ca đêm. Món tủ: nước ép cà chua. (W04) · pop "BÁ TƯỚC · MA CÀ RỒNG"
- **BT**: Rằm tháng Bảy tôi xin nghỉ, đi phát cháo với các cụ. (W04)
- *(lặng 0.8 s)*
- **MN**: Ma Tây mà sống có nghĩa khí hơn khối người. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN)
- **MN**: Va chạm nảy lửa giữa luật ma Tây và ma Việt trong một quán bar. (S01) · pop "LUẬT MA TÂY VÀ VIỆT"
- **BT**: Luật ma cà rồng: chủ nhà không mời, cấm bước qua cửa. (W04) · pop "BÁ TƯỚC · MA CÀ RỒNG"
- **MN**: Còn ma Việt: một nén hương, gọi đúng tên, người ta mới về. (S26)
- **DUY**: Anh… anh Tây ơi… Các cụ đang ở đâu đấy? (W03)
- **BT**: Quanh anh. Mày mời tao vào, tao có quyền mời bạn tao. Tao mời các cụ ra nhắm rượu với mày. (W05) · pop "MỜI CÁC CỤ RA NHẮM"
- **BT**: Một là tháo ảnh trả về từng nhà. Hai là ở lại tiếp hai mươi cụ tới sáng. (W05)
- *(lặng 0.8 s)*
- **MN**: Người ngoài đứng ra đòi công bằng cho các cụ. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 (TRAILER)
- **BT**: Tôi đi bốn trăm năm. Lần đầu tiên thấy người sống ép các cụ đi bar. (W02) · pop "BÁ TƯỚC · MA CÀ RỒNG"
- **DUY**: Mời các cụ chén rượu! Xong phù hộ cho con đông khách! (W03)
- **BT**: Đúng mười hai giờ. Nhạc tắt phụt. (W01) · pop "0:00 · ĐÚNG NỬA ĐÊM"
- **BT**: Hai mươi khung di ảnh đồng loạt mờ sương từ mặt trong kính. (W06)
- **BT**: Như hai mươi người đứng sát sau kính, đồng thanh thở ra một hơi dài buốt giá. (W06) · pop "HƠI THỞ SAU KÍNH"
- **BT**: Hơi nước rút dần, để lại hai mươi vết bàn tay in trên kính, tiến thẳng vào quầy bar. (W06) · pop "20 VẾT BÀN TAY"
- **MN**: Sau lớp kính mờ, ai đang bước ra quầy bar? Bản đầy đủ, link dưới. (S26)

### SH7 (TRAILER)
- **MN**: Còn ba mươi phút nữa là hết hạn. Không tháo di ảnh, quán bar sẽ đón khách âm. (S01) · pop "HẠN CHÓT NỬA ĐÊM"
- **BT**: Hạn chót mười hai giờ đêm. Không tháo ảnh trả về, các cụ sẽ thành ma lang thang lạc xứ, còn quán này sẽ đón khách âm vĩnh viễn. (W05) · pop "BÁ TƯỚC · MA CÀ RỒNG"
- **DUY**: Tiền tươi thóc thật tao mua đứt ở chợ. Đang đông khách kiếm trăm củ, tháo là tháo thế nào! (W03)
- **BT**: Mười một giờ năm mươi lăm. Đồng hồ đếm từng giây. (W01) · pop "23:55 · CÒN 5 PHÚT"
- **BT**: Nhạc sàn tắt ngấm. Nhang điện phát nổ. (W02)
- **MN**: Đêm Halloween định mệnh của quán bar Quỷ Môn sẽ kết thúc thế nào? Bản đầy đủ, link dưới. (S26)

## Hình
Tái sử dụng: B02 + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Ảnh vẽ mới (16:9, giữ nguyên danh sách v2 — v3 dùng toàn bộ 7 ảnh):
| Mã | Cảnh | Tình trạng trong v3 |
|---|---|---|
| W01 | Quán bar Quỷ Môn: đèn tím, bí ngô nhựa, mạng nhện giả, khách hóa trang nhảy; bức tường 20 khung di ảnh cũ và bàn thờ giả nhang điện đỏ; đồng hồ điểm 12:00; phiên bản năm sau treo ma giấy bồi | Đã dùng (LONG, SH1, SH3, SH4, SH6, SH7) |
| W02 | Cận khung ảnh gỗ cũ lóa đèn tím, không thấy rõ mặt; nhang điện bốc khói khét lẹt; khung ảnh cụ bà phản chiếu ánh đèn | Đã dùng (LONG, SH2, SH3, SH6, SH7) |
| W03 | Anh Duy chủ bar: mũ phù thủy nhựa, sơ mi phanh cổ, cầm micro hò hét; cầm hóa đơn mặt tái mét; quỳ lạy van xin | Đã dùng (LONG, SH1, SH2, SH3, SH4, SH5, SH6, SH7) |
| W04 | Bá tước áo choàng đen lót đỏ, mặt trắng bệch, tóc vuốt ngược đứng ngoài ngưỡng cửa bar; sau quầy bar rót nước ép cà chua | Đã dùng (LONG, SH1, SH4, SH5) |
| W05 | Bá tước đứng trước bức tường di ảnh, tay đặt ngực, mặt lạnh gáy; nghiêng tai phiên dịch lời các cụ; chỉ tay khắp quầy bar | Đã dùng (LONG, SH1, SH2, SH5, SH7) |
| W06 | 20 khung di ảnh đồng loạt mờ sương từ mặt trong kính; hơi nước rút để lại 20 vết bàn tay in trên kính theo thứ tự hướng vào quầy bar | Đã dùng (LONG, SH3, SH6) |
| W07 | Chập tối chợ đồ cũ lên đèn: Duy ôm chồng khung ảnh; chạng vạng trước hiên nhà ở quê Duy trao ảnh tận tay người thân | Đã dùng (LONG, SH4) |

## Lịch
- **LONG**: Thứ Hai 25/10 18:00 (+07)
- **SH1**: Thứ Hai 25/10 19:00
- **SH2**: Thứ Ba 26/10 11:30
- **SH3**: Thứ Ba 26/10 19:00
- **SH4**: Thứ Tư 27/10 11:30
- **SH5**: Thứ Tư 27/10 19:00
- **SH6**: Thứ Năm 28/10 11:30
- **SH7**: Thứ Năm 28/10 19:00
