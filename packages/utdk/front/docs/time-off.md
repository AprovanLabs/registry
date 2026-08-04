# Time Off

6 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listTeammateTimeOffs`

List teammate time offs — [Provider docs](https://community.front.com)

```ts
front.listTeammateTimeOffs(input: {
  /** The teammate ID */
  teammate_id: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** [Search query object](https://dev.frontapp.com/docs/query-object-q) with the optional properties `active_from` and `active_until`, whose value should be a timestamp in seconds with up to 3 decimal places. */
  q?: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (TimeOffResponse)[] }>
```

<sub>`GET /teammates/{teammate_id}/time_offs` · `list-teammate-time-offs`</sub>

## `front.createTimeOff`

Create time off — [Provider docs](https://community.front.com)

```ts
front.createTimeOff(input: {
  /** Name of the time off */
  name: string;
  /** Timestamp when the time off starts (in seconds) */
  start_at: number;
  /** Timestamp when the time off ends (in seconds), or null if open-ended */
  end_at?: number | null;
  auto_responder?: { body?: string; is_enabled?: boolean; is_contacts_only?: boolean; channel_ids?: (ResourceId)[] };
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<TimeOffResponse>
```

<sub>`POST /teammates/{teammate_id}/time_offs` · `create-time-off`</sub>

## `front.listTeamTimeOffs`

List team time offs — [Provider docs](https://community.front.com)

```ts
front.listTeamTimeOffs(input: {
  /** The team ID */
  team_id: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** [Search query object](https://dev.frontapp.com/docs/query-object-q) with the optional properties `active_from` and `active_until`, whose value should be a timestamp in seconds with up to 3 decimal places. */
  q?: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (TimeOffResponse)[] }>
```

<sub>`GET /teams/{team_id}/time_offs` · `list-team-time-offs`</sub>

## `front.deleteTimeOff`

Delete time off — [Provider docs](https://community.front.com)

```ts
front.deleteTimeOff(input: {
  /** The time off ID */
  time_off_id: string;
}): Promise<undefined>
```

<sub>`DELETE /time_offs/{time_off_id}` · `delete-time-off`</sub>

## `front.getTimeOff`

Get time off — [Provider docs](https://community.front.com)

```ts
front.getTimeOff(input: {
  /** The time off ID */
  time_off_id: string;
}): Promise<TimeOffResponse>
```

<sub>`GET /time_offs/{time_off_id}` · `get-time-off`</sub>

## `front.updateTimeOff`

Update time off — [Provider docs](https://community.front.com)

```ts
front.updateTimeOff(input: {
  /** Name of the time off */
  name?: string;
  /** Timestamp when the time off starts (in seconds) */
  start_at?: number;
  /** Timestamp when the time off ends (in seconds), or null to clear it */
  end_at?: number | null;
  auto_responder?: { body?: string; is_enabled?: boolean; is_contacts_only?: boolean; channel_ids?: (ResourceId)[] };
  /** The time off ID */
  time_off_id: string;
}): Promise<undefined>
```

<sub>`PATCH /time_offs/{time_off_id}` · `update-time-off`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
