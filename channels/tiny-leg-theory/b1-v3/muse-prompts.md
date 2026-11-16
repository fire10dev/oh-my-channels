# Muse prompt pack — B1 "Why we procrastinate" (v3 art)

Dùng trong 1 side chat Muse riêng. Thứ tự: lệnh 0 → 1 (khoá nhân vật) → 2 (dáng) → 3 (prop) → 4 (đóng gói tải về).

## 0 · Dự án
```
Create project ~/workspace/stickman-b1/ with refs/ and out/. Write bible.md:
- Style: minimalist hand-drawn stick-figure explainer art, like a fine black ink pen sketch.
- Every image: plain pure white background (#FFFFFF), no floor line, no shadow, no texture, no frame, no text, no letters, no numbers, no logos.
- One subject per image, centered, whole subject visible with white margin on all sides. Square 1024x1024.
- Character images: black ink only. Prop images: soft crayon colour fill (warm yellow, coral red, sky blue, leaf green) inside fine black ink outlines.
Before every image re-read bible.md and refs/. Do not edit refs/. List the tree, then stop.
```

## 1 · Khoá nhân vật (duyệt trước khi làm tiếp)
```
Character DNA (paste verbatim into every character prompt):
"A slender hand-drawn stick figure in fine, slightly irregular black ink lines. Modest round hollow head with three short curved hair strands on top, small black oval eyes, thin expressive eyebrows, simple line mouth. Long single-line torso, long thin single-line arms and legs, small oval hands and small oval feet. About 4.5 heads tall. No clothes, no fill, no colour."

Draw 2 images of this character: (1) standing relaxed, front view, slight smile; (2) standing, three-quarter view facing right, neutral. Save refs/hero_front.png and refs/hero_34.png. Show me both, then stop.
```

## 2 · Dáng (12 ảnh, tham chiếu refs/hero_front.png + refs/hero_34.png)
```
Using refs/hero_front.png and refs/hero_34.png as the exact character (same head, hair strands, line weight, proportions), draw these 12 images, one pose each, full body, following bible.md. Push the facial expression clearly so it reads at small size. Hands must touch the objects they hold. Save as out/pose_<id>.png:

p01 desk_typing — sitting on a simple chair at a small desk, typing on an open laptop, focused, slightly tense brows. (draw chair, desk and laptop in the same ink style)
p02 phone_grin — sitting on the same chair, turned away from the desk, holding a smartphone close, guilty grin, scrolling with one thumb.
p03 shrug — standing, shoulders up, palms open outward, doubtful raised brows.
p04 panic — standing, both hands on head, mouth wide open, small sweat drops flying.
p05 overwhelmed — standing small, leaning back, looking up in fear at a towering wobbly stack of papers taller than him.
p06 sofa_scroll — slumped comfortably on a sofa, legs stretched, smiling at a phone. (sofa in ink lines)
p07 hand_off — walking right, holding out a thick stack of papers with both hands, sheepish smile.
p08 future_tired — same character, tired, droopy eyes, frowning, arms full of a thick stack of papers, sweat drop, slightly hunched.
p09 think — standing, one hand on chin, eyes looking up, thinking.
p10 small_step — stepping up with one foot onto a single small block, determined smile, arms balanced.
p11 point_right — standing three-quarter, pointing with one straight arm to the right, explaining, open mouth.
p12 cheer — both arms up in a V, big happy open-mouth grin, one knee raised.

Check each image against refs (same character, 2 arms, 2 legs, no extra limbs, no text). Report PASS/FAIL per image, then show me all 12 and stop.
```

## 3 · Prop crayon (8 ảnh)
```
Following bible.md (prop style: crayon colour fill inside fine black ink outline), draw 8 separate prop images, no character, save as out/prop_<id>.png:

q01 smartphone — a smartphone, screen glowing sky blue with a simple feed of blank cards.
q02 sofa — a cosy two-seat sofa, coral red.
q03 paper_mountain — a tall wobbly stack of papers shaped like a mountain, warm yellow paper.
q04 step_block — one small single stair step block, leaf green.
q05 hourglass — an hourglass with warm yellow sand running.
q06 storm_cloud — a small grey storm cloud with a tiny lightning bolt (bad feeling).
q07 open_file — an open document page with a few blank lines and a pencil, warm yellow.
q08 checkbox_tick — a hand-drawn checkbox with a big leaf-green tick.

Report PASS/FAIL per image (no text, white background, whole object visible), show me all 8, then stop.
```

## 4 · Đóng gói
```
Zip out/pose_*.png and out/prop_*.png into out/stickman_b1_art.zip and give me the download link.
```
