# Teams (Beta)

1 operation · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.patchTeams`

Update teams — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchTeams(input: {
  /** Optional comment describing the update */
  comment?: string;
  /** The instructions to perform when updating. This should be an array with objects that look like <code>{"kind": "update_action"}</code>. Some instructions also require additional parameters as part of this object. */
  instructions: Instructions;
}): Promise<BulkEditTeamsRep>
```

<sub>`PATCH /api/v2/teams` · `patchTeams`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
