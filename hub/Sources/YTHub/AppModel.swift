import AppKit
import SwiftUI

// MARK: - Model

@MainActor
final class AppModel: ObservableObject {
  @Published var channels: [Channel] = []
  @Published var videos: [Video] = []
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
      store = try Store(path: Self.dbPath, schema: String(contentsOf: url, encoding: .utf8))
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
    }
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
    attempt { try $0.updateVideo(v) }
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
