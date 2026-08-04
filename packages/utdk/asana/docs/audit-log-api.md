# Audit Log API

1 operation · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getAuditLogEvents`

Get audit log events — [Provider docs](https://asana.com/support)

```ts
asana.getAuditLogEvents(input: {
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Filter to events created after this time (inclusive). */
  start_at?: string;
  /** Filter to events created before this time (exclusive). */
  end_at?: string;
  /** Filter to events of this type. Refer to the [supported audit log events](/docs/audit-log-events#supported-audit-log-events) for a full list of values. */
  event_type?: string;
  /** Filter to events with an actor of this type. This only needs to be included if querying for actor types without an ID. If `actor_gid` is included, this should be excluded. */
  actor_type?: "user" | "asana" | "asana_support" | "anonymous" | "external_administrator";
  /** Filter to events triggered by the actor with this ID. */
  actor_gid?: string;
  /** Filter to events with this resource ID. */
  resource_gid?: string;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
}): Promise<{ data?: (AuditLogEvent)[]; next_page?: NextPage }>
```

<sub>`GET /workspaces/{workspace_gid}/audit_log_events` · `getAuditLogEvents`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
