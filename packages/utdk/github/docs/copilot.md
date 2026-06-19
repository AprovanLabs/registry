# Copilot

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.copilot.copilotEnterpriseOneDayUsageMetrics`

- **HTTP**: `GET /enterprises/{enterprise}/copilot/metrics/reports/enterprise-1-day`
- **What it does**: Get Copilot enterprise usage metrics for a specific day
- **OpenAPI operationId**: `copilot/copilot-enterprise-one-day-usage-metrics`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; day: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ download_links: (string)[]; report_day: string }`
- OpenAPI response codes: `200`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CopilotCopilotEnterpriseOneDayUsageMetricsInput = Parameters<typeof github.copilot.copilotEnterpriseOneDayUsageMetrics> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotCopilotEnterpriseOneDayUsageMetricsOutput = Awaited<ReturnType<typeof github.copilot.copilotEnterpriseOneDayUsageMetrics>>;

const input: CopilotCopilotEnterpriseOneDayUsageMetricsInput = {} as { enterprise: string; day: string };
const result: CopilotCopilotEnterpriseOneDayUsageMetricsOutput = await github.copilot.copilotEnterpriseOneDayUsageMetrics(input);

// Result shape (from schema): { download_links: (string)[]; report_day: string }
```

### `github.copilot.copilotEnterpriseUsageMetrics`

- **HTTP**: `GET /enterprises/{enterprise}/copilot/metrics/reports/enterprise-28-day/latest`
- **What it does**: Get Copilot enterprise usage metrics
- **OpenAPI operationId**: `copilot/copilot-enterprise-usage-metrics`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ download_links: (string)[]; report_start_day: string; report_end_day: string }`
- OpenAPI response codes: `200`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CopilotCopilotEnterpriseUsageMetricsInput = Parameters<typeof github.copilot.copilotEnterpriseUsageMetrics> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotCopilotEnterpriseUsageMetricsOutput = Awaited<ReturnType<typeof github.copilot.copilotEnterpriseUsageMetrics>>;

const input: CopilotCopilotEnterpriseUsageMetricsInput = {} as { enterprise: string };
const result: CopilotCopilotEnterpriseUsageMetricsOutput = await github.copilot.copilotEnterpriseUsageMetrics(input);

// Result shape (from schema): { download_links: (string)[]; report_start_day: string; report_end_day: string }
```

### `github.copilot.copilotEnterpriseUserTeamsOneDayReport`

- **HTTP**: `GET /enterprises/{enterprise}/copilot/metrics/reports/user-teams-1-day`
- **What it does**: Get Copilot enterprise user-teams report for a specific day
- **OpenAPI operationId**: `copilot/copilot-enterprise-user-teams-one-day-report`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; day: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ download_links: (string)[]; report_day: string }`
- OpenAPI response codes: `200`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CopilotCopilotEnterpriseUserTeamsOneDayReportInput = Parameters<typeof github.copilot.copilotEnterpriseUserTeamsOneDayReport> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotCopilotEnterpriseUserTeamsOneDayReportOutput = Awaited<ReturnType<typeof github.copilot.copilotEnterpriseUserTeamsOneDayReport>>;

const input: CopilotCopilotEnterpriseUserTeamsOneDayReportInput = {} as { enterprise: string; day: string };
const result: CopilotCopilotEnterpriseUserTeamsOneDayReportOutput = await github.copilot.copilotEnterpriseUserTeamsOneDayReport(input);

// Result shape (from schema): { download_links: (string)[]; report_day: string }
```

### `github.copilot.copilotUsersOneDayUsageMetrics`

- **HTTP**: `GET /enterprises/{enterprise}/copilot/metrics/reports/users-1-day`
- **What it does**: Get Copilot users usage metrics for a specific day
- **OpenAPI operationId**: `copilot/copilot-users-one-day-usage-metrics`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; day: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ download_links: (string)[]; report_day: string }`
- OpenAPI response codes: `200`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CopilotCopilotUsersOneDayUsageMetricsInput = Parameters<typeof github.copilot.copilotUsersOneDayUsageMetrics> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotCopilotUsersOneDayUsageMetricsOutput = Awaited<ReturnType<typeof github.copilot.copilotUsersOneDayUsageMetrics>>;

const input: CopilotCopilotUsersOneDayUsageMetricsInput = {} as { enterprise: string; day: string };
const result: CopilotCopilotUsersOneDayUsageMetricsOutput = await github.copilot.copilotUsersOneDayUsageMetrics(input);

// Result shape (from schema): { download_links: (string)[]; report_day: string }
```

### `github.copilot.copilotUsersUsageMetrics`

- **HTTP**: `GET /enterprises/{enterprise}/copilot/metrics/reports/users-28-day/latest`
- **What it does**: Get Copilot users usage metrics
- **OpenAPI operationId**: `copilot/copilot-users-usage-metrics`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ download_links: (string)[]; report_start_day: string; report_end_day: string }`
- OpenAPI response codes: `200`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CopilotCopilotUsersUsageMetricsInput = Parameters<typeof github.copilot.copilotUsersUsageMetrics> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotCopilotUsersUsageMetricsOutput = Awaited<ReturnType<typeof github.copilot.copilotUsersUsageMetrics>>;

const input: CopilotCopilotUsersUsageMetricsInput = {} as { enterprise: string };
const result: CopilotCopilotUsersUsageMetricsOutput = await github.copilot.copilotUsersUsageMetrics(input);

// Result shape (from schema): { download_links: (string)[]; report_start_day: string; report_end_day: string }
```

### `github.copilot.setEnterpriseCodingAgentPolicy`

- **HTTP**: `PUT /enterprises/{enterprise}/copilot/policies/coding_agent`
- **What it does**: Set the coding agent policy for an enterprise
- **OpenAPI operationId**: `copilot/set-enterprise-coding-agent-policy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `400`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ policy_state: "enabled_for_all_orgs" | "disabled_for_all_orgs" | "enabled_for_selected_orgs" | "configured_by_org_admins"; enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`

```ts
import github from "@utdk/github";

type CopilotSetEnterpriseCodingAgentPolicyInput = Parameters<typeof github.copilot.setEnterpriseCodingAgentPolicy> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSetEnterpriseCodingAgentPolicyOutput = Awaited<ReturnType<typeof github.copilot.setEnterpriseCodingAgentPolicy>>;

const input: CopilotSetEnterpriseCodingAgentPolicyInput = {} as { policy_state: "enabled_for_all_orgs" | "disabled_for_all_orgs" | "enabled_for_selected_orgs" | "configured_by_org_admins"; enterprise: string };
const result: CopilotSetEnterpriseCodingAgentPolicyOutput = await github.copilot.setEnterpriseCodingAgentPolicy(input);

// Result shape (from schema): unknown
```

### `github.copilot.removeOrganizationsFromEnterpriseCodingAgentPolicy`

- **HTTP**: `DELETE /enterprises/{enterprise}/copilot/policies/coding_agent/organizations`
- **What it does**: Remove organizations from the enterprise coding agent policy
- **OpenAPI operationId**: `copilot/remove-organizations-from-enterprise-coding-agent-policy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `400`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ organizations?: (string)[]; custom_properties?: ({ property_name: string; values: (string)[] })[]; enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`

```ts
import github from "@utdk/github";

type CopilotRemoveOrganizationsFromEnterpriseCodingAgentPolicyInput = Parameters<typeof github.copilot.removeOrganizationsFromEnterpriseCodingAgentPolicy> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotRemoveOrganizationsFromEnterpriseCodingAgentPolicyOutput = Awaited<ReturnType<typeof github.copilot.removeOrganizationsFromEnterpriseCodingAgentPolicy>>;

const input: CopilotRemoveOrganizationsFromEnterpriseCodingAgentPolicyInput = {} as { organizations?: (string)[]; custom_properties?: ({ property_name: string; values: (string)[] })[]; enterprise: string };
const result: CopilotRemoveOrganizationsFromEnterpriseCodingAgentPolicyOutput = await github.copilot.removeOrganizationsFromEnterpriseCodingAgentPolicy(input);

// Result shape (from schema): unknown
```

### `github.copilot.addOrganizationsToEnterpriseCodingAgentPolicy`

- **HTTP**: `POST /enterprises/{enterprise}/copilot/policies/coding_agent/organizations`
- **What it does**: Add organizations to the enterprise coding agent policy
- **OpenAPI operationId**: `copilot/add-organizations-to-enterprise-coding-agent-policy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `400`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ organizations?: (string)[]; custom_properties?: ({ property_name: string; values: (string)[] })[]; enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`

```ts
import github from "@utdk/github";

type CopilotAddOrganizationsToEnterpriseCodingAgentPolicyInput = Parameters<typeof github.copilot.addOrganizationsToEnterpriseCodingAgentPolicy> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotAddOrganizationsToEnterpriseCodingAgentPolicyOutput = Awaited<ReturnType<typeof github.copilot.addOrganizationsToEnterpriseCodingAgentPolicy>>;

const input: CopilotAddOrganizationsToEnterpriseCodingAgentPolicyInput = {} as { organizations?: (string)[]; custom_properties?: ({ property_name: string; values: (string)[] })[]; enterprise: string };
const result: CopilotAddOrganizationsToEnterpriseCodingAgentPolicyOutput = await github.copilot.addOrganizationsToEnterpriseCodingAgentPolicy(input);

// Result shape (from schema): unknown
```

### `github.copilot.getCopilotOrganizationDetails`

- **HTTP**: `GET /orgs/{org}/copilot/billing`
- **What it does**: Get Copilot seat information and settings for an organization
- **OpenAPI operationId**: `copilot/get-copilot-organization-details`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ seat_breakdown: { total?: number; added_this_cycle?: number; pending_cancellation?: number; pending_invitation?: number; active_this_cycle?: number; inactive_this_cycle?: number }; public_code_suggestions: "allow" | "...`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type CopilotGetCopilotOrganizationDetailsInput = Parameters<typeof github.copilot.getCopilotOrganizationDetails> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotGetCopilotOrganizationDetailsOutput = Awaited<ReturnType<typeof github.copilot.getCopilotOrganizationDetails>>;

const input: CopilotGetCopilotOrganizationDetailsInput = {} as { org: string };
const result: CopilotGetCopilotOrganizationDetailsOutput = await github.copilot.getCopilotOrganizationDetails(input);

// Result shape (from schema): { seat_breakdown: { total?: number; added_this_cycle?: number; pending_cancellation?: number; pending_invitation?: number; active_this_cycle?: number; inactive_this_cycle?: number }; public_code_suggestions: "allow" | "...
```

### `github.copilot.listCopilotSeats`

- **HTTP**: `GET /orgs/{org}/copilot/billing/seats`
- **What it does**: List all Copilot seat assignments for an organization
- **OpenAPI operationId**: `copilot/list-copilot-seats`
- **Path params**: None
- **Query params**: `per_page`
- **Response codes**: `200`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_seats?: number; seats?: ({ assignee?: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; fol...`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CopilotListCopilotSeatsInput = Parameters<typeof github.copilot.listCopilotSeats> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotListCopilotSeatsOutput = Awaited<ReturnType<typeof github.copilot.listCopilotSeats>>;

const input: CopilotListCopilotSeatsInput = {} as { org: string; page?: number; per_page?: number };
const result: CopilotListCopilotSeatsOutput = await github.copilot.listCopilotSeats(input);

// Result shape (from schema): { total_seats?: number; seats?: ({ assignee?: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; fol...
```

### `github.copilot.cancelCopilotSeatAssignmentForTeams`

- **HTTP**: `DELETE /orgs/{org}/copilot/billing/selected_teams`
- **What it does**: Remove teams from the Copilot subscription for an organization
- **OpenAPI operationId**: `copilot/cancel-copilot-seat-assignment-for-teams`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_teams: (string)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ seats_cancelled: number }`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type CopilotCancelCopilotSeatAssignmentForTeamsInput = Parameters<typeof github.copilot.cancelCopilotSeatAssignmentForTeams> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotCancelCopilotSeatAssignmentForTeamsOutput = Awaited<ReturnType<typeof github.copilot.cancelCopilotSeatAssignmentForTeams>>;

const input: CopilotCancelCopilotSeatAssignmentForTeamsInput = {} as { selected_teams: (string)[]; org: string };
const result: CopilotCancelCopilotSeatAssignmentForTeamsOutput = await github.copilot.cancelCopilotSeatAssignmentForTeams(input);

// Result shape (from schema): { seats_cancelled: number }
```

### `github.copilot.addCopilotSeatsForTeams`

- **HTTP**: `POST /orgs/{org}/copilot/billing/selected_teams`
- **What it does**: Add teams to the Copilot subscription for an organization
- **OpenAPI operationId**: `copilot/add-copilot-seats-for-teams`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `401`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_teams: (string)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ seats_created: number }`
- OpenAPI response codes: `201`, `401`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type CopilotAddCopilotSeatsForTeamsInput = Parameters<typeof github.copilot.addCopilotSeatsForTeams> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotAddCopilotSeatsForTeamsOutput = Awaited<ReturnType<typeof github.copilot.addCopilotSeatsForTeams>>;

const input: CopilotAddCopilotSeatsForTeamsInput = {} as { selected_teams: (string)[]; org: string };
const result: CopilotAddCopilotSeatsForTeamsOutput = await github.copilot.addCopilotSeatsForTeams(input);

// Result shape (from schema): { seats_created: number }
```

### `github.copilot.cancelCopilotSeatAssignmentForUsers`

- **HTTP**: `DELETE /orgs/{org}/copilot/billing/selected_users`
- **What it does**: Remove users from the Copilot subscription for an organization
- **OpenAPI operationId**: `copilot/cancel-copilot-seat-assignment-for-users`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_usernames: (string)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ seats_cancelled: number }`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type CopilotCancelCopilotSeatAssignmentForUsersInput = Parameters<typeof github.copilot.cancelCopilotSeatAssignmentForUsers> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotCancelCopilotSeatAssignmentForUsersOutput = Awaited<ReturnType<typeof github.copilot.cancelCopilotSeatAssignmentForUsers>>;

const input: CopilotCancelCopilotSeatAssignmentForUsersInput = {} as { selected_usernames: (string)[]; org: string };
const result: CopilotCancelCopilotSeatAssignmentForUsersOutput = await github.copilot.cancelCopilotSeatAssignmentForUsers(input);

// Result shape (from schema): { seats_cancelled: number }
```

### `github.copilot.addCopilotSeatsForUsers`

- **HTTP**: `POST /orgs/{org}/copilot/billing/selected_users`
- **What it does**: Add users to the Copilot subscription for an organization
- **OpenAPI operationId**: `copilot/add-copilot-seats-for-users`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `401`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_usernames: (string)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ seats_created: number }`
- OpenAPI response codes: `201`, `401`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type CopilotAddCopilotSeatsForUsersInput = Parameters<typeof github.copilot.addCopilotSeatsForUsers> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotAddCopilotSeatsForUsersOutput = Awaited<ReturnType<typeof github.copilot.addCopilotSeatsForUsers>>;

const input: CopilotAddCopilotSeatsForUsersInput = {} as { selected_usernames: (string)[]; org: string };
const result: CopilotAddCopilotSeatsForUsersOutput = await github.copilot.addCopilotSeatsForUsers(input);

// Result shape (from schema): { seats_created: number }
```

### `github.copilot.getCopilotCodingAgentPermissionsOrganization`

- **HTTP**: `GET /orgs/{org}/copilot/coding-agent/permissions`
- **What it does**: Get Copilot cloud agent permissions for an organization
- **OpenAPI operationId**: `copilot/get-copilot-coding-agent-permissions-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ enabled_repositories: "all" | "selected" | "none"; selected_repositories_url?: string }`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CopilotGetCopilotCodingAgentPermissionsOrganizationInput = Parameters<typeof github.copilot.getCopilotCodingAgentPermissionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotGetCopilotCodingAgentPermissionsOrganizationOutput = Awaited<ReturnType<typeof github.copilot.getCopilotCodingAgentPermissionsOrganization>>;

const input: CopilotGetCopilotCodingAgentPermissionsOrganizationInput = {} as { org: string };
const result: CopilotGetCopilotCodingAgentPermissionsOrganizationOutput = await github.copilot.getCopilotCodingAgentPermissionsOrganization(input);

// Result shape (from schema): { enabled_repositories: "all" | "selected" | "none"; selected_repositories_url?: string }
```

### `github.copilot.setCopilotCodingAgentPermissionsOrganization`

- **HTTP**: `PUT /orgs/{org}/copilot/coding-agent/permissions`
- **What it does**: Set Copilot cloud agent permissions for an organization
- **OpenAPI operationId**: `copilot/set-copilot-coding-agent-permissions-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enabled_repositories: "all" | "selected" | "none"; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type CopilotSetCopilotCodingAgentPermissionsOrganizationInput = Parameters<typeof github.copilot.setCopilotCodingAgentPermissionsOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSetCopilotCodingAgentPermissionsOrganizationOutput = Awaited<ReturnType<typeof github.copilot.setCopilotCodingAgentPermissionsOrganization>>;

const input: CopilotSetCopilotCodingAgentPermissionsOrganizationInput = {} as { enabled_repositories: "all" | "selected" | "none"; org: string };
const result: CopilotSetCopilotCodingAgentPermissionsOrganizationOutput = await github.copilot.setCopilotCodingAgentPermissionsOrganization(input);

// Result shape (from schema): unknown
```

### `github.copilot.listCopilotCodingAgentSelectedRepositoriesForOrganization`

- **HTTP**: `GET /orgs/{org}/copilot/coding-agent/permissions/repositories`
- **What it does**: List repositories enabled for Copilot cloud agent in an organization
- **OpenAPI operationId**: `copilot/list-copilot-coding-agent-selected-repositories-for-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `409`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `409`, `500`

```ts
import github from "@utdk/github";

type CopilotListCopilotCodingAgentSelectedRepositoriesForOrganizationInput = Parameters<typeof github.copilot.listCopilotCodingAgentSelectedRepositoriesForOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotListCopilotCodingAgentSelectedRepositoriesForOrganizationOutput = Awaited<ReturnType<typeof github.copilot.listCopilotCodingAgentSelectedRepositoriesForOrganization>>;

const input: CopilotListCopilotCodingAgentSelectedRepositoriesForOrganizationInput = {} as { org: string; per_page?: number; page?: number };
const result: CopilotListCopilotCodingAgentSelectedRepositoriesForOrganizationOutput = await github.copilot.listCopilotCodingAgentSelectedRepositoriesForOrganization(input);

// Result shape (from schema): { total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...
```

### `github.copilot.setCopilotCodingAgentSelectedRepositoriesForOrganization`

- **HTTP**: `PUT /orgs/{org}/copilot/coding-agent/permissions/repositories`
- **What it does**: Set selected repositories for Copilot cloud agent in an organization
- **OpenAPI operationId**: `copilot/set-copilot-coding-agent-selected-repositories-for-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`, `409`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_repository_ids: (number)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`, `409`, `422`, `500`

```ts
import github from "@utdk/github";

type CopilotSetCopilotCodingAgentSelectedRepositoriesForOrganizationInput = Parameters<typeof github.copilot.setCopilotCodingAgentSelectedRepositoriesForOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSetCopilotCodingAgentSelectedRepositoriesForOrganizationOutput = Awaited<ReturnType<typeof github.copilot.setCopilotCodingAgentSelectedRepositoriesForOrganization>>;

const input: CopilotSetCopilotCodingAgentSelectedRepositoriesForOrganizationInput = {} as { selected_repository_ids: (number)[]; org: string };
const result: CopilotSetCopilotCodingAgentSelectedRepositoriesForOrganizationOutput = await github.copilot.setCopilotCodingAgentSelectedRepositoriesForOrganization(input);

// Result shape (from schema): unknown
```

### `github.copilot.disableCopilotCodingAgentForRepositoryInOrganization`

- **HTTP**: `DELETE /orgs/{org}/copilot/coding-agent/permissions/repositories/{repository_id}`
- **What it does**: Disable a repository for Copilot cloud agent in an organization
- **OpenAPI operationId**: `copilot/disable-copilot-coding-agent-for-repository-in-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`, `409`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`, `409`, `500`

```ts
import github from "@utdk/github";

type CopilotDisableCopilotCodingAgentForRepositoryInOrganizationInput = Parameters<typeof github.copilot.disableCopilotCodingAgentForRepositoryInOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotDisableCopilotCodingAgentForRepositoryInOrganizationOutput = Awaited<ReturnType<typeof github.copilot.disableCopilotCodingAgentForRepositoryInOrganization>>;

const input: CopilotDisableCopilotCodingAgentForRepositoryInOrganizationInput = {} as { org: string; repository_id: number };
const result: CopilotDisableCopilotCodingAgentForRepositoryInOrganizationOutput = await github.copilot.disableCopilotCodingAgentForRepositoryInOrganization(input);

// Result shape (from schema): unknown
```

### `github.copilot.enableCopilotCodingAgentForRepositoryInOrganization`

- **HTTP**: `PUT /orgs/{org}/copilot/coding-agent/permissions/repositories/{repository_id}`
- **What it does**: Enable a repository for Copilot cloud agent in an organization
- **OpenAPI operationId**: `copilot/enable-copilot-coding-agent-for-repository-in-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`, `409`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`, `409`, `422`, `500`

```ts
import github from "@utdk/github";

type CopilotEnableCopilotCodingAgentForRepositoryInOrganizationInput = Parameters<typeof github.copilot.enableCopilotCodingAgentForRepositoryInOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotEnableCopilotCodingAgentForRepositoryInOrganizationOutput = Awaited<ReturnType<typeof github.copilot.enableCopilotCodingAgentForRepositoryInOrganization>>;

const input: CopilotEnableCopilotCodingAgentForRepositoryInOrganizationInput = {} as { org: string; repository_id: number };
const result: CopilotEnableCopilotCodingAgentForRepositoryInOrganizationOutput = await github.copilot.enableCopilotCodingAgentForRepositoryInOrganization(input);

// Result shape (from schema): unknown
```

### `github.copilot.copilotContentExclusionForOrganization`

- **HTTP**: `GET /orgs/{org}/copilot/content_exclusion`
- **What it does**: Get Copilot content exclusion rules for an organization
- **OpenAPI operationId**: `copilot/copilot-content-exclusion-for-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CopilotCopilotContentExclusionForOrganizationInput = Parameters<typeof github.copilot.copilotContentExclusionForOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotCopilotContentExclusionForOrganizationOutput = Awaited<ReturnType<typeof github.copilot.copilotContentExclusionForOrganization>>;

const input: CopilotCopilotContentExclusionForOrganizationInput = {} as { org: string };
const result: CopilotCopilotContentExclusionForOrganizationOutput = await github.copilot.copilotContentExclusionForOrganization(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.copilot.setCopilotContentExclusionForOrganization`

- **HTTP**: `PUT /orgs/{org}/copilot/content_exclusion`
- **What it does**: Set Copilot content exclusion rules for an organization
- **OpenAPI operationId**: `copilot/set-copilot-content-exclusion-for-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `413`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: { [key: string]: (string | { ifAnyMatch: (string)[] } | { ifNoneMatch: (string)[] })[] | undefined }; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ message?: string }`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `413`, `422`, `500`

```ts
import github from "@utdk/github";

type CopilotSetCopilotContentExclusionForOrganizationInput = Parameters<typeof github.copilot.setCopilotContentExclusionForOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotSetCopilotContentExclusionForOrganizationOutput = Awaited<ReturnType<typeof github.copilot.setCopilotContentExclusionForOrganization>>;

const input: CopilotSetCopilotContentExclusionForOrganizationInput = {} as { body: { [key: string]: (string | { ifAnyMatch: (string)[] } | { ifNoneMatch: (string)[] })[] | undefined }; org: string };
const result: CopilotSetCopilotContentExclusionForOrganizationOutput = await github.copilot.setCopilotContentExclusionForOrganization(input);

// Result shape (from schema): { message?: string }
```

### `github.copilot.copilotMetricsForOrganization`

- **HTTP**: `GET /orgs/{org}/copilot/metrics`
- **What it does**: Get Copilot metrics for an organization
- **OpenAPI operationId**: `copilot/copilot-metrics-for-organization`
- **Path params**: None
- **Query params**: `since`, `until`, `per_page`
- **Response codes**: `200`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; since?: string; until?: string; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ date: string; total_active_users?: number; total_engaged_users?: number; copilot_ide_code_completions?: { total_engaged_users?: number; languages?: ({ name?: string; total_engaged_users?: number })[]; editors?: ({ na...`
- OpenAPI response codes: `200`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type CopilotCopilotMetricsForOrganizationInput = Parameters<typeof github.copilot.copilotMetricsForOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotCopilotMetricsForOrganizationOutput = Awaited<ReturnType<typeof github.copilot.copilotMetricsForOrganization>>;

const input: CopilotCopilotMetricsForOrganizationInput = {} as { org: string; since?: string; until?: string; page?: number; per_page?: number };
const result: CopilotCopilotMetricsForOrganizationOutput = await github.copilot.copilotMetricsForOrganization(input);

// Result shape (from schema): ({ date: string; total_active_users?: number; total_engaged_users?: number; copilot_ide_code_completions?: { total_engaged_users?: number; languages?: ({ name?: string; total_engaged_users?: number })[]; editors?: ({ na...
```

### `github.copilot.copilotOrganizationOneDayUsageMetrics`

- **HTTP**: `GET /orgs/{org}/copilot/metrics/reports/organization-1-day`
- **What it does**: Get Copilot organization usage metrics for a specific day
- **OpenAPI operationId**: `copilot/copilot-organization-one-day-usage-metrics`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `204`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; day: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ download_links: (string)[]; report_day: string }`
- OpenAPI response codes: `200`, `204`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CopilotCopilotOrganizationOneDayUsageMetricsInput = Parameters<typeof github.copilot.copilotOrganizationOneDayUsageMetrics> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotCopilotOrganizationOneDayUsageMetricsOutput = Awaited<ReturnType<typeof github.copilot.copilotOrganizationOneDayUsageMetrics>>;

const input: CopilotCopilotOrganizationOneDayUsageMetricsInput = {} as { org: string; day: string };
const result: CopilotCopilotOrganizationOneDayUsageMetricsOutput = await github.copilot.copilotOrganizationOneDayUsageMetrics(input);

// Result shape (from schema): { download_links: (string)[]; report_day: string }
```

### `github.copilot.copilotOrganizationUsageMetrics`

- **HTTP**: `GET /orgs/{org}/copilot/metrics/reports/organization-28-day/latest`
- **What it does**: Get Copilot organization usage metrics
- **OpenAPI operationId**: `copilot/copilot-organization-usage-metrics`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ download_links: (string)[]; report_start_day: string; report_end_day: string }`
- OpenAPI response codes: `200`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CopilotCopilotOrganizationUsageMetricsInput = Parameters<typeof github.copilot.copilotOrganizationUsageMetrics> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotCopilotOrganizationUsageMetricsOutput = Awaited<ReturnType<typeof github.copilot.copilotOrganizationUsageMetrics>>;

const input: CopilotCopilotOrganizationUsageMetricsInput = {} as { org: string };
const result: CopilotCopilotOrganizationUsageMetricsOutput = await github.copilot.copilotOrganizationUsageMetrics(input);

// Result shape (from schema): { download_links: (string)[]; report_start_day: string; report_end_day: string }
```

### `github.copilot.copilotOrganizationUserTeamsOneDayReport`

- **HTTP**: `GET /orgs/{org}/copilot/metrics/reports/user-teams-1-day`
- **What it does**: Get Copilot organization user-teams report for a specific day
- **OpenAPI operationId**: `copilot/copilot-organization-user-teams-one-day-report`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `204`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; day: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ download_links: (string)[]; report_day: string }`
- OpenAPI response codes: `200`, `204`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CopilotCopilotOrganizationUserTeamsOneDayReportInput = Parameters<typeof github.copilot.copilotOrganizationUserTeamsOneDayReport> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotCopilotOrganizationUserTeamsOneDayReportOutput = Awaited<ReturnType<typeof github.copilot.copilotOrganizationUserTeamsOneDayReport>>;

const input: CopilotCopilotOrganizationUserTeamsOneDayReportInput = {} as { org: string; day: string };
const result: CopilotCopilotOrganizationUserTeamsOneDayReportOutput = await github.copilot.copilotOrganizationUserTeamsOneDayReport(input);

// Result shape (from schema): { download_links: (string)[]; report_day: string }
```

### `github.copilot.copilotOrganizationUsersOneDayUsageMetrics`

- **HTTP**: `GET /orgs/{org}/copilot/metrics/reports/users-1-day`
- **What it does**: Get Copilot organization users usage metrics for a specific day
- **OpenAPI operationId**: `copilot/copilot-organization-users-one-day-usage-metrics`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `204`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; day: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ download_links: (string)[]; report_day: string }`
- OpenAPI response codes: `200`, `204`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CopilotCopilotOrganizationUsersOneDayUsageMetricsInput = Parameters<typeof github.copilot.copilotOrganizationUsersOneDayUsageMetrics> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotCopilotOrganizationUsersOneDayUsageMetricsOutput = Awaited<ReturnType<typeof github.copilot.copilotOrganizationUsersOneDayUsageMetrics>>;

const input: CopilotCopilotOrganizationUsersOneDayUsageMetricsInput = {} as { org: string; day: string };
const result: CopilotCopilotOrganizationUsersOneDayUsageMetricsOutput = await github.copilot.copilotOrganizationUsersOneDayUsageMetrics(input);

// Result shape (from schema): { download_links: (string)[]; report_day: string }
```

### `github.copilot.copilotOrganizationUsersUsageMetrics`

- **HTTP**: `GET /orgs/{org}/copilot/metrics/reports/users-28-day/latest`
- **What it does**: Get Copilot organization users usage metrics
- **OpenAPI operationId**: `copilot/copilot-organization-users-usage-metrics`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ download_links: (string)[]; report_start_day: string; report_end_day: string }`
- OpenAPI response codes: `200`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CopilotCopilotOrganizationUsersUsageMetricsInput = Parameters<typeof github.copilot.copilotOrganizationUsersUsageMetrics> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotCopilotOrganizationUsersUsageMetricsOutput = Awaited<ReturnType<typeof github.copilot.copilotOrganizationUsersUsageMetrics>>;

const input: CopilotCopilotOrganizationUsersUsageMetricsInput = {} as { org: string };
const result: CopilotCopilotOrganizationUsersUsageMetricsOutput = await github.copilot.copilotOrganizationUsersUsageMetrics(input);

// Result shape (from schema): { download_links: (string)[]; report_start_day: string; report_end_day: string }
```

### `github.copilot.getCopilotSeatDetailsForUser`

- **HTTP**: `GET /orgs/{org}/members/{username}/copilot`
- **What it does**: Get Copilot seat assignment details for a user
- **OpenAPI operationId**: `copilot/get-copilot-seat-details-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ assignee?: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url...`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type CopilotGetCopilotSeatDetailsForUserInput = Parameters<typeof github.copilot.getCopilotSeatDetailsForUser> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotGetCopilotSeatDetailsForUserOutput = Awaited<ReturnType<typeof github.copilot.getCopilotSeatDetailsForUser>>;

const input: CopilotGetCopilotSeatDetailsForUserInput = {} as { org: string; username: string };
const result: CopilotGetCopilotSeatDetailsForUserOutput = await github.copilot.getCopilotSeatDetailsForUser(input);

// Result shape (from schema): { assignee?: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url...
```

### `github.copilot.copilotMetricsForTeam`

- **HTTP**: `GET /orgs/{org}/team/{team_slug}/copilot/metrics`
- **What it does**: Get Copilot metrics for a team
- **OpenAPI operationId**: `copilot/copilot-metrics-for-team`
- **Path params**: None
- **Query params**: `since`, `until`, `per_page`
- **Response codes**: `200`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string; since?: string; until?: string; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ date: string; total_active_users?: number; total_engaged_users?: number; copilot_ide_code_completions?: { total_engaged_users?: number; languages?: ({ name?: string; total_engaged_users?: number })[]; editors?: ({ na...`
- OpenAPI response codes: `200`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type CopilotCopilotMetricsForTeamInput = Parameters<typeof github.copilot.copilotMetricsForTeam> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotCopilotMetricsForTeamOutput = Awaited<ReturnType<typeof github.copilot.copilotMetricsForTeam>>;

const input: CopilotCopilotMetricsForTeamInput = {} as { org: string; team_slug: string; since?: string; until?: string; page?: number; per_page?: number };
const result: CopilotCopilotMetricsForTeamOutput = await github.copilot.copilotMetricsForTeam(input);

// Result shape (from schema): ({ date: string; total_active_users?: number; total_engaged_users?: number; copilot_ide_code_completions?: { total_engaged_users?: number; languages?: ({ name?: string; total_engaged_users?: number })[]; editors?: ({ na...
```

### `github.copilot.getCopilotCloudAgentConfiguration`

- **HTTP**: `GET /repos/{owner}/{repo}/copilot/cloud-agent/configuration`
- **What it does**: Get Copilot cloud agent configuration for a repository
- **OpenAPI operationId**: `copilot/get-copilot-cloud-agent-configuration`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ mcp_configuration: { [key: string]: unknown } | null; enabled_tools: { codeql: boolean; copilot_code_review: boolean; secret_scanning: boolean; dependency_vulnerability_checks: boolean }; require_actions_workflow_appr...`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type CopilotGetCopilotCloudAgentConfigurationInput = Parameters<typeof github.copilot.getCopilotCloudAgentConfiguration> extends [infer T, ...unknown[]] ? T : undefined;
type CopilotGetCopilotCloudAgentConfigurationOutput = Awaited<ReturnType<typeof github.copilot.getCopilotCloudAgentConfiguration>>;

const input: CopilotGetCopilotCloudAgentConfigurationInput = {} as { owner: string; repo: string };
const result: CopilotGetCopilotCloudAgentConfigurationOutput = await github.copilot.getCopilotCloudAgentConfiguration(input);

// Result shape (from schema): { mcp_configuration: { [key: string]: unknown } | null; enabled_tools: { codeql: boolean; copilot_code_review: boolean; secret_scanning: boolean; dependency_vulnerability_checks: boolean }; require_actions_workflow_appr...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
