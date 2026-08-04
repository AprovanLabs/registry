# Project Features

2 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getFeaturesForProject`

Get project features — [Provider docs](http://www.atlassian.com)

```ts
jira.getFeaturesForProject(input: {
  /** The ID or (case-sensitive) key of the project. */
  projectIdOrKey: string;
}): Promise<ContainerForProjectFeatures>
```

<sub>`GET /rest/api/3/project/{projectIdOrKey}/features` · `getFeaturesForProject`</sub>

## `jira.toggleFeatureForProject`

Set project feature state — [Provider docs](http://www.atlassian.com)

```ts
jira.toggleFeatureForProject(input: {
  /** The feature state. */
  state?: "ENABLED" | "DISABLED" | "COMING_SOON";
  /** The ID or (case-sensitive) key of the project. */
  projectIdOrKey: string;
  /** The key of the feature. */
  featureKey: string;
}): Promise<ContainerForProjectFeatures>
```

<sub>`PUT /rest/api/3/project/{projectIdOrKey}/features/{featureKey}` · `toggleFeatureForProject`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
