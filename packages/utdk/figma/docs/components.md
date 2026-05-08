# Components

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/figma`

## Operations

### `figma.getComponent`

- **HTTP**: `GET /v1/components/{key}`
- **What it does**: Get component
- **OpenAPI operationId**: `getComponent`
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

- Client return type: `{ status: 200; error: false; meta: { key: string; file_key: string; node_id: string; thumbnail_url?: string; name: string; description: string; created_at: string; updated_at: string; user: { id: string; handle: string;...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetComponentInput = Parameters<typeof figma.getComponent> extends [infer T, ...unknown[]] ? T : undefined;
type GetComponentOutput = Awaited<ReturnType<typeof figma.getComponent>>;

const input: GetComponentInput = {} as { key: string };
const result: GetComponentOutput = await figma.getComponent(input);

// Result shape (from schema): { status: 200; error: false; meta: { key: string; file_key: string; node_id: string; thumbnail_url?: string; name: string; description: string; created_at: string; updated_at: string; user: { id: string; handle: string;...
```

### `figma.getFileComponents`

- **HTTP**: `GET /v1/files/{file_key}/components`
- **What it does**: Get file components
- **OpenAPI operationId**: `getFileComponents`
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

- Client return type: `{ status: 200; error: false; meta: { components: ({ key: string; file_key: string; node_id: string; thumbnail_url?: string; name: string; description: string; created_at: string; updated_at: string; user: { id: string; ...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetFileComponentsInput = Parameters<typeof figma.getFileComponents> extends [infer T, ...unknown[]] ? T : undefined;
type GetFileComponentsOutput = Awaited<ReturnType<typeof figma.getFileComponents>>;

const input: GetFileComponentsInput = {} as { file_key: string };
const result: GetFileComponentsOutput = await figma.getFileComponents(input);

// Result shape (from schema): { status: 200; error: false; meta: { components: ({ key: string; file_key: string; node_id: string; thumbnail_url?: string; name: string; description: string; created_at: string; updated_at: string; user: { id: string; ...
```

### `figma.getTeamComponents`

- **HTTP**: `GET /v1/teams/{team_id}/components`
- **What it does**: Get team components
- **OpenAPI operationId**: `getTeamComponents`
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

- Client return type: `{ status: 200; error: false; meta: { components: ({ key: string; file_key: string; node_id: string; thumbnail_url?: string; name: string; description: string; created_at: string; updated_at: string; user: { id: string; ...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetTeamComponentsInput = Parameters<typeof figma.getTeamComponents> extends [infer T, ...unknown[]] ? T : undefined;
type GetTeamComponentsOutput = Awaited<ReturnType<typeof figma.getTeamComponents>>;

const input: GetTeamComponentsInput = {} as { team_id: string; page_size?: number; after?: number; before?: number };
const result: GetTeamComponentsOutput = await figma.getTeamComponents(input);

// Result shape (from schema): { status: 200; error: false; meta: { components: ({ key: string; file_key: string; node_id: string; thumbnail_url?: string; name: string; description: string; created_at: string; updated_at: string; user: { id: string; ...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
