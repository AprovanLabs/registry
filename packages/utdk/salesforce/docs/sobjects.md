# SObjects

2 operations · `@utdk/salesforce`

```ts
import salesforce from "@utdk/salesforce";
```

## `salesforce.listSObjects`

List available sObjects — [Provider docs](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)

```ts
salesforce.listSObjects(): Promise<SObjectList>
```

<sub>`GET /sobjects` · `listSObjects`</sub>

## `salesforce.describeSObject`

Describe a sObject — [Provider docs](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)

```ts
salesforce.describeSObject(input: {
  /** API name of the Salesforce object (e.g. Account, Contact, Opportunity) */
  sObjectName: string;
}): Promise<SObjectDescribe>
```

<sub>`GET /sobjects/{sObjectName}` · `describeSObject`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
