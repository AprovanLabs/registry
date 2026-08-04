# Product Analytics

3 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.submitProductAnalyticsEvent`

Send server-side events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.submitProductAnalyticsEvent(input: {
  account?: ProductAnalyticsServerSideEventItemAccount;
  application: ProductAnalyticsServerSideEventItemApplication;
  event: ProductAnalyticsServerSideEventItemEvent;
  session?: ProductAnalyticsServerSideEventItemSession;
  type: ProductAnalyticsServerSideEventItemType;
  usr?: ProductAnalyticsServerSideEventItemUsr;
}): Promise<{ [key: string]: unknown }>
```

<sub>`POST /api/v2/prodlytics` · `SubmitProductAnalyticsEvent`</sub>

## `datadog.queryProductAnalyticsScalar`

Compute scalar analytics — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.queryProductAnalyticsScalar(input: {
  data: ProductAnalyticsAnalyticsRequestData;
}): Promise<ProductAnalyticsScalarResponse>
```

<sub>`POST /api/v2/product-analytics/analytics/scalar` · `QueryProductAnalyticsScalar`</sub>

## `datadog.queryProductAnalyticsTimeseries`

Compute timeseries analytics — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.queryProductAnalyticsTimeseries(input: {
  data: ProductAnalyticsAnalyticsRequestData;
}): Promise<ProductAnalyticsTimeseriesResponse>
```

<sub>`POST /api/v2/product-analytics/analytics/timeseries` · `QueryProductAnalyticsTimeseries`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
