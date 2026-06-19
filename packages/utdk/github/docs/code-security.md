# Code Security

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.codeSecurity.getConfigurationsForEnterprise`

- **HTTP**: `GET /enterprises/{enterprise}/code-security/configurations`
- **What it does**: Get code security configurations for an enterprise
- **OpenAPI operationId**: `code-security/get-configurations-for-enterprise`
- **Path params**: None
- **Query params**: `per_page`
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; per_page?: number; before?: string; after?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enable...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CodeSecurityGetConfigurationsForEnterpriseInput = Parameters<typeof github.codeSecurity.getConfigurationsForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityGetConfigurationsForEnterpriseOutput = Awaited<ReturnType<typeof github.codeSecurity.getConfigurationsForEnterprise>>;

const input: CodeSecurityGetConfigurationsForEnterpriseInput = {} as { enterprise: string; per_page?: number; before?: string; after?: string };
const result: CodeSecurityGetConfigurationsForEnterpriseOutput = await github.codeSecurity.getConfigurationsForEnterprise(input);

// Result shape (from schema): ({ id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enable...
```

### `github.codeSecurity.createConfigurationForEnterprise`

- **HTTP**: `POST /enterprises/{enterprise}/code-security/configurations`
- **What it does**: Create a code security configuration for an enterprise
- **OpenAPI operationId**: `code-security/create-configuration-for-enterprise`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `400`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; description: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; code_security?: "enabled" | "disabled" | "not_set"; dependency_graph?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action_options?: { labeled_runners?: boolean }; dependabot_alerts?: "enabled" | "disabled" | "not_set"; dependabot_security_updates?: "enabled" | "disabled" | "not_set"; code_scanning_options?: { allow_advanced?: boolean | null } | null; code_scanning_default_setup?: "enabled" | "disabled" | "not_set"; code_scanning_default_setup_options?: { runner_type?: "standard" | "labeled" | "not_set"; runner_label?: string | null } | null; code_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_protection?: "enabled" | "disabled" | "not_set"; secret_scanning?: "enabled" | "disabled" | "not_set"; secret_scanning_push_protection?: "enabled" | "disabled" | "not_set"; secret_scanning_validity_checks?: "enabled" | "disabled" | "not_set"; secret_scanning_non_provider_patterns?: "enabled" | "disabled" | "not_set"; secret_scanning_generic_secrets?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_scanning_extended_metadata?: "enabled" | "disabled" | "not_set"; private_vulnerability_reporting?: "enabled" | "disabled" | "not_set"; enforcement?: "enforced" | "unenforced"; enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enabled...`
- OpenAPI response codes: `201`, `400`, `403`, `404`

```ts
import github from "@utdk/github";

type CodeSecurityCreateConfigurationForEnterpriseInput = Parameters<typeof github.codeSecurity.createConfigurationForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityCreateConfigurationForEnterpriseOutput = Awaited<ReturnType<typeof github.codeSecurity.createConfigurationForEnterprise>>;

const input: CodeSecurityCreateConfigurationForEnterpriseInput = {} as { name: string; description: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; code_security?: "enabled" | "disabled" | "not_set"; dependency_graph?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action_options?: { labeled_runners?: boolean }; dependabot_alerts?: "enabled" | "disabled" | "not_set"; dependabot_security_updates?: "enabled" | "disabled" | "not_set"; code_scanning_options?: { allow_advanced?: boolean | null } | null; code_scanning_default_setup?: "enabled" | "disabled" | "not_set"; code_scanning_default_setup_options?: { runner_type?: "standard" | "labeled" | "not_set"; runner_label?: string | null } | null; code_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_protection?: "enabled" | "disabled" | "not_set"; secret_scanning?: "enabled" | "disabled" | "not_set"; secret_scanning_push_protection?: "enabled" | "disabled" | "not_set"; secret_scanning_validity_checks?: "enabled" | "disabled" | "not_set"; secret_scanning_non_provider_patterns?: "enabled" | "disabled" | "not_set"; secret_scanning_generic_secrets?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_scanning_extended_metadata?: "enabled" | "disabled" | "not_set"; private_vulnerability_reporting?: "enabled" | "disabled" | "not_set"; enforcement?: "enforced" | "unenforced"; enterprise: string };
const result: CodeSecurityCreateConfigurationForEnterpriseOutput = await github.codeSecurity.createConfigurationForEnterprise(input);

// Result shape (from schema): { id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enabled...
```

### `github.codeSecurity.deleteConfigurationForEnterprise`

- **HTTP**: `DELETE /enterprises/{enterprise}/code-security/configurations/{configuration_id}`
- **What it does**: Delete a code security configuration for an enterprise
- **OpenAPI operationId**: `code-security/delete-configuration-for-enterprise`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `400`, `403`, `404`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; configuration_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`, `403`, `404`, `409`

```ts
import github from "@utdk/github";

type CodeSecurityDeleteConfigurationForEnterpriseInput = Parameters<typeof github.codeSecurity.deleteConfigurationForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityDeleteConfigurationForEnterpriseOutput = Awaited<ReturnType<typeof github.codeSecurity.deleteConfigurationForEnterprise>>;

const input: CodeSecurityDeleteConfigurationForEnterpriseInput = {} as { enterprise: string; configuration_id: number };
const result: CodeSecurityDeleteConfigurationForEnterpriseOutput = await github.codeSecurity.deleteConfigurationForEnterprise(input);

// Result shape (from schema): unknown
```

### `github.codeSecurity.getSingleConfigurationForEnterprise`

- **HTTP**: `GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}`
- **What it does**: Retrieve a code security configuration of an enterprise
- **OpenAPI operationId**: `code-security/get-single-configuration-for-enterprise`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; configuration_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enabled...`
- OpenAPI response codes: `200`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type CodeSecurityGetSingleConfigurationForEnterpriseInput = Parameters<typeof github.codeSecurity.getSingleConfigurationForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityGetSingleConfigurationForEnterpriseOutput = Awaited<ReturnType<typeof github.codeSecurity.getSingleConfigurationForEnterprise>>;

const input: CodeSecurityGetSingleConfigurationForEnterpriseInput = {} as { enterprise: string; configuration_id: number };
const result: CodeSecurityGetSingleConfigurationForEnterpriseOutput = await github.codeSecurity.getSingleConfigurationForEnterprise(input);

// Result shape (from schema): { id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enabled...
```

### `github.codeSecurity.updateEnterpriseConfiguration`

- **HTTP**: `PATCH /enterprises/{enterprise}/code-security/configurations/{configuration_id}`
- **What it does**: Update a custom code security configuration for an enterprise
- **OpenAPI operationId**: `code-security/update-enterprise-configuration`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `404`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; code_security?: "enabled" | "disabled" | "not_set"; dependency_graph?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action_options?: { labeled_runners?: boolean }; dependabot_alerts?: "enabled" | "disabled" | "not_set"; dependabot_security_updates?: "enabled" | "disabled" | "not_set"; code_scanning_default_setup?: "enabled" | "disabled" | "not_set"; code_scanning_default_setup_options?: { runner_type?: "standard" | "labeled" | "not_set"; runner_label?: string | null } | null; code_scanning_options?: { allow_advanced?: boolean | null } | null; code_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_protection?: "enabled" | "disabled" | "not_set"; secret_scanning?: "enabled" | "disabled" | "not_set"; secret_scanning_push_protection?: "enabled" | "disabled" | "not_set"; secret_scanning_validity_checks?: "enabled" | "disabled" | "not_set"; secret_scanning_non_provider_patterns?: "enabled" | "disabled" | "not_set"; secret_scanning_generic_secrets?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_scanning_extended_metadata?: "enabled" | "disabled" | "not_set"; private_vulnerability_reporting?: "enabled" | "disabled" | "not_set"; enforcement?: "enforced" | "unenforced"; enterprise: string; configuration_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enabled...`
- OpenAPI response codes: `200`, `304`, `403`, `404`, `409`

```ts
import github from "@utdk/github";

type CodeSecurityUpdateEnterpriseConfigurationInput = Parameters<typeof github.codeSecurity.updateEnterpriseConfiguration> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityUpdateEnterpriseConfigurationOutput = Awaited<ReturnType<typeof github.codeSecurity.updateEnterpriseConfiguration>>;

const input: CodeSecurityUpdateEnterpriseConfigurationInput = {} as { name?: string; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; code_security?: "enabled" | "disabled" | "not_set"; dependency_graph?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action_options?: { labeled_runners?: boolean }; dependabot_alerts?: "enabled" | "disabled" | "not_set"; dependabot_security_updates?: "enabled" | "disabled" | "not_set"; code_scanning_default_setup?: "enabled" | "disabled" | "not_set"; code_scanning_default_setup_options?: { runner_type?: "standard" | "labeled" | "not_set"; runner_label?: string | null } | null; code_scanning_options?: { allow_advanced?: boolean | null } | null; code_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_protection?: "enabled" | "disabled" | "not_set"; secret_scanning?: "enabled" | "disabled" | "not_set"; secret_scanning_push_protection?: "enabled" | "disabled" | "not_set"; secret_scanning_validity_checks?: "enabled" | "disabled" | "not_set"; secret_scanning_non_provider_patterns?: "enabled" | "disabled" | "not_set"; secret_scanning_generic_secrets?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_scanning_extended_metadata?: "enabled" | "disabled" | "not_set"; private_vulnerability_reporting?: "enabled" | "disabled" | "not_set"; enforcement?: "enforced" | "unenforced"; enterprise: string; configuration_id: number };
const result: CodeSecurityUpdateEnterpriseConfigurationOutput = await github.codeSecurity.updateEnterpriseConfiguration(input);

// Result shape (from schema): { id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enabled...
```

### `github.codeSecurity.attachEnterpriseConfiguration`

- **HTTP**: `POST /enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach`
- **What it does**: Attach an enterprise configuration to repositories
- **OpenAPI operationId**: `code-security/attach-enterprise-configuration`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `403`, `404`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ scope: "all" | "all_without_configurations"; enterprise: string; configuration_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `403`, `404`, `409`

```ts
import github from "@utdk/github";

type CodeSecurityAttachEnterpriseConfigurationInput = Parameters<typeof github.codeSecurity.attachEnterpriseConfiguration> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityAttachEnterpriseConfigurationOutput = Awaited<ReturnType<typeof github.codeSecurity.attachEnterpriseConfiguration>>;

const input: CodeSecurityAttachEnterpriseConfigurationInput = {} as { scope: "all" | "all_without_configurations"; enterprise: string; configuration_id: number };
const result: CodeSecurityAttachEnterpriseConfigurationOutput = await github.codeSecurity.attachEnterpriseConfiguration(input);

// Result shape (from schema): unknown
```

### `github.codeSecurity.setConfigurationAsDefaultForEnterprise`

- **HTTP**: `PUT /enterprises/{enterprise}/code-security/configurations/{configuration_id}/defaults`
- **What it does**: Set a code security configuration as a default for an enterprise
- **OpenAPI operationId**: `code-security/set-configuration-as-default-for-enterprise`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ default_for_new_repos?: "all" | "none" | "private_and_internal" | "public"; enterprise: string; configuration_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ default_for_new_repos?: "all" | "none" | "private_and_internal" | "public"; configuration?: { id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CodeSecuritySetConfigurationAsDefaultForEnterpriseInput = Parameters<typeof github.codeSecurity.setConfigurationAsDefaultForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecuritySetConfigurationAsDefaultForEnterpriseOutput = Awaited<ReturnType<typeof github.codeSecurity.setConfigurationAsDefaultForEnterprise>>;

const input: CodeSecuritySetConfigurationAsDefaultForEnterpriseInput = {} as { default_for_new_repos?: "all" | "none" | "private_and_internal" | "public"; enterprise: string; configuration_id: number };
const result: CodeSecuritySetConfigurationAsDefaultForEnterpriseOutput = await github.codeSecurity.setConfigurationAsDefaultForEnterprise(input);

// Result shape (from schema): { default_for_new_repos?: "all" | "none" | "private_and_internal" | "public"; configuration?: { id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security...
```

### `github.codeSecurity.getRepositoriesForEnterpriseConfiguration`

- **HTTP**: `GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}/repositories`
- **What it does**: Get repositories associated with an enterprise code security configuration
- **OpenAPI operationId**: `code-security/get-repositories-for-enterprise-configuration`
- **Path params**: None
- **Query params**: `per_page`, `status`
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; configuration_id: number; per_page?: number; before?: string; after?: string; status?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ status?: "attached" | "attaching" | "detached" | "removed" | "enforced" | "failed" | "updating" | "removed_by_enterprise"; repository?: { id: number; node_id: string; name: string; full_name: string; owner: { name?: ...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CodeSecurityGetRepositoriesForEnterpriseConfigurationInput = Parameters<typeof github.codeSecurity.getRepositoriesForEnterpriseConfiguration> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityGetRepositoriesForEnterpriseConfigurationOutput = Awaited<ReturnType<typeof github.codeSecurity.getRepositoriesForEnterpriseConfiguration>>;

const input: CodeSecurityGetRepositoriesForEnterpriseConfigurationInput = {} as { enterprise: string; configuration_id: number; per_page?: number; before?: string; after?: string; status?: string };
const result: CodeSecurityGetRepositoriesForEnterpriseConfigurationOutput = await github.codeSecurity.getRepositoriesForEnterpriseConfiguration(input);

// Result shape (from schema): ({ status?: "attached" | "attaching" | "detached" | "removed" | "enforced" | "failed" | "updating" | "removed_by_enterprise"; repository?: { id: number; node_id: string; name: string; full_name: string; owner: { name?: ...
```

### `github.codeSecurity.getDefaultConfigurationsForEnterprise`

- **HTTP**: `GET /enterprises/{enterprise}/code-security/configurations/defaults`
- **What it does**: Get default code security configurations for an enterprise
- **OpenAPI operationId**: `code-security/get-default-configurations-for-enterprise`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ default_for_new_repos?: "public" | "private_and_internal" | "all"; configuration?: { id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enab...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type CodeSecurityGetDefaultConfigurationsForEnterpriseInput = Parameters<typeof github.codeSecurity.getDefaultConfigurationsForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityGetDefaultConfigurationsForEnterpriseOutput = Awaited<ReturnType<typeof github.codeSecurity.getDefaultConfigurationsForEnterprise>>;

const input: CodeSecurityGetDefaultConfigurationsForEnterpriseInput = {} as { enterprise: string };
const result: CodeSecurityGetDefaultConfigurationsForEnterpriseOutput = await github.codeSecurity.getDefaultConfigurationsForEnterprise(input);

// Result shape (from schema): ({ default_for_new_repos?: "public" | "private_and_internal" | "all"; configuration?: { id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enab...
```

### `github.codeSecurity.getConfigurationsForOrg`

- **HTTP**: `GET /orgs/{org}/code-security/configurations`
- **What it does**: Get code security configurations for an organization
- **OpenAPI operationId**: `code-security/get-configurations-for-org`
- **Path params**: None
- **Query params**: `target_type`, `per_page`
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; target_type?: "global" | "all"; per_page?: number; before?: string; after?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enable...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CodeSecurityGetConfigurationsForOrgInput = Parameters<typeof github.codeSecurity.getConfigurationsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityGetConfigurationsForOrgOutput = Awaited<ReturnType<typeof github.codeSecurity.getConfigurationsForOrg>>;

const input: CodeSecurityGetConfigurationsForOrgInput = {} as { org: string; target_type?: "global" | "all"; per_page?: number; before?: string; after?: string };
const result: CodeSecurityGetConfigurationsForOrgOutput = await github.codeSecurity.getConfigurationsForOrg(input);

// Result shape (from schema): ({ id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enable...
```

### `github.codeSecurity.createConfiguration`

- **HTTP**: `POST /orgs/{org}/code-security/configurations`
- **What it does**: Create a code security configuration
- **OpenAPI operationId**: `code-security/create-configuration`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; description: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; code_security?: "enabled" | "disabled" | "not_set"; dependency_graph?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action_options?: { labeled_runners?: boolean }; dependabot_alerts?: "enabled" | "disabled" | "not_set"; dependabot_security_updates?: "enabled" | "disabled" | "not_set"; dependabot_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; code_scanning_options?: { allow_advanced?: boolean | null } | null; code_scanning_default_setup?: "enabled" | "disabled" | "not_set"; code_scanning_default_setup_options?: { runner_type?: "standard" | "labeled" | "not_set"; runner_label?: string | null } | null; code_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_protection?: "enabled" | "disabled" | "not_set"; secret_scanning?: "enabled" | "disabled" | "not_set"; secret_scanning_push_protection?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_bypass?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_bypass_options?: { reviewers?: ({ reviewer_id: number; reviewer_type: "TEAM" | "ROLE"; mode?: "ALWAYS" | "EXEMPT" })[] }; secret_scanning_validity_checks?: "enabled" | "disabled" | "not_set"; secret_scanning_non_provider_patterns?: "enabled" | "disabled" | "not_set"; secret_scanning_generic_secrets?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_scanning_extended_metadata?: "enabled" | "disabled" | "not_set"; private_vulnerability_reporting?: "enabled" | "disabled" | "not_set"; enforcement?: "enforced" | "unenforced"; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enabled...`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type CodeSecurityCreateConfigurationInput = Parameters<typeof github.codeSecurity.createConfiguration> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityCreateConfigurationOutput = Awaited<ReturnType<typeof github.codeSecurity.createConfiguration>>;

const input: CodeSecurityCreateConfigurationInput = {} as { name: string; description: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; code_security?: "enabled" | "disabled" | "not_set"; dependency_graph?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action_options?: { labeled_runners?: boolean }; dependabot_alerts?: "enabled" | "disabled" | "not_set"; dependabot_security_updates?: "enabled" | "disabled" | "not_set"; dependabot_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; code_scanning_options?: { allow_advanced?: boolean | null } | null; code_scanning_default_setup?: "enabled" | "disabled" | "not_set"; code_scanning_default_setup_options?: { runner_type?: "standard" | "labeled" | "not_set"; runner_label?: string | null } | null; code_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_protection?: "enabled" | "disabled" | "not_set"; secret_scanning?: "enabled" | "disabled" | "not_set"; secret_scanning_push_protection?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_bypass?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_bypass_options?: { reviewers?: ({ reviewer_id: number; reviewer_type: "TEAM" | "ROLE"; mode?: "ALWAYS" | "EXEMPT" })[] }; secret_scanning_validity_checks?: "enabled" | "disabled" | "not_set"; secret_scanning_non_provider_patterns?: "enabled" | "disabled" | "not_set"; secret_scanning_generic_secrets?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_scanning_extended_metadata?: "enabled" | "disabled" | "not_set"; private_vulnerability_reporting?: "enabled" | "disabled" | "not_set"; enforcement?: "enforced" | "unenforced"; org: string };
const result: CodeSecurityCreateConfigurationOutput = await github.codeSecurity.createConfiguration(input);

// Result shape (from schema): { id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enabled...
```

### `github.codeSecurity.deleteConfiguration`

- **HTTP**: `DELETE /orgs/{org}/code-security/configurations/{configuration_id}`
- **What it does**: Delete a code security configuration
- **OpenAPI operationId**: `code-security/delete-configuration`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `400`, `403`, `404`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; configuration_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`, `403`, `404`, `409`

```ts
import github from "@utdk/github";

type CodeSecurityDeleteConfigurationInput = Parameters<typeof github.codeSecurity.deleteConfiguration> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityDeleteConfigurationOutput = Awaited<ReturnType<typeof github.codeSecurity.deleteConfiguration>>;

const input: CodeSecurityDeleteConfigurationInput = {} as { org: string; configuration_id: number };
const result: CodeSecurityDeleteConfigurationOutput = await github.codeSecurity.deleteConfiguration(input);

// Result shape (from schema): unknown
```

### `github.codeSecurity.getConfiguration`

- **HTTP**: `GET /orgs/{org}/code-security/configurations/{configuration_id}`
- **What it does**: Get a code security configuration
- **OpenAPI operationId**: `code-security/get-configuration`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; configuration_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enabled...`
- OpenAPI response codes: `200`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type CodeSecurityGetConfigurationInput = Parameters<typeof github.codeSecurity.getConfiguration> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityGetConfigurationOutput = Awaited<ReturnType<typeof github.codeSecurity.getConfiguration>>;

const input: CodeSecurityGetConfigurationInput = {} as { org: string; configuration_id: number };
const result: CodeSecurityGetConfigurationOutput = await github.codeSecurity.getConfiguration(input);

// Result shape (from schema): { id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enabled...
```

### `github.codeSecurity.updateConfiguration`

- **HTTP**: `PATCH /orgs/{org}/code-security/configurations/{configuration_id}`
- **What it does**: Update a code security configuration
- **OpenAPI operationId**: `code-security/update-configuration`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; code_security?: "enabled" | "disabled" | "not_set"; dependency_graph?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action_options?: { labeled_runners?: boolean }; dependabot_alerts?: "enabled" | "disabled" | "not_set"; dependabot_security_updates?: "enabled" | "disabled" | "not_set"; dependabot_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; code_scanning_default_setup?: "enabled" | "disabled" | "not_set"; code_scanning_default_setup_options?: { runner_type?: "standard" | "labeled" | "not_set"; runner_label?: string | null } | null; code_scanning_options?: { allow_advanced?: boolean | null } | null; code_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_protection?: "enabled" | "disabled" | "not_set"; secret_scanning?: "enabled" | "disabled" | "not_set"; secret_scanning_push_protection?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_bypass?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_bypass_options?: { reviewers?: ({ reviewer_id: number; reviewer_type: "TEAM" | "ROLE"; mode?: "ALWAYS" | "EXEMPT" })[] }; secret_scanning_validity_checks?: "enabled" | "disabled" | "not_set"; secret_scanning_non_provider_patterns?: "enabled" | "disabled" | "not_set"; secret_scanning_generic_secrets?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_scanning_extended_metadata?: "enabled" | "disabled" | "not_set"; private_vulnerability_reporting?: "enabled" | "disabled" | "not_set"; enforcement?: "enforced" | "unenforced"; org: string; configuration_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enabled...`
- OpenAPI response codes: `200`, `204`

```ts
import github from "@utdk/github";

type CodeSecurityUpdateConfigurationInput = Parameters<typeof github.codeSecurity.updateConfiguration> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityUpdateConfigurationOutput = Awaited<ReturnType<typeof github.codeSecurity.updateConfiguration>>;

const input: CodeSecurityUpdateConfigurationInput = {} as { name?: string; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; code_security?: "enabled" | "disabled" | "not_set"; dependency_graph?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action?: "enabled" | "disabled" | "not_set"; dependency_graph_autosubmit_action_options?: { labeled_runners?: boolean }; dependabot_alerts?: "enabled" | "disabled" | "not_set"; dependabot_security_updates?: "enabled" | "disabled" | "not_set"; dependabot_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; code_scanning_default_setup?: "enabled" | "disabled" | "not_set"; code_scanning_default_setup_options?: { runner_type?: "standard" | "labeled" | "not_set"; runner_label?: string | null } | null; code_scanning_options?: { allow_advanced?: boolean | null } | null; code_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_protection?: "enabled" | "disabled" | "not_set"; secret_scanning?: "enabled" | "disabled" | "not_set"; secret_scanning_push_protection?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_bypass?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_bypass_options?: { reviewers?: ({ reviewer_id: number; reviewer_type: "TEAM" | "ROLE"; mode?: "ALWAYS" | "EXEMPT" })[] }; secret_scanning_validity_checks?: "enabled" | "disabled" | "not_set"; secret_scanning_non_provider_patterns?: "enabled" | "disabled" | "not_set"; secret_scanning_generic_secrets?: "enabled" | "disabled" | "not_set"; secret_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set"; secret_scanning_extended_metadata?: "enabled" | "disabled" | "not_set"; private_vulnerability_reporting?: "enabled" | "disabled" | "not_set"; enforcement?: "enforced" | "unenforced"; org: string; configuration_id: number };
const result: CodeSecurityUpdateConfigurationOutput = await github.codeSecurity.updateConfiguration(input);

// Result shape (from schema): { id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enabled" | "disabled" | "code_security" | "secret_protection"; dependency_graph?: "enabled...
```

### `github.codeSecurity.attachConfiguration`

- **HTTP**: `POST /orgs/{org}/code-security/configurations/{configuration_id}/attach`
- **What it does**: Attach a configuration to repositories
- **OpenAPI operationId**: `code-security/attach-configuration`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ scope: "all" | "all_without_configurations" | "public" | "private_or_internal" | "selected"; selected_repository_ids?: (number)[]; org: string; configuration_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`

```ts
import github from "@utdk/github";

type CodeSecurityAttachConfigurationInput = Parameters<typeof github.codeSecurity.attachConfiguration> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityAttachConfigurationOutput = Awaited<ReturnType<typeof github.codeSecurity.attachConfiguration>>;

const input: CodeSecurityAttachConfigurationInput = {} as { scope: "all" | "all_without_configurations" | "public" | "private_or_internal" | "selected"; selected_repository_ids?: (number)[]; org: string; configuration_id: number };
const result: CodeSecurityAttachConfigurationOutput = await github.codeSecurity.attachConfiguration(input);

// Result shape (from schema): unknown
```

### `github.codeSecurity.setConfigurationAsDefault`

- **HTTP**: `PUT /orgs/{org}/code-security/configurations/{configuration_id}/defaults`
- **What it does**: Set a code security configuration as a default for an organization
- **OpenAPI operationId**: `code-security/set-configuration-as-default`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ default_for_new_repos?: "all" | "none" | "private_and_internal" | "public"; org: string; configuration_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ default_for_new_repos?: "all" | "none" | "private_and_internal" | "public"; configuration?: { id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CodeSecuritySetConfigurationAsDefaultInput = Parameters<typeof github.codeSecurity.setConfigurationAsDefault> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecuritySetConfigurationAsDefaultOutput = Awaited<ReturnType<typeof github.codeSecurity.setConfigurationAsDefault>>;

const input: CodeSecuritySetConfigurationAsDefaultInput = {} as { default_for_new_repos?: "all" | "none" | "private_and_internal" | "public"; org: string; configuration_id: number };
const result: CodeSecuritySetConfigurationAsDefaultOutput = await github.codeSecurity.setConfigurationAsDefault(input);

// Result shape (from schema): { default_for_new_repos?: "all" | "none" | "private_and_internal" | "public"; configuration?: { id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security...
```

### `github.codeSecurity.getRepositoriesForConfiguration`

- **HTTP**: `GET /orgs/{org}/code-security/configurations/{configuration_id}/repositories`
- **What it does**: Get repositories associated with a code security configuration
- **OpenAPI operationId**: `code-security/get-repositories-for-configuration`
- **Path params**: None
- **Query params**: `per_page`, `status`
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; configuration_id: number; per_page?: number; before?: string; after?: string; status?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ status?: "attached" | "attaching" | "detached" | "removed" | "enforced" | "failed" | "updating" | "removed_by_enterprise"; repository?: { id: number; node_id: string; name: string; full_name: string; owner: { name?: ...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type CodeSecurityGetRepositoriesForConfigurationInput = Parameters<typeof github.codeSecurity.getRepositoriesForConfiguration> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityGetRepositoriesForConfigurationOutput = Awaited<ReturnType<typeof github.codeSecurity.getRepositoriesForConfiguration>>;

const input: CodeSecurityGetRepositoriesForConfigurationInput = {} as { org: string; configuration_id: number; per_page?: number; before?: string; after?: string; status?: string };
const result: CodeSecurityGetRepositoriesForConfigurationOutput = await github.codeSecurity.getRepositoriesForConfiguration(input);

// Result shape (from schema): ({ status?: "attached" | "attaching" | "detached" | "removed" | "enforced" | "failed" | "updating" | "removed_by_enterprise"; repository?: { id: number; node_id: string; name: string; full_name: string; owner: { name?: ...
```

### `github.codeSecurity.getDefaultConfigurations`

- **HTTP**: `GET /orgs/{org}/code-security/configurations/defaults`
- **What it does**: Get default code security configurations
- **OpenAPI operationId**: `code-security/get-default-configurations`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ default_for_new_repos?: "public" | "private_and_internal" | "all"; configuration?: { id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enab...`
- OpenAPI response codes: `200`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type CodeSecurityGetDefaultConfigurationsInput = Parameters<typeof github.codeSecurity.getDefaultConfigurations> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityGetDefaultConfigurationsOutput = Awaited<ReturnType<typeof github.codeSecurity.getDefaultConfigurations>>;

const input: CodeSecurityGetDefaultConfigurationsInput = {} as { org: string };
const result: CodeSecurityGetDefaultConfigurationsOutput = await github.codeSecurity.getDefaultConfigurations(input);

// Result shape (from schema): ({ default_for_new_repos?: "public" | "private_and_internal" | "all"; configuration?: { id?: number; name?: string; target_type?: "global" | "organization" | "enterprise"; description?: string; advanced_security?: "enab...
```

### `github.codeSecurity.detachConfiguration`

- **HTTP**: `DELETE /orgs/{org}/code-security/configurations/detach`
- **What it does**: Detach configurations from repositories
- **OpenAPI operationId**: `code-security/detach-configuration`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `400`, `403`, `404`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_repository_ids: (number)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`, `403`, `404`, `409`

```ts
import github from "@utdk/github";

type CodeSecurityDetachConfigurationInput = Parameters<typeof github.codeSecurity.detachConfiguration> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityDetachConfigurationOutput = Awaited<ReturnType<typeof github.codeSecurity.detachConfiguration>>;

const input: CodeSecurityDetachConfigurationInput = {} as { selected_repository_ids: (number)[]; org: string };
const result: CodeSecurityDetachConfigurationOutput = await github.codeSecurity.detachConfiguration(input);

// Result shape (from schema): unknown
```

### `github.codeSecurity.getConfigurationForRepository`

- **HTTP**: `GET /repos/{owner}/{repo}/code-security-configuration`
- **What it does**: Get the code security configuration associated with a repository
- **OpenAPI operationId**: `code-security/get-configuration-for-repository`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `204`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ status?: "attached" | "attaching" | "detached" | "removed" | "enforced" | "failed" | "updating" | "removed_by_enterprise"; configuration?: { id?: number; name?: string; target_type?: "global" | "organization" | "enter...`
- OpenAPI response codes: `200`, `204`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type CodeSecurityGetConfigurationForRepositoryInput = Parameters<typeof github.codeSecurity.getConfigurationForRepository> extends [infer T, ...unknown[]] ? T : undefined;
type CodeSecurityGetConfigurationForRepositoryOutput = Awaited<ReturnType<typeof github.codeSecurity.getConfigurationForRepository>>;

const input: CodeSecurityGetConfigurationForRepositoryInput = {} as { owner: string; repo: string };
const result: CodeSecurityGetConfigurationForRepositoryOutput = await github.codeSecurity.getConfigurationForRepository(input);

// Result shape (from schema): { status?: "attached" | "attaching" | "detached" | "removed" | "enforced" | "failed" | "updating" | "removed_by_enterprise"; configuration?: { id?: number; name?: string; target_type?: "global" | "organization" | "enter...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
