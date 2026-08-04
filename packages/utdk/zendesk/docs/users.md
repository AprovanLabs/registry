# Users

2 operations · `@utdk/zendesk`

```ts
import zendesk from "@utdk/zendesk";
```

## `zendesk.listUsers`

List users — [Provider docs](https://developer.zendesk.com/api-reference)

```ts
zendesk.listUsers(input: {
  /** Filter by user role */
  role?: "end-user" | "agent" | "admin";
  page?: number;
  per_page?: number;
}): Promise<UserList>
```

<sub>`GET /users` · `listUsers`</sub>

## `zendesk.getUser`

Show a user — [Provider docs](https://developer.zendesk.com/api-reference)

```ts
zendesk.getUser(input: {
  /** The user ID */
  userId: number;
}): Promise<UserResponse>
```

<sub>`GET /users/{userId}` · `getUser`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
