/* Pass-33 Study App - front end (no libraries) */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const app = $("#app");
  const store = {
    get(k, d) { try { return JSON.parse(localStorage.getItem("p33:" + k)) ?? d; } catch { return d; } },
    set(k, v) { localStorage.setItem("p33:" + k, JSON.stringify(v)); },
  };
  let SUBJECTS = [];
  const qCache = {};
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- settings ---------- */
  function applySettings() {
    document.documentElement.dataset.theme = store.get("theme", matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.style.setProperty("--fs", store.get("fs", 16) + "px");
  }
  $("#themeBtn").onclick = () => { store.set("theme", document.documentElement.dataset.theme === "dark" ? "light" : "dark"); applySettings(); };
  $("#fontUp").onclick = () => { store.set("fs", Math.min(22, store.get("fs", 16) + 1)); applySettings(); };
  $("#fontDown").onclick = () => { store.set("fs", Math.max(13, store.get("fs", 16) - 1)); applySettings(); };
  $("#searchForm").onsubmit = e => { e.preventDefault(); const q = $("#searchInput").value.trim(); if (q) location.hash = "#/search?q=" + encodeURIComponent(q); };
  $("#menuBtn").onclick = () => { const t = $(".toc"); if (t) t.classList.toggle("open"); };
  applySettings();

  function toast(msg) { const t = $("#toast"); t.textContent = msg; t.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => t.hidden = true, 1800); }

  /* ---------- progress ---------- */
  const learned = () => store.get("learned", {});
  function setLearned(id, on) { const l = learned(); if (on) l[id] = 1; else delete l[id]; store.set("learned", l); }
  const countLearned = sid => Object.keys(learned()).filter(k => k.startsWith(sid + "-q")).length;

  async function api(path) { const r = await fetch(path); if (!r.ok) throw new Error(r.status); return r.json(); }
  async function questions(sid) { return qCache[sid] ||= await api("/api/questions/" + sid); }

  /* ---------- router ---------- */
  async function route() {
    if (!SUBJECTS.length) SUBJECTS = await api("/api/subjects");
    const h = location.hash.slice(1) || "/";
    const [path, query = ""] = h.split("?");
    const params = new URLSearchParams(query);
    const parts = path.split("/").filter(Boolean);
    window.scrollTo(0, 0);
    if (parts[0] === "s" && parts[1]) return viewSubject(parts[1], decodeURIComponent(parts.slice(2).join("/")));
    if (parts[0] === "practice") return viewPractice(parts[1], params);
    if (parts[0] === "search") return viewSearch(params.get("q") || "", params.get("subject"));
    return viewHome();
  }
  addEventListener("hashchange", route);

  /* ---------- home ---------- */
  function subjectCard(s) {
    const done = countLearned(s.id), pct = s.questions ? Math.round(done * 100 / s.questions) : 0;
    return `<div class="card" lang="${s.lang}">
      <h3>${esc(s.name)}</h3>
      <div class="code">Class ${s.cls} · Code ${esc(s.code)}</div>
      <div class="meta"><span class="pill">${s.questions} solved Qs</span>${s.stars ? `<span class="pill star">★ ${s.stars} most asked</span>` : ""}</div>
      <div class="pass">🎯 Pass: ${esc(s.pass)}</div>
      <div class="bar"><i style="width:${pct}%"></i></div>
      <div class="bar-label">${done} of ${s.questions} learned (${pct}%)</div>
      <div class="actions"><a class="btn" href="#/s/${s.id}">Study</a><a class="btn ghost" href="#/practice/${s.id}">Practice</a></div>
    </div>`;
  }
  function viewHome() {
    const total = SUBJECTS.reduce((a, s) => a + s.questions, 0);
    const done = Object.keys(learned()).length;
    const last = store.get("last", null);
    const lastS = last && SUBJECTS.find(s => s.id === last.sid);
    const block = cls => `<div class="class-title"><h2>Class ${cls}</h2><span>${cls === "X" ? "Pass rule: 33% of 100, theory and internal marks added together" : "Pass rule: 33% in theory and 33% in practical/internal, separately"}</span></div>
      <div class="grid">${SUBJECTS.filter(s => s.cls === cls).map(subjectCard).join("")}</div>`;
    app.innerHTML = `
      <section class="hero">
        <h1>Pass-33 Study App</h1>
        <p>CBSE 2026-27 · Every subject has the exam pattern, a 33-mark plan, past-paper trends since 2015, solved must-do questions and a 30-day timetable.</p>
        <div class="stats"><div><b>${SUBJECTS.length}</b>subjects</div><div><b>${total}</b>solved questions</div><div><b>${done}</b>learned so far</div></div>
        ${lastS ? `<a class="continue" href="#/s/${lastS.id}${last.anchor ? "/" + encodeURIComponent(last.anchor) : ""}">Continue: ${esc(lastS.name)} (Class ${lastS.cls}) →</a>` : ""}
      </section>
      ${block("X")}${block("XII")}
      <div class="foot">
        <span>How to use: start with section 3 (the 33-mark plan), learn the ★ questions first, then test yourself in Practice.</span>
        <span><a href="/pdf/Class%20X%20Pass-33%20Study%20Packs.pdf" target="_blank">Class X PDF book</a> · <a href="/pdf/Class%20XII%20Pass-33%20Study%20Packs.pdf" target="_blank">Class XII PDF book</a> · <button class="linkbtn" id="resetBtn">Reset my progress</button></span>
      </div>`;
    $("#resetBtn").onclick = () => { if (confirm("Clear all 'learned' marks on this device?")) { store.set("learned", {}); viewHome(); } };
  }

  /* ---------- subject ---------- */
  let filter = "all";
  async function viewSubject(sid, anchor) {
    const s = SUBJECTS.find(x => x.id === sid);
    if (!s) { location.hash = "#/"; return; }
    app.innerHTML = `<div class="empty">Loading ${esc(s.name)}…</div>`;
    const { html } = await api("/api/subject/" + sid);
    store.set("last", { sid, anchor: anchor || "" });
    const toc = s.toc.map(t => `<a href="#/s/${sid}/${encodeURIComponent(t.id)}" class="l${t.level}" data-id="${esc(t.id)}">${esc(t.text)}</a>`).join("");
    app.innerHTML = `
      <div class="subject" lang="${s.lang}">
        <nav class="toc"><a class="back" href="#/">← All subjects</a>${toc}</nav>
        <main>
          <div class="toolbar">
            <strong>${esc(s.name)} <small style="color:var(--muted)">· ${s.cls}</small></strong>
            <span class="grow"></span>
            <button class="chip" data-f="all">All Qs</button>
            ${s.stars ? `<button class="chip" data-f="star">★ Most asked</button>` : ""}
            <button class="chip" data-f="todo">Not learned</button>
            <button class="chip" id="openAll">Show all answers</button>
            <a class="btn ghost" href="#/practice/${sid}">Practice</a>
            <a class="btn ghost" href="/pdf/${encodeURIComponent(s.pdf)}" target="_blank">PDF</a>
          </div>
          <article class="doc">
            <h1 class="doc-title">${esc(s.title)}</h1>
            <div class="doc-sub">🎯 Pass: ${esc(s.pass)} · <span id="progLabel"></span></div>
            ${html}
          </article>
        </main>
      </div>`;
    enhanceCards(sid);
    $$(".chip[data-f]").forEach(c => c.onclick = () => { filter = c.dataset.f; applyFilter(); });
    let allOpen = false;
    $("#openAll").onclick = e => { allOpen = !allOpen; $$(".qcard").forEach(c => c.classList.toggle("open", allOpen)); e.target.textContent = allOpen ? "Hide all answers" : "Show all answers"; e.target.classList.toggle("on", allOpen); refreshButtons(); };
    $$(".toc a[data-id]").forEach(a => a.onclick = () => $(".toc").classList.remove("open"));
    applyFilter();
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) {
        if (el.classList.contains("qcard")) { el.classList.add("open", "flash"); setTimeout(() => el.classList.remove("flash"), 2200); refreshButtons(); }
        setTimeout(() => el.scrollIntoView({ block: "start" }), 30);
        $$(".toc a").forEach(a => a.classList.toggle("active", a.dataset.id === anchor));
      }
    }
  }
  function enhanceCards(sid) {
    const l = learned();
    $$(".qcard").forEach(card => {
      const id = card.dataset.qid, hasAns = !!$(".qans", card);
      card.classList.toggle("learned", !!l[id]);
      const bar = document.createElement("div");
      bar.className = "qbar";
      bar.innerHTML = (hasAns ? `<button class="show">Show answer</button>` : "") +
        `<button class="learn">✓ Learned</button><button class="copy" title="Copy a link to this question">🔗</button>`;
      $(".qtext", card).after(bar);
      if (hasAns) $(".show", bar).onclick = () => { card.classList.toggle("open"); refreshButtons(); };
      $(".learn", bar).onclick = () => {
        const on = !card.classList.contains("learned");
        card.classList.toggle("learned", on); setLearned(id, on); refreshButtons(); updateProg(sid);
        toast(on ? "Marked as learned ✓" : "Unmarked"); if (filter === "todo") applyFilter();
      };
      $(".copy", bar).onclick = () => { const u = location.origin + "/#/s/" + sid + "/" + id; navigator.clipboard?.writeText(u); toast("Link copied"); };
    });
    refreshButtons(); updateProg(sid);
  }
  function refreshButtons() {
    $$(".qcard").forEach(c => {
      const b = $(".qbar .show", c); if (b) b.textContent = c.classList.contains("open") ? "Hide answer" : "Show answer";
      const lb = $(".qbar .learn", c); lb.classList.toggle("on", c.classList.contains("learned"));
    });
  }
  function updateProg(sid) {
    const s = SUBJECTS.find(x => x.id === sid), d = countLearned(sid);
    const el = $("#progLabel"); if (el) el.textContent = `${d} of ${s.questions} questions learned`;
  }
  function applyFilter() {
    $$(".chip[data-f]").forEach(c => c.classList.toggle("on", c.dataset.f === filter));
    $$(".qcard").forEach(c => {
      const hide = (filter === "star" && !c.classList.contains("star")) || (filter === "todo" && c.classList.contains("learned"));
      c.classList.toggle("hidden-by-filter", hide);
    });
  }

  /* ---------- practice ---------- */
  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  async function viewPractice(sid, params) {
    const s = SUBJECTS.find(x => x.id === sid) || SUBJECTS[0];
    const mode = params.get("mode"), n = params.get("n");
    if (!mode) {
      app.innerHTML = `<div class="practice"><div class="pcard setup">
        <h2 style="margin:0">Practice</h2>
        <p style="margin:0;color:var(--muted)">Read the question, say or write your answer, then reveal the model answer and be honest with yourself.</p>
        <label>Subject<select id="pS">${["X", "XII"].map(c => `<optgroup label="Class ${c}">${SUBJECTS.filter(x => x.cls === c).map(x => `<option value="${x.id}" ${x.id === s.id ? "selected" : ""}>${esc(x.name)} (${x.cls})</option>`).join("")}</optgroup>`).join("")}</select></label>
        <label>Which questions<select id="pM"><option value="star">★ Most asked first (best for passing)</option><option value="todo">Only ones I haven't learned</option><option value="all">All questions</option></select></label>
        <label>How many<select id="pN"><option value="10">10 questions (quick test)</option><option value="20">20 questions</option><option value="all">All of them</option></select></label>
        <div class="pactions"><button class="btn" id="pGo">Start</button><a class="btn ghost" href="#/s/${s.id}">Back to notes</a></div>
      </div></div>`;
      $("#pGo").onclick = () => location.hash = `#/practice/${$("#pS").value}?mode=${$("#pM").value}&n=${$("#pN").value}`;
      return;
    }
    let qs = (await questions(s.id)).filter(q => q.a && q.a.trim());
    const l = learned();
    if (mode === "star") { const st = qs.filter(q => q.star); qs = st.length ? st : qs; }
    if (mode === "todo") qs = qs.filter(q => !l[q.id]);
    qs = shuffle(qs.slice());
    if (n !== "all") qs = qs.slice(0, +n || 10);
    if (!qs.length) { app.innerHTML = `<div class="practice"><div class="pcard empty">Nothing left here. You've learned them all! 🎉<div class="pactions" style="justify-content:center"><a class="btn" href="#/practice/${s.id}">Choose again</a></div></div></div>`; return; }
    let i = 0, knew = 0; const again = [];
    const show = () => {
      if (i >= qs.length) {
        const pct = Math.round(knew * 100 / qs.length);
        app.innerHTML = `<div class="practice"><div class="pcard" style="text-align:center">
          <div class="score">${knew} / ${qs.length}</div>
          <p>${pct >= 60 ? "Excellent, you're on track to pass comfortably." : pct >= 33 ? "Good, you're above the pass line. Revise the ones you missed." : "Keep going. Revise the missed questions and try again tomorrow."}</p>
          ${again.length ? `<p style="color:var(--muted)">To revise: ${again.map(q => `<a href="#/s/${s.id}/${q.id}">Q${esc(q.n)}</a>`).join(", ")}</p>` : ""}
          <div class="pactions" style="justify-content:center"><a class="btn" href="#/practice/${s.id}?mode=${mode}&n=${n}" onclick="setTimeout(()=>dispatchEvent(new HashChangeEvent('hashchange')),0)">Practise again</a><a class="btn ghost" href="#/s/${s.id}">Back to notes</a><a class="btn ghost" href="#/">Home</a></div></div></div>`;
        return;
      }
      const q = qs[i];
      app.innerHTML = `<div class="practice" lang="${s.lang}"><div class="pcard">
        <div class="phead"><strong>${esc(s.name)} · Q ${i + 1} of ${qs.length}</strong><span class="pchapter">${q.star ? "★ " : ""}${esc(q.chapter || "")}</span></div>
        <div class="bar"><i style="width:${Math.round(i * 100 / qs.length)}%"></i></div>
        <div class="doc" style="border:none;box-shadow:none;padding:1rem 0 0">${q.q}<div class="qans">${q.a}</div></div>
        <div class="pactions" id="pa"><button class="btn" id="rev">Reveal answer</button><button class="btn ghost" id="skip">Skip</button></div>
      </div></div>`;
      $("#rev").onclick = () => {
        $(".pcard").classList.add("open");
        $("#pa").innerHTML = `<button class="btn ok" id="yes">✓ I knew it</button><button class="btn warn" id="no">↻ Need to revise</button>`;
        $("#yes").onclick = () => { knew++; setLearned(q.id, true); i++; show(); };
        $("#no").onclick = () => { again.push(q); setLearned(q.id, false); i++; show(); };
      };
      $("#skip").onclick = () => { again.push(q); i++; show(); };
    };
    show();
  }

  /* ---------- search ---------- */
  async function viewSearch(q, subject) {
    $("#searchInput").value = q;
    app.innerHTML = `<div class="empty">Searching…</div>`;
    const hits = await api(`/api/search?q=${encodeURIComponent(q)}${subject ? "&subject=" + subject : ""}`);
    const words = q.toLowerCase().split(/\s+/).filter(Boolean).map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const hl = t => words.length ? esc(t).replace(new RegExp("(" + words.join("|") + ")", "gi"), "<mark>$1</mark>") : esc(t);
    const name = sid => { const s = SUBJECTS.find(x => x.id === sid); return s ? `${s.name} · Class ${s.cls}` : sid; };
    app.innerHTML = `<h2>Results for “${esc(q)}” <small style="color:var(--muted);font-weight:400">${hits.length} found</small></h2>
      <div class="results">${hits.map(h => `<a class="result" href="#/s/${h.sid}/${encodeURIComponent(h.anchor)}"><div class="rs">${esc(name(h.sid))}</div><div class="rt">${hl(h.title)}</div><div class="sn">${hl(h.snippet)}</div></a>`).join("") || `<div class="empty">No match. Try fewer or simpler words.</div>`}</div>`;
  }

  route().catch(e => { app.innerHTML = `<div class="empty">Could not load the app (${esc(e.message)}). Is app.py still running?</div>`; });
})();
