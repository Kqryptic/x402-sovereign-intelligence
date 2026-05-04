const registry = await appKV.get("agent_registry") || "[]";
const telemetry = await appKV.get("marketplace_telemetry") || "{}";

return {
  agents: JSON.parse(registry),
  telemetry: JSON.parse(telemetry),
  timestamp: Date.now(),
  network: "netprotocol-mainnet"
};