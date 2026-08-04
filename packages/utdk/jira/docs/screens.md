# Screens

7 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getScreensForField`

Get screens for a field — [Provider docs](http://www.atlassian.com)

```ts
jira.getScreensForField(input: {
  /** The ID of the field to return screens for. */
  fieldId: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Use [expand](#expansion) to include additional information about screens in the response. This parameter accepts `tab` which returns details about the screen tabs the field is used in. */
  expand?: string;
}): Promise<PageBeanScreenWithTab>
```

<sub>`GET /rest/api/3/field/{fieldId}/screens` · `getScreensForField`</sub>

## `jira.getScreens`

Get screens — [Provider docs](http://www.atlassian.com)

```ts
jira.getScreens(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of screen IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. */
  id?: (number)[];
  /** String used to perform a case-insensitive partial match with screen name. */
  queryString?: string;
  /** The scope filter string. To filter by multiple scope, provide an ampersand-separated list. For example, `scope=GLOBAL&scope=PROJECT`. */
  scope?: ("GLOBAL" | "TEMPLATE" | "PROJECT")[];
  /** [Order](#ordering) the results by a field:   *  `id` Sorts by screen ID.  *  `name` Sorts by screen name. */
  orderBy?: "name" | "-name" | "+name" | "id" | "-id" | "+id";
}): Promise<PageBeanScreen>
```

<sub>`GET /rest/api/3/screens` · `getScreens`</sub>

## `jira.createScreen`

Create screen — [Provider docs](http://www.atlassian.com)

```ts
jira.createScreen(input: {
  /** The description of the screen. The maximum length is 255 characters. */
  description?: string;
  /** The name of the screen. The name must be unique. The maximum length is 255 characters. */
  name: string;
}): Promise<Screen>
```

<sub>`POST /rest/api/3/screens` · `createScreen`</sub>

## `jira.deleteScreen`

Delete screen — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteScreen(input: {
  /** The ID of the screen. */
  screenId: number;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/screens/{screenId}` · `deleteScreen`</sub>

## `jira.updateScreen`

Update screen — [Provider docs](http://www.atlassian.com)

```ts
jira.updateScreen(input: {
  /** The description of the screen. The maximum length is 255 characters. */
  description?: string;
  /** The name of the screen. The name must be unique. The maximum length is 255 characters. */
  name?: string;
  /** The ID of the screen. */
  screenId: number;
}): Promise<Screen>
```

<sub>`PUT /rest/api/3/screens/{screenId}` · `updateScreen`</sub>

## `jira.getAvailableScreenFields`

Get available screen fields — [Provider docs](http://www.atlassian.com)

```ts
jira.getAvailableScreenFields(input: {
  /** The ID of the screen. */
  screenId: number;
}): Promise<(ScreenableField)[]>
```

<sub>`GET /rest/api/3/screens/{screenId}/availableFields` · `getAvailableScreenFields`</sub>

## `jira.addFieldToDefaultScreen`

Add field to default screen — [Provider docs](http://www.atlassian.com)

```ts
jira.addFieldToDefaultScreen(input: {
  /** The ID of the field. */
  fieldId: string;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/screens/addToDefault/{fieldId}` · `addFieldToDefaultScreen`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
