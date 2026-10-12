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
  var txt = function (s) {
    return esc(s).replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>');
  };
  var safeUrl = function (u) { return /^(https?:|mailto:|tel:|#|assets\/)/i.test(u || "") ? u : ""; };

  var p = data.profile;

  // Simple bound text (name, headline, intro …)
  var binds = {
    name: p.name, initials: p.initials, headline: p.headline, intro: p.intro,
    resumeNote: data.resume && data.resume.note
  };
  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var key = el.getAttribute("data-bind");
    if (binds[key] != null) el.innerHTML = txt(binds[key]);
  });

  // Status card
  var fields = [
    ["Now", p.currentRole + (p.currentOrg ? " · " + p.currentOrg : "")],
    ["Learning", p.learning],
    ["Based in", p.location],
    ["Availability", p.availability]
  ];
  $("#statusFields").innerHTML = fields.filter(function (f) { return f[1]; }).map(function (f) {
    return "<div><dt>" + esc(f[0]) + "</dt><dd>" + txt(f[1]) + "</dd></div>";
  }).join("");

  // About
  $("#aboutBody").innerHTML = (data.about || []).map(function (para) { return "<p>" + txt(para) + "</p>"; }).join("");

  // Experience
  $("#experienceList").innerHTML = (data.experience || []).map(function (x) {
    return '<li class="tl-item">' +
      '<div class="tl-date">' + esc(x.dates) + "</div>" +
      '<div class="tl-body">' +
        '<div class="tl-title"><h3>' + txt(x.role) + "</h3>" + (x.current ? '<span class="pill">Current</span>' : "") + "</div>" +
        '<p class="tl-org">' + txt(x.org) + (x.place ? " · " + txt(x.place) : "") + "</p>" +
        (x.points && x.points.length ? '<ul class="tl-points">' + x.points.map(function (pt) { return "<li>" + txt(pt) + "</li>"; }).join("") + "</ul>" : "") +
      "</div></li>";
  }).join("");

  // Skills
  $("#skillsGrid").innerHTML = (data.skills || []).map(function (g) {
    return '<div class="skill-group"><h3>' + txt(g.group) + '</h3><ul class="chips">' +
      g.items.map(function (i) { return "<li>" + txt(i) + "</li>"; }).join("") + "</ul></div>";
  }).join("");

  // Projects
  $("#projectsGrid").innerHTML = (data.projects || []).map(function (pr) {
    var links = [];
    if (safeUrl(pr.links && pr.links.code)) links.push('<a href="' + esc(pr.links.code) + '" target="_blank" rel="noopener">Code →</a>');
    if (safeUrl(pr.links && pr.links.demo)) links.push('<a href="' + esc(pr.links.demo) + '" target="_blank" rel="noopener">Live demo →</a>');
    return '<article class="project">' +
      "<h3>" + txt(pr.title) + "</h3>" +
      "<p>" + txt(pr.summary) + "</p>" +
      (pr.result ? '<p class="result">' + txt(pr.result) + "</p>" : "") +
      '<ul class="tags">' + (pr.tags || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
      (links.length ? '<div class="project-links">' + links.join("") + "</div>" : "") +
      "</article>";
  }).join("");

  // Education
  $("#educationList").innerHTML = (data.education || []).map(function (e) {
    return '<div class="edu"><h3>' + txt(e.degree) + '</h3><span class="years">' + esc(e.years) + "</span>" +
      '<p class="school">' + txt(e.school) + (e.place ? ", " + txt(e.place) : "") + "</p></div>";
  }).join("");

  $("#certList").innerHTML = (data.certifications || []).map(function (c) {
    var cls = /progress|preparation/i.test(c.status) ? "pill warn" : "pill neutral";
    return '<li><span><span class="cert-name">' + txt(c.name) + '</span><span class="cert-issuer">' + txt(c.issuer) + "</span></span>" +
      (c.status ? '<span class="' + cls + '">' + esc(c.status) + "</span>" : "") + "</li>";
  }).join("");

  // Resume
  var resumeHref = data.resume && data.resume.file ? "../" + data.resume.file : "#resume";
  $("#resumeLink").setAttribute("href", resumeHref);
  $("#heroResume").setAttribute("href", resumeHref);
  $("#heroResume").setAttribute("download", "");

  // Contact
  var c = data.contact || {};
  var items = [];
  if (c.email) items.push({ label: "Email", value: c.email, href: "mailto:" + c.email, copy: c.email });
  if (c.linkedin) items.push({ label: "LinkedIn", value: c.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: c.linkedin, ext: true });
  if (c.github) items.push({ label: "GitHub", value: c.github.replace(/^https?:\/\/(www\.)?/, ""), href: c.github, ext: true });
  if (c.phone && c.showPhone) items.push({ label: "Phone", value: c.phone, href: "tel:" + c.phone.replace(/\s/g, ""), copy: c.phone });
  $("#contactGrid").innerHTML = items.map(function (it, i) {
    var href = safeUrl(it.href);
    var val = href
      ? '<a class="value" href="' + esc(href) + '"' + (it.ext ? ' target="_blank" rel="noopener"' : "") + ">" + txt(it.value) + "</a>"
      : '<span class="value">' + txt(it.value) + "</span>";
    return '<div class="contact-item"><span class="label">' + esc(it.label) + "</span>" + val +
      (it.copy ? '<button class="copy-btn" type="button" id="copy-' + i + '" data-copy="' + esc(it.copy) + '">Copy</button>' : "") + "</div>";
  }).join("");

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".copy-btn");
    if (!btn) return;
    var value = btn.getAttribute("data-copy");
    var done = function () { btn.textContent = "Copied"; setTimeout(function () { btn.textContent = "Copy"; }, 1600); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(done, function () { selectText(btn.previousElementSibling); });
    } else { selectText(btn.previousElementSibling); }
  });
  function selectText(el) {
    var r = document.createRange(); r.selectNodeContents(el);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }

  $("#year").textContent = new Date().getFullYear();
  document.title = p.name + " · " + (p.headline || "Portfolio");

  // Mobile menu
  var nav = $("#nav"), menuBtn = $("#menuToggle");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  // Theme toggle (remembers choice)
  var root = document.documentElement;
  try { var saved = localStorage.getItem("theme"); if (saved) root.setAttribute("data-theme", saved); } catch (err) {}
  $("#themeToggle").addEventListener("click", function () {
    var current = root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
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
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { io.observe(s); });
  }
})();
