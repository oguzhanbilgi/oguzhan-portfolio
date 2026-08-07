# Oğuzhan Bilgi — Portfolio Redesign

A recruiter-focused static portfolio for GitHub Pages. No build step is required.

## Files

- `index.html` — semantic one-page portfolio + bilingual content
- `styles.css` — responsive visual system and motion-safe layouts
- `app.js` — Anime.js choreography, language toggle, reveals, tilt, navigation state
- `assets/cv/` — current Turkish and English ATS CVs
- `assets/oguzhan-mark.svg` — favicon / monogram

## Deploy to GitHub Pages

This package is designed to be copied directly to the root of the `gh-pages` branch of `oguzhanbilgi/oguzhan-portfolio`.

1. Back up the current branch.
2. Replace the current compiled CRA output with the files in this folder.
3. Commit and push to `gh-pages`.
4. GitHub Pages should serve `index.html` directly at:
   `https://oguzhanbilgi.github.io/oguzhan-portfolio/`

No npm install or build is required. Anime.js is loaded from jsDelivr; all core content remains usable if the CDN animation script fails.

## Content notes

The portfolio intentionally presents AI-assisted development transparently: AI is described as an accelerator while ownership remains on requirements, integration, debugging, validation, documentation and delivery.
