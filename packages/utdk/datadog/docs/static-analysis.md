# Static Analysis

32 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.createScaResult`

Post dependencies for analysis — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createScaResult(input: {
  data?: ScaRequestData;
}): Promise<undefined>
```

<sub>`POST /api/v2/static-analysis-sca/dependencies` · `CreateSCAResult`</sub>

## `datadog.createScaScan`

Submit libraries for vulnerability scanning — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createScaScan(input: {
  data: McpScanRequestData;
}): Promise<McpScanRequestResponse>
```

<sub>`POST /api/v2/static-analysis-sca/dependencies/scan` · `CreateSCAScan`</sub>

## `datadog.getScaScan`

Retrieve a dependency scan result — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getScaScan(input: {
  /** The job identifier returned when the scan was submitted. */
  job_id: string;
}): Promise<ScanResultResponse>
```

<sub>`GET /api/v2/static-analysis-sca/dependencies/scan/{job_id}` · `GetSCAScan`</sub>

## `datadog.listScaLicenses`

Get the list of SPDX licenses — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listScaLicenses(): Promise<LicensesListResponse>
```

<sub>`GET /api/v2/static-analysis-sca/licenses/list` · `ListSCALicenses`</sub>

## `datadog.createScaResolveVulnerableSymbols`

POST request to resolve vulnerable symbols — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createScaResolveVulnerableSymbols(input: {
  data?: ResolveVulnerableSymbolsRequestData;
}): Promise<ResolveVulnerableSymbolsResponse>
```

<sub>`POST /api/v2/static-analysis-sca/vulnerabilities/resolve-vulnerable-symbols` · `CreateSCAResolveVulnerableSymbols`</sub>

## `datadog.listAiMemoryViolationResults`

List AI memory violation results — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAiMemoryViolationResults(): Promise<AiMemoryViolationResultsResponse>
```

<sub>`GET /api/v2/static-analysis/ai/memory` · `ListAiMemoryViolationResults`</sub>

## `datadog.createAiMemoryViolationResult`

Create an AI memory violation result — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createAiMemoryViolationResult(input: {
  data?: AiMemoryViolationResultRequestData;
}): Promise<undefined>
```

<sub>`POST /api/v2/static-analysis/ai/memory` · `CreateAiMemoryViolationResult`</sub>

## `datadog.deleteAiMemoryViolationResult`

Delete an AI memory violation result — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteAiMemoryViolationResult(input: {
  /** The numeric identifier of the memory violation result. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/static-analysis/ai/memory/{id}` · `DeleteAiMemoryViolationResult`</sub>

## `datadog.listAiPrompts`

List AI prompts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAiPrompts(): Promise<AiPromptsResponse>
```

<sub>`GET /api/v2/static-analysis/ai/prompts` · `ListAiPrompts`</sub>

## `datadog.listAiCustomRulesets`

List AI custom rulesets — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAiCustomRulesets(input: {
  /** The offset for pagination. */
  "page[offset]"?: number;
  /** The maximum number of rulesets to return. */
  "page[limit]"?: number;
}): Promise<AiCustomRulesetsResponse>
```

<sub>`GET /api/v2/static-analysis/ai/rulesets` · `ListAiCustomRulesets`</sub>

## `datadog.createAiCustomRuleset`

Create an AI custom ruleset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createAiCustomRuleset(input: {
  data?: AiCustomRulesetRequestData;
}): Promise<AiCustomRulesetResponse>
```

<sub>`POST /api/v2/static-analysis/ai/rulesets` · `CreateAiCustomRuleset`</sub>

## `datadog.deleteAiCustomRuleset`

Delete an AI custom ruleset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteAiCustomRuleset(input: {
  /** The ruleset name. */
  ruleset_name: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/static-analysis/ai/rulesets/{ruleset_name}` · `DeleteAiCustomRuleset`</sub>

## `datadog.getAiCustomRuleset`

Get an AI custom ruleset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAiCustomRuleset(input: {
  /** The ruleset name. */
  ruleset_name: string;
}): Promise<AiCustomRulesetResponse>
```

<sub>`GET /api/v2/static-analysis/ai/rulesets/{ruleset_name}` · `GetAiCustomRuleset`</sub>

## `datadog.updateAiCustomRuleset`

Update an AI custom ruleset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateAiCustomRuleset(input: {
  data?: AiCustomRulesetUpdateData;
  /** The ruleset name. */
  ruleset_name: string;
}): Promise<undefined>
```

<sub>`PATCH /api/v2/static-analysis/ai/rulesets/{ruleset_name}` · `UpdateAiCustomRuleset`</sub>

## `datadog.createAiCustomRule`

Create an AI custom rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createAiCustomRule(input: {
  data?: AiCustomRuleRequestData;
  /** The ruleset name. */
  ruleset_name: string;
}): Promise<AiCustomRuleResponse>
```

<sub>`POST /api/v2/static-analysis/ai/rulesets/{ruleset_name}/rules` · `CreateAiCustomRule`</sub>

## `datadog.deleteAiCustomRule`

Delete an AI custom rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteAiCustomRule(input: {
  /** The ruleset name. */
  ruleset_name: string;
  /** The rule name. */
  rule_name: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/static-analysis/ai/rulesets/{ruleset_name}/rules/{rule_name}` · `DeleteAiCustomRule`</sub>

## `datadog.getAiCustomRule`

Get an AI custom rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAiCustomRule(input: {
  /** The ruleset name. */
  ruleset_name: string;
  /** The rule name. */
  rule_name: string;
}): Promise<AiCustomRuleResponse>
```

<sub>`GET /api/v2/static-analysis/ai/rulesets/{ruleset_name}/rules/{rule_name}` · `GetAiCustomRule`</sub>

## `datadog.listAiCustomRuleRevisions`

List AI custom rule revisions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAiCustomRuleRevisions(input: {
  /** The ruleset name. */
  ruleset_name: string;
  /** The rule name. */
  rule_name: string;
  /** The offset for pagination. */
  "page[offset]"?: number;
  /** The maximum number of revisions to return. */
  "page[limit]"?: number;
}): Promise<AiCustomRuleRevisionsResponse>
```

<sub>`GET /api/v2/static-analysis/ai/rulesets/{ruleset_name}/rules/{rule_name}/revisions` · `ListAiCustomRuleRevisions`</sub>

## `datadog.createAiCustomRuleRevision`

Create an AI custom rule revision — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createAiCustomRuleRevision(input: {
  data?: AiCustomRuleRevisionRequestData;
  /** The ruleset name. */
  ruleset_name: string;
  /** The rule name. */
  rule_name: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/static-analysis/ai/rulesets/{ruleset_name}/rules/{rule_name}/revisions` · `CreateAiCustomRuleRevision`</sub>

## `datadog.getAiCustomRuleRevision`

Get an AI custom rule revision — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAiCustomRuleRevision(input: {
  /** The ruleset name. */
  ruleset_name: string;
  /** The rule name. */
  rule_name: string;
  /** The revision identifier. */
  id: string;
}): Promise<AiCustomRuleRevisionResponse>
```

<sub>`GET /api/v2/static-analysis/ai/rulesets/{ruleset_name}/rules/{rule_name}/revisions/{id}` · `GetAiCustomRuleRevision`</sub>

## `datadog.listCustomRulesets`

List Custom Rulesets — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCustomRulesets(): Promise<CustomRulesetListResponse>
```

<sub>`GET /api/v2/static-analysis/custom/rulesets` · `ListCustomRulesets`</sub>

## `datadog.createCustomRuleset`

Create Custom Ruleset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCustomRuleset(input: {
  data?: CustomRulesetRequestData;
}): Promise<CustomRulesetResponse>
```

<sub>`PUT /api/v2/static-analysis/custom/rulesets` · `CreateCustomRuleset`</sub>

## `datadog.deleteCustomRuleset`

Delete Custom Ruleset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCustomRuleset(input: {
  /** The ruleset name */
  ruleset_name: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/static-analysis/custom/rulesets/{ruleset_name}` · `DeleteCustomRuleset`</sub>

## `datadog.getCustomRuleset`

Show Custom Ruleset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCustomRuleset(input: {
  /** The ruleset name */
  ruleset_name: string;
}): Promise<CustomRulesetResponse>
```

<sub>`GET /api/v2/static-analysis/custom/rulesets/{ruleset_name}` · `GetCustomRuleset`</sub>

## `datadog.updateCustomRuleset`

Update Custom Ruleset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCustomRuleset(input: {
  data?: CustomRulesetRequestData;
  /** The ruleset name */
  ruleset_name: string;
}): Promise<CustomRulesetResponse>
```

<sub>`PATCH /api/v2/static-analysis/custom/rulesets/{ruleset_name}` · `UpdateCustomRuleset`</sub>

## `datadog.createCustomRule`

Create Custom Rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCustomRule(input: {
  data?: CustomRuleRequestData;
  /** The ruleset name */
  ruleset_name: string;
}): Promise<CustomRuleResponse>
```

<sub>`PUT /api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules` · `CreateCustomRule`</sub>

## `datadog.deleteCustomRule`

Delete Custom Rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCustomRule(input: {
  /** The ruleset name */
  ruleset_name: string;
  /** The rule name */
  rule_name: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}` · `DeleteCustomRule`</sub>

## `datadog.getCustomRule`

Show Custom Rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCustomRule(input: {
  /** The ruleset name */
  ruleset_name: string;
  /** The rule name */
  rule_name: string;
}): Promise<CustomRuleResponse>
```

<sub>`GET /api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}` · `GetCustomRule`</sub>

## `datadog.listCustomRuleRevisions`

List Custom Rule Revisions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCustomRuleRevisions(input: {
  /** The ruleset name */
  ruleset_name: string;
  /** The rule name */
  rule_name: string;
  /** Pagination offset */
  "page[offset]"?: number;
  /** Pagination limit */
  "page[limit]"?: number;
}): Promise<CustomRuleRevisionsResponse>
```

<sub>`GET /api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}/revisions` · `ListCustomRuleRevisions`</sub>

## `datadog.createCustomRuleRevision`

Create Custom Rule Revision — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCustomRuleRevision(input: {
  data?: CustomRuleRevisionRequestData;
  /** The ruleset name */
  ruleset_name: string;
  /** The rule name */
  rule_name: string;
}): Promise<undefined>
```

<sub>`PUT /api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}/revisions` · `CreateCustomRuleRevision`</sub>

## `datadog.getCustomRuleRevision`

Show Custom Rule Revision — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCustomRuleRevision(input: {
  /** The ruleset name */
  ruleset_name: string;
  /** The rule name */
  rule_name: string;
  /** The revision ID */
  id: string;
}): Promise<CustomRuleRevisionResponse>
```

<sub>`GET /api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}/revisions/{id}` · `GetCustomRuleRevision`</sub>

## `datadog.revertCustomRuleRevision`

Revert Custom Rule Revision — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.revertCustomRuleRevision(input: {
  data?: RevertCustomRuleRevisionRequestData;
  /** The ruleset name */
  ruleset_name: string;
  /** The rule name */
  rule_name: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}/revisions/revert` · `RevertCustomRuleRevision`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
