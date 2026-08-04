# Rum Audience Management

10 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getMapping`

Get mapping — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getMapping(input: {
  /** The entity for which to get the mapping */
  entity: string;
}): Promise<GetMappingResponse>
```

<sub>`GET /api/v2/product-analytics/{entity}/mapping` · `GetMapping`</sub>

## `datadog.createConnection`

Create connection — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createConnection(input: {
  data?: CreateConnectionRequestData;
  /** The entity for which to create the connection */
  entity: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/product-analytics/{entity}/mapping/connection` · `CreateConnection`</sub>

## `datadog.updateConnection`

Update connection — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateConnection(input: {
  data?: UpdateConnectionRequestData;
  /** The entity for which to update the connection */
  entity: string;
}): Promise<undefined>
```

<sub>`PUT /api/v2/product-analytics/{entity}/mapping/connection` · `UpdateConnection`</sub>

## `datadog.deleteConnection`

Delete connection — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteConnection(input: {
  /** The connection ID to delete */
  id: string;
  /** The entity for which to delete the connection */
  entity: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/product-analytics/{entity}/mapping/connection/{id}` · `DeleteConnection`</sub>

## `datadog.listConnections`

List connections — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listConnections(input: {
  /** The entity for which to list connections */
  entity: string;
}): Promise<ListConnectionsResponse>
```

<sub>`GET /api/v2/product-analytics/{entity}/mapping/connections` · `ListConnections`</sub>

## `datadog.getAccountFacetInfo`

Get account facet info — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAccountFacetInfo(input: {
  data?: FacetInfoRequestData;
}): Promise<FacetInfoResponse>
```

<sub>`POST /api/v2/product-analytics/accounts/facet_info` · `GetAccountFacetInfo`</sub>

## `datadog.queryAccounts`

Query accounts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.queryAccounts(input: {
  data?: QueryAccountRequestData;
}): Promise<QueryResponse>
```

<sub>`POST /api/v2/product-analytics/accounts/query` · `QueryAccounts`</sub>

## `datadog.queryEventFilteredUsers`

Query event filtered users — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.queryEventFilteredUsers(input: {
  data?: QueryEventFilteredUsersRequestData;
}): Promise<QueryResponse>
```

<sub>`POST /api/v2/product-analytics/users/event_filtered_query` · `QueryEventFilteredUsers`</sub>

## `datadog.getUserFacetInfo`

Get user facet info — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getUserFacetInfo(input: {
  data?: FacetInfoRequestData;
}): Promise<FacetInfoResponse>
```

<sub>`POST /api/v2/product-analytics/users/facet_info` · `GetUserFacetInfo`</sub>

## `datadog.queryUsers`

Query users — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.queryUsers(input: {
  data?: QueryUsersRequestData;
}): Promise<QueryResponse>
```

<sub>`POST /api/v2/product-analytics/users/query` · `QueryUsers`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
