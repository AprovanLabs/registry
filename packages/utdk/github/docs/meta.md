# Meta

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.meta.root`

- **HTTP**: `GET /`
- **What it does**: GitHub API Root
- **OpenAPI operationId**: `meta/root`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ [key: string]: unknown }`
- Client transport options: None

**Outputs**

- Client return type: `{ current_user_url: string; current_user_authorizations_html_url: string; authorizations_url: string; code_search_url: string; commit_search_url: string; emails_url: string; emojis_url: string; events_url: string; feeds...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type MetaRootInput = Parameters<typeof github.meta.root> extends [infer T, ...unknown[]] ? T : undefined;
type MetaRootOutput = Awaited<ReturnType<typeof github.meta.root>>;

const result: MetaRootOutput = await github.meta.root();

// Result shape (from schema): { current_user_url: string; current_user_authorizations_html_url: string; authorizations_url: string; code_search_url: string; commit_search_url: string; emails_url: string; emojis_url: string; events_url: string; feeds...
```

### `github.meta.get`

- **HTTP**: `GET /meta`
- **What it does**: Get GitHub meta information
- **OpenAPI operationId**: `meta/get`
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

- Client return type: `{ verifiable_password_authentication: boolean; ssh_key_fingerprints?: { SHA256_RSA?: string; SHA256_DSA?: string; SHA256_ECDSA?: string; SHA256_ED25519?: string }; ssh_keys?: (string)[]; hooks?: (string)[]; github_enter...`
- OpenAPI response codes: `200`, `304`

```ts
import github from "@utdk/github";

type MetaGetInput = Parameters<typeof github.meta.get> extends [infer T, ...unknown[]] ? T : undefined;
type MetaGetOutput = Awaited<ReturnType<typeof github.meta.get>>;

const result: MetaGetOutput = await github.meta.get();

// Result shape (from schema): { verifiable_password_authentication: boolean; ssh_key_fingerprints?: { SHA256_RSA?: string; SHA256_DSA?: string; SHA256_ECDSA?: string; SHA256_ED25519?: string }; ssh_keys?: (string)[]; hooks?: (string)[]; github_enter...
```

### `github.meta.getOctocat`

- **HTTP**: `GET /octocat`
- **What it does**: Get Octocat
- **OpenAPI operationId**: `meta/get-octocat`
- **Path params**: None
- **Query params**: `s`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ s?: string }`
- Client transport options: None

**Outputs**

- Client return type: `string`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type MetaGetOctocatInput = Parameters<typeof github.meta.getOctocat> extends [infer T, ...unknown[]] ? T : undefined;
type MetaGetOctocatOutput = Awaited<ReturnType<typeof github.meta.getOctocat>>;

const input: MetaGetOctocatInput = {} as { s?: string };
const result: MetaGetOctocatOutput = await github.meta.getOctocat(input);

// Result shape (from schema): string
```

### `github.meta.getAllVersions`

- **HTTP**: `GET /versions`
- **What it does**: Get all API versions
- **OpenAPI operationId**: `meta/get-all-versions`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ [key: string]: unknown }`
- Client transport options: None

**Outputs**

- Client return type: `(string)[]`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type MetaGetAllVersionsInput = Parameters<typeof github.meta.getAllVersions> extends [infer T, ...unknown[]] ? T : undefined;
type MetaGetAllVersionsOutput = Awaited<ReturnType<typeof github.meta.getAllVersions>>;

const result: MetaGetAllVersionsOutput = await github.meta.getAllVersions();

// Result shape (from schema): (string)[]
```

### `github.meta.getZen`

- **HTTP**: `GET /zen`
- **What it does**: Get the Zen of GitHub
- **OpenAPI operationId**: `meta/get-zen`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ [key: string]: unknown }`
- Client transport options: None

**Outputs**

- Client return type: `string`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type MetaGetZenInput = Parameters<typeof github.meta.getZen> extends [infer T, ...unknown[]] ? T : undefined;
type MetaGetZenOutput = Awaited<ReturnType<typeof github.meta.getZen>>;

const result: MetaGetZenOutput = await github.meta.getZen();

// Result shape (from schema): string
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
