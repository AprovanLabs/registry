# Users

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/figma`

## Operations

### `figma.getMe`

- **HTTP**: `GET /v1/me`
- **What it does**: Get current user
- **OpenAPI operationId**: `getMe`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `429`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://www.figma.com/developers/api)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ [key: string]: unknown }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `403`, `429`, `500`

```ts
import figma from "@utdk/figma";

type GetMeInput = Parameters<typeof figma.getMe> extends [infer T, ...unknown[]] ? T : undefined;
type GetMeOutput = Awaited<ReturnType<typeof figma.getMe>>;

const result: GetMeOutput = await figma.getMe();

// Result shape (from schema): { [key: string]: unknown }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
