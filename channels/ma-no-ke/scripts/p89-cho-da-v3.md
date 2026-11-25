# Dự án 89 — Chó đá "Bốn mươi con giữ cổng làng" (v3, 2026-11-24)

Nền: v2 (`p89-cho-da-v2.md`). Nâng cấp kịch tính theo bài học P04:
- **Đồng hồ + cái giá cụ thể**: Hạn chót trước 5:00 sáng (gà gáy lần hai, dân làng thức giấc mở cổng) và hạn giao hàng cho quán cầy tơ lúc 4:30; trượt hạn thì xe hết xăng, ăn đòn gánh của cả làng hoặc bị bắt tại trận cùng tang vật.
- **3 nấc leo thang chủ động của kẻ xấu**: Tuấn thử phóng cổng phụ ngõ mương (nấc 1) → thất bại, sai đàn em vần tượng đá ném xuống mương dọn đường nhưng đá nặng 3 tạ và bị hàng sau khép góc (nấc 2) → vứt xe bỏ chó chạy bộ leo tường rào vườn chuối nhưng ngõ nào cũng bị chó đá đón đầu dồn về ngã ba đình (nấc 3).
- **Điểm thấp nhất & khoảnh khắc rợn duy nhất**: 4:40 sáng, xe cạn xăng, người kiệt sức; bốn thằng ngồi bệt giữa đường trong sương lạnh, 40 con chó đá quây kín vòng tròn với 40 vệt rêu ướt kéo dài từ từng cổng ngõ hội tụ về.
- **Cú lật do nhân vật chọn và trả giá**: Kẻ trộm tự bấm 113 gọi công an đến cứu; mừng rỡ tự tra tay vào còng xin đi tù để thoát khỏi vòng chó đá.
- **Lời thoại LONG chuẩn 594 chữ** (khung 560–600 chữ, ≈3:00) theo khuôn bảng cảnh `| Mốc | Ảnh | Lời | Chữ / SFX |`.
- **Hệ thống 7 Shorts chuẩn format mới**: 5 TRỌN + 2 TRAILER (30–40 s, 9:16) có hook, leo thang, punch, khoảng lặng 0.8 s và pop tên nhân vật.

---

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Băng trộm chó lộng hành trong đêm liệu có thoát ra được trước khi trời sáng, khi đối thủ chặn đường chúng không phải là người mà là đàn chó đá không bao giờ ăn bả?
- **Đồng hồ + cái giá**: 5:00 sáng (gà gáy lần hai, dân làng mở cổng). Nếu trượt hạn: bị cả làng bắt tại trận cùng ba lồng chó trên xe, đối mặt đòn gánh của dân làng.
- **3 nấc leo thang**:
  1. *Nấc 1*: Cổng chính bị một hàng chó đá chắn ngang → Tuấn tưởng trò đùa, quay xe rồ ga phóng sang cổng phụ ngõ bờ mương → cổng phụ cũng bị một hàng chó đá khác bịt kín.
  2. *Nấc 2*: 4:00 sáng, sợ mất tiền và ăn đòn, Tuấn lệnh cho đàn em xuống vần đá ném xuống mương dọn đường → tượng đá 3 tạ rêu trơn như mọc rễ không nhúc nhích; vừa buông tay thì sau lưng nghe tiếng lê "rột… rột", thêm một hàng chó đá âm thầm khép kín đường lùi.
  3. *Nấc 3*: 4:20 sáng, Tuấn lệnh vứt xe bỏ lồng, bốn thằng chạy bộ leo tường rào vườn chuối hòng băng đồng thoát thân → nhưng chân chạy đến góc rào nào cũng thấy bóng chó đá ngồi chồm hổm trừng mắt đón đầu, ép dạt cả lũ về ngã ba đình làng.
- **Điểm thấp nhất**: 4:40 sáng, xe cạn xăng, người kiệt sức, sương lạnh buốt. Bốn thằng ngồi bệt giữa đường, tứ phía là 40 con chó đá quây kín vòng tròn, mắt đá trừng trừng bất động.
- **Khoảnh khắc rợn duy nhất**: Rạng sáng, sương mỏng lờ mờ. Dưới mặt đường nhựa, 40 vệt rêu xanh ướt kéo dài từ cổng từng ngôi nhà hội tụ về tâm vòng tròn nơi bốn thằng trộm ngồi bệt, như thể 40 khối đá ba tạ vừa tự mình lê đi trong đêm tĩnh mịch.
- **Cú lật (chọn và trả giá)**: Nghe tiếng then cài cổng sắt của cả làng lách cách mở, Tuấn Bả chủ động rút điện thoại bấm 113 báo công an đến cứu. Khi xe tuần tra tới, bốn thằng trộm mừng rỡ tự tra tay vào còng xin được áp giải đi gấp: chấp nhận đi tù để thoát khỏi vòng chó đá.
- **Câu kết**: Bà Hai đặt nắm cơm nguội trước mõm chó đá ("Ăn đi. Không có bả đâu"); Ma Nó mỉa mai kẻ trộm chó đụng phải chó cụ tổ nặng ba tạ không bao giờ ngủ.

---

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (dẫn chuyện, trào phúng, mỉa mai) | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| TUAN | Tuấn "Bả" (cầm đầu băng trộm chó, gắt gỏng, hoảng loạn) | C04 | Adam bựa | `atempo=1.05,asetrate=48000*1.02,aresample=48000` |
| CU | Bà Hai (bà cụ mất chó, chất phác, xót xa) | C05, C07 | Ngọc Huyền | `atempo=0.90,asetrate=48000*0.95,aresample=48000` |
| THON | Anh Lâm (trưởng thôn, nghiêm nghị, dứt khoát) | C10 | Thiền Tâm Đức | `atempo=1.0,anull` |

```json voices
{
  "MN": {
    "preset": "Thiện Minh",
    "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"
  },
  "TUAN": {
    "preset": "Adam bựa",
    "fx": "atempo=1.05,asetrate=48000*1.02,aresample=48000"
  },
  "CU": {
    "preset": "Ngọc Huyền",
    "fx": "atempo=0.90,asetrate=48000*0.95,aresample=48000"
  },
  "THON": {
    "preset": "Thiền Tâm Đức",
    "fx": "atempo=1.0,anull"
  }
}
```

---

## LONG (594 chữ lời thoại, dựng ≈3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | C01 | *(không lời, 2.5 s)* | "RẠNG SÁNG · ĐƯỜNG LÀNG" · sương · gà gáy xa · nhạc tắt |
| 0:03 | C02 | *(không lời, 1.8 s)* | vệt rêu ướt · đá lê rột rột · mõ CỘC |
| 0:05 | B02 | **MN**: Lại mò vào à? Đố mày con gì trung thành nhất giữ nhà? Chó chứ gì. | "CON GÌ GIỮ NHÀ?" · coc |
| 0:09 | S01 → S26 | **MN**: Nhưng nếu nó không ăn bả, nặng ba tạ… thích đi dạo đêm thì sao? | "NẶNG 3 TẠ" · braam |
| 0:15 | C03 | **MN**: Băng trộm Tuấn "Bả" lượn hai xe máy vào làng. Nghề chúng nó: ném bả, tống lồng. | "BĂNG TUẤN BẢ" · xe máy đêm · tach |
| 0:21 | C04 | **TUAN**: Trước năm giờ phải giao ba con cho quán. Tiền tươi hai triệu một em. Nhanh lên! | "HẠN: TRƯỚC 5:00 SÁNG" · "2 TRIỆU / EM" · ting |
| 0:28 | C05 | **CU**: Con Vàng theo tôi mười năm. Sáng ra chỉ còn sợi xích. Làng mất hai chục con rồi. | "MẤT 20 CON / THÁNG" · xích sắt |
| 0:34 | S26 | **MN**: Một tháng hai mươi con. Chó thật thì tham ăn, dính miếng bả là xong đời. | "DÍNH BẢ LÀ XONG" |
| 0:39 | C06 | **MN**: Nhưng làng này có tục lạ: cổng mỗi nhà đều đặt con chó đá từ thời cụ kỵ. | "TỤC: CHÓ ĐÁ GIỮ NHÀ" · gio |
| 0:45 | C07 | **MN**: Chó đá trừ tà, không có dạ dày, ném bả bằng thừa. | "KHÔNG ĂN BẢ" |
| 0:49 | C03 | **MN**: Ba giờ rưỡi. Tuấn nhét ba con vào lồng, rồ ga chuồn trước hạn giao hàng. | "3:30 SÁNG" · xe ga ru · chó ư ử |
| 0:56 | C08 | **MN**: Đèn pha quét tới cổng làng bỗng khựng. Ngang đường, một hàng chó đá ngồi sát sạt như bức tường. | "CHẮN ĐƯỜNG!" · phanh gap |
| 1:03 | C04 | **TUAN**: Đứa nào vác đá chắn đường thế này? Quay đầu! Phóng ngõ sau bờ mương! | "QUAY ĐẦU!" · ro ga |
| 1:09 | C08 | **MN**: Hai xe quay đầu sang cổng phụ. Đèn vừa rọi lên… lại một hàng chó đá ngồi chồm hổm trừng trừng. | "CỔNG PHỤ: CŨNG CHẮN" · braam |
| 1:17 | C04 | **TUAN**: Bốn giờ rồi! Bỏ chó mất tiền, ở lại ăn đòn! Xuống vần đá ném xuống mương mau! | "4:00 SÁNG" · tick |
| 1:23 | C02 | **MN**: Hai thằng ôm tượng vần thử. Nhưng khối đá ba tạ như mọc rễ xuống đường, lay không nhúc nhích. | "NẶNG 3 TẠ" · thở dốc |
| 1:30 | C02 | **MN**: Vừa buông tay, sau lưng vang lên tiếng đá lê rột rột. Một hàng chó đá nữa đã âm thầm bịt kín lối lùi. | "RỘT… RỘT" · da le · bassdown |
| 1:38 | C04 | **TUAN**: Vứt xe, bỏ lồng! Leo tường chuồn ra đồng mau! | "BỎ XE · CHẠY BỘ!" |
| 1:42 | C01 | **MN**: Bốn thằng thục mạng chạy bộ. Nhưng hễ chân rẽ tới bờ tường nào, góc tối nào… | chay gap · gio lanh |
| 1:48 | C08 | **MN**: Lại thấy bóng chó đá ngồi chờ sẵn, ép chúng dạt về ngã ba đình. | "DỒN VỀ NGÃ BA" |
| 1:54 | C01 | **MN**: Bốn giờ bốn mươi. Xe hết xăng, người kiệt sức. Bốn thằng trộm ngồi bệt giữa đường. | "4:40 SÁNG" · "HẾT XĂNG" · nhạc tắt |
| 2:00 | C08 | **MN**: Quanh chúng là bốn mươi con chó đá, quây thành vòng tròn khép kín, mặt hướng vào trong. | "40 CON QUÂY KÍN" · im |
| 2:06 | C02 | **MN**: Trên mặt đường, bốn mươi vệt rêu ướt kéo từ từng cổng ngõ về tâm vòng tròn. Như thể chúng vừa tự lê qua. Không con nào nhúc nhích. | "40 VỆT RÊU ƯỚT" · im 2 s |
| 2:16 | C04 | **TUAN**: Chúng nó không cắn… mà cứ trừng mắt nhìn thế này thì sống sao nổi! | "KHÔNG CẮN · CHỈ NHÌN" |
| 2:21 | C01 | **MN**: Gà gáy lần hai. Cổng sắt các nhà lách cách mở. Chạy không xong, ở lại thì ăn đòn. | ga gay · cong sat lach cach |
| 2:28 | C04 | **TUAN**: Bấm một một ba đi! Gọi công an đến cứu nhanh! | "GỌI 113 CỨU!" · bam may |
| 2:32 | C10 | **THON**: Bà con không được đánh người! Giữ nguyên hiện trường, giao công an! Thả chó ra trước! | "GIỮ NGUYÊN HIỆN TRƯỜNG" · loa xom |
| 2:38 | C04 | **TUAN**: Còng tay em đi các anh! Cho em lên xe nhanh! Đi tù cũng được, miễn ra khỏi làng này! | coi xe cong an · xich cong |
| 2:45 | S26 | **MN**: Lần đầu tiên có thằng trộm tự chìa tay vào còng, cảm ơn công an như cứu hộ. | "XIN ĐƯỢC ĐI TÙ" · chotdon |
| 2:51 | C05 | **CU**: Con Vàng! Về với bà rồi con ơi! | chó mừng ư ử |
| 2:54 | S26 | **MN**: Công an tra điện thoại, khui ra lò mổ, tìm lại được mười hai con chó cho bà con. | "TÌM LẠI 12 CON" |
| 2:59 | C06 | **MN**: Xe công an vừa chạy, ngoảnh lại giữa đường đã trống trơn. Bốn mươi con chó đá đã về lại cổng từng nhà, rêu khô như chưa từng rời đi. | "TRỐNG TRƠN" · gio thoang |
| 3:09 | C07 | **CU**: Ăn nắm cơm đi con. Không có bả đâu. | "KHÔNG CÓ BẢ ĐÂU" |
| 3:13 | S33 → S34 | **MN**: Trộm chó thì nhớ: ở làng có những con chó không ăn bả, nặng ba tạ mà không bao giờ ngủ. | rít điếu cày · nha khoi |
| 3:20 | B02 | **MN**: Tập sau: nhà nuôi chim yến giữa phố, loa gọi suốt ngày đêm. Ba giờ sáng mất điện, trên mái nhà ấy… có đàn chim khác. | "TẬP SAU" · whoosh |
| 3:27 | S06 | **MN**: Bấm đăng ký đi. Chó đá nhà tao canh cửa rồi đấy. | "ĐĂNG KÝ" · mõ CỘC |

---

## SHORTS (5 TRỌN + 2 TRAILER)

### SH1 (TRỌN) — Hồ sơ chó đá
- **MN**: Hồ sơ chó đá làng Đỗ. Cả làng mất chó, trừ con chó không ăn bả. (S01) · pop "MA NÓ"
- **MN**: Một. Chó thật thì tham ăn, ném miếng bả là xong đời. (C03)
- **MN**: Hai. Chó đá cụp tai từ thời cụ kỵ, không ruột gan, nặng ba tạ. (C06) · pop "CHÓ ĐÁ"
- **MN**: Ba. Đêm trộm vào làng… chó đá ra đứng giữ làng. (C08)
- **TUAN**: Đứa nào vác đá chắn đường thế này? (C04) · pop "TUẤN BẢ"
- **MN**: Đèn rọi tới đâu, bốn mươi con chó đá ngồi chờ tới đó. (C08)
- **TUAN**: Bấm một một ba đi! Gọi công an đến cứu nhanh! (C04)
- *(lặng 0.8 s)*
- **MN**: Lần đầu trộm xin đi tù để thoát thân. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRỌN) — Nghề trộm chó gặp đối
- **TUAN**: Trước năm giờ phải giao ba con cho quán. Tiền tươi hai triệu một em. Nhanh lên! (C04) · pop "TUẤN BẢ"
- **MN**: Băng Tuấn Bả chuyên ném bả, chích điện, tống lồng. (C03) · pop "MA NÓ"
- **CU**: Sáng ra chỉ còn sợi xích. Làng mất hai chục con rồi. (C05) · pop "BÀ HAI"
- **MN**: Nhưng đêm nay, chúng đụng phải thứ không bao giờ ngủ. (C06) · pop "CHÓ ĐÁ"
- **TUAN**: Xuống vần đá ném xuống mương mau! (C04)
- **MN**: Khối đá ba tạ như mọc rễ. Sau lưng đá lê rột rột bịt kín đường lùi. (C02)
- **TUAN**: Chúng nó không cắn… mà cứ trừng mắt nhìn thế này thì sống sao nổi! (C04)
- *(lặng 0.8 s)*
- **MN**: Thoát bằng cách nào? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 (TRỌN) — Cơm không có bả
- **CU**: Ăn nắm cơm đi con. Không có bả đâu. (C07) · pop "BÀ HAI"
- **MN**: Con chó này không bao giờ sủa, chỉ ngồi chồm hổm canh cổng nhà bà Hai. (C06) · pop "MA NÓ"
- **MN**: Đêm kẻ trộm lùa bắt chó cả làng, nó vẫn ngồi im. (C03)
- **MN**: Đến rạng sáng, bốn thằng trộm bị nhốt cứng giữa ngã ba đình. (C09) · pop "TUẤN BẢ"
- **THON**: Giữ nguyên hiện trường, giao công an! Thả chó ra trước! (C10) · pop "TRƯỞNG THÔN"
- **CU**: Con Vàng! Về với bà rồi con ơi! (C05)
- **MN**: Trộm bị áp giải đi, bốn mươi con chó đá tự về lại cổng, rêu khô cong. (C06)
- *(lặng 0.8 s)*
- **MN**: Đêm ấy chó đá đi kiểu gì? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 (TRỌN) — Bốn mươi vệt rêu xanh
- *(không lời, 1.5 s)* · pop "40 VỆT RÊU XANH" (C02)
- **MN**: Bốn giờ bốn mươi. Xe hết xăng, người kiệt sức. Bốn thằng trộm ngồi bệt giữa đường. (C01) · pop "MA NÓ"
- **MN**: Quanh chúng là bốn mươi con chó đá, quây thành vòng tròn khép kín, mặt hướng vào trong. (C08) · pop "CHÓ ĐÁ"
- **MN**: Trên mặt đường, bốn mươi vệt rêu ướt kéo từ từng cổng ngõ về tâm vòng tròn. (C02)
- **MN**: Như thể chúng vừa tự lê qua trong đêm tĩnh mịch. Không con nào nhúc nhích. (C02)
- **TUAN**: Còng tay em đi các anh! Đi tù cũng được, miễn ra khỏi làng này! (C04) · pop "TUẤN BẢ"
- *(lặng 0.8 s)*
- **MN**: Trộm chó sợ công an một, sợ chó đá mười. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN) — Đi tù mừng rơi nước mắt
- **TUAN**: Còng tay em đi các anh! Cho em lên xe nhanh! (C04) · pop "TUẤN BẢ"
- **MN**: Lần đầu tiên trong lịch sử, có băng trộm thấy công an mà mừng như thấy cứu hộ. (S26) · pop "MA NÓ"
- **TUAN**: Đầu hôm đòi giao ba con trước năm giờ sáng, tiền tươi hai triệu một em. (C04)
- **MN**: Cuối hôm xe cạn xăng, bị bốn mươi con chó đá ba tạ quây kín ngã ba đình. (C09) · pop "CHÓ ĐÁ"
- **TUAN**: Bấm một một ba đi! Gọi công an đến cứu nhanh! (C04)
- **MN**: Đi đêm gặp ma đã sợ, đi trộm chó gặp bốn mươi con chó không bao giờ ngủ. (S34)
- *(lặng 0.8 s)*
- **MN**: Chi tiết cuộc vây bắt lúc rạng sáng, tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 (TRAILER) — Ai xếp hàng ngang đường?
- *(không lời, 2.0 s)* tiếng đá lê rột rột trong sương mỏng (C01) · pop "3:30 SÁNG"
- **MN**: Ba giờ rưỡi sáng, bắt xong ba con chó, băng trộm rồ ga phóng ra cổng làng. (C03) · pop "MA NÓ"
- **MN**: Đèn pha vừa quét tới cổng làng bỗng khựng lại. (C08)
- **MN**: Ngang đường, một hàng thứ gì đó thấp lè tè ngồi sát sạt như bức tường thành. (C08) · pop "CHÓ ĐÁ"
- **TUAN**: Đứa nào vác đá chắn đường thế này? Quay đầu! Phóng ngõ sau! (C04) · pop "TUẤN BẢ"
- **MN**: Nhưng sang ngõ sau, lại một hàng nữa ngồi chồm hổm trừng mắt nhìn. (C08)
- **TUAN**: Vứt xe, bỏ lồng! Leo tường chuồn mau! (C04)
- **MN**: Chân chạy tới đâu, bóng đá ngồi chờ tới đó. Ai đã điều động bốn mươi con chó đá trong đêm? (S26)
- **MN**: Bản đầy đủ, link dưới. (S26)

### SH7 (TRAILER) — Đồng hồ 5 giờ sáng
- **TUAN**: Bốn giờ rồi! Bỏ chó mất tiền, ở lại ăn đòn! (C04) · pop "ĐỒNG HỒ 4:00"
- **MN**: Hạn chót năm giờ sáng. Gà gáy lần hai là cả làng mở cổng. (S26) · pop "MA NÓ"
- **MN**: Hai thằng nhảy xuống vần tượng đá ném xuống mương dọn đường. (C02)
- **MN**: Tượng ba tạ nặng như mọc rễ. Vừa buông tay, sau lưng nghe rột rột… (C02)
- **MN**: Lối lùi bị bịt kín. Xe máy cạn xăng giữa ngã ba. (C01)
- **TUAN**: Chúng nó không cắn… mà cứ trừng mắt nhìn thế này thì sống sao nổi! (C04) · pop "TUẤN BẢ"
- *(tiếng then cài cổng sắt lách cách mở xa xa)* (C09)
- **MN**: Bốn thằng trộm sẽ chọn ăn đòn gánh hay làm gì để thoát thân? (S26)
- **MN**: Bản đầy đủ, link dưới. (S26)

---

## Hình
Tận dụng tài nguyên có sẵn: B02 + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Danh sách ảnh vẽ mới (16:9)
| Mã | Cảnh | Trạng thái v3 |
|---|---|---|
| C01 | Rạng sáng sương mỏng, đường làng, xa xa một hàng thấp chắn ngang đường; bản bốn thằng trộm ngồi bệt | **Dùng** (Cold open, nấc 3, điểm thấp 4:40) |
| C02 | Cận mặt đường nhựa có vệt rêu xanh ướt kéo dài; bản toàn nhiều vệt từ các cổng hội về một chỗ | **Dùng** (Vệt rêu, nấc 2 vần đá, khoảnh khắc rợn) |
| C03 | Đêm, hai xe máy chạy chậm trong ngõ làng, người sau ôm lồng sắt (không thấy cảnh hại chó) | **Dùng** (Giới thiệu băng trộm, 3:30 sáng bắt chó) |
| C04 | Tuấn "Bả" cận: áo khoác đen, mũ trùm, găng tay; bản hoảng sợ run rẩy | **Dùng** (Tuấn ra lệnh, hoảng loạn, xin đi tù) |
| C05 | Bà Hai cận: bà cụ đứng cổng cầm sợi xích trống; bản ôm con chó vàng mừng rỡ | **Dùng** (Bà Hai mất chó, ôm lại con Vàng) |
| C06 | Cổng các nhà trong làng, mỗi cổng một con chó đá rêu phong ngồi chồm hổm | **Dùng** (Giới thiệu tục chó đá, kết chó đá về cổng) |
| C07 | Cận con chó đá rêu xanh ở cổng nhà bà Hai, mắt đá nhìn ra ngõ; bản bà Hai đặt nắm cơm | **Dùng** (Chó đá nhà bà Hai, kết nắm cơm nguội) |
| C08 | Đèn pha xe máy rọi: một hàng chó đá sát nhau chắn ngang đường; bản bốn mươi con đứng vòng quanh | **Dùng** (Cổng làng bị chắn, ngõ mương bị chắn, vòng vây ngã ba) |
| C09 | Sáng, dân làng mở cổng kéo ra nhìn: hai xe máy, ba lồng chó, bốn người ngồi giữa vòng chó đá | **Dùng** (Cả làng mở cổng vây bắt sáng sớm) |
| C10 | Anh Lâm trưởng thôn cận gọi điện thoại, áo sơ mi, mặt nghiêm nghị | **Dùng** (Trưởng thôn can dân làng, giao công an) |

---

## Lịch
- **LONG**: Thứ Hai 27/09 18:00 (+07)
- **SH1** (TRỌN): Thứ Hai 27/09 19:00
- **SH2** (TRỌN): Thứ Ba 28/09 11:30
- **SH3** (TRỌN): Thứ Ba 28/09 19:00
- **SH4** (TRỌN): Thứ Tư 29/09 11:30
- **SH5** (TRỌN): Thứ Tư 29/09 19:00
- **SH6** (TRAILER): Thứ Năm 30/09 11:30
- **SH7** (TRAILER): Thứ Năm 30/09 19:00
- **Tập sau (P90 — Nhà yến "Loa gọi nhầm khách")**: Thứ Năm 30/09 18:00
