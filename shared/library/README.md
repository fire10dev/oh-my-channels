# rice-lib — thư viện asset dùng lại cho Rice & Empires

Tải 2026-11-11. **Không đưa vào git** (nặng + license cấm phân phối lại SFX). Ghi công: `LICENSES.csv` (chạy `python3 build_licenses.py` sau mỗi lần thêm file).

| Thư mục | Nội dung | License | Ghi công |
|---|---|---|---|
| `sfx/sonniss-gdc2026/` | 347 WAV, 7,5 GB, GDC 2026 bundle (tải qua torrent chính thức) | Sonniss licence v2.0: thương mại, video/YouTube OK; **cấm** phân phối lại file âm thanh, **cấm** train AI | Không |
| `music/scott-buckley/mp3/` | 265 track (toàn bộ thư viện, mỗi trang track ghi CC BY 4.0) | CC BY 4.0 | **Có** — dòng ghi công trong `LICENSES.csv`, phải đặt trong mô tả video |
| `music/yt-audio-library/` | 1 track thử; tải hàng loạt bị Chrome chặn (cần chủ kênh bật "tự động tải nhiều file" cho studio.youtube.com) | YouTube Audio Library, lọc "Không cần ghi công" | Không |
| `artifact/met/` | Ảnh cổ vật CC0 The Met (Vietnam, Champa, Khmer, Đông Sơn, Hán/Đường/Nguyên/Minh…); metadata `artifact/manifest.jsonl` | CC0 | Không |
| `map/natural_earth_vector/` | Natural Earth đầy đủ (10m/50m/110m physical + cultural), 1,7 GB | Public domain | Không |

Script tải lại (resumable): `artifact/fetch_artifacts.py`, `music/scott-buckley/fetch.py`.
AIC (Art Institute of Chicago) **chưa tải**: API + ảnh IIIF chặn script bằng Cloudflare (403) — không vượt.
