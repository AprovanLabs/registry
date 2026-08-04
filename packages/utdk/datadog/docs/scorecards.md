# Scorecards

14 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listScorecardCampaigns`

List all campaigns — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listScorecardCampaigns(input: {
  /** Maximum number of campaigns to return. */
  "page[limit]"?: number;
  /** Offset for pagination. */
  "page[offset]"?: number;
  /** Filter campaigns by name (full-text search). */
  "filter[campaign][name]"?: string;
  /** Filter campaigns by status. */
  "filter[campaign][status]"?: string;
  /** Filter campaigns by owner UUID. */
  "filter[campaign][owner]"?: string;
}): Promise<ListCampaignsResponse>
```

<sub>`GET /api/v2/scorecard/campaigns` · `ListScorecardCampaigns`</sub>

## `datadog.createScorecardCampaign`

Create a new campaign — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createScorecardCampaign(input: {
  data: CreateCampaignRequestData;
}): Promise<CampaignResponse>
```

<sub>`POST /api/v2/scorecard/campaigns` · `CreateScorecardCampaign`</sub>

## `datadog.deleteScorecardCampaign`

Delete a campaign — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteScorecardCampaign(input: {
  /** Campaign ID or key. */
  campaign_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/scorecard/campaigns/{campaign_id}` · `DeleteScorecardCampaign`</sub>

## `datadog.getScorecardCampaign`

Get a campaign — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getScorecardCampaign(input: {
  /** Campaign ID or key. */
  campaign_id: string;
  /** Include related data (for example, scores). */
  include?: string;
  /** Include metadata (entity and rule counts). */
  include_meta?: boolean;
}): Promise<CampaignResponse>
```

<sub>`GET /api/v2/scorecard/campaigns/{campaign_id}` · `GetScorecardCampaign`</sub>

## `datadog.updateScorecardCampaign`

Update a campaign — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateScorecardCampaign(input: {
  data: UpdateCampaignRequestData;
  /** Campaign ID or key. */
  campaign_id: string;
}): Promise<CampaignResponse>
```

<sub>`PUT /api/v2/scorecard/campaigns/{campaign_id}` · `UpdateScorecardCampaign`</sub>

## `datadog.listScorecardOutcomes`

List all rule outcomes — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listScorecardOutcomes(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific offset to use as the beginning of the returned page. */
  "page[offset]"?: number;
  /** Include related rule details in the response. */
  include?: string;
  /** Return only specified values in the outcome attributes. */
  "fields[outcome]"?: string;
  /** Return only specified values in the included rule details. */
  "fields[rule]"?: string;
  /** Filter outcomes on a specific service name. */
  "filter[outcome][service_name]"?: string;
  /** Filter outcomes by a specific state. */
  "filter[outcome][state]"?: string;
  /** Filter outcomes based on whether a rule is enabled or disabled. */
  "filter[rule][enabled]"?: boolean;
  /** Filter outcomes based on rule ID. */
  "filter[rule][id]"?: string;
  /** Filter outcomes based on rule name. */
  "filter[rule][name]"?: string;
}): Promise<OutcomesResponse>
```

<sub>`GET /api/v2/scorecard/outcomes` · `ListScorecardOutcomes`</sub>

## `datadog.updateScorecardOutcomes`

Update Scorecard outcomes — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateScorecardOutcomes(input: {
  data?: UpdateOutcomesAsyncRequestData;
}): Promise<undefined>
```

<sub>`POST /api/v2/scorecard/outcomes` · `UpdateScorecardOutcomes`</sub>

## `datadog.createScorecardOutcomesBatch`

Create outcomes batch — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createScorecardOutcomesBatch(input: {
  data?: OutcomesBatchRequestData;
}): Promise<OutcomesBatchResponse>
```

<sub>`POST /api/v2/scorecard/outcomes/batch` · `CreateScorecardOutcomesBatch`</sub>

## `datadog.listScorecardRules`

List all rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listScorecardRules(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific offset to use as the beginning of the returned page. */
  "page[offset]"?: number;
  /** Include related scorecard details in the response. */
  include?: string;
  /** Filter the rules on a rule ID. */
  "filter[rule][id]"?: string;
  /** Filter for enabled rules only. */
  "filter[rule][enabled]"?: boolean;
  /** Filter for custom rules only. */
  "filter[rule][custom]"?: boolean;
  /** Filter rules on the rule name. */
  "filter[rule][name]"?: string;
  /** Filter rules on the rule description. */
  "filter[rule][description]"?: string;
  /** Return only specific fields in the response for rule attributes. */
  "fields[rule]"?: string;
  /** Return only specific fields in the included response for scorecard attributes. */
  "fields[scorecard]"?: string;
}): Promise<ListRulesResponse>
```

<sub>`GET /api/v2/scorecard/rules` · `ListScorecardRules`</sub>

## `datadog.createScorecardRule`

Create a new rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createScorecardRule(input: {
  data?: CreateRuleRequestData;
}): Promise<CreateRuleResponse>
```

<sub>`POST /api/v2/scorecard/rules` · `CreateScorecardRule`</sub>

## `datadog.deleteScorecardRule`

Delete a rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteScorecardRule(input: {
  /** The ID of the rule. */
  rule_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/scorecard/rules/{rule_id}` · `DeleteScorecardRule`</sub>

## `datadog.updateScorecardRule`

Update an existing scorecard rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateScorecardRule(input: {
  data?: UpdateRuleRequestData;
  /** The ID of the rule. */
  rule_id: string;
}): Promise<UpdateRuleResponse>
```

<sub>`PUT /api/v2/scorecard/rules/{rule_id}` · `UpdateScorecardRule`</sub>

## `datadog.listScorecards`

List all scorecards — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listScorecards(input: {
  /** Offset for pagination. */
  "page[offset]"?: number;
  /** Maximum number of scorecards to return. */
  "page[size]"?: number;
  /** Filter by scorecard ID. */
  "filter[scorecard][id]"?: string;
  /** Filter by scorecard name (partial match). */
  "filter[scorecard][name]"?: string;
  /** Filter by scorecard description (partial match). */
  "filter[scorecard][description]"?: string;
}): Promise<ListScorecardsResponse>
```

<sub>`GET /api/v2/scorecard/scorecards` · `ListScorecards`</sub>

## `datadog.listScorecardScores`

List all scores — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listScorecardScores(input: {
  aggregation: ScorecardScoresAggregation;
  /** Filter scores by rule ID(s), comma-separated. */
  "filter[rule][id]"?: string;
  /** Filter scores by rule name. */
  "filter[rule][name]"?: string;
  /** Filter scores by rule level(s), comma-separated. */
  "filter[rule][level]"?: string;
  /** Filter scores by scorecard ID(s), comma-separated. */
  "filter[rule][scorecard_id]"?: string;
  /** Filter scores to show only custom rules. */
  "filter[rule][is_custom]"?: boolean;
  /** Filter scores to show only enabled rules. */
  "filter[rule][is_enabled]"?: boolean;
  /** Sort scores by field. Use a hyphen prefix for descending order. Options: score, numerator, denominator, total_pass, total_fail, total_skip, total_no_data. */
  sort?: string;
  /** Offset for pagination. */
  "page[offset]"?: number;
  /** Number of scores to return. Max is 1000. */
  "page[limit]"?: number;
}): Promise<ListScorecardScoresResponse>
```

<sub>`GET /api/v2/scorecard/scores/{aggregation}` · `ListScorecardScores`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
