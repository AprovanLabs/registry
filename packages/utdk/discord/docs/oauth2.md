# Oauth2

4 operations · `@utdk/discord`

```ts
import discord from "@utdk/discord";
```

## `discord.getMyOauth2Authorization`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getMyOauth2Authorization(): Promise<OAuth2GetAuthorizationResponse>
```

<sub>`GET /oauth2/@me` · `get_my_oauth2_authorization`</sub>

## `discord.getMyOauth2Application`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getMyOauth2Application(): Promise<PrivateApplicationResponse>
```

<sub>`GET /oauth2/applications/@me` · `get_my_oauth2_application`</sub>

## `discord.getPublicKeys`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getPublicKeys(): Promise<OAuth2GetKeys>
```

<sub>`GET /oauth2/keys` · `get_public_keys`</sub>

## `discord.getOpenidConnectUserinfo`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getOpenidConnectUserinfo(): Promise<OAuth2GetOpenIdConnectUserInfoResponse>
```

<sub>`GET /oauth2/userinfo` · `get_openid_connect_userinfo`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
