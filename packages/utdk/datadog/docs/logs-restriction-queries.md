# Logs Restriction Queries

11 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listRestrictionQueries`

List restriction queries — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listRestrictionQueries(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
}): Promise<RestrictionQueryListResponse>
```

<sub>`GET /api/v2/logs/config/restriction_queries` · `ListRestrictionQueries`</sub>

## `datadog.createRestrictionQuery`

Create a restriction query — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createRestrictionQuery(input: {
  data?: RestrictionQueryCreateData;
}): Promise<RestrictionQueryWithoutRelationshipsResponse>
```

<sub>`POST /api/v2/logs/config/restriction_queries` · `CreateRestrictionQuery`</sub>

## `datadog.deleteRestrictionQuery`

Delete a restriction query — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteRestrictionQuery(input: {
  /** The ID of the restriction query. */
  restriction_query_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/logs/config/restriction_queries/{restriction_query_id}` · `DeleteRestrictionQuery`</sub>

## `datadog.getRestrictionQuery`

Get a restriction query — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRestrictionQuery(input: {
  /** The ID of the restriction query. */
  restriction_query_id: string;
}): Promise<RestrictionQueryWithRelationshipsResponse>
```

<sub>`GET /api/v2/logs/config/restriction_queries/{restriction_query_id}` · `GetRestrictionQuery`</sub>

## `datadog.updateRestrictionQuery`

Update a restriction query — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateRestrictionQuery(input: {
  data?: RestrictionQueryUpdateData;
  /** The ID of the restriction query. */
  restriction_query_id: string;
}): Promise<RestrictionQueryWithoutRelationshipsResponse>
```

<sub>`PATCH /api/v2/logs/config/restriction_queries/{restriction_query_id}` · `UpdateRestrictionQuery`</sub>

## `datadog.replaceRestrictionQuery`

Replace a restriction query — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.replaceRestrictionQuery(input: {
  data?: RestrictionQueryUpdateData;
  /** The ID of the restriction query. */
  restriction_query_id: string;
}): Promise<RestrictionQueryWithoutRelationshipsResponse>
```

<sub>`PUT /api/v2/logs/config/restriction_queries/{restriction_query_id}` · `ReplaceRestrictionQuery`</sub>

## `datadog.removeRoleFromRestrictionQuery`

Revoke role from a restriction query — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.removeRoleFromRestrictionQuery(input: {
  data?: RelationshipToRoleData;
  /** The ID of the restriction query. */
  restriction_query_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/logs/config/restriction_queries/{restriction_query_id}/roles` · `RemoveRoleFromRestrictionQuery`</sub>

## `datadog.listRestrictionQueryRoles`

List roles for a restriction query — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listRestrictionQueryRoles(input: {
  /** The ID of the restriction query. */
  restriction_query_id: string;
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
}): Promise<RestrictionQueryRolesResponse>
```

<sub>`GET /api/v2/logs/config/restriction_queries/{restriction_query_id}/roles` · `ListRestrictionQueryRoles`</sub>

## `datadog.addRoleToRestrictionQuery`

Grant role to a restriction query — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.addRoleToRestrictionQuery(input: {
  data?: RelationshipToRoleData;
  /** The ID of the restriction query. */
  restriction_query_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/logs/config/restriction_queries/{restriction_query_id}/roles` · `AddRoleToRestrictionQuery`</sub>

## `datadog.getRoleRestrictionQuery`

Get restriction query for a given role — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRoleRestrictionQuery(input: {
  /** The ID of the role. */
  role_id: string;
}): Promise<RestrictionQueryListResponse>
```

<sub>`GET /api/v2/logs/config/restriction_queries/role/{role_id}` · `GetRoleRestrictionQuery`</sub>

## `datadog.listUserRestrictionQueries`

Get all restriction queries for a given user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listUserRestrictionQueries(input: {
  /** The ID of the user. */
  user_id: string;
}): Promise<RestrictionQueryListResponse>
```

<sub>`GET /api/v2/logs/config/restriction_queries/user/{user_id}` · `ListUserRestrictionQueries`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
