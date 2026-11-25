# L009 Nanyue — image, clip & music prompts (v1, 2026-11-24; owner generates by hand)

Plan: `docs/plans/L009-nanyue-long.md`. Style: **lacquer (sơn mài)** for the story, **antique map / parchment** for maps, records and historians (ch. 6). 16:9.
Save every file into `~/Downloads/l009/` with **exactly** the filename in the first column (jpg preferred; png fine, the agent converts).
Settings: Flow (Image mode) / AI Studio = Nano Banana 2.1, aspect **16:9**, 2K, Thinking = Minimal, one image per message, chip shows `x1` (0 credits).
Or Muse (as S013): all images + clips in one zip → unzip into `~/Downloads/l009/`.

Images come **before** the script, so the script will map its shots to these IDs. Research is not done yet: if a claim fails later, the matching image is dropped, not the claim bent.

Rules for every image: artwork, not a photo; **no readable text, letters or Chinese characters** (also none on the seal, the letter or the books); no flags;
people respectful, not caricatures; objects "inspired by", not copies of museum pieces; no limestone karst islands / Ha Long Bay.
If a result shows readable characters, a modern object, a photo look, or Ming/Qing-era clothing (wrong by 1,500 years) → regenerate.

When done, tell the agent. The agent imports after the script exists (`tools/long_import.sh l009 ~/Downloads/l009`), reviews, then renders.

Prefixes (paste in front of each prompt — already included below):
- LAC = `Traditional Vietnamese lacquer painting (son mai), glossy black lacquer, gold leaf, vermilion and eggshell inlay, flat decorative composition, museum quality, wide landscape 16:9, no text, no letters, no Chinese characters, no flags, no modern objects, no limestone karst islands.`
- MAP = `Antique hand-drawn map style on aged parchment, sepia ink linework, faded watercolor washes, engraved coastline and mountains, decorative border without text, wide landscape 16:9. No readable text, no letters, no Chinese characters, no modern borders, no flags, not a photograph.`
- Era note (in every people prompt): `clothing and armour of the Qin–Han period, around 200 BC`.

## Images (40) — chapter order = file order

### Ch. 0 — A King in Jade
img-01.jpg | 16:9 | LAC. Night, a 1980s building site on a hill in a southern Chinese city: workers with lamps stand around a freshly opened dark stone chamber in the red earth, a ladder going down, quiet awe. Simple shapes, no faces in detail.
img-02.jpg | 16:9 | LAC. Inside a dark ancient stone burial chamber: a royal body covered head to toe in a suit of small jade plates sewn with silk thread, lying on a platform, bronze vessels and jade discs around it, torchlight from one side.
img-03.jpg | 16:9 | LAC. Close-up of a small square gold seal with a coiled dragon on top, lying on a dark cloth in torchlight; the seal face is turned away so no characters are visible.
img-04.jpg | 16:9 | LAC. Split composition: on the left a southern Chinese city by a wide river, on the right a Vietnamese river delta with rice fields; an old ancient crown floats in the middle between them, shared light from both sides.

### Ch. 1 — The General Who Stayed
img-05.jpg | 16:9 | LAC. A long column of Qin soldiers in black lacquered armour with spears and crossbows marching south through misty green mountains, clothing and armour of the Qin–Han period, around 200 BC.
img-06.jpg | 16:9 | LAC. Qin soldiers and labourers digging a canal through hills to link two rivers, boats waiting, around 214 BC, clothing of the Qin period.
img-07.jpg | 16:9 | LAC. A middle-aged northern Chinese officer in Qin armour standing on a riverbank in the humid south, palm trees and paddy fields behind him, looking at the land, clothing and armour of the Qin–Han period, around 200 BC.
img-08.jpg | 16:9 | LAC. An old dying commander lying on a low bed in a dim room, speaking to a younger officer kneeling beside him, a lamp, a map scroll on the floor (no readable text), Qin period.
img-09.jpg | 16:9 | LAC. Soldiers cutting a mountain road and blocking a narrow pass with felled trees and stones, a fortified gate above, misty mountains, Qin–Han period.
img-10.jpg | 16:9 | LAC. A new royal palace on a hill above a river port (Panyu, ancient Guangzhou): wooden halls with tiled roofs, boats below, a king in dark robes on the steps, around 204 BC.

### Ch. 2 — Going Native
img-11.jpg | 16:9 | LAC. Yue people of the southern coast around 200 BC: men and women with tattooed arms and short hair or hair in a bun, bare feet, long canoes, bronze drums, stilt houses by a river.
img-12.jpg | 16:9 | LAC. A Han envoy in formal court robes and a tall hat bowing politely, facing a king who sits casually with legs spread on a mat and his hair tied in a southern-style bun, courtiers trying not to smile, Han period around 196 BC.
img-13.jpg | 16:9 | LAC. A royal court mixing two peoples: northern officials in long robes and southern Yue nobles with tattoos and bronze ornaments standing together before a throne, Qin–Han period.
img-14.jpg | 16:9 | LAC. A royal feast in a southern palace: bronze drums being played, dancers with feather headdresses, the king watching, lamps, Han period.
img-15.jpg | 16:9 | LAC. A river port market of Nanyue: Yue boats with goods (rhinoceros horn, ivory, pearls, tortoiseshell), northern traders with ox carts, around 180 BC.

### Ch. 3 — Emperor at Home
img-16.jpg | 16:9 | LAC. A Han envoy's party travelling south on horses and a carriage through mountain passes, carrying a lacquered box with a seal, Han period around 196 BC.
img-17.jpg | 16:9 | LAC. A king kneeling to receive a seal of office from a Han envoy in a palace hall, formal and stiff, Han period.
img-18.jpg | 16:9 | LAC. A stern Han empress (Empress Lü) on a throne pointing, officials stopping carts of iron tools and herds of cattle and horses at a border gate, Han period around 183 BC.
img-19.jpg | 16:9 | LAC. The southern king rising from his throne in imperial yellow-and-black robes and a royal headdress, courtiers bowing low, defiance, around 183 BC.
img-20.jpg | 16:9 | LAC. Southern troops raiding border towns in hill country to the north, smoke over a walled town, Han period. No gore.
img-21.jpg | 16:9 | LAC. An old king writing a letter with a brush on bamboo slips at a low table, lamp light, a seal beside him, characters shown only as abstract strokes (not readable), around 179 BC.
img-22.jpg | 16:9 | LAC. One king shown twice in a mirrored composition: left half he sits on a throne as emperor with courtiers bowing to him; right half he kneels and hands a letter to a northern envoy. Han period.

### Ch. 4 — The Crossbow and the Princess (legend chapter)
img-23.jpg | 16:9 | LAC. A great spiral earthen citadel with three rings of walls and moats on a green plain by a river, seen from above, soldiers on the walls, Âu Lạc around 200 BC (Cổ Loa style).
img-24.jpg | 16:9 | LAC. Legend scene: an old king (An Dương Vương) holding a large bronze crossbow, a golden turtle rising from the water and giving him a claw as a trigger, glowing gold leaf, mythical mood.
img-25.jpg | 16:9 | LAC. Legend scene: a young princess (Mỵ Châu) and a young foreign prince (Trọng Thủy) walking in a palace garden, tender but uneasy, Âu Lạc style clothing with bronze ornaments, around 180 BC.
img-26.jpg | 16:9 | LAC. Legend scene: a young man at night secretly swapping the trigger of a large crossbow in a dark armoury, moonlight through a window, tense.
img-27.jpg | 16:9 | LAC. Legend scene: a princess on horseback behind her father, scattering white goose feathers on the road as they flee to the sea, the citadel burning far behind.
img-28.jpg | 16:9 | LAC. Legend scene: an old king standing on a beach at dusk facing the sea with a drawn sword, a golden turtle rising from the waves, sorrowful.
img-29.jpg | 16:9 | LAC. Archaeologists of the mid-20th century kneeling in a trench in red earth beside an ancient earthen wall, lifting a pile of many small bronze arrowheads, notebooks, simple tools.
img-30.jpg | 16:9 | MAP. Antique scroll split in two halves: left half a dense column of abstract ink brush strokes (Chinese court history), right half a painted folk-tale scroll with a turtle and a crossbow; a thin line divides them.

### Ch. 5 — The Last Kings
img-31.jpg | 16:9 | LAC. A very old king with a long white beard on a throne, sons and grandsons around him, sunset light through the palace doors, Han period.
img-32.jpg | 16:9 | LAC. A young king in rich robes buried with treasures: servants placing bronze bells, jade discs and lacquer boxes into a stone tomb, torchlight, Han period.
img-33.jpg | 16:9 | LAC. A northern-born queen mother in Han court robes and a young boy king, speaking with a Han envoy in a private room, while a Yue minister watches from a doorway with suspicion, around 113 BC.
img-34.jpg | 16:9 | LAC. Palace coup at night: armed guards of an old minister storming a palace hall, lamps knocked over, shadows on walls, around 112 BC. No blood, no gore.
img-35.jpg | 16:9 | LAC. A large Han river fleet with tall towered warships and soldiers sailing south down a broad river, banners without symbols, around 111 BC.
img-36.jpg | 16:9 | LAC. A royal city by a river burning at night, smoke over wooden palace roofs, soldiers at the gates, seen from a distance, around 111 BC. No gore.
img-37.jpg | 16:9 | LAC. Han officials arriving in the Red River delta to set up a commandery office, local Lạc lords with bronze drums and ornaments meeting them, uncertain mood, after 111 BC.

### Ch. 6 — Whose Kingdom? (parchment)
img-38.jpg | 16:9 | MAP. A 13th-century Vietnamese scholar-official in a scholar's hat writing a chronicle with a brush at a low desk, stacks of bound books, lamp; text shown only as abstract strokes.
img-39.jpg | 16:9 | MAP. Three historians from different centuries seated at one long table, each with their own open book (abstract strokes only), arguing politely, a jade suit drawn faintly on the wall behind them.
img-40.jpg | 16:9 | MAP. A modern museum hall drawn as an engraving: visitors looking at a jade burial suit in a glass case under soft light, quiet.

## Clips (3) — last
Flow: make the start image (Image mode, 0 credits) with the prompt and **save it as `clip-N.jpg`** (fallback if the clip fails), then Video → Frames →
Start = that image, Omni 1.2 Flash, 720p, 8 s. Save as `clip-N.mp4`. Muse: same filenames. Silent clips (no voice, no music, no text).

clip-1.jpg | 16:9 | LAC. Inside a dark ancient stone burial chamber, a suit of small jade plates on a stone platform, a single torch at the left edge, bronze vessels around.
clip-1.mp4 | 16:9 | Start frame = clip-1.jpg. Motion: torchlight slowly moves along the jade plates from feet to head, the plates glint one by one, very slow push-in, mysterious, no camera shake.
clip-2.jpg | 16:9 | LAC. A long column of Qin soldiers in black lacquered armour marching through a misty southern mountain pass, green forest, clothing and armour of the Qin period around 214 BC.
clip-2.mp4 | 16:9 | Start frame = clip-2.jpg. Motion: the column keeps marching forward into the mist, mist drifts across, slow lateral pan, calm and heavy.
clip-3.jpg | 16:9 | LAC. Dawn over an ancient river city with wooden roofs, thin smoke from cooking fires, boats on the river, soft gold light.
clip-3.mp4 | 16:9 | Start frame = clip-3.jpg. Motion: the sun rises slowly, smoke drifts up, a boat glides across the river, slow pull-back, quiet and reflective.

## Music (Flow Music) — 3 tracks
Save as `~/Downloads/l009/l009-<name>.mp3` (the agent moves them to `shorts/public/bgm/` and writes `l009.music.json`). Instrumental only, no vocals.
Lengths are the chapter blocks from the plan; a little longer is fine (the agent trims/fades).

l009-mystery.mp3 | ~4:10 (ch. 0–3) | Mysterious cinematic underscore for a history documentary about an ancient southern kingdom around 200 BC. Instrumental only, no vocals. Low strings and a warm drone, soft bronze bells and a guqin-like plucked zither, a bamboo flute, distant frame drum. 0:00–0:45 dark and sparse, one bell at the start, discovery mood; 0:45–2:20 slow steady build with soft hand percussion, a sense of travel and ambition; 2:20 to the end courtly and proud but restrained, then settle down to a quiet bed.
l009-legend.mp3 | ~2:30 (ch. 4–5) | Tense, darker cinematic score for a legend and a fall of a kingdom. Instrumental only, no vocals. Low strings, deep taiko-like drums held back and soft, a mournful bamboo flute, bronze gong swells. 0:00–1:15 mythical and uneasy (a legend being told); 1:15–2:00 rising tension, heavier drums, no big climax; 2:00 to the end fades into a single low drone.
l009-reflect.mp3 | ~2:20 (ch. 6–7) | Reflective, open cinematic underscore for the closing of a history documentary. Instrumental only, no vocals. Soft piano or plucked zither, warm strings, bamboo flute, light bells. Calm and thoughtful from the start, a gentle warm swell around 1:30, ends with a soft fade and one last bell.

Alt (if a track is too busy): same prompt + "very minimal, mostly drone and flute, almost ambient".

## Thumbnail (agent composes in `Thumb.tsx` from these)
thumb-a.jpg | 16:9 | LAC. One royal figure split vertically down the middle: left half in black Qin–Han armour and a northern helmet, right half in southern Yue dress with bronze ornaments and tattoos, a bronze drum's star pattern glowing behind; a small gold seal held in front. Strong contrast, empty dark space at the top for a title. No text.
thumb-b.jpg | 16:9 | LAC. A jade burial suit lying in a dark tomb, lit by one torch from the left, gold seal glowing on its chest, large empty dark area on the right for a title. No text.
