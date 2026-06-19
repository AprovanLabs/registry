# Billing

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.billing.getGithubBillingAiCreditUsageReportOrg`

- **HTTP**: `GET /organizations/{org}/settings/billing/ai_credit/usage`
- **What it does**: Get billing AI credit usage report for an organization
- **OpenAPI operationId**: `billing/get-github-billing-ai-credit-usage-report-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `500`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; year?: number; month?: number; day?: number; user?: string; model?: string; product?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ timePeriod: { year: number; month?: number; day?: number }; organization: string; user?: string; product?: string; model?: string; usageItems: ({ product: string; sku: string; model: string; unitType: string; pricePer...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `500`, `503`

```ts
import github from "@utdk/github";

type BillingGetGithubBillingAiCreditUsageReportOrgInput = Parameters<typeof github.billing.getGithubBillingAiCreditUsageReportOrg> extends [infer T, ...unknown[]] ? T : undefined;
type BillingGetGithubBillingAiCreditUsageReportOrgOutput = Awaited<ReturnType<typeof github.billing.getGithubBillingAiCreditUsageReportOrg>>;

const input: BillingGetGithubBillingAiCreditUsageReportOrgInput = {} as { org: string; year?: number; month?: number; day?: number; user?: string; model?: string; product?: string };
const result: BillingGetGithubBillingAiCreditUsageReportOrgOutput = await github.billing.getGithubBillingAiCreditUsageReportOrg(input);

// Result shape (from schema): { timePeriod: { year: number; month?: number; day?: number }; organization: string; user?: string; product?: string; model?: string; usageItems: ({ product: string; sku: string; model: string; unitType: string; pricePer...
```

### `github.billing.getAllBudgetsOrg`

- **HTTP**: `GET /organizations/{org}/settings/billing/budgets`
- **What it does**: Get all budgets for an organization
- **OpenAPI operationId**: `billing/get-all-budgets-org`
- **Path params**: None
- **Query params**: `page`, `per_page`, `scope`, `user`
- **Response codes**: `200`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; page?: number; per_page?: number; scope?: "enterprise" | "organization" | "repository" | "cost_center" | "multi_user_customer" | "user"; user?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ budgets: ({ id: string; budget_type: "SkuPricing" | "ProductPricing"; budget_amount: number; prevent_further_usage: boolean; budget_scope: "enterprise" | "organization" | "repository" | "cost_center" | "multi_user_cus...`
- OpenAPI response codes: `200`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type BillingGetAllBudgetsOrgInput = Parameters<typeof github.billing.getAllBudgetsOrg> extends [infer T, ...unknown[]] ? T : undefined;
type BillingGetAllBudgetsOrgOutput = Awaited<ReturnType<typeof github.billing.getAllBudgetsOrg>>;

const input: BillingGetAllBudgetsOrgInput = {} as { org: string; page?: number; per_page?: number; scope?: "enterprise" | "organization" | "repository" | "cost_center" | "multi_user_customer" | "user"; user?: string };
const result: BillingGetAllBudgetsOrgOutput = await github.billing.getAllBudgetsOrg(input);

// Result shape (from schema): { budgets: ({ id: string; budget_type: "SkuPricing" | "ProductPricing"; budget_amount: number; prevent_further_usage: boolean; budget_scope: "enterprise" | "organization" | "repository" | "cost_center" | "multi_user_cus...
```

### `github.billing.createOrganizationBudget`

- **HTTP**: `POST /organizations/{org}/settings/billing/budgets`
- **What it does**: Create a budget for an organization
- **OpenAPI operationId**: `billing/create-organization-budget`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `401`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ budget_amount?: number; prevent_further_usage?: boolean; budget_alerting?: { will_alert?: boolean; alert_recipients?: (string)[] }; budget_scope?: "organization" | "repository" | "multi_user_customer" | "user"; budget_entity_name?: string; budget_type?: "ProductPricing" | "SkuPricing"; budget_product_sku?: string; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ message: string; budget: { id?: string; budget_scope?: "enterprise" | "organization" | "repository" | "cost_center" | "multi_user_customer" | "user"; budget_entity_name?: string; budget_amount?: number; prevent_furthe...`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type BillingCreateOrganizationBudgetInput = Parameters<typeof github.billing.createOrganizationBudget> extends [infer T, ...unknown[]] ? T : undefined;
type BillingCreateOrganizationBudgetOutput = Awaited<ReturnType<typeof github.billing.createOrganizationBudget>>;

const input: BillingCreateOrganizationBudgetInput = {} as { budget_amount?: number; prevent_further_usage?: boolean; budget_alerting?: { will_alert?: boolean; alert_recipients?: (string)[] }; budget_scope?: "organization" | "repository" | "multi_user_customer" | "user"; budget_entity_name?: string; budget_type?: "ProductPricing" | "SkuPricing"; budget_product_sku?: string; org: string };
const result: BillingCreateOrganizationBudgetOutput = await github.billing.createOrganizationBudget(input);

// Result shape (from schema): { message: string; budget: { id?: string; budget_scope?: "enterprise" | "organization" | "repository" | "cost_center" | "multi_user_customer" | "user"; budget_entity_name?: string; budget_amount?: number; prevent_furthe...
```

### `github.billing.deleteBudgetOrg`

- **HTTP**: `DELETE /organizations/{org}/settings/billing/budgets/{budget_id}`
- **What it does**: Delete a budget for an organization
- **OpenAPI operationId**: `billing/delete-budget-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `500`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; budget_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ message: string; id: string }`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `500`, `503`

```ts
import github from "@utdk/github";

type BillingDeleteBudgetOrgInput = Parameters<typeof github.billing.deleteBudgetOrg> extends [infer T, ...unknown[]] ? T : undefined;
type BillingDeleteBudgetOrgOutput = Awaited<ReturnType<typeof github.billing.deleteBudgetOrg>>;

const input: BillingDeleteBudgetOrgInput = {} as { org: string; budget_id: string };
const result: BillingDeleteBudgetOrgOutput = await github.billing.deleteBudgetOrg(input);

// Result shape (from schema): { message: string; id: string }
```

### `github.billing.getBudgetOrg`

- **HTTP**: `GET /organizations/{org}/settings/billing/budgets/{budget_id}`
- **What it does**: Get a budget by ID for an organization
- **OpenAPI operationId**: `billing/get-budget-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `500`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; budget_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: string; budget_scope: "enterprise" | "organization" | "repository" | "cost_center" | "multi_user_customer" | "user"; budget_entity_name: string; user?: string; budget_amount: number; prevent_further_usage: boolean...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `500`, `503`

```ts
import github from "@utdk/github";

type BillingGetBudgetOrgInput = Parameters<typeof github.billing.getBudgetOrg> extends [infer T, ...unknown[]] ? T : undefined;
type BillingGetBudgetOrgOutput = Awaited<ReturnType<typeof github.billing.getBudgetOrg>>;

const input: BillingGetBudgetOrgInput = {} as { org: string; budget_id: string };
const result: BillingGetBudgetOrgOutput = await github.billing.getBudgetOrg(input);

// Result shape (from schema): { id: string; budget_scope: "enterprise" | "organization" | "repository" | "cost_center" | "multi_user_customer" | "user"; budget_entity_name: string; user?: string; budget_amount: number; prevent_further_usage: boolean...
```

### `github.billing.updateBudgetOrg`

- **HTTP**: `PATCH /organizations/{org}/settings/billing/budgets/{budget_id}`
- **What it does**: Update a budget for an organization
- **OpenAPI operationId**: `billing/update-budget-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `401`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ budget_amount?: number; prevent_further_usage?: boolean; budget_alerting?: { will_alert?: boolean; alert_recipients?: (string)[] }; budget_scope?: "enterprise" | "organization" | "repository" | "cost_center" | "multi_user_customer" | "user"; budget_entity_name?: string; budget_type?: "ProductPricing" | "SkuPricing"; budget_product_sku?: string; org: string; budget_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ message: string; budget: { id?: string; budget_scope?: "enterprise" | "organization" | "repository" | "cost_center"; budget_entity_name?: string; budget_amount?: number; prevent_further_usage?: boolean; budget_product...`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type BillingUpdateBudgetOrgInput = Parameters<typeof github.billing.updateBudgetOrg> extends [infer T, ...unknown[]] ? T : undefined;
type BillingUpdateBudgetOrgOutput = Awaited<ReturnType<typeof github.billing.updateBudgetOrg>>;

const input: BillingUpdateBudgetOrgInput = {} as { budget_amount?: number; prevent_further_usage?: boolean; budget_alerting?: { will_alert?: boolean; alert_recipients?: (string)[] }; budget_scope?: "enterprise" | "organization" | "repository" | "cost_center" | "multi_user_customer" | "user"; budget_entity_name?: string; budget_type?: "ProductPricing" | "SkuPricing"; budget_product_sku?: string; org: string; budget_id: string };
const result: BillingUpdateBudgetOrgOutput = await github.billing.updateBudgetOrg(input);

// Result shape (from schema): { message: string; budget: { id?: string; budget_scope?: "enterprise" | "organization" | "repository" | "cost_center"; budget_entity_name?: string; budget_amount?: number; prevent_further_usage?: boolean; budget_product...
```

### `github.billing.getGithubBillingPremiumRequestUsageReportOrg`

- **HTTP**: `GET /organizations/{org}/settings/billing/premium_request/usage`
- **What it does**: Get billing premium request usage report for an organization
- **OpenAPI operationId**: `billing/get-github-billing-premium-request-usage-report-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `500`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; year?: number; month?: number; day?: number; user?: string; model?: string; product?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ timePeriod: { year: number; month?: number; day?: number }; organization: string; user?: string; product?: string; model?: string; usageItems: ({ product: string; sku: string; model: string; unitType: string; pricePer...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `500`, `503`

```ts
import github from "@utdk/github";

type BillingGetGithubBillingPremiumRequestUsageReportOrgInput = Parameters<typeof github.billing.getGithubBillingPremiumRequestUsageReportOrg> extends [infer T, ...unknown[]] ? T : undefined;
type BillingGetGithubBillingPremiumRequestUsageReportOrgOutput = Awaited<ReturnType<typeof github.billing.getGithubBillingPremiumRequestUsageReportOrg>>;

const input: BillingGetGithubBillingPremiumRequestUsageReportOrgInput = {} as { org: string; year?: number; month?: number; day?: number; user?: string; model?: string; product?: string };
const result: BillingGetGithubBillingPremiumRequestUsageReportOrgOutput = await github.billing.getGithubBillingPremiumRequestUsageReportOrg(input);

// Result shape (from schema): { timePeriod: { year: number; month?: number; day?: number }; organization: string; user?: string; product?: string; model?: string; usageItems: ({ product: string; sku: string; model: string; unitType: string; pricePer...
```

### `github.billing.getGithubBillingUsageReportOrg`

- **HTTP**: `GET /organizations/{org}/settings/billing/usage`
- **What it does**: Get billing usage report for an organization
- **OpenAPI operationId**: `billing/get-github-billing-usage-report-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `500`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; year?: number; month?: number; day?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ usageItems?: ({ date: string; product: string; sku: string; quantity: number; unitType: string; pricePerUnit: number; grossAmount: number; discountAmount: number; netAmount: number; organizationName: string; repositor...`
- OpenAPI response codes: `200`, `400`, `403`, `500`, `503`

```ts
import github from "@utdk/github";

type BillingGetGithubBillingUsageReportOrgInput = Parameters<typeof github.billing.getGithubBillingUsageReportOrg> extends [infer T, ...unknown[]] ? T : undefined;
type BillingGetGithubBillingUsageReportOrgOutput = Awaited<ReturnType<typeof github.billing.getGithubBillingUsageReportOrg>>;

const input: BillingGetGithubBillingUsageReportOrgInput = {} as { org: string; year?: number; month?: number; day?: number };
const result: BillingGetGithubBillingUsageReportOrgOutput = await github.billing.getGithubBillingUsageReportOrg(input);

// Result shape (from schema): { usageItems?: ({ date: string; product: string; sku: string; quantity: number; unitType: string; pricePerUnit: number; grossAmount: number; discountAmount: number; netAmount: number; organizationName: string; repositor...
```

### `github.billing.getGithubBillingUsageSummaryReportOrg`

- **HTTP**: `GET /organizations/{org}/settings/billing/usage/summary`
- **What it does**: Get billing usage summary for an organization
- **OpenAPI operationId**: `billing/get-github-billing-usage-summary-report-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `500`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; year?: number; month?: number; day?: number; repository?: string; product?: string; sku?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ timePeriod: { year: number; month?: number; day?: number }; organization: string; repository?: string; product?: string; sku?: string; usageItems: ({ product: string; sku: string; unitType: string; pricePerUnit: numbe...`
- OpenAPI response codes: `200`, `400`, `403`, `500`, `503`

```ts
import github from "@utdk/github";

type BillingGetGithubBillingUsageSummaryReportOrgInput = Parameters<typeof github.billing.getGithubBillingUsageSummaryReportOrg> extends [infer T, ...unknown[]] ? T : undefined;
type BillingGetGithubBillingUsageSummaryReportOrgOutput = Awaited<ReturnType<typeof github.billing.getGithubBillingUsageSummaryReportOrg>>;

const input: BillingGetGithubBillingUsageSummaryReportOrgInput = {} as { org: string; year?: number; month?: number; day?: number; repository?: string; product?: string; sku?: string };
const result: BillingGetGithubBillingUsageSummaryReportOrgOutput = await github.billing.getGithubBillingUsageSummaryReportOrg(input);

// Result shape (from schema): { timePeriod: { year: number; month?: number; day?: number }; organization: string; repository?: string; product?: string; sku?: string; usageItems: ({ product: string; sku: string; unitType: string; pricePerUnit: numbe...
```

### `github.billing.getGithubBillingAiCreditUsageReportUser`

- **HTTP**: `GET /users/{username}/settings/billing/ai_credit/usage`
- **What it does**: Get billing AI credit usage report for a user
- **OpenAPI operationId**: `billing/get-github-billing-ai-credit-usage-report-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `500`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; year?: number; month?: number; day?: number; model?: string; product?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ timePeriod: { year: number; month?: number; day?: number }; user: string; product?: string; model?: string; usageItems: ({ product: string; sku: string; model: string; unitType: string; pricePerUnit: number; grossQuan...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `500`, `503`

```ts
import github from "@utdk/github";

type BillingGetGithubBillingAiCreditUsageReportUserInput = Parameters<typeof github.billing.getGithubBillingAiCreditUsageReportUser> extends [infer T, ...unknown[]] ? T : undefined;
type BillingGetGithubBillingAiCreditUsageReportUserOutput = Awaited<ReturnType<typeof github.billing.getGithubBillingAiCreditUsageReportUser>>;

const input: BillingGetGithubBillingAiCreditUsageReportUserInput = {} as { username: string; year?: number; month?: number; day?: number; model?: string; product?: string };
const result: BillingGetGithubBillingAiCreditUsageReportUserOutput = await github.billing.getGithubBillingAiCreditUsageReportUser(input);

// Result shape (from schema): { timePeriod: { year: number; month?: number; day?: number }; user: string; product?: string; model?: string; usageItems: ({ product: string; sku: string; model: string; unitType: string; pricePerUnit: number; grossQuan...
```

### `github.billing.getGithubBillingPremiumRequestUsageReportUser`

- **HTTP**: `GET /users/{username}/settings/billing/premium_request/usage`
- **What it does**: Get billing premium request usage report for a user
- **OpenAPI operationId**: `billing/get-github-billing-premium-request-usage-report-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `500`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; year?: number; month?: number; day?: number; model?: string; product?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ timePeriod: { year: number; month?: number; day?: number }; user: string; product?: string; model?: string; usageItems: ({ product: string; sku: string; model: string; unitType: string; pricePerUnit: number; grossQuan...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `500`, `503`

```ts
import github from "@utdk/github";

type BillingGetGithubBillingPremiumRequestUsageReportUserInput = Parameters<typeof github.billing.getGithubBillingPremiumRequestUsageReportUser> extends [infer T, ...unknown[]] ? T : undefined;
type BillingGetGithubBillingPremiumRequestUsageReportUserOutput = Awaited<ReturnType<typeof github.billing.getGithubBillingPremiumRequestUsageReportUser>>;

const input: BillingGetGithubBillingPremiumRequestUsageReportUserInput = {} as { username: string; year?: number; month?: number; day?: number; model?: string; product?: string };
const result: BillingGetGithubBillingPremiumRequestUsageReportUserOutput = await github.billing.getGithubBillingPremiumRequestUsageReportUser(input);

// Result shape (from schema): { timePeriod: { year: number; month?: number; day?: number }; user: string; product?: string; model?: string; usageItems: ({ product: string; sku: string; model: string; unitType: string; pricePerUnit: number; grossQuan...
```

### `github.billing.getGithubBillingUsageReportUser`

- **HTTP**: `GET /users/{username}/settings/billing/usage`
- **What it does**: Get billing usage report for a user
- **OpenAPI operationId**: `billing/get-github-billing-usage-report-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `500`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; year?: number; month?: number; day?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ usageItems?: ({ date: string; product: string; sku: string; quantity: number; unitType: string; pricePerUnit: number; grossAmount: number; discountAmount: number; netAmount: number; repositoryName?: string })[] }`
- OpenAPI response codes: `200`, `400`, `403`, `500`, `503`

```ts
import github from "@utdk/github";

type BillingGetGithubBillingUsageReportUserInput = Parameters<typeof github.billing.getGithubBillingUsageReportUser> extends [infer T, ...unknown[]] ? T : undefined;
type BillingGetGithubBillingUsageReportUserOutput = Awaited<ReturnType<typeof github.billing.getGithubBillingUsageReportUser>>;

const input: BillingGetGithubBillingUsageReportUserInput = {} as { username: string; year?: number; month?: number; day?: number };
const result: BillingGetGithubBillingUsageReportUserOutput = await github.billing.getGithubBillingUsageReportUser(input);

// Result shape (from schema): { usageItems?: ({ date: string; product: string; sku: string; quantity: number; unitType: string; pricePerUnit: number; grossAmount: number; discountAmount: number; netAmount: number; repositoryName?: string })[] }
```

### `github.billing.getGithubBillingUsageSummaryReportUser`

- **HTTP**: `GET /users/{username}/settings/billing/usage/summary`
- **What it does**: Get billing usage summary for a user
- **OpenAPI operationId**: `billing/get-github-billing-usage-summary-report-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `500`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; year?: number; month?: number; day?: number; repository?: string; product?: string; sku?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ timePeriod: { year: number; month?: number; day?: number }; user: string; repository?: string; product?: string; sku?: string; usageItems: ({ product: string; sku: string; unitType: string; pricePerUnit: number; gross...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `500`, `503`

```ts
import github from "@utdk/github";

type BillingGetGithubBillingUsageSummaryReportUserInput = Parameters<typeof github.billing.getGithubBillingUsageSummaryReportUser> extends [infer T, ...unknown[]] ? T : undefined;
type BillingGetGithubBillingUsageSummaryReportUserOutput = Awaited<ReturnType<typeof github.billing.getGithubBillingUsageSummaryReportUser>>;

const input: BillingGetGithubBillingUsageSummaryReportUserInput = {} as { username: string; year?: number; month?: number; day?: number; repository?: string; product?: string; sku?: string };
const result: BillingGetGithubBillingUsageSummaryReportUserOutput = await github.billing.getGithubBillingUsageSummaryReportUser(input);

// Result shape (from schema): { timePeriod: { year: number; month?: number; day?: number }; user: string; repository?: string; product?: string; sku?: string; usageItems: ({ product: string; sku: string; unitType: string; pricePerUnit: number; gross...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
