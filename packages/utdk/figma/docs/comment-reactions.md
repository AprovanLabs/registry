# Comment Reactions

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/figma`

## Operations

### `figma.deleteCommentReaction`

- **HTTP**: `DELETE /v1/files/{file_key}/comments/{comment_id}/reactions`
- **What it does**: Delete a reaction
- **OpenAPI operationId**: `deleteCommentReaction`
- **Path params**: `file_key`, `comment_id`
- **Query params**: `emoji`
- **Response codes**: `200`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; comment_id: string; emoji: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ status: 200; error: false }`
- OpenAPI response codes: `200`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type DeleteCommentReactionInput = Parameters<typeof figma.deleteCommentReaction> extends [infer T, ...unknown[]] ? T : undefined;
type DeleteCommentReactionOutput = Awaited<ReturnType<typeof figma.deleteCommentReaction>>;

const input: DeleteCommentReactionInput = {} as { file_key: string; comment_id: string; emoji: string };
const result: DeleteCommentReactionOutput = await figma.deleteCommentReaction(input);

// Result shape (from schema): { status: 200; error: false }
```

### `figma.getCommentReactions`

- **HTTP**: `GET /v1/files/{file_key}/comments/{comment_id}/reactions`
- **What it does**: Get reactions for a comment
- **OpenAPI operationId**: `getCommentReactions`
- **Path params**: `file_key`, `comment_id`
- **Query params**: `cursor`
- **Response codes**: `200`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; comment_id: string; cursor?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ reactions: ({ user: { id: string; handle: string; img_url: string }; emoji: string; created_at: string })[]; pagination: { prev_page?: string; next_page?: string } }`
- OpenAPI response codes: `200`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetCommentReactionsInput = Parameters<typeof figma.getCommentReactions> extends [infer T, ...unknown[]] ? T : undefined;
type GetCommentReactionsOutput = Awaited<ReturnType<typeof figma.getCommentReactions>>;

const input: GetCommentReactionsInput = {} as { file_key: string; comment_id: string; cursor?: string };
const result: GetCommentReactionsOutput = await figma.getCommentReactions(input);

// Result shape (from schema): { reactions: ({ user: { id: string; handle: string; img_url: string }; emoji: string; created_at: string })[]; pagination: { prev_page?: string; next_page?: string } }
```

### `figma.postCommentReaction`

- **HTTP**: `POST /v1/files/{file_key}/comments/{comment_id}/reactions`
- **What it does**: Add a reaction to a comment
- **OpenAPI operationId**: `postCommentReaction`
- **Path params**: `file_key`, `comment_id`
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ emoji: string; file_key: string; comment_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ status: 200; error: false }`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type PostCommentReactionInput = Parameters<typeof figma.postCommentReaction> extends [infer T, ...unknown[]] ? T : undefined;
type PostCommentReactionOutput = Awaited<ReturnType<typeof figma.postCommentReaction>>;

const input: PostCommentReactionInput = {} as { emoji: string; file_key: string; comment_id: string };
const result: PostCommentReactionOutput = await figma.postCommentReaction(input);

// Result shape (from schema): { status: 200; error: false }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
