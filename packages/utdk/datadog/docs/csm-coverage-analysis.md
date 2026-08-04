# CSM Coverage Analysis

3 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getCsmCloudAccountsCoverageAnalysis`

Get the CSM Cloud Accounts Coverage Analysis — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCsmCloudAccountsCoverageAnalysis(): Promise<CsmCloudAccountsCoverageAnalysisResponse>
```

<sub>`GET /api/v2/csm/onboarding/coverage_analysis/cloud_accounts` · `GetCSMCloudAccountsCoverageAnalysis`</sub>

## `datadog.getCsmHostsAndContainersCoverageAnalysis`

Get the CSM Hosts and Containers Coverage Analysis — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCsmHostsAndContainersCoverageAnalysis(): Promise<CsmHostsAndContainersCoverageAnalysisResponse>
```

<sub>`GET /api/v2/csm/onboarding/coverage_analysis/hosts_and_containers` · `GetCSMHostsAndContainersCoverageAnalysis`</sub>

## `datadog.getCsmServerlessCoverageAnalysis`

Get the CSM Serverless Coverage Analysis — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCsmServerlessCoverageAnalysis(): Promise<CsmServerlessCoverageAnalysisResponse>
```

<sub>`GET /api/v2/csm/onboarding/coverage_analysis/serverless` · `GetCSMServerlessCoverageAnalysis`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
