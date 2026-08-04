# CallLogs

5 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getUserCallLogs`

Get all call logs assigned to a particular user

```ts
pipedrive.getUserCallLogs(input: {
  /** Pagination start */
  start?: number;
  /** For pagination, the limit of entries to be returned. The upper limit is 50. */
  limit?: number;
}): Promise<{ success?: boolean; data?: ({ user_id?: number; activity_id?: number; subject?: string; duration?: string; outcome: "connected" | "no_answer" | "left_message" | "left_voicemail" | "wrong_number" | "busy"; from_phone_number?: string; to_phone_number: string; start_time: string; end_time: string; person_id?: number; org_id?: number; deal_id?: number; lead_id?: string; note?: string } & { id?: stri...>
```

<sub>`GET /callLogs` · `getUserCallLogs`</sub>

## `pipedrive.addCallLog`

Add a call log

```ts
pipedrive.addCallLog(input: {
  /** The ID of the owner of the call log. Please note that a user without account settings access cannot create call logs for other users. */
  user_id?: number;
  /** If specified, this activity will be converted into a call log, with the information provided. When this field is used, you don't need to specify `deal_id`, `person_id` or `org_id`, as they will be ignored in favor of the values already available in the activity. The `activity_id` must refer to a `call` type activity. */
  activity_id?: number;
  /** The name of the activity this call is attached to */
  subject?: string;
  /** The duration of the call in seconds */
  duration?: string;
  /** Describes the outcome of the call */
  outcome: "connected" | "no_answer" | "left_message" | "left_voicemail" | "wrong_number" | "busy";
  /** The number that made the call */
  from_phone_number?: string;
  /** The number called */
  to_phone_number: string;
  /** The date and time of the start of the call in UTC. Format: YYYY-MM-DD HH:MM:SS. */
  start_time: string;
  /** The date and time of the end of the call in UTC. Format: YYYY-MM-DD HH:MM:SS. */
  end_time: string;
  /** The ID of the person this call is associated with */
  person_id?: number;
  /** The ID of the organization this call is associated with */
  org_id?: number;
  /** The ID of the deal this call is associated with. A call log can be associated with either a deal or a lead, but not both at once. */
  deal_id?: number;
  /** The ID of the lead in the UUID format this call is associated with. A call log can be associated with either a deal or a lead, but not both at once. */
  lead_id?: string;
  /** The note for the call log in HTML format */
  note?: string;
}): Promise<{ success?: boolean; data?: { user_id?: number; activity_id?: number; subject?: string; duration?: string; outcome: "connected" | "no_answer" | "left_message" | "left_voicemail" | "wrong_number" | "busy"; from_phone_number?: string; to_phone_number: string; start_time: string; end_time: string; person_id?: number; org_id?: number; deal_id?: number; lead_id?: string; note?: string } & { id?: strin...>
```

<sub>`POST /callLogs` · `addCallLog`</sub>

## `pipedrive.deleteCallLog`

Delete a call log

```ts
pipedrive.deleteCallLog(input: {
  /** The ID received when you create the call log */
  id: string;
}): Promise<{ success?: boolean }>
```

<sub>`DELETE /callLogs/{id}` · `deleteCallLog`</sub>

## `pipedrive.getCallLog`

Get details of a call log

```ts
pipedrive.getCallLog(input: {
  /** The ID received when you create the call log */
  id: string;
}): Promise<{ success?: boolean; data?: { user_id?: number; activity_id?: number; subject?: string; duration?: string; outcome: "connected" | "no_answer" | "left_message" | "left_voicemail" | "wrong_number" | "busy"; from_phone_number?: string; to_phone_number: string; start_time: string; end_time: string; person_id?: number; org_id?: number; deal_id?: number; lead_id?: string; note?: string } & { id?: strin...>
```

<sub>`GET /callLogs/{id}` · `getCallLog`</sub>

## `pipedrive.addCallLogAudioFile`

Attach an audio file to the call log

```ts
pipedrive.addCallLogAudioFile(input: {
  /** Audio file supported by the HTML5 specification */
  file: string;
  /** The ID received when you create the call log */
  id: string;
}): Promise<{ success?: boolean }>
```

<sub>`POST /callLogs/{id}/recordings` · `addCallLogAudioFile`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
