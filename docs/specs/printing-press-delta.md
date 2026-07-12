# Printing Press Delta: Registry Implementation Plan

> Spec status: **Draft** — 2026-05-29
> Reference: [mvanhorn/cli-printing-press](https://github.com/mvanhorn/cli-printing-press), AprovanLabs/registry

---

## 1. Background

[cli-printing-press](https://github.com/mvanhorn/cli-printing-press) is a generator that creates production-ready CLIs and MCP servers from API specifications. Its design philosophy — "every API has a secret identity" — drives it to find non-obvious, high-value abstractions on top of raw HTTP endpoints.

The Aprovan Registry (`@utdk/*`) is taking a similar approach: generate TypeScript-first SDK clients from OpenAPI specs, expose them as MCP toolkits, and run them through a sandboxed Isolate runtime. The registry adds goals that printing press does not address: a web UI for browsing APIs, common utilities (auth, rate limiting, telemetry, pagination), and a shared API gateway for credential management.

This document describes the **delta** — patterns printing press has proven that the registry should adopt — and a **path forward** to close the gap while respecting the registry's broader architecture goals.

---

## 2. Systems at a Glance

### cli-printing-press (Go)

| Capability | Detail |
|------------|--------|
| Pipeline | 9 phases: preflight → research → scaffold → enrich → regenerate → review → agent-readiness → comparative → ship |
| Output | Cobra CLI + MCP server, generated from a single OpenAPI spec |
| Data layer | SQLite + FTS5, cursor-based pagination, incremental sync per provider |
| Verification | Scorecard (infrastructure + domain), dogfood analysis, proof-of-behavior tests, live smoke tests |
| Agent UX | Typed exit codes (0/2/3/4/5/7), dual output (human table / JSON-when-piped), `--agent` flag |
| Ecosystem absorption | Catalogs competing tools, existing MCP servers, community CLIs before generating |
| Provenance | `.printing-press.json` manifest per generated CLI |
| Catalog | 27 pre-curated APIs (Asana, Discord, GitHub, HubSpot, Stripe, Notion, etc.) |
| Language | Go |

### AprovanLabs/registry (TypeScript)

| Capability | Detail |
|------------|--------|
| Pipeline | `generate` → `load-docs` → `augment-docs` (3 steps, no verification gates) |
| Output | TypeScript SDK client per provider, lazy Proxy pattern |
| Data layer | None; no pagination abstraction |
| Verification | None implemented |
| Agent UX | Not addressed |
| Ecosystem absorption | None; providers added manually |
| Provenance | `generation` counter + `generatedAt` timestamp in `package.json` |
| Catalog | 7 providers: github, openai, datadog, spotify, figma, google/* |
| Language | TypeScript (Node 20+, ESM) |
| Additional goals | Web UI, OAuth/auth abstraction, telemetry, MCP server, Isolate runtime, API gateway |

---

## 3. Delta Analysis

### 3.1 Generation Pipeline Quality Gates

**Gap**: The bundler has no research, enrichment, review, or ship phases.

**Adopt from printing press**:
- **Research phase**: Before generating a provider, catalog existing TypeScript SDKs, npm packages, and MCP servers for the same API. Produce a `research.json` (gap analysis, novelty score 1–10, recommended approach).
- **Enrich phase**: Post-scaffold, create an `overlay.yaml` capturing spec corrections and semantic enrichments (better descriptions, pagination hints, auth hints) without touching the source OpenAPI document.
- **Review phase**: Run a "shipcheck" combining structural lint, TypeScript compilation, and a scorecard. Minimum scorecard: operation coverage, type completeness, auth correctness, README quality.
- **Agent-readiness phase**: Automated check for blockers — missing types, un-stubbed auth flows, operations with no examples.
- **Ship phase**: Tag the generation, emit a `provenance.json` manifest, open a draft PR.

### 3.2 Verification Framework

**Gap**: No quality gates exist; packages are accepted as-is.

**Adopt from printing press**:
- **Two-tier scorecard**: Infrastructure score (TypeScript compiles, exports resolve, no circular deps) and domain score (auth config present, pagination detected, README > 100 chars).
- **Smoke test harness**: Per provider, a lightweight test that calls one read-only endpoint with real credentials (opt-in, guarded by env flag `UTDK_SMOKE_TESTS=1`).
- **Dogfood lint**: Parse the generated index.ts and types.ts; flag dead exports, missing method stubs.

### 3.3 Common Utilities Layer

**Gap**: Each provider is a thin OpenAPI-to-client wrapper; no cross-cutting utilities.

**Registry-specific goal** (not in printing press): build a shared `@utdk/common` package that providers opt into:

| Utility | Implementation note |
|---------|---------------------|
| **Rate limiting** | Token-bucket per provider; configurable via `package.json` `utdk.rateLimit` |
| **Retry logic** | Exponential backoff with jitter; respects `Retry-After` headers |
| **Auth abstraction** | `AuthProvider` interface with implementations: `BearerToken`, `ApiKey`, `OAuth2ClientCredentials`, `OAuth2AuthCode` |
| **Telemetry** | OpenTelemetry-compatible: span per request, `provider`, `operation`, `http.status_code` attributes; configurable exporter (OTLP, console, noop) |
| **Pagination** | `paginate(fn, options)` helper returning `AsyncIterable`; cursor-based and offset-based adapters |

### 3.4 Ecosystem Absorption + Catalog

**Gap**: Providers are added manually; no systematic discovery.

**Adopt from printing press**: Before generating a new provider, run a research pass against:
1. npm registry (`@types/<provider>`, `<provider>-sdk`, `<provider>-client`)
2. Existing MCP server registries (MCP.run, Composio, Smithery)
3. The printing-press library catalog

**Registry-specific**: seed the initial catalog from two sources:
- **Printing press library** (27 CLIs): Asana, DigitalOcean, Discord, ElevenLabs, Front, GitHub, Google Cloud Run, HubSpot, IT Glue, Jira, Kayak, LaunchDarkly, Mercury, OpenRouteService, Petstore, Pipedrive, Plaid, Postman Explore, Product Hunt, Sentry, Stripe, Stytch, Telegram, Twilio, and others.
- **Composio platform** (1,000+ apps): Composio documents toolkits at `docs.composio.dev/toolkits/<name>`. Their tool catalog provides OpenAPI specs and auth metadata for hundreds of APIs. Ingest by:
  1. Scraping the Composio toolkits index.
  2. For each toolkit, fetch the associated OpenAPI or action schema.
  3. Run through the registry bundler pipeline with enrichment.

### 3.5 MCP Server App

**Gap**: Individual providers export as MCP toolkits, but no unified MCP server app exists.

**Requirement**: A `apps/mcp-server` Node.js app that:
- Dynamically loads tools from any registered `@utdk/*` provider on startup or via hot-reload.
- Exposes a single MCP endpoint; callers select providers and tools by name.
- Delegates credential injection to the API gateway layer (see 3.7).
- Supports `UTDK_PROVIDERS=github,slack,stripe` env var for selective loading.

### 3.6 Isolate Runtime + Sandboxed Execution

**Gap**: Planned but not implemented (`packages/fn` is in early proof-of-concept).

**Requirement**:
- Node.js `vm.Module` or Cloudflare Workers–compatible isolate context per tool call.
- Tool code runs in a sandbox; no direct access to host environment variables or filesystem.
- Credentials injected by the gateway layer at call time, not baked into module scope.

### 3.7 API Gateway + Credential Proxy

**Gap**: No gateway; credentials are passed as raw headers by callers.

**Requirement** (new `apps/gateway`):
- Stores provider credentials per workspace/user (encrypted at rest).
- Proxies MCP tool calls: injects credentials, enforces per-tool permission grants.
- Emits telemetry (spans, request logs) centrally.
- Exposes a management REST API for credential CRUD and permission management.

### 3.8 Web UI Enhancements

**Current**: Astro static site (`apps/registry`) with basic provider listing and README display.

**Required additions**:
- **API catalog**: endpoint browser per provider (list operations, show parameters/responses).
- **Credential management UI**: register and revoke API keys / OAuth tokens per provider.
- **Try-it console**: invoke a single endpoint from the browser (proxied through gateway).
- **Admin panel**: manage per-user / per-workspace tool permissions.

### 3.9 Agent-Native Output (CLI surface)

**Gap**: The registry has no CLI surface today; all interaction is via SDK imports.

**Optional near-term addition** (lower priority, but consistent with printing press):
- `@utdk/cli` package: a thin Yargs/Commander CLI wrapping any provider operation.
- Typed exit codes matching printing press conventions.
- `--output json` / `--output table` flags.

---

## 4. Ingestion Strategy: Composio + Additional Sources

### 4.1 Composio

Composio publishes documentation for 1,000+ apps. The ingest pipeline:

```
1. GET https://backend.composio.dev/api/v1/apps  (public catalog endpoint)
2. For each app: resolve OpenAPI spec URL or action schema
3. Normalize to OpenAPI 3.x (some apps use Composio's own action format)
4. Run through bundler: generate → enrich → review
5. Create @utdk/<provider> package
6. Add to registry.json catalog
```

Priority tiers for initial ingestion:
- **Tier 1** (implement first, high demand): Slack, Linear, Notion, Jira, Salesforce, HubSpot, Stripe, Twilio, SendGrid, Airtable, Intercom, Zendesk.
- **Tier 2** (next wave): All 27 printing press catalog entries not already in utdk.
- **Tier 3** (automation): Remaining Composio toolkits via batch pipeline.

### 4.2 Other Sources

| Source | Approach |
|--------|----------|
| **APIs.guru** | ~3,000 OpenAPI specs; auto-ingest top-100 by traffic rank |
| **Smithery MCP registry** | Scrape published MCP servers; extract underlying API specs |
| **OpenAPI Directory (GitHub)** | Fork or submodule; periodic resync |
| **Vendor-published SDKs** | Where OpenAPI is absent, reverse-engineer from TypeScript SDK types |

---

## 5. Implementation Sequence

Phases are designed to be incremental with minimal coupling. Each phase can ship independently.

### Phase 1 — Foundation (parallel)

| Task | Description | Depends on |
|------|-------------|------------|
| P1-A | **Generation pipeline gates**: add research, enrich, review, ship phases to bundler | — |
| P1-B | **`@utdk/common` package**: rate limiting, retry, auth abstraction interfaces | — |
| P1-C | **Verification framework**: scorecard, dogfood lint, smoke test harness | — |

### Phase 2 — Cross-cutting Concerns (parallel after P1-B)

| Task | Description | Depends on |
|------|-------------|------------|
| P2-A | **Telemetry layer**: OpenTelemetry spans per request, configurable exporter | P1-B |
| P2-B | **Pagination utilities**: `paginate()` AsyncIterable helper, cursor + offset adapters | P1-B |
| P2-C | **OAuth2 auth provider**: authorization code + client credentials flows | P1-B |
| P2-D | **Provenance manifest**: emit `provenance.json` on ship; add to package.json | P1-A |

### Phase 3 — Tool Ingestion (after P1-A + P1-C)

| Task | Description | Depends on |
|------|-------------|------------|
| P3-A | **Printing press catalog import**: ingest 27 CLIs from printing press library | P1-A, P1-C |
| P3-B | **Composio Tier 1 ingestion**: Slack, Linear, Notion, Jira, Salesforce, HubSpot, Stripe, Twilio, SendGrid, Airtable, Intercom, Zendesk | P1-A, P1-C |
| P3-C | **Composio batch pipeline**: automated ingestion for remaining Composio apps | P3-B |
| P3-D | **APIs.guru integration**: periodic resync of top-100 specs | P1-A |

### Phase 4 — Runtime (after P1-B, P2-A, P2-B)

| Task | Description | Depends on |
|------|-------------|------------|
| P4-A | **MCP server app** (`apps/mcp-server`): dynamic tool loading, env-controlled provider selection | P1-B, P2-A, P2-B |
| P4-B | **Isolate runtime** (`packages/utdk-isolate`): sandboxed vm.Module execution | P1-B |
| P4-C | **API gateway** (`apps/gateway`): credential storage, permission enforcement, telemetry | P4-A, P4-B, P2-C |

### Phase 5 — Web UI (after P4-C)

| Task | Description | Depends on |
|------|-------------|------------|
| P5-A | **API catalog browser**: endpoint listing with parameters/responses | P3-B |
| P5-B | **Credential management UI**: register/revoke keys and OAuth tokens | P4-C |
| P5-C | **Try-it console**: browser-based tool invocation via gateway | P4-C, P5-B |
| P5-D | **Admin panel**: per-user/workspace permission management | P4-C |

### Phase 6 — CLI surface (optional, after P3-B)

| Task | Description | Depends on |
|------|-------------|------------|
| P6-A | **`@utdk/cli` package**: Yargs CLI wrapper, typed exit codes, `--output json/table` | P3-B |

---

## 6. Key Design Decisions

### 6.1 Keep TypeScript-first, avoid Go dependency
The printing press pipeline is Go; the registry should not take a Go runtime dependency. All pipeline tooling (bundler phases, scorecard, smoke tests) will be implemented as Node.js scripts using the existing Turbo + pnpm monorepo structure.

### 6.2 OpenTelemetry over bespoke logging
Rather than building a custom logger, wire all telemetry through OpenTelemetry. This gives flexibility to export to any backend (Datadog, Honeycomb, Jaeger, console) without code changes.

### 6.3 Auth abstraction at the `@utdk/common` layer, not per-package
Each generated provider package declares its `AuthProvider` type in `package.json` `utdk.auth`. At runtime, `@utdk/common` resolves credentials from environment variables, a credential store, or the gateway proxy — in that order. Provider packages never contain auth logic directly.

### 6.4 Composio as primary ingest source (not the execution layer)
Composio is used for its API catalog and OpenAPI specs, not as a runtime dependency. The registry generates its own `@utdk/*` packages from those specs and executes them independently. This avoids vendor lock-in and keeps the sandboxed execution model intact.

### 6.5 Registry JSON as source of truth for available providers
`packages/utdk/registry.json` is the machine-readable catalog. It should be extended to include: source URL, ingest source (composio/printing-press/manual), last generated date, scorecard score, and available auth methods.

---

## 7. Files This Spec Proposes to Create/Modify

```
registry/
├── docs/specs/printing-press-delta.md   ← this file
├── packages/
│   ├── utdk/
│   │   ├── client.ts                    ← add auth provider injection hook
│   │   ├── registry.json                ← extend schema (source, score, auth methods)
│   │   └── common/                      ← NEW: @utdk/common package
│   │       ├── package.json
│   │       ├── auth.ts                  ← AuthProvider interface + implementations
│   │       ├── rateLimit.ts             ← token-bucket rate limiter
│   │       ├── retry.ts                 ← exponential backoff with jitter
│   │       ├── telemetry.ts             ← OpenTelemetry span wrapper
│   │       └── pagination.ts            ← AsyncIterable paginate() helper
│   └── bundler/
│       └── src/
│           ├── phases/
│           │   ├── research.ts          ← NEW: research phase
│           │   ├── enrich.ts            ← NEW: enrich/overlay phase
│           │   ├── review.ts            ← NEW: review/scorecard phase
│           │   ├── agentReadiness.ts    ← NEW: agent-readiness check
│           │   └── ship.ts              ← NEW: ship/provenance phase
│           └── verification/
│               ├── scorecard.ts         ← NEW: two-tier scorecard
│               ├── dogfood.ts           ← NEW: dead export detection
│               └── smoke.ts             ← NEW: smoke test harness
├── apps/
│   ├── mcp-server/                      ← NEW: unified MCP server app
│   │   ├── package.json
│   │   └── src/index.ts
│   └── gateway/                         ← NEW: API gateway + credential proxy
│       ├── package.json
│       └── src/
│           ├── index.ts
│           ├── credentials.ts
│           └── permissions.ts
└── scripts/
    └── ingest-printing-press.ts         ← NEW: Printing press catalog import
```

---

## 8. Acceptance Criteria Checklist

- [x] Delta documented and path forward described (this document)
- [ ] `@utdk/common` package with auth, rate limiting, retry, telemetry, pagination
- [ ] Bundler enhanced with research, enrich, review, ship phases
- [ ] Verification framework: scorecard, dogfood lint, smoke tests
- [ ] Printing press catalog imported (27 providers as `@utdk/*` packages)
- [ ] Composio Tier 1 imported (12 providers)
- [ ] `apps/mcp-server` dynamically loading tools
- [ ] `apps/gateway` with credential proxy and permission enforcement
- [ ] Web UI: endpoint browser, credential management, try-it console
- [ ] Sequenced Multica tasks created with dependencies
