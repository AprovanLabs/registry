# Budgets

5 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getBudgets`

Get all budgets — [Provider docs](https://asana.com/support)

```ts
asana.getBudgets(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Globally unique identifier for the budget's parent object. This currently can only be a `project`. */
  parent: string;
}): Promise<{ data?: (BudgetResponse)[] }>
```

<sub>`GET /budgets` · `getBudgets`</sub>

## `asana.createBudget`

Create a budget — [Provider docs](https://asana.com/support)

```ts
asana.createBudget(input: {
  data?: BudgetRequest;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: BudgetResponse }>
```

<sub>`POST /budgets` · `createBudget`</sub>

## `asana.deleteBudget`

Delete a budget — [Provider docs](https://asana.com/support)

```ts
asana.deleteBudget(input: {
  /** Globally unique identifier for the budget. */
  budget_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /budgets/{budget_gid}` · `deleteBudget`</sub>

## `asana.getBudget`

Get a budget — [Provider docs](https://asana.com/support)

```ts
asana.getBudget(input: {
  /** Globally unique identifier for the budget. */
  budget_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual" | "actual.billable_status_filter" | "actual.units" | "actual.value" | "budget_type" | "estimate" | "estimate.billable_status_filter" | "estimate.enabled" | "estimate.source" | "estimate.units" | "estimate.value" | "parent" | "parent.name" | "total" | "total.enabled" | "total.units" | "total.value")[];
}): Promise<{ data?: BudgetResponse }>
```

<sub>`GET /budgets/{budget_gid}` · `getBudget`</sub>

## `asana.updateBudget`

Update a budget — [Provider docs](https://asana.com/support)

```ts
asana.updateBudget(input: {
  data?: BudgetRequest;
  /** Globally unique identifier for the budget. */
  budget_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual" | "actual.billable_status_filter" | "actual.units" | "actual.value" | "budget_type" | "estimate" | "estimate.billable_status_filter" | "estimate.enabled" | "estimate.source" | "estimate.units" | "estimate.value" | "parent" | "parent.name" | "total" | "total.enabled" | "total.units" | "total.value")[];
}): Promise<{ data?: BudgetResponse }>
```

<sub>`PUT /budgets/{budget_gid}` · `updateBudget`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
