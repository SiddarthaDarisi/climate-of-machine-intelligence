# The Climate of Machine Intelligence

An interactive timeline of AI history (1943–2025) built for a graduate discussion
assignment. It frames AI history as weather — warm springs of funding and optimism,
cold winters of disillusionment, hot booms of rapid deployment — and argues that both
AI winters were failures of hardware and funding, not of ideas.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS, and exported as a
fully static site.

## Development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Content is data-driven

All timeline content — eras, events, pivot moments, and impact callouts — lives in
[`src/data/timeline.ts`](src/data/timeline.ts) as a single typed array (see
[`src/lib/types.ts`](src/lib/types.ts) for the shape). Components render entirely from
this data; no events are hardcoded in JSX. To add or edit an event, edit that file only.

## Building

```bash
npm run build
```

This produces a static export in `out/` (`output: 'export'` in `next.config.js`).

## Deploying to GitHub Pages

The included workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
builds and deploys the static export to GitHub Pages on every push to `main`.

1. In your repo settings, go to **Pages** and set the source to **GitHub Actions**.
2. If this repo will be served from `https://<user>.github.io/<repo>/` (a project
   page, not a user/org root page), open `next.config.js` and uncomment/set:
   ```js
   basePath: '/<repo>',
   assetPrefix: '/<repo>/',
   ```
3. Push to `main`. The workflow builds with `npm run build` and publishes the `out/`
   directory.

## Stack

- Next.js 14 App Router, static export only — no server components fetch data at
  request time; everything renders from the local `timeline.ts` module.
- TypeScript
- Tailwind CSS
- Fonts via `next/font/google`: Bodoni Moda (display), IBM Plex Sans (body), IBM Plex
  Mono (labels/years)
