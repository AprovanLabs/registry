# PermissionSets

3 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getPermissionSets`

Get all permission sets

```ts
pipedrive.getPermissionSets(input: {
  /** The app to filter the permission sets by */
  app?: "sales" | "projects" | "campaigns" | "global" | "account_settings";
}): Promise<{ success?: boolean } & { data?: ({ id?: string; name?: string; description?: string; app?: "sales" | "projects" | "campaigns" | "global" | "account_settings"; type?: "admin" | "manager" | "regular" | "custom"; assignment_count?: number })[] }>
```

<sub>`GET /permissionSets` · `getPermissionSets`</sub>

## `pipedrive.getPermissionSet`

Get one permission set

```ts
pipedrive.getPermissionSet(input: {
  /** The ID of the permission set */
  id: string;
}): Promise<{ id?: string; name?: string; description?: string; app?: "sales" | "projects" | "campaigns" | "global" | "account_settings"; type?: "admin" | "manager" | "regular" | "custom"; assignment_count?: number } & { contents?: (string)[] }>
```

<sub>`GET /permissionSets/{id}` · `getPermissionSet`</sub>

## `pipedrive.getPermissionSetAssignments`

List permission set assignments

```ts
pipedrive.getPermissionSetAssignments(input: {
  /** The ID of the permission set */
  id: string;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean } & { data?: ({ user_id?: number; permission_set_id?: string; name?: string })[] }>
```

<sub>`GET /permissionSets/{id}/assignments` · `getPermissionSetAssignments`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
