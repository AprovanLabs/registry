# Component Sets

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/figma`

## Operations

### `figma.getComponentSet`

- **HTTP**: `GET /v1/component_sets/{key}`
- **What it does**: Get component set
- **OpenAPI operationId**: `getComponentSet`
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

type GetComponentSetInput = Parameters<typeof figma.getComponentSet> extends [infer T, ...unknown[]] ? T : undefined;
type GetComponentSetOutput = Awaited<ReturnType<typeof figma.getComponentSet>>;

const input: GetComponentSetInput = {} as { key: string };
const result: GetComponentSetOutput = await figma.getComponentSet(input);

// Result shape (from schema): { status: 200; error: false; meta: { key: string; file_key: string; node_id: string; thumbnail_url?: string; name: string; description: string; created_at: string; updated_at: string; user: { id: string; handle: string;...
```

### `figma.getFileComponentSets`

- **HTTP**: `GET /v1/files/{file_key}/component_sets`
- **What it does**: Get file component sets
- **OpenAPI operationId**: `getFileComponentSets`
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

- Client return type: `{ status: 200; error: false; meta: { component_sets: ({ key: string; file_key: string; node_id: string; thumbnail_url?: string; name: string; description: string; created_at: string; updated_at: string; user: { id: stri...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetFileComponentSetsInput = Parameters<typeof figma.getFileComponentSets> extends [infer T, ...unknown[]] ? T : undefined;
type GetFileComponentSetsOutput = Awaited<ReturnType<typeof figma.getFileComponentSets>>;

const input: GetFileComponentSetsInput = {} as { file_key: string };
const result: GetFileComponentSetsOutput = await figma.getFileComponentSets(input);

// Result shape (from schema): { status: 200; error: false; meta: { component_sets: ({ key: string; file_key: string; node_id: string; thumbnail_url?: string; name: string; description: string; created_at: string; updated_at: string; user: { id: stri...
```

### `figma.getTeamComponentSets`

- **HTTP**: `GET /v1/teams/{team_id}/component_sets`
- **What it does**: Get team component sets
- **OpenAPI operationId**: `getTeamComponentSets`
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

- Client return type: `{ status: 200; error: false; meta: { component_sets: ({ key: string; file_key: string; node_id: string; thumbnail_url?: string; name: string; description: string; created_at: string; updated_at: string; user: { id: stri...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetTeamComponentSetsInput = Parameters<typeof figma.getTeamComponentSets> extends [infer T, ...unknown[]] ? T : undefined;
type GetTeamComponentSetsOutput = Awaited<ReturnType<typeof figma.getTeamComponentSets>>;

const input: GetTeamComponentSetsInput = {} as { team_id: string; page_size?: number; after?: number; before?: number };
const result: GetTeamComponentSetsOutput = await figma.getTeamComponentSets(input);

// Result shape (from schema): { status: 200; error: false; meta: { component_sets: ({ key: string; file_key: string; node_id: string; thumbnail_url?: string; name: string; description: string; created_at: string; updated_at: string; user: { id: stri...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
