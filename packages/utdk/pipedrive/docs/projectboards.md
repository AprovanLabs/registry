# ProjectBoards

2 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getProjectsBoards`

Get all project boards

```ts
pipedrive.getProjectsBoards(): Promise<{ success?: boolean; data?: ({ id?: number; name?: string; order_nr?: number; add_time?: string; update_time?: string })[]; additional_data?: { [key: string]: unknown } | null }>
```

<sub>`GET /projects/boards` · `getProjectsBoards`</sub>

## `pipedrive.getProjectsBoard`

Get details of a board

```ts
pipedrive.getProjectsBoard(input: {
  /** The ID of the project board */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number; name?: string; order_nr?: number; add_time?: string; update_time?: string }; additional_data?: { [key: string]: unknown } | null }>
```

<sub>`GET /projects/boards/{id}` · `getProjectsBoard`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
