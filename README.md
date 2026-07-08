# Mobina Moghadam — Portfolio

A UI/UX designer portfolio built with [Next.js 15](https://nextjs.org) (App Router), TypeScript, Chakra UI, Framer Motion, and Tailwind CSS.

Live site: [mobinamoghadam.ir](https://www.mobinamoghadam.ir/)

## Tech stack

- **Framework:** Next.js 15 (App Router, static export friendly)
- **Language:** TypeScript
- **UI:** Chakra UI, Tailwind CSS, Emotion
- **Animation:** Framer Motion, AOS
- **PDF:** react-pdf / pdfjs-dist (resume preview)
- **Carousel:** react-slick

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Script          | What it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start the dev server with Turbopack   |
| `npm run build` | Production build                      |
| `npm start`     | Run the production build on port 3020 |
| `npm run lint`  | Lint with `next lint`                 |

Requires **Node 22.12.0** (matches `.nvmrc` and `engines` in `package.json`).

## Project structure

```
src/
├── app/                  # App Router routes (home, portfolio, contact, …)
├── components/           # Reusable UI components
│   ├── animations/       # AOS + Framer Motion providers
│   ├── portfolio/        # Portfolio gallery & detail layouts
│   └── SVGS/             # Inline icon components
├── styles/               # Header and global styles
└── utils/                # Data sources and helpers
public/                   # Static assets (images, fonts, sitemap, robots)
```

## Deployment

This repo deploys to **GitHub Pages** with a custom domain (`www.mobinamoghadam.ir`). The Next.js build is a static export (`output: 'export'` in `next.config.ts`), and a GitHub Actions workflow builds and publishes the `out/` folder on every push to `main`.

### One-time setup

1. **Enable Pages:** Repo Settings → Pages → **Build and deployment → Source: GitHub Actions**.
2. **Custom domain DNS:** Point `www.mobinamoghadam.ir` at GitHub Pages (CNAME to `SinaKafi.github.io`, or A records per [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. **Bind the domain:** Repo Settings → Pages → Custom domain → enter `www.mobinamoghadam.ir` → **Enforce HTTPS**. The committed `public/CNAME` file auto-fills this on first deploy.

### Deploy flow

1. Push to `main`.
2. The `.github/workflows/deploy.yml` action runs `npm ci` → `npm run build` → uploads `out/` → deploys to Pages.
3. Watch the run in the Actions tab. First deploy after enabling Pages can take a few minutes.

### Fallback platforms

`vercel.json` and `netlify.toml` are kept in the repo so you can fall back to either platform without git archaeology — just disable the Pages workflow and import the repo on Vercel/Netlify. Both detect Next.js automatically. Note: neither fallback uses the static export; they run the full Next.js server.

## SEO

- `public/sitemap.xml` and `public/robots.txt` are committed.
- Open Graph image: `public/mobi.png`.
- Per-route metadata is defined via Next.js `Metadata` exports in each `page.tsx`.

## License

© Mobina Moghadam. All rights reserved.
