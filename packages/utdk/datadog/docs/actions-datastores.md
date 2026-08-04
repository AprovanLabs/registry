# Actions Datastores

10 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listDatastores`

List datastores — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listDatastores(): Promise<DatastoreArray>
```

<sub>`GET /api/v2/actions-datastores` · `ListDatastores`</sub>

## `datadog.createDatastore`

Create datastore — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createDatastore(input: {
  data?: CreateAppsDatastoreRequestData;
}): Promise<CreateAppsDatastoreResponse>
```

<sub>`POST /api/v2/actions-datastores` · `CreateDatastore`</sub>

## `datadog.deleteDatastore`

Delete datastore — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteDatastore(input: {
  /** The unique identifier of the datastore to retrieve. */
  datastore_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/actions-datastores/{datastore_id}` · `DeleteDatastore`</sub>

## `datadog.getDatastore`

Get datastore — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDatastore(input: {
  /** The unique identifier of the datastore to retrieve. */
  datastore_id: string;
}): Promise<Datastore>
```

<sub>`GET /api/v2/actions-datastores/{datastore_id}` · `GetDatastore`</sub>

## `datadog.updateDatastore`

Update datastore — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateDatastore(input: {
  data?: UpdateAppsDatastoreRequestData;
  /** The unique identifier of the datastore to retrieve. */
  datastore_id: string;
}): Promise<Datastore>
```

<sub>`PATCH /api/v2/actions-datastores/{datastore_id}` · `UpdateDatastore`</sub>

## `datadog.deleteDatastoreItem`

Delete datastore item — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteDatastoreItem(input: {
  data?: DeleteAppsDatastoreItemRequestData;
  /** The unique identifier of the datastore to retrieve. */
  datastore_id: string;
}): Promise<DeleteAppsDatastoreItemResponse>
```

<sub>`DELETE /api/v2/actions-datastores/{datastore_id}/items` · `DeleteDatastoreItem`</sub>

## `datadog.listDatastoreItems`

List datastore items — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listDatastoreItems(input: {
  /** The unique identifier of the datastore to retrieve. */
  datastore_id: string;
  /** Optional query filter to search items using the [logs search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/). */
  filter?: string;
  /** Optional primary key value to retrieve a specific item. Cannot be used together with the filter parameter. */
  item_key?: string;
  /** Optional field to limit the number of items to return per page for pagination. Up to 100 items can be returned per page. */
  "page[limit]"?: number;
  /** Optional field to offset the number of items to skip from the beginning of the result set for pagination. */
  "page[offset]"?: number;
  /** Optional field to sort results by. Prefix with '-' for descending order (e.g., '-created_at'). */
  sort?: string;
}): Promise<ItemApiPayloadArray>
```

<sub>`GET /api/v2/actions-datastores/{datastore_id}/items` · `ListDatastoreItems`</sub>

## `datadog.updateDatastoreItem`

Update datastore item — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateDatastoreItem(input: {
  data?: UpdateAppsDatastoreItemRequestData;
  /** The unique identifier of the datastore to retrieve. */
  datastore_id: string;
}): Promise<ItemApiPayload>
```

<sub>`PATCH /api/v2/actions-datastores/{datastore_id}/items` · `UpdateDatastoreItem`</sub>

## `datadog.bulkDeleteDatastoreItems`

Bulk delete datastore items — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.bulkDeleteDatastoreItems(input: {
  data?: BulkDeleteAppsDatastoreItemsRequestData;
  /** The ID of the datastore. */
  datastore_id: string;
}): Promise<DeleteAppsDatastoreItemResponseArray>
```

<sub>`DELETE /api/v2/actions-datastores/{datastore_id}/items/bulk` · `BulkDeleteDatastoreItems`</sub>

## `datadog.bulkWriteDatastoreItems`

Bulk write datastore items — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.bulkWriteDatastoreItems(input: {
  data?: BulkPutAppsDatastoreItemsRequestData;
  /** The unique identifier of the datastore to retrieve. */
  datastore_id: string;
}): Promise<PutAppsDatastoreItemResponseArray>
```

<sub>`POST /api/v2/actions-datastores/{datastore_id}/items/bulk` · `BulkWriteDatastoreItems`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
