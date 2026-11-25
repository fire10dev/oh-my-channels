# Dự án 74 — Phóng sinh "Thả người về rừng" (v3, 2026-11-24)

- **Đồng hồ + cái giá rõ ràng**: Giới hạn đúng 10 lần theo luật quả báo (bằng số lần con vành khuyên bị bẫy và bán lại). Nếu đến lần thứ mười vào rạng sáng Rằm tháng Bảy mà Lượm chưa chịu buông tha đàn chim, gã sẽ bị thả vĩnh viễn vào rừng sâu không lối về.
- **3 nấc leo thang chủ động**: Lượm không thụ động chịu trận mà giãy giụa đối phó: nấc 1 (khóa then sắt, giắt chìa vào đũng quần), nấc 2 (khóa lồng vào kho, cầm rựa thức trắng đêm canh gác), nấc 3 (đến lần thứ chín, chân toé máu, gã cùng đường chọn đập nát toàn bộ 50 lồng chim và đốt sạch giàn lưới mưu sinh).
- **Cú lật do nhân vật chọn và trả giá**: Lượm tự tay tiêu hủy toàn bộ cần câu cơm mười năm để chuộc lấy sự tự do cho đàn chim và đổi lấy một giấc ngủ yên trên giường nhà mình.
- **Rút gọn và siết chặt nhịp**: Cô đọng lời thoại từ ~700 từ xuống đúng 587 từ (chuẩn 3 phút), dồn dập kịch tính, đẩy mạnh sự đối lập trào phúng giữa người đi buôn đức và con ma chim đòi nợ.

## Xương sống kịch tính
- **Câu hỏi kịch tính trung tâm**: Kẻ kiếm tiền bằng cách bẫy lại chim vừa phóng sinh sẽ làm gì khi mỗi sáng chính mình bị "phóng sinh" vào rừng sâu?
- **Đồng hồ + cái giá**: Hạn chót rạng sáng Rằm tháng Bảy — đúng lần thứ mười (bằng số lần con vành khuyên bị bán). Nếu chạm mốc mười lần, cái lồng tre sẽ vĩnh viễn nhốt gã lại ở rừng sâu không ngày về.
- **3 nấc leo thang chủ động**:
  1. *Nấc 1*: Khóa then sắt, cài then cửa sổ, giắt chìa vào quần -> Sáng vẫn thức dậy ở bãi lau ven sông, chân phồng rộp lết về.
  2. *Nấc 2*: Khóa hết lồng vào kho, cầm rựa thức trắng đêm tử thủ -> Canh ba thiếp đi, sáng tỉnh dậy trên đồi chè buốt giá, chân toé máu.
  3. *Nấc 3*: Chân nát bấy sau 9 lần bị thả, tiếng nghìn cánh chim rợp mái nhà -> Cùng đường, gã lấy búa đập 50 lồng chim, đốt cuộn lưới kiếm cơm chuộc tội.
- **Điểm thấp nhất**: Đêm thứ 9, chân phồng toé máu không đi nổi, ngồi đếm vết sẹo nhận ra đêm nay là lần thứ mười — lần cuối cùng trước Rằm.
- **Cú lật (ai chọn gì, trả giá gì)**: Lượm chọn từ bỏ toàn bộ sinh kế kiếm cơm mười năm (đập lồng, đốt lưới) để chuộc lấy mạng sống và giấc ngủ an toàn của chính mình.
- **Khoảnh khắc rợn duy nhất**: Rạng sáng mở mắt thấy tán cây rừng, nằm trên lá mục chân trần cạnh chiếc lồng tre to vừa người đan bằng chính nan tre của gã, cửa lồng mở toang chốt cài phía ngoài, con vành khuyên đậu trên nóc cất tiếng hót sắc lạnh.
- **Câu kết**: Lượm bỏ nghề, ngủ cũng xỏ dép tổ ong, mỉa mai: "Nghề này tích đức thì ít, mà thả người thì nhiều quá."

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S06, S26, S33, S34 | Thiện Minh | atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25 |
| LUOM | Lượm, bẫy chim: áo lính cũ, mũ tai bèo, lưới sau xe | P03, P04, P09, P10, P11 | Adam bựa | atempo=1.03 |
| KHACH | Cô Hạnh, người mua chim phóng sinh (1 câu) | P05 | Ngọc Huyền | anull |
| (con vành khuyên) | Không thoại, chỉ nghiêng đầu và cất tiếng hót | P02, P08, P10 | — | — |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "LUOM": {"preset": "Adam bựa", "fx": "atempo=1.03"}, "KHACH": {"preset": "Ngọc Huyền", "fx": "anull"}}
```

## LONG (587 chữ lời thoại, dựng ≈ 3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | P01 | *(không lời, 2.5 s)* | rung_sang · gio_rung |
| 0:02 | P01 | **MN**: Đêm qua hắn ngủ trên giường. | nhac_tat |
| 0:05 | P02 | *(không lời, 3.0 s)* | long_keo_ket · chot_go · tieng_hot |
| 0:08 | S01 | **MN**: Lại mò vào à? Sắp Rằm tháng Bảy, nhà mày có mua chim phóng sinh không? | "RẰM THÁNG BẢY" · coc · braam |
| 0:13 | S26 | **MN**: Mua ở cổng chùa à? Thế nghe chuyện con chim bị thả mười lần, và cái giá của kẻ sau lùm cây. | "1 CON CHIM · 10 LẦN THẢ" |
| 0:21 | P03 | **MN**: Lượm làm nghề bẫy chim đồng. Chim sẻ, vành khuyên, nhốt chật lồng tre. | luoi_giang · chim_keo |
| 0:26 | P04 | **MN**: Tháng Bảy, mang ra cổng chùa bán. Ba chục nghìn một con cầu phúc. | "30.000Đ / CON" · chuong_chua |
| 0:30 | P05 | **KHACH**: Thả cho chim về trời. Cầu cho mẹ khỏe. | canh_vo · cua_long_cach |
| 0:34 | P06 | **MN**: Mở lồng, con chim đói lả chỉ bay chục mét, đậu run rẩy ở lùm cây sau chùa. | "BAY 10 MÉT" |
| 0:39 | P06 | **MN**: Lượm giăng lưới sẵn, tóm lại trong năm phút. Chiều bắt, sáng mai bán tiếp. | "5 PHÚT BẮT LẠI" · luoi_sot_soat |
| 0:44 | P08 | **MN**: Một con vành khuyên bị "phóng sinh" mười lần. Mười người tích đức trên một tấm thân tơi tả. | "MƯỜI NGƯỜI TÍCH ĐỨC" · bassdown |
| 0:50 | P07 | **MN**: Người xưa bảo: phóng sinh là thả về trời đất. Bắt lại đem bán thì thành buôn nghiệp. | "BUÔN NGHIỆP" · gio_dong |
| 0:55 | P08 | **MN**: Chim có tổ, người có tông. Con gì cũng nhớ đường về, và nhớ mặt kẻ cướp tự do của nó. | "CHIM CÓ TỔ" |
| 1:01 | P08 | **MN**: Con vành khuyên mắt có vòng trắng nhìn trừng trừng vào Lượm. Không chớp mắt. | tieng_hot_ngan |
| 1:05 | P01 | **MN**: Đêm ấy Lượm ngủ trên giường. Rạng sáng mở mắt: không trần nhà, chỉ rặt tán cây rừng. | nhac_tat · rung_sang |
| 1:12 | P01 | **MN**: Gã nằm giữa đống lá mục. Áo ngủ. Chân trần. | "CHÂN TRẦN · ÁO NGỦ" · la_muc |
| 1:16 | P02 | **MN**: Bên cạnh là lồng tre to vừa người, nan gã tự vót. Cửa mở toang, chốt cài ngoài. | "LỒNG TRE VỪA NGƯỜI" · "CHỐT CÀI NGOÀI" · cua_long_keo |
| 1:23 | P02 | **MN**: Trên nóc lồng, con vành khuyên nghiêng đầu, cất một tiếng hót sắc lạnh. | tieng_hot_lanh · im_lang_1s |
| 1:27 | P09 | **MN**: Lượm đi bộ chân trần mười cây số đá dăm, toé máu mới về tới nhà. | "10 CÂY SỐ ĐÁ DĂM" · chan_da |
| 1:33 | P10 | **LUOM**: Chắc tao mộng du… Đêm qua tao khóa cửa rồi mà! | tho_doc |
| 1:37 | P10 | **MN**: Tối đó, Lượm chốt ba then sắt, cài then cửa sổ, giắt chìa vào đũng quần. | "3 THEN SẮT" · khoa_cach |
| 1:43 | P09 | **MN**: Sáng hôm sau gã lại mở mắt giữa bãi lau. Cạnh gã vẫn là cái lồng cài chốt ngoài. | "BÃI LAU VEN SÔNG" · gio_lau |
| 1:50 | P09 | **MN**: Thêm một ngày lết bộ về. Chân phồng rộp từng bọng máu. | chan_buoc_nang |
| 1:54 | P11 | **MN**: Lượm đem hết lồng tre khóa chặt trong kho, cầm rựa thức trắng đêm canh gác. | "CẦM RỰA THỨC TRẮNG" · den_bao |
| 2:00 | P11 | **MN**: Nhưng đến canh ba, gió lạnh lùa qua khe, mắt gã díp lại như xát vôi. | gio_lanh_khe |
| 2:05 | P09 | **MN**: Rạng sáng, Lượm tỉnh dậy trên đồi chè buốt giá. Vẫn cái lồng ấy. Vẫn chốt cài ngoài. | "ĐỒI CHÈ HOANG" · whoosh |
| 2:11 | P09 | **LUOM**: Ma quỷ nào! Tao làm gì chúng mày mà đày tao thế này?! | het_lon |
| 2:15 | S26 | **MN**: Chim phóng sinh bay về tổ, thì người bị phóng sinh cũng phải tự mò về nhà. | "LUẬT: TỰ MÒ VỀ NHÀ" |
| 2:20 | P09 | **MN**: Ngày năm: đầm lầy. Ngày bảy: vực đá. Ngày chín: đỉnh rừng thông. | "NGÀY 5 · NGÀY 7 · NGÀY 9" · tick_nhanh |
| 2:25 | P10 | **MN**: Chân nát bấy, gã ngồi thềm đếm từng vết sẹo: chín lần bị "thả". | "9 LẦN BỊ THẢ" · bassdown |
| 2:32 | P08 | **MN**: Con vành khuyên bị bán mười lần. Đêm nay, trước rằm, sẽ là lần thứ mười. | "HẠN: LẦN THỨ MƯỜI" · braam |
| 2:38 | P10 | **LUOM**: Lần thứ mười… nó thả tao vào rừng sâu thì tao chết đói mất thôi! | run_ray |
| 2:43 | P11 | **MN**: Nửa đêm, mái nhà rung bần bật bởi tiếng nghìn cánh chim rợp trời, che kín trăng. | vo_canh_day_dac · mai_nha_rung |
| 2:49 | P11 | **MN**: Hết đường lùi. Lượm bò ra sân, vớ búa đập nát năm chục ổ khóa lồng chim. | "ĐẬP NÁT 50 Ổ KHÓA" · bua_dap_sat |
| 2:55 | P11 | **LUOM**: Tao lạy chúng mày! Bay đi! Cút hết về trời đi, đừng bắt tao đi bộ nữa! | van_xin |
| 3:00 | P11 | **MN**: Cửa mở, đàn chim vút bay. Gã châm lửa đốt cuộn lưới kiếm cơm thành tro. | "ĐỐT LƯỚI KIẾM CƠM" · lua_chay · canh_bay_ro |
| 3:07 | P10 | **MN**: Đêm ấy gã thiếp đi trong khói. Sáng ra: vẫn trên chiếc phản nhà mình. | "VẪN TRÊN PHẢN NHÀ" · sang_nhe |
| 3:13 | P10 | **MN**: Ngoài song cửa, con vành khuyên hót một tiếng rồi bay thẳng về phía núi xa. | tieng_hot_vang · canh_xa |
| 3:18 | S33 → S34 | **MN**: Giờ gã bỏ nghề. Ngủ cũng xỏ dép tổ ong, phòng khi mai lại ở đồi chè. | "NGỦ XỎ DÉP" · rit_dieu_cay |
| 3:25 | S34 | **MN**: Ai hỏi sao bỏ nghề, Lượm rít điếu cày: "Nghề này tích đức thì ít, mà thả người thì nhiều quá." | "THẢ NGƯỜI THÌ NHIỀU QUÁ" · coc |
| 3:31 | B02 | **MN**: Thứ Hai: sắp Vu Lan, một ông con cả quay video báo hiếu triệu view. Mẹ ở viện dưỡng lão, còn ông bố đã khuất… vừa xem video đó. | "TẬP SAU · THỨ HAI" · whoosh |
| 3:40 | S06 | **MN**: Bấm đăng ký kênh đi. Kênh này không nhốt ai, cũng không thả ai về rừng. | "ĐĂNG KÝ" · coc |

## SHORTS

### SH1 (TRỌN) — Bẫy chim kiểu tháng Bảy
- **MN**: Lại mò vào à? Sắp Rằm tháng Bảy, nhà mày có đi mua chim phóng sinh không? (S01) · pop "MA NÓ"
- **MN**: Thằng Lượm bẫy chim ngoài đồng, tháng Bảy mang ra cổng chùa bán ba chục nghìn một con. (P04) · pop "LƯỢM · NGHỀ BẪY CHIM"
- **KHACH**: Thả cho chim về trời. Cầu cho mẹ khỏe. (P05)
- **MN**: Vừa mở lồng, chim đói chỉ bay được chục mét đậu sau lùm cây. Lượm giăng lưới tóm lại trong năm phút. (P06) · pop "5 PHÚT BẮT LẠI"
- **MN**: Chiều bắt, sáng mai bán tiếp. Một con chim một mùa bị "phóng sinh" mười lần. (P08) · pop "1 CON CHIM · 10 LẦN THẢ"
- **MN**: Mười người tích đức trên một cái thân xác tơi tả. Con chim thì nhớ mặt gã. (P08) · pop "CHIM NHỚ MẶT"
- *(lặng 0.8 s)*
- **MN**: Rồi ai phóng sinh thằng Lượm? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRỌN) — Thức dậy giữa rừng
- **MN**: Đêm qua hắn ngủ trên giường phản gỗ nhà mình. (P01) · pop "ĐÊM TRÊN GIƯỜNG"
- **MN**: Rạng sáng mở mắt: không trần nhà, chỉ rặt tán cây rừng buốt giá. (P01) · pop "SÁNG GIỮA RỪNG"
- **MN**: Lượm nằm trên lá mục, chân trần, mặc độc chiếc áo ngủ. (P01) · pop "LƯỢM"
- **MN**: Bên cạnh là cái lồng tre to đúng bằng người nằm, nan do chính tay gã vót. (P02) · pop "LỒNG TRE VỪA NGƯỜI"
- **MN**: Cửa lồng mở toang, chốt cài phía ngoài. Trên nóc, con vành khuyên quen mặt nghiêng đầu hót. (P02) · pop "CHỐT CÀI PHÍA NGOÀI"
- **LUOM**: Chắc tao mộng du… Đêm qua tao khóa cửa rồi mà! (P10)
- *(lặng 0.8 s)*
- **MN**: Mộng du mười cây số đường rừng. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 (TRỌN) — Khóa then sắt vs Phóng sinh
- **MN**: Bị ma rừng thả một lần, thằng Lượm sợ nhưng vẫn cố cãi số. (P10) · pop "LƯỢM"
- **MN**: Tối về, gã chốt ba then sắt, cài then cửa sổ, giắt chìa khóa vào đũng quần. (P10) · pop "3 THEN SẮT"
- **MN**: Sáng hôm sau mở mắt: lại nằm giữa bãi lau hoang ven sông buốt ngắt. (P09) · pop "BÃI LAU VEN SÔNG"
- **MN**: Bên cạnh vẫn là cái lồng tre cài chốt ngoài. Chân trần lết bộ cả ngày đường. (P09) · pop "LẠI BỊ THẢ"
- **LUOM**: Ma quỷ nào! Tao làm gì chúng mày mà đày tao thế này?! (P09)
- **MN**: Chim phóng sinh tự bay về tổ, thì người bị phóng sinh cũng phải tự mò về nhà. (S26) · pop "LUẬT PHÓNG SINH"
- *(lặng 0.8 s)*
- **MN**: Ngày thứ chín chân nát bấy. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH4 (TRỌN) — Bức tường ngày thứ chín
- **MN**: Một con vành khuyên một mùa bị bán mười lần. (P08) · pop "10 LẦN BÁN"
- **MN**: Thằng Lượm bị "phóng sinh" chín lần. Ngày năm: đầm lầy. Ngày bảy: vực đá. Ngày chín: đỉnh rừng thông. (P09) · pop "9 LẦN BỊ THẢ"
- **MN**: Chân nát bấy, móng bật máu, gã ngồi thềm đếm từng vết sẹo. (P10) · pop "VẾT SẸO"
- **LUOM**: Lần thứ mười… nó thả tao vào rừng sâu thì tao chết đói mất thôi! (P10)
- **MN**: Nửa đêm trước Rằm, tiếng nghìn cánh chim rợp trời rung chuyển cả mái ngói. (P11) · pop "NGHÌN CÁNH CHIM"
- **MN**: Hết đường lùi, gã vác búa đập nát năm chục lồng chim, đốt sạch lưới cước. (P11) · pop "ĐẬP LỒNG · ĐỐT LƯỚI"
- *(lặng 0.8 s)*
- **MN**: Đổi cả cơ nghiệp để lấy giấc ngủ trên giường. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN) — Nghề thả người
- **MN**: Sau mùa Vu Lan năm ấy, thằng Lượm bỗng nhiên bỏ nghề bẫy chim. (P10) · pop "LƯỢM"
- **MN**: Năm chục cái lồng tre đập nát, cuộn lưới cước mười năm đem đốt thành tro. (P11) · pop "BỎ NGHỀ"
- **MN**: Lạ nhất là gã đi ngủ cũng xỏ đôi dép tổ ong buộc dây chun cẩn thận. (S34) · pop "NGỦ XỎ DÉP"
- **MN**: Hàng xóm hỏi sao dạo này ngủ kỳ cục thế, Lượm rít điếu cày đáp tỉnh bơ: (S33)
- **LUOM**: Phòng khi sáng mai mở mắt lại thấy mình ở đồi chè. (P10) · pop "SỢ TỈNH Ở ĐỒI CHÈ"
- **MN**: Người ta bảo gã dở hơi, Lượm bảo: "Nghề này tích đức thì ít, mà thả người thì nhiều quá." (S34) · pop "THẢ NGƯỜI NHIỀU QUÁ"
- *(lặng 0.8 s)*
- **MN**: Chuyện chín đêm bị thả về rừng, tao kể ở bản đầy đủ, link dưới. (S01)

### SH6 (TRAILER) — Chiếc lồng tre to vừa người
- **MN**: Rạng sáng mở mắt giữa rừng già, chân trần dẫm lá mục. (P01) · pop "RẠNG SÁNG GIỮA RỪNG"
- **MN**: Ngay cạnh là một cái lồng tre to đúng bằng thân người, cửa mở toang, chốt cài phía ngoài. (P02) · pop "LỒNG TRE VỪA NGƯỜI"
- **MN**: Nan tre vót tay quen lắm. Chính là nan trong bó tre ở góc sân nhà gã. (P02) · pop "NAN TRE QUEN"
- **MN**: Trên nóc lồng, một con vành khuyên nghiêng đầu nhìn trừng trừng, cất tiếng hót sắc lạnh. (P08) · pop "VÀNH KHUYÊN"
- **LUOM**: Đêm qua… rõ ràng tao ngủ trên giường mà! (P10)
- **MN**: Ai đã nhốt gã vào lồng rồi khiêng vào rừng thả? Bản đầy đủ, link dưới. (S26)

### SH7 (TRAILER) — Hạn chót trước Rằm
- **MN**: Con vành khuyên bị gã bẫy đi bẫy lại đúng mười lần một mùa Vu Lan. (P08) · pop "10 LẦN BẪY"
- **MN**: Và gã đã bị "phóng sinh" chín lần vào chín cánh rừng khác nhau. (P09) · pop "9 LẦN PHÓNG SINH"
- **MN**: Đêm nay là đêm trước Rằm tháng Bảy — hạn chót của lần thứ mười. (P10) · pop "HẠN CHÓT TRƯỚC RẰM"
- **LUOM**: Lần thứ mười… nó thả tao vào rừng sâu thăm thẳm thì tao chết đói mất thôi! (P10)
- **MN**: Nửa đêm, mái nhà rung bần bật bởi tiếng hàng nghìn cánh chim đen kịt bầu trời. (P11) · pop "TIẾNG CÁNH RỢP TRỜI"
- **MN**: Lượm sẽ làm gì để giữ mạng sống? Bản đầy đủ, link dưới. (S01)

## Hình
Tái dùng: B02 + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Danh sách ảnh vẽ mới (11 ảnh 16:9, v3 dùng đủ cả 11 ảnh)
| Mã | Cảnh | Trạng thái v3 |
|---|---|---|
| P01 | Rạng sáng giữa rừng: một người nằm trên lá mục, áo ngủ, chân trần, tán cây trên đầu | DÙNG (LONG, SH2, SH6) |
| P02 | Cái lồng tre đan thưa to vừa một người nằm, cửa mở, chốt cài phía ngoài; con vành khuyên đậu trên nóc nghiêng đầu | DÙNG (LONG, SH2, SH6) |
| P03 | Cánh đồng sáng sớm, Lượm (áo lính cũ, mũ tai bèo) giăng lưới bắt chim | DÙNG (LONG) |
| P04 | Cổng chùa tháng Bảy: dãy lồng chim bày bán, người mua phóng sinh (không tên chùa) | DÙNG (LONG, SH1) |
| P05 | Cô Hạnh cận mở lồng thả chim, chắp tay; bản đứng cổng chùa không thấy hàng chim | DÙNG (LONG, SH1) |
| P06 | Chim bay yếu đậu ở lùm cây cạnh chùa, lưới giăng sẵn mờ trong lá | DÙNG (LONG, SH1) |
| P07 | Tranh màu ngả nâu: người xưa mở lồng thả chim ra đồng rộng, chim bay về rừng xa | DÙNG (LONG) |
| P08 | Cận con vành khuyên trong lồng, vòng trắng quanh mắt, nhìn thẳng | DÙNG (LONG, SH1, SH4, SH6, SH7) |
| P09 | Lượm chân trần áo ngủ đi bộ đường quê; bộ khung tỉnh dậy ở bìa rừng, bãi lau, đồi chè, luôn có lồng mở cửa | DÙNG (LONG, SH3, SH4, SH7) |
| P10 | Lượm cận: ngã vật ra giường, ôm chân phồng rộp; bản sáng tỉnh dậy trên giường, vành khuyên ở bậu cửa | DÙNG (LONG, SH2, SH3, SH4, SH5, SH6, SH7) |
| P11 | Sân nhà Lượm năm chục lồng chim; bản đập ổ khóa mở từng cửa lồng, chim bay ra đồng, cuộn lưới đang cháy | DÙNG (LONG, SH4, SH5, SH7) |

## Lịch
- LONG: Thứ Năm 05/08 18:00 (+07)
- 7 SHORTS:
  - SH1: Thứ Năm 05/08 19:00
  - SH2: Thứ Sáu 06/08 11:30
  - SH3: Thứ Sáu 06/08 19:00
  - SH4: Thứ Bảy 07/08 11:30
  - SH5: Thứ Bảy 07/08 19:00
  - SH6: Chủ Nhật 08/08 11:30
  - SH7: Chủ Nhật 08/08 19:00
- TẬP SAU (P75): Thứ Hai 09/08 18:00 (Vu Lan "Báo hiếu triệu view")
