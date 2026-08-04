# Styles

3 operations · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.getFileStyles`

Get file styles — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getFileStyles(input: {
  /** File to list styles from. This must be a main file key, not a branch key, as it is not possible to publish from branches. */
  file_key: string;
}): Promise<{ status: 200; error: false; meta: { styles: (PublishedStyle)[] } }>
```

<sub>`GET /v1/files/{file_key}/styles` · `getFileStyles`</sub>

## `figma.getStyle`

Get style — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getStyle(input: {
  /** The unique identifier of the style. */
  key: string;
}): Promise<{ status: 200; error: false; meta: PublishedStyle }>
```

<sub>`GET /v1/styles/{key}` · `getStyle`</sub>

## `figma.getTeamStyles`

Get team styles — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getTeamStyles(input: {
  /** Id of the team to list styles from. */
  team_id: string;
  /** Number of items to return in a paged list of results. Defaults to 30. */
  page_size?: number;
  /** Cursor indicating which id after which to start retrieving styles for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids. */
  after?: number;
  /** Cursor indicating which id before which to start retrieving styles for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids. */
  before?: number;
}): Promise<{ status: 200; error: false; meta: { styles: (PublishedStyle)[]; cursor?: ResponseCursor } }>
```

<sub>`GET /v1/teams/{team_id}/styles` · `getTeamStyles`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
