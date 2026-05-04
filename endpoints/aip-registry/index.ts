export default async function handler(req: Request, ctx?: any): Promise<Response> {
  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
    }

    const body = await req.json().catch(() => null);
    if (!body || !body.codeHash) {
      return new Response(JSON.stringify({ error: "JSON body with codeHash is required" }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const { codeHash } = body;
    const anchor = "0xdc965252d69fddad7c7a04dc1275b073147a8a8f";

    if (ctx?.appKV) {
      await ctx.appKV.set("aip-registry", `request_${Date.now()}`, {
        codeHash,
        timestamp: new Date().toISOString(),
        status: "initiated"
      }).catch(err => console.error("AppKV log failed:", err));
    }

    if (ctx?.askAgent) {
      void ctx.askAgent(
        `ACTION: Anchor Agentic IP codeHash to GraphMind v1.5.\n` +
        `Contract: ${anchor}\n` +
        `CodeHash: ${codeHash}\n` +
        `Task: Call anchorRepository on the GraphMind contract. Confirm when done.`
      ).catch(err => console.error("Agent delegation failed:", err));
    }

    return new Response(JSON.stringify({
      status: "success",
      message: "AIP registration initiated and queued for GraphMind anchoring.",
      data: {
        codeHash,
        anchor,
        network: "base"
      }
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("AIP Registry Error:", error);
    return new Response(JSON.stringify({ 
      error: "Internal server error", 
      details: error.message 
    }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}