# Security

10 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.securityListScans`

List Scans

```ts
digitalocean.securityListScans(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ scans?: (Scan)[] } & Pagination & Meta>
```

<sub>`GET /v2/security/scans` · `security_list_scans`</sub>

## `digitalocean.securityCreateScan`

Create Scan

```ts
digitalocean.securityCreateScan(): Promise<{ scan?: Scan }>
```

<sub>`POST /v2/security/scans` · `security_create_scan`</sub>

## `digitalocean.securityGetScan`

Get Scan

```ts
digitalocean.securityGetScan(input: {
  /** The scan UUID. */
  scan_id: string;
  /** The finding severity level to include. */
  severity?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
  /** The finding type to include. */
  type?: string;
}): Promise<{ scan?: Scan }>
```

<sub>`GET /v2/security/scans/{scan_id}` · `security_get_scan`</sub>

## `digitalocean.securityListScanFindingAffectedResources`

List Finding Affected Resources

```ts
digitalocean.securityListScanFindingAffectedResources(input: {
  /** The scan UUID. */
  scan_id: string;
  /** The finding UUID. */
  finding_uuid: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ affected_resources?: (AffectedResource)[] }>
```

<sub>`GET /v2/security/scans/{scan_id}/findings/{finding_uuid}/affected_resources` · `security_list_scan_finding_affected_resources`</sub>

## `digitalocean.securityGetLatestScan`

Get Latest Scan

```ts
digitalocean.securityGetLatestScan(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
  /** The finding severity level to include. */
  severity?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  /** The finding type to include. */
  type?: string;
}): Promise<{ scan?: Scan }>
```

<sub>`GET /v2/security/scans/latest` · `security_get_latest_scan`</sub>

## `digitalocean.securityCreateScanRule`

Create Scan Rule

```ts
digitalocean.securityCreateScanRule(input: {
  /** The URN of a resource to exclude from future scans. */
  resource?: string;
}): Promise<undefined>
```

<sub>`POST /v2/security/scans/rules` · `security_create_scan_rule`</sub>

## `digitalocean.securityListSettings`

List Settings

```ts
digitalocean.securityListSettings(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<Settings>
```

<sub>`GET /v2/security/settings` · `security_list_settings`</sub>

## `digitalocean.securityUpdateSettingsPlan`

Update Plan

```ts
digitalocean.securityUpdateSettingsPlan(input: {
  /** Scan coverage for each available plan tier. */
  tier_coverage?: { [key: string]: { resources?: (string)[]; tags?: (string)[] } | undefined };
}): Promise<{ tier_coverage?: { [key: string]: { resources?: (string)[]; tags?: (string)[] } | undefined } }>
```

<sub>`PUT /v2/security/settings/plan` · `security_update_settings_plan`</sub>

## `digitalocean.securityCreateSuppression`

Create Suppression

```ts
digitalocean.securityCreateSuppression(input: {
  /** The rule UUID to suppress for the listed resources. */
  rule_uuid?: string;
  /** The URNs of resources to suppress for the rule. */
  resources?: (string)[];
}): Promise<SuppressedResourceRoot>
```

<sub>`POST /v2/security/settings/suppressions` · `security_create_suppression`</sub>

## `digitalocean.securityDeleteSuppression`

Delete Suppression

```ts
digitalocean.securityDeleteSuppression(input: {
  /** The suppression UUID to remove. */
  suppression_uuid: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/security/settings/suppressions/{suppression_uuid}` · `security_delete_suppression`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
