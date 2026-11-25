# Dự án 4 — Ma giấu "Mất con ba ngày không ai biết" (v3 chốt, 2026-11-23)

Nền: v2 (`p04-ma-giau-v2.md`, đã sửa theo agy). v3 đổi:
- Lịch theo khuôn 2 tập/tuần: P04 = **tập B, LONG T5 3/12 18:00**, short 3/12 19:00 → CN 6/12 19:00. Tập sau P05 (ma da) = **T2 7/12** → teaser nói "Thứ Hai".
- LONG nén còn ≈ 560 chữ (≈ 3:15) như P03 (3:06). Bỏ cảnh trùng ý.
- Shorts theo khuôn P03 v4: **5 TRỌN có punchline + 2 TRAILER** dẫn về LONG, 30–40 s, không intro chung, pop "MA GIẤU" lần đầu nó xuất hiện, kết Ma Nó 1 câu chỉ link.
- Mỗi punch của short có 1 ảnh "payoff" riêng (bài học SH4P P03).
- Bố Tuấn có 1 câu thoại (cho SH5): "Em xin phép tắt cam."

**Luật trẻ em (bible §2, §6):** Bin tự nguyện ở "căn cứ bí mật" cầu thang để trốn làm bài, no đủ, không sợ, không bị hại. Ma giấu không giữ Bin, không cho ăn đất; nó **trả** Bin đúng luật. Bin bùn chỉ hơi lạ, không đáng sợ.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Giọng VieNeu (thử ở bước 3) | fx |
|---|---|---|---|---|
| MG | Ma giấu: cao gầy, da xanh chàm, mũ lá chuối khô, thân rễ cây, cười ranh mãnh; xưng "tao", lắm mồm, tự ái nghề | **B06** | nam trẻ nhanh (Hải Đăng hoặc Thanh Bình, chọn bản khác KHAI) | `atempo=1.08` |
| MN | Ma Nó | B02, ep01 S01/S26/S33/S34 | Thiện Minh | như P03 |
| ME | Mẹ Linh ~35, livestream mỹ phẩm + đồ phong thủy, giọng "chốt đơn" | vẽ mới | Ngọc Huyền (P03 không dùng; nếu không có thì Mai Anh) | không |
| BIN | Bin 10 tuổi, hoodie cam, tai nghe to, bình thản | vẽ mới | giọng trẻ nhất có (Trúc Ly); không đạt thì Bin nói bằng chữ trên màn hình + sfx "bíp" | không |
| BO | Bố Tuấn ~38, trên áo sơ mi cà vạt, dưới quần đùi, họp trực tuyến | vẽ mới | Thanh Bình | không |

SFX mới (`make_p04_sfx.sh`): mâm đồng "boong", tiếng nhai, ting giao hàng, chuông họp trực tuyến, "chốt đơn" vọng, cửa thoát hiểm kẽo kẹt, cầu dao "tạch", đất rơi lả tả.

---

## LONG (≈ 560 chữ, ≈ 3:15)

### 0:00 — Cold open
| Khung | Lời | Chữ / SFX |
|---|---|---|
| G01/toàn (mâm cơm 4 ghế, ánh màn hình) | *(chỉ tiếng nhai)* | nhai ×3, nhịp thứ tư im · chữ "BỮA TỐI · NGÀY THỨ BA" |
| G01/cận-ghế Bin (chỉ thấy gáy + máy tính bảng) | | im 1 s |
| G11/mẹ cúi điện thoại | **ME**: Bin ăn nhanh lên con. Mẹ đang live. | |
| B06/cận-mặt | **MG**: Cứ giục đi. Có nhai cả đời… cũng không ra tiếng đâu. | pop "MA GIẤU" |

### 0:12 — Ma Nó mồi
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S01/toàn | **MN**: Lại mò vào à? Khách hôm nay làm nghề giấu người. Tám trăm năm, lần đầu tiên nó thua. | mõ CỘC |
| S26/cận | **MN**: Thua một nhà chung cư. Mà cả nhà đó không ai biết mình vừa thắng. | |

### 0:25 — Luật nghề
| Khung | Lời | Chữ / SFX |
|---|---|---|
| B06/toàn | **MG**: Tao là ma giấu. Nghề tao: giấu người, chủ yếu trẻ con mải chơi. | |
| B06/cận | **MG**: Luật rõ ràng. Tao giấu, nhà nó đi tìm. Gõ mâm đồng, gọi tên. Có tiếng gõ là tao trả. Thế mới gọi là chơi. | chữ "LUẬT: GÕ MÂM · GỌI TÊN → TRẢ" · boong |
| S26/cận | **MN**: Tám trăm năm chưa hỏng lần nào. Cho đến căn hai bảy không tám. | chữ "CĂN 27-08" |

### 0:45 — Căn 27-08
| Khung | Lời | Chữ / SFX |
|---|---|---|
| G02/toàn | **MG**: Bố họp trực tuyến. Mẹ livestream. Thằng con chơi game. Ba người, ba cái màn hình, một cái sofa. | chuông họp · "chốt đơn" vọng |
| G12/cận-mâm đồng | **ME**: Mâm đồng phong thủy, gõ một cái tài lộc về! Còn ba suất cuối! Chốt! | chữ "MÂM ĐỒNG PHONG THỦY" · boong nhỏ |
| S26/cận | **MN**: Nhớ cái mâm. | |
| B06/cận-nhếch | **MG**: Tối thứ Sáu, thằng Bin trốn làm bài, ra cầu thang thoát hiểm chơi game. Tao đóng cửa lại, che mắt cả nhà. Dễ. | cửa kẽo kẹt |

### 1:05 — Ngày một, ngày hai
| Khung | Lời | Chữ / SFX |
|---|---|---|
| G03/toàn | **MG**: Tao ngồi chờ tiếng mâm. Chín giờ. Mười giờ. Nửa đêm. | tích tắc · chữ "NGÀY 1" |
| G01/ghế trống (dùng G02 crop) | **MG**: Không ai gõ. Bố tưởng Bin ở với mẹ. Mẹ tưởng Bin ở với bố. | |
| G03/cận-Bin | **BIN**: Chú cũng trốn học à? Ở đây bắt được wifi nhà cháu không chú? | |
| B06/cận-đơ | **MG**: Tám trăm năm, chưa đứa nào hỏi tao câu đó. | |
| G04/toàn | **MN**: Ngày thứ hai, thằng Bin đặt trà sữa, ghi chú: treo ở cửa thoát hiểm tầng hai bảy. Sạc ké ổ điện bảo trì. Nó gọi chỗ này là căn cứ bí mật. | chữ "NGÀY 2" · ting giao hàng |
| G04/cận-MG bó gối | **MG**: Tao là ma giấu, hay là trông trẻ? | |

### 1:35 — Tự ái nghề
| Khung | Lời | Chữ / SFX |
|---|---|---|
| G05/toàn | **MG**: Tao nặn một thằng Bin bằng bùn chậu cây, cho về ngồi sofa. Mắt hai hạt na. Nhìn là biết giả. Kiểu gì nhà nó cũng phát hiện, rồi đi tìm. | nặn đất · chữ "BIN BÙN" |
| S26/cận | **MN**: Kiểu gì cũng phát hiện. Nhớ câu đó. | |

### 1:55 — Bữa tối ngày thứ ba (khoảnh khắc rợn)
| Khung | Lời | Chữ / SFX |
|---|---|---|
| G01/toàn | **MG**: Bữa tối ngày thứ ba. Thằng bùn ngồi đúng ghế, cầm đúng máy tính bảng. | nhạc tắt |
| G01/cận-mâm | **MG**: Bốn người. Ba tiếng nhai. | nhai ×3, im |
| G11/mẹ không ngẩng | **ME**: Hôm nay Bin ngoan thế. Không đòi gì. | |
| G02/cận-bố (crop) | **BO**: Ừ. Em xin phép tắt cam. | chuông họp |
| G06 (MG dán mặt vào kính ban công, sững) | **MG**: Tao đứng ngoài ban công. Lần đầu tiên trong đời… tao sợ. | im 2 s |

### 2:25 — Chiều ngày thứ ba
| Khung | Lời | Chữ / SFX |
|---|---|---|
| G07/toàn | **MN**: Chiều đó, thằng bùn làm xong sạch bài tập cả tuần. Không cãi, không đòi điện thoại. Ngoan như tượng. | chữ "XONG BÀI CẢ TUẦN" |
| G07/cận-điện thoại mẹ | **ME**: Con nhà mình tự giác lắm cả nhà ơi. Bí quyết ở link dưới bình luận nha. | tim bay |
| G03/cận-Bin | **BIN**: Chú ơi. Mẹ cháu có hỏi cháu không? | |
| B06/cận | **MG**: Tao không trả lời. Nghề tao là giấu, không phải nói dối. | |

### 2:45 — Hai giờ sáng (cú lật)
| Khung | Lời | Chữ / SFX |
|---|---|---|
| B06/cận-quyết | **MG**: Luật: nhà nó phải gõ mâm, gọi tên. Nhà này không gõ, thì tao làm cho nó gõ. | |
| G08/toàn | **MG**: Hai giờ sáng, tao rút cầu dao cả tầng. | tạch · điều hòa tắt |
| G09/toàn | **MN**: Bà mẹ mò ra hành lang, vớ thứ gần nhất trên kệ: cái mâm đồng phong thủy. Va bốp vào cửa thoát hiểm. | BOONG! |
| G09/cận-mẹ | **ME**: Bin đâu! Cầm đèn pin cho mẹ! | |
| B06/cận-thở phào | **MG**: Có tiếng mâm. Có người gọi tên. Luật mở. Tao trả. | chữ "GÕ MÂM ✔ · GỌI TÊN ✔ → TRẢ" |
| G09/cận-cửa hé | **BIN**: Mẹ… mẹ tìm con à? | |

### 3:05 — Kết
| Khung | Lời | Chữ / SFX |
|---|---|---|
| G10/toàn | **MN**: Sáng ra, nắng chiếu vào sofa. Thằng bùn rã thành một đống đất chậu cây. | đất rơi |
| G10/cận-mẹ | **ME**: Tiếc thế. Đang ngoan. | |
| G10/cận-bàn ăn | **MN**: Còn thằng Bin thật, lần đầu tiên ăn sáng không cầm máy. Nó kể ba ngày ở căn cứ bí mật. Cả nhà ngẩng lên nghe. | |
| B06/cận-nhếch | **MG**: Thằng bùn được học sinh giỏi. Tao đang tính mở trung tâm. | mõ CỘC · chữ "TRUNG TÂM MA GIẤU — NHẬN NẶN CON NGOAN" |
| S33 → S34 | **MN**: Tối nay ăn cơm, đếm xem nhà mày có mấy tiếng nhai. | rít điếu cày |
| B07 | **MN**: Thứ Hai: bến cát lậu mùa lũ, và một con ma da bảy năm chưa được thay ca. | thẻ "TẬP SAU · THỨ HAI" |
| S06 mờ + cutout | **MN**: Bấm đăng ký đi. Không thì mai mẹ mày gõ mâm, người về chưa chắc đã là mày. | chữ "ĐĂNG KÝ" · mõ CỘC |

---

## SHORTS — 5 TRỌN + 2 TRAILER (30–40 s, 9:16)
Kết chung của short trọn: punch → lặng 0.8 s → **MN** 1 câu chỉ link + pop "▼ BẢN ĐẦY ĐỦ: LINK DƯỚI". Câu mới (TTS) in đậm; còn lại cắt từ LONG.

### SH1 — TRỌN · Hồ sơ ma giấu (~35 s)
- Hook: B06 cận + **MN**: **"Hồ sơ ma giấu. Nhà mày có trẻ con thì nghe cho kỹ."** · pop "HỒ SƠ: MA GIẤU"
- **MN**: **"Một. Nó giấu người, chủ yếu trẻ con mải chơi."** (G03) · pop "1. GIẤU TRẺ"
- **MN**: **"Hai. Nó che mắt. Đứa trẻ đứng ngay đấy, cả nhà không thấy."** (G06) · pop "2. CHE MẮT"
- **MN**: **"Ba. Muốn nó trả thì gõ mâm đồng, gọi tên. Ngày xưa mất đứa trẻ, cả làng ra gõ."** (G12) · pop "3. GÕ MÂM · GỌI TÊN"
- PUNCH **MN**: **"Ngày nay mất đứa trẻ… phải đợi điện thoại hết pin."** (G02) · pop "4. ĐỢI HẾT PIN" đỏ
- Kết **MN**: **"Căn hai bảy không tám đợi ba ngày. Tao kể ở bản đầy đủ, link dưới."**

### SH2 — TRỌN · Cách sống sót khi bị ma giấu (~33 s)
- Hook: G03 + **MN**: **"Cách sống sót khi bị ma giấu. Học thằng Bin, mười tuổi."** · pop "BỊ MA GIẤU?"
- **MN**: **"Một. Đừng sợ. Hỏi wifi."** → **BIN**: "Chú cũng trốn học à? Ở đây bắt được wifi nhà cháu không chú?" · pop "1. HỎI WIFI"
- **MN**: **"Hai. Đặt trà sữa, ghi chú: treo cửa thoát hiểm."** (G04) · ting · pop "2. ĐẶT TRÀ SỮA"
- **MN**: **"Ba. Sạc ké ổ bảo trì. Gọi là căn cứ bí mật."** (G04 cận ổ) · pop "3. SẠC KÉ"
- PUNCH (G04 cận MG bó gối, pop "MA GIẤU"): **MG**: "Tao là ma giấu, hay là trông trẻ?" + lặng
- Kết **MN**: **"Nhà nó ba ngày không ai tìm. Tao kể ở bản đầy đủ, link dưới."**

### SH3 — TRỌN · Bí quyết con ngoan (~32 s)
- Hook: G07 + pop "CON NGOAN NHỜ… ?" · **ME**: "Con nhà mình tự giác lắm cả nhà ơi."
- **MG** (G05, pop "MA GIẤU"): "Tao nặn một thằng Bin bằng bùn chậu cây… Nhìn là biết giả. Kiểu gì nhà nó cũng phát hiện."
- G07 + **MN**: "Chiều đó, thằng bùn làm xong sạch bài tập cả tuần. Không cãi, không đòi điện thoại."
- **ME**: "Bí quyết ở link dưới bình luận nha." · tim bay
- PUNCH **MN** (G05 cận hai hạt na): **"Bí quyết là bùn."** · pop "BÍ QUYẾT = BÙN" + lặng
- Kết **MN**: **"Còn thằng Bin thật đang ở đâu? Link bản đầy đủ ngay dưới."**

### SH4 — TRỌN · Mâm đồng phong thủy (~30 s)
- Hook: G12 + **ME**: "Mâm đồng phong thủy, gõ một cái tài lộc về! Còn ba suất cuối! Chốt!" · pop "GÕ LÀ CÓ LỘC?"
- **MN** (G02): **"Mâm đồng. Ngày xưa gõ để gọi người về. Giờ gõ để gọi đơn về."**
- **MG** (B06, pop "MA GIẤU"): **"Tao giấu con nhà nó ba ngày, chỉ chờ một tiếng mâm."**
- PUNCH **MG**: **"Nhà nó bán ba trăm cái mâm. Không gõ cái nào."** · pop "300 MÂM · 0 TIẾNG GÕ" + lặng
- Kết **MN**: **"Đến hai giờ sáng thì có người gõ. Tao kể ở bản đầy đủ, link dưới."**

### SH5 — TRỌN · Ông bố họp trực tuyến (~30 s)
- Hook: G02 cận bố (áo vest trên, quần đùi dưới) · pop "BA NGÀY HỌP" · chuông họp
- **MN**: **"Ông bố này ba ngày họp trực tuyến. Không biết con mình đi đâu."**
- **ME** (G11): "Hôm nay Bin ngoan thế. Không đòi gì."
- **MN**: **"Thằng ngồi ghế là bùn. Ông bố gật đầu."** (G01) 
- PUNCH **BO**: "Ừ. Em xin phép tắt cam." · pop "TẮT CAM" + lặng
- topper **MG** (B06, pop "MA GIẤU"): **"Ba ngày, ông ấy nói đúng một câu. Câu đó."**
- Kết **MN**: **"Con thật ở đâu? Link bản đầy đủ ngay dưới."**

### SH6 — TRAILER · Bốn người, ba tiếng nhai (~30 s)
- Hook: G01 + nhai ×3, chỗ thứ tư im · pop "4 NGƯỜI · 3 TIẾNG NHAI"
- Cold open LONG (ME "Bin ăn nhanh lên con" → MG "có nhai cả đời…", pop "MA GIẤU")
- **MG**: "Bốn người. Ba tiếng nhai." → **ME**: "Hôm nay Bin ngoan thế." → G06 **MG**: "Lần đầu tiên trong đời… tao sợ."
- Kết treo **MN**: **"Đứa ngồi ghế thứ tư là ai? Bản đầy đủ, link dưới."**

### SH7 — TRAILER · Hai giờ sáng, tầng 27 (~32 s)
- Hook: G08 + tạch · pop "2:00 SÁNG · CẮT ĐIỆN"
- **MG**: "Nhà này không gõ, thì tao làm cho nó gõ." → G09 **MN**: "…Va bốp vào cửa thoát hiểm." BOONG
- **ME**: "Bin đâu!" → **MG**: "Luật mở. Tao trả." → **BIN**: "Mẹ… mẹ tìm con à?"
- Kết treo **MN** (G10 đống đất, chưa lộ là gì): **"Thế thằng đang ngồi trên sofa là ai? Bản đầy đủ, link dưới."**

**Lịch đề xuất** (chốt ở bước 5): T5 3/12 19:00 SH1 · T6 4/12 11:30 SH6 · 19:00 SH3 · T7 5/12 11:30 SH2 · 19:00 SH4 · CN 6/12 11:30 SH5 · 19:00 SH7.

---

## Hình

### Tận dụng
| Ảnh | Dùng cho |
|---|---|
| `assets/muse-v2/B06.png` | Mọi cận/toàn MG; cutout; thumbnail; tham chiếu Bin bùn |
| B02, ep01 S01/S26/S33/S34 | Ma Nó |
| `assets/muse-v2/B07.png` | Teaser ma da |
| ep01 S06 | CTA |

### Vẽ mới: 12 ảnh (16:9, 2048×1152) — đủ cho LONG + payoff của 5 short trọn
| Mã | Cảnh | Dùng |
|---|---|---|
| G01 | Mâm cơm 4 ghế ban đêm: mẹ cúi điện thoại, bố nhìn laptop, Bin bùn cầm máy tính bảng; ánh màn hình xanh | cold open, rợn, SH5, SH6 |
| G02 | Phòng khách: bố họp trực tuyến (sơ mi cà vạt + quần đùi), mẹ livestream với vòng đèn cầm mâm đồng, hộp hàng chồng; Bin đeo tai nghe chơi game trên sofa | 27-08, SH1, SH4, SH5 |
| G03 | Cầu thang thoát hiểm tầng 27, đèn exit xanh: Bin ngồi bậc ôm cốc trà sữa, ma giấu ngồi xổm cạnh, mặt bối rối | ngày 1, SH2 |
| G04 | Chiếu nghỉ: túi trà sữa treo tay nắm cửa, dây sạc từ ổ bảo trì vào máy tính bảng; Bin nằm thoải mái trên tấm bìa các-tông có chăn; ma giấu bó gối bất lực | ngày 2, SH2 punch |
| G05 | Hành lang: ma giấu nặn bé bùn từ chậu cây lớn, lá chuối khô, hai hạt na làm mắt | tự ái, SH3 punch |
| G06 | Ma giấu áp mặt vào kính ban công, sững sờ; bên trong cả nhà cúi màn hình, Bin bùn ngồi giữa | khoảnh khắc sợ, SH1, SH6 |
| G07 | Bin bùn ngồi bàn học ngay ngắn, vở bài tập xếp chồng, bài kiểm tra điểm đỏ; mẹ giơ điện thoại chụp | chiều ngày 3, SH3 |
| G08 | Hành lang chung cư mất điện 2 giờ sáng, chỉ đèn exit xanh; ma giấu kéo cầu dao ở tủ điện tầng, nhếch mép | cú lật, SH7 |
| G09 | Mẹ đồ ngủ, soi đèn điện thoại, cầm mâm đồng va vào cửa thoát hiểm; bố ngái ngủ phía sau; cửa hé, Bin thật ôm máy tính bảng | cú lật, SH7 |
| G10 | Sáng: sofa có đống đất chậu cây và hai hạt na; mẹ nhìn tiếc rẻ; Bin thật ăn sáng kể chuyện, bố mẹ ngẩng nghe, điện thoại úp; ma giấu ló sau rèm ban công | kết |
| G11 | Sheet mẹ Linh 4 biểu cảm: cười "chốt đơn", cúi điện thoại, giật mình trong bóng tối, tiếc rẻ | cắt cận |
| G12 | Cận mâm đồng bóng loáng trên kệ, cạnh vòng đèn livestream và hộp hàng bọc xốp hơi | mâm, SH1, SH4 hook |
