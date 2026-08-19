# Test credentials runbook — utdk-e2e nightly + platform OAuth apps

Hand-off document for provisioning every real credential the test/ops
surface needs. Written to be executable by an agent (or person) with
access to the provider accounts and to AWS account `748469276309`
(us-east-2). Nothing here is stored in the repo — creation happens on the
provider side, storage happens in SSM.

There are **two distinct credential surfaces**. Do not conflate them:

1. **utdk-e2e nightly bench** (this document, §1–§4) — per-provider API
   tokens the nightly live-probe workflow reads from SSM. Read-only,
   lowest-privilege, test-tier keys.
2. **Platform OAuth apps** (§5) — OAuth *client registrations* (client
   id + secret) the platform itself presents to end users. Different
   creation process, different storage, covered by
   `docs/platform-oauth-runbook.md`; §5 only lists what remains.

## 1. Storage contract (utdk-e2e)

- **Where:** AWS SSM Parameter Store, path
  `/aprovan/test/utdk-creds/<ENV_VAR_NAME>`, type `SecureString`,
  default `alias/aws/ssm` key (no custom KMS grant needed — but see §4
  spot-check).
- **One parameter per env var.** Multi-var providers (e.g. Jira) get one
  parameter per variable, same path convention.
- **Write command:**

  ```bash
  aws ssm put-parameter \
    --region us-east-2 \
    --name /aprovan/test/utdk-creds/GITHUB_TOKEN \
    --type SecureString \
    --value '<token>'
  ```

- **Partial population is a valid state.** A provider with blank
  variables is SKIPPED, never failed (the nightly reports 0 READY and
  takes no issue action). Populate incrementally; self-serve providers
  first (§2 priority order).
- The workflow's read role is already configured:
  `vars.AWS_DEPLOY_ROLE_ARN` =
  `arn:aws:iam::748469276309:role/aprovan-prd-use2-registry-deploy`
  (verified 2026-08-04).

**Canonical variable list:** `packages/utdk-e2e/.env.example` — generated
by `pnpm --filter @utdk/e2e env:scaffold`; regenerate rather than trusting
this doc if the matrix has changed. `packages/utdk-e2e/src/matrix.ts` is
the source of truth for signup tier and probe coverage.

## 2. Provider matrix

Rules for every credential created:

- **Lowest privilege that satisfies the probe** (the probe operations are
  listed per-provider in `.env.example` comments — most are read-only
  identity/list calls with zero spend).
- **Test/sandbox tier wherever the provider distinguishes** (Stripe TEST
  key, Plaid sandbox, Salesforce Developer Edition).
- **Label the token** `aprovan-utdk-e2e` (or nearest equivalent) in the
  provider UI so rotation is traceable.

### Priority 1 — self-serve, free, single token (fastest coverage)

| Provider | SSM parameter(s) (`/aprovan/test/utdk-creds/…`) | Create at | Notes |
|---|---|---|---|
| GitHub | `GITHUB_TOKEN` | https://github.com/settings/tokens | Fine-grained PAT, no scopes (probe hits `/user`) |
| Anthropic | `ANTHROPIC_API_KEY` | https://platform.claude.com/settings/keys | listModels is free |
| OpenAI | `OPENAI_API_KEY` | https://platform.openai.com/api-keys | listModels is free |
| Google Gemini | `GEMINI_API_KEY` | https://aistudio.google.com/apikey | Free AI Studio key |
| Airtable | `AIRTABLE_API_KEY` | https://airtable.com/create/tokens | PAT, scope `schema.bases:read` |
| Asana | `ASANA_ACCESS_TOKEN` | https://app.asana.com/0/my-apps | PAT |
| DigitalOcean | `DIGITALOCEAN_TOKEN` | https://cloud.digitalocean.com/account/api/tokens | Read-only PAT |
| ElevenLabs | `ELEVENLABS_API_KEY` | https://elevenlabs.io/app/settings/api-keys | getUserInfo consumes nothing |
| Figma | `FIGMA_ACCESS_TOKEN` | https://www.figma.com/developers/api#access-tokens | PAT, `file_read` |
| HubSpot | `HUBSPOT_ACCESS_TOKEN` | https://developers.hubspot.com/docs/api/private-apps | Private-app token, `crm.objects.contacts.read` |
| Linear | `LINEAR_API_KEY` | https://linear.app/settings/api | Personal API key |
| Notion | `NOTION_API_KEY`, `NOTION_DATABASE_ID` | https://www.notion.so/my-integrations | Internal integration; share one DB with it, store its id |
| OpenRouteService | `ORS_API_KEY` | https://openrouteservice.org/dev/#/signup | Free, 2000 req/day |
| Sentry | `SENTRY_AUTH_TOKEN` | https://sentry.io/settings/account/api/auth-tokens/ | `org:read` |
| Stripe | `STRIPE_SECRET_KEY` | https://dashboard.stripe.com/test/apikeys | **TEST key (`sk_test_…`) only, never live** |
| Discord | `DISCORD_BOT_TOKEN` | https://discord.com/developers/applications | Bot token; `Bot ` prefix added automatically |
| Slack | `SLACK_BOT_TOKEN` | https://api.slack.com/apps | Bot token (`xoxb-…`); authTest needs no scopes |
| PostHog | `POSTHOG_PERSONAL_API_KEY`, `POSTHOG_HOST` | https://us.posthog.com/settings/user-api-keys | Host is `https://us.posthog.com` or eu |

### Priority 2 — self-serve but multi-variable / OAuth dance

| Provider | SSM parameter(s) | Create at | Notes |
|---|---|---|---|
| Jira | `JIRA_EMAIL`, `JIRA_API_TOKEN`, `JIRA_SITE` | https://id.atlassian.com/manage-profile/security/api-tokens | Token + account email + site name |
| Postgres | `POSTGRES_HTTP_URL`, `POSTGRES_CONNECTION_TOKEN` | https://neon.tech | Free Neon project, HTTP-SQL endpoint + bearer |
| Plaid | `PLAID_CLIENT_ID` (+ secret per scaffold) | https://dashboard.plaid.com/signup | Sandbox keys, free |
| Twilio | `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN` | https://console.twilio.com | Trial account |
| Spotify | `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` | https://developer.spotify.com/dashboard | One-time authorize with `user-read-private` to mint refresh token |
| Google Cloud Run + google/* | `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`, `GOOGLE_CLOUD_PROJECT`, plus fixture ids `GOOGLE_BOOKS_USER_ID`, `GOOGLE_DOC_ID`, `GOOGLE_FORM_ID`, `GOOGLE_SHEET_ID`, `GOOGLE_SLIDES_ID` | https://console.cloud.google.com/apis/credentials | **One OAuth client + refresh token covers every `google/*` provider** (scope per API). Fixture ids point at trivial docs/sheets created in the test account |
| Salesforce | `SALESFORCE_CLIENT_ID`, `SALESFORCE_CLIENT_SECRET`, `SALESFORCE_REFRESH_TOKEN`, `SALESFORCE_INSTANCE_URL` | https://developer.salesforce.com/signup | Free Developer Edition; connected app with `refresh_token` scope |
| SendGrid | `SENDGRID_API_KEY` | https://app.sendgrid.com/settings/api_keys | Restricted key; getScopes sends no mail |
| Zendesk | `ZENDESK_EMAIL_TOKEN`, `ZENDESK_API_TOKEN`, `ZENDESK_SUBDOMAIN` | https://developer.zendesk.com/api-reference/introduction/security-and-auth/ | `ZENDESK_EMAIL_TOKEN` must be `you@example.com/token` |
| Datadog | `DATADOG_API_KEY` (+ app key per scaffold) | https://app.datadoghq.com/organization-settings/api-keys | Needs BOTH DD-API-KEY and DD-APPLICATION-KEY |
| Intercom | `INTERCOM_ACCESS_TOKEN` | https://app.intercom.com/a/apps/_/developer-hub | Limited free tier |
| LaunchDarkly | `LAUNCHDARKLY_API_KEY` | https://app.launchdarkly.com/settings/authorization | Reader role suffices |
| Pipedrive | `PIPEDRIVE_API_TOKEN` | https://pipedrive.readme.io/docs/how-to-find-the-api-token | Free tier |
| Snowflake | `SNOWFLAKE_TOKEN`, `SNOWFLAKE_ACCOUNT` | https://signup.snowflake.com | 30-day trial; keypair-JWT or OAuth |

### Priority 3 — paid plan or no self-serve signup (defer unless an account exists)

| Provider | SSM parameter(s) | Notes |
|---|---|---|
| Databricks | `DATABRICKS_TOKEN`, `DATABRICKS_WAREHOUSE_ID`, `DATABRICKS_HOST` | Paid; warehouse must be running |
| Front | `FRONT_API_TOKEN` | No self-serve signup |
| IT Glue | `ITGLUE_API_KEY` | MSP product, no self-serve |
| Mercury | `MERCURY_API_TOKEN` | Requires approved business bank account |

### Priority 4 — do NOT provision yet (no live probe exists)

Populating these spends effort for zero nightly coverage; skip until the
noted blocker clears:

| Provider | Blocker |
|---|---|
| Cloudflare Sandbox (`CLOUDFLARE_API_TOKEN`) | Sandbox driver, no REST probe — probing provisions billable compute |
| Fly.io Sprites (`FLY_API_TOKEN`) | Same as above |
| Product Hunt (`PRODUCTHUNT_TOKEN`) | Generated surface is empty (bundler regression, see utdk-e2e README findings) |
| Stytch (`STYTCH_PROJECT_ID`, `STYTCH_SECRET`) | No read-only identity op in generated surface; needs hand-picked probe |

### Gateway flows (optional, flows 3–4)

`UTDK_E2E_GATEWAY_URL` / `UTDK_E2E_GATEWAY_TOKEN` — deployed gateway URL is
the workspace origin + `/api/gateway`; token is a Cognito access token for
the workspace. Without these only the direct-SDK flow runs, which is fine
for initial coverage.

## 3. Verification after populating

Run from the registry repo:

```bash
pnpm --filter @utdk/e2e env:scaffold -- --from-ssm
pnpm --filter @utdk/e2e doctor        # expect ≥1 READY row
```

Then the one-time nightly-workflow verification (openspec
`utdk-e2e-bench` task 2.5): manually dispatch
`gh workflow run utdk-e2e-nightly.yml --ref main`, confirm doctor output
in the log, then deliberately break one credential (edit the SSM value)
and re-run to confirm the issue open → comment → close lifecycle labeled
`utdk-e2e-nightly` behaves as specced. Restore the credential after.

## 4. KMS spot-check (one-time, before the first nightly run)

openspec `utdk-e2e-bench` task 3.3: under a role that has only
`ssm:GetParameter` (no explicit `kms:Decrypt` grant), run

```bash
aws ssm get-parameter --region us-east-2 \
  --name /aprovan/test/utdk-creds/GITHUB_TOKEN --with-decryption \
  --query Parameter.Value --output text
```

and confirm it succeeds against the default `alias/aws/ssm` key. If it
fails, the deploy role needs a `kms:Decrypt` grant on that alias before
the nightly can read anything.

## 5. Platform OAuth apps (separate surface)

Covered end-to-end by `docs/platform-oauth-runbook.md` (app review
requirements, redirect-URI conventions, scope selection, secret rotation
without invalidating tenant grants). Status from openspec
`platform-oauth-apps`:

- GitHub is the proven first platform app (task 5.1 done).
- **Remaining providers are one `platformApp: true` flip in
  `data/registry.json` plus one secret each** (task 5.3) — create the
  OAuth app on the provider side per the runbook, store the secret where
  the runbook's `PLATFORM_OAUTH_*` wiring reads it, flip the flag, run
  `pnpm --filter @aprovan/registry-server test -- credentials`.
- Google is explicitly deferred (task 5.4) — do not start its
  verification process without a concrete product reason.

Sensible next flips, in order of user value vs. review friction: Slack,
Linear, Notion, Discord. One at a time, verifying each before the next.
