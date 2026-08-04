# Lobbies

15 operations · `@utdk/discord`

```ts
import discord from "@utdk/discord";
```

## `discord.createLobby`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createLobby(input: {
  idle_timeout_seconds?: number | null;
  members?: unknown[] | null;
  metadata?: { [key: string]: unknown } | null;
  flags?: null | 1;
  override_event_webhooks_url?: string | null;
}): Promise<LobbyResponse>
```

<sub>`POST /lobbies` · `create_lobby`</sub>

## `discord.createOrJoinLobby`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createOrJoinLobby(input: {
  idle_timeout_seconds?: number | null;
  lobby_metadata?: { [key: string]: unknown } | null;
  member_metadata?: { [key: string]: unknown } | null;
  secret: string;
  flags?: null | 1;
}): Promise<LobbyResponse>
```

<sub>`PUT /lobbies` · `create_or_join_lobby`</sub>

## `discord.deleteLobby`

Deletes the specified lobby if it exists. It is safe to call even if the lobby is already deleted. — [Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteLobby(input: {
  lobby_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /lobbies/{lobby_id}` · `delete_lobby`</sub>

## `discord.getLobby`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getLobby(input: {
  lobby_id: SnowflakeType;
}): Promise<LobbyResponse>
```

<sub>`GET /lobbies/{lobby_id}` · `get_lobby`</sub>

## `discord.editLobby`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.editLobby(input: {
  idle_timeout_seconds?: number | null;
  metadata?: { [key: string]: unknown } | null;
  members?: unknown[] | null;
  flags?: null | 1;
  override_event_webhooks_url?: string | null;
  lobby_id: SnowflakeType;
}): Promise<LobbyResponse>
```

<sub>`PATCH /lobbies/{lobby_id}` · `edit_lobby`</sub>

## `discord.editLobbyChannelLink`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.editLobbyChannelLink(input: {
  channel_id?: null | SnowflakeType;
  lobby_id: SnowflakeType;
}): Promise<LobbyResponse>
```

<sub>`PATCH /lobbies/{lobby_id}/channel-linking` · `edit_lobby_channel_link`</sub>

## `discord.deleteLobbyMember`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteLobbyMember(input: {
  lobby_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /lobbies/{lobby_id}/members/{user_id}` · `delete_lobby_member`</sub>

## `discord.addLobbyMember`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.addLobbyMember(input: {
  metadata?: { [key: string]: unknown } | null;
  flags?: null | 1;
  additional_name?: string | null;
  lobby_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<LobbyMemberResponse>
```

<sub>`PUT /lobbies/{lobby_id}/members/{user_id}` · `add_lobby_member`</sub>

## `discord.createLinkedLobbyGuildInviteForUser`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createLinkedLobbyGuildInviteForUser(input: {
  lobby_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<LobbyGuildInviteResponse>
```

<sub>`POST /lobbies/{lobby_id}/members/{user_id}/invites` · `create_linked_lobby_guild_invite_for_user`</sub>

## `discord.leaveLobby`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.leaveLobby(input: {
  lobby_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /lobbies/{lobby_id}/members/@me` · `leave_lobby`</sub>

## `discord.createLinkedLobbyGuildInviteForSelf`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createLinkedLobbyGuildInviteForSelf(input: {
  lobby_id: SnowflakeType;
}): Promise<LobbyGuildInviteResponse>
```

<sub>`POST /lobbies/{lobby_id}/members/@me/invites` · `create_linked_lobby_guild_invite_for_self`</sub>

## `discord.bulkUpdateLobbyMembers`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.bulkUpdateLobbyMembers(input: {
  body: unknown[] | null;
  lobby_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`POST /lobbies/{lobby_id}/members/bulk` · `bulk_update_lobby_members`</sub>

## `discord.getLobbyMessages`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getLobbyMessages(input: {
  lobby_id: SnowflakeType;
  limit?: number;
}): Promise<unknown[] | null>
```

<sub>`GET /lobbies/{lobby_id}/messages` · `get_lobby_messages`</sub>

## `discord.createLobbyMessage`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createLobbyMessage(input: {
  content?: string | null;
  embeds?: unknown[] | null;
  allowed_mentions?: null | MessageAllowedMentionsRequest;
  sticker_ids?: unknown[] | null;
  components?: unknown[] | null;
  flags?: number | null;
  attachments?: unknown[] | null;
  poll?: null | PollCreateRequest;
  shared_client_theme?: null | CustomClientThemeShareRequest;
  message_reference?: null | MessageReferenceRequest;
  nonce?: number | string | null;
  enforce_nonce?: boolean | null;
  tts?: boolean | null;
  lobby_id: SnowflakeType;
}): Promise<LobbyMessageResponse>
```

<sub>`POST /lobbies/{lobby_id}/messages` · `create_lobby_message`</sub>

## `discord.updateLobbyMessageExternalModerationMetadata`

Update the external moderation metadata for a lobby message. — [Provider docs](https://discord.com/developers/docs)

```ts
discord.updateLobbyMessageExternalModerationMetadata(input: {
  /** The moderation metadata attached to the message */
  body: { [key: string]: string | undefined };
  lobby_id: SnowflakeType;
  message_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`PUT /lobbies/{lobby_id}/messages/{message_id}/moderation-metadata` · `update_lobby_message_external_moderation_metadata`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
