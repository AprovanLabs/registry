# Platform OAuth apps — operator runbook

_Operational guide for onboarding hosted platform OAuth applications
(platform-oauth-apps §5). Code paths live in §1–§3; this document covers
provider console work, redirect URIs, scopes, secret rotation, and rollout._

## Before you ship anything

**§4.1 is resolved — the shipped quota defaults below are live.** A platform
app's rate limit and budget are no longer inherited or left to arithmetic
alone; the numbers are deliberate, documented, and enforced automatically the
moment a provider gets a platform secret. §5.1 (first end-to-end proving run)
and §5.3 (remaining providers) are unblocked — see the full reasoning in
[decisions.md](../../../openspec/changes/platform-oauth-apps/decisions.md).

### Shipped quota defaults (§4)

When a resolved credential's `origin` is `"platform"` (§1), the call contends
for a per-provider pool (`dispatch/limits.ts`, pool id `<provider>:platform`)
instead of the plain per-tenant bucket:

| Knob | Default | Env override |
| --- | --- | --- |
| Per-tenant rps | **5** | `REGISTRY_PLATFORM_DEFAULT_RPS` |
| Per-tenant burst | **10** | `REGISTRY_PLATFORM_DEFAULT_BURST` |
| Per-tenant 24h budget | **10 000** requests | `REGISTRY_PLATFORM_DEFAULT_BUDGET` |
| Published pool ceiling | **50** rps | `REGISTRY_PLATFORM_POOL_RPS` |

Effective per-tenant rps = `min(publishedPoolRps ÷ activeTenantCount,
platformDefaultRps)`. The 24h budget always applies on the pool path. All four
numbers apply even with no env set — they are code-level defaults, not
optional config — and every deployment (standalone or embedded) gets them for
free; `optionsFromEnv` only overrides them when the corresponding env var is
present.

**BYO (`origin: "tenant"`) never inherits any of this.** A tenant that
connects its own OAuth app keeps today's plain per-tenant behavior (profile
`limits` / `REGISTRY_DEFAULT_RPS` / `REGISTRY_DEFAULT_BURST`, no default
unless configured) — the whole point of bringing your own app is owning your
own upstream quota. Because origin is read fresh off the resolved credential
on every dispatch, a tenant that reconnects the same credential with its own
client id/secret picks up the wider BYO limit on the very next call — no
profile edit, no admin action.

`server.ts` configures one pool per `platformApp`-flagged provider that
actually resolved a secret (`wirePlatformOAuthAtStartup`'s return value) at
startup, using the published-ceiling default/env above. A provider flagged in
`data/registry.json` with no secret loaded never gets a pool — those calls
fall through to BYO or the actionable 400, same as before §4.

**Do not lower these numbers without a new decision** — raising a limit is
safe at any time; tightening one tenants have already built against needs a
migration note (see decisions.md "Consequences").

## How platform apps work (recap)

| Layer | What | Where |
| --- | --- | --- |
| Public flag | `"platformApp": true` on a provider entry | `data/registry.json` |
| Secret | Client ID + secret | Hosted env only — never in the repo |
| Env vars | `PLATFORM_OAUTH_<PROVIDER>_CLIENT_ID` / `_SECRET` | ECS task env / SSM (KMS-wrapped) |
| Resolution | Tenant override → platform app → BYO 400 | `resolveOAuthClient()` |
| Rate limit pool | Shared ceiling when `origin: "platform"` | `dispatch/limits.ts` |

Provider ids with slashes map to env suffixes with underscores:
`google/drive` → `PLATFORM_OAUTH_GOOGLE_DRIVE_CLIENT_ID`.

Self-hosters see the public flag but no secret: boot logs once
(`platform_oauth_secret_missing`) and tenants fall through to BYO.

## Onboarding checklist (per provider)

Use this for every new platform app after §4.1 is decided.

1. **Confirm provider terms** allow a multi-tenant OAuth app (or document
   BYO-only if not — see tech-plan D1 revisit).
2. **Register the OAuth app** in the provider developer console (details
   below per provider).
3. **Register redirect URIs** for every surface users connect from (see
   [Redirect URI conventions](#redirect-uri-conventions)).
4. **Select scopes** minimally (see [Scope selection](#scope-selection)).
5. **Store secrets** in hosted env (KMS-wrapped `CLIENT_SECRET` when
   `CREDENTIALS_KMS_KEY_ID` is set). Never commit values.
6. **Merge the registry flag** — one line in `data/registry.json`:
   `"platformApp": true` on the provider entry. No code change.
7. **Deploy / restart** registry-server so `wirePlatformOAuthAtStartup`
   loads the new env vars. Confirm startup log
   `platform_oauth_secret_loaded` for the provider.
8. **Smoke-test** OAuth connect on hosted (registry catalog and workspace
   chat if both are in scope), then a BYO override for the same provider.
9. **Nothing else to configure** — the §4 quota defaults (5 rps / burst 10 /
   10 000 24h budget / 50 rps published pool) apply automatically the moment
   `wirePlatformOAuthAtStartup` loads this provider's secret. Only set
   `REGISTRY_PLATFORM_*` env if this deployment genuinely needs different
   numbers (see [Before you ship anything](#before-you-ship-anything)).

## App review by provider

Review queues vary; onboard in whatever order moves first (§5.1 targets
GitHub or Slack as the proving run).

### GitHub

- **Console:** [GitHub Developer settings → OAuth Apps](https://github.com/settings/developers)
- **App type:** OAuth App (not GitHub App — REST client auth in registry uses
  authorization-code flow with user tokens).
- **Review:** No formal verification for standard OAuth Apps. Organization
  owners may need to approve the app for org members.
- **Homepage URL:** `https://aprovan.com` (or product marketing URL).
- **Authorization callback URL:** see redirect table below.
- **Notes:** If GitHub ever requires a registered app for the primary
  `github` provider entry, prefer the canonical `github` id over the many
  versioned `github/*` spec entries — one platform app per logical provider.

#### Proving run: GitHub (§5.1)

GitHub is the first live platform app. The canonical `github` entry in
`data/registry.json` carries `"platformApp": true`; the versioned `github/*`
suite members stay BYO-only.

**Hosted connect requires ops-loaded secrets — never commit values:**

| Env var | Purpose |
| --- | --- |
| `PLATFORM_OAUTH_GITHUB_CLIENT_ID` | OAuth App client ID |
| `PLATFORM_OAUTH_GITHUB_CLIENT_SECRET` | OAuth App client secret (KMS-wrap in prod) |

After deploy, confirm startup log `platform_oauth_secret_loaded` for
`github` and smoke-test OAuth connect on hosted catalog and/or chat. Without
these env vars, self-hosters and pre-deploy environments see
`platform_oauth_secret_missing` once at boot and tenants fall through to BYO.

§4 quota defaults (5 rps / burst 10 / 10 000 24h budget / 50 rps pool)
apply automatically once the secret loads — no extra config.

### Slack

- **Console:** [Slack API → Your Apps](https://api.slack.com/apps)
- **Review:** Workspace installation is per-workspace; no Google-style
  verification for the scopes in registry today
  (`channels:read chat:write users:read` in `data/registry.json`).
- **Redirect URLs:** add every hosted callback (see below).
- **Bot vs user token:** registry Slack auth uses OAuth v2 user/workspace
  tokens via `https://slack.com/api/oauth.v2.access`. Request only scopes
  needed for shipped tools; expanding scopes later requires users to
  re-authorize.

### Other OAuth providers

For providers not listed here:

1. Read the provider's "multi-tenant" / "public client" policy.
2. Check whether app review is required **before** any user can authorize
   (Google-style) vs optional (GitHub/Slack-style).
3. Record provider-specific notes in a PR when adding the flag so the next
   operator does not rediscover them.

## Redirect URI conventions

OAuth callbacks are **catalog-owned** (registry-standalone-credentials D7).
The browser initiates authorize with:

```
redirect_uri = ${window.location.origin}${oauthRedirectPath}
```

`registry-server` does not host a callback route; the SPA completes the flow
and POSTs the `oauth2_authcode` payload to `/credentials`.

Register **exact** callback URLs in the provider console (no wildcards unless
the provider requires them and documents the pattern).

| Surface | `oauthRedirectPath` | Production callback URL |
| --- | --- | --- |
| Registry catalog (`@aprovan/registry-web`) | `/registry/account/oauth-callback` | `https://aprovan.com/registry/account/oauth-callback` |
| Workspace chat (`@aprovan/patchwork-web`) | `/chat/account/oauth-callback` | `https://aprovan.com/chat/account/oauth-callback` |
| Local dev (registry) | `/account/oauth-callback` | `http://localhost:4321/account/oauth-callback` |
| Local dev (chat) | `/chat/account/oauth-callback` | `http://localhost:5173/chat/account/oauth-callback` |

**Rules:**

- Always register **production** URLs before flipping `platformApp: true`.
- Add **both** catalog and chat URLs if either surface can connect that
  provider.
- Localhost URIs are for developer testing only; do not rely on them in prod.
- The `redirectUri` stored on the credential payload must match the URI used
  in the authorize step — mismatches fail at token exchange.

## Scope selection

Principles:

1. **Minimum viable scopes** — request only what shipped tools call. Extra
   scopes trigger stricter review (Google) and broader blast radius.
2. **Registry as source of truth** — default scopes for a provider live in
   `data/registry.json` under `options.auth[].scope` where defined. Platform
   app registration should match or be a superset of those defaults.
3. **Expanding scopes** — treat as a breaking change: update the provider
   app, update registry defaults if needed, and expect existing tenants to
   re-connect (providers do not grant new scopes silently).
4. **Audit** — document chosen scopes and rationale in the PR that flips
   `platformApp: true`.

For Slack, start with the registry-defined scope string unless product
requires more. For GitHub, common starting sets are `repo` (private repos) or
`public_repo` + `read:user` depending on which tools ship first — pick the
smallest set that satisfies the proving run.

## Secret rotation (without invalidating tenant grants)

Platform OAuth **client secrets** can be rotated without revoking existing
user grants **as long as the client ID stays the same**.

Why: access and refresh tokens are issued to the OAuth **application**
(client_id). The client_secret is used only at authorization-code exchange
and token refresh. Rotating the secret invalidates nothing already stored on
tenant credential payloads.

**Safe rotation procedure:**

1. Generate a new client secret in the provider console (keep the same
   OAuth app / client ID).
2. Update hosted env `PLATFORM_OAUTH_<PROVIDER>_CLIENT_SECRET` (KMS-wrap
   in production). Do **not** change `CLIENT_ID`.
3. Rolling restart registry-server tasks. Confirm
   `platform_oauth_secret_loaded` in logs.
4. Spot-check: existing tenant connection still refreshes tokens; new
   authorization still completes.
5. Revoke the **old** secret in the provider console only after step 4 passes.

**What breaks grants (avoid):**

- Creating a **new** OAuth app (new client_id) — tenants must re-authorize.
- Deleting the OAuth app in the provider console.
- Removing scopes or redirect URIs that in-flight flows depend on.
- Changing the client_id env var.

Platform secrets live in the `platform-oauth:` in-memory prefix (D4), separate
from tenant credentials. Rotation is an env + restart operation only.

## Rollout: one provider at a time (§5.3)

After the first proving run (§5.1), each additional provider is:

1. Register app + redirect URIs + scopes (this runbook).
2. Load secrets into hosted env.
3. One-line registry change: `"platformApp": true`.
4. Deploy. No code change.

Merge registry.json provider edits **one provider per commit** when possible
(WAVE-PLAN conflict matrix) so rebases stay reviewable.

## Deferred: Google (§5.4)

**Decision:** Do **not** onboard Google as a platform app until there is a
concrete product reason to endure Google's OAuth verification process.

Rationale:

- Google Cloud / Workspace APIs require [OAuth verification](https://support.google.com/cloud/answer/9110914)
  for apps using sensitive or restricted scopes; multi-tenant production
  apps face app homepage, privacy policy, and security review requirements
  measured in weeks, not days.
- Registry already exposes multiple Google API specs (`google-cloud-run`,
  potential `google/drive`, etc.) with BYO OAuth today — no user-blocking
  gap for early adopters who bring their own client.
- Pool rate limits and §4.1 quota defaults should be proven on GitHub or
  Slack first; Google adds verification latency on top of quota design work.

**When to revisit:** A shipped feature requires Google APIs for users who
will not BYO, *and* the scope set is known stable enough to submit for
verification. Until then, leave `platformApp` unset on Google providers and
do not load `PLATFORM_OAUTH_GOOGLE_*` secrets.

Env naming is reserved for when that day comes:
`PLATFORM_OAUTH_GOOGLE_DRIVE_CLIENT_ID` (slash → underscore rule).

## References

- `openspec/changes/platform-oauth-apps/{prd,tech-plan,tasks,decisions}.md` (aprovan repo)
- `packages/registry-server/src/config/platform-oauth.ts` — startup wiring
  (registry.json → env secrets → rate-limit pools)
- `packages/registry-server/src/config/env.ts` — `REGISTRY_PLATFORM_*` overrides
- `packages/registry-server/src/credentials/platform-secrets.ts` — env + store
- `packages/registry-server/src/credentials/oauth.ts` — resolution + redaction
- `packages/registry-server/src/dispatch/limits.ts` — pool dimension + §4
  quota defaults (`PLATFORM_DEFAULT_RPS` / `_BURST` / `_BUDGET`, `PLATFORM_POOL_RPS`)
- `packages/registry-server/src/dispatch/index.ts` — reads resolved credential
  `clientOrigin` fresh on every call to decide platform vs BYO
- Stream 2 report: env convention table in `briefs/02-report.md`
- Stream 4 report: `briefs/04-report.md`
