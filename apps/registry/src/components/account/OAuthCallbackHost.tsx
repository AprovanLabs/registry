/**
 * OAuth redirect handler for local catalog credential flows.
 */

import {
  clearOAuthPending,
  loadOAuthPending,
  type CredentialRecord,
} from "@aprovan/registry-ui";
import { CheckCircleIcon, Loader2Icon, XCircleIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SessionGate } from "@/components/account/SessionGate";
import { withBasePath } from "@/lib/site";

type Status = "processing" | "success" | "error";

function OAuthCallbackBody({ client }: { client: import("@aprovan/registry-main").GatewayClient }) {
  const [status, setStatus] = React.useState<Status>("processing");
  const [message, setMessage] = React.useState("");
  const [provider, setProvider] = React.useState("");

  React.useEffect(() => {
    async function complete(): Promise<void> {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const returnedState = params.get("state");
      const oauthError = params.get("error");

      if (oauthError) {
        setStatus("error");
        setMessage(
          `Provider denied authorization: ${params.get("error_description") ?? oauthError}`,
        );
        return;
      }

      if (!code) {
        setStatus("error");
        setMessage("No authorization code received from provider.");
        return;
      }

      const pending = loadOAuthPending();
      if (!pending) {
        setStatus("error");
        setMessage("No pending OAuth flow found. Start again from the credentials page.");
        return;
      }

      if (returnedState !== pending.state) {
        setStatus("error");
        setMessage("State mismatch — possible CSRF. Please start the OAuth flow again.");
        clearOAuthPending();
        return;
      }

      setProvider(pending.provider);

      try {
        await client.request<CredentialRecord>("/credentials", true, {
          method: "POST",
          body: JSON.stringify({
            provider: pending.provider,
            label: pending.label,
            payload: {
              type: "oauth2_authcode",
              clientId: pending.clientId,
              clientSecret: pending.clientSecret,
              tokenUrl: pending.tokenUrl,
              code,
              redirectUri: pending.redirectUri,
              scopes: pending.scopes,
            },
          }),
        });
        clearOAuthPending();
        setStatus("success");
        setMessage("Credential saved successfully.");
      } catch (err) {
        setStatus("error");
        setMessage(err instanceof Error ? err.message : "Failed to save credential.");
        clearOAuthPending();
      }
    }

    void complete();
  }, [client]);

  const credentialsHref = withBasePath("/account/credentials");

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {status === "processing" ? (
            <Loader2Icon className="size-5 animate-spin" />
          ) : status === "success" ? (
            <CheckCircleIcon className="size-5 text-green-600" />
          ) : (
            <XCircleIcon className="size-5 text-destructive" />
          )}
          OAuth callback
        </CardTitle>
        <CardDescription>
          {provider ? (
            <>
              Provider <span className="font-mono">{provider}</span>
            </>
          ) : (
            "Completing authorization…"
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {status === "processing" ? (
          <p className="text-sm text-muted-foreground">Saving your credential…</p>
        ) : (
          <p className="text-sm text-muted-foreground">{message}</p>
        )}
        {status !== "processing" ? (
          <Button asChild type="button">
            <a href={credentialsHref}>Back to credentials</a>
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}

export function OAuthCallbackHost() {
  return (
    <SessionGate caption="complete OAuth authorization">
      {(client) => <OAuthCallbackBody client={client} />}
    </SessionGate>
  );
}
