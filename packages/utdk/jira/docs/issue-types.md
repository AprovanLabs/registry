# Issue Types

8 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getIssueAllTypes`

Get all issue types for user — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueAllTypes(): Promise<(IssueTypeDetails)[]>
```

<sub>`GET /rest/api/3/issuetype` · `getIssueAllTypes`</sub>

## `jira.createIssueType`

Create issue type — [Provider docs](http://www.atlassian.com)

```ts
jira.createIssueType(input: {
  /** The description of the issue type. */
  description?: string;
  /** The hierarchy level of the issue type. Use:   *  `-1` for Subtask.  *  `0` for Base.  Defaults to `0`. */
  hierarchyLevel?: number;
  /** The unique name for the issue type. The maximum length is 60 characters. */
  name: string;
  /** Deprecated. Use `hierarchyLevel` instead. See the [deprecation notice](https://community.developer.atlassian.com/t/deprecation-of-the-epic-link-parent-link-and-other-related-fields-in-rest-apis-and-webhooks/54048) for details.  Whether the issue type is `subtype` or `standard`. Defaults to `standard`. */
  type?: "subtask" | "standard";
}): Promise<IssueTypeDetails>
```

<sub>`POST /rest/api/3/issuetype` · `createIssueType`</sub>

## `jira.deleteIssueType`

Delete issue type — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteIssueType(input: {
  /** The ID of the issue type. */
  id: string;
  /** The ID of the replacement issue type. */
  alternativeIssueTypeId?: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/issuetype/{id}` · `deleteIssueType`</sub>

## `jira.getIssueType`

Get issue type — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueType(input: {
  /** The ID of the issue type. */
  id: string;
}): Promise<IssueTypeDetails>
```

<sub>`GET /rest/api/3/issuetype/{id}` · `getIssueType`</sub>

## `jira.updateIssueType`

Update issue type — [Provider docs](http://www.atlassian.com)

```ts
jira.updateIssueType(input: {
  /** The ID of an issue type avatar. This can be obtained be obtained from the following endpoints:   *  [System issue type avatar IDs only](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-avatars/#api-rest-api-3-avatar-type-system-get)  *  [System and custom issue type avatar IDs](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-avatars/#api-rest-api-3-universal-avatar-type-type-owner-entityid-get) */
  avatarId?: number;
  /** The description of the issue type. */
  description?: string;
  /** The unique name for the issue type. The maximum length is 60 characters. */
  name?: string;
  /** The ID of the issue type. */
  id: string;
}): Promise<IssueTypeDetails>
```

<sub>`PUT /rest/api/3/issuetype/{id}` · `updateIssueType`</sub>

## `jira.getAlternativeIssueTypes`

Get alternative issue types — [Provider docs](http://www.atlassian.com)

```ts
jira.getAlternativeIssueTypes(input: {
  /** The ID of the issue type. */
  id: string;
}): Promise<(IssueTypeDetails)[]>
```

<sub>`GET /rest/api/3/issuetype/{id}/alternatives` · `getAlternativeIssueTypes`</sub>

## `jira.createIssueTypeAvatar`

Load issue type avatar — [Provider docs](http://www.atlassian.com)

```ts
jira.createIssueTypeAvatar(input: {
  body: unknown;
  /** The ID of the issue type. */
  id: string;
  /** The X coordinate of the top-left corner of the crop region. */
  x?: number;
  /** The Y coordinate of the top-left corner of the crop region. */
  y?: number;
  /** The length of each side of the crop region. */
  size: number;
}): Promise<Avatar>
```

<sub>`POST /rest/api/3/issuetype/{id}/avatar2` · `createIssueTypeAvatar`</sub>

## `jira.getIssueTypesForProject`

Get issue types for project — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueTypesForProject(input: {
  /** The ID of the project. */
  projectId: number;
  /** The level of the issue type to filter by. Use:   *  `-1` for Subtask.  *  `0` for Base.  *  `1` for Epic. */
  level?: number;
}): Promise<(IssueTypeDetails)[]>
```

<sub>`GET /rest/api/3/issuetype/project` · `getIssueTypesForProject`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
