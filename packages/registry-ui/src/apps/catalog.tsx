/**
 * The catalog: one loader for both namespaces, and the grouped list that every
 * Apps surface renders.
 *
 * Shape follows the spec — each app is a group whose children are the
 * workflows it exports, and a trailing "Workspace" group holds registered
 * workflows no app bundles (chat, cron and the panel can run them; no app user
 * can). Depth, not a flat list, is what makes this scale past a handful of
 * entries; on top of that the list filters and renders a capped window with a
 * "show more" tail, so a workspace with hundreds of workflows stays responsive
 * without pulling in a virtualiser.
 *
 * `AppsList` is the *same component and the same state* at both densities —
 * the chat sidebar passes `variant="sidebar"` for a 288px column, the registry
 * passes `variant="full"` for the master column of the master/detail panel.
 * Which groups start open follows the *row count*, not the variant
 * ({@link SMALL_LIST_ROWS}), and a host may control it outright.
 *
 * Loading is deduplicated by {@link AppsCatalogProvider}: a page that mounts
 * two surfaces (chat mounts the sidebar explorer and the full panel) otherwise
 * runs `apps.list` + `workflows.list` once per surface and refreshes them
 * independently.
 */

import * as React from "react";
import {
  DataScopeBadge,
  Empty,
  ErrorLine,
  mergeClasses,
  ReleaseChip,
  SMALL_BUTTON,
  StatusDot,
  TINY_BUTTON,
  TriggerBadges,
  VisibilityBadge,
} from "./ui";
import { LastRunProvider, useLastRun, useRecordRun } from "./last-runs";
import {
  attempt,
  normalizeApp,
  normalizeRunTrace,
  normalizeWorkflow,
  unwrapList,
  type AppSummary,
  type ToolsInvoke,
  type WorkflowRunSummary,
  type WorkflowSummary,
} from "./wire";

/** What the detail pane is showing. */
export type AppsSelection =
  | { kind: "app"; name: string }
  | { kind: "workflow"; name: string; app?: string };

export const WORKSPACE_GROUP_ID = "__workspace__";

export interface CatalogGroup {
  id: string;
  kind: "app" | "workspace";
  label: string;
  app?: AppSummary;
  workflows: WorkflowSummary[];
}

export interface AppsCatalog {
  apps: AppSummary[];
  workflows: WorkflowSummary[];
  groups: CatalogGroup[];
  appByName: Map<string, AppSummary>;
  workflowByName: Map<string, WorkflowSummary>;
  /** Last runs the gateway inlined on `list`, ready to seed the run cache. */
  lastRunSeed: Map<string, WorkflowRunSummary | null>;
  loading: boolean;
  error: string | null;
  /** The gateway has no `apps` namespace — render workflows only, no error. */
  appsUnavailable: boolean;
  refresh: () => void;
}

/**
 * The catalog one {@link AppsCatalogProvider} owns, shared by every surface
 * beneath it. `null` means "no provider" — each hook then loads its own.
 */
const AppsCatalogContext = React.createContext<AppsCatalog | null>(null);

/** Load both namespaces and group them. The engine behind `useAppsCatalog`. */
function useCatalogLoader({
  invoke,
  invokeApps,
  enabled,
}: {
  invoke: ToolsInvoke | undefined;
  invokeApps?: ToolsInvoke | undefined;
  enabled: boolean;
}): AppsCatalog {
  const [apps, setApps] = React.useState<AppSummary[]>([]);
  const [workflows, setWorkflows] = React.useState<WorkflowSummary[]>([]);
  const [loading, setLoading] = React.useState(enabled);
  const [error, setError] = React.useState<string | null>(null);
  const [appsUnavailable, setAppsUnavailable] = React.useState(!invokeApps);
  const [nonce, setNonce] = React.useState(0);

  React.useEffect(() => {
    if (!enabled || !invoke) {
      setLoading(false);
      return;
    }
    let alive = true;
    setLoading(true);
    void (async () => {
      const [workflowResult, appResult] = await Promise.all([
        attempt(() => invoke("list", {})),
        invokeApps ? attempt(() => invokeApps("list", {})) : Promise.resolve(null),
      ]);
      if (!alive) return;

      if (workflowResult.ok) {
        setWorkflows(
          unwrapList(workflowResult.value, "workflows")
            .map(normalizeWorkflow)
            .filter((workflow): workflow is WorkflowSummary => workflow !== null),
        );
        setError(null);
      } else {
        setWorkflows([]);
        setError(workflowResult.missing ? null : (workflowResult.error ?? "Failed to load workflows"));
      }

      if (!appResult) {
        setApps([]);
        setAppsUnavailable(true);
      } else if (appResult.ok) {
        setApps(
          unwrapList(appResult.value, "apps")
            .map(normalizeApp)
            .filter((app): app is AppSummary => app !== null),
        );
        setAppsUnavailable(false);
      } else {
        // A missing/erroring apps namespace degrades to workflows-only rather
        // than blanking the panel.
        setApps([]);
        setAppsUnavailable(true);
      }
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [enabled, invoke, invokeApps, nonce]);

  return React.useMemo(() => {
    const workflowByName = new Map(workflows.map((workflow) => [workflow.name, workflow]));
    const appByName = new Map(apps.map((app) => [app.name, app]));
    const bundled = new Set<string>();

    const groups: CatalogGroup[] = apps
      .slice()
      .sort((a, b) => (a.title ?? a.name).localeCompare(b.title ?? b.name))
      .map((app) => {
        // The gateway inlines each export on `apps.list`; when it does, that
        // is the richer record (it carries `procedure` and `lastRun`). Fall
        // back to the registration from `workflows.list`, then to a stub, so
        // an export that lost its registration still shows as dangling
        // rather than vanishing.
        const inlined = new Map((app.exports ?? []).map((w) => [w.name, w]));
        const exported = app.workflows ?? [];
        const rows: WorkflowSummary[] = [];
        for (const name of exported) {
          bundled.add(name);
          const workflow = inlined.get(name) ?? workflowByName.get(name);
          rows.push(
            workflow
              ? { ...workflowByName.get(name), ...workflow, apps: [...(workflow.apps ?? []), app.name] }
              : { name, scriptPath: "", triggers: {}, apps: [app.name] },
          );
        }
        return {
          id: app.name,
          kind: "app" as const,
          label: app.title ?? app.name,
          app,
          workflows: rows,
        };
      });

    const unbundled = workflows.filter((workflow) => !bundled.has(workflow.name));
    if (unbundled.length > 0 || groups.length === 0) {
      groups.push({
        id: WORKSPACE_GROUP_ID,
        kind: "workspace",
        label: "Workspace",
        workflows: unbundled,
      });
    }

    const lastRunSeed = new Map<string, WorkflowRunSummary | null>();
    for (const workflow of workflows) {
      if (workflow.lastRun) lastRunSeed.set(workflow.name, workflow.lastRun);
    }

    return {
      apps,
      workflows,
      groups,
      appByName,
      workflowByName,
      lastRunSeed,
      loading,
      error,
      appsUnavailable,
      refresh: () => setNonce((n) => n + 1),
    };
  }, [apps, workflows, loading, error, appsUnavailable]);
}

export interface AppsCatalogProviderProps {
  /** Gateway `workflows` tool namespace (POST /tools/workflows/:operation). */
  invoke: ToolsInvoke;
  /** Gateway `apps` tool namespace; omit and the tree degrades to Workspace. */
  invokeApps?: ToolsInvoke | undefined;
  children: React.ReactNode;
}

/**
 * One catalog for a whole page.
 *
 * A host that mounts two Apps surfaces at once — chat renders the sidebar
 * explorer *and* the full panel in a tab — otherwise runs `apps.list` +
 * `workflows.list` twice on mount and, worse, refreshing in one surface leaves
 * the other stale. Wrap both in this and they share one load, one cache and
 * one `refresh()`. It carries a {@link LastRunProvider} too, so the run dots
 * are fetched once rather than once per surface.
 *
 * Entirely optional: `useAppsCatalog` falls back to its own fetch with no
 * provider above it, which is what every single-surface host already does.
 */
export function AppsCatalogProvider({
  invoke,
  invokeApps,
  children,
}: AppsCatalogProviderProps) {
  const catalog = useCatalogLoader({ invoke, invokeApps, enabled: true });
  return (
    <AppsCatalogContext.Provider value={catalog}>
      <LastRunProvider invoke={invoke} seed={catalog.lastRunSeed}>
        {children}
      </LastRunProvider>
    </AppsCatalogContext.Provider>
  );
}

/** The shared catalog, when a provider is above — used to skip a second one. */
export function useSharedAppsCatalog(): AppsCatalog | null {
  return React.useContext(AppsCatalogContext);
}

/**
 * The catalog for one surface: the shared one from {@link AppsCatalogProvider}
 * when there is one, otherwise a load of its own. Either side may fail
 * independently — no apps still gives you the Workspace group, and no
 * workflows still gives you the app directory.
 */
export function useAppsCatalog(options?: {
  invoke?: ToolsInvoke | undefined;
  invokeApps?: ToolsInvoke | undefined;
}): AppsCatalog {
  const shared = React.useContext(AppsCatalogContext);
  // Called unconditionally (hook rules) but inert when a provider answered.
  const own = useCatalogLoader({
    invoke: options?.invoke,
    invokeApps: options?.invokeApps,
    enabled: shared === null && options?.invoke !== undefined,
  });
  return shared ?? own;
}

// ---------------------------------------------------------------------------
// Rows
// ---------------------------------------------------------------------------

function matches(query: string, ...fields: Array<string | undefined>): boolean {
  if (!query) return true;
  const needle = query.toLowerCase();
  return fields.some((field) => field?.toLowerCase().includes(needle));
}

/** Run a workflow from a list row, without leaving the list. */
function InlineRunButton({
  invoke,
  name,
  compact,
  onRan,
}: {
  invoke: ToolsInvoke;
  name: string;
  compact?: boolean;
  onRan?: () => void;
}) {
  const [running, setRunning] = React.useState(false);
  const record = useRecordRun();
  return (
    <button
      className={`${compact ? TINY_BUTTON : SMALL_BUTTON} shrink-0 disabled:opacity-50`}
      disabled={running}
      onClick={(event) => {
        event.stopPropagation();
        setRunning(true);
        void attempt(() => invoke("run", { name })).then((result) => {
          setRunning(false);
          const run = result.ok ? normalizeRunTrace(result.value) : null;
          if (run) record(name, run);
          onRan?.();
        });
      }}
      title={`Run ${name} with no input`}
      type="button"
    >
      {running ? "…" : "run"}
    </button>
  );
}

function WorkflowRow({
  workflow,
  selected,
  variant,
  invoke,
  onSelect,
  onOpenScript,
}: {
  workflow: WorkflowSummary;
  selected: boolean;
  variant: "full" | "sidebar";
  invoke: ToolsInvoke;
  onSelect: () => void;
  onOpenScript?: ((path: string) => void) | undefined;
}) {
  const lastRun = useLastRun(workflow.name);
  const compact = variant === "sidebar";
  return (
    <div
      className={`group flex items-center gap-1.5 rounded px-2 py-1 transition-colors ${
        selected ? "bg-muted" : "hover:bg-muted/60"
      }`}
    >
      <button
        className="flex min-w-0 flex-1 items-center gap-1.5 text-left"
        onClick={onSelect}
        type="button"
      >
        {lastRun ? (
          <StatusDot status={lastRun.status} />
        ) : (
          <span className="inline-block h-2 w-2 shrink-0 rounded-full border border-border" />
        )}
        <span className="truncate text-xs">{workflow.name}</span>
        {!compact && <TriggerBadges workflow={workflow} />}
        {compact && <TriggerBadges compact workflow={workflow} />}
      </button>
      <span className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100">
        <InlineRunButton compact={compact} invoke={invoke} name={workflow.name} />
        {onOpenScript && workflow.scriptPath && (
          <button
            className={compact ? TINY_BUTTON : SMALL_BUTTON}
            onClick={(event) => {
              event.stopPropagation();
              onOpenScript(workflow.scriptPath);
            }}
            title={workflow.scriptPath}
            type="button"
          >
            open
          </button>
        )}
      </span>
    </div>
  );
}

function GroupHeader({
  group,
  expanded,
  selected,
  variant,
  onToggle,
  onSelect,
  onOpenApp,
}: {
  group: CatalogGroup;
  expanded: boolean;
  selected: boolean;
  variant: "full" | "sidebar";
  onToggle: () => void;
  onSelect: () => void;
  onOpenApp?: ((app: AppSummary) => void) | undefined;
}) {
  const app = group.app;
  const compact = variant === "sidebar";
  return (
    <div
      className={`group flex items-center gap-1.5 rounded px-1.5 py-1 transition-colors ${
        selected ? "bg-muted" : "hover:bg-muted/60"
      }`}
    >
      <button
        aria-expanded={expanded}
        className="shrink-0 text-muted-foreground transition-transform"
        onClick={onToggle}
        title={expanded ? "Collapse" : "Expand"}
        type="button"
      >
        <span className={`inline-block transition-transform ${expanded ? "rotate-90" : ""}`}>›</span>
      </button>
      <button
        className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5 text-left"
        onClick={app ? onSelect : onToggle}
        type="button"
      >
        <span className="truncate text-xs font-medium">{group.label}</span>
        <span className="shrink-0 text-[0.65rem] text-muted-foreground">
          {group.workflows.length}
        </span>
        {app && !compact && (
          <>
            <VisibilityBadge app={app} />
            <DataScopeBadge app={app} />
            <ReleaseChip app={app} />
          </>
        )}
      </button>
      {app && (app.liveUrl || onOpenApp) && (
        <span className="shrink-0 opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100">
          {onOpenApp ? (
            <button
              className={compact ? TINY_BUTTON : SMALL_BUTTON}
              onClick={(event) => {
                event.stopPropagation();
                onOpenApp(app);
              }}
              title={`Open ${app.name}`}
              type="button"
            >
              open
            </button>
          ) : (
            <a
              className={compact ? TINY_BUTTON : SMALL_BUTTON}
              href={app.liveUrl}
              onClick={(event) => event.stopPropagation()}
              rel="noreferrer"
              target="_blank"
              title={app.liveUrl}
            >
              open
            </a>
          )}
        </span>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// The list
// ---------------------------------------------------------------------------

export interface AppsListProps {
  catalog: AppsCatalog;
  selection: AppsSelection | null;
  onSelect: (selection: AppsSelection) => void;
  invoke: ToolsInvoke;
  variant?: "full" | "sidebar";
  onOpenApp?: ((app: AppSummary) => void) | undefined;
  onOpenScript?: ((path: string) => void) | undefined;
  /** Rows rendered before the "show more" tail (default 60). */
  pageSize?: number;
  /**
   * Force the starting state of every group. Omit for the size-aware default
   * described on {@link SMALL_LIST_ROWS}.
   */
  defaultExpanded?: boolean;
  /** Controlled expansion: the ids of the groups that are open. */
  expandedGroups?: string[];
  /** Fired with the full next set on every toggle — persist it to survive a reload. */
  onExpandedGroupsChange?: (ids: string[]) => void;
  /** Rendered at the right of the search row — e.g. a refresh button. */
  actions?: React.ReactNode;
  className?: string;
}

/**
 * A list at or under this many rendered rows starts fully expanded, whatever
 * the variant.
 *
 * The old rule was "expand in the full panel, collapse in the sidebar", and it
 * made the common case look broken: a workspace with one app and two workflows
 * rendered as a single collapsed header — a chat sidebar pane that reads as
 * empty. Depth only pays for itself once there is depth to hide, so the
 * default follows the *content*, not the surface: expand when everything fits,
 * collapse only when the list is genuinely long.
 */
export const SMALL_LIST_ROWS = 12;

export function AppsList({
  catalog,
  selection,
  onSelect,
  invoke,
  variant = "full",
  onOpenApp,
  onOpenScript,
  pageSize = 60,
  defaultExpanded,
  expandedGroups,
  onExpandedGroupsChange,
  actions,
  className,
}: AppsListProps) {
  const [query, setQuery] = React.useState("");
  const [visible, setVisible] = React.useState(pageSize);
  // `null` = untouched, so the size-aware default still applies; a host that
  // passes `expandedGroups` owns this outright.
  const [internalExpanded, setInternalExpanded] = React.useState<string[] | null>(null);
  const controlled = expandedGroups !== undefined;
  const expandedList = controlled ? expandedGroups : internalExpanded;

  const groups = catalog.groups;
  const expandByDefault = React.useMemo(() => {
    if (defaultExpanded !== undefined) return defaultExpanded;
    if (groups.length <= 1) return true;
    const rows = groups.reduce((total, group) => total + 1 + group.workflows.length, 0);
    return rows <= SMALL_LIST_ROWS;
  }, [defaultExpanded, groups]);

  React.useEffect(() => setVisible(pageSize), [query, pageSize]);

  const filtered = React.useMemo(() => {
    if (!query) return catalog.groups;
    return catalog.groups
      .map((group) => {
        const groupHit = matches(query, group.label, group.id, group.app?.description);
        const workflows = group.workflows.filter((workflow) =>
          matches(query, workflow.name, workflow.description, workflow.scriptPath),
        );
        if (!groupHit && workflows.length === 0) return null;
        return { ...group, workflows: groupHit ? group.workflows : workflows };
      })
      .filter((group): group is CatalogGroup => group !== null);
  }, [catalog.groups, query]);

  const isExpanded = React.useCallback(
    (group: CatalogGroup) => {
      if (query) return true;
      if (selection?.kind === "workflow" && selection.app === group.id) return true;
      if (selection?.kind === "workflow" && group.id === WORKSPACE_GROUP_ID && !selection.app) {
        return true;
      }
      return expandedList === null ? expandByDefault : expandedList.includes(group.id);
    },
    [expandByDefault, expandedList, query, selection],
  );

  // The first toggle materialises the default into a concrete set, so "open
  // everything, then close one" behaves the way it looks.
  const toggle = (id: string) => {
    const base =
      expandedList ?? (expandByDefault ? groups.map((group) => group.id) : ([] as string[]));
    const next = base.includes(id)
      ? base.filter((candidate) => candidate !== id)
      : [...base, id];
    if (!controlled) setInternalExpanded(next);
    onExpandedGroupsChange?.(next);
  };

  // Flatten to rows first so the cap counts *rendered rows*, not groups —
  // one app with 400 workflows is exactly as expensive as 400 apps.
  type Row =
    | { key: string; kind: "group"; group: CatalogGroup }
    | { key: string; kind: "workflow"; group: CatalogGroup; workflow: WorkflowSummary };
  const rows: Row[] = [];
  for (const group of filtered) {
    rows.push({ key: `g:${group.id}`, kind: "group", group });
    if (!isExpanded(group)) continue;
    for (const workflow of group.workflows) {
      rows.push({ key: `w:${group.id}:${workflow.name}`, kind: "workflow", group, workflow });
    }
  }
  const shown = rows.slice(0, visible);
  const hidden = rows.length - shown.length;

  const compact = variant === "sidebar";

  return (
    <div className={mergeClasses("flex min-h-0 flex-col gap-1.5", className)}>
      <div className="flex items-center gap-1.5">
        <input
          className="min-w-0 flex-1 rounded-md border bg-transparent px-2 py-1 text-xs outline-none placeholder:text-muted-foreground focus-visible:border-ring"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search apps and workflows"
          spellCheck={false}
          value={query}
        />
        {actions}
      </div>

      <ErrorLine error={catalog.error} />

      <div className="min-h-0 flex-1 overflow-y-auto">
        {catalog.loading && rows.length === 0 ? (
          <Empty>Loading…</Empty>
        ) : rows.length === 0 ? (
          <Empty>
            {query
              ? "Nothing matches that."
              : "No apps or workflows yet. Register one from chat (“register a workflow that…”) or publish an app with apps.publish."}
          </Empty>
        ) : (
          <div className="space-y-0.5">
            {shown.map((row) =>
              row.kind === "group" ? (
                <GroupHeader
                  expanded={isExpanded(row.group)}
                  group={row.group}
                  key={row.key}
                  onOpenApp={onOpenApp}
                  onSelect={() =>
                    row.group.app ? onSelect({ kind: "app", name: row.group.app.name }) : undefined
                  }
                  onToggle={() => toggle(row.group.id)}
                  selected={selection?.kind === "app" && selection.name === row.group.id}
                  variant={variant}
                />
              ) : (
                <div className={compact ? "pl-3" : "pl-5"} key={row.key}>
                  <WorkflowRow
                    invoke={invoke}
                    onOpenScript={onOpenScript}
                    onSelect={() =>
                      onSelect({
                        kind: "workflow",
                        name: row.workflow.name,
                        ...(row.group.kind === "app" ? { app: row.group.id } : {}),
                      })
                    }
                    selected={
                      selection?.kind === "workflow" && selection.name === row.workflow.name
                    }
                    variant={variant}
                    workflow={row.workflow}
                  />
                </div>
              ),
            )}
            {hidden > 0 && (
              <button
                className={`mt-1 w-full ${SMALL_BUTTON}`}
                onClick={() => setVisible((count) => count + pageSize)}
                type="button"
              >
                Show {Math.min(hidden, pageSize)} more ({hidden} hidden)
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
