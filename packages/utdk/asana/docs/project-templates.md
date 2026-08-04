# Project Templates

5 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getProjectTemplates`

Get multiple project templates — [Provider docs](https://asana.com/support)

```ts
asana.getProjectTemplates(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** The workspace to filter results on. */
  workspace?: string;
  /** The team to filter projects on. */
  team?: string;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "description" | "html_description" | "name" | "offset" | "owner" | "path" | "public" | "requested_dates" | "requested_dates.description" | "requested_dates.name" | "requested_roles" | "requested_roles.name" | "team" | "team.name" | "uri")[];
}): Promise<{ data?: (ProjectTemplateCompact)[]; next_page?: NextPage }>
```

<sub>`GET /project_templates` · `getProjectTemplates`</sub>

## `asana.deleteProjectTemplate`

Delete a project template — [Provider docs](https://asana.com/support)

```ts
asana.deleteProjectTemplate(input: {
  /** Globally unique identifier for the project template. */
  project_template_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /project_templates/{project_template_gid}` · `deleteProjectTemplate`</sub>

## `asana.getProjectTemplate`

Get a project template — [Provider docs](https://asana.com/support)

```ts
asana.getProjectTemplate(input: {
  /** Globally unique identifier for the project template. */
  project_template_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "description" | "html_description" | "name" | "owner" | "public" | "requested_dates" | "requested_dates.description" | "requested_dates.name" | "requested_roles" | "requested_roles.name" | "team" | "team.name")[];
}): Promise<{ data?: ProjectTemplateResponse }>
```

<sub>`GET /project_templates/{project_template_gid}` · `getProjectTemplate`</sub>

## `asana.instantiateProject`

Instantiate a project from a project template — [Provider docs](https://asana.com/support)

```ts
asana.instantiateProject(input: {
  data?: ProjectTemplateInstantiateProjectRequest;
  /** Globally unique identifier for the project template. */
  project_template_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("new_graph_export" | "new_graph_export.completed_at" | "new_graph_export.created_at" | "new_graph_export.download_url" | "new_portfolio" | "new_portfolio.name" | "new_project" | "new_project.name" | "new_project_template" | "new_project_template.name" | "new_resource_export" | "new_resource_export.completed_at" | "new_resource_export.created_at" | "new_resource_export.download_url" | "new_task" | "new_task.created_by" | "new_task.name" | "new_task.resource_subtype" | "resource_subtype" | "status")[];
}): Promise<{ data?: JobResponse }>
```

<sub>`POST /project_templates/{project_template_gid}/instantiateProject` · `instantiateProject`</sub>

## `asana.getProjectTemplatesForTeam`

Get a team's project templates — [Provider docs](https://asana.com/support)

```ts
asana.getProjectTemplatesForTeam(input: {
  /** Globally unique identifier for the team. */
  team_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "description" | "html_description" | "name" | "offset" | "owner" | "path" | "public" | "requested_dates" | "requested_dates.description" | "requested_dates.name" | "requested_roles" | "requested_roles.name" | "team" | "team.name" | "uri")[];
}): Promise<{ data?: (ProjectTemplateCompact)[]; next_page?: NextPage }>
```

<sub>`GET /teams/{team_gid}/project_templates` · `getProjectTemplatesForTeam`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
