# Issue Panels

1 operation · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.bulkPinUnpinProjectsAsync`

Bulk pin or unpin issue panel to projects — [Provider docs](http://www.atlassian.com)

```ts
jira.bulkPinUnpinProjectsAsync(input: {
  /** The moduleId of the Forge panel in the format `ari:cloud:ecosystem::extension/{app-id}/{environment-id}/static/{module-key}` */
  moduleId: string;
  /** The list of projects to pin or unpin the issue panel to or from. */
  projectList: (ProjectPinAction)[];
}): Promise<ForgePanelProjectPinAsyncResponse>
```

<sub>`POST /rest/api/3/forge/panel/action/bulk/async` · `bulkPinUnpinProjectsAsync`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
