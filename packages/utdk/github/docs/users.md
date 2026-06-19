# Users

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.users.getAuthenticated`

- **HTTP**: `GET /user`
- **What it does**: Get the authenticated user
- **OpenAPI operationId**: `users/get-authenticated`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ [key: string]: unknown }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type UsersGetAuthenticatedInput = Parameters<typeof github.users.getAuthenticated> extends [infer T, ...unknown[]] ? T : undefined;
type UsersGetAuthenticatedOutput = Awaited<ReturnType<typeof github.users.getAuthenticated>>;

const result: UsersGetAuthenticatedOutput = await github.users.getAuthenticated();

// Result shape (from schema): { [key: string]: unknown }
```

### `github.users.updateAuthenticated`

- **HTTP**: `PATCH /user`
- **What it does**: Update the authenticated user
- **OpenAPI operationId**: `users/update-authenticated`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; email?: string; blog?: string; twitter_username?: string | null; company?: string; location?: string; hireable?: boolean; bio?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ login: string; id: number; user_view_type?: string; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gists_url: string; star...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type UsersUpdateAuthenticatedInput = Parameters<typeof github.users.updateAuthenticated> extends [infer T, ...unknown[]] ? T : undefined;
type UsersUpdateAuthenticatedOutput = Awaited<ReturnType<typeof github.users.updateAuthenticated>>;

const input: UsersUpdateAuthenticatedInput = {} as { name?: string; email?: string; blog?: string; twitter_username?: string | null; company?: string; location?: string; hireable?: boolean; bio?: string };
const result: UsersUpdateAuthenticatedOutput = await github.users.updateAuthenticated(input);

// Result shape (from schema): { login: string; id: number; user_view_type?: string; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gists_url: string; star...
```

### `github.users.getById`

- **HTTP**: `GET /user/{account_id}`
- **What it does**: Get a user using their ID
- **OpenAPI operationId**: `users/get-by-id`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ account_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type UsersGetByIdInput = Parameters<typeof github.users.getById> extends [infer T, ...unknown[]] ? T : undefined;
type UsersGetByIdOutput = Awaited<ReturnType<typeof github.users.getById>>;

const input: UsersGetByIdInput = {} as { account_id: number };
const result: UsersGetByIdOutput = await github.users.getById(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.users.listBlockedByAuthenticatedUser`

- **HTTP**: `GET /user/blocks`
- **What it does**: List users blocked by the authenticated user
- **OpenAPI operationId**: `users/list-blocked-by-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersListBlockedByAuthenticatedUserInput = Parameters<typeof github.users.listBlockedByAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListBlockedByAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.listBlockedByAuthenticatedUser>>;

const input: UsersListBlockedByAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: UsersListBlockedByAuthenticatedUserOutput = await github.users.listBlockedByAuthenticatedUser(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.users.unblock`

- **HTTP**: `DELETE /user/blocks/{username}`
- **What it does**: Unblock a user
- **OpenAPI operationId**: `users/unblock`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersUnblockInput = Parameters<typeof github.users.unblock> extends [infer T, ...unknown[]] ? T : undefined;
type UsersUnblockOutput = Awaited<ReturnType<typeof github.users.unblock>>;

const input: UsersUnblockInput = {} as { username: string };
const result: UsersUnblockOutput = await github.users.unblock(input);

// Result shape (from schema): unknown
```

### `github.users.checkBlocked`

- **HTTP**: `GET /user/blocks/{username}`
- **What it does**: Check if a user is blocked by the authenticated user
- **OpenAPI operationId**: `users/check-blocked`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersCheckBlockedInput = Parameters<typeof github.users.checkBlocked> extends [infer T, ...unknown[]] ? T : undefined;
type UsersCheckBlockedOutput = Awaited<ReturnType<typeof github.users.checkBlocked>>;

const input: UsersCheckBlockedInput = {} as { username: string };
const result: UsersCheckBlockedOutput = await github.users.checkBlocked(input);

// Result shape (from schema): unknown
```

### `github.users.block`

- **HTTP**: `PUT /user/blocks/{username}`
- **What it does**: Block a user
- **OpenAPI operationId**: `users/block`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type UsersBlockInput = Parameters<typeof github.users.block> extends [infer T, ...unknown[]] ? T : undefined;
type UsersBlockOutput = Awaited<ReturnType<typeof github.users.block>>;

const input: UsersBlockInput = {} as { username: string };
const result: UsersBlockOutput = await github.users.block(input);

// Result shape (from schema): unknown
```

### `github.users.setPrimaryEmailVisibilityForAuthenticatedUser`

- **HTTP**: `PATCH /user/email/visibility`
- **What it does**: Set primary email visibility for the authenticated user
- **OpenAPI operationId**: `users/set-primary-email-visibility-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ visibility: "public" | "private" }`
- Client transport options: None

**Outputs**

- Client return type: `({ email: string; primary: boolean; verified: boolean; visibility: string | null })[]`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type UsersSetPrimaryEmailVisibilityForAuthenticatedUserInput = Parameters<typeof github.users.setPrimaryEmailVisibilityForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersSetPrimaryEmailVisibilityForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.setPrimaryEmailVisibilityForAuthenticatedUser>>;

const input: UsersSetPrimaryEmailVisibilityForAuthenticatedUserInput = {} as { visibility: "public" | "private" };
const result: UsersSetPrimaryEmailVisibilityForAuthenticatedUserOutput = await github.users.setPrimaryEmailVisibilityForAuthenticatedUser(input);

// Result shape (from schema): ({ email: string; primary: boolean; verified: boolean; visibility: string | null })[]
```

### `github.users.deleteEmailForAuthenticatedUser`

- **HTTP**: `DELETE /user/emails`
- **What it does**: Delete an email address for the authenticated user
- **OpenAPI operationId**: `users/delete-email-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body?: { emails: (string)[] } | (string)[] | string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type UsersDeleteEmailForAuthenticatedUserInput = Parameters<typeof github.users.deleteEmailForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersDeleteEmailForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.deleteEmailForAuthenticatedUser>>;

const input: UsersDeleteEmailForAuthenticatedUserInput = {} as { body?: { emails: (string)[] } | (string)[] | string };
const result: UsersDeleteEmailForAuthenticatedUserOutput = await github.users.deleteEmailForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.users.listEmailsForAuthenticatedUser`

- **HTTP**: `GET /user/emails`
- **What it does**: List email addresses for the authenticated user
- **OpenAPI operationId**: `users/list-emails-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ email: string; primary: boolean; verified: boolean; visibility: string | null })[]`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersListEmailsForAuthenticatedUserInput = Parameters<typeof github.users.listEmailsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListEmailsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.listEmailsForAuthenticatedUser>>;

const input: UsersListEmailsForAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: UsersListEmailsForAuthenticatedUserOutput = await github.users.listEmailsForAuthenticatedUser(input);

// Result shape (from schema): ({ email: string; primary: boolean; verified: boolean; visibility: string | null })[]
```

### `github.users.addEmailForAuthenticatedUser`

- **HTTP**: `POST /user/emails`
- **What it does**: Add an email address for the authenticated user
- **OpenAPI operationId**: `users/add-email-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body?: { emails: (string)[] } | (string)[] | string }`
- Client transport options: None

**Outputs**

- Client return type: `({ email: string; primary: boolean; verified: boolean; visibility: string | null })[]`
- OpenAPI response codes: `201`, `304`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type UsersAddEmailForAuthenticatedUserInput = Parameters<typeof github.users.addEmailForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersAddEmailForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.addEmailForAuthenticatedUser>>;

const input: UsersAddEmailForAuthenticatedUserInput = {} as { body?: { emails: (string)[] } | (string)[] | string };
const result: UsersAddEmailForAuthenticatedUserOutput = await github.users.addEmailForAuthenticatedUser(input);

// Result shape (from schema): ({ email: string; primary: boolean; verified: boolean; visibility: string | null })[]
```

### `github.users.listFollowersForAuthenticatedUser`

- **HTTP**: `GET /user/followers`
- **What it does**: List followers of the authenticated user
- **OpenAPI operationId**: `users/list-followers-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type UsersListFollowersForAuthenticatedUserInput = Parameters<typeof github.users.listFollowersForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListFollowersForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.listFollowersForAuthenticatedUser>>;

const input: UsersListFollowersForAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: UsersListFollowersForAuthenticatedUserOutput = await github.users.listFollowersForAuthenticatedUser(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.users.listFollowedByAuthenticatedUser`

- **HTTP**: `GET /user/following`
- **What it does**: List the people the authenticated user follows
- **OpenAPI operationId**: `users/list-followed-by-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type UsersListFollowedByAuthenticatedUserInput = Parameters<typeof github.users.listFollowedByAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListFollowedByAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.listFollowedByAuthenticatedUser>>;

const input: UsersListFollowedByAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: UsersListFollowedByAuthenticatedUserOutput = await github.users.listFollowedByAuthenticatedUser(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.users.unfollow`

- **HTTP**: `DELETE /user/following/{username}`
- **What it does**: Unfollow a user
- **OpenAPI operationId**: `users/unfollow`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersUnfollowInput = Parameters<typeof github.users.unfollow> extends [infer T, ...unknown[]] ? T : undefined;
type UsersUnfollowOutput = Awaited<ReturnType<typeof github.users.unfollow>>;

const input: UsersUnfollowInput = {} as { username: string };
const result: UsersUnfollowOutput = await github.users.unfollow(input);

// Result shape (from schema): unknown
```

### `github.users.checkPersonIsFollowedByAuthenticated`

- **HTTP**: `GET /user/following/{username}`
- **What it does**: Check if a person is followed by the authenticated user
- **OpenAPI operationId**: `users/check-person-is-followed-by-authenticated`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersCheckPersonIsFollowedByAuthenticatedInput = Parameters<typeof github.users.checkPersonIsFollowedByAuthenticated> extends [infer T, ...unknown[]] ? T : undefined;
type UsersCheckPersonIsFollowedByAuthenticatedOutput = Awaited<ReturnType<typeof github.users.checkPersonIsFollowedByAuthenticated>>;

const input: UsersCheckPersonIsFollowedByAuthenticatedInput = {} as { username: string };
const result: UsersCheckPersonIsFollowedByAuthenticatedOutput = await github.users.checkPersonIsFollowedByAuthenticated(input);

// Result shape (from schema): unknown
```

### `github.users.follow`

- **HTTP**: `PUT /user/following/{username}`
- **What it does**: Follow a user
- **OpenAPI operationId**: `users/follow`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type UsersFollowInput = Parameters<typeof github.users.follow> extends [infer T, ...unknown[]] ? T : undefined;
type UsersFollowOutput = Awaited<ReturnType<typeof github.users.follow>>;

const input: UsersFollowInput = {} as { username: string };
const result: UsersFollowOutput = await github.users.follow(input);

// Result shape (from schema): unknown
```

### `github.users.listGpgKeysForAuthenticatedUser`

- **HTTP**: `GET /user/gpg_keys`
- **What it does**: List GPG keys for the authenticated user
- **OpenAPI operationId**: `users/list-gpg-keys-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; name?: string | null; primary_key_id: number | null; key_id: string; public_key: string; emails: ({ email?: string; verified?: boolean })[]; subkeys: ({ id?: number; primary_key_id?: number; key_id?: stri...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersListGpgKeysForAuthenticatedUserInput = Parameters<typeof github.users.listGpgKeysForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListGpgKeysForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.listGpgKeysForAuthenticatedUser>>;

const input: UsersListGpgKeysForAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: UsersListGpgKeysForAuthenticatedUserOutput = await github.users.listGpgKeysForAuthenticatedUser(input);

// Result shape (from schema): ({ id: number; name?: string | null; primary_key_id: number | null; key_id: string; public_key: string; emails: ({ email?: string; verified?: boolean })[]; subkeys: ({ id?: number; primary_key_id?: number; key_id?: stri...
```

### `github.users.createGpgKeyForAuthenticatedUser`

- **HTTP**: `POST /user/gpg_keys`
- **What it does**: Create a GPG key for the authenticated user
- **OpenAPI operationId**: `users/create-gpg-key-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; armored_public_key: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name?: string | null; primary_key_id: number | null; key_id: string; public_key: string; emails: ({ email?: string; verified?: boolean })[]; subkeys: ({ id?: number; primary_key_id?: number; key_id?: strin...`
- OpenAPI response codes: `201`, `304`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type UsersCreateGpgKeyForAuthenticatedUserInput = Parameters<typeof github.users.createGpgKeyForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersCreateGpgKeyForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.createGpgKeyForAuthenticatedUser>>;

const input: UsersCreateGpgKeyForAuthenticatedUserInput = {} as { name?: string; armored_public_key: string };
const result: UsersCreateGpgKeyForAuthenticatedUserOutput = await github.users.createGpgKeyForAuthenticatedUser(input);

// Result shape (from schema): { id: number; name?: string | null; primary_key_id: number | null; key_id: string; public_key: string; emails: ({ email?: string; verified?: boolean })[]; subkeys: ({ id?: number; primary_key_id?: number; key_id?: strin...
```

### `github.users.deleteGpgKeyForAuthenticatedUser`

- **HTTP**: `DELETE /user/gpg_keys/{gpg_key_id}`
- **What it does**: Delete a GPG key for the authenticated user
- **OpenAPI operationId**: `users/delete-gpg-key-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ gpg_key_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type UsersDeleteGpgKeyForAuthenticatedUserInput = Parameters<typeof github.users.deleteGpgKeyForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersDeleteGpgKeyForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.deleteGpgKeyForAuthenticatedUser>>;

const input: UsersDeleteGpgKeyForAuthenticatedUserInput = {} as { gpg_key_id: number };
const result: UsersDeleteGpgKeyForAuthenticatedUserOutput = await github.users.deleteGpgKeyForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.users.getGpgKeyForAuthenticatedUser`

- **HTTP**: `GET /user/gpg_keys/{gpg_key_id}`
- **What it does**: Get a GPG key for the authenticated user
- **OpenAPI operationId**: `users/get-gpg-key-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ gpg_key_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name?: string | null; primary_key_id: number | null; key_id: string; public_key: string; emails: ({ email?: string; verified?: boolean })[]; subkeys: ({ id?: number; primary_key_id?: number; key_id?: strin...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersGetGpgKeyForAuthenticatedUserInput = Parameters<typeof github.users.getGpgKeyForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersGetGpgKeyForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.getGpgKeyForAuthenticatedUser>>;

const input: UsersGetGpgKeyForAuthenticatedUserInput = {} as { gpg_key_id: number };
const result: UsersGetGpgKeyForAuthenticatedUserOutput = await github.users.getGpgKeyForAuthenticatedUser(input);

// Result shape (from schema): { id: number; name?: string | null; primary_key_id: number | null; key_id: string; public_key: string; emails: ({ email?: string; verified?: boolean })[]; subkeys: ({ id?: number; primary_key_id?: number; key_id?: strin...
```

### `github.users.listPublicSshKeysForAuthenticatedUser`

- **HTTP**: `GET /user/keys`
- **What it does**: List public SSH keys for the authenticated user
- **OpenAPI operationId**: `users/list-public-ssh-keys-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ key: string; id: number; url: string; title: string; created_at: string; verified: boolean; read_only: boolean; last_used?: string | null })[]`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersListPublicSshKeysForAuthenticatedUserInput = Parameters<typeof github.users.listPublicSshKeysForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListPublicSshKeysForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.listPublicSshKeysForAuthenticatedUser>>;

const input: UsersListPublicSshKeysForAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: UsersListPublicSshKeysForAuthenticatedUserOutput = await github.users.listPublicSshKeysForAuthenticatedUser(input);

// Result shape (from schema): ({ key: string; id: number; url: string; title: string; created_at: string; verified: boolean; read_only: boolean; last_used?: string | null })[]
```

### `github.users.createPublicSshKeyForAuthenticatedUser`

- **HTTP**: `POST /user/keys`
- **What it does**: Create a public SSH key for the authenticated user
- **OpenAPI operationId**: `users/create-public-ssh-key-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ title?: string; key: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ key: string; id: number; url: string; title: string; created_at: string; verified: boolean; read_only: boolean; last_used?: string | null }`
- OpenAPI response codes: `201`, `304`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type UsersCreatePublicSshKeyForAuthenticatedUserInput = Parameters<typeof github.users.createPublicSshKeyForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersCreatePublicSshKeyForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.createPublicSshKeyForAuthenticatedUser>>;

const input: UsersCreatePublicSshKeyForAuthenticatedUserInput = {} as { title?: string; key: string };
const result: UsersCreatePublicSshKeyForAuthenticatedUserOutput = await github.users.createPublicSshKeyForAuthenticatedUser(input);

// Result shape (from schema): { key: string; id: number; url: string; title: string; created_at: string; verified: boolean; read_only: boolean; last_used?: string | null }
```

### `github.users.deletePublicSshKeyForAuthenticatedUser`

- **HTTP**: `DELETE /user/keys/{key_id}`
- **What it does**: Delete a public SSH key for the authenticated user
- **OpenAPI operationId**: `users/delete-public-ssh-key-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ key_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersDeletePublicSshKeyForAuthenticatedUserInput = Parameters<typeof github.users.deletePublicSshKeyForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersDeletePublicSshKeyForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.deletePublicSshKeyForAuthenticatedUser>>;

const input: UsersDeletePublicSshKeyForAuthenticatedUserInput = {} as { key_id: number };
const result: UsersDeletePublicSshKeyForAuthenticatedUserOutput = await github.users.deletePublicSshKeyForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.users.getPublicSshKeyForAuthenticatedUser`

- **HTTP**: `GET /user/keys/{key_id}`
- **What it does**: Get a public SSH key for the authenticated user
- **OpenAPI operationId**: `users/get-public-ssh-key-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ key_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ key: string; id: number; url: string; title: string; created_at: string; verified: boolean; read_only: boolean; last_used?: string | null }`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersGetPublicSshKeyForAuthenticatedUserInput = Parameters<typeof github.users.getPublicSshKeyForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersGetPublicSshKeyForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.getPublicSshKeyForAuthenticatedUser>>;

const input: UsersGetPublicSshKeyForAuthenticatedUserInput = {} as { key_id: number };
const result: UsersGetPublicSshKeyForAuthenticatedUserOutput = await github.users.getPublicSshKeyForAuthenticatedUser(input);

// Result shape (from schema): { key: string; id: number; url: string; title: string; created_at: string; verified: boolean; read_only: boolean; last_used?: string | null }
```

### `github.users.listPublicEmailsForAuthenticatedUser`

- **HTTP**: `GET /user/public_emails`
- **What it does**: List public email addresses for the authenticated user
- **OpenAPI operationId**: `users/list-public-emails-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ email: string; primary: boolean; verified: boolean; visibility: string | null })[]`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersListPublicEmailsForAuthenticatedUserInput = Parameters<typeof github.users.listPublicEmailsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListPublicEmailsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.listPublicEmailsForAuthenticatedUser>>;

const input: UsersListPublicEmailsForAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: UsersListPublicEmailsForAuthenticatedUserOutput = await github.users.listPublicEmailsForAuthenticatedUser(input);

// Result shape (from schema): ({ email: string; primary: boolean; verified: boolean; visibility: string | null })[]
```

### `github.users.deleteSocialAccountForAuthenticatedUser`

- **HTTP**: `DELETE /user/social_accounts`
- **What it does**: Delete social accounts for the authenticated user
- **OpenAPI operationId**: `users/delete-social-account-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ account_urls: (string)[] }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type UsersDeleteSocialAccountForAuthenticatedUserInput = Parameters<typeof github.users.deleteSocialAccountForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersDeleteSocialAccountForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.deleteSocialAccountForAuthenticatedUser>>;

const input: UsersDeleteSocialAccountForAuthenticatedUserInput = {} as { account_urls: (string)[] };
const result: UsersDeleteSocialAccountForAuthenticatedUserOutput = await github.users.deleteSocialAccountForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.users.listSocialAccountsForAuthenticatedUser`

- **HTTP**: `GET /user/social_accounts`
- **What it does**: List social accounts for the authenticated user
- **OpenAPI operationId**: `users/list-social-accounts-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ provider: string; url: string })[]`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersListSocialAccountsForAuthenticatedUserInput = Parameters<typeof github.users.listSocialAccountsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListSocialAccountsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.listSocialAccountsForAuthenticatedUser>>;

const input: UsersListSocialAccountsForAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: UsersListSocialAccountsForAuthenticatedUserOutput = await github.users.listSocialAccountsForAuthenticatedUser(input);

// Result shape (from schema): ({ provider: string; url: string })[]
```

### `github.users.addSocialAccountForAuthenticatedUser`

- **HTTP**: `POST /user/social_accounts`
- **What it does**: Add social accounts for the authenticated user
- **OpenAPI operationId**: `users/add-social-account-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ account_urls: (string)[] }`
- Client transport options: None

**Outputs**

- Client return type: `({ provider: string; url: string })[]`
- OpenAPI response codes: `201`, `304`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type UsersAddSocialAccountForAuthenticatedUserInput = Parameters<typeof github.users.addSocialAccountForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersAddSocialAccountForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.addSocialAccountForAuthenticatedUser>>;

const input: UsersAddSocialAccountForAuthenticatedUserInput = {} as { account_urls: (string)[] };
const result: UsersAddSocialAccountForAuthenticatedUserOutput = await github.users.addSocialAccountForAuthenticatedUser(input);

// Result shape (from schema): ({ provider: string; url: string })[]
```

### `github.users.listSshSigningKeysForAuthenticatedUser`

- **HTTP**: `GET /user/ssh_signing_keys`
- **What it does**: List SSH signing keys for the authenticated user
- **OpenAPI operationId**: `users/list-ssh-signing-keys-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ key: string; id: number; title: string; created_at: string })[]`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersListSshSigningKeysForAuthenticatedUserInput = Parameters<typeof github.users.listSshSigningKeysForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListSshSigningKeysForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.listSshSigningKeysForAuthenticatedUser>>;

const input: UsersListSshSigningKeysForAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: UsersListSshSigningKeysForAuthenticatedUserOutput = await github.users.listSshSigningKeysForAuthenticatedUser(input);

// Result shape (from schema): ({ key: string; id: number; title: string; created_at: string })[]
```

### `github.users.createSshSigningKeyForAuthenticatedUser`

- **HTTP**: `POST /user/ssh_signing_keys`
- **What it does**: Create a SSH signing key for the authenticated user
- **OpenAPI operationId**: `users/create-ssh-signing-key-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ title?: string; key: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ key: string; id: number; title: string; created_at: string }`
- OpenAPI response codes: `201`, `304`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type UsersCreateSshSigningKeyForAuthenticatedUserInput = Parameters<typeof github.users.createSshSigningKeyForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersCreateSshSigningKeyForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.createSshSigningKeyForAuthenticatedUser>>;

const input: UsersCreateSshSigningKeyForAuthenticatedUserInput = {} as { title?: string; key: string };
const result: UsersCreateSshSigningKeyForAuthenticatedUserOutput = await github.users.createSshSigningKeyForAuthenticatedUser(input);

// Result shape (from schema): { key: string; id: number; title: string; created_at: string }
```

### `github.users.deleteSshSigningKeyForAuthenticatedUser`

- **HTTP**: `DELETE /user/ssh_signing_keys/{ssh_signing_key_id}`
- **What it does**: Delete an SSH signing key for the authenticated user
- **OpenAPI operationId**: `users/delete-ssh-signing-key-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ ssh_signing_key_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersDeleteSshSigningKeyForAuthenticatedUserInput = Parameters<typeof github.users.deleteSshSigningKeyForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersDeleteSshSigningKeyForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.deleteSshSigningKeyForAuthenticatedUser>>;

const input: UsersDeleteSshSigningKeyForAuthenticatedUserInput = {} as { ssh_signing_key_id: number };
const result: UsersDeleteSshSigningKeyForAuthenticatedUserOutput = await github.users.deleteSshSigningKeyForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.users.getSshSigningKeyForAuthenticatedUser`

- **HTTP**: `GET /user/ssh_signing_keys/{ssh_signing_key_id}`
- **What it does**: Get an SSH signing key for the authenticated user
- **OpenAPI operationId**: `users/get-ssh-signing-key-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ ssh_signing_key_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ key: string; id: number; title: string; created_at: string }`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersGetSshSigningKeyForAuthenticatedUserInput = Parameters<typeof github.users.getSshSigningKeyForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersGetSshSigningKeyForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.users.getSshSigningKeyForAuthenticatedUser>>;

const input: UsersGetSshSigningKeyForAuthenticatedUserInput = {} as { ssh_signing_key_id: number };
const result: UsersGetSshSigningKeyForAuthenticatedUserOutput = await github.users.getSshSigningKeyForAuthenticatedUser(input);

// Result shape (from schema): { key: string; id: number; title: string; created_at: string }
```

### `github.users.list`

- **HTTP**: `GET /users`
- **What it does**: List users
- **OpenAPI operationId**: `users/list`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ since?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`, `304`

```ts
import github from "@utdk/github";

type UsersListInput = Parameters<typeof github.users.list> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListOutput = Awaited<ReturnType<typeof github.users.list>>;

const input: UsersListInput = {} as { since?: number; per_page?: number };
const result: UsersListOutput = await github.users.list(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.users.getByUsername`

- **HTTP**: `GET /users/{username}`
- **What it does**: Get a user
- **OpenAPI operationId**: `users/get-by-username`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type UsersGetByUsernameInput = Parameters<typeof github.users.getByUsername> extends [infer T, ...unknown[]] ? T : undefined;
type UsersGetByUsernameOutput = Awaited<ReturnType<typeof github.users.getByUsername>>;

const input: UsersGetByUsernameInput = {} as { username: string };
const result: UsersGetByUsernameOutput = await github.users.getByUsername(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.users.deleteAttestationsById`

- **HTTP**: `DELETE /users/{username}/attestations/{attestation_id}`
- **What it does**: Delete attestations by ID
- **OpenAPI operationId**: `users/delete-attestations-by-id`
- **Path params**: `attestation_id`
- **Query params**: None
- **Response codes**: `200`, `204`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; attestation_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `200`, `204`, `403`, `404`

```ts
import github from "@utdk/github";

type UsersDeleteAttestationsByIdInput = Parameters<typeof github.users.deleteAttestationsById> extends [infer T, ...unknown[]] ? T : undefined;
type UsersDeleteAttestationsByIdOutput = Awaited<ReturnType<typeof github.users.deleteAttestationsById>>;

const input: UsersDeleteAttestationsByIdInput = {} as { username: string; attestation_id: number };
const result: UsersDeleteAttestationsByIdOutput = await github.users.deleteAttestationsById(input);

// Result shape (from schema): unknown
```

### `github.users.listAttestations`

- **HTTP**: `GET /users/{username}/attestations/{subject_digest}`
- **What it does**: List attestations
- **OpenAPI operationId**: `users/list-attestations`
- **Path params**: `subject_digest`
- **Query params**: `predicate_type`
- **Response codes**: `200`, `201`, `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; subject_digest: string; per_page?: number; before?: string; after?: string; predicate_type?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ attestations?: ({ bundle?: { mediaType?: string; verificationMaterial?: { [key: string]: unknown }; dsseEnvelope?: { [key: string]: unknown } }; repository_id?: number; bundle_url?: string; initiator?: string })[] }`
- OpenAPI response codes: `200`, `201`, `204`, `404`

```ts
import github from "@utdk/github";

type UsersListAttestationsInput = Parameters<typeof github.users.listAttestations> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListAttestationsOutput = Awaited<ReturnType<typeof github.users.listAttestations>>;

const input: UsersListAttestationsInput = {} as { username: string; subject_digest: string; per_page?: number; before?: string; after?: string; predicate_type?: string };
const result: UsersListAttestationsOutput = await github.users.listAttestations(input);

// Result shape (from schema): { attestations?: ({ bundle?: { mediaType?: string; verificationMaterial?: { [key: string]: unknown }; dsseEnvelope?: { [key: string]: unknown } }; repository_id?: number; bundle_url?: string; initiator?: string })[] }
```

### `github.users.listAttestationsBulk`

- **HTTP**: `POST /users/{username}/attestations/bulk-list`
- **What it does**: List attestations by bulk subject digests
- **OpenAPI operationId**: `users/list-attestations-bulk`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ subject_digests: (string)[]; predicate_type?: string; username: string; per_page?: number; before?: string; after?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ attestations_subject_digests?: { [key: string]: ({ bundle?: { mediaType?: string; verificationMaterial?: { [key: string]: unknown }; dsseEnvelope?: { [key: string]: unknown } }; repository_id?: number; bundle_url?: st...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type UsersListAttestationsBulkInput = Parameters<typeof github.users.listAttestationsBulk> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListAttestationsBulkOutput = Awaited<ReturnType<typeof github.users.listAttestationsBulk>>;

const input: UsersListAttestationsBulkInput = {} as { subject_digests: (string)[]; predicate_type?: string; username: string; per_page?: number; before?: string; after?: string };
const result: UsersListAttestationsBulkOutput = await github.users.listAttestationsBulk(input);

// Result shape (from schema): { attestations_subject_digests?: { [key: string]: ({ bundle?: { mediaType?: string; verificationMaterial?: { [key: string]: unknown }; dsseEnvelope?: { [key: string]: unknown } }; repository_id?: number; bundle_url?: st...
```

### `github.users.deleteAttestationsBulk`

- **HTTP**: `POST /users/{username}/attestations/delete-request`
- **What it does**: Delete attestations in bulk
- **OpenAPI operationId**: `users/delete-attestations-bulk`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: { subject_digests: (string)[] } | { attestation_ids: (number)[] }; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type UsersDeleteAttestationsBulkInput = Parameters<typeof github.users.deleteAttestationsBulk> extends [infer T, ...unknown[]] ? T : undefined;
type UsersDeleteAttestationsBulkOutput = Awaited<ReturnType<typeof github.users.deleteAttestationsBulk>>;

const input: UsersDeleteAttestationsBulkInput = {} as { body: { subject_digests: (string)[] } | { attestation_ids: (number)[] }; username: string };
const result: UsersDeleteAttestationsBulkOutput = await github.users.deleteAttestationsBulk(input);

// Result shape (from schema): unknown
```

### `github.users.deleteAttestationsBySubjectDigest`

- **HTTP**: `DELETE /users/{username}/attestations/digest/{subject_digest}`
- **What it does**: Delete attestations by subject digest
- **OpenAPI operationId**: `users/delete-attestations-by-subject-digest`
- **Path params**: `subject_digest`
- **Query params**: None
- **Response codes**: `200`, `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; subject_digest: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `200`, `204`, `404`

```ts
import github from "@utdk/github";

type UsersDeleteAttestationsBySubjectDigestInput = Parameters<typeof github.users.deleteAttestationsBySubjectDigest> extends [infer T, ...unknown[]] ? T : undefined;
type UsersDeleteAttestationsBySubjectDigestOutput = Awaited<ReturnType<typeof github.users.deleteAttestationsBySubjectDigest>>;

const input: UsersDeleteAttestationsBySubjectDigestInput = {} as { username: string; subject_digest: string };
const result: UsersDeleteAttestationsBySubjectDigestOutput = await github.users.deleteAttestationsBySubjectDigest(input);

// Result shape (from schema): unknown
```

### `github.users.listFollowersForUser`

- **HTTP**: `GET /users/{username}/followers`
- **What it does**: List followers of a user
- **OpenAPI operationId**: `users/list-followers-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type UsersListFollowersForUserInput = Parameters<typeof github.users.listFollowersForUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListFollowersForUserOutput = Awaited<ReturnType<typeof github.users.listFollowersForUser>>;

const input: UsersListFollowersForUserInput = {} as { username: string; per_page?: number; page?: number };
const result: UsersListFollowersForUserOutput = await github.users.listFollowersForUser(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.users.listFollowingForUser`

- **HTTP**: `GET /users/{username}/following`
- **What it does**: List the people a user follows
- **OpenAPI operationId**: `users/list-following-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type UsersListFollowingForUserInput = Parameters<typeof github.users.listFollowingForUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListFollowingForUserOutput = Awaited<ReturnType<typeof github.users.listFollowingForUser>>;

const input: UsersListFollowingForUserInput = {} as { username: string; per_page?: number; page?: number };
const result: UsersListFollowingForUserOutput = await github.users.listFollowingForUser(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.users.checkFollowingForUser`

- **HTTP**: `GET /users/{username}/following/{target_user}`
- **What it does**: Check if a user follows another user
- **OpenAPI operationId**: `users/check-following-for-user`
- **Path params**: `target_user`
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; target_user: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type UsersCheckFollowingForUserInput = Parameters<typeof github.users.checkFollowingForUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersCheckFollowingForUserOutput = Awaited<ReturnType<typeof github.users.checkFollowingForUser>>;

const input: UsersCheckFollowingForUserInput = {} as { username: string; target_user: string };
const result: UsersCheckFollowingForUserOutput = await github.users.checkFollowingForUser(input);

// Result shape (from schema): unknown
```

### `github.users.listGpgKeysForUser`

- **HTTP**: `GET /users/{username}/gpg_keys`
- **What it does**: List GPG keys for a user
- **OpenAPI operationId**: `users/list-gpg-keys-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; name?: string | null; primary_key_id: number | null; key_id: string; public_key: string; emails: ({ email?: string; verified?: boolean })[]; subkeys: ({ id?: number; primary_key_id?: number; key_id?: stri...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type UsersListGpgKeysForUserInput = Parameters<typeof github.users.listGpgKeysForUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListGpgKeysForUserOutput = Awaited<ReturnType<typeof github.users.listGpgKeysForUser>>;

const input: UsersListGpgKeysForUserInput = {} as { username: string; per_page?: number; page?: number };
const result: UsersListGpgKeysForUserOutput = await github.users.listGpgKeysForUser(input);

// Result shape (from schema): ({ id: number; name?: string | null; primary_key_id: number | null; key_id: string; public_key: string; emails: ({ email?: string; verified?: boolean })[]; subkeys: ({ id?: number; primary_key_id?: number; key_id?: stri...
```

### `github.users.getContextForUser`

- **HTTP**: `GET /users/{username}/hovercard`
- **What it does**: Get contextual information for a user
- **OpenAPI operationId**: `users/get-context-for-user`
- **Path params**: None
- **Query params**: `subject_type`, `subject_id`
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; subject_type?: "organization" | "repository" | "issue" | "pull_request"; subject_id?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ contexts: ({ message: string; octicon: string })[] }`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type UsersGetContextForUserInput = Parameters<typeof github.users.getContextForUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersGetContextForUserOutput = Awaited<ReturnType<typeof github.users.getContextForUser>>;

const input: UsersGetContextForUserInput = {} as { username: string; subject_type?: "organization" | "repository" | "issue" | "pull_request"; subject_id?: string };
const result: UsersGetContextForUserOutput = await github.users.getContextForUser(input);

// Result shape (from schema): { contexts: ({ message: string; octicon: string })[] }
```

### `github.users.listPublicKeysForUser`

- **HTTP**: `GET /users/{username}/keys`
- **What it does**: List public keys for a user
- **OpenAPI operationId**: `users/list-public-keys-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; key: string; created_at?: string; last_used?: string | null })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type UsersListPublicKeysForUserInput = Parameters<typeof github.users.listPublicKeysForUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListPublicKeysForUserOutput = Awaited<ReturnType<typeof github.users.listPublicKeysForUser>>;

const input: UsersListPublicKeysForUserInput = {} as { username: string; per_page?: number; page?: number };
const result: UsersListPublicKeysForUserOutput = await github.users.listPublicKeysForUser(input);

// Result shape (from schema): ({ id: number; key: string; created_at?: string; last_used?: string | null })[]
```

### `github.users.listSocialAccountsForUser`

- **HTTP**: `GET /users/{username}/social_accounts`
- **What it does**: List social accounts for a user
- **OpenAPI operationId**: `users/list-social-accounts-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ provider: string; url: string })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type UsersListSocialAccountsForUserInput = Parameters<typeof github.users.listSocialAccountsForUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListSocialAccountsForUserOutput = Awaited<ReturnType<typeof github.users.listSocialAccountsForUser>>;

const input: UsersListSocialAccountsForUserInput = {} as { username: string; per_page?: number; page?: number };
const result: UsersListSocialAccountsForUserOutput = await github.users.listSocialAccountsForUser(input);

// Result shape (from schema): ({ provider: string; url: string })[]
```

### `github.users.listSshSigningKeysForUser`

- **HTTP**: `GET /users/{username}/ssh_signing_keys`
- **What it does**: List SSH signing keys for a user
- **OpenAPI operationId**: `users/list-ssh-signing-keys-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ key: string; id: number; title: string; created_at: string })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type UsersListSshSigningKeysForUserInput = Parameters<typeof github.users.listSshSigningKeysForUser> extends [infer T, ...unknown[]] ? T : undefined;
type UsersListSshSigningKeysForUserOutput = Awaited<ReturnType<typeof github.users.listSshSigningKeysForUser>>;

const input: UsersListSshSigningKeysForUserInput = {} as { username: string; per_page?: number; page?: number };
const result: UsersListSshSigningKeysForUserOutput = await github.users.listSshSigningKeysForUser(input);

// Result shape (from schema): ({ key: string; id: number; title: string; created_at: string })[]
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
