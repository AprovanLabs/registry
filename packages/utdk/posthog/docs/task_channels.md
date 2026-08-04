# Task Channels

15 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.taskChannelsList`

List channels

```ts
posthog.taskChannelsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; channel_type: string; github_integration: number | null; repositories: (string)[]; created_at: string; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknow...>
```

<sub>`GET /api/projects/{project_id}/task_channels/` · `task_channels_list`</sub>

## `posthog.taskChannelsCreate`

Resolve or create a public channel

```ts
posthog.taskChannelsCreate(): Promise<{ id: string; name: string; channel_type: string; github_integration: number | null; repositories: (string)[]; created_at: string; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknown } | null; role_at_organization?: string | null } | null; starred?: boolea...>
```

<sub>`POST /api/projects/{project_id}/task_channels/` · `task_channels_create`</sub>

## `posthog.taskChannelsFeedList`

List channel feed messages

```ts
posthog.taskChannelsFeedList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; channel: string; author?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknown } | null; role_at_organization?: string | null } | null; author_kind: string; event: string; payload: ...>
```

<sub>`GET /api/projects/{project_id}/task_channels/{channel_id}/feed/` · `task_channels_feed_list`</sub>

## `posthog.taskChannelsFeedCreate`

Post a channel feed message

```ts
posthog.taskChannelsFeedCreate(): Promise<{ id: string; channel: string; author?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknown } | null; role_at_organization?: string | null } | null; author_kind: string; event: string; payload: { [key: string]: unknown }; content: string; created_at: string }>
```

<sub>`POST /api/projects/{project_id}/task_channels/{channel_id}/feed/` · `task_channels_feed_create`</sub>

## `posthog.taskChannelsDestroy`

Delete a public channel

```ts
posthog.taskChannelsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/task_channels/{id}/` · `task_channels_destroy`</sub>

## `posthog.taskChannelsRetrieve`

Get a channel

```ts
posthog.taskChannelsRetrieve(): Promise<{ id: string; name: string; channel_type: string; github_integration: number | null; repositories: (string)[]; created_at: string; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknown } | null; role_at_organization?: string | null } | null; starred?: boolea...>
```

<sub>`GET /api/projects/{project_id}/task_channels/{id}/` · `task_channels_retrieve`</sub>

## `posthog.taskChannelsPartialUpdate`

Rename a public channel

```ts
posthog.taskChannelsPartialUpdate(): Promise<{ id: string; name: string; channel_type: string; github_integration: number | null; repositories: (string)[]; created_at: string; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknown } | null; role_at_organization?: string | null } | null; starred?: boolea...>
```

<sub>`PATCH /api/projects/{project_id}/task_channels/{id}/` · `task_channels_partial_update`</sub>

## `posthog.taskChannelsContextGenerationRetrieve`

Get the channel's CONTEXT.md generation task

```ts
posthog.taskChannelsContextGenerationRetrieve(): Promise<{ task_id: string | null }>
```

<sub>`GET /api/projects/{project_id}/task_channels/{id}/context_generation/` · `task_channels_context_generation_retrieve`</sub>

## `posthog.taskChannelsContextGenerationUpdate`

Set or clear the channel's CONTEXT.md generation task

```ts
posthog.taskChannelsContextGenerationUpdate(): Promise<{ task_id: string | null }>
```

<sub>`PUT /api/projects/{project_id}/task_channels/{id}/context_generation/` · `task_channels_context_generation_update`</sub>

## `posthog.taskChannelsInstructionsDestroy`

Delete channel instructions

```ts
posthog.taskChannelsInstructionsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/task_channels/{id}/instructions/` · `task_channels_instructions_destroy`</sub>

## `posthog.taskChannelsInstructionsRetrieve`

Get channel instructions

```ts
posthog.taskChannelsInstructionsRetrieve(): Promise<{ channel: string; content: string; version: number; created_at?: string | null; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknown } | null; role_at_organization?: string | null } | null }>
```

<sub>`GET /api/projects/{project_id}/task_channels/{id}/instructions/` · `task_channels_instructions_retrieve`</sub>

## `posthog.taskChannelsInstructionsPartialUpdate`

Publish channel instructions

```ts
posthog.taskChannelsInstructionsPartialUpdate(): Promise<{ channel: string; content: string; version: number; created_at?: string | null; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknown } | null; role_at_organization?: string | null } | null }>
```

<sub>`PATCH /api/projects/{project_id}/task_channels/{id}/instructions/` · `task_channels_instructions_partial_update`</sub>

## `posthog.taskChannelsInstructionsUpdate`

Publish channel instructions

```ts
posthog.taskChannelsInstructionsUpdate(): Promise<{ channel: string; content: string; version: number; created_at?: string | null; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknown } | null; role_at_organization?: string | null } | null }>
```

<sub>`PUT /api/projects/{project_id}/task_channels/{id}/instructions/` · `task_channels_instructions_update`</sub>

## `posthog.taskChannelsInstructionsVersionsRetrieve`

List channel instruction versions

```ts
posthog.taskChannelsInstructionsVersionsRetrieve(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ channel: string; content: string; version: number; created_at?: string | null; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknown } | null; role_at_organization?: string | null }...>
```

<sub>`GET /api/projects/{project_id}/task_channels/{id}/instructions/versions/` · `task_channels_instructions_versions_retrieve`</sub>

## `posthog.taskChannelsStarCreate`

Star or unstar a channel for the requesting user

```ts
posthog.taskChannelsStarCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/task_channels/{id}/star/` · `task_channels_star_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
