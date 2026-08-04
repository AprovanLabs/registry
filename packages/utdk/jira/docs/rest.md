# Rest

1 operation · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getWorklogsByIssueIdAndWorklogId`

Get worklogs by issue id and worklog id — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorklogsByIssueIdAndWorklogId(input: {
  /** A list of issue and worklog ID pairs. */
  requests?: (WorklogCompositeKey)[];
}): Promise<BulkWorklogKeyResponseBean>
```

<sub>`POST /rest/internal/api/latest/worklog/bulk` · `getWorklogsByIssueIdAndWorklogId`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
