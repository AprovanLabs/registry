# Workflow Transition Rules

3 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getWorkflowTransitionRuleConfigurations`

Get workflow transition rule configurations — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorkflowTransitionRuleConfigurations(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The types of the transition rules to return. */
  types: ("postfunction" | "condition" | "validator")[];
  /** The transition rule class keys, as defined in the Connect or the Forge app descriptor, of the transition rules to return. */
  keys?: (string)[];
  /** The list of workflow names to filter by. */
  workflowNames?: (string)[];
  /** The list of `tags` to filter by. */
  withTags?: (string)[];
  /** **Deprecated:** Whether draft or published workflows are returned. If not provided, both workflow types are returned. The 'draft' parameter will be removed from this API on [November 2, 2026](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-3147). */
  draft?: boolean;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts `transition`, which, for each rule, returns information about the transition the rule is assigned to. */
  expand?: string;
}): Promise<PageBeanWorkflowTransitionRules>
```

<sub>`GET /rest/api/3/workflow/rule/config` · `getWorkflowTransitionRuleConfigurations`</sub>

## `jira.updateWorkflowTransitionRuleConfigurations`

Update workflow transition rule configurations — [Provider docs](http://www.atlassian.com)

```ts
jira.updateWorkflowTransitionRuleConfigurations(input: {
  /** The list of workflows with transition rules to update. */
  workflows: (WorkflowTransitionRules)[];
}): Promise<WorkflowTransitionRulesUpdateErrors>
```

<sub>`PUT /rest/api/3/workflow/rule/config` · `updateWorkflowTransitionRuleConfigurations`</sub>

## `jira.deleteWorkflowTransitionRuleConfigurations`

Delete workflow transition rule configurations — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteWorkflowTransitionRuleConfigurations(input: {
  /** The list of workflows with transition rules to delete. */
  workflows: (WorkflowTransitionRulesDetails)[];
}): Promise<WorkflowTransitionRulesUpdateErrors>
```

<sub>`PUT /rest/api/3/workflow/rule/config/delete` · `deleteWorkflowTransitionRuleConfigurations`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
