# Team Memberships

4 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getTeamMemberships`

Get team memberships — [Provider docs](https://asana.com/support)

```ts
asana.getTeamMemberships(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** Globally unique identifier for the team. */
  team?: string;
  /** A string identifying a user. This can either be the string "me", an email, or the gid of a user. This parameter must be used with the workspace parameter. */
  user?: string;
  /** Globally unique identifier for the workspace. This parameter must be used with the user parameter. */
  workspace?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("is_admin" | "is_guest" | "is_limited_access" | "offset" | "path" | "team" | "team.name" | "uri" | "user" | "user.name")[];
}): Promise<{ data?: (TeamMembershipCompact)[]; next_page?: NextPage }>
```

<sub>`GET /team_memberships` · `getTeamMemberships`</sub>

## `asana.getTeamMembership`

Get a team membership — [Provider docs](https://asana.com/support)

```ts
asana.getTeamMembership(input: {
  team_membership_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("is_admin" | "is_guest" | "is_limited_access" | "team" | "team.name" | "user" | "user.name")[];
}): Promise<{ data?: TeamMembershipResponse }>
```

<sub>`GET /team_memberships/{team_membership_gid}` · `getTeamMembership`</sub>

## `asana.getTeamMembershipsForTeam`

Get memberships from a team — [Provider docs](https://asana.com/support)

```ts
asana.getTeamMembershipsForTeam(input: {
  /** Globally unique identifier for the team. */
  team_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("is_admin" | "is_guest" | "is_limited_access" | "offset" | "path" | "team" | "team.name" | "uri" | "user" | "user.name")[];
}): Promise<{ data?: (TeamMembershipCompact)[]; next_page?: NextPage }>
```

<sub>`GET /teams/{team_gid}/team_memberships` · `getTeamMembershipsForTeam`</sub>

## `asana.getTeamMembershipsForUser`

Get memberships from a user — [Provider docs](https://asana.com/support)

```ts
asana.getTeamMembershipsForUser(input: {
  /** A string identifying a user. This can either be the string "me", an email, or the gid of a user. */
  user_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** Globally unique identifier for the workspace. */
  workspace: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("is_admin" | "is_guest" | "is_limited_access" | "offset" | "path" | "team" | "team.name" | "uri" | "user" | "user.name")[];
}): Promise<{ data?: (TeamMembershipCompact)[]; next_page?: NextPage }>
```

<sub>`GET /users/{user_gid}/team_memberships` · `getTeamMembershipsForUser`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
