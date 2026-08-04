# Typeahead

1 operation · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.typeaheadForWorkspace`

Get objects via typeahead — [Provider docs](https://asana.com/support)

```ts
asana.typeaheadForWorkspace(input: {
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** The type of values the typeahead should return. You can choose from one of the following: `actor`, `agent`, `custom_field`, `goal`, `project`, `project_template`, `portfolio`, `tag`, `task`, `team`, and `user`. Note that unlike in the names of endpoints, the types listed here are in singular form (e.g. `task`). Using multiple types is not yet supported. The `agent` type returns only agents, currently limited to AI Teammates, which are Asana's first-party agents. The `actor` type returns a combined set of users and agents. */
  resource_type: "actor" | "agent" | "custom_field" | "goal" | "project" | "project_template" | "portfolio" | "tag" | "task" | "team" | "user";
  /** *Deprecated: new integrations should prefer the resource_type field.* */
  type?: "custom_field" | "portfolio" | "project" | "tag" | "task" | "user";
  /** The string that will be used to search for relevant objects. If an empty string is passed in, the API will return results. */
  query?: string;
  /** The number of results to return. The default is 20 if this parameter is omitted, with a minimum of 1 and a maximum of 100. If there are fewer results found than requested, all will be returned. */
  count?: number;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("name")[];
}): Promise<{ data?: (AsanaNamedResource)[] }>
```

<sub>`GET /workspaces/{workspace_gid}/typeahead` · `typeaheadForWorkspace`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
