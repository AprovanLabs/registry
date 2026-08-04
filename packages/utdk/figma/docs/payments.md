# Payments

1 operation · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.getPayments`

Get payments — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getPayments(input: {
  /** Short-lived token returned from "getPluginPaymentTokenAsync" in the plugin payments API and used to authenticate to this endpoint. Read more about generating this token through "Calling the Payments REST API from a plugin or widget" below. */
  plugin_payment_token?: string;
  /** The ID of the user to query payment information about. You can get the user ID by having the user OAuth2 to the Figma REST API. */
  user_id?: string;
  /** The ID of the Community file to query a user's payment information on. You can get the Community file ID from the file's Community page (look for the number after "file/" in the URL). Provide exactly one of "community_file_id", "plugin_id", or "widget_id". */
  community_file_id?: string;
  /** The ID of the plugin to query a user's payment information on. You can get the plugin ID from the plugin's manifest, or from the plugin's Community page (look for the number after "plugin/" in the URL). Provide exactly one of "community_file_id", "plugin_id", or "widget_id". */
  plugin_id?: string;
  /** The ID of the widget to query a user's payment information on. You can get the widget ID from the widget's manifest, or from the widget's Community page (look for the number after "widget/" in the URL). Provide exactly one of "community_file_id", "plugin_id", or "widget_id". */
  widget_id?: string;
}): Promise<{ status: 200; error: false; meta: PaymentInformation }>
```

<sub>`GET /v1/payments` · `getPayments`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
