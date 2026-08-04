# Observability Pipelines

6 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listPipelines`

List pipelines — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listPipelines(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
}): Promise<ListPipelinesResponse>
```

<sub>`GET /api/v2/obs-pipelines/pipelines` · `ListPipelines`</sub>

## `datadog.createPipeline`

Create a new pipeline — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createPipeline(input: {
  data: ObservabilityPipelineSpecData;
}): Promise<ObservabilityPipeline>
```

<sub>`POST /api/v2/obs-pipelines/pipelines` · `CreatePipeline`</sub>

## `datadog.deletePipeline`

Delete a pipeline — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deletePipeline(input: {
  /** The ID of the pipeline to delete. */
  pipeline_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/obs-pipelines/pipelines/{pipeline_id}` · `DeletePipeline`</sub>

## `datadog.getPipeline`

Get a specific pipeline — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getPipeline(input: {
  /** The ID of the pipeline to retrieve. */
  pipeline_id: string;
}): Promise<ObservabilityPipeline>
```

<sub>`GET /api/v2/obs-pipelines/pipelines/{pipeline_id}` · `GetPipeline`</sub>

## `datadog.updatePipeline`

Update a pipeline — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updatePipeline(input: {
  data: ObservabilityPipelineData;
  /** The ID of the pipeline to update. */
  pipeline_id: string;
}): Promise<ObservabilityPipeline>
```

<sub>`PUT /api/v2/obs-pipelines/pipelines/{pipeline_id}` · `UpdatePipeline`</sub>

## `datadog.validatePipeline`

Validate an observability pipeline — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.validatePipeline(input: {
  data: ObservabilityPipelineSpecData;
}): Promise<ValidationResponse>
```

<sub>`POST /api/v2/obs-pipelines/pipelines/validate` · `ValidatePipeline`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
