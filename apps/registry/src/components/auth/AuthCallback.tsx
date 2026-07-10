/**
 * AuthCallback — the Cognito PKCE redirect target (`/auth/callback`).
 *
 * Completes the authorization-code exchange via `signinRedirectCallback`,
 * then returns the user to the page that initiated the sign-in (or the
 * credentials page by default).
 */

import { XCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { completeSignIn, consumeReturnPath } from "@/lib/auth";
import { withBasePath } from "@/lib/site";

type Status = "processing" | "error";

export function AuthCallback() {
  const [status, setStatus] = useState<Status>("processing");
  const [message, setMessage] = useState("");

  useEffect(() => {
    void (async () => {
      try {
        await completeSignIn();
        const fallback = withBasePath("/account/credentials");
        const returnPath = consumeReturnPath() ?? fallback;
        // Ensure we land inside the app's base path.
        const safe = returnPath.startsWith(withBasePath(""))
          ? returnPath
          : fallback;
        window.location.replace(safe);
      } catch (err) {
        setStatus("error");
        setMessage(err instanceof Error ? err.message : "Sign-in failed.");
      }
    })();
  }, []);

  if (status === "error") {
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

  return (
    <div className="mx-auto max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Signing in…</CardTitle>
          <CardDescription>Completing Cognito authentication.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-2 w-full animate-pulse rounded bg-muted" />
        </CardContent>
      </Card>
    </div>
  );
}
