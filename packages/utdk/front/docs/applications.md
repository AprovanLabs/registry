# Applications

1 operation · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.triggerAppEvent`

Trigger application event — [Provider docs](https://community.front.com)

```ts
front.triggerAppEvent(input: {
  /** The type of event this application should handle */
  event_type: string;
  /** Identifier for the app object to which the event is related. Either an ID or an external link is required. If both are provided, the ID will be favored.  */
  app_object: { id?: string; ext_link?: string };
  /** The application UID */
  application_uid: string;
}): Promise<undefined>
```

<sub>`POST /applications/{application_uid}/events` · `trigger-app-event`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
