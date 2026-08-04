# Goal Relationships

5 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getGoalRelationships`

Get goal relationships — [Provider docs](https://asana.com/support)

```ts
asana.getGoalRelationships(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** Globally unique identifier for the supported goal in the goal relationship. */
  supported_goal: string;
  /** If provided, filter to goal relationships with a given resource_subtype. */
  resource_subtype?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("contribution_weight" | "offset" | "path" | "resource_subtype" | "supported_goal" | "supported_goal.name" | "supported_goal.owner" | "supported_goal.owner.name" | "supporting_resource" | "supporting_resource.name" | "uri")[];
}): Promise<{ data?: (GoalRelationshipCompact)[]; next_page?: NextPage }>
```

<sub>`GET /goal_relationships` · `getGoalRelationships`</sub>

## `asana.getGoalRelationship`

Get a goal relationship — [Provider docs](https://asana.com/support)

```ts
asana.getGoalRelationship(input: {
  /** Globally unique identifier for the goal relationship. */
  goal_relationship_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("contribution_weight" | "resource_subtype" | "supported_goal" | "supported_goal.name" | "supported_goal.owner" | "supported_goal.owner.name" | "supporting_resource" | "supporting_resource.name")[];
}): Promise<{ data?: GoalRelationshipResponse }>
```

<sub>`GET /goal_relationships/{goal_relationship_gid}` · `getGoalRelationship`</sub>

## `asana.updateGoalRelationship`

Update a goal relationship — [Provider docs](https://asana.com/support)

```ts
asana.updateGoalRelationship(input: {
  data?: GoalRelationshipRequest;
  /** Globally unique identifier for the goal relationship. */
  goal_relationship_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("contribution_weight" | "resource_subtype" | "supported_goal" | "supported_goal.name" | "supported_goal.owner" | "supported_goal.owner.name" | "supporting_resource" | "supporting_resource.name")[];
}): Promise<{ data?: GoalRelationshipResponse }>
```

<sub>`PUT /goal_relationships/{goal_relationship_gid}` · `updateGoalRelationship`</sub>

## `asana.addSupportingRelationship`

Add a supporting goal relationship — [Provider docs](https://asana.com/support)

```ts
asana.addSupportingRelationship(input: {
  data?: GoalAddSupportingRelationshipRequest;
  /** Globally unique identifier for the goal. */
  goal_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("contribution_weight" | "resource_subtype" | "supported_goal" | "supported_goal.name" | "supported_goal.owner" | "supported_goal.owner.name" | "supporting_resource" | "supporting_resource.name")[];
}): Promise<{ data?: GoalRelationshipResponse }>
```

<sub>`POST /goals/{goal_gid}/addSupportingRelationship` · `addSupportingRelationship`</sub>

## `asana.removeSupportingRelationship`

Removes a supporting goal relationship — [Provider docs](https://asana.com/support)

```ts
asana.removeSupportingRelationship(input: {
  data?: GoalRemoveSupportingRelationshipRequest;
  /** Globally unique identifier for the goal. */
  goal_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /goals/{goal_gid}/removeSupportingRelationship` · `removeSupportingRelationship`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
