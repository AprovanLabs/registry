/**
 * `sessions` core service — chat sessions as a tool namespace
 * (docs/vcs-and-sessions.md). The PR-shaped surface: create/list/peek,
 * transcript append, rebase onto main, and close-with-stage.
 *
 * Member-only end to end: app sessions never see workspace chat history or
 * the VCS (`requireWorkspaceCaller` mirror in every op).
 */

import { ServiceError, type CoreService, type ServiceContext } from "../service-kernel.js";
import {
  appendMessages,
  changeSummary,
  closeSession,
  createSession,
  listSessions,
  readMessages,
  requireSession,
  sessionId,
  syncSession,
  updateSession,
  type ChatSessionRecord,
  type SessionMode,
  type SessionStatus,
} from "./chat-sessions.js";

function memberOnly(ctx: ServiceContext): void {
  if (ctx.appScope) throw new ServiceError("Chat sessions are workspace-only", 403);
}

function sessionMode(value: unknown): SessionMode | undefined {
  if (value === undefined) return undefined;
  if (value === "auto" || value === "staged") return value;
  throw new ServiceError('mode must be "auto" or "staged"', 400);
}

async function withChanges(
  workspaceId: string,
  session: ChatSessionRecord,
): Promise<Record<string, unknown>> {
  return { ...session, changes: await changeSummary(workspaceId, session) };
}

export const sessionsService: CoreService = {
  tools: [
    {
      name: "sessions.create",
      operation: "create",
      description:
        "Open a chat session. Auto-snapshots main as the session's base; mode 'staged' keeps file edits in a session overlay until staged to main, 'auto' (default) writes through.",
      inputSchema: {
        type: "object",
        properties: { title: { type: "string" }, mode: { type: "string", enum: ["auto", "staged"] } },
      },
    },
    {
      name: "sessions.list",
      operation: "list",
      description:
        "Chat sessions, newest first — the PR-style log: title, status (open|merged|closed), mode, base commit, staged-change summary, message count.",
      inputSchema: {
        type: "object",
        properties: { status: { type: "string", enum: ["open", "merged", "closed"] } },
      },
    },
    {
      name: "sessions.get",
      operation: "get",
      description: "One session with its staged-change summary vs base.",
      inputSchema: {
        type: "object",
        properties: { id: { type: "string" } },
        required: ["id"],
      },
    },
    {
      name: "sessions.messages",
      operation: "messages",
      description: "The session's full transcript.",
      inputSchema: {
        type: "object",
        properties: { id: { type: "string" } },
        required: ["id"],
      },
    },
    {
      name: "sessions.append",
      operation: "append",
      description:
        "Append transcript messages (idempotent per message id — re-sending a tail upserts).",
      inputSchema: {
        type: "object",
        properties: { id: { type: "string" }, messages: { type: "array" } },
        required: ["id", "messages"],
      },
    },
    {
      name: "sessions.update",
      operation: "update",
      description: "Update a session's title, mode, or saved tab layout.",
      inputSchema: {
        type: "object",
        properties: {
          id: { type: "string" },
          title: { type: "string" },
          mode: { type: "string", enum: ["auto", "staged"] },
          tabs: {},
        },
        required: ["id"],
      },
    },
    {
      name: "sessions.sync",
      operation: "sync",
      description:
        "Rebase the session's base onto the current main head. Overlay is preserved; paths where main moved under a staged edit are returned as conflicts.",
      inputSchema: {
        type: "object",
        properties: { id: { type: "string" } },
        required: ["id"],
      },
    },
    {
      name: "sessions.close",
      operation: "close",
      description:
        "Close a session. stage=true applies its staged overlay to main as a merge commit; otherwise the session is archived (overlay stays peekable).",
      inputSchema: {
        type: "object",
        properties: {
          id: { type: "string" },
          stage: { type: "boolean" },
          message: { type: "string" },
        },
        required: ["id"],
      },
    },
  ],

  async call(ctx, procedure, args) {
    memberOnly(ctx);
    switch (procedure) {
      case "create": {
        const session = await createSession(ctx.workspaceId, ctx.userId, {
          title: typeof args["title"] === "string" ? args["title"] : undefined,
          mode: sessionMode(args["mode"]),
        });
        return { session };
      }
      case "list": {
        const status =
          args["status"] === "open" || args["status"] === "merged" || args["status"] === "closed"
            ? (args["status"] as SessionStatus)
            : undefined;
        const sessions = await listSessions(ctx.workspaceId, status);
        return {
          sessions: await Promise.all(
            sessions.map((session) => withChanges(ctx.workspaceId, session)),
          ),
        };
      }
      case "get": {
        const session = await requireSession(ctx.workspaceId, sessionId(args["id"]));
        return { session: await withChanges(ctx.workspaceId, session) };
      }
      case "messages": {
        const id = sessionId(args["id"]);
        await requireSession(ctx.workspaceId, id);
        return { messages: await readMessages(ctx.workspaceId, id) };
      }
      case "append": {
        if (!Array.isArray(args["messages"])) {
          throw new ServiceError("messages must be an array", 400);
        }
        const session = await appendMessages(
          ctx.workspaceId,
          sessionId(args["id"]),
          args["messages"],
        );
        return { session };
      }
      case "update": {
        const session = await updateSession(ctx.workspaceId, sessionId(args["id"]), {
          title: typeof args["title"] === "string" ? args["title"] : undefined,
          mode: sessionMode(args["mode"]),
          tabs: args["tabs"],
        });
        return { session };
      }
      case "sync": {
        const { session, conflicts } = await syncSession(
          ctx.workspaceId,
          sessionId(args["id"]),
          ctx.userId,
        );
        return { session: await withChanges(ctx.workspaceId, session), conflicts };
      }
      case "close": {
        const { session, commit } = await closeSession(
          ctx.workspaceId,
          sessionId(args["id"]),
          ctx.userId,
          {
            stage: args["stage"] === true,
            message: typeof args["message"] === "string" ? args["message"] : undefined,
          },
        );
        return { session, ...(commit ? { commit } : {}) };
      }
      default:
        throw new ServiceError(`Unknown sessions procedure: ${procedure}`, 404);
    }
  },
};
