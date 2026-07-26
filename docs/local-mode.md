# Local mode — the whole platform on your laptop

_2026-07-25. The backend-parity contract behind "run patchwork chat with no
AWS account"._

## The two-command version

```bash
# 1. Gateway: auth off, everything on SQLite (~/.aprovan/gateway.db)
cd registry/apps/gateway && pnpm dev:local

# 2. Chat: point at it, Cognito off
cd patchwork && APROVAN_ENV=off GATEWAY_URL=http://localhost:4000 \
  pnpm --filter @aprovan/patchwork-web dev
```

Open http://localhost:5173/chat/. You are the implicit `local` user in the
implicit `local` workspace — chats, files, drafts, apps, workflows,
notifications all work, persisted in `~/.aprovan/gateway.db` (override with
`GATEWAY_DATA_DIR`). To make the chat's LLM calls work, add a credential:

```bash
curl -X POST http://localhost:4000/credentials \
  -H "Content-Type: application/json" \
  -d '{"provider": "openai", "payload": {"type": "bearer_token", "token": "sk-..."}}'
```

## The contract: one switch, two worlds

`STORE_BACKEND` (defaulting to `sqlite` unless `FS_BUCKET` is set) selects
every store's backend. `APROVAN_ENV=off` skips the SSM config load, which
leaves OIDC unset, which puts auth in `none` mode.

| Store | Deployed | Local | Notes |
| --- | --- | --- | --- |
| Workspace FS (`fs-store.ts`) | S3 blobs + DynamoDB index | SQLite | content-hash versions both ways; presigned uploads 501 locally |
| Records / keyvalue / presence / **notifications** / **telemetry** (`records.ts`) | DynamoDB (+S3 spill, TTL attr) | SQLite (`expires_at` column, read-time filtering + lazy purge) | expiry semantics identical |
| Credentials (`credentials.ts`) | DynamoDB | SQLite | encrypted at rest both ways |
| Audit (`audit.ts`) | DynamoDB (30-day TTL) | SQLite (30-day lazy purge) | |
| VCS, chat sessions, workflows, apps, **agents**, events, llm-jobs, webhooks, prompts | workspace FS | workspace FS | inherit the FS backend |
| OAuth token exchange, tool cache | in-memory | in-memory | |

**Deliberately not ported** — the multi-user plane: workspace sessions,
memberships, workspaces, users, invites, groups, permission grants stay
DynamoDB-only. Local mode is single-user by definition, so the session
surface (`GET /session`, workspace selection) **short-circuits in auth-none
mode** to the `local` identity instead of touching those stores. Admin
routes over the multi-user plane simply aren't part of the local story.

## Boundaries worth knowing

- Auth `none` refuses to boot with `NODE_ENV=production` unless
  `GATEWAY_ALLOW_INSECURE=1` — local mode is a dev posture, not a deploy
  target.
- Mounts: `git` mounts work locally (public repos anonymously, private via
  a `github` credential); `s3` mounts need AWS credentials by nature.
- The registry catalog namespace (`registry.*`) fetches the public
  `aprovan.com/registry` catalog — works offline-ish (10-minute cache),
  degrades gracefully without a network.
- The full gateway test suite runs against SQLite (`GATEWAY_DATA_DIR`
  scratch dirs) — local parity is the tested path, not the afterthought.
  The `*-dynamodb.test.ts` suites cover the deployed backends against
  dynamodb-local when available.
