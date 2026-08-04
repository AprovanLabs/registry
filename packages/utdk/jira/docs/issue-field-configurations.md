# Issue Field Configurations

15 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAllFieldConfigurations`

Get all field configurations — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllFieldConfigurations(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. */
  id?: (number)[];
  /** If *true* returns default field configurations only. */
  isDefault?: boolean;
  /** The query string used to match against field configuration names and descriptions. */
  query?: string;
}): Promise<PageBeanFieldConfigurationDetails>
```

<sub>`GET /rest/api/3/fieldconfiguration` · `getAllFieldConfigurations`</sub>

## `jira.createFieldConfiguration`

Create field configuration — [Provider docs](http://www.atlassian.com)

```ts
jira.createFieldConfiguration(input: {
  /** The description of the field configuration. */
  description?: string;
  /** The name of the field configuration. Must be unique. */
  name: string;
}): Promise<FieldConfiguration>
```

<sub>`POST /rest/api/3/fieldconfiguration` · `createFieldConfiguration`</sub>

## `jira.deleteFieldConfiguration`

Delete field configuration — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteFieldConfiguration(input: {
  /** The ID of the field configuration. */
  id: number;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/fieldconfiguration/{id}` · `deleteFieldConfiguration`</sub>

## `jira.updateFieldConfiguration`

Update field configuration — [Provider docs](http://www.atlassian.com)

```ts
jira.updateFieldConfiguration(input: {
  /** The description of the field configuration. */
  description?: string;
  /** The name of the field configuration. Must be unique. */
  name: string;
  /** The ID of the field configuration. */
  id: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/fieldconfiguration/{id}` · `updateFieldConfiguration`</sub>

## `jira.getFieldConfigurationItems`

Get field configuration items — [Provider docs](http://www.atlassian.com)

```ts
jira.getFieldConfigurationItems(input: {
  /** The ID of the field configuration. */
  id: number;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanFieldConfigurationItem>
```

<sub>`GET /rest/api/3/fieldconfiguration/{id}/fields` · `getFieldConfigurationItems`</sub>

## `jira.updateFieldConfigurationItems`

Update field configuration items — [Provider docs](http://www.atlassian.com)

```ts
jira.updateFieldConfigurationItems(input: {
  /** Details of fields in a field configuration. */
  fieldConfigurationItems: (FieldConfigurationItem)[];
  /** The ID of the field configuration. */
  id: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/fieldconfiguration/{id}/fields` · `updateFieldConfigurationItems`</sub>

## `jira.getAllFieldConfigurationSchemes`

Get all field configuration schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllFieldConfigurationSchemes(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of field configuration scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. */
  id?: (number)[];
}): Promise<PageBeanFieldConfigurationScheme>
```

<sub>`GET /rest/api/3/fieldconfigurationscheme` · `getAllFieldConfigurationSchemes`</sub>

## `jira.createFieldConfigurationScheme`

Create field configuration scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.createFieldConfigurationScheme(input: {
  /** The description of the field configuration scheme. */
  description?: string;
  /** The name of the field configuration scheme. The name must be unique. */
  name: string;
}): Promise<FieldConfigurationScheme>
```

<sub>`POST /rest/api/3/fieldconfigurationscheme` · `createFieldConfigurationScheme`</sub>

## `jira.deleteFieldConfigurationScheme`

Delete field configuration scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteFieldConfigurationScheme(input: {
  /** The ID of the field configuration scheme. */
  id: number;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/fieldconfigurationscheme/{id}` · `deleteFieldConfigurationScheme`</sub>

## `jira.updateFieldConfigurationScheme`

Update field configuration scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.updateFieldConfigurationScheme(input: {
  /** The description of the field configuration scheme. */
  description?: string;
  /** The name of the field configuration scheme. The name must be unique. */
  name: string;
  /** The ID of the field configuration scheme. */
  id: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/fieldconfigurationscheme/{id}` · `updateFieldConfigurationScheme`</sub>

## `jira.setFieldConfigurationSchemeMapping`

Assign issue types to field configurations — [Provider docs](http://www.atlassian.com)

```ts
jira.setFieldConfigurationSchemeMapping(input: {
  /** Field configuration to issue type mappings. */
  mappings: (FieldConfigurationToIssueTypeMapping)[];
  /** The ID of the field configuration scheme. */
  id: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/fieldconfigurationscheme/{id}/mapping` · `setFieldConfigurationSchemeMapping`</sub>

## `jira.removeIssueTypesFromGlobalFieldConfigurationScheme`

Remove issue types from field configuration scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.removeIssueTypesFromGlobalFieldConfigurationScheme(input: {
  /** The list of issue type IDs. Must contain unique values not longer than 255 characters and not be empty. Maximum of 100 IDs. */
  issueTypeIds: (string)[];
  /** The ID of the field configuration scheme. */
  id: number;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/fieldconfigurationscheme/{id}/mapping/delete` · `removeIssueTypesFromGlobalFieldConfigurationScheme`</sub>

## `jira.getFieldConfigurationSchemeMappings`

Get field configuration issue type items — [Provider docs](http://www.atlassian.com)

```ts
jira.getFieldConfigurationSchemeMappings(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: `fieldConfigurationSchemeId=10000&fieldConfigurationSchemeId=10001`. */
  fieldConfigurationSchemeId?: (number)[];
}): Promise<PageBeanFieldConfigurationIssueTypeItem>
```

<sub>`GET /rest/api/3/fieldconfigurationscheme/mapping` · `getFieldConfigurationSchemeMappings`</sub>

## `jira.getFieldConfigurationSchemeProjectMapping`

Get field configuration schemes for projects — [Provider docs](http://www.atlassian.com)

```ts
jira.getFieldConfigurationSchemeProjectMapping(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`. */
  projectId: (number)[];
}): Promise<PageBeanFieldConfigurationSchemeProjects>
```

<sub>`GET /rest/api/3/fieldconfigurationscheme/project` · `getFieldConfigurationSchemeProjectMapping`</sub>

## `jira.assignFieldConfigurationSchemeToProject`

Assign field configuration scheme to project — [Provider docs](http://www.atlassian.com)

```ts
jira.assignFieldConfigurationSchemeToProject(input: {
  /** The ID of the field configuration scheme. If the field configuration scheme ID is `null`, the operation assigns the default field configuration scheme. */
  fieldConfigurationSchemeId?: string;
  /** The ID of the project. */
  projectId: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/fieldconfigurationscheme/project` · `assignFieldConfigurationSchemeToProject`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
