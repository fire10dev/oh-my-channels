# Dự án 20 — Táo quân "Kẹt túi nylon" (v2, 2026-11-21)

v2 sửa theo agy (`debate/08-scripts/p20-agy.md`):
- Logic chặt hơn: Táo lỡ chầu thì Thiên đình giữ lửa lại, bếp cả phường lạnh. Vớt túi lên, Táo đi nộp sổ muộn, được trả lửa.
- Bếp tắt tả cụ thể: bếp từ báo lỗi tít tít, bếp ga lửa xanh vẫn cháy mà nồi lạnh tanh.
- Kết bỏ giọng bảo vệ môi trường. Thay bằng "lười năm giây, mùng một lội bùn".

Theo `season-plan-p03-p48.md` dòng P20. Đăng T2 01/02 18:00 (23 tháng Chạp là 30/01/2027, Tết là 06/02).
Cuối P19 đã hứa: **"ông Công ông Táo về trời. Cá chép thả từ cầu xuống sông… cả túi nylon. Ông Táo cưỡi cá ra sao?"**

✏️ Đổi so với dàn tập: bỏ "túi nylon in chữ trừ phúc". Không phạt một nhà mà phạt **cả phường** (cú lật hệ quả sinh thái). **Cách kể mới:** con cá chép số 7 kể ngôi thứ nhất. Không nhại chương trình truyền hình Táo Quân: ông Táo ở đây là một công chức mệt mỏi, không có màn tấu hài.

**Ý chính:**
- Dân gian: 23 tháng Chạp, ông Táo cưỡi cá chép về trời tấu việc nhà, giao thừa trở về giữ bếp. Nhà không có Táo thì bếp không giữ được lửa.
- Anh Thịnh mua mười hai con cá chép "thả cho cả họ", đứng trên cầu vượt ném cả túi nylon xuống con kênh đen. "Thả cho nhanh, ai rảnh mà mở túi."
- Cá số 7 trong túi nhà Thịnh kể: túi chìm, kênh đầy túi nylon của cả phường, cá không bơi ra được. Ba trăm ông Táo của ba trăm nhà kẹt dưới kênh.
- Cú lật: Táo lỡ chầu, Thiên đình giữ lửa lại. Giao thừa, bếp cả phường lạnh cùng lúc: bếp từ báo lỗi, bếp ga lửa xanh vẫn cháy mà nồi lạnh tanh. Mùng một Tết, cả phường phải xuống kênh vớt túi nylon. Mỗi túi vớt lên, một ông Táo bay đi nộp sổ muộn, một căn bếp có lửa lại. Nhà Thịnh ném mười hai túi, phải vớt mười hai túi.

**Khoảnh khắc rợn duy nhất:** giao thừa, cả phường đang đếm ngược. Đúng tiếng "không", mọi căn bếp trong phường tắt lửa cùng lúc. Trong im lặng, từ con kênh vọng lên tiếng đuôi cá quẫy nước. Một tiếng. Rồi ba trăm tiếng.
**Kiểu lật:** hệ quả sinh thái quay về (rác của mình chặn chính lộc của mình); phạt tập thể vì thói quen tập thể.
**Né luật:**
- Không nhại chương trình truyền hình Táo Quân, không tên đài.
- Cá số 7 không chết trên hình. Nó kể bằng giọng bình thản, sống sót đến cuối.
- Không chỉ dẫn nghi lễ cúng Táo; chỉ nói tục thả cá.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Giọng | fx |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34 | Thiện Minh | như cũ |
| CA | Cá chép số 7: cá chép vàng nhỏ, vây đỏ, kể chuyện bình thản kiểu dân văn phòng | vẽ mới | Ngọc Huyền, cao +2 | `lowpass` nhẹ như dưới nước |
| TAO | Ông Táo nhà Thịnh: mũ cánh chuồn lệch, áo quan sờn, không mặc quần (đúng tranh dân gian), mắt thâm, cầm cuốn sổ tấu dày | vẽ mới | Thiền Tâm Đức, tốc −5% | `aecho=0.8:0.5:50:0.25` |
| THINH | Anh Thịnh: áo phao, mũ bảo hiểm, xách túi cá, vội | vẽ mới | Adam bựa | không |

SFX: xe cộ trên cầu vượt, túi nylon rơi "bộp" xuống nước, nước kênh óc ách, bọt, đuôi cá quẫy, bếp ga tạch tạch không lên, pháo hoa xa, đếm ngược.

---

## LONG (lời ≈ 700 chữ ≈ 4 phút)

### 0:00 — Cold open
| Khung | Lời | Chữ / SFX |
|---|---|---|
| A01/toàn (dưới mặt kênh đen, hàng trăm túi nylon lơ lửng như sứa, trong mỗi túi một con cá) | **CA**: Tôi là cá số bảy. Túi nhà anh Thịnh. Tôi đang ở dưới đáy kênh. | nước óc ách, bọt |
| A02/cận (ông Táo ngồi trên túi nylon dưới nước, mũ lệch, ôm sổ) | **TAO**: Cá ơi. Mấy giờ thì đi được? | |
| A01/cận-cá số 7 | **CA**: Khi nào có người mở túi, sếp ạ. | mõ CỘC nhẹ |

### 0:12 — Ma Nó mồi
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S01/toàn | **MN**: Lại mò vào à? Hai ba tháng Chạp nhà mày thả cá chưa? Thả cả túi hay mở túi? | mõ CỘC |
| S26/cận | **MN**: Nhớ không ra thì nghe chuyện này. Hôm nay tao nhường mic cho một con cá. | |

### 0:22 — Cá số 7 kể: chuyến đi
| Khung | Lời | Chữ / SFX |
|---|---|---|
| A03/toàn (chợ cá chép sáng 23 tháng Chạp, chậu nhôm, túi nylon bơm ô-xy) | **CA**: Sáng hai ba, tôi được anh Thịnh mua ở chợ. Mười hai con, mười hai túi. "Thả cho cả họ." | chợ ồn |
| S26/cận | **MN**: Dân gian bảo: hai ba tháng Chạp, ông Táo cưỡi cá chép về trời, tấu một năm việc trong nhà. Giao thừa thì về giữ bếp. Cá là xe. Không có xe thì không đi. | chữ "CÁ CHÉP = XE CỦA TÁO" |
| A04/toàn (cầu vượt trên kênh đen, xe máy đỗ dọc lan can, người ném túi xuống) | **CA**: Anh Thịnh không ra bờ. Anh dừng xe giữa cầu vượt. | xe cộ trên cầu |
| A05/cận-Thịnh trên cầu, xách chùm túi | **THINH**: Mở từng túi lâu lắm. Ném cả túi, xuống dưới tự nó bơi ra. | |
| A04/cận (chùm túi rơi xuống) | **CA**: Tôi bay. Rồi "bộp". | túi rơi "bộp" ×12 |

### 1:00 — Đáy kênh
| Khung | Lời | Chữ / SFX |
|---|---|---|
| A01/toàn | **CA**: Túi không tự mở. Túi chìm. Dưới đáy đã có sẵn ba trăm cái túi khác, của ba trăm nhà khác, từ sáng tới giờ. | bọt |
| A02/toàn (ba trăm ông Táo ngồi trên ba trăm túi nylon dưới đáy kênh, như tắc đường) | **CA**: Và trên mỗi túi có một ông Táo. Ngồi chờ. Như tắc đường. | |
| A02/cận | **TAO**: Ta đi bốn trăm năm. Đi thuyền, đi ngựa, đi cá. Chưa năm nào tắc đường dưới nước. | |
| S26/cận | **MN**: Thả cá là thả cho cá sống, để cá đưa người đi. Thả cả túi thì là thả… một cái túi. | |

### 1:35 — Công chức kẹt
| Khung | Lời | Chữ / SFX |
|---|---|---|
| A02/cận-ông Táo lật sổ tấu | **TAO**: Sổ tấu nhà Thịnh năm nay ba trăm trang. Không nộp kịp thì Thiên đình không cấp lửa năm mới. Táo không về, bếp không lửa. | lật sổ |
| A01/cận | **CA**: Sếp ơi, em hết ô-xy rồi. | |
| A02/cận-ông Táo thổi một hơi vào túi | **TAO**: Ta thổi cho. Thần bếp thổi lửa giỏi, thổi bóng chắc cũng được. | thổi phù · bọt |
| S26/cận | **MN**: Một ông thần, bốn trăm năm kinh nghiệm, ngồi dưới đáy kênh thổi ô-xy cho xe của mình. | |

### 2:05 — Giao thừa (khoảnh khắc rợn)
| Khung | Lời | Chữ / SFX |
|---|---|---|
| A06/toàn (phường đêm 30, nhà nhà sáng đèn, nồi bánh chưng sôi) | **MN**: Đêm ba mươi. Cả phường nấu nướng, đếm ngược. | đếm ngược xa |
| A06/cận | **MN**: Ba. Hai. Một… Không. | |
| A07/toàn (dãy bếp các nhà: nồi thôi bốc hơi, mặt bếp từ nháy đỏ) | **MN**: Đúng tiếng "không", mọi căn bếp trong phường lạnh đi cùng lúc. Bếp từ kêu tít tít, báo lỗi. Bếp ga lửa xanh vẫn cháy. Mà nồi bánh chưng đang sôi… thôi sôi. Sờ vào lạnh tanh. | bếp từ tít tít · nồi lặng · nhạc tắt |
| A04/toàn (con kênh đêm, mặt nước đen) | **MN**: Trong im lặng, từ con kênh vọng lên tiếng đuôi cá quẫy nước. Một tiếng. Rồi ba trăm tiếng. | đuôi cá quẫy ×1… ×300 · im 2 s |

### 2:35 — Bếp không lửa
| Khung | Lời | Chữ / SFX |
|---|---|---|
| A08/cận-Thịnh đặt tay vào nồi trên ngọn lửa xanh | **THINH**: Lửa cháy đây mà! Sao nồi lạnh ngắt? | tạch tạch tạch |
| S26/cận | **MN**: Lửa vẫn cháy, nhưng hơi nóng thì Thiên đình giữ lại. Táo chưa nộp sổ, chưa có lửa năm mới. Ông Táo nhà mày đang ở dưới kênh. | |
| A09/toàn (sáng mùng 1, cả phường áo mới mặc tạm áo mưa, lội kênh vớt túi nylon) | **MN**: Sáng mùng một Tết. Cả phường không ai đi chúc Tết. Cả phường xuống kênh. | nước óc ách, tiếng người |
| A09/cận (một túi vớt lên, mở, cá vàng vọt ra, một bóng mũ cánh chuồn bay lên) | **MN**: Mỗi túi vớt lên, mở ra, một con cá vọt đi, một ông Táo bay lên nộp sổ muộn. Đầu ngõ, một căn bếp nóng lại. | bọt, gió · nồi sôi lục bục |

### 3:00 — Kết
| Khung | Lời | Chữ / SFX |
|---|---|---|
| A05/cận-Thịnh ướt sũng, bùn tới ngực, ôm chùm túi | **MN**: Nhà Thịnh ném mười hai túi. Mùng một Tết, áo mới để nhà, Thịnh lội bùn tới ngực vớt đủ mười hai túi. Túi cuối cùng là cá số bảy. | |
| A01/cận-cá số 7 vọt ra khỏi túi | **CA**: Cảm ơn anh. Lần sau anh ra bờ nhé. Mở túi mất có năm giây. | bọt |
| A02/cận-ông Táo bay lên, ôm sổ | **TAO**: Sổ tấu năm nay thêm một trang. Lý do nộp muộn: kẹt túi nylon. | chữ "LÝ DO: KẸT TÚI NYLON" |
| S33/toàn → S34/cận | **MN**: Hai ba tháng Chạp lười năm giây. Mùng một Tết lội bùn năm tiếng. Tính ra… mở túi vẫn rẻ hơn. | rít điếu cày |
| (thẻ chữ trên nền tối, cành đào) | **MN**: Thứ Năm: hai chín Tết, gian thương ép giá vét sạch đào rừng bán vỉa hè. Đào nở đẹp lắm. Đến đúng giao thừa thì… | thẻ "Tập sau · T5" |
| S06 mờ + cutout | **MN**: Bấm đăng ký đi. Năm giây thôi, như mở túi cá. | chữ "ĐĂNG KÝ" · mõ CỘC |

---

## SHORTS (7; nếu chốt 3 thì giữ SH1, SH4, SH5)
| # | Tên | Hook 3 s | Thân | Kết |
|---|---|---|---|---|
| SH1 | Ông Táo kẹt dưới đáy kênh | A01 túi nylon như sứa | Cold open | **CA**: "Khi nào có người mở túi, sếp ạ." |
| SH2 | Ném cả túi từ cầu vượt | A04 | "Xuống dưới tự nó bơi ra" | **CA**: "Tôi bay. Rồi bộp." |
| SH3 | Tắc đường dưới nước | A02 ba trăm ông Táo | 400 năm chưa tắc đường dưới nước | **MN**: "Thả cả túi thì là thả một cái túi." |
| SH4 | Lửa cháy mà nồi lạnh tanh | A07 | Đếm ngược → bếp từ báo lỗi, nồi thôi sôi → 300 tiếng quẫy | chữ "Vì sao? → video đầy đủ" |
| SH5 | Mùng một xuống kênh | A09 | Vớt túi, mở túi, Táo bay lên | **MN**: "Muộn một tuần, nhưng bay." |
| SH6 | Lý do nộp muộn | A02 sổ tấu | "Kẹt túi nylon" | **CA**: "Mở túi mất có năm giây." |
| SH7 | Ông Táo cũng muốn về kịp Tết | S34 | Kết → teaser ma cây đào | đăng ký |

---

## Hình
Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

### Vẽ mới: 9 ảnh (16:9)
| Mã | Cảnh |
|---|---|
| A01 | Dưới mặt kênh đen đục: hàng trăm túi nylon lơ lửng như sứa, trong mỗi túi một con cá chép vàng; cận một con cá nhỏ vây đỏ |
| A02 | Ông Táo (mũ cánh chuồn lệch, áo quan sờn, không mặc quần như tranh dân gian, mắt thâm, ôm sổ tấu dày) ngồi trên túi nylon dưới đáy kênh; phía sau hàng trăm ông Táo khác ngồi trên túi như tắc đường |
| A03 | Chợ cá chép sáng 23 tháng Chạp: chậu nhôm, túi nylon bơm ô-xy treo thành chùm |
| A04 | Cầu vượt bê tông trên con kênh đen, xe máy đỗ dọc lan can, người đứng ném túi cá xuống |
| A05 | Anh Thịnh (áo phao, mũ bảo hiểm) trên cầu, xách chùm mười hai túi cá |
| A06 | Phường đêm 30 Tết: dãy nhà ống sáng đèn, nồi bánh chưng sôi trước cửa |
| A07 | Cùng góc A06: nồi bánh chưng thôi bốc hơi, mặt bếp từ nháy đỏ, ngọn lửa ga xanh vẫn cháy dưới nồi lặng |
| A08 | Anh Thịnh cận, bấm bếp ga không lên lửa, mặt hoảng |
| A09 | Sáng mùng 1: người dân áo mưa, ủng, lội kênh vớt túi nylon; một túi vừa mở, cá vọt ra, một bóng mũ cánh chuồn mờ bay lên |
