# Categories

3 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getCategories`

Retrieve all categories — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getCategories(input: {
  /** The number of categories to display per page. */
  limit?: number;
  /** Allows you to perform a prefix search on this particular category. */
  category?: string;
  /** The point in the list that you would like to begin displaying results. */
  offset?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<({ category: string })[]>
```

<sub>`GET /categories` · `GET_categories`</sub>

## `sendgrid.getCategoriesStats`

Retrieve Email Statistics for Categories — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getCategoriesStats(input: {
  /** The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD */
  start_date: string;
  /** The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. */
  end_date?: string;
  /** The individual categories that you want to retrieve statistics for. You may include up to 10 different categories. */
  categories: string;
  /** The number of results to include. */
  limit?: number;
  /** The number of results to skip. */
  offset?: number;
  /** How to group the statistics. Must be either "day", "week", or "month". */
  aggregated_by?: "day" | "week" | "month";
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<(CategoryStats)[]>
```

<sub>`GET /categories/stats` · `GET_categories-stats`</sub>

## `sendgrid.getCategoriesStatsSums`

Retrieve sums of email stats for each category [Needs: Stats object defined, has category ID?] — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getCategoriesStatsSums(input: {
  /** The metric that you want to sort by.  Must be a single metric. */
  sort_by_metric?: string;
  /** The direction you want to sort. */
  sort_by_direction?: "desc" | "asc";
  /** The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. */
  start_date: string;
  /** The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. */
  end_date?: string;
  /** Limits the number of results returned. */
  limit?: number;
  /** The point in the list to begin retrieving results. */
  offset?: number;
  /** How to group the statistics. Must be either "day", "week", or "month". */
  aggregated_by?: "day" | "week" | "month";
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<CategoryStats>
```

<sub>`GET /categories/stats/sums` · `GET_categories-stats-sums`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
