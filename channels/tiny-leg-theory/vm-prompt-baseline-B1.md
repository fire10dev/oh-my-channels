# Prompt cho agent trên VM — bản A (stickman-video-director, Autopilot B1)

Dán nguyên khối dưới đây vào Claude Code trên VM, trong checkout `kaomei/stickman-video-director`.

---

Make an Autopilot Mode video with the stickman-video-director skill (read the installed SKILL.md first). This is the A side of an A/B test, so keep the narration **word for word** — do not rewrite, shorten or add lines.

Requirements:
- Style: B1 "Minimal Line Art". Format: landscape 16:9, 1280×720, same render route as before (Node + FFmpeg local).
- Voice: Muse TTS, same voice as the earlier procrastination preview. No Gemini, no paid API.
- Captions + sound effects on, as before. Short title card "Why do we procrastinate?" at the start is fine; no other extra narration.
- Target length ≈ 56–60 s.
- Skip the 20-second preview approval for this test; render the full video directly.

Narration, one scene per line, in this order:

1. You know exactly what you should be doing. So why are you scrolling your phone instead?
2. Most people call it laziness, or bad time management. Researchers say it is neither.
3. Procrastination is about feelings. A task feels boring, scary, or just too big, so your brain grabs something that feels better right now.
4. And the bill goes to your future self. A person your brain treats almost like a stranger.
5. So don't wait to feel ready. Shrink the first step until it's too small to fear. Open the file. Write one line.
6. The bad feeling usually fades once you start. So, what's the smallest first step you could take today?

Visual intent per scene (guidance, not mandatory): 1 figure at a desk picks up a phone while a report waits · 2 "lazy?" and "bad planner?" get crossed out · 3 a mountain-sized task, figure turns toward a sofa/TV · 4 figure hands a pile of paper to a faded "future you" · 5 the mountain shrinks to one small step, checklist "Open the file / Write one line" · 6 back at the desk typing, phone face down, question mark.

When done, report: output MP4 path, duration, resolution, wall-clock time for TTS and for render, integrated loudness (`ffmpeg -i out.mp4 -af loudnorm=print_format=summary -f null -`), and how many fix rounds you needed.
