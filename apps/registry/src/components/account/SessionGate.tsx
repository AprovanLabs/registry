/**
 * Session gate for local catalog account pages — workspace selection without Cognito.
 */

import { useGatewaySession } from "@aprovan/ui/gateway";
import type { GatewayClient } from "@aprovan/registry-main";
import { Loader2Icon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { chatNativeUrl } from "@/lib/account-host";
import {
  createSessionGatewayClient,
  createWidgetGatewayClient,
  loadSession,
  LOCAL_AUTH_SENTINEL,
  saveSession,
} from "@/lib/gateway-session";

export function SessionGate({
  caption,
  children,
}: {
  caption: string;
  children: (client: GatewayClient) => React.ReactNode;
}) {
  const [workspaceId, setWorkspaceId] = React.useState<string | undefined>(
    () => loadSession()?.workspaceId,
  );
  const sessionClient = React.useMemo(
    () => createSessionGatewayClient(workspaceId),
    [workspaceId],
  );
  const session = useGatewaySession(sessionClient, true);

  React.useEffect(() => {
    if (session.status === "ready" && session.workspaceId) {
      setWorkspaceId(session.workspaceId);
    }
  }, [session.status, session.workspaceId]);

  const widgetClient = React.useMemo(
    () => createWidgetGatewayClient(workspaceId ?? session.workspaceId ?? undefined),
    [workspaceId, session.workspaceId],
  );

  async function pickWorkspace(id: string): Promise<void> {
    await session.select(id);
    setWorkspaceId(id);
    const stored = loadSession();
    const token = stored?.token && stored.token !== LOCAL_AUTH_SENTINEL ? stored.token : LOCAL_AUTH_SENTINEL;
    saveSession(token, id);
  }

  if (session.status === "loading" || session.status === "idle") {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <Loader2Icon className="size-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (session.status === "error") {
    return (
      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle>Gateway unreachable</CardTitle>
          <CardDescription>{session.error ?? "Could not reach the gateway."}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => void session.refresh()} type="button" variant="outline">
            Retry
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (session.status === "unauthenticated") {
    return (
      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle>Sign in required</CardTitle>
          <CardDescription>
            {caption}. Point this catalog at a local gateway (`PUBLIC_GATEWAY_URL`) or manage
            credentials in the product app.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild type="button">
            <a href={chatNativeUrl("credentials")}>Open credentials in app</a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (session.status === "no-workspace") {
    return (
      <div className="mx-auto flex max-w-lg flex-col gap-3">
        <Card>
          <CardHeader>
            <CardTitle>Select a workspace</CardTitle>
            <CardDescription>Choose the workspace to {caption}.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {session.workspaces.length === 0 ? (
              <p className="text-sm text-muted-foreground">No workspaces available.</p>
            ) : (
              session.workspaces.map((workspace) => (
                <Button
                  key={workspace.id}
                  onClick={() => void pickWorkspace(workspace.id)}
                  type="button"
                  variant="outline"
                >
                  <span className="font-medium">{workspace.name}</span>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    {workspace.role}
                  </span>
                </Button>
              ))
            )}
            {session.error ? (
              <p className="text-sm text-destructive">{session.error}</p>
            ) : null}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (session.status === "ready") {
    return <>{children(widgetClient)}</>;
  }

  return null;
}
