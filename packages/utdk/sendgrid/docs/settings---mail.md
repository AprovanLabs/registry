# Settings   Mail

13 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getMailSettings`

Retrieve all mail settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMailSettings(input: {
  /** The number of settings to return. */
  limit?: number;
  /** Where in the list of results to begin displaying settings. */
  offset?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ result: ({ description: string; enabled: boolean; name: string; title: string })[] }>
```

<sub>`GET /mail_settings` · `GET_mail_settings`</sub>

## `sendgrid.getMailSettingsAddressWhitelist`

Retrieve address whitelist mail settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMailSettingsAddressWhitelist(options?: { headers?: { "on-behalf-of"?: string } }): Promise<MailSettingsAddressWhitelabel>
```

<sub>`GET /mail_settings/address_whitelist` · `GET_mail_settings-address_whitelist`</sub>

## `sendgrid.patchMailSettingsAddressWhitelist`

Update address whitelist mail settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchMailSettingsAddressWhitelist(input: {
  /** Indicates if your email address whitelist is enabled. */
  enabled?: boolean;
  /** Either a single email address that you want whitelisted or a domain, for which all email addresses belonging to this domain will be whitelisted. */
  list?: (string)[];
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<MailSettingsAddressWhitelabel>
```

<sub>`PATCH /mail_settings/address_whitelist` · `PATCH_mail_settings-address_whitelist`</sub>

## `sendgrid.getMailSettingsBouncePurge`

Retrieve bounce purge mail settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMailSettingsBouncePurge(options?: { headers?: { "on-behalf-of"?: string } }): Promise<MailSettingsBouncePurge>
```

<sub>`GET /mail_settings/bounce_purge` · `GET_mail_settings-bounce_purge`</sub>

## `sendgrid.patchMailSettingsBouncePurge`

Update bounce purge mail settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchMailSettingsBouncePurge(input: {
  /** Indicates if the bounce purge mail setting is enabled. */
  enabled?: boolean;
  /** The number of days after which SendGrid will purge all contacts from your hard bounces suppression lists. */
  hard_bounces?: number | null;
  /** The number of days after which SendGrid will purge all contacts from your soft bounces suppression lists. */
  soft_bounces?: number | null;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<MailSettingsBouncePurge>
```

<sub>`PATCH /mail_settings/bounce_purge` · `PATCH_mail_settings-bounce_purge`</sub>

## `sendgrid.getMailSettingsFooter`

Retrieve footer mail settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMailSettingsFooter(options?: { headers?: { "on-behalf-of"?: string } }): Promise<MailSettingsFooter>
```

<sub>`GET /mail_settings/footer` · `GET_mail_settings-footer`</sub>

## `sendgrid.patchMailSettingsFooter`

Update footer mail settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchMailSettingsFooter(input: {
  /** Indicates if the Footer mail setting is currently enabled. */
  enabled?: boolean;
  /** The custom HTML content of your email footer. */
  html_content?: string;
  /** The plain text content of your email footer. */
  plain_content?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<MailSettingsFooter>
```

<sub>`PATCH /mail_settings/footer` · `PATCH_mail_settings-footer`</sub>

## `sendgrid.getMailSettingsForwardBounce`

Retrieve forward bounce mail settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMailSettingsForwardBounce(options?: { headers?: { "on-behalf-of"?: string } }): Promise<MailSettingsForwardBounce>
```

<sub>`GET /mail_settings/forward_bounce` · `GET_mail_settings-forward_bounce`</sub>

## `sendgrid.patchMailSettingsForwardBounce`

Update forward bounce mail settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchMailSettingsForwardBounce(input: {
  /** The email address that you would like your bounce reports forwarded to. */
  email?: string | null;
  /** Indicates if the bounce forwarding mail setting is enabled. */
  enabled?: boolean;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<MailSettingsForwardBounce>
```

<sub>`PATCH /mail_settings/forward_bounce` · `PATCH_mail_settings-forward_bounce`</sub>

## `sendgrid.getMailSettingsForwardSpam`

Retrieve forward spam mail settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMailSettingsForwardSpam(options?: { headers?: { "on-behalf-of"?: string } }): Promise<MailSettingsForwardSpam>
```

<sub>`GET /mail_settings/forward_spam` · `GET_mail_settings-forward_spam`</sub>

## `sendgrid.patchMailSettingsForwardSpam`

Update forward spam mail settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchMailSettingsForwardSpam(input: {
  /** The email address where you would like the spam reports to be forwarded. */
  email?: string;
  /** Indicates if the Forward Spam setting is enabled. */
  enabled?: boolean;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<MailSettingsForwardSpam>
```

<sub>`PATCH /mail_settings/forward_spam` · `PATCH_mail_settings-forward_spam`</sub>

## `sendgrid.getMailSettingsTemplate`

Retrieve legacy template mail settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMailSettingsTemplate(options?: { headers?: { "on-behalf-of"?: string } }): Promise<MailSettingsTemplate>
```

<sub>`GET /mail_settings/template` · `GET_mail_settings-template`</sub>

## `sendgrid.patchMailSettingsTemplate`

Update template mail settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchMailSettingsTemplate(input: {
  /** Indicates if you want to enable the legacy email template mail setting. */
  enabled?: boolean;
  /** The new HTML content for your legacy email template. */
  html_content?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ enabled: boolean; html_content: string }>
```

<sub>`PATCH /mail_settings/template` · `PATCH_mail_settings-template`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
