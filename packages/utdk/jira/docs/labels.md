# Labels

1 operation · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAllLabels`

Get all labels — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllLabels(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanString>
```

<sub>`GET /rest/api/3/label` · `getAllLabels`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
