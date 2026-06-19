# Checks

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.checks.create`

- **HTTP**: `POST /repos/{owner}/{repo}/check-runs`
- **What it does**: Create a check run
- **OpenAPI operationId**: `checks/create`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: { status: "completed"; [key: string]: unknown } | { status?: "queued" | "in_progress"; [key: string]: unknown }; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; head_sha: string; node_id: string; external_id: string | null; url: string; html_url: string | null; details_url: string | null; status: "queued" | "in_progress" | "completed" | "waiting" | "requested" | "...`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ChecksCreateInput = Parameters<typeof github.checks.create> extends [infer T, ...unknown[]] ? T : undefined;
type ChecksCreateOutput = Awaited<ReturnType<typeof github.checks.create>>;

const input: ChecksCreateInput = {} as { body: { status: "completed"; [key: string]: unknown } | { status?: "queued" | "in_progress"; [key: string]: unknown }; owner: string; repo: string };
const result: ChecksCreateOutput = await github.checks.create(input);

// Result shape (from schema): { id: number; head_sha: string; node_id: string; external_id: string | null; url: string; html_url: string | null; details_url: string | null; status: "queued" | "in_progress" | "completed" | "waiting" | "requested" | "...
```

### `github.checks.get`

- **HTTP**: `GET /repos/{owner}/{repo}/check-runs/{check_run_id}`
- **What it does**: Get a check run
- **OpenAPI operationId**: `checks/get`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; check_run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; head_sha: string; node_id: string; external_id: string | null; url: string; html_url: string | null; details_url: string | null; status: "queued" | "in_progress" | "completed" | "waiting" | "requested" | "...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ChecksGetInput = Parameters<typeof github.checks.get> extends [infer T, ...unknown[]] ? T : undefined;
type ChecksGetOutput = Awaited<ReturnType<typeof github.checks.get>>;

const input: ChecksGetInput = {} as { owner: string; repo: string; check_run_id: number };
const result: ChecksGetOutput = await github.checks.get(input);

// Result shape (from schema): { id: number; head_sha: string; node_id: string; external_id: string | null; url: string; html_url: string | null; details_url: string | null; status: "queued" | "in_progress" | "completed" | "waiting" | "requested" | "...
```

### `github.checks.update`

- **HTTP**: `PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}`
- **What it does**: Update a check run
- **OpenAPI operationId**: `checks/update`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: { status?: "completed"; [key: string]: unknown } | { status?: "queued" | "in_progress"; [key: string]: unknown }; owner: string; repo: string; check_run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; head_sha: string; node_id: string; external_id: string | null; url: string; html_url: string | null; details_url: string | null; status: "queued" | "in_progress" | "completed" | "waiting" | "requested" | "...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ChecksUpdateInput = Parameters<typeof github.checks.update> extends [infer T, ...unknown[]] ? T : undefined;
type ChecksUpdateOutput = Awaited<ReturnType<typeof github.checks.update>>;

const input: ChecksUpdateInput = {} as { body: { status?: "completed"; [key: string]: unknown } | { status?: "queued" | "in_progress"; [key: string]: unknown }; owner: string; repo: string; check_run_id: number };
const result: ChecksUpdateOutput = await github.checks.update(input);

// Result shape (from schema): { id: number; head_sha: string; node_id: string; external_id: string | null; url: string; html_url: string | null; details_url: string | null; status: "queued" | "in_progress" | "completed" | "waiting" | "requested" | "...
```

### `github.checks.listAnnotations`

- **HTTP**: `GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations`
- **What it does**: List check run annotations
- **OpenAPI operationId**: `checks/list-annotations`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; check_run_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ path: string; start_line: number; end_line: number; start_column: number | null; end_column: number | null; annotation_level: string | null; title: string | null; message: string | null; raw_details: string | null; b...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ChecksListAnnotationsInput = Parameters<typeof github.checks.listAnnotations> extends [infer T, ...unknown[]] ? T : undefined;
type ChecksListAnnotationsOutput = Awaited<ReturnType<typeof github.checks.listAnnotations>>;

const input: ChecksListAnnotationsInput = {} as { owner: string; repo: string; check_run_id: number; per_page?: number; page?: number };
const result: ChecksListAnnotationsOutput = await github.checks.listAnnotations(input);

// Result shape (from schema): ({ path: string; start_line: number; end_line: number; start_column: number | null; end_column: number | null; annotation_level: string | null; title: string | null; message: string | null; raw_details: string | null; b...
```

### `github.checks.rerequestRun`

- **HTTP**: `POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest`
- **What it does**: Rerequest a check run
- **OpenAPI operationId**: `checks/rerequest-run`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; check_run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type ChecksRerequestRunInput = Parameters<typeof github.checks.rerequestRun> extends [infer T, ...unknown[]] ? T : undefined;
type ChecksRerequestRunOutput = Awaited<ReturnType<typeof github.checks.rerequestRun>>;

const input: ChecksRerequestRunInput = {} as { owner: string; repo: string; check_run_id: number };
const result: ChecksRerequestRunOutput = await github.checks.rerequestRun(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.checks.createSuite`

- **HTTP**: `POST /repos/{owner}/{repo}/check-suites`
- **What it does**: Create a check suite
- **OpenAPI operationId**: `checks/create-suite`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ head_sha: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; head_branch: string | null; head_sha: string; status: "queued" | "in_progress" | "completed" | "waiting" | "requested" | "pending" | null; conclusion: "success" | "failure" | "neutral" | "...`
- OpenAPI response codes: `200`, `201`

```ts
import github from "@utdk/github";

type ChecksCreateSuiteInput = Parameters<typeof github.checks.createSuite> extends [infer T, ...unknown[]] ? T : undefined;
type ChecksCreateSuiteOutput = Awaited<ReturnType<typeof github.checks.createSuite>>;

const input: ChecksCreateSuiteInput = {} as { head_sha: string; owner: string; repo: string };
const result: ChecksCreateSuiteOutput = await github.checks.createSuite(input);

// Result shape (from schema): { id: number; node_id: string; head_branch: string | null; head_sha: string; status: "queued" | "in_progress" | "completed" | "waiting" | "requested" | "pending" | null; conclusion: "success" | "failure" | "neutral" | "...
```

### `github.checks.getSuite`

- **HTTP**: `GET /repos/{owner}/{repo}/check-suites/{check_suite_id}`
- **What it does**: Get a check suite
- **OpenAPI operationId**: `checks/get-suite`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; check_suite_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; head_branch: string | null; head_sha: string; status: "queued" | "in_progress" | "completed" | "waiting" | "requested" | "pending" | null; conclusion: "success" | "failure" | "neutral" | "...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ChecksGetSuiteInput = Parameters<typeof github.checks.getSuite> extends [infer T, ...unknown[]] ? T : undefined;
type ChecksGetSuiteOutput = Awaited<ReturnType<typeof github.checks.getSuite>>;

const input: ChecksGetSuiteInput = {} as { owner: string; repo: string; check_suite_id: number };
const result: ChecksGetSuiteOutput = await github.checks.getSuite(input);

// Result shape (from schema): { id: number; node_id: string; head_branch: string | null; head_sha: string; status: "queued" | "in_progress" | "completed" | "waiting" | "requested" | "pending" | null; conclusion: "success" | "failure" | "neutral" | "...
```

### `github.checks.listForSuite`

- **HTTP**: `GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs`
- **What it does**: List check runs in a check suite
- **OpenAPI operationId**: `checks/list-for-suite`
- **Path params**: None
- **Query params**: `filter`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; check_suite_id: number; check_name?: string; status?: "queued" | "in_progress" | "completed"; filter?: "latest" | "all"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; check_runs: ({ id: number; head_sha: string; node_id: string; external_id: string | null; url: string; html_url: string | null; details_url: string | null; status: "queued" | "in_progress" | "comp...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ChecksListForSuiteInput = Parameters<typeof github.checks.listForSuite> extends [infer T, ...unknown[]] ? T : undefined;
type ChecksListForSuiteOutput = Awaited<ReturnType<typeof github.checks.listForSuite>>;

const input: ChecksListForSuiteInput = {} as { owner: string; repo: string; check_suite_id: number; check_name?: string; status?: "queued" | "in_progress" | "completed"; filter?: "latest" | "all"; per_page?: number; page?: number };
const result: ChecksListForSuiteOutput = await github.checks.listForSuite(input);

// Result shape (from schema): { total_count: number; check_runs: ({ id: number; head_sha: string; node_id: string; external_id: string | null; url: string; html_url: string | null; details_url: string | null; status: "queued" | "in_progress" | "comp...
```

### `github.checks.rerequestSuite`

- **HTTP**: `POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest`
- **What it does**: Rerequest a check suite
- **OpenAPI operationId**: `checks/rerequest-suite`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; check_suite_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ChecksRerequestSuiteInput = Parameters<typeof github.checks.rerequestSuite> extends [infer T, ...unknown[]] ? T : undefined;
type ChecksRerequestSuiteOutput = Awaited<ReturnType<typeof github.checks.rerequestSuite>>;

const input: ChecksRerequestSuiteInput = {} as { owner: string; repo: string; check_suite_id: number };
const result: ChecksRerequestSuiteOutput = await github.checks.rerequestSuite(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.checks.setSuitesPreferences`

- **HTTP**: `PATCH /repos/{owner}/{repo}/check-suites/preferences`
- **What it does**: Update repository preferences for check suites
- **OpenAPI operationId**: `checks/set-suites-preferences`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ auto_trigger_checks?: ({ app_id: number; setting: boolean })[]; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ preferences: { auto_trigger_checks?: ({ app_id: number; setting: boolean })[] }; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login:...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ChecksSetSuitesPreferencesInput = Parameters<typeof github.checks.setSuitesPreferences> extends [infer T, ...unknown[]] ? T : undefined;
type ChecksSetSuitesPreferencesOutput = Awaited<ReturnType<typeof github.checks.setSuitesPreferences>>;

const input: ChecksSetSuitesPreferencesInput = {} as { auto_trigger_checks?: ({ app_id: number; setting: boolean })[]; owner: string; repo: string };
const result: ChecksSetSuitesPreferencesOutput = await github.checks.setSuitesPreferences(input);

// Result shape (from schema): { preferences: { auto_trigger_checks?: ({ app_id: number; setting: boolean })[] }; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login:...
```

### `github.checks.listForRef`

- **HTTP**: `GET /repos/{owner}/{repo}/commits/{ref}/check-runs`
- **What it does**: List check runs for a Git reference
- **OpenAPI operationId**: `checks/list-for-ref`
- **Path params**: None
- **Query params**: `filter`, `app_id`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref: string; check_name?: string; status?: "queued" | "in_progress" | "completed"; filter?: "latest" | "all"; per_page?: number; page?: number; app_id?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; check_runs: ({ id: number; head_sha: string; node_id: string; external_id: string | null; url: string; html_url: string | null; details_url: string | null; status: "queued" | "in_progress" | "comp...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ChecksListForRefInput = Parameters<typeof github.checks.listForRef> extends [infer T, ...unknown[]] ? T : undefined;
type ChecksListForRefOutput = Awaited<ReturnType<typeof github.checks.listForRef>>;

const input: ChecksListForRefInput = {} as { owner: string; repo: string; ref: string; check_name?: string; status?: "queued" | "in_progress" | "completed"; filter?: "latest" | "all"; per_page?: number; page?: number; app_id?: number };
const result: ChecksListForRefOutput = await github.checks.listForRef(input);

// Result shape (from schema): { total_count: number; check_runs: ({ id: number; head_sha: string; node_id: string; external_id: string | null; url: string; html_url: string | null; details_url: string | null; status: "queued" | "in_progress" | "comp...
```

### `github.checks.listSuitesForRef`

- **HTTP**: `GET /repos/{owner}/{repo}/commits/{ref}/check-suites`
- **What it does**: List check suites for a Git reference
- **OpenAPI operationId**: `checks/list-suites-for-ref`
- **Path params**: None
- **Query params**: `app_id`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref: string; app_id?: number; check_name?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; check_suites: ({ id: number; node_id: string; head_branch: string | null; head_sha: string; status: "queued" | "in_progress" | "completed" | "waiting" | "requested" | "pending" | null; conclusion:...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ChecksListSuitesForRefInput = Parameters<typeof github.checks.listSuitesForRef> extends [infer T, ...unknown[]] ? T : undefined;
type ChecksListSuitesForRefOutput = Awaited<ReturnType<typeof github.checks.listSuitesForRef>>;

const input: ChecksListSuitesForRefInput = {} as { owner: string; repo: string; ref: string; app_id?: number; check_name?: string; per_page?: number; page?: number };
const result: ChecksListSuitesForRefOutput = await github.checks.listSuitesForRef(input);

// Result shape (from schema): { total_count: number; check_suites: ({ id: number; node_id: string; head_branch: string | null; head_sha: string; status: "queued" | "in_progress" | "completed" | "waiting" | "requested" | "pending" | null; conclusion:...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
