# Rtm

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.rtmConnect`

Starts a Real Time Messaging session. — [API reference](https://api.slack.com/methods/rtm.connect)

```ts
slack.rtmConnect(input: {
  /** Authentication token. Requires scope: `rtm:stream` */
  token: string;
  /** Batch presence deliveries via subscription. Enabling changes the shape of `presence_change` events. See [batch presence](/docs/presence-and-status#batching). */
  batch_presence_aware?: boolean;
  /** Only deliver presence events when requested by subscription. See [presence subscriptions](/docs/presence-and-status#subscriptions). */
  presence_sub?: boolean;
}): Promise<{ ok: DefsOkTrue; self: { id: DefsUserId; name: string }; team: { domain: string; id: DefsTeam; name: string }; url: string }>
```

<sub>`GET /rtm.connect` · `rtm_connect`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
