# Actions

2 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.actionsList`

List All Actions

```ts
digitalocean.actionsList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ actions?: (Action)[] } & Pagination & Meta>
```

<sub>`GET /v2/actions` · `actions_list`</sub>

## `digitalocean.actionsGet`

Retrieve an Existing Action

```ts
digitalocean.actionsGet(input: {
  /** A unique numeric ID that can be used to identify and reference an action. */
  action_id: number;
}): Promise<{ action?: Action }>
```

<sub>`GET /v2/actions/{action_id}` · `actions_get`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
