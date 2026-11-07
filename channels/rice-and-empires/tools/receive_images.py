"""Tiny local receiver: POST /save?name=<file> with raw bytes -> writes into OUT_DIR.

Binds 127.0.0.1 only. Used to pull images generated in the AI Studio playground
(built-in browser cannot download files) into the Remotion public/ folder.
"""
import re
import sys
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

OUT_DIR = Path(sys.argv[1]).resolve()
OUT_DIR.mkdir(parents=True, exist_ok=True)
MAX_BYTES = 15 * 1024 * 1024


class H(BaseHTTPRequestHandler):
    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Private-Network", "true")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")

    def do_GET(self):
        # Relay page: receives {name, blob} via postMessage from the opener and POSTs it same-origin.
        page = b"""<!doctype html><title>receiver</title><pre id=log>ready</pre><script>
window.addEventListener('message', async (e) => {
  if (e.origin !== 'https://aistudio.google.com') return;
  const {name, blob} = e.data || {};
  const r = await fetch('/save?name=' + encodeURIComponent(name), {method: 'POST', body: blob});
  document.getElementById('log').textContent += '\\n' + name + ' ' + r.status;
  e.source.postMessage({name, status: r.status}, e.origin);
});
if (window.opener) window.opener.postMessage({ready: true}, 'https://aistudio.google.com');
</script>"""
        self.send_response(200)
        self.send_header("Content-Type", "text/html")
        self.end_headers()
        self.wfile.write(page)

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def _multipart(self):
        # Form POST from the AI Studio tab (navigation, not fetch, so page CSP connect-src does not apply).
        import cgi  # Python 3.12: deprecated but present

        form = cgi.FieldStorage(fp=self.rfile, headers=self.headers, environ={"REQUEST_METHOD": "POST"})
        saved = []
        items = form["f"] if "f" in form else []
        for it in items if isinstance(items, list) else [items]:
            name = Path(it.filename or "").name.lower()
            if not re.fullmatch(r"[a-z0-9_-]{1,40}\.(jpg|jpeg|png|webp)", name):
                continue
            data = it.file.read(MAX_BYTES + 1)
            if len(data) > MAX_BYTES:
                continue
            (OUT_DIR / name).write_bytes(data)
            saved.append(f"{name} {len(data)}")
        print("saved", saved, flush=True)
        self.send_response(200)
        self.send_header("Content-Type", "text/plain")
        self.end_headers()
        self.wfile.write(("saved:\n" + "\n".join(saved)).encode())

    def do_POST(self):
        if urlparse(self.path).path == "/upload":
            return self._multipart()
        q = parse_qs(urlparse(self.path).query)
        name = q.get("name", [""])[0]
        if not re.fullmatch(r"[a-z0-9_-]{1,40}\.(jpg|jpeg|png|webp)", name):
            self.send_response(400)
            self._cors()
            self.end_headers()
            return
        n = int(self.headers.get("Content-Length", "0"))
        if n <= 0 or n > MAX_BYTES:
            self.send_response(413)
            self._cors()
            self.end_headers()
            return
        (OUT_DIR / name).write_bytes(self.rfile.read(n))
        print(f"saved {name} {n} bytes", flush=True)
        self.send_response(200)
        self._cors()
        self.end_headers()
        self.wfile.write(b"ok")


HTTPServer(("127.0.0.1", 8765), H).serve_forever()
