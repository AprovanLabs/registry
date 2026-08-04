# Approvals

13 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getApprovalRequests`

List approval requests — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getApprovalRequests(input: {
  /** A comma-separated list of filters. Each filter is of the form `field operator value`. Supported fields are explained above. */
  filter?: string;
  /** A comma-separated list of fields to expand in the response. Supported fields are explained above. */
  expand?: string;
  /** The number of approvals to return. Defaults to 20. Maximum limit is 200. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<ExpandableApprovalRequestsResponse>
```

<sub>`GET /api/v2/approval-requests` · `getApprovalRequests`</sub>

## `launchdarkly.postApprovalRequest`

Create approval request — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postApprovalRequest(input: {
  /** String representation of the resource specifier */
  resourceId: string;
  /** Optional comment describing the approval request */
  comment?: string;
  /** A brief description of the changes you're requesting */
  description: string;
  /** List of instructions in semantic patch format to be applied to the feature flag. Review the [Update feature flag](https://launchdarkly.com/docs/ld-docs/api/feature-flags/patch-feature-flag) documentation for details on available instructions. */
  instructions: Instructions;
  /** An array of member IDs. These members are notified to review the approval request. */
  notifyMemberIds?: (string)[];
  /** An array of team keys. The members of these teams are notified to review the approval request. */
  notifyTeamKeys?: (string)[];
  /** Additional approval request fields for third-party integration approval systems. If you are using a third-party integration to manage approval requests, these additional fields will be described in the <code>manifest.json</code> for that integration, at https://github.com/launchdarkly/integration-framework. */
  integrationConfig?: FormVariableConfig;
}): Promise<ApprovalRequestResponse>
```

<sub>`POST /api/v2/approval-requests` · `postApprovalRequest`</sub>

## `launchdarkly.deleteApprovalRequest`

Delete approval request — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteApprovalRequest(input: {
  /** The approval request ID */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/approval-requests/{id}` · `deleteApprovalRequest`</sub>

## `launchdarkly.getApprovalRequest`

Get approval request — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getApprovalRequest(input: {
  /** The approval request ID */
  id: string;
  /** A comma-separated list of fields to expand in the response. Supported fields are explained above. */
  expand?: string;
}): Promise<ExpandableApprovalRequestResponse>
```

<sub>`GET /api/v2/approval-requests/{id}` · `getApprovalRequest`</sub>

## `launchdarkly.postApprovalRequestApply`

Apply approval request — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postApprovalRequestApply(input: {
  /** Optional comment about the approval request */
  comment?: string;
  /** The approval request ID */
  id: string;
}): Promise<ApprovalRequestResponse>
```

<sub>`POST /api/v2/approval-requests/{id}/apply` · `postApprovalRequestApply`</sub>

## `launchdarkly.postApprovalRequestReview`

Review approval request — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postApprovalRequestReview(input: {
  /** The type of review for this approval request */
  kind?: "approve" | "comment" | "decline";
  /** Optional comment about the approval request */
  comment?: string;
  /** The approval request ID */
  id: string;
}): Promise<ApprovalRequestResponse>
```

<sub>`POST /api/v2/approval-requests/{id}/reviews` · `postApprovalRequestReview`</sub>

## `launchdarkly.getApprovalsForFlag`

List approval requests for a flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getApprovalsForFlag(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<FlagConfigApprovalRequestsResponse>
```

<sub>`GET /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests` · `getApprovalsForFlag`</sub>

## `launchdarkly.postApprovalRequestForFlag`

Create approval request for a flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postApprovalRequestForFlag(input: {
  /** Optional comment describing the approval request */
  comment?: string;
  /** A brief description of the changes you're requesting */
  description: string;
  /** List of instructions in semantic patch format to be applied to the feature flag. Review the [Update feature flag](https://launchdarkly.com/docs/ld-docs/api/feature-flags/patch-feature-flag) documentation for details on available instructions. */
  instructions: Instructions;
  /** An array of member IDs. These members are notified to review the approval request. */
  notifyMemberIds?: (string)[];
  /** An array of team keys. The members of these teams are notified to review the approval request. */
  notifyTeamKeys?: (string)[];
  /** Timestamp for when instructions will be executed */
  executionDate?: UnixMillis;
  /** The ID of a scheduled change. Include this if your <code>instructions</code> include editing or deleting a scheduled change. */
  operatingOnId?: string;
  /** Additional approval request fields for third-party integration approval systems. If you are using a third-party integration to manage approval requests, these additional fields will be described in the <code>manifest.json</code> for that integration, at https://github.com/launchdarkly/integration-framework. */
  integrationConfig?: FormVariableConfig;
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<FlagConfigApprovalRequestResponse>
```

<sub>`POST /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests` · `postApprovalRequestForFlag`</sub>

## `launchdarkly.postFlagCopyConfigApprovalRequest`

Create approval request to copy flag configurations across environments — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postFlagCopyConfigApprovalRequest(input: {
  /** Optional comment describing the approval request */
  comment?: string;
  /** A brief description of your changes */
  description: string;
  /** An array of member IDs. These members are notified to review the approval request. */
  notifyMemberIds?: (string)[];
  /** An array of team keys. The members of these teams are notified to review the approval request. */
  notifyTeamKeys?: (string)[];
  /** The flag to copy */
  source: SourceFlag;
  /** Optional list of the flag changes to copy from the source environment to the target environment. You may include either <code>includedActions</code> or <code>excludedActions</code>, but not both. If neither are included, then all flag changes will be copied. */
  includedActions?: ("updateOn" | "updateFallthrough" | "updateOffVariation" | "updateRules" | "updateTargets" | "updatePrerequisites")[];
  /** Optional list of the flag changes NOT to copy from the source environment to the target environment. You may include either <code>includedActions</code> or <code>excludedActions</code>, but not both. If neither are included, then all flag changes will be copied. */
  excludedActions?: ("updateOn" | "updateFallthrough" | "updateOffVariation" | "updateRules" | "updateTargets" | "updatePrerequisites")[];
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key for the target environment */
  environmentKey: string;
}): Promise<FlagConfigApprovalRequestResponse>
```

<sub>`POST /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests-flag-copy` · `postFlagCopyConfigApprovalRequest`</sub>

## `launchdarkly.deleteApprovalRequestForFlag`

Delete approval request for a flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteApprovalRequestForFlag(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** The feature flag approval request ID */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}` · `deleteApprovalRequestForFlag`</sub>

## `launchdarkly.getApprovalForFlag`

Get approval request for a flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getApprovalForFlag(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** The feature flag approval request ID */
  id: string;
}): Promise<FlagConfigApprovalRequestResponse>
```

<sub>`GET /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}` · `getApprovalForFlag`</sub>

## `launchdarkly.postApprovalRequestApplyForFlag`

Apply approval request for a flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postApprovalRequestApplyForFlag(input: {
  /** Optional comment about the approval request */
  comment?: string;
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** The feature flag approval request ID */
  id: string;
}): Promise<FlagConfigApprovalRequestResponse>
```

<sub>`POST /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/apply` · `postApprovalRequestApplyForFlag`</sub>

## `launchdarkly.postApprovalRequestReviewForFlag`

Review approval request for a flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postApprovalRequestReviewForFlag(input: {
  /** The type of review for this approval request */
  kind?: "approve" | "comment" | "decline";
  /** Optional comment about the approval request */
  comment?: string;
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** The feature flag approval request ID */
  id: string;
}): Promise<FlagConfigApprovalRequestResponse>
```

<sub>`POST /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/reviews` · `postApprovalRequestReviewForFlag`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
