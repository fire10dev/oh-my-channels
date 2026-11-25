# Dự án 51 — Chim lợn "Hạn nặng lắm" (v3, 2026-11-24)

Nền: v2 (`p51-chim-lon-v2.md`). Nâng cấp lên v3 theo tiêu chuẩn kịch tính P04 v4:
- **Đồng hồ + cái giá rõ ràng**: Hạn chót đúng 12:00 trưa ngày thứ ba (giờ ngân hàng mở để khách chuyển 50 triệu tiền cọc giải hạn); nếu trượt hạn, khách hủy kèo và uy tín lừa đảo mười năm của thầy Hiển sụp đổ hoàn toàn.
- **3 nấc leo thang chủ động**: Thầy đóng cửa bật quạt hú át tiếng → Thầy trèo mái giăng lưới đập xoong xua đuổi khiến clip bị quay lén viral → Nước liều 2h sáng: Thầy mò lên mái định bẻ gãy luôn cột ăng-ten.
- **Cold open treo câu hỏi**: Bỏ câu Ma Nó báo trước; mở đầu bằng âm thanh đêm và tiếng nhại thì thầm trên mái, giấu đáp án đến khoảnh khắc rợn.
- **Điểm thấp nhất & khoảnh khắc rợn**: 3 giờ sáng trước hạn chót, thầy ngã rúi rụi trên mái; con chim lợn xoay ngược đầu nhìn thẳng, mỏ khép chặt nhưng tiếng thầy vẫn vang lên buốt óc.
- **Cú lật do nhân vật chọn và trả giá**: Thầy chọn rút phích điện thoại, xóa kênh, chấp nhận mất trắng món tiền béo bở để đổi lấy sự yên tĩnh; chuyển nghề bán lưới chắn chim đắt hàng nhờ danh tiếng "nhà từng dính chim lợn thật".
- **Chuẩn hóa khuôn v3**: Thoại LONG 575 chữ (chuẩn 560–600 chữ, ~3:00); đổi chuẩn mã ảnh P51_01–P51_10; đủ 5 Short TRỌN có punch riêng + 2 Short TRAILER; teaser tập sau P52 chuẩn thứ Năm.

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
| HIEN | Thầy Hiển | P51_02, P51_03, P51_04, P51_08, P51_09 | Adam bựa | `atempo=1.05` |
| CHIM | Chim lợn | P51_01, P51_06, P51_07 | Xuân Vĩnh | `asetrate=48000*0.92,aresample=48000,aecho=0.8:0.7:120:0.4` |
| KHACH | Cô Hương | P51_05 | Ngọc Huyền | `highpass=f=300,lowpass=f=3400` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "HIEN": {"preset": "Adam bựa", "fx": "atempo=1.05"}, "CHIM": {"preset": "Xuân Vĩnh", "fx": "asetrate=48000*0.92,aresample=48000,aecho=0.8:0.7:120:0.4"}, "KHACH": {"preset": "Ngọc Huyền", "fx": "highpass=f=300,lowpass=f=3400"}}
```

## LONG (575 chữ thoại, dựng ≈ 3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | P51_01 | *(không lời, 2.0 s)* | tiếng chim lợn "éc…" khàn · gió đêm |
| 0:02 | P51_01 | **CHIM**: Năm nay hạn nặng... Có tang... | "CÓ TANG..." · coc |
| 0:05 | S01 | **MN**: Lại mò vào à? Đang tính xem bói giải hạn đúng không? Nghe kỹ tiếng này đã. | "GIẢI HẠN?" · whoosh |
| 0:10 | S26 | **MN**: Thầy Hiển phán người ta mười năm. Đến lúc bị con chim phán lại bằng giọng mình, mặt không còn giọt máu. | "MẶT KHÔNG CÒN MÁU" · braam |
| 0:16 | P51_03 | **MN**: Thầy Hiển. Chuyên giải hạn qua mạng. Bốn chấm không, nhìn màn hình bắt hình dong. | "THẦY HIỂN · GIẢI HẠN ONLINE" · chuông video |
| 0:21 | P51_04 | **HIEN**: Cô hạn nặng lắm. Trùng tang ba đời. Nghe chim lợn kêu chưa? Sắp rồi đấy. | "TRÙNG TANG BA ĐỜI" |
| 0:26 | P51_05 | **KHACH**: Thầy cứu em với! Em phải làm sao hả thầy? | run |
| 0:30 | P51_04 | **HIEN**: Lễ giải năm chục triệu. Trưa mai chuyển khoản, thầy lập đàn xin hoãn hạn cho. | "LỄ GIẢI: 50 TRIỆU" |
| 0:35 | S26 | **MN**: Câu tủ mười năm: "Nghe chim lợn kêu chưa?" Cứ đem con chim ra dọa là tiền về tài khoản. | "CÂU TỦ: NGHE CHIM LỢN KÊU CHƯA?" · ting |
| 0:41 | P51_06 | **MN**: Dân gian sợ chim lợn vì nó báo điềm gở. Nhưng nó chỉ ăn chuột, không ăn tiền lễ. | tiếng chim lợn xa |
| 0:47 | P51_07 | **MN**: Bị thầy mượn danh dọa người thu năm chục triệu, nó đến đòi chia phần. | "ĐÒI CHIA PHẦN" |
| 0:52 | P51_01 | **MN**: Hạn chót: mười hai giờ trưa mai khách chuyển tiền. Nhưng tối nay, trên nóc nhà thầy có khách lạ. | "HẠN CHÓT: 12:00 TRƯA MAI" · tick |
| 0:58 | P51_03 | **MN**: Đêm đầu tiên, thầy vừa gọi video thì ngoài cửa sổ có tiếng éc éc khàn đặc. | chuông video · ec |
| 1:04 | P51_04 | **HIEN**: Gió máy thôi! Năm nay cô hạn nặng, không giải là tán gia bại sản! |  |
| 1:09 | P51_01 | **CHIM**: Thầy Hiển ơi... Lễ giải năm chục... Có tang... | "LỄ GIẢI NĂM CHỤC..." · aecho |
| 1:13 | P51_05 | **KHACH**: Thầy ơi! Sau lưng thầy có tiếng chim lợn! Thầy cũng dính hạn à? | "THẦY DÍNH HẠN?" |
| 1:18 | P51_02 | **MN**: Khách hoảng cúp máy, hẹn trưa mai tính tiếp. Thầy đóng chặt cửa sổ, bật quạt hú át tiếng. Vô ích. | ting · quat |
| 1:25 | P51_08 | **MN**: Sáng hôm sau, thầy trèo lên mái. Vung sào, giăng lưới, đập xoong ầm ĩ. | xoong gõ · xoang |
| 1:30 | P51_08 | **HIEN**: Cút ngay! Mày phá chén cơm tao à? Tao căng lưới kín nóc thì mày hết về! | "CÚT NGAY!" |
| 1:35 | P51_07 | **CHIM**: Sắp rồi đấy... Lễ giải năm chục... | aecho |
| 1:39 | P51_08 | **MN**: Con chim bay một vòng rồi đậu chóp ăng-ten, nhại đúng giọng thầy gắt gỏng. | canh dap |
| 1:44 | P51_10 | **MN**: Hàng xóm giơ máy quay clip. Một đêm triệu view: "Chim lợn đòi tiền chia chác của thầy Hiển". | "CHIM LỢN ĐÒI TIỀN" · pop |
| 1:50 | P51_03 | **MN**: Hai giờ sáng ngày thứ ba. Còn mười tiếng nữa là đến hạn chuyển tiền. | "2:00 SÁNG" · "CÒN 10 TIẾNG" · tick · nhạc tắt |
| 1:55 | P51_03 | **MN**: Nhà thầy sáng rực bình luận bóc mẽ. Khách hủy hẹn hàng loạt. | nhạc tắt |
| 1:59 | P51_02 | **MN**: Thầy liều mạng mò lên mái, định bẻ gãy cột ăng-ten để tuyệt đường chim đậu. | gio · nhạc tắt |
| 2:04 | P51_01 | *(không lời, 1.8 s)* | im lìm · nhạc tắt |
| 2:06 | P51_07 | **CHIM**: Năm nay hạn nặng. Có tang. Nghe chim lợn kêu chưa? | aecho · nhạc tắt |
| 2:11 | P51_02 | **MN**: Tiếng nói cất lên ngay sau gáy. Giọng của chính thầy Hiển, rành rọt từng chữ giữa màn đêm. | nhạc tắt |
| 2:17 | P51_07 | **MN**: Thầy quay phắt lại. Dưới trăng mờ, con chim lợn xoay ngược đầu nhìn thẳng vào mắt thầy. | "XOAY NGƯỢC ĐẦU" · nhạc tắt |
| 2:23 | P51_07 | **MN**: Mặt nó trắng bệch như mặt nạ giấy. Mỏ khép chặt không nhúc nhích. | braam · nhạc tắt |
| 2:28 | P51_07 | **MN**: Mà từng câu dọa dẫm năm chục triệu vẫn rít ra từ cổ họng nó, lạnh buốt sống lưng. | bassdown |
| 2:34 | P51_02 | **MN**: Thầy ngã rúi rụi xuống sàn mái, buông sào, run như cầy sấy. | nga |
| 2:38 | P51_03 | **MN**: Muốn chim đi, chỉ có một cách: tự tay dập tắt sự dối trá. |  |
| 2:42 | P51_03 | **MN**: Thầy rút phích điện thoại, xóa kênh, ngồi im thin thít giữa bóng tối. Tiếng chim lợn tắt hẳn. | cauda · im |
| 2:48 | P51_05 | **KHACH**: Thầy ơi, em thấy clip rồi. Em xin phép hủy lễ, để tiền đi trám răng ạ. | "HỦY LỄ · ĐI TRÁM RĂNG" · ting |
| 2:53 | P51_09 | **MN**: Mất đứt món tiền béo bở. Nhưng thầy Hiển ngộ ra chân lý mới. |  |
| 2:57 | P51_09 | **MN**: Giờ thầy chuyển sang bán lưới chắn chim và bẫy chuột. Khách mua nườm nượp vì biết nhà thầy từng dính điềm thật. | "SẠP LƯỚI CHẮN CHIM" · pops |
| 3:04 | P51_09 | **HIEN**: Lưới nhà tôi chim đậu là chạy, khỏi cần cúng bái! |  |
| 3:08 | S33 | **MN**: Đứa nào dọa mày sắp có hạn, cứ hỏi nó: nhà thầy đã căng lưới chưa? | ridieucay |
| 3:12 | S34 | **MN**: Tập sau: cà phê đường tàu cho khách ngồi sát ray chụp ảnh. Ông gác chắn ba mươi năm… vẫn đi tuần mỗi đêm. | "TẬP SAU" · whoosh |
| 3:18 | S06 | **MN**: Bấm đăng ký đi. Không tao bảo con chim lợn qua đậu cửa sổ phòng ngủ mày đấy. | "ĐĂNG KÝ" · coc |

## SHORTS
### SH1 — Hồ sơ chim lợn (TRỌN)
- **MN**: Hồ sơ chim lợn. Loài chim oan nhất Việt Nam. (P51_06) · pop "CHIM LỢN"
- **MN**: Một. Dân gian đồn nó kêu là có người chết. Thật ra nó chỉ đi bắt chuột đêm. (P51_06) · pop "OAN 100 NĂM"
- **MN**: Hai. Thầy Hiển mượn danh nó dọa người, thu năm chục triệu một ca giải hạn. (P51_04) · pop "LỄ GIẢI 50 TRIỆU"
- **MN**: Ba. Chim lợn cay cú bay về đậu nóc nhà thầy, đòi tiền bản quyền. (P51_01) · pop "ĐÒI BẢN QUYỀN"
- **CHIM**: Thầy Hiển ơi... Lễ giải năm chục... (P51_01) · pop "NĂM CHỤC..."
- **MN**: Đi dọa ma kiếm tiền thiên hạ, ai ngờ bị con chim đến đòi chia phần trăm. (P51_07) · pop "ĐÒI PHẦN TRĂM"
- *(không lời, 0.8 s)* (P51_07)
- **MN**: Thầy trốn đi đâu? Tao kể ở bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH2 — Thầy bị báo điềm (TRỌN)
- **HIEN**: Cô hạn nặng lắm. Trùng tang ba đời. Nghe chim lợn kêu chưa? Sắp rồi đấy. (P51_04) · pop "TRÙNG TANG"
- **KHACH**: Thầy cứu em với! Em phải làm sao hả thầy? (P51_05) · pop "CỨU EM VỚI"
- **HIEN**: Lễ giải năm chục triệu. Trưa mai chuyển khoản, thầy lập đàn xin hoãn hạn cho. (P51_04) · pop "50 TRIỆU"
- **CHIM**: Sắp rồi đấy... Năm chục... Có tang... (P51_01) · pop "CHIM LỢN"
- **KHACH**: Thầy ơi! Sau lưng thầy có tiếng chim lợn! Thầy cũng dính hạn à? (P51_05) · pop "THẦY DÍNH HẠN?"
- **MN**: Bày đặt dọa người dính hạn, giờ đến lượt thầy run như cầy sấy. (P51_03) · pop "THẦY RUN CẦY SẤY"
- *(không lời, 0.8 s)* (P51_03)
- **MN**: Thầy giải được cho ai? Tao kể ở bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH3 — Đại chiến trên mái nhà (TRỌN)
- **HIEN**: Cút ngay! Mày muốn phá chén cơm của tao à? Tao căng lưới kín nóc thì mày hết đường về! (P51_08) · pop "PHÁ CHÉN CƠM"
- **MN**: Thầy Hiển vung sào, giăng lưới, đập xoong xua đuổi chim lợn. (P51_08) · pop "ĐẬP XOONG ĐUỔI CHIM"
- **CHIM**: Thầy Hiển ơi... Lễ giải năm chục... (P51_07) · pop "CHIM LỢN"
- **MN**: Con chim bay một vòng rồi đậu chóp ăng-ten, nhại đúng giọng thầy gắt gỏng. (P51_07) · pop "NHẠI GIỌNG THẦY"
- **MN**: Hàng xóm quay clip triệu view. Phán ma mười năm không ai biết, đập xoong đuổi chim cả nước hay. (P51_10) · pop "CẢ NƯỚC HAY"
- *(không lời, 0.8 s)* (P51_10)
- **MN**: Thầy gỡ gạc kiểu gì? Tao kể ở bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH4 — Khách tỉnh ngộ (TRỌN)
- **KHACH**: Thầy ơi, em thấy clip rồi. Em xin phép hủy lễ, để tiền đi trám răng ạ. (P51_05) · pop "HỦY LỄ 50 TRIỆU"
- **MN**: Mười năm dọa người lấy tiền cúng, lần đầu tiên thầy Hiển bị mất trắng cú chốt năm chục triệu. (P51_04) · pop "MẤT TRẮNG"
- **CHIM**: Năm nay hạn nặng... Có tang... (P51_01) · pop "CHIM LỢN"
- **MN**: Hạn nặng không rơi vào khách, mà rơi trúng đầu thầy. (P51_03) · pop "HẠN CỦA THẦY"
- **MN**: Tiền cúng bay mất, lại được con chim tặng không cho bài học nhớ đời. (P51_03) · pop "BÀI HỌC NHỚ ĐỜI"
- *(không lời, 0.8 s)* (P51_02)
- **MN**: Cái giá thầy phải trả là gì? Tao kể ở bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH5 — Khởi nghiệp mùa chim (TRỌN)
- **HIEN**: Lưới nhà tôi chim đậu là chạy, bảo hành trọn đời, khỏi cần cúng bái! (P51_09) · pop "LƯỚI CHẮN CHIM"
- **MN**: Thầy Hiển bỏ nghề giải hạn online, chuyển hẳn sang bán lưới chắn chim và bẫy chuột. (P51_09) · pop "CHUYỂN NGHỀ"
- **MN**: Khách kéo đến mua đông nghìn nghịt, vì cả phố biết nhà thầy từng dính chim lợn thật. (P51_09) · pop "ĐẮT HÀNG"
- **MN**: Đứa nào dọa mày sắp có hạn, cứ bảo nó: về căng lưới nhà thầy đi đã! (S33) · pop "CĂNG LƯỚI ĐI ĐÃ"
- *(không lời, 0.8 s)* (S34)
- **MN**: Hành trình hoàn lương độc lạ của thầy Hiển. Tao kể ở bản đầy đủ, link dưới. (S06) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH6 — Hạn chót mười tiếng (TRAILER)
- **MN**: Hai giờ sáng ngày thứ ba. Còn đúng mười tiếng nữa là đến hạn chuyển tiền. (P51_03) · pop "CÒN 10 TIẾNG"
- **MN**: Khách hủy hẹn hàng loạt, mạng xã hội rần rần bóc phốt thầy Hiển. (P51_10) · pop "BÓC PHỐT THẦY HIỂN"
- **MN**: Không còn đường lui, thầy mò lên nóc nhà trong đêm tối, định bẻ gãy luôn cột ăng-ten. (P51_02) · pop "NƯỚC LIỀU"
- **MN**: Nhưng trên cột ăng-ten, có một bóng đen đã đợi sẵn từ bao giờ. (P51_01) · pop "CHIM LỢN"
- **CHIM**: Năm nay hạn nặng... (P51_01) · pop "NĂM NAY HẠN NẶNG..."
- **MN**: Liệu thầy Hiển có thoát được cái bẫy do chính mình giăng ra? Bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH7 — Con chim không mở mỏ (TRAILER)
- **MN**: Ba giờ sáng. Khoảnh khắc lạnh gáy nhất đời thầy Hiển. (P51_02) · pop "3:00 SÁNG"
- **CHIM**: Năm nay hạn nặng. Có tang. Nghe chim lợn kêu chưa? (P51_07) · pop "CHIM LỢN"
- **MN**: Tiếng nói cất lên ngay sau gáy. Giọng của chính thầy Hiển, rành rọt từng chữ giữa màn đêm. (P51_02) · pop "GIỌNG CHÍNH THẦY"
- **MN**: Thầy quay lại: con chim lợn xoay ngược đầu nhìn thẳng. Mỏ nó khép chặt không nhúc nhích. (P51_07) · pop "MỎ KHÉP CHẶT"
- **MN**: Mà từng câu dọa dẫm năm chục triệu vẫn rít ra buốt óc. (P51_07) · pop "RÍT RA BUỐT ÓC"
- **MN**: Thứ âm thanh ấy rốt cuộc phát ra từ đâu? Bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

## Hình
Tận dụng: B02 + ep01 S01/S26/S33/S34/S06 (Ma Nó).

### Danh sách hình vẽ mới (16:9):
- [x] P51_01: Mái nhà phố đêm, cột ăng-ten tivi, bóng một con chim lớn đậu trên đỉnh, trăng mờ (dùng trong v3: cold open, nấc 1, nấc 3)
- [x] P51_02: Phòng ngủ tối, thầy Hiển bật dậy; bản mở cửa sổ nhìn lên (dùng trong v3: cold open, nấc 1, nấc 3, điểm thấp)
- [x] P51_03: Phòng thầy Hiển: bàn thờ to, điện thoại kẹp giá, đèn vàng, khói hương, cửa sổ phía sau (dùng trong v3: setup, gọi video, điểm thấp)
- [x] P51_04: Thầy Hiển cận: áo dài the đen, khăn xếp, nhíu mày nhìn điện thoại; bản gắt vung tay (dùng trong v3: phán hạn, dọa khách)
- [x] P51_05: Cô Hương cận trên màn hình điện thoại, mặt run; bản tái mặt (dùng trong v3: khách gọi video, hủy cọc)
- [x] P51_06: Tranh màu ngả nâu: làng xưa đêm, cú lợn mặt trắng đậu trên mái tranh (dùng trong v3: sự thật dân gian)
- [x] P51_07: Cận chim lợn (cú lợn) mặt trắng hình trái tim như mặt nạ, mắt đen, đậu cột ăng-ten, đầu xoay nhìn thẳng (dùng trong v3: nấc 2, khoảnh khắc rợn)
- [x] P51_08: Thầy Hiển trèo mái vung sào, căng lưới, gõ xoong; chim bay một vòng (dùng trong v3: nấc 2)
- [x] P51_09: Sạp hàng mới: lưới chắn chim cuộn, bẫy chuột, thầy Hiển áo phông bán hàng, biển (trống chữ) (dùng trong v3: kết hoàn lương)
- [x] P51_10: Cận điện thoại hàng xóm quay cảnh thầy Hiển trên mái vung sào, bình luận chạy (trống chữ) (dùng trong v3: clip viral)

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
