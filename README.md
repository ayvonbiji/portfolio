# Ayvon Joseph Biji — Portfolio

Personal portfolio for SOC analyst, IT support and cybersecurity roles.

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies — it loads fast and deploys anywhere that serves static files (Vercel, GitHub Pages, Netlify).

## Project structure

```
portfolio/
├── index.html                 # Page layout and section order
├── assets/
│   ├── css/styles.css         # Design: colors, fonts, layout (light + dark mode)
│   ├── js/content.js          # ← ALL website text lives here. Edit this to update the site.
│   ├── js/main.js             # Renders content.js into the page (rarely needs changes)
│   ├── img/favicon.svg        # Browser tab icon
│   └── resume/Ayvon_Joseph_Biji_CV.pdf   # The CV behind the "Download CV" buttons
├── vercel.json                # Vercel settings (clean URLs, cache + security headers)
└── README.md
```

## Updating content

Open `assets/js/content.js` and edit the text. Common changes:

| To change…                 | Edit in `content.js`                          |
| -------------------------- | --------------------------------------------- |
| Name, headline, intro      | `profile`                                     |
| About paragraphs           | `about`                                       |
| Jobs / internships         | `experience` (copy a `{ ... }` block to add)   |
| Skills                     | `skills`                                      |
| Projects + GitHub links    | `projects` → `links.code` / `links.demo`       |
| Degrees                    | `education`                                   |
| Certifications             | `certifications`                              |
| Email, LinkedIn, GitHub    | `contact` (`showPhone: true` shows your mobile) |

- Any text in `[square brackets]` is highlighted on the page as a placeholder.
- To replace the CV, drop a new PDF into `assets/resume/` with the same file name (or change `resume.file`).
- To add a profile photo later, put it in `assets/img/` and set `profile.photo`.

## Run locally

Any static server works. Pick one:

```bash
# Python (already installed on most machines)
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000

# or Node.js
npx serve .
```

You can also double-click `index.html`, but a local server behaves exactly like the live site.

## Push to GitHub

This folder is already connected to `https://github.com/ayvonbiji/portfolio`.

```bash
git clone https://github.com/ayvonbiji/portfolio.git
cd portfolio
# …edit files…
git add .
git commit -m "Update projects"
git push
```

## Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project**, then **Import** `ayvonbiji/portfolio`.
3. Framework preset: **Other**. Leave Build Command and Output Directory empty.
4. Click **Deploy**. You'll get a URL like `portfolio-ayvonbiji.vercel.app`.

Every `git push` to `main` redeploys automatically. To use your own domain, open the project in Vercel → **Settings → Domains**.

### Alternative: GitHub Pages

Repository **Settings → Pages → Source: Deploy from a branch → `main` / root → Save**.
The site appears at `https://ayvonbiji.github.io/portfolio/`.
