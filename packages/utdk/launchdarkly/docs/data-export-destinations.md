# Data Export Destinations

10 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getDestinations`

List destinations — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getDestinations(): Promise<Destinations>
```

<sub>`GET /api/v2/destinations` · `getDestinations`</sub>

## `launchdarkly.postDestination`

Create Data Export destination — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postDestination(input: {
  /** A human-readable name for your Data Export destination */
  name?: string;
  /** The type of Data Export destination */
  kind?: "google-pubsub" | "kinesis" | "mparticle" | "segment" | "azure-event-hubs" | "snowflake-v2" | "databricks" | "bigquery" | "redshift";
  /** An object with the configuration parameters required for the destination type */
  config?: unknown;
  /** Whether the export is on. Displayed as the integration status in the LaunchDarkly UI. */
  on?: boolean;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<Destination>
```

<sub>`POST /api/v2/destinations/{projectKey}/{environmentKey}` · `postDestination`</sub>

## `launchdarkly.deleteDestination`

Delete Data Export destination — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteDestination(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The Data Export destination ID */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/destinations/{projectKey}/{environmentKey}/{id}` · `deleteDestination`</sub>

## `launchdarkly.getDestination`

Get destination — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getDestination(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The Data Export destination ID */
  id: string;
}): Promise<Destination>
```

<sub>`GET /api/v2/destinations/{projectKey}/{environmentKey}/{id}` · `getDestination`</sub>

## `launchdarkly.patchDestination`

Update Data Export destination — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchDestination(input: {
  body: JsonPatch;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The Data Export destination ID */
  id: string;
}): Promise<Destination>
```

<sub>`PATCH /api/v2/destinations/{projectKey}/{environmentKey}/{id}` · `patchDestination`</sub>

## `launchdarkly.postGenerateWarehouseDestinationKeyPair`

Generate Snowflake destination key pair — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postGenerateWarehouseDestinationKeyPair(): Promise<GenerateWarehouseDestinationKeyPairPostRep>
```

<sub>`POST /api/v2/destinations/generate-warehouse-destination-key-pair` · `postGenerateWarehouseDestinationKeyPair`</sub>

## `launchdarkly.postGenerateTrustPolicy`

Generate trust policy — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postGenerateTrustPolicy(input: {
  /** The project key */
  projKey: string;
  /** The environment key */
  envKey: string;
}): Promise<GenerateTrustPolicyPostRep>
```

<sub>`POST /api/v2/destinations/projects/{projKey}/environments/{envKey}/generate-trust-policy` · `postGenerateTrustPolicy`</sub>

## `launchdarkly.postGenerateProjectEnvWarehouseDestinationKeyPair`

Generate Snowflake destination key pair — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postGenerateProjectEnvWarehouseDestinationKeyPair(input: {
  /** The project key */
  projKey: string;
  /** The environment key */
  envKey: string;
}): Promise<GenerateWarehouseDestinationKeyPairPostRep>
```

<sub>`POST /api/v2/destinations/projects/{projKey}/environments/{envKey}/generate-warehouse-destination-key-pair` · `postGenerateProjectEnvWarehouseDestinationKeyPair`</sub>

## `launchdarkly.postCompleteWarehouseDestinationSetup`

Complete warehouse destination setup — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postCompleteWarehouseDestinationSetup(input: {
  publicKey?: string;
  /** The project key */
  projKey: string;
  /** The environment key */
  envKey: string;
  /** The destination kind (snowflake-v2, bigquery, clickhouse, redshift, databricks) */
  kind: string;
}): Promise<Destination>
```

<sub>`POST /api/v2/destinations/projects/{projKey}/environments/{envKey}/kinds/{kind}/complete-setup` · `postCompleteWarehouseDestinationSetup`</sub>

## `launchdarkly.postGenerateWarehouseDestinationSetupScript`

Generate warehouse destination setup script — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postGenerateWarehouseDestinationSetupScript(input: {
  name?: string;
  snowflakeHostAddress?: string;
  databaseName?: string;
  warehouseName?: string;
  roleName?: string;
  schemaName?: string;
  userName?: string;
  includeNetworkPolicy?: boolean;
  clusterIdentifier?: string;
  clusterRegion?: string;
  clusterAwsAccountId?: string;
  endpoint?: string;
  clickHouseDatabaseName?: string;
  clickHouseUserName?: string;
  clickHouseS3BucketName?: string;
  clickHouseIncludeHostRestriction?: boolean;
  clickHouseServiceRoleArn?: string;
  clickHousePassword?: string;
  s3BucketName?: string;
  /** The project key */
  projKey: string;
  /** The environment key */
  envKey: string;
  /** The destination kind (snowflake-v2, redshift, clickhouse) */
  kind: string;
}): Promise<WarehouseDestinationSetupScriptRep>
```

<sub>`POST /api/v2/destinations/projects/{projKey}/environments/{envKey}/kinds/{kind}/setup` · `postGenerateWarehouseDestinationSetupScript`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
