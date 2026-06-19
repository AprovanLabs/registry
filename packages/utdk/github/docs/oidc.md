# Oidc

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.oidc.listOidcCustomPropertyInclusionsForEnterprise`

- **HTTP**: `GET /enterprises/{enterprise}/actions/oidc/customization/properties/repo`
- **What it does**: List OIDC custom property inclusions for an enterprise
- **OpenAPI operationId**: `oidc/list-oidc-custom-property-inclusions-for-enterprise`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ custom_property_name: string; inclusion_source: "organization" | "enterprise" })[]`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type OidcListOidcCustomPropertyInclusionsForEnterpriseInput = Parameters<typeof github.oidc.listOidcCustomPropertyInclusionsForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type OidcListOidcCustomPropertyInclusionsForEnterpriseOutput = Awaited<ReturnType<typeof github.oidc.listOidcCustomPropertyInclusionsForEnterprise>>;

const input: OidcListOidcCustomPropertyInclusionsForEnterpriseInput = {} as { enterprise: string };
const result: OidcListOidcCustomPropertyInclusionsForEnterpriseOutput = await github.oidc.listOidcCustomPropertyInclusionsForEnterprise(input);

// Result shape (from schema): ({ custom_property_name: string; inclusion_source: "organization" | "enterprise" })[]
```

### `github.oidc.createOidcCustomPropertyInclusionForEnterprise`

- **HTTP**: `POST /enterprises/{enterprise}/actions/oidc/customization/properties/repo`
- **What it does**: Create an OIDC custom property inclusion for an enterprise
- **OpenAPI operationId**: `oidc/create-oidc-custom-property-inclusion-for-enterprise`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `400`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ custom_property_name: string; enterprise: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ custom_property_name: string; inclusion_source: "organization" | "enterprise" }`
- OpenAPI response codes: `201`, `400`, `403`, `422`

```ts
import github from "@utdk/github";

type OidcCreateOidcCustomPropertyInclusionForEnterpriseInput = Parameters<typeof github.oidc.createOidcCustomPropertyInclusionForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type OidcCreateOidcCustomPropertyInclusionForEnterpriseOutput = Awaited<ReturnType<typeof github.oidc.createOidcCustomPropertyInclusionForEnterprise>>;

const input: OidcCreateOidcCustomPropertyInclusionForEnterpriseInput = {} as { custom_property_name: string; enterprise: string };
const result: OidcCreateOidcCustomPropertyInclusionForEnterpriseOutput = await github.oidc.createOidcCustomPropertyInclusionForEnterprise(input);

// Result shape (from schema): { custom_property_name: string; inclusion_source: "organization" | "enterprise" }
```

### `github.oidc.deleteOidcCustomPropertyInclusionForEnterprise`

- **HTTP**: `DELETE /enterprises/{enterprise}/actions/oidc/customization/properties/repo/{custom_property_name}`
- **What it does**: Delete an OIDC custom property inclusion for an enterprise
- **OpenAPI operationId**: `oidc/delete-oidc-custom-property-inclusion-for-enterprise`
- **Path params**: `custom_property_name`
- **Query params**: None
- **Response codes**: `204`, `400`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ enterprise: string; custom_property_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`, `403`, `404`

```ts
import github from "@utdk/github";

type OidcDeleteOidcCustomPropertyInclusionForEnterpriseInput = Parameters<typeof github.oidc.deleteOidcCustomPropertyInclusionForEnterprise> extends [infer T, ...unknown[]] ? T : undefined;
type OidcDeleteOidcCustomPropertyInclusionForEnterpriseOutput = Awaited<ReturnType<typeof github.oidc.deleteOidcCustomPropertyInclusionForEnterprise>>;

const input: OidcDeleteOidcCustomPropertyInclusionForEnterpriseInput = {} as { enterprise: string; custom_property_name: string };
const result: OidcDeleteOidcCustomPropertyInclusionForEnterpriseOutput = await github.oidc.deleteOidcCustomPropertyInclusionForEnterprise(input);

// Result shape (from schema): unknown
```

### `github.oidc.listOidcCustomPropertyInclusionsForOrg`

- **HTTP**: `GET /orgs/{org}/actions/oidc/customization/properties/repo`
- **What it does**: List OIDC custom property inclusions for an organization
- **OpenAPI operationId**: `oidc/list-oidc-custom-property-inclusions-for-org`
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

- Client return type: `({ custom_property_name: string; inclusion_source: "organization" | "enterprise" })[]`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type OidcListOidcCustomPropertyInclusionsForOrgInput = Parameters<typeof github.oidc.listOidcCustomPropertyInclusionsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type OidcListOidcCustomPropertyInclusionsForOrgOutput = Awaited<ReturnType<typeof github.oidc.listOidcCustomPropertyInclusionsForOrg>>;

const input: OidcListOidcCustomPropertyInclusionsForOrgInput = {} as { org: string };
const result: OidcListOidcCustomPropertyInclusionsForOrgOutput = await github.oidc.listOidcCustomPropertyInclusionsForOrg(input);

// Result shape (from schema): ({ custom_property_name: string; inclusion_source: "organization" | "enterprise" })[]
```

### `github.oidc.createOidcCustomPropertyInclusionForOrg`

- **HTTP**: `POST /orgs/{org}/actions/oidc/customization/properties/repo`
- **What it does**: Create an OIDC custom property inclusion for an organization
- **OpenAPI operationId**: `oidc/create-oidc-custom-property-inclusion-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `400`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ custom_property_name: string; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ custom_property_name: string; inclusion_source: "organization" | "enterprise" }`
- OpenAPI response codes: `201`, `400`, `403`, `422`

```ts
import github from "@utdk/github";

type OidcCreateOidcCustomPropertyInclusionForOrgInput = Parameters<typeof github.oidc.createOidcCustomPropertyInclusionForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type OidcCreateOidcCustomPropertyInclusionForOrgOutput = Awaited<ReturnType<typeof github.oidc.createOidcCustomPropertyInclusionForOrg>>;

const input: OidcCreateOidcCustomPropertyInclusionForOrgInput = {} as { custom_property_name: string; org: string };
const result: OidcCreateOidcCustomPropertyInclusionForOrgOutput = await github.oidc.createOidcCustomPropertyInclusionForOrg(input);

// Result shape (from schema): { custom_property_name: string; inclusion_source: "organization" | "enterprise" }
```

### `github.oidc.deleteOidcCustomPropertyInclusionForOrg`

- **HTTP**: `DELETE /orgs/{org}/actions/oidc/customization/properties/repo/{custom_property_name}`
- **What it does**: Delete an OIDC custom property inclusion for an organization
- **OpenAPI operationId**: `oidc/delete-oidc-custom-property-inclusion-for-org`
- **Path params**: `custom_property_name`
- **Query params**: None
- **Response codes**: `204`, `400`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; custom_property_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`, `403`, `404`

```ts
import github from "@utdk/github";

type OidcDeleteOidcCustomPropertyInclusionForOrgInput = Parameters<typeof github.oidc.deleteOidcCustomPropertyInclusionForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type OidcDeleteOidcCustomPropertyInclusionForOrgOutput = Awaited<ReturnType<typeof github.oidc.deleteOidcCustomPropertyInclusionForOrg>>;

const input: OidcDeleteOidcCustomPropertyInclusionForOrgInput = {} as { org: string; custom_property_name: string };
const result: OidcDeleteOidcCustomPropertyInclusionForOrgOutput = await github.oidc.deleteOidcCustomPropertyInclusionForOrg(input);

// Result shape (from schema): unknown
```

### `github.oidc.getOidcCustomSubTemplateForOrg`

- **HTTP**: `GET /orgs/{org}/actions/oidc/customization/sub`
- **What it does**: Get the customization template for an OIDC subject claim for an organization
- **OpenAPI operationId**: `oidc/get-oidc-custom-sub-template-for-org`
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

- Client return type: `{ include_claim_keys: (string)[]; use_immutable_subject?: boolean }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type OidcGetOidcCustomSubTemplateForOrgInput = Parameters<typeof github.oidc.getOidcCustomSubTemplateForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type OidcGetOidcCustomSubTemplateForOrgOutput = Awaited<ReturnType<typeof github.oidc.getOidcCustomSubTemplateForOrg>>;

const input: OidcGetOidcCustomSubTemplateForOrgInput = {} as { org: string };
const result: OidcGetOidcCustomSubTemplateForOrgOutput = await github.oidc.getOidcCustomSubTemplateForOrg(input);

// Result shape (from schema): { include_claim_keys: (string)[]; use_immutable_subject?: boolean }
```

### `github.oidc.updateOidcCustomSubTemplateForOrg`

- **HTTP**: `PUT /orgs/{org}/actions/oidc/customization/sub`
- **What it does**: Set the customization template for an OIDC subject claim for an organization
- **OpenAPI operationId**: `oidc/update-oidc-custom-sub-template-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ include_claim_keys?: (string)[]; use_immutable_subject?: boolean; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `201`, `403`, `404`

```ts
import github from "@utdk/github";

type OidcUpdateOidcCustomSubTemplateForOrgInput = Parameters<typeof github.oidc.updateOidcCustomSubTemplateForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type OidcUpdateOidcCustomSubTemplateForOrgOutput = Awaited<ReturnType<typeof github.oidc.updateOidcCustomSubTemplateForOrg>>;

const input: OidcUpdateOidcCustomSubTemplateForOrgInput = {} as { include_claim_keys?: (string)[]; use_immutable_subject?: boolean; org: string };
const result: OidcUpdateOidcCustomSubTemplateForOrgOutput = await github.oidc.updateOidcCustomSubTemplateForOrg(input);

// Result shape (from schema): { [key: string]: unknown }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
