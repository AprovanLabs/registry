# Filter Sharing

6 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getSharePermissions`

Get share permissions — [Provider docs](http://www.atlassian.com)

```ts
jira.getSharePermissions(input: {
  /** The ID of the filter. */
  id: number;
}): Promise<(SharePermission)[]>
```

<sub>`GET /rest/api/3/filter/{id}/permission` · `getSharePermissions`</sub>

## `jira.addSharePermission`

Add share permission — [Provider docs](http://www.atlassian.com)

```ts
jira.addSharePermission(input: {
  /** The user account ID that the filter is shared with. For a request, specify the `accountId` property for the user. */
  accountId?: string;
  /** The ID of the group, which uniquely identifies the group across all Atlassian products.For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*. Cannot be provided with `groupname`. */
  groupId?: string;
  /** The name of the group to share the filter with. Set `type` to `group`. Please note that the name of a group is mutable, to reliably identify a group use `groupId`. */
  groupname?: string;
  /** The ID of the project to share the filter with. Set `type` to `project`. */
  projectId?: string;
  /** The ID of the project role to share the filter with. Set `type` to `projectRole` and the `projectId` for the project that the role is in. */
  projectRoleId?: string;
  /** The rights for the share permission. */
  rights?: number;
  /** The type of the share permission.Specify the type as follows:   *  `user` Share with a user.  *  `group` Share with a group. Specify `groupname` as well.  *  `project` Share with a project. Specify `projectId` as well.  *  `projectRole` Share with a project role in a project. Specify `projectId` and `projectRoleId` as well.  *  `global` Share globally, including anonymous users. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.  *  `authenticated` Share with all logged-in users. This shows as `loggedin` in the response. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set. */
  type: "user" | "project" | "group" | "projectRole" | "global" | "authenticated";
  /** The ID of the filter. */
  id: number;
}): Promise<(SharePermission)[]>
```

<sub>`POST /rest/api/3/filter/{id}/permission` · `addSharePermission`</sub>

## `jira.deleteSharePermission`

Delete share permission — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteSharePermission(input: {
  /** The ID of the filter. */
  id: number;
  /** The ID of the share permission. */
  permissionId: number;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/filter/{id}/permission/{permissionId}` · `deleteSharePermission`</sub>

## `jira.getSharePermission`

Get share permission — [Provider docs](http://www.atlassian.com)

```ts
jira.getSharePermission(input: {
  /** The ID of the filter. */
  id: number;
  /** The ID of the share permission. */
  permissionId: number;
}): Promise<SharePermission>
```

<sub>`GET /rest/api/3/filter/{id}/permission/{permissionId}` · `getSharePermission`</sub>

## `jira.getDefaultShareScope`

Get default share scope — [Provider docs](http://www.atlassian.com)

```ts
jira.getDefaultShareScope(): Promise<DefaultShareScope>
```

<sub>`GET /rest/api/3/filter/defaultShareScope` · `getDefaultShareScope`</sub>

## `jira.setDefaultShareScope`

Set default share scope — [Provider docs](http://www.atlassian.com)

```ts
jira.setDefaultShareScope(input: {
  /** The scope of the default sharing for new filters and dashboards:   *  `AUTHENTICATED` Shared with all logged-in users.  *  `GLOBAL` Shared with all logged-in users. This shows as `AUTHENTICATED` in the response.  *  `PRIVATE` Not shared with any users. */
  scope: "GLOBAL" | "AUTHENTICATED" | "PRIVATE";
}): Promise<DefaultShareScope>
```

<sub>`PUT /rest/api/3/filter/defaultShareScope` · `setDefaultShareScope`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
