# APM

1 operation · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getServiceList`

Get service list — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getServiceList(input: {
  /** Filter services by environment. Can be set to `*` to return all services across all environments. */
  "filter[env]": string;
}): Promise<ServiceList>
```

<sub>`GET /api/v2/apm/services` · `GetServiceList`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
