# Leads

8 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getLeads`

Get all leads

```ts
pipedrive.getLeads(input: {
  /** For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. */
  limit?: number;
  /** For pagination, the position that represents the first result for the page */
  start?: number;
  /** If supplied, only leads matching the given user will be returned. However, `filter_id` takes precedence over `owner_id` when supplied. */
  owner_id?: number;
  /** If supplied, only leads matching the given person will be returned. However, `filter_id` takes precedence over `person_id` when supplied. */
  person_id?: number;
  /** If supplied, only leads matching the given organization will be returned. However, `filter_id` takes precedence over `organization_id` when supplied. */
  organization_id?: number;
  /** The ID of the filter to use */
  filter_id?: number;
  /** If set, only leads with an `update_time` later than or equal to this time are returned. In ISO 8601 format, e.g. 2025-01-01T10:20:00Z. */
  updated_since?: string;
  /** The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). */
  sort?: "id" | "title" | "owner_id" | "creator_id" | "was_seen" | "expected_close_date" | "next_activity_id" | "add_time" | "update_time";
}): Promise<{ success?: boolean; data?: ({ id?: string; title?: string; owner_id?: number; creator_id?: number; label_ids?: (string)[]; person_id?: number | null; organization_id?: number | null; source_name?: string; origin?: string; origin_id?: string | null; channel?: number | null; channel_id?: string | null; source_deal_id?: number | null; is_archived?: boolean; was_seen?: boolean; value?: { amount: num...>
```

<sub>`GET /leads` · `getLeads`</sub>

## `pipedrive.addLead`

Add a lead

```ts
pipedrive.addLead(input: {
  /** The name of the lead */
  title: string;
  /** The ID of the user which will be the owner of the created lead. If not provided, the user making the request will be used. */
  owner_id?: number;
  /** The IDs of the lead labels which will be associated with the lead */
  label_ids?: (string)[];
  /** The ID of a person which this lead will be linked to. If the person does not exist yet, it needs to be created first. This property is required unless `organization_id` is specified. */
  person_id?: number;
  /** The ID of an organization which this lead will be linked to. If the organization does not exist yet, it needs to be created first. This property is required unless `person_id` is specified. */
  organization_id?: number;
  /** The potential value of the lead represented by a JSON object: `{ "amount": 200, "currency": "EUR" }`. Both amount and currency are required. */
  value?: { amount: number; currency: string } | null;
  /** The date of when the deal which will be created from the lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD. */
  expected_close_date?: string;
  /** The visibility of the lead. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user. Read more about visibility groups <a href="https://support.pipedrive.com/en/article/visibility-groups" target="_blank" rel="noopener noreferrer">here</a>.<h4>Light / Growth and Professional plans</h4><table><tr><th style="width: 40px">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers</td><tr><td>`3`</td><td>Entire company</td></tr></table><h4>Premium / Ultimate plan</h4><table><tr><th style="width: 40px">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner only</td><tr><td>`3`</td><td>Owner's visibility group</td></tr><tr><td>`5`</td><td>Owner's visibility group and sub-groups</td></tr><tr><td>`7`</td><td>Entire company</td></tr></table> */
  visible_to?: "1" | "3" | "5" | "7";
  /** A flag indicating whether the lead was seen by someone in the Pipedrive UI */
  was_seen?: boolean;
  /** The optional ID to further distinguish the origin of the lead - e.g. Which API integration created this lead. If omitted, `origin_id` will be set to null. */
  origin_id?: string | null;
  /** The ID of Marketing channel this lead was created from. Provided value must be one of the channels configured for your company. You can fetch allowed values with <a href="https://developers.pipedrive.com/docs/api/v1/DealFields#getDealField" target="_blank" rel="noopener noreferrer">GET /v1/dealFields</a>. If omitted, channel will be set to null. */
  channel?: number | null;
  /** The optional ID to further distinguish the Marketing channel. If omitted, `channel_id` will be set to null. */
  channel_id?: string | null;
}): Promise<{ success?: boolean; data?: { id?: string; title?: string; owner_id?: number; creator_id?: number; label_ids?: (string)[]; person_id?: number | null; organization_id?: number | null; source_name?: string; origin?: string; origin_id?: string | null; channel?: number | null; channel_id?: string | null; source_deal_id?: number | null; is_archived?: boolean; was_seen?: boolean; value?: { amount: numb...>
```

<sub>`POST /leads` · `addLead`</sub>

## `pipedrive.deleteLead`

Delete a lead

```ts
pipedrive.deleteLead(input: {
  /** The ID of the lead */
  id: string;
}): Promise<{ success?: boolean; data?: { id?: string } }>
```

<sub>`DELETE /leads/{id}` · `deleteLead`</sub>

## `pipedrive.getLead`

Get one lead

```ts
pipedrive.getLead(input: {
  /** The ID of the lead */
  id: string;
}): Promise<{ success?: boolean; data?: { id?: string; title?: string; owner_id?: number; creator_id?: number; label_ids?: (string)[]; person_id?: number | null; organization_id?: number | null; source_name?: string; origin?: string; origin_id?: string | null; channel?: number | null; channel_id?: string | null; source_deal_id?: number | null; is_archived?: boolean; was_seen?: boolean; value?: { amount: numb...>
```

<sub>`GET /leads/{id}` · `getLead`</sub>

## `pipedrive.updateLead`

Update a lead

```ts
pipedrive.updateLead(input: {
  /** The name of the lead */
  title?: string | null;
  /** The ID of the user which will be the owner of the created lead. If not provided, the user making the request will be used. */
  owner_id?: number;
  /** The IDs of the lead labels which will be associated with the lead */
  label_ids?: (string)[];
  /** The ID of a person which this lead will be linked to. If the person does not exist yet, it needs to be created first. A lead always has to be linked to a person or organization or both.  */
  person_id?: number | null;
  /** The ID of an organization which this lead will be linked to. If the organization does not exist yet, it needs to be created first. A lead always has to be linked to a person or organization or both. */
  organization_id?: number | null;
  /** A flag indicating whether the lead is archived or not */
  is_archived?: boolean;
  /** The potential value of the lead represented by a JSON object: `{ "amount": 200, "currency": "EUR" }`. Both amount and currency are required. */
  value?: { amount: number; currency: string } | null;
  /** The date of when the deal which will be created from the lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD. */
  expected_close_date?: string | null;
  /** The visibility of the lead. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user. Read more about visibility groups <a href="https://support.pipedrive.com/en/article/visibility-groups" target="_blank" rel="noopener noreferrer">here</a>.<h4>Light / Growth and Professional plans</h4><table><tr><th style="width: 40px">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers</td><tr><td>`3`</td><td>Entire company</td></tr></table><h4>Premium / Ultimate plan</h4><table><tr><th style="width: 40px">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner only</td><tr><td>`3`</td><td>Owner's visibility group</td></tr><tr><td>`5`</td><td>Owner's visibility group and sub-groups</td></tr><tr><td>`7`</td><td>Entire company</td></tr></table> */
  visible_to?: "1" | "3" | "5" | "7";
  /** A flag indicating whether the lead was seen by someone in the Pipedrive UI */
  was_seen?: boolean;
  /** The ID of Marketing channel this lead was created from. Provided value must be one of the channels configured for your company which you can fetch with <a href="https://developers.pipedrive.com/docs/api/v1/DealFields#getDealField" target="_blank" rel="noopener noreferrer">GET /v1/dealFields</a>. */
  channel?: number | null;
  /** The optional ID to further distinguish the Marketing channel. */
  channel_id?: string | null;
  /** The ID of the lead */
  id: string;
}): Promise<{ success?: boolean; data?: { id?: string; title?: string; owner_id?: number; creator_id?: number; label_ids?: (string)[]; person_id?: number | null; organization_id?: number | null; source_name?: string; origin?: string; origin_id?: string | null; channel?: number | null; channel_id?: string | null; source_deal_id?: number | null; is_archived?: boolean; was_seen?: boolean; value?: { amount: numb...>
```

<sub>`PATCH /leads/{id}` · `updateLead`</sub>

## `pipedrive.getLeadUsers`

List permitted users

```ts
pipedrive.getLeadUsers(input: {
  /** The ID of the lead */
  id: string;
}): Promise<{ success?: boolean } & { data?: (number)[] }>
```

<sub>`GET /leads/{id}/permittedUsers` · `getLeadUsers`</sub>

## `pipedrive.getArchivedLeads`

Get all archived leads

```ts
pipedrive.getArchivedLeads(input: {
  /** For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. */
  limit?: number;
  /** For pagination, the position that represents the first result for the page */
  start?: number;
  /** If supplied, only leads matching the given user will be returned. However, `filter_id` takes precedence over `owner_id` when supplied. */
  owner_id?: number;
  /** If supplied, only leads matching the given person will be returned. However, `filter_id` takes precedence over `person_id` when supplied. */
  person_id?: number;
  /** If supplied, only leads matching the given organization will be returned. However, `filter_id` takes precedence over `organization_id` when supplied. */
  organization_id?: number;
  /** The ID of the filter to use */
  filter_id?: number;
  /** The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). */
  sort?: "id" | "title" | "owner_id" | "creator_id" | "was_seen" | "expected_close_date" | "next_activity_id" | "add_time" | "update_time";
}): Promise<{ success?: boolean; data?: ({ id?: string; title?: string; owner_id?: number; creator_id?: number; label_ids?: (string)[]; person_id?: number | null; organization_id?: number | null; source_name?: string; origin?: string; origin_id?: string | null; channel?: number | null; channel_id?: string | null; source_deal_id?: number | null; is_archived?: boolean; was_seen?: boolean; value?: { amount: num...>
```

<sub>`GET /leads/archived` · `getArchivedLeads`</sub>

## `pipedrive.searchLeads`

Search leads

```ts
pipedrive.searchLeads(input: {
  /** The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded. */
  term: string;
  /** A comma-separated string array. The fields to perform the search from. Defaults to all of them. */
  fields?: "custom_fields" | "notes" | "title";
  /** When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive. */
  exact_match?: boolean;
  /** Will filter leads by the provided person ID. The upper limit of found leads associated with the person is 2000. */
  person_id?: number;
  /** Will filter leads by the provided organization ID. The upper limit of found leads associated with the organization is 2000. */
  organization_id?: number;
  /** Supports including optional fields in the results which are not provided by default */
  include_fields?: "lead.was_seen";
  /** Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter. */
  start?: number;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean } & { data?: { items?: ({ result_score?: number; item?: { id?: string; type?: string; title?: string; owner?: { id?: number }; person?: { id?: number; name?: string }; organization?: { id?: number; name?: string }; phones?: (string)[]; emails?: (string)[]; custom_fields?: (string)[]; notes?: (string)[]; value?: number; currency?: string; visible_to?: number; is_archived?: bool...>
```

<sub>`GET /leads/search` · `searchLeads`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
