# Issue Custom Field Contexts

14 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getContextsForField`

Get custom field contexts — [Provider docs](http://www.atlassian.com)

```ts
jira.getContextsForField(input: {
  /** The ID of the custom field. */
  fieldId: string;
  /** Whether to return contexts that apply to all issue types. */
  isAnyIssueType?: boolean;
  /** Whether to return contexts that apply to all projects. */
  isGlobalContext?: boolean;
  /** The list of context IDs. To include multiple contexts, separate IDs with ampersand: `contextId=10000&contextId=10001`. */
  contextId?: (number)[];
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanCustomFieldContext>
```

<sub>`GET /rest/api/3/field/{fieldId}/context` · `getContextsForField`</sub>

## `jira.createCustomFieldContext`

Create custom field context — [Provider docs](http://www.atlassian.com)

```ts
jira.createCustomFieldContext(input: {
  /** The description of the context. */
  description?: string;
  /** The ID of the context. */
  id?: string;
  /** The list of issue types IDs for the context. If the list is empty, the context refers to all issue types. */
  issueTypeIds?: (string)[];
  /** The name of the context. */
  name: string;
  /** The list of project IDs associated with the context. If the list is empty, the context is global. */
  projectIds?: (string)[];
  /** The ID of the custom field. */
  fieldId: string;
}): Promise<CreateCustomFieldContext>
```

<sub>`POST /rest/api/3/field/{fieldId}/context` · `createCustomFieldContext`</sub>

## `jira.deleteCustomFieldContext`

Delete custom field context — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteCustomFieldContext(input: {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/field/{fieldId}/context/{contextId}` · `deleteCustomFieldContext`</sub>

## `jira.updateCustomFieldContext`

Update custom field context — [Provider docs](http://www.atlassian.com)

```ts
jira.updateCustomFieldContext(input: {
  /** The description of the custom field context. The maximum length is 255 characters. */
  description?: string;
  /** The name of the custom field context. The name must be unique. The maximum length is 255 characters. */
  name?: string;
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/field/{fieldId}/context/{contextId}` · `updateCustomFieldContext`</sub>

## `jira.addIssueTypesToContext`

Add issue types to context — [Provider docs](http://www.atlassian.com)

```ts
jira.addIssueTypesToContext(input: {
  /** The list of issue type IDs. */
  issueTypeIds: (string)[];
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/field/{fieldId}/context/{contextId}/issuetype` · `addIssueTypesToContext`</sub>

## `jira.removeIssueTypesFromContext`

Remove issue types from context — [Provider docs](http://www.atlassian.com)

```ts
jira.removeIssueTypesFromContext(input: {
  /** The list of issue type IDs. */
  issueTypeIds: (string)[];
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/field/{fieldId}/context/{contextId}/issuetype/remove` · `removeIssueTypesFromContext`</sub>

## `jira.assignProjectsToCustomFieldContext`

Assign custom field context to projects — [Provider docs](http://www.atlassian.com)

```ts
jira.assignProjectsToCustomFieldContext(input: {
  /** The IDs of projects. */
  projectIds: (string)[];
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/field/{fieldId}/context/{contextId}/project` · `assignProjectsToCustomFieldContext`</sub>

## `jira.removeCustomFieldContextFromProjects`

Remove custom field context from projects — [Provider docs](http://www.atlassian.com)

```ts
jira.removeCustomFieldContextFromProjects(input: {
  /** The IDs of projects. */
  projectIds: (string)[];
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/field/{fieldId}/context/{contextId}/project/remove` · `removeCustomFieldContextFromProjects`</sub>

## `jira.getDefaultValues`

Get custom field contexts default values — [Provider docs](http://www.atlassian.com)

```ts
jira.getDefaultValues(input: {
  /** The ID of the custom field, for example `customfield\_10000`. */
  fieldId: string;
  /** The IDs of the contexts. */
  contextId?: (number)[];
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanCustomFieldContextDefaultValue>
```

<sub>`GET /rest/api/3/field/{fieldId}/context/defaultValue` · `getDefaultValues`</sub>

## `jira.setDefaultValues`

Set custom field contexts default values — [Provider docs](http://www.atlassian.com)

```ts
jira.setDefaultValues(input: {
  defaultValues?: (CustomFieldContextDefaultValue)[];
  /** The ID of the custom field. */
  fieldId: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/field/{fieldId}/context/defaultValue` · `setDefaultValues`</sub>

## `jira.getContextDefaultValues`

Get default values for a custom field grouped by context and issue type — [Provider docs](http://www.atlassian.com)

```ts
jira.getContextDefaultValues(input: {
  /** The ID of the custom field, for example `customfield\_10000`. */
  fieldId: string;
  /** The IDs of the contexts to return default values for. If omitted, default values for every context the custom field has are returned. */
  contextId?: (number)[];
  /** The IDs of the issue types to restrict the returned per-issue-type default values to. If omitted, default values for every issue type are returned. This filter never removes the catch-all `isAnyIssueType` entry of a context. */
  issueTypeId?: (string)[];
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanContextDefaultValues>
```

<sub>`GET /rest/api/3/field/{fieldId}/context/defaultValues` · `getContextDefaultValues`</sub>

## `jira.getIssueTypeMappingsForContexts`

Get issue types for custom field context — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueTypeMappingsForContexts(input: {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. To include multiple contexts, provide an ampersand-separated list. For example, `contextId=10001&contextId=10002`. */
  contextId?: (number)[];
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanIssueTypeToContextMapping>
```

<sub>`GET /rest/api/3/field/{fieldId}/context/issuetypemapping` · `getIssueTypeMappingsForContexts`</sub>

## `jira.getCustomFieldContextsForProjectsAndIssueTypes`

Get custom field contexts for projects and issue types — [Provider docs](http://www.atlassian.com)

```ts
jira.getCustomFieldContextsForProjectsAndIssueTypes(input: {
  /** The project and issue type mappings. */
  mappings: (ProjectIssueTypeMapping)[];
  /** The ID of the custom field. */
  fieldId: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanContextForProjectAndIssueType>
```

<sub>`POST /rest/api/3/field/{fieldId}/context/mapping` · `getCustomFieldContextsForProjectsAndIssueTypes`</sub>

## `jira.getProjectContextMapping`

Get project mappings for custom field context — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectContextMapping(input: {
  /** The ID of the custom field, for example `customfield\_10000`. */
  fieldId: string;
  /** The list of context IDs. To include multiple context, separate IDs with ampersand: `contextId=10000&contextId=10001`. */
  contextId?: (number)[];
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanCustomFieldContextProjectMapping>
```

<sub>`GET /rest/api/3/field/{fieldId}/context/projectmapping` · `getProjectContextMapping`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
