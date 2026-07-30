Be concise and clear. Prefer strong abstractions. Do not worry about backwards compatibility. Break down into tasks and mark complete as you go. Think deeply about each

Registry:

- [x] Multi-credential compatibility — `interfaces` core service: generic namespaces (`llm`, `sql`) bind to any compatible provider per workspace (`interfaces.bind`); chat keeps its provider picker; scripts call `llm.createChatCompletion` / `sql.query` and the binding picks the implementation.
- [x] Infrastructure APIs — Snowflake, Databricks, Postgres as handwritten UTDK provider modules on the shared `@utdk/sql` contract (never gateway-native adapters); secrets ride `bearer_token` credentials, connection config rides interface binding options.

Patchwork

- [x] Expressive viz runtimes — two tiers in `@aprovan/registry-ui/renderers`, rendered wherever run results appear (playground, workflows panel, chat):
  - `{ chart }` — dependency-free SVG bar/line
  - `{ plot }` — grammar-of-graphics (Observable Plot: legends, scales, facets), validated with a live AprovanLabs commits-by-repo graph from GitHub data
- [x] Renderer registry — `registerRenderer`/`resolveRenderer` (VS-Code-style file/data → renderer): workflow scripts → TailorFlow, `.json` → collapsible tree, sql results → tables, chart/plot specs → figures; extensible by hosts.

WASM sandboxing

- [x] Workflow scripts execute in QuickJS-WASM (debug-asyncify build — release builds are miscompiled; see memory), replacing escapable `node:vm`. Fresh instance per run, custom suspension-safe job pump, host-side deadline racing.
- [ ] (Later) WasmTime-class multi-language runtimes on Lambda — unblocked by the sandbox abstraction but not started.

Data sync

- [x] `sync` core service — AirByte-style source→transform→sink: any tool call as source (sql results auto-normalize to records), optional WASM-sandboxed transform script, sink to a workspace path (json/jsonl/csv) or another tool; `schedule` rides a companion cron workflow.

Security

- [x] Audit run (earlier session); DirectExecutor isolation finding resolved by the WASM sandbox; credential envelope encryption via KMS (`credentialCipher.ts`); app sessions get per-(app,user) data partitioning, tool allow-lists, rps/burst + durable daily budgets.

Sandboxes

- [x] `utdk/sandbox` shared contract — `@utdk/sandbox` (driver surface, hash manifests, the npm-package image system) with `local`, `sprites` and `cloudflare-sandbox` provider modules on it; `sandbox` joins `llm`/`sql` as a bound interface.
- [x] `sandboxes` core service — mounts workspace prefixes into a sandbox, diffs two `{path → sha256}` manifests to find changes, and routes commits to a draft chat's overlay, through a `readwrite` mount, or to the live tree plus a VCS commit. Path grants bound what may be mounted.
- [x] Machine executor — `@aprovan/sandbox-host` (first-party, *not* in the vendor catalogue) plus `aprovan sandbox host register|run`; the gateway relay (`/sandbox-hosts/:ws/:host`) is the rendezvous for a machine that cannot be dialed, with separate enqueue and lease principals.
- [x] Scheduled runs — `sandboxes.schedule` queues work keyed by image; a host advertises the images it verified and *claims* rather than being assigned, so a Node run is never offered to a box without Node. Claimed runs execute a workflow in the sandbox and commit into a draft chat.
- [x] Vendor contracts verified — `fly/sprites` rewritten against the published API schema (name-addressed, query-param exec with binary framing, no expose call); `cloudflare/sandbox` corrected to `persist: false` (eviction destroys the filesystem). Neither vendor returns content hashes, so manifests are hashed in-container via `sha256sum`.
- [ ] (Later) Sandboxes native surface in chat (spec'd in docs/sandboxes.md), streaming exec output as telemetry, a Deno Deploy provider, a Sprites WebSocket exec path.
