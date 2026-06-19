# Enterprise Teams

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.enterpriseTeams.list`

- **HTTP**: `GET /enterprises/{enterprise}/teams`
- **What it does**: List enterprise teams
- **OpenAPI operationId**: `enterprise-teams/list`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; name: string; description?: string; slug: string; url: string; sync_to_organizations?: string; organization_selection_type?: string; group_id: string | null; group_name?: string | null; html_url: string; ...`
- OpenAPI response codes: `200`, `403`

```ts
import github from "@utdk/github";

type EnterpriseTeamsListInput = Parameters<typeof github.enterpriseTeams.list> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamsListOutput = Awaited<ReturnType<typeof github.enterpriseTeams.list>>;

const input: EnterpriseTeamsListInput = {} as { enterprise: string; per_page?: number; page?: number };
const result: EnterpriseTeamsListOutput = await github.enterpriseTeams.list(input);

// Result shape (from schema): ({ id: number; name: string; description?: string; slug: string; url: string; sync_to_organizations?: string; organization_selection_type?: string; group_id: string | null; group_name?: string | null; html_url: string; ...
```

### `github.enterpriseTeams.create`

- **HTTP**: `POST /enterprises/{enterprise}/teams`
- **What it does**: Create an enterprise team
- **OpenAPI operationId**: `enterprise-teams/create`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; description?: string | null; sync_to_organizations?: "all" | "disabled"; organization_selection_type?: "disabled" | "selected" | "all"; group_id?: string | null; notification_setting?: "notifications_enabled" | "notifications_disabled"; enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; description?: string; slug: string; url: string; sync_to_organizations?: string; organization_selection_type?: string; group_id: string | null; group_name?: string | null; html_url: string; m...`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type EnterpriseTeamsCreateInput = Parameters<typeof github.enterpriseTeams.create> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamsCreateOutput = Awaited<ReturnType<typeof github.enterpriseTeams.create>>;

const input: EnterpriseTeamsCreateInput = {} as { name: string; description?: string | null; sync_to_organizations?: "all" | "disabled"; organization_selection_type?: "disabled" | "selected" | "all"; group_id?: string | null; notification_setting?: "notifications_enabled" | "notifications_disabled"; enterprise: string };
const result: EnterpriseTeamsCreateOutput = await github.enterpriseTeams.create(input);

// Result shape (from schema): { id: number; name: string; description?: string; slug: string; url: string; sync_to_organizations?: string; organization_selection_type?: string; group_id: string | null; group_name?: string | null; html_url: string; m...
```

### `github.enterpriseTeams.delete`

- **HTTP**: `DELETE /enterprises/{enterprise}/teams/{team_slug}`
- **What it does**: Delete an enterprise team
- **OpenAPI operationId**: `enterprise-teams/delete`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; team_slug: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`

```ts
import github from "@utdk/github";

type EnterpriseTeamsDeleteInput = Parameters<typeof github.enterpriseTeams.delete> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamsDeleteOutput = Awaited<ReturnType<typeof github.enterpriseTeams.delete>>;

const input: EnterpriseTeamsDeleteInput = {} as { enterprise: string; team_slug: string };
const result: EnterpriseTeamsDeleteOutput = await github.enterpriseTeams.delete(input);

// Result shape (from schema): unknown
```

### `github.enterpriseTeams.get`

- **HTTP**: `GET /enterprises/{enterprise}/teams/{team_slug}`
- **What it does**: Get an enterprise team
- **OpenAPI operationId**: `enterprise-teams/get`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; team_slug: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; description?: string; slug: string; url: string; sync_to_organizations?: string; organization_selection_type?: string; group_id: string | null; group_name?: string | null; html_url: string; m...`
- OpenAPI response codes: `200`, `403`

```ts
import github from "@utdk/github";

type EnterpriseTeamsGetInput = Parameters<typeof github.enterpriseTeams.get> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamsGetOutput = Awaited<ReturnType<typeof github.enterpriseTeams.get>>;

const input: EnterpriseTeamsGetInput = {} as { enterprise: string; team_slug: string };
const result: EnterpriseTeamsGetOutput = await github.enterpriseTeams.get(input);

// Result shape (from schema): { id: number; name: string; description?: string; slug: string; url: string; sync_to_organizations?: string; organization_selection_type?: string; group_id: string | null; group_name?: string | null; html_url: string; m...
```

### `github.enterpriseTeams.update`

- **HTTP**: `PATCH /enterprises/{enterprise}/teams/{team_slug}`
- **What it does**: Update an enterprise team
- **OpenAPI operationId**: `enterprise-teams/update`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string | null; description?: string | null; sync_to_organizations?: "all" | "disabled"; organization_selection_type?: "disabled" | "selected" | "all"; group_id?: string | null; notification_setting?: "notifications_enabled" | "notifications_disabled"; enterprise: string; team_slug: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; description?: string; slug: string; url: string; sync_to_organizations?: string; organization_selection_type?: string; group_id: string | null; group_name?: string | null; html_url: string; m...`
- OpenAPI response codes: `200`, `403`

```ts
import github from "@utdk/github";

type EnterpriseTeamsUpdateInput = Parameters<typeof github.enterpriseTeams.update> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamsUpdateOutput = Awaited<ReturnType<typeof github.enterpriseTeams.update>>;

const input: EnterpriseTeamsUpdateInput = {} as { name?: string | null; description?: string | null; sync_to_organizations?: "all" | "disabled"; organization_selection_type?: "disabled" | "selected" | "all"; group_id?: string | null; notification_setting?: "notifications_enabled" | "notifications_disabled"; enterprise: string; team_slug: string };
const result: EnterpriseTeamsUpdateOutput = await github.enterpriseTeams.update(input);

// Result shape (from schema): { id: number; name: string; description?: string; slug: string; url: string; sync_to_organizations?: string; organization_selection_type?: string; group_id: string | null; group_name?: string | null; html_url: string; m...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
