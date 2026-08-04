# B2B Rbac

3 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiB2BRbacV1B2BRbacOrganizationsGetOrgPolicy`

Getorgpolicy — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BRbacV1B2BRbacOrganizationsGetOrgPolicy(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
}): Promise<ApiB2BRbacV1B2BRbacOrganizationsGetOrgPolicyResponse>
```

<sub>`GET /v1/b2b/rbac/organizations/{organization_id}` · `api_b2b_rbac_v1_b2b_rbac_organizations_GetOrgPolicy`</sub>

## `stytch.apiB2BRbacV1B2BRbacOrganizationsSetOrgPolicy`

Setorgpolicy — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BRbacV1B2BRbacOrganizationsSetOrgPolicy(input: {
  /** The organization-specific RBAC Policy that contains roles defined for this organization. Organization policies supplement the project-level RBAC policy with additional roles that are specific to the organization. */
  org_policy: ApiB2BRbacV1OrgPolicy;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
}): Promise<ApiB2BRbacV1B2BRbacOrganizationsSetOrgPolicyResponse>
```

<sub>`PUT /v1/b2b/rbac/organizations/{organization_id}` · `api_b2b_rbac_v1_b2b_rbac_organizations_SetOrgPolicy`</sub>

## `stytch.apiB2BRbacV1Policy`

Policy — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BRbacV1Policy(): Promise<ApiB2BRbacV1PolicyResponse>
```

<sub>`GET /v1/b2b/rbac/policy` · `api_b2b_rbac_v1_Policy`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
