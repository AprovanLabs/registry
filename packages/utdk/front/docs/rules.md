# Rules

5 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listAllCompanyRules`

List all company rules — [Provider docs](https://community.front.com)

```ts
front.listAllCompanyRules(): Promise<{ _links?: { self?: string }; _results?: (RuleResponse)[] }>
```

<sub>`GET /company/rules` · `list-all-company-rules`</sub>

## `front.listRules`

List rules — [Provider docs](https://community.front.com)

```ts
front.listRules(): Promise<{ _links?: { self?: string }; _results?: (RuleResponse)[] }>
```

<sub>`GET /rules` · `list-rules`</sub>

## `front.getRule`

Get rule — [Provider docs](https://community.front.com)

```ts
front.getRule(input: {
  /** The Rule ID */
  rule_id: string;
}): Promise<RuleResponse>
```

<sub>`GET /rules/{rule_id}` · `get-rule`</sub>

## `front.listTeammateRules`

List teammate rules — [Provider docs](https://community.front.com)

```ts
front.listTeammateRules(input: {
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (RuleResponse)[] }>
```

<sub>`GET /teammates/{teammate_id}/rules` · `list-teammate-rules`</sub>

## `front.listTeamRules`

List team rules — [Provider docs](https://community.front.com)

```ts
front.listTeamRules(input: {
  /** The team ID */
  team_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (RuleResponse)[] }>
```

<sub>`GET /teams/{team_id}/rules` · `list-team-rules`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
