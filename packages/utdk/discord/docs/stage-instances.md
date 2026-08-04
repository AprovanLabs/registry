# Stage Instances

4 operations · `@utdk/discord`

```ts
import discord from "@utdk/discord";
```

## `discord.createStageInstance`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.createStageInstance(input: {
  topic: string;
  channel_id: SnowflakeType;
  privacy_level?: null | StageInstancesPrivacyLevels;
  guild_scheduled_event_id?: null | SnowflakeType;
  send_start_notification?: boolean | null;
}): Promise<StageInstanceResponse>
```

<sub>`POST /stage-instances` · `create_stage_instance`</sub>

## `discord.deleteStageInstance`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.deleteStageInstance(input: {
  channel_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`DELETE /stage-instances/{channel_id}` · `delete_stage_instance`</sub>

## `discord.getStageInstance`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getStageInstance(input: {
  channel_id: SnowflakeType;
}): Promise<StageInstanceResponse>
```

<sub>`GET /stage-instances/{channel_id}` · `get_stage_instance`</sub>

## `discord.updateStageInstance`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.updateStageInstance(input: {
  topic?: string;
  privacy_level?: StageInstancesPrivacyLevels;
  channel_id: SnowflakeType;
}): Promise<StageInstanceResponse>
```

<sub>`PATCH /stage-instances/{channel_id}` · `update_stage_instance`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
