/**
 * Catalog host for registry-ui CredentialManager (local / standalone only).
 */

import {
  CredentialManager,
  type CatalogProviderSummary,
} from "@aprovan/registry-ui";
import * as React from "react";
import { SessionGate } from "@/components/account/SessionGate";
import { fetchCatalogProviders } from "@/lib/catalog";
import { withBasePath } from "@/lib/site";

const loadCatalogProviders = (): Promise<CatalogProviderSummary[]> =>
  fetchCatalogProviders();

export function CredentialsHost({
  initialProvider,
}: {
  initialProvider?: string;
}) {
  const oauthRedirectPath = React.useMemo(
    () => withBasePath("/account/oauth-callback"),
    [],
  );

  return (
    <SessionGate caption="manage your provider credentials">
      {(client) => (
        <CredentialManager
          client={client}
          initialProvider={initialProvider}
          loadCatalogProviders={loadCatalogProviders}
          oauthRedirectPath={oauthRedirectPath}
        />
      )}
    </SessionGate>
  );
}
