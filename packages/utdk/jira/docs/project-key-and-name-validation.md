# Project Key And Name Validation

3 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.validateProjectKey`

Validate project key — [Provider docs](http://www.atlassian.com)

```ts
jira.validateProjectKey(input: {
  /** The project key. */
  key?: string;
}): Promise<ErrorCollection>
```

<sub>`GET /rest/api/3/projectvalidate/key` · `validateProjectKey`</sub>

## `jira.getValidProjectKey`

Get valid project key — [Provider docs](http://www.atlassian.com)

```ts
jira.getValidProjectKey(input: {
  /** The project key. */
  key?: string;
}): Promise<string>
```

<sub>`GET /rest/api/3/projectvalidate/validProjectKey` · `getValidProjectKey`</sub>

## `jira.getValidProjectName`

Get valid project name — [Provider docs](http://www.atlassian.com)

```ts
jira.getValidProjectName(input: {
  /** The project name. */
  name: string;
}): Promise<string>
```

<sub>`GET /rest/api/3/projectvalidate/validProjectName` · `getValidProjectName`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
