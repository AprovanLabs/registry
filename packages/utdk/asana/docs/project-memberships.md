# Project Memberships

2 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getProjectMembership`

Get a project membership — [Provider docs](https://asana.com/support)

```ts
asana.getProjectMembership(input: {
  project_membership_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("access_level" | "member" | "member.name" | "parent" | "parent.name" | "project" | "project.name" | "user" | "user.name" | "write_access")[];
}): Promise<{ data?: ProjectMembershipNormalResponse }>
```

<sub>`GET /project_memberships/{project_membership_gid}` · `getProjectMembership`</sub>

## `asana.getProjectMembershipsForProject`

Get memberships from a project — [Provider docs](https://asana.com/support)

```ts
asana.getProjectMembershipsForProject(input: {
  /** Globally unique identifier for the project. */
  project_gid: string;
  /** A string identifying a user. This can either be the string "me", an email, or the gid of a user. */
  user?: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("access_level" | "member" | "member.name" | "offset" | "parent" | "parent.name" | "path" | "uri")[];
}): Promise<{ data?: (ProjectMembershipCompact)[]; next_page?: NextPage }>
```

<sub>`GET /projects/{project_gid}/project_memberships` · `getProjectMembershipsForProject`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
