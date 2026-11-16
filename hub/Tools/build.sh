#!/bin/bash
# Build YTHub.app and install it to ~/Applications.
# Usage:  ./Tools/build.sh          # build + install
#         ./Tools/build.sh --run    # also (re)launch it
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
APP="$ROOT/.build/YTHub.app"
DEST="$HOME/Applications/YTHub.app"
MIN_OS="15.0"   # WindowDragGesture

rm -rf "$APP"
mkdir -p "$APP/Contents/MacOS" "$APP/Contents/Resources"
swiftc -O -whole-module-optimization -parse-as-library -target "$(uname -m)-apple-macosx$MIN_OS" \
  -file-prefix-map "$ROOT=." -o "$APP/Contents/MacOS/YTHub" "$ROOT"/Sources/YTHub/*.swift
cp "$ROOT/Resources/schema.sql" "$APP/Contents/Resources/"
[ -f "$ROOT/Resources/AppIcon.icns" ] && cp "$ROOT/Resources/AppIcon.icns" "$APP/Contents/Resources/"
cat > "$APP/Contents/Info.plist" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>CFBundleName</key><string>YT Hub</string>
  <key>CFBundleDisplayName</key><string>YT Hub</string>
  <key>CFBundleIdentifier</key><string>dev.fire10.ythub</string>
  <key>CFBundleExecutable</key><string>YTHub</string>
  <key>CFBundlePackageType</key><string>APPL</string>
  <key>CFBundleIconFile</key><string>AppIcon</string>
  <key>CFBundleShortVersionString</key><string>$(tr -d '[:space:]' < "$ROOT/VERSION")</string>
  <key>CFBundleVersion</key><string>1</string>
  <key>LSMinimumSystemVersion</key><string>$MIN_OS</string>
  <key>NSHighResolutionCapable</key><true/>
</dict></plist>
PLIST
codesign --force -s - "$APP"   # ad-hoc: the app needs no permissions

if [ "${1:-}" = "--run" ]; then
  osascript -e 'tell application id "dev.fire10.ythub" to quit' 2>/dev/null || true
  for _ in 1 2 3 4 5 6 7 8 9 10; do pgrep -x YTHub >/dev/null || break; sleep 0.5; done
fi
mkdir -p "$(dirname "$DEST")"
rm -rf "${DEST:?}"
ditto "$APP" "$DEST"
echo "✓ Installed $DEST"
[ "${1:-}" = "--run" ] && open "$DEST"
exit 0
