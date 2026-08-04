# Channels

7 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listChannels`

List channels — [Provider docs](https://community.front.com)

```ts
front.listChannels(): Promise<{ _links?: { self?: string }; _results?: (ChannelResponse)[] }>
```

<sub>`GET /channels` · `list-channels`</sub>

## `front.getChannel`

Get channel — [Provider docs](https://community.front.com)

```ts
front.getChannel(input: {
  /** The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  channel_id: string;
}): Promise<ChannelResponse>
```

<sub>`GET /channels/{channel_id}` · `get-channel`</sub>

## `front.updateChannel`

Update Channel — [Provider docs](https://community.front.com)

```ts
front.updateChannel(input: {
  /** Name of the channel */
  name?: string;
  /** ID of the inbox to move this channel to. Will also move corresponding conversations. */
  inbox_id?: string;
  /** Settings to replace. For custom channels, all settings may be replaced. For all other channels, only `undo_send_time` and `all_teammates_can_reply` may be replaced.  */
  settings?: { undo_send_time?: 0 | 5 | 10 | 15 | 30 | 60; all_teammates_can_reply?: boolean; webhook_url?: string };
  /** The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  channel_id: string;
}): Promise<undefined>
```

<sub>`PATCH /channels/{channel_id}` · `update-channel`</sub>

## `front.validateChannel`

Validate channel — [Provider docs](https://community.front.com)

```ts
front.validateChannel(input: {
  /** The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  channel_id: string;
}): Promise<{ status?: string }>
```

<sub>`POST /channels/{channel_id}/validate` · `validate-channel`</sub>

## `front.createAChannel`

Create a channel — [Provider docs](https://community.front.com)

```ts
front.createAChannel(input: {
  /** Name of the channel */
  name?: string;
  /** Settings of the channel */
  settings?: { undo_send_time?: 0 | 5 | 10 | 15 | 30 | 60; all_teammates_can_reply?: boolean; webhook_url?: string; sid?: string; auth_token?: string };
  /** Type of the channel */
  type: "custom" | "smtp" | "twilio";
  /** Sending address of your channel. Required for SMTP and Twilio channels. */
  send_as?: string;
  /** The UID of a developer app that defines a channel. When provided, an application channel bound to that app is created (the channel `type` must be "custom").  */
  application_uid?: string;
  /** Credentials used to authenticate requests to the application's service. Only used with `application_uid`, and its shape depends on the application server's authentication type:   - `none`: omit.   - `api_key`: `{ "api_key": string }`.   - `basic`: `{ "username": string, "password": string }`.   - `bearer`: `{ "access_token": string }`.   - OAuth2 `client_credentials`: `{ "client_id": string, "client_secret": string }`   - OAuth2 `password`: `{ "username": string, "password": string }`   - OAuth2 `authorization_code`: omit. The channel is created unauthenticated and the OAuth     flow must be completed interactively afterwards.  */
  credentials?: { [key: string]: unknown };
  /** The Inbox ID */
  inbox_id: string;
}): Promise<undefined>
```

<sub>`POST /inboxes/{inbox_id}/channels` · `create-a-channel`</sub>

## `front.listTeammateChannels`

List teammate channels — [Provider docs](https://community.front.com)

```ts
front.listTeammateChannels(input: {
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (ChannelResponse)[] }>
```

<sub>`GET /teammates/{teammate_id}/channels` · `list-teammate-channels`</sub>

## `front.listTeamChannels`

List team channels — [Provider docs](https://community.front.com)

```ts
front.listTeamChannels(input: {
  /** The team ID */
  team_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (ChannelResponse)[] }>
```

<sub>`GET /teams/{team_id}/channels` · `list-team-channels`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
