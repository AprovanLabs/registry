# Governance Insights

1 operation · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listGovernanceInsights`

List governance insights — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listGovernanceInsights(input: {
  /** Whether to compute and include the current and previous value of each insight. Defaults to `false`, in which case only insight metadata is returned. */
  withValues?: boolean;
  /** The UUID of the organization to compute insights for. Defaults to the organization of the authenticated user. Used to retrieve insights for a child organization from a parent organization. */
  orgUuid?: string;
  /** Restrict the results to insights belonging to the given products. May be repeated to filter by multiple products. Matching is case-insensitive. */
  "filter[product]"?: (string)[];
}): Promise<GovernanceInsightsResponse>
```

<sub>`GET /api/v2/governance/insights` · `ListGovernanceInsights`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
