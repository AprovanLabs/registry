# App Migration

3 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.appIssueFieldValueUpdateResourceUpdateIssueFieldsPut`

Bulk update custom field value — [Provider docs](http://www.atlassian.com)

```ts
jira.appIssueFieldValueUpdateResourceUpdateIssueFieldsPut(input: {
  /** The list of custom field update details. */
  updateValueList?: (ConnectCustomFieldValue)[];
}, options: { headers: { "Atlassian-Transfer-Id": string } }): Promise<unknown>
```

<sub>`PUT /rest/atlassian-connect/1/migration/field` · `AppIssueFieldValueUpdateResource.updateIssueFields_put`</sub>

## `jira.migrationResourceUpdateEntityPropertiesValuePut`

Bulk update entity properties — [Provider docs](http://www.atlassian.com)

```ts
jira.migrationResourceUpdateEntityPropertiesValuePut(input: {
  body: (EntityPropertyDetails)[];
  /** The type indicating the object that contains the entity properties. */
  entityType: "IssueProperty" | "CommentProperty" | "DashboardItemProperty" | "IssueTypeProperty" | "ProjectProperty" | "UserProperty" | "WorklogProperty" | "BoardProperty" | "SprintProperty";
}, options: { headers: { "Atlassian-Transfer-Id": string } }): Promise<undefined>
```

<sub>`PUT /rest/atlassian-connect/1/migration/properties/{entityType}` · `MigrationResource.updateEntityPropertiesValue_put`</sub>

## `jira.migrationResourceWorkflowRuleSearchPost`

Get workflow transition rule configurations — [Provider docs](http://www.atlassian.com)

```ts
jira.migrationResourceWorkflowRuleSearchPost(input: {
  /** Use expand to include additional information in the response. This parameter accepts `transition` which, for each rule, returns information about the transition the rule is assigned to. */
  expand?: string;
  /** The list of workflow rule IDs. */
  ruleIds: (string)[];
  /** The workflow ID. */
  workflowEntityId: string;
}, options: { headers: { "Atlassian-Transfer-Id": string } }): Promise<WorkflowRulesSearchDetails>
```

<sub>`POST /rest/atlassian-connect/1/migration/workflow/rule/search` · `MigrationResource.workflowRuleSearch_post`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
