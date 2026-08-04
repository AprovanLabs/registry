# Project Classification Levels

4 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getProjectClassificationConfig`

Get the classification configuration for a project — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectClassificationConfig(input: {
  /** The project ID or project key (case-sensitive). */
  projectIdOrKey: string;
}): Promise<unknown>
```

<sub>`GET /rest/api/3/project/{projectIdOrKey}/classification-config` · `getProjectClassificationConfig`</sub>

## `jira.removeDefaultProjectClassification`

Remove the default data classification level from a project — [Provider docs](http://www.atlassian.com)

```ts
jira.removeDefaultProjectClassification(input: {
  /** The project ID or project key (case-sensitive). */
  projectIdOrKey: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/project/{projectIdOrKey}/classification-level/default` · `removeDefaultProjectClassification`</sub>

## `jira.getDefaultProjectClassification`

Get the default data classification level of a project — [Provider docs](http://www.atlassian.com)

```ts
jira.getDefaultProjectClassification(input: {
  /** The project ID or project key (case-sensitive). */
  projectIdOrKey: string;
}): Promise<unknown>
```

<sub>`GET /rest/api/3/project/{projectIdOrKey}/classification-level/default` · `getDefaultProjectClassification`</sub>

## `jira.updateDefaultProjectClassification`

Update the default data classification level of a project — [Provider docs](http://www.atlassian.com)

```ts
jira.updateDefaultProjectClassification(input: {
  /** The ID of the project classification. */
  id: string;
  /** The project ID or project key (case-sensitive). */
  projectIdOrKey: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/project/{projectIdOrKey}/classification-level/default` · `updateDefaultProjectClassification`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
