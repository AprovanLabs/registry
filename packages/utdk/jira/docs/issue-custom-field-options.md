# Issue Custom Field Options

7 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getCustomFieldOption`

Get custom field option — [Provider docs](http://www.atlassian.com)

```ts
jira.getCustomFieldOption(input: {
  /** The ID of the custom field option. */
  id: string;
}): Promise<CustomFieldOption>
```

<sub>`GET /rest/api/3/customFieldOption/{id}` · `getCustomFieldOption`</sub>

## `jira.getOptionsForContext`

Get custom field options (context) — [Provider docs](http://www.atlassian.com)

```ts
jira.getOptionsForContext(input: {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
  /** The ID of the option. */
  optionId?: number;
  /** Whether only options are returned. */
  onlyOptions?: boolean;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanCustomFieldContextOption>
```

<sub>`GET /rest/api/3/field/{fieldId}/context/{contextId}/option` · `getOptionsForContext`</sub>

## `jira.createCustomFieldOption`

Create custom field options (context) — [Provider docs](http://www.atlassian.com)

```ts
jira.createCustomFieldOption(input: {
  /** Details of options to create. */
  options?: (CustomFieldOptionCreate)[];
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
}): Promise<CustomFieldCreatedContextOptionsList>
```

<sub>`POST /rest/api/3/field/{fieldId}/context/{contextId}/option` · `createCustomFieldOption`</sub>

## `jira.updateCustomFieldOption`

Update custom field options (context) — [Provider docs](http://www.atlassian.com)

```ts
jira.updateCustomFieldOption(input: {
  /** Details of the options to update. */
  options?: (CustomFieldOptionUpdate)[];
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
}): Promise<CustomFieldUpdatedContextOptionsList>
```

<sub>`PUT /rest/api/3/field/{fieldId}/context/{contextId}/option` · `updateCustomFieldOption`</sub>

## `jira.deleteCustomFieldOption`

Delete custom field options (context) — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteCustomFieldOption(input: {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context from which an option should be deleted. */
  contextId: number;
  /** The ID of the option to delete. */
  optionId: number;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/field/{fieldId}/context/{contextId}/option/{optionId}` · `deleteCustomFieldOption`</sub>

## `jira.replaceCustomFieldOption`

Replace custom field options — [Provider docs](http://www.atlassian.com)

```ts
jira.replaceCustomFieldOption(input: {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the option to be deselected. */
  optionId: number;
  /** The ID of the context. */
  contextId: number;
  /** The ID of the option that will replace the currently selected option. */
  replaceWith?: number;
  /** A JQL query that specifies the issues to be updated. For example, *project=10000*. */
  jql?: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/field/{fieldId}/context/{contextId}/option/{optionId}/issue` · `replaceCustomFieldOption`</sub>

## `jira.reorderCustomFieldOptions`

Reorder custom field options (context) — [Provider docs](http://www.atlassian.com)

```ts
jira.reorderCustomFieldOptions(input: {
  /** The ID of the custom field option or cascading option to place the moved options after. Required if `position` isn't provided. */
  after?: string;
  /** A list of IDs of custom field options to move. The order of the custom field option IDs in the list is the order they are given after the move. The list must contain custom field options or cascading options, but not both. */
  customFieldOptionIds: (string)[];
  /** The position the custom field options should be moved to. Required if `after` isn't provided. */
  position?: "First" | "Last";
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/field/{fieldId}/context/{contextId}/option/move` · `reorderCustomFieldOptions`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
