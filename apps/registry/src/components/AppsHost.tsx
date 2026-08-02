/**
 * Registry host for the shared AppsPanel: wires the panel's transport to the
 * gateway client. Workspace apps and workflows are managed in the product app;
 * this surface links there when the gateway is unreachable without a session.
 */

import { createGatewayClient } from "@aprovan/ui/gateway";
import { AppsPanel } from "@aprovan/registry-ui/apps-panel";
import * as React from "react";
import { gatewayBaseUrl } from "@/lib/site";

const PRODUCT_APP_URL = "https://aprovan.com/chat/";

export function AppsHost() {
  const client = React.useMemo(
    () =>
      createGatewayClient({
        baseUrl: gatewayBaseUrl(),
        getToken: async () => undefined,
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

  const invokeRegistry = React.useCallback(
    (operation: string, args: Record<string, unknown>) =>
      invokeTool("registry", operation, args),
    [invokeTool],
  );

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

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted-foreground">
        Manage apps and workflows in the{" "}
        <a className="font-medium underline underline-offset-2 hover:text-foreground" href={PRODUCT_APP_URL}>
          product app
        </a>
        .
      </p>
      <AppsPanel
        createWorkflowHref={PRODUCT_APP_URL}
        invoke={invoke}
        invokeApps={invokeApps}
        invokeRegistry={invokeRegistry}
        loadScript={loadScript}
        variant="full"
      />
    </div>
  );
}
