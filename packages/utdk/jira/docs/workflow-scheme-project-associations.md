# Workflow Scheme Project Associations

2 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getWorkflowSchemeProjectAssociations`

Get workflow scheme project associations — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorkflowSchemeProjectAssociations(input: {
  /** The ID of a project to return the workflow schemes for. To include multiple projects, provide an ampersand-Jim: oneseparated list. For example, `projectId=10000&projectId=10001`. */
  projectId: (number)[];
}): Promise<ContainerOfWorkflowSchemeAssociations>
```

<sub>`GET /rest/api/3/workflowscheme/project` · `getWorkflowSchemeProjectAssociations`</sub>

## `jira.assignSchemeToProject`

Assign workflow scheme to project — [Provider docs](http://www.atlassian.com)

```ts
jira.assignSchemeToProject(input: {
  /** The ID of the project. */
  projectId: string;
  /** The ID of the workflow scheme. If the workflow scheme ID is `null`, the operation assigns the default workflow scheme. */
  workflowSchemeId?: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/workflowscheme/project` · `assignSchemeToProject`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
