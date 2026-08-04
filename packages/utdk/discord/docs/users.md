# Users

12 operations · `@utdk/discord`

```ts
import discord from "@utdk/discord";
```

## `discord.getUser`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getUser(input: {
  user_id: SnowflakeType;
}): Promise<UserResponse>
```

<sub>`GET /users/{user_id}` · `get_user`</sub>

## `discord.getMyUser`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getMyUser(): Promise<UserPiiResponse>
```

<sub>`GET /users/@me` · `get_my_user`</sub>

## `discord.updateMyUser`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateMyUser(input: {
  username: string;
  avatar?: string | null;
  banner?: string | null;
}): Promise<UserPiiResponse>
```

<sub>`PATCH /users/@me` · `update_my_user`</sub>

## `discord.getCurrentUserApplicationEntitlements`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getCurrentUserApplicationEntitlements(input: {
  application_id: SnowflakeType;
  sku_ids?: string | (null | SnowflakeType)[];
  exclude_consumed?: boolean;
}): Promise<(EntitlementResponse)[]>
```

<sub>`GET /users/@me/applications/{application_id}/entitlements` · `get_current_user_application_entitlements`</sub>

## `discord.deleteApplicationUserRoleConnection`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteApplicationUserRoleConnection(input: {
  application_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /users/@me/applications/{application_id}/role-connection` · `delete_application_user_role_connection`</sub>

## `discord.getApplicationUserRoleConnection`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getApplicationUserRoleConnection(input: {
  application_id: SnowflakeType;
}): Promise<ApplicationUserRoleConnectionResponse>
```

<sub>`GET /users/@me/applications/{application_id}/role-connection` · `get_application_user_role_connection`</sub>

## `discord.updateApplicationUserRoleConnection`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateApplicationUserRoleConnection(input: {
  platform_name?: string | null;
  platform_username?: string | null;
  metadata?: { [key: string]: unknown } | null;
  application_id: SnowflakeType;
}): Promise<ApplicationUserRoleConnectionResponse>
```

<sub>`PUT /users/@me/applications/{application_id}/role-connection` · `update_application_user_role_connection`</sub>

## `discord.createDm`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createDm(input: {
  recipient_id?: null | SnowflakeType;
  access_tokens?: unknown[] | null;
  nicks?: { [key: string]: unknown } | null;
}): Promise<PrivateChannelResponse | PrivateGroupChannelResponse>
```

<sub>`POST /users/@me/channels` · `create_dm`</sub>

## `discord.listMyConnections`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listMyConnections(): Promise<unknown[] | null>
```

<sub>`GET /users/@me/connections` · `list_my_connections`</sub>

## `discord.listMyGuilds`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listMyGuilds(input: {
  before?: SnowflakeType;
  after?: SnowflakeType;
  limit?: number;
  with_counts?: boolean;
}): Promise<unknown[] | null>
```

<sub>`GET /users/@me/guilds` · `list_my_guilds`</sub>

## `discord.leaveGuild`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.leaveGuild(input: {
  guild_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /users/@me/guilds/{guild_id}` · `leave_guild`</sub>

## `discord.getMyGuildMember`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getMyGuildMember(input: {
  guild_id: SnowflakeType;
}): Promise<PrivateGuildMemberResponse>
```

<sub>`GET /users/@me/guilds/{guild_id}/member` · `get_my_guild_member`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
