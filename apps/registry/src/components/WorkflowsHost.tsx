/**
 * Registry host for the shared WorkflowsPanel: wires the panel's transport
 * to the registry's authenticated gateway client. The same panel renders in
 * patchwork chat, so workflow management looks identical on both surfaces.
 */

import { createGatewayClient } from "@aprovan/ui/gateway";
import { WorkflowsPanel } from "@aprovan/registry-ui/workflows-panel";
import * as React from "react";
import { getAccessToken, isAuthConfigured } from "@/lib/auth";
import { gatewayBaseUrl, withBasePath } from "@/lib/site";

export function WorkflowsHost() {
  const client = React.useMemo(
    () =>
      createGatewayClient({
        baseUrl: gatewayBaseUrl(),
        getToken: getAccessToken,
      }),
    [],
  );

  const invoke = React.useCallback(
    async (operation: string, args: Record<string, unknown>) => {
      const result = await client.request<{ data?: unknown }>(
        `/tools/workflows/${operation}`,
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

  if (!isAuthConfigured()) {
    return (
      <p className="text-sm text-muted-foreground">
        Sign in to manage workspace workflows.
      </p>
    );
  }

  return (
    <WorkflowsPanel
      invoke={invoke}
      onOpenScript={(path) =>
        window.open(withBasePath(`/playground?file=${encodeURIComponent(path)}`), "_self")
      }
    />
  );
}
