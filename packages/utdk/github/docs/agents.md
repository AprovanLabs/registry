# Agents

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.agents.listOrgSecrets`

- **HTTP**: `GET /orgs/{org}/agents/secrets`
- **What it does**: List organization secrets
- **OpenAPI operationId**: `agents/list-org-secrets`
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

type AgentsListOrgSecretsInput = Parameters<typeof github.agents.listOrgSecrets> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsListOrgSecretsOutput = Awaited<ReturnType<typeof github.agents.listOrgSecrets>>;

const input: AgentsListOrgSecretsInput = {} as { org: string; per_page?: number; page?: number };
const result: AgentsListOrgSecretsOutput = await github.agents.listOrgSecrets(input);

// Result shape (from schema): { total_count: number; secrets: ({ name: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string })[] }
```

### `github.agents.deleteOrgSecret`

- **HTTP**: `DELETE /orgs/{org}/agents/secrets/{secret_name}`
- **What it does**: Delete an organization secret
- **OpenAPI operationId**: `agents/delete-org-secret`
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

type AgentsDeleteOrgSecretInput = Parameters<typeof github.agents.deleteOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsDeleteOrgSecretOutput = Awaited<ReturnType<typeof github.agents.deleteOrgSecret>>;

const input: AgentsDeleteOrgSecretInput = {} as { org: string; secret_name: string };
const result: AgentsDeleteOrgSecretOutput = await github.agents.deleteOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.agents.getOrgSecret`

- **HTTP**: `GET /orgs/{org}/agents/secrets/{secret_name}`
- **What it does**: Get an organization secret
- **OpenAPI operationId**: `agents/get-org-secret`
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

type AgentsGetOrgSecretInput = Parameters<typeof github.agents.getOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsGetOrgSecretOutput = Awaited<ReturnType<typeof github.agents.getOrgSecret>>;

const input: AgentsGetOrgSecretInput = {} as { org: string; secret_name: string };
const result: AgentsGetOrgSecretOutput = await github.agents.getOrgSecret(input);

// Result shape (from schema): { name: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string }
```

### `github.agents.createOrUpdateOrgSecret`

- **HTTP**: `PUT /orgs/{org}/agents/secrets/{secret_name}`
- **What it does**: Create or update an organization secret
- **OpenAPI operationId**: `agents/create-or-update-org-secret`
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

type AgentsCreateOrUpdateOrgSecretInput = Parameters<typeof github.agents.createOrUpdateOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsCreateOrUpdateOrgSecretOutput = Awaited<ReturnType<typeof github.agents.createOrUpdateOrgSecret>>;

const input: AgentsCreateOrUpdateOrgSecretInput = {} as { encrypted_value: string; key_id: string; visibility: "all" | "private" | "selected"; selected_repository_ids?: (number)[]; org: string; secret_name: string };
const result: AgentsCreateOrUpdateOrgSecretOutput = await github.agents.createOrUpdateOrgSecret(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.agents.listSelectedReposForOrgSecret`

- **HTTP**: `GET /orgs/{org}/agents/secrets/{secret_name}/repositories`
- **What it does**: List selected repositories for an organization secret
- **OpenAPI operationId**: `agents/list-selected-repos-for-org-secret`
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

type AgentsListSelectedReposForOrgSecretInput = Parameters<typeof github.agents.listSelectedReposForOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsListSelectedReposForOrgSecretOutput = Awaited<ReturnType<typeof github.agents.listSelectedReposForOrgSecret>>;

const input: AgentsListSelectedReposForOrgSecretInput = {} as { org: string; secret_name: string; page?: number; per_page?: number };
const result: AgentsListSelectedReposForOrgSecretOutput = await github.agents.listSelectedReposForOrgSecret(input);

// Result shape (from schema): { total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...
```

### `github.agents.setSelectedReposForOrgSecret`

- **HTTP**: `PUT /orgs/{org}/agents/secrets/{secret_name}/repositories`
- **What it does**: Set selected repositories for an organization secret
- **OpenAPI operationId**: `agents/set-selected-repos-for-org-secret`
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

type AgentsSetSelectedReposForOrgSecretInput = Parameters<typeof github.agents.setSelectedReposForOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsSetSelectedReposForOrgSecretOutput = Awaited<ReturnType<typeof github.agents.setSelectedReposForOrgSecret>>;

const input: AgentsSetSelectedReposForOrgSecretInput = {} as { selected_repository_ids: (number)[]; org: string; secret_name: string };
const result: AgentsSetSelectedReposForOrgSecretOutput = await github.agents.setSelectedReposForOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.agents.removeSelectedRepoFromOrgSecret`

- **HTTP**: `DELETE /orgs/{org}/agents/secrets/{secret_name}/repositories/{repository_id}`
- **What it does**: Remove selected repository from an organization secret
- **OpenAPI operationId**: `agents/remove-selected-repo-from-org-secret`
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

type AgentsRemoveSelectedRepoFromOrgSecretInput = Parameters<typeof github.agents.removeSelectedRepoFromOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsRemoveSelectedRepoFromOrgSecretOutput = Awaited<ReturnType<typeof github.agents.removeSelectedRepoFromOrgSecret>>;

const input: AgentsRemoveSelectedRepoFromOrgSecretInput = {} as { org: string; secret_name: string; repository_id: number };
const result: AgentsRemoveSelectedRepoFromOrgSecretOutput = await github.agents.removeSelectedRepoFromOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.agents.addSelectedRepoToOrgSecret`

- **HTTP**: `PUT /orgs/{org}/agents/secrets/{secret_name}/repositories/{repository_id}`
- **What it does**: Add selected repository to an organization secret
- **OpenAPI operationId**: `agents/add-selected-repo-to-org-secret`
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

type AgentsAddSelectedRepoToOrgSecretInput = Parameters<typeof github.agents.addSelectedRepoToOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsAddSelectedRepoToOrgSecretOutput = Awaited<ReturnType<typeof github.agents.addSelectedRepoToOrgSecret>>;

const input: AgentsAddSelectedRepoToOrgSecretInput = {} as { org: string; secret_name: string; repository_id: number };
const result: AgentsAddSelectedRepoToOrgSecretOutput = await github.agents.addSelectedRepoToOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.agents.getOrgPublicKey`

- **HTTP**: `GET /orgs/{org}/agents/secrets/public-key`
- **What it does**: Get an organization public key
- **OpenAPI operationId**: `agents/get-org-public-key`
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

type AgentsGetOrgPublicKeyInput = Parameters<typeof github.agents.getOrgPublicKey> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsGetOrgPublicKeyOutput = Awaited<ReturnType<typeof github.agents.getOrgPublicKey>>;

const input: AgentsGetOrgPublicKeyInput = {} as { org: string };
const result: AgentsGetOrgPublicKeyOutput = await github.agents.getOrgPublicKey(input);

// Result shape (from schema): { key_id: string; key: string; id?: number; url?: string; title?: string; created_at?: string }
```

### `github.agents.listOrgVariables`

- **HTTP**: `GET /orgs/{org}/agents/variables`
- **What it does**: List organization variables
- **OpenAPI operationId**: `agents/list-org-variables`
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

type AgentsListOrgVariablesInput = Parameters<typeof github.agents.listOrgVariables> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsListOrgVariablesOutput = Awaited<ReturnType<typeof github.agents.listOrgVariables>>;

const input: AgentsListOrgVariablesInput = {} as { org: string; per_page?: number; page?: number };
const result: AgentsListOrgVariablesOutput = await github.agents.listOrgVariables(input);

// Result shape (from schema): { total_count: number; variables: ({ name: string; value: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string })[] }
```

### `github.agents.createOrgVariable`

- **HTTP**: `POST /orgs/{org}/agents/variables`
- **What it does**: Create an organization variable
- **OpenAPI operationId**: `agents/create-org-variable`
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

type AgentsCreateOrgVariableInput = Parameters<typeof github.agents.createOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsCreateOrgVariableOutput = Awaited<ReturnType<typeof github.agents.createOrgVariable>>;

const input: AgentsCreateOrgVariableInput = {} as { name: string; value: string; visibility: "all" | "private" | "selected"; selected_repository_ids?: (number)[]; org: string };
const result: AgentsCreateOrgVariableOutput = await github.agents.createOrgVariable(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.agents.deleteOrgVariable`

- **HTTP**: `DELETE /orgs/{org}/agents/variables/{name}`
- **What it does**: Delete an organization variable
- **OpenAPI operationId**: `agents/delete-org-variable`
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

type AgentsDeleteOrgVariableInput = Parameters<typeof github.agents.deleteOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsDeleteOrgVariableOutput = Awaited<ReturnType<typeof github.agents.deleteOrgVariable>>;

const input: AgentsDeleteOrgVariableInput = {} as { org: string; name: string };
const result: AgentsDeleteOrgVariableOutput = await github.agents.deleteOrgVariable(input);

// Result shape (from schema): unknown
```

### `github.agents.getOrgVariable`

- **HTTP**: `GET /orgs/{org}/agents/variables/{name}`
- **What it does**: Get an organization variable
- **OpenAPI operationId**: `agents/get-org-variable`
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

type AgentsGetOrgVariableInput = Parameters<typeof github.agents.getOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsGetOrgVariableOutput = Awaited<ReturnType<typeof github.agents.getOrgVariable>>;

const input: AgentsGetOrgVariableInput = {} as { org: string; name: string };
const result: AgentsGetOrgVariableOutput = await github.agents.getOrgVariable(input);

// Result shape (from schema): { name: string; value: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string }
```

### `github.agents.updateOrgVariable`

- **HTTP**: `PATCH /orgs/{org}/agents/variables/{name}`
- **What it does**: Update an organization variable
- **OpenAPI operationId**: `agents/update-org-variable`
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

type AgentsUpdateOrgVariableInput = Parameters<typeof github.agents.updateOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsUpdateOrgVariableOutput = Awaited<ReturnType<typeof github.agents.updateOrgVariable>>;
type AgentsUpdateOrgVariableOptions = Parameters<typeof github.agents.updateOrgVariable> extends [unknown, infer T, ...unknown[]] ? T : undefined;

const input: AgentsUpdateOrgVariableInput = {} as { name?: string; value?: string; visibility?: "all" | "private" | "selected"; selected_repository_ids?: (number)[]; org: string };
const options: AgentsUpdateOrgVariableOptions = {} as { params: { name: string } };
const result: AgentsUpdateOrgVariableOutput = await github.agents.updateOrgVariable(input, options);

// Result shape (from schema): unknown
```

### `github.agents.listSelectedReposForOrgVariable`

- **HTTP**: `GET /orgs/{org}/agents/variables/{name}/repositories`
- **What it does**: List selected repositories for an organization variable
- **OpenAPI operationId**: `agents/list-selected-repos-for-org-variable`
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

type AgentsListSelectedReposForOrgVariableInput = Parameters<typeof github.agents.listSelectedReposForOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsListSelectedReposForOrgVariableOutput = Awaited<ReturnType<typeof github.agents.listSelectedReposForOrgVariable>>;

const input: AgentsListSelectedReposForOrgVariableInput = {} as { org: string; name: string; page?: number; per_page?: number };
const result: AgentsListSelectedReposForOrgVariableOutput = await github.agents.listSelectedReposForOrgVariable(input);

// Result shape (from schema): { total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...
```

### `github.agents.setSelectedReposForOrgVariable`

- **HTTP**: `PUT /orgs/{org}/agents/variables/{name}/repositories`
- **What it does**: Set selected repositories for an organization variable
- **OpenAPI operationId**: `agents/set-selected-repos-for-org-variable`
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

type AgentsSetSelectedReposForOrgVariableInput = Parameters<typeof github.agents.setSelectedReposForOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsSetSelectedReposForOrgVariableOutput = Awaited<ReturnType<typeof github.agents.setSelectedReposForOrgVariable>>;

const input: AgentsSetSelectedReposForOrgVariableInput = {} as { selected_repository_ids: (number)[]; org: string; name: string };
const result: AgentsSetSelectedReposForOrgVariableOutput = await github.agents.setSelectedReposForOrgVariable(input);

// Result shape (from schema): unknown
```

### `github.agents.removeSelectedRepoFromOrgVariable`

- **HTTP**: `DELETE /orgs/{org}/agents/variables/{name}/repositories/{repository_id}`
- **What it does**: Remove selected repository from an organization variable
- **OpenAPI operationId**: `agents/remove-selected-repo-from-org-variable`
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

type AgentsRemoveSelectedRepoFromOrgVariableInput = Parameters<typeof github.agents.removeSelectedRepoFromOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsRemoveSelectedRepoFromOrgVariableOutput = Awaited<ReturnType<typeof github.agents.removeSelectedRepoFromOrgVariable>>;

const input: AgentsRemoveSelectedRepoFromOrgVariableInput = {} as { org: string; name: string; repository_id: number };
const result: AgentsRemoveSelectedRepoFromOrgVariableOutput = await github.agents.removeSelectedRepoFromOrgVariable(input);

// Result shape (from schema): unknown
```

### `github.agents.addSelectedRepoToOrgVariable`

- **HTTP**: `PUT /orgs/{org}/agents/variables/{name}/repositories/{repository_id}`
- **What it does**: Add selected repository to an organization variable
- **OpenAPI operationId**: `agents/add-selected-repo-to-org-variable`
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

type AgentsAddSelectedRepoToOrgVariableInput = Parameters<typeof github.agents.addSelectedRepoToOrgVariable> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsAddSelectedRepoToOrgVariableOutput = Awaited<ReturnType<typeof github.agents.addSelectedRepoToOrgVariable>>;

const input: AgentsAddSelectedRepoToOrgVariableInput = {} as { org: string; name: string; repository_id: number };
const result: AgentsAddSelectedRepoToOrgVariableOutput = await github.agents.addSelectedRepoToOrgVariable(input);

// Result shape (from schema): unknown
```

### `github.agents.listRepoOrganizationSecrets`

- **HTTP**: `GET /repos/{owner}/{repo}/agents/organization-secrets`
- **What it does**: List repository organization secrets
- **OpenAPI operationId**: `agents/list-repo-organization-secrets`
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

type AgentsListRepoOrganizationSecretsInput = Parameters<typeof github.agents.listRepoOrganizationSecrets> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsListRepoOrganizationSecretsOutput = Awaited<ReturnType<typeof github.agents.listRepoOrganizationSecrets>>;

const input: AgentsListRepoOrganizationSecretsInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: AgentsListRepoOrganizationSecretsOutput = await github.agents.listRepoOrganizationSecrets(input);

// Result shape (from schema): { total_count: number; secrets: ({ name: string; created_at: string; updated_at: string })[] }
```

### `github.agents.listRepoOrganizationVariables`

- **HTTP**: `GET /repos/{owner}/{repo}/agents/organization-variables`
- **What it does**: List repository organization variables
- **OpenAPI operationId**: `agents/list-repo-organization-variables`
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

type AgentsListRepoOrganizationVariablesInput = Parameters<typeof github.agents.listRepoOrganizationVariables> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsListRepoOrganizationVariablesOutput = Awaited<ReturnType<typeof github.agents.listRepoOrganizationVariables>>;

const input: AgentsListRepoOrganizationVariablesInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: AgentsListRepoOrganizationVariablesOutput = await github.agents.listRepoOrganizationVariables(input);

// Result shape (from schema): { total_count: number; variables: ({ name: string; value: string; created_at: string; updated_at: string })[] }
```

### `github.agents.listRepoSecrets`

- **HTTP**: `GET /repos/{owner}/{repo}/agents/secrets`
- **What it does**: List repository secrets
- **OpenAPI operationId**: `agents/list-repo-secrets`
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

type AgentsListRepoSecretsInput = Parameters<typeof github.agents.listRepoSecrets> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsListRepoSecretsOutput = Awaited<ReturnType<typeof github.agents.listRepoSecrets>>;

const input: AgentsListRepoSecretsInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: AgentsListRepoSecretsOutput = await github.agents.listRepoSecrets(input);

// Result shape (from schema): { total_count: number; secrets: ({ name: string; created_at: string; updated_at: string })[] }
```

### `github.agents.deleteRepoSecret`

- **HTTP**: `DELETE /repos/{owner}/{repo}/agents/secrets/{secret_name}`
- **What it does**: Delete a repository secret
- **OpenAPI operationId**: `agents/delete-repo-secret`
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

type AgentsDeleteRepoSecretInput = Parameters<typeof github.agents.deleteRepoSecret> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsDeleteRepoSecretOutput = Awaited<ReturnType<typeof github.agents.deleteRepoSecret>>;

const input: AgentsDeleteRepoSecretInput = {} as { owner: string; repo: string; secret_name: string };
const result: AgentsDeleteRepoSecretOutput = await github.agents.deleteRepoSecret(input);

// Result shape (from schema): unknown
```

### `github.agents.getRepoSecret`

- **HTTP**: `GET /repos/{owner}/{repo}/agents/secrets/{secret_name}`
- **What it does**: Get a repository secret
- **OpenAPI operationId**: `agents/get-repo-secret`
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

type AgentsGetRepoSecretInput = Parameters<typeof github.agents.getRepoSecret> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsGetRepoSecretOutput = Awaited<ReturnType<typeof github.agents.getRepoSecret>>;

const input: AgentsGetRepoSecretInput = {} as { owner: string; repo: string; secret_name: string };
const result: AgentsGetRepoSecretOutput = await github.agents.getRepoSecret(input);

// Result shape (from schema): { name: string; created_at: string; updated_at: string }
```

### `github.agents.createOrUpdateRepoSecret`

- **HTTP**: `PUT /repos/{owner}/{repo}/agents/secrets/{secret_name}`
- **What it does**: Create or update a repository secret
- **OpenAPI operationId**: `agents/create-or-update-repo-secret`
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

type AgentsCreateOrUpdateRepoSecretInput = Parameters<typeof github.agents.createOrUpdateRepoSecret> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsCreateOrUpdateRepoSecretOutput = Awaited<ReturnType<typeof github.agents.createOrUpdateRepoSecret>>;

const input: AgentsCreateOrUpdateRepoSecretInput = {} as { encrypted_value: string; key_id: string; owner: string; repo: string; secret_name: string };
const result: AgentsCreateOrUpdateRepoSecretOutput = await github.agents.createOrUpdateRepoSecret(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.agents.getRepoPublicKey`

- **HTTP**: `GET /repos/{owner}/{repo}/agents/secrets/public-key`
- **What it does**: Get a repository public key
- **OpenAPI operationId**: `agents/get-repo-public-key`
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

type AgentsGetRepoPublicKeyInput = Parameters<typeof github.agents.getRepoPublicKey> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsGetRepoPublicKeyOutput = Awaited<ReturnType<typeof github.agents.getRepoPublicKey>>;

const input: AgentsGetRepoPublicKeyInput = {} as { owner: string; repo: string };
const result: AgentsGetRepoPublicKeyOutput = await github.agents.getRepoPublicKey(input);

// Result shape (from schema): { key_id: string; key: string; id?: number; url?: string; title?: string; created_at?: string }
```

### `github.agents.listRepoVariables`

- **HTTP**: `GET /repos/{owner}/{repo}/agents/variables`
- **What it does**: List repository variables
- **OpenAPI operationId**: `agents/list-repo-variables`
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

type AgentsListRepoVariablesInput = Parameters<typeof github.agents.listRepoVariables> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsListRepoVariablesOutput = Awaited<ReturnType<typeof github.agents.listRepoVariables>>;

const input: AgentsListRepoVariablesInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: AgentsListRepoVariablesOutput = await github.agents.listRepoVariables(input);

// Result shape (from schema): { total_count: number; variables: ({ name: string; value: string; created_at: string; updated_at: string })[] }
```

### `github.agents.createRepoVariable`

- **HTTP**: `POST /repos/{owner}/{repo}/agents/variables`
- **What it does**: Create a repository variable
- **OpenAPI operationId**: `agents/create-repo-variable`
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

type AgentsCreateRepoVariableInput = Parameters<typeof github.agents.createRepoVariable> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsCreateRepoVariableOutput = Awaited<ReturnType<typeof github.agents.createRepoVariable>>;

const input: AgentsCreateRepoVariableInput = {} as { name: string; value: string; owner: string; repo: string };
const result: AgentsCreateRepoVariableOutput = await github.agents.createRepoVariable(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.agents.deleteRepoVariable`

- **HTTP**: `DELETE /repos/{owner}/{repo}/agents/variables/{name}`
- **What it does**: Delete a repository variable
- **OpenAPI operationId**: `agents/delete-repo-variable`
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

type AgentsDeleteRepoVariableInput = Parameters<typeof github.agents.deleteRepoVariable> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsDeleteRepoVariableOutput = Awaited<ReturnType<typeof github.agents.deleteRepoVariable>>;

const input: AgentsDeleteRepoVariableInput = {} as { owner: string; repo: string; name: string };
const result: AgentsDeleteRepoVariableOutput = await github.agents.deleteRepoVariable(input);

// Result shape (from schema): unknown
```

### `github.agents.getRepoVariable`

- **HTTP**: `GET /repos/{owner}/{repo}/agents/variables/{name}`
- **What it does**: Get a repository variable
- **OpenAPI operationId**: `agents/get-repo-variable`
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

type AgentsGetRepoVariableInput = Parameters<typeof github.agents.getRepoVariable> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsGetRepoVariableOutput = Awaited<ReturnType<typeof github.agents.getRepoVariable>>;

const input: AgentsGetRepoVariableInput = {} as { owner: string; repo: string; name: string };
const result: AgentsGetRepoVariableOutput = await github.agents.getRepoVariable(input);

// Result shape (from schema): { name: string; value: string; created_at: string; updated_at: string }
```

### `github.agents.updateRepoVariable`

- **HTTP**: `PATCH /repos/{owner}/{repo}/agents/variables/{name}`
- **What it does**: Update a repository variable
- **OpenAPI operationId**: `agents/update-repo-variable`
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

type AgentsUpdateRepoVariableInput = Parameters<typeof github.agents.updateRepoVariable> extends [infer T, ...unknown[]] ? T : undefined;
type AgentsUpdateRepoVariableOutput = Awaited<ReturnType<typeof github.agents.updateRepoVariable>>;
type AgentsUpdateRepoVariableOptions = Parameters<typeof github.agents.updateRepoVariable> extends [unknown, infer T, ...unknown[]] ? T : undefined;

const input: AgentsUpdateRepoVariableInput = {} as { name?: string; value?: string; owner: string; repo: string };
const options: AgentsUpdateRepoVariableOptions = {} as { params: { name: string } };
const result: AgentsUpdateRepoVariableOutput = await github.agents.updateRepoVariable(input, options);

// Result shape (from schema): unknown
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
