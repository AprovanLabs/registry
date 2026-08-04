# Follow Flags

4 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getFollowersByProjEnv`

Get followers of all flags in a given project and environment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getFollowersByProjEnv(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<FlagFollowersByProjEnvGetRep>
```

<sub>`GET /api/v2/projects/{projectKey}/environments/{environmentKey}/followers` · `getFollowersByProjEnv`</sub>

## `launchdarkly.getFlagFollowers`

Get followers of a flag in a project and environment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getFlagFollowers(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<FlagFollowersGetRep>
```

<sub>`GET /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers` · `getFlagFollowers`</sub>

## `launchdarkly.deleteFlagFollower`

Remove a member as a follower of a flag in a project and environment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteFlagFollower(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** The memberId of the member to remove as a follower of the flag. Reader roles can only remove themselves. */
  memberId: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers/{memberId}` · `deleteFlagFollower`</sub>

## `launchdarkly.putFlagFollower`

Add a member as a follower of a flag in a project and environment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.putFlagFollower(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** The memberId of the member to add as a follower of the flag. Reader roles can only add themselves. */
  memberId: string;
}): Promise<undefined>
```

<sub>`PUT /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers/{memberId}` · `putFlagFollower`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
