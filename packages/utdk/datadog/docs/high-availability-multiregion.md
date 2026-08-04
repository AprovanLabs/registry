# High Availability MultiRegion

2 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getHamrOrgConnection`

Get HAMR organization connection — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getHamrOrgConnection(): Promise<HamrOrgConnectionResponse>
```

<sub>`GET /api/v2/hamr` · `GetHamrOrgConnection`</sub>

## `datadog.createHamrOrgConnection`

Create or update HAMR organization connection — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createHamrOrgConnection(input: {
  data: HamrOrgConnectionDataRequest;
}): Promise<HamrOrgConnectionResponse>
```

<sub>`POST /api/v2/hamr` · `CreateHamrOrgConnection`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
