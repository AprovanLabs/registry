# App data: split the record plane from the file plane

_2026-07-25. Extends [apps-and-workflows.md](./apps-and-workflows.md); this
document is normative for how app and workspace **records** are stored._

## What's wrong today (audited)

`keyvalue` is implemented as **files on the workspace FS**: an app session's
key `k` for user `u` physically lands at `<app.paths[0]>/data/<u>/<k>`
(workspace callers use `.services/keyvalue/<k>`), stored through the FS
store's DynamoDB+S3 backend. Observed live with the LIIFT4 tracker:
`apps/liift4/data/<sub>/liift4-state` shows up as an ordinary file.

Consequences, in order of how much they violate expectations:

1. **App data is visible in the workspace file tree.** A `*-state` file
   sitting next to your source files reads as clutter at best and a privacy
   leak at worst — any workspace member can browse another user's partition
   with `vfs.list`/`read`, because the file plane's permission model is
   "workspace members see workspace files".
2. **Records ride file semantics they don't want.** Every `keyvalue.set`
   creates a content version (the FS store version-logs writes), bloating
   history with state churn; records appear in file search, sync, and
   deploy-adjacent tooling.
3. **The physical backend is fine — the namespace is wrong.** The data *is*
   in DynamoDB+S3 already; the problem is that records were modeled as
   files, so they inherit file visibility, file versioning, and file
   listing.

What today's design got right and must be kept: the **tier semantics**.
Native namespaces are auto-partitioned per (app, user); `dataScope` chooses
whose tenancy stores the rows (`owner` = the publisher's workspace, like a
deployed service with central data; `workspace` = the caller's own, a
per-user private deployment). Both paths stay.

## The rule

> **Files are authored; records are accumulated.** Authored artifacts
> (source, docs, assets) live on the workspace FS with versions and member
> visibility. Accumulated state (keyvalue rows, and later queues/queryable
> collections) lives in the **record store**: unversioned, invisible to the
> file plane, private to its partition by default.

## Design

### Record store

A dedicated DynamoDB table (`registry-<env>-records`), one implementation
for every scope:

```
PK = t#<tenantWorkspaceId>#s#<scope>        SK = <key>
  scope for a workspace caller:  ws                     (shared workspace KV)
  scope for an app session:      app#<name>#u#<userSub> (per-app-user, always)
attrs: value (JSON, S3-spilled over 350KB), updatedAt, updatedBy
```

- `dataScope: "owner"`  → `tenantWorkspaceId` = publisher's workspace.
- `dataScope: "workspace"` (installed) → caller's workspace.
- Same key layout either way — `dataScope` only picks the tenant, which is
  exactly the "central service vs self-deployment" distinction and nothing
  more.
- Local/dev backend: the existing gateway SQLite (`~/.aprovan/gateway.db`)
  gains a `records` table with the same shape; `STORE_BACKEND` picks, as it
  already does for FS.

### Privacy defaults

- App sessions can only ever address their own `app#<name>#u#<self>`
  partition — unchanged in spirit, now unenumerable from the file plane.
- Workspace members do **not** see app users' records via any file API.
  Owner-side administration goes through an explicit, audited
  `apps.data({ name, user?, key? })` procedure gated on the app's admin
  role — visible power instead of ambient browsability.
- `apps.capabilities` partitioning strings change from paths to
  `records: app#<name>#u#<you>` so the Access pane stays truthful.

### The file plane forgets app data

- `vfs.list` hides `**/data/**` under any published app prefix (defense in
  depth during migration; post-migration nothing is there to hide).
- The chat file tree and workspace search inherit the fix for free.

### Migration

- Read path: record-store miss → legacy FS path read → if found, write to
  the record store and delete the file (lazy, per key).
- A one-shot `scripts/migrate-app-records.ts` sweeps `*/data/*` and
  `.services/keyvalue/*` for every workspace, moves values, deletes files.
- `events` (append-log) stays on FS for now — logs are closer to files —
  but moves behind the same interface later if needed.

**Deviation found during implementation:** the scope suffix is
`app#<name>#u#<callingUserSub>` unconditionally (as specified above), but the
*old* FS-backed `keyvalue` did not partition per user for `dataScope:
"workspace"` installs — `appDataDir` collapsed to the install prefix itself
("the workspace is the user"), so every member of an installer workspace
shared one file per key. There is no way to recover, after the fact, which
member's calls produced a given legacy value, so the migration script buckets
that shape into a placeholder scope keyed by the workspace id itself
(`app#<name>#u#<workspaceId>`) rather than guessing a real user. Any call
after migration uses the real caller's sub and lands in their own scope, not
the placeholder — cross-member sharing within one install does not carry
forward. This is a deliberate behavior tightening (it was arguably a latent
cross-user bug in the old model), not a bug in the migration; flagged here
because the rest of this document reads as if the scope shape were always
this way.

### Explicitly out of scope (for now)

Queryable collections (Dynamo-style filters), TTLs, and counters — the
record store's shape is chosen so these bolt on without remodeling.

## Execution checklist

1. Record store module (`src/records.ts`): Dynamo + SQLite backends, S3
   spill, one interface.
2. `keyvalue` service routes to it (workspace + app scopes); FS fallback
   read with lazy migrate.
3. Infra: table + grants in `infra/src/gateway-lambda.ts`, deploy.
4. `vfs.list` data-dir hiding + chat tree verification.
5. `apps.data` admin procedure (audited) + capabilities partition strings.
6. Migration script; run against prd after deploy.
7. Tests: scope isolation, dataScope tenancy, migration fallback, admin
   gating.
