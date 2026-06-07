import type { APIRoute } from "astro";

export const POST: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      error: "Authentication is not yet configured. Complete Phase 2 migration to enable parent login.",
    }),
    { status: 501, headers: { "Content-Type": "application/json" } }
  );
};
