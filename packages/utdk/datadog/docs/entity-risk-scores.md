# Entity Risk Scores

2 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listEntityRiskScores`

List Entity Risk Scores — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listEntityRiskScores(input: {
  /** Start time for the query in Unix timestamp (milliseconds). Defaults to 2 weeks ago. */
  from?: number;
  /** End time for the query in Unix timestamp (milliseconds). Defaults to now. */
  to?: number;
  /** Size of the page to return. Maximum is 1000. */
  "page[size]"?: number;
  /** Page number to return (1-indexed). */
  "page[number]"?: number;
  /** Query ID for pagination consistency. */
  "page[queryId]"?: string;
  /** Sort order for results. Format: `field:direction` where direction is `asc` or `desc`. Supported fields: `riskScore`, `lastDetected`, `firstDetected`, `entityName`, `signalsDetected`. */
  "filter[sort]"?: string;
  /** Supports filtering by entity attributes, risk scores, severity, and more. Example: `severity:critical AND entityType:aws_iam_user` */
  "filter[query]"?: string;
  /** Filter by entity type(s). Can specify multiple values. */
  entityType?: (string)[];
}): Promise<SecurityEntityRiskScoresResponse>
```

<sub>`GET /api/v2/security-entities/risk-scores` · `ListEntityRiskScores`</sub>

## `datadog.getEntityRiskScore`

Get Entity Risk Score — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getEntityRiskScore(input: {
  /** The URL-encoded unique identifier for the entity. */
  entity_id: string;
}): Promise<SecurityEntityRiskScoreResponse>
```

<sub>`GET /api/v2/security-entities/risk-scores/{entity_id}` · `GetEntityRiskScore`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
