# Model Lab API

16 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getModelLabArtifactContent`

Get Model Lab artifact content — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getModelLabArtifactContent(input: {
  /** ID of the project. */
  project_id: string;
  /** Path to the artifact relative to the project directory. */
  artifact_path: string;
}): Promise<string>
```

<sub>`GET /api/v2/model-lab-api/artifacts/content` · `GetModelLabArtifactContent`</sub>

## `datadog.listModelLabRunFacetKeys`

List Model Lab run facet keys — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listModelLabRunFacetKeys(input: {
  /** Filter by project ID. */
  "filter[project_id]": number;
}): Promise<ModelLabFacetKeysResponse>
```

<sub>`GET /api/v2/model-lab-api/facet-keys` · `ListModelLabRunFacetKeys`</sub>

## `datadog.listModelLabRunFacetValues`

List Model Lab run facet values — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listModelLabRunFacetValues(input: {
  /** Filter by project ID. */
  "filter[project_id]": number;
  facet_type: ModelLabFacetType;
  /** Facet name. */
  facet_name: string;
}): Promise<ModelLabFacetValuesResponse>
```

<sub>`GET /api/v2/model-lab-api/facet-values` · `ListModelLabRunFacetValues`</sub>

## `datadog.listModelLabProjectFacetKeys`

List Model Lab project facet keys — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listModelLabProjectFacetKeys(): Promise<ModelLabFacetKeysResponse>
```

<sub>`GET /api/v2/model-lab-api/project-facet-keys` · `ListModelLabProjectFacetKeys`</sub>

## `datadog.listModelLabProjectFacetValues`

List Model Lab project facet values — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listModelLabProjectFacetValues(input: {
  facet_type: ModelLabProjectFacetType;
  /** Facet name. */
  facet_name: string;
}): Promise<ModelLabFacetValuesResponse>
```

<sub>`GET /api/v2/model-lab-api/project-facet-values` · `ListModelLabProjectFacetValues`</sub>

## `datadog.listModelLabProjects`

List Model Lab projects — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listModelLabProjects(input: {
  /** Text search filter for project name or description. */
  filter?: string;
  /** Filter by owner UUID. */
  "filter[owner_id]"?: string;
  /** Filter by tags. Format: key:value,key2:value2. */
  "filter[tags]"?: string;
  /** Sort field. Valid values: name, created_at, updated_at. Prefix with '-' for descending order (e.g., -updated_at). */
  sort?: string;
  /** Number of items per page. Maximum is 100. */
  "page[size]"?: number;
  /** Page number (1-indexed). */
  "page[number]"?: number;
}): Promise<ModelLabProjectsResponse>
```

<sub>`GET /api/v2/model-lab-api/projects` · `ListModelLabProjects`</sub>

## `datadog.getModelLabProject`

Get a Model Lab project — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getModelLabProject(input: {
  /** The ID of the Model Lab project. */
  project_id: number;
}): Promise<ModelLabProjectResponse>
```

<sub>`GET /api/v2/model-lab-api/projects/{project_id}` · `GetModelLabProject`</sub>

## `datadog.listModelLabProjectArtifacts`

List Model Lab project artifacts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listModelLabProjectArtifacts(input: {
  /** The ID of the Model Lab project. */
  project_id: number;
}): Promise<ModelLabProjectArtifactsResponse>
```

<sub>`GET /api/v2/model-lab-api/projects/{project_id}/artifacts` · `ListModelLabProjectArtifacts`</sub>

## `datadog.unstarModelLabProject`

Remove star from a Model Lab project — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.unstarModelLabProject(input: {
  /** The ID of the Model Lab project. */
  project_id: number;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/model-lab-api/projects/{project_id}/star` · `UnstarModelLabProject`</sub>

## `datadog.starModelLabProject`

Star a Model Lab project — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.starModelLabProject(input: {
  /** The ID of the Model Lab project. */
  project_id: number;
}): Promise<undefined>
```

<sub>`POST /api/v2/model-lab-api/projects/{project_id}/star` · `StarModelLabProject`</sub>

## `datadog.listModelLabRuns`

List Model Lab runs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listModelLabRuns(input: {
  /** Filter by run ID(s). Comma-separated list for multiple IDs. */
  "filter[id]"?: string;
  /** Text search filter for run name or description. */
  filter?: string;
  /** Filter by owner UUID. */
  "filter[owner_id]"?: string;
  "filter[status]"?: ModelLabRunStatus;
  /** Filter by project ID. */
  "filter[project_id]"?: number;
  /** Filter by tags. Format: key:value,key2:value2. */
  "filter[tags]"?: string;
  /** Filter by params. Format: key:value,key2:>0.5,key3:true. */
  "filter[params]"?: string;
  /** Filter by parent run ID. Use 'null' to return only root runs (runs with no parent). */
  "filter[parent_run_id]"?: string;
  /** Sort pinned runs before non-pinned runs. Pinned runs are ordered by pin time descending. */
  pinned_first?: boolean;
  /** Include all runs pinned by the current user, regardless of other filters. */
  include_pinned?: boolean;
  /** When true, also return runs whose descendants match the active filters. The descendant_match field in each result indicates whether the run was included via a descendant match. */
  include_descendant_matches?: boolean;
  /** Sort field. Valid values: name, created_at, updated_at, duration. Prefix with '-' for descending order (e.g., -updated_at). */
  sort?: string;
  /** Number of items per page. Maximum is 100. */
  "page[size]"?: number;
  /** Page number (1-indexed). */
  "page[number]"?: number;
}): Promise<ModelLabRunsResponse>
```

<sub>`GET /api/v2/model-lab-api/runs` · `ListModelLabRuns`</sub>

## `datadog.deleteModelLabRun`

Delete a Model Lab run — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteModelLabRun(input: {
  /** The ID of the Model Lab run. */
  run_id: number;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/model-lab-api/runs/{run_id}` · `DeleteModelLabRun`</sub>

## `datadog.getModelLabRun`

Get a Model Lab run — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getModelLabRun(input: {
  /** The ID of the Model Lab run. */
  run_id: number;
}): Promise<ModelLabRunResponse>
```

<sub>`GET /api/v2/model-lab-api/runs/{run_id}` · `GetModelLabRun`</sub>

## `datadog.listModelLabRunArtifacts`

List Model Lab run artifacts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listModelLabRunArtifacts(input: {
  /** The ID of the Model Lab run. */
  run_id: number;
  /** Optional subdirectory path within the run's artifacts. */
  path?: string;
}): Promise<ModelLabRunArtifactsResponse>
```

<sub>`GET /api/v2/model-lab-api/runs/{run_id}/artifacts` · `ListModelLabRunArtifacts`</sub>

## `datadog.unpinModelLabRun`

Unpin a Model Lab run — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.unpinModelLabRun(input: {
  /** The ID of the Model Lab run. */
  run_id: number;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/model-lab-api/runs/{run_id}/pin` · `UnpinModelLabRun`</sub>

## `datadog.pinModelLabRun`

Pin a Model Lab run — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.pinModelLabRun(input: {
  /** The ID of the Model Lab run. */
  run_id: number;
}): Promise<undefined>
```

<sub>`POST /api/v2/model-lab-api/runs/{run_id}/pin` · `PinModelLabRun`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
