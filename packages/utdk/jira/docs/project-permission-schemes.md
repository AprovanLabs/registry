# Project Permission Schemes

4 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getProjectIssueSecurityScheme`

Get project issue security scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectIssueSecurityScheme(input: {
  /** The project ID or project key (case sensitive). */
  projectKeyOrId: string;
}): Promise<SecurityScheme>
```

<sub>`GET /rest/api/3/project/{projectKeyOrId}/issuesecuritylevelscheme` · `getProjectIssueSecurityScheme`</sub>

## `jira.getAssignedPermissionScheme`

Get assigned permission scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getAssignedPermissionScheme(input: {
  /** The project ID or project key (case sensitive). */
  projectKeyOrId: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission. */
  expand?: string;
}): Promise<PermissionScheme>
```

<sub>`GET /rest/api/3/project/{projectKeyOrId}/permissionscheme` · `getAssignedPermissionScheme`</sub>

## `jira.assignPermissionScheme`

Assign permission scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.assignPermissionScheme(input: {
  /** The ID of the permission scheme to associate with the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to get a list of permission scheme IDs. */
  id: number;
  /** The project ID or project key (case sensitive). */
  projectKeyOrId: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission. */
  expand?: string;
}): Promise<PermissionScheme>
```

<sub>`PUT /rest/api/3/project/{projectKeyOrId}/permissionscheme` · `assignPermissionScheme`</sub>

## `jira.getSecurityLevelsForProject`

Get project issue security levels — [Provider docs](http://www.atlassian.com)

```ts
jira.getSecurityLevelsForProject(input: {
  /** The project ID or project key (case sensitive). */
  projectKeyOrId: string;
}): Promise<ProjectIssueSecurityLevels>
```

<sub>`GET /rest/api/3/project/{projectKeyOrId}/securitylevel` · `getSecurityLevelsForProject`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
