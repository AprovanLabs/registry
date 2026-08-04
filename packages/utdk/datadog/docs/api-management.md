# API Management

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listApIs`

List APIs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listApIs(input: {
  /** Filter APIs by name */
  query?: string;
  /** Number of items per page. */
  "page[limit]"?: number;
  /** Offset for pagination. */
  "page[offset]"?: number;
}): Promise<ListApIsResponse>
```

<sub>`GET /api/v2/apicatalog/api` · `ListAPIs`</sub>

## `datadog.deleteOpenApi`

Delete an API — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteOpenApi(input: {
  id: ApiId;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/apicatalog/api/{id}` · `DeleteOpenAPI`</sub>

## `datadog.getOpenApi`

Get an API — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOpenApi(input: {
  id: ApiId;
}): Promise<string>
```

<sub>`GET /api/v2/apicatalog/api/{id}/openapi` · `GetOpenAPI`</sub>

## `datadog.updateOpenApi`

Update an API — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOpenApi(input: {
  /** Binary `OpenAPI` spec file */
  openapi_spec_file?: string;
  id: ApiId;
}): Promise<UpdateOpenApiResponse>
```

<sub>`PUT /api/v2/apicatalog/api/{id}/openapi` · `UpdateOpenAPI`</sub>

## `datadog.createOpenApi`

Create a new API — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOpenApi(input: {
  /** Binary `OpenAPI` spec file */
  openapi_spec_file?: string;
}): Promise<CreateOpenApiResponse>
```

<sub>`POST /api/v2/apicatalog/openapi` · `CreateOpenAPI`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
