# Tag Policies

6 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listTagPolicies`

List tag policies — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTagPolicies(input: {
  /** Whether to include policies that are currently disabled. Defaults to `false`. */
  include_disabled?: boolean;
  /** Whether to include policies that have been soft-deleted. Defaults to `false`. */
  include_deleted?: boolean;
  include?: TagPolicyInclude;
  "filter[source]"?: TagPolicySource;
  /** Start of the time window used for compliance score computation, as a Unix timestamp in milliseconds. Defaults to a recent window appropriate for the source. */
  ts_start?: number;
  /** End of the time window used for compliance score computation, as a Unix timestamp in milliseconds. Must be in the past and greater than `ts_start`. */
  ts_end?: number;
}): Promise<TagPoliciesListResponse>
```

<sub>`GET /api/v2/tag_policies` · `ListTagPolicies`</sub>

## `datadog.createTagPolicy`

Create a tag policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createTagPolicy(input: {
  data: TagPolicyCreateData;
}): Promise<TagPolicyResponse>
```

<sub>`POST /api/v2/tag_policies` · `CreateTagPolicy`</sub>

## `datadog.deleteTagPolicy`

Delete a tag policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteTagPolicy(input: {
  /** The unique identifier of the tag policy to delete. */
  policy_id: string;
  /** Whether to permanently delete the policy instead of performing a soft delete. Defaults to `false`. */
  hard_delete?: boolean;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/tag_policies/{policy_id}` · `DeleteTagPolicy`</sub>

## `datadog.getTagPolicy`

Get a tag policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTagPolicy(input: {
  /** The unique identifier of the tag policy. */
  policy_id: string;
  include?: TagPolicyInclude;
  /** Start of the time window used for compliance score computation, as a Unix timestamp in milliseconds. */
  ts_start?: number;
  /** End of the time window used for compliance score computation, as a Unix timestamp in milliseconds. Must be in the past and greater than `ts_start`. */
  ts_end?: number;
}): Promise<TagPolicyResponse>
```

<sub>`GET /api/v2/tag_policies/{policy_id}` · `GetTagPolicy`</sub>

## `datadog.updateTagPolicy`

Update a tag policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateTagPolicy(input: {
  data: TagPolicyUpdateData;
  /** The unique identifier of the tag policy to update. */
  policy_id: string;
}): Promise<TagPolicyResponse>
```

<sub>`PATCH /api/v2/tag_policies/{policy_id}` · `UpdateTagPolicy`</sub>

## `datadog.getTagPolicyScore`

Get a tag policy compliance score — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTagPolicyScore(input: {
  /** The unique identifier of the tag policy. */
  policy_id: string;
  /** Start of the time window used for compliance score computation, as a Unix timestamp in milliseconds. */
  ts_start?: number;
  /** End of the time window used for compliance score computation, as a Unix timestamp in milliseconds. Must be in the past and greater than `ts_start`. */
  ts_end?: number;
}): Promise<TagPolicyScoreResponse>
```

<sub>`GET /api/v2/tag_policies/{policy_id}/score` · `GetTagPolicyScore`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
