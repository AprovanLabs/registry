import { createHash } from "node:crypto";
import { mkdirSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import Database from "better-sqlite3";

export type ContentKind = "prompt" | "artifact";

export interface StoredContent {
  name: string;
  hash: string;
  content: string;
  mimeType: string;
  updatedAt: string;
}

export class ContentStore {
  private readonly database: Database.Database;

  constructor(directory = join(homedir(), ".aprovan")) {
    mkdirSync(directory, { recursive: true, mode: 0o700 });
    this.database = new Database(join(directory, "gateway.db"));
    this.database.exec(`
      CREATE TABLE IF NOT EXISTS content (
        kind TEXT NOT NULL,
        workspace_id TEXT NOT NULL,
        name TEXT NOT NULL,
        hash TEXT NOT NULL,
        content TEXT NOT NULL,
        mime_type TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        PRIMARY KEY(kind, workspace_id, name, hash)
      );
      CREATE INDEX IF NOT EXISTS content_latest
      ON content(kind, workspace_id, name, updated_at DESC);
    `);
  }

  list(kind: ContentKind, workspaceId: string): StoredContent[] {
    const rows = this.database
      .prepare(
        `SELECT name, hash, content, mime_type, updated_at FROM content
         WHERE kind = ? AND workspace_id = ? ORDER BY name, updated_at DESC`,
      )
      .all(kind, workspaceId) as Record<string, unknown>[];
    return rows.map((row) => this.record(row));
  }

  get(
    kind: ContentKind,
    workspaceId: string,
    name: string,
    hash?: string,
  ): StoredContent | undefined {
    const row = hash
      ? this.database
          .prepare(
            `SELECT name, hash, content, mime_type, updated_at FROM content
             WHERE kind = ? AND workspace_id = ? AND name = ? AND hash = ?`,
          )
          .get(kind, workspaceId, name, hash)
      : this.database
          .prepare(
            `SELECT name, hash, content, mime_type, updated_at FROM content
             WHERE kind = ? AND workspace_id = ? AND name = ?
             ORDER BY updated_at DESC LIMIT 1`,
          )
          .get(kind, workspaceId, name);
    return row
      ? this.record(row as Record<string, unknown>)
      : undefined;
  }

  put(
    kind: ContentKind,
    workspaceId: string,
    name: string,
    content: string,
    mimeType = "text/plain",
  ): StoredContent {
    const hash = createHash("sha256").update(content).digest("hex");
    const updatedAt = new Date().toISOString();
    this.database
      .prepare(
        `INSERT OR REPLACE INTO content
         (kind, workspace_id, name, hash, content, mime_type, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(kind, workspaceId, name, hash, content, mimeType, updatedAt);
    return { name, hash, content, mimeType, updatedAt };
  }

  private record(row: Record<string, unknown>): StoredContent {
    return {
      name: String(row["name"]),
      hash: String(row["hash"]),
      content: String(row["content"]),
      mimeType: String(row["mime_type"]),
      updatedAt: String(row["updated_at"]),
    };
  }
}

let store: ContentStore | undefined;
export const getContentStore = (): ContentStore => (store ??= new ContentStore());
