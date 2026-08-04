# Events

1 operation · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getEvents`

Get events on a resource — [Provider docs](https://asana.com/support)

```ts
asana.getEvents(input: {
  /** A resource ID to subscribe to. The resource can be a task, project, or goal. */
  resource: string;
  /** A sync token received from the last request, or none on first sync. Events will be returned from the point in time that the sync token was generated. *Note: On your first request, omit the sync token. The response will be the same as for an expired sync token, and will include a new valid sync token.If the sync token is too old (which may happen from time to time) the API will return a `412 Precondition Failed` error, and include a fresh sync token in the response.* */
  sync?: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("action" | "change" | "change.action" | "change.added_value" | "change.field" | "change.new_value" | "change.removed_value" | "created_at" | "parent" | "parent.name" | "resource" | "resource.name" | "type" | "user" | "user.name")[];
}): Promise<{ data?: (EventResponse)[]; sync?: string; has_more?: boolean }>
```

<sub>`GET /events` · `getEvents`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
