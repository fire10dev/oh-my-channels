import AppKit
import AVKit
import ImageIO
import SwiftUI

// MARK: - Studio workspace: one video = one project, full window.
// Layout: top bar (pages) · left scene bin · centre page · right inspector + AI · bottom timeline.

enum StudioPage: String, CaseIterable, Identifiable {
  case brainstorm, script, storyboard, shots, title, edit, publish
  var id: String { rawValue }
  var step: Step { Step(rawValue: rawValue)! }
  var label: String {
    switch self {
    case .brainstorm: "Brainstorm"
    case .script: "Kịch bản"
    case .storyboard: "Storyboard"
    case .shots: "Shot"
    case .title: "Title & Thumbnail"
    case .edit: "Dựng"
    case .publish: "Đăng"
    }
  }
  var symbol: String {
    switch self {
    case .brainstorm: "lightbulb"
    case .script: "text.alignleft"
    case .storyboard: "square.grid.3x2"
    case .shots: "camera.viewfinder"
    case .title: "textformat.size"
    case .edit: "film.stack"
    case .publish: "paperplane"
    }
  }
  /// Stage whose studio.json actions/prompts show on this page.
  var stage: Stage {
    switch self {
    case .brainstorm: .idea
    case .script: .script
    case .storyboard, .shots: .assets
    case .edit: .render
    case .title, .publish: .ready
    }
  }
  static func `for`(_ s: Stage) -> StudioPage {
    switch s {
    case .idea: .brainstorm
    case .script: .script
    case .assets: .storyboard
    case .render: .edit
    case .ready, .published: .publish
    }
  }

  /// Built-in AI buttons: work on any channel, since the agent edits project.json.
  var prompts: [StudioPrompt] {
    let P = { (l: String, t: String) in StudioPrompt(stage: "*", label: l, text: t) }
    switch self {
    case .brainstorm: return [
      P("Brainstorm 10 góc", "Đọc {project} và tài liệu/bible của kênh. Brainstorm 10 góc kể cho video {code}, thêm vào ideas[] (by = tên bạn). Không xoá ý cũ."),
      P("Chấm & ghim 3 ý", "Chấm từng idea trong {project} (hook, độ mới, khả thi; thang 10), ghi '[8/10] lý do' vào đầu text, đặt pinned=true cho 3 ý tốt nhất."),
      P("Viết logline", "Từ các idea pinned trong {project}, viết logline 1 câu (lời hứa của video) vào field logline."),
    ]
    case .script: return [
      P("Viết nháp từ ý đã ghim", "Viết kịch bản {code} từ logline + idea pinned trong {project}: chia scenes[] (id, title, vo), mỗi cảnh 15–40 giây, đúng giọng kênh, status=draft. Giữ cảnh đã có status=ok."),
      P("Hook mạnh hơn", "Viết lại vo của cảnh đầu trong {project} để hook mạnh hơn. Ghi 3 phương án vào ideas[], áp phương án tốt nhất."),
      P("Soát cảnh đang chọn", "Soát cảnh {scene} trong {project}: câu dài, ý thừa, chỗ giảng đạo. Sửa vo trực tiếp, nói ngắn đã sửa gì."),
      P("Rút gọn 20%", "Rút gọn vo mọi cảnh trong {project} khoảng 20%, giữ ý chính và hook."),
    ]
    case .storyboard: return [
      P("Mô tả hình mọi cảnh", "Điền visual (mô tả khung storyboard: bố cục, nhân vật, ánh sáng) cho mọi scene chưa có trong {project}, theo phong cách hình của kênh."),
      P("Vẽ storyboard", "Gen ảnh key frame cho các scene chưa có image trong {project} bằng công cụ gen ảnh của kênh, lưu storyboard/<id>.png trong thư mục dự án và ghi field image."),
    ]
    case .shots: return [
      P("Chia cảnh thành shot", "Chia scene {scene} trong {project} thành 3–8 shots (id '<scene>-<n>', prompt, camera wide|medium|close|insert, seconds) khớp với vo."),
      P("Vẽ shot cảnh này", "Gen ảnh cho các shot của scene {scene} chưa có image trong {project}, lưu shots/<id>.png và ghi field image."),
    ]
    case .title: return [
      P("10 title", "Viết 10 title (< 70 ký tự, đa dạng: tò mò, con số, đối đầu, bí mật) vào titles[] của {project} dựa trên logline + kịch bản."),
      P("3 concept thumbnail", "Đề xuất 3 thumbnail vào thumbnails[] của {project}: text = chữ to (≤ 4 từ) + mô tả bố cục. Gen được ảnh thì lưu thumbs/<id>.png và ghi path."),
    ]
    case .edit: return [
      P("Dựng theo project", "Dựng/render {code} theo {project} bằng pipeline có sẵn của kênh. Báo lệnh đã chạy và file đầu ra; ghi ythub log {code} … --kind render."),
      P("Vì sao render lỗi?", "Tìm log render gần nhất của {code} trong thư mục kênh, nêu nguyên nhân và cách sửa."),
    ]
    case .publish: return [
      P("Mô tả + tag + chương", "Viết description (mở đầu 2 câu, chương theo scenes trong {project} với mốc thời gian), tags, bình luận ghim cho {code}; ghi bằng ythub set {code} --description … --tags … --pinned-comment …"),
      P("Soát trước khi đăng", "Soát {code} trước khi đăng: title, thumbnail, mô tả có ghi công nhạc/asset (ythub show {code}), file video tồn tại. Liệt kê việc còn thiếu."),
    ]
    }
  }
}

/// project.json on disk, re-read when an agent changes it (polled every 2 s).
@MainActor
final class ProjectStore: ObservableObject {
  @Published var project: Project
  @Published var exists = false
  @Published var loadError: String?
  let dir: String
  private var mtime: Date?
  private var timer: Timer?

  var path: String { (dir as NSString).appendingPathComponent("project.json") }

  init(dir: String, code: String) {
    self.dir = dir
    project = Project(code: code)
    load()
    timer = Timer.scheduledTimer(withTimeInterval: 2, repeats: true) { [weak self] _ in
      MainActor.assumeIsolated { self?.poll() }
    }
  }

  func stop() { timer?.invalidate(); timer = nil }

  private func modDate() -> Date? {
    (try? FileManager.default.attributesOfItem(atPath: path))?[.modificationDate] as? Date
  }

  func load() {
    guard let d = FileManager.default.contents(atPath: path) else { exists = false; return }
    do {
      project = try Project.decode(d)
      exists = true
      loadError = nil
    } catch {
      loadError = "\(error)"
    }
    mtime = modDate()
  }

  private func poll() {
    if let m = modDate(), m != mtime { load() }
  }

  func save() {
    do {
      try FileManager.default.createDirectory(atPath: dir, withIntermediateDirectories: true)
      try project.encoded().write(to: URL(fileURLWithPath: path), options: .atomic)
      exists = true
      mtime = modDate()
    } catch {
      loadError = "Lưu lỗi: \(error)"
    }
  }

  func create(_ p: Project) { project = p; save() }

  func abs(_ rel: String) -> String {
    rel.isEmpty || rel.hasPrefix("/") ? rel : (dir as NSString).appendingPathComponent(rel)
  }

  /// Copies a picked image into the project (sub = storyboard | shots | thumbs), returns the relative path.
  func importImage(_ url: URL, sub: String, name: String) -> String? {
    let folder = (dir as NSString).appendingPathComponent(sub)
    try? FileManager.default.createDirectory(atPath: folder, withIntermediateDirectories: true)
    let rel = "\(sub)/\(name).\(url.pathExtension.lowercased())"
    let dest = abs(rel)
    try? FileManager.default.removeItem(atPath: dest)
    do { try FileManager.default.copyItem(atPath: url.path, toPath: dest) } catch { return nil }
    ImageCache.shared.forget(dest)
    return rel
  }
}

/// Small downsampled images for cards and the timeline, keyed by path + mtime.
final class ImageCache {
  static let shared = ImageCache()
  private let cache = NSCache<NSString, NSImage>()

  func image(_ path: String, max: Int = 640) -> NSImage? {
    guard !path.isEmpty, let mod = (try? FileManager.default.attributesOfItem(atPath: path))?[.modificationDate] as? Date
    else { return nil }
    let key = "\(path)|\(mod.timeIntervalSince1970)|\(max)" as NSString
    if let i = cache.object(forKey: key) { return i }
    guard let src = CGImageSourceCreateWithURL(URL(fileURLWithPath: path) as CFURL, nil),
          let cg = CGImageSourceCreateThumbnailAtIndex(src, 0, [
            kCGImageSourceCreateThumbnailFromImageAlways: true, kCGImageSourceThumbnailMaxPixelSize: max,
            kCGImageSourceCreateThumbnailWithTransform: true] as CFDictionary)
    else { return nil }
    let img = NSImage(cgImage: cg, size: NSSize(width: cg.width, height: cg.height))
    cache.setObject(img, forKey: key)
    return img
  }
  func forget(_ path: String) { cache.removeAllObjects() }
}

func pickImage() -> URL? {
  let panel = NSOpenPanel()
  panel.allowedContentTypes = [.png, .jpeg, .webP, .heic]
  panel.allowsMultipleSelection = false
  return panel.runModal() == .OK ? panel.url : nil
}

// MARK: - Workspace

struct StudioWorkspace: View {
  @EnvironmentObject var model: AppModel
  @EnvironmentObject var jobs: JobCenter
  @Environment(\.colorScheme) private var scheme
  @StateObject private var store: ProjectStore
  let videoId: Int64
  let onClose: () -> Void
  @Local private var page: StudioPage
  @Local private var selected: String? = nil
  @Local private var selectedShot: String? = nil
  @Local private var confirming: StudioAction? = nil
  @Local private var playTime = 0.0
  @Local private var animatic = false
  @Local private var seekReq: Seek? = nil

  init(video: Video, dir: String, onClose: @escaping () -> Void) {
    videoId = video.id
    self.onClose = onClose
    _store = StateObject(wrappedValue: ProjectStore(
      dir: (dir as NSString).appendingPathComponent("videos/\(video.code)"), code: video.code))
    let forced = UserDefaults.standard.string(forKey: "studioPage").flatMap(StudioPage.init(rawValue:))
    _page = Local(wrappedValue: forced ?? StudioPage.for(video.stage))
  }

  private var video: Video { model.videos.first { $0.id == videoId } ?? Video() }
  private var scene: StoryScene? { store.project.scenes.first { $0.id == selected } ?? store.project.scenes.first }
  private var sceneIndex: Int? { store.project.scenes.firstIndex { $0.id == (scene?.id ?? "") } }
  private var aspect: CGFloat { video.kind == .short ? 9.0 / 16.0 : 16.0 / 9.0 }

  var body: some View {
    let p = Palette.forScheme(scheme)
    VStack(spacing: 0) {
      topBar(p)
      HRail(p: p)
      if !store.exists {
        ProgressView("Đang mở dự án…").frame(maxWidth: .infinity, maxHeight: .infinity)
          .onAppear { autoImport() }
      } else {
        HStack(spacing: 0) {
          sceneBin(p).frame(width: 230)
          VRail(p: p)
          VStack(spacing: 0) {
            banner(p)
            HRail(p: p)
            centre(p).frame(maxWidth: .infinity, maxHeight: .infinity)
            HRail(p: p)
            timeline(p).frame(height: page == .edit ? 150 : 96)
          }
          VRail(p: p)
          rightPanel(p).frame(width: 400)
        }
      }
    }
    .background(p.paper)
    .onChange(of: store.project) { _, _ in store.save() }
    .onDisappear { store.stop() }
    .confirmationDialog("Chạy \(confirming?.label ?? "")?", isPresented: Binding(
      get: { confirming != nil }, set: { if !$0 { confirming = nil } })) {
      Button("Chạy") { if let a = confirming { run(a) } }
    } message: {
      Text(confirming.map { shellLine($0.run.map { expand($0, vars) }) } ?? "")
    }
  }

  private var vars: [String: String] {
    var v = model.studioVars(video)
    v["project"] = store.path
    v["project_dir"] = store.dir
    v["scene"] = scene?.id ?? ""
    return v
  }

  // MARK: top bar

  private func topBar(_ p: Palette) -> some View {
    HStack(spacing: 8) {
      RetroButton(title: "Hub", symbol: "chevron.left", compact: true) { onClose() }
        .keyboardShortcut(.escape, modifiers: [])
      Text(video.code).font(.ui(12, weight: .bold)).foregroundStyle(p.ink).fixedSize()
        .help("\(model.channel(video.channelId)?.name ?? "") · \(video.title)")
      VRail(p: p).frame(height: 26)
      HStack(spacing: 2) {
        ForEach(Array(StudioPage.allCases.enumerated()), id: \.element) { n, pg in
          let ok = isDone(pg)
          if n > 0 { Image(systemName: "chevron.right").font(.system(size: 8)).foregroundStyle(p.muted) }
          Button { page = pg } label: {
            HStack(spacing: 5) {
              Text("\(n + 1)").font(.ui(10, weight: .bold))
                .frame(width: 16, height: 16)
                .foregroundStyle(page == pg ? p.accent : p.paperDeep)
                .bg(page == pg ? p.paperDeep : (ok ? p.accent : p.muted))
              Text(pg.label).font(.ui(11, weight: page == pg ? .bold : .regular))
              if ok { Image(systemName: "checkmark").font(.system(size: 9, weight: .bold)) }
            }
            .foregroundStyle(page == pg ? p.paperDeep : p.ink)
            .padding(.horizontal, 10).frame(height: 30)
            .background(Rectangle().fill(page == pg ? p.accent : Color.clear))
            .contentShape(Rectangle())
          }
          .buttonStyle(.plain)
        }
      }
      .padding(3)
      .background(Rectangle().fill(p.paperDeep))
      .fixedSize()
      .layoutPriority(2)
      Color.clear.frame(minWidth: 8, maxWidth: .infinity, maxHeight: .infinity)
        .contentShape(Rectangle()).gesture(WindowDragGesture())
      if store.exists {
        Text("\(store.project.scenes.count) cảnh · \(store.project.shotCount) shot · \(clock(store.project.totalSeconds))")
          .font(.ui(10)).foregroundStyle(p.muted).fixedSize()
      }
      Picker("", selection: Binding(get: { video.stage }, set: { s in var v = video; v.stage = s; model.save(v) })) {
        ForEach(Stage.allCases) { s in Text(s.label).tag(s) }
      }
      .labelsHidden().frame(width: 150).help("Stage của video trong Hub")
      if jobs.running > 0 {
        Text("● \(jobs.running) đang chạy").font(.ui(10, weight: .bold)).foregroundStyle(p.sun)
      }
      RetroButton(symbol: "folder", compact: true) { NSWorkspace.shared.open(URL(fileURLWithPath: store.dir)) }
        .help("Mở thư mục dự án")
    }
    .padding(.leading, 84).padding(.trailing, 14)
    .frame(height: 56)
    .bg(p.menubar)
  }

  // MARK: left — scene bin

  private func sceneBin(_ p: Palette) -> some View {
    VStack(alignment: .leading, spacing: 0) {
      HStack {
        SectionLabel(text: "Cảnh", p: p)
        Spacer()
        RetroButton(symbol: "plus", compact: true) { addScene() }.help("Thêm cảnh")
      }
      .padding(10)
      ScrollView {
        LazyVStack(spacing: 2) {
          ForEach(Array(store.project.scenes.enumerated()), id: \.element.id) { i, s in
            let on = s.id == scene?.id
            HStack(spacing: 8) {
              thumbView(sceneImage(s), w: 64, p: p)
              VStack(alignment: .leading, spacing: 2) {
                Text("\(i + 1). \(s.title.isEmpty ? "Cảnh" : s.title)").font(.ui(11, weight: .bold))
                  .foregroundStyle(p.ink).lineLimit(1)
                Text("\(clock(s.duration(wpm: store.project.wpm))) · \(s.shots.count) shot · \(s.status)")
                  .font(.ui(9)).foregroundStyle(p.muted)
              }
              Spacer(minLength: 0)
            }
            .padding(6)
            .background(Rectangle().fill(on ? p.accent.opacity(0.16) : Color.clear))
            .overlay(Rectangle().stroke(on ? p.accent : Color.clear, lineWidth: 1))
            .contentShape(Rectangle())
            .onTapGesture { selected = s.id; selectedShot = nil }
            .contextMenu {
              Button("Lên") { move(i, -1) }.disabled(i == 0)
              Button("Xuống") { move(i, 1) }.disabled(i == store.project.scenes.count - 1)
              Button("Xoá cảnh", role: .destructive) { store.project.scenes.remove(at: i) }
            }
          }
        }
        .padding(.horizontal, 6)
      }
      HRail(p: p)
      VStack(alignment: .leading, spacing: 4) {
        if let e = store.loadError { Text(e).font(.ui(10)).foregroundStyle(p.coral).lineLimit(3) }
        Text("project.json · agent sửa thì app tự đọc lại").font(.ui(9)).foregroundStyle(p.muted)
      }
      .padding(10)
    }
    .bg(p.paperDeep.opacity(0.5))
  }

  private func thumbView(_ rel: String, w: CGFloat, p: Palette) -> some View {
    let img = ImageCache.shared.image(store.abs(rel), max: 320)
    return ZStack {
      Rectangle().fill(p.paperDeep)
      if let img { Image(nsImage: img).resizable().aspectRatio(contentMode: .fill) }
      else { Image(systemName: "photo").font(.system(size: 11)).foregroundStyle(p.line) }
    }
    .frame(width: w, height: w / aspect).clipShape(Rectangle())
    .overlay(Rectangle().stroke(p.line, lineWidth: 1))
  }

  // MARK: bottom — timeline

  private func timeline(_ p: Palette) -> some View {
    let total = max(store.project.totalSeconds, 1)
    return GeometryReader { geo in
      let pxPerS = max((geo.size.width - 24) / total, 0.5)
      ScrollView(.horizontal) {
        VStack(alignment: .leading, spacing: 4) {
          HStack(spacing: 0) {
            ForEach(Array(store.project.scenes.enumerated()), id: \.element.id) { i, s in
              let w = max(CGFloat(s.duration(wpm: store.project.wpm)) * pxPerS, 36)
              let on = s.id == scene?.id
              ZStack(alignment: .bottomLeading) {
                if let img = ImageCache.shared.image(store.abs(sceneImage(s)), max: 320) {
                  Image(nsImage: img).resizable().aspectRatio(contentMode: .fill).frame(width: w, height: 54).clipShape(Rectangle()).opacity(0.85)
                } else {
                  Rectangle().fill(i % 2 == 0 ? p.paperDeep : p.line.opacity(0.5))
                }
                Text("\(i + 1) \(s.title)").font(.ui(9, weight: .bold)).foregroundStyle(p.ink).lineLimit(1)
                  .padding(.horizontal, 4).bg(p.paper.opacity(0.75)).padding(3)
              }
              .frame(width: w, height: 54)
              .overlay(Rectangle().stroke(on ? p.coral : p.line, lineWidth: on ? 2 : 1))
              .contentShape(Rectangle())
              .onTapGesture {
                selected = s.id
                if page == .edit { seekReq = Seek(t: store.project.sceneStarts()[i] + 0.01, n: (seekReq?.n ?? 0) + 1) }
              }
              .help("\(s.title) · \(clock(s.duration(wpm: store.project.wpm)))")
            }
          }
          if page == .edit, let m = model.manifest(videoId: video.id) {
            let slots = m.parts.flatMap(\.slots)
            ZStack(alignment: .leading) {
              ForEach(Array(slots.enumerated()), id: \.offset) { _, sl in
                Text(sl.text).font(.ui(8)).foregroundStyle(p.ink).lineLimit(1)
                  .padding(.horizontal, 3)
                  .frame(width: max(CGFloat(sl.end - sl.start) * pxPerS - 1, 2), height: 22, alignment: .leading)
                  .background(Rectangle().fill(sl.speaker.lowercased().hasPrefix("p") ? p.accent.opacity(0.25) : p.sun.opacity(0.25)))
                  .offset(x: CGFloat(sl.start) * pxPerS)
                  .help("\(sl.speaker): \(sl.text)")
              }
            }
            .frame(width: CGFloat(total) * pxPerS, height: 22, alignment: .leading)
          }
          let step = [5.0, 10, 15, 30, 60, 120, 300, 600].first { $0 * Double(pxPerS) >= 48 } ?? 600
          HStack(spacing: 0) {
            ForEach(Array(stride(from: 0.0, to: total, by: step)), id: \.self) { t in
              Text(clock(t)).font(.ui(8)).foregroundStyle(p.muted)
                .frame(width: CGFloat(step) * pxPerS, alignment: .leading)
            }
          }
        }
        .padding(12)
        .overlay(alignment: .topLeading) {
          if page == .edit {
            Rectangle().fill(p.coral).frame(width: 2).offset(x: 12 + CGFloat(playTime) * pxPerS)
          }
        }
      }
    }
    .bg(p.paperDeep.opacity(0.5))
  }

  // MARK: right — inspector + AI

  private func rightPanel(_ p: Palette) -> some View {
    VStack(spacing: 0) {
      if let i = sceneIndex, [.script, .storyboard, .shots].contains(page) {
        ScrollView {
          VStack(alignment: .leading, spacing: 8) {
            SectionLabel(text: "Inspector · cảnh \(i + 1)", p: p)
            field("Tên cảnh", $store.project.scenes[i].title, p)
            Picker("Trạng thái", selection: $store.project.scenes[i].status) {
              Text("Chưa làm").tag("todo"); Text("Nháp").tag("draft"); Text("Xong").tag("ok")
            }
            .pickerStyle(.segmented).labelsHidden()
            area("Mô tả hình (storyboard)", $store.project.scenes[i].visual, p, h: 70)
            HStack {
              Text("Thời lượng").font(.ui(10)).foregroundStyle(p.muted)
              TextField("tự tính", value: $store.project.scenes[i].seconds, format: .number)
                .textFieldStyle(.plain).font(.ui(11)).padding(4).frame(width: 70).retroField(p)
              Text("giây (trống = theo \(Int(store.project.wpm)) từ/phút)").font(.ui(9)).foregroundStyle(p.muted)
            }
          }
          .padding(12)
        }
        .frame(maxHeight: 280)
        HRail(p: p)
      }
      actionsBar(p)
      AgentChatView(chat: model.chat(for: video), video: video,
                    prompts: (page.prompts + (model.studio(channelId: video.channelId)?.prompts(stage: page.stage) ?? []))
                      .reduce(into: [StudioPrompt]()) { acc, x in if !acc.contains(where: { $0.label == x.label }) { acc.append(x) } },
                    p: p, extraVars: vars,
                    extraContext: "Dự án Studio: \(store.path)\nCảnh đang chọn: \(scene?.id ?? "-")\n\(projectSchemaHelp)")
        .padding(12)
        .frame(maxHeight: .infinity, alignment: .top)
    }
    .bg(p.paperDeep.opacity(0.35))
  }

  /// Channel buttons (studio.json) for this page's stage.
  @ViewBuilder private func actionsBar(_ p: Palette) -> some View {
    let acts = model.studio(channelId: video.channelId)?.actions(stage: page.stage, kind: video.kind) ?? []
    if !acts.isEmpty {
      VStack(alignment: .leading, spacing: 6) {
        SectionLabel(text: "Công cụ của kênh", p: p)
        FlowButtons {
          ForEach(acts) { a in
            RetroButton(title: a.label, symbol: a.symbol ?? "play.fill", compact: true) {
              if a.confirm == true { confirming = a } else { run(a) }
            }
            .help(a.help ?? shellLine(a.run.map { expand($0, vars) }))
          }
        }
      }
      .padding(12)
      HRail(p: p)
    }
  }

  private func run(_ a: StudioAction) {
    guard let dir = model.channelDir(video.channelId) else { return }
    let vs = vars
    let cwd = a.cwd.map { (dir as NSString).appendingPathComponent(expand($0, vs)) } ?? dir
    let v = video
    jobs.start(title: a.label, argv: a.run.map { expand($0, vs) }, cwd: cwd, videoId: v.id,
               env: ["YTHUB_ACTOR": "studio:\(a.id)"]) { job in
      let ok = job.status == .ok
      model.logEvent(v, kind: ok ? (a.kind ?? "note") : "blocker", message: "\(a.label): \(ok ? "xong" : "lỗi") (\(job.seconds)s)",
                     actor: "studio")
      model.reload()
    }
  }

  // MARK: centre pages

  @ViewBuilder private func centre(_ p: Palette) -> some View {
    switch page {
    case .brainstorm: BrainstormPage(store: store, p: p)
    case .script: scriptPage(p)
    case .storyboard:
      if animatic {
        AnimaticView(store: store, aspect: aspect, p: p, start: sceneIndex ?? 0) { animatic = false }
      } else { storyboardPage(p) }
    case .shots: shotsPage(p)
    case .title: TitlePage(store: store, video: video, p: p, aspect: aspect)
    case .edit: editPage(p)
    case .publish: PublishPage(video: video, store: store, p: p)
    }
  }

  private func scriptPage(_ p: Palette) -> some View {
    ScrollViewReader { proxy in
      ScrollView {
        VStack(alignment: .leading, spacing: 14) {
          HStack {
            Text("KỊCH BẢN").font(.ui(11, weight: .bold)).tracking(1).foregroundStyle(p.accent)
            Text("\(store.project.scenes.count) cảnh · \(clock(store.project.totalSeconds))").font(.ui(10)).foregroundStyle(p.muted)
            Spacer()
            if !video.scriptPath.isEmpty {
              RetroButton(title: "File gốc", symbol: "doc.text", compact: true) {
                NSWorkspace.shared.open(URL(fileURLWithPath: model.absolute(video.scriptPath)))
              }
            }
            RetroButton(title: "Thêm cảnh", symbol: "plus", compact: true) { addScene() }
          }
          if !store.project.logline.isEmpty {
            Text("“\(store.project.logline)”").font(.ui(12, weight: .semibold)).foregroundStyle(p.sun).italic()
          }
          ForEach(store.project.scenes.indices, id: \.self) { i in
            let s = store.project.scenes[i]
            let on = s.id == scene?.id
            VStack(alignment: .leading, spacing: 6) {
              HStack(spacing: 8) {
                Text(String(format: "%02d", i + 1)).font(.ui(11, weight: .bold)).foregroundStyle(p.paperDeep)
                  .padding(.horizontal, 5).bg(on ? p.coral : p.muted)
                TextField("Tên cảnh", text: $store.project.scenes[i].title)
                  .textFieldStyle(.plain).font(.ui(13, weight: .bold)).foregroundStyle(p.ink)
                Spacer()
                Text("\(clock(s.duration(wpm: store.project.wpm))) · \(s.vo.split { $0 == " " || $0 == "\n" }.count) từ")
                  .font(.ui(10)).foregroundStyle(p.muted)
              }
              TextEditor(text: $store.project.scenes[i].vo)
                .font(.system(size: 13)).foregroundStyle(p.ink).scrollContentBackground(.hidden)
                .frame(minHeight: max(60, CGFloat(s.vo.count / 105 + s.vo.filter { $0 == "\n" }.count + 2) * 17))
                .padding(6).retroField(p)
            }
            .padding(10)
            .overlay(Rectangle().stroke(on ? p.coral : Color.clear, lineWidth: 1))
            .contentShape(Rectangle())
            .onTapGesture { selected = s.id }
            .id(s.id)
          }
        }
        .padding(22).frame(maxWidth: 860)
        .frame(maxWidth: .infinity)
      }
      .onChange(of: selected) { _, id in if let id { withAnimation { proxy.scrollTo(id, anchor: .top) } } }
    }
  }

  private func storyboardPage(_ p: Palette) -> some View {
    ScrollView {
      VStack(alignment: .leading, spacing: 12) {
        HStack {
          Text("STORYBOARD").font(.ui(11, weight: .bold)).tracking(1).foregroundStyle(p.accent)
          Text("\(store.project.scenes.filter { !$0.keyImage.isEmpty }.count)/\(store.project.scenes.count) có hình")
            .font(.ui(10)).foregroundStyle(p.muted)
          Spacer()
          RetroButton(title: "Xem animatic", symbol: "play.rectangle.fill", primary: true) { animatic = true }
            .help("Chạy lướt cả video bằng ảnh storyboard + lời thoại, đúng thời lượng từng cảnh (trước khi render)")
        }
        LazyVGrid(columns: [GridItem(.adaptive(minimum: video.kind == .short ? 170 : 260), spacing: 14)], spacing: 16) {
          ForEach(store.project.scenes.indices, id: \.self) { i in
            let s = store.project.scenes[i]
            let on = s.id == scene?.id
            VStack(alignment: .leading, spacing: 5) {
              ZStack {
                Rectangle().fill(p.paperDeep)
                if let img = ImageCache.shared.image(store.abs(sceneImage(s))) {
                  Image(nsImage: img).resizable().aspectRatio(contentMode: .fill)
                } else {
                  Text(s.visual.isEmpty ? "Chưa có hình — bấm \"Vẽ storyboard\" ở khung AI hoặc chọn ảnh" : s.visual)
                    .font(.ui(10)).foregroundStyle(p.muted).multilineTextAlignment(.center).padding(10)
                }
              }
              .aspectRatio(aspect, contentMode: .fit).clipShape(Rectangle())
              .overlay(Rectangle().stroke(on ? p.coral : p.line, lineWidth: on ? 2 : 1))
              HStack {
                Text("\(i + 1). \(s.title)").font(.ui(11, weight: .bold)).foregroundStyle(p.ink).lineLimit(1)
                Spacer()
                Text(clock(s.duration(wpm: store.project.wpm))).font(.ui(10)).foregroundStyle(p.muted)
              }
              Text(s.vo).font(.ui(10)).foregroundStyle(p.muted).lineLimit(2)
              HStack(spacing: 6) {
                RetroButton(title: "Chọn ảnh", symbol: "photo", compact: true) {
                  if let u = pickImage(), let rel = store.importImage(u, sub: "storyboard", name: s.id) {
                    store.project.scenes[i].image = rel
                  }
                }
                RetroButton(title: "Gen lại", symbol: "wand.and.stars", compact: true) { regenScene(s) }
                RetroButton(title: "Shot", symbol: "camera.viewfinder", compact: true) { selected = s.id; page = .shots }
              }
            }
            .contentShape(Rectangle())
            .onTapGesture { selected = s.id }
          }
        }
      }
      .padding(22)
    }
  }

  private func shotsPage(_ p: Palette) -> some View {
    Group {
      if let si = sceneIndex {
        let s = store.project.scenes[si]
        let shot = s.shots.first { $0.id == selectedShot } ?? s.shots.first
        HStack(spacing: 0) {
          VStack(alignment: .leading, spacing: 10) {
            HStack {
              Text("SHOT · CẢNH \(si + 1) \(s.title)").font(.ui(11, weight: .bold)).tracking(1).foregroundStyle(p.accent)
              Spacer()
              RetroButton(title: "Thêm shot", symbol: "plus", compact: true) {
                let id = "\(s.id)-\(s.shots.count + 1)"
                store.project.scenes[si].shots.append(Shot(id: id))
                selectedShot = id
              }
            }
            ZStack {
              Rectangle().fill(p.paperDeep)
              if let shot, let img = ImageCache.shared.image(store.abs(shot.image.isEmpty ? "shots/\(shot.id).jpg" : shot.image), max: 1600) {
                Image(nsImage: img).resizable().aspectRatio(contentMode: .fit)
              } else {
                Text(shot?.prompt.isEmpty == false ? shot!.prompt : "Chưa có hình cho shot này")
                  .font(.ui(12)).foregroundStyle(p.muted).multilineTextAlignment(.center).padding(30)
              }
            }
            .aspectRatio(aspect, contentMode: .fit)
            .frame(maxWidth: .infinity)
            .overlay(Rectangle().stroke(p.line, lineWidth: 1))
            if let shot, let k = s.shots.firstIndex(where: { $0.id == shot.id }) {
              HStack(spacing: 8) {
                Spacer().frame(width: 0)
                Text("giây").font(.ui(10)).foregroundStyle(p.muted)
                TextField("0", value: $store.project.scenes[si].shots[k].seconds, format: .number)
                  .textFieldStyle(.plain).font(.ui(11)).padding(4).frame(width: 60).retroField(p)
                Spacer()
                RetroButton(title: "Chọn ảnh", symbol: "photo", compact: true) {
                  if let u = pickImage(), let rel = store.importImage(u, sub: "shots", name: shot.id) {
                    store.project.scenes[si].shots[k].image = rel
                  }
                }
                RetroButton(symbol: "trash", compact: true) { store.project.scenes[si].shots.remove(at: k) }
              }
              CameraChips(camera: $store.project.scenes[si].shots[k].camera, p: p)
              area("Prompt khung hình", $store.project.scenes[si].shots[k].prompt, p, h: 70)
            }
          }
          .padding(22)
          VRail(p: p)
          ScrollView {
            VStack(spacing: 6) {
              ForEach(s.shots) { sh in
                let on = sh.id == shot?.id
                HStack(spacing: 8) {
                  thumbView(sh.image.isEmpty ? "shots/\(sh.id).jpg" : sh.image, w: 90, p: p)
                  VStack(alignment: .leading, spacing: 2) {
                    Text("\(sh.id) \(sh.camera)").font(.ui(10, weight: .bold)).foregroundStyle(on ? p.coral : p.sun)
                    Text(sh.prompt).font(.ui(10)).foregroundStyle(p.ink).lineLimit(3)
                  }
                  Spacer(minLength: 0)
                }
                .padding(4)
                .overlay(Rectangle().stroke(on ? p.coral : Color.clear, lineWidth: 1))
                .contentShape(Rectangle())
                .onTapGesture { selectedShot = sh.id }
              }
              if s.shots.isEmpty {
                Text("Chưa có shot. Bấm \"Chia cảnh thành shot\" ở khung AI.").font(.ui(11)).foregroundStyle(p.muted).padding()
              }
            }
            .padding(10)
          }
          .frame(width: 260)
        }
      } else {
        Text("Chưa có cảnh nào").font(.ui(12)).foregroundStyle(p.muted).frame(maxWidth: .infinity, maxHeight: .infinity)
      }
    }
  }

  private func editPage(_ p: Palette) -> some View {
    let cfg = model.studio(channelId: video.channelId)
    let file = (video.filePath as NSString).expandingTildeInPath
    return ScrollView {
      VStack(alignment: .leading, spacing: 16) {
        HStack {
          Text("DỰNG").font(.ui(11, weight: .bold)).tracking(1).foregroundStyle(p.accent)
          Spacer()
          ForEach(cfg?.editors ?? []) { e in
            RetroButton(title: e.label, symbol: "rectangle.and.pencil.and.ellipsis", primary: true) { openEditor(e) }
          }
        }
        if !video.filePath.isEmpty, FileManager.default.fileExists(atPath: file) {
          SyncedPlayer(url: URL(fileURLWithPath: file), time: $playTime, seek: seekReq)
            .aspectRatio(aspect, contentMode: .fit).frame(maxWidth: .infinity, maxHeight: 460)
            .clipShape(Rectangle()).id(file)
          if let i = store.project.sceneStarts().lastIndex(where: { $0 <= playTime }) {
            let s = store.project.scenes[i]
            HStack(alignment: .top, spacing: 10) {
              Text("\(clock(playTime))").font(.term(12, weight: .bold)).foregroundStyle(p.accent)
              VStack(alignment: .leading, spacing: 3) {
                Text("Cảnh \(i + 1) · \(s.title)").font(.ui(12, weight: .bold)).foregroundStyle(p.ink)
                Text(s.vo).font(.ui(11)).foregroundStyle(p.muted).lineLimit(3)
              }
            }
          }
        } else {
          Text("Chưa có file render. Bấm nút render của kênh (khung phải) hoặc \"Dựng theo project\".")
            .font(.ui(11)).foregroundStyle(p.muted)
        }
        if let m = model.manifest(videoId: video.id), let path = model.manifestPath(videoId: video.id) {
          BuildSection(manifest: m, path: path, seek: .constant(nil), p: p)
        }
        if (cfg?.editors ?? []).isEmpty {
          Text("Kênh chưa khai báo editor (Remotion/HyperFrames) trong studio.json → editors.").font(.ui(10)).foregroundStyle(p.muted)
        }
        ForEach(jobs.jobs(videoId: video.id).prefix(4)) { j in JobView(job: j, p: p) }
      }
      .padding(22)
    }
  }

  private func openEditor(_ e: StudioEditor) {
    guard let dir = model.channelDir(video.channelId) else { return }
    if let j = jobs.jobs.first(where: { $0.isEditor && $0.title == e.label && $0.status == .running }), let u = j.url {
      EditorWindows.show(url: u, title: e.label); return
    }
    jobs.jobs.filter { $0.isEditor && $0.status == .running }.forEach(jobs.stop)
    var vs = vars
    vs["port"] = "\(Int.random(in: 3100...3999))"
    let cwd = e.cwd.map { (dir as NSString).appendingPathComponent(expand($0, vs)) } ?? dir
    let job = jobs.start(title: e.label, argv: e.run.map { expand($0, vs) }, cwd: cwd, videoId: video.id, isEditor: true)
    if let u = e.url { job.url = expand(u, vs) }
    waitAndOpen(job, e.label, 120)
  }

  private func waitAndOpen(_ job: Job, _ label: String, _ tries: Int) {
    DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
      guard job.status == .running else { return }
      // The server answers before it prints a URL when we passed one ourselves; probe it.
      if let u = job.url, let url = URL(string: u) {
        URLSession.shared.dataTask(with: url) { _, resp, _ in
          DispatchQueue.main.async {
            if resp != nil { EditorWindows.show(url: u, title: label) } else if tries > 0 { waitAndOpen(job, label, tries - 1) }
          }
        }.resume()
      } else if tries > 0 { waitAndOpen(job, label, tries - 1) }
    }
  }

  // MARK: pipeline — what is done, what to do now

  private var videoFile: String { video.filePath.isEmpty ? "" : model.absolute(video.filePath) }
  private var hasVideoFile: Bool { !videoFile.isEmpty && FileManager.default.fileExists(atPath: videoFile) }

  private func isDone(_ pg: StudioPage) -> Bool {
    store.exists && store.project.done(pg.step, videoFile: hasVideoFile, published: video.stage == .published)
  }

  private var projectContext: String {
    "Dự án Studio: \(store.path)\nCảnh đang chọn: \(scene?.id ?? "-")\n\(projectSchemaHelp)"
  }

  private func askAI(_ text: String) {
    guard let dir = model.channelDir(video.channelId) else { return }
    let v = video
    let ctx = agentContext(video: v, channel: model.channel(v.channelId), channelDir: dir) + "\n" + projectContext
    model.chat(for: v).send(expand(text, vars), context: ctx, cwd: dir, actor: "agent:studio") { b, s in
      model.setFact(v, key: "agent_session_\(b.rawValue)", value: s)
    }
  }

  private func ai(_ label: String) -> () -> Void {
    let text = page.prompts.first { $0.label == label }?.text ?? label
    return { askAI(text) }
  }

  private var imageStyle: String { model.studio(channelId: video.channelId)?.imageStyle ?? "" }
  private var aiBusy: Bool { model.chat(for: video).busy }

  /// The bar on top of every page: is this step done, and the one or two buttons that move it forward.
  private func banner(_ p: Palette) -> some View {
    let ok = isDone(page)
    let pj = store.project
    var title = "", hint = ""
    var buttons: [(String, String, Bool, () -> Void)] = []   // label, symbol, primary, action
    switch page {
    case .brainstorm:
      title = ok ? "Đã có hướng cho video" : "Bước 1 · Tìm hướng cho video"
      hint = "AI đưa 10 góc kể → bạn ghim ý hay → AI viết logline 1 câu."
      buttons = [("Brainstorm 10 góc với AI", "sparkles", true, ai("Brainstorm 10 góc")),
                 ("Viết logline từ ý đã ghim", "text.quote", false, ai("Viết logline"))]
    case .script:
      title = pj.scenes.isEmpty ? "Bước 2 · Chưa có kịch bản" : "Kịch bản · \(pj.scenes.count) cảnh · \(clock(pj.totalSeconds))"
      hint = pj.scenes.isEmpty ? "AI viết nháp chia cảnh từ logline và ý đã ghim. Sau đó bạn sửa trực tiếp từng cảnh bên dưới."
        : "Sửa trực tiếp từng cảnh bên dưới. Chọn một cảnh rồi nhờ AI soát."
      buttons = pj.scenes.isEmpty ? [("Viết kịch bản bằng AI", "sparkles", true, ai("Viết nháp từ ý đã ghim"))]
        : [("AI soát cảnh đang chọn", "sparkles", true, ai("Soát cảnh đang chọn")), ("Hook mạnh hơn", "bolt", false, ai("Hook mạnh hơn"))]
    case .storyboard:
      let missing = pj.imageQueue(style: "").count
      title = missing == 0 ? "Storyboard đủ hình (\(pj.scenes.count) cảnh)" : "Bước 3 · Còn \(missing)/\(pj.scenes.count) cảnh chưa có hình"
      hint = "Gen ảnh chạy bằng agy (Nano Banana), không tốn token Claude. Ảnh hiện dần khi xong. Muốn đổi một cảnh: bấm vào thẻ → Gen lại hoặc Chọn ảnh."
      if missing > 0 { buttons.append(("Gen ảnh \(missing) cảnh còn thiếu", "wand.and.stars", true, genSceneImages)) }
      if hasVideoFile && missing > 0 { buttons.append(("Lấy khung hình từ bản render", "film", false, grabFrames)) }
      if pj.scenes.contains(where: { $0.visual.isEmpty }) { buttons.append(("AI mô tả hình mọi cảnh", "sparkles", missing == 0, ai("Mô tả hình mọi cảnh"))) }
    case .shots:
      let s = scene
      let missing = s.map { pj.shotQueue(scene: $0.id, style: "").count } ?? 0
      title = (s?.shots.isEmpty ?? true) ? "Bước 4 · Cảnh \((sceneIndex ?? 0) + 1) chưa chia shot" : "Cảnh \((sceneIndex ?? 0) + 1) · \(s?.shots.count ?? 0) shot"
      hint = "Chọn cảnh ở cột trái. AI chia cảnh thành shot (góc máy, giây, prompt) → gen ảnh từng shot."
      if s?.shots.isEmpty ?? true { buttons.append(("AI chia cảnh thành shot", "sparkles", true, ai("Chia cảnh thành shot"))) }
      if missing > 0 { buttons.append(("Gen ảnh \(missing) shot", "wand.and.stars", !(s?.shots.isEmpty ?? true), genShotImages)) }
    case .title:
      title = ok ? "Đã chọn title và thumbnail" : "Bước 5 · Chọn title và thumbnail"
      hint = "AI đưa 10 title và 3 concept thumbnail. Bấm ⭘ để chọn title, bấm ảnh để chọn thumbnail. Xem trước bên phải giống feed YouTube."
      buttons = [("AI viết 10 title", "sparkles", true, ai("10 title")), ("AI 3 concept thumbnail", "photo", false, ai("3 concept thumbnail"))]
    case .edit:
      title = hasVideoFile ? "Bản dựng: \((videoFile as NSString).lastPathComponent)" : "Bước 6 · Chưa có bản dựng"
      hint = "Player đồng bộ với timeline bên dưới: bấm cảnh để nhảy tới. Sửa tay chi tiết trong editor của kênh."
      for a in (model.studio(channelId: video.channelId)?.actions(stage: .render, kind: video.kind) ?? []).prefix(2) {
        buttons.append((a.label, a.symbol ?? "play.fill", buttons.isEmpty, { if a.confirm == true { confirming = a } else { run(a) } }))
      }
      for e in model.studio(channelId: video.channelId)?.editors ?? [] {
        buttons.append((e.label, "rectangle.and.pencil.and.ellipsis", false, { openEditor(e) }))
      }
      if buttons.isEmpty { buttons.append(("AI dựng theo project", "sparkles", true, ai("Dựng theo project"))) }
    case .publish:
      title = video.stage == .published ? "Đã đăng" : "Bước 7 · Đăng lên YouTube"
      hint = "AI viết mô tả + tag + chương. Checklist xanh hết thì upload (nút của kênh, luôn hỏi lại trước khi gửi)."
      buttons = [("AI viết mô tả + tag + chương", "sparkles", true, ai("Mô tả + tag + chương"))]
      for a in model.studio(channelId: video.channelId)?.actions(stage: .ready, kind: video.kind) ?? [] {
        buttons.append((a.label, a.symbol ?? "icloud.and.arrow.up", false, { confirming = a }))
      }
    }
    let running = jobs.jobs(videoId: video.id).first { $0.status == .running }
    let nextPage = StudioPage.allCases.firstIndex(of: page).flatMap { i in
      i + 1 < StudioPage.allCases.count ? StudioPage.allCases[i + 1] : nil }
    return VStack(alignment: .leading, spacing: 8) {
      HStack(spacing: 10) {
        Image(systemName: ok ? "checkmark.circle.fill" : "circle.dashed").font(.system(size: 18))
          .foregroundStyle(ok ? p.accent : p.sun)
        VStack(alignment: .leading, spacing: 2) {
          Text(title).font(.ui(14, weight: .bold)).foregroundStyle(p.ink)
          Text(hint).font(.ui(10)).foregroundStyle(p.muted).lineLimit(2)
        }
        Spacer()
        if let nextPage {
          RetroButton(title: "\(nextPage.label)", symbol: "arrow.right", compact: true) { page = nextPage }
            .help("Sang bước tiếp theo")
        }
      }
      HStack(spacing: 8) {
        ForEach(Array(buttons.enumerated()), id: \.offset) { _, b in
          RetroButton(title: b.0, symbol: b.1, primary: b.2, action: b.3).disabled(aiBusy && b.1 == "sparkles")
        }
        if aiBusy {
          ProgressView().controlSize(.small)
          Text("AI đang làm… xem khung phải").font(.ui(10)).foregroundStyle(p.sun)
        }
        if let running { RunningJobChip(job: running, p: p) }
      }
    }
    .padding(.horizontal, 22).padding(.vertical, 12)
    .bg(p.paperDeep.opacity(0.6))
  }

  /// No project.json yet: build it from the script that already exists, without asking.
  private func autoImport() {
    var pr: Project?
    for f in model.scriptCandidates(video) {
      guard let d = FileManager.default.contents(atPath: f) else { continue }
      if f.hasSuffix(".json") {
        if let p = Project.importScriptJSON(d, code: video.code) { pr = p; break }
        continue
      }
      let text = String(decoding: d, as: UTF8.self)
      let part = markdownSection(text, code: video.code) ?? text
      let p = Project.importMarkdown(part, code: video.code)
      if !p.scenes.isEmpty { pr = p; break }
    }
    var p = pr ?? Project(code: video.code)
    if !video.title.isEmpty {
      if let i = p.titles.firstIndex(where: { $0.text == video.title }) { p.titles[i].chosen = true }
      else { p.titles.insert(TitleOption(id: nextId(p.titles.map(\.id), prefix: "t"), text: video.title, chosen: true), at: 0) }
    }
    if !video.thumbPath.isEmpty, FileManager.default.fileExists(atPath: model.absolute(video.thumbPath)) {
      p.thumbnails.append(ThumbOption(id: "th01", path: model.absolute(video.thumbPath), text: "", chosen: true))
    }
    store.create(p)
    if hasVideoFile, !p.scenes.isEmpty { grabFrames() }
  }

  /// Storyboard frames cut from the finished render at each scene's start (+3 s).
  private func grabFrames() {
    let pj = store.project
    let starts = pj.sceneStarts()
    var cmds = ["mkdir -p storyboard"]
    for (i, s) in pj.scenes.enumerated() where s.image.isEmpty {
      let t = starts[i] + min(3, s.duration(wpm: pj.wpm) / 2)
      cmds.append("ffmpeg -y -loglevel error -ss \(String(format: "%.2f", t)) -i \(shellLine([videoFile])) -frames:v 1 -vf scale=960:-1 storyboard/\(s.id).jpg")
    }
    guard cmds.count > 1 else { return }
    jobs.start(title: "Lấy khung hình từ bản render", argv: ["zsh", "-c", cmds.joined(separator: " && ")], cwd: store.dir,
               videoId: video.id) { _ in attachImages() }
  }

  private func genSceneImages() {
    runImageQueue(store.project.imageQueue(style: imageStyle), sub: "storyboard", title: "Gen ảnh storyboard")
  }

  private func genShotImages() {
    guard let s = scene else { return }
    runImageQueue(store.project.shotQueue(scene: s.id, style: imageStyle), sub: "shots", title: "Gen ảnh shot cảnh \((sceneIndex ?? 0) + 1)")
  }

  func regenScene(_ s: StoryScene) {
    let f = store.abs("storyboard/\(s.id).jpg")
    try? FileManager.default.removeItem(atPath: f)
    if let i = store.project.scenes.firstIndex(where: { $0.id == s.id }) { store.project.scenes[i].image = "" }
    let base = s.visual.isEmpty ? s.vo : s.visual
    runImageQueue([["\(s.id).jpg", imageStyle.isEmpty ? base : "\(base). Style: \(imageStyle)"]], sub: "storyboard",
                  title: "Gen lại cảnh \(s.title)")
  }

  /// shared/imagegen/agy_gen.py queue → <project>/<sub>/; files appear one by one and the cards pick them up.
  private func runImageQueue(_ q: [[String]], sub: String, title: String) {
    guard !q.isEmpty, let repo = model.studioVars(video)["repo"], !repo.isEmpty else { return }
    try? FileManager.default.createDirectory(atPath: store.abs(sub), withIntermediateDirectories: true)
    let qpath = store.abs(".queue-\(sub).json")
    guard let data = try? JSONSerialization.data(withJSONObject: q, options: [.prettyPrinted]) else { return }
    FileManager.default.createFile(atPath: qpath, contents: data)
    jobs.start(title: "\(title) (\(q.count))",
               argv: ["python3", "\(repo)/shared/imagegen/agy_gen.py", qpath, sub, "--ar", video.kind == .short ? "9:16" : "16:9"],
               cwd: store.dir, videoId: video.id) { _ in attachImages() }
  }

  /// Point scenes/shots at images that now exist under storyboard/ and shots/.
  private func attachImages() {
    var pj = store.project
    for i in pj.scenes.indices {
      let s = pj.scenes[i]
      if s.image.isEmpty, FileManager.default.fileExists(atPath: store.abs("storyboard/\(s.id).jpg")) {
        pj.scenes[i].image = "storyboard/\(s.id).jpg"
      }
      for k in s.shots.indices where s.shots[k].image.isEmpty {
        if FileManager.default.fileExists(atPath: store.abs("shots/\(s.shots[k].id).jpg")) {
          pj.scenes[i].shots[k].image = "shots/\(s.shots[k].id).jpg"
        }
      }
    }
    ImageCache.shared.forget("")
    if pj != store.project { store.project = pj }
  }

  /// Image to show for a scene: its own, else the file the generator is writing for it.
  private func sceneImage(_ s: StoryScene) -> String { s.keyImage.isEmpty ? "storyboard/\(s.id).jpg" : s.keyImage }

  // MARK: helpers

  private func addScene() {
    let id = nextId(store.project.scenes.map(\.id), prefix: "s")
    let at = (sceneIndex ?? store.project.scenes.count - 1) + 1
    store.project.scenes.insert(StoryScene(id: id, title: "Cảnh mới"), at: min(at, store.project.scenes.count))
    selected = id
  }

  private func move(_ i: Int, _ d: Int) {
    let j = i + d
    guard store.project.scenes.indices.contains(j) else { return }
    store.project.scenes.swapAt(i, j)
  }

  private func field(_ label: String, _ text: Binding<String>, _ p: Palette) -> some View {
    VStack(alignment: .leading, spacing: 3) {
      Text(label).font(.ui(10)).foregroundStyle(p.muted)
      TextField(label, text: text).textFieldStyle(.plain).font(.ui(12)).foregroundStyle(p.ink).padding(6).retroField(p)
    }
  }

  private func area(_ label: String, _ text: Binding<String>, _ p: Palette, h: CGFloat) -> some View {
    VStack(alignment: .leading, spacing: 3) {
      Text(label).font(.ui(10)).foregroundStyle(p.muted)
      TextEditor(text: text).font(.ui(12)).foregroundStyle(p.ink).scrollContentBackground(.hidden)
        .frame(minHeight: h, maxHeight: h * 2).padding(4).retroField(p)
    }
  }
}

// MARK: - Brainstorm page: idea cards + logline

struct BrainstormPage: View {
  @ObservedObject var store: ProjectStore
  let p: Palette
  @Local private var draft = ""

  var body: some View {
    ScrollView {
      VStack(alignment: .leading, spacing: 14) {
        Text("LOGLINE — video hứa gì trong 1 câu").font(.ui(11, weight: .bold)).tracking(1).foregroundStyle(p.accent)
        TextField("vd: Vì sao ta cứ để mai, và mẹo 2 phút để bắt đầu ngay", text: $store.project.logline, axis: .vertical)
          .textFieldStyle(.plain).font(.ui(15, weight: .semibold)).foregroundStyle(p.sun).padding(10).retroField(p)
        HStack {
          Text("Ý TƯỞNG").font(.ui(11, weight: .bold)).tracking(1).foregroundStyle(p.accent)
          Text("\(store.project.ideas.count) ý · \(store.project.ideas.filter(\.pinned).count) đã ghim").font(.ui(10)).foregroundStyle(p.muted)
          Spacer()
        }
        HStack {
          TextField("Thêm ý… (↩)", text: $draft).textFieldStyle(.plain).font(.ui(12)).padding(8).retroField(p)
            .onSubmit(add)
          RetroButton(title: "Thêm", symbol: "plus", primary: true, action: add)
        }
        let ideas = store.project.ideas.indices.sorted {
          store.project.ideas[$0].pinned != store.project.ideas[$1].pinned ? store.project.ideas[$0].pinned : $0 > $1
        }
        LazyVGrid(columns: [GridItem(.adaptive(minimum: 250), spacing: 12)], spacing: 12) {
          ForEach(ideas, id: \.self) { i in
            let idea = store.project.ideas[i]
            VStack(alignment: .leading, spacing: 6) {
              HStack {
                Text(idea.by.uppercased()).font(.ui(9, weight: .bold)).foregroundStyle(idea.by == "user" ? p.muted : p.sun)
                Spacer()
                Button { store.project.ideas[i].pinned.toggle() } label: {
                  Image(systemName: idea.pinned ? "pin.fill" : "pin").foregroundStyle(idea.pinned ? p.coral : p.muted)
                }.buttonStyle(.plain).help("Ghim: đưa vào kịch bản")
                Button { store.project.ideas.remove(at: i) } label: {
                  Image(systemName: "xmark").foregroundStyle(p.muted)
                }.buttonStyle(.plain)
              }
              TextEditor(text: $store.project.ideas[i].text)
                .font(.ui(12)).foregroundStyle(p.ink).scrollContentBackground(.hidden).frame(minHeight: 70)
            }
            .padding(10)
            .bg(idea.pinned ? p.sun.opacity(0.12) : p.paperDeep)
            .overlay(Rectangle().stroke(idea.pinned ? p.coral : p.line, lineWidth: 1))
          }
        }
        if store.project.ideas.isEmpty {
          Text("Chưa có ý nào. Gõ ý ở trên, hoặc bấm \"Brainstorm 10 góc\" ở khung AI bên phải.")
            .font(.ui(11)).foregroundStyle(p.muted)
        }
      }
      .padding(22)
    }
  }

  private func add() {
    let t = draft.trimmingCharacters(in: .whitespacesAndNewlines)
    guard !t.isEmpty else { return }
    store.project.ideas.append(Idea(id: nextId(store.project.ideas.map(\.id), prefix: "i"), text: t))
    draft = ""
  }
}

// MARK: - Title & thumbnail page: options + YouTube feed preview

struct TitlePage: View {
  @EnvironmentObject var model: AppModel
  @ObservedObject var store: ProjectStore
  let video: Video
  let p: Palette
  let aspect: CGFloat
  @Local private var draft = ""

  private var chosenTitle: String { store.project.titles.first { $0.chosen }?.text ?? video.title }
  private var chosenThumb: String {
    store.project.thumbnails.first { $0.chosen }.map { store.abs($0.path) } ?? model.absolute(video.thumbPath)
  }

  var body: some View {
    HStack(alignment: .top, spacing: 0) {
      ScrollView {
        VStack(alignment: .leading, spacing: 10) {
          Text("TITLE").font(.ui(11, weight: .bold)).tracking(1).foregroundStyle(p.accent)
          HStack {
            TextField("Thêm title… (↩)", text: $draft).textFieldStyle(.plain).font(.ui(12)).padding(8).retroField(p).onSubmit(addTitle)
            RetroButton(title: "Thêm", symbol: "plus", primary: true, action: addTitle)
          }
          ForEach(store.project.titles.indices, id: \.self) { i in
            let t = store.project.titles[i]
            HStack(spacing: 8) {
              Button { choose(i) } label: {
                Image(systemName: t.chosen ? "largecircle.fill.circle" : "circle").foregroundStyle(t.chosen ? p.coral : p.muted)
              }.buttonStyle(.plain).help("Chọn: ghi vào title của video")
              TextField("", text: $store.project.titles[i].text).textFieldStyle(.plain).font(.ui(12, weight: t.chosen ? .bold : .regular))
                .foregroundStyle(p.ink)
              Text("\(t.text.count)").font(.ui(10)).foregroundStyle(t.text.count > 70 ? p.coral : p.muted)
              Button { store.project.titles.remove(at: i) } label: { Image(systemName: "xmark").foregroundStyle(p.muted) }
                .buttonStyle(.plain)
            }
            .padding(8).bg(t.chosen ? p.sun.opacity(0.12) : p.paperDeep)
          }
          HStack {
            Text("THUMBNAIL").font(.ui(11, weight: .bold)).tracking(1).foregroundStyle(p.accent)
            Spacer()
            RetroButton(title: "Thêm ảnh", symbol: "photo", compact: true) {
              let id = nextId(store.project.thumbnails.map(\.id), prefix: "th")
              if let u = pickImage(), let rel = store.importImage(u, sub: "thumbs", name: id) {
                store.project.thumbnails.append(ThumbOption(id: id, path: rel))
              }
            }
          }
          .padding(.top, 10)
          LazyVGrid(columns: [GridItem(.adaptive(minimum: 200), spacing: 10)], spacing: 10) {
            ForEach(store.project.thumbnails.indices, id: \.self) { i in
              let th = store.project.thumbnails[i]
              VStack(alignment: .leading, spacing: 4) {
                ZStack {
                  Rectangle().fill(p.paperDeep)
                  if let img = ImageCache.shared.image(store.abs(th.path)) {
                    Image(nsImage: img).resizable().aspectRatio(contentMode: .fill)
                  } else {
                    Text(th.text.isEmpty ? "concept" : th.text).font(.ui(13, weight: .bold)).foregroundStyle(p.sun)
                      .multilineTextAlignment(.center).padding(8)
                  }
                }
                .aspectRatio(16.0 / 9.0, contentMode: .fit).clipShape(Rectangle())
                .overlay(Rectangle().stroke(th.chosen ? p.coral : p.line, lineWidth: th.chosen ? 3 : 1))
                .onTapGesture { chooseThumb(i) }
                TextField("chữ / concept", text: $store.project.thumbnails[i].text).textFieldStyle(.plain).font(.ui(10))
                  .foregroundStyle(p.muted)
              }
            }
          }
          if store.project.thumbnails.isEmpty {
            Text("Chưa có. Bấm \"3 concept thumbnail\" ở khung AI hoặc thêm ảnh.").font(.ui(11)).foregroundStyle(p.muted)
          }
        }
        .padding(22)
      }
      VRail(p: p)
      VStack(alignment: .leading, spacing: 10) {
        Text("XEM TRƯỚC TRÊN YOUTUBE").font(.ui(11, weight: .bold)).tracking(1).foregroundStyle(p.accent)
        feedCard(width: 320)
        feedCard(width: 210)
        Text("Bấm ô tròn / ảnh để chọn; title đã chọn ghi thẳng vào video.").font(.ui(9)).foregroundStyle(p.muted)
        Spacer()
      }
      .padding(22).frame(width: 370)
    }
  }

  private func feedCard(width: CGFloat) -> some View {
    VStack(alignment: .leading, spacing: 6) {
      ZStack(alignment: .bottomTrailing) {
        Rectangle().fill(Color.black)
        if let img = ImageCache.shared.image(chosenThumb) { Image(nsImage: img).resizable().aspectRatio(contentMode: .fill) }
        Text(clock(store.project.totalSeconds)).font(.system(size: 10, weight: .semibold)).foregroundStyle(.white)
          .padding(.horizontal, 4).background(Color.black.opacity(0.8)).padding(5)
      }
      .frame(width: width, height: width * 9 / 16).clipShape(Rectangle())
      HStack(alignment: .top, spacing: 8) {
        Circle().fill(p.coral).frame(width: 26, height: 26)
        VStack(alignment: .leading, spacing: 2) {
          Text(chosenTitle.isEmpty ? "(chưa có title)" : chosenTitle).font(.system(size: width > 300 ? 13 : 11, weight: .semibold))
            .foregroundStyle(p.ink).lineLimit(2)
          Text("\(model.channel(video.channelId)?.name ?? "") · 12K lượt xem · 3 ngày trước").font(.system(size: 10))
            .foregroundStyle(p.muted)
        }
      }
      .frame(width: width, alignment: .leading)
    }
  }

  private func addTitle() {
    let t = draft.trimmingCharacters(in: .whitespacesAndNewlines)
    guard !t.isEmpty else { return }
    store.project.titles.append(TitleOption(id: nextId(store.project.titles.map(\.id), prefix: "t"), text: t))
    draft = ""
  }

  private func choose(_ i: Int) {
    for k in store.project.titles.indices { store.project.titles[k].chosen = k == i }
    var v = video
    v.title = store.project.titles[i].text
    model.save(v)
  }

  private func chooseThumb(_ i: Int) {
    for k in store.project.thumbnails.indices { store.project.thumbnails[k].chosen = k == i }
    let path = store.abs(store.project.thumbnails[i].path)
    if !store.project.thumbnails[i].path.isEmpty {
      var v = video
      v.thumbPath = path
      model.save(v)
    }
  }
}

// MARK: - Publish page: metadata + checklist + channel upload buttons

struct PublishPage: View {
  @EnvironmentObject var model: AppModel
  let video: Video
  @ObservedObject var store: ProjectStore
  let p: Palette
  @Local private var draft = Video()
  @Local private var loaded = false

  var body: some View {
    ScrollView {
      VStack(alignment: .leading, spacing: 14) {
        Text("ĐĂNG").font(.ui(11, weight: .bold)).tracking(1).foregroundStyle(p.accent)
        checklist
        CopyField(label: "Title", text: $draft.title, limit: 100)
        CopyField(label: "Description", text: $draft.description, limit: 5000, multiline: true)
        CopyField(label: "Tags", text: $draft.tags, limit: 500)
        CopyField(label: "Bình luận ghim", text: $draft.pinnedComment, multiline: true)
        CopyField(label: "YouTube URL", text: $draft.ytUrl, action: .openURL)
        CopyField(label: "Ngày đăng / lịch", text: $draft.publishedAt)
        HStack {
          if draft.stage != .published {
            RetroButton(title: "Đánh dấu đã đăng", symbol: "checkmark.seal", primary: true) {
              draft.stage = .published
              if draft.publishedAt.isEmpty { draft.publishedAt = nowStamp() }
            }
          }
          Text("Nút upload của kênh nằm ở khung phải (studio.json, stage ready).").font(.ui(10)).foregroundStyle(p.muted)
        }
      }
      .padding(22).frame(maxWidth: 860, alignment: .leading)
    }
    .onAppear { if !loaded { draft = video; loaded = true } }
    .onChange(of: video.title) { _, t in draft.title = t }
    .onChange(of: draft) { _, new in if loaded { model.save(new) } }
  }

  private var checklist: some View {
    let file = (draft.filePath as NSString).expandingTildeInPath
    let items: [(String, Bool)] = [
      ("Title đã chọn (≤ 100)", !draft.title.isEmpty && draft.title.count <= 100),
      ("Thumbnail", !draft.thumbPath.isEmpty && FileManager.default.fileExists(atPath: model.absolute(draft.thumbPath))),
      ("File video", !draft.filePath.isEmpty && FileManager.default.fileExists(atPath: file)),
      ("Mô tả", draft.description.count > 50),
      ("Tag", !draft.tags.isEmpty),
      ("Kịch bản: mọi cảnh xong", !store.project.scenes.isEmpty && store.project.scenes.allSatisfy { $0.status == "ok" }),
    ]
    return LazyVGrid(columns: [GridItem(.adaptive(minimum: 220), alignment: .leading)], alignment: .leading, spacing: 6) {
      ForEach(items, id: \.0) { it in
        HStack(spacing: 6) {
          Image(systemName: it.1 ? "checkmark.square.fill" : "square").foregroundStyle(it.1 ? p.accent : p.coral)
          Text(it.0).font(.ui(11)).foregroundStyle(p.ink)
        }
      }
    }
    .padding(10).retroField(p)
  }
}


/// AVPlayer that reports its time (for the timeline playhead) and seeks on request.
struct SyncedPlayer: NSViewRepresentable {
  let url: URL
  @Binding var time: Double
  var seek: Seek?

  final class Coordinator { var lastSeek = 0; var token: Any? }
  func makeCoordinator() -> Coordinator { Coordinator() }

  func makeNSView(context: Context) -> AVPlayerView {
    let v = AVPlayerView()
    let player = AVPlayer(url: url)
    v.player = player
    v.controlsStyle = .inline
    v.showsFullScreenToggleButton = true
    let b = $time
    context.coordinator.token = player.addPeriodicTimeObserver(
      forInterval: CMTime(seconds: 0.2, preferredTimescale: 600), queue: .main) { t in b.wrappedValue = t.seconds }
    return v
  }

  func updateNSView(_ v: AVPlayerView, context: Context) {
    guard let seek, seek.n != context.coordinator.lastSeek else { return }
    context.coordinator.lastSeek = seek.n
    v.player?.seek(to: CMTime(seconds: seek.t, preferredTimescale: 600), toleranceBefore: .zero, toleranceAfter: .zero)
    v.player?.play()
  }

  static func dismantleNSView(_ v: AVPlayerView, coordinator: Coordinator) {
    if let t = coordinator.token { v.player?.removeTimeObserver(t) }
    v.player?.pause()
    v.player = nil
  }
}


/// Higgsfield-style camera presets: framing + movement as chips (stored "close · push-in"); added to the image prompt.
struct CameraChips: View {
  @Binding var camera: String
  let p: Palette
  static let framing = ["extreme wide", "wide", "medium", "close-up", "extreme close-up", "over-the-shoulder", "POV", "top-down", "low angle"]
  static let motion = ["static", "push-in", "pull-out", "pan", "tilt", "orbit", "dolly", "handheld", "crane up"]

  private var parts: [String] { camera.components(separatedBy: " · ").filter { !$0.isEmpty } }

  var body: some View {
    VStack(alignment: .leading, spacing: 6) {
      row("Khung hình", Self.framing)
      row("Chuyển động", Self.motion)
    }
  }

  private func row(_ title: String, _ items: [String]) -> some View {
    VStack(alignment: .leading, spacing: 4) {
      Text(title).font(.ui(10)).foregroundStyle(p.muted)
      FlowButtons {
        ForEach(items, id: \.self) { it in
          Chip(title: it, active: parts.contains(it)) { toggle(it, in: items) }
        }
      }
    }
  }

  /// One framing and one movement at a time.
  private func toggle(_ it: String, in group: [String]) {
    var ps = parts.filter { !group.contains($0) }
    if !parts.contains(it) { ps.append(it) }
    let order = Self.framing + Self.motion
    camera = ps.sorted { (order.firstIndex(of: $0) ?? 99) < (order.firstIndex(of: $1) ?? 99) }.joined(separator: " · ")
  }
}

/// LTX-style animatic: storyboard frames full size, each for its scene's duration, with the voice-over as subtitles.
struct AnimaticView: View {
  @ObservedObject var store: ProjectStore
  let aspect: CGFloat
  let p: Palette
  let start: Int
  let onClose: () -> Void
  @Local private var t: Double? = nil
  @Local private var playing = true
  private let tick = Timer.publish(every: 0.1, on: .main, in: .common).autoconnect()

  var body: some View {
    let pj = store.project
    let starts = pj.sceneStarts()
    let now = t ?? (starts.indices.contains(start) ? starts[start] : 0)
    let i = starts.lastIndex { $0 <= now } ?? 0
    VStack(spacing: 12) {
      HStack {
        Text("ANIMATIC").font(.ui(11, weight: .bold)).tracking(1).foregroundStyle(p.accent)
        Text("\(clock(now)) / \(clock(pj.totalSeconds)) · cảnh \(i + 1)/\(pj.scenes.count)").font(.term(11)).foregroundStyle(p.muted)
        Spacer()
        RetroButton(symbol: "backward.end.fill", compact: true) { t = starts[max(i - 1, 0)] }
        RetroButton(title: playing ? "Dừng" : "Chạy", symbol: playing ? "pause.fill" : "play.fill", primary: true, compact: true) {
          playing.toggle()
        }
        .keyboardShortcut(.space, modifiers: [])
        RetroButton(symbol: "forward.end.fill", compact: true) { t = starts[min(i + 1, starts.count - 1)] }
        RetroButton(title: "Đóng", symbol: "xmark", compact: true) { onClose() }
      }
      if pj.scenes.indices.contains(i) {
        let s = pj.scenes[i]
        ZStack(alignment: .bottom) {
          Rectangle().fill(Color.black)
          if let img = ImageCache.shared.image(store.abs(s.keyImage.isEmpty ? "storyboard/\(s.id).jpg" : s.keyImage), max: 1920) {
            Image(nsImage: img).resizable().aspectRatio(contentMode: .fit)
          } else {
            Text(s.visual.isEmpty ? s.title : s.visual).font(.ui(14)).foregroundStyle(p.muted).padding(40)
          }
          Text(currentLine(s, from: starts[i], now: now)).font(.system(size: 17, weight: .semibold)).foregroundStyle(.white)
            .multilineTextAlignment(.center).padding(.horizontal, 14).padding(.vertical, 8)
            .background(Rectangle().fill(Color.black.opacity(0.65))).padding(18)
        }
        .aspectRatio(aspect, contentMode: .fit)
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        ProgressView(value: min(now / max(pj.totalSeconds, 1), 1)).tint(p.accent)
      }
    }
    .padding(22)
    .onReceive(tick) { _ in
      guard playing else { return }
      let next = now + 0.1
      if next >= pj.totalSeconds { playing = false } else { t = next }
    }
  }

  /// The voice-over line being spoken now, spreading the scene's lines evenly by word count.
  private func currentLine(_ s: StoryScene, from start: Double, now: Double) -> String {
    let lines = s.vo.components(separatedBy: "\n").filter { !$0.trimmingCharacters(in: .whitespaces).isEmpty }
    guard !lines.isEmpty else { return "" }
    let words = lines.map { max($0.split(separator: " ").count, 1) }
    let total = Double(words.reduce(0, +))
    let frac = (now - start) / max(s.duration(wpm: store.project.wpm), 0.1)
    var acc = 0.0
    for (k, w) in words.enumerated() {
      acc += Double(w) / total
      if frac < acc { return lines[k] }
    }
    return lines.last!
  }
}
