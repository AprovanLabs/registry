# Organizations

9 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getOrganizationChangelog`

List updates about organization field values

```ts
pipedrive.getOrganizationChangelog(input: {
  /** The ID of the organization */
  id: number;
  /** For pagination, the marker (an opaque string value) representing the first item on the next page */
  cursor?: string;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean } & { data?: ({ field_key?: string; old_value?: string | null; new_value?: string | null; actor_user_id?: number; time?: string; change_source?: string | null; change_source_user_agent?: string | null; is_bulk_update_flag?: boolean })[]; additional_data?: { next_cursor?: string } }>
```

<sub>`GET /organizations/{id}/changelog` · `getOrganizationChangelog`</sub>

## `pipedrive.getOrganizationFiles`

List files attached to an organization

```ts
pipedrive.getOrganizationFiles(input: {
  /** The ID of the organization */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page. Please note that a maximum value of 100 is allowed. */
  limit?: number;
  /** Supported fields: `id`, `update_time` */
  sort?: string;
}): Promise<{ success?: boolean } & { data?: ({ id?: number; user_id?: number; deal_id?: number; person_id?: number; org_id?: number; product_id?: number; activity_id?: number; lead_id?: string; add_time?: string; update_time?: string; file_name?: string; file_size?: number; active_flag?: boolean; inline_flag?: boolean; remote_location?: string; remote_id?: string; cid?: string; s3_bucket?: string; mail_mess...>
```

<sub>`GET /organizations/{id}/files` · `getOrganizationFiles`</sub>

## `pipedrive.getOrganizationUpdates`

List updates about an organization

```ts
pipedrive.getOrganizationUpdates(input: {
  /** The ID of the organization */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
  /** Whether to show custom field updates or not. 1 = Include custom field changes. If omitted, returns changes without custom field updates. */
  all_changes?: string;
  /** A comma-separated string for filtering out item specific updates. (Possible values - activity, plannedActivity, note, file, change, deal, follower, participant, mailMessage, mailMessageWithAttachment, invoice, activityFile, document). */
  items?: string;
}): Promise<{ success?: boolean } & { data?: ({ object?: string; timestamp?: string; data?: { [key: string]: unknown } })[]; additional_data?: { start?: number; limit?: number; more_items_in_collection?: boolean }; related_objects?: { organization?: { ORGANIZATION_ID?: { id?: number } & { name?: string; people_count?: number; owner_id?: number; address?: string | null; cc_email?: string | null } }; user?: { ...>
```

<sub>`GET /organizations/{id}/flow` · `getOrganizationUpdates`</sub>

## `pipedrive.getOrganizationFollowers`

List followers of an organization

```ts
pipedrive.getOrganizationFollowers(input: {
  /** The ID of the organization */
  id: number;
}): Promise<{ success?: boolean; data?: ({ org_id?: number } & { user_id?: number; id?: number; add_time?: string })[]; additional_data?: { pagination?: { start?: number; limit?: number; more_items_in_collection?: boolean; next_start?: number } } }>
```

<sub>`GET /organizations/{id}/followers` · `getOrganizationFollowers`</sub>

## `pipedrive.addOrganizationFollower`

Add a follower to an organization

```ts
pipedrive.addOrganizationFollower(input: {
  /** The ID of the user */
  user_id: number;
  /** The ID of the organization */
  id: number;
}): Promise<{ success?: boolean; data?: { org_id?: number } & { user_id?: number; id?: number; add_time?: string } }>
```

<sub>`POST /organizations/{id}/followers` · `addOrganizationFollower`</sub>

## `pipedrive.deleteOrganizationFollower`

Delete a follower from an organization

```ts
pipedrive.deleteOrganizationFollower(input: {
  /** The ID of the organization */
  id: number;
  /** The ID of the relationship between the follower and the organization */
  follower_id: number;
}): Promise<{ success?: boolean; data?: { id?: number } }>
```

<sub>`DELETE /organizations/{id}/followers/{follower_id}` · `deleteOrganizationFollower`</sub>

## `pipedrive.getOrganizationMailMessages`

List mail messages associated with an organization

```ts
pipedrive.getOrganizationMailMessages(input: {
  /** The ID of the organization */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
  /** Whether to include the mail message body content in the response. `0` = Don't include, `1` = Include. */
  include_body?: 0 | 1;
}): Promise<{ success?: boolean } & { data?: ({ object?: string; timestamp?: string; data?: { id?: number; from?: ({ id?: number; email_address?: string; name?: string; linked_person_id?: number; linked_person_name?: string; mail_message_party_id?: number })[]; to?: ({ id?: number; email_address?: string; name?: string; linked_person_id?: number; linked_person_name?: string; mail_message_party_id?: number })...>
```

<sub>`GET /organizations/{id}/mailMessages` · `getOrganizationMailMessages`</sub>

## `pipedrive.mergeOrganizations`

Merge two organizations

```ts
pipedrive.mergeOrganizations(input: {
  /** The ID of the organization that the organization will be merged with */
  merge_with_id: number;
  /** The ID of the organization */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number } }>
```

<sub>`PUT /organizations/{id}/merge` · `mergeOrganizations`</sub>

## `pipedrive.getOrganizationUsers`

List permitted users

```ts
pipedrive.getOrganizationUsers(input: {
  /** The ID of the organization */
  id: number;
}): Promise<{ success?: boolean } & { data?: (number)[] }>
```

<sub>`GET /organizations/{id}/permittedUsers` · `getOrganizationUsers`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
