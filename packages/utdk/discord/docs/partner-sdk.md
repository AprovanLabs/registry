# Partner Sdk

5 operations · `@utdk/discord`

```ts
import discord from "@utdk/discord";
```

## `discord.updateUserMessageExternalModerationMetadata`

Update the external moderation metadata for a user message (DM). — [Provider docs](https://discord.com/developers/docs)

```ts
discord.updateUserMessageExternalModerationMetadata(input: {
  /** The moderation metadata attached to the message */
  body: { [key: string]: string | undefined };
  user_id_1: SnowflakeType;
  user_id_2: SnowflakeType;
  message_id: SnowflakeType;
}): Promise<undefined>
```

<sub>`PUT /partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata` · `update_user_message_external_moderation_metadata`</sub>

## `discord.partnerSdkUnmergeProvisionalAccount`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.partnerSdkUnmergeProvisionalAccount(input: {
  client_id: SnowflakeType;
  client_secret?: string | null;
  external_auth_token: string;
  external_auth_type: ApplicationIdentityProviderAuthType;
}): Promise<undefined>
```

<sub>`POST /partner-sdk/provisional-accounts/unmerge` · `partner_sdk_unmerge_provisional_account`</sub>

## `discord.botPartnerSdkUnmergeProvisionalAccount`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.botPartnerSdkUnmergeProvisionalAccount(input: {
  external_user_id: string;
}): Promise<undefined>
```

<sub>`POST /partner-sdk/provisional-accounts/unmerge/bot` · `bot_partner_sdk_unmerge_provisional_account`</sub>

## `discord.partnerSdkToken`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.partnerSdkToken(input: {
  client_id: SnowflakeType;
  client_secret?: string | null;
  external_auth_token: string;
  external_auth_type: ApplicationIdentityProviderAuthType;
}): Promise<ProvisionalTokenResponse>
```

<sub>`POST /partner-sdk/token` · `partner_sdk_token`</sub>

## `discord.botPartnerSdkToken`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.botPartnerSdkToken(input: {
  provisional_user_id?: null | SnowflakeType;
  external_user_id: string;
  preferred_global_name?: string | null;
}): Promise<ProvisionalTokenResponse>
```

<sub>`POST /partner-sdk/token/bot` · `bot_partner_sdk_token`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
