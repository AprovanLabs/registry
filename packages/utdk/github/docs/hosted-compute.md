# Hosted Compute

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.hostedCompute.listNetworkConfigurationsForOrg`

- **HTTP**: `GET /orgs/{org}/settings/network-configurations`
- **What it does**: List hosted compute network configurations for an organization
- **OpenAPI operationId**: `hosted-compute/list-network-configurations-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; network_configurations: ({ id: string; name: string; compute_service?: "none" | "actions" | "codespaces"; network_settings_ids?: (string)[]; failover_network_settings_ids?: (string)[]; failover_ne...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type HostedComputeListNetworkConfigurationsForOrgInput = Parameters<typeof github.hostedCompute.listNetworkConfigurationsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type HostedComputeListNetworkConfigurationsForOrgOutput = Awaited<ReturnType<typeof github.hostedCompute.listNetworkConfigurationsForOrg>>;

const input: HostedComputeListNetworkConfigurationsForOrgInput = {} as { org: string; per_page?: number; page?: number };
const result: HostedComputeListNetworkConfigurationsForOrgOutput = await github.hostedCompute.listNetworkConfigurationsForOrg(input);

// Result shape (from schema): { total_count: number; network_configurations: ({ id: string; name: string; compute_service?: "none" | "actions" | "codespaces"; network_settings_ids?: (string)[]; failover_network_settings_ids?: (string)[]; failover_ne...
```

### `github.hostedCompute.createNetworkConfigurationForOrg`

- **HTTP**: `POST /orgs/{org}/settings/network-configurations`
- **What it does**: Create a hosted compute network configuration for an organization
- **OpenAPI operationId**: `hosted-compute/create-network-configuration-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; compute_service?: "none" | "actions"; network_settings_ids: (string)[]; failover_network_settings_ids?: (string)[]; failover_network_enabled?: boolean; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: string; name: string; compute_service?: "none" | "actions" | "codespaces"; network_settings_ids?: (string)[]; failover_network_settings_ids?: (string)[]; failover_network_enabled?: boolean; created_on: string | nu...`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type HostedComputeCreateNetworkConfigurationForOrgInput = Parameters<typeof github.hostedCompute.createNetworkConfigurationForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type HostedComputeCreateNetworkConfigurationForOrgOutput = Awaited<ReturnType<typeof github.hostedCompute.createNetworkConfigurationForOrg>>;

const input: HostedComputeCreateNetworkConfigurationForOrgInput = {} as { name: string; compute_service?: "none" | "actions"; network_settings_ids: (string)[]; failover_network_settings_ids?: (string)[]; failover_network_enabled?: boolean; org: string };
const result: HostedComputeCreateNetworkConfigurationForOrgOutput = await github.hostedCompute.createNetworkConfigurationForOrg(input);

// Result shape (from schema): { id: string; name: string; compute_service?: "none" | "actions" | "codespaces"; network_settings_ids?: (string)[]; failover_network_settings_ids?: (string)[]; failover_network_enabled?: boolean; created_on: string | nu...
```

### `github.hostedCompute.deleteNetworkConfigurationFromOrg`

- **HTTP**: `DELETE /orgs/{org}/settings/network-configurations/{network_configuration_id}`
- **What it does**: Delete a hosted compute network configuration from an organization
- **OpenAPI operationId**: `hosted-compute/delete-network-configuration-from-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; network_configuration_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type HostedComputeDeleteNetworkConfigurationFromOrgInput = Parameters<typeof github.hostedCompute.deleteNetworkConfigurationFromOrg> extends [infer T, ...unknown[]] ? T : undefined;
type HostedComputeDeleteNetworkConfigurationFromOrgOutput = Awaited<ReturnType<typeof github.hostedCompute.deleteNetworkConfigurationFromOrg>>;

const input: HostedComputeDeleteNetworkConfigurationFromOrgInput = {} as { org: string; network_configuration_id: string };
const result: HostedComputeDeleteNetworkConfigurationFromOrgOutput = await github.hostedCompute.deleteNetworkConfigurationFromOrg(input);

// Result shape (from schema): unknown
```

### `github.hostedCompute.getNetworkConfigurationForOrg`

- **HTTP**: `GET /orgs/{org}/settings/network-configurations/{network_configuration_id}`
- **What it does**: Get a hosted compute network configuration for an organization
- **OpenAPI operationId**: `hosted-compute/get-network-configuration-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; network_configuration_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: string; name: string; compute_service?: "none" | "actions" | "codespaces"; network_settings_ids?: (string)[]; failover_network_settings_ids?: (string)[]; failover_network_enabled?: boolean; created_on: string | nu...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type HostedComputeGetNetworkConfigurationForOrgInput = Parameters<typeof github.hostedCompute.getNetworkConfigurationForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type HostedComputeGetNetworkConfigurationForOrgOutput = Awaited<ReturnType<typeof github.hostedCompute.getNetworkConfigurationForOrg>>;

const input: HostedComputeGetNetworkConfigurationForOrgInput = {} as { org: string; network_configuration_id: string };
const result: HostedComputeGetNetworkConfigurationForOrgOutput = await github.hostedCompute.getNetworkConfigurationForOrg(input);

// Result shape (from schema): { id: string; name: string; compute_service?: "none" | "actions" | "codespaces"; network_settings_ids?: (string)[]; failover_network_settings_ids?: (string)[]; failover_network_enabled?: boolean; created_on: string | nu...
```

### `github.hostedCompute.updateNetworkConfigurationForOrg`

- **HTTP**: `PATCH /orgs/{org}/settings/network-configurations/{network_configuration_id}`
- **What it does**: Update a hosted compute network configuration for an organization
- **OpenAPI operationId**: `hosted-compute/update-network-configuration-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; compute_service?: "none" | "actions"; network_settings_ids?: (string)[]; failover_network_settings_ids?: (string)[]; failover_network_enabled?: boolean; org: string; network_configuration_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: string; name: string; compute_service?: "none" | "actions" | "codespaces"; network_settings_ids?: (string)[]; failover_network_settings_ids?: (string)[]; failover_network_enabled?: boolean; created_on: string | nu...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type HostedComputeUpdateNetworkConfigurationForOrgInput = Parameters<typeof github.hostedCompute.updateNetworkConfigurationForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type HostedComputeUpdateNetworkConfigurationForOrgOutput = Awaited<ReturnType<typeof github.hostedCompute.updateNetworkConfigurationForOrg>>;

const input: HostedComputeUpdateNetworkConfigurationForOrgInput = {} as { name?: string; compute_service?: "none" | "actions"; network_settings_ids?: (string)[]; failover_network_settings_ids?: (string)[]; failover_network_enabled?: boolean; org: string; network_configuration_id: string };
const result: HostedComputeUpdateNetworkConfigurationForOrgOutput = await github.hostedCompute.updateNetworkConfigurationForOrg(input);

// Result shape (from schema): { id: string; name: string; compute_service?: "none" | "actions" | "codespaces"; network_settings_ids?: (string)[]; failover_network_settings_ids?: (string)[]; failover_network_enabled?: boolean; created_on: string | nu...
```

### `github.hostedCompute.getNetworkSettingsForOrg`

- **HTTP**: `GET /orgs/{org}/settings/network-settings/{network_settings_id}`
- **What it does**: Get a hosted compute network settings resource for an organization
- **OpenAPI operationId**: `hosted-compute/get-network-settings-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; network_settings_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: string; network_configuration_id?: string; name: string; subnet_id: string; region: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type HostedComputeGetNetworkSettingsForOrgInput = Parameters<typeof github.hostedCompute.getNetworkSettingsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type HostedComputeGetNetworkSettingsForOrgOutput = Awaited<ReturnType<typeof github.hostedCompute.getNetworkSettingsForOrg>>;

const input: HostedComputeGetNetworkSettingsForOrgInput = {} as { org: string; network_settings_id: string };
const result: HostedComputeGetNetworkSettingsForOrgOutput = await github.hostedCompute.getNetworkSettingsForOrg(input);

// Result shape (from schema): { id: string; network_configuration_id?: string; name: string; subnet_id: string; region: string }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
