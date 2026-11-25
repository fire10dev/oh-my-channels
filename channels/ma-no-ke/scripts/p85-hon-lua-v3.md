# Dự án 85 — Hồn lúa "Gạo bỏ đi" (v3, 2026-11-24)

- **Đồng hồ + cái giá**: Hạn chót 72 giờ trước phiên livestream "Đại tiệc 50 niêu cơm" đền cọc 500 triệu; ăn thịt rau không bù được tinh bột khiến cơ thể kiệt quệ, đối mặt nguy cơ vỡ nợ, sập kênh và vĩnh viễn cả đời ăn trấu.
- **Cold open giấu đáp án**: Đêm tối, căn bếp im phăng phắc, chỉ có tiếng rào rào dưới trăng và câu hỏi lơ lửng của Ma Nó; giấu chuyện bao gạo cạn sạch và nồi cơm biến thành trấu.
- **3 nấc leo thang chủ động**: Mua gạo ngoại tiền triệu về tự nấu cao tần → Ra hàng quán ăn từ cơm tấm đến phở bún bị chủ quán mắng → Nước liều: xay gạo sống nuốt chửng nhưng bị nghẹn trấu sặc sụa.
- **Điểm thấp nhất**: 3 giờ sáng ngày thứ ba, nằm bẹp trên sàn bếp ôm bụng đói cồn cào như lửa đốt, nhận ra tài khoản tiền tỷ không mua nổi một thìa cơm no.
- **Cú lật do nhân vật chọn và trả giá**: Hải chọn hủy hợp đồng nửa tỷ, chấp nhận đền cọc để bắt xe đêm về quê lội bùn gặt lúa giữa trưa nắng cùng mẹ, đổi mồ hôi lấy hạt gạo.
- **Kết châm biếm giữ đúng bible**: Hải vẫn làm reviewer mukbang triệu view nhưng đổi tên thành "Ăn Sạch Bát", hạt cơm rơi ra bàn nhặt bỏ mồm nhanh hơn chớp mắt.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Kẻ vứt bỏ hàng tấn cơm cho đẹp khung hình có cách nào nuốt nổi một hạt gạo trước khi kiệt sức và mất trắng sự nghiệp?
- **Đồng hồ + cái giá**: Hạn 72 giờ trước phiên livestream "Đại tiệc 50 niêu cơm" đền cọc 500 triệu. Cái giá: bụng đói lả teo tóp vì thiếu tinh bột, nguy cơ vĩnh viễn cả đời ăn hạt gì cũng thành trấu.
- **3 nấc leo thang**:
  1. Mua gạo ST25 đắt nhất về cắm nồi cao tần → Mở vung toàn trấu vàng bốc khói.
  2. Ra quán gọi từ cơm tấm đến phở, bún → Vừa chạm môi hóa trấu ráp, bị chủ quán mắng ăn vạ.
  3. Liều mạng xay gạo sống thành nước đặc nuốt chửng → Bột gạo vón cục thành trấu nghẹn ứ cổ họng.
- **Điểm thấp nhất**: 3 giờ sáng ngày thứ ba, đói lả nằm gục cạnh tủ lạnh, nhận ra tiền tỷ không đổi nổi một thìa cơm no.
- **Cú lật (nhân vật chọn & trả giá)**: Hải CHỌN hủy hợp đồng 500 triệu, chấp nhận đền tiền để về quê lội bùn gặt lúa giữa trưa nắng với mẹ. Cái giá: danh tiếng và tiền bạc đổi lấy giọt mồ hôi chuộc lại hạt gạo.
- **Khoảnh khắc rợn duy nhất**: Nửa đêm, bao gạo 20 ký tự bục một lỗ nhỏ ở đáy, dòng gạo trắng phau tuôn ra bò lắt lẻo qua khe cửa ra sân dưới ánh trăng như đàn kiến dọn tổ.
- **Câu kết**: Kênh "Ăn Sạch Phố" đổi thành "Ăn Sạch Bát", rơi một hạt cơm cúi xuống nhặt lia lịa; Ma Nó nhắc khán giả tối nay đếm xem bỏ thừa mấy hạt cơm.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S06, S26, S33, S34 | Thiện Minh | atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25 |
| HAI | Hải, kênh "Ăn Sạch Phố" | L03, L04, L10, L12 | Adam bựa | atempo=1.05 |
| ME | Bà Thìn, mẹ Hải ở quê | L06, L07 | Ngọc Huyền | asetrate=48000*0.95,aresample=48000 |
| CHU | Anh chủ quán cơm | L10, L11 | Thiền Tâm Đức | anull |

```json voices
{
  "MN": {
    "preset": "Thiện Minh",
    "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"
  },
  "HAI": {
    "preset": "Adam bựa",
    "fx": "atempo=1.05"
  },
  "ME": {
    "preset": "Ngọc Huyền",
    "fx": "asetrate=48000*0.95,aresample=48000"
  },
  "CHU": {
    "preset": "Thiền Tâm Đức",
    "fx": "anull"
  }
}
```

## LONG (585 chữ thoại, dựng ≈ 3:05)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | L01 | *(không lời, 2.5 s)* | nhạt đêm · gạo rào rào rất nhỏ |
| 0:02 | L02 | **MN**: Không có gió. Không có chuột. Mà cái gì đang rào rào bò qua khe cửa ra sân thế kia? | gạo chảy · coc |
| 0:08 | S01 → S26 | **MN**: Lại mò vào à? Hồi bé ăn cơm làm rơi vài hạt, có bị bà mắng không? | "HẠT GẠO CÓ HỒN" · coc · braam |
| 0:13 | S26 | **MN**: Người già bảo hạt gạo có hồn. Thằng nào đổ cả mâm cho đẹp khung hình… thì hạt gạo biết tự ái. | bassdown |
| 0:19 | L03 | **MN**: Hải, kênh "Ăn Sạch Phố". Mâm hải sản, nồi lẩu, mười tô phở. | "ĂN SẠCH PHỐ" · pop |
| 0:24 | L04 | **HAI**: Ngon đỉnh chóp các bác ơi! Cắn một miếng thôi, phải để bụng thử món khác chứ! | nhai · ting |
| 0:29 | L05 | **MN**: Tắt máy, đổ hết vào thùng rác. Chín phần mười còn nguyên. Nồi cơm chưa đụng đũa. | "ĐỔ HẾT" · ao |
| 0:34 | L05 → S26 | **MN**: Mỗi tuần, nó đổ đi ba chục ký cơm. Một năm bằng sản lượng hai sào ruộng của mẹ nó dưới quê. | "1 NĂM = 2 SÀO RUỘNG" · bassdown |
| 0:42 | L07 | **ME**: Hồi bé hạt cơm rơi tao bắt nhặt từng hạt. Giờ lên mạng nó đổ cả nồi cơm lành lặn. | thoang |
| 0:47 | S26 | **MN**: Thần lúa không đánh ai. Hồn lúa chỉ lẳng lặng thu dọn hành lý rời đi. | "HỒN LÚA ĐI" · coc |
| 0:52 | S26 | **MN**: Luật trời: ba ngày không chuộc lại bằng mồ hôi, thì cả đời ăn gì từ gạo cũng thành trấu. | "LUẬT: 3 NGÀY" · tick |
| 0:58 | L03 | **MN**: Hạn chót ba ngày. Mà Hải vừa nhận cọc livestream nửa tỷ: thách đấu ăn sạch năm mươi niêu cơm. | "KÈO 500 TRIỆU" · ting · tick |
| 1:05 | L01 | **MN**: Nửa đêm. Bếp nhà Hải tối om. Bao gạo hai mươi ký dựa góc tường. | nhạc tắt |
| 1:10 | L08 | **MN**: Dưới đáy bao có một cái lỗ nhỏ bằng hạt đậu. Gạo tự rỉ ra. | gạo rỉ rào rào · nhạc tắt |
| 1:15 | L02 | **MN**: Bò qua sàn gạch, qua khe cửa, ra sân dưới trăng như đàn kiến dọn tổ. Không có gió. Không có kiến. | gạo chảy · im |
| 1:23 | L08 | **MN**: Sáng hôm sau tỉnh dậy, bao gạo xẹp lép như một cái xác rỗng. | im 2 s |
| 1:27 | L09 | **MN**: Hải mua bao gạo xịn tiền triệu về cắm nồi cao tần. Mở vung: toàn trấu vàng khè bốc khói. | "TOÀN TRẤU" · tach · whoosh |
| 1:33 | L04 | **HAI**: Gạo đểu à? Ráp xé cả họng! | "KHẸC!" · trau |
| 1:36 | L10 | **MN**: Tự nấu không xong, Hải ra quán. Cơm tấm, phở, bún, bánh cuốn. Đĩa bưng ra thơm phức, chạm môi thành trấu. | "CHẠM MÔI → TRẤU" · laoxao |
| 1:44 | L11 | **CHU**: Cơm trăm người ăn không sao. Cậu nhổ ra trấu là ăn vạ kiếm chuyện hả? | quat |
| 1:48 | L10 | **HAI**: Rõ ràng là trấu mà! | chát |
| 1:50 | L12 | **MN**: Hải tống cả cân thịt bò vào họng. Nhưng không có hạt gạo, bụng cứ rỗng tuếch như cái bao rách. | "BỤNG RỖNG" · bassdown |
| 1:57 | L04 | **MN**: Hắn liều mạng: xay gạo sống thành nước đặc, nhắm mắt nuốt chửng. | nuot |
| 2:01 | L12 | **MN**: Vừa qua họng, bột gạo vón cục thành trấu nghẹn ứ, nhổ tóe loe ra sàn. | "NGHẸN TRẤU" · sac · trauroi |
| 2:07 | L04 | **MN**: Ba giờ sáng ngày thứ ba. Còn mười hai tiếng nữa là lên sóng đền cọc nửa tỷ. | "CÒN 12 GIỜ" · tick |
| 2:12 | L04 | **HAI**: Đói quá… Bụng cồn cào như lửa đốt… Ai cứu tao với… | then |
| 2:16 | L07 | **ME**: Về đi con. Lúa chín rồi. Về mà gặt với mẹ. | chuong · thoang |
| 2:20 | L06 | **MN**: Hải bấm hủy buổi phát sóng, đền cọc, bắt xe đêm về quê. | "HỦY KÈO 500 TRIỆU" · whoosh |
| 2:25 | L06 | **MN**: Giữa trưa nắng, hắn lội bùn gặt lúa, liềm cứa đứt tay, nhặt từng bông lúa rơi. | liemcat · gio · tuotlua |
| 2:31 | L06 | **MN**: Luật của đất: hạt ngọc không nuôi kẻ vứt bỏ nó, gạo chỉ về với người nhỏ mồ hôi. | "ĐỔ MỒ HÔI → GẠO VỀ" · braam |
| 2:37 | L09 | **MN**: Bữa cơm gạo mới thơm ngào ngạt. Hạt cơm vào miệng dẻo quánh, không còn trấu. | tach · nhai |
| 2:42 | L09 | **HAI**: Cơm ngọt quá mẹ ơi… | rung |
| 2:44 | L07 | **ME**: Cơm mồ hôi mày làm ra đấy. Ăn cho hết. | thoang |
| 2:47 | L03 → S33 | **MN**: Giờ kênh của Hải đổi thành "Ăn Sạch Bát", hạt cơm nào rơi là nhặt bỏ mồm nhanh hơn chớp mắt. | "ĂN SẠCH BÁT" · coc |
| 2:53 | S34 | **MN**: Tối nay ăn cơm, đếm xem mày bỏ thừa mấy hạt. Hạt gạo hiền, nhưng nhớ dai lắm. | rít điếu cày |
| 2:58 | B02 | **MN**: Tập sau: một hãng du lịch bán tour giá rẻ rồi biến mất. Trong đoàn khách bị lừa… có một vị khách đã đi rất xa từ trước đó. | "TẬP SAU" · whoosh |
| 3:05 | S06 | **MN**: Bấm đăng ký đi. Không thì mai mở nồi… chỉ thấy trấu. | "ĐĂNG KÝ" · coc |

## SHORTS (5 TRỌN + 2 TRAILER)

### SH1 (TRỌN) — Bao gạo tự dọn tổ
- **MN**: Nửa đêm. Bếp nhà Hải tối om. (L01) · pop "HỒN LÚA"
- **MN**: Dưới đáy bao có một cái lỗ nhỏ bằng hạt đậu. Gạo tự rỉ ra. (L08)
- **MN**: Bò qua sàn gạch, qua khe cửa, ra sân dưới trăng như đàn kiến dọn tổ. Không có gió. Không có kiến. (L02)
- **MN**: Sáng hôm sau tỉnh dậy, bao gạo xẹp lép như một cái xác rỗng. (L08) · pop "BAO GẠO BIẾN MẤT"
- *(lặng 0.8 s)*
- **MN**: Gạo tự bò đi đâu? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRỌN) — Kênh Ăn Sạch Phố
- **HAI**: Ngon đỉnh chóp các bác ơi! Cắn một miếng thôi, phải để bụng thử món khác chứ! (L04) · pop "ĂN SẠCH PHỐ"
- **MN**: Tắt máy, đổ hết vào thùng rác. Chín phần mười còn nguyên. Nồi cơm chưa đụng đũa. (L05)
- **ME**: Hồi bé hạt cơm rơi tao bắt nhặt từng hạt. Giờ lên mạng nó đổ cả nồi cơm lành lặn. (L07)
- **MN**: Thần lúa không đánh ai. Hồn lúa chỉ lẳng lặng thu dọn hành lý rời đi. (S26) · pop "HỒN LÚA RỜI ĐI"
- *(lặng 0.8 s)*
- **MN**: Đổ cơm triệu view thì trả giá thế nào? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH3 (TRỌN) — Nồi cơm trấu vàng
- **MN**: Hải mua bao gạo xịn tiền triệu về cắm nồi cao tần. Mở vung: toàn trấu vàng khè bốc khói. (L09) · pop "TOÀN TRẤU"
- **HAI**: Gạo đểu à? Ráp xé cả họng! (L04)
- **MN**: Người già bảo hạt gạo có hồn. Thằng nào đổ cả mâm cho đẹp khung hình… thì hạt gạo biết tự ái. (S26)
- **MN**: Hải bỏ gạo một năm. Giờ hạt gạo bỏ rơi Hải. (S26) · pop "GẠO BỎ ĐI"
- *(lặng 0.8 s)*
- **MN**: Tại sao cơm hoá thành trấu? Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 (TRỌN) — Chạm môi thành trấu
- **MN**: Tự nấu không xong, Hải ra quán. Cơm tấm, phở, bún, bánh cuốn. Đĩa bưng ra thơm phức, chạm môi thành trấu. (L10) · pop "CHẠM MÔI → TRẤU"
- **CHU**: Cơm trăm người ăn không sao. Cậu nhổ ra trấu là ăn vạ kiếm chuyện hả? (L11)
- **HAI**: Rõ ràng là trấu mà! (L10)
- **MN**: Thứ gì làm từ gạo, vào miệng Hải đều thành vỏ trấu khô khốc. (L12) · pop "LẠO XẠO"
- *(lặng 0.8 s)*
- **MN**: Kẻ bỏ gạo bị trừng phạt ra sao? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN) — Nước liều nuốt bột gạo
- **MN**: Hải tống cả cân thịt bò vào họng. Nhưng không có hạt gạo, bụng cứ rỗng tuếch như cái bao rách. (L12) · pop "BỤNG RỖNG TUẾCH"
- **MN**: Hắn liều mạng: xay gạo sống thành nước đặc, nhắm mắt nuốt chửng. (L04)
- **MN**: Vừa qua họng, bột gạo vón cục thành trấu nghẹn ứ, nhổ tóe loe ra sàn. (L12) · pop "NGHẸN Ứ"
- **HAI**: Đói quá… Bụng cồn cào như lửa đốt… Ai cứu tao với… (L04)
- *(lặng 0.8 s)*
- **MN**: Ba ngày không có hạt tinh bột sống sao nổi? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 (TRAILER) — Hạn chót nửa tỷ
- **MN**: Hạn chót ba ngày. Mà Hải vừa nhận cọc livestream nửa tỷ: thách đấu ăn sạch năm mươi niêu cơm. (L03) · pop "KÈO 500 TRIỆU"
- **MN**: Luật trời: ba ngày không chuộc lại bằng mồ hôi, thì cả đời ăn gì từ gạo cũng thành trấu. (S26)
- **MN**: Ba giờ sáng ngày thứ ba. Còn mười hai tiếng nữa là lên sóng đền cọc nửa tỷ. (L04) · pop "CÒN 12 GIỜ"
- **HAI**: Đói quá… Bụng cồn cào như lửa đốt… Ai cứu tao với… (L04)
- **ME**: Về đi con. Lúa chín rồi. Về mà gặt với mẹ. (L07)
- **MN**: Hải chọn cứu dạ dày hay mất trắng nửa tỷ? Câu trả lời ở bản đầy đủ, link dưới. (S06)

### SH7 (TRAILER) — Dòng gạo dưới trăng
- **MN**: Không có gió. Không có chuột. Mà cái gì đang rào rào bò qua khe cửa ra sân thế kia? (L01) · pop "HỒN LÚA"
- **MN**: Dưới đáy bao có một cái lỗ nhỏ bằng hạt đậu. Gạo tự rỉ ra. (L08)
- **MN**: Bò qua sàn gạch, qua khe cửa, ra sân dưới trăng như đàn kiến dọn tổ. (L02) · pop "ĐÀN KIẾN DỌN TỔ"
- **MN**: Sáng hôm sau tỉnh dậy, bao gạo xẹp lép như một cái xác rỗng. (L08)
- **MN**: Hồn lúa đi đâu và để lại tai họa gì? Bản đầy đủ ở link dưới. (S26)

## Hình
Tận dụng: B02 + ep01 S01/S06/S26/S33/S34 (Ma Nó).

### Danh sách hình vẽ mới (16:9)
| Mã | Cảnh | Tình trạng |
|---|---|---|
| L01 | Bếp nhà đêm tối, bao gạo hai mươi ký dựa góc tường, trăng hắt qua cửa sổ | dùng v3 |
| L02 | Dòng gạo trắng mảnh bò qua sàn gạch, qua khe cửa, ra sân dưới trăng như đàn kiến | dùng v3 |
| L03 | Bàn ăn đầy mâm hải sản, nồi lẩu, mười tô phở, máy quay, đèn livestream; bản Hải nhổ trấu trước máy | dùng v3 |
| L04 | Hải cận: áo phông in chữ, micro cài, hô hào; bản gầy rộc ôm bát rau luộc | dùng v3 |
| L05 | Nhân viên đổ đồ ăn còn nguyên vào thùng rác lớn sau buổi quay | dùng v3 |
| L06 | Tranh màu ngả nâu: đồng lúa chín, nông dân gặt, bà cụ nhặt bông lúa rơi; bản cuối Hải theo mẹ gặt lúa | dùng v3 |
| L07 | Bà Thìn cận: nông dân, nón lá, xem điện thoại lắc đầu; bản gọi điện; bản dọn mâm cơm | dùng v3 |
| L08 | Cực cận đáy bao gạo có lỗ nhỏ bằng hạt đậu, gạo rỉ ra; bản bao xẹp lép buổi sáng | dùng v3 |
| L09 | Cận nồi cơm điện mở ra toàn trấu vàng; bản cuối nồi cơm gạo mới trắng thơm | dùng v3 |
| L10 | Quán cơm bình dân: đĩa cơm trắng trước Hải, Hải nhăn mặt nhả ra trấu | dùng v3 |
| L11 | Anh chủ quán cơm cận: tạp dề, khăn vắt vai, gãi đầu | dùng v3 |
| L12 | Cực cận miệng nhổ ra một nắm trấu vàng lên đĩa sứ trắng (không máu) | dùng v3 |

## Lịch
- **LONG**: Thứ Hai 13/09 18:00 (+07).
- **SH1**: Thứ Hai 13/09 19:00 (+07).
- **SH2**: Thứ Ba 14/09 11:30 (+07).
- **SH3**: Thứ Ba 14/09 19:00 (+07).
- **SH4**: Thứ Tư 15/09 11:30 (+07).
- **SH5**: Thứ Tư 15/09 19:00 (+07).
- **SH6**: Thứ Năm 16/09 11:30 (+07).
- **SH7**: Thứ Năm 16/09 19:00 (+07).
- *(Tập sau P86 ra Thứ Năm 16/09 18:00)*
