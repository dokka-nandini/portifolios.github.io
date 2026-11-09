/* =====================================================================
   Shared layout + behaviour for every page.
   Injects the header, mobile menu and footer, then wires up: theme,
   smooth scrolling, gentle reveals, copy-to-clipboard, spotlight cards
   and soft page transitions. No flashy effects — just smooth.
   ===================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;
  var S = window.SITE || { profile: {} };
  var P = S.profile;
  var page = body.getAttribute('data-page') || '';
  var motionOK = !(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ---------- Icon sprite (Lucide-style) ---------- */
  var ICONS = {
    'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    'arrow-left': '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    'arrow-up': '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    'download': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    'github': '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    'linkedin': '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    'mail': '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    'map-pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    'copy': '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    'check': '<path d="M20 6 9 17l-5-5"/>',
    'menu': '<path d="M4 8h16"/><path d="M4 16h16"/>',
    'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    'sun': '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    'moon': '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'eye': '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    'send': '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    'maximize': '<path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/>',
    'file': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
    'printer': '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/>',
    'layout': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
    'server': '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/>',
    'layers': '<path d="m12 2 10 5-10 5L2 7Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
    'cloud': '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    'sparkles': '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
    'award': '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    'star': '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01Z"/>'
  };
  var sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">';
  Object.keys(ICONS).forEach(function (k) { sprite += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + ICONS[k] + '</symbol>'; });
  body.insertAdjacentHTML('afterbegin', sprite + '</svg>');

  function icon(name, cls) { return '<svg class="i' + (cls ? ' ' + cls : '') + '" aria-hidden="true"><use href="#i-' + name + '"/></svg>'; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* ---------- Layout: header, mobile menu, footer ---------- */
  var NAV = [
    ['home', 'index.html', 'Home'], ['about', 'about.html', 'About'], ['skills', 'skills.html', 'Skills'],
    ['projects', 'projects.html', 'Projects'], ['experience', 'experience.html', 'Experience'],
    ['certifications', 'certifications.html', 'Certifications'], ['contact', 'contact.html', 'Contact']
  ];
  var activeKey = page === 'project' ? 'projects' : page;
  function navLinks() {
    return NAV.map(function (n) {
      var on = n[0] === activeKey;
      return '<a href="' + n[1] + '"' + (on ? ' class="is-active" aria-current="page"' : '') + '>' + n[2] + '</a>';
    }).join('');
  }
  var socials =
    '<a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + icon('linkedin') + '</a>' +
    '<a href="' + esc(P.github) + '" target="_blank" rel="noopener" aria-label="GitHub">' + icon('github') + '</a>' +
    '<a href="mailto:' + esc(P.email) + '" aria-label="Email">' + icon('mail') + '</a>';

  var header =
    '<a class="skip-link" href="#main">Skip to content</a>' +
    '<div class="page-veil" aria-hidden="true"></div>' +
    '<header class="nav' + (page === 'home' ? '' : ' nav--solid') + '" id="nav"><div class="nav__inner">' +
      '<a href="index.html" class="nav__brand" aria-label="' + esc(P.name) + ' — home"><span class="monogram">DN</span><span class="nav__brand-name">' + esc(P.name) + '</span></a>' +
      '<nav class="nav__links" aria-label="Primary">' + navLinks() + '</nav>' +
      '<div class="nav__actions">' +
        '<button class="icon-btn theme-toggle" type="button" aria-label="Toggle light and dark theme">' + icon('sun', 'i-sun') + icon('moon', 'i-moon') + '</button>' +
        '<a class="btn btn--sm ' + (page === 'resume' ? 'btn--primary' : 'btn--ghost') + ' nav__resume" href="resume.html">Resume</a>' +
        '<button class="icon-btn nav__burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">' + icon('menu') + '</button>' +
      '</div></div></header>' +
    '<div class="mobile-menu" id="mobile-menu" hidden><nav aria-label="Mobile">' + navLinks() + '</nav>' +
      '<div class="mobile-menu__foot"><a class="btn btn--primary" href="resume.html">' + icon('file') + ' View Resume</a><div class="socials">' + socials + '</div></div></div>';

  var footer =
    '<footer class="footer"><div class="container footer__inner">' +
      '<div class="footer__brand"><span class="monogram">DN</span><div><p class="footer__name">' + esc(P.name) + '</p><p class="footer__tag">' + esc(P.headline) + '</p></div></div>' +
      '<nav class="footer__nav" aria-label="Footer">' + NAV.slice(1).map(function (n) { return '<a href="' + n[1] + '">' + n[2] + '</a>'; }).join('') + '<a href="resume.html">Resume</a></nav>' +
      '<div class="footer__bottom"><p>© ' + new Date().getFullYear() + ' ' + esc(P.name) + ' · ' + esc(P.location) + '</p><a href="#main" class="to-top">Back to top ↑</a></div>' +
    '</div></footer>';

  body.insertAdjacentHTML('afterbegin', header);
  var mainEl = document.getElementById('main');
  if (mainEl) mainEl.insertAdjacentHTML('afterend', footer); else body.insertAdjacentHTML('beforeend', footer);

  /* ---------- Theme ---------- */
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('dn-theme', next); } catch (e) {}
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.content = next === 'light' ? '#f6f5f2' : '#07080b';
    });
  });

  /* ---------- Smooth scrolling (Lenis) ---------- */
  var lenis = null;
  if (motionOK && typeof window.Lenis !== 'undefined') {
    try {
      lenis = new Lenis({ duration: 1.2, smoothWheel: true, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); } });
      var raf = function (t) { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    } catch (e) { lenis = null; }
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href');
    var target = id.length > 1 && document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    closeMenu();
    if (lenis) lenis.scrollTo(id === '#main' ? 0 : target, { offset: -90 });
    else target.scrollIntoView({ behavior: motionOK ? 'smooth' : 'auto' });
  });

  /* ---------- Nav scrolled state ---------- */
  var nav = document.getElementById('nav');
  function onScroll() { nav.classList.toggle('is-scrolled', window.scrollY > 24); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var burger = document.querySelector('.nav__burger');
  var menu = document.getElementById('mobile-menu');
  function openMenu() {
    menu.hidden = false; body.classList.add('menu-open');
    burger.setAttribute('aria-expanded', 'true'); burger.setAttribute('aria-label', 'Close menu');
    burger.querySelector('use').setAttribute('href', '#i-x');
    if (lenis) lenis.stop();
  }
  function closeMenu() {
    if (!menu || menu.hidden) return;
    menu.hidden = true; body.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Open menu');
    burger.querySelector('use').setAttribute('href', '#i-menu');
    if (lenis) lenis.start();
  }
  burger.addEventListener('click', function () { menu.hidden ? openMenu() : closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', function () { if (window.innerWidth > 1080) closeMenu(); });

  /* ---------- Copy to clipboard ---------- */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-copy]');
    if (!btn) return;
    var text = btn.getAttribute('data-copy');
    var done = function () {
      btn.classList.add('is-copied'); btn.setAttribute('aria-label', 'Copied!');
      setTimeout(function () { btn.classList.remove('is-copied'); btn.setAttribute('aria-label', 'Copy email address'); }, 1800);
    };
    var fallback = function () {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (err) {}
      body.removeChild(ta);
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
  });

  /* ---------- Spotlight glow on cards ---------- */
  document.addEventListener('pointermove', function (e) {
    var card = e.target.closest && e.target.closest('.spotlight');
    if (!card) return;
    var r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });

  /* ---------- Gentle reveal on scroll ---------- */
  var io = null;
  if (motionOK && 'IntersectionObserver' in window) {
    root.classList.add('reveal-on');
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  }
  function reveal(scope) {
    if (!io) return;
    (scope || document).querySelectorAll('[data-reveal]:not(.is-in)').forEach(function (el) { io.observe(el); });
    sweep();
  }
  // Belt-and-braces: also reveal by position on scroll/resize, so content
  // can never stay hidden even if an observer callback is missed.
  var sweepQueued = false;
  function sweep() {
    if (!io) return;
    var limit = window.innerHeight * 0.95;
    document.querySelectorAll('[data-reveal]:not(.is-in)').forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < limit && r.bottom > 0 && r.width) { el.classList.add('is-in'); io.unobserve(el); }
    });
  }
  function queueSweep() { if (sweepQueued) return; sweepQueued = true; setTimeout(function () { sweepQueued = false; sweep(); }, 120); }
  window.addEventListener('scroll', queueSweep, { passive: true });
  window.addEventListener('resize', queueSweep);
  window.addEventListener('load', sweep);

  /* ---------- Soft page transitions ---------- */
  window.addEventListener('pageshow', function (e) { if (e.persisted) root.classList.remove('is-leaving'); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a || !motionOK || e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (a.target === '_blank' || a.hasAttribute('download')) return;
    var href = a.getAttribute('href');
    if (/^(mailto:|tel:|#)/.test(href)) return;
    var url = new URL(a.href, location.href);
    if (url.origin !== location.origin || !/\.html$|\/$/.test(url.pathname)) return;
    if (url.pathname === location.pathname && url.search === location.search) return;
    e.preventDefault();
    root.classList.add('is-leaving');
    setTimeout(function () { location.href = url.href; }, 320);
  });

  window.DN = { S: S, P: P, page: page, motionOK: motionOK, lenis: lenis, icon: icon, esc: esc, reveal: reveal };
})();
