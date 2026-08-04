# Webhooks

15 operations · `@utdk/discord`

```ts
import discord from "@utdk/discord";
```

## `discord.deleteWebhook`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteWebhook(input: {
  webhook_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /webhooks/{webhook_id}` · `delete_webhook`</sub>

## `discord.getWebhook`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getWebhook(input: {
  webhook_id: SnowflakeType;
}): Promise<ApplicationIncomingWebhookResponse | ChannelFollowerWebhookResponse | GuildIncomingWebhookResponse>
```

<sub>`GET /webhooks/{webhook_id}` · `get_webhook`</sub>

## `discord.updateWebhook`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateWebhook(input: {
  name?: string;
  avatar?: string | null;
  channel_id?: null | SnowflakeType;
  webhook_id: SnowflakeType;
}): Promise<ApplicationIncomingWebhookResponse | ChannelFollowerWebhookResponse | GuildIncomingWebhookResponse>
```

<sub>`PATCH /webhooks/{webhook_id}` · `update_webhook`</sub>

## `discord.deleteWebhookByToken`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteWebhookByToken(input: {
  webhook_id: SnowflakeType;
  webhook_token: string;
}): Promise<undefined>
```

<sub>`DELETE /webhooks/{webhook_id}/{webhook_token}` · `delete_webhook_by_token`</sub>

## `discord.getWebhookByToken`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getWebhookByToken(input: {
  webhook_id: SnowflakeType;
  webhook_token: string;
}): Promise<ApplicationIncomingWebhookResponse | ChannelFollowerWebhookResponse | GuildIncomingWebhookResponse>
```

<sub>`GET /webhooks/{webhook_id}/{webhook_token}` · `get_webhook_by_token`</sub>

## `discord.updateWebhookByToken`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateWebhookByToken(input: {
  name?: string;
  avatar?: string | null;
  webhook_id: SnowflakeType;
  webhook_token: string;
}): Promise<ApplicationIncomingWebhookResponse | ChannelFollowerWebhookResponse | GuildIncomingWebhookResponse>
```

<sub>`PATCH /webhooks/{webhook_id}/{webhook_token}` · `update_webhook_by_token`</sub>

## `discord.executeWebhook`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.executeWebhook(input: {
  body: IncomingWebhookRequestPartial | IncomingWebhookUpdateRequestPartial;
  webhook_id: SnowflakeType;
  webhook_token: string;
  wait?: boolean;
  thread_id?: SnowflakeType;
  with_components?: boolean;
}): Promise<MessageResponse>
```

<sub>`POST /webhooks/{webhook_id}/{webhook_token}` · `execute_webhook`</sub>

## `discord.executeGithubCompatibleWebhook`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.executeGithubCompatibleWebhook(input: {
  action?: string | null;
  ref?: string | null;
  ref_type?: string | null;
  comment?: null | GithubComment;
  issue?: null | GithubIssue;
  pull_request?: null | GithubIssue;
  repository?: null | GithubRepository;
  forkee?: null | GithubRepository;
  sender: GithubUser;
  member?: null | GithubUser;
  release?: null | GithubRelease;
  head_commit?: null | GithubCommit;
  commits?: unknown[] | null;
  forced?: boolean | null;
  compare?: string | null;
  review?: null | GithubReview;
  check_run?: null | GithubCheckRun;
  check_suite?: null | GithubCheckSuite;
  discussion?: null | GithubDiscussion;
  answer?: null | GithubComment;
  webhook_id: SnowflakeType;
  webhook_token: string;
  wait?: boolean;
  thread_id?: SnowflakeType;
}): Promise<undefined>
```

<sub>`POST /webhooks/{webhook_id}/{webhook_token}/github` · `execute_github_compatible_webhook`</sub>

## `discord.deleteWebhookMessage`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteWebhookMessage(input: {
  webhook_id: SnowflakeType;
  webhook_token: string;
  message_id: SnowflakeType;
  thread_id?: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}` · `delete_webhook_message`</sub>

## `discord.getWebhookMessage`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getWebhookMessage(input: {
  webhook_id: SnowflakeType;
  webhook_token: string;
  message_id: SnowflakeType;
  thread_id?: SnowflakeType;
}): Promise<MessageResponse>
```

<sub>`GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}` · `get_webhook_message`</sub>

## `discord.updateWebhookMessage`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateWebhookMessage(input: {
  content?: string | null;
  embeds?: unknown[] | null;
  allowed_mentions?: null | MessageAllowedMentionsRequest;
  components?: unknown[] | null;
  attachments?: unknown[] | null;
  poll?: null | PollCreateRequest;
  flags?: number | null;
  webhook_id: SnowflakeType;
  webhook_token: string;
  message_id: SnowflakeType;
  thread_id?: SnowflakeType;
  with_components?: boolean;
}): Promise<MessageResponse>
```

<sub>`PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}` · `update_webhook_message`</sub>

## `discord.deleteOriginalWebhookMessage`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteOriginalWebhookMessage(input: {
  webhook_id: SnowflakeType;
  webhook_token: string;
  thread_id?: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /webhooks/{webhook_id}/{webhook_token}/messages/@original` · `delete_original_webhook_message`</sub>

## `discord.getOriginalWebhookMessage`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getOriginalWebhookMessage(input: {
  webhook_id: SnowflakeType;
  webhook_token: string;
  thread_id?: SnowflakeType;
}): Promise<MessageResponse>
```

<sub>`GET /webhooks/{webhook_id}/{webhook_token}/messages/@original` · `get_original_webhook_message`</sub>

## `discord.updateOriginalWebhookMessage`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateOriginalWebhookMessage(input: {
  content?: string | null;
  embeds?: unknown[] | null;
  allowed_mentions?: null | MessageAllowedMentionsRequest;
  components?: unknown[] | null;
  attachments?: unknown[] | null;
  poll?: null | PollCreateRequest;
  flags?: number | null;
  webhook_id: SnowflakeType;
  webhook_token: string;
  thread_id?: SnowflakeType;
  with_components?: boolean;
}): Promise<MessageResponse>
```

<sub>`PATCH /webhooks/{webhook_id}/{webhook_token}/messages/@original` · `update_original_webhook_message`</sub>

## `discord.executeSlackCompatibleWebhook`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.executeSlackCompatibleWebhook(input: {
  text?: string | null;
  username?: string | null;
  icon_url?: string | null;
  attachments?: unknown[] | null;
  webhook_id: SnowflakeType;
  webhook_token: string;
  wait?: boolean;
  thread_id?: SnowflakeType;
}): Promise<string | null>
```

<sub>`POST /webhooks/{webhook_id}/{webhook_token}/slack` · `execute_slack_compatible_webhook`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
