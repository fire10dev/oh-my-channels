import AppKit
import SwiftUI

// MARK: - Dashboard: shown when no video is selected; only what needs a human look

private func stamp(daysAgo: Int) -> String {
  let f = DateFormatter()
  f.dateFormat = "yyyy-MM-dd HH:mm"
  return f.string(from: Date().addingTimeInterval(-Double(daysAgo) * 86400))
}

struct Dashboard: View {
  @EnvironmentObject var model: AppModel
  let channelId: Int64?
  let open: (Video) -> Void
  let pickChannel: (Int64, StatusGroup?) -> Void
  let p: Palette

  private let stallDays = 7

  var body: some View {
    let videos = model.videos.filter { channelId == nil || $0.channelId == channelId }
    let last = model.lastEvents()
    let stuck = blocked(videos, lastEvent: last)
    let idle = stalled(videos, lastEvent: last, cutoff: stamp(daysAgo: stallDays))
    let mine = model.tasks.filter { $0.owner == "user" && (channelId == nil || $0.channelId == channelId) }
    let moves = stageMoves(model.events(since: stamp(daysAgo: 7)))
    ScrollView {
      VStack(alignment: .leading, spacing: 22) {
        HStack(spacing: 10) {
          tile("Việc của tôi", mine.count, p.coral)
          tile("Blocker", stuck.count, p.coral)
          tile("Im > \(stallDays) ngày", idle.count, p.sun)
          tile("Chờ đăng", videos.filter { $0.group == .ready }.count, p.coral)
          tile("Đã đăng", videos.filter { $0.group == .done }.count, p.accent)
        }
        section("Kênh × stage") { matrix(videos) }
        if !mine.isEmpty {
          section("Việc của tôi · \(mine.count)") {
            ForEach(mine) { t in
              let v = t.videoId.flatMap { id in model.videos.first { $0.id == id } }
              row(code: v?.code ?? "kênh", channel: t.channelId, text: t.text, color: p.coral) { if let v { open(v) } }
            }
          }
        }
        if !stuck.isEmpty {
          section("Blocker · \(stuck.count)") {
            ForEach(stuck) { v in
              row(code: v.code, channel: v.channelId, text: last[v.id]?.message ?? "", color: p.coral) { open(v) }
            }
          }
        }
        if !idle.isEmpty {
          section("Đứng im > \(stallDays) ngày · \(idle.count)") {
            ForEach(idle.prefix(30)) { v in
              row(code: v.code, channel: v.channelId, text: "\(v.stage.label) · \(v.title)", color: p.sun) { open(v) }
            }
          }
        }
        section("7 ngày qua · video chuyển tới stage") {
          if moves.isEmpty {
            Text("Chưa có. Đổi stage trong app hoặc `ythub set --stage` sẽ ghi lại.").font(.ui(11)).foregroundStyle(p.muted)
          } else {
            HStack(spacing: 18) {
              ForEach(Stage.allCases) { s in
                VStack(alignment: .leading, spacing: 2) {
                  Text("\(moves[s] ?? 0)").font(.ui(16, weight: .bold))
                    .foregroundStyle((moves[s] ?? 0) == 0 ? p.muted.opacity(0.4) : s.group.color(p))
                  Text(s.shortLabel).font(.ui(10)).foregroundStyle(p.muted)
                }
              }
            }
          }
        }
      }
      .padding(22)
      .frame(maxWidth: .infinity, alignment: .leading)
    }
  }

  private func tile(_ title: String, _ n: Int, _ c: Color) -> some View {
    VStack(alignment: .leading, spacing: 4) {
      Text("\(n)").font(.ui(22, weight: .bold)).foregroundStyle(n == 0 ? p.muted.opacity(0.5) : c)
      Text(title).font(.ui(10)).foregroundStyle(p.muted).lineLimit(1)
    }
    .padding(10)
    .frame(maxWidth: .infinity, alignment: .leading)
    .bg(p.paperDeep)
    .overlay(Rectangle().stroke(p.line, lineWidth: 1))
  }

  private func section<C: View>(_ title: String, @ViewBuilder _ content: () -> C) -> some View {
    VStack(alignment: .leading, spacing: 10) {
      Text(title.uppercased()).font(.ui(11, weight: .bold)).tracking(1).foregroundStyle(p.accent)
      HRail(p: p)
      content()
    }
  }

  /// Channel rows × stage columns; a cell opens that channel filtered to the stage's status.
  private func matrix(_ videos: [Video]) -> some View {
    let m = stageMatrix(videos)
    let chans = model.channels.filter { m[$0.id] != nil }
    return VStack(spacing: 0) {
      HStack(spacing: 0) {
        Text("").frame(maxWidth: .infinity, alignment: .leading)
        ForEach(Stage.allCases) { s in
          Text(s.shortLabel).font(.ui(9, weight: .bold)).foregroundStyle(s.group.color(p)).frame(width: 78, alignment: .trailing)
        }
      }
      .padding(.vertical, 4)
      ForEach(chans) { c in
        HStack(spacing: 0) {
          Text(c.name).font(.ui(11)).foregroundStyle(p.ink).lineLimit(1).frame(maxWidth: .infinity, alignment: .leading)
          ForEach(Stage.allCases) { s in
            let n = m[c.id]?[s] ?? 0
            Button { pickChannel(c.id, s.group) } label: {
              Text(n == 0 ? "·" : "\(n)").font(.ui(12, weight: n == 0 ? .regular : .bold))
                .foregroundStyle(n == 0 ? p.muted.opacity(0.4) : s.group.color(p))
                .frame(width: 78, alignment: .trailing).contentShape(Rectangle())
            }
            .buttonStyle(.plain)
            .disabled(n == 0)
          }
        }
        .padding(.vertical, 5)
        .overlay(alignment: .bottom) { HRail(p: p).opacity(0.4) }
      }
    }
  }

  private func row(code: String, channel: Int64, text: String, color: Color, action: @escaping () -> Void) -> some View {
    Button(action: action) {
      HStack(spacing: 10) {
        Text(code.isEmpty ? "—" : code).font(.ui(11, weight: .semibold)).foregroundStyle(color).frame(width: 80, alignment: .leading)
        Text(model.channel(channel)?.name ?? "").font(.ui(10)).foregroundStyle(p.muted).frame(width: 130, alignment: .leading)
          .lineLimit(1)
        Text(text).font(.ui(11)).foregroundStyle(p.ink).lineLimit(1).frame(maxWidth: .infinity, alignment: .leading)
      }
      .padding(.vertical, 3)
      .contentShape(Rectangle())
    }
    .buttonStyle(.plain)
  }
}

// MARK: - Dựng: the video's manifest (parts × steps, dialogue by the second)

/// A seek request; `n` makes asking for the same time twice still seek.
struct Seek: Equatable {
  var t: Double
  var n: Int
}

func clock(_ s: Double) -> String { String(format: "%d:%02d", Int(s) / 60, Int(s) % 60) }

struct BuildSection: View {
  @EnvironmentObject var model: AppModel
  let manifest: Manifest
  let path: String
  @Binding var seek: Seek?
  let p: Palette
  @Local private var picked: String? = nil

  private func color(_ s: StepState) -> Color {
    switch s {
    case .ok: p.accent
    case .todo: p.sun
    case .fail: p.coral
    }
  }

  var body: some View {
    let m = manifest
    let estimated = m.parts.contains { $0.steps["tts"] != "ok" }
    let slots = m.parts.flatMap(\.slots)
    let median = slots.map(\.wpm).sorted().dropFirst(slots.count / 2).first ?? 0
    VStack(alignment: .leading, spacing: 14) {
      HStack(spacing: 14) {
        Text("\(m.parts.count) phần · \(clock(m.durationS))\(estimated ? " (ước lượng)" : "")")
          .font(.ui(11, weight: .bold)).foregroundStyle(p.ink)
        Text("\(Int((m.okRatio * 100).rounded()))% bước xong").font(.ui(11)).foregroundStyle(p.accent)
        Text("\(Int(median)) từ/phút").font(.ui(11)).foregroundStyle(p.muted)
        Spacer()
        Text("cập nhật \(m.generatedAt)").font(.ui(10))
          .foregroundStyle(m.generatedAt < stamp(daysAgo: 7) ? p.coral : p.muted).lineLimit(1).fixedSize()
        RetroButton(title: "hub.json", symbol: "folder", compact: true) {
          NSWorkspace.shared.activateFileViewerSelecting([URL(fileURLWithPath: path)])
        }
      }
      timeline(m)
      grid(m)
      if let id = picked, let part = m.parts.first(where: { $0.id == id }) {
        partDetail(part, median: median)
      }
    }
  }

  /// One block per part, width ∝ seconds, coloured by its worst step.
  private func timeline(_ m: Manifest) -> some View {
    GeometryReader { geo in
      let total = max(m.parts.reduce(0) { $0 + $1.seconds }, 1)
      HStack(spacing: 1) {
        ForEach(m.parts) { part in
          let c = color(part.state(m.steps))
          let w = max(geo.size.width * part.seconds / total - 1, 2)
          Rectangle().fill(c.opacity(picked == part.id ? 1 : 0.65))
            .overlay(alignment: .leading) {
              if w > 46 { Text(part.id).font(.ui(8, weight: .bold)).foregroundStyle(p.paper).padding(.leading, 3).lineLimit(1) }
            }
            .frame(width: w)
            .contentShape(Rectangle())
            .onTapGesture { pick(part) }
            .help("\(part.title) · \(clock(part.start)) · \(Int(part.seconds))s")
        }
      }
    }
    .frame(height: 26)
    .overlay(Rectangle().stroke(p.line, lineWidth: 1))
  }

  private func grid(_ m: Manifest) -> some View {
    VStack(spacing: 0) {
      HStack(spacing: 6) {
        Text("PHẦN").frame(width: 56, alignment: .leading)
        Text("").frame(maxWidth: .infinity)
        Text("GIÂY").frame(width: 40, alignment: .trailing)
        ForEach(m.steps, id: \.self) { s in Text(s.uppercased()).frame(width: 52) }
      }
      .font(.ui(8, weight: .bold)).foregroundStyle(p.muted).padding(.vertical, 4)
      ForEach(m.parts) { part in
        HStack(spacing: 6) {
          Text(part.id).font(.ui(10, weight: .semibold)).foregroundStyle(p.sun).frame(width: 56, alignment: .leading)
          Text(part.title + (part.issues.isEmpty ? "" : "  ⚠ \(part.issues.joined(separator: "; "))"))
            .font(.ui(10)).foregroundStyle(part.issues.isEmpty ? p.ink : p.coral).lineLimit(1)
            .frame(maxWidth: .infinity, alignment: .leading)
          Text("\(Int(part.seconds.rounded()))").font(.ui(10)).foregroundStyle(p.muted).frame(width: 40, alignment: .trailing)
          ForEach(m.steps, id: \.self) { s in
            let raw = part.steps[s]
            Rectangle().fill(raw == "skip" ? Color.clear : color(StepState(raw)))
              .overlay(Rectangle().stroke(p.line, lineWidth: raw == "skip" ? 1 : 0))
              .frame(width: 40, height: 10).frame(width: 52)
              .help("\(s): \(raw ?? "todo")")
          }
        }
        .padding(.vertical, 3)
        .bg(picked == part.id ? p.paperDeep : Color.clear)
        .contentShape(Rectangle())
        .onTapGesture { pick(part) }
      }
    }
  }

  private func partDetail(_ part: ManifestPart, median: Double) -> some View {
    let speakers = Array(Set(manifest.parts.flatMap { $0.slots.map(\.speaker) })).sorted()
    return VStack(alignment: .leading, spacing: 8) {
      HStack {
        Text("\(part.id) · \(part.title)").font(.ui(11, weight: .bold)).foregroundStyle(p.accent)
        Spacer()
        if let cs = part.contactSheet {
          RetroButton(title: "Contact sheet", symbol: "photo", compact: true) {
            NSWorkspace.shared.open(URL(fileURLWithPath: model.absolute(cs)))
          }
        }
      }
      if let cs = part.contactSheet, let img = NSImage(contentsOfFile: model.absolute(cs)) {
        Image(nsImage: img).resizable().aspectRatio(contentMode: .fit).frame(maxHeight: 220)
      }
      ForEach(Array(part.slots.enumerated()), id: \.offset) { _, s in
        let off = median > 0 && (s.wpm > median * 1.25 || s.wpm < median * 0.75)
        HStack(alignment: .firstTextBaseline, spacing: 8) {
          Text(clock(s.start)).font(.ui(10)).foregroundStyle(p.muted).frame(width: 40, alignment: .leading)
          Text(s.speaker).font(.ui(10, weight: .bold)).foregroundStyle((speakers.firstIndex(of: s.speaker) ?? 0) % 2 == 0 ? p.sun : p.accent)
            .frame(width: 44, alignment: .leading)
          Text(s.text).font(.ui(11)).foregroundStyle(p.ink).textSelection(.enabled)
            .frame(maxWidth: .infinity, alignment: .leading)
          Text(String(format: "%.1fs", s.end - s.start)).font(.ui(10)).foregroundStyle(p.muted).frame(width: 40, alignment: .trailing)
          Text("\(Int(s.wpm))").font(.ui(10, weight: off ? .bold : .regular)).foregroundStyle(off ? p.coral : p.muted)
            .frame(width: 34, alignment: .trailing)
            .help(off ? "Lệch > 25% so với tốc độ trung vị \(Int(median)) từ/phút" : "từ/phút")
        }
        .contentShape(Rectangle())
        .onTapGesture { seek = Seek(t: s.start, n: (seek?.n ?? 0) + 1) }
      }
    }
    .padding(10)
    .bg(p.paperDeep)
  }

  private func pick(_ part: ManifestPart) {
    picked = picked == part.id ? nil : part.id
    seek = Seek(t: part.start, n: (seek?.n ?? 0) + 1)
  }
}
