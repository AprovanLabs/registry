# NFS Actions

1 operation · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.nfsCreateAction`

Initiate an NFS action

```ts
digitalocean.nfsCreateAction(input: {
  body: NfsActionResize | NfsActionSnapshot | NfsActionAttach | NfsActionDetach | NfsActionReassign | NfsActionSwitchPerformanceTier;
  /** The unique ID of the NFS share */
  nfs_id: string;
}): Promise<NfsActionsResponse>
```

<sub>`POST /v2/nfs/{nfs_id}/actions` · `nfs_create_action`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
