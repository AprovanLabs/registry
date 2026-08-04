# Change Management

6 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.createChangeRequest`

Create a change request — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createChangeRequest(input: {
  data: ChangeRequestCreateData;
}): Promise<ChangeRequestResponse>
```

<sub>`POST /api/v2/change-management/change-request` · `CreateChangeRequest`</sub>

## `datadog.getChangeRequest`

Get a change request — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getChangeRequest(input: {
  /** The identifier of the change request. */
  change_request_id: string;
}): Promise<ChangeRequestResponse>
```

<sub>`GET /api/v2/change-management/change-request/{change_request_id}` · `GetChangeRequest`</sub>

## `datadog.updateChangeRequest`

Update a change request — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateChangeRequest(input: {
  data: ChangeRequestUpdateData;
  included?: ChangeRequestUpdateIncluded;
  /** The identifier of the change request. */
  change_request_id: string;
}): Promise<ChangeRequestResponse>
```

<sub>`PATCH /api/v2/change-management/change-request/{change_request_id}` · `UpdateChangeRequest`</sub>

## `datadog.createChangeRequestBranch`

Create a change request branch — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createChangeRequestBranch(input: {
  data: ChangeRequestBranchCreateData;
  /** The identifier of the change request. */
  change_request_id: string;
}): Promise<ChangeRequestResponse>
```

<sub>`POST /api/v2/change-management/change-request/{change_request_id}/branch` · `CreateChangeRequestBranch`</sub>

## `datadog.deleteChangeRequestDecision`

Delete a change request decision — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteChangeRequestDecision(input: {
  /** The identifier of the change request. */
  change_request_id: string;
  /** The identifier of the change request decision. */
  decision_id: string;
}): Promise<ChangeRequestResponse>
```

<sub>`DELETE /api/v2/change-management/change-request/{change_request_id}/decisions/{decision_id}` · `DeleteChangeRequestDecision`</sub>

## `datadog.updateChangeRequestDecision`

Update a change request decision — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateChangeRequestDecision(input: {
  data: ChangeRequestDecisionUpdateData;
  included?: ChangeRequestUpdateIncluded;
  /** The identifier of the change request. */
  change_request_id: string;
  /** The identifier of the change request decision. */
  decision_id: string;
}): Promise<ChangeRequestResponse>
```

<sub>`PATCH /api/v2/change-management/change-request/{change_request_id}/decisions/{decision_id}` · `UpdateChangeRequestDecision`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
