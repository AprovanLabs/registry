# Campaigns API

11 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getCampaigns`

Retrieve all Campaigns — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getCampaigns(input: {
  /** The number of results you would like to receive at a time. */
  limit?: number;
  /** The index of the first campaign to return, where 0 is the first campaign. */
  offset?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ result?: (CampaignResponse)[] }>
```

<sub>`GET /campaigns` · `GET_campaigns`</sub>

## `sendgrid.postCampaigns`

Create a Campaign — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postCampaigns(input: {
  /** The categories you would like associated to this campaign. */
  categories?: (string)[] | null;
  /** This is the url of the custom unsubscribe page that you provide for customers to unsubscribe from your suppression groups. */
  custom_unsubscribe_url?: string | null;
  /** The editor used in the UI. */
  editor?: "code" | "design";
  /** The HTML of your marketing email. */
  html_content?: string | null;
  /** The pool of IPs that you would like to send this email from. */
  ip_pool?: string | null;
  /** The IDs of the lists you are sending this campaign to. You can have both segment IDs and list IDs */
  list_ids?: (number)[] | null;
  /** The plain text content of your emails. */
  plain_content?: string | null;
  /** The segment IDs that you are sending this list to. You can have both segment IDs and list IDs. Segments are limited to 10 segment IDs. */
  segment_ids?: (number)[] | null;
  /** The ID of the "sender" identity that you have created. Your recipients will see this as the "from" on your marketing emails. */
  sender_id?: number | null;
  /** The subject of your campaign that your recipients will see. */
  subject?: string | null;
  /** The suppression group that this marketing email belongs to, allowing recipients to opt-out of emails of this type. */
  suppression_group_id?: number | null;
  /** The display title of your campaign. This will be viewable by you in the Marketing Campaigns UI. */
  title: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<CampaignResponse>
```

<sub>`POST /campaigns` · `POST_campaigns`</sub>

## `sendgrid.deleteCampaignsCampaignId`

Delete a Campaign — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteCampaignsCampaignId(input: {
  /** The id of the campaign you would like to retrieve. */
  campaign_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<unknown>
```

<sub>`DELETE /campaigns/{campaign_id}` · `DELETE_campaigns-campaign_id`</sub>

## `sendgrid.getCampaignsCampaignId`

Retrieve a single campaign — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getCampaignsCampaignId(input: {
  /** The id of the campaign you would like to retrieve. */
  campaign_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ categories?: (string)[]; custom_unsubscribe_url?: string; html_content?: string; id?: number; ip_pool?: string; list_ids?: (number)[]; plain_content?: string; segment_ids?: (number)[]; sender_id?: number; status?: string; subject?: string; suppression_group_id?: number; title?: string }>
```

<sub>`GET /campaigns/{campaign_id}` · `GET_campaigns-campaign_id`</sub>

## `sendgrid.patchCampaignsCampaignId`

Update a Campaign — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchCampaignsCampaignId(input: {
  /** The categories you want to tag on this campaign. */
  categories: (string)[];
  /** The HTML content of this campaign. */
  html_content: string;
  /** The plain content of this campaign. */
  plain_content: string;
  /** The subject line for your campaign. */
  subject: string;
  /** The title of the campaign. */
  title: string;
  /** The id of the campaign you would like to retrieve. */
  campaign_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<CampaignResponse>
```

<sub>`PATCH /campaigns/{campaign_id}` · `PATCH_campaigns-campaign_id`</sub>

## `sendgrid.deleteCampaignsCampaignIdSchedules`

Unschedule a Scheduled Campaign — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteCampaignsCampaignIdSchedules(input: {
  campaign_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<unknown>
```

<sub>`DELETE /campaigns/{campaign_id}/schedules` · `DELETE_campaigns-campaign_id-schedules`</sub>

## `sendgrid.getCampaignsCampaignIdSchedules`

View Scheduled Time of a Campaign — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getCampaignsCampaignIdSchedules(input: {
  campaign_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ send_at: number }>
```

<sub>`GET /campaigns/{campaign_id}/schedules` · `GET_campaigns-campaign_id-schedules`</sub>

## `sendgrid.patchCampaignsCampaignIdSchedules`

Update a Scheduled Campaign — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchCampaignsCampaignIdSchedules(input: {
  send_at: number;
  campaign_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ id: number; send_at: number; status: string }>
```

<sub>`PATCH /campaigns/{campaign_id}/schedules` · `PATCH_campaigns-campaign_id-schedules`</sub>

## `sendgrid.postCampaignsCampaignIdSchedules`

Schedule a Campaign — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postCampaignsCampaignIdSchedules(input: {
  /** The unix timestamp for the date and time you would like your campaign to be sent out. */
  send_at: number;
  campaign_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ id: number; send_at: number; status: "Scheduled" }>
```

<sub>`POST /campaigns/{campaign_id}/schedules` · `POST_campaigns-campaign_id-schedules`</sub>

## `sendgrid.postCampaignsCampaignIdSchedulesNow`

Send a Campaign — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postCampaignsCampaignIdSchedulesNow(input: {
  campaign_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ id: number; status: string }>
```

<sub>`POST /campaigns/{campaign_id}/schedules/now` · `POST_campaigns-campaign_id-schedules-now`</sub>

## `sendgrid.postCampaignsCampaignIdSchedulesTest`

Send a Test Campaign — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postCampaignsCampaignIdSchedulesTest(input: {
  /** The email address that should receive the test campaign. */
  to: string;
  campaign_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ to: string }>
```

<sub>`POST /campaigns/{campaign_id}/schedules/test` · `POST_campaigns-campaign_id-schedules-test`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
