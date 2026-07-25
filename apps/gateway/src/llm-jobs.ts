/**
 * LLM completion job records.
 *
 * Widget-edit completions run 1–2 minutes; mobile browsers kill the fetch the
 * moment the screen locks or the tab backgrounds, even though the gateway and
 * the upstream model keep going. A job record is how the result survives
 * that: the streaming route (`POST /llm/:provider/completions`, see
 * src/routes/llm.ts) persists the accumulated text here as it consumes the
 * upstream stream, independent of whether the client is still attached, and
 * `GET /llm/jobs/:id` lets a client that lost its connection pick the result
 * back up by polling.
 *
 * Records live at `.services/llm-jobs/<id>.json` in the caller's workspace,
 * through the workspace fs (see src/fs-store.ts) — so cross-workspace access
 * is denied for free by the same partitioning every other `.services/**`
 * store relies on (see isServicePath in fs-store.ts).
 */

import { getFsStore } from "./fs-store.js";

const JOBS_PREFIX = ".services/llm-jobs/";

export type LlmJobStatus = "running" | "succeeded" | "failed";

export interface LlmJobRecord {
  id: string;
  status: LlmJobStatus;
  provider: string;
  model?: string;
  /** Accumulated completion text so far (final text once terminal). */
  text: string;
  error?: string;
  createdAt: string;
  updatedAt: string;
}

function jobPath(id: string): string {
  return `${JOBS_PREFIX}${id}.json`;
}

export async function readLlmJob(workspaceId: string, id: string): Promise<LlmJobRecord | undefined> {
  const file = await getFsStore().read(workspaceId, jobPath(id)).catch(() => undefined);
  if (!file) return undefined;
  try {
    return JSON.parse(file.content) as LlmJobRecord;
  } catch {
    return undefined;
  }
}

export async function writeLlmJob(workspaceId: string, record: LlmJobRecord): Promise<void> {
  await getFsStore().write(workspaceId, jobPath(record.id), JSON.stringify(record, null, 2), "application/json");
}
