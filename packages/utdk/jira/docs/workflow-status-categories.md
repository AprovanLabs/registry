# Workflow Status Categories

2 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getStatusCategories`

Get all status categories — [Provider docs](http://www.atlassian.com)

```ts
jira.getStatusCategories(): Promise<(StatusCategory)[]>
```

<sub>`GET /rest/api/3/statuscategory` · `getStatusCategories`</sub>

## `jira.getStatusCategory`

Get status category — [Provider docs](http://www.atlassian.com)

```ts
jira.getStatusCategory(input: {
  /** The ID or key of the status category. */
  idOrKey: string;
}): Promise<StatusCategory>
```

<sub>`GET /rest/api/3/statuscategory/{idOrKey}` · `getStatusCategory`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
