# Workspace Memberships

3 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getWorkspaceMembershipsForUser`

Get workspace memberships for a user — [Provider docs](https://asana.com/support)

```ts
asana.getWorkspaceMembershipsForUser(input: {
  /** A string identifying a user. This can either be the string "me", an email, or the gid of a user. */
  user_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_at" | "is_active" | "is_admin" | "is_guest" | "is_view_only" | "offset" | "path" | "uri" | "user" | "user.name" | "user_task_list" | "user_task_list.name" | "user_task_list.owner" | "user_task_list.workspace" | "vacation_dates" | "vacation_dates.end_on" | "vacation_dates.start_on" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (WorkspaceMembershipCompact)[]; next_page?: NextPage }>
```

<sub>`GET /users/{user_gid}/workspace_memberships` · `getWorkspaceMembershipsForUser`</sub>

## `asana.getWorkspaceMembership`

Get a workspace membership — [Provider docs](https://asana.com/support)

```ts
asana.getWorkspaceMembership(input: {
  workspace_membership_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_at" | "is_active" | "is_admin" | "is_guest" | "is_view_only" | "user" | "user.name" | "user_task_list" | "user_task_list.name" | "user_task_list.owner" | "user_task_list.workspace" | "vacation_dates" | "vacation_dates.end_on" | "vacation_dates.start_on" | "workspace" | "workspace.name")[];
}): Promise<{ data?: WorkspaceMembershipResponse }>
```

<sub>`GET /workspace_memberships/{workspace_membership_gid}` · `getWorkspaceMembership`</sub>

## `asana.getWorkspaceMembershipsForWorkspace`

Get the workspace memberships for a workspace — [Provider docs](https://asana.com/support)

```ts
asana.getWorkspaceMembershipsForWorkspace(input: {
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** A string identifying a user. This can either be the string "me", an email, or the gid of a user. */
  user?: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_at" | "is_active" | "is_admin" | "is_guest" | "is_view_only" | "offset" | "path" | "uri" | "user" | "user.name" | "user_task_list" | "user_task_list.name" | "user_task_list.owner" | "user_task_list.workspace" | "vacation_dates" | "vacation_dates.end_on" | "vacation_dates.start_on" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (WorkspaceMembershipCompact)[]; next_page?: NextPage }>
```

<sub>`GET /workspaces/{workspace_gid}/workspace_memberships` · `getWorkspaceMembershipsForWorkspace`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
