# Comments

1 operation · `@utdk/notion`

```ts
import notion from "@utdk/notion";
```

## `notion.retrieveComments`

Retrieve comments

```ts
notion.retrieveComments(input: {
  body?: { [key: string]: unknown };
  block_id?: string;
  page_size?: string;
}, options?: { headers?: { "Notion-Version"?: string } }): Promise<{ comment?: { [key: string]: unknown }; has_more?: boolean; next_cursor?: unknown; object?: string; results?: ({ created_by?: { id?: string; object?: string }; created_time?: string; discussion_id?: string; id?: string; last_edited_time?: string; object?: string; parent?: { block_id?: string; type?: string }; rich_text?: ({ annotations?: { bold?: boolean; code?: boolean; color?: string; italic?: ...>
```

<sub>`GET /v1/comments` · `retrieveComments`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
