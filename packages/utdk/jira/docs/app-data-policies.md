# App Data Policies

2 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getPolicy`

Get data policy for the workspace — [Provider docs](http://www.atlassian.com)

```ts
jira.getPolicy(): Promise<WorkspaceDataPolicy>
```

<sub>`GET /rest/api/3/data-policy` · `getPolicy`</sub>

## `jira.getPolicies`

Get data policy for projects — [Provider docs](http://www.atlassian.com)

```ts
jira.getPolicies(input: {
  /** A list of project identifiers. This parameter accepts a comma-separated list. */
  ids?: string;
}): Promise<ProjectDataPolicies>
```

<sub>`GET /rest/api/3/data-policy/project` · `getPolicies`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
