# Calls.Participants

2 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.callsParticipantsAdd`

Registers new participants added to a Call. — [API reference](https://api.slack.com/methods/calls.participants.add)

```ts
slack.callsParticipantsAdd(input: {
  /** `id` returned by the [`calls.add`](/methods/calls.add) method. */
  id: string;
  /** The list of users to add as participants in the Call. [Read more on how to specify users here](/apis/calls#users). */
  users: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /calls.participants.add` · `calls_participants_add`</sub>

## `slack.callsParticipantsRemove`

Registers participants removed from a Call. — [API reference](https://api.slack.com/methods/calls.participants.remove)

```ts
slack.callsParticipantsRemove(input: {
  /** `id` returned by the [`calls.add`](/methods/calls.add) method. */
  id: string;
  /** The list of users to remove as participants in the Call. [Read more on how to specify users here](/apis/calls#users). */
  users: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /calls.participants.remove` · `calls_participants_remove`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
