# Context Settings

1 operation · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.putContextFlagSetting`

Update flag settings for context — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.putContextFlagSetting(input: {
  /** The variation value to set for the context. Must match the flag's variation type. */
  setting?: unknown;
  /** Optional comment describing the change */
  comment?: string;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The context kind */
  contextKind: string;
  /** The context key */
  contextKey: string;
  /** The feature flag key */
  featureFlagKey: string;
}): Promise<undefined>
```

<sub>`PUT /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{contextKind}/{contextKey}/flags/{featureFlagKey}` · `putContextFlagSetting`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
