# GOAT SDK Mastery: The Agentic Finance Layer

## Architecture
GOAT (Great Onchain Agent Toolkit) decouples the **Wallet** (execution) from the **Tools** (logic) and the **Framework** (interface).

### 1. Wallet Layer
- **EVM**: `@goat-sdk/wallet-viem` (preferred for Bankr/Base).
- **Solana**: `@goat-sdk/wallet-solana`.

### 2. Plugin Layer (The "Hands")
High-value plugins for Bankr integration:
- **DeFi**: `uniswap`, `jupiter`, `1inch`, `0x`, `balancer`, `velodrome`.
- **Data**: `coingecko`, `dexscreener`, `birdeye`.
- **Infrastructure**: `erc20`, `erc721`, `ens`.
- **Specialized**: `polymarket` (prediction), `allora` (inference).

### 3. Adapter Layer
- **MCP**: `@goat-sdk/adapter-model-context-protocol`. This allows any GOAT tool to be exposed as an MCP tool.

## Integration Workflow for Bankr
To add a new protocol capability:
1. Identify the GOAT plugin.
2. Use `execute_cli` to run a script that initializes the `viem` wallet with the user's private key (from env).
3. Call `getOnChainTools` with the plugin.
4. Execute the desired tool via the `toolHandler`.

### GOAT Harness Script (`/scripts/goat_harness.ts`)
I have scaffolded a universal harness that can be invoked via `execute_cli` to run any GOAT-supported action. This bypasses the need for custom tool development for every new protocol.

## Reference Implementation (MCP Server)
```typescript
import { getOnChainTools } from "@goat-sdk/adapter-model-context-protocol";
import { viem } from "@goat-sdk/wallet-viem";
import { uniswap } from "@goat-sdk/plugin-uniswap";

const tools = await getOnChainTools({
  wallet: viem(walletClient),
  plugins: [uniswap()],
});
```

## Strategic Value
GOAT allows Bankr to stop writing custom tool logic for every new protocol. Instead, we "plug in" the GOAT implementation and focus on the agentic orchestration.
