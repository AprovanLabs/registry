# Users

3 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getSearchUsers`

Find users — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getSearchUsers(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** Full-text search for users based on name, first name, last name, e-mail address, or key */
  q?: string;
  /** Specifies the maximum number of items in the collection to return (max: 50, default: 20) */
  limit?: number;
  /** Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the `next` link we provide instead. */
  searchAfter?: string;
  /** A comma-separated list of user attribute filters. Each filter is in the form of attributeKey:attributeValue */
  filter?: string;
}): Promise<Users>
```

<sub>`GET /api/v2/user-search/{projectKey}/{environmentKey}` · `getSearchUsers`</sub>

## `launchdarkly.getUsers`

List users — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getUsers(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The number of elements to return per page */
  limit?: number;
  /** Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the `next` link we provide instead. */
  searchAfter?: string;
}): Promise<UsersRep>
```

<sub>`GET /api/v2/users/{projectKey}/{environmentKey}` · `getUsers`</sub>

## `launchdarkly.getUser`

Get user — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getUser(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The user key */
  userKey: string;
}): Promise<UserRecord>
```

<sub>`GET /api/v2/users/{projectKey}/{environmentKey}/{userKey}` · `getUser`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
