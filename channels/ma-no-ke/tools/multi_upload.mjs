#!/usr/bin/env node
// multi_upload.mjs VID [--confirm] — đăng video đa ngôn ngữ (tools/multi.py + multi_render.sh) lên kênh petty-ghost, PRIVATE.
//   1) upload video/out/multi/<VID>.mp4 (track tiếng Anh) + meta loc/multi/<VID>.json   2) videos.update localizations (tiêu đề/mô tả fr, es)
//   3) thumbnail   4) thử captions.insert 3 file .srt (cần scope youtube.force-ssl; thiếu thì in hướng dẫn tải tay).
//   Track audio FR/ES: API không hỗ trợ → tải tay trong Studio (in hướng dẫn). Video để private: user nghe lại rồi tự Publish.
//   Thiếu --confirm = dry-run.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const {validateMeta, buildBody, accessToken, uploadVideo} = await import('/Users/nino/Projects/FIRE10.DEV/REPO/oh-my-channels-yt/shared/youtube/yt.mjs');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [vid, ...rest] = process.argv.slice(2);
const confirm = rest.includes('--confirm');
const capOnly = rest.includes('--captions-only');   // video đã lên: chỉ tải 3 phụ đề (sau khi token có scope youtube.force-ssl)
const at0 = rest.includes('--at') ? rest[rest.indexOf('--at') + 1] : null;   // --at 2026-11-26T18:00:00Z → hẹn giờ công khai (UTC)
const OUT = path.join(ROOT, 'video/out/multi');
const meta = JSON.parse(fs.readFileSync(path.join(ROOT, 'loc/multi', `${vid}.json`), 'utf8'));
const file = path.join(OUT, `${vid}.mp4`);
const isShort = /-sh\d+$/.test(vid);   // short: không đặt thumbnail (YouTube dùng khung hình), không cần file thumb
const thumb = path.join(ROOT, 'video/out/en/thumbs', `EN-THUMB-${vid.slice(0, 3).toUpperCase()}.jpg`);
const langs = ['en', 'fr', 'es'];
const errs = [...validateMeta(meta), ...Object.entries(meta.localizations).flatMap(([l, x]) => validateMeta({...meta, ...x}).map((e) => `${l}: ${e}`))];
const need = [file, ...(isShort ? [] : [thumb]), ...langs.map((l) => path.join(OUT, `${vid}.${l}.srt`)), ...['fr', 'es'].map((l) => path.join(OUT, `${vid}.${l}.m4a`))];
const miss = need.filter((f) => !fs.existsSync(f));
if (errs.length || miss.length) { console.log('FAIL', errs, miss); process.exit(2); }
const upf = path.join(ROOT, 'loc/multi/uploaded.json');
const up = fs.existsSync(upf) ? JSON.parse(fs.readFileSync(upf, 'utf8')) : {};
if (!confirm) {
  console.log(`DRY ${vid}: ${(fs.statSync(file).size / 1e6).toFixed(1)}MB private${at0 ? ' → công khai ' + at0 : ''} "${meta.title}"`);
  for (const [l, x] of Object.entries(meta.localizations)) console.log(`  ${l}: "${x.title}"`);
  console.log(`  thumb ${isShort ? '(short: không)' : path.basename(thumb)} · srt ${langs.join('/')} · audio fr/es → Studio`);
  process.exit(0);
}
const at = await accessToken('petty-ghost');
let id = up[vid];
if (!id) {
  const body = buildBody(meta, 'private');
  Object.assign(body.snippet, {defaultLanguage: 'en', defaultAudioLanguage: 'en'});
  if (at0) body.status.publishAt = at0;
  id = (await uploadVideo({file, body, accessToken: at})).id; up[vid] = id; fs.writeFileSync(upf, JSON.stringify(up, null, 1));
  console.log(`OK upload https://youtu.be/${id} (private)`);
} else console.log(`có rồi https://youtu.be/${id}`);
const api = (u, init) => fetch(`https://www.googleapis.com${u}`, {...init, headers: {Authorization: `Bearer ${at}`, ...(init?.headers || {})}});
let r;
if (!capOnly) {
// localizations: phải gửi lại snippet đầy đủ cùng part
const cur = await (await api(`/youtube/v3/videos?part=snippet&id=${id}`)).json();
const sn = cur.items[0].snippet;
r = await api('/youtube/v3/videos?part=snippet,localizations', {method: 'PUT', headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({id, snippet: {title: sn.title, description: sn.description, tags: sn.tags, categoryId: sn.categoryId, defaultLanguage: 'en', defaultAudioLanguage: 'en'}, localizations: meta.localizations})});
console.log(`localizations ${r.status}`);
if (!isShort) {
  r = await api(`/upload/youtube/v3/thumbnails/set?videoId=${id}&uploadType=media`, {method: 'POST', headers: {'Content-Type': 'image/jpeg'}, body: fs.readFileSync(thumb)});
  console.log(`thumb ${r.status}`);
}
}
const NAME = {en: 'English', fr: 'Français', es: 'Español'};
let capOk = true;
for (const l of langs) {
  const b = 'cap' + Date.now();
  const payload = Buffer.concat([
    Buffer.from(`--${b}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify({snippet: {videoId: id, language: l, name: NAME[l]}})}\r\n--${b}\r\nContent-Type: application/octet-stream\r\n\r\n`),
    fs.readFileSync(path.join(OUT, `${vid}.${l}.srt`)), Buffer.from(`\r\n--${b}--`)]);
  r = await api('/upload/youtube/v3/captions?part=snippet&uploadType=multipart', {method: 'POST', headers: {'Content-Type': `multipart/related; boundary=${b}`}, body: payload});
  console.log(`caption ${l} ${r.status}`); if (!r.ok) { capOk = false; console.log((await r.text()).slice(0, 200)); }
}
console.log(`
VIỆC TAY trong Studio (studio.youtube.com → Content → video → Languages):
  - Add language → Français → Audio: tải ${OUT}/${vid}.fr.m4a
  - Add language → Español  → Audio: tải ${OUT}/${vid}.es.m4a${capOk ? '' : `
  - Subtitles: tải ${vid}.en.srt / .fr.srt / .es.srt (with timing)`}
  Nghe lại 3 track rồi đổi Visibility → Public (hoặc Schedule).`);
