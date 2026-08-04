# Issue Type Schemes

10 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAllIssueTypeSchemes`

Get all issue type schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllIssueTypeSchemes(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of issue type schemes IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. */
  id?: (number)[];
  /** [Order](#ordering) the results by a field:   *  `name` Sorts by issue type scheme name.  *  `id` Sorts by issue type scheme ID. */
  orderBy?: "name" | "-name" | "+name" | "id" | "-id" | "+id";
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `projects` For each issue type schemes, returns information about the projects the issue type scheme is assigned to.  *  `issueTypes` For each issue type schemes, returns information about the issueTypes the issue type scheme have. */
  expand?: string;
  /** String used to perform a case-insensitive partial match with issue type scheme name. */
  queryString?: string;
}): Promise<PageBeanIssueTypeScheme>
```

<sub>`GET /rest/api/3/issuetypescheme` · `getAllIssueTypeSchemes`</sub>

## `jira.createIssueTypeScheme`

Create issue type scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.createIssueTypeScheme(input: {
  /** The ID of the default issue type of the issue type scheme. This ID must be included in `issueTypeIds`. */
  defaultIssueTypeId?: string;
  /** The description of the issue type scheme. The maximum length is 4000 characters. */
  description?: string;
  /** The list of issue types IDs of the issue type scheme. At least one standard issue type ID is required. */
  issueTypeIds: (string)[];
  /** The name of the issue type scheme. The name must be unique. The maximum length is 255 characters. */
  name: string;
}): Promise<IssueTypeSchemeId>
```

<sub>`POST /rest/api/3/issuetypescheme` · `createIssueTypeScheme`</sub>

## `jira.deleteIssueTypeScheme`

Delete issue type scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteIssueTypeScheme(input: {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: number;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/issuetypescheme/{issueTypeSchemeId}` · `deleteIssueTypeScheme`</sub>

## `jira.updateIssueTypeScheme`

Update issue type scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.updateIssueTypeScheme(input: {
  /** The ID of the default issue type of the issue type scheme. */
  defaultIssueTypeId?: string;
  /** The description of the issue type scheme. The maximum length is 4000 characters. */
  description?: string;
  /** The name of the issue type scheme. The name must be unique. The maximum length is 255 characters. */
  name?: string;
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issuetypescheme/{issueTypeSchemeId}` · `updateIssueTypeScheme`</sub>

## `jira.addIssueTypesToIssueTypeScheme`

Add issue types to issue type scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.addIssueTypesToIssueTypeScheme(input: {
  /** The list of issue type IDs. */
  issueTypeIds: (string)[];
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issuetypescheme/{issueTypeSchemeId}/issuetype` · `addIssueTypesToIssueTypeScheme`</sub>

## `jira.removeIssueTypeFromIssueTypeScheme`

Remove issue type from issue type scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.removeIssueTypeFromIssueTypeScheme(input: {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: number;
  /** The ID of the issue type. */
  issueTypeId: number;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/issuetypescheme/{issueTypeSchemeId}/issuetype/{issueTypeId}` · `removeIssueTypeFromIssueTypeScheme`</sub>

## `jira.reorderIssueTypesInIssueTypeScheme`

Change order of issue types — [Provider docs](http://www.atlassian.com)

```ts
jira.reorderIssueTypesInIssueTypeScheme(input: {
  /** The ID of the issue type to place the moved issue types after. Required if `position` isn't provided. */
  after?: string;
  /** A list of the issue type IDs to move. The order of the issue type IDs in the list is the order they are given after the move. */
  issueTypeIds: (string)[];
  /** The position the issue types should be moved to. Required if `after` isn't provided. */
  position?: "First" | "Last";
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issuetypescheme/{issueTypeSchemeId}/issuetype/move` · `reorderIssueTypesInIssueTypeScheme`</sub>

## `jira.getIssueTypeSchemesMapping`

Get issue type scheme items — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueTypeSchemesMapping(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of issue type scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `issueTypeSchemeId=10000&issueTypeSchemeId=10001`. */
  issueTypeSchemeId?: (number)[];
}): Promise<PageBeanIssueTypeSchemeMapping>
```

<sub>`GET /rest/api/3/issuetypescheme/mapping` · `getIssueTypeSchemesMapping`</sub>

## `jira.getIssueTypeSchemeForProjects`

Get issue type schemes for projects — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueTypeSchemeForProjects(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of project IDs. To include multiple project IDs, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`. */
  projectId: (number)[];
}): Promise<PageBeanIssueTypeSchemeProjects>
```

<sub>`GET /rest/api/3/issuetypescheme/project` · `getIssueTypeSchemeForProjects`</sub>

## `jira.assignIssueTypeSchemeToProject`

Assign issue type scheme to project — [Provider docs](http://www.atlassian.com)

```ts
jira.assignIssueTypeSchemeToProject(input: {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: string;
  /** The ID of the project. */
  projectId: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issuetypescheme/project` · `assignIssueTypeSchemeToProject`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
