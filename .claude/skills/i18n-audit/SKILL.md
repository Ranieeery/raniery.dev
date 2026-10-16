---
name: i18n-audit
description: Audit the code for i18n and content-rule violations (hard-coded user-facing text, pt/en drift, duplicated content, forbidden wording, dead keys or icons). Use when asked to "audit i18n", "check translations" or before a release.
---

# i18n and content audit

Read-only: report findings as `file:line — problem → fix`, grouped by check.
Fix only if the user asks.

## Checks

1. **Hard-coded text in components.** In `src/components/**` and `src/app/**`,
   look for JSX text nodes, `aria-label`, `alt`, `title` and `placeholder`
   values that are string literals. Allowed: brand/proper names coming from
   `profile.ts`, punctuation and separators (`—`, `·`).
2. **Language drift.** Compare `pt.ts` and `en.ts` key by key: same keys, same
   array lengths (`paragraphs`, `facts`, `highlights`, `certificates`,
   `languages`), and the same meaning. Flag a sentence in one language that
   has no counterpart in the other.
3. **Duplicated content.** Facts repeated in both dictionaries that belong in
   `profile.ts` (dates, URLs, stack names, institution names, identical
   proper names). Strings repeated across sections that belong in `common`.
4. **Wording rules.**
   - No phone number anywhere (search for digit runs like `\(?\d{2}\)?\s?9?\d{4}-?\d{4}`).
   - `Golang` → `Go`.
   - English: `Resume` (not "Résumé"/"CV" in UI copy); Portuguese: `currículo`.
   - English `Backend`/`Frontend`; Portuguese `Back-end`/`Front-end`
     (`grep -n "Backend\|Frontend" src/i18n/dictionaries/pt.ts` should be empty,
     and the reverse for `en.ts`).
   - Current employer: `Engineering` (en), `Engineering do Brasil` (pt).
5. **Dead code.** Dictionary keys never read by a component, icons in
   `src/components/ui/Icon.tsx` never used, exports with no importer.
6. **SEO copy.** `meta.title`, `meta.description` and `meta.ogAlt` exist in
   both languages and describe the current role.

## Report

End with a count per check. If everything passes, say so in one line.
