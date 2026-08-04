# Settings   Tracking

9 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getTrackingSettings`

Retrieve Tracking Settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getTrackingSettings(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ result?: ({ description?: string; enabled?: boolean; name?: string; title?: string })[] }>
```

<sub>`GET /tracking_settings` · `GET_tracking_settings`</sub>

## `sendgrid.getTrackingSettingsClick`

Retrieve Click Track Settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getTrackingSettingsClick(options?: { headers?: { "on-behalf-of"?: string } }): Promise<ClickTracking>
```

<sub>`GET /tracking_settings/click` · `GET_tracking_settings-click`</sub>

## `sendgrid.patchTrackingSettingsClick`

Update Click Tracking Settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchTrackingSettingsClick(input: {
  /** The setting you want to use for click tracking. */
  enabled?: boolean;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ClickTracking>
```

<sub>`PATCH /tracking_settings/click` · `PATCH_tracking_settings-click`</sub>

## `sendgrid.getTrackingSettingsGoogleAnalytics`

Retrieve Google Analytics Settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getTrackingSettingsGoogleAnalytics(options?: { headers?: { "on-behalf-of"?: string } }): Promise<GoogleAnalyticsSettings>
```

<sub>`GET /tracking_settings/google_analytics` · `GET_tracking_settings-google_analytics`</sub>

## `sendgrid.patchTrackingSettingsGoogleAnalytics`

Update Google Analytics Settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchTrackingSettingsGoogleAnalytics(input: {
  /** Indicates if Google Analytics is enabled. */
  enabled?: boolean;
  /** The name of the campaign. */
  utm_campaign?: string;
  /** Used to differentiate ads */
  utm_content?: string;
  /** Name of the marketing medium (e.g. "Email"). */
  utm_medium?: string;
  /** Name of the referrer source.  */
  utm_source?: string;
  /** Any paid keywords. */
  utm_term?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<GoogleAnalyticsSettings>
```

<sub>`PATCH /tracking_settings/google_analytics` · `PATCH_tracking_settings-google_analytics`</sub>

## `sendgrid.getTrackingSettingsOpen`

Get Open Tracking Settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getTrackingSettingsOpen(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ enabled: boolean }>
```

<sub>`GET /tracking_settings/open` · `GET_tracking_settings-open`</sub>

## `sendgrid.patchTrackingSettingsOpen`

Update Open Tracking Settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchTrackingSettingsOpen(input: {
  /** The new status that you want to set for open tracking. */
  enabled?: boolean;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ enabled: boolean }>
```

<sub>`PATCH /tracking_settings/open` · `PATCH_tracking_settings-open`</sub>

## `sendgrid.getTrackingSettingsSubscription`

Retrieve Subscription Tracking Settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getTrackingSettingsSubscription(options?: { headers?: { "on-behalf-of"?: string } }): Promise<SubscriptionTrackingSettings>
```

<sub>`GET /tracking_settings/subscription` · `GET_tracking_settings-subscription`</sub>

## `sendgrid.patchTrackingSettingsSubscription`

Update Subscription Tracking Settings — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchTrackingSettingsSubscription(input: {
  /** Indicates if subscription tracking is enabled. */
  enabled?: boolean;
  /** The information and HTML for your unsubscribe link.  */
  html_content?: string;
  /** The HTML that will be displayed on the page that your customers will see after clicking unsubscribe, hosted on SendGrid’s server. */
  landing?: string;
  /** The information in plain text for your unsubscribe link. You should have the “<% %>” tag in your content, otherwise the user will have no URL for unsubscribing. */
  plain_content?: string;
  /** Your custom defined replacement tag for your templates. Use this tag to place your unsubscribe content anywhere in your emailtemplate. */
  replace?: string;
  /** The URL where you would like your users sent to unsubscribe. */
  url?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<SubscriptionTrackingSettings>
```

<sub>`PATCH /tracking_settings/subscription` · `PATCH_tracking_settings-subscription`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
