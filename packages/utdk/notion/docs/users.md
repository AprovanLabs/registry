# Users

1 operation · `@utdk/notion`

```ts
import notion from "@utdk/notion";
```

## `notion.retrieveAUser`

Retrieve a user

```ts
notion.retrieveAUser(input: {
  body?: { [key: string]: unknown };
  id: string;
}, options?: { headers?: { "Notion-Version"?: string } }): Promise<{ avatar_url?: unknown; id?: string; name?: string; object?: string; person?: { email?: string }; type?: string }>
```

<sub>`GET /v1/users/{id}` · `retrieveAUser`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
