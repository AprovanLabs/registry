# Cloud Authentication

4 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listAwsCloudAuthPersonaMappings`

List AWS cloud authentication persona mappings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAwsCloudAuthPersonaMappings(): Promise<AwsCloudAuthPersonaMappingsResponse>
```

<sub>`GET /api/v2/cloud_auth/aws/persona_mapping` · `ListAWSCloudAuthPersonaMappings`</sub>

## `datadog.createAwsCloudAuthPersonaMapping`

Create an AWS cloud authentication persona mapping — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createAwsCloudAuthPersonaMapping(input: {
  data: AwsCloudAuthPersonaMappingCreateData;
}): Promise<AwsCloudAuthPersonaMappingResponse>
```

<sub>`POST /api/v2/cloud_auth/aws/persona_mapping` · `CreateAWSCloudAuthPersonaMapping`</sub>

## `datadog.deleteAwsCloudAuthPersonaMapping`

Delete an AWS cloud authentication persona mapping — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteAwsCloudAuthPersonaMapping(input: {
  /** The ID of the persona mapping */
  persona_mapping_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cloud_auth/aws/persona_mapping/{persona_mapping_id}` · `DeleteAWSCloudAuthPersonaMapping`</sub>

## `datadog.getAwsCloudAuthPersonaMapping`

Get an AWS cloud authentication persona mapping — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAwsCloudAuthPersonaMapping(input: {
  /** The ID of the persona mapping */
  persona_mapping_id: string;
}): Promise<AwsCloudAuthPersonaMappingResponse>
```

<sub>`GET /api/v2/cloud_auth/aws/persona_mapping/{persona_mapping_id}` · `GetAWSCloudAuthPersonaMapping`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
