# AGENTS.md — oh-my-channels

Mọi kênh YouTube của FIRE10 trong một repo. Dự án cá nhân, một máy.

## Bố cục
| Thư mục | Nội dung |
|---|---|
| `hub/` | YT Hub: app macOS (SwiftUI) + CLI `ythub` + schema SQLite. **Nguồn sự thật về trạng thái mọi video.** |
| `channels/<kênh>/` | Code, kịch bản, metadata của từng kênh (mỗi kênh có `AGENTS.md`/`CLAUDE.md` riêng) |
| `shared/library/` | Thư viện media dùng chung (nhạc, sfx, ảnh cổ vật, bản đồ) — file không vào git, license trong `LICENSES.csv` + bảng `asset` |
| `.claude/skills/` | Skill dùng chung (Remotion best practices) |
| `research/` | Tư liệu tham khảo (teardown kênh mẫu…) |

Kênh: `off-limits-life` (@OffLimitsLife) · `tiny-leg-theory` (@TinyLegTheory + @LyThuyetChanQue) · `rice-and-empires` (@RiceAndEmpires) ·
`vibe-music` (@Vibe.MusicMaker) · `baby-sensory` · `ma-no-ke`.

## Folder tập: mỗi episode một folder (owner 2026-11-24)
- Mỗi kênh: `channels/<kênh>/episodes/EpNN-<Name>/` = 1 tập (1 LONG + các short cắt từ nó). Short độc lập: `episodes/standalone-shorts/<CODE>-<Name>/`.
- Trong folder: `ep.json` (`code`, `vid`, `name`, `channel`) · `long/` (script, plan, render/) · `shorts/` (script, SH1…/) · `assets/` · `metadata/` (`long.md`, `shorts.md`, **`scheduler.md`**, thumbnails/) · `reviews/`.
- `metadata/*.md` sinh từ YT Hub: `python3 shared/episodes/ep_meta.py <episode-dir>…` (chạy lại sau mỗi `ythub set`). Kế hoạch viết tay để dưới `## Ghi chú` trong `scheduler.md`.
- Media vẫn không vào git (gitignore của kênh). Remotion đọc `public/` → `public/<vid>` là symlink về `assets/`. Code để ở chỗ cũ (`src/`, `tools/`).
- Đã chuyển: **rice-and-empires** (mẫu: `tools/ep.py`, AGENTS §1b). Chưa chuyển: off-limits-life, tiny-leg-theory, vibe-music, ma-no-ke, baby-sensory, world-shorts.

## Trạng thái: YT Hub, không phải markdown
- **Không viết HANDOFF.md / STATE.md** (hook chặn). Lịch sử cũ: `channels/<kênh>/docs/archive/`.
- Đầu session: `ythub status --channel "<Kênh>"`, `ythub show <CODE>`, `ythub next`.
- Sau mỗi bước: `ythub set` (stage, title, file, url…), `ythub log <CODE> "…" --kind render|review|upload|blocker`,
  `ythub fact <CODE> images 51/51`, `ythub task add <CODE> "…" --owner user|agent`, `ythub task done <ID>`.
- Đặt `YTHUB_ACTOR=agent:<việc>` để nhật ký biết ai ghi. `ythub --json …` cho máy đọc. Đầy đủ: `ythub -h`.
- Stage: idea → script → assets → render → ready (xong, chưa đăng) → published.
- Việc chờ user (duyệt, nghe, đăng, chọn nhạc) = task `--owner user` → hiện ở chip "Việc của tôi" trong app.

## Manifest dựng video (YT Hub tab "Dựng", app chỉ đọc)
- Mỗi video: `build/<CODE>/hub.json` v1 = `{version, code, generated_at, duration_s, steps[], parts[{id, title, start, seconds, steps{<step>: ok|todo|fail|skip}, slots[{start, end, speaker, text, words}], issues[], contact_sheet?}]}`. Thời gian tính theo giây của video final.
- Adapter của kênh sinh file rồi đăng ký: `ythub fact <CODE> manifest <path>`. Mẫu: `channels/tiny-leg-theory/long/hub_adapter.py [--register]`.
- Chạy lại adapter sau mỗi bước pipeline; app hiện "cập nhật …" (đỏ khi > 7 ngày).

## Lịch đăng (owner 2026-11-24)
- Kênh giải trí: hẹn giờ **19:00 theo giờ khán giả** (Mỹ: America/New_York, Mexico/LatAm: America/Mexico_City, VN: Asia/Ho_Chi_Minh), 1 video/ngày, bắt đầu từ hôm nay nếu còn kịp.

## Media
- Không commit media (mp4/wav/mp3/ảnh render…): `.gitignore` gốc + của từng kênh. Media nằm cạnh code, đường dẫn ghi trong YT Hub.
- Nhạc/sfx dùng chung: `ythub asset list --kind music`; gắn vào video `ythub asset link <CODE> <ID> --role music`
  (license + dòng ghi công nằm trong asset — đưa vào mô tả video khi license đòi).

## Git
- Commit bằng `fire10dev <320095475+fire10dev@users.noreply.github.com>` (email thật bị GitHub chặn push).
- Remote: `git@github-fire10:fire10dev/oh-my-channels.git`. Chỉ commit/push khi user yêu cầu.
- Nhánh dở của kênh đặt tên `<kênh-ngắn>/<việc>` (vd `rice/long-L005`).
