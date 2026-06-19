# Migrations

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.migrations.listForOrg`

- **HTTP**: `GET /orgs/{org}/migrations`
- **What it does**: List organization migrations
- **OpenAPI operationId**: `migrations/list-for-org`
- **Path params**: None
- **Query params**: `exclude`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number; exclude?: ("repositories")[] }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; foll...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type MigrationsListForOrgInput = Parameters<typeof github.migrations.listForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsListForOrgOutput = Awaited<ReturnType<typeof github.migrations.listForOrg>>;

const input: MigrationsListForOrgInput = {} as { org: string; per_page?: number; page?: number; exclude?: ("repositories")[] };
const result: MigrationsListForOrgOutput = await github.migrations.listForOrg(input);

// Result shape (from schema): ({ id: number; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; foll...
```

### `github.migrations.startForOrg`

- **HTTP**: `POST /orgs/{org}/migrations`
- **What it does**: Start an organization migration
- **OpenAPI operationId**: `migrations/start-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ repositories: (string)[]; lock_repositories?: boolean; exclude_metadata?: boolean; exclude_git_data?: boolean; exclude_attachments?: boolean; exclude_releases?: boolean; exclude_owner_projects?: boolean; org_metadata_only?: boolean; exclude?: ("repositories")[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; follo...`
- OpenAPI response codes: `201`, `404`, `422`

```ts
import github from "@utdk/github";

type MigrationsStartForOrgInput = Parameters<typeof github.migrations.startForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsStartForOrgOutput = Awaited<ReturnType<typeof github.migrations.startForOrg>>;

const input: MigrationsStartForOrgInput = {} as { repositories: (string)[]; lock_repositories?: boolean; exclude_metadata?: boolean; exclude_git_data?: boolean; exclude_attachments?: boolean; exclude_releases?: boolean; exclude_owner_projects?: boolean; org_metadata_only?: boolean; exclude?: ("repositories")[]; org: string };
const result: MigrationsStartForOrgOutput = await github.migrations.startForOrg(input);

// Result shape (from schema): { id: number; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; follo...
```

### `github.migrations.getStatusForOrg`

- **HTTP**: `GET /orgs/{org}/migrations/{migration_id}`
- **What it does**: Get an organization migration status
- **OpenAPI operationId**: `migrations/get-status-for-org`
- **Path params**: None
- **Query params**: `exclude`
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; migration_id: number; exclude?: ("repositories")[] }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; follo...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type MigrationsGetStatusForOrgInput = Parameters<typeof github.migrations.getStatusForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsGetStatusForOrgOutput = Awaited<ReturnType<typeof github.migrations.getStatusForOrg>>;

const input: MigrationsGetStatusForOrgInput = {} as { org: string; migration_id: number; exclude?: ("repositories")[] };
const result: MigrationsGetStatusForOrgOutput = await github.migrations.getStatusForOrg(input);

// Result shape (from schema): { id: number; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; follo...
```

### `github.migrations.deleteArchiveForOrg`

- **HTTP**: `DELETE /orgs/{org}/migrations/{migration_id}/archive`
- **What it does**: Delete an organization migration archive
- **OpenAPI operationId**: `migrations/delete-archive-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; migration_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type MigrationsDeleteArchiveForOrgInput = Parameters<typeof github.migrations.deleteArchiveForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsDeleteArchiveForOrgOutput = Awaited<ReturnType<typeof github.migrations.deleteArchiveForOrg>>;

const input: MigrationsDeleteArchiveForOrgInput = {} as { org: string; migration_id: number };
const result: MigrationsDeleteArchiveForOrgOutput = await github.migrations.deleteArchiveForOrg(input);

// Result shape (from schema): unknown
```

### `github.migrations.downloadArchiveForOrg`

- **HTTP**: `GET /orgs/{org}/migrations/{migration_id}/archive`
- **What it does**: Download an organization migration archive
- **OpenAPI operationId**: `migrations/download-archive-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `302`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; migration_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `302`, `404`

```ts
import github from "@utdk/github";

type MigrationsDownloadArchiveForOrgInput = Parameters<typeof github.migrations.downloadArchiveForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsDownloadArchiveForOrgOutput = Awaited<ReturnType<typeof github.migrations.downloadArchiveForOrg>>;

const input: MigrationsDownloadArchiveForOrgInput = {} as { org: string; migration_id: number };
const result: MigrationsDownloadArchiveForOrgOutput = await github.migrations.downloadArchiveForOrg(input);

// Result shape (from schema): unknown
```

### `github.migrations.unlockRepoForOrg`

- **HTTP**: `DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock`
- **What it does**: Unlock an organization repository
- **OpenAPI operationId**: `migrations/unlock-repo-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; migration_id: number; repo_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type MigrationsUnlockRepoForOrgInput = Parameters<typeof github.migrations.unlockRepoForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsUnlockRepoForOrgOutput = Awaited<ReturnType<typeof github.migrations.unlockRepoForOrg>>;

const input: MigrationsUnlockRepoForOrgInput = {} as { org: string; migration_id: number; repo_name: string };
const result: MigrationsUnlockRepoForOrgOutput = await github.migrations.unlockRepoForOrg(input);

// Result shape (from schema): unknown
```

### `github.migrations.listReposForOrg`

- **HTTP**: `GET /orgs/{org}/migrations/{migration_id}/repositories`
- **What it does**: List repositories in an organization migration
- **OpenAPI operationId**: `migrations/list-repos-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; migration_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type MigrationsListReposForOrgInput = Parameters<typeof github.migrations.listReposForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsListReposForOrgOutput = Awaited<ReturnType<typeof github.migrations.listReposForOrg>>;

const input: MigrationsListReposForOrgInput = {} as { org: string; migration_id: number; per_page?: number; page?: number };
const result: MigrationsListReposForOrgOutput = await github.migrations.listReposForOrg(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...
```

### `github.migrations.cancelImport`

- **HTTP**: `DELETE /repos/{owner}/{repo}/import`
- **What it does**: Cancel an import
- **OpenAPI operationId**: `migrations/cancel-import`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `503`

```ts
import github from "@utdk/github";

type MigrationsCancelImportInput = Parameters<typeof github.migrations.cancelImport> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsCancelImportOutput = Awaited<ReturnType<typeof github.migrations.cancelImport>>;

const input: MigrationsCancelImportInput = {} as { owner: string; repo: string };
const result: MigrationsCancelImportOutput = await github.migrations.cancelImport(input);

// Result shape (from schema): unknown
```

### `github.migrations.getImportStatus`

- **HTTP**: `GET /repos/{owner}/{repo}/import`
- **What it does**: Get an import status
- **OpenAPI operationId**: `migrations/get-import-status`
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

- Client return type: `{ vcs: string | null; use_lfs?: boolean; vcs_url: string; svc_root?: string; tfvc_project?: string; status: "auth" | "error" | "none" | "detecting" | "choose" | "auth_failed" | "importing" | "mapping" | "waiting_to_push...`
- OpenAPI response codes: `200`, `404`, `503`

```ts
import github from "@utdk/github";

type MigrationsGetImportStatusInput = Parameters<typeof github.migrations.getImportStatus> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsGetImportStatusOutput = Awaited<ReturnType<typeof github.migrations.getImportStatus>>;

const input: MigrationsGetImportStatusInput = {} as { owner: string; repo: string };
const result: MigrationsGetImportStatusOutput = await github.migrations.getImportStatus(input);

// Result shape (from schema): { vcs: string | null; use_lfs?: boolean; vcs_url: string; svc_root?: string; tfvc_project?: string; status: "auth" | "error" | "none" | "detecting" | "choose" | "auth_failed" | "importing" | "mapping" | "waiting_to_push...
```

### `github.migrations.updateImport`

- **HTTP**: `PATCH /repos/{owner}/{repo}/import`
- **What it does**: Update an import
- **OpenAPI operationId**: `migrations/update-import`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ vcs_username?: string; vcs_password?: string; vcs?: "subversion" | "tfvc" | "git" | "mercurial"; tfvc_project?: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ vcs: string | null; use_lfs?: boolean; vcs_url: string; svc_root?: string; tfvc_project?: string; status: "auth" | "error" | "none" | "detecting" | "choose" | "auth_failed" | "importing" | "mapping" | "waiting_to_push...`
- OpenAPI response codes: `200`, `503`

```ts
import github from "@utdk/github";

type MigrationsUpdateImportInput = Parameters<typeof github.migrations.updateImport> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsUpdateImportOutput = Awaited<ReturnType<typeof github.migrations.updateImport>>;

const input: MigrationsUpdateImportInput = {} as { vcs_username?: string; vcs_password?: string; vcs?: "subversion" | "tfvc" | "git" | "mercurial"; tfvc_project?: string; owner: string; repo: string };
const result: MigrationsUpdateImportOutput = await github.migrations.updateImport(input);

// Result shape (from schema): { vcs: string | null; use_lfs?: boolean; vcs_url: string; svc_root?: string; tfvc_project?: string; status: "auth" | "error" | "none" | "detecting" | "choose" | "auth_failed" | "importing" | "mapping" | "waiting_to_push...
```

### `github.migrations.startImport`

- **HTTP**: `PUT /repos/{owner}/{repo}/import`
- **What it does**: Start an import
- **OpenAPI operationId**: `migrations/start-import`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ vcs_url: string; vcs?: "subversion" | "git" | "mercurial" | "tfvc"; vcs_username?: string; vcs_password?: string; tfvc_project?: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ vcs: string | null; use_lfs?: boolean; vcs_url: string; svc_root?: string; tfvc_project?: string; status: "auth" | "error" | "none" | "detecting" | "choose" | "auth_failed" | "importing" | "mapping" | "waiting_to_push...`
- OpenAPI response codes: `201`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type MigrationsStartImportInput = Parameters<typeof github.migrations.startImport> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsStartImportOutput = Awaited<ReturnType<typeof github.migrations.startImport>>;

const input: MigrationsStartImportInput = {} as { vcs_url: string; vcs?: "subversion" | "git" | "mercurial" | "tfvc"; vcs_username?: string; vcs_password?: string; tfvc_project?: string; owner: string; repo: string };
const result: MigrationsStartImportOutput = await github.migrations.startImport(input);

// Result shape (from schema): { vcs: string | null; use_lfs?: boolean; vcs_url: string; svc_root?: string; tfvc_project?: string; status: "auth" | "error" | "none" | "detecting" | "choose" | "auth_failed" | "importing" | "mapping" | "waiting_to_push...
```

### `github.migrations.getCommitAuthors`

- **HTTP**: `GET /repos/{owner}/{repo}/import/authors`
- **What it does**: Get commit authors
- **OpenAPI operationId**: `migrations/get-commit-authors`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; since?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; remote_id: string; remote_name: string; email: string; name: string; url: string; import_url: string })[]`
- OpenAPI response codes: `200`, `404`, `503`

```ts
import github from "@utdk/github";

type MigrationsGetCommitAuthorsInput = Parameters<typeof github.migrations.getCommitAuthors> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsGetCommitAuthorsOutput = Awaited<ReturnType<typeof github.migrations.getCommitAuthors>>;

const input: MigrationsGetCommitAuthorsInput = {} as { owner: string; repo: string; since?: number };
const result: MigrationsGetCommitAuthorsOutput = await github.migrations.getCommitAuthors(input);

// Result shape (from schema): ({ id: number; remote_id: string; remote_name: string; email: string; name: string; url: string; import_url: string })[]
```

### `github.migrations.mapCommitAuthor`

- **HTTP**: `PATCH /repos/{owner}/{repo}/import/authors/{author_id}`
- **What it does**: Map a commit author
- **OpenAPI operationId**: `migrations/map-commit-author`
- **Path params**: `author_id`
- **Query params**: None
- **Response codes**: `200`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ email?: string; name?: string; owner: string; repo: string; author_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; remote_id: string; remote_name: string; email: string; name: string; url: string; import_url: string }`
- OpenAPI response codes: `200`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type MigrationsMapCommitAuthorInput = Parameters<typeof github.migrations.mapCommitAuthor> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsMapCommitAuthorOutput = Awaited<ReturnType<typeof github.migrations.mapCommitAuthor>>;

const input: MigrationsMapCommitAuthorInput = {} as { email?: string; name?: string; owner: string; repo: string; author_id: number };
const result: MigrationsMapCommitAuthorOutput = await github.migrations.mapCommitAuthor(input);

// Result shape (from schema): { id: number; remote_id: string; remote_name: string; email: string; name: string; url: string; import_url: string }
```

### `github.migrations.getLargeFiles`

- **HTTP**: `GET /repos/{owner}/{repo}/import/large_files`
- **What it does**: Get large files
- **OpenAPI operationId**: `migrations/get-large-files`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ ref_name: string; path: string; oid: string; size: number })[]`
- OpenAPI response codes: `200`, `503`

```ts
import github from "@utdk/github";

type MigrationsGetLargeFilesInput = Parameters<typeof github.migrations.getLargeFiles> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsGetLargeFilesOutput = Awaited<ReturnType<typeof github.migrations.getLargeFiles>>;

const input: MigrationsGetLargeFilesInput = {} as { owner: string; repo: string };
const result: MigrationsGetLargeFilesOutput = await github.migrations.getLargeFiles(input);

// Result shape (from schema): ({ ref_name: string; path: string; oid: string; size: number })[]
```

### `github.migrations.setLfsPreference`

- **HTTP**: `PATCH /repos/{owner}/{repo}/import/lfs`
- **What it does**: Update Git LFS preference
- **OpenAPI operationId**: `migrations/set-lfs-preference`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ use_lfs: "opt_in" | "opt_out"; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ vcs: string | null; use_lfs?: boolean; vcs_url: string; svc_root?: string; tfvc_project?: string; status: "auth" | "error" | "none" | "detecting" | "choose" | "auth_failed" | "importing" | "mapping" | "waiting_to_push...`
- OpenAPI response codes: `200`, `422`, `503`

```ts
import github from "@utdk/github";

type MigrationsSetLfsPreferenceInput = Parameters<typeof github.migrations.setLfsPreference> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsSetLfsPreferenceOutput = Awaited<ReturnType<typeof github.migrations.setLfsPreference>>;

const input: MigrationsSetLfsPreferenceInput = {} as { use_lfs: "opt_in" | "opt_out"; owner: string; repo: string };
const result: MigrationsSetLfsPreferenceOutput = await github.migrations.setLfsPreference(input);

// Result shape (from schema): { vcs: string | null; use_lfs?: boolean; vcs_url: string; svc_root?: string; tfvc_project?: string; status: "auth" | "error" | "none" | "detecting" | "choose" | "auth_failed" | "importing" | "mapping" | "waiting_to_push...
```

### `github.migrations.listForAuthenticatedUser`

- **HTTP**: `GET /user/migrations`
- **What it does**: List user migrations
- **OpenAPI operationId**: `migrations/list-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; foll...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type MigrationsListForAuthenticatedUserInput = Parameters<typeof github.migrations.listForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsListForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.migrations.listForAuthenticatedUser>>;

const input: MigrationsListForAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: MigrationsListForAuthenticatedUserOutput = await github.migrations.listForAuthenticatedUser(input);

// Result shape (from schema): ({ id: number; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; foll...
```

### `github.migrations.startForAuthenticatedUser`

- **HTTP**: `POST /user/migrations`
- **What it does**: Start a user migration
- **OpenAPI operationId**: `migrations/start-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `401`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ lock_repositories?: boolean; exclude_metadata?: boolean; exclude_git_data?: boolean; exclude_attachments?: boolean; exclude_releases?: boolean; exclude_owner_projects?: boolean; org_metadata_only?: boolean; exclude?: ("repositories")[]; repositories: (string)[] }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; follo...`
- OpenAPI response codes: `201`, `304`, `401`, `403`, `422`

```ts
import github from "@utdk/github";

type MigrationsStartForAuthenticatedUserInput = Parameters<typeof github.migrations.startForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsStartForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.migrations.startForAuthenticatedUser>>;

const input: MigrationsStartForAuthenticatedUserInput = {} as { lock_repositories?: boolean; exclude_metadata?: boolean; exclude_git_data?: boolean; exclude_attachments?: boolean; exclude_releases?: boolean; exclude_owner_projects?: boolean; org_metadata_only?: boolean; exclude?: ("repositories")[]; repositories: (string)[] };
const result: MigrationsStartForAuthenticatedUserOutput = await github.migrations.startForAuthenticatedUser(input);

// Result shape (from schema): { id: number; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; follo...
```

### `github.migrations.getStatusForAuthenticatedUser`

- **HTTP**: `GET /user/migrations/{migration_id}`
- **What it does**: Get a user migration status
- **OpenAPI operationId**: `migrations/get-status-for-authenticated-user`
- **Path params**: None
- **Query params**: `exclude`
- **Response codes**: `200`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ migration_id: number; exclude?: (string)[] }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; follo...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type MigrationsGetStatusForAuthenticatedUserInput = Parameters<typeof github.migrations.getStatusForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsGetStatusForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.migrations.getStatusForAuthenticatedUser>>;

const input: MigrationsGetStatusForAuthenticatedUserInput = {} as { migration_id: number; exclude?: (string)[] };
const result: MigrationsGetStatusForAuthenticatedUserOutput = await github.migrations.getStatusForAuthenticatedUser(input);

// Result shape (from schema): { id: number; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; follo...
```

### `github.migrations.deleteArchiveForAuthenticatedUser`

- **HTTP**: `DELETE /user/migrations/{migration_id}/archive`
- **What it does**: Delete a user migration archive
- **OpenAPI operationId**: `migrations/delete-archive-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ migration_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type MigrationsDeleteArchiveForAuthenticatedUserInput = Parameters<typeof github.migrations.deleteArchiveForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsDeleteArchiveForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.migrations.deleteArchiveForAuthenticatedUser>>;

const input: MigrationsDeleteArchiveForAuthenticatedUserInput = {} as { migration_id: number };
const result: MigrationsDeleteArchiveForAuthenticatedUserOutput = await github.migrations.deleteArchiveForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.migrations.getArchiveForAuthenticatedUser`

- **HTTP**: `GET /user/migrations/{migration_id}/archive`
- **What it does**: Download a user migration archive
- **OpenAPI operationId**: `migrations/get-archive-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `302`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ migration_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `302`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type MigrationsGetArchiveForAuthenticatedUserInput = Parameters<typeof github.migrations.getArchiveForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsGetArchiveForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.migrations.getArchiveForAuthenticatedUser>>;

const input: MigrationsGetArchiveForAuthenticatedUserInput = {} as { migration_id: number };
const result: MigrationsGetArchiveForAuthenticatedUserOutput = await github.migrations.getArchiveForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.migrations.unlockRepoForAuthenticatedUser`

- **HTTP**: `DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock`
- **What it does**: Unlock a user repository
- **OpenAPI operationId**: `migrations/unlock-repo-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ migration_id: number; repo_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type MigrationsUnlockRepoForAuthenticatedUserInput = Parameters<typeof github.migrations.unlockRepoForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsUnlockRepoForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.migrations.unlockRepoForAuthenticatedUser>>;

const input: MigrationsUnlockRepoForAuthenticatedUserInput = {} as { migration_id: number; repo_name: string };
const result: MigrationsUnlockRepoForAuthenticatedUserOutput = await github.migrations.unlockRepoForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.migrations.listReposForAuthenticatedUser`

- **HTTP**: `GET /user/migrations/{migration_id}/repositories`
- **What it does**: List repositories for a user migration
- **OpenAPI operationId**: `migrations/list-repos-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ migration_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type MigrationsListReposForAuthenticatedUserInput = Parameters<typeof github.migrations.listReposForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type MigrationsListReposForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.migrations.listReposForAuthenticatedUser>>;

const input: MigrationsListReposForAuthenticatedUserInput = {} as { migration_id: number; per_page?: number; page?: number };
const result: MigrationsListReposForAuthenticatedUserOutput = await github.migrations.listReposForAuthenticatedUser(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
