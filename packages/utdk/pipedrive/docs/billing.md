# Billing

1 operation · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getCompanyAddons`

Get all add-ons for a single company

```ts
pipedrive.getCompanyAddons(): Promise<{ success?: boolean } & { data?: ({ [key: string]: unknown })[] }>
```

<sub>`GET /billing/subscriptions/addons` · `getCompanyAddons`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
