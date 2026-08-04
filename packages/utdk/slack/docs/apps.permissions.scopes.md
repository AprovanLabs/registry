# Apps.Permissions.Scopes

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.appsPermissionsScopesList`

Returns list of scopes this app has on a team. — [API reference](https://api.slack.com/methods/apps.permissions.scopes.list)

```ts
slack.appsPermissionsScopesList(input: {
  /** Authentication token. Requires scope: `none` */
  token: string;
}): Promise<{ ok: DefsOkTrue; scopes: { app_home?: ObjsScopes; channel?: ObjsScopes; group?: ObjsScopes; im?: ObjsScopes; mpim?: ObjsScopes; team?: ObjsScopes; user?: ObjsScopes; [key: string]: unknown }; [key: string]: unknown }>
```

<sub>`GET /apps.permissions.scopes.list` · `apps_permissions_scopes_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
