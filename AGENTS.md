# Repository Guidelines

## Project Structure & Module Organization

This is an Astro + Tailwind CSS research-lab site. Routes live in `src/pages/`, reusable UI in
`src/components/`, and typed Markdown collections in `src/content/` (people, publications, figures,
and gallery). Site identity belongs in `src/data/site.ts`; taxonomy and content helpers are in
`src/content.config.ts` and `src/lib/`. Put imported images in the matching `src/assets/` directory
and public static files in `public/`. Maintenance scripts and their data live in `scripts/` and
`scripts/data/`; deployment workflows are in `.github/workflows/`.

## Build, Test, and Development Commands

- `npm install` — install the locked dependencies.
- `npm run dev` — start the local Astro server at `http://localhost:4321`.
- `npm run build` — create the production site in `dist/`.
- `npm run preview` — serve the production build locally.
- `npx astro check` — type-check Astro files and content frontmatter.
- `npm run check:links` — verify publication DOI and URL fields.
- `npm run enrich:orcid -- --email=you@example.org` — preview ORCID matches; add `--write` only after review.

Run `npm run build` and `npx astro check` before submitting content or code changes.

## Coding Style & Naming Conventions

Use two-space indentation, semicolons, and the existing double-quoted JavaScript style. Keep Astro
components data-driven and use clear PascalCase component filenames. Use kebab-case slugs for Markdown
files; preserve the schema frontmatter defined in `src/content.config.ts`.

## Testing Guidelines

There is no standalone test framework. Treat `npx astro check`, `npm run build`, and relevant scripts
as the validation suite. For content changes, verify the rendered route with `npm run dev` or
`npm run preview`; run link checks when publication metadata changes.

## Commit & Pull Request Guidelines

Use short, imperative commit subjects that describe the user-visible change (for example,
`Keep architecture cards upright`). Keep commits focused. Pull requests should explain the affected
routes or collections, list validation commands run, link related issues when applicable, and include
screenshots for visual changes. Never commit secrets, generated `dist/`, or figures without confirmed
publishing rights.
