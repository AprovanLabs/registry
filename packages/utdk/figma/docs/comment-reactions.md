# Comment Reactions

3 operations · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.deleteCommentReaction`

Delete a reaction — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.deleteCommentReaction(input: {
  /** File to delete comment reaction from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
  file_key: string;
  /** ID of comment to delete reaction from. */
  comment_id: string;
  emoji: Emoji;
}): Promise<{ status: 200; error: false }>
```

<sub>`DELETE /v1/files/{file_key}/comments/{comment_id}/reactions` · `deleteCommentReaction`</sub>

## `figma.getCommentReactions`

Get reactions for a comment — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getCommentReactions(input: {
  /** File to get comment containing reactions from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
  file_key: string;
  /** ID of comment to get reactions from. */
  comment_id: string;
  /** Cursor for pagination, retrieved from the response of the previous call. */
  cursor?: string;
}): Promise<{ reactions: (Reaction)[]; pagination: ResponsePagination }>
```

<sub>`GET /v1/files/{file_key}/comments/{comment_id}/reactions` · `getCommentReactions`</sub>

## `figma.postCommentReaction`

Add a reaction to a comment — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.postCommentReaction(input: {
  emoji: Emoji;
  /** File to post comment reactions to. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
  file_key: string;
  /** ID of comment to react to. */
  comment_id: string;
}): Promise<{ status: 200; error: false }>
```

<sub>`POST /v1/files/{file_key}/comments/{comment_id}/reactions` · `postCommentReaction`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
