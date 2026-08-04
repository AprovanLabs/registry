# ActivityTypes

4 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getActivityTypes`

Get all activity types

```ts
pipedrive.getActivityTypes(): Promise<{ success?: boolean } & { data?: ({ id?: number; name?: string; icon_key?: "task" | "email" | "meeting" | "deadline" | "call" | "lunch" | "calendar" | "downarrow" | "document" | "smartphone" | "camera" | "scissors" | "cogs" | "bubble" | "uparrow" | "checkbox" | "signpost" | "shuffle" | "addressbook" | "linegraph" | "picture" | "car" | "world" | "search" | "clip" | "sound" | "brush" | "key" | "pad...>
```

<sub>`GET /activityTypes` · `getActivityTypes`</sub>

## `pipedrive.addActivityType`

Add new activity type

```ts
pipedrive.addActivityType(input: {
  /** The name of the activity type */
  name: string;
  /** Icon graphic to use for representing this activity type */
  icon_key: "task" | "email" | "meeting" | "deadline" | "call" | "lunch" | "calendar" | "downarrow" | "document" | "smartphone" | "camera" | "scissors" | "cogs" | "bubble" | "uparrow" | "checkbox" | "signpost" | "shuffle" | "addressbook" | "linegraph" | "picture" | "car" | "world" | "search" | "clip" | "sound" | "brush" | "key" | "padlock" | "pricetag" | "suitcase" | "finish" | "plane" | "loop" | "wifi" | "truck" | "cart" | "bulb" | "bell" | "presentation";
  /** A designated color for the activity type in 6-character HEX format (e.g. `FFFFFF` for white, `000000` for black) */
  color?: string;
}): Promise<{ success?: boolean } & { data?: { id?: number; name?: string; icon_key?: "task" | "email" | "meeting" | "deadline" | "call" | "lunch" | "calendar" | "downarrow" | "document" | "smartphone" | "camera" | "scissors" | "cogs" | "bubble" | "uparrow" | "checkbox" | "signpost" | "shuffle" | "addressbook" | "linegraph" | "picture" | "car" | "world" | "search" | "clip" | "sound" | "brush" | "key" | "padl...>
```

<sub>`POST /activityTypes` · `addActivityType`</sub>

## `pipedrive.deleteActivityType`

Delete an activity type

```ts
pipedrive.deleteActivityType(input: {
  /** The ID of the activity type */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number; name?: string; icon_key?: "task" | "email" | "meeting" | "deadline" | "call" | "lunch" | "calendar" | "downarrow" | "document" | "smartphone" | "camera" | "scissors" | "cogs" | "bubble" | "uparrow" | "checkbox" | "signpost" | "shuffle" | "addressbook" | "linegraph" | "picture" | "car" | "world" | "search" | "clip" | "sound" | "brush" | "key" | "padl...>
```

<sub>`DELETE /activityTypes/{id}` · `deleteActivityType`</sub>

## `pipedrive.updateActivityType`

Update an activity type

```ts
pipedrive.updateActivityType(input: {
  /** The name of the activity type */
  name?: string;
  /** Icon graphic to use for representing this activity type */
  icon_key?: "task" | "email" | "meeting" | "deadline" | "call" | "lunch" | "calendar" | "downarrow" | "document" | "smartphone" | "camera" | "scissors" | "cogs" | "bubble" | "uparrow" | "checkbox" | "signpost" | "shuffle" | "addressbook" | "linegraph" | "picture" | "car" | "world" | "search" | "clip" | "sound" | "brush" | "key" | "padlock" | "pricetag" | "suitcase" | "finish" | "plane" | "loop" | "wifi" | "truck" | "cart" | "bulb" | "bell" | "presentation";
  /** A designated color for the activity type in 6-character HEX format (e.g. `FFFFFF` for white, `000000` for black) */
  color?: string;
  /** An order number for this activity type. Order numbers should be used to order the types in the activity type selections. */
  order_nr?: number;
  /** The ID of the activity type */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number; name?: string; icon_key?: "task" | "email" | "meeting" | "deadline" | "call" | "lunch" | "calendar" | "downarrow" | "document" | "smartphone" | "camera" | "scissors" | "cogs" | "bubble" | "uparrow" | "checkbox" | "signpost" | "shuffle" | "addressbook" | "linegraph" | "picture" | "car" | "world" | "search" | "clip" | "sound" | "brush" | "key" | "padl...>
```

<sub>`PUT /activityTypes/{id}` · `updateActivityType`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
