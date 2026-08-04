# Audit Records

1 operation · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAuditRecords`

Get audit records — [Provider docs](http://www.atlassian.com)

```ts
jira.getAuditRecords(input: {
  /** The number of records to skip before returning the first result. */
  offset?: number;
  /** The maximum number of results to return. */
  limit?: number;
  /** The strings to match with audit field content, space separated. */
  filter?: string;
  /** The date and time on or after which returned audit records must have been created. If `to` is provided `from` must be before `to` or no audit records are returned. */
  from?: string;
  /** The date and time on or before which returned audit results must have been created. If `from` is provided `to` must be after `from` or no audit records are returned. */
  to?: string;
}): Promise<AuditRecords>
```

<sub>`GET /rest/api/3/auditing/record` · `getAuditRecords`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
