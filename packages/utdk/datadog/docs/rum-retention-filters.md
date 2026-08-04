# Rum Retention Filters

9 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.orderRetentionFilters`

Order RUM retention filters — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.orderRetentionFilters(input: {
  /** A list of RUM retention filter IDs along with type. */
  data?: (RumRetentionFiltersOrderData)[];
  /** RUM application ID. */
  app_id: string;
}): Promise<RumRetentionFiltersOrderResponse>
```

<sub>`PATCH /api/v2/rum/applications/{app_id}/relationships/retention_filters` · `OrderRetentionFilters`</sub>

## `datadog.listRetentionFilters`

Get all RUM retention filters — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listRetentionFilters(input: {
  /** RUM application ID. */
  app_id: string;
}): Promise<RumRetentionFiltersResponse>
```

<sub>`GET /api/v2/rum/applications/{app_id}/retention_filters` · `ListRetentionFilters`</sub>

## `datadog.createRetentionFilter`

Create a RUM retention filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createRetentionFilter(input: {
  data: RumRetentionFilterCreateData;
  /** RUM application ID. */
  app_id: string;
}): Promise<RumRetentionFilterResponse>
```

<sub>`POST /api/v2/rum/applications/{app_id}/retention_filters` · `CreateRetentionFilter`</sub>

## `datadog.deleteRetentionFilter`

Delete a RUM retention filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteRetentionFilter(input: {
  /** RUM application ID. */
  app_id: string;
  /** Retention filter ID. */
  rf_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/rum/applications/{app_id}/retention_filters/{rf_id}` · `DeleteRetentionFilter`</sub>

## `datadog.getRetentionFilter`

Get a RUM retention filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRetentionFilter(input: {
  /** RUM application ID. */
  app_id: string;
  /** Retention filter ID. */
  rf_id: string;
}): Promise<RumRetentionFilterResponse>
```

<sub>`GET /api/v2/rum/applications/{app_id}/retention_filters/{rf_id}` · `GetRetentionFilter`</sub>

## `datadog.updateRetentionFilter`

Update a RUM retention filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateRetentionFilter(input: {
  data: RumRetentionFilterUpdateData;
  /** RUM application ID. */
  app_id: string;
  /** Retention filter ID. */
  rf_id: string;
}): Promise<RumRetentionFilterResponse>
```

<sub>`PATCH /api/v2/rum/applications/{app_id}/retention_filters/{rf_id}` · `UpdateRetentionFilter`</sub>

## `datadog.listPermanentRetentionFilters`

Get all permanent RUM retention filters — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listPermanentRetentionFilters(input: {
  /** RUM application ID. */
  app_id: string;
}): Promise<RumPermanentRetentionFiltersResponse>
```

<sub>`GET /api/v2/rum/applications/{app_id}/retention_filters/permanent` · `ListPermanentRetentionFilters`</sub>

## `datadog.getPermanentRetentionFilter`

Get a permanent RUM retention filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getPermanentRetentionFilter(input: {
  /** RUM application ID. */
  app_id: string;
  permanent_rf_id: RumPermanentRetentionFilterId;
}): Promise<RumPermanentRetentionFilterResponse>
```

<sub>`GET /api/v2/rum/applications/{app_id}/retention_filters/permanent/{permanent_rf_id}` · `GetPermanentRetentionFilter`</sub>

## `datadog.updatePermanentRetentionFilter`

Update a permanent RUM retention filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updatePermanentRetentionFilter(input: {
  data: RumPermanentRetentionFilterUpdateData;
  /** RUM application ID. */
  app_id: string;
  permanent_rf_id: RumPermanentRetentionFilterId;
}): Promise<RumPermanentRetentionFilterResponse>
```

<sub>`PATCH /api/v2/rum/applications/{app_id}/retention_filters/permanent/{permanent_rf_id}` · `UpdatePermanentRetentionFilter`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
