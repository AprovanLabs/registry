# License Metrics

3 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getLicense`

Get license — [Provider docs](http://www.atlassian.com)

```ts
jira.getLicense(): Promise<License>
```

<sub>`GET /rest/api/3/instance/license` · `getLicense`</sub>

## `jira.getApproximateLicenseCount`

Get approximate license count — [Provider docs](http://www.atlassian.com)

```ts
jira.getApproximateLicenseCount(): Promise<LicenseMetric>
```

<sub>`GET /rest/api/3/license/approximateLicenseCount` · `getApproximateLicenseCount`</sub>

## `jira.getApproximateApplicationLicenseCount`

Get approximate application license count — [Provider docs](http://www.atlassian.com)

```ts
jira.getApproximateApplicationLicenseCount(input: {
  /** The ID of the application, represents a specific version of Jira. */
  applicationKey: "jira-core" | "jira-product-discovery" | "jira-software" | "jira-servicedesk";
}): Promise<LicenseMetric>
```

<sub>`GET /rest/api/3/license/approximateLicenseCount/product/{applicationKey}` · `getApproximateApplicationLicenseCount`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
