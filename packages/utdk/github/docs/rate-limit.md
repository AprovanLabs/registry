# Rate Limit

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.rateLimit.get`

- **HTTP**: `GET /rate_limit`
- **What it does**: Get rate limit status for the authenticated user
- **OpenAPI operationId**: `rate-limit/get`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ [key: string]: unknown }`
- Client transport options: None

**Outputs**

- Client return type: `{ resources: { core: { limit: number; remaining: number; reset: number; used: number }; graphql?: { limit: number; remaining: number; reset: number; used: number }; search: unknown; code_search?: unknown; source_import?...`
- OpenAPI response codes: `200`, `304`, `404`

```ts
import github from "@utdk/github";

type RateLimitGetInput = Parameters<typeof github.rateLimit.get> extends [infer T, ...unknown[]] ? T : undefined;
type RateLimitGetOutput = Awaited<ReturnType<typeof github.rateLimit.get>>;

const result: RateLimitGetOutput = await github.rateLimit.get();

// Result shape (from schema): { resources: { core: { limit: number; remaining: number; reset: number; used: number }; graphql?: { limit: number; remaining: number; reset: number; used: number }; search: unknown; code_search?: unknown; source_import?...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
