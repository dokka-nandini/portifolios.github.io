/* =====================================================================
   Page renderers — fills each page from data.js (window.SITE).
   ===================================================================== */
(function () {
  'use strict';
  var DN = window.DN;
  if (!DN) return;
  var S = DN.S, P = DN.P, esc = DN.esc, icon = DN.icon;
  var DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/';
  var CAT = { fullstack: 'Full Stack', frontend: 'Frontend', ai: 'AI & ML' };
  var ROLE_ICON = { frontend: 'layout', backend: 'server', fullstack: 'layers', devops: 'cloud', ai: 'sparkles' };

  function $(id) { return document.getElementById(id); }
  function put(id, html) { var el = $(id); if (el) el.innerHTML = html; return el; }
  function tags(list, max) { return '<div class="tags">' + list.slice(0, max || list.length).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>'; }
  function d(i) { return ' style="--d:' + (Math.min(i, 6) * 0.07).toFixed(2) + 's"'; }

  /* ---------- Components ---------- */
  function cover(p) {
    var word = p.title.split(' ')[0];
    return '<div class="cover" style="--h:' + (p.hue || 230) + '"><div class="cover__art"></div><div class="cover__grid"></div><div class="cover__word">' + esc(word) + '</div></div>';
  }
  function projectCard(p, i) {
    return '<a class="project-card" href="project.html?id=' + encodeURIComponent(p.id) + '" data-cat="' + esc(p.category) + '" data-reveal' + d(i % 3) + '>' +
      '<div class="project-card__media">' + (p.image ? '<img src="' + esc(p.image) + '" alt="" loading="lazy">' : cover(p)) + '</div>' +
      '<span class="project-card__arrow" aria-hidden="true">' + icon('arrow-up-right') + '</span>' +
      '<div class="project-card__body">' +
        '<span class="project-card__cat">' + esc(CAT[p.category] || p.category) + '</span>' +
        '<h3 class="project-card__title">' + esc(p.title) + '</h3>' +
        '<p class="project-card__summary">' + esc(p.summary || 'Project details coming soon.') + '</p>' +
        (p.tech && p.tech.length ? tags(p.tech, 4) : '') +
      '</div></a>';
  }
  // Bento layout: rows of [7,5] [5,7] [4,4,4]; short final rows share the width.
  function layout(grid) {
    var cards = Array.prototype.filter.call(grid.children, function (c) { return !c.classList.contains('is-hidden'); });
    var rows = [[7, 5], [5, 7], [4, 4, 4]], i = 0, r = 0;
    while (i < cards.length) {
      var row = rows[r % rows.length], n = Math.min(row.length, cards.length - i);
      for (var k = 0; k < n; k++) cards[i + k].style.setProperty('--span', n < row.length ? 12 / n : row[k]);
      i += n; r++;
    }
  }
  function roleCard(role, i, full) {
    var tag = full ? 'article' : 'a';
    var href = full ? '' : ' href="skills.html#' + role.id + '"';
    var preview = [];
    role.groups.forEach(function (g) { if (g.label !== 'Tools') preview = preview.concat(g.items); });
    return '<' + tag + href + ' class="role-card card spotlight' + (full && role.id === 'ai' ? ' role-card--wide' : '') + '" id="' + (full ? role.id : '') + '" style="--h:' + role.hue + ';--d:' + (i * 0.07).toFixed(2) + 's" data-reveal>' +
      '<span class="role-card__icon">' + icon(ROLE_ICON[role.id] || 'layers') + '</span>' +
      '<div><h3 class="role-card__title">' + esc(role.title) + '</h3><p class="role-card__tagline">' + esc(role.tagline) + '</p></div>' +
      (full
        ? '<div class="role-groups">' + role.groups.map(function (g) { return '<div><p class="role-group__label">' + esc(g.label) + '</p>' + tags(g.items) + '</div>'; }).join('') + '</div>'
        : tags(preview, 6) + '<span class="role-card__more">Explore ' + esc(role.title.toLowerCase()) + ' ' + icon('arrow-right', 'i--sm') + '</span>') +
    '</' + tag + '>';
  }
  function logoWall(list) {
    return '<ul class="logo-wall">' + list.map(function (s, i) {
      return '<li class="logo-tile" data-reveal' + d(i % 8) + '><span class="logo-tile__icon"><img src="' + DEVICON + esc(s.icon) + '.svg" alt="" loading="lazy" width="30" height="30"></span><span class="logo-tile__name">' + esc(s.name) + '</span></li>';
    }).join('') + '</ul>';
  }
  function eduBlock() {
    var main = S.education[0], rest = S.education.slice(1);
    return '<article class="edu-main card" data-reveal>' +
      '<div class="edu-main__side">' +
        (main.logo ? '<div class="edu-main__logo"><img src="' + esc(main.logo) + '" alt="' + esc(main.school) + ' logo" loading="lazy"></div>' : '') +
        '<div><h3 class="edu-main__degree">' + esc(main.degree) + '</h3><p class="edu-main__school">' + esc(main.school) + '</p></div>' +
        '<div class="edu-main__row"><span>' + esc(main.period) + '</span><span class="score">' + esc(main.score) + '</span></div>' +
      '</div>' +
      '<div class="edu-main__body"><h4>Relevant coursework</h4><ol class="course-grid">' + main.coursework.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ol></div>' +
    '</article>' +
    '<div class="edu-list">' + rest.map(function (e, i) {
      return '<article class="edu-item card" data-reveal' + d(i) + '><div class="edu-item__top"><h3 class="edu-item__degree">' + esc(e.degree) + '</h3><span class="score">' + esc(e.score) + '</span></div><p class="edu-item__school">' + esc(e.school) + '</p><p class="edu-item__period">' + esc(e.period) + '</p></article>';
    }).join('') + '</div>';
  }
  function achievements() {
    return '<div class="achv-grid">' + S.achievements.map(function (a, i) {
      return '<article class="achv card" data-reveal' + d(i) + '><span class="achv__icon">' + icon(i === 0 ? 'star' : 'award') + '</span><div><h3 class="achv__title">' + esc(a.title) + '</h3><p class="achv__org">' + esc(a.org) + '</p></div></article>';
    }).join('') + '</div>';
  }

  /* ---------- Shared: stats ---------- */
  put('stats', [
    ['2025', 'B.Tech graduate · ECE'],
    [S.experience.length, 'Internships & training'],
    [S.projects.length, 'Projects built'],
    [S.certifications.length, 'Certifications']
  ].map(function (s, i) { return '<div class="stat" data-reveal' + d(i) + '><div class="stat__num">' + esc(s[0]) + '</div><p class="stat__label">' + esc(s[1]) + '</p></div>'; }).join(''));

  /* ---------- HOME ---------- */
  (function rotator() {
    var word = document.querySelector('.rotator__word');
    var titles = P.titles || [];
    if (!word || titles.length < 2) return;
    var i = 0;
    setInterval(function () {
      i = (i + 1) % titles.length;
      if (!DN.motionOK) { word.textContent = titles[i]; return; }
      word.classList.add('is-out');
      setTimeout(function () {
        word.textContent = titles[i];
        word.classList.remove('is-out'); word.classList.add('is-pre');
        void word.offsetWidth;
        word.classList.remove('is-pre');
      }, 600);
    }, 3200);
  })();
  put('home-roles', S.roles.filter(function (r) { return r.id !== 'ai'; }).map(function (r, i) { return roleCard(r, i, false); }).join(''));
  put('home-logos', logoWall(S.techLogos.slice(0, 16)));
  var featured = $('home-projects');
  if (featured) { featured.innerHTML = S.projects.filter(function (p) { return p.featured; }).map(projectCard).join(''); layout(featured); }
  put('home-exp', S.experience.map(function (x, i) {
    return '<a class="exp-mini__row" href="experience.html" data-reveal' + d(i) + '><span class="exp-mini__period">' + esc(x.period) + '</span><div><h3 class="exp-mini__company">' + esc(x.company) + '</h3><p class="exp-mini__role">' + esc(x.role) + '</p></div><span class="exp-mini__type">' + esc(x.type) + '</span></a>';
  }).join(''));

  /* ---------- ABOUT ---------- */
  put('about-body', P.about.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join(''));
  put('about-edu', eduBlock());
  put('about-achv', achievements());

  /* ---------- SKILLS ---------- */
  put('skills-roles', S.roles.map(function (r, i) { return roleCard(r, i, true); }).join(''));
  put('skills-logos', logoWall(S.techLogos));
  put('skills-soft', '<ul class="soft-list">' + S.softSkills.map(function (s, i) { return '<li class="soft-pill" data-reveal' + d(i) + '>' + esc(s) + '</li>'; }).join('') + '</ul>');

  /* ---------- PROJECTS ---------- */
  var grid = $('project-grid');
  if (grid) {
    grid.innerHTML = S.projects.map(projectCard).join('');
    layout(grid);
    var filters = document.querySelector('.filters');
    filters.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter');
      if (!btn || btn.classList.contains('is-active')) return;
      filters.querySelectorAll('.filter').forEach(function (b) { var on = b === btn; b.classList.toggle('is-active', on); b.setAttribute('aria-selected', String(on)); });
      var f = btn.getAttribute('data-filter');
      var cards = Array.prototype.slice.call(grid.children);
      cards.forEach(function (c) { c.classList.add('is-fading'); });
      setTimeout(function () {
        cards.forEach(function (c) { c.classList.toggle('is-hidden', f !== 'all' && c.getAttribute('data-cat') !== f); c.classList.add('is-in'); });
        layout(grid);
        requestAnimationFrame(function () { requestAnimationFrame(function () { cards.forEach(function (c) { c.classList.remove('is-fading'); }); }); });
      }, DN.motionOK ? 380 : 0);
    });
  }

  /* ---------- PROJECT (case study) ---------- */
  var cs = $('case');
  if (cs) (function () {
    var id = new URLSearchParams(location.search).get('id'), idx = -1;
    S.projects.forEach(function (p, i) { if (p.id === id) idx = i; });
    if (idx < 0) {
      document.title = 'Project not found — ' + P.name;
      cs.innerHTML = '<div class="notfound"><div><span class="eyebrow"><span class="eyebrow__dot"></span>404</span><h1 style="margin-top:18px">Project not found</h1><p>The project you are looking for doesn\'t exist or has moved.</p><a class="btn btn--primary" href="projects.html">' + icon('arrow-left') + ' All projects</a></div></div>';
      return;
    }
    var p = S.projects[idx], next = S.projects[(idx + 1) % S.projects.length];
    document.title = p.title + ' — ' + P.name;
    var md = document.querySelector('meta[name="description"]'); if (md) md.content = p.summary || p.title;
    var row = function (label, html) { return '<div class="cs-row" data-reveal><h2 class="cs-label">' + esc(label) + '</h2><div>' + html + '</div></div>'; };
    var paras = function (list, lead) { return '<div class="cs-text' + (lead ? ' cs-text--lead' : '') + '">' + list.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') + '</div>'; };
    var det = p.details || [];
    var isProfile = p.github && /github\.com\/[^/]+\/?$/.test(p.github);
    var links = (p.github ? '<a class="btn btn--primary btn--lg" href="' + esc(p.github) + '" target="_blank" rel="noopener">' + icon('github') + (isProfile ? ' GitHub profile' : ' View repository') + '</a>' : '') +
      (p.demo ? '<a class="btn btn--ghost btn--lg" href="' + esc(p.demo) + '" target="_blank" rel="noopener">Live demo ' + icon('arrow-up-right') + '</a>' : '');
    var bodyHtml = '';
    if (det.length) bodyHtml += row('Overview', paras([det[0]], true) + (det.length > 1 ? '<ul class="bullets" style="margin-top:14px">' + det.slice(1).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' : ''));
    else bodyHtml += row('Overview', '<div class="cs-empty">A detailed write-up for this project is coming soon.</div>');
    if (p.problem) bodyHtml += row('Problem', paras([].concat(p.problem)));
    if (p.solution) bodyHtml += row('Solution', paras([].concat(p.solution)));
    if (p.tech && p.tech.length) bodyHtml += row('Technologies', tags(p.tech));
    if (p.screenshots && p.screenshots.length) bodyHtml += row('Screenshots', '<div class="cs-shots">' + p.screenshots.map(function (s) { return '<img src="' + esc(s) + '" alt="' + esc(p.title) + ' screenshot" loading="lazy">'; }).join('') + '</div>');
    if (p.related) bodyHtml += row('Related', '<p class="cs-text">' + esc(p.related) + '</p>');
    if (links) bodyHtml += row('Links', '<div class="cs-actions">' + links + '</div>');

    cs.innerHTML =
      '<section class="page-head" style="border-bottom:0"><div class="ambient"><div class="ambient__blob ambient__blob--a"></div><div class="ambient__blob ambient__blob--b"></div></div><div class="container">' +
        '<a class="cs-back" href="projects.html" data-rise>' + icon('arrow-left') + ' All projects</a>' +
        '<span class="eyebrow" data-rise style="--d:.05s"><span class="eyebrow__dot"></span>' + esc(CAT[p.category] || 'Project') + '</span>' +
        '<h1 class="page-head__title" data-rise style="--d:.1s">' + esc(p.title) + '</h1>' +
        (p.summary ? '<p class="page-head__sub" data-rise style="--d:.18s">' + esc(p.summary) + '</p>' : '') +
        '<dl class="cs-meta" data-rise style="--d:.26s">' +
          '<div><dt>Category</dt><dd>' + esc(CAT[p.category] || '—') + '</dd></div>' +
          '<div><dt>Stack</dt><dd>' + (p.tech && p.tech.length ? esc(p.tech.slice(0, 3).join(', ')) + (p.tech.length > 3 ? ' +' + (p.tech.length - 3) : '') : '—') + '</dd></div>' +
          '<div><dt>Source</dt><dd>' + (p.github ? '<a href="' + esc(p.github) + '" target="_blank" rel="noopener">GitHub ' + icon('arrow-up-right', 'i--sm') + '</a>' : '—') + '</dd></div>' +
          '<div><dt>Live demo</dt><dd>' + (p.demo ? '<a href="' + esc(p.demo) + '" target="_blank" rel="noopener">Open ' + icon('arrow-up-right', 'i--sm') + '</a>' : 'Not available') + '</dd></div>' +
        '</dl>' +
        '<div class="cs-cover" data-rise style="--d:.34s">' + (p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + ' cover">' : cover(p)) + '</div>' +
      '</div></section>' +
      '<section class="section section--tight" style="border-top:0"><div class="container">' + bodyHtml + '</div></section>' +
      '<section class="cs-next"><div class="container"><a href="project.html?id=' + encodeURIComponent(next.id) + '"><div><span class="cs-next__label">Next project</span><span class="cs-next__title">' + esc(next.title) + '</span></div><span class="cs-next__arrow" aria-hidden="true">' + icon('arrow-right') + '</span></a></div></section>';
  })();

  /* ---------- EXPERIENCE ---------- */
  var expList = $('exp-list');
  if (expList) {
    expList.innerHTML = S.experience.map(function (x, i) {
      var id = 'exp-' + i, open = i < 2;
      return '<li class="exp"><span class="exp__node" aria-hidden="true">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<article class="exp__card card spotlight" data-reveal>' +
          '<div class="exp__top"><div class="exp__id"><span class="exp__logo" aria-hidden="true">' + esc(x.initials) + '</span><div><h3 class="exp__company">' + esc(x.company) + '</h3><p class="exp__role">' + esc(x.role) + '</p></div></div>' +
          '<div class="exp__meta"><span class="exp__period">' + esc(x.period) + '</span><span class="exp__type">' + esc(x.type) + '</span></div></div>' +
          tags(x.tags) +
          '<button class="exp__toggle" type="button" aria-expanded="' + open + '" aria-controls="' + id + '"><span>' + (open ? 'Hide' : 'View') + ' responsibilities</span>' + icon('chevron-down') + '</button>' +
          '<div class="collapse' + (open ? ' is-open' : '') + '" id="' + id + '"><div><ul class="bullets">' + x.points.map(function (pt) { return '<li>' + esc(pt) + '</li>'; }).join('') + '</ul></div></div>' +
        '</article></li>';
    }).join('');
    expList.addEventListener('click', function (e) {
      var btn = e.target.closest('.exp__toggle');
      if (!btn) return;
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      btn.querySelector('span').textContent = (open ? 'Hide' : 'View') + ' responsibilities';
      $(btn.getAttribute('aria-controls')).classList.toggle('is-open', open);
    });
  }
  put('exp-edu', eduBlock());

  /* ---------- CERTIFICATIONS ---------- */
  var certGrid = $('cert-grid');
  if (certGrid) {
    certGrid.innerHTML = S.certifications.map(function (c, i) {
      return '<article class="cert card" data-reveal' + d(i % 3) + '>' +
        '<button class="cert__preview" type="button" data-cert="' + i + '" aria-label="Preview ' + esc(c.title) + '"><img src="' + esc(c.image) + '" alt="" loading="lazy"><span class="cert__zoom">' + icon('maximize', 'i--sm') + ' Preview</span></button>' +
        '<div class="cert__body"><span class="cert__issuer">' + esc(c.issuer) + '</span><h3 class="cert__title">' + esc(c.title) + '</h3>' +
        (c.url ? '<a class="cert__link" href="' + esc(c.url) + '" target="_blank" rel="noopener">' + esc(c.linkLabel || 'Verify credential') + ' ' + icon('arrow-up-right', 'i--sm') + '</a>' : '<p class="cert__note">Credential link available on request</p>') +
        '</div></article>';
    }).join('');
    var dlg = $('cert-dialog');
    if (dlg && typeof dlg.showModal === 'function') {
      certGrid.addEventListener('click', function (e) {
        var b = e.target.closest('[data-cert]');
        if (!b) return;
        var c = S.certifications[+b.getAttribute('data-cert')];
        $('cert-dialog-img').src = c.image; $('cert-dialog-img').alt = c.title + ' — ' + c.issuer;
        $('cert-dialog-issuer').textContent = c.issuer; $('cert-dialog-title').textContent = c.title;
        var link = $('cert-dialog-link');
        link.hidden = !c.url;
        if (c.url) { link.href = c.url; link.firstChild.textContent = (c.linkLabel || 'Verify credential') + ' '; }
        dlg.showModal();
        if (DN.lenis) DN.lenis.stop();
      });
      dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target.closest('[data-close]')) dlg.close(); });
      dlg.addEventListener('close', function () { if (DN.lenis) DN.lenis.start(); });
    }
  }
  put('cert-achv', achievements());

  /* ---------- CONTACT ---------- */
  put('contact-methods',
    '<li class="method" data-reveal><span class="method__icon">' + icon('mail') + '</span><span class="method__body"><span class="method__label">Email</span><a href="mailto:' + esc(P.email) + '">' + esc(P.email) + '</a></span>' +
      '<button class="icon-btn copy-btn" type="button" data-copy="' + esc(P.email) + '" aria-label="Copy email address">' + icon('copy', 'i-copy') + icon('check', 'i-check') + '</button></li>' +
    '<li class="method" data-reveal' + d(1) + '><span class="method__icon">' + icon('phone') + '</span><span class="method__body"><span class="method__label">Phone</span><a href="tel:' + esc(P.phoneHref) + '">' + esc(P.phone) + '</a></span></li>' +
    '<li class="method" data-reveal' + d(2) + '><span class="method__icon">' + icon('linkedin') + '</span><span class="method__body"><span class="method__label">LinkedIn</span><a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">nandini-dokka</a></span></li>' +
    '<li class="method" data-reveal' + d(3) + '><span class="method__icon">' + icon('github') + '</span><span class="method__body"><span class="method__label">GitHub</span><a href="' + esc(P.github) + '" target="_blank" rel="noopener">dokka-nandini</a></span></li>' +
    '<li class="method" data-reveal' + d(4) + '><span class="method__icon">' + icon('map-pin') + '</span><span class="method__body"><span class="method__label">Location</span><span>' + esc(P.location) + '</span></span></li>');
  var form = $('contact-form');
  if (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name.value.trim(), email = form.email.value.trim(), msg = form.message.value.trim();
      var validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      var bad = [];
      [['name', !!name], ['email', validEmail], ['message', !!msg]].forEach(function (f) {
        form[f[0]].closest('.field').classList.toggle('has-error', !f[1]);
        if (!f[1]) bad.push(f[0]);
      });
      if (bad.length) {
        status.className = 'form-status is-error';
        status.textContent = bad.length === 1 && bad[0] === 'email' && email ? 'Please enter a valid email address.' : 'Please fill in all fields.';
        form[bad[0]].focus();
        return;
      }
      location.href = 'mailto:' + P.email + '?subject=' + encodeURIComponent('Portfolio enquiry from ' + name) + '&body=' + encodeURIComponent(msg + '\n\n— ' + name + ' (' + email + ')');
      status.className = 'form-status is-ok';
      status.textContent = 'Opening your email app…';
    });
  }

  /* ---------- RESUME (on-site document) ---------- */
  var doc = $('resume-doc');
  if (doc) (function () {
    var R = S.resume;
    var sec = function (title, html) { return '<section class="rd-section"><h2 class="rd-h">' + esc(title) + '</h2>' + html + '</section>'; };
    var item = function (title, sub, date, extra) {
      return '<div class="rd-item"><div class="rd-item__top"><h3 class="rd-item__title">' + title + '</h3><span class="rd-item__date">' + esc(date || '') + '</span></div>' + (sub ? '<p class="rd-item__sub">' + sub + '</p>' : '') + (extra || '') + '</div>';
    };
    var list = function (arr) { return '<ul class="rd-list">' + arr.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>'; };
    var exp = S.experience.filter(function (x) { return x.onResume !== false; });
    doc.innerHTML =
      '<header class="rd-head"><div><h1 class="rd-name">' + esc(P.name.toUpperCase()) + '</h1><p class="rd-role">' + esc(P.headline) + '</p></div>' +
        '<div class="rd-contact"><span>' + esc(P.location) + '</span><a href="tel:' + esc(P.phoneHref) + '">' + esc(P.phone) + '</a><a href="mailto:' + esc(P.email) + '">' + esc(P.email) + '</a>' +
        '<span><a href="' + esc(P.portfolio) + '">Portfolio</a> · <a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a> · <a href="' + esc(P.github) + '" target="_blank" rel="noopener">GitHub</a></span></div></header>' +
      sec('Professional Summary', '<p class="rd-summary">' + esc(P.summary) + '</p>') +
      sec('Technical Skills', '<dl class="rd-skills">' + R.skills.map(function (s) { return '<dt>' + esc(s[0]) + '</dt><dd>' + esc(s[1]) + '</dd>'; }).join('') + '</dl>') +
      sec('Projects', S.projects.filter(function (p) { return p.featured; }).map(function (p) {
        return item(esc(p.title) + (p.category === 'fullstack' ? ' <span>(Full Stack)</span>' : ''), '<span class="rd-tech">' + esc(p.tech.join(' | ')) + '</span>', '', list(p.details));
      }).join('')) +
      sec('Internships & Training', exp.map(function (x) { return item(esc(x.role) + ' <span>| ' + esc(x.company) + '</span>', '', x.period, list(x.resumePoints || x.points.slice(0, 2))); }).join('')) +
      sec('Education', S.education.map(function (e) { return item(esc(e.degree) + ' <span>— ' + esc(e.score) + '</span>', esc(e.school), e.period); }).join('')) +
      sec('Certifications & Achievements', '<ul class="rd-list rd-two">' +
        R.certifications.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') +
        S.achievements.map(function (a) { return '<li>' + esc(a.title) + ' — ' + esc(a.org) + '</li>'; }).join('') + '</ul>');
    var printBtn = $('print-resume');
    if (printBtn) printBtn.addEventListener('click', function () { window.print(); });
  })();

  DN.reveal();
})();
