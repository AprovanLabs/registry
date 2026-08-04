# Evaluation Runs

1 operation · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.evaluationRunsCreate`

Create a new evaluation run. This endpoint validates the request and enqueues a Temporal workflow to asynchronously execute the evaluation.

```ts
posthog.evaluationRunsCreate(): Promise<{ [key: string]: unknown }>
```

<sub>`POST /api/projects/{project_id}/evaluation_runs/` · `evaluation_runs_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
