import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base } from "viem/chains";
import { viem } from "@goat-sdk/wallet-viem";
import { getOnChainTools } from "@goat-sdk/core";

// Dynamically import plugins based on input
async function getPlugins(pluginNames: string[]) {
    const plugins = [];
    for (const name of pluginNames) {
        const { [name]: plugin } = await import(`@goat-sdk/plugin-${name}`);
        plugins.push(plugin());
    }
    return plugins;
}

async function runGoatAction(pluginNames: string[], toolName: string, args: any) {
    const account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY as `0x${string}`);
    const walletClient = createWalletClient({
        account,
        chain: base,
        transport: http(process.env.RPC_PROVIDER_URL),
    });

    const plugins = await getPlugins(pluginNames);
    const { toolHandler } = await getOnChainTools({
        wallet: viem(walletClient),
        plugins,
    });

    const result = await toolHandler(toolName, args);
    console.log(JSON.stringify(result, null, 2));
}

const [,, pluginsJson, toolName, argsJson] = process.argv;
runGoatAction(JSON.parse(pluginsJson), toolName, JSON.parse(argsJson)).catch(console.error);
