# mariateleki.github.io

Personal academic website for [Maria Teleki](https://mariateleki.github.io). Built on top of [al-folio](https://github.com/alshedivat/al-folio) — check out their project!

---

## Use this template for your own site

Want a site like this? Here's how to get one up in a few steps.

### 1. Fork, clone, or copy this repo

Click **Fork** (top right on GitHub) or or **Clone** or download the ZIP and create a new repo named `yourusername.github.io`.

### 2. Enable GitHub Pages

Go to your repo → **Settings** → **Pages** → set Source to `main` branch, `/ (root)`. Your site will be live at `https://yourusername.github.io` within a minute or two.

### 3. Swap in your content

All the content lives in a single file:

| File | What to change |
|------|---------------|
| `index.html` | Name, bio, research thrusts, publications, news, travel, mentoring, teaching, service, awards |
| `main.css` | Colors, fonts, layout tweaks (`--global-theme-color` for the accent color) |
| `img/` | Your profile photo and paper figures |
| `pdf/` | Your CV and paper PDFs |

### 4. Key things to update in `index.html`

- **Name & subtitle** — search for `Maria Teleki`
- **Intro paragraph** — the `about-variability` div near the top
- **Research thrusts** — the `pub-thrust` sections (Disfluency-Aware AI, Person-Centered AI, Governable AI — rename/add/remove as needed)
- **News & Travel boxes** — the two side-by-side callout boxes near the top
- **CV link** — search for `Maria_Teleki_CV.pdf`
- **Social links** — navbar icons for Google Scholar and LinkedIn
- **Contact email** — search for `mariateleki@tamu.edu`

### 5. Change the accent color

In `main.css`, find:

```css
--global-theme-color: #6C5B7B;
--global-hover-color: #6C5B7B;
```

Swap in any hex color you like.

---

Built with HTML, CSS, and [Bootstrap 4](https://getbootstrap.com/docs/4.0/). No build step required — edit and push, that's it.

---

## Why I moved away from al-folio

[al-folio](https://github.com/alshedivat/al-folio) is great, but it comes with a heavy dependency stack — Docker, Ruby, Jekyll, npm — that needs ongoing maintenance and can break between updates. I wanted a site that would still work in 10 years without me having to debug a build pipeline every time a dependency goes out of date.

This version strips all of that out. Everything al-folio needs to build the site is vendored locally (CSS, JS, fonts). There's no build step, no Docker, no Jekyll. It's just static HTML — open `index.html` in a browser and it works. Push to GitHub and it's live. 

The tradeoff is that you edit HTML directly instead of Markdown. I find this totally fine, especially because...

## How I update the site

I use [Claude Code](https://claude.ai/code) to help me make changes. It makes editing raw HTML feel as easy as describing what you want in plain English — "add this paper", "swap these sections", "make the photo smaller". Claude handles the edits, I review, and then push. Highly recommend it.
