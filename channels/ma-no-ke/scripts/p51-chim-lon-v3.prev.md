# Dự án 51 — Chim lợn "Hạn nặng lắm" (v3, 2026-11-24)

Nền: v2 (`p51-chim-lon-v2.md`). Nâng cấp lên v3 theo tiêu chuẩn kịch tính P04 v4:
- **Đồng hồ + cái giá rõ ràng**: Hạn chót đúng 12:00 trưa ngày thứ ba (giờ ngân hàng mở để khách chuyển 50 triệu tiền cọc giải hạn); nếu trượt hạn, khách hủy kèo và uy tín lừa đảo mười năm của thầy Hiển sụp đổ hoàn toàn.
- **3 nấc leo thang chủ động**: Thầy đóng cửa bật quạt hú át tiếng → Thầy trèo mái giăng lưới đập xoong xua đuổi khiến clip bị quay lén viral → Nước liều 2h sáng: Thầy mò lên mái định bẻ gãy luôn cột ăng-ten.
- **Cold open treo câu hỏi**: Bỏ câu Ma Nó báo trước; mở đầu bằng âm thanh đêm và tiếng nhại thì thầm trên mái, giấu đáp án đến khoảnh khắc rợn.
- **Điểm thấp nhất & khoảnh khắc rợn**: 3 giờ sáng trước hạn chót, thầy ngã rúi rụi trên mái; con chim lợn xoay ngược đầu nhìn thẳng, mỏ khép chặt nhưng tiếng thầy vẫn vang lên buốt óc.
- **Cú lật do nhân vật chọn và trả giá**: Thầy chọn rút phích điện thoại, xóa kênh, chấp nhận mất trắng món tiền béo bở để đổi lấy sự yên tĩnh; chuyển nghề bán lưới chắn chim đắt hàng nhờ danh tiếng "nhà từng dính chim lợn thật".
- **Chuẩn hóa khuôn v3**: Thoại LONG 593 chữ (chuẩn 560–600 chữ, ~3:00); đủ 5 Short TRỌN + 2 Short TRAILER; teaser tập sau P52 chuẩn thứ Năm.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Liệu thầy Hiển có ép được khách chuyển năm mươi triệu tiền lễ trước mười hai giờ trưa mai, khi con chim lợn trên nóc nhà liên tục nhại giọng thầy để báo điềm ngược lại chính thầy?
- **Đồng hồ + cái giá**: 12:00 trưa ngày thứ ba là hạn khách chuyển khoản 50 triệu tiền cọc; trượt hạn thì khách tỉnh ngộ rút cọc, bẫy lừa "chim lợn báo tang" mười năm của thầy bị bóc trần trên mạng.
- **3 nấc leo thang**:
  1. Nấc 1: Đêm đầu, chim kêu ngoài cửa sổ làm gián đoạn video call → Thầy đóng kín cửa sổ, bật quạt hú gió át tiếng → Chim lượn ra lỗ thông gió nhại câu "năm chục... có tang" khiến khách hoảng sợ hoãn chuyển tiền.
  2. Nấc 2: Sáng hôm sau, thầy trèo mái vung sào, giăng lưới, đập xoong ầm ĩ → Chim lượn vòng rồi đậu chóp ăng-ten, nhại đúng giọng thầy gắt gỏng → Hàng xóm quay clip đăng mạng bóc mẽ triệu view.
  3. Nấc 3 (nước liều): 2 giờ sáng đêm hạn chót, khách nhắn hủy hẹn hàng loạt, thầy liều mạng trèo lên mái nhà trong đêm tối định bẻ gãy luôn cột ăng-ten để tuyệt đường chim đậu.
- **Điểm thấp nhất**: 3 giờ sáng, thầy trượt chân ngã rúi rụi trên sàn mái, buông sào, điện thoại vỡ màn hình; bất lực nhận ra con chim không sợ người và lời dọa dẫm mười năm đang siết ngược cổ họng mình.
- **Cú lật (ai chọn gì, trả giá gì)**: Thầy Hiển chọn rút phích điện thoại, xóa kênh, ngồi im thin thít trong bóng tối để chim bay đi. Trả giá: Mất đứt 50 triệu tiền lễ (khách giữ lại tiền đi trám răng), bỏ nghề phán hạn dọa ma, chuyển sang bán lưới chắn chim.
- **Khoảnh khắc rợn duy nhất**: Ba giờ sáng trên mái nhà, con chim lợn mặt trắng bệch như mặt nạ giấy, xoay ngược đầu nhìn thẳng vào mắt thầy; mỏ khép chặt không nhúc nhích mà giọng răn đe của chính thầy vẫn vang lên rành rọt từng chữ.
- **Câu kết**: Giữ nguyên trào phúng: Thầy bán lưới chắn chim đắt hàng vì phố đồn "nhà thầy từng có chim lợn đậu thật"; Ma Nó nhắc ai bị dọa hạn thì hỏi xem nhà thầy đã căng lưới chưa.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| HIEN | Thầy Hiển | L02, L03, L04, L08, L09 | Adam bựa | `atempo=1.05` |
| CHIM | Chim lợn | L01, L06, L07 | Xuân Vĩnh | `asetrate=48000*0.92,aresample=48000,aecho=0.8:0.7:120:0.4` |
| KHACH | Cô Hương | L05 | Ngọc Huyền | `highpass=f=300,lowpass=f=3400` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "HIEN": {"preset": "Adam bựa", "fx": "atempo=1.05"}, "CHIM": {"preset": "Xuân Vĩnh", "fx": "asetrate=48000*0.92,aresample=48000,aecho=0.8:0.7:120:0.4"}, "KHACH": {"preset": "Ngọc Huyền", "fx": "highpass=f=300,lowpass=f=3400"}}
```

## LONG (593 chữ thoại, dựng ≈ 3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | L01 | *(không lời, 2.0 s)* | tiếng chim lợn "éc…" khàn · gió đêm |
| 0:02 | L01 | **CHIM**: Năm nay hạn nặng... Có tang... | "CÓ TANG..." · coc |
| 0:05 | S01 | **MN**: Lại mò vào à? Đang tính xem bói giải hạn đúng không? Nghe kỹ tiếng này đã. | "GIẢI HẠN?" · whoosh |
| 0:10 | S26 | **MN**: Thầy Hiển phán người ta mười năm. Đến lúc bị một con chim phán lại bằng giọng mình, mặt không còn giọt máu. | "MẶT KHÔNG CÒN MÁU" · braam |
| 0:16 | L03 | **MN**: Thầy Hiển. Chuyên giải hạn qua mạng. Công nghệ bốn chấm không, nhìn màn hình bắt hình dong. | "THẦY HIỂN · GIẢI HẠN ONLINE" · chuông video |
| 0:22 | L04 | **HIEN**: Cô hạn nặng lắm. Trùng tang ba đời. Nghe chim lợn kêu chưa? Sắp rồi đấy. | "TRÙNG TANG BA ĐỜI" |
| 0:28 | L05 | **KHACH**: Thầy cứu em với! Em phải làm sao hả thầy? | run |
| 0:32 | L04 | **HIEN**: Lễ giải năm chục triệu. Trưa mai chuyển khoản, thầy lập đàn xin hoãn hạn cho. | "LỄ GIẢI: 50 TRIỆU" |
| 0:38 | S26 | **MN**: Câu tủ mười năm: "Nghe chim lợn kêu chưa?" Cứ đem con chim ra dọa là tiền về tài khoản. | "CÂU TỦ: NGHE CHIM LỢN KÊU CHƯA?" · ting |
| 0:44 | L06 | **MN**: Dân gian sợ chim lợn vì nó báo điềm gở. Nhưng nó chỉ ăn chuột, không ăn tiền lễ. | tiếng chim lợn xa |
| 0:50 | L07 | **MN**: Bị thầy mượn danh dọa người thu năm chục triệu, nó đến đòi chia phần. | "ĐÒI CHIA PHẦN" |
| 0:55 | L01 | **MN**: Hạn chót: mười hai giờ trưa mai cô khách chuyển tiền. Nhưng tối nay, trên nóc nhà thầy có khách lạ. | "HẠN CHÓT: 12:00 TRƯA MAI" · tick |
| 1:02 | L03 | **MN**: Đêm đầu tiên, thầy vừa bật máy gọi video thì ngoài cửa sổ có tiếng éc éc khàn đặc. | chuông video · ec |
| 1:08 | L04 | **HIEN**: Gió máy bên hàng xóm thôi! Năm nay cô hạn nặng, không giải là tán gia bại sản! |  |
| 1:13 | L01 | **CHIM**: Thầy Hiển ơi... Lễ giải năm chục... Có tang... | "LỄ GIẢI NĂM CHỤC..." · aecho |
| 1:18 | L05 | **KHACH**: Thầy ơi! Sau lưng thầy có tiếng chim lợn! Thầy cũng dính hạn à? | "THẦY DÍNH HẠN?" |
| 1:23 | L02 | **MN**: Khách hoảng hốt cúp máy, hẹn trưa mai tính tiếp. Thầy đóng chặt cửa sổ, bật quạt hú át tiếng. Vô ích. | ting · quat |
| 1:30 | L08 | **MN**: Sáng hôm sau, thầy trèo lên mái nhà. Vung sào, giăng lưới, đập xoong ầm ĩ. | xoong gõ · xoang |
| 1:35 | L08 | **HIEN**: Cút ngay! Mày muốn phá chén cơm của tao à? Tao căng lưới kín nóc thì mày hết đường về! | "CÚT NGAY!" |
| 1:40 | L07 | **CHIM**: Sắp rồi đấy... Lễ giải năm chục... | aecho |
| 1:44 | L08 | **MN**: Con chim bay một vòng rồi đậu chóp ăng-ten, nhại đúng giọng thầy gắt gỏng. | canh dap |
| 1:49 | L10 | **MN**: Hàng xóm giơ điện thoại quay clip. Một đêm triệu lượt xem: "Chim lợn đòi tiền chia chác của thầy Hiển". | "CHIM LỢN ĐÒI TIỀN" · pop |
| 1:55 | L03 | **MN**: Hai giờ sáng ngày thứ ba. Còn đúng mười tiếng nữa là đến hạn chuyển tiền. | "2:00 SÁNG" · "CÒN 10 TIẾNG" · tick · nhạc tắt |
| 2:00 | L03 | **MN**: Nhà thầy sáng rực bình luận bóc mẽ. Khách hủy hẹn hàng loạt. | nhạc tắt |
| 2:04 | L02 | **MN**: Thầy liều mạng mò lên nóc nhà trong đêm, định bẻ gãy luôn cột ăng-ten để tuyệt đường chim đậu. | gio · nhạc tắt |
| 2:09 | L01 | *(không lời, 1.8 s)* | im lìm · nhạc tắt |
| 2:11 | L07 | **CHIM**: Năm nay hạn nặng. Có tang. Nghe chim lợn kêu chưa? | aecho · nhạc tắt |
| 2:16 | L02 | **MN**: Tiếng nói cất lên ngay sau gáy. Giọng của chính thầy Hiển, rành rọt từng chữ giữa màn đêm. | nhạc tắt |
| 2:22 | L07 | **MN**: Thầy quay phắt lại. Dưới trăng mờ, con chim lợn xoay ngược đầu nhìn thẳng vào mắt thầy. | "XOAY NGƯỢC ĐẦU" · nhạc tắt |
| 2:27 | L07 | **MN**: Mặt nó trắng bệch như mặt nạ giấy. Mỏ khép chặt không nhúc nhích. | braam · nhạc tắt |
| 2:31 | L07 | **MN**: Mà từng câu dọa dẫm năm chục triệu vẫn rít ra từ cổ họng nó, lạnh buốt sống lưng. | bassdown |
| 2:36 | L02 | **MN**: Thầy ngã rúi rụi xuống sàn mái, buông sào, run như cầy sấy. | nga |
| 2:40 | L03 | **MN**: Muốn chim đi, chỉ có một cách: tự tay dập tắt sự dối trá. |  |
| 2:44 | L03 | **MN**: Thầy rút phích điện thoại, xóa kênh, ngồi im thin thít giữa bóng tối. Tiếng chim lợn tắt hẳn. | cauda · im |
| 2:49 | L05 | **KHACH**: Thầy ơi, em thấy clip rồi. Em xin phép hủy lễ, để tiền đi trám răng ạ. | "HỦY LỄ · ĐI TRÁM RĂNG" · ting |
| 2:54 | L09 | **MN**: Mất đứt món tiền béo bở. Nhưng thầy Hiển ngộ ra chân lý mới. |  |
| 2:58 | L09 | **MN**: Giờ thầy chuyển sang bán lưới chắn chim và bẫy chuột. Khách mua nườm nượp vì biết nhà thầy từng dính điềm thật. | "SẠP LƯỚI CHẮN CHIM" · pops |
| 3:04 | L09 | **HIEN**: Lưới nhà tôi chim đậu là chạy, khỏi cần cúng bái! |  |
| 3:08 | S33 | **MN**: Đứa nào dọa mày sắp có hạn, cứ hỏi nó: nhà thầy đã căng lưới chưa? | ridieucay |
| 3:12 | S34 | **MN**: Thứ Năm: quán cà phê đường tàu cho khách ngồi sát ray chụp ảnh. Ông gác chắn ba mươi năm ở đó… vẫn đi tuần mỗi đêm. | "TẬP SAU · THỨ NĂM" · whoosh |
| 3:18 | S06 | **MN**: Bấm đăng ký đi. Không tao bảo con chim lợn qua đậu cửa sổ phòng ngủ mày đấy. | "ĐĂNG KÝ" · coc |

## SHORTS
### SH1 — Hồ sơ chim lợn (TRỌN)
- **MN**: Hồ sơ chim lợn. Loài chim oan nhất Việt Nam. (L06) · pop "CHIM LỢN"
- **MN**: Một. Dân gian đồn nó kêu là có người chết. Thật ra nó chỉ đi bắt chuột đêm. (L06) · pop "OAN 100 NĂM"
- **MN**: Hai. Thầy Hiển mượn danh nó dọa người, thu năm chục triệu một ca giải hạn. (L04) · pop "LỄ GIẢI 50 TRIỆU"
- **MN**: Ba. Chim lợn cay cú bay về đậu nóc nhà thầy, đòi tiền bản quyền. (L01) · pop "ĐÒI BẢN QUYỀN"
- **CHIM**: Thầy Hiển ơi... Lễ giải năm chục... (L01) · pop "NĂM CHỤC..."
- *(không lời, 0.8 s)* (L07)
- **MN**: Thầy trốn đi đâu? Tao kể ở bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH2 — Thầy bị báo điềm (TRỌN)
- **HIEN**: Cô hạn nặng lắm. Trùng tang ba đời. Nghe chim lợn kêu chưa? Sắp rồi đấy. (L04) · pop "TRÙNG TANG"
- **KHACH**: Thầy cứu em với! Em phải làm sao hả thầy? (L05) · pop "CỨU EM VỚI"
- **HIEN**: Lễ giải năm chục triệu. Trưa mai chuyển khoản, thầy lập đàn xin hoãn hạn cho. (L04) · pop "50 TRIỆU"
- **CHIM**: Sắp rồi đấy... Năm chục... Có tang... (L01) · pop "CHIM LỢN"
- **KHACH**: Thầy ơi! Sau lưng thầy có tiếng chim lợn! Thầy cũng dính hạn à? (L05) · pop "THẦY DÍNH HẠN?"
- *(không lời, 0.8 s)* (L03)
- **MN**: Thầy đi giải hạn cho người, ai ngờ bị chim giải hạn cho thầy. Tao kể ở bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH3 — Đại chiến trên mái nhà (TRỌN)
- **HIEN**: Cút ngay! Mày muốn phá chén cơm của tao à? Tao căng lưới kín nóc thì mày hết đường về! (L08) · pop "PHÁ CHÉN CƠM"
- **MN**: Thầy Hiển vung sào, giăng lưới, đập xoong xua đuổi chim lợn. (L08) · pop "ĐẬP XOONG ĐUỔI CHIM"
- **CHIM**: Thầy Hiển ơi... Lễ giải năm chục... (L07) · pop "CHIM LỢN"
- **MN**: Con chim bay một vòng rồi đậu chóp ăng-ten, nhại đúng giọng thầy gắt gỏng. (L07) · pop "NHẠI GIỌNG THẦY"
- **MN**: Hàng xóm giơ điện thoại quay clip. Một đêm triệu lượt xem: "Chim lợn đòi tiền chia chác của thầy Hiển". (L10) · pop "TRIỆU VIEW"
- *(không lời, 0.8 s)* (L10)
- **MN**: Bị con chim bóc phốt trước cả triệu người, thầy gỡ gạc kiểu gì? Tao kể ở bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH4 — Khách tỉnh ngộ (TRỌN)
- **KHACH**: Thầy ơi, em thấy clip rồi. Em xin phép hủy lễ, để tiền đi trám răng ạ. (L05) · pop "HỦY LỄ 50 TRIỆU"
- **MN**: Mười năm dọa người lấy tiền cúng, lần đầu tiên thầy Hiển bị mất trắng cú chốt năm chục triệu. (L04) · pop "MẤT TRẮNG"
- **CHIM**: Năm nay hạn nặng... Có tang... (L01) · pop "CHIM LỢN"
- **MN**: Hạn nặng không rơi vào khách, mà rơi trúng đầu thầy. (L03) · pop "HẠN CỦA THẦY"
- *(không lời, 0.8 s)* (L02)
- **MN**: Con chim lợn dạy thầy một bài học nhớ đời. Tao kể ở bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH5 — Khởi nghiệp mùa chim (TRỌN)
- **HIEN**: Lưới nhà tôi chim đậu là chạy, khỏi cần cúng bái! (L09) · pop "LƯỚI CHẮN CHIM"
- **MN**: Thầy Hiển bỏ nghề giải hạn online, chuyển sang bán lưới chắn chim và bẫy chuột. (L09) · pop "CHUYỂN NGHỀ"
- **MN**: Khách kéo đến mua đông nghìn nghịt, vì cả phố biết nhà thầy từng dính chim lợn thật. (L09) · pop "ĐẮT HÀNG"
- **MN**: Đứa nào dọa mày sắp có hạn, cứ hỏi nó: nhà thầy đã căng lưới chưa? (S33) · pop "CĂNG LƯỚI CHƯA?"
- *(không lời, 0.8 s)* (S34)
- **MN**: Hành trình hoàn lương của thầy Hiển có một không hai. Tao kể ở bản đầy đủ, link dưới. (S06) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH6 — Hạn chót mười tiếng (TRAILER)
- **MN**: Hai giờ sáng ngày thứ ba. Còn đúng mười tiếng nữa là đến hạn chuyển tiền. (L03) · pop "CÒN 10 TIẾNG"
- **MN**: Khách hủy hẹn hàng loạt, mạng xã hội rần rần bóc phốt thầy Hiển. (L10) · pop "BÓC PHỐT THẦY HIỂN"
- **MN**: Không còn đường lui, thầy mò lên nóc nhà trong đêm tối, định bẻ gãy luôn cột ăng-ten. (L02) · pop "NƯỚC LIỀU"
- **MN**: Nhưng trên cột ăng-ten, có một bóng đen đã đợi sẵn từ bao giờ. (L01) · pop "CHIM LỢN"
- **CHIM**: Năm nay hạn nặng... (L01) · pop "NĂM NAY HẠN NẶNG..."
- **MN**: Liệu thầy Hiển có thoát được cái bẫy do chính mình giăng ra? Bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH7 — Con chim không mở mỏ (TRAILER)
- **MN**: Ba giờ sáng. Khoảnh khắc lạnh gáy nhất đời thầy Hiển. (L02) · pop "3:00 SÁNG"
- **CHIM**: Năm nay hạn nặng. Có tang. Nghe chim lợn kêu chưa? (L07) · pop "CHIM LỢN"
- **MN**: Tiếng nói cất lên ngay sau gáy. Giọng của chính thầy Hiển, rành rọt từng chữ giữa màn đêm. (L02) · pop "GIỌNG CHÍNH THẦY"
- **MN**: Thầy quay lại: con chim lợn xoay ngược đầu nhìn thẳng. Mỏ nó khép chặt không nhúc nhích. (L07) · pop "MỎ KHÉP CHẶT"
- **MN**: Thứ âm thanh ấy rốt cuộc phát ra từ đâu? Bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

## Hình
Tận dụng: B02 + ep01 S01/S26/S33/S34/S06 (Ma Nó).

### Danh sách hình vẽ mới (16:9):
- [x] L01: Mái nhà phố đêm, cột ăng-ten tivi, bóng một con chim lớn đậu trên đỉnh, trăng mờ (dùng trong v3: cold open, nấc 1, nấc 3)
- [x] L02: Phòng ngủ tối, thầy Hiển bật dậy; bản mở cửa sổ nhìn lên (dùng trong v3: cold open, nấc 1, nấc 3, điểm thấp)
- [x] L03: Phòng thầy Hiển: bàn thờ to, điện thoại kẹp giá, đèn vàng, khói hương, cửa sổ phía sau (dùng trong v3: setup, gọi video, điểm thấp)
- [x] L04: Thầy Hiển cận: áo dài the đen, khăn xếp, nhíu mày nhìn điện thoại; bản gắt vung tay (dùng trong v3: phán hạn, dọa khách)
- [x] L05: Cô Hương cận trên màn hình điện thoại, mặt run; bản tái mặt (dùng trong v3: khách gọi video, hủy cọc)
- [x] L06: Tranh màu ngả nâu: làng xưa đêm, cú lợn mặt trắng đậu trên mái tranh (dùng trong v3: sự thật dân gian)
- [x] L07: Cận chim lợn (cú lợn) mặt trắng hình trái tim như mặt nạ, mắt đen, đậu cột ăng-ten, đầu xoay nhìn thẳng (dùng trong v3: nấc 2, khoảnh khắc rợn)
- [x] L08: Thầy Hiển trèo mái vung sào, căng lưới, gõ xoong; chim bay một vòng (dùng trong v3: nấc 2)
- [x] L09: Sạp hàng mới: lưới chắn chim cuộn, bẫy chuột, thầy Hiển áo phông bán hàng, biển (trống chữ) (dùng trong v3: kết hoàn lương)
- [x] L10: Cận điện thoại hàng xóm quay cảnh thầy Hiển trên mái vung sào, bình luận chạy (trống chữ) (dùng trong v3: clip viral)

## Lịch
- LONG: Thứ Hai 17/05 18:00 (+07)
- SH1: Thứ Hai 17/05 19:00
- SH2: Thứ Ba 18/05 11:30
- SH3: Thứ Ba 18/05 19:00
- SH4: Thứ Tư 19/05 11:30
- SH5: Thứ Tư 19/05 19:00
- SH6: Thứ Năm 20/05 11:30
- SH7: Thứ Năm 20/05 19:00
- Tập sau (P52): Thứ Năm 20/05 18:00 (+07)
