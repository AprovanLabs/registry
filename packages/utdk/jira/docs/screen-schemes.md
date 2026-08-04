# Screen Schemes

4 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getScreenSchemes`

Get screen schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.getScreenSchemes(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. */
  id?: (number)[];
  /** Use [expand](#expansion) include additional information in the response. This parameter accepts `issueTypeScreenSchemes` that, for each screen schemes, returns information about the issue type screen scheme the screen scheme is assigned to. */
  expand?: string;
  /** String used to perform a case-insensitive partial match with screen scheme name. */
  queryString?: string;
  /** [Order](#ordering) the results by a field:   *  `id` Sorts by screen scheme ID.  *  `name` Sorts by screen scheme name. */
  orderBy?: "name" | "-name" | "+name" | "id" | "-id" | "+id";
}): Promise<PageBeanScreenScheme>
```

<sub>`GET /rest/api/3/screenscheme` · `getScreenSchemes`</sub>

## `jira.createScreenScheme`

Create screen scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.createScreenScheme(input: {
  /** The description of the screen scheme. The maximum length is 255 characters. */
  description?: string;
  /** The name of the screen scheme. The name must be unique. The maximum length is 255 characters. */
  name: string;
  /** The IDs of the screens for the screen types of the screen scheme. Only screens used in classic projects are accepted. */
  screens: ScreenTypes;
}): Promise<ScreenSchemeId>
```

<sub>`POST /rest/api/3/screenscheme` · `createScreenScheme`</sub>

## `jira.deleteScreenScheme`

Delete screen scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteScreenScheme(input: {
  /** The ID of the screen scheme. */
  screenSchemeId: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/screenscheme/{screenSchemeId}` · `deleteScreenScheme`</sub>

## `jira.updateScreenScheme`

Update screen scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.updateScreenScheme(input: {
  /** The description of the screen scheme. The maximum length is 255 characters. */
  description?: string;
  /** The name of the screen scheme. The name must be unique. The maximum length is 255 characters. */
  name?: string;
  /** The IDs of the screens for the screen types of the screen scheme. Only screens used in classic projects are accepted. */
  screens?: UpdateScreenTypes;
  /** The ID of the screen scheme. */
  screenSchemeId: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/screenscheme/{screenSchemeId}` · `updateScreenScheme`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
