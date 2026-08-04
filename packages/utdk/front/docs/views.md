# Views

6 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listTeamViews`

List team views — [Provider docs](https://community.front.com)

```ts
front.listTeamViews(input: {
  /** The team ID */
  team_id: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (SharedViewResponse)[] }>
```

<sub>`GET /teams/{team_id}/views` · `list-team-views`</sub>

## `front.createTeamView`

Create team view — [Provider docs](https://community.front.com)

```ts
front.createTeamView(input: {
  /** Name of the view */
  name: string;
  /** List of inbox IDs to filter by */
  inbox_ids: (ResourceId)[];
  /** List of tag IDs to filter by */
  tag_ids?: (ResourceId)[];
  /** List of tag IDs to exclude */
  not_tag_ids?: (ResourceId)[];
  /** Whether to filter for conversations without tags */
  no_tags?: boolean;
  /** List of assignee IDs to filter by */
  assignee_ids?: (ResourceId)[];
  /** List of assignee IDs to exclude */
  not_assignee_ids?: (ResourceId)[];
  /** Color highlight for the view */
  highlight?: string;
  /** The team ID */
  team_id: string;
}): Promise<SharedViewResponse>
```

<sub>`POST /teams/{team_id}/views` · `create-team-view`</sub>

## `front.listViews`

List views — [Provider docs](https://community.front.com)

```ts
front.listViews(input: {
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (SharedViewResponse)[] }>
```

<sub>`GET /views` · `list-views`</sub>

## `front.getView`

Get view — [Provider docs](https://community.front.com)

```ts
front.getView(input: {
  /** The view ID */
  view_id: string;
}): Promise<SharedViewResponse>
```

<sub>`GET /views/{view_id}` · `get-view`</sub>

## `front.updateView`

Update view — [Provider docs](https://community.front.com)

```ts
front.updateView(input: {
  /** Name of the view */
  name?: string;
  /** List of inbox IDs to filter by */
  inbox_ids?: (ResourceId)[];
  /** List of tag IDs to filter by */
  tag_ids?: (ResourceId)[];
  /** List of tag IDs to exclude */
  not_tag_ids?: (ResourceId)[];
  /** Whether to filter for conversations without tags */
  no_tags?: boolean;
  /** List of assignee IDs to filter by */
  assignee_ids?: (ResourceId)[];
  /** List of assignee IDs to exclude */
  not_assignee_ids?: (ResourceId)[];
  /** Color highlight for the view */
  highlight?: string;
  /** The view ID */
  view_id: string;
}): Promise<undefined>
```

<sub>`PATCH /views/{view_id}` · `update-view`</sub>

## `front.addViewTeammates`

Add view to teammate sidebars — [Provider docs](https://community.front.com)

```ts
front.addViewTeammates(input: {
  teammate_ids: (string)[];
  /** The view ID */
  view_id: string;
}): Promise<undefined>
```

<sub>`POST /views/{view_id}/teammates` · `add-view-teammates`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
