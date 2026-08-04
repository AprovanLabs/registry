# CSM Ownership

9 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listOwnershipInferences`

List ownership inferences for a resource — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOwnershipInferences(input: {
  /** The identifier of the resource to retrieve ownership inferences for. */
  resource_id: string;
}): Promise<OwnershipInferenceListResponse>
```

<sub>`GET /api/v2/csm/ownership/{resource_id}` · `ListOwnershipInferences`</sub>

## `datadog.getOwnershipInference`

Get an ownership inference by owner type — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOwnershipInference(input: {
  /** The identifier of the resource to retrieve the ownership inference for. */
  resource_id: string;
  owner_type: OwnershipOwnerType;
}, options?: { headers?: { "If-None-Match"?: string } }): Promise<OwnershipInferenceResponse>
```

<sub>`GET /api/v2/csm/ownership/{resource_id}/{owner_type}` · `GetOwnershipInference`</sub>

## `datadog.getOwnershipEvidence`

Get the evidence for an ownership inference — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOwnershipEvidence(input: {
  /** The identifier of the resource to retrieve evidence for. */
  resource_id: string;
  owner_type: OwnershipOwnerType;
}, options?: { headers?: { "If-None-Match"?: string } }): Promise<OwnershipEvidenceResponse>
```

<sub>`GET /api/v2/csm/ownership/{resource_id}/{owner_type}/evidence` · `GetOwnershipEvidence`</sub>

## `datadog.createOwnershipFeedback`

Submit feedback on an ownership inference — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOwnershipFeedback(input: {
  data: OwnershipFeedbackRequestData;
  /** The identifier of the resource that the feedback applies to. */
  resource_id: string;
  owner_type: OwnershipOwnerType;
}): Promise<OwnershipFeedbackResponse>
```

<sub>`POST /api/v2/csm/ownership/{resource_id}/{owner_type}/feedback` · `CreateOwnershipFeedback`</sub>

## `datadog.listOwnershipHistoryByOwnerType`

List ownership history by owner type — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOwnershipHistoryByOwnerType(input: {
  /** The identifier of the resource to retrieve inference history for. */
  resource_id: string;
  owner_type: OwnershipOwnerType;
  /** An opaque, base64-encoded cursor token returned by a previous call in `pagination.next_cursor`. Omit to fetch the first page. */
  cursor?: string;
  /** The maximum number of history entries to return per page. */
  limit?: number;
}): Promise<OwnershipHistoryResponse>
```

<sub>`GET /api/v2/csm/ownership/{resource_id}/{owner_type}/history` · `ListOwnershipHistoryByOwnerType`</sub>

## `datadog.listOwnershipHistory`

List ownership inference history for a resource — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOwnershipHistory(input: {
  /** The identifier of the resource to retrieve inference history for. */
  resource_id: string;
  /** An opaque, base64-encoded cursor token returned by a previous call in `pagination.next_cursor`. Omit to fetch the first page. */
  cursor?: string;
  /** The maximum number of history entries to return per page. */
  limit?: number;
}): Promise<OwnershipHistoryResponse>
```

<sub>`GET /api/v2/csm/ownership/{resource_id}/history` · `ListOwnershipHistory`</sub>

## `datadog.getOwnershipSettings`

Get ownership settings for the org — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOwnershipSettings(): Promise<OwnershipSettingsResponse>
```

<sub>`GET /api/v2/csm/ownership/settings` · `GetOwnershipSettings`</sub>

## `datadog.postOwnershipSettings`

Update ownership settings for the org — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.postOwnershipSettings(input: {
  data: OwnershipSettingsRequestData;
}): Promise<OwnershipSettingsResponse>
```

<sub>`POST /api/v2/csm/ownership/settings` · `PostOwnershipSettings`</sub>

## `datadog.getOwnershipUntaggedFindings`

Count untagged findings by ownership confidence — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOwnershipUntaggedFindings(): Promise<OwnershipUntaggedFindingsResponse>
```

<sub>`GET /api/v2/csm/ownership/settings/untagged` · `GetOwnershipUntaggedFindings`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
