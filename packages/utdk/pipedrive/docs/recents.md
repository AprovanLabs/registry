# Recents

1 operation · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getRecents`

Get recents

```ts
pipedrive.getRecents(input: {
  /** The timestamp in UTC. Format: YYYY-MM-DD HH:MM:SS. */
  since_timestamp: string;
  /** Multiple selection of item types to include in the query (optional) */
  items?: "activity" | "activityType" | "deal" | "file" | "filter" | "note" | "person" | "organization" | "pipeline" | "product" | "stage" | "user";
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean; data?: ({ item?: "activity"; id?: number; data?: { due_date?: string; due_time?: string; duration?: string; deal_id?: number; lead_id?: string | null; person_id?: number; project_id?: number | null; org_id?: number; location?: string; public_description?: string } & { id?: number; note?: string; done?: boolean; subject?: string; type?: string; user_id?: number; participants?:...>
```

<sub>`GET /recents` · `getRecents`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
