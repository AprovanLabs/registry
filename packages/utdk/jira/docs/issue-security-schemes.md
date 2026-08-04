# Issue Security Schemes

16 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getIssueSecuritySchemes`

Get issue security schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueSecuritySchemes(): Promise<SecuritySchemes>
```

<sub>`GET /rest/api/3/issuesecurityschemes` · `getIssueSecuritySchemes`</sub>

## `jira.createIssueSecurityScheme`

Create issue security scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.createIssueSecurityScheme(input: {
  /** The description of the issue security scheme. */
  description?: string;
  /** The list of scheme levels which should be added to the security scheme. */
  levels?: (SecuritySchemeLevelBean)[];
  /** The name of the issue security scheme. Must be unique (case-insensitive). */
  name: string;
  [key: string]: unknown;
}): Promise<SecuritySchemeId>
```

<sub>`POST /rest/api/3/issuesecurityschemes` · `createIssueSecurityScheme`</sub>

## `jira.getIssueSecurityScheme`

Get issue security scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueSecurityScheme(input: {
  /** The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs. */
  id: number;
}): Promise<SecurityScheme>
```

<sub>`GET /rest/api/3/issuesecurityschemes/{id}` · `getIssueSecurityScheme`</sub>

## `jira.updateIssueSecurityScheme`

Update issue security scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.updateIssueSecurityScheme(input: {
  /** The description of the security scheme scheme. */
  description?: string;
  /** The name of the security scheme scheme. Must be unique. */
  name?: string;
  /** The ID of the issue security scheme. */
  id: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issuesecurityschemes/{id}` · `updateIssueSecurityScheme`</sub>

## `jira.deleteSecurityScheme`

Delete issue security scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteSecurityScheme(input: {
  /** The ID of the issue security scheme. */
  schemeId: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/issuesecurityschemes/{schemeId}` · `deleteSecurityScheme`</sub>

## `jira.addSecurityLevel`

Add issue security levels — [Provider docs](http://www.atlassian.com)

```ts
jira.addSecurityLevel(input: {
  /** The list of scheme levels which should be added to the security scheme. */
  levels?: (SecuritySchemeLevelBean)[];
  /** The ID of the issue security scheme. */
  schemeId: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issuesecurityschemes/{schemeId}/level` · `addSecurityLevel`</sub>

## `jira.removeLevel`

Remove issue security level — [Provider docs](http://www.atlassian.com)

```ts
jira.removeLevel(input: {
  /** The ID of the issue security scheme. */
  schemeId: string;
  /** The ID of the issue security level to remove. */
  levelId: string;
  /** The ID of the issue security level that will replace the currently selected level. */
  replaceWith?: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}` · `removeLevel`</sub>

## `jira.updateSecurityLevel`

Update issue security level — [Provider docs](http://www.atlassian.com)

```ts
jira.updateSecurityLevel(input: {
  /** The description of the issue security scheme level. */
  description?: string;
  /** The name of the issue security scheme level. Must be unique. */
  name?: string;
  /** The ID of the issue security scheme level belongs to. */
  schemeId: string;
  /** The ID of the issue security level to update. */
  levelId: string;
  [key: string]: unknown;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}` · `updateSecurityLevel`</sub>

## `jira.addSecurityLevelMembers`

Add issue security level members — [Provider docs](http://www.atlassian.com)

```ts
jira.addSecurityLevelMembers(input: {
  /** The list of level members which should be added to the issue security scheme level. */
  members?: (SecuritySchemeLevelMemberBean)[];
  /** The ID of the issue security scheme. */
  schemeId: string;
  /** The ID of the issue security level. */
  levelId: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}/member` · `addSecurityLevelMembers`</sub>

## `jira.removeMemberFromSecurityLevel`

Remove member from issue security level — [Provider docs](http://www.atlassian.com)

```ts
jira.removeMemberFromSecurityLevel(input: {
  /** The ID of the issue security scheme. */
  schemeId: string;
  /** The ID of the issue security level. */
  levelId: string;
  /** The ID of the issue security level member to be removed. */
  memberId: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}/member/{memberId}` · `removeMemberFromSecurityLevel`</sub>

## `jira.getSecurityLevels`

Get issue security levels — [Provider docs](http://www.atlassian.com)

```ts
jira.getSecurityLevels(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: string;
  /** The maximum number of items to return per page. */
  maxResults?: string;
  /** The list of issue security scheme level IDs. To include multiple issue security levels, separate IDs with an ampersand: `id=10000&id=10001`. */
  id?: (string)[];
  /** The list of issue security scheme IDs. To include multiple issue security schemes, separate IDs with an ampersand: `schemeId=10000&schemeId=10001`. */
  schemeId?: (string)[];
  /** When set to true, returns multiple default levels for each security scheme containing a default. If you provide scheme and level IDs not associated with the default, returns an empty page. The default value is false. */
  onlyDefault?: boolean;
}): Promise<PageBeanSecurityLevel>
```

<sub>`GET /rest/api/3/issuesecurityschemes/level` · `getSecurityLevels`</sub>

## `jira.setDefaultLevels`

Set default issue security levels — [Provider docs](http://www.atlassian.com)

```ts
jira.setDefaultLevels(input: {
  /** List of objects with issue security scheme ID and new default level ID. */
  defaultValues: (DefaultLevelValue)[];
  [key: string]: unknown;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issuesecurityschemes/level/default` · `setDefaultLevels`</sub>

## `jira.getSecurityLevelMembers`

Get issue security level members — [Provider docs](http://www.atlassian.com)

```ts
jira.getSecurityLevelMembers(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: string;
  /** The maximum number of items to return per page. */
  maxResults?: string;
  /** The list of issue security level member IDs. To include multiple issue security level members separate IDs with an ampersand: `id=10000&id=10001`. */
  id?: (string)[];
  /** The list of issue security scheme IDs. To include multiple issue security schemes separate IDs with an ampersand: `schemeId=10000&schemeId=10001`. */
  schemeId?: (string)[];
  /** The list of issue security level IDs. To include multiple issue security levels separate IDs with an ampersand: `levelId=10000&levelId=10001`. */
  levelId?: (string)[];
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information  *  `field` Returns information about the custom field granted the permission  *  `group` Returns information about the group that is granted the permission  *  `projectRole` Returns information about the project role granted the permission  *  `user` Returns information about the user who is granted the permission */
  expand?: string;
}): Promise<PageBeanSecurityLevelMember>
```

<sub>`GET /rest/api/3/issuesecurityschemes/level/member` · `getSecurityLevelMembers`</sub>

## `jira.searchProjectsUsingSecuritySchemes`

Get projects using issue security schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.searchProjectsUsingSecuritySchemes(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: string;
  /** The maximum number of items to return per page. */
  maxResults?: string;
  /** The list of security scheme IDs to be filtered out. */
  issueSecuritySchemeId?: (string)[];
  /** The list of project IDs to be filtered out. */
  projectId?: (string)[];
}): Promise<PageBeanIssueSecuritySchemeToProjectMapping>
```

<sub>`GET /rest/api/3/issuesecurityschemes/project` · `searchProjectsUsingSecuritySchemes`</sub>

## `jira.associateSchemesToProjects`

Associate security scheme to project — [Provider docs](http://www.atlassian.com)

```ts
jira.associateSchemesToProjects(input: {
  /** The list of scheme levels which should be remapped to new levels of the issue security scheme. */
  oldToNewSecurityLevelMappings?: (OldToNewSecurityLevelMappingsBean)[];
  /** The ID of the project. */
  projectId: string;
  /** The ID of the issue security scheme. Providing null will clear the association with the issue security scheme. */
  schemeId: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issuesecurityschemes/project` · `associateSchemesToProjects`</sub>

## `jira.searchSecuritySchemes`

Search issue security schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.searchSecuritySchemes(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: string;
  /** The maximum number of items to return per page. */
  maxResults?: string;
  /** The list of issue security scheme IDs. To include multiple issue security scheme IDs, separate IDs with an ampersand: `id=10000&id=10001`. */
  id?: (string)[];
  /** The list of project IDs. To include multiple project IDs, separate IDs with an ampersand: `projectId=10000&projectId=10001`. */
  projectId?: (string)[];
}): Promise<PageBeanSecuritySchemeWithProjects>
```

<sub>`GET /rest/api/3/issuesecurityschemes/search` · `searchSecuritySchemes`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
