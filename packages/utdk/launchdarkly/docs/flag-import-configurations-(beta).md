# Flag Import Configurations (Beta)

6 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getFlagImportConfigurations`

List all flag import configurations — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getFlagImportConfigurations(): Promise<FlagImportIntegrationCollection>
```

<sub>`GET /api/v2/integration-capabilities/flag-import` · `getFlagImportConfigurations`</sub>

## `launchdarkly.createFlagImportConfiguration`

Create a flag import configuration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createFlagImportConfiguration(input: {
  /** The global configuration settings, as specified by the <code>formVariables</code> in the <code>manifest.json</code> for this configuration. */
  config: FormVariableConfig;
  /** Tags to associate with the configuration */
  tags?: (string)[];
  /** Name to identify the configuration */
  name?: string;
  /** The project key */
  projectKey: string;
  /** The integration key */
  integrationKey: string;
}): Promise<FlagImportIntegration>
```

<sub>`POST /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}` · `createFlagImportConfiguration`</sub>

## `launchdarkly.deleteFlagImportConfiguration`

Delete a flag import configuration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteFlagImportConfiguration(input: {
  /** The project key */
  projectKey: string;
  /** The integration key */
  integrationKey: string;
  /** The integration ID */
  integrationId: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}` · `deleteFlagImportConfiguration`</sub>

## `launchdarkly.getFlagImportConfiguration`

Get a single flag import configuration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getFlagImportConfiguration(input: {
  /** The project key */
  projectKey: string;
  /** The integration key, for example, `split` */
  integrationKey: string;
  /** The integration ID */
  integrationId: string;
}): Promise<FlagImportIntegration>
```

<sub>`GET /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}` · `getFlagImportConfiguration`</sub>

## `launchdarkly.patchFlagImportConfiguration`

Update a flag import configuration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchFlagImportConfiguration(input: {
  body: JsonPatch;
  /** The project key */
  projectKey: string;
  /** The integration key */
  integrationKey: string;
  /** The integration ID */
  integrationId: string;
}): Promise<FlagImportIntegration>
```

<sub>`PATCH /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}` · `patchFlagImportConfiguration`</sub>

## `launchdarkly.triggerFlagImportJob`

Trigger a single flag import run — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.triggerFlagImportJob(input: {
  /** The project key */
  projectKey: string;
  /** The integration key */
  integrationKey: string;
  /** The integration ID */
  integrationId: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}/trigger` · `triggerFlagImportJob`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
