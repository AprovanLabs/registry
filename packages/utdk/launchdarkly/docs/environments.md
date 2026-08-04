# Environments

7 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getEnvironmentsByProject`

List environments — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getEnvironmentsByProject(input: {
  /** The project key */
  projectKey: string;
  /** The number of environments to return in the response. Defaults to 20. */
  limit?: number;
  /** Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** A comma-separated list of filters. Each filter is of the form `field:value`. */
  filter?: string;
  /** A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. */
  sort?: string;
}): Promise<Environments>
```

<sub>`GET /api/v2/projects/{projectKey}/environments` · `getEnvironmentsByProject`</sub>

## `launchdarkly.postEnvironment`

Create environment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postEnvironment(input: {
  /** A human-friendly name for the new environment */
  name: string;
  /** A project-unique key for the new environment */
  key: string;
  /** A color to indicate this environment in the UI */
  color: string;
  /** The default time (in minutes) that the PHP SDK can cache feature flag rules locally */
  defaultTtl?: number;
  /** Ensures that one end user of the client-side SDK cannot inspect the variations for another end user */
  secureMode?: boolean;
  /** Enables tracking detailed information for new flags by default */
  defaultTrackEvents?: boolean;
  /** Requires confirmation for all flag and segment changes via the UI in this environment */
  confirmChanges?: boolean;
  /** Requires comments for all flag and segment changes via the UI in this environment */
  requireComments?: boolean;
  /** Tags to apply to the new environment */
  tags?: (string)[];
  /** Indicates that the new environment created will be cloned from the provided source environment */
  source?: SourceEnv;
  /** Whether the environment is critical */
  critical?: boolean;
  /** The project key */
  projectKey: string;
}): Promise<Environment>
```

<sub>`POST /api/v2/projects/{projectKey}/environments` · `postEnvironment`</sub>

## `launchdarkly.deleteEnvironment`

Delete environment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteEnvironment(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/environments/{environmentKey}` · `deleteEnvironment`</sub>

## `launchdarkly.getEnvironment`

Get environment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getEnvironment(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<Environment>
```

<sub>`GET /api/v2/projects/{projectKey}/environments/{environmentKey}` · `getEnvironment`</sub>

## `launchdarkly.patchEnvironment`

Update environment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchEnvironment(input: {
  body: JsonPatch;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<Environment>
```

<sub>`PATCH /api/v2/projects/{projectKey}/environments/{environmentKey}` · `patchEnvironment`</sub>

## `launchdarkly.resetEnvironmentSdkKey`

Reset environment SDK key — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.resetEnvironmentSdkKey(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The time at which you want the old SDK key to expire, in UNIX milliseconds. By default, the key expires immediately. During the period between this call and the time when the old SDK key expires, both the old SDK key and the new SDK key will work. */
  expiry?: number;
}): Promise<Environment>
```

<sub>`POST /api/v2/projects/{projectKey}/environments/{environmentKey}/apiKey` · `resetEnvironmentSDKKey`</sub>

## `launchdarkly.resetEnvironmentMobileKey`

Reset environment mobile SDK key — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.resetEnvironmentMobileKey(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<Environment>
```

<sub>`POST /api/v2/projects/{projectKey}/environments/{environmentKey}/mobileKey` · `resetEnvironmentMobileKey`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
