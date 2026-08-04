# Users

1 operation · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.getMe`

Get current user — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getMe(): Promise<User & { email: string }>
```

<sub>`GET /v1/me` · `getMe`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
