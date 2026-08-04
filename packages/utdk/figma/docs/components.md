# Components

3 operations · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.getComponent`

Get component — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getComponent(input: {
  /** The unique identifier of the component. */
  key: string;
}): Promise<{ status: 200; error: false; meta: PublishedComponent }>
```

<sub>`GET /v1/components/{key}` · `getComponent`</sub>

## `figma.getFileComponents`

Get file components — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getFileComponents(input: {
  /** File to list components from. This must be a main file key, not a branch key, as it is not possible to publish from branches. */
  file_key: string;
}): Promise<{ status: 200; error: false; meta: { components: (PublishedComponent)[] } }>
```

<sub>`GET /v1/files/{file_key}/components` · `getFileComponents`</sub>

## `figma.getTeamComponents`

Get team components — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getTeamComponents(input: {
  /** Id of the team to list components from. */
  team_id: string;
  /** Number of items to return in a paged list of results. Defaults to 30. Maximum of 1000. */
  page_size?: number;
  /** Cursor indicating which id after which to start retrieving components for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids. */
  after?: number;
  /** Cursor indicating which id before which to start retrieving components for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids. */
  before?: number;
}): Promise<{ status: 200; error: false; meta: { components: (PublishedComponent)[]; cursor?: ResponseCursor } }>
```

<sub>`GET /v1/teams/{team_id}/components` · `getTeamComponents`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
