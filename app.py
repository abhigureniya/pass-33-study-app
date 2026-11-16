"""
Pass-33 Study App  -  CBSE Class X & XII (2026-27)
Runs with plain Python 3.8+ (no installs). Start it with:

    python app.py            -> opens http://localhost:8033 on this computer
    python app.py --lan      -> also lets phones/laptops on the same Wi-Fi open it
    python app.py --port 9000 --no-browser
"""
import argparse, json, mimetypes, os, re, socket, sys, threading, webbrowser
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs, unquote

BASE = os.path.dirname(os.path.abspath(__file__))
CONTENT = os.path.join(BASE, "content")
STATIC = os.path.join(BASE, "static")
PDFS = os.path.join(BASE, "pdf")

mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("text/css", ".css")


def load_json(name):
    with open(os.path.join(CONTENT, name), encoding="utf-8") as f:
        return json.load(f)


MANIFEST = load_json("manifest.json")
SUBJECT_IDS = {s["id"] for s in MANIFEST}
INDEX = load_json("search_index.json")
for item in INDEX:
    item["_low"] = (item["title"] + " " + item["text"]).lower()


def search(query, subject=None, limit=60):
    words = [w for w in re.split(r"\s+", query.lower().strip()) if w]
    if not words:
        return []
    hits = []
    for item in INDEX:
        if subject and item["sid"] != subject:
            continue
        low = item["_low"]
        if all(w in low for w in words):
            score = sum(low.count(w) for w in words) + (5 if any(w in item["title"].lower() for w in words) else 0)
            text = item["text"]
            pos = text.lower().find(words[0])
            start = max(0, pos - 70)
            snippet = ("…" if start else "") + text[start:start + 220] + ("…" if start + 220 < len(text) else "")
            hits.append({"sid": item["sid"], "anchor": item["anchor"], "title": item["title"],
                         "snippet": snippet, "score": score})
    hits.sort(key=lambda h: -h["score"])
    return hits[:limit]


class Handler(SimpleHTTPRequestHandler):
    server_version = "Pass33Study/1.0"

    def log_message(self, fmt, *args):  # keep the console quiet
        pass

    def send_json(self, obj, code=200):
        data = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(data)

    def send_file(self, path):
        if not os.path.isfile(path):
            self.send_error(404, "Not found")
            return
        ctype = mimetypes.guess_type(path)[0] or "application/octet-stream"
        if ctype.startswith("text/") or ctype.endswith("javascript"):
            ctype += "; charset=utf-8"
        with open(path, "rb") as f:
            data = f.read()
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        url = urlparse(self.path)
        path = unquote(url.path)
        qs = parse_qs(url.query)

        if path in ("/", "/index.html"):
            return self.send_file(os.path.join(STATIC, "index.html"))
        if path == "/api/subjects":
            return self.send_json(MANIFEST)
        m = re.fullmatch(r"/api/subject/([\w-]+)", path)
        if m and m.group(1) in SUBJECT_IDS:
            sid = m.group(1)
            with open(os.path.join(CONTENT, f"{sid}.html"), encoding="utf-8") as f:
                body = f.read()
            meta = next(s for s in MANIFEST if s["id"] == sid)
            return self.send_json({"meta": meta, "html": body})
        m = re.fullmatch(r"/api/questions/([\w-]+)", path)
        if m and m.group(1) in SUBJECT_IDS:
            return self.send_json(load_json(f"{m.group(1)}.questions.json"))
        if path == "/api/search":
            q = (qs.get("q") or [""])[0]
            subj = (qs.get("subject") or [None])[0]
            return self.send_json(search(q, subj if subj in SUBJECT_IDS else None))
        if path.startswith("/static/"):
            target = os.path.normpath(os.path.join(STATIC, path[len("/static/"):]))
            if target.startswith(STATIC):
                return self.send_file(target)
        if path.startswith("/pdf/"):
            target = os.path.normpath(os.path.join(PDFS, path[len("/pdf/"):]))
            if target.startswith(PDFS):
                return self.send_file(target)
        self.send_error(404, "Not found")


def lan_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except OSError:
        return "your-computer-ip"


def main():
    ap = argparse.ArgumentParser(description="Pass-33 CBSE study app")
    ap.add_argument("--port", type=int, default=8033)
    ap.add_argument("--lan", action="store_true", help="share on the local Wi-Fi/LAN")
    ap.add_argument("--no-browser", action="store_true")
    a = ap.parse_args()
    host = "0.0.0.0" if a.lan else "127.0.0.1"
    try:
        srv = ThreadingHTTPServer((host, a.port), Handler)
    except OSError:
        print(f"Port {a.port} is busy. Try:  python app.py --port {a.port + 1}")
        sys.exit(1)
    local = f"http://localhost:{a.port}"
    print("=" * 60)
    print(" Pass-33 Study App is running")
    print(f" On this computer : {local}")
    if a.lan:
        print(f" Students on Wi-Fi: http://{lan_ip()}:{a.port}")
        print(" (Allow Python through Windows Firewall if asked.)")
    print(" Press Ctrl+C to stop.")
    print("=" * 60)
    if not a.no_browser:
        threading.Timer(0.8, lambda: webbrowser.open(local)).start()
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == "__main__":
    main()
