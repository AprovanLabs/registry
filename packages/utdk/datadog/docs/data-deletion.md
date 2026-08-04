# Data Deletion

3 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.createDataDeletionRequest`

Creates a data deletion request — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createDataDeletionRequest(input: {
  data: CreateDataDeletionRequestBodyData;
  /** Name of the product to be deleted, either `logs` or `rum`. */
  product: string;
}): Promise<CreateDataDeletionResponseBody>
```

<sub>`POST /api/v2/deletion/data/{product}` · `CreateDataDeletionRequest`</sub>

## `datadog.getDataDeletionRequests`

Gets a list of data deletion requests — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDataDeletionRequests(input: {
  /** The next page of the previous search. If the next_page parameter is included, the rest of the query elements are ignored. */
  next_page?: string;
  /** Retrieve only the requests related to the given product. */
  product?: string;
  /** Retrieve only the requests that matches the given query. */
  query?: string;
  /** Retrieve only the requests with the given status. */
  status?: string;
  /** Sets the page size of the search. */
  page_size?: number;
}): Promise<GetDataDeletionsResponseBody>
```

<sub>`GET /api/v2/deletion/requests` · `GetDataDeletionRequests`</sub>

## `datadog.cancelDataDeletionRequest`

Cancels a data deletion request — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.cancelDataDeletionRequest(input: {
  /** ID of the deletion request. */
  id: string;
}): Promise<CancelDataDeletionResponseBody>
```

<sub>`PUT /api/v2/deletion/requests/{id}/cancel` · `CancelDataDeletionRequest`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
