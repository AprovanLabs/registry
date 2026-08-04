# Memberships

5 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getMemberships`

Get multiple memberships — [Provider docs](https://asana.com/support)

```ts
asana.getMemberships(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Globally unique identifier for `goal`, `project`, `portfolio`, `custom_type`, or `custom_field`. This parameter is optional when `resource_subtype` is provided along with `member` of type `team`. */
  parent?: string;
  /** Globally unique identifier for `team` or `user`. When used with `resource_subtype` and without `parent`, `member` must be of type `team`. For user-type memberships `parent` parameter is required to disambiguate the workspace from which memberships should be retrieved. */
  member?: string;
  /** The type of membership to return. Required when `parent` is absent. Currently supported value is `project_membership` (when `member` is a team GID, returns all project memberships for that team). */
  resource_subtype?: "project_membership";
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("offset" | "path" | "uri")[];
}): Promise<{ data?: (MembershipCompact)[]; next_page?: NextPage }>
```

<sub>`GET /memberships` · `getMemberships`</sub>

## `asana.createMembership`

Create a membership — [Provider docs](https://asana.com/support)

```ts
asana.createMembership(input: {
  data?: CreateMembershipRequest;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: MembershipResponse }>
```

<sub>`POST /memberships` · `createMembership`</sub>

## `asana.deleteMembership`

Delete a membership — [Provider docs](https://asana.com/support)

```ts
asana.deleteMembership(input: {
  /** Globally unique identifier for the membership. */
  membership_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /memberships/{membership_gid}` · `deleteMembership`</sub>

## `asana.getMembership`

Get a membership — [Provider docs](https://asana.com/support)

```ts
asana.getMembership(input: {
  /** Globally unique identifier for the membership. */
  membership_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: MembershipResponse }>
```

<sub>`GET /memberships/{membership_gid}` · `getMembership`</sub>

## `asana.updateMembership`

Update a membership — [Provider docs](https://asana.com/support)

```ts
asana.updateMembership(input: {
  data?: MembershipRequest;
  /** Globally unique identifier for the membership. */
  membership_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: MembershipResponse }>
```

<sub>`PUT /memberships/{membership_gid}` · `updateMembership`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
