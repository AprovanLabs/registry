# Issue Links

3 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.linkIssues`

Create issue link — [Provider docs](http://www.atlassian.com)

```ts
jira.linkIssues(input: {
  comment?: Comment;
  inwardIssue: LinkedIssue;
  outwardIssue: LinkedIssue;
  type: IssueLinkType;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/issueLink` · `linkIssues`</sub>

## `jira.deleteIssueLink`

Delete issue link — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteIssueLink(input: {
  /** The ID of the issue link. */
  linkId: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/issueLink/{linkId}` · `deleteIssueLink`</sub>

## `jira.getIssueLink`

Get issue link — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueLink(input: {
  /** The ID of the issue link. */
  linkId: string;
}): Promise<IssueLink>
```

<sub>`GET /rest/api/3/issueLink/{linkId}` · `getIssueLink`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
