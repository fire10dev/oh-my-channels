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

  func facts(videoId: Int64) -> [Fact] {
    var out: [Fact] = []
    attempt { out = try $0.facts(videoId: videoId) }
    return out
  }

  func addTask(_ v: Video, owner: String, text: String) {
    attempt { try $0.addTask(channelId: v.channelId, videoId: v.id, owner: owner, text: text) }
    reload()
  }

  func completeTask(_ t: HubTask) {
    attempt { try $0.setTaskDone(id: t.id, actor: "user") }
    reload()
  }

  func channel(_ id: Int64) -> Channel? { channels.first { $0.id == id } }

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
