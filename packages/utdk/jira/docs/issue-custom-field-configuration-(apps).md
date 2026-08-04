# Issue Custom Field Configuration (Apps)

3 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getCustomFieldConfiguration`

Get custom field configurations — [Provider docs](http://www.atlassian.com)

```ts
jira.getCustomFieldConfiguration(input: {
  /** The ID or key of the custom field, for example `customfield_10000`. */
  fieldIdOrKey: string;
  /** The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: `id=10000&id=10001`. Can't be provided with `fieldContextId`, `issueId`, `projectKeyOrId`, or `issueTypeId`. */
  id?: (number)[];
  /** The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: `fieldContextId=10000&fieldContextId=10001`. Can't be provided with `id`, `issueId`, `projectKeyOrId`, or `issueTypeId`. */
  fieldContextId?: (number)[];
  /** The ID of the issue to filter results by. If the issue doesn't exist, an empty list is returned. Can't be provided with `projectKeyOrId`, or `issueTypeId`. */
  issueId?: number;
  /** The ID or key of the project to filter results by. Must be provided with `issueTypeId`. Can't be provided with `issueId`. */
  projectKeyOrId?: string;
  /** The ID of the issue type to filter results by. Must be provided with `projectKeyOrId`. Can't be provided with `issueId`. */
  issueTypeId?: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanContextualConfiguration>
```

<sub>`GET /rest/api/3/app/field/{fieldIdOrKey}/context/configuration` · `getCustomFieldConfiguration`</sub>

## `jira.updateCustomFieldConfiguration`

Update custom field configurations — [Provider docs](http://www.atlassian.com)

```ts
jira.updateCustomFieldConfiguration(input: {
  /** The list of custom field configuration details. */
  configurations: (ContextualConfiguration)[];
  /** The ID or key of the custom field, for example `customfield_10000`. */
  fieldIdOrKey: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/app/field/{fieldIdOrKey}/context/configuration` · `updateCustomFieldConfiguration`</sub>

## `jira.getCustomFieldsConfigurations`

Bulk get custom field configurations — [Provider docs](http://www.atlassian.com)

```ts
jira.getCustomFieldsConfigurations(input: {
  /** List of IDs or keys of the custom fields. It can be a mix of IDs and keys in the same query. */
  fieldIdsOrKeys: (string)[];
  /** The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: `id=10000&id=10001`. Can't be provided with `fieldContextId`, `issueId`, `projectKeyOrId`, or `issueTypeId`. */
  id?: (number)[];
  /** The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: `fieldContextId=10000&fieldContextId=10001`. Can't be provided with `id`, `issueId`, `projectKeyOrId`, or `issueTypeId`. */
  fieldContextId?: (number)[];
  /** The ID of the issue to filter results by. If the issue doesn't exist, an empty list is returned. Can't be provided with `projectKeyOrId`, or `issueTypeId`. */
  issueId?: number;
  /** The ID or key of the project to filter results by. Must be provided with `issueTypeId`. Can't be provided with `issueId`. */
  projectKeyOrId?: string;
  /** The ID of the issue type to filter results by. Must be provided with `projectKeyOrId`. Can't be provided with `issueId`. */
  issueTypeId?: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanBulkContextualConfiguration>
```

<sub>`POST /rest/api/3/app/field/context/configuration/list` · `getCustomFieldsConfigurations`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
