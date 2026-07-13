import { CheckIcon, CopyIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { withBasePath } from "@/lib/site";

type Client = "claude-desktop" | "cursor" | "json";

const CLIENT_OPTIONS: { id: Client; label: string }[] = [
  { id: "claude-desktop", label: "Claude Desktop" },
  { id: "cursor", label: "Cursor" },
  { id: "json", label: "Copy JSON" },
];

const GATEWAY_BASE = "https://gateway.aprovan.com";

function buildSnippet(workspaceId: string): string {
  return JSON.stringify(
    {
      mcpServers: {
        aprovan: {
          url: `${GATEWAY_BASE}/mcp`,
          headers: { "X-Aprovan-Workspace": workspaceId },
        },
      },
    },
    null,
    2,
  );
}

const PASTE_TARGET: Record<Client, string> = {
  "claude-desktop":
    "~/Library/Application Support/Claude/claude_desktop_config.json (macOS) or %APPDATA%\\Claude\\claude_desktop_config.json (Windows)",
  cursor: "~/.cursor/mcp.json",
  json: "",
};

export function McpInstallWidget({ workspaceId }: { workspaceId: string }) {
  const [client, setClient] = React.useState<Client>("claude-desktop");
  const [copied, setCopied] = React.useState(false);

  const snippet = buildSnippet(workspaceId);
  const target = PASTE_TARGET[client];
  const clientLabel = CLIENT_OPTIONS.find((o) => o.id === client)?.label ?? "";

  async function handleCopy() {
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Install via MCP</CardTitle>
        <CardDescription>
          Connect any MCP-compatible AI client to this workspace.{" "}
          <a
            href={withBasePath("/docs/mcp")}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Auth setup guide
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {CLIENT_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setClient(opt.id)}
              className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                client === opt.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="rounded-xl border bg-muted/50 p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-sm font-medium">
              {client === "json" ? "MCP config JSON" : `${clientLabel} config`}
            </p>
            <Button variant="outline" size="xs" onClick={() => void handleCopy()}>
              {copied ? (
                <CheckIcon data-icon="inline-start" />
              ) : (
                <CopyIcon data-icon="inline-start" />
              )}
              {copied ? "Copied" : "Copy"}
            </Button>
          </div>
          <pre className="overflow-x-auto rounded-lg bg-background p-3 text-sm font-mono">
            <code>{snippet}</code>
          </pre>
          {target && (
            <p className="mt-3 text-xs text-muted-foreground">
              Paste into:{" "}
              <code className="rounded bg-muted px-1 py-0.5 font-mono">{target}</code>
            </p>
          )}
        </div>

        {client !== "json" && (
          <p className="text-sm text-muted-foreground">
            After pasting, restart {clientLabel}. It will prompt you to sign in via Cognito — after
            login, <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">list_tools</code>{" "}
            confirms the connection.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
