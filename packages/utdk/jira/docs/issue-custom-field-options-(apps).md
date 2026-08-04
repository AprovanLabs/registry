# Issue Custom Field Options (Apps)

8 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAllIssueFieldOptions`

Get all issue field options — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllIssueFieldOptions(input: {
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanIssueFieldOption>
```

<sub>`GET /rest/api/3/field/{fieldKey}/option` · `getAllIssueFieldOptions`</sub>

## `jira.createIssueFieldOption`

Create issue field option — [Provider docs](http://www.atlassian.com)

```ts
jira.createIssueFieldOption(input: {
  config?: IssueFieldOptionConfiguration;
  /** The properties of the option as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/) are defined in the descriptor for the issue field module. */
  properties?: { [key: string]: unknown | undefined };
  /** The option's name, which is displayed in Jira. */
  value: string;
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
  [key: string]: unknown;
}): Promise<IssueFieldOption>
```

<sub>`POST /rest/api/3/field/{fieldKey}/option` · `createIssueFieldOption`</sub>

## `jira.deleteIssueFieldOption`

Delete issue field option — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteIssueFieldOption(input: {
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
  /** The ID of the option to be deleted. */
  optionId: number;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/field/{fieldKey}/option/{optionId}` · `deleteIssueFieldOption`</sub>

## `jira.getIssueFieldOption`

Get issue field option — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueFieldOption(input: {
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
  /** The ID of the option to be returned. */
  optionId: number;
}): Promise<IssueFieldOption>
```

<sub>`GET /rest/api/3/field/{fieldKey}/option/{optionId}` · `getIssueFieldOption`</sub>

## `jira.updateIssueFieldOption`

Update issue field option — [Provider docs](http://www.atlassian.com)

```ts
jira.updateIssueFieldOption(input: {
  config?: IssueFieldOptionConfiguration;
  /** The unique identifier for the option. This is only unique within the select field's set of options. */
  id: number;
  /** The properties of the object, as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see [Issue Field Option Property Index](https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/)) are defined in the descriptor for the issue field module. */
  properties?: { [key: string]: unknown | undefined };
  /** The option's name, which is displayed in Jira. */
  value: string;
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
  /** The ID of the option to be updated. */
  optionId: number;
}): Promise<IssueFieldOption>
```

<sub>`PUT /rest/api/3/field/{fieldKey}/option/{optionId}` · `updateIssueFieldOption`</sub>

## `jira.replaceIssueFieldOption`

Replace issue field option — [Provider docs](http://www.atlassian.com)

```ts
jira.replaceIssueFieldOption(input: {
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
  /** The ID of the option to be deselected. */
  optionId: number;
  /** The ID of the option that will replace the currently selected option. */
  replaceWith?: number;
  /** A JQL query that specifies the issues to be updated. For example, *project=10000*. */
  jql?: string;
  /** Whether screen security is overridden to enable hidden fields to be edited. Available to Connect and Forge app users with admin permission. */
  overrideScreenSecurity?: boolean;
  /** Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideEditableFlag?: boolean;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/field/{fieldKey}/option/{optionId}/issue` · `replaceIssueFieldOption`</sub>

## `jira.getSelectableIssueFieldOptions`

Get selectable issue field options — [Provider docs](http://www.atlassian.com)

```ts
jira.getSelectableIssueFieldOptions(input: {
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Filters the results to options that are only available in the specified project. */
  projectId?: number;
}): Promise<PageBeanIssueFieldOption>
```

<sub>`GET /rest/api/3/field/{fieldKey}/option/suggestions/edit` · `getSelectableIssueFieldOptions`</sub>

## `jira.getVisibleIssueFieldOptions`

Get visible issue field options — [Provider docs](http://www.atlassian.com)

```ts
jira.getVisibleIssueFieldOptions(input: {
  /** The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"` */
  fieldKey: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Filters the results to options that are only available in the specified project. */
  projectId?: number;
}): Promise<PageBeanIssueFieldOption>
```

<sub>`GET /rest/api/3/field/{fieldKey}/option/suggestions/search` · `getVisibleIssueFieldOptions`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
