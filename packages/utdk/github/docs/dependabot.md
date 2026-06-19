# Dependabot

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.dependabot.listAlertsForEnterprise`

- **HTTP**: `GET /enterprises/{enterprise}/dependabot/alerts`
- **What it does**: List Dependabot alerts for an enterprise
- **OpenAPI operationId**: `dependabot/list-alerts-for-enterprise`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; classification?: string; state?: string; severity?: string; ecosystem?: string; package?: string; epss_percentage?: string; has?: string | ("patch")[]; assignee?: string; scope?: "development" | "runtime"; sort?: "created" | "updated" | "epss_percentage"; direction?: "asc" | "desc"; before?: string; after?: string; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ number: number; state: "auto_dismissed" | "dismissed" | "fixed" | "open"; dependency: { package?: { ecosystem: string; name: string }; manifest_path?: string; scope?: "development" | "runtime" | null; relationship?: ...`
- OpenAPI response codes: `200`, `304`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type DependabotListAlertsForEnterpriseInput = Parameters<typeof github.dependabot.listAlertsForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotListAlertsForEnterpriseOutput = Awaited<ReturnType<typeof github.dependabot.listAlertsForEnterprise>>;

const input: DependabotListAlertsForEnterpriseInput = {} as { enterprise: string; classification?: string; state?: string; severity?: string; ecosystem?: string; package?: string; epss_percentage?: string; has?: string | ("patch")[]; assignee?: string; scope?: "development" | "runtime"; sort?: "created" | "updated" | "epss_percentage"; direction?: "asc" | "desc"; before?: string; after?: string; per_page?: number };
const result: DependabotListAlertsForEnterpriseOutput = await github.dependabot.listAlertsForEnterprise(input);

// Result shape (from schema): ({ number: number; state: "auto_dismissed" | "dismissed" | "fixed" | "open"; dependency: { package?: { ecosystem: string; name: string }; manifest_path?: string; scope?: "development" | "runtime" | null; relationship?: ...
```

### `github.dependabot.repositoryAccessForEnterprise`

- **HTTP**: `GET /enterprises/{enterprise}/dependabot/repository-access`
- **What it does**: Lists the repositories Dependabot can access in an enterprise
- **OpenAPI operationId**: `dependabot/repository-access-for-enterprise`
- **Path params**: None
- **Query params**: `page`, `per_page`
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ default_level?: "public" | "internal" | null; accessible_repositories?: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number;...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type DependabotRepositoryAccessForEnterpriseInput = Parameters<typeof github.dependabot.repositoryAccessForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotRepositoryAccessForEnterpriseOutput = Awaited<ReturnType<typeof github.dependabot.repositoryAccessForEnterprise>>;

const input: DependabotRepositoryAccessForEnterpriseInput = {} as { enterprise: string; page?: number; per_page?: number };
const result: DependabotRepositoryAccessForEnterpriseOutput = await github.dependabot.repositoryAccessForEnterprise(input);

// Result shape (from schema): { default_level?: "public" | "internal" | null; accessible_repositories?: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number;...
```

### `github.dependabot.updateRepositoryAccessForEnterprise`

- **HTTP**: `PATCH /enterprises/{enterprise}/dependabot/repository-access`
- **What it does**: Updates Dependabot's repository access list for an enterprise
- **OpenAPI operationId**: `dependabot/update-repository-access-for-enterprise`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ repository_ids_to_add?: (number)[]; repository_ids_to_remove?: (number)[]; enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`

```ts
import github from "@utdk/github";

type DependabotUpdateRepositoryAccessForEnterpriseInput = Parameters<typeof github.dependabot.updateRepositoryAccessForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotUpdateRepositoryAccessForEnterpriseOutput = Awaited<ReturnType<typeof github.dependabot.updateRepositoryAccessForEnterprise>>;

const input: DependabotUpdateRepositoryAccessForEnterpriseInput = {} as { repository_ids_to_add?: (number)[]; repository_ids_to_remove?: (number)[]; enterprise: string };
const result: DependabotUpdateRepositoryAccessForEnterpriseOutput = await github.dependabot.updateRepositoryAccessForEnterprise(input);

// Result shape (from schema): unknown
```

### `github.dependabot.setRepositoryAccessDefaultLevelForEnterprise`

- **HTTP**: `PUT /enterprises/{enterprise}/dependabot/repository-access/default-level`
- **What it does**: Set the default repository access level for Dependabot in an enterprise
- **OpenAPI operationId**: `dependabot/set-repository-access-default-level-for-enterprise`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ default_level: "public" | "internal"; enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`

```ts
import github from "@utdk/github";

type DependabotSetRepositoryAccessDefaultLevelForEnterpriseInput = Parameters<typeof github.dependabot.setRepositoryAccessDefaultLevelForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotSetRepositoryAccessDefaultLevelForEnterpriseOutput = Awaited<ReturnType<typeof github.dependabot.setRepositoryAccessDefaultLevelForEnterprise>>;

const input: DependabotSetRepositoryAccessDefaultLevelForEnterpriseInput = {} as { default_level: "public" | "internal"; enterprise: string };
const result: DependabotSetRepositoryAccessDefaultLevelForEnterpriseOutput = await github.dependabot.setRepositoryAccessDefaultLevelForEnterprise(input);

// Result shape (from schema): unknown
```

### `github.dependabot.listAlertsForOrg`

- **HTTP**: `GET /orgs/{org}/dependabot/alerts`
- **What it does**: List Dependabot alerts for an organization
- **OpenAPI operationId**: `dependabot/list-alerts-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `400`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; classification?: string; state?: string; severity?: string; ecosystem?: string; package?: string; epss_percentage?: string; artifact_registry_url?: string; artifact_registry?: string; has?: string | ("patch" | "deployment")[]; assignee?: string; runtime_risk?: string; scope?: "development" | "runtime"; sort?: "created" | "updated" | "epss_percentage"; direction?: "asc" | "desc"; before?: string; after?: string; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ number: number; state: "auto_dismissed" | "dismissed" | "fixed" | "open"; dependency: { package?: { ecosystem: string; name: string }; manifest_path?: string; scope?: "development" | "runtime" | null; relationship?: ...`
- OpenAPI response codes: `200`, `304`, `400`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type DependabotListAlertsForOrgInput = Parameters<typeof github.dependabot.listAlertsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotListAlertsForOrgOutput = Awaited<ReturnType<typeof github.dependabot.listAlertsForOrg>>;

const input: DependabotListAlertsForOrgInput = {} as { org: string; classification?: string; state?: string; severity?: string; ecosystem?: string; package?: string; epss_percentage?: string; artifact_registry_url?: string; artifact_registry?: string; has?: string | ("patch" | "deployment")[]; assignee?: string; runtime_risk?: string; scope?: "development" | "runtime"; sort?: "created" | "updated" | "epss_percentage"; direction?: "asc" | "desc"; before?: string; after?: string; per_page?: number };
const result: DependabotListAlertsForOrgOutput = await github.dependabot.listAlertsForOrg(input);

// Result shape (from schema): ({ number: number; state: "auto_dismissed" | "dismissed" | "fixed" | "open"; dependency: { package?: { ecosystem: string; name: string }; manifest_path?: string; scope?: "development" | "runtime" | null; relationship?: ...
```

### `github.dependabot.repositoryAccessForOrg`

- **HTTP**: `GET /orgs/{org}/dependabot/repository-access`
- **What it does**: Lists the repositories Dependabot can access in an organization
- **OpenAPI operationId**: `dependabot/repository-access-for-org`
- **Path params**: None
- **Query params**: `page`, `per_page`
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ default_level?: "public" | "internal" | null; accessible_repositories?: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number;...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type DependabotRepositoryAccessForOrgInput = Parameters<typeof github.dependabot.repositoryAccessForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotRepositoryAccessForOrgOutput = Awaited<ReturnType<typeof github.dependabot.repositoryAccessForOrg>>;

const input: DependabotRepositoryAccessForOrgInput = {} as { org: string; page?: number; per_page?: number };
const result: DependabotRepositoryAccessForOrgOutput = await github.dependabot.repositoryAccessForOrg(input);

// Result shape (from schema): { default_level?: "public" | "internal" | null; accessible_repositories?: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number;...
```

### `github.dependabot.updateRepositoryAccessForOrg`

- **HTTP**: `PATCH /orgs/{org}/dependabot/repository-access`
- **What it does**: Updates Dependabot's repository access list for an organization
- **OpenAPI operationId**: `dependabot/update-repository-access-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ repository_ids_to_add?: (number)[]; repository_ids_to_remove?: (number)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`

```ts
import github from "@utdk/github";

type DependabotUpdateRepositoryAccessForOrgInput = Parameters<typeof github.dependabot.updateRepositoryAccessForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotUpdateRepositoryAccessForOrgOutput = Awaited<ReturnType<typeof github.dependabot.updateRepositoryAccessForOrg>>;

const input: DependabotUpdateRepositoryAccessForOrgInput = {} as { repository_ids_to_add?: (number)[]; repository_ids_to_remove?: (number)[]; org: string };
const result: DependabotUpdateRepositoryAccessForOrgOutput = await github.dependabot.updateRepositoryAccessForOrg(input);

// Result shape (from schema): unknown
```

### `github.dependabot.setRepositoryAccessDefaultLevel`

- **HTTP**: `PUT /orgs/{org}/dependabot/repository-access/default-level`
- **What it does**: Set the default repository access level for Dependabot
- **OpenAPI operationId**: `dependabot/set-repository-access-default-level`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ default_level: "public" | "internal"; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`

```ts
import github from "@utdk/github";

type DependabotSetRepositoryAccessDefaultLevelInput = Parameters<typeof github.dependabot.setRepositoryAccessDefaultLevel> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotSetRepositoryAccessDefaultLevelOutput = Awaited<ReturnType<typeof github.dependabot.setRepositoryAccessDefaultLevel>>;

const input: DependabotSetRepositoryAccessDefaultLevelInput = {} as { default_level: "public" | "internal"; org: string };
const result: DependabotSetRepositoryAccessDefaultLevelOutput = await github.dependabot.setRepositoryAccessDefaultLevel(input);

// Result shape (from schema): unknown
```

### `github.dependabot.listOrgSecrets`

- **HTTP**: `GET /orgs/{org}/dependabot/secrets`
- **What it does**: List organization secrets
- **OpenAPI operationId**: `dependabot/list-org-secrets`
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

type DependabotListOrgSecretsInput = Parameters<typeof github.dependabot.listOrgSecrets> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotListOrgSecretsOutput = Awaited<ReturnType<typeof github.dependabot.listOrgSecrets>>;

const input: DependabotListOrgSecretsInput = {} as { org: string; per_page?: number; page?: number };
const result: DependabotListOrgSecretsOutput = await github.dependabot.listOrgSecrets(input);

// Result shape (from schema): { total_count: number; secrets: ({ name: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string })[] }
```

### `github.dependabot.deleteOrgSecret`

- **HTTP**: `DELETE /orgs/{org}/dependabot/secrets/{secret_name}`
- **What it does**: Delete an organization secret
- **OpenAPI operationId**: `dependabot/delete-org-secret`
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

type DependabotDeleteOrgSecretInput = Parameters<typeof github.dependabot.deleteOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotDeleteOrgSecretOutput = Awaited<ReturnType<typeof github.dependabot.deleteOrgSecret>>;

const input: DependabotDeleteOrgSecretInput = {} as { org: string; secret_name: string };
const result: DependabotDeleteOrgSecretOutput = await github.dependabot.deleteOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.dependabot.getOrgSecret`

- **HTTP**: `GET /orgs/{org}/dependabot/secrets/{secret_name}`
- **What it does**: Get an organization secret
- **OpenAPI operationId**: `dependabot/get-org-secret`
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

type DependabotGetOrgSecretInput = Parameters<typeof github.dependabot.getOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotGetOrgSecretOutput = Awaited<ReturnType<typeof github.dependabot.getOrgSecret>>;

const input: DependabotGetOrgSecretInput = {} as { org: string; secret_name: string };
const result: DependabotGetOrgSecretOutput = await github.dependabot.getOrgSecret(input);

// Result shape (from schema): { name: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string }
```

### `github.dependabot.createOrUpdateOrgSecret`

- **HTTP**: `PUT /orgs/{org}/dependabot/secrets/{secret_name}`
- **What it does**: Create or update an organization secret
- **OpenAPI operationId**: `dependabot/create-or-update-org-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ encrypted_value?: string; key_id?: string; visibility: "all" | "private" | "selected"; selected_repository_ids?: (number | string)[]; org: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`, `204`

```ts
import github from "@utdk/github";

type DependabotCreateOrUpdateOrgSecretInput = Parameters<typeof github.dependabot.createOrUpdateOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotCreateOrUpdateOrgSecretOutput = Awaited<ReturnType<typeof github.dependabot.createOrUpdateOrgSecret>>;

const input: DependabotCreateOrUpdateOrgSecretInput = {} as { encrypted_value?: string; key_id?: string; visibility: "all" | "private" | "selected"; selected_repository_ids?: (number | string)[]; org: string; secret_name: string };
const result: DependabotCreateOrUpdateOrgSecretOutput = await github.dependabot.createOrUpdateOrgSecret(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.dependabot.listSelectedReposForOrgSecret`

- **HTTP**: `GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories`
- **What it does**: List selected repositories for an organization secret
- **OpenAPI operationId**: `dependabot/list-selected-repos-for-org-secret`
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

type DependabotListSelectedReposForOrgSecretInput = Parameters<typeof github.dependabot.listSelectedReposForOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotListSelectedReposForOrgSecretOutput = Awaited<ReturnType<typeof github.dependabot.listSelectedReposForOrgSecret>>;

const input: DependabotListSelectedReposForOrgSecretInput = {} as { org: string; secret_name: string; page?: number; per_page?: number };
const result: DependabotListSelectedReposForOrgSecretOutput = await github.dependabot.listSelectedReposForOrgSecret(input);

// Result shape (from schema): { total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...
```

### `github.dependabot.setSelectedReposForOrgSecret`

- **HTTP**: `PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories`
- **What it does**: Set selected repositories for an organization secret
- **OpenAPI operationId**: `dependabot/set-selected-repos-for-org-secret`
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

type DependabotSetSelectedReposForOrgSecretInput = Parameters<typeof github.dependabot.setSelectedReposForOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotSetSelectedReposForOrgSecretOutput = Awaited<ReturnType<typeof github.dependabot.setSelectedReposForOrgSecret>>;

const input: DependabotSetSelectedReposForOrgSecretInput = {} as { selected_repository_ids: (number)[]; org: string; secret_name: string };
const result: DependabotSetSelectedReposForOrgSecretOutput = await github.dependabot.setSelectedReposForOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.dependabot.removeSelectedRepoFromOrgSecret`

- **HTTP**: `DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}`
- **What it does**: Remove selected repository from an organization secret
- **OpenAPI operationId**: `dependabot/remove-selected-repo-from-org-secret`
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

type DependabotRemoveSelectedRepoFromOrgSecretInput = Parameters<typeof github.dependabot.removeSelectedRepoFromOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotRemoveSelectedRepoFromOrgSecretOutput = Awaited<ReturnType<typeof github.dependabot.removeSelectedRepoFromOrgSecret>>;

const input: DependabotRemoveSelectedRepoFromOrgSecretInput = {} as { org: string; secret_name: string; repository_id: number };
const result: DependabotRemoveSelectedRepoFromOrgSecretOutput = await github.dependabot.removeSelectedRepoFromOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.dependabot.addSelectedRepoToOrgSecret`

- **HTTP**: `PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}`
- **What it does**: Add selected repository to an organization secret
- **OpenAPI operationId**: `dependabot/add-selected-repo-to-org-secret`
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

type DependabotAddSelectedRepoToOrgSecretInput = Parameters<typeof github.dependabot.addSelectedRepoToOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotAddSelectedRepoToOrgSecretOutput = Awaited<ReturnType<typeof github.dependabot.addSelectedRepoToOrgSecret>>;

const input: DependabotAddSelectedRepoToOrgSecretInput = {} as { org: string; secret_name: string; repository_id: number };
const result: DependabotAddSelectedRepoToOrgSecretOutput = await github.dependabot.addSelectedRepoToOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.dependabot.getOrgPublicKey`

- **HTTP**: `GET /orgs/{org}/dependabot/secrets/public-key`
- **What it does**: Get an organization public key
- **OpenAPI operationId**: `dependabot/get-org-public-key`
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

- Client return type: `{ key_id: string; key: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type DependabotGetOrgPublicKeyInput = Parameters<typeof github.dependabot.getOrgPublicKey> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotGetOrgPublicKeyOutput = Awaited<ReturnType<typeof github.dependabot.getOrgPublicKey>>;

const input: DependabotGetOrgPublicKeyInput = {} as { org: string };
const result: DependabotGetOrgPublicKeyOutput = await github.dependabot.getOrgPublicKey(input);

// Result shape (from schema): { key_id: string; key: string }
```

### `github.dependabot.listAlertsForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/dependabot/alerts`
- **What it does**: List Dependabot alerts for a repository
- **OpenAPI operationId**: `dependabot/list-alerts-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `400`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; classification?: string; state?: string; severity?: string; ecosystem?: string; package?: string; manifest?: string; epss_percentage?: string; has?: string | ("patch")[]; assignee?: string; scope?: "development" | "runtime"; sort?: "created" | "updated" | "epss_percentage"; direction?: "asc" | "desc"; before?: string; after?: string; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ number: number; state: "auto_dismissed" | "dismissed" | "fixed" | "open"; dependency: { package?: { ecosystem: string; name: string }; manifest_path?: string; scope?: "development" | "runtime" | null; relationship?: ...`
- OpenAPI response codes: `200`, `304`, `400`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type DependabotListAlertsForRepoInput = Parameters<typeof github.dependabot.listAlertsForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotListAlertsForRepoOutput = Awaited<ReturnType<typeof github.dependabot.listAlertsForRepo>>;

const input: DependabotListAlertsForRepoInput = {} as { owner: string; repo: string; classification?: string; state?: string; severity?: string; ecosystem?: string; package?: string; manifest?: string; epss_percentage?: string; has?: string | ("patch")[]; assignee?: string; scope?: "development" | "runtime"; sort?: "created" | "updated" | "epss_percentage"; direction?: "asc" | "desc"; before?: string; after?: string; per_page?: number };
const result: DependabotListAlertsForRepoOutput = await github.dependabot.listAlertsForRepo(input);

// Result shape (from schema): ({ number: number; state: "auto_dismissed" | "dismissed" | "fixed" | "open"; dependency: { package?: { ecosystem: string; name: string }; manifest_path?: string; scope?: "development" | "runtime" | null; relationship?: ...
```

### `github.dependabot.getAlert`

- **HTTP**: `GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`
- **What it does**: Get a Dependabot alert
- **OpenAPI operationId**: `dependabot/get-alert`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; alert_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ number: number; state: "auto_dismissed" | "dismissed" | "fixed" | "open"; dependency: { package?: { ecosystem: string; name: string }; manifest_path?: string; scope?: "development" | "runtime" | null; relationship?: "...`
- OpenAPI response codes: `200`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type DependabotGetAlertInput = Parameters<typeof github.dependabot.getAlert> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotGetAlertOutput = Awaited<ReturnType<typeof github.dependabot.getAlert>>;

const input: DependabotGetAlertInput = {} as { owner: string; repo: string; alert_number: number };
const result: DependabotGetAlertOutput = await github.dependabot.getAlert(input);

// Result shape (from schema): { number: number; state: "auto_dismissed" | "dismissed" | "fixed" | "open"; dependency: { package?: { ecosystem: string; name: string }; manifest_path?: string; scope?: "development" | "runtime" | null; relationship?: "...
```

### `github.dependabot.updateAlert`

- **HTTP**: `PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`
- **What it does**: Update a Dependabot alert
- **OpenAPI operationId**: `dependabot/update-alert`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: unknown | unknown; owner: string; repo: string; alert_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ number: number; state: "auto_dismissed" | "dismissed" | "fixed" | "open"; dependency: { package?: { ecosystem: string; name: string }; manifest_path?: string; scope?: "development" | "runtime" | null; relationship?: "...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type DependabotUpdateAlertInput = Parameters<typeof github.dependabot.updateAlert> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotUpdateAlertOutput = Awaited<ReturnType<typeof github.dependabot.updateAlert>>;

const input: DependabotUpdateAlertInput = {} as { body: unknown | unknown; owner: string; repo: string; alert_number: number };
const result: DependabotUpdateAlertOutput = await github.dependabot.updateAlert(input);

// Result shape (from schema): { number: number; state: "auto_dismissed" | "dismissed" | "fixed" | "open"; dependency: { package?: { ecosystem: string; name: string }; manifest_path?: string; scope?: "development" | "runtime" | null; relationship?: "...
```

### `github.dependabot.listRepoSecrets`

- **HTTP**: `GET /repos/{owner}/{repo}/dependabot/secrets`
- **What it does**: List repository secrets
- **OpenAPI operationId**: `dependabot/list-repo-secrets`
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

type DependabotListRepoSecretsInput = Parameters<typeof github.dependabot.listRepoSecrets> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotListRepoSecretsOutput = Awaited<ReturnType<typeof github.dependabot.listRepoSecrets>>;

const input: DependabotListRepoSecretsInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: DependabotListRepoSecretsOutput = await github.dependabot.listRepoSecrets(input);

// Result shape (from schema): { total_count: number; secrets: ({ name: string; created_at: string; updated_at: string })[] }
```

### `github.dependabot.deleteRepoSecret`

- **HTTP**: `DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`
- **What it does**: Delete a repository secret
- **OpenAPI operationId**: `dependabot/delete-repo-secret`
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

type DependabotDeleteRepoSecretInput = Parameters<typeof github.dependabot.deleteRepoSecret> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotDeleteRepoSecretOutput = Awaited<ReturnType<typeof github.dependabot.deleteRepoSecret>>;

const input: DependabotDeleteRepoSecretInput = {} as { owner: string; repo: string; secret_name: string };
const result: DependabotDeleteRepoSecretOutput = await github.dependabot.deleteRepoSecret(input);

// Result shape (from schema): unknown
```

### `github.dependabot.getRepoSecret`

- **HTTP**: `GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`
- **What it does**: Get a repository secret
- **OpenAPI operationId**: `dependabot/get-repo-secret`
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

type DependabotGetRepoSecretInput = Parameters<typeof github.dependabot.getRepoSecret> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotGetRepoSecretOutput = Awaited<ReturnType<typeof github.dependabot.getRepoSecret>>;

const input: DependabotGetRepoSecretInput = {} as { owner: string; repo: string; secret_name: string };
const result: DependabotGetRepoSecretOutput = await github.dependabot.getRepoSecret(input);

// Result shape (from schema): { name: string; created_at: string; updated_at: string }
```

### `github.dependabot.createOrUpdateRepoSecret`

- **HTTP**: `PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`
- **What it does**: Create or update a repository secret
- **OpenAPI operationId**: `dependabot/create-or-update-repo-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ encrypted_value?: string; key_id?: string; owner: string; repo: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`, `204`

```ts
import github from "@utdk/github";

type DependabotCreateOrUpdateRepoSecretInput = Parameters<typeof github.dependabot.createOrUpdateRepoSecret> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotCreateOrUpdateRepoSecretOutput = Awaited<ReturnType<typeof github.dependabot.createOrUpdateRepoSecret>>;

const input: DependabotCreateOrUpdateRepoSecretInput = {} as { encrypted_value?: string; key_id?: string; owner: string; repo: string; secret_name: string };
const result: DependabotCreateOrUpdateRepoSecretOutput = await github.dependabot.createOrUpdateRepoSecret(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.dependabot.getRepoPublicKey`

- **HTTP**: `GET /repos/{owner}/{repo}/dependabot/secrets/public-key`
- **What it does**: Get a repository public key
- **OpenAPI operationId**: `dependabot/get-repo-public-key`
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

- Client return type: `{ key_id: string; key: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type DependabotGetRepoPublicKeyInput = Parameters<typeof github.dependabot.getRepoPublicKey> extends [infer T, ...unknown[]] ? T : undefined;
type DependabotGetRepoPublicKeyOutput = Awaited<ReturnType<typeof github.dependabot.getRepoPublicKey>>;

const input: DependabotGetRepoPublicKeyInput = {} as { owner: string; repo: string };
const result: DependabotGetRepoPublicKeyOutput = await github.dependabot.getRepoPublicKey(input);

// Result shape (from schema): { key_id: string; key: string }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
