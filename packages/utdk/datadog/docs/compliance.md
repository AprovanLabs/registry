# Compliance

1 operation · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getRuleBasedView`

Get the rule-based view of compliance findings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRuleBasedView(input: {
  /** Timestamp of the query end, in milliseconds since the Unix epoch. */
  to: number;
  /** Compliance framework handle to filter rules and findings by. */
  framework?: string;
  /** Version of the compliance framework to filter rules and findings by. */
  version?: string;
  /** When `true`, returns findings without a `framework_version` tag. Used for findings from custom frameworks or those created before framework versioning was introduced. */
  query_findings_without_framework_version?: boolean;
  /** When `true`, includes rules in the response that have no associated findings. */
  include_rules_without_findings?: boolean;
  /** Set to `true` when the requested `framework` is a custom framework. */
  is_custom?: boolean;
  /** Additional event-platform filters applied to the underlying findings query. For example, `scored:true project_id:datadog-prod-us5`. */
  query?: string;
}): Promise<RuleBasedViewResponse>
```

<sub>`GET /api/v2/compliance_findings/rule_based_view` · `GetRuleBasedView`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
