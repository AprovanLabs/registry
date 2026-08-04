# Permission Schemes

9 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAllPermissionSchemes`

Get all permission schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllPermissionSchemes(input: {
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission. */
  expand?: string;
}): Promise<PermissionSchemes>
```

<sub>`GET /rest/api/3/permissionscheme` · `getAllPermissionSchemes`</sub>

## `jira.createPermissionScheme`

Create permission scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.createPermissionScheme(input: {
  /** A description for the permission scheme. */
  description?: string;
  /** The expand options available for the permission scheme. */
  expand?: string;
  /** The ID of the permission scheme. */
  id?: number;
  /** The name of the permission scheme. Must be unique. */
  name: string;
  /** The permission scheme to create or update. See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more information. */
  permissions?: (PermissionGrant)[];
  /** The scope of the permission scheme. */
  scope?: Scope;
  /** The URL of the permission scheme. */
  self?: string;
  [key: string]: unknown;
}, options?: { query?: { expand?: string } }): Promise<PermissionScheme>
```

<sub>`POST /rest/api/3/permissionscheme` · `createPermissionScheme`</sub>

## `jira.deletePermissionScheme`

Delete permission scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.deletePermissionScheme(input: {
  /** The ID of the permission scheme being deleted. */
  schemeId: number;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/permissionscheme/{schemeId}` · `deletePermissionScheme`</sub>

## `jira.getPermissionScheme`

Get permission scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getPermissionScheme(input: {
  /** The ID of the permission scheme to return. */
  schemeId: number;
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission. */
  expand?: string;
}): Promise<PermissionScheme>
```

<sub>`GET /rest/api/3/permissionscheme/{schemeId}` · `getPermissionScheme`</sub>

## `jira.updatePermissionScheme`

Update permission scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.updatePermissionScheme(input: {
  /** A description for the permission scheme. */
  description?: string;
  /** The expand options available for the permission scheme. */
  expand?: string;
  /** The ID of the permission scheme. */
  id?: number;
  /** The name of the permission scheme. Must be unique. */
  name: string;
  /** The permission scheme to create or update. See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more information. */
  permissions?: (PermissionGrant)[];
  /** The scope of the permission scheme. */
  scope?: Scope;
  /** The URL of the permission scheme. */
  self?: string;
  /** The ID of the permission scheme to update. */
  schemeId: number;
  [key: string]: unknown;
}, options?: { query?: { expand?: string } }): Promise<PermissionScheme>
```

<sub>`PUT /rest/api/3/permissionscheme/{schemeId}` · `updatePermissionScheme`</sub>

## `jira.getPermissionSchemeGrants`

Get permission scheme grants — [Provider docs](http://www.atlassian.com)

```ts
jira.getPermissionSchemeGrants(input: {
  /** The ID of the permission scheme. */
  schemeId: number;
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `permissions` Returns all permission grants for each permission scheme.  *  `user` Returns information about the user who is granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `projectRole` Returns information about the project role granted the permission.  *  `field` Returns information about the custom field granted the permission.  *  `all` Returns all expandable information. */
  expand?: string;
}): Promise<PermissionGrants>
```

<sub>`GET /rest/api/3/permissionscheme/{schemeId}/permission` · `getPermissionSchemeGrants`</sub>

## `jira.createPermissionGrant`

Create permission grant — [Provider docs](http://www.atlassian.com)

```ts
jira.createPermissionGrant(input: {
  /** The user or group being granted the permission. It consists of a `type`, a type-dependent `parameter` and a type-dependent `value`. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information. */
  holder?: PermissionHolder;
  /** The ID of the permission granted details. */
  id?: number;
  /** The permission to grant. This permission can be one of the built-in permissions or a custom permission added by an app. See [Built-in permissions](../api-group-permission-schemes/#built-in-permissions) in *Get all permission schemes* for more information about the built-in permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information about custom permissions. */
  permission?: string;
  /** The URL of the permission granted details. */
  self?: string;
  /** The ID of the permission scheme in which to create a new permission grant. */
  schemeId: number;
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `permissions` Returns all permission grants for each permission scheme.  *  `user` Returns information about the user who is granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `projectRole` Returns information about the project role granted the permission.  *  `field` Returns information about the custom field granted the permission.  *  `all` Returns all expandable information. */
  expand?: string;
  [key: string]: unknown;
}): Promise<PermissionGrant>
```

<sub>`POST /rest/api/3/permissionscheme/{schemeId}/permission` · `createPermissionGrant`</sub>

## `jira.deletePermissionSchemeEntity`

Delete permission scheme grant — [Provider docs](http://www.atlassian.com)

```ts
jira.deletePermissionSchemeEntity(input: {
  /** The ID of the permission scheme to delete the permission grant from. */
  schemeId: number;
  /** The ID of the permission grant to delete. */
  permissionId: number;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/permissionscheme/{schemeId}/permission/{permissionId}` · `deletePermissionSchemeEntity`</sub>

## `jira.getPermissionSchemeGrant`

Get permission scheme grant — [Provider docs](http://www.atlassian.com)

```ts
jira.getPermissionSchemeGrant(input: {
  /** The ID of the permission scheme. */
  schemeId: number;
  /** The ID of the permission grant. */
  permissionId: number;
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission. */
  expand?: string;
}): Promise<PermissionGrant>
```

<sub>`GET /rest/api/3/permissionscheme/{schemeId}/permission/{permissionId}` · `getPermissionSchemeGrant`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
