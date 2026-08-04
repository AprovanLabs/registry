# Channels

48 operations · `@utdk/discord`

```ts
import discord from "@utdk/discord";
```

## `discord.deleteChannel`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteChannel(input: {
  channel_id: SnowflakeType;
}): Promise<GuildChannelResponse | PrivateChannelResponse | PrivateGroupChannelResponse | ThreadResponse>
```

<sub>`DELETE /channels/{channel_id}` · `delete_channel`</sub>

## `discord.getChannel`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getChannel(input: {
  channel_id: SnowflakeType;
}): Promise<GuildChannelResponse | PrivateChannelResponse | PrivateGroupChannelResponse | ThreadResponse>
```

<sub>`GET /channels/{channel_id}` · `get_channel`</sub>

## `discord.updateChannel`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateChannel(input: {
  body: UpdateDmRequestPartial | UpdateGroupDmRequestPartial | UpdateGuildChannelRequestPartial | UpdateThreadRequestPartial;
  channel_id: SnowflakeType;
}): Promise<GuildChannelResponse | PrivateChannelResponse | PrivateGroupChannelResponse | ThreadResponse>
```

<sub>`PATCH /channels/{channel_id}` · `update_channel`</sub>

## `discord.followChannel`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.followChannel(input: {
  webhook_channel_id: SnowflakeType;
  channel_id: SnowflakeType;
}): Promise<ChannelFollowerResponse>
```

<sub>`POST /channels/{channel_id}/followers` · `follow_channel`</sub>

## `discord.listChannelInvites`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listChannelInvites(input: {
  channel_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`GET /channels/{channel_id}/invites` · `list_channel_invites`</sub>

## `discord.createChannelInvite`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createChannelInvite(input: {
  body: CreateGroupDmInviteRequest | CreateGuildInviteRequest;
  channel_id: SnowflakeType;
}): Promise<FriendInviteResponse | GroupDmInviteResponse | GuildInviteResponse>
```

<sub>`POST /channels/{channel_id}/invites` · `create_channel_invite`</sub>

## `discord.listMessages`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listMessages(input: {
  channel_id: SnowflakeType;
  around?: SnowflakeType;
  before?: SnowflakeType;
  after?: SnowflakeType;
  limit?: number;
}): Promise<unknown[] | null>
```

<sub>`GET /channels/{channel_id}/messages` · `list_messages`</sub>

## `discord.createMessage`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createMessage(input: {
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
  channel_id: SnowflakeType;
}): Promise<MessageResponse>
```

<sub>`POST /channels/{channel_id}/messages` · `create_message`</sub>

## `discord.deleteMessage`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteMessage(input: {
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /channels/{channel_id}/messages/{message_id}` · `delete_message`</sub>

## `discord.getMessage`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getMessage(input: {
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
}): Promise<MessageResponse>
```

<sub>`GET /channels/{channel_id}/messages/{message_id}` · `get_message`</sub>

## `discord.updateMessage`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateMessage(input: {
  content?: string | null;
  embeds?: unknown[] | null;
  flags?: number | null;
  allowed_mentions?: null | MessageAllowedMentionsRequest;
  sticker_ids?: unknown[] | null;
  components?: unknown[] | null;
  attachments?: unknown[] | null;
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
}): Promise<MessageResponse>
```

<sub>`PATCH /channels/{channel_id}/messages/{message_id}` · `update_message`</sub>

## `discord.crosspostMessage`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.crosspostMessage(input: {
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
}): Promise<MessageResponse>
```

<sub>`POST /channels/{channel_id}/messages/{message_id}/crosspost` · `crosspost_message`</sub>

## `discord.deleteAllMessageReactions`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteAllMessageReactions(input: {
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /channels/{channel_id}/messages/{message_id}/reactions` · `delete_all_message_reactions`</sub>

## `discord.deleteAllMessageReactionsByEmoji`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteAllMessageReactionsByEmoji(input: {
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
  emoji_name: string;
}): Promise<undefined>
```

<sub>`DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}` · `delete_all_message_reactions_by_emoji`</sub>

## `discord.listMessageReactionsByEmoji`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listMessageReactionsByEmoji(input: {
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
  emoji_name: string;
  after?: SnowflakeType;
  limit?: number;
  type?: ReactionTypes;
}): Promise<(UserResponse)[]>
```

<sub>`GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}` · `list_message_reactions_by_emoji`</sub>

## `discord.deleteUserMessageReaction`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteUserMessageReaction(input: {
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
  emoji_name: string;
  user_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}` · `delete_user_message_reaction`</sub>

## `discord.deleteMyMessageReaction`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteMyMessageReaction(input: {
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
  emoji_name: string;
}): Promise<undefined>
```

<sub>`DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me` · `delete_my_message_reaction`</sub>

## `discord.addMyMessageReaction`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.addMyMessageReaction(input: {
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
  emoji_name: string;
}): Promise<undefined>
```

<sub>`PUT /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me` · `add_my_message_reaction`</sub>

## `discord.createThreadFromMessage`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createThreadFromMessage(input: {
  name: string;
  auto_archive_duration?: null | ThreadAutoArchiveDuration;
  rate_limit_per_user?: number | null;
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
}): Promise<ThreadResponse>
```

<sub>`POST /channels/{channel_id}/messages/{message_id}/threads` · `create_thread_from_message`</sub>

## `discord.bulkDeleteMessages`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.bulkDeleteMessages(input: {
  messages: (SnowflakeType)[];
  channel_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`POST /channels/{channel_id}/messages/bulk-delete` · `bulk_delete_messages`</sub>

## `discord.listPins`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listPins(input: {
  channel_id: SnowflakeType;
  before?: string;
  limit?: number;
}): Promise<PinnedMessagesResponse>
```

<sub>`GET /channels/{channel_id}/messages/pins` · `list_pins`</sub>

## `discord.deletePin`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deletePin(input: {
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /channels/{channel_id}/messages/pins/{message_id}` · `delete_pin`</sub>

## `discord.createPin`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createPin(input: {
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`PUT /channels/{channel_id}/messages/pins/{message_id}` · `create_pin`</sub>

## `discord.deleteChannelPermissionOverwrite`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteChannelPermissionOverwrite(input: {
  channel_id: SnowflakeType;
  overwrite_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /channels/{channel_id}/permissions/{overwrite_id}` · `delete_channel_permission_overwrite`</sub>

## `discord.setChannelPermissionOverwrite`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.setChannelPermissionOverwrite(input: {
  type?: null | ChannelPermissionOverwrites;
  allow?: number | null;
  deny?: number | null;
  channel_id: SnowflakeType;
  overwrite_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`PUT /channels/{channel_id}/permissions/{overwrite_id}` · `set_channel_permission_overwrite`</sub>

## `discord.deprecatedListPins`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deprecatedListPins(input: {
  channel_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`GET /channels/{channel_id}/pins` · `deprecated_list_pins`</sub>

## `discord.deprecatedDeletePin`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deprecatedDeletePin(input: {
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /channels/{channel_id}/pins/{message_id}` · `deprecated_delete_pin`</sub>

## `discord.deprecatedCreatePin`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deprecatedCreatePin(input: {
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`PUT /channels/{channel_id}/pins/{message_id}` · `deprecated_create_pin`</sub>

## `discord.getAnswerVoters`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getAnswerVoters(input: {
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
  answer_id: number;
  after?: SnowflakeType;
  limit?: number;
}): Promise<PollAnswerDetailsResponse>
```

<sub>`GET /channels/{channel_id}/polls/{message_id}/answers/{answer_id}` · `get_answer_voters`</sub>

## `discord.pollExpire`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.pollExpire(input: {
  channel_id: SnowflakeType;
  message_id: SnowflakeType;
}): Promise<MessageResponse>
```

<sub>`POST /channels/{channel_id}/polls/{message_id}/expire` · `poll_expire`</sub>

## `discord.deleteGroupDmUser`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteGroupDmUser(input: {
  channel_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /channels/{channel_id}/recipients/{user_id}` · `delete_group_dm_user`</sub>

## `discord.addGroupDmUser`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.addGroupDmUser(input: {
  access_token?: string | null;
  nick?: string | null;
  channel_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<PrivateChannelResponse | PrivateGroupChannelResponse>
```

<sub>`PUT /channels/{channel_id}/recipients/{user_id}` · `add_group_dm_user`</sub>

## `discord.sendSoundboardSound`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.sendSoundboardSound(input: {
  sound_id: SnowflakeType;
  source_guild_id?: null | SnowflakeType;
  channel_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`POST /channels/{channel_id}/send-soundboard-sound` · `send_soundboard_sound`</sub>

## `discord.listThreadMembers`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listThreadMembers(input: {
  channel_id: SnowflakeType;
  with_member?: boolean;
  limit?: number;
  after?: SnowflakeType;
}): Promise<(ThreadMemberResponse)[]>
```

<sub>`GET /channels/{channel_id}/thread-members` · `list_thread_members`</sub>

## `discord.deleteThreadMember`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteThreadMember(input: {
  channel_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /channels/{channel_id}/thread-members/{user_id}` · `delete_thread_member`</sub>

## `discord.getThreadMember`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getThreadMember(input: {
  channel_id: SnowflakeType;
  user_id: SnowflakeType;
  with_member?: boolean;
}): Promise<ThreadMemberResponse>
```

<sub>`GET /channels/{channel_id}/thread-members/{user_id}` · `get_thread_member`</sub>

## `discord.addThreadMember`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.addThreadMember(input: {
  channel_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`PUT /channels/{channel_id}/thread-members/{user_id}` · `add_thread_member`</sub>

## `discord.leaveThread`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.leaveThread(input: {
  channel_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /channels/{channel_id}/thread-members/@me` · `leave_thread`</sub>

## `discord.joinThread`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.joinThread(input: {
  channel_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`PUT /channels/{channel_id}/thread-members/@me` · `join_thread`</sub>

## `discord.createThread`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createThread(input: {
  body: CreateForumThreadRequest | CreateTextThreadWithoutMessageRequest;
  channel_id: SnowflakeType;
}): Promise<CreatedThreadResponse>
```

<sub>`POST /channels/{channel_id}/threads` · `create_thread`</sub>

## `discord.listPrivateArchivedThreads`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listPrivateArchivedThreads(input: {
  channel_id: SnowflakeType;
  before?: string;
  limit?: number;
}): Promise<ThreadsResponse>
```

<sub>`GET /channels/{channel_id}/threads/archived/private` · `list_private_archived_threads`</sub>

## `discord.listPublicArchivedThreads`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listPublicArchivedThreads(input: {
  channel_id: SnowflakeType;
  before?: string;
  limit?: number;
}): Promise<ThreadsResponse>
```

<sub>`GET /channels/{channel_id}/threads/archived/public` · `list_public_archived_threads`</sub>

## `discord.threadSearch`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.threadSearch(input: {
  channel_id: SnowflakeType;
  name?: string;
  slop?: number;
  min_id?: SnowflakeType;
  max_id?: SnowflakeType;
  tag?: string | (SnowflakeType)[];
  tag_setting?: ThreadSearchTagSetting;
  archived?: boolean;
  sort_by?: ThreadSortingMode;
  sort_order?: SortingOrder;
  limit?: number;
  offset?: number;
}): Promise<ThreadSearchResponse>
```

<sub>`GET /channels/{channel_id}/threads/search` · `thread_search`</sub>

## `discord.triggerTypingIndicator`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.triggerTypingIndicator(input: {
  channel_id: SnowflakeType;
}): Promise<TypingIndicatorResponse>
```

<sub>`POST /channels/{channel_id}/typing` · `trigger_typing_indicator`</sub>

## `discord.listMyPrivateArchivedThreads`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listMyPrivateArchivedThreads(input: {
  channel_id: SnowflakeType;
  before?: SnowflakeType;
  limit?: number;
}): Promise<ThreadsResponse>
```

<sub>`GET /channels/{channel_id}/users/@me/threads/archived/private` · `list_my_private_archived_threads`</sub>

## `discord.updateVoiceChannelStatus`

Set a voice channel's status. — [Provider docs](https://discord.com/developers/docs)

```ts
discord.updateVoiceChannelStatus(input: {
  /** The new voice channel status */
  status?: string | null;
  channel_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`PUT /channels/{channel_id}/voice-status` · `update_voice_channel_status`</sub>

## `discord.listChannelWebhooks`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listChannelWebhooks(input: {
  channel_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`GET /channels/{channel_id}/webhooks` · `list_channel_webhooks`</sub>

## `discord.createWebhook`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createWebhook(input: {
  name: string;
  avatar?: string | null;
  channel_id: SnowflakeType;
}): Promise<GuildIncomingWebhookResponse>
```

<sub>`POST /channels/{channel_id}/webhooks` · `create_webhook`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
