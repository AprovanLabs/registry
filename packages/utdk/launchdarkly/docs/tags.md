# Tags

1 operation · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getTags`

List tags — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getTags(input: {
  /** Fetch tags associated with the specified resource type. Options are `flag`, `project`, `environment`, `segment`, `metric`, `metric-data-source`, `aiconfig`, and `view`. Returns all types by default. */
  kind?: (string)[];
  /** Return tags with the specified prefix */
  pre?: string;
  /** Whether or not to return archived flags */
  archived?: boolean;
  /** The number of tags to return. Maximum is 1000. */
  limit?: number;
  /** The index of the first tag to return. Default is 0. */
  offset?: number;
  /** The time to retrieve tags as of. Default is the current time. */
  asOf?: string;
}): Promise<TagsCollection>
```

<sub>`GET /api/v2/tags` · `getTags`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
