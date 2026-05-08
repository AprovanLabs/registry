# Dev Resources

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/figma`

## Operations

### `figma.postDevResources`

- **HTTP**: `POST /v1/dev_resources`
- **What it does**: Create dev resources
- **OpenAPI operationId**: `postDevResources`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `401`, `403`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ dev_resources: ({ name: string; url: string; file_key: string; node_id: string })[] }`
- Client transport options: None

**Outputs**

- Client return type: `{ links_created: ({ id: string; name: string; url: string; file_key: string; node_id: string })[]; errors?: ({ file_key?: string | null; node_id?: string | null; error: string })[] }`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `429`, `500`

```ts
import figma from "@utdk/figma";

type PostDevResourcesInput = Parameters<typeof figma.postDevResources> extends [infer T, ...unknown[]] ? T : undefined;
type PostDevResourcesOutput = Awaited<ReturnType<typeof figma.postDevResources>>;

const input: PostDevResourcesInput = {} as { dev_resources: ({ name: string; url: string; file_key: string; node_id: string })[] };
const result: PostDevResourcesOutput = await figma.postDevResources(input);

// Result shape (from schema): { links_created: ({ id: string; name: string; url: string; file_key: string; node_id: string })[]; errors?: ({ file_key?: string | null; node_id?: string | null; error: string })[] }
```

### `figma.putDevResources`

- **HTTP**: `PUT /v1/dev_resources`
- **What it does**: Update dev resources
- **OpenAPI operationId**: `putDevResources`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `401`, `403`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ dev_resources: ({ id: string; name?: string; url?: string })[] }`
- Client transport options: None

**Outputs**

- Client return type: `{ links_updated?: ({ id: string; name: string; url: string; file_key: string; node_id: string })[]; errors?: ({ id?: string; error: string })[] }`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `429`, `500`

```ts
import figma from "@utdk/figma";

type PutDevResourcesInput = Parameters<typeof figma.putDevResources> extends [infer T, ...unknown[]] ? T : undefined;
type PutDevResourcesOutput = Awaited<ReturnType<typeof figma.putDevResources>>;

const input: PutDevResourcesInput = {} as { dev_resources: ({ id: string; name?: string; url?: string })[] };
const result: PutDevResourcesOutput = await figma.putDevResources(input);

// Result shape (from schema): { links_updated?: ({ id: string; name: string; url: string; file_key: string; node_id: string })[]; errors?: ({ id?: string; error: string })[] }
```

### `figma.getDevResources`

- **HTTP**: `GET /v1/files/{file_key}/dev_resources`
- **What it does**: Get dev resources
- **OpenAPI operationId**: `getDevResources`
- **Path params**: `file_key`
- **Query params**: `node_ids`
- **Response codes**: `200`, `400`, `401`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; node_ids?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ dev_resources: ({ id: string; name: string; url: string; file_key: string; node_id: string })[] }`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetDevResourcesInput = Parameters<typeof figma.getDevResources> extends [infer T, ...unknown[]] ? T : undefined;
type GetDevResourcesOutput = Awaited<ReturnType<typeof figma.getDevResources>>;

const input: GetDevResourcesInput = {} as { file_key: string; node_ids?: string };
const result: GetDevResourcesOutput = await figma.getDevResources(input);

// Result shape (from schema): { dev_resources: ({ id: string; name: string; url: string; file_key: string; node_id: string })[] }
```

### `figma.deleteDevResource`

- **HTTP**: `DELETE /v1/files/{file_key}/dev_resources/{dev_resource_id}`
- **What it does**: Delete dev resource
- **OpenAPI operationId**: `deleteDevResource`
- **Path params**: `file_key`, `dev_resource_id`
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ file_key: string; dev_resource_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `429`, `500`

```ts
import figma from "@utdk/figma";

type DeleteDevResourceInput = Parameters<typeof figma.deleteDevResource> extends [infer T, ...unknown[]] ? T : undefined;
type DeleteDevResourceOutput = Awaited<ReturnType<typeof figma.deleteDevResource>>;

const input: DeleteDevResourceInput = {} as { file_key: string; dev_resource_id: string };
const result: DeleteDevResourceOutput = await figma.deleteDevResource(input);

// Result shape (from schema): unknown
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
