# Field Schemes

15 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getFieldAssociationSchemes`

Get field schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.getFieldAssociationSchemes(input: {
  /** (optional) List of project IDs to filter schemes by. If not provided, schemes from all projects are returned. */
  projectId?: (number)[];
  /** (optional) Text filter for scheme name or description matching (case-insensitive). If not provided, no text filtering is applied. */
  query?: string;
  /** Zero-based index of the first item to return (default: 0) */
  startAt?: number;
  /** Maximum number of items to return per page (default: 50, max: 100) */
  maxResults?: number;
}): Promise<PageBean2GetFieldAssociationSchemeResponse>
```

<sub>`GET /rest/api/3/config/fieldschemes` · `getFieldAssociationSchemes`</sub>

## `jira.createFieldAssociationScheme`

Create field scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.createFieldAssociationScheme(input: {
  /** Description of the scheme to be created */
  description?: string;
  /** The name of the scheme to be created */
  name: string;
}): Promise<CreateFieldAssociationSchemeResponse>
```

<sub>`POST /rest/api/3/config/fieldschemes` · `createFieldAssociationScheme`</sub>

## `jira.deleteFieldAssociationScheme`

Delete a field scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteFieldAssociationScheme(input: {
  /** The ID of the field association scheme to delete. */
  id: number;
}): Promise<DeleteFieldAssociationSchemeResponse>
```

<sub>`DELETE /rest/api/3/config/fieldschemes/{id}` · `deleteFieldAssociationScheme`</sub>

## `jira.getFieldAssociationSchemeById`

Get field scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getFieldAssociationSchemeById(input: {
  /** The scheme id to fetch */
  id: number;
}): Promise<GetFieldAssociationSchemeByIdResponse>
```

<sub>`GET /rest/api/3/config/fieldschemes/{id}` · `getFieldAssociationSchemeById`</sub>

## `jira.updateFieldAssociationScheme`

Update field scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.updateFieldAssociationScheme(input: {
  /** The description value to update */
  description?: string;
  /** The name value to update */
  name?: string;
  id: number;
}): Promise<UpdateFieldAssociationSchemeResponse>
```

<sub>`PUT /rest/api/3/config/fieldschemes/{id}` · `updateFieldAssociationScheme`</sub>

## `jira.cloneFieldAssociationScheme`

Clone field scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.cloneFieldAssociationScheme(input: {
  /** Description of the scheme to be created */
  description?: string;
  /** The name of the scheme to be created */
  name: string;
  /** The ID of the source field association scheme to clone from */
  id: number;
}): Promise<CreateFieldAssociationSchemeResponse>
```

<sub>`POST /rest/api/3/config/fieldschemes/{id}/clone` · `cloneFieldAssociationScheme`</sub>

## `jira.searchFieldAssociationSchemeFields`

Search field scheme fields — [Provider docs](http://www.atlassian.com)

```ts
jira.searchFieldAssociationSchemeFields(input: {
  /** The scheme ID to search for child fields */
  id: number;
  /** The starting index of the returned fields. Base index: 0. */
  startAt?: number;
  /** The maximum number of fields to return per page, maximum allowed value is 100. */
  maxResults?: number;
  /** The field IDs to filter by, if empty then all fields belonging to a field association scheme will be returned */
  fieldId?: (string)[];
}): Promise<PageBean2FieldAssociationSchemeFieldSearchResult>
```

<sub>`GET /rest/api/3/config/fieldschemes/{id}/fields` · `searchFieldAssociationSchemeFields`</sub>

## `jira.getFieldAssociationSchemeItemParameters`

Get field parameters — [Provider docs](http://www.atlassian.com)

```ts
jira.getFieldAssociationSchemeItemParameters(input: {
  /** the ID of the field association scheme to retrieve parameters for */
  id: number;
  /** the ID of the field */
  fieldId: string;
}): Promise<GetFieldAssociationParametersResponse>
```

<sub>`GET /rest/api/3/config/fieldschemes/{id}/fields/{fieldId}/parameters` · `getFieldAssociationSchemeItemParameters`</sub>

## `jira.searchFieldAssociationSchemeProjects`

Search field scheme projects — [Provider docs](http://www.atlassian.com)

```ts
jira.searchFieldAssociationSchemeProjects(input: {
  /** The scheme id to search for associated projects */
  id: number;
  /** The starting index of the returned projects. Base index: 0. */
  startAt?: number;
  /** The maximum number of projects to return per page, maximum allowed value is 100. */
  maxResults?: number;
  /** The project Ids to filter by, if empty then all projects belonging to a field association scheme will be returned */
  projectId?: (number)[];
}): Promise<PageBean2FieldAssociationSchemeProjectSearchResult>
```

<sub>`GET /rest/api/3/config/fieldschemes/{id}/projects` · `searchFieldAssociationSchemeProjects`</sub>

## `jira.removeFieldsAssociatedWithSchemes`

Remove fields associated with field schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.removeFieldsAssociatedWithSchemes(input: {
  body: { [key: string]: RemoveFieldAssociationsRequestItem | undefined };
}): Promise<MinimalFieldSchemeToFieldsResponse>
```

<sub>`DELETE /rest/api/3/config/fieldschemes/fields` · `removeFieldsAssociatedWithSchemes`</sub>

## `jira.updateFieldsAssociatedWithSchemes`

Update fields associated with field schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.updateFieldsAssociatedWithSchemes(input: {
  body: { [key: string]: (UpdateFieldAssociationsRequestItem)[] | undefined };
}): Promise<FieldSchemeToFieldsResponse>
```

<sub>`PUT /rest/api/3/config/fieldschemes/fields` · `updateFieldsAssociatedWithSchemes`</sub>

## `jira.removeFieldAssociationSchemeItemParameters`

Remove field parameters — [Provider docs](http://www.atlassian.com)

```ts
jira.removeFieldAssociationSchemeItemParameters(input: {
  body: { [key: string]: (ParameterRemovalDetails)[] | undefined };
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/config/fieldschemes/fields/parameters` · `removeFieldAssociationSchemeItemParameters`</sub>

## `jira.updateFieldAssociationSchemeItemParameters`

Update field parameters — [Provider docs](http://www.atlassian.com)

```ts
jira.updateFieldAssociationSchemeItemParameters(input: {
  body: { [key: string]: (UpdateFieldSchemeParametersRequest)[] | undefined };
}): Promise<UpdateFieldSchemeParametersResponse>
```

<sub>`PUT /rest/api/3/config/fieldschemes/fields/parameters` · `updateFieldAssociationSchemeItemParameters`</sub>

## `jira.getProjectsWithFieldSchemes`

Get projects with field schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectsWithFieldSchemes(input: {
  /** The starting index of the returned projects. Base index: 0. */
  startAt?: number;
  /** The maximum number of projects to return per page, maximum allowed value is 100. */
  maxResults?: number;
  /** List of project ids to filter the results by. */
  projectId: (number)[];
}): Promise<PageBean2GetProjectsWithFieldSchemesResponse>
```

<sub>`GET /rest/api/3/config/fieldschemes/projects` · `getProjectsWithFieldSchemes`</sub>

## `jira.associateProjectsToFieldAssociationSchemes`

Associate projects to field schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.associateProjectsToFieldAssociationSchemes(input: {
  body: { [key: string]: FieldSchemeToProjectsRequest | undefined };
}): Promise<FieldSchemeToProjectsResponse>
```

<sub>`PUT /rest/api/3/config/fieldschemes/projects` · `associateProjectsToFieldAssociationSchemes`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
