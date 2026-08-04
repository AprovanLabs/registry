# Service Registry

1 operation · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.serviceRegistryResourceServicesGet`

Retrieve the attributes of service registries — [Provider docs](http://www.atlassian.com)

```ts
jira.serviceRegistryResourceServicesGet(input: {
  /** The ID of the services (the strings starting with "b:" need to be decoded in Base64). */
  serviceIds: (string)[];
}): Promise<(ServiceRegistry)[]>
```

<sub>`GET /rest/atlassian-connect/1/service-registry` · `ServiceRegistryResource.services_get`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
