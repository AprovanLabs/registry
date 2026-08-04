# RUM Operations

10 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.createRumOperation`

Create a RUM operation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createRumOperation(input: {
  data: RumOperationCreateRequestData;
}): Promise<RumOperationResponse>
```

<sub>`POST /api/v2/rum/operations` · `CreateRUMOperation`</sub>

## `datadog.deleteRumOperation`

Delete a RUM operation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteRumOperation(input: {
  /** The unique identifier of the RUM operation to delete. */
  rum_operation_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/rum/operations/{rum_operation_id}` · `DeleteRUMOperation`</sub>

## `datadog.getRumOperation`

Get a RUM operation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRumOperation(input: {
  /** The unique identifier of the RUM operation. */
  rum_operation_id: string;
}): Promise<RumOperationResponse>
```

<sub>`GET /api/v2/rum/operations/{rum_operation_id}` · `GetRUMOperation`</sub>

## `datadog.updateRumOperation`

Update a RUM operation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateRumOperation(input: {
  data: RumOperationUpdateRequestData;
  /** The unique identifier of the RUM operation to update. */
  rum_operation_id: string;
}): Promise<RumOperationResponse>
```

<sub>`PUT /api/v2/rum/operations/{rum_operation_id}` · `UpdateRUMOperation`</sub>

## `datadog.getRumOperationByName`

Get a RUM operation by name — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRumOperationByName(input: {
  /** The unique name of the RUM operation. */
  name: string;
}): Promise<RumOperationResponse>
```

<sub>`GET /api/v2/rum/operations/by-name/{name}` · `GetRUMOperationByName`</sub>

## `datadog.listRumOperations`

Search RUM operations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listRumOperations(input: {
  /** A search query to filter operations by name. */
  query?: string;
  /** Offset for pagination. */
  "page[offset]"?: number;
  /** Number of items per page. Maximum of 100. */
  "page[limit]"?: number;
  /** Filter operations by the email of their creator. */
  creator?: string;
  /** Filter operations by team. Accepts a comma-separated list of teams. */
  team?: string;
  /** Filter operations by feature ID. Accepts a comma-separated list of feature IDs. */
  feature_id?: string;
  /** Filter operations by RUM application ID. */
  application_id?: string;
}): Promise<RumOperationsListResponse>
```

<sub>`GET /api/v2/rum/operations/search` · `ListRUMOperations`</sub>

## `datadog.listRumOperationStrongLinks`

List RUM operation strong links — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listRumOperationStrongLinks(input: {
  /** Filter strong links by RUM operation ID. */
  operation_id?: string;
  /** Filter strong links by feature ID. */
  feature_id?: string;
  /** Offset for pagination. */
  "page[offset]"?: number;
  /** Number of items per page. Maximum of 200. */
  "page[limit]"?: number;
}): Promise<RumOperationStrongLinksListResponse>
```

<sub>`GET /api/v2/rum/operations/strong_links` · `ListRUMOperationStrongLinks`</sub>

## `datadog.createRumOperationStrongLink`

Create a RUM operation strong link — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createRumOperationStrongLink(input: {
  data: RumOperationStrongLinkCreateRequestData;
}): Promise<RumOperationStrongLinkResponse>
```

<sub>`POST /api/v2/rum/operations/strong_links` · `CreateRUMOperationStrongLink`</sub>

## `datadog.deleteRumOperationStrongLink`

Delete a RUM operation strong link — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteRumOperationStrongLink(input: {
  /** The unique identifier of the RUM operation. */
  rum_operation_id: string;
  /** The unique identifier of the feature. */
  feature_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/rum/operations/strong_links/{rum_operation_id}/{feature_id}` · `DeleteRUMOperationStrongLink`</sub>

## `datadog.updateRumOperationStrongLink`

Update a RUM operation strong link — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateRumOperationStrongLink(input: {
  data: RumOperationStrongLinkUpdateRequestData;
  /** The unique identifier of the RUM operation. */
  rum_operation_id: string;
  /** The unique identifier of the feature. */
  feature_id: string;
}): Promise<RumOperationStrongLinkResponse>
```

<sub>`PUT /api/v2/rum/operations/strong_links/{rum_operation_id}/{feature_id}` · `UpdateRUMOperationStrongLink`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
