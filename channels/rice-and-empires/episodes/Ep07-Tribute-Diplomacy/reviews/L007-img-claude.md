# L007 image review — Claude, round 1 (2026-11-15 10:30 +07)

Source: owner zip `l007-fixed.zip` (Muse), 49 images + 3 clip stills + 3 clips (8 s, 1248×704). Imported, 0 placeholders.
Checked on 4×3 contact sheets + crops (img-55, img-60) + 4-frame clip strips.

VERDICT: FAIL (2 🔴)

| Sev | File | Problem | Fix |
|---|---|---|---|
| 🔴 | img-55 | Qianlong's 1790 birthday: left half shows Europeans in tricorns and wigs bowing. No European embassy was at the 1790 celebration (Macartney came in 1793) → misleading. | Redo, prompt below |
| 🔴 | img-60 | Gunboats fly horizontal green-white-red flags (not French, and FACT-CHECK §4 = no flags). | Redo, prompt below |
| 🟠 | img-66 | European-style crown on the scale; Vietnamese rulers did not wear such crowns. | Redo optional |
| 🟠 | clip-3.mp4 | Motion frames turn from lacquer into a near-realistic oil painting (style jump). Not photoreal. | Keep, or use only `clip-3.jpg` |
| 🟡 | img-16 | Japan drawn large in the "tributary" map; row 12 is about the Fairbank model in general. | Keep |
| 🟡 | img-32 | Glowing brush shapes look close to real Chinese characters. | Keep (not readable at video size) |
| 🟡 | img-29 | One letter in hand, prompt said two. | Keep |

OK: all other images and clip-1/clip-2 (style consistent, no flags/text, fits rows).

## Merged with Codex r1 (`L007-img-r1.md`)
Codex 🔴 img-60 (no clear steam gunboat), 🔴 clip-3 (scene drifts, no clear French gunboat); 🟠 img-13 (stone wall, not palisade), img-32, img-57 (pseudo-writing), img-45 (humiliation framing).
Codex missed img-55 (Europeans, checked on a crop) → still 🔴. Owner 10:29 (+07): redo clip-3 (new still + clip).

## Redo list (owner saves to ~/Downloads/l007/, same names, then re-run the import line)
- [Bắt buộc] img-55.jpg | 16:9 | Traditional Vietnamese lacquer painting (son mai), glossy black lacquer, gold leaf, vermilion and eggshell inlay, flat decorative composition, museum quality, wide landscape 16:9, no text, no letters, no flags, no modern objects. the Qing emperor's eightieth birthday celebration at a summer palace in 1790, envoys from Asian kingdoms only (Vietnamese, Korean, Mongol, Tibetan court robes) bowing, no Europeans, lanterns and fireworks
- [Bắt buộc] img-60.jpg | 16:9 | Traditional Vietnamese lacquer painting (son mai), glossy black lacquer, gold leaf, vermilion and eggshell inlay, flat decorative composition, museum quality, wide landscape 16:9, no text, no letters, no flags, no modern objects. two 1880s steam gunboats with tall smoking funnels and no sails on the Perfume River near the walls of the Huế citadel, Vietnamese wooden boats moving aside, no flags, no banners, no text
- [Nên] img-13.jpg | 16:9 | Traditional Vietnamese lacquer painting (son mai), glossy black lacquer, gold leaf, vermilion and eggshell inlay, flat decorative composition, museum quality, wide landscape 16:9, no text, no letters, no flags, no modern objects. soldiers defending a river line behind a wooden bamboo palisade, no stone walls, enemy troops crossing on pontoon bridges of boats, misty dawn, river in the center
- [Nên] img-57.jpg | 16:9 | Antique hand-drawn map style on aged parchment, sepia ink linework, faded watercolor washes, engraved coastline and mountains, decorative border without text, wide landscape 16:9. No readable text, no letters, no modern borders, no flags, not a photograph. two blank rolled scrolls side by side on an antique map of the Red River delta and the coast, one scroll tied with a red cord, the other open and empty, no writing, no letters, no marks
- [Nên] img-32.jpg | 16:9 | Traditional Vietnamese lacquer painting (son mai), glossy black lacquer, gold leaf, vermilion and eggshell inlay, flat decorative composition, museum quality, wide landscape 16:9, no text, no letters, no flags, no modern objects. at night by a river, soldiers in a camp listen to an old man reading from a closed scroll in front of a small temple, lantern light, no writing anywhere
- [Tuỳ chọn] img-45.jpg | 16:9 | Traditional Vietnamese lacquer painting (son mai), glossy black lacquer, gold leaf, vermilion and eggshell inlay, flat decorative composition, museum quality, wide landscape 16:9, no text, no letters, no flags, no modern objects. a sixteenth-century Vietnamese ruler meeting Ming officials at a border gate, handing over documents and a map, formal and restrained, neutral composition
- [Tuỳ chọn] img-66.jpg | 16:9 | Traditional Vietnamese lacquer painting (son mai), glossy black lacquer, gold leaf, vermilion and eggshell inlay, flat decorative composition, museum quality, wide landscape 16:9, no text, no letters, no flags, no modern objects. a balance scale with a Vietnamese king's winged court hat on one side and a large square dragon seal on the other, perfectly level, dark background, no crown
- [Bắt buộc] clip-3.jpg | 16:9 | Traditional Vietnamese lacquer painting (son mai), glossy black lacquer, gold leaf, vermilion and eggshell inlay, flat decorative composition, museum quality, wide landscape 16:9, no text, no letters, no flags, no modern objects. one unmistakable 1880s French steam gunboat with a single tall funnel and no sails on the misty Perfume River at dawn beside the walls of the Huế citadel, wide shot, no other ships, no flags, no banners, no text
- [Bắt buộc] clip-3.mp4 | 16:9 | Start frame = clip-3.jpg. Motion: Keep the same composition and lacquer style throughout. The gunboat glides slowly upriver, smoke drifts from the funnel, mist moves over the water, slow push-in. No new ships, no town, no style change, not realistic.

## Round 2 — redo2 (owner zip `l007-redo2.zip`, 2026-11-15 12:15 +07)
9 files imported (img-55/60/13/57/32/45/66, clip-3.jpg/.mp4), 0 placeholders. Prompts in `l007.images.json` synced to the redo prompts.

VERDICT (Claude): PASS. Codex r2 (`L007-img-r2.md`) = FAIL; overruled:
- 🔴 img-60 / clip-3 "no funnel": false. Crop shows 2 steam gunboats (funnels, smoke, guns) and 1 gunboat (1 funnel, gun, no sail, no flag). Codex judged a 640 px sheet.
- 🔴 img-57 "no crossed-out name", 🟠 img-32 "no glowing calligraphy", 🟠 img-45 "no barefoot prostration": Codex compared against the old prompts. The redo removed pseudo-writing (r1 🟠) and humiliation framing (r1 🟠) on purpose.
- 🟠 img-13 palisade small: visible in the foreground; keep.
- img-55: Asian envoys only, no Europeans ✅. img-66: winged court hat, no crown ✅. clip-3 motion stays lacquer style ✅.
