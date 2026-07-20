/**
 * Provider webhook registrations — stable inbound URLs that external
 * products (GitHub, Figma, Stripe, …) deliver events to, fanning out to the
 * workspace's workflows.
 *
 * A registration is workspace-level by default, or user-level (`level:
 * "user"`) when the provider subscription belongs to one member's account.
 * Each registration mints an inbound token; deliveries authenticate with
 * that token (`?token=` / `X-Hook-Token`) or, when configured, with the
 * provider's own HMAC signature (e.g. GitHub's `X-Hub-Signature-256`) —
 * which is the stronger option since it authenticates the payload itself.
 *
 * Stored at `.services/webhooks/<id>.json` in the workspace FS. Delivery
 * stats are written back so the registry UI can show whether a webhook is
 * actually wired up and firing.
 */

import { getFsStore } from "../fs-store.js";
import { ServiceError } from "../services.js";

const WEBHOOKS_PREFIX = ".services/webhooks/";

export interface WebhookSignature {
  /** Header carrying the provider's signature (e.g. "X-Hub-Signature-256"). */
  header: string;
  /** HMAC scheme over the raw request body. */
  scheme: "hmac-sha256" | "hmac-sha1";
  /** Shared secret configured at the provider. */
  secret: string;
}

export interface WebhookRegistration {
  /** Stable id, also the inbound URL path segment. */
  id: string;
  /** Registry provider id this hook receives events from (e.g. "github"). */
  provider: string;
  description?: string;
  /**
   * "workspace" (default) — a shared subscription owned by the workspace;
   * "user" — tied to one member's provider account.
   */
  level: "workspace" | "user";
  /** The owning member when level is "user". */
  userId?: string;
  /** Provider event names this registration expects (informational filter). */
  events?: string[];
  /** Workflow names triggered by each delivery. */
  workflows: string[];
  /** Inbound token; deliveries must present it unless a signature verifies. */
  token: string;
  signature?: WebhookSignature;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  /** Delivery stats (validation surface for the UI). */
  deliveryCount?: number;
  lastDeliveryAt?: string;
  lastEvent?: string;
  lastError?: string;
}

const ID_RE = /^[a-z0-9][a-z0-9-]{0,63}$/u;

export function webhookId(value: unknown): string {
  if (typeof value !== "string" || !ID_RE.test(value)) {
    throw new ServiceError(`webhook id must match ${ID_RE}`, 400);
  }
  return value;
}

function registrationPath(id: string): string {
  return `${WEBHOOKS_PREFIX}${id}.json`;
}

export async function saveWebhook(
  workspaceId: string,
  registration: WebhookRegistration,
): Promise<void> {
  await getFsStore().write(
    workspaceId,
    registrationPath(registration.id),
    JSON.stringify(registration, null, 2),
    "application/json",
  );
}

export async function readWebhook(
  workspaceId: string,
  id: string,
): Promise<WebhookRegistration | undefined> {
  const file = await getFsStore().read(workspaceId, registrationPath(id));
  return file ? (JSON.parse(file.content) as WebhookRegistration) : undefined;
}

export async function listWebhooks(workspaceId: string): Promise<WebhookRegistration[]> {
  const entries = await getFsStore().list(workspaceId, WEBHOOKS_PREFIX.slice(0, -1));
  const ids = entries
    .map((entry) => entry.path)
    .filter((path) => path.startsWith(WEBHOOKS_PREFIX) && path.endsWith(".json"))
    .map((path) => path.slice(WEBHOOKS_PREFIX.length, -".json".length))
    .filter((id) => !id.includes("/"));
  const registrations = await Promise.all(ids.map((id) => readWebhook(workspaceId, id)));
  return registrations.filter((r): r is WebhookRegistration => Boolean(r));
}

export async function removeWebhook(workspaceId: string, id: string): Promise<boolean> {
  return getFsStore().remove(workspaceId, registrationPath(id));
}

/** The public inbound path for a registration (mounted before Cognito auth). */
export function webhookHookPath(workspaceId: string, id: string): string {
  return `/hooks/${workspaceId}/webhooks/${id}`;
}
