/**
 * WorkspacePicker — choose the active workspace for the signed-in user.
 *
 * Shown when `GET /session` reports `activeWorkspaceId === null` (or when the
 * user wants to switch). Lists every workspace the caller is a member of and
 * persists the choice via `POST /session/workspace`.
 */

import { RefreshCwIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GatewayError, getSession, selectWorkspace } from "@/lib/gateway";

export function WorkspacePicker({
  token,
  onPicked,
}: {
  token: string;
  onPicked: (workspaceId: string) => void;
}) {
  const [workspaces, setWorkspaces] = useState<{ id: string; name: string; role: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pickingId, setPickingId] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError("");
    try {
      const session = await getSession(token);
      setWorkspaces(session.workspaces);
    } catch (err) {
      setError(err instanceof GatewayError ? err.message : "Failed to load workspaces.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, [token]);

  async function pick(workspaceId: string) {
    setPickingId(workspaceId);
    setError("");
    try {
      await selectWorkspace(token, workspaceId);
      onPicked(workspaceId);
    } catch (err) {
      setError(err instanceof GatewayError ? err.message : "Failed to select workspace.");
    } finally {
      setPickingId(null);
    }
  }

  return (
    <div className="mx-auto max-w-md">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <div>
              <CardTitle>Select a workspace</CardTitle>
              <CardDescription>
                Choose the workspace you want to work in. You can switch later.
              </CardDescription>
            </div>
            <Button
              aria-label="Refresh workspaces"
              disabled={loading}
              onClick={load}
              size="icon-sm"
              variant="ghost"
            >
              <RefreshCwIcon />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}
          {loading && (
            <p className="text-sm text-muted-foreground">Loading…</p>
          )}
          {!loading && workspaces.length === 0 && !error && (
            <p className="text-sm text-muted-foreground">
              You are not a member of any workspace yet. Ask a workspace admin
              to invite you, then refresh.
            </p>
          )}
          {workspaces.map((w) => (
            <button
              key={w.id}
              onClick={() => pick(w.id)}
              disabled={pickingId !== null}
              className="flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors hover:bg-muted disabled:opacity-50"
            >
              <span className="flex flex-col gap-0.5 min-w-0">
                <span className="truncate text-sm font-medium">{w.name}</span>
                <span className="truncate font-mono text-xs text-muted-foreground">
                  {w.id}
                </span>
              </span>
              <Badge variant={w.role === "admin" ? "default" : "secondary"}>
                {w.role}
              </Badge>
            </button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
