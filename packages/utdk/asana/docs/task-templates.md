# Task Templates

4 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getTaskTemplates`

Get multiple task templates — [Provider docs](https://asana.com/support)

```ts
asana.getTaskTemplates(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** The project to filter task templates on. */
  project?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_at" | "created_by" | "name" | "project" | "template")[];
}): Promise<{ data?: (TaskTemplateCompact)[] }>
```

<sub>`GET /task_templates` · `getTaskTemplates`</sub>

## `asana.deleteTaskTemplate`

Delete a task template — [Provider docs](https://asana.com/support)

```ts
asana.deleteTaskTemplate(input: {
  /** Globally unique identifier for the task template. */
  task_template_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /task_templates/{task_template_gid}` · `deleteTaskTemplate`</sub>

## `asana.getTaskTemplate`

Get a task template — [Provider docs](https://asana.com/support)

```ts
asana.getTaskTemplate(input: {
  /** Globally unique identifier for the task template. */
  task_template_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_at" | "created_by" | "name" | "project" | "template")[];
}): Promise<{ data?: TaskTemplateResponse }>
```

<sub>`GET /task_templates/{task_template_gid}` · `getTaskTemplate`</sub>

## `asana.instantiateTask`

Instantiate a task from a task template — [Provider docs](https://asana.com/support)

```ts
asana.instantiateTask(input: {
  data?: TaskTemplateInstantiateTaskRequest;
  /** Globally unique identifier for the task template. */
  task_template_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("new_graph_export" | "new_graph_export.completed_at" | "new_graph_export.created_at" | "new_graph_export.download_url" | "new_portfolio" | "new_portfolio.name" | "new_project" | "new_project.name" | "new_project_template" | "new_project_template.name" | "new_resource_export" | "new_resource_export.completed_at" | "new_resource_export.created_at" | "new_resource_export.download_url" | "new_task" | "new_task.created_by" | "new_task.name" | "new_task.resource_subtype" | "resource_subtype" | "status")[];
}): Promise<{ data?: JobResponse }>
```

<sub>`POST /task_templates/{task_template_gid}/instantiateTask` · `instantiateTask`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
