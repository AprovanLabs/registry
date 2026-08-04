# Code References

13 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getExtinctions`

List extinctions — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getExtinctions(input: {
  /** Filter results to a specific repository */
  repoName?: string;
  /** Filter results to a specific branch. By default, only the default branch will be queried for extinctions. */
  branchName?: string;
  /** Filter results to a specific project */
  projKey?: string;
  /** Filter results to a specific flag key */
  flagKey?: string;
  /** Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with `to`. */
  from?: number;
  /** Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with `from`. */
  to?: number;
}): Promise<ExtinctionCollectionRep>
```

<sub>`GET /api/v2/code-refs/extinctions` · `getExtinctions`</sub>

## `launchdarkly.getRepositories`

List repositories — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getRepositories(input: {
  /** If set to any value, the endpoint returns repositories with associated branch data */
  withBranches?: string;
  /** If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch */
  withReferencesForDefaultBranch?: string;
  /** A LaunchDarkly project key. If provided, this filters code reference results to the specified project. */
  projKey?: string;
  /** If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch */
  flagKey?: string;
}): Promise<RepositoryCollectionRep>
```

<sub>`GET /api/v2/code-refs/repositories` · `getRepositories`</sub>

## `launchdarkly.postRepository`

Create repository — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postRepository(input: {
  /** The repository name */
  name: string;
  /** A URL to access the repository */
  sourceLink?: string;
  /** A template for constructing a valid URL to view the commit */
  commitUrlTemplate?: string;
  /** A template for constructing a valid URL to view the hunk */
  hunkUrlTemplate?: string;
  /** The type of repository. If not specified, the default value is <code>custom</code>. */
  type?: "bitbucket" | "custom" | "github" | "gitlab";
  /** The repository's default branch. If not specified, the default value is <code>main</code>. */
  defaultBranch?: string;
}): Promise<RepositoryRep>
```

<sub>`POST /api/v2/code-refs/repositories` · `postRepository`</sub>

## `launchdarkly.deleteRepository`

Delete repository — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteRepository(input: {
  /** The repository name */
  repo: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/code-refs/repositories/{repo}` · `deleteRepository`</sub>

## `launchdarkly.getRepository`

Get repository — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getRepository(input: {
  /** The repository name */
  repo: string;
}): Promise<RepositoryRep>
```

<sub>`GET /api/v2/code-refs/repositories/{repo}` · `getRepository`</sub>

## `launchdarkly.patchRepository`

Update repository — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchRepository(input: {
  body: JsonPatch;
  /** The repository name */
  repo: string;
}): Promise<RepositoryRep>
```

<sub>`PATCH /api/v2/code-refs/repositories/{repo}` · `patchRepository`</sub>

## `launchdarkly.deleteBranches`

Delete branches — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteBranches(input: {
  body: (string)[];
  /** The repository name to delete branches for. */
  repo: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/code-refs/repositories/{repo}/branch-delete-tasks` · `deleteBranches`</sub>

## `launchdarkly.getBranches`

List branches — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getBranches(input: {
  /** The repository name */
  repo: string;
}): Promise<BranchCollectionRep>
```

<sub>`GET /api/v2/code-refs/repositories/{repo}/branches` · `getBranches`</sub>

## `launchdarkly.getBranch`

Get branch — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getBranch(input: {
  /** The repository name */
  repo: string;
  /** The url-encoded branch name */
  branch: string;
  /** Filter results to a specific project */
  projKey?: string;
  /** Filter results to a specific flag key */
  flagKey?: string;
}): Promise<BranchRep>
```

<sub>`GET /api/v2/code-refs/repositories/{repo}/branches/{branch}` · `getBranch`</sub>

## `launchdarkly.putBranch`

Upsert branch — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.putBranch(input: {
  /** The branch name */
  name: string;
  /** An ID representing the branch HEAD. For example, a commit SHA. */
  head: string;
  /** An optional ID used to prevent older data from overwriting newer data. If no sequence ID is included, the newly submitted data will always be saved. */
  updateSequenceId?: number;
  /** A timestamp indicating when the branch was last synced */
  syncTime: UnixMillis;
  /** An array of flag references found on the branch */
  references?: (ReferenceRep)[];
  /** A timestamp of the current commit */
  commitTime?: UnixMillis;
  /** The repository name */
  repo: string;
  /** The URL-encoded branch name */
  branch: string;
}): Promise<undefined>
```

<sub>`PUT /api/v2/code-refs/repositories/{repo}/branches/{branch}` · `putBranch`</sub>

## `launchdarkly.postExtinction`

Create extinction — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postExtinction(input: {
  body: ExtinctionListPost;
  /** The repository name */
  repo: string;
  /** The URL-encoded branch name */
  branch: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/code-refs/repositories/{repo}/branches/{branch}/extinction-events` · `postExtinction`</sub>

## `launchdarkly.getRootStatistic`

Get links to code reference repositories for each project — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getRootStatistic(): Promise<StatisticsRoot>
```

<sub>`GET /api/v2/code-refs/statistics` · `getRootStatistic`</sub>

## `launchdarkly.getStatistics`

Get code references statistics for flags — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getStatistics(input: {
  /** The project key */
  projectKey: string;
  /** Filter results to a specific flag key */
  flagKey?: string;
}): Promise<StatisticCollectionRep>
```

<sub>`GET /api/v2/code-refs/statistics/{projectKey}` · `getStatistics`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
