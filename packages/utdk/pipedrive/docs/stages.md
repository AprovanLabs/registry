# Stages

1 operation · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getStageDeals`

Get deals in a stage

```ts
pipedrive.getStageDeals(input: {
  /** The ID of the stage */
  id: number;
  /** If supplied, only deals matching the given filter will be returned */
  filter_id?: number;
  /** If supplied, `filter_id` will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned. */
  user_id?: number;
  /** If supplied, `filter_id` and `user_id` will not be considered – instead, deals owned by everyone will be returned */
  everyone?: 0 | 1;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean; data?: ({ id?: number; creator_user_id?: number; user_id?: number; person_id?: number; org_id?: number } & { stage_id?: number; title?: string; value?: number; currency?: string; add_time?: string; update_time?: string; stage_change_time?: string; active?: boolean; deleted?: boolean; is_archived?: boolean; status?: string; probability?: number | null; next_activity_date?: str...>
```

<sub>`GET /stages/{id}/deals` · `getStageDeals`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
