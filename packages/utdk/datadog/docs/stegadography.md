# Stegadography

1 operation · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getStegadographyWidgets`

Get widgets from an image — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getStegadographyWidgets(input: {
  /** PNG image file to scan for embedded watermarks. */
  image: string;
}): Promise<StegadographyGetWidgetsResponse>
```

<sub>`POST /api/v2/stegadography/get-widgets` · `GetStegadographyWidgets`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
