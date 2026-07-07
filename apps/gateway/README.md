# Gateway

API gateway for AprovanLabs — credential proxy, permission enforcement, and tool call routing.

## Hosted MCP Install Flow (OAuth 2.0 with DCR)

Hosted MCP clients (e.g. Claude connectors) authenticate against the gateway using the standard [OAuth 2.0 Authorization Code flow with PKCE](https://www.rfc-editor.org/rfc/rfc7636). The install flow uses [RFC 7591 Dynamic Client Registration](https://www.rfc-editor.org/rfc/rfc7591) so clients do not need a pre-shared secret:

```
MCP client                      Gateway                    Cognito Hosted UI
    │                              │                               │
    │  POST /oauth/register        │                               │
    │  { redirect_uris: [...] }    │                               │
    │─────────────────────────────>│                               │
    │                              │  CreateUserPoolClient         │
    │                              │──────────────────────────────>│
    │                              │  { ClientId, ClientSecret }   │
    │                              │<──────────────────────────────│
    │  { client_id, client_secret }│                               │
    │<─────────────────────────────│                               │
    │                              │                               │
    │  Redirect user to:           │                               │
    │  /oauth2/authorize           │                               │
    │  ?client_id=<client_id>      │                               │
    │  &code_challenge=<S256>      │                               │
    │  &response_type=code ...     │                               │
    │──────────────────────────────────────────────────────────────>
    │                              │                               │
    │  User completes login        │                               │
    │<──────────────────────────────────────────────────────────────
    │  ?code=<auth_code>           │                               │
    │                              │                               │
    │  POST /oauth2/token          │                               │
    │  code=... code_verifier=...  │                               │
    │──────────────────────────────────────────────────────────────>
    │  { access_token, refresh_token }                             │
    │<──────────────────────────────────────────────────────────────
```

The gateway's `POST /oauth/register` is the only new endpoint. `/oauth2/authorize` and `/oauth2/token` are served directly by the Cognito Hosted UI — the gateway is not in that path.

### Step 1 — Dynamic Client Registration

```http
POST /oauth/register
Content-Type: application/json

{
  "redirect_uris": ["https://your-mcp-client.example.com/callback"],
  "client_name": "My MCP Client",
  "grant_types": ["authorization_code", "refresh_token"],
  "response_types": ["code"],
  "scope": "openid email profile"
}
```

Response `201 Created`:

```json
{
  "client_id": "7abc123...",
  "client_secret": "...",
  "client_id_issued_at": 1751338800,
  "client_secret_expires_at": 0,
  "redirect_uris": ["https://your-mcp-client.example.com/callback"],
  "grant_types": ["authorization_code", "refresh_token"],
  "response_types": ["code"],
  "token_endpoint_auth_method": "client_secret_basic",
  "client_name": "My MCP Client",
  "scope": "openid email profile"
}
```

- `redirect_uris` — required; must be HTTPS (or `http://localhost` for local development).
- `grant_types` — optional, defaults to `["authorization_code", "refresh_token"]`.
- `scope` — optional, defaults to `openid email profile`.
- `client_secret_expires_at: 0` means the secret does not expire.

### Step 2 — Authorization Code + PKCE

Redirect the user to:

```
https://<COGNITO_DOMAIN>/oauth2/authorize
  ?response_type=code
  &client_id=<client_id>
  &redirect_uri=<redirect_uri>
  &scope=openid+email+profile
  &code_challenge=<S256_code_challenge>
  &code_challenge_method=S256
```

### Step 3 — Token Exchange

```http
POST https://<COGNITO_DOMAIN>/oauth2/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code
&client_id=<client_id>
&client_secret=<client_secret>
&code=<auth_code>
&redirect_uri=<redirect_uri>
&code_verifier=<code_verifier>
```

The MCP client stores the returned `refresh_token` in its install context for subsequent API calls.

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `GATEWAY_PORT` | `4000` | HTTP port |
| `GATEWAY_WORKSPACE_KEY` | *(insecure dev key)* | AES-256 key for credential encryption |
| `GATEWAY_JWT_SECRET` | *(insecure dev key)* | HS256 signing key for gateway JWTs |
| `GATEWAY_ADMIN_SECRET` | *(insecure dev secret)* | Shared secret for `POST /auth/token` |
| `GATEWAY_STORE_PATH` | *(in-memory)* | Path for persistent credential storage |
| `GATEWAY_PERMISSIONS_PATH` | *(in-memory)* | Path for persistent permission storage |
| `GATEWAY_RATE_LIMIT_RPS` | `10` | Requests/second per caller+provider |
| `GATEWAY_RATE_LIMIT_BURST` | `20` | Burst capacity |
| `PROVIDER_CACHE_SIZE` | `20` | Max providers held in the LRU provider module cache |
| `TOOL_LIST_CACHE_TTL_MS` | `300000` (5 min) | Per-workspace TTL for the `GET /tools` tool-list cache |
| `COGNITO_USER_POOL_ID` | *(required for DCR)* | Cognito user pool for DCR client provisioning |
| `COGNITO_REGION` | `AWS_REGION` → `us-east-1` | AWS region for Cognito |
| `COGNITO_DOMAIN` | — | Cognito hosted UI domain (e.g. `auth.example.com`) |
| `OTEL_EXPORTER_OTLP_ENDPOINT` | *(disabled)* | OTLP endpoint for telemetry |

## Running locally

```bash
pnpm dev
```

## Testing

```bash
pnpm test
```
