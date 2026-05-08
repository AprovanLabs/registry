# Styles

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/figma`

## Operations

### `figma.getFileStyles`

- **HTTP**: `GET /v1/files/{file_key}/styles`
- **What it does**: Get file styles
- **OpenAPI operationId**: `getFileStyles`
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

- Client return type: `{ status: 200; error: false; meta: { styles: ({ key: string; file_key: string; node_id: string; style_type: "FILL" | "TEXT" | "EFFECT" | "GRID"; thumbnail_url?: string; name: string; description: string; created_at: str...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetFileStylesInput = Parameters<typeof figma.getFileStyles> extends [infer T, ...unknown[]] ? T : undefined;
type GetFileStylesOutput = Awaited<ReturnType<typeof figma.getFileStyles>>;

const input: GetFileStylesInput = {} as { file_key: string };
const result: GetFileStylesOutput = await figma.getFileStyles(input);

// Result shape (from schema): { status: 200; error: false; meta: { styles: ({ key: string; file_key: string; node_id: string; style_type: "FILL" | "TEXT" | "EFFECT" | "GRID"; thumbnail_url?: string; name: string; description: string; created_at: str...
```

### `figma.getStyle`

- **HTTP**: `GET /v1/styles/{key}`
- **What it does**: Get style
- **OpenAPI operationId**: `getStyle`
- **Path params**: `key`
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ key: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ status: 200; error: false; meta: { key: string; file_key: string; node_id: string; style_type: "FILL" | "TEXT" | "EFFECT" | "GRID"; thumbnail_url?: string; name: string; description: string; created_at: string; update...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetStyleInput = Parameters<typeof figma.getStyle> extends [infer T, ...unknown[]] ? T : undefined;
type GetStyleOutput = Awaited<ReturnType<typeof figma.getStyle>>;

const input: GetStyleInput = {} as { key: string };
const result: GetStyleOutput = await figma.getStyle(input);

// Result shape (from schema): { status: 200; error: false; meta: { key: string; file_key: string; node_id: string; style_type: "FILL" | "TEXT" | "EFFECT" | "GRID"; thumbnail_url?: string; name: string; description: string; created_at: string; update...
```

### `figma.getTeamStyles`

- **HTTP**: `GET /v1/teams/{team_id}/styles`
- **What it does**: Get team styles
- **OpenAPI operationId**: `getTeamStyles`
- **Path params**: `team_id`
- **Query params**: `page_size`, `after`, `before`
- **Response codes**: `200`, `400`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ team_id: string; page_size?: number; after?: number; before?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ status: 200; error: false; meta: { styles: ({ key: string; file_key: string; node_id: string; style_type: "FILL" | "TEXT" | "EFFECT" | "GRID"; thumbnail_url?: string; name: string; description: string; created_at: str...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetTeamStylesInput = Parameters<typeof figma.getTeamStyles> extends [infer T, ...unknown[]] ? T : undefined;
type GetTeamStylesOutput = Awaited<ReturnType<typeof figma.getTeamStyles>>;

const input: GetTeamStylesInput = {} as { team_id: string; page_size?: number; after?: number; before?: number };
const result: GetTeamStylesOutput = await figma.getTeamStyles(input);

// Result shape (from schema): { status: 200; error: false; meta: { styles: ({ key: string; file_key: string; node_id: string; style_type: "FILL" | "TEXT" | "EFFECT" | "GRID"; thumbnail_url?: string; name: string; description: string; created_at: str...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
