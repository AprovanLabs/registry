# Secret Scanning

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.secretScanning.listAlertsForOrg`

- **HTTP**: `GET /orgs/{org}/secret-scanning/alerts`
- **What it does**: List secret scanning alerts for an organization
- **OpenAPI operationId**: `secret-scanning/list-alerts-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; state?: "open" | "resolved"; secret_type?: string; exclude_secret_types?: string; exclude_providers?: string; providers?: string; resolution?: string; assignee?: string; sort?: "created" | "updated"; direction?: "asc" | "desc"; page?: number; per_page?: number; before?: string; after?: string; validity?: string; is_publicly_leaked?: boolean; is_multi_repo?: boolean; hide_secret?: boolean; is_bypassed?: boolean }`
- Client transport options: None

**Outputs**

- Client return type: `({ number?: number; created_at?: string; updated_at?: string | null; url?: string; html_url?: string; locations_url?: string; state?: "open" | "resolved"; resolution?: "false_positive" | "wont_fix" | "revoked" | "used_i...`
- OpenAPI response codes: `200`, `404`, `503`

```ts
import github from "@utdk/github";

type SecretScanningListAlertsForOrgInput = Parameters<typeof github.secretScanning.listAlertsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type SecretScanningListAlertsForOrgOutput = Awaited<ReturnType<typeof github.secretScanning.listAlertsForOrg>>;

const input: SecretScanningListAlertsForOrgInput = {} as { org: string; state?: "open" | "resolved"; secret_type?: string; exclude_secret_types?: string; exclude_providers?: string; providers?: string; resolution?: string; assignee?: string; sort?: "created" | "updated"; direction?: "asc" | "desc"; page?: number; per_page?: number; before?: string; after?: string; validity?: string; is_publicly_leaked?: boolean; is_multi_repo?: boolean; hide_secret?: boolean; is_bypassed?: boolean };
const result: SecretScanningListAlertsForOrgOutput = await github.secretScanning.listAlertsForOrg(input);

// Result shape (from schema): ({ number?: number; created_at?: string; updated_at?: string | null; url?: string; html_url?: string; locations_url?: string; state?: "open" | "resolved"; resolution?: "false_positive" | "wont_fix" | "revoked" | "used_i...
```

### `github.secretScanning.listOrgPatternConfigs`

- **HTTP**: `GET /orgs/{org}/secret-scanning/pattern-configurations`
- **What it does**: List organization pattern configurations
- **OpenAPI operationId**: `secret-scanning/list-org-pattern-configs`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ pattern_config_version?: string | null; provider_pattern_overrides?: ({ token_type?: string; custom_pattern_version?: string | null; slug?: string; display_name?: string; alert_total?: number; alert_total_percentage?:...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type SecretScanningListOrgPatternConfigsInput = Parameters<typeof github.secretScanning.listOrgPatternConfigs> extends [infer T, ...unknown[]] ? T : undefined;
type SecretScanningListOrgPatternConfigsOutput = Awaited<ReturnType<typeof github.secretScanning.listOrgPatternConfigs>>;

const input: SecretScanningListOrgPatternConfigsInput = {} as { org: string };
const result: SecretScanningListOrgPatternConfigsOutput = await github.secretScanning.listOrgPatternConfigs(input);

// Result shape (from schema): { pattern_config_version?: string | null; provider_pattern_overrides?: ({ token_type?: string; custom_pattern_version?: string | null; slug?: string; display_name?: string; alert_total?: number; alert_total_percentage?:...
```

### `github.secretScanning.updateOrgPatternConfigs`

- **HTTP**: `PATCH /orgs/{org}/secret-scanning/pattern-configurations`
- **What it does**: Update organization pattern configurations
- **OpenAPI operationId**: `secret-scanning/update-org-pattern-configs`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ pattern_config_version?: string | null; provider_pattern_settings?: ({ token_type?: string; push_protection_setting?: "not-set" | "disabled" | "enabled" })[]; custom_pattern_settings?: ({ token_type?: string; custom_pattern_version?: string | null; push_protection_setting?: "disabled" | "enabled" })[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ pattern_config_version?: string }`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type SecretScanningUpdateOrgPatternConfigsInput = Parameters<typeof github.secretScanning.updateOrgPatternConfigs> extends [infer T, ...unknown[]] ? T : undefined;
type SecretScanningUpdateOrgPatternConfigsOutput = Awaited<ReturnType<typeof github.secretScanning.updateOrgPatternConfigs>>;

const input: SecretScanningUpdateOrgPatternConfigsInput = {} as { pattern_config_version?: string | null; provider_pattern_settings?: ({ token_type?: string; push_protection_setting?: "not-set" | "disabled" | "enabled" })[]; custom_pattern_settings?: ({ token_type?: string; custom_pattern_version?: string | null; push_protection_setting?: "disabled" | "enabled" })[]; org: string };
const result: SecretScanningUpdateOrgPatternConfigsOutput = await github.secretScanning.updateOrgPatternConfigs(input);

// Result shape (from schema): { pattern_config_version?: string }
```

### `github.secretScanning.listAlertsForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/secret-scanning/alerts`
- **What it does**: List secret scanning alerts for a repository
- **OpenAPI operationId**: `secret-scanning/list-alerts-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; state?: "open" | "resolved"; secret_type?: string; exclude_secret_types?: string; exclude_providers?: string; providers?: string; resolution?: string; assignee?: string; sort?: "created" | "updated"; direction?: "asc" | "desc"; page?: number; per_page?: number; before?: string; after?: string; validity?: string; is_publicly_leaked?: boolean; is_multi_repo?: boolean; hide_secret?: boolean; is_bypassed?: boolean }`
- Client transport options: None

**Outputs**

- Client return type: `({ number?: number; created_at?: string; updated_at?: string | null; url?: string; html_url?: string; locations_url?: string; state?: "open" | "resolved"; resolution?: "false_positive" | "wont_fix" | "revoked" | "used_i...`
- OpenAPI response codes: `200`, `404`, `503`

```ts
import github from "@utdk/github";

type SecretScanningListAlertsForRepoInput = Parameters<typeof github.secretScanning.listAlertsForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type SecretScanningListAlertsForRepoOutput = Awaited<ReturnType<typeof github.secretScanning.listAlertsForRepo>>;

const input: SecretScanningListAlertsForRepoInput = {} as { owner: string; repo: string; state?: "open" | "resolved"; secret_type?: string; exclude_secret_types?: string; exclude_providers?: string; providers?: string; resolution?: string; assignee?: string; sort?: "created" | "updated"; direction?: "asc" | "desc"; page?: number; per_page?: number; before?: string; after?: string; validity?: string; is_publicly_leaked?: boolean; is_multi_repo?: boolean; hide_secret?: boolean; is_bypassed?: boolean };
const result: SecretScanningListAlertsForRepoOutput = await github.secretScanning.listAlertsForRepo(input);

// Result shape (from schema): ({ number?: number; created_at?: string; updated_at?: string | null; url?: string; html_url?: string; locations_url?: string; state?: "open" | "resolved"; resolution?: "false_positive" | "wont_fix" | "revoked" | "used_i...
```

### `github.secretScanning.getAlert`

- **HTTP**: `GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`
- **What it does**: Get a secret scanning alert
- **OpenAPI operationId**: `secret-scanning/get-alert`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; alert_number: number; hide_secret?: boolean }`
- Client transport options: None

**Outputs**

- Client return type: `{ number?: number; created_at?: string; updated_at?: string | null; url?: string; html_url?: string; locations_url?: string; state?: "open" | "resolved"; resolution?: "false_positive" | "wont_fix" | "revoked" | "used_in...`
- OpenAPI response codes: `200`, `304`, `404`, `503`

```ts
import github from "@utdk/github";

type SecretScanningGetAlertInput = Parameters<typeof github.secretScanning.getAlert> extends [infer T, ...unknown[]] ? T : undefined;
type SecretScanningGetAlertOutput = Awaited<ReturnType<typeof github.secretScanning.getAlert>>;

const input: SecretScanningGetAlertInput = {} as { owner: string; repo: string; alert_number: number; hide_secret?: boolean };
const result: SecretScanningGetAlertOutput = await github.secretScanning.getAlert(input);

// Result shape (from schema): { number?: number; created_at?: string; updated_at?: string | null; url?: string; html_url?: string; locations_url?: string; state?: "open" | "resolved"; resolution?: "false_positive" | "wont_fix" | "revoked" | "used_in...
```

### `github.secretScanning.updateAlert`

- **HTTP**: `PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`
- **What it does**: Update a secret scanning alert
- **OpenAPI operationId**: `secret-scanning/update-alert`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: unknown | unknown | unknown; owner: string; repo: string; alert_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ number?: number; created_at?: string; updated_at?: string | null; url?: string; html_url?: string; locations_url?: string; state?: "open" | "resolved"; resolution?: "false_positive" | "wont_fix" | "revoked" | "used_in...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type SecretScanningUpdateAlertInput = Parameters<typeof github.secretScanning.updateAlert> extends [infer T, ...unknown[]] ? T : undefined;
type SecretScanningUpdateAlertOutput = Awaited<ReturnType<typeof github.secretScanning.updateAlert>>;

const input: SecretScanningUpdateAlertInput = {} as { body: unknown | unknown | unknown; owner: string; repo: string; alert_number: number };
const result: SecretScanningUpdateAlertOutput = await github.secretScanning.updateAlert(input);

// Result shape (from schema): { number?: number; created_at?: string; updated_at?: string | null; url?: string; html_url?: string; locations_url?: string; state?: "open" | "resolved"; resolution?: "false_positive" | "wont_fix" | "revoked" | "used_in...
```

### `github.secretScanning.listLocationsForAlert`

- **HTTP**: `GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations`
- **What it does**: List locations for a secret scanning alert
- **OpenAPI operationId**: `secret-scanning/list-locations-for-alert`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; alert_number: number; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ type?: "commit" | "wiki_commit" | "issue_title" | "issue_body" | "issue_comment" | "discussion_title" | "discussion_body" | "discussion_comment" | "pull_request_title" | "pull_request_body" | "pull_request_comment" |...`
- OpenAPI response codes: `200`, `404`, `503`

```ts
import github from "@utdk/github";

type SecretScanningListLocationsForAlertInput = Parameters<typeof github.secretScanning.listLocationsForAlert> extends [infer T, ...unknown[]] ? T : undefined;
type SecretScanningListLocationsForAlertOutput = Awaited<ReturnType<typeof github.secretScanning.listLocationsForAlert>>;

const input: SecretScanningListLocationsForAlertInput = {} as { owner: string; repo: string; alert_number: number; page?: number; per_page?: number };
const result: SecretScanningListLocationsForAlertOutput = await github.secretScanning.listLocationsForAlert(input);

// Result shape (from schema): ({ type?: "commit" | "wiki_commit" | "issue_title" | "issue_body" | "issue_comment" | "discussion_title" | "discussion_body" | "discussion_comment" | "pull_request_title" | "pull_request_body" | "pull_request_comment" |...
```

### `github.secretScanning.createPushProtectionBypass`

- **HTTP**: `POST /repos/{owner}/{repo}/secret-scanning/push-protection-bypasses`
- **What it does**: Create a push protection bypass
- **OpenAPI operationId**: `secret-scanning/create-push-protection-bypass`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ reason: "false_positive" | "used_in_tests" | "will_fix_later"; placeholder_id: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ reason?: "false_positive" | "used_in_tests" | "will_fix_later"; expire_at?: string | null; token_type?: string }`
- OpenAPI response codes: `200`, `403`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type SecretScanningCreatePushProtectionBypassInput = Parameters<typeof github.secretScanning.createPushProtectionBypass> extends [infer T, ...unknown[]] ? T : undefined;
type SecretScanningCreatePushProtectionBypassOutput = Awaited<ReturnType<typeof github.secretScanning.createPushProtectionBypass>>;

const input: SecretScanningCreatePushProtectionBypassInput = {} as { reason: "false_positive" | "used_in_tests" | "will_fix_later"; placeholder_id: string; owner: string; repo: string };
const result: SecretScanningCreatePushProtectionBypassOutput = await github.secretScanning.createPushProtectionBypass(input);

// Result shape (from schema): { reason?: "false_positive" | "used_in_tests" | "will_fix_later"; expire_at?: string | null; token_type?: string }
```

### `github.secretScanning.getScanHistory`

- **HTTP**: `GET /repos/{owner}/{repo}/secret-scanning/scan-history`
- **What it does**: Get secret scanning scan history for a repository
- **OpenAPI operationId**: `secret-scanning/get-scan-history`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ incremental_scans?: ({ type?: string; status?: string; completed_at?: string | null; started_at?: string | null })[]; pattern_update_scans?: ({ type?: string; status?: string; completed_at?: string | null; started_at?...`
- OpenAPI response codes: `200`, `404`, `503`

```ts
import github from "@utdk/github";

type SecretScanningGetScanHistoryInput = Parameters<typeof github.secretScanning.getScanHistory> extends [infer T, ...unknown[]] ? T : undefined;
type SecretScanningGetScanHistoryOutput = Awaited<ReturnType<typeof github.secretScanning.getScanHistory>>;

const input: SecretScanningGetScanHistoryInput = {} as { owner: string; repo: string };
const result: SecretScanningGetScanHistoryOutput = await github.secretScanning.getScanHistory(input);

// Result shape (from schema): { incremental_scans?: ({ type?: string; status?: string; completed_at?: string | null; started_at?: string | null })[]; pattern_update_scans?: ({ type?: string; status?: string; completed_at?: string | null; started_at?...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
