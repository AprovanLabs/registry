# Custom Roles

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getCustomRoles`

List custom roles — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getCustomRoles(input: {
  /** The maximum number of custom roles to return. Defaults to 20. */
  limit?: number;
  /** Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<CustomRoles>
```

<sub>`GET /api/v2/roles` · `getCustomRoles`</sub>

## `launchdarkly.postCustomRole`

Create custom role — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postCustomRole(input: {
  /** A human-friendly name for the custom role */
  name: string;
  /** The custom role key */
  key: string;
  /** Description of custom role */
  description?: string;
  /** Resource statements for custom role */
  policy: StatementPostList;
  /** Base permissions to use for this role. Defaults to no_access (older roles defaulted to reader). Recommended to set this to no_access in all cases. */
  basePermissions?: RoleType;
  /** The category of resources this role is intended to manage. Can be <code>organization</code>, <code>project</code>, or <code>any</code>. This field is immutable. */
  resourceCategory?: ResourceCategory;
}): Promise<CustomRole>
```

<sub>`POST /api/v2/roles` · `postCustomRole`</sub>

## `launchdarkly.deleteCustomRole`

Delete custom role — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteCustomRole(input: {
  /** The custom role key */
  customRoleKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/roles/{customRoleKey}` · `deleteCustomRole`</sub>

## `launchdarkly.getCustomRole`

Get custom role — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getCustomRole(input: {
  /** The custom role key or ID */
  customRoleKey: string;
}): Promise<CustomRole>
```

<sub>`GET /api/v2/roles/{customRoleKey}` · `getCustomRole`</sub>

## `launchdarkly.patchCustomRole`

Update custom role — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchCustomRole(input: {
  /** A JSON patch representation of the change to make */
  patch: JsonPatch;
  /** Optional comment */
  comment?: string;
  /** The custom role key */
  customRoleKey: string;
}): Promise<CustomRole>
```

<sub>`PATCH /api/v2/roles/{customRoleKey}` · `patchCustomRole`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
