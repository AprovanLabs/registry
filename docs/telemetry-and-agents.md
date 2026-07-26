# Telemetry & agent configuration

Why widgets and workflows are debuggable, how agents see failures, and how
agents are granted capabilities. Companion to `apps-and-workflows.md` and
`vcs-and-sessions.md`.

## The problem

Three gaps, one root cause — the platform executes user code (widgets in the
browser, workflows in QuickJS) and calls services on its behalf, but keeps no
queryable record of what happened:

1. **Debugging is blind.** A widget render failure or a UTDK call failure
   surfaces as a broken card. The evidence (console output, the failing
   service call, the error) evaporates in the browser console or the Lambda
   log — neither the user nor the chat agent can see it.
2. **Agents can't self-heal.** "Auto-handle failures in workflows or apps"
   requires the agent to *read* the failure: which run, which call, what
   error, what the script logged.
3. **Telemetry exists but goes nowhere.** `@utdk/common/telemetry` wraps
   provider calls in OTel spans, but the exporter defaults to noop; the audit
   store records per-call rows for compliance, not debugging (no trace
   structure, no console output, no client-side events).

## Design: workspace-scoped telemetry as a native service

One new core service, `telemetry`, that is simultaneously:

- the **sink** for every instrumented layer (server tool dispatch, workflow
  runs, sandbox console, widget runtime console/errors/service calls),
- the **query surface** for humans (editor Logs panel) and agents (chat
  namespace + MCP tools),
- a **native app namespace** — apps and widgets can emit and read their own
  telemetry with the same single-object call convention as everything else.

### Event model (OTel-shaped, not OTel-hosted)

Events follow OpenTelemetry semantics — spans with trace/span ids, status,
attributes; log records attached to a trace — but persist in the workspace
record store (scope `telemetry`), not an OTLP backend. Rationale: the record
store already has Dynamo/SQLite parity, TTL, and tenancy; agents need a
*queryable* store, not a wire protocol. A real OTLP exporter can be layered
on later without changing producers (the shapes translate 1:1).

```jsonc
// span
{
  "kind": "span",
  "traceId": "…", "spanId": "…", "parentSpanId": "…",
  "name": "tools keyvalue.set",          // or "workflow tasks-agent-runner", "widget render"
  "source": {                             // who produced it
    "type": "tool" | "workflow" | "widget" | "app" | "chat",
    "path": "apps/tasks/index.tsx",      // widget/workflow script path when known
    "app": "tasks",                       // when attributed to an app
    "runId": "…", "sessionId": "…"       // workflow run / chat session correlation
  },
  "startedAt": "ISO", "durationMs": 132,
  "status": "ok" | "error",
  "error": { "message": "…", "stack": "…" },   // status=error only
  "attributes": { "namespace": "keyvalue", "procedure": "set", "http.status": 400 }
}

// log (console output, render errors)
{
  "kind": "log",
  "traceId": "…", "spanId": "…",          // optional correlation
  "level": "debug" | "info" | "warn" | "error",
  "source": { … same shape … },
  "at": "ISO",
  "message": "…",                          // stringified console args, joined
  "attributes": { }
}
```

Records: PK `t#<tenant>#s#telemetry`, SK `<traceId>#<seq>`; a per-source
index key (`src#<type>#<path>#<ts>`) written alongside for source-scoped
queries. TTL: 3 days by default (`expiresAt`) — telemetry is debugging
evidence, not an archive; the audit store remains the long-lived record.

### Service surface

- `telemetry.emit { events: TelemetryEvent[] }` — batch write (client
  batches; server layers call the store directly). Client-supplied `source`
  is trusted only for widget/chat events; server-side producers stamp their
  own. Payload caps: 100 events/batch, 8 KB/event, args never recorded —
  attributes carry names, durations, statuses, error text.
- `telemetry.query { traceId?, source?, path?, level?, status?, since?, limit? }`
  — flat event list, newest first.
- `telemetry.traces { source?, path?, status?, since?, limit? }` — trace
  summaries (root span + counts + error presence) for "what failed lately".

`telemetry` joins `NATIVE_APP_NAMESPACES` — an app's widgets get it without a
grant, auto-scoped to the app as source (the proxy stamps `source.app`, so an
app cannot read or forge another app's telemetry stream — same server-stamp
rule as notifications).

### Producers

| Layer | What gets recorded | How |
| --- | --- | --- |
| Tool dispatch (`/tools/:ns/:proc`, app proxy) | one span per call: namespace, procedure, caller, duration, status, error message | in the shared dispatch path, fire-and-forget after responding |
| Workflow runner | root span per run (name, trigger, input keys, duration, status/error) + child spans for each native/provider call made from the sandbox + `console.*` as logs | runner opens the trace; sandbox namespace proxies and a console shim carry `traceId` through |
| Widget runtime (browser) | `console.*`, uncaught render errors (error boundary + window.onerror inside the widget scope), one span per SDK namespace call | runtime wraps the namespace proxies + console per widget instance; batches to `telemetry.emit` every ~2 s / 20 events, tagged `source {type:"widget", path, sessionId}` |
| Chat completions | already job-recorded; jobs gain `traceId` so a failed generation links to its provider spans | job store stamps the id |

The old `withSpan` layer stays for OTLP export when configured; the gateway
additionally passes a recorder so the same spans land in workspace telemetry.

### Consumers

- **Editor Logs panel** — a `Logs` view in the widget editor beside Code and
  Preview: live console lines, render errors, and service calls with status +
  duration for the file being edited (`telemetry.query {path}` + the live
  in-page buffer — local events appear instantly, remote ones on poll).
- **AI edit context** — the edit prompt appends the last N error-level events
  for the file, so "fix it" ships with the evidence.
- **Chat agent** — `telemetry` is a namespace in the chat prompt: the agent
  can query traces for the widget/workflow it just generated and iterate.
- **MCP** — `telemetry_query` / `telemetry_traces` tools on the gateway MCP
  server (`/mcp/:workspaceId`), so external agents (Claude Code etc.) monitor
  and debug the same store.
- **Auto-healing loop** — workflow run failures emit a `warning` notification
  carrying `{runId, traceId}` and a choice that opens chat pre-seeded with
  the trace; agent-assigned tasks (Tasks app pattern) can subscribe the same
  way.

## Agent configuration: profiles + unified grants

Agents today are ad-hoc `{provider, model, prompt}` blobs inside whatever app
invented them (Tasks assignees). They become a first-class native service.

### Agent profiles

`.services/agents/<name>.json`, managed by an `agents` core service
(`agents.create/get/list/update/delete`):

```jsonc
{
  "name": "docs-writer",
  "title": "Docs writer",
  "provider": "synthetic.new",         // LLM provider credential to use
  "model": "…",                         // optional
  "prompt": "You write documentation…", // system prompt
  "grants": {
    "tools": ["keyvalue.*", "vfs.*", "github.repos.*"],
    "paths": [
      { "prefix": "docs/", "access": "rw" },
      { "prefix": "apps/", "access": "ro" }
    ]
  }
}
```

### One grant model for apps and agents

The grant shape `{tools: pattern[], paths: {prefix, access}[]}` is shared:

- **apps** already have `allowed_tools` (tool patterns) — they gain optional
  `paths` with the same semantics.
- **agents** get both from day one.
- matching is the existing `toolAllowed` pattern matcher (exact,
  `ns.*`, `*`); path checks are longest-matching-prefix, deny by default when
  any path grant exists (no grants list = full workspace access, matching
  today's behavior for apps).

Enforcement lives in the two chokepoints that already exist:

1. **Tool dispatch** — agent-attributed calls (workflow runs started by an
   agent, chat turns executed as an agent) resolve the profile and filter
   through its `tools` patterns exactly like the app proxy filters
   `allowed_tools`.
2. **VFS ops** — `vfs.read/write/delete/list` (and the FS routes) check the
   caller's path grants; a denied write is a 403 with the offending prefix
   named, which lands in telemetry like any other failed call.

Execution attribution: workflow runs gain an optional `agent` field; the
runner resolves the profile, injects its prompt/provider/model for LLM calls,
and pins the run's tool proxy + vfs scope to the profile's grants. The Tasks
app's assignee becomes `{type:"agent", agent:"docs-writer"}` (inline
provider/model still allowed for one-offs, with no extra grants — inline
agents inherit the invoking app's surface).

Isolation composes with VCS: an agent run still executes in its own draft
session; grants bound what it *can* touch, the draft bounds what it *does*
touch until a human (or an authorized workflow) applies it.

## Rollout

1. `telemetry` service + store (both backends, TTL, caps) + tests.
2. Server producers: tool dispatch, app proxy, workflow runner + sandbox
   console/proxy trace propagation.
3. Widget runtime capture + editor Logs panel + edit-prompt context.
4. MCP tools + chat prompt + failure notifications carrying traceIds.
5. `agents` service + grants enforcement (dispatch + vfs) + Tasks app
   assignee migration.

No backwards compatibility: old ad-hoc assignee blobs are migrated; audit
stays untouched.
