# Apps and Workflows — the domain

_2026-07-24. Supersedes the "Apps: published folders" and "Workflows" sections
of [platform.md](./platform.md) as the normative model; platform.md keeps the
repo/deployment map._

## The naming decision

Three nouns, and only three:

| Noun | What it is | Where it lives |
| --- | --- | --- |
| **App** | A bundle: pages + workflows + an allow-list + a data scope + auth. The unit of deployment, of ownership, and of the auth boundary. | `.services/apps/<name>.json` |
| **Workflow** | One published capability: a script with an input, an output, and zero or more triggers. The unit of execution and of versioning. | `.services/workflows/<name>.json` + a workspace script |
| **Run** | One execution of a workflow: status, input, result, logs, spans, trace id. | `.services/workflows/<name>/runs/<id>.json` |

**Workflow** wins over "tool", "operation", and "function" — not because it's
the prettiest word, but because it's the only one that carries the *triggered*
sense. A function is called; a workflow is called **or** fired by cron, a
webhook, or an event. Renaming to `functions` would cost every namespace,
every panel, and every doc, and would lose that.

The insight the naming shouldn't obscure: **at the call site a workflow is
indistinguishable from a tool.** That is the design rule.

> **capability = namespace.** A UTDK provider procedure, a core service
> procedure, and a workflow are the same thing seen from a caller:
> `POST /tools/<namespace>/<procedure>`. Triggers are just *other edges into
> the same procedure*.

So "workflows as dynamic UTDK SDKs" is literal, not a metaphor: an app named
`liift4` exposing a workflow `weekly-summary` is callable as
`liift4.weeklySummary(input)` from a widget, from another workflow, and from
`curl` — the same three runtimes, the same dispatch path, the same trace.

## The model

```
App  ── pages ────────► static/compiled UI under the app's published prefixes
     ── workflows ────► namespace procedures  (app.<workflow>)
     ── allowedTools ─► what an app session may call (deny by default)
     ── dataScope ────► where an app user's data physically lands
     ── roles ────────► who may open it and who administers it
     ── release ──────► the immutable version pin the live app serves
```

### Workflows are the app's exported surface

An app's `workflows: []` is its **export list** — the WASI-world analogue. A
workflow not listed by any app is workspace-internal (chat, cron, the panel can
run it; no app user can). Listing it publishes it under the app's namespace and
subjects it to the app's auth, rate limit, and data scope.

Each workflow declares an optional JSON-Schema `input` and `output`. Those
schemas are what makes the generated SDK typed; they are also what the run form
in the panel renders. Undeclared = `unknown`, and the call still works.

### Three ways data is reached — and only three

This is the whitelisting story, stated once so both UIs can render it verbatim.

1. **Native, auto-partitioned** — the allow-listed first-party namespaces whose
   storage is automatically partitioned per (app, app-user) and rate-limited.
   No credential, no workspace membership. This is the allow-list:

   ```ts
   export const NATIVE_APP_NAMESPACES = ["vfs", "keyvalue", "events"] as const;
   ```

   A `keyvalue` key `k` for user `u` in app `a` physically lives at
   `<a.paths[0]>/data/<u>/k`. Nothing else in the workspace is reachable.

2. **Workspace-credentialed** — a provider namespace (`github`, `linear`, …)
   executes with the *owning workspace's* credential. Only reachable when the
   caller is a member of that workspace, or through a workflow the app
   explicitly exports (the workflow, not the caller, holds the credential).
   Never directly from an app session's tool proxy.

3. **Exported workflows** — everything else. If an app needs a provider, it
   goes through a workflow: the BFF boundary, allow-listed by name, traced,
   rate-limited, and the only place a secret is ever near the request.

`allowedTools` may therefore only contain entries from (1) and the app's own
workflow namespace (`app.*` — `workflow.*` is accepted as a synonym). A publish
that lists a provider namespace directly is rejected with a message pointing at
(3), and the app tool proxy refuses non-native namespaces a second time at call
time.

The **export list is the grant** for workflows: a workflow in `workflows: []`
is callable as `app.<workflow>`. Listing `app.<workflow>` entries in
`allowedTools` is optional and *narrows* — once any `app.*`-namespace entry is
present, only the named workflows are callable. `allowedTools` never has to
repeat the export list.

### `dataScope` — owner-hosted vs self-hosted

Today every app is *owner-hosted*: the publishing workspace's FS stores every
user's partition, like a deployed SaaS. The second mode makes an app a template:

| `dataScope` | Where user data lives | Whose credentials execute | Analogy |
| --- | --- | --- | --- |
| `"owner"` (default) | publisher's workspace, `<dir>/data/<userSub>` | publisher's | a hosted service |
| `"workspace"` | the **caller's own** workspace, `<installPrefix>/data` | the caller's | a self-deployed app |

`"workspace"` apps carry no publisher liability and no publisher credentials:
the app is code, the user brings the workspace. An install record
(`.services/apps/installed/<owner>.<name>.json` in the *caller's* workspace)
pins the release the user is running and holds their prefix
(`apps.install({ owner, name, prefix? })`, default prefix `apps/<name>`).

Three details the gateway settles:

- A workspace-scoped app **without** an install record falls back to
  owner-hosted behaviour, so a template is usable before it is installed.
- An installed session's data has no per-user sub-partition — the workspace
  *is* the boundary, so a key `k` lands at `<prefix>/data/k`.
- The app's code is still read from the publisher's workspace; only execution,
  storage, credentials, and run records move to the caller's. Rate limits and
  the daily budget stay the publisher's policy, metered in their workspace.

### Versioning and releases

Files are already content-versioned by the workspace FS. Releases turn that
into a deployable unit:

```
apps.release({ name, channel: "live"|"preview"|<custom>, notes })
   → snapshot { entry hash, each workflow's script hash, manifest hash }
apps.channels({ name })          → what each channel points at
apps.promote({ name, from, to }) → point a channel at another release
apps.rollback({ name, channel }) → previous release on that channel
```

The live page serves `channel=live`; `?channel=preview` serves the preview pin
to anyone with the app's admin role (enforced on `__project__`, static files,
and the SDK endpoints — the page shell itself carries no token, so it only
forwards the requested channel). Because a release is a set of content hashes
over files that already exist, a release is free to create and instant to roll
back. Telemetry-driven auto-rollback later reads the same channel pointer.

Two implementation notes worth knowing before relying on a pin:

- What a pin *serves* today is the **entrypoint** at its snapshot hash; the
  app's other files (extra prefixes, library code) are served latest, and the
  recorded workflow script hashes are provenance, not execution pins — a run
  always executes the current script. Pinning those too is a read-by-hash away
  in the same place (`readPinned`, `runWorkflow`) when we want it.
- With no channel pointer at all, every surface behaves exactly as before:
  latest content, no release machinery in the path.

### Tracing across instances

A run record already holds one span per tool call. Cascades (`events.emit` →
workflow, workflow → workflow, app call → workflow) propagate a `traceId` and
`parentRunId` on `ServiceContext`, so a run record links to its parent and the
panel can render the whole tree, not just one run. Depth is still capped at 2 —
and the cap now also stops workflow→workflow recursion, not just emit chains.

`workflows.tree({ trace_id })` returns the linked runs as **node summaries**
(id, workflow, parent, trigger, status, timing, log/span counts) plus the
trace's root ids. Logs and spans stay behind `workflows.trace` per node: a
cascade can fan out, and a tree view should not carry every span with it. The
index lives at `.services/workflows/_traces/<traceId>.json`.

## The app SDK — what a widget imports

The compiler injects namespaces as globals today (`window.vfs`). That is
untyped and invisible to an editor. The contract becomes **importable modules
with generated types**, which is what the user's sketch asks for and what the
UTDK packages already do for providers:

```tsx
import { useState } from "react";
import vfs from "vfs";          // native, auto-partitioned, rate-limited
import keyvalue from "keyvalue";
import app from "app";          // this app's exported workflows, typed

export function App() {
  const [result, setResult] = useState<string>();
  const run = async () => {
    const out = await app.weeklySummary({ weeks: 4 });  // typed in + out
    setResult(out.headline);
  };
  return <div><button onClick={run}>Run</button><div>{result}</div></div>;
}
```

Why not the alternatives:

- **`fetch`** — loses types and hides the capability from static analysis; we
  can't compute an app's real blast radius from free-form URLs.
- **GraphQL** — a second schema language and a resolver layer for something
  that is already RPC over a namespace.
- **tRPC** — the right *shape*, but it needs a shared TS build between client
  and server; our workflows are workspace scripts, not a compiled server.
- **WASI worlds** — the right *idea*, and this is that idea: the manifest is
  the world, `apps.sdk` is the generated bindings.

Implementation: `GET /apps/:ws/:name/__sdk__.js` (runtime shim over the
existing proxy) and `__sdk__.d.ts` (generated from the manifest + each
workflow's declared schemas), both pinned to the requested channel and
visibility-gated exactly like `__project__`. `apps.sdk({ name, channel? })`
returns the same two strings for tooling that isn't fetching over HTTP.

The shim is **one module** exporting one const per namespace plus a default
object of all of them (`export const vfs …; export default { vfs, keyvalue,
events, app }`), so the compiler can resolve `import vfs from "vfs"` to that
module's `vfs` export — or hand the default object to a host that wants
everything at once. Property access builds a dotted procedure path and calling
it POSTs to `window.__APP_CONFIG__.appBase + "/tools/<ns>/<path>"` with an
`{ args }` body: the same convention the workflow sandbox and the widget bridge
use. Globals keep working — the import is sugar over the same proxy.

## The gateway surface, as implemented

```
apps.publish {name, title?, description?, entry|dir?, paths?, visibility?,
              workflows?, allowed_tools, data_scope?, roles?, rate_limit?}
apps.list | apps.summary | apps.get {name} | apps.capabilities {name}
apps.sdk {name, channel?} → {js, dts}
apps.release {name, channel="live", notes?} | apps.releases {name}
apps.channels {name} | apps.promote {name, from, to} | apps.rollback {name, channel?}
apps.install {owner, name, prefix?} | apps.uninstall {owner, name} | apps.installed
apps.share/unshare/shares | apps.remove | apps.versions/version/restore

workflows.register {name, script_path, description?, triggers?, bindings?,
                    input?, output?}
workflows.list | get | run | runs | trace | tree {trace_id}
workflows.remove | versions | version | restore

POST /api/gateway/apps/:ws/:name/tools/<native>/<procedure>
POST /api/gateway/apps/:ws/:name/tools/app/<workflow>        ← workflow as tool
POST /api/gateway/apps/:ws/:name/workflows/<workflow>/run    ← same dispatch
GET  /apps/:ws/:name/__project__ | __sdk__.js | __sdk__.d.ts  [?channel=]
```

`apps.list` composes the whole directory in one call — path binding,
visibility, `dataScope`, `channels`, allow-list, roles, effective limits, and
each exported workflow with its triggers, schemas, webhook path, and last run.
The live URL is `url`; the API base is `apiBase`.

## Surfaces

Apps is a **top-level destination**, alongside Chat and Registry:

- `aprovan.com/registry/apps` — the directory: your apps, apps shared with you,
  install/open, and the app detail (pages, workflows, access, data, releases).
- `aprovan.com/chat` — the sidebar's second explorer is **Apps**, grouped
  app → workflows, with the workspace's unbundled workflows in a final
  "Workspace" group. No header overlay button; the header carries an `Apps`
  nav link to the registry directory. Depth, not a flat list, is what makes it
  scale past a handful of entries.
- Both render the same `AppsPanel` from `@aprovan/registry-ui`, transport
  injected — the WorkflowsPanel precedent.
