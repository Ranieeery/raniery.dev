# raniery.dev

Personal portfolio of Raniery Meireles Goulart, backend software engineer.
Live at [raniery.dev](https://raniery.dev).

Built with Next.js 16, TypeScript and Tailwind CSS v4. Static, bilingual
(`/pt` and `/en`), with light and dark themes.

## Getting started

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

| Script                 | What it does               |
| ---------------------- | -------------------------- |
| `npm run dev`          | Development server         |
| `npm run build`        | Production build           |
| `npm run start`        | Serve the production build |
| `npm run lint`         | ESLint                     |
| `npm run format`       | Format with Prettier       |
| `npm run format:check` | Check formatting           |

## Editing content

- **Text:** `src/i18n/dictionaries/pt.ts` and `en.ts`, which must have the same
  keys.
- **Shared data** (dates, links, tech stacks): `src/content/profile.ts`.
- **Resumes:** `public/cv/`.
- **Colors:** `src/app/globals.css`, mirrored in `src/lib/theme-colors.ts`.

## Contributing

Commits follow [Conventional Commits](https://www.conventionalcommits.org) and
versions follow [SemVer](https://semver.org).
