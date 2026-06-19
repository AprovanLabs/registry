# Codes Of Conduct

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.codesOfConduct.getAllCodesOfConduct`

- **HTTP**: `GET /codes_of_conduct`
- **What it does**: Get all codes of conduct
- **OpenAPI operationId**: `codes-of-conduct/get-all-codes-of-conduct`
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

- Client return type: `({ key: string; name: string; url: string; body?: string; html_url: string | null })[]`
- OpenAPI response codes: `200`, `304`

```ts
import github from "@utdk/github";

type CodesOfConductGetAllCodesOfConductInput = Parameters<typeof github.codesOfConduct.getAllCodesOfConduct> extends [infer T, ...unknown[]] ? T : undefined;
type CodesOfConductGetAllCodesOfConductOutput = Awaited<ReturnType<typeof github.codesOfConduct.getAllCodesOfConduct>>;

const result: CodesOfConductGetAllCodesOfConductOutput = await github.codesOfConduct.getAllCodesOfConduct();

// Result shape (from schema): ({ key: string; name: string; url: string; body?: string; html_url: string | null })[]
```

### `github.codesOfConduct.getConductCode`

- **HTTP**: `GET /codes_of_conduct/{key}`
- **What it does**: Get a code of conduct
- **OpenAPI operationId**: `codes-of-conduct/get-conduct-code`
- **Path params**: `key`
- **Query params**: None
- **Response codes**: `200`, `304`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ key: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ key: string; name: string; url: string; body?: string; html_url: string | null }`
- OpenAPI response codes: `200`, `304`, `404`

```ts
import github from "@utdk/github";

type CodesOfConductGetConductCodeInput = Parameters<typeof github.codesOfConduct.getConductCode> extends [infer T, ...unknown[]] ? T : undefined;
type CodesOfConductGetConductCodeOutput = Awaited<ReturnType<typeof github.codesOfConduct.getConductCode>>;

const input: CodesOfConductGetConductCodeInput = {} as { key: string };
const result: CodesOfConductGetConductCodeOutput = await github.codesOfConduct.getConductCode(input);

// Result shape (from schema): { key: string; name: string; url: string; body?: string; html_url: string | null }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
