"""Serve one directory on 127.0.0.1 with CORS + Private Network Access headers (read-only, GET only).
Used to hand our own images to a web page in the built-in browser (e.g. Flow image-to-video). Usage: serve_cors.py <dir> [port]"""
import sys
from functools import partial
from http.server import HTTPServer, SimpleHTTPRequestHandler

class H(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Private-Network', 'true')
        super().end_headers()
    def do_OPTIONS(self):
        self.send_response(204); self.send_header('Access-Control-Allow-Headers', '*'); self.end_headers()
    def log_message(self, *a):
        pass

HTTPServer(('127.0.0.1', int(sys.argv[2]) if len(sys.argv) > 2 else 8766), partial(H, directory=sys.argv[1])).serve_forever()
