/**
 * Cognito / standalone OIDC PKCE callback at `/auth/callback`.
 */

import { AuthCallback as UiAuthCallback } from "@aprovan/ui/auth";
import { XCircleIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { resolveSessionMode } from "@/lib/session";
import { getHostedAuth } from "@/lib/session/hosted";
import { completeStandaloneOidcSignIn } from "@/lib/session/standalone";
import { withBasePath } from "@/lib/site";

type Status = "processing" | "error";

export function AuthCallback() {
  const mode = resolveSessionMode();
  if (mode === "hosted") {
    return <HostedAuthCallback />;
  }
  return <StandaloneAuthCallback />;
}

function HostedAuthCallback() {
  // Ensure the Cognito singleton is registered before completing the redirect.
  getHostedAuth();

  return (
    <UiAuthCallback
      fallbackPath={withBasePath("/account/credentials")}
      loading={<SigningInCard />}
      renderError={(message) => <ErrorCard message={message} />}
    />
  );
}

function StandaloneAuthCallback() {
  const [status, setStatus] = React.useState<Status>("processing");
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    void (async () => {
      try {
        await completeStandaloneOidcSignIn();
        const fallback = withBasePath("/account/credentials");
        window.location.replace(fallback);
      } catch (err) {
        setStatus("error");
        setMessage(err instanceof Error ? err.message : "Sign-in failed.");
      }
    })();
  }, []);

  if (status === "error") return <ErrorCard message={message} />;
  return <SigningInCard />;
}

function SigningInCard() {
  return (
    <div className="mx-auto max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Signing in…</CardTitle>
          <CardDescription>Completing authentication.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-2 w-full animate-pulse rounded bg-muted" />
        </CardContent>
      </Card>
    </div>
  );
}

function ErrorCard({ message }: { message: string }) {
  return (
    <div className="mx-auto max-w-sm">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <XCircleIcon className="size-5 text-destructive" />
            <CardTitle>Sign-in failed</CardTitle>
          </div>
          <CardDescription>{message}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="outline">
            <a href={withBasePath("/account/credentials")}>Back to credentials</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
