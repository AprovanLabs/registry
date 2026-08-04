# Usage

9 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.usageCosts`

Get costs details for the organization. — [Provider docs](https://help.openai.com/)

```ts
openai.usageCosts(input: {
  /** Start time (Unix seconds) of the query time range, inclusive. */
  start_time: number;
  /** End time (Unix seconds) of the query time range, exclusive. */
  end_time?: number;
  /** Width of each time bucket in response. Currently only `1d` is supported, default to `1d`. */
  bucket_width?: "1d";
  /** Return only costs for these projects. */
  project_ids?: (string)[];
  /** Group the costs by the specified fields. Support fields include `project_id`, `line_item` and any combination of them. */
  group_by?: ("project_id" | "line_item")[];
  /** A limit on the number of buckets to be returned. Limit can range between 1 and 180, and the default is 7.  */
  limit?: number;
  /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
  page?: string;
}): Promise<UsageResponse>
```

<sub>`GET /organization/costs` · `usage-costs`</sub>

## `openai.usageAudioSpeeches`

Get audio speeches usage details for the organization. — [Provider docs](https://help.openai.com/)

```ts
openai.usageAudioSpeeches(input: {
  /** Start time (Unix seconds) of the query time range, inclusive. */
  start_time: number;
  /** End time (Unix seconds) of the query time range, exclusive. */
  end_time?: number;
  /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
  bucket_width?: "1m" | "1h" | "1d";
  /** Return only usage for these projects. */
  project_ids?: (string)[];
  /** Return only usage for these users. */
  user_ids?: (string)[];
  /** Return only usage for these API keys. */
  api_key_ids?: (string)[];
  /** Return only usage for these models. */
  models?: (string)[];
  /** Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them. */
  group_by?: ("project_id" | "user_id" | "api_key_id" | "model")[];
  /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
  limit?: number;
  /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
  page?: string;
}): Promise<UsageResponse>
```

<sub>`GET /organization/usage/audio_speeches` · `usage-audio-speeches`</sub>

## `openai.usageAudioTranscriptions`

Get audio transcriptions usage details for the organization. — [Provider docs](https://help.openai.com/)

```ts
openai.usageAudioTranscriptions(input: {
  /** Start time (Unix seconds) of the query time range, inclusive. */
  start_time: number;
  /** End time (Unix seconds) of the query time range, exclusive. */
  end_time?: number;
  /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
  bucket_width?: "1m" | "1h" | "1d";
  /** Return only usage for these projects. */
  project_ids?: (string)[];
  /** Return only usage for these users. */
  user_ids?: (string)[];
  /** Return only usage for these API keys. */
  api_key_ids?: (string)[];
  /** Return only usage for these models. */
  models?: (string)[];
  /** Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them. */
  group_by?: ("project_id" | "user_id" | "api_key_id" | "model")[];
  /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
  limit?: number;
  /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
  page?: string;
}): Promise<UsageResponse>
```

<sub>`GET /organization/usage/audio_transcriptions` · `usage-audio-transcriptions`</sub>

## `openai.usageCodeInterpreterSessions`

Get code interpreter sessions usage details for the organization. — [Provider docs](https://help.openai.com/)

```ts
openai.usageCodeInterpreterSessions(input: {
  /** Start time (Unix seconds) of the query time range, inclusive. */
  start_time: number;
  /** End time (Unix seconds) of the query time range, exclusive. */
  end_time?: number;
  /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
  bucket_width?: "1m" | "1h" | "1d";
  /** Return only usage for these projects. */
  project_ids?: (string)[];
  /** Group the usage data by the specified fields. Support fields include `project_id`. */
  group_by?: ("project_id")[];
  /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
  limit?: number;
  /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
  page?: string;
}): Promise<UsageResponse>
```

<sub>`GET /organization/usage/code_interpreter_sessions` · `usage-code-interpreter-sessions`</sub>

## `openai.usageCompletions`

Get completions usage details for the organization. — [Provider docs](https://help.openai.com/)

```ts
openai.usageCompletions(input: {
  /** Start time (Unix seconds) of the query time range, inclusive. */
  start_time: number;
  /** End time (Unix seconds) of the query time range, exclusive. */
  end_time?: number;
  /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
  bucket_width?: "1m" | "1h" | "1d";
  /** Return only usage for these projects. */
  project_ids?: (string)[];
  /** Return only usage for these users. */
  user_ids?: (string)[];
  /** Return only usage for these API keys. */
  api_key_ids?: (string)[];
  /** Return only usage for these models. */
  models?: (string)[];
  /** If `true`, return batch jobs only. If `false`, return non-batch jobs only. By default, return both.  */
  batch?: boolean;
  /** Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model`, `batch` or any combination of them. */
  group_by?: ("project_id" | "user_id" | "api_key_id" | "model" | "batch")[];
  /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
  limit?: number;
  /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
  page?: string;
}): Promise<UsageResponse>
```

<sub>`GET /organization/usage/completions` · `usage-completions`</sub>

## `openai.usageEmbeddings`

Get embeddings usage details for the organization. — [Provider docs](https://help.openai.com/)

```ts
openai.usageEmbeddings(input: {
  /** Start time (Unix seconds) of the query time range, inclusive. */
  start_time: number;
  /** End time (Unix seconds) of the query time range, exclusive. */
  end_time?: number;
  /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
  bucket_width?: "1m" | "1h" | "1d";
  /** Return only usage for these projects. */
  project_ids?: (string)[];
  /** Return only usage for these users. */
  user_ids?: (string)[];
  /** Return only usage for these API keys. */
  api_key_ids?: (string)[];
  /** Return only usage for these models. */
  models?: (string)[];
  /** Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them. */
  group_by?: ("project_id" | "user_id" | "api_key_id" | "model")[];
  /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
  limit?: number;
  /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
  page?: string;
}): Promise<UsageResponse>
```

<sub>`GET /organization/usage/embeddings` · `usage-embeddings`</sub>

## `openai.usageImages`

Get images usage details for the organization. — [Provider docs](https://help.openai.com/)

```ts
openai.usageImages(input: {
  /** Start time (Unix seconds) of the query time range, inclusive. */
  start_time: number;
  /** End time (Unix seconds) of the query time range, exclusive. */
  end_time?: number;
  /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
  bucket_width?: "1m" | "1h" | "1d";
  /** Return only usages for these sources. Possible values are `image.generation`, `image.edit`, `image.variation` or any combination of them. */
  sources?: ("image.generation" | "image.edit" | "image.variation")[];
  /** Return only usages for these image sizes. Possible values are `256x256`, `512x512`, `1024x1024`, `1792x1792`, `1024x1792` or any combination of them. */
  sizes?: ("256x256" | "512x512" | "1024x1024" | "1792x1792" | "1024x1792")[];
  /** Return only usage for these projects. */
  project_ids?: (string)[];
  /** Return only usage for these users. */
  user_ids?: (string)[];
  /** Return only usage for these API keys. */
  api_key_ids?: (string)[];
  /** Return only usage for these models. */
  models?: (string)[];
  /** Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model`, `size`, `source` or any combination of them. */
  group_by?: ("project_id" | "user_id" | "api_key_id" | "model" | "size" | "source")[];
  /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
  limit?: number;
  /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
  page?: string;
}): Promise<UsageResponse>
```

<sub>`GET /organization/usage/images` · `usage-images`</sub>

## `openai.usageModerations`

Get moderations usage details for the organization. — [Provider docs](https://help.openai.com/)

```ts
openai.usageModerations(input: {
  /** Start time (Unix seconds) of the query time range, inclusive. */
  start_time: number;
  /** End time (Unix seconds) of the query time range, exclusive. */
  end_time?: number;
  /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
  bucket_width?: "1m" | "1h" | "1d";
  /** Return only usage for these projects. */
  project_ids?: (string)[];
  /** Return only usage for these users. */
  user_ids?: (string)[];
  /** Return only usage for these API keys. */
  api_key_ids?: (string)[];
  /** Return only usage for these models. */
  models?: (string)[];
  /** Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them. */
  group_by?: ("project_id" | "user_id" | "api_key_id" | "model")[];
  /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
  limit?: number;
  /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
  page?: string;
}): Promise<UsageResponse>
```

<sub>`GET /organization/usage/moderations` · `usage-moderations`</sub>

## `openai.usageVectorStores`

Get vector stores usage details for the organization. — [Provider docs](https://help.openai.com/)

```ts
openai.usageVectorStores(input: {
  /** Start time (Unix seconds) of the query time range, inclusive. */
  start_time: number;
  /** End time (Unix seconds) of the query time range, exclusive. */
  end_time?: number;
  /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
  bucket_width?: "1m" | "1h" | "1d";
  /** Return only usage for these projects. */
  project_ids?: (string)[];
  /** Group the usage data by the specified fields. Support fields include `project_id`. */
  group_by?: ("project_id")[];
  /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
  limit?: number;
  /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
  page?: string;
}): Promise<UsageResponse>
```

<sub>`GET /organization/usage/vector_stores` · `usage-vector-stores`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
