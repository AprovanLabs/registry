# Registry Improvements — Plan & Status

_Last updated: 2026-07-16_

Living status doc for the registry overhaul. Each workstream is broken into
chunks; chunks get checked off as they land. Update this doc with every chunk.

## Guiding principles

- **APIs are SDKs.** Every surface (docs, website, typing) presents providers
  as TypeScript namespaces/functions — `await github.users.getByUsername({ username: "octocat" })` —
  never as HTTP endpoint tables. HTTP details are secondary metadata.
- **Provenance points upstream.** A package's source is the vendor's spec/site
  (e.g. `docs.github.com`), never an aggregator like APIs-guru we happened to
  pull it through.
- **One-time scripts, not pipelines.** Source ingestion is a set of runnable
  scripts under `scripts/sources/`, re-run manually when we want fresh specs.
- **Auth is a first-class doc concern** and must map 1:1 onto the gateway
  credential types (`bearer_token` / `api_key` / `oauth2_client` / `oauth2_authcode`).

---

## Workstream A — Source ingestion (`scripts/sources/`)

One-time scrape/load scripts that merge providers into `data/registry.json`.

- [x] **A1. Registry entry schema extension** — `provenance` (source,
  originDomain, originSpecUrl, service, retrievedAt) and `branding` (logo,
  site) added to `RegistryProvider` in `packages/bundler/src/provider.ts`.
- [x] **A2. APIs-guru ingest script** (`scripts/sources/apis-guru.ts`) — pulls
  `https://api.apis.guru/v2/list.json`; clean Go-style names
  (`github.com → github`, `twilio.com:api → twilio/api`); fetch URL stays on
  the stable APIs.guru cache while provenance records the vendor's
  `x-origin` spec URL + domain for all linking. Merge policy: hand-curated
  entries always win; legacy raw-GitHub bulk entries replaced. Result:
  2,555 entries (41 hand-curated + 2,514 ingested), idempotent re-runs,
  no name collisions.
- [ ] **A3. Other sources (later)** — candidates: vendor `/.well-known` specs,
  Konfig/openapi-examples, public postman→openapi conversions. Each gets its
  own script in `scripts/sources/`.

## Workstream B — Generated typing (bundler `render.ts`/`schema.ts`)

Kill the "horrific" inline type blobs; a real typing system.

- [x] **B1. Named schema types** — `components.schemas` now emit as named
  exported types in `types/schemas.ts` (`export type OrganizationFull = …`);
  operation signatures reference names (`Promise<OrganizationSimple[]>`).
  `$ref`s are preserved through a new raw-schema path in `client-api.ts` /
  `openapi.ts`; `SchemaRenderContext` in `schema.ts` maps refs → names.
  Recursive schemas now type correctly (previously degraded to index sigs).
- [x] **B2. Clean JSDoc** — `Tags:`/`Access as:` noise removed; JSDoc is the
  operation description + `@see` link from the operation's `externalDocs`.
  Inputs keep property-level doc comments.
- [x] **B3. Pilot regeneration** — `github` regenerated: per-tag namespace
  files (orgs.ts, users.ts, …) importing named types from schemas.ts;
  `pnpm --filter utdk typecheck` passes. **Follow-up:** regenerate the other
  ~30 curated providers (mechanical, network-bound).

## Workstream C — Generated docs (bundler docs pipeline)

- [x] **C1. SDK-style doc pages** — group pages are now signature-first: one
  `##` per operation with description + `[API reference]` link, a ts fence
  showing the exact editor signature (documented input properties, named
  output types), and HTTP details reduced to a one-line `<sub>` footnote.
- [x] **C2. README rewrite** — quick-start picks a real callable operation
  (prefers no-input GETs, e.g. `await github.meta.root()`), explains the
  isolate namespace-value story, and includes an `## Authentication` section
  derived from `securitySchemes` mapped to gateway credential language
  (placeholder until D1's LLM enrichment).

## Workstream D — LLM augmentation

- [x] **D1. Auth interpretation** — `phases/authIntel.ts` (`generate <provider>
  --phase auth`): Claude (structured outputs, `@anthropic-ai/sdk`) interprets
  `securitySchemes` + cached docs into `auth.json` (gateway credential types,
  exact headers, ordered setup steps, OAuth URLs/scopes). Rendered as an
  Authentication card on provider pages. **Not yet run live** — needs
  `ANTHROPIC_API_KEY` (or `ant auth login`); code typechecked + wired.
- [ ] **D2. Description augmentation** — rewrite scraped descriptions into
  crisp summaries; flag operations with empty/poor descriptions and generate
  one-liners. (Same phase pattern as D1; not started.)
- [x] **D3. Caching/determinism** — auth intel cached by sha256 of the
  auth-relevant spec content (`sourceHash` in auth.json); re-runs skip unless
  stale or `--overwrite-docs`.

## Workstream E — Provenance & ownership

- [x] **E1. Provenance chain in packages** — generated `package.json` now
  carries `utdk.provenance` + `utdk.branding` from the registry entry;
  `homepage` prefers the vendor site; icon falls back to branding logo.
- [x] **E2. Go-style aliasing design** — see
  [provenance.md](./provenance.md): alias → origin domain → origin spec URL;
  naming rules implemented in the ingest script; domain-form resolution and
  claiming flow specced as later phases.
- [x] **E3. Never link aggregators** — provider pages link
  `provenance.originSpecUrl` (vendor's spec) and `branding.site`; the
  APIs.guru cache URL is used for fetching only, never displayed as source.

## Workstream F — Website (apps/registry)

- [x] **F1. Theme** — `--syntax-{keyword,fn,type,string,comment}` tokens in
  global.css (light + dark), adapted from aprovan.com navy/red; exposed as
  Tailwind `text-syntax-*` classes; used for symbol highlighting only, never
  large surfaces.
- [x] **F2. Provider page = SDK reference** — new `SdkExplorer` island:
  searchable, namespace-grouped function index with signature previews
  (`getComments({ file_key, as_md? })`), syntax-accented, play button per
  symbol. Replaces the old HTTP-centric operations table.
- [x] **F3. Try-it hoisted** — try-it console is the hero of the explorer
  (`await figma.getComments(…)` header + copyable SDK snippet + typed form);
  per-symbol play buttons load it and scroll to it.
- [x] **F4. Markdown everywhere** — READMEs/docs/descriptions already render
  as markdown; auth setup steps render structured (not raw JSON/text).
- [x] **F5. Branding (provider pages)** — logo + owned-by domain line +
  vendor site/spec links on package pages. **Follow-up:** logos in the
  catalog browser cards for ingested entries (needs a regenerated package or
  catalog-side branding passthrough).
- [x] **F6. Homepage story** — hero now leads with "Every API is an SDK",
  `@utdk/<name>` imports, and the isolate namespace-value example rendered
  with syntax accents.

---

## Status log

- **2026-07-16** — Investigated codebase; wrote this plan.
- **2026-07-16** — A1 + A2 landed: schema extension and APIs-guru ingest
  script; `data/registry.json` refreshed to 2,555 entries with provenance +
  branding. Bundler tests green (167). Starting B (typing overhaul).
- **2026-07-16** — B, C, D1/D3, E, F landed in one pass: named-type rendering
  + SDK-style docs (github regenerated as pilot; typecheck green, 171 bundler
  tests), LLM auth phase scaffolded (`--phase auth`, needs API key to run),
  provenance model designed + wired end to end, website redesigned
  (syntax-accent theme, SdkExplorer with hoisted try-it, homepage story).
  Verified in browser: homepage hero, figma package page, search + play
  interactions.
  **Open follow-ups:** regenerate remaining ~30 curated providers; run
  `--phase auth` across providers once credentials are available; D2
  description augmentation; catalog-card logos; domain-form resolution
  endpoint (provenance.md later phases).
