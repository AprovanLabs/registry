# Roles

12 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getRoles`

Get all roles

```ts
pipedrive.getRoles(input: {
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean } & { data?: ({ parent_role_id?: number | null; name?: string } & { id?: number; active_flag?: boolean; assignment_count?: string; sub_role_count?: string } & { level?: number })[]; additional_data?: { pagination?: { start?: number; limit?: number; more_items_in_collection?: boolean } } }>
```

<sub>`GET /roles` · `getRoles`</sub>

## `pipedrive.addRole`

Add a role

```ts
pipedrive.addRole(input: {
  /** The name of the role */
  name: string;
  /** The ID of the parent role */
  parent_role_id?: number | null;
}): Promise<{ success?: boolean } & { data?: { id?: number } }>
```

<sub>`POST /roles` · `addRole`</sub>

## `pipedrive.deleteRole`

Delete a role

```ts
pipedrive.deleteRole(input: {
  /** The ID of the role */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number } }>
```

<sub>`DELETE /roles/{id}` · `deleteRole`</sub>

## `pipedrive.getRole`

Get one role

```ts
pipedrive.getRole(input: {
  /** The ID of the role */
  id: number;
}): Promise<{ success?: boolean } & { data?: { parent_role_id?: number | null; name?: string } & { id?: number; active_flag?: boolean; assignment_count?: string; sub_role_count?: string }; additional_data?: { settings?: { deal_default_visibility?: number; lead_default_visibility?: number; org_default_visibility?: number; person_default_visibility?: number; product_default_visibility?: number; deal_access_lev...>
```

<sub>`GET /roles/{id}` · `getRole`</sub>

## `pipedrive.updateRole`

Update role details

```ts
pipedrive.updateRole(input: {
  /** The ID of the parent role */
  parent_role_id?: number | null;
  /** The name of the role */
  name?: string;
  /** The ID of the role */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number } }>
```

<sub>`PUT /roles/{id}` · `updateRole`</sub>

## `pipedrive.deleteRoleAssignment`

Delete a role assignment

```ts
pipedrive.deleteRoleAssignment(input: {
  /** The ID of the user */
  user_id: number;
  /** The ID of the role */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number } }>
```

<sub>`DELETE /roles/{id}/assignments` · `deleteRoleAssignment`</sub>

## `pipedrive.getRoleAssignments`

List role assignments

```ts
pipedrive.getRoleAssignments(input: {
  /** The ID of the role */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean } & { data?: ({ parent_role_id?: number | null; name?: string } & { user_id?: number; role_id?: number; active_flag?: boolean; type?: string })[]; additional_data?: { pagination?: { start?: number; limit?: number; more_items_in_collection?: boolean } } }>
```

<sub>`GET /roles/{id}/assignments` · `getRoleAssignments`</sub>

## `pipedrive.addRoleAssignment`

Add role assignment

```ts
pipedrive.addRoleAssignment(input: {
  /** The ID of the user */
  user_id: number;
  /** The ID of the role */
  id: number;
}): Promise<{ success?: boolean } & { data?: { user_id?: number; role_id?: number } }>
```

<sub>`POST /roles/{id}/assignments` · `addRoleAssignment`</sub>

## `pipedrive.getRolePipelines`

List pipeline visibility for a role

```ts
pipedrive.getRolePipelines(input: {
  /** The ID of the role */
  id: number;
  /** Whether to return the visible or hidden pipelines for the role */
  visible?: boolean;
}): Promise<{ success?: boolean } & { data?: { pipeline_ids?: (number)[]; visible?: boolean } }>
```

<sub>`GET /roles/{id}/pipelines` · `getRolePipelines`</sub>

## `pipedrive.updateRolePipelines`

Update pipeline visibility for a role

```ts
pipedrive.updateRolePipelines(input: {
  /** The pipeline IDs to make the pipelines visible (add) and/or hidden (remove) for the specified role. It requires the following JSON structure: `{ "add": "[1]", "remove": "[3, 4]" }`. */
  visible_pipeline_ids: { [key: string]: unknown };
  /** The ID of the role */
  id: number;
}): Promise<{ success?: boolean } & { data?: { pipeline_ids?: (number)[]; visible?: boolean } }>
```

<sub>`PUT /roles/{id}/pipelines` · `updateRolePipelines`</sub>

## `pipedrive.getRoleSettings`

List role settings

```ts
pipedrive.getRoleSettings(input: {
  /** The ID of the role */
  id: number;
}): Promise<{ success?: boolean } & { data?: { deal_default_visibility?: number; lead_default_visibility?: number; org_default_visibility?: number; person_default_visibility?: number; product_default_visibility?: number; deal_access_level?: number; org_access_level?: number; person_access_level?: number; product_access_level?: number } }>
```

<sub>`GET /roles/{id}/settings` · `getRoleSettings`</sub>

## `pipedrive.addOrUpdateRoleSetting`

Add or update role setting

```ts
pipedrive.addOrUpdateRoleSetting(input: {
  setting_key: "deal_default_visibility" | "lead_default_visibility" | "org_default_visibility" | "person_default_visibility" | "product_default_visibility";
  /** Possible values for the `default_visibility` setting depending on the subscription plan:<br> <table class='role-setting'> <caption><b>Light / Growth and Professional plans</b></caption> <tr><th><b>Value</b></th><th><b>Description</b></th></tr> <tr><td>`1`</td><td>Owner & Followers</td></tr> <tr><td>`3`</td><td>Entire company</td></tr> </table> <br> <table class='role-setting'> <caption><b>Premium / Ultimate plan</b></caption> <tr><th><b>Value</b></th><th><b>Description</b></th></tr> <tr><td>`1`</td><td>Owner only</td></tr> <tr><td>`3`</td><td>Owner&#39;s visibility group</td></tr> <tr><td>`5`</td><td>Owner&#39;s visibility group and sub-groups</td></tr> <tr><td>`7`</td><td>Entire company</td></tr> </table> <br> Read more about visibility groups <a href='https://support.pipedrive.com/en/article/visibility-groups'>here</a>. */
  value: 1 | 3 | 5 | 7;
  /** The ID of the role */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number; deal_default_visibility?: 1 | 3 | 5 | 7 } }>
```

<sub>`POST /roles/{id}/settings` · `addOrUpdateRoleSetting`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
