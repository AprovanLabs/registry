# Project Resources

4 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.projectsListResources`

List Project Resources

```ts
digitalocean.projectsListResources(input: {
  /** A unique identifier for a project. */
  project_id: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ resources?: (Resource)[] } & Pagination & Meta>
```

<sub>`GET /v2/projects/{project_id}/resources` · `projects_list_resources`</sub>

## `digitalocean.projectsAssignResources`

Assign Resources to a Project

```ts
digitalocean.projectsAssignResources(input: {
  /** A list of uniform resource names (URNs) to be added to a project. Only resources that you are authorized to see will be returned. */
  resources?: (Urn)[];
  /** A unique identifier for a project. */
  project_id: string;
}): Promise<{ resources?: (Resource)[] }>
```

<sub>`POST /v2/projects/{project_id}/resources` · `projects_assign_resources`</sub>

## `digitalocean.projectsListResourcesDefault`

List Default Project Resources

```ts
digitalocean.projectsListResourcesDefault(): Promise<{ resources?: (Resource)[] } & Pagination & Meta>
```

<sub>`GET /v2/projects/default/resources` · `projects_list_resources_default`</sub>

## `digitalocean.projectsAssignResourcesDefault`

Assign Resources to Default Project

```ts
digitalocean.projectsAssignResourcesDefault(input: {
  /** A list of uniform resource names (URNs) to be added to a project. Only resources that you are authorized to see will be returned. */
  resources?: (Urn)[];
}): Promise<{ resources?: (Resource)[] }>
```

<sub>`POST /v2/projects/default/resources` · `projects_assign_resources_default`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
