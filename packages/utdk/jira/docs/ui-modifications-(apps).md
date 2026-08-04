# UI Modifications (Apps)

4 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getUiModifications`

Get UI modifications — [Provider docs](http://www.atlassian.com)

```ts
jira.getUiModifications(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `data` Returns UI modification data.  *  `contexts` Returns UI modification contexts. */
  expand?: string;
}): Promise<PageBeanUiModificationDetails>
```

<sub>`GET /rest/api/3/uiModifications` · `getUiModifications`</sub>

## `jira.createUiModification`

Create UI modification — [Provider docs](http://www.atlassian.com)

```ts
jira.createUiModification(input: {
  /** List of contexts of the UI modification. The maximum number of contexts is 1000. */
  contexts?: (UiModificationContextDetails)[];
  /** The data of the UI modification. The maximum size of the data is 50000 characters. */
  data?: string;
  /** The description of the UI modification. The maximum length is 255 characters. */
  description?: string;
  /** The name of the UI modification. The maximum length is 255 characters. */
  name: string;
}): Promise<UiModificationIdentifiers>
```

<sub>`POST /rest/api/3/uiModifications` · `createUiModification`</sub>

## `jira.deleteUiModification`

Delete UI modification — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteUiModification(input: {
  /** The ID of the UI modification. */
  uiModificationId: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/uiModifications/{uiModificationId}` · `deleteUiModification`</sub>

## `jira.updateUiModification`

Update UI modification — [Provider docs](http://www.atlassian.com)

```ts
jira.updateUiModification(input: {
  /** List of contexts of the UI modification. The maximum number of contexts is 1000. If provided, replaces all existing contexts. */
  contexts?: (UiModificationContextDetails)[];
  /** The data of the UI modification. The maximum size of the data is 50000 characters. */
  data?: string;
  /** The description of the UI modification. The maximum length is 255 characters. */
  description?: string;
  /** The name of the UI modification. The maximum length is 255 characters. */
  name?: string;
  /** The ID of the UI modification. */
  uiModificationId: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/uiModifications/{uiModificationId}` · `updateUiModification`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
