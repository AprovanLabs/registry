# CSM Threats

17 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listCsmThreatsAgentRules`

Get all Workload Protection agent rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCsmThreatsAgentRules(input: {
  /** The ID of the Agent policy */
  policy_id?: string;
}): Promise<CloudWorkloadSecurityAgentRulesListResponse>
```

<sub>`GET /api/v2/remote_config/products/cws/agent_rules` · `ListCSMThreatsAgentRules`</sub>

## `datadog.createCsmThreatsAgentRule`

Create a Workload Protection agent rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCsmThreatsAgentRule(input: {
  data: CloudWorkloadSecurityAgentRuleCreateData;
}): Promise<CloudWorkloadSecurityAgentRuleResponse>
```

<sub>`POST /api/v2/remote_config/products/cws/agent_rules` · `CreateCSMThreatsAgentRule`</sub>

## `datadog.deleteCsmThreatsAgentRule`

Delete a Workload Protection agent rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCsmThreatsAgentRule(input: {
  /** The ID of the Agent rule */
  agent_rule_id: string;
  /** The ID of the Agent policy */
  policy_id?: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/remote_config/products/cws/agent_rules/{agent_rule_id}` · `DeleteCSMThreatsAgentRule`</sub>

## `datadog.getCsmThreatsAgentRule`

Get a Workload Protection agent rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCsmThreatsAgentRule(input: {
  /** The ID of the Agent rule */
  agent_rule_id: string;
  /** The ID of the Agent policy */
  policy_id?: string;
}): Promise<CloudWorkloadSecurityAgentRuleResponse>
```

<sub>`GET /api/v2/remote_config/products/cws/agent_rules/{agent_rule_id}` · `GetCSMThreatsAgentRule`</sub>

## `datadog.updateCsmThreatsAgentRule`

Update a Workload Protection agent rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCsmThreatsAgentRule(input: {
  data: CloudWorkloadSecurityAgentRuleUpdateData;
  /** The ID of the Agent rule */
  agent_rule_id: string;
  /** The ID of the Agent policy */
  policy_id?: string;
}): Promise<CloudWorkloadSecurityAgentRuleResponse>
```

<sub>`PATCH /api/v2/remote_config/products/cws/agent_rules/{agent_rule_id}` · `UpdateCSMThreatsAgentRule`</sub>

## `datadog.listCsmThreatsAgentPolicies`

Get all Workload Protection policies — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCsmThreatsAgentPolicies(): Promise<CloudWorkloadSecurityAgentPoliciesListResponse>
```

<sub>`GET /api/v2/remote_config/products/cws/policy` · `ListCSMThreatsAgentPolicies`</sub>

## `datadog.createCsmThreatsAgentPolicy`

Create a Workload Protection policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCsmThreatsAgentPolicy(input: {
  data: CloudWorkloadSecurityAgentPolicyCreateData;
}): Promise<CloudWorkloadSecurityAgentPolicyResponse>
```

<sub>`POST /api/v2/remote_config/products/cws/policy` · `CreateCSMThreatsAgentPolicy`</sub>

## `datadog.deleteCsmThreatsAgentPolicy`

Delete a Workload Protection policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCsmThreatsAgentPolicy(input: {
  /** The ID of the Agent policy */
  policy_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/remote_config/products/cws/policy/{policy_id}` · `DeleteCSMThreatsAgentPolicy`</sub>

## `datadog.getCsmThreatsAgentPolicy`

Get a Workload Protection policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCsmThreatsAgentPolicy(input: {
  /** The ID of the Agent policy */
  policy_id: string;
}): Promise<CloudWorkloadSecurityAgentPolicyResponse>
```

<sub>`GET /api/v2/remote_config/products/cws/policy/{policy_id}` · `GetCSMThreatsAgentPolicy`</sub>

## `datadog.updateCsmThreatsAgentPolicy`

Update a Workload Protection policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCsmThreatsAgentPolicy(input: {
  data: CloudWorkloadSecurityAgentPolicyUpdateData;
  /** The ID of the Agent policy */
  policy_id: string;
}): Promise<CloudWorkloadSecurityAgentPolicyResponse>
```

<sub>`PATCH /api/v2/remote_config/products/cws/policy/{policy_id}` · `UpdateCSMThreatsAgentPolicy`</sub>

## `datadog.downloadCsmThreatsPolicy`

Download the Workload Protection policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.downloadCsmThreatsPolicy(): Promise<string>
```

<sub>`GET /api/v2/remote_config/products/cws/policy/download` · `DownloadCSMThreatsPolicy`</sub>

## `datadog.listCloudWorkloadSecurityAgentRules`

Get all Workload Protection agent rules (US1-FED) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCloudWorkloadSecurityAgentRules(): Promise<CloudWorkloadSecurityAgentRulesListResponse>
```

<sub>`GET /api/v2/security_monitoring/cloud_workload_security/agent_rules` · `ListCloudWorkloadSecurityAgentRules`</sub>

## `datadog.createCloudWorkloadSecurityAgentRule`

Create a Workload Protection agent rule (US1-FED) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCloudWorkloadSecurityAgentRule(input: {
  data: CloudWorkloadSecurityAgentRuleCreateData;
}): Promise<CloudWorkloadSecurityAgentRuleResponse>
```

<sub>`POST /api/v2/security_monitoring/cloud_workload_security/agent_rules` · `CreateCloudWorkloadSecurityAgentRule`</sub>

## `datadog.deleteCloudWorkloadSecurityAgentRule`

Delete a Workload Protection agent rule (US1-FED) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCloudWorkloadSecurityAgentRule(input: {
  /** The ID of the Agent rule */
  agent_rule_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}` · `DeleteCloudWorkloadSecurityAgentRule`</sub>

## `datadog.getCloudWorkloadSecurityAgentRule`

Get a Workload Protection agent rule (US1-FED) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCloudWorkloadSecurityAgentRule(input: {
  /** The ID of the Agent rule */
  agent_rule_id: string;
}): Promise<CloudWorkloadSecurityAgentRuleResponse>
```

<sub>`GET /api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}` · `GetCloudWorkloadSecurityAgentRule`</sub>

## `datadog.updateCloudWorkloadSecurityAgentRule`

Update a Workload Protection agent rule (US1-FED) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCloudWorkloadSecurityAgentRule(input: {
  data: CloudWorkloadSecurityAgentRuleUpdateData;
  /** The ID of the Agent rule */
  agent_rule_id: string;
}): Promise<CloudWorkloadSecurityAgentRuleResponse>
```

<sub>`PATCH /api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}` · `UpdateCloudWorkloadSecurityAgentRule`</sub>

## `datadog.downloadCloudWorkloadPolicyFile`

Download the Workload Protection policy (US1-FED) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.downloadCloudWorkloadPolicyFile(): Promise<string>
```

<sub>`GET /api/v2/security/cloud_workload/policy/download` · `DownloadCloudWorkloadPolicyFile`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
