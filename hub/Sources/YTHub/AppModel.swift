import AppKit
import SwiftUI

// MARK: - Model

@MainActor
final class AppModel: ObservableObject {
  @Published var channels: [Channel] = []
  @Published var videos: [Video] = []
  @Published var tasks: [HubTask] = []
  @Published var error: String?
  private let store: Store?

  static var dbPath: String {
    if let p = ProcessInfo.processInfo.environment["YTHUB_DB"] { return p }
    let dir = FileManager.default.homeDirectoryForCurrentUser
      .appendingPathComponent("Library/Application Support/YTHub")
    try? FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
    return dir.appendingPathComponent("ythub.db").path
  }

  init() {
    do {
      let env = ProcessInfo.processInfo.environment["YTHUB_SCHEMA"].map { URL(fileURLWithPath: $0) }
      guard let url = env ?? Bundle.main.url(forResource: "schema", withExtension: "sql") else {
        throw DBError(description: "schema.sql missing from the app bundle")
      }
      let migrate = url.deletingLastPathComponent().appendingPathComponent("migrate.sql")
      store = try Store(path: Self.dbPath, schema: String(contentsOf: url, encoding: .utf8),
                        migrate: (try? String(contentsOf: migrate, encoding: .utf8)) ?? "")
    } catch {
      store = nil
      self.error = "\(error)"
    }
    reload()
  }

  private func attempt(_ f: (Store) throws -> Void) {
    guard let store else { return }
    do { try f(store) } catch { self.error = "\(error)" }
  }

  func reload() {
    attempt { s in
      channels = try s.channels()
      videos = try s.videos()
      tasks = try s.openTasks()
    }
  }

  func userTasks(videoId: Int64?) -> [HubTask] { tasks.filter { $0.owner == "user" && $0.videoId == videoId } }
  func tasks(videoId: Int64) -> [HubTask] { tasks.filter { $0.videoId == videoId } }
  /// Videos with something waiting on the user.
  var userVideoIds: Set<Int64> { Set(tasks.compactMap { $0.owner == "user" ? $0.videoId : nil }) }

  func events(videoId: Int64) -> [Event] {
    var out: [Event] = []
    attempt { out = try $0.events(videoId: videoId) }
    return out
  }

  func assets(videoId: Int64) -> [LinkedAsset] {
    var out: [LinkedAsset] = []
    attempt { out = try $0.assets(videoId: videoId) }
    return out
  }

  /// Absolute path for a stored one (asset paths are relative to the repo root the CLI recorded).
  func absolute(_ path: String) -> String {
    if path.hasPrefix("/") || path.hasPrefix("~") { return (path as NSString).expandingTildeInPath }
    var root: String?
    attempt { root = try $0.root() }
    return root.map { "\($0)/\(path)" } ?? path
  }

  func facts(videoId: Int64) -> [Fact] {
    var out: [Fact] = []
    attempt { out = try $0.facts(videoId: videoId) }
    return out
  }

  // MARK: v3 — dashboard + manifests (read only)

  func lastEvents() -> [Int64: Event] {
    var out: [Int64: Event] = [:]
    attempt { out = try $0.lastEvents() }
    return out
  }

  func events(since: String) -> [Event] {
    var out: [Event] = []
    attempt { out = try $0.events(since: since) }
    return out
  }

  /// Path the channel's adapter registered (`ythub fact <CODE> manifest <path>`).
  func manifestPath(videoId: Int64) -> String? {
    facts(videoId: videoId).first { $0.key == "manifest" }.map { absolute($0.value) }
  }

  /// Parsed manifest, cached until the file's modification date changes.
  func manifest(videoId: Int64) -> Manifest? {
    guard let path = manifestPath(videoId: videoId),
          let mod = (try? FileManager.default.attributesOfItem(atPath: path))?[.modificationDate] as? Date
    else { return nil }
    if let c = manifestCache[path], c.0 == mod { return c.1 }
    let m = (try? Data(contentsOf: URL(fileURLWithPath: path))).flatMap { try? Manifest.decode($0) }
    manifestCache[path] = (mod, m)
    return m
  }
  private var manifestCache: [String: (Date, Manifest?)] = [:]

  func addTask(_ v: Video, owner: String, text: String) {
    attempt { try $0.addTask(channelId: v.channelId, videoId: v.id, owner: owner, text: text) }
    reload()
  }

  func completeTask(_ t: HubTask) {
    attempt { try $0.setTaskDone(id: t.id, actor: "user") }
    reload()
  }

  func channel(_ id: Int64) -> Channel? { channels.first { $0.id == id } }

  // MARK: v4 — Studio

  let jobs = JobCenter()
  /// Video open in the Studio workspace (full window), nil = Hub.
  @Published var studioVideoId: Int64?
  private var chats: [Int64: AgentChat] = [:]
  private var studioCache: [String: (Date, StudioConfig?, String?)] = [:]

  /// Absolute channel folder (channel.repo_path), nil when unset or missing.
  func channelDir(_ channelId: Int64) -> String? {
    guard let rel = channel(channelId)?.repoPath, !rel.isEmpty else { return nil }
    let dir = absolute(rel)
    return FileManager.default.fileExists(atPath: dir) ? dir : nil
  }

  private func studioEntry(_ channelId: Int64) -> (StudioConfig?, String?) {
    guard let dir = channelDir(channelId) else { return (nil, nil) }
    let path = (dir as NSString).appendingPathComponent("studio.json")
    guard let mod = (try? FileManager.default.attributesOfItem(atPath: path))?[.modificationDate] as? Date
    else { return (nil, nil) }
    if let c = studioCache[path], c.0 == mod { return (c.1, c.2) }
    var cfg: StudioConfig?, err: String?
    do { cfg = try StudioConfig.decode(Data(contentsOf: URL(fileURLWithPath: path))) } catch { err = "\(error)" }
    studioCache[path] = (mod, cfg, err)
    return (cfg, err)
  }

  /// Parsed channels/<kênh>/studio.json, re-read when the file changes.
  func studio(channelId: Int64) -> StudioConfig? { studioEntry(channelId).0 }
  func studioError(channelId: Int64) -> String? { studioEntry(channelId).1 }

  /// Values for `{key}` in studio.json commands and prompts.
  func studioVars(_ v: Video) -> [String: String] {
    let dir = channelDir(v.channelId) ?? ""
    var root: String?
    attempt { root = try $0.root() }
    return ["code": v.code, "kind": v.kind.rawValue, "stage": v.stage.rawValue, "title": v.title,
            "script": v.scriptPath.isEmpty ? "" : absolute(v.scriptPath),
            "file": v.filePath.isEmpty ? "" : absolute(v.filePath),
            "channel": dir, "repo": root ?? "", "channel_name": channel(v.channelId)?.name ?? ""]
  }

  func galleryDir(_ v: Video) -> String? {
    guard let dir = channelDir(v.channelId), let g = studio(channelId: v.channelId)?.gallery else { return nil }
    return (dir as NSString).appendingPathComponent(expand(g, studioVars(v)))
  }

  /// One chat per video, kept while the app runs; the CLI session ids live in facts.
  func chat(for v: Video) -> AgentChat {
    if let c = chats[v.id] { return c }
    let c = AgentChat()
    for f in facts(videoId: v.id) where f.key.hasPrefix("agent_session_") && !f.value.isEmpty {
      if let b = AgentBackend(rawValue: String(f.key.dropFirst("agent_session_".count))) { c.sessions[b] = f.value }
    }
    chats[v.id] = c
    return c
  }

  /// Existing script files for a video: its script_path, then .json/.md/.txt in the channel folder named after the code.
  func scriptCandidates(_ v: Video) -> [String] {
    var out: [String] = []
    if !v.scriptPath.isEmpty { out.append(absolute(v.scriptPath)) }
    guard let dir = channelDir(v.channelId), !v.code.isEmpty else { return out }
    let skip: Set = ["node_modules", ".git", "build", "out", "public", "final", ".venv", "videos", "archive", "_archive"]
    var json: [String] = [], md: [String] = []
    let e = FileManager.default.enumerator(atPath: dir)
    while let f = e?.nextObject() as? String {
      let name = (f as NSString).lastPathComponent
      if skip.contains(name) { e?.skipDescendants(); continue }
      guard !name.hasPrefix("."), name.localizedCaseInsensitiveContains(v.code) else { continue }
      let full = (dir as NSString).appendingPathComponent(f)
      switch (name as NSString).pathExtension.lowercased() {
      case "json": json.append(full)
      case "md", "txt": md.append(full)
      default: break
      }
      if json.count + md.count > 20 { break }
    }
    for f in json.sorted() + md.sorted() where !out.contains(f) { out.append(f) }
    return out
  }

  func openStudio(_ v: Video) {
    guard !v.code.isEmpty, channelDir(v.channelId) != nil else { return }
    studioVideoId = v.id
  }

  func logEvent(_ v: Video, kind: String, message: String, actor: String) {
    let allowed: Set = ["note", "stage", "review", "render", "upload", "blocker"]
    attempt { try $0.addEvent(channelId: v.channelId, videoId: v.id, kind: allowed.contains(kind) ? kind : "note",
                              actor: actor, message: message) }
  }

  func setFact(_ v: Video, key: String, value: String) {
    attempt { try $0.setFact(videoId: v.id, key: key, value: value) }
  }

  func saveChannel(_ c: Channel) {
    attempt { s in
      if c.id == 0 { _ = try s.insertChannel(c) } else { try s.updateChannel(c) }
    }
    reload()
  }

  func deleteChannel(_ id: Int64) {
    attempt { try $0.deleteChannel(id: id) }
    reload()
  }

  func addVideo(channelId: Int64, kind: Kind) -> Int64? {
    var id: Int64?
    attempt { id = try $0.insertVideo(Video(channelId: channelId, kind: kind)) }
    reload()
    return id
  }

  /// Keeps the in-memory copy (with its old updatedAt) so the open editor isn't rebuilt mid-typing.
  func save(_ v: Video) {
    let old = videos.first { $0.id == v.id }
    attempt { s in
      try s.updateVideo(v)
      if let old, old.stage != v.stage {
        try s.addEvent(channelId: v.channelId, videoId: v.id, kind: "stage", actor: "user",
                       message: "\(old.stage.rawValue) → \(v.stage.rawValue)")
      }
    }
    if let i = videos.firstIndex(where: { $0.id == v.id }) { videos[i] = v }
  }

  func deleteVideo(_ id: Int64) {
    attempt { try $0.deleteVideo(id: id) }
    reload()
  }
}

// MARK: - Helpers

/// `@State` without its macro: the Command Line Tools ship no SwiftUIMacros plugin, so `@State`
/// does not compile with plain `swiftc`. SwiftUI still manages the inner State (DynamicProperty).
@propertyWrapper
struct Local<Value>: DynamicProperty {
  private let storage: State<Value>
  init(wrappedValue: Value) { storage = State(initialValue: wrappedValue) }
  var wrappedValue: Value {
    get { storage.wrappedValue }
    nonmutating set { storage.wrappedValue = newValue }
  }
  var projectedValue: Binding<Value> { storage.projectedValue }
}
