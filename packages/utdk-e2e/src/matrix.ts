/**
 * The provider probe matrix.
 *
 * One entry per UTDK provider, pairing the provider's auth descriptor with a
 * *probe*: the cheapest read-only operation that proves a credential reaches
 * the real API and comes back with a recognizable payload.
 *
 * Probe rules — these are what keep the suite runnable on a schedule:
 *   1. Read-only. No probe creates, mutates, or deletes anything.
 *   2. Free or near-free. No probe spends model tokens, sends a message, or
 *      bills per call.
 *   3. No fixture where avoidable. Prefer identity/list endpoints that work on
 *      an empty account; when the generated surface offers nothing better,
 *      declare `needs` and the suite skips until the fixture env var is set.
 *
 * Every `op` here is a dot-joined `accessPath` taken from the provider's
 * generated `metadata.ts`. `tests/generation.test.ts` asserts each one still
 * exists, so a regeneration that renames or drops an operation fails the build
 * instead of silently un-testing a provider.
 */

/** How a provider's credential is assembled from environment variables. */
export type AuthDescriptor =
  /** No credential (public API, or a spec that declares none). */
  | { kind: "none" }
  /** `Authorization: Bearer <env>` */
  | { kind: "bearer"; env: string }
  /** `<header>: [prefix]<env>` */
  | { kind: "apiKey"; env: string; header: string; prefix?: string }
  /** `Authorization: Basic base64(<userEnv>:<passEnv>)` */
  | { kind: "basic"; userEnv: string; passEnv: string }
  /** Refresh-token grant exchanged per run, then sent as a bearer token. */
  | {
      kind: "oauth2Refresh";
      clientIdEnv: string;
      clientSecretEnv: string;
      refreshTokenEnv: string;
      tokenUrl: string;
    };

export interface ProviderProbe {
  /** Dot-joined access path, e.g. `users.getAuthenticated`. */
  op: string;
  /**
   * Probe arguments. A function receives the resolved fixture env values so a
   * probe can interpolate resource ids it declared in `needs`.
   */
  args?: Record<string, unknown> | ((fixtures: Record<string, string>) => Record<string, unknown>);
  /** Fixture env vars this probe cannot run without (resource ids, tenant ids). */
  needs?: string[];
  /**
   * Static base URL, for specs whose `servers` entry is relative (the Petstore
   * reference spec declares `/api/v3`) and therefore unusable as-is.
   */
  baseUrl?: string;
  /** Env var holding a tenant-specific base URL (or the value for the template). */
  baseUrlEnv?: string;
  /** Template applied to `baseUrlEnv`'s value, e.g. `https://{value}.zendesk.com/api/v2`. */
  baseUrlTemplate?: string;
  /** Assertion on the probe's response. Throw or return false to fail. */
  expect?: (result: unknown) => boolean;
}

export interface ProviderEntry {
  /** Registry key — matches the directory under `packages/utdk` and `registry.json`. */
  id: string;
  /** Human label for reports. */
  label: string;
  auth: AuthDescriptor;
  probe?: ProviderProbe;
  /**
   * Why this provider has no runnable probe. Set together with an absent
   * `probe`; the generation test still covers it structurally.
   */
  unprobed?: string;
  /**
   * Namespace re-export (`@utdk/clients/google` → google/*). Has no client factory and
   * no operations of its own by design, so the generation test checks only that
   * the namespace resolves.
   */
  shim?: true;
  /**
   * A structural defect that exists today. The generation test asserts these
   * *keep* failing, so CI stays green while the breakage stays visible — and
   * flips to a hard failure the moment someone fixes it without clearing the
   * marker.
   */
  knownBroken?: string;
  /** Where to obtain the credential — surfaced in the .env scaffold and docs. */
  credentialUrl?: string;
  /** How to obtain the credential, one line, for the .env scaffold. */
  credentialHint?: string;
  /** Free-tier / self-serve signup reality, for the provisioning guide. */
  signup?: "self-serve" | "self-serve-limited" | "paid" | "invite-only" | "not-applicable";
  notes?: string;
}

/** Truthy for a non-empty object or array — the common "it came back" shape. */
const nonEmpty = (result: unknown): boolean => {
  if (Array.isArray(result)) return true;
  return typeof result === "object" && result !== null;
};

const hasKey =
  (...keys: string[]) =>
  (result: unknown): boolean => {
    if (typeof result !== "object" || result === null) return false;
    return keys.some((key) => key in (result as Record<string, unknown>));
  };

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";

/** Shared descriptor for the twelve Google sub-providers. */
const googleAuth: AuthDescriptor = {
  kind: "oauth2Refresh",
  clientIdEnv: "GOOGLE_CLIENT_ID",
  clientSecretEnv: "GOOGLE_CLIENT_SECRET",
  refreshTokenEnv: "GOOGLE_REFRESH_TOKEN",
  tokenUrl: GOOGLE_TOKEN_URL,
};

const google = (id: string, label: string, op: string, extra: Partial<ProviderEntry> = {}): ProviderEntry => ({
  id,
  label,
  auth: googleAuth,
  probe: { op, expect: nonEmpty },
  credentialUrl: "https://console.cloud.google.com/apis/credentials",
  credentialHint: "One OAuth client + refresh token covers every google/* provider; scope per API.",
  signup: "self-serve",
  ...extra,
});

export const PROVIDERS: ProviderEntry[] = [
  // -------------------------------------------------------------------------
  // Credential-free canaries — these run in CI with no secrets at all and
  // prove the transport, the gateway, and the client builder still work.
  // -------------------------------------------------------------------------
  {
    id: "petstore",
    label: "Swagger Petstore",
    auth: { kind: "none" },
    probe: {
      // getInventory would be the natural probe, but the public demo returns
      // 500 on /store/inventory for everyone. getPetById(1) is served.
      op: "getPetById",
      args: { petId: 1 },
      // The spec's only server entry is the relative "/api/v3", which the client
      // cannot turn into an absolute URL. Override with the ORIGIN only: the
      // route templates already carry "/api/v3", and buildUrl's spec-base-path
      // stripping is skipped when the spec server URL is relative (it fails to
      // parse), so a path-bearing override would be duplicated.
      baseUrl: "https://petstore3.swagger.io",
      expect: hasKey("id", "name"),
    },
    signup: "not-applicable",
    notes:
      "Reference spec, zero-credential canary. Backed by a shared public demo whose data " +
      "other users can mutate — treat a 404 here as upstream flakiness, not a regression.",
  },
  {
    id: "postman-explore",
    label: "Postman Explore",
    auth: { kind: "none" },
    unprobed:
      "Every generated route 404s upstream — verified with curl against " +
      "/_api/ws/proxy/{v2/api/category,v1/api/networkentity,v1/api/team}. The spec describes " +
      "Postman's internal, undocumented _api/ws/proxy surface, which has since changed shape " +
      "(its own description says requests are POST with a service/method/path envelope, but the " +
      "generated operations are plain GETs). Needs a respec or removal — see README findings.",
    signup: "not-applicable",
    notes: "Generation is structurally fine; the upstream API it targets is gone.",
  },
  {
    id: "openrouteservice",
    label: "OpenRouteService",
    auth: { kind: "apiKey", env: "ORS_API_KEY", header: "Authorization" },
    probe: {
      op: "getDirections",
      args: { profile: "driving-car", start: "8.681495,49.41461", end: "8.687872,49.420318" },
      expect: nonEmpty,
    },
    credentialUrl: "https://openrouteservice.org/dev/#/signup",
    credentialHint: "Free key, 2000 req/day.",
    signup: "self-serve",
  },

  // -------------------------------------------------------------------------
  // Bearer-token providers
  // -------------------------------------------------------------------------
  {
    id: "airtable",
    label: "Airtable",
    auth: { kind: "bearer", env: "AIRTABLE_API_KEY" },
    probe: { op: "listBases", expect: hasKey("bases") },
    credentialUrl: "https://airtable.com/create/tokens",
    credentialHint: "Personal access token with scope schema.bases:read.",
    signup: "self-serve",
  },
  {
    id: "anthropic",
    label: "Anthropic",
    auth: { kind: "apiKey", env: "ANTHROPIC_API_KEY", header: "x-api-key" },
    probe: { op: "listModels", expect: hasKey("data") },
    credentialUrl: "https://platform.claude.com/settings/keys",
    credentialHint: "listModels is free; no token spend.",
    signup: "self-serve",
    notes: "Probe deliberately avoids /messages so the suite costs nothing to run.",
  },
  {
    id: "asana",
    label: "Asana",
    auth: { kind: "bearer", env: "ASANA_ACCESS_TOKEN" },
    probe: { op: "getWorkspaces", expect: hasKey("data") },
    credentialUrl: "https://app.asana.com/0/my-apps",
    credentialHint: "Personal access token.",
    signup: "self-serve",
  },
  {
    id: "databricks",
    label: "Databricks SQL",
    auth: { kind: "bearer", env: "DATABRICKS_TOKEN" },
    probe: {
      op: "query",
      args: (f) => ({ sql: "SELECT 1 AS ok", warehouse_id: f["DATABRICKS_WAREHOUSE_ID"] }),
      needs: ["DATABRICKS_WAREHOUSE_ID"],
      baseUrlEnv: "DATABRICKS_HOST",
      expect: hasKey("rows", "columns"),
    },
    credentialUrl: "https://docs.databricks.com/dev-tools/auth.html",
    credentialHint: "PAT + SQL warehouse id. Warehouse must be running.",
    signup: "paid",
    notes: "Handwritten @utdk/sql module — probe is the SQL contract, not an OpenAPI op.",
  },
  {
    id: "digitalocean",
    label: "DigitalOcean",
    auth: { kind: "bearer", env: "DIGITALOCEAN_TOKEN" },
    probe: { op: "getV2Account", expect: hasKey("account") },
    credentialUrl: "https://cloud.digitalocean.com/account/api/tokens",
    credentialHint: "Read-only PAT is sufficient.",
    signup: "self-serve",
  },
  {
    id: "front",
    label: "Front",
    auth: { kind: "bearer", env: "FRONT_API_TOKEN" },
    probe: { op: "listAccounts", expect: nonEmpty },
    credentialUrl: "https://app.frontapp.com/settings/tokens",
    credentialHint: "API token from Settings → API & Integrations.",
    signup: "invite-only",
    notes: "No self-serve free tier; needs a trial workspace.",
  },
  {
    id: "github",
    label: "GitHub",
    auth: { kind: "bearer", env: "GITHUB_TOKEN" },
    probe: { op: "users.getAuthenticated", expect: hasKey("login") },
    credentialUrl: "https://github.com/settings/tokens",
    credentialHint: "Fine-grained PAT, no scopes needed for /user.",
    signup: "self-serve",
    notes: "package.json declares no auth scheme despite requiring one — see README findings.",
  },
  {
    id: "intercom",
    label: "Intercom",
    auth: { kind: "bearer", env: "INTERCOM_ACCESS_TOKEN" },
    probe: { op: "listAdmins", expect: hasKey("admins", "type") },
    credentialUrl: "https://app.intercom.com/a/apps/_/developer-hub",
    credentialHint: "Developer Hub → your app → access token.",
    signup: "self-serve-limited",
  },
  {
    id: "linear",
    label: "Linear",
    auth: { kind: "bearer", env: "LINEAR_API_KEY" },
    probe: {
      op: "executeGraphQl",
      args: { query: "query { viewer { id name } }" },
      expect: hasKey("data"),
    },
    credentialUrl: "https://linear.app/settings/api",
    credentialHint: "Personal API key.",
    signup: "self-serve",
    notes: "REST surface is webhooks/OAuth only; the real API is GraphQL via executeGraphQl.",
  },
  {
    id: "mercury",
    label: "Mercury",
    auth: { kind: "bearer", env: "MERCURY_API_TOKEN" },
    probe: { op: "getAccounts", expect: hasKey("accounts") },
    credentialUrl: "https://mercury.com/settings/tokens",
    credentialHint: "Read-only token. Requires an approved business bank account.",
    signup: "invite-only",
    notes: "Banking provider — cannot be provisioned on demand. Read-only token only.",
  },
  {
    id: "openai",
    label: "OpenAI",
    auth: { kind: "bearer", env: "OPENAI_API_KEY" },
    probe: { op: "listModels", expect: hasKey("data") },
    credentialUrl: "https://platform.openai.com/api-keys",
    credentialHint: "listModels is free; no token spend.",
    signup: "self-serve",
  },
  {
    id: "posthog",
    label: "PostHog",
    auth: { kind: "bearer", env: "POSTHOG_PERSONAL_API_KEY" },
    probe: { op: "usersList", baseUrlEnv: "POSTHOG_HOST", expect: nonEmpty },
    credentialUrl: "https://us.posthog.com/settings/user-api-keys",
    credentialHint: "Personal API key + host (https://us.posthog.com or eu).",
    signup: "self-serve",
  },
  {
    id: "postgres",
    label: "Postgres",
    auth: { kind: "bearer", env: "POSTGRES_CONNECTION_TOKEN" },
    probe: {
      op: "query",
      args: { sql: "SELECT 1 AS ok" },
      baseUrlEnv: "POSTGRES_HTTP_URL",
      expect: hasKey("rows", "columns"),
    },
    credentialUrl: "https://neon.tech",
    credentialHint: "HTTP-SQL endpoint (Neon/Supabase) + bearer token.",
    signup: "self-serve",
    notes: "Handwritten @utdk/sql module; speaks an HTTP SQL endpoint, not raw wire protocol.",
  },
  {
    id: "sentry",
    label: "Sentry",
    auth: { kind: "bearer", env: "SENTRY_AUTH_TOKEN" },
    probe: { op: "listYourOrganizations", expect: nonEmpty },
    credentialUrl: "https://sentry.io/settings/account/api/auth-tokens/",
    credentialHint: "Auth token with org:read.",
    signup: "self-serve",
  },
  {
    id: "snowflake",
    label: "Snowflake SQL",
    auth: { kind: "bearer", env: "SNOWFLAKE_TOKEN" },
    probe: {
      op: "query",
      args: { sql: "SELECT 1 AS ok" },
      baseUrlEnv: "SNOWFLAKE_ACCOUNT",
      baseUrlTemplate: "https://{value}.snowflakecomputing.com",
      expect: hasKey("rows", "columns"),
    },
    credentialUrl: "https://signup.snowflake.com",
    credentialHint: "30-day trial; keypair-JWT or OAuth token.",
    signup: "self-serve-limited",
    notes: "Handwritten @utdk/sql module.",
  },
  {
    id: "stripe",
    label: "Stripe",
    auth: { kind: "bearer", env: "STRIPE_SECRET_KEY" },
    probe: { op: "getBalance", expect: hasKey("object", "available") },
    credentialUrl: "https://dashboard.stripe.com/test/apikeys",
    credentialHint: "Use the TEST secret key (sk_test_…), never live.",
    signup: "self-serve",
    notes: "Test mode gives a full sandbox — ideal E2E target.",
  },
  {
    id: "zendesk",
    label: "Zendesk",
    auth: { kind: "basic", userEnv: "ZENDESK_EMAIL_TOKEN", passEnv: "ZENDESK_API_TOKEN" },
    probe: {
      op: "listUsers",
      baseUrlEnv: "ZENDESK_SUBDOMAIN",
      baseUrlTemplate: "https://{value}.zendesk.com/api/v2",
      expect: hasKey("users"),
    },
    credentialUrl: "https://developer.zendesk.com/api-reference/introduction/security-and-auth/",
    credentialHint: "ZENDESK_EMAIL_TOKEN must be 'you@example.com/token'.",
    signup: "self-serve-limited",
    notes: "Spec declares bearer, but token auth is Basic email/token:key — descriptor reflects reality.",
  },

  // -------------------------------------------------------------------------
  // API-key-in-custom-header providers
  // -------------------------------------------------------------------------
  {
    id: "datadog",
    label: "Datadog",
    auth: { kind: "apiKey", env: "DATADOG_API_KEY", header: "DD-API-KEY" },
    probe: { op: "listApiKeys", expect: nonEmpty },
    credentialUrl: "https://app.datadoghq.com/organization-settings/api-keys",
    credentialHint: "Needs BOTH DD-API-KEY and DD-APPLICATION-KEY; see notes.",
    signup: "self-serve-limited",
    notes:
      "Two-header auth. The single-header descriptor cannot express it — see README findings; " +
      "listApiKeys will 403 without DD-APPLICATION-KEY.",
  },
  {
    id: "discord",
    label: "Discord",
    auth: { kind: "apiKey", env: "DISCORD_BOT_TOKEN", header: "Authorization", prefix: "Bot " },
    probe: { op: "getMyUser", expect: hasKey("id") },
    credentialUrl: "https://discord.com/developers/applications",
    credentialHint: "Bot token; the 'Bot ' prefix is added automatically.",
    signup: "self-serve",
  },
  {
    id: "elevenlabs",
    label: "ElevenLabs",
    auth: { kind: "apiKey", env: "ELEVENLABS_API_KEY", header: "xi-api-key" },
    probe: { op: "getUserInfo", expect: hasKey("subscription", "user_id") },
    credentialUrl: "https://elevenlabs.io/app/settings/api-keys",
    credentialHint: "Free tier available. getUserInfo consumes no characters.",
    signup: "self-serve",
    notes: "package.json declares no auth scheme despite requiring xi-api-key — see README findings.",
  },
  {
    id: "figma",
    label: "Figma",
    auth: { kind: "apiKey", env: "FIGMA_ACCESS_TOKEN", header: "X-Figma-Token" },
    probe: { op: "getMe", expect: hasKey("id", "email") },
    credentialUrl: "https://www.figma.com/developers/api#access-tokens",
    credentialHint: "Personal access token, file_read scope.",
    signup: "self-serve",
  },
  {
    id: "gemini",
    label: "Google Gemini",
    auth: { kind: "apiKey", env: "GEMINI_API_KEY", header: "x-goog-api-key" },
    probe: { op: "listModels", expect: hasKey("models") },
    credentialUrl: "https://aistudio.google.com/apikey",
    credentialHint: "Free key from AI Studio; listModels costs nothing.",
    signup: "self-serve",
  },
  {
    id: "itglue",
    label: "IT Glue",
    auth: { kind: "apiKey", env: "ITGLUE_API_KEY", header: "x-api-key" },
    probe: { op: "listOrganizations", expect: hasKey("data") },
    credentialUrl: "https://api.itglue.com/developer/",
    credentialHint: "MSP product — no self-serve signup.",
    signup: "invite-only",
  },
  {
    id: "launchdarkly",
    label: "LaunchDarkly",
    auth: { kind: "apiKey", env: "LAUNCHDARKLY_API_KEY", header: "Authorization" },
    probe: { op: "getCallerIdentity", expect: nonEmpty },
    credentialUrl: "https://app.launchdarkly.com/settings/authorization",
    credentialHint: "API access token (reader role is enough).",
    signup: "self-serve-limited",
  },
  {
    id: "pipedrive",
    label: "Pipedrive",
    auth: { kind: "apiKey", env: "PIPEDRIVE_API_TOKEN", header: "x-api-token" },
    probe: { op: "getCurrentUser", expect: hasKey("data") },
    credentialUrl: "https://pipedrive.readme.io/docs/how-to-find-the-api-token",
    credentialHint: "Personal API token from Settings.",
    signup: "self-serve-limited",
  },
  {
    id: "sendgrid",
    label: "SendGrid",
    auth: { kind: "apiKey", env: "SENDGRID_API_KEY", header: "Authorization", prefix: "Bearer " },
    probe: { op: "getScopes", expect: hasKey("scopes") },
    credentialUrl: "https://app.sendgrid.com/settings/api_keys",
    credentialHint: "Restricted key. getScopes sends no mail.",
    signup: "self-serve-limited",
    notes: "Probe never sends email — getScopes only reflects the key's own permissions.",
  },
  {
    id: "hubspot",
    label: "HubSpot",
    auth: { kind: "bearer", env: "HUBSPOT_ACCESS_TOKEN" },
    probe: { op: "get.crm.v3.objects.contactsGetPage", args: { limit: 1 }, expect: hasKey("results") },
    credentialUrl: "https://developers.hubspot.com/docs/api/private-apps",
    credentialHint: "Private-app token with crm.objects.contacts.read.",
    signup: "self-serve",
  },
  {
    id: "notion",
    label: "Notion",
    auth: { kind: "bearer", env: "NOTION_API_KEY" },
    probe: {
      op: "retrieveADatabase",
      args: (f) => ({ database_id: f["NOTION_DATABASE_ID"] }),
      needs: ["NOTION_DATABASE_ID"],
      expect: hasKey("object", "id"),
    },
    credentialUrl: "https://www.notion.so/my-integrations",
    credentialHint: "Internal integration secret; share a database with it and set NOTION_DATABASE_ID.",
    signup: "self-serve",
    notes:
      "Generated surface has no /v1/users/me equivalent, so the probe needs a fixture database. " +
      "Also declares no auth scheme in package.json — see README findings.",
  },
  {
    id: "plaid",
    label: "Plaid",
    auth: { kind: "apiKey", env: "PLAID_CLIENT_ID", header: "PLAID-CLIENT-ID" },
    probe: {
      op: "institutionsGet",
      args: { count: 1, offset: 0, country_codes: ["US"] },
      expect: hasKey("institutions"),
    },
    credentialUrl: "https://dashboard.plaid.com/signup",
    credentialHint: "Sandbox keys are free; needs BOTH PLAID-CLIENT-ID and PLAID-SECRET.",
    signup: "self-serve",
    notes:
      "Two-header auth like Datadog; the single-header descriptor cannot express it — " +
      "see README findings.",
  },

  // -------------------------------------------------------------------------
  // Basic-auth providers
  // -------------------------------------------------------------------------
  {
    id: "jira",
    label: "Jira",
    auth: { kind: "basic", userEnv: "JIRA_EMAIL", passEnv: "JIRA_API_TOKEN" },
    probe: {
      op: "getCurrentUser",
      baseUrlEnv: "JIRA_SITE",
      baseUrlTemplate: "https://{value}.atlassian.net",
      expect: hasKey("accountId"),
    },
    credentialUrl: "https://id.atlassian.com/manage-profile/security/api-tokens",
    credentialHint: "Atlassian API token + account email + site name.",
    signup: "self-serve",
  },
  {
    id: "twilio",
    label: "Twilio",
    auth: { kind: "basic", userEnv: "TWILIO_ACCOUNT_SID", passEnv: "TWILIO_AUTH_TOKEN" },
    probe: {
      op: "fetchAccount",
      args: (f) => ({ Sid: f["TWILIO_ACCOUNT_SID"] }),
      needs: ["TWILIO_ACCOUNT_SID"],
      expect: hasKey("sid", "friendly_name"),
    },
    credentialUrl: "https://console.twilio.com",
    credentialHint: "Account SID + auth token. Trial account is free.",
    signup: "self-serve",
    notes: "Probe fetches the account itself — no SMS sent, no charge.",
  },
  {
    id: "stytch",
    label: "Stytch",
    auth: { kind: "basic", userEnv: "STYTCH_PROJECT_ID", passEnv: "STYTCH_SECRET" },
    unprobed:
      "No read-only identity operation in the generated surface — every op needs a user/session " +
      "fixture. Needs a hand-picked probe; see README findings.",
    credentialUrl: "https://stytch.com/dashboard",
    credentialHint: "Test-environment project id + secret.",
    signup: "self-serve",
  },

  // -------------------------------------------------------------------------
  // OAuth providers. All accept a bearer access token; Google uses a refresh
  // token because its access tokens expire hourly.
  // -------------------------------------------------------------------------
  {
    id: "slack",
    label: "Slack",
    auth: { kind: "bearer", env: "SLACK_BOT_TOKEN" },
    probe: { op: "authTest", expect: hasKey("ok", "user_id") },
    credentialUrl: "https://api.slack.com/apps",
    credentialHint: "Bot token (xoxb-…). authTest needs no scopes.",
    signup: "self-serve",
  },
  {
    id: "spotify",
    label: "Spotify",
    auth: {
      kind: "oauth2Refresh",
      clientIdEnv: "SPOTIFY_CLIENT_ID",
      clientSecretEnv: "SPOTIFY_CLIENT_SECRET",
      refreshTokenEnv: "SPOTIFY_REFRESH_TOKEN",
      tokenUrl: "https://accounts.spotify.com/api/token",
    },
    probe: { op: "getCurrentUsersProfile", expect: hasKey("id") },
    credentialUrl: "https://developer.spotify.com/dashboard",
    credentialHint: "user-read-private scope; one-time authorize to mint the refresh token.",
    signup: "self-serve",
  },
  {
    id: "salesforce",
    label: "Salesforce",
    auth: {
      kind: "oauth2Refresh",
      clientIdEnv: "SALESFORCE_CLIENT_ID",
      clientSecretEnv: "SALESFORCE_CLIENT_SECRET",
      refreshTokenEnv: "SALESFORCE_REFRESH_TOKEN",
      tokenUrl: "https://login.salesforce.com/services/oauth2/token",
    },
    probe: { op: "listSObjects", baseUrlEnv: "SALESFORCE_INSTANCE_URL", expect: hasKey("sobjects") },
    credentialUrl: "https://developer.salesforce.com/signup",
    credentialHint: "Free Developer Edition org; connected app with refresh_token scope.",
    signup: "self-serve",
  },
  {
    id: "google-cloud-run",
    label: "Google Cloud Run",
    auth: googleAuth,
    probe: {
      op: "runProjectsLocationsServicesList",
      args: (f) => ({ parent: `projects/${f["GOOGLE_CLOUD_PROJECT"]}/locations/us-central1` }),
      needs: ["GOOGLE_CLOUD_PROJECT"],
      expect: nonEmpty,
    },
    credentialUrl: "https://console.cloud.google.com/apis/credentials",
    credentialHint: "cloud-platform scope + project id.",
    signup: "self-serve",
  },
  google("google/books", "Google Books", "booksBookshelvesList", {
    probe: {
      op: "booksBookshelvesList",
      args: (f) => ({ userId: f["GOOGLE_BOOKS_USER_ID"] }),
      needs: ["GOOGLE_BOOKS_USER_ID"],
      expect: nonEmpty,
    },
  }),
  google("google/calendar", "Google Calendar", "calendarCalendarListList"),
  google("google/drive", "Google Drive", "driveAboutGet", {
    probe: { op: "driveAboutGet", args: { fields: "user,storageQuota" }, expect: hasKey("user") },
  }),
  google("google/gmail", "Gmail", "gmailUsersGetProfile", {
    probe: { op: "gmailUsersGetProfile", args: { userId: "me" }, expect: hasKey("emailAddress") },
    notes: "Read-only profile probe. The suite never sends mail.",
  }),
  google("google/tasks", "Google Tasks", "tasksTasklistsList"),
  google("google/docs", "Google Docs", "docsDocumentsGet", {
    probe: {
      op: "docsDocumentsGet",
      args: (f) => ({ documentId: f["GOOGLE_DOC_ID"] }),
      needs: ["GOOGLE_DOC_ID"],
      expect: hasKey("documentId"),
    },
    notes: "Surface has no list operation — needs a fixture document.",
  }),
  google("google/sheets", "Google Sheets", "sheetsSpreadsheetsGet", {
    probe: {
      op: "sheetsSpreadsheetsGet",
      args: (f) => ({ spreadsheetId: f["GOOGLE_SHEET_ID"] }),
      needs: ["GOOGLE_SHEET_ID"],
      expect: hasKey("spreadsheetId"),
    },
    notes: "Surface has no list operation — needs a fixture spreadsheet.",
  }),
  google("google/slides", "Google Slides", "slidesPresentationsGet", {
    probe: {
      op: "slidesPresentationsGet",
      args: (f) => ({ presentationId: f["GOOGLE_SLIDES_ID"] }),
      needs: ["GOOGLE_SLIDES_ID"],
      expect: hasKey("presentationId"),
    },
    notes: "Surface has no list operation — needs a fixture presentation.",
  }),
  google("google/forms", "Google Forms", "formsFormsGet", {
    probe: {
      op: "formsFormsGet",
      args: (f) => ({ formId: f["GOOGLE_FORM_ID"] }),
      needs: ["GOOGLE_FORM_ID"],
      expect: hasKey("formId"),
    },
    notes: "Surface has no list operation — needs a fixture form.",
  }),
  google("google/people", "Google People", "peopleContactGroupsList"),
  google("google/youtube", "YouTube", "youtubeChannelsList", {
    probe: { op: "youtubeChannelsList", args: { part: "id", mine: true }, expect: nonEmpty },
  }),

  // -------------------------------------------------------------------------
  // Providers with no probe yet — covered structurally by the generation test.
  // -------------------------------------------------------------------------
  {
    id: "producthunt",
    label: "Product Hunt",
    auth: { kind: "bearer", env: "PRODUCTHUNT_TOKEN" },
    unprobed:
      "Generated surface is EMPTY (0 operations) — the bundler produced no metadata. " +
      "Regeneration bug, see README findings.",
    knownBroken:
      "metadata.ts holds 0 operations and the provider is absent from registry.json. " +
      "Product Hunt's API is GraphQL-only, so the OpenAPI-driven bundler had nothing to " +
      "generate from — it needs the hand-written GraphQL treatment linear got.",
    credentialUrl: "https://api.producthunt.com/v2/oauth/applications",
    signup: "self-serve",
  },
  {
    id: "telegram",
    label: "Telegram",
    auth: { kind: "none" },
    unprobed:
      "Telegram puts the bot token in the URL path (/bot<token>/getMe), not a header. " +
      "The credential model cannot express it; needs a baseUrl-injection path.",
    credentialUrl: "https://core.telegram.org/bots#how-do-i-create-a-bot",
    signup: "self-serve",
    notes: "postGetme exists but is unreachable without path-embedded auth.",
  },

  // -------------------------------------------------------------------------
  // Namespace shims. `@utdk/clients/google` etc. only re-export their children; the
  // testable surfaces are the child providers above.
  // -------------------------------------------------------------------------
  {
    id: "google",
    label: "Google (namespace)",
    auth: { kind: "none" },
    shim: true,
    unprobed: "Namespace re-export of google/* — the twelve children carry the probes.",
    signup: "not-applicable",
  },
  {
    id: "cloudflare",
    label: "Cloudflare (namespace)",
    auth: { kind: "none" },
    shim: true,
    unprobed: "Namespace re-export of cloudflare/sandbox.",
    signup: "not-applicable",
  },
  {
    id: "fly",
    label: "Fly.io (namespace)",
    auth: { kind: "none" },
    shim: true,
    unprobed: "Namespace re-export of fly/sprites.",
    signup: "not-applicable",
  },

  // -------------------------------------------------------------------------
  // Sandbox execution backends. These are `@utdk/sandbox` drivers, not REST
  // providers: a probe would provision and bill a real compute sandbox, so
  // they stay covered by apps/workspace/tests/sandbox*.test.ts instead.
  // -------------------------------------------------------------------------
  {
    id: "cloudflare/sandbox",
    label: "Cloudflare Sandbox",
    auth: { kind: "bearer", env: "CLOUDFLARE_API_TOKEN" },
    unprobed:
      "Sandbox driver, not a REST surface — probing it would provision billable compute. " +
      "Covered by apps/workspace/tests/sandbox.test.ts and sandbox-scheduling.test.ts.",
    credentialUrl: "https://dash.cloudflare.com/profile/api-tokens",
    signup: "self-serve",
  },
  {
    id: "fly/sprites",
    label: "Fly.io Sprites",
    auth: { kind: "bearer", env: "FLY_API_TOKEN" },
    unprobed:
      "Sandbox driver, not a REST surface — probing it would provision billable compute. " +
      "Covered by apps/workspace/tests/sandbox.test.ts and sandbox-scheduling.test.ts.",
    credentialUrl: "https://fly.io/user/personal_access_tokens",
    signup: "self-serve",
  },
];

/**
 * Zero-credential gateway canary.
 *
 * The gateway flows above all need a provider credential, which means a
 * secret-less CI run would never exercise the gateway at all. GitHub's
 * `/meta` endpoint answers unauthenticated and `github`'s spec server URL is
 * absolute, so this one call proves the whole backend path — route → credential
 * resolution (with none present) → isolate → provider module → live HTTP —
 * with nothing configured.
 *
 * It also exercises the heaviest module in the registry: github is a 12MB
 * OpenAPI document with 1204 operations, so a regression in lazy document
 * loading or client caching shows up here first.
 */
export const GATEWAY_CANARY = {
  provider: "github",
  op: "meta.get",
  args: {},
  expect: hasKey("verifiable_password_authentication", "ssh_keys", "hooks"),
} as const;

/** Providers that have a runnable probe. */
export const PROBED = PROVIDERS.filter((entry): entry is ProviderEntry & { probe: ProviderProbe } =>
  Boolean(entry.probe),
);

export function providerById(id: string): ProviderEntry | undefined {
  return PROVIDERS.find((entry) => entry.id === id);
}

/**
 * Client factory name for a provider id — mirrors `toClientFactoryName` in
 * `apps/workspace/src/isolate.ts`. The generation test asserts the module
 * actually exports this, which keeps the two in sync.
 */
export function factoryName(id: string): string {
  const pascal = id
    .split(/[-_/.]/)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase())
    .join("");
  return `create${pascal}Client`;
}

/** Import specifier for a provider's generated module. */
export function moduleSpecifier(id: string): string {
  return `@utdk/clients/${id}`;
}
