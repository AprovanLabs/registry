/**
 * AppDetail — the right-hand pane for one app, in five tabs.
 *
 *  - **Overview**  what it is and where it lives: live URL, entry, published
 *    prefixes, description, and the link that opens the real thing.
 *  - **Workflows** the app's *export list* — the WASI-world analogue. Each row
 *    carries its trigger badges, its last run, and an inline run.
 *  - **Access**    who may open it, what it may touch, and — the question the
 *    spec insists both UIs answer verbatim — *where an app user's data
 *    physically lives*, rendered from the "three ways data is reached" model.
 *  - **Releases**  the channel pins (live / preview / custom), the release
 *    history, and promote / rollback.
 *  - **Versions**  the workspace FS content-version log for the app's entry.
 *
 * Every section degrades on its own: a gateway without `apps.capabilities`
 * falls back to the model derived from the manifest, and one without
 * `apps.channels` simply hides the Releases controls instead of erroring.
 */

import * as React from "react";
import {
  BADGE,
  ConfirmButton,
  ConfirmDeleteButton,
  CopyChip,
  DataScopeBadge,
  DatabaseIcon,
  Empty,
  ErrorLine,
  FIELD,
  FieldRow,
  LABEL,
  ReleaseChip,
  SMALL_BUTTON,
  SectionHeading,
  Segmented,
  Stat,
  StatusDot,
  Tabs,
  TagsInput,
  TriggerBadges,
  UserChip,
  VisibilityBadge,
  formatWhen,
  useLoader,
} from "./ui";
import { useLastRun, useRecordRun } from "./last-runs";
import { VersionsSection } from "./versions";
import {
  attempt,
  deriveCapabilities,
  mergeCapabilities,
  normalizeChannels,
  normalizeReleases,
  normalizeRunTrace,
  type AppChannel,
  type AppRelease,
  type AppSummary,
  type CapabilityModel,
  type CapabilityReach,
  type ToolsInvoke,
  type WorkflowSummary,
} from "./wire";

export type AppDetailTab = "overview" | "workflows" | "access" | "releases" | "versions";

const TABS: ReadonlyArray<{ id: AppDetailTab; label: string }> = [
  { id: "overview", label: "Overview" },
  { id: "workflows", label: "Workflows" },
  { id: "access", label: "Access" },
  { id: "releases", label: "Releases" },
  { id: "versions", label: "Versions" },
];

// ---------------------------------------------------------------------------
// Overview
// ---------------------------------------------------------------------------

function Overview({ app }: { app: AppSummary }) {
  return (
    <div className="space-y-2.5">
      {app.description && <p className="text-xs text-muted-foreground">{app.description}</p>}
      <FieldRow label="Live page">
        {app.liveUrl ? (
          <span className="flex flex-wrap items-center gap-1.5">
            <a
              className="break-all font-mono underline-offset-2 hover:underline"
              href={app.liveUrl}
              rel="noreferrer"
              target="_blank"
            >
              {app.liveUrl}
            </a>
            <CopyChip text={app.liveUrl} />
          </span>
        ) : (
          <span className="text-muted-foreground">not published yet</span>
        )}
      </FieldRow>
      <FieldRow label="Entry">
        {app.entry ? (
          <code className="break-all font-mono">{app.entry}</code>
        ) : (
          <span className="text-muted-foreground">unbound</span>
        )}
      </FieldRow>
      <FieldRow label="Published paths">
        {app.paths?.length ? (
          <span className="flex flex-wrap gap-1.5">
            {app.paths.map((path, index) => (
              <code
                className={`${BADGE} border-border font-mono text-muted-foreground`}
                key={path}
                title={index === 0 ? "Primary prefix — the app's root and data partition" : undefined}
              >
                {path}
                {index === 0 ? " · root" : ""}
              </code>
            ))}
          </span>
        ) : (
          <span className="text-muted-foreground">derived from the entry's folder</span>
        )}
      </FieldRow>
      <FieldRow label="API base">
        {app.appPath ? <code className="break-all font-mono">{app.appPath}</code> : "—"}
      </FieldRow>
      <FieldRow label="Updated">{app.updatedAt ? formatWhen(app.updatedAt) : "—"}</FieldRow>
      <div className="flex flex-wrap items-center gap-1.5 pt-1">
        <VisibilityBadge app={app} />
        <DataScopeBadge app={app} />
        <ReleaseChip app={app} />
      </div>
      {app.liveUrl && (
        <a
          className="inline-flex items-center rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          href={app.liveUrl}
          rel="noreferrer"
          target="_blank"
        >
          Open live app
        </a>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Workflows tab
// ---------------------------------------------------------------------------

function ExportedWorkflowRow({
  workflow,
  invoke,
  onSelect,
}: {
  workflow: WorkflowSummary;
  invoke: ToolsInvoke;
  onSelect: () => void;
}) {
  const lastRun = useLastRun(workflow.name);
  const record = useRecordRun();
  const [running, setRunning] = React.useState(false);
  const missing = !workflow.scriptPath;

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-md border px-2.5 py-1.5">
      <button className="flex min-w-0 flex-1 flex-col items-start gap-0.5" onClick={onSelect} type="button">
        <span className="flex min-w-0 items-center gap-1.5">
          <span className="truncate text-xs font-medium">{workflow.name}</span>
          {missing && (
            <span className={`${BADGE} border-red-300 text-red-700 dark:border-red-900 dark:text-red-400`}>
              not registered
            </span>
          )}
        </span>
        {lastRun ? (
          <span className="flex items-center gap-1.5 text-[0.65rem] text-muted-foreground">
            <StatusDot status={lastRun.status} />
            last run {formatWhen(lastRun.startedAt)}
            {lastRun.durationMs !== undefined ? ` · ${lastRun.durationMs}ms` : ""}
          </span>
        ) : (
          <span className="text-[0.65rem] text-muted-foreground">no runs yet</span>
        )}
      </button>
      <TriggerBadges workflow={workflow} />
      <button
        className={`${SMALL_BUTTON} shrink-0 disabled:opacity-50`}
        disabled={running || missing}
        onClick={() => {
          setRunning(true);
          void attempt(() => invoke("run", { name: workflow.name })).then((result) => {
            setRunning(false);
            const run = result.ok ? normalizeRunTrace(result.value) : null;
            if (run) record(workflow.name, run);
          });
        }}
        type="button"
      >
        {running ? "Running…" : "Run"}
      </button>
    </div>
  );
}

function WorkflowsTab({
  app,
  workflows,
  invoke,
  onSelectWorkflow,
}: {
  app: AppSummary;
  workflows: WorkflowSummary[];
  invoke: ToolsInvoke;
  onSelectWorkflow: (name: string) => void;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs text-muted-foreground">
        An app's workflow list is its export surface. Each one is callable as{" "}
        <code className="font-mono">
          {app.name}.&lt;workflow&gt;
        </code>{" "}
        from a widget, from another workflow, and from curl — the same dispatch path, the same
        trace.
      </p>
      {workflows.length === 0 ? (
        <Empty>
          This app exports no workflows. Add them with{" "}
          <code className="font-mono">apps.publish({`{ workflows: [...] }`})</code>.
        </Empty>
      ) : (
        <div className="space-y-1.5">
          {workflows.map((workflow) => (
            <ExportedWorkflowRow
              invoke={invoke}
              key={workflow.name}
              onSelect={() => onSelectWorkflow(workflow.name)}
              workflow={workflow}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Access tab
// ---------------------------------------------------------------------------

/**
 * Where an app user's data physically lands, as a *path*. The truthfulness
 * rule: the gateway's `apps.capabilities` `partitioning.path` (carried on the
 * merged native reaches) wins; a gateway `dataLocation` that is itself a bare
 * path is next; only then the manifest-derived default.
 */
function dataLocationPath(model: CapabilityModel, app: AppSummary): string {
  const fromReach = model.native.find(
    (reach) => reach.id !== "events" && reach.location && !/\s/.test(reach.location),
  )?.location;
  if (fromReach) return fromReach;
  if (model.fromGateway && model.dataLocation && !/\s/.test(model.dataLocation)) {
    return model.dataLocation;
  }
  const root = app.paths?.[0] ?? (app.entry ? app.entry.replace(/\/[^/]*$/, "") : app.name);
  return model.dataScope === "workspace" ? "<install prefix>/data" : `${root}/data/<app user>`;
}

/** Icon + monospace path + one short line: the data-location callout. */
function DataLocationCallout({ model, app }: { model: CapabilityModel; app: AppSummary }) {
  return (
    <div className="flex items-start gap-2.5 rounded-lg border bg-muted/20 px-3 py-2.5">
      <DatabaseIcon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
      <div className="min-w-0 space-y-0.5">
        <code className="block break-all font-mono text-xs font-medium">
          {dataLocationPath(model, app)}
        </code>
        <p className="text-[0.7rem] text-muted-foreground">
          {model.dataScope === "workspace"
            ? "Self-hosted — data lives in each caller's own workspace; the publisher stores nothing and lends no credentials."
            : "Owner-hosted — one private partition per app user, stored in the publishing workspace."}
        </p>
        {!model.fromGateway && (
          <p className="text-[0.65rem] text-muted-foreground/80">
            Derived from the manifest — this gateway doesn't report capabilities yet.
          </p>
        )}
      </div>
    </div>
  );
}

/** One reach: namespace chip, plain-language label, procedure badges, location. */
function ReachRow({ reach }: { reach: CapabilityReach }) {
  return (
    <div className="rounded-md border px-2 py-1.5">
      <div className="flex flex-wrap items-center gap-1.5">
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.7rem] font-medium">
          {reach.id}
        </code>
        {reach.label !== reach.id && <span className="text-xs">{reach.label}</span>}
        {reach.entries?.map((entry) => (
          <code className={`${BADGE} border-border font-mono text-muted-foreground`} key={entry}>
            {entry}
          </code>
        ))}
      </div>
      {reach.detail && <p className="mt-1 text-[0.7rem] text-muted-foreground">{reach.detail}</p>}
      {reach.location && (
        <p className="mt-1 break-all font-mono text-[0.68rem] text-muted-foreground">
          → {reach.location}
        </p>
      )}
    </div>
  );
}

/**
 * One of the three reach tiers from the "three ways data is reached" model,
 * as a distinct numbered card rather than a run of prose.
 */
function ReachTier({
  index,
  title,
  hint,
  reaches,
  empty,
}: {
  index: number;
  title: string;
  hint: string;
  reaches: CapabilityReach[];
  empty: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="flex items-start gap-2 border-b bg-muted/30 px-2.5 py-1.5">
        <span className="mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full border bg-background text-[0.62rem] font-semibold text-muted-foreground">
          {index}
        </span>
        <div className="min-w-0">
          <SectionHeading>{title}</SectionHeading>
          <p className="text-[0.68rem] text-muted-foreground">{hint}</p>
        </div>
      </div>
      <div className="space-y-1.5 p-2">
        {reaches.length === 0 ? (
          <Empty>{empty}</Empty>
        ) : (
          reaches.map((reach) => <ReachRow key={`${reach.kind}:${reach.id}`} reach={reach} />)
        )}
      </div>
    </div>
  );
}

function CapabilitiesView({ model, app }: { model: CapabilityModel; app: AppSummary }) {
  return (
    <div className="space-y-2.5">
      <DataLocationCallout app={app} model={model} />

      <ReachTier
        empty="No native namespaces allowed."
        hint="First-party namespaces, automatically partitioned per app user and rate-limited. No credential, no workspace membership."
        index={1}
        reaches={model.native}
        title="Native, auto-partitioned"
      />
      <ReachTier
        empty="No provider is reachable — this app is entirely self-contained."
        hint="Provider namespaces run with the owning workspace's credential. An app session can never call one directly; it goes through an exported workflow, which is where a secret comes near the request."
        index={2}
        reaches={model.credentialed}
        title="Workspace-credentialed"
      />
      <ReachTier
        empty="No exported workflows."
        hint="The BFF boundary: allow-listed by name, traced, rate-limited."
        index={3}
        reaches={model.workflows}
        title="Exported workflows"
      />

      {model.rejected.length > 0 && (
        <div className="rounded-lg border border-red-300 px-2.5 py-2 dark:border-red-900">
          <SectionHeading>Not reachable from an app session</SectionHeading>
          <p className="mt-0.5 text-[0.7rem] text-muted-foreground">
            These allow-list entries name neither a native namespace nor one of this app's
            workflows. Reach them through an exported workflow instead.
          </p>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {model.rejected.map((entry) => (
              <code
                className={`${BADGE} border-red-300 font-mono text-red-700 dark:border-red-900 dark:text-red-400`}
                key={entry}
              >
                {entry}
              </code>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * App access + limits editor: visibility, who may sign in, the tool
 * allow-list, and per-user rate/daily budgets. Saves ride the same
 * `apps.publish` upsert the owner used to publish.
 */
function AppSettings({
  app,
  invoke,
  onSaved,
}: {
  app: AppSummary;
  invoke: ToolsInvoke;
  onSaved: () => void;
}) {
  const [visibility, setVisibility] = React.useState(app.visibility);
  const [access, setAccess] = React.useState(app.roles?.access ?? "any");
  const [users, setUsers] = React.useState<string[]>(app.roles?.users ?? []);
  const [tools, setTools] = React.useState<string[]>(app.allowedTools ?? []);
  const [rps, setRps] = React.useState(String(app.rateLimit?.rps ?? 5));
  const [daily, setDaily] = React.useState(String(app.rateLimit?.daily ?? 1000));
  const [saving, setSaving] = React.useState(false);
  const [status, setStatus] = React.useState<string | null>(null);

  const save = async () => {
    setSaving(true);
    setStatus(null);
    try {
      await invoke("publish", {
        name: app.name,
        entry: app.entry,
        paths: app.paths,
        visibility,
        allowed_tools: tools,
        roles: {
          access,
          ...(access === "listed" ? { users } : {}),
        },
        rate_limit: {
          rps: Number(rps) > 0 ? Number(rps) : 5,
          daily: Number(daily) > 0 ? Number(daily) : 1000,
        },
      });
      setStatus("Saved");
      onSaved();
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-2.5">
      <div className="flex flex-wrap items-end gap-x-5 gap-y-2.5">
        <div className="space-y-1">
          <label className={LABEL}>Page visibility</label>
          <Segmented
            ariaLabel="Page visibility"
            onChange={setVisibility}
            options={[
              { value: "private", label: "Private", hint: "An Aprovan account is required" },
              { value: "public", label: "Public", hint: "Anyone can open the page" },
            ]}
            value={visibility}
          />
        </div>
        <div className="space-y-1">
          <label className={LABEL}>Who may use it</label>
          <Segmented
            ariaLabel="Who may use it"
            onChange={setAccess}
            options={[
              { value: "any", label: "Any signed-in account" },
              { value: "listed", label: "Only listed users" },
            ]}
            value={access}
          />
        </div>
      </div>
      {access === "listed" && (
        <div className="space-y-1">
          <label className={LABEL}>Allowed users (Cognito subs)</label>
          <TagsInput
            ariaLabel="Allowed users"
            onChange={setUsers}
            placeholder="Add a Cognito sub and press Enter…"
            value={users}
          />
        </div>
      )}
      <div className="space-y-1">
        <label className={LABEL}>Tool allow-list</label>
        <TagsInput
          ariaLabel="Tool allow-list"
          onChange={setTools}
          placeholder="namespace.procedure or namespace.*, press Enter…"
          value={tools}
        />
      </div>
      <div className="grid max-w-sm gap-2.5 sm:grid-cols-2">
        <div>
          <label className={LABEL}>Requests / second / user</label>
          <input
            className={FIELD}
            inputMode="numeric"
            onChange={(event) => setRps(event.target.value)}
            value={rps}
          />
        </div>
        <div>
          <label className={LABEL}>Calls / day / user</label>
          <input
            className={FIELD}
            inputMode="numeric"
            onChange={(event) => setDaily(event.target.value)}
            value={daily}
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
          disabled={saving}
          onClick={() => void save()}
          type="button"
        >
          {saving ? "Saving…" : "Save access & limits"}
        </button>
        {status && (
          <span
            className={`text-xs ${
              status === "Saved"
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {status}
          </span>
        )}
      </div>
    </div>
  );
}

function AccessTab({
  app,
  workflows,
  invoke,
  onChanged,
}: {
  app: AppSummary;
  workflows: WorkflowSummary[];
  invoke: ToolsInvoke;
  onChanged: () => void;
}) {
  const load = React.useCallback(async (): Promise<CapabilityModel> => {
    const base = deriveCapabilities(app, workflows);
    const result = await attempt(() => invoke("capabilities", { name: app.name }));
    return result.ok ? mergeCapabilities(base, result.value) : base;
  }, [app, invoke, workflows]);
  const { data } = useLoader(load, true, app.name);
  const model = data ?? deriveCapabilities(app, workflows);

  return (
    <div className="space-y-3">
      <CapabilitiesView app={app} model={model} />

      {/* Roles as chips, not prose: who may open it, who administers it. */}
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="space-y-1.5 rounded-lg border px-2.5 py-2">
          <SectionHeading>Who may open it</SectionHeading>
          {app.roles?.access === "listed" ? (
            app.roles.users?.length ? (
              <div className="flex flex-wrap gap-1">
                {app.roles.users.map((user) => (
                  <UserChip id={user} key={user} />
                ))}
              </div>
            ) : (
              <Empty>Listed users only — none listed yet.</Empty>
            )
          ) : (
            <span className={`${BADGE} border-border text-muted-foreground`}>
              Any signed-in account
            </span>
          )}
        </div>
        <div className="space-y-1.5 rounded-lg border px-2.5 py-2">
          <SectionHeading>Admins</SectionHeading>
          {app.roles?.admins?.length ? (
            <div className="flex flex-wrap gap-1">
              {app.roles.admins.map((admin) => (
                <UserChip id={admin} key={admin} />
              ))}
            </div>
          ) : (
            <span className={`${BADGE} border-border text-muted-foreground`}>
              Workspace members
            </span>
          )}
        </div>
      </div>

      {/* Rate limit as a scannable stat row rather than a sentence. */}
      <div className="space-y-1">
        <SectionHeading hint="Enforced per app user">Rate limit</SectionHeading>
        <div className="flex flex-wrap items-center gap-1.5">
          <Stat label="req / s" value={app.rateLimit?.rps ?? "—"} />
          <Stat label="burst" value={app.rateLimit?.burst ?? "—"} />
          <Stat label="per day" value={app.rateLimit?.daily ?? "—"} />
          <span className="text-[0.65rem] text-muted-foreground">
            per app user{app.rateLimit ? "" : " · gateway defaults"}
          </span>
        </div>
      </div>

      <div className="space-y-1.5 border-t pt-2.5">
        <SectionHeading>Edit access &amp; limits</SectionHeading>
        <AppSettings app={app} invoke={invoke} onSaved={onChanged} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Releases tab
// ---------------------------------------------------------------------------

interface ReleaseState {
  channels: AppChannel[];
  releases: AppRelease[];
  /** True when neither procedure exists — releases aren't wired up yet. */
  unsupported: boolean;
}

function ReleasesTab({ app, invoke }: { app: AppSummary; invoke: ToolsInvoke }) {
  const [busy, setBusy] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [notes, setNotes] = React.useState("");
  const [cutChannel, setCutChannel] = React.useState("preview");
  const [promoteFrom, setPromoteFrom] = React.useState("preview");
  const [promoteTo, setPromoteTo] = React.useState("live");

  const load = React.useCallback(async (): Promise<ReleaseState> => {
    const [channelsResult, releasesResult] = await Promise.all([
      attempt(() => invoke("channels", { name: app.name })),
      attempt(() => invoke("releases", { name: app.name })),
    ]);
    return {
      channels: channelsResult.ok ? normalizeChannels(channelsResult.value) : [],
      releases: releasesResult.ok ? normalizeReleases(releasesResult.value) : [],
      unsupported: Boolean(channelsResult.missing) && Boolean(releasesResult.missing),
    };
  }, [app.name, invoke]);

  const { data, reload, loading } = useLoader(load, true, app.name);

  const act = async (label: string, operation: string, args: Record<string, unknown>) => {
    setBusy(label);
    setError(null);
    const result = await attempt(() => invoke(operation, { name: app.name, ...args }));
    setBusy(null);
    if (!result.ok) {
      setError(
        result.missing
          ? `This gateway has no apps.${operation} yet.`
          : (result.error ?? `${label} failed`),
      );
      return;
    }
    reload();
  };

  const channels = data?.channels ?? [];
  const releases = data?.releases ?? [];
  const channelNames = channels.length ? channels.map((channel) => channel.name) : ["live", "preview"];

  if (data?.unsupported) {
    return (
      <Empty>
        Releases aren't available on this gateway yet. The live page serves the workspace's
        current files until <code className="font-mono">apps.release</code> lands.
      </Empty>
    );
  }

  return (
    <div className="space-y-4">
      <ErrorLine error={error} />

      <div className="space-y-1">
        <SectionHeading hint="What each channel currently points at">Channels</SectionHeading>
        {loading && channels.length === 0 ? (
          <Empty>Loading…</Empty>
        ) : channels.length === 0 ? (
          <Empty>No channel pins yet — cut a release to create one.</Empty>
        ) : (
          <div className="space-y-1">
            {channels.map((channel) => (
              <div
                className="flex flex-wrap items-center gap-2 rounded-md border px-2.5 py-1.5 text-xs"
                key={channel.name}
              >
                <span className={`${BADGE} border-border font-medium`}>{channel.name}</span>
                <code className="font-mono text-muted-foreground">
                  {channel.releaseId ? channel.releaseId.slice(0, 12) : "unpinned"}
                </code>
                {channel.updatedAt && (
                  <span className="text-muted-foreground">{formatWhen(channel.updatedAt)}</span>
                )}
                <span className="ml-auto">
                  <ConfirmButton
                    armedLabel="Confirm rollback?"
                    busy={busy === `rollback:${channel.name}`}
                    busyLabel="Rolling back…"
                    label="Rollback"
                    onConfirm={() =>
                      void act(`rollback:${channel.name}`, "rollback", { channel: channel.name })
                    }
                    tone="caution"
                  />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-1.5 rounded-md border px-2.5 py-2">
        <SectionHeading>Cut a release</SectionHeading>
        <p className="text-[0.7rem] text-muted-foreground">
          A release is a snapshot of content hashes over files that already exist — free to
          create, instant to roll back.
        </p>
        <div className="grid gap-2 sm:grid-cols-[8rem_1fr_auto]">
          <select
            className={FIELD}
            onChange={(event) => setCutChannel(event.target.value)}
            value={cutChannel}
          >
            {channelNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <input
            className={FIELD}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Notes (optional)"
            value={notes}
          />
          <button
            className="rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
            disabled={busy === "release"}
            onClick={() => {
              void act("release", "release", { channel: cutChannel, notes }).then(() => setNotes(""));
            }}
            type="button"
          >
            {busy === "release" ? "Cutting…" : "Release"}
          </button>
        </div>
      </div>

      <div className="space-y-1.5 rounded-md border px-2.5 py-2">
        <SectionHeading>Promote</SectionHeading>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <select
            className={`${FIELD} w-auto`}
            onChange={(event) => setPromoteFrom(event.target.value)}
            value={promoteFrom}
          >
            {channelNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <span className="text-muted-foreground">→</span>
          <select
            className={`${FIELD} w-auto`}
            onChange={(event) => setPromoteTo(event.target.value)}
            value={promoteTo}
          >
            {channelNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <ConfirmButton
            armedLabel="Confirm promote?"
            busy={busy === "promote"}
            busyLabel="Promoting…"
            label="Promote"
            onConfirm={() => void act("promote", "promote", { from: promoteFrom, to: promoteTo })}
            tone="caution"
          />
        </div>
      </div>

      <div className="space-y-1">
        <SectionHeading>History</SectionHeading>
        {releases.length === 0 ? (
          <Empty>No releases yet.</Empty>
        ) : (
          <div className="space-y-1">
            {releases.map((release) => (
              <div className="rounded-md border px-2.5 py-1.5 text-xs" key={release.id}>
                <div className="flex flex-wrap items-center gap-2">
                  <code className="font-mono" title={release.id}>
                    {release.id.slice(0, 12)}
                  </code>
                  {release.channel && (
                    <span className={`${BADGE} border-border text-muted-foreground`}>
                      {release.channel}
                    </span>
                  )}
                  {release.createdAt && (
                    <span className="text-muted-foreground">{formatWhen(release.createdAt)}</span>
                  )}
                  {release.createdBy && (
                    <span className="truncate font-mono text-[0.65rem] text-muted-foreground">
                      {release.createdBy}
                    </span>
                  )}
                </div>
                {release.notes && <p className="mt-0.5 text-muted-foreground">{release.notes}</p>}
                {(release.entryHash || release.workflowHashes?.length) && (
                  <div className="mt-0.5 flex flex-wrap gap-1.5 text-[0.65rem] text-muted-foreground">
                    {release.entryHash && (
                      <code className="font-mono">entry {release.entryHash.slice(0, 8)}</code>
                    )}
                    {release.workflowHashes?.map((entry) => (
                      <code className="font-mono" key={entry.name}>
                        {entry.name} {entry.hash.slice(0, 8)}
                      </code>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Pane
// ---------------------------------------------------------------------------

export interface AppDetailProps {
  app: AppSummary;
  /** The app's exported workflows, resolved against the workflow registry. */
  workflows: WorkflowSummary[];
  /** Gateway `apps` namespace transport. */
  invokeApps: ToolsInvoke;
  /** Gateway `workflows` namespace transport — the Workflows tab runs through it. */
  invoke: ToolsInvoke;
  onSelectWorkflow: (name: string) => void;
  /** The app was edited in place — refresh the catalog, keep it selected. */
  onChanged?: (() => void) | undefined;
  /**
   * The app is gone. Distinct from {@link AppDetailProps.onChanged} because a
   * host with a tab strip has to close the tab, not just reload. Falls back to
   * `onChanged` when omitted, which is the behaviour every existing host has.
   */
  onRemoved?: (() => void) | undefined;
  onOpenApp?: ((app: AppSummary) => void) | undefined;
  tab?: AppDetailTab;
  onTabChange?: ((tab: AppDetailTab) => void) | undefined;
  className?: string;
}

export function AppDetail({
  app,
  workflows,
  invokeApps,
  invoke,
  onSelectWorkflow,
  onChanged,
  onRemoved,
  onOpenApp,
  tab,
  onTabChange,
  className,
}: AppDetailProps) {
  const [localTab, setLocalTab] = React.useState<AppDetailTab>("overview");
  const active = tab ?? localTab;
  const setTab = (next: AppDetailTab) => {
    setLocalTab(next);
    onTabChange?.(next);
  };

  const [deleting, setDeleting] = React.useState(false);
  const [purgeData, setPurgeData] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // A different app in the same pane resets to Overview.
  React.useEffect(() => {
    setLocalTab("overview");
    setError(null);
    setPurgeData(false);
  }, [app.name]);

  const removeApp = async () => {
    setDeleting(true);
    setError(null);
    const result = await attempt(() =>
      invokeApps("remove", { name: app.name, purge_data: purgeData }),
    );
    if (!result.ok) {
      setError(result.error ?? "Delete failed");
      setDeleting(false);
      return;
    }
    if (onRemoved) onRemoved();
    else onChanged?.();
  };

  return (
    <div className={`space-y-3 ${className ?? ""}`}>
      <div className="flex flex-wrap items-start gap-2">
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-medium">{app.title ?? app.name}</span>
          <code className="font-mono text-[0.7rem] text-muted-foreground">{app.name}</code>
        </span>
        {onOpenApp && (
          <button className={SMALL_BUTTON} onClick={() => onOpenApp(app)} type="button">
            Open
          </button>
        )}
      </div>

      <ErrorLine error={error} />

      <Tabs
        active={active}
        onChange={setTab}
        tabs={TABS.map((entry) =>
          entry.id === "workflows" ? { ...entry, badge: workflows.length } : entry,
        )}
      />

      {active === "overview" && <Overview app={app} />}
      {active === "workflows" && (
        <WorkflowsTab
          app={app}
          invoke={invoke}
          onSelectWorkflow={onSelectWorkflow}
          workflows={workflows}
        />
      )}
      {active === "access" && (
        <AccessTab
          app={app}
          invoke={invokeApps}
          onChanged={() => onChanged?.()}
          workflows={workflows}
        />
      )}
      {active === "releases" && <ReleasesTab app={app} invoke={invokeApps} />}
      {active === "versions" && (
        <VersionsSection
          invoke={invokeApps}
          name={app.name}
          onRestored={() => onChanged?.()}
          open
        />
      )}

      <div className="flex flex-wrap items-center gap-2 border-t pt-2">
        <label className="flex items-center gap-1 text-[0.7rem] text-muted-foreground">
          <input
            checked={purgeData}
            onChange={(event) => setPurgeData(event.target.checked)}
            type="checkbox"
          />
          also delete the app folder &amp; every user's data
        </label>
        <span className="ml-auto">
          <ConfirmDeleteButton busy={deleting} label="Unpublish" onConfirm={() => void removeApp()} />
        </span>
      </div>
    </div>
  );
}
