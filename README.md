# Pixel & Pencil Gallery v2

Rebuild of [PixelAndPencil_Gallery](https://github.com/Abhishekingle662/PixelAndPencil_Gallery).

## What changed

- CRA + Sass → Vite 7 + React 19 + TypeScript
- No 172MB asset dump in the new repo — images load from the existing Vercel origin (`VITE_ASSET_BASE`)
- WebP first, PNG/JPG fallback on error
- Lazy images, `preload="none"` videos, hover-to-preview
- Tag filters on renders, masonry on sketches
- Keyboard lightbox (Esc / arrows)
- Unity embed + Unreal progress kept from original data

## Run

```bash
npm install
npm run dev
```

Optional: copy optimized assets into `public/assets` and set `VITE_ASSET_BASE=` (empty) to serve locally.
