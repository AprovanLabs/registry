/**
 * TryItPanel — gateway-wired island around the shared `TryItConsole`.
 *
 * Astro island props must be serializable, so the token callback cannot cross
 * the `.astro` boundary. This wrapper builds a gateway client client-side
 * (optional sessionStorage token for local standalone) and hands it to the
 * presentational console from `@aprovan/registry-ui`. No Cognito sign-in on
 * the public catalog — anonymous/public operations still run.
 */

import {
  TryItConsole,
  type TryItField,
} from "@aprovan/registry-ui";
import * as React from "react";
import { createPlaygroundGatewayClient } from "@/lib/gateway-session";
import { gatewayBaseUrl } from "@/lib/site";

export interface TryItPanelProps {
  provider: string;
  operation: string;
  fields?: TryItField[];
}

export function TryItPanel({ provider, operation, fields }: TryItPanelProps) {
  const client = React.useMemo(() => createPlaygroundGatewayClient(), []);

  return (
    <TryItConsole
      authState="unknown"
      baseUrl={gatewayBaseUrl()}
      client={client}
      fields={fields}
      operation={operation}
      provider={provider}
    />
  );
}
