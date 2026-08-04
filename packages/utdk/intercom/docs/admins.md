# Admins

5 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.listAdmins`

List all admins — [Provider docs](https://developers.intercom.com)

```ts
intercom.listAdmins(input: {
  /** If set to true, the response will include the admin's avatar object containing the image URL. Defaults to false. */
  display_avatar?: boolean;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<AdminList>
```

<sub>`GET /admins` · `listAdmins`</sub>

## `intercom.retrieveAdmin`

Retrieve an admin — [Provider docs](https://developers.intercom.com)

```ts
intercom.retrieveAdmin(input: {
  /** The unique identifier of a given admin */
  admin_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Admin>
```

<sub>`GET /admins/{admin_id}` · `retrieveAdmin`</sub>

## `intercom.setAwayAdmin`

Set an admin to away — [Provider docs](https://developers.intercom.com)

```ts
intercom.setAwayAdmin(input: {
  /** Set to "true" to change the status of the admin to away. */
  away_mode_enabled: boolean;
  /** Set to "true" to assign any new conversation replies to your default inbox. */
  away_mode_reassign: boolean;
  /** The unique identifier of the away status reason */
  away_status_reason_id?: number;
  /** The unique identifier of a given admin */
  admin_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Admin>
```

<sub>`PUT /admins/{admin_id}/away` · `setAwayAdmin`</sub>

## `intercom.listActivityLogs`

List all activity logs — [Provider docs](https://developers.intercom.com)

```ts
intercom.listActivityLogs(input: {
  /** The start date that you request data for. It must be formatted as a UNIX timestamp. */
  created_at_after: string;
  /** The end date that you request data for. It must be formatted as a UNIX timestamp. */
  created_at_before?: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ActivityLogList>
```

<sub>`GET /admins/activity_logs` · `listActivityLogs`</sub>

## `intercom.identifyAdmin`

Identify an admin — [Provider docs](https://developers.intercom.com)

```ts
intercom.identifyAdmin(options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<AdminWithApp>
```

<sub>`GET /me` · `identifyAdmin`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
