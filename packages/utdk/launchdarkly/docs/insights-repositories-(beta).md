# Insights Repositories (Beta)

3 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getInsightsRepositories`

List repositories — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getInsightsRepositories(input: {
  /** Expand properties in response. Options: `projects` */
  expand?: string;
}): Promise<InsightsRepositoryCollection>
```

<sub>`GET /api/v2/engineering-insights/repositories` · `getInsightsRepositories`</sub>

## `launchdarkly.deleteRepositoryProject`

Remove repository project association — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteRepositoryProject(input: {
  /** The repository key */
  repositoryKey: string;
  /** The project key */
  projectKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/engineering-insights/repositories/{repositoryKey}/projects/{projectKey}` · `deleteRepositoryProject`</sub>

## `launchdarkly.associateRepositoriesAndProjects`

Associate repositories with projects — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.associateRepositoriesAndProjects(input: {
  mappings: (InsightsRepositoryProject)[];
}): Promise<InsightsRepositoryProjectCollection>
```

<sub>`PUT /api/v2/engineering-insights/repositories/projects` · `associateRepositoriesAndProjects`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
