# Code Coverage

2 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getCodeCoverageBranchSummary`

Get code coverage summary for a branch — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCodeCoverageBranchSummary(input: {
  data: BranchCoverageSummaryRequestData;
}): Promise<CoverageSummaryResponse>
```

<sub>`POST /api/v2/code-coverage/branch/summary` · `GetCodeCoverageBranchSummary`</sub>

## `datadog.getCodeCoverageCommitSummary`

Get code coverage summary for a commit — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCodeCoverageCommitSummary(input: {
  data: CommitCoverageSummaryRequestData;
}): Promise<CoverageSummaryResponse>
```

<sub>`POST /api/v2/code-coverage/commit/summary` · `GetCodeCoverageCommitSummary`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
