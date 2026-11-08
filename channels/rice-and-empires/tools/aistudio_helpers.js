// Paste-free helpers for the AI Studio playground (run via the built-in browser's javascript tool).
// 1) Settings (Run settings panel open): keyboard on mat-select works where clicks misfire.
//    ar.focus(); dispatch keydown ArrowDown until text is "9:16"; same for Resolution "2K". Output format: "Images only". Grounding off.
// 2) window.__gen(name, prompt): types prompt, clicks Run, waits for a new blob/data image > 600px, stores Blob in window.__store[name].
//    The JS tool times out at 45 s → start a queue (window.__runQueue) and poll window.__log. "No image generated" happens: retry with a reworded prompt.
// 3) Export: top-level form POST multipart to tools/receive_images.py (127.0.0.1:8765/upload). An iframe target does NOT work (CSP).
//    Navigation resets run settings → redo step 1 for the next video.
// Images arrive as JPEG 1536x2752; tools resize with `sips -Z 2200`.
// 4) Rate limit (2026-11-08): the error appears as a chat turn "You've reached your rate limit". Both 2.1 and Lite hit it;
//    it did not clear within 4 h → treat as daily. A worker that retries must stop on it, not mark the item as timeout.
// 5) Long chats (>20 turns) slow down / time out → open a new chat every ~15 images (navigation resets settings; save the queue in sessionStorage).
// 6) 2026-11-08 morning: AI Studio says "You've reached your quota for the day" (toast, not a chat turn) → worker must also check body text.
//    Gemini web as fallback does NOT work for export: CSP form-action blocks POST to 127.0.0.1; window.name is cleared on cross-site
//    navigation; lh3.googleusercontent.com/gg/... image URLs 302 without login cookies; blob: URLs are revoked (use canvas→toBlob).
//    Gemini preview is only 572x1024. Playwright profile login is refused by Google ("This browser or app may not be secure") → tools/imagegen
//    only usable with an API key path. Don't retry these.
