# Apps.Permissions

2 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.appsPermissionsInfo`

Returns list of permissions this app has on a team. — [API reference](https://api.slack.com/methods/apps.permissions.info)

```ts
slack.appsPermissionsInfo(input: {
  /** Authentication token. Requires scope: `none` */
  token?: string;
}): Promise<{ info: { app_home: { resources?: ObjsResources; scopes?: ObjsScopes }; channel: { resources?: ObjsResources; scopes?: ObjsScopes }; group: { resources?: ObjsResources; scopes?: ObjsScopes }; im: { resources?: ObjsResources; scopes?: ObjsScopes }; mpim: { resources?: ObjsResources; scopes?: ObjsScopes }; team: { resources: ObjsResources; scopes: ObjsScopes } }; ok: DefsOkTrue }>
```

<sub>`GET /apps.permissions.info` · `apps_permissions_info`</sub>

## `slack.appsPermissionsRequest`

Allows an app to request additional scopes — [API reference](https://api.slack.com/methods/apps.permissions.request)

```ts
slack.appsPermissionsRequest(input: {
  /** Authentication token. Requires scope: `none` */
  token: string;
  /** A comma separated list of scopes to request for */
  scopes: string;
  /** Token used to trigger the permissions API */
  trigger_id: string;
}): Promise<{ ok: DefsOkTrue }>
```

<sub>`GET /apps.permissions.request` · `apps_permissions_request`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
