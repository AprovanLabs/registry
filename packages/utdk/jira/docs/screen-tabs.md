# Screen Tabs

6 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAllScreenTabs`

Get all screen tabs — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllScreenTabs(input: {
  /** The ID of the screen. */
  screenId: number;
  /** The key of the project. */
  projectKey?: string;
}): Promise<(ScreenableTab)[]>
```

<sub>`GET /rest/api/3/screens/{screenId}/tabs` · `getAllScreenTabs`</sub>

## `jira.addScreenTab`

Create screen tab — [Provider docs](http://www.atlassian.com)

```ts
jira.addScreenTab(input: {
  /** The ID of the screen tab. */
  id?: number;
  /** The name of the screen tab. The maximum length is 255 characters. */
  name: string;
  /** The ID of the screen. */
  screenId: number;
}): Promise<ScreenableTab>
```

<sub>`POST /rest/api/3/screens/{screenId}/tabs` · `addScreenTab`</sub>

## `jira.deleteScreenTab`

Delete screen tab — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteScreenTab(input: {
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/screens/{screenId}/tabs/{tabId}` · `deleteScreenTab`</sub>

## `jira.renameScreenTab`

Update screen tab — [Provider docs](http://www.atlassian.com)

```ts
jira.renameScreenTab(input: {
  /** The ID of the screen tab. */
  id?: number;
  /** The name of the screen tab. The maximum length is 255 characters. */
  name: string;
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
}): Promise<ScreenableTab>
```

<sub>`PUT /rest/api/3/screens/{screenId}/tabs/{tabId}` · `renameScreenTab`</sub>

## `jira.moveScreenTab`

Move screen tab — [Provider docs](http://www.atlassian.com)

```ts
jira.moveScreenTab(input: {
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
  /** The position of tab. The base index is 0. */
  pos: number;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/screens/{screenId}/tabs/{tabId}/move/{pos}` · `moveScreenTab`</sub>

## `jira.getBulkScreenTabs`

Get bulk screen tabs — [Provider docs](http://www.atlassian.com)

```ts
jira.getBulkScreenTabs(input: {
  /** The list of screen IDs. To include multiple screen IDs, provide an ampersand-separated list. For example, `screenId=10000&screenId=10001`. */
  screenId?: (number)[];
  /** The list of tab IDs. To include multiple tab IDs, provide an ampersand-separated list. For example, `tabId=10000&tabId=10001`. */
  tabId?: (number)[];
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. The maximum number is 100, */
  maxResult?: number;
}): Promise<undefined>
```

<sub>`GET /rest/api/3/screens/tabs` · `getBulkScreenTabs`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
