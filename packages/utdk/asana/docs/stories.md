# Stories

7 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getStoriesForGoal`

Get stories from a goal — [Provider docs](https://asana.com/support)

```ts
asana.getStoriesForGoal(input: {
  /** Globally unique identifier for the goal. */
  goal_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("assignee" | "assignee.name" | "created_at" | "created_by" | "created_by.name" | "custom_field" | "custom_field.date_value" | "custom_field.date_value.date" | "custom_field.date_value.date_time" | "custom_field.display_value" | "custom_field.enabled" | "custom_field.enum_options" | "custom_field.enum_options.color" | "custom_field.enum_options.enabled" | "custom_field.enum_options.name" | "custom_field.enum_value" | "custom_field.enum_value.color" | "custom_field.enum_value.enabled" | "custom_field.enum_value.name" | "custom_field.id_prefix" | "custom_field.input_restrictions" | "custom_field.is_formula_field" | "custom_field.multi_enum_values" | "custom_field.multi_enum_values.color" | "custom_field.multi_enum_values.enabled" | "custom_field.multi_enum_values.name" | "custom_field.name" | "custom_field.number_value" | "custom_field.representation_type" | "custom_field.text_value" | "custom_field.type" | "dependency" | "dependency.created_by" | "dependency.name" | "dependency.resource_subtype" | "duplicate_of" | "duplicate_of.created_by" | "duplicate_of.name" | "duplicate_of.resource_subtype" | "duplicated_from" | "duplicated_from.created_by" | "duplicated_from.name" | "duplicated_from.resource_subtype" | "follower" | "follower.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_text" | "is_editable" | "is_edited" | "is_pinned" | "liked" | "likes" | "likes.user" | "likes.user.name" | "new_approval_status" | "new_date_value" | "new_dates" | "new_dates.due_at" | "new_dates.due_on" | "new_dates.start_on" | "new_enum_value" | "new_enum_value.color" | "new_enum_value.enabled" | "new_enum_value.name" | "new_multi_enum_values" | "new_multi_enum_values.color" | "new_multi_enum_values.enabled" | "new_multi_enum_values.name" | "new_name" | "new_number_value" | "new_people_value" | "new_people_value.name" | "new_resource_subtype" | "new_section" | "new_section.name" | "new_text_value" | "num_hearts" | "num_likes" | "offset" | "old_approval_status" | "old_date_value" | "old_dates" | "old_dates.due_at" | "old_dates.due_on" | "old_dates.start_on" | "old_enum_value" | "old_enum_value.color" | "old_enum_value.enabled" | "old_enum_value.name" | "old_multi_enum_values" | "old_multi_enum_values.color" | "old_multi_enum_values.enabled" | "old_multi_enum_values.name" | "old_name" | "old_number_value" | "old_people_value" | "old_people_value.name" | "old_resource_subtype" | "old_section" | "old_section.name" | "old_text_value" | "path" | "previews" | "previews.fallback" | "previews.footer" | "previews.header" | "previews.header_link" | "previews.html_text" | "previews.text" | "previews.title" | "previews.title_link" | "project" | "project.name" | "reaction_summary" | "reaction_summary.count" | "reaction_summary.emoji_base" | "reaction_summary.reacted" | "reaction_summary.variant" | "resource_subtype" | "source" | "sticker_name" | "story" | "story.created_at" | "story.created_by" | "story.created_by.name" | "story.resource_subtype" | "story.text" | "tag" | "tag.name" | "target" | "target.created_by" | "target.name" | "target.resource_subtype" | "task" | "task.created_by" | "task.name" | "task.resource_subtype" | "text" | "type" | "uri")[];
}): Promise<{ data?: (StoryCompact)[]; next_page?: NextPage }>
```

<sub>`GET /goals/{goal_gid}/stories` · `getStoriesForGoal`</sub>

## `asana.createStoryForGoal`

Create a story on a goal — [Provider docs](https://asana.com/support)

```ts
asana.createStoryForGoal(input: {
  data?: StoryRequest;
  /** Globally unique identifier for the goal. */
  goal_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("assignee" | "assignee.name" | "created_at" | "created_by" | "created_by.name" | "custom_field" | "custom_field.date_value" | "custom_field.date_value.date" | "custom_field.date_value.date_time" | "custom_field.display_value" | "custom_field.enabled" | "custom_field.enum_options" | "custom_field.enum_options.color" | "custom_field.enum_options.enabled" | "custom_field.enum_options.name" | "custom_field.enum_value" | "custom_field.enum_value.color" | "custom_field.enum_value.enabled" | "custom_field.enum_value.name" | "custom_field.id_prefix" | "custom_field.input_restrictions" | "custom_field.is_formula_field" | "custom_field.multi_enum_values" | "custom_field.multi_enum_values.color" | "custom_field.multi_enum_values.enabled" | "custom_field.multi_enum_values.name" | "custom_field.name" | "custom_field.number_value" | "custom_field.representation_type" | "custom_field.text_value" | "custom_field.type" | "dependency" | "dependency.created_by" | "dependency.name" | "dependency.resource_subtype" | "duplicate_of" | "duplicate_of.created_by" | "duplicate_of.name" | "duplicate_of.resource_subtype" | "duplicated_from" | "duplicated_from.created_by" | "duplicated_from.name" | "duplicated_from.resource_subtype" | "follower" | "follower.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_text" | "is_editable" | "is_edited" | "is_pinned" | "liked" | "likes" | "likes.user" | "likes.user.name" | "new_approval_status" | "new_date_value" | "new_dates" | "new_dates.due_at" | "new_dates.due_on" | "new_dates.start_on" | "new_enum_value" | "new_enum_value.color" | "new_enum_value.enabled" | "new_enum_value.name" | "new_multi_enum_values" | "new_multi_enum_values.color" | "new_multi_enum_values.enabled" | "new_multi_enum_values.name" | "new_name" | "new_number_value" | "new_people_value" | "new_people_value.name" | "new_resource_subtype" | "new_section" | "new_section.name" | "new_text_value" | "num_hearts" | "num_likes" | "old_approval_status" | "old_date_value" | "old_dates" | "old_dates.due_at" | "old_dates.due_on" | "old_dates.start_on" | "old_enum_value" | "old_enum_value.color" | "old_enum_value.enabled" | "old_enum_value.name" | "old_multi_enum_values" | "old_multi_enum_values.color" | "old_multi_enum_values.enabled" | "old_multi_enum_values.name" | "old_name" | "old_number_value" | "old_people_value" | "old_people_value.name" | "old_resource_subtype" | "old_section" | "old_section.name" | "old_text_value" | "previews" | "previews.fallback" | "previews.footer" | "previews.header" | "previews.header_link" | "previews.html_text" | "previews.text" | "previews.title" | "previews.title_link" | "project" | "project.name" | "reaction_summary" | "reaction_summary.count" | "reaction_summary.emoji_base" | "reaction_summary.reacted" | "reaction_summary.variant" | "resource_subtype" | "source" | "sticker_name" | "story" | "story.created_at" | "story.created_by" | "story.created_by.name" | "story.resource_subtype" | "story.text" | "tag" | "tag.name" | "target" | "target.created_by" | "target.name" | "target.resource_subtype" | "task" | "task.created_by" | "task.name" | "task.resource_subtype" | "text" | "type")[];
}): Promise<{ data?: StoryResponse }>
```

<sub>`POST /goals/{goal_gid}/stories` · `createStoryForGoal`</sub>

## `asana.deleteStory`

Delete a story — [Provider docs](https://asana.com/support)

```ts
asana.deleteStory(input: {
  /** Globally unique identifier for the story. */
  story_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /stories/{story_gid}` · `deleteStory`</sub>

## `asana.getStory`

Get a story — [Provider docs](https://asana.com/support)

```ts
asana.getStory(input: {
  /** Globally unique identifier for the story. */
  story_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("assignee" | "assignee.name" | "created_at" | "created_by" | "created_by.name" | "custom_field" | "custom_field.date_value" | "custom_field.date_value.date" | "custom_field.date_value.date_time" | "custom_field.display_value" | "custom_field.enabled" | "custom_field.enum_options" | "custom_field.enum_options.color" | "custom_field.enum_options.enabled" | "custom_field.enum_options.name" | "custom_field.enum_value" | "custom_field.enum_value.color" | "custom_field.enum_value.enabled" | "custom_field.enum_value.name" | "custom_field.id_prefix" | "custom_field.input_restrictions" | "custom_field.is_formula_field" | "custom_field.multi_enum_values" | "custom_field.multi_enum_values.color" | "custom_field.multi_enum_values.enabled" | "custom_field.multi_enum_values.name" | "custom_field.name" | "custom_field.number_value" | "custom_field.representation_type" | "custom_field.text_value" | "custom_field.type" | "dependency" | "dependency.created_by" | "dependency.name" | "dependency.resource_subtype" | "duplicate_of" | "duplicate_of.created_by" | "duplicate_of.name" | "duplicate_of.resource_subtype" | "duplicated_from" | "duplicated_from.created_by" | "duplicated_from.name" | "duplicated_from.resource_subtype" | "follower" | "follower.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_text" | "is_editable" | "is_edited" | "is_pinned" | "liked" | "likes" | "likes.user" | "likes.user.name" | "new_approval_status" | "new_date_value" | "new_dates" | "new_dates.due_at" | "new_dates.due_on" | "new_dates.start_on" | "new_enum_value" | "new_enum_value.color" | "new_enum_value.enabled" | "new_enum_value.name" | "new_multi_enum_values" | "new_multi_enum_values.color" | "new_multi_enum_values.enabled" | "new_multi_enum_values.name" | "new_name" | "new_number_value" | "new_people_value" | "new_people_value.name" | "new_resource_subtype" | "new_section" | "new_section.name" | "new_text_value" | "num_hearts" | "num_likes" | "old_approval_status" | "old_date_value" | "old_dates" | "old_dates.due_at" | "old_dates.due_on" | "old_dates.start_on" | "old_enum_value" | "old_enum_value.color" | "old_enum_value.enabled" | "old_enum_value.name" | "old_multi_enum_values" | "old_multi_enum_values.color" | "old_multi_enum_values.enabled" | "old_multi_enum_values.name" | "old_name" | "old_number_value" | "old_people_value" | "old_people_value.name" | "old_resource_subtype" | "old_section" | "old_section.name" | "old_text_value" | "previews" | "previews.fallback" | "previews.footer" | "previews.header" | "previews.header_link" | "previews.html_text" | "previews.text" | "previews.title" | "previews.title_link" | "project" | "project.name" | "reaction_summary" | "reaction_summary.count" | "reaction_summary.emoji_base" | "reaction_summary.reacted" | "reaction_summary.variant" | "resource_subtype" | "source" | "sticker_name" | "story" | "story.created_at" | "story.created_by" | "story.created_by.name" | "story.resource_subtype" | "story.text" | "tag" | "tag.name" | "target" | "target.created_by" | "target.name" | "target.resource_subtype" | "task" | "task.created_by" | "task.name" | "task.resource_subtype" | "text" | "type")[];
}): Promise<{ data?: StoryResponse }>
```

<sub>`GET /stories/{story_gid}` · `getStory`</sub>

## `asana.updateStory`

Update a story — [Provider docs](https://asana.com/support)

```ts
asana.updateStory(input: {
  data?: StoryRequest;
  /** Globally unique identifier for the story. */
  story_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("assignee" | "assignee.name" | "created_at" | "created_by" | "created_by.name" | "custom_field" | "custom_field.date_value" | "custom_field.date_value.date" | "custom_field.date_value.date_time" | "custom_field.display_value" | "custom_field.enabled" | "custom_field.enum_options" | "custom_field.enum_options.color" | "custom_field.enum_options.enabled" | "custom_field.enum_options.name" | "custom_field.enum_value" | "custom_field.enum_value.color" | "custom_field.enum_value.enabled" | "custom_field.enum_value.name" | "custom_field.id_prefix" | "custom_field.input_restrictions" | "custom_field.is_formula_field" | "custom_field.multi_enum_values" | "custom_field.multi_enum_values.color" | "custom_field.multi_enum_values.enabled" | "custom_field.multi_enum_values.name" | "custom_field.name" | "custom_field.number_value" | "custom_field.representation_type" | "custom_field.text_value" | "custom_field.type" | "dependency" | "dependency.created_by" | "dependency.name" | "dependency.resource_subtype" | "duplicate_of" | "duplicate_of.created_by" | "duplicate_of.name" | "duplicate_of.resource_subtype" | "duplicated_from" | "duplicated_from.created_by" | "duplicated_from.name" | "duplicated_from.resource_subtype" | "follower" | "follower.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_text" | "is_editable" | "is_edited" | "is_pinned" | "liked" | "likes" | "likes.user" | "likes.user.name" | "new_approval_status" | "new_date_value" | "new_dates" | "new_dates.due_at" | "new_dates.due_on" | "new_dates.start_on" | "new_enum_value" | "new_enum_value.color" | "new_enum_value.enabled" | "new_enum_value.name" | "new_multi_enum_values" | "new_multi_enum_values.color" | "new_multi_enum_values.enabled" | "new_multi_enum_values.name" | "new_name" | "new_number_value" | "new_people_value" | "new_people_value.name" | "new_resource_subtype" | "new_section" | "new_section.name" | "new_text_value" | "num_hearts" | "num_likes" | "old_approval_status" | "old_date_value" | "old_dates" | "old_dates.due_at" | "old_dates.due_on" | "old_dates.start_on" | "old_enum_value" | "old_enum_value.color" | "old_enum_value.enabled" | "old_enum_value.name" | "old_multi_enum_values" | "old_multi_enum_values.color" | "old_multi_enum_values.enabled" | "old_multi_enum_values.name" | "old_name" | "old_number_value" | "old_people_value" | "old_people_value.name" | "old_resource_subtype" | "old_section" | "old_section.name" | "old_text_value" | "previews" | "previews.fallback" | "previews.footer" | "previews.header" | "previews.header_link" | "previews.html_text" | "previews.text" | "previews.title" | "previews.title_link" | "project" | "project.name" | "reaction_summary" | "reaction_summary.count" | "reaction_summary.emoji_base" | "reaction_summary.reacted" | "reaction_summary.variant" | "resource_subtype" | "source" | "sticker_name" | "story" | "story.created_at" | "story.created_by" | "story.created_by.name" | "story.resource_subtype" | "story.text" | "tag" | "tag.name" | "target" | "target.created_by" | "target.name" | "target.resource_subtype" | "task" | "task.created_by" | "task.name" | "task.resource_subtype" | "text" | "type")[];
}): Promise<{ data?: StoryResponse }>
```

<sub>`PUT /stories/{story_gid}` · `updateStory`</sub>

## `asana.getStoriesForTask`

Get stories from a task — [Provider docs](https://asana.com/support)

```ts
asana.getStoriesForTask(input: {
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("assignee" | "assignee.name" | "created_at" | "created_by" | "created_by.name" | "custom_field" | "custom_field.date_value" | "custom_field.date_value.date" | "custom_field.date_value.date_time" | "custom_field.display_value" | "custom_field.enabled" | "custom_field.enum_options" | "custom_field.enum_options.color" | "custom_field.enum_options.enabled" | "custom_field.enum_options.name" | "custom_field.enum_value" | "custom_field.enum_value.color" | "custom_field.enum_value.enabled" | "custom_field.enum_value.name" | "custom_field.id_prefix" | "custom_field.input_restrictions" | "custom_field.is_formula_field" | "custom_field.multi_enum_values" | "custom_field.multi_enum_values.color" | "custom_field.multi_enum_values.enabled" | "custom_field.multi_enum_values.name" | "custom_field.name" | "custom_field.number_value" | "custom_field.representation_type" | "custom_field.text_value" | "custom_field.type" | "dependency" | "dependency.created_by" | "dependency.name" | "dependency.resource_subtype" | "duplicate_of" | "duplicate_of.created_by" | "duplicate_of.name" | "duplicate_of.resource_subtype" | "duplicated_from" | "duplicated_from.created_by" | "duplicated_from.name" | "duplicated_from.resource_subtype" | "follower" | "follower.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_text" | "is_editable" | "is_edited" | "is_pinned" | "liked" | "likes" | "likes.user" | "likes.user.name" | "new_approval_status" | "new_date_value" | "new_dates" | "new_dates.due_at" | "new_dates.due_on" | "new_dates.start_on" | "new_enum_value" | "new_enum_value.color" | "new_enum_value.enabled" | "new_enum_value.name" | "new_multi_enum_values" | "new_multi_enum_values.color" | "new_multi_enum_values.enabled" | "new_multi_enum_values.name" | "new_name" | "new_number_value" | "new_people_value" | "new_people_value.name" | "new_resource_subtype" | "new_section" | "new_section.name" | "new_text_value" | "num_hearts" | "num_likes" | "offset" | "old_approval_status" | "old_date_value" | "old_dates" | "old_dates.due_at" | "old_dates.due_on" | "old_dates.start_on" | "old_enum_value" | "old_enum_value.color" | "old_enum_value.enabled" | "old_enum_value.name" | "old_multi_enum_values" | "old_multi_enum_values.color" | "old_multi_enum_values.enabled" | "old_multi_enum_values.name" | "old_name" | "old_number_value" | "old_people_value" | "old_people_value.name" | "old_resource_subtype" | "old_section" | "old_section.name" | "old_text_value" | "path" | "previews" | "previews.fallback" | "previews.footer" | "previews.header" | "previews.header_link" | "previews.html_text" | "previews.text" | "previews.title" | "previews.title_link" | "project" | "project.name" | "reaction_summary" | "reaction_summary.count" | "reaction_summary.emoji_base" | "reaction_summary.reacted" | "reaction_summary.variant" | "resource_subtype" | "source" | "sticker_name" | "story" | "story.created_at" | "story.created_by" | "story.created_by.name" | "story.resource_subtype" | "story.text" | "tag" | "tag.name" | "target" | "target.created_by" | "target.name" | "target.resource_subtype" | "task" | "task.created_by" | "task.name" | "task.resource_subtype" | "text" | "type" | "uri")[];
}): Promise<{ data?: (StoryCompact)[]; next_page?: NextPage }>
```

<sub>`GET /tasks/{task_gid}/stories` · `getStoriesForTask`</sub>

## `asana.createStoryForTask`

Create a story on a task — [Provider docs](https://asana.com/support)

```ts
asana.createStoryForTask(input: {
  data?: StoryRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("assignee" | "assignee.name" | "created_at" | "created_by" | "created_by.name" | "custom_field" | "custom_field.date_value" | "custom_field.date_value.date" | "custom_field.date_value.date_time" | "custom_field.display_value" | "custom_field.enabled" | "custom_field.enum_options" | "custom_field.enum_options.color" | "custom_field.enum_options.enabled" | "custom_field.enum_options.name" | "custom_field.enum_value" | "custom_field.enum_value.color" | "custom_field.enum_value.enabled" | "custom_field.enum_value.name" | "custom_field.id_prefix" | "custom_field.input_restrictions" | "custom_field.is_formula_field" | "custom_field.multi_enum_values" | "custom_field.multi_enum_values.color" | "custom_field.multi_enum_values.enabled" | "custom_field.multi_enum_values.name" | "custom_field.name" | "custom_field.number_value" | "custom_field.representation_type" | "custom_field.text_value" | "custom_field.type" | "dependency" | "dependency.created_by" | "dependency.name" | "dependency.resource_subtype" | "duplicate_of" | "duplicate_of.created_by" | "duplicate_of.name" | "duplicate_of.resource_subtype" | "duplicated_from" | "duplicated_from.created_by" | "duplicated_from.name" | "duplicated_from.resource_subtype" | "follower" | "follower.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_text" | "is_editable" | "is_edited" | "is_pinned" | "liked" | "likes" | "likes.user" | "likes.user.name" | "new_approval_status" | "new_date_value" | "new_dates" | "new_dates.due_at" | "new_dates.due_on" | "new_dates.start_on" | "new_enum_value" | "new_enum_value.color" | "new_enum_value.enabled" | "new_enum_value.name" | "new_multi_enum_values" | "new_multi_enum_values.color" | "new_multi_enum_values.enabled" | "new_multi_enum_values.name" | "new_name" | "new_number_value" | "new_people_value" | "new_people_value.name" | "new_resource_subtype" | "new_section" | "new_section.name" | "new_text_value" | "num_hearts" | "num_likes" | "old_approval_status" | "old_date_value" | "old_dates" | "old_dates.due_at" | "old_dates.due_on" | "old_dates.start_on" | "old_enum_value" | "old_enum_value.color" | "old_enum_value.enabled" | "old_enum_value.name" | "old_multi_enum_values" | "old_multi_enum_values.color" | "old_multi_enum_values.enabled" | "old_multi_enum_values.name" | "old_name" | "old_number_value" | "old_people_value" | "old_people_value.name" | "old_resource_subtype" | "old_section" | "old_section.name" | "old_text_value" | "previews" | "previews.fallback" | "previews.footer" | "previews.header" | "previews.header_link" | "previews.html_text" | "previews.text" | "previews.title" | "previews.title_link" | "project" | "project.name" | "reaction_summary" | "reaction_summary.count" | "reaction_summary.emoji_base" | "reaction_summary.reacted" | "reaction_summary.variant" | "resource_subtype" | "source" | "sticker_name" | "story" | "story.created_at" | "story.created_by" | "story.created_by.name" | "story.resource_subtype" | "story.text" | "tag" | "tag.name" | "target" | "target.created_by" | "target.name" | "target.resource_subtype" | "task" | "task.created_by" | "task.name" | "task.resource_subtype" | "text" | "type")[];
}): Promise<{ data?: StoryResponse }>
```

<sub>`POST /tasks/{task_gid}/stories` · `createStoryForTask`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
