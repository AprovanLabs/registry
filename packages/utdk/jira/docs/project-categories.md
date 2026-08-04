# Project Categories

5 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAllProjectCategories`

Get all project categories — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllProjectCategories(): Promise<(ProjectCategory)[]>
```

<sub>`GET /rest/api/3/projectCategory` · `getAllProjectCategories`</sub>

## `jira.createProjectCategory`

Create project category — [Provider docs](http://www.atlassian.com)

```ts
jira.createProjectCategory(input: {
  /** The description of the project category. */
  description?: string;
  /** The ID of the project category. */
  id?: string;
  /** The name of the project category. Required on create, optional on update. */
  name?: string;
  /** The URL of the project category. */
  self?: string;
}): Promise<ProjectCategory>
```

<sub>`POST /rest/api/3/projectCategory` · `createProjectCategory`</sub>

## `jira.removeProjectCategory`

Delete project category — [Provider docs](http://www.atlassian.com)

```ts
jira.removeProjectCategory(input: {
  /** ID of the project category to delete. */
  id: number;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/projectCategory/{id}` · `removeProjectCategory`</sub>

## `jira.getProjectCategoryById`

Get project category by ID — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectCategoryById(input: {
  /** The ID of the project category. */
  id: number;
}): Promise<ProjectCategory>
```

<sub>`GET /rest/api/3/projectCategory/{id}` · `getProjectCategoryById`</sub>

## `jira.updateProjectCategory`

Update project category — [Provider docs](http://www.atlassian.com)

```ts
jira.updateProjectCategory(input: {
  /** The description of the project category. */
  description?: string;
  /** The ID of the project category. */
  id?: string;
  /** The name of the project category. Required on create, optional on update. */
  name?: string;
  /** The URL of the project category. */
  self?: string;
}, options: { params: { id: number } }): Promise<UpdatedProjectCategory>
```

<sub>`PUT /rest/api/3/projectCategory/{id}` · `updateProjectCategory`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
