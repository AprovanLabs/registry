# ProjectPhases

2 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getProjectsPhases`

Get project phases

```ts
pipedrive.getProjectsPhases(input: {
  /** ID of the board for which phases are requested */
  board_id: number;
}): Promise<{ success?: boolean; data?: ({ id?: number; name?: string; board_id?: number; order_nr?: number; add_time?: string; update_time?: string })[]; additional_data?: { [key: string]: unknown } | null }>
```

<sub>`GET /projects/phases` · `getProjectsPhases`</sub>

## `pipedrive.getProjectsPhase`

Get details of a phase

```ts
pipedrive.getProjectsPhase(input: {
  /** The ID of the project phase */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number; name?: string; board_id?: number; order_nr?: number; add_time?: string; update_time?: string }; additional_data?: { [key: string]: unknown } | null }>
```

<sub>`GET /projects/phases/{id}` · `getProjectsPhase`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
