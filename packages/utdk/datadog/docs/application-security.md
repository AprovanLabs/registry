# Application Security

16 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listApplicationSecurityWafCustomRules`

List all WAF custom rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listApplicationSecurityWafCustomRules(): Promise<ApplicationSecurityWafCustomRuleListResponse>
```

<sub>`GET /api/v2/remote_config/products/asm/waf/custom_rules` · `ListApplicationSecurityWAFCustomRules`</sub>

## `datadog.createApplicationSecurityWafCustomRule`

Create a WAF custom rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createApplicationSecurityWafCustomRule(input: {
  data: ApplicationSecurityWafCustomRuleCreateData;
}): Promise<ApplicationSecurityWafCustomRuleResponse>
```

<sub>`POST /api/v2/remote_config/products/asm/waf/custom_rules` · `CreateApplicationSecurityWafCustomRule`</sub>

## `datadog.deleteApplicationSecurityWafCustomRule`

Delete a WAF Custom Rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteApplicationSecurityWafCustomRule(input: {
  /** The ID of the custom rule. */
  custom_rule_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/remote_config/products/asm/waf/custom_rules/{custom_rule_id}` · `DeleteApplicationSecurityWafCustomRule`</sub>

## `datadog.getApplicationSecurityWafCustomRule`

Get a WAF custom rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getApplicationSecurityWafCustomRule(input: {
  /** The ID of the custom rule. */
  custom_rule_id: string;
}): Promise<ApplicationSecurityWafCustomRuleResponse>
```

<sub>`GET /api/v2/remote_config/products/asm/waf/custom_rules/{custom_rule_id}` · `GetApplicationSecurityWafCustomRule`</sub>

## `datadog.updateApplicationSecurityWafCustomRule`

Update a WAF Custom Rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateApplicationSecurityWafCustomRule(input: {
  data: ApplicationSecurityWafCustomRuleUpdateData;
  /** The ID of the custom rule. */
  custom_rule_id: string;
}): Promise<ApplicationSecurityWafCustomRuleResponse>
```

<sub>`PUT /api/v2/remote_config/products/asm/waf/custom_rules/{custom_rule_id}` · `UpdateApplicationSecurityWafCustomRule`</sub>

## `datadog.listApplicationSecurityWafExclusionFilters`

List all WAF exclusion filters — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listApplicationSecurityWafExclusionFilters(): Promise<ApplicationSecurityWafExclusionFiltersResponse>
```

<sub>`GET /api/v2/remote_config/products/asm/waf/exclusion_filters` · `ListApplicationSecurityWafExclusionFilters`</sub>

## `datadog.createApplicationSecurityWafExclusionFilter`

Create a WAF exclusion filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createApplicationSecurityWafExclusionFilter(input: {
  data: ApplicationSecurityWafExclusionFilterCreateData;
}): Promise<ApplicationSecurityWafExclusionFilterResponse>
```

<sub>`POST /api/v2/remote_config/products/asm/waf/exclusion_filters` · `CreateApplicationSecurityWafExclusionFilter`</sub>

## `datadog.deleteApplicationSecurityWafExclusionFilter`

Delete a WAF exclusion filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteApplicationSecurityWafExclusionFilter(input: {
  /** The identifier of the WAF exclusion filter. */
  exclusion_filter_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}` · `DeleteApplicationSecurityWafExclusionFilter`</sub>

## `datadog.getApplicationSecurityWafExclusionFilter`

Get a WAF exclusion filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getApplicationSecurityWafExclusionFilter(input: {
  /** The identifier of the WAF exclusion filter. */
  exclusion_filter_id: string;
}): Promise<ApplicationSecurityWafExclusionFilterResponse>
```

<sub>`GET /api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}` · `GetApplicationSecurityWafExclusionFilter`</sub>

## `datadog.updateApplicationSecurityWafExclusionFilter`

Update a WAF exclusion filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateApplicationSecurityWafExclusionFilter(input: {
  data: ApplicationSecurityWafExclusionFilterUpdateData;
  /** The identifier of the WAF exclusion filter. */
  exclusion_filter_id: string;
}): Promise<ApplicationSecurityWafExclusionFilterResponse>
```

<sub>`PUT /api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}` · `UpdateApplicationSecurityWafExclusionFilter`</sub>

## `datadog.listApplicationSecurityWafPolicies`

List all WAF policies — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listApplicationSecurityWafPolicies(): Promise<ApplicationSecurityPolicyListResponse>
```

<sub>`GET /api/v2/remote_config/products/asm/waf/policies` · `ListApplicationSecurityWAFPolicies`</sub>

## `datadog.createApplicationSecurityWafPolicy`

Create a WAF Policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createApplicationSecurityWafPolicy(input: {
  data: ApplicationSecurityPolicyCreateData;
}): Promise<ApplicationSecurityPolicyResponse>
```

<sub>`POST /api/v2/remote_config/products/asm/waf/policies` · `CreateApplicationSecurityWafPolicy`</sub>

## `datadog.deleteApplicationSecurityWafPolicy`

Delete a WAF Policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteApplicationSecurityWafPolicy(input: {
  /** The ID of the policy. */
  policy_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/remote_config/products/asm/waf/policies/{policy_id}` · `DeleteApplicationSecurityWafPolicy`</sub>

## `datadog.getApplicationSecurityWafPolicy`

Get a WAF Policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getApplicationSecurityWafPolicy(input: {
  /** The ID of the policy. */
  policy_id: string;
}): Promise<ApplicationSecurityPolicyResponse>
```

<sub>`GET /api/v2/remote_config/products/asm/waf/policies/{policy_id}` · `GetApplicationSecurityWafPolicy`</sub>

## `datadog.updateApplicationSecurityWafPolicy`

Update a WAF Policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateApplicationSecurityWafPolicy(input: {
  data: ApplicationSecurityPolicyUpdateData;
  /** The ID of the policy. */
  policy_id: string;
}): Promise<ApplicationSecurityPolicyResponse>
```

<sub>`PUT /api/v2/remote_config/products/asm/waf/policies/{policy_id}` · `UpdateApplicationSecurityWafPolicy`</sub>

## `datadog.getAsmServiceByName`

Get Application Security details for a service — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAsmServiceByName(input: {
  /** The name of the service to retrieve Application Security details for. Returns all matching services across environments. */
  service_filter: string;
}): Promise<ApplicationSecurityServicesResponse>
```

<sub>`GET /api/v2/security/asm/services/{service_filter}` · `GetAsmServiceByName`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
