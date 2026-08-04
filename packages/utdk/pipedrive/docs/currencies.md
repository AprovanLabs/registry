# Currencies

1 operation · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getCurrencies`

Get all supported currencies

```ts
pipedrive.getCurrencies(input: {
  /** Optional search term that is searched for from currency's name and/or code */
  term?: string;
}): Promise<{ success?: boolean; data?: ({ id?: number; code?: string; name?: string; decimal_points?: number; symbol?: string; active_flag?: boolean; is_custom_flag?: boolean })[] }>
```

<sub>`GET /currencies` · `getCurrencies`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
