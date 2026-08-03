/**
 * Catalog host for registry-ui CredentialManager.
 */

import {
  CredentialManager,
  type CatalogProviderSummary,
} from "@aprovan/registry-ui";
import * as React from "react";
import { SessionGate } from "@/components/account/SessionGate";
import { fetchCatalogProviders } from "@/lib/catalog";
import { resolveSessionMode } from "@/lib/session";
import { withBasePath } from "@/lib/site";

const loadCatalogProviders = (): Promise<CatalogProviderSummary[]> =>
  fetchCatalogProviders();

const PRODUCT_CREDENTIALS_URL = "https://aprovan.com/chat/?native=credentials";

export function CredentialsHost({
  initialProvider,
}: {
  initialProvider?: string;
}) {
  const oauthRedirectPath = React.useMemo(
    () => withBasePath("/account/oauth-callback"),
    [],
  );
  const hosted = resolveSessionMode() === "hosted";

  return (
    <SessionGate caption="manage your provider credentials">
      {(client) => (
        <div className="flex flex-col gap-3">
          {hosted ? (
            <p className="text-sm text-muted-foreground">
              Prefer the workspace app?{" "}
              <a
                className="font-medium underline underline-offset-2 hover:text-foreground"
                href={PRODUCT_CREDENTIALS_URL}
              >
                Open in workspace app
              </a>
            </p>
          ) : null}
          <CredentialManager
            client={client}
            initialProvider={initialProvider}
            loadCatalogProviders={loadCatalogProviders}
            oauthRedirectPath={oauthRedirectPath}
          />
        </div>
      )}
    </SessionGate>
  );
}
