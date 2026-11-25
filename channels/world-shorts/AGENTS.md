# world-shorts — Map Paradox (EN) / Paradojas del Mapa (ES)

Shorts kể một sự thật địa lý–kinh tế bằng bản đồ vector động (Remotion + Natural Earth) và giọng Kokoro. Không dùng ảnh AI, không footage.
Lý do chọn ngách: `global-shorts/debate3/verdict.md`.

## Một video = một file `scripts/<id>.json`
`{id, lang, voice, speed, brand, accent, source, music, cover_frame, rivers?, admin1?, beats:[...]}`. Mỗi beat có `say` và `cam:{lon,lat,span}` (span = số độ kinh tuyến hiện trên bề ngang 1080 px), cộng tuỳ chọn:
`title` · `hl:[{a3|cont, color, label?}]` · `a1:[{code,color}]` (cần `admin1`) · `pins` · `big:{value,label}` · `bars:{items,unit}` · `line:{pts,color,label?,arrow?}` · `zone:{pts}` · `ghost:{a3,to}` (kéo nước tới vị trí khác, giữ kích thước thật) · `river:{name}`.
Mã nước là `ADM0_A3` của Natural Earth (Pháp = FRA, gồm cả lãnh thổ hải ngoại).

## Lệnh (chạy trong `channels/world-shorts`)
- `tools/batch.sh w013 w014`: chạy TTS, geo, render, loudnorm và cover → `out/<lang>/<id>.mp4` + `-cover.jpg`
- `python3 tools/localize.py es w013`: tạo bản ES từ bản EN, dùng câu dịch trong `l10n/es.json` (thiếu nhãn thì báo lỗi)
- `python3 tools/package.py en --hub --start YYYY-MM-DD`: tạo `out/<lang>/UPLOAD.md|csv` (lịch 2 video/ngày) và đăng ký vào YT Hub
- Metadata đăng: `meta/<lang>.json`. Kit kênh: `out/channel-kit/`.

## Luật nội dung
- Mỗi con số phải có nguồn, ghi ở dòng `source` trên hình và trong mô tả. Không chắc thì bỏ. Số agy đưa ra từng bị bịa (debate3).
- Chủ đề, góc nhìn và kiểu hình phải khác nhau giữa các video (chính sách "generic/repetitive" 7/2026). Không lách bằng jitter hay đổi IP.
- `node_modules` là symlink sang `rice-and-empires/shorts`. Python geo dùng `tools/.venv` (pyshp, shapely). TTS dùng `shared/tts/.venv`.
