# Shifts

10 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listShifts`

List Shifts — [Provider docs](https://community.front.com)

```ts
front.listShifts(): Promise<{ _links?: { self?: string }; _results?: (ShiftResponse)[] }>
```

<sub>`GET /shifts` · `list-shifts`</sub>

## `front.createShift`

Create shift — [Provider docs](https://community.front.com)

```ts
front.createShift(input: {
  /** Name of the shift */
  name: string;
  /** Color of the shift */
  color: "black" | "grey" | "pink" | "purple" | "blue" | "teal" | "green" | "yellow" | "orange" | "red";
  /** A timezone name as defined in the IANA tz database */
  timezone: string;
  /** The shift intervals per day of the week */
  times: ShiftIntervals;
  /** List of all the teammate ids who will be part of this shift. Alternatively, you can supply emails as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_ids: (ResourceId)[];
}): Promise<ShiftResponse>
```

<sub>`POST /shifts` · `create-shift`</sub>

## `front.getShift`

Get shift — [Provider docs](https://community.front.com)

```ts
front.getShift(input: {
  /** The Shift ID */
  shift_id: string;
}): Promise<ShiftResponse>
```

<sub>`GET /shifts/{shift_id}` · `get-shift`</sub>

## `front.updateShift`

Update shift — [Provider docs](https://community.front.com)

```ts
front.updateShift(input: {
  /** Name of the shift */
  name?: string;
  /** Color of the shift */
  color?: "black" | "grey" | "pink" | "purple" | "blue" | "teal" | "green" | "yellow" | "orange" | "red";
  /** A timezone name as defined in the IANA tz database */
  timezone?: string;
  /** The shift intervals per day of the week */
  times?: ShiftIntervals;
  /** List of all the teammate ids who will be part of this shift. Alternatively, you can supply emails as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_ids?: (ResourceId)[];
  /** The Shift ID */
  shift_id: string;
}): Promise<undefined>
```

<sub>`PATCH /shifts/{shift_id}` · `update-shift`</sub>

## `front.removeTeammatesFromShift`

Remove teammates from shift — [Provider docs](https://community.front.com)

```ts
front.removeTeammatesFromShift(input: {
  teammate_ids: (ResourceId)[];
  /** The Shift ID */
  shift_id: string;
}): Promise<undefined>
```

<sub>`DELETE /shifts/{shift_id}/teammates` · `remove-teammates-from-shift`</sub>

## `front.listShiftsTeammates`

List shift's teammates — [Provider docs](https://community.front.com)

```ts
front.listShiftsTeammates(input: {
  /** The Shift ID */
  shift_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (TeammateResponse)[] }>
```

<sub>`GET /shifts/{shift_id}/teammates` · `list-shifts-teammates`</sub>

## `front.addTeammatesToShift`

Add teammates to shift — [Provider docs](https://community.front.com)

```ts
front.addTeammatesToShift(input: {
  teammate_ids: (ResourceId)[];
  /** The Shift ID */
  shift_id: string;
}): Promise<undefined>
```

<sub>`POST /shifts/{shift_id}/teammates` · `add-teammates-to-shift`</sub>

## `front.listTeammateShifts`

List Teammate Shifts — [Provider docs](https://community.front.com)

```ts
front.listTeammateShifts(input: {
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (ShiftResponse)[] }>
```

<sub>`GET /teammates/{teammate_id}/shifts` · `list-teammate-shifts`</sub>

## `front.listTeamShifts`

List team Shifts — [Provider docs](https://community.front.com)

```ts
front.listTeamShifts(input: {
  /** The team ID */
  team_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (ShiftResponse)[] }>
```

<sub>`GET /teams/{team_id}/shifts` · `list-team-shifts`</sub>

## `front.createTeamShift`

Create team shift — [Provider docs](https://community.front.com)

```ts
front.createTeamShift(input: {
  /** Name of the shift */
  name: string;
  /** Color of the shift */
  color: "black" | "grey" | "pink" | "purple" | "blue" | "teal" | "green" | "yellow" | "orange" | "red";
  /** A timezone name as defined in the IANA tz database */
  timezone: string;
  /** The shift intervals per day of the week */
  times: ShiftIntervals;
  /** List of all the teammate ids who will be part of this shift. Alternatively, you can supply emails as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_ids: (ResourceId)[];
  /** The Team ID */
  team_id: string;
}): Promise<ShiftResponse>
```

<sub>`POST /teams/{team_id}/shifts` · `create-team-shift`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
