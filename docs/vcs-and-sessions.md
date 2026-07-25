# VCS and Chat Sessions — the domain

_2026-07-25. Companion to [apps-and-workflows.md](./apps-and-workflows.md);
extends the workspace FS model in [platform.md](./platform.md). Shipped
2026-07-25 (gateway `src/vcs/*`, chat client SessionBar); the "v1 deltas"
notes below record where the implementation is narrower than the design._

## Why this is cheap

The workspace FS is already content-addressed: every write appends a
`(path, sha256)` version row and blobs live at `blobs/<ws>/<hash>` (S3) or in
the `(workspace_id, path, hash)` table (SQLite). Releases already prove the
pattern: a snapshot is a *set of hashes over files that already exist* — free
to create, instant to roll back.

The VCS layer generalizes that from "an app's entrypoint + scripts" to *the
whole workspace*, Git-shaped but flat:

| Git | Aprovan VCS | Cost |
| --- | --- | --- |
| blob | existing FS version (`V#<path>#<hash>`) | already paid on every write |
| tree | **snapshot** — one sorted `{path → hash}` manifest, sha256 of its canonical JSON | one small JSON write |
| commit | **commit** — `{snapshot, parents[], message, author, sessionId?}` | one small JSON write |
| branch | **ref** — named pointer to a commit (`main`, `session/<id>`) | one pointer write |

No packfiles, no nested trees, no delta chains — a "lightweight mode" by
construction. And because `vfs.list` already returns per-file hashes, a client
can assemble and hash a snapshot manifest **in the browser without reading a
single file body**. The server verifies the referenced blobs exist and writes
the manifest. Heavy lifting stays client-capable; the gateway stays the
authority.

## The nouns

| Noun | What it is | Where it lives |
| --- | --- | --- |
| **Snapshot** | Immutable `{path → hash}` manifest of the visible workspace (or a prefix). Identity = sha256 of canonical form. | `.services/vcs/snapshots/<hash>.json` |
| **Commit** | A snapshot plus history: parents, message, author, optional `sessionId`. Identity = sha256 of canonical form. | `.services/vcs/commits/<id>.json` |
| **Ref** | A named mutable pointer to a commit. `main` is the default. Session branches are `session/<id>`. | `.services/vcs/refs/<name>.json` |
| **Session** | One chat: transcript + open tabs + a *file view* (base commit + overlay). The unit the user opens, closes, resets, and runs in parallel. | `.services/chat/sessions/<id>.json` (+ `…/<id>/messages.json`) |
| **Mount** | A declaration that a path prefix is backed elsewhere: an external Git repo, an S3 bucket, or (reserved) a CRDT doc. | `.services/vcs/mounts.json` |

Snapshots always exclude `.services/**` and the hidden app-data partitions —
the same visibility rule as listings. What you can see is what gets versioned.

## The default stays the default

An unversioned workspace behaves exactly as today: writes save latest,
`vfs.read` returns latest, nothing new in the path. Versioning is opt-in per
action (a commit) or implicit per session (below). This is the "a VFS by
default should just save updates" requirement, kept literally.

## Sessions are branches

Every chat is a **session**. Creating one:

1. takes an **auto-snapshot** of `main` — if the head commit's snapshot already
   matches the current tree it is reused, otherwise an `Auto snapshot` commit
   is appended (so the base is always exactly what the user was looking at);
2. records `{ base: <commitId>, mode: "auto" | "staged" }`.

Two modes, matching "stage or auto update":

- **`auto`** (default) — file writes pass straight through to the live tree,
  exactly like today. The session still remembers its base, so "what changed
  in this chat" is always answerable as `diff(base, main)` filtered to the
  session's touched paths.
- **`staged`** — writes land in the session's **overlay**, a
  `{path → hash | null}` map over the base snapshot (`null` = deleted). The
  live tree is untouched; blobs are still written to the shared
  content-addressed store, so the overlay is hashes all the way down. Reads
  with `session=<id>` resolve overlay → base. Other sessions and other users
  see nothing until the session is staged onto main.

Closing a session offers the Git-PR move:

- **Stage to main** — one commit on `main` whose snapshot is
  `base + overlay`, with parents `[mainHead, sessionHead]` — a merge node.
  The session is marked `merged`.
- **Discard** — session marked `closed`; the overlay stays readable (peek),
  the live tree never knew.

`sessions.sync` rebases a session's base onto the current `main` head
(overlay preserved, conflicts reported per-path: overlay hash vs main hash
both differ from base). Lightweight three-way, path granularity — no hunk
merges in v1.

### The session log is not a flat chat list

`sessions.list` is the PR list: title, status (`open | merged | closed`),
mode, base → head, files changed, message count, updated-at. Opening an entry
peeks at the transcript *and* the file diff — history reads like Git's
PR-and-commit graph, not a scrollback. Parallel sessions are just multiple
open entries; the chat client renders each in its own window (`?session=<id>`
— separate PWA windows work) with a **branch chip**: session name, mode,
base short-hash, changed-file count. The chip is the visual indicator of
"which version of the world this chat sees."

## Surface — everything rides existing namespaces

**`vfs` grows the VCS verbs** (capability = namespace; versioning is a
capability of the filesystem):

```
vfs.commit   { message? }                           → commit on main (no-op when unchanged)
vfs.log      { ref?, limit? }                       → commits, newest first
vfs.show     { commit }                             → commit + entries + change status vs parent
vfs.diff     { from, to }                           → { added[], modified[], removed[] } with hashes
vfs.branches {}                                     → refs with heads
vfs.restore  { commit, path? | prefix? }            → non-destructive: old content re-written as latest
vfs.read     { path, hash? | commit?, session? }
vfs.list     { prefix?, commit?, session? }
vfs.write    { path, content, session? }
vfs.delete   { path, recursive?, session? }
vfs.mounts {} | vfs.mount { prefix, type, config, mode } | vfs.unmount { prefix }
```

**v1 deltas.** A session's "branch" is the session record itself (base +
overlay) — there are no `session/<id>` refs and no commits *on* a session;
its state is always inspectable as base + change summary, and its history
begins existing on main when it merges. `vfs.commit` therefore takes only a
message and always advances `main`. Commit-ish arguments accept a full id,
an unambiguous ≥8-char prefix, or a ref name.

`GET/PUT/DELETE /fs` accept the same `?session=` and `?commit=` params —
the chat client's write-through path needs no new routes. Content diffs are
client-side: `vfs.diff` returns hashes, `vfs.read {path, hash}` (already
shipped) fetches either side.

**`sessions` is a new core service namespace:**

```
sessions.create  { title?, mode? }                  → { id, base, branch }
sessions.list    { status? }                        → the PR-style log
sessions.get     { id }                             → meta + change summary vs base
sessions.append  { id, messages }                   → transcript chunk (append-only)
sessions.messages{ id }                             → full transcript
sessions.update  { id, title? | mode? | tabs? }
sessions.sync    { id }                             → rebase base onto main head, report conflicts
sessions.close   { id, stage?: boolean, message? }  → merge-to-main or discard
```

App sessions (the `/apps/:ws/:name` surface) get **none** of this in v1 —
VCS and session ops are member-only; `NATIVE_APP_NAMESPACES` is unchanged.

## Mounts — same semantics, other backing

A mount binds a prefix to an external store, so "point the VFS at a local FS
or an S3 bucket or a Git repo" is configuration, not a fork of the tools:

```jsonc
// .services/vcs/mounts.json
[
  { "prefix": "vendor/charts",
    "type": "git",
    "config": { "provider": "github", "repo": "org/charts", "ref": "main", "path": "src" },
    "mode": "read" },
  { "prefix": "media",
    "type": "s3",
    "config": { "bucket": "my-assets", "prefix": "workspace/", "credential": "aws" },
    "mode": "readwrite" }
]
```

Resolution order on every FS operation: **session overlay → mounts → native
store**. Git mounts read through the workspace's `github` credential at a
pinned ref (a mount *is* a versioned view — `ref` may be a branch, tag, or
commit); S3 mounts read/write through a stored AWS credential; `local` is the
dev-gateway case (SQLite backend already is a local FS analogue). `crdt` is a
**reserved type with a defined interface** (`{ docUrl, provider }`): the
contract is that a CRDT-backed prefix is live and unversioned-by-us — commits
record the mount's own version token instead of per-file hashes. Implementation
of a concrete CRDT provider is out of scope for v1.

**v1 deltas.** Mounts are read-only regardless of `mode` (the field is
stored so `readwrite` s3 can light up without a schema change); `git` mounts
read through the workspace's `github` credential (anonymous for public
repos) with the git blob sha as the version token; `s3` mounts use the
gateway's own role (grant it bucket access by policy) — workspace-credential
S3 lands with the credential-grant workstream; `crdt` is rejected with 501.
Mounted content never enters the FS store, so snapshots simply exclude it —
recording `{ mount, config-hash, versionToken }` snapshot entries is the v2
follow-up. Mounting refuses prefixes that overlap another mount or contain
native files.

## The words users see

Users are not Git users and never should be. The API keeps the precise nouns;
every user-facing surface uses this vocabulary and nothing else — no hashes,
no branch/commit/merge/stage, no ours/theirs:

| API concept | UI language |
| --- | --- |
| `main` / the live tree | **your workspace** |
| auto session | **chat** — chip: "saves directly". The default; zero ceremony. |
| staged session | **draft chat** — "keeps its changes until you apply them" |
| base commit (hash) | **"workspace as of 2h ago"** (`baseAt`, relative time) |
| overlay change set | **"3 files changed"** (new / edited / removed) |
| stage to main | **"Apply to workspace"** |
| sync / rebase | **"Get latest changes"** |
| conflict | **"Some files changed in two places"** |
| resolve ours / theirs / merge | **"Keep my draft's version" / "Keep the workspace version" / "Combine with AI"** |
| status `merged` / `closed` | **Applied** / **Archived** |

Conflicts are resolved by people answering plain questions, with the model
doing the mechanical work: "Combine with AI" merges both versions and
surfaces at most three everyday-language notes about judgment calls it made
("Both versions renamed the button — I kept the draft's name"). Resolutions
write back into the draft (keep-workspace = `sessions.discard`), so the
apply that follows is clean. Sub-agents and programmatic chats should create
**draft chats** (`sessions.create { mode: "staged" }`) — their work rides
the same review-then-apply path instead of mutating the workspace mid-flight.

## Presence and live sync

Collaboration starts with knowing who's here. `sessions.presence` heartbeats
land in the record store per (user, window) with a 30s liveness window; the
chat client beats every 10s while visible and renders live peers ("In
'Kanban board work' (draft)") as a green chip. File changes propagate across
windows and collaborators by polling the hash-bearing listing every 8s and
firing the ordinary watcher machinery — trees refresh and open tabs mark
stale no matter who edited. Parallel windows on the same chat converge
transcripts the same way (message-count polling while idle).

Polling is the v1 transport, deliberately: the surface (presence peers,
watcher events, transcript adoption) is what a push/CRDT feed would also
feed. The reserved `crdt` mount type plus gateway-brokered signaling (the
events namespace) is the intended upgrade path to true live P2P editing;
nothing in the UI vocabulary changes when it lands.

## What the chat client does with it

- **Boot**: load `sessions.list`, restore the last active session (per
  workspace, localStorage), seed `useChat` with its transcript. Reload no
  longer loses the conversation.
- **New / Close / Reset**: header controls. Reset = close + create with the
  same title. Parallel sessions = open another window with `?session=`.
- **Autosave**: transcript chunks append after each turn (idempotent upsert
  by message id); file writes follow the session mode. Staged scope is
  online-only: the OPFS write-ahead cache and offline journal are bypassed so
  one session's staged content can never leak into another's view.
- **Stage to main**: the branch chip expands to a change list (paths +
  statuses, click to diff); one button commits to main.
- **Peek**: the sessions panel lists past sessions; opening one shows the
  transcript read-only plus its file diff — no switching, no state loss.

## Non-goals (v1)

- Hunk-level merge; conflicts resolve per-path (pick overlay / pick main).
- Commit signing, multi-workspace refs, history rewriting.
- A concrete CRDT provider (interface only).
- Prefix-grant enforcement (tracked separately with the WFS permissions
  workstream).
