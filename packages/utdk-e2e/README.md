# @utdk/e2e — provider end-to-end suite

Tests every UTDK provider against the real thing, at every layer a change can
break.

## Why four flows

A provider can break in four independent places, so there are four flows that
share one probe definition:

| Flow | What it proves | Credentials |
| --- | --- | --- |
| **generation** | The generated package holds together and the probe operation still exists | none |
| **direct** | `createXClient({ auth })` reaches the live API — the metadata still describes the real endpoint | provider |
| **gateway** | `POST /tools/:provider/:op` with an ephemeral credential → workspace → isolate → live API | provider + gateway |
| **store** | Credential written to the workspace store resolves at call time, and the provider surfaces in `/tools?scope=configured` | provider + gateway |

The generation flow is the one that earns its keep on every commit: it needs no
secrets and it catches the failure mode that would otherwise go unnoticed
forever — a regeneration renames an access path, the live test starts skipping,
and nobody sees that a provider stopped being tested.

## Running

```bash
pnpm --filter @utdk/e2e test:generation
```

That is the CI gate — 280 assertions, no credentials, under a second.

```bash
pnpm --filter @utdk/e2e doctor
```

Prints exactly which providers are ready, which are missing which variables,
and which are structurally broken — without spending an API call. Run this
before the live suite.

```bash
pnpm --filter @utdk/e2e test:live
```

Live probes. **Every provider whose credentials are absent is skipped, never
failed**, so a partially-filled `.env` is a valid state. Filling in one more
provider turns one more skip into a real assertion.

### Credentials

```bash
pnpm --filter @utdk/e2e env:scaffold -- --env
```

Generates `.env` (gitignored) from the provider matrix, with every variable
name, a signup URL, and a one-line hint per provider. The scaffold is generated
rather than hand-written so it cannot drift from what the flows actually read.

`.env.example` is the committed copy. Real environment variables override the
file, so CI can inject secrets without writing one.

#### From SSM

```bash
aws sso login                                  # authenticate against the test account
pnpm --filter @utdk/e2e env:scaffold -- --from-ssm            # writes .env from SSM
pnpm --filter @utdk/e2e env:scaffold -- --from-ssm --force    # ...overwriting an existing .env
```

Every credential/fixture variable the matrix declares maps 1:1 to an SSM
`SecureString` at `/aprovan/test/utdk-creds/<ENV_VAR_NAME>` — the parameter
name is exactly the `.env.example` key, no translation table, so
`GITHUB_TOKEN` lives at `/aprovan/test/utdk-creds/GITHUB_TOKEN`. Shared
variables (the twelve `google/*` providers' three `GOOGLE_*` vars) have exactly
one parameter, not one per provider.

`--from-ssm` fetches via `ssm:GetParameters` (chunked to 10 names per call,
`WithDecryption: true`) using the default AWS SDK credential chain
(`SSMClient({})`) — the same code path for a local developer authenticated via
`aws sso login` and for CI authenticated via the OIDC deploy role
(`vars.AWS_DEPLOY_ROLE_ARN`, `CiStack`'s `RegistryDeployRole`). A parameter
with no value degrades to a blank line (same "valid partially-filled state" as
the manual scaffold); an SSM API/auth failure (expired session, `AccessDenied`,
exhausted throttling) exits non-zero instead of masquerading as "every
provider unready". Like `--env`, `--from-ssm` refuses to overwrite an existing
`.env` unless `--force` is also passed.

Fetching this path requires no CDK/IAM change: `RegistryDeployRole` already
grants `ssm:GetParameter`/`ssm:GetParameters` on `arn:aws:ssm:*:<account>:parameter/aprovan/*`,
which covers `/aprovan/test/utdk-creds/*`.

### Gateway flows

Flows 3 and 4 need `UTDK_E2E_GATEWAY_URL`. Locally:

```bash
docker compose up -d
cd apps/workspace && DYNAMO_ENDPOINT=http://localhost:8000 npx tsx bin/create-tables.ts
WORKSPACE_MODE=local WORKSPACE_PORT=4100 pnpm --filter @aprovan/workspace dev
```

Then `UTDK_E2E_GATEWAY_URL=http://localhost:4100/api/gateway`.

`DYNAMO_ENDPOINT` is required on `create-tables.ts` — see finding 9. Use
`WORKSPACE_MODE=local`; `aws` mode always reads `/aprovan/<env>/env` from SSM and
fails without AWS credentials.

**Note the `/api/gateway` prefix** — `createWorkspaceApp` mounts the gateway API
there and only `/health` sits at the root. Pointing at the bare origin gets a
plain-text 404 from every endpoint.

Against a deployed workspace, also set `UTDK_E2E_GATEWAY_TOKEN` to a Cognito
access token.

## Probe rules

Probes run on a schedule against real accounts, so each one is:

1. **Read-only.** No probe creates, mutates, or deletes anything.
2. **Free.** No probe spends model tokens, sends a message or an email, or bills
   per call. `anthropic`/`openai`/`gemini` probe `listModels`; `sendgrid` probes
   `getScopes`; `twilio` fetches its own account.
3. **Fixture-free where possible.** Identity and list endpoints that work on an
   empty account. Where the generated surface offers nothing better, the probe
   declares `needs` and skips until that fixture variable is set.

Every `op` in the matrix is a dot-joined `accessPath` copied from the provider's
generated `metadata.ts`, and `generation.test.ts` asserts each one still
resolves.

## Adding a provider

Add an entry to `src/matrix.ts` with an auth descriptor and a probe, then
regenerate the scaffold. `generation.test.ts` will tell you immediately if the
probe operation does not exist. A provider with no sensible probe needs an
`unprobed` string explaining why — the matrix test enforces that every provider
has one or the other, so nothing is silently skipped.

---

# Findings

Building the suite surfaced defects independent of it. Recorded here because
each one is a real gap, not a harness artifact.

## 1. `producthunt` is empty and unregistered

`metadata.ts` holds **0 operations** and the provider is absent from
`registry.json`. Product Hunt's API is GraphQL-only, so the OpenAPI-driven
bundler had nothing to generate from. It needs the treatment `linear` got — a
hand-written `executeGraphQl` operation — or removal.

Tracked as a `knownBroken` marker: the generation test asserts the defect
*persists*, so CI stays green while it stays visible, and flips to a hard
failure the moment someone fixes it without clearing the marker.

## 2. `postman-explore` targets an API that no longer exists

Every generated route 404s upstream. Verified independently of the client:

```
https://www.postman.com/_api/ws/proxy/v2/api/category      -> 404
https://www.postman.com/_api/ws/proxy/v1/api/networkentity -> 404
https://www.postman.com/_api/ws/proxy/v1/api/team          -> 404
```

The spec describes Postman's internal, undocumented `_api/ws/proxy` surface. Its
own description says requests are `POST` with a `service`/`method`/`path`
envelope, but the generated operations are plain `GET`s — so the spec was
already internally inconsistent. Needs a respec or removal.

## 3. The gateway cannot pass a `baseUrl` per call

`POST /tools/:provider/:operation` accepts `args` and `credential`. There is no
way to supply a base URL: `routes/tools.ts` only sets one from an *interface
binding* or an LLM alias. Any provider whose spec server URL is relative or
tenant-specific is therefore unreachable through the gateway unless an interface
binding exists for it:

- **relative server URL** — `petstore` (`/api/v3`) fails with `Invalid URL`
- **tenant-specific** — `zendesk`, `jira`, `posthog`, `salesforce`,
  `databricks`, `snowflake`, `postgres`

The suite derives this automatically: any probe carrying a `baseUrl` or
`baseUrlEnv` skips the gateway and store flows with that reason, rather than
reporting a false failure.

## 4. Four providers declare no auth scheme but require one

`utdk.auth.schemes` in `package.json` is the machine-readable contract the
gateway and UI read to know what credential to ask for. These declare none yet
reject unauthenticated calls:

| Provider | Actually needs |
| --- | --- |
| `github` | `Authorization: Bearer <pat>` |
| `notion` | `Authorization: Bearer <secret>` + `Notion-Version` |
| `elevenlabs` | `xi-api-key` |
| `telegram` | bot token in the URL path |

Anything driving credential collection off `utdk.auth.schemes` will offer no
credential field for these four.

## 5. Two-header credentials are not expressible

`datadog` needs `DD-API-KEY` **and** `DD-APPLICATION-KEY`; `plaid` needs
`PLAID-CLIENT-ID` **and** `PLAID-SECRET`. Both the credential store
(`ApiKeyPayload` is a single `headerName`/`value`) and `buildAuthHeaders` in
`isolate.ts` emit exactly one header. Both providers are in the matrix and will
fail with 403 until the payload type grows a multi-header form.

## 6. `zendesk` declares the wrong auth scheme

The spec declares `http: bearer`, but Zendesk API-token auth is
`Basic base64(email/token:key)`. The matrix uses the working form; the spec
should be corrected.

## 7. Relative spec servers break `baseUrl` override

In `client.ts`'s `buildUrl`, the spec-base-path stripping is guarded by
`new URL(specBaseUrl)`, which throws for a relative server URL like `/api/v3`
and is silently swallowed. The route template keeps its `/api/v3` prefix, so a
caller passing a path-bearing `baseUrl` override gets the path **duplicated**
(`/api/v3/api/v3/store/inventory` → 404). Callers must pass origin-only. Worth
either normalizing relative server URLs at generation time or handling the
relative case explicitly.

## 8. `stytch` has no read-only probe

Every operation in the generated surface needs a user, session, or organization
fixture — there is no `whoami`-style endpoint. Left `unprobed` pending a
hand-picked probe plus fixture.

## 9. `bin/create-tables.ts` silently provisioned real AWS — now guarded

Run without `DYNAMO_ENDPOINT`, the script pointed at real AWS with whatever
ambient credentials the shell had and created the **full unprefixed table set**
(`Users`, `Sessions`, `Workspaces`, `Memberships`, `FsFiles`) in the developer's
account. Unprefixed names mean the mistake is invisible until something reads
the wrong data.

Fixed in this change: the script now refuses to run without `DYNAMO_ENDPOINT`
unless `CREATE_TABLES_ALLOW_AWS=1` is set explicitly, and the banner prints the
resolved region instead of the uninformative `AWS default`.

## 10. A stale `mock-gateway.mjs` squats on port 4000

Unrelated to this package, but it cost real debugging time: a
`node mock-gateway.mjs` process had been listening on **port 4000** for five
days — the workspace's default port. It answers `/tools` with a plausible
hard-coded tool list and `POST /tools/...` with `{"data":{}}`, so a gateway
pointed at port 4000 appears to work while testing nothing. Worth killing, and
worth having the real workspace refuse to start when its port is occupied
instead of logging and continuing.
