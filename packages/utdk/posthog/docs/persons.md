# Persons

20 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.personsList`

This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.

```ts
posthog.personsList(): Promise<{ next?: string | null; previous?: string | null; count?: number; results?: ({ id: number; name: string; distinct_ids: (string)[]; properties?: unknown; created_at: string; uuid: string; last_seen_at: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/persons/` · `persons_list`</sub>

## `posthog.personsRetrieve`

This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.

```ts
posthog.personsRetrieve(): Promise<{ id: number; name: string; distinct_ids: (string)[]; properties?: unknown; created_at: string; uuid: string; last_seen_at: string | null }>
```

<sub>`GET /api/projects/{project_id}/persons/{id}/` · `persons_retrieve`</sub>

## `posthog.personsPartialUpdate`

This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.

```ts
posthog.personsPartialUpdate(): Promise<{ id: number; name: string; distinct_ids: (string)[]; properties?: unknown; created_at: string; uuid: string; last_seen_at: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/persons/{id}/` · `persons_partial_update`</sub>

## `posthog.personsUpdate`

Only for setting properties on the person. "properties" from the request data will be updated via a "$set" event. This means that only the properties listed will be updated, but other properties won't be removed nor updated. If you would like to remove a property use the `delete_property` endpoint.

```ts
posthog.personsUpdate(): Promise<{ id: number; name: string; distinct_ids: (string)[]; properties?: unknown; created_at: string; uuid: string; last_seen_at: string | null }>
```

<sub>`PUT /api/projects/{project_id}/persons/{id}/` · `persons_update`</sub>

## `posthog.personsActivityRetrieve`

This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.

```ts
posthog.personsActivityRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/persons/{id}/activity/` · `persons_activity_retrieve`</sub>

## `posthog.personsDeletePropertyCreate`

This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.

```ts
posthog.personsDeletePropertyCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/persons/{id}/delete_property/` · `persons_delete_property_create`</sub>

## `posthog.personsEmailsList`

This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.

```ts
posthog.personsEmailsList(): Promise<({ invocation_id: string; action_id: string; function_id: string; function_name: string; parent_run_id: string; kind: string; distinct_id: string; person_id: string; recipient: string; subject: string; status: string; sent_at: string })[]>
```

<sub>`GET /api/projects/{project_id}/persons/{id}/emails/` · `persons_emails_list`</sub>

## `posthog.personsPropertiesTimelineRetrieve`

This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.

```ts
posthog.personsPropertiesTimelineRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/persons/{id}/properties_timeline/` · `persons_properties_timeline_retrieve`</sub>

## `posthog.personsPushNotificationsList`

This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.

```ts
posthog.personsPushNotificationsList(): Promise<({ invocation_id: string; action_id: string; function_id: string; function_name: string; parent_run_id: string; kind: string; distinct_id: string; person_id: string; recipient: string; subject: string; status: string; sent_at: string })[]>
```

<sub>`GET /api/projects/{project_id}/persons/{id}/push_notifications/` · `persons_push_notifications_list`</sub>

## `posthog.personsSplitCreate`

Split distinct_ids off a merged person. Two mutually exclusive modes: - **`distinct_ids_to_split`** (recommended for surgical edits): moves only the listed distinct_ids off this person onto new single-id persons. The original person keeps every other distinct_id and its properties. - **`main_distinct_id`**: keeps only the specified distinct_id on this person; moves every *other* distinct_id off onto its own new person. If omitted, the first distinct_id is kept. The original person always retains its properties. To clear individual properties afterward, use the `delete_property` endpoint. The split runs asynchronously: a 201 response means the task was enqueued. Newly-created split-off persons get a deterministic UUID derived from `(team_id, distinct_id)`, so they can be located client-side without polling. If you need to delete a split-off person after this call, prefer looking it up by that deterministic UUID rather than by distinct_id, since the latter still resolves to the original merged person until the async task completes.

```ts
posthog.personsSplitCreate(): Promise<{ success: boolean }>
```

<sub>`POST /api/projects/{project_id}/persons/{id}/split/` · `persons_split_create`</sub>

## `posthog.personsUpdatePropertyCreate`

This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.

```ts
posthog.personsUpdatePropertyCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/persons/{id}/update_property/` · `persons_update_property_create`</sub>

## `posthog.personsAllActivityRetrieve`

This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.

```ts
posthog.personsAllActivityRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/persons/activity/` · `persons_all_activity_retrieve`</sub>

## `posthog.personsBatchByDistinctIdsCreate`

This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.

```ts
posthog.personsBatchByDistinctIdsCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/persons/batch_by_distinct_ids/` · `persons_batch_by_distinct_ids_create`</sub>

## `posthog.personsBatchByUuidsCreate`

This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.

```ts
posthog.personsBatchByUuidsCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/persons/batch_by_uuids/` · `persons_batch_by_uuids_create`</sub>

## `posthog.personsBulkDeleteCreate`

This endpoint allows you to bulk delete persons, either by the PostHog person IDs or by distinct IDs. You can pass in a maximum of 1000 IDs per call. Only events captured before the request will be deleted.

```ts
posthog.personsBulkDeleteCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/persons/bulk_delete/` · `persons_bulk_delete_create`</sub>

## `posthog.personsCohortsRetrieve`

This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.

```ts
posthog.personsCohortsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/persons/cohorts/` · `persons_cohorts_retrieve`</sub>

## `posthog.personsDeletionStatusList`

List the status of queued event deletions for persons. When you delete a person with `delete_events=true`, an async deletion is queued. Use this endpoint to check whether those deletions are still pending or have been completed.

```ts
posthog.personsDeletionStatusList(): Promise<{ next?: string | null; previous?: string | null; count?: number; results?: ({ person_uuid: string; created_at: string; status: string; delete_verified_at: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/persons/deletion_status/` · `persons_deletion_status_list`</sub>

## `posthog.personsPropertiesAtTimeRetrieve`

Get person properties as they existed at a specific point in time. This endpoint reconstructs person properties by querying ClickHouse events for $set and $set_once operations up to the specified timestamp. Query parameters: - distinct_id: The distinct_id of the person - timestamp: ISO datetime string for the point in time (e.g., "2023-06-15T14:30:00Z") - include_set_once: Whether to handle $set_once operations (default: false)

```ts
posthog.personsPropertiesAtTimeRetrieve(): Promise<{ id: number; name: string; distinct_ids: (string)[]; properties: { [key: string]: string | null | undefined }; created_at: string; uuid: string; last_seen_at: string | null; point_in_time_metadata: { queried_timestamp: string; include_set_once: boolean; distinct_id_used: string | null; person_id_used: string | null; query_mode: string; distinct_ids_queried: (string)[]; distinct_ids_count: number...>
```

<sub>`GET /api/projects/{project_id}/persons/properties_at_time/` · `persons_properties_at_time_retrieve`</sub>

## `posthog.personsResetPersonDistinctIdCreate`

Reset a distinct_id for a deleted person. This allows the distinct_id to be used again.

```ts
posthog.personsResetPersonDistinctIdCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/persons/reset_person_distinct_id/` · `persons_reset_person_distinct_id_create`</sub>

## `posthog.personsValuesRetrieve`

This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.

```ts
posthog.personsValuesRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/persons/values/` · `persons_values_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
