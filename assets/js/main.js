/* Renders the portfolio from window.PORTFOLIO (assets/js/content.js).
   You normally don't need to edit this file — change content.js instead. */
(function () {
  "use strict";
  var data = window.PORTFOLIO;
  if (!data) return;

  var $ = function (sel) { return document.querySelector(sel); };
  var esc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };
  // Text in [square brackets] is shown as a highlighted placeholder.
  var txt = function (s) { return esc(s).replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>'); };
  var safeUrl = function (u) { return /^(https?:|mailto:|tel:|#)/i.test(u || "") ? u : ""; };
  var each = function (arr, fn) { return (arr || []).map(fn).join(""); };

  var ICON = {
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    plane: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h18M15 6l6 6-6 6"/></svg>',
    moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    cap: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 9l10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
    linkedin: '<svg class="solid" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.6 4.77 6V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.95 1.32-1.95 2.69V21h-4V9.75Z"/></svg>',
    headset: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/><path d="M19 20a3 3 0 0 1-3 2h-3"/></svg>',
    monitor: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>',
    network: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-2h12v2"/></svg>',
    server: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3Z"/><path d="M9 12l2 2 4-4"/></svg>',
    tool: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/></svg>',
    users: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.5a6.5 6.5 0 0 1 3.5 5.5"/></svg>',
    puzzle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 3h4v3a2 2 0 1 0 4 0V3h3v7h-3a2 2 0 1 0 0 4h3v7h-7v-3a2 2 0 1 0-4 0v3H3v-7h3a2 2 0 1 0 0-4H3V3h7Z"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.3-4.9L4 8"/><path d="M4 3v5h5M4 13a8 8 0 0 0 14.3 4.9L20 16"/><path d="M20 21v-5h-5"/></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h13"/></svg>',
    target: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
    bulb: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3Z"/></svg>',
    compass: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z"/></svg>',
    github: '<svg class="solid" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>'
  };

  var p = data.profile || {};
  var c = data.contact || {};

  // ---- Bound text -------------------------------------------------------
  var binds = { name: p.name, initials: p.initials, eyebrow: p.eyebrow, title: p.title, intro: p.intro, resumeRequest: data.resumeRequest };
  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var v = binds[el.getAttribute("data-bind")];
    if (v != null) el.innerHTML = txt(v);
  });

  // ---- Hero profile card ------------------------------------------------
  var facts = [[ICON.pin, p.location], [ICON.clock, p.availability], [ICON.briefcase, p.openTo], [ICON.plane, p.relocation], [ICON.moon, p.shifts]];
  $("#profileList").innerHTML = each(facts.filter(function (f) { return f[1]; }), function (f) { return "<li>" + f[0] + "<span>" + txt(f[1]) + "</span></li>"; });
  $("#profileNow").innerHTML = txt(p.currentRole) + (p.currentOrg ? ' <span class="muted">at</span> ' + txt(p.currentOrg) : "");

  // ---- About ------------------------------------------------------------
  $("#aboutBody").innerHTML = each(data.about, function (para) { return "<p>" + txt(para) + "</p>"; });
  var goals = data.goals || {};
  $("#goalText").innerHTML = txt(goals.statement);
  $("#targetRoles").innerHTML = each(goals.targetRoles, function (r) {
    var role = typeof r === "string" ? r : r.role;
    var icon = (typeof r === "object" && ICON[r.icon]) || ICON.briefcase;
    return '<li><span class="role-icon">' + icon + "</span><span>" + txt(role) + "</span></li>";
  });
  $("#openTo").innerHTML = each(goals.openTo, function (o) { return "<li>" + txt(o) + "</li>"; });

  // ---- Experience by area (each item labelled with its source) ------------
  var SOURCES = {
    employment: "Employment", internship: "Internship", lab: "Lab / training",
    project: "Project", academic: "Academic / course", knowledge: "Technical knowledge"
  };
  var usedSources = {};
  (data.areas || []).forEach(function (a) { (a.items || []).forEach(function (it) { usedSources[it.source] = true; }); });
  $("#sourceLegend").innerHTML = each(Object.keys(SOURCES).filter(function (k) { return usedSources[k]; }), function (k) {
    return '<li><span class="src src-' + k + '">' + SOURCES[k] + "</span></li>";
  });
  $("#areaGrid").innerHTML = each(data.areas, function (a) {
    return '<article class="area-card"><div class="area-head"><span class="area-icon">' + (ICON[a.icon] || ICON.briefcase) + "</span><h4>" + txt(a.area) + "</h4></div>" +
      '<ul class="area-items">' + each(a.items, function (it) {
        var label = SOURCES[it.source] || it.source || "";
        return "<li><span class=\"area-text\">" + txt(it.text) + "</span>" +
          '<span class="area-src"><span class="src src-' + esc(it.source) + '">' + esc(label) + "</span>" +
          (it.where ? '<span class="area-where">' + txt(it.where) + "</span>" : "") + "</span></li>";
      }) + "</ul></article>";
  });

  // ---- Experience timeline (employment vs labs & training) ----------------
  var renderJob = function (x) {
    var points = x.responsibilities || x.points || [];
    return '<li class="tl-item' + (x.current ? " current" : "") + '"><span class="tl-dot" aria-hidden="true"></span>' +
      '<article class="exp-card">' +
        '<div class="exp-top"><div><h3>' + txt(x.role) + '</h3><p class="exp-org">' + txt(x.org) + "</p></div>" +
        '<span class="exp-dates">' + esc(x.dates) + "</span></div>" +
        '<div class="exp-meta">' +
          (x.place ? "<span>" + ICON.pin + txt(x.place) + "</span>" : "") +
          (x.type ? '<span class="badge">' + esc(x.type) + "</span>" : "") +
          (x.current ? '<span class="badge now">Current</span>' : "") +
        "</div>" +
        (x.summary ? '<p class="exp-summary">' + txt(x.summary) + "</p>" : "") +
        '<div class="exp-body">' +
          (points.length ? '<div><p class="mini-label">Key responsibilities</p><ul class="points">' + each(points, function (pt) { return "<li>" + txt(pt) + "</li>"; }) + "</ul></div>" : "") +
          (x.skills && x.skills.length ? '<div><p class="mini-label">Skills developed</p><ul class="chips">' + each(x.skills, function (s) { return "<li>" + txt(s) + "</li>"; }) + "</ul></div>" : "") +
        "</div>" +
      "</article></li>";
  };
  var jobs = data.experience || [];
  $("#experienceList").innerHTML = each(jobs.filter(function (x) { return x.kind !== "training"; }), renderJob);
  var training = jobs.filter(function (x) { return x.kind === "training"; });
  $("#trainingList").innerHTML = each(training, renderJob);
  if (!training.length) { $("#trainingList").hidden = true; $("#trainingList").previousElementSibling.hidden = true; }

  // ---- Projects ---------------------------------------------------------
  var projects = (data.projects || []).slice().sort(function (a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); });
  $("#projectsGrid").innerHTML = each(projects, function (pr) {
    var links = [];
    var code = safeUrl(pr.links && pr.links.code), demo = safeUrl(pr.links && pr.links.demo);
    if (code) links.push('<a href="' + esc(code) + '" target="_blank" rel="noopener">' + ICON.github + "View on GitHub</a>");
    if (demo) links.push('<a href="' + esc(demo) + '" target="_blank" rel="noopener">Live demo →</a>');
    var outcomes = pr.result ? String(pr.result).split(" · ") : [];
    var cats = pr.categories || (pr.category ? [pr.category] : []);
    return '<article class="project" data-categories="' + esc(cats.join(" ")) + '">' +
      '<div class="project-top"><span class="project-ctx">' + txt(pr.context || "") + "</span>" + (pr.featured ? '<span class="feat">Featured</span>' : "") + "</div>" +
      "<h3>" + txt(pr.title) + "</h3>" +
      '<p class="desc">' + txt(pr.summary) + "</p>" +
      (outcomes.length ? '<ul class="outcomes">' + each(outcomes, function (o) { return "<li>" + ICON.check + "<span>" + txt(o) + "</span></li>"; }) + "</ul>" : "") +
      (links.length ? '<div class="project-links">' + links.join("") + "</div>" : "") +
      '<ul class="tech" aria-label="Technologies">' + each(pr.tags, function (t) { return "<li>" + esc(t) + "</li>"; }) + "</ul>" +
      "</article>";
  });
  $("#filters").addEventListener("click", function (e) {
    var btn = e.target.closest(".tab");
    if (!btn) return;
    var f = btn.getAttribute("data-filter");
    document.querySelectorAll(".tab").forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
    document.querySelectorAll(".project").forEach(function (card) {
      card.hidden = !(f === "all" || (" " + card.getAttribute("data-categories") + " ").indexOf(" " + f + " ") > -1);
    });
  });

  // ---- Technical skills ---------------------------------------------------
  $("#skillsGrid").innerHTML = each(data.skills, function (g) {
    return '<div class="skill-card"><h3>' + (g.icon && ICON[g.icon] ? '<span class="skill-icon">' + ICON[g.icon] + "</span>" : "") + txt(g.group) + '</h3><ul class="chips">' + each(g.items, function (i) { return "<li>" + txt(i) + "</li>"; }) + "</ul></div>";
  });

  // ---- Soft skills --------------------------------------------------------
  $("#softGrid").innerHTML = each(data.softSkills, function (sk) {
    return '<li class="soft-card"><span class="soft-icon">' + (ICON[sk.icon] || ICON.check) + '</span><div><h3>' + txt(sk.name) + "</h3>" +
      (sk.note ? "<p>" + txt(sk.note) + "</p>" : "") + "</div></li>";
  });

  // ---- Continuous learning ------------------------------------------------
  var learning = data.learning || {};
  $("#learningIntro").innerHTML = txt(learning.intro);
  $("#learnGrid").innerHTML = each(learning.items, function (it) {
    var st = String(it.status || "").toLowerCase().replace(/\s+/g, "-");
    return '<li class="learn-item"><div class="learn-top"><span class="learn-type">' + esc(it.type) + '</span>' +
      (it.status ? '<span class="learn-status st-' + esc(st) + '">' + esc(it.status) + "</span>" : "") + "</div>" +
      '<p class="learn-name">' + txt(it.name) + "</p>" +
      (it.area ? '<p class="learn-area">' + txt(it.area) + "</p>" : "") + "</li>";
  });

  // ---- Education & certifications ----------------------------------------
  $("#educationList").innerHTML = each(data.education, function (e) {
    return '<div class="edu-card"><span class="edu-icon">' + ICON.cap + "</span><div><h3>" + txt(e.degree) + '</h3><p class="edu-school">' + txt(e.school) + '</p><p class="edu-meta">' + txt(e.place) + (e.years ? " · " + esc(e.years) : "") + "</p></div></div>";
  });
  $("#certList").innerHTML = each(data.certifications, function (ce) {
    return '<li><span class="cert-name">' + txt(ce.name) + '</span><span class="cert-issuer">' + txt(ce.issuer) + "</span>" +
      (ce.status ? '<span class="cert-status">' + esc(ce.status) + "</span>" : "") + "</li>";
  });

  // ---- Contact ----------------------------------------------------------
  var buttons = [];
  if (c.email) buttons.push('<a class="btn btn-primary" href="mailto:' + esc(c.email) + '?subject=' + encodeURIComponent("Resume request") + '">' + ICON.mail.replace("<svg", '<svg') + "Email me</a>");
  if (c.linkedin) buttons.push('<a class="btn btn-outline" href="' + esc(c.linkedin) + '" target="_blank" rel="noopener">Connect on LinkedIn</a>');
  $("#contactButtons").innerHTML = buttons.join("");

  var rows = [];
  if (c.email) rows.push({ icon: ICON.mail, label: "Email", value: c.email, href: "mailto:" + c.email, copy: c.email });
  if (c.phone && c.showPhone) rows.push({ icon: ICON.phone, label: "Phone", value: c.phone, href: "tel:" + c.phone.replace(/\s/g, ""), copy: c.phone });
  if (c.linkedin) rows.push({ icon: ICON.linkedin, label: "LinkedIn", value: c.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: c.linkedin, ext: true });
  if (c.github) rows.push({ icon: ICON.github, label: "GitHub", value: c.github.replace(/^https?:\/\/(www\.)?/, ""), href: c.github, ext: true });
  if (p.location) rows.push({ icon: ICON.pin, label: "Location", value: p.location + (p.relocation ? " · " + p.relocation : "") });
  $("#contactList").innerHTML = rows.map(function (r, i) {
    var href = safeUrl(r.href);
    var val = href ? '<a class="c-value" href="' + esc(href) + '"' + (r.ext ? ' target="_blank" rel="noopener"' : "") + ">" + txt(r.value) + "</a>" : '<span class="c-value">' + txt(r.value) + "</span>";
    return '<li><span class="c-icon">' + r.icon + '</span><div class="c-body"><span class="c-label">' + esc(r.label) + "</span>" + val + "</div>" +
      (r.copy ? '<button class="copy-btn" type="button" id="copy-' + i + '" data-copy="' + esc(r.copy) + '">Copy</button>' : "") + "</li>";
  }).join("");

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".copy-btn");
    if (!btn) return;
    var value = btn.getAttribute("data-copy");
    var target = btn.parentElement.querySelector(".c-value");
    var done = function () { btn.textContent = "Copied"; setTimeout(function () { btn.textContent = "Copy"; }, 1600); };
    var fallback = function () {
      var r = document.createRange(); r.selectNodeContents(target);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(value).then(done, fallback);
    else fallback();
  });

  $("#year").textContent = new Date().getFullYear();

  // ---- Mobile menu --------------------------------------------------------
  var nav = $("#nav"), menuBtn = $("#menuToggle");
  var setMenu = function (open) {
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  menuBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  // ---- Theme toggle (remembers the visitor's choice) ----------------------
  var root = document.documentElement, themeBtn = $("#themeToggle");
  var isDark = function () { var t = root.getAttribute("data-theme"); return t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches; };
  var paintIcon = function () { themeBtn.innerHTML = isDark() ? ICON.sun : ICON.moon; };
  try { var saved = localStorage.getItem("theme"); if (saved) root.setAttribute("data-theme", saved); } catch (err) {}
  paintIcon();
  themeBtn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (err) {}
    paintIcon();
  });

  // ---- Highlight the nav link for the section in view ---------------------
  if ("IntersectionObserver" in window) {
    var links = {};
    nav.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(links).forEach(function (k) { links[k].classList.remove("active"); });
        if (links[en.target.id]) links[en.target.id].classList.add("active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { io.observe(s); });
  }
})();
