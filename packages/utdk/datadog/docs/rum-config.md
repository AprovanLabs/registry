# RUM Config

3 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getRumConfig`

Get the RUM configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRumConfig(): Promise<RumConfigResponse>
```

<sub>`GET /api/v2/rum/config` · `GetRumConfig`</sub>

## `datadog.updateRumConfig`

Update the RUM configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateRumConfig(input: {
  data: RumConfigUpdateData;
}): Promise<RumConfigResponse>
```

<sub>`PATCH /api/v2/rum/config` · `UpdateRumConfig`</sub>

## `datadog.createRumConfig`

Create the RUM configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createRumConfig(input: {
  data: RumConfigCreateData;
}): Promise<RumConfigResponse>
```

<sub>`POST /api/v2/rum/config` · `CreateRumConfig`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
