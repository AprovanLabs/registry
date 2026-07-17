/**
 * Integration tests for the S3+DynamoDB workspace-fs backend.
 *
 * Requires the local compose stack (`docker compose up -d` at the repo
 * root): DynamoDB at `DYNAMO_ENDPOINT` (default http://localhost:8000) and
 * MinIO at `S3_ENDPOINT` (default http://localhost:9000). Skipped
 * automatically when either endpoint is unreachable so the suite stays
 * green without Docker.
 */

import {
  CreateTableCommand,
  DeleteTableCommand,
  DynamoDBClient,
  waitUntilTableExists,
} from "@aws-sdk/client-dynamodb";
import { CreateBucketCommand, S3Client } from "@aws-sdk/client-s3";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";
import { resetDynamoDocClient } from "../src/db/client.js";
import { FsFiles } from "../src/db/schema.js";
import { resetFsStore, resetS3Client } from "../src/fs-store.js";

const TABLE_NAME = "FsFiles-test";
const BUCKET = "aprovan-fs-test";
const DYNAMO_ENDPOINT = process.env["DYNAMO_ENDPOINT"] ?? "http://localhost:8000";
const S3_ENDPOINT = process.env["S3_ENDPOINT"] ?? "http://localhost:9000";

let ready = false;

try {
  await provision();
  ready = true;
} catch (err) {
  process.stderr.write(
    `[fs-s3] skipping suite — compose stack unreachable (${
      err instanceof Error ? `${err.name}: ${err.message || "unknown"}` : String(err)
    })\n`,
  );
}

async function provision(): Promise<void> {
  const dynamo = new DynamoDBClient({
    endpoint: DYNAMO_ENDPOINT,
    region: "us-east-1",
    credentials: { accessKeyId: "local", secretAccessKey: "local" },
  });
  try {
    await dynamo.send(new DeleteTableCommand({ TableName: TABLE_NAME }));
  } catch {
    // Table absent — fine.
  }
  await dynamo.send(
    new CreateTableCommand({ ...FsFiles.createInput, TableName: TABLE_NAME }),
  );
  await waitUntilTableExists(
    { client: dynamo, maxWaitTime: 30, minDelay: 1 },
    { TableName: TABLE_NAME },
  );

  const s3 = new S3Client({
    endpoint: S3_ENDPOINT,
    region: "us-east-1",
    forcePathStyle: true,
    credentials: { accessKeyId: "minioadmin", secretAccessKey: "minioadmin" },
  });
  try {
    await s3.send(new CreateBucketCommand({ Bucket: BUCKET }));
  } catch (err) {
    const name = err instanceof Error ? err.name : "";
    if (name !== "BucketAlreadyOwnedByYou" && name !== "BucketAlreadyExists") throw err;
  }
}

const request = (path: string, init?: RequestInit) =>
  createApp().request(path, init);

const put = (path: string, content: string) =>
  request(`/fs/${path}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });

describe.skipIf(!ready)("workspace filesystem (S3+DynamoDB backend)", () => {
  beforeAll(() => {
    process.env["STORE_BACKEND"] = "dynamodb";
    process.env["DYNAMO_ENDPOINT"] = DYNAMO_ENDPOINT;
    process.env["S3_ENDPOINT"] = S3_ENDPOINT;
    process.env["FS_TABLE"] = TABLE_NAME;
    process.env["FS_BUCKET"] = BUCKET;
    resetDynamoDocClient();
    resetS3Client();
    resetFsStore();
  });

  afterAll(() => {
    delete process.env["FS_TABLE"];
    delete process.env["FS_BUCKET"];
    delete process.env["S3_ENDPOINT"];
    resetDynamoDocClient();
    resetS3Client();
    resetFsStore();
  });

  it("writes and reads a file back", async () => {
    const written = await put("widgets/timer/main.tsx", "export default 1;");
    expect(written.status).toBe(201);
    const { hash } = (await written.json()) as { hash: string };

    const read = await request("/fs/widgets/timer/main.tsx");
    expect(read.status).toBe(200);
    expect(await read.json()).toMatchObject({
      path: "widgets/timer/main.tsx",
      content: "export default 1;",
      hash,
    });
  });

  it("keeps hash-pinned history across rewrites", async () => {
    const first = (await (await put("notes.md", "v1")).json()) as { hash: string };
    const second = (await (await put("notes.md", "v2")).json()) as { hash: string };
    expect(first.hash).not.toBe(second.hash);

    const latest = await request("/fs/notes.md");
    expect(((await latest.json()) as { content: string }).content).toBe("v2");

    const pinned = await request(`/fs/notes.md?hash=${first.hash}`);
    expect(((await pinned.json()) as { content: string }).content).toBe("v1");
  });

  it("lists a subtree without over-matching partial segments", async () => {
    await put("widgets/clock/main.tsx", "clock");
    await put("widgetsized/other.txt", "nope");

    const response = await request("/fs?prefix=widgets");
    const { entries } = (await response.json()) as {
      entries: Array<{ path: string }>;
    };
    const paths = entries.map((entry) => entry.path);
    expect(paths).toContain("widgets/clock/main.tsx");
    expect(paths).toContain("widgets/timer/main.tsx");
    expect(paths).not.toContain("widgetsized/other.txt");
  });

  it("deletes a file and a subtree", async () => {
    await put("tmp/a.txt", "a");
    await put("tmp/b/c.txt", "c");

    const single = await request("/fs/tmp/a.txt", { method: "DELETE" });
    expect(single.status).toBe(204);
    expect((await request("/fs/tmp/a.txt")).status).toBe(404);

    const subtree = await request("/fs/tmp?recursive=1", { method: "DELETE" });
    expect(subtree.status).toBe(204);
    expect((await request("/fs/tmp/b/c.txt")).status).toBe(404);
  });

  it("uploads a blob via presigned PUT and registers it", async () => {
    const content = "binary-ish payload";
    const hash = await sha256Hex(content);

    const ticketResponse = await request("/fs-uploads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hash, mimeType: "text/plain" }),
    });
    expect(ticketResponse.status).toBe(201);
    const ticket = (await ticketResponse.json()) as {
      url: string;
      headers: Record<string, string>;
    };

    const uploaded = await fetch(ticket.url, {
      method: "PUT",
      headers: ticket.headers,
      body: content,
    });
    expect(uploaded.ok).toBe(true);

    const completed = await request("/fs-uploads/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "data/upload.txt", hash, mimeType: "text/plain" }),
    });
    expect(completed.status).toBe(201);

    const read = await request("/fs/data/upload.txt");
    expect(((await read.json()) as { content: string }).content).toBe(content);
  });

  it("404s completion for a hash that was never uploaded", async () => {
    const response = await request("/fs-uploads/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "data/missing.txt", hash: "0".repeat(64) }),
    });
    expect(response.status).toBe(404);
  });
});

async function sha256Hex(content: string): Promise<string> {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(content),
  );
  return [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}
