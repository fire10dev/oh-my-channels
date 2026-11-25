# Dự án 20 — Táo quân “Kẹt túi nylon” (v3, 2026-11-24)

- Chốt hạn giao thừa và cái giá: trễ chuyến, bếp cả phường mất hơi nóng.
- Cho cá số 7 chủ động thử thoát, thất bại, rồi chọn quẫy gọi người trên bờ.
- Đặt khoảnh khắc rợn và điểm thấp ngay trước cú lật.
- Cú lật do cá số 7 chọn, trả giá bằng việc lỡ chuyến đi cùng đàn.
- Rút lời thoại LONG và SHORT; mỗi short trọn có câu đùa chốt trước câu dẫn link.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Cá số 7 và ông Táo có lên khỏi đáy kênh trước giao thừa để trả lửa cho cả phường không?
- **Đồng hồ / cái giá:** Táo phải lên trời nộp sổ trước giao thừa. Trễ hạn, Thiên đình giữ hơi nóng, bếp cả phường lạnh; Táo lỡ chuyến chầu, cá số 7 vẫn mắc kẹt.
- **Ba nấc leo thang:** Cá số 7 tìm khe túi nhưng mắc dưới đống rác; Táo thử xé túi nhưng càng kéo càng chìm; cá số 7 chọn quẫy báo động, đổi tự do lấy cơ hội được vớt.
- **Điểm thấp:** Giao thừa, bếp cả phường mất hơi nóng; tiếng quẫy dưới kênh bị nước và túi nylon nuốt mất.
- **Cú lật:** Cá số 7 tự chọn dồn sức quẫy ba lần để người trên bờ nhìn thấy chùm túi. Người dân xuống vớt; Táo lên trời nộp sổ muộn. Cá số 7 lỡ chuyến đi cùng đàn.
- **Khoảnh khắc rợn:** Đúng giao thừa, cả phường mất hơi nóng cùng lúc; một tiếng quẫy từ kênh đen vang lên, rồi ba trăm tiếng.
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
| 0:00 | A01 | **CA**: Tôi là cá số bảy. Túi nhà anh Thịnh. Đáy kênh. | nước óc ách · bọt |
| 0:04 | A02 | **TAO**: Cá ơi, sổ ta còn ba trăm trang. Bao giờ đi được? | lật sổ |
| 0:08 | A01 | **CA**: Khi có người mở túi, sếp ạ. Nước bảo cứ chờ. | mõ cộc |
| 0:12 | S01 → S26 | **MN**: Lại mò vào à? Hôm nay tao kể chuyện cá bị giao nhầm phương tiện. | mõ cộc |
| 0:18 | A03 | **CA**: Sáng hai ba tháng Chạp, anh Thịnh mua mười hai con. Người bán dặn mở túi rồi hãy thả. | chợ ồn |
| 0:25 | S26 | **MN**: Dân gian bảo Táo cưỡi cá chép về trời, tâu việc trong nhà. Cá là xe. | “CÁ CHÉP = XE CỦA TÁO” |
| 0:34 | A04 → A05 | **CA**: Thịnh dừng giữa cầu, xách cả chùm túi. Dưới này, đàn cá thấy trời mở ra. | xe cộ |
| 0:42 | A05 | **THINH**: Mở từng túi lâu lắm. Ném cả túi, xuống dưới tự nó bơi ra. Tôi còn về nấu cơm. |  |
| 0:49 | A04 | **CA**: Tôi bay. Bộp. Cắn mép túi, trượt. Đẩy đáy túi, kẹt. | túi rơi bộp ×12 |
| 0:58 | A01 | **CA**: Tôi tìm khe thở. Túi mắc dưới rác, mép ép sát bùn. Đẩy bên này, rác đẩy ngược bên kia. | bọt |
| 1:08 | A02 | **TAO**: Ta đi bốn trăm năm, bằng thuyền, ngựa, cá. Chưa lần nào mắc dưới nước. Sổ còn khô, râu đã ướt. |  |
| 1:18 | S26 | **MN**: Thả cá là để cá sống, đưa người đi. Thả cả túi thì được đúng cái túi. |  |
| 1:25 | A02 | **TAO**: Ta phải lên trời nộp sổ trước giao thừa. Trễ hạn, Thiên đình giữ hơi nóng; bếp cả phường lạnh. | “HẠN: GIAO THỪA” · lật sổ |
| 1:36 | A01 → A02 | **CA**: Sếp thử xé túi đi. Mép này mỏng. |  |
| 1:40 | A02 | **TAO**: Ta thử rồi. Túi rách chút, nước tràn vào. Kéo nữa là chìm sâu. Ta chỉ tìm cách thoát. | túi sột soạt |
| 1:51 | A01 | **CA**: Tôi cắn, đẩy, gọi. Chỉ có nước trả lời. Vùng càng mạnh, túi kéo tôi sát bùn hơn. | bọt |
| 2:01 | A02 | **TAO**: Còn bao lâu? |  |
| 2:03 | A01 | **CA**: Em không có đồng hồ. Trên kia đèn đỏ đang loang xuống. | nhạc dừng |
| 2:11 | A06 | **MN**: Đêm ba mươi. Cả phường đếm ngược bên nồi bánh chưng. Ai cũng tìm góc đẹp chụp mâm cơm. | đếm ngược xa |
| 2:21 | A06 → A07 | **MN**: Ba. Hai. Một. Không. | đếm ngược · cắt nhạc |
| 2:26 | A07 | **MN**: Đúng tiếng không, cả phường mất hơi nóng. Bếp từ báo lỗi; bếp ga vẫn xanh, nồi thôi sôi. | tít tít · im |
| 2:39 | A04 | **MN**: Từ kênh đen vọng lên một tiếng quẫy. Rồi ba trăm tiếng. | quẫy ×1…×300 · im 2 s |
| 2:47 | A01 | **CA**: Trên bờ reo năm mới. Em còn sức quẫy ba lần. Có thể họ nghe thấy. |  |
| 2:55 | A02 | **TAO**: Đừng phí sức vì cuốn sổ của ta. |  |
| 2:58 | A01 | **CA**: Em chọn phí cho đúng việc. Nếu không ai nghe, ít nhất em đã tự gọi mình. |  |
| 3:08 | A01 | **CA**: Một. Hai. Ba. | quẫy mạnh ×3 |
| 3:12 | A09 | **MN**: Có người nghe tiếng nước, thấy chùm túi mắc dưới rác. Cả phường xuống kênh, chẳng ai còn tạo dáng. | bước nước · tiếng người |
| 3:24 | A09 | **MN**: Túi được mở, cá được thả, Táo bay đi nộp sổ muộn. Bếp có hơi nóng lại. | bọt · nồi sôi |
| 3:35 | A05 → A09 | **MN**: Thịnh ném mười hai túi. Mùng một, áo mới ở nhà, anh lội bùn vớt đủ mười hai. | nước óc ách |
| 3:43 | A01 | **CA**: Lần sau ra bờ nhé. Mở túi mất năm giây. Em lỡ chuyến cùng đàn, nhưng còn được bơi bằng vây mình. |  |
| 3:54 | A02 | **TAO**: Sổ năm nay thêm lý do nộp muộn: kẹt túi nylon. Thiên đình chắc phải mở mục riêng. | “LÝ DO: KẸT TÚI NYLON” |
| 4:04 | S33 → S34 | **MN**: Lười năm giây ngày hai ba, mùng một lội bùn năm tiếng. Mở túi vẫn rẻ hơn. | rít điếu cày |
| 4:12 | B02 | **MN**: Tập sau: gian thương ép giá vét sạch đào rừng. Dưới gốc đào, hai ông thần đợi khách cầm phong bì. | “TẬP SAU” · whoosh |
| 4:24 | S06 | **MN**: Bấm đăng ký đi. Năm giây thôi. Lần này khỏi mở túi cá. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN

- **CA**: Tôi là cá số bảy. Túi nhà anh Thịnh. Đáy kênh. (A01) · pop "CÁ SỐ 7"
- **TAO**: Cá ơi, sổ ta còn ba trăm trang. Bao giờ đi được? (A02)
- **CA**: Khi có người mở túi, sếp ạ. Nước bảo cứ chờ. (A01)
- **THINH**: Mở từng túi lâu lắm. Ném cả túi, xuống dưới tự nó bơi ra. (A05)
- **CA**: Cắn mép túi, trượt. Đẩy đáy túi, kẹt. Dưới này, ba trăm túi khác cũng đang chờ. (A04)
- **MN**: Cá biết bơi. Túi nylon thì chưa học. Dịch vụ hậu mãi dưới đáy kênh đấy. (S26)
- *(không lời, 0.8 s)* (A01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN

- **THINH**: Mở từng túi lâu lắm. Ném cả túi, xuống dưới tự nó bơi ra. (A05)
- **CA**: Tôi bay. Bộp. Cắn mép túi, trượt. Đẩy đáy túi, kẹt. (A04) · pop "CÁ SỐ 7"
- **CA**: Túi mắc dưới đống rác, mép ép sát bùn. Tôi đẩy bên này, rác đẩy ngược bên kia. (A01)
- **MN**: Thả cá là để cá sống, đưa người đi. Thả cả túi thì được đúng cái túi. (S26)
- **CA**: Tôi tìm khe thở. Bên này bùn, bên kia rác. Trên này chỉ có nước trả lời. (A01)
- **MN**: Thả xong bắt cá tự mở hộp. Dịch vụ hậu mãi đúng là hết lòng. (S26)
- *(không lời, 0.8 s)* (A01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN

- **CA**: Trong mỗi túi, một con cá và một ông Táo đang chờ. Như tắc đường, chỉ có nước thay mặt đường. (A01) · pop "CÁ SỐ 7"
- **TAO**: Ta đi bốn trăm năm, thuyền, ngựa, cá. Sổ còn khô mà râu đã ướt. (A02) · pop "ÔNG TÁO"
- **MN**: Thả cá là để cá sống, đưa người đi. Thả cả túi thì được đúng cái túi. (S26)
- **CA**: Tôi cắn, đẩy, gọi. Chỉ có nước trả lời. (A01)
- **TAO**: Cuối cùng xếp hàng dưới đáy kênh. Chuyến này không có quầy ưu tiên à? (A02)
- **MN**: Trên trời tắc đường còn có mây. Dưới này có túi niêm phong. (S26)
- *(không lời, 0.8 s)* (A02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN

- **MN**: Ba. Hai. Một. Không. (A06)
- **MN**: Đúng tiếng không, cả phường mất hơi nóng. Bếp từ báo lỗi; bếp ga vẫn xanh, nồi thôi sôi. (A07)
- **MN**: Từ kênh đen vọng lên một tiếng quẫy. Rồi ba trăm tiếng. (A04)
- **CA**: Trên bờ reo năm mới. Em còn sức quẫy ba lần. Có thể họ nghe thấy. (A01)
- **MN**: Người ta đếm ngược giỏi. Đếm xem có ai xuống vớt thì phải đợi. (A06)
- *(không lời, 0.8 s)* (A04)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN

- **MN**: Túi được mở, cá được thả, Táo bay đi nộp sổ muộn. Bếp có hơi nóng lại. (A09)
- **MN**: Thịnh ném mười hai túi. Mùng một, anh lội bùn vớt đủ mười hai. (A05 → A09)
- **CA**: Mở túi mất năm giây. Em lỡ chuyến cùng đàn, nhưng còn được bơi bằng vây mình. (A01) · pop "CÁ SỐ 7"
- **TAO**: Sổ năm nay thêm lý do nộp muộn: kẹt túi nylon. Thiên đình chắc phải mở mục riêng. (A02)
- **MN**: Lười năm giây ngày hai ba, mùng một tự kê khai công tác lội bùn. (S33)
- *(không lời, 0.8 s)* (A01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER

- **CA**: Tôi là cá số bảy. Túi nhà anh Thịnh. Đáy kênh. (A01) · pop "CÁ SỐ 7"
- **TAO**: Ta phải nộp sổ trước giao thừa. Trễ hạn, Thiên đình giữ hơi nóng; bếp cả phường lạnh. (A02) · pop "ÔNG TÁO"
- **MN**: Đúng tiếng không, cả phường mất hơi nóng. Bếp từ báo lỗi; bếp ga vẫn xanh, nồi thôi sôi. (A07)
- **CA**: Em còn sức quẫy ba lần. Có thể họ nghe thấy. (A01)
- **MN**: Từ kênh đen vọng lên một tiếng quẫy. Rồi ba trăm tiếng. (A04)
- **MN**: Dưới mặt nước, ai đang gọi người trên bờ? (A04)

### SH7 — TRAILER

- **TAO**: Túi rách chút, nước tràn vào. Kéo nữa là chìm sâu. Ta chỉ tìm cách thoát. (A02) · pop "ÔNG TÁO"
- **CA**: Tôi cắn, đẩy, gọi. Chỉ có nước trả lời. Vùng càng mạnh, túi kéo tôi sát bùn hơn. (A01) · pop "CÁ SỐ 7"
- **MN**: Đêm ba mươi, cả phường đếm ngược bên nồi bánh chưng. Ai cũng tìm góc đẹp chụp mâm cơm. (A06)
- **MN**: Từ kênh đen vọng lên một tiếng quẫy. Rồi ba trăm tiếng. (A04)
- **CA**: Em còn sức quẫy ba lần. Nếu họ nghe thấy, em sẽ được mở túi. Có thể. (A01)
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
