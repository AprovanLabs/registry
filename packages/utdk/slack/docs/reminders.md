# Reminders

5 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.remindersAdd`

Creates a reminder. — [API reference](https://api.slack.com/methods/reminders.add)

```ts
slack.remindersAdd(input: {
  /** The content of the reminder */
  text: string;
  /** When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. "in 15 minutes," or "every Thursday") */
  time: string;
  /** The user who will receive the reminder. If no user is specified, the reminder will go to user who created it. */
  user?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; reminder: ObjsReminder }>
```

<sub>`POST /reminders.add` · `reminders_add`</sub>

## `slack.remindersComplete`

Marks a reminder as complete. — [API reference](https://api.slack.com/methods/reminders.complete)

```ts
slack.remindersComplete(input: {
  /** The ID of the reminder to be marked as complete */
  reminder?: string;
}, options?: { headers?: { token?: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /reminders.complete` · `reminders_complete`</sub>

## `slack.remindersDelete`

Deletes a reminder. — [API reference](https://api.slack.com/methods/reminders.delete)

```ts
slack.remindersDelete(input: {
  /** The ID of the reminder */
  reminder?: string;
}, options?: { headers?: { token?: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /reminders.delete` · `reminders_delete`</sub>

## `slack.remindersInfo`

Gets information about a reminder. — [API reference](https://api.slack.com/methods/reminders.info)

```ts
slack.remindersInfo(input: {
  /** Authentication token. Requires scope: `reminders:read` */
  token?: string;
  /** The ID of the reminder */
  reminder?: string;
}): Promise<{ ok: DefsOkTrue; reminder: ObjsReminder }>
```

<sub>`GET /reminders.info` · `reminders_info`</sub>

## `slack.remindersList`

Lists all reminders created by or for a given user. — [API reference](https://api.slack.com/methods/reminders.list)

```ts
slack.remindersList(input: {
  /** Authentication token. Requires scope: `reminders:read` */
  token?: string;
}): Promise<{ ok: DefsOkTrue; reminders: (ObjsReminder)[] }>
```

<sub>`GET /reminders.list` · `reminders_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
