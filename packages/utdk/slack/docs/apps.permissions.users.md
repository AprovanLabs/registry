# Apps.Permissions.Users

2 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.appsPermissionsUsersList`

Returns list of user grants and corresponding scopes this app has on a team. — [API reference](https://api.slack.com/methods/apps.permissions.users.list)

```ts
slack.appsPermissionsUsersList(input: {
  /** Authentication token. Requires scope: `none` */
  token: string;
  /** Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
  cursor?: string;
  /** The maximum number of items to return. */
  limit?: number;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /apps.permissions.users.list` · `apps_permissions_users_list`</sub>

## `slack.appsPermissionsUsersRequest`

Enables an app to trigger a permissions modal to grant an app access to a user access scope. — [API reference](https://api.slack.com/methods/apps.permissions.users.request)

```ts
slack.appsPermissionsUsersRequest(input: {
  /** Authentication token. Requires scope: `none` */
  token: string;
  /** A comma separated list of user scopes to request for */
  scopes: string;
  /** Token used to trigger the request */
  trigger_id: string;
  /** The user this scope is being requested for */
  user: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /apps.permissions.users.request` · `apps_permissions_users_request`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
