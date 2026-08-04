# Users

10 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getUsers`

Get all users

```ts
pipedrive.getUsers(): Promise<{ success?: boolean } & { data?: ({ id?: number; name?: string; default_currency?: string; locale?: string; lang?: number; email?: string; phone?: string | null; activated?: boolean; last_login?: string; created?: string; modified?: string | null; has_created_company?: boolean; access?: ({ app?: "global" | "sales" | "campaigns" | "projects" | "account_settings" | "partnership"; admin?: boolean; p...>
```

<sub>`GET /users` · `getUsers`</sub>

## `pipedrive.addUser`

Add a new user

```ts
pipedrive.addUser(input: {
  /** The email of the user */
  email: string;
  /** The access given to the user. Each item in the array represents access to a specific app. Optionally may include either admin flag or permission set ID to specify which access to give within the app. If both are omitted, the default access for the corresponding app will be used. It requires structure as follows: `[{ app: 'sales', permission_set_id: '62cc4d7f-4038-4352-abf3-a8c1c822b631' }, { app: 'global', admin: true }, { app: 'account_settings' }]`  */
  access?: ({ app: "global" | "sales" | "campaigns" | "projects" | "account_settings" | "partnership"; admin?: boolean; permission_set_id?: string })[];
  /** Whether the user is active or not. `false` = Not activated, `true` = Activated */
  active_flag?: boolean;
}): Promise<{ success?: boolean } & { data?: { id?: number; name?: string; default_currency?: string; locale?: string; lang?: number; email?: string; phone?: string | null; activated?: boolean; last_login?: string; created?: string; modified?: string | null; has_created_company?: boolean; access?: ({ app?: "global" | "sales" | "campaigns" | "projects" | "account_settings" | "partnership"; admin?: boolean; pe...>
```

<sub>`POST /users` · `addUser`</sub>

## `pipedrive.getUser`

Get one user

```ts
pipedrive.getUser(input: {
  /** The ID of the user */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number; name?: string; default_currency?: string; locale?: string; lang?: number; email?: string; phone?: string | null; activated?: boolean; last_login?: string; created?: string; modified?: string | null; has_created_company?: boolean; access?: ({ app?: "global" | "sales" | "campaigns" | "projects" | "account_settings" | "partnership"; admin?: boolean; pe...>
```

<sub>`GET /users/{id}` · `getUser`</sub>

## `pipedrive.updateUser`

Update user details

```ts
pipedrive.updateUser(input: {
  /** Whether the user is active or not. `false` = Not activated, `true` = Activated */
  active_flag: boolean;
  /** The ID of the user */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number; name?: string; default_currency?: string; locale?: string; lang?: number; email?: string; phone?: string | null; activated?: boolean; last_login?: string; created?: string; modified?: string | null; has_created_company?: boolean; access?: ({ app?: "global" | "sales" | "campaigns" | "projects" | "account_settings" | "partnership"; admin?: boolean; pe...>
```

<sub>`PUT /users/{id}` · `updateUser`</sub>

## `pipedrive.getUserFollowers`

List followers of a user

```ts
pipedrive.getUserFollowers(input: {
  /** The ID of the user */
  id: number;
}): Promise<{ success?: boolean } & { data?: (number)[] }>
```

<sub>`GET /users/{id}/followers` · `getUserFollowers`</sub>

## `pipedrive.getUserPermissions`

List user permissions

```ts
pipedrive.getUserPermissions(input: {
  /** The ID of the user */
  id: number;
}): Promise<{ success?: boolean } & { data?: { can_add_custom_fields?: boolean; can_add_products?: boolean; can_add_prospects_as_leads?: boolean; can_bulk_edit_items?: boolean; can_change_visibility_of_items?: boolean; can_convert_deals_to_leads?: boolean; can_create_own_workflow?: boolean; can_delete_activities?: boolean; can_delete_custom_fields?: boolean; can_delete_deals?: boolean; can_edit_custom_fields...>
```

<sub>`GET /users/{id}/permissions` · `getUserPermissions`</sub>

## `pipedrive.getUserRoleAssignments`

List role assignments

```ts
pipedrive.getUserRoleAssignments(input: {
  /** The ID of the user */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean } & { data?: ({ parent_role_id?: number | null; name?: string } & { user_id?: number; role_id?: number; active_flag?: boolean; type?: string })[]; additional_data?: { pagination?: { start?: number; limit?: number; more_items_in_collection?: boolean } } }>
```

<sub>`GET /users/{id}/roleAssignments` · `getUserRoleAssignments`</sub>

## `pipedrive.getUserRoleSettings`

List user role settings

```ts
pipedrive.getUserRoleSettings(input: {
  /** The ID of the user */
  id: number;
}): Promise<{ success?: boolean } & { data?: { deal_default_visibility?: number; lead_default_visibility?: number; org_default_visibility?: number; person_default_visibility?: number; product_default_visibility?: number; deal_access_level?: number; org_access_level?: number; person_access_level?: number; product_access_level?: number } }>
```

<sub>`GET /users/{id}/roleSettings` · `getUserRoleSettings`</sub>

## `pipedrive.findUsersByName`

Find users by name

```ts
pipedrive.findUsersByName(input: {
  /** The search term to look for */
  term: string;
  /** When enabled, the term will only be matched against email addresses of users. Default: `false`. */
  search_by_email?: 0 | 1;
}): Promise<{ success?: boolean } & { data?: ({ id?: number; name?: string; default_currency?: string; locale?: string; lang?: number; email?: string; phone?: string | null; activated?: boolean; last_login?: string; created?: string; modified?: string | null; has_created_company?: boolean; access?: ({ app?: "global" | "sales" | "campaigns" | "projects" | "account_settings" | "partnership"; admin?: boolean; p...>
```

<sub>`GET /users/find` · `findUsersByName`</sub>

## `pipedrive.getCurrentUser`

Get current user data

```ts
pipedrive.getCurrentUser(): Promise<{ success?: boolean } & { data?: { id?: number; name?: string; default_currency?: string; locale?: string; lang?: number; email?: string; phone?: string | null; activated?: boolean; last_login?: string; created?: string; modified?: string | null; has_created_company?: boolean; access?: ({ app?: "global" | "sales" | "campaigns" | "projects" | "account_settings" | "partnership"; admin?: boolean; pe...>
```

<sub>`GET /users/me` · `getCurrentUser`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
