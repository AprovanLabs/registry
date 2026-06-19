# Teams

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.teams.list`

- **HTTP**: `GET /orgs/{org}/teams`
- **What it does**: List teams
- **OpenAPI operationId**: `teams/list`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number; team_type?: "all" | "enterprise" | "organization" }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...`
- OpenAPI response codes: `200`, `403`

```ts
import github from "@utdk/github";

type TeamsListInput = Parameters<typeof github.teams.list> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsListOutput = Awaited<ReturnType<typeof github.teams.list>>;

const input: TeamsListInput = {} as { org: string; per_page?: number; page?: number; team_type?: "all" | "enterprise" | "organization" };
const result: TeamsListOutput = await github.teams.list(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...
```

### `github.teams.create`

- **HTTP**: `POST /orgs/{org}/teams`
- **What it does**: Create a team
- **OpenAPI operationId**: `teams/create`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; description?: string; maintainers?: (string)[]; repo_names?: (string)[]; privacy?: "secret" | "closed"; notification_setting?: "notifications_enabled" | "notifications_disabled"; permission?: "pull" | "push"; parent_team_id?: number; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; html_url: string; name: string; slug: string; description: string | null; privacy?: "closed" | "secret"; notification_setting?: "notifications_enabled" | "notifications_disabl...`
- OpenAPI response codes: `201`, `403`, `422`

```ts
import github from "@utdk/github";

type TeamsCreateInput = Parameters<typeof github.teams.create> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsCreateOutput = Awaited<ReturnType<typeof github.teams.create>>;

const input: TeamsCreateInput = {} as { name: string; description?: string; maintainers?: (string)[]; repo_names?: (string)[]; privacy?: "secret" | "closed"; notification_setting?: "notifications_enabled" | "notifications_disabled"; permission?: "pull" | "push"; parent_team_id?: number; org: string };
const result: TeamsCreateOutput = await github.teams.create(input);

// Result shape (from schema): { id: number; node_id: string; url: string; html_url: string; name: string; slug: string; description: string | null; privacy?: "closed" | "secret"; notification_setting?: "notifications_enabled" | "notifications_disabl...
```

### `github.teams.deleteInOrg`

- **HTTP**: `DELETE /orgs/{org}/teams/{team_slug}`
- **What it does**: Delete a team
- **OpenAPI operationId**: `teams/delete-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `422`

```ts
import github from "@utdk/github";

type TeamsDeleteInOrgInput = Parameters<typeof github.teams.deleteInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsDeleteInOrgOutput = Awaited<ReturnType<typeof github.teams.deleteInOrg>>;

const input: TeamsDeleteInOrgInput = {} as { org: string; team_slug: string };
const result: TeamsDeleteInOrgOutput = await github.teams.deleteInOrg(input);

// Result shape (from schema): unknown
```

### `github.teams.getByName`

- **HTTP**: `GET /orgs/{org}/teams/{team_slug}`
- **What it does**: Get a team by name
- **OpenAPI operationId**: `teams/get-by-name`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; html_url: string; name: string; slug: string; description: string | null; privacy?: "closed" | "secret"; notification_setting?: "notifications_enabled" | "notifications_disabl...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type TeamsGetByNameInput = Parameters<typeof github.teams.getByName> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsGetByNameOutput = Awaited<ReturnType<typeof github.teams.getByName>>;

const input: TeamsGetByNameInput = {} as { org: string; team_slug: string };
const result: TeamsGetByNameOutput = await github.teams.getByName(input);

// Result shape (from schema): { id: number; node_id: string; url: string; html_url: string; name: string; slug: string; description: string | null; privacy?: "closed" | "secret"; notification_setting?: "notifications_enabled" | "notifications_disabl...
```

### `github.teams.updateInOrg`

- **HTTP**: `PATCH /orgs/{org}/teams/{team_slug}`
- **What it does**: Update a team
- **OpenAPI operationId**: `teams/update-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `201`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; description?: string; privacy?: "secret" | "closed"; notification_setting?: "notifications_enabled" | "notifications_disabled"; permission?: "pull" | "push" | "admin"; parent_team_id?: number | null; org: string; team_slug: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; html_url: string; name: string; slug: string; description: string | null; privacy?: "closed" | "secret"; notification_setting?: "notifications_enabled" | "notifications_disabl...`
- OpenAPI response codes: `200`, `201`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type TeamsUpdateInOrgInput = Parameters<typeof github.teams.updateInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsUpdateInOrgOutput = Awaited<ReturnType<typeof github.teams.updateInOrg>>;

const input: TeamsUpdateInOrgInput = {} as { name?: string; description?: string; privacy?: "secret" | "closed"; notification_setting?: "notifications_enabled" | "notifications_disabled"; permission?: "pull" | "push" | "admin"; parent_team_id?: number | null; org: string; team_slug: string };
const result: TeamsUpdateInOrgOutput = await github.teams.updateInOrg(input);

// Result shape (from schema): { id: number; node_id: string; url: string; html_url: string; name: string; slug: string; description: string | null; privacy?: "closed" | "secret"; notification_setting?: "notifications_enabled" | "notifications_disabl...
```

### `github.teams.listPendingInvitationsInOrg`

- **HTTP**: `GET /orgs/{org}/teams/{team_slug}/invitations`
- **What it does**: List pending team invitations
- **OpenAPI operationId**: `teams/list-pending-invitations-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; login: string | null; email: string | null; role: string; created_at: string; failed_at?: string | null; failed_reason?: string | null; inviter: { name?: string | null; email?: string | null; login: strin...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type TeamsListPendingInvitationsInOrgInput = Parameters<typeof github.teams.listPendingInvitationsInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsListPendingInvitationsInOrgOutput = Awaited<ReturnType<typeof github.teams.listPendingInvitationsInOrg>>;

const input: TeamsListPendingInvitationsInOrgInput = {} as { org: string; team_slug: string; per_page?: number; page?: number };
const result: TeamsListPendingInvitationsInOrgOutput = await github.teams.listPendingInvitationsInOrg(input);

// Result shape (from schema): ({ id: number; login: string | null; email: string | null; role: string; created_at: string; failed_at?: string | null; failed_reason?: string | null; inviter: { name?: string | null; email?: string | null; login: strin...
```

### `github.teams.listMembersInOrg`

- **HTTP**: `GET /orgs/{org}/teams/{team_slug}/members`
- **What it does**: List team members
- **OpenAPI operationId**: `teams/list-members-in-org`
- **Path params**: None
- **Query params**: `role`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string; role?: "member" | "maintainer" | "all"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type TeamsListMembersInOrgInput = Parameters<typeof github.teams.listMembersInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsListMembersInOrgOutput = Awaited<ReturnType<typeof github.teams.listMembersInOrg>>;

const input: TeamsListMembersInOrgInput = {} as { org: string; team_slug: string; role?: "member" | "maintainer" | "all"; per_page?: number; page?: number };
const result: TeamsListMembersInOrgOutput = await github.teams.listMembersInOrg(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.teams.removeMembershipForUserInOrg`

- **HTTP**: `DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}`
- **What it does**: Remove team membership for a user
- **OpenAPI operationId**: `teams/remove-membership-for-user-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`

```ts
import github from "@utdk/github";

type TeamsRemoveMembershipForUserInOrgInput = Parameters<typeof github.teams.removeMembershipForUserInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsRemoveMembershipForUserInOrgOutput = Awaited<ReturnType<typeof github.teams.removeMembershipForUserInOrg>>;

const input: TeamsRemoveMembershipForUserInOrgInput = {} as { org: string; team_slug: string; username: string };
const result: TeamsRemoveMembershipForUserInOrgOutput = await github.teams.removeMembershipForUserInOrg(input);

// Result shape (from schema): unknown
```

### `github.teams.getMembershipForUserInOrg`

- **HTTP**: `GET /orgs/{org}/teams/{team_slug}/memberships/{username}`
- **What it does**: Get team membership for a user
- **OpenAPI operationId**: `teams/get-membership-for-user-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; role: "member" | "maintainer"; state: "active" | "pending" }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type TeamsGetMembershipForUserInOrgInput = Parameters<typeof github.teams.getMembershipForUserInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsGetMembershipForUserInOrgOutput = Awaited<ReturnType<typeof github.teams.getMembershipForUserInOrg>>;

const input: TeamsGetMembershipForUserInOrgInput = {} as { org: string; team_slug: string; username: string };
const result: TeamsGetMembershipForUserInOrgOutput = await github.teams.getMembershipForUserInOrg(input);

// Result shape (from schema): { url: string; role: "member" | "maintainer"; state: "active" | "pending" }
```

### `github.teams.addOrUpdateMembershipForUserInOrg`

- **HTTP**: `PUT /orgs/{org}/teams/{team_slug}/memberships/{username}`
- **What it does**: Add or update team membership for a user
- **OpenAPI operationId**: `teams/add-or-update-membership-for-user-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ role?: "member" | "maintainer"; org: string; team_slug: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; role: "member" | "maintainer"; state: "active" | "pending" }`
- OpenAPI response codes: `200`, `403`, `422`

```ts
import github from "@utdk/github";

type TeamsAddOrUpdateMembershipForUserInOrgInput = Parameters<typeof github.teams.addOrUpdateMembershipForUserInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsAddOrUpdateMembershipForUserInOrgOutput = Awaited<ReturnType<typeof github.teams.addOrUpdateMembershipForUserInOrg>>;

const input: TeamsAddOrUpdateMembershipForUserInOrgInput = {} as { role?: "member" | "maintainer"; org: string; team_slug: string; username: string };
const result: TeamsAddOrUpdateMembershipForUserInOrgOutput = await github.teams.addOrUpdateMembershipForUserInOrg(input);

// Result shape (from schema): { url: string; role: "member" | "maintainer"; state: "active" | "pending" }
```

### `github.teams.listReposInOrg`

- **HTTP**: `GET /orgs/{org}/teams/{team_slug}/repos`
- **What it does**: List team repositories
- **OpenAPI operationId**: `teams/list-repos-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type TeamsListReposInOrgInput = Parameters<typeof github.teams.listReposInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsListReposInOrgOutput = Awaited<ReturnType<typeof github.teams.listReposInOrg>>;

const input: TeamsListReposInOrgInput = {} as { org: string; team_slug: string; per_page?: number; page?: number };
const result: TeamsListReposInOrgOutput = await github.teams.listReposInOrg(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...
```

### `github.teams.removeRepoInOrg`

- **HTTP**: `DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`
- **What it does**: Remove a repository from a team
- **OpenAPI operationId**: `teams/remove-repo-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type TeamsRemoveRepoInOrgInput = Parameters<typeof github.teams.removeRepoInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsRemoveRepoInOrgOutput = Awaited<ReturnType<typeof github.teams.removeRepoInOrg>>;

const input: TeamsRemoveRepoInOrgInput = {} as { org: string; team_slug: string; owner: string; repo: string };
const result: TeamsRemoveRepoInOrgOutput = await github.teams.removeRepoInOrg(input);

// Result shape (from schema): unknown
```

### `github.teams.checkPermissionsForRepoInOrg`

- **HTTP**: `GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`
- **What it does**: Check team permissions for a repository
- **OpenAPI operationId**: `teams/check-permissions-for-repo-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: string } | null; forks: number; permissions?:...`
- OpenAPI response codes: `200`, `204`, `404`

```ts
import github from "@utdk/github";

type TeamsCheckPermissionsForRepoInOrgInput = Parameters<typeof github.teams.checkPermissionsForRepoInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsCheckPermissionsForRepoInOrgOutput = Awaited<ReturnType<typeof github.teams.checkPermissionsForRepoInOrg>>;

const input: TeamsCheckPermissionsForRepoInOrgInput = {} as { org: string; team_slug: string; owner: string; repo: string };
const result: TeamsCheckPermissionsForRepoInOrgOutput = await github.teams.checkPermissionsForRepoInOrg(input);

// Result shape (from schema): { id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: string } | null; forks: number; permissions?:...
```

### `github.teams.addOrUpdateRepoPermissionsInOrg`

- **HTTP**: `PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`
- **What it does**: Add or update team repository permissions
- **OpenAPI operationId**: `teams/add-or-update-repo-permissions-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ permission?: string; org: string; team_slug: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type TeamsAddOrUpdateRepoPermissionsInOrgInput = Parameters<typeof github.teams.addOrUpdateRepoPermissionsInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsAddOrUpdateRepoPermissionsInOrgOutput = Awaited<ReturnType<typeof github.teams.addOrUpdateRepoPermissionsInOrg>>;

const input: TeamsAddOrUpdateRepoPermissionsInOrgInput = {} as { permission?: string; org: string; team_slug: string; owner: string; repo: string };
const result: TeamsAddOrUpdateRepoPermissionsInOrgOutput = await github.teams.addOrUpdateRepoPermissionsInOrg(input);

// Result shape (from schema): unknown
```

### `github.teams.listChildInOrg`

- **HTTP**: `GET /orgs/{org}/teams/{team_slug}/teams`
- **What it does**: List child teams
- **OpenAPI operationId**: `teams/list-child-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type TeamsListChildInOrgInput = Parameters<typeof github.teams.listChildInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsListChildInOrgOutput = Awaited<ReturnType<typeof github.teams.listChildInOrg>>;

const input: TeamsListChildInOrgInput = {} as { org: string; team_slug: string; per_page?: number; page?: number };
const result: TeamsListChildInOrgOutput = await github.teams.listChildInOrg(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...
```

### `github.teams.deleteLegacy`

- **HTTP**: `DELETE /teams/{team_id}`
- **What it does**: Delete a team (Legacy)
- **OpenAPI operationId**: `teams/delete-legacy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `422`

```ts
import github from "@utdk/github";

type TeamsDeleteLegacyInput = Parameters<typeof github.teams.deleteLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsDeleteLegacyOutput = Awaited<ReturnType<typeof github.teams.deleteLegacy>>;

const input: TeamsDeleteLegacyInput = {} as { team_id: number };
const result: TeamsDeleteLegacyOutput = await github.teams.deleteLegacy(input);

// Result shape (from schema): unknown
```

### `github.teams.getLegacy`

- **HTTP**: `GET /teams/{team_id}`
- **What it does**: Get a team (Legacy)
- **OpenAPI operationId**: `teams/get-legacy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; html_url: string; name: string; slug: string; description: string | null; privacy?: "closed" | "secret"; notification_setting?: "notifications_enabled" | "notifications_disabl...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type TeamsGetLegacyInput = Parameters<typeof github.teams.getLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsGetLegacyOutput = Awaited<ReturnType<typeof github.teams.getLegacy>>;

const input: TeamsGetLegacyInput = {} as { team_id: number };
const result: TeamsGetLegacyOutput = await github.teams.getLegacy(input);

// Result shape (from schema): { id: number; node_id: string; url: string; html_url: string; name: string; slug: string; description: string | null; privacy?: "closed" | "secret"; notification_setting?: "notifications_enabled" | "notifications_disabl...
```

### `github.teams.updateLegacy`

- **HTTP**: `PATCH /teams/{team_id}`
- **What it does**: Update a team (Legacy)
- **OpenAPI operationId**: `teams/update-legacy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `201`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; description?: string; privacy?: "secret" | "closed"; notification_setting?: "notifications_enabled" | "notifications_disabled"; permission?: "pull" | "push" | "admin"; parent_team_id?: number | null; team_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; html_url: string; name: string; slug: string; description: string | null; privacy?: "closed" | "secret"; notification_setting?: "notifications_enabled" | "notifications_disabl...`
- OpenAPI response codes: `200`, `201`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type TeamsUpdateLegacyInput = Parameters<typeof github.teams.updateLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsUpdateLegacyOutput = Awaited<ReturnType<typeof github.teams.updateLegacy>>;

const input: TeamsUpdateLegacyInput = {} as { name: string; description?: string; privacy?: "secret" | "closed"; notification_setting?: "notifications_enabled" | "notifications_disabled"; permission?: "pull" | "push" | "admin"; parent_team_id?: number | null; team_id: number };
const result: TeamsUpdateLegacyOutput = await github.teams.updateLegacy(input);

// Result shape (from schema): { id: number; node_id: string; url: string; html_url: string; name: string; slug: string; description: string | null; privacy?: "closed" | "secret"; notification_setting?: "notifications_enabled" | "notifications_disabl...
```

### `github.teams.listPendingInvitationsLegacy`

- **HTTP**: `GET /teams/{team_id}/invitations`
- **What it does**: List pending team invitations (Legacy)
- **OpenAPI operationId**: `teams/list-pending-invitations-legacy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; login: string | null; email: string | null; role: string; created_at: string; failed_at?: string | null; failed_reason?: string | null; inviter: { name?: string | null; email?: string | null; login: strin...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type TeamsListPendingInvitationsLegacyInput = Parameters<typeof github.teams.listPendingInvitationsLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsListPendingInvitationsLegacyOutput = Awaited<ReturnType<typeof github.teams.listPendingInvitationsLegacy>>;

const input: TeamsListPendingInvitationsLegacyInput = {} as { team_id: number; per_page?: number; page?: number };
const result: TeamsListPendingInvitationsLegacyOutput = await github.teams.listPendingInvitationsLegacy(input);

// Result shape (from schema): ({ id: number; login: string | null; email: string | null; role: string; created_at: string; failed_at?: string | null; failed_reason?: string | null; inviter: { name?: string | null; email?: string | null; login: strin...
```

### `github.teams.listMembersLegacy`

- **HTTP**: `GET /teams/{team_id}/members`
- **What it does**: List team members (Legacy)
- **OpenAPI operationId**: `teams/list-members-legacy`
- **Path params**: None
- **Query params**: `role`
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: number; role?: "member" | "maintainer" | "all"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type TeamsListMembersLegacyInput = Parameters<typeof github.teams.listMembersLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsListMembersLegacyOutput = Awaited<ReturnType<typeof github.teams.listMembersLegacy>>;

const input: TeamsListMembersLegacyInput = {} as { team_id: number; role?: "member" | "maintainer" | "all"; per_page?: number; page?: number };
const result: TeamsListMembersLegacyOutput = await github.teams.listMembersLegacy(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.teams.removeMemberLegacy`

- **HTTP**: `DELETE /teams/{team_id}/members/{username}`
- **What it does**: Remove team member (Legacy)
- **OpenAPI operationId**: `teams/remove-member-legacy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: number; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type TeamsRemoveMemberLegacyInput = Parameters<typeof github.teams.removeMemberLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsRemoveMemberLegacyOutput = Awaited<ReturnType<typeof github.teams.removeMemberLegacy>>;

const input: TeamsRemoveMemberLegacyInput = {} as { team_id: number; username: string };
const result: TeamsRemoveMemberLegacyOutput = await github.teams.removeMemberLegacy(input);

// Result shape (from schema): unknown
```

### `github.teams.getMemberLegacy`

- **HTTP**: `GET /teams/{team_id}/members/{username}`
- **What it does**: Get team member (Legacy)
- **OpenAPI operationId**: `teams/get-member-legacy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: number; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type TeamsGetMemberLegacyInput = Parameters<typeof github.teams.getMemberLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsGetMemberLegacyOutput = Awaited<ReturnType<typeof github.teams.getMemberLegacy>>;

const input: TeamsGetMemberLegacyInput = {} as { team_id: number; username: string };
const result: TeamsGetMemberLegacyOutput = await github.teams.getMemberLegacy(input);

// Result shape (from schema): unknown
```

### `github.teams.addMemberLegacy`

- **HTTP**: `PUT /teams/{team_id}/members/{username}`
- **What it does**: Add team member (Legacy)
- **OpenAPI operationId**: `teams/add-member-legacy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: number; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type TeamsAddMemberLegacyInput = Parameters<typeof github.teams.addMemberLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsAddMemberLegacyOutput = Awaited<ReturnType<typeof github.teams.addMemberLegacy>>;

const input: TeamsAddMemberLegacyInput = {} as { team_id: number; username: string };
const result: TeamsAddMemberLegacyOutput = await github.teams.addMemberLegacy(input);

// Result shape (from schema): unknown
```

### `github.teams.removeMembershipForUserLegacy`

- **HTTP**: `DELETE /teams/{team_id}/memberships/{username}`
- **What it does**: Remove team membership for a user (Legacy)
- **OpenAPI operationId**: `teams/remove-membership-for-user-legacy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: number; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`

```ts
import github from "@utdk/github";

type TeamsRemoveMembershipForUserLegacyInput = Parameters<typeof github.teams.removeMembershipForUserLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsRemoveMembershipForUserLegacyOutput = Awaited<ReturnType<typeof github.teams.removeMembershipForUserLegacy>>;

const input: TeamsRemoveMembershipForUserLegacyInput = {} as { team_id: number; username: string };
const result: TeamsRemoveMembershipForUserLegacyOutput = await github.teams.removeMembershipForUserLegacy(input);

// Result shape (from schema): unknown
```

### `github.teams.getMembershipForUserLegacy`

- **HTTP**: `GET /teams/{team_id}/memberships/{username}`
- **What it does**: Get team membership for a user (Legacy)
- **OpenAPI operationId**: `teams/get-membership-for-user-legacy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: number; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; role: "member" | "maintainer"; state: "active" | "pending" }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type TeamsGetMembershipForUserLegacyInput = Parameters<typeof github.teams.getMembershipForUserLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsGetMembershipForUserLegacyOutput = Awaited<ReturnType<typeof github.teams.getMembershipForUserLegacy>>;

const input: TeamsGetMembershipForUserLegacyInput = {} as { team_id: number; username: string };
const result: TeamsGetMembershipForUserLegacyOutput = await github.teams.getMembershipForUserLegacy(input);

// Result shape (from schema): { url: string; role: "member" | "maintainer"; state: "active" | "pending" }
```

### `github.teams.addOrUpdateMembershipForUserLegacy`

- **HTTP**: `PUT /teams/{team_id}/memberships/{username}`
- **What it does**: Add or update team membership for a user (Legacy)
- **OpenAPI operationId**: `teams/add-or-update-membership-for-user-legacy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ role?: "member" | "maintainer"; team_id: number; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; role: "member" | "maintainer"; state: "active" | "pending" }`
- OpenAPI response codes: `200`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type TeamsAddOrUpdateMembershipForUserLegacyInput = Parameters<typeof github.teams.addOrUpdateMembershipForUserLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsAddOrUpdateMembershipForUserLegacyOutput = Awaited<ReturnType<typeof github.teams.addOrUpdateMembershipForUserLegacy>>;

const input: TeamsAddOrUpdateMembershipForUserLegacyInput = {} as { role?: "member" | "maintainer"; team_id: number; username: string };
const result: TeamsAddOrUpdateMembershipForUserLegacyOutput = await github.teams.addOrUpdateMembershipForUserLegacy(input);

// Result shape (from schema): { url: string; role: "member" | "maintainer"; state: "active" | "pending" }
```

### `github.teams.listReposLegacy`

- **HTTP**: `GET /teams/{team_id}/repos`
- **What it does**: List team repositories (Legacy)
- **OpenAPI operationId**: `teams/list-repos-legacy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type TeamsListReposLegacyInput = Parameters<typeof github.teams.listReposLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsListReposLegacyOutput = Awaited<ReturnType<typeof github.teams.listReposLegacy>>;

const input: TeamsListReposLegacyInput = {} as { team_id: number; per_page?: number; page?: number };
const result: TeamsListReposLegacyOutput = await github.teams.listReposLegacy(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...
```

### `github.teams.removeRepoLegacy`

- **HTTP**: `DELETE /teams/{team_id}/repos/{owner}/{repo}`
- **What it does**: Remove a repository from a team (Legacy)
- **OpenAPI operationId**: `teams/remove-repo-legacy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: number; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type TeamsRemoveRepoLegacyInput = Parameters<typeof github.teams.removeRepoLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsRemoveRepoLegacyOutput = Awaited<ReturnType<typeof github.teams.removeRepoLegacy>>;

const input: TeamsRemoveRepoLegacyInput = {} as { team_id: number; owner: string; repo: string };
const result: TeamsRemoveRepoLegacyOutput = await github.teams.removeRepoLegacy(input);

// Result shape (from schema): unknown
```

### `github.teams.checkPermissionsForRepoLegacy`

- **HTTP**: `GET /teams/{team_id}/repos/{owner}/{repo}`
- **What it does**: Check team permissions for a repository (Legacy)
- **OpenAPI operationId**: `teams/check-permissions-for-repo-legacy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: number; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: string } | null; forks: number; permissions?:...`
- OpenAPI response codes: `200`, `204`, `404`

```ts
import github from "@utdk/github";

type TeamsCheckPermissionsForRepoLegacyInput = Parameters<typeof github.teams.checkPermissionsForRepoLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsCheckPermissionsForRepoLegacyOutput = Awaited<ReturnType<typeof github.teams.checkPermissionsForRepoLegacy>>;

const input: TeamsCheckPermissionsForRepoLegacyInput = {} as { team_id: number; owner: string; repo: string };
const result: TeamsCheckPermissionsForRepoLegacyOutput = await github.teams.checkPermissionsForRepoLegacy(input);

// Result shape (from schema): { id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: string } | null; forks: number; permissions?:...
```

### `github.teams.addOrUpdateRepoPermissionsLegacy`

- **HTTP**: `PUT /teams/{team_id}/repos/{owner}/{repo}`
- **What it does**: Add or update team repository permissions (Legacy)
- **OpenAPI operationId**: `teams/add-or-update-repo-permissions-legacy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ permission?: "pull" | "push" | "admin"; team_id: number; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `422`

```ts
import github from "@utdk/github";

type TeamsAddOrUpdateRepoPermissionsLegacyInput = Parameters<typeof github.teams.addOrUpdateRepoPermissionsLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsAddOrUpdateRepoPermissionsLegacyOutput = Awaited<ReturnType<typeof github.teams.addOrUpdateRepoPermissionsLegacy>>;

const input: TeamsAddOrUpdateRepoPermissionsLegacyInput = {} as { permission?: "pull" | "push" | "admin"; team_id: number; owner: string; repo: string };
const result: TeamsAddOrUpdateRepoPermissionsLegacyOutput = await github.teams.addOrUpdateRepoPermissionsLegacy(input);

// Result shape (from schema): unknown
```

### `github.teams.listChildLegacy`

- **HTTP**: `GET /teams/{team_id}/teams`
- **What it does**: List child teams (Legacy)
- **OpenAPI operationId**: `teams/list-child-legacy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...`
- OpenAPI response codes: `200`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type TeamsListChildLegacyInput = Parameters<typeof github.teams.listChildLegacy> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsListChildLegacyOutput = Awaited<ReturnType<typeof github.teams.listChildLegacy>>;

const input: TeamsListChildLegacyInput = {} as { team_id: number; per_page?: number; page?: number };
const result: TeamsListChildLegacyOutput = await github.teams.listChildLegacy(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...
```

### `github.teams.listForAuthenticatedUser`

- **HTTP**: `GET /user/teams`
- **What it does**: List teams for the authenticated user
- **OpenAPI operationId**: `teams/list-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; html_url: string; name: string; slug: string; description: string | null; privacy?: "closed" | "secret"; notification_setting?: "notifications_enabled" | "notifications_disab...`
- OpenAPI response codes: `200`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type TeamsListForAuthenticatedUserInput = Parameters<typeof github.teams.listForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type TeamsListForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.teams.listForAuthenticatedUser>>;

const input: TeamsListForAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: TeamsListForAuthenticatedUserOutput = await github.teams.listForAuthenticatedUser(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; html_url: string; name: string; slug: string; description: string | null; privacy?: "closed" | "secret"; notification_setting?: "notifications_enabled" | "notifications_disab...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
