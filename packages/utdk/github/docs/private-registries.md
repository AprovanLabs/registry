# Private Registries

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.privateRegistries.listOrgPrivateRegistries`

- **HTTP**: `GET /orgs/{org}/private-registries`
- **What it does**: List private registries for an organization
- **OpenAPI operationId**: `private-registries/list-org-private-registries`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; configurations: ({ name: string; registry_type: "maven_repository" | "nuget_feed" | "goproxy_server" | "npm_registry" | "rubygems_server" | "cargo_registry" | "composer_repository" | "docker_regis...`
- OpenAPI response codes: `200`, `400`, `404`

```ts
import github from "@utdk/github";

type PrivateRegistriesListOrgPrivateRegistriesInput = Parameters<typeof github.privateRegistries.listOrgPrivateRegistries> extends [infer T, ...unknown[]] ? T : undefined;
type PrivateRegistriesListOrgPrivateRegistriesOutput = Awaited<ReturnType<typeof github.privateRegistries.listOrgPrivateRegistries>>;

const input: PrivateRegistriesListOrgPrivateRegistriesInput = {} as { org: string; per_page?: number; page?: number };
const result: PrivateRegistriesListOrgPrivateRegistriesOutput = await github.privateRegistries.listOrgPrivateRegistries(input);

// Result shape (from schema): { total_count: number; configurations: ({ name: string; registry_type: "maven_repository" | "nuget_feed" | "goproxy_server" | "npm_registry" | "rubygems_server" | "cargo_registry" | "composer_repository" | "docker_regis...
```

### `github.privateRegistries.createOrgPrivateRegistry`

- **HTTP**: `POST /orgs/{org}/private-registries`
- **What it does**: Create a private registry for an organization
- **OpenAPI operationId**: `private-registries/create-org-private-registry`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ registry_type: "maven_repository" | "nuget_feed" | "goproxy_server" | "npm_registry" | "rubygems_server" | "cargo_registry" | "composer_repository" | "docker_registry" | "git_source" | "helm_registry" | "hex_organization" | "hex_repository" | "pub_repository" | "python_index" | "terraform_registry"; url: string; username?: string | null; replaces_base?: boolean; encrypted_value?: string; key_id?: string; visibility: "all" | "private" | "selected"; selected_repository_ids?: (number)[]; auth_type?: "token" | "username_password" | "oidc_azure" | "oidc_aws" | "oidc_jfrog" | "oidc_cloudsmith" | "oidc_gcp"; tenant_id?: string; client_id?: string; aws_region?: string; account_id?: string; role_name?: string; domain?: string; domain_owner?: string; jfrog_oidc_provider_name?: string; audience?: string; identity_mapping_name?: string; namespace?: string; service_slug?: string; api_host?: string; workload_identity_provider?: string; service_account?: string; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; registry_type: "maven_repository" | "nuget_feed" | "goproxy_server" | "npm_registry" | "rubygems_server" | "cargo_registry" | "composer_repository" | "docker_registry" | "git_source" | "helm_registry" | ...`
- OpenAPI response codes: `201`, `404`, `422`

```ts
import github from "@utdk/github";

type PrivateRegistriesCreateOrgPrivateRegistryInput = Parameters<typeof github.privateRegistries.createOrgPrivateRegistry> extends [infer T, ...unknown[]] ? T : undefined;
type PrivateRegistriesCreateOrgPrivateRegistryOutput = Awaited<ReturnType<typeof github.privateRegistries.createOrgPrivateRegistry>>;

const input: PrivateRegistriesCreateOrgPrivateRegistryInput = {} as { registry_type: "maven_repository" | "nuget_feed" | "goproxy_server" | "npm_registry" | "rubygems_server" | "cargo_registry" | "composer_repository" | "docker_registry" | "git_source" | "helm_registry" | "hex_organization" | "hex_repository" | "pub_repository" | "python_index" | "terraform_registry"; url: string; username?: string | null; replaces_base?: boolean; encrypted_value?: string; key_id?: string; visibility: "all" | "private" | "selected"; selected_repository_ids?: (number)[]; auth_type?: "token" | "username_password" | "oidc_azure" | "oidc_aws" | "oidc_jfrog" | "oidc_cloudsmith" | "oidc_gcp"; tenant_id?: string; client_id?: string; aws_region?: string; account_id?: string; role_name?: string; domain?: string; domain_owner?: string; jfrog_oidc_provider_name?: string; audience?: string; identity_mapping_name?: string; namespace?: string; service_slug?: string; api_host?: string; workload_identity_provider?: string; service_account?: string; org: string };
const result: PrivateRegistriesCreateOrgPrivateRegistryOutput = await github.privateRegistries.createOrgPrivateRegistry(input);

// Result shape (from schema): { name: string; registry_type: "maven_repository" | "nuget_feed" | "goproxy_server" | "npm_registry" | "rubygems_server" | "cargo_registry" | "composer_repository" | "docker_registry" | "git_source" | "helm_registry" | ...
```

### `github.privateRegistries.deleteOrgPrivateRegistry`

- **HTTP**: `DELETE /orgs/{org}/private-registries/{secret_name}`
- **What it does**: Delete a private registry for an organization
- **OpenAPI operationId**: `private-registries/delete-org-private-registry`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `400`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`, `404`

```ts
import github from "@utdk/github";

type PrivateRegistriesDeleteOrgPrivateRegistryInput = Parameters<typeof github.privateRegistries.deleteOrgPrivateRegistry> extends [infer T, ...unknown[]] ? T : undefined;
type PrivateRegistriesDeleteOrgPrivateRegistryOutput = Awaited<ReturnType<typeof github.privateRegistries.deleteOrgPrivateRegistry>>;

const input: PrivateRegistriesDeleteOrgPrivateRegistryInput = {} as { org: string; secret_name: string };
const result: PrivateRegistriesDeleteOrgPrivateRegistryOutput = await github.privateRegistries.deleteOrgPrivateRegistry(input);

// Result shape (from schema): unknown
```

### `github.privateRegistries.getOrgPrivateRegistry`

- **HTTP**: `GET /orgs/{org}/private-registries/{secret_name}`
- **What it does**: Get a private registry for an organization
- **OpenAPI operationId**: `private-registries/get-org-private-registry`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; registry_type: "maven_repository" | "nuget_feed" | "goproxy_server" | "npm_registry" | "rubygems_server" | "cargo_registry" | "composer_repository" | "docker_registry" | "git_source" | "helm_registry" | ...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type PrivateRegistriesGetOrgPrivateRegistryInput = Parameters<typeof github.privateRegistries.getOrgPrivateRegistry> extends [infer T, ...unknown[]] ? T : undefined;
type PrivateRegistriesGetOrgPrivateRegistryOutput = Awaited<ReturnType<typeof github.privateRegistries.getOrgPrivateRegistry>>;

const input: PrivateRegistriesGetOrgPrivateRegistryInput = {} as { org: string; secret_name: string };
const result: PrivateRegistriesGetOrgPrivateRegistryOutput = await github.privateRegistries.getOrgPrivateRegistry(input);

// Result shape (from schema): { name: string; registry_type: "maven_repository" | "nuget_feed" | "goproxy_server" | "npm_registry" | "rubygems_server" | "cargo_registry" | "composer_repository" | "docker_registry" | "git_source" | "helm_registry" | ...
```

### `github.privateRegistries.updateOrgPrivateRegistry`

- **HTTP**: `PATCH /orgs/{org}/private-registries/{secret_name}`
- **What it does**: Update a private registry for an organization
- **OpenAPI operationId**: `private-registries/update-org-private-registry`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ registry_type?: "maven_repository" | "nuget_feed" | "goproxy_server" | "npm_registry" | "rubygems_server" | "cargo_registry" | "composer_repository" | "docker_registry" | "git_source" | "helm_registry" | "hex_organization" | "hex_repository" | "pub_repository" | "python_index" | "terraform_registry"; url?: string; username?: string | null; replaces_base?: boolean; encrypted_value?: string; key_id?: string; visibility?: "all" | "private" | "selected"; selected_repository_ids?: (number)[]; auth_type?: "token" | "username_password" | "oidc_azure" | "oidc_aws" | "oidc_jfrog" | "oidc_cloudsmith" | "oidc_gcp"; tenant_id?: string; client_id?: string; aws_region?: string; account_id?: string; role_name?: string; domain?: string; domain_owner?: string; jfrog_oidc_provider_name?: string; audience?: string; identity_mapping_name?: string; namespace?: string; service_slug?: string; api_host?: string; workload_identity_provider?: string; service_account?: string; org: string; secret_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `422`

```ts
import github from "@utdk/github";

type PrivateRegistriesUpdateOrgPrivateRegistryInput = Parameters<typeof github.privateRegistries.updateOrgPrivateRegistry> extends [infer T, ...unknown[]] ? T : undefined;
type PrivateRegistriesUpdateOrgPrivateRegistryOutput = Awaited<ReturnType<typeof github.privateRegistries.updateOrgPrivateRegistry>>;

const input: PrivateRegistriesUpdateOrgPrivateRegistryInput = {} as { registry_type?: "maven_repository" | "nuget_feed" | "goproxy_server" | "npm_registry" | "rubygems_server" | "cargo_registry" | "composer_repository" | "docker_registry" | "git_source" | "helm_registry" | "hex_organization" | "hex_repository" | "pub_repository" | "python_index" | "terraform_registry"; url?: string; username?: string | null; replaces_base?: boolean; encrypted_value?: string; key_id?: string; visibility?: "all" | "private" | "selected"; selected_repository_ids?: (number)[]; auth_type?: "token" | "username_password" | "oidc_azure" | "oidc_aws" | "oidc_jfrog" | "oidc_cloudsmith" | "oidc_gcp"; tenant_id?: string; client_id?: string; aws_region?: string; account_id?: string; role_name?: string; domain?: string; domain_owner?: string; jfrog_oidc_provider_name?: string; audience?: string; identity_mapping_name?: string; namespace?: string; service_slug?: string; api_host?: string; workload_identity_provider?: string; service_account?: string; org: string; secret_name: string };
const result: PrivateRegistriesUpdateOrgPrivateRegistryOutput = await github.privateRegistries.updateOrgPrivateRegistry(input);

// Result shape (from schema): unknown
```

### `github.privateRegistries.getOrgPublicKey`

- **HTTP**: `GET /orgs/{org}/private-registries/public-key`
- **What it does**: Get private registries public key for an organization
- **OpenAPI operationId**: `private-registries/get-org-public-key`
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

- Client return type: `{ key_id: string; key: string }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type PrivateRegistriesGetOrgPublicKeyInput = Parameters<typeof github.privateRegistries.getOrgPublicKey> extends [infer T, ...unknown[]] ? T : undefined;
type PrivateRegistriesGetOrgPublicKeyOutput = Awaited<ReturnType<typeof github.privateRegistries.getOrgPublicKey>>;

const input: PrivateRegistriesGetOrgPublicKeyInput = {} as { org: string };
const result: PrivateRegistriesGetOrgPublicKeyOutput = await github.privateRegistries.getOrgPublicKey(input);

// Result shape (from schema): { key_id: string; key: string }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
