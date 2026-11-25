import AppKit
import SwiftUI

@main
struct YTHubApp: App {
  @NSApplicationDelegateAdaptor private var delegate: AppDelegate
  @StateObject private var model = AppModel()

  var body: some Scene {
    WindowGroup("YT Hub") {
      ContentView().environmentObject(model).environmentObject(model.jobs).frame(minWidth: 1360, minHeight: 700)
    }
    .windowStyle(.hiddenTitleBar)
    .commands {
      CommandGroup(after: .newItem) {
        Button("Tải lại từ DB") { model.reload() }.keyboardShortcut("r")
      }
    }
  }
}

final class AppDelegate: NSObject, NSApplicationDelegate {
  func applicationShouldTerminateAfterLastWindowClosed(_ app: NSApplication) -> Bool { true }
  /// Dev servers (Remotion Studio…) must not outlive the app.
  func applicationWillTerminate(_ n: Notification) {
    let k = Process()
    k.executableURL = URL(fileURLWithPath: "/usr/bin/pkill")
    k.arguments = ["-TERM", "-P", "\(ProcessInfo.processInfo.processIdentifier)"]
    try? k.run()
  }
}
