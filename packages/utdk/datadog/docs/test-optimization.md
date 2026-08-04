# Test Optimization

7 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.updateFlakyTestsManagementPolicies`

Update Flaky Tests Management policies — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateFlakyTestsManagementPolicies(input: {
  data: TestOptimizationFlakyTestsManagementPoliciesUpdateRequestData;
}): Promise<TestOptimizationFlakyTestsManagementPoliciesResponse>
```

<sub>`PATCH /api/v2/ci/test-optimization/settings/policies` · `UpdateFlakyTestsManagementPolicies`</sub>

## `datadog.getFlakyTestsManagementPolicies`

Get Flaky Tests Management policies — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getFlakyTestsManagementPolicies(input: {
  data: TestOptimizationFlakyTestsManagementPoliciesGetRequestData;
}): Promise<TestOptimizationFlakyTestsManagementPoliciesResponse>
```

<sub>`POST /api/v2/ci/test-optimization/settings/policies` · `GetFlakyTestsManagementPolicies`</sub>

## `datadog.deleteTestOptimizationServiceSettings`

Delete Test Optimization service settings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteTestOptimizationServiceSettings(input: {
  data: TestOptimizationDeleteServiceSettingsRequestData;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/ci/test-optimization/settings/service` · `DeleteTestOptimizationServiceSettings`</sub>

## `datadog.updateTestOptimizationServiceSettings`

Update Test Optimization service settings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateTestOptimizationServiceSettings(input: {
  data: TestOptimizationUpdateServiceSettingsRequestData;
}): Promise<TestOptimizationServiceSettingsResponse>
```

<sub>`PATCH /api/v2/ci/test-optimization/settings/service` · `UpdateTestOptimizationServiceSettings`</sub>

## `datadog.getTestOptimizationServiceSettings`

Get Test Optimization service settings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTestOptimizationServiceSettings(input: {
  data: TestOptimizationGetServiceSettingsRequestData;
}): Promise<TestOptimizationServiceSettingsResponse>
```

<sub>`POST /api/v2/ci/test-optimization/settings/service` · `GetTestOptimizationServiceSettings`</sub>

## `datadog.updateFlakyTests`

Update flaky test states — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateFlakyTests(input: {
  data: UpdateFlakyTestsRequestData;
}): Promise<UpdateFlakyTestsResponse>
```

<sub>`PATCH /api/v2/test/flaky-test-management/tests` · `UpdateFlakyTests`</sub>

## `datadog.searchFlakyTests`

Search flaky tests — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchFlakyTests(input: {
  data?: FlakyTestsSearchRequestData;
}): Promise<FlakyTestsSearchResponse>
```

<sub>`POST /api/v2/test/flaky-test-management/tests` · `SearchFlakyTests`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
