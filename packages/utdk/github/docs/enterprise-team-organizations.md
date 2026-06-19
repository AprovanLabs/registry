# Enterprise Team Organizations

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.enterpriseTeamOrganizations.getAssignments`

- **HTTP**: `GET /enterprises/{enterprise}/teams/{enterprise-team}/organizations`
- **What it does**: Get organization assignments
- **OpenAPI operationId**: `enterprise-team-organizations/get-assignments`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; "enterprise-team": string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description:...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type EnterpriseTeamOrganizationsGetAssignmentsInput = Parameters<typeof github.enterpriseTeamOrganizations.getAssignments> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamOrganizationsGetAssignmentsOutput = Awaited<ReturnType<typeof github.enterpriseTeamOrganizations.getAssignments>>;

const input: EnterpriseTeamOrganizationsGetAssignmentsInput = {} as { enterprise: string; "enterprise-team": string; per_page?: number; page?: number };
const result: EnterpriseTeamOrganizationsGetAssignmentsOutput = await github.enterpriseTeamOrganizations.getAssignments(input);

// Result shape (from schema): ({ login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description:...
```

### `github.enterpriseTeamOrganizations.delete`

- **HTTP**: `DELETE /enterprises/{enterprise}/teams/{enterprise-team}/organizations/{org}`
- **What it does**: Delete an organization assignment
- **OpenAPI operationId**: `enterprise-team-organizations/delete`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; "enterprise-team": string; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type EnterpriseTeamOrganizationsDeleteInput = Parameters<typeof github.enterpriseTeamOrganizations.delete> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamOrganizationsDeleteOutput = Awaited<ReturnType<typeof github.enterpriseTeamOrganizations.delete>>;

const input: EnterpriseTeamOrganizationsDeleteInput = {} as { enterprise: string; "enterprise-team": string; org: string };
const result: EnterpriseTeamOrganizationsDeleteOutput = await github.enterpriseTeamOrganizations.delete(input);

// Result shape (from schema): unknown
```

### `github.enterpriseTeamOrganizations.getAssignment`

- **HTTP**: `GET /enterprises/{enterprise}/teams/{enterprise-team}/organizations/{org}`
- **What it does**: Get organization assignment
- **OpenAPI operationId**: `enterprise-team-organizations/get-assignment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; "enterprise-team": string; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description: ...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type EnterpriseTeamOrganizationsGetAssignmentInput = Parameters<typeof github.enterpriseTeamOrganizations.getAssignment> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamOrganizationsGetAssignmentOutput = Awaited<ReturnType<typeof github.enterpriseTeamOrganizations.getAssignment>>;

const input: EnterpriseTeamOrganizationsGetAssignmentInput = {} as { enterprise: string; "enterprise-team": string; org: string };
const result: EnterpriseTeamOrganizationsGetAssignmentOutput = await github.enterpriseTeamOrganizations.getAssignment(input);

// Result shape (from schema): { login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description: ...
```

### `github.enterpriseTeamOrganizations.add`

- **HTTP**: `PUT /enterprises/{enterprise}/teams/{enterprise-team}/organizations/{org}`
- **What it does**: Add an organization assignment
- **OpenAPI operationId**: `enterprise-team-organizations/add`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; "enterprise-team": string; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description: ...`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type EnterpriseTeamOrganizationsAddInput = Parameters<typeof github.enterpriseTeamOrganizations.add> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamOrganizationsAddOutput = Awaited<ReturnType<typeof github.enterpriseTeamOrganizations.add>>;

const input: EnterpriseTeamOrganizationsAddInput = {} as { enterprise: string; "enterprise-team": string; org: string };
const result: EnterpriseTeamOrganizationsAddOutput = await github.enterpriseTeamOrganizations.add(input);

// Result shape (from schema): { login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description: ...
```

### `github.enterpriseTeamOrganizations.bulkAdd`

- **HTTP**: `POST /enterprises/{enterprise}/teams/{enterprise-team}/organizations/add`
- **What it does**: Add organization assignments
- **OpenAPI operationId**: `enterprise-team-organizations/bulk-add`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ organization_slugs: (string)[]; enterprise: string; "enterprise-team": string }`
- Client transport options: None

**Outputs**

- Client return type: `({ login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description:...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type EnterpriseTeamOrganizationsBulkAddInput = Parameters<typeof github.enterpriseTeamOrganizations.bulkAdd> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamOrganizationsBulkAddOutput = Awaited<ReturnType<typeof github.enterpriseTeamOrganizations.bulkAdd>>;

const input: EnterpriseTeamOrganizationsBulkAddInput = {} as { organization_slugs: (string)[]; enterprise: string; "enterprise-team": string };
const result: EnterpriseTeamOrganizationsBulkAddOutput = await github.enterpriseTeamOrganizations.bulkAdd(input);

// Result shape (from schema): ({ login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description:...
```

### `github.enterpriseTeamOrganizations.bulkRemove`

- **HTTP**: `POST /enterprises/{enterprise}/teams/{enterprise-team}/organizations/remove`
- **What it does**: Remove organization assignments
- **OpenAPI operationId**: `enterprise-team-organizations/bulk-remove`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ organization_slugs: (string)[]; enterprise: string; "enterprise-team": string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type EnterpriseTeamOrganizationsBulkRemoveInput = Parameters<typeof github.enterpriseTeamOrganizations.bulkRemove> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamOrganizationsBulkRemoveOutput = Awaited<ReturnType<typeof github.enterpriseTeamOrganizations.bulkRemove>>;

const input: EnterpriseTeamOrganizationsBulkRemoveInput = {} as { organization_slugs: (string)[]; enterprise: string; "enterprise-team": string };
const result: EnterpriseTeamOrganizationsBulkRemoveOutput = await github.enterpriseTeamOrganizations.bulkRemove(input);

// Result shape (from schema): unknown
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
