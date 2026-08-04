# Audit Logs

1 operation · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.listAuditLogs`

List user actions and configuration changes within this organization. — [Provider docs](https://help.openai.com/)

```ts
openai.listAuditLogs(input: {
  /** Return only events whose `effective_at` (Unix seconds) is in this range. */
  effective_at?: { gt?: number; gte?: number; lt?: number; lte?: number };
  /** Return only events for these projects. */
  "project_ids[]"?: (string)[];
  /** Return only events with a `type` in one of these values. For example, `project.created`. For all options, see the documentation for the [audit log object](/docs/api-reference/audit-logs/object). */
  "event_types[]"?: (AuditLogEventType)[];
  /** Return only events performed by these actors. Can be a user ID, a service account ID, or an api key tracking ID. */
  "actor_ids[]"?: (string)[];
  /** Return only events performed by users with these emails. */
  "actor_emails[]"?: (string)[];
  /** Return only events performed on these targets. For example, a project ID updated. */
  "resource_ids[]"?: (string)[];
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  */
  before?: string;
}): Promise<ListAuditLogsResponse>
```

<sub>`GET /organization/audit_logs` · `list-audit-logs`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
