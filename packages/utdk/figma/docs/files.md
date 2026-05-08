# Files

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/figma`

## Operations

### `figma.getFile`

- **HTTP**: `GET /v1/files/{file_key}`
- **What it does**: Get file JSON
- **OpenAPI operationId**: `getFile`
- **Path params**: `file_key`
- **Query params**: `version`, `ids`, `depth`, `geometry`, `plugin_data`, `branch_data`
- **Response codes**: `200`, `400`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; version?: string; ids?: string; depth?: number; geometry?: string; plugin_data?: string; branch_data?: boolean }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; role: "owner" | "editor" | "viewer"; lastModified: string; editorType: "figma" | "figjam"; thumbnailUrl?: string; version: string; document: { type: "DOCUMENT"; children: ({ type: "CANVAS"; children: ({ ...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetFileInput = Parameters<typeof figma.getFile> extends [infer T, ...unknown[]] ? T : undefined;
type GetFileOutput = Awaited<ReturnType<typeof figma.getFile>>;

const input: GetFileInput = {} as { file_key: string; version?: string; ids?: string; depth?: number; geometry?: string; plugin_data?: string; branch_data?: boolean };
const result: GetFileOutput = await figma.getFile(input);

// Result shape (from schema): { name: string; role: "owner" | "editor" | "viewer"; lastModified: string; editorType: "figma" | "figjam"; thumbnailUrl?: string; version: string; document: { type: "DOCUMENT"; children: ({ type: "CANVAS"; children: ({ ...
```

### `figma.getImageFills`

- **HTTP**: `GET /v1/files/{file_key}/images`
- **What it does**: Get image fills
- **OpenAPI operationId**: `getImageFills`
- **Path params**: `file_key`
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ error: false; status: 200; meta: { images: { [key: string]: string | undefined } } }`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetImageFillsInput = Parameters<typeof figma.getImageFills> extends [infer T, ...unknown[]] ? T : undefined;
type GetImageFillsOutput = Awaited<ReturnType<typeof figma.getImageFills>>;

const input: GetImageFillsInput = {} as { file_key: string };
const result: GetImageFillsOutput = await figma.getImageFills(input);

// Result shape (from schema): { error: false; status: 200; meta: { images: { [key: string]: string | undefined } } }
```

### `figma.getFileMeta`

- **HTTP**: `GET /v1/files/{file_key}/meta`
- **What it does**: Get file metadata
- **OpenAPI operationId**: `getFileMeta`
- **Path params**: `file_key`
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; folder_name?: string; last_touched_at: string; creator: { id: string; handle: string; img_url: string }; last_touched_by?: { id: string; handle: string; img_url: string }; thumbnail_url?: string; editorT...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetFileMetaInput = Parameters<typeof figma.getFileMeta> extends [infer T, ...unknown[]] ? T : undefined;
type GetFileMetaOutput = Awaited<ReturnType<typeof figma.getFileMeta>>;

const input: GetFileMetaInput = {} as { file_key: string };
const result: GetFileMetaOutput = await figma.getFileMeta(input);

// Result shape (from schema): { name: string; folder_name?: string; last_touched_at: string; creator: { id: string; handle: string; img_url: string }; last_touched_by?: { id: string; handle: string; img_url: string }; thumbnail_url?: string; editorT...
```

### `figma.getFileNodes`

- **HTTP**: `GET /v1/files/{file_key}/nodes`
- **What it does**: Get file JSON for specific nodes
- **OpenAPI operationId**: `getFileNodes`
- **Path params**: `file_key`
- **Query params**: `ids`, `version`, `depth`, `geometry`, `plugin_data`
- **Response codes**: `200`, `400`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; ids: string; version?: string; depth?: number; geometry?: string; plugin_data?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; role: "owner" | "editor" | "viewer"; lastModified: string; editorType: "figma" | "figjam"; thumbnailUrl: string; version: string; nodes: { [key: string]: { document: { type: "BOOLEAN_OPERATION"; booleanO...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetFileNodesInput = Parameters<typeof figma.getFileNodes> extends [infer T, ...unknown[]] ? T : undefined;
type GetFileNodesOutput = Awaited<ReturnType<typeof figma.getFileNodes>>;

const input: GetFileNodesInput = {} as { file_key: string; ids: string; version?: string; depth?: number; geometry?: string; plugin_data?: string };
const result: GetFileNodesOutput = await figma.getFileNodes(input);

// Result shape (from schema): { name: string; role: "owner" | "editor" | "viewer"; lastModified: string; editorType: "figma" | "figjam"; thumbnailUrl: string; version: string; nodes: { [key: string]: { document: { type: "BOOLEAN_OPERATION"; booleanO...
```

### `figma.getFileVersions`

- **HTTP**: `GET /v1/files/{file_key}/versions`
- **What it does**: Get versions of a file
- **OpenAPI operationId**: `getFileVersions`
- **Path params**: `file_key`
- **Query params**: `page_size`, `before`, `after`
- **Response codes**: `200`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; page_size?: number; before?: number; after?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ versions: ({ id: string; created_at: string; label: string | null; description: string | null; user: { id: string; handle: string; img_url: string }; thumbnail_url?: string })[]; pagination: { prev_page?: string; next...`
- OpenAPI response codes: `200`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetFileVersionsInput = Parameters<typeof figma.getFileVersions> extends [infer T, ...unknown[]] ? T : undefined;
type GetFileVersionsOutput = Awaited<ReturnType<typeof figma.getFileVersions>>;

const input: GetFileVersionsInput = {} as { file_key: string; page_size?: number; before?: number; after?: number };
const result: GetFileVersionsOutput = await figma.getFileVersions(input);

// Result shape (from schema): { versions: ({ id: string; created_at: string; label: string | null; description: string | null; user: { id: string; handle: string; img_url: string }; thumbnail_url?: string })[]; pagination: { prev_page?: string; next...
```

### `figma.getImages`

- **HTTP**: `GET /v1/images/{file_key}`
- **What it does**: Render images of file nodes
- **OpenAPI operationId**: `getImages`
- **Path params**: `file_key`
- **Query params**: `ids`, `version`, `scale`, `format`, `svg_outline_text`, `svg_include_id`, `svg_include_node_id`, `svg_simplify_stroke`, `contents_only`, `use_absolute_bounds`
- **Response codes**: `200`, `400`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; ids: string; version?: string; scale?: number; format?: "jpg" | "png" | "svg" | "pdf"; svg_outline_text?: boolean; svg_include_id?: boolean; svg_include_node_id?: boolean; svg_simplify_stroke?: boolean; contents_only?: boolean; use_absolute_bounds?: boolean }`
- Client transport options: None

**Outputs**

- Client return type: `{ err: null; images: { [key: string]: string | null | undefined } }`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetImagesInput = Parameters<typeof figma.getImages> extends [infer T, ...unknown[]] ? T : undefined;
type GetImagesOutput = Awaited<ReturnType<typeof figma.getImages>>;

const input: GetImagesInput = {} as { file_key: string; ids: string; version?: string; scale?: number; format?: "jpg" | "png" | "svg" | "pdf"; svg_outline_text?: boolean; svg_include_id?: boolean; svg_include_node_id?: boolean; svg_simplify_stroke?: boolean; contents_only?: boolean; use_absolute_bounds?: boolean };
const result: GetImagesOutput = await figma.getImages(input);

// Result shape (from schema): { err: null; images: { [key: string]: string | null | undefined } }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
