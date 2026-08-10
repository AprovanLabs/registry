# AGENTS.md

## Cursor Cloud specific instructions

This repo is a `pnpm` + `turbo` monorepo (workspaces: `apps/**`, `packages/**`).
Standard scripts live in the root `package.json` (`build`, `dev`, `lint`,
`typecheck`) and each package's `package.json`. See `README.md` and `docs/` for
product/module details. Notes below are the non-obvious things — dependency
installation is handled by the environment's startup update script and is not
repeated here.

### Toolchain
- Use `pnpm` via **corepack** — the repo pins `pnpm@9.15.9` in `packageManager`
  while the base image's global `pnpm` is a different major. `corepack enable`
  (run at startup) makes `pnpm` inside the repo resolve to 9.15.9 automatically.
- Node 22 is installed; `engines` requires `>=20` (`apps/registry` wants `>=22.12`).

### Build before dev/test
- Turbo `dev` `dependsOn: ["^build"]`, and libraries must be built before the
  server/web run, so run `pnpm build` first (heavy: `@utdk/clients` generates ~60
  provider clients).

### Core product = registry-server + registry-web (SQLite, no external services)
- Server (`@aprovan/registry-server`) has **no `dev` script** — build first, then
  `pnpm --filter @aprovan/registry-server start` (runs `node dist/standalone.js`).
  Defaults: SQLite at `~/.aprovan-registry`, `auth=none`, port **4000**. Health at
  `/healthz`. Override the port with `REGISTRY_PORT=<n>` (useful because the
  sibling `aprovan` gateway also defaults to 4000); `REGISTRY_ALLOW_INSECURE=1`
  relaxes local auth. Useful endpoints: `GET /tools/namespaces`, `GET/POST /profiles`,
  `GET/POST /credentials`, `POST /tools/:namespace/:operation`.
- Web (`@aprovan/registry-web`, Astro): `pnpm --filter @aprovan/registry-web dev`
  → `http://localhost:4321/`. It is a static browse/docs PWA built from
  `docs/data/providers.json` + the generated clients, so it renders provider docs
  without the server running.
- MCP server (`@utdk/mcp`) is stdio-only (no HTTP port) and needs `UTDK_PROVIDERS`
  (comma list) plus per-provider secrets; optional, only for MCP flows.

### Lint / test caveats (pre-existing — not environment issues)
- `pnpm lint` runs fine but reports many pre-existing errors (mostly `import/order`)
  in the **generated** clients under `packages/utdk/*`. The tooling works; the
  errors live in committed generated code.
- There is **no root `test` task**. Run tests per package: `pnpm -r test` or
  `pnpm --filter <pkg> test` (Vitest). `@utdk/e2e` has `test:live`/`doctor` that
  need AWS SSM provider creds — optional, nightly-only.

### Not needed for this repo
- The root `docker-compose.yml` (DynamoDB-local + MinIO) exists for the sibling
  `aprovan` workspace app, not for developing this repo. Docker is not installed
  by default and is not required here.

### Refactor rule
- Delete replaced code in the same change that replaces it — don't leave the
  old implementation around "just in case."
- A "delete X" task isn't done until `grep X` returns nothing in **both**
  this repo and the sibling `aprovan` repo, not just whichever one you're
  editing.
- A workspace-glob directory with zero git-tracked files
  (`git ls-files <dir> | wc -l` = 0) is build residue, not a package — delete
  it outright instead of deprecating it.
