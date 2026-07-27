# Unified web app plan — registry, patchwork, and shared platform UI

_2026-07-13_

This writeup covers five reported issues and folds them into one architecture so the
registry web app, patchwork chat, and any future Aprovan web surface share the same
session flow, UI shell, and deployment story.

## The issues, diagnosed

### 1. "Try it" console is a bare `{}` + Run

`packages/registry-ui/src/index.tsx` is skeleton code: `TryItConsole` renders an
unstyled `<textarea>` seeded with `"{}"` and a Run button — no schema-driven fields,
no result formatting, no error/loading states, no auth. The provider operation page
(`apps/registry/src/pages/providers/[...path].astro`) has full parameter metadata
(name, location, required, enum, description) server-side but never passes it to the
console.

### 2. Calls fail against `http://localhost:4321/tools/...`

Two layered problems:

- The page reads `import.meta.env.PUBLIC_GATEWAY_URL ?? ""`. The env var is not set
  in `apps/registry/.env`, so `baseUrl=""` and the fetch is **relative to the Astro
  dev server (4321)** instead of the gateway (4000). Meanwhile
  `apps/registry/src/lib/gateway.ts` already defaults to `http://localhost:4000` —
  the try-it page just doesn't use it.
- Even with the right base URL, the fallback `GatewayClient` created inside
  `TryItConsole` has **no `getToken` / workspace header**, and every `/tools/*`
  gateway route requires a verified Cognito token. Calls would 401.

### 3. Workspace switcher / credentials UX

- Registry's workspace picker only appears inside `AuthGate` when a session has no
  active workspace; it is invisible everywhere else. The top bar has a bare
  "Credentials" text link and no notion of who is signed in.
- Patchwork has its **own** `WorkspaceSwitcher` that fetches `/session` with a raw
  `localStorage.getItem("patchwork:authToken")` — bypassing the shared
  `@aprovan/ui/auth` client it already uses elsewhere.
- Net effect: two hand-rolled session UIs, neither professional, drifting apart.

### 4. Hard-coded credential providers

`AddCredentialForm.tsx` ships `KNOWN_PROVIDERS` (7 hard-coded entries) and
`KNOWN_OAUTH_URLS` (4 entries). The catalog (`packages/utdk/*`) already knows every
provider **and** its supported auth methods — each generated package carries an
`openapi.json` whose `components.securitySchemes` declares exactly which credential
avenues the API supports (e.g. Figma: `apiKey` header `X-Figma-Token` **or** OAuth2
auth-code with URLs and scopes; PostHog: bearer only). None of that is surfaced.

### 5. Deployment

The registry web app deploys to GitHub Pages (`registry-pages.yml`); the goal is
`aprovan.com/registry` and `patchwork.com/chat`. Core already owns the right
primitives: `core/infra/aws` has the Cognito `MainStack` + a `WebStack` (S3 +
CloudFront for `aprovan.com`, with `api/gateway/*` proxied to the workspace container
function URL exported by `registry/infra`). Nothing serves the registry static build
or patchwork yet, and `patchwork.com` has no distribution at all.

## Unified architecture

Three layers, each owned by one repo:

```
core/packages/ui        @aprovan/ui        design tokens + primitives
                        ├── /auth          Cognito PKCE client + AuthProvider/useAuth
                        ├── /gateway       session/workspace client + useGatewaySession
                        └── /shell  (NEW)  WorkspaceSwitcher, UserMenu, SessionArea
                                           — the professional top-bar session area

registry/packages/registry-ui  @aprovan/registry-ui   registry-domain widgets
                        └── TryItConsole (rebuilt: schema-aware, auth-aware)

apps (registry web, patchwork web)   wire env → providers, import the same shell
```

**Session/login unification.** Both apps already share the Cognito user pool, app
client, and the `@aprovan/ui/auth` PKCE client. `oidc-client-ts` caches the signed-in
user per *(origin, authority, clientId)* — so when both apps are served from the same
domain (e.g. `aprovan.com/registry` + `aprovan.com/chat`) they literally share the
cached login: sign in on one, the other picks it up. On separate domains
(`patchwork.com`) the same components still give SSO via Cognito's hosted-session
silent sign-in, but not shared storage. The remaining divergence to eliminate is
patchwork's `localStorage patchwork:authToken` side-channel — its switcher moves to
the shared shell components fed by the shared auth client.

**Catalog-driven credentials.** The Astro build emits a static
`/catalog/providers.json` derived from every catalog entry:

```jsonc
{
  "id": "figma",
  "title": "Figma",
  "auth": {
    "methods": ["api_key", "oauth2_authcode"],   // ← from securitySchemes
    "apiKeyHeader": "X-Figma-Token",
    "oauth": { "authUrl": "…", "tokenUrl": "…", "scopes": { "files:read": "…" } }
  }
}
```

The Add Credential form becomes a searchable picker over this file; once a provider
is chosen, only its supported credential types are offered and OAuth URLs / API-key
header names are prefilled from the spec instead of a hard-coded map. Providers whose
specs declare no `securitySchemes` (e.g. GitHub's official spec) fall back to all
types with bearer-token first. A "custom provider" escape hatch remains.

**Try-it flow.** `TryItConsole` (registry-ui) is rebuilt to accept serialized
operation metadata (params + schema) from the Astro page and render real fields with
a raw-JSON toggle, request state, and a formatted response panel (status, duration,
error). Auth comes from a thin app-side island (`TryItPanel`) that builds a
`GatewayClient` with `getToken` from `@aprovan/ui/auth` and the stored workspace —
because Astro island props must be serializable, the token callback cannot cross the
`.astro` boundary. Signed-out users see a sign-in prompt instead of a dead Run
button.

## Deployment plan

Ownership rule: **core owns domains and identity, app repos own their artifacts.**

| Piece | Where | What |
|---|---|---|
| `aprovan.com` distribution, cert, Cognito | `core/infra/aws` | exists (`WebStack`, `MainStack`) |
| Gateway Lambda + registry tables | `registry/infra` | exists (function URL exported; core's WebStack proxies `api/gateway/*`) |
| Registry static build → `aprovan.com/registry` | `registry` repo | build with `base=/registry`, `PUBLIC_GATEWAY_URL=https://aprovan.com/api/gateway`, `aws s3 sync dist/ s3://<web-bucket>/registry/` (new `deploy-web` workflow/Make target) |
| Patchwork chat → `patchwork.com/chat` | `patchwork` repo (new `infra/`) | a second instance of the same static-site stack: extract core's `WebStack` into a reusable `StaticSite` construct in `@aprovan/cdk` (`domainNames`, `pathPrefixes`, `apiOrigins` as props); patchwork's CDK app instantiates it for `patchwork.com` with `chat/*` behavior and `api/gateway/*` pointed at the same gateway function URL |
| DNS | `core/infra/cloudflare` | add `patchwork.com` zone records → CloudFront (mirrors existing `aprovan.com` CNAME) |

Sequencing:

1. Publish `@aprovan/ui@0.2.2` (shell components) from core — consumers pin `^0.2.1`
   so the range already resolves it.
2. Registry web deploy workflow (S3 sync into the existing bucket under `registry/`).
   The CloudFront static-rewrite function already maps `/registry` → `/registry/index.html`.
3. Extract `StaticSite` construct into `@aprovan/cdk`; refactor core's `WebStack` to
   use it (no behavior change), then scaffold `patchwork/infra` with it.
4. Cognito app client: add `https://aprovan.com/registry/auth/callback` and
   `https://patchwork.com/chat/auth/callback` to `callbackUrls` in core's `MainStack`.

## What is being executed now

1. **Gateway URL fix** — `PUBLIC_GATEWAY_URL` documented + defaulted so try-it calls
   hit `:4000` locally and `/api/gateway` in prod.
2. **TryItConsole rebuild** in `@aprovan/registry-ui` + auth-wired `TryItPanel`
   island in the registry app.
3. **`@aprovan/ui/shell`** in core: `WorkspaceSwitcher`, `UserMenu`, `SessionArea`
   (professional dashboard-style, Radix dropdowns, importable by both apps), version
   `0.2.2` + changeset.
4. **Registry top bar**: always-visible session area (workspace switcher + profile
   menu) via a `HeaderSession` island; the "Credentials" text link moves into the
   profile menu.
5. **Catalog-driven credentials**: auth-method extraction in `lib/registry.ts`,
   static `catalog/providers.json` endpoint, searchable provider picker that filters
   credential types per provider.
6. **Patchwork**: top bar switches to the shared shell components fed by the shared
   auth client (removes the raw-fetch switcher).
7. **Registry web deploy workflow** targeting the core S3 bucket under `/registry`.

Not executed here (follow-ups): the `@aprovan/cdk` `StaticSite` extraction +
patchwork.com stack (needs a cert/zone decision), Cognito callback-URL additions,
and the npm publish of `@aprovan/ui@0.2.2` (CI-owned; local builds are wired so
everything works once published — see "Local linking" note below).

### Local linking note

`@aprovan/ui` is consumed from npm (currently `0.2.1`), so registry/patchwork builds
that import `@aprovan/ui/shell` need `0.2.2` published. For immediate local dev, the
built `dist/` from `core/packages/ui` can be copied over the installed package
(`node_modules/.pnpm/@aprovan+ui@0.2.1*/node_modules/@aprovan/ui/dist`) — the repos
already sit as siblings under `AprovanLabs/`.
