# Blocks

5 operations · `@utdk/notion`

```ts
import notion from "@utdk/notion";
```

## `notion.deleteABlock`

Delete a block

```ts
notion.deleteABlock(input: {
  id: string;
}, options?: { headers?: { "Notion-Version"?: string } }): Promise<{ archived?: boolean; created_by?: { id?: string; object?: string }; created_time?: string; has_children?: boolean; id?: string; last_edited_by?: { id?: string; object?: string }; last_edited_time?: string; object?: string; paragraph?: { text?: ({ annotations?: { bold?: boolean; code?: boolean; color?: string; italic?: boolean; strikethrough?: boolean; underline?: boolean }; href?: unknown; plain...>
```

<sub>`DELETE /v1/blocks/{id}` · `deleteABlock`</sub>

## `notion.retrieveABlock`

Retrieve a block

```ts
notion.retrieveABlock(input: {
  id: string;
}, options?: { headers?: { "Notion-Version"?: string } }): Promise<{ created_time?: string; has_children?: boolean; id?: string; last_edited_time?: string; object?: string; paragraph?: { text?: ({ annotations?: { bold?: boolean; code?: boolean; color?: string; italic?: boolean; strikethrough?: boolean; underline?: boolean }; href?: unknown; plain_text?: string; text?: { content?: string; link?: unknown }; type?: string })[] }; type?: string }>
```

<sub>`GET /v1/blocks/{id}` · `retrieveABlock`</sub>

## `notion.updateABlock`

Update a block

```ts
notion.updateABlock(input: {
  paragraph?: { rich_text?: ({ text?: { content?: string }; type?: string })[] };
  id: string;
}, options?: { headers?: { "Notion-Version"?: string } }): Promise<{ created_time?: string; has_children?: boolean; id?: string; last_edited_time?: string; object?: string; paragraph?: { text?: ({ annotations?: { bold?: boolean; code?: boolean; color?: string; italic?: boolean; strikethrough?: boolean; underline?: boolean }; href?: unknown; plain_text?: string; text?: { content?: string; link?: unknown }; type?: string })[] }; type?: string }>
```

<sub>`PATCH /v1/blocks/{id}` · `updateABlock`</sub>

## `notion.retrieveBlockChildren`

Retrieve block children

```ts
notion.retrieveBlockChildren(input: {
  id: string;
  page_size?: string;
}, options?: { headers?: { "Notion-Version"?: string } }): Promise<{ has_more?: boolean; next_cursor?: unknown; object?: string; results?: ({ created_time?: string; has_children?: boolean; id?: string; last_edited_time?: string; object?: string; paragraph?: { text?: ({ annotations?: { bold?: boolean; code?: boolean; color?: string; italic?: boolean; strikethrough?: boolean; underline?: boolean }; href?: unknown; plain_text?: string; text?: { content?: string; li...>
```

<sub>`GET /v1/blocks/{id}/children` · `retrieveBlockChildren`</sub>

## `notion.appendBlockChildren`

Append block children

```ts
notion.appendBlockChildren(input: {
  children?: ({ heading_2?: { text?: ({ text?: { content?: string }; type?: string })[] }; object?: string; paragraph?: { rich_text?: ({ text?: { content?: string; link?: { url?: string } }; type?: string })[] }; type?: string })[];
  id: string;
}, options?: { headers?: { "Notion-Version"?: string } }): Promise<{ child_page?: { title?: string }; created_time?: string; has_children?: boolean; id?: string; last_edited_time?: string; object?: string; type?: string }>
```

<sub>`PATCH /v1/blocks/{id}/children` · `appendBlockChildren`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
