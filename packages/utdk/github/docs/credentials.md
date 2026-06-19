# Credentials

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.credentials.revoke`

- **HTTP**: `POST /credentials/revoke`
- **What it does**: Revoke a list of credentials
- **OpenAPI operationId**: `credentials/revoke`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ credentials: (string)[] }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `422`, `500`

```ts
import github from "@utdk/github";

type CredentialsRevokeInput = Parameters<typeof github.credentials.revoke> extends [infer T, ...unknown[]] ? T : undefined;
type CredentialsRevokeOutput = Awaited<ReturnType<typeof github.credentials.revoke>>;

const input: CredentialsRevokeInput = {} as { credentials: (string)[] };
const result: CredentialsRevokeOutput = await github.credentials.revoke(input);

// Result shape (from schema): unknown
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
