# Dedicated Inference

13 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.dedicatedInferencesList`

List Dedicated Inferences

```ts
digitalocean.dedicatedInferencesList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
  /** Filter by region. Dedicated Inference is only available in nyc2, tor1, and atl1. */
  region?: "nyc2" | "tor1" | "atl1";
}): Promise<{ dedicated_inferences: (DedicatedInference)[]; links: { pages?: { [key: string]: string | undefined } }; meta: { total: number } }>
```

<sub>`GET /v2/dedicated-inferences` · `dedicatedInferences_list`</sub>

## `digitalocean.dedicatedInferencesCreate`

Create a Dedicated Inference

```ts
digitalocean.dedicatedInferencesCreate(input: {
  spec: DedicatedInferenceSpec;
  /** Key-value pairs for provider tokens (e.g. Hugging Face). */
  access_tokens?: { [key: string]: string | undefined };
}): Promise<{ dedicated_inference?: DedicatedInference; token?: DedicatedInferenceAccessToken }>
```

<sub>`POST /v2/dedicated-inferences` · `dedicatedInferences_create`</sub>

## `digitalocean.dedicatedInferencesDelete`

Delete a Dedicated Inference

```ts
digitalocean.dedicatedInferencesDelete(input: {
  /** A unique identifier for a Dedicated Inference instance. */
  dedicated_inference_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/dedicated-inferences/{dedicated_inference_id}` · `dedicatedInferences_delete`</sub>

## `digitalocean.dedicatedInferencesGet`

Get a Dedicated Inference

```ts
digitalocean.dedicatedInferencesGet(input: {
  /** A unique identifier for a Dedicated Inference instance. */
  dedicated_inference_id: string;
}): Promise<{ dedicated_inference?: DedicatedInference }>
```

<sub>`GET /v2/dedicated-inferences/{dedicated_inference_id}` · `dedicatedInferences_get`</sub>

## `digitalocean.dedicatedInferencesPatch`

Update a Dedicated Inference

```ts
digitalocean.dedicatedInferencesPatch(input: {
  spec?: DedicatedInferenceSpec;
  /** Provider tokens for model access (e.g. gated Hugging Face models). */
  access_tokens?: { hugging_face_token?: string };
  /** A unique identifier for a Dedicated Inference instance. */
  dedicated_inference_id: string;
}): Promise<{ dedicated_inference?: DedicatedInference }>
```

<sub>`PATCH /v2/dedicated-inferences/{dedicated_inference_id}` · `dedicatedInferences_patch`</sub>

## `digitalocean.dedicatedInferencesListAccelerators`

List Dedicated Inference Accelerators

```ts
digitalocean.dedicatedInferencesListAccelerators(input: {
  /** A unique identifier for a Dedicated Inference instance. */
  dedicated_inference_id: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
  /** Filter accelerators by GPU slug. */
  slug?: string;
}): Promise<{ accelerators?: (DedicatedInferenceAccelerator)[] } & Pagination & Meta>
```

<sub>`GET /v2/dedicated-inferences/{dedicated_inference_id}/accelerators` · `dedicatedInferences_list_accelerators`</sub>

## `digitalocean.dedicatedInferencesGetAccelerator`

Get a Dedicated Inference Accelerator

```ts
digitalocean.dedicatedInferencesGetAccelerator(input: {
  /** A unique identifier for a Dedicated Inference instance. */
  dedicated_inference_id: string;
  /** A unique identifier for a Dedicated Inference accelerator. */
  accelerator_id: string;
}): Promise<DedicatedInferenceAccelerator>
```

<sub>`GET /v2/dedicated-inferences/{dedicated_inference_id}/accelerators/{accelerator_id}` · `dedicatedInferences_get_accelerator`</sub>

## `digitalocean.dedicatedInferencesGetCa`

Get Dedicated Inference CA Certificate

```ts
digitalocean.dedicatedInferencesGetCa(input: {
  /** A unique identifier for a Dedicated Inference instance. */
  dedicated_inference_id: string;
}): Promise<{ cert: string }>
```

<sub>`GET /v2/dedicated-inferences/{dedicated_inference_id}/ca` · `dedicatedInferences_get_ca`</sub>

## `digitalocean.dedicatedInferencesListTokens`

List Dedicated Inference Tokens

```ts
digitalocean.dedicatedInferencesListTokens(input: {
  /** A unique identifier for a Dedicated Inference instance. */
  dedicated_inference_id: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ tokens?: (DedicatedInferenceAccessToken)[] } & Pagination & Meta>
```

<sub>`GET /v2/dedicated-inferences/{dedicated_inference_id}/tokens` · `dedicatedInferences_list_tokens`</sub>

## `digitalocean.dedicatedInferencesCreateTokens`

Create a Dedicated Inference Token

```ts
digitalocean.dedicatedInferencesCreateTokens(input: {
  /** Name for the new token. */
  name: string;
  /** A unique identifier for a Dedicated Inference instance. */
  dedicated_inference_id: string;
}): Promise<{ token?: DedicatedInferenceAccessToken }>
```

<sub>`POST /v2/dedicated-inferences/{dedicated_inference_id}/tokens` · `dedicatedInferences_create_tokens`</sub>

## `digitalocean.dedicatedInferencesDeleteTokens`

Revoke a Dedicated Inference Token

```ts
digitalocean.dedicatedInferencesDeleteTokens(input: {
  /** A unique identifier for a Dedicated Inference instance. */
  dedicated_inference_id: string;
  /** A unique identifier for a Dedicated Inference access token. */
  token_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/dedicated-inferences/{dedicated_inference_id}/tokens/{token_id}` · `dedicatedInferences_delete_tokens`</sub>

## `digitalocean.dedicatedInferencesGetGpuModelConfig`

Get Dedicated Inference GPU Model Config

```ts
digitalocean.dedicatedInferencesGetGpuModelConfig(): Promise<DedicatedInferenceGpuModelConfigsResponse>
```

<sub>`GET /v2/dedicated-inferences/gpu-model-config` · `dedicatedInferences_get_gpu_model_config`</sub>

## `digitalocean.dedicatedInferencesListSizes`

List Dedicated Inference Sizes

```ts
digitalocean.dedicatedInferencesListSizes(): Promise<DedicatedInferenceSizesResponse>
```

<sub>`GET /v2/dedicated-inferences/sizes` · `dedicatedInferences_list_sizes`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
