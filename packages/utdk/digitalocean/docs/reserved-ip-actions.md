# Reserved IP Actions

3 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.reservedIPsActionsList`

List All Actions for a Reserved IP

```ts
digitalocean.reservedIPsActionsList(input: {
  /** A reserved IP address. */
  reserved_ip: string;
}): Promise<{ actions?: (Action)[] } & Pagination & Meta>
```

<sub>`GET /v2/reserved_ips/{reserved_ip}/actions` · `reservedIPsActions_list`</sub>

## `digitalocean.reservedIPsActionsPost`

Initiate a Reserved IP Action

```ts
digitalocean.reservedIPsActionsPost(input: {
  body?: ReservedIpActionUnassign | ReservedIpActionAssign;
  /** A reserved IP address. */
  reserved_ip: string;
}): Promise<{ action?: Action & { project_id?: string } }>
```

<sub>`POST /v2/reserved_ips/{reserved_ip}/actions` · `reservedIPsActions_post`</sub>

## `digitalocean.reservedIPsActionsGet`

Retrieve an Existing Reserved IP Action

```ts
digitalocean.reservedIPsActionsGet(input: {
  /** A reserved IP address. */
  reserved_ip: string;
  /** A unique numeric ID that can be used to identify and reference an action. */
  action_id: number;
}): Promise<{ action?: Action & { project_id?: string } }>
```

<sub>`GET /v2/reserved_ips/{reserved_ip}/actions/{action_id}` · `reservedIPsActions_get`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
