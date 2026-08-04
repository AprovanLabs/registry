# App Properties

8 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.addonPropertiesResourceGetAddonPropertiesGet`

Get app properties — [Provider docs](http://www.atlassian.com)

```ts
jira.addonPropertiesResourceGetAddonPropertiesGet(input: {
  /** The key of the app, as defined in its descriptor. */
  addonKey: string;
}): Promise<PropertyKeys>
```

<sub>`GET /rest/atlassian-connect/1/addons/{addonKey}/properties` · `AddonPropertiesResource.getAddonProperties_get`</sub>

## `jira.addonPropertiesResourceDeleteAddonPropertyDelete`

Delete app property — [Provider docs](http://www.atlassian.com)

```ts
jira.addonPropertiesResourceDeleteAddonPropertyDelete(input: {
  /** The key of the app, as defined in its descriptor. */
  addonKey: string;
  /** The key of the property. */
  propertyKey: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}` · `AddonPropertiesResource.deleteAddonProperty_delete`</sub>

## `jira.addonPropertiesResourceGetAddonPropertyGet`

Get app property — [Provider docs](http://www.atlassian.com)

```ts
jira.addonPropertiesResourceGetAddonPropertyGet(input: {
  /** The key of the app, as defined in its descriptor. */
  addonKey: string;
  /** The key of the property. */
  propertyKey: string;
}): Promise<EntityProperty>
```

<sub>`GET /rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}` · `AddonPropertiesResource.getAddonProperty_get`</sub>

## `jira.addonPropertiesResourcePutAddonPropertyPut`

Set app property — [Provider docs](http://www.atlassian.com)

```ts
jira.addonPropertiesResourcePutAddonPropertyPut(input: {
  body: unknown;
  /** The key of the app, as defined in its descriptor. */
  addonKey: string;
  /** The key of the property. */
  propertyKey: string;
}): Promise<OperationMessage>
```

<sub>`PUT /rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}` · `AddonPropertiesResource.putAddonProperty_put`</sub>

## `jira.getForgeAppPropertyKeys`

Get app property keys (Forge) — [Provider docs](http://www.atlassian.com)

```ts
jira.getForgeAppPropertyKeys(): Promise<{ keys?: ({ key?: string; self?: string })[] }>
```

<sub>`GET /rest/forge/1/app/properties` · `getForgeAppPropertyKeys`</sub>

## `jira.deleteForgeAppProperty`

Delete app property (Forge) — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteForgeAppProperty(input: {
  /** The key of the property. */
  propertyKey: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/forge/1/app/properties/{propertyKey}` · `deleteForgeAppProperty`</sub>

## `jira.getForgeAppProperty`

Get app property (Forge) — [Provider docs](http://www.atlassian.com)

```ts
jira.getForgeAppProperty(input: {
  /** The key of the property. */
  propertyKey: string;
}): Promise<{ key?: string; value?: unknown }>
```

<sub>`GET /rest/forge/1/app/properties/{propertyKey}` · `getForgeAppProperty`</sub>

## `jira.putForgeAppProperty`

Set app property (Forge) — [Provider docs](http://www.atlassian.com)

```ts
jira.putForgeAppProperty(input: {
  body: unknown;
  /** The key of the property. */
  propertyKey: string;
}): Promise<OperationMessage>
```

<sub>`PUT /rest/forge/1/app/properties/{propertyKey}` · `putForgeAppProperty`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
