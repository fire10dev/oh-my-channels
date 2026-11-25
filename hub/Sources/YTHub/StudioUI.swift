import AppKit
import SwiftUI
import WebKit

// MARK: - Jobs: one shell process per button press, output streamed into the Studio console

final class Job: ObservableObject, Identifiable {
  enum Status: Equatable { case running, ok, failed(Int32), stopped }
  let id = UUID()
  let title: String
  let line: String
  let cwd: String
  let videoId: Int64?
  let started = Date()
  let isEditor: Bool
  @Published var output = ""
  @Published var status: Status = .running
  @Published var url: String?
  var finished: Date?
  fileprivate var process: Process?

  init(title: String, line: String, cwd: String, videoId: Int64?, isEditor: Bool) {
    self.title = title; self.line = line; self.cwd = cwd; self.videoId = videoId; self.isEditor = isEditor
  }

  var seconds: Int { Int((finished ?? Date()).timeIntervalSince(started)) }
}

/// Runs `zsh -lc <line>` (login shell: Homebrew, nvm, ~/.local/bin on PATH) in the channel folder.
@MainActor
final class JobCenter: ObservableObject {
  @Published var jobs: [Job] = []
  private static let cap = 200_000
  static let logDir: URL = {
    let d = URL(fileURLWithPath: AppModel.dbPath).deletingLastPathComponent().appendingPathComponent("jobs")
    try? FileManager.default.createDirectory(at: d, withIntermediateDirectories: true)
    return d
  }()

  func jobs(videoId: Int64) -> [Job] { jobs.filter { $0.videoId == videoId }.reversed() }
  var running: Int { jobs.filter { $0.status == .running }.count }

  @discardableResult
  func start(title: String, argv: [String], cwd: String, videoId: Int64?, env: [String: String] = [:],
             isEditor: Bool = false, onExit: @escaping (Job) -> Void = { _ in }) -> Job {
    let line = shellLine(argv)
    let job = Job(title: title, line: line, cwd: cwd, videoId: videoId, isEditor: isEditor)
    jobs.append(job)
    let logURL = Self.logDir.appendingPathComponent("\(ISO8601DateFormatter().string(from: job.started))-\(title.prefix(30)).log"
      .replacingOccurrences(of: "/", with: "_").replacingOccurrences(of: ":", with: "-"))
    FileManager.default.createFile(atPath: logURL.path, contents: Data("$ cd \(cwd)\n$ \(line)\n".utf8))
    let log = try? FileHandle(forWritingTo: logURL)
    log?.seekToEndOfFile()
    job.output = "$ \(line)\n"

    let p = Process()
    p.executableURL = URL(fileURLWithPath: "/bin/zsh")
    p.arguments = ["-lc", line]
    p.currentDirectoryURL = URL(fileURLWithPath: cwd)
    p.environment = ProcessInfo.processInfo.environment.merging(env) { $1 }
    let pipe = Pipe()
    p.standardOutput = pipe
    p.standardError = pipe
    p.standardInput = FileHandle.nullDevice
    pipe.fileHandleForReading.readabilityHandler = { h in
      let d = h.availableData
      guard !d.isEmpty else { return }
      log?.write(d)
      let s = String(decoding: d, as: UTF8.self)
      DispatchQueue.main.async {
        job.output += s
        if job.output.count > Self.cap { job.output = "…\n" + job.output.suffix(Self.cap / 2) }
        if job.url == nil, let u = firstURL(in: s) { job.url = u }
      }
    }
    p.terminationHandler = { proc in
      pipe.fileHandleForReading.readabilityHandler = nil
      try? log?.close()
      DispatchQueue.main.async {
        job.finished = Date()
        if job.status == .running {
          job.status = proc.terminationStatus == 0 ? .ok : .failed(proc.terminationStatus)
        }
        job.output += "\n[\(job.status == .ok ? "xong" : "lỗi \(proc.terminationStatus)") sau \(job.seconds)s]\n"
        onExit(job)
      }
    }
    do {
      try p.run()
      job.process = p
    } catch {
      job.status = .failed(-1)
      job.output += "Không chạy được: \(error)\n"
    }
    return job
  }

  /// SIGTERM the shell's children first (npx → node), then the shell.
  func stop(_ job: Job) {
    guard let p = job.process, p.isRunning else { return }
    job.status = .stopped
    let k = Process()
    k.executableURL = URL(fileURLWithPath: "/usr/bin/pkill")
    k.arguments = ["-TERM", "-P", "\(p.processIdentifier)"]
    try? k.run()
    k.waitUntilExit()
    p.terminate()
  }

  func stopAll() { jobs.filter { $0.status == .running }.forEach(stop) }
  func clearFinished(videoId: Int64) { jobs.removeAll { $0.videoId == videoId && $0.status != .running } }
}

// MARK: - Agent chat: one CLI process per turn, session resumed by id

struct ChatLine: Identifiable, Hashable {
  enum Role { case user, agent, tool, meta, error }
  let id = UUID()
  var role: Role
  var text: String
}

@MainActor
final class AgentChat: ObservableObject {
  @Published var lines: [ChatLine] = []
  @Published var busy = false
  @Published var backend: AgentBackend = .claude
  @Published var mode = "acceptEdits"
  var sessions: [AgentBackend: String] = [:]
  private var process: Process?
  private var buffer = Data()
  private var stderr = ""
  private var turnCost = 0.0

  func send(_ message: String, context: String, cwd: String, actor: String,
            onSession: @escaping (AgentBackend, String) -> Void) {
    let text = message.trimmingCharacters(in: .whitespacesAndNewlines)
    guard !text.isEmpty, !busy else { return }
    lines.append(ChatLine(role: .user, text: text))
    let b = backend
    let argv = agentArgv(b, message: text, session: sessions[b], context: context,
                         mode: b == .claude ? mode : (b == .agy ? "accept-edits" : ""))
    let p = Process()
    p.executableURL = URL(fileURLWithPath: "/bin/zsh")
    p.arguments = ["-lc", shellLine(argv)]
    p.currentDirectoryURL = URL(fileURLWithPath: cwd)
    p.environment = ProcessInfo.processInfo.environment.merging(["YTHUB_ACTOR": actor]) { $1 }
    p.standardInput = FileHandle.nullDevice
    let out = Pipe(), err = Pipe()
    p.standardOutput = out
    p.standardError = err
    buffer = Data(); stderr = ""
    out.fileHandleForReading.readabilityHandler = { [weak self] h in
      let d = h.availableData
      guard !d.isEmpty else { return }
      DispatchQueue.main.async { self?.consume(d, backend: b, onSession: onSession) }
    }
    err.fileHandleForReading.readabilityHandler = { [weak self] h in
      let s = String(decoding: h.availableData, as: UTF8.self)
      DispatchQueue.main.async { self?.stderr += s }
    }
    p.terminationHandler = { [weak self] proc in
      out.fileHandleForReading.readabilityHandler = nil
      err.fileHandleForReading.readabilityHandler = nil
      DispatchQueue.main.async {
        guard let self else { return }
        self.consume(Data("\n".utf8), backend: b, onSession: onSession)
        if proc.terminationStatus != 0, proc.terminationReason != .uncaughtSignal {
          let tail = self.stderr.split(separator: "\n").suffix(4).joined(separator: "\n")
          self.lines.append(ChatLine(role: .error, text: "exit \(proc.terminationStatus)\(tail.isEmpty ? "" : ": \(tail)")"))
        }
        self.busy = false
        self.process = nil
      }
    }
    do {
      try p.run()
      process = p
      busy = true
    } catch {
      lines.append(ChatLine(role: .error, text: "Không chạy được \(argv[0]): \(error)"))
    }
  }

  private func consume(_ d: Data, backend: AgentBackend, onSession: (AgentBackend, String) -> Void) {
    buffer.append(d)
    while let nl = buffer.firstIndex(of: 0x0A) {
      let line = String(decoding: buffer[buffer.startIndex..<nl], as: UTF8.self)
      buffer.removeSubrange(buffer.startIndex...nl)
      for item in parseAgentLine(line) {
        switch item {
        case .session(let s):
          if sessions[backend] != s { sessions[backend] = s; onSession(backend, s) }
        case .text(let t): lines.append(ChatLine(role: .agent, text: t))
        case .tool(let n, let s): lines.append(ChatLine(role: .tool, text: "\(n)  \(s)"))
        case .done(let cost, let error):
          if let error { lines.append(ChatLine(role: .error, text: error)) }
          if let cost { lines.append(ChatLine(role: .meta, text: String(format: "xong · $%.3f", cost))) }
        }
      }
    }
  }

  func stop() {
    guard let p = process, p.isRunning else { return }
    p.terminate()
    lines.append(ChatLine(role: .meta, text: "đã dừng"))
  }

  func reset() {
    sessions[backend] = nil
    lines.append(ChatLine(role: .meta, text: "— hội thoại mới (\(backend.label)) —"))
  }
}

// MARK: - Editor window: a local dev server (Remotion Studio, HyperFrames…) in a WebView

@MainActor
enum EditorWindows {
  private static var open: [String: NSWindow] = [:]

  static func show(url: String, title: String) {
    if let w = open[url] { w.makeKeyAndOrderFront(nil); return }
    guard let u = URL(string: url) else { return }
    let web = WKWebView(frame: .zero, configuration: WKWebViewConfiguration())
    web.load(URLRequest(url: u))
    let w = NSWindow(contentRect: NSRect(x: 0, y: 0, width: 1440, height: 900),
                     styleMask: [.titled, .closable, .resizable, .miniaturizable], backing: .buffered, defer: false)
    w.title = title
    w.contentView = web
    w.isReleasedWhenClosed = false
    w.center()
    w.makeKeyAndOrderFront(nil)
    open[url] = w
    NotificationCenter.default.addObserver(forName: NSWindow.willCloseNotification, object: w, queue: .main) { _ in
      MainActor.assumeIsolated { _ = open.removeValue(forKey: url) }
    }
  }
}

/// Wraps buttons onto several lines.
struct FlowButtons<Content: View>: View {
  @ViewBuilder let content: () -> Content
  var body: some View {
    FlowLayout(spacing: 8) { content() }
  }
}

struct FlowLayout: Layout {
  var spacing: CGFloat = 8
  func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) -> CGSize {
    let w = proposal.width ?? 800
    var x: CGFloat = 0, y: CGFloat = 0, row: CGFloat = 0
    for s in subviews {
      let z = s.sizeThatFits(.unspecified)
      if x > 0, x + z.width > w { x = 0; y += row + spacing; row = 0 }
      x += z.width + spacing; row = max(row, z.height)
    }
    return CGSize(width: w, height: y + row)
  }
  func placeSubviews(in b: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) {
    var x = b.minX, y = b.minY, row: CGFloat = 0
    for s in subviews {
      let z = s.sizeThatFits(.unspecified)
      if x > b.minX, x + z.width > b.maxX { x = b.minX; y += row + spacing; row = 0 }
      s.place(at: CGPoint(x: x, y: y), proposal: .unspecified)
      x += z.width + spacing; row = max(row, z.height)
    }
  }
}

struct JobView: View {
  @ObservedObject var job: Job
  @EnvironmentObject var jobs: JobCenter
  let p: Palette
  @Local private var open = true

  var body: some View {
    VStack(alignment: .leading, spacing: 6) {
      HStack(spacing: 8) {
        Rectangle().fill(color).frame(width: 8, height: 8)
        Text(job.title).font(.ui(11, weight: .bold)).foregroundStyle(p.ink)
        Text(statusText).font(.ui(10)).foregroundStyle(p.muted)
        Spacer()
        if let u = job.url, job.status == .running {
          RetroButton(title: "Mở editor", symbol: "macwindow", compact: true) { EditorWindows.show(url: u, title: job.title) }
        }
        if job.status == .running {
          RetroButton(title: "Dừng", symbol: "stop.fill", compact: true) { jobs.stop(job) }
        }
        RetroButton(symbol: open ? "chevron.up" : "chevron.down", compact: true) { open.toggle() }
      }
      if open {
        ScrollViewReader { proxy in
          ScrollView {
            Text(job.output).font(.system(size: 10.5, design: .monospaced)).foregroundStyle(p.ink)
              .textSelection(.enabled).frame(maxWidth: .infinity, alignment: .leading).padding(8)
            Color.clear.frame(height: 1).id("end")
          }
          .frame(height: 180)
          .retroField(p)
          .onChange(of: job.output) { _, _ in proxy.scrollTo("end", anchor: .bottom) }
        }
      }
    }
  }

  private var color: Color {
    switch job.status {
    case .running: p.sun
    case .ok: p.accent
    case .failed, .stopped: p.coral
    }
  }
  private var statusText: String {
    switch job.status {
    case .running: "đang chạy \(job.seconds)s"
    case .ok: "xong \(job.seconds)s"
    case .failed(let c): "lỗi \(c)"
    case .stopped: "đã dừng"
    }
  }
}

// MARK: - Agent panel

struct AgentPanel: View {
  @EnvironmentObject var model: AppModel
  let video: Video
  let prompts: [StudioPrompt]
  let p: Palette

  var body: some View {
    AgentChatView(chat: model.chat(for: video), video: video, prompts: prompts, p: p)
  }
}

struct AgentChatView: View {
  @EnvironmentObject var model: AppModel
  @ObservedObject var chat: AgentChat
  let video: Video
  let prompts: [StudioPrompt]
  let p: Palette
  var extraVars: [String: String] = [:]
  var extraContext = ""
  @Local private var input = ""

  var body: some View {
    VStack(alignment: .leading, spacing: 8) {
      HStack(spacing: 6) {
        SectionLabel(text: "AI", p: p).fixedSize()
        ForEach(AgentBackend.allCases) { b in
          Chip(title: b.label, active: chat.backend == b) { chat.backend = b }
        }
        if chat.backend == .claude {
          Picker("", selection: $chat.mode) {
            Text("Sửa file").tag("acceptEdits")
            Text("Chỉ lên kế hoạch").tag("plan")
            Text("Toàn quyền").tag("bypassPermissions")
          }
          .labelsHidden().frame(width: 120)
          .help("claude --permission-mode. Toàn quyền = chạy mọi lệnh không hỏi")
        }
        Spacer(minLength: 0)
        RetroButton(symbol: "plus.bubble", compact: true) {
          chat.reset()
          model.setFact(video, key: "agent_session_\(chat.backend.rawValue)", value: "")
        }
        .help(chat.sessions[chat.backend].map { "Hội thoại mới (đang ở session \($0.prefix(8)))" } ?? "Hội thoại mới")
      }
      if !prompts.isEmpty {
        FlowButtons {
          ForEach(prompts, id: \.self) { pr in
            RetroButton(title: pr.label, symbol: "sparkles", compact: true) {
              send(expand(pr.text, model.studioVars(video).merging(extraVars) { $1 }))
            }
            .disabled(chat.busy)
          }
        }
      }
      ScrollViewReader { proxy in
        ScrollView {
          VStack(alignment: .leading, spacing: 6) {
            if chat.lines.isEmpty {
              Text("Hỏi agent về video này. Nó chạy trong thư mục kênh, biết mã video, kịch bản, file và lệnh ythub.")
                .font(.ui(11)).foregroundStyle(p.muted)
            }
            ForEach(chat.lines) { l in line(l) }
            if chat.busy {
              HStack(spacing: 6) { ProgressView().controlSize(.small); Text("đang chạy…").font(.ui(10)).foregroundStyle(p.muted) }
            }
            Color.clear.frame(height: 1).id("end")
          }
          .padding(10).frame(maxWidth: .infinity, alignment: .leading)
        }
        .frame(minHeight: 160, maxHeight: 360)
        .retroField(p)
        .onChange(of: chat.lines.count) { _, _ in proxy.scrollTo("end", anchor: .bottom) }
      }
      HStack(alignment: .bottom, spacing: 8) {
        TextField("Nhắn agent… (⌘↩ gửi)", text: $input, axis: .vertical)
          .textFieldStyle(.plain).font(.ui(12)).foregroundStyle(p.ink).lineLimit(1...6)
          .padding(8).retroField(p)
          .onSubmit { send(input) }
        if chat.busy {
          RetroButton(title: "Dừng", symbol: "stop.fill") { chat.stop() }
        } else {
          RetroButton(title: "Gửi", symbol: "paperplane.fill", primary: true) { send(input) }
            .keyboardShortcut(.return, modifiers: .command)
            .disabled(input.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty)
        }
      }
    }
  }

  private func send(_ text: String) {
    guard let dir = model.channelDir(video.channelId) else { return }
    let v = model.videos.first { $0.id == video.id } ?? video
    let ctx = agentContext(video: v, channel: model.channel(v.channelId), channelDir: dir)
      + (extraContext.isEmpty ? "" : "\n" + extraContext)
    chat.send(text, context: ctx, cwd: dir,
              actor: "agent:studio") { b, s in
      model.setFact(v, key: "agent_session_\(b.rawValue)", value: s)
    }
    input = ""
  }

  @ViewBuilder private func line(_ l: ChatLine) -> some View {
    switch l.role {
    case .user:
      Text(l.text).font(.ui(12, weight: .semibold)).foregroundStyle(p.accent).textSelection(.enabled)
        .padding(.top, 6)
    case .agent:
      Text((try? AttributedString(markdown: l.text, options: .init(interpretedSyntax: .inlineOnlyPreservingWhitespace)))
           ?? AttributedString(l.text))
        .font(.ui(12)).foregroundStyle(p.ink).textSelection(.enabled)
    case .tool:
      Text("▸ " + l.text).font(.system(size: 10.5, design: .monospaced)).foregroundStyle(p.sun).lineLimit(2)
    case .meta:
      Text(l.text).font(.ui(10)).foregroundStyle(p.muted)
    case .error:
      Text(l.text).font(.ui(11)).foregroundStyle(p.coral).textSelection(.enabled)
    }
  }
}

// MARK: - Script station: read and edit the script file in place

struct ScriptPane: View {
  let path: String
  let p: Palette
  @Local private var text = ""
  @Local private var saved = ""
  @Local private var loaded = false

  var body: some View {
    VStack(alignment: .leading, spacing: 6) {
      HStack {
        SectionLabel(text: (path as NSString).lastPathComponent, p: p)
        if text != saved { Text("chưa lưu").font(.ui(10)).foregroundStyle(p.coral) }
        Spacer()
        RetroButton(title: "Tải lại", symbol: "arrow.clockwise", compact: true) { load() }
        RetroButton(title: "Lưu", symbol: "square.and.arrow.down", primary: true, compact: true) {
          try? text.write(toFile: path, atomically: true, encoding: .utf8)
          saved = text
        }
        .keyboardShortcut("s")
        .disabled(text == saved)
      }
      TextEditor(text: $text)
        .font(.system(size: 12, design: .monospaced)).foregroundStyle(p.ink).scrollContentBackground(.hidden)
        .padding(6).frame(minHeight: 260, maxHeight: 520).retroField(p)
    }
    .onAppear { if !loaded { load() } }
  }

  private func load() {
    text = (try? String(contentsOfFile: path, encoding: .utf8)) ?? "(không đọc được \(path))"
    saved = text
    loaded = true
  }
}

// MARK: - Assets station: images of the video, newest first

struct GalleryPane: View {
  let dir: String
  let p: Palette

  var body: some View {
    let exts: Set = ["png", "jpg", "jpeg", "webp"]
    let files = ((try? FileManager.default.contentsOfDirectory(atPath: dir)) ?? [])
      .filter { exts.contains(($0 as NSString).pathExtension.lowercased()) }.sorted()
    VStack(alignment: .leading, spacing: 6) {
      HStack {
        SectionLabel(text: "Ảnh cảnh · \(files.count)", p: p)
        Spacer()
        RetroButton(title: "Finder", symbol: "folder", compact: true) { NSWorkspace.shared.open(URL(fileURLWithPath: dir)) }
      }
      if files.isEmpty {
        Text("Chưa có ảnh trong \(dir)").font(.ui(11)).foregroundStyle(p.muted)
      }
      LazyVGrid(columns: [GridItem(.adaptive(minimum: 140), spacing: 6)], spacing: 6) {
        ForEach(files.prefix(120), id: \.self) { f in
          let full = (dir as NSString).appendingPathComponent(f)
          VStack(spacing: 2) {
            if let img = NSImage(contentsOfFile: full) {
              Image(nsImage: img).resizable().aspectRatio(contentMode: .fit)
            }
            Text(f).font(.ui(9)).foregroundStyle(p.muted).lineLimit(1)
          }
          .onTapGesture(count: 2) { NSWorkspace.shared.open(URL(fileURLWithPath: full)) }
          .help("Nhấp đúp để mở")
        }
      }
    }
  }
}

/// One running job in a line: title, last output line, stop.
struct RunningJobChip: View {
  @ObservedObject var job: Job
  @EnvironmentObject var jobs: JobCenter
  let p: Palette

  var body: some View {
    let last = job.output.split(separator: "\n").last.map(String.init) ?? ""
    HStack(spacing: 6) {
      ProgressView().controlSize(.small)
      Text(job.title).font(.ui(10, weight: .bold)).foregroundStyle(p.sun)
      Text(last).font(.system(size: 10, design: .monospaced)).foregroundStyle(p.muted).lineLimit(1).frame(maxWidth: 260)
      Button { jobs.stop(job) } label: { Image(systemName: "stop.fill").foregroundStyle(p.coral) }.buttonStyle(.plain)
    }
  }
}
