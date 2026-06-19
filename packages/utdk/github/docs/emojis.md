# Emojis

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.emojis.get`

- **HTTP**: `GET /emojis`
- **What it does**: Get emojis
- **OpenAPI operationId**: `emojis/get`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ [key: string]: unknown }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `304`

```ts
import github from "@utdk/github";

type EmojisGetInput = Parameters<typeof github.emojis.get> extends [infer T, ...unknown[]] ? T : undefined;
type EmojisGetOutput = Awaited<ReturnType<typeof github.emojis.get>>;

const result: EmojisGetOutput = await github.emojis.get();

// Result shape (from schema): { [key: string]: unknown }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
