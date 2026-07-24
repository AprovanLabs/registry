/**
 * Registry host for the shared AppsPanel: wires the panel's transport to the
 * registry's authenticated gateway client. This is the registry's single
 * apps-and-workflows surface (`variant="full"`, the master/detail Apps view
 * — /workflows now redirects here); it can also read a workflow's script, so
 * a selected workflow shows its flow graph.
 *
 * Three transports, all through the one gateway client:
 *   invoke      → POST /tools/workflows/:operation
 *   invokeApps  → POST /tools/apps/:operation
 *   loadScript  → POST /tools/vfs/read
 */

import { createGatewayClient } from "@aprovan/ui/gateway";
import { AppsPanel } from "@aprovan/registry-ui/apps-panel";
import * as React from "react";
import { getAccessToken, isAuthConfigured } from "@/lib/auth";
import { gatewayBaseUrl, withBasePath } from "@/lib/site";

export function AppsHost() {
  const client = React.useMemo(
    () =>
      createGatewayClient({
        baseUrl: gatewayBaseUrl(),
        getToken: getAccessToken,
      }),
    [],
  );

  const invokeTool = React.useCallback(
    async (namespace: string, operation: string, args: Record<string, unknown>) => {
      const result = await client.request<{ data?: unknown }>(
        `/tools/${namespace}/${operation}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ args }),
        },
      );
      return result.data;
    },
    [client],
  );

  const invoke = React.useCallback(
    (operation: string, args: Record<string, unknown>) =>
      invokeTool("workflows", operation, args),
    [invokeTool],
  );

  const invokeApps = React.useCallback(
    (operation: string, args: Record<string, unknown>) =>
      invokeTool("apps", operation, args),
    [invokeTool],
  );

  // A script that cannot be read (deleted, or not readable by this session)
  // is not an error the panel should surface — the run form renders alone.
  const loadScript = React.useCallback(
    async (path: string): Promise<string | null> => {
      try {
        const data = (await invokeTool("vfs", "read", { path })) as
          | { content?: unknown }
          | undefined;
        return typeof data?.content === "string" ? data.content : null;
      } catch {
        return null;
      }
    },
    [invokeTool],
  );

  if (!isAuthConfigured()) {
    return (
      <p className="text-sm text-muted-foreground">
        Sign in to manage workspace apps.
      </p>
    );
  }

  return (
    <AppsPanel
      invoke={invoke}
      invokeApps={invokeApps}
      loadScript={loadScript}
      onOpenScript={(path) =>
        window.open(withBasePath(`/playground?file=${encodeURIComponent(path)}`), "_self")
      }
      variant="full"
    />
  );
}
