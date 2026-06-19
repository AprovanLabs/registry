# Codespaces

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.codespaces.listInOrganization`

- **HTTP**: `GET /orgs/{org}/codespaces`
- **What it does**: List codespaces for the organization
- **OpenAPI operationId**: `codespaces/list-in-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; codespaces: ({ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: stri...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesListInOrganizationInput = Parameters<typeof github.codespaces.listInOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesListInOrganizationOutput = Awaited<ReturnType<typeof github.codespaces.listInOrganization>>;

const input: CodespacesListInOrganizationInput = {} as { org: string; per_page?: number; page?: number };
const result: CodespacesListInOrganizationOutput = await github.codespaces.listInOrganization(input);

// Result shape (from schema): { total_count: number; codespaces: ({ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: stri...
```

### `github.codespaces.setCodespacesAccess`

- **HTTP**: `PUT /orgs/{org}/codespaces/access`
- **What it does**: Manage access control for organization codespaces
- **OpenAPI operationId**: `codespaces/set-codespaces-access`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `400`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ visibility: "disabled" | "selected_members" | "all_members" | "all_members_and_outside_collaborators"; selected_usernames?: (string)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `400`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type CodespacesSetCodespacesAccessInput = Parameters<typeof github.codespaces.setCodespacesAccess> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesSetCodespacesAccessOutput = Awaited<ReturnType<typeof github.codespaces.setCodespacesAccess>>;

const input: CodespacesSetCodespacesAccessInput = {} as { visibility: "disabled" | "selected_members" | "all_members" | "all_members_and_outside_collaborators"; selected_usernames?: (string)[]; org: string };
const result: CodespacesSetCodespacesAccessOutput = await github.codespaces.setCodespacesAccess(input);

// Result shape (from schema): unknown
```

### `github.codespaces.deleteCodespacesAccessUsers`

- **HTTP**: `DELETE /orgs/{org}/codespaces/access/selected_users`
- **What it does**: Remove users from Codespaces access for an organization
- **OpenAPI operationId**: `codespaces/delete-codespaces-access-users`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `400`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_usernames: (string)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `400`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type CodespacesDeleteCodespacesAccessUsersInput = Parameters<typeof github.codespaces.deleteCodespacesAccessUsers> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesDeleteCodespacesAccessUsersOutput = Awaited<ReturnType<typeof github.codespaces.deleteCodespacesAccessUsers>>;

const input: CodespacesDeleteCodespacesAccessUsersInput = {} as { selected_usernames: (string)[]; org: string };
const result: CodespacesDeleteCodespacesAccessUsersOutput = await github.codespaces.deleteCodespacesAccessUsers(input);

// Result shape (from schema): unknown
```

### `github.codespaces.setCodespacesAccessUsers`

- **HTTP**: `POST /orgs/{org}/codespaces/access/selected_users`
- **What it does**: Add users to Codespaces access for an organization
- **OpenAPI operationId**: `codespaces/set-codespaces-access-users`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `400`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_usernames: (string)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `400`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type CodespacesSetCodespacesAccessUsersInput = Parameters<typeof github.codespaces.setCodespacesAccessUsers> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesSetCodespacesAccessUsersOutput = Awaited<ReturnType<typeof github.codespaces.setCodespacesAccessUsers>>;

const input: CodespacesSetCodespacesAccessUsersInput = {} as { selected_usernames: (string)[]; org: string };
const result: CodespacesSetCodespacesAccessUsersOutput = await github.codespaces.setCodespacesAccessUsers(input);

// Result shape (from schema): unknown
```

### `github.codespaces.listOrgSecrets`

- **HTTP**: `GET /orgs/{org}/codespaces/secrets`
- **What it does**: List organization secrets
- **OpenAPI operationId**: `codespaces/list-org-secrets`
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

type CodespacesListOrgSecretsInput = Parameters<typeof github.codespaces.listOrgSecrets> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesListOrgSecretsOutput = Awaited<ReturnType<typeof github.codespaces.listOrgSecrets>>;

const input: CodespacesListOrgSecretsInput = {} as { org: string; per_page?: number; page?: number };
const result: CodespacesListOrgSecretsOutput = await github.codespaces.listOrgSecrets(input);

// Result shape (from schema): { total_count: number; secrets: ({ name: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string })[] }
```

### `github.codespaces.deleteOrgSecret`

- **HTTP**: `DELETE /orgs/{org}/codespaces/secrets/{secret_name}`
- **What it does**: Delete an organization secret
- **OpenAPI operationId**: `codespaces/delete-org-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type CodespacesDeleteOrgSecretInput = Parameters<typeof github.codespaces.deleteOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesDeleteOrgSecretOutput = Awaited<ReturnType<typeof github.codespaces.deleteOrgSecret>>;

const input: CodespacesDeleteOrgSecretInput = {} as { org: string; secret_name: string };
const result: CodespacesDeleteOrgSecretOutput = await github.codespaces.deleteOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.codespaces.getOrgSecret`

- **HTTP**: `GET /orgs/{org}/codespaces/secrets/{secret_name}`
- **What it does**: Get an organization secret
- **OpenAPI operationId**: `codespaces/get-org-secret`
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

type CodespacesGetOrgSecretInput = Parameters<typeof github.codespaces.getOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesGetOrgSecretOutput = Awaited<ReturnType<typeof github.codespaces.getOrgSecret>>;

const input: CodespacesGetOrgSecretInput = {} as { org: string; secret_name: string };
const result: CodespacesGetOrgSecretOutput = await github.codespaces.getOrgSecret(input);

// Result shape (from schema): { name: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url?: string }
```

### `github.codespaces.createOrUpdateOrgSecret`

- **HTTP**: `PUT /orgs/{org}/codespaces/secrets/{secret_name}`
- **What it does**: Create or update an organization secret
- **OpenAPI operationId**: `codespaces/create-or-update-org-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ encrypted_value?: string; key_id?: string; visibility: "all" | "private" | "selected"; selected_repository_ids?: (number)[]; org: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`, `204`, `404`, `422`

```ts
import github from "@utdk/github";

type CodespacesCreateOrUpdateOrgSecretInput = Parameters<typeof github.codespaces.createOrUpdateOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesCreateOrUpdateOrgSecretOutput = Awaited<ReturnType<typeof github.codespaces.createOrUpdateOrgSecret>>;

const input: CodespacesCreateOrUpdateOrgSecretInput = {} as { encrypted_value?: string; key_id?: string; visibility: "all" | "private" | "selected"; selected_repository_ids?: (number)[]; org: string; secret_name: string };
const result: CodespacesCreateOrUpdateOrgSecretOutput = await github.codespaces.createOrUpdateOrgSecret(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.codespaces.listSelectedReposForOrgSecret`

- **HTTP**: `GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories`
- **What it does**: List selected repositories for an organization secret
- **OpenAPI operationId**: `codespaces/list-selected-repos-for-org-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; secret_name: string; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type CodespacesListSelectedReposForOrgSecretInput = Parameters<typeof github.codespaces.listSelectedReposForOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesListSelectedReposForOrgSecretOutput = Awaited<ReturnType<typeof github.codespaces.listSelectedReposForOrgSecret>>;

const input: CodespacesListSelectedReposForOrgSecretInput = {} as { org: string; secret_name: string; page?: number; per_page?: number };
const result: CodespacesListSelectedReposForOrgSecretOutput = await github.codespaces.listSelectedReposForOrgSecret(input);

// Result shape (from schema): { total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...
```

### `github.codespaces.setSelectedReposForOrgSecret`

- **HTTP**: `PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories`
- **What it does**: Set selected repositories for an organization secret
- **OpenAPI operationId**: `codespaces/set-selected-repos-for-org-secret`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_repository_ids: (number)[]; org: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `409`

```ts
import github from "@utdk/github";

type CodespacesSetSelectedReposForOrgSecretInput = Parameters<typeof github.codespaces.setSelectedReposForOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesSetSelectedReposForOrgSecretOutput = Awaited<ReturnType<typeof github.codespaces.setSelectedReposForOrgSecret>>;

const input: CodespacesSetSelectedReposForOrgSecretInput = {} as { selected_repository_ids: (number)[]; org: string; secret_name: string };
const result: CodespacesSetSelectedReposForOrgSecretOutput = await github.codespaces.setSelectedReposForOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.codespaces.removeSelectedRepoFromOrgSecret`

- **HTTP**: `DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}`
- **What it does**: Remove selected repository from an organization secret
- **OpenAPI operationId**: `codespaces/remove-selected-repo-from-org-secret`
- **Path params**: `repository_id`
- **Query params**: None
- **Response codes**: `204`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; secret_name: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type CodespacesRemoveSelectedRepoFromOrgSecretInput = Parameters<typeof github.codespaces.removeSelectedRepoFromOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesRemoveSelectedRepoFromOrgSecretOutput = Awaited<ReturnType<typeof github.codespaces.removeSelectedRepoFromOrgSecret>>;

const input: CodespacesRemoveSelectedRepoFromOrgSecretInput = {} as { org: string; secret_name: string; repository_id: number };
const result: CodespacesRemoveSelectedRepoFromOrgSecretOutput = await github.codespaces.removeSelectedRepoFromOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.codespaces.addSelectedRepoToOrgSecret`

- **HTTP**: `PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}`
- **What it does**: Add selected repository to an organization secret
- **OpenAPI operationId**: `codespaces/add-selected-repo-to-org-secret`
- **Path params**: `repository_id`
- **Query params**: None
- **Response codes**: `204`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; secret_name: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type CodespacesAddSelectedRepoToOrgSecretInput = Parameters<typeof github.codespaces.addSelectedRepoToOrgSecret> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesAddSelectedRepoToOrgSecretOutput = Awaited<ReturnType<typeof github.codespaces.addSelectedRepoToOrgSecret>>;

const input: CodespacesAddSelectedRepoToOrgSecretInput = {} as { org: string; secret_name: string; repository_id: number };
const result: CodespacesAddSelectedRepoToOrgSecretOutput = await github.codespaces.addSelectedRepoToOrgSecret(input);

// Result shape (from schema): unknown
```

### `github.codespaces.getOrgPublicKey`

- **HTTP**: `GET /orgs/{org}/codespaces/secrets/public-key`
- **What it does**: Get an organization public key
- **OpenAPI operationId**: `codespaces/get-org-public-key`
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

type CodespacesGetOrgPublicKeyInput = Parameters<typeof github.codespaces.getOrgPublicKey> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesGetOrgPublicKeyOutput = Awaited<ReturnType<typeof github.codespaces.getOrgPublicKey>>;

const input: CodespacesGetOrgPublicKeyInput = {} as { org: string };
const result: CodespacesGetOrgPublicKeyOutput = await github.codespaces.getOrgPublicKey(input);

// Result shape (from schema): { key_id: string; key: string; id?: number; url?: string; title?: string; created_at?: string }
```

### `github.codespaces.getCodespacesForUserInOrg`

- **HTTP**: `GET /orgs/{org}/members/{username}/codespaces`
- **What it does**: List codespaces for a user in organization
- **OpenAPI operationId**: `codespaces/get-codespaces-for-user-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; codespaces: ({ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: stri...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesGetCodespacesForUserInOrgInput = Parameters<typeof github.codespaces.getCodespacesForUserInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesGetCodespacesForUserInOrgOutput = Awaited<ReturnType<typeof github.codespaces.getCodespacesForUserInOrg>>;

const input: CodespacesGetCodespacesForUserInOrgInput = {} as { org: string; username: string; per_page?: number; page?: number };
const result: CodespacesGetCodespacesForUserInOrgOutput = await github.codespaces.getCodespacesForUserInOrg(input);

// Result shape (from schema): { total_count: number; codespaces: ({ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: stri...
```

### `github.codespaces.deleteFromOrganization`

- **HTTP**: `DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}`
- **What it does**: Delete a codespace from the organization
- **OpenAPI operationId**: `codespaces/delete-from-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `304`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string; codespace_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `304`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesDeleteFromOrganizationInput = Parameters<typeof github.codespaces.deleteFromOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesDeleteFromOrganizationOutput = Awaited<ReturnType<typeof github.codespaces.deleteFromOrganization>>;

const input: CodespacesDeleteFromOrganizationInput = {} as { org: string; username: string; codespace_name: string };
const result: CodespacesDeleteFromOrganizationOutput = await github.codespaces.deleteFromOrganization(input);

// Result shape (from schema): unknown
```

### `github.codespaces.stopInOrganization`

- **HTTP**: `POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop`
- **What it does**: Stop a codespace for an organization user
- **OpenAPI operationId**: `codespaces/stop-in-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string; codespace_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesStopInOrganizationInput = Parameters<typeof github.codespaces.stopInOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesStopInOrganizationOutput = Awaited<ReturnType<typeof github.codespaces.stopInOrganization>>;

const input: CodespacesStopInOrganizationInput = {} as { org: string; username: string; codespace_name: string };
const result: CodespacesStopInOrganizationOutput = await github.codespaces.stopInOrganization(input);

// Result shape (from schema): { id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...
```

### `github.codespaces.listInRepositoryForAuthenticatedUser`

- **HTTP**: `GET /repos/{owner}/{repo}/codespaces`
- **What it does**: List codespaces in a repository for the authenticated user
- **OpenAPI operationId**: `codespaces/list-in-repository-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; codespaces: ({ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: stri...`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesListInRepositoryForAuthenticatedUserInput = Parameters<typeof github.codespaces.listInRepositoryForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesListInRepositoryForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.listInRepositoryForAuthenticatedUser>>;

const input: CodespacesListInRepositoryForAuthenticatedUserInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: CodespacesListInRepositoryForAuthenticatedUserOutput = await github.codespaces.listInRepositoryForAuthenticatedUser(input);

// Result shape (from schema): { total_count: number; codespaces: ({ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: stri...
```

### `github.codespaces.createWithRepoForAuthenticatedUser`

- **HTTP**: `POST /repos/{owner}/{repo}/codespaces`
- **What it does**: Create a codespace in a repository
- **OpenAPI operationId**: `codespaces/create-with-repo-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `202`, `400`, `401`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ ref?: string; location?: string; geo?: "EuropeWest" | "SoutheastAsia" | "UsEast" | "UsWest"; client_ip?: string; machine?: string; devcontainer_path?: string; multi_repo_permissions_opt_out?: boolean; working_directory?: string; idle_timeout_minutes?: number; display_name?: string; retention_period_minutes?: number; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...`
- OpenAPI response codes: `201`, `202`, `400`, `401`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodespacesCreateWithRepoForAuthenticatedUserInput = Parameters<typeof github.codespaces.createWithRepoForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesCreateWithRepoForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.createWithRepoForAuthenticatedUser>>;

const input: CodespacesCreateWithRepoForAuthenticatedUserInput = {} as { ref?: string; location?: string; geo?: "EuropeWest" | "SoutheastAsia" | "UsEast" | "UsWest"; client_ip?: string; machine?: string; devcontainer_path?: string; multi_repo_permissions_opt_out?: boolean; working_directory?: string; idle_timeout_minutes?: number; display_name?: string; retention_period_minutes?: number; owner: string; repo: string };
const result: CodespacesCreateWithRepoForAuthenticatedUserOutput = await github.codespaces.createWithRepoForAuthenticatedUser(input);

// Result shape (from schema): { id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...
```

### `github.codespaces.listDevcontainersInRepositoryForAuthenticatedUser`

- **HTTP**: `GET /repos/{owner}/{repo}/codespaces/devcontainers`
- **What it does**: List devcontainer configurations in a repository for the authenticated user
- **OpenAPI operationId**: `codespaces/list-devcontainers-in-repository-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; devcontainers: ({ path: string; name?: string; display_name?: string })[] }`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesListDevcontainersInRepositoryForAuthenticatedUserInput = Parameters<typeof github.codespaces.listDevcontainersInRepositoryForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesListDevcontainersInRepositoryForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.listDevcontainersInRepositoryForAuthenticatedUser>>;

const input: CodespacesListDevcontainersInRepositoryForAuthenticatedUserInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: CodespacesListDevcontainersInRepositoryForAuthenticatedUserOutput = await github.codespaces.listDevcontainersInRepositoryForAuthenticatedUser(input);

// Result shape (from schema): { total_count: number; devcontainers: ({ path: string; name?: string; display_name?: string })[] }
```

### `github.codespaces.repoMachinesForAuthenticatedUser`

- **HTTP**: `GET /repos/{owner}/{repo}/codespaces/machines`
- **What it does**: List available machine types for a repository
- **OpenAPI operationId**: `codespaces/repo-machines-for-authenticated-user`
- **Path params**: None
- **Query params**: `location`, `client_ip`, `ref`
- **Response codes**: `200`, `304`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; location?: string; client_ip?: string; ref?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; machines: ({ name: string; display_name: string; operating_system: string; storage_in_bytes: number; memory_in_bytes: number; cpus: number; prebuild_availability: "none" | "ready" | "in_progress" ...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesRepoMachinesForAuthenticatedUserInput = Parameters<typeof github.codespaces.repoMachinesForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesRepoMachinesForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.repoMachinesForAuthenticatedUser>>;

const input: CodespacesRepoMachinesForAuthenticatedUserInput = {} as { owner: string; repo: string; location?: string; client_ip?: string; ref?: string };
const result: CodespacesRepoMachinesForAuthenticatedUserOutput = await github.codespaces.repoMachinesForAuthenticatedUser(input);

// Result shape (from schema): { total_count: number; machines: ({ name: string; display_name: string; operating_system: string; storage_in_bytes: number; memory_in_bytes: number; cpus: number; prebuild_availability: "none" | "ready" | "in_progress" ...
```

### `github.codespaces.preFlightWithRepoForAuthenticatedUser`

- **HTTP**: `GET /repos/{owner}/{repo}/codespaces/new`
- **What it does**: Get default attributes for a codespace
- **OpenAPI operationId**: `codespaces/pre-flight-with-repo-for-authenticated-user`
- **Path params**: None
- **Query params**: `ref`, `client_ip`
- **Response codes**: `200`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref?: string; client_ip?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ billable_owner?: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; followi...`
- OpenAPI response codes: `200`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type CodespacesPreFlightWithRepoForAuthenticatedUserInput = Parameters<typeof github.codespaces.preFlightWithRepoForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesPreFlightWithRepoForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.preFlightWithRepoForAuthenticatedUser>>;

const input: CodespacesPreFlightWithRepoForAuthenticatedUserInput = {} as { owner: string; repo: string; ref?: string; client_ip?: string };
const result: CodespacesPreFlightWithRepoForAuthenticatedUserOutput = await github.codespaces.preFlightWithRepoForAuthenticatedUser(input);

// Result shape (from schema): { billable_owner?: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; followi...
```

### `github.codespaces.checkPermissionsForDevcontainer`

- **HTTP**: `GET /repos/{owner}/{repo}/codespaces/permissions_check`
- **What it does**: Check if permissions defined by a devcontainer have been accepted by the authenticated user
- **OpenAPI operationId**: `codespaces/check-permissions-for-devcontainer`
- **Path params**: None
- **Query params**: `ref`, `devcontainer_path`
- **Response codes**: `200`, `401`, `403`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref: string; devcontainer_path: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ accepted: boolean }`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type CodespacesCheckPermissionsForDevcontainerInput = Parameters<typeof github.codespaces.checkPermissionsForDevcontainer> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesCheckPermissionsForDevcontainerOutput = Awaited<ReturnType<typeof github.codespaces.checkPermissionsForDevcontainer>>;

const input: CodespacesCheckPermissionsForDevcontainerInput = {} as { owner: string; repo: string; ref: string; devcontainer_path: string };
const result: CodespacesCheckPermissionsForDevcontainerOutput = await github.codespaces.checkPermissionsForDevcontainer(input);

// Result shape (from schema): { accepted: boolean }
```

### `github.codespaces.listRepoSecrets`

- **HTTP**: `GET /repos/{owner}/{repo}/codespaces/secrets`
- **What it does**: List repository secrets
- **OpenAPI operationId**: `codespaces/list-repo-secrets`
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

type CodespacesListRepoSecretsInput = Parameters<typeof github.codespaces.listRepoSecrets> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesListRepoSecretsOutput = Awaited<ReturnType<typeof github.codespaces.listRepoSecrets>>;

const input: CodespacesListRepoSecretsInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: CodespacesListRepoSecretsOutput = await github.codespaces.listRepoSecrets(input);

// Result shape (from schema): { total_count: number; secrets: ({ name: string; created_at: string; updated_at: string })[] }
```

### `github.codespaces.deleteRepoSecret`

- **HTTP**: `DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`
- **What it does**: Delete a repository secret
- **OpenAPI operationId**: `codespaces/delete-repo-secret`
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

type CodespacesDeleteRepoSecretInput = Parameters<typeof github.codespaces.deleteRepoSecret> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesDeleteRepoSecretOutput = Awaited<ReturnType<typeof github.codespaces.deleteRepoSecret>>;

const input: CodespacesDeleteRepoSecretInput = {} as { owner: string; repo: string; secret_name: string };
const result: CodespacesDeleteRepoSecretOutput = await github.codespaces.deleteRepoSecret(input);

// Result shape (from schema): unknown
```

### `github.codespaces.getRepoSecret`

- **HTTP**: `GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`
- **What it does**: Get a repository secret
- **OpenAPI operationId**: `codespaces/get-repo-secret`
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

type CodespacesGetRepoSecretInput = Parameters<typeof github.codespaces.getRepoSecret> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesGetRepoSecretOutput = Awaited<ReturnType<typeof github.codespaces.getRepoSecret>>;

const input: CodespacesGetRepoSecretInput = {} as { owner: string; repo: string; secret_name: string };
const result: CodespacesGetRepoSecretOutput = await github.codespaces.getRepoSecret(input);

// Result shape (from schema): { name: string; created_at: string; updated_at: string }
```

### `github.codespaces.createOrUpdateRepoSecret`

- **HTTP**: `PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`
- **What it does**: Create or update a repository secret
- **OpenAPI operationId**: `codespaces/create-or-update-repo-secret`
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

type CodespacesCreateOrUpdateRepoSecretInput = Parameters<typeof github.codespaces.createOrUpdateRepoSecret> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesCreateOrUpdateRepoSecretOutput = Awaited<ReturnType<typeof github.codespaces.createOrUpdateRepoSecret>>;

const input: CodespacesCreateOrUpdateRepoSecretInput = {} as { encrypted_value?: string; key_id?: string; owner: string; repo: string; secret_name: string };
const result: CodespacesCreateOrUpdateRepoSecretOutput = await github.codespaces.createOrUpdateRepoSecret(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.codespaces.getRepoPublicKey`

- **HTTP**: `GET /repos/{owner}/{repo}/codespaces/secrets/public-key`
- **What it does**: Get a repository public key
- **OpenAPI operationId**: `codespaces/get-repo-public-key`
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

type CodespacesGetRepoPublicKeyInput = Parameters<typeof github.codespaces.getRepoPublicKey> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesGetRepoPublicKeyOutput = Awaited<ReturnType<typeof github.codespaces.getRepoPublicKey>>;

const input: CodespacesGetRepoPublicKeyInput = {} as { owner: string; repo: string };
const result: CodespacesGetRepoPublicKeyOutput = await github.codespaces.getRepoPublicKey(input);

// Result shape (from schema): { key_id: string; key: string; id?: number; url?: string; title?: string; created_at?: string }
```

### `github.codespaces.createWithPrForAuthenticatedUser`

- **HTTP**: `POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces`
- **What it does**: Create a codespace from a pull request
- **OpenAPI operationId**: `codespaces/create-with-pr-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `202`, `401`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ location?: string; geo?: "EuropeWest" | "SoutheastAsia" | "UsEast" | "UsWest"; client_ip?: string; machine?: string; devcontainer_path?: string; multi_repo_permissions_opt_out?: boolean; working_directory?: string; idle_timeout_minutes?: number; display_name?: string; retention_period_minutes?: number; owner: string; repo: string; pull_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...`
- OpenAPI response codes: `201`, `202`, `401`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodespacesCreateWithPrForAuthenticatedUserInput = Parameters<typeof github.codespaces.createWithPrForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesCreateWithPrForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.createWithPrForAuthenticatedUser>>;

const input: CodespacesCreateWithPrForAuthenticatedUserInput = {} as { location?: string; geo?: "EuropeWest" | "SoutheastAsia" | "UsEast" | "UsWest"; client_ip?: string; machine?: string; devcontainer_path?: string; multi_repo_permissions_opt_out?: boolean; working_directory?: string; idle_timeout_minutes?: number; display_name?: string; retention_period_minutes?: number; owner: string; repo: string; pull_number: number };
const result: CodespacesCreateWithPrForAuthenticatedUserOutput = await github.codespaces.createWithPrForAuthenticatedUser(input);

// Result shape (from schema): { id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...
```

### `github.codespaces.listForAuthenticatedUser`

- **HTTP**: `GET /user/codespaces`
- **What it does**: List codespaces for the authenticated user
- **OpenAPI operationId**: `codespaces/list-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number; repository_id?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; codespaces: ({ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: stri...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesListForAuthenticatedUserInput = Parameters<typeof github.codespaces.listForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesListForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.listForAuthenticatedUser>>;

const input: CodespacesListForAuthenticatedUserInput = {} as { per_page?: number; page?: number; repository_id?: number };
const result: CodespacesListForAuthenticatedUserOutput = await github.codespaces.listForAuthenticatedUser(input);

// Result shape (from schema): { total_count: number; codespaces: ({ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: stri...
```

### `github.codespaces.createForAuthenticatedUser`

- **HTTP**: `POST /user/codespaces`
- **What it does**: Create a codespace for the authenticated user
- **OpenAPI operationId**: `codespaces/create-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `202`, `401`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: { repository_id: number; ref?: string; location?: string; geo?: "EuropeWest" | "SoutheastAsia" | "UsEast" | "UsWest"; client_ip?: string; machine?: string; devcontainer_path?: string; multi_repo_permissions_opt_out?: boolean; working_directory?: string; idle_timeout_minutes?: number; display_name?: string; retention_period_minutes?: number } | { pull_request: { pull_request_number: number; repository_id: number }; location?: string; geo?: "EuropeWest" | "SoutheastAsia" | "UsEast" | "UsWest"; machine?: string; devcontainer_path?: string; working_directory?: string; idle_timeout_minutes?: number } }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...`
- OpenAPI response codes: `201`, `202`, `401`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodespacesCreateForAuthenticatedUserInput = Parameters<typeof github.codespaces.createForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesCreateForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.createForAuthenticatedUser>>;

const input: CodespacesCreateForAuthenticatedUserInput = {} as { body: { repository_id: number; ref?: string; location?: string; geo?: "EuropeWest" | "SoutheastAsia" | "UsEast" | "UsWest"; client_ip?: string; machine?: string; devcontainer_path?: string; multi_repo_permissions_opt_out?: boolean; working_directory?: string; idle_timeout_minutes?: number; display_name?: string; retention_period_minutes?: number } | { pull_request: { pull_request_number: number; repository_id: number }; location?: string; geo?: "EuropeWest" | "SoutheastAsia" | "UsEast" | "UsWest"; machine?: string; devcontainer_path?: string; working_directory?: string; idle_timeout_minutes?: number } };
const result: CodespacesCreateForAuthenticatedUserOutput = await github.codespaces.createForAuthenticatedUser(input);

// Result shape (from schema): { id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...
```

### `github.codespaces.deleteForAuthenticatedUser`

- **HTTP**: `DELETE /user/codespaces/{codespace_name}`
- **What it does**: Delete a codespace for the authenticated user
- **OpenAPI operationId**: `codespaces/delete-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `304`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ codespace_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `304`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesDeleteForAuthenticatedUserInput = Parameters<typeof github.codespaces.deleteForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesDeleteForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.deleteForAuthenticatedUser>>;

const input: CodespacesDeleteForAuthenticatedUserInput = {} as { codespace_name: string };
const result: CodespacesDeleteForAuthenticatedUserOutput = await github.codespaces.deleteForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.codespaces.getForAuthenticatedUser`

- **HTTP**: `GET /user/codespaces/{codespace_name}`
- **What it does**: Get a codespace for the authenticated user
- **OpenAPI operationId**: `codespaces/get-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ codespace_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesGetForAuthenticatedUserInput = Parameters<typeof github.codespaces.getForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesGetForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.getForAuthenticatedUser>>;

const input: CodespacesGetForAuthenticatedUserInput = {} as { codespace_name: string };
const result: CodespacesGetForAuthenticatedUserOutput = await github.codespaces.getForAuthenticatedUser(input);

// Result shape (from schema): { id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...
```

### `github.codespaces.updateForAuthenticatedUser`

- **HTTP**: `PATCH /user/codespaces/{codespace_name}`
- **What it does**: Update a codespace for the authenticated user
- **OpenAPI operationId**: `codespaces/update-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ machine?: string; display_name?: string; recent_folders?: (string)[]; codespace_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...`
- OpenAPI response codes: `200`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type CodespacesUpdateForAuthenticatedUserInput = Parameters<typeof github.codespaces.updateForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesUpdateForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.updateForAuthenticatedUser>>;

const input: CodespacesUpdateForAuthenticatedUserInput = {} as { machine?: string; display_name?: string; recent_folders?: (string)[]; codespace_name: string };
const result: CodespacesUpdateForAuthenticatedUserOutput = await github.codespaces.updateForAuthenticatedUser(input);

// Result shape (from schema): { id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...
```

### `github.codespaces.exportForAuthenticatedUser`

- **HTTP**: `POST /user/codespaces/{codespace_name}/exports`
- **What it does**: Export a codespace for the authenticated user
- **OpenAPI operationId**: `codespaces/export-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `401`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ codespace_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `401`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type CodespacesExportForAuthenticatedUserInput = Parameters<typeof github.codespaces.exportForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesExportForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.exportForAuthenticatedUser>>;

const input: CodespacesExportForAuthenticatedUserInput = {} as { codespace_name: string };
const result: CodespacesExportForAuthenticatedUserOutput = await github.codespaces.exportForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.codespaces.getExportDetailsForAuthenticatedUser`

- **HTTP**: `GET /user/codespaces/{codespace_name}/exports/{export_id}`
- **What it does**: Get details about a codespace export
- **OpenAPI operationId**: `codespaces/get-export-details-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ codespace_name: string; export_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ state?: string | null; completed_at?: string | null; branch?: string | null; sha?: string | null; id?: string; export_url?: string; html_url?: string | null }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type CodespacesGetExportDetailsForAuthenticatedUserInput = Parameters<typeof github.codespaces.getExportDetailsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesGetExportDetailsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.getExportDetailsForAuthenticatedUser>>;

const input: CodespacesGetExportDetailsForAuthenticatedUserInput = {} as { codespace_name: string; export_id: string };
const result: CodespacesGetExportDetailsForAuthenticatedUserOutput = await github.codespaces.getExportDetailsForAuthenticatedUser(input);

// Result shape (from schema): { state?: string | null; completed_at?: string | null; branch?: string | null; sha?: string | null; id?: string; export_url?: string; html_url?: string | null }
```

### `github.codespaces.codespaceMachinesForAuthenticatedUser`

- **HTTP**: `GET /user/codespaces/{codespace_name}/machines`
- **What it does**: List machine types for a codespace
- **OpenAPI operationId**: `codespaces/codespace-machines-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ codespace_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; machines: ({ name: string; display_name: string; operating_system: string; storage_in_bytes: number; memory_in_bytes: number; cpus: number; prebuild_availability: "none" | "ready" | "in_progress" ...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesCodespaceMachinesForAuthenticatedUserInput = Parameters<typeof github.codespaces.codespaceMachinesForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesCodespaceMachinesForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.codespaceMachinesForAuthenticatedUser>>;

const input: CodespacesCodespaceMachinesForAuthenticatedUserInput = {} as { codespace_name: string };
const result: CodespacesCodespaceMachinesForAuthenticatedUserOutput = await github.codespaces.codespaceMachinesForAuthenticatedUser(input);

// Result shape (from schema): { total_count: number; machines: ({ name: string; display_name: string; operating_system: string; storage_in_bytes: number; memory_in_bytes: number; cpus: number; prebuild_availability: "none" | "ready" | "in_progress" ...
```

### `github.codespaces.publishForAuthenticatedUser`

- **HTTP**: `POST /user/codespaces/{codespace_name}/publish`
- **What it does**: Create a repository from an unpublished codespace
- **OpenAPI operationId**: `codespaces/publish-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; private?: boolean; codespace_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...`
- OpenAPI response codes: `201`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type CodespacesPublishForAuthenticatedUserInput = Parameters<typeof github.codespaces.publishForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesPublishForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.publishForAuthenticatedUser>>;

const input: CodespacesPublishForAuthenticatedUserInput = {} as { name?: string; private?: boolean; codespace_name: string };
const result: CodespacesPublishForAuthenticatedUserOutput = await github.codespaces.publishForAuthenticatedUser(input);

// Result shape (from schema): { id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...
```

### `github.codespaces.startForAuthenticatedUser`

- **HTTP**: `POST /user/codespaces/{codespace_name}/start`
- **What it does**: Start a codespace for the authenticated user
- **OpenAPI operationId**: `codespaces/start-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `400`, `401`, `402`, `403`, `404`, `409`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ codespace_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...`
- OpenAPI response codes: `200`, `304`, `400`, `401`, `402`, `403`, `404`, `409`, `500`

```ts
import github from "@utdk/github";

type CodespacesStartForAuthenticatedUserInput = Parameters<typeof github.codespaces.startForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesStartForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.startForAuthenticatedUser>>;

const input: CodespacesStartForAuthenticatedUserInput = {} as { codespace_name: string };
const result: CodespacesStartForAuthenticatedUserOutput = await github.codespaces.startForAuthenticatedUser(input);

// Result shape (from schema): { id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...
```

### `github.codespaces.stopForAuthenticatedUser`

- **HTTP**: `POST /user/codespaces/{codespace_name}/stop`
- **What it does**: Stop a codespace for the authenticated user
- **OpenAPI operationId**: `codespaces/stop-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ codespace_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesStopForAuthenticatedUserInput = Parameters<typeof github.codespaces.stopForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesStopForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.stopForAuthenticatedUser>>;

const input: CodespacesStopForAuthenticatedUserInput = {} as { codespace_name: string };
const result: CodespacesStopForAuthenticatedUserOutput = await github.codespaces.stopForAuthenticatedUser(input);

// Result shape (from schema): { id: number; name: string; display_name?: string | null; environment_id: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id:...
```

### `github.codespaces.listSecretsForAuthenticatedUser`

- **HTTP**: `GET /user/codespaces/secrets`
- **What it does**: List secrets for the authenticated user
- **OpenAPI operationId**: `codespaces/list-secrets-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; secrets: ({ name: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url: string })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type CodespacesListSecretsForAuthenticatedUserInput = Parameters<typeof github.codespaces.listSecretsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesListSecretsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.listSecretsForAuthenticatedUser>>;

const input: CodespacesListSecretsForAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: CodespacesListSecretsForAuthenticatedUserOutput = await github.codespaces.listSecretsForAuthenticatedUser(input);

// Result shape (from schema): { total_count: number; secrets: ({ name: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url: string })[] }
```

### `github.codespaces.deleteSecretForAuthenticatedUser`

- **HTTP**: `DELETE /user/codespaces/secrets/{secret_name}`
- **What it does**: Delete a secret for the authenticated user
- **OpenAPI operationId**: `codespaces/delete-secret-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type CodespacesDeleteSecretForAuthenticatedUserInput = Parameters<typeof github.codespaces.deleteSecretForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesDeleteSecretForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.deleteSecretForAuthenticatedUser>>;

const input: CodespacesDeleteSecretForAuthenticatedUserInput = {} as { secret_name: string };
const result: CodespacesDeleteSecretForAuthenticatedUserOutput = await github.codespaces.deleteSecretForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.codespaces.getSecretForAuthenticatedUser`

- **HTTP**: `GET /user/codespaces/secrets/{secret_name}`
- **What it does**: Get a secret for the authenticated user
- **OpenAPI operationId**: `codespaces/get-secret-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type CodespacesGetSecretForAuthenticatedUserInput = Parameters<typeof github.codespaces.getSecretForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesGetSecretForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.getSecretForAuthenticatedUser>>;

const input: CodespacesGetSecretForAuthenticatedUserInput = {} as { secret_name: string };
const result: CodespacesGetSecretForAuthenticatedUserOutput = await github.codespaces.getSecretForAuthenticatedUser(input);

// Result shape (from schema): { name: string; created_at: string; updated_at: string; visibility: "all" | "private" | "selected"; selected_repositories_url: string }
```

### `github.codespaces.createOrUpdateSecretForAuthenticatedUser`

- **HTTP**: `PUT /user/codespaces/secrets/{secret_name}`
- **What it does**: Create or update a secret for the authenticated user
- **OpenAPI operationId**: `codespaces/create-or-update-secret-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ encrypted_value?: string; key_id: string; selected_repository_ids?: (number | string)[]; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`, `204`, `404`, `422`

```ts
import github from "@utdk/github";

type CodespacesCreateOrUpdateSecretForAuthenticatedUserInput = Parameters<typeof github.codespaces.createOrUpdateSecretForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesCreateOrUpdateSecretForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.createOrUpdateSecretForAuthenticatedUser>>;

const input: CodespacesCreateOrUpdateSecretForAuthenticatedUserInput = {} as { encrypted_value?: string; key_id: string; selected_repository_ids?: (number | string)[]; secret_name: string };
const result: CodespacesCreateOrUpdateSecretForAuthenticatedUserOutput = await github.codespaces.createOrUpdateSecretForAuthenticatedUser(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.codespaces.listRepositoriesForSecretForAuthenticatedUser`

- **HTTP**: `GET /user/codespaces/secrets/{secret_name}/repositories`
- **What it does**: List selected repositories for a user secret
- **OpenAPI operationId**: `codespaces/list-repositories-for-secret-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesListRepositoriesForSecretForAuthenticatedUserInput = Parameters<typeof github.codespaces.listRepositoriesForSecretForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesListRepositoriesForSecretForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.listRepositoriesForSecretForAuthenticatedUser>>;

const input: CodespacesListRepositoriesForSecretForAuthenticatedUserInput = {} as { secret_name: string };
const result: CodespacesListRepositoriesForSecretForAuthenticatedUserOutput = await github.codespaces.listRepositoriesForSecretForAuthenticatedUser(input);

// Result shape (from schema): { total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...
```

### `github.codespaces.setRepositoriesForSecretForAuthenticatedUser`

- **HTTP**: `PUT /user/codespaces/secrets/{secret_name}/repositories`
- **What it does**: Set selected repositories for a user secret
- **OpenAPI operationId**: `codespaces/set-repositories-for-secret-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_repository_ids: (number)[]; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesSetRepositoriesForSecretForAuthenticatedUserInput = Parameters<typeof github.codespaces.setRepositoriesForSecretForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesSetRepositoriesForSecretForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.setRepositoriesForSecretForAuthenticatedUser>>;

const input: CodespacesSetRepositoriesForSecretForAuthenticatedUserInput = {} as { selected_repository_ids: (number)[]; secret_name: string };
const result: CodespacesSetRepositoriesForSecretForAuthenticatedUserOutput = await github.codespaces.setRepositoriesForSecretForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.codespaces.removeRepositoryForSecretForAuthenticatedUser`

- **HTTP**: `DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`
- **What it does**: Remove a selected repository from a user secret
- **OpenAPI operationId**: `codespaces/remove-repository-for-secret-for-authenticated-user`
- **Path params**: `repository_id`
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ secret_name: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesRemoveRepositoryForSecretForAuthenticatedUserInput = Parameters<typeof github.codespaces.removeRepositoryForSecretForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesRemoveRepositoryForSecretForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.removeRepositoryForSecretForAuthenticatedUser>>;

const input: CodespacesRemoveRepositoryForSecretForAuthenticatedUserInput = {} as { secret_name: string; repository_id: number };
const result: CodespacesRemoveRepositoryForSecretForAuthenticatedUserOutput = await github.codespaces.removeRepositoryForSecretForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.codespaces.addRepositoryForSecretForAuthenticatedUser`

- **HTTP**: `PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`
- **What it does**: Add a selected repository to a user secret
- **OpenAPI operationId**: `codespaces/add-repository-for-secret-for-authenticated-user`
- **Path params**: `repository_id`
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ secret_name: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CodespacesAddRepositoryForSecretForAuthenticatedUserInput = Parameters<typeof github.codespaces.addRepositoryForSecretForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesAddRepositoryForSecretForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.addRepositoryForSecretForAuthenticatedUser>>;

const input: CodespacesAddRepositoryForSecretForAuthenticatedUserInput = {} as { secret_name: string; repository_id: number };
const result: CodespacesAddRepositoryForSecretForAuthenticatedUserOutput = await github.codespaces.addRepositoryForSecretForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.codespaces.getPublicKeyForAuthenticatedUser`

- **HTTP**: `GET /user/codespaces/secrets/public-key`
- **What it does**: Get public key for the authenticated user
- **OpenAPI operationId**: `codespaces/get-public-key-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ [key: string]: unknown }`
- Client transport options: None

**Outputs**

- Client return type: `{ key_id: string; key: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type CodespacesGetPublicKeyForAuthenticatedUserInput = Parameters<typeof github.codespaces.getPublicKeyForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type CodespacesGetPublicKeyForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.codespaces.getPublicKeyForAuthenticatedUser>>;

const result: CodespacesGetPublicKeyForAuthenticatedUserOutput = await github.codespaces.getPublicKeyForAuthenticatedUser();

// Result shape (from schema): { key_id: string; key: string }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
