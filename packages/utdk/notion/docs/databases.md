# Databases

3 operations · `@utdk/notion`

```ts
import notion from "@utdk/notion";
```

## `notion.retrieveADatabase`

Retrieve a database

```ts
notion.retrieveADatabase(input: {
  id: string;
}, options?: { headers?: { "Notion-Version"?: string } }): Promise<{ archived?: boolean; cover?: unknown; created_by?: { id?: string; object?: string }; created_time?: string; icon?: unknown; id?: string; last_edited_by?: { id?: string; object?: string }; last_edited_time?: string; object?: string; parent?: { page_id?: string; type?: string }; properties?: { Author?: { id?: string; multi_select?: { options?: ({ color?: string; id?: string; name?: string })[] }; ...>
```

<sub>`GET /v1/databases/{id}` · `retrieveADatabase`</sub>

## `notion.updateADatabase`

Update a database

```ts
notion.updateADatabase(input: {
  properties?: { "Wine Pairing"?: { rich_text?: { [key: string]: unknown } } };
  title?: ({ text?: { content?: string } })[];
  id: string;
}, options?: { headers?: { "Notion-Version"?: string } }): Promise<{ archived?: boolean; cover?: unknown; created_by?: { id?: string; object?: string }; created_time?: string; icon?: unknown; id?: string; last_edited_by?: { id?: string; object?: string }; last_edited_time?: string; object?: string; parent?: { page_id?: string; type?: string }; properties?: { Author?: { id?: string; multi_select?: { options?: ({ color?: string; id?: string; name?: string })[] }; ...>
```

<sub>`PATCH /v1/databases/{id}` · `updateADatabase`</sub>

## `notion.queryADatabase`

Query a database

```ts
notion.queryADatabase(input: {
  filter?: { property?: string; select?: { equals?: string } };
  id: string;
}, options?: { headers?: { "Notion-Version"?: string } }): Promise<{ has_more?: boolean; next_cursor?: unknown; object?: string; results?: ({ archived?: boolean; cover?: unknown; created_by?: { id?: string; object?: string }; created_time?: string; icon?: unknown; id?: string; last_edited_by?: { id?: string; object?: string }; last_edited_time?: string; object?: string; parent?: { database_id?: string; type?: string }; properties?: { Author?: { id?: string; mult...>
```

<sub>`POST /v1/databases/{id}/query` · `queryADatabase`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
