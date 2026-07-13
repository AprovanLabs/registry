import {
  GatewayClient,
  type GatewayConfig,
} from "@aprovan/registry-main";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
} from "@aprovan/ui";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface GatewayContextValue {
  client: GatewayClient;
  config: GatewayConfig;
  workspaceId?: string;
  setWorkspaceId?: (workspaceId: string) => void;
}

const GatewayContext = createContext<GatewayContextValue | undefined>(undefined);

export function GatewayProvider({
  value,
  children,
}: {
  value: GatewayContextValue;
  children: ReactNode;
}): React.ReactElement {
  return (
    <GatewayContext.Provider value={value}>{children}</GatewayContext.Provider>
  );
}

export function useGateway(): GatewayContextValue {
  const value = useContext(GatewayContext);
  if (!value) throw new Error("GatewayProvider is required");
  return value;
}

export function CredentialManager(): React.ReactElement {
  const { client } = useGateway();
  const [credentials, setCredentials] = useState<unknown[]>([]);
  const refresh = () =>
    void client
      .request<{ credentials: unknown[] }>("/credentials")
      .then((result) => setCredentials(result.credentials));
  useEffect(refresh, [client]);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Connections</CardTitle>
      </CardHeader>
      <CardContent>
        {credentials.length === 0 ? (
          <p>No provider credentials configured.</p>
        ) : (
          <pre>{JSON.stringify(credentials, null, 2)}</pre>
        )}
      </CardContent>
    </Card>
  );
}

export function AddCredentialForm({
  provider,
}: {
  provider: string;
}): React.ReactElement {
  const { client } = useGateway();
  const [token, setToken] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        void client.request("/credentials", true, {
          method: "POST",
          body: JSON.stringify({
            provider,
            payload: { type: "bearer_token", token },
          }),
        });
      }}
    >
      <Input
        aria-label={`${provider} token`}
        onChange={(event) => setToken(event.target.value)}
        type="password"
        value={token}
      />
      <Button type="submit">Connect {provider}</Button>
    </form>
  );
}

export function TryItConsole({
  provider,
  operation,
  baseUrl,
}: {
  provider: string;
  operation: string;
  baseUrl?: string;
}): React.ReactElement {
  const context = useContext(GatewayContext);
  const fallbackClient = useMemo(
    () => (baseUrl !== undefined ? new GatewayClient({ baseUrl }) : undefined),
    [baseUrl],
  );
  const client = context?.client ?? fallbackClient;
  if (!client) throw new Error("GatewayProvider or baseUrl is required");
  const [args, setArgs] = useState("{}");
  const [result, setResult] = useState<unknown>();
  return (
    <Card>
      <CardContent>
        <textarea onChange={(event) => setArgs(event.target.value)} value={args} />
        <Button
          onClick={() =>
            void client
              .callTool(provider, operation, { args: JSON.parse(args) })
              .then(setResult)
          }
        >
          Run
        </Button>
        {result !== undefined && <pre>{JSON.stringify(result, null, 2)}</pre>}
      </CardContent>
    </Card>
  );
}

export function ProviderBrowser(): React.ReactElement {
  const { client } = useGateway();
  const [tools, setTools] = useState<unknown[]>([]);
  useEffect(() => {
    void client.listTools().then((result) => setTools(result.tools));
  }, [client]);
  return <pre>{JSON.stringify(tools, null, 2)}</pre>;
}

export function WorkspacePicker({
  workspaces,
}: {
  workspaces: Array<{ id: string; name: string }>;
}): React.ReactElement {
  const { workspaceId, setWorkspaceId } = useGateway();
  return (
    <select
      onChange={(event) => setWorkspaceId?.(event.target.value)}
      value={workspaceId}
    >
      {workspaces.map((workspace) => (
        <option key={workspace.id} value={workspace.id}>
          {workspace.name}
        </option>
      ))}
    </select>
  );
}

export function McpInstallWidget(): React.ReactElement {
  const { config } = useGateway();
  return (
    <div>
      <Badge>{config.mode}</Badge>
      <code>https://aprovan.com/api/gateway/mcp</code>
    </div>
  );
}
