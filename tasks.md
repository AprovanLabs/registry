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
