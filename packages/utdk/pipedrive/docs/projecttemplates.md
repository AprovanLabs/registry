# ProjectTemplates

2 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getProjectTemplates`

Get all project templates

```ts
pipedrive.getProjectTemplates(input: {
  /** For pagination, the marker (an opaque string value) representing the first item on the next page */
  cursor?: string;
  /** For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned. */
  limit?: number;
}): Promise<{ success?: boolean; data?: ({ id?: number; title?: string; description?: string; projects_board_id?: number; owner_id?: number; add_time?: string; update_time?: string })[]; additional_data?: { next_cursor?: string } }>
```

<sub>`GET /projectTemplates` · `getProjectTemplates`</sub>

## `pipedrive.getProjectTemplate`

Get details of a template

```ts
pipedrive.getProjectTemplate(input: {
  /** The ID of the project template */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number; title?: string; description?: string; projects_board_id?: number; owner_id?: number; add_time?: string; update_time?: string }; additional_data?: { [key: string]: unknown } | null }>
```

<sub>`GET /projectTemplates/{id}` · `getProjectTemplate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
