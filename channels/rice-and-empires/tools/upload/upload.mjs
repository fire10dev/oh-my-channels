// Upload one Short to Rice & Empires via YouTube Data API v3 (videos.insert, resumable). No dependencies, runs outside Claude.
//
//   node upload.mjs auth                           # once: owner consents in the browser (pick the Brand Account Rice & Empires)
//   node upload.mjs S006 --private  [--confirm]    # privacyStatus=private (test)
//   node upload.mjs S006 --now      [--confirm]    # public immediately
//   node upload.mjs S006 --at "2026-11-09 09:00" [--confirm]   # private + publishAt (time in +07)
//   options: --file <mp4>
//
// Title/description: `## Publishing` in the episode script (tools/ep.py). Video: <episode>/render/<id>-*.mp4 (not *-raw.mp4).
// Without --confirm nothing is uploaded (dry run: parse + auth check + what would be sent). Stdout: one SUMMARY line.
// Credentials (outside the repo): ~/.cache/rice-youtube/client_secret.json (OAuth client, type Desktop) and token.json (made by `auth`).
// Quota: videos.insert ≈ 1600 units of 10 000/day.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import http from 'node:http';
import crypto from 'node:crypto';
import {execFile, execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const DIR = path.join(os.homedir(), '.cache', 'rice-youtube');
const SECRET = path.join(DIR, 'client_secret.json');
const TOKEN = path.join(DIR, 'token.json');
const LOG = path.join(process.env.TMPDIR || '/tmp', 'yt-upload.log');
const log = (...a) => fs.appendFileSync(LOG, `${new Date().toISOString()} ${a.join(' ')}\n`);

const argv = process.argv.slice(2);
const flag = (n) => argv.includes(`--${n}`);
const opt = (n, d) => { const i = argv.indexOf(`--${n}`); return i >= 0 ? argv[i + 1] : d; };
const cmd = argv[0];

// ---------- OAuth (installed app, loopback + PKCE) ----------
const client = () => {
  if (!fs.existsSync(SECRET)) throw new Error(`missing ${SECRET} (OAuth client JSON, type Desktop)`);
  const j = JSON.parse(fs.readFileSync(SECRET, 'utf8'));
  return j.installed || j.web;
};
const b64u = (b) => b.toString('base64url');

async function tokenRequest(params) {
  const c = client();
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: {'content-type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams({client_id: c.client_id, client_secret: c.client_secret, ...params}),
  });
  const j = await r.json();
  if (!r.ok) throw new Error(`token: ${j.error_description || j.error}`);
  return j;
}

async function auth() {
  const c = client();
  const verifier = b64u(crypto.randomBytes(32));
  const challenge = b64u(crypto.createHash('sha256').update(verifier).digest());
  const state = b64u(crypto.randomBytes(8));
  const code = await new Promise((resolve, reject) => {
    const srv = http.createServer((req, res) => {
      const u = new URL(req.url, 'http://127.0.0.1');
      if (u.pathname !== '/') { res.end(); return; }
      res.end('Done. You can close this tab.');
      srv.close();
      if (u.searchParams.get('state') !== state) reject(new Error('state mismatch'));
      else if (u.searchParams.get('error')) reject(new Error(u.searchParams.get('error')));
      else resolve({code: u.searchParams.get('code'), port: srv.address().port});
    }).listen(0, '127.0.0.1', () => {
      const port = srv.address().port;
      const url = 'https://accounts.google.com/o/oauth2/v2/auth?' + new URLSearchParams({
        client_id: c.client_id, redirect_uri: `http://127.0.0.1:${port}`, response_type: 'code',
        scope: 'https://www.googleapis.com/auth/youtube.upload', access_type: 'offline', prompt: 'consent',
        code_challenge: challenge, code_challenge_method: 'S256', state,
      });
      console.log('Opening the consent page — choose the Brand Account "Rice & Empires". If no browser opens:\n' + url);
      execFile('open', [url], () => {});
    });
    setTimeout(() => reject(new Error('timeout 10 min')), 600e3);
  });
  const t = await tokenRequest({grant_type: 'authorization_code', code: code.code, code_verifier: verifier, redirect_uri: `http://127.0.0.1:${code.port}`});
  if (!t.refresh_token) throw new Error('no refresh_token returned');
  fs.mkdirSync(DIR, {recursive: true});
  fs.writeFileSync(TOKEN, JSON.stringify({refresh_token: t.refresh_token}), {mode: 0o600});
  console.log(`OK token saved to ${TOKEN}`);
}

const accessToken = async () => {
  if (!fs.existsSync(TOKEN)) throw new Error('not authorised — run: node tools/upload/upload.mjs auth');
  return (await tokenRequest({grant_type: 'refresh_token', refresh_token: JSON.parse(fs.readFileSync(TOKEN, 'utf8')).refresh_token})).access_token;
};

if (cmd === 'auth') { await auth().catch((e) => { console.log(`FAIL ${e.message}`); process.exit(2); }); process.exit(0); }

// ---------- inputs ----------
const id = (cmd || '').toUpperCase();
if (!/^S\d{3}$/.test(id) || !(flag('private') || flag('now') || opt('at'))) {
  console.log('usage: node upload.mjs auth | S006 (--private | --now | --at "YYYY-MM-DD HH:MM") [--confirm] [--file mp4]');
  process.exit(1);
}
const confirm = flag('confirm');
const mode = opt('at') ? 'schedule' : flag('now') ? 'public' : 'private';
const summary = (status, vid) => console.log(`SUMMARY ${id} ${vid ? `https://youtube.com/shorts/${vid}` : '-'} ${status}`);
const die = (msg) => { log('FATAL', msg); summary(`FAIL ${msg}`); process.exit(2); };

// Episode folder (tools/ep.py): script.md + render/ (standalone short) or long/script.md + long/render/ (LONG).
const epDir = execFileSync('python3', [path.join(REPO, 'tools/ep.py'), id], {encoding: 'utf8'}).trim();
const scriptPath = execFileSync('python3', [path.join(REPO, 'tools/ep.py'), id, 'script'], {encoding: 'utf8'}).trim();
if (!fs.existsSync(scriptPath)) die(`no ${scriptPath}`);
const md = fs.readFileSync(scriptPath, 'utf8');
const sec = md.split(/^## Publishing.*$/m)[1]?.split(/^## /m)[0];
if (!sec) die('no "## Publishing" section');
const title = sec.match(/^Title:\s*\*{0,2}(.+?)\*{0,2}\s*$/m)?.[1]?.trim();
const dStart = sec.search(/^Description:/m);
let desc = dStart >= 0 ? sec.slice(dStart).replace(/^Description:\s*/, '') : '';
desc = desc.split(/^Pinned comment:/m)[0].trim().replace(/^"/, '').replace(/"$/, '').trim();
if (!title || !desc) die('cannot parse Title/Description');
if (title.length > 100) die(`title ${title.length} chars > 100`);
if (/[<>]/.test(title + desc)) die('title/description contain < or > (rejected by API)');

const outDir = [path.join(epDir, 'render'), path.join(epDir, 'long', 'render'), epDir].find((d) => fs.existsSync(d));
const file = opt('file') ||
  path.join(outDir, fs.readdirSync(outDir).filter((f) => f.startsWith(`${id}-`) && f.endsWith('.mp4') && !f.includes('-raw')).sort()[0] || 'MISSING');
if (!fs.existsSync(file)) die(`no video ${outDir}/${id}-*.mp4`);

let publishAt;
if (mode === 'schedule') {
  const m = opt('at').match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})$/);
  if (!m) die('--at must be "YYYY-MM-DD HH:MM" (+07)');
  const d = new Date(`${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:00+07:00`);
  if (d < new Date(Date.now() + 15 * 60e3)) die('--at must be ≥15 min in the future');
  publishAt = d.toISOString();
}

const body = {
  snippet: {title, description: desc, categoryId: '27'},
  status: {
    privacyStatus: mode === 'public' ? 'public' : 'private',
    ...(publishAt && {publishAt}),
    selfDeclaredMadeForKids: false,
    containsSyntheticMedia: false,
  },
};
const label = {private: 'PRIVATE', public: 'PUBLIC', schedule: `SCHEDULED ${opt('at')} +07 (${publishAt})`}[mode];
const mb = (fs.statSync(file).size / 1e6).toFixed(1);
log(`start ${id} ${label} confirm=${confirm} file=${file} ${mb}MB`);

try {
  const at = await accessToken(); // validates auth even on dry run
  if (!confirm) { summary(`DRY-RUN ${label}; "${title}"; ${path.basename(file)} ${mb} MB; nothing uploaded, add --confirm`); process.exit(0); }
  const bytes = fs.readFileSync(file);
  const init = await fetch('https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status', {
    method: 'POST',
    headers: {authorization: `Bearer ${at}`, 'content-type': 'application/json; charset=UTF-8', 'x-upload-content-length': String(bytes.length), 'x-upload-content-type': 'video/mp4'},
    body: JSON.stringify(body),
  });
  if (!init.ok) throw new Error(`init ${init.status}: ${(await init.text()).replace(/\s+/g, ' ').slice(0, 300)}`);
  const put = await fetch(init.headers.get('location'), {method: 'PUT', headers: {'content-type': 'video/mp4', 'content-length': String(bytes.length)}, body: bytes});
  const j = await put.json().catch(() => ({}));
  if (!put.ok || !j.id) throw new Error(`upload ${put.status}: ${JSON.stringify(j).slice(0, 300)}`);
  log('uploaded', j.id, JSON.stringify(j.status));
  summary(`${label}${j.status?.uploadStatus ? ` (${j.status.uploadStatus})` : ''}`, j.id);
} catch (e) {
  log('ERROR', e.stack || e.message);
  summary(`FAIL ${e.message} (see ${LOG})`);
  process.exitCode = 2;
}
