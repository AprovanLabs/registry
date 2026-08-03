/// <reference types="astro/client" />
/// <reference types="vite-plugin-pwa/info" />
/// <reference types="vite-plugin-pwa/vanillajs" />

interface ImportMetaEnv {
  readonly PUBLIC_GATEWAY_URL?: string;
  /** `hosted` | `standalone` (default `standalone`). */
  readonly PUBLIC_SESSION_MODE?: "hosted" | "standalone";
  readonly PUBLIC_COGNITO_AUTHORITY?: string;
  readonly PUBLIC_COGNITO_CLIENT_ID?: string;
  readonly PUBLIC_COGNITO_DOMAIN?: string;
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_BASE_PATH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
