# Issue Type Screen Schemes

11 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getIssueTypeScreenSchemes`

Get issue type screen schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueTypeScreenSchemes(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of issue type screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. */
  id?: (number)[];
  /** String used to perform a case-insensitive partial match with issue type screen scheme name. */
  queryString?: string;
  /** [Order](#ordering) the results by a field:   *  `name` Sorts by issue type screen scheme name.  *  `id` Sorts by issue type screen scheme ID. */
  orderBy?: "name" | "-name" | "+name" | "id" | "-id" | "+id";
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts `projects` that, for each issue type screen schemes, returns information about the projects the issue type screen scheme is assigned to. */
  expand?: string;
}): Promise<PageBeanIssueTypeScreenScheme>
```

<sub>`GET /rest/api/3/issuetypescreenscheme` · `getIssueTypeScreenSchemes`</sub>

## `jira.createIssueTypeScreenScheme`

Create issue type screen scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.createIssueTypeScreenScheme(input: {
  /** The description of the issue type screen scheme. The maximum length is 255 characters. */
  description?: string;
  /** The IDs of the screen schemes for the issue type IDs and *default*. A *default* entry is required to create an issue type screen scheme, it defines the mapping for all issue types without a screen scheme. */
  issueTypeMappings: (IssueTypeScreenSchemeMapping)[];
  /** The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters. */
  name: string;
}): Promise<IssueTypeScreenSchemeId>
```

<sub>`POST /rest/api/3/issuetypescreenscheme` · `createIssueTypeScreenScheme`</sub>

## `jira.deleteIssueTypeScreenScheme`

Delete issue type screen scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteIssueTypeScreenScheme(input: {
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}` · `deleteIssueTypeScreenScheme`</sub>

## `jira.updateIssueTypeScreenScheme`

Update issue type screen scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.updateIssueTypeScreenScheme(input: {
  /** The description of the issue type screen scheme. The maximum length is 255 characters. */
  description?: string;
  /** The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters. */
  name?: string;
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}` · `updateIssueTypeScreenScheme`</sub>

## `jira.appendMappingsForIssueTypeScreenScheme`

Append mappings to issue type screen scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.appendMappingsForIssueTypeScreenScheme(input: {
  /** The list of issue type to screen scheme mappings. A *default* entry cannot be specified because a default entry is added when an issue type screen scheme is created. */
  issueTypeMappings: (IssueTypeScreenSchemeMapping)[];
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping` · `appendMappingsForIssueTypeScreenScheme`</sub>

## `jira.updateDefaultScreenScheme`

Update issue type screen scheme default screen scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.updateDefaultScreenScheme(input: {
  /** The ID of the screen scheme. */
  screenSchemeId: string;
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/default` · `updateDefaultScreenScheme`</sub>

## `jira.removeMappingsFromIssueTypeScreenScheme`

Remove mappings from issue type screen scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.removeMappingsFromIssueTypeScreenScheme(input: {
  /** The list of issue type IDs. */
  issueTypeIds: (string)[];
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: string;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/remove` · `removeMappingsFromIssueTypeScreenScheme`</sub>

## `jira.getProjectsForIssueTypeScreenScheme`

Get issue type screen scheme projects — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectsForIssueTypeScreenScheme(input: {
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: number;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  query?: string;
}): Promise<PageBeanProjectDetails>
```

<sub>`GET /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/project` · `getProjectsForIssueTypeScreenScheme`</sub>

## `jira.getIssueTypeScreenSchemeMappings`

Get issue type screen scheme items — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueTypeScreenSchemeMappings(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of issue type screen scheme IDs. To include multiple issue type screen schemes, separate IDs with ampersand: `issueTypeScreenSchemeId=10000&issueTypeScreenSchemeId=10001`. */
  issueTypeScreenSchemeId?: (number)[];
}): Promise<PageBeanIssueTypeScreenSchemeItem>
```

<sub>`GET /rest/api/3/issuetypescreenscheme/mapping` · `getIssueTypeScreenSchemeMappings`</sub>

## `jira.getIssueTypeScreenSchemeProjectAssociations`

Get issue type screen schemes for projects — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueTypeScreenSchemeProjectAssociations(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`. */
  projectId: (number)[];
}): Promise<PageBeanIssueTypeScreenSchemesProjects>
```

<sub>`GET /rest/api/3/issuetypescreenscheme/project` · `getIssueTypeScreenSchemeProjectAssociations`</sub>

## `jira.assignIssueTypeScreenSchemeToProject`

Assign issue type screen scheme to project — [Provider docs](http://www.atlassian.com)

```ts
jira.assignIssueTypeScreenSchemeToProject(input: {
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId?: string;
  /** The ID of the project. */
  projectId?: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issuetypescreenscheme/project` · `assignIssueTypeScreenSchemeToProject`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
