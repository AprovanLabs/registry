# Integrations (Beta)

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.deleteIntegrationConfiguration`

Delete integration configuration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteIntegrationConfiguration(input: {
  /** The ID of the integration configuration to be deleted */
  integrationConfigurationId: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration-configurations/{integrationConfigurationId}` · `deleteIntegrationConfiguration`</sub>

## `launchdarkly.getIntegrationConfiguration`

Get an integration configuration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getIntegrationConfiguration(input: {
  /** Integration configuration ID */
  integrationConfigurationId: string;
}): Promise<IntegrationConfigurationsRep>
```

<sub>`GET /api/v2/integration-configurations/{integrationConfigurationId}` · `getIntegrationConfiguration`</sub>

## `launchdarkly.updateIntegrationConfiguration`

Update integration configuration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.updateIntegrationConfiguration(input: {
  body: JsonPatch;
  /** The ID of the integration configuration */
  integrationConfigurationId: string;
}): Promise<IntegrationConfigurationsRep>
```

<sub>`PATCH /api/v2/integration-configurations/{integrationConfigurationId}` · `updateIntegrationConfiguration`</sub>

## `launchdarkly.getAllIntegrationConfigurations`

Get all configurations for the integration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAllIntegrationConfigurations(input: {
  /** Integration key */
  integrationKey: string;
}): Promise<IntegrationConfigurationCollectionRep>
```

<sub>`GET /api/v2/integration-configurations/keys/{integrationKey}` · `getAllIntegrationConfigurations`</sub>

## `launchdarkly.createIntegrationConfiguration`

Create integration configuration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createIntegrationConfiguration(input: {
  /** The name of the integration configuration */
  name: string;
  /** Whether the integration configuration is enabled. If omitted, defaults to true */
  enabled?: boolean;
  /** Tags for the integration */
  tags?: (string)[];
  /** The unique set of fields required to configure the integration. Refer to the <code>formVariables</code> field in the corresponding <code>manifest.json</code> at https://github.com/launchdarkly/integration-framework/tree/main/integrations for a full list of fields for the integration you wish to configure. */
  configValues: { [key: string]: unknown | undefined };
  /** The capability configuration for the integration */
  capabilityConfig?: CapabilityConfigPost;
  /** The integration key */
  integrationKey: string;
}): Promise<IntegrationConfigurationsRep>
```

<sub>`POST /api/v2/integration-configurations/keys/{integrationKey}` · `createIntegrationConfiguration`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
