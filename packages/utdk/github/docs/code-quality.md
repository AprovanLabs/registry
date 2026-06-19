# Code Quality

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.codeQuality.getSetup`

- **HTTP**: `GET /repos/{owner}/{repo}/code-quality/setup`
- **What it does**: Get a code quality setup configuration
- **OpenAPI operationId**: `code-quality/get-setup`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ state?: "configured" | "not-configured"; languages?: ("csharp" | "go" | "java-kotlin" | "javascript-typescript" | "python" | "ruby" | "rust")[]; runner_type?: "standard" | "labeled" | null; runner_label?: string | nul...`
- OpenAPI response codes: `200`, `403`, `404`, `503`

```ts
import github from "@utdk/github";

type CodeQualityGetSetupInput = Parameters<typeof github.codeQuality.getSetup> extends [infer T, ...unknown[]] ? T : undefined;
type CodeQualityGetSetupOutput = Awaited<ReturnType<typeof github.codeQuality.getSetup>>;

const input: CodeQualityGetSetupInput = {} as { owner: string; repo: string };
const result: CodeQualityGetSetupOutput = await github.codeQuality.getSetup(input);

// Result shape (from schema): { state?: "configured" | "not-configured"; languages?: ("csharp" | "go" | "java-kotlin" | "javascript-typescript" | "python" | "ruby" | "rust")[]; runner_type?: "standard" | "labeled" | null; runner_label?: string | nul...
```

### `github.codeQuality.updateSetup`

- **HTTP**: `PATCH /repos/{owner}/{repo}/code-quality/setup`
- **What it does**: Update a code quality setup configuration
- **OpenAPI operationId**: `code-quality/update-setup`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `202`, `403`, `404`, `409`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: unknown | unknown | unknown | unknown; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `202`, `403`, `404`, `409`, `422`, `503`

```ts
import github from "@utdk/github";

type CodeQualityUpdateSetupInput = Parameters<typeof github.codeQuality.updateSetup> extends [infer T, ...unknown[]] ? T : undefined;
type CodeQualityUpdateSetupOutput = Awaited<ReturnType<typeof github.codeQuality.updateSetup>>;

const input: CodeQualityUpdateSetupInput = {} as { body: unknown | unknown | unknown | unknown; owner: string; repo: string };
const result: CodeQualityUpdateSetupOutput = await github.codeQuality.updateSetup(input);

// Result shape (from schema): { [key: string]: unknown }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
