# Issue Navigator Settings

2 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getIssueNavigatorDefaultColumns`

Get issue navigator default columns — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueNavigatorDefaultColumns(): Promise<(ColumnItem)[]>
```

<sub>`GET /rest/api/3/settings/columns` · `getIssueNavigatorDefaultColumns`</sub>

## `jira.setIssueNavigatorDefaultColumns`

Set issue navigator default columns — [Provider docs](http://www.atlassian.com)

```ts
jira.setIssueNavigatorDefaultColumns(input: {
  columns?: (string)[];
}): Promise<undefined>
```

<sub>`PUT /rest/api/3/settings/columns` · `setIssueNavigatorDefaultColumns`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
