# IP Allowlist

2 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getIpAllowlist`

Get IP Allowlist — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIpAllowlist(): Promise<IpAllowlistResponse>
```

<sub>`GET /api/v2/ip_allowlist` · `GetIPAllowlist`</sub>

## `datadog.updateIpAllowlist`

Update IP Allowlist — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIpAllowlist(input: {
  data: IpAllowlistData;
}): Promise<IpAllowlistResponse>
```

<sub>`PATCH /api/v2/ip_allowlist` · `UpdateIPAllowlist`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
