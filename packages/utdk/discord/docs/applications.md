# Applications

33 operations · `@utdk/discord`

```ts
import discord from "@utdk/discord";
```

## `discord.getApplication`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getApplication(input: {
  application_id: SnowflakeType;
}): Promise<PrivateApplicationResponse>
```

<sub>`GET /applications/{application_id}` · `get_application`</sub>

## `discord.updateApplication`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateApplication(input: {
  description?: { [key: string]: unknown } | null;
  icon?: string | null;
  cover_image?: string | null;
  team_id?: null | SnowflakeType;
  flags?: number | null;
  interactions_endpoint_url?: string | null;
  explicit_content_filter?: null | ApplicationExplicitContentFilterTypes;
  max_participants?: number | null;
  type?: null | ApplicationTypes;
  tags?: unknown[] | null;
  custom_install_url?: string | null;
  install_params?: null | ApplicationOAuth2InstallParams;
  role_connections_verification_url?: string | null;
  integration_types_config?: { [key: string]: unknown } | null;
  event_webhooks_status?: null | 1 | 2;
  /** Event webhooks URL for the app to receive webhook events */
  event_webhooks_url?: string | null;
  event_webhooks_types?: unknown[] | null;
  application_id: SnowflakeType;
}): Promise<PrivateApplicationResponse>
```

<sub>`PATCH /applications/{application_id}` · `update_application`</sub>

## `discord.applicationsGetActivityInstance`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.applicationsGetActivityInstance(input: {
  application_id: SnowflakeType;
  instance_id: string;
}): Promise<EmbeddedActivityInstance>
```

<sub>`GET /applications/{application_id}/activity-instances/{instance_id}` · `applications_get_activity_instance`</sub>

## `discord.uploadApplicationAttachment`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.uploadApplicationAttachment(input: {
  file: string;
  application_id: SnowflakeType;
}): Promise<ActivitiesAttachmentResponse>
```

<sub>`POST /applications/{application_id}/attachment` · `upload_application_attachment`</sub>

## `discord.listApplicationCommands`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listApplicationCommands(input: {
  application_id: SnowflakeType;
  with_localizations?: boolean;
}): Promise<unknown[] | null>
```

<sub>`GET /applications/{application_id}/commands` · `list_application_commands`</sub>

## `discord.createApplicationCommand`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createApplicationCommand(input: {
  name: string;
  name_localizations?: { [key: string]: unknown } | null;
  description?: string | null;
  description_localizations?: { [key: string]: unknown } | null;
  options?: unknown[] | null;
  default_member_permissions?: number | null;
  dm_permission?: boolean | null;
  contexts?: unknown[] | null;
  integration_types?: unknown[] | null;
  /** Determines whether the interaction is handled by the app's interactions handler or by Discord */
  handler?: null | ApplicationCommandHandler;
  type?: null | ApplicationCommandType;
  application_id: SnowflakeType;
}): Promise<ApplicationCommandResponse>
```

<sub>`POST /applications/{application_id}/commands` · `create_application_command`</sub>

## `discord.bulkSetApplicationCommands`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.bulkSetApplicationCommands(input: {
  body: unknown[] | null;
  application_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`PUT /applications/{application_id}/commands` · `bulk_set_application_commands`</sub>

## `discord.deleteApplicationCommand`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteApplicationCommand(input: {
  application_id: SnowflakeType;
  command_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /applications/{application_id}/commands/{command_id}` · `delete_application_command`</sub>

## `discord.getApplicationCommand`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getApplicationCommand(input: {
  application_id: SnowflakeType;
  command_id: SnowflakeType;
}): Promise<ApplicationCommandResponse>
```

<sub>`GET /applications/{application_id}/commands/{command_id}` · `get_application_command`</sub>

## `discord.updateApplicationCommand`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateApplicationCommand(input: {
  name?: string;
  name_localizations?: { [key: string]: unknown } | null;
  description?: string | null;
  description_localizations?: { [key: string]: unknown } | null;
  options?: unknown[] | null;
  default_member_permissions?: number | null;
  dm_permission?: boolean | null;
  contexts?: unknown[] | null;
  integration_types?: unknown[] | null;
  /** Determines whether the interaction is handled by the app's interactions handler or by Discord */
  handler?: null | ApplicationCommandHandler;
  application_id: SnowflakeType;
  command_id: SnowflakeType;
}): Promise<ApplicationCommandResponse>
```

<sub>`PATCH /applications/{application_id}/commands/{command_id}` · `update_application_command`</sub>

## `discord.listApplicationEmojis`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listApplicationEmojis(input: {
  application_id: SnowflakeType;
}): Promise<ListApplicationEmojisResponse>
```

<sub>`GET /applications/{application_id}/emojis` · `list_application_emojis`</sub>

## `discord.createApplicationEmoji`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createApplicationEmoji(input: {
  name: string;
  image: string;
  application_id: SnowflakeType;
}): Promise<EmojiResponse>
```

<sub>`POST /applications/{application_id}/emojis` · `create_application_emoji`</sub>

## `discord.deleteApplicationEmoji`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteApplicationEmoji(input: {
  application_id: SnowflakeType;
  emoji_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /applications/{application_id}/emojis/{emoji_id}` · `delete_application_emoji`</sub>

## `discord.getApplicationEmoji`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getApplicationEmoji(input: {
  application_id: SnowflakeType;
  emoji_id: SnowflakeType;
}): Promise<EmojiResponse>
```

<sub>`GET /applications/{application_id}/emojis/{emoji_id}` · `get_application_emoji`</sub>

## `discord.updateApplicationEmoji`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateApplicationEmoji(input: {
  name?: string;
  application_id: SnowflakeType;
  emoji_id: SnowflakeType;
}): Promise<EmojiResponse>
```

<sub>`PATCH /applications/{application_id}/emojis/{emoji_id}` · `update_application_emoji`</sub>

## `discord.getEntitlements`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getEntitlements(input: {
  application_id: SnowflakeType;
  user_id?: SnowflakeType;
  sku_ids?: string | (null | SnowflakeType)[];
  guild_id?: SnowflakeType;
  before?: SnowflakeType;
  after?: SnowflakeType;
  limit?: number;
  exclude_ended?: boolean;
  exclude_deleted?: boolean;
  only_active?: boolean;
}): Promise<(EntitlementResponse)[]>
```

<sub>`GET /applications/{application_id}/entitlements` · `get_entitlements`</sub>

## `discord.createEntitlement`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createEntitlement(input: {
  /** ID of the SKU to grant the entitlement to */
  sku_id: SnowflakeType;
  /** ID of the guild or user to grant the entitlement to */
  owner_id: SnowflakeType;
  /** 1 for a guild subscription, 2 for a user subscription */
  owner_type: EntitlementOwnerTypes;
  application_id: SnowflakeType;
}): Promise<EntitlementResponse>
```

<sub>`POST /applications/{application_id}/entitlements` · `create_entitlement`</sub>

## `discord.deleteEntitlement`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteEntitlement(input: {
  application_id: SnowflakeType;
  entitlement_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /applications/{application_id}/entitlements/{entitlement_id}` · `delete_entitlement`</sub>

## `discord.getEntitlement`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getEntitlement(input: {
  application_id: SnowflakeType;
  entitlement_id: SnowflakeType;
}): Promise<EntitlementResponse>
```

<sub>`GET /applications/{application_id}/entitlements/{entitlement_id}` · `get_entitlement`</sub>

## `discord.consumeEntitlement`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.consumeEntitlement(input: {
  application_id: SnowflakeType;
  entitlement_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`POST /applications/{application_id}/entitlements/{entitlement_id}/consume` · `consume_entitlement`</sub>

## `discord.listGuildApplicationCommands`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildApplicationCommands(input: {
  application_id: SnowflakeType;
  guild_id: SnowflakeType;
  with_localizations?: boolean;
}): Promise<unknown[] | null>
```

<sub>`GET /applications/{application_id}/guilds/{guild_id}/commands` · `list_guild_application_commands`</sub>

## `discord.createGuildApplicationCommand`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createGuildApplicationCommand(input: {
  name: string;
  name_localizations?: { [key: string]: unknown } | null;
  description?: string | null;
  description_localizations?: { [key: string]: unknown } | null;
  options?: unknown[] | null;
  default_member_permissions?: number | null;
  dm_permission?: boolean | null;
  contexts?: unknown[] | null;
  integration_types?: unknown[] | null;
  /** Determines whether the interaction is handled by the app's interactions handler or by Discord */
  handler?: null | ApplicationCommandHandler;
  type?: null | ApplicationCommandType;
  application_id: SnowflakeType;
  guild_id: SnowflakeType;
}): Promise<ApplicationCommandResponse>
```

<sub>`POST /applications/{application_id}/guilds/{guild_id}/commands` · `create_guild_application_command`</sub>

## `discord.bulkSetGuildApplicationCommands`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.bulkSetGuildApplicationCommands(input: {
  body: unknown[] | null;
  application_id: SnowflakeType;
  guild_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`PUT /applications/{application_id}/guilds/{guild_id}/commands` · `bulk_set_guild_application_commands`</sub>

## `discord.deleteGuildApplicationCommand`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteGuildApplicationCommand(input: {
  application_id: SnowflakeType;
  guild_id: SnowflakeType;
  command_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /applications/{application_id}/guilds/{guild_id}/commands/{command_id}` · `delete_guild_application_command`</sub>

## `discord.getGuildApplicationCommand`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildApplicationCommand(input: {
  application_id: SnowflakeType;
  guild_id: SnowflakeType;
  command_id: SnowflakeType;
}): Promise<ApplicationCommandResponse>
```

<sub>`GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}` · `get_guild_application_command`</sub>

## `discord.updateGuildApplicationCommand`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateGuildApplicationCommand(input: {
  name?: string;
  name_localizations?: { [key: string]: unknown } | null;
  description?: string | null;
  description_localizations?: { [key: string]: unknown } | null;
  options?: unknown[] | null;
  default_member_permissions?: number | null;
  dm_permission?: boolean | null;
  contexts?: unknown[] | null;
  integration_types?: unknown[] | null;
  /** Determines whether the interaction is handled by the app's interactions handler or by Discord */
  handler?: null | ApplicationCommandHandler;
  application_id: SnowflakeType;
  guild_id: SnowflakeType;
  command_id: SnowflakeType;
}): Promise<ApplicationCommandResponse>
```

<sub>`PATCH /applications/{application_id}/guilds/{guild_id}/commands/{command_id}` · `update_guild_application_command`</sub>

## `discord.getGuildApplicationCommandPermissions`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getGuildApplicationCommandPermissions(input: {
  application_id: SnowflakeType;
  guild_id: SnowflakeType;
  command_id: SnowflakeType;
}): Promise<CommandPermissionsResponse>
```

<sub>`GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions` · `get_guild_application_command_permissions`</sub>

## `discord.setGuildApplicationCommandPermissions`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.setGuildApplicationCommandPermissions(input: {
  permissions?: unknown[] | null;
  application_id: SnowflakeType;
  guild_id: SnowflakeType;
  command_id: SnowflakeType;
}): Promise<CommandPermissionsResponse>
```

<sub>`PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions` · `set_guild_application_command_permissions`</sub>

## `discord.listGuildApplicationCommandPermissions`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listGuildApplicationCommandPermissions(input: {
  application_id: SnowflakeType;
  guild_id: SnowflakeType;
}): Promise<(CommandPermissionsResponse)[]>
```

<sub>`GET /applications/{application_id}/guilds/{guild_id}/commands/permissions` · `list_guild_application_command_permissions`</sub>

## `discord.getApplicationRoleConnectionsMetadata`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getApplicationRoleConnectionsMetadata(input: {
  application_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`GET /applications/{application_id}/role-connections/metadata` · `get_application_role_connections_metadata`</sub>

## `discord.updateApplicationRoleConnectionsMetadata`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateApplicationRoleConnectionsMetadata(input: {
  body: unknown[] | null;
  application_id: SnowflakeType;
}): Promise<unknown[] | null>
```

<sub>`PUT /applications/{application_id}/role-connections/metadata` · `update_application_role_connections_metadata`</sub>

## `discord.getMyApplication`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getMyApplication(): Promise<PrivateApplicationResponse>
```

<sub>`GET /applications/@me` · `get_my_application`</sub>

## `discord.updateMyApplication`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateMyApplication(input: {
  description?: { [key: string]: unknown } | null;
  icon?: string | null;
  cover_image?: string | null;
  team_id?: null | SnowflakeType;
  flags?: number | null;
  interactions_endpoint_url?: string | null;
  explicit_content_filter?: null | ApplicationExplicitContentFilterTypes;
  max_participants?: number | null;
  type?: null | ApplicationTypes;
  tags?: unknown[] | null;
  custom_install_url?: string | null;
  install_params?: null | ApplicationOAuth2InstallParams;
  role_connections_verification_url?: string | null;
  integration_types_config?: { [key: string]: unknown } | null;
  event_webhooks_status?: null | 1 | 2;
  /** Event webhooks URL for the app to receive webhook events */
  event_webhooks_url?: string | null;
  event_webhooks_types?: unknown[] | null;
}): Promise<PrivateApplicationResponse>
```

<sub>`PATCH /applications/@me` · `update_my_application`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
