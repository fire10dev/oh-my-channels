#!/usr/bin/env node
// loc_upload.mjs LANG [--confirm] [--only ID,ID] — đăng gói bản ngoại ngữ theo loc/<LANG>/schedule.json, hẹn giờ +07.
//   Dùng uploader chung oh-my-channels-yt/shared/youtube/yt.mjs (token kênh = "petty-ghost" cho en; tạo: yt.mjs auth petty-ghost).
//   Thiếu --confirm = dry-run. Ghi id đã đăng vào loc/<LANG>/uploaded.json, bỏ qua video đã đăng, thay {LONG_URL_P0N} trong mô tả short
//   bằng link LONG đã đăng (đăng LONG trước short — schedule.json đã xếp theo giờ). Đặt thumbnail/bìa bằng thumbnails.set sau upload.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const YT = '/Users/nino/Projects/FIRE10.DEV/REPO/oh-my-channels-yt/shared/youtube/yt.mjs';
const {validateMeta, parseAt, buildBody, accessToken, uploadVideo} = await import(YT);
const CH = {en: 'petty-ghost', es: 'petty-ghost-es'};
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [lang, ...rest] = process.argv.slice(2);
const confirm = rest.includes('--confirm');
const only = rest.includes('--only') ? rest[rest.indexOf('--only') + 1].split(',') : null;
const L = path.join(ROOT, 'loc', lang);
const sched = JSON.parse(fs.readFileSync(path.join(L, 'schedule.json'), 'utf8'));
const upf = path.join(L, 'uploaded.json');
const up = fs.existsSync(upf) ? JSON.parse(fs.readFileSync(upf, 'utf8')) : {};
const channel = CH[lang];
const at = await accessToken(channel);
for (const it of sched) {
  if (only && !only.includes(it.id)) continue;
  if (up[it.id]) { console.log(`có rồi ${it.id} https://youtu.be/${up[it.id]}`); continue; }
  const meta = JSON.parse(fs.readFileSync(it.meta_file, 'utf8'));
  meta.description = meta.description.replace(/\{LONG_URL_(P\d\d)\}/g, (m, ep) => {
    const v = up[`${lang.toUpperCase()}-${ep}-LONG`]; return v ? `https://youtu.be/${v}` : `(link on the channel)`;
  });
  const errs = validateMeta(meta);
  if (errs.length) { console.log(`FAIL meta ${it.id}: ${errs.join('; ')}`); process.exit(2); }
  if (!fs.existsSync(it.file)) { console.log(`FAIL thiếu file ${it.file}`); process.exit(2); }
  const publishAt = parseAt(it.at);   // ném lỗi nếu < 15 phút nữa
  const body = buildBody(meta, 'schedule', publishAt);
  body.snippet.defaultLanguage = lang; body.snippet.defaultAudioLanguage = lang;
  const mb = (fs.statSync(it.file).size / 1e6).toFixed(1);
  if (!confirm) { console.log(`DRY ${it.at} +07 ${it.id} ${mb}MB "${meta.title}"`); continue; }
  const v = await uploadVideo({file: it.file, body, accessToken: at});
  up[it.id] = v.id; fs.writeFileSync(upf, JSON.stringify(up, null, 1));
  let th = '-';
  if (it.thumb && fs.existsSync(it.thumb)) {
    const r = await fetch(`https://www.googleapis.com/upload/youtube/v3/thumbnails/set?videoId=${v.id}&uploadType=media`, {
      method: 'POST', headers: {Authorization: `Bearer ${at}`, 'Content-Type': 'image/jpeg'}, body: fs.readFileSync(it.thumb)});
    th = String(r.status);
  }
  console.log(`OK ${it.at} +07 ${it.id} https://youtu.be/${v.id} thumb=${th}`);
}
