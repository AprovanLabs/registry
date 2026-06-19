# Interactions

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.interactions.removeRestrictionsForOrg`

- **HTTP**: `DELETE /orgs/{org}/interaction-limits`
- **What it does**: Remove interaction restrictions for an organization
- **OpenAPI operationId**: `interactions/remove-restrictions-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type InteractionsRemoveRestrictionsForOrgInput = Parameters<typeof github.interactions.removeRestrictionsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type InteractionsRemoveRestrictionsForOrgOutput = Awaited<ReturnType<typeof github.interactions.removeRestrictionsForOrg>>;

const input: InteractionsRemoveRestrictionsForOrgInput = {} as { org: string };
const result: InteractionsRemoveRestrictionsForOrgOutput = await github.interactions.removeRestrictionsForOrg(input);

// Result shape (from schema): unknown
```

### `github.interactions.getRestrictionsForOrg`

- **HTTP**: `GET /orgs/{org}/interaction-limits`
- **What it does**: Get interaction restrictions for an organization
- **OpenAPI operationId**: `interactions/get-restrictions-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type InteractionsGetRestrictionsForOrgInput = Parameters<typeof github.interactions.getRestrictionsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type InteractionsGetRestrictionsForOrgOutput = Awaited<ReturnType<typeof github.interactions.getRestrictionsForOrg>>;

const input: InteractionsGetRestrictionsForOrgInput = {} as { org: string };
const result: InteractionsGetRestrictionsForOrgOutput = await github.interactions.getRestrictionsForOrg(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.interactions.setRestrictionsForOrg`

- **HTTP**: `PUT /orgs/{org}/interaction-limits`
- **What it does**: Set interaction restrictions for an organization
- **OpenAPI operationId**: `interactions/set-restrictions-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ limit: "existing_users" | "contributors_only" | "collaborators_only"; expiry?: "one_day" | "three_days" | "one_week" | "one_month" | "six_months"; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ limit: "existing_users" | "contributors_only" | "collaborators_only"; origin: string; expires_at: string }`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type InteractionsSetRestrictionsForOrgInput = Parameters<typeof github.interactions.setRestrictionsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type InteractionsSetRestrictionsForOrgOutput = Awaited<ReturnType<typeof github.interactions.setRestrictionsForOrg>>;

const input: InteractionsSetRestrictionsForOrgInput = {} as { limit: "existing_users" | "contributors_only" | "collaborators_only"; expiry?: "one_day" | "three_days" | "one_week" | "one_month" | "six_months"; org: string };
const result: InteractionsSetRestrictionsForOrgOutput = await github.interactions.setRestrictionsForOrg(input);

// Result shape (from schema): { limit: "existing_users" | "contributors_only" | "collaborators_only"; origin: string; expires_at: string }
```

### `github.interactions.removeRestrictionsForRepo`

- **HTTP**: `DELETE /repos/{owner}/{repo}/interaction-limits`
- **What it does**: Remove interaction restrictions for a repository
- **OpenAPI operationId**: `interactions/remove-restrictions-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `409`

```ts
import github from "@utdk/github";

type InteractionsRemoveRestrictionsForRepoInput = Parameters<typeof github.interactions.removeRestrictionsForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type InteractionsRemoveRestrictionsForRepoOutput = Awaited<ReturnType<typeof github.interactions.removeRestrictionsForRepo>>;

const input: InteractionsRemoveRestrictionsForRepoInput = {} as { owner: string; repo: string };
const result: InteractionsRemoveRestrictionsForRepoOutput = await github.interactions.removeRestrictionsForRepo(input);

// Result shape (from schema): unknown
```

### `github.interactions.getRestrictionsForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/interaction-limits`
- **What it does**: Get interaction restrictions for a repository
- **OpenAPI operationId**: `interactions/get-restrictions-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type InteractionsGetRestrictionsForRepoInput = Parameters<typeof github.interactions.getRestrictionsForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type InteractionsGetRestrictionsForRepoOutput = Awaited<ReturnType<typeof github.interactions.getRestrictionsForRepo>>;

const input: InteractionsGetRestrictionsForRepoInput = {} as { owner: string; repo: string };
const result: InteractionsGetRestrictionsForRepoOutput = await github.interactions.getRestrictionsForRepo(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.interactions.setRestrictionsForRepo`

- **HTTP**: `PUT /repos/{owner}/{repo}/interaction-limits`
- **What it does**: Set interaction restrictions for a repository
- **OpenAPI operationId**: `interactions/set-restrictions-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ limit: "existing_users" | "contributors_only" | "collaborators_only"; expiry?: "one_day" | "three_days" | "one_week" | "one_month" | "six_months"; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ limit: "existing_users" | "contributors_only" | "collaborators_only"; origin: string; expires_at: string }`
- OpenAPI response codes: `200`, `409`

```ts
import github from "@utdk/github";

type InteractionsSetRestrictionsForRepoInput = Parameters<typeof github.interactions.setRestrictionsForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type InteractionsSetRestrictionsForRepoOutput = Awaited<ReturnType<typeof github.interactions.setRestrictionsForRepo>>;

const input: InteractionsSetRestrictionsForRepoInput = {} as { limit: "existing_users" | "contributors_only" | "collaborators_only"; expiry?: "one_day" | "three_days" | "one_week" | "one_month" | "six_months"; owner: string; repo: string };
const result: InteractionsSetRestrictionsForRepoOutput = await github.interactions.setRestrictionsForRepo(input);

// Result shape (from schema): { limit: "existing_users" | "contributors_only" | "collaborators_only"; origin: string; expires_at: string }
```

### `github.interactions.removeRestrictionsForAuthenticatedUser`

- **HTTP**: `DELETE /user/interaction-limits`
- **What it does**: Remove interaction restrictions from your public repositories
- **OpenAPI operationId**: `interactions/remove-restrictions-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ [key: string]: unknown }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type InteractionsRemoveRestrictionsForAuthenticatedUserInput = Parameters<typeof github.interactions.removeRestrictionsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type InteractionsRemoveRestrictionsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.interactions.removeRestrictionsForAuthenticatedUser>>;

const result: InteractionsRemoveRestrictionsForAuthenticatedUserOutput = await github.interactions.removeRestrictionsForAuthenticatedUser();

// Result shape (from schema): unknown
```

### `github.interactions.getRestrictionsForAuthenticatedUser`

- **HTTP**: `GET /user/interaction-limits`
- **What it does**: Get interaction restrictions for your public repositories
- **OpenAPI operationId**: `interactions/get-restrictions-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ [key: string]: unknown }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `204`

```ts
import github from "@utdk/github";

type InteractionsGetRestrictionsForAuthenticatedUserInput = Parameters<typeof github.interactions.getRestrictionsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type InteractionsGetRestrictionsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.interactions.getRestrictionsForAuthenticatedUser>>;

const result: InteractionsGetRestrictionsForAuthenticatedUserOutput = await github.interactions.getRestrictionsForAuthenticatedUser();

// Result shape (from schema): { [key: string]: unknown }
```

### `github.interactions.setRestrictionsForAuthenticatedUser`

- **HTTP**: `PUT /user/interaction-limits`
- **What it does**: Set interaction restrictions for your public repositories
- **OpenAPI operationId**: `interactions/set-restrictions-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ limit: "existing_users" | "contributors_only" | "collaborators_only"; expiry?: "one_day" | "three_days" | "one_week" | "one_month" | "six_months" }`
- Client transport options: None

**Outputs**

- Client return type: `{ limit: "existing_users" | "contributors_only" | "collaborators_only"; origin: string; expires_at: string }`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type InteractionsSetRestrictionsForAuthenticatedUserInput = Parameters<typeof github.interactions.setRestrictionsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type InteractionsSetRestrictionsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.interactions.setRestrictionsForAuthenticatedUser>>;

const input: InteractionsSetRestrictionsForAuthenticatedUserInput = {} as { limit: "existing_users" | "contributors_only" | "collaborators_only"; expiry?: "one_day" | "three_days" | "one_week" | "one_month" | "six_months" };
const result: InteractionsSetRestrictionsForAuthenticatedUserOutput = await github.interactions.setRestrictionsForAuthenticatedUser(input);

// Result shape (from schema): { limit: "existing_users" | "contributors_only" | "collaborators_only"; origin: string; expires_at: string }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
