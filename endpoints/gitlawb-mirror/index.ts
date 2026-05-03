// Gitlawb Mirror Handler Source
export default async function handler(req: Request, ctx?: any): Promise<Response> {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  const body = await req.json().catch(() => ({}));
  const { repoUrl } = body;
  if (!repoUrl) return new Response(JSON.stringify({ error: "repoUrl required" }), { status: 400 });

  if (ctx?.askAgent) {
    // Delegate mirroring to the agent via gl CLI
    ctx.askAgent(`ACTION: Mirror GitHub repository to Gitlawb.\nURL: ${repoUrl}\nTask: Run 'gl mirror ${repoUrl}'. Confirm when queued.`);
    return new Response(JSON.stringify({ status: "mirror-queued", repoUrl }), {
      headers: { "Content-Type": "application/json" }
    });
  }

  return new Response(JSON.stringify({ error: "Agent delegation unavailable" }), { status: 503 });
}

// Swarm Telemetry Handler Source
export default async function handler(req: Request, ctx?: any): Promise<Response> {
  if (req.method !== "GET") return new Response("Method not allowed", { status: 405 });
  
  if (ctx?.appKV) {
    const telemetry = await ctx.appKV.list("swarm-telemetry").catch(() => []);
    return new Response(JSON.stringify({ status: "success", telemetry }), {
      headers: { "Content-Type": "application/json" }
    });
  }

  return new Response(JSON.stringify({ error: "Telemetry storage unavailable" }), { status: 503 });
}
