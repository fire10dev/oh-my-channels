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
`vibe-music` (@Vibe.MusicMaker) · `baby-sensory` · `so-tang-nam-cu` · `ma-no-ke`.

## Trạng thái: YT Hub, không phải markdown
- **Không viết HANDOFF.md / STATE.md** (hook chặn). Lịch sử cũ: `channels/<kênh>/docs/archive/`.
- Đầu session: `ythub status --channel "<Kênh>"`, `ythub show <CODE>`, `ythub next`.
- Sau mỗi bước: `ythub set` (stage, title, file, url…), `ythub log <CODE> "…" --kind render|review|upload|blocker`,
  `ythub fact <CODE> images 51/51`, `ythub task add <CODE> "…" --owner user|agent`, `ythub task done <ID>`.
- Đặt `YTHUB_ACTOR=agent:<việc>` để nhật ký biết ai ghi. `ythub --json …` cho máy đọc. Đầy đủ: `ythub -h`.
- Stage: idea → script → assets → render → ready (xong, chưa đăng) → published.
- Việc chờ user (duyệt, nghe, đăng, chọn nhạc) = task `--owner user` → hiện ở chip "Việc của tôi" trong app.

## Media
- Không commit media (mp4/wav/mp3/ảnh render…): `.gitignore` gốc + của từng kênh. Media nằm cạnh code, đường dẫn ghi trong YT Hub.
- Nhạc/sfx dùng chung: `ythub asset list --kind music`; gắn vào video `ythub asset link <CODE> <ID> --role music`
  (license + dòng ghi công nằm trong asset — đưa vào mô tả video khi license đòi).

## Git
- Commit bằng `fire10dev <320095475+fire10dev@users.noreply.github.com>` (email thật bị GitHub chặn push).
- Remote: `git@github-fire10:fire10dev/oh-my-channels.git`. Chỉ commit/push khi user yêu cầu.
- Nhánh dở của kênh đặt tên `<kênh-ngắn>/<việc>` (vd `rice/long-L005`).
