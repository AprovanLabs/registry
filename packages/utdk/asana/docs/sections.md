# Sections

7 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getSectionsForProject`

Get sections in a project — [Provider docs](https://asana.com/support)

```ts
asana.getSectionsForProject(input: {
  /** Globally unique identifier for the project. */
  project_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_at" | "name" | "offset" | "path" | "project" | "project.name" | "projects" | "projects.name" | "uri")[];
}): Promise<{ data?: (SectionCompact)[]; next_page?: NextPage }>
```

<sub>`GET /projects/{project_gid}/sections` · `getSectionsForProject`</sub>

## `asana.createSectionForProject`

Create a section in a project — [Provider docs](https://asana.com/support)

```ts
asana.createSectionForProject(input: {
  data?: SectionRequest;
  /** Globally unique identifier for the project. */
  project_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_at" | "name" | "project" | "project.name" | "projects" | "projects.name")[];
}): Promise<{ data?: SectionResponse }>
```

<sub>`POST /projects/{project_gid}/sections` · `createSectionForProject`</sub>

## `asana.insertSectionForProject`

Move or Insert sections — [Provider docs](https://asana.com/support)

```ts
asana.insertSectionForProject(input: {
  data?: ProjectSectionInsertRequest;
  /** Globally unique identifier for the project. */
  project_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /projects/{project_gid}/sections/insert` · `insertSectionForProject`</sub>

## `asana.deleteSection`

Delete a section — [Provider docs](https://asana.com/support)

```ts
asana.deleteSection(input: {
  /** The globally unique identifier for the section. */
  section_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /sections/{section_gid}` · `deleteSection`</sub>

## `asana.getSection`

Get a section — [Provider docs](https://asana.com/support)

```ts
asana.getSection(input: {
  /** The globally unique identifier for the section. */
  section_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_at" | "name" | "project" | "project.name" | "projects" | "projects.name")[];
}): Promise<{ data?: SectionResponse }>
```

<sub>`GET /sections/{section_gid}` · `getSection`</sub>

## `asana.updateSection`

Update a section — [Provider docs](https://asana.com/support)

```ts
asana.updateSection(input: {
  data?: SectionRequest;
  /** The globally unique identifier for the section. */
  section_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_at" | "name" | "project" | "project.name" | "projects" | "projects.name")[];
}): Promise<{ data?: SectionResponse }>
```

<sub>`PUT /sections/{section_gid}` · `updateSection`</sub>

## `asana.addTaskForSection`

Add task to section — [Provider docs](https://asana.com/support)

```ts
asana.addTaskForSection(input: {
  data?: SectionTaskInsertRequest;
  /** The globally unique identifier for the section. */
  section_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /sections/{section_gid}/addTask` · `addTaskForSection`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
