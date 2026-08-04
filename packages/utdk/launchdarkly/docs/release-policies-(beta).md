# Release Policies (Beta)

6 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getReleasePolicies`

List release policies — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getReleasePolicies(input: {
  /** The project key */
  projectKey: string;
  /** When true, exclude the default release policy from the response. When false or omitted, include the default policy if an environment filter is present. */
  excludeDefault?: boolean;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<ReleasePoliciesResponse>
```

<sub>`GET /api/v2/projects/{projectKey}/release-policies` · `GetReleasePolicies`</sub>

## `launchdarkly.postReleasePolicy`

Create a release policy — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postReleasePolicy(input: {
  scope?: ReleasePolicyScope;
  releaseMethod: ReleaseMethod;
  guardedReleaseConfig?: GuardedReleaseConfig;
  progressiveReleaseConfig?: ProgressiveReleaseConfig;
  /** The name of the release policy */
  name: string;
  /** The human-readable key of the release policy */
  key: string;
  /** The project key */
  projectKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<ReleasePolicy>
```

<sub>`POST /api/v2/projects/{projectKey}/release-policies` · `PostReleasePolicy`</sub>

## `launchdarkly.deleteReleasePolicy`

Delete a release policy — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteReleasePolicy(input: {
  /** The project key */
  projectKey: string;
  /** The human-readable key of the release policy */
  policyKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/release-policies/{policyKey}` · `DeleteReleasePolicy`</sub>

## `launchdarkly.getReleasePolicy`

Get a release policy by key — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getReleasePolicy(input: {
  /** The project key */
  projectKey: string;
  /** The release policy key */
  policyKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<ReleasePolicy>
```

<sub>`GET /api/v2/projects/{projectKey}/release-policies/{policyKey}` · `GetReleasePolicy`</sub>

## `launchdarkly.putReleasePolicy`

Update a release policy — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.putReleasePolicy(input: {
  scope?: ReleasePolicyScope;
  releaseMethod: ReleaseMethod;
  guardedReleaseConfig?: GuardedReleaseConfig;
  progressiveReleaseConfig?: ProgressiveReleaseConfig;
  /** The name of the release policy */
  name: string;
  /** The project key */
  projectKey: string;
  /** The human-readable key of the release policy */
  policyKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<ReleasePolicy>
```

<sub>`PUT /api/v2/projects/{projectKey}/release-policies/{policyKey}` · `PutReleasePolicy`</sub>

## `launchdarkly.postReleasePoliciesOrder`

Update the order of existing release policies — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postReleasePoliciesOrder(input: {
  /** Ordered list of release policy keys */
  body: (string)[];
  /** The project key */
  projectKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<(ReleasePolicy)[]>
```

<sub>`POST /api/v2/projects/{projectKey}/release-policies/order` · `PostReleasePoliciesOrder`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
