# Packages

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.packages.listDockerMigrationConflictingPackagesForOrganization`

- **HTTP**: `GET /orgs/{org}/docker/conflicts`
- **What it does**: Get list of conflicting packages during Docker migration for organization
- **OpenAPI operationId**: `packages/list-docker-migration-conflicting-packages-for-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string...`
- OpenAPI response codes: `200`, `401`, `403`

```ts
import github from "@utdk/github";

type PackagesListDockerMigrationConflictingPackagesForOrganizationInput = Parameters<typeof github.packages.listDockerMigrationConflictingPackagesForOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesListDockerMigrationConflictingPackagesForOrganizationOutput = Awaited<ReturnType<typeof github.packages.listDockerMigrationConflictingPackagesForOrganization>>;

const input: PackagesListDockerMigrationConflictingPackagesForOrganizationInput = {} as { org: string };
const result: PackagesListDockerMigrationConflictingPackagesForOrganizationOutput = await github.packages.listDockerMigrationConflictingPackagesForOrganization(input);

// Result shape (from schema): ({ id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string...
```

### `github.packages.listPackagesForOrganization`

- **HTTP**: `GET /orgs/{org}/packages`
- **What it does**: List packages for an organization
- **OpenAPI operationId**: `packages/list-packages-for-organization`
- **Path params**: None
- **Query params**: `package_type`, `page`, `per_page`
- **Response codes**: `200`, `400`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; visibility?: "public" | "private" | "internal"; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string...`
- OpenAPI response codes: `200`, `400`, `401`, `403`

```ts
import github from "@utdk/github";

type PackagesListPackagesForOrganizationInput = Parameters<typeof github.packages.listPackagesForOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesListPackagesForOrganizationOutput = Awaited<ReturnType<typeof github.packages.listPackagesForOrganization>>;

const input: PackagesListPackagesForOrganizationInput = {} as { org: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; visibility?: "public" | "private" | "internal"; page?: number; per_page?: number };
const result: PackagesListPackagesForOrganizationOutput = await github.packages.listPackagesForOrganization(input);

// Result shape (from schema): ({ id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string...
```

### `github.packages.deletePackageForOrg`

- **HTTP**: `DELETE /orgs/{org}/packages/{package_type}/{package_name}`
- **What it does**: Delete a package for an organization
- **OpenAPI operationId**: `packages/delete-package-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type PackagesDeletePackageForOrgInput = Parameters<typeof github.packages.deletePackageForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesDeletePackageForOrgOutput = Awaited<ReturnType<typeof github.packages.deletePackageForOrg>>;

const input: PackagesDeletePackageForOrgInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; org: string };
const result: PackagesDeletePackageForOrgOutput = await github.packages.deletePackageForOrg(input);

// Result shape (from schema): unknown
```

### `github.packages.getPackageForOrganization`

- **HTTP**: `GET /orgs/{org}/packages/{package_type}/{package_name}`
- **What it does**: Get a package for an organization
- **OpenAPI operationId**: `packages/get-package-for-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string ...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type PackagesGetPackageForOrganizationInput = Parameters<typeof github.packages.getPackageForOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesGetPackageForOrganizationOutput = Awaited<ReturnType<typeof github.packages.getPackageForOrganization>>;

const input: PackagesGetPackageForOrganizationInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; org: string };
const result: PackagesGetPackageForOrganizationOutput = await github.packages.getPackageForOrganization(input);

// Result shape (from schema): { id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string ...
```

### `github.packages.restorePackageForOrg`

- **HTTP**: `POST /orgs/{org}/packages/{package_type}/{package_name}/restore`
- **What it does**: Restore a package for an organization
- **OpenAPI operationId**: `packages/restore-package-for-org`
- **Path params**: None
- **Query params**: `token`
- **Response codes**: `204`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; org: string; token?: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type PackagesRestorePackageForOrgInput = Parameters<typeof github.packages.restorePackageForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesRestorePackageForOrgOutput = Awaited<ReturnType<typeof github.packages.restorePackageForOrg>>;

const input: PackagesRestorePackageForOrgInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; org: string; token?: string };
const result: PackagesRestorePackageForOrgOutput = await github.packages.restorePackageForOrg(input);

// Result shape (from schema): unknown
```

### `github.packages.getAllPackageVersionsForPackageOwnedByOrg`

- **HTTP**: `GET /orgs/{org}/packages/{package_type}/{package_name}/versions`
- **What it does**: List package versions for a package owned by an organization
- **OpenAPI operationId**: `packages/get-all-package-versions-for-package-owned-by-org`
- **Path params**: None
- **Query params**: `state`
- **Response codes**: `200`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; org: string; page?: number; per_page?: number; state?: "active" | "deleted" }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; name: string; url: string; package_html_url: string; html_url?: string; license?: string; description?: string; created_at: string; updated_at: string; deleted_at?: string; metadata?: { package_type: "npm...`
- OpenAPI response codes: `200`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type PackagesGetAllPackageVersionsForPackageOwnedByOrgInput = Parameters<typeof github.packages.getAllPackageVersionsForPackageOwnedByOrg> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesGetAllPackageVersionsForPackageOwnedByOrgOutput = Awaited<ReturnType<typeof github.packages.getAllPackageVersionsForPackageOwnedByOrg>>;

const input: PackagesGetAllPackageVersionsForPackageOwnedByOrgInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; org: string; page?: number; per_page?: number; state?: "active" | "deleted" };
const result: PackagesGetAllPackageVersionsForPackageOwnedByOrgOutput = await github.packages.getAllPackageVersionsForPackageOwnedByOrg(input);

// Result shape (from schema): ({ id: number; name: string; url: string; package_html_url: string; html_url?: string; license?: string; description?: string; created_at: string; updated_at: string; deleted_at?: string; metadata?: { package_type: "npm...
```

### `github.packages.deletePackageVersionForOrg`

- **HTTP**: `DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}`
- **What it does**: Delete package version for an organization
- **OpenAPI operationId**: `packages/delete-package-version-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; org: string; package_version_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type PackagesDeletePackageVersionForOrgInput = Parameters<typeof github.packages.deletePackageVersionForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesDeletePackageVersionForOrgOutput = Awaited<ReturnType<typeof github.packages.deletePackageVersionForOrg>>;

const input: PackagesDeletePackageVersionForOrgInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; org: string; package_version_id: number };
const result: PackagesDeletePackageVersionForOrgOutput = await github.packages.deletePackageVersionForOrg(input);

// Result shape (from schema): unknown
```

### `github.packages.getPackageVersionForOrganization`

- **HTTP**: `GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}`
- **What it does**: Get a package version for an organization
- **OpenAPI operationId**: `packages/get-package-version-for-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; org: string; package_version_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; url: string; package_html_url: string; html_url?: string; license?: string; description?: string; created_at: string; updated_at: string; deleted_at?: string; metadata?: { package_type: "npm"...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type PackagesGetPackageVersionForOrganizationInput = Parameters<typeof github.packages.getPackageVersionForOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesGetPackageVersionForOrganizationOutput = Awaited<ReturnType<typeof github.packages.getPackageVersionForOrganization>>;

const input: PackagesGetPackageVersionForOrganizationInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; org: string; package_version_id: number };
const result: PackagesGetPackageVersionForOrganizationOutput = await github.packages.getPackageVersionForOrganization(input);

// Result shape (from schema): { id: number; name: string; url: string; package_html_url: string; html_url?: string; license?: string; description?: string; created_at: string; updated_at: string; deleted_at?: string; metadata?: { package_type: "npm"...
```

### `github.packages.restorePackageVersionForOrg`

- **HTTP**: `POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore`
- **What it does**: Restore package version for an organization
- **OpenAPI operationId**: `packages/restore-package-version-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; org: string; package_version_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type PackagesRestorePackageVersionForOrgInput = Parameters<typeof github.packages.restorePackageVersionForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesRestorePackageVersionForOrgOutput = Awaited<ReturnType<typeof github.packages.restorePackageVersionForOrg>>;

const input: PackagesRestorePackageVersionForOrgInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; org: string; package_version_id: number };
const result: PackagesRestorePackageVersionForOrgOutput = await github.packages.restorePackageVersionForOrg(input);

// Result shape (from schema): unknown
```

### `github.packages.listDockerMigrationConflictingPackagesForAuthenticatedUser`

- **HTTP**: `GET /user/docker/conflicts`
- **What it does**: Get list of conflicting packages during Docker migration for authenticated-user
- **OpenAPI operationId**: `packages/list-docker-migration-conflicting-packages-for-authenticated-user`
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

- Client return type: `({ id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type PackagesListDockerMigrationConflictingPackagesForAuthenticatedUserInput = Parameters<typeof github.packages.listDockerMigrationConflictingPackagesForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesListDockerMigrationConflictingPackagesForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.packages.listDockerMigrationConflictingPackagesForAuthenticatedUser>>;

const result: PackagesListDockerMigrationConflictingPackagesForAuthenticatedUserOutput = await github.packages.listDockerMigrationConflictingPackagesForAuthenticatedUser();

// Result shape (from schema): ({ id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string...
```

### `github.packages.listPackagesForAuthenticatedUser`

- **HTTP**: `GET /user/packages`
- **What it does**: List packages for the authenticated user's namespace
- **OpenAPI operationId**: `packages/list-packages-for-authenticated-user`
- **Path params**: None
- **Query params**: `package_type`
- **Response codes**: `200`, `400`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; visibility?: "public" | "private" | "internal"; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string...`
- OpenAPI response codes: `200`, `400`

```ts
import github from "@utdk/github";

type PackagesListPackagesForAuthenticatedUserInput = Parameters<typeof github.packages.listPackagesForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesListPackagesForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.packages.listPackagesForAuthenticatedUser>>;

const input: PackagesListPackagesForAuthenticatedUserInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; visibility?: "public" | "private" | "internal"; page?: number; per_page?: number };
const result: PackagesListPackagesForAuthenticatedUserOutput = await github.packages.listPackagesForAuthenticatedUser(input);

// Result shape (from schema): ({ id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string...
```

### `github.packages.deletePackageForAuthenticatedUser`

- **HTTP**: `DELETE /user/packages/{package_type}/{package_name}`
- **What it does**: Delete a package for the authenticated user
- **OpenAPI operationId**: `packages/delete-package-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type PackagesDeletePackageForAuthenticatedUserInput = Parameters<typeof github.packages.deletePackageForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesDeletePackageForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.packages.deletePackageForAuthenticatedUser>>;

const input: PackagesDeletePackageForAuthenticatedUserInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string };
const result: PackagesDeletePackageForAuthenticatedUserOutput = await github.packages.deletePackageForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.packages.getPackageForAuthenticatedUser`

- **HTTP**: `GET /user/packages/{package_type}/{package_name}`
- **What it does**: Get a package for the authenticated user
- **OpenAPI operationId**: `packages/get-package-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string ...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type PackagesGetPackageForAuthenticatedUserInput = Parameters<typeof github.packages.getPackageForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesGetPackageForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.packages.getPackageForAuthenticatedUser>>;

const input: PackagesGetPackageForAuthenticatedUserInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string };
const result: PackagesGetPackageForAuthenticatedUserOutput = await github.packages.getPackageForAuthenticatedUser(input);

// Result shape (from schema): { id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string ...
```

### `github.packages.restorePackageForAuthenticatedUser`

- **HTTP**: `POST /user/packages/{package_type}/{package_name}/restore`
- **What it does**: Restore a package for the authenticated user
- **OpenAPI operationId**: `packages/restore-package-for-authenticated-user`
- **Path params**: None
- **Query params**: `token`
- **Response codes**: `204`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; token?: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type PackagesRestorePackageForAuthenticatedUserInput = Parameters<typeof github.packages.restorePackageForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesRestorePackageForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.packages.restorePackageForAuthenticatedUser>>;

const input: PackagesRestorePackageForAuthenticatedUserInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; token?: string };
const result: PackagesRestorePackageForAuthenticatedUserOutput = await github.packages.restorePackageForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.packages.getAllPackageVersionsForPackageOwnedByAuthenticatedUser`

- **HTTP**: `GET /user/packages/{package_type}/{package_name}/versions`
- **What it does**: List package versions for a package owned by the authenticated user
- **OpenAPI operationId**: `packages/get-all-package-versions-for-package-owned-by-authenticated-user`
- **Path params**: None
- **Query params**: `state`
- **Response codes**: `200`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; page?: number; per_page?: number; state?: "active" | "deleted" }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; name: string; url: string; package_html_url: string; html_url?: string; license?: string; description?: string; created_at: string; updated_at: string; deleted_at?: string; metadata?: { package_type: "npm...`
- OpenAPI response codes: `200`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserInput = Parameters<typeof github.packages.getAllPackageVersionsForPackageOwnedByAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserOutput = Awaited<ReturnType<typeof github.packages.getAllPackageVersionsForPackageOwnedByAuthenticatedUser>>;

const input: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; page?: number; per_page?: number; state?: "active" | "deleted" };
const result: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserOutput = await github.packages.getAllPackageVersionsForPackageOwnedByAuthenticatedUser(input);

// Result shape (from schema): ({ id: number; name: string; url: string; package_html_url: string; html_url?: string; license?: string; description?: string; created_at: string; updated_at: string; deleted_at?: string; metadata?: { package_type: "npm...
```

### `github.packages.deletePackageVersionForAuthenticatedUser`

- **HTTP**: `DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}`
- **What it does**: Delete a package version for the authenticated user
- **OpenAPI operationId**: `packages/delete-package-version-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; package_version_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type PackagesDeletePackageVersionForAuthenticatedUserInput = Parameters<typeof github.packages.deletePackageVersionForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesDeletePackageVersionForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.packages.deletePackageVersionForAuthenticatedUser>>;

const input: PackagesDeletePackageVersionForAuthenticatedUserInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; package_version_id: number };
const result: PackagesDeletePackageVersionForAuthenticatedUserOutput = await github.packages.deletePackageVersionForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.packages.getPackageVersionForAuthenticatedUser`

- **HTTP**: `GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}`
- **What it does**: Get a package version for the authenticated user
- **OpenAPI operationId**: `packages/get-package-version-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; package_version_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; url: string; package_html_url: string; html_url?: string; license?: string; description?: string; created_at: string; updated_at: string; deleted_at?: string; metadata?: { package_type: "npm"...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type PackagesGetPackageVersionForAuthenticatedUserInput = Parameters<typeof github.packages.getPackageVersionForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesGetPackageVersionForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.packages.getPackageVersionForAuthenticatedUser>>;

const input: PackagesGetPackageVersionForAuthenticatedUserInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; package_version_id: number };
const result: PackagesGetPackageVersionForAuthenticatedUserOutput = await github.packages.getPackageVersionForAuthenticatedUser(input);

// Result shape (from schema): { id: number; name: string; url: string; package_html_url: string; html_url?: string; license?: string; description?: string; created_at: string; updated_at: string; deleted_at?: string; metadata?: { package_type: "npm"...
```

### `github.packages.restorePackageVersionForAuthenticatedUser`

- **HTTP**: `POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore`
- **What it does**: Restore a package version for the authenticated user
- **OpenAPI operationId**: `packages/restore-package-version-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; package_version_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type PackagesRestorePackageVersionForAuthenticatedUserInput = Parameters<typeof github.packages.restorePackageVersionForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesRestorePackageVersionForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.packages.restorePackageVersionForAuthenticatedUser>>;

const input: PackagesRestorePackageVersionForAuthenticatedUserInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; package_version_id: number };
const result: PackagesRestorePackageVersionForAuthenticatedUserOutput = await github.packages.restorePackageVersionForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.packages.listDockerMigrationConflictingPackagesForUser`

- **HTTP**: `GET /users/{username}/docker/conflicts`
- **What it does**: Get list of conflicting packages during Docker migration for user
- **OpenAPI operationId**: `packages/list-docker-migration-conflicting-packages-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string...`
- OpenAPI response codes: `200`, `401`, `403`

```ts
import github from "@utdk/github";

type PackagesListDockerMigrationConflictingPackagesForUserInput = Parameters<typeof github.packages.listDockerMigrationConflictingPackagesForUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesListDockerMigrationConflictingPackagesForUserOutput = Awaited<ReturnType<typeof github.packages.listDockerMigrationConflictingPackagesForUser>>;

const input: PackagesListDockerMigrationConflictingPackagesForUserInput = {} as { username: string };
const result: PackagesListDockerMigrationConflictingPackagesForUserOutput = await github.packages.listDockerMigrationConflictingPackagesForUser(input);

// Result shape (from schema): ({ id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string...
```

### `github.packages.listPackagesForUser`

- **HTTP**: `GET /users/{username}/packages`
- **What it does**: List packages for a user
- **OpenAPI operationId**: `packages/list-packages-for-user`
- **Path params**: None
- **Query params**: `package_type`
- **Response codes**: `200`, `400`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; visibility?: "public" | "private" | "internal"; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string...`
- OpenAPI response codes: `200`, `400`, `401`, `403`

```ts
import github from "@utdk/github";

type PackagesListPackagesForUserInput = Parameters<typeof github.packages.listPackagesForUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesListPackagesForUserOutput = Awaited<ReturnType<typeof github.packages.listPackagesForUser>>;

const input: PackagesListPackagesForUserInput = {} as { username: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; visibility?: "public" | "private" | "internal"; page?: number; per_page?: number };
const result: PackagesListPackagesForUserOutput = await github.packages.listPackagesForUser(input);

// Result shape (from schema): ({ id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string...
```

### `github.packages.deletePackageForUser`

- **HTTP**: `DELETE /users/{username}/packages/{package_type}/{package_name}`
- **What it does**: Delete a package for a user
- **OpenAPI operationId**: `packages/delete-package-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type PackagesDeletePackageForUserInput = Parameters<typeof github.packages.deletePackageForUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesDeletePackageForUserOutput = Awaited<ReturnType<typeof github.packages.deletePackageForUser>>;

const input: PackagesDeletePackageForUserInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; username: string };
const result: PackagesDeletePackageForUserOutput = await github.packages.deletePackageForUser(input);

// Result shape (from schema): unknown
```

### `github.packages.getPackageForUser`

- **HTTP**: `GET /users/{username}/packages/{package_type}/{package_name}`
- **What it does**: Get a package for a user
- **OpenAPI operationId**: `packages/get-package-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string ...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type PackagesGetPackageForUserInput = Parameters<typeof github.packages.getPackageForUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesGetPackageForUserOutput = Awaited<ReturnType<typeof github.packages.getPackageForUser>>;

const input: PackagesGetPackageForUserInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; username: string };
const result: PackagesGetPackageForUserOutput = await github.packages.getPackageForUser(input);

// Result shape (from schema): { id: number; name: string; package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; url: string; html_url: string; version_count: number; visibility: "private" | "public"; owner?: { name?: string ...
```

### `github.packages.restorePackageForUser`

- **HTTP**: `POST /users/{username}/packages/{package_type}/{package_name}/restore`
- **What it does**: Restore a package for a user
- **OpenAPI operationId**: `packages/restore-package-for-user`
- **Path params**: None
- **Query params**: `token`
- **Response codes**: `204`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; username: string; token?: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type PackagesRestorePackageForUserInput = Parameters<typeof github.packages.restorePackageForUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesRestorePackageForUserOutput = Awaited<ReturnType<typeof github.packages.restorePackageForUser>>;

const input: PackagesRestorePackageForUserInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; username: string; token?: string };
const result: PackagesRestorePackageForUserOutput = await github.packages.restorePackageForUser(input);

// Result shape (from schema): unknown
```

### `github.packages.getAllPackageVersionsForPackageOwnedByUser`

- **HTTP**: `GET /users/{username}/packages/{package_type}/{package_name}/versions`
- **What it does**: List package versions for a package owned by a user
- **OpenAPI operationId**: `packages/get-all-package-versions-for-package-owned-by-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; name: string; url: string; package_html_url: string; html_url?: string; license?: string; description?: string; created_at: string; updated_at: string; deleted_at?: string; metadata?: { package_type: "npm...`
- OpenAPI response codes: `200`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type PackagesGetAllPackageVersionsForPackageOwnedByUserInput = Parameters<typeof github.packages.getAllPackageVersionsForPackageOwnedByUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesGetAllPackageVersionsForPackageOwnedByUserOutput = Awaited<ReturnType<typeof github.packages.getAllPackageVersionsForPackageOwnedByUser>>;

const input: PackagesGetAllPackageVersionsForPackageOwnedByUserInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; username: string };
const result: PackagesGetAllPackageVersionsForPackageOwnedByUserOutput = await github.packages.getAllPackageVersionsForPackageOwnedByUser(input);

// Result shape (from schema): ({ id: number; name: string; url: string; package_html_url: string; html_url?: string; license?: string; description?: string; created_at: string; updated_at: string; deleted_at?: string; metadata?: { package_type: "npm...
```

### `github.packages.deletePackageVersionForUser`

- **HTTP**: `DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}`
- **What it does**: Delete package version for a user
- **OpenAPI operationId**: `packages/delete-package-version-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; username: string; package_version_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type PackagesDeletePackageVersionForUserInput = Parameters<typeof github.packages.deletePackageVersionForUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesDeletePackageVersionForUserOutput = Awaited<ReturnType<typeof github.packages.deletePackageVersionForUser>>;

const input: PackagesDeletePackageVersionForUserInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; username: string; package_version_id: number };
const result: PackagesDeletePackageVersionForUserOutput = await github.packages.deletePackageVersionForUser(input);

// Result shape (from schema): unknown
```

### `github.packages.getPackageVersionForUser`

- **HTTP**: `GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}`
- **What it does**: Get a package version for a user
- **OpenAPI operationId**: `packages/get-package-version-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; package_version_id: number; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; url: string; package_html_url: string; html_url?: string; license?: string; description?: string; created_at: string; updated_at: string; deleted_at?: string; metadata?: { package_type: "npm"...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type PackagesGetPackageVersionForUserInput = Parameters<typeof github.packages.getPackageVersionForUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesGetPackageVersionForUserOutput = Awaited<ReturnType<typeof github.packages.getPackageVersionForUser>>;

const input: PackagesGetPackageVersionForUserInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; package_version_id: number; username: string };
const result: PackagesGetPackageVersionForUserOutput = await github.packages.getPackageVersionForUser(input);

// Result shape (from schema): { id: number; name: string; url: string; package_html_url: string; html_url?: string; license?: string; description?: string; created_at: string; updated_at: string; deleted_at?: string; metadata?: { package_type: "npm"...
```

### `github.packages.restorePackageVersionForUser`

- **HTTP**: `POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore`
- **What it does**: Restore package version for a user
- **OpenAPI operationId**: `packages/restore-package-version-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; username: string; package_version_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type PackagesRestorePackageVersionForUserInput = Parameters<typeof github.packages.restorePackageVersionForUser> extends [infer T, ...unknown[]] ? T : undefined;
type PackagesRestorePackageVersionForUserOutput = Awaited<ReturnType<typeof github.packages.restorePackageVersionForUser>>;

const input: PackagesRestorePackageVersionForUserInput = {} as { package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container"; package_name: string; username: string; package_version_id: number };
const result: PackagesRestorePackageVersionForUserOutput = await github.packages.restorePackageVersionForUser(input);

// Result shape (from schema): unknown
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
