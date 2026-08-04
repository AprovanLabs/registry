# Developer Logs

1 operation · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.getDeveloperLogs`

Get developer logs — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getDeveloperLogs(input: {
  /** Filter by the type of token used for authentication. */
  token_type?: "plan_access_token" | "developer_token" | "oauth_token";
  /** Filter by token value(s). Multiple values can be separated by commas. */
  token?: string;
  /** Filter by token name prefix(es). Multiple values can be separated by commas. */
  token_name?: string;
  /** Filter by user email prefix(es). Multiple values can be separated by commas. */
  user_email?: string;
  /** Filter by IP address prefix(es). Multiple values can be separated by commas. */
  ip_address?: string;
  /** Filter by event source. */
  event_source?: "rest_api" | "mcp_server";
  /** Filter by date range. */
  date_range?: "last_24h" | "last_7d" | "last_30d";
  /** Maximum number of entries to return. */
  limit?: number;
  /** A cursor returned from a previous request, used for pagination. */
  cursor?: string;
}): Promise<{ status: 200; error: false; meta: { items: (DeveloperLog)[]; cursor?: string | null; has_more: boolean } }>
```

<sub>`POST /v1/developer_logs` · `getDeveloperLogs`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
