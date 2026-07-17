# Patchwork ⇄ Registry convergence — plan & status

_Last updated: 2026-07-17_

Living doc for marrying the registry (execution plane) and patchwork (UI plane)
experiences, with `core` holding the shared primitives. Companion to
[STATUS.md](./STATUS.md) (registry-only overhaul). Tracks diagnosis, next
steps, open ideas, challenges, and what has landed.

## Diagnoses

### 1. Live MCP endpoint fails on POST (`aprovan.com/api/gateway/mcp`)

**Root cause (confirmed):** the gateway Lambda Function URL is IAM-protected
and fronted by CloudFront with an Origin Access Control that SigV4-signs each
origin request. **CloudFront OAC does not hash request bodies** — for POST/PUT
it requires the *client* to send `x-amz-content-sha256` (hex SHA-256 of the
body) or Lambda rejects with "The request signature we calculated does not
match…". Patchwork's own web client works around this in `gatewayFetch`
(computes the hash per request), but external MCP clients (Claude, VS Code)
POST JSON-RPC and cannot be asked to add AWS signing headers. GETs work; every
MCP POST fails — exactly the reported log.

**Fix:** a Lambda@Edge origin-request function on the `api/gateway/*` behavior
(`includeBody: true`) that computes the body hash and injects
`x-amz-content-sha256` when absent. CloudFront signs *after* origin-request
functions run, so the OAC signature then covers the correct payload hash.
Constraints: Lambda@Edge sees at most 1 MB of body (fine for MCP JSON-RPC;
larger bodies pass through untouched and keep the current client-side-hash
contract), must live in us-east-1 (core `WebStack` already is), and skips when
the client already sent the header. This also un-breaks *any* bodied request
from arbitrary clients — the `gatewayFetch` client-side hashing becomes an
optimization, not a requirement.

Alternatives considered: API Gateway in front of the Lambda (loses
RESPONSE_STREAM streaming, new stack); public Function URL + WAF (org policy
blocks unsigned invocation; weaker auth); requiring the header from clients
(impossible for MCP). Lambda@Edge is small, transparent, and keeps streaming.

### 2. Homepage auto-running demo is distracting

`HomeSandboxDemo` auto-runs every 15 s on a timer with rotating hard-coded
cities; the script is read-only and the layout is two large cards.
**Change to:** user-editable script (reuse `CodeEditor`), a city input with
autocomplete backed by Open-Meteo's geocoding API (already keyless/CORS), a
manual **Run** button (no timers), and a compact result strip — headline result
(city + temperature + wall time) always visible, full span/log view behind a
details-on-demand toggle.

### 3. No TypeScript intelligence in the browser editors

Both the registry playground (`CodeEditor` = highlighted `<textarea>`) and
patchwork's editor lack types/completions — painful to write sandbox scripts.

**Approach (researched):** CodeMirror 6 + [`@valtown/codemirror-ts`](https://github.com/val-town/codemirror-ts)
running a real TypeScript language service in a Web Worker via
`@typescript/vfs` (lint, hover, completions, goto). Monaco was rejected:
~5 MB, poor fit with Astro islands and the existing lightweight editors.
Lib/type sources:

- Base libs via `createDefaultMapFromCDN` (or vendored lib.d.ts set).
- **UTDK provider types from the registry itself**: the bundler already emits
  real TS sources per provider (`types/schemas.ts`, per-tag namespaces). The
  registry app exposes them as static `/catalog/types/<provider>/*.d.ts`;
  the editor's VFS mounts the providers a script imports (drive off
  `parseScriptDependencies`). This is our own, better version of "automatic
  type acquisition" — provenance-aware and offline-capable.

**Dependency panel:** the playground already shows parsed dependencies as
badges. Extend into a proper panel: provider icon/title, resolved version,
auth methods, and provenance (origin domain/spec URL from
`catalog/providers.json` — data landed in registry STATUS workstreams A/E).
Ship as a reusable component so patchwork embeds the same panel for widget
scripts.

### 4. Patchwork issues

- **Credentials redirect:** `CREDENTIALS_URL` is hard-coded to
  `https://aprovan.com/registry/account/credentials/`. Local dev must point at
  the local registry app. Fix: env-driven registry base
  (`VITE_REGISTRY_URL`, dev default `http://localhost:4321`, prod
  `https://aprovan.com/registry`) with a small `registryUrl(path)` helper —
  the general harness for all patchwork→registry deep links.
- **Clunky LLM provider `<select>`:** replace with an icon row of known
  providers (OpenAI, Anthropic, Gemini, Synthetic.new). Connected ones
  (from gateway `/tools`) are selectable; unconnected ones link to the
  registry credentials page for that provider. Active client/model shown as a
  subtle indicator in the chat composer.
- **Dark/light mode:** the shell follows the theme but chat surfaces hard-code
  `bg-white` (tab content, tool-call cards). Remove literal colors; use
  `bg-background`/`bg-card` tokens everywhere.
- **Floating edit pill (Bobbin) always visible:** rendered unconditionally on
  the chat page. Only mount when a patchwork widget is actually in play
  (open widget preview tab or code preview present).

### 5. File runtimes / workspace VFS (the big one)

Current state: patchwork's "workspace" is **browser-local OPFS**
(`navigator.storage`) — invisible to the gateway, other devices, agents, and
schedulers. The gateway has a minimal `ContentStore`
(prompt/artifact, workspace-scoped, hash-versioned, SQLite locally / DynamoDB
in Lambda). The mcp-app-server has a separate `WidgetStore`
(raw `.tsx` + manifest under `widgets/<name>/<hash>/`, pluggable `FSProvider`).

**Target: one workspace filesystem (WFS) service in the gateway** — an
S3-like, prefix-partitioned tree per workspace, exposed like a normal FS:

```
/widgets/<name>/...        raw widget sources + manifest (WidgetStore layout)
/skills/<name>/SKILL.md    Open-Knowledge-Format markdown (frontmatter: title, tags, type)
/data/...                  ETL dumps from scheduled UTDK script runs
/prompts, /artifacts       absorb today's ContentStore kinds
```

Design pillars:

- **API:** `GET/PUT/DELETE /fs/*path`, `GET /fs?prefix=&list=` (readdir),
  content-hash versioning like ContentStore (a file's history = its hashes).
- **Permissions by prefix:** workspace membership grants roots; finer grants
  are `(principal, prefix, r/w)` rows — the S3 model. Sessions already carry
  workspace scoping; this extends the existing permissions tables.
- **Backends:** local = SQLite (dev parity with ContentStore); Lambda = S3
  object per `(workspace, path, hash)` + Dynamo index row. Same interface.
- **Clients:** patchwork's `workspace-vfs.ts` becomes a thin sync layer:
  OPFS as offline cache, gateway WFS as source of truth. mcp-app-server's
  `FSProvider` gets a gateway backend (`registry-backend.ts` already points
  that direction). Agents get `fs_read`/`fs_write`/`fs_list` MCP tools for free
  via the gateway MCP server.
- **Streams (Flue's Durable Streams idea):** model append-only files
  (`.log`, event streams, OTel spans) as WFS files with an append op and
  cursor-based tailing (`GET /fs/x?from=<offset|hash>` long-poll first; real
  streaming later). `tail -f` and `cat` semantics over the same tree — this is
  where scheduled-run output and RuntimeEvent spans land.
- **Skills = structured docs, not code:** a skill is a `SKILL.md` (+ assets)
  under `/skills/`; frontmatter (title, tags, type) is the index. Agents load
  them as context; nothing to execute. Same files power Flue-style
  `import skill from '.../SKILL.md' with { type: 'skill' }` later.

**End-to-end widget proof** (the "most important"): generate in chat → save to
WFS `/widgets/<name>/` → listed in the workspace tree → open/run via the
compiler → edit in EditModal → save back. Locally this already almost works on
OPFS; the milestone is the same flow through the gateway WFS so widgets follow
the workspace, not the browser profile.

## Execution order

1. **MCP fix** — Lambda@Edge in core `WebStack` (unblocks all external clients).
2. **Homepage demo rework** — editable/manual/compact (apps/registry only).
3. **Patchwork registry harness** — env-driven registry URLs (kills the
   localhost→aprovan.com redirect).
4. **Provider picker + active-model indicator** (patchwork).
5. **Theme + Bobbin visibility fixes** (patchwork).
6. **TS editor** — CodeMirror+TS worker in a shared package, first consumer =
   registry playground; dependency/provenance panel alongside.
7. **Gateway WFS** — service + routes + prefix permissions; patchwork
   workspace sync; widget E2E on top.

## Status

- [x] Survey + this writeup.
- [x] 1. MCP fix — `oac-body-hash` Lambda@Edge
  (`core/infra/aws/src/lambdas/oac-body-hash/index.ts`) on the
  `api/gateway/*` behavior (`includeBody: true`); skips when the client sent
  the header or the body was truncated (>1 MB). Handler behavior simulated
  (hash/skip/preserve cases), synth verified (origin-request association +
  edgelambda trust). **Not deployed yet — needs `core` infra deploy.**
- [x] 2. Homepage demo — `HomeSandboxDemo` rebuilt: editable script
  (`CodeEditor`), Open-Meteo city autocomplete (`fetchCitySuggestions` in
  `lib/demo.ts`), manual Run only (auto-loop deleted), compact headline strip
  ("Tokyo · 29.8°C · 2 calls · 1.2s") with collapsible span/log view.
  Verified live in the dev server.
- [x] 3. Patchwork registry harness — `client/web/src/lib/registry.ts`
  (`registryUrl`/`credentialsUrl`, `VITE_REGISTRY_URL`, dev →
  `http://localhost:4321`); SessionControls + ChatPage use it. Registry side:
  `/account/credentials?provider=<id>` now opens the add form preselected
  (CredentialManager/AddCredentialForm).
- [x] 4. Provider picker — `ProviderPicker.tsx`: mono brand marks
  (`@lobehub/icons-static-svg`; simple-icons dropped — no OpenAI mark),
  connected = selectable with active ring, unconnected deep-links to the
  registry credential form; `ActiveProviderChip` in the composer. Model-level
  display is an open item (model is chosen gateway-side today).
- [x] 5. Theme/Bobbin — root cause: theme tokens switch on a `.dark` class
  nothing set, while Tailwind's `dark:` variant followed the OS → split
  theming. Fixed: `@custom-variant dark` in index.css + pre-paint OS sync in
  index.html; literal `bg-white` → `bg-card` (ChatPage, CodePreview,
  EditModal). Bobbin now mounts only with an open widget preview tab.
  Verified in both schemes in the dev server.
- [x] 6. TS editor foundation — `@aprovan/registry-ui/editor`
  (`TsScriptEditor`): CodeMirror 6 + `@valtown/codemirror-ts` +
  `@typescript/vfs`, page-shared TS env (CDN libs cached in localStorage),
  `declare module "*"` ambient fallback so untyped provider imports are `any`
  (mounted `.d.ts` via `extraFiles` wins), separate package entry so the
  `typescript` dep stays out of non-editor consumers (4 KB entry, deps
  external). `@aprovan/registry-ui/dependency-panel` (`DependencyPanel`):
  per-import provider icon, auth-method badges, provenance link
  (originDomain/originSpecUrl), "unregistered" fallback; catalog feed extended
  with site/originDomain/originSpecUrl. Playground wired (lazy import,
  `CodeEditor` as Suspense fallback). Verified live: diagnostics squiggle on a
  type error, panel rows with slack auth badges.
  **Milestone 2 (open):** emit `/catalog/types/<provider>` bundles from the
  generated `@utdk/*` sources and mount them via `extraFiles` for real
  provider IntelliSense; TS-in-worker if main-thread lint ever feels heavy;
  dark CodeMirror theme; adopt in patchwork's EditModal.
- [x] 7. Gateway WFS (milestone 1) — `apps/gateway/src/fs-store.ts` (SQLite,
  content-hash versioned, prefix ops, `GATEWAY_DATA_DIR` override) +
  `routes/fs.ts` (`GET /fs?prefix=`, `GET/PUT/DELETE /fs/*`, hash-pinned
  reads, recursive delete), mounted in app.ts; `tests/fs.test.ts` (6 cases,
  all green, full gateway suite passes). Patchwork `workspace-vfs.ts`
  refactored to a `WorkspaceBackend` interface — gateway WFS when reachable
  (probed once), OPFS offline fallback; ChatPage surface unchanged.
  **E2E proven locally** (gateway `APROVAN_ENV=off` + patchwork dev):
  seeded `widgets/hello-clock/main.tsx` via `PUT /fs` → appeared in the
  patchwork file tree → preview compiled and rendered the live React widget →
  EditModal Save wrote back through the gateway (updatedAt advanced,
  idempotent hash). The chat-generate step rides the same rails (code block →
  edit session → `saveWorkspaceProject`) and needs only an LLM credential.

## Round 2 (2026-07-17) — feedback fixes

- [x] **LLM provider aliasing (`/llm` routes)** — root cause of
  `Package subpath './synthetic.new' is not defined`: patchwork called
  `/tools/synthetic.new/createChatCompletion` but no such utdk module exists
  (only a stray `openapi.json`, now moved to `data/openapi/`). Chat providers
  are now gateway-side aliases onto the OpenAI-compatible `utdk/openai`
  client (`src/llm.ts`): `anthropic` → `api.anthropic.com/v1`, `google` →
  `…/v1beta/openai`, `synthetic.new` → `api.synthetic.new/openai/v1`, each
  with env-overridable base URL/default model (`LLM_<ID>_BASE_URL` /
  `_DEFAULT_MODEL`). Routes: `GET /llm/providers` (connected flags),
  `GET /llm/:provider/models` (upstream `/models` passthrough),
  `POST /llm/:provider/chat` (UIMessage→OpenAI conversion, stored-prompt
  `{{var}}` expansion via ContentStore, OpenAI SSE → AI SDK UI message
  stream adapter incl. `reasoning_content` → reasoning deltas). utdk
  `client.ts`: explicit `baseUrl` now follows OpenAI-SDK `baseURL` semantics
  (spec server path stripped, override path preserved); `text/event-stream`
  responses return the raw byte stream instead of buffering. 7 new gateway
  tests; **verified live end-to-end**: model listing + streaming GLM-5.2 chat
  (with reasoning panel) through the patchwork UI.
- [x] **Empty file tree** — gateway WFS is the source of truth but started
  empty while old files sat in browser OPFS. `workspace-vfs.ts` now runs a
  one-time best-effort OPFS→gateway migration on first probe (copies files
  the workspace tree is missing).
- [x] **Low-key provider picker + model select** — icon row replaced by a
  compact `[mark] Provider ⌄` control in the composer (`ProviderPicker.tsx` →
  `ProviderModelControls`): popover lists providers from `/llm/providers`
  with green connected dots, unconnected rows deep-link "SET UP ↗" to the
  registry credential form; adjacent model popover lists live provider models
  (default marked), per-provider preference in localStorage
  (`patchwork:chat-model:<id>`). Verified live in the browser.
- [x] **Workspace selector visuals** — two real causes, both fixed: core
  `@aprovan/ui/theme.css` never defined `--popover`/`--popover-foreground`
  (transparent dropdown), and patchwork's Tailwind never scanned the
  prebuilt package sources, so utilities used only inside `@aprovan/ui`
  (`size-8`, `size-3.5`, `bg-popover`) were never generated (unsized icon).
  Added popover tokens (light+dark) to core (bumped `@aprovan/ui` 0.2.3) and
  `@source "../node_modules/@aprovan/{ui,registry-ui}/dist"` to patchwork's
  index.css. Verified at the emitted-CSS layer (`bg-popover` →
  `var(--popover)`, sized `size-*` rules); eyeball in a signed-in session
  pending.
- [x] **Local AWS-parity infra** — `docker-compose.yml` at the repo root
  (dynamodb-local :8000 — the existing `*-dynamodb` test suites now run —
  + MinIO :9000/:9001); `pnpm bootstrap:local` (gateway) creates every
  table from `db/schema.ts` plus the FS bucket; `pnpm dev:aws` runs the
  gateway on the same Dynamo/S3 code paths as Lambda. SQLite remains only
  as the zero-dependency fallback.
- [x] **S3/Dynamo WFS backend** — `fs-store.ts` split into `IFsStore` (async)
  with `FsStoreSqlite` and `FsStoreS3`: content-addressed blobs
  (`blobs/<ws>/<hash>`) in S3, pointer (`P#<path>`) + version
  (`V#<path>#<hash>`) rows in the `FsFiles` table; same `STORE_BACKEND`
  switch as the other stores (falls back to SQLite with a warning when
  `FS_BUCKET` is unset). Presigned direct-to-S3 uploads:
  `POST /fs-uploads {hash,mimeType}` → presigned PUT,
  `POST /fs-uploads/complete {path,hash}` registers the blob (501 on
  SQLite). Infra: `FsFilesTable` + `FsBucket` in the registry stack, Lambda
  env (`FS_TABLE`/`FS_BUCKET`) + grants wired, synth verified. 6-case
  integration suite runs against the compose stack (109/109 gateway tests
  green). **Deploy pending** (registry infra deploy).
- [x] **Gateway MCP fs tools** — `fs_list`/`fs_read`/`fs_write`/`fs_delete`
  built into the gateway MCP server (`src/mcp/fs-tools.ts`), workspace-
  scoped via the principal, listed alongside the UTDK meta-tools — the
  "local harness file tools" layer; prefix-grant permissions still to come.
- [x] **`/catalog/types` emission (TS editor milestone 2)** —
  `GET /catalog/types/<provider>.json` → `{module, files}` `.d.ts` bundles
  built from the generated `packages/utdk` type sources (prefers the
  per-tag `types/` dir over stale flat `types.ts`; synthesizes a
  declaration entry with typed default client + factory). Playground
  fetches bundles per detected import, mounts them at
  `/node_modules/@utdk/<p>/…` with bare-name alias modules
  (`extraFiles`). Verified live: `github.users.` completions list real
  operations. Package type emissions confirmed: `@aprovan/registry-ui`
  (tsup dts per entry) and `@aprovan/patchwork-editor`
  (`tsc --emitDeclarationOnly`, was missing from dist — rebuilt).
- [x] **Local package link flow** — `patchwork/.pnpmfile.cjs`:
  `APROVAN_LOCAL_LINKS=1 pnpm install` rewrites `@aprovan/ui`,
  `@aprovan/registry-ui`, `@aprovan/registry-main` to `link:` the sibling
  checkouts (absolute paths computed at install time; plain install
  restores registry versions, lockfile untouched). Needed
  `tsconfig.json` react/react-dom `paths` pins in patchwork so the linked
  packages' React-19 types don't clash with React 18. Publishing stays
  commit/push → actions.

## Open ideas / parking lot (decisions recorded 2026-07-17)

Done this round: S3/Dynamo WFS backend, gateway MCP fs tools,
`/catalog/types` emission — see Round 2 above. Still open, with the agreed
direction:

- **`FSProvider` gateway backend** in patchwork's mcp-app-server widget
  store so `save_widget` from any MCP client lands in the same tree —
  patchwork definitely saves widgets to the gateway WFS.
- **Change notification:** etag polling on `GET /fs?prefix=` first;
  durable-stream tail is the follow-on, not the starting point.
- **Absorb prompts, artifacts AND skills into `/fs`** — all three are just
  blobs/text an agent may want to load. No special `/fs/skills` routes:
  prefix *metadata* marks a subtree as a skill directory or knowledge base,
  and context-loading tools (search/pull over those refs) do the rest.
- **Durable streams:** append op + cursor tail (`?from=`) on WFS files for
  `.log`/event streams; OTel spans and scheduled-run output write there.
- **Scheduled (CRON/event) UTDK script runs** may write anywhere — WFS is a
  freeform filesystem; the gating question is the permission story:
  `(principal, prefix, r/w)` grant rows on top of the group-grants tables
  (also what scopes the MCP fs tools and presigned uploads properly).
- Skills-lock / OKF indexing: per prior thoughts; rides the prefix-metadata
  model above.
- Publish `@aprovan/ui` fix so patchwork's local gateway client shim
  (`client/web/src/lib/gateway.ts` header workaround) can shrink back to
  `createGatewayClient` — after Lambda@Edge lands the payload-hash half of
  the workaround is obsolete too.
- Provider claiming flow (provenance.md) — unchanged.
- `/catalog/types` follow-ups: trim bundle size (github is ~4.4 MB across 52
  files; mount only imported tag groups), adopt `TsScriptEditor` +
  provider types in patchwork's EditModal.
- LLM chat: resolve the `chat-patchwork-widget` stored prompt (route already
  expands `{{vars}}` from the ContentStore prompt when present — the prompt
  content itself still needs seeding); tool-calling support in the
  UI-message-stream adapter when chat grows tool use.

## Challenges / risks

- Lambda@Edge adds cold-start latency to bodied gateway calls (~ms once warm)
  and caps hashed bodies at 1 MB — larger uploads still need client hashing.
- `@typescript/vfs` + worker adds real bundle weight to the playground page
  (~1.5 MB gz for typescript). Mitigation: lazy-load the worker on first focus.
- WFS on Lambda needs the DynamoDB/S3 backend variant of ContentStore's
  interface; local/prod parity must be kept honest with a shared contract test.
- Patchwork consumes published `@aprovan/*` packages — shared UI work lands in
  core/registry first, then version bumps ripple (publish-then-consume flow).
