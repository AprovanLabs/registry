# Permissions

4 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getMyPermissions`

Get my permissions — [Provider docs](http://www.atlassian.com)

```ts
jira.getMyPermissions(input: {
  /** The key of project. Ignored if `projectId` is provided. */
  projectKey?: string;
  /** The ID of project. */
  projectId?: string;
  /** The key of the issue. Ignored if `issueId` is provided. */
  issueKey?: string;
  /** The ID of the issue. */
  issueId?: string;
  /** A list of permission keys. (Required) This parameter accepts a comma-separated list. To get the list of available permissions, use [Get all permissions](#api-rest-api-3-permissions-get). */
  permissions?: string;
  projectUuid?: string;
  projectConfigurationUuid?: string;
  /** The ID of the comment. */
  commentId?: string;
}): Promise<Permissions>
```

<sub>`GET /rest/api/3/mypermissions` · `getMyPermissions`</sub>

## `jira.getAllPermissions`

Get all permissions — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllPermissions(): Promise<Permissions>
```

<sub>`GET /rest/api/3/permissions` · `getAllPermissions`</sub>

## `jira.getBulkPermissions`

Get bulk permissions — [Provider docs](http://www.atlassian.com)

```ts
jira.getBulkPermissions(input: {
  /** The account ID of a user. */
  accountId?: string;
  /** Global permissions to look up. */
  globalPermissions?: (string)[];
  /** Project permissions with associated projects and issues to look up. */
  projectPermissions?: (BulkProjectPermissions)[];
}): Promise<BulkPermissionGrants>
```

<sub>`POST /rest/api/3/permissions/check` · `getBulkPermissions`</sub>

## `jira.getPermittedProjects`

Get permitted projects — [Provider docs](http://www.atlassian.com)

```ts
jira.getPermittedProjects(input: {
  /** A list of permission keys. */
  permissions: (string)[];
}): Promise<PermittedProjects>
```

<sub>`POST /rest/api/3/permissions/project` · `getPermittedProjects`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
