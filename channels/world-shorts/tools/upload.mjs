// Upload world-shorts via YouTube Data API v3 (videos.insert, resumable). No dependencies.
//
//   node tools/upload.mjs auth en                 # once per channel: consent in the browser, pick the Brand Account
//   node tools/upload.mjs up en                   # dry run: list what would be uploaded
//   node tools/upload.mjs up en --confirm [w003 w004]  # upload (scheduled: private + publishAt from UPLOAD.csv)
//   options: --private (no publishAt, stays private) · --limit N
//
// Input: out/<lang>/UPLOAD.csv (tools/package.py). Done list: out/<lang>/uploaded.json (re-runs skip those ids).
// Token: ~/.config/oh-my-channels/youtube/<slug>.json (same format as the other channels). The token's channel
// must equal CHANNELS[lang].id, otherwise nothing is uploaded. Stops on quotaExceeded; re-run the next day.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import http from 'node:http';
import crypto from 'node:crypto';
import {execFile, execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CFG = path.join(os.homedir(), '.config', 'oh-my-channels', 'youtube');
const SECRET = path.join(CFG, 'client_secret.json');
const CHANNELS = {
  en: {slug: 'map-paradox', name: 'Map Paradox', id: 'UC31Y539y38N18GzejAZX_kA', lang: 'en'},
  es: {slug: 'paradojas-del-mapa', name: 'Paradojas del Mapa', id: 'UCwEBetHNaSD9S8N-7pKvOUQ', lang: 'es-419'},
};
// youtube.force-ssl: needed by `resched` (videos.update); upload/readonly alone cannot edit a video.
const SCOPE = 'https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.force-ssl';

const argv = process.argv.slice(2);
const flag = (n) => argv.includes(`--${n}`);
const opt = (n, d) => { const i = argv.indexOf(`--${n}`); return i >= 0 ? argv[i + 1] : d; };
const [cmd, lang] = argv;
const ch = CHANNELS[lang];
if (!ch || !['auth', 'up', 'resched'].includes(cmd)) { console.log('usage: node tools/upload.mjs auth|up|resched en|es [--confirm] [ids…]'); process.exit(1); }
const TOKEN = path.join(CFG, `${ch.slug}.json`);

const client = () => { const j = JSON.parse(fs.readFileSync(SECRET, 'utf8')); return j.installed || j.web; };
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
async function myChannel(at) {
  const r = await fetch('https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true', {headers: {authorization: `Bearer ${at}`}});
  const j = await r.json();
  if (!r.ok) throw new Error(`channels: ${JSON.stringify(j.error?.message || j)}`);
  return j.items?.[0] ? {id: j.items[0].id, title: j.items[0].snippet.title} : {id: '', title: ''};
}

async function auth() {
  const c = client();
  const verifier = b64u(crypto.randomBytes(32));
  const challenge = b64u(crypto.createHash('sha256').update(verifier).digest());
  const state = b64u(crypto.randomBytes(8));
  let PORT = 0;
  const got = await new Promise((resolve, reject) => {
    const srv = http.createServer((req, res) => {
      const u = new URL(req.url, 'http://127.0.0.1');
      if (u.pathname !== '/') { res.end(); return; }
      res.end('Done. You can close this tab.');
      srv.close();
      if (u.searchParams.get('state') !== state) reject(new Error('state mismatch'));
      else if (u.searchParams.get('error')) reject(new Error(u.searchParams.get('error')));
      else resolve({code: u.searchParams.get('code'), port: PORT});
    }).listen(0, '127.0.0.1', () => {
      const port = PORT = srv.address().port;
      const url = 'https://accounts.google.com/o/oauth2/v2/auth?' + new URLSearchParams({
        client_id: c.client_id, redirect_uri: `http://127.0.0.1:${port}`, response_type: 'code',
        scope: SCOPE, access_type: 'offline', prompt: 'select_account consent',
        code_challenge: challenge, code_challenge_method: 'S256', state,
      });
      console.log(`Consent page: pick the Brand Account "${ch.name}". If no browser opens:\n${url}`);
      execFile('open', [url], () => {});
    });
    setTimeout(() => reject(new Error('timeout 10 min')), 600e3);
  });
  const t = await tokenRequest({grant_type: 'authorization_code', code: got.code, code_verifier: verifier, redirect_uri: `http://127.0.0.1:${got.port}`});
  if (!t.refresh_token) throw new Error('no refresh_token returned');
  const me = await myChannel(t.access_token);
  fs.mkdirSync(CFG, {recursive: true});
  fs.writeFileSync(TOKEN, JSON.stringify({refresh_token: t.refresh_token, scope: t.scope, channelId: me.id, channelTitle: me.title, savedAt: new Date().toISOString()}, null, 2), {mode: 0o600});
  console.log(`OK ${TOKEN} → ${me.title} ${me.id}${ch.id && me.id !== ch.id ? `  ⚠ expected ${ch.id} (wrong account picked, run auth again)` : ''}`);
}

// Minimal RFC 4180 CSV parser (quoted fields with newlines).
function parseCsv(s) {
  const rows = []; let row = [], f = '', q = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (q) { if (c === '"') { if (s[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(f); f = ''; }
    else if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; }
    else if (c !== '\r') f += c;
  }
  if (f || row.length) { row.push(f); rows.push(row); }
  const [h, ...rest] = rows;
  return rest.filter((r) => r.length > 1).map((r) => Object.fromEntries(h.map((k, i) => [k, r[i] ?? ''])));
}

async function up() {
  const out = path.join(ROOT, 'out', lang);
  const doneFile = path.join(out, 'uploaded.json');
  const done = fs.existsSync(doneFile) ? JSON.parse(fs.readFileSync(doneFile, 'utf8')) : {};
  const only = argv.slice(2).filter((a) => /^w\d{3}/.test(a));
  const limit = Number(opt('limit', 999));
  let rows = parseCsv(fs.readFileSync(path.join(out, 'UPLOAD.csv'), 'utf8')).filter((r) => !done[r.id] && (!only.length || only.includes(r.id)));
  rows = rows.slice(0, limit);
  const confirm = flag('confirm');
  if (!fs.existsSync(TOKEN)) throw new Error(`not authorised — run: node tools/upload.mjs auth ${lang}`);
  const tok = JSON.parse(fs.readFileSync(TOKEN, 'utf8'));
  const at = (await tokenRequest({grant_type: 'refresh_token', refresh_token: tok.refresh_token})).access_token;
  const me = await myChannel(at);
  if (!ch.id || me.id !== ch.id) throw new Error(`token is for "${me.title}" ${me.id}, expected ${ch.name} ${ch.id || '(id not set)'}`);
  console.log(`channel OK: ${me.title} ${me.id} · ${rows.length} to upload · ${confirm ? 'CONFIRM' : 'DRY RUN'}`);

  for (const r of rows) {
    const file = path.join(out, r.file);
    if (!fs.existsSync(file)) throw new Error(`missing ${file}`);
    const publishAt = flag('private') ? undefined : new Date(r.publish_utc.replace(' ', 'T') + ':00Z');
    if (publishAt && publishAt < new Date(Date.now() + 15 * 60e3)) { console.log(`SKIP ${r.id} publishAt ${r.publish_utc} UTC is in the past/too close`); continue; }
    if (r.title.length > 100 || /[<>]/.test(r.title + r.description)) throw new Error(`${r.id}: title >100 or contains < >`);
    const body = {
      snippet: {title: r.title, description: r.description, tags: r.tags.split(',').map((t) => t.trim()).filter(Boolean),
        categoryId: '27', defaultLanguage: ch.lang, defaultAudioLanguage: ch.lang},
      status: {privacyStatus: 'private', ...(publishAt && {publishAt: publishAt.toISOString()}),
        selfDeclaredMadeForKids: false, containsSyntheticMedia: false},
    };
    const label = `${r.id} ${publishAt ? `→ ${r.publish_ict} +07` : 'PRIVATE'} "${r.title}"`;
    if (!confirm) { console.log(`DRY ${label}`); continue; }
    const bytes = fs.readFileSync(file);
    const init = await fetch('https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status', {
      method: 'POST',
      headers: {authorization: `Bearer ${at}`, 'content-type': 'application/json; charset=UTF-8', 'x-upload-content-length': String(bytes.length), 'x-upload-content-type': 'video/mp4'},
      body: JSON.stringify(body),
    });
    if (!init.ok) {
      const t = (await init.text()).replace(/\s+/g, ' ');
      if (/quotaExceeded|uploadLimitExceeded/.test(t)) { console.log(`STOP quota/limit at ${r.id}: re-run tomorrow`); break; }
      throw new Error(`${r.id} init ${init.status}: ${t.slice(0, 400)}`);
    }
    const put = await fetch(init.headers.get('location'), {method: 'PUT', headers: {'content-type': 'video/mp4', 'content-length': String(bytes.length)}, body: bytes});
    const j = await put.json().catch(() => ({}));
    if (!put.ok || !j.id) throw new Error(`${r.id} upload ${put.status}: ${JSON.stringify(j).slice(0, 400)}`);
    const url = `https://youtube.com/shorts/${j.id}`;
    done[r.id] = {videoId: j.id, url, publishAt: body.status.publishAt || null, at: new Date().toISOString(), status: j.status};
    fs.writeFileSync(doneFile, JSON.stringify(done, null, 2));
    try {
      execFileSync('ythub', ['set', r.id, '--channel', ch.name, '--url', url], {stdio: 'ignore'});
      execFileSync('ythub', ['log', r.id, `uploaded ${url}, ${publishAt ? `scheduled ${r.publish_ict} +07` : 'private'} (API)`, '--kind', 'upload'], {stdio: 'ignore'});
    } catch { console.log(`(ythub update failed for ${r.id})`); }
    console.log(`OK ${label} ${url} [${j.status?.privacyStatus}/${j.status?.uploadStatus}]`);
  }
}

// Move already-uploaded videos to the publish_utc now in UPLOAD.csv (after package.py --start changed the plan).
async function resched() {
  const out = path.join(ROOT, 'out', lang);
  const doneFile = path.join(out, 'uploaded.json');
  const done = JSON.parse(fs.readFileSync(doneFile, 'utf8'));
  const tok = JSON.parse(fs.readFileSync(TOKEN, 'utf8'));
  const at = (await tokenRequest({grant_type: 'refresh_token', refresh_token: tok.refresh_token})).access_token;
  const me = await myChannel(at);
  if (me.id !== ch.id) throw new Error(`token is for "${me.title}" ${me.id}, expected ${ch.name} ${ch.id}`);
  const confirm = flag('confirm');
  for (const r of parseCsv(fs.readFileSync(path.join(out, 'UPLOAD.csv'), 'utf8'))) {
    const d = done[r.id];
    if (!d) continue;
    const want = new Date(r.publish_utc.replace(' ', 'T') + ':00Z');
    if (d.publishAt && new Date(d.publishAt).getTime() === want.getTime()) continue;
    if (want < new Date(Date.now() + 15 * 60e3)) { console.log(`SKIP ${r.id} new slot ${r.publish_utc} UTC too close`); continue; }
    const label = `${r.id} ${d.publishAt} → ${want.toISOString()} (${r.publish_ict} +07)`;
    if (!confirm) { console.log(`DRY ${label}`); continue; }
    const res = await fetch('https://www.googleapis.com/youtube/v3/videos?part=status', {
      method: 'PUT', headers: {authorization: `Bearer ${at}`, 'content-type': 'application/json'},
      body: JSON.stringify({id: d.videoId, status: {privacyStatus: 'private', publishAt: want.toISOString(), selfDeclaredMadeForKids: false, containsSyntheticMedia: false}}),
    });
    const j = await res.json();
    if (!res.ok) throw new Error(`${r.id} update ${res.status}: ${JSON.stringify(j.error?.message || j).slice(0, 300)}`);
    d.publishAt = j.status.publishAt; fs.writeFileSync(doneFile, JSON.stringify(done, null, 2));
    try { execFileSync('ythub', ['log', r.id, `rescheduled → ${r.publish_ict} +07 (API)`, '--kind', 'upload'], {stdio: 'ignore'}); } catch {}
    console.log(`OK ${label}`);
  }
}

try { await (cmd === 'auth' ? auth() : cmd === 'resched' ? resched() : up()); }
catch (e) { console.log(`FAIL ${e.message}`); process.exit(2); }
