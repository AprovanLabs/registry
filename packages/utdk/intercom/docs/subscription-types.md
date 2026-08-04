# Subscription Types

3 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.attachSubscriptionTypeToContact`

Add subscription to a contact — [Provider docs](https://developers.intercom.com)

```ts
intercom.attachSubscriptionTypeToContact(input: {
  /** The unique identifier for the subscription which is given by Intercom */
  id: string;
  /** The consent_type of a subscription, opt_out or opt_in. */
  consent_type: string;
  /** The unique identifier for the contact which is given by Intercom */
  contact_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<SubscriptionType>
```

<sub>`POST /contacts/{contact_id}/subscriptions` · `attachSubscriptionTypeToContact`</sub>

## `intercom.detachSubscriptionTypeToContact`

Remove subscription from a contact — [Provider docs](https://developers.intercom.com)

```ts
intercom.detachSubscriptionTypeToContact(input: {
  /** The unique identifier for the contact which is given by Intercom */
  contact_id: string;
  /** The unique identifier for the subscription type which is given by Intercom */
  subscription_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<SubscriptionType>
```

<sub>`DELETE /contacts/{contact_id}/subscriptions/{subscription_id}` · `detachSubscriptionTypeToContact`</sub>

## `intercom.listSubscriptionTypes`

List subscription types — [Provider docs](https://developers.intercom.com)

```ts
intercom.listSubscriptionTypes(options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<SubscriptionTypeList>
```

<sub>`GET /subscription_types` · `listSubscriptionTypes`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
