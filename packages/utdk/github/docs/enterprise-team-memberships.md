# Enterprise Team Memberships

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.enterpriseTeamMemberships.list`

- **HTTP**: `GET /enterprises/{enterprise}/teams/{enterprise-team}/memberships`
- **What it does**: List members in an enterprise team
- **OpenAPI operationId**: `enterprise-team-memberships/list`
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

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type EnterpriseTeamMembershipsListInput = Parameters<typeof github.enterpriseTeamMemberships.list> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamMembershipsListOutput = Awaited<ReturnType<typeof github.enterpriseTeamMemberships.list>>;

const input: EnterpriseTeamMembershipsListInput = {} as { enterprise: string; "enterprise-team": string; per_page?: number; page?: number };
const result: EnterpriseTeamMembershipsListOutput = await github.enterpriseTeamMemberships.list(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.enterpriseTeamMemberships.remove`

- **HTTP**: `DELETE /enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}`
- **What it does**: Remove team membership
- **OpenAPI operationId**: `enterprise-team-memberships/remove`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; "enterprise-team": string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`

```ts
import github from "@utdk/github";

type EnterpriseTeamMembershipsRemoveInput = Parameters<typeof github.enterpriseTeamMemberships.remove> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamMembershipsRemoveOutput = Awaited<ReturnType<typeof github.enterpriseTeamMemberships.remove>>;

const input: EnterpriseTeamMembershipsRemoveInput = {} as { enterprise: string; "enterprise-team": string; username: string };
const result: EnterpriseTeamMembershipsRemoveOutput = await github.enterpriseTeamMemberships.remove(input);

// Result shape (from schema): unknown
```

### `github.enterpriseTeamMemberships.get`

- **HTTP**: `GET /enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}`
- **What it does**: Get enterprise team membership
- **OpenAPI operationId**: `enterprise-team-memberships/get`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; "enterprise-team": string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gis...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type EnterpriseTeamMembershipsGetInput = Parameters<typeof github.enterpriseTeamMemberships.get> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamMembershipsGetOutput = Awaited<ReturnType<typeof github.enterpriseTeamMemberships.get>>;

const input: EnterpriseTeamMembershipsGetInput = {} as { enterprise: string; "enterprise-team": string; username: string };
const result: EnterpriseTeamMembershipsGetOutput = await github.enterpriseTeamMemberships.get(input);

// Result shape (from schema): { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gis...
```

### `github.enterpriseTeamMemberships.add`

- **HTTP**: `PUT /enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}`
- **What it does**: Add team member
- **OpenAPI operationId**: `enterprise-team-memberships/add`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; "enterprise-team": string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gis...`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type EnterpriseTeamMembershipsAddInput = Parameters<typeof github.enterpriseTeamMemberships.add> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamMembershipsAddOutput = Awaited<ReturnType<typeof github.enterpriseTeamMemberships.add>>;

const input: EnterpriseTeamMembershipsAddInput = {} as { enterprise: string; "enterprise-team": string; username: string };
const result: EnterpriseTeamMembershipsAddOutput = await github.enterpriseTeamMemberships.add(input);

// Result shape (from schema): { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gis...
```

### `github.enterpriseTeamMemberships.bulkAdd`

- **HTTP**: `POST /enterprises/{enterprise}/teams/{enterprise-team}/memberships/add`
- **What it does**: Bulk add team members
- **OpenAPI operationId**: `enterprise-team-memberships/bulk-add`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ usernames: (string)[]; enterprise: string; "enterprise-team": string }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type EnterpriseTeamMembershipsBulkAddInput = Parameters<typeof github.enterpriseTeamMemberships.bulkAdd> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamMembershipsBulkAddOutput = Awaited<ReturnType<typeof github.enterpriseTeamMemberships.bulkAdd>>;

const input: EnterpriseTeamMembershipsBulkAddInput = {} as { usernames: (string)[]; enterprise: string; "enterprise-team": string };
const result: EnterpriseTeamMembershipsBulkAddOutput = await github.enterpriseTeamMemberships.bulkAdd(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.enterpriseTeamMemberships.bulkRemove`

- **HTTP**: `POST /enterprises/{enterprise}/teams/{enterprise-team}/memberships/remove`
- **What it does**: Bulk remove team members
- **OpenAPI operationId**: `enterprise-team-memberships/bulk-remove`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ usernames: (string)[]; enterprise: string; "enterprise-team": string }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type EnterpriseTeamMembershipsBulkRemoveInput = Parameters<typeof github.enterpriseTeamMemberships.bulkRemove> extends [infer T, ...unknown[]] ? T : undefined;
type EnterpriseTeamMembershipsBulkRemoveOutput = Awaited<ReturnType<typeof github.enterpriseTeamMemberships.bulkRemove>>;

const input: EnterpriseTeamMembershipsBulkRemoveInput = {} as { usernames: (string)[]; enterprise: string; "enterprise-team": string };
const result: EnterpriseTeamMembershipsBulkRemoveOutput = await github.enterpriseTeamMemberships.bulkRemove(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
