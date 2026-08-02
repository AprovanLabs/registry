/**
 * Registry host for the shared AppsPanel: wires the panel's transport to the
 * gateway client. On the public catalog this defers to the product app; local
 * standalone hosts (`PUBLIC_ACCOUNT_HOST=local` or dev) render the live panel
 * when a gateway session is available.
 */

import { AppsPanel } from "@aprovan/registry-ui/apps-panel";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  createPlaygroundGatewayClient,
  isStandaloneCatalogHost,
  loadSession,
} from "@/lib/gateway-session";

const PRODUCT_APP_URL = "https://aprovan.com/chat/";

export function AppsHost() {
  const standalone = isStandaloneCatalogHost();
  const hasSession = Boolean(loadSession());

  const client = React.useMemo(() => createPlaygroundGatewayClient(), []);

  const invokeTool = React.useCallback(
    async (namespace: string, operation: string, args: Record<string, unknown>) => {
      return client.callTool(namespace, operation, { args });
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

  if (!standalone || !hasSession) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center">
        <p className="text-sm leading-7 text-muted-foreground">
          Apps and workflows are managed in the{" "}
          <a
            className="font-medium underline underline-offset-2 hover:text-foreground"
            href={PRODUCT_APP_URL}
          >
            product app
          </a>
          {standalone && !hasSession
            ? ". Connect a gateway session for local standalone management."
            : "."}
        </p>
        <Button asChild className="mt-4" variant="outline">
          <a href={PRODUCT_APP_URL}>Open the app</a>
        </Button>
      </div>
    );
  }

  return (
    <AppsPanel
      createWorkflowHref={PRODUCT_APP_URL}
      invoke={invoke}
      invokeApps={invokeApps}
      invokeRegistry={invokeRegistry}
      loadScript={loadScript}
      variant="full"
    />
  );
}
