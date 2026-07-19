# The Aprovan platform: how the pieces fit

Last updated: 2026-07-19

Aprovan is three repos with sharp ownership boundaries, one shared identity, and
one API surface. This document is the map: what each repo owns, the primitives
everything is built on, and how workflows tie chat, the registry, and the
gateway into one system.

## The one-paragraph version

Everything a user does happens inside a **workspace** — the tenancy, credential,
file, and permission boundary. The **gateway** (this repo) is the single API in
front of a workspace: every tool call, LLM call, file read, and workflow run
goes through it and is attributed, credentialed, and traced there. **Patchwork
chat** and the **registry web app** are two views over the same workspace, built
from the same published UI packages, deployed under one domain
(`aprovan.com/chat`, `aprovan.com/registry`) behind one CloudFront distribution
whose static shell is owned by **core**.

## Repo ownership

| Repo | Owns | Publishes |
| --- | --- | --- |
| **core** | Identity (Cognito), the aprovan.com CloudFront + shared web bucket, SSM config contract (`/aprovan/<env>/env`, `/aprovan/<env>/web/*`), design tokens and the app shell | `@aprovan/ui` (tokens, Button/Card primitives, `auth` OIDC client, `gateway` session client, `shell` — AppHeader / SessionArea / WorkspaceSwitcher), `@aprovan/cdk`, `@aprovan/node` |
| **registry** | The gateway (credentials, permissions, tool proxy, LLM aliases, core services, **workflows**), the UTDK provider catalog, the registry web app, the tailor visualizer | `@aprovan/registry-ui` (script editor, dependency panel, **WorkflowsPanel**, **TailorFlow**), `@utdk/*` provider modules |
| **patchwork** | The chat product: widget compiler + images, editor components, the chat web client | `@aprovan/patchwork-compiler`, `@aprovan/patchwork-editor`, `@aprovan/patchwork-image-*` |
| **aprovan.com** | The landing page ("Building what's next") — a static Vite site on `@aprovan/ui` | nothing (deploys static assets) |

Rules of thumb:

- **A primitive goes in core** when every surface needs it and it has no domain
  logic (auth, session, header, tokens).
- **It goes in the registry** when it's about tools, credentials, or execution
  (the gateway is the only process that ever touches a secret).
- **It goes in patchwork** when it's about rendering and editing generated
  software (widgets, images, the compiler).
- Cross-repo consumption is **only through published npm packages** — the
  registry must build standalone from a fresh clone with no sibling checkouts.

## The primitives

### Workspace

The unit of tenancy. Everything below is keyed by `workspaceId`, resolved from
the caller's Cognito token by the gateway's `requireAuth` → `principal`.
Credentials, files, events, workflows, permissions, and audit records never
cross a workspace boundary.

### The tool namespace (`POST /tools/:namespace/:procedure`)

The single dispatch surface. A namespace is either:

- a **core service** — first-party, always available, no credential:
  `vfs`, `keyvalue`, `events`, `registry` (catalog metadata), `workflows`;
- a **UTDK provider** — available once a credential exists in the workspace
  (`github`, `linear`, `figma`, `posthog`, …), executed in the isolate with
  credentials injected server-side;
- an **LLM chat-provider alias** (`openai`, `anthropic`, `gemini`,
  `synthetic.new`) — resolves to an OpenAI-compatible module with the alias's
  base URL; exposes `createChatCompletion` / `listModels`.

`GET /tools` is discovery: core services always, providers when credentialed,
LLM aliases when credentialed. Chat's system prompt, the services menu, widget
SDK namespaces, and workflow script globals are all projections of this one
list. **If you add a capability, add it as a namespace** — every surface picks
it up for free.

### The three runtimes, one contract

The same script/SDK call (`github.repos.get({...})`) runs in three places, and
they intentionally share the call convention and dispatch path:

1. **Widget iframe** (patchwork) — the compiler mounts widgets in sandboxed
   iframes; namespace calls cross the iframe bridge and ride the tools proxy.
2. **Browser sandbox** (registry playground) — scripts run in an iframe
   sandbox; calls cross postMessage to the page, then the tools proxy.
3. **Gateway vm runner** (workflows) — scripts run server-side in a `node:vm`
   context; calls dispatch in-process through `invokeTool` (same credential
   resolution, same isolate execution as the HTTP route).

A script written in the playground registers unchanged as a workflow; a widget
prototype's calls behave identically when moved into a script.

## Workflows

A **workflow = a workspace script + its triggers**. The registration
(`.services/workflows/<name>.json` on the workspace FS) points at a script path
(e.g. `workflows/daily-report.js`); the script itself is an ordinary workspace
file — edit it in chat or the playground and the next run picks it up.

```
workflows.register({
  name: "daily-report",
  script_path: "workflows/daily-report.js",
  triggers: {
    cron: "0 13 * * 1-5",          // 5-field UTC
    webhook: true,                  // POST /hooks/<ws>/<name> + X-Hook-Token
    events: ["form.submitted"],     // run when these channels emit
  },
})
```

Scripts are plain async JavaScript. Globals: every discovered namespace
(`github.…`, `events.emit`, `keyvalue.get`, even `synthetic.new.createChatCompletion`),
`console.*` (captured), and `input` (the trigger payload — webhook body, event
`{channel, payload}`, cron `{firedAt}`, or manual args). A trailing `return`
becomes the run's result.

### Triggers

- **Manual** — `workflows.run` from chat, the panel, or any client.
- **Webhook** — `POST /hooks/:workspaceId/:name`, authenticated by the
  per-workflow `hookToken` minted at registration (header `X-Hook-Token` or
  `?token=`). Mounted before Cognito auth; external systems can call it.
- **Cron** — a minute tick (`POST /hooks/cron/tick`, guarded by
  `CRON_TICK_SECRET`) matches each registration's expression against the
  current UTC minute. Long-lived gateways self-tick; on Lambda, point an
  EventBridge Scheduler rule at the tick route. A `_system` cron index lists
  workspaces with cron registrations so the tick doesn't scan the world.
- **Events** — `events.emit` fires subscribed workflows. Workflow-context
  calls carry `ServiceContext.workflowDepth`, and cascades stop past depth 2,
  so emit→run→emit chains are useful but can't loop.

### Tracing

Every run writes a **run record** (`.services/workflows/<name>/runs/<id>.json`):
status, trigger, input, result, captured logs, and **one span per tool call**
(namespace, procedure, start, duration, ok/error). `workflows.trace` returns
the whole record; the shared WorkflowsPanel renders it (span table + logs) in
both chat and the registry. Gateway-level OTel spans still cover the HTTP
surface; run records are the user-facing trace.

### Surfaces

- **Chat**: the model sees `workflows.*` in its tool list, so "register a
  workflow that posts a summary every morning" is a normal tool call. The
  header's workflows menu opens the shared panel; workflow scripts
  (`workflows/*.js`) preview as a **TailorFlow** execution graph — the chat's
  renderer for workflow scripts the way Markdown files get the Markdown
  renderer.
- **Registry**: `/workflows` page hosts the same panel; the playground is the
  natural place to develop the script before registering it.
- **API**: everything above is `POST /tools/workflows/:op` — no bespoke
  endpoints.

## Shared UI

- `@aprovan/ui/shell` — **AppHeader** (brand + app-family nav + session slot)
  is the one header. aprovan.com, chat, and the registry all render it; the
  registry keeps it inside its own `RegistryHeader` island so the app still
  builds standalone.
- `@aprovan/registry-ui` — **WorkflowsPanel** (workflow management + traces)
  and **TailorFlow** (script → execution-flow graph) are consumed by both the
  registry and chat. Panel transport is a single `invoke(operation, args)`
  prop, so each host wires its own authenticated fetch.

## Deployment

One CloudFront distribution (core `WebStack`), one bucket, three prefixes:

| Path | Source repo | Deploy |
| --- | --- | --- |
| `/` (+ `/privacy-policy`, `/auth/callback`) | aprovan.com | `scripts/deploy-web.sh` (bucket root, protects sibling prefixes — AWS S3 filter semantics: last matching filter wins, so protective excludes come after includes) |
| `/chat/*` | patchwork | `scripts/deploy-web.sh` |
| `/registry/*` | registry | `scripts/deploy-web.sh` |
| `/api/*`, `/.well-known/*` | registry gateway (Lambda) | `infra/ && make deploy` |

All deploy scripts resolve the bucket/distribution from SSM
(`/aprovan/<env>/web/*`) — no hardcoded ids.

## Apps: published bundles

A workspace can **publish apps** — bundles other authenticated users consume
without being workspace members. The owning workspace is the app's "account":
its credentials execute, its FS stores the data, its members administer.

```
apps.publish({
  name: "liift4",
  title: "LIIFT4 Tracker",
  widget_path: "apps/liift4/widget.tsx",   // patchwork widget source in the VFS
  workflows: ["some-endpoint"],            // registered workflows the app exposes
  allowed_tools: ["keyvalue.*"],           // deny-by-default tool allow-list
  roles: { admins: [subs], access: "any"|"listed", users: [subs] },
  rate_limit: { rps: 10, burst: 30 },      // per app user
})
```

The manifest lives at `.services/apps/<name>.json`. Public surface
(`routes/apps.ts`, token auth only — no membership):

- `GET  /apps/:ws/:name` — manifest + the caller's role
- `GET  /apps/:ws/:name/widget` — HTML shell that compiles the widget
  in-browser (patchwork compiler from esm.sh) and proxies its namespace calls
  back to the app tools endpoint with the viewer's token (same-origin under
  aprovan.com, so the shared auth token just works)
- `POST /apps/:ws/:name/tools/:namespace/:procedure` — allow-list-gated,
  per-user rate-limited tool dispatch
- `POST /apps/:ws/:name/workflows/:name/run` — run a bundled workflow

**Per-user data**: app sessions carry `ServiceContext.appScope`, and data
services partition on it — a keyvalue key `k` physically lives at
`app:<app>:<userSub>:k`, so every app user gets a private partition (their
workout log follows them across devices) and the owner workspace's own keys
stay untouched. Workflows run through an app inherit the same scope.

The LIIFT4 Tracker (`apps/gateway/examples/liift4-widget.tsx`) is the
reference app: a full patchwork widget whose only backend is `keyvalue.*`
through the app surface.

### Still ahead

- **Credential grants** — allow-listed sharing of specific provider
  credentials from one workspace to another (per-provider `credential_grants`
  consulted by `resolveRecordForProvider`), for apps that need their own
  workspace but borrowed secrets.
- App discovery/directory UI, admin cross-partition tooling, and queryable
  (Dynamo-style) filters on the keyvalue partitions.

Design constraint to preserve: **capability = namespace, tenancy = workspace
(partitioned per app user under `appScope`), transport = tools proxy.**
Anything that respects those three shows up in every surface without new
integration code.
