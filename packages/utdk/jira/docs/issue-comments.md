# Issue Comments

6 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getCommentsByIds`

Get comments by IDs — [Provider docs](http://www.atlassian.com)

```ts
jira.getCommentsByIds(input: {
  /** The list of comment IDs. A maximum of 1000 IDs can be specified. */
  ids: (number)[];
  /** Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts a comma-separated list. Expand options include:   *  `renderedBody` Returns the comment body rendered in HTML.  *  `properties` Returns the comment's properties. */
  expand?: string;
}): Promise<PageBeanComment>
```

<sub>`POST /rest/api/3/comment/list` · `getCommentsByIds`</sub>

## `jira.getComments`

Get comments — [Provider docs](http://www.atlassian.com)

```ts
jira.getComments(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** [Order](#ordering) the results by a field. Accepts *created* to sort comments by their created date. */
  orderBy?: "created" | "-created" | "+created";
  /** Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML. */
  expand?: string;
}): Promise<PageOfComments>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}/comment` · `getComments`</sub>

## `jira.addComment`

Add comment — [Provider docs](http://www.atlassian.com)

```ts
jira.addComment(input: {
  /** The ID of the user who created the comment. */
  author?: UserDetails;
  /** The comment text in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/). */
  body?: unknown;
  /** The date and time at which the comment was created. */
  created?: string;
  /** The ID of the comment. */
  id?: string;
  /** Whether the comment was added from an email sent by a person who is not part of the issue. See [Allow external emails to be added as comments on issues](https://support.atlassian.com/jira-service-management-cloud/docs/allow-external-emails-to-be-added-as-comments-on-issues/)for information on setting up this feature. */
  jsdAuthorCanSeeRequest?: boolean;
  /** Whether the comment is visible in Jira Service Desk. Defaults to true when comments are created in the Jira Cloud Platform. This includes when the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk project and, therefore, there is no Jira Service Desk for the issue to be visible on. To create a comment with its visibility in Jira Service Desk set to false, use the Jira Service Desk REST API [Create request comment](https://developer.atlassian.com/cloud/jira/service-desk/rest/#api-rest-servicedeskapi-request-issueIdOrKey-comment-post) operation. */
  jsdPublic?: boolean;
  /** A list of comment properties. Optional on create and update. */
  properties?: (EntityProperty)[];
  /** The rendered version of the comment. */
  renderedBody?: string;
  /** The URL of the comment. */
  self?: string;
  /** The ID of the user who updated the comment last. */
  updateAuthor?: UserDetails;
  /** The date and time at which the comment was updated last. */
  updated?: string;
  /** The group or role to which this comment is visible. Optional on create and update. */
  visibility?: Visibility;
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML. */
  expand?: string;
  [key: string]: unknown;
}): Promise<Comment>
```

<sub>`POST /rest/api/3/issue/{issueIdOrKey}/comment` · `addComment`</sub>

## `jira.deleteComment`

Delete comment — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteComment(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the comment. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/issue/{issueIdOrKey}/comment/{id}` · `deleteComment`</sub>

## `jira.getComment`

Get comment — [Provider docs](http://www.atlassian.com)

```ts
jira.getComment(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the comment. */
  id: string;
  /** Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML. */
  expand?: string;
}): Promise<Comment>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}/comment/{id}` · `getComment`</sub>

## `jira.updateComment`

Update comment — [Provider docs](http://www.atlassian.com)

```ts
jira.updateComment(input: {
  /** The ID of the user who created the comment. */
  author?: UserDetails;
  /** The comment text in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/). */
  body?: unknown;
  /** The date and time at which the comment was created. */
  created?: string;
  /** The ID of the comment. */
  id?: string;
  /** Whether the comment was added from an email sent by a person who is not part of the issue. See [Allow external emails to be added as comments on issues](https://support.atlassian.com/jira-service-management-cloud/docs/allow-external-emails-to-be-added-as-comments-on-issues/)for information on setting up this feature. */
  jsdAuthorCanSeeRequest?: boolean;
  /** Whether the comment is visible in Jira Service Desk. Defaults to true when comments are created in the Jira Cloud Platform. This includes when the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk project and, therefore, there is no Jira Service Desk for the issue to be visible on. To create a comment with its visibility in Jira Service Desk set to false, use the Jira Service Desk REST API [Create request comment](https://developer.atlassian.com/cloud/jira/service-desk/rest/#api-rest-servicedeskapi-request-issueIdOrKey-comment-post) operation. */
  jsdPublic?: boolean;
  /** A list of comment properties. Optional on create and update. */
  properties?: (EntityProperty)[];
  /** The rendered version of the comment. */
  renderedBody?: string;
  /** The URL of the comment. */
  self?: string;
  /** The ID of the user who updated the comment last. */
  updateAuthor?: UserDetails;
  /** The date and time at which the comment was updated last. */
  updated?: string;
  /** The group or role to which this comment is visible. Optional on create and update. */
  visibility?: Visibility;
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** Whether users are notified when a comment is updated. */
  notifyUsers?: boolean;
  /** Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect app users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideEditableFlag?: boolean;
  /** Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML. */
  expand?: string;
  [key: string]: unknown;
}, options: { params: { id: string } }): Promise<Comment>
```

<sub>`PUT /rest/api/3/issue/{issueIdOrKey}/comment/{id}` · `updateComment`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
