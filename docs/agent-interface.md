# The agent interface — who runs the loop

_2026-07-30. Companion to [interfaces.md](./interfaces.md) (interfaces vs
services, instances, resolution), [telemetry-and-agents.md](./telemetry-and-agents.md)
(profiles and capability grants), and [sandboxes.md](./sandboxes.md), whose
structure this mirrors almost line for line._

## The gap

An agent profile today answers "which model, which prompt, what may it touch".
It does not answer **who executes the loop** — prompt the model, read the tool
calls it asks for, run them, feed the results back, repeat. Today exactly one
thing does: the workflow runner, in QuickJS, in this process. That is a fine
default and a bad monopoly. A Claude Agent SDK loop, an OpenAI Assistants run,
a `pi`-style harness on a developer's laptop each execute the same abstract
thing with wildly different mechanics, and a workspace should be able to say
"this agent runs there" the way it already says "this workspace's SQL is
Snowflake".

`interfaces.md` already named the obstacle and deferred on it:

> Agent *execution* is not yet an interface […] a UTDK module executes inside
> the isolate and cannot call back into the gateway, so the first-party
> in-process runner cannot be a compat entry the way `postgres` is.

This document resolves that, and the resolution turns out to be the same one
`sandboxes` reached for the `machine` provider.

## The decision: one interface, and the native runtime is inside it

**`agent` is an interface. The gateway's own runner is a compat entry on it —
`native` — and the `agents` service dispatches straight into it in-process
rather than through the isolate.**

That is the whole spine, so it is worth being precise about what was rejected.

### Not "native lives outside the interface"

The tempting shape is: `agents.run` branches — in-process runner by default,
`agent` interface only when the profile names a vendor. It is less code today
and it is wrong, for a reason the platform has already paid for once.

Two code paths means the *default* path is the un-contracted one. Turn
counting, cancellation, the result shape, telemetry attribution and limit
enforcement would all be implemented once inside the branch and once inside
the contract, and they would drift — not maybe, and not slowly, because the
in-process path is the one everyone exercises and the contract is the one
nobody does. The first vendor runtime someone actually binds would discover
that "swap the runtime" was a promise the most-used implementation had never
been asked to keep.

It also puts the interesting question in the wrong place. "What does a run
return?" is a contract question. Answering it inside `agents.run`'s native
branch makes the contract a description of what one implementation already
does, which is how a contract stops constraining anything.

### Not "native is a relay client"

The other tempting shape is to copy `@aprovan/sandbox-host` literally: make
the native runner a compat entry backed by a relay, so the isolate's inability
to call home stops mattering.

A relay exists to reach a process the gateway **cannot dial**. The native
runner is this process. Routing through the record-store queue would add a
write, a poll loop, and a delete per operation — and this is the same argument
`sandboxes` makes for short-circuiting `machine`:

> routing an HTTP request from the gateway back to the gateway would add a
> network round trip per operation — and materializing a mount is one write
> per file.

None of the relay's actual reasons apply either. There is no NAT, nothing goes
to sleep, and a Fargate Spot reclamation mid-run kills the loop whether or not
its ops were queued.

### What we keep from the relay

The relay shape is exactly right — for the runtime that genuinely lives
somewhere undialable. A harness on a laptop (`pi`, Claude Code) or in a
browser tab is precisely the `machine` situation, and it becomes a *sibling*
compat entry (`harness`, `@aprovan/agent-host`) over the same host-relay
routes. The relay is retained as a peer implementation, not as the native
one's transport.

### So the compat list is heterogeneous, and that is the point

```
agent
  native    in-gateway   the loop is this process; short-circuited dispatch
  harness   relayed      a laptop or tab that dials out and leases work
  openai    remote       a durable run resource in the vendor's cloud
```

Every one of them is bound, resolved, credentialed, instanced and discovered
by machinery that already exists. `agent:deep` is a namespace in exactly the
way `sql:analytics` is. Nothing in `interfaces.ts`, dispatch, the Interfaces
panel or `GET /tools/namespaces` needed a special case — with one exception,
below, which was worth the twelve lines.

### The exception: an implementation with no credential

`resolveInterfaceForWorkspace`'s zero-config fallback is "the first compat
provider that has a workspace credential". For `sql` that is a good default: a
database is a database. For `agent` it is a security-shaped mistake. `openai`
is a compat provider, so a workspace that connected OpenAI for chat would find
that every agent run had quietly moved into OpenAI's cloud — a workspace that
has an API key has not thereby consented to where its agents execute.

So `InterfaceCompat` gains `credentialless`. An entry carrying it needs no
workspace credential, and two things follow: it counts as *connected* for
discovery (so the `agent` namespace exists in a workspace that has connected
nothing), and it wins the zero-config fallback ahead of any vendor. It is a
general fact about first-party implementations of a public contract, not a
patch for one interface — it just happens that `agent` is the first interface
whose default implementation is ours.

### The name collision, since it bit immediately

The workflow runner injects one global per namespace, and it separately
injects the run's agent profile as `agent`. Adding an interface with the id
`agent` put a namespace proxy in that slot, and `agent.name` silently stopped
being the profile's name. The test suite caught it, which is the only reason
this paragraph is a footnote instead of an incident.

`agent` keeps meaning "the profile this run is attributed to"; the raw driver
loses the bare identifier (`RESERVED_SCRIPT_GLOBALS` in `workflows/runner.ts`).
No script loses anything it should have been using: spawning a sub-agent is
`agents.*`, where the profile, the grants and the run record are — for the
same reason `sandboxes.exec` is the surface and `sandbox.exec` is not.

## Where the tool calls go

Locality decides everything downstream, so the contract declares it, and
declares the second axis it implies: how a tool call gets home.

| transport | who runs the tool | who needs to be dialable |
| --- | --- | --- |
| `in-process` | the gateway, directly | nobody |
| `yield` | the gateway, after the runtime pauses and asks | nobody |
| `callback` | the runtime, over the workspace tools API with a scoped token | the gateway |
| `none` | nobody — it is a completion in a costume | — |

`yield` is the shape to prefer for anything remote, and pleasingly it is the
shape the one verified vendor already has: OpenAI Assistants pauses a run with
`requires_action` and waits for `submit_tool_outputs`. The gateway drives the
poll loop and executes the tools itself, which means a remote vendor runtime
needs **no inbound reachability and no token at all** — every tool call goes
back through the one chokepoint that already holds the credentials. A
`callback` runtime is the weaker position, and the contract says so by
requiring an explicit `callback: { url, token }` rather than letting one be
assumed.

## Profile or contract

The split is the whole point of the exercise, and the test for each field is
one question: **could a vendor implement this without knowing what a workspace
is?** If not, it is profile, and the gateway renders it into contract args
before dispatch.

| | Profile (`agents`, `.services/agents/<name>.json`) | Contract (`@utdk/agent`, per run) |
| --- | --- | --- |
| identity | `name`, `title` | — (`metadata` echoes labels back) |
| runtime | `runtime` — an `agent` instance (`agent`, `agent:deep`) | — the driver *is* the runtime |
| model | `llm` — an `llm` instance; legacy `provider`/`model` | `model?`, gated on `modelSelectable` |
| instructions | `instructions[]` — ordered layers, inline or VFS paths | `instructions?` — **one resolved string** |
| permissions | `grants` — tool patterns + path prefixes | `tools[]` — the already-filtered list; never the grants |
| effort | `effort`, `maxTurns`, `escalate` | `effort` (five-step ordinal), `limits.maxTurns` |
| limits | `limits` incl. `costCeilingUsd` | `limits` (no cost — only the workspace knows prices) |
| files | `mounts[]` — `{path, source, mode}` over the VFS | `files[]` inline, or the driver's own file ops |
| environment | `entrypoint`, `setup`, `env` | `setup?`, `env?`, `workdir?` |
| compute | `sandbox` policy | — (the runtime's own concern) |
| escape hatch | — | `providerOptions` |

A worked profile:

```jsonc
{
  "name": "reviewer",
  "title": "Code reviewer",

  "runtime": "agent",              // which agent instance executes the loop
  "llm": "llm:fast",               // which model instance it thinks with

  "instructions": [
    { "text": "You review diffs and you are terse." },
    { "path": "docs/REVIEW-STYLE.md" }
  ],

  "grants": {
    "tools": ["vfs.*", "sandboxes.*", "github.pulls.*"],
    "paths": [{ "prefix": "apps/", "access": "ro" }, { "prefix": "docs/", "access": "rw" }]
  },

  "mounts": [
    { "path": "skills", "source": "skills/", "mode": "ro" }
  ],

  "effort": "medium",
  "maxTurns": 24,
  "limits": { "wallClockMs": 900000, "maxToolCalls": 200, "costCeilingUsd": 5 },

  "entrypoint": { "scriptPath": "agents/reviewer/setup.js", "mode": "gateway" },
  "setup": "corepack enable && pnpm i --frozen-lockfile",

  "sandbox": { "instance": "sandbox", "image": "@aprovan/sandbox-image-node" }
}
```

Everything above the `entrypoint` line is workspace vocabulary — instance
names, VFS prefixes, grant patterns. None of it crosses the contract boundary
in that form.

### Effort, across vendors that agree on nothing

Anthropic's Messages API takes `thinking.budget_tokens`, an integer.
(Verified: `thinking` is a body property on `createMessage` in
`packages/utdk/anthropic/metadata.ts`.) OpenAI takes a `reasoning.effort`
enum. A harness takes a turn cap and a model tier. There is no common unit.

The contract carries a **five-step ordinal** — `minimal | low | medium | high
| max` — and each driver maps it onto its own knob. Carrying a token budget
instead would make the contract Anthropic's wrapper, and a driver whose vendor
offers three discrete levels would have to bucket the number anyway. Bucketing
is what an ordinal already is.

Two details that stop this from being a lossy shrug:

- `nearestEffort(requested, supported)` snaps onto what a runtime can actually
  distinguish, and **ties round down**. `medium` against a `{low, high}`
  backend is `low`; rounding up would make the middle of the scale the most
  expensive setting on every two-level runtime, which is the wrong direction
  for a knob whose entire purpose is cost.
- the run reports `effortApplied` in the driver's own words
  (`reasoning.effort=high`, `thinking.budget_tokens=8000`). "I asked for max
  and got medium" should be visible, not inferred from the bill.

Anything genuinely vendor-specific rides `providerOptions`, untranslated. That
field is what keeps the normalized ones from growing into a union of every
vendor's knobs.

**Tier escalation stays on the profile**, gateway-orchestrated: `escalate:
{ after: "max_turns", runtime: "agent:deep" }` re-runs through a different
instance. A driver cannot escalate to a credential it does not hold, and the
instance tuple is already the thing that names "a different model with a
different credential and different options". This is designed, not built.

### Instructions

`prompt` becomes `instructions`, an ordered list of layers:

```jsonc
"instructions": [
  { "text": "You review diffs and you are terse." },
  { "path": "docs/REVIEW-STYLE.md" },
  { "path": "docs/security/CHECKLIST.md" }
]
```

The gateway resolves each layer and concatenates in order into the contract's
**single** `instructions` string, because every runtime accepts exactly one
system prompt and a driver that understood layering would be a driver that
understood workspace paths. Composition happens before dispatch; the legacy
flat `prompt` is exactly one `{text}` layer and keeps working.

What is *not* a layer is a skills directory. A style guide is a prompt; a
directory of skills is a set of files the runtime opens when it needs one, and
inlining forty of them into a system prompt is how a context window dies.
That is a mount.

### Skills and docs — three delivery shapes, one ladder

The profile declares mounts in the vocabulary `sandboxes` already uses,
because it is the same vocabulary and the same grant check:

```jsonc
"mounts": [{ "path": "skills", "source": "skills/", "mode": "ro" }]
```

How they reach a runtime depends on one declared capability:

1. **`filesystem: true`** — the runtime has a working directory (a harness on
   a laptop, a sandbox-backed runtime). Materialize with the machinery that
   already exists: `apps/workspace/src/sandboxes/mounts.ts` is written against
   a `SandboxCall` — `(op, args) => Promise<unknown>` over `writeFile`,
   `readFile`, `listFiles` taking `{ id, path, … }` — and **the agent
   contract's file ops are deliberately shaped to be exactly that**. So
   `materializeMount` and `commitMount` work against an agent driver with no
   adapter, and anything the agent wrote comes back through the same manifest
   diff, the same conflict reporting, and the same session overlay. A skills
   mount is `mode: "ro"`, so it is materialized and never committed back; a
   notes mount is `rw` and is.
2. **`inlineFiles: true`** — no filesystem, but the runtime accepts documents.
   `files: [{path, content}]`, capped hard (64 files, 256 KB each) because
   this shape is for a handful of documents and the cap is where someone finds
   out they wanted the first shape.
3. **Neither** — the mount is exposed as **tools**: grant-filtered `vfs.read`
   / `vfs.list` scoped to the mount's prefixes appear in the run's tool list.
   Every runtime can call tools, so this is the universal fallback and the
   default. It is also the only shape that works for a remote runtime with no
   filesystem, which is most of them.

The ladder matters more than any rung: a profile declares a mount once, and
which of the three happens is a property of the runtime it got bound to.

### Permissions — the driver does not know the grants

**No driver ever receives `CapabilityGrants`.** It receives a tool list that
is already filtered, and — only for `callback` transport — a token that is
already scoped.

The reason is not tidiness. A grant list is policy written in the workspace's
vocabulary: namespace patterns, path prefixes, longest-match-wins. A driver
that enforced it would be a second enforcement point, remote, untrusted, and
free to drift from the first. That is not defense in depth; it is a place for
the check to be skipped. The failure mode it avoids is specific and boring: a
vendor runtime "knows" the grants and presents a correctly filtered tool list
to its model, so the gateway's own re-check on `submit_tool_outputs` looks
redundant, so somebody deletes it, and now every deployment depends on the
vendor's honesty.

The driver does need the *tool list*, because a runtime must describe the
available tools to the model. That list is a **projection** of the grants,
computed by the gateway. Same information, one direction, no authority.

For a runtime that calls home, the token carries the bounds: minted per run,
scoped to the profile's grants, TTL equal to the run's wall-clock budget,
revoked when the run ends. This is the sandbox image's model — "the injected
token is minted per sandbox, carries those bounds, and expires with the
sandbox" — with the run as the lifetime instead of the box.

### Limits, and which of them are real

| limit | enforced by | why |
| --- | --- | --- |
| `wallClockMs` | **both** | the gateway holds a hard deadline and `cancel`; the driver's own deadline stops burning tokens sooner |
| `maxTurns` | the driver | only the driver counts turns; the gateway learns of them afterwards |
| `maxToolCalls` | **the gateway**, for `yield` and `callback` | every call passes the chokepoint, so it can refuse call *N+1* |
| `maxTokens` | the driver | the gateway sees usage only when told |
| `costCeilingUsd` | **the gateway**, derived | cost is usage × the workspace's price table, and only the workspace has the table — so it is a profile field with no contract twin |
| `maxOutputBytes` | both, as truncation | `clampOutput`, reported |

Stated plainly, because a budget nobody can enforce is a comment: against a
broken or hostile driver the only bounds that hold are **wall clock, the
callback token's TTL, and the tool chokepoint**. Everything else in that table
is a good driver cooperating. That is an acceptable position — it is exactly
the position `sandboxes` takes on a vendor's resource limits — but it should
be written down rather than discovered.

### Entrypoints — two different things wearing one word

"An entrypoint script configures the environment" turns out to be two
requests, and they run in different places for different reasons.

**`mode: "gateway"`** — an ordinary workspace script (a VFS path, exactly the
`workflows` registration precedent: `.services/workflows/<name>.json` →
`scriptPath`) executed in QuickJS *before* the run is dispatched, with the
normal namespace globals and the profile's grants. Its return value is merged
into the run spec: add an instructions layer, narrow the tool list, pick the
effort, set `env`, choose the sandbox. This is the one that means "configure
things" in the sense the request meant, and it costs nothing new —
`runScriptInSandbox` with a different input and output shape. Its failures are
cheap: the run fails before a token is spent.

```jsonc
"entrypoint": { "scriptPath": "agents/reviewer/setup.js", "mode": "gateway" }
```

```js
// agents/reviewer/setup.js
export default async function configure({ profile, input }) {
  const open = await github.pulls.list({ owner: "acme", repo: "web", state: "open" });
  return {
    instructions: [{ text: `There are ${open.length} open PRs.` }],
    effort: open.length > 20 ? "high" : "low",
  };
}
```

**`mode: "runtime"`** — a shell command the runtime runs in *its own*
environment before the loop starts (`corepack enable && pnpm i`). Only
meaningful when `capabilities.setupCommand`, which in practice means a
filesystem runtime; it is the sandbox image's `setup` field, one layer up. A
driver without it **rejects** rather than ignores, on the `scopedSecrets`
precedent — silently dropping someone's install step produces a run that fails
for a reason nobody can see.

The distinction is worth the two modes because the failure modes are opposite:
a gateway entrypoint that throws costs nothing, and a runtime setup that fails
has already provisioned an environment.

## Sandboxes: whitelist, policy, or neither

> *"Should they also be linked with sandboxes? Where you can whitelist a
> sandbox for an agent? … We want to support sandboxes that might live in the
> browser, but unsure how to handle this with the harness runtimes."*

The question is hard because it is three questions. An agent's relationship to
a sandbox is one of:

1. **The runtime *is* the sandbox** — a harness executing inside a box the
   workspace provisioned. The agent does not "have" a sandbox; the sandbox is
   the substrate. This is runtime configuration (the `agent` instance's
   binding options: which `sandbox` instance, which image), not an agent↔box
   link.
2. **The sandbox is a tool** — the loop runs elsewhere and `sandboxes.*` is in
   its tool list, so it creates, execs and commits like any other caller.
   **This already works** and needs nothing: it is a grant.
3. **The agent is pinned to a specific existing box** — "this agent works in
   that checkout."

### Recommendation: a policy, not a whitelist of instances

The profile carries:

```jsonc
"sandbox": {
  "instance": "sandbox",                        // which `sandbox` instance it may use
  "image": "@aprovan/sandbox-image-node",
  "mounts": [{ "path": "app", "source": "apps/web", "mode": "rw" }],
  "reuse": "per-run"                            // or "pinned"
}
```

Whitelisting sandbox *ids* is the wrong shape for three reasons:

- **A sandbox record rots.** It has a TTL and a `destroyed` state; a profile is
  durable configuration. A profile naming `sbx_a1b2c3` is a config that stops
  working on a schedule nobody wrote down.
- **Two of the three relationships do not want an id.** Case 1 wants a class of
  box; case 2 wants nothing at all.
- **It would be a third containment axis.** What an agent may *mount* is
  already `grants.paths` — `parseMounts` checks exactly that, which is the
  reuse `sandboxes` deliberately chose. What it may *call* is `grants.tools`.
  Adding "which sandbox ids" gives you a third place to get containment wrong
  and no new expressiveness.

But **which host it lands on is a real policy question** — "do not put an
untrusted agent's build on my laptop" — and that is `sandbox.instance`, a name
for the (interface, provider, credential, options) tuple the platform already
has. `sandbox:vendor` for untrusted work, `sandbox:laptop` for trusted. That
is a whitelist in the shape the platform already speaks, and it is one name
rather than a list of ids.

### The browser-resident sandbox

This is the hard case, and it is hard for a reason worth naming precisely.

A tab cannot be dialed — exactly like a laptop — so it dials out and leases,
and `sandboxes/relay.ts` is already transport-agnostic about who holds the
host token. A tab holding one *is* a valid sandbox host today. It hashes in
JS rather than by shelling out to `sha256sum`, so `hashes: true` still holds.
Mechanically, nothing blocks it.

What blocks it is lifetime. A laptop's agent is a daemon: it reconnects, and
"asleep" is a state it comes back from. A tab's availability window is
**human-attention-shaped** — minutes, ending without warning, and never
resuming. Compose that with a vendor harness whose runs are minutes to hours
and whose callbacks happen when the vendor decides, and you get a system that
works in the demo and fails at minute three of a ten-minute build, with no
partial result and no way to resume. The relay even produces the right error
already (*"No agent claimed the op — is `aprovan sandbox host run` running?"*)
— it is just an error nothing can plan around.

So: it composes mechanically and fails operationally. The answer is neither
"forbid" nor "allow silently".

**Recommendation — defer offering browser-resident sandboxes to non-gateway
runtimes; ship the seam now. Confidence: medium-high that deferring is right,
high that this is the correct seam.**

The seam is two declared capabilities and one compatibility rule, and all
three are cheap enough to build before anyone needs them:

1. `@utdk/sandbox`'s `SandboxCapabilities` gains **`ephemeralHost: boolean`** —
   "available only while a human session holds it open". A browser host sets
   it; a laptop does not.
2. `@utdk/agent`'s capabilities carry **`locality`** (shipped).
3. The rule, enforced in one place when `agents.run` resolves the sandbox
   policy: **a runtime with `locality: "remote"` may not be given a sandbox
   instance whose driver reports `ephemeralHost`.** A 400 naming both sides —
   *"the `openai` runtime executes in the vendor's cloud and cannot depend on a
   browser sandbox that closes with the tab; bind `sandbox:vendor` for this
   agent"* — which is how the contract expresses a capability mismatch,
   exactly as `sandboxes` refuses `expose` on a host without `ports`.

What that rule still *allows* is the case actually worth shipping: an
**in-gateway** runtime with a browser sandbox. The gateway holds the loop, so
it can fail one `exec` with a clear message and let the run continue or stop
deliberately — and the human whose tab it is, is by construction present.

What is deferred, named so it can be picked up: a **lease-and-suspend
protocol**, where a run declares "I need this ephemeral host for the next N
seconds", the gateway holds a reservation, and the run *suspends* rather than
fails when the tab goes away — resumable through the same claim pattern
`sandboxes/queue.ts` already implements for machines. That is real work: run
suspension is a new state with a new resume path, and it should not be
invented before someone wants a browser sandbox badly enough to say so.

`AgentRunStatus` carries `"suspended"` from day one anyway, reserved and
emitted by nothing. Statuses are wire vocabulary: adding one later means every
driver and every consumer learns a new word, and "treat unknown as failure" is
the safe default in the meantime.

## The contract

`@utdk/agent`, handwritten, `utdk.contract: "agent"` — the same shape as
`@utdk/sql` and `@utdk/sandbox`.

```
run(args)                 → AgentRun     start a loop; returns a run resource
get({ id })               → AgentRun     status, turns, usage, output
cancel({ id })            → { cancelled }
submitToolResults({...})  → AgentRun     `yield` transport only
readFile / writeFile / listFiles         `filesystem: true` only
```

Even the in-gateway runtime returns a run *resource* rather than a bare
result, so "check on it" and "stop it" are the same two calls everywhere and a
long run is not a hung HTTP request.

Capabilities are declared, never assumed: `locality`, `toolTransport`,
`filesystem`, `hashes`, `inlineFiles`, `resumable`, `cancellable`,
`streaming`, `modelSelectable`, `setupCommand`, `effortLevels`.
`assertRunSupported` turns every one of them into a refusal before anything is
spent — a model named at a runtime that owns that choice, a `setup` with no
environment to run it in, tools handed to a `callback` runtime with nowhere to
send them. Each of those is a promise the gateway would otherwise make on the
driver's behalf and silently break mid-run.

Discovery entries come from the contract package, binding-neutral, exactly as
`@utdk/llm`'s do. For `agent` that is a requirement rather than a convenience:
its default implementation has no module to import and no credential to be
connected by, so borrowing schemas from "whatever resolved" would leave the
namespace permanently empty in a workspace that connected no vendor.

## What each vendor contributes — and what it can't

Checked against what is actually in this repo, not against marketing:

- **OpenAI Assistants** — `utdk/openai` already generates `createThreadAndRun`,
  `getRun`, `cancelRun`, `submitToolOuputsToRun` and `listRunSteps` over
  `/v1/threads`. That is a durable, cancellable run resource with a
  pause-and-ask tool transport, which is the fullest match for this contract
  and the reason `yield` is in it at all. The operation *names* differ from
  `run`/`get`/`cancel`, so the compat entry names a thin handwritten adapter
  module (`openai/assistants`) — the same relationship `utdk/postgres` has to
  a query engine. **Not yet built.** The credential is the ordinary `openai`
  one: an Assistants run and a chat completion are the same account, and
  minting a second provider id would make a workspace connect OpenAI twice.
- **Anthropic** — **`@utdk/anthropic` cannot back an agent loop, and no compat
  entry claims it does.** It is a generated client for the Messages API and
  nothing else: `createMessage`, `countTokens`, `listModels`, `getModel`
  (verified in `packages/utdk/anthropic/metadata.ts`). There is no run
  resource, no session, no cancel — `createMessage` is one round trip, and a
  loop built on it would be a loop *we* wrote, which is the `native` runtime
  by another name. Claude Agent SDK support is a real and separate thing: the
  SDK is a library, so it lands the way `cloudflare/sandbox` did — as a small
  adapter behind the relay — not as a REST client against routes that do not
  exist.
- **A `pi`-style harness** — the reason `filesystem`, `setupCommand` and
  `relayed` are in the capability descriptor. It is the only runtime class
  that can be handed a real skills directory and told to run `pnpm i` first,
  and it reaches the workspace over the relay the `machine` sandbox provider
  already proved. **Not yet built.**

## Surface

```
agents.create/update  { …, runtime?, instructions?, mounts?, effort?, limits?, entrypoint?, sandbox? }
agents.run            { name, input, effort?, limits?, session? }  → run record
agents.runStatus      { id }                                        → status + turns + usage
agents.cancel         { id }
agents.runs           { name?, limit? }
```

`agents.run` resolves the profile, renders it into `AgentRunArgs`, and
dispatches — short-circuiting into the in-process runner for `native`, and
through `dispatchInterface` for everything else. One rendering step, one
dispatch, one result shape, whichever runtime answered.

## Built, and not

**Built:** the `@utdk/agent` contract package; the `agent` interface with its
three compat entries; `credentialless` and its effect on fallback, discovery
and namespace classification; contract-driven discovery entries; the reserved
`agent` script global; tests covering resolution, binding, instances, the
capability refusals, effort snapping, and the global collision.

**Designed, not built:** `agents.run` and the rendering step; the in-process
runner behind the contract; the `openai/assistants` and `@aprovan/agent-host`
modules; `instructions` layers, `mounts`, `entrypoint`, `escalate` and the
sandbox policy on the profile; `ephemeralHost` and the locality rule.

**Deliberately deferred:** streaming turns as telemetry logs (the contract
carries a `streaming` capability and nothing consumes it yet); tier escalation
actually re-running; a Claude Agent SDK adapter; and the lease-and-suspend
protocol for ephemeral hosts.

## Non-goals (v1)

- Multi-agent orchestration. An agent that needs another calls `agents.run`;
  there is no supervisor, no handoff protocol, and no shared scratchpad.
- Cross-runtime session portability. `session` continues a run *on the runtime
  that produced it*; resuming an OpenAI thread inside the native runner is not
  a thing the contract promises.
- Hunk-level anything on commit — per-path, like sessions and sandboxes.
- Prompt caching, batching, and any form of cost optimisation the driver does
  not do on its own.
