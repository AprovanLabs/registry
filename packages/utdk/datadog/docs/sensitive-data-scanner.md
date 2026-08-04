# Sensitive Data Scanner

9 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listScanningGroups`

List Scanning Groups — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listScanningGroups(): Promise<SensitiveDataScannerGetConfigResponse>
```

<sub>`GET /api/v2/sensitive-data-scanner/config` · `ListScanningGroups`</sub>

## `datadog.reorderScanningGroups`

Reorder Groups — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.reorderScanningGroups(input: {
  data: SensitiveDataScannerReorderConfig;
  meta: SensitiveDataScannerMetaVersionOnly;
}): Promise<SensitiveDataScannerReorderGroupsResponse>
```

<sub>`PATCH /api/v2/sensitive-data-scanner/config` · `ReorderScanningGroups`</sub>

## `datadog.createScanningGroup`

Create Scanning Group — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createScanningGroup(input: {
  data?: SensitiveDataScannerGroupCreate;
  meta?: SensitiveDataScannerMetaVersionOnly;
}): Promise<SensitiveDataScannerCreateGroupResponse>
```

<sub>`POST /api/v2/sensitive-data-scanner/config/groups` · `CreateScanningGroup`</sub>

## `datadog.deleteScanningGroup`

Delete Scanning Group — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteScanningGroup(input: {
  meta: SensitiveDataScannerMetaVersionOnly;
  /** The ID of a group of rules. */
  group_id: string;
}): Promise<SensitiveDataScannerGroupDeleteResponse>
```

<sub>`DELETE /api/v2/sensitive-data-scanner/config/groups/{group_id}` · `DeleteScanningGroup`</sub>

## `datadog.updateScanningGroup`

Update Scanning Group — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateScanningGroup(input: {
  data: SensitiveDataScannerGroupUpdate;
  meta: SensitiveDataScannerMetaVersionOnly;
  /** The ID of a group of rules. */
  group_id: string;
}): Promise<SensitiveDataScannerGroupUpdateResponse>
```

<sub>`PATCH /api/v2/sensitive-data-scanner/config/groups/{group_id}` · `UpdateScanningGroup`</sub>

## `datadog.createScanningRule`

Create Scanning Rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createScanningRule(input: {
  data: SensitiveDataScannerRuleCreate;
  meta: SensitiveDataScannerMetaVersionOnly;
}): Promise<SensitiveDataScannerCreateRuleResponse>
```

<sub>`POST /api/v2/sensitive-data-scanner/config/rules` · `CreateScanningRule`</sub>

## `datadog.deleteScanningRule`

Delete Scanning Rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteScanningRule(input: {
  meta: SensitiveDataScannerMetaVersionOnly;
  /** The ID of the rule. */
  rule_id: string;
}): Promise<SensitiveDataScannerRuleDeleteResponse>
```

<sub>`DELETE /api/v2/sensitive-data-scanner/config/rules/{rule_id}` · `DeleteScanningRule`</sub>

## `datadog.updateScanningRule`

Update Scanning Rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateScanningRule(input: {
  data: SensitiveDataScannerRuleUpdate;
  meta: SensitiveDataScannerMetaVersionOnly;
  /** The ID of the rule. */
  rule_id: string;
}): Promise<SensitiveDataScannerRuleUpdateResponse>
```

<sub>`PATCH /api/v2/sensitive-data-scanner/config/rules/{rule_id}` · `UpdateScanningRule`</sub>

## `datadog.listStandardPatterns`

List standard patterns — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listStandardPatterns(): Promise<SensitiveDataScannerStandardPatternsResponseData>
```

<sub>`GET /api/v2/sensitive-data-scanner/config/standard-patterns` · `ListStandardPatterns`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
