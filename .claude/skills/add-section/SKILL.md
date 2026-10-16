---
name: add-section
description: Scaffold a new page section (component, data, dictionary types and copy in pt/en, navigation, numbering) following the portfolio's editorial layout. Use when asked to "add a section" such as talks, publications or testimonials.
---

# Add a section

Every touch point, in order:

1. **Data** (only if language-independent data exists): add an array to
   `src/content/profile.ts` with `as const satisfies readonly {...}[]` and
   export its id type, e.g. `export type TalkId = (typeof talks)[number]["id"];`.
2. **Types**: add the section's shape to `Dictionary` in `src/i18n/types.ts`
   (`title` plus whatever copy it needs; per-item copy as
   `Record<XId, {...}>`). Add the nav key to `nav` if it gets a menu entry.
3. **Copy**: fill `src/i18n/dictionaries/pt.ts` and `en.ts`. No text in the
   component, including `aria-label`s and screen-reader text. Strings used by
   several sections go in `common`.
4. **Component**: `src/components/sections/<Name>.tsx`, a server component:
   ```tsx
   type NameProps = { dict: Dictionary; index: number }; // + locale if needed
   export function Name({ dict, index }: NameProps) {
     const t = dict.name;
     return (
       <Section id="name" index={index} title={t.title}>
         ...
       </Section>
     );
   }
   ```
   `Section` gives the numbered label on the left and content on the right.
   Mark revealable blocks with `data-reveal` (content must stay visible
   without JS). Use `TechList`, `ExternalLink` and `Icon` where they fit.
5. **Page**: render it in `src/app/[lang]/page.tsx` and renumber the `index`
   props of the sections after it so numbers stay consecutive.
6. **Navigation**: add the id to `navIds` in
   `src/components/layout/nav-items.ts` in the same position.

## Design constraints

- Token classes only (`text-muted`, `border-line`, `text-accent-text`, …),
  never raw colors. Accent-colored text uses `text-accent-text`.
- Headings: the section `h2` comes from `Section`; items use `h3`. Never add
  an `h1`.
- No card grids, gradients, glow, emoji or new code-style decorations. Prefer
  lists separated by `border-line`, like Projects and Experience.
- Motion only through the existing reveal and hover patterns, disabled under
  `prefers-reduced-motion`.

## Finish

Run the `verify` skill. A new section is a `feat` (minor bump).
