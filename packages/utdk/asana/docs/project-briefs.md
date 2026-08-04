# Project Briefs

4 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.deleteProjectBrief`

Delete a project brief — [Provider docs](https://asana.com/support)

```ts
asana.deleteProjectBrief(input: {
  /** Globally unique identifier for the project brief. */
  project_brief_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /project_briefs/{project_brief_gid}` · `deleteProjectBrief`</sub>

## `asana.getProjectBrief`

Get a project brief — [Provider docs](https://asana.com/support)

```ts
asana.getProjectBrief(input: {
  /** Globally unique identifier for the project brief. */
  project_brief_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("html_text" | "permalink_url" | "project" | "project.name" | "text" | "title")[];
}): Promise<{ data?: ProjectBriefResponse }>
```

<sub>`GET /project_briefs/{project_brief_gid}` · `getProjectBrief`</sub>

## `asana.updateProjectBrief`

Update a project brief — [Provider docs](https://asana.com/support)

```ts
asana.updateProjectBrief(input: {
  data?: ProjectBriefRequest;
  /** Globally unique identifier for the project brief. */
  project_brief_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("html_text" | "permalink_url" | "project" | "project.name" | "text" | "title")[];
}): Promise<{ data?: ProjectBriefResponse }>
```

<sub>`PUT /project_briefs/{project_brief_gid}` · `updateProjectBrief`</sub>

## `asana.createProjectBrief`

Create a project brief — [Provider docs](https://asana.com/support)

```ts
asana.createProjectBrief(input: {
  data?: ProjectBriefRequest;
  /** Globally unique identifier for the project. */
  project_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("html_text" | "permalink_url" | "project" | "project.name" | "text" | "title")[];
}): Promise<{ data?: ProjectBriefResponse }>
```

<sub>`POST /projects/{project_gid}/project_briefs` · `createProjectBrief`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
