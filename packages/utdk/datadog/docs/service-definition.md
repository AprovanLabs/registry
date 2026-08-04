# Service Definition

4 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listServiceDefinitions`

Get all service definitions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listServiceDefinitions(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  schema_version?: ServiceDefinitionSchemaVersions;
}): Promise<ServiceDefinitionsListResponse>
```

<sub>`GET /api/v2/services/definitions` · `ListServiceDefinitions`</sub>

## `datadog.createOrUpdateServiceDefinitions`

Create or update service definition — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOrUpdateServiceDefinitions(input: {
  body: ServiceDefinitionsCreateRequest;
}): Promise<ServiceDefinitionCreateResponse>
```

<sub>`POST /api/v2/services/definitions` · `CreateOrUpdateServiceDefinitions`</sub>

## `datadog.deleteServiceDefinition`

Delete a single service definition — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteServiceDefinition(input: {
  /** The name of the service. */
  service_name: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/services/definitions/{service_name}` · `DeleteServiceDefinition`</sub>

## `datadog.getServiceDefinition`

Get a single service definition — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getServiceDefinition(input: {
  /** The name of the service. */
  service_name: string;
  schema_version?: ServiceDefinitionSchemaVersions;
}): Promise<ServiceDefinitionGetResponse>
```

<sub>`GET /api/v2/services/definitions/{service_name}` · `GetServiceDefinition`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
