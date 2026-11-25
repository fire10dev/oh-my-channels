import Foundation

// MARK: - v4 Studio: pure logic (no UI). Each channel declares its buttons in channels/<kênh>/studio.json.

struct StudioAction: Decodable, Identifiable, Hashable {
  var id: String
  var stage: String
  var label: String
  var symbol: String?
  var run: [String]
  var cwd: String?            // relative to the channel folder
  var confirm: Bool?          // ask before running (upload, delete…)
  var kind: String?           // event kind logged when done: render | upload | review | note
  var refreshManifest: Bool?  // re-read build/<CODE>/hub.json after
  var only: String?           // "long" | "short"
  var help: String?
}

struct StudioPrompt: Decodable, Hashable {
  var stage: String
  var label: String
  var text: String
}

/// A long-running local web editor (Remotion Studio, HyperFrames preview) shown in a WebView.
struct StudioEditor: Decodable, Identifiable, Hashable {
  var id: String
  var label: String
  var run: [String]
  var cwd: String?
  var url: String?  // when the server doesn't print its URL; may use {port}
}

struct StudioConfig: Decodable, Hashable {
  var version: Int
  var actions: [StudioAction] = []
  var prompts: [StudioPrompt] = []
  var editors: [StudioEditor] = []
  var imageStyle: String?  // appended to every image prompt ("flat stickman, white background…")
  var gallery: String?  // image folder of a video, relative to the channel folder, e.g. "videos/{code}/assets"

  enum CodingKeys: String, CodingKey { case version, actions, prompts, editors, gallery, imageStyle }
  init(from d: Decoder) throws {
    let c = try d.container(keyedBy: CodingKeys.self)
    version = try c.decodeIfPresent(Int.self, forKey: .version) ?? 1
    actions = try c.decodeIfPresent([StudioAction].self, forKey: .actions) ?? []
    prompts = try c.decodeIfPresent([StudioPrompt].self, forKey: .prompts) ?? []
    editors = try c.decodeIfPresent([StudioEditor].self, forKey: .editors) ?? []
    gallery = try c.decodeIfPresent(String.self, forKey: .gallery)
    imageStyle = try c.decodeIfPresent(String.self, forKey: .imageStyle)
  }
  init() { version = 1 }

  static func decode(_ data: Data) throws -> StudioConfig {
    let d = JSONDecoder()
    d.keyDecodingStrategy = .convertFromSnakeCase
    return try d.decode(StudioConfig.self, from: data)
  }

  func actions(stage: Stage, kind: Kind) -> [StudioAction] {
    actions.filter { $0.stage == stage.rawValue && ($0.only == nil || $0.only == kind.rawValue) }
  }
  func prompts(stage: Stage) -> [StudioPrompt] { prompts.filter { $0.stage == stage.rawValue || $0.stage == "*" } }
}

/// `{key}` → value; unknown keys stay as written so a typo is visible in the console.
func expand(_ template: String, _ vars: [String: String]) -> String {
  var out = template
  for (k, v) in vars { out = out.replacingOccurrences(of: "{\(k)}", with: v) }
  return out
}

/// argv → one zsh line (single-quoted where needed), run with `zsh -lc` so Homebrew/nvm PATH is there.
func shellLine(_ argv: [String]) -> String {
  argv.map { a in
    if !a.isEmpty, a.allSatisfy({ $0.isLetter || $0.isNumber || "-_./=:@,+%".contains($0) }) { return a }
    return "'" + a.replacingOccurrences(of: "'", with: "'\\''") + "'"
  }.joined(separator: " ")
}

/// First http(s)://localhost|127.0.0.1 URL a dev server printed.
func firstURL(in text: String) -> String? {
  guard let r = text.range(of: #"https?://(localhost|127\.0\.0\.1)(:\d+)?[^\s'"]*"#, options: .regularExpression)
  else { return nil }
  return String(text[r])
}

// MARK: - Agent CLI (one process per turn, NDJSON on stdout)

enum AgentBackend: String, CaseIterable, Identifiable {
  case claude, codex, agy
  var id: String { rawValue }
  var label: String {
    switch self {
    case .claude: "Claude"
    case .codex: "Codex"
    case .agy: "Agy"
    }
  }
}

enum AgentItem: Hashable {
  case session(String)
  case text(String)
  case tool(String, String)  // name, one-line summary
  case done(cost: Double?, error: String?)
}

/// argv for one turn. `mode` = claude --permission-mode / agy --mode.
func agentArgv(_ b: AgentBackend, message: String, session: String?, context: String, mode: String) -> [String] {
  switch b {
  case .claude:
    var a = ["claude", "-p", message, "--output-format", "stream-json", "--verbose"]
    if !context.isEmpty { a += ["--append-system-prompt", context] }
    if !mode.isEmpty { a += ["--permission-mode", mode] }
    if let session { a += ["--resume", session] }
    return a
  case .codex:
    let prompt = context.isEmpty || session != nil ? message : "\(context)\n\n\(message)"
    var a = ["codex", "exec"]
    if let session { a += ["resume", session] }
    return a + ["--json", "--skip-git-repo-check", prompt]
  case .agy:
    let prompt = context.isEmpty || session != nil ? message : "\(context)\n\n\(message)"
    var a = ["agy", "-p", prompt, "--output-format", "stream-json", "--disable-slash-commands"]
    if !mode.isEmpty { a += ["--mode", mode] }
    if let session { a += ["--conversation", session] }
    return a
  }
}

private func oneLine(_ s: String, _ n: Int = 160) -> String {
  let l = s.replacingOccurrences(of: "\n", with: " ⏎ ")
  return l.count > n ? String(l.prefix(n)) + "…" : l
}

/// The part of a tool call worth showing: command, path, pattern, url… else the first string field.
private func toolSummary(_ input: [String: Any]) -> String {
  for k in ["command", "file_path", "path", "pattern", "url", "query", "description", "prompt"] {
    if let s = input[k] as? String { return oneLine(s) }
  }
  return input.values.compactMap { $0 as? String }.first.map { oneLine($0) } ?? ""
}

/// One NDJSON line from `claude -p --output-format stream-json` or `codex exec --json` → items to show.
func parseAgentLine(_ line: String) -> [AgentItem] {
  guard let data = line.data(using: .utf8),
        let o = (try? JSONSerialization.jsonObject(with: data)) as? [String: Any]
  else { return [] }
  if let ev = o["event"] as? String { return parseAgyEvent(ev, o) }
  guard let type = o["type"] as? String else { return [] }
  switch type {
  case "system":  // claude init
    return (o["session_id"] as? String).map { [.session($0)] } ?? []
  case "assistant":
    let content = ((o["message"] as? [String: Any])?["content"] as? [[String: Any]]) ?? []
    return content.compactMap { c in
      switch c["type"] as? String {
      case "text": return (c["text"] as? String).flatMap { $0.isEmpty ? nil : .text($0) }
      case "tool_use": return .tool(c["name"] as? String ?? "tool", toolSummary(c["input"] as? [String: Any] ?? [:]))
      default: return nil
      }
    }
  case "result":
    var out: [AgentItem] = []
    if let s = o["session_id"] as? String { out.append(.session(s)) }
    let err = (o["is_error"] as? Bool) == true ? (o["subtype"] as? String ?? "error") : nil
    out.append(.done(cost: o["total_cost_usd"] as? Double, error: err))
    return out
  case "thread.started":  // codex
    return (o["thread_id"] as? String).map { [.session($0)] } ?? []
  case "item.started", "item.completed":
    guard let item = o["item"] as? [String: Any] else { return [] }
    switch item["type"] as? String {
    case "agent_message" where type == "item.completed": return (item["text"] as? String).map { [.text($0)] } ?? []
    case "command_execution" where type == "item.started": return [.tool("shell", oneLine(item["command"] as? String ?? ""))]
    case "file_change" where type == "item.completed":
      let paths = (item["changes"] as? [[String: Any]])?.compactMap { $0["path"] as? String } ?? []
      return [.tool("edit", oneLine(paths.joined(separator: ", ")))]
    default: return []
    }
  case "turn.completed":
    return [.done(cost: nil, error: nil)]
  case "turn.failed", "error":
    let msg = ((o["error"] as? [String: Any])?["message"] as? String) ?? (o["message"] as? String) ?? type
    return [.done(cost: nil, error: oneLine(msg))]
  default:
    return []
  }
}

/// agy: init → step_update (text streamed as deltas; tool steps) → result (full response).
private func parseAgyEvent(_ ev: String, _ o: [String: Any]) -> [AgentItem] {
  switch ev {
  case "init":
    return (o["conversation_id"] as? String).map { [.session($0)] } ?? []
  case "step_update":
    guard let s = o["step_update"] as? [String: Any], s["state"] as? String == "DONE",
          let t = s["step_type"] as? String, t != "user_input", t != "agent_response" else { return [] }
    var fields = s
    for k in ["conversation_id", "step_index", "state", "step_type", "usage", "duration_seconds", "text_delta"] {
      fields[k] = nil
    }
    return [.tool(t, toolSummary(fields))]
  case "result":
    guard let r = o["result"] as? [String: Any] else { return [] }
    var out: [AgentItem] = []
    if let c = r["conversation_id"] as? String { out.append(.session(c)) }
    let text = (r["response"] as? String ?? "").trimmingCharacters(in: .whitespacesAndNewlines)
    if !text.isEmpty { out.append(.text(text)) }
    let status = r["status"] as? String ?? ""
    out.append(.done(cost: nil, error: status == "SUCCESS" ? nil : status))
    return out
  default:
    return []
  }
}

/// System prompt appended to every turn: which video, where its files are, how to record progress.
func agentContext(video v: Video, channel: Channel?, channelDir: String) -> String {
  """
  Bạn đang chạy trong YT Hub Studio (app macOS của chủ kênh), cwd = \(channelDir).
  Video đang mở: \(v.code.isEmpty ? "(chưa có mã)" : v.code) — \(v.kind.label), kênh \(channel?.name ?? "?"), stage \(v.stage.rawValue).
  Title: \(v.title.isEmpty ? "(chưa có)" : v.title)
  Kịch bản: \(v.scriptPath.isEmpty ? "(chưa có)" : v.scriptPath) · Video: \(v.filePath.isEmpty ? "(chưa có)" : v.filePath)
  Ghi trạng thái bằng CLI `ythub` (YTHUB_ACTOR đã đặt sẵn): `ythub set \(v.code) --stage …`, `ythub log \(v.code) "…" --kind render|review|upload|blocker`, `ythub task add \(v.code) "…" --owner user`.
  Trả lời tiếng Việt, ngắn. Không commit/push git.
  """
}
