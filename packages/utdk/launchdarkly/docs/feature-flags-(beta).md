# Feature Flags (Beta)

2 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getDependentFlagsByEnv`

List dependent feature flags by environment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getDependentFlagsByEnv(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The feature flag key */
  featureFlagKey: string;
}): Promise<DependentFlagsByEnvironment>
```

<sub>`GET /api/v2/flags/{projectKey}/{environmentKey}/{featureFlagKey}/dependent-flags` · `getDependentFlagsByEnv`</sub>

## `launchdarkly.getDependentFlags`

List dependent feature flags — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getDependentFlags(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
}): Promise<MultiEnvironmentDependentFlags>
```

<sub>`GET /api/v2/flags/{projectKey}/{featureFlagKey}/dependent-flags` · `getDependentFlags`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
