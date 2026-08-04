# Roles

14 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listPermissions`

List permissions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listPermissions(): Promise<PermissionsResponse>
```

<sub>`GET /api/v2/permissions` · `ListPermissions`</sub>

## `datadog.listRoles`

List roles — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listRoles(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  sort?: RolesSort;
  /** Filter all roles by the given string. */
  filter?: string;
  /** Filter all roles by the given list of role IDs. */
  "filter[id]"?: string;
}): Promise<RolesResponse>
```

<sub>`GET /api/v2/roles` · `ListRoles`</sub>

## `datadog.createRole`

Create role — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createRole(input: {
  data: RoleCreateData;
}): Promise<RoleCreateResponse>
```

<sub>`POST /api/v2/roles` · `CreateRole`</sub>

## `datadog.deleteRole`

Delete role — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteRole(input: {
  /** The unique identifier of the role. */
  role_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/roles/{role_id}` · `DeleteRole`</sub>

## `datadog.getRole`

Get a role — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRole(input: {
  /** The unique identifier of the role. */
  role_id: string;
}): Promise<RoleResponse>
```

<sub>`GET /api/v2/roles/{role_id}` · `GetRole`</sub>

## `datadog.updateRole`

Update a role — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateRole(input: {
  data: RoleUpdateData;
  /** The unique identifier of the role. */
  role_id: string;
}): Promise<RoleUpdateResponse>
```

<sub>`PATCH /api/v2/roles/{role_id}` · `UpdateRole`</sub>

## `datadog.cloneRole`

Create a new role by cloning an existing role — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.cloneRole(input: {
  data: RoleClone;
  /** The unique identifier of the role. */
  role_id: string;
}): Promise<RoleResponse>
```

<sub>`POST /api/v2/roles/{role_id}/clone` · `CloneRole`</sub>

## `datadog.removePermissionFromRole`

Revoke permission — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.removePermissionFromRole(input: {
  data?: RelationshipToPermissionData;
  /** The unique identifier of the role. */
  role_id: string;
}): Promise<PermissionsResponse>
```

<sub>`DELETE /api/v2/roles/{role_id}/permissions` · `RemovePermissionFromRole`</sub>

## `datadog.listRolePermissions`

List permissions for a role — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listRolePermissions(input: {
  /** The unique identifier of the role. */
  role_id: string;
}): Promise<PermissionsResponse>
```

<sub>`GET /api/v2/roles/{role_id}/permissions` · `ListRolePermissions`</sub>

## `datadog.addPermissionToRole`

Grant permission to a role — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.addPermissionToRole(input: {
  data?: RelationshipToPermissionData;
  /** The unique identifier of the role. */
  role_id: string;
}): Promise<PermissionsResponse>
```

<sub>`POST /api/v2/roles/{role_id}/permissions` · `AddPermissionToRole`</sub>

## `datadog.removeUserFromRole`

Remove a user from a role — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.removeUserFromRole(input: {
  data: RelationshipToUserData;
  /** The unique identifier of the role. */
  role_id: string;
}): Promise<UsersResponse>
```

<sub>`DELETE /api/v2/roles/{role_id}/users` · `RemoveUserFromRole`</sub>

## `datadog.listRoleUsers`

Get all users of a role — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listRoleUsers(input: {
  /** The unique identifier of the role. */
  role_id: string;
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  /** User attribute to order results by. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example `sort=-name`. Options: `name`, `email`, `status`. */
  sort?: string;
  /** Filter all users by the given string. Defaults to no filtering. */
  filter?: string;
}): Promise<UsersResponse>
```

<sub>`GET /api/v2/roles/{role_id}/users` · `ListRoleUsers`</sub>

## `datadog.addUserToRole`

Add a user to a role — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.addUserToRole(input: {
  data: RelationshipToUserData;
  /** The unique identifier of the role. */
  role_id: string;
}): Promise<UsersResponse>
```

<sub>`POST /api/v2/roles/{role_id}/users` · `AddUserToRole`</sub>

## `datadog.listRoleTemplates`

List role templates — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listRoleTemplates(): Promise<RoleTemplateArray>
```

<sub>`GET /api/v2/roles/templates` · `ListRoleTemplates`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
