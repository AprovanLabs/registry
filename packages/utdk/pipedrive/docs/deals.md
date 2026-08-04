# Deals

19 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getDealChangelog`

List updates about deal field values

```ts
pipedrive.getDealChangelog(input: {
  /** The ID of the deal */
  id: number;
  /** For pagination, the marker (an opaque string value) representing the first item on the next page */
  cursor?: string;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean } & { data?: ({ field_key?: string; old_value?: string | null; new_value?: string | null; actor_user_id?: number; time?: string; change_source?: string | null; change_source_user_agent?: string | null; is_bulk_update_flag?: boolean })[]; additional_data?: { next_cursor?: string } }>
```

<sub>`GET /deals/{id}/changelog` · `getDealChangelog`</sub>

## `pipedrive.duplicateDeal`

Duplicate deal

```ts
pipedrive.duplicateDeal(input: {
  /** The ID of the deal */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number; creator_user_id?: number; user_id?: number; person_id?: number; org_id?: number } & { stage_id?: number; title?: string; value?: number; currency?: string; add_time?: string; update_time?: string; stage_change_time?: string; active?: boolean; deleted?: boolean; is_archived?: boolean; status?: string; probability?: number | null; next_activity_date?: stri...>
```

<sub>`POST /deals/{id}/duplicate` · `duplicateDeal`</sub>

## `pipedrive.getDealFiles`

List files attached to a deal

```ts
pipedrive.getDealFiles(input: {
  /** The ID of the deal */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page. Please note that a maximum value of 100 is allowed. */
  limit?: number;
  /** Supported fields: `id`, `update_time` */
  sort?: string;
}): Promise<{ success?: boolean } & { data?: ({ id?: number; user_id?: number; deal_id?: number; person_id?: number; org_id?: number; product_id?: number; activity_id?: number; lead_id?: string; add_time?: string; update_time?: string; file_name?: string; file_size?: number; active_flag?: boolean; inline_flag?: boolean; remote_location?: string; remote_id?: string; cid?: string; s3_bucket?: string; mail_mess...>
```

<sub>`GET /deals/{id}/files` · `getDealFiles`</sub>

## `pipedrive.getDealUpdates`

List updates about a deal

```ts
pipedrive.getDealUpdates(input: {
  /** The ID of the deal */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
  /** Whether to show custom field updates or not. 1 = Include custom field changes. If omitted returns changes without custom field updates. */
  all_changes?: string;
  /** A comma-separated string for filtering out item specific updates. (Possible values - call, activity, plannedActivity, change, note, deal, file, dealChange, personChange, organizationChange, follower, dealFollower, personFollower, organizationFollower, participant, comment, mailMessage, mailMessageWithAttachment, invoice, document, marketing_campaign_stat, marketing_status_change). */
  items?: string;
}): Promise<{ success?: boolean } & { data?: ({ object?: string; timestamp?: string; data?: { [key: string]: unknown } })[]; additional_data?: { start?: number; limit?: number; more_items_in_collection?: boolean }; related_objects?: { deal?: { DEAL_ID?: { id?: number; title?: string; status?: string; value?: number; currency?: string; stage_id?: number; pipeline_id?: number } }; organization?: { ORGANIZATION...>
```

<sub>`GET /deals/{id}/flow` · `getDealUpdates`</sub>

## `pipedrive.getDealFollowers`

List followers of a deal

```ts
pipedrive.getDealFollowers(input: {
  /** The ID of the deal */
  id: number;
}): Promise<{ success?: boolean } & { data?: ({ user_id?: number; id?: number; deal_id?: number; add_time?: string })[]; additional_data?: { start?: number; limit?: number; more_items_in_collection?: boolean } }>
```

<sub>`GET /deals/{id}/followers` · `getDealFollowers`</sub>

## `pipedrive.addDealFollower`

Add a follower to a deal

```ts
pipedrive.addDealFollower(input: {
  /** The ID of the user */
  user_id: number;
  /** The ID of the deal */
  id: number;
}): Promise<{ success?: boolean; data?: { user_id?: number; id?: number; deal_id?: number; add_time?: string } }>
```

<sub>`POST /deals/{id}/followers` · `addDealFollower`</sub>

## `pipedrive.deleteDealFollower`

Delete a follower from a deal

```ts
pipedrive.deleteDealFollower(input: {
  /** The ID of the deal */
  id: number;
  /** The ID of the relationship between the follower and the deal */
  follower_id: number;
}): Promise<{ success?: boolean; data?: { id?: number } }>
```

<sub>`DELETE /deals/{id}/followers/{follower_id}` · `deleteDealFollower`</sub>

## `pipedrive.getDealMailMessages`

List mail messages associated with a deal

```ts
pipedrive.getDealMailMessages(input: {
  /** The ID of the deal */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
  /** Whether to include the mail message body content in the response. `0` = Don't include, `1` = Include. */
  include_body?: 0 | 1;
}): Promise<{ success?: boolean } & { data?: ({ object?: string; timestamp?: string; data?: { id?: number; from?: ({ id?: number; email_address?: string; name?: string; linked_person_id?: number; linked_person_name?: string; mail_message_party_id?: number })[]; to?: ({ id?: number; email_address?: string; name?: string; linked_person_id?: number; linked_person_name?: string; mail_message_party_id?: number })...>
```

<sub>`GET /deals/{id}/mailMessages` · `getDealMailMessages`</sub>

## `pipedrive.mergeDeals`

Merge two deals

```ts
pipedrive.mergeDeals(input: {
  /** The ID of the deal that the deal will be merged with */
  merge_with_id: number;
  /** The ID of the deal */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number; creator_user_id?: number; user_id?: number; person_id?: number; org_id?: number } & { stage_id?: number; title?: string; value?: number; currency?: string; add_time?: string; update_time?: string; stage_change_time?: string; active?: boolean; deleted?: boolean; is_archived?: boolean; status?: string; probability?: number | null; next_activity_date?: stri...>
```

<sub>`PUT /deals/{id}/merge` · `mergeDeals`</sub>

## `pipedrive.getDealParticipants`

List participants of a deal

```ts
pipedrive.getDealParticipants(input: {
  /** The ID of the deal */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean; data?: ({ id?: number; person_id?: { active_flag?: boolean; name?: string; email?: ({ value?: string; primary?: boolean; label?: string })[]; phone?: ({ value?: string; primary?: boolean; label?: string })[]; owner_id?: number; company_id?: number; value?: number }; add_time?: string; active_flag?: boolean; related_item_data?: { deal_id?: number; title?: string }; person?: { ...>
```

<sub>`GET /deals/{id}/participants` · `getDealParticipants`</sub>

## `pipedrive.addDealParticipant`

Add a participant to a deal

```ts
pipedrive.addDealParticipant(input: {
  /** The ID of the person */
  person_id: number;
  /** The ID of the deal */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number; person_id?: { active_flag?: boolean; name?: string; email?: ({ value?: string; primary?: boolean; label?: string })[]; phone?: ({ value?: string; primary?: boolean; label?: string })[]; owner_id?: number; company_id?: number; value?: number }; add_time?: string; active_flag?: boolean; related_item_data?: { deal_id?: number; title?: string }; person?: { i...>
```

<sub>`POST /deals/{id}/participants` · `addDealParticipant`</sub>

## `pipedrive.deleteDealParticipant`

Delete a participant from a deal

```ts
pipedrive.deleteDealParticipant(input: {
  /** The ID of the deal */
  id: number;
  /** The ID of the participant of the deal */
  deal_participant_id: number;
}): Promise<{ success?: boolean; data?: { id?: number } }>
```

<sub>`DELETE /deals/{id}/participants/{deal_participant_id}` · `deleteDealParticipant`</sub>

## `pipedrive.getDealParticipantsChangelog`

List updates about participants of a deal

```ts
pipedrive.getDealParticipantsChangelog(input: {
  /** The ID of the deal */
  id: number;
  /** Items shown per page */
  limit?: number;
  /** For pagination, the marker (an opaque string value) representing the first item on the next page */
  cursor?: string;
}): Promise<{ success?: boolean; data?: ({ actor_user_id?: number; person_id?: number; action?: string; time?: string })[]; additional_data?: { start?: number; limit?: number; more_items_in_collection?: boolean } }>
```

<sub>`GET /deals/{id}/participantsChangelog` · `getDealParticipantsChangelog`</sub>

## `pipedrive.getDealUsers`

List permitted users

```ts
pipedrive.getDealUsers(input: {
  /** The ID of the deal */
  id: number;
}): Promise<{ success?: boolean }>
```

<sub>`GET /deals/{id}/permittedUsers` · `getDealUsers`</sub>

## `pipedrive.getArchivedDeals`

Get all archived deals

```ts
pipedrive.getArchivedDeals(input: {
  /** If supplied, only deals matching the given user will be returned. However, `filter_id` and `owned_by_you` takes precedence over `user_id` when supplied. */
  user_id?: number;
  /** The ID of the filter to use */
  filter_id?: number;
  /** If supplied, only deals linked to the specified person are returned. If filter_id is provided, this is ignored. */
  person_id?: number;
  /** If supplied, only deals linked to the specified organization are returned. If filter_id is provided, this is ignored. */
  org_id?: number;
  /** If supplied, only deals linked to the specified product are returned. If filter_id is provided, this is ignored. */
  product_id?: number;
  /** If supplied, only deals in the specified pipeline are returned. If filter_id is provided, this is ignored. */
  pipeline_id?: number;
  /** If supplied, only deals in the specified stage are returned. If filter_id is provided, this is ignored. */
  stage_id?: number;
  /** Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included. */
  status?: "open" | "won" | "lost" | "deleted" | "all_not_deleted";
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
  /** The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). */
  sort?: string;
  /** When supplied, only deals owned by you are returned. However, `filter_id` takes precedence over `owned_by_you` when both are supplied. */
  owned_by_you?: 0 | 1;
}): Promise<{ success?: boolean; data?: ({ id?: number; creator_user_id?: { id?: number; name?: string; email?: string; has_pic?: boolean; pic_hash?: string | null; active_flag?: boolean; value?: number }; user_id?: { id?: number; name?: string; email?: string; has_pic?: boolean; pic_hash?: string | null; active_flag?: boolean } & { value?: number }; person_id?: { active_flag?: boolean; name?: string; email?...>
```

<sub>`GET /deals/archived` · `getArchivedDeals`</sub>

## `pipedrive.getDealsSummary`

Get deals summary

```ts
pipedrive.getDealsSummary(input: {
  /** Only fetch deals with a specific status. open = Open, won = Won, lost = Lost. */
  status?: "open" | "won" | "lost";
  /** <code>user_id</code> will not be considered. Only deals matching the given filter will be returned. */
  filter_id?: number;
  /** Only deals matching the given user will be returned. `user_id` will not be considered if you use `filter_id`. */
  user_id?: number;
  /** Only deals within the given pipeline will be returned */
  pipeline_id?: number;
  /** Only deals within the given stage will be returned */
  stage_id?: number;
}): Promise<{ success?: boolean; data?: { values_total?: { value?: number; count?: number; value_converted?: number; value_formatted?: string; value_converted_formatted?: string }; weighted_values_total?: { value?: number; count?: number; value_formatted?: string }; total_count?: number; total_currency_converted_value?: number; total_weighted_currency_converted_value?: number; total_currency_converted_value_...>
```

<sub>`GET /deals/summary` · `getDealsSummary`</sub>

## `pipedrive.getArchivedDealsSummary`

Get archived deals summary

```ts
pipedrive.getArchivedDealsSummary(input: {
  /** Only fetch deals with a specific status. open = Open, won = Won, lost = Lost. */
  status?: "open" | "won" | "lost";
  /** <code>user_id</code> will not be considered. Only deals matching the given filter will be returned. */
  filter_id?: number;
  /** Only deals matching the given user will be returned. `user_id` will not be considered if you use `filter_id`. */
  user_id?: number;
  /** Only deals within the given pipeline will be returned */
  pipeline_id?: number;
  /** Only deals within the given stage will be returned */
  stage_id?: number;
}): Promise<{ success?: boolean; data?: { values_total?: { value?: number; count?: number; value_converted?: number; value_formatted?: string; value_converted_formatted?: string }; weighted_values_total?: { value?: number; count?: number; value_formatted?: string }; total_count?: number; total_currency_converted_value?: number; total_weighted_currency_converted_value?: number; total_currency_converted_value_...>
```

<sub>`GET /deals/summary/archived` · `getArchivedDealsSummary`</sub>

## `pipedrive.getDealsTimeline`

Get deals timeline

```ts
pipedrive.getDealsTimeline(input: {
  /** The date when the first interval starts. Format: YYYY-MM-DD. */
  start_date: string;
  /** The type of the interval<table><tr><th>Value</th><th>Description</th></tr><tr><td>`day`</td><td>Day</td></tr><tr><td>`week`</td><td>A full week (7 days) starting from `start_date`</td></tr><tr><td>`month`</td><td>A full month (depending on the number of days in given month) starting from `start_date`</td></tr><tr><td>`quarter`</td><td>A full quarter (3 months) starting from `start_date`</td></tr></table> */
  interval: "day" | "week" | "month" | "quarter";
  /** The number of given intervals, starting from `start_date`, to fetch. E.g. 3 (months). */
  amount: number;
  /** The date field key which deals will be retrieved from */
  field_key: string;
  /** If supplied, only deals matching the given user will be returned */
  user_id?: number;
  /** If supplied, only deals matching the given pipeline will be returned */
  pipeline_id?: number;
  /** If supplied, only deals matching the given filter will be returned */
  filter_id?: number;
  /** Whether to exclude deals list (1) or not (0). Note that when deals are excluded, the timeline summary (counts and values) is still returned. */
  exclude_deals?: 0 | 1;
  /** The 3-letter currency code of any of the supported currencies. When supplied, `totals_converted` is returned per each interval which contains the currency-converted total amounts in the given currency. You may also set this parameter to `default_currency` in which case the user's default currency is used. */
  totals_convert_currency?: string;
}): Promise<{ success?: boolean; data?: { period_start?: string; period_end?: string; deals?: ({ id?: number; creator_user_id?: number; user_id?: number; person_id?: number; org_id?: number } & { stage_id?: number; title?: string; value?: number; currency?: string; add_time?: string; update_time?: string; stage_change_time?: string; active?: boolean; deleted?: boolean; is_archived?: boolean; status?: string;...>
```

<sub>`GET /deals/timeline` · `getDealsTimeline`</sub>

## `pipedrive.getArchivedDealsTimeline`

Get archived deals timeline

```ts
pipedrive.getArchivedDealsTimeline(input: {
  /** The date when the first interval starts. Format: YYYY-MM-DD. */
  start_date: string;
  /** The type of the interval<table><tr><th>Value</th><th>Description</th></tr><tr><td>`day`</td><td>Day</td></tr><tr><td>`week`</td><td>A full week (7 days) starting from `start_date`</td></tr><tr><td>`month`</td><td>A full month (depending on the number of days in given month) starting from `start_date`</td></tr><tr><td>`quarter`</td><td>A full quarter (3 months) starting from `start_date`</td></tr></table> */
  interval: "day" | "week" | "month" | "quarter";
  /** The number of given intervals, starting from `start_date`, to fetch. E.g. 3 (months). */
  amount: number;
  /** The date field key which deals will be retrieved from */
  field_key: string;
  /** If supplied, only deals matching the given user will be returned */
  user_id?: number;
  /** If supplied, only deals matching the given pipeline will be returned */
  pipeline_id?: number;
  /** If supplied, only deals matching the given filter will be returned */
  filter_id?: number;
  /** Whether to exclude deals list (1) or not (0). Note that when deals are excluded, the timeline summary (counts and values) is still returned. */
  exclude_deals?: 0 | 1;
  /** The 3-letter currency code of any of the supported currencies. When supplied, `totals_converted` is returned per each interval which contains the currency-converted total amounts in the given currency. You may also set this parameter to `default_currency` in which case the user's default currency is used. */
  totals_convert_currency?: string;
}): Promise<{ success?: boolean; data?: { period_start?: string; period_end?: string; deals?: ({ id?: number; creator_user_id?: number; user_id?: number; person_id?: number; org_id?: number } & { stage_id?: number; title?: string; value?: number; currency?: string; add_time?: string; update_time?: string; stage_change_time?: string; active?: boolean; deleted?: boolean; is_archived?: boolean; status?: string;...>
```

<sub>`GET /deals/timeline/archived` · `getArchivedDealsTimeline`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
