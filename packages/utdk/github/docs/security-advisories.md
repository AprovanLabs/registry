# Security Advisories

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.securityAdvisories.listGlobalAdvisories`

- **HTTP**: `GET /advisories`
- **What it does**: List global security advisories
- **OpenAPI operationId**: `security-advisories/list-global-advisories`
- **Path params**: None
- **Query params**: `ghsa_id`, `type`, `cve_id`, `ecosystem`, `severity`, `cwes`, `is_withdrawn`, `affects`, `published`, `updated`, `modified`, `epss_percentage`, `epss_percentile`, `per_page`, `sort`
- **Response codes**: `200`, `422`, `429`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ ghsa_id?: string; type?: "reviewed" | "malware" | "unreviewed"; cve_id?: string; ecosystem?: "rubygems" | "npm" | "pip" | "maven" | "nuget" | "composer" | "go" | "rust" | "erlang" | "actions" | "pub" | "other" | "swift"; severity?: "unknown" | "low" | "medium" | "high" | "critical"; cwes?: string | (string)[]; is_withdrawn?: boolean; affects?: string | (string)[]; published?: string; updated?: string; modified?: string; epss_percentage?: string; epss_percentile?: string; before?: string; after?: string; direction?: "asc" | "desc"; per_page?: number; sort?: "updated" | "published" | "epss_percentage" | "epss_percentile" }`
- Client transport options: None

**Outputs**

- Client return type: `({ ghsa_id: string; cve_id: string | null; url: string; html_url: string; repository_advisory_url: string | null; summary: string; description: string | null; type: "reviewed" | "unreviewed" | "malware"; severity: "crit...`
- OpenAPI response codes: `200`, `422`, `429`

```ts
import github from "@utdk/github";

type SecurityAdvisoriesListGlobalAdvisoriesInput = Parameters<typeof github.securityAdvisories.listGlobalAdvisories> extends [infer T, ...unknown[]] ? T : undefined;
type SecurityAdvisoriesListGlobalAdvisoriesOutput = Awaited<ReturnType<typeof github.securityAdvisories.listGlobalAdvisories>>;

const input: SecurityAdvisoriesListGlobalAdvisoriesInput = {} as { ghsa_id?: string; type?: "reviewed" | "malware" | "unreviewed"; cve_id?: string; ecosystem?: "rubygems" | "npm" | "pip" | "maven" | "nuget" | "composer" | "go" | "rust" | "erlang" | "actions" | "pub" | "other" | "swift"; severity?: "unknown" | "low" | "medium" | "high" | "critical"; cwes?: string | (string)[]; is_withdrawn?: boolean; affects?: string | (string)[]; published?: string; updated?: string; modified?: string; epss_percentage?: string; epss_percentile?: string; before?: string; after?: string; direction?: "asc" | "desc"; per_page?: number; sort?: "updated" | "published" | "epss_percentage" | "epss_percentile" };
const result: SecurityAdvisoriesListGlobalAdvisoriesOutput = await github.securityAdvisories.listGlobalAdvisories(input);

// Result shape (from schema): ({ ghsa_id: string; cve_id: string | null; url: string; html_url: string; repository_advisory_url: string | null; summary: string; description: string | null; type: "reviewed" | "unreviewed" | "malware"; severity: "crit...
```

### `github.securityAdvisories.getGlobalAdvisory`

- **HTTP**: `GET /advisories/{ghsa_id}`
- **What it does**: Get a global security advisory
- **OpenAPI operationId**: `security-advisories/get-global-advisory`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ ghsa_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ ghsa_id: string; cve_id: string | null; url: string; html_url: string; repository_advisory_url: string | null; summary: string; description: string | null; type: "reviewed" | "unreviewed" | "malware"; severity: "criti...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type SecurityAdvisoriesGetGlobalAdvisoryInput = Parameters<typeof github.securityAdvisories.getGlobalAdvisory> extends [infer T, ...unknown[]] ? T : undefined;
type SecurityAdvisoriesGetGlobalAdvisoryOutput = Awaited<ReturnType<typeof github.securityAdvisories.getGlobalAdvisory>>;

const input: SecurityAdvisoriesGetGlobalAdvisoryInput = {} as { ghsa_id: string };
const result: SecurityAdvisoriesGetGlobalAdvisoryOutput = await github.securityAdvisories.getGlobalAdvisory(input);

// Result shape (from schema): { ghsa_id: string; cve_id: string | null; url: string; html_url: string; repository_advisory_url: string | null; summary: string; description: string | null; type: "reviewed" | "unreviewed" | "malware"; severity: "criti...
```

### `github.securityAdvisories.listOrgRepositoryAdvisories`

- **HTTP**: `GET /orgs/{org}/security-advisories`
- **What it does**: List repository security advisories for an organization
- **OpenAPI operationId**: `security-advisories/list-org-repository-advisories`
- **Path params**: None
- **Query params**: `sort`, `per_page`, `state`
- **Response codes**: `200`, `400`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; direction?: "asc" | "desc"; sort?: "created" | "updated" | "published"; before?: string; after?: string; per_page?: number; state?: "triage" | "draft" | "published" | "closed" }`
- Client transport options: None

**Outputs**

- Client return type: `({ ghsa_id: string; cve_id: string | null; url: string; html_url: string; summary: string; description: string | null; severity: "critical" | "high" | "medium" | "low" | null; author: { name?: string | null; email?: str...`
- OpenAPI response codes: `200`, `400`, `404`

```ts
import github from "@utdk/github";

type SecurityAdvisoriesListOrgRepositoryAdvisoriesInput = Parameters<typeof github.securityAdvisories.listOrgRepositoryAdvisories> extends [infer T, ...unknown[]] ? T : undefined;
type SecurityAdvisoriesListOrgRepositoryAdvisoriesOutput = Awaited<ReturnType<typeof github.securityAdvisories.listOrgRepositoryAdvisories>>;

const input: SecurityAdvisoriesListOrgRepositoryAdvisoriesInput = {} as { org: string; direction?: "asc" | "desc"; sort?: "created" | "updated" | "published"; before?: string; after?: string; per_page?: number; state?: "triage" | "draft" | "published" | "closed" };
const result: SecurityAdvisoriesListOrgRepositoryAdvisoriesOutput = await github.securityAdvisories.listOrgRepositoryAdvisories(input);

// Result shape (from schema): ({ ghsa_id: string; cve_id: string | null; url: string; html_url: string; summary: string; description: string | null; severity: "critical" | "high" | "medium" | "low" | null; author: { name?: string | null; email?: str...
```

### `github.securityAdvisories.listRepositoryAdvisories`

- **HTTP**: `GET /repos/{owner}/{repo}/security-advisories`
- **What it does**: List repository security advisories
- **OpenAPI operationId**: `security-advisories/list-repository-advisories`
- **Path params**: None
- **Query params**: `sort`, `per_page`, `state`
- **Response codes**: `200`, `400`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; direction?: "asc" | "desc"; sort?: "created" | "updated" | "published"; before?: string; after?: string; per_page?: number; state?: "triage" | "draft" | "published" | "closed" }`
- Client transport options: None

**Outputs**

- Client return type: `({ ghsa_id: string; cve_id: string | null; url: string; html_url: string; summary: string; description: string | null; severity: "critical" | "high" | "medium" | "low" | null; author: { name?: string | null; email?: str...`
- OpenAPI response codes: `200`, `400`, `404`

```ts
import github from "@utdk/github";

type SecurityAdvisoriesListRepositoryAdvisoriesInput = Parameters<typeof github.securityAdvisories.listRepositoryAdvisories> extends [infer T, ...unknown[]] ? T : undefined;
type SecurityAdvisoriesListRepositoryAdvisoriesOutput = Awaited<ReturnType<typeof github.securityAdvisories.listRepositoryAdvisories>>;

const input: SecurityAdvisoriesListRepositoryAdvisoriesInput = {} as { owner: string; repo: string; direction?: "asc" | "desc"; sort?: "created" | "updated" | "published"; before?: string; after?: string; per_page?: number; state?: "triage" | "draft" | "published" | "closed" };
const result: SecurityAdvisoriesListRepositoryAdvisoriesOutput = await github.securityAdvisories.listRepositoryAdvisories(input);

// Result shape (from schema): ({ ghsa_id: string; cve_id: string | null; url: string; html_url: string; summary: string; description: string | null; severity: "critical" | "high" | "medium" | "low" | null; author: { name?: string | null; email?: str...
```

### `github.securityAdvisories.createRepositoryAdvisory`

- **HTTP**: `POST /repos/{owner}/{repo}/security-advisories`
- **What it does**: Create a repository security advisory
- **OpenAPI operationId**: `security-advisories/create-repository-advisory`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ summary: string; description: string; cve_id?: string | null; vulnerabilities: ({ package: { ecosystem: "rubygems" | "npm" | "pip" | "maven" | "nuget" | "composer" | "go" | "rust" | "erlang" | "actions" | "pub" | "other" | "swift"; name?: string | null }; vulnerable_version_range?: string | null; patched_versions?: string | null; vulnerable_functions?: (string)[] | null })[]; cwe_ids?: (string)[] | null; credits?: ({ login: string; type: "analyst" | "finder" | "reporter" | "coordinator" | "remediation_developer" | "remediation_reviewer" | "remediation_verifier" | "tool" | "sponsor" | "other" })[] | null; severity?: "critical" | "high" | "medium" | "low" | null; cvss_vector_string?: string | null; start_private_fork?: boolean; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ ghsa_id: string; cve_id: string | null; url: string; html_url: string; summary: string; description: string | null; severity: "critical" | "high" | "medium" | "low" | null; author: { name?: string | null; email?: stri...`
- OpenAPI response codes: `201`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type SecurityAdvisoriesCreateRepositoryAdvisoryInput = Parameters<typeof github.securityAdvisories.createRepositoryAdvisory> extends [infer T, ...unknown[]] ? T : undefined;
type SecurityAdvisoriesCreateRepositoryAdvisoryOutput = Awaited<ReturnType<typeof github.securityAdvisories.createRepositoryAdvisory>>;

const input: SecurityAdvisoriesCreateRepositoryAdvisoryInput = {} as { summary: string; description: string; cve_id?: string | null; vulnerabilities: ({ package: { ecosystem: "rubygems" | "npm" | "pip" | "maven" | "nuget" | "composer" | "go" | "rust" | "erlang" | "actions" | "pub" | "other" | "swift"; name?: string | null }; vulnerable_version_range?: string | null; patched_versions?: string | null; vulnerable_functions?: (string)[] | null })[]; cwe_ids?: (string)[] | null; credits?: ({ login: string; type: "analyst" | "finder" | "reporter" | "coordinator" | "remediation_developer" | "remediation_reviewer" | "remediation_verifier" | "tool" | "sponsor" | "other" })[] | null; severity?: "critical" | "high" | "medium" | "low" | null; cvss_vector_string?: string | null; start_private_fork?: boolean; owner: string; repo: string };
const result: SecurityAdvisoriesCreateRepositoryAdvisoryOutput = await github.securityAdvisories.createRepositoryAdvisory(input);

// Result shape (from schema): { ghsa_id: string; cve_id: string | null; url: string; html_url: string; summary: string; description: string | null; severity: "critical" | "high" | "medium" | "low" | null; author: { name?: string | null; email?: stri...
```

### `github.securityAdvisories.getRepositoryAdvisory`

- **HTTP**: `GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}`
- **What it does**: Get a repository security advisory
- **OpenAPI operationId**: `security-advisories/get-repository-advisory`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ghsa_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ ghsa_id: string; cve_id: string | null; url: string; html_url: string; summary: string; description: string | null; severity: "critical" | "high" | "medium" | "low" | null; author: { name?: string | null; email?: stri...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type SecurityAdvisoriesGetRepositoryAdvisoryInput = Parameters<typeof github.securityAdvisories.getRepositoryAdvisory> extends [infer T, ...unknown[]] ? T : undefined;
type SecurityAdvisoriesGetRepositoryAdvisoryOutput = Awaited<ReturnType<typeof github.securityAdvisories.getRepositoryAdvisory>>;

const input: SecurityAdvisoriesGetRepositoryAdvisoryInput = {} as { owner: string; repo: string; ghsa_id: string };
const result: SecurityAdvisoriesGetRepositoryAdvisoryOutput = await github.securityAdvisories.getRepositoryAdvisory(input);

// Result shape (from schema): { ghsa_id: string; cve_id: string | null; url: string; html_url: string; summary: string; description: string | null; severity: "critical" | "high" | "medium" | "low" | null; author: { name?: string | null; email?: stri...
```

### `github.securityAdvisories.updateRepositoryAdvisory`

- **HTTP**: `PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}`
- **What it does**: Update a repository security advisory
- **OpenAPI operationId**: `security-advisories/update-repository-advisory`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ summary?: string; description?: string; cve_id?: string | null; vulnerabilities?: ({ package: { ecosystem: "rubygems" | "npm" | "pip" | "maven" | "nuget" | "composer" | "go" | "rust" | "erlang" | "actions" | "pub" | "other" | "swift"; name?: string | null }; vulnerable_version_range?: string | null; patched_versions?: string | null; vulnerable_functions?: (string)[] | null })[]; cwe_ids?: (string)[] | null; credits?: ({ login: string; type: "analyst" | "finder" | "reporter" | "coordinator" | "remediation_developer" | "remediation_reviewer" | "remediation_verifier" | "tool" | "sponsor" | "other" })[] | null; severity?: "critical" | "high" | "medium" | "low" | null; cvss_vector_string?: string | null; state?: "published" | "closed" | "draft"; collaborating_users?: (string)[] | null; collaborating_teams?: (string)[] | null; owner: string; repo: string; ghsa_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ ghsa_id: string; cve_id: string | null; url: string; html_url: string; summary: string; description: string | null; severity: "critical" | "high" | "medium" | "low" | null; author: { name?: string | null; email?: stri...`
- OpenAPI response codes: `200`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type SecurityAdvisoriesUpdateRepositoryAdvisoryInput = Parameters<typeof github.securityAdvisories.updateRepositoryAdvisory> extends [infer T, ...unknown[]] ? T : undefined;
type SecurityAdvisoriesUpdateRepositoryAdvisoryOutput = Awaited<ReturnType<typeof github.securityAdvisories.updateRepositoryAdvisory>>;

const input: SecurityAdvisoriesUpdateRepositoryAdvisoryInput = {} as { summary?: string; description?: string; cve_id?: string | null; vulnerabilities?: ({ package: { ecosystem: "rubygems" | "npm" | "pip" | "maven" | "nuget" | "composer" | "go" | "rust" | "erlang" | "actions" | "pub" | "other" | "swift"; name?: string | null }; vulnerable_version_range?: string | null; patched_versions?: string | null; vulnerable_functions?: (string)[] | null })[]; cwe_ids?: (string)[] | null; credits?: ({ login: string; type: "analyst" | "finder" | "reporter" | "coordinator" | "remediation_developer" | "remediation_reviewer" | "remediation_verifier" | "tool" | "sponsor" | "other" })[] | null; severity?: "critical" | "high" | "medium" | "low" | null; cvss_vector_string?: string | null; state?: "published" | "closed" | "draft"; collaborating_users?: (string)[] | null; collaborating_teams?: (string)[] | null; owner: string; repo: string; ghsa_id: string };
const result: SecurityAdvisoriesUpdateRepositoryAdvisoryOutput = await github.securityAdvisories.updateRepositoryAdvisory(input);

// Result shape (from schema): { ghsa_id: string; cve_id: string | null; url: string; html_url: string; summary: string; description: string | null; severity: "critical" | "high" | "medium" | "low" | null; author: { name?: string | null; email?: stri...
```

### `github.securityAdvisories.createRepositoryAdvisoryCveRequest`

- **HTTP**: `POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve`
- **What it does**: Request a CVE for a repository security advisory
- **OpenAPI operationId**: `security-advisories/create-repository-advisory-cve-request`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `400`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ghsa_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `400`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type SecurityAdvisoriesCreateRepositoryAdvisoryCveRequestInput = Parameters<typeof github.securityAdvisories.createRepositoryAdvisoryCveRequest> extends [infer T, ...unknown[]] ? T : undefined;
type SecurityAdvisoriesCreateRepositoryAdvisoryCveRequestOutput = Awaited<ReturnType<typeof github.securityAdvisories.createRepositoryAdvisoryCveRequest>>;

const input: SecurityAdvisoriesCreateRepositoryAdvisoryCveRequestInput = {} as { owner: string; repo: string; ghsa_id: string };
const result: SecurityAdvisoriesCreateRepositoryAdvisoryCveRequestOutput = await github.securityAdvisories.createRepositoryAdvisoryCveRequest(input);

// Result shape (from schema): unknown
```

### `github.securityAdvisories.createFork`

- **HTTP**: `POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks`
- **What it does**: Create a temporary private fork
- **OpenAPI operationId**: `security-advisories/create-fork`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `400`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ghsa_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `400`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type SecurityAdvisoriesCreateForkInput = Parameters<typeof github.securityAdvisories.createFork> extends [infer T, ...unknown[]] ? T : undefined;
type SecurityAdvisoriesCreateForkOutput = Awaited<ReturnType<typeof github.securityAdvisories.createFork>>;

const input: SecurityAdvisoriesCreateForkInput = {} as { owner: string; repo: string; ghsa_id: string };
const result: SecurityAdvisoriesCreateForkOutput = await github.securityAdvisories.createFork(input);

// Result shape (from schema): unknown
```

### `github.securityAdvisories.createPrivateVulnerabilityReport`

- **HTTP**: `POST /repos/{owner}/{repo}/security-advisories/reports`
- **What it does**: Privately report a security vulnerability
- **OpenAPI operationId**: `security-advisories/create-private-vulnerability-report`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ summary: string; description: string; vulnerabilities?: ({ package: { ecosystem: "rubygems" | "npm" | "pip" | "maven" | "nuget" | "composer" | "go" | "rust" | "erlang" | "actions" | "pub" | "other" | "swift"; name?: string | null }; vulnerable_version_range?: string | null; patched_versions?: string | null; vulnerable_functions?: (string)[] | null })[] | null; cwe_ids?: (string)[] | null; severity?: "critical" | "high" | "medium" | "low" | null; cvss_vector_string?: string | null; start_private_fork?: boolean; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ ghsa_id: string; cve_id: string | null; url: string; html_url: string; summary: string; description: string | null; severity: "critical" | "high" | "medium" | "low" | null; author: { name?: string | null; email?: stri...`
- OpenAPI response codes: `201`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type SecurityAdvisoriesCreatePrivateVulnerabilityReportInput = Parameters<typeof github.securityAdvisories.createPrivateVulnerabilityReport> extends [infer T, ...unknown[]] ? T : undefined;
type SecurityAdvisoriesCreatePrivateVulnerabilityReportOutput = Awaited<ReturnType<typeof github.securityAdvisories.createPrivateVulnerabilityReport>>;

const input: SecurityAdvisoriesCreatePrivateVulnerabilityReportInput = {} as { summary: string; description: string; vulnerabilities?: ({ package: { ecosystem: "rubygems" | "npm" | "pip" | "maven" | "nuget" | "composer" | "go" | "rust" | "erlang" | "actions" | "pub" | "other" | "swift"; name?: string | null }; vulnerable_version_range?: string | null; patched_versions?: string | null; vulnerable_functions?: (string)[] | null })[] | null; cwe_ids?: (string)[] | null; severity?: "critical" | "high" | "medium" | "low" | null; cvss_vector_string?: string | null; start_private_fork?: boolean; owner: string; repo: string };
const result: SecurityAdvisoriesCreatePrivateVulnerabilityReportOutput = await github.securityAdvisories.createPrivateVulnerabilityReport(input);

// Result shape (from schema): { ghsa_id: string; cve_id: string | null; url: string; html_url: string; summary: string; description: string | null; severity: "critical" | "high" | "medium" | "low" | null; author: { name?: string | null; email?: stri...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
