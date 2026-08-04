# Files

6 operations · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.getFile`

Get file JSON — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getFile(input: {
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
}): Promise<{ name: string; role: Role; lastModified: string; editorType: "figma" | "figjam"; thumbnailUrl?: string; version: string; document: DocumentNode; components: { [key: string]: Component | undefined }; componentSets: { [key: string]: ComponentSet | undefined }; schemaVersion: number; styles: { [key: string]: Style | undefined }; linkAccess?: string; mainFileKey?: string; branches?: ({ key: string; ...>
```

<sub>`GET /v1/files/{file_key}` · `getFile`</sub>

## `figma.getImageFills`

Get image fills — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getImageFills(input: {
  /** File to get image URLs from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
  file_key: string;
}): Promise<{ error: false; status: 200; meta: { images: { [key: string]: string | undefined } } }>
```

<sub>`GET /v1/files/{file_key}/images` · `getImageFills`</sub>

## `figma.getFileMeta`

Get file metadata — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getFileMeta(input: {
  /** File to get metadata for. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
  file_key: string;
}): Promise<{ file: { name: string; folder_name?: string; last_touched_at: string; creator: User; last_touched_by?: User; thumbnail_url?: string; editorType: "figma" | "figjam" | "slides" | "buzz" | "sites" | "make"; role?: Role; link_access?: LinkAccess; url?: string; version?: string } }>
```

<sub>`GET /v1/files/{file_key}/meta` · `getFileMeta`</sub>

## `figma.getFileNodes`

Get file JSON for specific nodes — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getFileNodes(input: {
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
}): Promise<{ name: string; role: Role; lastModified: string; editorType: "figma" | "figjam"; thumbnailUrl: string; version: string; nodes: { [key: string]: { document: Node; components: { [key: string]: Component | undefined }; componentSets: { [key: string]: ComponentSet | undefined }; schemaVersion: number; styles: { [key: string]: Style | undefined } } | undefined } }>
```

<sub>`GET /v1/files/{file_key}/nodes` · `getFileNodes`</sub>

## `figma.getFileVersions`

Get versions of a file — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getFileVersions(input: {
  /** File to get version history from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key. */
  file_key: string;
  /** The number of items returned in a page of the response. If not included, `page_size` is `30`. */
  page_size?: number;
  /** A version ID for one of the versions in the history. Gets versions before this ID. Used for paginating. If the response is not paginated, this link returns the same data in the current response. */
  before?: number;
  /** A version ID for one of the versions in the history. Gets versions after this ID. Used for paginating. If the response is not paginated, this property is not included. */
  after?: number;
}): Promise<{ versions: (Version)[]; pagination: ResponsePagination }>
```

<sub>`GET /v1/files/{file_key}/versions` · `getFileVersions`</sub>

## `figma.getImages`

Render images of file nodes — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getImages(input: {
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
}): Promise<{ err: null; images: { [key: string]: string | null | undefined } }>
```

<sub>`GET /v1/images/{file_key}` · `getImages`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
