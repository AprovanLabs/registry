# Persistent Store Integrations (Beta)

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getBigSegmentStoreIntegrations`

List all big segment store integrations — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getBigSegmentStoreIntegrations(): Promise<BigSegmentStoreIntegrationCollection>
```

<sub>`GET /api/v2/integration-capabilities/big-segment-store` · `getBigSegmentStoreIntegrations`</sub>

## `launchdarkly.createBigSegmentStoreIntegration`

Create big segment store integration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createBigSegmentStoreIntegration(input: {
  /** Whether the integration configuration is active. Default value is false. */
  on?: boolean;
  /** The global integration settings, as specified by the <code>formVariables</code> in the <code>manifest.json</code> for this integration. */
  config: FormVariableConfig;
  /** Tags to associate with the integration */
  tags?: (string)[];
  /** Name to identify the integration */
  name?: string;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The integration key, either `redis` or `dynamodb` */
  integrationKey: string;
}): Promise<BigSegmentStoreIntegration>
```

<sub>`POST /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}` · `createBigSegmentStoreIntegration`</sub>

## `launchdarkly.deleteBigSegmentStoreIntegration`

Delete big segment store integration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteBigSegmentStoreIntegration(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The integration key, either `redis` or `dynamodb` */
  integrationKey: string;
  /** The integration ID */
  integrationId: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}` · `deleteBigSegmentStoreIntegration`</sub>

## `launchdarkly.getBigSegmentStoreIntegration`

Get big segment store integration by ID — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getBigSegmentStoreIntegration(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The integration key, either `redis` or `dynamodb` */
  integrationKey: string;
  /** The integration ID */
  integrationId: string;
}): Promise<BigSegmentStoreIntegration>
```

<sub>`GET /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}` · `getBigSegmentStoreIntegration`</sub>

## `launchdarkly.patchBigSegmentStoreIntegration`

Update big segment store integration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchBigSegmentStoreIntegration(input: {
  body: JsonPatch;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The integration key, either `redis` or `dynamodb` */
  integrationKey: string;
  /** The integration ID */
  integrationId: string;
}): Promise<BigSegmentStoreIntegration>
```

<sub>`PATCH /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}` · `patchBigSegmentStoreIntegration`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
