# Issue Resolutions

8 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getResolutions`

Get resolutions — [Provider docs](http://www.atlassian.com)

```ts
jira.getResolutions(): Promise<(Resolution)[]>
```

<sub>`GET /rest/api/3/resolution` · `getResolutions`</sub>

## `jira.createResolution`

Create resolution — [Provider docs](http://www.atlassian.com)

```ts
jira.createResolution(input: {
  /** The description of the resolution. */
  description?: string;
  /** The name of the resolution. Must be unique (case-insensitive). */
  name: string;
  [key: string]: unknown;
}): Promise<ResolutionId>
```

<sub>`POST /rest/api/3/resolution` · `createResolution`</sub>

## `jira.deleteResolution`

Delete resolution — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteResolution(input: {
  /** The ID of the issue resolution. */
  id: string;
  /** The ID of the issue resolution that will replace the currently selected resolution. */
  replaceWith: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/resolution/{id}` · `deleteResolution`</sub>

## `jira.getResolution`

Get resolution — [Provider docs](http://www.atlassian.com)

```ts
jira.getResolution(input: {
  /** The ID of the issue resolution value. */
  id: string;
}): Promise<Resolution>
```

<sub>`GET /rest/api/3/resolution/{id}` · `getResolution`</sub>

## `jira.updateResolution`

Update resolution — [Provider docs](http://www.atlassian.com)

```ts
jira.updateResolution(input: {
  /** The description of the resolution. */
  description?: string;
  /** The name of the resolution. Must be unique. */
  name: string;
  /** The ID of the issue resolution. */
  id: string;
  [key: string]: unknown;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/resolution/{id}` · `updateResolution`</sub>

## `jira.setDefaultResolution`

Set default resolution — [Provider docs](http://www.atlassian.com)

```ts
jira.setDefaultResolution(input: {
  /** The ID of the new default issue resolution. Must be an existing ID or null. Setting this to null erases the default resolution setting. */
  id: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/resolution/default` · `setDefaultResolution`</sub>

## `jira.moveResolutions`

Move resolutions — [Provider docs](http://www.atlassian.com)

```ts
jira.moveResolutions(input: {
  /** The ID of the resolution. Required if `position` isn't provided. */
  after?: string;
  /** The list of resolution IDs to be reordered. Cannot contain duplicates nor after ID. */
  ids: (string)[];
  /** The position for issue resolutions to be moved to. Required if `after` isn't provided. */
  position?: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/resolution/move` · `moveResolutions`</sub>

## `jira.searchResolutions`

Search resolutions — [Provider docs](http://www.atlassian.com)

```ts
jira.searchResolutions(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: string;
  /** The maximum number of items to return per page. */
  maxResults?: string;
  /** The list of resolutions IDs to be filtered out */
  id?: (string)[];
  /** When set to true, return default only, when IDs provided, if none of them is default, return empty page. Default value is false */
  onlyDefault?: boolean;
}): Promise<PageBeanResolutionJsonBean>
```

<sub>`GET /rest/api/3/resolution/search` · `searchResolutions`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
