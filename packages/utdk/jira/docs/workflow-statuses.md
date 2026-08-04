# Workflow Statuses

2 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getStatuses`

Get all statuses — [Provider docs](http://www.atlassian.com)

```ts
jira.getStatuses(): Promise<(StatusDetails)[]>
```

<sub>`GET /rest/api/3/status` · `getStatuses`</sub>

## `jira.getStatus`

Get status — [Provider docs](http://www.atlassian.com)

```ts
jira.getStatus(input: {
  /** The ID or name of the status. */
  idOrName: string;
}): Promise<StatusDetails>
```

<sub>`GET /rest/api/3/status/{idOrName}` · `getStatus`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
