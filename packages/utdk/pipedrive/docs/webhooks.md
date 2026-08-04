# Webhooks

3 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getWebhooks`

Get all Webhooks

```ts
pipedrive.getWebhooks(): Promise<{ success?: boolean } & { status?: string } & { data?: ({ id?: number; company_id?: number; owner_id?: number; user_id?: number; event_action?: string; event_object?: string; subscription_url?: string; version?: string; is_active?: 0 | 1; add_time?: string; remove_time?: string | null; type?: "general" | "application" | "automation"; http_auth_user?: string | null; http_auth_password?: string | n...>
```

<sub>`GET /webhooks` · `getWebhooks`</sub>

## `pipedrive.addWebhook`

Create a new Webhook

```ts
pipedrive.addWebhook(input: {
  /** A full, valid, publicly accessible URL which determines where to send the notifications. Please note that you cannot use Pipedrive API endpoints as the `subscription_url` and the chosen URL must not redirect to another link. */
  subscription_url: string;
  /** The type of action to receive notifications about. Wildcard will match all supported actions. */
  event_action: "create" | "change" | "delete" | "*";
  /** The type of object to receive notifications about. Wildcard will match all supported objects. */
  event_object: "activity" | "deal" | "lead" | "note" | "organization" | "person" | "pipeline" | "product" | "stage" | "user" | "*";
  /** The webhook's name */
  name: string;
  /** The ID of the user that this webhook will be authorized with. You have the option to use a different user's `user_id`. If it is not set, the current user's `user_id` will be used. As each webhook event is checked against a user's permissions, the webhook will only be sent if the user has access to the specified object(s). If you want to receive notifications for all events, please use a top-level admin user’s `user_id`. */
  user_id?: number;
  /** The HTTP basic auth username of the subscription URL endpoint (if required) */
  http_auth_user?: string | null;
  /** The HTTP basic auth password of the subscription URL endpoint (if required) */
  http_auth_password?: string | null;
  /** The webhook's version. NB! Webhooks v2 is the default from March 17th, 2025. See <a href="https://developers.pipedrive.com/changelog/post/breaking-change-webhooks-v2-will-become-the-new-default-version" target="_blank" rel="noopener noreferrer">this Changelog post</a> for more details. */
  version?: "1.0" | "2.0";
}): Promise<{ success?: boolean } & { status?: string } & { data?: { id?: number; company_id?: number; owner_id?: number; user_id?: number; event_action?: string; event_object?: string; subscription_url?: string; version?: string; is_active?: 0 | 1; add_time?: string; remove_time?: string | null; type?: "general" | "application" | "automation"; http_auth_user?: string | null; http_auth_password?: string | nu...>
```

<sub>`POST /webhooks` · `addWebhook`</sub>

## `pipedrive.deleteWebhook`

Delete existing Webhook

```ts
pipedrive.deleteWebhook(input: {
  /** The ID of the Webhook to delete */
  id: number;
}): Promise<{ success?: boolean } & { status?: string }>
```

<sub>`DELETE /webhooks/{id}` · `deleteWebhook`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
