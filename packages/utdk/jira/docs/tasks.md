# Tasks

2 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getTask`

Get task — [Provider docs](http://www.atlassian.com)

```ts
jira.getTask(input: {
  /** The ID of the task. */
  taskId: string;
}): Promise<TaskProgressBeanObject>
```

<sub>`GET /rest/api/3/task/{taskId}` · `getTask`</sub>

## `jira.cancelTask`

Cancel task — [Provider docs](http://www.atlassian.com)

```ts
jira.cancelTask(input: {
  /** The ID of the task. */
  taskId: string;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/task/{taskId}/cancel` · `cancelTask`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
