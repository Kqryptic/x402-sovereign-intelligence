export default async function handler(req: Request, ctx: any) {
  const mockData = {
    simulationId: 'SWARM-SIM-2026-05-04-PROD',
    timestamp: new Date().toISOString(),
    accuracy: '94.12%',
    avgWeight: '0.500000',
    hlWeight: 0.6450,
    avantisWeight: 0.3550,
    status: 'OPERATIONAL'
  };

  try {
    const history = await ctx.appKV.get('swarm-dashboard', 'evolution_lattice_history').catch(() => null);
    if (history && history.length > 0) {
      const latest = history[history.length - 1];
      return Response.json({ ...latest, source: 'live' });
    }
  } catch (e) {}

  return Response.json({ ...mockData, source: 'mock' });
}