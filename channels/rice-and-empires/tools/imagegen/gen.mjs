// Image queue runner with 3 web sources on one Google account: AI Studio → Gemini → Flow (failover on rate limit).
// Runs outside Claude (no agent tokens while it works). Uses the installed Google Chrome + a dedicated profile.
//
//   node gen.mjs login                         # opens Chrome; owner signs in to Google once, then closes the window
//   node gen.mjs run <queue.json> <outdir> [--providers aistudio,gemini,flow] [--max-wait-h 10] [--headless]
//
// queue.json = [["s009-img-02.jpg", "prompt"], ...]. Files already in <outdir> are skipped (safe to re-run).
// stdout: one line per image + a final summary. Details: $TMPDIR/imagegen.log
import {chromium} from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {execFileSync} from 'node:child_process';

const PROFILE = path.join(os.homedir(), '.cache', 'rice-imagegen-profile'); // outside the repo, never committed
const LOG = path.join(process.env.TMPDIR || '/tmp', 'imagegen.log');
const AR = process.env.IMG_AR || '9:16'; // IMG_AR=16:9 for long videos
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => fs.appendFileSync(LOG, `${new Date().toISOString()} ${a.join(' ')}\n`);
const RL = /rate limit|quota|limit for today|can['’]t (create|generate) more|try again later|too many requests/i;

const launch = (headless = false) =>
  chromium.launchPersistentContext(PROFILE, {channel: 'chrome', headless, viewport: {width: 1280, height: 900}, acceptDownloads: true});

// ---------- helpers ----------
async function blobToFile(page, src, file) {
  const b64 = await page.evaluate(async (s) => {
    const b = await (await fetch(s)).blob();
    return await new Promise((r) => { const fr = new FileReader(); fr.onload = () => r(fr.result.split(',')[1]); fr.readAsDataURL(b); });
  }, src);
  fs.writeFileSync(file, Buffer.from(b64, 'base64'));
}
function toJpeg(tmp, out) {
  execFileSync('sips', ['-s', 'format', 'jpeg', tmp, '--out', out], {stdio: 'ignore'});
  fs.rmSync(tmp, {force: true});
}
const bigImgs = (page, min) =>
  page.evaluate((m) => [...document.querySelectorAll('img')].filter((i) => i.naturalWidth > m && /^(blob:|data:|https:)/.test(i.src)).map((i) => i.src), min);

// ---------- providers: open() starts a fresh chat; gen() returns 'ok' | 'RATELIMIT' | 'FAIL' ----------
const providers = {
  aistudio: {
    async open(page) {
      await page.goto('https://aistudio.google.com/prompts/new_chat', {waitUntil: 'domcontentloaded'});
      await sleep(4000);
      await page.getByRole('button', {name: /Temporary chat/i}).click({timeout: 2000}).catch(() => {});
      if (!(await page.locator('[role=combobox][aria-label="Aspect ratio"]').count()))
        await page.getByText('tune', {exact: true}).first().click({timeout: 5000}).catch(() => {});
      await sleep(1200);
      return page.evaluate(async (AR) => {
        const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
        const k = (el) => el.dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowDown', code: 'ArrowDown', keyCode: 40, bubbles: true}));
        [...document.querySelectorAll('button')].find((b) => /Images only/.test(b.textContent))?.click();
        const ar = document.querySelector('[role=combobox][aria-label="Aspect ratio"]');
        const rs = document.querySelector('[role=combobox][aria-label="Resolution"]');
        if (ar) { ar.focus(); for (let i = 0; i < 20 && !ar.textContent.includes(AR); i++) { k(ar); await sleep(150); } }
        if (rs) { rs.focus(); for (let i = 0; i < 5 && !/2K/.test(rs.textContent); i++) { k(rs); await sleep(150); } }
        const g = [...document.querySelectorAll('[role=switch],button[aria-checked]')].find((s) => s.getAttribute('aria-label') === 'Grounding with Google Search');
        if (g?.getAttribute('aria-checked') === 'true') g.click();
        return `AR=${ar?.textContent.trim().slice(0, 5)} RES=${rs?.textContent.trim().slice(0, 3)}`;
      }, AR);
    },
    async gen(page, prompt, tmp) {
      const nT = await page.locator('ms-chat-turn').count();
      await page.locator('textarea').first().fill(prompt);
      await page.getByRole('button', {name: /^Run/}).first().click();
      const t0 = Date.now();
      while (Date.now() - t0 < 150000) {
        await sleep(2500);
        const turns = page.locator('ms-chat-turn');
        if ((await turns.count()) <= nT) continue;
        if (await page.getByRole('button', {name: /Stop/}).count()) continue;
        const last = turns.last();
        const txt = await last.innerText().catch(() => '');
        if (RL.test(txt)) return 'RATELIMIT';
        const src = await last.evaluate((el) => [...el.querySelectorAll('img')].find((i) => /^(blob:|data:image)/.test(i.src) && i.naturalWidth > 600)?.src);
        if (src) { await blobToFile(page, src, tmp); return 'ok'; }
        if (Date.now() - t0 > 15000 && /No image generated|error/i.test(txt)) return 'FAIL';
      }
      return 'FAIL';
    },
  },

  gemini: {
    async open(page) {
      await page.goto('https://gemini.google.com/app', {waitUntil: 'domcontentloaded'});
      await page.locator('rich-textarea .ql-editor').waitFor({timeout: 20000});
      return 'ready';
    },
    async gen(page, prompt, tmp) {
      const before = (await bigImgs(page, 400)).length;
      const nDl = await page.getByRole('button', {name: 'Download full size image'}).count();
      const ed = page.locator('rich-textarea .ql-editor');
      await ed.click();
      await page.keyboard.insertText((AR === '9:16' ? 'Generate one image, vertical 9:16 portrait. ' : `Generate one image, wide ${AR} landscape. `) + prompt);
      await page.getByRole('button', {name: /send/i}).first().click();
      const t0 = Date.now();
      while (Date.now() - t0 < 180000) {
        await sleep(3000);
        const dl = page.getByRole('button', {name: 'Download full size image'});
        if ((await dl.count()) > nDl) {
          await sleep(1500);
          try {
            const [d] = await Promise.all([page.waitForEvent('download', {timeout: 60000}), dl.last().click()]);
            await d.saveAs(tmp);
            return 'ok';
          } catch {
            const imgs = await bigImgs(page, 400);
            if (imgs.length > before) { await blobToFile(page, imgs.at(-1), tmp); return 'ok'; }
          }
        }
        const busy = await page.getByRole('button', {name: /stop/i}).count();
        if (!busy && Date.now() - t0 > 20000) {
          const tail = (await page.locator('message-content').last().innerText().catch(() => '')).slice(-400);
          if (RL.test(tail)) return 'RATELIMIT';
          if (tail && !/Creating your image/i.test(tail)) return 'FAIL';
        }
      }
      return 'FAIL';
    },
  },

  flow: {
    async open(page) {
      await page.goto('https://flow.google.com/', {waitUntil: 'domcontentloaded'});
      await page.getByRole('button', {name: /New project/}).click({timeout: 20000});
      await page.getByRole('button', {name: 'Settings trigger'}).click({timeout: 20000});
      for (const t of [/^imageImage$/, new RegExp(AR + '$'), /^x1$/]) await page.getByRole('button', {name: t}).first().click({timeout: 5000}).catch(() => {});
      await page.keyboard.press('Escape');
      return 'ready';
    },
    async gen(page, prompt, tmp) {
      const before = await bigImgs(page, 300);
      const box = page.getByRole('textbox').first();
      await box.click();
      await page.keyboard.insertText(prompt);
      await page.getByRole('button', {name: 'Start generation'}).click();
      const t0 = Date.now();
      while (Date.now() - t0 < 180000) {
        await sleep(3000);
        const now = await bigImgs(page, 300);
        const fresh = now.filter((s) => !before.includes(s));
        if (fresh.length) { await sleep(1500); await blobToFile(page, fresh[0], tmp); return 'ok'; }
        const body = await page.locator('body').innerText();
        if (RL.test(body)) return 'RATELIMIT';
        if (Date.now() - t0 > 30000 && /failed|couldn['’]t generate|something went wrong/i.test(body)) return 'FAIL';
      }
      return 'FAIL';
    },
  },
};

// ---------- main ----------
const [cmd, ...rest] = process.argv.slice(2);
const opt = (name, d) => { const i = rest.indexOf(name); return i >= 0 ? rest[i + 1] : d; };

if (cmd === 'login') {
  // Plain Chrome (not automation-controlled), so Google sign-in is not refused. Same profile dir is reused by `run`.
  fs.mkdirSync(PROFILE, {recursive: true});
  execFileSync('open', ['-na', 'Google Chrome', '--args', `--user-data-dir=${PROFILE}`, '--no-first-run',
    'https://accounts.google.com/', 'https://aistudio.google.com/', 'https://gemini.google.com/app', 'https://flow.google.com/']);
  console.log('Chrome opened with the imagegen profile. Sign in to Google (all 3 tabs signed in), then quit that Chrome window (cmd+Q).');
  process.exit(0);
}

if (cmd === 'login2' || cmd === 'check') {
  // Playwright-controlled window (yellow "controlled by automated test software" bar). Waits until Google session cookies exist.
  const ctx = await launch(cmd === 'check');
  const p = ctx.pages()[0] || (await ctx.newPage());
  if (cmd === 'login2') { await p.goto('https://accounts.google.com/'); await p.bringToFront(); }
  const t0 = Date.now();
  let ok = false;
  while (Date.now() - t0 < (cmd === 'login2' ? 10 * 60e3 : 1)) {
    ok = (await ctx.cookies('https://accounts.google.com')).some((c) => c.name === 'SID' || c.name === '__Secure-1PSID');
    if (ok) break;
    await sleep(3000);
  }
  if (!ok && cmd === 'check') ok = (await ctx.cookies('https://accounts.google.com')).some((c) => c.name === 'SID' || c.name === '__Secure-1PSID');
  console.log(ok ? 'SIGNED_IN' : 'NOT_SIGNED_IN');
  await sleep(ok && cmd === 'login2' ? 5000 : 0);
  await ctx.close();
  process.exit(ok ? 0 : 3);
}

if (cmd !== 'run') { console.log('usage: node gen.mjs login | run <queue.json> <outdir> [--providers a,b,c] [--max-wait-h 10] [--headless]'); process.exit(1); }
const [qFile, outDir] = rest;
fs.mkdirSync(outDir, {recursive: true});
const queue = JSON.parse(fs.readFileSync(qFile, 'utf8')).filter(([n]) => !fs.existsSync(path.join(outDir, n)));
const order = opt('--providers', 'aistudio,gemini,flow').split(',');
const deadline = Date.now() + Number(opt('--max-wait-h', 10)) * 3600e3;
const ctx = await launch(rest.includes('--headless'));
const page = ctx.pages()[0] || (await ctx.newPage());
const state = Object.fromEntries(order.map((p) => [p, {coolUntil: 0, opened: false, sinceOpen: 0, fails: 0, made: 0}]));
let done = 0;

for (const [name, prompt] of queue) {
  let tries = 0;
  while (tries < 4) {
    const now = Date.now();
    const pick = order.find((p) => state[p].coolUntil <= now);
    if (!pick) {
      const wake = Math.min(...order.map((p) => state[p].coolUntil));
      if (wake > deadline) { console.log('STOP: all sources rate-limited past --max-wait-h'); break; }
      log('all cooling; sleep until', new Date(wake).toISOString());
      await sleep(wake - now + 1000);
      continue;
    }
    const s = state[pick];
    try {
      if (!s.opened || s.sinceOpen >= 12) { log(pick, 'open', await providers[pick].open(page)); s.opened = true; s.sinceOpen = 0; order.forEach((p) => p !== pick && (state[p].opened = false)); }
      const tmp = path.join(outDir, `.${name}.tmp`);
      const r = await providers[pick].gen(page, (tries >= 2 ? 'Artwork only, calm depiction. ' : '') + prompt, tmp);
      s.sinceOpen++;
      log(pick, name, r);
      if (r === 'ok') { toJpeg(tmp, path.join(outDir, name)); s.fails = 0; s.made++; done++; console.log(`${name} ok (${pick})`); break; }
      if (r === 'RATELIMIT') { s.coolUntil = Date.now() + 60 * 60e3; s.opened = false; console.log(`${pick}: rate limit → cool 60 min`); continue; }
      tries++;
      if (++s.fails >= 2) { s.coolUntil = Date.now() + 30 * 60e3; s.fails = 0; s.opened = false; }
    } catch (e) {
      log(pick, name, 'ERROR', e.message.split('\n')[0]);
      tries++; s.opened = false;
      if (++s.fails >= 2) { s.coolUntil = Date.now() + 30 * 60e3; s.fails = 0; }
    }
  }
  if (tries >= 4) console.log(`${name} FAILED`);
  if (Date.now() > deadline) break;
}
console.log(`SUMMARY ${done}/${queue.length} new images · ` + order.map((p) => `${p}=${state[p].made}`).join(' ') + ` · log ${LOG}`);
await ctx.close();
