# Guilds

91 operations · `@utdk/discord`

```ts
import discord from "@utdk/discord";
```

## `discord.getGuild`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuild(input: {
  guild_id: SnowflakeType;
  with_counts?: boolean;
}): Promise<GuildWithCountsResponse>
```

<sub>`GET /guilds/{guild_id}` · `get_guild`</sub>

## `discord.updateGuild`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateGuild(input: {
  name?: string;
  description?: string | null;
  region?: string | null;
  icon?: string | null;
  verification_level?: null | VerificationLevels;
  default_message_notifications?: null | UserNotificationSettings;
  explicit_content_filter?: null | GuildExplicitContentFilterTypes;
  preferred_locale?: null | AvailableLocalesEnum;
  afk_timeout?: null | AfkTimeouts;
  afk_channel_id?: null | SnowflakeType;
  system_channel_id?: null | SnowflakeType;
  splash?: string | null;
  banner?: string | null;
  system_channel_flags?: number | null;
  features?: unknown[] | null;
  discovery_splash?: string | null;
  home_header?: string | null;
  rules_channel_id?: null | SnowflakeType;
  safety_alerts_channel_id?: null | SnowflakeType;
  public_updates_channel_id?: null | SnowflakeType;
  premium_progress_bar_enabled?: boolean | null;
  guild_id: SnowflakeType;
}): Promise<GuildResponse>
```

<sub>`PATCH /guilds/{guild_id}` · `update_guild`</sub>

## `discord.listGuildAuditLogEntries`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildAuditLogEntries(input: {
  guild_id: SnowflakeType;
  user_id?: SnowflakeType;
  target_id?: SnowflakeType;
  action_type?: AuditLogActionTypes;
  before?: SnowflakeType;
  after?: SnowflakeType;
  limit?: number;
}): Promise<GuildAuditLogResponse>
```

<sub>`GET /guilds/{guild_id}/audit-logs` · `list_guild_audit_log_entries`</sub>

## `discord.listAutoModerationRules`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listAutoModerationRules(input: {
  guild_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`GET /guilds/{guild_id}/auto-moderation/rules` · `list_auto_moderation_rules`</sub>

## `discord.createAutoModerationRule`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createAutoModerationRule(input: {
  body: DefaultKeywordListUpsertRequest | KeywordUpsertRequest | MlSpamUpsertRequest | MentionSpamUpsertRequest | UserProfileUpsertRequest;
  guild_id: SnowflakeType;
}): Promise<DefaultKeywordRuleResponse | KeywordRuleResponse | MlSpamRuleResponse | MentionSpamRuleResponse | UserProfileRuleResponse>
```

<sub>`POST /guilds/{guild_id}/auto-moderation/rules` · `create_auto_moderation_rule`</sub>

## `discord.deleteAutoModerationRule`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteAutoModerationRule(input: {
  guild_id: SnowflakeType;
  rule_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /guilds/{guild_id}/auto-moderation/rules/{rule_id}` · `delete_auto_moderation_rule`</sub>

## `discord.getAutoModerationRule`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getAutoModerationRule(input: {
  guild_id: SnowflakeType;
  rule_id: SnowflakeType;
}): Promise<DefaultKeywordRuleResponse | KeywordRuleResponse | MlSpamRuleResponse | MentionSpamRuleResponse | UserProfileRuleResponse>
```

<sub>`GET /guilds/{guild_id}/auto-moderation/rules/{rule_id}` · `get_auto_moderation_rule`</sub>

## `discord.updateAutoModerationRule`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateAutoModerationRule(input: {
  body: DefaultKeywordListUpsertRequestPartial | KeywordUpsertRequestPartial | MlSpamUpsertRequestPartial | MentionSpamUpsertRequestPartial | UserProfileUpsertRequestPartial;
  guild_id: SnowflakeType;
  rule_id: SnowflakeType;
}): Promise<DefaultKeywordRuleResponse | KeywordRuleResponse | MlSpamRuleResponse | MentionSpamRuleResponse | UserProfileRuleResponse>
```

<sub>`PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id}` · `update_auto_moderation_rule`</sub>

## `discord.listGuildBans`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildBans(input: {
  guild_id: SnowflakeType;
  limit?: number;
  before?: SnowflakeType;
  after?: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`GET /guilds/{guild_id}/bans` · `list_guild_bans`</sub>

## `discord.unbanUserFromGuild`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.unbanUserFromGuild(input: {
  body: UnbanUserFromGuildRequest;
  guild_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /guilds/{guild_id}/bans/{user_id}` · `unban_user_from_guild`</sub>

## `discord.getGuildBan`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildBan(input: {
  guild_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<GuildBanResponse>
```

<sub>`GET /guilds/{guild_id}/bans/{user_id}` · `get_guild_ban`</sub>

## `discord.banUserFromGuild`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.banUserFromGuild(input: {
  delete_message_seconds?: number | null;
  delete_message_days?: number | null;
  guild_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`PUT /guilds/{guild_id}/bans/{user_id}` · `ban_user_from_guild`</sub>

## `discord.bulkBanUsersFromGuild`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.bulkBanUsersFromGuild(input: {
  user_ids: (SnowflakeType)[];
  delete_message_seconds?: number | null;
  guild_id: SnowflakeType;
}): Promise<BulkBanUsersResponse>
```

<sub>`POST /guilds/{guild_id}/bulk-ban` · `bulk_ban_users_from_guild`</sub>

## `discord.listGuildChannels`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildChannels(input: {
  guild_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`GET /guilds/{guild_id}/channels` · `list_guild_channels`</sub>

## `discord.bulkUpdateGuildChannels`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.bulkUpdateGuildChannels(input: {
  body: ({ id?: null | SnowflakeType; position?: number | null; parent_id?: null | SnowflakeType; lock_permissions?: boolean | null })[];
  guild_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`PATCH /guilds/{guild_id}/channels` · `bulk_update_guild_channels`</sub>

## `discord.createGuildChannel`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createGuildChannel(input: {
  type?: null | 0 | 2 | 4 | 5 | 13 | 14 | 15;
  name: string;
  position?: number | null;
  topic?: string | null;
  bitrate?: number | null;
  user_limit?: number | null;
  nsfw?: boolean | null;
  rate_limit_per_user?: number | null;
  parent_id?: null | SnowflakeType;
  permission_overwrites?: unknown[] | null;
  rtc_region?: string | null;
  video_quality_mode?: null | VideoQualityModes;
  default_auto_archive_duration?: null | ThreadAutoArchiveDuration;
  default_reaction_emoji?: null | UpdateDefaultReactionEmojiRequest;
  default_thread_rate_limit_per_user?: number | null;
  default_sort_order?: null | ThreadSortOrder;
  default_forum_layout?: null | ForumLayout;
  default_tag_setting?: null | ThreadSearchTagSetting;
  available_tags?: unknown[] | null;
  guild_id: SnowflakeType;
}): Promise<GuildChannelResponse>
```

<sub>`POST /guilds/{guild_id}/channels` · `create_guild_channel`</sub>

## `discord.listGuildEmojis`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildEmojis(input: {
  guild_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`GET /guilds/{guild_id}/emojis` · `list_guild_emojis`</sub>

## `discord.createGuildEmoji`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createGuildEmoji(input: {
  name: string;
  image: string;
  roles?: unknown[] | null;
  guild_id: SnowflakeType;
}): Promise<EmojiResponse>
```

<sub>`POST /guilds/{guild_id}/emojis` · `create_guild_emoji`</sub>

## `discord.deleteGuildEmoji`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteGuildEmoji(input: {
  guild_id: SnowflakeType;
  emoji_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /guilds/{guild_id}/emojis/{emoji_id}` · `delete_guild_emoji`</sub>

## `discord.getGuildEmoji`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildEmoji(input: {
  guild_id: SnowflakeType;
  emoji_id: SnowflakeType;
}): Promise<EmojiResponse>
```

<sub>`GET /guilds/{guild_id}/emojis/{emoji_id}` · `get_guild_emoji`</sub>

## `discord.updateGuildEmoji`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateGuildEmoji(input: {
  name?: string;
  roles?: unknown[] | null;
  guild_id: SnowflakeType;
  emoji_id: SnowflakeType;
}): Promise<EmojiResponse>
```

<sub>`PATCH /guilds/{guild_id}/emojis/{emoji_id}` · `update_guild_emoji`</sub>

## `discord.updateGuildIncidentActions`

Modifies the incident actions of the guild — [Provider docs](https://discord.com/developers/docs)

```ts
discord.updateGuildIncidentActions(input: {
  /** When invites will be enabled again */
  invites_disabled_until?: string | null;
  /** When direct messages will be enabled again */
  dms_disabled_until?: string | null;
  guild_id: SnowflakeType;
}): Promise<GuildIncidentsDataResponse>
```

<sub>`PUT /guilds/{guild_id}/incident-actions` · `update_guild_incident_actions`</sub>

## `discord.listGuildIntegrations`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildIntegrations(input: {
  guild_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`GET /guilds/{guild_id}/integrations` · `list_guild_integrations`</sub>

## `discord.deleteGuildIntegration`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteGuildIntegration(input: {
  guild_id: SnowflakeType;
  integration_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /guilds/{guild_id}/integrations/{integration_id}` · `delete_guild_integration`</sub>

## `discord.listGuildInvites`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildInvites(input: {
  guild_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`GET /guilds/{guild_id}/invites` · `list_guild_invites`</sub>

## `discord.listGuildMembers`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildMembers(input: {
  guild_id: SnowflakeType;
  limit?: number;
  after?: number;
}): Promise<(GuildMemberResponse)[]>
```

<sub>`GET /guilds/{guild_id}/members` · `list_guild_members`</sub>

## `discord.deleteGuildMember`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteGuildMember(input: {
  guild_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /guilds/{guild_id}/members/{user_id}` · `delete_guild_member`</sub>

## `discord.getGuildMember`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildMember(input: {
  guild_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<GuildMemberResponse>
```

<sub>`GET /guilds/{guild_id}/members/{user_id}` · `get_guild_member`</sub>

## `discord.updateGuildMember`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateGuildMember(input: {
  nick?: string | null;
  roles?: unknown[] | null;
  mute?: boolean | null;
  deaf?: boolean | null;
  channel_id?: null | SnowflakeType;
  communication_disabled_until?: string | null;
  flags?: number | null;
  guild_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<GuildMemberResponse>
```

<sub>`PATCH /guilds/{guild_id}/members/{user_id}` · `update_guild_member`</sub>

## `discord.addGuildMember`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.addGuildMember(input: {
  nick?: string | null;
  roles?: unknown[] | null;
  mute?: boolean | null;
  deaf?: boolean | null;
  access_token: string;
  flags?: number | null;
  guild_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<GuildMemberResponse>
```

<sub>`PUT /guilds/{guild_id}/members/{user_id}` · `add_guild_member`</sub>

## `discord.deleteGuildMemberRole`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteGuildMemberRole(input: {
  guild_id: SnowflakeType;
  user_id: SnowflakeType;
  role_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}` · `delete_guild_member_role`</sub>

## `discord.addGuildMemberRole`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.addGuildMemberRole(input: {
  guild_id: SnowflakeType;
  user_id: SnowflakeType;
  role_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}` · `add_guild_member_role`</sub>

## `discord.updateMyGuildMember`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateMyGuildMember(input: {
  nick?: string | null;
  avatar?: string | null;
  bio?: string | null;
  banner?: string | null;
  guild_id: SnowflakeType;
}): Promise<PrivateGuildMemberResponse>
```

<sub>`PATCH /guilds/{guild_id}/members/@me` · `update_my_guild_member`</sub>

## `discord.searchGuildMembers`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.searchGuildMembers(input: {
  guild_id: SnowflakeType;
  limit?: number;
  query: string;
}): Promise<(GuildMemberResponse)[]>
```

<sub>`GET /guilds/{guild_id}/members/search` · `search_guild_members`</sub>

## `discord.guildSearch`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.guildSearch(input: {
  guild_id: SnowflakeType;
  sort_by?: SortingMode;
  sort_order?: SortingOrder;
  content?: string;
  slop?: number;
  author_id?: (SnowflakeType)[];
  author_type?: (AuthorType)[];
  mentions?: (SnowflakeType)[];
  mentions_role_id?: (SnowflakeType)[];
  replied_to_user_id?: (SnowflakeType)[];
  replied_to_message_id?: (SnowflakeType)[];
  mention_everyone?: boolean;
  min_id?: SnowflakeType;
  max_id?: SnowflakeType;
  limit?: number;
  offset?: number;
  has?: (HasOption)[];
  link_hostname?: (string)[];
  embed_provider?: (string)[];
  embed_type?: (SearchableEmbedType)[];
  attachment_extension?: (string)[];
  attachment_filename?: (string)[];
  pinned?: boolean;
  include_nsfw?: boolean;
  channel_id?: (SnowflakeType)[];
}): Promise<GuildSearchResponse>
```

<sub>`GET /guilds/{guild_id}/messages/search` · `guild_search`</sub>

## `discord.getGuildNewMemberWelcome`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildNewMemberWelcome(input: {
  guild_id: SnowflakeType;
}): Promise<GuildHomeSettingsResponse>
```

<sub>`GET /guilds/{guild_id}/new-member-welcome` · `get_guild_new_member_welcome`</sub>

## `discord.getGuildsOnboarding`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildsOnboarding(input: {
  guild_id: SnowflakeType;
}): Promise<UserGuildOnboardingResponse>
```

<sub>`GET /guilds/{guild_id}/onboarding` · `get_guilds_onboarding`</sub>

## `discord.putGuildsOnboarding`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.putGuildsOnboarding(input: {
  prompts?: unknown[] | null;
  enabled?: boolean | null;
  default_channel_ids?: unknown[] | null;
  mode?: null | GuildOnboardingMode;
  guild_id: SnowflakeType;
}): Promise<GuildOnboardingResponse>
```

<sub>`PUT /guilds/{guild_id}/onboarding` · `put_guilds_onboarding`</sub>

## `discord.getGuildPreview`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildPreview(input: {
  guild_id: SnowflakeType;
}): Promise<GuildPreviewResponse>
```

<sub>`GET /guilds/{guild_id}/preview` · `get_guild_preview`</sub>

## `discord.previewPruneGuild`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.previewPruneGuild(input: {
  guild_id: SnowflakeType;
  days?: number;
  include_roles?: string | (null | SnowflakeType)[];
}): Promise<GuildPruneResponse>
```

<sub>`GET /guilds/{guild_id}/prune` · `preview_prune_guild`</sub>

## `discord.pruneGuild`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.pruneGuild(input: {
  days?: number | null;
  compute_prune_count?: boolean | null;
  include_roles?: string | (SnowflakeType)[] | null;
  guild_id: SnowflakeType;
}): Promise<GuildPruneResponse>
```

<sub>`POST /guilds/{guild_id}/prune` · `prune_guild`</sub>

## `discord.listGuildVoiceRegions`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildVoiceRegions(input: {
  guild_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`GET /guilds/{guild_id}/regions` · `list_guild_voice_regions`</sub>

## `discord.getGuildJoinRequests`

List join requests for guild, optionally filtered by application status — [Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildJoinRequests(input: {
  guild_id: SnowflakeType;
  status?: GuildJoinRequestApplicationStatus;
  limit?: number;
  before?: SnowflakeType;
  after?: SnowflakeType;
}): Promise<GuildJoinRequestsListResponse>
```

<sub>`GET /guilds/{guild_id}/requests` · `get_guild_join_requests`</sub>

## `discord.actionGuildJoinRequest`

Approve or reject guild join request — [Provider docs](https://discord.com/developers/docs)

```ts
discord.actionGuildJoinRequest(input: {
  /** Whether to approve or reject the join request */
  action?: GuildJoinRequestApplicationStatus;
  /** Reason for rejection. Only used when action is REJECTED */
  rejection_reason?: string | null;
  guild_id: SnowflakeType;
  request_id: SnowflakeType;
}): Promise<GuildJoinRequestResponse>
```

<sub>`PATCH /guilds/{guild_id}/requests/{request_id}` · `action_guild_join_request`</sub>

## `discord.listGuildRoles`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildRoles(input: {
  guild_id: SnowflakeType;
}): Promise<(GuildRoleResponse)[]>
```

<sub>`GET /guilds/{guild_id}/roles` · `list_guild_roles`</sub>

## `discord.bulkUpdateGuildRoles`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.bulkUpdateGuildRoles(input: {
  body: (UpdateRolePositionsRequest)[];
  guild_id: SnowflakeType;
}): Promise<(GuildRoleResponse)[]>
```

<sub>`PATCH /guilds/{guild_id}/roles` · `bulk_update_guild_roles`</sub>

## `discord.createGuildRole`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createGuildRole(input: {
  name?: string | null;
  permissions?: number | null;
  color?: number | null;
  colors?: null | RoleColors;
  hoist?: boolean | null;
  mentionable?: boolean | null;
  icon?: string | null;
  unicode_emoji?: string | null;
  guild_id: SnowflakeType;
}): Promise<GuildRoleResponse>
```

<sub>`POST /guilds/{guild_id}/roles` · `create_guild_role`</sub>

## `discord.deleteGuildRole`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteGuildRole(input: {
  guild_id: SnowflakeType;
  role_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /guilds/{guild_id}/roles/{role_id}` · `delete_guild_role`</sub>

## `discord.getGuildRole`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildRole(input: {
  guild_id: SnowflakeType;
  role_id: SnowflakeType;
}): Promise<GuildRoleResponse>
```

<sub>`GET /guilds/{guild_id}/roles/{role_id}` · `get_guild_role`</sub>

## `discord.updateGuildRole`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateGuildRole(input: {
  name?: string | null;
  permissions?: number | null;
  color?: number | null;
  colors?: null | RoleColors;
  hoist?: boolean | null;
  mentionable?: boolean | null;
  icon?: string | null;
  unicode_emoji?: string | null;
  guild_id: SnowflakeType;
  role_id: SnowflakeType;
}): Promise<GuildRoleResponse>
```

<sub>`PATCH /guilds/{guild_id}/roles/{role_id}` · `update_guild_role`</sub>

## `discord.guildRoleMemberCounts`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.guildRoleMemberCounts(input: {
  guild_id: SnowflakeType;
}): Promise<{ [key: string]: number | undefined }>
```

<sub>`GET /guilds/{guild_id}/roles/member-counts` · `guild_role_member_counts`</sub>

## `discord.listGuildScheduledEvents`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildScheduledEvents(input: {
  guild_id: SnowflakeType;
  with_user_count?: boolean;
}): Promise<unknown[] | null>
```

<sub>`GET /guilds/{guild_id}/scheduled-events` · `list_guild_scheduled_events`</sub>

## `discord.createGuildScheduledEvent`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createGuildScheduledEvent(input: {
  body: ExternalScheduledEventCreateRequest | StageScheduledEventCreateRequest | VoiceScheduledEventCreateRequest;
  guild_id: SnowflakeType;
}): Promise<ExternalScheduledEventResponse | StageScheduledEventResponse | VoiceScheduledEventResponse>
```

<sub>`POST /guilds/{guild_id}/scheduled-events` · `create_guild_scheduled_event`</sub>

## `discord.deleteGuildScheduledEvent`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteGuildScheduledEvent(input: {
  guild_id: SnowflakeType;
  guild_scheduled_event_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}` · `delete_guild_scheduled_event`</sub>

## `discord.getGuildScheduledEvent`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildScheduledEvent(input: {
  guild_id: SnowflakeType;
  guild_scheduled_event_id: SnowflakeType;
  with_user_count?: boolean;
}): Promise<ExternalScheduledEventResponse | StageScheduledEventResponse | VoiceScheduledEventResponse>
```

<sub>`GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}` · `get_guild_scheduled_event`</sub>

## `discord.updateGuildScheduledEvent`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateGuildScheduledEvent(input: {
  body: ExternalScheduledEventPatchRequestPartial | StageScheduledEventPatchRequestPartial | VoiceScheduledEventPatchRequestPartial;
  guild_id: SnowflakeType;
  guild_scheduled_event_id: SnowflakeType;
}): Promise<ExternalScheduledEventResponse | StageScheduledEventResponse | VoiceScheduledEventResponse>
```

<sub>`PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}` · `update_guild_scheduled_event`</sub>

## `discord.listGuildScheduledEventExceptionUsers`

Get a list of users subscribed to a guild scheduled event exception — [Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildScheduledEventExceptionUsers(input: {
  guild_id: SnowflakeType;
  guild_scheduled_event_id: SnowflakeType;
  guild_scheduled_event_exception_id: SnowflakeType;
  with_member?: boolean;
  limit?: number;
  before?: SnowflakeType;
  after?: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/{guild_scheduled_event_exception_id}/users` · `list_guild_scheduled_event_exception_users`</sub>

## `discord.createGuildScheduledEventException`

Create an exception to a recurring guild scheduled event — [Provider docs](https://discord.com/developers/docs)

```ts
discord.createGuildScheduledEventException(input: {
  /** Overridden start time of this occurrence */
  scheduled_start_time?: string | null;
  /** Overridden end time of this occurrence */
  scheduled_end_time?: string | null;
  /** The original start time of the occurrence to create an exception for */
  original_scheduled_start_time: string;
  /** Whether this occurrence is canceled */
  is_canceled?: boolean | null;
  guild_id: SnowflakeType;
  guild_scheduled_event_id: SnowflakeType;
}): Promise<GuildScheduledEventExceptionResponse>
```

<sub>`POST /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions` · `create_guild_scheduled_event_exception`</sub>

## `discord.deleteGuildScheduledEventException`

Delete an exception to a recurring guild scheduled event — [Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteGuildScheduledEventException(input: {
  guild_id: SnowflakeType;
  guild_scheduled_event_id: SnowflakeType;
  exception_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}` · `delete_guild_scheduled_event_exception`</sub>

## `discord.updateGuildScheduledEventException`

Modify an exception to a recurring guild scheduled event — [Provider docs](https://discord.com/developers/docs)

```ts
discord.updateGuildScheduledEventException(input: {
  /** Overridden start time of this occurrence */
  scheduled_start_time?: string | null;
  /** Overridden end time of this occurrence */
  scheduled_end_time?: string | null;
  /** Whether this occurrence is canceled */
  is_canceled?: boolean | null;
  guild_id: SnowflakeType;
  guild_scheduled_event_id: SnowflakeType;
  exception_id: SnowflakeType;
}): Promise<GuildScheduledEventExceptionResponse>
```

<sub>`PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}` · `update_guild_scheduled_event_exception`</sub>

## `discord.listGuildScheduledEventUsers`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildScheduledEventUsers(input: {
  guild_id: SnowflakeType;
  guild_scheduled_event_id: SnowflakeType;
  with_member?: boolean;
  limit?: number;
  before?: SnowflakeType;
  after?: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users` · `list_guild_scheduled_event_users`</sub>

## `discord.countGuildScheduledEventUsers`

Get the count of users subscribed to a guild scheduled event — [Provider docs](https://discord.com/developers/docs)

```ts
discord.countGuildScheduledEventUsers(input: {
  guild_id: SnowflakeType;
  guild_scheduled_event_id: SnowflakeType;
  guild_scheduled_event_exception_ids?: (SnowflakeType)[];
}): Promise<ScheduledEventUserCountResponse>
```

<sub>`GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users/counts` · `count_guild_scheduled_event_users`</sub>

## `discord.listGuildSoundboardSounds`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildSoundboardSounds(input: {
  guild_id: SnowflakeType;
}): Promise<ListGuildSoundboardSoundsResponse>
```

<sub>`GET /guilds/{guild_id}/soundboard-sounds` · `list_guild_soundboard_sounds`</sub>

## `discord.createGuildSoundboardSound`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createGuildSoundboardSound(input: {
  name: string;
  volume?: number | null;
  emoji_id?: null | SnowflakeType;
  emoji_name?: string | null;
  sound: string;
  guild_id: SnowflakeType;
}): Promise<SoundboardSoundResponse>
```

<sub>`POST /guilds/{guild_id}/soundboard-sounds` · `create_guild_soundboard_sound`</sub>

## `discord.deleteGuildSoundboardSound`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteGuildSoundboardSound(input: {
  guild_id: SnowflakeType;
  sound_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /guilds/{guild_id}/soundboard-sounds/{sound_id}` · `delete_guild_soundboard_sound`</sub>

## `discord.getGuildSoundboardSound`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildSoundboardSound(input: {
  guild_id: SnowflakeType;
  sound_id: SnowflakeType;
}): Promise<SoundboardSoundResponse>
```

<sub>`GET /guilds/{guild_id}/soundboard-sounds/{sound_id}` · `get_guild_soundboard_sound`</sub>

## `discord.updateGuildSoundboardSound`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateGuildSoundboardSound(input: {
  name?: string;
  volume?: number | null;
  emoji_id?: null | SnowflakeType;
  emoji_name?: string | null;
  guild_id: SnowflakeType;
  sound_id: SnowflakeType;
}): Promise<SoundboardSoundResponse>
```

<sub>`PATCH /guilds/{guild_id}/soundboard-sounds/{sound_id}` · `update_guild_soundboard_sound`</sub>

## `discord.listGuildStickers`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildStickers(input: {
  guild_id: SnowflakeType;
}): Promise<(GuildStickerResponse)[]>
```

<sub>`GET /guilds/{guild_id}/stickers` · `list_guild_stickers`</sub>

## `discord.createGuildSticker`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createGuildSticker(input: {
  name: string;
  tags: string;
  description?: string | null;
  file: string;
  guild_id: SnowflakeType;
}): Promise<GuildStickerResponse>
```

<sub>`POST /guilds/{guild_id}/stickers` · `create_guild_sticker`</sub>

## `discord.deleteGuildSticker`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteGuildSticker(input: {
  guild_id: SnowflakeType;
  sticker_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /guilds/{guild_id}/stickers/{sticker_id}` · `delete_guild_sticker`</sub>

## `discord.getGuildSticker`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildSticker(input: {
  guild_id: SnowflakeType;
  sticker_id: SnowflakeType;
}): Promise<GuildStickerResponse>
```

<sub>`GET /guilds/{guild_id}/stickers/{sticker_id}` · `get_guild_sticker`</sub>

## `discord.updateGuildSticker`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateGuildSticker(input: {
  name?: string;
  tags?: string;
  description?: string | null;
  guild_id: SnowflakeType;
  sticker_id: SnowflakeType;
}): Promise<GuildStickerResponse>
```

<sub>`PATCH /guilds/{guild_id}/stickers/{sticker_id}` · `update_guild_sticker`</sub>

## `discord.listGuildTemplates`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildTemplates(input: {
  guild_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`GET /guilds/{guild_id}/templates` · `list_guild_templates`</sub>

## `discord.createGuildTemplate`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createGuildTemplate(input: {
  name: string;
  description?: string | null;
  guild_id: SnowflakeType;
}): Promise<GuildTemplateResponse>
```

<sub>`POST /guilds/{guild_id}/templates` · `create_guild_template`</sub>

## `discord.deleteGuildTemplate`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteGuildTemplate(input: {
  guild_id: SnowflakeType;
  code: string;
}): Promise<GuildTemplateResponse>
```

<sub>`DELETE /guilds/{guild_id}/templates/{code}` · `delete_guild_template`</sub>

## `discord.updateGuildTemplate`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateGuildTemplate(input: {
  name?: string;
  description?: string | null;
  guild_id: SnowflakeType;
  code: string;
}): Promise<GuildTemplateResponse>
```

<sub>`PATCH /guilds/{guild_id}/templates/{code}` · `update_guild_template`</sub>

## `discord.syncGuildTemplate`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.syncGuildTemplate(input: {
  guild_id: SnowflakeType;
  code: string;
}): Promise<GuildTemplateResponse>
```

<sub>`PUT /guilds/{guild_id}/templates/{code}` · `sync_guild_template`</sub>

## `discord.getActiveGuildThreads`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getActiveGuildThreads(input: {
  guild_id: SnowflakeType;
}): Promise<ThreadsResponse>
```

<sub>`GET /guilds/{guild_id}/threads/active` · `get_active_guild_threads`</sub>

## `discord.getGuildVanityUrl`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildVanityUrl(input: {
  guild_id: SnowflakeType;
}): Promise<VanityUrlResponse>
```

<sub>`GET /guilds/{guild_id}/vanity-url` · `get_guild_vanity_url`</sub>

## `discord.getVoiceState`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getVoiceState(input: {
  guild_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<VoiceStateResponse>
```

<sub>`GET /guilds/{guild_id}/voice-states/{user_id}` · `get_voice_state`</sub>

## `discord.updateVoiceState`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateVoiceState(input: {
  suppress?: boolean | null;
  channel_id?: null | SnowflakeType;
  guild_id: SnowflakeType;
  user_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`PATCH /guilds/{guild_id}/voice-states/{user_id}` · `update_voice_state`</sub>

## `discord.getSelfVoiceState`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getSelfVoiceState(input: {
  guild_id: SnowflakeType;
}): Promise<VoiceStateResponse>
```

<sub>`GET /guilds/{guild_id}/voice-states/@me` · `get_self_voice_state`</sub>

## `discord.updateSelfVoiceState`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateSelfVoiceState(input: {
  request_to_speak_timestamp?: string | null;
  suppress?: boolean | null;
  channel_id?: null | SnowflakeType;
  guild_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`PATCH /guilds/{guild_id}/voice-states/@me` · `update_self_voice_state`</sub>

## `discord.getGuildWebhooks`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildWebhooks(input: {
  guild_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`GET /guilds/{guild_id}/webhooks` · `get_guild_webhooks`</sub>

## `discord.getGuildWelcomeScreen`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildWelcomeScreen(input: {
  guild_id: SnowflakeType;
}): Promise<GuildWelcomeScreenResponse>
```

<sub>`GET /guilds/{guild_id}/welcome-screen` · `get_guild_welcome_screen`</sub>

## `discord.updateGuildWelcomeScreen`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateGuildWelcomeScreen(input: {
  description?: string | null;
  welcome_channels?: unknown[] | null;
  enabled?: boolean | null;
  guild_id: SnowflakeType;
}): Promise<GuildWelcomeScreenResponse>
```

<sub>`PATCH /guilds/{guild_id}/welcome-screen` · `update_guild_welcome_screen`</sub>

## `discord.getGuildWidgetSettings`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildWidgetSettings(input: {
  guild_id: SnowflakeType;
}): Promise<WidgetSettingsResponse>
```

<sub>`GET /guilds/{guild_id}/widget` · `get_guild_widget_settings`</sub>

## `discord.updateGuildWidgetSettings`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateGuildWidgetSettings(input: {
  channel_id?: null | SnowflakeType;
  enabled?: boolean | null;
  guild_id: SnowflakeType;
}): Promise<WidgetSettingsResponse>
```

<sub>`PATCH /guilds/{guild_id}/widget` · `update_guild_widget_settings`</sub>

## `discord.getGuildWidget`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildWidget(input: {
  guild_id: SnowflakeType;
}): Promise<WidgetResponse>
```

<sub>`GET /guilds/{guild_id}/widget.json` · `get_guild_widget`</sub>

## `discord.getGuildWidgetPng`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildWidgetPng(input: {
  guild_id: SnowflakeType;
  style?: WidgetImageStyles;
}): Promise<string>
```

<sub>`GET /guilds/{guild_id}/widget.png` · `get_guild_widget_png`</sub>

## `discord.getGuildTemplate`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildTemplate(input: {
  code: string;
}): Promise<GuildTemplateResponse>
```

<sub>`GET /guilds/templates/{code}` · `get_guild_template`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
