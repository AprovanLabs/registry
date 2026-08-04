# Priority Schemes

8 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getPrioritySchemes`

Get priority schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.getPrioritySchemes(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: string;
  /** The maximum number of items to return per page. */
  maxResults?: string;
  /** A set of priority IDs to filter by. To include multiple IDs, provide an ampersand-separated list. For example, `priorityId=10000&priorityId=10001`. */
  priorityId?: (number)[];
  /** A set of priority scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `schemeId=10000&schemeId=10001`. */
  schemeId?: (number)[];
  /** The name of scheme to search for. */
  schemeName?: string;
  /** Whether only the default priority is returned. */
  onlyDefault?: boolean;
  /** The ordering to return the priority schemes by. */
  orderBy?: "name" | "+name" | "-name";
  /** A comma separated list of additional information to return. "priorities" will return priorities associated with the priority scheme. "projects" will return projects associated with the priority scheme. `expand=priorities,projects`. */
  expand?: string;
}): Promise<PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects>
```

<sub>`GET /rest/api/3/priorityscheme` · `getPrioritySchemes`</sub>

## `jira.createPriorityScheme`

Create priority scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.createPriorityScheme(input: {
  /** The ID of the default priority for the priority scheme. */
  defaultPriorityId: number;
  /** The description of the priority scheme. */
  description?: string;
  /** Instructions to migrate the priorities of issues.  `in` mappings are used to migrate the priorities of issues to priorities used within the priority scheme.  `out` mappings are used to migrate the priorities of issues to priorities not used within the priority scheme.   *  When **priorities** are **added** to the new priority scheme, no mapping needs to be provided as the new priorities are not used by any issues.  *  When **priorities** are **removed** from the new priority scheme, no mapping needs to be provided as the removed priorities are not used by any issues.  *  When **projects** are **added** to the priority scheme, the priorities of issues in those projects might need to be migrated to new priorities used by the priority scheme. This can occur when the current scheme does not use all the priorities in the project(s)' priority scheme(s).           *  An `in` mapping must be provided for each of these priorities.  *  When **projects** are **removed** from the priority scheme, no mapping needs to be provided as the removed projects are not using the priorities of the new priority scheme.  For more information on `in` and `out` mappings, see the child properties documentation for the `PriorityMapping` object below. */
  mappings?: PriorityMapping;
  /** The name of the priority scheme. Must be unique. */
  name: string;
  /** The IDs of priorities in the scheme. */
  priorityIds: (number)[];
  /** The IDs of projects that will use the priority scheme. */
  projectIds?: (number)[];
}): Promise<PrioritySchemeId>
```

<sub>`POST /rest/api/3/priorityscheme` · `createPriorityScheme`</sub>

## `jira.deletePriorityScheme`

Delete priority scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.deletePriorityScheme(input: {
  /** The priority scheme ID. */
  schemeId: number;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/priorityscheme/{schemeId}` · `deletePriorityScheme`</sub>

## `jira.updatePriorityScheme`

Update priority scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.updatePriorityScheme(input: {
  /** The default priority of the scheme. */
  defaultPriorityId?: number;
  /** The description of the priority scheme. */
  description?: string;
  /** Instructions to migrate the priorities of issues.  `in` mappings are used to migrate the priorities of issues to priorities used within the priority scheme.  `out` mappings are used to migrate the priorities of issues to priorities not used within the priority scheme.   *  When **priorities** are **added** to the priority scheme, no mapping needs to be provided as the new priorities are not used by any issues.  *  When **priorities** are **removed** from the priority scheme, issues that are using those priorities must be migrated to new priorities used by the priority scheme.           *  An `in` mapping must be provided for each of these priorities.  *  When **projects** are **added** to the priority scheme, the priorities of issues in those projects might need to be migrated to new priorities used by the priority scheme. This can occur when the current scheme does not use all the priorities in the project(s)' priority scheme(s).           *  An `in` mapping must be provided for each of these priorities.  *  When **projects** are **removed** from the priority scheme, the priorities of issues in those projects might need to be migrated to new priorities within the **Default Priority Scheme** that are not used by the priority scheme. This can occur when the **Default Priority Scheme** does not use all the priorities within the current scheme.           *  An `out` mapping must be provided for each of these priorities.  For more information on `in` and `out` mappings, see the child properties documentation for the `PriorityMapping` object below. */
  mappings?: PriorityMapping;
  /** The name of the priority scheme. Must be unique. */
  name?: string;
  /** The priorities in the scheme. */
  priorities?: UpdatePrioritiesInSchemeRequestBean;
  /** The projects in the scheme. */
  projects?: UpdateProjectsInSchemeRequestBean;
  /** The ID of the priority scheme. */
  schemeId: number;
}): Promise<UpdatePrioritySchemeResponseBean>
```

<sub>`PUT /rest/api/3/priorityscheme/{schemeId}` · `updatePriorityScheme`</sub>

## `jira.getPrioritiesByPriorityScheme`

Get priorities by priority scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getPrioritiesByPriorityScheme(input: {
  /** The priority scheme ID. */
  schemeId: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: string;
  /** The maximum number of items to return per page. */
  maxResults?: string;
}): Promise<PageBeanPriorityWithSequence>
```

<sub>`GET /rest/api/3/priorityscheme/{schemeId}/priorities` · `getPrioritiesByPriorityScheme`</sub>

## `jira.getProjectsByPriorityScheme`

Get projects by priority scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectsByPriorityScheme(input: {
  /** The priority scheme ID. */
  schemeId: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: string;
  /** The maximum number of items to return per page. */
  maxResults?: string;
  /** The project IDs to filter by. For example, `projectId=10000&projectId=10001`. */
  projectId?: (number)[];
  /** The string to query projects on by name. */
  query?: string;
}): Promise<PageBeanProject>
```

<sub>`GET /rest/api/3/priorityscheme/{schemeId}/projects` · `getProjectsByPriorityScheme`</sub>

## `jira.suggestedPrioritiesForMappings`

Suggested priorities for mappings — [Provider docs](http://www.atlassian.com)

```ts
jira.suggestedPrioritiesForMappings(input: {
  /** The maximum number of results that could be on the page. */
  maxResults?: number;
  /** The priority changes in the scheme. */
  priorities?: SuggestedMappingsForPrioritiesRequestBean;
  /** The project changes in the scheme. */
  projects?: SuggestedMappingsForProjectsRequestBean;
  /** The id of the priority scheme. */
  schemeId?: number;
  /** The index of the first item returned on the page. */
  startAt?: number;
}): Promise<PageBeanPriorityWithSequence>
```

<sub>`POST /rest/api/3/priorityscheme/mappings` · `suggestedPrioritiesForMappings`</sub>

## `jira.getAvailablePrioritiesByPriorityScheme`

Get available priorities by priority scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getAvailablePrioritiesByPriorityScheme(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: string;
  /** The maximum number of items to return per page. */
  maxResults?: string;
  /** The string to query priorities on by name. */
  query?: string;
  /** The priority scheme ID. */
  schemeId: string;
  /** A list of priority IDs to exclude from the results. */
  exclude?: (string)[];
}): Promise<PageBeanPriorityWithSequence>
```

<sub>`GET /rest/api/3/priorityscheme/priorities/available` · `getAvailablePrioritiesByPriorityScheme`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
