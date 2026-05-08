# Comments

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/figma`

## Operations

### `figma.getComments`

- **HTTP**: `GET /v1/files/{file_key}/comments`
- **What it does**: Get comments in a file
- **OpenAPI operationId**: `getComments`
- **Path params**: `file_key`
- **Query params**: `as_md`
- **Response codes**: `200`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; as_md?: boolean }`
- Client transport options: None

**Outputs**

- Client return type: `{ comments: ({ id: string; client_meta: { x: number; y: number } | { node_id: string; node_offset: { x: number; y: number } } | { x: number; y: number; region_height: number; region_width: number; comment_pin_corner?: "...`
- OpenAPI response codes: `200`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetCommentsInput = Parameters<typeof figma.getComments> extends [infer T, ...unknown[]] ? T : undefined;
type GetCommentsOutput = Awaited<ReturnType<typeof figma.getComments>>;

const input: GetCommentsInput = {} as { file_key: string; as_md?: boolean };
const result: GetCommentsOutput = await figma.getComments(input);

// Result shape (from schema): { comments: ({ id: string; client_meta: { x: number; y: number } | { node_id: string; node_offset: { x: number; y: number } } | { x: number; y: number; region_height: number; region_width: number; comment_pin_corner?: "...
```

### `figma.postComment`

- **HTTP**: `POST /v1/files/{file_key}/comments`
- **What it does**: Add a comment to a file
- **OpenAPI operationId**: `postComment`
- **Path params**: `file_key`
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ message: string; comment_id?: string; client_meta?: { x: number; y: number } | { node_id: string; node_offset: { x: number; y: number } } | { x: number; y: number; region_height: number; region_width: number; comment_pin_corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right" } | { node_id: string; node_offset: { x: number; y: number }; region_height: number; region_width: number; comment_pin_corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }; file_key: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: string; client_meta: { x: number; y: number } | { node_id: string; node_offset: { x: number; y: number } } | { x: number; y: number; region_height: number; region_width: number; comment_pin_corner?: "top-left" | "...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type PostCommentInput = Parameters<typeof figma.postComment> extends [infer T, ...unknown[]] ? T : undefined;
type PostCommentOutput = Awaited<ReturnType<typeof figma.postComment>>;

const input: PostCommentInput = {} as { message: string; comment_id?: string; client_meta?: { x: number; y: number } | { node_id: string; node_offset: { x: number; y: number } } | { x: number; y: number; region_height: number; region_width: number; comment_pin_corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right" } | { node_id: string; node_offset: { x: number; y: number }; region_height: number; region_width: number; comment_pin_corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }; file_key: string };
const result: PostCommentOutput = await figma.postComment(input);

// Result shape (from schema): { id: string; client_meta: { x: number; y: number } | { node_id: string; node_offset: { x: number; y: number } } | { x: number; y: number; region_height: number; region_width: number; comment_pin_corner?: "top-left" | "...
```

### `figma.deleteComment`

- **HTTP**: `DELETE /v1/files/{file_key}/comments/{comment_id}`
- **What it does**: Delete a comment
- **OpenAPI operationId**: `deleteComment`
- **Path params**: `file_key`, `comment_id`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; comment_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ status: 200; error: false }`
- OpenAPI response codes: `200`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type DeleteCommentInput = Parameters<typeof figma.deleteComment> extends [infer T, ...unknown[]] ? T : undefined;
type DeleteCommentOutput = Awaited<ReturnType<typeof figma.deleteComment>>;

const input: DeleteCommentInput = {} as { file_key: string; comment_id: string };
const result: DeleteCommentOutput = await figma.deleteComment(input);

// Result shape (from schema): { status: 200; error: false }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
