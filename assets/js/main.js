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
  var safeUrl = function (u) { return /^(https?:|mailto:|tel:|#|assets\/)/i.test(u || "") ? u : ""; };
  var list = function (arr, fn) { return (arr || []).map(fn).join(""); };

  var p = data.profile || {};
  var c = data.contact || {};

  // Bound text
  var binds = { name: p.name, initials: p.initials, headline: p.headline, intro: p.intro, availability: p.availability, resumeNote: data.resume && data.resume.note };
  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var v = binds[el.getAttribute("data-bind")];
    if (v != null) el.innerHTML = txt(v);
  });

  // About + quick facts
  $("#aboutBody").innerHTML = list(data.about, function (para) { return "<p>" + txt(para) + "</p>"; });
  var facts = [
    ["Currently", p.currentRole + (p.currentOrg ? ", " + p.currentOrg : "")],
    ["Learning", p.learning],
    ["Based in", p.location]
  ].filter(function (f) { return f[1]; });
  $("#facts").innerHTML = list(facts, function (f) { return "<div><dt>" + esc(f[0]) + "</dt><dd>" + txt(f[1]) + "</dd></div>"; });

  // Experience
  $("#experienceList").innerHTML = list(data.experience, function (x) {
    return '<li class="job"><div class="job-date">' + esc(x.dates) + "</div>" +
      '<div class="job-body"><h3>' + txt(x.role) + (x.current ? ' <span class="pill">Current</span>' : "") + "</h3>" +
      '<p class="job-org">' + txt(x.org) + (x.place ? ' <span class="dim">· ' + txt(x.place) + "</span>" : "") + "</p>" +
      (x.points && x.points.length ? "<ul>" + list(x.points, function (pt) { return "<li>" + txt(pt) + "</li>"; }) + "</ul>" : "") +
      "</div></li>";
  });

  // Projects (featured first, then in the order written)
  var projects = (data.projects || []).slice().sort(function (a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); });
  $("#projectsGrid").innerHTML = list(projects, function (pr) {
    var links = [];
    if (safeUrl(pr.links && pr.links.code)) links.push('<a href="' + esc(pr.links.code) + '" target="_blank" rel="noopener">View code →</a>');
    if (safeUrl(pr.links && pr.links.demo)) links.push('<a href="' + esc(pr.links.demo) + '" target="_blank" rel="noopener">Live demo →</a>');
    var outcomes = pr.result ? String(pr.result).split(" · ") : [];
    return '<article class="project' + (pr.featured ? " featured" : "") + '" data-category="' + esc(pr.category || "") + '">' +
      (pr.context ? '<span class="ctx">' + txt(pr.context) + "</span>" : "") +
      "<h3>" + txt(pr.title) + "</h3>" +
      '<p class="summary">' + txt(pr.summary) + "</p>" +
      list(outcomes, function (o) { return '<p class="outcome">' + txt(o) + "</p>"; }) +
      '<ul class="tags">' + list(pr.tags, function (t) { return "<li>" + esc(t) + "</li>"; }) + "</ul>" +
      (links.length ? '<div class="project-links">' + links.join("") + "</div>" : "") +
      "</article>";
  });
  $("#filters").addEventListener("click", function (e) {
    var btn = e.target.closest(".filter");
    if (!btn) return;
    var f = btn.getAttribute("data-filter");
    document.querySelectorAll(".filter").forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
    document.querySelectorAll(".project").forEach(function (card) {
      card.hidden = !(f === "all" || card.getAttribute("data-category") === f);
    });
  });

  // Skills
  $("#skillsGrid").innerHTML = list(data.skills, function (g) {
    return '<div class="skill-row"><h3>' + txt(g.group) + '</h3><ul class="chips">' + list(g.items, function (i) { return "<li>" + txt(i) + "</li>"; }) + "</ul></div>";
  });

  // Education + certifications
  $("#educationList").innerHTML = list(data.education, function (e) {
    return '<div class="degree"><span class="years">' + esc(e.years) + "</span><h3>" + txt(e.degree) + "</h3><p>" + txt(e.school) + (e.place ? ", " + txt(e.place) : "") + "</p></div>";
  });
  $("#certList").innerHTML = list(data.certifications, function (ce) {
    var cls = /progress|preparation/i.test(ce.status) ? "pill warn" : "pill";
    return '<li><span><span class="cert-name">' + txt(ce.name) + '</span><span class="cert-issuer">' + txt(ce.issuer) + "</span></span>" +
      (ce.status ? '<span class="' + cls + '">' + esc(ce.status) + "</span>" : "") + "</li>";
  });

  // Resume links
  var resumeHref = safeUrl(data.resume && data.resume.file);
  ["#resumeLink", "#sideResume"].forEach(function (sel) {
    var a = $(sel);
    if (resumeHref) a.setAttribute("href", resumeHref); else a.removeAttribute("download");
  });

  // Sidebar social links
  var icons = {
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.6 4.77 6V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.95 1.32-1.95 2.69V21h-4V9.75Z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4 7.3V17h16V7.3l-8 4.9Zm0-2.3L19.2 7H4.8L12 9.9Z"/></svg>'
  };
  var socials = [];
  if (c.linkedin) socials.push('<a href="' + esc(c.linkedin) + '" target="_blank" rel="noopener">' + icons.linkedin + "LinkedIn</a>");
  if (c.github) socials.push('<a href="' + esc(c.github) + '" target="_blank" rel="noopener">' + icons.github + "GitHub</a>");
  if (c.email) socials.push('<a href="#contact">' + icons.email + "Email</a>");
  $("#socials").innerHTML = socials.join("");

  // Contact cards
  var items = [];
  if (c.email) items.push({ k: "Email", v: c.email, href: "mailto:" + c.email, copy: c.email });
  if (c.phone && c.showPhone) items.push({ k: "Phone", v: c.phone, href: "tel:" + c.phone.replace(/\s/g, ""), copy: c.phone });
  if (c.linkedin) items.push({ k: "LinkedIn", v: c.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: c.linkedin, ext: true });
  if (c.github) items.push({ k: "GitHub", v: c.github.replace(/^https?:\/\/(www\.)?/, ""), href: c.github, ext: true });
  $("#contactGrid").innerHTML = items.map(function (it, i) {
    var href = safeUrl(it.href);
    return '<div class="contact-item"><span class="k">' + esc(it.k) + "</span>" +
      (href ? '<a class="v" href="' + esc(href) + '"' + (it.ext ? ' target="_blank" rel="noopener"' : "") + ">" + txt(it.v) + "</a>" : '<span class="v">' + txt(it.v) + "</span>") +
      (it.copy ? '<button class="copy-btn" type="button" id="copy-' + i + '" data-copy="' + esc(it.copy) + '">Copy</button>' : "") + "</div>";
  }).join("");
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".copy-btn");
    if (!btn) return;
    var value = btn.getAttribute("data-copy");
    var done = function () { btn.textContent = "Copied"; setTimeout(function () { btn.textContent = "Copy"; }, 1600); };
    var fallback = function () {
      var r = document.createRange(); r.selectNodeContents(btn.previousElementSibling);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(value).then(done, fallback);
    else fallback();
  });

  $("#year").textContent = new Date().getFullYear();

  // Mobile menu
  var nav = $("#nav"), menuBtn = $("#menuToggle");
  var setMenu = function (open) { nav.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", open ? "true" : "false"); };
  menuBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  // Theme toggle (remembers the visitor's choice)
  var root = document.documentElement;
  try { var saved = localStorage.getItem("theme"); if (saved) root.setAttribute("data-theme", saved); } catch (err) {}
  $("#themeToggle").addEventListener("click", function () {
    var current = root.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (err) {}
  });

  // Highlight the nav link for the section in view
  if ("IntersectionObserver" in window) {
    var links = {};
    nav.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && links[en.target.id]) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove("active"); });
          links[en.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { io.observe(s); });
  }
})();
