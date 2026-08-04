# Floating IP Actions

3 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.floatingIPsActionList`

List All Actions for a Floating IP

```ts
digitalocean.floatingIPsActionList(input: {
  /** A floating IP address. */
  floating_ip: string;
}): Promise<{ actions?: (Action)[] } & Pagination & Meta>
```

<sub>`GET /v2/floating_ips/{floating_ip}/actions` · `floatingIPsAction_list`</sub>

## `digitalocean.floatingIPsActionPost`

Initiate a Floating IP Action

```ts
digitalocean.floatingIPsActionPost(input: {
  body?: FloatingIpActionUnassign | FloatingIpActionAssign;
  /** A floating IP address. */
  floating_ip: string;
}): Promise<{ action?: Action & { project_id?: string } }>
```

<sub>`POST /v2/floating_ips/{floating_ip}/actions` · `floatingIPsAction_post`</sub>

## `digitalocean.floatingIPsActionGet`

Retrieve an Existing Floating IP Action

```ts
digitalocean.floatingIPsActionGet(input: {
  /** A floating IP address. */
  floating_ip: string;
  /** A unique numeric ID that can be used to identify and reference an action. */
  action_id: number;
}): Promise<{ action?: Action & { project_id?: string } }>
```

<sub>`GET /v2/floating_ips/{floating_ip}/actions/{action_id}` · `floatingIPsAction_get`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
