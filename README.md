# Dokka Nandini — Portfolio

A multi-page personal portfolio built with plain **HTML, CSS and JavaScript**: no build step and no framework.
It deploys as-is to GitHub Pages.

## Pages

| Page | File |
| --- | --- |
| Landing | `index.html` |
| About (story, education, achievements) | `about.html` |
| Skills (Frontend, Backend, Full Stack, DevOps & Cloud, AI & Data) | `skills.html` |
| Projects (with filters) | `projects.html` |
| Project case study | `project.html?id=<project-id>` |
| Experience (timeline and education) | `experience.html` |
| Certifications and achievements | `certifications.html` |
| Resume (on-site, printable) | `resume.html` |
| Contact | `contact.html` |

## Editing content: one file

All content lives in **`assets/js/data.js`**. Edit it and every page updates.

- **Profile, summary, links:** the `profile` object.
- **Skill cards:** `roles`. Each role has `groups` such as Languages, Frameworks and Styling.
- **Technology logos:** `techLogos`. Icons come from [Devicon](https://devicon.dev); the `icon` field is the Devicon path, for example `react/react-original`.
- **Experience:** `experience`. Set `onResume: false` to hide an entry from the resume page.
- **Projects:** `projects`.
  - `category` is `fullstack`, `frontend` or `ai`.
  - `featured: true` shows the project on the landing page.
  - Add `image` for a cover photo. Without one, a coloured cover is generated from `hue`.
  - `github` and `demo` hold links. Use `null` to hide them.
  - Optional `problem`, `solution` and `screenshots` sections appear on the case study when filled in.
- **Certifications:** `certifications`. Set `url: null` if there is no verification link.
- **Resume page:** the `resume` object holds the skill rows and certification list. The rest of the resume reuses the data above.

Images live in `assets/img/`. The original resume PDF is `assets/docs/Dokka-Nandini-Resume.pdf`; replace it to update the "Original PDF" download.

## Resume download

`resume.html` shows the resume on the website. **Download as PDF** opens the browser's print dialog with a print-only A4 layout; choose "Save as PDF". **Original PDF** downloads the file in `assets/docs/`.

## Contact form

The site is static, so the form opens the visitor's email app with the message filled in (`mailto:`). To receive messages without an email app, connect a form service such as Formspree and change the submit handler in `assets/js/pages.js`.

## Deploying to GitHub Pages

1. Copy all files into the root of the `dokka-nandini.github.io` repository.
2. Commit and push to the default branch.
3. In the repository, open **Settings → Pages** and check that the source is the default branch, `/ (root)`.

The site will be live at https://dokka-nandini.github.io/ within a minute or two.

## Analytics (optional)

No tracking is included. To add Google Analytics 4, paste your GA4 snippet into the `<head>` of each page.

## External dependencies (CDN)

- Fonts: Geist, Geist Mono and Instrument Serif (Google Fonts)
- Smooth scrolling: Lenis 1.1.13 (jsDelivr). The site works without it.
- Technology logos: Devicon v2.16.0 (jsDelivr)

## Structure

```
index.html, about.html, skills.html, projects.html, project.html,
experience.html, certifications.html, resume.html, contact.html, 404.html
assets/css/main.css   all styles (dark and light themes, print styles for the resume)
assets/js/data.js     all content
assets/js/site.js     shared header, footer, theme, smooth scroll and reveals
assets/js/pages.js    renders each page from data.js
assets/img/, assets/docs/
projects/*.html       redirects from the old project URLs
sitemap.xml, robots.txt, favicon.svg, favicon.png
```
