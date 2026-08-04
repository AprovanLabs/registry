# RUM Remote Config

2 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getRumSdkConfig`

Get a RUM SDK configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRumSdkConfig(input: {
  /** The ID of the RUM SDK configuration. */
  config_id: string;
}): Promise<RumSdkConfigResponse>
```

<sub>`GET /api/v2/remote_config/products/rum/configs/{config_id}` · `GetRumSdkConfig`</sub>

## `datadog.updateRumSdkConfig`

Update a RUM SDK configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateRumSdkConfig(input: {
  data: RumSdkConfigUpdateData;
  /** The ID of the RUM SDK configuration. */
  config_id: string;
}): Promise<RumSdkConfigResponse>
```

<sub>`PUT /api/v2/remote_config/products/rum/configs/{config_id}` · `UpdateRumSdkConfig`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
