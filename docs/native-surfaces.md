# Native surfaces

How the workspace's native services get first-class UI in the chat app
without crowding it. Companion to `platform.md` ("capability = namespace")
and `telemetry-and-agents.md`.

## The problem

The platform keeps growing native services — keyvalue, agents, webhooks,
sync, telemetry, events — and each one deserves inspection and configuration
UI: a key-value browser, an agent config window with executions, a webhook
page with inbound URLs and delivery stats, a sync page with lineage and
runs. Today only a few have surfaces (chat itself, the file tree, the apps
explorer, the editor's Logs panel, the notifications drawer), each wired
ad-hoc. Adding the rest the same way would either crowd the chrome (a
button per service) or bury them (nothing discoverable).

## The principle: namespace = app surface

The platform rule is *capability = namespace* — every capability is a tool
namespace, and every UI is a projection of the tool list. Extend it one
step: **every native namespace may present itself as a built-in app.** The
same explorer that lists user apps lists the native ones; selecting either
opens a pane in the same content-tab system files use. Nothing new in the
header, no second navigation model — the sidebar's Apps section becomes the
single entry point for "things that aren't files".

This is the shape mature platforms converge on:

- **VS Code** — one activity surface (viewlets) that extensions and
  built-ins share; editors are tabs regardless of what they show.
- **Supabase Studio / Firebase console** — a product-area nav (Database,
  Auth, Functions, Logs) where every area is the same page chrome around a
  different inspector.
- **Datadog / Grafana** — everything is a view over a queryable service;
  the nav sells the query, not the widget.

The common lesson: *one* list of surfaces, *one* pane chrome, panels as
plugins.

## Information architecture

```
Sidebar
├── FILES            (workspace tree — unchanged)
└── APPS             (the entry point)
    ├── <apps & their workflows>   (Personal, published — unchanged rows)
    └── Workspace                  (native surfaces group)
        ├── Data          → keyvalue browser
        ├── Agents        → profiles + grants + executions
        ├── Webhooks      → inbound URLs, delivery stats, triggered workflows
        ├── Notifications → the full feed, including seen
        ├── Sessions      → chat sessions as branches: staged diffs, merges
        ├── Interfaces    → bindings + named instances (llm/sql/sandbox)
        ├── Sync          → source→transform→sink lineage + runs
        ├── Sandboxes     → execution environments and their mounts
        └── Activity      → workspace telemetry (traces, filters)
```

- Selecting a **native surface** opens a content tab (`native:<id>`) in the
  same tab strip as files. Tabs persist/restore like file tabs.
- Selecting an **app** opens an app pane (`app:<name>`) — a tab bar of
  contextual views: the app's own UI first, then the native surfaces that
  declare app-scoped variants (its workflows + runs, its telemetry stream,
  its data partition description). The app inspector *is* the same panel
  components, narrowed by an `AppScope`.
- The chat dock, notifications bell, and editor are untouched. Nothing is
  added to the header.

Crowding control: the Workspace group is one collapsed section with five
rows; every viewer lives inside a pane the user explicitly opened; panes
share one chrome (title, icon, refresh, description tooltip) so the cost of
adding surface #7 is a registry entry, not a UX negotiation.

## The abstraction: one registry

`client/web/src/lib/native-surfaces.tsx`:

```tsx
export interface AppScope { name: string; title?: string }

export interface NativeSurfaceDef {
  id: string;                       // "keyvalue" | "agents" | "webhooks" | "sync" | "telemetry"
  title: string;                    // "Data", "Agents", …
  icon: LucideIcon;
  description: string;              // one line, shown in the row tooltip + pane header
  /** Pane body. `scope` narrows to one app (the app inspector tabs). */
  Panel: React.ComponentType<{ scope?: AppScope }>;
  /** Should this surface appear as a tab on an app's pane? */
  appTab?: boolean;
}

export const NATIVE_SURFACES: NativeSurfaceDef[] = [ … ];
```

Rules that keep it clean:

1. **Panels are self-contained.** A panel fetches through the existing
   namespace transports (`invokeNamespaceTool(ns)(op, args)`), owns its own
   loading/error/empty states, and never reaches into ChatPage state. The
   pane shell provides chrome; the registry provides identity.
2. **The tab model stays dumb.** A content tab is `{ kind: "file", path }`
   or `{ kind: "native", surface }` or `{ kind: "app", name }` — the pane
   body is a lookup, not a switch statement scattered through ChatPage.
3. **App scoping is a prop, not a fork.** The same `AgentsPanel` renders
   workspace-wide or scoped; a surface that can't scope just omits
   `appTab`.
4. **Server truth only.** Panels render what the services return —
   `webhooks.list` already carries delivery stats, `sync.list` carries
   lastRun, `agents.runs` carries executions. No client-side shadow state.

## Surface inventory (v1)

| Surface | Namespace ops | Content |
| --- | --- | --- |
| Data | `keyvalue.list/get/set/delete` | prefix query, key list, JSON viewer/editor, delete; workspace scope (app partitions are described, not browsed — they belong to app users) |
| Agents | `agents.list/create/update/delete/runs` | profile cards, create/edit form with a grants editor (tool patterns + path prefixes with ro/rw), executions list with status/duration and a trace link |
| Webhooks | `webhooks.list/get/remove` | registration rows: inbound URL + token copy, HMAC state, delivery count/last event/last error, triggered workflows, remove |
| Sync | `sync.list/run/delete` | lineage rows (source tool → transform script → sink), schedule, last-run status/count, run-now |
| Activity | `telemetry.traces/query` | recent traces with status/source filters, expandable to their events (message + stack) |
| Notifications | `notifications.list/seen` | the whole feed including seen (the bell drawer is the *interrupt*, this is the *record*), filtered by category and — app-scoped — by the server-stamped emitting app |
| Sessions | `sessions.list/get/sync/close` | PR-style log: mode, status, base commit, message count, expandable staged diff, and the actions that settle a session. `delete` is deliberately absent from the list view |
| Interfaces | `interfaces.list/bind/unbind` | one card per interface with what it resolves to, an inline provider + credential picker, and an "Add instance" flow for named instances (`sql:analytics`). See [interfaces.md](./interfaces.md) |
| Sandboxes | `sandboxes.*` | execution environments, their VFS mounts and run history |

`agents` and `telemetry` are native app namespaces (read-only for apps in
agents' case: `get/list/runs` — a grant is something a member gives, not
something an app mints). Workflow runs are stamped with the agent that ran
them, which is what feeds the executions view.

## Extension path

- A new native service ships its panel by adding a `NativeSurfaceDef` — the
  panel's *identity* (label, blurb, icon slug) now also comes from the
  service's own `meta` block server-side, published by
  `GET /tools/namespaces`, so the chat services menu classifies it correctly
  without a client-side edit. Events history is the obvious next entry.
- Published apps could eventually declare *their own* inspector tabs
  (manifest-declared widget paths rendered in the app pane) — the registry
  shape already accommodates it.
- Deep links: tab state serializes with the existing tab persistence, so
  `?pane=native:agents` URLs fall out of the same mechanism when needed.
