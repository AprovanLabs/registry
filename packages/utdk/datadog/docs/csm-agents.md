# CSM Agents

2 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listAllCsmAgents`

Get all CSM Agents — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAllCsmAgents(input: {
  /** The page index for pagination (zero-based). */
  page?: number;
  /** The number of items to include in a single page. */
  size?: number;
  /** A search query string to filter results (for example, `hostname:COMP-T2H4J27423`). */
  query?: string;
  order_direction?: OrderDirection;
}): Promise<CsmAgentsResponse>
```

<sub>`GET /api/v2/csm/onboarding/agents` · `ListAllCSMAgents`</sub>

## `datadog.listAllCsmServerlessAgents`

Get all CSM Serverless Agents — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAllCsmServerlessAgents(input: {
  /** The page index for pagination (zero-based). */
  page?: number;
  /** The number of items to include in a single page. */
  size?: number;
  /** A search query string to filter results (for example, `hostname:COMP-T2H4J27423`). */
  query?: string;
  order_direction?: OrderDirection;
}): Promise<CsmAgentsResponse>
```

<sub>`GET /api/v2/csm/onboarding/serverless/agents` · `ListAllCSMServerlessAgents`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
