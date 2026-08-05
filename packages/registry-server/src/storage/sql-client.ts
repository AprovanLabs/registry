/**
 * Minimal async SQL client seam shared by every driver (tech-plan D8).
 *
 * The store implementations are written once against this interface;
 * `sqlite` (better-sqlite3, sync under the hood), `libsql` (@libsql/client),
 * and `dsql` (node-postgres) each provide an adapter. Queries use `?`
 * placeholders; the postgres adapter rewrites them to `$n`.
 */

import { mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

export interface SqlClient {
  /** DDL / multi-statement execution. */
  exec(sql: string): Promise<void>;
  all<T = Record<string, unknown>>(sql: string, params?: unknown[]): Promise<T[]>;
  run(sql: string, params?: unknown[]): Promise<{ changes: number }>;
  /**
   * Run `fn` inside BEGIN/COMMIT — ROLLBACK and rethrow on failure. `fn`
   * receives a client scoped to the transaction's connection; every read/write
   * inside `fn` MUST go through it, not the outer client, or (dsql) it will
   * run on a different pooled connection outside the transaction.
   */
  transaction<T>(fn: (tx: SqlClient) => Promise<T>): Promise<T>;
  close(): Promise<void>;
}

/**
 * Serializes transactions on a single logical connection (sqlite/libsql):
 * both drivers have exactly one connection, so concurrent `BEGIN`s from
 * different requests would nest and error. A tiny FIFO mutex is enough —
 * writes are not the hot path.
 */
function createTransactionMutex(): <T>(fn: () => Promise<T>) => Promise<T> {
  let queue: Promise<unknown> = Promise.resolve();
  return function withLock<T>(fn: () => Promise<T>): Promise<T> {
    const result = queue.then(fn, fn);
    queue = result.then(
      () => undefined,
      () => undefined,
    );
    return result;
  };
}

/** Thrown so domain layers can turn constraint hits into friendly errors. */
export class UniqueConstraintError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UniqueConstraintError";
  }
}

function isUniqueViolation(err: unknown): boolean {
  const message = err instanceof Error ? err.message : String(err);
  return (
    /UNIQUE constraint failed/iu.test(message) || // sqlite / libsql
    /duplicate key value violates unique constraint/iu.test(message) // postgres / dsql
  );
}

function wrapConstraint(err: unknown): never {
  if (isUniqueViolation(err)) {
    throw new UniqueConstraintError(err instanceof Error ? err.message : String(err));
  }
  throw err;
}

// ---------------------------------------------------------------------------
// sqlite (better-sqlite3)
// ---------------------------------------------------------------------------

const loadBetterSqlite = (): typeof import("better-sqlite3") => {
  const req = typeof require === "function" ? require : createRequire(import.meta.url);
  return req("better-sqlite3");
};

export function createSqliteClient(options: { url?: string; dir?: string }): SqlClient {
  const file =
    options.url?.replace(/^file:/u, "") ??
    join(options.dir ?? join(process.cwd(), ".registry"), "registry.db");
  if (file !== ":memory:") {
    mkdirSync(dirname(file), { recursive: true, mode: 0o700 });
  }
  const Database = loadBetterSqlite();
  const db = new Database(file);
  db.pragma("journal_mode = WAL");
  const withLock = createTransactionMutex();
  const client: SqlClient = {
    async exec(sql) {
      db.exec(sql);
    },
    async all<T>(sql: string, params: unknown[] = []): Promise<T[]> {
      return db.prepare(sql).all(...params) as T[];
    },
    async run(sql, params = []) {
      try {
        const info = db.prepare(sql).run(...params);
        return { changes: info.changes };
      } catch (err) {
        wrapConstraint(err);
      }
    },
    transaction(fn) {
      return withLock(async () => {
        db.exec("BEGIN");
        try {
          const result = await fn(client);
          db.exec("COMMIT");
          return result;
        } catch (err) {
          try {
            db.exec("ROLLBACK");
          } catch {
            // Nothing to roll back (e.g. the failure happened before BEGIN took).
          }
          throw err;
        }
      });
    },
    async close() {
      db.close();
    },
  };
  return client;
}

// ---------------------------------------------------------------------------
// libsql (@libsql/client — optional dependency, loaded on demand)
// ---------------------------------------------------------------------------

interface LibsqlClientLike {
  executeMultiple(sql: string): Promise<unknown>;
  execute(stmt: { sql: string; args: unknown[] }): Promise<{
    rows: Array<Record<string, unknown>>;
    rowsAffected: number;
  }>;
  close(): void;
}

export async function createLibsqlClient(options: { url?: string; dir?: string }): Promise<SqlClient> {
  let mod: { createClient(config: { url: string }): LibsqlClientLike };
  try {
    mod = (await import("@libsql/client" as string)) as unknown as {
      createClient(config: { url: string }): LibsqlClientLike;
    };
  } catch {
    throw new Error(
      'storage.driver "libsql" requires the @libsql/client package — install it, or use driver "sqlite".',
    );
  }
  const url =
    options.url ?? `file:${join(options.dir ?? join(process.cwd(), ".registry"), "registry.db")}`;
  if (url.startsWith("file:")) {
    mkdirSync(dirname(url.slice("file:".length)), { recursive: true, mode: 0o700 });
  }
  const client = mod.createClient({ url });
  const withLock = createTransactionMutex();
  const sqlClient: SqlClient = {
    async exec(sql) {
      await client.executeMultiple(sql);
    },
    async all<T>(sql: string, params: unknown[] = []): Promise<T[]> {
      const result = await client.execute({ sql, args: params });
      return result.rows.map((row) => ({ ...row })) as T[];
    },
    async run(sql, params = []) {
      try {
        const result = await client.execute({ sql, args: params });
        return { changes: result.rowsAffected };
      } catch (err) {
        wrapConstraint(err);
      }
    },
    transaction(fn) {
      return withLock(async () => {
        await client.execute({ sql: "BEGIN", args: [] });
        try {
          const result = await fn(sqlClient);
          await client.execute({ sql: "COMMIT", args: [] });
          return result;
        } catch (err) {
          try {
            await client.execute({ sql: "ROLLBACK", args: [] });
          } catch {
            // Nothing to roll back (e.g. the failure happened before BEGIN took).
          }
          throw err;
        }
      });
    },
    async close() {
      client.close();
    },
  };
  return sqlClient;
}

// ---------------------------------------------------------------------------
// dsql (postgres dialect via node-postgres — optional dependency)
// ---------------------------------------------------------------------------

/** Rewrite `?` placeholders to postgres `$n`. Registry SQL contains no literal `?`. */
export function toPgPlaceholders(sql: string): string {
  let index = 0;
  return sql.replace(/\?/gu, () => `$${++index}`);
}

export async function createDsqlClient(options: { url: string }): Promise<SqlClient> {
  let pg: { Pool: new (config: { connectionString: string }) => PgPoolLike };
  try {
    pg = (await import("pg" as string)) as unknown as {
      Pool: new (config: { connectionString: string }) => PgPoolLike;
    };
  } catch {
    throw new Error('storage.driver "dsql" requires the pg package — install it in the host.');
  }
  const pool = new pg.Pool({ connectionString: options.url });
  return {
    async exec(sql) {
      await pool.query(sql);
    },
    async all<T>(sql: string, params: unknown[] = []): Promise<T[]> {
      const result = await pool.query(toPgPlaceholders(sql), params);
      return result.rows as T[];
    },
    async run(sql, params = []) {
      try {
        const result = await pool.query(toPgPlaceholders(sql), params);
        return { changes: result.rowCount ?? 0 };
      } catch (err) {
        wrapConstraint(err);
      }
    },
    // `pool.query()` grabs an arbitrary connection per call — BEGIN and the
    // statements inside `fn` must pin ONE checked-out connection, or they
    // land on different backends and the "transaction" is a no-op.
    async transaction<T>(fn: (tx: SqlClient) => Promise<T>): Promise<T> {
      const conn = await pool.connect();
      try {
        await conn.query("BEGIN");
        const tx: SqlClient = {
          async exec(sql) {
            await conn.query(sql);
          },
          async all<U>(sql: string, params: unknown[] = []): Promise<U[]> {
            const result = await conn.query(toPgPlaceholders(sql), params);
            return result.rows as U[];
          },
          async run(sql, params = []) {
            try {
              const result = await conn.query(toPgPlaceholders(sql), params);
              return { changes: result.rowCount ?? 0 };
            } catch (err) {
              wrapConstraint(err);
            }
          },
          async transaction() {
            throw new Error("nested transactions are not supported");
          },
          async close() {
            // The outer client owns the pool; a nested close is a no-op.
          },
        };
        const result = await fn(tx);
        await conn.query("COMMIT");
        return result;
      } catch (err) {
        await conn.query("ROLLBACK").catch(() => undefined);
        throw err;
      } finally {
        conn.release();
      }
    },
    async close() {
      await pool.end();
    },
  };
}

interface PgConnectionLike {
  query(sql: string, params?: unknown[]): Promise<{ rows: unknown[]; rowCount: number | null }>;
  release(): void;
}

interface PgPoolLike {
  query(sql: string, params?: unknown[]): Promise<{ rows: unknown[]; rowCount: number | null }>;
  connect(): Promise<PgConnectionLike>;
  end(): Promise<void>;
}
