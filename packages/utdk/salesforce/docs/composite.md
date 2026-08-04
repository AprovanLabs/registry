# Composite

1 operation · `@utdk/salesforce`

```ts
import salesforce from "@utdk/salesforce";
```

## `salesforce.compositeBatch`

Execute composite batch requests — [Provider docs](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)

```ts
salesforce.compositeBatch(input: {
  batchRequests?: ({ method: "GET" | "POST" | "PATCH" | "DELETE"; url: string; richInput?: { [key: string]: unknown } })[];
  /** Stop processing if any sub-request fails */
  haltOnError?: boolean;
}): Promise<BatchResponse>
```

<sub>`POST /composite/batch` · `compositeBatch`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
