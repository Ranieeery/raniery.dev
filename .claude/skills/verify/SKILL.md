---
name: verify
description: Run the portfolio's definition of done (build, lint, format, Lighthouse and accessibility in both themes and locales). Use before declaring any change finished, or when asked to "verify", "check the site" or "run Lighthouse".
---

# Verify (definition of done)

Run the steps in order and stop at the first failure. Report each step's result
with the real output, not a summary of what should have happened.

## 1. Static checks

```bash
npm run build          # must finish with no errors AND no warnings
npm run lint
npm run format:check
```

A warning in `next build` counts as a failure. If `format:check` fails, run
`npm run format` only on files you changed, then re-check.

## 2. Start the production server

On Windows a stale `next start` keeps port 3000 and serves old assets for new
HTML, which breaks the page. Free the port first:

```bash
netstat -ano | grep ':3000 ' | grep LISTENING   # last column is the PID
taskkill //PID <pid> //F                         # only if something is listening
```

Then start the server in the background (`npm run start`) and wait until
`http://localhost:3000/pt` answers 200.

## 3. Lighthouse (≥ 90 in every category)

Four runs: `/pt` and `/en`, each on mobile and desktop.

```bash
npx lighthouse http://localhost:3000/pt --quiet --chrome-flags="--headless" \
  --output=json --output-path=<scratchpad>/lh-pt-mobile.json
npx lighthouse http://localhost:3000/pt --quiet --chrome-flags="--headless" \
  --preset=desktop --output=json --output-path=<scratchpad>/lh-pt-desktop.json
# repeat for /en
```

Read `categories.*.score` from each JSON (scores are 0–1). Any category below
0.90 fails, except: locally, Best Practices loses a few points to the Speed
Insights script, which only loads on Vercel. Mention it, don't chase it.

Write reports to the scratchpad, never into the repo.

## 4. Accessibility in both themes

Use the `playwright-cli` skill. For each of `/pt` and `/en`, at 375px and
1280px wide, in light and dark:

- Set the theme by writing `localStorage.theme = "dark"` (or `"light"`) and
  reloading; the theme script reads that key before first paint.
- Inject axe-core from the page context and run it
  (`https://cdnjs.cloudflare.com/ajax/libs/axe-core/<version>/axe.min.js`, then
  `axe.run()`); report every violation with its selector.
- Check by hand what axe can't: one `h1`, skip link reaches `#main`, visible
  focus ring when tabbing, touch targets ≥ 44px on the mobile menu and toggles.

## 5. Clean up

Stop the server you started and confirm port 3000 is free again.

## Report

A short table: step → pass/fail, plus the four Lighthouse score rows and any
axe violations. Don't call the change done if anything failed.
