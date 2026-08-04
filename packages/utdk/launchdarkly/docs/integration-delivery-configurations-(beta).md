# Integration Delivery Configurations (Beta)

7 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getIntegrationDeliveryConfigurations`

List all delivery configurations — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getIntegrationDeliveryConfigurations(): Promise<IntegrationDeliveryConfigurationCollection>
```

<sub>`GET /api/v2/integration-capabilities/featureStore` · `getIntegrationDeliveryConfigurations`</sub>

## `launchdarkly.getIntegrationDeliveryConfigurationByEnvironment`

Get delivery configurations by environment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getIntegrationDeliveryConfigurationByEnvironment(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<IntegrationDeliveryConfigurationCollection>
```

<sub>`GET /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}` · `getIntegrationDeliveryConfigurationByEnvironment`</sub>

## `launchdarkly.createIntegrationDeliveryConfiguration`

Create delivery configuration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createIntegrationDeliveryConfiguration(input: {
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
  /** The integration key */
  integrationKey: string;
}): Promise<IntegrationDeliveryConfiguration>
```

<sub>`POST /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}` · `createIntegrationDeliveryConfiguration`</sub>

## `launchdarkly.deleteIntegrationDeliveryConfiguration`

Delete delivery configuration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteIntegrationDeliveryConfiguration(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The integration key */
  integrationKey: string;
  /** The configuration ID */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}` · `deleteIntegrationDeliveryConfiguration`</sub>

## `launchdarkly.getIntegrationDeliveryConfigurationById`

Get delivery configuration by ID — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getIntegrationDeliveryConfigurationById(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The integration key */
  integrationKey: string;
  /** The configuration ID */
  id: string;
}): Promise<IntegrationDeliveryConfiguration>
```

<sub>`GET /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}` · `getIntegrationDeliveryConfigurationById`</sub>

## `launchdarkly.patchIntegrationDeliveryConfiguration`

Update delivery configuration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchIntegrationDeliveryConfiguration(input: {
  body: JsonPatch;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The integration key */
  integrationKey: string;
  /** The configuration ID */
  id: string;
}): Promise<IntegrationDeliveryConfiguration>
```

<sub>`PATCH /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}` · `patchIntegrationDeliveryConfiguration`</sub>

## `launchdarkly.validateIntegrationDeliveryConfiguration`

Validate delivery configuration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.validateIntegrationDeliveryConfiguration(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The integration key */
  integrationKey: string;
  /** The configuration ID */
  id: string;
}): Promise<IntegrationDeliveryConfigurationResponse>
```

<sub>`POST /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}/validate` · `validateIntegrationDeliveryConfiguration`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
