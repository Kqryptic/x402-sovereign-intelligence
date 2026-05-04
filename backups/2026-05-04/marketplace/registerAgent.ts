const { did, endpoint, price, metadata } = args;

if (!did || !endpoint) {
  throw new Error("DID and Endpoint are required for registration.");
}

let registry = [];
const existing = await appKV.get("agent_registry");
if (existing) registry = JSON.parse(existing);

const newAgent = {
  did,
  endpoint,
  price: price || "0",
  metadata: metadata || {},
  status: "active",
  lastSeen: Date.now()
};

const index = registry.findIndex(a => a.did === did);
if (index !== -1) {
  registry[index] = newAgent;
} else {
  registry.push(newAgent);
}

await appKV.set("agent_registry", JSON.stringify(registry));

let telemetry = await appKV.get("marketplace_telemetry") || "{\"totalAgents\": 0}";
telemetry = JSON.parse(telemetry);
telemetry.totalAgents = registry.length;
telemetry.lastUpdate = Date.now();
await appKV.set("marketplace_telemetry", JSON.stringify(telemetry));

return { success: true, agent: newAgent };