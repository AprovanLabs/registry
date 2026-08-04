# Spa

2 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getSpaRecommendations`

Get SPA Recommendations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSpaRecommendations(input: {
  /** The service name for a spark job. */
  service: string;
  /** The recommendation service should not use its metrics cache. */
  bypass_cache?: string;
}): Promise<RecommendationDocument>
```

<sub>`GET /api/v2/spa/recommendations/{service}` · `GetSPARecommendations`</sub>

## `datadog.getSpaRecommendationsWithShard`

Get SPA Recommendations with a shard parameter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSpaRecommendationsWithShard(input: {
  /** The shard tag for a spark job, which differentiates jobs within the same service that have different resource needs */
  shard: string;
  /** The service name for a spark job */
  service: string;
  /** The recommendation service should not use its metrics cache. */
  bypass_cache?: string;
}): Promise<RecommendationDocument>
```

<sub>`GET /api/v2/spa/recommendations/{service}/{shard}` · `GetSPARecommendationsWithShard`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
