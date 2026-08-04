# Comments

6 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.getComment`

Get comment — [Provider docs](https://community.front.com)

```ts
front.getComment(input: {
  /** The Comment ID */
  comment_id: string;
}): Promise<CommentResponse>
```

<sub>`GET /comments/{comment_id}` · `get-comment`</sub>

## `front.updateComment`

Update comment — [Provider docs](https://community.front.com)

```ts
front.updateComment(): Promise<{ _links: { self?: string; related?: { conversation?: string; mentions?: string; comment_replied_to?: string | null } }; id: string; author: { _links: { self?: string; related?: { inboxes?: string; conversations?: string; botSource?: string } }; id: string; email: string; username: string; first_name: string; last_name: string; is_admin: boolean; is_available: boolean; is_blocked: boolean; type: ...>
```

<sub>`PATCH /comments/{comment_id}/` · `update-comment`</sub>

## `front.listCommentMentions`

List comment mentions — [Provider docs](https://community.front.com)

```ts
front.listCommentMentions(input: {
  /** The Comment ID */
  comment_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (TeammateResponse)[] }>
```

<sub>`GET /comments/{comment_id}/mentions` · `list-comment-mentions`</sub>

## `front.addCommentReply`

Add comment reply — [Provider docs](https://community.front.com)

```ts
front.addCommentReply(input: {
  /** ID of the teammate creating the comment. Alternatively, you can supply the author as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). If omitted, will post as the API Token or OAuth client of the requester. */
  author_id?: string;
  /** Content of the comment. Can include markdown formatting. */
  body: string;
  /** Whether or not the comment is pinned in its conversation. */
  is_pinned?: boolean;
  /** Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB. */
  attachments?: (string)[];
  /** The comment ID to reply to */
  comment_id: string;
}): Promise<CommentResponse>
```

<sub>`POST /comments/{comment_id}/replies` · `add-comment-reply`</sub>

## `front.listConversationComments`

List conversation comments — [Provider docs](https://community.front.com)

```ts
front.listConversationComments(input: {
  /** The conversation ID */
  conversation_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (CommentResponse)[] }>
```

<sub>`GET /conversations/{conversation_id}/comments` · `list-conversation-comments`</sub>

## `front.addComment`

Add comment — [Provider docs](https://community.front.com)

```ts
front.addComment(input: {
  /** ID of the teammate creating the comment. Alternatively, you can supply the author as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). If omitted, will post as the API Token or OAuth client of the requester. */
  author_id?: string;
  /** Content of the comment. Can include markdown formatting. */
  body: string;
  /** Whether or not the comment is pinned in its conversation. */
  is_pinned?: boolean;
  /** Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB. */
  attachments?: (string)[];
  /** The conversation ID */
  conversation_id: string;
}): Promise<CommentResponse>
```

<sub>`POST /conversations/{conversation_id}/comments` · `add-comment`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
