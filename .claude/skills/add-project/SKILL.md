---
name: add-project
description: Add, edit or remove a project in the Projects section (profile.ts plus pt/en dictionaries). Use when asked to "add a project", "update the stack of X" or "remove project Y".
---

# Add or change a project

A project lives in two layers:

1. `src/content/profile.ts` → `projects` array:
   ```ts
   {
     id: "camelCaseId",            // also the dictionary key
     name: "Proper Name",          // or null when the name is translated
     repo: "https://github.com/Ranieeery/<repo>",
     stack: ["Java", "Spring Boot 3", ...],
   }
   ```
   Array order is display order (numbered 01, 02, …).
2. `src/i18n/dictionaries/pt.ts` and `en.ts` → `projects.items.<id>`:
   ```ts
   camelCaseId: { summary: "..." },               // name from profile.ts
   camelCaseId: { name: "...", summary: "..." },  // when name is null
   ```

`ProjectId` is derived from `profile.ts`, so after step 1 the build fails until
both dictionaries have the entry. That is the check; don't loosen the types.

## Rules

- Get the real data: read the repo's README (`gh repo view Ranieeery/<repo>`
  or the GitHub page) for the stack and a one-sentence summary. Don't invent
  technologies.
- If the project is in a CV, the CV's wording wins (see the `cv-sync` skill).
- Summary: one sentence, what it does and the notable tech, same meaning in
  both languages. Follow the wording rules in `CLAUDE.md` ("Go", "Back-end"
  vs "Backend", …).
- Stack names as the ecosystem writes them ("Spring Boot 3", "PostgreSQL",
  "Tailwind CSS").
- Removing a project: delete it from `profile.ts` and both dictionaries; leave
  no unused keys.

## Finish

Run `npm run build`, `npm run lint`, `npm run format:check`. This is a `feat`
(new project) or `fix` (corrected data) for the version bump; see the `ship`
skill.
