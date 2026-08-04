# Issue Redaction

2 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.redact`

Redact — [Provider docs](http://www.atlassian.com)

```ts
jira.redact(input: {
  redactions?: (SingleRedactionRequest)[];
}): Promise<string>
```

<sub>`POST /rest/api/3/redact` · `redact`</sub>

## `jira.getRedactionStatus`

Get redaction status — [Provider docs](http://www.atlassian.com)

```ts
jira.getRedactionStatus(input: {
  /** Redaction job id */
  jobId: string;
}): Promise<RedactionJobStatusResponse>
```

<sub>`GET /rest/api/3/redact/status/{jobId}` · `getRedactionStatus`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
