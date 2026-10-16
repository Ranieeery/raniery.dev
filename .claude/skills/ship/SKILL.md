---
name: ship
description: Prepare the working tree for the owner to commit - pick the Conventional Commit type, bump the version with npm version, and write the commit message. Use when asked for a "commit message", to "bump the version" or to "prepare the release".
---

# Ship (prepare, never commit)

The owner reviews and commits. Never run `git commit`, `git push`, create
branches or merge PRs, unless the user explicitly asks for that one action.

## Steps

1. Look at the change: `git status` and `git diff` (staged and unstaged).
2. Pick the type:

   | Change                                     | Type       | Bump  |
   | ------------------------------------------ | ---------- | ----- |
   | new section, project, feature              | `feat`     | minor |
   | wrong data, bug, a11y/SEO fix              | `fix`      | patch |
   | internal restructuring                     | `refactor` | patch |
   | README / CLAUDE.md / skills                | `docs`     | patch |
   | deps, config, tooling                      | `chore`    | patch |
   | formatting/styling only                    | `style`    | patch |
   | removed route, changed URL, dropped locale | any + `!`  | major |

3. Check whether the version was already bumped in this working tree
   (`git diff package.json`). Bump only once per change:
   ```bash
   npm version <major|minor|patch> --no-git-tag-version
   ```
   That updates both `package.json` and `package-lock.json`.
4. Write the message:
   ```
   <type>[!]: <imperative summary, lower case, no period>

   <optional body: what and why, wrapped at 72>

   [BREAKING CHANGE: <what breaks and how to migrate>]
   ```
   Wrap code and product names in backticks, as the history does (for
   example "feat: add" followed by Vercel Web Analytics in backticks). Do not
   add `Co-Authored-By` or "Generated with Claude" lines.

## Report

The new version (`old → new`) and the message in a code block, ready to copy.
