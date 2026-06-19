# Code Scanning

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.codeScanning.listAlertsForOrg`

- **HTTP**: `GET /orgs/{org}/code-scanning/alerts`
- **What it does**: List code scanning alerts for an organization
- **OpenAPI operationId**: `code-scanning/list-alerts-for-org`
- **Path params**: None
- **Query params**: `state`, `sort`, `severity`, `assignees`
- **Response codes**: `200`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; tool_name?: string; tool_guid?: string | null; before?: string; after?: string; page?: number; per_page?: number; direction?: "asc" | "desc"; state?: "open" | "closed" | "dismissed" | "fixed"; sort?: "created" | "updated"; severity?: "critical" | "high" | "medium" | "low" | "warning" | "note" | "error"; assignees?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ number: number; created_at: string; updated_at?: string; url: string; html_url: string; instances_url: string; state: "open" | "dismissed" | "fixed" | null; fixed_at?: string | null; dismissed_by: { name?: string | n...`
- OpenAPI response codes: `200`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeScanningListAlertsForOrgInput = Parameters<typeof github.codeScanning.listAlertsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningListAlertsForOrgOutput = Awaited<ReturnType<typeof github.codeScanning.listAlertsForOrg>>;

const input: CodeScanningListAlertsForOrgInput = {} as { org: string; tool_name?: string; tool_guid?: string | null; before?: string; after?: string; page?: number; per_page?: number; direction?: "asc" | "desc"; state?: "open" | "closed" | "dismissed" | "fixed"; sort?: "created" | "updated"; severity?: "critical" | "high" | "medium" | "low" | "warning" | "note" | "error"; assignees?: string };
const result: CodeScanningListAlertsForOrgOutput = await github.codeScanning.listAlertsForOrg(input);

// Result shape (from schema): ({ number: number; created_at: string; updated_at?: string; url: string; html_url: string; instances_url: string; state: "open" | "dismissed" | "fixed" | null; fixed_at?: string | null; dismissed_by: { name?: string | n...
```

### `github.codeScanning.listAlertsForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/code-scanning/alerts`
- **What it does**: List code scanning alerts for a repository
- **OpenAPI operationId**: `code-scanning/list-alerts-for-repo`
- **Path params**: None
- **Query params**: `sort`, `state`, `severity`, `assignees`
- **Response codes**: `200`, `304`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; tool_name?: string; tool_guid?: string | null; page?: number; per_page?: number; ref?: string; pr?: number; direction?: "asc" | "desc"; before?: string; after?: string; sort?: "created" | "updated"; state?: "open" | "closed" | "dismissed" | "fixed"; severity?: "critical" | "high" | "medium" | "low" | "warning" | "note" | "error"; assignees?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ number: number; created_at: string; updated_at?: string; url: string; html_url: string; instances_url: string; state: "open" | "dismissed" | "fixed" | null; fixed_at?: string | null; dismissed_by: { name?: string | n...`
- OpenAPI response codes: `200`, `304`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeScanningListAlertsForRepoInput = Parameters<typeof github.codeScanning.listAlertsForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningListAlertsForRepoOutput = Awaited<ReturnType<typeof github.codeScanning.listAlertsForRepo>>;

const input: CodeScanningListAlertsForRepoInput = {} as { owner: string; repo: string; tool_name?: string; tool_guid?: string | null; page?: number; per_page?: number; ref?: string; pr?: number; direction?: "asc" | "desc"; before?: string; after?: string; sort?: "created" | "updated"; state?: "open" | "closed" | "dismissed" | "fixed"; severity?: "critical" | "high" | "medium" | "low" | "warning" | "note" | "error"; assignees?: string };
const result: CodeScanningListAlertsForRepoOutput = await github.codeScanning.listAlertsForRepo(input);

// Result shape (from schema): ({ number: number; created_at: string; updated_at?: string; url: string; html_url: string; instances_url: string; state: "open" | "dismissed" | "fixed" | null; fixed_at?: string | null; dismissed_by: { name?: string | n...
```

### `github.codeScanning.getAlert`

- **HTTP**: `GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`
- **What it does**: Get a code scanning alert
- **OpenAPI operationId**: `code-scanning/get-alert`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; alert_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ number: number; created_at: string; updated_at?: string; url: string; html_url: string; instances_url: string; state: "open" | "dismissed" | "fixed" | null; fixed_at?: string | null; dismissed_by: { name?: string | nu...`
- OpenAPI response codes: `200`, `304`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeScanningGetAlertInput = Parameters<typeof github.codeScanning.getAlert> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningGetAlertOutput = Awaited<ReturnType<typeof github.codeScanning.getAlert>>;

const input: CodeScanningGetAlertInput = {} as { owner: string; repo: string; alert_number: number };
const result: CodeScanningGetAlertOutput = await github.codeScanning.getAlert(input);

// Result shape (from schema): { number: number; created_at: string; updated_at?: string; url: string; html_url: string; instances_url: string; state: "open" | "dismissed" | "fixed" | null; fixed_at?: string | null; dismissed_by: { name?: string | nu...
```

### `github.codeScanning.updateAlert`

- **HTTP**: `PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`
- **What it does**: Update a code scanning alert
- **OpenAPI operationId**: `code-scanning/update-alert`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: unknown | unknown; owner: string; repo: string; alert_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ number: number; created_at: string; updated_at?: string; url: string; html_url: string; instances_url: string; state: "open" | "dismissed" | "fixed" | null; fixed_at?: string | null; dismissed_by: { name?: string | nu...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeScanningUpdateAlertInput = Parameters<typeof github.codeScanning.updateAlert> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningUpdateAlertOutput = Awaited<ReturnType<typeof github.codeScanning.updateAlert>>;

const input: CodeScanningUpdateAlertInput = {} as { body: unknown | unknown; owner: string; repo: string; alert_number: number };
const result: CodeScanningUpdateAlertOutput = await github.codeScanning.updateAlert(input);

// Result shape (from schema): { number: number; created_at: string; updated_at?: string; url: string; html_url: string; instances_url: string; state: "open" | "dismissed" | "fixed" | null; fixed_at?: string | null; dismissed_by: { name?: string | nu...
```

### `github.codeScanning.getAutofix`

- **HTTP**: `GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix`
- **What it does**: Get the status of an autofix for a code scanning alert
- **OpenAPI operationId**: `code-scanning/get-autofix`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; alert_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ status: "pending" | "error" | "success" | "outdated"; description: string | null; started_at: string }`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeScanningGetAutofixInput = Parameters<typeof github.codeScanning.getAutofix> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningGetAutofixOutput = Awaited<ReturnType<typeof github.codeScanning.getAutofix>>;

const input: CodeScanningGetAutofixInput = {} as { owner: string; repo: string; alert_number: number };
const result: CodeScanningGetAutofixOutput = await github.codeScanning.getAutofix(input);

// Result shape (from schema): { status: "pending" | "error" | "success" | "outdated"; description: string | null; started_at: string }
```

### `github.codeScanning.createAutofix`

- **HTTP**: `POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix`
- **What it does**: Create an autofix for a code scanning alert
- **OpenAPI operationId**: `code-scanning/create-autofix`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `202`, `400`, `403`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; alert_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ status: "pending" | "error" | "success" | "outdated"; description: string | null; started_at: string }`
- OpenAPI response codes: `200`, `202`, `400`, `403`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type CodeScanningCreateAutofixInput = Parameters<typeof github.codeScanning.createAutofix> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningCreateAutofixOutput = Awaited<ReturnType<typeof github.codeScanning.createAutofix>>;

const input: CodeScanningCreateAutofixInput = {} as { owner: string; repo: string; alert_number: number };
const result: CodeScanningCreateAutofixOutput = await github.codeScanning.createAutofix(input);

// Result shape (from schema): { status: "pending" | "error" | "success" | "outdated"; description: string | null; started_at: string }
```

### `github.codeScanning.commitAutofix`

- **HTTP**: `POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix/commits`
- **What it does**: Commit an autofix for a code scanning alert
- **OpenAPI operationId**: `code-scanning/commit-autofix`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `400`, `403`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ target_ref?: string; message?: string; owner: string; repo: string; alert_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ target_ref?: string; sha?: string }`
- OpenAPI response codes: `201`, `400`, `403`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type CodeScanningCommitAutofixInput = Parameters<typeof github.codeScanning.commitAutofix> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningCommitAutofixOutput = Awaited<ReturnType<typeof github.codeScanning.commitAutofix>>;

const input: CodeScanningCommitAutofixInput = {} as { target_ref?: string; message?: string; owner: string; repo: string; alert_number: number };
const result: CodeScanningCommitAutofixOutput = await github.codeScanning.commitAutofix(input);

// Result shape (from schema): { target_ref?: string; sha?: string }
```

### `github.codeScanning.listAlertInstances`

- **HTTP**: `GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances`
- **What it does**: List instances of a code scanning alert
- **OpenAPI operationId**: `code-scanning/list-alert-instances`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; alert_number: number; page?: number; per_page?: number; ref?: string; pr?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ ref?: string; analysis_key?: string; environment?: string; category?: string; state?: "open" | "fixed" | null; commit_sha?: string; message?: { text?: string }; location?: { path?: string; start_line?: number; end_li...`
- OpenAPI response codes: `200`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeScanningListAlertInstancesInput = Parameters<typeof github.codeScanning.listAlertInstances> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningListAlertInstancesOutput = Awaited<ReturnType<typeof github.codeScanning.listAlertInstances>>;

const input: CodeScanningListAlertInstancesInput = {} as { owner: string; repo: string; alert_number: number; page?: number; per_page?: number; ref?: string; pr?: number };
const result: CodeScanningListAlertInstancesOutput = await github.codeScanning.listAlertInstances(input);

// Result shape (from schema): ({ ref?: string; analysis_key?: string; environment?: string; category?: string; state?: "open" | "fixed" | null; commit_sha?: string; message?: { text?: string }; location?: { path?: string; start_line?: number; end_li...
```

### `github.codeScanning.listRecentAnalyses`

- **HTTP**: `GET /repos/{owner}/{repo}/code-scanning/analyses`
- **What it does**: List code scanning analyses for a repository
- **OpenAPI operationId**: `code-scanning/list-recent-analyses`
- **Path params**: None
- **Query params**: `ref`, `sarif_id`, `sort`
- **Response codes**: `200`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; tool_name?: string; tool_guid?: string | null; page?: number; per_page?: number; pr?: number; ref?: string; sarif_id?: string; direction?: "asc" | "desc"; sort?: "created" }`
- Client transport options: None

**Outputs**

- Client return type: `({ ref: string; commit_sha: string; analysis_key: string; environment: string; category?: string; error: string; created_at: string; results_count: number; rules_count: number; id: number; url: string; sarif_id: string;...`
- OpenAPI response codes: `200`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeScanningListRecentAnalysesInput = Parameters<typeof github.codeScanning.listRecentAnalyses> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningListRecentAnalysesOutput = Awaited<ReturnType<typeof github.codeScanning.listRecentAnalyses>>;

const input: CodeScanningListRecentAnalysesInput = {} as { owner: string; repo: string; tool_name?: string; tool_guid?: string | null; page?: number; per_page?: number; pr?: number; ref?: string; sarif_id?: string; direction?: "asc" | "desc"; sort?: "created" };
const result: CodeScanningListRecentAnalysesOutput = await github.codeScanning.listRecentAnalyses(input);

// Result shape (from schema): ({ ref: string; commit_sha: string; analysis_key: string; environment: string; category?: string; error: string; created_at: string; results_count: number; rules_count: number; id: number; url: string; sarif_id: string;...
```

### `github.codeScanning.deleteAnalysis`

- **HTTP**: `DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`
- **What it does**: Delete a code scanning analysis from a repository
- **OpenAPI operationId**: `code-scanning/delete-analysis`
- **Path params**: `analysis_id`
- **Query params**: `confirm_delete`
- **Response codes**: `200`, `400`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; analysis_id: number; confirm_delete?: string | null }`
- Client transport options: None

**Outputs**

- Client return type: `{ next_analysis_url: string | null; confirm_delete_url: string | null }`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeScanningDeleteAnalysisInput = Parameters<typeof github.codeScanning.deleteAnalysis> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningDeleteAnalysisOutput = Awaited<ReturnType<typeof github.codeScanning.deleteAnalysis>>;

const input: CodeScanningDeleteAnalysisInput = {} as { owner: string; repo: string; analysis_id: number; confirm_delete?: string | null };
const result: CodeScanningDeleteAnalysisOutput = await github.codeScanning.deleteAnalysis(input);

// Result shape (from schema): { next_analysis_url: string | null; confirm_delete_url: string | null }
```

### `github.codeScanning.getAnalysis`

- **HTTP**: `GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`
- **What it does**: Get a code scanning analysis for a repository
- **OpenAPI operationId**: `code-scanning/get-analysis`
- **Path params**: `analysis_id`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; analysis_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ ref: string; commit_sha: string; analysis_key: string; environment: string; category?: string; error: string; created_at: string; results_count: number; rules_count: number; id: number; url: string; sarif_id: string; ...`
- OpenAPI response codes: `200`, `403`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type CodeScanningGetAnalysisInput = Parameters<typeof github.codeScanning.getAnalysis> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningGetAnalysisOutput = Awaited<ReturnType<typeof github.codeScanning.getAnalysis>>;

const input: CodeScanningGetAnalysisInput = {} as { owner: string; repo: string; analysis_id: number };
const result: CodeScanningGetAnalysisOutput = await github.codeScanning.getAnalysis(input);

// Result shape (from schema): { ref: string; commit_sha: string; analysis_key: string; environment: string; category?: string; error: string; created_at: string; results_count: number; rules_count: number; id: number; url: string; sarif_id: string; ...
```

### `github.codeScanning.listCodeqlDatabases`

- **HTTP**: `GET /repos/{owner}/{repo}/code-scanning/codeql/databases`
- **What it does**: List CodeQL databases for a repository
- **OpenAPI operationId**: `code-scanning/list-codeql-databases`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; name: string; language: string; uploader: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: ...`
- OpenAPI response codes: `200`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeScanningListCodeqlDatabasesInput = Parameters<typeof github.codeScanning.listCodeqlDatabases> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningListCodeqlDatabasesOutput = Awaited<ReturnType<typeof github.codeScanning.listCodeqlDatabases>>;

const input: CodeScanningListCodeqlDatabasesInput = {} as { owner: string; repo: string };
const result: CodeScanningListCodeqlDatabasesOutput = await github.codeScanning.listCodeqlDatabases(input);

// Result shape (from schema): ({ id: number; name: string; language: string; uploader: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: ...
```

### `github.codeScanning.deleteCodeqlDatabase`

- **HTTP**: `DELETE /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`
- **What it does**: Delete a CodeQL database
- **OpenAPI operationId**: `code-scanning/delete-codeql-database`
- **Path params**: `language`
- **Query params**: None
- **Response codes**: `204`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; language: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeScanningDeleteCodeqlDatabaseInput = Parameters<typeof github.codeScanning.deleteCodeqlDatabase> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningDeleteCodeqlDatabaseOutput = Awaited<ReturnType<typeof github.codeScanning.deleteCodeqlDatabase>>;

const input: CodeScanningDeleteCodeqlDatabaseInput = {} as { owner: string; repo: string; language: string };
const result: CodeScanningDeleteCodeqlDatabaseOutput = await github.codeScanning.deleteCodeqlDatabase(input);

// Result shape (from schema): unknown
```

### `github.codeScanning.getCodeqlDatabase`

- **HTTP**: `GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`
- **What it does**: Get a CodeQL database for a repository
- **OpenAPI operationId**: `code-scanning/get-codeql-database`
- **Path params**: `language`
- **Query params**: None
- **Response codes**: `200`, `302`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; language: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; language: string; uploader: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: s...`
- OpenAPI response codes: `200`, `302`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeScanningGetCodeqlDatabaseInput = Parameters<typeof github.codeScanning.getCodeqlDatabase> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningGetCodeqlDatabaseOutput = Awaited<ReturnType<typeof github.codeScanning.getCodeqlDatabase>>;

const input: CodeScanningGetCodeqlDatabaseInput = {} as { owner: string; repo: string; language: string };
const result: CodeScanningGetCodeqlDatabaseOutput = await github.codeScanning.getCodeqlDatabase(input);

// Result shape (from schema): { id: number; name: string; language: string; uploader: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: s...
```

### `github.codeScanning.createVariantAnalysis`

- **HTTP**: `POST /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses`
- **What it does**: Create a CodeQL variant analysis
- **OpenAPI operationId**: `code-scanning/create-variant-analysis`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: unknown | unknown | unknown; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; controller_repo: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravat...`
- OpenAPI response codes: `201`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type CodeScanningCreateVariantAnalysisInput = Parameters<typeof github.codeScanning.createVariantAnalysis> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningCreateVariantAnalysisOutput = Awaited<ReturnType<typeof github.codeScanning.createVariantAnalysis>>;

const input: CodeScanningCreateVariantAnalysisInput = {} as { body: unknown | unknown | unknown; owner: string; repo: string };
const result: CodeScanningCreateVariantAnalysisOutput = await github.codeScanning.createVariantAnalysis(input);

// Result shape (from schema): { id: number; controller_repo: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravat...
```

### `github.codeScanning.getVariantAnalysis`

- **HTTP**: `GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}`
- **What it does**: Get the summary of a CodeQL variant analysis
- **OpenAPI operationId**: `code-scanning/get-variant-analysis`
- **Path params**: `codeql_variant_analysis_id`
- **Query params**: None
- **Response codes**: `200`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; codeql_variant_analysis_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; controller_repo: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravat...`
- OpenAPI response codes: `200`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeScanningGetVariantAnalysisInput = Parameters<typeof github.codeScanning.getVariantAnalysis> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningGetVariantAnalysisOutput = Awaited<ReturnType<typeof github.codeScanning.getVariantAnalysis>>;

const input: CodeScanningGetVariantAnalysisInput = {} as { owner: string; repo: string; codeql_variant_analysis_id: number };
const result: CodeScanningGetVariantAnalysisOutput = await github.codeScanning.getVariantAnalysis(input);

// Result shape (from schema): { id: number; controller_repo: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravat...
```

### `github.codeScanning.getVariantAnalysisRepoTask`

- **HTTP**: `GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}`
- **What it does**: Get the analysis status of a repository in a CodeQL variant analysis
- **OpenAPI operationId**: `code-scanning/get-variant-analysis-repo-task`
- **Path params**: `repo`, `codeql_variant_analysis_id`, `repo_owner`, `repo_name`
- **Query params**: None
- **Response codes**: `200`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; codeql_variant_analysis_id: number; repo_owner: string; repo_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | n...`
- OpenAPI response codes: `200`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeScanningGetVariantAnalysisRepoTaskInput = Parameters<typeof github.codeScanning.getVariantAnalysisRepoTask> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningGetVariantAnalysisRepoTaskOutput = Awaited<ReturnType<typeof github.codeScanning.getVariantAnalysisRepoTask>>;

const input: CodeScanningGetVariantAnalysisRepoTaskInput = {} as { owner: string; repo: string; codeql_variant_analysis_id: number; repo_owner: string; repo_name: string };
const result: CodeScanningGetVariantAnalysisRepoTaskOutput = await github.codeScanning.getVariantAnalysisRepoTask(input);

// Result shape (from schema): { repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | n...
```

### `github.codeScanning.getDefaultSetup`

- **HTTP**: `GET /repos/{owner}/{repo}/code-scanning/default-setup`
- **What it does**: Get a code scanning default setup configuration
- **OpenAPI operationId**: `code-scanning/get-default-setup`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ state?: "configured" | "not-configured"; languages?: ("actions" | "c-cpp" | "csharp" | "go" | "java-kotlin" | "javascript-typescript" | "javascript" | "python" | "ruby" | "typescript" | "swift")[]; runner_type?: "stan...`
- OpenAPI response codes: `200`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeScanningGetDefaultSetupInput = Parameters<typeof github.codeScanning.getDefaultSetup> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningGetDefaultSetupOutput = Awaited<ReturnType<typeof github.codeScanning.getDefaultSetup>>;

const input: CodeScanningGetDefaultSetupInput = {} as { owner: string; repo: string };
const result: CodeScanningGetDefaultSetupOutput = await github.codeScanning.getDefaultSetup(input);

// Result shape (from schema): { state?: "configured" | "not-configured"; languages?: ("actions" | "c-cpp" | "csharp" | "go" | "java-kotlin" | "javascript-typescript" | "javascript" | "python" | "ruby" | "typescript" | "swift")[]; runner_type?: "stan...
```

### `github.codeScanning.updateDefaultSetup`

- **HTTP**: `PATCH /repos/{owner}/{repo}/code-scanning/default-setup`
- **What it does**: Update a code scanning default setup configuration
- **OpenAPI operationId**: `code-scanning/update-default-setup`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `202`, `403`, `404`, `409`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ state?: "configured" | "not-configured"; runner_type?: "standard" | "labeled"; runner_label?: string | null; query_suite?: "default" | "extended"; threat_model?: "remote" | "remote_and_local"; languages?: ("actions" | "c-cpp" | "csharp" | "go" | "java-kotlin" | "javascript-typescript" | "python" | "ruby" | "swift")[]; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `202`, `403`, `404`, `409`, `422`, `503`

```ts
import github from "@utdk/github";

type CodeScanningUpdateDefaultSetupInput = Parameters<typeof github.codeScanning.updateDefaultSetup> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningUpdateDefaultSetupOutput = Awaited<ReturnType<typeof github.codeScanning.updateDefaultSetup>>;

const input: CodeScanningUpdateDefaultSetupInput = {} as { state?: "configured" | "not-configured"; runner_type?: "standard" | "labeled"; runner_label?: string | null; query_suite?: "default" | "extended"; threat_model?: "remote" | "remote_and_local"; languages?: ("actions" | "c-cpp" | "csharp" | "go" | "java-kotlin" | "javascript-typescript" | "python" | "ruby" | "swift")[]; owner: string; repo: string };
const result: CodeScanningUpdateDefaultSetupOutput = await github.codeScanning.updateDefaultSetup(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.codeScanning.uploadSarif`

- **HTTP**: `POST /repos/{owner}/{repo}/code-scanning/sarifs`
- **What it does**: Upload an analysis as SARIF data
- **OpenAPI operationId**: `code-scanning/upload-sarif`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `400`, `403`, `404`, `413`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ commit_sha: string; ref: string; sarif: string; checkout_uri?: string; started_at?: string; tool_name?: string; validate?: boolean; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `400`, `403`, `404`, `413`, `503`

```ts
import github from "@utdk/github";

type CodeScanningUploadSarifInput = Parameters<typeof github.codeScanning.uploadSarif> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningUploadSarifOutput = Awaited<ReturnType<typeof github.codeScanning.uploadSarif>>;

const input: CodeScanningUploadSarifInput = {} as { commit_sha: string; ref: string; sarif: string; checkout_uri?: string; started_at?: string; tool_name?: string; validate?: boolean; owner: string; repo: string };
const result: CodeScanningUploadSarifOutput = await github.codeScanning.uploadSarif(input);

// Result shape (from schema): unknown
```

### `github.codeScanning.getSarif`

- **HTTP**: `GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}`
- **What it does**: Get information about a SARIF upload
- **OpenAPI operationId**: `code-scanning/get-sarif`
- **Path params**: `sarif_id`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; sarif_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ processing_status?: "pending" | "complete" | "failed"; analyses_url?: string | null; errors?: (string)[] | null }`
- OpenAPI response codes: `200`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeScanningGetSarifInput = Parameters<typeof github.codeScanning.getSarif> extends [infer T, ...unknown[]] ? T : undefined;
type CodeScanningGetSarifOutput = Awaited<ReturnType<typeof github.codeScanning.getSarif>>;

const input: CodeScanningGetSarifInput = {} as { owner: string; repo: string; sarif_id: string };
const result: CodeScanningGetSarifOutput = await github.codeScanning.getSarif(input);

// Result shape (from schema): { processing_status?: "pending" | "complete" | "failed"; analyses_url?: string | null; errors?: (string)[] | null }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
