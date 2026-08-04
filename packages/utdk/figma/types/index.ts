import type { ActivityLog, Comment, Component, ComponentSet, DevResource, DocumentNode, Emoji, FrameOffset, FrameOffsetRegion, LibraryAnalyticsComponentActionsByAsset, LibraryAnalyticsComponentActionsByTeam, LibraryAnalyticsComponentUsagesByAsset, LibraryAnalyticsComponentUsagesByFile, LibraryAnalyticsStyleActionsByAsset, LibraryAnalyticsStyleActionsByTeam, LibraryAnalyticsStyleUsagesByAsset, LibraryAnalyticsStyleUsagesByFile, LibraryAnalyticsVariableActionsByAsset, LibraryAnalyticsVariableActionsByTeam, LibraryAnalyticsVariableUsagesByAsset, LibraryAnalyticsVariableUsagesByFile, LinkAccess, LocalVariable, LocalVariableCollection, Node, PaymentInformation, Project, PublishedComponent, PublishedComponentSet, PublishedStyle, PublishedVariable, PublishedVariableCollection, Reaction, Region, ResponseCursor, ResponsePagination, Role, Style, User, VariableChange, VariableCollectionChange, VariableModeChange, VariableModeValue, Vector, Version, WebhookV2, WebhookV2Event, WebhookV2Request, WebhookV2Status } from "./schemas.js";

export type FigmaClient = {
  /**
   * Get file JSON
   */
  getFile: (input: {
    /** File to export JSON from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
    file_key: string;
    /** A specific version ID to get. Omitting this will get the current version of the file. */
    version?: string;
    /** Comma separated list of nodes that you care about in the document. If specified, only a subset of the document will be returned corresponding to the nodes listed, their children, and everything between the root node and the listed nodes.  Note: There may be other nodes included in the returned JSON that are outside the ancestor chains of the desired nodes. The response may also include dependencies of anything in the nodes' subtrees. For example, if a node subtree contains an instance of a local component that lives elsewhere in that file, that component and its ancestor chain will also be included.  For historical reasons, top-level canvas nodes are always returned, regardless of whether they are listed in the `ids` parameter. This quirk may be removed in a future version of the API. */
    ids?: string;
    /** Positive integer representing how deep into the document tree to traverse. For example, setting this to 1 returns only Pages, setting it to 2 returns Pages and all top level objects on each page. Not setting this parameter returns all nodes. */
    depth?: number;
    /** Set to "paths" to export vector data. */
    geometry?: string;
    /** A comma separated list of plugin IDs and/or the string "shared". Any data present in the document written by those plugins will be included in the result in the `pluginData` and `sharedPluginData` properties. */
    plugin_data?: string;
    /** Returns branch metadata for the requested file. If the file is a branch, the main file's key will be included in the returned response. If the file has branches, their metadata will be included in the returned response. Default: false. */
    branch_data?: boolean;
  }) => Promise<{ name: string; role: Role; lastModified: string; editorType: "figma" | "figjam"; thumbnailUrl?: string; version: string; document: DocumentNode; components: { [key: string]: Component | undefined }; componentSets: { [key: string]: ComponentSet | undefined }; schemaVersion: number; styles: { [key: string]: Style | undefined }; linkAccess?: string; mainFileKey?: string; branches?: ({ key: string; name: string; thumbnail_url: string; last_modified: string })[] }>;

  /**
   * Get file JSON for specific nodes
   */
  getFileNodes: (input: {
    /** File to export JSON from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
    file_key: string;
    /** A comma separated list of node IDs to retrieve and convert. */
    ids: string;
    /** A specific version ID to get. Omitting this will get the current version of the file. */
    version?: string;
    /** Positive integer representing how deep into the node tree to traverse. For example, setting this to 1 will return only the children directly underneath the desired nodes. Not setting this parameter returns all nodes.  Note: this parameter behaves differently from the same parameter in the `GET /v1/files/:key` endpoint. In this endpoint, the depth will be counted starting from the desired node rather than the document root node. */
    depth?: number;
    /** Set to "paths" to export vector data. */
    geometry?: string;
    /** A comma separated list of plugin IDs and/or the string "shared". Any data present in the document written by those plugins will be included in the result in the `pluginData` and `sharedPluginData` properties. */
    plugin_data?: string;
  }) => Promise<{ name: string; role: Role; lastModified: string; editorType: "figma" | "figjam"; thumbnailUrl: string; version: string; nodes: { [key: string]: { document: Node; components: { [key: string]: Component | undefined }; componentSets: { [key: string]: ComponentSet | undefined }; schemaVersion: number; styles: { [key: string]: Style | undefined } } | undefined } }>;

  /**
   * Render images of file nodes
   */
  getImages: (input: {
    /** File to export images from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
    file_key: string;
    /** A comma separated list of node IDs to render. */
    ids: string;
    /** A specific version ID to get. Omitting this will get the current version of the file. */
    version?: string;
    /** A number between 0.01 and 4, the image scaling factor. */
    scale?: number;
    /** A string enum for the image output format. */
    format?: "jpg" | "png" | "svg" | "pdf";
    /** Whether text elements are rendered as outlines (vector paths) or as `<text>` elements in SVGs.  Rendering text elements as outlines guarantees that the text looks exactly the same in the SVG as it does in the browser/inside Figma.  Exporting as `<text>` allows text to be selectable inside SVGs and generally makes the SVG easier to read. However, this relies on the browser's rendering engine which can vary between browsers and/or operating systems. As such, visual accuracy is not guaranteed as the result could look different than in Figma. */
    svg_outline_text?: boolean;
    /** Whether to include id attributes for all SVG elements. Adds the layer name to the `id` attribute of an svg element. */
    svg_include_id?: boolean;
    /** Whether to include node id attributes for all SVG elements. Adds the node id to a `data-node-id` attribute of an svg element. */
    svg_include_node_id?: boolean;
    /** Whether to simplify inside/outside strokes and use stroke attribute if possible instead of `<mask>`. */
    svg_simplify_stroke?: boolean;
    /** Whether content that overlaps the node should be excluded from rendering. Passing false (i.e., rendering overlaps) may increase processing time, since more of the document must be included in rendering. */
    contents_only?: boolean;
    /** Use the full dimensions of the node regardless of whether or not it is cropped or the space around it is empty. Use this to export text nodes without cropping. */
    use_absolute_bounds?: boolean;
  }) => Promise<{ err: null; images: { [key: string]: string | null | undefined } }>;

  /**
   * Get image fills
   */
  getImageFills: (input: {
    /** File to get image URLs from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
    file_key: string;
  }) => Promise<{ error: false; status: 200; meta: { images: { [key: string]: string | undefined } } }>;

  /**
   * Get file metadata
   */
  getFileMeta: (input: {
    /** File to get metadata for. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
    file_key: string;
  }) => Promise<{ name: string; folder_name?: string; last_touched_at: string; creator: User; last_touched_by?: User; thumbnail_url?: string; editorType: "figma" | "figjam" | "slides" | "buzz" | "sites" | "make"; role?: Role; link_access?: LinkAccess; url?: string; version?: string }>;

  /**
   * Get projects in a team
   */
  getTeamProjects: (input: {
    /** ID of the team to list projects from */
    team_id: string;
  }) => Promise<{ name: string; projects: (Project)[] }>;

  /**
   * Get files in a project
   */
  getProjectFiles: (input: {
    /** ID of the project to list files from */
    project_id: string;
    /** Returns branch metadata in the response for each main file with a branch inside the project. */
    branch_data?: boolean;
  }) => Promise<{ name: string; files: ({ key: string; name: string; thumbnail_url?: string; last_modified: string })[] }>;

  /**
   * Get versions of a file
   */
  getFileVersions: (input: {
    /** File to get version history from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
    file_key: string;
    /** The number of items returned in a page of the response. If not included, `page_size` is `30`. */
    page_size?: number;
    /** A version ID for one of the versions in the history. Gets versions before this ID. Used for paginating. If the response is not paginated, this link returns the same data in the current response. */
    before?: number;
    /** A version ID for one of the versions in the history. Gets versions after this ID. Used for paginating. If the response is not paginated, this property is not included. */
    after?: number;
  }) => Promise<{ versions: (Version)[]; pagination: ResponsePagination }>;

  /**
   * Get comments in a file
   */
  getComments: (input: {
    /** File to get comments from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
    file_key: string;
    /** If enabled, will return comments as their markdown equivalents when applicable. */
    as_md?: boolean;
  }) => Promise<{ comments: (Comment)[] }>;

  /**
   * Add a comment to a file
   */
  postComment: (input: {
    /** The text contents of the comment to post. */
    message: string;
    /** The ID of the comment to reply to, if any. This must be a root comment. You cannot reply to other replies (a comment that has a parent_id). */
    comment_id?: string;
    /** The position where to place the comment. */
    client_meta?: Vector | FrameOffset | Region | FrameOffsetRegion;
    /** File to add comments in. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
    file_key: string;
  }) => Promise<Comment>;

  /**
   * Delete a comment
   */
  deleteComment: (input: {
    /** File to delete comment from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
    file_key: string;
    /** Comment id of comment to delete */
    comment_id: string;
  }) => Promise<{ status: 200; error: false }>;

  /**
   * Get reactions for a comment
   */
  getCommentReactions: (input: {
    /** File to get comment containing reactions from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
    file_key: string;
    /** ID of comment to get reactions from. */
    comment_id: string;
    /** Cursor for pagination, retrieved from the response of the previous call. */
    cursor?: string;
  }) => Promise<{ reactions: (Reaction)[]; pagination: ResponsePagination }>;

  /**
   * Add a reaction to a comment
   */
  postCommentReaction: (input: {
    emoji: Emoji;
    /** File to post comment reactions to. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
    file_key: string;
    /** ID of comment to react to. */
    comment_id: string;
  }) => Promise<{ status: 200; error: false }>;

  /**
   * Delete a reaction
   */
  deleteCommentReaction: (input: {
    /** File to delete comment reaction from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
    file_key: string;
    /** ID of comment to delete reaction from. */
    comment_id: string;
    emoji: Emoji;
  }) => Promise<{ status: 200; error: false }>;

  /**
   * Get current user
   */
  getMe: () => Promise<User & { email: string }>;

  /**
   * Get team components
   */
  getTeamComponents: (input: {
    /** Id of the team to list components from. */
    team_id: string;
    /** Number of items to return in a paged list of results. Defaults to 30. Maximum of 1000. */
    page_size?: number;
    /** Cursor indicating which id after which to start retrieving components for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids. */
    after?: number;
    /** Cursor indicating which id before which to start retrieving components for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids. */
    before?: number;
  }) => Promise<{ status: 200; error: false; meta: { components: (PublishedComponent)[]; cursor?: ResponseCursor } }>;

  /**
   * Get file components
   */
  getFileComponents: (input: {
    /** File to list components from. This must be a main file key, not a branch key, as it is not possible to publish from branches. */
    file_key: string;
  }) => Promise<{ status: 200; error: false; meta: { components: (PublishedComponent)[] } }>;

  /**
   * Get component
   */
  getComponent: (input: {
    /** The unique identifier of the component. */
    key: string;
  }) => Promise<{ status: 200; error: false; meta: PublishedComponent }>;

  /**
   * Get team component sets
   */
  getTeamComponentSets: (input: {
    /** Id of the team to list component sets from. */
    team_id: string;
    /** Number of items to return in a paged list of results. Defaults to 30. */
    page_size?: number;
    /** Cursor indicating which id after which to start retrieving component sets for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids. */
    after?: number;
    /** Cursor indicating which id before which to start retrieving component sets for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids. */
    before?: number;
  }) => Promise<{ status: 200; error: false; meta: { component_sets: (PublishedComponentSet)[]; cursor?: ResponseCursor } }>;

  /**
   * Get file component sets
   */
  getFileComponentSets: (input: {
    /** File to list component sets from. This must be a main file key, not a branch key, as it is not possible to publish from branches. */
    file_key: string;
  }) => Promise<{ status: 200; error: false; meta: { component_sets: (PublishedComponentSet)[] } }>;

  /**
   * Get component set
   */
  getComponentSet: (input: {
    /** The unique identifier of the component set. */
    key: string;
  }) => Promise<{ status: 200; error: false; meta: PublishedComponentSet }>;

  /**
   * Get team styles
   */
  getTeamStyles: (input: {
    /** Id of the team to list styles from. */
    team_id: string;
    /** Number of items to return in a paged list of results. Defaults to 30. */
    page_size?: number;
    /** Cursor indicating which id after which to start retrieving styles for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids. */
    after?: number;
    /** Cursor indicating which id before which to start retrieving styles for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids. */
    before?: number;
  }) => Promise<{ status: 200; error: false; meta: { styles: (PublishedStyle)[]; cursor?: ResponseCursor } }>;

  /**
   * Get file styles
   */
  getFileStyles: (input: {
    /** File to list styles from. This must be a main file key, not a branch key, as it is not possible to publish from branches. */
    file_key: string;
  }) => Promise<{ status: 200; error: false; meta: { styles: (PublishedStyle)[] } }>;

  /**
   * Get style
   */
  getStyle: (input: {
    /** The unique identifier of the style. */
    key: string;
  }) => Promise<{ status: 200; error: false; meta: PublishedStyle }>;

  /**
   * Get webhooks by context or plan
   */
  getWebhooks: (input: {
    /** Context to create the resource on. Should be "team", "project", or "file". */
    context?: string;
    /** The id of the context that you want to get attached webhooks for. If you're using context_id, you cannot use plan_api_id. */
    context_id?: string;
    /** The id of your plan. Use this to get all webhooks for all contexts you have access to. If you're using plan_api_id, you cannot use context or context_id. When you use plan_api_id, the response is paginated. */
    plan_api_id?: string;
    /** If you're using plan_api_id, this is the cursor to use for pagination. If you're using context or context_id, this parameter is ignored. Provide the next_page or prev_page value from the previous response to get the next or previous page of results. */
    cursor?: string;
  }) => Promise<{ webhooks: (WebhookV2)[]; pagination?: ResponsePagination }>;

  /**
   * Create a webhook
   */
  postWebhook: (input: {
    event_type: WebhookV2Event;
    /** Team id to receive updates about. This is deprecated, use 'context' and 'context_id' instead. */
    team_id?: string;
    /** Context to create the webhook for. Must be "team", "project", or "file". */
    context: string;
    /** The id of the context you want to receive updates about. */
    context_id: string;
    /** The HTTP endpoint that will receive a POST request when the event triggers. Max length 2048 characters. */
    endpoint: string;
    /** String that will be passed back to your webhook endpoint to verify that it is being called by Figma. Max length 100 characters. */
    passcode: string;
    /** State of the webhook, including any error state it may be in */
    status?: WebhookV2Status;
    /** User provided description or name for the webhook. Max length 150 characters. */
    description?: string;
  }) => Promise<WebhookV2>;

  /**
   * Get a webhook
   */
  getWebhook: (input: {
    /** ID of webhook to get */
    webhook_id: string;
  }) => Promise<WebhookV2>;

  /**
   * Update a webhook
   */
  putWebhook: (input: {
    event_type: WebhookV2Event;
    /** The HTTP endpoint that will receive a POST request when the event triggers. Max length 2048 characters. */
    endpoint: string;
    /** String that will be passed back to your webhook endpoint to verify that it is being called by Figma. Max length 100 characters. */
    passcode: string;
    /** State of the webhook, including any error state it may be in */
    status?: WebhookV2Status;
    /** User provided description or name for the webhook. Max length 150 characters. */
    description?: string;
    /** ID of webhook to update */
    webhook_id: string;
  }) => Promise<WebhookV2>;

  /**
   * Delete a webhook
   */
  deleteWebhook: (input: {
    /** ID of webhook to delete */
    webhook_id: string;
  }) => Promise<WebhookV2>;

  /**
   * [Deprecated] Get team webhooks
   */
  getTeamWebhooks: (input: {
    /** ID of team to get webhooks for */
    team_id: string;
  }) => Promise<{ webhooks: (WebhookV2)[] }>;

  /**
   * Get webhook requests
   */
  getWebhookRequests: (input: {
    /** The id of the webhook subscription you want to see events from */
    webhook_id: string;
  }) => Promise<{ requests: (WebhookV2Request)[] }>;

  /**
   * Get activity logs
   */
  getActivityLogs: (input: {
    /** Event type(s) to include in the response. Can have multiple values separated by comma. All events are returned by default. */
    events?: string;
    /** Unix timestamp of the least recent event to include. This param defaults to one year ago if unspecified. */
    start_time?: number;
    /** Unix timestamp of the most recent event to include. This param defaults to the current timestamp if unspecified. */
    end_time?: number;
    /** Maximum number of events to return. This param defaults to 1000 if unspecified. */
    limit?: number;
    /** Event order by timestamp. This param can be either "asc" (default) or "desc". */
    order?: "asc" | "desc";
  }) => Promise<{ status?: 200; error?: false; meta?: { activity_logs?: (ActivityLog)[]; cursor?: string; next_page?: boolean } }>;

  /**
   * Get payments
   */
  getPayments: (input: {
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
  }) => Promise<{ status: 200; error: false; meta: PaymentInformation }>;

  /**
   * Get local variables
   */
  getLocalVariables: (input: {
    /** File to get variables from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
    file_key: string;
  }) => Promise<{ status: 200; error: false; meta: { variables: { [key: string]: LocalVariable | undefined }; variableCollections: { [key: string]: LocalVariableCollection | undefined } } }>;

  /**
   * Get published variables
   */
  getPublishedVariables: (input: {
    /** File to get variables from. This must be a main file key, not a branch key, as it is not possible to publish from branches. */
    file_key: string;
  }) => Promise<{ status: 200; error: false; meta: { variables: { [key: string]: PublishedVariable | undefined }; variableCollections: { [key: string]: PublishedVariableCollection | undefined } } }>;

  /**
   * Create/modify/delete variables
   */
  postVariables: (input: {
    /** For creating, updating, and deleting variable collections. */
    variableCollections?: (VariableCollectionChange)[];
    /** For creating, updating, and deleting modes within variable collections. */
    variableModes?: (VariableModeChange)[];
    /** For creating, updating, and deleting variables. */
    variables?: (VariableChange)[];
    /** For setting a specific value, given a variable and a mode. */
    variableModeValues?: (VariableModeValue)[];
    /** File to modify variables in. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
    file_key: string;
  }) => Promise<{ status: 200; error: false; meta: { tempIdToRealId: { [key: string]: string | undefined } } }>;

  /**
   * Get dev resources
   */
  getDevResources: (input: {
    /** The file to get the dev resources from. This must be a main file key, not a branch key. */
    file_key: string;
    /** Comma separated list of nodes that you care about in the document. If specified, only dev resources attached to these nodes will be returned. If not specified, all dev resources in the file will be returned. */
    node_ids?: string;
  }) => Promise<{ dev_resources: (DevResource)[] }>;

  /**
   * Create dev resources
   */
  postDevResources: (input: {
    /** An array of dev resources. */
    dev_resources: ({ name: string; url: string; file_key: string; node_id: string })[];
  }) => Promise<{ links_created: (DevResource)[]; errors?: ({ file_key?: string | null; node_id?: string | null; error: string })[] }>;

  /**
   * Update dev resources
   */
  putDevResources: (input: {
    /** An array of dev resources. */
    dev_resources: ({ id: string; name?: string; url?: string })[];
  }) => Promise<{ links_updated?: (DevResource)[]; errors?: ({ id?: string; error: string })[] }>;

  /**
   * Delete dev resource
   */
  deleteDevResource: (input: {
    /** The file to delete the dev resource from. This must be a main file key, not a branch key. */
    file_key: string;
    /** The id of the dev resource to delete. */
    dev_resource_id: string;
  }) => Promise<undefined>;

  /**
   * Get library analytics component action data.
   */
  getLibraryAnalyticsComponentActions: (input: {
    /** File key of the library to fetch analytics data for. */
    file_key: string;
    /** Cursor indicating what page of data to fetch. Obtained from prior API call. */
    cursor?: string;
    /** A dimension to group returned analytics data by. */
    group_by: "component" | "team";
    /** ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior. */
    start_date?: string;
    /** ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week. */
    end_date?: string;
  }) => Promise<{ rows: (LibraryAnalyticsComponentActionsByAsset)[] | (LibraryAnalyticsComponentActionsByTeam)[]; next_page: boolean; cursor?: string }>;

  /**
   * Get library analytics component usage data.
   */
  getLibraryAnalyticsComponentUsages: (input: {
    /** File key of the library to fetch analytics data for. */
    file_key: string;
    /** Cursor indicating what page of data to fetch. Obtained from prior API call. */
    cursor?: string;
    /** A dimension to group returned analytics data by. */
    group_by: "component" | "file";
  }) => Promise<{ rows: (LibraryAnalyticsComponentUsagesByAsset)[] | (LibraryAnalyticsComponentUsagesByFile)[]; next_page: boolean; cursor?: string }>;

  /**
   * Get library analytics style action data.
   */
  getLibraryAnalyticsStyleActions: (input: {
    /** File key of the library to fetch analytics data for. */
    file_key: string;
    /** Cursor indicating what page of data to fetch. Obtained from prior API call. */
    cursor?: string;
    /** A dimension to group returned analytics data by. */
    group_by: "style" | "team";
    /** ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior. */
    start_date?: string;
    /** ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week. */
    end_date?: string;
  }) => Promise<{ rows: (LibraryAnalyticsStyleActionsByAsset)[] | (LibraryAnalyticsStyleActionsByTeam)[]; next_page: boolean; cursor?: string }>;

  /**
   * Get library analytics style usage data.
   */
  getLibraryAnalyticsStyleUsages: (input: {
    /** File key of the library to fetch analytics data for. */
    file_key: string;
    /** Cursor indicating what page of data to fetch. Obtained from prior API call. */
    cursor?: string;
    /** A dimension to group returned analytics data by. */
    group_by: "style" | "file";
  }) => Promise<{ rows: (LibraryAnalyticsStyleUsagesByAsset)[] | (LibraryAnalyticsStyleUsagesByFile)[]; next_page: boolean; cursor?: string }>;

  /**
   * Get library analytics variable action data.
   */
  getLibraryAnalyticsVariableActions: (input: {
    /** File key of the library to fetch analytics data for. */
    file_key: string;
    /** Cursor indicating what page of data to fetch. Obtained from prior API call. */
    cursor?: string;
    /** A dimension to group returned analytics data by. */
    group_by: "variable" | "team";
    /** ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior. */
    start_date?: string;
    /** ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week. */
    end_date?: string;
  }) => Promise<{ rows: (LibraryAnalyticsVariableActionsByAsset)[] | (LibraryAnalyticsVariableActionsByTeam)[]; next_page: boolean; cursor?: string }>;

  /**
   * Get library analytics variable usage data.
   */
  getLibraryAnalyticsVariableUsages: (input: {
    /** File key of the library to fetch analytics data for. */
    file_key: string;
    /** Cursor indicating what page of data to fetch. Obtained from prior API call. */
    cursor?: string;
    /** A dimension to group returned analytics data by. */
    group_by: "variable" | "file";
  }) => Promise<{ rows: (LibraryAnalyticsVariableUsagesByAsset)[] | (LibraryAnalyticsVariableUsagesByFile)[]; next_page: boolean; cursor?: string }>;

  /**
   * Get oEmbed data
   */
  getOEmbed: (input: {
    /** The URL of the Figma file or published Make site to retrieve oEmbed data for. */
    url: string;
    /** Maximum width of the embed in pixels. Defaults to 800. The response width will be adjusted to maintain a 16:9 aspect ratio with maxheight. */
    maxwidth?: number;
    /** Maximum height of the embed in pixels. Defaults to 450. The response height will be adjusted to maintain a 16:9 aspect ratio with maxwidth. */
    maxheight?: number;
  }) => Promise<{ version: string; type: string; title: string; key?: string; url: string; provider_name: string; provider_url: string; cache_age: number; width: number; height: number; html: string; is_published_site?: boolean; folder_name?: string; thumbnail_url?: string; thumbnail_width?: number; thumbnail_height?: number }>;
};

export * from "./schemas.js";
