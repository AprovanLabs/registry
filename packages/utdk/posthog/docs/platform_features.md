# Platform Features

11 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.approvalPoliciesList`

```ts
posthog.approvalPoliciesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; action_key: string; conditions?: unknown; approver_config: unknown; allow_self_approve?: boolean; bypass_org_membership_levels?: unknown; bypass_roles?: (string)[]; expires_after?: string; enabled?: boolean; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: ...>
```

<sub>`GET /api/projects/{project_id}/approval_policies/` · `approval_policies_list`</sub>

## `posthog.approvalPoliciesCreate`

```ts
posthog.approvalPoliciesCreate(): Promise<{ id: string; action_key: string; conditions?: unknown; approver_config: unknown; allow_self_approve?: boolean; bypass_org_membership_levels?: unknown; bypass_roles?: (string)[]; expires_after?: string; enabled?: boolean; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config:...>
```

<sub>`POST /api/projects/{project_id}/approval_policies/` · `approval_policies_create`</sub>

## `posthog.approvalPoliciesDestroy`

```ts
posthog.approvalPoliciesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/approval_policies/{id}/` · `approval_policies_destroy`</sub>

## `posthog.approvalPoliciesRetrieve`

```ts
posthog.approvalPoliciesRetrieve(): Promise<{ id: string; action_key: string; conditions?: unknown; approver_config: unknown; allow_self_approve?: boolean; bypass_org_membership_levels?: unknown; bypass_roles?: (string)[]; expires_after?: string; enabled?: boolean; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config:...>
```

<sub>`GET /api/projects/{project_id}/approval_policies/{id}/` · `approval_policies_retrieve`</sub>

## `posthog.approvalPoliciesPartialUpdate`

```ts
posthog.approvalPoliciesPartialUpdate(): Promise<{ id: string; action_key: string; conditions?: unknown; approver_config: unknown; allow_self_approve?: boolean; bypass_org_membership_levels?: unknown; bypass_roles?: (string)[]; expires_after?: string; enabled?: boolean; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config:...>
```

<sub>`PATCH /api/projects/{project_id}/approval_policies/{id}/` · `approval_policies_partial_update`</sub>

## `posthog.approvalPoliciesUpdate`

```ts
posthog.approvalPoliciesUpdate(): Promise<{ id: string; action_key: string; conditions?: unknown; approver_config: unknown; allow_self_approve?: boolean; bypass_org_membership_levels?: unknown; bypass_roles?: (string)[]; expires_after?: string; enabled?: boolean; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config:...>
```

<sub>`PUT /api/projects/{project_id}/approval_policies/{id}/` · `approval_policies_update`</sub>

## `posthog.changeRequestsList`

```ts
posthog.changeRequestsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; action_key: string; action_version: number; resource_type: string; resource_id: string | null; intent: unknown; intent_display: unknown; policy_snapshot: unknown; validation_status: "valid" | "invalid" | "stale"; validation_errors: unknown; validated_at: string | null; state: "pending" | "approved" | "applied...>
```

<sub>`GET /api/projects/{project_id}/change_requests/` · `change_requests_list`</sub>

## `posthog.changeRequestsRetrieve`

```ts
posthog.changeRequestsRetrieve(): Promise<{ id: string; action_key: string; action_version: number; resource_type: string; resource_id: string | null; intent: unknown; intent_display: unknown; policy_snapshot: unknown; validation_status: "valid" | "invalid" | "stale"; validation_errors: unknown; validated_at: string | null; state: "pending" | "approved" | "applied" | "rejected" | "expired" | "failed"; created_by: { id: number; uuid: stri...>
```

<sub>`GET /api/projects/{project_id}/change_requests/{id}/` · `change_requests_retrieve`</sub>

## `posthog.changeRequestsApproveCreate`

Approve a change request. If quorum is reached, automatically applies the change immediately.

```ts
posthog.changeRequestsApproveCreate(): Promise<{ status: string; message: string; change_request: { id: string; action_key: string; action_version: number; resource_type: string; resource_id: string | null; intent: unknown; intent_display: unknown; policy_snapshot: unknown; validation_status: "valid" | "invalid" | "stale"; validation_errors: unknown; validated_at: string | null; state: "pending" | "approved" | "applied" | "rejected" | "expire...>
```

<sub>`POST /api/projects/{project_id}/change_requests/{id}/approve/` · `change_requests_approve_create`</sub>

## `posthog.changeRequestsCancelCreate`

Cancel a change request. Only the requester can cancel their own pending change request.

```ts
posthog.changeRequestsCancelCreate(): Promise<{ id: string; action_key: string; action_version: number; resource_type: string; resource_id: string | null; intent: unknown; intent_display: unknown; policy_snapshot: unknown; validation_status: "valid" | "invalid" | "stale"; validation_errors: unknown; validated_at: string | null; state: "pending" | "approved" | "applied" | "rejected" | "expired" | "failed"; created_by: { id: number; uuid: stri...>
```

<sub>`POST /api/projects/{project_id}/change_requests/{id}/cancel/` · `change_requests_cancel_create`</sub>

## `posthog.changeRequestsRejectCreate`

Reject a change request.

```ts
posthog.changeRequestsRejectCreate(): Promise<{ status: string; message: string; change_request: { id: string; action_key: string; action_version: number; resource_type: string; resource_id: string | null; intent: unknown; intent_display: unknown; policy_snapshot: unknown; validation_status: "valid" | "invalid" | "stale"; validation_errors: unknown; validated_at: string | null; state: "pending" | "approved" | "applied" | "rejected" | "expire...>
```

<sub>`POST /api/projects/{project_id}/change_requests/{id}/reject/` · `change_requests_reject_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
