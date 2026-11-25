# Dự án 42 — Vong nhà hoang "Đơn hàng cho bà" (v3, 2026-11-24)

- Rút lời LONG, giữ câu chuyện trong khoảng 3:00–3:15.
- Giữ đồng hồ trước đêm Chủ nhật, ba nấc leo thang và cái giá Khánh phải trả.
- Đưa khoảnh khắc rợn đến sát điểm thấp nhất; Khánh tự chọn trả nợ.
- Mỗi short được mở rộng, có punch riêng trước câu dẫn link ở bản TRỌN.
- Bỏ câu Ma Nó báo trước cú lật; giữ teaser tập sau phát Thứ Hai.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Khánh có dám trả đủ 37 đơn bom hàng trước đêm Chủ nhật, khi bà nội đã mất đang nhận chúng như quà cháu gửi?
- **Đồng hồ / cái giá:** Trước đêm Chủ nhật, Khánh phải trả tiền cho 37 shipper; nếu trượt, món nợ vẫn còn và bà Lựu vẫn ngồi đầu giường mỗi đêm.
- **Ba nấc leo thang:** Khánh định xóa camera nhưng giữ clip vì đang lên xu hướng; chặn địa chỉ rồi trốn về căn hộ nhưng bà vẫn chờ; bán dàn máy, chạy giao hàng và trả từng đơn.
- **Điểm thấp:** Ba giờ sáng, bà Lựu ngồi cạnh giường nhắc Khánh rằng cậu chưa trả tiền cho người giao hàng.
- **Cú lật:** Khánh tự chọn bán dàn máy, đi giao hàng và trả đủ 37 đơn; cái giá là mất máy quay, mất tiền và phải làm ca đêm.
- **Khoảnh khắc rợn:** Chuông cổng reo dù nhà mất điện; đèn dầu lần lượt đi xuống các tầng; bàn tay già đeo vòng ngọc chìa ra.
- **Câu kết:** “Làm nội dung bẩn thì chọn tên người nhận cho cẩn thận. Mày ghi tên ai, người ấy có thể ra nhận thật.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34; S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| KHANH | Khánh, kênh troll bom hàng; hoodie, tai nghe | V05 | Adam bựa | `anull` |
| BINH | Anh Bình, shipper; áo khoác giao hàng, mũ bảo hiểm, thùng giữ nhiệt | V07, V09 | Thiền Tâm Đức | `atempo=1.03` |
| LUU | Bà Lựu, bà nội Khánh; áo dài lụa nâu, tóc búi, vòng ngọc | V08, V10, V11 | Ngọc Huyền | `atempo=0.85,aecho=0.8:0.5:60:0.3` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "KHANH": {"preset": "Adam bựa", "fx": "anull"}, "BINH": {"preset": "Thiền Tâm Đức", "fx": "atempo=1.03"}, "LUU": {"preset": "Ngọc Huyền", "fx": "atempo=0.85,aecho=0.8:0.5:60:0.3"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | V02 | *(không lời, 2 s)* | Ngón tay bấm chuông gỉ · im lặng |
| 0:02 | V02 | *(không lời, 2 s)* | Chuông cổng vang từ bên trong: “kính coong” · nhạc tắt |
| 0:04 | V03 | *(không lời, 2 s)* | Đèn dầu ở cửa sổ tầng ba |
| 0:06 | S01 → S26 | **MN**: Lại mò vào à? Mười suất gà tới căn nhà mất điện. Người nhận thì chưa chắc biết đặt bằng app. | mõ CỘC |
| 0:13 | V04 | **MN**: Khánh làm kênh “Bom hàng troll shipper”. Đặt đồ ăn tới nhà hoang, giấu camera, quay người giao gọi cửa rồi bỏ đi. Ba mươi bảy đơn, ba mươi bảy người ôm hàng về. | “37 ĐƠN” · “37 SHIPPER” |
| 0:26 | V05 | **KHANH**: Ghi tên cho thật chứ. Bà Lựu. Bà nội tao. Shipper gọi giữa đêm, nghe đã thấy có chuyện. | gõ phím |
| 0:34 | V05 | **KHANH**: View lên, tiền về. Tiền gà à? Có phải tao nhận đâu. | ting |
| 0:39 | S26 | **MN**: Ba triệu view, Khánh gọi là nội dung tương tác. Ba mươi bảy shipper gọi là ba mươi bảy ca làm mất tiền. | “3 TRIỆU VIEW” |
| 0:48 | V01 | **MN**: Cuối phố là căn nhà cũ của Khánh. Bà Lựu mất hai mươi năm. Cửa đóng, vườn mọc um, bàn thờ lạnh tanh. | gió đêm |
| 0:57 | V05 | **KHANH**: Nhà tao, tao đặt. Ai cấm? Không ai ở thì ai nhận? |  |
| 1:03 | V06 | **MN**: Khánh có ba màn hình, một kênh kiếm tiền và một nút xóa video. Nó nghe chuyện nhà cũ có người cũ ở rồi cười. | “NÚT XÓA” |
| 1:14 | V07 | **MN**: Đơn thứ ba mươi bảy. Nửa đêm. Anh Bình giao mười suất gà. Gọi khách, không ai nghe. | xe dừng · điện thoại đổ chuông |
| 1:23 | V02 | **MN**: Nhà mất điện đã lâu. Anh Bình bấm chuông cho có lệ. | nhạc tắt |
| 1:29 | V02 | **MN**: Trong nhà có tiếng chuông. Kính coong. | chuông cũ |
| 1:33 | V03 | **MN**: Cửa sổ tầng ba sáng đèn dầu. Rồi tầng hai, tầng một. Như có người cầm đèn đi xuống cầu thang. | đèn dầu xì · bước chân nhẹ |
| 1:44 | V08 | **MN**: Cổng sắt kẽo kẹt mở. Một bàn tay già đeo vòng ngọc chìa ra. | cổng kẽo kẹt · im 2 s |
| 1:51 | V08 | **LUU**: Lựu đây. Cháu Khánh gửi đấy à? Tuần nào nó cũng ghi tên bà. | túi gà sột soạt |
| 1:58 | V09 | **MN**: Anh Bình buông túi, quay xe chạy một mạch. Mũ rơi lộc cộc giữa đường. Không ai đứng lại đòi tiền. | xe rú ga · mũ rơi |
| 2:06 | V04 | **MN**: Camera quay cổng tự mở. Túi gà đi vào bóng tối. Khánh xem lại ba lần. Lần thứ tư, tay nó mới thôi cầm chuột. | tiếng video rè |
| 2:17 | V05 | **KHANH**: Không ai nhận mà túi biến mất? Nhà tao có ai đâu? |  |
| 2:23 | V05 | **MN**: Nấc một: Khánh định xóa video. Nhưng clip đang lên xu hướng. Xóa thì mất view; giữ thì phải nhìn lại cái cổng. Nó giữ. | “XÓA?” · con trỏ dừng |
| 2:35 | V05 | **KHANH**: Chắc góc quay lỗi. Mai tao chặn địa chỉ này trên app. |  |
| 2:40 | V06 | **MN**: Nấc hai: nó chặn địa chỉ, tắt camera, về căn hộ đóng rèm. Hai đêm không có chuông. Khánh bắt đầu nghĩ mình thắng. | “ĐÊM 1” · “ĐÊM 2” |
| 2:53 | V10 | **MN**: Đêm thứ ba, ba giờ sáng, nó tỉnh giấc. Bà Lựu ngồi mép giường. Trên bàn là ngọn đèn dầu. | đèn dầu xì |
| 3:02 | V11 | **LUU**: Cháu ngoan. Tuần nào cũng gửi gà cho bà. Hồi bà sống, bà chưa được ăn. |  |
| 3:09 | V11 | **LUU**: Bà hỏi anh shipper rồi. Cháu chưa trả tiền. Cháu đặt thì cháu trả. Bà không có tiền. |  |
| 3:16 | V05 | **KHANH**: Bà… bà ở đây thật à? |  |
| 3:20 | V10 | **MN**: Khánh nhìn bà, nhìn ba mươi bảy cái tên “Bà Lựu” trên app. Hết đường đổ cho góc quay. | nhạc dồn nhẹ |
| 3:29 | V11 | **LUU**: Bà không mắng cháu đâu. Bà chỉ muốn người ta được trả tiền. Đêm mai bà lại ngồi đây nhé. |  |
| 3:37 | V05 | **MN**: Ba giờ sáng. Một người đã mất nhắc nó khoản nợ nó đem ra kiếm view. Khánh tự đặt hạn: trước đêm Chủ nhật, trả đủ ba mươi bảy đơn. | “HẠN: ĐÊM CHỦ NHẬT” |
| 3:50 | V05 → V12 | **MN**: Nấc ba: Khánh bán máy quay, bán ba màn hình. Vẫn thiếu. Nó chạy giao hàng đêm, nhận đúng tiền rồi trả dần cho những người từng bị nó đem ra làm trò cười. | xe máy đêm |
| 4:04 | V12 | **KHANH**: Đây là đơn thứ ba mươi bảy. Tiền đủ rồi. Xin lỗi anh vì đã bắt anh chạy chuyến vô ích. | tiếng app ting |
| 4:12 | V12 | **MN**: Chủ nhật, Khánh trả xong. Không nhạc chiến thắng. Chỉ còn cái ví nhẹ, bộ máy đã bán và lịch chạy ca tối tuần sau. | “37/37 · ĐÃ TRẢ” |
| 4:24 | V06 | **MN**: Nó về nhà cũ, lau bàn thờ, thắp hương. Đặt hộp gà với gói tương cà lên đó. Lần này, người mua là nó. | que diêm · “ting” thanh toán |
| 4:35 | V11 | **LUU**: Lần này có người trả tiền rồi. Bà ăn ngon hơn. Tương cà thì bà chưa quen. |  |
| 4:43 | S33 → S34 | **MN**: Làm nội dung bẩn thì chọn tên người nhận cho cẩn thận. Mày ghi tên ai, người ấy có thể ra nhận thật. | rít điếu cày |
| 4:52 | B02 | **MN**: Thứ Hai: ba anh em tranh đất mặt tiền, đòi dời mộ bố để chia. Mộ ấy ấm như người còn sống. | “TẬP SAU · THỨ HAI” · whoosh |
| 5:02 | S06 | **MN**: Bấm đăng ký đi. Lần sau giao đồ nhớ giao tận tay. Có người nhận thật thì tiền cũng thật đấy. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN · Chuông nhà mất điện vẫn reo · 9:16 · 35 s

- **MN**: Nhà này mất điện hai mươi năm rồi. (V02)
- **MN**: Anh Bình giao mười suất gà tới cổng. Khách không nghe máy, anh bấm chuông cho có lệ. (V07 → V02)
- **MN**: Trong nhà vang lên tiếng “kính coong”. Chuông cũ, điện mất, mà nghe rõ như có người đứng bên trong. (V02)
- **MN**: Cửa sổ tầng ba sáng đèn dầu. Rồi tầng hai. Rồi tầng một, như có người đang đi xuống. (V03)
- **MN**: Cổng mở. Một bàn tay già đeo vòng ngọc chìa ra. (V08) · pop “BÀ LỰU”
- **MN**: Nhà mất điện mà chuông vẫn làm ca đêm. (S26)
- *(không lời, 0.8 s)* (V08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 — TRỌN · Ba mươi bảy đơn, ba triệu view · 9:16 · 34 s

- **MN**: Khánh đặt đồ ăn tới nhà hoang, giấu camera, quay shipper gọi cửa rồi bỏ đi. Ba mươi bảy đơn. Ba mươi bảy người ôm hàng về. (V04)
- **KHANH**: Ghi tên cho thật chứ. Bà Lựu. Bà nội tao. Shipper gọi giữa đêm, nghe đã thấy có chuyện. (V05)
- **MN**: Ba triệu view. Khánh gọi là nội dung tương tác. Ba mươi bảy shipper gọi là ba mươi bảy ca làm mất tiền. (S26)
- **KHANH**: Nhà tao, tao đặt. Ai cấm? Không ai ở thì ai nhận? (V05)
- **MN**: Đêm ấy, có người ra nhận thật. (V08) · pop “BÀ LỰU”
- **MN**: Khánh có ba triệu view. Người giao có ba mươi bảy lần chạy không công. (S26)
- *(không lời, 0.8 s)* (V08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 — TRỌN · Bà tưởng cháu gửi quà · 9:16 · 33 s

- **LUU**: Lựu đây. Cháu Khánh gửi đấy à? Tuần nào nó cũng ghi tên bà. (V08) · pop “BÀ LỰU”
- **MN**: Ba mươi bảy lần ghi tên. Bà tưởng cháu nhớ bà, nên lần nào có người gọi cổng bà cũng ra nhận. (V08)
- **MN**: Thằng cháu chỉ nhớ tên bà dễ gõ. (V05)
- **KHANH**: Không ai nhận mà túi biến mất? Nhà tao có ai đâu? (V05)
- **MN**: Túi gà tới đúng địa chỉ. Người nhận cũng đúng tên. Chỉ có người trả tiền là chưa thấy đâu. (V04)
- **MN**: Khuyến mãi tình thân, phí ship để người khác lo. (S26)
- *(không lời, 0.8 s)* (V04)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 — TRỌN · Cháu đặt thì cháu trả · 9:16 · 36 s

- **LUU**: Cháu ngoan. Tuần nào cũng gửi đồ ăn cho bà. Bà chưa được ăn gà rán hồi còn sống. (V11) · pop “BÀ LỰU”
- **LUU**: Bà hỏi anh shipper rồi. Cháu chưa trả tiền cho người ta. (V11)
- **LUU**: Cháu đặt thì cháu trả. Bà không có tiền. (V11)
- **MN**: Ba giờ sáng. Khánh nhìn bà, rồi nhìn ba mươi bảy cái tên trên app. (V10)
- **KHANH**: Bà… bà ở đây thật à? (V05)
- **MN**: Bà không mắng. Bà chỉ muốn người giao được trả tiền. Đêm mai bà lại ngồi đây nhé. (V11)
- **MN**: Hóa đơn tới tận giường, còn miễn phí nhắc nợ. (S26)
- *(không lời, 0.8 s)* (V10)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 — TRỌN · Hết ba màn hình, còn ca đêm · 9:16 · 38 s

- **MN**: Trước đêm Chủ nhật, Khánh phải trả đủ ba mươi bảy đơn. Nếu không, món nợ còn nguyên và bà vẫn ngồi cạnh giường mỗi đêm. (V05)
- **MN**: Nó bán dàn máy quay, bán ba màn hình. Vẫn thiếu. Thế là Khánh chạy giao hàng đêm, trả từng đơn. (V12)
- **KHANH**: Đây là đơn thứ ba mươi bảy. Tiền đủ rồi. Xin lỗi anh vì đã bắt anh chạy một chuyến vô ích. (V12)
- **MN**: Một cái ví nhẹ. Một lịch chạy ca tối tuần sau. (V12)
- **MN**: Máy quay hết, ca đêm còn. Ít ra lần này người giao được tính tiền. (S33)
- *(không lời, 0.8 s)* (S34)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 — TRAILER · Bàn tay ở cổng · 9:16 · 32 s

- **MN**: Nửa đêm. Mười suất gà. Một căn nhà mất điện. Anh Bình gọi khách, không ai nghe máy. (V07)
- **MN**: Anh bấm thử cái chuông gỉ cho có lệ. Nhà này đóng cửa lâu rồi. (V02)
- **MN**: Trong nhà vang lên tiếng “kính coong”. (V02)
- **MN**: Tầng ba sáng đèn dầu. Rồi tầng hai. Rồi tầng một. Như có người đi xuống. (V03)
- **MN**: Cổng sắt bắt đầu mở. Một bàn tay già đeo vòng ngọc chìa ra… (V08) · pop “BÀ LỰU”
- **MN**: Người nhận đã tới, còn câu hỏi là bà chờ ai. (S26)
- *(không lời, 0.8 s)* (V08)
- **MN**: Ai đang nhận hàng? Bản đầy đủ, link dưới. (S26)

### SH7 — TRAILER · Ba mươi bảy cái tên · 9:16 · 34 s

- **KHANH**: Ghi tên cho thật chứ. Bà Lựu. Bà nội tao. Shipper gọi giữa đêm, nghe đã thấy có chuyện. (V05)
- **MN**: Ba mươi bảy đơn đều ghi tên bà. Ba triệu view, còn ba mươi bảy shipper ôm hàng về. (V04)
- **LUU**: Lựu đây. Cháu Khánh gửi đấy à? Tuần nào nó cũng ghi tên bà. (V08) · pop “BÀ LỰU”
- **MN**: Khánh xem camera. Cổng mở, túi gà đi vào bóng tối. (V04)
- **KHANH**: Không ai nhận mà túi biến mất? Nhà tao có ai đâu? (V05)
- **MN**: Nếu tên người nhận luôn là bà, thì ai đang đứng sau cánh cổng? (S26)
- *(không lời, 0.8 s)* (V05)
- **MN**: Bà nhận vì sao? Bản đầy đủ, link dưới. (S26)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | v3 dùng |
|---|---|---|
| V01 | Biệt thự cổ kiểu Pháp bỏ hoang cuối phố: vườn um tùm, giàn hoa giấy khô, cổng sắt gỉ; bản đêm và bản ngày | ✓ |
| V02 | Cận ngón tay bấm cái chuông cổng gỉ sét kiểu cũ | ✓ |
| V03 | Mặt tiền biệt thự đêm: đốm đèn dầu lần lượt ở cửa sổ tầng ba, hai, một | ✓ |
| V04 | Phòng Khánh: ba màn hình camera giấu, cảnh cổng hoang với một shipper đứng chờ | ✓ |
| V05 | Khánh cận: hoodie, tai nghe; bản cười, bản tái mét, bản khóc | ✓ |
| V06 | Phòng khách biệt thự phủ bụi, bàn thờ lạnh, di ảnh bà cụ tóc búi vòng ngọc; bản sau Khánh thắp hương, hộp gà rán trên bàn thờ | ✓ |
| V07 | Anh Bình dừng xe máy trước cổng hoang, thùng giữ nhiệt sau xe, đèn xe rọi | ✓ |
| V08 | Cực cận cổng sắt hé, bàn tay già đeo vòng ngọc chìa ra đỡ túi đồ ăn, phía sau tối mờ một mái tóc búi | ✓ |
| V09 | Anh Bình buông túi đồ ăn, quay xe máy phóng đi, mũ bảo hiểm rơi trên đường đêm | ✓ |
| V10 | Phòng ngủ Khánh 3 giờ sáng: bóng bà cụ ngồi mép giường, ngọn đèn dầu trên bàn | ✓ |
| V11 | Bà Lựu cận: áo dài lụa nâu cũ, tóc búi, vòng ngọc, cười hiền; viền người mờ | ✓ |
| V12 | Khánh mặc áo khoác giao hàng chạy xe máy đêm, thùng giữ nhiệt sau xe, mặt mệt | ✓ |

## Lịch

| Nội dung | Lịch đăng |
|---|---|
| LONG | Thứ Năm 15/04 18:00 (+07) |
| SH1 | Thứ Năm 15/04 19:00 (+07) |
| SH2 | Thứ Sáu 16/04 11:30 (+07) |
| SH3 | Thứ Sáu 16/04 19:00 (+07) |
| SH4 | Thứ Bảy 17/04 11:30 (+07) |
| SH5 | Thứ Bảy 17/04 19:00 (+07) |
| SH6 | Chủ Nhật 18/04 11:30 (+07) |
| SH7 | Chủ Nhật 18/04 19:00 (+07) |
