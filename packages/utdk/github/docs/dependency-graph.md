# Dependency Graph

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.dependencyGraph.diffRange`

- **HTTP**: `GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`
- **What it does**: Get a diff of the dependencies between commits
- **OpenAPI operationId**: `dependency-graph/diff-range`
- **Path params**: `basehead`
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `500`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; basehead: string; name?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ change_type: "added" | "removed"; manifest: string; ecosystem: string; name: string; version: string; package_url: string | null; license: string | null; source_repository_url: string | null; vulnerabilities: ({ seve...`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `500`, `503`

```ts
import github from "@utdk/github";

type DependencyGraphDiffRangeInput = Parameters<typeof github.dependencyGraph.diffRange> extends [infer T, ...unknown[]] ? T : undefined;
type DependencyGraphDiffRangeOutput = Awaited<ReturnType<typeof github.dependencyGraph.diffRange>>;

const input: DependencyGraphDiffRangeInput = {} as { owner: string; repo: string; basehead: string; name?: string };
const result: DependencyGraphDiffRangeOutput = await github.dependencyGraph.diffRange(input);

// Result shape (from schema): ({ change_type: "added" | "removed"; manifest: string; ecosystem: string; name: string; version: string; package_url: string | null; license: string | null; source_repository_url: string | null; vulnerabilities: ({ seve...
```

### `github.dependencyGraph.exportSbom`

- **HTTP**: `GET /repos/{owner}/{repo}/dependency-graph/sbom`
- **What it does**: Export a software bill of materials (SBOM) for a repository.
- **OpenAPI operationId**: `dependency-graph/export-sbom`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ sbom: { SPDXID: string; spdxVersion: string; comment?: string; creationInfo: { created: string; creators: (string)[] }; name: string; dataLicense: string; documentNamespace: string; packages: ({ SPDXID?: string; name?...`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type DependencyGraphExportSbomInput = Parameters<typeof github.dependencyGraph.exportSbom> extends [infer T, ...unknown[]] ? T : undefined;
type DependencyGraphExportSbomOutput = Awaited<ReturnType<typeof github.dependencyGraph.exportSbom>>;

const input: DependencyGraphExportSbomInput = {} as { owner: string; repo: string };
const result: DependencyGraphExportSbomOutput = await github.dependencyGraph.exportSbom(input);

// Result shape (from schema): { sbom: { SPDXID: string; spdxVersion: string; comment?: string; creationInfo: { created: string; creators: (string)[] }; name: string; dataLicense: string; documentNamespace: string; packages: ({ SPDXID?: string; name?...
```

### `github.dependencyGraph.fetchSbomReport`

- **HTTP**: `GET /repos/{owner}/{repo}/dependency-graph/sbom/fetch-report/{sbom_uuid}`
- **What it does**: Fetch a software bill of materials (SBOM) for a repository.
- **OpenAPI operationId**: `dependency-graph/fetch-sbom-report`
- **Path params**: `sbom_uuid`
- **Query params**: None
- **Response codes**: `202`, `302`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; sbom_uuid: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `302`, `403`, `404`

```ts
import github from "@utdk/github";

type DependencyGraphFetchSbomReportInput = Parameters<typeof github.dependencyGraph.fetchSbomReport> extends [infer T, ...unknown[]] ? T : undefined;
type DependencyGraphFetchSbomReportOutput = Awaited<ReturnType<typeof github.dependencyGraph.fetchSbomReport>>;

const input: DependencyGraphFetchSbomReportInput = {} as { owner: string; repo: string; sbom_uuid: string };
const result: DependencyGraphFetchSbomReportOutput = await github.dependencyGraph.fetchSbomReport(input);

// Result shape (from schema): unknown
```

### `github.dependencyGraph.generateSbomReport`

- **HTTP**: `GET /repos/{owner}/{repo}/dependency-graph/sbom/generate-report`
- **What it does**: Request generation of a software bill of materials (SBOM) for a repository.
- **OpenAPI operationId**: `dependency-graph/generate-sbom-report`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ sbom_url?: string }`
- OpenAPI response codes: `201`, `403`, `404`

```ts
import github from "@utdk/github";

type DependencyGraphGenerateSbomReportInput = Parameters<typeof github.dependencyGraph.generateSbomReport> extends [infer T, ...unknown[]] ? T : undefined;
type DependencyGraphGenerateSbomReportOutput = Awaited<ReturnType<typeof github.dependencyGraph.generateSbomReport>>;

const input: DependencyGraphGenerateSbomReportInput = {} as { owner: string; repo: string };
const result: DependencyGraphGenerateSbomReportOutput = await github.dependencyGraph.generateSbomReport(input);

// Result shape (from schema): { sbom_url?: string }
```

### `github.dependencyGraph.createRepositorySnapshot`

- **HTTP**: `POST /repos/{owner}/{repo}/dependency-graph/snapshots`
- **What it does**: Create a snapshot of dependencies for a repository
- **OpenAPI operationId**: `dependency-graph/create-repository-snapshot`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ version: number; job: { id: string; correlator: string; html_url?: string }; sha: string; ref: string; detector: { name: string; version: string; url: string }; metadata?: { [key: string]: string | number | boolean | null | undefined }; manifests?: { [key: string]: { name: string; file?: { source_location?: string }; metadata?: { [key: string]: string | number | boolean | null | undefined }; resolved?: { [key: string]: { package_url?: string; metadata?: { [key: string]: string | number | boolean | null | undefined }; relationship?: "direct" | "indirect"; scope?: "runtime" | "development"; dependencies?: (string)[] } | undefined } } | undefined }; scanned: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; created_at: string; result: string; message: string }`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type DependencyGraphCreateRepositorySnapshotInput = Parameters<typeof github.dependencyGraph.createRepositorySnapshot> extends [infer T, ...unknown[]] ? T : undefined;
type DependencyGraphCreateRepositorySnapshotOutput = Awaited<ReturnType<typeof github.dependencyGraph.createRepositorySnapshot>>;

const input: DependencyGraphCreateRepositorySnapshotInput = {} as { version: number; job: { id: string; correlator: string; html_url?: string }; sha: string; ref: string; detector: { name: string; version: string; url: string }; metadata?: { [key: string]: string | number | boolean | null | undefined }; manifests?: { [key: string]: { name: string; file?: { source_location?: string }; metadata?: { [key: string]: string | number | boolean | null | undefined }; resolved?: { [key: string]: { package_url?: string; metadata?: { [key: string]: string | number | boolean | null | undefined }; relationship?: "direct" | "indirect"; scope?: "runtime" | "development"; dependencies?: (string)[] } | undefined } } | undefined }; scanned: string; owner: string; repo: string };
const result: DependencyGraphCreateRepositorySnapshotOutput = await github.dependencyGraph.createRepositorySnapshot(input);

// Result shape (from schema): { id: number; created_at: string; result: string; message: string }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
