# Dự án 35 — Ông Kẹ "Giờ này còn thức à?" (v3, 2026-11-24)

- Thêm đồng hồ và cái giá: trước 2:00 sáng, Ông Kẹ phải khiến anh Đạt tự đi ngủ; nếu trượt, ông tiếp tục mang tiếng bắt trẻ con dù chưa từng làm thế.
- Làm rõ ba nấc leo thang: tiếng động không hiệu quả → nhắc thẳng luật vẫn bị phớt lờ → tự chui vào bao, trả giá bằng việc để anh Đạt nhìn thấy mình.
- Đẩy điểm thấp xuống ngay trước cú lật: bao tải dừng sau sofa, anh Đạt cứng đờ rồi vẫn mở game lại.
- Giữ khoảnh khắc rợn trong tiếng bao tải kéo lê và giọng hỏi sát lưng ghế; không đụng đến trẻ.
- Giữ kết châm biếm và teaser chiếc gương đồng của P36 vào Thứ Năm.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Liệu Ông Kẹ có thể khiến anh Đạt tự đi ngủ trước 2:00 sáng mà không bắt trẻ con?
- **Đồng hồ / cái giá:** Hạn chót 2:00 sáng. Nếu trượt, Ông Kẹ tiếp tục nghe tên mình bị dùng để dọa trẻ và mang tiếng bắt trẻ con dù chưa từng làm vậy.
- **Ba nấc leo thang:** 1) Ông Kẹ kéo bao từ bếp đến phòng khách; Đạt nghĩ tiếng game bị rè. 2) Ông Kẹ nói thẳng sau sofa; Đạt cứng người rồi quay lại màn hình. 3) Ông Kẹ tự chui vào bao, kéo mình đi một vòng khu phố rồi trở về; Đạt thấy xơ bao tải trên áo và tự chọn đi ngủ.
- **Điểm thấp:** Bao tải dừng sau lưng sofa; Đạt không cựa được. Khi tiếng động im, anh mở game lại.
- **Cú lật:** Ông Kẹ chọn bỏ chính mình vào bao để chứng minh lời dọa của Đạt áp vào người lớn. Ông trả giá bằng việc để Đạt nhìn thấy mình và mang tiếng thêm một đêm.
- **Khoảnh khắc rợn:** Tiếng bao tải kéo lê dừng ngay sau sofa; giọng khàn sát lưng ghế hỏi: “Giờ này còn thức à?”
- **Câu kết:** “Bấm đăng ký đi. Rồi đi ngủ trước mười hai giờ. Tao không muốn nghe tên tao trong lời dọa nữa.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| DAT | Anh Đạt: áo phông ở nhà, quần đùi, mắt thâm, tay không rời điện thoại | K01, K03, K04, K09 | Adam bựa | `anull` |
| KE | Ông Kẹ: ông già cao gầy, da sạm, râu bạc lởm chởm, áo nâu bạc, bao tải gai; vẻ mệt mỏi | K05, K06, K07, K08 | Thiền Tâm Đức | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25` |
| BE | Bé Na, 7 tuổi; không xuất hiện trong cảnh rợn, không bị hại hay làm sợ | K03, K04 | Ngọc Huyền | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "DAT": {"preset": "Adam bựa", "fx": "anull"}, "KE": {"preset": "Thiền Tâm Đức", "fx": "asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25"}, "BE": {"preset": "Ngọc Huyền", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | K01 | *(không lời, 2.0 s)* | game nhỏ · tích tắc |
| 0:02 | K02 | *(không lời, 1.0 s)* | đồng hồ chỉ 1:58 · tích tắc |
| 0:03 | K07 | *(không lời, 2.0 s)* | sột… sột… từ xa · nhạc tắt |
| 0:05 | K01 | **DAT**: Cái gì đấy? | game ngừng |
| 0:07 | K07 | *(không lời, 1.0 s)* | sột… sột… gần hơn |
| 0:08 | S01 → S26 | **MN**: Lại mò vào à? Nghe thấy tiếng gì chưa? Có người tối nào cũng dọa con bằng Ông Kẹ. Đêm nay ông ấy nghe thấy. | mõ CỘC · chữ “ÔNG KẸ NGHE THẤY” |
| 0:17 | K01 | **DAT**: Chắc tiếng hàng xóm kéo ghế. | game bật lại |
| 0:19 | S26 | **MN**: Hai giờ sáng còn thức. Lời dọa trong nhà bỗng có địa chỉ. | tích tắc |
| 0:25 | K03 | **DAT**: Na, ăn đi. Không ăn là Ông Kẹ bắt! | tiếng video ngắn |
| 0:30 | K04 | **DAT**: Ngủ ngay. Không ngủ là Ông Kẹ vác bao tải đến bắt đấy! | cửa khép nhẹ |
| 0:36 | K04 | **BE**: Thế bố có ngủ không? |  |
| 0:39 | K04 | **DAT**: Người lớn không phải ngủ. |  |
| 0:42 | S26 | **MN**: Câu trả lời rất tự tin. Thường được phát ra bởi người sắp nằm sofa đến ba giờ sáng, vừa ăn mì vừa chơi game. | mì húp · game |
| 0:51 | K05 | **MN**: Dân gian kể Ông Kẹ là ông già vác bao, chuyên bắt trẻ hư. Đời bà mày dọa mẹ mày, đời mẹ mày dọa mày. Còn ông ấy thì nghe tên mình ở mọi bữa cơm. | gió nhẹ |
| 1:02 | K06 | **KE**: Một trăm năm. Chưa bắt đứa trẻ nào. Trẻ con ngủ, ăn, khóc — việc của trẻ con. |  |
| 1:10 | K06 | **KE**: Nhưng anh Đạt nói không ngủ thì bị bắt. Đêm nay anh ấy vẫn thức. | chữ “KHÔNG NGỦ = BỊ BẮT” |
| 1:17 | K06 | **KE**: Tôi có đến. Chỉ hỏi cho rõ. |  |
| 1:20 | K07 | **MN**: Nấc một. Ông kéo bao từ bếp đến phòng khách. Anh Đạt tưởng tiếng game rè. | sột… sột… |
| 1:27 | K01 | **DAT**: Wi-Fi nhà này cũng biết kéo ghế rồi à? | game bật to |
| 1:31 | K06 | **KE**: Anh Đạt. Hai giờ rồi. Anh vừa bảo con không ngủ sẽ bị bắt. | giọng xa, khàn |
| 1:38 | K01 | **DAT**: Đang qua màn. Đừng làm phiền. | tiếng bấm game |
| 1:42 | K06 | **KE**: Vậy tôi chờ. | tích tắc |
| 1:45 | K07 | **MN**: Nấc hai. Bao tải đi chậm qua nền gạch. Lần này anh Đạt nghe rõ. | sột… sột… nhạc tắt |
| 1:52 | K01 | **MN**: Anh muốn quay lại. Người cứng đờ, tay vẫn sáng màn hình. Bao tải dừng ngay sau ghế. | thở gấp · sột… dừng |
| 2:00 | K01 | *(không lời, 1.5 s)* | im |
| 2:02 | K06 | **KE**: Giờ này còn thức à? | giọng sát lưng ghế |
| 2:06 | K01 | **DAT**: Tôi… tôi đang nghỉ mắt. |  |
| 2:09 | K06 | **KE**: Mắt anh đang bắn quái. |  |
| 2:12 | K01 | **DAT**: Chú là ai? |  |
| 2:14 | K06 | **KE**: Người bị anh gọi đến mỗi tối. |  |
| 2:17 | K01 | **MN**: Bao tải im. Ông Kẹ đứng sau ghế. Anh Đạt không nhúc nhích. Rồi tiếng game lại vang lên. | game bật · tích tắc |
| 2:27 | K02 | **MN**: Hai giờ mười lăm. Ông đã thử tiếng động, thử nói thẳng. Không cách nào khiến anh Đạt tự đứng dậy. | chữ “2:15” |
| 2:35 | K06 | **KE**: Tôi không bắt trẻ con. Nên tôi sẽ làm đúng câu anh nói — với người đang thức. |  |
| 2:41 | K06 | **KE**: Anh tự chọn. Tắt máy, đi ngủ. Hay xem tôi làm mẫu? |  |
| 2:47 | K01 | **DAT**: Ông định làm gì? |  |
| 2:49 | K06 | **KE**: Chứng minh câu dọa của anh dùng được với người lớn. |  |
| 2:54 | K06 | **MN**: Ông Kẹ chui vào bao tải. Tự kéo miệng bao qua vai, tự lăn ra cửa. | vải sột soạt |
| 3:03 | K08 | **MN**: Ông đi một vòng khu phố, trong bao. Không đụng ai. Không rẽ vào phòng trẻ. Chỉ có tiếng dép và tiếng bao cọ đường. | bước chân · chó sủa xa |
| 3:13 | K08 | **KE**: Hồi bé anh cũng nghe lời dọa này. Trong bao tối lắm. Mà không có Wi-Fi. |  |
| 3:21 | K09 | **MN**: Ông trở lại lúc ba giờ. Anh Đạt nằm trên sofa, tóc rối, điện thoại úp xuống. Xơ bao tải dính trên áo. | tích tắc |
| 3:31 | K09 | **DAT**: Không phải mơ… |  |
| 3:34 | K06 | **KE**: Đúng. Mơ thì không có xơ gai. |  |
| 3:38 | K02 | **MN**: Đêm sau, mười hai giờ một phút. | tích tắc |
| 3:41 | K07 | **MN**: Sột… sột… | tiếng bao xa dần |
| 3:44 | K04 | **MN**: Anh Đạt đặt điện thoại xuống, tự đi đánh răng. Tiếng kéo dừng ngoài cửa phòng. Rồi quay về bếp. | vòi nước · bước chân xa |
| 3:54 | K06 | **KE**: Người đã ngủ thì tôi không bắt. Luật do anh đặt. |  |
| 4:00 | K04 | **MN**: Một tháng sau, chín rưỡi tối, anh Đạt tắt đèn. Sáng dậy không cáu cả nhà. |  |
| 4:08 | K04 | **BE**: Bố ơi, sao bố ngủ sớm thế? |  |
| 4:11 | K04 | **DAT**: Bố… sợ Ông Kẹ. |  |
| 4:15 | K06 | **KE**: Ông chưa bao giờ bắt trẻ con. Người lớn mới hay tự làm mình thức trắng. | gió nhẹ |
| 4:23 | S33 → S34 | **MN**: Dọa con bằng tên ai thì nhớ là người đó có thể đang nghe. Tao thì hiền. Chưa ai lấy tên tao dọa trẻ con. Chắc do tao chưa có bao tải. | rít điếu cày |
| 4:34 | S26 | **MN**: Tập sau: chiếc gương đồng cổ trong tiệm đồ cũ. Ai soi cũng thấy mình. Chỉ có một người soi… thì thấy người khác. | thẻ “TẬP SAU” |
| 4:44 | S06 | **MN**: Bấm đăng ký đi. Rồi đi ngủ trước mười hai giờ. Tao không muốn nghe tên tao trong lời dọa nữa. | chữ “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN · Lời dọa có địa chỉ

- **MN**: Hai giờ sáng còn thức. Lời dọa trong nhà bỗng có địa chỉ. (K02)
- **DAT**: Na, ăn đi. Không ăn là Ông Kẹ bắt! (K03) · pop "ÔNG KẸ"
- **DAT**: Ngủ ngay. Không ngủ là Ông Kẹ vác bao tải đến bắt đấy! (K04)
- **BE**: Thế bố có ngủ không? (K04)
- **DAT**: Người lớn không phải ngủ. (K04)
- **MN**: Câu trả lời rất tự tin. Thường được phát ra bởi người sắp nằm sofa đến ba giờ sáng, vừa ăn mì vừa chơi game. (K01)
- **MN**: Người lớn nằm sofa đến ba giờ sáng, vừa ăn mì vừa chơi game. (K01)
- **MN**: *(lặng 0.8 s)* (K02)
- **MN**: Người lớn ngủ muộn mà còn dạy giờ giấc, đúng là họp phụ huynh tự phát. (K04)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN · Chưa bắt đứa trẻ nào

- **MN**: Dân gian kể Ông Kẹ là ông già vác bao, chuyên bắt trẻ hư. (K05)
- **KE**: Một trăm năm. Chưa bắt đứa trẻ nào. Trẻ con ngủ, ăn, khóc — việc của trẻ con. (K06) · pop "ÔNG KẸ"
- **MN**: Nhưng anh Đạt nói không ngủ thì bị bắt. Đêm nay anh ấy vẫn thức. (K06)
- **KE**: Anh Đạt. Hai giờ rồi. Anh vừa bảo con không ngủ sẽ bị bắt. (K06)
- **MN**: Anh Đạt dọa con rất có nghề. Chỉ là nghề đó đêm nay tự tìm đến tận sofa. (K01)
- **MN**: *(lặng 0.8 s)* (K07)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN · Wi-Fi trong bao

- **MN**: Ông đã thử tiếng động, thử nói thẳng. Không cách nào khiến anh Đạt tự đứng dậy. (K02)
- **KE**: Chứng minh câu dọa của anh dùng được với người lớn. (K06) · pop "ÔNG KẸ"
- **MN**: Ông Kẹ chui vào bao tải. Tự kéo miệng bao qua vai, tự lăn ra cửa. (K06)
- **MN**: Ông đi một vòng khu phố, trong bao. Không đụng ai. Không rẽ vào phòng trẻ. (K08)
- **KE**: Hồi bé anh cũng nghe lời dọa này. Trong bao tối lắm. Mà không có Wi-Fi. (K08)
- **MN**: Trong đó tối đến mức điện thoại cũng chịu hết pin trước khi anh chịu ngủ. (K08)
- **MN**: *(lặng 0.8 s)* (K08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN · Giờ này còn thức à?

- **MN**: Nấc một, tiếng bao từ bếp. Nấc hai, lời nhắc sau sofa. Anh Đạt vẫn không chịu tắt game. (K07)
- **KE**: Giờ này còn thức à? (K06) · pop "ÔNG KẸ"
- **MN**: Bao tải dừng ngay sau ghế. Anh muốn quay lại. Người cứng đờ, tay vẫn sáng màn hình. (K01)
- **DAT**: Tôi… tôi đang nghỉ mắt. (K01)
- **KE**: Mắt anh đang bắn quái. (K06)
- **MN**: Màn hình khai hết rồi, luật sư bào chữa khỏi cần tới. (K01)
- **MN**: *(lặng 0.8 s)* (K01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN · Tự kéo mình đi

- **KE**: Tôi không bắt trẻ con. Nên tôi sẽ làm đúng câu anh nói — với người đang thức. (K06) · pop "ÔNG KẸ"
- **MN**: Ông Kẹ chui vào bao tải. Tự kéo miệng bao qua vai, tự lăn ra cửa. (K06)
- **MN**: Ông đi một vòng khu phố, trong bao. Không đụng ai. Không rẽ vào phòng trẻ. (K08)
- **KE**: Hồi bé anh cũng nghe lời dọa này. Trong bao tối lắm. Mà không có Wi-Fi. (K08)
- **MN**: Hàng xóm nghe tiếng kéo tưởng nhà ai đang chuyển modem bằng đường bộ. (K08)
- **MN**: *(lặng 0.8 s)* (K08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRỌN · Bố ngủ trước

- **MN**: Một tháng sau, chín rưỡi tối, anh Đạt tắt đèn. Sáng dậy không cáu cả nhà. (K04)
- **DAT**: Bố… sợ Ông Kẹ. (K04) · pop "ÔNG KẸ"
- **KE**: Ông chưa bao giờ bắt trẻ con. Người lớn mới hay tự làm mình thức trắng. (K06)
- **MN**: Cả nhà được ngủ yên. Riêng anh Đạt mất đặc quyền giảng giờ ngủ lúc mắt còn đỏ vì game. (K04)
- **MN**: Đến lượt bố tập ngủ đúng giờ, bài kiểm tra không có quyền xin phụ huynh làm hộ. (K04)
- **MN**: *(lặng 0.8 s)* (K06)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH7 — TRAILER · Tiếng bao tải

- **MN**: Hai giờ sáng. Cả nhà ngủ. Chỉ còn ánh màn hình trong phòng khách. (K01)
- **MN**: Từ bếp. (K07)
- **MN**: Sột… sột… chậm, đều, tiến về sofa. (K07)
- **MN**: Anh Đạt muốn quay lại. Người cứng đờ. Bao tải dừng ngay sau ghế. (K01)
- **MN**: *(không lời, 0.8 s)* (K01)
- **KE**: Giờ này còn thức à? (K06) · pop "ÔNG KẸ"
- **MN**: Ai vừa lên tiếng sau lưng anh? (K01)
- **MN**: Còn tiếng kéo ấy đang ở đâu bây giờ? (K07)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | v3 dùng |
|---|---|---|
| K01 | Phòng khách tối, anh Đạt nằm sofa, ánh màn hình xanh hắt lên mặt, gói mì trên bàn | ✓ |
| K02 | Cận đồng hồ treo tường kiểu cũ trong bóng tối; bản kim chỉ 2 giờ và bản 0:01 | ✓ |
| K03 | Bữa tối gia đình: bé Na (7 tuổi) ngồi trước bát cơm, bố vừa ăn vừa xem điện thoại | ✓ |
| K04 | Anh Đạt: bản đứng cửa phòng con tắt đèn; bản 9 rưỡi tối đánh răng nhìn ra cửa sổ | ✓ |
| K05 | Tranh màu ngả nâu: các bà mẹ xưa chỉ ra cửa dọa con, ngoài ngõ là bóng ông già vác bao tải | ✓ |
| K06 | Ông Kẹ: ông già cao gầy, da sạm, râu bạc, áo nâu bạc, bao tải gai; bản ngồi mái nhà mệt mỏi và bản cười hiền | ✓ |
| K07 | Hành lang tối từ bếp ra phòng khách, nền gạch hoa; vệt bụi như có vật kéo qua | ✓ |
| K08 | Phố đêm: Ông Kẹ tự nằm trong bao tải, lăn hoặc kéo qua dưới đèn đường; không ai bị hại | ✓ |
| K09 | Ba giờ sáng: anh Đạt trên sofa, tóc rối, điện thoại úp mặt, xơ bao tải dính áo | ✓ |

## Lịch

- LONG: Thứ Năm 25/03 18:00 (+07).
- SH1: Thứ Năm 25/03 19:00 (+07).
- SH2: Thứ Sáu 26/03 11:30 (+07).
- SH3: Thứ Sáu 26/03 19:00 (+07).
- SH4: Thứ Bảy 27/03 11:30 (+07).
- SH5: Thứ Bảy 27/03 19:00 (+07).
- SH6: Chủ Nhật 28/03 11:30 (+07).
- SH7: Chủ Nhật 28/03 19:00 (+07).
