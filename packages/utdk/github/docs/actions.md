# Actions

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.actions.getActionsCacheRetentionLimitForEnterprise`

- **HTTP**: `GET /enterprises/{enterprise}/actions/cache/retention-limit`
- **What it does**: Get GitHub Actions cache retention limit for an enterprise
- **OpenAPI operationId**: `actions/get-actions-cache-retention-limit-for-enterprise`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ max_cache_retention_days?: number }`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsGetActionsCacheRetentionLimitForEnterpriseInput = Parameters<typeof github.actions.getActionsCacheRetentionLimitForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetActionsCacheRetentionLimitForEnterpriseOutput = Awaited<ReturnType<typeof github.actions.getActionsCacheRetentionLimitForEnterprise>>;

const input: ActionsGetActionsCacheRetentionLimitForEnterpriseInput = {} as { enterprise: string };
const result: ActionsGetActionsCacheRetentionLimitForEnterpriseOutput = await github.actions.getActionsCacheRetentionLimitForEnterprise(input);

// Result shape (from schema): { max_cache_retention_days?: number }
```

### `github.actions.setActionsCacheRetentionLimitForEnterprise`

- **HTTP**: `PUT /enterprises/{enterprise}/actions/cache/retention-limit`
- **What it does**: Set GitHub Actions cache retention limit for an enterprise
- **OpenAPI operationId**: `actions/set-actions-cache-retention-limit-for-enterprise`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `400`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ max_cache_retention_days?: number; enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsSetActionsCacheRetentionLimitForEnterpriseInput = Parameters<typeof github.actions.setActionsCacheRetentionLimitForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetActionsCacheRetentionLimitForEnterpriseOutput = Awaited<ReturnType<typeof github.actions.setActionsCacheRetentionLimitForEnterprise>>;

const input: ActionsSetActionsCacheRetentionLimitForEnterpriseInput = {} as { max_cache_retention_days?: number; enterprise: string };
const result: ActionsSetActionsCacheRetentionLimitForEnterpriseOutput = await github.actions.setActionsCacheRetentionLimitForEnterprise(input);

// Result shape (from schema): unknown
```

### `github.actions.getActionsCacheStorageLimitForEnterprise`

- **HTTP**: `GET /enterprises/{enterprise}/actions/cache/storage-limit`
- **What it does**: Get GitHub Actions cache storage limit for an enterprise
- **OpenAPI operationId**: `actions/get-actions-cache-storage-limit-for-enterprise`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ max_cache_size_gb?: number }`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsGetActionsCacheStorageLimitForEnterpriseInput = Parameters<typeof github.actions.getActionsCacheStorageLimitForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetActionsCacheStorageLimitForEnterpriseOutput = Awaited<ReturnType<typeof github.actions.getActionsCacheStorageLimitForEnterprise>>;

const input: ActionsGetActionsCacheStorageLimitForEnterpriseInput = {} as { enterprise: string };
const result: ActionsGetActionsCacheStorageLimitForEnterpriseOutput = await github.actions.getActionsCacheStorageLimitForEnterprise(input);

// Result shape (from schema): { max_cache_size_gb?: number }
```

### `github.actions.setActionsCacheStorageLimitForEnterprise`

- **HTTP**: `PUT /enterprises/{enterprise}/actions/cache/storage-limit`
- **What it does**: Set GitHub Actions cache storage limit for an enterprise
- **OpenAPI operationId**: `actions/set-actions-cache-storage-limit-for-enterprise`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `400`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ max_cache_size_gb?: number; enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsSetActionsCacheStorageLimitForEnterpriseInput = Parameters<typeof github.actions.setActionsCacheStorageLimitForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetActionsCacheStorageLimitForEnterpriseOutput = Awaited<ReturnType<typeof github.actions.setActionsCacheStorageLimitForEnterprise>>;

const input: ActionsSetActionsCacheStorageLimitForEnterpriseInput = {} as { max_cache_size_gb?: number; enterprise: string };
const result: ActionsSetActionsCacheStorageLimitForEnterpriseOutput = await github.actions.setActionsCacheStorageLimitForEnterprise(input);

// Result shape (from schema): unknown
```

### `github.actions.getActionsCacheRetentionLimitForOrganization`

- **HTTP**: `GET /organizations/{org}/actions/cache/retention-limit`
- **What it does**: Get GitHub Actions cache retention limit for an organization
- **OpenAPI operationId**: `actions/get-actions-cache-retention-limit-for-organization`
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

- Client return type: `{ max_cache_retention_days?: number }`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsGetActionsCacheRetentionLimitForOrganizationInput = Parameters<typeof github.actions.getActionsCacheRetentionLimitForOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetActionsCacheRetentionLimitForOrganizationOutput = Awaited<ReturnType<typeof github.actions.getActionsCacheRetentionLimitForOrganization>>;

const input: ActionsGetActionsCacheRetentionLimitForOrganizationInput = {} as { org: string };
const result: ActionsGetActionsCacheRetentionLimitForOrganizationOutput = await github.actions.getActionsCacheRetentionLimitForOrganization(input);

// Result shape (from schema): { max_cache_retention_days?: number }
```

### `github.actions.setActionsCacheRetentionLimitForOrganization`

- **HTTP**: `PUT /organizations/{org}/actions/cache/retention-limit`
- **What it does**: Set GitHub Actions cache retention limit for an organization
- **OpenAPI operationId**: `actions/set-actions-cache-retention-limit-for-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `400`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ max_cache_retention_days?: number; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsSetActionsCacheRetentionLimitForOrganizationInput = Parameters<typeof github.actions.setActionsCacheRetentionLimitForOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetActionsCacheRetentionLimitForOrganizationOutput = Awaited<ReturnType<typeof github.actions.setActionsCacheRetentionLimitForOrganization>>;

const input: ActionsSetActionsCacheRetentionLimitForOrganizationInput = {} as { max_cache_retention_days?: number; org: string };
const result: ActionsSetActionsCacheRetentionLimitForOrganizationOutput = await github.actions.setActionsCacheRetentionLimitForOrganization(input);

// Result shape (from schema): unknown
```

### `github.actions.getActionsCacheStorageLimitForOrganization`

- **HTTP**: `GET /organizations/{org}/actions/cache/storage-limit`
- **What it does**: Get GitHub Actions cache storage limit for an organization
- **OpenAPI operationId**: `actions/get-actions-cache-storage-limit-for-organization`
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

- Client return type: `{ max_cache_size_gb?: number }`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsGetActionsCacheStorageLimitForOrganizationInput = Parameters<typeof github.actions.getActionsCacheStorageLimitForOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetActionsCacheStorageLimitForOrganizationOutput = Awaited<ReturnType<typeof github.actions.getActionsCacheStorageLimitForOrganization>>;

const input: ActionsGetActionsCacheStorageLimitForOrganizationInput = {} as { org: string };
const result: ActionsGetActionsCacheStorageLimitForOrganizationOutput = await github.actions.getActionsCacheStorageLimitForOrganization(input);

// Result shape (from schema): { max_cache_size_gb?: number }
```

### `github.actions.setActionsCacheStorageLimitForOrganization`

- **HTTP**: `PUT /organizations/{org}/actions/cache/storage-limit`
- **What it does**: Set GitHub Actions cache storage limit for an organization
- **OpenAPI operationId**: `actions/set-actions-cache-storage-limit-for-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `400`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ max_cache_size_gb?: number; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsSetActionsCacheStorageLimitForOrganizationInput = Parameters<typeof github.actions.setActionsCacheStorageLimitForOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetActionsCacheStorageLimitForOrganizationOutput = Awaited<ReturnType<typeof github.actions.setActionsCacheStorageLimitForOrganization>>;

const input: ActionsSetActionsCacheStorageLimitForOrganizationInput = {} as { max_cache_size_gb?: number; org: string };
const result: ActionsSetActionsCacheStorageLimitForOrganizationOutput = await github.actions.setActionsCacheStorageLimitForOrganization(input);

// Result shape (from schema): unknown
```

### `github.actions.getActionsCacheUsageForOrg`

- **HTTP**: `GET /orgs/{org}/actions/cache/usage`
- **What it does**: Get GitHub Actions cache usage for an organization
- **OpenAPI operationId**: `actions/get-actions-cache-usage-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_active_caches_count: number; total_active_caches_size_in_bytes: number }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetActionsCacheUsageForOrgInput = Parameters<typeof github.actions.getActionsCacheUsageForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetActionsCacheUsageForOrgOutput = Awaited<ReturnType<typeof github.actions.getActionsCacheUsageForOrg>>;

const input: ActionsGetActionsCacheUsageForOrgInput = {} as { org: string };
const result: ActionsGetActionsCacheUsageForOrgOutput = await github.actions.getActionsCacheUsageForOrg(input);

// Result shape (from schema): { total_active_caches_count: number; total_active_caches_size_in_bytes: number }
```

### `github.actions.getActionsCacheUsageByRepoForOrg`

- **HTTP**: `GET /orgs/{org}/actions/cache/usage-by-repository`
- **What it does**: List repositories with GitHub Actions cache usage for an organization
- **OpenAPI operationId**: `actions/get-actions-cache-usage-by-repo-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; repository_cache_usages: ({ full_name: string; active_caches_size_in_bytes: number; active_caches_count: number })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetActionsCacheUsageByRepoForOrgInput = Parameters<typeof github.actions.getActionsCacheUsageByRepoForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetActionsCacheUsageByRepoForOrgOutput = Awaited<ReturnType<typeof github.actions.getActionsCacheUsageByRepoForOrg>>;

const input: ActionsGetActionsCacheUsageByRepoForOrgInput = {} as { org: string; per_page?: number; page?: number };
const result: ActionsGetActionsCacheUsageByRepoForOrgOutput = await github.actions.getActionsCacheUsageByRepoForOrg(input);

// Result shape (from schema): { total_count: number; repository_cache_usages: ({ full_name: string; active_caches_size_in_bytes: number; active_caches_count: number })[] }
```

### `github.actions.listHostedRunnersForOrg`

- **HTTP**: `GET /orgs/{org}/actions/hosted-runners`
- **What it does**: List GitHub-hosted runners for an organization
- **OpenAPI operationId**: `actions/list-hosted-runners-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; runners: ({ id: number; name: string; runner_group_id?: number; image_details: { id: string; size_gb: number; display_name: string; source: "github" | "partner" | "custom"; version?: string } | nu...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListHostedRunnersForOrgInput = Parameters<typeof github.actions.listHostedRunnersForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListHostedRunnersForOrgOutput = Awaited<ReturnType<typeof github.actions.listHostedRunnersForOrg>>;

const input: ActionsListHostedRunnersForOrgInput = {} as { org: string; per_page?: number; page?: number };
const result: ActionsListHostedRunnersForOrgOutput = await github.actions.listHostedRunnersForOrg(input);

// Result shape (from schema): { total_count: number; runners: ({ id: number; name: string; runner_group_id?: number; image_details: { id: string; size_gb: number; display_name: string; source: "github" | "partner" | "custom"; version?: string } | nu...
```

### `github.actions.createHostedRunnerForOrg`

- **HTTP**: `POST /orgs/{org}/actions/hosted-runners`
- **What it does**: Create a GitHub-hosted runner for an organization
- **OpenAPI operationId**: `actions/create-hosted-runner-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; image: { id?: string; source?: "github" | "partner" | "custom"; version?: string | null }; size: string; runner_group_id: number; maximum_runners?: number; enable_static_ip?: boolean; image_gen?: boolean; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; runner_group_id?: number; image_details: { id: string; size_gb: number; display_name: string; source: "github" | "partner" | "custom"; version?: string } | null; machine_size_details: { id: s...`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ActionsCreateHostedRunnerForOrgInput = Parameters<typeof github.actions.createHostedRunnerForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsCreateHostedRunnerForOrgOutput = Awaited<ReturnType<typeof github.actions.createHostedRunnerForOrg>>;

const input: ActionsCreateHostedRunnerForOrgInput = {} as { name: string; image: { id?: string; source?: "github" | "partner" | "custom"; version?: string | null }; size: string; runner_group_id: number; maximum_runners?: number; enable_static_ip?: boolean; image_gen?: boolean; org: string };
const result: ActionsCreateHostedRunnerForOrgOutput = await github.actions.createHostedRunnerForOrg(input);

// Result shape (from schema): { id: number; name: string; runner_group_id?: number; image_details: { id: string; size_gb: number; display_name: string; source: "github" | "partner" | "custom"; version?: string } | null; machine_size_details: { id: s...
```

### `github.actions.deleteHostedRunnerForOrg`

- **HTTP**: `DELETE /orgs/{org}/actions/hosted-runners/{hosted_runner_id}`
- **What it does**: Delete a GitHub-hosted runner for an organization
- **OpenAPI operationId**: `actions/delete-hosted-runner-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; hosted_runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`

```ts
import github from "@utdk/github";

type ActionsDeleteHostedRunnerForOrgInput = Parameters<typeof github.actions.deleteHostedRunnerForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteHostedRunnerForOrgOutput = Awaited<ReturnType<typeof github.actions.deleteHostedRunnerForOrg>>;

const input: ActionsDeleteHostedRunnerForOrgInput = {} as { org: string; hosted_runner_id: number };
const result: ActionsDeleteHostedRunnerForOrgOutput = await github.actions.deleteHostedRunnerForOrg(input);

// Result shape (from schema): unknown
```

### `github.actions.getHostedRunnerForOrg`

- **HTTP**: `GET /orgs/{org}/actions/hosted-runners/{hosted_runner_id}`
- **What it does**: Get a GitHub-hosted runner for an organization
- **OpenAPI operationId**: `actions/get-hosted-runner-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; hosted_runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; runner_group_id?: number; image_details: { id: string; size_gb: number; display_name: string; source: "github" | "partner" | "custom"; version?: string } | null; machine_size_details: { id: s...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetHostedRunnerForOrgInput = Parameters<typeof github.actions.getHostedRunnerForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetHostedRunnerForOrgOutput = Awaited<ReturnType<typeof github.actions.getHostedRunnerForOrg>>;

const input: ActionsGetHostedRunnerForOrgInput = {} as { org: string; hosted_runner_id: number };
const result: ActionsGetHostedRunnerForOrgOutput = await github.actions.getHostedRunnerForOrg(input);

// Result shape (from schema): { id: number; name: string; runner_group_id?: number; image_details: { id: string; size_gb: number; display_name: string; source: "github" | "partner" | "custom"; version?: string } | null; machine_size_details: { id: s...
```

### `github.actions.updateHostedRunnerForOrg`

- **HTTP**: `PATCH /orgs/{org}/actions/hosted-runners/{hosted_runner_id}`
- **What it does**: Update a GitHub-hosted runner for an organization
- **OpenAPI operationId**: `actions/update-hosted-runner-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; runner_group_id?: number; maximum_runners?: number; enable_static_ip?: boolean; size?: string; image_source?: "github" | "partner" | "custom"; image_id?: string; image_version?: string | null; image_gen?: boolean; org: string; hosted_runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; runner_group_id?: number; image_details: { id: string; size_gb: number; display_name: string; source: "github" | "partner" | "custom"; version?: string } | null; machine_size_details: { id: s...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsUpdateHostedRunnerForOrgInput = Parameters<typeof github.actions.updateHostedRunnerForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsUpdateHostedRunnerForOrgOutput = Awaited<ReturnType<typeof github.actions.updateHostedRunnerForOrg>>;

const input: ActionsUpdateHostedRunnerForOrgInput = {} as { name?: string; runner_group_id?: number; maximum_runners?: number; enable_static_ip?: boolean; size?: string; image_source?: "github" | "partner" | "custom"; image_id?: string; image_version?: string | null; image_gen?: boolean; org: string; hosted_runner_id: number };
const result: ActionsUpdateHostedRunnerForOrgOutput = await github.actions.updateHostedRunnerForOrg(input);

// Result shape (from schema): { id: number; name: string; runner_group_id?: number; image_details: { id: string; size_gb: number; display_name: string; source: "github" | "partner" | "custom"; version?: string } | null; machine_size_details: { id: s...
```

### `github.actions.listCustomImagesForOrg`

- **HTTP**: `GET /orgs/{org}/actions/hosted-runners/images/custom`
- **What it does**: List custom images for an organization
- **OpenAPI operationId**: `actions/list-custom-images-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; images: ({ id: number; platform: string; total_versions_size: number; name: string; source: string; versions_count: number; latest_version: string; state: string })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListCustomImagesForOrgInput = Parameters<typeof github.actions.listCustomImagesForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListCustomImagesForOrgOutput = Awaited<ReturnType<typeof github.actions.listCustomImagesForOrg>>;

const input: ActionsListCustomImagesForOrgInput = {} as { org: string };
const result: ActionsListCustomImagesForOrgOutput = await github.actions.listCustomImagesForOrg(input);

// Result shape (from schema): { total_count: number; images: ({ id: number; platform: string; total_versions_size: number; name: string; source: string; versions_count: number; latest_version: string; state: string })[] }
```

### `github.actions.deleteCustomImageFromOrg`

- **HTTP**: `DELETE /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}`
- **What it does**: Delete a custom image from the organization
- **OpenAPI operationId**: `actions/delete-custom-image-from-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; image_definition_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsDeleteCustomImageFromOrgInput = Parameters<typeof github.actions.deleteCustomImageFromOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteCustomImageFromOrgOutput = Awaited<ReturnType<typeof github.actions.deleteCustomImageFromOrg>>;

const input: ActionsDeleteCustomImageFromOrgInput = {} as { org: string; image_definition_id: number };
const result: ActionsDeleteCustomImageFromOrgOutput = await github.actions.deleteCustomImageFromOrg(input);

// Result shape (from schema): unknown
```

### `github.actions.getCustomImageForOrg`

- **HTTP**: `GET /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}`
- **What it does**: Get a custom image definition for GitHub Actions Hosted Runners
- **OpenAPI operationId**: `actions/get-custom-image-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; image_definition_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; platform: string; total_versions_size: number; name: string; source: string; versions_count: number; latest_version: string; state: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetCustomImageForOrgInput = Parameters<typeof github.actions.getCustomImageForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetCustomImageForOrgOutput = Awaited<ReturnType<typeof github.actions.getCustomImageForOrg>>;

const input: ActionsGetCustomImageForOrgInput = {} as { org: string; image_definition_id: number };
const result: ActionsGetCustomImageForOrgOutput = await github.actions.getCustomImageForOrg(input);

// Result shape (from schema): { id: number; platform: string; total_versions_size: number; name: string; source: string; versions_count: number; latest_version: string; state: string }
```

### `github.actions.listCustomImageVersionsForOrg`

- **HTTP**: `GET /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}/versions`
- **What it does**: List image versions of a custom image for an organization
- **OpenAPI operationId**: `actions/list-custom-image-versions-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ image_definition_id: number; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; image_versions: ({ version: string; state: string; size_gb: number; created_on: string; state_details: string })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListCustomImageVersionsForOrgInput = Parameters<typeof github.actions.listCustomImageVersionsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListCustomImageVersionsForOrgOutput = Awaited<ReturnType<typeof github.actions.listCustomImageVersionsForOrg>>;

const input: ActionsListCustomImageVersionsForOrgInput = {} as { image_definition_id: number; org: string };
const result: ActionsListCustomImageVersionsForOrgOutput = await github.actions.listCustomImageVersionsForOrg(input);

// Result shape (from schema): { total_count: number; image_versions: ({ version: string; state: string; size_gb: number; created_on: string; state_details: string })[] }
```

### `github.actions.deleteCustomImageVersionFromOrg`

- **HTTP**: `DELETE /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}/versions/{version}`
- **What it does**: Delete an image version of custom image from the organization
- **OpenAPI operationId**: `actions/delete-custom-image-version-from-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; image_definition_id: number; version: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsDeleteCustomImageVersionFromOrgInput = Parameters<typeof github.actions.deleteCustomImageVersionFromOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteCustomImageVersionFromOrgOutput = Awaited<ReturnType<typeof github.actions.deleteCustomImageVersionFromOrg>>;

const input: ActionsDeleteCustomImageVersionFromOrgInput = {} as { org: string; image_definition_id: number; version: string };
const result: ActionsDeleteCustomImageVersionFromOrgOutput = await github.actions.deleteCustomImageVersionFromOrg(input);

// Result shape (from schema): unknown
```

### `github.actions.getCustomImageVersionForOrg`

- **HTTP**: `GET /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}/versions/{version}`
- **What it does**: Get an image version of a custom image for GitHub Actions Hosted Runners
- **OpenAPI operationId**: `actions/get-custom-image-version-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; image_definition_id: number; version: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ version: string; state: string; size_gb: number; created_on: string; state_details: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetCustomImageVersionForOrgInput = Parameters<typeof github.actions.getCustomImageVersionForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetCustomImageVersionForOrgOutput = Awaited<ReturnType<typeof github.actions.getCustomImageVersionForOrg>>;

const input: ActionsGetCustomImageVersionForOrgInput = {} as { org: string; image_definition_id: number; version: string };
const result: ActionsGetCustomImageVersionForOrgOutput = await github.actions.getCustomImageVersionForOrg(input);

// Result shape (from schema): { version: string; state: string; size_gb: number; created_on: string; state_details: string }
```

### `github.actions.getHostedRunnersGithubOwnedImagesForOrg`

- **HTTP**: `GET /orgs/{org}/actions/hosted-runners/images/github-owned`
- **What it does**: Get GitHub-owned images for GitHub-hosted runners in an organization
- **OpenAPI operationId**: `actions/get-hosted-runners-github-owned-images-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; images: ({ id: string; platform: string; size_gb: number; display_name: string; source: "github" | "partner" | "custom" })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetHostedRunnersGithubOwnedImagesForOrgInput = Parameters<typeof github.actions.getHostedRunnersGithubOwnedImagesForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetHostedRunnersGithubOwnedImagesForOrgOutput = Awaited<ReturnType<typeof github.actions.getHostedRunnersGithubOwnedImagesForOrg>>;

const input: ActionsGetHostedRunnersGithubOwnedImagesForOrgInput = {} as { org: string };
const result: ActionsGetHostedRunnersGithubOwnedImagesForOrgOutput = await github.actions.getHostedRunnersGithubOwnedImagesForOrg(input);

// Result shape (from schema): { total_count: number; images: ({ id: string; platform: string; size_gb: number; display_name: string; source: "github" | "partner" | "custom" })[] }
```

### `github.actions.getHostedRunnersPartnerImagesForOrg`

- **HTTP**: `GET /orgs/{org}/actions/hosted-runners/images/partner`
- **What it does**: Get partner images for GitHub-hosted runners in an organization
- **OpenAPI operationId**: `actions/get-hosted-runners-partner-images-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; images: ({ id: string; platform: string; size_gb: number; display_name: string; source: "github" | "partner" | "custom" })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetHostedRunnersPartnerImagesForOrgInput = Parameters<typeof github.actions.getHostedRunnersPartnerImagesForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetHostedRunnersPartnerImagesForOrgOutput = Awaited<ReturnType<typeof github.actions.getHostedRunnersPartnerImagesForOrg>>;

const input: ActionsGetHostedRunnersPartnerImagesForOrgInput = {} as { org: string };
const result: ActionsGetHostedRunnersPartnerImagesForOrgOutput = await github.actions.getHostedRunnersPartnerImagesForOrg(input);

// Result shape (from schema): { total_count: number; images: ({ id: string; platform: string; size_gb: number; display_name: string; source: "github" | "partner" | "custom" })[] }
```

### `github.actions.getHostedRunnersLimitsForOrg`

- **HTTP**: `GET /orgs/{org}/actions/hosted-runners/limits`
- **What it does**: Get limits on GitHub-hosted runners for an organization
- **OpenAPI operationId**: `actions/get-hosted-runners-limits-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ public_ips: { maximum: number; current_usage: number } }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetHostedRunnersLimitsForOrgInput = Parameters<typeof github.actions.getHostedRunnersLimitsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetHostedRunnersLimitsForOrgOutput = Awaited<ReturnType<typeof github.actions.getHostedRunnersLimitsForOrg>>;

const input: ActionsGetHostedRunnersLimitsForOrgInput = {} as { org: string };
const result: ActionsGetHostedRunnersLimitsForOrgOutput = await github.actions.getHostedRunnersLimitsForOrg(input);

// Result shape (from schema): { public_ips: { maximum: number; current_usage: number } }
```

### `github.actions.getHostedRunnersMachineSpecsForOrg`

- **HTTP**: `GET /orgs/{org}/actions/hosted-runners/machine-sizes`
- **What it does**: Get GitHub-hosted runners machine specs for an organization
- **OpenAPI operationId**: `actions/get-hosted-runners-machine-specs-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; machine_specs: ({ id: string; cpu_cores: number; memory_gb: number; storage_gb: number })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetHostedRunnersMachineSpecsForOrgInput = Parameters<typeof github.actions.getHostedRunnersMachineSpecsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetHostedRunnersMachineSpecsForOrgOutput = Awaited<ReturnType<typeof github.actions.getHostedRunnersMachineSpecsForOrg>>;

const input: ActionsGetHostedRunnersMachineSpecsForOrgInput = {} as { org: string };
const result: ActionsGetHostedRunnersMachineSpecsForOrgOutput = await github.actions.getHostedRunnersMachineSpecsForOrg(input);

// Result shape (from schema): { total_count: number; machine_specs: ({ id: string; cpu_cores: number; memory_gb: number; storage_gb: number })[] }
```

### `github.actions.getHostedRunnersPlatformsForOrg`

- **HTTP**: `GET /orgs/{org}/actions/hosted-runners/platforms`
- **What it does**: Get platforms for GitHub-hosted runners in an organization
- **OpenAPI operationId**: `actions/get-hosted-runners-platforms-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; platforms: (string)[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetHostedRunnersPlatformsForOrgInput = Parameters<typeof github.actions.getHostedRunnersPlatformsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetHostedRunnersPlatformsForOrgOutput = Awaited<ReturnType<typeof github.actions.getHostedRunnersPlatformsForOrg>>;

const input: ActionsGetHostedRunnersPlatformsForOrgInput = {} as { org: string };
const result: ActionsGetHostedRunnersPlatformsForOrgOutput = await github.actions.getHostedRunnersPlatformsForOrg(input);

// Result shape (from schema): { total_count: number; platforms: (string)[] }
```

### `github.actions.getGithubActionsPermissionsOrganization`

- **HTTP**: `GET /orgs/{org}/actions/permissions`
- **What it does**: Get GitHub Actions permissions for an organization
- **OpenAPI operationId**: `actions/get-github-actions-permissions-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ enabled_repositories: "all" | "none" | "selected"; selected_repositories_url?: string; allowed_actions?: "all" | "local_only" | "selected"; selected_actions_url?: string; sha_pinning_required?: boolean }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetGithubActionsPermissionsOrganizationInput = Parameters<typeof github.actions.getGithubActionsPermissionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetGithubActionsPermissionsOrganizationOutput = Awaited<ReturnType<typeof github.actions.getGithubActionsPermissionsOrganization>>;

const input: ActionsGetGithubActionsPermissionsOrganizationInput = {} as { org: string };
const result: ActionsGetGithubActionsPermissionsOrganizationOutput = await github.actions.getGithubActionsPermissionsOrganization(input);

// Result shape (from schema): { enabled_repositories: "all" | "none" | "selected"; selected_repositories_url?: string; allowed_actions?: "all" | "local_only" | "selected"; selected_actions_url?: string; sha_pinning_required?: boolean }
```

### `github.actions.setGithubActionsPermissionsOrganization`

- **HTTP**: `PUT /orgs/{org}/actions/permissions`
- **What it does**: Set GitHub Actions permissions for an organization
- **OpenAPI operationId**: `actions/set-github-actions-permissions-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enabled_repositories: "all" | "none" | "selected"; allowed_actions?: "all" | "local_only" | "selected"; sha_pinning_required?: boolean; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsSetGithubActionsPermissionsOrganizationInput = Parameters<typeof github.actions.setGithubActionsPermissionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetGithubActionsPermissionsOrganizationOutput = Awaited<ReturnType<typeof github.actions.setGithubActionsPermissionsOrganization>>;

const input: ActionsSetGithubActionsPermissionsOrganizationInput = {} as { enabled_repositories: "all" | "none" | "selected"; allowed_actions?: "all" | "local_only" | "selected"; sha_pinning_required?: boolean; org: string };
const result: ActionsSetGithubActionsPermissionsOrganizationOutput = await github.actions.setGithubActionsPermissionsOrganization(input);

// Result shape (from schema): unknown
```

### `github.actions.getArtifactAndLogRetentionSettingsOrganization`

- **HTTP**: `GET /orgs/{org}/actions/permissions/artifact-and-log-retention`
- **What it does**: Get artifact and log retention settings for an organization
- **OpenAPI operationId**: `actions/get-artifact-and-log-retention-settings-organization`
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

- Client return type: `{ days: number; maximum_allowed_days: number }`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsGetArtifactAndLogRetentionSettingsOrganizationInput = Parameters<typeof github.actions.getArtifactAndLogRetentionSettingsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetArtifactAndLogRetentionSettingsOrganizationOutput = Awaited<ReturnType<typeof github.actions.getArtifactAndLogRetentionSettingsOrganization>>;

const input: ActionsGetArtifactAndLogRetentionSettingsOrganizationInput = {} as { org: string };
const result: ActionsGetArtifactAndLogRetentionSettingsOrganizationOutput = await github.actions.getArtifactAndLogRetentionSettingsOrganization(input);

// Result shape (from schema): { days: number; maximum_allowed_days: number }
```

### `github.actions.setArtifactAndLogRetentionSettingsOrganization`

- **HTTP**: `PUT /orgs/{org}/actions/permissions/artifact-and-log-retention`
- **What it does**: Set artifact and log retention settings for an organization
- **OpenAPI operationId**: `actions/set-artifact-and-log-retention-settings-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ days: number; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type ActionsSetArtifactAndLogRetentionSettingsOrganizationInput = Parameters<typeof github.actions.setArtifactAndLogRetentionSettingsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetArtifactAndLogRetentionSettingsOrganizationOutput = Awaited<ReturnType<typeof github.actions.setArtifactAndLogRetentionSettingsOrganization>>;

const input: ActionsSetArtifactAndLogRetentionSettingsOrganizationInput = {} as { days: number; org: string };
const result: ActionsSetArtifactAndLogRetentionSettingsOrganizationOutput = await github.actions.setArtifactAndLogRetentionSettingsOrganization(input);

// Result shape (from schema): unknown
```

### `github.actions.getForkPrContributorApprovalPermissionsOrganization`

- **HTTP**: `GET /orgs/{org}/actions/permissions/fork-pr-contributor-approval`
- **What it does**: Get fork PR contributor approval permissions for an organization
- **OpenAPI operationId**: `actions/get-fork-pr-contributor-approval-permissions-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ approval_policy: "first_time_contributors_new_to_github" | "first_time_contributors" | "all_external_contributors" }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ActionsGetForkPrContributorApprovalPermissionsOrganizationInput = Parameters<typeof github.actions.getForkPrContributorApprovalPermissionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetForkPrContributorApprovalPermissionsOrganizationOutput = Awaited<ReturnType<typeof github.actions.getForkPrContributorApprovalPermissionsOrganization>>;

const input: ActionsGetForkPrContributorApprovalPermissionsOrganizationInput = {} as { org: string };
const result: ActionsGetForkPrContributorApprovalPermissionsOrganizationOutput = await github.actions.getForkPrContributorApprovalPermissionsOrganization(input);

// Result shape (from schema): { approval_policy: "first_time_contributors_new_to_github" | "first_time_contributors" | "all_external_contributors" }
```

### `github.actions.setForkPrContributorApprovalPermissionsOrganization`

- **HTTP**: `PUT /orgs/{org}/actions/permissions/fork-pr-contributor-approval`
- **What it does**: Set fork PR contributor approval permissions for an organization
- **OpenAPI operationId**: `actions/set-fork-pr-contributor-approval-permissions-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ approval_policy: "first_time_contributors_new_to_github" | "first_time_contributors" | "all_external_contributors"; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `422`

```ts
import github from "@utdk/github";

type ActionsSetForkPrContributorApprovalPermissionsOrganizationInput = Parameters<typeof github.actions.setForkPrContributorApprovalPermissionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetForkPrContributorApprovalPermissionsOrganizationOutput = Awaited<ReturnType<typeof github.actions.setForkPrContributorApprovalPermissionsOrganization>>;

const input: ActionsSetForkPrContributorApprovalPermissionsOrganizationInput = {} as { approval_policy: "first_time_contributors_new_to_github" | "first_time_contributors" | "all_external_contributors"; org: string };
const result: ActionsSetForkPrContributorApprovalPermissionsOrganizationOutput = await github.actions.setForkPrContributorApprovalPermissionsOrganization(input);

// Result shape (from schema): unknown
```

### `github.actions.getPrivateRepoForkPrWorkflowsSettingsOrganization`

- **HTTP**: `GET /orgs/{org}/actions/permissions/fork-pr-workflows-private-repos`
- **What it does**: Get private repo fork PR workflow settings for an organization
- **OpenAPI operationId**: `actions/get-private-repo-fork-pr-workflows-settings-organization`
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

- Client return type: `{ run_workflows_from_fork_pull_requests: boolean; send_write_tokens_to_workflows: boolean; send_secrets_and_variables: boolean; require_approval_for_fork_pr_workflows: boolean }`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsGetPrivateRepoForkPrWorkflowsSettingsOrganizationInput = Parameters<typeof github.actions.getPrivateRepoForkPrWorkflowsSettingsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetPrivateRepoForkPrWorkflowsSettingsOrganizationOutput = Awaited<ReturnType<typeof github.actions.getPrivateRepoForkPrWorkflowsSettingsOrganization>>;

const input: ActionsGetPrivateRepoForkPrWorkflowsSettingsOrganizationInput = {} as { org: string };
const result: ActionsGetPrivateRepoForkPrWorkflowsSettingsOrganizationOutput = await github.actions.getPrivateRepoForkPrWorkflowsSettingsOrganization(input);

// Result shape (from schema): { run_workflows_from_fork_pull_requests: boolean; send_write_tokens_to_workflows: boolean; send_secrets_and_variables: boolean; require_approval_for_fork_pr_workflows: boolean }
```

### `github.actions.setPrivateRepoForkPrWorkflowsSettingsOrganization`

- **HTTP**: `PUT /orgs/{org}/actions/permissions/fork-pr-workflows-private-repos`
- **What it does**: Set private repo fork PR workflow settings for an organization
- **OpenAPI operationId**: `actions/set-private-repo-fork-pr-workflows-settings-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ run_workflows_from_fork_pull_requests: boolean; send_write_tokens_to_workflows?: boolean; send_secrets_and_variables?: boolean; require_approval_for_fork_pr_workflows?: boolean; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type ActionsSetPrivateRepoForkPrWorkflowsSettingsOrganizationInput = Parameters<typeof github.actions.setPrivateRepoForkPrWorkflowsSettingsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetPrivateRepoForkPrWorkflowsSettingsOrganizationOutput = Awaited<ReturnType<typeof github.actions.setPrivateRepoForkPrWorkflowsSettingsOrganization>>;

const input: ActionsSetPrivateRepoForkPrWorkflowsSettingsOrganizationInput = {} as { run_workflows_from_fork_pull_requests: boolean; send_write_tokens_to_workflows?: boolean; send_secrets_and_variables?: boolean; require_approval_for_fork_pr_workflows?: boolean; org: string };
const result: ActionsSetPrivateRepoForkPrWorkflowsSettingsOrganizationOutput = await github.actions.setPrivateRepoForkPrWorkflowsSettingsOrganization(input);

// Result shape (from schema): unknown
```

### `github.actions.listSelectedRepositoriesEnabledGithubActionsOrganization`

- **HTTP**: `GET /orgs/{org}/actions/permissions/repositories`
- **What it does**: List selected repositories enabled for GitHub Actions in an organization
- **OpenAPI operationId**: `actions/list-selected-repositories-enabled-github-actions-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: string ...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationInput = Parameters<typeof github.actions.listSelectedRepositoriesEnabledGithubActionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationOutput = Awaited<ReturnType<typeof github.actions.listSelectedRepositoriesEnabledGithubActionsOrganization>>;

const input: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationInput = {} as { org: string; per_page?: number; page?: number };
const result: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationOutput = await github.actions.listSelectedRepositoriesEnabledGithubActionsOrganization(input);

// Result shape (from schema): { total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: string ...
```

### `github.actions.setSelectedRepositoriesEnabledGithubActionsOrganization`

- **HTTP**: `PUT /orgs/{org}/actions/permissions/repositories`
- **What it does**: Set selected repositories enabled for GitHub Actions in an organization
- **OpenAPI operationId**: `actions/set-selected-repositories-enabled-github-actions-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_repository_ids: (number)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationInput = Parameters<typeof github.actions.setSelectedRepositoriesEnabledGithubActionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationOutput = Awaited<ReturnType<typeof github.actions.setSelectedRepositoriesEnabledGithubActionsOrganization>>;

const input: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationInput = {} as { selected_repository_ids: (number)[]; org: string };
const result: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationOutput = await github.actions.setSelectedRepositoriesEnabledGithubActionsOrganization(input);

// Result shape (from schema): unknown
```

### `github.actions.disableSelectedRepositoryGithubActionsOrganization`

- **HTTP**: `DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}`
- **What it does**: Disable a selected repository for GitHub Actions in an organization
- **OpenAPI operationId**: `actions/disable-selected-repository-github-actions-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsDisableSelectedRepositoryGithubActionsOrganizationInput = Parameters<typeof github.actions.disableSelectedRepositoryGithubActionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDisableSelectedRepositoryGithubActionsOrganizationOutput = Awaited<ReturnType<typeof github.actions.disableSelectedRepositoryGithubActionsOrganization>>;

const input: ActionsDisableSelectedRepositoryGithubActionsOrganizationInput = {} as { org: string; repository_id: number };
const result: ActionsDisableSelectedRepositoryGithubActionsOrganizationOutput = await github.actions.disableSelectedRepositoryGithubActionsOrganization(input);

// Result shape (from schema): unknown
```

### `github.actions.enableSelectedRepositoryGithubActionsOrganization`

- **HTTP**: `PUT /orgs/{org}/actions/permissions/repositories/{repository_id}`
- **What it does**: Enable a selected repository for GitHub Actions in an organization
- **OpenAPI operationId**: `actions/enable-selected-repository-github-actions-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsEnableSelectedRepositoryGithubActionsOrganizationInput = Parameters<typeof github.actions.enableSelectedRepositoryGithubActionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsEnableSelectedRepositoryGithubActionsOrganizationOutput = Awaited<ReturnType<typeof github.actions.enableSelectedRepositoryGithubActionsOrganization>>;

const input: ActionsEnableSelectedRepositoryGithubActionsOrganizationInput = {} as { org: string; repository_id: number };
const result: ActionsEnableSelectedRepositoryGithubActionsOrganizationOutput = await github.actions.enableSelectedRepositoryGithubActionsOrganization(input);

// Result shape (from schema): unknown
```

### `github.actions.getAllowedActionsOrganization`

- **HTTP**: `GET /orgs/{org}/actions/permissions/selected-actions`
- **What it does**: Get allowed actions and reusable workflows for an organization
- **OpenAPI operationId**: `actions/get-allowed-actions-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ github_owned_allowed?: boolean; verified_allowed?: boolean; patterns_allowed?: (string)[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetAllowedActionsOrganizationInput = Parameters<typeof github.actions.getAllowedActionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetAllowedActionsOrganizationOutput = Awaited<ReturnType<typeof github.actions.getAllowedActionsOrganization>>;

const input: ActionsGetAllowedActionsOrganizationInput = {} as { org: string };
const result: ActionsGetAllowedActionsOrganizationOutput = await github.actions.getAllowedActionsOrganization(input);

// Result shape (from schema): { github_owned_allowed?: boolean; verified_allowed?: boolean; patterns_allowed?: (string)[] }
```

### `github.actions.setAllowedActionsOrganization`

- **HTTP**: `PUT /orgs/{org}/actions/permissions/selected-actions`
- **What it does**: Set allowed actions and reusable workflows for an organization
- **OpenAPI operationId**: `actions/set-allowed-actions-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ github_owned_allowed?: boolean; verified_allowed?: boolean; patterns_allowed?: (string)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsSetAllowedActionsOrganizationInput = Parameters<typeof github.actions.setAllowedActionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetAllowedActionsOrganizationOutput = Awaited<ReturnType<typeof github.actions.setAllowedActionsOrganization>>;

const input: ActionsSetAllowedActionsOrganizationInput = {} as { github_owned_allowed?: boolean; verified_allowed?: boolean; patterns_allowed?: (string)[]; org: string };
const result: ActionsSetAllowedActionsOrganizationOutput = await github.actions.setAllowedActionsOrganization(input);

// Result shape (from schema): unknown
```

### `github.actions.getSelfHostedRunnersPermissionsOrganization`

- **HTTP**: `GET /orgs/{org}/actions/permissions/self-hosted-runners`
- **What it does**: Get self-hosted runners settings for an organization
- **OpenAPI operationId**: `actions/get-self-hosted-runners-permissions-organization`
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

- Client return type: `{ enabled_repositories: "all" | "selected" | "none"; selected_repositories_url?: string }`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsGetSelfHostedRunnersPermissionsOrganizationInput = Parameters<typeof github.actions.getSelfHostedRunnersPermissionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetSelfHostedRunnersPermissionsOrganizationOutput = Awaited<ReturnType<typeof github.actions.getSelfHostedRunnersPermissionsOrganization>>;

const input: ActionsGetSelfHostedRunnersPermissionsOrganizationInput = {} as { org: string };
const result: ActionsGetSelfHostedRunnersPermissionsOrganizationOutput = await github.actions.getSelfHostedRunnersPermissionsOrganization(input);

// Result shape (from schema): { enabled_repositories: "all" | "selected" | "none"; selected_repositories_url?: string }
```

### `github.actions.setSelfHostedRunnersPermissionsOrganization`

- **HTTP**: `PUT /orgs/{org}/actions/permissions/self-hosted-runners`
- **What it does**: Set self-hosted runners settings for an organization
- **OpenAPI operationId**: `actions/set-self-hosted-runners-permissions-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enabled_repositories: "all" | "selected" | "none"; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type ActionsSetSelfHostedRunnersPermissionsOrganizationInput = Parameters<typeof github.actions.setSelfHostedRunnersPermissionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetSelfHostedRunnersPermissionsOrganizationOutput = Awaited<ReturnType<typeof github.actions.setSelfHostedRunnersPermissionsOrganization>>;

const input: ActionsSetSelfHostedRunnersPermissionsOrganizationInput = {} as { enabled_repositories: "all" | "selected" | "none"; org: string };
const result: ActionsSetSelfHostedRunnersPermissionsOrganizationOutput = await github.actions.setSelfHostedRunnersPermissionsOrganization(input);

// Result shape (from schema): unknown
```

### `github.actions.listSelectedRepositoriesSelfHostedRunnersOrganization`

- **HTTP**: `GET /orgs/{org}/actions/permissions/self-hosted-runners/repositories`
- **What it does**: List repositories allowed to use self-hosted runners in an organization
- **OpenAPI operationId**: `actions/list-selected-repositories-self-hosted-runners-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count?: number; repositories?: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: strin...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsListSelectedRepositoriesSelfHostedRunnersOrganizationInput = Parameters<typeof github.actions.listSelectedRepositoriesSelfHostedRunnersOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListSelectedRepositoriesSelfHostedRunnersOrganizationOutput = Awaited<ReturnType<typeof github.actions.listSelectedRepositoriesSelfHostedRunnersOrganization>>;

const input: ActionsListSelectedRepositoriesSelfHostedRunnersOrganizationInput = {} as { org: string; per_page?: number; page?: number };
const result: ActionsListSelectedRepositoriesSelfHostedRunnersOrganizationOutput = await github.actions.listSelectedRepositoriesSelfHostedRunnersOrganization(input);

// Result shape (from schema): { total_count?: number; repositories?: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: strin...
```

### `github.actions.setSelectedRepositoriesSelfHostedRunnersOrganization`

- **HTTP**: `PUT /orgs/{org}/actions/permissions/self-hosted-runners/repositories`
- **What it does**: Set repositories allowed to use self-hosted runners in an organization
- **OpenAPI operationId**: `actions/set-selected-repositories-self-hosted-runners-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_repository_ids: (number)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type ActionsSetSelectedRepositoriesSelfHostedRunnersOrganizationInput = Parameters<typeof github.actions.setSelectedRepositoriesSelfHostedRunnersOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetSelectedRepositoriesSelfHostedRunnersOrganizationOutput = Awaited<ReturnType<typeof github.actions.setSelectedRepositoriesSelfHostedRunnersOrganization>>;

const input: ActionsSetSelectedRepositoriesSelfHostedRunnersOrganizationInput = {} as { selected_repository_ids: (number)[]; org: string };
const result: ActionsSetSelectedRepositoriesSelfHostedRunnersOrganizationOutput = await github.actions.setSelectedRepositoriesSelfHostedRunnersOrganization(input);

// Result shape (from schema): unknown
```

### `github.actions.disableSelectedRepositorySelfHostedRunnersOrganization`

- **HTTP**: `DELETE /orgs/{org}/actions/permissions/self-hosted-runners/repositories/{repository_id}`
- **What it does**: Remove a repository from the list of repositories allowed to use self-hosted runners in an organization
- **OpenAPI operationId**: `actions/disable-selected-repository-self-hosted-runners-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type ActionsDisableSelectedRepositorySelfHostedRunnersOrganizationInput = Parameters<typeof github.actions.disableSelectedRepositorySelfHostedRunnersOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDisableSelectedRepositorySelfHostedRunnersOrganizationOutput = Awaited<ReturnType<typeof github.actions.disableSelectedRepositorySelfHostedRunnersOrganization>>;

const input: ActionsDisableSelectedRepositorySelfHostedRunnersOrganizationInput = {} as { org: string; repository_id: number };
const result: ActionsDisableSelectedRepositorySelfHostedRunnersOrganizationOutput = await github.actions.disableSelectedRepositorySelfHostedRunnersOrganization(input);

// Result shape (from schema): unknown
```

### `github.actions.enableSelectedRepositorySelfHostedRunnersOrganization`

- **HTTP**: `PUT /orgs/{org}/actions/permissions/self-hosted-runners/repositories/{repository_id}`
- **What it does**: Add a repository to the list of repositories allowed to use self-hosted runners in an organization
- **OpenAPI operationId**: `actions/enable-selected-repository-self-hosted-runners-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type ActionsEnableSelectedRepositorySelfHostedRunnersOrganizationInput = Parameters<typeof github.actions.enableSelectedRepositorySelfHostedRunnersOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsEnableSelectedRepositorySelfHostedRunnersOrganizationOutput = Awaited<ReturnType<typeof github.actions.enableSelectedRepositorySelfHostedRunnersOrganization>>;

const input: ActionsEnableSelectedRepositorySelfHostedRunnersOrganizationInput = {} as { org: string; repository_id: number };
const result: ActionsEnableSelectedRepositorySelfHostedRunnersOrganizationOutput = await github.actions.enableSelectedRepositorySelfHostedRunnersOrganization(input);

// Result shape (from schema): unknown
```

### `github.actions.getGithubActionsDefaultWorkflowPermissionsOrganization`

- **HTTP**: `GET /orgs/{org}/actions/permissions/workflow`
- **What it does**: Get default workflow permissions for an organization
- **OpenAPI operationId**: `actions/get-github-actions-default-workflow-permissions-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ default_workflow_permissions: "read" | "write"; can_approve_pull_request_reviews: boolean }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationInput = Parameters<typeof github.actions.getGithubActionsDefaultWorkflowPermissionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationOutput = Awaited<ReturnType<typeof github.actions.getGithubActionsDefaultWorkflowPermissionsOrganization>>;

const input: ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationInput = {} as { org: string };
const result: ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationOutput = await github.actions.getGithubActionsDefaultWorkflowPermissionsOrganization(input);

// Result shape (from schema): { default_workflow_permissions: "read" | "write"; can_approve_pull_request_reviews: boolean }
```

### `github.actions.setGithubActionsDefaultWorkflowPermissionsOrganization`

- **HTTP**: `PUT /orgs/{org}/actions/permissions/workflow`
- **What it does**: Set default workflow permissions for an organization
- **OpenAPI operationId**: `actions/set-github-actions-default-workflow-permissions-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ default_workflow_permissions?: "read" | "write"; can_approve_pull_request_reviews?: boolean; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationInput = Parameters<typeof github.actions.setGithubActionsDefaultWorkflowPermissionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationOutput = Awaited<ReturnType<typeof github.actions.setGithubActionsDefaultWorkflowPermissionsOrganization>>;

const input: ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationInput = {} as { default_workflow_permissions?: "read" | "write"; can_approve_pull_request_reviews?: boolean; org: string };
const result: ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationOutput = await github.actions.setGithubActionsDefaultWorkflowPermissionsOrganization(input);

// Result shape (from schema): unknown
```

### `github.actions.listSelfHostedRunnerGroupsForOrg`

- **HTTP**: `GET /orgs/{org}/actions/runner-groups`
- **What it does**: List self-hosted runner groups for an organization
- **OpenAPI operationId**: `actions/list-self-hosted-runner-groups-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number; visible_to_repository?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; runner_groups: ({ id: number; name: string; visibility: string; default: boolean; selected_repositories_url?: string; runners_url: string; hosted_runners_url?: string; network_configuration_id?: s...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListSelfHostedRunnerGroupsForOrgInput = Parameters<typeof github.actions.listSelfHostedRunnerGroupsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListSelfHostedRunnerGroupsForOrgOutput = Awaited<ReturnType<typeof github.actions.listSelfHostedRunnerGroupsForOrg>>;

const input: ActionsListSelfHostedRunnerGroupsForOrgInput = {} as { org: string; per_page?: number; page?: number; visible_to_repository?: string };
const result: ActionsListSelfHostedRunnerGroupsForOrgOutput = await github.actions.listSelfHostedRunnerGroupsForOrg(input);

// Result shape (from schema): { total_count: number; runner_groups: ({ id: number; name: string; visibility: string; default: boolean; selected_repositories_url?: string; runners_url: string; hosted_runners_url?: string; network_configuration_id?: s...
```

### `github.actions.createSelfHostedRunnerGroupForOrg`

- **HTTP**: `POST /orgs/{org}/actions/runner-groups`
- **What it does**: Create a self-hosted runner group for an organization
- **OpenAPI operationId**: `actions/create-self-hosted-runner-group-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; visibility?: "selected" | "all" | "private"; selected_repository_ids?: (number)[]; runners?: (number)[]; allows_public_repositories?: boolean; restricted_to_workflows?: boolean; selected_workflows?: (string)[]; network_configuration_id?: string; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; visibility: string; default: boolean; selected_repositories_url?: string; runners_url: string; hosted_runners_url?: string; network_configuration_id?: string; inherited: boolean; inherited_al...`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ActionsCreateSelfHostedRunnerGroupForOrgInput = Parameters<typeof github.actions.createSelfHostedRunnerGroupForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsCreateSelfHostedRunnerGroupForOrgOutput = Awaited<ReturnType<typeof github.actions.createSelfHostedRunnerGroupForOrg>>;

const input: ActionsCreateSelfHostedRunnerGroupForOrgInput = {} as { name: string; visibility?: "selected" | "all" | "private"; selected_repository_ids?: (number)[]; runners?: (number)[]; allows_public_repositories?: boolean; restricted_to_workflows?: boolean; selected_workflows?: (string)[]; network_configuration_id?: string; org: string };
const result: ActionsCreateSelfHostedRunnerGroupForOrgOutput = await github.actions.createSelfHostedRunnerGroupForOrg(input);

// Result shape (from schema): { id: number; name: string; visibility: string; default: boolean; selected_repositories_url?: string; runners_url: string; hosted_runners_url?: string; network_configuration_id?: string; inherited: boolean; inherited_al...
```

### `github.actions.deleteSelfHostedRunnerGroupFromOrg`

- **HTTP**: `DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}`
- **What it does**: Delete a self-hosted runner group from an organization
- **OpenAPI operationId**: `actions/delete-self-hosted-runner-group-from-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; runner_group_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsDeleteSelfHostedRunnerGroupFromOrgInput = Parameters<typeof github.actions.deleteSelfHostedRunnerGroupFromOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteSelfHostedRunnerGroupFromOrgOutput = Awaited<ReturnType<typeof github.actions.deleteSelfHostedRunnerGroupFromOrg>>;

const input: ActionsDeleteSelfHostedRunnerGroupFromOrgInput = {} as { org: string; runner_group_id: number };
const result: ActionsDeleteSelfHostedRunnerGroupFromOrgOutput = await github.actions.deleteSelfHostedRunnerGroupFromOrg(input);

// Result shape (from schema): unknown
```

### `github.actions.getSelfHostedRunnerGroupForOrg`

- **HTTP**: `GET /orgs/{org}/actions/runner-groups/{runner_group_id}`
- **What it does**: Get a self-hosted runner group for an organization
- **OpenAPI operationId**: `actions/get-self-hosted-runner-group-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; runner_group_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; visibility: string; default: boolean; selected_repositories_url?: string; runners_url: string; hosted_runners_url?: string; network_configuration_id?: string; inherited: boolean; inherited_al...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetSelfHostedRunnerGroupForOrgInput = Parameters<typeof github.actions.getSelfHostedRunnerGroupForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetSelfHostedRunnerGroupForOrgOutput = Awaited<ReturnType<typeof github.actions.getSelfHostedRunnerGroupForOrg>>;

const input: ActionsGetSelfHostedRunnerGroupForOrgInput = {} as { org: string; runner_group_id: number };
const result: ActionsGetSelfHostedRunnerGroupForOrgOutput = await github.actions.getSelfHostedRunnerGroupForOrg(input);

// Result shape (from schema): { id: number; name: string; visibility: string; default: boolean; selected_repositories_url?: string; runners_url: string; hosted_runners_url?: string; network_configuration_id?: string; inherited: boolean; inherited_al...
```

### `github.actions.updateSelfHostedRunnerGroupForOrg`

- **HTTP**: `PATCH /orgs/{org}/actions/runner-groups/{runner_group_id}`
- **What it does**: Update a self-hosted runner group for an organization
- **OpenAPI operationId**: `actions/update-self-hosted-runner-group-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; visibility?: "selected" | "all" | "private"; allows_public_repositories?: boolean; restricted_to_workflows?: boolean; selected_workflows?: (string)[]; network_configuration_id?: string | null; org: string; runner_group_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; visibility: string; default: boolean; selected_repositories_url?: string; runners_url: string; hosted_runners_url?: string; network_configuration_id?: string; inherited: boolean; inherited_al...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsUpdateSelfHostedRunnerGroupForOrgInput = Parameters<typeof github.actions.updateSelfHostedRunnerGroupForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsUpdateSelfHostedRunnerGroupForOrgOutput = Awaited<ReturnType<typeof github.actions.updateSelfHostedRunnerGroupForOrg>>;

const input: ActionsUpdateSelfHostedRunnerGroupForOrgInput = {} as { name: string; visibility?: "selected" | "all" | "private"; allows_public_repositories?: boolean; restricted_to_workflows?: boolean; selected_workflows?: (string)[]; network_configuration_id?: string | null; org: string; runner_group_id: number };
const result: ActionsUpdateSelfHostedRunnerGroupForOrgOutput = await github.actions.updateSelfHostedRunnerGroupForOrg(input);

// Result shape (from schema): { id: number; name: string; visibility: string; default: boolean; selected_repositories_url?: string; runners_url: string; hosted_runners_url?: string; network_configuration_id?: string; inherited: boolean; inherited_al...
```

### `github.actions.listGithubHostedRunnersInGroupForOrg`

- **HTTP**: `GET /orgs/{org}/actions/runner-groups/{runner_group_id}/hosted-runners`
- **What it does**: List GitHub-hosted runners in a group for an organization
- **OpenAPI operationId**: `actions/list-github-hosted-runners-in-group-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; runner_group_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; runners: ({ id: number; name: string; runner_group_id?: number; image_details: { id: string; size_gb: number; display_name: string; source: "github" | "partner" | "custom"; version?: string } | nu...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListGithubHostedRunnersInGroupForOrgInput = Parameters<typeof github.actions.listGithubHostedRunnersInGroupForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListGithubHostedRunnersInGroupForOrgOutput = Awaited<ReturnType<typeof github.actions.listGithubHostedRunnersInGroupForOrg>>;

const input: ActionsListGithubHostedRunnersInGroupForOrgInput = {} as { org: string; runner_group_id: number; per_page?: number; page?: number };
const result: ActionsListGithubHostedRunnersInGroupForOrgOutput = await github.actions.listGithubHostedRunnersInGroupForOrg(input);

// Result shape (from schema): { total_count: number; runners: ({ id: number; name: string; runner_group_id?: number; image_details: { id: string; size_gb: number; display_name: string; source: "github" | "partner" | "custom"; version?: string } | nu...
```

### `github.actions.listRepoAccessToSelfHostedRunnerGroupInOrg`

- **HTTP**: `GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`
- **What it does**: List repository access to a self-hosted runner group in an organization
- **OpenAPI operationId**: `actions/list-repo-access-to-self-hosted-runner-group-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; runner_group_id: number; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListRepoAccessToSelfHostedRunnerGroupInOrgInput = Parameters<typeof github.actions.listRepoAccessToSelfHostedRunnerGroupInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListRepoAccessToSelfHostedRunnerGroupInOrgOutput = Awaited<ReturnType<typeof github.actions.listRepoAccessToSelfHostedRunnerGroupInOrg>>;

const input: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgInput = {} as { org: string; runner_group_id: number; page?: number; per_page?: number };
const result: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgOutput = await github.actions.listRepoAccessToSelfHostedRunnerGroupInOrg(input);

// Result shape (from schema): { total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...
```

### `github.actions.setRepoAccessToSelfHostedRunnerGroupInOrg`

- **HTTP**: `PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`
- **What it does**: Set repository access for a self-hosted runner group in an organization
- **OpenAPI operationId**: `actions/set-repo-access-to-self-hosted-runner-group-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_repository_ids: (number)[]; org: string; runner_group_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgInput = Parameters<typeof github.actions.setRepoAccessToSelfHostedRunnerGroupInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgOutput = Awaited<ReturnType<typeof github.actions.setRepoAccessToSelfHostedRunnerGroupInOrg>>;

const input: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgInput = {} as { selected_repository_ids: (number)[]; org: string; runner_group_id: number };
const result: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgOutput = await github.actions.setRepoAccessToSelfHostedRunnerGroupInOrg(input);

// Result shape (from schema): unknown
```

### `github.actions.removeRepoAccessToSelfHostedRunnerGroupInOrg`

- **HTTP**: `DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}`
- **What it does**: Remove repository access to a self-hosted runner group in an organization
- **OpenAPI operationId**: `actions/remove-repo-access-to-self-hosted-runner-group-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; runner_group_id: number; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgInput = Parameters<typeof github.actions.removeRepoAccessToSelfHostedRunnerGroupInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgOutput = Awaited<ReturnType<typeof github.actions.removeRepoAccessToSelfHostedRunnerGroupInOrg>>;

const input: ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgInput = {} as { org: string; runner_group_id: number; repository_id: number };
const result: ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgOutput = await github.actions.removeRepoAccessToSelfHostedRunnerGroupInOrg(input);

// Result shape (from schema): unknown
```

### `github.actions.addRepoAccessToSelfHostedRunnerGroupInOrg`

- **HTTP**: `PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}`
- **What it does**: Add repository access to a self-hosted runner group in an organization
- **OpenAPI operationId**: `actions/add-repo-access-to-self-hosted-runner-group-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; runner_group_id: number; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgInput = Parameters<typeof github.actions.addRepoAccessToSelfHostedRunnerGroupInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgOutput = Awaited<ReturnType<typeof github.actions.addRepoAccessToSelfHostedRunnerGroupInOrg>>;

const input: ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgInput = {} as { org: string; runner_group_id: number; repository_id: number };
const result: ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgOutput = await github.actions.addRepoAccessToSelfHostedRunnerGroupInOrg(input);

// Result shape (from schema): unknown
```

### `github.actions.listSelfHostedRunnersInGroupForOrg`

- **HTTP**: `GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`
- **What it does**: List self-hosted runners in a group for an organization
- **OpenAPI operationId**: `actions/list-self-hosted-runners-in-group-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; runner_group_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; runners: ({ id: number; runner_group_id?: number; name: string; os: string; status: string; busy: boolean; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[]; ephemeral?: boo...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListSelfHostedRunnersInGroupForOrgInput = Parameters<typeof github.actions.listSelfHostedRunnersInGroupForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListSelfHostedRunnersInGroupForOrgOutput = Awaited<ReturnType<typeof github.actions.listSelfHostedRunnersInGroupForOrg>>;

const input: ActionsListSelfHostedRunnersInGroupForOrgInput = {} as { org: string; runner_group_id: number; per_page?: number; page?: number };
const result: ActionsListSelfHostedRunnersInGroupForOrgOutput = await github.actions.listSelfHostedRunnersInGroupForOrg(input);

// Result shape (from schema): { total_count: number; runners: ({ id: number; runner_group_id?: number; name: string; os: string; status: string; busy: boolean; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[]; ephemeral?: boo...
```

### `github.actions.setSelfHostedRunnersInGroupForOrg`

- **HTTP**: `PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`
- **What it does**: Set self-hosted runners in a group for an organization
- **OpenAPI operationId**: `actions/set-self-hosted-runners-in-group-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ runners: (number)[]; org: string; runner_group_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsSetSelfHostedRunnersInGroupForOrgInput = Parameters<typeof github.actions.setSelfHostedRunnersInGroupForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetSelfHostedRunnersInGroupForOrgOutput = Awaited<ReturnType<typeof github.actions.setSelfHostedRunnersInGroupForOrg>>;

const input: ActionsSetSelfHostedRunnersInGroupForOrgInput = {} as { runners: (number)[]; org: string; runner_group_id: number };
const result: ActionsSetSelfHostedRunnersInGroupForOrgOutput = await github.actions.setSelfHostedRunnersInGroupForOrg(input);

// Result shape (from schema): unknown
```

### `github.actions.removeSelfHostedRunnerFromGroupForOrg`

- **HTTP**: `DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`
- **What it does**: Remove a self-hosted runner from a group for an organization
- **OpenAPI operationId**: `actions/remove-self-hosted-runner-from-group-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; runner_group_id: number; runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsRemoveSelfHostedRunnerFromGroupForOrgInput = Parameters<typeof github.actions.removeSelfHostedRunnerFromGroupForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsRemoveSelfHostedRunnerFromGroupForOrgOutput = Awaited<ReturnType<typeof github.actions.removeSelfHostedRunnerFromGroupForOrg>>;

const input: ActionsRemoveSelfHostedRunnerFromGroupForOrgInput = {} as { org: string; runner_group_id: number; runner_id: number };
const result: ActionsRemoveSelfHostedRunnerFromGroupForOrgOutput = await github.actions.removeSelfHostedRunnerFromGroupForOrg(input);

// Result shape (from schema): unknown
```

### `github.actions.addSelfHostedRunnerToGroupForOrg`

- **HTTP**: `PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`
- **What it does**: Add a self-hosted runner to a group for an organization
- **OpenAPI operationId**: `actions/add-self-hosted-runner-to-group-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; runner_group_id: number; runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsAddSelfHostedRunnerToGroupForOrgInput = Parameters<typeof github.actions.addSelfHostedRunnerToGroupForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsAddSelfHostedRunnerToGroupForOrgOutput = Awaited<ReturnType<typeof github.actions.addSelfHostedRunnerToGroupForOrg>>;

const input: ActionsAddSelfHostedRunnerToGroupForOrgInput = {} as { org: string; runner_group_id: number; runner_id: number };
const result: ActionsAddSelfHostedRunnerToGroupForOrgOutput = await github.actions.addSelfHostedRunnerToGroupForOrg(input);

// Result shape (from schema): unknown
```

### `github.actions.listSelfHostedRunnersForOrg`

- **HTTP**: `GET /orgs/{org}/actions/runners`
- **What it does**: List self-hosted runners for an organization
- **OpenAPI operationId**: `actions/list-self-hosted-runners-for-org`
- **Path params**: None
- **Query params**: `name`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; name?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; runners: ({ id: number; runner_group_id?: number; name: string; os: string; status: string; busy: boolean; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[]; ephemeral?: boo...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListSelfHostedRunnersForOrgInput = Parameters<typeof github.actions.listSelfHostedRunnersForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListSelfHostedRunnersForOrgOutput = Awaited<ReturnType<typeof github.actions.listSelfHostedRunnersForOrg>>;

const input: ActionsListSelfHostedRunnersForOrgInput = {} as { org: string; name?: string; per_page?: number; page?: number };
const result: ActionsListSelfHostedRunnersForOrgOutput = await github.actions.listSelfHostedRunnersForOrg(input);

// Result shape (from schema): { total_count: number; runners: ({ id: number; runner_group_id?: number; name: string; os: string; status: string; busy: boolean; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[]; ephemeral?: boo...
```

### `github.actions.deleteSelfHostedRunnerFromOrg`

- **HTTP**: `DELETE /orgs/{org}/actions/runners/{runner_id}`
- **What it does**: Delete a self-hosted runner from an organization
- **OpenAPI operationId**: `actions/delete-self-hosted-runner-from-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `422`

```ts
import github from "@utdk/github";

type ActionsDeleteSelfHostedRunnerFromOrgInput = Parameters<typeof github.actions.deleteSelfHostedRunnerFromOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteSelfHostedRunnerFromOrgOutput = Awaited<ReturnType<typeof github.actions.deleteSelfHostedRunnerFromOrg>>;

const input: ActionsDeleteSelfHostedRunnerFromOrgInput = {} as { org: string; runner_id: number };
const result: ActionsDeleteSelfHostedRunnerFromOrgOutput = await github.actions.deleteSelfHostedRunnerFromOrg(input);

// Result shape (from schema): unknown
```

### `github.actions.getSelfHostedRunnerForOrg`

- **HTTP**: `GET /orgs/{org}/actions/runners/{runner_id}`
- **What it does**: Get a self-hosted runner for an organization
- **OpenAPI operationId**: `actions/get-self-hosted-runner-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; runner_group_id?: number; name: string; os: string; status: string; busy: boolean; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[]; ephemeral?: boolean; version?: string | null }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetSelfHostedRunnerForOrgInput = Parameters<typeof github.actions.getSelfHostedRunnerForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetSelfHostedRunnerForOrgOutput = Awaited<ReturnType<typeof github.actions.getSelfHostedRunnerForOrg>>;

const input: ActionsGetSelfHostedRunnerForOrgInput = {} as { org: string; runner_id: number };
const result: ActionsGetSelfHostedRunnerForOrgOutput = await github.actions.getSelfHostedRunnerForOrg(input);

// Result shape (from schema): { id: number; runner_group_id?: number; name: string; os: string; status: string; busy: boolean; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[]; ephemeral?: boolean; version?: string | null }
```

### `github.actions.removeAllCustomLabelsFromSelfHostedRunnerForOrg`

- **HTTP**: `DELETE /orgs/{org}/actions/runners/{runner_id}/labels`
- **What it does**: Remove all custom labels from a self-hosted runner for an organization
- **OpenAPI operationId**: `actions/remove-all-custom-labels-from-self-hosted-runner-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgInput = Parameters<typeof github.actions.removeAllCustomLabelsFromSelfHostedRunnerForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgOutput = Awaited<ReturnType<typeof github.actions.removeAllCustomLabelsFromSelfHostedRunnerForOrg>>;

const input: ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgInput = {} as { org: string; runner_id: number };
const result: ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgOutput = await github.actions.removeAllCustomLabelsFromSelfHostedRunnerForOrg(input);

// Result shape (from schema): { total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }
```

### `github.actions.listLabelsForSelfHostedRunnerForOrg`

- **HTTP**: `GET /orgs/{org}/actions/runners/{runner_id}/labels`
- **What it does**: List labels for a self-hosted runner for an organization
- **OpenAPI operationId**: `actions/list-labels-for-self-hosted-runner-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ActionsListLabelsForSelfHostedRunnerForOrgInput = Parameters<typeof github.actions.listLabelsForSelfHostedRunnerForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListLabelsForSelfHostedRunnerForOrgOutput = Awaited<ReturnType<typeof github.actions.listLabelsForSelfHostedRunnerForOrg>>;

const input: ActionsListLabelsForSelfHostedRunnerForOrgInput = {} as { org: string; runner_id: number };
const result: ActionsListLabelsForSelfHostedRunnerForOrgOutput = await github.actions.listLabelsForSelfHostedRunnerForOrg(input);

// Result shape (from schema): { total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }
```

### `github.actions.addCustomLabelsToSelfHostedRunnerForOrg`

- **HTTP**: `POST /orgs/{org}/actions/runners/{runner_id}/labels`
- **What it does**: Add custom labels to a self-hosted runner for an organization
- **OpenAPI operationId**: `actions/add-custom-labels-to-self-hosted-runner-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ labels: (string)[]; org: string; runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type ActionsAddCustomLabelsToSelfHostedRunnerForOrgInput = Parameters<typeof github.actions.addCustomLabelsToSelfHostedRunnerForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsAddCustomLabelsToSelfHostedRunnerForOrgOutput = Awaited<ReturnType<typeof github.actions.addCustomLabelsToSelfHostedRunnerForOrg>>;

const input: ActionsAddCustomLabelsToSelfHostedRunnerForOrgInput = {} as { labels: (string)[]; org: string; runner_id: number };
const result: ActionsAddCustomLabelsToSelfHostedRunnerForOrgOutput = await github.actions.addCustomLabelsToSelfHostedRunnerForOrg(input);

// Result shape (from schema): { total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }
```

### `github.actions.setCustomLabelsForSelfHostedRunnerForOrg`

- **HTTP**: `PUT /orgs/{org}/actions/runners/{runner_id}/labels`
- **What it does**: Set custom labels for a self-hosted runner for an organization
- **OpenAPI operationId**: `actions/set-custom-labels-for-self-hosted-runner-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ labels: (string)[]; org: string; runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type ActionsSetCustomLabelsForSelfHostedRunnerForOrgInput = Parameters<typeof github.actions.setCustomLabelsForSelfHostedRunnerForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetCustomLabelsForSelfHostedRunnerForOrgOutput = Awaited<ReturnType<typeof github.actions.setCustomLabelsForSelfHostedRunnerForOrg>>;

const input: ActionsSetCustomLabelsForSelfHostedRunnerForOrgInput = {} as { labels: (string)[]; org: string; runner_id: number };
const result: ActionsSetCustomLabelsForSelfHostedRunnerForOrgOutput = await github.actions.setCustomLabelsForSelfHostedRunnerForOrg(input);

// Result shape (from schema): { total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }
```

### `github.actions.removeCustomLabelFromSelfHostedRunnerForOrg`

- **HTTP**: `DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}`
- **What it does**: Remove a custom label from a self-hosted runner for an organization
- **OpenAPI operationId**: `actions/remove-custom-label-from-self-hosted-runner-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; runner_id: number; name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgInput = Parameters<typeof github.actions.removeCustomLabelFromSelfHostedRunnerForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgOutput = Awaited<ReturnType<typeof github.actions.removeCustomLabelFromSelfHostedRunnerForOrg>>;

const input: ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgInput = {} as { org: string; runner_id: number; name: string };
const result: ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgOutput = await github.actions.removeCustomLabelFromSelfHostedRunnerForOrg(input);

// Result shape (from schema): { total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }
```

### `github.actions.listRunnerApplicationsForOrg`

- **HTTP**: `GET /orgs/{org}/actions/runners/downloads`
- **What it does**: List runner applications for an organization
- **OpenAPI operationId**: `actions/list-runner-applications-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ os: string; architecture: string; download_url: string; filename: string; temp_download_token?: string; sha256_checksum?: string })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListRunnerApplicationsForOrgInput = Parameters<typeof github.actions.listRunnerApplicationsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListRunnerApplicationsForOrgOutput = Awaited<ReturnType<typeof github.actions.listRunnerApplicationsForOrg>>;

const input: ActionsListRunnerApplicationsForOrgInput = {} as { org: string };
const result: ActionsListRunnerApplicationsForOrgOutput = await github.actions.listRunnerApplicationsForOrg(input);

// Result shape (from schema): ({ os: string; architecture: string; download_url: string; filename: string; temp_download_token?: string; sha256_checksum?: string })[]
```

### `github.actions.generateRunnerJitconfigForOrg`

- **HTTP**: `POST /orgs/{org}/actions/runners/generate-jitconfig`
- **What it does**: Create configuration for a just-in-time runner for an organization
- **OpenAPI operationId**: `actions/generate-runner-jitconfig-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; runner_group_id: number; labels: (string)[]; work_folder?: string; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ runner: { id: number; runner_group_id?: number; name: string; os: string; status: string; busy: boolean; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[]; ephemeral?: boolean; version?: string ...`
- OpenAPI response codes: `201`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type ActionsGenerateRunnerJitconfigForOrgInput = Parameters<typeof github.actions.generateRunnerJitconfigForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGenerateRunnerJitconfigForOrgOutput = Awaited<ReturnType<typeof github.actions.generateRunnerJitconfigForOrg>>;

const input: ActionsGenerateRunnerJitconfigForOrgInput = {} as { name: string; runner_group_id: number; labels: (string)[]; work_folder?: string; org: string };
const result: ActionsGenerateRunnerJitconfigForOrgOutput = await github.actions.generateRunnerJitconfigForOrg(input);

// Result shape (from schema): { runner: { id: number; runner_group_id?: number; name: string; os: string; status: string; busy: boolean; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[]; ephemeral?: boolean; version?: string ...
```

### `github.actions.createRegistrationTokenForOrg`

- **HTTP**: `POST /orgs/{org}/actions/runners/registration-token`
- **What it does**: Create a registration token for an organization
- **OpenAPI operationId**: `actions/create-registration-token-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ token: string; expires_at: string; permissions?: { [key: string]: unknown }; repositories?: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; sp...`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ActionsCreateRegistrationTokenForOrgInput = Parameters<typeof github.actions.createRegistrationTokenForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsCreateRegistrationTokenForOrgOutput = Awaited<ReturnType<typeof github.actions.createRegistrationTokenForOrg>>;

const input: ActionsCreateRegistrationTokenForOrgInput = {} as { org: string };
const result: ActionsCreateRegistrationTokenForOrgOutput = await github.actions.createRegistrationTokenForOrg(input);

// Result shape (from schema): { token: string; expires_at: string; permissions?: { [key: string]: unknown }; repositories?: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; sp...
```

### `github.actions.createRemoveTokenForOrg`

- **HTTP**: `POST /orgs/{org}/actions/runners/remove-token`
- **What it does**: Create a remove token for an organization
- **OpenAPI operationId**: `actions/create-remove-token-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ token: string; expires_at: string; permissions?: { [key: string]: unknown }; repositories?: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; sp...`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ActionsCreateRemoveTokenForOrgInput = Parameters<typeof github.actions.createRemoveTokenForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsCreateRemoveTokenForOrgOutput = Awaited<ReturnType<typeof github.actions.createRemoveTokenForOrg>>;

const input: ActionsCreateRemoveTokenForOrgInput = {} as { org: string };
const result: ActionsCreateRemoveTokenForOrgOutput = await github.actions.createRemoveTokenForOrg(input);

// Result shape (from schema): { token: string; expires_at: string; permissions?: { [key: string]: unknown }; repositories?: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; sp...
```

### `github.actions.listOrgSecrets`

- **HTTP**: `GET /orgs/{org}/actions/secrets`
- **What it does**: List organization secrets
- **OpenAPI operationId**: `actions/list-org-secrets`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; secrets: ({ name: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListOrgSecretsInput = Parameters<typeof github.actions.listOrgSecrets> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListOrgSecretsOutput = Awaited<ReturnType<typeof github.actions.listOrgSecrets>>;

const input: ActionsListOrgSecretsInput = {} as { org: string; per_page?: number; page?: number };
const result: ActionsListOrgSecretsOutput = await github.actions.listOrgSecrets(input);

// Result shape (from schema): { total_count: number; secrets: ({ name: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string })[] }
```

### `github.actions.deleteOrgSecret`

- **HTTP**: `DELETE /orgs/{org}/actions/secrets/{secret_name}`
- **What it does**: Delete an organization secret
- **OpenAPI operationId**: `actions/delete-org-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsDeleteOrgSecretInput = Parameters<typeof github.actions.deleteOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteOrgSecretOutput = Awaited<ReturnType<typeof github.actions.deleteOrgSecret>>;

const input: ActionsDeleteOrgSecretInput = {} as { org: string; secret_name: string };
const result: ActionsDeleteOrgSecretOutput = await github.actions.deleteOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.actions.getOrgSecret`

- **HTTP**: `GET /orgs/{org}/actions/secrets/{secret_name}`
- **What it does**: Get an organization secret
- **OpenAPI operationId**: `actions/get-org-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetOrgSecretInput = Parameters<typeof github.actions.getOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetOrgSecretOutput = Awaited<ReturnType<typeof github.actions.getOrgSecret>>;

const input: ActionsGetOrgSecretInput = {} as { org: string; secret_name: string };
const result: ActionsGetOrgSecretOutput = await github.actions.getOrgSecret(input);

// Result shape (from schema): { name: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string }
```

### `github.actions.createOrUpdateOrgSecret`

- **HTTP**: `PUT /orgs/{org}/actions/secrets/{secret_name}`
- **What it does**: Create or update an organization secret
- **OpenAPI operationId**: `actions/create-or-update-org-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ encrypted_value: string; key_id: string; visibility: "all" | "private" | "selected"; selected_repository_ids?: (number)[]; org: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`, `204`

```ts
import github from "@utdk/github";

type ActionsCreateOrUpdateOrgSecretInput = Parameters<typeof github.actions.createOrUpdateOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsCreateOrUpdateOrgSecretOutput = Awaited<ReturnType<typeof github.actions.createOrUpdateOrgSecret>>;

const input: ActionsCreateOrUpdateOrgSecretInput = {} as { encrypted_value: string; key_id: string; visibility: "all" | "private" | "selected"; selected_repository_ids?: (number)[]; org: string; secret_name: string };
const result: ActionsCreateOrUpdateOrgSecretOutput = await github.actions.createOrUpdateOrgSecret(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.actions.listSelectedReposForOrgSecret`

- **HTTP**: `GET /orgs/{org}/actions/secrets/{secret_name}/repositories`
- **What it does**: List selected repositories for an organization secret
- **OpenAPI operationId**: `actions/list-selected-repos-for-org-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; secret_name: string; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListSelectedReposForOrgSecretInput = Parameters<typeof github.actions.listSelectedReposForOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListSelectedReposForOrgSecretOutput = Awaited<ReturnType<typeof github.actions.listSelectedReposForOrgSecret>>;

const input: ActionsListSelectedReposForOrgSecretInput = {} as { org: string; secret_name: string; page?: number; per_page?: number };
const result: ActionsListSelectedReposForOrgSecretOutput = await github.actions.listSelectedReposForOrgSecret(input);

// Result shape (from schema): { total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...
```

### `github.actions.setSelectedReposForOrgSecret`

- **HTTP**: `PUT /orgs/{org}/actions/secrets/{secret_name}/repositories`
- **What it does**: Set selected repositories for an organization secret
- **OpenAPI operationId**: `actions/set-selected-repos-for-org-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_repository_ids: (number)[]; org: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsSetSelectedReposForOrgSecretInput = Parameters<typeof github.actions.setSelectedReposForOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetSelectedReposForOrgSecretOutput = Awaited<ReturnType<typeof github.actions.setSelectedReposForOrgSecret>>;

const input: ActionsSetSelectedReposForOrgSecretInput = {} as { selected_repository_ids: (number)[]; org: string; secret_name: string };
const result: ActionsSetSelectedReposForOrgSecretOutput = await github.actions.setSelectedReposForOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.actions.removeSelectedRepoFromOrgSecret`

- **HTTP**: `DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}`
- **What it does**: Remove selected repository from an organization secret
- **OpenAPI operationId**: `actions/remove-selected-repo-from-org-secret`
- **Path params**: `repository_id`
- **Query params**: None
- **Response codes**: `204`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; secret_name: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `409`

```ts
import github from "@utdk/github";

type ActionsRemoveSelectedRepoFromOrgSecretInput = Parameters<typeof github.actions.removeSelectedRepoFromOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsRemoveSelectedRepoFromOrgSecretOutput = Awaited<ReturnType<typeof github.actions.removeSelectedRepoFromOrgSecret>>;

const input: ActionsRemoveSelectedRepoFromOrgSecretInput = {} as { org: string; secret_name: string; repository_id: number };
const result: ActionsRemoveSelectedRepoFromOrgSecretOutput = await github.actions.removeSelectedRepoFromOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.actions.addSelectedRepoToOrgSecret`

- **HTTP**: `PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}`
- **What it does**: Add selected repository to an organization secret
- **OpenAPI operationId**: `actions/add-selected-repo-to-org-secret`
- **Path params**: `repository_id`
- **Query params**: None
- **Response codes**: `204`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; secret_name: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `409`

```ts
import github from "@utdk/github";

type ActionsAddSelectedRepoToOrgSecretInput = Parameters<typeof github.actions.addSelectedRepoToOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsAddSelectedRepoToOrgSecretOutput = Awaited<ReturnType<typeof github.actions.addSelectedRepoToOrgSecret>>;

const input: ActionsAddSelectedRepoToOrgSecretInput = {} as { org: string; secret_name: string; repository_id: number };
const result: ActionsAddSelectedRepoToOrgSecretOutput = await github.actions.addSelectedRepoToOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.actions.getOrgPublicKey`

- **HTTP**: `GET /orgs/{org}/actions/secrets/public-key`
- **What it does**: Get an organization public key
- **OpenAPI operationId**: `actions/get-org-public-key`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ key_id: string; key: string; id?: number; url?: string; title?: string; created_at?: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetOrgPublicKeyInput = Parameters<typeof github.actions.getOrgPublicKey> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetOrgPublicKeyOutput = Awaited<ReturnType<typeof github.actions.getOrgPublicKey>>;

const input: ActionsGetOrgPublicKeyInput = {} as { org: string };
const result: ActionsGetOrgPublicKeyOutput = await github.actions.getOrgPublicKey(input);

// Result shape (from schema): { key_id: string; key: string; id?: number; url?: string; title?: string; created_at?: string }
```

### `github.actions.listOrgVariables`

- **HTTP**: `GET /orgs/{org}/actions/variables`
- **What it does**: List organization variables
- **OpenAPI operationId**: `actions/list-org-variables`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; variables: ({ name: string; value: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListOrgVariablesInput = Parameters<typeof github.actions.listOrgVariables> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListOrgVariablesOutput = Awaited<ReturnType<typeof github.actions.listOrgVariables>>;

const input: ActionsListOrgVariablesInput = {} as { org: string; per_page?: number; page?: number };
const result: ActionsListOrgVariablesOutput = await github.actions.listOrgVariables(input);

// Result shape (from schema): { total_count: number; variables: ({ name: string; value: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string })[] }
```

### `github.actions.createOrgVariable`

- **HTTP**: `POST /orgs/{org}/actions/variables`
- **What it does**: Create an organization variable
- **OpenAPI operationId**: `actions/create-org-variable`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; value: string; visibility: "all" | "private" | "selected"; selected_repository_ids?: (number)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ActionsCreateOrgVariableInput = Parameters<typeof github.actions.createOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsCreateOrgVariableOutput = Awaited<ReturnType<typeof github.actions.createOrgVariable>>;

const input: ActionsCreateOrgVariableInput = {} as { name: string; value: string; visibility: "all" | "private" | "selected"; selected_repository_ids?: (number)[]; org: string };
const result: ActionsCreateOrgVariableOutput = await github.actions.createOrgVariable(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.actions.deleteOrgVariable`

- **HTTP**: `DELETE /orgs/{org}/actions/variables/{name}`
- **What it does**: Delete an organization variable
- **OpenAPI operationId**: `actions/delete-org-variable`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsDeleteOrgVariableInput = Parameters<typeof github.actions.deleteOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteOrgVariableOutput = Awaited<ReturnType<typeof github.actions.deleteOrgVariable>>;

const input: ActionsDeleteOrgVariableInput = {} as { org: string; name: string };
const result: ActionsDeleteOrgVariableOutput = await github.actions.deleteOrgVariable(input);

// Result shape (from schema): unknown
```

### `github.actions.getOrgVariable`

- **HTTP**: `GET /orgs/{org}/actions/variables/{name}`
- **What it does**: Get an organization variable
- **OpenAPI operationId**: `actions/get-org-variable`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; value: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetOrgVariableInput = Parameters<typeof github.actions.getOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetOrgVariableOutput = Awaited<ReturnType<typeof github.actions.getOrgVariable>>;

const input: ActionsGetOrgVariableInput = {} as { org: string; name: string };
const result: ActionsGetOrgVariableOutput = await github.actions.getOrgVariable(input);

// Result shape (from schema): { name: string; value: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string }
```

### `github.actions.updateOrgVariable`

- **HTTP**: `PATCH /orgs/{org}/actions/variables/{name}`
- **What it does**: Update an organization variable
- **OpenAPI operationId**: `actions/update-org-variable`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: `{ params: { name: string } }`
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; value?: string; visibility?: "all" | "private" | "selected"; selected_repository_ids?: (number)[]; org: string }`
- Client transport options: `{ params: { name: string } }`

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsUpdateOrgVariableInput = Parameters<typeof github.actions.updateOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsUpdateOrgVariableOutput = Awaited<ReturnType<typeof github.actions.updateOrgVariable>>;
type ActionsUpdateOrgVariableOptions = Parameters<typeof github.actions.updateOrgVariable> extends [unknown, infer T, ...unknown[]] ? T : undefined;

const input: ActionsUpdateOrgVariableInput = {} as { name?: string; value?: string; visibility?: "all" | "private" | "selected"; selected_repository_ids?: (number)[]; org: string };
const options: ActionsUpdateOrgVariableOptions = {} as { params: { name: string } };
const result: ActionsUpdateOrgVariableOutput = await github.actions.updateOrgVariable(input, options);

// Result shape (from schema): unknown
```

### `github.actions.listSelectedReposForOrgVariable`

- **HTTP**: `GET /orgs/{org}/actions/variables/{name}/repositories`
- **What it does**: List selected repositories for an organization variable
- **OpenAPI operationId**: `actions/list-selected-repos-for-org-variable`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; name: string; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...`
- OpenAPI response codes: `200`, `409`

```ts
import github from "@utdk/github";

type ActionsListSelectedReposForOrgVariableInput = Parameters<typeof github.actions.listSelectedReposForOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListSelectedReposForOrgVariableOutput = Awaited<ReturnType<typeof github.actions.listSelectedReposForOrgVariable>>;

const input: ActionsListSelectedReposForOrgVariableInput = {} as { org: string; name: string; page?: number; per_page?: number };
const result: ActionsListSelectedReposForOrgVariableOutput = await github.actions.listSelectedReposForOrgVariable(input);

// Result shape (from schema): { total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...
```

### `github.actions.setSelectedReposForOrgVariable`

- **HTTP**: `PUT /orgs/{org}/actions/variables/{name}/repositories`
- **What it does**: Set selected repositories for an organization variable
- **OpenAPI operationId**: `actions/set-selected-repos-for-org-variable`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_repository_ids: (number)[]; org: string; name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `409`

```ts
import github from "@utdk/github";

type ActionsSetSelectedReposForOrgVariableInput = Parameters<typeof github.actions.setSelectedReposForOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetSelectedReposForOrgVariableOutput = Awaited<ReturnType<typeof github.actions.setSelectedReposForOrgVariable>>;

const input: ActionsSetSelectedReposForOrgVariableInput = {} as { selected_repository_ids: (number)[]; org: string; name: string };
const result: ActionsSetSelectedReposForOrgVariableOutput = await github.actions.setSelectedReposForOrgVariable(input);

// Result shape (from schema): unknown
```

### `github.actions.removeSelectedRepoFromOrgVariable`

- **HTTP**: `DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}`
- **What it does**: Remove selected repository from an organization variable
- **OpenAPI operationId**: `actions/remove-selected-repo-from-org-variable`
- **Path params**: `repository_id`
- **Query params**: None
- **Response codes**: `204`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; name: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `409`

```ts
import github from "@utdk/github";

type ActionsRemoveSelectedRepoFromOrgVariableInput = Parameters<typeof github.actions.removeSelectedRepoFromOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsRemoveSelectedRepoFromOrgVariableOutput = Awaited<ReturnType<typeof github.actions.removeSelectedRepoFromOrgVariable>>;

const input: ActionsRemoveSelectedRepoFromOrgVariableInput = {} as { org: string; name: string; repository_id: number };
const result: ActionsRemoveSelectedRepoFromOrgVariableOutput = await github.actions.removeSelectedRepoFromOrgVariable(input);

// Result shape (from schema): unknown
```

### `github.actions.addSelectedRepoToOrgVariable`

- **HTTP**: `PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}`
- **What it does**: Add selected repository to an organization variable
- **OpenAPI operationId**: `actions/add-selected-repo-to-org-variable`
- **Path params**: `repository_id`
- **Query params**: None
- **Response codes**: `204`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; name: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `409`

```ts
import github from "@utdk/github";

type ActionsAddSelectedRepoToOrgVariableInput = Parameters<typeof github.actions.addSelectedRepoToOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsAddSelectedRepoToOrgVariableOutput = Awaited<ReturnType<typeof github.actions.addSelectedRepoToOrgVariable>>;

const input: ActionsAddSelectedRepoToOrgVariableInput = {} as { org: string; name: string; repository_id: number };
const result: ActionsAddSelectedRepoToOrgVariableOutput = await github.actions.addSelectedRepoToOrgVariable(input);

// Result shape (from schema): unknown
```

### `github.actions.listArtifactsForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/artifacts`
- **What it does**: List artifacts for a repository
- **OpenAPI operationId**: `actions/list-artifacts-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number; name?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; artifacts: ({ id: number; node_id: string; name: string; size_in_bytes: number; url: string; archive_download_url: string; expired: boolean; created_at: string | null; expires_at: string | null; u...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListArtifactsForRepoInput = Parameters<typeof github.actions.listArtifactsForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListArtifactsForRepoOutput = Awaited<ReturnType<typeof github.actions.listArtifactsForRepo>>;

const input: ActionsListArtifactsForRepoInput = {} as { owner: string; repo: string; per_page?: number; page?: number; name?: string };
const result: ActionsListArtifactsForRepoOutput = await github.actions.listArtifactsForRepo(input);

// Result shape (from schema): { total_count: number; artifacts: ({ id: number; node_id: string; name: string; size_in_bytes: number; url: string; archive_download_url: string; expired: boolean; created_at: string | null; expires_at: string | null; u...
```

### `github.actions.deleteArtifact`

- **HTTP**: `DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`
- **What it does**: Delete an artifact
- **OpenAPI operationId**: `actions/delete-artifact`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; artifact_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsDeleteArtifactInput = Parameters<typeof github.actions.deleteArtifact> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteArtifactOutput = Awaited<ReturnType<typeof github.actions.deleteArtifact>>;

const input: ActionsDeleteArtifactInput = {} as { owner: string; repo: string; artifact_id: number };
const result: ActionsDeleteArtifactOutput = await github.actions.deleteArtifact(input);

// Result shape (from schema): unknown
```

### `github.actions.getArtifact`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`
- **What it does**: Get an artifact
- **OpenAPI operationId**: `actions/get-artifact`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; artifact_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; name: string; size_in_bytes: number; url: string; archive_download_url: string; expired: boolean; created_at: string | null; expires_at: string | null; updated_at: string | null; digest?: ...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetArtifactInput = Parameters<typeof github.actions.getArtifact> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetArtifactOutput = Awaited<ReturnType<typeof github.actions.getArtifact>>;

const input: ActionsGetArtifactInput = {} as { owner: string; repo: string; artifact_id: number };
const result: ActionsGetArtifactOutput = await github.actions.getArtifact(input);

// Result shape (from schema): { id: number; node_id: string; name: string; size_in_bytes: number; url: string; archive_download_url: string; expired: boolean; created_at: string | null; expires_at: string | null; updated_at: string | null; digest?: ...
```

### `github.actions.downloadArtifact`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}`
- **What it does**: Download an artifact
- **OpenAPI operationId**: `actions/download-artifact`
- **Path params**: `archive_format`
- **Query params**: None
- **Response codes**: `302`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; artifact_id: number; archive_format: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `302`, `410`

```ts
import github from "@utdk/github";

type ActionsDownloadArtifactInput = Parameters<typeof github.actions.downloadArtifact> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDownloadArtifactOutput = Awaited<ReturnType<typeof github.actions.downloadArtifact>>;

const input: ActionsDownloadArtifactInput = {} as { owner: string; repo: string; artifact_id: number; archive_format: string };
const result: ActionsDownloadArtifactOutput = await github.actions.downloadArtifact(input);

// Result shape (from schema): unknown
```

### `github.actions.getActionsCacheRetentionLimitForRepository`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/cache/retention-limit`
- **What it does**: Get GitHub Actions cache retention limit for a repository
- **OpenAPI operationId**: `actions/get-actions-cache-retention-limit-for-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ max_cache_retention_days?: number }`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsGetActionsCacheRetentionLimitForRepositoryInput = Parameters<typeof github.actions.getActionsCacheRetentionLimitForRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetActionsCacheRetentionLimitForRepositoryOutput = Awaited<ReturnType<typeof github.actions.getActionsCacheRetentionLimitForRepository>>;

const input: ActionsGetActionsCacheRetentionLimitForRepositoryInput = {} as { owner: string; repo: string };
const result: ActionsGetActionsCacheRetentionLimitForRepositoryOutput = await github.actions.getActionsCacheRetentionLimitForRepository(input);

// Result shape (from schema): { max_cache_retention_days?: number }
```

### `github.actions.setActionsCacheRetentionLimitForRepository`

- **HTTP**: `PUT /repos/{owner}/{repo}/actions/cache/retention-limit`
- **What it does**: Set GitHub Actions cache retention limit for a repository
- **OpenAPI operationId**: `actions/set-actions-cache-retention-limit-for-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `400`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ max_cache_retention_days?: number; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsSetActionsCacheRetentionLimitForRepositoryInput = Parameters<typeof github.actions.setActionsCacheRetentionLimitForRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetActionsCacheRetentionLimitForRepositoryOutput = Awaited<ReturnType<typeof github.actions.setActionsCacheRetentionLimitForRepository>>;

const input: ActionsSetActionsCacheRetentionLimitForRepositoryInput = {} as { max_cache_retention_days?: number; owner: string; repo: string };
const result: ActionsSetActionsCacheRetentionLimitForRepositoryOutput = await github.actions.setActionsCacheRetentionLimitForRepository(input);

// Result shape (from schema): unknown
```

### `github.actions.getActionsCacheStorageLimitForRepository`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/cache/storage-limit`
- **What it does**: Get GitHub Actions cache storage limit for a repository
- **OpenAPI operationId**: `actions/get-actions-cache-storage-limit-for-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ max_cache_size_gb?: number }`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsGetActionsCacheStorageLimitForRepositoryInput = Parameters<typeof github.actions.getActionsCacheStorageLimitForRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetActionsCacheStorageLimitForRepositoryOutput = Awaited<ReturnType<typeof github.actions.getActionsCacheStorageLimitForRepository>>;

const input: ActionsGetActionsCacheStorageLimitForRepositoryInput = {} as { owner: string; repo: string };
const result: ActionsGetActionsCacheStorageLimitForRepositoryOutput = await github.actions.getActionsCacheStorageLimitForRepository(input);

// Result shape (from schema): { max_cache_size_gb?: number }
```

### `github.actions.setActionsCacheStorageLimitForRepository`

- **HTTP**: `PUT /repos/{owner}/{repo}/actions/cache/storage-limit`
- **What it does**: Set GitHub Actions cache storage limit for a repository
- **OpenAPI operationId**: `actions/set-actions-cache-storage-limit-for-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `400`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ max_cache_size_gb?: number; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsSetActionsCacheStorageLimitForRepositoryInput = Parameters<typeof github.actions.setActionsCacheStorageLimitForRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetActionsCacheStorageLimitForRepositoryOutput = Awaited<ReturnType<typeof github.actions.setActionsCacheStorageLimitForRepository>>;

const input: ActionsSetActionsCacheStorageLimitForRepositoryInput = {} as { max_cache_size_gb?: number; owner: string; repo: string };
const result: ActionsSetActionsCacheStorageLimitForRepositoryOutput = await github.actions.setActionsCacheStorageLimitForRepository(input);

// Result shape (from schema): unknown
```

### `github.actions.getActionsCacheUsage`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/cache/usage`
- **What it does**: Get GitHub Actions cache usage for a repository
- **OpenAPI operationId**: `actions/get-actions-cache-usage`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ full_name: string; active_caches_size_in_bytes: number; active_caches_count: number }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetActionsCacheUsageInput = Parameters<typeof github.actions.getActionsCacheUsage> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetActionsCacheUsageOutput = Awaited<ReturnType<typeof github.actions.getActionsCacheUsage>>;

const input: ActionsGetActionsCacheUsageInput = {} as { owner: string; repo: string };
const result: ActionsGetActionsCacheUsageOutput = await github.actions.getActionsCacheUsage(input);

// Result shape (from schema): { full_name: string; active_caches_size_in_bytes: number; active_caches_count: number }
```

### `github.actions.deleteActionsCacheByKey`

- **HTTP**: `DELETE /repos/{owner}/{repo}/actions/caches`
- **What it does**: Delete GitHub Actions caches for a repository (using a cache key)
- **OpenAPI operationId**: `actions/delete-actions-cache-by-key`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; key: string; ref?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; actions_caches: ({ id?: number; ref?: string; key?: string; version?: string; last_accessed_at?: string; created_at?: string; size_in_bytes?: number })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsDeleteActionsCacheByKeyInput = Parameters<typeof github.actions.deleteActionsCacheByKey> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteActionsCacheByKeyOutput = Awaited<ReturnType<typeof github.actions.deleteActionsCacheByKey>>;

const input: ActionsDeleteActionsCacheByKeyInput = {} as { owner: string; repo: string; key: string; ref?: string };
const result: ActionsDeleteActionsCacheByKeyOutput = await github.actions.deleteActionsCacheByKey(input);

// Result shape (from schema): { total_count: number; actions_caches: ({ id?: number; ref?: string; key?: string; version?: string; last_accessed_at?: string; created_at?: string; size_in_bytes?: number })[] }
```

### `github.actions.getActionsCacheList`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/caches`
- **What it does**: List GitHub Actions caches for a repository
- **OpenAPI operationId**: `actions/get-actions-cache-list`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number; ref?: string; key?: string; sort?: "created_at" | "last_accessed_at" | "size_in_bytes"; direction?: "asc" | "desc" }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; actions_caches: ({ id?: number; ref?: string; key?: string; version?: string; last_accessed_at?: string; created_at?: string; size_in_bytes?: number })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetActionsCacheListInput = Parameters<typeof github.actions.getActionsCacheList> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetActionsCacheListOutput = Awaited<ReturnType<typeof github.actions.getActionsCacheList>>;

const input: ActionsGetActionsCacheListInput = {} as { owner: string; repo: string; per_page?: number; page?: number; ref?: string; key?: string; sort?: "created_at" | "last_accessed_at" | "size_in_bytes"; direction?: "asc" | "desc" };
const result: ActionsGetActionsCacheListOutput = await github.actions.getActionsCacheList(input);

// Result shape (from schema): { total_count: number; actions_caches: ({ id?: number; ref?: string; key?: string; version?: string; last_accessed_at?: string; created_at?: string; size_in_bytes?: number })[] }
```

### `github.actions.deleteActionsCacheById`

- **HTTP**: `DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}`
- **What it does**: Delete a GitHub Actions cache for a repository (using a cache ID)
- **OpenAPI operationId**: `actions/delete-actions-cache-by-id`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; cache_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsDeleteActionsCacheByIdInput = Parameters<typeof github.actions.deleteActionsCacheById> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteActionsCacheByIdOutput = Awaited<ReturnType<typeof github.actions.deleteActionsCacheById>>;

const input: ActionsDeleteActionsCacheByIdInput = {} as { owner: string; repo: string; cache_id: number };
const result: ActionsDeleteActionsCacheByIdOutput = await github.actions.deleteActionsCacheById(input);

// Result shape (from schema): unknown
```

### `github.actions.listConcurrencyGroupsForRepository`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/concurrency_groups`
- **What it does**: List concurrency groups for a repository
- **OpenAPI operationId**: `actions/list-concurrency-groups-for-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; after?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; concurrency_groups: ({ group_name: string; group_url: string; last_acquired_at: string | null })[] }`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type ActionsListConcurrencyGroupsForRepositoryInput = Parameters<typeof github.actions.listConcurrencyGroupsForRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListConcurrencyGroupsForRepositoryOutput = Awaited<ReturnType<typeof github.actions.listConcurrencyGroupsForRepository>>;

const input: ActionsListConcurrencyGroupsForRepositoryInput = {} as { owner: string; repo: string; per_page?: number; after?: string };
const result: ActionsListConcurrencyGroupsForRepositoryOutput = await github.actions.listConcurrencyGroupsForRepository(input);

// Result shape (from schema): { total_count: number; concurrency_groups: ({ group_name: string; group_url: string; last_acquired_at: string | null })[] }
```

### `github.actions.getConcurrencyGroupForRepository`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/concurrency_groups/{concurrency_group_name}`
- **What it does**: Get a concurrency group for a repository
- **OpenAPI operationId**: `actions/get-concurrency-group-for-repository`
- **Path params**: None
- **Query params**: `ahead_of_run`, `ahead_of_job`
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; concurrency_group_name: string; ahead_of_run?: number; ahead_of_job?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ group_name: string; group_url: string; total_count: number; group_members: ({ run_id: number; run_name: string; run_url: string | null; run_html_url: string | null; job_id?: number; job_name?: string; job_url?: string...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type ActionsGetConcurrencyGroupForRepositoryInput = Parameters<typeof github.actions.getConcurrencyGroupForRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetConcurrencyGroupForRepositoryOutput = Awaited<ReturnType<typeof github.actions.getConcurrencyGroupForRepository>>;

const input: ActionsGetConcurrencyGroupForRepositoryInput = {} as { owner: string; repo: string; concurrency_group_name: string; ahead_of_run?: number; ahead_of_job?: number };
const result: ActionsGetConcurrencyGroupForRepositoryOutput = await github.actions.getConcurrencyGroupForRepository(input);

// Result shape (from schema): { group_name: string; group_url: string; total_count: number; group_members: ({ run_id: number; run_name: string; run_url: string | null; run_html_url: string | null; job_id?: number; job_name?: string; job_url?: string...
```

### `github.actions.getJobForWorkflowRun`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/jobs/{job_id}`
- **What it does**: Get a job for a workflow run
- **OpenAPI operationId**: `actions/get-job-for-workflow-run`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; job_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; run_id: number; run_url: string; run_attempt?: number; node_id: string; head_sha: string; url: string; html_url: string | null; status: "queued" | "in_progress" | "completed" | "waiting" | "requested" | "p...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetJobForWorkflowRunInput = Parameters<typeof github.actions.getJobForWorkflowRun> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetJobForWorkflowRunOutput = Awaited<ReturnType<typeof github.actions.getJobForWorkflowRun>>;

const input: ActionsGetJobForWorkflowRunInput = {} as { owner: string; repo: string; job_id: number };
const result: ActionsGetJobForWorkflowRunOutput = await github.actions.getJobForWorkflowRun(input);

// Result shape (from schema): { id: number; run_id: number; run_url: string; run_attempt?: number; node_id: string; head_sha: string; url: string; html_url: string | null; status: "queued" | "in_progress" | "completed" | "waiting" | "requested" | "p...
```

### `github.actions.downloadJobLogsForWorkflowRun`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs`
- **What it does**: Download job logs for a workflow run
- **OpenAPI operationId**: `actions/download-job-logs-for-workflow-run`
- **Path params**: None
- **Query params**: None
- **Response codes**: `302`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; job_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `302`

```ts
import github from "@utdk/github";

type ActionsDownloadJobLogsForWorkflowRunInput = Parameters<typeof github.actions.downloadJobLogsForWorkflowRun> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDownloadJobLogsForWorkflowRunOutput = Awaited<ReturnType<typeof github.actions.downloadJobLogsForWorkflowRun>>;

const input: ActionsDownloadJobLogsForWorkflowRunInput = {} as { owner: string; repo: string; job_id: number };
const result: ActionsDownloadJobLogsForWorkflowRunOutput = await github.actions.downloadJobLogsForWorkflowRun(input);

// Result shape (from schema): unknown
```

### `github.actions.reRunJobForWorkflowRun`

- **HTTP**: `POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun`
- **What it does**: Re-run a job from a workflow run
- **OpenAPI operationId**: `actions/re-run-job-for-workflow-run`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enable_debug_logging?: boolean; enable_debugger?: boolean; owner: string; repo: string; job_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`, `403`

```ts
import github from "@utdk/github";

type ActionsReRunJobForWorkflowRunInput = Parameters<typeof github.actions.reRunJobForWorkflowRun> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsReRunJobForWorkflowRunOutput = Awaited<ReturnType<typeof github.actions.reRunJobForWorkflowRun>>;

const input: ActionsReRunJobForWorkflowRunInput = {} as { enable_debug_logging?: boolean; enable_debugger?: boolean; owner: string; repo: string; job_id: number };
const result: ActionsReRunJobForWorkflowRunOutput = await github.actions.reRunJobForWorkflowRun(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.actions.getCustomOidcSubClaimForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/oidc/customization/sub`
- **What it does**: Get the customization template for an OIDC subject claim for a repository
- **OpenAPI operationId**: `actions/get-custom-oidc-sub-claim-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ use_default: boolean; include_claim_keys?: (string)[]; use_immutable_subject?: boolean; sub_claim_prefix?: string }`
- OpenAPI response codes: `200`, `400`, `404`

```ts
import github from "@utdk/github";

type ActionsGetCustomOidcSubClaimForRepoInput = Parameters<typeof github.actions.getCustomOidcSubClaimForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetCustomOidcSubClaimForRepoOutput = Awaited<ReturnType<typeof github.actions.getCustomOidcSubClaimForRepo>>;

const input: ActionsGetCustomOidcSubClaimForRepoInput = {} as { owner: string; repo: string };
const result: ActionsGetCustomOidcSubClaimForRepoOutput = await github.actions.getCustomOidcSubClaimForRepo(input);

// Result shape (from schema): { use_default: boolean; include_claim_keys?: (string)[]; use_immutable_subject?: boolean; sub_claim_prefix?: string }
```

### `github.actions.setCustomOidcSubClaimForRepo`

- **HTTP**: `PUT /repos/{owner}/{repo}/actions/oidc/customization/sub`
- **What it does**: Set the customization template for an OIDC subject claim for a repository
- **OpenAPI operationId**: `actions/set-custom-oidc-sub-claim-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `400`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ use_default: boolean; include_claim_keys?: (string)[]; use_immutable_subject?: boolean; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`, `400`, `404`, `422`

```ts
import github from "@utdk/github";

type ActionsSetCustomOidcSubClaimForRepoInput = Parameters<typeof github.actions.setCustomOidcSubClaimForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetCustomOidcSubClaimForRepoOutput = Awaited<ReturnType<typeof github.actions.setCustomOidcSubClaimForRepo>>;

const input: ActionsSetCustomOidcSubClaimForRepoInput = {} as { use_default: boolean; include_claim_keys?: (string)[]; use_immutable_subject?: boolean; owner: string; repo: string };
const result: ActionsSetCustomOidcSubClaimForRepoOutput = await github.actions.setCustomOidcSubClaimForRepo(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.actions.listRepoOrganizationSecrets`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/organization-secrets`
- **What it does**: List repository organization secrets
- **OpenAPI operationId**: `actions/list-repo-organization-secrets`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; secrets: ({ name: string; created_at: string; updated_at: string })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListRepoOrganizationSecretsInput = Parameters<typeof github.actions.listRepoOrganizationSecrets> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListRepoOrganizationSecretsOutput = Awaited<ReturnType<typeof github.actions.listRepoOrganizationSecrets>>;

const input: ActionsListRepoOrganizationSecretsInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ActionsListRepoOrganizationSecretsOutput = await github.actions.listRepoOrganizationSecrets(input);

// Result shape (from schema): { total_count: number; secrets: ({ name: string; created_at: string; updated_at: string })[] }
```

### `github.actions.listRepoOrganizationVariables`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/organization-variables`
- **What it does**: List repository organization variables
- **OpenAPI operationId**: `actions/list-repo-organization-variables`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; variables: ({ name: string; value: string; created_at: string; updated_at: string })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListRepoOrganizationVariablesInput = Parameters<typeof github.actions.listRepoOrganizationVariables> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListRepoOrganizationVariablesOutput = Awaited<ReturnType<typeof github.actions.listRepoOrganizationVariables>>;

const input: ActionsListRepoOrganizationVariablesInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ActionsListRepoOrganizationVariablesOutput = await github.actions.listRepoOrganizationVariables(input);

// Result shape (from schema): { total_count: number; variables: ({ name: string; value: string; created_at: string; updated_at: string })[] }
```

### `github.actions.getGithubActionsPermissionsRepository`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/permissions`
- **What it does**: Get GitHub Actions permissions for a repository
- **OpenAPI operationId**: `actions/get-github-actions-permissions-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ enabled: boolean; allowed_actions?: "all" | "local_only" | "selected"; selected_actions_url?: string; sha_pinning_required?: boolean }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetGithubActionsPermissionsRepositoryInput = Parameters<typeof github.actions.getGithubActionsPermissionsRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetGithubActionsPermissionsRepositoryOutput = Awaited<ReturnType<typeof github.actions.getGithubActionsPermissionsRepository>>;

const input: ActionsGetGithubActionsPermissionsRepositoryInput = {} as { owner: string; repo: string };
const result: ActionsGetGithubActionsPermissionsRepositoryOutput = await github.actions.getGithubActionsPermissionsRepository(input);

// Result shape (from schema): { enabled: boolean; allowed_actions?: "all" | "local_only" | "selected"; selected_actions_url?: string; sha_pinning_required?: boolean }
```

### `github.actions.setGithubActionsPermissionsRepository`

- **HTTP**: `PUT /repos/{owner}/{repo}/actions/permissions`
- **What it does**: Set GitHub Actions permissions for a repository
- **OpenAPI operationId**: `actions/set-github-actions-permissions-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enabled: boolean; allowed_actions?: "all" | "local_only" | "selected"; sha_pinning_required?: boolean; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsSetGithubActionsPermissionsRepositoryInput = Parameters<typeof github.actions.setGithubActionsPermissionsRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetGithubActionsPermissionsRepositoryOutput = Awaited<ReturnType<typeof github.actions.setGithubActionsPermissionsRepository>>;

const input: ActionsSetGithubActionsPermissionsRepositoryInput = {} as { enabled: boolean; allowed_actions?: "all" | "local_only" | "selected"; sha_pinning_required?: boolean; owner: string; repo: string };
const result: ActionsSetGithubActionsPermissionsRepositoryOutput = await github.actions.setGithubActionsPermissionsRepository(input);

// Result shape (from schema): unknown
```

### `github.actions.getWorkflowAccessToRepository`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/permissions/access`
- **What it does**: Get the level of access for workflows outside of the repository
- **OpenAPI operationId**: `actions/get-workflow-access-to-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ access_level: "none" | "user" | "organization" }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetWorkflowAccessToRepositoryInput = Parameters<typeof github.actions.getWorkflowAccessToRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetWorkflowAccessToRepositoryOutput = Awaited<ReturnType<typeof github.actions.getWorkflowAccessToRepository>>;

const input: ActionsGetWorkflowAccessToRepositoryInput = {} as { owner: string; repo: string };
const result: ActionsGetWorkflowAccessToRepositoryOutput = await github.actions.getWorkflowAccessToRepository(input);

// Result shape (from schema): { access_level: "none" | "user" | "organization" }
```

### `github.actions.setWorkflowAccessToRepository`

- **HTTP**: `PUT /repos/{owner}/{repo}/actions/permissions/access`
- **What it does**: Set the level of access for workflows outside of the repository
- **OpenAPI operationId**: `actions/set-workflow-access-to-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ access_level: "none" | "user" | "organization"; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsSetWorkflowAccessToRepositoryInput = Parameters<typeof github.actions.setWorkflowAccessToRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetWorkflowAccessToRepositoryOutput = Awaited<ReturnType<typeof github.actions.setWorkflowAccessToRepository>>;

const input: ActionsSetWorkflowAccessToRepositoryInput = {} as { access_level: "none" | "user" | "organization"; owner: string; repo: string };
const result: ActionsSetWorkflowAccessToRepositoryOutput = await github.actions.setWorkflowAccessToRepository(input);

// Result shape (from schema): unknown
```

### `github.actions.getArtifactAndLogRetentionSettingsRepository`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/permissions/artifact-and-log-retention`
- **What it does**: Get artifact and log retention settings for a repository
- **OpenAPI operationId**: `actions/get-artifact-and-log-retention-settings-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ days: number; maximum_allowed_days: number }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ActionsGetArtifactAndLogRetentionSettingsRepositoryInput = Parameters<typeof github.actions.getArtifactAndLogRetentionSettingsRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetArtifactAndLogRetentionSettingsRepositoryOutput = Awaited<ReturnType<typeof github.actions.getArtifactAndLogRetentionSettingsRepository>>;

const input: ActionsGetArtifactAndLogRetentionSettingsRepositoryInput = {} as { owner: string; repo: string };
const result: ActionsGetArtifactAndLogRetentionSettingsRepositoryOutput = await github.actions.getArtifactAndLogRetentionSettingsRepository(input);

// Result shape (from schema): { days: number; maximum_allowed_days: number }
```

### `github.actions.setArtifactAndLogRetentionSettingsRepository`

- **HTTP**: `PUT /repos/{owner}/{repo}/actions/permissions/artifact-and-log-retention`
- **What it does**: Set artifact and log retention settings for a repository
- **OpenAPI operationId**: `actions/set-artifact-and-log-retention-settings-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ days: number; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `422`

```ts
import github from "@utdk/github";

type ActionsSetArtifactAndLogRetentionSettingsRepositoryInput = Parameters<typeof github.actions.setArtifactAndLogRetentionSettingsRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetArtifactAndLogRetentionSettingsRepositoryOutput = Awaited<ReturnType<typeof github.actions.setArtifactAndLogRetentionSettingsRepository>>;

const input: ActionsSetArtifactAndLogRetentionSettingsRepositoryInput = {} as { days: number; owner: string; repo: string };
const result: ActionsSetArtifactAndLogRetentionSettingsRepositoryOutput = await github.actions.setArtifactAndLogRetentionSettingsRepository(input);

// Result shape (from schema): unknown
```

### `github.actions.getForkPrContributorApprovalPermissionsRepository`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/permissions/fork-pr-contributor-approval`
- **What it does**: Get fork PR contributor approval permissions for a repository
- **OpenAPI operationId**: `actions/get-fork-pr-contributor-approval-permissions-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ approval_policy: "first_time_contributors_new_to_github" | "first_time_contributors" | "all_external_contributors" }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ActionsGetForkPrContributorApprovalPermissionsRepositoryInput = Parameters<typeof github.actions.getForkPrContributorApprovalPermissionsRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetForkPrContributorApprovalPermissionsRepositoryOutput = Awaited<ReturnType<typeof github.actions.getForkPrContributorApprovalPermissionsRepository>>;

const input: ActionsGetForkPrContributorApprovalPermissionsRepositoryInput = {} as { owner: string; repo: string };
const result: ActionsGetForkPrContributorApprovalPermissionsRepositoryOutput = await github.actions.getForkPrContributorApprovalPermissionsRepository(input);

// Result shape (from schema): { approval_policy: "first_time_contributors_new_to_github" | "first_time_contributors" | "all_external_contributors" }
```

### `github.actions.setForkPrContributorApprovalPermissionsRepository`

- **HTTP**: `PUT /repos/{owner}/{repo}/actions/permissions/fork-pr-contributor-approval`
- **What it does**: Set fork PR contributor approval permissions for a repository
- **OpenAPI operationId**: `actions/set-fork-pr-contributor-approval-permissions-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ approval_policy: "first_time_contributors_new_to_github" | "first_time_contributors" | "all_external_contributors"; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `422`

```ts
import github from "@utdk/github";

type ActionsSetForkPrContributorApprovalPermissionsRepositoryInput = Parameters<typeof github.actions.setForkPrContributorApprovalPermissionsRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetForkPrContributorApprovalPermissionsRepositoryOutput = Awaited<ReturnType<typeof github.actions.setForkPrContributorApprovalPermissionsRepository>>;

const input: ActionsSetForkPrContributorApprovalPermissionsRepositoryInput = {} as { approval_policy: "first_time_contributors_new_to_github" | "first_time_contributors" | "all_external_contributors"; owner: string; repo: string };
const result: ActionsSetForkPrContributorApprovalPermissionsRepositoryOutput = await github.actions.setForkPrContributorApprovalPermissionsRepository(input);

// Result shape (from schema): unknown
```

### `github.actions.getPrivateRepoForkPrWorkflowsSettingsRepository`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/permissions/fork-pr-workflows-private-repos`
- **What it does**: Get private repo fork PR workflow settings for a repository
- **OpenAPI operationId**: `actions/get-private-repo-fork-pr-workflows-settings-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ run_workflows_from_fork_pull_requests: boolean; send_write_tokens_to_workflows: boolean; send_secrets_and_variables: boolean; require_approval_for_fork_pr_workflows: boolean }`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsGetPrivateRepoForkPrWorkflowsSettingsRepositoryInput = Parameters<typeof github.actions.getPrivateRepoForkPrWorkflowsSettingsRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetPrivateRepoForkPrWorkflowsSettingsRepositoryOutput = Awaited<ReturnType<typeof github.actions.getPrivateRepoForkPrWorkflowsSettingsRepository>>;

const input: ActionsGetPrivateRepoForkPrWorkflowsSettingsRepositoryInput = {} as { owner: string; repo: string };
const result: ActionsGetPrivateRepoForkPrWorkflowsSettingsRepositoryOutput = await github.actions.getPrivateRepoForkPrWorkflowsSettingsRepository(input);

// Result shape (from schema): { run_workflows_from_fork_pull_requests: boolean; send_write_tokens_to_workflows: boolean; send_secrets_and_variables: boolean; require_approval_for_fork_pr_workflows: boolean }
```

### `github.actions.setPrivateRepoForkPrWorkflowsSettingsRepository`

- **HTTP**: `PUT /repos/{owner}/{repo}/actions/permissions/fork-pr-workflows-private-repos`
- **What it does**: Set private repo fork PR workflow settings for a repository
- **OpenAPI operationId**: `actions/set-private-repo-fork-pr-workflows-settings-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ run_workflows_from_fork_pull_requests: boolean; send_write_tokens_to_workflows?: boolean; send_secrets_and_variables?: boolean; require_approval_for_fork_pr_workflows?: boolean; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `422`

```ts
import github from "@utdk/github";

type ActionsSetPrivateRepoForkPrWorkflowsSettingsRepositoryInput = Parameters<typeof github.actions.setPrivateRepoForkPrWorkflowsSettingsRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetPrivateRepoForkPrWorkflowsSettingsRepositoryOutput = Awaited<ReturnType<typeof github.actions.setPrivateRepoForkPrWorkflowsSettingsRepository>>;

const input: ActionsSetPrivateRepoForkPrWorkflowsSettingsRepositoryInput = {} as { run_workflows_from_fork_pull_requests: boolean; send_write_tokens_to_workflows?: boolean; send_secrets_and_variables?: boolean; require_approval_for_fork_pr_workflows?: boolean; owner: string; repo: string };
const result: ActionsSetPrivateRepoForkPrWorkflowsSettingsRepositoryOutput = await github.actions.setPrivateRepoForkPrWorkflowsSettingsRepository(input);

// Result shape (from schema): unknown
```

### `github.actions.getAllowedActionsRepository`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/permissions/selected-actions`
- **What it does**: Get allowed actions and reusable workflows for a repository
- **OpenAPI operationId**: `actions/get-allowed-actions-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ github_owned_allowed?: boolean; verified_allowed?: boolean; patterns_allowed?: (string)[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetAllowedActionsRepositoryInput = Parameters<typeof github.actions.getAllowedActionsRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetAllowedActionsRepositoryOutput = Awaited<ReturnType<typeof github.actions.getAllowedActionsRepository>>;

const input: ActionsGetAllowedActionsRepositoryInput = {} as { owner: string; repo: string };
const result: ActionsGetAllowedActionsRepositoryOutput = await github.actions.getAllowedActionsRepository(input);

// Result shape (from schema): { github_owned_allowed?: boolean; verified_allowed?: boolean; patterns_allowed?: (string)[] }
```

### `github.actions.setAllowedActionsRepository`

- **HTTP**: `PUT /repos/{owner}/{repo}/actions/permissions/selected-actions`
- **What it does**: Set allowed actions and reusable workflows for a repository
- **OpenAPI operationId**: `actions/set-allowed-actions-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ github_owned_allowed?: boolean; verified_allowed?: boolean; patterns_allowed?: (string)[]; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsSetAllowedActionsRepositoryInput = Parameters<typeof github.actions.setAllowedActionsRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetAllowedActionsRepositoryOutput = Awaited<ReturnType<typeof github.actions.setAllowedActionsRepository>>;

const input: ActionsSetAllowedActionsRepositoryInput = {} as { github_owned_allowed?: boolean; verified_allowed?: boolean; patterns_allowed?: (string)[]; owner: string; repo: string };
const result: ActionsSetAllowedActionsRepositoryOutput = await github.actions.setAllowedActionsRepository(input);

// Result shape (from schema): unknown
```

### `github.actions.getGithubActionsDefaultWorkflowPermissionsRepository`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/permissions/workflow`
- **What it does**: Get default workflow permissions for a repository
- **OpenAPI operationId**: `actions/get-github-actions-default-workflow-permissions-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ default_workflow_permissions: "read" | "write"; can_approve_pull_request_reviews: boolean }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryInput = Parameters<typeof github.actions.getGithubActionsDefaultWorkflowPermissionsRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryOutput = Awaited<ReturnType<typeof github.actions.getGithubActionsDefaultWorkflowPermissionsRepository>>;

const input: ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryInput = {} as { owner: string; repo: string };
const result: ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryOutput = await github.actions.getGithubActionsDefaultWorkflowPermissionsRepository(input);

// Result shape (from schema): { default_workflow_permissions: "read" | "write"; can_approve_pull_request_reviews: boolean }
```

### `github.actions.setGithubActionsDefaultWorkflowPermissionsRepository`

- **HTTP**: `PUT /repos/{owner}/{repo}/actions/permissions/workflow`
- **What it does**: Set default workflow permissions for a repository
- **OpenAPI operationId**: `actions/set-github-actions-default-workflow-permissions-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ default_workflow_permissions?: "read" | "write"; can_approve_pull_request_reviews?: boolean; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `409`

```ts
import github from "@utdk/github";

type ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryInput = Parameters<typeof github.actions.setGithubActionsDefaultWorkflowPermissionsRepository> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryOutput = Awaited<ReturnType<typeof github.actions.setGithubActionsDefaultWorkflowPermissionsRepository>>;

const input: ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryInput = {} as { default_workflow_permissions?: "read" | "write"; can_approve_pull_request_reviews?: boolean; owner: string; repo: string };
const result: ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryOutput = await github.actions.setGithubActionsDefaultWorkflowPermissionsRepository(input);

// Result shape (from schema): unknown
```

### `github.actions.listSelfHostedRunnersForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runners`
- **What it does**: List self-hosted runners for a repository
- **OpenAPI operationId**: `actions/list-self-hosted-runners-for-repo`
- **Path params**: None
- **Query params**: `name`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; name?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; runners: ({ id: number; runner_group_id?: number; name: string; os: string; status: string; busy: boolean; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[]; ephemeral?: boo...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListSelfHostedRunnersForRepoInput = Parameters<typeof github.actions.listSelfHostedRunnersForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListSelfHostedRunnersForRepoOutput = Awaited<ReturnType<typeof github.actions.listSelfHostedRunnersForRepo>>;

const input: ActionsListSelfHostedRunnersForRepoInput = {} as { owner: string; repo: string; name?: string; per_page?: number; page?: number };
const result: ActionsListSelfHostedRunnersForRepoOutput = await github.actions.listSelfHostedRunnersForRepo(input);

// Result shape (from schema): { total_count: number; runners: ({ id: number; runner_group_id?: number; name: string; os: string; status: string; busy: boolean; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[]; ephemeral?: boo...
```

### `github.actions.deleteSelfHostedRunnerFromRepo`

- **HTTP**: `DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}`
- **What it does**: Delete a self-hosted runner from a repository
- **OpenAPI operationId**: `actions/delete-self-hosted-runner-from-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `422`

```ts
import github from "@utdk/github";

type ActionsDeleteSelfHostedRunnerFromRepoInput = Parameters<typeof github.actions.deleteSelfHostedRunnerFromRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteSelfHostedRunnerFromRepoOutput = Awaited<ReturnType<typeof github.actions.deleteSelfHostedRunnerFromRepo>>;

const input: ActionsDeleteSelfHostedRunnerFromRepoInput = {} as { owner: string; repo: string; runner_id: number };
const result: ActionsDeleteSelfHostedRunnerFromRepoOutput = await github.actions.deleteSelfHostedRunnerFromRepo(input);

// Result shape (from schema): unknown
```

### `github.actions.getSelfHostedRunnerForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runners/{runner_id}`
- **What it does**: Get a self-hosted runner for a repository
- **OpenAPI operationId**: `actions/get-self-hosted-runner-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; runner_group_id?: number; name: string; os: string; status: string; busy: boolean; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[]; ephemeral?: boolean; version?: string | null }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetSelfHostedRunnerForRepoInput = Parameters<typeof github.actions.getSelfHostedRunnerForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetSelfHostedRunnerForRepoOutput = Awaited<ReturnType<typeof github.actions.getSelfHostedRunnerForRepo>>;

const input: ActionsGetSelfHostedRunnerForRepoInput = {} as { owner: string; repo: string; runner_id: number };
const result: ActionsGetSelfHostedRunnerForRepoOutput = await github.actions.getSelfHostedRunnerForRepo(input);

// Result shape (from schema): { id: number; runner_group_id?: number; name: string; os: string; status: string; busy: boolean; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[]; ephemeral?: boolean; version?: string | null }
```

### `github.actions.removeAllCustomLabelsFromSelfHostedRunnerForRepo`

- **HTTP**: `DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`
- **What it does**: Remove all custom labels from a self-hosted runner for a repository
- **OpenAPI operationId**: `actions/remove-all-custom-labels-from-self-hosted-runner-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoInput = Parameters<typeof github.actions.removeAllCustomLabelsFromSelfHostedRunnerForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoOutput = Awaited<ReturnType<typeof github.actions.removeAllCustomLabelsFromSelfHostedRunnerForRepo>>;

const input: ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoInput = {} as { owner: string; repo: string; runner_id: number };
const result: ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoOutput = await github.actions.removeAllCustomLabelsFromSelfHostedRunnerForRepo(input);

// Result shape (from schema): { total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }
```

### `github.actions.listLabelsForSelfHostedRunnerForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`
- **What it does**: List labels for a self-hosted runner for a repository
- **OpenAPI operationId**: `actions/list-labels-for-self-hosted-runner-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ActionsListLabelsForSelfHostedRunnerForRepoInput = Parameters<typeof github.actions.listLabelsForSelfHostedRunnerForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListLabelsForSelfHostedRunnerForRepoOutput = Awaited<ReturnType<typeof github.actions.listLabelsForSelfHostedRunnerForRepo>>;

const input: ActionsListLabelsForSelfHostedRunnerForRepoInput = {} as { owner: string; repo: string; runner_id: number };
const result: ActionsListLabelsForSelfHostedRunnerForRepoOutput = await github.actions.listLabelsForSelfHostedRunnerForRepo(input);

// Result shape (from schema): { total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }
```

### `github.actions.addCustomLabelsToSelfHostedRunnerForRepo`

- **HTTP**: `POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`
- **What it does**: Add custom labels to a self-hosted runner for a repository
- **OpenAPI operationId**: `actions/add-custom-labels-to-self-hosted-runner-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ labels: (string)[]; owner: string; repo: string; runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type ActionsAddCustomLabelsToSelfHostedRunnerForRepoInput = Parameters<typeof github.actions.addCustomLabelsToSelfHostedRunnerForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsAddCustomLabelsToSelfHostedRunnerForRepoOutput = Awaited<ReturnType<typeof github.actions.addCustomLabelsToSelfHostedRunnerForRepo>>;

const input: ActionsAddCustomLabelsToSelfHostedRunnerForRepoInput = {} as { labels: (string)[]; owner: string; repo: string; runner_id: number };
const result: ActionsAddCustomLabelsToSelfHostedRunnerForRepoOutput = await github.actions.addCustomLabelsToSelfHostedRunnerForRepo(input);

// Result shape (from schema): { total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }
```

### `github.actions.setCustomLabelsForSelfHostedRunnerForRepo`

- **HTTP**: `PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`
- **What it does**: Set custom labels for a self-hosted runner for a repository
- **OpenAPI operationId**: `actions/set-custom-labels-for-self-hosted-runner-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ labels: (string)[]; owner: string; repo: string; runner_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type ActionsSetCustomLabelsForSelfHostedRunnerForRepoInput = Parameters<typeof github.actions.setCustomLabelsForSelfHostedRunnerForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsSetCustomLabelsForSelfHostedRunnerForRepoOutput = Awaited<ReturnType<typeof github.actions.setCustomLabelsForSelfHostedRunnerForRepo>>;

const input: ActionsSetCustomLabelsForSelfHostedRunnerForRepoInput = {} as { labels: (string)[]; owner: string; repo: string; runner_id: number };
const result: ActionsSetCustomLabelsForSelfHostedRunnerForRepoOutput = await github.actions.setCustomLabelsForSelfHostedRunnerForRepo(input);

// Result shape (from schema): { total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }
```

### `github.actions.removeCustomLabelFromSelfHostedRunnerForRepo`

- **HTTP**: `DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}`
- **What it does**: Remove a custom label from a self-hosted runner for a repository
- **OpenAPI operationId**: `actions/remove-custom-label-from-self-hosted-runner-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; runner_id: number; name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoInput = Parameters<typeof github.actions.removeCustomLabelFromSelfHostedRunnerForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoOutput = Awaited<ReturnType<typeof github.actions.removeCustomLabelFromSelfHostedRunnerForRepo>>;

const input: ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoInput = {} as { owner: string; repo: string; runner_id: number; name: string };
const result: ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoOutput = await github.actions.removeCustomLabelFromSelfHostedRunnerForRepo(input);

// Result shape (from schema): { total_count: number; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[] }
```

### `github.actions.listRunnerApplicationsForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runners/downloads`
- **What it does**: List runner applications for a repository
- **OpenAPI operationId**: `actions/list-runner-applications-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ os: string; architecture: string; download_url: string; filename: string; temp_download_token?: string; sha256_checksum?: string })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListRunnerApplicationsForRepoInput = Parameters<typeof github.actions.listRunnerApplicationsForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListRunnerApplicationsForRepoOutput = Awaited<ReturnType<typeof github.actions.listRunnerApplicationsForRepo>>;

const input: ActionsListRunnerApplicationsForRepoInput = {} as { owner: string; repo: string };
const result: ActionsListRunnerApplicationsForRepoOutput = await github.actions.listRunnerApplicationsForRepo(input);

// Result shape (from schema): ({ os: string; architecture: string; download_url: string; filename: string; temp_download_token?: string; sha256_checksum?: string })[]
```

### `github.actions.generateRunnerJitconfigForRepo`

- **HTTP**: `POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig`
- **What it does**: Create configuration for a just-in-time runner for a repository
- **OpenAPI operationId**: `actions/generate-runner-jitconfig-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; runner_group_id: number; labels: (string)[]; work_folder?: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ runner: { id: number; runner_group_id?: number; name: string; os: string; status: string; busy: boolean; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[]; ephemeral?: boolean; version?: string ...`
- OpenAPI response codes: `201`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type ActionsGenerateRunnerJitconfigForRepoInput = Parameters<typeof github.actions.generateRunnerJitconfigForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGenerateRunnerJitconfigForRepoOutput = Awaited<ReturnType<typeof github.actions.generateRunnerJitconfigForRepo>>;

const input: ActionsGenerateRunnerJitconfigForRepoInput = {} as { name: string; runner_group_id: number; labels: (string)[]; work_folder?: string; owner: string; repo: string };
const result: ActionsGenerateRunnerJitconfigForRepoOutput = await github.actions.generateRunnerJitconfigForRepo(input);

// Result shape (from schema): { runner: { id: number; runner_group_id?: number; name: string; os: string; status: string; busy: boolean; labels: ({ id?: number; name: string; type?: "read-only" | "custom" })[]; ephemeral?: boolean; version?: string ...
```

### `github.actions.createRegistrationTokenForRepo`

- **HTTP**: `POST /repos/{owner}/{repo}/actions/runners/registration-token`
- **What it does**: Create a registration token for a repository
- **OpenAPI operationId**: `actions/create-registration-token-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ token: string; expires_at: string; permissions?: { [key: string]: unknown }; repositories?: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; sp...`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ActionsCreateRegistrationTokenForRepoInput = Parameters<typeof github.actions.createRegistrationTokenForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsCreateRegistrationTokenForRepoOutput = Awaited<ReturnType<typeof github.actions.createRegistrationTokenForRepo>>;

const input: ActionsCreateRegistrationTokenForRepoInput = {} as { owner: string; repo: string };
const result: ActionsCreateRegistrationTokenForRepoOutput = await github.actions.createRegistrationTokenForRepo(input);

// Result shape (from schema): { token: string; expires_at: string; permissions?: { [key: string]: unknown }; repositories?: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; sp...
```

### `github.actions.createRemoveTokenForRepo`

- **HTTP**: `POST /repos/{owner}/{repo}/actions/runners/remove-token`
- **What it does**: Create a remove token for a repository
- **OpenAPI operationId**: `actions/create-remove-token-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ token: string; expires_at: string; permissions?: { [key: string]: unknown }; repositories?: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; sp...`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ActionsCreateRemoveTokenForRepoInput = Parameters<typeof github.actions.createRemoveTokenForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsCreateRemoveTokenForRepoOutput = Awaited<ReturnType<typeof github.actions.createRemoveTokenForRepo>>;

const input: ActionsCreateRemoveTokenForRepoInput = {} as { owner: string; repo: string };
const result: ActionsCreateRemoveTokenForRepoOutput = await github.actions.createRemoveTokenForRepo(input);

// Result shape (from schema): { token: string; expires_at: string; permissions?: { [key: string]: unknown }; repositories?: ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; sp...
```

### `github.actions.listWorkflowRunsForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs`
- **What it does**: List workflow runs for a repository
- **OpenAPI operationId**: `actions/list-workflow-runs-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; actor?: string; branch?: string; event?: string; status?: "completed" | "action_required" | "cancelled" | "failure" | "neutral" | "skipped" | "stale" | "success" | "timed_out" | "in_progress" | "queued" | "requested" | "waiting" | "pending"; per_page?: number; page?: number; created?: string; exclude_pull_requests?: boolean; check_suite_id?: number; head_sha?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; workflow_runs: ({ id: number; name?: string | null; node_id: string; check_suite_id?: number; check_suite_node_id?: string; head_branch: string | null; head_sha: string; path: string; run_number: ...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListWorkflowRunsForRepoInput = Parameters<typeof github.actions.listWorkflowRunsForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListWorkflowRunsForRepoOutput = Awaited<ReturnType<typeof github.actions.listWorkflowRunsForRepo>>;

const input: ActionsListWorkflowRunsForRepoInput = {} as { owner: string; repo: string; actor?: string; branch?: string; event?: string; status?: "completed" | "action_required" | "cancelled" | "failure" | "neutral" | "skipped" | "stale" | "success" | "timed_out" | "in_progress" | "queued" | "requested" | "waiting" | "pending"; per_page?: number; page?: number; created?: string; exclude_pull_requests?: boolean; check_suite_id?: number; head_sha?: string };
const result: ActionsListWorkflowRunsForRepoOutput = await github.actions.listWorkflowRunsForRepo(input);

// Result shape (from schema): { total_count: number; workflow_runs: ({ id: number; name?: string | null; node_id: string; check_suite_id?: number; check_suite_node_id?: string; head_branch: string | null; head_sha: string; path: string; run_number: ...
```

### `github.actions.deleteWorkflowRun`

- **HTTP**: `DELETE /repos/{owner}/{repo}/actions/runs/{run_id}`
- **What it does**: Delete a workflow run
- **OpenAPI operationId**: `actions/delete-workflow-run`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsDeleteWorkflowRunInput = Parameters<typeof github.actions.deleteWorkflowRun> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteWorkflowRunOutput = Awaited<ReturnType<typeof github.actions.deleteWorkflowRun>>;

const input: ActionsDeleteWorkflowRunInput = {} as { owner: string; repo: string; run_id: number };
const result: ActionsDeleteWorkflowRunOutput = await github.actions.deleteWorkflowRun(input);

// Result shape (from schema): unknown
```

### `github.actions.getWorkflowRun`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run_id}`
- **What it does**: Get a workflow run
- **OpenAPI operationId**: `actions/get-workflow-run`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number; exclude_pull_requests?: boolean }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name?: string | null; node_id: string; check_suite_id?: number; check_suite_node_id?: string; head_branch: string | null; head_sha: string; path: string; run_number: number; run_attempt?: number; reference...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetWorkflowRunInput = Parameters<typeof github.actions.getWorkflowRun> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetWorkflowRunOutput = Awaited<ReturnType<typeof github.actions.getWorkflowRun>>;

const input: ActionsGetWorkflowRunInput = {} as { owner: string; repo: string; run_id: number; exclude_pull_requests?: boolean };
const result: ActionsGetWorkflowRunOutput = await github.actions.getWorkflowRun(input);

// Result shape (from schema): { id: number; name?: string | null; node_id: string; check_suite_id?: number; check_suite_node_id?: string; head_branch: string | null; head_sha: string; path: string; run_number: number; run_attempt?: number; reference...
```

### `github.actions.getReviewsForRun`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals`
- **What it does**: Get the review history for a workflow run
- **OpenAPI operationId**: `actions/get-reviews-for-run`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ environments: ({ id?: number; node_id?: string; name?: string; url?: string; html_url?: string; created_at?: string; updated_at?: string })[]; state: "approved" | "rejected" | "pending"; user: { name?: string | null;...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetReviewsForRunInput = Parameters<typeof github.actions.getReviewsForRun> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetReviewsForRunOutput = Awaited<ReturnType<typeof github.actions.getReviewsForRun>>;

const input: ActionsGetReviewsForRunInput = {} as { owner: string; repo: string; run_id: number };
const result: ActionsGetReviewsForRunOutput = await github.actions.getReviewsForRun(input);

// Result shape (from schema): ({ environments: ({ id?: number; node_id?: string; name?: string; url?: string; html_url?: string; created_at?: string; updated_at?: string })[]; state: "approved" | "rejected" | "pending"; user: { name?: string | null;...
```

### `github.actions.approveWorkflowRun`

- **HTTP**: `POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve`
- **What it does**: Approve a workflow run for a fork pull request
- **OpenAPI operationId**: `actions/approve-workflow-run`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`, `403`, `404`

```ts
import github from "@utdk/github";

type ActionsApproveWorkflowRunInput = Parameters<typeof github.actions.approveWorkflowRun> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsApproveWorkflowRunOutput = Awaited<ReturnType<typeof github.actions.approveWorkflowRun>>;

const input: ActionsApproveWorkflowRunInput = {} as { owner: string; repo: string; run_id: number };
const result: ActionsApproveWorkflowRunOutput = await github.actions.approveWorkflowRun(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.actions.listWorkflowRunArtifacts`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts`
- **What it does**: List workflow run artifacts
- **OpenAPI operationId**: `actions/list-workflow-run-artifacts`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number; per_page?: number; page?: number; name?: string; direction?: "asc" | "desc" }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; artifacts: ({ id: number; node_id: string; name: string; size_in_bytes: number; url: string; archive_download_url: string; expired: boolean; created_at: string | null; expires_at: string | null; u...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListWorkflowRunArtifactsInput = Parameters<typeof github.actions.listWorkflowRunArtifacts> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListWorkflowRunArtifactsOutput = Awaited<ReturnType<typeof github.actions.listWorkflowRunArtifacts>>;

const input: ActionsListWorkflowRunArtifactsInput = {} as { owner: string; repo: string; run_id: number; per_page?: number; page?: number; name?: string; direction?: "asc" | "desc" };
const result: ActionsListWorkflowRunArtifactsOutput = await github.actions.listWorkflowRunArtifacts(input);

// Result shape (from schema): { total_count: number; artifacts: ({ id: number; node_id: string; name: string; size_in_bytes: number; url: string; archive_download_url: string; expired: boolean; created_at: string | null; expires_at: string | null; u...
```

### `github.actions.getWorkflowRunAttempt`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}`
- **What it does**: Get a workflow run attempt
- **OpenAPI operationId**: `actions/get-workflow-run-attempt`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number; attempt_number: number; exclude_pull_requests?: boolean }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name?: string | null; node_id: string; check_suite_id?: number; check_suite_node_id?: string; head_branch: string | null; head_sha: string; path: string; run_number: number; run_attempt?: number; reference...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetWorkflowRunAttemptInput = Parameters<typeof github.actions.getWorkflowRunAttempt> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetWorkflowRunAttemptOutput = Awaited<ReturnType<typeof github.actions.getWorkflowRunAttempt>>;

const input: ActionsGetWorkflowRunAttemptInput = {} as { owner: string; repo: string; run_id: number; attempt_number: number; exclude_pull_requests?: boolean };
const result: ActionsGetWorkflowRunAttemptOutput = await github.actions.getWorkflowRunAttempt(input);

// Result shape (from schema): { id: number; name?: string | null; node_id: string; check_suite_id?: number; check_suite_node_id?: string; head_branch: string | null; head_sha: string; path: string; run_number: number; run_attempt?: number; reference...
```

### `github.actions.listJobsForWorkflowRunAttempt`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs`
- **What it does**: List jobs for a workflow run attempt
- **OpenAPI operationId**: `actions/list-jobs-for-workflow-run-attempt`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number; attempt_number: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; jobs: ({ id: number; run_id: number; run_url: string; run_attempt?: number; node_id: string; head_sha: string; url: string; html_url: string | null; status: "queued" | "in_progress" | "completed" ...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ActionsListJobsForWorkflowRunAttemptInput = Parameters<typeof github.actions.listJobsForWorkflowRunAttempt> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListJobsForWorkflowRunAttemptOutput = Awaited<ReturnType<typeof github.actions.listJobsForWorkflowRunAttempt>>;

const input: ActionsListJobsForWorkflowRunAttemptInput = {} as { owner: string; repo: string; run_id: number; attempt_number: number; per_page?: number; page?: number };
const result: ActionsListJobsForWorkflowRunAttemptOutput = await github.actions.listJobsForWorkflowRunAttempt(input);

// Result shape (from schema): { total_count: number; jobs: ({ id: number; run_id: number; run_url: string; run_attempt?: number; node_id: string; head_sha: string; url: string; html_url: string | null; status: "queued" | "in_progress" | "completed" ...
```

### `github.actions.downloadWorkflowRunAttemptLogs`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs`
- **What it does**: Download workflow run attempt logs
- **OpenAPI operationId**: `actions/download-workflow-run-attempt-logs`
- **Path params**: None
- **Query params**: None
- **Response codes**: `302`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number; attempt_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `302`

```ts
import github from "@utdk/github";

type ActionsDownloadWorkflowRunAttemptLogsInput = Parameters<typeof github.actions.downloadWorkflowRunAttemptLogs> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDownloadWorkflowRunAttemptLogsOutput = Awaited<ReturnType<typeof github.actions.downloadWorkflowRunAttemptLogs>>;

const input: ActionsDownloadWorkflowRunAttemptLogsInput = {} as { owner: string; repo: string; run_id: number; attempt_number: number };
const result: ActionsDownloadWorkflowRunAttemptLogsOutput = await github.actions.downloadWorkflowRunAttemptLogs(input);

// Result shape (from schema): unknown
```

### `github.actions.cancelWorkflowRun`

- **HTTP**: `POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel`
- **What it does**: Cancel a workflow run
- **OpenAPI operationId**: `actions/cancel-workflow-run`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `409`

```ts
import github from "@utdk/github";

type ActionsCancelWorkflowRunInput = Parameters<typeof github.actions.cancelWorkflowRun> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsCancelWorkflowRunOutput = Awaited<ReturnType<typeof github.actions.cancelWorkflowRun>>;

const input: ActionsCancelWorkflowRunInput = {} as { owner: string; repo: string; run_id: number };
const result: ActionsCancelWorkflowRunOutput = await github.actions.cancelWorkflowRun(input);

// Result shape (from schema): unknown
```

### `github.actions.listConcurrencyGroupsForWorkflowRun`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run_id}/concurrency_groups`
- **What it does**: List concurrency groups for a workflow run
- **OpenAPI operationId**: `actions/list-concurrency-groups-for-workflow-run`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number; per_page?: number; before?: string; after?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; concurrency_groups: ({ group_name: string; group_url: string; group_members: ({ run_id: number; run_name: string; run_url: string | null; run_html_url: string | null; position: number; position_ur...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type ActionsListConcurrencyGroupsForWorkflowRunInput = Parameters<typeof github.actions.listConcurrencyGroupsForWorkflowRun> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListConcurrencyGroupsForWorkflowRunOutput = Awaited<ReturnType<typeof github.actions.listConcurrencyGroupsForWorkflowRun>>;

const input: ActionsListConcurrencyGroupsForWorkflowRunInput = {} as { owner: string; repo: string; run_id: number; per_page?: number; before?: string; after?: string };
const result: ActionsListConcurrencyGroupsForWorkflowRunOutput = await github.actions.listConcurrencyGroupsForWorkflowRun(input);

// Result shape (from schema): { total_count: number; concurrency_groups: ({ group_name: string; group_url: string; group_members: ({ run_id: number; run_name: string; run_url: string | null; run_html_url: string | null; position: number; position_ur...
```

### `github.actions.reviewCustomGatesForRun`

- **HTTP**: `POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule`
- **What it does**: Review custom deployment protection rules for a workflow run
- **OpenAPI operationId**: `actions/review-custom-gates-for-run`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: { environment_name: string; comment: string } | { environment_name: string; state: "approved" | "rejected"; comment?: string }; owner: string; repo: string; run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsReviewCustomGatesForRunInput = Parameters<typeof github.actions.reviewCustomGatesForRun> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsReviewCustomGatesForRunOutput = Awaited<ReturnType<typeof github.actions.reviewCustomGatesForRun>>;

const input: ActionsReviewCustomGatesForRunInput = {} as { body: { environment_name: string; comment: string } | { environment_name: string; state: "approved" | "rejected"; comment?: string }; owner: string; repo: string; run_id: number };
const result: ActionsReviewCustomGatesForRunOutput = await github.actions.reviewCustomGatesForRun(input);

// Result shape (from schema): unknown
```

### `github.actions.forceCancelWorkflowRun`

- **HTTP**: `POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel`
- **What it does**: Force cancel a workflow run
- **OpenAPI operationId**: `actions/force-cancel-workflow-run`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `409`

```ts
import github from "@utdk/github";

type ActionsForceCancelWorkflowRunInput = Parameters<typeof github.actions.forceCancelWorkflowRun> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsForceCancelWorkflowRunOutput = Awaited<ReturnType<typeof github.actions.forceCancelWorkflowRun>>;

const input: ActionsForceCancelWorkflowRunInput = {} as { owner: string; repo: string; run_id: number };
const result: ActionsForceCancelWorkflowRunOutput = await github.actions.forceCancelWorkflowRun(input);

// Result shape (from schema): unknown
```

### `github.actions.listJobsForWorkflowRun`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs`
- **What it does**: List jobs for a workflow run
- **OpenAPI operationId**: `actions/list-jobs-for-workflow-run`
- **Path params**: None
- **Query params**: `filter`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number; filter?: "latest" | "all"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; jobs: ({ id: number; run_id: number; run_url: string; run_attempt?: number; node_id: string; head_sha: string; url: string; html_url: string | null; status: "queued" | "in_progress" | "completed" ...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListJobsForWorkflowRunInput = Parameters<typeof github.actions.listJobsForWorkflowRun> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListJobsForWorkflowRunOutput = Awaited<ReturnType<typeof github.actions.listJobsForWorkflowRun>>;

const input: ActionsListJobsForWorkflowRunInput = {} as { owner: string; repo: string; run_id: number; filter?: "latest" | "all"; per_page?: number; page?: number };
const result: ActionsListJobsForWorkflowRunOutput = await github.actions.listJobsForWorkflowRun(input);

// Result shape (from schema): { total_count: number; jobs: ({ id: number; run_id: number; run_url: string; run_attempt?: number; node_id: string; head_sha: string; url: string; html_url: string | null; status: "queued" | "in_progress" | "completed" ...
```

### `github.actions.deleteWorkflowRunLogs`

- **HTTP**: `DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs`
- **What it does**: Delete workflow run logs
- **OpenAPI operationId**: `actions/delete-workflow-run-logs`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `500`

```ts
import github from "@utdk/github";

type ActionsDeleteWorkflowRunLogsInput = Parameters<typeof github.actions.deleteWorkflowRunLogs> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteWorkflowRunLogsOutput = Awaited<ReturnType<typeof github.actions.deleteWorkflowRunLogs>>;

const input: ActionsDeleteWorkflowRunLogsInput = {} as { owner: string; repo: string; run_id: number };
const result: ActionsDeleteWorkflowRunLogsOutput = await github.actions.deleteWorkflowRunLogs(input);

// Result shape (from schema): unknown
```

### `github.actions.downloadWorkflowRunLogs`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs`
- **What it does**: Download workflow run logs
- **OpenAPI operationId**: `actions/download-workflow-run-logs`
- **Path params**: None
- **Query params**: None
- **Response codes**: `302`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `302`

```ts
import github from "@utdk/github";

type ActionsDownloadWorkflowRunLogsInput = Parameters<typeof github.actions.downloadWorkflowRunLogs> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDownloadWorkflowRunLogsOutput = Awaited<ReturnType<typeof github.actions.downloadWorkflowRunLogs>>;

const input: ActionsDownloadWorkflowRunLogsInput = {} as { owner: string; repo: string; run_id: number };
const result: ActionsDownloadWorkflowRunLogsOutput = await github.actions.downloadWorkflowRunLogs(input);

// Result shape (from schema): unknown
```

### `github.actions.getPendingDeploymentsForRun`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`
- **What it does**: Get pending deployments for a workflow run
- **OpenAPI operationId**: `actions/get-pending-deployments-for-run`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ environment: { id?: number; node_id?: string; name?: string; url?: string; html_url?: string }; wait_timer: number; wait_timer_started_at: string | null; current_user_can_approve: boolean; reviewers: ({ type?: "User"...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetPendingDeploymentsForRunInput = Parameters<typeof github.actions.getPendingDeploymentsForRun> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetPendingDeploymentsForRunOutput = Awaited<ReturnType<typeof github.actions.getPendingDeploymentsForRun>>;

const input: ActionsGetPendingDeploymentsForRunInput = {} as { owner: string; repo: string; run_id: number };
const result: ActionsGetPendingDeploymentsForRunOutput = await github.actions.getPendingDeploymentsForRun(input);

// Result shape (from schema): ({ environment: { id?: number; node_id?: string; name?: string; url?: string; html_url?: string }; wait_timer: number; wait_timer_started_at: string | null; current_user_can_approve: boolean; reviewers: ({ type?: "User"...
```

### `github.actions.reviewPendingDeploymentsForRun`

- **HTTP**: `POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`
- **What it does**: Review pending deployments for a workflow run
- **OpenAPI operationId**: `actions/review-pending-deployments-for-run`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ environment_ids: (number)[]; state: "approved" | "rejected"; comment: string; owner: string; repo: string; run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; id: number; node_id: string; sha: string; ref: string; task: string; payload: { [key: string]: unknown } | string; original_environment?: string; environment: string; description: string | null; creator:...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsReviewPendingDeploymentsForRunInput = Parameters<typeof github.actions.reviewPendingDeploymentsForRun> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsReviewPendingDeploymentsForRunOutput = Awaited<ReturnType<typeof github.actions.reviewPendingDeploymentsForRun>>;

const input: ActionsReviewPendingDeploymentsForRunInput = {} as { environment_ids: (number)[]; state: "approved" | "rejected"; comment: string; owner: string; repo: string; run_id: number };
const result: ActionsReviewPendingDeploymentsForRunOutput = await github.actions.reviewPendingDeploymentsForRun(input);

// Result shape (from schema): ({ url: string; id: number; node_id: string; sha: string; ref: string; task: string; payload: { [key: string]: unknown } | string; original_environment?: string; environment: string; description: string | null; creator:...
```

### `github.actions.reRunWorkflow`

- **HTTP**: `POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun`
- **What it does**: Re-run a workflow
- **OpenAPI operationId**: `actions/re-run-workflow`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enable_debug_logging?: boolean; owner: string; repo: string; run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ActionsReRunWorkflowInput = Parameters<typeof github.actions.reRunWorkflow> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsReRunWorkflowOutput = Awaited<ReturnType<typeof github.actions.reRunWorkflow>>;

const input: ActionsReRunWorkflowInput = {} as { enable_debug_logging?: boolean; owner: string; repo: string; run_id: number };
const result: ActionsReRunWorkflowOutput = await github.actions.reRunWorkflow(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.actions.reRunWorkflowFailedJobs`

- **HTTP**: `POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs`
- **What it does**: Re-run failed jobs from a workflow run
- **OpenAPI operationId**: `actions/re-run-workflow-failed-jobs`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enable_debug_logging?: boolean; owner: string; repo: string; run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ActionsReRunWorkflowFailedJobsInput = Parameters<typeof github.actions.reRunWorkflowFailedJobs> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsReRunWorkflowFailedJobsOutput = Awaited<ReturnType<typeof github.actions.reRunWorkflowFailedJobs>>;

const input: ActionsReRunWorkflowFailedJobsInput = {} as { enable_debug_logging?: boolean; owner: string; repo: string; run_id: number };
const result: ActionsReRunWorkflowFailedJobsOutput = await github.actions.reRunWorkflowFailedJobs(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.actions.getWorkflowRunUsage`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing`
- **What it does**: Get workflow run usage
- **OpenAPI operationId**: `actions/get-workflow-run-usage`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; run_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ billable: { UBUNTU?: { total_ms: number; jobs: number; job_runs?: ({ job_id: number; duration_ms: number })[] }; MACOS?: { total_ms: number; jobs: number; job_runs?: ({ job_id: number; duration_ms: number })[] }; WIND...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetWorkflowRunUsageInput = Parameters<typeof github.actions.getWorkflowRunUsage> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetWorkflowRunUsageOutput = Awaited<ReturnType<typeof github.actions.getWorkflowRunUsage>>;

const input: ActionsGetWorkflowRunUsageInput = {} as { owner: string; repo: string; run_id: number };
const result: ActionsGetWorkflowRunUsageOutput = await github.actions.getWorkflowRunUsage(input);

// Result shape (from schema): { billable: { UBUNTU?: { total_ms: number; jobs: number; job_runs?: ({ job_id: number; duration_ms: number })[] }; MACOS?: { total_ms: number; jobs: number; job_runs?: ({ job_id: number; duration_ms: number })[] }; WIND...
```

### `github.actions.listRepoSecrets`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/secrets`
- **What it does**: List repository secrets
- **OpenAPI operationId**: `actions/list-repo-secrets`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; secrets: ({ name: string; created_at: string; updated_at: string })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListRepoSecretsInput = Parameters<typeof github.actions.listRepoSecrets> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListRepoSecretsOutput = Awaited<ReturnType<typeof github.actions.listRepoSecrets>>;

const input: ActionsListRepoSecretsInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ActionsListRepoSecretsOutput = await github.actions.listRepoSecrets(input);

// Result shape (from schema): { total_count: number; secrets: ({ name: string; created_at: string; updated_at: string })[] }
```

### `github.actions.deleteRepoSecret`

- **HTTP**: `DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}`
- **What it does**: Delete a repository secret
- **OpenAPI operationId**: `actions/delete-repo-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsDeleteRepoSecretInput = Parameters<typeof github.actions.deleteRepoSecret> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteRepoSecretOutput = Awaited<ReturnType<typeof github.actions.deleteRepoSecret>>;

const input: ActionsDeleteRepoSecretInput = {} as { owner: string; repo: string; secret_name: string };
const result: ActionsDeleteRepoSecretOutput = await github.actions.deleteRepoSecret(input);

// Result shape (from schema): unknown
```

### `github.actions.getRepoSecret`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/secrets/{secret_name}`
- **What it does**: Get a repository secret
- **OpenAPI operationId**: `actions/get-repo-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; created_at: string; updated_at: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetRepoSecretInput = Parameters<typeof github.actions.getRepoSecret> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetRepoSecretOutput = Awaited<ReturnType<typeof github.actions.getRepoSecret>>;

const input: ActionsGetRepoSecretInput = {} as { owner: string; repo: string; secret_name: string };
const result: ActionsGetRepoSecretOutput = await github.actions.getRepoSecret(input);

// Result shape (from schema): { name: string; created_at: string; updated_at: string }
```

### `github.actions.createOrUpdateRepoSecret`

- **HTTP**: `PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}`
- **What it does**: Create or update a repository secret
- **OpenAPI operationId**: `actions/create-or-update-repo-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ encrypted_value: string; key_id: string; owner: string; repo: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`, `204`

```ts
import github from "@utdk/github";

type ActionsCreateOrUpdateRepoSecretInput = Parameters<typeof github.actions.createOrUpdateRepoSecret> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsCreateOrUpdateRepoSecretOutput = Awaited<ReturnType<typeof github.actions.createOrUpdateRepoSecret>>;

const input: ActionsCreateOrUpdateRepoSecretInput = {} as { encrypted_value: string; key_id: string; owner: string; repo: string; secret_name: string };
const result: ActionsCreateOrUpdateRepoSecretOutput = await github.actions.createOrUpdateRepoSecret(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.actions.getRepoPublicKey`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/secrets/public-key`
- **What it does**: Get a repository public key
- **OpenAPI operationId**: `actions/get-repo-public-key`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ key_id: string; key: string; id?: number; url?: string; title?: string; created_at?: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetRepoPublicKeyInput = Parameters<typeof github.actions.getRepoPublicKey> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetRepoPublicKeyOutput = Awaited<ReturnType<typeof github.actions.getRepoPublicKey>>;

const input: ActionsGetRepoPublicKeyInput = {} as { owner: string; repo: string };
const result: ActionsGetRepoPublicKeyOutput = await github.actions.getRepoPublicKey(input);

// Result shape (from schema): { key_id: string; key: string; id?: number; url?: string; title?: string; created_at?: string }
```

### `github.actions.listRepoVariables`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/variables`
- **What it does**: List repository variables
- **OpenAPI operationId**: `actions/list-repo-variables`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; variables: ({ name: string; value: string; created_at: string; updated_at: string })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListRepoVariablesInput = Parameters<typeof github.actions.listRepoVariables> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListRepoVariablesOutput = Awaited<ReturnType<typeof github.actions.listRepoVariables>>;

const input: ActionsListRepoVariablesInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ActionsListRepoVariablesOutput = await github.actions.listRepoVariables(input);

// Result shape (from schema): { total_count: number; variables: ({ name: string; value: string; created_at: string; updated_at: string })[] }
```

### `github.actions.createRepoVariable`

- **HTTP**: `POST /repos/{owner}/{repo}/actions/variables`
- **What it does**: Create a repository variable
- **OpenAPI operationId**: `actions/create-repo-variable`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; value: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ActionsCreateRepoVariableInput = Parameters<typeof github.actions.createRepoVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsCreateRepoVariableOutput = Awaited<ReturnType<typeof github.actions.createRepoVariable>>;

const input: ActionsCreateRepoVariableInput = {} as { name: string; value: string; owner: string; repo: string };
const result: ActionsCreateRepoVariableOutput = await github.actions.createRepoVariable(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.actions.deleteRepoVariable`

- **HTTP**: `DELETE /repos/{owner}/{repo}/actions/variables/{name}`
- **What it does**: Delete a repository variable
- **OpenAPI operationId**: `actions/delete-repo-variable`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsDeleteRepoVariableInput = Parameters<typeof github.actions.deleteRepoVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteRepoVariableOutput = Awaited<ReturnType<typeof github.actions.deleteRepoVariable>>;

const input: ActionsDeleteRepoVariableInput = {} as { owner: string; repo: string; name: string };
const result: ActionsDeleteRepoVariableOutput = await github.actions.deleteRepoVariable(input);

// Result shape (from schema): unknown
```

### `github.actions.getRepoVariable`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/variables/{name}`
- **What it does**: Get a repository variable
- **OpenAPI operationId**: `actions/get-repo-variable`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; value: string; created_at: string; updated_at: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetRepoVariableInput = Parameters<typeof github.actions.getRepoVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetRepoVariableOutput = Awaited<ReturnType<typeof github.actions.getRepoVariable>>;

const input: ActionsGetRepoVariableInput = {} as { owner: string; repo: string; name: string };
const result: ActionsGetRepoVariableOutput = await github.actions.getRepoVariable(input);

// Result shape (from schema): { name: string; value: string; created_at: string; updated_at: string }
```

### `github.actions.updateRepoVariable`

- **HTTP**: `PATCH /repos/{owner}/{repo}/actions/variables/{name}`
- **What it does**: Update a repository variable
- **OpenAPI operationId**: `actions/update-repo-variable`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: `{ params: { name: string } }`
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; value?: string; owner: string; repo: string }`
- Client transport options: `{ params: { name: string } }`

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsUpdateRepoVariableInput = Parameters<typeof github.actions.updateRepoVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsUpdateRepoVariableOutput = Awaited<ReturnType<typeof github.actions.updateRepoVariable>>;
type ActionsUpdateRepoVariableOptions = Parameters<typeof github.actions.updateRepoVariable> extends [unknown, infer T, ...unknown[]] ? T : undefined;

const input: ActionsUpdateRepoVariableInput = {} as { name?: string; value?: string; owner: string; repo: string };
const options: ActionsUpdateRepoVariableOptions = {} as { params: { name: string } };
const result: ActionsUpdateRepoVariableOutput = await github.actions.updateRepoVariable(input, options);

// Result shape (from schema): unknown
```

### `github.actions.listRepoWorkflows`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/workflows`
- **What it does**: List repository workflows
- **OpenAPI operationId**: `actions/list-repo-workflows`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; workflows: ({ id: number; node_id: string; name: string; path: string; state: "active" | "deleted" | "disabled_fork" | "disabled_inactivity" | "disabled_manually"; created_at: string; updated_at: ...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListRepoWorkflowsInput = Parameters<typeof github.actions.listRepoWorkflows> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListRepoWorkflowsOutput = Awaited<ReturnType<typeof github.actions.listRepoWorkflows>>;

const input: ActionsListRepoWorkflowsInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ActionsListRepoWorkflowsOutput = await github.actions.listRepoWorkflows(input);

// Result shape (from schema): { total_count: number; workflows: ({ id: number; node_id: string; name: string; path: string; state: "active" | "deleted" | "disabled_fork" | "disabled_inactivity" | "disabled_manually"; created_at: string; updated_at: ...
```

### `github.actions.getWorkflow`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}`
- **What it does**: Get a workflow
- **OpenAPI operationId**: `actions/get-workflow`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; workflow_id: number | string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; name: string; path: string; state: "active" | "deleted" | "disabled_fork" | "disabled_inactivity" | "disabled_manually"; created_at: string; updated_at: string; url: string; html_url: stri...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetWorkflowInput = Parameters<typeof github.actions.getWorkflow> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetWorkflowOutput = Awaited<ReturnType<typeof github.actions.getWorkflow>>;

const input: ActionsGetWorkflowInput = {} as { owner: string; repo: string; workflow_id: number | string };
const result: ActionsGetWorkflowOutput = await github.actions.getWorkflow(input);

// Result shape (from schema): { id: number; node_id: string; name: string; path: string; state: "active" | "deleted" | "disabled_fork" | "disabled_inactivity" | "disabled_manually"; created_at: string; updated_at: string; url: string; html_url: stri...
```

### `github.actions.disableWorkflow`

- **HTTP**: `PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable`
- **What it does**: Disable a workflow
- **OpenAPI operationId**: `actions/disable-workflow`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; workflow_id: number | string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsDisableWorkflowInput = Parameters<typeof github.actions.disableWorkflow> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDisableWorkflowOutput = Awaited<ReturnType<typeof github.actions.disableWorkflow>>;

const input: ActionsDisableWorkflowInput = {} as { owner: string; repo: string; workflow_id: number | string };
const result: ActionsDisableWorkflowOutput = await github.actions.disableWorkflow(input);

// Result shape (from schema): unknown
```

### `github.actions.createWorkflowDispatch`

- **HTTP**: `POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`
- **What it does**: Create a workflow dispatch event
- **OpenAPI operationId**: `actions/create-workflow-dispatch`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ ref: string; inputs?: { [key: string]: unknown }; return_run_details?: boolean; owner: string; repo: string; workflow_id: number | string }`
- Client transport options: None

**Outputs**

- Client return type: `{ workflow_run_id: number; run_url: string; html_url: string }`
- OpenAPI response codes: `200`, `204`

```ts
import github from "@utdk/github";

type ActionsCreateWorkflowDispatchInput = Parameters<typeof github.actions.createWorkflowDispatch> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsCreateWorkflowDispatchOutput = Awaited<ReturnType<typeof github.actions.createWorkflowDispatch>>;

const input: ActionsCreateWorkflowDispatchInput = {} as { ref: string; inputs?: { [key: string]: unknown }; return_run_details?: boolean; owner: string; repo: string; workflow_id: number | string };
const result: ActionsCreateWorkflowDispatchOutput = await github.actions.createWorkflowDispatch(input);

// Result shape (from schema): { workflow_run_id: number; run_url: string; html_url: string }
```

### `github.actions.enableWorkflow`

- **HTTP**: `PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable`
- **What it does**: Enable a workflow
- **OpenAPI operationId**: `actions/enable-workflow`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; workflow_id: number | string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsEnableWorkflowInput = Parameters<typeof github.actions.enableWorkflow> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsEnableWorkflowOutput = Awaited<ReturnType<typeof github.actions.enableWorkflow>>;

const input: ActionsEnableWorkflowInput = {} as { owner: string; repo: string; workflow_id: number | string };
const result: ActionsEnableWorkflowOutput = await github.actions.enableWorkflow(input);

// Result shape (from schema): unknown
```

### `github.actions.listWorkflowRuns`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs`
- **What it does**: List workflow runs for a workflow
- **OpenAPI operationId**: `actions/list-workflow-runs`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; workflow_id: number | string; actor?: string; branch?: string; event?: string; status?: "completed" | "action_required" | "cancelled" | "failure" | "neutral" | "skipped" | "stale" | "success" | "timed_out" | "in_progress" | "queued" | "requested" | "waiting" | "pending"; per_page?: number; page?: number; created?: string; exclude_pull_requests?: boolean; check_suite_id?: number; head_sha?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; workflow_runs: ({ id: number; name?: string | null; node_id: string; check_suite_id?: number; check_suite_node_id?: string; head_branch: string | null; head_sha: string; path: string; run_number: ...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListWorkflowRunsInput = Parameters<typeof github.actions.listWorkflowRuns> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListWorkflowRunsOutput = Awaited<ReturnType<typeof github.actions.listWorkflowRuns>>;

const input: ActionsListWorkflowRunsInput = {} as { owner: string; repo: string; workflow_id: number | string; actor?: string; branch?: string; event?: string; status?: "completed" | "action_required" | "cancelled" | "failure" | "neutral" | "skipped" | "stale" | "success" | "timed_out" | "in_progress" | "queued" | "requested" | "waiting" | "pending"; per_page?: number; page?: number; created?: string; exclude_pull_requests?: boolean; check_suite_id?: number; head_sha?: string };
const result: ActionsListWorkflowRunsOutput = await github.actions.listWorkflowRuns(input);

// Result shape (from schema): { total_count: number; workflow_runs: ({ id: number; name?: string | null; node_id: string; check_suite_id?: number; check_suite_node_id?: string; head_branch: string | null; head_sha: string; path: string; run_number: ...
```

### `github.actions.getWorkflowUsage`

- **HTTP**: `GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing`
- **What it does**: Get workflow usage
- **OpenAPI operationId**: `actions/get-workflow-usage`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; workflow_id: number | string }`
- Client transport options: None

**Outputs**

- Client return type: `{ billable: { UBUNTU?: { total_ms?: number }; MACOS?: { total_ms?: number }; WINDOWS?: { total_ms?: number } } }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetWorkflowUsageInput = Parameters<typeof github.actions.getWorkflowUsage> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetWorkflowUsageOutput = Awaited<ReturnType<typeof github.actions.getWorkflowUsage>>;

const input: ActionsGetWorkflowUsageInput = {} as { owner: string; repo: string; workflow_id: number | string };
const result: ActionsGetWorkflowUsageOutput = await github.actions.getWorkflowUsage(input);

// Result shape (from schema): { billable: { UBUNTU?: { total_ms?: number }; MACOS?: { total_ms?: number }; WINDOWS?: { total_ms?: number } } }
```

### `github.actions.listEnvironmentSecrets`

- **HTTP**: `GET /repos/{owner}/{repo}/environments/{environment_name}/secrets`
- **What it does**: List environment secrets
- **OpenAPI operationId**: `actions/list-environment-secrets`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; environment_name: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; secrets: ({ name: string; created_at: string; updated_at: string })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListEnvironmentSecretsInput = Parameters<typeof github.actions.listEnvironmentSecrets> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListEnvironmentSecretsOutput = Awaited<ReturnType<typeof github.actions.listEnvironmentSecrets>>;

const input: ActionsListEnvironmentSecretsInput = {} as { owner: string; repo: string; environment_name: string; per_page?: number; page?: number };
const result: ActionsListEnvironmentSecretsOutput = await github.actions.listEnvironmentSecrets(input);

// Result shape (from schema): { total_count: number; secrets: ({ name: string; created_at: string; updated_at: string })[] }
```

### `github.actions.deleteEnvironmentSecret`

- **HTTP**: `DELETE /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}`
- **What it does**: Delete an environment secret
- **OpenAPI operationId**: `actions/delete-environment-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; environment_name: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsDeleteEnvironmentSecretInput = Parameters<typeof github.actions.deleteEnvironmentSecret> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteEnvironmentSecretOutput = Awaited<ReturnType<typeof github.actions.deleteEnvironmentSecret>>;

const input: ActionsDeleteEnvironmentSecretInput = {} as { owner: string; repo: string; environment_name: string; secret_name: string };
const result: ActionsDeleteEnvironmentSecretOutput = await github.actions.deleteEnvironmentSecret(input);

// Result shape (from schema): unknown
```

### `github.actions.getEnvironmentSecret`

- **HTTP**: `GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}`
- **What it does**: Get an environment secret
- **OpenAPI operationId**: `actions/get-environment-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; environment_name: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; created_at: string; updated_at: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetEnvironmentSecretInput = Parameters<typeof github.actions.getEnvironmentSecret> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetEnvironmentSecretOutput = Awaited<ReturnType<typeof github.actions.getEnvironmentSecret>>;

const input: ActionsGetEnvironmentSecretInput = {} as { owner: string; repo: string; environment_name: string; secret_name: string };
const result: ActionsGetEnvironmentSecretOutput = await github.actions.getEnvironmentSecret(input);

// Result shape (from schema): { name: string; created_at: string; updated_at: string }
```

### `github.actions.createOrUpdateEnvironmentSecret`

- **HTTP**: `PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}`
- **What it does**: Create or update an environment secret
- **OpenAPI operationId**: `actions/create-or-update-environment-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ encrypted_value: string; key_id: string; owner: string; repo: string; environment_name: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`, `204`

```ts
import github from "@utdk/github";

type ActionsCreateOrUpdateEnvironmentSecretInput = Parameters<typeof github.actions.createOrUpdateEnvironmentSecret> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsCreateOrUpdateEnvironmentSecretOutput = Awaited<ReturnType<typeof github.actions.createOrUpdateEnvironmentSecret>>;

const input: ActionsCreateOrUpdateEnvironmentSecretInput = {} as { encrypted_value: string; key_id: string; owner: string; repo: string; environment_name: string; secret_name: string };
const result: ActionsCreateOrUpdateEnvironmentSecretOutput = await github.actions.createOrUpdateEnvironmentSecret(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.actions.getEnvironmentPublicKey`

- **HTTP**: `GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key`
- **What it does**: Get an environment public key
- **OpenAPI operationId**: `actions/get-environment-public-key`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; environment_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ key_id: string; key: string; id?: number; url?: string; title?: string; created_at?: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetEnvironmentPublicKeyInput = Parameters<typeof github.actions.getEnvironmentPublicKey> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetEnvironmentPublicKeyOutput = Awaited<ReturnType<typeof github.actions.getEnvironmentPublicKey>>;

const input: ActionsGetEnvironmentPublicKeyInput = {} as { owner: string; repo: string; environment_name: string };
const result: ActionsGetEnvironmentPublicKeyOutput = await github.actions.getEnvironmentPublicKey(input);

// Result shape (from schema): { key_id: string; key: string; id?: number; url?: string; title?: string; created_at?: string }
```

### `github.actions.listEnvironmentVariables`

- **HTTP**: `GET /repos/{owner}/{repo}/environments/{environment_name}/variables`
- **What it does**: List environment variables
- **OpenAPI operationId**: `actions/list-environment-variables`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; environment_name: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; variables: ({ name: string; value: string; created_at: string; updated_at: string })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsListEnvironmentVariablesInput = Parameters<typeof github.actions.listEnvironmentVariables> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsListEnvironmentVariablesOutput = Awaited<ReturnType<typeof github.actions.listEnvironmentVariables>>;

const input: ActionsListEnvironmentVariablesInput = {} as { owner: string; repo: string; environment_name: string; per_page?: number; page?: number };
const result: ActionsListEnvironmentVariablesOutput = await github.actions.listEnvironmentVariables(input);

// Result shape (from schema): { total_count: number; variables: ({ name: string; value: string; created_at: string; updated_at: string })[] }
```

### `github.actions.createEnvironmentVariable`

- **HTTP**: `POST /repos/{owner}/{repo}/environments/{environment_name}/variables`
- **What it does**: Create an environment variable
- **OpenAPI operationId**: `actions/create-environment-variable`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; value: string; owner: string; repo: string; environment_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ActionsCreateEnvironmentVariableInput = Parameters<typeof github.actions.createEnvironmentVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsCreateEnvironmentVariableOutput = Awaited<ReturnType<typeof github.actions.createEnvironmentVariable>>;

const input: ActionsCreateEnvironmentVariableInput = {} as { name: string; value: string; owner: string; repo: string; environment_name: string };
const result: ActionsCreateEnvironmentVariableOutput = await github.actions.createEnvironmentVariable(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.actions.deleteEnvironmentVariable`

- **HTTP**: `DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}`
- **What it does**: Delete an environment variable
- **OpenAPI operationId**: `actions/delete-environment-variable`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; name: string; environment_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsDeleteEnvironmentVariableInput = Parameters<typeof github.actions.deleteEnvironmentVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsDeleteEnvironmentVariableOutput = Awaited<ReturnType<typeof github.actions.deleteEnvironmentVariable>>;

const input: ActionsDeleteEnvironmentVariableInput = {} as { owner: string; repo: string; name: string; environment_name: string };
const result: ActionsDeleteEnvironmentVariableOutput = await github.actions.deleteEnvironmentVariable(input);

// Result shape (from schema): unknown
```

### `github.actions.getEnvironmentVariable`

- **HTTP**: `GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}`
- **What it does**: Get an environment variable
- **OpenAPI operationId**: `actions/get-environment-variable`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; environment_name: string; name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; value: string; created_at: string; updated_at: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActionsGetEnvironmentVariableInput = Parameters<typeof github.actions.getEnvironmentVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsGetEnvironmentVariableOutput = Awaited<ReturnType<typeof github.actions.getEnvironmentVariable>>;

const input: ActionsGetEnvironmentVariableInput = {} as { owner: string; repo: string; environment_name: string; name: string };
const result: ActionsGetEnvironmentVariableOutput = await github.actions.getEnvironmentVariable(input);

// Result shape (from schema): { name: string; value: string; created_at: string; updated_at: string }
```

### `github.actions.updateEnvironmentVariable`

- **HTTP**: `PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}`
- **What it does**: Update an environment variable
- **OpenAPI operationId**: `actions/update-environment-variable`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: `{ params: { name: string } }`
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; value?: string; owner: string; repo: string; environment_name: string }`
- Client transport options: `{ params: { name: string } }`

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActionsUpdateEnvironmentVariableInput = Parameters<typeof github.actions.updateEnvironmentVariable> extends [infer T, ...unknown[]] ? T : undefined;
type ActionsUpdateEnvironmentVariableOutput = Awaited<ReturnType<typeof github.actions.updateEnvironmentVariable>>;
type ActionsUpdateEnvironmentVariableOptions = Parameters<typeof github.actions.updateEnvironmentVariable> extends [unknown, infer T, ...unknown[]] ? T : undefined;

const input: ActionsUpdateEnvironmentVariableInput = {} as { name?: string; value?: string; owner: string; repo: string; environment_name: string };
const options: ActionsUpdateEnvironmentVariableOptions = {} as { params: { name: string } };
const result: ActionsUpdateEnvironmentVariableOutput = await github.actions.updateEnvironmentVariable(input, options);

// Result shape (from schema): unknown
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
