# Licenses

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.licenses.getAllCommonlyUsed`

- **HTTP**: `GET /licenses`
- **What it does**: Get all commonly used licenses
- **OpenAPI operationId**: `licenses/get-all-commonly-used`
- **Path params**: None
- **Query params**: `featured`
- **Response codes**: `200`, `304`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ featured?: boolean; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: string })[]`
- OpenAPI response codes: `200`, `304`

```ts
import github from "@utdk/github";

type LicensesGetAllCommonlyUsedInput = Parameters<typeof github.licenses.getAllCommonlyUsed> extends [infer T, ...unknown[]] ? T : undefined;
type LicensesGetAllCommonlyUsedOutput = Awaited<ReturnType<typeof github.licenses.getAllCommonlyUsed>>;

const input: LicensesGetAllCommonlyUsedInput = {} as { featured?: boolean; per_page?: number; page?: number };
const result: LicensesGetAllCommonlyUsedOutput = await github.licenses.getAllCommonlyUsed(input);

// Result shape (from schema): ({ key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: string })[]
```

### `github.licenses.get`

- **HTTP**: `GET /licenses/{license}`
- **What it does**: Get a license
- **OpenAPI operationId**: `licenses/get`
- **Path params**: `license`
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ license: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ key: string; name: string; spdx_id: string | null; url: string | null; node_id: string; html_url: string; description: string; implementation: string; permissions: (string)[]; conditions: (string)[]; limitations: (str...`
- OpenAPI response codes: `200`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type LicensesGetInput = Parameters<typeof github.licenses.get> extends [infer T, ...unknown[]] ? T : undefined;
type LicensesGetOutput = Awaited<ReturnType<typeof github.licenses.get>>;

const input: LicensesGetInput = {} as { license: string };
const result: LicensesGetOutput = await github.licenses.get(input);

// Result shape (from schema): { key: string; name: string; spdx_id: string | null; url: string | null; node_id: string; html_url: string; description: string; implementation: string; permissions: (string)[]; conditions: (string)[]; limitations: (str...
```

### `github.licenses.getForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/license`
- **What it does**: Get the license for a repository
- **OpenAPI operationId**: `licenses/get-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; path: string; sha: string; size: number; url: string; html_url: string | null; git_url: string | null; download_url: string | null; type: string; content: string; encoding: string; _links: { git: string ...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type LicensesGetForRepoInput = Parameters<typeof github.licenses.getForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type LicensesGetForRepoOutput = Awaited<ReturnType<typeof github.licenses.getForRepo>>;

const input: LicensesGetForRepoInput = {} as { owner: string; repo: string; ref?: string };
const result: LicensesGetForRepoOutput = await github.licenses.getForRepo(input);

// Result shape (from schema): { name: string; path: string; sha: string; size: number; url: string; html_url: string | null; git_url: string | null; download_url: string | null; type: string; content: string; encoding: string; _links: { git: string ...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
