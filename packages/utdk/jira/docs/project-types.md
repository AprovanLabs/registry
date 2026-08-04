# Project Types

4 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAllProjectTypes`

Get all project types — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllProjectTypes(): Promise<(ProjectType)[]>
```

<sub>`GET /rest/api/3/project/type` · `getAllProjectTypes`</sub>

## `jira.getProjectTypeByKey`

Get project type by key — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectTypeByKey(input: {
  /** The key of the project type. */
  projectTypeKey: "software" | "service_desk" | "business" | "product_discovery";
}): Promise<ProjectType>
```

<sub>`GET /rest/api/3/project/type/{projectTypeKey}` · `getProjectTypeByKey`</sub>

## `jira.getAccessibleProjectTypeByKey`

Get accessible project type by key — [Provider docs](http://www.atlassian.com)

```ts
jira.getAccessibleProjectTypeByKey(input: {
  /** The key of the project type. */
  projectTypeKey: "software" | "service_desk" | "business" | "product_discovery";
}): Promise<ProjectType>
```

<sub>`GET /rest/api/3/project/type/{projectTypeKey}/accessible` · `getAccessibleProjectTypeByKey`</sub>

## `jira.getAllAccessibleProjectTypes`

Get licensed project types — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllAccessibleProjectTypes(): Promise<(ProjectType)[]>
```

<sub>`GET /rest/api/3/project/type/accessible` · `getAllAccessibleProjectTypes`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
