# Invites

5 operations · `@utdk/discord`

```ts
import discord from "@utdk/discord";
```

## `discord.inviteRevoke`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.inviteRevoke(input: {
  code: string;
}): Promise<FriendInviteResponse | GroupDmInviteResponse | GuildInviteResponse>
```

<sub>`DELETE /invites/{code}` · `invite_revoke`</sub>

## `discord.inviteResolve`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.inviteResolve(input: {
  code: string;
  with_counts?: boolean;
  guild_scheduled_event_id?: SnowflakeType;
  target_channel_id?: SnowflakeType;
  target_message_id?: SnowflakeType;
}): Promise<FriendInviteResponse | GroupDmInviteResponse | GuildInviteResponse>
```

<sub>`GET /invites/{code}` · `invite_resolve`</sub>

## `discord.getInviteTargetUsers`

Get the target users for an invite. — [Provider docs](https://discord.com/developers/docs)

```ts
discord.getInviteTargetUsers(input: {
  code: string;
}): Promise<string>
```

<sub>`GET /invites/{code}/target-users` · `get_invite_target_users`</sub>

## `discord.updateInviteTargetUsers`

Update the target users for an existing invite. — [Provider docs](https://discord.com/developers/docs)

```ts
discord.updateInviteTargetUsers(input: {
  target_users_file: string;
  code: string;
}): Promise<undefined>
```

<sub>`PUT /invites/{code}/target-users` · `update_invite_target_users`</sub>

## `discord.getInviteTargetUsersJobStatus`

Get the target users job status for an invite. — [Provider docs](https://discord.com/developers/docs)

```ts
discord.getInviteTargetUsersJobStatus(input: {
  code: string;
}): Promise<TargetUsersJobStatusResponse>
```

<sub>`GET /invites/{code}/target-users/job-status` · `get_invite_target_users_job_status`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
