# Jira Integration

7 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listJiraAccounts`

List Jira accounts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listJiraAccounts(): Promise<JiraAccountsResponse>
```

<sub>`GET /api/v2/integration/jira/accounts` · `ListJiraAccounts`</sub>

## `datadog.deleteJiraAccount`

Delete Jira account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteJiraAccount(input: {
  /** The ID of the Jira account to delete */
  account_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/jira/accounts/{account_id}` · `DeleteJiraAccount`</sub>

## `datadog.listJiraIssueTemplates`

List Jira issue templates — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listJiraIssueTemplates(): Promise<JiraIssueTemplatesResponse>
```

<sub>`GET /api/v2/integration/jira/issue-templates` · `ListJiraIssueTemplates`</sub>

## `datadog.createJiraIssueTemplate`

Create Jira issue template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createJiraIssueTemplate(input: {
  data?: JiraIssueTemplateCreateRequestData;
}): Promise<JiraIssueTemplateResponse>
```

<sub>`POST /api/v2/integration/jira/issue-templates` · `CreateJiraIssueTemplate`</sub>

## `datadog.deleteJiraIssueTemplate`

Delete Jira issue template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteJiraIssueTemplate(input: {
  /** The ID of the Jira issue template to delete */
  issue_template_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/jira/issue-templates/{issue_template_id}` · `DeleteJiraIssueTemplate`</sub>

## `datadog.getJiraIssueTemplate`

Get Jira issue template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getJiraIssueTemplate(input: {
  /** The ID of the Jira issue template to retrieve */
  issue_template_id: string;
}): Promise<JiraIssueTemplateResponse>
```

<sub>`GET /api/v2/integration/jira/issue-templates/{issue_template_id}` · `GetJiraIssueTemplate`</sub>

## `datadog.updateJiraIssueTemplate`

Update Jira issue template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateJiraIssueTemplate(input: {
  data: JiraIssueTemplateUpdateRequestData;
  /** The ID of the Jira issue template to update */
  issue_template_id: string;
}): Promise<JiraIssueTemplateResponse>
```

<sub>`PATCH /api/v2/integration/jira/issue-templates/{issue_template_id}` · `UpdateJiraIssueTemplate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
