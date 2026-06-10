# Mobina Moghadam — Portfolio

A UI/UX designer portfolio built with [Next.js 15](https://nextjs.org) (App Router), TypeScript, Chakra UI, Framer Motion, and Tailwind CSS.

Live site: [mobinamoghadam.art](https://www.mobinamoghadam.art/)

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

This repo is ready to deploy from GitHub. Two platforms are pre-configured:

### Vercel (recommended)

1. Push the repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js. The included `vercel.json` pins the build to `npm run build` and output to `.next`.
4. Click **Deploy**.

### Netlify

1. Push the repo to GitHub.
2. Go to [app.netlify.com/start](https://app.netlify.com/start) and import the repo.
3. The included `netlify.toml` configures the build command, publish directory, and installs the official `@netlify/plugin-nextjs` plugin.
4. Click **Deploy site**.

Both platforms read the Node version from `package.json` / `.nvmrc` automatically.

## SEO

- `public/sitemap.xml` and `public/robots.txt` are committed.
- Open Graph image: `public/mobi.png`.
- Per-route metadata is defined via Next.js `Metadata` exports in each `page.tsx`.

## License

© Mobina Moghadam. All rights reserved.
