# Persons

12 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getPersonChangelog`

List updates about person field values

```ts
pipedrive.getPersonChangelog(input: {
  /** The ID of the person */
  id: number;
  /** For pagination, the marker (an opaque string value) representing the first item on the next page */
  cursor?: string;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean } & { data?: ({ field_key?: string; old_value?: string | null; new_value?: string | null; actor_user_id?: number; time?: string; change_source?: string | null; change_source_user_agent?: string | null; is_bulk_update_flag?: boolean })[]; additional_data?: { next_cursor?: string } }>
```

<sub>`GET /persons/{id}/changelog` · `getPersonChangelog`</sub>

## `pipedrive.getPersonFiles`

List files attached to a person

```ts
pipedrive.getPersonFiles(input: {
  /** The ID of the person */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page. Please note that a maximum value of 100 is allowed. */
  limit?: number;
  /** Supported fields: `id`, `update_time` */
  sort?: string;
}): Promise<{ success?: boolean } & { data?: ({ id?: number; user_id?: number; deal_id?: number; person_id?: number; org_id?: number; product_id?: number; activity_id?: number; lead_id?: string; add_time?: string; update_time?: string; file_name?: string; file_size?: number; active_flag?: boolean; inline_flag?: boolean; remote_location?: string; remote_id?: string; cid?: string; s3_bucket?: string; mail_mess...>
```

<sub>`GET /persons/{id}/files` · `getPersonFiles`</sub>

## `pipedrive.getPersonUpdates`

List updates about a person

```ts
pipedrive.getPersonUpdates(input: {
  /** The ID of the person */
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

<sub>`GET /persons/{id}/flow` · `getPersonUpdates`</sub>

## `pipedrive.getPersonFollowers`

List followers of a person

```ts
pipedrive.getPersonFollowers(input: {
  /** The ID of the person */
  id: number;
}): Promise<{ success?: boolean } & { data?: ({ user_id?: number; id?: number; deal_id?: number; add_time?: string })[]; additional_data?: { start?: number; limit?: number; more_items_in_collection?: boolean } }>
```

<sub>`GET /persons/{id}/followers` · `getPersonFollowers`</sub>

## `pipedrive.addPersonFollower`

Add a follower to a person

```ts
pipedrive.addPersonFollower(input: {
  /** The ID of the user */
  user_id: number;
  /** The ID of the person */
  id: number;
}): Promise<{ success?: boolean } & { data?: { user_id?: number; id?: number; person_id?: number; add_time?: string } }>
```

<sub>`POST /persons/{id}/followers` · `addPersonFollower`</sub>

## `pipedrive.deletePersonFollower`

Delete a follower from a person

```ts
pipedrive.deletePersonFollower(input: {
  /** The ID of the person */
  id: number;
  /** The ID of the relationship between the follower and the person */
  follower_id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number } }>
```

<sub>`DELETE /persons/{id}/followers/{follower_id}` · `deletePersonFollower`</sub>

## `pipedrive.getPersonMailMessages`

List mail messages associated with a person

```ts
pipedrive.getPersonMailMessages(input: {
  /** The ID of the person */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
  /** Whether to include the mail message body content in the response. `0` = Don't include, `1` = Include. */
  include_body?: 0 | 1;
}): Promise<{ success?: boolean } & { data?: ({ object?: string; timestamp?: string; data?: { id?: number; from?: ({ id?: number; email_address?: string; name?: string; linked_person_id?: number; linked_person_name?: string; mail_message_party_id?: number })[]; to?: ({ id?: number; email_address?: string; name?: string; linked_person_id?: number; linked_person_name?: string; mail_message_party_id?: number })...>
```

<sub>`GET /persons/{id}/mailMessages` · `getPersonMailMessages`</sub>

## `pipedrive.mergePersons`

Merge two persons

```ts
pipedrive.mergePersons(input: {
  /** The ID of the person that will not be overwritten. This person’s data will be prioritized in case of conflict with the other person. */
  merge_with_id: number;
  /** The ID of the person */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number; company_id?: number; active_flag?: boolean; phone?: ({ value?: string; primary?: boolean; label?: string })[]; email?: ({ value?: string; primary?: boolean; label?: string })[]; first_char?: string; add_time?: string; update_time?: string; visible_to?: string; picture_id?: { id?: number; item_type?: string; item_id?: number; active_flag?: boolean; a...>
```

<sub>`PUT /persons/{id}/merge` · `mergePersons`</sub>

## `pipedrive.getPersonUsers`

List permitted users

```ts
pipedrive.getPersonUsers(input: {
  /** The ID of the person */
  id: number;
}): Promise<{ success?: boolean } & { data?: (number)[] }>
```

<sub>`GET /persons/{id}/permittedUsers` · `getPersonUsers`</sub>

## `pipedrive.deletePersonPicture`

Delete person picture

```ts
pipedrive.deletePersonPicture(input: {
  /** The ID of the person */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number } }>
```

<sub>`DELETE /persons/{id}/picture` · `deletePersonPicture`</sub>

## `pipedrive.addPersonPicture`

Add person picture

```ts
pipedrive.addPersonPicture(input: {
  /** One image supplied in the multipart/form-data encoding */
  file: string;
  /** X coordinate to where start cropping form (in pixels) */
  crop_x?: number;
  /** Y coordinate to where start cropping form (in pixels) */
  crop_y?: number;
  /** The width of the cropping area (in pixels) */
  crop_width?: number;
  /** The height of the cropping area (in pixels) */
  crop_height?: number;
  /** The ID of the person */
  id: number;
}): Promise<{ success?: boolean } & { data?: { PICTURE_ID?: { id?: number } & { item_type?: string; item_id?: number; active_flag?: boolean; add_time?: string; update_time?: string; added_by_user_id?: number; pictures?: { "128"?: string; "512"?: string } } } }>
```

<sub>`POST /persons/{id}/picture` · `addPersonPicture`</sub>

## `pipedrive.getPersonProducts`

List products associated with a person

```ts
pipedrive.getPersonProducts(input: {
  /** The ID of the person */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean } & { data?: ({ DEAL_ID?: { deal?: { id?: number; company_id?: number; creator_user_id?: number; user_id?: number; person_id?: number; org_id?: number; stage_id?: number; title?: string; value?: number; currency?: string; add_time?: string; first_add_time?: string; update_time?: string; stage_change_time?: string; active?: boolean; deleted?: boolean; status?: string; probabili...>
```

<sub>`GET /persons/{id}/products` · `getPersonProducts`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
