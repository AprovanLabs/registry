# Sandboxes — external execution over the workspace VFS

_2026-07-28. Companion to [vcs-and-sessions.md](./vcs-and-sessions.md) (mounts,
sessions, commits), [apps-and-workflows.md](./apps-and-workflows.md) (the
capability model), and [platform.md](./platform.md) ("capability =
namespace")._

## The gap

The platform executes code in three places today, and all three are
deliberately tiny: a widget iframe, a browser script sandbox, and QuickJS-WASM
for workflow runs. Each gets namespace proxies and nothing else — no
filesystem, no processes, no toolchain. That is correct for what they do and
useless for what they can't: run a test suite, install a dependency, drive a
build, hold a dev server open, let an agent work in a checkout for ten minutes.

So the platform needs one more runtime — a real one, hardware-isolated, that
somebody else operates. The design question is not "how do we build a
container host"; it is **how a foreign execution environment becomes a
first-class workspace citizen** — credentialed, mounted, traced, and
review-gated — without a new integration for every vendor.

## The shape: compute is an interface

A sandbox is a **capability with several implementations**, which is a problem
this repo has already solved twice:

| Interface | Contract package | Providers |
| --- | --- | --- |
| `llm` | `@utdk/llm` | openai, anthropic, gemini, synthetic.new |
| `sql` | `@utdk/sql` | postgres, snowflake, databricks |
| **`sandbox`** | **`@utdk/sandbox`** | **`machine`, `fly/sprites`, `cloudflare/sandbox`** |

Same three moves, no new machinery:

1. **`@utdk/sandbox`** — the shared native contract. Operation surface, result
   shapes, error class, the image system, tool-discovery entries, and the HTTP
   engine helpers each host client is built from. Handwritten, because a
   sandbox host no more fits the OpenAPI-generated mold than a database does.
2. **Provider modules** — thin, handwritten, `utdk.interface: "sandbox"`,
   credential injected as `Authorization: Bearer …`, non-secret config on the
   binding. Vendors nest under their vendor namespace the way the Google
   suites already do — `utdk/fly/sprites`, `utdk/cloudflare/sandbox` — because
   "Sprites" and "Sandbox" are product names, not vendor names, and a flat
   `sprites` would collide the first time someone else ships one.

   **A machine you own is not in `utdk/*` at all.** UTDK is the vendor
   catalogue, and a laptop has no vendor. It ships as
   `@aprovan/sandbox-host`, first-party, implementing the same public
   contract — which is the distinction worth keeping: the *contract* is
   shared, the *implementation* is ours. The interface's compat entry carries
   a module specifier so the gateway can load it without pretending it lives
   in the catalogue.
3. **A workspace binding** — `interfaces.bind { interface: "sandbox",
   provider: "fly/sprites" }`. Scripts, agents and widgets never name a
   vendor.

What does *not* fit in a provider module is the interesting half: which
workspace paths the sandbox can see, and what happens to the bytes it changes.
That is workspace domain — VCS, sessions, grants, the FS store — so it lives
where the rest of that lives:

4. **`sandboxes`** — a new core service namespace. It owns sandbox records,
   mounts, the sync algorithm, and commit routing, and it proxies exec/file
   calls through the bound interface with grants and telemetry applied.

The split is the same one `interfaces` already draws: `sandbox` is the raw,
swappable driver (dispatchable like `sql`, not separately advertised in
discovery); `sandboxes` is the namespace agents actually call.

## The nouns

| Noun | What it is | Where it lives |
| --- | --- | --- |
| **Host** | A registered execution endpoint: a vendor account, or one machine. Carries the credential, the provider id, and the images it offers. | credential store + `.services/sandboxes/hosts/<id>.json` |
| **Image** | A published descriptor of what is *in* the box: base, tools, callable namespaces, setup, prompt. An npm package. | npm / CDN, `package.json#sandbox` |
| **Sandbox** | One live environment: image + mounts + status + the base manifest of what it was given. | `.services/sandboxes/<id>.json` |
| **Mount** | `{ path, source, mode, track }` — a directory inside the sandbox backed by a workspace prefix. | inside the sandbox record |
| **Manifest** | `{path → sha256}` over a mount. The unit of diffing, both directions. | inside the sandbox record |
| **Scheduled run** | Work queued for whichever host can run its image, claimed when one becomes available. | record store while pending, `.services/sandboxes/runs/<id>.json` once done |

## Images — the Patchwork system, pointed at a filesystem

Patchwork answered "what can generated UI import?" with a package: an npm
module whose `package.json#patchwork` field declares the platform, the
dependency set, the aliases, and a `PROMPT.md` the model reads. The image name
is the contract; the registry resolves it from a CDN; the model is told what it
may use and nothing more.

A sandbox image is the same object aimed one layer down. `package.json`:

```jsonc
{
  "name": "@aprovan/sandbox-image-node",
  "version": "0.1.0",
  "sandbox": {
    "platform": "linux/amd64",
    "workdir": "/work",
    // How each provider realizes this image. A provider with no entry
    // can't run it — that is a resolution error, not a runtime surprise.
    "base": {
      "fly/sprites":        "managed",
      "cloudflare/sandbox": "docker.io/cloudflare/sandbox:0.12.4",
      "machine":            { "require": ["node", "git"] }
    },
    // What is in the box. This is the "supported imports" list: it feeds the
    // agent's prompt, and a create() that asks for a tool the image lacks
    // fails at resolution.
    "tools": [
      { "name": "node",  "version": ">=20", "check": "node --version" },
      { "name": "pnpm",  "version": ">=9",  "check": "pnpm --version" },
      { "name": "git",                      "check": "git --version" }
    ],
    // Workspace namespaces reachable *from inside* the box, via the injected
    // scoped token. Narrowed further by the caller's grants — never widened.
    "namespaces": ["vfs", "keyvalue", "telemetry"],
    "env": { "CI": "1" },
    "resources": { "cpus": 2, "memoryMb": 2048 },
    "setup": "./setup.sh",
    "prompt": "./PROMPT.md",
    "docs": { "design": "./DESIGN.md" }
  }
}
```

Two lists, two meanings, and keeping them distinct is the point:

- **`tools`** — binaries on `PATH`. The sandbox analogue of Patchwork's UI
  imports: what the agent may reach for inside the box.
- **`namespaces`** — tool namespaces reachable back out of the box, over the
  ordinary tools proxy with an injected scoped token. Capability = namespace,
  same as everywhere else.

Resolution is Patchwork's, verbatim: `parseImageSpec("@scope/name@1.2.3")`,
fetch `package.json` from the CDN (or local `node_modules`), validate, cache.
`resolveSandboxImage(spec, { provider })` returns the concrete base for *that*
provider plus the merged env, workdir, resources, tools and namespaces. A
missing `base[provider]` is a clear 400 naming the providers that do support
it.

`sandbox.image` in a binding sets the workspace default; `sandboxes.create`
overrides per call. `sandboxes.image { spec }` returns the resolved descriptor
and the `PROMPT.md` body, so a chat agent can read what it's about to be given
before asking for it.

## Mounts — the VFS goes in, hashes come back

A sandbox declares what it can see:

```jsonc
sandboxes.create({
  image: "@aprovan/sandbox-image-node",
  mounts: [
    { path: "app",     source: "apps/liift4",   mode: "rw" },   // VCS-tracked
    { path: "vendor",  source: "vendor/charts", mode: "ro" },   // a git VfsMount
    { path: "scratch", source: null,            mode: "rw" }    // untracked
  ],
  session: "sess_123",   // optional: write into this chat's overlay
  agent: "docs-writer",  // optional: run under this profile's grants
})
```

`path` is relative to the image's `workdir`. `source` is a workspace VFS
prefix — the same prefix vocabulary `vfs.list` and path grants already use, so
an agent's `paths` grant bounds what it can mount without a second concept.

**Materialization** is cheap because both sides are content-addressed. The FS
store already returns `(path, hash)` for every entry without reading a body,
and the sandbox driver's `listFiles` returns `{path, hash, size}` the same way
(the local executor hashes on the machine; hosts without native hashing get a
size+mtime prefilter and hash on read). So:

```
create   list(prefix) → base manifest → write bodies into the sandbox
sync     listFiles(mount) → live manifest
         diff(base, live) → added / modified / removed
         read only the changed bodies
commit   write those bodies through the routing table below → vfs.commit
```

Nothing unchanged ever moves. A 4,000-file checkout with three edited files
costs three reads and three writes, plus two manifest listings that never
touch content. This is the same reason the VCS layer was cheap to build, used
a second time.

### Commit routing — the two destinations

Per changed path, exactly one of:

| Mount | Where the bytes go | Versioned? |
| --- | --- | --- |
| `track: true`, no session | FS store write → `vfs.commit` on `main` | yes |
| `track: true`, staged session | the session's overlay | yes, on apply |
| `track: true`, source under a `VfsMount` | write-through to the mount (git/s3) | by the backing store |
| `track: false` (no `source`) | nowhere — the bytes live and die in the box | no |

This is the answer to "commit changes to the VCS for those paths and directly
update files that are outside VCS": it is one routing table over the mount
list, not two code paths through the service. It also lights up the piece the
VCS doc deferred — `mode: "readwrite"` on `VfsMount` stops being a stored-but-
ignored field, because sandbox commit is the first writer that needs it.

Conflicts are the ones sessions already model: base vs sandbox vs
workspace-now, per path, reported with the same shape and resolved with the
same notification widget and the same everyday-language vocabulary ("Some
files changed in two places"). No new merge UI, no hunk-level anything.

### Sessions are still the review gate

A sandbox created with `session: <staged id>` writes into that session's
overlay and nowhere else. The live tree never sees a half-finished build, and
"Apply to workspace" is the unchanged, already-shipped button. This is exactly
what `vcs-and-sessions.md` already asks of sub-agents — *"their work rides the
same review-then-apply path instead of mutating the workspace mid-flight"* —
and a sandbox is the most literal sub-agent there is. Agent-created sandboxes
therefore default to a staged session rather than to `main`.

## Grants, credentials, and what the box may reach

Three separate bounds, all pre-existing:

1. **Mounting** is checked against `grants.paths` — an agent with
   `{prefix: "docs/", access: "rw"}` cannot mount `apps/`.
2. **Calling back out** is checked against `grants.tools` ∩ the image's
   `namespaces`. The injected token is minted per sandbox, carries those
   bounds, and expires with the sandbox.
3. **The host credential** never enters the box. It is the workspace's
   credential for the provider, resolved server-side at dispatch exactly like
   every other UTDK call — the sandbox sees a scoped Aprovan token and whatever
   `env` the image and the caller declared, nothing else.

Deno's model is the sharp end of this and worth adopting where the provider
supports it: secrets that are substituted into approved outbound requests but
never materialize inside the environment. `@utdk/sandbox` carries the
`secrets: {name: {hosts, value}}` shape in the create spec so providers that
can honor it do, and providers that can't reject it rather than silently
downgrading to a plain env var.

## The machine executor — `aprovan`

The most useful host is the developer's own machine, and it is the one no
vendor sells. It is also the one that cannot be dialed: a laptop is behind
NAT, asleep half the time, and must never be reachable from the internet.

So the laptop dials out, and the gateway is the rendezvous:

```bash
aprovan login --gateway https://aprovan.com/api/gateway
aprovan sandbox host register --name my-laptop --root ~/aprovan/work \
                              --image @aprovan/sandbox-image-node
aprovan sandbox host run
```

`register` does the whole setup in one call — leaving someone to paste a token
into two other surfaces is how a feature goes unused. It registers the host,
stores the *client* token in the workspace as the `machine` credential, and
binds the `sandbox` interface to this machine's relay URL. Only the host token
stays on the machine.

The transport is the one the platform already uses for inbound webhooks: a
minted per-host token, a route mounted before Cognito auth, and the record
store as the queue. `POST /api/gateway/sandbox/hosts/:id/lease` long-polls for
pending ops (≤25s, returns immediately when work is waiting);
`POST …/:id/result` returns them. Ops are TTL'd records — an agent that never
comes back leaves nothing to clean up.

`--root` is the containment boundary and the only one that matters. Every
sandbox on a local host gets a fresh temporary working directory beneath it
(`~/aprovan/work/sbx_<id>/`); every path in every op is resolved and asserted
to stay inside it; the agent refuses `..`, absolute paths, and symlinks that
escape. A local host is not hardware-isolated and the CLI says so at
registration — it is the right tool for "run my repo's tests with my
toolchain", and the wrong one for untrusted code, which is what the vendor
providers are for.

`@aprovan/sandbox-host` exports an ordinary driver whose base URL is the
gateway's own host-relay API — from the provider's side the relay *is* the
host's REST API, which is what lets a workspace on one deployment drive a
machine registered with another.

**Inside the gateway that call short-circuits.** The relay lives in the same
process, so routing an HTTP request from the gateway back to the gateway would
add a network round trip per operation — and materializing a mount is one
write per file. `sandboxes` dispatches straight to the relay for `machine`
hosts, exactly as `invokeTool` calls a core service in-process instead of over
HTTP. The published client is for callers that genuinely are elsewhere.

## Scheduled runs — offering work to whoever is awake

A laptop is asleep half the time and cannot be dialed, so the gateway cannot
*assign* it work. It can only **offer**. A scheduled run is queued, and a host
claims it when it comes up:

```jsonc
sandboxes.schedule({
  image: "@aprovan/sandbox-image-node",
  workflow: "nightly-refactor",
  mounts: [{ path: "app", source: "apps/liift4", mode: "rw" }],
  agent: "docs-writer",
})
```

**Claiming is consent, not dispatch.** The agent says "I am here and I can run
this image"; the gateway then provisions the sandbox and drives the run down
the ordinary path, through the same lease loop it uses for everything else.
The agent never learns to orchestrate, and the scheduler never has to model
availability.

The run executes a **workflow** with the sandbox in scope — `input.sandbox`
carries `{ id, workdir, mounts }`, so the script reaches it through
`sandboxes.*` like any other caller. That is deliberate reuse rather than a
new executor: workflows already have agent attribution, capability grants, run
records, traces, and a failure notification path. An unattended run gets a
**draft chat by default**, so nobody's workspace changes overnight without a
review step.

### Matching, without inventing a capability language

"You can't run Node workloads in a non-Node box" is the whole problem, and the
image system already answers it — an image declares the `tools` inside it and,
per provider, what a machine must `require`. So **the image is the match key**,
and the queue is keyed by it:

```
sandboxqueue: <imageKey>/<createdAt>/<runId>  →  the run
```

A host registers the images it offers (`--image`, repeatable). At startup its
agent runs a two-step handshake, because neither side can answer alone:

```
POST /advert {}                    → { probe: ["node", "git", "python3"] }
POST /advert { tools, platform }   → { images: ["…-node"], skipped: ["…-python"] }
```

The gateway knows what each image requires; the machine knows what is
installed. Only images that actually verified are kept — so a box that lost
its Node install stops being offered Node work at its next restart, rather
than failing runs it should never have received. Claiming then lists **one key
prefix per verified image**, so a Node run is never *seen* by a Python box
rather than being seen and refused. `requires.tools` narrows further for a run
needing something its image doesn't promise.

Keying by image rather than by tool set is the load-bearing choice: a host
with `{node, git, python}` satisfies every subset of itself, and enumerating
subsets to build prefix keys is exponential. Images are a small, named, shared
vocabulary — exactly what a match key should be.

The record store holds only work that is not yet done. On completion the queue
entry is deleted and the run is written to the workspace FS, where history
belongs — so a healthy queue is empty and a claim scan stays short. There is
no compare-and-set in the record store, so a claim writes and then re-reads to
confirm it still owns the run; one agent per host remains the model, and the
read-back is a safety net rather than a licence to run two.

## What each reference contributes

The three systems the design was checked against agree on more than they
differ, and where they differ the contract absorbs it as a capability flag:

- **Sprites (fly.io)** — persistence is the feature. A microVM with an ext4
  filesystem that survives between runs, hibernates when idle, and wakes
  instantly. Its API is the fullest: exec sessions, filesystem read/write/
  watch, port watching, and long-lived *services* with start/stop/logs. This
  is where `persist`, `watch`, and `services` in the capability descriptor
  come from, and it is the reason a sandbox record is durable rather than
  request-scoped.

  Implemented against the published machine-readable schema
  (`api/v0.0.1-rc46/api_schema.json`, the file that generates the docs site),
  cross-checked against the official Go and JS SDKs. Three findings changed
  the client materially: sprites are addressed **by name** with no image or
  machine config to choose; **exec is query parameters with a binary framed
  response** (`0x01` stdout, `0x02` stderr, `0x03` exit code), not a JSON
  request/response; and **there is no expose call** — a sprite has one
  permanent URL whose only control is `url_settings.auth`.
- **Cloudflare Sandbox** — naming is the feature. `getSandbox(env.Sandbox,
  'user-123')` makes the sandbox an addressable, per-tenant object rather than
  a job; `exposePort` turns it into a preview URL. That maps directly onto
  workspace-scoped sandbox ids and onto `sandboxes.expose`, which is how a dev
  server inside a sandbox becomes a link in chat.

  There is no vendor REST API to point a client at — the SDK runs *inside* a
  Worker over Containers and Durable Objects — so the provider talks to your
  own deployed Worker over the shared RPC protocol, and the module documents
  exactly what that Worker's adapter must do. One correction fell out of
  reading the published types: **the container filesystem does not survive
  eviction** (files deleted, processes terminated, `sleepAfter` defaults to 10
  minutes), so the capability is `persist: false`. Claiming otherwise would
  have the gateway promise durability the platform does not offer.
- **Deno Deploy Sandbox** — the permission model is the feature. `allowNet`
  and host-scoped secrets that never enter the environment are stricter than
  anything the platform enforces today, and they are the right default for
  agent-driven execution. Adopted into the create spec as above. No provider
  module ships yet: Deno's surface is an SDK (`await using sandbox = await
  Sandbox.create(...)`), not a REST API, so it lands the way
  `cloudflare-sandbox` did — as a small adapter speaking the shared RPC
  protocol — rather than as guessed routes.

**And none of them return a content hash.** Verified independently on both:
Sprites' `GET /fs/list` yields `{name, path, type, size, mode, modTime}` and a
grep for sha/checksum/etag over its whole API schema returns nothing;
Cloudflare's `FileInfo` is a parse of a `find -printf` line. Reading every
body to hash client-side would cost one round trip per file and defeat the
manifest design entirely — so the hashing happens *where the files are*: one
`exec` running `sha256sum` over the tree, one parse, one call. That is why
`hashes: true` is honest for a host with no hash API: the capability says
"this driver can produce a real manifest", not "the vendor hands one over".
`@utdk/sandbox` ships the command builder and the parser so every provider
answers the question the same way.

None of them own a filesystem the user already has. That is the part this
design adds, and it is the whole reason to build it here rather than tell
people to call a vendor SDK: **the sandbox is mounted from the workspace and
commits back to it.**

## Surface

```
sandboxes.create   { image?, name?, mounts?, session?, agent?, ttl?, env?, secrets? }
sandboxes.list     { status? }
sandboxes.get      { id }                       → record + per-mount change counts
sandboxes.exec     { id, command, cwd?, env?, timeoutMs? }  → { exitCode, stdout, stderr, durationMs }
sandboxes.read     { id, path }
sandboxes.write    { id, path, content }
sandboxes.tree     { id, mount? }               → live manifest + diff vs base
sandboxes.sync     { id, direction: "pull" | "push", mount? }
sandboxes.commit   { id, message?, mount? }     → commit id / session change set
sandboxes.expose   { id, port }                 → { url }
sandboxes.destroy  { id }
sandboxes.image    { spec }                     → resolved descriptor + prompt
sandboxes.hosts    {} | sandboxes.registerHost { name, provider, root? } | sandboxes.revokeHost { id }
```

Everything rides `POST /tools/sandboxes/:procedure`, so chat's tool list, the
widget SDK, workflow script globals, and the MCP server pick it up with no
integration code — the platform's standing bargain.

## The chat surface

`sandboxes` is a native namespace, so it presents itself as a built-in app
beside Data, Agents, Webhooks, Sync and Activity (`native-surfaces.md`). The
registry entry is the whole integration: the panel is self-contained, fetches
through `invokeNamespaceTool("sandboxes")`, and owns its own loading, error and
empty states.

```tsx
{ id: "sandboxes", title: "Sandboxes", icon: Box,
  description: "Execution environments mounted from your workspace",
  Panel: SandboxesPanel, appTab: true }
```

Four views, each a projection of something the service already returns:

| View | Ops | Content |
| --- | --- | --- |
| **Environments** | `list` / `tree` / `commit` / `sync` / `destroy` | rows per sandbox: host, image, mounts, and the uncommitted count; expand for the changed paths, one button to apply |
| **Console** | `exec` | a command box scoped to a sandbox and a mount, with exit code, duration and output |
| **Runs** | `runs` / `cancelRun` | scheduled runs with status, claiming host, draft chat, and the workflow run id |
| **Hosts** | `hosts` / `revokeHost` | registered machines: last seen, platform, verified images, and what was skipped |

Three decisions in there are load-bearing rather than cosmetic:

- **The uncommitted count is on the row, not behind the expand.** "This sandbox
  has 3 uncommitted files" is the one thing you need before closing a laptop,
  and a number you have to go looking for is a number nobody sees.
- **Counts fill in per row, after the list renders.** A change count costs a
  real round trip — the host hashes its own tree — so asking for all of them
  before painting would make the panel as slow as the slowest host. Each check
  is isolated: an asleep machine marks one row "unknown" instead of failing the
  view. It also passes an explicit `timeoutMs`, because the service's default
  deadline is sized for a build, not for a poll; without that a sleeping host
  holds its row for two minutes.
- **Hosts distinguishes "declared" from "verified".** This is where a stale
  capability advert becomes visible. A machine that lost its toolchain stops
  taking scheduled work silently, and the only other symptom is a queue that
  never drains — so an image the host registered but could not verify is called
  out as *not runnable here*, separately from an agent that has never
  connected at all.

`appTab: true` because an app's pane should show the sandboxes touching its own
paths. Scoping is a filter over the mount sources, not a fork — a sandbox
belongs to the workspace, not to an app, so the service has no app-scoped
listing and does not need one.

## Still ahead

- **Streaming exec output** as telemetry logs, so a ten-minute build is
  watchable rather than a wait followed by a wall of text. Both vendors
  stream natively (Sprites over WebSocket, Cloudflare via `execStream`); the
  contract currently buffers.
- **A Deno Deploy provider** — a small adapter speaking the shared RPC
  protocol, the same shape `cloudflare/sandbox` takes, since Deno's surface is
  an SDK rather than a REST API.
- **A Sprites WebSocket exec path.** The framed POST relies on HTTP chunk
  boundaries surviving; the vendor's own JS SDK prefers WebSocket for large
  output and so should we.

## Non-goals (v1)

- Building or hosting images. An image is a descriptor; the bytes are the
  provider's problem (a container registry, or the local machine's own
  toolchain).
- Interactive TTYs and WebSocket terminals. `exec` is request/response with a
  deadline; streaming output arrives as telemetry logs.
- Hunk-level merge on commit — per-path, like sessions.
- Git write-through on commit (an s3 `readwrite` mount writes; a git mount
  needs a commit API and lands with the credential-grant workstream).
- Sandbox-to-sandbox networking, and any form of scheduling or autoscaling.
