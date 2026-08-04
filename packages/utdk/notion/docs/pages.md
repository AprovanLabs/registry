# Pages

3 operations · `@utdk/notion`

```ts
import notion from "@utdk/notion";
```

## `notion.retrieveAPage`

Retrieve a Page

```ts
notion.retrieveAPage(input: {
  id: string;
}, options?: { headers?: { "Notion-Version"?: string; ""?: string } }): Promise<{ archived?: boolean; cover?: unknown; created_by?: { id?: string; object?: string }; created_time?: string; icon?: { emoji?: string; type?: string }; id?: string; last_edited_by?: { id?: string; object?: string }; last_edited_time?: string; object?: string; parent?: { page_id?: string; type?: string }; properties?: { title?: { id?: string; title?: ({ annotations?: { bold?: boolean; code?: boolea...>
```

<sub>`GET /v1/pages/{id}` · `retrieveAPage`</sub>

## `notion.updatePageProperties`

Update Page properties

```ts
notion.updatePageProperties(input: {
  properties?: { Status?: { select?: { name?: string } } };
  id: string;
}, options?: { headers?: { "Notion-Version"?: string } }): Promise<{ archived?: boolean; created_time?: string; id?: string; last_edited_time?: string; object?: string; parent?: { database_id?: string; type?: string }; properties?: { Author?: { id?: string; multi_select?: ({ color?: string; id?: string; name?: string })[]; type?: string }; Link?: { id?: string; type?: string; url?: string }; Name?: { id?: string; title?: ({ annotations?: { bold?: boolean; code?:...>
```

<sub>`PATCH /v1/pages/{id}` · `updatePageProperties`</sub>

## `notion.retrieveAPagePropertyItem`

Retrieve a Page Property Item

```ts
notion.retrieveAPagePropertyItem(input: {
  page_id: string;
  property_id: string;
}): Promise<{ object?: string; select?: { color?: string; id?: string; name?: string }; type?: string }>
```

<sub>`GET /v1/pages/{page_id}/properties/{property_id}` · `retrieveAPagePropertyItem`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
