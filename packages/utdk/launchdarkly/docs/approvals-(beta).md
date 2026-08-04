# Approvals (Beta)

4 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.patchApprovalRequest`

Update approval request — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchApprovalRequest(input: {
  /** Optional comment describing the update */
  comment?: string;
  /** The instructions to perform when updating */
  instructions: Instructions;
  /** The approval ID */
  id: string;
}): Promise<FlagConfigApprovalRequestResponse>
```

<sub>`PATCH /api/v2/approval-requests/{id}` · `patchApprovalRequest`</sub>

## `launchdarkly.getApprovalRequestSettings`

Get approval request settings — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getApprovalRequestSettings(input: {
  projectKey: string;
  /** An environment key filter to apply to the approval request settings. */
  environmentKey?: string;
  /** A resource kind filter to apply to the approval request settings. */
  resourceKind?: string;
  /** A comma-separated list of fields to expand in the response. Options include 'default' and 'strict'. */
  expand?: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<ApprovalRequestSettings>
```

<sub>`GET /api/v2/approval-requests/projects/{projectKey}/settings` · `getApprovalRequestSettings`</sub>

## `launchdarkly.patchApprovalRequestSettings`

Update approval request settings — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchApprovalRequestSettings(input: {
  /** Automatically apply changes that have been approved by all reviewers. This field is only applicable for approval services other than LaunchDarkly.  */
  autoApplyApprovedChanges?: boolean | null;
  /** Whether to skip approvals for pending changes */
  bypassApprovalsForPendingChanges?: boolean;
  /** Allow applying the change as long as at least one person has approved */
  canApplyDeclinedChanges?: boolean;
  /** Allow someone who makes an approval request to apply their own change */
  canReviewOwnRequest?: boolean;
  environmentKey: string;
  /** Sets the amount of approvals required before a member can apply a change. The minimum is one and the maximum is five.  */
  minNumApprovals?: number;
  /** If approvals are required for this environment */
  required?: boolean;
  /** Require approval only on flags with the provided tags. Otherwise all flags will require approval.  */
  requiredApprovalTags?: (string)[];
  resourceKind: string;
  /** Arbitrary service-specific configuration */
  serviceConfig?: { [key: string]: unknown };
  /** Which service to use for managing approvals */
  serviceKind?: string;
  /** Optional integration configuration ID of a custom approval integration. This is an Enterprise-only feature.  */
  serviceKindConfigurationId?: string | null;
  projectKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<ApprovalRequestSettings>
```

<sub>`PATCH /api/v2/approval-requests/projects/{projectKey}/settings` · `patchApprovalRequestSettings`</sub>

## `launchdarkly.patchFlagConfigApprovalRequest`

Update flag approval request — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchFlagConfigApprovalRequest(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** The approval ID */
  id: string;
}): Promise<FlagConfigApprovalRequestResponse>
```

<sub>`PATCH /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}` · `patchFlagConfigApprovalRequest`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
