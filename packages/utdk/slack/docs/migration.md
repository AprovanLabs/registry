# Migration

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.migrationExchange`

For Enterprise Grid workspaces, map local user IDs to global user IDs — [API reference](https://api.slack.com/methods/migration.exchange)

```ts
slack.migrationExchange(input: {
  /** Authentication token. Requires scope: `tokens.basic` */
  token: string;
  /** A comma-separated list of user ids, up to 400 per request */
  users: string;
  /** Specify team_id starts with `T` in case of Org Token */
  team_id?: string;
  /** Specify `true` to convert `W` global user IDs to workspace-specific `U` IDs. Defaults to `false`. */
  to_old?: boolean;
}): Promise<{ enterprise_id: string; invalid_user_ids?: (string)[]; ok: DefsOkTrue; team_id: DefsTeam; user_id_map?: { [key: string]: unknown }; [key: string]: unknown }>
```

<sub>`GET /migration.exchange` · `migration_exchange`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
