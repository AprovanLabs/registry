# Channels

4 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.addChannel`

Add a channel

```ts
pipedrive.addChannel(input: {
  /** The name of the channel */
  name: string;
  /** The channel ID */
  provider_channel_id: string;
  /** The URL for an icon that represents your channel */
  avatar_url?: string;
  /** If true, enables templates logic on UI. Requires getTemplates endpoint implemented. Find out more [here](https://pipedrive.readme.io/docs/implementing-messaging-app-extension). */
  template_support?: boolean;
  /** It controls the icons (like the icon next to the conversation) */
  provider_type?: "facebook" | "whatsapp" | "other";
}): Promise<{ success?: boolean; data?: { id?: string; name?: string; avatar_url?: string; provider_channel_id?: string; marketplace_client_id?: string; pd_company_id?: number; pd_user_id?: number; created_at?: string; provider_type?: "facebook" | "whatsapp" | "other"; template_support?: boolean } }>
```

<sub>`POST /channels` · `addChannel`</sub>

## `pipedrive.deleteConversation`

Delete a conversation

```ts
pipedrive.deleteConversation(input: {
  /** The ID of the channel provided by the integration */
  "channel-id": string;
  /** The ID of the conversation provided by the integration */
  "conversation-id": string;
}): Promise<{ success?: boolean }>
```

<sub>`DELETE /channels/{channel-id}/conversations/{conversation-id}` · `deleteConversation`</sub>

## `pipedrive.deleteChannel`

Delete a channel

```ts
pipedrive.deleteChannel(input: {
  /** The ID of the channel provided by the integration */
  id: string;
}): Promise<{ success?: boolean }>
```

<sub>`DELETE /channels/{id}` · `deleteChannel`</sub>

## `pipedrive.receiveMessage`

Receives an incoming message

```ts
pipedrive.receiveMessage(input: {
  /** The ID of the message */
  id: string;
  /** The channel ID as in the provider */
  channel_id: string;
  /** The ID of the provider's user that sent the message */
  sender_id: string;
  /** The ID of the conversation */
  conversation_id: string;
  /** The body of the message */
  message: string;
  /** The status of the message */
  status: "sent" | "delivered" | "read" | "failed";
  /** The date and time when the message was created in the provider, in UTC. Format: YYYY-MM-DD HH:MM */
  created_at: string;
  /** The date and time when the message can no longer receive a reply, in UTC. Format: YYYY-MM-DD HH:MM */
  reply_by?: string;
  /** A URL that can open the conversation in the provider's side */
  conversation_link?: string;
  /** The list of attachments available in the message */
  attachments?: ({ id: string; type: string; name?: string; size?: number; url: string; preview_url?: string; link_expires?: boolean })[];
}): Promise<{ success?: boolean; data?: { id: string; channel_id: string; sender_id: string; conversation_id: string; message: string; status: "sent" | "delivered" | "read" | "failed"; created_at: string; reply_by?: string; conversation_link?: string; attachments?: ({ id: string; type: string; name?: string; size?: number; url: string; preview_url?: string; link_expires?: boolean })[] } }>
```

<sub>`POST /channels/messages/receive` · `receiveMessage`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
