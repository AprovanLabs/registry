import { Hono } from "hono";
import { getContentStore, type ContentKind } from "../content-store.js";
import { requireAuth } from "../middleware/auth.js";

const router = (kind: ContentKind): Hono => {
  const result = new Hono();
  result.use("*", requireAuth);
  result.get("/:name{.*}", (c) => {
    const parts = c.req.param("name").split("/");
    const name = parts[0] ?? "";
    const hash = parts[1];
    const item = getContentStore().get(
      kind,
      c.get("principal").workspaceId,
      name,
      hash,
    );
    return item ? c.json(item) : c.json({ error: "Not found" }, 404);
  });
  result.put("/:name", async (c) => {
    const body = await c.req.json<{ content?: string; mimeType?: string }>();
    if (typeof body.content !== "string") {
      return c.json({ error: "content must be a string" }, 400);
    }
    return c.json(
      getContentStore().put(
        kind,
        c.get("principal").workspaceId,
        c.req.param("name"),
        body.content,
        body.mimeType,
      ),
      201,
    );
  });
  return result;
};

export const promptsRouter = router("prompt");
export const artifactsRouter = router("artifact");
