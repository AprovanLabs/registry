# Customer Analytics

19 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.customerAnalyticsExternalAccountsRetrieve`

List external customer analytics accounts

```ts
posthog.customerAnalyticsExternalAccountsRetrieve(input: {
  /** When true, return only accounts with at least one active relationship assignment to a current member of the project's organization. */
  assigned_only?: boolean;
  /** Account UUID from `next_cursor` to continue listing from. Omit for the first page. */
  cursor?: string;
  /** Maximum number of accounts to return. Values below 1 are clamped to 1; values above 100 are clamped to 100. */
  limit?: number;
}): Promise<ExternalAccountListPage>
```

<sub>`GET /api/customer_analytics/external/accounts` · `customer_analytics_external_accounts_retrieve`</sub>

## `posthog.accountNotesList`

```ts
posthog.accountNotesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ short_id: string; title: string | null; created_at: string; last_modified_at: string; account_id: string; account_name: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]:...>
```

<sub>`GET /api/projects/{project_id}/account_notes/` · `account_notes_list`</sub>

## `posthog.accountsCustomPropertyValuesList`

```ts
posthog.accountsCustomPropertyValuesList(): Promise<({ id: string; account_id: string; definition_id: string; value: string | number | boolean; created_at: string; created_by_id: number | null })[]>
```

<sub>`GET /api/projects/{project_id}/accounts/{account_id}/custom_property_values/` · `accounts_custom_property_values_list`</sub>

## `posthog.accountsCustomPropertyValuesCreate`

```ts
posthog.accountsCustomPropertyValuesCreate(): Promise<{ id: string; account_id: string; definition_id: string; value: string | number | boolean; created_at: string; created_by_id: number | null }>
```

<sub>`POST /api/projects/{project_id}/accounts/{account_id}/custom_property_values/` · `accounts_custom_property_values_create`</sub>

## `posthog.accountsNotebooksList`

```ts
posthog.accountsNotebooksList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; short_id: string; title?: string | null; content?: unknown; text_content?: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unkno...>
```

<sub>`GET /api/projects/{project_id}/accounts/{account_id}/notebooks/` · `accounts_notebooks_list`</sub>

## `posthog.accountsNotebooksCreate`

```ts
posthog.accountsNotebooksCreate(): Promise<{ id: string; short_id: string; title?: string | null; content?: unknown; text_content?: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "f...>
```

<sub>`POST /api/projects/{project_id}/accounts/{account_id}/notebooks/` · `accounts_notebooks_create`</sub>

## `posthog.accountsNotebooksDestroy`

```ts
posthog.accountsNotebooksDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/accounts/{account_id}/notebooks/{short_id}/` · `accounts_notebooks_destroy`</sub>

## `posthog.accountsNotebooksRetrieve`

```ts
posthog.accountsNotebooksRetrieve(): Promise<{ id: string; short_id: string; title?: string | null; content?: unknown; text_content?: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "f...>
```

<sub>`GET /api/projects/{project_id}/accounts/{account_id}/notebooks/{short_id}/` · `accounts_notebooks_retrieve`</sub>

## `posthog.accountsRelationshipsList`

```ts
posthog.accountsRelationshipsList(): Promise<({ id: string; definition: { id: string; name: string; description?: string | null; is_single_holder?: boolean }; user: { id: number; email: string } | null; started_at: string; ended_at: string | null })[]>
```

<sub>`GET /api/projects/{project_id}/accounts/{account_id}/relationships/` · `accounts_relationships_list`</sub>

## `posthog.accountsRelationshipsCreate`

```ts
posthog.accountsRelationshipsCreate(): Promise<{ id: string; definition: { id: string; name: string; description?: string | null; is_single_holder?: boolean }; user: { id: number; email: string } | null; started_at: string; ended_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/accounts/{account_id}/relationships/` · `accounts_relationships_create`</sub>

## `posthog.accountsRelationshipsEndCreate`

```ts
posthog.accountsRelationshipsEndCreate(): Promise<{ id: string; definition: { id: string; name: string; description?: string | null; is_single_holder?: boolean }; user: { id: number; email: string } | null; started_at: string; ended_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/accounts/{account_id}/relationships/{id}/end/` · `accounts_relationships_end_create`</sub>

## `posthog.eventStreamsList`

The caller's event stream: a live feed of selected accounts' events posted to a Slack channel of their choice. Per-user — each team member owns at most one stream, and every endpoint is scoped to the caller's own. Delivery runs through a managed CDP destination that is re-provisioned inside the same transaction as every write, so config and delivery can't drift apart.

```ts
posthog.eventStreamsList(): Promise<({ id: string; enabled?: boolean; event_names?: (string)[]; slack_integration?: number | null; slack_channel_id?: string; slack_channel_name?: string; account_ids: (string)[]; created_at: string; created_by: number | null; updated_at: string | null })[]>
```

<sub>`GET /api/projects/{project_id}/event_streams/` · `event_streams_list`</sub>

## `posthog.eventStreamsCreate`

The caller's event stream: a live feed of selected accounts' events posted to a Slack channel of their choice. Per-user — each team member owns at most one stream, and every endpoint is scoped to the caller's own. Delivery runs through a managed CDP destination that is re-provisioned inside the same transaction as every write, so config and delivery can't drift apart.

```ts
posthog.eventStreamsCreate(): Promise<{ id: string; enabled?: boolean; event_names?: (string)[]; slack_integration?: number | null; slack_channel_id?: string; slack_channel_name?: string; account_ids: (string)[]; created_at: string; created_by: number | null; updated_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/event_streams/` · `event_streams_create`</sub>

## `posthog.eventStreamsDestroy`

The caller's event stream: a live feed of selected accounts' events posted to a Slack channel of their choice. Per-user — each team member owns at most one stream, and every endpoint is scoped to the caller's own. Delivery runs through a managed CDP destination that is re-provisioned inside the same transaction as every write, so config and delivery can't drift apart.

```ts
posthog.eventStreamsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/event_streams/{id}/` · `event_streams_destroy`</sub>

## `posthog.eventStreamsPartialUpdate`

The caller's event stream: a live feed of selected accounts' events posted to a Slack channel of their choice. Per-user — each team member owns at most one stream, and every endpoint is scoped to the caller's own. Delivery runs through a managed CDP destination that is re-provisioned inside the same transaction as every write, so config and delivery can't drift apart.

```ts
posthog.eventStreamsPartialUpdate(): Promise<{ id: string; enabled?: boolean; event_names?: (string)[]; slack_integration?: number | null; slack_channel_id?: string; slack_channel_name?: string; account_ids: (string)[]; created_at: string; created_by: number | null; updated_at: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/event_streams/{id}/` · `event_streams_partial_update`</sub>

## `posthog.eventStreamsUpdate`

The caller's event stream: a live feed of selected accounts' events posted to a Slack channel of their choice. Per-user — each team member owns at most one stream, and every endpoint is scoped to the caller's own. Delivery runs through a managed CDP destination that is re-provisioned inside the same transaction as every write, so config and delivery can't drift apart.

```ts
posthog.eventStreamsUpdate(): Promise<{ id: string; enabled?: boolean; event_names?: (string)[]; slack_integration?: number | null; slack_channel_id?: string; slack_channel_name?: string; account_ids: (string)[]; created_at: string; created_by: number | null; updated_at: string | null }>
```

<sub>`PUT /api/projects/{project_id}/event_streams/{id}/` · `event_streams_update`</sub>

## `posthog.eventStreamsAddAccountCreate`

The caller's event stream: a live feed of selected accounts' events posted to a Slack channel of their choice. Per-user — each team member owns at most one stream, and every endpoint is scoped to the caller's own. Delivery runs through a managed CDP destination that is re-provisioned inside the same transaction as every write, so config and delivery can't drift apart.

```ts
posthog.eventStreamsAddAccountCreate(): Promise<{ id: string; enabled?: boolean; event_names?: (string)[]; slack_integration?: number | null; slack_channel_id?: string; slack_channel_name?: string; account_ids: (string)[]; created_at: string; created_by: number | null; updated_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/event_streams/{id}/add_account/` · `event_streams_add_account_create`</sub>

## `posthog.eventStreamsRemoveAccountCreate`

The caller's event stream: a live feed of selected accounts' events posted to a Slack channel of their choice. Per-user — each team member owns at most one stream, and every endpoint is scoped to the caller's own. Delivery runs through a managed CDP destination that is re-provisioned inside the same transaction as every write, so config and delivery can't drift apart.

```ts
posthog.eventStreamsRemoveAccountCreate(): Promise<{ id: string; enabled?: boolean; event_names?: (string)[]; slack_integration?: number | null; slack_channel_id?: string; slack_channel_name?: string; account_ids: (string)[]; created_at: string; created_by: number | null; updated_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/event_streams/{id}/remove_account/` · `event_streams_remove_account_create`</sub>

## `posthog.eventStreamsSendTestMessageCreate`

The caller's event stream: a live feed of selected accounts' events posted to a Slack channel of their choice. Per-user — each team member owns at most one stream, and every endpoint is scoped to the caller's own. Delivery runs through a managed CDP destination that is re-provisioned inside the same transaction as every write, so config and delivery can't drift apart.

```ts
posthog.eventStreamsSendTestMessageCreate(): Promise<{ channel_id: string }>
```

<sub>`POST /api/projects/{project_id}/event_streams/{id}/send_test_message/` · `event_streams_send_test_message_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
