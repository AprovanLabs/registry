# Project Properties

4 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getProjectPropertyKeys`

Get project property keys — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectPropertyKeys(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
}): Promise<PropertyKeys>
```

<sub>`GET /rest/api/3/project/{projectIdOrKey}/properties` · `getProjectPropertyKeys`</sub>

## `jira.deleteProjectProperty`

Delete project property — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteProjectProperty(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys. */
  propertyKey: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/project/{projectIdOrKey}/properties/{propertyKey}` · `deleteProjectProperty`</sub>

## `jira.getProjectProperty`

Get project property — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectProperty(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys. */
  propertyKey: string;
}): Promise<EntityProperty>
```

<sub>`GET /rest/api/3/project/{projectIdOrKey}/properties/{propertyKey}` · `getProjectProperty`</sub>

## `jira.setProjectProperty`

Set project property — [Provider docs](http://www.atlassian.com)

```ts
jira.setProjectProperty(input: {
  body: unknown;
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The key of the project property. The maximum length is 255 characters. */
  propertyKey: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/project/{projectIdOrKey}/properties/{propertyKey}` · `setProjectProperty`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
