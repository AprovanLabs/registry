# Apps.Permissions.Resources

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.appsPermissionsResourcesList`

Returns list of resource grants this app has on a team. — [API reference](https://api.slack.com/methods/apps.permissions.resources.list)

```ts
slack.appsPermissionsResourcesList(input: {
  /** Authentication token. Requires scope: `none` */
  token: string;
  /** Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
  cursor?: string;
  /** The maximum number of items to return. */
  limit?: number;
}): Promise<{ ok: DefsOkTrue; resources: ({ id?: string; type?: string })[]; response_metadata?: { next_cursor: string }; [key: string]: unknown }>
```

<sub>`GET /apps.permissions.resources.list` · `apps_permissions_resources_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
