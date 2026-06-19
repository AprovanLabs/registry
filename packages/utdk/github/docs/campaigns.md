# Campaigns

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.campaigns.listOrgCampaigns`

- **HTTP**: `GET /orgs/{org}/campaigns`
- **What it does**: List campaigns for an organization
- **OpenAPI operationId**: `campaigns/list-org-campaigns`
- **Path params**: None
- **Query params**: `state`, `sort`
- **Response codes**: `200`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; page?: number; per_page?: number; direction?: "asc" | "desc"; state?: "open" | "closed"; sort?: "created" | "updated" | "ends_at" | "published" }`
- Client transport options: None

**Outputs**

- Client return type: `({ number: number; created_at: string; updated_at: string; name?: string; description: string; managers: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gr...`
- OpenAPI response codes: `200`, `404`, `503`

```ts
import github from "@utdk/github";

type CampaignsListOrgCampaignsInput = Parameters<typeof github.campaigns.listOrgCampaigns> extends [infer T, ...unknown[]] ? T : undefined;
type CampaignsListOrgCampaignsOutput = Awaited<ReturnType<typeof github.campaigns.listOrgCampaigns>>;

const input: CampaignsListOrgCampaignsInput = {} as { org: string; page?: number; per_page?: number; direction?: "asc" | "desc"; state?: "open" | "closed"; sort?: "created" | "updated" | "ends_at" | "published" };
const result: CampaignsListOrgCampaignsOutput = await github.campaigns.listOrgCampaigns(input);

// Result shape (from schema): ({ number: number; created_at: string; updated_at: string; name?: string; description: string; managers: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gr...
```

### `github.campaigns.createCampaign`

- **HTTP**: `POST /orgs/{org}/campaigns`
- **What it does**: Create a campaign for an organization
- **OpenAPI operationId**: `campaigns/create-campaign`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `404`, `422`, `429`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: unknown | unknown; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ number: number; created_at: string; updated_at: string; name?: string; description: string; managers: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gra...`
- OpenAPI response codes: `200`, `400`, `404`, `422`, `429`, `503`

```ts
import github from "@utdk/github";

type CampaignsCreateCampaignInput = Parameters<typeof github.campaigns.createCampaign> extends [infer T, ...unknown[]] ? T : undefined;
type CampaignsCreateCampaignOutput = Awaited<ReturnType<typeof github.campaigns.createCampaign>>;

const input: CampaignsCreateCampaignInput = {} as { body: unknown | unknown; org: string };
const result: CampaignsCreateCampaignOutput = await github.campaigns.createCampaign(input);

// Result shape (from schema): { number: number; created_at: string; updated_at: string; name?: string; description: string; managers: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gra...
```

### `github.campaigns.deleteCampaign`

- **HTTP**: `DELETE /orgs/{org}/campaigns/{campaign_number}`
- **What it does**: Delete a campaign for an organization
- **OpenAPI operationId**: `campaigns/delete-campaign`
- **Path params**: `campaign_number`
- **Query params**: None
- **Response codes**: `204`, `404`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; campaign_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `503`

```ts
import github from "@utdk/github";

type CampaignsDeleteCampaignInput = Parameters<typeof github.campaigns.deleteCampaign> extends [infer T, ...unknown[]] ? T : undefined;
type CampaignsDeleteCampaignOutput = Awaited<ReturnType<typeof github.campaigns.deleteCampaign>>;

const input: CampaignsDeleteCampaignInput = {} as { org: string; campaign_number: number };
const result: CampaignsDeleteCampaignOutput = await github.campaigns.deleteCampaign(input);

// Result shape (from schema): unknown
```

### `github.campaigns.getCampaignSummary`

- **HTTP**: `GET /orgs/{org}/campaigns/{campaign_number}`
- **What it does**: Get a campaign for an organization
- **OpenAPI operationId**: `campaigns/get-campaign-summary`
- **Path params**: `campaign_number`
- **Query params**: None
- **Response codes**: `200`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; campaign_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ number: number; created_at: string; updated_at: string; name?: string; description: string; managers: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gra...`
- OpenAPI response codes: `200`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type CampaignsGetCampaignSummaryInput = Parameters<typeof github.campaigns.getCampaignSummary> extends [infer T, ...unknown[]] ? T : undefined;
type CampaignsGetCampaignSummaryOutput = Awaited<ReturnType<typeof github.campaigns.getCampaignSummary>>;

const input: CampaignsGetCampaignSummaryInput = {} as { org: string; campaign_number: number };
const result: CampaignsGetCampaignSummaryOutput = await github.campaigns.getCampaignSummary(input);

// Result shape (from schema): { number: number; created_at: string; updated_at: string; name?: string; description: string; managers: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gra...
```

### `github.campaigns.updateCampaign`

- **HTTP**: `PATCH /orgs/{org}/campaigns/{campaign_number}`
- **What it does**: Update a campaign
- **OpenAPI operationId**: `campaigns/update-campaign`
- **Path params**: `campaign_number`
- **Query params**: None
- **Response codes**: `200`, `400`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; description?: string; managers?: (string)[]; team_managers?: (string)[]; ends_at?: string; contact_link?: string | null; state?: "open" | "closed"; org: string; campaign_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ number: number; created_at: string; updated_at: string; name?: string; description: string; managers: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gra...`
- OpenAPI response codes: `200`, `400`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type CampaignsUpdateCampaignInput = Parameters<typeof github.campaigns.updateCampaign> extends [infer T, ...unknown[]] ? T : undefined;
type CampaignsUpdateCampaignOutput = Awaited<ReturnType<typeof github.campaigns.updateCampaign>>;

const input: CampaignsUpdateCampaignInput = {} as { name?: string; description?: string; managers?: (string)[]; team_managers?: (string)[]; ends_at?: string; contact_link?: string | null; state?: "open" | "closed"; org: string; campaign_number: number };
const result: CampaignsUpdateCampaignOutput = await github.campaigns.updateCampaign(input);

// Result shape (from schema): { number: number; created_at: string; updated_at: string; name?: string; description: string; managers: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gra...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
