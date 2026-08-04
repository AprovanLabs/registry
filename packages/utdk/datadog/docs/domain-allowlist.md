# Domain Allowlist

2 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getDomainAllowlist`

Get Domain Allowlist — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDomainAllowlist(): Promise<DomainAllowlistResponse>
```

<sub>`GET /api/v2/domain_allowlist` · `GetDomainAllowlist`</sub>

## `datadog.patchDomainAllowlist`

Sets Domain Allowlist — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.patchDomainAllowlist(input: {
  data: DomainAllowlist;
}): Promise<DomainAllowlistResponse>
```

<sub>`PATCH /api/v2/domain_allowlist` · `PatchDomainAllowlist`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
