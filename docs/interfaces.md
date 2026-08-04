# Interfaces and instances

How a capability with several possible implementations is modelled, bound,
and addressed. Companion to `platform.md` ("capability = namespace") and
`native-surfaces.md` ("namespace = app surface").

Last updated: 2026-07-30

## Two kinds of "native"

The platform uses the word for two different things, and keeping them apart
is what makes the rest of this document short.

**A native service** is a workspace noun with exactly one implementation:
`vfs`, `keyvalue`, `events`, `apps`, `workflows`, `sessions`,
`notifications`, `telemetry`, `agents`, `webhooks`, `sync`, `sandboxes`,
`interfaces`, `registry`. Its behaviour *is* the gateway's behaviour. It has
no credential, is always available, and swapping its storage backend
(records → Valkey, FS events → Kafka) is an implementation detail no caller
can observe. Declared in `CORE_SERVICE_NAMES` (src/service-kernel.ts), wired
in `src/services.ts`. Each one declares a `meta` block — label, one-line
blurb, icon slug — which is what `GET /tools/namespaces` publishes so clients
never keep their own list of "which namespaces are ours".

**A native interface** is one tool contract with several implementations:
`llm`, `sql`, `sandbox`, `vcs`, `agent`. Callers write against the contract
(`sql.query({ sql })`); a *binding* picks which vendor executes it. The
contract packages live under `packages/contracts/<name>/` (marked
`utdk.contract` in their manifests), and each contract with committed
implementations carries a `compat.json` at its package root — interface
metadata plus the provider compat list, validated and loaded through
`@utdk/common/compat`. `listInterfaces()` (src/interfaces.ts) is a consumer
of that data, not its home; the `llm` entry alone stays generated from the
chat-provider registry via the `compatSource` indirection.

They compose, and `sandboxes` is the reference example: the raw driver
(create/exec/read/write) is the `sandbox` **interface** — swappable,
credentialed, and ignorant of this workspace — while mounts, sync, and commit
are the `sandboxes` **service**, because they are made of workspace nouns that
no vendor could implement.

### Deciding which a new capability is

Ask what happens when you want a second one.

- If "a second one" is meaningless — there is one workspace filesystem, one
  notification feed — it is a service.
- If a competitor could implement the same operations against their own API,
  it is an interface, and the part that *can't* be implemented by a vendor
  (anything referring to workspace paths, members, grants, or history) belongs
  in a service on top.

## Instances

One binding per interface answers "which LLM does this workspace use" and
nothing else. A workspace with a production database and an analytics
warehouse needs both configured at once; two accounts on one vendor need two
credentials on one provider. Configuration is a **profile** keyed by
`(namespace | path, name?)` — never by a colon path segment:

```
sql                 default profile — what `tools.sql.query` reaches
sql + name=analytics  a second, independently configured profile
sql + name=warehouse  a third
```

A profile is a 4-tuple: **(namespace|path, provider?, credential?, options?)**.
Named profiles travel in the request body (`{ args, profile, options }`) or
via lazy `tools.sql.client("analytics")` — the URL path stays
`/tools/sql/query`. Colon-addressed namespaces (`sql:analytics`) are not
routable, not discoverable, and not stored.

```js
export default async function run() {
  const live = await tools.sql.query({ sql: "select count(*) from orders" });
  await tools.sql.client("analytics").query({
    sql: "insert into snapshots values ($1)",
    params: [live.rows[0].count],
  });
}
```

### Resolution order

`resolveInterfaceForWorkspace(workspaceId, namespace, overrideProvider?)`:

1. **Caller override** — a workflow registration's `bindings`, or a live
   sandbox pinning the host that created it. Wins over everything.
2. **The instance's binding** in `.services/bindings.json`.
3. **Zero-config fallback**, *for the default instance only*: the first
   compatible provider that has a workspace credential.

A named instance has no fallback by design. `sql` meaning "whatever database
is connected" is a convenience; `sql:analytics` silently resolving to
production because nobody bound it would be a data leak wearing a
convenience's clothes — so it is a 404 with the `interfaces.bind` call that
would fix it.

### Credentials

Bindings carry an optional `credentialId`. Without one, the provider's first
credential is used — the historical behaviour, and the right default. With
one, that exact credential is used and a mismatch is an error rather than a
silent fallback: an instance pointing at a credential that was deleted or
re-provisioned must fail loudly, not quietly execute against a different
account.

The storage layer always allowed several credentials per provider (Dynamo
keys them `CRED#<provider>#<credId>`); until `resolveRecordById` existed,
every resolution path took the first match, so the second Postgres connection
string a workspace saved was write-only — stored, listed, and unreachable.

### The bindings file

`.services/bindings.json`, on the workspace FS like every other service's
state:

```json
{
  "bindings": {
    "llm":           { "interface": "llm", "provider": "anthropic", "options": { "model": "claude-sonnet-5" } },
    "sql":           { "interface": "sql", "provider": "postgres", "credentialId": "b535…", "options": { "database": "app" } },
    "sql:analytics": { "interface": "sql", "provider": "snowflake", "credentialId": "2626…", "options": { "warehouse_id": "wh1" } }
  }
}
```

Files written before instances existed are keyed by interface id with no
`interface` field, which reads correctly as-is: they were always describing
the default instance.

## Managing them

Everything is `interfaces.*`, so chat, widgets, workflow scripts, and MCP all
reach it the same way:

```
interfaces.list                 catalog + connected providers + configured profiles
profiles.set    { namespace? | path?, name?, provider?, credential?, options? }
profiles.list   { namespace? | path? }
profiles.remove { namespace? | path?, name? }
```

`name` omitted means the default namespace profile; path profiles are
singly-bound. `credential` is a credential id from `credentials.list`.

The UI is the **Interfaces** native surface
(`client/web/src/components/panels/InterfacesPanel.tsx` in the patchwork
repo): one card per interface showing what it resolves to, an inline provider
and credential picker, and an "Add instance" flow. Before it existed,
`interfaces.bind` was reachable only as a chat tool call — "swap this
workspace's SQL backend" was something you had to know to ask for.

## Discovery

`GET /tools` lists an interface namespace when some compatible provider is
connected, plus every configured named instance. Operation schemas come from:

- `llm` — a hand-written binding-neutral set (`@utdk/llm` knows the shape of
  every OpenAI-compatible provider, so it needs no implementation to describe
  itself);
- everything else — the resolved implementation's own `tools` export,
  re-labelled onto the interface namespace (`postgres.query` → `sql.query`).

`GET /tools/namespaces` is the classification surface: every namespace with
its `kind` (`core` | `interface` | `provider` | `llm-alias`), label,
description, icon slug, and — for interfaces — the compat list and current
binding. Clients render sections from this instead of keeping their own idea
of which namespaces are first-party.

## Git hosting: `vcs`

The contract a code-review workflow needs, and deliberately nothing more:
`repos.get`, `pullRequests.get/list/diff/comment/review`, `branches.get`,
`files.get` (`@utdk/vcs`). Repo administration, issues, CI and webhooks stay
on the vendor's own module — `utdk/github` already generates the whole REST
surface; the interface exists so a review workflow is not welded to it.

Two things about `vcs` are worth copying into the next interface:

- **Credentials stay keyed by the concrete provider.** The GitHub compat
  entry's credential key is `github` — the same one the generated module and
  the credentials page use — so a workspace that connected GitHub last month
  zero-configs onto `vcs` without touching anything.
- **The adapter is a catalogue *suite* module.** `github/vcs` sits inside the
  vendor's directory like `google/books` sits inside Google's: the vendor's
  generated module and its handwritten contract adapter are one credential,
  two surfaces. The Bitbucket entry (`bitbucket/vcs`) is declared
  `unavailable` — a contract commitment the bindings UI and this document are
  written against, which dispatch refuses with a 501 naming what is missing.

One packaging note: a contract's name is also a legal suite segment (`vcs`
the package under `packages/contracts/vcs`, `github/vcs` the adapter inside
the generated catalogue). The contract packages living outside
`packages/utdk/` is what makes that unambiguous — the catalogue build needs
no exclusion lists, and `github/vcs` transpiles like any other provider
directory.

## Webhooks are generation metadata, not an interface

No contract, compat document, or interface page is ever named `webhooks`.
What the registry knows about a provider's webhooks is **UTDK generation
metadata**: the bundler's webhook-intel phase writes a per-provider
`webhooks.json` (supported flag, summary, event list, subscription-management
operations, signature scheme, setup steps), exactly as the auth-intel phase
writes `auth.json`. Both are setup/configuration intel about a vendor,
produced at generation time and cached by a `sourceHash` of the relevant spec
content; the catalog site renders them side by side on provider pages. The
document shape is published, types-only, from `@utdk/common/webhooks`, so
consumers type it without importing the bundler's LLM machinery.

The workspace-side `webhooks` entry in the native-service list above is the
other half and unrelated to the catalog: webhook *delivery* is a product-plane
service (one inbox per workspace, no vendor could implement it), which is
precisely why webhooks never appear in the interface catalog — there is
nothing to bind.

## Native services backed by third parties

The `agent` interface (below) established a pattern the catalog should reuse
deliberately rather than rediscover: a **native service can front an
interface**, with the gateway's own implementation as a `credentialless`
compat entry and vendor implementations bound like anything else. The service
keeps everything made of workspace nouns; the interface is just the
executor-shaped part a competitor could implement.

Candidates already sitting behind swappable seams, in the order the pressure
will arrive:

- **`events`** — emissions and subscriptions are workspace nouns; the
  *transport* is an `IRecordStore` today and could be Redis pub/sub or SNS.
  Compat entries would look like `{ provider: "native", credentialless: true }`
  next to `{ provider: "redis", module: "redis/events" }` and
  `{ provider: "aws/sns", module: "aws/sns-events" }`.
- **`keyvalue`** — the store is a records-backed map; a Valkey/Redis-protocol
  backend is the same `get/set/delete/list` contract with someone else's
  durability. `{ provider: "valkey", module: "valkey/keyvalue" }`.
- **`telemetry`** — spans and logs already have OTLP's shape; an exporter
  compat entry (`{ provider: "otlp", module: "otlp/telemetry" }`) would fan
  the same records out to Datadog/Honeycomb/anything, while `telemetry.query`
  stays native because it reads the workspace's own store.

None of these are catalog entries today, **on purpose**. A catalog entry is a
contract commitment — the design doc, the compat list and the bindings UI get
written against it, and an `unavailable` marker promises the mapping will
exist. Declare one when we commit to building the module, not when the idea
first sounds plausible; a speculative entry is a promise nobody scheduled.
The test for readiness is the `agent` interface's: the contract package
exists, the native short-circuit is designed, and the first vendor mapping is
named work.

## Profiles: `client(name)`

A workspace can hold several credentials for one provider and several
profiles for one interface. From script/widget code they look the same:
`client(name)` (or depth-0 `tools.ns({ name, options })`) pins a profile
lazily — no await, no round-trip — and the pin travels in the request body.

```js
const work = tools.github.client("work");
const personal = tools.github.client("personal");
await work.repos.listForAuthenticatedUser({});
await personal.repos.listForAuthenticatedUser({});
```

- **Provider namespaces** (`github`): a profile pins a credential id (and
  optional options) via `profiles.set`.
- **Interface namespaces** (`llm`, `sql`, `vcs`): a profile pins provider +
  credential + options. Missing named profiles fail at the first operation
  with an error naming the profile and listing what exists.

Configure with `profiles.set` / `profiles.list` / `profiles.remove`.
`interfaces.list` remains discovery only. The earlier `getClient({ profile })`
factory and colon-addressed instance namespaces are gone.

## Agents

An agent profile's `llm` field names an interface instance (`llm`,
`llm:fast`) rather than a bare provider. During an agent-attributed run the
context carries `interfaceInstances: { llm: … }`, so the run's plain
`llm.createChatCompletion` calls resolve through the agent's instance while
the script stays written against the generic namespace.

The profile's older `provider`/`model` fields still work and pin the
implementation directly, bypassing the instance's credential and options.

Agent *execution* is its own interface, `agent` — the driver contract for
handing a run to a vendor runtime or a harness (`@utdk/agent`, ops
`run`/`get`/`cancel`). The obstacle it had to clear was specific: a UTDK
module executes inside the isolate and cannot call back into the gateway, so
the first-party in-process runner cannot be a compat entry the way `postgres`
is. The resolution is the one `sandboxes` already uses for the `machine`
provider — the native runtime *is* a compat entry, and the `agents` service
short-circuits dispatch into it in-process rather than through the isolate, so
binding, instances, discovery and the result shape stay uniform without a
relay round trip. A relay client (`@aprovan/agent-host`) is a peer entry, for
the harness that genuinely cannot be dialed. See
[agent-interface.md](./agent-interface.md).

`native` is also the first compat entry marked `credentialless`: it needs no
workspace credential, so it counts as connected for discovery and wins the
zero-config fallback ahead of any vendor. Without that, an OpenAI key
connected for chat would silently decide where a workspace's agents execute.

## Adding an interface

1. Write the contract as a handwritten `@utdk/<contract>` package under
   `packages/contracts/<name>/` (see `@utdk/sql`, `@utdk/sandbox`): the
   types, an error class, validators, and a `<contract>ToolEntries` factory
   each provider module uses for its `tools` export. Mark the manifest with
   `"utdk": { "contract": "<name>", "handwritten": true }`.
2. When the first implementation is committed work, add a `compat.json` at
   the contract's package root: `schemaVersion`, the `interface` block (id,
   label, description, `timeoutMs`, `defaultsFor` — which operations receive
   the binding's option defaults as missing args), and the `compat` entries.
   `listInterfaces()` picks it up through `@utdk/common/compat` with no
   workspace code change.
3. Each compat entry names the UTDK module that executes it. First-party
   implementations of a public contract add `moduleSpecifier` — the module
   name still identifies the client factory, the specifier only changes where
   it loads from. An entry whose module is not built yet declares
   `unavailable` with the reason.

Nothing else needs touching: discovery, dispatch, instances, credential
pinning, the services menu, and the Interfaces panel are all driven off the
catalog.
