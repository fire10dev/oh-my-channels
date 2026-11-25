# S013 Funan — image & music prompts (v2, 2026-11-23; owner generates by hand)

Plan: `docs/plans/S013-funan-lost-kingdom.md` (v2 "Roman gold paradox"). Style: **watercolor & ink**, vertical 9:16.
Save every file into `~/Downloads/s013/` with **exactly** the filename in the first column (jpg preferred; png is fine, the agent converts).
Settings: Flow (Image mode) or AI Studio = Nano Banana 2.1, aspect **9:16**, 2K, Thinking = Minimal. One image per message. Check the chip shows `x1` (0 credits).

✅ T7 checked 2026-11-23 (Borell 2014). The Óc Eo piece is a thin 22-carat **gold-sheet pendant that copies** a coin of Antoninus Pius (152 CE). It is not a real coin. It is 19 mm across, has a beaded rim, a broken hanging tab on top and a stylised dotted beard. Prompts 01/08/09/13 below already show it this way. All 13 images can be generated now.

When done, tell the agent. The agent imports (renames to `s013-img-NN.jpg` in the stage dir, originals stay in Downloads), reviews and renders after the script exists:

```bash
cd /Users/nino/Projects/FIRE10.DEV/REPO/oh-my-channels/channels/rice-and-empires && mkdir -p "$TMPDIR/stage" && for f in ~/Downloads/s013/img-*; do sips -s format jpeg "$f" --out "$TMPDIR/stage/s013-$(basename "${f%.*}").jpg" >/dev/null; done && tools/make_short.sh s013 S013-funan --tts
```

Rules for every image: artwork, not a photo; no readable text or letters (also none on the gold); no flags; people respectful, not caricatures; objects "inspired by", not copies of museum pieces.
If a result shows readable letters, a modern object, or a photo look → regenerate.

## Images (13) — beat order = file order

img-01.jpg | 9:16 | Loose watercolor and ink illustration, soft paper texture, muted earthy colors with one warm gold accent, vertical 9:16, no text, no letters, no flags, not a photograph. Extreme close-up: a small thin round gold disc pendant half buried in dark wet river mud, embossed with the left-facing profile of a bearded ancient Roman emperor, the beard drawn as a row of tiny raised dots, a beaded rim, a small broken tab at the top where it once hung, faint pseudo-letter marks around the edge that cannot be read; a fingertip brushing the mud away, a single beam of light on the gold, mysterious.
img-02.jpg | 9:16 | Loose watercolor and ink illustration, soft paper texture, gentle muted colors, vertical 9:16, no text, no letters, no flags, not a photograph. Dawn mist over the wide brown Mekong Delta seen from above: endless water channels and palm-lined banks, the faint outline of an ancient town on stilts half hidden in the mist, a tiny glint of gold in the foreground mud, mysterious and calm.
img-03.jpg | 9:16 | Loose watercolor and ink illustration, soft paper texture, gentle muted colors, vertical 9:16, no text, no letters, no flags, not a photograph. Two Chinese envoys of the 3rd century in Han-style robes and black caps standing at the bow of a wooden junk with ribbed sails, sailing south on a calm sea toward a low green coastline, plain pennants without symbols.
img-04.jpg | 9:16 | Loose watercolor and ink illustration, soft paper texture, gentle muted colors, vertical 9:16, no text, no letters, no flags, not a photograph. An ancient Southeast Asian riverside town with a wooden palisade wall and a raised wooden palace on stilts with tall thatched roofs; local officials receiving tribute of gold bars, silver, pearls and small jars of perfume on woven mats, two Chinese envoys watching from the side, people in wrapped cloth garments.
img-05.jpg | 9:16 | Loose watercolor and ink illustration, soft paper texture, gentle muted colors, vertical 9:16, no text, no letters, no flags, not a photograph. A later Chinese court scribe copying fragments from a torn, faded old scroll into a new bound book by candlelight; the old scroll has missing pieces and burnt edges; the writing is shown only as abstract brush marks, no readable characters.
img-06.jpg | 9:16 | Loose watercolor and ink illustration, soft paper texture, gentle muted colors, vertical 9:16, no text, no letters, no flags, not a photograph. 1940s archaeological dig in a flat rice field at the foot of a low granite hill: workers in conical hats and a European archaeologist in a pith helmet and khaki uncovering brick foundations in muddy trenches.
img-07.jpg | 9:16 | Loose watercolor and ink illustration, soft paper texture, gentle muted colors, vertical 9:16, no text, no letters, no flags, not a photograph. Imagined reconstruction of an ancient port city on stilts in the Mekong Delta: long straight canals full of small boats, wooden houses, a brick temple on a low hill, merchants unloading goods, busy and warm.
img-08.jpg | 9:16 | Loose watercolor and ink illustration, soft paper texture, gentle muted colors, vertical 9:16, no text, no letters, no flags, not a photograph. Still life of excavated finds laid on a cloth beside a muddy trench: glass and carnelian beads, a small round bronze mirror, a tiny gold ring, an engraved seal stone with an abstract figure, and in the centre the small thin gold disc pendant with an embossed bearded profile, beaded rim and broken hanging tab (no readable lettering), small paper tags without writing, soft light.
img-09.jpg | 9:16 | Loose watercolor and ink illustration, soft paper texture, gentle muted colors, vertical 9:16, no text, no letters, no flags, not a photograph. A journey shown as a vertical chain of three small scenes connected by a dotted sea route: at the top a Mediterranean merchant ship unloading small gold coins, in the middle a South Indian port market where traders weigh gold coins on a balance, at the bottom a goldsmith's workshop in a Mekong delta stilt house where a craftsman presses thin gold sheet into a small bronze die to copy a coin's portrait, a finished gold pendant on his table.
img-10.jpg | 9:16 | Loose watercolor and ink illustration, soft paper texture, gentle muted colors, vertical 9:16, no text, no letters, no flags, not a photograph. Dusk over a quiet delta town: empty stilt houses, a silting canal choked with reeds, a lone heron; far inland on the horizon, a row of new brick temple towers catching the last light; melancholy mood.
img-11.jpg | 9:16 | Loose watercolor and ink illustration, soft paper texture, gentle muted colors, vertical 9:16, no text, no letters, no flags, no modern borders, not a photograph. Several small ancient river ports scattered along a winding river and its canals, each with its own little brick shrine and boats, seen from above like an old painted map; at the top a low hill with a small brick shrine above flooded plains, at the bottom brick foundations near a granite hill; no single capital.
img-12.jpg | 9:16 | Loose watercolor and ink illustration, warm morning light, soft paper texture, gentle colors, vertical 9:16, no text, no letters, no flags, not a photograph. Today: the excavated brick foundation of an ancient temple in a green field at the foot of a low granite hill in An Giang, a simple protective roof over it, a few visitors and a guide, rice fields and palms around.
img-13.jpg | 9:16 | Loose watercolor and ink illustration, soft paper texture, gentle muted colors, vertical 9:16, no text, no letters, no flags, not a photograph. The small thin gold disc pendant with an embossed bearded profile resting on a closed, blank old scroll on delta mud, sunset over the Mekong behind, quiet and reflective, empty space at the top for a title.

## Clips (3) — Muse (owner 2026-11-23: images + clips via Muse, all zipped)
Each clip 9:16, 720×1280, ~8 s, silent (no voice, no music, no text). Start frame = the matching image.

clip-1.mp4 | 9:16 | Start frame = img-01. Motion: the fingertip slowly brushes the wet mud away from the thin gold disc; light catches the embossed profile; very slow push-in; calm, mysterious.
clip-2.mp4 | 9:16 | Start frame = img-07. Motion: small boats glide along the straight canals of the stilt-house port, people unloading goods, gentle water ripples, slow aerial drift forward.
clip-3.mp4 | 9:16 | Start frame = img-13. Motion: sunset light slowly fades across the gold disc resting on the closed scroll, river ripples behind, slow pull-back; quiet ending.

## Music (Flow Music) — 1 track

Save as `~/Downloads/s013/s013-bed.mp3` (the agent moves it to `shorts/public/bgm/`).

s013-bed.mp3 | ~90 s | Calm, mysterious cinematic underscore for a short history documentary about a lost ancient kingdom in the Mekong Delta. Instrumental only, no vocals. Soft low strings and a warm drone, gentle Southeast Asian colour: bamboo flute, soft bronze gongs, light plucked zither. Opens with a single bright chime. 0:00–0:26 sparse and curious, no drums; around 0:26 a slow gentle rise with soft hand percussion (discovery mood); from 0:47 quieter and reflective, ends with a soft fade. Slow tempo ~70 BPM, not epic, not battle music, leaves room for narration.

Alt (if the first one is too busy): same prompt + "very minimal, mostly drone and flute, almost ambient".
