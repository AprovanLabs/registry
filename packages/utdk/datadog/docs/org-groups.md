# Org Groups

21 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listOrgGroupMemberships`

List org group memberships — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOrgGroupMemberships(input: {
  /** Filter memberships by org group ID. Required when `filter[org_uuid]` is not provided. */
  "filter[org_group_id]"?: string;
  /** Filter memberships by org UUID. Returns a single-item list. */
  "filter[org_uuid]"?: string;
  /** The page number to return. */
  "page[number]"?: number;
  /** The number of items per page. Maximum is 1000. */
  "page[size]"?: number;
  sort?: OrgGroupMembershipSortOption;
}): Promise<OrgGroupMembershipListResponse>
```

<sub>`GET /api/v2/org_group_memberships` · `ListOrgGroupMemberships`</sub>

## `datadog.getOrgGroupMembership`

Get an org group membership — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOrgGroupMembership(input: {
  /** The ID of the org group membership. */
  org_group_membership_id: string;
}): Promise<OrgGroupMembershipResponse>
```

<sub>`GET /api/v2/org_group_memberships/{org_group_membership_id}` · `GetOrgGroupMembership`</sub>

## `datadog.updateOrgGroupMembership`

Update an org group membership — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOrgGroupMembership(input: {
  data: OrgGroupMembershipUpdateData;
  /** The ID of the org group membership. */
  org_group_membership_id: string;
}): Promise<OrgGroupMembershipResponse>
```

<sub>`PATCH /api/v2/org_group_memberships/{org_group_membership_id}` · `UpdateOrgGroupMembership`</sub>

## `datadog.bulkUpdateOrgGroupMemberships`

Bulk update org group memberships — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.bulkUpdateOrgGroupMemberships(input: {
  data: OrgGroupMembershipBulkUpdateData;
}): Promise<OrgGroupMembershipListResponse>
```

<sub>`PATCH /api/v2/org_group_memberships/bulk` · `BulkUpdateOrgGroupMemberships`</sub>

## `datadog.listOrgGroupPolicies`

List org group policies — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOrgGroupPolicies(input: {
  /** Filter policies by org group ID. */
  "filter[org_group_id]": string;
  /** Filter policies by policy name. */
  "filter[policy_name]"?: string;
  /** The page number to return. */
  "page[number]"?: number;
  /** The number of items per page. Maximum is 1000. */
  "page[size]"?: number;
  sort?: OrgGroupPolicySortOption;
}): Promise<OrgGroupPolicyListResponse>
```

<sub>`GET /api/v2/org_group_policies` · `ListOrgGroupPolicies`</sub>

## `datadog.createOrgGroupPolicy`

Create an org group policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOrgGroupPolicy(input: {
  data: OrgGroupPolicyCreateData;
}): Promise<OrgGroupPolicyResponse>
```

<sub>`POST /api/v2/org_group_policies` · `CreateOrgGroupPolicy`</sub>

## `datadog.deleteOrgGroupPolicy`

Delete an org group policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteOrgGroupPolicy(input: {
  /** The ID of the org group policy. */
  org_group_policy_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/org_group_policies/{org_group_policy_id}` · `DeleteOrgGroupPolicy`</sub>

## `datadog.getOrgGroupPolicy`

Get an org group policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOrgGroupPolicy(input: {
  /** The ID of the org group policy. */
  org_group_policy_id: string;
}): Promise<OrgGroupPolicyResponse>
```

<sub>`GET /api/v2/org_group_policies/{org_group_policy_id}` · `GetOrgGroupPolicy`</sub>

## `datadog.updateOrgGroupPolicy`

Update an org group policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOrgGroupPolicy(input: {
  data: OrgGroupPolicyUpdateData;
  /** The ID of the org group policy. */
  org_group_policy_id: string;
}): Promise<OrgGroupPolicyResponse>
```

<sub>`PATCH /api/v2/org_group_policies/{org_group_policy_id}` · `UpdateOrgGroupPolicy`</sub>

## `datadog.listOrgGroupPolicyConfigs`

List org group policy configs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOrgGroupPolicyConfigs(): Promise<OrgGroupPolicyConfigListResponse>
```

<sub>`GET /api/v2/org_group_policy_configs` · `ListOrgGroupPolicyConfigs`</sub>

## `datadog.listOrgGroupPolicyOverrides`

List org group policy overrides — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOrgGroupPolicyOverrides(input: {
  /** Filter policy overrides by org group ID. */
  "filter[org_group_id]": string;
  /** Filter policy overrides by policy ID. */
  "filter[policy_id]"?: string;
  /** The page number to return. */
  "page[number]"?: number;
  /** The number of items per page. Maximum is 1000. */
  "page[size]"?: number;
  sort?: OrgGroupPolicyOverrideSortOption;
}): Promise<OrgGroupPolicyOverrideListResponse>
```

<sub>`GET /api/v2/org_group_policy_overrides` · `ListOrgGroupPolicyOverrides`</sub>

## `datadog.createOrgGroupPolicyOverride`

Create an org group policy override — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOrgGroupPolicyOverride(input: {
  data: OrgGroupPolicyOverrideCreateData;
}): Promise<OrgGroupPolicyOverrideResponse>
```

<sub>`POST /api/v2/org_group_policy_overrides` · `CreateOrgGroupPolicyOverride`</sub>

## `datadog.deleteOrgGroupPolicyOverride`

Delete an org group policy override — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteOrgGroupPolicyOverride(input: {
  /** The ID of the org group policy override. */
  org_group_policy_override_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/org_group_policy_overrides/{org_group_policy_override_id}` · `DeleteOrgGroupPolicyOverride`</sub>

## `datadog.getOrgGroupPolicyOverride`

Get an org group policy override — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOrgGroupPolicyOverride(input: {
  /** The ID of the org group policy override. */
  org_group_policy_override_id: string;
}): Promise<OrgGroupPolicyOverrideResponse>
```

<sub>`GET /api/v2/org_group_policy_overrides/{org_group_policy_override_id}` · `GetOrgGroupPolicyOverride`</sub>

## `datadog.updateOrgGroupPolicyOverride`

Update an org group policy override — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOrgGroupPolicyOverride(input: {
  data: OrgGroupPolicyOverrideUpdateData;
  /** The ID of the org group policy override. */
  org_group_policy_override_id: string;
}): Promise<OrgGroupPolicyOverrideResponse>
```

<sub>`PATCH /api/v2/org_group_policy_overrides/{org_group_policy_override_id}` · `UpdateOrgGroupPolicyOverride`</sub>

## `datadog.listOrgGroupPolicySuggestions`

List org group policy suggestions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOrgGroupPolicySuggestions(input: {
  /** Filter policies by org group ID. */
  "filter[org_group_id]": string;
}): Promise<OrgGroupPolicySuggestionListResponse>
```

<sub>`GET /api/v2/org_group_policy_suggestions` · `ListOrgGroupPolicySuggestions`</sub>

## `datadog.listOrgGroups`

List org groups — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOrgGroups(input: {
  /** The page number to return. */
  "page[number]"?: number;
  /** The number of items per page. Maximum is 1000. */
  "page[size]"?: number;
  sort?: OrgGroupSortOption;
}): Promise<OrgGroupListResponse>
```

<sub>`GET /api/v2/org_groups` · `ListOrgGroups`</sub>

## `datadog.createOrgGroup`

Create an org group — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOrgGroup(input: {
  data: OrgGroupCreateData;
}): Promise<OrgGroupResponse>
```

<sub>`POST /api/v2/org_groups` · `CreateOrgGroup`</sub>

## `datadog.deleteOrgGroup`

Delete an org group — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteOrgGroup(input: {
  /** The ID of the org group. */
  org_group_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/org_groups/{org_group_id}` · `DeleteOrgGroup`</sub>

## `datadog.getOrgGroup`

Get an org group — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOrgGroup(input: {
  /** The ID of the org group. */
  org_group_id: string;
}): Promise<OrgGroupResponse>
```

<sub>`GET /api/v2/org_groups/{org_group_id}` · `GetOrgGroup`</sub>

## `datadog.updateOrgGroup`

Update an org group — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOrgGroup(input: {
  data: OrgGroupUpdateData;
  /** The ID of the org group. */
  org_group_id: string;
}): Promise<OrgGroupResponse>
```

<sub>`PATCH /api/v2/org_groups/{org_group_id}` · `UpdateOrgGroup`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
