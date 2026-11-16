import AppKit
import SwiftUI

// Renders the main window offscreen to PNG (no Screen Recording permission needed).
// Usage: snapshot <out.png> [dark|light] [width] [height] [channels | video-id]
let args = CommandLine.arguments
let out = args[1]
let dark = args.count > 2 ? args[2] == "dark" : true
let size = NSSize(width: Double(args.count > 3 ? args[3] : "1400")!, height: Double(args.count > 4 ? args[4] : "820")!)

_ = NSApplication.shared
NSApp.setActivationPolicy(.accessory)
MainActor.assumeIsolated {
  let model = AppModel()
  let win = NSWindow(contentRect: NSRect(origin: NSPoint(x: -6000, y: -6000), size: size),
                     styleMask: [.titled, .closable, .miniaturizable, .resizable, .fullSizeContentView],
                     backing: .buffered, defer: false)
  win.titlebarAppearsTransparent = true
  win.titleVisibility = .hidden
  win.appearance = NSAppearance(named: dark ? .darkAqua : .aqua)
  let state = args.count > 5 ? args[5] : ""
  let view = ContentView(channelsOpen: state == "channels", selected: Int64(state))
  let host = NSHostingView(rootView: view.environmentObject(model))
  win.contentView = host
  win.orderFrontRegardless()
  RunLoop.main.run(until: Date().addingTimeInterval(1.5))
  let rep = host.bitmapImageRepForCachingDisplay(in: host.bounds)!
  host.cacheDisplay(in: host.bounds, to: rep)
  try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: out))
  print("wrote \(out) \(Int(size.width))x\(Int(size.height))")
}
