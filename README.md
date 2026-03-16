# Kjira's SNES Journey

A personal blog documenting a playthrough of the entire Super Nintendo catalog — all 1749 games.

Built with Vite + React + TypeScript + Tailwind CSS.

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Silkscreen](https://fonts.google.com/specimen/Silkscreen) font for pixel-style headings
- Deployed via GitHub Actions to GitHub Pages

## Running locally

```bash
npm install
npm run dev
```

## Adding a game review

All game data lives in `src/data/games.ts`. Each entry supports:

```ts
{
  id: 43,
  title: "Super Metroid",
  slug: "super-metroid",
  image: superMetroidImg,
  category: "Action",
  year: 1994,
  developer: "Nintendo R&D1",
  publisher: "Nintendo",
  score: 5,                        // 1–5, optional
  teaser: "One of the best.",      // card preview text, optional
  review: "<p>Full review HTML</p>" // optional
}
```

The last entry in the array is automatically shown as the featured game on the homepage.

## Credits

- Kjira character art by [@fyichi](https://twitter.com/fyichi)
- Intro music edited from [OC ReMix #3277](http://ocremix.org/remix/OCR03277): Chrono Trigger 'stratification' by melody
- Box art images are property of their respective owners, used for non-commercial fan purposes
