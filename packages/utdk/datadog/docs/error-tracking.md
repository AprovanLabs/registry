# Error Tracking

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getIssue`

Get the details of an error tracking issue — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIssue(input: {
  /** The identifier of the issue. */
  issue_id: string;
  /** Comma-separated list of relationship objects that should be included in the response. Possible values are `assignee`, `case`, and `team_owners`. */
  include?: (GetIssueIncludeQueryParameterItem)[];
}): Promise<IssueResponse>
```

<sub>`GET /api/v2/error-tracking/issues/{issue_id}` · `GetIssue`</sub>

## `datadog.deleteIssueAssignee`

Remove the assignee of an issue — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIssueAssignee(input: {
  /** The identifier of the issue. */
  issue_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/error-tracking/issues/{issue_id}/assignee` · `DeleteIssueAssignee`</sub>

## `datadog.updateIssueAssignee`

Update the assignee of an issue — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIssueAssignee(input: {
  data: IssueUpdateAssigneeRequestData;
  /** The identifier of the issue. */
  issue_id: string;
}): Promise<IssueResponse>
```

<sub>`PUT /api/v2/error-tracking/issues/{issue_id}/assignee` · `UpdateIssueAssignee`</sub>

## `datadog.updateIssueState`

Update the state of an issue — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIssueState(input: {
  data: IssueUpdateStateRequestData;
  /** The identifier of the issue. */
  issue_id: string;
}): Promise<IssueResponse>
```

<sub>`PUT /api/v2/error-tracking/issues/{issue_id}/state` · `UpdateIssueState`</sub>

## `datadog.searchIssues`

Search error tracking issues — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchIssues(input: {
  data: IssuesSearchRequestData;
  /** Comma-separated list of relationship objects that should be included in the response. Possible values are `issue`, `issue.assignee`, `issue.case`, and `issue.team_owners`. */
  include?: (SearchIssuesIncludeQueryParameterItem)[];
}): Promise<IssuesSearchResponse>
```

<sub>`POST /api/v2/error-tracking/issues/search` · `SearchIssues`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
