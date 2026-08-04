# Review Hog

10 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.reviewHogBlindSpotsList`

List blind-spots skills and which one is active

```ts
posthog.reviewHogBlindSpotsList(): Promise<({ skill_name: string; active: boolean; description: string; body: string })[]>
```

<sub>`GET /api/projects/{project_id}/review_hog/blind_spots/` · `review_hog_blind_spots_list`</sub>

## `posthog.reviewHogBlindSpotsPartialUpdate`

Select the active blind-spots skill

```ts
posthog.reviewHogBlindSpotsPartialUpdate(): Promise<{ skill_name: string; active: boolean; description: string; body: string }>
```

<sub>`PATCH /api/projects/{project_id}/review_hog/blind_spots/{skill_name}/` · `review_hog_blind_spots_partial_update`</sub>

## `posthog.reviewHogPerspectivesList`

List review perspectives and their enablement

```ts
posthog.reviewHogPerspectivesList(): Promise<({ skill_name: string; enabled: boolean; description: string; body: string })[]>
```

<sub>`GET /api/projects/{project_id}/review_hog/perspectives/` · `review_hog_perspectives_list`</sub>

## `posthog.reviewHogPerspectivesPartialUpdate`

Enable or disable a review perspective

```ts
posthog.reviewHogPerspectivesPartialUpdate(): Promise<{ skill_name: string; enabled: boolean; description: string; body: string }>
```

<sub>`PATCH /api/projects/{project_id}/review_hog/perspectives/{skill_name}/` · `review_hog_perspectives_partial_update`</sub>

## `posthog.reviewHogReviewsList`

List recent reviews

```ts
posthog.reviewHogReviewsList(): Promise<{ results: ({ id: string; repository: string; pr_number: number | null; pr_title: string | null; pr_author: string | null; additions: number | null; deletions: number | null; changed_files: number | null; head_branch: string; github_url: string; run_count: number; last_run_at: string | null; published: boolean; in_progress: boolean; progress: { review_stage: "fetching" | "chunking" | "selecting" ...>
```

<sub>`GET /api/projects/{project_id}/review_hog/reviews/` · `review_hog_reviews_list`</sub>

## `posthog.reviewHogReviewsRetrieve`

Retrieve one review's detail

```ts
posthog.reviewHogReviewsRetrieve(): Promise<{ id: string; repository: string; pr_number: number | null; pr_title: string | null; pr_author: string | null; additions: number | null; deletions: number | null; changed_files: number | null; head_branch: string; github_url: string; run_count: number; last_run_at: string | null; published: boolean; in_progress: boolean; progress: { review_stage: "fetching" | "chunking" | "selecting" | "reviewing...>
```

<sub>`GET /api/projects/{project_id}/review_hog/reviews/{id}/` · `review_hog_reviews_retrieve`</sub>

## `posthog.reviewHogReviewsPerspectiveStatsRetrieve`

Perspective effectiveness stats

```ts
posthog.reviewHogReviewsPerspectiveStatsRetrieve(): Promise<{ report_count: number; perspectives: ({ skill_name: string; raised: number; kept: number; dismissed: number })[] }>
```

<sub>`GET /api/projects/{project_id}/review_hog/reviews/perspective_stats/` · `review_hog_reviews_perspective_stats_retrieve`</sub>

## `posthog.reviewHogReviewsTriggerCreate`

Start a review of a pull request

```ts
posthog.reviewHogReviewsTriggerCreate(): Promise<{ workflow_id: string; status: string }>
```

<sub>`POST /api/projects/{project_id}/review_hog/reviews/trigger/` · `review_hog_reviews_trigger_create`</sub>

## `posthog.reviewHogValidatorsList`

List review validators and which one is active

```ts
posthog.reviewHogValidatorsList(): Promise<({ skill_name: string; active: boolean; description: string; body: string })[]>
```

<sub>`GET /api/projects/{project_id}/review_hog/validators/` · `review_hog_validators_list`</sub>

## `posthog.reviewHogValidatorsPartialUpdate`

Select the active review validator

```ts
posthog.reviewHogValidatorsPartialUpdate(): Promise<{ skill_name: string; active: boolean; description: string; body: string }>
```

<sub>`PATCH /api/projects/{project_id}/review_hog/validators/{skill_name}/` · `review_hog_validators_partial_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
