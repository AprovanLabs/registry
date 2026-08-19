# Local mode — the whole platform on your laptop

_Updated 2026-07-26. The backend-parity contract behind "run the platform with
no AWS account"._

## The one-command version

```bash
npx @aprovan/workspace start
```

That is the entire platform: chat, apps, workflows, MCP, the credential and
permission gateway. It listens on <http://localhost:4000>, persists to
`~/.aprovan/workspace.db`, and you are the implicit `local` user in the
implicit `local` workspace. Add a model credential and it can think:

```bash
npx @aprovan/workspace credentials add openai
```

The token is read from stdin, so it never lands in argv or your shell history.

Three ways to run the same thing, in decreasing order of convenience:

```bash
npx @aprovan/workspace start --data-dir ./data --port 4000   # npm
docker compose -f apps/workspace/docker-compose.yml up       # container + collector
pnpm --filter @aprovan/workspace dev                         # from a checkout
```

They are the same code: the container's entrypoint is the CLI, and the desktop
app embeds `createWorkspace()` from the same package in its main process.

The chat UI is a separate artifact. From a checkout:

```bash
cd aprovan && VITE_GATEWAY_URL=http://localhost:4000/api/gateway \
  pnpm --filter @aprovan/patchwork-web dev
```

## The contract: one switch, two worlds

`WORKSPACE_MODE` selects every backend at once, in one place
(`src/runtime/config.ts`). There is no per-store knob, and no way to end up
half-configured — `aws` without `FS_BUCKET` refuses to start rather than
quietly putting the file plane on SQLite while everything else talks to
DynamoDB.

| Store | `aws` | `local` | Notes |
| --- | --- | --- | --- |
| Workspace FS (`fs-store.ts`) | S3 blobs + DynamoDB index | SQLite | content-hash versions both ways; presigned uploads 501 locally |
| Records / keyvalue / presence / notifications / telemetry (`records.ts`) | DynamoDB (+S3 spill, TTL attr) | SQLite (`expires_at` column, read-time filtering + lazy purge) | expiry semantics identical |
| Credentials (`credentials.ts`) | DynamoDB | SQLite | encrypted at rest both ways |
| Audit (`audit.ts`) | DynamoDB (30-day TTL) | SQLite (30-day lazy purge) | |
| VCS, chat sessions, workflows, apps, agents, events, webhooks, prompts | workspace FS | workspace FS | inherit the FS backend |
| Workflow cron | in-process minute tick | in-process minute tick | leader-leased; see below |
| OAuth token exchange, tool cache | in-memory | in-memory | |

**Deliberately not ported** — the multi-user plane: workspace sessions,
memberships, workspaces, users, invites, groups, permission grants stay
DynamoDB-only. Local mode is single-user by definition, so the session surface
(`GET /session`, workspace selection) **short-circuits in auth-none mode** to
the `local` identity instead of touching those stores. Admin routes over the
multi-user plane simply aren't part of the local story.

## Environment

| Variable | Default | Meaning |
| --- | --- | --- |
| `WORKSPACE_MODE` | `local` | `local` (SQLite on disk) or `aws` (DynamoDB + S3 + Cognito) |
| `WORKSPACE_PORT` | `4000` | HTTP port |
| `WORKSPACE_DATA_DIR` | `~/.aprovan` | where `workspace.db` lives (`/data` in the container) |
| `WORKSPACE_CRON` | on | set `0` to opt out of the cron lease entirely |
| `WORKSPACE_CRON_SECRET` | — | guards `POST /hooks/cron/tick`; **required** wherever auth is on |
| `WORKSPACE_ALLOW_INSECURE` | — | set `1` to allow `aws` mode with auth off |
| `SANDBOX_MEMORY_LIMIT_MB` | `32` | per-workflow-guest heap ceiling |
| `SANDBOX_POOL_MAX` | `2` | concurrent workflow guests |

In `aws` mode the rest (table names, Cognito issuer, region) comes from
`/aprovan/<env>/env` in SSM, selected by `APROVAN_ENVIRONMENT`.

## Boundaries worth knowing

- **`aws` mode refuses to boot without OIDC** unless
  `WORKSPACE_ALLOW_INSECURE=1`. Local mode never does: it is single-user by
  definition and has nothing to expose, whereas an AWS-backed workspace that
  authenticates nobody exposes every workspace's credentials and files.
- **Cron is leader-elected, not per-process.** Two `workspace start` processes
  pointed at one data directory will not both run your cron workflows: they
  contend for a 90-second lease in the record store (`src/runtime/leader.ts`),
  and only the holder ticks. This is the same code that keeps a rolling ECS
  deploy from double-firing, so the laptop exercises the production path.
- Mounts: `git` mounts work locally (public repos anonymously, private via a
  `github` credential); `s3` mounts need AWS credentials by nature.
- The registry catalog namespace (`registry.*`) fetches the public
  `aprovan.com/registry` catalog — works offline-ish (10-minute cache),
  degrades gracefully without a network.
- The full test suite runs against SQLite (`WORKSPACE_DATA_DIR` scratch dirs) —
  local parity is the tested path, not the afterthought. The `*-dynamodb` and
  `fs-s3` suites cover the `aws` backends against the compose stack
  (`docker compose up -d` at the repo root) and skip when it isn't running.
