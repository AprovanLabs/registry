/**
 * Auth abstraction for @utdk provider packages.
 *
 * Auth is resolved in order: explicit options → environment variable → gateway proxy.
 * Provider packages declare their AuthProvider type in `package.json` `utdk.auth`
 * but contain no auth logic directly.
 */

export interface AuthProvider {
  applyToRequest(headers: Record<string, string>): Promise<void>;
}

// ---------------------------------------------------------------------------
// BearerToken
// ---------------------------------------------------------------------------

export class BearerToken implements AuthProvider {
  private readonly token: string;

  constructor(token: string) {
    this.token = token;
  }

  async applyToRequest(headers: Record<string, string>): Promise<void> {
    headers["Authorization"] = `Bearer ${this.token}`;
  }
}

// ---------------------------------------------------------------------------
// ApiKey
// ---------------------------------------------------------------------------

export interface ApiKeyOptions {
  /** Header name to use (default: "X-Api-Key") */
  headerName?: string;
  value: string;
}

export class ApiKey implements AuthProvider {
  private readonly headerName: string;
  private readonly value: string;

  constructor(options: ApiKeyOptions) {
    this.headerName = options.headerName ?? "X-Api-Key";
    this.value = options.value;
  }

  async applyToRequest(headers: Record<string, string>): Promise<void> {
    headers[this.headerName] = this.value;
  }
}

// ---------------------------------------------------------------------------
// OAuth2ClientCredentials
// ---------------------------------------------------------------------------

export interface OAuth2ClientCredentialsOptions {
  clientId: string;
  clientSecret: string;
  tokenUrl: string;
  /** Additional scopes to request */
  scopes?: string[];
}

interface TokenResponse {
  access_token: string;
  expires_in?: number;
  token_type?: string;
}

export class OAuth2ClientCredentials implements AuthProvider {
  private readonly options: OAuth2ClientCredentialsOptions;
  private accessToken: string | undefined;
  private expiresAt: number | undefined;

  constructor(options: OAuth2ClientCredentialsOptions) {
    this.options = options;
  }

  private isExpired(): boolean {
    if (this.expiresAt === undefined) return true;
    // Refresh 30 seconds before actual expiry
    return Date.now() >= this.expiresAt - 30_000;
  }

  private async fetchToken(): Promise<void> {
    const params = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: this.options.clientId,
      client_secret: this.options.clientSecret,
    });

    if (this.options.scopes && this.options.scopes.length > 0) {
      params.set("scope", this.options.scopes.join(" "));
    }

    const response = await fetch(this.options.tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`OAuth2 token request failed: ${response.status} ${response.statusText}\n${body}`);
    }

    const data = (await response.json()) as TokenResponse;
    this.accessToken = data.access_token;
    this.expiresAt = data.expires_in !== undefined ? Date.now() + data.expires_in * 1_000 : undefined;
  }

  async applyToRequest(headers: Record<string, string>): Promise<void> {
    if (!this.accessToken || this.isExpired()) {
      await this.fetchToken();
    }

    headers["Authorization"] = `Bearer ${this.accessToken}`;
  }
}

// ---------------------------------------------------------------------------
// OAuth2AuthCode
// ---------------------------------------------------------------------------

export interface OAuth2AuthCodeOptions {
  clientId: string;
  clientSecret: string;
  tokenUrl: string;
  /** The authorization code obtained from the redirect */
  code: string;
  redirectUri: string;
  /** Additional scopes to request */
  scopes?: string[];
}

export class OAuth2AuthCode implements AuthProvider {
  private readonly options: OAuth2AuthCodeOptions;
  private accessToken: string | undefined;
  private refreshToken: string | undefined;
  private expiresAt: number | undefined;

  constructor(options: OAuth2AuthCodeOptions) {
    this.options = options;
  }

  private isExpired(): boolean {
    if (this.expiresAt === undefined) return false;
    return Date.now() >= this.expiresAt - 30_000;
  }

  private async exchangeCode(): Promise<void> {
    const params = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: this.options.clientId,
      client_secret: this.options.clientSecret,
      code: this.options.code,
      redirect_uri: this.options.redirectUri,
    });

    const response = await fetch(this.options.tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`OAuth2 code exchange failed: ${response.status} ${response.statusText}\n${body}`);
    }

    const data = (await response.json()) as TokenResponse & { refresh_token?: string };
    this.accessToken = data.access_token;
    this.refreshToken = data.refresh_token;
    this.expiresAt = data.expires_in !== undefined ? Date.now() + data.expires_in * 1_000 : undefined;
  }

  private async refreshAccessToken(): Promise<void> {
    if (!this.refreshToken) {
      await this.exchangeCode();
      return;
    }

    const params = new URLSearchParams({
      grant_type: "refresh_token",
      client_id: this.options.clientId,
      client_secret: this.options.clientSecret,
      refresh_token: this.refreshToken,
    });

    const response = await fetch(this.options.tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    if (!response.ok) {
      // Fall back to code exchange on refresh failure
      await this.exchangeCode();
      return;
    }

    const data = (await response.json()) as TokenResponse & { refresh_token?: string };
    this.accessToken = data.access_token;
    if (data.refresh_token) {
      this.refreshToken = data.refresh_token;
    }
    this.expiresAt = data.expires_in !== undefined ? Date.now() + data.expires_in * 1_000 : undefined;
  }

  async applyToRequest(headers: Record<string, string>): Promise<void> {
    if (!this.accessToken) {
      await this.exchangeCode();
    } else if (this.isExpired()) {
      await this.refreshAccessToken();
    }

    headers["Authorization"] = `Bearer ${this.accessToken}`;
  }
}
