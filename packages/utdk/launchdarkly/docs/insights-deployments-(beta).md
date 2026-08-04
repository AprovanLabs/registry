# Insights Deployments (Beta)

4 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.createDeploymentEvent`

Create deployment event — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createDeploymentEvent(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The application key. This defines the granularity at which you want to view your insights metrics. Typically it is the name of one of the GitHub repositories that you use in this project.<br/><br/>LaunchDarkly automatically creates a new application each time you send a unique application key. */
  applicationKey: string;
  /** The application name. This defines how the application is displayed */
  applicationName?: string;
  /** The kind of application. Default: <code>server</code> */
  applicationKind?: "server" | "browser" | "mobile";
  /** The application version. You can set the application version to any string that includes only letters, numbers, periods (<code>.</code>), hyphens (<code>-</code>), or underscores (<code>_</code>).<br/><br/>We recommend setting the application version to at least the first seven characters of the SHA or to the tag of the GitHub commit for this deployment. */
  version: string;
  /** The version name. This defines how the version is displayed */
  versionName?: string;
  /** The event type */
  eventType: "started" | "failed" | "finished" | "custom";
  /** The time, in Unix milliseconds, when the event occurred. If not included, the time will default to when the event is processed and stored in LaunchDarkly. */
  eventTime?: UnixMillis;
  /** A JSON object containing metadata about the event */
  eventMetadata?: { [key: string]: unknown | undefined };
  /** A JSON object containing metadata about the deployment */
  deploymentMetadata?: { [key: string]: unknown | undefined };
}): Promise<undefined>
```

<sub>`POST /api/v2/engineering-insights/deployment-events` · `createDeploymentEvent`</sub>

## `launchdarkly.getDeployments`

List deployments — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getDeployments(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** Comma separated list of application keys */
  applicationKey?: string;
  /** The number of deployments to return. Default is 20. Maximum allowed is 100. */
  limit?: number;
  /** Expand properties in response. Options: `pullRequests`, `flagReferences` */
  expand?: string;
  /** Unix timestamp in milliseconds. Default value is 7 days ago. */
  from?: number;
  /** Unix timestamp in milliseconds. Default value is now. */
  to?: number;
  /** Identifier used for pagination */
  after?: string;
  /** Identifier used for pagination */
  before?: string;
  /** The deployment kind */
  kind?: string;
  /** The deployment status */
  status?: string;
}): Promise<DeploymentCollectionRep>
```

<sub>`GET /api/v2/engineering-insights/deployments` · `getDeployments`</sub>

## `launchdarkly.getDeployment`

Get deployment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getDeployment(input: {
  /** The deployment ID */
  deploymentID: string;
  /** Expand properties in response. Options: `pullRequests`, `flagReferences` */
  expand?: string;
}): Promise<DeploymentRep>
```

<sub>`GET /api/v2/engineering-insights/deployments/{deploymentID}` · `getDeployment`</sub>

## `launchdarkly.updateDeployment`

Update deployment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.updateDeployment(input: {
  body: JsonPatch;
  /** The deployment ID */
  deploymentID: string;
}): Promise<DeploymentRep>
```

<sub>`PATCH /api/v2/engineering-insights/deployments/{deploymentID}` · `updateDeployment`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
