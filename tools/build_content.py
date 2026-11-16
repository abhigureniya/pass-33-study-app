"""Rebuild the app's content from the markdown study packs.
Needs:  pip install markdown
Usage:  python tools/build_content.py [path/to/study-packs]
The app itself (app.py) needs nothing beyond Python 3.8+."""
import sys, re, json, html, pathlib, markdown

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "source"
OUT = ROOT / "content"; OUT.mkdir(exist_ok=True)

SUBJECTS = [  # id, file, class, short name, code, pass mark (theory), language
    ("x-maths", "X-041-241-maths.md", "X", "Mathematics", "041 / 241", "33/100 incl. internal (aim 32/80)", "en"),
    ("x-science", "X-086-science.md", "X", "Science", "086", "33/100 incl. internal (aim 32/80)", "en"),
    ("x-sst", "X-087-social-science.md", "X", "Social Science", "087", "33/100 incl. internal (aim 32/80)", "en"),
    ("x-english", "X-184-english.md", "X", "English Lang. & Lit.", "184", "33/100 incl. internal", "en"),
    ("x-hindi", "X-002-085-hindi.md", "X", "हिंदी (A और B)", "002 / 085", "33/100 आंतरिक सहित", "hi"),
    ("xii-physics", "XII-042-physics.md", "XII", "Physics", "042", "24/70 theory + 10/30 practical", "en"),
    ("xii-chemistry", "XII-043-chemistry.md", "XII", "Chemistry", "043", "23/70 theory + 10/30 practical", "en"),
    ("xii-maths", "XII-041-maths.md", "XII", "Mathematics", "041", "27/80 theory + 7/20 internal", "en"),
    ("xii-biology", "XII-044-biology.md", "XII", "Biology", "044", "24/70 theory + 10/30 practical", "en"),
    ("xii-cs", "XII-083-computer-science.md", "XII", "Computer Science", "083", "24/70 theory + 10/30 practical", "en"),
    ("xii-english", "XII-301-english-core.md", "XII", "English Core", "301", "27/80 theory + 7/20 internal", "en"),
    ("xii-hindi", "XII-302-hindi-core.md", "XII", "हिंदी कोर", "302", "27/80 सैद्धांतिक + 7/20 आंतरिक", "hi"),
]

QSTART = re.compile(r"^\*\*Q\s?(\d+)\b")
HEAD = re.compile(r"^(#{1,6})\s+(.*)")
LIST = re.compile(r"^\s*([-*+]|\d+[.)])\s+")
INLINE_ANS = re.compile(r"\*\*\s*(Ans|Answer|उत्तर)\b")
ANS = re.compile(r"^\s*(\*\*)?\s*(Ans|Answer|उत्तर|आदर्श उत्तर|Solution|हल|Steps|Proof|Model answer|Sample answer|Derivation)\b", re.I)
MD_EXT = ["tables", "fenced_code", "sane_lists"]

NOSTAR = {"xii-physics": True, "xii-biology": True}  # packs without ★: star = asked in 2+ board years

def inline(t):
    t = html.escape(t, quote=False)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"`(.+?)`", r"<code>\1</code>", t)
    return re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?!\w)", r"<em>\1</em>", t)

def md(t):
    return markdown.markdown(t, extensions=MD_EXT)

def slug(s, used):
    b = re.sub(r"[^\w\u0900-\u097F]+", "-", s.lower()).strip("-")[:60] or "sec"
    s2, i = b, 2
    while s2 in used: s2, i = f"{b}-{i}", i + 1
    used.add(s2); return s2

def strip_tags(h):
    return html.unescape(re.sub(r"<[^>]+>", " ", h)).replace("\n", " ").strip()

def build(sid, fname, cls, name, code, passmark, lang):
    raw = (SRC / fname).read_text(encoding="utf-8").splitlines()
    lines, fz = [], False
    for l2 in raw:
        if l2.strip().startswith("```"): fz = not fz
        if not fz and LIST.match(l2) and lines and lines[-1].strip() and not LIST.match(lines[-1]) \
           and not lines[-1].startswith("|") and not lines[-1].startswith((" ", "\t")):
            lines.append("")
        lines.append(l2)
    out, cards, toc, used = [], {}, [], set()
    chapter, i, in_fence = "", 0, False
    questions = []
    while i < len(lines):
        ln = lines[i]
        if ln.strip().startswith("```"): in_fence = not in_fence
        m = HEAD.match(ln) if not in_fence else None
        if m:
            level, text = len(m.group(1)), m.group(2).strip()
            if level == 1:
                i += 1; continue  # title shown by the app
            hid = slug(text, used)
            if level <= 3: toc.append({"id": hid, "level": level, "text": re.sub(r"[*`]", "", text)})
            if level == 3: chapter = re.sub(r"[*`]", "", text)
            if level == 2 and not re.search(r"question|प्रश्न", text, re.I): chapter = ""
            out.append(f"<h{level} id=\"{hid}\">{inline(text)}</h{level}>"); out.append(""); i += 1; continue
        q = QSTART.match(ln) if not in_fence else None
        if q:
            # block = from this Q line to the next Q line / heading / rule (fence-aware)
            j, fence, block = i, False, []
            while j < len(lines):
                l2 = lines[j]
                if j > i and not fence and (QSTART.match(l2) or HEAD.match(l2) or re.match(r"^---\s*$", l2)): break
                if l2.strip().startswith("```"): fence = not fence
                block.append(l2); j += 1
            # split: question ends at the first answer marker or first blank line outside a fence
            k, fence = 0, False
            while k < len(block):
                l2 = block[k]
                if k > 0 and not fence and (ANS.match(l2) or l2.strip() == "" or LIST.match(l2)): break
                if l2.strip().startswith("```"): fence = not fence
                k += 1
            qpart, apart = block[:k], block[k:]
            # inline answer on the question line: "... question? **Ans: x**"
            for qi, ql in enumerate(qpart):
                mi = INLINE_ANS.search(ql)
                if mi and (mi.start() > 0 or qi > 0):
                    apart = [ql[mi.start():].strip()] + qpart[qi + 1:] + [""] + apart
                    qpart = qpart[:qi] + ([ql[:mi.start()].rstrip()] if ql[:mi.start()].strip() else [])
                    break
            qnum = q.group(1); qid = f"{sid}-q{qnum}"
            while qid in cards: qid += "b"
            qhtml, ahtml = md("\n".join(qpart)), md("\n".join(apart).strip())
            qtxt = "\n".join(qpart)
            star = bool("★" in qtxt or (NOSTAR.get(sid) and len(set(re.findall(r"\b20(1[5-9]|2[0-6])\b", qtxt))) >= 2))
            ph = f"QCARDPH{len(cards)}X"
            cards[ph] = (f'<div class="qcard{" star" if star else ""}" id="{qid}" data-qid="{qid}">'
                         f'<div class="qtext">{qhtml}</div>'
                         + (f'<div class="qans">{ahtml}</div>' if ahtml.strip() else "")
                         + '</div>')
            questions.append({"id": qid, "n": qnum, "star": star, "chapter": chapter,
                              "q": qhtml, "a": ahtml})
            out.append(ph); out.append(""); i = j; continue
        out.append(ln); i += 1
    body = md("\n".join(out))
    for ph, card in cards.items():
        body = body.replace(f"<p>{ph}</p>", card)
    title = next((l[2:].strip() for l in lines if l.startswith("# ")), name)
    (OUT / f"{sid}.html").write_text(body, encoding="utf-8")
    (OUT / f"{sid}.questions.json").write_text(json.dumps(questions, ensure_ascii=False), encoding="utf-8")
    # search index: sections of plain text
    idx = []
    for part in re.split(r'(?=<h[23] id=")', body):
        mm = re.match(r'<h[23] id="([^"]+)">(.*?)</h[23]>', part, re.S)
        if mm: idx.append({"sid": sid, "anchor": mm.group(1), "title": strip_tags(mm.group(2)), "text": strip_tags(part)})
    for qq in questions:
        idx.append({"sid": sid, "anchor": qq["id"], "title": f"Q{qq['n']} · {qq['chapter']}", "text": strip_tags(qq["q"] + " " + qq["a"])})
    return {"id": sid, "cls": cls, "name": name, "code": code, "pass": passmark, "lang": lang,
            "title": re.sub(r"[*`]", "", title), "toc": toc, "questions": len(questions),
            "stars": sum(q["star"] for q in questions),
            "pdf": fname.replace(".md", ".pdf")}, idx

manifest, index = [], []
for s in SUBJECTS:
    meta, idx = build(*s); manifest.append(meta); index += idx
    print(f"{meta['id']:14} {meta['questions']:4} questions  {meta['stars']:3} starred  {len(meta['toc'])} toc")
(OUT / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=1), encoding="utf-8")
(OUT / "search_index.json").write_text(json.dumps(index, ensure_ascii=False), encoding="utf-8")
print("Done ->", OUT)
