# Orgs

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.orgs.list`

- **HTTP**: `GET /organizations`
- **What it does**: List organizations
- **OpenAPI operationId**: `orgs/list`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ since?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description:...`
- OpenAPI response codes: `200`, `304`

```ts
import github from "@utdk/github";

type OrgsListInput = Parameters<typeof github.orgs.list> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListOutput = Awaited<ReturnType<typeof github.orgs.list>>;

const input: OrgsListInput = {} as { since?: number; per_page?: number };
const result: OrgsListOutput = await github.orgs.list(input);

// Result shape (from schema): ({ login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description:...
```

### `github.orgs.delete`

- **HTTP**: `DELETE /orgs/{org}`
- **What it does**: Delete an organization
- **OpenAPI operationId**: `orgs/delete`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `403`, `404`

```ts
import github from "@utdk/github";

type OrgsDeleteInput = Parameters<typeof github.orgs.delete> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsDeleteOutput = Awaited<ReturnType<typeof github.orgs.delete>>;

const input: OrgsDeleteInput = {} as { org: string };
const result: OrgsDeleteOutput = await github.orgs.delete(input);

// Result shape (from schema): unknown
```

### `github.orgs.get`

- **HTTP**: `GET /orgs/{org}`
- **What it does**: Get an organization
- **OpenAPI operationId**: `orgs/get`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description: ...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type OrgsGetInput = Parameters<typeof github.orgs.get> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsGetOutput = Awaited<ReturnType<typeof github.orgs.get>>;

const input: OrgsGetInput = {} as { org: string };
const result: OrgsGetOutput = await github.orgs.get(input);

// Result shape (from schema): { login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description: ...
```

### `github.orgs.update`

- **HTTP**: `PATCH /orgs/{org}`
- **What it does**: Update an organization
- **OpenAPI operationId**: `orgs/update`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ billing_email?: string; company?: string; email?: string; twitter_username?: string; location?: string; name?: string; description?: string; has_organization_projects?: boolean; has_repository_projects?: boolean; default_repository_permission?: "read" | "write" | "admin" | "none"; members_can_create_repositories?: boolean; members_can_create_internal_repositories?: boolean; members_can_create_private_repositories?: boolean; members_can_create_public_repositories?: boolean; members_allowed_repository_creation_type?: "all" | "private" | "none"; members_can_create_pages?: boolean; members_can_create_public_pages?: boolean; members_can_create_private_pages?: boolean; members_can_fork_private_repositories?: boolean; web_commit_signoff_required?: boolean; blog?: string; advanced_security_enabled_for_new_repositories?: boolean; dependabot_alerts_enabled_for_new_repositories?: boolean; dependabot_security_updates_enabled_for_new_repositories?: boolean; dependency_graph_enabled_for_new_repositories?: boolean; secret_scanning_enabled_for_new_repositories?: boolean; secret_scanning_push_protection_enabled_for_new_repositories?: boolean; secret_scanning_push_protection_custom_link_enabled?: boolean; secret_scanning_push_protection_custom_link?: string; deploy_keys_enabled_for_repositories?: boolean; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description: ...`
- OpenAPI response codes: `200`, `409`, `422`

```ts
import github from "@utdk/github";

type OrgsUpdateInput = Parameters<typeof github.orgs.update> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsUpdateOutput = Awaited<ReturnType<typeof github.orgs.update>>;

const input: OrgsUpdateInput = {} as { billing_email?: string; company?: string; email?: string; twitter_username?: string; location?: string; name?: string; description?: string; has_organization_projects?: boolean; has_repository_projects?: boolean; default_repository_permission?: "read" | "write" | "admin" | "none"; members_can_create_repositories?: boolean; members_can_create_internal_repositories?: boolean; members_can_create_private_repositories?: boolean; members_can_create_public_repositories?: boolean; members_allowed_repository_creation_type?: "all" | "private" | "none"; members_can_create_pages?: boolean; members_can_create_public_pages?: boolean; members_can_create_private_pages?: boolean; members_can_fork_private_repositories?: boolean; web_commit_signoff_required?: boolean; blog?: string; advanced_security_enabled_for_new_repositories?: boolean; dependabot_alerts_enabled_for_new_repositories?: boolean; dependabot_security_updates_enabled_for_new_repositories?: boolean; dependency_graph_enabled_for_new_repositories?: boolean; secret_scanning_enabled_for_new_repositories?: boolean; secret_scanning_push_protection_enabled_for_new_repositories?: boolean; secret_scanning_push_protection_custom_link_enabled?: boolean; secret_scanning_push_protection_custom_link?: string; deploy_keys_enabled_for_repositories?: boolean; org: string };
const result: OrgsUpdateOutput = await github.orgs.update(input);

// Result shape (from schema): { login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description: ...
```

### `github.orgs.enableOrDisableSecurityProductOnAllOrgRepos`

- **HTTP**: `POST /orgs/{org}/{security_product}/{enablement}`
- **What it does**: Enable or disable a security feature for an organization
- **OpenAPI operationId**: `orgs/enable-or-disable-security-product-on-all-org-repos`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ query_suite?: "default" | "extended"; org: string; security_product: "dependency_graph" | "dependabot_alerts" | "dependabot_security_updates" | "advanced_security" | "code_scanning_default_setup" | "secret_scanning" | "secret_scanning_push_protection"; enablement: "enable_all" | "disable_all" }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `422`

```ts
import github from "@utdk/github";

type OrgsEnableOrDisableSecurityProductOnAllOrgReposInput = Parameters<typeof github.orgs.enableOrDisableSecurityProductOnAllOrgRepos> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsEnableOrDisableSecurityProductOnAllOrgReposOutput = Awaited<ReturnType<typeof github.orgs.enableOrDisableSecurityProductOnAllOrgRepos>>;

const input: OrgsEnableOrDisableSecurityProductOnAllOrgReposInput = {} as { query_suite?: "default" | "extended"; org: string; security_product: "dependency_graph" | "dependabot_alerts" | "dependabot_security_updates" | "advanced_security" | "code_scanning_default_setup" | "secret_scanning" | "secret_scanning_push_protection"; enablement: "enable_all" | "disable_all" };
const result: OrgsEnableOrDisableSecurityProductOnAllOrgReposOutput = await github.orgs.enableOrDisableSecurityProductOnAllOrgRepos(input);

// Result shape (from schema): unknown
```

### `github.orgs.listArtifactDeploymentRecords`

- **HTTP**: `GET /orgs/{org}/artifacts/{subject_digest}/metadata/deployment-records`
- **What it does**: List artifact deployment records
- **OpenAPI operationId**: `orgs/list-artifact-deployment-records`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; subject_digest: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count?: number; deployment_records?: ({ id?: number; digest?: string; logical_environment?: string; physical_environment?: string; cluster?: string; deployment_name?: string; tags?: { [key: string]: string | und...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OrgsListArtifactDeploymentRecordsInput = Parameters<typeof github.orgs.listArtifactDeploymentRecords> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListArtifactDeploymentRecordsOutput = Awaited<ReturnType<typeof github.orgs.listArtifactDeploymentRecords>>;

const input: OrgsListArtifactDeploymentRecordsInput = {} as { org: string; subject_digest: string };
const result: OrgsListArtifactDeploymentRecordsOutput = await github.orgs.listArtifactDeploymentRecords(input);

// Result shape (from schema): { total_count?: number; deployment_records?: ({ id?: number; digest?: string; logical_environment?: string; physical_environment?: string; cluster?: string; deployment_name?: string; tags?: { [key: string]: string | und...
```

### `github.orgs.listArtifactStorageRecords`

- **HTTP**: `GET /orgs/{org}/artifacts/{subject_digest}/metadata/storage-records`
- **What it does**: List artifact storage records
- **OpenAPI operationId**: `orgs/list-artifact-storage-records`
- **Path params**: `subject_digest`
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; subject_digest: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count?: number; storage_records?: ({ id?: number; name?: string; digest?: string; artifact_url?: string; registry_url?: string; repository?: string; status?: string; created_at?: string; updated_at?: string })[]...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OrgsListArtifactStorageRecordsInput = Parameters<typeof github.orgs.listArtifactStorageRecords> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListArtifactStorageRecordsOutput = Awaited<ReturnType<typeof github.orgs.listArtifactStorageRecords>>;

const input: OrgsListArtifactStorageRecordsInput = {} as { org: string; subject_digest: string };
const result: OrgsListArtifactStorageRecordsOutput = await github.orgs.listArtifactStorageRecords(input);

// Result shape (from schema): { total_count?: number; storage_records?: ({ id?: number; name?: string; digest?: string; artifact_url?: string; registry_url?: string; repository?: string; status?: string; created_at?: string; updated_at?: string })[]...
```

### `github.orgs.createArtifactDeploymentRecord`

- **HTTP**: `POST /orgs/{org}/artifacts/metadata/deployment-record`
- **What it does**: Create an artifact deployment record
- **OpenAPI operationId**: `orgs/create-artifact-deployment-record`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; digest: string; version?: string; status: "deployed" | "decommissioned"; logical_environment: string; physical_environment?: string; cluster?: string; deployment_name: string; tags?: { [key: string]: string | undefined }; runtime_risks?: ("critical-resource" | "internet-exposed" | "lateral-movement" | "sensitive-data")[]; github_repository?: string; return_records?: boolean; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; deployment_records?: ({ id?: number; digest?: string; logical_environment?: string; physical_environment?: string; cluster?: string; deployment_name?: string; tags?: { [key: string]: string | unde...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type OrgsCreateArtifactDeploymentRecordInput = Parameters<typeof github.orgs.createArtifactDeploymentRecord> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCreateArtifactDeploymentRecordOutput = Awaited<ReturnType<typeof github.orgs.createArtifactDeploymentRecord>>;

const input: OrgsCreateArtifactDeploymentRecordInput = {} as { name: string; digest: string; version?: string; status: "deployed" | "decommissioned"; logical_environment: string; physical_environment?: string; cluster?: string; deployment_name: string; tags?: { [key: string]: string | undefined }; runtime_risks?: ("critical-resource" | "internet-exposed" | "lateral-movement" | "sensitive-data")[]; github_repository?: string; return_records?: boolean; org: string };
const result: OrgsCreateArtifactDeploymentRecordOutput = await github.orgs.createArtifactDeploymentRecord(input);

// Result shape (from schema): { total_count: number; deployment_records?: ({ id?: number; digest?: string; logical_environment?: string; physical_environment?: string; cluster?: string; deployment_name?: string; tags?: { [key: string]: string | unde...
```

### `github.orgs.setClusterDeploymentRecords`

- **HTTP**: `POST /orgs/{org}/artifacts/metadata/deployment-record/cluster/{cluster}`
- **What it does**: Set cluster deployment records
- **OpenAPI operationId**: `orgs/set-cluster-deployment-records`
- **Path params**: `cluster`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ logical_environment: string; physical_environment?: string; deployments: ({ name: string; digest: string; version?: string; status?: "deployed" | "decommissioned"; deployment_name: string; github_repository?: string; tags?: { [key: string]: string | undefined }; runtime_risks?: ("critical-resource" | "internet-exposed" | "lateral-movement" | "sensitive-data")[] })[]; return_records?: boolean; org: string; cluster: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; deployment_records?: ({ id?: number; digest?: string; logical_environment?: string; physical_environment?: string; cluster?: string; deployment_name?: string; tags?: { [key: string]: string | unde...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type OrgsSetClusterDeploymentRecordsInput = Parameters<typeof github.orgs.setClusterDeploymentRecords> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsSetClusterDeploymentRecordsOutput = Awaited<ReturnType<typeof github.orgs.setClusterDeploymentRecords>>;

const input: OrgsSetClusterDeploymentRecordsInput = {} as { logical_environment: string; physical_environment?: string; deployments: ({ name: string; digest: string; version?: string; status?: "deployed" | "decommissioned"; deployment_name: string; github_repository?: string; tags?: { [key: string]: string | undefined }; runtime_risks?: ("critical-resource" | "internet-exposed" | "lateral-movement" | "sensitive-data")[] })[]; return_records?: boolean; org: string; cluster: string };
const result: OrgsSetClusterDeploymentRecordsOutput = await github.orgs.setClusterDeploymentRecords(input);

// Result shape (from schema): { total_count: number; deployment_records?: ({ id?: number; digest?: string; logical_environment?: string; physical_environment?: string; cluster?: string; deployment_name?: string; tags?: { [key: string]: string | unde...
```

### `github.orgs.createArtifactStorageRecord`

- **HTTP**: `POST /orgs/{org}/artifacts/metadata/storage-record`
- **What it does**: Create artifact metadata storage record
- **OpenAPI operationId**: `orgs/create-artifact-storage-record`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; digest: string; version?: string; artifact_url?: string; path?: string; registry_url: string; repository?: string; status?: "active" | "eol" | "deleted"; github_repository?: string; return_records?: boolean; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; storage_records?: ({ id?: number; name?: string; digest?: string; artifact_url?: string | null; registry_url?: string; repository?: string | null; status?: string; created_at?: string; updated_at?...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type OrgsCreateArtifactStorageRecordInput = Parameters<typeof github.orgs.createArtifactStorageRecord> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCreateArtifactStorageRecordOutput = Awaited<ReturnType<typeof github.orgs.createArtifactStorageRecord>>;

const input: OrgsCreateArtifactStorageRecordInput = {} as { name: string; digest: string; version?: string; artifact_url?: string; path?: string; registry_url: string; repository?: string; status?: "active" | "eol" | "deleted"; github_repository?: string; return_records?: boolean; org: string };
const result: OrgsCreateArtifactStorageRecordOutput = await github.orgs.createArtifactStorageRecord(input);

// Result shape (from schema): { total_count: number; storage_records?: ({ id?: number; name?: string; digest?: string; artifact_url?: string | null; registry_url?: string; repository?: string | null; status?: string; created_at?: string; updated_at?...
```

### `github.orgs.deleteAttestationsById`

- **HTTP**: `DELETE /orgs/{org}/attestations/{attestation_id}`
- **What it does**: Delete attestations by ID
- **OpenAPI operationId**: `orgs/delete-attestations-by-id`
- **Path params**: `attestation_id`
- **Query params**: None
- **Response codes**: `200`, `204`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; attestation_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `200`, `204`, `403`, `404`

```ts
import github from "@utdk/github";

type OrgsDeleteAttestationsByIdInput = Parameters<typeof github.orgs.deleteAttestationsById> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsDeleteAttestationsByIdOutput = Awaited<ReturnType<typeof github.orgs.deleteAttestationsById>>;

const input: OrgsDeleteAttestationsByIdInput = {} as { org: string; attestation_id: number };
const result: OrgsDeleteAttestationsByIdOutput = await github.orgs.deleteAttestationsById(input);

// Result shape (from schema): unknown
```

### `github.orgs.listAttestations`

- **HTTP**: `GET /orgs/{org}/attestations/{subject_digest}`
- **What it does**: List attestations
- **OpenAPI operationId**: `orgs/list-attestations`
- **Path params**: `subject_digest`
- **Query params**: `predicate_type`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; subject_digest: string; per_page?: number; before?: string; after?: string; predicate_type?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ attestations?: ({ bundle?: { mediaType?: string; verificationMaterial?: { [key: string]: unknown }; dsseEnvelope?: { [key: string]: unknown } } | null; repository_id?: number; bundle_url?: string; initiator?: string }...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OrgsListAttestationsInput = Parameters<typeof github.orgs.listAttestations> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListAttestationsOutput = Awaited<ReturnType<typeof github.orgs.listAttestations>>;

const input: OrgsListAttestationsInput = {} as { org: string; subject_digest: string; per_page?: number; before?: string; after?: string; predicate_type?: string };
const result: OrgsListAttestationsOutput = await github.orgs.listAttestations(input);

// Result shape (from schema): { attestations?: ({ bundle?: { mediaType?: string; verificationMaterial?: { [key: string]: unknown }; dsseEnvelope?: { [key: string]: unknown } } | null; repository_id?: number; bundle_url?: string; initiator?: string }...
```

### `github.orgs.listAttestationsBulk`

- **HTTP**: `POST /orgs/{org}/attestations/bulk-list`
- **What it does**: List attestations by bulk subject digests
- **OpenAPI operationId**: `orgs/list-attestations-bulk`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ subject_digests: (string)[]; predicate_type?: string; org: string; per_page?: number; before?: string; after?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ attestations_subject_digests?: { [key: string]: ({ bundle?: { mediaType?: string; verificationMaterial?: { [key: string]: unknown }; dsseEnvelope?: { [key: string]: unknown } }; repository_id?: number; bundle_url?: st...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OrgsListAttestationsBulkInput = Parameters<typeof github.orgs.listAttestationsBulk> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListAttestationsBulkOutput = Awaited<ReturnType<typeof github.orgs.listAttestationsBulk>>;

const input: OrgsListAttestationsBulkInput = {} as { subject_digests: (string)[]; predicate_type?: string; org: string; per_page?: number; before?: string; after?: string };
const result: OrgsListAttestationsBulkOutput = await github.orgs.listAttestationsBulk(input);

// Result shape (from schema): { attestations_subject_digests?: { [key: string]: ({ bundle?: { mediaType?: string; verificationMaterial?: { [key: string]: unknown }; dsseEnvelope?: { [key: string]: unknown } }; repository_id?: number; bundle_url?: st...
```

### `github.orgs.deleteAttestationsBulk`

- **HTTP**: `POST /orgs/{org}/attestations/delete-request`
- **What it does**: Delete attestations in bulk
- **OpenAPI operationId**: `orgs/delete-attestations-bulk`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: { subject_digests: (string)[] } | { attestation_ids: (number)[] }; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type OrgsDeleteAttestationsBulkInput = Parameters<typeof github.orgs.deleteAttestationsBulk> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsDeleteAttestationsBulkOutput = Awaited<ReturnType<typeof github.orgs.deleteAttestationsBulk>>;

const input: OrgsDeleteAttestationsBulkInput = {} as { body: { subject_digests: (string)[] } | { attestation_ids: (number)[] }; org: string };
const result: OrgsDeleteAttestationsBulkOutput = await github.orgs.deleteAttestationsBulk(input);

// Result shape (from schema): unknown
```

### `github.orgs.deleteAttestationsBySubjectDigest`

- **HTTP**: `DELETE /orgs/{org}/attestations/digest/{subject_digest}`
- **What it does**: Delete attestations by subject digest
- **OpenAPI operationId**: `orgs/delete-attestations-by-subject-digest`
- **Path params**: `subject_digest`
- **Query params**: None
- **Response codes**: `200`, `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; subject_digest: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `200`, `204`, `404`

```ts
import github from "@utdk/github";

type OrgsDeleteAttestationsBySubjectDigestInput = Parameters<typeof github.orgs.deleteAttestationsBySubjectDigest> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsDeleteAttestationsBySubjectDigestOutput = Awaited<ReturnType<typeof github.orgs.deleteAttestationsBySubjectDigest>>;

const input: OrgsDeleteAttestationsBySubjectDigestInput = {} as { org: string; subject_digest: string };
const result: OrgsDeleteAttestationsBySubjectDigestOutput = await github.orgs.deleteAttestationsBySubjectDigest(input);

// Result shape (from schema): unknown
```

### `github.orgs.listAttestationRepositories`

- **HTTP**: `GET /orgs/{org}/attestations/repositories`
- **What it does**: List attestation repositories
- **OpenAPI operationId**: `orgs/list-attestation-repositories`
- **Path params**: None
- **Query params**: `predicate_type`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; before?: string; after?: string; predicate_type?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id?: number; name?: string })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OrgsListAttestationRepositoriesInput = Parameters<typeof github.orgs.listAttestationRepositories> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListAttestationRepositoriesOutput = Awaited<ReturnType<typeof github.orgs.listAttestationRepositories>>;

const input: OrgsListAttestationRepositoriesInput = {} as { org: string; per_page?: number; before?: string; after?: string; predicate_type?: string };
const result: OrgsListAttestationRepositoriesOutput = await github.orgs.listAttestationRepositories(input);

// Result shape (from schema): ({ id?: number; name?: string })[]
```

### `github.orgs.listBlockedUsers`

- **HTTP**: `GET /orgs/{org}/blocks`
- **What it does**: List users blocked by an organization
- **OpenAPI operationId**: `orgs/list-blocked-users`
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

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OrgsListBlockedUsersInput = Parameters<typeof github.orgs.listBlockedUsers> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListBlockedUsersOutput = Awaited<ReturnType<typeof github.orgs.listBlockedUsers>>;

const input: OrgsListBlockedUsersInput = {} as { org: string; per_page?: number; page?: number };
const result: OrgsListBlockedUsersOutput = await github.orgs.listBlockedUsers(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.orgs.unblockUser`

- **HTTP**: `DELETE /orgs/{org}/blocks/{username}`
- **What it does**: Unblock a user from an organization
- **OpenAPI operationId**: `orgs/unblock-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type OrgsUnblockUserInput = Parameters<typeof github.orgs.unblockUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsUnblockUserOutput = Awaited<ReturnType<typeof github.orgs.unblockUser>>;

const input: OrgsUnblockUserInput = {} as { org: string; username: string };
const result: OrgsUnblockUserOutput = await github.orgs.unblockUser(input);

// Result shape (from schema): unknown
```

### `github.orgs.checkBlockedUser`

- **HTTP**: `GET /orgs/{org}/blocks/{username}`
- **What it does**: Check if a user is blocked by an organization
- **OpenAPI operationId**: `orgs/check-blocked-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type OrgsCheckBlockedUserInput = Parameters<typeof github.orgs.checkBlockedUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCheckBlockedUserOutput = Awaited<ReturnType<typeof github.orgs.checkBlockedUser>>;

const input: OrgsCheckBlockedUserInput = {} as { org: string; username: string };
const result: OrgsCheckBlockedUserOutput = await github.orgs.checkBlockedUser(input);

// Result shape (from schema): unknown
```

### `github.orgs.blockUser`

- **HTTP**: `PUT /orgs/{org}/blocks/{username}`
- **What it does**: Block a user from an organization
- **OpenAPI operationId**: `orgs/block-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `422`

```ts
import github from "@utdk/github";

type OrgsBlockUserInput = Parameters<typeof github.orgs.blockUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsBlockUserOutput = Awaited<ReturnType<typeof github.orgs.blockUser>>;

const input: OrgsBlockUserInput = {} as { org: string; username: string };
const result: OrgsBlockUserOutput = await github.orgs.blockUser(input);

// Result shape (from schema): unknown
```

### `github.orgs.listFailedInvitations`

- **HTTP**: `GET /orgs/{org}/failed_invitations`
- **What it does**: List failed organization invitations
- **OpenAPI operationId**: `orgs/list-failed-invitations`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; login: string | null; email: string | null; role: string; created_at: string; failed_at?: string | null; failed_reason?: string | null; inviter: { name?: string | null; email?: string | null; login: strin...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type OrgsListFailedInvitationsInput = Parameters<typeof github.orgs.listFailedInvitations> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListFailedInvitationsOutput = Awaited<ReturnType<typeof github.orgs.listFailedInvitations>>;

const input: OrgsListFailedInvitationsInput = {} as { org: string; per_page?: number; page?: number };
const result: OrgsListFailedInvitationsOutput = await github.orgs.listFailedInvitations(input);

// Result shape (from schema): ({ id: number; login: string | null; email: string | null; role: string; created_at: string; failed_at?: string | null; failed_reason?: string | null; inviter: { name?: string | null; email?: string | null; login: strin...
```

### `github.orgs.listWebhooks`

- **HTTP**: `GET /orgs/{org}/hooks`
- **What it does**: List organization webhooks
- **OpenAPI operationId**: `orgs/list-webhooks`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; url: string; ping_url: string; deliveries_url?: string; name: string; events: (string)[]; active: boolean; config: { url?: string; insecure_ssl?: string; content_type?: string; secret?: string }; updated_...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type OrgsListWebhooksInput = Parameters<typeof github.orgs.listWebhooks> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListWebhooksOutput = Awaited<ReturnType<typeof github.orgs.listWebhooks>>;

const input: OrgsListWebhooksInput = {} as { org: string; per_page?: number; page?: number };
const result: OrgsListWebhooksOutput = await github.orgs.listWebhooks(input);

// Result shape (from schema): ({ id: number; url: string; ping_url: string; deliveries_url?: string; name: string; events: (string)[]; active: boolean; config: { url?: string; insecure_ssl?: string; content_type?: string; secret?: string }; updated_...
```

### `github.orgs.createWebhook`

- **HTTP**: `POST /orgs/{org}/hooks`
- **What it does**: Create an organization webhook
- **OpenAPI operationId**: `orgs/create-webhook`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; config: { url: string; content_type?: string; secret?: string; insecure_ssl?: string | number; username?: string; password?: string }; events?: (string)[]; active?: boolean; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; url: string; ping_url: string; deliveries_url?: string; name: string; events: (string)[]; active: boolean; config: { url?: string; insecure_ssl?: string; content_type?: string; secret?: string }; updated_a...`
- OpenAPI response codes: `201`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsCreateWebhookInput = Parameters<typeof github.orgs.createWebhook> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCreateWebhookOutput = Awaited<ReturnType<typeof github.orgs.createWebhook>>;

const input: OrgsCreateWebhookInput = {} as { name: string; config: { url: string; content_type?: string; secret?: string; insecure_ssl?: string | number; username?: string; password?: string }; events?: (string)[]; active?: boolean; org: string };
const result: OrgsCreateWebhookOutput = await github.orgs.createWebhook(input);

// Result shape (from schema): { id: number; url: string; ping_url: string; deliveries_url?: string; name: string; events: (string)[]; active: boolean; config: { url?: string; insecure_ssl?: string; content_type?: string; secret?: string }; updated_a...
```

### `github.orgs.deleteWebhook`

- **HTTP**: `DELETE /orgs/{org}/hooks/{hook_id}`
- **What it does**: Delete an organization webhook
- **OpenAPI operationId**: `orgs/delete-webhook`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; hook_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type OrgsDeleteWebhookInput = Parameters<typeof github.orgs.deleteWebhook> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsDeleteWebhookOutput = Awaited<ReturnType<typeof github.orgs.deleteWebhook>>;

const input: OrgsDeleteWebhookInput = {} as { org: string; hook_id: number };
const result: OrgsDeleteWebhookOutput = await github.orgs.deleteWebhook(input);

// Result shape (from schema): unknown
```

### `github.orgs.getWebhook`

- **HTTP**: `GET /orgs/{org}/hooks/{hook_id}`
- **What it does**: Get an organization webhook
- **OpenAPI operationId**: `orgs/get-webhook`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; hook_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; url: string; ping_url: string; deliveries_url?: string; name: string; events: (string)[]; active: boolean; config: { url?: string; insecure_ssl?: string; content_type?: string; secret?: string }; updated_a...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type OrgsGetWebhookInput = Parameters<typeof github.orgs.getWebhook> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsGetWebhookOutput = Awaited<ReturnType<typeof github.orgs.getWebhook>>;

const input: OrgsGetWebhookInput = {} as { org: string; hook_id: number };
const result: OrgsGetWebhookOutput = await github.orgs.getWebhook(input);

// Result shape (from schema): { id: number; url: string; ping_url: string; deliveries_url?: string; name: string; events: (string)[]; active: boolean; config: { url?: string; insecure_ssl?: string; content_type?: string; secret?: string }; updated_a...
```

### `github.orgs.updateWebhook`

- **HTTP**: `PATCH /orgs/{org}/hooks/{hook_id}`
- **What it does**: Update an organization webhook
- **OpenAPI operationId**: `orgs/update-webhook`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ config?: { url: string; content_type?: string; secret?: string; insecure_ssl?: string | number }; events?: (string)[]; active?: boolean; name?: string; org: string; hook_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; url: string; ping_url: string; deliveries_url?: string; name: string; events: (string)[]; active: boolean; config: { url?: string; insecure_ssl?: string; content_type?: string; secret?: string }; updated_a...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsUpdateWebhookInput = Parameters<typeof github.orgs.updateWebhook> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsUpdateWebhookOutput = Awaited<ReturnType<typeof github.orgs.updateWebhook>>;

const input: OrgsUpdateWebhookInput = {} as { config?: { url: string; content_type?: string; secret?: string; insecure_ssl?: string | number }; events?: (string)[]; active?: boolean; name?: string; org: string; hook_id: number };
const result: OrgsUpdateWebhookOutput = await github.orgs.updateWebhook(input);

// Result shape (from schema): { id: number; url: string; ping_url: string; deliveries_url?: string; name: string; events: (string)[]; active: boolean; config: { url?: string; insecure_ssl?: string; content_type?: string; secret?: string }; updated_a...
```

### `github.orgs.getWebhookConfigForOrg`

- **HTTP**: `GET /orgs/{org}/hooks/{hook_id}/config`
- **What it does**: Get a webhook configuration for an organization
- **OpenAPI operationId**: `orgs/get-webhook-config-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; hook_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OrgsGetWebhookConfigForOrgInput = Parameters<typeof github.orgs.getWebhookConfigForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsGetWebhookConfigForOrgOutput = Awaited<ReturnType<typeof github.orgs.getWebhookConfigForOrg>>;

const input: OrgsGetWebhookConfigForOrgInput = {} as { org: string; hook_id: number };
const result: OrgsGetWebhookConfigForOrgOutput = await github.orgs.getWebhookConfigForOrg(input);

// Result shape (from schema): { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }
```

### `github.orgs.updateWebhookConfigForOrg`

- **HTTP**: `PATCH /orgs/{org}/hooks/{hook_id}/config`
- **What it does**: Update a webhook configuration for an organization
- **OpenAPI operationId**: `orgs/update-webhook-config-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number; org: string; hook_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OrgsUpdateWebhookConfigForOrgInput = Parameters<typeof github.orgs.updateWebhookConfigForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsUpdateWebhookConfigForOrgOutput = Awaited<ReturnType<typeof github.orgs.updateWebhookConfigForOrg>>;

const input: OrgsUpdateWebhookConfigForOrgInput = {} as { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number; org: string; hook_id: number };
const result: OrgsUpdateWebhookConfigForOrgOutput = await github.orgs.updateWebhookConfigForOrg(input);

// Result shape (from schema): { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }
```

### `github.orgs.listWebhookDeliveries`

- **HTTP**: `GET /orgs/{org}/hooks/{hook_id}/deliveries`
- **What it does**: List deliveries for an organization webhook
- **OpenAPI operationId**: `orgs/list-webhook-deliveries`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; hook_id: number; per_page?: number; cursor?: string; status?: "success" | "failure" }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; guid: string; delivered_at: string; redelivery: boolean; duration: number; status: string; status_code: number; event: string; action: string | null; installation_id: number | null; repository_id: number ...`
- OpenAPI response codes: `200`, `400`, `422`

```ts
import github from "@utdk/github";

type OrgsListWebhookDeliveriesInput = Parameters<typeof github.orgs.listWebhookDeliveries> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListWebhookDeliveriesOutput = Awaited<ReturnType<typeof github.orgs.listWebhookDeliveries>>;

const input: OrgsListWebhookDeliveriesInput = {} as { org: string; hook_id: number; per_page?: number; cursor?: string; status?: "success" | "failure" };
const result: OrgsListWebhookDeliveriesOutput = await github.orgs.listWebhookDeliveries(input);

// Result shape (from schema): ({ id: number; guid: string; delivered_at: string; redelivery: boolean; duration: number; status: string; status_code: number; event: string; action: string | null; installation_id: number | null; repository_id: number ...
```

### `github.orgs.getWebhookDelivery`

- **HTTP**: `GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}`
- **What it does**: Get a webhook delivery for an organization webhook
- **OpenAPI operationId**: `orgs/get-webhook-delivery`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; hook_id: number; delivery_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; guid: string; delivered_at: string; redelivery: boolean; duration: number; status: string; status_code: number; event: string; action: string | null; installation_id: number | null; repository_id: number |...`
- OpenAPI response codes: `200`, `400`, `422`

```ts
import github from "@utdk/github";

type OrgsGetWebhookDeliveryInput = Parameters<typeof github.orgs.getWebhookDelivery> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsGetWebhookDeliveryOutput = Awaited<ReturnType<typeof github.orgs.getWebhookDelivery>>;

const input: OrgsGetWebhookDeliveryInput = {} as { org: string; hook_id: number; delivery_id: number };
const result: OrgsGetWebhookDeliveryOutput = await github.orgs.getWebhookDelivery(input);

// Result shape (from schema): { id: number; guid: string; delivered_at: string; redelivery: boolean; duration: number; status: string; status_code: number; event: string; action: string | null; installation_id: number | null; repository_id: number |...
```

### `github.orgs.redeliverWebhookDelivery`

- **HTTP**: `POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`
- **What it does**: Redeliver a delivery for an organization webhook
- **OpenAPI operationId**: `orgs/redeliver-webhook-delivery`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `400`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; hook_id: number; delivery_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `400`, `422`

```ts
import github from "@utdk/github";

type OrgsRedeliverWebhookDeliveryInput = Parameters<typeof github.orgs.redeliverWebhookDelivery> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsRedeliverWebhookDeliveryOutput = Awaited<ReturnType<typeof github.orgs.redeliverWebhookDelivery>>;

const input: OrgsRedeliverWebhookDeliveryInput = {} as { org: string; hook_id: number; delivery_id: number };
const result: OrgsRedeliverWebhookDeliveryOutput = await github.orgs.redeliverWebhookDelivery(input);

// Result shape (from schema): unknown
```

### `github.orgs.pingWebhook`

- **HTTP**: `POST /orgs/{org}/hooks/{hook_id}/pings`
- **What it does**: Ping an organization webhook
- **OpenAPI operationId**: `orgs/ping-webhook`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; hook_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type OrgsPingWebhookInput = Parameters<typeof github.orgs.pingWebhook> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsPingWebhookOutput = Awaited<ReturnType<typeof github.orgs.pingWebhook>>;

const input: OrgsPingWebhookInput = {} as { org: string; hook_id: number };
const result: OrgsPingWebhookOutput = await github.orgs.pingWebhook(input);

// Result shape (from schema): unknown
```

### `github.apiInsights.getRouteStatsByActor`

- **HTTP**: `GET /orgs/{org}/insights/api/route-stats/{actor_type}/{actor_id}`
- **What it does**: Get route stats by actor
- **OpenAPI operationId**: `api-insights/get-route-stats-by-actor`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; actor_type: "installation" | "classic_pat" | "fine_grained_pat" | "oauth_app" | "github_app_user_to_server"; actor_id: number; min_timestamp: string; max_timestamp?: string; page?: number; per_page?: number; direction?: "asc" | "desc"; sort?: ("last_rate_limited_timestamp" | "last_request_timestamp" | "rate_limited_request_count" | "http_method" | "api_route" | "total_request_count")[]; api_route_substring?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ http_method?: string; api_route?: string; total_request_count?: number; rate_limited_request_count?: number; last_rate_limited_timestamp?: string | null; last_request_timestamp?: string })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ApiInsightsGetRouteStatsByActorInput = Parameters<typeof github.apiInsights.getRouteStatsByActor> extends [infer T, ...unknown[]] ? T : undefined;
type ApiInsightsGetRouteStatsByActorOutput = Awaited<ReturnType<typeof github.apiInsights.getRouteStatsByActor>>;

const input: ApiInsightsGetRouteStatsByActorInput = {} as { org: string; actor_type: "installation" | "classic_pat" | "fine_grained_pat" | "oauth_app" | "github_app_user_to_server"; actor_id: number; min_timestamp: string; max_timestamp?: string; page?: number; per_page?: number; direction?: "asc" | "desc"; sort?: ("last_rate_limited_timestamp" | "last_request_timestamp" | "rate_limited_request_count" | "http_method" | "api_route" | "total_request_count")[]; api_route_substring?: string };
const result: ApiInsightsGetRouteStatsByActorOutput = await github.apiInsights.getRouteStatsByActor(input);

// Result shape (from schema): ({ http_method?: string; api_route?: string; total_request_count?: number; rate_limited_request_count?: number; last_rate_limited_timestamp?: string | null; last_request_timestamp?: string })[]
```

### `github.apiInsights.getSubjectStats`

- **HTTP**: `GET /orgs/{org}/insights/api/subject-stats`
- **What it does**: Get subject stats
- **OpenAPI operationId**: `api-insights/get-subject-stats`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; min_timestamp: string; max_timestamp?: string; page?: number; per_page?: number; direction?: "asc" | "desc"; sort?: ("last_rate_limited_timestamp" | "last_request_timestamp" | "rate_limited_request_count" | "subject_name" | "total_request_count")[]; subject_name_substring?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ subject_type?: string; subject_name?: string; subject_id?: number; total_request_count?: number; rate_limited_request_count?: number; last_rate_limited_timestamp?: string | null; last_request_timestamp?: string })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ApiInsightsGetSubjectStatsInput = Parameters<typeof github.apiInsights.getSubjectStats> extends [infer T, ...unknown[]] ? T : undefined;
type ApiInsightsGetSubjectStatsOutput = Awaited<ReturnType<typeof github.apiInsights.getSubjectStats>>;

const input: ApiInsightsGetSubjectStatsInput = {} as { org: string; min_timestamp: string; max_timestamp?: string; page?: number; per_page?: number; direction?: "asc" | "desc"; sort?: ("last_rate_limited_timestamp" | "last_request_timestamp" | "rate_limited_request_count" | "subject_name" | "total_request_count")[]; subject_name_substring?: string };
const result: ApiInsightsGetSubjectStatsOutput = await github.apiInsights.getSubjectStats(input);

// Result shape (from schema): ({ subject_type?: string; subject_name?: string; subject_id?: number; total_request_count?: number; rate_limited_request_count?: number; last_rate_limited_timestamp?: string | null; last_request_timestamp?: string })[]
```

### `github.apiInsights.getSummaryStats`

- **HTTP**: `GET /orgs/{org}/insights/api/summary-stats`
- **What it does**: Get summary stats
- **OpenAPI operationId**: `api-insights/get-summary-stats`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; min_timestamp: string; max_timestamp?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_request_count?: number; rate_limited_request_count?: number }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ApiInsightsGetSummaryStatsInput = Parameters<typeof github.apiInsights.getSummaryStats> extends [infer T, ...unknown[]] ? T : undefined;
type ApiInsightsGetSummaryStatsOutput = Awaited<ReturnType<typeof github.apiInsights.getSummaryStats>>;

const input: ApiInsightsGetSummaryStatsInput = {} as { org: string; min_timestamp: string; max_timestamp?: string };
const result: ApiInsightsGetSummaryStatsOutput = await github.apiInsights.getSummaryStats(input);

// Result shape (from schema): { total_request_count?: number; rate_limited_request_count?: number }
```

### `github.apiInsights.getSummaryStatsByActor`

- **HTTP**: `GET /orgs/{org}/insights/api/summary-stats/{actor_type}/{actor_id}`
- **What it does**: Get summary stats by actor
- **OpenAPI operationId**: `api-insights/get-summary-stats-by-actor`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; actor_type: "installation" | "classic_pat" | "fine_grained_pat" | "oauth_app" | "github_app_user_to_server"; actor_id: number; min_timestamp: string; max_timestamp?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_request_count?: number; rate_limited_request_count?: number }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ApiInsightsGetSummaryStatsByActorInput = Parameters<typeof github.apiInsights.getSummaryStatsByActor> extends [infer T, ...unknown[]] ? T : undefined;
type ApiInsightsGetSummaryStatsByActorOutput = Awaited<ReturnType<typeof github.apiInsights.getSummaryStatsByActor>>;

const input: ApiInsightsGetSummaryStatsByActorInput = {} as { org: string; actor_type: "installation" | "classic_pat" | "fine_grained_pat" | "oauth_app" | "github_app_user_to_server"; actor_id: number; min_timestamp: string; max_timestamp?: string };
const result: ApiInsightsGetSummaryStatsByActorOutput = await github.apiInsights.getSummaryStatsByActor(input);

// Result shape (from schema): { total_request_count?: number; rate_limited_request_count?: number }
```

### `github.apiInsights.getSummaryStatsByUser`

- **HTTP**: `GET /orgs/{org}/insights/api/summary-stats/users/{user_id}`
- **What it does**: Get summary stats by user
- **OpenAPI operationId**: `api-insights/get-summary-stats-by-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; user_id: string; min_timestamp: string; max_timestamp?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_request_count?: number; rate_limited_request_count?: number }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ApiInsightsGetSummaryStatsByUserInput = Parameters<typeof github.apiInsights.getSummaryStatsByUser> extends [infer T, ...unknown[]] ? T : undefined;
type ApiInsightsGetSummaryStatsByUserOutput = Awaited<ReturnType<typeof github.apiInsights.getSummaryStatsByUser>>;

const input: ApiInsightsGetSummaryStatsByUserInput = {} as { org: string; user_id: string; min_timestamp: string; max_timestamp?: string };
const result: ApiInsightsGetSummaryStatsByUserOutput = await github.apiInsights.getSummaryStatsByUser(input);

// Result shape (from schema): { total_request_count?: number; rate_limited_request_count?: number }
```

### `github.apiInsights.getTimeStats`

- **HTTP**: `GET /orgs/{org}/insights/api/time-stats`
- **What it does**: Get time stats
- **OpenAPI operationId**: `api-insights/get-time-stats`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; min_timestamp: string; max_timestamp?: string; timestamp_increment: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ timestamp?: string; total_request_count?: number; rate_limited_request_count?: number })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ApiInsightsGetTimeStatsInput = Parameters<typeof github.apiInsights.getTimeStats> extends [infer T, ...unknown[]] ? T : undefined;
type ApiInsightsGetTimeStatsOutput = Awaited<ReturnType<typeof github.apiInsights.getTimeStats>>;

const input: ApiInsightsGetTimeStatsInput = {} as { org: string; min_timestamp: string; max_timestamp?: string; timestamp_increment: string };
const result: ApiInsightsGetTimeStatsOutput = await github.apiInsights.getTimeStats(input);

// Result shape (from schema): ({ timestamp?: string; total_request_count?: number; rate_limited_request_count?: number })[]
```

### `github.apiInsights.getTimeStatsByActor`

- **HTTP**: `GET /orgs/{org}/insights/api/time-stats/{actor_type}/{actor_id}`
- **What it does**: Get time stats by actor
- **OpenAPI operationId**: `api-insights/get-time-stats-by-actor`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; actor_type: "installation" | "classic_pat" | "fine_grained_pat" | "oauth_app" | "github_app_user_to_server"; actor_id: number; min_timestamp: string; max_timestamp?: string; timestamp_increment: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ timestamp?: string; total_request_count?: number; rate_limited_request_count?: number })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ApiInsightsGetTimeStatsByActorInput = Parameters<typeof github.apiInsights.getTimeStatsByActor> extends [infer T, ...unknown[]] ? T : undefined;
type ApiInsightsGetTimeStatsByActorOutput = Awaited<ReturnType<typeof github.apiInsights.getTimeStatsByActor>>;

const input: ApiInsightsGetTimeStatsByActorInput = {} as { org: string; actor_type: "installation" | "classic_pat" | "fine_grained_pat" | "oauth_app" | "github_app_user_to_server"; actor_id: number; min_timestamp: string; max_timestamp?: string; timestamp_increment: string };
const result: ApiInsightsGetTimeStatsByActorOutput = await github.apiInsights.getTimeStatsByActor(input);

// Result shape (from schema): ({ timestamp?: string; total_request_count?: number; rate_limited_request_count?: number })[]
```

### `github.apiInsights.getTimeStatsByUser`

- **HTTP**: `GET /orgs/{org}/insights/api/time-stats/users/{user_id}`
- **What it does**: Get time stats by user
- **OpenAPI operationId**: `api-insights/get-time-stats-by-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; user_id: string; min_timestamp: string; max_timestamp?: string; timestamp_increment: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ timestamp?: string; total_request_count?: number; rate_limited_request_count?: number })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ApiInsightsGetTimeStatsByUserInput = Parameters<typeof github.apiInsights.getTimeStatsByUser> extends [infer T, ...unknown[]] ? T : undefined;
type ApiInsightsGetTimeStatsByUserOutput = Awaited<ReturnType<typeof github.apiInsights.getTimeStatsByUser>>;

const input: ApiInsightsGetTimeStatsByUserInput = {} as { org: string; user_id: string; min_timestamp: string; max_timestamp?: string; timestamp_increment: string };
const result: ApiInsightsGetTimeStatsByUserOutput = await github.apiInsights.getTimeStatsByUser(input);

// Result shape (from schema): ({ timestamp?: string; total_request_count?: number; rate_limited_request_count?: number })[]
```

### `github.apiInsights.getUserStats`

- **HTTP**: `GET /orgs/{org}/insights/api/user-stats/{user_id}`
- **What it does**: Get user stats
- **OpenAPI operationId**: `api-insights/get-user-stats`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; user_id: string; min_timestamp: string; max_timestamp?: string; page?: number; per_page?: number; direction?: "asc" | "desc"; sort?: ("last_rate_limited_timestamp" | "last_request_timestamp" | "rate_limited_request_count" | "subject_name" | "total_request_count")[]; actor_name_substring?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ actor_type?: string; actor_name?: string; actor_id?: number; integration_id?: number | null; oauth_application_id?: number | null; total_request_count?: number; rate_limited_request_count?: number; last_rate_limited_...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ApiInsightsGetUserStatsInput = Parameters<typeof github.apiInsights.getUserStats> extends [infer T, ...unknown[]] ? T : undefined;
type ApiInsightsGetUserStatsOutput = Awaited<ReturnType<typeof github.apiInsights.getUserStats>>;

const input: ApiInsightsGetUserStatsInput = {} as { org: string; user_id: string; min_timestamp: string; max_timestamp?: string; page?: number; per_page?: number; direction?: "asc" | "desc"; sort?: ("last_rate_limited_timestamp" | "last_request_timestamp" | "rate_limited_request_count" | "subject_name" | "total_request_count")[]; actor_name_substring?: string };
const result: ApiInsightsGetUserStatsOutput = await github.apiInsights.getUserStats(input);

// Result shape (from schema): ({ actor_type?: string; actor_name?: string; actor_id?: number; integration_id?: number | null; oauth_application_id?: number | null; total_request_count?: number; rate_limited_request_count?: number; last_rate_limited_...
```

### `github.orgs.listAppInstallations`

- **HTTP**: `GET /orgs/{org}/installations`
- **What it does**: List app installations for an organization
- **OpenAPI operationId**: `orgs/list-app-installations`
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

- Client return type: `{ total_count: number; installations: ({ id: number; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OrgsListAppInstallationsInput = Parameters<typeof github.orgs.listAppInstallations> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListAppInstallationsOutput = Awaited<ReturnType<typeof github.orgs.listAppInstallations>>;

const input: OrgsListAppInstallationsInput = {} as { org: string; per_page?: number; page?: number };
const result: OrgsListAppInstallationsOutput = await github.orgs.listAppInstallations(input);

// Result shape (from schema): { total_count: number; installations: ({ id: number; account: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_...
```

### `github.orgs.listPendingInvitations`

- **HTTP**: `GET /orgs/{org}/invitations`
- **What it does**: List pending organization invitations
- **OpenAPI operationId**: `orgs/list-pending-invitations`
- **Path params**: None
- **Query params**: `role`, `invitation_source`
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number; role?: "all" | "admin" | "direct_member" | "billing_manager" | "hiring_manager"; invitation_source?: "all" | "member" | "scim" }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; login: string | null; email: string | null; role: string; created_at: string; failed_at?: string | null; failed_reason?: string | null; inviter: { name?: string | null; email?: string | null; login: strin...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type OrgsListPendingInvitationsInput = Parameters<typeof github.orgs.listPendingInvitations> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListPendingInvitationsOutput = Awaited<ReturnType<typeof github.orgs.listPendingInvitations>>;

const input: OrgsListPendingInvitationsInput = {} as { org: string; per_page?: number; page?: number; role?: "all" | "admin" | "direct_member" | "billing_manager" | "hiring_manager"; invitation_source?: "all" | "member" | "scim" };
const result: OrgsListPendingInvitationsOutput = await github.orgs.listPendingInvitations(input);

// Result shape (from schema): ({ id: number; login: string | null; email: string | null; role: string; created_at: string; failed_at?: string | null; failed_reason?: string | null; inviter: { name?: string | null; email?: string | null; login: strin...
```

### `github.orgs.createInvitation`

- **HTTP**: `POST /orgs/{org}/invitations`
- **What it does**: Create an organization invitation
- **OpenAPI operationId**: `orgs/create-invitation`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ invitee_id?: number; email?: string; role?: "admin" | "direct_member" | "billing_manager" | "reinstate"; team_ids?: (number)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; login: string | null; email: string | null; role: string; created_at: string; failed_at?: string | null; failed_reason?: string | null; inviter: { name?: string | null; email?: string | null; login: string...`
- OpenAPI response codes: `201`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsCreateInvitationInput = Parameters<typeof github.orgs.createInvitation> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCreateInvitationOutput = Awaited<ReturnType<typeof github.orgs.createInvitation>>;

const input: OrgsCreateInvitationInput = {} as { invitee_id?: number; email?: string; role?: "admin" | "direct_member" | "billing_manager" | "reinstate"; team_ids?: (number)[]; org: string };
const result: OrgsCreateInvitationOutput = await github.orgs.createInvitation(input);

// Result shape (from schema): { id: number; login: string | null; email: string | null; role: string; created_at: string; failed_at?: string | null; failed_reason?: string | null; inviter: { name?: string | null; email?: string | null; login: string...
```

### `github.orgs.cancelInvitation`

- **HTTP**: `DELETE /orgs/{org}/invitations/{invitation_id}`
- **What it does**: Cancel an organization invitation
- **OpenAPI operationId**: `orgs/cancel-invitation`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; invitation_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsCancelInvitationInput = Parameters<typeof github.orgs.cancelInvitation> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCancelInvitationOutput = Awaited<ReturnType<typeof github.orgs.cancelInvitation>>;

const input: OrgsCancelInvitationInput = {} as { org: string; invitation_id: number };
const result: OrgsCancelInvitationOutput = await github.orgs.cancelInvitation(input);

// Result shape (from schema): unknown
```

### `github.orgs.listInvitationTeams`

- **HTTP**: `GET /orgs/{org}/invitations/{invitation_id}/teams`
- **What it does**: List organization invitation teams
- **OpenAPI operationId**: `orgs/list-invitation-teams`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; invitation_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type OrgsListInvitationTeamsInput = Parameters<typeof github.orgs.listInvitationTeams> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListInvitationTeamsOutput = Awaited<ReturnType<typeof github.orgs.listInvitationTeams>>;

const input: OrgsListInvitationTeamsInput = {} as { org: string; invitation_id: number; per_page?: number; page?: number };
const result: OrgsListInvitationTeamsOutput = await github.orgs.listInvitationTeams(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...
```

### `github.orgs.listIssueFields`

- **HTTP**: `GET /orgs/{org}/issue-fields`
- **What it does**: List issue fields for an organization
- **OpenAPI operationId**: `orgs/list-issue-fields`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; description?: string | null; data_type: "text" | "date" | "single_select" | "number"; visibility?: "organization_members_only" | "all"; options?: ({ id: number; name: string...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type OrgsListIssueFieldsInput = Parameters<typeof github.orgs.listIssueFields> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListIssueFieldsOutput = Awaited<ReturnType<typeof github.orgs.listIssueFields>>;

const input: OrgsListIssueFieldsInput = {} as { org: string };
const result: OrgsListIssueFieldsOutput = await github.orgs.listIssueFields(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; description?: string | null; data_type: "text" | "date" | "single_select" | "number"; visibility?: "organization_members_only" | "all"; options?: ({ id: number; name: string...
```

### `github.orgs.createIssueField`

- **HTTP**: `POST /orgs/{org}/issue-fields`
- **What it does**: Create issue field for an organization
- **OpenAPI operationId**: `orgs/create-issue-field`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; description?: string | null; data_type: "text" | "date" | "single_select" | "number"; visibility?: "organization_members_only" | "all"; options?: ({ name: string; description?: string | null; color: "gray" | "blue" | "green" | "yellow" | "orange" | "red" | "pink" | "purple"; priority: number })[] | null; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; name: string; description?: string | null; data_type: "text" | "date" | "single_select" | "number"; visibility?: "organization_members_only" | "all"; options?: ({ id: number; name: string;...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsCreateIssueFieldInput = Parameters<typeof github.orgs.createIssueField> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCreateIssueFieldOutput = Awaited<ReturnType<typeof github.orgs.createIssueField>>;

const input: OrgsCreateIssueFieldInput = {} as { name: string; description?: string | null; data_type: "text" | "date" | "single_select" | "number"; visibility?: "organization_members_only" | "all"; options?: ({ name: string; description?: string | null; color: "gray" | "blue" | "green" | "yellow" | "orange" | "red" | "pink" | "purple"; priority: number })[] | null; org: string };
const result: OrgsCreateIssueFieldOutput = await github.orgs.createIssueField(input);

// Result shape (from schema): { id: number; node_id: string; name: string; description?: string | null; data_type: "text" | "date" | "single_select" | "number"; visibility?: "organization_members_only" | "all"; options?: ({ id: number; name: string;...
```

### `github.orgs.deleteIssueField`

- **HTTP**: `DELETE /orgs/{org}/issue-fields/{issue_field_id}`
- **What it does**: Delete issue field for an organization
- **OpenAPI operationId**: `orgs/delete-issue-field`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; issue_field_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsDeleteIssueFieldInput = Parameters<typeof github.orgs.deleteIssueField> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsDeleteIssueFieldOutput = Awaited<ReturnType<typeof github.orgs.deleteIssueField>>;

const input: OrgsDeleteIssueFieldInput = {} as { org: string; issue_field_id: number };
const result: OrgsDeleteIssueFieldOutput = await github.orgs.deleteIssueField(input);

// Result shape (from schema): unknown
```

### `github.orgs.updateIssueField`

- **HTTP**: `PATCH /orgs/{org}/issue-fields/{issue_field_id}`
- **What it does**: Update issue field for an organization
- **OpenAPI operationId**: `orgs/update-issue-field`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; description?: string | null; visibility?: "organization_members_only" | "all"; options?: ({ id?: number; name: string; description?: string | null; color: "gray" | "blue" | "green" | "yellow" | "orange" | "red" | "pink" | "purple"; priority: number })[]; org: string; issue_field_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; name: string; description?: string | null; data_type: "text" | "date" | "single_select" | "number"; visibility?: "organization_members_only" | "all"; options?: ({ id: number; name: string;...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsUpdateIssueFieldInput = Parameters<typeof github.orgs.updateIssueField> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsUpdateIssueFieldOutput = Awaited<ReturnType<typeof github.orgs.updateIssueField>>;

const input: OrgsUpdateIssueFieldInput = {} as { name?: string; description?: string | null; visibility?: "organization_members_only" | "all"; options?: ({ id?: number; name: string; description?: string | null; color: "gray" | "blue" | "green" | "yellow" | "orange" | "red" | "pink" | "purple"; priority: number })[]; org: string; issue_field_id: number };
const result: OrgsUpdateIssueFieldOutput = await github.orgs.updateIssueField(input);

// Result shape (from schema): { id: number; node_id: string; name: string; description?: string | null; data_type: "text" | "date" | "single_select" | "number"; visibility?: "organization_members_only" | "all"; options?: ({ id: number; name: string;...
```

### `github.orgs.listIssueTypes`

- **HTTP**: `GET /orgs/{org}/issue-types`
- **What it does**: List issue types for an organization
- **OpenAPI operationId**: `orgs/list-issue-types`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; description: string | null; color?: "gray" | "blue" | "green" | "yellow" | "orange" | "red" | "pink" | "purple" | null; created_at?: string; updated_at?: string; is_enabled?...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type OrgsListIssueTypesInput = Parameters<typeof github.orgs.listIssueTypes> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListIssueTypesOutput = Awaited<ReturnType<typeof github.orgs.listIssueTypes>>;

const input: OrgsListIssueTypesInput = {} as { org: string };
const result: OrgsListIssueTypesOutput = await github.orgs.listIssueTypes(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; description: string | null; color?: "gray" | "blue" | "green" | "yellow" | "orange" | "red" | "pink" | "purple" | null; created_at?: string; updated_at?: string; is_enabled?...
```

### `github.orgs.createIssueType`

- **HTTP**: `POST /orgs/{org}/issue-types`
- **What it does**: Create issue type for an organization
- **OpenAPI operationId**: `orgs/create-issue-type`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; is_enabled: boolean; description?: string | null; color?: "gray" | "blue" | "green" | "yellow" | "orange" | "red" | "pink" | "purple" | null; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; name: string; description: string | null; color?: "gray" | "blue" | "green" | "yellow" | "orange" | "red" | "pink" | "purple" | null; created_at?: string; updated_at?: string; is_enabled?:...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsCreateIssueTypeInput = Parameters<typeof github.orgs.createIssueType> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCreateIssueTypeOutput = Awaited<ReturnType<typeof github.orgs.createIssueType>>;

const input: OrgsCreateIssueTypeInput = {} as { name: string; is_enabled: boolean; description?: string | null; color?: "gray" | "blue" | "green" | "yellow" | "orange" | "red" | "pink" | "purple" | null; org: string };
const result: OrgsCreateIssueTypeOutput = await github.orgs.createIssueType(input);

// Result shape (from schema): { id: number; node_id: string; name: string; description: string | null; color?: "gray" | "blue" | "green" | "yellow" | "orange" | "red" | "pink" | "purple" | null; created_at?: string; updated_at?: string; is_enabled?:...
```

### `github.orgs.deleteIssueType`

- **HTTP**: `DELETE /orgs/{org}/issue-types/{issue_type_id}`
- **What it does**: Delete issue type for an organization
- **OpenAPI operationId**: `orgs/delete-issue-type`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; issue_type_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsDeleteIssueTypeInput = Parameters<typeof github.orgs.deleteIssueType> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsDeleteIssueTypeOutput = Awaited<ReturnType<typeof github.orgs.deleteIssueType>>;

const input: OrgsDeleteIssueTypeInput = {} as { org: string; issue_type_id: number };
const result: OrgsDeleteIssueTypeOutput = await github.orgs.deleteIssueType(input);

// Result shape (from schema): unknown
```

### `github.orgs.updateIssueType`

- **HTTP**: `PUT /orgs/{org}/issue-types/{issue_type_id}`
- **What it does**: Update issue type for an organization
- **OpenAPI operationId**: `orgs/update-issue-type`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; is_enabled: boolean; description?: string | null; color?: "gray" | "blue" | "green" | "yellow" | "orange" | "red" | "pink" | "purple" | null; org: string; issue_type_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; name: string; description: string | null; color?: "gray" | "blue" | "green" | "yellow" | "orange" | "red" | "pink" | "purple" | null; created_at?: string; updated_at?: string; is_enabled?:...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsUpdateIssueTypeInput = Parameters<typeof github.orgs.updateIssueType> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsUpdateIssueTypeOutput = Awaited<ReturnType<typeof github.orgs.updateIssueType>>;

const input: OrgsUpdateIssueTypeInput = {} as { name: string; is_enabled: boolean; description?: string | null; color?: "gray" | "blue" | "green" | "yellow" | "orange" | "red" | "pink" | "purple" | null; org: string; issue_type_id: number };
const result: OrgsUpdateIssueTypeOutput = await github.orgs.updateIssueType(input);

// Result shape (from schema): { id: number; node_id: string; name: string; description: string | null; color?: "gray" | "blue" | "green" | "yellow" | "orange" | "red" | "pink" | "purple" | null; created_at?: string; updated_at?: string; is_enabled?:...
```

### `github.orgs.listMembers`

- **HTTP**: `GET /orgs/{org}/members`
- **What it does**: List organization members
- **OpenAPI operationId**: `orgs/list-members`
- **Path params**: None
- **Query params**: `filter`, `role`
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; filter?: "2fa_disabled" | "2fa_insecure" | "all"; role?: "all" | "admin" | "member"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type OrgsListMembersInput = Parameters<typeof github.orgs.listMembers> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListMembersOutput = Awaited<ReturnType<typeof github.orgs.listMembers>>;

const input: OrgsListMembersInput = {} as { org: string; filter?: "2fa_disabled" | "2fa_insecure" | "all"; role?: "all" | "admin" | "member"; per_page?: number; page?: number };
const result: OrgsListMembersOutput = await github.orgs.listMembers(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.orgs.removeMember`

- **HTTP**: `DELETE /orgs/{org}/members/{username}`
- **What it does**: Remove an organization member
- **OpenAPI operationId**: `orgs/remove-member`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`

```ts
import github from "@utdk/github";

type OrgsRemoveMemberInput = Parameters<typeof github.orgs.removeMember> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsRemoveMemberOutput = Awaited<ReturnType<typeof github.orgs.removeMember>>;

const input: OrgsRemoveMemberInput = {} as { org: string; username: string };
const result: OrgsRemoveMemberOutput = await github.orgs.removeMember(input);

// Result shape (from schema): unknown
```

### `github.orgs.checkMembershipForUser`

- **HTTP**: `GET /orgs/{org}/members/{username}`
- **What it does**: Check organization membership for a user
- **OpenAPI operationId**: `orgs/check-membership-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `302`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `302`, `404`

```ts
import github from "@utdk/github";

type OrgsCheckMembershipForUserInput = Parameters<typeof github.orgs.checkMembershipForUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCheckMembershipForUserOutput = Awaited<ReturnType<typeof github.orgs.checkMembershipForUser>>;

const input: OrgsCheckMembershipForUserInput = {} as { org: string; username: string };
const result: OrgsCheckMembershipForUserOutput = await github.orgs.checkMembershipForUser(input);

// Result shape (from schema): unknown
```

### `github.orgs.removeMembershipForUser`

- **HTTP**: `DELETE /orgs/{org}/memberships/{username}`
- **What it does**: Remove organization membership for a user
- **OpenAPI operationId**: `orgs/remove-membership-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`

```ts
import github from "@utdk/github";

type OrgsRemoveMembershipForUserInput = Parameters<typeof github.orgs.removeMembershipForUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsRemoveMembershipForUserOutput = Awaited<ReturnType<typeof github.orgs.removeMembershipForUser>>;

const input: OrgsRemoveMembershipForUserInput = {} as { org: string; username: string };
const result: OrgsRemoveMembershipForUserOutput = await github.orgs.removeMembershipForUser(input);

// Result shape (from schema): unknown
```

### `github.orgs.getMembershipForUser`

- **HTTP**: `GET /orgs/{org}/memberships/{username}`
- **What it does**: Get organization membership for a user
- **OpenAPI operationId**: `orgs/get-membership-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; state: "active" | "pending"; role: "admin" | "member" | "billing_manager"; direct_membership?: boolean; enterprise_teams_providing_indirect_membership?: (string)[]; organization_url: string; organization:...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type OrgsGetMembershipForUserInput = Parameters<typeof github.orgs.getMembershipForUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsGetMembershipForUserOutput = Awaited<ReturnType<typeof github.orgs.getMembershipForUser>>;

const input: OrgsGetMembershipForUserInput = {} as { org: string; username: string };
const result: OrgsGetMembershipForUserOutput = await github.orgs.getMembershipForUser(input);

// Result shape (from schema): { url: string; state: "active" | "pending"; role: "admin" | "member" | "billing_manager"; direct_membership?: boolean; enterprise_teams_providing_indirect_membership?: (string)[]; organization_url: string; organization:...
```

### `github.orgs.setMembershipForUser`

- **HTTP**: `PUT /orgs/{org}/memberships/{username}`
- **What it does**: Set organization membership for a user
- **OpenAPI operationId**: `orgs/set-membership-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ role?: "admin" | "member"; org: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; state: "active" | "pending"; role: "admin" | "member" | "billing_manager"; direct_membership?: boolean; enterprise_teams_providing_indirect_membership?: (string)[]; organization_url: string; organization:...`
- OpenAPI response codes: `200`, `403`, `422`

```ts
import github from "@utdk/github";

type OrgsSetMembershipForUserInput = Parameters<typeof github.orgs.setMembershipForUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsSetMembershipForUserOutput = Awaited<ReturnType<typeof github.orgs.setMembershipForUser>>;

const input: OrgsSetMembershipForUserInput = {} as { role?: "admin" | "member"; org: string; username: string };
const result: OrgsSetMembershipForUserOutput = await github.orgs.setMembershipForUser(input);

// Result shape (from schema): { url: string; state: "active" | "pending"; role: "admin" | "member" | "billing_manager"; direct_membership?: boolean; enterprise_teams_providing_indirect_membership?: (string)[]; organization_url: string; organization:...
```

### `github.orgs.listOrgRoles`

- **HTTP**: `GET /orgs/{org}/organization-roles`
- **What it does**: Get all organization roles for an organization
- **OpenAPI operationId**: `orgs/list-org-roles`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count?: number; roles?: ({ id: number; name: string; description?: string | null; base_role?: "read" | "triage" | "write" | "maintain" | "admin" | null; source?: "Organization" | "Enterprise" | "Predefined" | nu...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsListOrgRolesInput = Parameters<typeof github.orgs.listOrgRoles> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListOrgRolesOutput = Awaited<ReturnType<typeof github.orgs.listOrgRoles>>;

const input: OrgsListOrgRolesInput = {} as { org: string };
const result: OrgsListOrgRolesOutput = await github.orgs.listOrgRoles(input);

// Result shape (from schema): { total_count?: number; roles?: ({ id: number; name: string; description?: string | null; base_role?: "read" | "triage" | "write" | "maintain" | "admin" | null; source?: "Organization" | "Enterprise" | "Predefined" | nu...
```

### `github.orgs.getOrgRole`

- **HTTP**: `GET /orgs/{org}/organization-roles/{role_id}`
- **What it does**: Get an organization role
- **OpenAPI operationId**: `orgs/get-org-role`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; role_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; description?: string | null; base_role?: "read" | "triage" | "write" | "maintain" | "admin" | null; source?: "Organization" | "Enterprise" | "Predefined" | null; permissions: (string)[]; orga...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsGetOrgRoleInput = Parameters<typeof github.orgs.getOrgRole> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsGetOrgRoleOutput = Awaited<ReturnType<typeof github.orgs.getOrgRole>>;

const input: OrgsGetOrgRoleInput = {} as { org: string; role_id: number };
const result: OrgsGetOrgRoleOutput = await github.orgs.getOrgRole(input);

// Result shape (from schema): { id: number; name: string; description?: string | null; base_role?: "read" | "triage" | "write" | "maintain" | "admin" | null; source?: "Organization" | "Enterprise" | "Predefined" | null; permissions: (string)[]; orga...
```

### `github.orgs.listOrgRoleTeams`

- **HTTP**: `GET /orgs/{org}/organization-roles/{role_id}/teams`
- **What it does**: List teams that are assigned to an organization role
- **OpenAPI operationId**: `orgs/list-org-role-teams`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; role_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ assignment?: "direct" | "indirect" | "mixed"; id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { ...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsListOrgRoleTeamsInput = Parameters<typeof github.orgs.listOrgRoleTeams> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListOrgRoleTeamsOutput = Awaited<ReturnType<typeof github.orgs.listOrgRoleTeams>>;

const input: OrgsListOrgRoleTeamsInput = {} as { org: string; role_id: number; per_page?: number; page?: number };
const result: OrgsListOrgRoleTeamsOutput = await github.orgs.listOrgRoleTeams(input);

// Result shape (from schema): ({ assignment?: "direct" | "indirect" | "mixed"; id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { ...
```

### `github.orgs.listOrgRoleUsers`

- **HTTP**: `GET /orgs/{org}/organization-roles/{role_id}/users`
- **What it does**: List users that are assigned to an organization role
- **OpenAPI operationId**: `orgs/list-org-role-users`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; role_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ assignment?: "direct" | "indirect" | "mixed"; inherited_from?: ({ id: number; node_id: string; url: string; members_url: string; name: string; description: string | null; permission: string; privacy?: string; notific...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsListOrgRoleUsersInput = Parameters<typeof github.orgs.listOrgRoleUsers> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListOrgRoleUsersOutput = Awaited<ReturnType<typeof github.orgs.listOrgRoleUsers>>;

const input: OrgsListOrgRoleUsersInput = {} as { org: string; role_id: number; per_page?: number; page?: number };
const result: OrgsListOrgRoleUsersOutput = await github.orgs.listOrgRoleUsers(input);

// Result shape (from schema): ({ assignment?: "direct" | "indirect" | "mixed"; inherited_from?: ({ id: number; node_id: string; url: string; members_url: string; name: string; description: string | null; permission: string; privacy?: string; notific...
```

### `github.orgs.revokeAllOrgRolesTeam`

- **HTTP**: `DELETE /orgs/{org}/organization-roles/teams/{team_slug}`
- **What it does**: Remove all organization roles for a team
- **OpenAPI operationId**: `orgs/revoke-all-org-roles-team`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type OrgsRevokeAllOrgRolesTeamInput = Parameters<typeof github.orgs.revokeAllOrgRolesTeam> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsRevokeAllOrgRolesTeamOutput = Awaited<ReturnType<typeof github.orgs.revokeAllOrgRolesTeam>>;

const input: OrgsRevokeAllOrgRolesTeamInput = {} as { org: string; team_slug: string };
const result: OrgsRevokeAllOrgRolesTeamOutput = await github.orgs.revokeAllOrgRolesTeam(input);

// Result shape (from schema): unknown
```

### `github.orgs.revokeOrgRoleTeam`

- **HTTP**: `DELETE /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}`
- **What it does**: Remove an organization role from a team
- **OpenAPI operationId**: `orgs/revoke-org-role-team`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string; role_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type OrgsRevokeOrgRoleTeamInput = Parameters<typeof github.orgs.revokeOrgRoleTeam> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsRevokeOrgRoleTeamOutput = Awaited<ReturnType<typeof github.orgs.revokeOrgRoleTeam>>;

const input: OrgsRevokeOrgRoleTeamInput = {} as { org: string; team_slug: string; role_id: number };
const result: OrgsRevokeOrgRoleTeamOutput = await github.orgs.revokeOrgRoleTeam(input);

// Result shape (from schema): unknown
```

### `github.orgs.assignTeamToOrgRole`

- **HTTP**: `PUT /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}`
- **What it does**: Assign an organization role to a team
- **OpenAPI operationId**: `orgs/assign-team-to-org-role`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string; role_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsAssignTeamToOrgRoleInput = Parameters<typeof github.orgs.assignTeamToOrgRole> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsAssignTeamToOrgRoleOutput = Awaited<ReturnType<typeof github.orgs.assignTeamToOrgRole>>;

const input: OrgsAssignTeamToOrgRoleInput = {} as { org: string; team_slug: string; role_id: number };
const result: OrgsAssignTeamToOrgRoleOutput = await github.orgs.assignTeamToOrgRole(input);

// Result shape (from schema): unknown
```

### `github.orgs.revokeAllOrgRolesUser`

- **HTTP**: `DELETE /orgs/{org}/organization-roles/users/{username}`
- **What it does**: Remove all organization roles for a user
- **OpenAPI operationId**: `orgs/revoke-all-org-roles-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type OrgsRevokeAllOrgRolesUserInput = Parameters<typeof github.orgs.revokeAllOrgRolesUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsRevokeAllOrgRolesUserOutput = Awaited<ReturnType<typeof github.orgs.revokeAllOrgRolesUser>>;

const input: OrgsRevokeAllOrgRolesUserInput = {} as { org: string; username: string };
const result: OrgsRevokeAllOrgRolesUserOutput = await github.orgs.revokeAllOrgRolesUser(input);

// Result shape (from schema): unknown
```

### `github.orgs.revokeOrgRoleUser`

- **HTTP**: `DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}`
- **What it does**: Remove an organization role from a user
- **OpenAPI operationId**: `orgs/revoke-org-role-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string; role_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type OrgsRevokeOrgRoleUserInput = Parameters<typeof github.orgs.revokeOrgRoleUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsRevokeOrgRoleUserOutput = Awaited<ReturnType<typeof github.orgs.revokeOrgRoleUser>>;

const input: OrgsRevokeOrgRoleUserInput = {} as { org: string; username: string; role_id: number };
const result: OrgsRevokeOrgRoleUserOutput = await github.orgs.revokeOrgRoleUser(input);

// Result shape (from schema): unknown
```

### `github.orgs.assignUserToOrgRole`

- **HTTP**: `PUT /orgs/{org}/organization-roles/users/{username}/{role_id}`
- **What it does**: Assign an organization role to a user
- **OpenAPI operationId**: `orgs/assign-user-to-org-role`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string; role_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsAssignUserToOrgRoleInput = Parameters<typeof github.orgs.assignUserToOrgRole> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsAssignUserToOrgRoleOutput = Awaited<ReturnType<typeof github.orgs.assignUserToOrgRole>>;

const input: OrgsAssignUserToOrgRoleInput = {} as { org: string; username: string; role_id: number };
const result: OrgsAssignUserToOrgRoleOutput = await github.orgs.assignUserToOrgRole(input);

// Result shape (from schema): unknown
```

### `github.orgs.listOutsideCollaborators`

- **HTTP**: `GET /orgs/{org}/outside_collaborators`
- **What it does**: List outside collaborators for an organization
- **OpenAPI operationId**: `orgs/list-outside-collaborators`
- **Path params**: None
- **Query params**: `filter`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; filter?: "2fa_disabled" | "2fa_insecure" | "all"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OrgsListOutsideCollaboratorsInput = Parameters<typeof github.orgs.listOutsideCollaborators> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListOutsideCollaboratorsOutput = Awaited<ReturnType<typeof github.orgs.listOutsideCollaborators>>;

const input: OrgsListOutsideCollaboratorsInput = {} as { org: string; filter?: "2fa_disabled" | "2fa_insecure" | "all"; per_page?: number; page?: number };
const result: OrgsListOutsideCollaboratorsOutput = await github.orgs.listOutsideCollaborators(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.orgs.removeOutsideCollaborator`

- **HTTP**: `DELETE /orgs/{org}/outside_collaborators/{username}`
- **What it does**: Remove outside collaborator from an organization
- **OpenAPI operationId**: `orgs/remove-outside-collaborator`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `422`

```ts
import github from "@utdk/github";

type OrgsRemoveOutsideCollaboratorInput = Parameters<typeof github.orgs.removeOutsideCollaborator> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsRemoveOutsideCollaboratorOutput = Awaited<ReturnType<typeof github.orgs.removeOutsideCollaborator>>;

const input: OrgsRemoveOutsideCollaboratorInput = {} as { org: string; username: string };
const result: OrgsRemoveOutsideCollaboratorOutput = await github.orgs.removeOutsideCollaborator(input);

// Result shape (from schema): unknown
```

### `github.orgs.convertMemberToOutsideCollaborator`

- **HTTP**: `PUT /orgs/{org}/outside_collaborators/{username}`
- **What it does**: Convert an organization member to outside collaborator
- **OpenAPI operationId**: `orgs/convert-member-to-outside-collaborator`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `204`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ async?: boolean; org: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `204`, `403`, `404`

```ts
import github from "@utdk/github";

type OrgsConvertMemberToOutsideCollaboratorInput = Parameters<typeof github.orgs.convertMemberToOutsideCollaborator> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsConvertMemberToOutsideCollaboratorOutput = Awaited<ReturnType<typeof github.orgs.convertMemberToOutsideCollaborator>>;

const input: OrgsConvertMemberToOutsideCollaboratorInput = {} as { async?: boolean; org: string; username: string };
const result: OrgsConvertMemberToOutsideCollaboratorOutput = await github.orgs.convertMemberToOutsideCollaborator(input);

// Result shape (from schema): unknown
```

### `github.orgs.listPatGrantRequests`

- **HTTP**: `GET /orgs/{org}/personal-access-token-requests`
- **What it does**: List requests to access organization resources with fine-grained personal access tokens
- **OpenAPI operationId**: `orgs/list-pat-grant-requests`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number; sort?: "created_at"; direction?: "asc" | "desc"; owner?: (string)[]; repository?: string; permission?: string; last_used_before?: string; last_used_after?: string; token_id?: (string)[] }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; reason: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; foll...`
- OpenAPI response codes: `200`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type OrgsListPatGrantRequestsInput = Parameters<typeof github.orgs.listPatGrantRequests> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListPatGrantRequestsOutput = Awaited<ReturnType<typeof github.orgs.listPatGrantRequests>>;

const input: OrgsListPatGrantRequestsInput = {} as { org: string; per_page?: number; page?: number; sort?: "created_at"; direction?: "asc" | "desc"; owner?: (string)[]; repository?: string; permission?: string; last_used_before?: string; last_used_after?: string; token_id?: (string)[] };
const result: OrgsListPatGrantRequestsOutput = await github.orgs.listPatGrantRequests(input);

// Result shape (from schema): ({ id: number; reason: string | null; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; foll...
```

### `github.orgs.reviewPatGrantRequestsInBulk`

- **HTTP**: `POST /orgs/{org}/personal-access-token-requests`
- **What it does**: Review requests to access organization resources with fine-grained personal access tokens
- **OpenAPI operationId**: `orgs/review-pat-grant-requests-in-bulk`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ pat_request_ids?: (number)[]; action: "approve" | "deny"; reason?: string | null; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type OrgsReviewPatGrantRequestsInBulkInput = Parameters<typeof github.orgs.reviewPatGrantRequestsInBulk> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsReviewPatGrantRequestsInBulkOutput = Awaited<ReturnType<typeof github.orgs.reviewPatGrantRequestsInBulk>>;

const input: OrgsReviewPatGrantRequestsInBulkInput = {} as { pat_request_ids?: (number)[]; action: "approve" | "deny"; reason?: string | null; org: string };
const result: OrgsReviewPatGrantRequestsInBulkOutput = await github.orgs.reviewPatGrantRequestsInBulk(input);

// Result shape (from schema): unknown
```

### `github.orgs.reviewPatGrantRequest`

- **HTTP**: `POST /orgs/{org}/personal-access-token-requests/{pat_request_id}`
- **What it does**: Review a request to access organization resources with a fine-grained personal access token
- **OpenAPI operationId**: `orgs/review-pat-grant-request`
- **Path params**: `pat_request_id`
- **Query params**: None
- **Response codes**: `204`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ action: "approve" | "deny"; reason?: string | null; org: string; pat_request_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type OrgsReviewPatGrantRequestInput = Parameters<typeof github.orgs.reviewPatGrantRequest> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsReviewPatGrantRequestOutput = Awaited<ReturnType<typeof github.orgs.reviewPatGrantRequest>>;

const input: OrgsReviewPatGrantRequestInput = {} as { action: "approve" | "deny"; reason?: string | null; org: string; pat_request_id: number };
const result: OrgsReviewPatGrantRequestOutput = await github.orgs.reviewPatGrantRequest(input);

// Result shape (from schema): unknown
```

### `github.orgs.listPatGrantRequestRepositories`

- **HTTP**: `GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories`
- **What it does**: List repositories requested to be accessed by a fine-grained personal access token
- **OpenAPI operationId**: `orgs/list-pat-grant-request-repositories`
- **Path params**: `pat_request_id`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; pat_request_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...`
- OpenAPI response codes: `200`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type OrgsListPatGrantRequestRepositoriesInput = Parameters<typeof github.orgs.listPatGrantRequestRepositories> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListPatGrantRequestRepositoriesOutput = Awaited<ReturnType<typeof github.orgs.listPatGrantRequestRepositories>>;

const input: OrgsListPatGrantRequestRepositoriesInput = {} as { org: string; pat_request_id: number; per_page?: number; page?: number };
const result: OrgsListPatGrantRequestRepositoriesOutput = await github.orgs.listPatGrantRequestRepositories(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...
```

### `github.orgs.listPatGrants`

- **HTTP**: `GET /orgs/{org}/personal-access-tokens`
- **What it does**: List fine-grained personal access tokens with access to organization resources
- **OpenAPI operationId**: `orgs/list-pat-grants`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number; sort?: "created_at"; direction?: "asc" | "desc"; owner?: (string)[]; repository?: string; permission?: string; last_used_before?: string; last_used_after?: string; token_id?: (string)[] }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; foll...`
- OpenAPI response codes: `200`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type OrgsListPatGrantsInput = Parameters<typeof github.orgs.listPatGrants> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListPatGrantsOutput = Awaited<ReturnType<typeof github.orgs.listPatGrants>>;

const input: OrgsListPatGrantsInput = {} as { org: string; per_page?: number; page?: number; sort?: "created_at"; direction?: "asc" | "desc"; owner?: (string)[]; repository?: string; permission?: string; last_used_before?: string; last_used_after?: string; token_id?: (string)[] };
const result: OrgsListPatGrantsOutput = await github.orgs.listPatGrants(input);

// Result shape (from schema): ({ id: number; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; foll...
```

### `github.orgs.updatePatAccesses`

- **HTTP**: `POST /orgs/{org}/personal-access-tokens`
- **What it does**: Update the access to organization resources via fine-grained personal access tokens
- **OpenAPI operationId**: `orgs/update-pat-accesses`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ action: "revoke"; pat_ids: (number)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type OrgsUpdatePatAccessesInput = Parameters<typeof github.orgs.updatePatAccesses> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsUpdatePatAccessesOutput = Awaited<ReturnType<typeof github.orgs.updatePatAccesses>>;

const input: OrgsUpdatePatAccessesInput = {} as { action: "revoke"; pat_ids: (number)[]; org: string };
const result: OrgsUpdatePatAccessesOutput = await github.orgs.updatePatAccesses(input);

// Result shape (from schema): unknown
```

### `github.orgs.updatePatAccess`

- **HTTP**: `POST /orgs/{org}/personal-access-tokens/{pat_id}`
- **What it does**: Update the access a fine-grained personal access token has to organization resources
- **OpenAPI operationId**: `orgs/update-pat-access`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ action: "revoke"; org: string; pat_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type OrgsUpdatePatAccessInput = Parameters<typeof github.orgs.updatePatAccess> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsUpdatePatAccessOutput = Awaited<ReturnType<typeof github.orgs.updatePatAccess>>;

const input: OrgsUpdatePatAccessInput = {} as { action: "revoke"; org: string; pat_id: number };
const result: OrgsUpdatePatAccessOutput = await github.orgs.updatePatAccess(input);

// Result shape (from schema): unknown
```

### `github.orgs.listPatGrantRepositories`

- **HTTP**: `GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories`
- **What it does**: List repositories a fine-grained personal access token has access to
- **OpenAPI operationId**: `orgs/list-pat-grant-repositories`
- **Path params**: `pat_id`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; pat_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...`
- OpenAPI response codes: `200`, `403`, `404`, `500`

```ts
import github from "@utdk/github";

type OrgsListPatGrantRepositoriesInput = Parameters<typeof github.orgs.listPatGrantRepositories> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListPatGrantRepositoriesOutput = Awaited<ReturnType<typeof github.orgs.listPatGrantRepositories>>;

const input: OrgsListPatGrantRepositoriesInput = {} as { org: string; pat_id: number; per_page?: number; page?: number };
const result: OrgsListPatGrantRepositoriesOutput = await github.orgs.listPatGrantRepositories(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...
```

### `github.orgs.customPropertiesForReposGetOrganizationDefinitions`

- **HTTP**: `GET /orgs/{org}/properties/schema`
- **What it does**: Get all custom properties for an organization
- **OpenAPI operationId**: `orgs/custom-properties-for-repos-get-organization-definitions`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ property_name: string; url?: string; source_type?: "organization" | "enterprise"; value_type: "string" | "single_select" | "multi_select" | "true_false" | "url"; required?: boolean; default_value?: string | (string)[...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type OrgsCustomPropertiesForReposGetOrganizationDefinitionsInput = Parameters<typeof github.orgs.customPropertiesForReposGetOrganizationDefinitions> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCustomPropertiesForReposGetOrganizationDefinitionsOutput = Awaited<ReturnType<typeof github.orgs.customPropertiesForReposGetOrganizationDefinitions>>;

const input: OrgsCustomPropertiesForReposGetOrganizationDefinitionsInput = {} as { org: string };
const result: OrgsCustomPropertiesForReposGetOrganizationDefinitionsOutput = await github.orgs.customPropertiesForReposGetOrganizationDefinitions(input);

// Result shape (from schema): ({ property_name: string; url?: string; source_type?: "organization" | "enterprise"; value_type: "string" | "single_select" | "multi_select" | "true_false" | "url"; required?: boolean; default_value?: string | (string)[...
```

### `github.orgs.customPropertiesForReposCreateOrUpdateOrganizationDefinitions`

- **HTTP**: `PATCH /orgs/{org}/properties/schema`
- **What it does**: Create or update custom properties for an organization
- **OpenAPI operationId**: `orgs/custom-properties-for-repos-create-or-update-organization-definitions`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ properties: ({ property_name: string; url?: string; source_type?: "organization" | "enterprise"; value_type: "string" | "single_select" | "multi_select" | "true_false" | "url"; required?: boolean; default_value?: string | (string)[] | null; description?: string | null; allowed_values?: (string)[] | null; values_editable_by?: "org_actors" | "org_and_repo_actors" | null; require_explicit_values?: boolean })[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ property_name: string; url?: string; source_type?: "organization" | "enterprise"; value_type: "string" | "single_select" | "multi_select" | "true_false" | "url"; required?: boolean; default_value?: string | (string)[...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type OrgsCustomPropertiesForReposCreateOrUpdateOrganizationDefinitionsInput = Parameters<typeof github.orgs.customPropertiesForReposCreateOrUpdateOrganizationDefinitions> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCustomPropertiesForReposCreateOrUpdateOrganizationDefinitionsOutput = Awaited<ReturnType<typeof github.orgs.customPropertiesForReposCreateOrUpdateOrganizationDefinitions>>;

const input: OrgsCustomPropertiesForReposCreateOrUpdateOrganizationDefinitionsInput = {} as { properties: ({ property_name: string; url?: string; source_type?: "organization" | "enterprise"; value_type: "string" | "single_select" | "multi_select" | "true_false" | "url"; required?: boolean; default_value?: string | (string)[] | null; description?: string | null; allowed_values?: (string)[] | null; values_editable_by?: "org_actors" | "org_and_repo_actors" | null; require_explicit_values?: boolean })[]; org: string };
const result: OrgsCustomPropertiesForReposCreateOrUpdateOrganizationDefinitionsOutput = await github.orgs.customPropertiesForReposCreateOrUpdateOrganizationDefinitions(input);

// Result shape (from schema): ({ property_name: string; url?: string; source_type?: "organization" | "enterprise"; value_type: "string" | "single_select" | "multi_select" | "true_false" | "url"; required?: boolean; default_value?: string | (string)[...
```

### `github.orgs.customPropertiesForReposDeleteOrganizationDefinition`

- **HTTP**: `DELETE /orgs/{org}/properties/schema/{custom_property_name}`
- **What it does**: Remove a custom property for an organization
- **OpenAPI operationId**: `orgs/custom-properties-for-repos-delete-organization-definition`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; custom_property_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`

```ts
import github from "@utdk/github";

type OrgsCustomPropertiesForReposDeleteOrganizationDefinitionInput = Parameters<typeof github.orgs.customPropertiesForReposDeleteOrganizationDefinition> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCustomPropertiesForReposDeleteOrganizationDefinitionOutput = Awaited<ReturnType<typeof github.orgs.customPropertiesForReposDeleteOrganizationDefinition>>;

const input: OrgsCustomPropertiesForReposDeleteOrganizationDefinitionInput = {} as { org: string; custom_property_name: string };
const result: OrgsCustomPropertiesForReposDeleteOrganizationDefinitionOutput = await github.orgs.customPropertiesForReposDeleteOrganizationDefinition(input);

// Result shape (from schema): unknown
```

### `github.orgs.customPropertiesForReposGetOrganizationDefinition`

- **HTTP**: `GET /orgs/{org}/properties/schema/{custom_property_name}`
- **What it does**: Get a custom property for an organization
- **OpenAPI operationId**: `orgs/custom-properties-for-repos-get-organization-definition`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; custom_property_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ property_name: string; url?: string; source_type?: "organization" | "enterprise"; value_type: "string" | "single_select" | "multi_select" | "true_false" | "url"; required?: boolean; default_value?: string | (string)[]...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type OrgsCustomPropertiesForReposGetOrganizationDefinitionInput = Parameters<typeof github.orgs.customPropertiesForReposGetOrganizationDefinition> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCustomPropertiesForReposGetOrganizationDefinitionOutput = Awaited<ReturnType<typeof github.orgs.customPropertiesForReposGetOrganizationDefinition>>;

const input: OrgsCustomPropertiesForReposGetOrganizationDefinitionInput = {} as { org: string; custom_property_name: string };
const result: OrgsCustomPropertiesForReposGetOrganizationDefinitionOutput = await github.orgs.customPropertiesForReposGetOrganizationDefinition(input);

// Result shape (from schema): { property_name: string; url?: string; source_type?: "organization" | "enterprise"; value_type: "string" | "single_select" | "multi_select" | "true_false" | "url"; required?: boolean; default_value?: string | (string)[]...
```

### `github.orgs.customPropertiesForReposCreateOrUpdateOrganizationDefinition`

- **HTTP**: `PUT /orgs/{org}/properties/schema/{custom_property_name}`
- **What it does**: Create or update a custom property for an organization
- **OpenAPI operationId**: `orgs/custom-properties-for-repos-create-or-update-organization-definition`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ value_type: "string" | "single_select" | "multi_select" | "true_false" | "url"; required?: boolean; default_value?: string | (string)[] | null; description?: string | null; allowed_values?: (string)[] | null; values_editable_by?: "org_actors" | "org_and_repo_actors" | null; require_explicit_values?: boolean; org: string; custom_property_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ property_name: string; url?: string; source_type?: "organization" | "enterprise"; value_type: "string" | "single_select" | "multi_select" | "true_false" | "url"; required?: boolean; default_value?: string | (string)[]...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type OrgsCustomPropertiesForReposCreateOrUpdateOrganizationDefinitionInput = Parameters<typeof github.orgs.customPropertiesForReposCreateOrUpdateOrganizationDefinition> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCustomPropertiesForReposCreateOrUpdateOrganizationDefinitionOutput = Awaited<ReturnType<typeof github.orgs.customPropertiesForReposCreateOrUpdateOrganizationDefinition>>;

const input: OrgsCustomPropertiesForReposCreateOrUpdateOrganizationDefinitionInput = {} as { value_type: "string" | "single_select" | "multi_select" | "true_false" | "url"; required?: boolean; default_value?: string | (string)[] | null; description?: string | null; allowed_values?: (string)[] | null; values_editable_by?: "org_actors" | "org_and_repo_actors" | null; require_explicit_values?: boolean; org: string; custom_property_name: string };
const result: OrgsCustomPropertiesForReposCreateOrUpdateOrganizationDefinitionOutput = await github.orgs.customPropertiesForReposCreateOrUpdateOrganizationDefinition(input);

// Result shape (from schema): { property_name: string; url?: string; source_type?: "organization" | "enterprise"; value_type: "string" | "single_select" | "multi_select" | "true_false" | "url"; required?: boolean; default_value?: string | (string)[]...
```

### `github.orgs.customPropertiesForReposGetOrganizationValues`

- **HTTP**: `GET /orgs/{org}/properties/values`
- **What it does**: List custom property values for organization repositories
- **OpenAPI operationId**: `orgs/custom-properties-for-repos-get-organization-values`
- **Path params**: None
- **Query params**: `repository_query`
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number; repository_query?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ repository_id: number; repository_name: string; repository_full_name: string; properties: ({ property_name: string; value: string | (string)[] | null })[] })[]`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type OrgsCustomPropertiesForReposGetOrganizationValuesInput = Parameters<typeof github.orgs.customPropertiesForReposGetOrganizationValues> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCustomPropertiesForReposGetOrganizationValuesOutput = Awaited<ReturnType<typeof github.orgs.customPropertiesForReposGetOrganizationValues>>;

const input: OrgsCustomPropertiesForReposGetOrganizationValuesInput = {} as { org: string; per_page?: number; page?: number; repository_query?: string };
const result: OrgsCustomPropertiesForReposGetOrganizationValuesOutput = await github.orgs.customPropertiesForReposGetOrganizationValues(input);

// Result shape (from schema): ({ repository_id: number; repository_name: string; repository_full_name: string; properties: ({ property_name: string; value: string | (string)[] | null })[] })[]
```

### `github.orgs.customPropertiesForReposCreateOrUpdateOrganizationValues`

- **HTTP**: `PATCH /orgs/{org}/properties/values`
- **What it does**: Create or update custom property values for organization repositories
- **OpenAPI operationId**: `orgs/custom-properties-for-repos-create-or-update-organization-values`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ repository_names: (string)[]; properties: ({ property_name: string; value: string | (string)[] | null })[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsCustomPropertiesForReposCreateOrUpdateOrganizationValuesInput = Parameters<typeof github.orgs.customPropertiesForReposCreateOrUpdateOrganizationValues> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCustomPropertiesForReposCreateOrUpdateOrganizationValuesOutput = Awaited<ReturnType<typeof github.orgs.customPropertiesForReposCreateOrUpdateOrganizationValues>>;

const input: OrgsCustomPropertiesForReposCreateOrUpdateOrganizationValuesInput = {} as { repository_names: (string)[]; properties: ({ property_name: string; value: string | (string)[] | null })[]; org: string };
const result: OrgsCustomPropertiesForReposCreateOrUpdateOrganizationValuesOutput = await github.orgs.customPropertiesForReposCreateOrUpdateOrganizationValues(input);

// Result shape (from schema): unknown
```

### `github.orgs.listPublicMembers`

- **HTTP**: `GET /orgs/{org}/public_members`
- **What it does**: List public organization members
- **OpenAPI operationId**: `orgs/list-public-members`
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

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OrgsListPublicMembersInput = Parameters<typeof github.orgs.listPublicMembers> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListPublicMembersOutput = Awaited<ReturnType<typeof github.orgs.listPublicMembers>>;

const input: OrgsListPublicMembersInput = {} as { org: string; per_page?: number; page?: number };
const result: OrgsListPublicMembersOutput = await github.orgs.listPublicMembers(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.orgs.removePublicMembershipForAuthenticatedUser`

- **HTTP**: `DELETE /orgs/{org}/public_members/{username}`
- **What it does**: Remove public organization membership for the authenticated user
- **OpenAPI operationId**: `orgs/remove-public-membership-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type OrgsRemovePublicMembershipForAuthenticatedUserInput = Parameters<typeof github.orgs.removePublicMembershipForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsRemovePublicMembershipForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.orgs.removePublicMembershipForAuthenticatedUser>>;

const input: OrgsRemovePublicMembershipForAuthenticatedUserInput = {} as { org: string; username: string };
const result: OrgsRemovePublicMembershipForAuthenticatedUserOutput = await github.orgs.removePublicMembershipForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.orgs.checkPublicMembershipForUser`

- **HTTP**: `GET /orgs/{org}/public_members/{username}`
- **What it does**: Check public organization membership for a user
- **OpenAPI operationId**: `orgs/check-public-membership-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type OrgsCheckPublicMembershipForUserInput = Parameters<typeof github.orgs.checkPublicMembershipForUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsCheckPublicMembershipForUserOutput = Awaited<ReturnType<typeof github.orgs.checkPublicMembershipForUser>>;

const input: OrgsCheckPublicMembershipForUserInput = {} as { org: string; username: string };
const result: OrgsCheckPublicMembershipForUserOutput = await github.orgs.checkPublicMembershipForUser(input);

// Result shape (from schema): unknown
```

### `github.orgs.setPublicMembershipForAuthenticatedUser`

- **HTTP**: `PUT /orgs/{org}/public_members/{username}`
- **What it does**: Set public organization membership for the authenticated user
- **OpenAPI operationId**: `orgs/set-public-membership-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`

```ts
import github from "@utdk/github";

type OrgsSetPublicMembershipForAuthenticatedUserInput = Parameters<typeof github.orgs.setPublicMembershipForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsSetPublicMembershipForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.orgs.setPublicMembershipForAuthenticatedUser>>;

const input: OrgsSetPublicMembershipForAuthenticatedUserInput = {} as { org: string; username: string };
const result: OrgsSetPublicMembershipForAuthenticatedUserOutput = await github.orgs.setPublicMembershipForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.orgs.getOrgRulesetHistory`

- **HTTP**: `GET /orgs/{org}/rulesets/{ruleset_id}/history`
- **What it does**: Get organization ruleset history
- **OpenAPI operationId**: `orgs/get-org-ruleset-history`
- **Path params**: `ruleset_id`
- **Query params**: None
- **Response codes**: `200`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; ruleset_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ version_id: number; actor: { id?: number; type?: string }; updated_at: string })[]`
- OpenAPI response codes: `200`, `404`, `500`

```ts
import github from "@utdk/github";

type OrgsGetOrgRulesetHistoryInput = Parameters<typeof github.orgs.getOrgRulesetHistory> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsGetOrgRulesetHistoryOutput = Awaited<ReturnType<typeof github.orgs.getOrgRulesetHistory>>;

const input: OrgsGetOrgRulesetHistoryInput = {} as { org: string; ruleset_id: number; per_page?: number; page?: number };
const result: OrgsGetOrgRulesetHistoryOutput = await github.orgs.getOrgRulesetHistory(input);

// Result shape (from schema): ({ version_id: number; actor: { id?: number; type?: string }; updated_at: string })[]
```

### `github.orgs.getOrgRulesetVersion`

- **HTTP**: `GET /orgs/{org}/rulesets/{ruleset_id}/history/{version_id}`
- **What it does**: Get organization ruleset version
- **OpenAPI operationId**: `orgs/get-org-ruleset-version`
- **Path params**: `ruleset_id`, `version_id`
- **Query params**: None
- **Response codes**: `200`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; ruleset_id: number; version_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `404`, `500`

```ts
import github from "@utdk/github";

type OrgsGetOrgRulesetVersionInput = Parameters<typeof github.orgs.getOrgRulesetVersion> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsGetOrgRulesetVersionOutput = Awaited<ReturnType<typeof github.orgs.getOrgRulesetVersion>>;

const input: OrgsGetOrgRulesetVersionInput = {} as { org: string; ruleset_id: number; version_id: number };
const result: OrgsGetOrgRulesetVersionOutput = await github.orgs.getOrgRulesetVersion(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.orgs.listSecurityManagerTeams`

- **HTTP**: `GET /orgs/{org}/security-managers`
- **What it does**: List security manager teams
- **OpenAPI operationId**: `orgs/list-security-manager-teams`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; members_url: string; name: string; description: string | null; permission: string; privacy?: string; notification_setting?: string; html_url: string; repositories_url: string...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OrgsListSecurityManagerTeamsInput = Parameters<typeof github.orgs.listSecurityManagerTeams> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListSecurityManagerTeamsOutput = Awaited<ReturnType<typeof github.orgs.listSecurityManagerTeams>>;

const input: OrgsListSecurityManagerTeamsInput = {} as { org: string };
const result: OrgsListSecurityManagerTeamsOutput = await github.orgs.listSecurityManagerTeams(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; members_url: string; name: string; description: string | null; permission: string; privacy?: string; notification_setting?: string; html_url: string; repositories_url: string...
```

### `github.orgs.removeSecurityManagerTeam`

- **HTTP**: `DELETE /orgs/{org}/security-managers/teams/{team_slug}`
- **What it does**: Remove a security manager team
- **OpenAPI operationId**: `orgs/remove-security-manager-team`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type OrgsRemoveSecurityManagerTeamInput = Parameters<typeof github.orgs.removeSecurityManagerTeam> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsRemoveSecurityManagerTeamOutput = Awaited<ReturnType<typeof github.orgs.removeSecurityManagerTeam>>;

const input: OrgsRemoveSecurityManagerTeamInput = {} as { org: string; team_slug: string };
const result: OrgsRemoveSecurityManagerTeamOutput = await github.orgs.removeSecurityManagerTeam(input);

// Result shape (from schema): unknown
```

### `github.orgs.addSecurityManagerTeam`

- **HTTP**: `PUT /orgs/{org}/security-managers/teams/{team_slug}`
- **What it does**: Add a security manager team
- **OpenAPI operationId**: `orgs/add-security-manager-team`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; team_slug: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type OrgsAddSecurityManagerTeamInput = Parameters<typeof github.orgs.addSecurityManagerTeam> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsAddSecurityManagerTeamOutput = Awaited<ReturnType<typeof github.orgs.addSecurityManagerTeam>>;

const input: OrgsAddSecurityManagerTeamInput = {} as { org: string; team_slug: string };
const result: OrgsAddSecurityManagerTeamOutput = await github.orgs.addSecurityManagerTeam(input);

// Result shape (from schema): unknown
```

### `github.orgs.getImmutableReleasesSettings`

- **HTTP**: `GET /orgs/{org}/settings/immutable-releases`
- **What it does**: Get immutable releases settings for an organization
- **OpenAPI operationId**: `orgs/get-immutable-releases-settings`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ enforced_repositories: "all" | "none" | "selected"; selected_repositories_url?: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OrgsGetImmutableReleasesSettingsInput = Parameters<typeof github.orgs.getImmutableReleasesSettings> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsGetImmutableReleasesSettingsOutput = Awaited<ReturnType<typeof github.orgs.getImmutableReleasesSettings>>;

const input: OrgsGetImmutableReleasesSettingsInput = {} as { org: string };
const result: OrgsGetImmutableReleasesSettingsOutput = await github.orgs.getImmutableReleasesSettings(input);

// Result shape (from schema): { enforced_repositories: "all" | "none" | "selected"; selected_repositories_url?: string }
```

### `github.orgs.setImmutableReleasesSettings`

- **HTTP**: `PUT /orgs/{org}/settings/immutable-releases`
- **What it does**: Set immutable releases settings for an organization
- **OpenAPI operationId**: `orgs/set-immutable-releases-settings`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enforced_repositories: "all" | "none" | "selected"; selected_repository_ids?: (number)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type OrgsSetImmutableReleasesSettingsInput = Parameters<typeof github.orgs.setImmutableReleasesSettings> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsSetImmutableReleasesSettingsOutput = Awaited<ReturnType<typeof github.orgs.setImmutableReleasesSettings>>;

const input: OrgsSetImmutableReleasesSettingsInput = {} as { enforced_repositories: "all" | "none" | "selected"; selected_repository_ids?: (number)[]; org: string };
const result: OrgsSetImmutableReleasesSettingsOutput = await github.orgs.setImmutableReleasesSettings(input);

// Result shape (from schema): unknown
```

### `github.orgs.getImmutableReleasesSettingsRepositories`

- **HTTP**: `GET /orgs/{org}/settings/immutable-releases/repositories`
- **What it does**: List selected repositories for immutable releases enforcement
- **OpenAPI operationId**: `orgs/get-immutable-releases-settings-repositories`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OrgsGetImmutableReleasesSettingsRepositoriesInput = Parameters<typeof github.orgs.getImmutableReleasesSettingsRepositories> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsGetImmutableReleasesSettingsRepositoriesOutput = Awaited<ReturnType<typeof github.orgs.getImmutableReleasesSettingsRepositories>>;

const input: OrgsGetImmutableReleasesSettingsRepositoriesInput = {} as { org: string; page?: number; per_page?: number };
const result: OrgsGetImmutableReleasesSettingsRepositoriesOutput = await github.orgs.getImmutableReleasesSettingsRepositories(input);

// Result shape (from schema): { total_count: number; repositories: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string;...
```

### `github.orgs.setImmutableReleasesSettingsRepositories`

- **HTTP**: `PUT /orgs/{org}/settings/immutable-releases/repositories`
- **What it does**: Set selected repositories for immutable releases enforcement
- **OpenAPI operationId**: `orgs/set-immutable-releases-settings-repositories`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ selected_repository_ids: (number)[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type OrgsSetImmutableReleasesSettingsRepositoriesInput = Parameters<typeof github.orgs.setImmutableReleasesSettingsRepositories> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsSetImmutableReleasesSettingsRepositoriesOutput = Awaited<ReturnType<typeof github.orgs.setImmutableReleasesSettingsRepositories>>;

const input: OrgsSetImmutableReleasesSettingsRepositoriesInput = {} as { selected_repository_ids: (number)[]; org: string };
const result: OrgsSetImmutableReleasesSettingsRepositoriesOutput = await github.orgs.setImmutableReleasesSettingsRepositories(input);

// Result shape (from schema): unknown
```

### `github.orgs.disableSelectedRepositoryImmutableReleasesOrganization`

- **HTTP**: `DELETE /orgs/{org}/settings/immutable-releases/repositories/{repository_id}`
- **What it does**: Disable a selected repository for immutable releases in an organization
- **OpenAPI operationId**: `orgs/disable-selected-repository-immutable-releases-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type OrgsDisableSelectedRepositoryImmutableReleasesOrganizationInput = Parameters<typeof github.orgs.disableSelectedRepositoryImmutableReleasesOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsDisableSelectedRepositoryImmutableReleasesOrganizationOutput = Awaited<ReturnType<typeof github.orgs.disableSelectedRepositoryImmutableReleasesOrganization>>;

const input: OrgsDisableSelectedRepositoryImmutableReleasesOrganizationInput = {} as { org: string; repository_id: number };
const result: OrgsDisableSelectedRepositoryImmutableReleasesOrganizationOutput = await github.orgs.disableSelectedRepositoryImmutableReleasesOrganization(input);

// Result shape (from schema): unknown
```

### `github.orgs.enableSelectedRepositoryImmutableReleasesOrganization`

- **HTTP**: `PUT /orgs/{org}/settings/immutable-releases/repositories/{repository_id}`
- **What it does**: Enable a selected repository for immutable releases in an organization
- **OpenAPI operationId**: `orgs/enable-selected-repository-immutable-releases-organization`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; repository_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type OrgsEnableSelectedRepositoryImmutableReleasesOrganizationInput = Parameters<typeof github.orgs.enableSelectedRepositoryImmutableReleasesOrganization> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsEnableSelectedRepositoryImmutableReleasesOrganizationOutput = Awaited<ReturnType<typeof github.orgs.enableSelectedRepositoryImmutableReleasesOrganization>>;

const input: OrgsEnableSelectedRepositoryImmutableReleasesOrganizationInput = {} as { org: string; repository_id: number };
const result: OrgsEnableSelectedRepositoryImmutableReleasesOrganizationOutput = await github.orgs.enableSelectedRepositoryImmutableReleasesOrganization(input);

// Result shape (from schema): unknown
```

### `github.orgs.listMembershipsForAuthenticatedUser`

- **HTTP**: `GET /user/memberships/orgs`
- **What it does**: List organization memberships for the authenticated user
- **OpenAPI operationId**: `orgs/list-memberships-for-authenticated-user`
- **Path params**: None
- **Query params**: `state`
- **Response codes**: `200`, `304`, `401`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ state?: "active" | "pending"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; state: "active" | "pending"; role: "admin" | "member" | "billing_manager"; direct_membership?: boolean; enterprise_teams_providing_indirect_membership?: (string)[]; organization_url: string; organization...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `422`

```ts
import github from "@utdk/github";

type OrgsListMembershipsForAuthenticatedUserInput = Parameters<typeof github.orgs.listMembershipsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListMembershipsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.orgs.listMembershipsForAuthenticatedUser>>;

const input: OrgsListMembershipsForAuthenticatedUserInput = {} as { state?: "active" | "pending"; per_page?: number; page?: number };
const result: OrgsListMembershipsForAuthenticatedUserOutput = await github.orgs.listMembershipsForAuthenticatedUser(input);

// Result shape (from schema): ({ url: string; state: "active" | "pending"; role: "admin" | "member" | "billing_manager"; direct_membership?: boolean; enterprise_teams_providing_indirect_membership?: (string)[]; organization_url: string; organization...
```

### `github.orgs.getMembershipForAuthenticatedUser`

- **HTTP**: `GET /user/memberships/orgs/{org}`
- **What it does**: Get an organization membership for the authenticated user
- **OpenAPI operationId**: `orgs/get-membership-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; state: "active" | "pending"; role: "admin" | "member" | "billing_manager"; direct_membership?: boolean; enterprise_teams_providing_indirect_membership?: (string)[]; organization_url: string; organization:...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type OrgsGetMembershipForAuthenticatedUserInput = Parameters<typeof github.orgs.getMembershipForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsGetMembershipForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.orgs.getMembershipForAuthenticatedUser>>;

const input: OrgsGetMembershipForAuthenticatedUserInput = {} as { org: string };
const result: OrgsGetMembershipForAuthenticatedUserOutput = await github.orgs.getMembershipForAuthenticatedUser(input);

// Result shape (from schema): { url: string; state: "active" | "pending"; role: "admin" | "member" | "billing_manager"; direct_membership?: boolean; enterprise_teams_providing_indirect_membership?: (string)[]; organization_url: string; organization:...
```

### `github.orgs.updateMembershipForAuthenticatedUser`

- **HTTP**: `PATCH /user/memberships/orgs/{org}`
- **What it does**: Update an organization membership for the authenticated user
- **OpenAPI operationId**: `orgs/update-membership-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ state: "active"; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; state: "active" | "pending"; role: "admin" | "member" | "billing_manager"; direct_membership?: boolean; enterprise_teams_providing_indirect_membership?: (string)[]; organization_url: string; organization:...`
- OpenAPI response codes: `200`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type OrgsUpdateMembershipForAuthenticatedUserInput = Parameters<typeof github.orgs.updateMembershipForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsUpdateMembershipForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.orgs.updateMembershipForAuthenticatedUser>>;

const input: OrgsUpdateMembershipForAuthenticatedUserInput = {} as { state: "active"; org: string };
const result: OrgsUpdateMembershipForAuthenticatedUserOutput = await github.orgs.updateMembershipForAuthenticatedUser(input);

// Result shape (from schema): { url: string; state: "active" | "pending"; role: "admin" | "member" | "billing_manager"; direct_membership?: boolean; enterprise_teams_providing_indirect_membership?: (string)[]; organization_url: string; organization:...
```

### `github.orgs.listForAuthenticatedUser`

- **HTTP**: `GET /user/orgs`
- **What it does**: List organizations for the authenticated user
- **OpenAPI operationId**: `orgs/list-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description:...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type OrgsListForAuthenticatedUserInput = Parameters<typeof github.orgs.listForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.orgs.listForAuthenticatedUser>>;

const input: OrgsListForAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: OrgsListForAuthenticatedUserOutput = await github.orgs.listForAuthenticatedUser(input);

// Result shape (from schema): ({ login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description:...
```

### `github.orgs.listForUser`

- **HTTP**: `GET /users/{username}/orgs`
- **What it does**: List organizations for a user
- **OpenAPI operationId**: `orgs/list-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description:...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OrgsListForUserInput = Parameters<typeof github.orgs.listForUser> extends [infer T, ...unknown[]] ? T : undefined;
type OrgsListForUserOutput = Awaited<ReturnType<typeof github.orgs.listForUser>>;

const input: OrgsListForUserInput = {} as { username: string; per_page?: number; page?: number };
const result: OrgsListForUserOutput = await github.orgs.listForUser(input);

// Result shape (from schema): ({ login: string; id: number; node_id: string; url: string; repos_url: string; events_url: string; hooks_url: string; issues_url: string; members_url: string; public_members_url: string; avatar_url: string; description:...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
