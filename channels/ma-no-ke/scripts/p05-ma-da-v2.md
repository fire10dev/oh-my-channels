# Dự án 5 — Ma da "Tuyển người thay ca" (v2, 2026-11-21)

v2 sửa theo agy (`debate/08-scripts/p05-agy.md`; điểm v1: mồi 8 · rợn 8.5 · trào phúng 9 · logic 7.5 · lật 8.5 · kết 8.5 · TTS 8 · short 9):
- Logic "vì sao lão phải ra sông": nửa đêm nằm trên bờ thì hai chân buốt như ngâm nước, chỉ ngồi lên phao mới ngủ được. Lão quay ra đuổi sà lan cát khác, vì "hút sạt thì tao không có chỗ cắm phao".
- Khăn rằn là đồ Nam Bộ, đổi thành khăn mặt kẻ ô cũ vắt vai (B07 đã vẽ khăn kẻ ô).
- Thoại bớt giọng "HR công sở", thêm mùi bến sông. Gộp D04 vào D03.
- Không nhận: "nằm bờ thì tức ngực như sặc bùn". Quá gần cảm giác chết đuối, nên chỉ để buốt chân.

Theo bible-v2 §7 và `season-plan-p03-p48.md` dòng P05. Đăng T5 10/12 18:00.
Cuối P04 đã hứa: **"bến cát lậu mùa lũ, và một con ma da bảy năm chưa được thay ca."**

**Ý chính:**
- Ma da ở khúc sông bảy năm. Luật dân gian: muốn đi phải có người "thế". Nó mệt như công nhân ca đêm, không muốn kéo người tốt.
- Nó "phỏng vấn" từng người xuống sông, ai cũng loại. Tiêu chuẩn tuyển chỉ có một dòng: **"Thích sông hơn nhà."**
- Ông Hùng, chủ bến cát lậu, hút cát ban đêm làm sạt ruộng cả làng. Ông dựng biển "Khúc sông này là nhà tôi — khu vực tư nhân" và ký tên.
- Đúng tiêu chuẩn. Ma da nhận ông làm người **thay ca, không phải thế mạng**: ông còn sống, nhưng đêm nào cũng phải ra trực khúc sông từ nửa đêm đến sáng. Trực thì không được để ai đuối nước.
- Sà lan cát hết chạy được ca đêm. Ma da cũ được đi.

**Khoảnh khắc rợn duy nhất:** sáng ra, đôi ủng cao su của ông Hùng trên bờ đầy nước sông, trong ủng có một tờ giấy ướt: "PHIẾU GIAO CA — NGƯỜI NHẬN: HÙNG".
**Kiểu lật:** chữ "thế" được hiểu theo nghĩa đen là "thay ca". Kẻ tự nhận sông làm nhà bị nhận vào làm thật.
**Né luật:**
- Không ai chết đuối trên màn hình. Không có trẻ em ở sông.
- Ma da chỉ nói "tao ở khúc sông này bảy năm", không kể mình mất thế nào.
- Bàn tay chạm cổ chân chỉ thoáng qua rồi buông, không kéo.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Giọng | fx |
|---|---|---|---|---|
| MD | Ma da: xưng "tao", mệt mỏi, nói như công nhân hết ca, khăn mặt kẻ ô cũ vắt vai, áo ba lỗ | **B07** | nam trầm khàn (thử preset) | `aecho=0.8:0.5:50:0.2`, lowpass nhẹ cho cảm giác dưới nước |
| MN | Ma Nó | B02, S01/S26/S33/S34 | Thiện Minh | như cũ |
| HUNG | Ông Hùng, chủ bến cát, áo khoác da, dây chuyền, cầm loa | vẽ mới | Adam bựa | `atempo=1.05` |
| BA | Bà Thơm, mất ruộng vì sạt lở, bán nước ở bến | vẽ mới | Ngọc Huyền hoặc giọng nữ già | không |

SFX mới: máy hút cát rền, sóng vỗ, nước chảy vào ủng, sạt đất, tiếng loa trên sà lan, ếch nhái.

---

## LONG (lời ≈ 720 chữ ≈ 4 phút)

### 0:00 — Cold open
| Khung | Lời | Chữ / SFX |
|---|---|---|
| D01/toàn (sà lan hút cát đêm, đèn pha) | *(máy hút cát rền)* | chữ "1:00 SÁNG · BẾN CÁT" |
| D02/cận-cổ chân Hùng thõng xuống nước | | sóng vỗ · nhạc tắt |
| D02/cận (bàn tay xanh nhạt chạm nhẹ, rồi rút) | **MD**: Chưa ký đơn… thì ai cho giao ca. | im 1 s |
| B07/cận-mặt chán | **MD**: Mà sắp rồi. | |

### 0:12 — Ma Nó mồi
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S01/toàn | **MN**: Lại mò vào à? Hôm nay khách của tao làm ca đêm bảy năm chưa được nghỉ. | mõ CỘC |
| S26/cận | **MN**: Nó đang tuyển người thay. Và lần này, có đứa tự nộp đơn. | |

### 0:25 — Bảy năm một ca
| Khung | Lời | Chữ / SFX |
|---|---|---|
| B07/toàn | **MD**: Tao là ma da. Tao ở khúc sông này bảy năm. | sóng |
| B07/cận | **MD**: Luật sông: muốn đi, phải có người xuống thế. Ai cũng nghĩ ma da thích kéo người. Không. Ma da thích về nhà. | chữ "LUẬT: CÓ NGƯỜI THẾ → ĐƯỢC ĐI" |
| S26/cận | **MN**: Bảy năm không nghỉ lễ, không lương, không bảo hiểm. Công đoàn dưới nước cũng không có. | |

### 0:50 — Phỏng vấn
| Khung | Lời | Chữ / SFX |
|---|---|---|
| D03/toàn (ông câu cá trên bờ, phao câu) | **MD**: Ứng viên thứ nhất: ông câu cá. Mười năm chưa câu được con nào. Kiên nhẫn lắm. Nhưng tối nào vợ cũng gọi về ăn cơm. Loại. | chữ "✖ CÓ NGƯỜI CHỜ CƠM" |
| D03/xa (thanh niên bơi qua sông, góc xa) | **MD**: Ứng viên hai: thằng bơi qua sông tập thể dục. Bơi xong lại trèo lên bờ đi làm. Loại. Tao cần đứa ở đây cả đời. | chữ "✖ CÒN PHẢI ĐI LÀM" |
| B07/cận-cầm tờ giấy ướt | **MD**: Tiêu chuẩn của tao chỉ có một dòng. Thích sông hơn nhà. Bảy năm, chưa ai đạt. | chữ to "TUYỂN: THÍCH SÔNG HƠN NHÀ" |

### 1:20 — Bến cát
| Khung | Lời | Chữ / SFX |
|---|---|---|
| D01/toàn | **MN**: Rồi ông Hùng về. Ba cái sà lan, chạy đêm. Giấy phép thì ghi khai thác cát ở chỗ khác. | máy hút cát |
| D05/cận-Hùng cầm loa trên sà lan | **HUNG**: Sông là của chung! Cát là của tôi! | loa rè |
| D06/toàn (ruộng sạt xuống sông, bà Thơm đứng nhìn) | **MN**: Hút một mùa, bờ sạt ba mét. Ruộng bà Thơm trôi theo sà lan. | sạt đất · chữ "−3 MÉT" |
| D06/cận-bà Thơm | **BA**: Mấy sào ngô sào đỗ nhà tôi… giờ thành mâm cho cá nó rỉa. | |
| B07/cận-nhíu mày | **MD**: Lão hút cát, tao ngủ không được. Cái giường của tao cũng là cát. | |

### 1:55 — Tự nộp đơn
| Khung | Lời | Chữ / SFX |
|---|---|---|
| D07/toàn (Hùng cắm biển ở bến, chữ ký to) | **MN**: Dân làng kéo ra bến phản đối. Ông Hùng cho cắm một cái biển. | |
| D07/cận-biển | **HUNG**: Khúc sông này là nhà tôi! Ai vào, tôi coi là vào nhà tôi! | chữ "KHU VỰC TƯ NHÂN · KHÚC SÔNG NÀY LÀ NHÀ TÔI · KÝ: HÙNG" · đóng cọc |
| B07/cận-ngồi thẳng dậy | **MD**: Nhà… là khúc sông. Có chữ ký. | nhạc đổi |
| S26/cận | **MN**: Bảy năm mới có một bộ hồ sơ đạt. | |

### 2:20 — Đêm nhận việc (khoảnh khắc rợn)
| Khung | Lời | Chữ / SFX |
|---|---|---|
| D02/toàn (Hùng ngồi mép sà lan, chân thõng nước, điện thoại) | **MD**: Đêm đó lão ngồi mép sà lan đếm tiền. Chân thõng xuống nước. | sóng |
| D02/cận (tay xanh chạm cổ chân, rồi buông) | **MD**: Tao chạm thử. Rồi buông. Tao không kéo ai. Tao chỉ giao ca. | im 1 s |
| D08/toàn (sáng, đôi ủng trên bờ) | **MN**: Sáng ra, đôi ủng cao su của lão trên bờ đầy nước sông. | nước chảy ra |
| D08/cận-tờ giấy ướt trong ủng | **MN**: Trong ủng có một tờ giấy. | chữ "PHIẾU GIAO CA · NGƯỜI NHẬN: HÙNG · CA: 0:00 – 5:00 · MỖI ĐÊM" · im 2 s |

### 2:50 — Ca đêm của ông Hùng (cú lật)
| Khung | Lời | Chữ / SFX |
|---|---|---|
| D09/toàn (Hùng ngồi trên phao giữa sông, khăn kẻ ô ngoài áo khoác da) | **MD**: Nó tự nhận khúc sông là nhà. Có biển, có tên. Kéo nó chết thì thành ma mới. Để nó sống… tao mới có đứa trực thay. | chữ "THẾ = THAY CA" |
| D09/cận-Hùng run | **HUNG**: Tôi là chủ bến! Tôi có giấy phép! | |
| B07/cận | **MD**: Giấy phép ghi chỗ khác. Biển của anh ghi chỗ này. | |
| D13/cận-chân Hùng trên giường, vệt nước quanh cổ chân | **MD**: Nửa đêm mà nằm trên bờ, hai chân buốt như ngâm nước. Ngồi lên phao mới ngủ được. Muốn về nhà thì cứ về. | chữ "0:00 – 5:00" |
| D10/toàn (sà lan nằm im, máy tắt) | **MN**: Nửa đêm đến năm giờ sáng, lão phải ngồi giữa sông. Sà lan hết chạy ca đêm. Hai tháng, bờ không sạt thêm một phân. | máy tắt dần · chữ "0 SÀ LAN" |
| D09/cận | **MD**: Việc đầu tiên của ca đêm: không được để ai đuối nước. Lão phải canh hết. | |
| D09/cận-Hùng cầm loa quát sà lan lạ | **HUNG**: Đi chỗ khác! Hút sạt thì tao lấy đâu chỗ cắm phao! | loa rè |
| S26/cận | **MN**: Ông chủ bến giờ thành nhân viên cứu hộ không lương. | |

### 3:30 — Kết
| Khung | Lời | Chữ / SFX |
|---|---|---|
| D11/toàn (bình minh, ma da vắt khăn lên vai đi lên bờ) | **MD**: Bảy năm. Lần đầu tao được về sớm. | gà gáy · chữ "HẾT CA" |
| D12/toàn (biển mới ở bến, Hùng đứng cạnh với cái thùng thu tiền) | **MN**: Sáng hôm sau bến có biển mới. | |
| D12/cận-biển | **HUNG**: Cấm tắm. Ai tắm… thu phí. | chữ "CẤM TẮM · AI TẮM — THU PHÍ" · mõ CỘC |
| S33/toàn → S34/cận | **MN**: Ngâm nước cả đêm, mở mồm ra vẫn đòi thu vé. Hà Bá cũng phải lạy. | rít điếu cày |
| (thẻ chữ trên nền S06 mờ + bóng cây đa) | **MN**: Thứ Hai: nhà thầu chặt cây đa đầu làng để phân lô… và bản vẽ tự khoanh đỏ một mảnh đất không ai bán. | thẻ "Tập sau · T2" |
| S06 mờ + cutout | **MN**: Bấm đăng ký đi. Không thì đêm nay đi tắm, kiểm tra trong ủng xem có phiếu giao ca không. | chữ "ĐĂNG KÝ" · mõ CỘC |

---

## SHORTS (7 bản; nếu chốt 3 thì giữ SH1, SH3, SH6)
| # | Tên | Hook 3 s | Thân | Kết |
|---|---|---|---|---|
| SH1 | "Người này chưa ký" | D02 tay chạm rồi buông | Cold open → MN mồi | chữ "Ký cái gì? 👇" |
| SH2 | Ma da cũng muốn về nhà | B07 **MD**: "Ma da thích về nhà." | Luật thế → bảy năm không nghỉ | **MN**: "Công đoàn dưới nước cũng không có." |
| SH3 | Phỏng vấn người thế mạng | D03 ông câu cá | 2 ứng viên bị loại (có người chờ cơm, còn phải đi làm) → tiêu chuẩn | chữ "TUYỂN: THÍCH SÔNG HƠN NHÀ" · "Ai đạt? 👇" |
| SH4 | Sông là của chung, cát là của tôi | D05 loa | Hút cát → sạt 3 mét → ruộng bà Thơm | **BA**: "Ruộng tôi đấy. Giờ cá nó ở." |
| SH5 | Tự nộp đơn bằng một cái biển | D07 biển ký tên | Biển → MD "có chữ ký" → đêm giao ca | chữ "Lão sẽ thế nào? → video đầy đủ" |
| SH6 | Phiếu giao ca trong ủng | D08 ủng đầy nước | Tờ giấy → thế = thay ca → sà lan tắt | **MN**: "Nhân viên cứu hộ không lương." |
| SH7 | Cấm tắm, ai tắm thu phí | D12 biển mới | Ma da hết ca → câu đùa → teaser cây đa | đăng ký |

---

## Hình

### Tận dụng
| Ảnh | Dùng cho |
|---|---|
| `assets/muse-v2/B07.png` | Mọi cảnh MD; cutout; thumbnail |
| B02, ep01 S01/S26/S33/S34 | Ma Nó |
| ep01 S06 | CTA, teaser |

### Vẽ mới: 12 ảnh (16:9)
| Mã | Cảnh |
|---|---|
| D01 | Sông Bắc Bộ đêm mùa lũ: ba sà lan hút cát, đèn pha vàng, ống hút cát, bờ đất nứt |
| D02 | Ông Hùng ngồi mép sà lan đếm tiền, chân thõng nước; dưới nước thấp thoáng một bàn tay xanh nhạt sắp chạm cổ chân (cute-creepy, không ghê) |
| D03 | Ông câu cá ngồi ghế nhựa trên bờ, cần câu, phao; ma da lơ lửng dưới nước cầm sổ phỏng vấn; góc xa một thanh niên bơi qua sông trong sương |
| D13 | Phòng ngủ đêm: chân Hùng thò khỏi chăn, vệt nước sông mờ quanh cổ chân như cái vòng, Hùng mở mắt trừng trần nhà |
| D05 | Ông Hùng (áo khoác da, dây chuyền vàng, bụng to) đứng trên sà lan cầm loa |
| D06 | Bờ ruộng sạt xuống sông, cây lúa trôi; bà Thơm đội nón đứng nhìn, cạnh gánh nước chè |
| D07 | Bến cát: Hùng cắm biển gỗ to (để trống chữ), dân làng phản đối phía sau |
| D08 | Sáng sương: đôi ủng cao su đứng trên bờ, nước tràn ra; cực cận tờ giấy ướt trong ủng (trống chữ) |
| D09 | Đêm: Hùng ngồi trên phao giữa sông, khoác khăn kẻ ô của ma da ngoài áo khoác da, mặt mếu |
| D10 | Sà lan nằm im, máy tắt, trăng; bờ yên |
| D11 | Bình minh: ma da vắt khăn kẻ ô lên vai, đi lên bờ như công nhân tan ca |
| D12 | Bến ban ngày: biển mới (trống chữ), Hùng ngồi ghế nhựa đỏ cạnh thùng thu tiền, khăn kẻ ô trên cổ |
