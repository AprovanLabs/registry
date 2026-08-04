# Comments

3 operations · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.getComments`

Get comments in a file — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getComments(input: {
  /** File to get comments from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
  file_key: string;
  /** If enabled, will return comments as their markdown equivalents when applicable. */
  as_md?: boolean;
}): Promise<{ comments: (Comment)[] }>
```

<sub>`GET /v1/files/{file_key}/comments` · `getComments`</sub>

## `figma.postComment`

Add a comment to a file — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.postComment(input: {
  /** The text contents of the comment to post. */
  message: string;
  /** The ID of the comment to reply to, if any. This must be a root comment. You cannot reply to other replies (a comment that has a parent_id). */
  comment_id?: string;
  /** The position where to place the comment. */
  client_meta?: Vector | FrameOffset | Region | FrameOffsetRegion;
  /** File to add comments in. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
  file_key: string;
}): Promise<Comment>
```

<sub>`POST /v1/files/{file_key}/comments` · `postComment`</sub>

## `figma.deleteComment`

Delete a comment — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.deleteComment(input: {
  /** File to delete comment from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
  file_key: string;
  /** Comment id of comment to delete */
  comment_id: string;
}): Promise<{ status: 200; error: false }>
```

<sub>`DELETE /v1/files/{file_key}/comments/{comment_id}` · `deleteComment`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
