# Registry UI

## Plan

1. Replace the placeholder `apps/registry` package with a static Astro app using Tailwind and shadcn/ui components.
2. Build a filesystem-backed catalog layer that discovers all packages from `packages/utdk/**`, including nested child packages and parent relationships.
3. Render a browsable registry UI with searchable package navigation, copyable install/import snippets, and package detail pages.
4. Support optional package docs by rendering each package `README.md` plus any top-level markdown files from a generated `docs` directory into sidebar-linked subpages.
5. Add a GitHub Actions workflow that builds the Astro site and deploys it to GitHub Pages.

## Progress

- [completed] Replace the placeholder package with a static Astro app using Tailwind and shadcn/ui components.
- [completed] Build a filesystem-backed registry loader that discovers source packages, nested providers, parent links, README content, and optional docs pages from `packages/utdk/**`.
- [completed] Render the searchable registry landing page plus package detail pages with copy-ready snippets and embedded markdown docs.
- [completed] Add a GitHub Pages workflow and verify the app builds successfully with `pnpm --filter @aprovan/registry-ui typecheck` and `pnpm --filter @aprovan/registry-ui build`.
