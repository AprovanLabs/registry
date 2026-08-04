# AI Usage

1 operation · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.getAiUsageDaily`

Get daily AI credit usage — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getAiUsageDaily(input: {
  /** The first day to include, inclusive, as a `YYYY-MM-DD` calendar date (UTC). Required. Must be on or after `2025-12-01` and no more than 366 days before the current UTC day. */
  start_date: string;
  /** The last day to include, inclusive, as a `YYYY-MM-DD` calendar date (UTC). Required. Must be on or after `start_date` and the current UTC day or earlier. */
  end_date: string;
  /** Restrict the results to a single Figma user, identified by email. When omitted, rows for every user in the plan with usage in the range are returned. An email that matches no Figma user returns a 400. */
  user_email?: string;
  /** Maximum number of rows to return. This param defaults to 1000 if unspecified, and may not exceed 1000. */
  limit?: number;
  /** An opaque cursor returned from a previous request, used for pagination. */
  cursor?: string;
}): Promise<{ rows: (AiUsageDailyRow)[]; next_cursor: string; has_next_page: boolean }>
```

<sub>`GET /v1/ai_usage/daily` · `getAiUsageDaily`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
