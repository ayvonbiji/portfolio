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
│   └── img/favicon.svg        # Browser tab icon
├── vercel.json                # Vercel settings (clean URLs, cache + security headers)
└── README.md
```

## Resume policy

There is no public resume download. The Contact section asks visitors to request it, and the "Email me" button opens an email with the subject "Resume request". Change the wording in `resumeRequest` inside `content.js`.

## Updating content

Open `assets/js/content.js` and edit the text. Common changes:

| To change…                 | Edit in `content.js`                          |
| -------------------------- | --------------------------------------------- |
| Name, title, intro, availability | `profile`                               |
| About paragraphs           | `about`                                       |
| Career goal, target roles  | `goals`                                       |
| Jobs / internships         | `experience`: `summary`, `responsibilities`, `skills` per role |
| Skills                     | `skills`                                      |
| Projects + GitHub links    | `projects` → `links.code` / `links.demo`; `featured: true` makes a card full width; `category` drives the filter |
| Degrees                    | `education`                                   |
| Certifications             | `certifications`                              |
| Email, LinkedIn, GitHub    | `contact` (`showPhone: true` shows your mobile) |

- Any text in `[square brackets]` is highlighted on the page as a placeholder.
- Add a GitHub link to a project with `links.code` and a "View on GitHub" link appears on its card.

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
