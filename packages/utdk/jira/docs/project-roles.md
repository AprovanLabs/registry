# Project Roles

9 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getProjectRoles`

Get project roles for project — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectRoles(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
}): Promise<{ [key: string]: string | undefined }>
```

<sub>`GET /rest/api/3/project/{projectIdOrKey}/role` · `getProjectRoles`</sub>

## `jira.getProjectRole`

Get project role for project — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectRole(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
  /** Exclude inactive users. */
  excludeInactiveUsers?: boolean;
}): Promise<ProjectRole>
```

<sub>`GET /rest/api/3/project/{projectIdOrKey}/role/{id}` · `getProjectRole`</sub>

## `jira.getProjectRoleDetails`

Get project role details — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectRoleDetails(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** Whether the roles should be filtered to include only those the user is assigned to. */
  currentMember?: boolean;
  excludeConnectAddons?: boolean;
  /** Do not return the default JSM company-managed space from CSM spaces, or the default CSM roles from JSM spaces. */
  excludeOtherServiceRoles?: boolean;
}): Promise<(ProjectRoleDetails)[]>
```

<sub>`GET /rest/api/3/project/{projectIdOrKey}/roledetails` · `getProjectRoleDetails`</sub>

## `jira.getAllProjectRoles`

Get all project roles — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllProjectRoles(): Promise<(ProjectRole)[]>
```

<sub>`GET /rest/api/3/role` · `getAllProjectRoles`</sub>

## `jira.createProjectRole`

Create project role — [Provider docs](http://www.atlassian.com)

```ts
jira.createProjectRole(input: {
  /** A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role. */
  description?: string;
  /** The name of the project role. Must be unique. Cannot begin or end with whitespace. The maximum length is 255 characters. Required when creating a project role. Optional when partially updating a project role. */
  name?: string;
}): Promise<ProjectRole>
```

<sub>`POST /rest/api/3/role` · `createProjectRole`</sub>

## `jira.deleteProjectRole`

Delete project role — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteProjectRole(input: {
  /** The ID of the project role to delete. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
  /** The ID of the project role that will replace the one being deleted. The swap will attempt to swap the role in schemes (notifications, permissions, issue security), workflows, worklogs and comments. */
  swap?: number;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/role/{id}` · `deleteProjectRole`</sub>

## `jira.getProjectRoleById`

Get project role by ID — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectRoleById(input: {
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
}): Promise<ProjectRole>
```

<sub>`GET /rest/api/3/role/{id}` · `getProjectRoleById`</sub>

## `jira.partialUpdateProjectRole`

Partial update project role — [Provider docs](http://www.atlassian.com)

```ts
jira.partialUpdateProjectRole(input: {
  /** A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role. */
  description?: string;
  /** The name of the project role. Must be unique. Cannot begin or end with whitespace. The maximum length is 255 characters. Required when creating a project role. Optional when partially updating a project role. */
  name?: string;
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
}): Promise<ProjectRole>
```

<sub>`POST /rest/api/3/role/{id}` · `partialUpdateProjectRole`</sub>

## `jira.fullyUpdateProjectRole`

Fully update project role — [Provider docs](http://www.atlassian.com)

```ts
jira.fullyUpdateProjectRole(input: {
  /** A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role. */
  description?: string;
  /** The name of the project role. Must be unique. Cannot begin or end with whitespace. The maximum length is 255 characters. Required when creating a project role. Optional when partially updating a project role. */
  name?: string;
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
}): Promise<ProjectRole>
```

<sub>`PUT /rest/api/3/role/{id}` · `fullyUpdateProjectRole`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
