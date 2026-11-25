# Dự án 86 — Xuất hành "Đi đâu cũng về chỗ khách đợi" (v2, 2026-11-21)

v2 sửa theo agy (`debate/08-scripts/p86-agy.md`):
- Cold open giấu sân bay và quán cà phê. Chỉ thấy cửa sổ máy bay mây mờ và câu hỏi của ông cụ.
- Logic hàng không: máy bay báo thời tiết xấu, quay đầu hạ cánh về sân bay đi, đúng quy trình. Vòng lặp nén lại trong một buổi sáng.
- Thêm khung X11, cận mặt Hưởng kinh hoàng. Thoại ông Bảy lạnh hơn.

Kho chủ đề mùa 2 (đối tượng: công ty du lịch thu tiền tour rồi bỏ trốn). Đăng T2 20/09/2027 18:00.
Cuối P85 đã hứa: **"một hãng du lịch bán tour 'đi nước ngoài giá rẻ', thu tiền rồi biến mất. Trong đoàn khách bị lừa… có một vị khách đã đi du lịch rất xa từ trước đó."**

Rợn bằng **máy bay cất cánh, nhìn qua cửa sổ thấy lại đúng sân bay vừa rời, và ông cụ ghế bên đeo thẻ đoàn du lịch đời chín mươi ngả vàng**. Cú lật dựa trên tục **xem ngày xuất hành**: kẻ bỏ trốn chọn ngày đẹp nhất, nhưng đi đường nào cũng quay về đúng quán cà phê nơi năm mươi khách đang đợi.

**Ý chính:**
- Hưởng mở công ty du lịch, bán tour "châu Âu mười ngày, giá bằng một nửa". Năm mươi khách đóng tiền, nhiều người là ông bà già góp cả đời để đi một chuyến. Ngày bay, Hưởng ôm tiền trốn.
- Năm mươi khách ngồi chờ ở quán cà phê sân bay. Trong đoàn có ông Bảy. Con cháu mua tour cho ông từ năm ngoái. Ông mất trước ngày đi. Ông vẫn đến. Không ai nhìn thấy ông.
- Dân gian: đi xa phải xem ngày xuất hành. Ngày tốt thì đi đến nơi về đến chốn. Hưởng xem ngày kỹ lắm, chọn ngày đại cát để trốn.
- Ông Bảy chỉ muốn một điều: đoàn được đi, hoặc được trả tiền. Ông theo Hưởng.
- Cú lật: Hưởng đi đâu cũng về chỗ khách đợi. Bắt taxi ra ga: xuống xe là quán cà phê sân bay. Lên máy bay đi nước ngoài: hạ cánh xuống đúng sân bay cũ. Chạy xe máy về quê: rẽ ngõ nào cũng ra cái quán ấy, năm mươi người đang ngồi. Ngày đại cát, đi đến nơi về đến chốn, chốn ở đây là khách. Hưởng ngồi xuống giữa năm mươi người, hoàn tiền từng người.

**Khoảnh khắc rợn duy nhất:** máy bay cất cánh, Hưởng thở phào nhìn qua cửa sổ. Bên dưới, sân bay vừa rời nhỏ dần. Mười phút. Ba mươi phút. Rồi máy bay hạ thấp, và bên dưới vẫn là đúng sân bay ấy, đúng quán cà phê ấy có mái che màu cam. Ghế bên cạnh, một ông cụ đeo tấm thẻ đoàn du lịch đời chín mươi đã ngả vàng, quay sang hỏi: "Đến nơi chưa cháu?"
**Kiểu lật:** đi đâu cũng về chỗ khách đợi (ngày xuất hành đại cát áp đúng nghĩa: đi đến nơi về đến chốn).
**Né luật:**
- Không có tai nạn máy bay hay xe; không ai bị thương; mọi chuyến đi chỉ "quay về".
- Không tên hãng hàng không, công ty du lịch thật.
- Ông Bảy hiền, chỉ hỏi "đến nơi chưa".

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Giọng | fx |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34 | Thiện Minh | như cũ |
| HUONG | Hưởng, giám đốc công ty du lịch: vest, vali kéo, kính râm, nói như chào bán tour | vẽ mới | Adam bựa | không |
| BAY | Ông Bảy (đã mất): áo sơ mi trắng cũ, mũ lưỡi trai đoàn du lịch, đeo thẻ đoàn ngả vàng, ba lô nhỏ; hỏi "đến nơi chưa" | vẽ mới | Thiền Tâm Đức, cao −2, tốc −15% | `aecho=0.8:0.5:50:0.25` |
| KHACH | Bà Hoa, khách trong đoàn (2 câu) | vẽ mới | Ngọc Huyền, cao −3 | không |

SFX: loa sân bay, vali kéo lạch cạch, máy bay cất cánh ầm, tiếng xe taxi, xe máy, quán cà phê ồn, chuyển khoản "ting", lật lịch vạn niên.

---

## LONG (lời ≈ 700 chữ ≈ 4 phút)

### 0:00 — Cold open
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X01/toàn (trong khoang máy bay, Hưởng ngồi ghế cửa sổ, ngoài cửa sổ chỉ có mây mờ) | *(MN thì thầm)* Cất cánh rồi. Bay xa rồi. Ghế bên cạnh… ai ngồi thế? | máy bay ầm |
| X09/cận (bàn tay già đeo thẻ đoàn ngả vàng đặt lên tay vịn ghế bên cạnh) | | mõ CỘC nhẹ |

### 0:10 — Ma Nó mồi
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S01/toàn | **MN**: Lại mò vào à? Nhà mày đi du lịch có xem ngày xuất hành không? | mõ CỘC |
| S26/cận | **MN**: Có ông xem ngày rất kỹ. Để trốn. Mà ngày tốt quá… nên về đúng chỗ. | |

### 0:20 — Tour giá một nửa
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X03/toàn (văn phòng công ty du lịch, poster châu Âu, khách xếp hàng đóng tiền, nhiều ông bà cụ) | **MN**: Hưởng mở công ty du lịch. Tour châu Âu mười ngày, giá bằng một nửa. Năm mươi khách đóng tiền. Nhiều người là ông bà già góp cả đời để đi một chuyến. | "ting" chuyển khoản |
| X04/cận-Hưởng | **HUONG**: Bác cứ yên tâm. Ngày mười lăm bay. Visa em lo hết. | |
| X05/cận-bà Hoa ôm hộ chiếu mới | **KHACH**: Cả đời tôi chưa đi máy bay. Con cháu góp cho đấy. | |
| X06/cận (Hưởng lật lịch vạn niên, khoanh một ngày "đại cát xuất hành") | **MN**: Hưởng lật lịch vạn niên. Khoanh một ngày đại cát. Không phải ngày bay của đoàn. Ngày ông ôm tiền trốn. | lật lịch |

### 0:55 — Ông Bảy
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X07/toàn (quán cà phê sân bay mái che cam, năm mươi khách ngồi chờ với vali, một ghế có ông cụ đeo thẻ đoàn ngả vàng, không ai để ý) | **MN**: Ngày mười lăm. Năm mươi khách ngồi chờ ở quán cà phê sân bay. Hưởng không đến. Điện thoại tắt. | loa sân bay, quán ồn |
| X08/cận (ông Bảy mờ ngồi giữa đoàn, ba lô nhỏ, thẻ đoàn ngả vàng) | **MN**: Trong đoàn có ông Bảy. Con cháu mua tour cho ông từ năm ngoái. Ông mất trước ngày đi. Ông vẫn đến. Không ai nhìn thấy ông. | |
| X08/cận | **BAY**: Cả đời tôi muốn đi một lần. Thôi tôi không đi cũng được. Nhưng mấy bà này phải được đi. Hoặc được trả tiền. | |
| S26/cận | **MN**: Dân gian bảo: đi xa phải xem ngày xuất hành. Ngày tốt thì đi đến nơi, về đến chốn. Hưởng xem ngày đại cát. Chuẩn lắm. | chữ "ĐI ĐẾN NƠI, VỀ ĐẾN CHỐN" |

### 1:30 — Cất cánh (khoảnh khắc rợn)
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X01/toàn | **MN**: Ngày đại cát. Hưởng lên máy bay đi nước ngoài. Một mình. Vali đầy tiền đã chuyển. Thở phào. | máy bay cất cánh · nhạc tắt |
| X02/toàn (qua cửa sổ, sân bay nhỏ dần; loa cơ trưởng; máy bay vòng lại hạ thấp, bên dưới vẫn sân bay ấy, quán mái cam) | **MN**: Ba mươi phút. Loa cơ trưởng: "Thời tiết phía trước xấu, chúng tôi quay về." Máy bay vòng lại. Hạ thấp. Bên dưới đúng sân bay ấy. Đúng quán cà phê mái che màu cam. | loa cơ trưởng rè · máy bay hạ |
| X11/cực cận (mặt Hưởng áp vào cửa sổ, mắt trợn, mồ hôi) | | im |
| X09/cận (ghế bên cạnh Hưởng, ông cụ đeo thẻ đoàn ngả vàng quay sang) | **BAY**: Đến nơi rồi. Năm mươi người đang đợi cháu. | im 2 s |

### 2:00 — Đi đâu cũng về
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X07/toàn (Hưởng kéo vali bước ra khỏi máy bay, đi thẳng vào đúng quán cà phê, năm mươi khách ngẩng lên) | **MN**: Hạ cánh. Hưởng kéo vali đi theo lối ra. Lối ra dẫn thẳng vào quán cà phê mái cam. Năm mươi người ngẩng lên. | vali kéo, quán im bặt |
| X04/cận-Hưởng quay đầu chạy | **MN**: Hưởng quay đầu. Bắt taxi ra ga. Xuống xe: quán cà phê sân bay. | taxi, cửa xe |
| X10/toàn (Hưởng chạy xe máy về quê, rẽ ngõ nào cũng ra đúng cái quán mái cam) | **MN**: Thuê xe máy về quê. Rẽ ngõ nào cũng ra cái quán ấy. Năm mươi người đang ngồi. | xe máy, phanh gấp |
| X08/cận | **BAY**: Ngày đại cát. Đi đến nơi, về đến chốn. Chốn của cháu là năm mươi cái ghế này. | |
| S26/cận | **MN**: Hưởng chọn ngày tốt để trốn. Ngày tốt quá. Về đúng chốn. | |

### 2:35 — Hoàn tiền
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X07/cận-Hưởng ngồi bệt giữa năm mươi người, mở điện thoại | **MN**: Một buổi sáng. Bốn lần trốn. Bốn lần về đúng cái ghế nhựa ấy. Đến trưa thì Hưởng hết đường. | |
| X04/cận | **HUONG**: Em… em hoàn tiền. Từng người. | "ting" ×50 |
| X05/cận-bà Hoa nhận tiền, nhìn quanh | **KHACH**: Đủ rồi. Mà lạ, tôi cứ thấy như có ông cụ nào ngồi cạnh tôi mấy hôm nay. | |
| X08/cận (ông Bảy mờ đứng dậy, chỉnh mũ, khoác ba lô) | **BAY**: Thôi, mọi người có tiền rồi. Tôi đi đây. Lần này đi thật. | |

### 3:00 — Kết
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X02/toàn (một chiếc máy bay cất cánh bay xa vào hoàng hôn, không quay lại) | **MN**: Hôm ấy có một chuyến bay cất cánh, không quay lại sân bay. Không ai biết trên ấy có ai. | máy bay xa dần |
| X03/toàn (văn phòng công ty du lịch dán giấy niêm phong) | **MN**: Hưởng bị điều tra. Hoàn đủ tiền nên được xét giảm. Giờ đi đâu cũng xem ngày. Nhưng xem ngày xấu. Cho chắc không về đúng chốn nào. | |
| S33/toàn → S34/cận | **MN**: Mua tour rẻ bằng một nửa thì hỏi xem nửa kia đi đâu. Còn ai định ôm tiền trốn thì nhớ: ngày tốt không phải để trốn. Ngày tốt là để về. | rít điếu cày |
| (thẻ chữ trên nền tối, bảng điểm học sinh) | **MN**: Thứ Năm: một trung tâm luyện thi "cam kết đỗ trường chuyên" ép học sinh học đêm, phụ huynh nộp trăm triệu. Trung tâm thuê lại một ngôi trường cũ. Trường cũ có một hồi trống… rất đúng giờ. | thẻ "Tập sau · T5" |
| S06 mờ + cutout | **MN**: Bấm đăng ký đi. Đi đến nơi, về đến chốn. | chữ "ĐĂNG KÝ" · mõ CỘC |

---

## SHORTS (7; nếu chốt 3 thì giữ SH1, SH4, SH5)
| # | Tên | Hook 3 s | Thân | Kết |
|---|---|---|---|---|
| SH1 | Bay xa rồi nhìn xuống | X02 | Cold open | máy bay hạ |
| SH2 | Tour giá một nửa | X03 | 50 khách, ông bà góp cả đời | **KHACH**: "Cả đời chưa đi máy bay." |
| SH3 | Xem ngày đại cát để trốn | X06 lịch | Đi đến nơi, về đến chốn | **MN**: "Chuẩn lắm." |
| SH4 | Đến nơi chưa cháu? | X09 | Máy bay về đúng sân bay cũ | chữ "Ông là ai? → video đầy đủ" |
| SH5 | Đi đâu cũng về chỗ khách đợi | X10 | Taxi, xe máy, rẽ đâu cũng ra quán | **BAY**: "Chốn của cháu là chỗ này." |
| SH6 | Ông cụ đi thật | X08 | Hoàn tiền, ông Bảy khoác ba lô | **BAY**: "Lần này đi thật." |
| SH7 | Ngày tốt là để về | S34 | Kết → teaser trung tâm luyện thi | đăng ký |

---

## Hình
Tận dụng: B02 + ep01 S01/S26/S33/S34/S06 (Ma Nó).

### Vẽ mới: 11 ảnh (16:9)
| Mã | Cảnh |
|---|---|
| X01 | Khoang máy bay, Hưởng ngồi ghế cửa sổ, vest, kính râm, thở phào |
| X02 | Cửa sổ máy bay nhìn xuống: sân bay, mái che quán cà phê màu cam; bản sân bay nhỏ dần; bản máy bay bay xa vào hoàng hôn |
| X03 | Văn phòng du lịch: poster châu Âu, khách xếp hàng đóng tiền, nhiều ông bà cụ; bản dán niêm phong |
| X04 | Hưởng cận: vest, vali kéo, cười chào bán; bản chạy; bản ngồi bệt mở điện thoại |
| X05 | Bà Hoa cận: ôm hộ chiếu mới; bản nhận tiền, nhìn quanh |
| X06 | Cận lịch vạn niên, ngón tay khoanh một ngày (trống chữ) |
| X07 | Quán cà phê sân bay mái che cam, năm mươi khách với vali ngồi chờ; bản Hưởng kéo vali vào, khách ngẩng lên |
| X08 | Ông Bảy mờ: sơ mi trắng cũ, mũ lưỡi trai đoàn, thẻ đoàn ngả vàng, ba lô nhỏ; ngồi giữa đoàn / đứng dậy khoác ba lô |
| X09 | Ghế bên Hưởng trên máy bay: ông cụ đeo thẻ đoàn ngả vàng quay sang hỏi |
| X10 | Hưởng chạy xe máy rẽ vào ngõ, cuối ngõ lại là quán cà phê mái cam, năm mươi người |
| X11 | Cực cận mặt Hưởng áp vào cửa sổ máy bay, mắt trợn, mồ hôi, phản chiếu sân bay bên dưới |
