# Dự án 20 — Táo quân “Kẹt túi nylon” (v3, 2026-11-24)

- Thêm hạn chót trước giao thừa: Táo phải lên trời nộp sổ; trễ hạn, cả phường mất hơi nóng trong bếp.
- Làm rõ ba nấc chủ động: cá số 7 tìm khe túi, Táo thử xé túi, rồi cá liều quẫy theo nhịp để báo động trên bờ.
- Đưa điểm thấp xuống ngay trước cú lật: giao thừa, bếp cả phường lạnh ngắt, tiếng cá quẫy bị nước và túi nylon nuốt mất.
- Cú lật do cá số 7 lựa chọn: nó dồn sức quẫy gọi người xuống vớt, đổi tự do lấy cơ hội cứu Táo và cả phường.
- Bỏ lời Ma Nó báo trước cú lật; giữ khoảnh khắc rợn ở tiếng quẫy đồng loạt dưới kênh.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Cá số 7 và ông Táo có lên được khỏi đáy kênh trước giao thừa để trả lửa cho cả phường không?
- **Đồng hồ / cái giá:** Táo phải lên trời nộp sổ trước giao thừa; trễ hạn, Thiên đình giữ hơi nóng, bếp cả phường lạnh. Táo mất chuyến chầu, cá số 7 vẫn mắc kẹt.
- **Ba nấc leo thang:** Cá số 7 tìm khe túi để thoát nhưng túi mắc dưới đống rác; Táo cố xé túi nhưng chỉ làm nó chìm sâu hơn; cá số 7 liều quẫy theo nhịp để kéo sự chú ý từ bờ, đổi cơ hội thoát thân lấy cơ hội được vớt.
- **Điểm thấp:** Tiếng “không” giao thừa vang lên, cả phường mất hơi nóng; tiếng quẫy dưới kênh không ai nghe thấy.
- **Cú lật:** Cá số 7 tự chọn quẫy ba lần, dồn sức đến kiệt để người trên bờ nhận ra chùm túi; người dân xuống vớt, Táo lên trời nộp sổ muộn. Cá số 7 trả giá bằng việc lỡ chuyến đi cùng đàn.
- **Khoảnh khắc rợn:** Đúng giao thừa, lửa cả phường tắt hơi nóng cùng lúc; từ kênh đen vọng lên một tiếng quẫy, rồi ba trăm tiếng.
- **Câu kết:** Lười năm giây ngày hai ba, mùng một lội bùn năm tiếng; mở túi vẫn rẻ hơn.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| CA | Cá chép số 7 | A01 | Ngọc Huyền | `lowpass=f=1800,aecho=0.8:0.25:35:0.12` |
| TAO | Ông Táo nhà Thịnh | A02 | Thiền Tâm Đức | `atempo=0.95,aecho=0.8:0.5:50:0.25` |
| THINH | Anh Thịnh | A05, A08 | Adam bựa | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "CA": {"preset": "Ngọc Huyền", "fx": "lowpass=f=1800,aecho=0.8:0.25:35:0.12"}, "TAO": {"preset": "Thiền Tâm Đức", "fx": "atempo=0.95,aecho=0.8:0.5:50:0.25"}, "THINH": {"preset": "Adam bựa", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | A01 | **CA**: Tôi là cá số bảy. Túi nhà anh Thịnh. Tôi đang ở dưới đáy kênh. | nước óc ách · bọt |
| 0:05 | A02 | **TAO**: Cá ơi, sổ ta còn ba trăm trang. Mấy giờ thì đi được? | lật sổ |
| 0:09 | A01 | **CA**: Khi nào có người mở túi, sếp ạ. Tôi hỏi rồi. Nước bảo cứ chờ. | mõ cộc |
| 0:13 | S01 → S26 | **MN**: Lại mò vào à? Hôm nay tao kể chuyện một con cá bị giao nhầm phương tiện. | mõ cộc |
| 0:20 | A03 | **CA**: Sáng hai ba tháng Chạp, anh Thịnh mua mười hai con. Mười hai túi. “Thả cho cả họ.” Người bán còn dặn mở túi trước khi thả. | chợ ồn |
| 0:29 | S26 | **MN**: Dân gian bảo ông Táo cưỡi cá chép về trời, tâu việc trong nhà. Giao thừa trở lại giữ bếp. Cá là xe. | “CÁ CHÉP = XE CỦA TÁO” |
| 0:39 | A04 → A05 | **CA**: Anh Thịnh không ra bờ. Anh dừng xe giữa cầu vượt, xách cả chùm túi. Dưới này, cả đàn thấy bóng trời mở ra. | xe cộ |
| 0:47 | A05 | **THINH**: Mở từng túi lâu lắm. Ném cả túi, xuống dưới tự nó bơi ra. Tôi đang bận về nấu cơm. |  |
| 0:54 | A04 | **CA**: Tôi bay. Rồi bộp. Tôi thử cắn mép túi. Trượt. Thử đẩy đáy túi. Kẹt. | túi rơi bộp ×12 |
| 1:04 | A01 | **CA**: Tôi tìm một khe thở. Túi mắc dưới đống rác, mép túi bị ép sát bùn. Tôi đẩy bên này, rác đẩy ngược bên kia. | bọt |
| 1:14 | A02 | **TAO**: Ta đi bốn trăm năm. Thuyền, ngựa, cá. Chưa từng mắc kẹt dưới nước. Cái sổ này còn khô mà râu ta đã ướt. |  |
| 1:24 | S26 | **MN**: Thả cá là thả cho cá sống, để cá đưa người đi. Thả cả túi thì được đúng cái túi. |  |
| 1:32 | A02 | **TAO**: Ta phải lên trời nộp sổ trước giao thừa. Trễ hạn, Thiên đình giữ hơi nóng. Bếp cả phường lạnh. Không ai dưới này ký gia hạn cho ta cả. | “HẠN: GIAO THỪA” · lật sổ |
| 1:43 | A01 → A02 | **CA**: Sếp thử xé túi đi. Mép này có vẻ mỏng hơn. |  |
| 1:47 | A02 | **TAO**: Ta thử rồi. Túi rách một chút, nước chui vào. Ta kéo, cả túi chìm sâu hơn. Ta không phá luật, chỉ đang cố thoát cái túi. | túi sột soạt |
| 1:59 | A01 | **CA**: Tôi thử cắn. Tôi thử đẩy. Tôi thử gọi. Trên này chỉ có nước trả lời. Mỗi lần vùng, túi lại kéo tôi xuống gần bùn hơn. | bọt |
| 2:10 | A02 | **TAO**: Còn bao lâu? |  |
| 2:12 | A01 | **CA**: Em không có đồng hồ. Nhưng trên kia đang treo đèn đỏ. Tôi thấy ánh đèn loang qua mặt nước. | nhạc dừng |
| 2:21 | A06 | **MN**: Đêm ba mươi. Cả phường đếm ngược. Nồi bánh chưng sôi. Người lớn bận chụp ảnh mâm cơm, ai cũng đứng đúng chỗ đẹp nhất. | đếm ngược xa |
| 2:32 | A06 → A07 | **MN**: Ba. Hai. Một. Không. | đếm ngược · cắt nhạc |
| 2:38 | A07 | **MN**: Đúng tiếng không, cả phường mất hơi nóng. Bếp từ tít tít báo lỗi. Bếp ga vẫn cháy xanh, nồi thôi sôi. Sờ vào lạnh tanh. | tít tít · im |
| 2:51 | A04 | **MN**: Từ con kênh vọng lên một tiếng đuôi cá quẫy. Rồi ba trăm tiếng. | quẫy ×1…×300 · im 2 s |
| 3:00 | A01 | **CA**: Tôi nghe người trên bờ reo “năm mới”. Tôi còn đủ sức quẫy ba lần. Nếu họ nghe thấy, tôi sẽ được mở túi. Có thể. |  |
| 3:10 | A02 | **TAO**: Đừng phí sức. Ta không muốn em mắc thêm món nợ nào vì cuốn sổ của ta. |  |
| 3:18 | A01 | **CA**: Em phí sức cả ngày rồi, sếp. Lần này em chọn phí cho đúng việc. Nếu không ai nghe, ít nhất em đã tự gọi cho mình. |  |
| 3:29 | A01 | **CA**: Một. Hai. Ba. | quẫy mạnh ×3 |
| 3:34 | A09 | **MN**: Một người trên bờ nghe tiếng nước. Rồi thấy chùm túi mắc dưới rác. Cả phường xuống kênh, chẳng ai còn đứng tạo dáng chụp ảnh. | bước nước · tiếng người |
| 3:45 | A09 | **MN**: Mỗi túi được vớt lên, một con cá được mở ra, một ông Táo bay đi nộp sổ muộn. Một căn bếp có hơi nóng lại. | bọt · nồi sôi |
| 3:56 | A05 → A09 | **MN**: Nhà Thịnh ném mười hai túi. Mùng một, áo mới ở nhà, Thịnh lội bùn vớt đủ mười hai. | nước óc ách |
| 4:05 | A01 | **CA**: Cảm ơn anh. Lần sau ra bờ nhé. Mở túi mất có năm giây. Tôi thì lỡ chuyến đi cùng đàn, nhưng ít ra được đi bằng vây của mình. |  |
| 4:16 | A02 | **TAO**: Sổ tấu năm nay thêm một trang. Lý do nộp muộn: kẹt túi nylon. Thiên đình chắc sẽ mở hẳn một mục riêng cho chuyện này. | “LÝ DO: KẸT TÚI NYLON” |
| 4:27 | S33 → S34 | **MN**: Hai ba tháng Chạp lười năm giây. Mùng một Tết lội bùn năm tiếng. Mở túi vẫn rẻ hơn. | rít điếu cày |
| 4:35 | B02 | **MN**: Thứ Hai, gian thương ép giá vét sạch đào rừng. Đào nở đẹp lắm. Hai ông thần dưới gốc đào đang đợi khách cầm phong bì. | “TẬP SAU · THỨ HAI” · whoosh |
| 4:47 | S06 | **MN**: Bấm đăng ký đi. Năm giây thôi. Lần này không phải mở túi cá. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN

- **CA**: Tôi là cá số bảy. Túi nhà anh Thịnh. Tôi đang ở dưới đáy kênh. (A01) · pop "CÁ SỐ 7"
- **TAO**: Cá ơi, sổ ta còn ba trăm trang. Mấy giờ thì đi được? (A02)
- **CA**: Khi nào có người mở túi, sếp ạ. Tôi hỏi rồi. Nước bảo cứ chờ. (A01)
- **THINH**: Mở từng túi lâu lắm. Ném cả túi, xuống dưới tự nó bơi ra. Tôi đang bận về nấu cơm. (A05)
- **CA**: Tôi bay. Rồi bộp. Tôi thử cắn mép túi. Trượt. Thử đẩy đáy túi. Kẹt. (A04)
- **CA**: Túi không tự mở. Dưới đáy đã có ba trăm cái khác, của ba trăm nhà khác. (A01)
- **MN**: Cá có thể tự bơi, nhưng túi nylon thì chưa học bơi bao giờ. (S26)
- *(không lời, 0.8 s)* (A01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN

- **THINH**: Mở từng túi lâu lắm. Ném cả túi, xuống dưới tự nó bơi ra. (A05)
- **CA**: Tôi bay. Rồi bộp. Tôi thử cắn mép túi. Trượt. Thử đẩy đáy túi. Kẹt. (A04) · pop "CÁ SỐ 7"
- **CA**: Túi không tự mở. Dưới đáy đã có ba trăm cái khác, của ba trăm nhà khác. (A01)
- **MN**: Thả cá là thả cho cá sống, để cá đưa người đi. Thả cả túi thì được đúng cái túi. (S26)
- **CA**: Tôi tìm một khe thở. Túi mắc dưới đống rác, mép túi bị ép sát bùn. Tôi đẩy bên này, rác đẩy ngược bên kia. (A01)
- **MN**: Thả xong mà cá phải tự lo phần mở hộp, đúng là dịch vụ hậu mãi dưới đáy kênh. (S26)
- *(không lời, 0.8 s)* (A01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN

- **CA**: Trên mỗi túi có một ông Táo. Ngồi chờ. Như tắc đường, chỉ có nước thay mặt đường. (A01) · pop "CÁ SỐ 7"
- **TAO**: Ta đi bốn trăm năm. Thuyền, ngựa, cá. Chưa từng mắc kẹt dưới nước. Cái sổ này còn khô mà râu ta đã ướt. (A02) · pop "ÔNG TÁO"
- **MN**: Thả cá là thả cho cá sống, để cá đưa người đi. Thả cả túi thì được đúng cái túi. (S26)
- **CA**: Tôi thử cắn. Tôi thử đẩy. Tôi thử gọi. Trên này chỉ có nước trả lời. (A01)
- **TAO**: Ta đi đủ đường lên trời, cuối cùng lại xếp hàng dưới đáy kênh. Chuyến này không có quầy ưu tiên cho Táo quân à? (A02)
- **MN**: Trên trời tắc đường còn có mây. Dưới này thì có nguyên cái túi niêm phong. (S26)
- *(không lời, 0.8 s)* (A02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN

- **MN**: Ba. Hai. Một. Không. (A06)
- **MN**: Đúng tiếng không, cả phường mất hơi nóng. Bếp từ tít tít báo lỗi. Bếp ga vẫn cháy xanh, nồi thôi sôi. Sờ vào lạnh tanh. (A07)
- **MN**: Từ con kênh vọng lên một tiếng đuôi cá quẫy. Rồi ba trăm tiếng. (A04)
- **CA**: Tôi nghe người trên bờ reo “năm mới”. Tôi còn đủ sức quẫy ba lần. Nếu họ nghe thấy, tôi sẽ được mở túi. Có thể. (A01)
- **MN**: Người ta đếm ngược giỏi lắm. Đếm xem còn ai xuống vớt thì phải đợi thêm chút. (A06)
- *(không lời, 0.8 s)* (A04)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN

- **MN**: Mỗi túi được vớt lên, một con cá được mở ra, một ông Táo bay đi nộp sổ muộn. Một căn bếp có hơi nóng lại. (A09)
- **MN**: Nhà Thịnh ném mười hai túi. Mùng một, áo mới ở nhà, Thịnh lội bùn vớt đủ mười hai. (A05 → A09)
- **CA**: Cảm ơn anh. Lần sau ra bờ nhé. Mở túi mất có năm giây. Tôi thì lỡ chuyến đi cùng đàn, nhưng ít ra được đi bằng vây của mình. (A01) · pop "CÁ SỐ 7"
- **TAO**: Sổ tấu năm nay thêm một trang. Lý do nộp muộn: kẹt túi nylon. Thiên đình chắc sẽ mở hẳn một mục riêng cho chuyện này. (A02)
- **MN**: Lười năm giây ngày hai ba, mùng một tự kê khai công tác lội bùn. (S33)
- *(không lời, 0.8 s)* (A01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER

- **CA**: Tôi là cá số bảy. Túi nhà anh Thịnh. Tôi đang ở dưới đáy kênh. (A01) · pop "CÁ SỐ 7"
- **TAO**: Ta phải lên trời nộp sổ trước giao thừa. Trễ hạn, Thiên đình giữ hơi nóng. Bếp cả phường lạnh. Không ai dưới này ký gia hạn cho ta cả. (A02) · pop "ÔNG TÁO"
- **MN**: Đúng tiếng không, cả phường mất hơi nóng. Bếp từ tít tít báo lỗi. Bếp ga vẫn cháy xanh, nồi thôi sôi. Sờ vào lạnh tanh. (A07)
- **CA**: Tôi còn đủ sức quẫy ba lần. Nếu họ nghe thấy, tôi sẽ được mở túi. Có thể. (A01)
- **MN**: Từ con kênh vọng lên một tiếng đuôi cá quẫy. Rồi ba trăm tiếng. (A04)
- **MN**: Dưới mặt nước có ai đang gọi người trên bờ? (A04)

### SH7 — TRAILER

- **TAO**: Ta thử rồi. Túi rách một chút, nước chui vào. Ta kéo, cả túi chìm sâu hơn. Ta không phá luật, chỉ đang cố thoát cái túi. (A02) · pop "ÔNG TÁO"
- **CA**: Tôi thử cắn. Tôi thử đẩy. Tôi thử gọi. Trên này chỉ có nước trả lời. Mỗi lần vùng, túi lại kéo tôi xuống gần bùn hơn. (A01) · pop "CÁ SỐ 7"
- **MN**: Đêm ba mươi. Cả phường đếm ngược. Nồi bánh chưng sôi. Người lớn bận chụp ảnh mâm cơm, ai cũng đứng đúng chỗ đẹp nhất. (A06)
- **MN**: Từ con kênh vọng lên một tiếng đuôi cá quẫy. Rồi ba trăm tiếng. (A04)
- **CA**: Em còn đủ sức quẫy ba lần. Nếu họ nghe thấy, em sẽ được mở túi. Có thể. (A01)
- **MN**: Trước giao thừa, cá số bảy có thoát được không? (A01)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | v3 dùng |
|---|---|---|
| A01 | Dưới mặt kênh đen đục: hàng trăm túi nylon lơ lửng như sứa, trong mỗi túi một con cá chép vàng; cận một con cá nhỏ vây đỏ | Có |
| A02 | Ông Táo (mũ cánh chuồn lệch, áo quan sờn, không mặc quần như tranh dân gian, mắt thâm, ôm sổ tấu dày) ngồi trên túi nylon dưới đáy kênh; phía sau hàng trăm ông Táo khác ngồi trên túi như tắc đường | Có |
| A03 | Chợ cá chép sáng 23 tháng Chạp: chậu nhôm, túi nylon bơm ô-xy treo thành chùm | Có |
| A04 | Cầu vượt bê tông trên con kênh đen, xe máy đỗ dọc lan can, người đứng ném túi cá xuống | Có |
| A05 | Anh Thịnh (áo phao, mũ bảo hiểm) trên cầu, xách chùm mười hai túi cá | Có |
| A06 | Phường đêm 30 Tết: dãy nhà ống sáng đèn, nồi bánh chưng sôi trước cửa | Có |
| A07 | Cùng góc A06: nồi bánh chưng thôi bốc hơi, mặt bếp từ nháy đỏ, ngọn lửa ga xanh vẫn cháy dưới nồi lặng | Có |
| A08 | Anh Thịnh cận, bấm bếp ga không lên lửa, mặt hoảng | Không |
| A09 | Sáng mùng 1: người dân áo mưa, ủng, lội kênh vớt túi nylon; một túi vừa mở, cá vọt ra, một bóng mũ cánh chuồn mờ bay lên | Có |

## Lịch

- LONG — Thứ Năm 28/01 18:00 (+07)
- SH1 — Thứ Năm 28/01 19:00 (+07)
- SH2 — Thứ Sáu 29/01 11:30 (+07)
- SH3 — Thứ Sáu 29/01 19:00 (+07)
- SH4 — Thứ Bảy 30/01 11:30 (+07)
- SH5 — Thứ Bảy 30/01 19:00 (+07)
- SH6 — Chủ Nhật 31/01 11:30 (+07)
- SH7 — Chủ Nhật 31/01 19:00 (+07)
