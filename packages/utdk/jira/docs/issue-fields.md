# Issue Fields

11 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getFields`

Get fields — [Provider docs](http://www.atlassian.com)

```ts
jira.getFields(): Promise<(FieldDetails)[]>
```

<sub>`GET /rest/api/3/field` · `getFields`</sub>

## `jira.createCustomField`

Create custom field — [Provider docs](http://www.atlassian.com)

```ts
jira.createCustomField(input: {
  /** The description of the custom field, which is displayed in Jira. */
  description?: string;
  /** The name of the custom field, which is displayed in Jira. This is not the unique identifier. */
  name: string;
  /** The searcher defines the way the field is searched in Jira. For example, *com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher*.   The search UI (basic search and JQL search) will display different operations and values for the field, based on the field searcher. You must specify a searcher that is valid for the field type, as listed below (abbreviated values shown):   *  `cascadingselect`: `cascadingselectsearcher`  *  `datepicker`: `daterange`  *  `datetime`: `datetimerange`  *  `float`: `exactnumber` or `numberrange`  *  `grouppicker`: `grouppickersearcher`  *  `importid`: `exactnumber` or `numberrange`  *  `labels`: `labelsearcher`  *  `multicheckboxes`: `multiselectsearcher`  *  `multigrouppicker`: `multiselectsearcher`  *  `multiselect`: `multiselectsearcher`  *  `multiuserpicker`: `userpickergroupsearcher`  *  `multiversion`: `versionsearcher`  *  `project`: `projectsearcher`  *  `radiobuttons`: `multiselectsearcher`  *  `readonlyfield`: `textsearcher`  *  `select`: `multiselectsearcher`  *  `textarea`: `textsearcher`  *  `textfield`: `textsearcher`  *  `url`: `exacttextsearcher`  *  `userpicker`: `userpickergroupsearcher`  *  `version`: `versionsearcher`  If no searcher is provided, the field isn't searchable. However, [Forge custom fields](https://developer.atlassian.com/platform/forge/manifest-reference/modules/#jira-custom-field-type--beta-) have a searcher set automatically, so are always searchable. */
  searcherKey?: "com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:daterange" | "com.atlassian.jira.plugin.system.customfieldtypes:datetimerange" | "com.atlassian.jira.plugin.system.customfieldtypes:exactnumber" | "com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:numberrange" | "com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:textsearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher";
  /** The type of the custom field. These built-in custom field types are available:   *  `cascadingselect`: Enables values to be selected from two levels of select lists (value: `com.atlassian.jira.plugin.system.customfieldtypes:cascadingselect`)  *  `datepicker`: Stores a date using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:datepicker`)  *  `datetime`: Stores a date with a time component (value: `com.atlassian.jira.plugin.system.customfieldtypes:datetime`)  *  `float`: Stores and validates a numeric (floating point) input (value: `com.atlassian.jira.plugin.system.customfieldtypes:float`)  *  `grouppicker`: Stores a user group using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:grouppicker`)  *  `importid`: A read-only field that stores the ID the issue had in the system it was imported from (value: `com.atlassian.jira.plugin.system.customfieldtypes:importid`)  *  `labels`: Stores labels (value: `com.atlassian.jira.plugin.system.customfieldtypes:labels`)  *  `multicheckboxes`: Stores multiple values using checkboxes (value: ``)  *  `multigrouppicker`: Stores multiple user groups using a picker control (value: ``)  *  `multiselect`: Stores multiple values using a select list (value: `com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes`)  *  `multiuserpicker`: Stores multiple users using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker`)  *  `multiversion`: Stores multiple versions from the versions available in a project using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:multiversion`)  *  `project`: Stores a project from a list of projects that the user is permitted to view (value: `com.atlassian.jira.plugin.system.customfieldtypes:project`)  *  `radiobuttons`: Stores a value using radio buttons (value: `com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons`)  *  `readonlyfield`: Stores a read-only text value, which can only be populated via the API (value: `com.atlassian.jira.plugin.system.customfieldtypes:readonlyfield`)  *  `select`: Stores a value from a configurable list of options (value: `com.atlassian.jira.plugin.system.customfieldtypes:select`)  *  `textarea`: Stores a long text string using a multiline text area (value: `com.atlassian.jira.plugin.system.customfieldtypes:textarea`)  *  `textfield`: Stores a text string using a single-line text box (value: `com.atlassian.jira.plugin.system.customfieldtypes:textfield`)  *  `url`: Stores a URL (value: `com.atlassian.jira.plugin.system.customfieldtypes:url`)  *  `userpicker`: Stores a user using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:userpicker`)  *  `version`: Stores a version using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:version`)  To create a field based on a [Forge custom field type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/#jira-custom-field-type--beta-), use the ID of the Forge custom field type as the value. For example, `ari:cloud:ecosystem::extension/e62f20a2-4b61-4dbe-bfb9-9a88b5e3ac84/548c5df1-24aa-4f7c-bbbb-3038d947cb05/static/my-cf-type-key`. */
  type: string;
}): Promise<FieldDetails>
```

<sub>`POST /rest/api/3/field` · `createCustomField`</sub>

## `jira.updateCustomField`

Update custom field — [Provider docs](http://www.atlassian.com)

```ts
jira.updateCustomField(input: {
  /** The description of the custom field. The maximum length is 40000 characters. */
  description?: string;
  /** The name of the custom field. It doesn't have to be unique. The maximum length is 255 characters. */
  name?: string;
  /** The searcher that defines the way the field is searched in Jira. It can be set to `null`, otherwise you must specify the valid searcher for the field type, as listed below (abbreviated values shown):   *  `cascadingselect`: `cascadingselectsearcher`  *  `datepicker`: `daterange`  *  `datetime`: `datetimerange`  *  `float`: `exactnumber` or `numberrange`  *  `grouppicker`: `grouppickersearcher`  *  `importid`: `exactnumber` or `numberrange`  *  `labels`: `labelsearcher`  *  `multicheckboxes`: `multiselectsearcher`  *  `multigrouppicker`: `multiselectsearcher`  *  `multiselect`: `multiselectsearcher`  *  `multiuserpicker`: `userpickergroupsearcher`  *  `multiversion`: `versionsearcher`  *  `project`: `projectsearcher`  *  `radiobuttons`: `multiselectsearcher`  *  `readonlyfield`: `textsearcher`  *  `select`: `multiselectsearcher`  *  `textarea`: `textsearcher`  *  `textfield`: `textsearcher`  *  `url`: `exacttextsearcher`  *  `userpicker`: `userpickergroupsearcher`  *  `version`: `versionsearcher` */
  searcherKey?: "com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:daterange" | "com.atlassian.jira.plugin.system.customfieldtypes:datetimerange" | "com.atlassian.jira.plugin.system.customfieldtypes:exactnumber" | "com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:numberrange" | "com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:textsearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher" | "com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher";
  /** The ID of the custom field. */
  fieldId: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/field/{fieldId}` · `updateCustomField`</sub>

## `jira.getFieldProjectAssociations`

Get field project associations — [Provider docs](http://www.atlassian.com)

```ts
jira.getFieldProjectAssociations(input: {
  /** The ID of the field, for example `customfield_10000`. */
  fieldId: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanFieldProjectAssociation>
```

<sub>`GET /rest/api/3/field/{fieldId}/association/project` · `getFieldProjectAssociations`</sub>

## `jira.getContextsForFieldDeprecated`

Get contexts for a field — [Provider docs](http://www.atlassian.com)

```ts
jira.getContextsForFieldDeprecated(input: {
  /** The ID of the field to return contexts for. */
  fieldId: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanContext>
```

<sub>`GET /rest/api/3/field/{fieldId}/contexts` · `getContextsForFieldDeprecated`</sub>

## `jira.deleteCustomField`

Delete custom field — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteCustomField(input: {
  /** The ID of a custom field. */
  id: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/field/{id}` · `deleteCustomField`</sub>

## `jira.restoreCustomField`

Restore custom field from trash — [Provider docs](http://www.atlassian.com)

```ts
jira.restoreCustomField(input: {
  /** The ID of a custom field. */
  id: string;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/field/{id}/restore` · `restoreCustomField`</sub>

## `jira.trashCustomField`

Move custom field to trash — [Provider docs](http://www.atlassian.com)

```ts
jira.trashCustomField(input: {
  /** The ID of a custom field. */
  id: string;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/field/{id}/trash` · `trashCustomField`</sub>

## `jira.getFieldsPaginated`

Get fields paginated — [Provider docs](http://www.atlassian.com)

```ts
jira.getFieldsPaginated(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The type of fields to search. */
  type?: ("custom" | "system")[];
  /** The IDs of the custom fields to return or, where `query` is specified, filter. */
  id?: (string)[];
  /** String used to perform a case-insensitive partial match with field names or descriptions. */
  query?: string;
  /** [Order](#ordering) the results by:   *  `contextsCount` sorts by the number of contexts related to a field  *  `lastUsed` sorts by the date when the value of the field last changed  *  `name` sorts by the field name  *  `screensCount` sorts by the number of screens related to a field */
  orderBy?: "contextsCount" | "-contextsCount" | "+contextsCount" | "lastUsed" | "-lastUsed" | "+lastUsed" | "name" | "-name" | "+name" | "screensCount" | "-screensCount" | "+screensCount" | "projectsCount" | "-projectsCount" | "+projectsCount";
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `key` returns the key for each field  *  `stableId` returns the stableId for each field  *  `lastUsed` returns the date when the value of the field last changed  *  `screensCount` returns the number of screens related to a field  *  `contextsCount` returns the number of contexts related to a field  *  `isLocked` returns information about whether the field is locked  *  `searcherKey` returns the searcher key for each custom field */
  expand?: string;
  /** The IDs of the projects to filter the fields by. Fields belonging to project Ids that the user does not have access to will not be returned */
  projectIds?: (number)[];
}): Promise<PageBeanField>
```

<sub>`GET /rest/api/3/field/search` · `getFieldsPaginated`</sub>

## `jira.getTrashedFieldsPaginated`

Get fields in trash paginated — [Provider docs](http://www.atlassian.com)

```ts
jira.getTrashedFieldsPaginated(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  id?: (string)[];
  /** String used to perform a case-insensitive partial match with field names or descriptions. */
  query?: string;
  expand?: "name" | "-name" | "+name" | "trashDate" | "-trashDate" | "+trashDate" | "plannedDeletionDate" | "-plannedDeletionDate" | "+plannedDeletionDate" | "projectsCount" | "-projectsCount" | "+projectsCount";
  /** [Order](#ordering) the results by a field:   *  `name` sorts by the field name  *  `trashDate` sorts by the date the field was moved to the trash  *  `plannedDeletionDate` sorts by the planned deletion date */
  orderBy?: string;
}): Promise<PageBeanField>
```

<sub>`GET /rest/api/3/field/search/trashed` · `getTrashedFieldsPaginated`</sub>

## `jira.getProjectFields`

Get fields for projects — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectFields(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The IDs of projects to return fields for. */
  projectId: (number)[];
  /** The IDs of work types (issue types) to return fields for. */
  workTypeId: (number)[];
  /** The IDs of fields to return. If not provided, all fields are returned. */
  fieldId?: (string)[];
}): Promise<PageBean2ProjectFieldBean>
```

<sub>`GET /rest/api/3/projects/fields` · `getProjectFields`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
