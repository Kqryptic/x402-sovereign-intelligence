# Digest: ATLAS - Self-Improving AI Trading Agents
Source: https://github.com/chrisworsey55/atlas-gic

## Technical Architecture
- **Core Engine**: Self-improving prompts optimized via market feedback (Sharpe ratio = loss function).
- **Orchestration Layers**:
  - **Layer 1 (Macro)**: 10 agents (Geopolitics, Yield Curve, China, etc.) setting the regime.
  - **Layer 2 (Sector)**: 7 agents (Semiconductors, Energy, Biotech, etc.) + Relationship Mapper.
  - **Layer 3 (Superinvestors)**: 4 agents (Druckenmiller, Aschenbrenner, Baker, Ackman).
  - **Layer 4 (Decision)**: CRO (Adversarial Risk), Alpha Discovery, Execution, CIO (Synthesis).
- **Darwinian Weights**: Agents weighted 0.3 to 2.5 based on daily performance. Top quartile gets +5% weight, bottom -5%.
- **Agent Spawning**: Autonomously creates new specialist agents when knowledge gaps are detected 3+ times in 5 days.
- **PRISM (All Seasons)**: Regime-specific training cohorts (Bull, Crisis, Rate Tightening, Euphoria).
- **JANUS Meta-Layer**: Emergent regime detector that weights cohorts by recent accuracy.
- **Soros Reflexivity Engine**: Models 5 feedback loops (Price -> Fundamentals, P&L -> Behavior, Narrative -> Flows, Market -> Policy, Reversal Detection).
- **MiroFish Integration**: Swarm simulation for training on branching "simulated futures" scenarios.

## Strategic Insights
- **Prompt-as-Weights**: Optimization happens at the prompt level, requiring minimal compute ($20/month VM) vs. GPU-heavy training.
- **Convergent Evolution**: Different cohorts independently discovered identical risk management rules (cap conviction, VIX filters).
- **Orchestration Bottleneck**: Individual agent intelligence is secondary to how signals are synthesized and sized (CIO layer).
- **Reflexivity**: Markets are treated as active feedback loops, not static data sources.
