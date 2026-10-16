---
name: cv-sync
description: Compare the site with the CVs in public/cv/ and update profile.ts and the pt/en dictionaries so they match. Use when a CV PDF changes or when asked to "sync with the CV", "update experience/skills/education from the resume".
---

# CV sync

The CVs are the source of truth. When the site and a CV disagree, the CV wins.

- `public/cv/raniery-goulart-cv-pt.pdf` → Portuguese copy (`src/i18n/dictionaries/pt.ts`)
- `public/cv/raniery-goulart-cv-en.pdf` → English copy (`src/i18n/dictionaries/en.ts`)
- Language-independent facts (dates, stacks, institutions, links, certificate
  titles) → `src/content/profile.ts`

## Steps

1. Read both PDFs in full (use the `pdf` skill if text extraction is needed).
2. Read `profile.ts`, `types.ts`, `pt.ts` and `en.ts`.
3. Build a diff list per section (hero, about, experience, projects, skills,
   education, certificates, languages): what the CV says vs. what the site
   says. Show it to the user before editing if it is more than a few lines.
4. Apply the changes:
   - Facts shared by both languages go in `profile.ts` only, never duplicated
     in the dictionaries.
   - New ids (experience, project, education, skill group) go in `profile.ts`
     first; the dictionary types derive from them, so the build then forces
     both dictionaries to add the matching entry.
   - Dates are `"YYYY-MM"`; `end: null` means ongoing.
5. Run the `verify` skill's static checks (`build`, `lint`, `format:check`).

## Wording rules (check every edited string)

- Never add the phone number, even if the CV has it. Contact is email,
  LinkedIn and GitHub only.
- English: "Resume". Portuguese: "currículo".
- "Go", never "Golang".
- English "Backend"/"Frontend"; Portuguese "Back-end"/"Front-end".
- Company names and job titles exactly as each CV writes them. "Empresa 1"
  is a real company name. The current employer is "Engineering" in English and
  "Engineering do Brasil" in Portuguese.

## Report

List what changed per file, and anything in the CV you deliberately left out
(the phone number, details that don't fit the site's sections).
