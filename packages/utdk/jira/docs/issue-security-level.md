# Issue Security Level

2 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getIssueSecurityLevelMembers`

Get issue security level members by issue security scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueSecurityLevelMembers(input: {
  /** The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs. */
  issueSecuritySchemeId: number;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The list of issue security level IDs. To include multiple issue security levels separate IDs with ampersand: `issueSecurityLevelId=10000&issueSecurityLevelId=10001`. */
  issueSecurityLevelId?: (string)[];
  /** Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission. */
  expand?: string;
}): Promise<PageBeanIssueSecurityLevelMember>
```

<sub>`GET /rest/api/3/issuesecurityschemes/{issueSecuritySchemeId}/members` · `getIssueSecurityLevelMembers`</sub>

## `jira.getIssueSecurityLevel`

Get issue security level — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueSecurityLevel(input: {
  /** The ID of the issue security level. */
  id: string;
}): Promise<SecurityLevel>
```

<sub>`GET /rest/api/3/securitylevel/{id}` · `getIssueSecurityLevel`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
