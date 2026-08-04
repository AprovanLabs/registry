# Classification Levels

1 operation · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAllUserDataClassificationLevels`

Get all classification levels — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllUserDataClassificationLevels(input: {
  /** Optional set of statuses to filter by. */
  status?: ("PUBLISHED" | "ARCHIVED" | "DRAFT")[];
  /** Ordering of the results by a given field. If not provided, values will not be sorted. */
  orderBy?: "rank" | "-rank" | "+rank";
}): Promise<DataClassificationLevelsBean>
```

<sub>`GET /rest/api/3/classification-levels` · `getAllUserDataClassificationLevels`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
