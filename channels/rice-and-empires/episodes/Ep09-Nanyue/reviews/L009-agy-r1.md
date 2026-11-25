VERDICT: PASS

## Issues
| Sev | Where (claim/line) | Problem | Evidence (URL + what it says) | Fix (exact replacement wording) |
|---|---|---|---|---|
| 🟠 | Claim C1 / C3 | Grade A too high for evidence: 3 of 4 cited URLs for the tomb/seal discovery are unreachable (404/dead links), leaving Wikipedia as the sole reachable source for C1. Per FACT-CHECK §2, Wikipedia-only is at most Grade B. | [chinanews 2020](https://www.chinanews.com.cn/cul/2020/03-17/9127536.shtml) (unreachable/deleted); [Sina 2011](https://news.sina.com.cn/o/2011-03-21/081022151602.shtml) (unreachable); [gz.gov.cn](https://gz.gov.cn/guangzhouinternational/visitors/whattosee/museumandgalleries/museumsofspecialinterest/content/post_2998860.html) (unreachable). Only [WP Museum](https://en.wikipedia.org/wiki/Museum_of_the_Mausoleum_of_the_Nanyue_King) and [Google Arts & Culture](https://artsandculture.google.com/asset/zhao-mo-jade-seal-and-clay-with-the-inscription-mo/XgHsRI8lRMRM-A) resolve. | Downgrade C1 to Grade B or add stable official museum URLs: `https://www.nywmuseum.org.cn/` |
| 🟡 | Line 03 (VI row 81) / Claim C3 | The narration states: "Its four characters read: Emperor Wen." (VI: "Bốn chữ trên ấn đọc là: Văn Đế."). The inscription has four characters: "文帝行璽" (Emperor Wen's Administrative Seal). "Emperor Wen" (Văn Đế) accounts for only two characters (文帝). Omitting "行璽" (seal/administrative seal) while asserting that "its four characters read: Emperor Wen" is an inaccurate translation gloss. | [nywmuseum.org.cn](https://www.nywmuseum.org.cn/) and [Google Arts & Culture](https://artsandculture.google.com/asset/zhao-mo-jade-seal-and-clay-with-the-inscription-mo/XgHsRI8lRMRM-A): seal reads "文帝行璽" (Wen Di Xing Xi), dragon knob, 148.5 g. | Line 03: "On his body lay a gold seal with a coiled dragon. The four characters read: Emperor Wen's Seal." · VI row 81: "Bốn chữ trên ấn đọc là: Văn Đế hành tỉ — tức ấn của Văn Đế." |
| 🟡 | Line 22 / Claim C32 & C12 | Claim C32 specifies required wording `"Sima Qian lists"`, but line 22 states "and Panyu grew into a rich trading port" as a plain statement without spoken or on-screen attribution to Sima Qian. Additionally, mapping C12 (Minister Lü Jia's 3-generation ministerial clan under later kings) to row 22 (set in Zhao Tuo's early reign c. 196 BC) is anachronistic as Lü Jia is not yet active. | [Shiji 129](https://zh.wikisource.org/wiki/史記/卷129): "番禺亦其一都會也，珠璣、犀、瑇瑁、果、布之湊" (attributed in claim table to Sima Qian, Grade B). | Add lower-third `SRC:Sima Qian, Shiji 129` to row 22; remove C12 mapping from row 22 (keep C12 at row 51 where Lü Jia is introduced). |
| 🟡 | Line 24 & Line 33 / `say_l009.json` | `tools/say_l009.json` has `["Lü Jia", "Lyoo Jyah"]` but lacks an entry for `Empress Lü` or `Lü` alone. The American English Kokoro pipeline does not support the character `ü` natively and will mispronounce or glitch on line 24. Furthermore, "the Luo" (lines 27, 33, 34) and "Western Ou" (lines 27, 33) lack pronunciation overrides and will be read as English "Loo-oh" and "Ow". | [Kokoro TTS](tools/tts_kokoro.py): `lang_code="a"` (American English phonemizer). `say_l009.json` omits "Empress Lü", "Luo", and "Western Ou". | Add `["Empress Lü", "Empress Lyoo"]`, `["Luo", "Lwaw"]`, and `["Western Ou", "Western Oh"]` to `tools/say_l009.json`. |
| 🟡 | Claim C29 URL | The cited link `https://vjol.vista.gov.vn/ThangLongJournalofScience/en/article/view/134616` is unreachable due to VJOL portal migration. | Article "Moralizing Monstrosities: Việt Sử tiêu án..." by Dan T. Nguyen is hosted on [science.thanglong.edu.vn](https://science.thanglong.edu.vn/index.php/vol4_no1/article/view/236). | Replace URL with `https://science.thanglong.edu.vn/index.php/vol4_no1/article/view/236` |

## Sources checked
- https://www.chinanews.com.cn/cul/2020/03-17/9127536.shtml: unreachable
- https://news.sina.com.cn/o/2011-03-21/081022151602.shtml: unreachable
- https://gz.gov.cn/guangzhouinternational/visitors/whattosee/museumandgalleries/museumsofspecialinterest/content/post_2998860.html: unreachable
- https://en.wikipedia.org/wiki/Museum_of_the_Mausoleum_of_the_Nanyue_King: ok
- https://news.ifeng.com/a/20140913/41971246_0.shtml: ok
- https://artsandculture.google.com/asset/zhao-mo-jade-seal-and-clay-with-the-inscription-mo/XgHsRI8lRMRM-A: ok
- https://zh.wikisource.org/wiki/史記/卷113: ok
- https://zh.wikisource.org/wiki/漢書/卷095: ok
- https://zh.wikisource.org/wiki/史記/卷006: ok
- https://vi.wikisource.org/wiki/Đại_Việt_sử_ký_toàn_thư/Tập_I/Ngoại_kỷ/Cuốn_thứ_hai/Triều_họ_Triệu/Vũ_đế: ok
- https://en.wikipedia.org/wiki/Nanyue: ok
- https://assets.cambridge.org/97811070/84780/excerpt/9781107084780_excerpt.pdf: ok
- https://www.cambridge.org/core/product/F6665BAE2F681FA02DD06692F7BFB8F7/core-reader: ok
- https://zh.wikisource.org/wiki/莊子/逍遙遊: ok
- https://zh.wikisource.org/wiki/史記/卷097: ok
- https://en.wikipedia.org/wiki/L%C3%BC_Jia_(Nanyue): ok
- https://en.wikipedia.org/wiki/%C3%82u_L%E1%BA%A1c: ok
- https://vi.wikisource.org/wiki/Đại_Việt_sử_ký_toàn_thư/Tập_I/Ngoại_kỷ/Cuốn_thứ_nhất/Triều_Thục/An_dương_Vương: ok
- https://en.wikipedia.org/wiki/L%C4%A9nh_Nam_ch%C3%ADch_qu%C3%A1i: ok
- https://www.anthropology.wisc.edu/wp-content/uploads/2016/08/NCKim-Hilgers_VNs-First-City-Arch-Mag_2016.pdf: ok
- https://doi.org/10.1017/S0003598X00067041: ok
- https://en.vietnamplus.vn/co-loa-arrowhead-mould-collection-recognised-as-national-treasure/194341.vnp: ok
- https://vovworld.vn/en-US/news/co-loa-arrowhead-mould-collection-recognised-as-national-treasure-939037.vov: ok
- https://zh.wikisource.org/wiki/漢書/卷006: ok
- https://en.wikipedia.org/wiki/%C4%90%E1%BA%A1i_Vi%E1%BB%87t_s%E1%BB%AD_k%C3%BD: ok
- https://vjol.vista.gov.vn/ThangLongJournalofScience/en/article/view/134616: unreachable
- https://zh.wikisource.org/wiki/史記/卷129: ok
- https://en.wikipedia.org/wiki/Zhao_Tuo: ok
