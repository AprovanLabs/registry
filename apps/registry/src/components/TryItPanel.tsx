/**
 * TryItPanel — auth-wired island around the shared `TryItConsole`.
 *
 * Astro island props must be serializable, so the token callback cannot cross
 * the `.astro` boundary. This wrapper builds the authorized `GatewayClient`
 * (Cognito access token + active workspace header) client-side and hands it to
 * the presentational console from `@aprovan/registry-ui`.
 */

import { GatewayClient } from "@aprovan/registry-main";
import {
  TryItConsole,
  type TryItAuthState,
  type TryItField,
} from "@aprovan/registry-ui";
import * as React from "react";
import { getAccessToken, getAuthenticatedUser, isAuthConfigured, signIn } from "@/lib/auth";
import { loadSession } from "@/lib/gateway";
import { gatewayBaseUrl } from "@/lib/site";

export interface TryItPanelProps {
  provider: string;
  operation: string;
  fields?: TryItField[];
}

export function TryItPanel({ provider, operation, fields }: TryItPanelProps) {
  const [authState, setAuthState] = React.useState<TryItAuthState>("unknown");

  const client = React.useMemo(
    () =>
      new GatewayClient({
        baseUrl: gatewayBaseUrl(),
        getToken: async () => (await getAccessToken()) ?? undefined,
        getWorkspaceId: () => loadSession()?.workspaceId,
      }),
    [],
  );

  React.useEffect(() => {
    if (!isAuthConfigured()) {
      // No Cognito config (e.g. gateway running in auth mode "none") — leave
      // the console runnable; the gateway decides whether calls need a token.
      setAuthState("unknown");
      return;
    }
    void getAuthenticatedUser().then((user) => {
      setAuthState(user && !user.expired ? "ready" : "signed-out");
    });
  }, []);

  return (
    <TryItConsole
      authState={authState}
      client={client}
      fields={fields}
      onSignIn={() =>
        void signIn(`${window.location.pathname}${window.location.search}`)
      }
      operation={operation}
      provider={provider}
    />
  );
}
