# Audit Log

4 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getAuditLogEntries`

List audit log entries — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAuditLogEntries(input: {
  /** A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries this returns occurred before the timestamp. */
  before?: number;
  /** A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries this returns occurred after the timestamp. */
  after?: number;
  /** Text to search for. You can search for the full or partial name of the resource. */
  q?: string;
  /** A limit on the number of audit log entries that return. Set between 1 and 20. The default is 10. */
  limit?: number;
  /** A resource specifier that lets you filter audit log listings by resource */
  spec?: string;
}): Promise<AuditLogEntryListingRepCollection>
```

<sub>`GET /api/v2/auditlog` · `getAuditLogEntries`</sub>

## `launchdarkly.postAuditLogEntries`

Search audit log entries — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postAuditLogEntries(input: {
  body?: StatementPostList;
  /** A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries returned occurred before the timestamp. */
  before?: number;
  /** A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned occurred after the timestamp. */
  after?: number;
  /** Text to search for. You can search for the full or partial name of the resource. */
  q?: string;
  /** A limit on the number of audit log entries that return. Set between 1 and 20. The default is 10. */
  limit?: number;
}): Promise<AuditLogEntryListingRepCollection>
```

<sub>`POST /api/v2/auditlog` · `postAuditLogEntries`</sub>

## `launchdarkly.getAuditLogEntry`

Get audit log entry — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAuditLogEntry(input: {
  /** The ID of the audit log entry */
  id: string;
}): Promise<AuditLogEntryRep>
```

<sub>`GET /api/v2/auditlog/{id}` · `getAuditLogEntry`</sub>

## `launchdarkly.postAuditLogEntryCounts`

Get audit log entry counts — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postAuditLogEntryCounts(input: {
  body: StatementPostList;
  /** A timestamp filter, expressed as a Unix epoch time in milliseconds. Defaults to now. */
  before?: number;
  /** A timestamp filter, expressed as a Unix epoch time in milliseconds. Required. */
  after: number;
  /** Number of time buckets to divide the range into. Default 50, max 500. */
  buckets?: number;
}): Promise<CountBucketsResult>
```

<sub>`POST /api/v2/auditlog/counts` · `postAuditLogEntryCounts`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
