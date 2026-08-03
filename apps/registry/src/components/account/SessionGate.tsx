/**
 * Unified session gate over CatalogSession (hosted or standalone).
 *
 * Owns non-ready UI (loading, sign-in, scope picker, unreachable/retry) and
 * renders children with a ready GatewayClient. Hosts stay mode-agnostic.
 */

import type { GatewayClient } from "@aprovan/registry-main";
import { Loader2Icon, LogInIcon, LogOutIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { resolveSessionMode } from "@/lib/session";
import { useHostedSession } from "@/lib/session/hosted";
import { useStandaloneSession } from "@/lib/session/standalone";
import type { CatalogSession, SigninMethod } from "@/lib/session/types";
import { gatewayBaseUrl } from "@/lib/site";

type SessionGateProps = {
  caption: string;
  children: (client: GatewayClient) => React.ReactNode;
};

/** Split components avoid conditional hook calls (mode is build-time). */
function HostedSessionGate(props: SessionGateProps) {
  return <SessionGateView {...props} session={useHostedSession()} />;
}

function StandaloneSessionGate(props: SessionGateProps) {
  return <SessionGateView {...props} session={useStandaloneSession()} />;
}

export function SessionGate(props: SessionGateProps) {
  return resolveSessionMode() === "hosted" ? (
    <HostedSessionGate {...props} />
  ) : (
    <StandaloneSessionGate {...props} />
  );
}

function SessionGateView({
  caption,
  children,
  session,
}: SessionGateProps & { session: CatalogSession }) {
  const { state, signIn, selectScope, signOut, retry } = session;
  const [tokenDraft, setTokenDraft] = React.useState("");
  const [busy, setBusy] = React.useState(false);

  async function submitToken(e: React.SyntheticEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setBusy(true);
    try {
      await signIn({ token: tokenDraft });
    } finally {
      setBusy(false);
    }
  }

  async function startPkce(): Promise<void> {
    setBusy(true);
    try {
      await signIn();
    } finally {
      setBusy(false);
    }
  }

  if (state.status === "loading") {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <Loader2Icon className="size-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle>Gateway unreachable</CardTitle>
          <CardDescription>
            {state.message || `Could not reach ${gatewayBaseUrl()}.`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => retry()} type="button" variant="outline">
            Retry
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (state.status === "signin") {
    return (
      <SignInCard
        busy={busy}
        caption={caption}
        error={state.error}
        method={state.method}
        onPkce={() => void startPkce()}
        onSubmitToken={(e) => void submitToken(e)}
        onTokenChange={setTokenDraft}
        tokenDraft={tokenDraft}
      />
    );
  }

  if (state.status === "select-scope") {
    return (
      <div className="mx-auto flex max-w-lg flex-col gap-3">
        <Card>
          <CardHeader>
            <CardTitle>Select a workspace</CardTitle>
            <CardDescription>Choose the workspace to {caption}.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {state.workspaces.length === 0 ? (
              <p className="text-sm text-muted-foreground">No workspaces available.</p>
            ) : (
              state.workspaces.map((workspace) => (
                <Button
                  key={workspace.id}
                  onClick={() => void selectScope(workspace.id)}
                  type="button"
                  variant="outline"
                >
                  <span className="font-medium">{workspace.name}</span>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    {workspace.role}
                  </span>
                </Button>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (state.status === "ready") {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
          <p>
            Signed in as{" "}
            <span className="font-medium text-foreground">
              {state.identity.principal}
            </span>
            <span className="mx-1.5">·</span>
            <span className="font-mono text-xs">{state.identity.role}</span>
            <span className="mx-1.5">·</span>
            <span className="font-mono text-xs">
              {state.scope.kind}:{state.scope.id}
            </span>
          </p>
          <Button onClick={() => signOut()} size="sm" type="button" variant="ghost">
            <LogOutIcon />
            Sign out
          </Button>
        </div>
        {children(state.client)}
      </div>
    );
  }

  return null;
}

function SignInCard({
  method,
  caption,
  error,
  tokenDraft,
  onTokenChange,
  onSubmitToken,
  onPkce,
  busy,
}: {
  method: SigninMethod;
  caption: string;
  error?: string;
  tokenDraft: string;
  onTokenChange: (v: string) => void;
  onSubmitToken: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  onPkce: () => void;
  busy: boolean;
}) {
  const showToken =
    method.kind === "token" || method.kind === "oidc-pkce";
  const showPkce = method.kind === "oidc-pkce" || method.kind === "cognito";

  const title =
    method.kind === "cognito"
      ? "Sign in required"
      : method.kind === "oidc-pkce"
        ? "Sign in"
        : "Enter credential";

  const description =
    method.kind === "cognito"
      ? `Sign in via Cognito to ${caption}.`
      : method.kind === "oidc-pkce"
        ? `Sign in with your identity provider to ${caption}, or paste a bearer token.`
        : `Paste an API key or bearer token to ${caption}.`;

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {error ? <p className="text-sm text-destructive">{error}</p> : null}

        {showPkce ? (
          <Button disabled={busy} onClick={onPkce} type="button">
            <LogInIcon />
            {method.kind === "cognito" ? "Sign in with Cognito" : "Sign in with OIDC"}
          </Button>
        ) : null}

        {showToken ? (
          <form className="flex flex-col gap-2" onSubmit={onSubmitToken}>
            {method.kind === "oidc-pkce" ? (
              <p className="text-xs text-muted-foreground">Or paste a bearer token</p>
            ) : null}
            <Input
              autoComplete="off"
              disabled={busy}
              onChange={(e) => onTokenChange(e.target.value)}
              placeholder={
                method.kind === "token" && !showPkce
                  ? "API key or bearer token"
                  : "Bearer token"
              }
              type="password"
              value={tokenDraft}
            />
            <Button disabled={busy || !tokenDraft.trim()} type="submit" variant="outline">
              Continue
            </Button>
          </form>
        ) : null}
      </CardContent>
    </Card>
  );
}
