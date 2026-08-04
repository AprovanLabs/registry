# Component Sets

3 operations · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.getComponentSet`

Get component set — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getComponentSet(input: {
  /** The unique identifier of the component set. */
  key: string;
}): Promise<{ status: 200; error: false; meta: PublishedComponentSet }>
```

<sub>`GET /v1/component_sets/{key}` · `getComponentSet`</sub>

## `figma.getFileComponentSets`

Get file component sets — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getFileComponentSets(input: {
  /** File to list component sets from. This must be a main file key, not a branch key, as it is not possible to publish from branches. */
  file_key: string;
}): Promise<{ status: 200; error: false; meta: { component_sets: (PublishedComponentSet)[] } }>
```

<sub>`GET /v1/files/{file_key}/component_sets` · `getFileComponentSets`</sub>

## `figma.getTeamComponentSets`

Get team component sets — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getTeamComponentSets(input: {
  /** Id of the team to list component sets from. */
  team_id: string;
  /** Number of items to return in a paged list of results. Defaults to 30. */
  page_size?: number;
  /** Cursor indicating which id after which to start retrieving component sets for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids. */
  after?: number;
  /** Cursor indicating which id before which to start retrieving component sets for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids. */
  before?: number;
}): Promise<{ status: 200; error: false; meta: { component_sets: (PublishedComponentSet)[]; cursor?: ResponseCursor } }>
```

<sub>`GET /v1/teams/{team_id}/component_sets` · `getTeamComponentSets`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
