# Projects

8 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getProjects`

List projects — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getProjects(input: {
  /** The number of projects to return in the response. Defaults to 20. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items. */
  offset?: number;
  /** A comma-separated list of filters. Each filter is constructed as `field:value`. */
  filter?: string;
  /** A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. */
  sort?: string;
  /** A comma-separated list of properties that can reveal additional information in the response. */
  expand?: string;
}): Promise<Projects>
```

<sub>`GET /api/v2/projects` · `getProjects`</sub>

## `launchdarkly.postProject`

Create project — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postProject(input: {
  /** A human-friendly name for the project. */
  name: string;
  /** A unique key used to reference the project in your code. */
  key: string;
  /** Whether or not flags created in this project are made available to the client-side JavaScript SDK by default. */
  includeInSnippetByDefault?: boolean;
  /** Controls which client-side SDKs can use new flags by default. */
  defaultClientSideAvailability?: DefaultClientSideAvailabilityPost;
  /** Tags for the project */
  tags?: (string)[];
  /** Creates the provided environments for this project. If omitted default environments will be created instead. */
  environments?: (EnvironmentPost)[];
  /** The flag key convention for this project. Omit this field if you don't want to enforce any conventions for flag keys. */
  namingConvention?: NamingConvention;
}): Promise<ProjectRep>
```

<sub>`POST /api/v2/projects` · `postProject`</sub>

## `launchdarkly.deleteProject`

Delete project — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteProject(input: {
  /** The project key */
  projectKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}` · `deleteProject`</sub>

## `launchdarkly.getProject`

Get project — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getProject(input: {
  /** The project key. */
  projectKey: string;
  /** A comma-separated list of properties that can reveal additional information in the response. */
  expand?: string;
}): Promise<Project>
```

<sub>`GET /api/v2/projects/{projectKey}` · `getProject`</sub>

## `launchdarkly.patchProject`

Update project — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchProject(input: {
  body: JsonPatch;
  /** The project key */
  projectKey: string;
}): Promise<ProjectRep>
```

<sub>`PATCH /api/v2/projects/{projectKey}` · `patchProject`</sub>

## `launchdarkly.getFlagDefaultsByProject`

Get flag defaults for project — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getFlagDefaultsByProject(input: {
  /** The project key */
  projectKey: string;
}): Promise<FlagDefaultsRep>
```

<sub>`GET /api/v2/projects/{projectKey}/flag-defaults` · `getFlagDefaultsByProject`</sub>

## `launchdarkly.patchFlagDefaultsByProject`

Update flag default for project — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchFlagDefaultsByProject(input: {
  body: JsonPatch;
  /** The project key */
  projectKey: string;
}): Promise<UpsertPayloadRep>
```

<sub>`PATCH /api/v2/projects/{projectKey}/flag-defaults` · `patchFlagDefaultsByProject`</sub>

## `launchdarkly.putFlagDefaultsByProject`

Create or update flag defaults for project — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.putFlagDefaultsByProject(input: {
  /** A list of default tags for each flag */
  tags: (string)[];
  /** Whether the flag should be temporary by default */
  temporary: boolean;
  booleanDefaults: BooleanFlagDefaults;
  /** Which client-side SDK types can use this flag by default. */
  defaultClientSideAvailability: DefaultClientSideAvailability;
  /** The project key */
  projectKey: string;
}): Promise<UpsertPayloadRep>
```

<sub>`PUT /api/v2/projects/{projectKey}/flag-defaults` · `putFlagDefaultsByProject`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
