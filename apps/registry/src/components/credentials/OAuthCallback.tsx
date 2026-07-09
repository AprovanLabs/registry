/**
 * OAuthCallback — handles the OAuth2 authorization code redirect.
 *
 * Reads `code` and `state` from the URL, validates against the pending state
 * stored in sessionStorage, then POSTs the credential to the gateway.
 *
 * On success: shows a confirmation and links back to /account/credentials.
 * On error: shows a descriptive error.
 */

import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAccessToken } from "@/lib/auth";
import {
  GatewayError,
  addCredential,
  clearOAuthPending,
  loadOAuthPending,
} from "@/lib/gateway";
import { withBasePath } from "@/lib/site";

type Status = "processing" | "success" | "error";

export function OAuthCallback() {
  const [status, setStatus] = useState<Status>("processing");
  const [message, setMessage] = useState<string>("");
  const [provider, setProvider] = useState<string>("");

  useEffect(() => {
    async function complete() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const returnedState = params.get("state");
      const oauthError = params.get("error");

      if (oauthError) {
        setStatus("error");
        setMessage(`Provider denied authorization: ${params.get("error_description") ?? oauthError}`);
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
        setMessage("No pending OAuth flow found. Please start again from the credentials page.");
        return;
      }

      if (returnedState !== pending.state) {
        setStatus("error");
        setMessage("State mismatch — possible CSRF. Please start the OAuth flow again.");
        clearOAuthPending();
        return;
      }

      const token = await getAccessToken();
      if (!token) {
        setStatus("error");
        setMessage("Your session has expired. Please sign in again.");
        return;
      }

      setProvider(pending.provider);

      try {
        await addCredential(token, {
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
        });
        clearOAuthPending();
        // Clear the code from the URL to avoid accidental re-use
        window.history.replaceState({}, "", withBasePath("/account/oauth-callback"));
        setStatus("success");
      } catch (err) {
        clearOAuthPending();
        setStatus("error");
        setMessage(
          err instanceof GatewayError
            ? err.message
            : err instanceof Error
              ? err.message
              : "Failed to save OAuth credential.",
        );
      }
    }

    void complete();
  }, []);

  return (
    <div className="mx-auto max-w-sm">
      {status === "processing" && (
        <Card>
          <CardHeader>
            <CardTitle>Completing OAuth flow…</CardTitle>
            <CardDescription>Storing your credential securely.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-2 w-full animate-pulse rounded bg-muted" />
          </CardContent>
        </Card>
      )}

      {status === "success" && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="size-5 text-green-600" />
              <CardTitle>Credential saved</CardTitle>
            </div>
            <CardDescription>
              OAuth token for <strong>{provider}</strong> has been registered successfully.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <a href={withBasePath("/account/credentials")}>Back to credentials</a>
            </Button>
          </CardContent>
        </Card>
      )}

      {status === "error" && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <XCircleIcon className="size-5 text-destructive" />
              <CardTitle>OAuth failed</CardTitle>
            </div>
            <CardDescription>{message}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <a href={withBasePath("/account/credentials")}>Back to credentials</a>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
