export type IsLayerTrait = {
  /** A string uniquely identifying this node within the document. */
  id: string;
  /** The name given to the node by the user in the tool. */
  name: string;
  /** The type of the node */
  type: string;
  /** Whether or not the node is visible on the canvas. */
  visible?: boolean;
  /** If true, layer is locked and cannot be edited */
  locked?: boolean;
  /** Whether the layer is fixed while the parent is scrolling */
  isFixed?: boolean;
  /** How layer should be treated when the frame is resized */
  scrollBehavior: "SCROLLS" | "FIXED" | "STICKY_SCROLLS";
  /** The rotation of the node, if not 0. */
  rotation?: number;
  /** A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions. */
  componentPropertyReferences?: { [key: string]: string | undefined };
  /** Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin. */
  pluginData?: unknown;
  /** Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared". */
  sharedPluginData?: unknown;
  /** A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field. */
  boundVariables?: { size?: { x?: VariableAlias; y?: VariableAlias }; individualStrokeWeights?: { top?: VariableAlias; bottom?: VariableAlias; left?: VariableAlias; right?: VariableAlias }; characters?: VariableAlias; itemSpacing?: VariableAlias; paddingLeft?: VariableAlias; paddingRight?: VariableAlias; paddingTop?: VariableAlias; paddingBottom?: VariableAlias; visible?: VariableAlias; topLeftRadius?: VariableAlias; topRightRadius?: VariableAlias; bottomLeftRadius?: VariableAlias; bottomRightRadius?: VariableAlias; minWidth?: VariableAlias; maxWidth?: VariableAlias; minHeight?: VariableAlias; maxHeight?: VariableAlias; counterAxisSpacing?: VariableAlias; opacity?: VariableAlias; fontFamily?: (VariableAlias)[]; fontSize?: (VariableAlias)[]; fontStyle?: (VariableAlias)[]; fontWeight?: (VariableAlias)[]; letterSpacing?: (VariableAlias)[]; lineHeight?: (VariableAlias)[]; paragraphSpacing?: (VariableAlias)[]; paragraphIndent?: (VariableAlias)[]; fills?: (VariableAlias)[]; strokes?: (VariableAlias)[]; componentProperties?: { [key: string]: VariableAlias | undefined }; textRangeFills?: (VariableAlias)[]; effects?: (VariableAlias)[]; layoutGrids?: (VariableAlias)[]; rectangleCornerRadii?: { RECTANGLE_TOP_LEFT_CORNER_RADIUS?: VariableAlias; RECTANGLE_TOP_RIGHT_CORNER_RADIUS?: VariableAlias; RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS?: VariableAlias; RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS?: VariableAlias } };
  /** A mapping of variable collection ID to mode ID representing the explicitly set modes for this node. */
  explicitVariableModes?: { [key: string]: string | undefined };
};

export type HasChildrenTrait = {
  /** An array of nodes that are direct children of this node */
  children: (SubcanvasNode)[];
};

export type HasLayoutTrait = {
  /** Bounding box of the node in absolute space coordinates. */
  absoluteBoundingBox: Rectangle | null;
  /** The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible. */
  absoluteRenderBounds: Rectangle | null;
  /** Keep height and width constrained to same ratio. */
  preserveRatio?: boolean;
  /** Horizontal and vertical layout constraints for node. */
  constraints?: LayoutConstraint;
  /** The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed. */
  relativeTransform?: Transform;
  /** Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed. */
  size?: Vector;
  /**  Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.  - `INHERIT` - `STRETCH`  In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.  - `MIN` - `CENTER` - `MAX` - `STRETCH`  In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT". */
  layoutAlign?: "INHERIT" | "STRETCH" | "MIN" | "CENTER" | "MAX";
  /** This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch. */
  layoutGrow?: 0 | 1;
  /** Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable. */
  layoutPositioning?: "AUTO" | "ABSOLUTE";
  /** The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames. */
  minWidth?: number;
  /** The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames. */
  maxWidth?: number;
  /** The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames. */
  minHeight?: number;
  /** The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames. */
  maxHeight?: number;
  /** The horizontal sizing setting on this auto-layout frame or frame child. - `FIXED` - `HUG`: only valid on auto-layout frames and text nodes - `FILL`: only valid on auto-layout frame children */
  layoutSizingHorizontal?: "FIXED" | "HUG" | "FILL";
  /** The vertical sizing setting on this auto-layout frame or frame child. - `FIXED` - `HUG`: only valid on auto-layout frames and text nodes - `FILL`: only valid on auto-layout frame children */
  layoutSizingVertical?: "FIXED" | "HUG" | "FILL";
  /** The number of rows in the grid layout. This property is only applicable for auto-layout frames with `layoutMode: "GRID"`. */
  gridRowCount?: number;
  /** The number of columns in the grid layout. This property is only applicable for auto-layout frames with `layoutMode: "GRID"`. */
  gridColumnCount?: number;
  /** The distance between rows in the grid layout. This property is only applicable for auto-layout frames with `layoutMode: "GRID"`. */
  gridRowGap?: number;
  /** The distance between columns in the grid layout. This property is only applicable for auto-layout frames with `layoutMode: "GRID"`. */
  gridColumnGap?: number;
  /** The string for the CSS grid-template-columns property. This property is only applicable for auto-layout frames with `layoutMode: "GRID"`. */
  gridColumnsSizing?: string;
  /** The string for the CSS grid-template-rows property. This property is only applicable for auto-layout frames with `layoutMode: "GRID"`. */
  gridRowsSizing?: string;
  /** Determines how a GRID frame's child should be aligned in the horizontal direction within its grid area. This property is only applicable for direct children of frames with `layoutMode: "GRID"`. */
  gridChildHorizontalAlign?: "AUTO" | "MIN" | "CENTER" | "MAX";
  /** Determines how a GRID frame's child should be aligned in the vertical direction within its grid area. This property is only applicable for direct children of frames with `layoutMode: "GRID"`. */
  gridChildVerticalAlign?: "AUTO" | "MIN" | "CENTER" | "MAX";
  /** The number of rows that a GRID frame's child should span. This property is only applicable for direct children of frames with `layoutMode: "GRID"`. */
  gridRowSpan?: number;
  /** The number of columns that a GRID frame's child should span. This property is only applicable for direct children of frames with `layoutMode: "GRID"`. */
  gridColumnSpan?: number;
  /** The index of the row that a GRID frame's child should be anchored to. This property is only applicable for direct children of frames with `layoutMode: "GRID"`. */
  gridRowAnchorIndex?: number;
  /** The index of the column that a GRID frame's child should be anchored to. This property is only applicable for direct children of frames with `layoutMode: "GRID"`. */
  gridColumnAnchorIndex?: number;
};

export type HasFramePropertiesTrait = {
  /** Whether or not this node clip content outside of its bounds */
  clipsContent: boolean;
  /** Background of the node. This is deprecated, as backgrounds for frames are now in the `fills` field. */
  background?: (Paint)[];
  /** Background color of the node. This is deprecated, as frames now support more than a solid color as a background. Please use the `fills` field instead. */
  backgroundColor?: Rgba;
  /** An array of layout grids attached to this node (see layout grids section for more details). GROUP nodes do not have this attribute */
  layoutGrids?: (LayoutGrid)[];
  /** Whether a node has primary axis scrolling, horizontal or vertical. */
  overflowDirection?: "HORIZONTAL_SCROLLING" | "VERTICAL_SCROLLING" | "HORIZONTAL_AND_VERTICAL_SCROLLING" | "NONE";
  /** Whether this layer uses auto-layout to position its children. */
  layoutMode?: "NONE" | "HORIZONTAL" | "VERTICAL" | "GRID";
  /** Whether the primary axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames. */
  primaryAxisSizingMode?: "FIXED" | "AUTO";
  /** Whether the counter axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames. */
  counterAxisSizingMode?: "FIXED" | "AUTO";
  /** Determines how the auto-layout frame's children should be aligned in the primary axis direction. This property is only applicable for auto-layout frames. */
  primaryAxisAlignItems?: "MIN" | "CENTER" | "MAX" | "SPACE_BETWEEN";
  /** Determines how the auto-layout frame's children should be aligned in the counter axis direction. This property is only applicable for auto-layout frames. */
  counterAxisAlignItems?: "MIN" | "CENTER" | "MAX" | "BASELINE";
  /** The padding between the left border of the frame and its children. This property is only applicable for auto-layout frames. */
  paddingLeft?: number;
  /** The padding between the right border of the frame and its children. This property is only applicable for auto-layout frames. */
  paddingRight?: number;
  /** The padding between the top border of the frame and its children. This property is only applicable for auto-layout frames. */
  paddingTop?: number;
  /** The padding between the bottom border of the frame and its children. This property is only applicable for auto-layout frames. */
  paddingBottom?: number;
  /** The distance between children of the frame. Can be negative. This property is only applicable for auto-layout frames. */
  itemSpacing?: number;
  /** Determines the canvas stacking order of layers in this frame. When true, the first layer will be draw on top. This property is only applicable for auto-layout frames. */
  itemReverseZIndex?: boolean;
  /** Determines whether strokes are included in layout calculations. When true, auto-layout frames behave like css "box-sizing: border-box". This property is only applicable for auto-layout frames. */
  strokesIncludedInLayout?: boolean;
  /** Whether this auto-layout frame has wrapping enabled. */
  layoutWrap?: "NO_WRAP" | "WRAP";
  /** The distance between wrapped tracks of an auto-layout frame. This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"` */
  counterAxisSpacing?: number;
  /** Determines how the auto-layout frame’s wrapped tracks should be aligned in the counter axis direction. This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"`. */
  counterAxisAlignContent?: "AUTO" | "SPACE_BETWEEN";
};

export type HasBlendModeAndOpacityTrait = {
  /** How this node blends with nodes behind it in the scene (see blend mode section for more details) */
  blendMode: BlendMode;
  /** Opacity of the node */
  opacity?: number;
};

export type HasExportSettingsTrait = {
  /** An array of export settings representing images to export from the node. */
  exportSettings?: (ExportSetting)[];
};

export type HasGeometryTrait = MinimalFillsTrait & MinimalStrokesTrait & { fillOverrideTable?: { [key: string]: PaintOverride | null | undefined }; fillGeometry?: (Path)[]; strokeGeometry?: (Path)[]; strokeCap?: "NONE" | "ROUND" | "SQUARE" | "LINE_ARROW" | "TRIANGLE_ARROW" | "DIAMOND_FILLED" | "CIRCLE_FILLED" | "TRIANGLE_FILLED" | "WASHI_TAPE_1" | "WASHI_TAPE_2" | "WASHI_TAPE_3" | "WASHI_TAPE_4" | "WASHI_TAPE_5" | "WASHI_TAPE_6"; strokeMiterAngle?: number };

export type MinimalFillsTrait = {
  /** An array of fill paints applied to the node. */
  fills: (Paint)[];
  /** A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field. */
  styles?: { [key: string]: string | undefined };
};

export type MinimalStrokesTrait = {
  /** An array of stroke paints applied to the node. */
  strokes?: (Paint)[];
  /** The weight of strokes on the node. */
  strokeWeight?: number;
  /** Position of stroke relative to vector outline, as a string enum  - `INSIDE`: stroke drawn inside the shape boundary - `OUTSIDE`: stroke drawn outside the shape boundary - `CENTER`: stroke drawn centered along the shape boundary */
  strokeAlign?: "INSIDE" | "OUTSIDE" | "CENTER";
  /** A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered. */
  strokeJoin?: "MITER" | "BEVEL" | "ROUND";
  /** An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.  For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated. */
  strokeDashes?: (number)[];
};

export type IndividualStrokesTrait = {
  /** An object including the top, bottom, left, and right stroke weights. Only returned if individual stroke weights are used. */
  individualStrokeWeights?: StrokeWeights;
};

export type VariableWidthStrokesTrait = { [key: string]: unknown };

export type ComplexStrokesTrait = { [key: string]: unknown };

export type CornerTrait = {
  /** Radius of each corner if a single radius is set for all corners */
  cornerRadius?: number;
  /** A value that lets you control how "smooth" the corners are. Ranges from 0 to 1. 0 is the default and means that the corner is perfectly circular. A value of 0.6 means the corner matches the iOS 7 "squircle" icon shape. Other values produce various other curves. */
  cornerSmoothing?: number;
  /** Array of length 4 of the radius of each corner of the frame, starting in the top left and proceeding clockwise.  Values are given in the order top-left, top-right, bottom-right, bottom-left. */
  rectangleCornerRadii?: (number)[];
};

export type HasEffectsTrait = {
  /** An array of effects attached to this node (see effects section for more details) */
  effects: (Effect)[];
};

export type HasMaskTrait = {
  /** Does this node mask sibling nodes in front of it? */
  isMask?: boolean;
  /** If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:  - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result. - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result. - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result. */
  maskType?: "ALPHA" | "VECTOR" | "LUMINANCE";
  /** True if maskType is VECTOR. This field is deprecated; use maskType instead. */
  isMaskOutline?: boolean;
};

export type ComponentPropertiesTrait = {
  /** A mapping of name to `ComponentPropertyDefinition` for every component property on this component. Each property has a type, defaultValue, and other optional values. */
  componentPropertyDefinitions?: { [key: string]: ComponentPropertyDefinition | undefined };
};

export type TypePropertiesTrait = {
  /** The raw characters in the text node. */
  characters: string;
  /** Style of text including font family and weight. */
  style: TypeStyle;
  /** The array corresponds to characters in the text box, where each element references the 'styleOverrideTable' to apply specific styles to each character. The array's length can be less than or equal to the number of characters due to the removal of trailing zeros. Elements with a value of 0 indicate characters that use the default type style. If the array is shorter than the total number of characters, the characters beyond the array's length also use the default style. */
  characterStyleOverrides: (number)[];
  /** Internal property, preserved for backward compatibility. Avoid using this value. */
  layoutVersion?: number;
  /** Map from ID to TypeStyle for looking up style overrides. */
  styleOverrideTable: { [key: string]: TypeStyle | undefined };
  /** An array with the same number of elements as lines in the text node, where lines are delimited by newline or paragraph separator characters. Each element in the array corresponds to the list type of a specific line. List types are represented as string enums with one of these possible values:  - `NONE`: Not a list item. - `ORDERED`: Text is an ordered list (numbered). - `UNORDERED`: Text is an unordered list (bulleted). */
  lineTypes: ("NONE" | "ORDERED" | "UNORDERED")[];
  /** An array with the same number of elements as lines in the text node, where lines are delimited by newline or paragraph separator characters. Each element in the array corresponds to the indentation level of a specific line. */
  lineIndentations: (number)[];
};

export type TextPathPropertiesTrait = {
  /** The raw characters in the text path node. */
  characters: string;
  /** Style of text including font family and weight. */
  style: TextPathTypeStyle;
  /** The array corresponds to characters in the text box, where each element references the 'styleOverrideTable' to apply specific styles to each character. The array's length can be less than or equal to the number of characters due to the removal of trailing zeros. Elements with a value of 0 indicate characters that use the default type style. If the array is shorter than the total number of characters, the characters beyond the array's length also use the default style. */
  characterStyleOverrides: (number)[];
  /** Internal property, preserved for backward compatibility. Avoid using this value. */
  layoutVersion?: number;
  /** Map from ID to TextPathTypeStyle for looking up style overrides. */
  styleOverrideTable: { [key: string]: TextPathTypeStyle | undefined };
};

export type HasTextSublayerTrait = {
  /** Text contained within a text box. */
  characters: string;
};

export type TransitionSourceTrait = {
  /** Node ID of node to transition to in prototyping */
  transitionNodeID?: string;
  /** The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node. */
  transitionDuration?: number;
  /** The easing curve used in the prototyping transition on this node. */
  transitionEasing?: EasingType;
  interactions?: (Interaction)[];
};

export type DevStatusTrait = {
  /** Represents whether or not a node has a particular handoff (or dev) status applied to it. */
  devStatus?: { type: "NONE" | "READY_FOR_DEV" | "COMPLETED"; description?: string };
};

export type AnnotationsTrait = { [key: string]: unknown };

export type TransformModifiersTrait = { [key: string]: unknown };

export type FrameTraits = IsLayerTrait & HasBlendModeAndOpacityTrait & HasChildrenTrait & HasLayoutTrait & HasFramePropertiesTrait & CornerTrait & HasGeometryTrait & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & IndividualStrokesTrait & VariableWidthStrokesTrait & ComplexStrokesTrait & DevStatusTrait & AnnotationsTrait;

export type DefaultShapeTraits = IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & HasGeometryTrait & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & VariableWidthStrokesTrait & ComplexStrokesTrait;

export type CornerRadiusShapeTraits = DefaultShapeTraits & CornerTrait;

export type RectangularShapeTraits = DefaultShapeTraits & CornerTrait & IndividualStrokesTrait & AnnotationsTrait;

export type Node = BooleanOperationNode | ComponentNode | ComponentSetNode | ConnectorNode | EllipseNode | EmbedNode | FrameNode | GroupNode | InstanceNode | LineNode | LinkUnfurlNode | RectangleNode | RegularPolygonNode | SectionNode | ShapeWithTextNode | SliceNode | StarNode | StickyNode | TableNode | TableCellNode | TextNode | TextPathNode | TransformGroupNode | VectorNode | WashiTapeNode | WidgetNode | DocumentNode | CanvasNode;

export type DocumentNode = { type: "DOCUMENT"; children: (CanvasNode)[] } & IsLayerTrait;

export type CanvasNode = { type: "CANVAS"; children: (SubcanvasNode)[]; backgroundColor: Rgba; prototypeStartNodeID: string | null; flowStartingPoints: (FlowStartingPoint)[]; prototypeDevice: PrototypeDevice; prototypeBackgrounds?: (Rgba)[]; measurements?: (Measurement)[] } & IsLayerTrait & HasExportSettingsTrait;

export type SubcanvasNode = BooleanOperationNode | ComponentNode | ComponentSetNode | ConnectorNode | EllipseNode | EmbedNode | FrameNode | GroupNode | InstanceNode | LineNode | LinkUnfurlNode | RectangleNode | RegularPolygonNode | SectionNode | ShapeWithTextNode | SliceNode | StarNode | StickyNode | TableNode | TableCellNode | TextNode | TextPathNode | TransformGroupNode | VectorNode | WashiTapeNode | WidgetNode;

export type BooleanOperationNode = { type: "BOOLEAN_OPERATION"; booleanOperation: "UNION" | "INTERSECT" | "SUBTRACT" | "EXCLUDE" } & IsLayerTrait & HasBlendModeAndOpacityTrait & HasChildrenTrait & HasLayoutTrait & HasGeometryTrait & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait;

export type SectionNode = { type: "SECTION"; sectionContentsHidden: boolean } & IsLayerTrait & HasGeometryTrait & HasChildrenTrait & HasLayoutTrait & DevStatusTrait;

export type FrameNode = { type: "FRAME" } & FrameTraits;

export type GroupNode = { type: "GROUP" } & FrameTraits;

export type ComponentNode = { type: "COMPONENT" } & FrameTraits & ComponentPropertiesTrait;

export type ComponentSetNode = { type: "COMPONENT_SET" } & FrameTraits & ComponentPropertiesTrait;

export type VectorNode = { type: "VECTOR" } & CornerRadiusShapeTraits & AnnotationsTrait;

export type StarNode = { type: "STAR" } & CornerRadiusShapeTraits & AnnotationsTrait;

export type LineNode = { type: "LINE" } & DefaultShapeTraits & AnnotationsTrait;

export type EllipseNode = { type: "ELLIPSE"; arcData: ArcData } & DefaultShapeTraits & AnnotationsTrait;

export type RegularPolygonNode = { type: "REGULAR_POLYGON" } & CornerRadiusShapeTraits & AnnotationsTrait;

export type RectangleNode = { type: "RECTANGLE" } & RectangularShapeTraits;

export type TextNode = { type: "TEXT" } & DefaultShapeTraits & TypePropertiesTrait & AnnotationsTrait;

export type TextPathNode = { type: "TEXT_PATH" } & DefaultShapeTraits & TextPathPropertiesTrait;

export type TableNode = { type: "TABLE" } & IsLayerTrait & HasChildrenTrait & HasLayoutTrait & MinimalStrokesTrait & HasEffectsTrait & HasBlendModeAndOpacityTrait & HasExportSettingsTrait;

export type TableCellNode = { type: "TABLE_CELL" } & IsLayerTrait & MinimalFillsTrait & HasLayoutTrait & HasTextSublayerTrait;

export type TransformGroupNode = { type: "TRANSFORM_GROUP" } & FrameTraits & TransformModifiersTrait;

export type SliceNode = { type: "SLICE" } & IsLayerTrait;

export type InstanceNode = { type: "INSTANCE"; componentId: string; isExposedInstance?: boolean; exposedInstances?: (string)[]; componentProperties?: { [key: string]: ComponentProperty | undefined }; overrides: (Overrides)[] } & FrameTraits;

export type EmbedNode = { type: "EMBED" } & IsLayerTrait & HasExportSettingsTrait;

export type LinkUnfurlNode = { type: "LINK_UNFURL" } & IsLayerTrait & HasExportSettingsTrait;

export type StickyNode = { type: "STICKY"; authorVisible?: boolean } & IsLayerTrait & HasLayoutTrait & HasBlendModeAndOpacityTrait & MinimalFillsTrait & HasMaskTrait & HasEffectsTrait & HasExportSettingsTrait & HasTextSublayerTrait;

export type ShapeWithTextNode = { type: "SHAPE_WITH_TEXT"; shapeType: ShapeType } & IsLayerTrait & HasLayoutTrait & HasBlendModeAndOpacityTrait & MinimalFillsTrait & HasMaskTrait & HasEffectsTrait & HasExportSettingsTrait & HasTextSublayerTrait & CornerTrait & MinimalStrokesTrait;

export type ConnectorNode = { type: "CONNECTOR"; connectorStart: ConnectorEndpoint; connectorEnd: ConnectorEndpoint; connectorStartStrokeCap: "NONE" | "LINE_ARROW" | "TRIANGLE_ARROW" | "DIAMOND_FILLED" | "CIRCLE_FILLED" | "TRIANGLE_FILLED"; connectorEndStrokeCap: "NONE" | "LINE_ARROW" | "TRIANGLE_ARROW" | "DIAMOND_FILLED" | "CIRCLE_FILLED" | "TRIANGLE_FILLED"; connectorLineType: ConnectorLineType; textBackground?: ConnectorTextBackground } & IsLayerTrait & HasLayoutTrait & HasBlendModeAndOpacityTrait & HasEffectsTrait & HasExportSettingsTrait & HasTextSublayerTrait & MinimalStrokesTrait;

export type WashiTapeNode = { type: "WASHI_TAPE" } & DefaultShapeTraits;

export type WidgetNode = { type: "WIDGET" } & IsLayerTrait & HasExportSettingsTrait & HasChildrenTrait;

/** An RGB color */
export type Rgb = {
  /** Red channel value, between 0 and 1. */
  r: number;
  /** Green channel value, between 0 and 1. */
  g: number;
  /** Blue channel value, between 0 and 1. */
  b: number;
};

/** An RGBA color */
export type Rgba = {
  /** Red channel value, between 0 and 1. */
  r: number;
  /** Green channel value, between 0 and 1. */
  g: number;
  /** Blue channel value, between 0 and 1. */
  b: number;
  /** Alpha channel value, between 0 and 1. */
  a: number;
};

/** A flow starting point used when launching a prototype to enter Presentation view. */
export type FlowStartingPoint = {
  /** Unique identifier specifying the frame. */
  nodeId: string;
  /** Name of flow. */
  name: string;
};

/** A width and a height. */
export type Size = {
  /** The width of a size. */
  width: number;
  /** the height of a size. */
  height: number;
};

/** The device used to view a prototype. */
export type PrototypeDevice = {
  type: "NONE" | "PRESET" | "CUSTOM" | "PRESENTATION";
  size?: Size;
  presetIdentifier?: string;
  rotation: "NONE" | "CCW_90";
};

/** Sizing constraint for exports. */
export type Constraint = {
  /** Type of constraint to apply:  - `SCALE`: Scale by `value`. - `WIDTH`: Scale proportionally and set width to `value`. - `HEIGHT`: Scale proportionally and set height to `value`. */
  type: "SCALE" | "WIDTH" | "HEIGHT";
  /** See type property for effect of this field. */
  value: number;
};

/** An export setting. */
export type ExportSetting = {
  suffix: string;
  format: "JPG" | "PNG" | "SVG" | "PDF";
  constraint: Constraint;
};

/** This type is a string enum with the following possible values  Normal blends: - `PASS_THROUGH` (only applicable to objects with children) - `NORMAL`  Darken: - `DARKEN` - `MULTIPLY` - `LINEAR_BURN` - `COLOR_BURN`  Lighten: - `LIGHTEN` - `SCREEN` - `LINEAR_DODGE` - `COLOR_DODGE`  Contrast: - `OVERLAY` - `SOFT_LIGHT` - `HARD_LIGHT`  Inversion: - `DIFFERENCE` - `EXCLUSION`  Component: - `HUE` - `SATURATION` - `COLOR` - `LUMINOSITY` */
export type BlendMode = "PASS_THROUGH" | "NORMAL" | "DARKEN" | "MULTIPLY" | "LINEAR_BURN" | "COLOR_BURN" | "LIGHTEN" | "SCREEN" | "LINEAR_DODGE" | "COLOR_DODGE" | "OVERLAY" | "SOFT_LIGHT" | "HARD_LIGHT" | "DIFFERENCE" | "EXCLUSION" | "HUE" | "SATURATION" | "COLOR" | "LUMINOSITY";

/** A 2d vector. */
export type Vector = {
  /** X coordinate of the vector. */
  x: number;
  /** Y coordinate of the vector. */
  y: number;
};

/** A single color stop with its position along the gradient axis, color, and bound variables if any */
export type ColorStop = {
  /** Value between 0 and 1 representing position along gradient axis. */
  position: number;
  /** Color attached to corresponding position. */
  color: Rgba;
  /** The variables bound to a particular gradient stop */
  boundVariables?: { color?: VariableAlias };
};

/** A transformation matrix is standard way in computer graphics to represent translation and rotation. These are the top two rows of a 3x3 matrix. The bottom row of the matrix is assumed to be [0, 0, 1]. This is known as an affine transform and is enough to represent translation, rotation, and skew.  The identity transform is [[1, 0, 0], [0, 1, 0]].  A translation matrix will typically look like:  ``` [[1, 0, tx],   [0, 1, ty]] ```  and a rotation matrix will typically look like:  ``` [[cos(angle), sin(angle), 0],   [-sin(angle), cos(angle), 0]] ```  Another way to think about this transform is as three vectors:  - The x axis (t[0][0], t[1][0]) - The y axis (t[0][1], t[1][1]) - The translation offset (t[0][2], t[1][2])  The most common usage of the Transform matrix is the `relativeTransform property`. This particular usage of the matrix has a few additional restrictions. The translation offset can take on any value but we do enforce that the axis vectors are unit vectors (i.e. have length 1). The axes are not required to be at 90° angles to each other. */
export type Transform = ((number)[])[];

/** Image filters to apply to the node. */
export type ImageFilters = {
  exposure?: number;
  contrast?: number;
  saturation?: number;
  temperature?: number;
  tint?: number;
  highlights?: number;
  shadows?: number;
};

export type BasePaint = {
  /** Is the paint enabled? */
  visible?: boolean;
  /** Overall opacity of paint (colors within the paint can also have opacity values which would blend with this) */
  opacity?: number;
  /** How this node blends with nodes behind it in the scene */
  blendMode: BlendMode;
};

export type SolidPaint = { type: "SOLID"; color: Rgba; boundVariables?: { color?: VariableAlias } } & BasePaint;

export type GradientPaint = { type: "GRADIENT_LINEAR" | "GRADIENT_RADIAL" | "GRADIENT_ANGULAR" | "GRADIENT_DIAMOND"; gradientHandlePositions: (Vector)[]; gradientStops: (ColorStop)[] } & BasePaint;

export type ImagePaint = { type: "IMAGE"; scaleMode: "FILL" | "FIT" | "TILE" | "STRETCH"; imageRef: string; imageTransform?: Transform; scalingFactor?: number; filters?: ImageFilters; rotation?: number; gifRef?: string } & BasePaint;

export type PatternPaint = { type: "PATTERN"; sourceNodeId: string; tileType: "RECTANGULAR" | "HORIZONTAL_HEXAGONAL" | "VERTICAL_HEXAGONAL"; scalingFactor: number; spacing: Vector; horizontalAlignment: "START" | "CENTER" | "END"; verticalAlignment: "START" | "CENTER" | "END" } & BasePaint;

export type Paint = SolidPaint | GradientPaint | ImagePaint | PatternPaint;

/** Layout constraint relative to containing Frame */
export type LayoutConstraint = {
  /** Vertical constraint (relative to containing frame) as an enum:  - `TOP`: Node is laid out relative to top of the containing frame - `BOTTOM`: Node is laid out relative to bottom of the containing frame - `CENTER`: Node is vertically centered relative to containing frame - `TOP_BOTTOM`: Both top and bottom of node are constrained relative to containing frame (node stretches with frame) - `SCALE`: Node scales vertically with containing frame */
  vertical: "TOP" | "BOTTOM" | "CENTER" | "TOP_BOTTOM" | "SCALE";
  /** Horizontal constraint (relative to containing frame) as an enum:  - `LEFT`: Node is laid out relative to left of the containing frame - `RIGHT`: Node is laid out relative to right of the containing frame - `CENTER`: Node is horizontally centered relative to containing frame - `LEFT_RIGHT`: Both left and right of node are constrained relative to containing frame (node stretches with frame) - `SCALE`: Node scales horizontally with containing frame */
  horizontal: "LEFT" | "RIGHT" | "CENTER" | "LEFT_RIGHT" | "SCALE";
};

/** A rectangle that expresses a bounding box in absolute coordinates. */
export type Rectangle = {
  /** X coordinate of top left corner of the rectangle. */
  x: number;
  /** Y coordinate of top left corner of the rectangle. */
  y: number;
  /** Width of the rectangle. */
  width: number;
  /** Height of the rectangle. */
  height: number;
};

/** Guides to align and place objects within a frames. */
export type LayoutGrid = {
  /** Orientation of the grid as a string enum  - `COLUMNS`: Vertical grid - `ROWS`: Horizontal grid - `GRID`: Square grid */
  pattern: "COLUMNS" | "ROWS" | "GRID";
  /** Width of column grid or height of row grid or square grid spacing. */
  sectionSize: number;
  /** Is the grid currently visible? */
  visible: boolean;
  /** Color of the grid */
  color: Rgba;
  /** Positioning of grid as a string enum  - `MIN`: Grid starts at the left or top of the frame - `MAX`: Grid starts at the right or bottom of the frame - `STRETCH`: Grid is stretched to fit the frame - `CENTER`: Grid is center aligned */
  alignment: "MIN" | "MAX" | "STRETCH" | "CENTER";
  /** Spacing in between columns and rows */
  gutterSize: number;
  /** Spacing before the first column or row */
  offset: number;
  /** Number of columns or rows */
  count: number;
  /** The variables bound to a particular field on this layout grid */
  boundVariables?: { gutterSize?: VariableAlias; numSections?: VariableAlias; sectionSize?: VariableAlias; offset?: VariableAlias };
};

/** Base properties shared by all shadow effects */
export type BaseShadowEffect = {
  /** The color of the shadow */
  color: Rgba;
  /** Blend mode of the shadow */
  blendMode: BlendMode;
  /** How far the shadow is projected in the x and y directions */
  offset: Vector;
  /** Radius of the blur effect (applies to shadows as well) */
  radius: number;
  /** The distance by which to expand (or contract) the shadow.  For drop shadows, a positive `spread` value creates a shadow larger than the node, whereas a negative value creates a shadow smaller than the node.  For inner shadows, a positive `spread` value contracts the shadow. Spread values are only accepted on rectangles and ellipses, or on frames, components, and instances with visible fill paints and `clipsContent` enabled. When left unspecified, the default value is 0. */
  spread?: number;
  /** Whether this shadow is visible. */
  visible: boolean;
  /** The variables bound to a particular field on this shadow effect */
  boundVariables?: { radius?: VariableAlias; spread?: VariableAlias; color?: VariableAlias; offsetX?: VariableAlias; offsetY?: VariableAlias };
};

export type DropShadowEffect = { type: "DROP_SHADOW"; showShadowBehindNode: boolean } & BaseShadowEffect;

export type InnerShadowEffect = { type?: "INNER_SHADOW" } & BaseShadowEffect;

export type BlurEffect = NormalBlurEffect | ProgressiveBlurEffect;

/** Base properties shared by all blur effects */
export type BaseBlurEffect = {
  /** A string literal representing the effect's type. Always check the type before reading other properties. */
  type: "LAYER_BLUR" | "BACKGROUND_BLUR";
  /** Whether this blur is active. */
  visible: boolean;
  /** Radius of the blur effect */
  radius: number;
  /** The variables bound to a particular field on this blur effect */
  boundVariables?: { radius?: VariableAlias };
};

export type NormalBlurEffect = { blurType?: "NORMAL" } & BaseBlurEffect;

export type ProgressiveBlurEffect = { blurType: "PROGRESSIVE"; startRadius: number; startOffset: Vector; endOffset: Vector } & BaseBlurEffect;

/** A texture effect */
export type TextureEffect = {
  /** The string literal 'TEXTURE' representing the effect's type. Always check the type before reading other properties. */
  type: "TEXTURE";
  /** Whether the texture effect is visible. */
  visible: boolean;
  /** The size of the texture effect */
  noiseSize: number;
  /** The radius of the texture effect */
  radius: number;
  /** Whether the texture is clipped to the shape */
  clipToShape: boolean;
};

export type MonotoneNoiseEffect = { noiseType: "MONOTONE" } & BaseNoiseEffect;

export type MultitoneNoiseEffect = { noiseType: "MULTITONE"; opacity: number } & BaseNoiseEffect;

export type DuotoneNoiseEffect = { noiseType: "DUOTONE"; secondaryColor: Rgba } & BaseNoiseEffect;

/** A noise effect */
export type BaseNoiseEffect = {
  /** The string literal 'NOISE' representing the effect's type. Always check the type before reading other properties. */
  type: "NOISE";
  /** The color of the noise effect */
  color: Rgba;
  /** Whether the noise effect is visible. */
  visible: boolean;
  /** Blend mode of the noise effect */
  blendMode: BlendMode;
  /** The size of the noise effect */
  noiseSize: number;
  /** The density of the noise effect */
  density: number;
};

export type NoiseEffect = MonotoneNoiseEffect | MultitoneNoiseEffect | DuotoneNoiseEffect;

export type Effect = DropShadowEffect | InnerShadowEffect | BlurEffect | TextureEffect | NoiseEffect;

/** A set of properties that can be applied to nodes and published. Styles for a property can be created in the corresponding property's panel while editing a file. */
export type Style = {
  /** The key of the style */
  key: string;
  /** Name of the style */
  name: string;
  /** Description of the style */
  description: string;
  /** Whether this style is a remote style that doesn't live in this file */
  remote: boolean;
  styleType: StyleType;
};

/** This type is a string enum with the following possible values:  - `EASE_IN`: Ease in with an animation curve similar to CSS ease-in. - `EASE_OUT`: Ease out with an animation curve similar to CSS ease-out. - `EASE_IN_AND_OUT`: Ease in and then out with an animation curve similar to CSS ease-in-out. - `LINEAR`: No easing, similar to CSS linear. - `EASE_IN_BACK`: Ease in with an animation curve that moves past the initial keyframe's value and then accelerates as it reaches the end. - `EASE_OUT_BACK`: Ease out with an animation curve that starts fast, then slows and goes past the ending keyframe's value. - `EASE_IN_AND_OUT_BACK`: Ease in and then out with an animation curve that overshoots the initial keyframe's value, then accelerates quickly before it slows and overshoots the ending keyframes value. - `CUSTOM_CUBIC_BEZIER`: User-defined cubic bezier curve. - `GENTLE`: Gentle animation similar to react-spring. - `QUICK`: Quick spring animation, great for toasts and notifications. - `BOUNCY`: Bouncy spring, for delightful animations like a heart bounce. - `SLOW`: Slow spring, useful as a steady, natural way to scale up fullscreen content. - `CUSTOM_SPRING`: User-defined spring animation. */
export type EasingType = "EASE_IN" | "EASE_OUT" | "EASE_IN_AND_OUT" | "LINEAR" | "EASE_IN_BACK" | "EASE_OUT_BACK" | "EASE_IN_AND_OUT_BACK" | "CUSTOM_CUBIC_BEZIER" | "GENTLE" | "QUICK" | "BOUNCY" | "SLOW" | "CUSTOM_SPRING";

/** Individual stroke weights */
export type StrokeWeights = {
  /** The top stroke weight. */
  top: number;
  /** The right stroke weight. */
  right: number;
  /** The bottom stroke weight. */
  bottom: number;
  /** The left stroke weight. */
  left: number;
};

/** Paint metadata to override default paints. */
export type PaintOverride = {
  /** Paints applied to characters. */
  fills?: (Paint)[];
  /** ID of style node, if any, that this inherits fill data from. */
  inheritFillStyleId?: string;
};

/** Defines a single path */
export type Path = {
  /** A series of path commands that encodes how to draw the path. */
  path: string;
  /** The winding rule for the path (same as in SVGs). This determines whether a given point in space is inside or outside the path. */
  windingRule: "NONZERO" | "EVENODD";
  /** If there is a per-region fill, this refers to an ID in the `fillOverrideTable`. */
  overrideID?: number;
};

/** Information about the arc properties of an ellipse. 0° is the x axis and increasing angles rotate clockwise. */
export type ArcData = {
  /** Start of the sweep in radians. */
  startingAngle: number;
  /** End of the sweep in radians. */
  endingAngle: number;
  /** Inner radius value between 0 and 1 */
  innerRadius: number;
};

/** A link to either a URL or another frame (node) in the document. */
export type Hyperlink = {
  /** The type of hyperlink. Can be either `URL` or `NODE`. */
  type: "URL" | "NODE";
  /** The URL that the hyperlink points to, if `type` is `URL`. */
  url?: string;
  /** The ID of the node that the hyperlink points to, if `type` is `NODE`. */
  nodeID?: string;
};

export type BaseTypeStyle = {
  /** Font family of text (standard name). */
  fontFamily?: string;
  /** PostScript font name. */
  fontPostScriptName?: string | null;
  /** Describes visual weight or emphasis, such as Bold or Italic. */
  fontStyle?: string;
  /** Whether or not text is italicized. */
  italic?: boolean;
  /** Numeric font weight. */
  fontWeight?: number;
  /** Font size in px. */
  fontSize?: number;
  /** Text casing applied to the node, default is the original casing. */
  textCase?: "ORIGINAL" | "UPPER" | "LOWER" | "TITLE" | "SMALL_CAPS" | "SMALL_CAPS_FORCED";
  /** Horizontal text alignment as string enum. */
  textAlignHorizontal?: "LEFT" | "RIGHT" | "CENTER" | "JUSTIFIED";
  /** Vertical text alignment as string enum. */
  textAlignVertical?: "TOP" | "CENTER" | "BOTTOM";
  /** Space between characters in px. */
  letterSpacing?: number;
  /** An array of fill paints applied to the characters. */
  fills?: (Paint)[];
  /** Link to a URL or frame. */
  hyperlink?: Hyperlink;
  /** A map of OpenType feature flags to 1 or 0, 1 if it is enabled and 0 if it is disabled. Note that some flags aren't reflected here. For example, SMCP (small caps) is still represented by the `textCase` field. */
  opentypeFlags?: { [key: string]: number | undefined };
  /** Indicates how the font weight was overridden when there is a text style override. */
  semanticWeight?: "BOLD" | "NORMAL";
  /** Indicates how the font style was overridden when there is a text style override. */
  semanticItalic?: "ITALIC" | "NORMAL";
};

export type TypeStyle = { paragraphSpacing?: number; paragraphIndent?: number; listSpacing?: number; textDecoration?: "NONE" | "STRIKETHROUGH" | "UNDERLINE"; textAutoResize?: "NONE" | "WIDTH_AND_HEIGHT" | "HEIGHT" | "TRUNCATE"; textTruncation?: "DISABLED" | "ENDING"; maxLines?: number; lineHeightPx?: number; lineHeightPercent?: number; lineHeightPercentFontSize?: number; lineHeightUnit?: "PIXELS" | "FONT_SIZE_%" | "INTRINSIC_%"; isOverrideOverTextStyle?: boolean; boundVariables?: { fontFamily?: VariableAlias; fontSize?: VariableAlias; fontStyle?: VariableAlias; fontWeight?: VariableAlias; letterSpacing?: VariableAlias; lineHeight?: VariableAlias; paragraphSpacing?: VariableAlias; paragraphIndent?: VariableAlias } } & BaseTypeStyle;

export type TextPathTypeStyle = { isOverrideOverTextStyle?: boolean; boundVariables?: { fontFamily?: VariableAlias; fontSize?: VariableAlias; fontStyle?: VariableAlias; fontWeight?: VariableAlias; letterSpacing?: VariableAlias } } & BaseTypeStyle;

/** Component property type. */
export type ComponentPropertyType = "BOOLEAN" | "INSTANCE_SWAP" | "TEXT" | "VARIANT";

/** Instance swap preferred value. */
export type InstanceSwapPreferredValue = {
  /** Type of node for this preferred value. */
  type: "COMPONENT" | "COMPONENT_SET";
  /** Key of this component or component set. */
  key: string;
};

/** A property of a component. */
export type ComponentPropertyDefinition = {
  /** Type of this component property. */
  type: ComponentPropertyType;
  /** Initial value of this property for instances. */
  defaultValue: boolean | string;
  /** All possible values for this property. Only exists on VARIANT properties. */
  variantOptions?: (string)[];
  /** Preferred values for this property. Only applicable if type is `INSTANCE_SWAP`. */
  preferredValues?: (InstanceSwapPreferredValue)[];
};

/** A property of a component. */
export type ComponentProperty = {
  /** Type of this component property. */
  type: ComponentPropertyType;
  /** Value of the property for this component instance. */
  value: boolean | string;
  /** Preferred values for this property. Only applicable if type is `INSTANCE_SWAP`. */
  preferredValues?: (InstanceSwapPreferredValue)[];
  /** The variables bound to a particular field on this component property */
  boundVariables?: { value?: VariableAlias };
};

/** Fields directly overridden on an instance. Inherited overrides are not included. */
export type Overrides = {
  /** A unique ID for a node. */
  id: string;
  /** An array of properties. */
  overriddenFields: (string)[];
};

/** Geometric shape type. */
export type ShapeType = "SQUARE" | "ELLIPSE" | "ROUNDED_RECTANGLE" | "DIAMOND" | "TRIANGLE_UP" | "TRIANGLE_DOWN" | "PARALLELOGRAM_RIGHT" | "PARALLELOGRAM_LEFT" | "ENG_DATABASE" | "ENG_QUEUE" | "ENG_FILE" | "ENG_FOLDER" | "TRAPEZOID" | "PREDEFINED_PROCESS" | "SHIELD" | "DOCUMENT_SINGLE" | "DOCUMENT_MULTIPLE" | "MANUAL_INPUT" | "HEXAGON" | "CHEVRON" | "PENTAGON" | "OCTAGON" | "STAR" | "PLUS" | "ARROW_LEFT" | "ARROW_RIGHT" | "SUMMING_JUNCTION" | "OR" | "SPEECH_BUBBLE" | "INTERNAL_STORAGE";

/** Stores canvas location for a connector start/end point. */
export type ConnectorEndpoint = { endpointNodeId?: string; position?: Vector } | { endpointNodeId?: string; magnet?: "AUTO" | "TOP" | "BOTTOM" | "LEFT" | "RIGHT" | "CENTER" };

/** Connector line type. */
export type ConnectorLineType = "STRAIGHT" | "ELBOWED" | "CURVED";

export type ConnectorTextBackground = CornerTrait & MinimalFillsTrait;

/** A description of a main component. Helps you identify which component instances are attached to. */
export type Component = {
  /** The key of the component */
  key: string;
  /** Name of the component */
  name: string;
  /** The description of the component as entered in the editor */
  description: string;
  /** The ID of the component set if the component belongs to one */
  componentSetId?: string;
  /** An array of documentation links attached to this component */
  documentationLinks: (DocumentationLink)[];
  /** Whether this component is a remote component that doesn't live in this file */
  remote: boolean;
};

/** A description of a component set, which is a node containing a set of variants of a component. */
export type ComponentSet = {
  /** The key of the component set */
  key: string;
  /** Name of the component set */
  name: string;
  /** The description of the component set as entered in the editor */
  description: string;
  /** An array of documentation links attached to this component set */
  documentationLinks?: (DocumentationLink)[];
  /** Whether this component set is a remote component set that doesn't live in this file */
  remote?: boolean;
};

/** Represents a link to documentation for a component or component set. */
export type DocumentationLink = {
  /** Should be a valid URI (e.g. https://www.figma.com). */
  uri: string;
};

/** Contains a variable alias */
export type VariableAlias = {
  type: "VARIABLE_ALIAS";
  /** The id of the variable that the current variable is aliased to. This variable can be a local or remote variable, and both can be retrieved via the GET /v1/files/:file_key/variables/local endpoint. */
  id: string;
};

/** An interaction in the Figma viewer, containing a trigger and one or more actions. */
export type Interaction = {
  /** The user event that initiates the interaction. */
  trigger: Trigger | null;
  /** The actions that are performed when the trigger is activated. */
  actions?: (Action)[];
};

/** The `"ON_HOVER"` and `"ON_PRESS"` trigger types revert the navigation when the trigger is finished (the result is temporary).  `"MOUSE_ENTER"`, `"MOUSE_LEAVE"`, `"MOUSE_UP"` and `"MOUSE_DOWN"` are permanent, one-way navigation. The `delay` parameter requires the trigger to be held for a certain duration of time before the action occurs. Both `timeout` and `delay` values are in milliseconds. The `"ON_MEDIA_HIT"` and `"ON_MEDIA_END"` trigger types can only trigger from a video.  They fire when a video reaches a certain time or ends. The `timestamp` value is in seconds. */
export type Trigger = { type: "ON_CLICK" | "ON_HOVER" | "ON_PRESS" | "ON_DRAG" } | AfterTimeoutTrigger | { type: "MOUSE_ENTER" | "MOUSE_LEAVE" | "MOUSE_UP" | "MOUSE_DOWN"; delay: number; deprecatedVersion?: boolean } | OnKeyDownTrigger | OnMediaHitTrigger | { type: "ON_MEDIA_END" };

export type AfterTimeoutTrigger = {
  type: "AFTER_TIMEOUT";
  timeout: number;
};

export type OnKeyDownTrigger = {
  type: "ON_KEY_DOWN";
  device: "KEYBOARD" | "XBOX_ONE" | "PS4" | "SWITCH_PRO" | "UNKNOWN_CONTROLLER";
  keyCodes: (number)[];
};

export type OnMediaHitTrigger = {
  type: "ON_MEDIA_HIT";
  mediaHitTime: number;
};

/** An action that is performed when a trigger is activated. */
export type Action = { type: "BACK" | "CLOSE" } | OpenUrlAction | UpdateMediaRuntimeAction | SetVariableAction | SetVariableModeAction | ConditionalAction | NodeAction;

/** An action that opens a URL. */
export type OpenUrlAction = {
  type: "URL";
  url: string;
};

/** An action that affects a video node in the Figma viewer. For example, to play, pause, or skip. */
export type UpdateMediaRuntimeAction = { type: "UPDATE_MEDIA_RUNTIME"; destinationId: string | null; mediaAction: "PLAY" | "PAUSE" | "TOGGLE_PLAY_PAUSE" | "MUTE" | "UNMUTE" | "TOGGLE_MUTE_UNMUTE" } | { type: "UPDATE_MEDIA_RUNTIME"; destinationId?: string | null; mediaAction: "SKIP_FORWARD" | "SKIP_BACKWARD"; amountToSkip: number } | { type: "UPDATE_MEDIA_RUNTIME"; destinationId?: string | null; mediaAction: "SKIP_TO"; newTimestamp: number };

/** An action that navigates to a specific node in the Figma viewer. */
export type NodeAction = {
  type: "NODE";
  destinationId: string | null;
  navigation: Navigation;
  transition: Transition | null;
  /** Whether the scroll offsets of any scrollable elements in the current screen or overlay are preserved when navigating to the destination. This is applicable only if the layout of both the current frame and its destination are the same. */
  preserveScrollPosition?: boolean;
  /** Applicable only when `navigation` is `"OVERLAY"` and the destination is a frame with `overlayPosition` equal to `"MANUAL"`. This value represents the offset by which the overlay is opened relative to this node. */
  overlayRelativePosition?: Vector;
  /** When true, all videos within the destination frame will reset their memorized playback position to 00:00 before starting to play. */
  resetVideoPosition?: boolean;
  /** Whether the scroll offsets of any scrollable elements in the current screen or overlay reset when navigating to the destination. This is applicable only if the layout of both the current frame and its destination are the same. */
  resetScrollPosition?: boolean;
  /** Whether the state of any interactive components in the current screen or overlay reset when navigating to the destination. This is applicable if there are interactive components in the destination frame. */
  resetInteractiveComponents?: boolean;
};

/** The method of navigation. The possible values are: - `"NAVIGATE"`: Replaces the current screen with the destination, also closing all overlays. - `"OVERLAY"`: Opens the destination as an overlay on the current screen. - `"SWAP"`: On an overlay, replaces the current (topmost) overlay with the destination. On a top-level frame,    behaves the same as `"NAVIGATE"` except that no entry is added to the navigation history. - `"SCROLL_TO"`: Scrolls to the destination on the current screen. - `"CHANGE_TO"`: Changes the closest ancestor instance of source node to the specified variant. */
export type Navigation = "NAVIGATE" | "SWAP" | "OVERLAY" | "SCROLL_TO" | "CHANGE_TO";

export type Transition = SimpleTransition | DirectionalTransition;

/** Describes an animation used when navigating in a prototype. */
export type SimpleTransition = {
  type: "DISSOLVE" | "SMART_ANIMATE" | "SCROLL_ANIMATE";
  /** The duration of the transition in milliseconds. */
  duration: number;
  /** The easing curve of the transition. */
  easing: Easing;
};

/** Describes an animation used when navigating in a prototype. */
export type DirectionalTransition = {
  type: "MOVE_IN" | "MOVE_OUT" | "PUSH" | "SLIDE_IN" | "SLIDE_OUT";
  direction: "LEFT" | "RIGHT" | "TOP" | "BOTTOM";
  /** The duration of the transition in milliseconds. */
  duration: number;
  /** The easing curve of the transition. */
  easing: Easing;
  /** When the transition `type` is `"SMART_ANIMATE"` or when `matchLayers` is `true`, then the transition will be performed using smart animate, which attempts to match corresponding layers an interpolate other properties during the animation. */
  matchLayers?: boolean;
};

/** Describes an easing curve. */
export type Easing = {
  /** The type of easing curve. */
  type: EasingType;
  /** A cubic bezier curve that defines the easing. */
  easingFunctionCubicBezier?: { x1: number; y1: number; x2: number; y2: number };
  /** A spring function that defines the easing. */
  easingFunctionSpring?: { mass: number; stiffness: number; damping: number };
};

/** Sets a variable to a specific value. */
export type SetVariableAction = {
  type: "SET_VARIABLE";
  variableId: string | null;
  variableValue?: VariableData;
};

/** Sets a variable to a specific mode. */
export type SetVariableModeAction = {
  type: "SET_VARIABLE_MODE";
  variableCollectionId?: string | null;
  variableModeId?: string | null;
};

/** Checks if a condition is met before performing certain actions by using an if/else conditional statement. */
export type ConditionalAction = {
  type: "CONDITIONAL";
  conditionalBlocks: (ConditionalBlock)[];
};

/** A value to set a variable to during prototyping. */
export type VariableData = {
  type?: VariableDataType;
  resolvedType?: VariableResolvedDataType;
  value?: boolean | number | string | Rgb | Rgba | VariableAlias | Expression;
};

/** Defines the types of data a VariableData object can hold */
export type VariableDataType = "BOOLEAN" | "FLOAT" | "STRING" | "COLOR" | "VARIABLE_ALIAS" | "EXPRESSION";

/** Defines the types of data a VariableData object can eventually equal */
export type VariableResolvedDataType = "BOOLEAN" | "FLOAT" | "STRING" | "COLOR";

/** Defines the [Expression](https://help.figma.com/hc/en-us/articles/15253194385943) object, which contains a list of `VariableData` objects strung together by operators (`ExpressionFunction`). */
export type Expression = {
  expressionFunction: ExpressionFunction;
  expressionArguments: (VariableData)[];
};

/** Defines the list of operators available to use in an Expression. */
export type ExpressionFunction = "ADDITION" | "SUBTRACTION" | "MULTIPLICATION" | "DIVISION" | "EQUALS" | "NOT_EQUAL" | "LESS_THAN" | "LESS_THAN_OR_EQUAL" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL" | "AND" | "OR" | "VAR_MODE_LOOKUP" | "NEGATE" | "NOT";

/** Either the if or else conditional blocks. The if block contains a condition to check. If that condition is met then it will run those list of actions, else it will run the actions in the else block. */
export type ConditionalBlock = {
  condition?: VariableData;
  actions: (Action)[];
};

/** A pinned distance between two nodes in Dev Mode */
export type Measurement = {
  id: string;
  start: MeasurementStartEnd;
  end: MeasurementStartEnd;
  offset: MeasurementOffsetInner | MeasurementOffsetOuter;
  /** When manually overridden, the displayed value of the measurement */
  freeText?: string;
};

/** The node and side a measurement is pinned to */
export type MeasurementStartEnd = {
  nodeId: string;
  side: "TOP" | "RIGHT" | "BOTTOM" | "LEFT";
};

/** Measurement offset relative to the inside of the start node */
export type MeasurementOffsetInner = {
  type: "INNER";
  relative: number;
};

/** Measurement offset relative to the outside of the start node */
export type MeasurementOffsetOuter = {
  type: "OUTER";
  fixed: number;
};

/** Position of a comment relative to the frame to which it is attached. */
export type FrameOffset = {
  /** Unique id specifying the frame. */
  node_id: string;
  /** 2D vector offset within the frame from the top-left corner. */
  node_offset: Vector;
};

/** Position of a region comment on the canvas. */
export type Region = {
  /** X coordinate of the position. */
  x: number;
  /** Y coordinate of the position. */
  y: number;
  /** The height of the comment region. Must be greater than 0. */
  region_height: number;
  /** The width of the comment region. Must be greater than 0. */
  region_width: number;
  /** The corner of the comment region to pin to the node's corner as a string enum. */
  comment_pin_corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

/** Position of a region comment relative to the frame to which it is attached. */
export type FrameOffsetRegion = {
  /** Unique id specifying the frame. */
  node_id: string;
  /** 2D vector offset within the frame from the top-left corner. */
  node_offset: Vector;
  /** The height of the comment region. Must be greater than 0. */
  region_height: number;
  /** The width of the comment region. Must be greater than 0. */
  region_width: number;
  /** The corner of the comment region to pin to the node's corner as a string enum. */
  comment_pin_corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

/** A comment or reply left by a user. */
export type Comment = {
  /** Unique identifier for comment. */
  id: string;
  /** Positioning information of the comment. Includes information on the location of the comment pin, which is either the absolute coordinates on the canvas or a relative offset within a frame. If the comment is a region, it will also contain the region height, width, and position of the anchor in regards to the region. */
  client_meta: Vector | FrameOffset | Region | FrameOffsetRegion;
  /** The file in which the comment lives */
  file_key: string;
  /** If present, the id of the comment to which this is the reply */
  parent_id?: string;
  /** The user who left the comment */
  user: User;
  /** The UTC ISO 8601 time at which the comment was left */
  created_at: string;
  /** If set, the UTC ISO 8601 time the comment was resolved */
  resolved_at?: string | null;
  /** The content of the comment */
  message: string;
  /** Only set for top level comments. The number displayed with the comment in the UI */
  order_id: string | null;
  /** An array of reactions to the comment */
  reactions: (Reaction)[];
};

/** A reaction left by a user. */
export type Reaction = {
  /** The user who left the reaction. */
  user: User;
  emoji: Emoji;
  /** The UTC ISO 8601 time at which the reaction was left. */
  created_at: string;
};

/** The emoji type of reaction as shortcode (e.g. `:heart:`, `:+1::skin-tone-2:`). The list of accepted emoji shortcodes can be found in [this file](https://raw.githubusercontent.com/missive/emoji-mart/main/packages/emoji-mart-data/sets/14/native.json) under the top-level emojis and aliases fields, with optional skin tone modifiers when applicable. */
export type Emoji = string;

/** A description of a user. */
export type User = {
  /** Unique stable id of the user. */
  id: string;
  /** Name of the user. */
  handle: string;
  /** URL link to the user's profile image. */
  img_url: string;
};

/** Data on the frame a component resides in. */
export type FrameInfo = {
  /** The ID of the frame node within the file. */
  nodeId?: string;
  /** The name of the frame node. */
  name?: string;
  /** The background color of the frame node. */
  backgroundColor?: string;
  /** The ID of the page containing the frame node. */
  pageId: string;
  /** The name of the page containing the frame node. */
  pageName: string;
  /** Deprecated - Use containingComponentSet instead. */
  containingStateGroup?: { nodeId?: string; name?: string } | null;
  /** The component set node that contains the frame node. */
  containingComponentSet?: { nodeId?: string; name?: string } | null;
};

/** An arrangement of published UI elements that can be instantiated across figma files. */
export type PublishedComponent = {
  /** The unique identifier for the component. */
  key: string;
  /** The unique identifier of the Figma file that contains the component. */
  file_key: string;
  /** The unique identifier of the component node within the Figma file. */
  node_id: string;
  /** A URL to a thumbnail image of the component. */
  thumbnail_url?: string;
  /** The name of the component. */
  name: string;
  /** The description of the component as entered by the publisher. */
  description: string;
  /** The UTC ISO 8601 time when the component was created. */
  created_at: string;
  /** The UTC ISO 8601 time when the component was last updated. */
  updated_at: string;
  /** The user who last updated the component. */
  user: User;
  /** The containing frame of the component. */
  containing_frame?: FrameInfo;
};

/** A node containing a set of variants of a component. */
export type PublishedComponentSet = {
  /** The unique identifier for the component set. */
  key: string;
  /** The unique identifier of the Figma file that contains the component set. */
  file_key: string;
  /** The unique identifier of the component set node within the Figma file. */
  node_id: string;
  /** A URL to a thumbnail image of the component set. */
  thumbnail_url?: string;
  /** The name of the component set. */
  name: string;
  /** The description of the component set as entered by the publisher. */
  description: string;
  /** The UTC ISO 8601 time when the component set was created. */
  created_at: string;
  /** The UTC ISO 8601 time when the component set was last updated. */
  updated_at: string;
  /** The user who last updated the component set. */
  user: User;
  /** The containing frame of the component set. */
  containing_frame?: FrameInfo;
};

/** The type of style */
export type StyleType = "FILL" | "TEXT" | "EFFECT" | "GRID";

/** A set of published properties that can be applied to nodes. */
export type PublishedStyle = {
  /** The unique identifier for the style */
  key: string;
  /** The unique identifier of the Figma file that contains the style. */
  file_key: string;
  /** ID of the style node within the figma file */
  node_id: string;
  style_type: StyleType;
  /** A URL to a thumbnail image of the style. */
  thumbnail_url?: string;
  /** The name of the style. */
  name: string;
  /** The description of the style as entered by the publisher. */
  description: string;
  /** The UTC ISO 8601 time when the style was created. */
  created_at: string;
  /** The UTC ISO 8601 time when the style was last updated. */
  updated_at: string;
  /** The user who last updated the style. */
  user: User;
  /** A user specified order number by which the style can be sorted. */
  sort_position: string;
};

/** A Project can be identified by both the Project name, and the Project ID. */
export type Project = {
  /** The ID of the project. */
  id: string;
  /** The name of the project. */
  name: string;
};

/** A version of a file */
export type Version = {
  /** Unique identifier for version */
  id: string;
  /** The UTC ISO 8601 time at which the version was created */
  created_at: string;
  /** The label given to the version in the editor */
  label: string | null;
  /** The description of the version as entered in the editor */
  description: string | null;
  /** The user that created the version */
  user: User;
  /** A URL to a thumbnail image of the file version. */
  thumbnail_url?: string;
};

/** A description of an HTTP webhook (from Figma back to your application) */
export type WebhookV2 = {
  /** The ID of the webhook */
  id: string;
  /** The event this webhook triggers on */
  event_type: WebhookV2Event;
  /** The team id you are subscribed to for updates. This is deprecated, use context and context_id instead */
  team_id: string;
  /** The type of context this webhook is attached to. The value will be "PROJECT", "TEAM", or "FILE" */
  context: string;
  /** The ID of the context this webhook is attached to */
  context_id: string;
  /** The plan API ID of the team or organization where this webhook was created */
  plan_api_id: string;
  /** The current status of the webhook */
  status: WebhookV2Status;
  /** The client ID of the OAuth application that registered this webhook, if any */
  client_id: string | null;
  /** The passcode that will be passed back to the webhook endpoint. For security, when using the GET endpoints, the value is an empty string */
  passcode: string;
  /** The endpoint that will be hit when the webhook is triggered */
  endpoint: string;
  /** Optional user-provided description or name for the webhook. This is provided to help make maintaining a number of webhooks more convenient. Max length 140 characters. */
  description: string | null;
};

/** An enum representing the possible events that a webhook can subscribe to */
export type WebhookV2Event = "PING" | "FILE_UPDATE" | "FILE_VERSION_UPDATE" | "FILE_DELETE" | "LIBRARY_PUBLISH" | "FILE_COMMENT" | "DEV_MODE_STATUS_UPDATE";

/** An enum representing the possible statuses you can set a webhook to: - `ACTIVE`: The webhook is healthy and receive all events - `PAUSED`: The webhook is paused and will not receive any events */
export type WebhookV2Status = "ACTIVE" | "PAUSED";

/** Information regarding the most recent interactions sent to a webhook endpoint */
export type WebhookV2Request = {
  /** The ID of the webhook the requests were sent to */
  webhook_id: string;
  request_info: WebhookV2RequestInfo;
  response_info: WebhookV2ResponseInfo;
  /** Error message for this request. NULL if no error occurred */
  error_msg: string | null;
};

/** Information regarding the request sent to a webhook endpoint */
export type WebhookV2RequestInfo = {
  /** The ID of the webhook */
  id: string;
  /** The actual endpoint the request was sent to */
  endpoint: string;
  /** The contents of the request that was sent to the endpoint */
  payload: { [key: string]: unknown };
  /** UTC ISO 8601 timestamp of when the request was sent */
  sent_at: string;
};

/** Information regarding the reply sent back from a webhook endpoint */
export type WebhookV2ResponseInfo = {
  /** HTTP status code of the response */
  status: string;
  /** UTC ISO 8601 timestamp of when the response was received */
  received_at: string;
};

/** An object representing the library item information in the payload of the `LIBRARY_PUBLISH` event */
export type LibraryItemData = {
  /** Unique identifier for the library item */
  key: string;
  /** Name of the library item */
  name: string;
};

/** An object representing a fragment of a comment left by a user, used in the payload of the `FILE_COMMENT` event. Note only ONE of the fields below will be set */
export type CommentFragment = {
  /** Comment text that is set if a fragment is text based */
  text?: string;
  /** User id that is set if a fragment refers to a user mention */
  mention?: string;
};

export type WebhookBasePayload = {
  /** The passcode specified when the webhook was created, should match what was initially provided */
  passcode: string;
  /** UTC ISO 8601 timestamp of when the event was triggered. */
  timestamp: string;
  /** The id of the webhook that caused the callback */
  webhook_id: string;
};

export type WebhookPingPayload = WebhookBasePayload & { event_type: "PING" };

export type WebhookFileUpdatePayload = WebhookBasePayload & { event_type: "FILE_UPDATE"; file_key: string; file_name: string };

export type WebhookFileDeletePayload = WebhookBasePayload & { event_type: "FILE_DELETE"; file_key: string; file_name: string; triggered_by: User };

export type WebhookFileVersionUpdatePayload = WebhookBasePayload & { event_type: "FILE_VERSION_UPDATE"; created_at: string; description?: string; file_key: string; file_name: string; triggered_by: User; version_id: string };

export type WebhookLibraryPublishPayload = WebhookBasePayload & { event_type: "LIBRARY_PUBLISH"; created_components: (LibraryItemData)[]; created_styles: (LibraryItemData)[]; created_variables: (LibraryItemData)[]; modified_components: (LibraryItemData)[]; modified_styles: (LibraryItemData)[]; modified_variables: (LibraryItemData)[]; deleted_components: (LibraryItemData)[]; deleted_styles: (LibraryItemData)[]; deleted_variables: (LibraryItemData)[]; description?: string; file_key: string; file_name: string; library_item: LibraryItemData; triggered_by: User };

export type WebhookFileCommentPayload = WebhookBasePayload & { event_type: "FILE_COMMENT"; comment: (CommentFragment)[]; comment_id: string; created_at: string; file_key: string; file_name: string; mentions?: (User)[]; triggered_by: User };

export type WebhookDevModeStatusUpdatePayload = WebhookBasePayload & { event_type: "DEV_MODE_STATUS_UPDATE"; file_key: string; file_name: string; node_id: string; related_links: (DevResource)[]; status: string; triggered_by: User };

/** A Figma user */
export type ActivityLogUserEntity = {
  /** The type of entity. */
  type: "user";
  /** Unique stable id of the user. */
  id: string;
  /** Name of the user. */
  name: string;
  /** Email associated with the user's account. */
  email: string;
};

/** A Figma Design or FigJam file */
export type ActivityLogFileEntity = {
  /** The type of entity. */
  type: "file";
  /** Unique identifier of the file. */
  key: string;
  /** Name of the file. */
  name: string;
  /** Indicates if the object is a file on Figma Design or FigJam. */
  editor_type: "figma" | "figjam";
  /** Access policy for users who have the link to the file. */
  link_access: LinkAccess;
  /** Access policy for users who have the link to the file's prototype. */
  proto_link_access: "view" | "org_view" | "inherit";
};

/** A file branch that diverges from and can be merged back into the main file */
export type ActivityLogFileRepoEntity = {
  /** The type of entity. */
  type: "file_repo";
  /** Unique identifier of the file branch. */
  id: string;
  /** Name of the file. */
  name: string;
  /** Key of the main file. */
  main_file_key: string;
};

/** A project that a collection of Figma files are grouped under */
export type ActivityLogProjectEntity = {
  /** The type of entity. */
  type: "project";
  /** Unique identifier of the project. */
  id: string;
  /** Name of the project. */
  name: string;
};

/** A Figma team that contains multiple users and projects */
export type ActivityLogTeamEntity = {
  /** The type of entity. */
  type: "team";
  /** Unique identifier of the team. */
  id: string;
  /** Name of the team. */
  name: string;
};

/** Part of the organizational hierarchy of managing files and users within Figma, only available on the Enterprise Plan */
export type ActivityLogWorkspaceEntity = {
  /** The type of entity. */
  type: "workspace";
  /** Unique identifier of the workspace. */
  id: string;
  /** Name of the workspace. */
  name: string;
};

/** A Figma organization */
export type ActivityLogOrgEntity = {
  /** The type of entity. */
  type: "org";
  /** Unique identifier of the organization. */
  id: string;
  /** Name of the organization. */
  name: string;
};

/** A Figma plugin */
export type ActivityLogPluginEntity = {
  /** The type of entity. */
  type: "plugin";
  /** Unique identifier of the plugin. */
  id: string;
  /** Name of the plugin. */
  name: string;
  /** Indicates if the object is a plugin is available on Figma Design or FigJam. */
  editor_type: "figma" | "figjam";
};

/** A Figma widget */
export type ActivityLogWidgetEntity = {
  /** The type of entity. */
  type: "widget";
  /** Unique identifier of the widget. */
  id: string;
  /** Name of the widget. */
  name: string;
  /** Indicates if the object is a widget available on Figma Design or FigJam. */
  editor_type: "figma" | "figjam";
};

/** An event returned by the Activity Logs API. */
export type ActivityLog = {
  /** The ID of the event. */
  id: string;
  /** The timestamp of the event in seconds since the Unix epoch. */
  timestamp: number;
  /** The user who performed the action. */
  actor: { [key: string]: unknown } | null;
  /** The task or activity the actor performed. */
  action: { type: string; details: { [key: string]: unknown } | null };
  /** The resource the actor took the action on. It can be a user, file, project or other resource types. */
  entity: ActivityLogUserEntity | ActivityLogFileEntity | ActivityLogFileRepoEntity | ActivityLogProjectEntity | ActivityLogTeamEntity | ActivityLogWorkspaceEntity | ActivityLogOrgEntity | ActivityLogPluginEntity | ActivityLogWidgetEntity;
  /** Contextual information about the event. */
  context: { client_name: string | null; ip_address: string; is_figma_support_team_action: boolean; org_id: string; team_id: string | null };
};

/** An object describing the user's payment status. */
export type PaymentStatus = {
  /** The current payment status of the user on the resource, as a string enum:    - `UNPAID`: user has not paid for the resource - `PAID`: user has an active purchase on the resource - `TRIAL`: user is in the trial period for a subscription resource */
  type?: "UNPAID" | "PAID" | "TRIAL";
};

/** An object describing a user's payment information for a plugin, widget, or Community file. */
export type PaymentInformation = {
  /** The ID of the user whose payment information was queried. Can be used to verify the validity of a response. */
  user_id: string;
  /** The ID of the plugin, widget, or Community file that was queried. Can be used to verify the validity of a response. */
  resource_id: string;
  /** The type of the resource. */
  resource_type: "PLUGIN" | "WIDGET" | "COMMUNITY_FILE";
  payment_status: PaymentStatus;
  /** The UTC ISO 8601 timestamp indicating when the user purchased the resource. No value is given if the user has never purchased the resource.    Note that a value will still be returned if the user had purchased the resource, but no longer has active access to it (e.g. purchase refunded, subscription ended). */
  date_of_purchase?: string;
};

/** Scopes allow a variable to be shown or hidden in the variable picker for various fields. This declutters the Figma UI if you have a large number of variables. Variable scopes are currently supported on `FLOAT`, `STRING`, and `COLOR` variables.  `ALL_SCOPES` is a special scope that means that the variable will be shown in the variable picker for all variable fields. If `ALL_SCOPES` is set, no additional scopes can be set.  `ALL_FILLS` is a special scope that means that the variable will be shown in the variable picker for all fill fields. If `ALL_FILLS` is set, no additional fill scopes can be set.  Valid scopes for `FLOAT` variables: - `ALL_SCOPES` - `TEXT_CONTENT` - `WIDTH_HEIGHT` - `GAP` - `STROKE_FLOAT` - `EFFECT_FLOAT` - `OPACITY` - `FONT_WEIGHT` - `FONT_SIZE` - `LINE_HEIGHT` - `LETTER_SPACING` - `PARAGRAPH_SPACING` - `PARAGRAPH_INDENT`  Valid scopes for `STRING` variables: - `ALL_SCOPES` - `TEXT_CONTENT` - `FONT_FAMILY` - `FONT_STYLE`  Valid scopes for `COLOR` variables: - `ALL_SCOPES` - `ALL_FILLS` - `FRAME_FILL` - `SHAPE_FILL` - `TEXT_FILL` - `STROKE_COLOR` - `EFFECT_COLOR` */
export type VariableScope = "ALL_SCOPES" | "TEXT_CONTENT" | "CORNER_RADIUS" | "WIDTH_HEIGHT" | "GAP" | "ALL_FILLS" | "FRAME_FILL" | "SHAPE_FILL" | "TEXT_FILL" | "STROKE_COLOR" | "STROKE_FLOAT" | "EFFECT_FLOAT" | "EFFECT_COLOR" | "OPACITY" | "FONT_FAMILY" | "FONT_STYLE" | "FONT_WEIGHT" | "FONT_SIZE" | "LINE_HEIGHT" | "LETTER_SPACING" | "PARAGRAPH_SPACING" | "PARAGRAPH_INDENT" | "FONT_VARIATIONS";

/** An object containing platform-specific code syntax definitions for a variable. All platforms are optional. */
export type VariableCodeSyntax = {
  WEB?: string;
  ANDROID?: string;
  iOS?: string;
};

/** A grouping of related Variable objects each with the same modes. */
export type LocalVariableCollection = {
  /** The unique identifier of this variable collection. */
  id: string;
  /** The name of this variable collection. */
  name: string;
  /** The key of this variable collection. */
  key: string;
  /** The modes of this variable collection. */
  modes: ({ modeId: string; parentModeId?: string; name: string })[];
  /** The id of the default mode. */
  defaultModeId: string;
  /** Whether this variable collection is remote. */
  remote: boolean;
  /** Whether this variable collection is an extension of another variable collection. */
  isExtension?: boolean;
  /** The id of the parent variable collection that this variable collection is an extension of. If this variable collection is not an extension, this value will be `undefined`. */
  parentVariableCollectionId?: string;
  /** The id of the root variable collection in the extension chain. This is the ID of the original (non-extended) collection at the top of the parent chain. For example, if Collection C extends B which extends A (root), then `rootVariableCollectionId` is A's ID. If this variable collection is not an extension, this value will be `undefined`. */
  rootVariableCollectionId?: string;
  /** The overrides for the variables in this variable collection as a map of variable ids to a map of mode ids to variable values. */
  variableOverrides?: { [key: string]: { [key: string]: VariableValue | undefined } | undefined };
  /** Whether this variable collection is hidden when publishing the current file as a library. */
  hiddenFromPublishing: boolean;
  /** The ids of the variables in the collection. Note that the order of these variables is roughly the same as what is shown in Figma Design, however it does not account for groups. As a result, the order of these variables may not exactly reflect the exact ordering and grouping shown in the authoring UI. */
  variableIds: (string)[];
};

/** A Variable is a single design token that defines values for each of the modes in its VariableCollection. These values can be applied to various kinds of design properties. */
export type LocalVariable = {
  /** The unique identifier of this variable. */
  id: string;
  /** The name of this variable. */
  name: string;
  /** The key of this variable. */
  key: string;
  /** The id of the variable collection that contains this variable. */
  variableCollectionId: string;
  /** The resolved type of the variable. */
  resolvedType: VariableResolvedDataType;
  /** The values for each mode of this variable. */
  valuesByMode: { [key: string]: boolean | number | string | Rgba | VariableAlias | undefined };
  /** Whether this variable is remote. */
  remote: boolean;
  /** The description of this variable. */
  description: string;
  /** Whether this variable is hidden when publishing the current file as a library.  If the parent `VariableCollection` is marked as `hiddenFromPublishing`, then this variable will also be hidden from publishing via the UI. `hiddenFromPublishing` is independently toggled for a variable and collection. However, both must be true for a given variable to be publishable. */
  hiddenFromPublishing: boolean;
  /** An array of scopes in the UI where this variable is shown. Setting this property will show/hide this variable in the variable picker UI for different fields.  Setting scopes for a variable does not prevent that variable from being bound in other scopes (for example, via the Plugin API). This only limits the variables that are shown in pickers within the Figma UI. */
  scopes: (VariableScope)[];
  codeSyntax: VariableCodeSyntax;
  /** Indicates that the variable was deleted in the editor, but the document may still contain references to the variable. References to the variable may exist through bound values or variable aliases. */
  deletedButReferenced?: boolean;
};

/** A grouping of related Variable objects each with the same modes. */
export type PublishedVariableCollection = {
  /** The unique identifier of this variable collection. */
  id: string;
  /** The ID of the variable collection that is used by subscribing files. This ID changes every time the variable collection is modified and published. */
  subscribed_id: string;
  /** The name of this variable collection. */
  name: string;
  /** The key of this variable collection. */
  key: string;
  /** The UTC ISO 8601 time at which the variable collection was last updated.  This timestamp will change any time a variable in the collection is changed. */
  updatedAt: string;
};

/** A Variable is a single design token that defines values for each of the modes in its VariableCollection. These values can be applied to various kinds of design properties. */
export type PublishedVariable = {
  /** The unique identifier of this variable. */
  id: string;
  /** The ID of the variable that is used by subscribing files. This ID changes every time the variable is modified and published. */
  subscribed_id: string;
  /** The name of this variable. */
  name: string;
  /** The key of this variable. */
  key: string;
  /** The id of the variable collection that contains this variable. */
  variableCollectionId: string;
  /** The resolved type of the variable. */
  resolvedDataType: VariableResolvedDataType;
  /** The UTC ISO 8601 time at which the variable was last updated. */
  updatedAt: string;
};

/** An object that contains details about creating a `VariableCollection`. */
export type VariableCollectionCreate = {
  /** The action to perform for the variable collection. */
  action: "CREATE";
  /** A temporary id for this variable collection. */
  id?: string;
  /** The name of this variable collection. */
  name: string;
  /** The initial mode refers to the mode that is created by default. You can set a temporary id here, in order to reference this mode later in this request. */
  initialModeId?: string;
  /** Whether this variable collection is hidden when publishing the current file as a library. */
  hiddenFromPublishing?: boolean;
  /** The id of the parent variable collection that this variable collection is extending from. */
  parentVariableCollectionId?: string;
  /** Maps inherited modes from the parent variable collection to the initial mode ids on the extended variable collection. */
  initialModeIdToParentModeIdMapping?: { [key: string]: string | undefined };
};

/** An object that contains details about updating a `VariableCollection`. */
export type VariableCollectionUpdate = {
  /** The action to perform for the variable collection. */
  action: "UPDATE";
  /** The id of the variable collection to update. */
  id: string;
  /** The name of this variable collection. */
  name?: string;
  /** Whether this variable collection is hidden when publishing the current file as a library. */
  hiddenFromPublishing?: boolean;
};

/** An object that contains details about deleting a `VariableCollection`. */
export type VariableCollectionDelete = {
  /** The action to perform for the variable collection. */
  action: "DELETE";
  /** The id of the variable collection to delete. */
  id: string;
};

export type VariableCollectionChange = VariableCollectionCreate | VariableCollectionUpdate | VariableCollectionDelete;

/** An object that contains details about creating a `VariableMode`. */
export type VariableModeCreate = {
  /** The action to perform for the variable mode. */
  action: "CREATE";
  /** A temporary id for this variable mode. */
  id?: string;
  /** The name of this variable mode. */
  name: string;
  /** The variable collection that will contain the mode. You can use the temporary id of a variable collection. New modes cannot be created on extended collections. */
  variableCollectionId: string;
};

/** An object that contains details about updating a `VariableMode`. */
export type VariableModeUpdate = {
  /** The action to perform for the variable mode. */
  action: "UPDATE";
  /** The id of the variable mode to update. */
  id: string;
  /** The name of this variable mode. */
  name?: string;
  /** The variable collection that contains the mode. Modes cannot be updated on extended collections. */
  variableCollectionId: string;
};

/** An object that contains details about deleting a `VariableMode`. */
export type VariableModeDelete = {
  /** The action to perform for the variable mode. */
  action: "DELETE";
  /** The id of the variable mode to delete. Modes cannot be deleted on extended collections unless its parent mode has been deleted. */
  id: string;
};

export type VariableModeChange = VariableModeCreate | VariableModeUpdate | VariableModeDelete;

/** An object that contains details about creating a `Variable`. */
export type VariableCreate = {
  /** The action to perform for the variable. */
  action: "CREATE";
  /** A temporary id for this variable. */
  id?: string;
  /** The name of this variable. */
  name: string;
  /** The variable collection that will contain the variable. You can use the temporary id of a variable collection. */
  variableCollectionId: string;
  /** The resolved type of the variable. */
  resolvedType: VariableResolvedDataType;
  /** The description of this variable. */
  description?: string;
  /** Whether this variable is hidden when publishing the current file as a library. */
  hiddenFromPublishing?: boolean;
  /** An array of scopes in the UI where this variable is shown. Setting this property will show/hide this variable in the variable picker UI for different fields. */
  scopes?: (VariableScope)[];
  codeSyntax?: VariableCodeSyntax;
};

/** An object that contains details about updating a `Variable`. */
export type VariableUpdate = {
  /** The action to perform for the variable. */
  action: "UPDATE";
  /** The id of the variable to update. */
  id: string;
  /** The name of this variable. */
  name?: string;
  /** The description of this variable. */
  description?: string;
  /** Whether this variable is hidden when publishing the current file as a library. */
  hiddenFromPublishing?: boolean;
  /** An array of scopes in the UI where this variable is shown. Setting this property will show/hide this variable in the variable picker UI for different fields. */
  scopes?: (VariableScope)[];
  codeSyntax?: VariableCodeSyntax;
};

/** An object that contains details about deleting a `Variable`. */
export type VariableDelete = {
  /** The action to perform for the variable. */
  action: "DELETE";
  /** The id of the variable to delete. */
  id: string;
};

export type VariableChange = VariableCreate | VariableUpdate | VariableDelete;

/** An object that represents a value for a given mode of a variable. All properties are required. */
export type VariableModeValue = {
  /** The target variable. You can use the temporary id of a variable. */
  variableId: string;
  /** Must correspond to a mode in the variable collection that contains the target variable. */
  modeId: string;
  value: VariableValue;
};

/** The value for the variable. The value must match the variable's type. If setting to a variable alias, the alias must resolve to this type. If overriding a value, the value type must match the variable's type. If removing an overridden value, the value must be `null`. */
export type VariableValue = boolean | number | string | Rgb | Rgba | VariableAlias | null;

/** A dev resource in a file */
export type DevResource = {
  /** Unique identifier of the dev resource */
  id: string;
  /** The name of the dev resource. */
  name: string;
  /** The URL of the dev resource. */
  url: string;
  /** The file key where the dev resource belongs. */
  file_key: string;
  /** The target node to attach the dev resource to. */
  node_id: string;
};

/** Library analytics component actions data broken down by asset. */
export type LibraryAnalyticsComponentActionsByAsset = {
  /** The date in ISO 8601 format. e.g. 2023-12-13 */
  week: string;
  /** Unique, stable id of the component. */
  component_key: string;
  /** Name of the component. */
  component_name: string;
  /** Unique, stable id of the component set that this component belongs to. */
  component_set_key?: string;
  /** Name of the component set that this component belongs to. */
  component_set_name?: string;
  /** The number of detach events for this period. */
  detachments: number;
  /** The number of insertion events for this period. */
  insertions: number;
};

/** Library analytics action data broken down by team. */
export type LibraryAnalyticsComponentActionsByTeam = {
  /** The date in ISO 8601 format. e.g. 2023-12-13 */
  week: string;
  /** The name of the team using the library. */
  team_name: string;
  /** The name of the workspace that the team belongs to. */
  workspace_name?: string;
  /** The number of detach events for this period. */
  detachments: number;
  /** The number of insertion events for this period. */
  insertions: number;
};

/** Library analytics component usage data broken down by component. */
export type LibraryAnalyticsComponentUsagesByAsset = {
  /** Unique, stable id of the component. */
  component_key: string;
  /** Name of the component. */
  component_name: string;
  /** Unique, stable id of the component set that this component belongs to. */
  component_set_key?: string;
  /** Name of the component set that this component belongs to. */
  component_set_name?: string;
  /** The number of instances of the component within the organization. */
  usages: number;
  /** The number of teams using the component within the organization. */
  teams_using: number;
  /** The number of files using the component within the organization. */
  files_using: number;
};

/** Library analytics component usage data broken down by file. */
export type LibraryAnalyticsComponentUsagesByFile = {
  /** The name of the file using the library. */
  file_name: string;
  /** The name of the team the file belongs to. */
  team_name: string;
  /** The name of the workspace that the file belongs to. */
  workspace_name?: string;
  /** The number of component instances from the library used within the file. */
  usages: number;
};

/** Library analytics style actions data broken down by asset. */
export type LibraryAnalyticsStyleActionsByAsset = {
  /** The date in ISO 8601 format. e.g. 2023-12-13 */
  week: string;
  /** Unique, stable id of the style. */
  style_key: string;
  /** The name of the style. */
  style_name: string;
  /** The type of the style. */
  style_type: string;
  /** The number of detach events for this period. */
  detachments: number;
  /** The number of insertion events for this period. */
  insertions: number;
};

/** Library analytics style action data broken down by team. */
export type LibraryAnalyticsStyleActionsByTeam = {
  /** The date in ISO 8601 format. e.g. 2023-12-13 */
  week: string;
  /** The name of the team using the library. */
  team_name: string;
  /** The name of the workspace that the team belongs to. */
  workspace_name?: string;
  /** The number of detach events for this period. */
  detachments: number;
  /** The number of insertion events for this period. */
  insertions: number;
};

/** Library analytics style usage data broken down by component. */
export type LibraryAnalyticsStyleUsagesByAsset = {
  /** Unique, stable id of the style. */
  style_key: string;
  /** The name of the style. */
  style_name: string;
  /** The type of the style. */
  style_type: string;
  /** The number of usages of the style within the organization. */
  usages: number;
  /** The number of teams using the style within the organization. */
  teams_using: number;
  /** The number of files using the style within the organization. */
  files_using: number;
};

/** Library analytics style usage data broken down by file. */
export type LibraryAnalyticsStyleUsagesByFile = {
  /** The name of the file using the library. */
  file_name: string;
  /** The name of the team the file belongs to. */
  team_name: string;
  /** The name of the workspace that the file belongs to. */
  workspace_name?: string;
  /** The number of times styles from this library are used within the file. */
  usages: number;
};

/** Library analytics variable actions data broken down by asset. */
export type LibraryAnalyticsVariableActionsByAsset = {
  /** The date in ISO 8601 format. e.g. 2023-12-13 */
  week: string;
  /** Unique, stable id of the variable. */
  variable_key: string;
  /** The name of the variable. */
  variable_name: string;
  /** The type of the variable. */
  variable_type: string;
  /** Unique, stable id of the collection the variable belongs to. */
  collection_key: string;
  /** The name of the collection the variable belongs to. */
  collection_name: string;
  /** The number of detach events for this period. */
  detachments: number;
  /** The number of insertion events for this period. */
  insertions: number;
};

/** Library analytics variable action data broken down by team. */
export type LibraryAnalyticsVariableActionsByTeam = {
  /** The date in ISO 8601 format. e.g. 2023-12-13 */
  week: string;
  /** The name of the team using the library. */
  team_name: string;
  /** The name of the workspace that the team belongs to. */
  workspace_name?: string;
  /** The number of detach events for this period. */
  detachments: number;
  /** The number of insertion events for this period. */
  insertions: number;
};

/** Library analytics variable usage data broken down by component. */
export type LibraryAnalyticsVariableUsagesByAsset = {
  /** Unique, stable id of the variable. */
  variable_key: string;
  /** The name of the variable. */
  variable_name: string;
  /** The type of the variable. */
  variable_type: string;
  /** Unique, stable id of the collection the variable belongs to. */
  collection_key: string;
  /** The name of the collection the variable belongs to. */
  collection_name: string;
  /** The number of usages of the variable within the organization. */
  usages: number;
  /** The number of teams using the variable within the organization. */
  teams_using: number;
  /** The number of files using the variable within the organization. */
  files_using: number;
};

/** Library analytics variable usage data broken down by file. */
export type LibraryAnalyticsVariableUsagesByFile = {
  /** The name of the file using the library. */
  file_name: string;
  /** The name of the team the file belongs to. */
  team_name: string;
  /** The name of the workspace that the file belongs to. */
  workspace_name?: string;
  /** The number of times variables from this library are used within the file. */
  usages: number;
};

/** If pagination is needed due to the length of the response, identifies the next and previous pages. */
export type ResponsePagination = {
  /** A URL that calls the previous page of the response. */
  prev_page?: string;
  /** A URL that calls the next page of the response. */
  next_page?: string;
};

/** Pagination cursor */
export type ResponseCursor = {
  before?: number;
  after?: number;
};

/** A response indicating an error occurred. */
export type ErrorResponsePayloadWithErrMessage = {
  /** Status code */
  status: number;
  /** A string describing the error */
  err: string;
};

/** A response indicating an error occurred. */
export type ErrorResponsePayloadWithErrorBoolean = {
  /** For erroneous requests, this value is always `true`. */
  error: true;
  /** Status code */
  status: number;
  /** A string describing the error */
  message: string;
};

/** Access policy for users who have the link to the resource. */
export type LinkAccess = "view" | "edit" | "org_view" | "org_edit" | "inherit";

/** The role of the user making the API request in relation to the resource. */
export type Role = "owner" | "editor" | "viewer";
